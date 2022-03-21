(ns starter.components.mainPage
  (:require
    [reagent.core :as r]
    [reagent-mui.material.box :refer [box]]
    [starter.components.photos :refer [photos]]
  )
)

(def ipfsUrl "https://ipfs.infura.io/ipfs/")

(defn mainPage [{:keys [contractInstance details]}]
  (let [length (r/atom 0)]
    (do
      (. (. ^js (. contractInstance -methods) picsLength) call (fn [error result] (if error (println error) (reset! length result))))
      (fn [{:keys [contractInstance details]}]
        [:div 
          {:style {:display "flex" 
                    :flex-direction "column" 
                    :align-items "center"}}
          (for [id (range @length)]
            ^{:key id}
            [photos {:contractInstance contractInstance :id id}]
          )
        ]
      )
    )
  )
)