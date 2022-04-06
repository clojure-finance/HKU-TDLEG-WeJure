goog.provide('starter.components.mainPage');
starter.components.mainPage.ipfsUrl = "https://ipfs.infura.io/ipfs/";
starter.components.mainPage.mainPage = (function starter$components$mainPage$mainPage(p__26898){
var map__26899 = p__26898;
var map__26899__$1 = cljs.core.__destructure_map(map__26899);
var contractInstance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26899__$1,new cljs.core.Keyword(null,"contractInstance","contractInstance",-1686123611));
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26899__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var length = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
contractInstance.methods.picsLength().call((function (error,result){
if(cljs.core.truth_(error)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error], 0));
} else {
return cljs.core.reset_BANG_(length,result);
}
}));

return (function (p__26900){
var map__26901 = p__26900;
var map__26901__$1 = cljs.core.__destructure_map(map__26901);
var contractInstance__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26901__$1,new cljs.core.Keyword(null,"contractInstance","contractInstance",-1686123611));
var details__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26901__$1,new cljs.core.Keyword(null,"details","details",1956795411));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),(function (){var iter__4652__auto__ = (function starter$components$mainPage$mainPage_$_iter__26902(s__26903){
return (new cljs.core.LazySeq(null,(function (){
var s__26903__$1 = s__26903;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__26903__$1);
if(temp__5753__auto__){
var s__26903__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26903__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__26903__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__26905 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__26904 = (0);
while(true){
if((i__26904 < size__4651__auto__)){
var id = cljs.core._nth(c__4650__auto__,i__26904);
cljs.core.chunk_append(b__26905,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.components.photos.photos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contractInstance","contractInstance",-1686123611),contractInstance__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__26906 = (i__26904 + (1));
i__26904 = G__26906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26905),starter$components$mainPage$mainPage_$_iter__26902(cljs.core.chunk_rest(s__26903__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26905),null);
}
} else {
var id = cljs.core.first(s__26903__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.components.photos.photos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contractInstance","contractInstance",-1686123611),contractInstance__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),starter$components$mainPage$mainPage_$_iter__26902(cljs.core.rest(s__26903__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(length))));
})()], null);
});
});

//# sourceMappingURL=starter.components.mainPage.js.map
