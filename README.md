# Hawk

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/wkf/hawk?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<p align="center">
  <a href="#logo">
    <img align="center" src="hawk_www/resources/public/img/hawk-400x400-high.png?raw=true" alt="Hawk" />
  </a>
</p>

A Clojure library designed to watch files and directories.

Like most clojure file watchers, hawk wraps the JDK 7 java.nio.file.WatchService API. This works great when Java has a native implementation for  your platform of choice. However, this is not the case on OS X, so hawk also wraps the [Barbary WatchService](https://code.google.com/p/barbarywatchservice/) to provide performant monitoring even if you're using a mac. An appropriate implementation is chosen automatically, so all you have to do is install hawk and relax.

Hawk also features:

* A facility to handle "stateful" watches
* The ability to filter watches, and some handy built-in filters
* A name that is also a kind of bird

***

## Installation

To install, add the following dependency to your project.clj file:

[![Clojars Project](http://clojars.org/hawk/latest-version.svg)](http://clojars.org/hawk)

***

## Usage

To get started with using hawk, require `hawk.core` in your project:

    (ns hawk.sample
        (:require [hawk.core :as hawk]))

### Simple Watches

To start a simple watch:

    (hawk/watch! [{:paths ["src/main/hawk"]
                   :handler (fn [ctx e]
                              (println "event: " e)
                              (println "context: " ctx)
                              ctx)}])

The `:handler` function is passed both the group's context value and the event being handled, and is expected to return the new context value. The event hash has the following structure:

    {:kind :create           ;; the event kind, one of: #{:create :modify :delete}
     :file #java.io.File{} } ;; the (canonicalized) affected file

### Filtered Watches

To start a simple filtered watch, use `:filter`:

    (hawk/watch! [{:paths ["src/main/hawk"]
                   :filter hawk/file?
                   :handler (fn [_ _]
                              (println "look ma, just files!"))}])

The `:filter` function is also passed both the group's context and event being filtered. Hawk has some built-in filters, like `hawk/file?`, but any predicate function will work.

### Stateful Watches

To start a stateful watch, use `:context` to initialize the state, and then just return the updated state from the `:handler`. In this example, the context is initialized to `1` when the watch is started, and then incremented whenever an event is handled:

    (hawk/watch! [{:paths ["src/main/hawk"]
                   :context (constantly 1)
                   :handler (fn [ctx _] (inc ctx))}])

The `:context` function is passed only the group's current context, and is expected to return the new context value.

Hawk supports multiple watches with a single call to `watch!`. `watch!` accepts an arbitrary number of arrays, which can hold an arbitrary number of watch specs. Every spec in an an array will share the same state, and events are processed sequentially. Every array gets its own state, and events are processed (potentially) in parallel:

    (hawk/watch!
        ;; here we pass 2 groups to watch!
        [{:paths ["src/main/hawk"]
          ;; for the first group, context is set to 1...
          :context (constantly 1)
          :handler (fn [ctx _]
                    (println "I'm always first!")
                    (inc ctx))}
        {:paths ["src/test/hawk"]
         ;; ...and then incremented to 2 by the second watch in the group
         :context (fn [ctx] (inc ctx))
         :handler (fn [_ _]
                    (println "I'm always second place."))}]
       ;; here is the second watch group
       [{:paths ["src/main/hawk"]
         ;; its context (3) is totally separate from the above group
         :context (constantly 3)
         :handler (fn [_ _]
                    (println "I'm also always first!"))}])

### Polling Watches

There are cases (such as within virtual environments) where the operating system will not receive events when a file has changed. Hawk provides a polling watcher as a fallback mechanism for handling these cases:

    (hawk/watch! {:watcher :polling}
                 [{:paths ["src/main/hawk"]
                   :handler (fn [ctx e]
                              (println "event: " e)
                              (println "context: " ctx)
                              ctx)}])

You may also provide a `:sensitivity` argument of `:high` (the default), `:medium`, or `:low` depending on how often you want polling to occur.

### Stopping Watches

To stop a watch, use `hawk/stop!`:

    (let [watcher (hawk/watch! [...])]
      (hawk/stop! watcher))

Happy watching!

***

## License

Copyright (c) 2015 [Will Farrell](http://willfarrell.is)

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
