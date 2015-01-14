(defproject hawk "0.2.0-SNAPSHOT"
  :description "Watch files with clojure (in the manner of a hawk)"
  :url "https://github.com/wkf/hawk"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :test-paths ["src/test"]
  :source-paths ["src/main"]
  :java-source-paths ["vendor/barbarywatchservice/src"]
  :aot [hawk.watcher]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [net.java.dev.jna/jna "3.2.3"]]
  :profiles {:dev {:dependencies [[org.clojure/core.async "0.1.346.0-17112a-alpha"]]}})
