(ns calculator.parser
  (:require [om.next :as om]
            [cljs.core.match :refer-macros [match]]))

(def initial-state
  {:display ""
   :buffer ""
   :clear-display false
   :op nil})

(defonce app-state
  (atom initial-state))

(defn read [{:keys [state] :as env} key _]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defn replace-in [state key value]
  (swap! state assoc-in [key] value))

(defn change-in [state key function]
  (swap! state update-in [key] function))

(defn append-display [state number]
  (let [f #(if (and (zero? number) (empty? %)) % (str % number))
        st @state
        cd (:clear-display st)
        d (:display st)]
    (cond
      (and (false? cd) (= d "0")) #(replace-in state :display (str number))
      (and (false? cd) (= d "-0")) #(replace-in state :display (str "-" number))
      (false? cd) #(change-in state :display f)
      (and cd (= d "-0"))
        (fn []
          (do (replace-in state :display (str "-" number))
              (replace-in state :clear-display false)))
      :else (fn []
              (do (replace-in state :display (str number))
                  (replace-in state :clear-display false))))))

(defn percent [state]
  (let [st @state
        cd (:clear-display st)
        d (:display st)
        b (:buffer st)]
    (cond
      (and cd (empty? b) (not (or (= d "") (= d "0") (= d "-0"))))
      (fn [] (swap! state update-in [:display]
                    #(str (/ (cljs.reader/read-string %) 100))))
      cd (fn [] (swap! state assoc-in [:display] d))
      :else (fn [] (swap! state update-in [:display]
                          #(if (empty? %)
                             ""
                             (str (/ (cljs.reader/read-string %) 100))))))))

(defn decimal [state]
  (let [st @state
        cd (:clear-display st)
        d (:display st)]
    (cond
      (and cd (or (= "0" d) (= "-0" d)))
        (fn [] (do (swap! state update-in [:display] #(str % "."))
                   (swap! state assoc-in [:clear-display] false)))
      cd (fn [] (do (swap! state assoc-in [:display] "0.")
                    (swap! state assoc-in [:clear-display] false)))
      :else (fn [] (swap! state update-in [:display]
               #(cond
                  (empty? %) "0."
                  (re-find #"\." %) %
                  :else (str % ".")))))))

(defn do-op [op d b]
  (let [d (cljs.reader/read-string d)
        b (cljs.reader/read-string b)]
    (match [op]
           ["+"] (str (+ b d))
           ["-"] (str (- b d))
           ["/"] (str (/ b d))
           ["*"] (str (* b d)))))

(defn operation [state op]
  (let [st @state
        d (:display st)
        b (:buffer st)
        o (:op st)
        cd (:clear-display st)]
    (cond
      (and (not (empty? b)) (not (empty? d)) (not (empty? op)) (not cd))
      (fn [] (do (swap! state assoc-in [:display] (do-op o d b))
                 (swap! state assoc-in [:buffer] (do-op o d b))
                 (swap! state assoc-in [:op] op)
                 (swap! state assoc-in [:clear-display ] true)))
      (and (not (empty? b)) (not (empty? d)) (not (empty? op)) cd)
      (fn [] (swap! state assoc-in [:op] op))
      (empty? b) (fn [] (do (swap! state assoc-in [:buffer] d)
                            (swap! state assoc-in [:op] op)
                            (swap! state assoc-in [:clear-display] true))))))

(defn equal [state]
  (let [st @state
        d (:display st)
        b (:buffer st)
        o (:op st)
        cd (:clear-display st)]
    (cond
      (and (not (empty? b)) (not (empty? d)) (not (nil? o)) (not cd))
      (fn [] (do (swap! state assoc-in [:display] (do-op o d b))
                 (swap! state assoc-in [:buffer] "")
                 (swap! state assoc-in [:op] nil)
                 (swap! state assoc-in [:clear-display ] true)))
      (empty? b) (fn [] (swap! state assoc-in [:clear-display] true)))))

(defn clear-display [state]
  (let [st @state
        d (:display st)]
    (if (empty? d)
      #(reset! state initial-state)
      (fn [] (swap! state assoc-in [:display] "")))))

(defn plus-minus [state]
  (let [st @state
        cd (:clear-display st)
        d (:display st)]
    (cond
      (and cd (= "-0" d)) #(swap! state assoc-in [:display] "0")
      cd #(swap! state assoc-in [:display] "-0")
      (or (= "0" d) (empty? d)) #(swap! state assoc-in [:display] "-0")
      (= "-0" d) #(swap! state assoc-in [:display] "0")
      :else (fn [] (swap! state update-in [:display]
                          #(str (* -1 (cljs.reader/read-string %))))))))

(defn mutate [{:keys [state]} key props]
  (let [action
        (match [key]
         ['ac] (clear-display state)
         ['pm] (plus-minus state)
         ['pc] (percent state)
         ['dec] (decimal state)
         ['append] (append-display state (:n props))
         ['op] (operation state (:op props))
         ['eq] (equal state))]
    {:value {:keys [:display :sign]}
     :action action}))
