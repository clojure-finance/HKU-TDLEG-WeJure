goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__37553 = e.target.readyState;
var fexpr__37552 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__37552.cljs$core$IFn$_invoke$arity$1 ? fexpr__37552.cljs$core$IFn$_invoke$arity$1(G__37553) : fexpr__37552.call(null,G__37553));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
ajax.xml_http_request.goog$module$goog$object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__37559,handler){
var map__37560 = p__37559;
var map__37560__$1 = cljs.core.__destructure_map(map__37560);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37560__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37560__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37560__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37560__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37560__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37560__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37560__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__37555_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__37555_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___37588 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___37588)){
var response_type_37589 = temp__5753__auto___37588;
(this$__$1.responseType = cljs.core.name(response_type_37589));
} else {
}

var seq__37561_37590 = cljs.core.seq(headers);
var chunk__37562_37591 = null;
var count__37563_37592 = (0);
var i__37564_37593 = (0);
while(true){
if((i__37564_37593 < count__37563_37592)){
var vec__37572_37594 = chunk__37562_37591.cljs$core$IIndexed$_nth$arity$2(null,i__37564_37593);
var k_37595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37572_37594,(0),null);
var v_37596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37572_37594,(1),null);
this$__$1.setRequestHeader(k_37595,v_37596);


var G__37597 = seq__37561_37590;
var G__37598 = chunk__37562_37591;
var G__37599 = count__37563_37592;
var G__37600 = (i__37564_37593 + (1));
seq__37561_37590 = G__37597;
chunk__37562_37591 = G__37598;
count__37563_37592 = G__37599;
i__37564_37593 = G__37600;
continue;
} else {
var temp__5753__auto___37601 = cljs.core.seq(seq__37561_37590);
if(temp__5753__auto___37601){
var seq__37561_37602__$1 = temp__5753__auto___37601;
if(cljs.core.chunked_seq_QMARK_(seq__37561_37602__$1)){
var c__4679__auto___37604 = cljs.core.chunk_first(seq__37561_37602__$1);
var G__37606 = cljs.core.chunk_rest(seq__37561_37602__$1);
var G__37607 = c__4679__auto___37604;
var G__37608 = cljs.core.count(c__4679__auto___37604);
var G__37609 = (0);
seq__37561_37590 = G__37606;
chunk__37562_37591 = G__37607;
count__37563_37592 = G__37608;
i__37564_37593 = G__37609;
continue;
} else {
var vec__37575_37610 = cljs.core.first(seq__37561_37602__$1);
var k_37611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37575_37610,(0),null);
var v_37612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37575_37610,(1),null);
this$__$1.setRequestHeader(k_37611,v_37612);


var G__37613 = cljs.core.next(seq__37561_37602__$1);
var G__37614 = null;
var G__37615 = (0);
var G__37616 = (0);
seq__37561_37590 = G__37613;
chunk__37562_37591 = G__37614;
count__37563_37592 = G__37615;
i__37564_37593 = G__37616;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4253__auto__ = body;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
