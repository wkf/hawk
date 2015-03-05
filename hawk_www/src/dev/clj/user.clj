(ns user
  (:require [hawk-www.site :as hawk]
            [aviary.system :as system]
            [weasel.repl.websocket :as weasel]))

(defn start-dev []
  (system/start hawk/dev))

(defn stop-dev []
  (system/stop hawk/dev))

(defonce repl-env
  (weasel/repl-env :port 3451 :ip "0.0.0.0"))
