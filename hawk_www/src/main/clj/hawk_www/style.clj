(ns hawk-www.style
  (:require [clojure.java.io :as io]
            [garden.core :refer [css]]
            [garden.units :refer [px em]]
            [garden.selectors :as selector]
            [garden.color :as color :refer [rgb]]))

(def purple (rgb 152 90 163))
(def green (rgb 58 168 124))
(def red (rgb 230 94 77))
(def orange (rgb 244 151 86))
(def yellow (rgb 213 185 86))
(def dark-grey (rgb 90 90 90))
(def medium-dark-grey (rgb 160 160 160))
(def medium-grey (rgb 238 238 238))
(def light-grey (rgb 248 248 248))
(def white (rgb 255 255 255))

(def defaults
  [[:html
    {:box-sizing :border-box}]
   [:*
    :*:after
    :*:before
    {:box-sizing :inherit}]
   [:body
    {:margin 0
     :padding 0}]
   [:a
    :a:hover
    :a:active
    :a:visited {:text-decoration :none}]])

(def fonts
  [[:body
    {:font-size (px 22)
     :font-family "'Crimson Text', serif"}]
   [:h1
    :h2
    :h3
    {:font-family "'Raleway', sans-serif"}]
   [:h1
    {:color white
     :font-size (px 42)}]
   [:h2
    {:color purple
     :font-size (px 32)}]
   [:h3
    {:color purple
     :font-size (px 22)}]
   [:code
    {:font-size (px 18)
     :font-family "'Inconsolata', monospace"}]])

(def main
  [["::selection" {:color white
                   :background purple}]
   [:nav
    :header
    :main {:width "100%"}]
   [:main {:padding {:left "16.5%"
                     :right "16.5%"}}]
   [:main {:padding-bottom (px 50)}]
   [:nav {:height (px 0)
          :position :fixed
          :overflow :hidden
          :background purple
          :transition "height 250ms"}
    [:&.active {:height (px 56)}]
    [:img {:width (px 40)
           :display :table
           :margin {:top (px 5)
                    :left :auto
                    :right :auto}}]]
   [:header {:overflow :hidden
             :background purple
             :min-height (px 400)
             :padding-top (px 50)
             :margin-bottom (px 120)}
    [:img {:width (px 196)}]
    [:img :h1 {:display :table
               :margin {:left :auto
                        :right :auto}}]]
   [:nav
    [:a {:cursor :pointer}]]
   [:a {:color purple
        :border-bottom {:width (px 2)
                        :style :solid
                        :color white}
        :transition "border 250ms"}
    [:&:hover {:border-bottom {:width (px 2)
                               :style :solid
                               :color purple}}]]
   [:h1 {:font-kerning :normal
         :letter-spacing (px 5)
         :text-transform :uppercase}]
   [:h3 {:margin-top (px 50)}]
   [:pre
    [:code {:display :block}]]
   [:img.ribbon {:position :absolute
                 :top 0
                 :right 0
                 :border 0}]
   [:hr {:height (px 1)
         :color medium-grey
         :background-color medium-grey
         :border 0
         :margin {:top (px 50)
                  :bottom (px 50)}}]
   [:ul {:margin 0
         :padding 0
         :list-style :none}]
   [:li {:padding-left (em 1)
         :text-indent (em -0.7)}]
   [:li:before {:color purple
                :content "\"\\25A0\""
                :padding-right (em 0.5)}]])

(def highlight
  [[:.hl {:color dark-grey
          :background light-grey
          :display :inline-block
          :vertical-align :text-bottom
          :padding (em 0.25)
          :overflow-x :auto
          :border {:width (px 1)
                   :style :solid
                   :color medium-grey}}]
   [:pre
    [:.hl {:display :block
           :padding (em 0.5)}]]
   [:.hl
    ;; numbers
    [:.mi {:color orange}]
    ;; strings
    [:.s {:color green}]
    ;; symbols
    [:.nf :.nv :.k :.kd {:color purple}]
    ;; keywords
    [:.ss {:color red}]
    ;; comments
    [:.c1 {:color medium-dark-grey}]]])

(def screen
  (concat defaults main fonts highlight))

(defn manifest [config]
  {"css/out/screen.css" #(css screen)})
