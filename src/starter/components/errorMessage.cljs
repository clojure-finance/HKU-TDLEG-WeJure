(ns starter.components.errorMessage
    (:require 
        [reagent.core :as r]
        [reagent-mui.material.alert :refer [alert]]))

(defn errorMessage [message]
    [alert
        {:severity "error"
            :sx {:position "absolute"
                    :right "0%"
                    :top "0%"}}
        message])