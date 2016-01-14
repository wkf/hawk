(ns hawk.watcher
  (:require [clojure.java.io :as io]
            [clojure.set :refer [map-invert]])
  (:import (java.nio.file FileSystems Path Paths StandardWatchEventKinds WatchEvent$Modifier)
           (com.barbarysoftware.watchservice StandardWatchEventKind WatchableFile)))

(def barbary-watch-event-kinds
  {:create StandardWatchEventKind/ENTRY_CREATE
   :modify StandardWatchEventKind/ENTRY_MODIFY
   :delete StandardWatchEventKind/ENTRY_DELETE})

(def standard-watch-event-kinds
  {:create StandardWatchEventKinds/ENTRY_CREATE
   :modify StandardWatchEventKinds/ENTRY_MODIFY
   :delete StandardWatchEventKinds/ENTRY_DELETE})

(defprotocol Watcher
  (register! [this path events])
  (take! [this])
  (stop! [this]))

(defn- take-events [watcher normalize]
  (when-let [watch-key (try
                         (.take watcher)
                         (catch InterruptedException _ _ nil))]
    (let [events (for [event (.pollEvents watch-key)
                       :let [kind (.kind event)
                             context (.context event)]]
                   (normalize watch-key kind context))]
      (.reset watch-key)
      events)))

(defn- recursive-register! [this path events f]
  (let [events (into-array (map standard-watch-event-kinds events))]
    (.reset (f events)))
  (doseq [dir (-> path .toFile .listFiles)]
    (when (.isDirectory dir)
      (register! this (.toPath dir) events))))

(def java-watcher-impl
  {:register! (fn [this path events]
                (recursive-register! this path events
                  #(.register path this %)))
   :take! (fn [this]
            (try (take-events
                   this
                   (fn [watch-key kind context]
                     {:file (-> (.watchable watch-key)
                              (.resolve context) .toFile .getCanonicalFile)
                      :kind ((map-invert standard-watch-event-kinds) kind)}))
                 (catch java.nio.file.ClosedWatchServiceException _ _ nil)))
   :stop! (fn [this]
            (doto this .close))})

(def polling-watcher-impl
  (assoc java-watcher-impl
    :register! (fn [this path events]
                 (recursive-register! this path events
                   #(.register this path % (into-array WatchEvent$Modifier []))))))

(def barbary-watcher-impl
  {:register! (fn [this path events]
                (let [file (-> path .toFile WatchableFile.)
                      events (into-array (map barbary-watch-event-kinds events))]
                  (.register file this events)))
   :take! (fn [this]
            (try (take-events
                   this
                   (fn [_ kind context]
                     {:file (-> context str io/file .getCanonicalFile)
                      :kind ((map-invert barbary-watch-event-kinds) kind)}))
                 (catch com.barbarysoftware.watchservice.ClosedWatchServiceException _ _ nil)))
   :stop! (fn [this]
            (doto this .close))})

(extend java.nio.file.WatchService Watcher java-watcher-impl)
(extend hawk.PollingWatchService Watcher polling-watcher-impl)
(extend com.barbarysoftware.watchservice.WatchService Watcher barbary-watcher-impl)

(defmulti new-watcher identity)

(defmethod new-watcher :barbary [_]
  (com.barbarysoftware.watchservice.WatchService/newWatchService))

(defmethod new-watcher :java [_]
  (.newWatchService (FileSystems/getDefault)))

(defmethod new-watcher :polling [_]
  (hawk.PollingWatchService.))

(defmethod new-watcher :default [_]
  (new-watcher
    (if (= "Mac OS X" (System/getProperty "os.name")) :barbary :java)))
