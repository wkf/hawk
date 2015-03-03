(defproject hawk "0.2.0-SNAPSHOT"
  :description "Watch files with clojure (in the manner of a hawk)"
  :test-paths ["src/test"]
  :source-paths ["src/main"]
  :java-source-paths ["vendor/barbarywatchservice/src"]
  :aot [hawk.watcher]
  :dependencies [[org.clojure/clojure _]
                 [net.java.dev.jna/jna "3.2.3"]]
  :plugins [[lein-shell "0.4.0"]
            [lein-modules "0.3.10"]]
  :profiles {:dev {:dependencies [[org.clojure/core.async "0.1.346.0-17112a-alpha"]]}}
  :modules {:subprocess false
            :versions {hawk :version
                       org.clojure/clojure "1.6.0"
                       org.clojure/clojurescript "0.0-2850"}
            :inherited {:url "https://github.com/wkf/hawk"
                        :scm {:name "git"
                              :url "https://github.com/wkf/hawk"}
                        :license {:name "Eclipse Public License"
                                  :url "http://www.eclipse.org/legal/epl-v10.html"}}}
  :aliases {"export-gh-pages" ["modules" "export"]
            "deploy-gh-pages"
            ["do"
             ["shell" "git" "branch" "--delete" "gh-pages"]
             ["shell" "git" "subtree" "split" "--prefix" "hawk_www/resources/public" "--branch" "gh-pages"]
             ["vcs" "push" "origin" "gh-pages" "--force"]]}
  :release-tasks [["vcs" "assert-committed"]
                  ["test"]
                  ["modules" "change" "version" "leiningen.release/bump-version" "release"]
                  ["change" "version" "leiningen.release/bump-version" "release"]
                  ["export-gh-pages"]
                  ["vcs" "commit"]
                  ["vcs" "tag"]
                  ["deploy-gh-pages"]
                  ["deploy" "clojars"]
                  ["modules" "change" "version" "leiningen.release/bump-version"]
                  ["change" "version" "leiningen.release/bump-version"]
                  ["vcs" "commit"]
                  ["vcs" "push"]])
