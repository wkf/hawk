(ns ^:figwheel-no-load hawk-www.dev
  (:require [hawk-www.core :as hawk]
            [weasel.repl :as w]
            [aviary.figwheel :as fw]))

(enable-console-print!)

(fw/start
  {:on-jsload #(do (hawk/stop) (hawk/start))
   :websocket-url "ws://localhost:3449/figwheel-ws"})

(when-not (w/alive?)
  (w/connect "ws://localhost:3451"))
