(defproject hawk "0.2.4-SNAPSHOT"
  :description "Watch files with clojure (in the manner of a hawk)"
  :test-paths ["src/test"]
  :source-paths ["src/main"]
  :java-source-paths ["vendor/barbarywatchservice/src"]
  :aot [hawk.watcher]
  :javac-options ["-target" "1.7" "-source" "1.7"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [net.java.dev.jna/jna "3.2.3"]]
  :plugins [[lein-modules "0.3.10"]]
  :profiles {:dev
             {:dependencies [[org.clojure/core.async "0.1.346.0-17112a-alpha"]]}}
  :modules {:subprocess false
            :inherited {:url "https://github.com/wkf/hawk"
                        :scm {:name "git"
                              :url "https://github.com/wkf/hawk"}
                        :license {:name "Eclipse Public License"
                                  :url "http://www.eclipse.org/legal/epl-v10.html"}}}
  :release-tasks [["vcs" "assert-committed"]
                  ["test"]
                  ["modules" "change" "version" "leiningen.release/bump-version" "release"]
                  ["change" "version" "leiningen.release/bump-version" "release"]
                  ["modules" "export"]
                  ["vcs" "commit"]
                  ["vcs" "tag"]
                  ["modules" "ship"]
                  ["deploy" "clojars"]
                  ["modules" "change" "version" "leiningen.release/bump-version"]
                  ["change" "version" "leiningen.release/bump-version"]
                  ["vcs" "commit"]
                  ["vcs" "push"]])
