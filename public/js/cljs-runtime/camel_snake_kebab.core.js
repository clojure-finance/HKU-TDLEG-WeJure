goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37008 = arguments.length;
var i__4865__auto___37009 = (0);
while(true){
if((i__4865__auto___37009 < len__4864__auto___37008)){
args__4870__auto__.push((arguments[i__4865__auto___37009]));

var G__37010 = (i__4865__auto___37009 + (1));
i__4865__auto___37009 = G__37010;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq36908){
var G__36909 = cljs.core.first(seq36908);
var seq36908__$1 = cljs.core.next(seq36908);
var G__36910 = cljs.core.first(seq36908__$1);
var seq36908__$2 = cljs.core.next(seq36908__$1);
var G__36911 = cljs.core.first(seq36908__$2);
var seq36908__$3 = cljs.core.next(seq36908__$2);
var G__36912 = cljs.core.first(seq36908__$3);
var seq36908__$4 = cljs.core.next(seq36908__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36909,G__36910,G__36911,G__36912,seq36908__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37011 = arguments.length;
var i__4865__auto___37012 = (0);
while(true){
if((i__4865__auto___37012 < len__4864__auto___37011)){
args__4870__auto__.push((arguments[i__4865__auto___37012]));

var G__37014 = (i__4865__auto___37012 + (1));
i__4865__auto___37012 = G__37014;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__36873__auto__,rest__36874__auto__){
var convert_case__36875__auto__ = (function (p1__36872__36876__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__36872__36876__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36874__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__36873__auto__,convert_case__36875__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq36913){
var G__36914 = cljs.core.first(seq36913);
var seq36913__$1 = cljs.core.next(seq36913);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36914,seq36913__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37015 = arguments.length;
var i__4865__auto___37016 = (0);
while(true){
if((i__4865__auto___37016 < len__4864__auto___37015)){
args__4870__auto__.push((arguments[i__4865__auto___37016]));

var G__37017 = (i__4865__auto___37016 + (1));
i__4865__auto___37016 = G__37017;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq36917){
var G__36918 = cljs.core.first(seq36917);
var seq36917__$1 = cljs.core.next(seq36917);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36918,seq36917__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37018 = arguments.length;
var i__4865__auto___37019 = (0);
while(true){
if((i__4865__auto___37019 < len__4864__auto___37018)){
args__4870__auto__.push((arguments[i__4865__auto___37019]));

var G__37020 = (i__4865__auto___37019 + (1));
i__4865__auto___37019 = G__37020;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq36919){
var G__36920 = cljs.core.first(seq36919);
var seq36919__$1 = cljs.core.next(seq36919);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36920,seq36919__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37022 = arguments.length;
var i__4865__auto___37023 = (0);
while(true){
if((i__4865__auto___37023 < len__4864__auto___37022)){
args__4870__auto__.push((arguments[i__4865__auto___37023]));

var G__37024 = (i__4865__auto___37023 + (1));
i__4865__auto___37023 = G__37024;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq36921){
var G__36922 = cljs.core.first(seq36921);
var seq36921__$1 = cljs.core.next(seq36921);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36922,seq36921__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37025 = arguments.length;
var i__4865__auto___37026 = (0);
while(true){
if((i__4865__auto___37026 < len__4864__auto___37025)){
args__4870__auto__.push((arguments[i__4865__auto___37026]));

var G__37027 = (i__4865__auto___37026 + (1));
i__4865__auto___37026 = G__37027;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__36873__auto__,rest__36874__auto__){
var convert_case__36875__auto__ = (function (p1__36872__36876__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__36872__36876__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36874__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__36873__auto__,convert_case__36875__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq36923){
var G__36924 = cljs.core.first(seq36923);
var seq36923__$1 = cljs.core.next(seq36923);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36924,seq36923__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37028 = arguments.length;
var i__4865__auto___37029 = (0);
while(true){
if((i__4865__auto___37029 < len__4864__auto___37028)){
args__4870__auto__.push((arguments[i__4865__auto___37029]));

var G__37030 = (i__4865__auto___37029 + (1));
i__4865__auto___37029 = G__37030;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq36926){
var G__36927 = cljs.core.first(seq36926);
var seq36926__$1 = cljs.core.next(seq36926);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36927,seq36926__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37033 = arguments.length;
var i__4865__auto___37034 = (0);
while(true){
if((i__4865__auto___37034 < len__4864__auto___37033)){
args__4870__auto__.push((arguments[i__4865__auto___37034]));

var G__37035 = (i__4865__auto___37034 + (1));
i__4865__auto___37034 = G__37035;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq36929){
var G__36930 = cljs.core.first(seq36929);
var seq36929__$1 = cljs.core.next(seq36929);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36930,seq36929__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37036 = arguments.length;
var i__4865__auto___37037 = (0);
while(true){
if((i__4865__auto___37037 < len__4864__auto___37036)){
args__4870__auto__.push((arguments[i__4865__auto___37037]));

var G__37038 = (i__4865__auto___37037 + (1));
i__4865__auto___37037 = G__37038;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq36933){
var G__36934 = cljs.core.first(seq36933);
var seq36933__$1 = cljs.core.next(seq36933);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36934,seq36933__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37039 = arguments.length;
var i__4865__auto___37040 = (0);
while(true){
if((i__4865__auto___37040 < len__4864__auto___37039)){
args__4870__auto__.push((arguments[i__4865__auto___37040]));

var G__37041 = (i__4865__auto___37040 + (1));
i__4865__auto___37040 = G__37041;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__36873__auto__,rest__36874__auto__){
var convert_case__36875__auto__ = (function (p1__36872__36876__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__36872__36876__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36874__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__36873__auto__,convert_case__36875__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq36935){
var G__36936 = cljs.core.first(seq36935);
var seq36935__$1 = cljs.core.next(seq36935);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36936,seq36935__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37042 = arguments.length;
var i__4865__auto___37043 = (0);
while(true){
if((i__4865__auto___37043 < len__4864__auto___37042)){
args__4870__auto__.push((arguments[i__4865__auto___37043]));

var G__37044 = (i__4865__auto___37043 + (1));
i__4865__auto___37043 = G__37044;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq36937){
var G__36938 = cljs.core.first(seq36937);
var seq36937__$1 = cljs.core.next(seq36937);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36938,seq36937__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37045 = arguments.length;
var i__4865__auto___37046 = (0);
while(true){
if((i__4865__auto___37046 < len__4864__auto___37045)){
args__4870__auto__.push((arguments[i__4865__auto___37046]));

var G__37047 = (i__4865__auto___37046 + (1));
i__4865__auto___37046 = G__37047;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq36940){
var G__36941 = cljs.core.first(seq36940);
var seq36940__$1 = cljs.core.next(seq36940);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36941,seq36940__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37048 = arguments.length;
var i__4865__auto___37049 = (0);
while(true){
if((i__4865__auto___37049 < len__4864__auto___37048)){
args__4870__auto__.push((arguments[i__4865__auto___37049]));

var G__37050 = (i__4865__auto___37049 + (1));
i__4865__auto___37049 = G__37050;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq36943){
var G__36944 = cljs.core.first(seq36943);
var seq36943__$1 = cljs.core.next(seq36943);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36944,seq36943__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37051 = arguments.length;
var i__4865__auto___37052 = (0);
while(true){
if((i__4865__auto___37052 < len__4864__auto___37051)){
args__4870__auto__.push((arguments[i__4865__auto___37052]));

var G__37053 = (i__4865__auto___37052 + (1));
i__4865__auto___37052 = G__37053;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__36873__auto__,rest__36874__auto__){
var convert_case__36875__auto__ = (function (p1__36872__36876__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__36872__36876__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36874__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__36873__auto__,convert_case__36875__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq36945){
var G__36946 = cljs.core.first(seq36945);
var seq36945__$1 = cljs.core.next(seq36945);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36946,seq36945__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37054 = arguments.length;
var i__4865__auto___37055 = (0);
while(true){
if((i__4865__auto___37055 < len__4864__auto___37054)){
args__4870__auto__.push((arguments[i__4865__auto___37055]));

var G__37056 = (i__4865__auto___37055 + (1));
i__4865__auto___37055 = G__37056;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq36948){
var G__36949 = cljs.core.first(seq36948);
var seq36948__$1 = cljs.core.next(seq36948);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36949,seq36948__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37057 = arguments.length;
var i__4865__auto___37058 = (0);
while(true){
if((i__4865__auto___37058 < len__4864__auto___37057)){
args__4870__auto__.push((arguments[i__4865__auto___37058]));

var G__37059 = (i__4865__auto___37058 + (1));
i__4865__auto___37058 = G__37059;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq36950){
var G__36951 = cljs.core.first(seq36950);
var seq36950__$1 = cljs.core.next(seq36950);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36951,seq36950__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37060 = arguments.length;
var i__4865__auto___37061 = (0);
while(true){
if((i__4865__auto___37061 < len__4864__auto___37060)){
args__4870__auto__.push((arguments[i__4865__auto___37061]));

var G__37062 = (i__4865__auto___37061 + (1));
i__4865__auto___37061 = G__37062;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq36952){
var G__36953 = cljs.core.first(seq36952);
var seq36952__$1 = cljs.core.next(seq36952);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36953,seq36952__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37063 = arguments.length;
var i__4865__auto___37064 = (0);
while(true){
if((i__4865__auto___37064 < len__4864__auto___37063)){
args__4870__auto__.push((arguments[i__4865__auto___37064]));

var G__37065 = (i__4865__auto___37064 + (1));
i__4865__auto___37064 = G__37065;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__36873__auto__,rest__36874__auto__){
var convert_case__36875__auto__ = (function (p1__36872__36876__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__36872__36876__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36874__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__36873__auto__,convert_case__36875__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq36956){
var G__36957 = cljs.core.first(seq36956);
var seq36956__$1 = cljs.core.next(seq36956);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36957,seq36956__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37066 = arguments.length;
var i__4865__auto___37067 = (0);
while(true){
if((i__4865__auto___37067 < len__4864__auto___37066)){
args__4870__auto__.push((arguments[i__4865__auto___37067]));

var G__37068 = (i__4865__auto___37067 + (1));
i__4865__auto___37067 = G__37068;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq36961){
var G__36962 = cljs.core.first(seq36961);
var seq36961__$1 = cljs.core.next(seq36961);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36962,seq36961__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37071 = arguments.length;
var i__4865__auto___37072 = (0);
while(true){
if((i__4865__auto___37072 < len__4864__auto___37071)){
args__4870__auto__.push((arguments[i__4865__auto___37072]));

var G__37073 = (i__4865__auto___37072 + (1));
i__4865__auto___37072 = G__37073;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq36973){
var G__36974 = cljs.core.first(seq36973);
var seq36973__$1 = cljs.core.next(seq36973);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36974,seq36973__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37074 = arguments.length;
var i__4865__auto___37075 = (0);
while(true){
if((i__4865__auto___37075 < len__4864__auto___37074)){
args__4870__auto__.push((arguments[i__4865__auto___37075]));

var G__37076 = (i__4865__auto___37075 + (1));
i__4865__auto___37075 = G__37076;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq36976){
var G__36977 = cljs.core.first(seq36976);
var seq36976__$1 = cljs.core.next(seq36976);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36977,seq36976__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37077 = arguments.length;
var i__4865__auto___37078 = (0);
while(true){
if((i__4865__auto___37078 < len__4864__auto___37077)){
args__4870__auto__.push((arguments[i__4865__auto___37078]));

var G__37079 = (i__4865__auto___37078 + (1));
i__4865__auto___37078 = G__37079;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__36873__auto__,rest__36874__auto__){
var convert_case__36875__auto__ = (function (p1__36872__36876__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__36872__36876__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36874__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__36873__auto__,convert_case__36875__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq36985){
var G__36986 = cljs.core.first(seq36985);
var seq36985__$1 = cljs.core.next(seq36985);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36986,seq36985__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37080 = arguments.length;
var i__4865__auto___37081 = (0);
while(true){
if((i__4865__auto___37081 < len__4864__auto___37080)){
args__4870__auto__.push((arguments[i__4865__auto___37081]));

var G__37082 = (i__4865__auto___37081 + (1));
i__4865__auto___37081 = G__37082;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq36992){
var G__36993 = cljs.core.first(seq36992);
var seq36992__$1 = cljs.core.next(seq36992);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36993,seq36992__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37083 = arguments.length;
var i__4865__auto___37084 = (0);
while(true){
if((i__4865__auto___37084 < len__4864__auto___37083)){
args__4870__auto__.push((arguments[i__4865__auto___37084]));

var G__37085 = (i__4865__auto___37084 + (1));
i__4865__auto___37084 = G__37085;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq36994){
var G__36995 = cljs.core.first(seq36994);
var seq36994__$1 = cljs.core.next(seq36994);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36995,seq36994__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37086 = arguments.length;
var i__4865__auto___37087 = (0);
while(true){
if((i__4865__auto___37087 < len__4864__auto___37086)){
args__4870__auto__.push((arguments[i__4865__auto___37087]));

var G__37088 = (i__4865__auto___37087 + (1));
i__4865__auto___37087 = G__37088;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq36996){
var G__36997 = cljs.core.first(seq36996);
var seq36996__$1 = cljs.core.next(seq36996);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36997,seq36996__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37089 = arguments.length;
var i__4865__auto___37090 = (0);
while(true){
if((i__4865__auto___37090 < len__4864__auto___37089)){
args__4870__auto__.push((arguments[i__4865__auto___37090]));

var G__37091 = (i__4865__auto___37090 + (1));
i__4865__auto___37090 = G__37091;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__36873__auto__,rest__36874__auto__){
var convert_case__36875__auto__ = (function (p1__36872__36876__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__36872__36876__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36874__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__36873__auto__,convert_case__36875__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq36998){
var G__36999 = cljs.core.first(seq36998);
var seq36998__$1 = cljs.core.next(seq36998);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36999,seq36998__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37092 = arguments.length;
var i__4865__auto___37093 = (0);
while(true){
if((i__4865__auto___37093 < len__4864__auto___37092)){
args__4870__auto__.push((arguments[i__4865__auto___37093]));

var G__37094 = (i__4865__auto___37093 + (1));
i__4865__auto___37093 = G__37094;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq37000){
var G__37001 = cljs.core.first(seq37000);
var seq37000__$1 = cljs.core.next(seq37000);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37001,seq37000__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37095 = arguments.length;
var i__4865__auto___37096 = (0);
while(true){
if((i__4865__auto___37096 < len__4864__auto___37095)){
args__4870__auto__.push((arguments[i__4865__auto___37096]));

var G__37097 = (i__4865__auto___37096 + (1));
i__4865__auto___37096 = G__37097;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq37002){
var G__37003 = cljs.core.first(seq37002);
var seq37002__$1 = cljs.core.next(seq37002);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37003,seq37002__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37098 = arguments.length;
var i__4865__auto___37099 = (0);
while(true){
if((i__4865__auto___37099 < len__4864__auto___37098)){
args__4870__auto__.push((arguments[i__4865__auto___37099]));

var G__37100 = (i__4865__auto___37099 + (1));
i__4865__auto___37099 = G__37100;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__36878__auto__,rest__36879__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__36878__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36879__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq37005){
var G__37006 = cljs.core.first(seq37005);
var seq37005__$1 = cljs.core.next(seq37005);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37006,seq37005__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
