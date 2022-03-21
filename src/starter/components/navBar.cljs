(ns starter.components.navBar
    (:require 
        [reagent.core :as r]
        [reagent-mui.material.app-bar :refer [app-bar]]
        [reagent-mui.material.toolbar :refer [toolbar]]
        [reagent-mui.material.button :refer [button]]
        [reagent-mui.material.typography :refer [typography]]
        [starter.components.photoForm :refer [photoForm]]
    )
)

(def ipfsUrl "https://ipfs.infura.io/ipfs/")

(defn loginFunction [step web3 details contractInstance] 
  (do
    (if web3 
      (-> (.request (. js/window -ethereum) (js-obj "method" "eth_requestAccounts"))
        (.then (fn [arg] (js->clj arg))) ;; convert result into clojure-accepted data type and assign it to accounts
        (.then (fn [accounts] (do (swap! details assoc :account (nth accounts 0)) (println (str "@trace account: " (nth accounts 0)))))) ;; get first account
        (.then (fn [] (set! (. js/window -temp) contractInstance)))
        (.then (fn [] (. (. (. contractInstance -methods) profiles (:account @details)) call)))
        (.then (fn [profile] 
                (let [name (. profile -name) profileHash ^js (. profile -picHash)]
                  (do 
                  (println (str "name: " name " profileHash: " profileHash))
                  (if (clojure.string/blank? name)
                    (reset! step 1)
                    (do (swap! details assoc :name name) (swap! details assoc :profileHash profileHash) (reset! step 2))
                  )
                  )
                ))
        )
      )
      (js/alert "No provider found. Please install MetaMask.") ;; display alert if user does not have wallet installed
    )
    (println 3)
  )
)

(defn openFormBtn [{:keys [contractInstance details]}] 
  (let [open (r/atom false)]
    (fn [] 
      [:div
        [button
          {:variant "contained"
            :on-click #(do (reset! open true) (println (str @open)))}
          "Upload your photo"]
        [photoForm {:open open :contractInstance contractInstance :details details}]])
  )
)

(defn navBar [{:keys [step web3 details contractInstance]}]
  [app-bar 
      {:position "static"
        :sx {:background-color "#070707"}}
      [toolbar
          [:img 
            {:src "logo_white.png"
              :style {:height "50px" 
                      :margin "0 20px 0 0"}}]
          (when (= @step 2) 
              [openFormBtn {:contractInstance contractInstance :details details}])
          [:div
              {:style {:flex-grow "1"}}]
          (if (not= @step 0)
              [:div
                  {:style {:display "flex"
                            :align-items "center"}}
                  (if (= @step 1)     
                    [typography 
                      {:variant "p"
                        :component "div"
                        :sx {:margin "0 20px 0 0"
                        :font-size "12px"}}
                      (:account @details)]
                      [:div
                        {:style {:margin "0 20px 0 0" :display "flex" :alignItems "center"}}
                        [typography 
                          {:variant "h6"
                            :component "div"
                            :sx {:font-size "12px" :margin "0 20px 0 0"}}
                          (:name @details)]
                        [:img
                            {:src (str ipfsUrl (:profileHash @details))
                            :width 50
                            :height 50
                            :style {:border-radius "50%"}}]
                    ]
                  )
                  [button
                    {:color "inherit"
                      :variant "outlined"
                      :on-click #(reset! step 0)}
                    "Logout"]]
              [button 
                {:color "inherit"
                  :on-click #(loginFunction step web3 details contractInstance)}
                "Login"])]]
)