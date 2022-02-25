goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36599 = arguments.length;
var i__4865__auto___36600 = (0);
while(true){
if((i__4865__auto___36600 < len__4864__auto___36599)){
args__4870__auto__.push((arguments[i__4865__auto___36600]));

var G__36601 = (i__4865__auto___36600 + (1));
i__4865__auto___36600 = G__36601;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__36593){
var map__36594 = p__36593;
var map__36594__$1 = cljs.core.__destructure_map(map__36594);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36594__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5751__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5751__auto__){
var vec__36595 = temp__5751__auto__;
var seq__36596 = cljs.core.seq(vec__36595);
var first__36597 = cljs.core.first(seq__36596);
var seq__36596__$1 = cljs.core.next(seq__36596);
var first = first__36597;
var rest = seq__36596__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq36588){
var G__36589 = cljs.core.first(seq36588);
var seq36588__$1 = cljs.core.next(seq36588);
var G__36590 = cljs.core.first(seq36588__$1);
var seq36588__$2 = cljs.core.next(seq36588__$1);
var G__36591 = cljs.core.first(seq36588__$2);
var seq36588__$3 = cljs.core.next(seq36588__$2);
var G__36592 = cljs.core.first(seq36588__$3);
var seq36588__$4 = cljs.core.next(seq36588__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36589,G__36590,G__36591,G__36592,seq36588__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4253__auto__ = (function (){var G__36598 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__36598) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__36598));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
