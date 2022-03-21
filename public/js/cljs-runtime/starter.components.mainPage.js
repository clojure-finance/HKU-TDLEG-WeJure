goog.provide('starter.components.mainPage');
starter.components.mainPage.ipfsUrl = "https://ipfs.infura.io/ipfs/";
starter.components.mainPage.mainPage = (function starter$components$mainPage$mainPage(p__28371){
var map__28372 = p__28371;
var map__28372__$1 = cljs.core.__destructure_map(map__28372);
var contractInstance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28372__$1,new cljs.core.Keyword(null,"contractInstance","contractInstance",-1686123611));
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28372__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var length = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
contractInstance.methods.picsLength().call((function (error,result){
if(cljs.core.truth_(error)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error], 0));
} else {
return cljs.core.reset_BANG_(length,result);
}
}));

return (function (p__28373){
var map__28374 = p__28373;
var map__28374__$1 = cljs.core.__destructure_map(map__28374);
var contractInstance__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28374__$1,new cljs.core.Keyword(null,"contractInstance","contractInstance",-1686123611));
var details__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28374__$1,new cljs.core.Keyword(null,"details","details",1956795411));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),(function (){var iter__4652__auto__ = (function starter$components$mainPage$mainPage_$_iter__28375(s__28376){
return (new cljs.core.LazySeq(null,(function (){
var s__28376__$1 = s__28376;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28376__$1);
if(temp__5753__auto__){
var s__28376__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28376__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__28376__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__28378 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__28377 = (0);
while(true){
if((i__28377 < size__4651__auto__)){
var id = cljs.core._nth(c__4650__auto__,i__28377);
cljs.core.chunk_append(b__28378,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.components.photos.photos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contractInstance","contractInstance",-1686123611),contractInstance__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__28379 = (i__28377 + (1));
i__28377 = G__28379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28378),starter$components$mainPage$mainPage_$_iter__28375(cljs.core.chunk_rest(s__28376__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28378),null);
}
} else {
var id = cljs.core.first(s__28376__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.components.photos.photos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contractInstance","contractInstance",-1686123611),contractInstance__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),starter$components$mainPage$mainPage_$_iter__28375(cljs.core.rest(s__28376__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(length)));
})()], null);
});
});

//# sourceMappingURL=starter.components.mainPage.js.map
