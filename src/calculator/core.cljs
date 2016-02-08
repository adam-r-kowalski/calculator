(ns calculator.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [sablono.core :refer-macros [html]]
            [devtools.core :as devtools]

            [calculator.parser :refer [app-state read mutate]]
            [calculator.style :refer [container-styles display-styles
                                      calculator-styles row-styles
                                      button-styles]]))

(devtools/enable-feature! :sanity-hints :dirac)
(devtools/install!)

(defn button
  ([this action label]
   [:div {:style (button-styles) :on-click #(om/transact! this action)} label])
  ([this style action label]
   [:div {:style style :on-click #(om/transact! this action)} label]))

(defui Calculator
  static om/IQuery
  (query [this] '[:display :buffer :clear-display :op])
  Object
  (render
   [this]
   (let [{:keys [display buffer clear-display op]} (om/props this)]
     (html
      [:div {:style container-styles}
       #_[:div {:style {:font-size "30px"}}
        [:div (str "Display = " display)]
        [:div (str "Buffer = " buffer)]
        [:div (str "Clear Display = " clear-display)]
        [:div (str "Operation = " op)]]
       [:div {:style display-styles}
        (if-not (empty? display) display "0")]
       [:div {:style calculator-styles}
        [:div {:style row-styles}
         (button this (button-styles "gray") '[(ac)]
                 (if (empty? display) "AC" "C"))
         (button this (button-styles "gray") '[(pm)] "+/-")
         (button this (button-styles "gray") '[(pc)] "%")
         (button this (button-styles "orange") '[(op {:op "/"})] "/")]
        [:div {:style row-styles}
         (button this '[(append {:n 7})] "7")
         (button this '[(append {:n 8})] "8")
         (button this '[(append {:n 9})] "9")
         (button this (button-styles "orange") '[(op {:op "*"})] "X")]
        [:div {:style row-styles}
         (button this '[(append {:n 4})] "4")
         (button this '[(append {:n 5})] "5")
         (button this '[(append {:n 6})] "6")
         (button this (button-styles "orange") '[(op {:op "-"})] "-")]
        [:div {:style row-styles}
         (button this '[(append {:n 1})] "1")
         (button this '[(append {:n 2})] "2")
         (button this '[(append {:n 3})] "3")
         (button this (button-styles "orange") '[(op {:op "+"})] "+")]
        [:div {:style row-styles}
         (button this (button-styles "lightgray" 2) '[(append {:n 0})] "0")
         (button this '[(dec)] ".")
         (button this (button-styles "orange") '[(eq)] "=")]]]))))

(def reconciler
  (om/reconciler
   {:state app-state
    :parser (om/parser {:read read :mutate mutate})}))

(om/add-root!
 reconciler
 Calculator
 (gdom/getElement "app"))
