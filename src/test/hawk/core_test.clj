(ns hawk.core-test
  (:require [clojure.test :refer :all]
            [clojure.java.io :as io]
            [hawk.core :as hawk]
            [hawk.test-helper :refer :all]))

(deftest test-simple-watcher
  (with-watchers [[_ events path] (simple-watcher)]
    (create-file (io/file path "a"))
    (is (= :create (-> events first :kind))
        "creating a file should produce a :create event")
    (modify-file (io/file path "a"))
    (is (= :modify (-> events second :kind))
        "modifying a file should produce a :modify event")
    (delete-file (io/file path "a"))
    (is (= #{:modify :delete}
           (->> events (take 4) (drop 2) (map :kind) set))
        "deleting a file should produce a :delete event (for the file) and a :modify event (for the directory)")))

(deftest test-filtered-watcher
  (with-watchers [[_ events path] (simple-watcher :filter hawk/deleted?)]
    (create-file (io/file path "a"))
    (is (= nil (-> events first))
        "creating a file should produce no events")
    (delete-file (io/file path "a"))
    (is (= :delete (-> events second :kind))
        "deleting a file should produce only a :delete event")))

(deftest test-stateful-watcher
  (with-watchers [[_ events path] (simple-watcher :context (constantly 1) :handler (fn [ctx _] (inc ctx)))]
    (create-file (io/file path "a"))
    (is (= 1 (-> events first :context))
        "the context of the first event should be set by the context function")
    (delete-file (io/file path "a"))
    (is (= 2 (-> events second :context))
        "the context of subsequent events should be the return value of the previous handler")))
