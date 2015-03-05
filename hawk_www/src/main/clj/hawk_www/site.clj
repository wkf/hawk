(ns hawk-www.site
  (:gen-class)
  (:require [hawk-www.style :as style]
            [hawk-www.markup :as markup]
            [aviary.ship :as s]
            [aviary.figwheel :as fw]
            [aviary.filesystem :as fs]))

(defn style-manifest []
  (style/manifest {:pretty-print? false}))

(defn markup-manifest []
  (markup/manifest {}))

(defn export []
  (fs/export
    {:path "resources/public"
     :resources ["assets"]
     :manifests {"css" style-manifest
                 "html" markup-manifest}})
  (fw/build-cljs
    {:source-paths ["src/main/cljs"]
     :build-options {:output-to "resources/public/js/out/main.js"
                     :output-dir "resources/public/js/out"
                     :optimizations :advanced
                     :pretty-print false}}))

(defn ship []
  (s/ship
    {:type :git
     :path "resources/public"}))

(defn -main [command & args]
  (condp = command
    ":ship" (ship)
    ":export" (export) (println "Yawp."))
  (System/exit 0))
