(ns starter.core
    (:require 
      [reagent.core :as r]
      ["web3" :as Web3]
      [cljs-ipfs-api.core :as icore :refer [init-ipfs]]
      [starter.components.mainPage :refer [mainPage]]
      [starter.components.navBar :refer [navBar]]
      [starter.components.loginPage :refer [loginPage]]
      [starter.components.registrationPage :refer [registrationPage]])
    (:require-macros
      [starter.helpers.slurp :refer [slurp]]))
      
(defn init-web3 []
  (let [provider (. js/window -ethereum)]
    (if provider ;; check if window.ethereum has been injected
      (if (.-isMetaMask provider) ;; check if MetaMask is the provider
        (Web3. provider)
        false)
    false)
  )
)

(defn init-contract [web3]
  (let [abi (. js/JSON parse (slurp "src/contract/WeJure.json"))]
   (web3.eth.Contract. abi "0x3C8De8D04efcc12f9194Dce5aA46fEB48C294A4d")
  )
)

(defn app []
  (let [step (r/atom 0) web3 (init-web3) details (atom nil) contractInstance (init-contract web3)]
    (do 
      (fn [] 
        [:div 
          {:style {:height "100%"
                    :display "flex"
                    :flex-direction "column"}}
          [navBar {:step step :web3 web3 :details details :contractInstance contractInstance}]
          [:div
            {:style {
              :height "100%"}}
            (case @step
              0 [loginPage]
              1 [registrationPage {:contractInstance contractInstance :details details :step step}]
              2 [mainPage {:contractInstance contractInstance :details details}]
            )
          ]
        ]
      )
    )
  )
)

(defn stop []
  (js/console.log "Stopping..."))

(defn start []
  (js/console.log "Starting...")
  (r/render [app]
            (.getElementById js/document "app")))

(defn ^:export init []
  (start))