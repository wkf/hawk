(ns hawk.watcher
  (:require [clojure.java.io :as io]
            [clojure.set :refer [map-invert]])
  (:import (com.barbarysoftware.watchservice StandardWatchEventKind WatchableFile)
           (java.nio.file FileSystems Path Paths StandardWatchEventKinds)))

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

(defn- take-events [watcher event-kinds]
  (when-let [watch-key (try
                         (.take watcher)
                         (catch InterruptedException _ _ nil))]
    (let [events (for [event (.pollEvents watch-key)]
                   {:file (-> event .context str io/file .getCanonicalFile)
                    :kind (->> event .kind (get (map-invert event-kinds)))})]
      (.reset watch-key)
      events)))

(extend-protocol Watcher
  java.nio.file.WatchService
  (register! [this path events]
    (let [events (into-array (map standard-watch-event-kinds events))]
      (.register path this events))
    (doseq [dir (-> path .toFile .listFiles)]
      (when (.isDirectory dir)
        (register! this (.toPath dir) events))))
  (take! [this]
    (try (take-events this standard-watch-event-kinds)
         (catch java.nio.file.ClosedWatchServiceException _ _ nil)))
  (stop! [this]
    (doto this .close))

  com.barbarysoftware.watchservice.WatchService
  (register! [this path events]
    (let [file (-> path .toFile WatchableFile.)
          events (into-array (map barbary-watch-event-kinds events))]
      (.register file this events)))
  (take! [this]
    (try (take-events this barbary-watch-event-kinds)
         (catch com.barbarysoftware.watchservice.ClosedWatchServiceException _ _ nil)))
  (stop! [this]
    (doto this .close)))

(defmulti new-watcher identity)

(defmethod new-watcher :barbary [_]
  (com.barbarysoftware.watchservice.WatchService/newWatchService))

(defmethod new-watcher :java [_]
  (.newWatchService (FileSystems/getDefault)))

(defmethod new-watcher :default [_]
  (new-watcher
    (if (= "Mac OS X" (System/getProperty "os.name")) :barbary :java)))
