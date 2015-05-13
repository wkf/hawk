(ns hawk.core-test
  (:require [clojure.test :refer :all]
            [clojure.java.io :as io]
            [hawk.core :as hawk]
            [hawk.test-helper :refer :all]))

(def supported-watcher-implementations
  (if (= "Mac OS X"
         (System/getProperty "os.name"))
    [:barbary :java]
    [:java]))

(deftest test-simple-watcher
  (doseq [impl supported-watcher-implementations]
    (with-watchers [[_ events path] (simple-watcher impl)]
                   (create-file (io/file path "a"))
                   (is (= :create (-> events first :kind))
                     "creating a file should produce a :create event")
                   (modify-file (io/file path "a"))
                   (is (= :modify (-> events second :kind))
                     "modifying a file should produce a :modify event")
                   (delete-file (io/file path "a"))
                   ;; TODO: normalize watch implemenations; :barbary fires a :modify on the directory, but :java does not
                   (is (contains?
                         (->> events (take 4) (drop 2) (map :kind) set)
                         :delete)
                     "deleting a file should produce a :delete event"))))

(deftest test-filtered-watcher
  (doseq [impl supported-watcher-implementations]
    (with-watchers [[_ events path] (simple-watcher impl :filter hawk/deleted?)]
                   (create-file (io/file path "a"))
                   (is (= nil (-> events first))
                     "creating a file should produce no events")
                   (delete-file (io/file path "a"))
                   (is (= :delete (-> events second :kind))
                     "deleting a file should produce only a :delete event"))))

(deftest test-stateful-watcher
  (doseq [impl supported-watcher-implementations]
    (with-watchers [[_ events path] (simple-watcher impl :context (constantly 1) :handler (fn [ctx _] (inc ctx)))]
                   (create-file (io/file path "a"))
                   (is (= 1 (-> events first :context))
                     "the context of the first event should be set by the context function")
                   (delete-file (io/file path "a"))
                   (is (= 2 (-> events second :context))
                     "the context of subsequent events should be the return value of the previous handler"))))
