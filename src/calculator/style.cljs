(ns calculator.style)

(def column
  {:display "flex"
   :flex-direction "column"})

(def center
  {:display "flex"
   :justify-content "center"
   :align-items "center"})

(def bottom-right
  {:display "flex"
   :justify-content "flex-end"
   :align-items "flex-end"})

(def container-styles
  (merge column
         {:height "100%" :font-family "'Advent Pro', sans-serif"}))

(def display-styles
  (merge bottom-right
         {:background-color "black"
          :color "white"
          :padding "0 25px 15px 0"
          :font-size "72px"
          :flex 1}))

(def calculator-styles
  (merge column {:flex 3 :background-color "white"}))

(def row-styles {:flex 1 :display "flex"})

(defn button-styles
  ([] (merge center
             {:flex 1
              :background-color "lightgray"
              :font-size "32px"
              :border-top "1px solid #333"
              :border-right "1px solid #333"
              :cursor "pointer"}))
  ([c] (merge (button-styles) {:background-color c}))
  ([c f] (merge (button-styles c) {:flex f})))
