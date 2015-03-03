(defproject hawk/hawk-www "0.2.0-SNAPSHOT"
  :description "GitHub Pages site for Hawk"
  :source-paths ["src/main/clj"
                 "src/main/cljs"]
  :dependencies [[org.clojure/clojure _]
                 [org.clojure/clojurescript _]
                 [aviary "0.1.4"]
                 [enlive "1.1.5"]
                 [garden "1.2.5"]
                 [endophile "0.1.2"]
                 [clygments "0.1.1"]]
  :plugins [[lein-modules "0.3.10"]]
  :profiles {:dev {:source-paths ["src/dev/clj"
                                  "src/dev/cljs"]
                   :dependencies [[weasel "0.5.0"]
                                  [com.cemerick/piggieback "0.1.5"]]
                   :repl-options {:init (user/start-dev)
                                  :nrepl-middleware
                                  [cemerick.piggieback/wrap-cljs-repl]}}}
  :aliases {"export" ["run" "-m" "hawk-www.system/export"]})
