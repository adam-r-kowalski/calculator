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

(defn change-in [state changes]
  (fn []
    (do (doseq [[k v] changes]
          (if (fn? v)
            (swap! state update-in [k] v)
            (swap! state assoc-in [k] v))))))

(defn append-display [state number]
  (let [f #(if (and (zero? number) (empty? %)) % (str % number))
        st @state
        cd (:clear-display st)
        d (:display st)]
    (cond
      (and (false? cd) (= d "0")) (change-in state {:display (str number)})
      (and (false? cd) (= d "-0")) (change-in state {:display (str "-" number)})
      (false? cd) (change-in state {:display f})
      (and cd (= d "-0")) (change-in state {:display (str "-" number)
                                            :clear-display false})
      :else (change-in state {:display (str number)
                              :clear-display false}))))

(defn percent [state]
  (let [st @state
        cd (:clear-display st)
        d (:display st)
        b (:buffer st)
        f #(str (/ (cljs.reader/read-string %) 100))]
    (cond
      (and cd (empty? b) (not (or (= d "") (= d "0") (= d "-0"))))
      (change-in state {:display f})
      cd (change-in state {:display d})
      :else (change-in state {:display #(if (empty? %) "" (f %))}))))

(defn decimal [state]
  (let [st @state
        cd (:clear-display st)
        d (:display st)
        f #(cond
             (empty? %) "0."
             (re-find #"\." %) %
             :else (str % "."))]
    (cond
      (and cd (or (= "0" d) (= "-0" d)))
      (change-in state {:display #(str % ".") :clear-display false})
      cd (change-in state {:display "0." :clear-display false})
      :else (change-in state {:display f}))))

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
      (change-in state {:display (do-op o d b) :buffer (do-op o d b)
                        :op op :clear-display true})
      (and (not (empty? b)) (not (empty? d)) (not (empty? op)) cd)
      (change-in state {:op op})
      (empty? b) (change-in state {:buffer d :op op :clear-display true}))))

(defn equal [state]
  (let [st @state
        d (:display st)
        b (:buffer st)
        o (:op st)
        cd (:clear-display st)]
    (cond
      (and (not (empty? b)) (not (empty? d)) (not (nil? o)) (not cd))
      (change-in state {:display (do-op o d b) :buffer ""
                        :op nil :clear-display true})
      (empty? b) (change-in state {:clear-display true}))))

(defn clear-display [state]
  (let [st @state
        d (:display st)]
    (if (empty? d)
      #(reset! state initial-state)
      (change-in state {:display ""}))))

(defn plus-minus [state]
  (let [st @state
        cd (:clear-display st)
        d (:display st)]
    (cond
      (and cd (= "-0" d)) (change-in state {:display "0"})
      cd (change-in state {:display "-0"})
      (or (= "0" d) (empty? d)) (change-in state {:display "-0"})
      (= "-0" d) (change-in state {:display "0"})
      :else
      (change-in state {:display #(str (* -1 (cljs.reader/read-string %)))}))))

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
    {:value {:keys [:display :buffer :clear-display :op]}
     :action action}))
