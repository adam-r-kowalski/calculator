(ns user
  (:use [figwheel-sidecar.repl-api :as ra]))

(defn start []
  (ra/start-figwheel!
   {:figwheel-options {}
    :build-ids ["dev"]
    :all-builds
    [{:id "dev"
      :figwheel true
      :source-paths ["src"]
      :compiler {:main 'calculator.core
                 :asset-path "js"
                 :output-to "resources/public/js/main.js"
                 :output-dir "resources/public/js"
                 :verbose true}}]}))

(defn stop [] (ra/stop-figwheel!))

(defn cljs [] (ra/cljs-repl "dev"))
