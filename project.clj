(defproject calculator "0.1.0-SNAPSHOT"
  :description "description"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.omcljs/om "1.0.0-alpha22"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [datascript "0.13.1"]
                 [sablono "0.5.3"]
                 [cljsjs/react-dom-server "0.14.3-0"]
                 [binaryage/devtools "0.5.2"]
                 [figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]]

  :source-paths ["dev"]

  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [figwheel-sidecar "0.5.0-1"]]}}

  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]})
