(ns starter.components.photos
    (:require
        [reagent.core :as r]
        [reagent-mui.material.box :refer [box]]
        [reagent-mui.material.typography :refer [typography]]
    )
)

(def ipfsUrl "https://ipfs.infura.io/ipfs/")

(defn photos [{:keys [contractInstance id]}]
    (let [photo (r/atom {}) creator (r/atom {})]
        (do
            (->
                (. ^js (. (. contractInstance -methods) pics id) call 
                    (fn [error result] 
                        (do 
                            (swap! photo assoc :picHash (str ^js (. result -picHash)))
                            (swap! photo assoc :description (str ^js (. result -description)))
                            (println "user: " (str ^js (. result -user)))
                            (swap! photo assoc :user (str ^js (. result -user)))
                            (println "photo")
                            (. js/console log result)
                        )
                    )
                )
                (.then 
                    (fn [] 
                        (. ^js (. (. contractInstance -methods) profiles (:user @photo)) call
                            (fn [error result] 
                                (do 
                                    (swap! creator assoc :name (str ^js (. result -name)))
                                    (swap! creator assoc :profile (str ^js (. result -picHash)))
                                    (println "creator")
                                    (. js/console log result)
                                )
                            )
                        )
                    )
                )
            )
            (fn []
                (do
                (set! (.. js/window -tamp) (clj->js @photo))
                [box
                    {:sx {:width "600px"
                        :height "800px" 
                        :background-color "white" 
                        :border-radius "25px"
                        :display "flex"
                        :flex-direction "column"
                        :align-items "center"
                        :margin "20px 0"
                        "&>div" {:margin "2px"}}}
                    [box
                        {
                            :sx {
                                :display "flex"
                                :align-items "center"
                                :width "100%"
                                "&>*" {:margin "0 5px"}
                            }
                        }
                        [:img
                            {
                                :src (str ipfsUrl (:profile @creator))
                                :width 50
                                :height 50
                                :style {:border-radius "50%"}
                            }
                        ]
                        [typography
                            {:variant "h6"
                            :component "div"
                            :sx 
                                {
                                    :font-size "17px"
                                }
                            }
                            (:name @creator)
                        ]
                    ]
                    [box
                        {:sx 
                            {
                                :width "100%"
                                :background-color "#404040"
                                :height "90%"
                            }
                        }
                        [:img
                            {
                                :src (str ipfsUrl (:picHash @photo))
                                :style {
                                    :width "100%"
                                    :height "100%"
                                    :object-fit "contain"
                                }
                            }
                        ]
                    ]
                    [typography
                        {:variant "h6"
                        :component "div"
                        :sx 
                            {
                                :font-size "17px"
                                :white-space "pre-line"
                            }
                        }
                        (:description @photo)
                    ]
                ]
                )
            )
        )
    )
)