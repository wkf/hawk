(ns hawk-www.markup
  (:require [clojure.java.io :as io]
            [clygments.core :as clygments]
            [endophile.core :refer [mp to-clj]]
            [net.cgrand.enlive-html :as html :refer [html]]))

(def defaults
  {:title "Hawk"
   :url "https://github.com/wkf/hawk"
   :path "../README.md"
   :styles ["css/out/screen.css"
            "//fonts.googleapis.com/css?family=Raleway:500"
            "//fonts.googleapis.com/css?family=Crimson+Text"
            "//fonts.googleapis.com/css?family=Inconsolata"]
   :scripts ["js/out/main.js"]})

(defn html5 [& nodes]
  (apply html {:type :dtd :data ["html"]} nodes))

(defn render [nodes] (apply str nodes))

(defn highlight [s]
  (clygments/highlight s :clojure :html {:nowrap true}))

(defn main [{:keys [path]}]
  (-> path slurp mp to-clj
      (html/at
        [#{:h1
           (html/has [:a #{(html/attr= :alt "Hawk")
                           (html/attr= :alt "Gitter")}])}] (html/substitute)
        [:code] (html/do->
                  (html/add-class "hl")
                  (html/transform-content
                    (comp html/html-snippet highlight render))))))

(html/deftemplate page
  (html5
    [:html
     [:head
      [:title]
      [:link {:rel "icon" :type "image/png" :href "/favicon-32x32.png" :sizes "32x32"}]
      [:link {:rel "icon" :type "image/png" :href "/favicon-96x96.png" :sizes "96x96"}]
      [:link {:rel "icon" :type "image/png" :href "/favicon-16x16.png" :sizes "16x16"}]]
     [:body
      [:a
       [:img.ribbon {:src "img/github-banner.png" :alt "Fork me on GitHub"}]]
      [:nav
       [:a.scroll [:img.logo {:src "img/hawk-no-circle-white.svg"}]]]
      [:header
       [:img.logo {:src "img/hawk-no-circle-white.svg"}]
       [:h1]]
      [:main]]])

  [{:keys [title url scripts requires styles main]}]

  [:title] (html/content title)
  [:head] (html/prepend
            (map
              #(html [:link {:type "text/css" :rel "stylesheet" :href %}]) styles))
  [(html/has [:img.ribbon])] (html/set-attr :href url)
  [:body] (html/append
            (map
              #(html [:script {:type "text/javascript" :src %}]) scripts)
            (map
              #(html [:script {:type "text/javascript"} (str "goog.require('" % "')")]) requires))
  [:header :h1] (html/content title)
  [:main] (html/content main))

(defn manifest [config]
  (let [config (merge defaults config)]
    {"" #(-> config (assoc :main (main config)) page render)}))
