(ns hawk-www.dev
  (:require [hawk-www.style :as style]
            [hawk-www.markup :as markup]
            [aviary.system :refer [defsystem* using] :as system]
            [aviary.serve :refer [serve]]
            [aviary.watch :refer [watch] :as w]
            [aviary.figwheel :as fw]
            [aviary.filesystem :as fs]
            [weasel.repl.websocket :as weasel]))

(defn style-manifest []
  (style/manifest {}))

(defn markup-manifest []
  (markup/manifest
    {:scripts ["js/out/goog/base.js"
               "js/out/main.js"]
     :requires ["hawk_www.dev"
                "hawk_www.core"]}))

(defsystem* dev
  :serve (serve
           {:port 3450
            :resources ["assets"
                        "target/assets"]
            :manifests {"text/css" style-manifest
                        "text/html" markup-manifest}})
  :watch (using [fw :figwheel]
           (watch [(w/watch-clj
                     ["src/dev/clj"
                      "src/main/clj"]
                     #(condp = %
                        'hawk-www.style (->> (style-manifest) keys (fw/reload-css fw))
                        'hawk-www.markup (->> (markup-manifest) keys (fw/reload-html fw)) nil))
                   (fw/watch-cljs
                     fw
                     {:source-paths ["src/dev/cljs"
                                     "src/main/cljs"]
                      :build-options {:output-to "resources/target/assets/js/out/main.js"
                                      :output-dir "resources/target/assets/js/out"
                                      :optimizations :none
                                      :source-map true
                                      :pretty-print true}})]))
  :figwheel (fw/serve
              {:port 3449
               :output-to "resources/target/assets/js/out/main.js"
               :output-dir "resources/target/assets/js/out"}))

(defn start []
  (system/start dev))

(defn stop []
  (system/stop dev))

(defonce repl-env
  (weasel/repl-env :port 3451 :ip "0.0.0.0"))
