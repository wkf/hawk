(ns hawk.core-test
  (:require [clojure.test :refer :all]
            [clojure.java.io :as io]
            [hawk.core :as hawk]
            [hawk.test-helper :refer :all]))

(def supported-watcher-implementations
  (if (= "Mac OS X"
         (System/getProperty "os.name"))
    [:barbary :java :polling]
    [:java :polling]))

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
      ;; FIXME: this is racey
      (is (contains?
           (->> events (take 4) (drop 2) (map :kind) set)
           :delete)
          "deleting a file should produce a :delete event"))))

(deftest test-recursive-watcher
  (doseq [impl supported-watcher-implementations]
    (with-watchers [[_ events path] (simple-watcher impl)]
      (create-directory (io/file path "d"))
      (create-file (io/file path "d/a"))
      ;; XXX:
      ;; Even though the following two assertions may look similar, the first ensures that
      ;; if a directory is created, and then a file is created in that directory _before_ hawk
      ;; processes the directory creation event, a virtual :create event is emitted. This means
      ;; that no files will be missed, but it is possible to receive multiple creations for the
      ;; same file. The second test below ensures that after we process the directory creation
      ;; event, a watcher has been correctly installed on that directory, and we receive normal
      ;; :create events.
      (is (= :create (-> events second :kind))
          "creating files in a created directory should produce a :create event for each file")
      (create-file (io/file path "d/b"))
      ;; FIXME: this is racey
      (is (contains?
           (->> events (take 4) (drop 2) (map :kind) set)
           :create)
          "creating a file in a created directory should produce a :create event"))))

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
