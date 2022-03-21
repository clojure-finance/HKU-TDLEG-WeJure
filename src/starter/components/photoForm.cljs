(ns starter.components.photoForm
  (:require
    [reagent.core :as r]
    [reagent-mui.material.modal :refer [modal]]
    [reagent-mui.material.alert :refer [alert]]
    [reagent-mui.material.box :refer [box]]
    [reagent-mui.material.circular-progress :refer [circular-progress]]
    [reagent-mui.material.typography :refer [typography]]
    [reagent-mui.material.button :refer [button]]
    [reagent-mui.material.icon-button :refer [icon-button]]
    [reagent-mui.icons.add-a-photo-sharp :refer [add-a-photo-sharp]]
    [reagent-mui.material.text-field :refer [text-field]]
    [starter.components.errorMessage :refer [errorMessage]]
    [cljs-ipfs-api.core :as icore :refer [init-ipfs]]
    [cljs-ipfs-api.files :as ifiles]
))

(defn emptyDescription [description]
  (= (count @description) 0)
)

(defn emptyPhoto [photo]
  (nil? @photo)
)

(defn submitPhoto [photo description contractInstance loading open details]
  (do 
    (reset! loading true)
    (ifiles/add @photo
      (fn [err files]
        (if err
          (println (str "err: " err))
          (let [hash (. (. js/JSON parse files) -Hash)]
            (. ^js (. (. contractInstance -methods) setPicture hash @description) send (js-obj "from" (:account @details)) 
              (fn [error txHash] ;; callback
                (if error 
                  (println error) 
                  (do 
                    (reset! loading false)
                    (reset! open false)
                  )
                )
              )
            )
          )
        )
      )
    )
  )
)

(defn photoForm [{:keys [open contractInstance details]}] 
  (let [photo (r/atom nil) description (r/atom nil) error (r/atom nil) loading (r/atom false)]
    (do
      (init-ipfs {:host "https://ipfs.infura.io:5001"})
      (fn []
        [:<>
          [modal
            {:open @open
              :on-close #(do (reset! photo nil) (reset! description nil) (reset! open false))}
            [box 
              {:sx {:box-shadow "20" 
                    :background-color "#CAF0F8"
                    :padding "30px"
                    :height "350px"
                    :width "400px"
                    :position "absolute"
                    :top "50%"
                    :left "50%"
                    :transform "translate(-50%, -50%)"
                    :border "5px solid #5F939A"
                    :display "flex"
                    :flex-direction "column"
                    :align-items "center"}}
              [typography
                {:variant "h6"
                  :component "div"
                  :sx {:color "#070707"
                        :font-weight "100"}}
                "Step 1: upload a photo"]
              [:hr
                {:style {:width "50%"}}]
              [:div
                {:style {:display "flex"
                          :flex-direction "column"
                          :align-items "center"}}
                [:label 
                  {:html-for "upload-image"}
                  [:input 
                    {:accept "image/*"
                      :id "upload-image"
                      :type "file"
                      :style {:display "none"}
                      :on-change #(let [uploaded (-> % .-target .-files (aget 0))] (reset! photo uploaded))}]
                  [icon-button 
                    {:component "span"}
                    [add-a-photo-sharp]]]
                [typography
                  {:variant "h6"
                    :component "div"
                    :sx {:color (if (emptyPhoto photo)  "#d32f2f" "#070707")
                          :font-size "12px"
                          :font-weight "500"}}
                  (if (emptyPhoto photo) "no photo uploaded" (.-name @photo))]
              ]
              [:div 
                {:style {:margin "10px"}}]
              [typography
                {:variant "h6"
                  :component "div"
                  :sx {:color "#070707"
                        :font-weight "100"}}
                "Step 2: add a decription to your photo"]
              [:hr
                {:style {:margin "10px"
                          :width "50%"}}]
              [:div
                {:style {:height "120px"}}
              [text-field
                {:multiline true 
                  :rows 2
                  :error (emptyDescription description)
                  :helper-text (when (emptyDescription description) "description cannot be empty")
                  :value @description
                  :on-change (fn [e] (reset! description (.. e -target -value)))}]
              ]
              [:div 
                {:style {:margin "10px"}}]
              [button 
                {:variant "contained"
                  :disabled (or (emptyDescription description) (emptyPhoto photo) @loading)
                  :disable-elevation true
                  :on-click #(submitPhoto photo description contractInstance loading open details)}
                "Submit"]
              [circular-progress {:sx {:margin "10px" :visibility (when (not @loading) "hidden")}}]
            ]
          ]
        ]
      )
    )
  )
)