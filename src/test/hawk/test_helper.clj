(ns hawk.test-helper
  (:require [clojure.java.io :as io]
            [clojure.core.async :as async]
            [hawk.core :as hawk]))

(def timeout 30000)

(defn new-temp-path []
  (str (System/getProperty "java.io.tmpdir") (gensym "hawk") "/"))

(defn create-file [file]
  (doto file .createNewFile))

(defn modify-file [file]
  (doto file
    (.setLastModified
      (long (/ (System/currentTimeMillis) 1000)))))

(defn delete-file [file]
  (doto file .delete))

(defn create-directory [directory]
  (doto directory .mkdirs))

(defn modify-directory [directory]
  (modify-file directory))

(defn delete-directory [directory]
  (if (.isDirectory directory)
    (when (reduce #(and %1 (delete-directory %2)) true (.listFiles directory))
      (.delete directory))
    (.delete directory))
  directory)

(defn simple-watcher
  "a helper function to be used with `with-watchers` to create... watchers

  returns a vector of:
    [
     watcher ;; the watcher itself
     events  ;; a lazy sequence of events sent to the handler
     path    ;; a string containing the temp path being watched
    ]
  "
  [impl & {:as spec}]
  (fn
    ([]
     (let [chan (async/chan)
           path (new-temp-path)]
       (-> path io/file create-directory)
       [(hawk/watch!
          {:watcher impl}
          [(update-in
             (merge
               {:paths [path]
                :handler (fn [ctx e] ctx)}
               spec)
             [:handler]
             #(fn [ctx e]
                (async/put! chan
                            (assoc e :context ctx))
                (%1 ctx e)))])
        (repeatedly
          #(async/alt!!
             chan ([v] v)
             (async/timeout timeout) nil))
        path]))
    ([[watcher _ path]]
     (hawk/stop! watcher)
     (-> path io/file delete-directory))))

(defmacro with-watchers
  "a helper macro to create and cleanup watchers"
  [bindings & body]
  (let [rs (gensym)
        gs (gensym)
        fs (keep-indexed
             #(when (odd? %1) %2) bindings)
        bs (keep-indexed
             #(when (even? %1) %2) bindings)]
    `(let [~gs ~(vec fs)
           ~rs (map #(%1) ~gs)]
       (try
         (let ~(vec
                 (apply concat (map-indexed
                                 (fn [i x] [x `(nth ~rs ~i)]) bs)))
           ~@body)
         (finally
           (mapv #(%1 %2) ~gs ~rs))))))
