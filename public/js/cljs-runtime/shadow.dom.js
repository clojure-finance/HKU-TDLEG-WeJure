goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33926 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33926(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33927 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33927(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32965 = coll;
var G__32966 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32965,G__32966) : shadow.dom.lazy_native_coll_seq.call(null,G__32965,G__32966));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33006 = arguments.length;
switch (G__33006) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33021 = arguments.length;
switch (G__33021) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33039 = arguments.length;
switch (G__33039) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33043 = arguments.length;
switch (G__33043) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33086 = arguments.length;
switch (G__33086) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33126 = arguments.length;
switch (G__33126) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33144){if((e33144 instanceof Object)){
var e = e33144;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33144;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33147 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33148 = null;
var count__33149 = (0);
var i__33150 = (0);
while(true){
if((i__33150 < count__33149)){
var el = chunk__33148.cljs$core$IIndexed$_nth$arity$2(null,i__33150);
var handler_33934__$1 = ((function (seq__33147,chunk__33148,count__33149,i__33150,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33147,chunk__33148,count__33149,i__33150,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33934__$1);


var G__33943 = seq__33147;
var G__33944 = chunk__33148;
var G__33945 = count__33149;
var G__33946 = (i__33150 + (1));
seq__33147 = G__33943;
chunk__33148 = G__33944;
count__33149 = G__33945;
i__33150 = G__33946;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33147);
if(temp__5753__auto__){
var seq__33147__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33147__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33147__$1);
var G__33950 = cljs.core.chunk_rest(seq__33147__$1);
var G__33951 = c__4679__auto__;
var G__33952 = cljs.core.count(c__4679__auto__);
var G__33953 = (0);
seq__33147 = G__33950;
chunk__33148 = G__33951;
count__33149 = G__33952;
i__33150 = G__33953;
continue;
} else {
var el = cljs.core.first(seq__33147__$1);
var handler_33954__$1 = ((function (seq__33147,chunk__33148,count__33149,i__33150,el,seq__33147__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33147,chunk__33148,count__33149,i__33150,el,seq__33147__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33954__$1);


var G__33955 = cljs.core.next(seq__33147__$1);
var G__33956 = null;
var G__33957 = (0);
var G__33958 = (0);
seq__33147 = G__33955;
chunk__33148 = G__33956;
count__33149 = G__33957;
i__33150 = G__33958;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33166 = arguments.length;
switch (G__33166) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33205 = cljs.core.seq(events);
var chunk__33206 = null;
var count__33207 = (0);
var i__33208 = (0);
while(true){
if((i__33208 < count__33207)){
var vec__33270 = chunk__33206.cljs$core$IIndexed$_nth$arity$2(null,i__33208);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33270,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33270,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33960 = seq__33205;
var G__33961 = chunk__33206;
var G__33962 = count__33207;
var G__33963 = (i__33208 + (1));
seq__33205 = G__33960;
chunk__33206 = G__33961;
count__33207 = G__33962;
i__33208 = G__33963;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33205);
if(temp__5753__auto__){
var seq__33205__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33205__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33205__$1);
var G__33964 = cljs.core.chunk_rest(seq__33205__$1);
var G__33965 = c__4679__auto__;
var G__33966 = cljs.core.count(c__4679__auto__);
var G__33967 = (0);
seq__33205 = G__33964;
chunk__33206 = G__33965;
count__33207 = G__33966;
i__33208 = G__33967;
continue;
} else {
var vec__33340 = cljs.core.first(seq__33205__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33340,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33340,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33968 = cljs.core.next(seq__33205__$1);
var G__33969 = null;
var G__33970 = (0);
var G__33971 = (0);
seq__33205 = G__33968;
chunk__33206 = G__33969;
count__33207 = G__33970;
i__33208 = G__33971;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33349 = cljs.core.seq(styles);
var chunk__33350 = null;
var count__33351 = (0);
var i__33352 = (0);
while(true){
if((i__33352 < count__33351)){
var vec__33371 = chunk__33350.cljs$core$IIndexed$_nth$arity$2(null,i__33352);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33371,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33371,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33972 = seq__33349;
var G__33973 = chunk__33350;
var G__33974 = count__33351;
var G__33975 = (i__33352 + (1));
seq__33349 = G__33972;
chunk__33350 = G__33973;
count__33351 = G__33974;
i__33352 = G__33975;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33349);
if(temp__5753__auto__){
var seq__33349__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33349__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33349__$1);
var G__33976 = cljs.core.chunk_rest(seq__33349__$1);
var G__33977 = c__4679__auto__;
var G__33978 = cljs.core.count(c__4679__auto__);
var G__33979 = (0);
seq__33349 = G__33976;
chunk__33350 = G__33977;
count__33351 = G__33978;
i__33352 = G__33979;
continue;
} else {
var vec__33374 = cljs.core.first(seq__33349__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33374,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33374,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33980 = cljs.core.next(seq__33349__$1);
var G__33981 = null;
var G__33982 = (0);
var G__33983 = (0);
seq__33349 = G__33980;
chunk__33350 = G__33981;
count__33351 = G__33982;
i__33352 = G__33983;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33377_33984 = key;
var G__33377_33985__$1 = (((G__33377_33984 instanceof cljs.core.Keyword))?G__33377_33984.fqn:null);
switch (G__33377_33985__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33987 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_33987,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_33987,"aria-");
}
})())){
el.setAttribute(ks_33987,value);
} else {
(el[ks_33987] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33379){
var map__33380 = p__33379;
var map__33380__$1 = cljs.core.__destructure_map(map__33380);
var props = map__33380__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33380__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33381 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33381,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33381,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33381,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33384 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33384,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33384;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33386 = arguments.length;
switch (G__33386) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33388){
var vec__33389 = p__33388;
var seq__33390 = cljs.core.seq(vec__33389);
var first__33391 = cljs.core.first(seq__33390);
var seq__33390__$1 = cljs.core.next(seq__33390);
var nn = first__33391;
var first__33391__$1 = cljs.core.first(seq__33390__$1);
var seq__33390__$2 = cljs.core.next(seq__33390__$1);
var np = first__33391__$1;
var nc = seq__33390__$2;
var node = vec__33389;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33392 = nn;
var G__33393 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33392,G__33393) : create_fn.call(null,G__33392,G__33393));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33394 = nn;
var G__33395 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33394,G__33395) : create_fn.call(null,G__33394,G__33395));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33398 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33398,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33398,(1),null);
var seq__33401_33993 = cljs.core.seq(node_children);
var chunk__33402_33994 = null;
var count__33403_33995 = (0);
var i__33404_33996 = (0);
while(true){
if((i__33404_33996 < count__33403_33995)){
var child_struct_33997 = chunk__33402_33994.cljs$core$IIndexed$_nth$arity$2(null,i__33404_33996);
var children_33998 = shadow.dom.dom_node(child_struct_33997);
if(cljs.core.seq_QMARK_(children_33998)){
var seq__33418_33999 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33998));
var chunk__33420_34000 = null;
var count__33421_34001 = (0);
var i__33422_34002 = (0);
while(true){
if((i__33422_34002 < count__33421_34001)){
var child_34004 = chunk__33420_34000.cljs$core$IIndexed$_nth$arity$2(null,i__33422_34002);
if(cljs.core.truth_(child_34004)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34004);


var G__34006 = seq__33418_33999;
var G__34007 = chunk__33420_34000;
var G__34008 = count__33421_34001;
var G__34009 = (i__33422_34002 + (1));
seq__33418_33999 = G__34006;
chunk__33420_34000 = G__34007;
count__33421_34001 = G__34008;
i__33422_34002 = G__34009;
continue;
} else {
var G__34010 = seq__33418_33999;
var G__34011 = chunk__33420_34000;
var G__34012 = count__33421_34001;
var G__34013 = (i__33422_34002 + (1));
seq__33418_33999 = G__34010;
chunk__33420_34000 = G__34011;
count__33421_34001 = G__34012;
i__33422_34002 = G__34013;
continue;
}
} else {
var temp__5753__auto___34014 = cljs.core.seq(seq__33418_33999);
if(temp__5753__auto___34014){
var seq__33418_34015__$1 = temp__5753__auto___34014;
if(cljs.core.chunked_seq_QMARK_(seq__33418_34015__$1)){
var c__4679__auto___34016 = cljs.core.chunk_first(seq__33418_34015__$1);
var G__34017 = cljs.core.chunk_rest(seq__33418_34015__$1);
var G__34018 = c__4679__auto___34016;
var G__34019 = cljs.core.count(c__4679__auto___34016);
var G__34020 = (0);
seq__33418_33999 = G__34017;
chunk__33420_34000 = G__34018;
count__33421_34001 = G__34019;
i__33422_34002 = G__34020;
continue;
} else {
var child_34021 = cljs.core.first(seq__33418_34015__$1);
if(cljs.core.truth_(child_34021)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34021);


var G__34022 = cljs.core.next(seq__33418_34015__$1);
var G__34023 = null;
var G__34024 = (0);
var G__34025 = (0);
seq__33418_33999 = G__34022;
chunk__33420_34000 = G__34023;
count__33421_34001 = G__34024;
i__33422_34002 = G__34025;
continue;
} else {
var G__34026 = cljs.core.next(seq__33418_34015__$1);
var G__34027 = null;
var G__34028 = (0);
var G__34029 = (0);
seq__33418_33999 = G__34026;
chunk__33420_34000 = G__34027;
count__33421_34001 = G__34028;
i__33422_34002 = G__34029;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33998);
}


var G__34030 = seq__33401_33993;
var G__34031 = chunk__33402_33994;
var G__34032 = count__33403_33995;
var G__34033 = (i__33404_33996 + (1));
seq__33401_33993 = G__34030;
chunk__33402_33994 = G__34031;
count__33403_33995 = G__34032;
i__33404_33996 = G__34033;
continue;
} else {
var temp__5753__auto___34034 = cljs.core.seq(seq__33401_33993);
if(temp__5753__auto___34034){
var seq__33401_34035__$1 = temp__5753__auto___34034;
if(cljs.core.chunked_seq_QMARK_(seq__33401_34035__$1)){
var c__4679__auto___34036 = cljs.core.chunk_first(seq__33401_34035__$1);
var G__34037 = cljs.core.chunk_rest(seq__33401_34035__$1);
var G__34038 = c__4679__auto___34036;
var G__34039 = cljs.core.count(c__4679__auto___34036);
var G__34040 = (0);
seq__33401_33993 = G__34037;
chunk__33402_33994 = G__34038;
count__33403_33995 = G__34039;
i__33404_33996 = G__34040;
continue;
} else {
var child_struct_34041 = cljs.core.first(seq__33401_34035__$1);
var children_34042 = shadow.dom.dom_node(child_struct_34041);
if(cljs.core.seq_QMARK_(children_34042)){
var seq__33425_34043 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34042));
var chunk__33427_34044 = null;
var count__33428_34045 = (0);
var i__33429_34046 = (0);
while(true){
if((i__33429_34046 < count__33428_34045)){
var child_34047 = chunk__33427_34044.cljs$core$IIndexed$_nth$arity$2(null,i__33429_34046);
if(cljs.core.truth_(child_34047)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34047);


var G__34048 = seq__33425_34043;
var G__34049 = chunk__33427_34044;
var G__34050 = count__33428_34045;
var G__34051 = (i__33429_34046 + (1));
seq__33425_34043 = G__34048;
chunk__33427_34044 = G__34049;
count__33428_34045 = G__34050;
i__33429_34046 = G__34051;
continue;
} else {
var G__34052 = seq__33425_34043;
var G__34053 = chunk__33427_34044;
var G__34054 = count__33428_34045;
var G__34055 = (i__33429_34046 + (1));
seq__33425_34043 = G__34052;
chunk__33427_34044 = G__34053;
count__33428_34045 = G__34054;
i__33429_34046 = G__34055;
continue;
}
} else {
var temp__5753__auto___34056__$1 = cljs.core.seq(seq__33425_34043);
if(temp__5753__auto___34056__$1){
var seq__33425_34057__$1 = temp__5753__auto___34056__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33425_34057__$1)){
var c__4679__auto___34058 = cljs.core.chunk_first(seq__33425_34057__$1);
var G__34059 = cljs.core.chunk_rest(seq__33425_34057__$1);
var G__34060 = c__4679__auto___34058;
var G__34061 = cljs.core.count(c__4679__auto___34058);
var G__34062 = (0);
seq__33425_34043 = G__34059;
chunk__33427_34044 = G__34060;
count__33428_34045 = G__34061;
i__33429_34046 = G__34062;
continue;
} else {
var child_34063 = cljs.core.first(seq__33425_34057__$1);
if(cljs.core.truth_(child_34063)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34063);


var G__34064 = cljs.core.next(seq__33425_34057__$1);
var G__34065 = null;
var G__34066 = (0);
var G__34067 = (0);
seq__33425_34043 = G__34064;
chunk__33427_34044 = G__34065;
count__33428_34045 = G__34066;
i__33429_34046 = G__34067;
continue;
} else {
var G__34068 = cljs.core.next(seq__33425_34057__$1);
var G__34069 = null;
var G__34070 = (0);
var G__34071 = (0);
seq__33425_34043 = G__34068;
chunk__33427_34044 = G__34069;
count__33428_34045 = G__34070;
i__33429_34046 = G__34071;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34042);
}


var G__34072 = cljs.core.next(seq__33401_34035__$1);
var G__34073 = null;
var G__34074 = (0);
var G__34075 = (0);
seq__33401_33993 = G__34072;
chunk__33402_33994 = G__34073;
count__33403_33995 = G__34074;
i__33404_33996 = G__34075;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33525 = cljs.core.seq(node);
var chunk__33526 = null;
var count__33527 = (0);
var i__33528 = (0);
while(true){
if((i__33528 < count__33527)){
var n = chunk__33526.cljs$core$IIndexed$_nth$arity$2(null,i__33528);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34078 = seq__33525;
var G__34079 = chunk__33526;
var G__34080 = count__33527;
var G__34081 = (i__33528 + (1));
seq__33525 = G__34078;
chunk__33526 = G__34079;
count__33527 = G__34080;
i__33528 = G__34081;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33525);
if(temp__5753__auto__){
var seq__33525__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33525__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33525__$1);
var G__34082 = cljs.core.chunk_rest(seq__33525__$1);
var G__34083 = c__4679__auto__;
var G__34084 = cljs.core.count(c__4679__auto__);
var G__34085 = (0);
seq__33525 = G__34082;
chunk__33526 = G__34083;
count__33527 = G__34084;
i__33528 = G__34085;
continue;
} else {
var n = cljs.core.first(seq__33525__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34086 = cljs.core.next(seq__33525__$1);
var G__34087 = null;
var G__34088 = (0);
var G__34089 = (0);
seq__33525 = G__34086;
chunk__33526 = G__34087;
count__33527 = G__34088;
i__33528 = G__34089;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33530 = arguments.length;
switch (G__33530) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33534 = arguments.length;
switch (G__33534) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33570 = arguments.length;
switch (G__33570) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34095 = arguments.length;
var i__4865__auto___34096 = (0);
while(true){
if((i__4865__auto___34096 < len__4864__auto___34095)){
args__4870__auto__.push((arguments[i__4865__auto___34096]));

var G__34097 = (i__4865__auto___34096 + (1));
i__4865__auto___34096 = G__34097;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33589_34098 = cljs.core.seq(nodes);
var chunk__33590_34099 = null;
var count__33591_34100 = (0);
var i__33592_34101 = (0);
while(true){
if((i__33592_34101 < count__33591_34100)){
var node_34102 = chunk__33590_34099.cljs$core$IIndexed$_nth$arity$2(null,i__33592_34101);
fragment.appendChild(shadow.dom._to_dom(node_34102));


var G__34103 = seq__33589_34098;
var G__34104 = chunk__33590_34099;
var G__34105 = count__33591_34100;
var G__34106 = (i__33592_34101 + (1));
seq__33589_34098 = G__34103;
chunk__33590_34099 = G__34104;
count__33591_34100 = G__34105;
i__33592_34101 = G__34106;
continue;
} else {
var temp__5753__auto___34107 = cljs.core.seq(seq__33589_34098);
if(temp__5753__auto___34107){
var seq__33589_34108__$1 = temp__5753__auto___34107;
if(cljs.core.chunked_seq_QMARK_(seq__33589_34108__$1)){
var c__4679__auto___34109 = cljs.core.chunk_first(seq__33589_34108__$1);
var G__34110 = cljs.core.chunk_rest(seq__33589_34108__$1);
var G__34111 = c__4679__auto___34109;
var G__34112 = cljs.core.count(c__4679__auto___34109);
var G__34113 = (0);
seq__33589_34098 = G__34110;
chunk__33590_34099 = G__34111;
count__33591_34100 = G__34112;
i__33592_34101 = G__34113;
continue;
} else {
var node_34117 = cljs.core.first(seq__33589_34108__$1);
fragment.appendChild(shadow.dom._to_dom(node_34117));


var G__34118 = cljs.core.next(seq__33589_34108__$1);
var G__34119 = null;
var G__34120 = (0);
var G__34121 = (0);
seq__33589_34098 = G__34118;
chunk__33590_34099 = G__34119;
count__33591_34100 = G__34120;
i__33592_34101 = G__34121;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33586){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33586));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33613_34122 = cljs.core.seq(scripts);
var chunk__33614_34123 = null;
var count__33615_34124 = (0);
var i__33616_34125 = (0);
while(true){
if((i__33616_34125 < count__33615_34124)){
var vec__33624_34126 = chunk__33614_34123.cljs$core$IIndexed$_nth$arity$2(null,i__33616_34125);
var script_tag_34127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33624_34126,(0),null);
var script_body_34128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33624_34126,(1),null);
eval(script_body_34128);


var G__34129 = seq__33613_34122;
var G__34130 = chunk__33614_34123;
var G__34131 = count__33615_34124;
var G__34132 = (i__33616_34125 + (1));
seq__33613_34122 = G__34129;
chunk__33614_34123 = G__34130;
count__33615_34124 = G__34131;
i__33616_34125 = G__34132;
continue;
} else {
var temp__5753__auto___34133 = cljs.core.seq(seq__33613_34122);
if(temp__5753__auto___34133){
var seq__33613_34134__$1 = temp__5753__auto___34133;
if(cljs.core.chunked_seq_QMARK_(seq__33613_34134__$1)){
var c__4679__auto___34135 = cljs.core.chunk_first(seq__33613_34134__$1);
var G__34136 = cljs.core.chunk_rest(seq__33613_34134__$1);
var G__34137 = c__4679__auto___34135;
var G__34138 = cljs.core.count(c__4679__auto___34135);
var G__34139 = (0);
seq__33613_34122 = G__34136;
chunk__33614_34123 = G__34137;
count__33615_34124 = G__34138;
i__33616_34125 = G__34139;
continue;
} else {
var vec__33634_34140 = cljs.core.first(seq__33613_34134__$1);
var script_tag_34141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33634_34140,(0),null);
var script_body_34142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33634_34140,(1),null);
eval(script_body_34142);


var G__34143 = cljs.core.next(seq__33613_34134__$1);
var G__34144 = null;
var G__34145 = (0);
var G__34146 = (0);
seq__33613_34122 = G__34143;
chunk__33614_34123 = G__34144;
count__33615_34124 = G__34145;
i__33616_34125 = G__34146;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33638){
var vec__33639 = p__33638;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33639,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33639,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33655 = arguments.length;
switch (G__33655) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33663 = cljs.core.seq(style_keys);
var chunk__33664 = null;
var count__33665 = (0);
var i__33666 = (0);
while(true){
if((i__33666 < count__33665)){
var it = chunk__33664.cljs$core$IIndexed$_nth$arity$2(null,i__33666);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34148 = seq__33663;
var G__34149 = chunk__33664;
var G__34150 = count__33665;
var G__34151 = (i__33666 + (1));
seq__33663 = G__34148;
chunk__33664 = G__34149;
count__33665 = G__34150;
i__33666 = G__34151;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33663);
if(temp__5753__auto__){
var seq__33663__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33663__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33663__$1);
var G__34152 = cljs.core.chunk_rest(seq__33663__$1);
var G__34153 = c__4679__auto__;
var G__34154 = cljs.core.count(c__4679__auto__);
var G__34155 = (0);
seq__33663 = G__34152;
chunk__33664 = G__34153;
count__33665 = G__34154;
i__33666 = G__34155;
continue;
} else {
var it = cljs.core.first(seq__33663__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34156 = cljs.core.next(seq__33663__$1);
var G__34157 = null;
var G__34158 = (0);
var G__34159 = (0);
seq__33663 = G__34156;
chunk__33664 = G__34157;
count__33665 = G__34158;
i__33666 = G__34159;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33668,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33672 = k33668;
var G__33672__$1 = (((G__33672 instanceof cljs.core.Keyword))?G__33672.fqn:null);
switch (G__33672__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33668,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33679){
var vec__33680 = p__33679;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33680,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33680,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33667){
var self__ = this;
var G__33667__$1 = this;
return (new cljs.core.RecordIter((0),G__33667__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33669,other33670){
var self__ = this;
var this33669__$1 = this;
return (((!((other33670 == null)))) && ((((this33669__$1.constructor === other33670.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33669__$1.x,other33670.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33669__$1.y,other33670.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33669__$1.__extmap,other33670.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33668){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33690 = k33668;
var G__33690__$1 = (((G__33690 instanceof cljs.core.Keyword))?G__33690.fqn:null);
switch (G__33690__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33668);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33667){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33695 = cljs.core.keyword_identical_QMARK_;
var expr__33696 = k__4511__auto__;
if(cljs.core.truth_((pred__33695.cljs$core$IFn$_invoke$arity$2 ? pred__33695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33696) : pred__33695.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33696)))){
return (new shadow.dom.Coordinate(G__33667,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33695.cljs$core$IFn$_invoke$arity$2 ? pred__33695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33696) : pred__33695.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33696)))){
return (new shadow.dom.Coordinate(self__.x,G__33667,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33667),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33667){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33667,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33671){
var extmap__4542__auto__ = (function (){var G__33714 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33671,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33671)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33714);
} else {
return G__33714;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33671),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33671),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33735,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33739 = k33735;
var G__33739__$1 = (((G__33739 instanceof cljs.core.Keyword))?G__33739.fqn:null);
switch (G__33739__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33735,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33740){
var vec__33743 = p__33740;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33743,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33743,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33734){
var self__ = this;
var G__33734__$1 = this;
return (new cljs.core.RecordIter((0),G__33734__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33736,other33737){
var self__ = this;
var this33736__$1 = this;
return (((!((other33737 == null)))) && ((((this33736__$1.constructor === other33737.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33736__$1.w,other33737.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33736__$1.h,other33737.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33736__$1.__extmap,other33737.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33735){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33755 = k33735;
var G__33755__$1 = (((G__33755 instanceof cljs.core.Keyword))?G__33755.fqn:null);
switch (G__33755__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33735);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33734){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33757 = cljs.core.keyword_identical_QMARK_;
var expr__33758 = k__4511__auto__;
if(cljs.core.truth_((pred__33757.cljs$core$IFn$_invoke$arity$2 ? pred__33757.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33758) : pred__33757.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33758)))){
return (new shadow.dom.Size(G__33734,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33757.cljs$core$IFn$_invoke$arity$2 ? pred__33757.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33758) : pred__33757.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33758)))){
return (new shadow.dom.Size(self__.w,G__33734,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33734),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33734){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33734,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33738){
var extmap__4542__auto__ = (function (){var G__33760 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33738,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33738)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33760);
} else {
return G__33760;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33738),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33738),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__34209 = (i + (1));
var G__34210 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34209;
ret = G__34210;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33772){
var vec__33774 = p__33772;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33774,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33774,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33782 = arguments.length;
switch (G__33782) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34212 = ps;
var G__34213 = (i + (1));
el__$1 = G__34212;
i = G__34213;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33791 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33801_34214 = cljs.core.seq(props);
var chunk__33802_34215 = null;
var count__33803_34216 = (0);
var i__33804_34217 = (0);
while(true){
if((i__33804_34217 < count__33803_34216)){
var vec__33811_34218 = chunk__33802_34215.cljs$core$IIndexed$_nth$arity$2(null,i__33804_34217);
var k_34219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33811_34218,(0),null);
var v_34220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33811_34218,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34219);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34219),v_34220);


var G__34221 = seq__33801_34214;
var G__34222 = chunk__33802_34215;
var G__34223 = count__33803_34216;
var G__34224 = (i__33804_34217 + (1));
seq__33801_34214 = G__34221;
chunk__33802_34215 = G__34222;
count__33803_34216 = G__34223;
i__33804_34217 = G__34224;
continue;
} else {
var temp__5753__auto___34225 = cljs.core.seq(seq__33801_34214);
if(temp__5753__auto___34225){
var seq__33801_34226__$1 = temp__5753__auto___34225;
if(cljs.core.chunked_seq_QMARK_(seq__33801_34226__$1)){
var c__4679__auto___34227 = cljs.core.chunk_first(seq__33801_34226__$1);
var G__34228 = cljs.core.chunk_rest(seq__33801_34226__$1);
var G__34229 = c__4679__auto___34227;
var G__34230 = cljs.core.count(c__4679__auto___34227);
var G__34231 = (0);
seq__33801_34214 = G__34228;
chunk__33802_34215 = G__34229;
count__33803_34216 = G__34230;
i__33804_34217 = G__34231;
continue;
} else {
var vec__33814_34232 = cljs.core.first(seq__33801_34226__$1);
var k_34233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33814_34232,(0),null);
var v_34234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33814_34232,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34233);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34233),v_34234);


var G__34235 = cljs.core.next(seq__33801_34226__$1);
var G__34236 = null;
var G__34237 = (0);
var G__34238 = (0);
seq__33801_34214 = G__34235;
chunk__33802_34215 = G__34236;
count__33803_34216 = G__34237;
i__33804_34217 = G__34238;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33820 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33820,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33820,(1),null);
var seq__33823_34239 = cljs.core.seq(node_children);
var chunk__33825_34240 = null;
var count__33826_34241 = (0);
var i__33827_34242 = (0);
while(true){
if((i__33827_34242 < count__33826_34241)){
var child_struct_34243 = chunk__33825_34240.cljs$core$IIndexed$_nth$arity$2(null,i__33827_34242);
if((!((child_struct_34243 == null)))){
if(typeof child_struct_34243 === 'string'){
var text_34244 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34244),child_struct_34243].join(''));
} else {
var children_34245 = shadow.dom.svg_node(child_struct_34243);
if(cljs.core.seq_QMARK_(children_34245)){
var seq__33844_34246 = cljs.core.seq(children_34245);
var chunk__33846_34247 = null;
var count__33847_34248 = (0);
var i__33848_34249 = (0);
while(true){
if((i__33848_34249 < count__33847_34248)){
var child_34250 = chunk__33846_34247.cljs$core$IIndexed$_nth$arity$2(null,i__33848_34249);
if(cljs.core.truth_(child_34250)){
node.appendChild(child_34250);


var G__34251 = seq__33844_34246;
var G__34252 = chunk__33846_34247;
var G__34253 = count__33847_34248;
var G__34254 = (i__33848_34249 + (1));
seq__33844_34246 = G__34251;
chunk__33846_34247 = G__34252;
count__33847_34248 = G__34253;
i__33848_34249 = G__34254;
continue;
} else {
var G__34255 = seq__33844_34246;
var G__34256 = chunk__33846_34247;
var G__34257 = count__33847_34248;
var G__34258 = (i__33848_34249 + (1));
seq__33844_34246 = G__34255;
chunk__33846_34247 = G__34256;
count__33847_34248 = G__34257;
i__33848_34249 = G__34258;
continue;
}
} else {
var temp__5753__auto___34259 = cljs.core.seq(seq__33844_34246);
if(temp__5753__auto___34259){
var seq__33844_34260__$1 = temp__5753__auto___34259;
if(cljs.core.chunked_seq_QMARK_(seq__33844_34260__$1)){
var c__4679__auto___34261 = cljs.core.chunk_first(seq__33844_34260__$1);
var G__34262 = cljs.core.chunk_rest(seq__33844_34260__$1);
var G__34263 = c__4679__auto___34261;
var G__34264 = cljs.core.count(c__4679__auto___34261);
var G__34265 = (0);
seq__33844_34246 = G__34262;
chunk__33846_34247 = G__34263;
count__33847_34248 = G__34264;
i__33848_34249 = G__34265;
continue;
} else {
var child_34266 = cljs.core.first(seq__33844_34260__$1);
if(cljs.core.truth_(child_34266)){
node.appendChild(child_34266);


var G__34267 = cljs.core.next(seq__33844_34260__$1);
var G__34268 = null;
var G__34269 = (0);
var G__34270 = (0);
seq__33844_34246 = G__34267;
chunk__33846_34247 = G__34268;
count__33847_34248 = G__34269;
i__33848_34249 = G__34270;
continue;
} else {
var G__34271 = cljs.core.next(seq__33844_34260__$1);
var G__34272 = null;
var G__34273 = (0);
var G__34274 = (0);
seq__33844_34246 = G__34271;
chunk__33846_34247 = G__34272;
count__33847_34248 = G__34273;
i__33848_34249 = G__34274;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34245);
}
}


var G__34275 = seq__33823_34239;
var G__34276 = chunk__33825_34240;
var G__34277 = count__33826_34241;
var G__34278 = (i__33827_34242 + (1));
seq__33823_34239 = G__34275;
chunk__33825_34240 = G__34276;
count__33826_34241 = G__34277;
i__33827_34242 = G__34278;
continue;
} else {
var G__34279 = seq__33823_34239;
var G__34280 = chunk__33825_34240;
var G__34281 = count__33826_34241;
var G__34282 = (i__33827_34242 + (1));
seq__33823_34239 = G__34279;
chunk__33825_34240 = G__34280;
count__33826_34241 = G__34281;
i__33827_34242 = G__34282;
continue;
}
} else {
var temp__5753__auto___34283 = cljs.core.seq(seq__33823_34239);
if(temp__5753__auto___34283){
var seq__33823_34284__$1 = temp__5753__auto___34283;
if(cljs.core.chunked_seq_QMARK_(seq__33823_34284__$1)){
var c__4679__auto___34286 = cljs.core.chunk_first(seq__33823_34284__$1);
var G__34287 = cljs.core.chunk_rest(seq__33823_34284__$1);
var G__34288 = c__4679__auto___34286;
var G__34289 = cljs.core.count(c__4679__auto___34286);
var G__34290 = (0);
seq__33823_34239 = G__34287;
chunk__33825_34240 = G__34288;
count__33826_34241 = G__34289;
i__33827_34242 = G__34290;
continue;
} else {
var child_struct_34291 = cljs.core.first(seq__33823_34284__$1);
if((!((child_struct_34291 == null)))){
if(typeof child_struct_34291 === 'string'){
var text_34292 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34292),child_struct_34291].join(''));
} else {
var children_34293 = shadow.dom.svg_node(child_struct_34291);
if(cljs.core.seq_QMARK_(children_34293)){
var seq__33850_34294 = cljs.core.seq(children_34293);
var chunk__33852_34295 = null;
var count__33853_34296 = (0);
var i__33854_34297 = (0);
while(true){
if((i__33854_34297 < count__33853_34296)){
var child_34298 = chunk__33852_34295.cljs$core$IIndexed$_nth$arity$2(null,i__33854_34297);
if(cljs.core.truth_(child_34298)){
node.appendChild(child_34298);


var G__34299 = seq__33850_34294;
var G__34300 = chunk__33852_34295;
var G__34301 = count__33853_34296;
var G__34302 = (i__33854_34297 + (1));
seq__33850_34294 = G__34299;
chunk__33852_34295 = G__34300;
count__33853_34296 = G__34301;
i__33854_34297 = G__34302;
continue;
} else {
var G__34303 = seq__33850_34294;
var G__34304 = chunk__33852_34295;
var G__34305 = count__33853_34296;
var G__34306 = (i__33854_34297 + (1));
seq__33850_34294 = G__34303;
chunk__33852_34295 = G__34304;
count__33853_34296 = G__34305;
i__33854_34297 = G__34306;
continue;
}
} else {
var temp__5753__auto___34307__$1 = cljs.core.seq(seq__33850_34294);
if(temp__5753__auto___34307__$1){
var seq__33850_34308__$1 = temp__5753__auto___34307__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33850_34308__$1)){
var c__4679__auto___34309 = cljs.core.chunk_first(seq__33850_34308__$1);
var G__34310 = cljs.core.chunk_rest(seq__33850_34308__$1);
var G__34311 = c__4679__auto___34309;
var G__34312 = cljs.core.count(c__4679__auto___34309);
var G__34313 = (0);
seq__33850_34294 = G__34310;
chunk__33852_34295 = G__34311;
count__33853_34296 = G__34312;
i__33854_34297 = G__34313;
continue;
} else {
var child_34314 = cljs.core.first(seq__33850_34308__$1);
if(cljs.core.truth_(child_34314)){
node.appendChild(child_34314);


var G__34315 = cljs.core.next(seq__33850_34308__$1);
var G__34316 = null;
var G__34317 = (0);
var G__34318 = (0);
seq__33850_34294 = G__34315;
chunk__33852_34295 = G__34316;
count__33853_34296 = G__34317;
i__33854_34297 = G__34318;
continue;
} else {
var G__34319 = cljs.core.next(seq__33850_34308__$1);
var G__34320 = null;
var G__34321 = (0);
var G__34322 = (0);
seq__33850_34294 = G__34319;
chunk__33852_34295 = G__34320;
count__33853_34296 = G__34321;
i__33854_34297 = G__34322;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34293);
}
}


var G__34323 = cljs.core.next(seq__33823_34284__$1);
var G__34324 = null;
var G__34325 = (0);
var G__34326 = (0);
seq__33823_34239 = G__34323;
chunk__33825_34240 = G__34324;
count__33826_34241 = G__34325;
i__33827_34242 = G__34326;
continue;
} else {
var G__34327 = cljs.core.next(seq__33823_34284__$1);
var G__34328 = null;
var G__34329 = (0);
var G__34330 = (0);
seq__33823_34239 = G__34327;
chunk__33825_34240 = G__34328;
count__33826_34241 = G__34329;
i__33827_34242 = G__34330;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34331 = arguments.length;
var i__4865__auto___34332 = (0);
while(true){
if((i__4865__auto___34332 < len__4864__auto___34331)){
args__4870__auto__.push((arguments[i__4865__auto___34332]));

var G__34333 = (i__4865__auto___34332 + (1));
i__4865__auto___34332 = G__34333;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33857){
var G__33858 = cljs.core.first(seq33857);
var seq33857__$1 = cljs.core.next(seq33857);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33858,seq33857__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33867 = arguments.length;
switch (G__33867) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__29764__auto___34336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_33886){
var state_val_33893 = (state_33886[(1)]);
if((state_val_33893 === (1))){
var state_33886__$1 = state_33886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33886__$1,(2),once_or_cleanup);
} else {
if((state_val_33893 === (2))){
var inst_33883 = (state_33886[(2)]);
var inst_33884 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33886__$1 = (function (){var statearr_33914 = state_33886;
(statearr_33914[(7)] = inst_33883);

return statearr_33914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33886__$1,inst_33884);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29468__auto__ = null;
var shadow$dom$state_machine__29468__auto____0 = (function (){
var statearr_33915 = [null,null,null,null,null,null,null,null];
(statearr_33915[(0)] = shadow$dom$state_machine__29468__auto__);

(statearr_33915[(1)] = (1));

return statearr_33915;
});
var shadow$dom$state_machine__29468__auto____1 = (function (state_33886){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_33886);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e33916){var ex__29471__auto__ = e33916;
var statearr_33917_34338 = state_33886;
(statearr_33917_34338[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_33886[(4)]))){
var statearr_33920_34339 = state_33886;
(statearr_33920_34339[(1)] = cljs.core.first((state_33886[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34340 = state_33886;
state_33886 = G__34340;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
shadow$dom$state_machine__29468__auto__ = function(state_33886){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29468__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29468__auto____1.call(this,state_33886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29468__auto____0;
shadow$dom$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29468__auto____1;
return shadow$dom$state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_33921 = f__29765__auto__();
(statearr_33921[(6)] = c__29764__auto___34336);

return statearr_33921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
