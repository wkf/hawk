(ns hawk.watcher
  (:require [clojure.java.io :as io]
            [clojure.set :refer [map-invert]])
  (:import (java.io File)
           (hawk SensitivityWatchEventModifier)
           (java.nio.file FileSystems Path Paths StandardWatchEventKinds WatchEvent WatchEvent$Modifier WatchKey WatchService)
           (com.barbarysoftware.watchservice StandardWatchEventKind WatchableFile)))

(def barbary-watch-event-kinds
  {:create StandardWatchEventKind/ENTRY_CREATE
   :modify StandardWatchEventKind/ENTRY_MODIFY
   :delete StandardWatchEventKind/ENTRY_DELETE})

(def standard-watch-event-kinds
  {:create StandardWatchEventKinds/ENTRY_CREATE
   :modify StandardWatchEventKinds/ENTRY_MODIFY
   :delete StandardWatchEventKinds/ENTRY_DELETE})

(def sensitivity-watch-event-modifiers
  {:high SensitivityWatchEventModifier/HIGH
   :medium SensitivityWatchEventModifier/MEDIUM
   :low SensitivityWatchEventModifier/LOW})

(defprotocol Watcher
  (register! [this path events])
  (take! [this])
  (stop! [this]))

(defn- take-events [watcher take-fn poll-fn parse-fn reset-fn]
  (when-let [watch-key (try
                         (take-fn watcher)
                         (catch InterruptedException _ _ nil))]
    (let [events (for [event (poll-fn watch-key)]
                   (parse-fn watch-key event))]
      (reset-fn watch-key)
      events)))

(defn- recursive-register! [this ^Path path events register-fn reset-fn]
  (let [events (into-array (map standard-watch-event-kinds events))]
    (reset-fn (register-fn events)))
  (doseq [^java.io.File dir (-> path .toFile .listFiles)]
    (when (.isDirectory dir)
      (register! this (.toPath dir) events))))

(def java-watcher-impl
  {:register! (fn [this ^Path path events]
                (recursive-register! this path events
                  #(.register path this %)
                  #(.reset ^WatchKey %)))
   :take! (fn [this]
            (try (take-events
                   this
                   #(.take ^WatchService %)
                   #(.pollEvents ^WatchKey %)
                   (fn [^WatchKey watch-key ^WatchEvent event]
                     (let [kind (.kind event)
                           context ^Path (.context event)
                           path ^Path (.watchable watch-key)]
                       {:file (.. path
                                (resolve context)
                                toFile
                                getCanonicalFile)
                        :kind ((map-invert standard-watch-event-kinds) kind)}))
                   #(.reset ^WatchKey %))
                 (catch java.nio.file.ClosedWatchServiceException _ _ nil)))
   :stop! (fn [^WatchService this]
            (.close this))})

(def polling-watcher-impl
  (assoc java-watcher-impl
    :register! (fn [^hawk.PollingWatchService this path events]
                 (recursive-register! this path events
                   #(.register this path % (into-array WatchEvent$Modifier []))
                   #(.reset ^hawk.AbstractWatchKey %)))))

(def barbary-watcher-impl
  {:register! (fn [this ^Path path events]
                (let [file (-> path .toFile WatchableFile.)
                      events (into-array (map barbary-watch-event-kinds events))]
                  (.register file this events)))
   :take! (fn [this]
            (try (take-events
                   this
                   #(.take ^com.barbarysoftware.watchservice.WatchService %)
                   #(.pollEvents ^com.barbarysoftware.watchservice.WatchKey %)
                   (fn [_ ^com.barbarysoftware.watchservice.WatchEvent event]
                     (let [kind (.kind event)
                           context (.context event)]
                       {:file (-> context str io/file .getCanonicalFile)
                        :kind ((map-invert barbary-watch-event-kinds) kind)}))
                   #(.reset ^com.barbarysoftware.watchservice.WatchService %))
                 (catch com.barbarysoftware.watchservice.ClosedWatchServiceException _ _ nil)))
   :stop! (fn [^com.barbarysoftware.watchservice.WatchService this]
            (.close this))})

(extend java.nio.file.WatchService Watcher java-watcher-impl)
(extend hawk.PollingWatchService Watcher polling-watcher-impl)
(extend com.barbarysoftware.watchservice.WatchService Watcher barbary-watcher-impl)

(defmulti new-watcher :watcher)

(defmethod new-watcher :barbary [_]
  (com.barbarysoftware.watchservice.WatchService/newWatchService))

(defmethod new-watcher :java [_]
  (.newWatchService (FileSystems/getDefault)))

(defmethod new-watcher :polling [{:keys [sensitivity]}]
  (hawk.PollingWatchService. (get sensitivity-watch-event-modifiers (or sensitivity :high))))

(defmethod new-watcher :default [_]
  (new-watcher
    {:watcher
     (if (= "Mac OS X" (System/getProperty "os.name")) :barbary :java)}))
