(ns starter.helpers.slurp
  (:refer-clojure :exclude [slurp])
  ;; (:require [clojure.java.io :as io])
)

(defmacro slurp [file] ;; entry point for path is on the top level, i.e. it is on the same level as src
  (clojure.core/slurp file))

;; (defmacro check [file]
;;   (.exists (io/file file)))

;; (defmacro path [file]
;;   (.getParent (io/file "../../index.html")))