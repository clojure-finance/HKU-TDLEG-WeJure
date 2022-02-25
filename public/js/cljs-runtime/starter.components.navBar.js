goog.provide('starter.components.navBar');
starter.components.navBar.ipfsUrl = "https://ipfs.infura.io/ipfs/";
starter.components.navBar.loginFunction = (function starter$components$navBar$loginFunction(step,web3,details,contractInstance){
if(cljs.core.truth_(web3)){
window.ethereum.request((function (){var obj27966 = ({"method":"eth_requestAccounts"});
return obj27966;
})()).then((function (arg){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arg);
})).then((function (accounts){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(details,cljs.core.assoc,new cljs.core.Keyword(null,"account","account",718006320),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(accounts,(0)));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["@trace 1 accounts: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(accounts,(0)))].join('')], 0));
})).then((function (){
return (window.temp = contractInstance);
})).then((function (){
return contractInstance.methods.profiles(new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(details))).call();
})).then((function (profile){
var name = profile.name;
var profileHash = profile.picHash;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," profileHash: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(profileHash)].join('')], 0));

if(clojure.string.blank_QMARK_(name)){
return cljs.core.reset_BANG_(step,(1));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(details,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),name);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(details,cljs.core.assoc,new cljs.core.Keyword(null,"profileHash","profileHash",553301830),profileHash);

return cljs.core.reset_BANG_(step,(2));
}
}));
} else {
alert("No provider found. Please install MetaMask.");
}

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(3)], 0));
});
starter.components.navBar.openFormBtn = (function starter$components$navBar$openFormBtn(){
var open = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.button.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(open,true);

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(open))], 0));
})], null),"Upload your photo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.components.photoForm.photoForm,open], null)], null);
});
});
starter.components.navBar.navBar = (function starter$components$navBar$navBar(p__27967){
var map__27968 = p__27967;
var map__27968__$1 = cljs.core.__destructure_map(map__27968);
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27968__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27968__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27968__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var contractInstance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27968__$1,new cljs.core.Keyword(null,"contractInstance","contractInstance",-1686123611));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.app_bar.app_bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"static",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#070707"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.toolbar.toolbar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"logo_white.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 20px 0 0"], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(step),(2)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.components.navBar.openFormBtn], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1"], null)], null)], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(step),(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(step),(1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.typography.typography,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"p",new cljs.core.Keyword(null,"component","component",1555936782),"div",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 20px 0 0",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(details))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 20px 0 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.typography.typography,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h6",new cljs.core.Keyword(null,"component","component",1555936782),"div",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 20px 0 0"], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(details))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),[starter.components.navBar.ipfsUrl,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"profileHash","profileHash",553301830).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(details)))].join(''),new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%"], null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(step,(0));
})], null),"Logout"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.button.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return starter.components.navBar.loginFunction(step,web3,details,contractInstance);
})], null),"Login"], null))], null)], null);
});

//# sourceMappingURL=starter.components.navBar.js.map
