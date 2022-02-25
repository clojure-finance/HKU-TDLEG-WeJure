goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__35813__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35813 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35814__i = 0, G__35814__a = new Array(arguments.length -  0);
while (G__35814__i < G__35814__a.length) {G__35814__a[G__35814__i] = arguments[G__35814__i + 0]; ++G__35814__i;}
  args = new cljs.core.IndexedSeq(G__35814__a,0,null);
} 
return G__35813__delegate.call(this,args);};
G__35813.cljs$lang$maxFixedArity = 0;
G__35813.cljs$lang$applyTo = (function (arglist__35815){
var args = cljs.core.seq(arglist__35815);
return G__35813__delegate(args);
});
G__35813.cljs$core$IFn$_invoke$arity$variadic = G__35813__delegate;
return G__35813;
})()
);

(o.error = (function() { 
var G__35816__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35817__i = 0, G__35817__a = new Array(arguments.length -  0);
while (G__35817__i < G__35817__a.length) {G__35817__a[G__35817__i] = arguments[G__35817__i + 0]; ++G__35817__i;}
  args = new cljs.core.IndexedSeq(G__35817__a,0,null);
} 
return G__35816__delegate.call(this,args);};
G__35816.cljs$lang$maxFixedArity = 0;
G__35816.cljs$lang$applyTo = (function (arglist__35818){
var args = cljs.core.seq(arglist__35818);
return G__35816__delegate(args);
});
G__35816.cljs$core$IFn$_invoke$arity$variadic = G__35816__delegate;
return G__35816;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
