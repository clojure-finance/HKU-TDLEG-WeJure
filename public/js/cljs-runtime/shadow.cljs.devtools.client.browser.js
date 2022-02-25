goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36257 = arguments.length;
var i__4865__auto___36258 = (0);
while(true){
if((i__4865__auto___36258 < len__4864__auto___36257)){
args__4870__auto__.push((arguments[i__4865__auto___36258]));

var G__36259 = (i__4865__auto___36258 + (1));
i__4865__auto___36258 = G__36259;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35904){
var G__35905 = cljs.core.first(seq35904);
var seq35904__$1 = cljs.core.next(seq35904);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35905,seq35904__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35907 = cljs.core.seq(sources);
var chunk__35908 = null;
var count__35909 = (0);
var i__35910 = (0);
while(true){
if((i__35910 < count__35909)){
var map__35919 = chunk__35908.cljs$core$IIndexed$_nth$arity$2(null,i__35910);
var map__35919__$1 = cljs.core.__destructure_map(map__35919);
var src = map__35919__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35919__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35919__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35919__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35919__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35920){var e_36260 = e35920;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36260);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36260.message)].join('')));
}

var G__36267 = seq__35907;
var G__36268 = chunk__35908;
var G__36269 = count__35909;
var G__36270 = (i__35910 + (1));
seq__35907 = G__36267;
chunk__35908 = G__36268;
count__35909 = G__36269;
i__35910 = G__36270;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35907);
if(temp__5753__auto__){
var seq__35907__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35907__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35907__$1);
var G__36271 = cljs.core.chunk_rest(seq__35907__$1);
var G__36272 = c__4679__auto__;
var G__36273 = cljs.core.count(c__4679__auto__);
var G__36274 = (0);
seq__35907 = G__36271;
chunk__35908 = G__36272;
count__35909 = G__36273;
i__35910 = G__36274;
continue;
} else {
var map__35921 = cljs.core.first(seq__35907__$1);
var map__35921__$1 = cljs.core.__destructure_map(map__35921);
var src = map__35921__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35922){var e_36275 = e35922;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36275);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36275.message)].join('')));
}

var G__36278 = cljs.core.next(seq__35907__$1);
var G__36279 = null;
var G__36280 = (0);
var G__36281 = (0);
seq__35907 = G__36278;
chunk__35908 = G__36279;
count__35909 = G__36280;
i__35910 = G__36281;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35923 = cljs.core.seq(js_requires);
var chunk__35924 = null;
var count__35925 = (0);
var i__35926 = (0);
while(true){
if((i__35926 < count__35925)){
var js_ns = chunk__35924.cljs$core$IIndexed$_nth$arity$2(null,i__35926);
var require_str_36282 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36282);


var G__36286 = seq__35923;
var G__36287 = chunk__35924;
var G__36288 = count__35925;
var G__36289 = (i__35926 + (1));
seq__35923 = G__36286;
chunk__35924 = G__36287;
count__35925 = G__36288;
i__35926 = G__36289;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35923);
if(temp__5753__auto__){
var seq__35923__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35923__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35923__$1);
var G__36290 = cljs.core.chunk_rest(seq__35923__$1);
var G__36291 = c__4679__auto__;
var G__36292 = cljs.core.count(c__4679__auto__);
var G__36293 = (0);
seq__35923 = G__36290;
chunk__35924 = G__36291;
count__35925 = G__36292;
i__35926 = G__36293;
continue;
} else {
var js_ns = cljs.core.first(seq__35923__$1);
var require_str_36294 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36294);


var G__36295 = cljs.core.next(seq__35923__$1);
var G__36296 = null;
var G__36297 = (0);
var G__36298 = (0);
seq__35923 = G__36295;
chunk__35924 = G__36296;
count__35925 = G__36297;
i__35926 = G__36298;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35928){
var map__35930 = p__35928;
var map__35930__$1 = cljs.core.__destructure_map(map__35930);
var msg = map__35930__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35930__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35930__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35932(s__35933){
return (new cljs.core.LazySeq(null,(function (){
var s__35933__$1 = s__35933;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35933__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35942 = cljs.core.first(xs__6308__auto__);
var map__35942__$1 = cljs.core.__destructure_map(map__35942);
var src = map__35942__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35942__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35942__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__35933__$1,map__35942,map__35942__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35930,map__35930__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35932_$_iter__35934(s__35935){
return (new cljs.core.LazySeq(null,((function (s__35933__$1,map__35942,map__35942__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35930,map__35930__$1,msg,info,reload_info){
return (function (){
var s__35935__$1 = s__35935;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35935__$1);
if(temp__5753__auto____$1){
var s__35935__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35935__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35935__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35937 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35936 = (0);
while(true){
if((i__35936 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__35936);
cljs.core.chunk_append(b__35937,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36299 = (i__35936 + (1));
i__35936 = G__36299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35937),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35932_$_iter__35934(cljs.core.chunk_rest(s__35935__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35937),null);
}
} else {
var warning = cljs.core.first(s__35935__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35932_$_iter__35934(cljs.core.rest(s__35935__$2)));
}
} else {
return null;
}
break;
}
});})(s__35933__$1,map__35942,map__35942__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35930,map__35930__$1,msg,info,reload_info))
,null,null));
});})(s__35933__$1,map__35942,map__35942__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35930,map__35930__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35932(cljs.core.rest(s__35933__$1)));
} else {
var G__36305 = cljs.core.rest(s__35933__$1);
s__35933__$1 = G__36305;
continue;
}
} else {
var G__36306 = cljs.core.rest(s__35933__$1);
s__35933__$1 = G__36306;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35943_36307 = cljs.core.seq(warnings);
var chunk__35944_36308 = null;
var count__35945_36309 = (0);
var i__35946_36310 = (0);
while(true){
if((i__35946_36310 < count__35945_36309)){
var map__35949_36311 = chunk__35944_36308.cljs$core$IIndexed$_nth$arity$2(null,i__35946_36310);
var map__35949_36312__$1 = cljs.core.__destructure_map(map__35949_36311);
var w_36313 = map__35949_36312__$1;
var msg_36314__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35949_36312__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35949_36312__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35949_36312__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35949_36312__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36317)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36315),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36316),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36314__$1)].join(''));


var G__36318 = seq__35943_36307;
var G__36319 = chunk__35944_36308;
var G__36320 = count__35945_36309;
var G__36321 = (i__35946_36310 + (1));
seq__35943_36307 = G__36318;
chunk__35944_36308 = G__36319;
count__35945_36309 = G__36320;
i__35946_36310 = G__36321;
continue;
} else {
var temp__5753__auto___36322 = cljs.core.seq(seq__35943_36307);
if(temp__5753__auto___36322){
var seq__35943_36323__$1 = temp__5753__auto___36322;
if(cljs.core.chunked_seq_QMARK_(seq__35943_36323__$1)){
var c__4679__auto___36324 = cljs.core.chunk_first(seq__35943_36323__$1);
var G__36325 = cljs.core.chunk_rest(seq__35943_36323__$1);
var G__36326 = c__4679__auto___36324;
var G__36327 = cljs.core.count(c__4679__auto___36324);
var G__36328 = (0);
seq__35943_36307 = G__36325;
chunk__35944_36308 = G__36326;
count__35945_36309 = G__36327;
i__35946_36310 = G__36328;
continue;
} else {
var map__35950_36329 = cljs.core.first(seq__35943_36323__$1);
var map__35950_36330__$1 = cljs.core.__destructure_map(map__35950_36329);
var w_36331 = map__35950_36330__$1;
var msg_36332__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950_36330__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950_36330__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950_36330__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950_36330__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36335)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36333),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36334),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36332__$1)].join(''));


var G__36336 = cljs.core.next(seq__35943_36323__$1);
var G__36337 = null;
var G__36338 = (0);
var G__36339 = (0);
seq__35943_36307 = G__36336;
chunk__35944_36308 = G__36337;
count__35945_36309 = G__36338;
i__35946_36310 = G__36339;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35927_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35927_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35953){
var map__35954 = p__35953;
var map__35954__$1 = cljs.core.__destructure_map(map__35954);
var msg = map__35954__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35954__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35954__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__35957 = cljs.core.seq(updates);
var chunk__35959 = null;
var count__35960 = (0);
var i__35961 = (0);
while(true){
if((i__35961 < count__35960)){
var path = chunk__35959.cljs$core$IIndexed$_nth$arity$2(null,i__35961);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36095_36341 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36099_36342 = null;
var count__36100_36343 = (0);
var i__36101_36344 = (0);
while(true){
if((i__36101_36344 < count__36100_36343)){
var node_36345 = chunk__36099_36342.cljs$core$IIndexed$_nth$arity$2(null,i__36101_36344);
if(cljs.core.not(node_36345.shadow$old)){
var path_match_36346 = shadow.cljs.devtools.client.browser.match_paths(node_36345.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36346)){
var new_link_36347 = (function (){var G__36134 = node_36345.cloneNode(true);
G__36134.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36346),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36134;
})();
(node_36345.shadow$old = true);

(new_link_36347.onload = ((function (seq__36095_36341,chunk__36099_36342,count__36100_36343,i__36101_36344,seq__35957,chunk__35959,count__35960,i__35961,new_link_36347,path_match_36346,node_36345,path,map__35954,map__35954__$1,msg,updates,reload_info){
return (function (e){
var seq__36136_36348 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36138_36349 = null;
var count__36139_36350 = (0);
var i__36140_36351 = (0);
while(true){
if((i__36140_36351 < count__36139_36350)){
var map__36147_36353 = chunk__36138_36349.cljs$core$IIndexed$_nth$arity$2(null,i__36140_36351);
var map__36147_36354__$1 = cljs.core.__destructure_map(map__36147_36353);
var task_36355 = map__36147_36354__$1;
var fn_str_36356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36147_36354__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36147_36354__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36360 = goog.getObjectByName(fn_str_36356,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36357)].join(''));

(fn_obj_36360.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36360.cljs$core$IFn$_invoke$arity$2(path,new_link_36347) : fn_obj_36360.call(null,path,new_link_36347));


var G__36361 = seq__36136_36348;
var G__36362 = chunk__36138_36349;
var G__36363 = count__36139_36350;
var G__36364 = (i__36140_36351 + (1));
seq__36136_36348 = G__36361;
chunk__36138_36349 = G__36362;
count__36139_36350 = G__36363;
i__36140_36351 = G__36364;
continue;
} else {
var temp__5753__auto___36365 = cljs.core.seq(seq__36136_36348);
if(temp__5753__auto___36365){
var seq__36136_36366__$1 = temp__5753__auto___36365;
if(cljs.core.chunked_seq_QMARK_(seq__36136_36366__$1)){
var c__4679__auto___36367 = cljs.core.chunk_first(seq__36136_36366__$1);
var G__36368 = cljs.core.chunk_rest(seq__36136_36366__$1);
var G__36369 = c__4679__auto___36367;
var G__36370 = cljs.core.count(c__4679__auto___36367);
var G__36371 = (0);
seq__36136_36348 = G__36368;
chunk__36138_36349 = G__36369;
count__36139_36350 = G__36370;
i__36140_36351 = G__36371;
continue;
} else {
var map__36148_36372 = cljs.core.first(seq__36136_36366__$1);
var map__36148_36373__$1 = cljs.core.__destructure_map(map__36148_36372);
var task_36374 = map__36148_36373__$1;
var fn_str_36375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36148_36373__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36148_36373__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36377 = goog.getObjectByName(fn_str_36375,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36376)].join(''));

(fn_obj_36377.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36377.cljs$core$IFn$_invoke$arity$2(path,new_link_36347) : fn_obj_36377.call(null,path,new_link_36347));


var G__36378 = cljs.core.next(seq__36136_36366__$1);
var G__36379 = null;
var G__36380 = (0);
var G__36381 = (0);
seq__36136_36348 = G__36378;
chunk__36138_36349 = G__36379;
count__36139_36350 = G__36380;
i__36140_36351 = G__36381;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36345);
});})(seq__36095_36341,chunk__36099_36342,count__36100_36343,i__36101_36344,seq__35957,chunk__35959,count__35960,i__35961,new_link_36347,path_match_36346,node_36345,path,map__35954,map__35954__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36346], 0));

goog.dom.insertSiblingAfter(new_link_36347,node_36345);


var G__36382 = seq__36095_36341;
var G__36383 = chunk__36099_36342;
var G__36384 = count__36100_36343;
var G__36385 = (i__36101_36344 + (1));
seq__36095_36341 = G__36382;
chunk__36099_36342 = G__36383;
count__36100_36343 = G__36384;
i__36101_36344 = G__36385;
continue;
} else {
var G__36386 = seq__36095_36341;
var G__36387 = chunk__36099_36342;
var G__36388 = count__36100_36343;
var G__36389 = (i__36101_36344 + (1));
seq__36095_36341 = G__36386;
chunk__36099_36342 = G__36387;
count__36100_36343 = G__36388;
i__36101_36344 = G__36389;
continue;
}
} else {
var G__36390 = seq__36095_36341;
var G__36391 = chunk__36099_36342;
var G__36392 = count__36100_36343;
var G__36393 = (i__36101_36344 + (1));
seq__36095_36341 = G__36390;
chunk__36099_36342 = G__36391;
count__36100_36343 = G__36392;
i__36101_36344 = G__36393;
continue;
}
} else {
var temp__5753__auto___36394 = cljs.core.seq(seq__36095_36341);
if(temp__5753__auto___36394){
var seq__36095_36395__$1 = temp__5753__auto___36394;
if(cljs.core.chunked_seq_QMARK_(seq__36095_36395__$1)){
var c__4679__auto___36396 = cljs.core.chunk_first(seq__36095_36395__$1);
var G__36397 = cljs.core.chunk_rest(seq__36095_36395__$1);
var G__36398 = c__4679__auto___36396;
var G__36399 = cljs.core.count(c__4679__auto___36396);
var G__36400 = (0);
seq__36095_36341 = G__36397;
chunk__36099_36342 = G__36398;
count__36100_36343 = G__36399;
i__36101_36344 = G__36400;
continue;
} else {
var node_36404 = cljs.core.first(seq__36095_36395__$1);
if(cljs.core.not(node_36404.shadow$old)){
var path_match_36411 = shadow.cljs.devtools.client.browser.match_paths(node_36404.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36411)){
var new_link_36412 = (function (){var G__36149 = node_36404.cloneNode(true);
G__36149.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36411),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36149;
})();
(node_36404.shadow$old = true);

(new_link_36412.onload = ((function (seq__36095_36341,chunk__36099_36342,count__36100_36343,i__36101_36344,seq__35957,chunk__35959,count__35960,i__35961,new_link_36412,path_match_36411,node_36404,seq__36095_36395__$1,temp__5753__auto___36394,path,map__35954,map__35954__$1,msg,updates,reload_info){
return (function (e){
var seq__36150_36414 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36152_36415 = null;
var count__36153_36416 = (0);
var i__36154_36417 = (0);
while(true){
if((i__36154_36417 < count__36153_36416)){
var map__36162_36418 = chunk__36152_36415.cljs$core$IIndexed$_nth$arity$2(null,i__36154_36417);
var map__36162_36419__$1 = cljs.core.__destructure_map(map__36162_36418);
var task_36420 = map__36162_36419__$1;
var fn_str_36421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162_36419__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162_36419__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36423 = goog.getObjectByName(fn_str_36421,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36422)].join(''));

(fn_obj_36423.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36423.cljs$core$IFn$_invoke$arity$2(path,new_link_36412) : fn_obj_36423.call(null,path,new_link_36412));


var G__36424 = seq__36150_36414;
var G__36425 = chunk__36152_36415;
var G__36426 = count__36153_36416;
var G__36427 = (i__36154_36417 + (1));
seq__36150_36414 = G__36424;
chunk__36152_36415 = G__36425;
count__36153_36416 = G__36426;
i__36154_36417 = G__36427;
continue;
} else {
var temp__5753__auto___36428__$1 = cljs.core.seq(seq__36150_36414);
if(temp__5753__auto___36428__$1){
var seq__36150_36429__$1 = temp__5753__auto___36428__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36150_36429__$1)){
var c__4679__auto___36430 = cljs.core.chunk_first(seq__36150_36429__$1);
var G__36431 = cljs.core.chunk_rest(seq__36150_36429__$1);
var G__36432 = c__4679__auto___36430;
var G__36433 = cljs.core.count(c__4679__auto___36430);
var G__36434 = (0);
seq__36150_36414 = G__36431;
chunk__36152_36415 = G__36432;
count__36153_36416 = G__36433;
i__36154_36417 = G__36434;
continue;
} else {
var map__36163_36435 = cljs.core.first(seq__36150_36429__$1);
var map__36163_36436__$1 = cljs.core.__destructure_map(map__36163_36435);
var task_36437 = map__36163_36436__$1;
var fn_str_36438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163_36436__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163_36436__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36440 = goog.getObjectByName(fn_str_36438,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36439)].join(''));

(fn_obj_36440.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36440.cljs$core$IFn$_invoke$arity$2(path,new_link_36412) : fn_obj_36440.call(null,path,new_link_36412));


var G__36441 = cljs.core.next(seq__36150_36429__$1);
var G__36442 = null;
var G__36443 = (0);
var G__36444 = (0);
seq__36150_36414 = G__36441;
chunk__36152_36415 = G__36442;
count__36153_36416 = G__36443;
i__36154_36417 = G__36444;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36404);
});})(seq__36095_36341,chunk__36099_36342,count__36100_36343,i__36101_36344,seq__35957,chunk__35959,count__35960,i__35961,new_link_36412,path_match_36411,node_36404,seq__36095_36395__$1,temp__5753__auto___36394,path,map__35954,map__35954__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36411], 0));

goog.dom.insertSiblingAfter(new_link_36412,node_36404);


var G__36445 = cljs.core.next(seq__36095_36395__$1);
var G__36446 = null;
var G__36447 = (0);
var G__36448 = (0);
seq__36095_36341 = G__36445;
chunk__36099_36342 = G__36446;
count__36100_36343 = G__36447;
i__36101_36344 = G__36448;
continue;
} else {
var G__36449 = cljs.core.next(seq__36095_36395__$1);
var G__36450 = null;
var G__36451 = (0);
var G__36452 = (0);
seq__36095_36341 = G__36449;
chunk__36099_36342 = G__36450;
count__36100_36343 = G__36451;
i__36101_36344 = G__36452;
continue;
}
} else {
var G__36453 = cljs.core.next(seq__36095_36395__$1);
var G__36454 = null;
var G__36455 = (0);
var G__36456 = (0);
seq__36095_36341 = G__36453;
chunk__36099_36342 = G__36454;
count__36100_36343 = G__36455;
i__36101_36344 = G__36456;
continue;
}
}
} else {
}
}
break;
}


var G__36457 = seq__35957;
var G__36458 = chunk__35959;
var G__36459 = count__35960;
var G__36460 = (i__35961 + (1));
seq__35957 = G__36457;
chunk__35959 = G__36458;
count__35960 = G__36459;
i__35961 = G__36460;
continue;
} else {
var G__36461 = seq__35957;
var G__36462 = chunk__35959;
var G__36463 = count__35960;
var G__36464 = (i__35961 + (1));
seq__35957 = G__36461;
chunk__35959 = G__36462;
count__35960 = G__36463;
i__35961 = G__36464;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35957);
if(temp__5753__auto__){
var seq__35957__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35957__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35957__$1);
var G__36465 = cljs.core.chunk_rest(seq__35957__$1);
var G__36466 = c__4679__auto__;
var G__36467 = cljs.core.count(c__4679__auto__);
var G__36468 = (0);
seq__35957 = G__36465;
chunk__35959 = G__36466;
count__35960 = G__36467;
i__35961 = G__36468;
continue;
} else {
var path = cljs.core.first(seq__35957__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36164_36469 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36168_36470 = null;
var count__36169_36471 = (0);
var i__36170_36472 = (0);
while(true){
if((i__36170_36472 < count__36169_36471)){
var node_36473 = chunk__36168_36470.cljs$core$IIndexed$_nth$arity$2(null,i__36170_36472);
if(cljs.core.not(node_36473.shadow$old)){
var path_match_36474 = shadow.cljs.devtools.client.browser.match_paths(node_36473.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36474)){
var new_link_36475 = (function (){var G__36203 = node_36473.cloneNode(true);
G__36203.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36474),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36203;
})();
(node_36473.shadow$old = true);

(new_link_36475.onload = ((function (seq__36164_36469,chunk__36168_36470,count__36169_36471,i__36170_36472,seq__35957,chunk__35959,count__35960,i__35961,new_link_36475,path_match_36474,node_36473,path,seq__35957__$1,temp__5753__auto__,map__35954,map__35954__$1,msg,updates,reload_info){
return (function (e){
var seq__36204_36479 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36206_36480 = null;
var count__36207_36481 = (0);
var i__36208_36482 = (0);
while(true){
if((i__36208_36482 < count__36207_36481)){
var map__36212_36483 = chunk__36206_36480.cljs$core$IIndexed$_nth$arity$2(null,i__36208_36482);
var map__36212_36484__$1 = cljs.core.__destructure_map(map__36212_36483);
var task_36485 = map__36212_36484__$1;
var fn_str_36486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36212_36484__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36212_36484__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36491 = goog.getObjectByName(fn_str_36486,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36487)].join(''));

(fn_obj_36491.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36491.cljs$core$IFn$_invoke$arity$2(path,new_link_36475) : fn_obj_36491.call(null,path,new_link_36475));


var G__36492 = seq__36204_36479;
var G__36493 = chunk__36206_36480;
var G__36494 = count__36207_36481;
var G__36495 = (i__36208_36482 + (1));
seq__36204_36479 = G__36492;
chunk__36206_36480 = G__36493;
count__36207_36481 = G__36494;
i__36208_36482 = G__36495;
continue;
} else {
var temp__5753__auto___36496__$1 = cljs.core.seq(seq__36204_36479);
if(temp__5753__auto___36496__$1){
var seq__36204_36498__$1 = temp__5753__auto___36496__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36204_36498__$1)){
var c__4679__auto___36499 = cljs.core.chunk_first(seq__36204_36498__$1);
var G__36500 = cljs.core.chunk_rest(seq__36204_36498__$1);
var G__36501 = c__4679__auto___36499;
var G__36502 = cljs.core.count(c__4679__auto___36499);
var G__36503 = (0);
seq__36204_36479 = G__36500;
chunk__36206_36480 = G__36501;
count__36207_36481 = G__36502;
i__36208_36482 = G__36503;
continue;
} else {
var map__36213_36504 = cljs.core.first(seq__36204_36498__$1);
var map__36213_36505__$1 = cljs.core.__destructure_map(map__36213_36504);
var task_36506 = map__36213_36505__$1;
var fn_str_36507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36213_36505__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36213_36505__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36509 = goog.getObjectByName(fn_str_36507,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36508)].join(''));

(fn_obj_36509.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36509.cljs$core$IFn$_invoke$arity$2(path,new_link_36475) : fn_obj_36509.call(null,path,new_link_36475));


var G__36510 = cljs.core.next(seq__36204_36498__$1);
var G__36511 = null;
var G__36512 = (0);
var G__36513 = (0);
seq__36204_36479 = G__36510;
chunk__36206_36480 = G__36511;
count__36207_36481 = G__36512;
i__36208_36482 = G__36513;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36473);
});})(seq__36164_36469,chunk__36168_36470,count__36169_36471,i__36170_36472,seq__35957,chunk__35959,count__35960,i__35961,new_link_36475,path_match_36474,node_36473,path,seq__35957__$1,temp__5753__auto__,map__35954,map__35954__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36474], 0));

goog.dom.insertSiblingAfter(new_link_36475,node_36473);


var G__36514 = seq__36164_36469;
var G__36515 = chunk__36168_36470;
var G__36516 = count__36169_36471;
var G__36517 = (i__36170_36472 + (1));
seq__36164_36469 = G__36514;
chunk__36168_36470 = G__36515;
count__36169_36471 = G__36516;
i__36170_36472 = G__36517;
continue;
} else {
var G__36518 = seq__36164_36469;
var G__36519 = chunk__36168_36470;
var G__36520 = count__36169_36471;
var G__36521 = (i__36170_36472 + (1));
seq__36164_36469 = G__36518;
chunk__36168_36470 = G__36519;
count__36169_36471 = G__36520;
i__36170_36472 = G__36521;
continue;
}
} else {
var G__36522 = seq__36164_36469;
var G__36523 = chunk__36168_36470;
var G__36524 = count__36169_36471;
var G__36525 = (i__36170_36472 + (1));
seq__36164_36469 = G__36522;
chunk__36168_36470 = G__36523;
count__36169_36471 = G__36524;
i__36170_36472 = G__36525;
continue;
}
} else {
var temp__5753__auto___36526__$1 = cljs.core.seq(seq__36164_36469);
if(temp__5753__auto___36526__$1){
var seq__36164_36527__$1 = temp__5753__auto___36526__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36164_36527__$1)){
var c__4679__auto___36528 = cljs.core.chunk_first(seq__36164_36527__$1);
var G__36529 = cljs.core.chunk_rest(seq__36164_36527__$1);
var G__36530 = c__4679__auto___36528;
var G__36531 = cljs.core.count(c__4679__auto___36528);
var G__36532 = (0);
seq__36164_36469 = G__36529;
chunk__36168_36470 = G__36530;
count__36169_36471 = G__36531;
i__36170_36472 = G__36532;
continue;
} else {
var node_36533 = cljs.core.first(seq__36164_36527__$1);
if(cljs.core.not(node_36533.shadow$old)){
var path_match_36534 = shadow.cljs.devtools.client.browser.match_paths(node_36533.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36534)){
var new_link_36535 = (function (){var G__36214 = node_36533.cloneNode(true);
G__36214.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36534),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36214;
})();
(node_36533.shadow$old = true);

(new_link_36535.onload = ((function (seq__36164_36469,chunk__36168_36470,count__36169_36471,i__36170_36472,seq__35957,chunk__35959,count__35960,i__35961,new_link_36535,path_match_36534,node_36533,seq__36164_36527__$1,temp__5753__auto___36526__$1,path,seq__35957__$1,temp__5753__auto__,map__35954,map__35954__$1,msg,updates,reload_info){
return (function (e){
var seq__36215_36536 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36217_36537 = null;
var count__36218_36538 = (0);
var i__36219_36539 = (0);
while(true){
if((i__36219_36539 < count__36218_36538)){
var map__36223_36540 = chunk__36217_36537.cljs$core$IIndexed$_nth$arity$2(null,i__36219_36539);
var map__36223_36541__$1 = cljs.core.__destructure_map(map__36223_36540);
var task_36542 = map__36223_36541__$1;
var fn_str_36543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223_36541__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223_36541__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36545 = goog.getObjectByName(fn_str_36543,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36544)].join(''));

(fn_obj_36545.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36545.cljs$core$IFn$_invoke$arity$2(path,new_link_36535) : fn_obj_36545.call(null,path,new_link_36535));


var G__36546 = seq__36215_36536;
var G__36547 = chunk__36217_36537;
var G__36548 = count__36218_36538;
var G__36549 = (i__36219_36539 + (1));
seq__36215_36536 = G__36546;
chunk__36217_36537 = G__36547;
count__36218_36538 = G__36548;
i__36219_36539 = G__36549;
continue;
} else {
var temp__5753__auto___36550__$2 = cljs.core.seq(seq__36215_36536);
if(temp__5753__auto___36550__$2){
var seq__36215_36551__$1 = temp__5753__auto___36550__$2;
if(cljs.core.chunked_seq_QMARK_(seq__36215_36551__$1)){
var c__4679__auto___36552 = cljs.core.chunk_first(seq__36215_36551__$1);
var G__36553 = cljs.core.chunk_rest(seq__36215_36551__$1);
var G__36554 = c__4679__auto___36552;
var G__36555 = cljs.core.count(c__4679__auto___36552);
var G__36556 = (0);
seq__36215_36536 = G__36553;
chunk__36217_36537 = G__36554;
count__36218_36538 = G__36555;
i__36219_36539 = G__36556;
continue;
} else {
var map__36224_36557 = cljs.core.first(seq__36215_36551__$1);
var map__36224_36558__$1 = cljs.core.__destructure_map(map__36224_36557);
var task_36559 = map__36224_36558__$1;
var fn_str_36560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36224_36558__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36224_36558__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36562 = goog.getObjectByName(fn_str_36560,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36561)].join(''));

(fn_obj_36562.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36562.cljs$core$IFn$_invoke$arity$2(path,new_link_36535) : fn_obj_36562.call(null,path,new_link_36535));


var G__36563 = cljs.core.next(seq__36215_36551__$1);
var G__36564 = null;
var G__36565 = (0);
var G__36566 = (0);
seq__36215_36536 = G__36563;
chunk__36217_36537 = G__36564;
count__36218_36538 = G__36565;
i__36219_36539 = G__36566;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36533);
});})(seq__36164_36469,chunk__36168_36470,count__36169_36471,i__36170_36472,seq__35957,chunk__35959,count__35960,i__35961,new_link_36535,path_match_36534,node_36533,seq__36164_36527__$1,temp__5753__auto___36526__$1,path,seq__35957__$1,temp__5753__auto__,map__35954,map__35954__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36534], 0));

goog.dom.insertSiblingAfter(new_link_36535,node_36533);


var G__36567 = cljs.core.next(seq__36164_36527__$1);
var G__36568 = null;
var G__36569 = (0);
var G__36570 = (0);
seq__36164_36469 = G__36567;
chunk__36168_36470 = G__36568;
count__36169_36471 = G__36569;
i__36170_36472 = G__36570;
continue;
} else {
var G__36571 = cljs.core.next(seq__36164_36527__$1);
var G__36572 = null;
var G__36573 = (0);
var G__36574 = (0);
seq__36164_36469 = G__36571;
chunk__36168_36470 = G__36572;
count__36169_36471 = G__36573;
i__36170_36472 = G__36574;
continue;
}
} else {
var G__36575 = cljs.core.next(seq__36164_36527__$1);
var G__36576 = null;
var G__36577 = (0);
var G__36578 = (0);
seq__36164_36469 = G__36575;
chunk__36168_36470 = G__36576;
count__36169_36471 = G__36577;
i__36170_36472 = G__36578;
continue;
}
}
} else {
}
}
break;
}


var G__36579 = cljs.core.next(seq__35957__$1);
var G__36580 = null;
var G__36581 = (0);
var G__36582 = (0);
seq__35957 = G__36579;
chunk__35959 = G__36580;
count__35960 = G__36581;
i__35961 = G__36582;
continue;
} else {
var G__36583 = cljs.core.next(seq__35957__$1);
var G__36584 = null;
var G__36585 = (0);
var G__36586 = (0);
seq__35957 = G__36583;
chunk__35959 = G__36584;
count__35960 = G__36585;
i__35961 = G__36586;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36227){
var map__36228 = p__36227;
var map__36228__$1 = cljs.core.__destructure_map(map__36228);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36228__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36229){
var map__36230 = p__36229;
var map__36230__$1 = cljs.core.__destructure_map(map__36230);
var _ = map__36230__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36230__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36231,done,error){
var map__36232 = p__36231;
var map__36232__$1 = cljs.core.__destructure_map(map__36232);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36232__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36233,done,error){
var map__36234 = p__36233;
var map__36234__$1 = cljs.core.__destructure_map(map__36234);
var msg = map__36234__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36234__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36234__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36234__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36236){
var map__36237 = p__36236;
var map__36237__$1 = cljs.core.__destructure_map(map__36237);
var src = map__36237__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36237__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36241 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36241) : done.call(null,G__36241));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36242){
var map__36243 = p__36242;
var map__36243__$1 = cljs.core.__destructure_map(map__36243);
var msg__$1 = map__36243__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36243__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36244){var ex = e36244;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36245){
var map__36246 = p__36245;
var map__36246__$1 = cljs.core.__destructure_map(map__36246);
var env = map__36246__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36246__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36249){
var map__36250 = p__36249;
var map__36250__$1 = cljs.core.__destructure_map(map__36250);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36250__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36250__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36254){
var map__36255 = p__36254;
var map__36255__$1 = cljs.core.__destructure_map(map__36255);
var svc = map__36255__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36255__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
