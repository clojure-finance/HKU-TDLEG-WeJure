(ns starter.components.registrationPage
    (:require 
        [reagent.core :as r]
        [reagent-mui.material.box :refer [box]]
        [reagent-mui.material.button :refer [button]]
        [reagent-mui.material.typography :refer [typography]]
        [reagent-mui.material.text-field :refer [text-field]]
        [reagent-mui.material.circular-progress :refer [circular-progress]]
        [reagent-mui.material.icon-button :refer [icon-button]]
        [reagent-mui.icons.add-a-photo-sharp :refer [add-a-photo-sharp]]
        [cljs-ipfs-api.core :as icore :refer [init-ipfs]]
        [cljs-ipfs-api.files :as ifiles]
    )
)

(defn emptyName [name]
    (= (count @name) 0)
)

(defn emptyPhoto [photo]
  (nil? @photo)
)

(defn callback [error hash]
    (do
        (set! (. js/window -error) error)
        (println (str "error: " error " hash: " hash))
    )
)

(defn submitProfile [name photo contractInstance details loading step]
    (do
        (reset! loading true)
        (println (str "account: " (:account @details) " loading: " @loading))
        (ifiles/add @photo 
            (fn [err files] 
                (if err 
                    (println (str "err: " err)) 
                    (let [hash (. (. js/JSON parse files) -Hash)]
                        (do
                            (. ^js (. (. contractInstance -methods) setProfile @name hash) send (js-obj "from" (:account @details)) 
                                (fn [error txHash] ;; callback
                                    (if error 
                                        (println error) 
                                        (do 
                                            (swap! details assoc :name @name)
                                            (swap! details assoc :profileHash hash)
                                            (reset! loading false)
                                            (reset! step 2)
                                        ))))
                        )
                    )
                )
            )
        )
    )
)

(defn registrationPage [{:keys [contractInstance details step]}]
    (let [name (r/atom nil) profilePic (r/atom nil) loading (r/atom false)]
        (do 
            (init-ipfs {:host "https://ipfs.infura.io:5001"})
            (fn [] 
                [:div
                    {:style {:height "100%" :display "flex" :justify-content "center" :align-items "center"}}
                    [box 
                        {:sx {:height "400px" 
                                :width "300px" 
                                :background-color "#FFFEF7"
                                :border-radius "30px"
                                :display "flex"
                                :flex-direction "column"
                                :justify-content "space-between"
                                :padding "50px 30px"}}

                        [typography
                            {:variant "h5"
                            :component "div"}
                            "Create Your WeJure Profile"
                        ]

                        [:div
                            {:style {:display "flex"
                                    :flex-direction "column"}}

                            [typography
                                {:variant "h6"
                                :component "div"}
                                "1. Enter a nickname"
                            ]

                            [text-field
                                {:variant "filled"
                                :value @name
                                :on-change (fn [e] (reset! name (.. e -target -value)))
                                :error (emptyName name)
                                :helper-text (if (emptyName name) "no text entered (20 characters max)" " ")
                                :input-props {:max-length 20}}
                            ]
                        ]
                        
                        [:div
                            {:style {:display "flex"
                                    :flex-direction "column"}}

                            [typography
                                {:variant "h6"
                                :component "div"}
                                "2. Upload a profile picture"
                            ]

                            [:label 
                                {:html-for "upload-image" :style {:margin "0 auto"}}
                                [:input 
                                {:accept "image/*"
                                :id "upload-image"
                                :type "file"
                                :style {:display "none"}
                                :on-change #(let [uploaded (-> % .-target .-files (aget 0))] (reset! profilePic uploaded))}]
                                [icon-button 
                                    {:component "span"}
                                    [add-a-photo-sharp]]]

                            [typography
                                {:variant "h6"
                                :component "div"
                                :sx {:color (if (emptyPhoto profilePic)  "#d32f2f" "#070707")
                                :font-size "12px"
                                :font-weight "500"
                                :text-align "center"}}
                                (if (emptyPhoto profilePic) "no photo uploaded" (.-name @profilePic))]
                        ]

                        [:div
                            {:style {:display "flex"
                                    :flex-direction "column"
                                    :align-items "center"}}
                            [button
                                {:variant "contained"
                                :disable-elevation true
                                :disabled (or (emptyName name) (emptyPhoto profilePic) @loading)
                                :on-click #(submitProfile name profilePic contractInstance details loading step)}
                                "Submit"]
                            [circular-progress {:sx {:margin "10px" :visibility (when (not @loading) "hidden")}}]
                        ]
                    ]
                ]  
            )
        )
    )
)