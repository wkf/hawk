(ns hawk.core
  (:require [clojure.java.io :as io]
            [hawk.watcher :refer [new-watcher] :as watcher])
  (:import [java.nio.file Path]
           [java.io File]))

(set! *warn-on-reflection* true)

(defn catch-errors [f]
  (fn [& args]
    (try
      (apply f args)
      (catch Throwable e
        (.printStackTrace e)))))

(defn extract-paths-by-type [{:keys [paths] :as spec}]
  (merge spec
         (->> paths
              (map #(-> % io/file .getCanonicalFile))
              (group-by #(if (.isFile ^File %) :files :directories)))))

(defn process-paths [{:keys [files directories] :as spec}]
  (assoc spec :paths
         (concat
           (map #(.toPath ^File %) directories)
           (map #(-> ^File % .getParentFile .toPath) files))))

(defn process-context [spec]
  (assoc spec :context
         (catch-errors
           (or (:context spec) identity))))

(defn process-handler [{:keys [files paths] :as spec}]
  (assoc spec :handler
         (catch-errors
           (fn [ctx {:keys [^File file kind] :as e}]
             (let [path ^Path (.toPath file)]
               (if (and
                     (some #(.startsWith path ^Path %) paths)
                     (or (empty? files)
                         (some (partial = file) files))
                     (or (not (:filter spec))
                         ((:filter spec) ctx e)))
                 (do
                   ((:handler spec) ctx e))
                 ctx))))))

(defn remove-duplicate-paths [paths]
  (seq
    (apply
      sorted-set-by #(.compareTo ^Path %1 ^Path %2) paths)))

(defn remove-children-paths [paths]
  (loop [a []
         [p & ps] paths]
    (cond
      (seq ps) (recur
                 (conj a p)
                 (remove #(.startsWith ^Path % ^Path p) ps))
      p (conj a p)
      :else a)))

(defn watch! [opts & groups]
  (let [[opts
         groups] (if (map? opts) [opts groups] [{} (cons opts groups)])
        watcher (-> opts new-watcher)
        specs (mapcat
                (fn [specs]
                  (let [a (agent {})]
                    (map (fn [spec]
                           (-> spec
                               extract-paths-by-type
                               process-paths
                               process-context
                               (update-in [:context] #(partial send-off a %))
                               process-handler
                               (update-in [:handler] #(partial send-off a %))))
                         specs)))
                groups)
        paths (-> (mapcat :paths specs)
                  remove-duplicate-paths
                  remove-children-paths)
        handler* (apply juxt (map :handler specs))
        context* (apply juxt (map :context specs))]
    (context*)
    (doseq [path paths]
      (watcher/register! watcher path [:create :modify :delete]))
    {:thread (doto
               (Thread.
                 (fn []
                   (when-not
                     (empty?
                       (mapv handler* (watcher/take! watcher)))
                     (recur))))
               .start)
     :watcher watcher}))

(defn stop! [watch]
  (doto
    ^Thread (:thread watch) .interrupt .join)
  (-> watch :watcher watcher/stop!))

(defn file? [_ {:keys [file]}]
  (.isFile ^File file))

(defn directory? [_ {:keys [file]}]
  (.isDirectory ^File file))

(defn created? [_ {:keys [kind]}]
  (= kind :create))

(defn modified? [_ {:keys [kind]}]
  (= kind :modify))

(defn deleted? [_ {:keys [kind]}]
  (= kind :delete))
