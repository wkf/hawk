(defproject hawk/hawk-www "0.2.6"
  :description "GitHub Pages site for Hawk"
  :main hawk-www.site
  :source-paths ["src/main/clj"
                 "src/main/cljs"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2850"]
                 [aviary "0.1.6"]
                 [enlive "1.1.5"]
                 [garden "1.2.5"]
                 [endophile "0.1.2"]
                 [clygments "0.1.1"]]
  :plugins [[lein-modules "0.3.10"]]
  :profiles {:dev {:source-paths ["src/dev/clj"
                                  "src/dev/cljs"]
                   :dependencies [[weasel "0.5.0"]
                                  [com.cemerick/piggieback "0.1.5"]]
                   :repl-options {:init (hawk-www.dev/start)
                                  :init-ns hawk-www.dev
                                  :nrepl-middleware
                                  [cemerick.piggieback/wrap-cljs-repl]}}}
  :aliases {"ship" ["run" ":ship"]
            "export" ["run" ":export"]})
