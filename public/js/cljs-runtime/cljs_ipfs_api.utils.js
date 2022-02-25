goog.provide('cljs_ipfs_api.utils');
cljs_ipfs_api.utils.safe_case = (function cljs_ipfs_api$utils$safe_case(case_f){
return (function (x){
var G__38703 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(x),(1));
var G__38703__$1 = clojure.string.replace(G__38703,"_","*")
;
var G__38703__$2 = (case_f.cljs$core$IFn$_invoke$arity$1 ? case_f.cljs$core$IFn$_invoke$arity$1(G__38703__$1) : case_f.call(null,G__38703__$1))
;
var G__38703__$3 = clojure.string.replace(G__38703__$2,"*","_")
;
var G__38703__$4 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.name(x))),G__38703__$3].join('')
;
if((x instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__38703__$4);
} else {
return G__38703__$4;
}
});
});
cljs_ipfs_api.utils.camel_case = cljs_ipfs_api.utils.safe_case(camel_snake_kebab.core.__GT_camelCase);
cljs_ipfs_api.utils.kebab_case = cljs_ipfs_api.utils.safe_case(camel_snake_kebab.core.__GT_kebab_case);
cljs_ipfs_api.utils.js__GT_cljk = (function cljs_ipfs_api$utils$js__GT_cljk(p1__38704_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__38704_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
/**
 * From JavaScript to Clojure with kekab-cased keywords.
 */
cljs_ipfs_api.utils.js__GT_cljkk = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(camel_snake_kebab.extras.transform_keys,cljs_ipfs_api.utils.kebab_case),cljs_ipfs_api.utils.js__GT_cljk);
/**
 * From Clojure with kebab-cased keywords to JavaScript.
 */
cljs_ipfs_api.utils.cljkk__GT_js = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(camel_snake_kebab.extras.transform_keys,cljs_ipfs_api.utils.camel_case));
cljs_ipfs_api.utils.callback_js__GT_clj = (function cljs_ipfs_api$utils$callback_js__GT_clj(x){
if(cljs.core.fn_QMARK_(x)){
return (function (err,res){
if(cljs.core.truth_((function (){var and__4251__auto__ = res;
if(cljs.core.truth_(and__4251__auto__)){
return (res["v"]);
} else {
return and__4251__auto__;
}
})())){
(res["v"] = (res["v"]));
} else {
}

var G__38705 = err;
var G__38706 = cljs_ipfs_api.utils.js__GT_cljkk(res);
return (x.cljs$core$IFn$_invoke$arity$2 ? x.cljs$core$IFn$_invoke$arity$2(G__38705,G__38706) : x.call(null,G__38705,G__38706));
});
} else {
return x;
}
});
cljs_ipfs_api.utils.args_cljkk__GT_js = (function cljs_ipfs_api$utils$args_cljkk__GT_js(args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs_ipfs_api.utils.cljkk__GT_js,cljs_ipfs_api.utils.callback_js__GT_clj),args);
});
cljs_ipfs_api.utils.js_apply = (function cljs_ipfs_api$utils$js_apply(var_args){
var G__38708 = arguments.length;
switch (G__38708) {
case 2:
return cljs_ipfs_api.utils.js_apply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_ipfs_api.utils.js_apply.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_ipfs_api.utils.js_apply.cljs$core$IFn$_invoke$arity$2 = (function (this$,method_name){
return cljs_ipfs_api.utils.js_apply.cljs$core$IFn$_invoke$arity$3(this$,method_name,null);
}));

(cljs_ipfs_api.utils.js_apply.cljs$core$IFn$_invoke$arity$3 = (function (this$,method_name,args){
if(cljs.core.truth_((this$[method_name]))){
return cljs_ipfs_api.utils.js__GT_cljkk(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,this$,method_name,cljs_ipfs_api.utils.args_cljkk__GT_js(args)));
} else {
throw ["Method: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name)," was not found in object."].join('');
}
}));

(cljs_ipfs_api.utils.js_apply.cljs$lang$maxFixedArity = 3);

cljs_ipfs_api.utils.js_prototype_apply = (function cljs_ipfs_api$utils$js_prototype_apply(js_obj,method_name,args){
return cljs_ipfs_api.utils.js_apply.cljs$core$IFn$_invoke$arity$3((js_obj["prototype"]),method_name,args);
});
cljs_ipfs_api.utils.wrap_callback = (function cljs_ipfs_api$utils$wrap_callback(f_n){
var callback = (function cljs_ipfs_api$utils$wrap_callback_$_callback(err,res){
if((f_n instanceof cljs.core.async.impl.channels.ManyToManyChannel)){
var c__29764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_38717){
var state_val_38718 = (state_38717[(1)]);
if((state_val_38718 === (1))){
var inst_38709 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38710 = cljs_ipfs_api.utils.js__GT_cljkk(err);
var inst_38711 = cljs_ipfs_api.utils.js__GT_cljkk(res);
var inst_38712 = [inst_38710,inst_38711];
var inst_38713 = (new cljs.core.PersistentVector(null,2,(5),inst_38709,inst_38712,null));
var state_38717__$1 = state_38717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38717__$1,(2),f_n,inst_38713);
} else {
if((state_val_38718 === (2))){
var inst_38715 = (state_38717[(2)]);
var state_38717__$1 = state_38717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38717__$1,inst_38715);
} else {
return null;
}
}
});
return (function() {
var cljs_ipfs_api$utils$wrap_callback_$_callback_$_state_machine__29468__auto__ = null;
var cljs_ipfs_api$utils$wrap_callback_$_callback_$_state_machine__29468__auto____0 = (function (){
var statearr_38719 = [null,null,null,null,null,null,null];
(statearr_38719[(0)] = cljs_ipfs_api$utils$wrap_callback_$_callback_$_state_machine__29468__auto__);

(statearr_38719[(1)] = (1));

return statearr_38719;
});
var cljs_ipfs_api$utils$wrap_callback_$_callback_$_state_machine__29468__auto____1 = (function (state_38717){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_38717);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e38720){var ex__29471__auto__ = e38720;
var statearr_38721_38738 = state_38717;
(statearr_38721_38738[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_38717[(4)]))){
var statearr_38722_38739 = state_38717;
(statearr_38722_38739[(1)] = cljs.core.first((state_38717[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38740 = state_38717;
state_38717 = G__38740;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs_ipfs_api$utils$wrap_callback_$_callback_$_state_machine__29468__auto__ = function(state_38717){
switch(arguments.length){
case 0:
return cljs_ipfs_api$utils$wrap_callback_$_callback_$_state_machine__29468__auto____0.call(this);
case 1:
return cljs_ipfs_api$utils$wrap_callback_$_callback_$_state_machine__29468__auto____1.call(this,state_38717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_ipfs_api$utils$wrap_callback_$_callback_$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_ipfs_api$utils$wrap_callback_$_callback_$_state_machine__29468__auto____0;
cljs_ipfs_api$utils$wrap_callback_$_callback_$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_ipfs_api$utils$wrap_callback_$_callback_$_state_machine__29468__auto____1;
return cljs_ipfs_api$utils$wrap_callback_$_callback_$_state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_38723 = f__29765__auto__();
(statearr_38723[(6)] = c__29764__auto__);

return statearr_38723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));

return c__29764__auto__;
} else {
if(cljs.core.fn_QMARK_(f_n)){
var G__38724 = cljs_ipfs_api.utils.js__GT_cljkk(err);
var G__38725 = cljs_ipfs_api.utils.js__GT_cljkk(res);
return (f_n.cljs$core$IFn$_invoke$arity$2 ? f_n.cljs$core$IFn$_invoke$arity$2(G__38724,G__38725) : f_n.call(null,G__38724,G__38725));
} else {
return f_n;
}
}
});
return callback;
});
cljs_ipfs_api.utils.is_blob_QMARK_ = (function cljs_ipfs_api$utils$is_blob_QMARK_(x){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(String,cljs.core.type(x))));
});
cljs_ipfs_api.utils.web_http_call = (function cljs_ipfs_api$utils$web_http_call(url,args,p__38726){
var map__38727 = p__38726;
var map__38727__$1 = cljs.core.__destructure_map(map__38727);
var params = map__38727__$1;
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38727__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38727__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(district.format.format_url(url,opts),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(null,response) : callback.call(null,null,response));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (err){
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(err,null) : callback.call(null,err,null));
}),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.raw_response_format.call(null))], null),(function (){var temp__5753__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs_ipfs_api.utils.is_blob_QMARK_,args));
if(cljs.core.truth_(temp__5753__auto__)){
var b = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__38728 = (new FormData());
G__38728.append("file",b);

return G__38728;
})()], null);
} else {
return null;
}
})()], 0))], 0));
});
cljs_ipfs_api.utils.node_http_call = (function cljs_ipfs_api$utils$node_http_call(url,args,params){
var temp__5751__auto__ = new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5751__auto__)){
var cb = temp__5751__auto__;
var rm = require("request");
var fs = require("fs");
var on_done = (function (err,oresp,obody){
var err__$1 = cljs_ipfs_api.utils.js__GT_cljkk(err);
var resp = cljs_ipfs_api.utils.js__GT_cljkk(oresp);
if(cljs.core.truth_(err__$1)){
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(err__$1,null) : cb.call(null,err__$1,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resp.statusCode,(200))){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"binary?","binary?",-589404570)], null)))){
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(null,obody) : cb.call(null,null,obody));
} else {
var G__38729 = null;
var G__38730 = (function (){try{return JSON.parse(cljs_ipfs_api.utils.js__GT_cljkk(obody));
}catch (e38731){if((e38731 instanceof SyntaxError)){
var e = e38731;
return cljs_ipfs_api.utils.js__GT_cljkk(obody);
} else {
throw e38731;

}
}})();
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(G__38729,G__38730) : cb.call(null,G__38729,G__38730));
}
} else {
var G__38732 = resp.statusMessage;
var G__38733 = null;
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(G__38732,G__38733) : cb.call(null,G__38732,G__38733));

}
}
});
var form = (function (){var temp__5753__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs_ipfs_api.utils.is_blob_QMARK_,args));
if(cljs.core.truth_(temp__5753__auto__)){
var b = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formData","formData",-1155796695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),b], null)], null);
} else {
return null;
}
})();
var req_options = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"qs","qs",-1900687691),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs_ipfs_api.utils.is_blob_QMARK_,args))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"req-opts","req-opts",236427321)], null))], 0))], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"binary?","binary?",-589404570)], null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),null], null):null),form], 0)));
var req = rm.post(req_options,on_done);
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"pipe-to","pipe-to",477119458)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var out = temp__5753__auto__;
return req.pipe(out);
} else {
return null;
}
} else {
return null;
}
});
cljs_ipfs_api.utils.http_call = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?cljs_ipfs_api.utils.node_http_call:cljs_ipfs_api.utils.web_http_call);
cljs_ipfs_api.utils.api_call = (function cljs_ipfs_api$utils$api_call(inst,ac,args,params){
var G__38734 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(inst)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"endpoint","endpoint",447890044).cljs$core$IFn$_invoke$arity$1(inst)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ac)].join('');
var G__38735 = args;
var G__38736 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(params)], null)], 0));
return (cljs_ipfs_api.utils.http_call.cljs$core$IFn$_invoke$arity$3 ? cljs_ipfs_api.utils.http_call.cljs$core$IFn$_invoke$arity$3(G__38734,G__38735,G__38736) : cljs_ipfs_api.utils.http_call.call(null,G__38734,G__38735,G__38736));
});

//# sourceMappingURL=cljs_ipfs_api.utils.js.map
