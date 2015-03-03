(ns hawk-www.system
  (:require [hawk-www.style :as style]
            [hawk-www.markup :as markup]
            [aviary.system :refer [defsystem defsystem* using]]
            [aviary.watch :refer [watch] :as w]
            [aviary.serve :refer [serve]]
            [aviary.figwheel :as fw]
            [aviary.filesystem :as fs]))

;;
;; default
;;

(def default-style-config
  {})

(def default-markup-config
  {:title "Hawk"
   :url "https://github.com/wkf/hawk"
   :path "../README.md"
   :styles ["css/out/screen.css"
            "//fonts.googleapis.com/css?family=Raleway:500"
            "//fonts.googleapis.com/css?family=Crimson+Text"
            "//fonts.googleapis.com/css?family=Inconsolata"]
   :scripts ["js/out/goog/base.js"
             "js/out/main.js"]
   :requires ["user"
              "hawk_www.core"]})

;;
;; dev
;;

(defn dev-style-manifest []
  (style/manifest default-style-config))

(defn dev-markup-manifest []
  (markup/manifest default-markup-config))

(def dev-config
    {:figwheel
     {:port 3449
      :output-to "resources/target/assets/js/out/main.js"
      :output-dir "resources/target/assets/js/out"}
     :serve
     {:port 3450
      :resources ["assets"
                  "target/assets"]
      :manifests {"text/css" dev-style-manifest
                  "text/html" dev-markup-manifest}}
     :clj
     {:source-paths ["src/dev/clj"
                     "src/main/clj"]}
     :cljs
     {:source-paths ["src/dev/cljs"
                     "src/main/cljs"]
      :build-options {:output-to "resources/target/assets/js/out/main.js"
                      :output-dir "resources/target/assets/js/out"
                      :optimizations :none
                      :source-map true
                      :pretty-print true
                      :warnings {:single-segment-namespace false}}}
     :style
     {:namespace 'hawk-www.style}
     :markup
     {:namespace 'hawk-www.markup}})

(defsystem* dev
  :serve (serve
           (-> dev-config :serve))
  :watch (using [fw :figwheel]
           (watch [(w/watch-clj
                     (-> dev-config :clj :source-paths)
                     #(condp = %
                        (-> dev-config :style :namespace) (->> (dev-style-manifest) keys (fw/reload-css fw))
                        (-> dev-config :markup :namespace) (->> (dev-markup-manifest) keys (fw/reload-html fw)) nil))
                   (fw/watch-cljs fw (-> dev-config :cljs))]))
  :figwheel (fw/serve (-> dev-config :figwheel)))

;;
;; prod
;;

(defn prod-style-manifest []
  (style/manifest default-style-config))

(defn prod-markup-manifest []
  (markup/manifest
    (merge default-markup-config
           {:requires []
            :scripts ["js/out/main.js"]})))

(def prod-config
  {:serve
   {:port 3460
    :static? true
    :resources ["public"]}
   :cljs
   {:source-paths ["src/main/cljs"]
    :build-options {:output-to "resources/public/js/out/main.js"
                    :output-dir "resources/public/js/out"
                    :optimizations :advanced
                    :pretty-print false}}})

(defsystem prod
  (serve
    (-> prod-config :serve)))

(defn export []
  (fs/export
    {:base "resources/public"
     :resources ["assets"]
     :manifests {"css" prod-style-manifest
                 "html" prod-markup-manifest}})
  (-> prod-config :cljs fw/build-cljs))

(defn -main [& args] (println "Yawp."))
