goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29828 = arguments.length;
switch (G__29828) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29848 = (function (f,blockable,meta29849){
this.f = f;
this.blockable = blockable;
this.meta29849 = meta29849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29850,meta29849__$1){
var self__ = this;
var _29850__$1 = this;
return (new cljs.core.async.t_cljs$core$async29848(self__.f,self__.blockable,meta29849__$1));
}));

(cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29850){
var self__ = this;
var _29850__$1 = this;
return self__.meta29849;
}));

(cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29849","meta29849",639517567,null)], null);
}));

(cljs.core.async.t_cljs$core$async29848.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29848");

(cljs.core.async.t_cljs$core$async29848.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29848");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29848.
 */
cljs.core.async.__GT_t_cljs$core$async29848 = (function cljs$core$async$__GT_t_cljs$core$async29848(f__$1,blockable__$1,meta29849){
return (new cljs.core.async.t_cljs$core$async29848(f__$1,blockable__$1,meta29849));
});

}

return (new cljs.core.async.t_cljs$core$async29848(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29973 = arguments.length;
switch (G__29973) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29997 = arguments.length;
switch (G__29997) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30081 = arguments.length;
switch (G__30081) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32743 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32743) : fn1.call(null,val_32743));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32743) : fn1.call(null,val_32743));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30104 = arguments.length;
switch (G__30104) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___32745 = n;
var x_32746 = (0);
while(true){
if((x_32746 < n__4741__auto___32745)){
(a[x_32746] = x_32746);

var G__32747 = (x_32746 + (1));
x_32746 = G__32747;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30129 = (function (flag,meta30130){
this.flag = flag;
this.meta30130 = meta30130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30131,meta30130__$1){
var self__ = this;
var _30131__$1 = this;
return (new cljs.core.async.t_cljs$core$async30129(self__.flag,meta30130__$1));
}));

(cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30131){
var self__ = this;
var _30131__$1 = this;
return self__.meta30130;
}));

(cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30130","meta30130",1434330832,null)], null);
}));

(cljs.core.async.t_cljs$core$async30129.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30129");

(cljs.core.async.t_cljs$core$async30129.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30129");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30129.
 */
cljs.core.async.__GT_t_cljs$core$async30129 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30129(flag__$1,meta30130){
return (new cljs.core.async.t_cljs$core$async30129(flag__$1,meta30130));
});

}

return (new cljs.core.async.t_cljs$core$async30129(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30149 = (function (flag,cb,meta30150){
this.flag = flag;
this.cb = cb;
this.meta30150 = meta30150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30151,meta30150__$1){
var self__ = this;
var _30151__$1 = this;
return (new cljs.core.async.t_cljs$core$async30149(self__.flag,self__.cb,meta30150__$1));
}));

(cljs.core.async.t_cljs$core$async30149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30151){
var self__ = this;
var _30151__$1 = this;
return self__.meta30150;
}));

(cljs.core.async.t_cljs$core$async30149.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30149.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30149.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30149.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30150","meta30150",1659992028,null)], null);
}));

(cljs.core.async.t_cljs$core$async30149.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30149");

(cljs.core.async.t_cljs$core$async30149.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30149");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30149.
 */
cljs.core.async.__GT_t_cljs$core$async30149 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30149(flag__$1,cb__$1,meta30150){
return (new cljs.core.async.t_cljs$core$async30149(flag__$1,cb__$1,meta30150));
});

}

return (new cljs.core.async.t_cljs$core$async30149(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30180_SHARP_){
var G__30183 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30180_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30183) : fret.call(null,G__30183));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30181_SHARP_){
var G__30184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30181_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30184) : fret.call(null,G__30184));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32748 = (i + (1));
i = G__32748;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32749 = arguments.length;
var i__4865__auto___32750 = (0);
while(true){
if((i__4865__auto___32750 < len__4864__auto___32749)){
args__4870__auto__.push((arguments[i__4865__auto___32750]));

var G__32751 = (i__4865__auto___32750 + (1));
i__4865__auto___32750 = G__32751;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30197){
var map__30198 = p__30197;
var map__30198__$1 = cljs.core.__destructure_map(map__30198);
var opts = map__30198__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30190){
var G__30191 = cljs.core.first(seq30190);
var seq30190__$1 = cljs.core.next(seq30190);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30191,seq30190__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30200 = arguments.length;
switch (G__30200) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29764__auto___32753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_30244){
var state_val_30246 = (state_30244[(1)]);
if((state_val_30246 === (7))){
var inst_30234 = (state_30244[(2)]);
var state_30244__$1 = state_30244;
var statearr_30262_32754 = state_30244__$1;
(statearr_30262_32754[(2)] = inst_30234);

(statearr_30262_32754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (1))){
var state_30244__$1 = state_30244;
var statearr_30263_32755 = state_30244__$1;
(statearr_30263_32755[(2)] = null);

(statearr_30263_32755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (4))){
var inst_30213 = (state_30244[(7)]);
var inst_30213__$1 = (state_30244[(2)]);
var inst_30215 = (inst_30213__$1 == null);
var state_30244__$1 = (function (){var statearr_30270 = state_30244;
(statearr_30270[(7)] = inst_30213__$1);

return statearr_30270;
})();
if(cljs.core.truth_(inst_30215)){
var statearr_30273_32756 = state_30244__$1;
(statearr_30273_32756[(1)] = (5));

} else {
var statearr_30274_32757 = state_30244__$1;
(statearr_30274_32757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (13))){
var state_30244__$1 = state_30244;
var statearr_30282_32758 = state_30244__$1;
(statearr_30282_32758[(2)] = null);

(statearr_30282_32758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (6))){
var inst_30213 = (state_30244[(7)]);
var state_30244__$1 = state_30244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30244__$1,(11),to,inst_30213);
} else {
if((state_val_30246 === (3))){
var inst_30236 = (state_30244[(2)]);
var state_30244__$1 = state_30244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30244__$1,inst_30236);
} else {
if((state_val_30246 === (12))){
var state_30244__$1 = state_30244;
var statearr_30283_32759 = state_30244__$1;
(statearr_30283_32759[(2)] = null);

(statearr_30283_32759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (2))){
var state_30244__$1 = state_30244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30244__$1,(4),from);
} else {
if((state_val_30246 === (11))){
var inst_30224 = (state_30244[(2)]);
var state_30244__$1 = state_30244;
if(cljs.core.truth_(inst_30224)){
var statearr_30288_32760 = state_30244__$1;
(statearr_30288_32760[(1)] = (12));

} else {
var statearr_30289_32761 = state_30244__$1;
(statearr_30289_32761[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (9))){
var state_30244__$1 = state_30244;
var statearr_30290_32762 = state_30244__$1;
(statearr_30290_32762[(2)] = null);

(statearr_30290_32762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (5))){
var state_30244__$1 = state_30244;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30297_32763 = state_30244__$1;
(statearr_30297_32763[(1)] = (8));

} else {
var statearr_30298_32764 = state_30244__$1;
(statearr_30298_32764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (14))){
var inst_30232 = (state_30244[(2)]);
var state_30244__$1 = state_30244;
var statearr_30299_32765 = state_30244__$1;
(statearr_30299_32765[(2)] = inst_30232);

(statearr_30299_32765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (10))){
var inst_30221 = (state_30244[(2)]);
var state_30244__$1 = state_30244;
var statearr_30300_32766 = state_30244__$1;
(statearr_30300_32766[(2)] = inst_30221);

(statearr_30300_32766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (8))){
var inst_30218 = cljs.core.async.close_BANG_(to);
var state_30244__$1 = state_30244;
var statearr_30301_32767 = state_30244__$1;
(statearr_30301_32767[(2)] = inst_30218);

(statearr_30301_32767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29468__auto__ = null;
var cljs$core$async$state_machine__29468__auto____0 = (function (){
var statearr_30302 = [null,null,null,null,null,null,null,null];
(statearr_30302[(0)] = cljs$core$async$state_machine__29468__auto__);

(statearr_30302[(1)] = (1));

return statearr_30302;
});
var cljs$core$async$state_machine__29468__auto____1 = (function (state_30244){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_30244);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e30303){var ex__29471__auto__ = e30303;
var statearr_30304_32768 = state_30244;
(statearr_30304_32768[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_30244[(4)]))){
var statearr_30305_32769 = state_30244;
(statearr_30305_32769[(1)] = cljs.core.first((state_30244[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32770 = state_30244;
state_30244 = G__32770;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$state_machine__29468__auto__ = function(state_30244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29468__auto____1.call(this,state_30244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29468__auto____0;
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29468__auto____1;
return cljs$core$async$state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_30311 = f__29765__auto__();
(statearr_30311[(6)] = c__29764__auto___32753);

return statearr_30311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30319){
var vec__30320 = p__30319;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30320,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30320,(1),null);
var job = vec__30320;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29764__auto___32775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_30333){
var state_val_30334 = (state_30333[(1)]);
if((state_val_30334 === (1))){
var state_30333__$1 = state_30333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30333__$1,(2),res,v);
} else {
if((state_val_30334 === (2))){
var inst_30330 = (state_30333[(2)]);
var inst_30331 = cljs.core.async.close_BANG_(res);
var state_30333__$1 = (function (){var statearr_30341 = state_30333;
(statearr_30341[(7)] = inst_30330);

return statearr_30341;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30333__$1,inst_30331);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____0 = (function (){
var statearr_30342 = [null,null,null,null,null,null,null,null];
(statearr_30342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__);

(statearr_30342[(1)] = (1));

return statearr_30342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____1 = (function (state_30333){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_30333);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e30343){var ex__29471__auto__ = e30343;
var statearr_30344_32776 = state_30333;
(statearr_30344_32776[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_30333[(4)]))){
var statearr_30345_32777 = state_30333;
(statearr_30345_32777[(1)] = cljs.core.first((state_30333[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32778 = state_30333;
state_30333 = G__32778;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__ = function(state_30333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____1.call(this,state_30333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_30348 = f__29765__auto__();
(statearr_30348[(6)] = c__29764__auto___32775);

return statearr_30348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30349){
var vec__30350 = p__30349;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30350,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30350,(1),null);
var job = vec__30350;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___32779 = n;
var __32780 = (0);
while(true){
if((__32780 < n__4741__auto___32779)){
var G__30353_32781 = type;
var G__30353_32782__$1 = (((G__30353_32781 instanceof cljs.core.Keyword))?G__30353_32781.fqn:null);
switch (G__30353_32782__$1) {
case "compute":
var c__29764__auto___32784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32780,c__29764__auto___32784,G__30353_32781,G__30353_32782__$1,n__4741__auto___32779,jobs,results,process,async){
return (function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = ((function (__32780,c__29764__auto___32784,G__30353_32781,G__30353_32782__$1,n__4741__auto___32779,jobs,results,process,async){
return (function (state_30366){
var state_val_30367 = (state_30366[(1)]);
if((state_val_30367 === (1))){
var state_30366__$1 = state_30366;
var statearr_30378_32785 = state_30366__$1;
(statearr_30378_32785[(2)] = null);

(statearr_30378_32785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30367 === (2))){
var state_30366__$1 = state_30366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30366__$1,(4),jobs);
} else {
if((state_val_30367 === (3))){
var inst_30364 = (state_30366[(2)]);
var state_30366__$1 = state_30366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30366__$1,inst_30364);
} else {
if((state_val_30367 === (4))){
var inst_30356 = (state_30366[(2)]);
var inst_30357 = process(inst_30356);
var state_30366__$1 = state_30366;
if(cljs.core.truth_(inst_30357)){
var statearr_30388_32786 = state_30366__$1;
(statearr_30388_32786[(1)] = (5));

} else {
var statearr_30389_32788 = state_30366__$1;
(statearr_30389_32788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30367 === (5))){
var state_30366__$1 = state_30366;
var statearr_30390_32789 = state_30366__$1;
(statearr_30390_32789[(2)] = null);

(statearr_30390_32789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30367 === (6))){
var state_30366__$1 = state_30366;
var statearr_30392_32790 = state_30366__$1;
(statearr_30392_32790[(2)] = null);

(statearr_30392_32790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30367 === (7))){
var inst_30362 = (state_30366[(2)]);
var state_30366__$1 = state_30366;
var statearr_30393_32791 = state_30366__$1;
(statearr_30393_32791[(2)] = inst_30362);

(statearr_30393_32791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32780,c__29764__auto___32784,G__30353_32781,G__30353_32782__$1,n__4741__auto___32779,jobs,results,process,async))
;
return ((function (__32780,switch__29467__auto__,c__29764__auto___32784,G__30353_32781,G__30353_32782__$1,n__4741__auto___32779,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____0 = (function (){
var statearr_30394 = [null,null,null,null,null,null,null];
(statearr_30394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__);

(statearr_30394[(1)] = (1));

return statearr_30394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____1 = (function (state_30366){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_30366);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e30398){var ex__29471__auto__ = e30398;
var statearr_30399_32792 = state_30366;
(statearr_30399_32792[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_30366[(4)]))){
var statearr_30400_32793 = state_30366;
(statearr_30400_32793[(1)] = cljs.core.first((state_30366[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32794 = state_30366;
state_30366 = G__32794;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__ = function(state_30366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____1.call(this,state_30366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__;
})()
;})(__32780,switch__29467__auto__,c__29764__auto___32784,G__30353_32781,G__30353_32782__$1,n__4741__auto___32779,jobs,results,process,async))
})();
var state__29766__auto__ = (function (){var statearr_30401 = f__29765__auto__();
(statearr_30401[(6)] = c__29764__auto___32784);

return statearr_30401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
});})(__32780,c__29764__auto___32784,G__30353_32781,G__30353_32782__$1,n__4741__auto___32779,jobs,results,process,async))
);


break;
case "async":
var c__29764__auto___32795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32780,c__29764__auto___32795,G__30353_32781,G__30353_32782__$1,n__4741__auto___32779,jobs,results,process,async){
return (function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = ((function (__32780,c__29764__auto___32795,G__30353_32781,G__30353_32782__$1,n__4741__auto___32779,jobs,results,process,async){
return (function (state_30414){
var state_val_30415 = (state_30414[(1)]);
if((state_val_30415 === (1))){
var state_30414__$1 = state_30414;
var statearr_30421_32796 = state_30414__$1;
(statearr_30421_32796[(2)] = null);

(statearr_30421_32796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (2))){
var state_30414__$1 = state_30414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30414__$1,(4),jobs);
} else {
if((state_val_30415 === (3))){
var inst_30412 = (state_30414[(2)]);
var state_30414__$1 = state_30414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30414__$1,inst_30412);
} else {
if((state_val_30415 === (4))){
var inst_30404 = (state_30414[(2)]);
var inst_30405 = async(inst_30404);
var state_30414__$1 = state_30414;
if(cljs.core.truth_(inst_30405)){
var statearr_30422_32797 = state_30414__$1;
(statearr_30422_32797[(1)] = (5));

} else {
var statearr_30423_32798 = state_30414__$1;
(statearr_30423_32798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (5))){
var state_30414__$1 = state_30414;
var statearr_30424_32799 = state_30414__$1;
(statearr_30424_32799[(2)] = null);

(statearr_30424_32799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (6))){
var state_30414__$1 = state_30414;
var statearr_30429_32800 = state_30414__$1;
(statearr_30429_32800[(2)] = null);

(statearr_30429_32800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (7))){
var inst_30410 = (state_30414[(2)]);
var state_30414__$1 = state_30414;
var statearr_30430_32801 = state_30414__$1;
(statearr_30430_32801[(2)] = inst_30410);

(statearr_30430_32801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32780,c__29764__auto___32795,G__30353_32781,G__30353_32782__$1,n__4741__auto___32779,jobs,results,process,async))
;
return ((function (__32780,switch__29467__auto__,c__29764__auto___32795,G__30353_32781,G__30353_32782__$1,n__4741__auto___32779,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____0 = (function (){
var statearr_30432 = [null,null,null,null,null,null,null];
(statearr_30432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__);

(statearr_30432[(1)] = (1));

return statearr_30432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____1 = (function (state_30414){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_30414);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e30433){var ex__29471__auto__ = e30433;
var statearr_30434_32802 = state_30414;
(statearr_30434_32802[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_30414[(4)]))){
var statearr_30435_32803 = state_30414;
(statearr_30435_32803[(1)] = cljs.core.first((state_30414[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32804 = state_30414;
state_30414 = G__32804;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__ = function(state_30414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____1.call(this,state_30414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__;
})()
;})(__32780,switch__29467__auto__,c__29764__auto___32795,G__30353_32781,G__30353_32782__$1,n__4741__auto___32779,jobs,results,process,async))
})();
var state__29766__auto__ = (function (){var statearr_30436 = f__29765__auto__();
(statearr_30436[(6)] = c__29764__auto___32795);

return statearr_30436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
});})(__32780,c__29764__auto___32795,G__30353_32781,G__30353_32782__$1,n__4741__auto___32779,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30353_32782__$1)].join('')));

}

var G__32805 = (__32780 + (1));
__32780 = G__32805;
continue;
} else {
}
break;
}

var c__29764__auto___32806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_30463){
var state_val_30464 = (state_30463[(1)]);
if((state_val_30464 === (7))){
var inst_30459 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30466_32807 = state_30463__$1;
(statearr_30466_32807[(2)] = inst_30459);

(statearr_30466_32807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (1))){
var state_30463__$1 = state_30463;
var statearr_30467_32808 = state_30463__$1;
(statearr_30467_32808[(2)] = null);

(statearr_30467_32808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (4))){
var inst_30444 = (state_30463[(7)]);
var inst_30444__$1 = (state_30463[(2)]);
var inst_30445 = (inst_30444__$1 == null);
var state_30463__$1 = (function (){var statearr_30468 = state_30463;
(statearr_30468[(7)] = inst_30444__$1);

return statearr_30468;
})();
if(cljs.core.truth_(inst_30445)){
var statearr_30469_32809 = state_30463__$1;
(statearr_30469_32809[(1)] = (5));

} else {
var statearr_30470_32810 = state_30463__$1;
(statearr_30470_32810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (6))){
var inst_30449 = (state_30463[(8)]);
var inst_30444 = (state_30463[(7)]);
var inst_30449__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30450 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30451 = [inst_30444,inst_30449__$1];
var inst_30452 = (new cljs.core.PersistentVector(null,2,(5),inst_30450,inst_30451,null));
var state_30463__$1 = (function (){var statearr_30471 = state_30463;
(statearr_30471[(8)] = inst_30449__$1);

return statearr_30471;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30463__$1,(8),jobs,inst_30452);
} else {
if((state_val_30464 === (3))){
var inst_30461 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30463__$1,inst_30461);
} else {
if((state_val_30464 === (2))){
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30463__$1,(4),from);
} else {
if((state_val_30464 === (9))){
var inst_30456 = (state_30463[(2)]);
var state_30463__$1 = (function (){var statearr_30472 = state_30463;
(statearr_30472[(9)] = inst_30456);

return statearr_30472;
})();
var statearr_30473_32811 = state_30463__$1;
(statearr_30473_32811[(2)] = null);

(statearr_30473_32811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (5))){
var inst_30447 = cljs.core.async.close_BANG_(jobs);
var state_30463__$1 = state_30463;
var statearr_30474_32812 = state_30463__$1;
(statearr_30474_32812[(2)] = inst_30447);

(statearr_30474_32812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (8))){
var inst_30449 = (state_30463[(8)]);
var inst_30454 = (state_30463[(2)]);
var state_30463__$1 = (function (){var statearr_30475 = state_30463;
(statearr_30475[(10)] = inst_30454);

return statearr_30475;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30463__$1,(9),results,inst_30449);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____0 = (function (){
var statearr_30476 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__);

(statearr_30476[(1)] = (1));

return statearr_30476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____1 = (function (state_30463){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_30463);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e30481){var ex__29471__auto__ = e30481;
var statearr_30482_32814 = state_30463;
(statearr_30482_32814[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_30463[(4)]))){
var statearr_30483_32815 = state_30463;
(statearr_30483_32815[(1)] = cljs.core.first((state_30463[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32816 = state_30463;
state_30463 = G__32816;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__ = function(state_30463){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____1.call(this,state_30463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_30486 = f__29765__auto__();
(statearr_30486[(6)] = c__29764__auto___32806);

return statearr_30486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));


var c__29764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_30525){
var state_val_30526 = (state_30525[(1)]);
if((state_val_30526 === (7))){
var inst_30521 = (state_30525[(2)]);
var state_30525__$1 = state_30525;
var statearr_30527_32817 = state_30525__$1;
(statearr_30527_32817[(2)] = inst_30521);

(statearr_30527_32817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (20))){
var state_30525__$1 = state_30525;
var statearr_30528_32818 = state_30525__$1;
(statearr_30528_32818[(2)] = null);

(statearr_30528_32818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (1))){
var state_30525__$1 = state_30525;
var statearr_30531_32819 = state_30525__$1;
(statearr_30531_32819[(2)] = null);

(statearr_30531_32819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (4))){
var inst_30489 = (state_30525[(7)]);
var inst_30489__$1 = (state_30525[(2)]);
var inst_30490 = (inst_30489__$1 == null);
var state_30525__$1 = (function (){var statearr_30533 = state_30525;
(statearr_30533[(7)] = inst_30489__$1);

return statearr_30533;
})();
if(cljs.core.truth_(inst_30490)){
var statearr_30534_32820 = state_30525__$1;
(statearr_30534_32820[(1)] = (5));

} else {
var statearr_30535_32821 = state_30525__$1;
(statearr_30535_32821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (15))){
var inst_30503 = (state_30525[(8)]);
var state_30525__$1 = state_30525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30525__$1,(18),to,inst_30503);
} else {
if((state_val_30526 === (21))){
var inst_30516 = (state_30525[(2)]);
var state_30525__$1 = state_30525;
var statearr_30536_32822 = state_30525__$1;
(statearr_30536_32822[(2)] = inst_30516);

(statearr_30536_32822[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (13))){
var inst_30518 = (state_30525[(2)]);
var state_30525__$1 = (function (){var statearr_30537 = state_30525;
(statearr_30537[(9)] = inst_30518);

return statearr_30537;
})();
var statearr_30538_32823 = state_30525__$1;
(statearr_30538_32823[(2)] = null);

(statearr_30538_32823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (6))){
var inst_30489 = (state_30525[(7)]);
var state_30525__$1 = state_30525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30525__$1,(11),inst_30489);
} else {
if((state_val_30526 === (17))){
var inst_30511 = (state_30525[(2)]);
var state_30525__$1 = state_30525;
if(cljs.core.truth_(inst_30511)){
var statearr_30539_32824 = state_30525__$1;
(statearr_30539_32824[(1)] = (19));

} else {
var statearr_30540_32825 = state_30525__$1;
(statearr_30540_32825[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (3))){
var inst_30523 = (state_30525[(2)]);
var state_30525__$1 = state_30525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30525__$1,inst_30523);
} else {
if((state_val_30526 === (12))){
var inst_30499 = (state_30525[(10)]);
var state_30525__$1 = state_30525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30525__$1,(14),inst_30499);
} else {
if((state_val_30526 === (2))){
var state_30525__$1 = state_30525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30525__$1,(4),results);
} else {
if((state_val_30526 === (19))){
var state_30525__$1 = state_30525;
var statearr_30541_32826 = state_30525__$1;
(statearr_30541_32826[(2)] = null);

(statearr_30541_32826[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (11))){
var inst_30499 = (state_30525[(2)]);
var state_30525__$1 = (function (){var statearr_30542 = state_30525;
(statearr_30542[(10)] = inst_30499);

return statearr_30542;
})();
var statearr_30543_32827 = state_30525__$1;
(statearr_30543_32827[(2)] = null);

(statearr_30543_32827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (9))){
var state_30525__$1 = state_30525;
var statearr_30544_32828 = state_30525__$1;
(statearr_30544_32828[(2)] = null);

(statearr_30544_32828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (5))){
var state_30525__$1 = state_30525;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30548_32829 = state_30525__$1;
(statearr_30548_32829[(1)] = (8));

} else {
var statearr_30549_32830 = state_30525__$1;
(statearr_30549_32830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (14))){
var inst_30503 = (state_30525[(8)]);
var inst_30505 = (state_30525[(11)]);
var inst_30503__$1 = (state_30525[(2)]);
var inst_30504 = (inst_30503__$1 == null);
var inst_30505__$1 = cljs.core.not(inst_30504);
var state_30525__$1 = (function (){var statearr_30550 = state_30525;
(statearr_30550[(8)] = inst_30503__$1);

(statearr_30550[(11)] = inst_30505__$1);

return statearr_30550;
})();
if(inst_30505__$1){
var statearr_30552_32831 = state_30525__$1;
(statearr_30552_32831[(1)] = (15));

} else {
var statearr_30553_32832 = state_30525__$1;
(statearr_30553_32832[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (16))){
var inst_30505 = (state_30525[(11)]);
var state_30525__$1 = state_30525;
var statearr_30554_32833 = state_30525__$1;
(statearr_30554_32833[(2)] = inst_30505);

(statearr_30554_32833[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (10))){
var inst_30496 = (state_30525[(2)]);
var state_30525__$1 = state_30525;
var statearr_30556_32834 = state_30525__$1;
(statearr_30556_32834[(2)] = inst_30496);

(statearr_30556_32834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (18))){
var inst_30508 = (state_30525[(2)]);
var state_30525__$1 = state_30525;
var statearr_30557_32835 = state_30525__$1;
(statearr_30557_32835[(2)] = inst_30508);

(statearr_30557_32835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (8))){
var inst_30493 = cljs.core.async.close_BANG_(to);
var state_30525__$1 = state_30525;
var statearr_30561_32837 = state_30525__$1;
(statearr_30561_32837[(2)] = inst_30493);

(statearr_30561_32837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____0 = (function (){
var statearr_30562 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__);

(statearr_30562[(1)] = (1));

return statearr_30562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____1 = (function (state_30525){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_30525);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e30563){var ex__29471__auto__ = e30563;
var statearr_30564_32838 = state_30525;
(statearr_30564_32838[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_30525[(4)]))){
var statearr_30565_32839 = state_30525;
(statearr_30565_32839[(1)] = cljs.core.first((state_30525[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32840 = state_30525;
state_30525 = G__32840;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__ = function(state_30525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____1.call(this,state_30525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_30566 = f__29765__auto__();
(statearr_30566[(6)] = c__29764__auto__);

return statearr_30566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));

return c__29764__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30574 = arguments.length;
switch (G__30574) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30581 = arguments.length;
switch (G__30581) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30594 = arguments.length;
switch (G__30594) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29764__auto___32845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_30623){
var state_val_30624 = (state_30623[(1)]);
if((state_val_30624 === (7))){
var inst_30617 = (state_30623[(2)]);
var state_30623__$1 = state_30623;
var statearr_30625_32846 = state_30623__$1;
(statearr_30625_32846[(2)] = inst_30617);

(statearr_30625_32846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (1))){
var state_30623__$1 = state_30623;
var statearr_30626_32847 = state_30623__$1;
(statearr_30626_32847[(2)] = null);

(statearr_30626_32847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (4))){
var inst_30598 = (state_30623[(7)]);
var inst_30598__$1 = (state_30623[(2)]);
var inst_30599 = (inst_30598__$1 == null);
var state_30623__$1 = (function (){var statearr_30627 = state_30623;
(statearr_30627[(7)] = inst_30598__$1);

return statearr_30627;
})();
if(cljs.core.truth_(inst_30599)){
var statearr_30628_32848 = state_30623__$1;
(statearr_30628_32848[(1)] = (5));

} else {
var statearr_30629_32849 = state_30623__$1;
(statearr_30629_32849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (13))){
var state_30623__$1 = state_30623;
var statearr_30630_32850 = state_30623__$1;
(statearr_30630_32850[(2)] = null);

(statearr_30630_32850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (6))){
var inst_30598 = (state_30623[(7)]);
var inst_30604 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30598) : p.call(null,inst_30598));
var state_30623__$1 = state_30623;
if(cljs.core.truth_(inst_30604)){
var statearr_30631_32851 = state_30623__$1;
(statearr_30631_32851[(1)] = (9));

} else {
var statearr_30632_32852 = state_30623__$1;
(statearr_30632_32852[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (3))){
var inst_30619 = (state_30623[(2)]);
var state_30623__$1 = state_30623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30623__$1,inst_30619);
} else {
if((state_val_30624 === (12))){
var state_30623__$1 = state_30623;
var statearr_30642_32853 = state_30623__$1;
(statearr_30642_32853[(2)] = null);

(statearr_30642_32853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (2))){
var state_30623__$1 = state_30623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30623__$1,(4),ch);
} else {
if((state_val_30624 === (11))){
var inst_30598 = (state_30623[(7)]);
var inst_30608 = (state_30623[(2)]);
var state_30623__$1 = state_30623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30623__$1,(8),inst_30608,inst_30598);
} else {
if((state_val_30624 === (9))){
var state_30623__$1 = state_30623;
var statearr_30647_32855 = state_30623__$1;
(statearr_30647_32855[(2)] = tc);

(statearr_30647_32855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (5))){
var inst_30601 = cljs.core.async.close_BANG_(tc);
var inst_30602 = cljs.core.async.close_BANG_(fc);
var state_30623__$1 = (function (){var statearr_30648 = state_30623;
(statearr_30648[(8)] = inst_30601);

return statearr_30648;
})();
var statearr_30649_32856 = state_30623__$1;
(statearr_30649_32856[(2)] = inst_30602);

(statearr_30649_32856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (14))){
var inst_30615 = (state_30623[(2)]);
var state_30623__$1 = state_30623;
var statearr_30650_32858 = state_30623__$1;
(statearr_30650_32858[(2)] = inst_30615);

(statearr_30650_32858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (10))){
var state_30623__$1 = state_30623;
var statearr_30651_32859 = state_30623__$1;
(statearr_30651_32859[(2)] = fc);

(statearr_30651_32859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (8))){
var inst_30610 = (state_30623[(2)]);
var state_30623__$1 = state_30623;
if(cljs.core.truth_(inst_30610)){
var statearr_30652_32860 = state_30623__$1;
(statearr_30652_32860[(1)] = (12));

} else {
var statearr_30653_32861 = state_30623__$1;
(statearr_30653_32861[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29468__auto__ = null;
var cljs$core$async$state_machine__29468__auto____0 = (function (){
var statearr_30655 = [null,null,null,null,null,null,null,null,null];
(statearr_30655[(0)] = cljs$core$async$state_machine__29468__auto__);

(statearr_30655[(1)] = (1));

return statearr_30655;
});
var cljs$core$async$state_machine__29468__auto____1 = (function (state_30623){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_30623);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e30656){var ex__29471__auto__ = e30656;
var statearr_30657_32862 = state_30623;
(statearr_30657_32862[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_30623[(4)]))){
var statearr_30659_32863 = state_30623;
(statearr_30659_32863[(1)] = cljs.core.first((state_30623[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32865 = state_30623;
state_30623 = G__32865;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$state_machine__29468__auto__ = function(state_30623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29468__auto____1.call(this,state_30623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29468__auto____0;
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29468__auto____1;
return cljs$core$async$state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_30660 = f__29765__auto__();
(statearr_30660[(6)] = c__29764__auto___32845);

return statearr_30660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_30683){
var state_val_30684 = (state_30683[(1)]);
if((state_val_30684 === (7))){
var inst_30679 = (state_30683[(2)]);
var state_30683__$1 = state_30683;
var statearr_30687_32868 = state_30683__$1;
(statearr_30687_32868[(2)] = inst_30679);

(statearr_30687_32868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (1))){
var inst_30662 = init;
var inst_30663 = inst_30662;
var state_30683__$1 = (function (){var statearr_30688 = state_30683;
(statearr_30688[(7)] = inst_30663);

return statearr_30688;
})();
var statearr_30689_32869 = state_30683__$1;
(statearr_30689_32869[(2)] = null);

(statearr_30689_32869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (4))){
var inst_30666 = (state_30683[(8)]);
var inst_30666__$1 = (state_30683[(2)]);
var inst_30667 = (inst_30666__$1 == null);
var state_30683__$1 = (function (){var statearr_30691 = state_30683;
(statearr_30691[(8)] = inst_30666__$1);

return statearr_30691;
})();
if(cljs.core.truth_(inst_30667)){
var statearr_30696_32870 = state_30683__$1;
(statearr_30696_32870[(1)] = (5));

} else {
var statearr_30703_32871 = state_30683__$1;
(statearr_30703_32871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (6))){
var inst_30663 = (state_30683[(7)]);
var inst_30666 = (state_30683[(8)]);
var inst_30670 = (state_30683[(9)]);
var inst_30670__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30663,inst_30666) : f.call(null,inst_30663,inst_30666));
var inst_30671 = cljs.core.reduced_QMARK_(inst_30670__$1);
var state_30683__$1 = (function (){var statearr_30708 = state_30683;
(statearr_30708[(9)] = inst_30670__$1);

return statearr_30708;
})();
if(inst_30671){
var statearr_30710_32872 = state_30683__$1;
(statearr_30710_32872[(1)] = (8));

} else {
var statearr_30711_32873 = state_30683__$1;
(statearr_30711_32873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (3))){
var inst_30681 = (state_30683[(2)]);
var state_30683__$1 = state_30683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30683__$1,inst_30681);
} else {
if((state_val_30684 === (2))){
var state_30683__$1 = state_30683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30683__$1,(4),ch);
} else {
if((state_val_30684 === (9))){
var inst_30670 = (state_30683[(9)]);
var inst_30663 = inst_30670;
var state_30683__$1 = (function (){var statearr_30712 = state_30683;
(statearr_30712[(7)] = inst_30663);

return statearr_30712;
})();
var statearr_30713_32874 = state_30683__$1;
(statearr_30713_32874[(2)] = null);

(statearr_30713_32874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (5))){
var inst_30663 = (state_30683[(7)]);
var state_30683__$1 = state_30683;
var statearr_30715_32876 = state_30683__$1;
(statearr_30715_32876[(2)] = inst_30663);

(statearr_30715_32876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (10))){
var inst_30677 = (state_30683[(2)]);
var state_30683__$1 = state_30683;
var statearr_30716_32877 = state_30683__$1;
(statearr_30716_32877[(2)] = inst_30677);

(statearr_30716_32877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (8))){
var inst_30670 = (state_30683[(9)]);
var inst_30673 = cljs.core.deref(inst_30670);
var state_30683__$1 = state_30683;
var statearr_30717_32878 = state_30683__$1;
(statearr_30717_32878[(2)] = inst_30673);

(statearr_30717_32878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29468__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29468__auto____0 = (function (){
var statearr_30718 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30718[(0)] = cljs$core$async$reduce_$_state_machine__29468__auto__);

(statearr_30718[(1)] = (1));

return statearr_30718;
});
var cljs$core$async$reduce_$_state_machine__29468__auto____1 = (function (state_30683){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_30683);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e30719){var ex__29471__auto__ = e30719;
var statearr_30720_32879 = state_30683;
(statearr_30720_32879[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_30683[(4)]))){
var statearr_30721_32880 = state_30683;
(statearr_30721_32880[(1)] = cljs.core.first((state_30683[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32881 = state_30683;
state_30683 = G__32881;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29468__auto__ = function(state_30683){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29468__auto____1.call(this,state_30683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29468__auto____0;
cljs$core$async$reduce_$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29468__auto____1;
return cljs$core$async$reduce_$_state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_30728 = f__29765__auto__();
(statearr_30728[(6)] = c__29764__auto__);

return statearr_30728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));

return c__29764__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_30735){
var state_val_30736 = (state_30735[(1)]);
if((state_val_30736 === (1))){
var inst_30730 = cljs.core.async.reduce(f__$1,init,ch);
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30735__$1,(2),inst_30730);
} else {
if((state_val_30736 === (2))){
var inst_30732 = (state_30735[(2)]);
var inst_30733 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30732) : f__$1.call(null,inst_30732));
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30735__$1,inst_30733);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29468__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29468__auto____0 = (function (){
var statearr_30741 = [null,null,null,null,null,null,null];
(statearr_30741[(0)] = cljs$core$async$transduce_$_state_machine__29468__auto__);

(statearr_30741[(1)] = (1));

return statearr_30741;
});
var cljs$core$async$transduce_$_state_machine__29468__auto____1 = (function (state_30735){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_30735);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e30742){var ex__29471__auto__ = e30742;
var statearr_30743_32882 = state_30735;
(statearr_30743_32882[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_30735[(4)]))){
var statearr_30744_32883 = state_30735;
(statearr_30744_32883[(1)] = cljs.core.first((state_30735[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32884 = state_30735;
state_30735 = G__32884;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29468__auto__ = function(state_30735){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29468__auto____1.call(this,state_30735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29468__auto____0;
cljs$core$async$transduce_$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29468__auto____1;
return cljs$core$async$transduce_$_state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_30745 = f__29765__auto__();
(statearr_30745[(6)] = c__29764__auto__);

return statearr_30745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));

return c__29764__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30747 = arguments.length;
switch (G__30747) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_30776){
var state_val_30777 = (state_30776[(1)]);
if((state_val_30777 === (7))){
var inst_30758 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
var statearr_30779_32887 = state_30776__$1;
(statearr_30779_32887[(2)] = inst_30758);

(statearr_30779_32887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (1))){
var inst_30752 = cljs.core.seq(coll);
var inst_30753 = inst_30752;
var state_30776__$1 = (function (){var statearr_30780 = state_30776;
(statearr_30780[(7)] = inst_30753);

return statearr_30780;
})();
var statearr_30781_32888 = state_30776__$1;
(statearr_30781_32888[(2)] = null);

(statearr_30781_32888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (4))){
var inst_30753 = (state_30776[(7)]);
var inst_30756 = cljs.core.first(inst_30753);
var state_30776__$1 = state_30776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30776__$1,(7),ch,inst_30756);
} else {
if((state_val_30777 === (13))){
var inst_30770 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
var statearr_30782_32889 = state_30776__$1;
(statearr_30782_32889[(2)] = inst_30770);

(statearr_30782_32889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (6))){
var inst_30761 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
if(cljs.core.truth_(inst_30761)){
var statearr_30783_32890 = state_30776__$1;
(statearr_30783_32890[(1)] = (8));

} else {
var statearr_30784_32891 = state_30776__$1;
(statearr_30784_32891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (3))){
var inst_30774 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30776__$1,inst_30774);
} else {
if((state_val_30777 === (12))){
var state_30776__$1 = state_30776;
var statearr_30785_32892 = state_30776__$1;
(statearr_30785_32892[(2)] = null);

(statearr_30785_32892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (2))){
var inst_30753 = (state_30776[(7)]);
var state_30776__$1 = state_30776;
if(cljs.core.truth_(inst_30753)){
var statearr_30786_32893 = state_30776__$1;
(statearr_30786_32893[(1)] = (4));

} else {
var statearr_30787_32894 = state_30776__$1;
(statearr_30787_32894[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (11))){
var inst_30767 = cljs.core.async.close_BANG_(ch);
var state_30776__$1 = state_30776;
var statearr_30788_32895 = state_30776__$1;
(statearr_30788_32895[(2)] = inst_30767);

(statearr_30788_32895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (9))){
var state_30776__$1 = state_30776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30789_32896 = state_30776__$1;
(statearr_30789_32896[(1)] = (11));

} else {
var statearr_30790_32897 = state_30776__$1;
(statearr_30790_32897[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (5))){
var inst_30753 = (state_30776[(7)]);
var state_30776__$1 = state_30776;
var statearr_30791_32898 = state_30776__$1;
(statearr_30791_32898[(2)] = inst_30753);

(statearr_30791_32898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (10))){
var inst_30772 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
var statearr_30792_32899 = state_30776__$1;
(statearr_30792_32899[(2)] = inst_30772);

(statearr_30792_32899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (8))){
var inst_30753 = (state_30776[(7)]);
var inst_30763 = cljs.core.next(inst_30753);
var inst_30753__$1 = inst_30763;
var state_30776__$1 = (function (){var statearr_30793 = state_30776;
(statearr_30793[(7)] = inst_30753__$1);

return statearr_30793;
})();
var statearr_30794_32901 = state_30776__$1;
(statearr_30794_32901[(2)] = null);

(statearr_30794_32901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29468__auto__ = null;
var cljs$core$async$state_machine__29468__auto____0 = (function (){
var statearr_30795 = [null,null,null,null,null,null,null,null];
(statearr_30795[(0)] = cljs$core$async$state_machine__29468__auto__);

(statearr_30795[(1)] = (1));

return statearr_30795;
});
var cljs$core$async$state_machine__29468__auto____1 = (function (state_30776){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_30776);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e30800){var ex__29471__auto__ = e30800;
var statearr_30801_32912 = state_30776;
(statearr_30801_32912[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_30776[(4)]))){
var statearr_30802_32913 = state_30776;
(statearr_30802_32913[(1)] = cljs.core.first((state_30776[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32914 = state_30776;
state_30776 = G__32914;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$state_machine__29468__auto__ = function(state_30776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29468__auto____1.call(this,state_30776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29468__auto____0;
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29468__auto____1;
return cljs$core$async$state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_30804 = f__29765__auto__();
(statearr_30804[(6)] = c__29764__auto__);

return statearr_30804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));

return c__29764__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30810 = arguments.length;
switch (G__30810) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32916 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32916(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32917 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32917(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32918 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32918(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32919 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32919(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30842 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30842 = (function (ch,cs,meta30843){
this.ch = ch;
this.cs = cs;
this.meta30843 = meta30843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30844,meta30843__$1){
var self__ = this;
var _30844__$1 = this;
return (new cljs.core.async.t_cljs$core$async30842(self__.ch,self__.cs,meta30843__$1));
}));

(cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30844){
var self__ = this;
var _30844__$1 = this;
return self__.meta30843;
}));

(cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30843","meta30843",-72794757,null)], null);
}));

(cljs.core.async.t_cljs$core$async30842.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30842");

(cljs.core.async.t_cljs$core$async30842.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30842");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30842.
 */
cljs.core.async.__GT_t_cljs$core$async30842 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30842(ch__$1,cs__$1,meta30843){
return (new cljs.core.async.t_cljs$core$async30842(ch__$1,cs__$1,meta30843));
});

}

return (new cljs.core.async.t_cljs$core$async30842(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29764__auto___32921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_30996){
var state_val_30997 = (state_30996[(1)]);
if((state_val_30997 === (7))){
var inst_30990 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_30998_32922 = state_30996__$1;
(statearr_30998_32922[(2)] = inst_30990);

(statearr_30998_32922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (20))){
var inst_30895 = (state_30996[(7)]);
var inst_30907 = cljs.core.first(inst_30895);
var inst_30908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30907,(0),null);
var inst_30909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30907,(1),null);
var state_30996__$1 = (function (){var statearr_30999 = state_30996;
(statearr_30999[(8)] = inst_30908);

return statearr_30999;
})();
if(cljs.core.truth_(inst_30909)){
var statearr_31000_32923 = state_30996__$1;
(statearr_31000_32923[(1)] = (22));

} else {
var statearr_31001_32924 = state_30996__$1;
(statearr_31001_32924[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (27))){
var inst_30937 = (state_30996[(9)]);
var inst_30944 = (state_30996[(10)]);
var inst_30939 = (state_30996[(11)]);
var inst_30856 = (state_30996[(12)]);
var inst_30944__$1 = cljs.core._nth(inst_30937,inst_30939);
var inst_30945 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30944__$1,inst_30856,done);
var state_30996__$1 = (function (){var statearr_31003 = state_30996;
(statearr_31003[(10)] = inst_30944__$1);

return statearr_31003;
})();
if(cljs.core.truth_(inst_30945)){
var statearr_31004_32925 = state_30996__$1;
(statearr_31004_32925[(1)] = (30));

} else {
var statearr_31005_32926 = state_30996__$1;
(statearr_31005_32926[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (1))){
var state_30996__$1 = state_30996;
var statearr_31006_32927 = state_30996__$1;
(statearr_31006_32927[(2)] = null);

(statearr_31006_32927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (24))){
var inst_30895 = (state_30996[(7)]);
var inst_30914 = (state_30996[(2)]);
var inst_30915 = cljs.core.next(inst_30895);
var inst_30866 = inst_30915;
var inst_30867 = null;
var inst_30868 = (0);
var inst_30869 = (0);
var state_30996__$1 = (function (){var statearr_31007 = state_30996;
(statearr_31007[(13)] = inst_30914);

(statearr_31007[(14)] = inst_30866);

(statearr_31007[(15)] = inst_30867);

(statearr_31007[(16)] = inst_30868);

(statearr_31007[(17)] = inst_30869);

return statearr_31007;
})();
var statearr_31008_32928 = state_30996__$1;
(statearr_31008_32928[(2)] = null);

(statearr_31008_32928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (39))){
var state_30996__$1 = state_30996;
var statearr_31012_32929 = state_30996__$1;
(statearr_31012_32929[(2)] = null);

(statearr_31012_32929[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (4))){
var inst_30856 = (state_30996[(12)]);
var inst_30856__$1 = (state_30996[(2)]);
var inst_30857 = (inst_30856__$1 == null);
var state_30996__$1 = (function (){var statearr_31013 = state_30996;
(statearr_31013[(12)] = inst_30856__$1);

return statearr_31013;
})();
if(cljs.core.truth_(inst_30857)){
var statearr_31014_32930 = state_30996__$1;
(statearr_31014_32930[(1)] = (5));

} else {
var statearr_31015_32931 = state_30996__$1;
(statearr_31015_32931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (15))){
var inst_30866 = (state_30996[(14)]);
var inst_30867 = (state_30996[(15)]);
var inst_30868 = (state_30996[(16)]);
var inst_30869 = (state_30996[(17)]);
var inst_30891 = (state_30996[(2)]);
var inst_30892 = (inst_30869 + (1));
var tmp31009 = inst_30866;
var tmp31010 = inst_30867;
var tmp31011 = inst_30868;
var inst_30866__$1 = tmp31009;
var inst_30867__$1 = tmp31010;
var inst_30868__$1 = tmp31011;
var inst_30869__$1 = inst_30892;
var state_30996__$1 = (function (){var statearr_31016 = state_30996;
(statearr_31016[(14)] = inst_30866__$1);

(statearr_31016[(15)] = inst_30867__$1);

(statearr_31016[(16)] = inst_30868__$1);

(statearr_31016[(17)] = inst_30869__$1);

(statearr_31016[(18)] = inst_30891);

return statearr_31016;
})();
var statearr_31017_32932 = state_30996__$1;
(statearr_31017_32932[(2)] = null);

(statearr_31017_32932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (21))){
var inst_30918 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31021_32933 = state_30996__$1;
(statearr_31021_32933[(2)] = inst_30918);

(statearr_31021_32933[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (31))){
var inst_30944 = (state_30996[(10)]);
var inst_30948 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30944);
var state_30996__$1 = state_30996;
var statearr_31022_32934 = state_30996__$1;
(statearr_31022_32934[(2)] = inst_30948);

(statearr_31022_32934[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (32))){
var inst_30938 = (state_30996[(19)]);
var inst_30936 = (state_30996[(20)]);
var inst_30937 = (state_30996[(9)]);
var inst_30939 = (state_30996[(11)]);
var inst_30950 = (state_30996[(2)]);
var inst_30951 = (inst_30939 + (1));
var tmp31018 = inst_30938;
var tmp31019 = inst_30936;
var tmp31020 = inst_30937;
var inst_30936__$1 = tmp31019;
var inst_30937__$1 = tmp31020;
var inst_30938__$1 = tmp31018;
var inst_30939__$1 = inst_30951;
var state_30996__$1 = (function (){var statearr_31023 = state_30996;
(statearr_31023[(19)] = inst_30938__$1);

(statearr_31023[(21)] = inst_30950);

(statearr_31023[(20)] = inst_30936__$1);

(statearr_31023[(9)] = inst_30937__$1);

(statearr_31023[(11)] = inst_30939__$1);

return statearr_31023;
})();
var statearr_31028_32935 = state_30996__$1;
(statearr_31028_32935[(2)] = null);

(statearr_31028_32935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (40))){
var inst_30963 = (state_30996[(22)]);
var inst_30967 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30963);
var state_30996__$1 = state_30996;
var statearr_31030_32936 = state_30996__$1;
(statearr_31030_32936[(2)] = inst_30967);

(statearr_31030_32936[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (33))){
var inst_30954 = (state_30996[(23)]);
var inst_30956 = cljs.core.chunked_seq_QMARK_(inst_30954);
var state_30996__$1 = state_30996;
if(inst_30956){
var statearr_31031_32937 = state_30996__$1;
(statearr_31031_32937[(1)] = (36));

} else {
var statearr_31032_32938 = state_30996__$1;
(statearr_31032_32938[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (13))){
var inst_30885 = (state_30996[(24)]);
var inst_30888 = cljs.core.async.close_BANG_(inst_30885);
var state_30996__$1 = state_30996;
var statearr_31033_32939 = state_30996__$1;
(statearr_31033_32939[(2)] = inst_30888);

(statearr_31033_32939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (22))){
var inst_30908 = (state_30996[(8)]);
var inst_30911 = cljs.core.async.close_BANG_(inst_30908);
var state_30996__$1 = state_30996;
var statearr_31034_32941 = state_30996__$1;
(statearr_31034_32941[(2)] = inst_30911);

(statearr_31034_32941[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (36))){
var inst_30954 = (state_30996[(23)]);
var inst_30958 = cljs.core.chunk_first(inst_30954);
var inst_30959 = cljs.core.chunk_rest(inst_30954);
var inst_30960 = cljs.core.count(inst_30958);
var inst_30936 = inst_30959;
var inst_30937 = inst_30958;
var inst_30938 = inst_30960;
var inst_30939 = (0);
var state_30996__$1 = (function (){var statearr_31035 = state_30996;
(statearr_31035[(19)] = inst_30938);

(statearr_31035[(20)] = inst_30936);

(statearr_31035[(9)] = inst_30937);

(statearr_31035[(11)] = inst_30939);

return statearr_31035;
})();
var statearr_31036_32942 = state_30996__$1;
(statearr_31036_32942[(2)] = null);

(statearr_31036_32942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (41))){
var inst_30954 = (state_30996[(23)]);
var inst_30969 = (state_30996[(2)]);
var inst_30970 = cljs.core.next(inst_30954);
var inst_30936 = inst_30970;
var inst_30937 = null;
var inst_30938 = (0);
var inst_30939 = (0);
var state_30996__$1 = (function (){var statearr_31037 = state_30996;
(statearr_31037[(19)] = inst_30938);

(statearr_31037[(20)] = inst_30936);

(statearr_31037[(9)] = inst_30937);

(statearr_31037[(11)] = inst_30939);

(statearr_31037[(25)] = inst_30969);

return statearr_31037;
})();
var statearr_31038_32943 = state_30996__$1;
(statearr_31038_32943[(2)] = null);

(statearr_31038_32943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (43))){
var state_30996__$1 = state_30996;
var statearr_31043_32944 = state_30996__$1;
(statearr_31043_32944[(2)] = null);

(statearr_31043_32944[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (29))){
var inst_30978 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31051_32945 = state_30996__$1;
(statearr_31051_32945[(2)] = inst_30978);

(statearr_31051_32945[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (44))){
var inst_30987 = (state_30996[(2)]);
var state_30996__$1 = (function (){var statearr_31052 = state_30996;
(statearr_31052[(26)] = inst_30987);

return statearr_31052;
})();
var statearr_31053_32946 = state_30996__$1;
(statearr_31053_32946[(2)] = null);

(statearr_31053_32946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (6))){
var inst_30928 = (state_30996[(27)]);
var inst_30927 = cljs.core.deref(cs);
var inst_30928__$1 = cljs.core.keys(inst_30927);
var inst_30929 = cljs.core.count(inst_30928__$1);
var inst_30930 = cljs.core.reset_BANG_(dctr,inst_30929);
var inst_30935 = cljs.core.seq(inst_30928__$1);
var inst_30936 = inst_30935;
var inst_30937 = null;
var inst_30938 = (0);
var inst_30939 = (0);
var state_30996__$1 = (function (){var statearr_31054 = state_30996;
(statearr_31054[(19)] = inst_30938);

(statearr_31054[(28)] = inst_30930);

(statearr_31054[(20)] = inst_30936);

(statearr_31054[(9)] = inst_30937);

(statearr_31054[(11)] = inst_30939);

(statearr_31054[(27)] = inst_30928__$1);

return statearr_31054;
})();
var statearr_31055_32947 = state_30996__$1;
(statearr_31055_32947[(2)] = null);

(statearr_31055_32947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (28))){
var inst_30936 = (state_30996[(20)]);
var inst_30954 = (state_30996[(23)]);
var inst_30954__$1 = cljs.core.seq(inst_30936);
var state_30996__$1 = (function (){var statearr_31059 = state_30996;
(statearr_31059[(23)] = inst_30954__$1);

return statearr_31059;
})();
if(inst_30954__$1){
var statearr_31060_32948 = state_30996__$1;
(statearr_31060_32948[(1)] = (33));

} else {
var statearr_31061_32949 = state_30996__$1;
(statearr_31061_32949[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (25))){
var inst_30938 = (state_30996[(19)]);
var inst_30939 = (state_30996[(11)]);
var inst_30941 = (inst_30939 < inst_30938);
var inst_30942 = inst_30941;
var state_30996__$1 = state_30996;
if(cljs.core.truth_(inst_30942)){
var statearr_31062_32950 = state_30996__$1;
(statearr_31062_32950[(1)] = (27));

} else {
var statearr_31063_32951 = state_30996__$1;
(statearr_31063_32951[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (34))){
var state_30996__$1 = state_30996;
var statearr_31064_32952 = state_30996__$1;
(statearr_31064_32952[(2)] = null);

(statearr_31064_32952[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (17))){
var state_30996__$1 = state_30996;
var statearr_31065_32953 = state_30996__$1;
(statearr_31065_32953[(2)] = null);

(statearr_31065_32953[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (3))){
var inst_30992 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30996__$1,inst_30992);
} else {
if((state_val_30997 === (12))){
var inst_30923 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31066_32954 = state_30996__$1;
(statearr_31066_32954[(2)] = inst_30923);

(statearr_31066_32954[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (2))){
var state_30996__$1 = state_30996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30996__$1,(4),ch);
} else {
if((state_val_30997 === (23))){
var state_30996__$1 = state_30996;
var statearr_31067_32955 = state_30996__$1;
(statearr_31067_32955[(2)] = null);

(statearr_31067_32955[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (35))){
var inst_30976 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31072_32956 = state_30996__$1;
(statearr_31072_32956[(2)] = inst_30976);

(statearr_31072_32956[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (19))){
var inst_30895 = (state_30996[(7)]);
var inst_30899 = cljs.core.chunk_first(inst_30895);
var inst_30900 = cljs.core.chunk_rest(inst_30895);
var inst_30901 = cljs.core.count(inst_30899);
var inst_30866 = inst_30900;
var inst_30867 = inst_30899;
var inst_30868 = inst_30901;
var inst_30869 = (0);
var state_30996__$1 = (function (){var statearr_31073 = state_30996;
(statearr_31073[(14)] = inst_30866);

(statearr_31073[(15)] = inst_30867);

(statearr_31073[(16)] = inst_30868);

(statearr_31073[(17)] = inst_30869);

return statearr_31073;
})();
var statearr_31074_32957 = state_30996__$1;
(statearr_31074_32957[(2)] = null);

(statearr_31074_32957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (11))){
var inst_30895 = (state_30996[(7)]);
var inst_30866 = (state_30996[(14)]);
var inst_30895__$1 = cljs.core.seq(inst_30866);
var state_30996__$1 = (function (){var statearr_31081 = state_30996;
(statearr_31081[(7)] = inst_30895__$1);

return statearr_31081;
})();
if(inst_30895__$1){
var statearr_31082_32958 = state_30996__$1;
(statearr_31082_32958[(1)] = (16));

} else {
var statearr_31083_32959 = state_30996__$1;
(statearr_31083_32959[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (9))){
var inst_30925 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31084_32961 = state_30996__$1;
(statearr_31084_32961[(2)] = inst_30925);

(statearr_31084_32961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (5))){
var inst_30863 = cljs.core.deref(cs);
var inst_30864 = cljs.core.seq(inst_30863);
var inst_30866 = inst_30864;
var inst_30867 = null;
var inst_30868 = (0);
var inst_30869 = (0);
var state_30996__$1 = (function (){var statearr_31085 = state_30996;
(statearr_31085[(14)] = inst_30866);

(statearr_31085[(15)] = inst_30867);

(statearr_31085[(16)] = inst_30868);

(statearr_31085[(17)] = inst_30869);

return statearr_31085;
})();
var statearr_31086_32962 = state_30996__$1;
(statearr_31086_32962[(2)] = null);

(statearr_31086_32962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (14))){
var state_30996__$1 = state_30996;
var statearr_31087_32963 = state_30996__$1;
(statearr_31087_32963[(2)] = null);

(statearr_31087_32963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (45))){
var inst_30984 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31092_32964 = state_30996__$1;
(statearr_31092_32964[(2)] = inst_30984);

(statearr_31092_32964[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (26))){
var inst_30928 = (state_30996[(27)]);
var inst_30980 = (state_30996[(2)]);
var inst_30981 = cljs.core.seq(inst_30928);
var state_30996__$1 = (function (){var statearr_31093 = state_30996;
(statearr_31093[(29)] = inst_30980);

return statearr_31093;
})();
if(inst_30981){
var statearr_31094_32967 = state_30996__$1;
(statearr_31094_32967[(1)] = (42));

} else {
var statearr_31095_32968 = state_30996__$1;
(statearr_31095_32968[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (16))){
var inst_30895 = (state_30996[(7)]);
var inst_30897 = cljs.core.chunked_seq_QMARK_(inst_30895);
var state_30996__$1 = state_30996;
if(inst_30897){
var statearr_31096_32969 = state_30996__$1;
(statearr_31096_32969[(1)] = (19));

} else {
var statearr_31097_32970 = state_30996__$1;
(statearr_31097_32970[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (38))){
var inst_30973 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31098_32971 = state_30996__$1;
(statearr_31098_32971[(2)] = inst_30973);

(statearr_31098_32971[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (30))){
var state_30996__$1 = state_30996;
var statearr_31099_32972 = state_30996__$1;
(statearr_31099_32972[(2)] = null);

(statearr_31099_32972[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (10))){
var inst_30867 = (state_30996[(15)]);
var inst_30869 = (state_30996[(17)]);
var inst_30884 = cljs.core._nth(inst_30867,inst_30869);
var inst_30885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30884,(0),null);
var inst_30886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30884,(1),null);
var state_30996__$1 = (function (){var statearr_31100 = state_30996;
(statearr_31100[(24)] = inst_30885);

return statearr_31100;
})();
if(cljs.core.truth_(inst_30886)){
var statearr_31101_32973 = state_30996__$1;
(statearr_31101_32973[(1)] = (13));

} else {
var statearr_31102_32974 = state_30996__$1;
(statearr_31102_32974[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (18))){
var inst_30921 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31103_32975 = state_30996__$1;
(statearr_31103_32975[(2)] = inst_30921);

(statearr_31103_32975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (42))){
var state_30996__$1 = state_30996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30996__$1,(45),dchan);
} else {
if((state_val_30997 === (37))){
var inst_30963 = (state_30996[(22)]);
var inst_30954 = (state_30996[(23)]);
var inst_30856 = (state_30996[(12)]);
var inst_30963__$1 = cljs.core.first(inst_30954);
var inst_30964 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30963__$1,inst_30856,done);
var state_30996__$1 = (function (){var statearr_31104 = state_30996;
(statearr_31104[(22)] = inst_30963__$1);

return statearr_31104;
})();
if(cljs.core.truth_(inst_30964)){
var statearr_31105_32976 = state_30996__$1;
(statearr_31105_32976[(1)] = (39));

} else {
var statearr_31106_32977 = state_30996__$1;
(statearr_31106_32977[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (8))){
var inst_30868 = (state_30996[(16)]);
var inst_30869 = (state_30996[(17)]);
var inst_30875 = (inst_30869 < inst_30868);
var inst_30876 = inst_30875;
var state_30996__$1 = state_30996;
if(cljs.core.truth_(inst_30876)){
var statearr_31107_32978 = state_30996__$1;
(statearr_31107_32978[(1)] = (10));

} else {
var statearr_31108_32979 = state_30996__$1;
(statearr_31108_32979[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29468__auto__ = null;
var cljs$core$async$mult_$_state_machine__29468__auto____0 = (function (){
var statearr_31109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31109[(0)] = cljs$core$async$mult_$_state_machine__29468__auto__);

(statearr_31109[(1)] = (1));

return statearr_31109;
});
var cljs$core$async$mult_$_state_machine__29468__auto____1 = (function (state_30996){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_30996);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e31110){var ex__29471__auto__ = e31110;
var statearr_31111_32980 = state_30996;
(statearr_31111_32980[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_30996[(4)]))){
var statearr_31112_32981 = state_30996;
(statearr_31112_32981[(1)] = cljs.core.first((state_30996[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32982 = state_30996;
state_30996 = G__32982;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29468__auto__ = function(state_30996){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29468__auto____1.call(this,state_30996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29468__auto____0;
cljs$core$async$mult_$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29468__auto____1;
return cljs$core$async$mult_$_state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_31115 = f__29765__auto__();
(statearr_31115[(6)] = c__29764__auto___32921);

return statearr_31115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31148 = arguments.length;
switch (G__31148) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32984 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32984(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32985 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32985(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32986 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32986(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32987 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32987(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32988 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32988(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32989 = arguments.length;
var i__4865__auto___32990 = (0);
while(true){
if((i__4865__auto___32990 < len__4864__auto___32989)){
args__4870__auto__.push((arguments[i__4865__auto___32990]));

var G__32991 = (i__4865__auto___32990 + (1));
i__4865__auto___32990 = G__32991;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31154){
var map__31155 = p__31154;
var map__31155__$1 = cljs.core.__destructure_map(map__31155);
var opts = map__31155__$1;
var statearr_31156_32993 = state;
(statearr_31156_32993[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31158_32994 = state;
(statearr_31158_32994[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31159_32995 = state;
(statearr_31159_32995[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31150){
var G__31151 = cljs.core.first(seq31150);
var seq31150__$1 = cljs.core.next(seq31150);
var G__31152 = cljs.core.first(seq31150__$1);
var seq31150__$2 = cljs.core.next(seq31150__$1);
var G__31153 = cljs.core.first(seq31150__$2);
var seq31150__$3 = cljs.core.next(seq31150__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31151,G__31152,G__31153,seq31150__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31171 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31172){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31172 = meta31172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31173,meta31172__$1){
var self__ = this;
var _31173__$1 = this;
return (new cljs.core.async.t_cljs$core$async31171(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31172__$1));
}));

(cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31173){
var self__ = this;
var _31173__$1 = this;
return self__.meta31172;
}));

(cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31172","meta31172",966406259,null)], null);
}));

(cljs.core.async.t_cljs$core$async31171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31171");

(cljs.core.async.t_cljs$core$async31171.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31171.
 */
cljs.core.async.__GT_t_cljs$core$async31171 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31171(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31172){
return (new cljs.core.async.t_cljs$core$async31171(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31172));
});

}

return (new cljs.core.async.t_cljs$core$async31171(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29764__auto___33000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_31302){
var state_val_31303 = (state_31302[(1)]);
if((state_val_31303 === (7))){
var inst_31262 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
if(cljs.core.truth_(inst_31262)){
var statearr_31353_33001 = state_31302__$1;
(statearr_31353_33001[(1)] = (8));

} else {
var statearr_31354_33002 = state_31302__$1;
(statearr_31354_33002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (20))){
var inst_31255 = (state_31302[(7)]);
var state_31302__$1 = state_31302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31302__$1,(23),out,inst_31255);
} else {
if((state_val_31303 === (1))){
var inst_31237 = calc_state();
var inst_31238 = cljs.core.__destructure_map(inst_31237);
var inst_31239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31238,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31238,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31238,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31242 = inst_31237;
var state_31302__$1 = (function (){var statearr_31359 = state_31302;
(statearr_31359[(8)] = inst_31241);

(statearr_31359[(9)] = inst_31240);

(statearr_31359[(10)] = inst_31239);

(statearr_31359[(11)] = inst_31242);

return statearr_31359;
})();
var statearr_31360_33005 = state_31302__$1;
(statearr_31360_33005[(2)] = null);

(statearr_31360_33005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (24))){
var inst_31245 = (state_31302[(12)]);
var inst_31242 = inst_31245;
var state_31302__$1 = (function (){var statearr_31361 = state_31302;
(statearr_31361[(11)] = inst_31242);

return statearr_31361;
})();
var statearr_31362_33007 = state_31302__$1;
(statearr_31362_33007[(2)] = null);

(statearr_31362_33007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (4))){
var inst_31255 = (state_31302[(7)]);
var inst_31257 = (state_31302[(13)]);
var inst_31254 = (state_31302[(2)]);
var inst_31255__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31254,(0),null);
var inst_31256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31254,(1),null);
var inst_31257__$1 = (inst_31255__$1 == null);
var state_31302__$1 = (function (){var statearr_31363 = state_31302;
(statearr_31363[(7)] = inst_31255__$1);

(statearr_31363[(14)] = inst_31256);

(statearr_31363[(13)] = inst_31257__$1);

return statearr_31363;
})();
if(cljs.core.truth_(inst_31257__$1)){
var statearr_31364_33009 = state_31302__$1;
(statearr_31364_33009[(1)] = (5));

} else {
var statearr_31365_33010 = state_31302__$1;
(statearr_31365_33010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (15))){
var inst_31246 = (state_31302[(15)]);
var inst_31276 = (state_31302[(16)]);
var inst_31276__$1 = cljs.core.empty_QMARK_(inst_31246);
var state_31302__$1 = (function (){var statearr_31366 = state_31302;
(statearr_31366[(16)] = inst_31276__$1);

return statearr_31366;
})();
if(inst_31276__$1){
var statearr_31367_33011 = state_31302__$1;
(statearr_31367_33011[(1)] = (17));

} else {
var statearr_31368_33012 = state_31302__$1;
(statearr_31368_33012[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (21))){
var inst_31245 = (state_31302[(12)]);
var inst_31242 = inst_31245;
var state_31302__$1 = (function (){var statearr_31369 = state_31302;
(statearr_31369[(11)] = inst_31242);

return statearr_31369;
})();
var statearr_31370_33013 = state_31302__$1;
(statearr_31370_33013[(2)] = null);

(statearr_31370_33013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (13))){
var inst_31269 = (state_31302[(2)]);
var inst_31270 = calc_state();
var inst_31242 = inst_31270;
var state_31302__$1 = (function (){var statearr_31371 = state_31302;
(statearr_31371[(17)] = inst_31269);

(statearr_31371[(11)] = inst_31242);

return statearr_31371;
})();
var statearr_31372_33014 = state_31302__$1;
(statearr_31372_33014[(2)] = null);

(statearr_31372_33014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (22))){
var inst_31296 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
var statearr_31373_33015 = state_31302__$1;
(statearr_31373_33015[(2)] = inst_31296);

(statearr_31373_33015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (6))){
var inst_31256 = (state_31302[(14)]);
var inst_31260 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31256,change);
var state_31302__$1 = state_31302;
var statearr_31374_33016 = state_31302__$1;
(statearr_31374_33016[(2)] = inst_31260);

(statearr_31374_33016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (25))){
var state_31302__$1 = state_31302;
var statearr_31376_33017 = state_31302__$1;
(statearr_31376_33017[(2)] = null);

(statearr_31376_33017[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (17))){
var inst_31247 = (state_31302[(18)]);
var inst_31256 = (state_31302[(14)]);
var inst_31278 = (inst_31247.cljs$core$IFn$_invoke$arity$1 ? inst_31247.cljs$core$IFn$_invoke$arity$1(inst_31256) : inst_31247.call(null,inst_31256));
var inst_31279 = cljs.core.not(inst_31278);
var state_31302__$1 = state_31302;
var statearr_31382_33018 = state_31302__$1;
(statearr_31382_33018[(2)] = inst_31279);

(statearr_31382_33018[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (3))){
var inst_31300 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31302__$1,inst_31300);
} else {
if((state_val_31303 === (12))){
var state_31302__$1 = state_31302;
var statearr_31385_33020 = state_31302__$1;
(statearr_31385_33020[(2)] = null);

(statearr_31385_33020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (2))){
var inst_31245 = (state_31302[(12)]);
var inst_31242 = (state_31302[(11)]);
var inst_31245__$1 = cljs.core.__destructure_map(inst_31242);
var inst_31246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31245__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31245__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31245__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31302__$1 = (function (){var statearr_31394 = state_31302;
(statearr_31394[(15)] = inst_31246);

(statearr_31394[(18)] = inst_31247);

(statearr_31394[(12)] = inst_31245__$1);

return statearr_31394;
})();
return cljs.core.async.ioc_alts_BANG_(state_31302__$1,(4),inst_31248);
} else {
if((state_val_31303 === (23))){
var inst_31287 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
if(cljs.core.truth_(inst_31287)){
var statearr_31402_33022 = state_31302__$1;
(statearr_31402_33022[(1)] = (24));

} else {
var statearr_31403_33023 = state_31302__$1;
(statearr_31403_33023[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (19))){
var inst_31282 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
var statearr_31404_33024 = state_31302__$1;
(statearr_31404_33024[(2)] = inst_31282);

(statearr_31404_33024[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (11))){
var inst_31256 = (state_31302[(14)]);
var inst_31266 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31256);
var state_31302__$1 = state_31302;
var statearr_31405_33025 = state_31302__$1;
(statearr_31405_33025[(2)] = inst_31266);

(statearr_31405_33025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (9))){
var inst_31246 = (state_31302[(15)]);
var inst_31256 = (state_31302[(14)]);
var inst_31273 = (state_31302[(19)]);
var inst_31273__$1 = (inst_31246.cljs$core$IFn$_invoke$arity$1 ? inst_31246.cljs$core$IFn$_invoke$arity$1(inst_31256) : inst_31246.call(null,inst_31256));
var state_31302__$1 = (function (){var statearr_31406 = state_31302;
(statearr_31406[(19)] = inst_31273__$1);

return statearr_31406;
})();
if(cljs.core.truth_(inst_31273__$1)){
var statearr_31410_33027 = state_31302__$1;
(statearr_31410_33027[(1)] = (14));

} else {
var statearr_31411_33028 = state_31302__$1;
(statearr_31411_33028[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (5))){
var inst_31257 = (state_31302[(13)]);
var state_31302__$1 = state_31302;
var statearr_31412_33029 = state_31302__$1;
(statearr_31412_33029[(2)] = inst_31257);

(statearr_31412_33029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (14))){
var inst_31273 = (state_31302[(19)]);
var state_31302__$1 = state_31302;
var statearr_31413_33030 = state_31302__$1;
(statearr_31413_33030[(2)] = inst_31273);

(statearr_31413_33030[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (26))){
var inst_31292 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
var statearr_31415_33031 = state_31302__$1;
(statearr_31415_33031[(2)] = inst_31292);

(statearr_31415_33031[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (16))){
var inst_31284 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
if(cljs.core.truth_(inst_31284)){
var statearr_31422_33032 = state_31302__$1;
(statearr_31422_33032[(1)] = (20));

} else {
var statearr_31423_33033 = state_31302__$1;
(statearr_31423_33033[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (10))){
var inst_31298 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
var statearr_31424_33034 = state_31302__$1;
(statearr_31424_33034[(2)] = inst_31298);

(statearr_31424_33034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (18))){
var inst_31276 = (state_31302[(16)]);
var state_31302__$1 = state_31302;
var statearr_31425_33035 = state_31302__$1;
(statearr_31425_33035[(2)] = inst_31276);

(statearr_31425_33035[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (8))){
var inst_31255 = (state_31302[(7)]);
var inst_31264 = (inst_31255 == null);
var state_31302__$1 = state_31302;
if(cljs.core.truth_(inst_31264)){
var statearr_31426_33036 = state_31302__$1;
(statearr_31426_33036[(1)] = (11));

} else {
var statearr_31427_33037 = state_31302__$1;
(statearr_31427_33037[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29468__auto__ = null;
var cljs$core$async$mix_$_state_machine__29468__auto____0 = (function (){
var statearr_31428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31428[(0)] = cljs$core$async$mix_$_state_machine__29468__auto__);

(statearr_31428[(1)] = (1));

return statearr_31428;
});
var cljs$core$async$mix_$_state_machine__29468__auto____1 = (function (state_31302){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_31302);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e31429){var ex__29471__auto__ = e31429;
var statearr_31430_33040 = state_31302;
(statearr_31430_33040[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_31302[(4)]))){
var statearr_31431_33044 = state_31302;
(statearr_31431_33044[(1)] = cljs.core.first((state_31302[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33045 = state_31302;
state_31302 = G__33045;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29468__auto__ = function(state_31302){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29468__auto____1.call(this,state_31302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29468__auto____0;
cljs$core$async$mix_$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29468__auto____1;
return cljs$core$async$mix_$_state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_31432 = f__29765__auto__();
(statearr_31432[(6)] = c__29764__auto___33000);

return statearr_31432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33048 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33048(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33049 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33049(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33050 = (function() {
var G__33051 = null;
var G__33051__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33051__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33051 = function(p,v){
switch(arguments.length){
case 1:
return G__33051__1.call(this,p);
case 2:
return G__33051__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33051.cljs$core$IFn$_invoke$arity$1 = G__33051__1;
G__33051.cljs$core$IFn$_invoke$arity$2 = G__33051__2;
return G__33051;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31449 = arguments.length;
switch (G__31449) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33050(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33050(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31468 = arguments.length;
switch (G__31468) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31466_SHARP_){
if(cljs.core.truth_((p1__31466_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31466_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31466_SHARP_.call(null,topic)))){
return p1__31466_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31466_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31557 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31558){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31558 = meta31558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31559,meta31558__$1){
var self__ = this;
var _31559__$1 = this;
return (new cljs.core.async.t_cljs$core$async31557(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31558__$1));
}));

(cljs.core.async.t_cljs$core$async31557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31559){
var self__ = this;
var _31559__$1 = this;
return self__.meta31558;
}));

(cljs.core.async.t_cljs$core$async31557.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31557.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31557.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31557.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31557.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31557.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31557.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31558","meta31558",-84006344,null)], null);
}));

(cljs.core.async.t_cljs$core$async31557.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31557");

(cljs.core.async.t_cljs$core$async31557.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31557");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31557.
 */
cljs.core.async.__GT_t_cljs$core$async31557 = (function cljs$core$async$__GT_t_cljs$core$async31557(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31558){
return (new cljs.core.async.t_cljs$core$async31557(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31558));
});

}

return (new cljs.core.async.t_cljs$core$async31557(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29764__auto___33056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_31649){
var state_val_31650 = (state_31649[(1)]);
if((state_val_31650 === (7))){
var inst_31644 = (state_31649[(2)]);
var state_31649__$1 = state_31649;
var statearr_31651_33057 = state_31649__$1;
(statearr_31651_33057[(2)] = inst_31644);

(statearr_31651_33057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (20))){
var state_31649__$1 = state_31649;
var statearr_31652_33058 = state_31649__$1;
(statearr_31652_33058[(2)] = null);

(statearr_31652_33058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (1))){
var state_31649__$1 = state_31649;
var statearr_31653_33059 = state_31649__$1;
(statearr_31653_33059[(2)] = null);

(statearr_31653_33059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (24))){
var inst_31627 = (state_31649[(7)]);
var inst_31636 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31627);
var state_31649__$1 = state_31649;
var statearr_31654_33060 = state_31649__$1;
(statearr_31654_33060[(2)] = inst_31636);

(statearr_31654_33060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (4))){
var inst_31566 = (state_31649[(8)]);
var inst_31566__$1 = (state_31649[(2)]);
var inst_31567 = (inst_31566__$1 == null);
var state_31649__$1 = (function (){var statearr_31656 = state_31649;
(statearr_31656[(8)] = inst_31566__$1);

return statearr_31656;
})();
if(cljs.core.truth_(inst_31567)){
var statearr_31657_33061 = state_31649__$1;
(statearr_31657_33061[(1)] = (5));

} else {
var statearr_31658_33062 = state_31649__$1;
(statearr_31658_33062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (15))){
var inst_31621 = (state_31649[(2)]);
var state_31649__$1 = state_31649;
var statearr_31659_33063 = state_31649__$1;
(statearr_31659_33063[(2)] = inst_31621);

(statearr_31659_33063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (21))){
var inst_31641 = (state_31649[(2)]);
var state_31649__$1 = (function (){var statearr_31660 = state_31649;
(statearr_31660[(9)] = inst_31641);

return statearr_31660;
})();
var statearr_31661_33064 = state_31649__$1;
(statearr_31661_33064[(2)] = null);

(statearr_31661_33064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (13))){
var inst_31599 = (state_31649[(10)]);
var inst_31601 = cljs.core.chunked_seq_QMARK_(inst_31599);
var state_31649__$1 = state_31649;
if(inst_31601){
var statearr_31662_33065 = state_31649__$1;
(statearr_31662_33065[(1)] = (16));

} else {
var statearr_31663_33066 = state_31649__$1;
(statearr_31663_33066[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (22))){
var inst_31633 = (state_31649[(2)]);
var state_31649__$1 = state_31649;
if(cljs.core.truth_(inst_31633)){
var statearr_31664_33067 = state_31649__$1;
(statearr_31664_33067[(1)] = (23));

} else {
var statearr_31665_33068 = state_31649__$1;
(statearr_31665_33068[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (6))){
var inst_31566 = (state_31649[(8)]);
var inst_31627 = (state_31649[(7)]);
var inst_31629 = (state_31649[(11)]);
var inst_31627__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31566) : topic_fn.call(null,inst_31566));
var inst_31628 = cljs.core.deref(mults);
var inst_31629__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31628,inst_31627__$1);
var state_31649__$1 = (function (){var statearr_31677 = state_31649;
(statearr_31677[(7)] = inst_31627__$1);

(statearr_31677[(11)] = inst_31629__$1);

return statearr_31677;
})();
if(cljs.core.truth_(inst_31629__$1)){
var statearr_31678_33069 = state_31649__$1;
(statearr_31678_33069[(1)] = (19));

} else {
var statearr_31679_33070 = state_31649__$1;
(statearr_31679_33070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (25))){
var inst_31638 = (state_31649[(2)]);
var state_31649__$1 = state_31649;
var statearr_31681_33071 = state_31649__$1;
(statearr_31681_33071[(2)] = inst_31638);

(statearr_31681_33071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (17))){
var inst_31599 = (state_31649[(10)]);
var inst_31612 = cljs.core.first(inst_31599);
var inst_31613 = cljs.core.async.muxch_STAR_(inst_31612);
var inst_31614 = cljs.core.async.close_BANG_(inst_31613);
var inst_31615 = cljs.core.next(inst_31599);
var inst_31580 = inst_31615;
var inst_31581 = null;
var inst_31582 = (0);
var inst_31583 = (0);
var state_31649__$1 = (function (){var statearr_31683 = state_31649;
(statearr_31683[(12)] = inst_31582);

(statearr_31683[(13)] = inst_31614);

(statearr_31683[(14)] = inst_31580);

(statearr_31683[(15)] = inst_31581);

(statearr_31683[(16)] = inst_31583);

return statearr_31683;
})();
var statearr_31684_33072 = state_31649__$1;
(statearr_31684_33072[(2)] = null);

(statearr_31684_33072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (3))){
var inst_31646 = (state_31649[(2)]);
var state_31649__$1 = state_31649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31649__$1,inst_31646);
} else {
if((state_val_31650 === (12))){
var inst_31623 = (state_31649[(2)]);
var state_31649__$1 = state_31649;
var statearr_31686_33073 = state_31649__$1;
(statearr_31686_33073[(2)] = inst_31623);

(statearr_31686_33073[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (2))){
var state_31649__$1 = state_31649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31649__$1,(4),ch);
} else {
if((state_val_31650 === (23))){
var state_31649__$1 = state_31649;
var statearr_31687_33074 = state_31649__$1;
(statearr_31687_33074[(2)] = null);

(statearr_31687_33074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (19))){
var inst_31566 = (state_31649[(8)]);
var inst_31629 = (state_31649[(11)]);
var inst_31631 = cljs.core.async.muxch_STAR_(inst_31629);
var state_31649__$1 = state_31649;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31649__$1,(22),inst_31631,inst_31566);
} else {
if((state_val_31650 === (11))){
var inst_31599 = (state_31649[(10)]);
var inst_31580 = (state_31649[(14)]);
var inst_31599__$1 = cljs.core.seq(inst_31580);
var state_31649__$1 = (function (){var statearr_31689 = state_31649;
(statearr_31689[(10)] = inst_31599__$1);

return statearr_31689;
})();
if(inst_31599__$1){
var statearr_31690_33075 = state_31649__$1;
(statearr_31690_33075[(1)] = (13));

} else {
var statearr_31691_33076 = state_31649__$1;
(statearr_31691_33076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (9))){
var inst_31625 = (state_31649[(2)]);
var state_31649__$1 = state_31649;
var statearr_31696_33077 = state_31649__$1;
(statearr_31696_33077[(2)] = inst_31625);

(statearr_31696_33077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (5))){
var inst_31577 = cljs.core.deref(mults);
var inst_31578 = cljs.core.vals(inst_31577);
var inst_31579 = cljs.core.seq(inst_31578);
var inst_31580 = inst_31579;
var inst_31581 = null;
var inst_31582 = (0);
var inst_31583 = (0);
var state_31649__$1 = (function (){var statearr_31697 = state_31649;
(statearr_31697[(12)] = inst_31582);

(statearr_31697[(14)] = inst_31580);

(statearr_31697[(15)] = inst_31581);

(statearr_31697[(16)] = inst_31583);

return statearr_31697;
})();
var statearr_31698_33078 = state_31649__$1;
(statearr_31698_33078[(2)] = null);

(statearr_31698_33078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (14))){
var state_31649__$1 = state_31649;
var statearr_31702_33079 = state_31649__$1;
(statearr_31702_33079[(2)] = null);

(statearr_31702_33079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (16))){
var inst_31599 = (state_31649[(10)]);
var inst_31607 = cljs.core.chunk_first(inst_31599);
var inst_31608 = cljs.core.chunk_rest(inst_31599);
var inst_31609 = cljs.core.count(inst_31607);
var inst_31580 = inst_31608;
var inst_31581 = inst_31607;
var inst_31582 = inst_31609;
var inst_31583 = (0);
var state_31649__$1 = (function (){var statearr_31703 = state_31649;
(statearr_31703[(12)] = inst_31582);

(statearr_31703[(14)] = inst_31580);

(statearr_31703[(15)] = inst_31581);

(statearr_31703[(16)] = inst_31583);

return statearr_31703;
})();
var statearr_31704_33080 = state_31649__$1;
(statearr_31704_33080[(2)] = null);

(statearr_31704_33080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (10))){
var inst_31582 = (state_31649[(12)]);
var inst_31580 = (state_31649[(14)]);
var inst_31581 = (state_31649[(15)]);
var inst_31583 = (state_31649[(16)]);
var inst_31588 = cljs.core._nth(inst_31581,inst_31583);
var inst_31589 = cljs.core.async.muxch_STAR_(inst_31588);
var inst_31590 = cljs.core.async.close_BANG_(inst_31589);
var inst_31591 = (inst_31583 + (1));
var tmp31699 = inst_31582;
var tmp31700 = inst_31580;
var tmp31701 = inst_31581;
var inst_31580__$1 = tmp31700;
var inst_31581__$1 = tmp31701;
var inst_31582__$1 = tmp31699;
var inst_31583__$1 = inst_31591;
var state_31649__$1 = (function (){var statearr_31705 = state_31649;
(statearr_31705[(12)] = inst_31582__$1);

(statearr_31705[(17)] = inst_31590);

(statearr_31705[(14)] = inst_31580__$1);

(statearr_31705[(15)] = inst_31581__$1);

(statearr_31705[(16)] = inst_31583__$1);

return statearr_31705;
})();
var statearr_31706_33081 = state_31649__$1;
(statearr_31706_33081[(2)] = null);

(statearr_31706_33081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (18))){
var inst_31618 = (state_31649[(2)]);
var state_31649__$1 = state_31649;
var statearr_31707_33082 = state_31649__$1;
(statearr_31707_33082[(2)] = inst_31618);

(statearr_31707_33082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31650 === (8))){
var inst_31582 = (state_31649[(12)]);
var inst_31583 = (state_31649[(16)]);
var inst_31585 = (inst_31583 < inst_31582);
var inst_31586 = inst_31585;
var state_31649__$1 = state_31649;
if(cljs.core.truth_(inst_31586)){
var statearr_31708_33083 = state_31649__$1;
(statearr_31708_33083[(1)] = (10));

} else {
var statearr_31709_33084 = state_31649__$1;
(statearr_31709_33084[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29468__auto__ = null;
var cljs$core$async$state_machine__29468__auto____0 = (function (){
var statearr_31710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31710[(0)] = cljs$core$async$state_machine__29468__auto__);

(statearr_31710[(1)] = (1));

return statearr_31710;
});
var cljs$core$async$state_machine__29468__auto____1 = (function (state_31649){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_31649);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e31711){var ex__29471__auto__ = e31711;
var statearr_31712_33087 = state_31649;
(statearr_31712_33087[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_31649[(4)]))){
var statearr_31713_33088 = state_31649;
(statearr_31713_33088[(1)] = cljs.core.first((state_31649[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33089 = state_31649;
state_31649 = G__33089;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$state_machine__29468__auto__ = function(state_31649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29468__auto____1.call(this,state_31649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29468__auto____0;
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29468__auto____1;
return cljs$core$async$state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_31714 = f__29765__auto__();
(statearr_31714[(6)] = c__29764__auto___33056);

return statearr_31714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31716 = arguments.length;
switch (G__31716) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31720 = arguments.length;
switch (G__31720) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31725 = arguments.length;
switch (G__31725) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29764__auto___33093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_31779){
var state_val_31783 = (state_31779[(1)]);
if((state_val_31783 === (7))){
var state_31779__$1 = state_31779;
var statearr_31786_33094 = state_31779__$1;
(statearr_31786_33094[(2)] = null);

(statearr_31786_33094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (1))){
var state_31779__$1 = state_31779;
var statearr_31790_33095 = state_31779__$1;
(statearr_31790_33095[(2)] = null);

(statearr_31790_33095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (4))){
var inst_31737 = (state_31779[(7)]);
var inst_31736 = (state_31779[(8)]);
var inst_31739 = (inst_31737 < inst_31736);
var state_31779__$1 = state_31779;
if(cljs.core.truth_(inst_31739)){
var statearr_31791_33096 = state_31779__$1;
(statearr_31791_33096[(1)] = (6));

} else {
var statearr_31792_33097 = state_31779__$1;
(statearr_31792_33097[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (15))){
var inst_31765 = (state_31779[(9)]);
var inst_31770 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31765);
var state_31779__$1 = state_31779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31779__$1,(17),out,inst_31770);
} else {
if((state_val_31783 === (13))){
var inst_31765 = (state_31779[(9)]);
var inst_31765__$1 = (state_31779[(2)]);
var inst_31766 = cljs.core.some(cljs.core.nil_QMARK_,inst_31765__$1);
var state_31779__$1 = (function (){var statearr_31796 = state_31779;
(statearr_31796[(9)] = inst_31765__$1);

return statearr_31796;
})();
if(cljs.core.truth_(inst_31766)){
var statearr_31797_33098 = state_31779__$1;
(statearr_31797_33098[(1)] = (14));

} else {
var statearr_31798_33099 = state_31779__$1;
(statearr_31798_33099[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (6))){
var state_31779__$1 = state_31779;
var statearr_31799_33100 = state_31779__$1;
(statearr_31799_33100[(2)] = null);

(statearr_31799_33100[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (17))){
var inst_31772 = (state_31779[(2)]);
var state_31779__$1 = (function (){var statearr_31803 = state_31779;
(statearr_31803[(10)] = inst_31772);

return statearr_31803;
})();
var statearr_31804_33101 = state_31779__$1;
(statearr_31804_33101[(2)] = null);

(statearr_31804_33101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (3))){
var inst_31777 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31779__$1,inst_31777);
} else {
if((state_val_31783 === (12))){
var _ = (function (){var statearr_31809 = state_31779;
(statearr_31809[(4)] = cljs.core.rest((state_31779[(4)])));

return statearr_31809;
})();
var state_31779__$1 = state_31779;
var ex31802 = (state_31779__$1[(2)]);
var statearr_31810_33102 = state_31779__$1;
(statearr_31810_33102[(5)] = ex31802);


if((ex31802 instanceof Object)){
var statearr_31811_33103 = state_31779__$1;
(statearr_31811_33103[(1)] = (11));

(statearr_31811_33103[(5)] = null);

} else {
throw ex31802;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (2))){
var inst_31735 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31736 = cnt;
var inst_31737 = (0);
var state_31779__$1 = (function (){var statearr_31813 = state_31779;
(statearr_31813[(11)] = inst_31735);

(statearr_31813[(7)] = inst_31737);

(statearr_31813[(8)] = inst_31736);

return statearr_31813;
})();
var statearr_31814_33104 = state_31779__$1;
(statearr_31814_33104[(2)] = null);

(statearr_31814_33104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (11))){
var inst_31744 = (state_31779[(2)]);
var inst_31745 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31779__$1 = (function (){var statearr_31829 = state_31779;
(statearr_31829[(12)] = inst_31744);

return statearr_31829;
})();
var statearr_31833_33105 = state_31779__$1;
(statearr_31833_33105[(2)] = inst_31745);

(statearr_31833_33105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (9))){
var inst_31737 = (state_31779[(7)]);
var _ = (function (){var statearr_31844 = state_31779;
(statearr_31844[(4)] = cljs.core.cons((12),(state_31779[(4)])));

return statearr_31844;
})();
var inst_31751 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31737) : chs__$1.call(null,inst_31737));
var inst_31752 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31737) : done.call(null,inst_31737));
var inst_31753 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31751,inst_31752);
var ___$1 = (function (){var statearr_31849 = state_31779;
(statearr_31849[(4)] = cljs.core.rest((state_31779[(4)])));

return statearr_31849;
})();
var state_31779__$1 = state_31779;
var statearr_31850_33106 = state_31779__$1;
(statearr_31850_33106[(2)] = inst_31753);

(statearr_31850_33106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (5))){
var inst_31763 = (state_31779[(2)]);
var state_31779__$1 = (function (){var statearr_31854 = state_31779;
(statearr_31854[(13)] = inst_31763);

return statearr_31854;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31779__$1,(13),dchan);
} else {
if((state_val_31783 === (14))){
var inst_31768 = cljs.core.async.close_BANG_(out);
var state_31779__$1 = state_31779;
var statearr_31855_33107 = state_31779__$1;
(statearr_31855_33107[(2)] = inst_31768);

(statearr_31855_33107[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (16))){
var inst_31775 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
var statearr_31858_33108 = state_31779__$1;
(statearr_31858_33108[(2)] = inst_31775);

(statearr_31858_33108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (10))){
var inst_31737 = (state_31779[(7)]);
var inst_31756 = (state_31779[(2)]);
var inst_31757 = (inst_31737 + (1));
var inst_31737__$1 = inst_31757;
var state_31779__$1 = (function (){var statearr_31861 = state_31779;
(statearr_31861[(7)] = inst_31737__$1);

(statearr_31861[(14)] = inst_31756);

return statearr_31861;
})();
var statearr_31871_33109 = state_31779__$1;
(statearr_31871_33109[(2)] = null);

(statearr_31871_33109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (8))){
var inst_31761 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
var statearr_31873_33110 = state_31779__$1;
(statearr_31873_33110[(2)] = inst_31761);

(statearr_31873_33110[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29468__auto__ = null;
var cljs$core$async$state_machine__29468__auto____0 = (function (){
var statearr_31876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31876[(0)] = cljs$core$async$state_machine__29468__auto__);

(statearr_31876[(1)] = (1));

return statearr_31876;
});
var cljs$core$async$state_machine__29468__auto____1 = (function (state_31779){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_31779);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e31877){var ex__29471__auto__ = e31877;
var statearr_31878_33111 = state_31779;
(statearr_31878_33111[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_31779[(4)]))){
var statearr_31879_33112 = state_31779;
(statearr_31879_33112[(1)] = cljs.core.first((state_31779[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33113 = state_31779;
state_31779 = G__33113;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$state_machine__29468__auto__ = function(state_31779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29468__auto____1.call(this,state_31779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29468__auto____0;
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29468__auto____1;
return cljs$core$async$state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_31880 = f__29765__auto__();
(statearr_31880[(6)] = c__29764__auto___33093);

return statearr_31880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31883 = arguments.length;
switch (G__31883) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29764__auto___33115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_31935){
var state_val_31936 = (state_31935[(1)]);
if((state_val_31936 === (7))){
var inst_31908 = (state_31935[(7)]);
var inst_31909 = (state_31935[(8)]);
var inst_31908__$1 = (state_31935[(2)]);
var inst_31909__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31908__$1,(0),null);
var inst_31910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31908__$1,(1),null);
var inst_31911 = (inst_31909__$1 == null);
var state_31935__$1 = (function (){var statearr_31946 = state_31935;
(statearr_31946[(9)] = inst_31910);

(statearr_31946[(7)] = inst_31908__$1);

(statearr_31946[(8)] = inst_31909__$1);

return statearr_31946;
})();
if(cljs.core.truth_(inst_31911)){
var statearr_31947_33116 = state_31935__$1;
(statearr_31947_33116[(1)] = (8));

} else {
var statearr_31948_33117 = state_31935__$1;
(statearr_31948_33117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31936 === (1))){
var inst_31896 = cljs.core.vec(chs);
var inst_31897 = inst_31896;
var state_31935__$1 = (function (){var statearr_31949 = state_31935;
(statearr_31949[(10)] = inst_31897);

return statearr_31949;
})();
var statearr_31951_33118 = state_31935__$1;
(statearr_31951_33118[(2)] = null);

(statearr_31951_33118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31936 === (4))){
var inst_31897 = (state_31935[(10)]);
var state_31935__$1 = state_31935;
return cljs.core.async.ioc_alts_BANG_(state_31935__$1,(7),inst_31897);
} else {
if((state_val_31936 === (6))){
var inst_31931 = (state_31935[(2)]);
var state_31935__$1 = state_31935;
var statearr_31953_33119 = state_31935__$1;
(statearr_31953_33119[(2)] = inst_31931);

(statearr_31953_33119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31936 === (3))){
var inst_31933 = (state_31935[(2)]);
var state_31935__$1 = state_31935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31935__$1,inst_31933);
} else {
if((state_val_31936 === (2))){
var inst_31897 = (state_31935[(10)]);
var inst_31901 = cljs.core.count(inst_31897);
var inst_31902 = (inst_31901 > (0));
var state_31935__$1 = state_31935;
if(cljs.core.truth_(inst_31902)){
var statearr_31960_33120 = state_31935__$1;
(statearr_31960_33120[(1)] = (4));

} else {
var statearr_31961_33121 = state_31935__$1;
(statearr_31961_33121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31936 === (11))){
var inst_31897 = (state_31935[(10)]);
var inst_31924 = (state_31935[(2)]);
var tmp31955 = inst_31897;
var inst_31897__$1 = tmp31955;
var state_31935__$1 = (function (){var statearr_31962 = state_31935;
(statearr_31962[(10)] = inst_31897__$1);

(statearr_31962[(11)] = inst_31924);

return statearr_31962;
})();
var statearr_31963_33122 = state_31935__$1;
(statearr_31963_33122[(2)] = null);

(statearr_31963_33122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31936 === (9))){
var inst_31909 = (state_31935[(8)]);
var state_31935__$1 = state_31935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31935__$1,(11),out,inst_31909);
} else {
if((state_val_31936 === (5))){
var inst_31929 = cljs.core.async.close_BANG_(out);
var state_31935__$1 = state_31935;
var statearr_31975_33124 = state_31935__$1;
(statearr_31975_33124[(2)] = inst_31929);

(statearr_31975_33124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31936 === (10))){
var inst_31927 = (state_31935[(2)]);
var state_31935__$1 = state_31935;
var statearr_31976_33125 = state_31935__$1;
(statearr_31976_33125[(2)] = inst_31927);

(statearr_31976_33125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31936 === (8))){
var inst_31910 = (state_31935[(9)]);
var inst_31908 = (state_31935[(7)]);
var inst_31897 = (state_31935[(10)]);
var inst_31909 = (state_31935[(8)]);
var inst_31919 = (function (){var cs = inst_31897;
var vec__31904 = inst_31908;
var v = inst_31909;
var c = inst_31910;
return (function (p1__31881_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31881_SHARP_);
});
})();
var inst_31920 = cljs.core.filterv(inst_31919,inst_31897);
var inst_31897__$1 = inst_31920;
var state_31935__$1 = (function (){var statearr_31995 = state_31935;
(statearr_31995[(10)] = inst_31897__$1);

return statearr_31995;
})();
var statearr_32001_33127 = state_31935__$1;
(statearr_32001_33127[(2)] = null);

(statearr_32001_33127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29468__auto__ = null;
var cljs$core$async$state_machine__29468__auto____0 = (function (){
var statearr_32006 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32006[(0)] = cljs$core$async$state_machine__29468__auto__);

(statearr_32006[(1)] = (1));

return statearr_32006;
});
var cljs$core$async$state_machine__29468__auto____1 = (function (state_31935){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_31935);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e32007){var ex__29471__auto__ = e32007;
var statearr_32008_33128 = state_31935;
(statearr_32008_33128[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_31935[(4)]))){
var statearr_32009_33129 = state_31935;
(statearr_32009_33129[(1)] = cljs.core.first((state_31935[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33130 = state_31935;
state_31935 = G__33130;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$state_machine__29468__auto__ = function(state_31935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29468__auto____1.call(this,state_31935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29468__auto____0;
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29468__auto____1;
return cljs$core$async$state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_32015 = f__29765__auto__();
(statearr_32015[(6)] = c__29764__auto___33115);

return statearr_32015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32024 = arguments.length;
switch (G__32024) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29764__auto___33132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_32089){
var state_val_32104 = (state_32089[(1)]);
if((state_val_32104 === (7))){
var inst_32058 = (state_32089[(7)]);
var inst_32058__$1 = (state_32089[(2)]);
var inst_32059 = (inst_32058__$1 == null);
var inst_32060 = cljs.core.not(inst_32059);
var state_32089__$1 = (function (){var statearr_32113 = state_32089;
(statearr_32113[(7)] = inst_32058__$1);

return statearr_32113;
})();
if(inst_32060){
var statearr_32138_33133 = state_32089__$1;
(statearr_32138_33133[(1)] = (8));

} else {
var statearr_32152_33134 = state_32089__$1;
(statearr_32152_33134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (1))){
var inst_32038 = (0);
var state_32089__$1 = (function (){var statearr_32183 = state_32089;
(statearr_32183[(8)] = inst_32038);

return statearr_32183;
})();
var statearr_32188_33135 = state_32089__$1;
(statearr_32188_33135[(2)] = null);

(statearr_32188_33135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (4))){
var state_32089__$1 = state_32089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32089__$1,(7),ch);
} else {
if((state_val_32104 === (6))){
var inst_32076 = (state_32089[(2)]);
var state_32089__$1 = state_32089;
var statearr_32198_33136 = state_32089__$1;
(statearr_32198_33136[(2)] = inst_32076);

(statearr_32198_33136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (3))){
var inst_32078 = (state_32089[(2)]);
var inst_32083 = cljs.core.async.close_BANG_(out);
var state_32089__$1 = (function (){var statearr_32212 = state_32089;
(statearr_32212[(9)] = inst_32078);

return statearr_32212;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32089__$1,inst_32083);
} else {
if((state_val_32104 === (2))){
var inst_32038 = (state_32089[(8)]);
var inst_32053 = (inst_32038 < n);
var state_32089__$1 = state_32089;
if(cljs.core.truth_(inst_32053)){
var statearr_32217_33137 = state_32089__$1;
(statearr_32217_33137[(1)] = (4));

} else {
var statearr_32228_33138 = state_32089__$1;
(statearr_32228_33138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (11))){
var inst_32038 = (state_32089[(8)]);
var inst_32064 = (state_32089[(2)]);
var inst_32068 = (inst_32038 + (1));
var inst_32038__$1 = inst_32068;
var state_32089__$1 = (function (){var statearr_32233 = state_32089;
(statearr_32233[(10)] = inst_32064);

(statearr_32233[(8)] = inst_32038__$1);

return statearr_32233;
})();
var statearr_32235_33139 = state_32089__$1;
(statearr_32235_33139[(2)] = null);

(statearr_32235_33139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (9))){
var state_32089__$1 = state_32089;
var statearr_32238_33140 = state_32089__$1;
(statearr_32238_33140[(2)] = null);

(statearr_32238_33140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (5))){
var state_32089__$1 = state_32089;
var statearr_32242_33141 = state_32089__$1;
(statearr_32242_33141[(2)] = null);

(statearr_32242_33141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (10))){
var inst_32073 = (state_32089[(2)]);
var state_32089__$1 = state_32089;
var statearr_32243_33142 = state_32089__$1;
(statearr_32243_33142[(2)] = inst_32073);

(statearr_32243_33142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (8))){
var inst_32058 = (state_32089[(7)]);
var state_32089__$1 = state_32089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32089__$1,(11),out,inst_32058);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29468__auto__ = null;
var cljs$core$async$state_machine__29468__auto____0 = (function (){
var statearr_32272 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32272[(0)] = cljs$core$async$state_machine__29468__auto__);

(statearr_32272[(1)] = (1));

return statearr_32272;
});
var cljs$core$async$state_machine__29468__auto____1 = (function (state_32089){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_32089);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e32274){var ex__29471__auto__ = e32274;
var statearr_32275_33143 = state_32089;
(statearr_32275_33143[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_32089[(4)]))){
var statearr_32281_33145 = state_32089;
(statearr_32281_33145[(1)] = cljs.core.first((state_32089[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33146 = state_32089;
state_32089 = G__33146;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$state_machine__29468__auto__ = function(state_32089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29468__auto____1.call(this,state_32089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29468__auto____0;
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29468__auto____1;
return cljs$core$async$state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_32293 = f__29765__auto__();
(statearr_32293[(6)] = c__29764__auto___33132);

return statearr_32293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32327 = (function (f,ch,meta32328){
this.f = f;
this.ch = ch;
this.meta32328 = meta32328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32329,meta32328__$1){
var self__ = this;
var _32329__$1 = this;
return (new cljs.core.async.t_cljs$core$async32327(self__.f,self__.ch,meta32328__$1));
}));

(cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32329){
var self__ = this;
var _32329__$1 = this;
return self__.meta32328;
}));

(cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32344 = (function (f,ch,meta32328,_,fn1,meta32345){
this.f = f;
this.ch = ch;
this.meta32328 = meta32328;
this._ = _;
this.fn1 = fn1;
this.meta32345 = meta32345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32346,meta32345__$1){
var self__ = this;
var _32346__$1 = this;
return (new cljs.core.async.t_cljs$core$async32344(self__.f,self__.ch,self__.meta32328,self__._,self__.fn1,meta32345__$1));
}));

(cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32346){
var self__ = this;
var _32346__$1 = this;
return self__.meta32345;
}));

(cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32325_SHARP_){
var G__32352 = (((p1__32325_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32325_SHARP_) : self__.f.call(null,p1__32325_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32352) : f1.call(null,G__32352));
});
}));

(cljs.core.async.t_cljs$core$async32344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32328","meta32328",-53698599,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32327","cljs.core.async/t_cljs$core$async32327",-1113189055,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32345","meta32345",300726568,null)], null);
}));

(cljs.core.async.t_cljs$core$async32344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32344");

(cljs.core.async.t_cljs$core$async32344.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32344.
 */
cljs.core.async.__GT_t_cljs$core$async32344 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32344(f__$1,ch__$1,meta32328__$1,___$2,fn1__$1,meta32345){
return (new cljs.core.async.t_cljs$core$async32344(f__$1,ch__$1,meta32328__$1,___$2,fn1__$1,meta32345));
});

}

return (new cljs.core.async.t_cljs$core$async32344(self__.f,self__.ch,self__.meta32328,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32357 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32357) : self__.f.call(null,G__32357));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32328","meta32328",-53698599,null)], null);
}));

(cljs.core.async.t_cljs$core$async32327.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32327");

(cljs.core.async.t_cljs$core$async32327.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32327");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32327.
 */
cljs.core.async.__GT_t_cljs$core$async32327 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32327(f__$1,ch__$1,meta32328){
return (new cljs.core.async.t_cljs$core$async32327(f__$1,ch__$1,meta32328));
});

}

return (new cljs.core.async.t_cljs$core$async32327(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32362 = (function (f,ch,meta32363){
this.f = f;
this.ch = ch;
this.meta32363 = meta32363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32364,meta32363__$1){
var self__ = this;
var _32364__$1 = this;
return (new cljs.core.async.t_cljs$core$async32362(self__.f,self__.ch,meta32363__$1));
}));

(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32364){
var self__ = this;
var _32364__$1 = this;
return self__.meta32363;
}));

(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32362.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32363","meta32363",1833960029,null)], null);
}));

(cljs.core.async.t_cljs$core$async32362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32362");

(cljs.core.async.t_cljs$core$async32362.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32362.
 */
cljs.core.async.__GT_t_cljs$core$async32362 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32362(f__$1,ch__$1,meta32363){
return (new cljs.core.async.t_cljs$core$async32362(f__$1,ch__$1,meta32363));
});

}

return (new cljs.core.async.t_cljs$core$async32362(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32365 = (function (p,ch,meta32366){
this.p = p;
this.ch = ch;
this.meta32366 = meta32366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32367,meta32366__$1){
var self__ = this;
var _32367__$1 = this;
return (new cljs.core.async.t_cljs$core$async32365(self__.p,self__.ch,meta32366__$1));
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32367){
var self__ = this;
var _32367__$1 = this;
return self__.meta32366;
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32366","meta32366",1490354130,null)], null);
}));

(cljs.core.async.t_cljs$core$async32365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32365");

(cljs.core.async.t_cljs$core$async32365.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32365.
 */
cljs.core.async.__GT_t_cljs$core$async32365 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32365(p__$1,ch__$1,meta32366){
return (new cljs.core.async.t_cljs$core$async32365(p__$1,ch__$1,meta32366));
});

}

return (new cljs.core.async.t_cljs$core$async32365(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32370 = arguments.length;
switch (G__32370) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29764__auto___33154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_32392){
var state_val_32393 = (state_32392[(1)]);
if((state_val_32393 === (7))){
var inst_32388 = (state_32392[(2)]);
var state_32392__$1 = state_32392;
var statearr_32394_33155 = state_32392__$1;
(statearr_32394_33155[(2)] = inst_32388);

(statearr_32394_33155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32393 === (1))){
var state_32392__$1 = state_32392;
var statearr_32395_33156 = state_32392__$1;
(statearr_32395_33156[(2)] = null);

(statearr_32395_33156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32393 === (4))){
var inst_32374 = (state_32392[(7)]);
var inst_32374__$1 = (state_32392[(2)]);
var inst_32375 = (inst_32374__$1 == null);
var state_32392__$1 = (function (){var statearr_32397 = state_32392;
(statearr_32397[(7)] = inst_32374__$1);

return statearr_32397;
})();
if(cljs.core.truth_(inst_32375)){
var statearr_32398_33157 = state_32392__$1;
(statearr_32398_33157[(1)] = (5));

} else {
var statearr_32399_33158 = state_32392__$1;
(statearr_32399_33158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32393 === (6))){
var inst_32374 = (state_32392[(7)]);
var inst_32379 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32374) : p.call(null,inst_32374));
var state_32392__$1 = state_32392;
if(cljs.core.truth_(inst_32379)){
var statearr_32400_33159 = state_32392__$1;
(statearr_32400_33159[(1)] = (8));

} else {
var statearr_32401_33160 = state_32392__$1;
(statearr_32401_33160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32393 === (3))){
var inst_32390 = (state_32392[(2)]);
var state_32392__$1 = state_32392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32392__$1,inst_32390);
} else {
if((state_val_32393 === (2))){
var state_32392__$1 = state_32392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32392__$1,(4),ch);
} else {
if((state_val_32393 === (11))){
var inst_32382 = (state_32392[(2)]);
var state_32392__$1 = state_32392;
var statearr_32402_33161 = state_32392__$1;
(statearr_32402_33161[(2)] = inst_32382);

(statearr_32402_33161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32393 === (9))){
var state_32392__$1 = state_32392;
var statearr_32404_33162 = state_32392__$1;
(statearr_32404_33162[(2)] = null);

(statearr_32404_33162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32393 === (5))){
var inst_32377 = cljs.core.async.close_BANG_(out);
var state_32392__$1 = state_32392;
var statearr_32406_33163 = state_32392__$1;
(statearr_32406_33163[(2)] = inst_32377);

(statearr_32406_33163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32393 === (10))){
var inst_32385 = (state_32392[(2)]);
var state_32392__$1 = (function (){var statearr_32407 = state_32392;
(statearr_32407[(8)] = inst_32385);

return statearr_32407;
})();
var statearr_32408_33164 = state_32392__$1;
(statearr_32408_33164[(2)] = null);

(statearr_32408_33164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32393 === (8))){
var inst_32374 = (state_32392[(7)]);
var state_32392__$1 = state_32392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32392__$1,(11),out,inst_32374);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29468__auto__ = null;
var cljs$core$async$state_machine__29468__auto____0 = (function (){
var statearr_32409 = [null,null,null,null,null,null,null,null,null];
(statearr_32409[(0)] = cljs$core$async$state_machine__29468__auto__);

(statearr_32409[(1)] = (1));

return statearr_32409;
});
var cljs$core$async$state_machine__29468__auto____1 = (function (state_32392){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_32392);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e32410){var ex__29471__auto__ = e32410;
var statearr_32412_33167 = state_32392;
(statearr_32412_33167[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_32392[(4)]))){
var statearr_32413_33168 = state_32392;
(statearr_32413_33168[(1)] = cljs.core.first((state_32392[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33169 = state_32392;
state_32392 = G__33169;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$state_machine__29468__auto__ = function(state_32392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29468__auto____1.call(this,state_32392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29468__auto____0;
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29468__auto____1;
return cljs$core$async$state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_32414 = f__29765__auto__();
(statearr_32414[(6)] = c__29764__auto___33154);

return statearr_32414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32417 = arguments.length;
switch (G__32417) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_32480){
var state_val_32481 = (state_32480[(1)]);
if((state_val_32481 === (7))){
var inst_32476 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32482_33171 = state_32480__$1;
(statearr_32482_33171[(2)] = inst_32476);

(statearr_32482_33171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (20))){
var inst_32445 = (state_32480[(7)]);
var inst_32456 = (state_32480[(2)]);
var inst_32457 = cljs.core.next(inst_32445);
var inst_32431 = inst_32457;
var inst_32432 = null;
var inst_32433 = (0);
var inst_32434 = (0);
var state_32480__$1 = (function (){var statearr_32483 = state_32480;
(statearr_32483[(8)] = inst_32434);

(statearr_32483[(9)] = inst_32433);

(statearr_32483[(10)] = inst_32432);

(statearr_32483[(11)] = inst_32431);

(statearr_32483[(12)] = inst_32456);

return statearr_32483;
})();
var statearr_32484_33175 = state_32480__$1;
(statearr_32484_33175[(2)] = null);

(statearr_32484_33175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (1))){
var state_32480__$1 = state_32480;
var statearr_32485_33176 = state_32480__$1;
(statearr_32485_33176[(2)] = null);

(statearr_32485_33176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (4))){
var inst_32420 = (state_32480[(13)]);
var inst_32420__$1 = (state_32480[(2)]);
var inst_32421 = (inst_32420__$1 == null);
var state_32480__$1 = (function (){var statearr_32486 = state_32480;
(statearr_32486[(13)] = inst_32420__$1);

return statearr_32486;
})();
if(cljs.core.truth_(inst_32421)){
var statearr_32487_33177 = state_32480__$1;
(statearr_32487_33177[(1)] = (5));

} else {
var statearr_32488_33178 = state_32480__$1;
(statearr_32488_33178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (15))){
var state_32480__$1 = state_32480;
var statearr_32493_33179 = state_32480__$1;
(statearr_32493_33179[(2)] = null);

(statearr_32493_33179[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (21))){
var state_32480__$1 = state_32480;
var statearr_32494_33180 = state_32480__$1;
(statearr_32494_33180[(2)] = null);

(statearr_32494_33180[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (13))){
var inst_32434 = (state_32480[(8)]);
var inst_32433 = (state_32480[(9)]);
var inst_32432 = (state_32480[(10)]);
var inst_32431 = (state_32480[(11)]);
var inst_32441 = (state_32480[(2)]);
var inst_32442 = (inst_32434 + (1));
var tmp32490 = inst_32433;
var tmp32491 = inst_32432;
var tmp32492 = inst_32431;
var inst_32431__$1 = tmp32492;
var inst_32432__$1 = tmp32491;
var inst_32433__$1 = tmp32490;
var inst_32434__$1 = inst_32442;
var state_32480__$1 = (function (){var statearr_32495 = state_32480;
(statearr_32495[(14)] = inst_32441);

(statearr_32495[(8)] = inst_32434__$1);

(statearr_32495[(9)] = inst_32433__$1);

(statearr_32495[(10)] = inst_32432__$1);

(statearr_32495[(11)] = inst_32431__$1);

return statearr_32495;
})();
var statearr_32496_33181 = state_32480__$1;
(statearr_32496_33181[(2)] = null);

(statearr_32496_33181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (22))){
var state_32480__$1 = state_32480;
var statearr_32497_33183 = state_32480__$1;
(statearr_32497_33183[(2)] = null);

(statearr_32497_33183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (6))){
var inst_32420 = (state_32480[(13)]);
var inst_32429 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32420) : f.call(null,inst_32420));
var inst_32430 = cljs.core.seq(inst_32429);
var inst_32431 = inst_32430;
var inst_32432 = null;
var inst_32433 = (0);
var inst_32434 = (0);
var state_32480__$1 = (function (){var statearr_32498 = state_32480;
(statearr_32498[(8)] = inst_32434);

(statearr_32498[(9)] = inst_32433);

(statearr_32498[(10)] = inst_32432);

(statearr_32498[(11)] = inst_32431);

return statearr_32498;
})();
var statearr_32499_33185 = state_32480__$1;
(statearr_32499_33185[(2)] = null);

(statearr_32499_33185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (17))){
var inst_32445 = (state_32480[(7)]);
var inst_32449 = cljs.core.chunk_first(inst_32445);
var inst_32450 = cljs.core.chunk_rest(inst_32445);
var inst_32451 = cljs.core.count(inst_32449);
var inst_32431 = inst_32450;
var inst_32432 = inst_32449;
var inst_32433 = inst_32451;
var inst_32434 = (0);
var state_32480__$1 = (function (){var statearr_32500 = state_32480;
(statearr_32500[(8)] = inst_32434);

(statearr_32500[(9)] = inst_32433);

(statearr_32500[(10)] = inst_32432);

(statearr_32500[(11)] = inst_32431);

return statearr_32500;
})();
var statearr_32501_33187 = state_32480__$1;
(statearr_32501_33187[(2)] = null);

(statearr_32501_33187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (3))){
var inst_32478 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32480__$1,inst_32478);
} else {
if((state_val_32481 === (12))){
var inst_32465 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32502_33188 = state_32480__$1;
(statearr_32502_33188[(2)] = inst_32465);

(statearr_32502_33188[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (2))){
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32480__$1,(4),in$);
} else {
if((state_val_32481 === (23))){
var inst_32474 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32504_33192 = state_32480__$1;
(statearr_32504_33192[(2)] = inst_32474);

(statearr_32504_33192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (19))){
var inst_32460 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32505_33193 = state_32480__$1;
(statearr_32505_33193[(2)] = inst_32460);

(statearr_32505_33193[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (11))){
var inst_32431 = (state_32480[(11)]);
var inst_32445 = (state_32480[(7)]);
var inst_32445__$1 = cljs.core.seq(inst_32431);
var state_32480__$1 = (function (){var statearr_32506 = state_32480;
(statearr_32506[(7)] = inst_32445__$1);

return statearr_32506;
})();
if(inst_32445__$1){
var statearr_32507_33194 = state_32480__$1;
(statearr_32507_33194[(1)] = (14));

} else {
var statearr_32508_33195 = state_32480__$1;
(statearr_32508_33195[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (9))){
var inst_32467 = (state_32480[(2)]);
var inst_32469 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32480__$1 = (function (){var statearr_32509 = state_32480;
(statearr_32509[(15)] = inst_32467);

return statearr_32509;
})();
if(cljs.core.truth_(inst_32469)){
var statearr_32510_33196 = state_32480__$1;
(statearr_32510_33196[(1)] = (21));

} else {
var statearr_32511_33197 = state_32480__$1;
(statearr_32511_33197[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (5))){
var inst_32423 = cljs.core.async.close_BANG_(out);
var state_32480__$1 = state_32480;
var statearr_32512_33198 = state_32480__$1;
(statearr_32512_33198[(2)] = inst_32423);

(statearr_32512_33198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (14))){
var inst_32445 = (state_32480[(7)]);
var inst_32447 = cljs.core.chunked_seq_QMARK_(inst_32445);
var state_32480__$1 = state_32480;
if(inst_32447){
var statearr_32513_33199 = state_32480__$1;
(statearr_32513_33199[(1)] = (17));

} else {
var statearr_32514_33200 = state_32480__$1;
(statearr_32514_33200[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (16))){
var inst_32463 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32515_33201 = state_32480__$1;
(statearr_32515_33201[(2)] = inst_32463);

(statearr_32515_33201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (10))){
var inst_32434 = (state_32480[(8)]);
var inst_32432 = (state_32480[(10)]);
var inst_32439 = cljs.core._nth(inst_32432,inst_32434);
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32480__$1,(13),out,inst_32439);
} else {
if((state_val_32481 === (18))){
var inst_32445 = (state_32480[(7)]);
var inst_32454 = cljs.core.first(inst_32445);
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32480__$1,(20),out,inst_32454);
} else {
if((state_val_32481 === (8))){
var inst_32434 = (state_32480[(8)]);
var inst_32433 = (state_32480[(9)]);
var inst_32436 = (inst_32434 < inst_32433);
var inst_32437 = inst_32436;
var state_32480__$1 = state_32480;
if(cljs.core.truth_(inst_32437)){
var statearr_32516_33202 = state_32480__$1;
(statearr_32516_33202[(1)] = (10));

} else {
var statearr_32517_33204 = state_32480__$1;
(statearr_32517_33204[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29468__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29468__auto____0 = (function (){
var statearr_32518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32518[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29468__auto__);

(statearr_32518[(1)] = (1));

return statearr_32518;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29468__auto____1 = (function (state_32480){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_32480);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e32519){var ex__29471__auto__ = e32519;
var statearr_32520_33209 = state_32480;
(statearr_32520_33209[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_32480[(4)]))){
var statearr_32521_33210 = state_32480;
(statearr_32521_33210[(1)] = cljs.core.first((state_32480[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33213 = state_32480;
state_32480 = G__33213;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29468__auto__ = function(state_32480){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29468__auto____1.call(this,state_32480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29468__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29468__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_32523 = f__29765__auto__();
(statearr_32523[(6)] = c__29764__auto__);

return statearr_32523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));

return c__29764__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32525 = arguments.length;
switch (G__32525) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32527 = arguments.length;
switch (G__32527) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32530 = arguments.length;
switch (G__32530) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29764__auto___33226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_32556){
var state_val_32557 = (state_32556[(1)]);
if((state_val_32557 === (7))){
var inst_32551 = (state_32556[(2)]);
var state_32556__$1 = state_32556;
var statearr_32558_33227 = state_32556__$1;
(statearr_32558_33227[(2)] = inst_32551);

(statearr_32558_33227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32557 === (1))){
var inst_32533 = null;
var state_32556__$1 = (function (){var statearr_32560 = state_32556;
(statearr_32560[(7)] = inst_32533);

return statearr_32560;
})();
var statearr_32561_33229 = state_32556__$1;
(statearr_32561_33229[(2)] = null);

(statearr_32561_33229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32557 === (4))){
var inst_32536 = (state_32556[(8)]);
var inst_32536__$1 = (state_32556[(2)]);
var inst_32537 = (inst_32536__$1 == null);
var inst_32538 = cljs.core.not(inst_32537);
var state_32556__$1 = (function (){var statearr_32562 = state_32556;
(statearr_32562[(8)] = inst_32536__$1);

return statearr_32562;
})();
if(inst_32538){
var statearr_32563_33233 = state_32556__$1;
(statearr_32563_33233[(1)] = (5));

} else {
var statearr_32564_33234 = state_32556__$1;
(statearr_32564_33234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32557 === (6))){
var state_32556__$1 = state_32556;
var statearr_32565_33235 = state_32556__$1;
(statearr_32565_33235[(2)] = null);

(statearr_32565_33235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32557 === (3))){
var inst_32553 = (state_32556[(2)]);
var inst_32554 = cljs.core.async.close_BANG_(out);
var state_32556__$1 = (function (){var statearr_32566 = state_32556;
(statearr_32566[(9)] = inst_32553);

return statearr_32566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32556__$1,inst_32554);
} else {
if((state_val_32557 === (2))){
var state_32556__$1 = state_32556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32556__$1,(4),ch);
} else {
if((state_val_32557 === (11))){
var inst_32536 = (state_32556[(8)]);
var inst_32545 = (state_32556[(2)]);
var inst_32533 = inst_32536;
var state_32556__$1 = (function (){var statearr_32567 = state_32556;
(statearr_32567[(10)] = inst_32545);

(statearr_32567[(7)] = inst_32533);

return statearr_32567;
})();
var statearr_32568_33242 = state_32556__$1;
(statearr_32568_33242[(2)] = null);

(statearr_32568_33242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32557 === (9))){
var inst_32536 = (state_32556[(8)]);
var state_32556__$1 = state_32556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32556__$1,(11),out,inst_32536);
} else {
if((state_val_32557 === (5))){
var inst_32533 = (state_32556[(7)]);
var inst_32536 = (state_32556[(8)]);
var inst_32540 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32536,inst_32533);
var state_32556__$1 = state_32556;
if(inst_32540){
var statearr_32570_33244 = state_32556__$1;
(statearr_32570_33244[(1)] = (8));

} else {
var statearr_32571_33246 = state_32556__$1;
(statearr_32571_33246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32557 === (10))){
var inst_32548 = (state_32556[(2)]);
var state_32556__$1 = state_32556;
var statearr_32572_33247 = state_32556__$1;
(statearr_32572_33247[(2)] = inst_32548);

(statearr_32572_33247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32557 === (8))){
var inst_32533 = (state_32556[(7)]);
var tmp32569 = inst_32533;
var inst_32533__$1 = tmp32569;
var state_32556__$1 = (function (){var statearr_32573 = state_32556;
(statearr_32573[(7)] = inst_32533__$1);

return statearr_32573;
})();
var statearr_32574_33248 = state_32556__$1;
(statearr_32574_33248[(2)] = null);

(statearr_32574_33248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29468__auto__ = null;
var cljs$core$async$state_machine__29468__auto____0 = (function (){
var statearr_32575 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32575[(0)] = cljs$core$async$state_machine__29468__auto__);

(statearr_32575[(1)] = (1));

return statearr_32575;
});
var cljs$core$async$state_machine__29468__auto____1 = (function (state_32556){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_32556);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e32576){var ex__29471__auto__ = e32576;
var statearr_32577_33249 = state_32556;
(statearr_32577_33249[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_32556[(4)]))){
var statearr_32578_33250 = state_32556;
(statearr_32578_33250[(1)] = cljs.core.first((state_32556[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33254 = state_32556;
state_32556 = G__33254;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$state_machine__29468__auto__ = function(state_32556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29468__auto____1.call(this,state_32556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29468__auto____0;
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29468__auto____1;
return cljs$core$async$state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_32579 = f__29765__auto__();
(statearr_32579[(6)] = c__29764__auto___33226);

return statearr_32579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32582 = arguments.length;
switch (G__32582) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29764__auto___33267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_32621){
var state_val_32622 = (state_32621[(1)]);
if((state_val_32622 === (7))){
var inst_32617 = (state_32621[(2)]);
var state_32621__$1 = state_32621;
var statearr_32623_33268 = state_32621__$1;
(statearr_32623_33268[(2)] = inst_32617);

(statearr_32623_33268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (1))){
var inst_32583 = (new Array(n));
var inst_32585 = inst_32583;
var inst_32586 = (0);
var state_32621__$1 = (function (){var statearr_32625 = state_32621;
(statearr_32625[(7)] = inst_32586);

(statearr_32625[(8)] = inst_32585);

return statearr_32625;
})();
var statearr_32626_33273 = state_32621__$1;
(statearr_32626_33273[(2)] = null);

(statearr_32626_33273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (4))){
var inst_32589 = (state_32621[(9)]);
var inst_32589__$1 = (state_32621[(2)]);
var inst_32590 = (inst_32589__$1 == null);
var inst_32591 = cljs.core.not(inst_32590);
var state_32621__$1 = (function (){var statearr_32627 = state_32621;
(statearr_32627[(9)] = inst_32589__$1);

return statearr_32627;
})();
if(inst_32591){
var statearr_32628_33277 = state_32621__$1;
(statearr_32628_33277[(1)] = (5));

} else {
var statearr_32629_33278 = state_32621__$1;
(statearr_32629_33278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (15))){
var inst_32611 = (state_32621[(2)]);
var state_32621__$1 = state_32621;
var statearr_32630_33279 = state_32621__$1;
(statearr_32630_33279[(2)] = inst_32611);

(statearr_32630_33279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (13))){
var state_32621__$1 = state_32621;
var statearr_32631_33280 = state_32621__$1;
(statearr_32631_33280[(2)] = null);

(statearr_32631_33280[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (6))){
var inst_32586 = (state_32621[(7)]);
var inst_32607 = (inst_32586 > (0));
var state_32621__$1 = state_32621;
if(cljs.core.truth_(inst_32607)){
var statearr_32632_33282 = state_32621__$1;
(statearr_32632_33282[(1)] = (12));

} else {
var statearr_32633_33283 = state_32621__$1;
(statearr_32633_33283[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (3))){
var inst_32619 = (state_32621[(2)]);
var state_32621__$1 = state_32621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32621__$1,inst_32619);
} else {
if((state_val_32622 === (12))){
var inst_32585 = (state_32621[(8)]);
var inst_32609 = cljs.core.vec(inst_32585);
var state_32621__$1 = state_32621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32621__$1,(15),out,inst_32609);
} else {
if((state_val_32622 === (2))){
var state_32621__$1 = state_32621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32621__$1,(4),ch);
} else {
if((state_val_32622 === (11))){
var inst_32601 = (state_32621[(2)]);
var inst_32602 = (new Array(n));
var inst_32585 = inst_32602;
var inst_32586 = (0);
var state_32621__$1 = (function (){var statearr_32634 = state_32621;
(statearr_32634[(7)] = inst_32586);

(statearr_32634[(8)] = inst_32585);

(statearr_32634[(10)] = inst_32601);

return statearr_32634;
})();
var statearr_32635_33287 = state_32621__$1;
(statearr_32635_33287[(2)] = null);

(statearr_32635_33287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (9))){
var inst_32585 = (state_32621[(8)]);
var inst_32599 = cljs.core.vec(inst_32585);
var state_32621__$1 = state_32621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32621__$1,(11),out,inst_32599);
} else {
if((state_val_32622 === (5))){
var inst_32586 = (state_32621[(7)]);
var inst_32594 = (state_32621[(11)]);
var inst_32585 = (state_32621[(8)]);
var inst_32589 = (state_32621[(9)]);
var inst_32593 = (inst_32585[inst_32586] = inst_32589);
var inst_32594__$1 = (inst_32586 + (1));
var inst_32595 = (inst_32594__$1 < n);
var state_32621__$1 = (function (){var statearr_32636 = state_32621;
(statearr_32636[(11)] = inst_32594__$1);

(statearr_32636[(12)] = inst_32593);

return statearr_32636;
})();
if(cljs.core.truth_(inst_32595)){
var statearr_32638_33289 = state_32621__$1;
(statearr_32638_33289[(1)] = (8));

} else {
var statearr_32639_33290 = state_32621__$1;
(statearr_32639_33290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (14))){
var inst_32614 = (state_32621[(2)]);
var inst_32615 = cljs.core.async.close_BANG_(out);
var state_32621__$1 = (function (){var statearr_32641 = state_32621;
(statearr_32641[(13)] = inst_32614);

return statearr_32641;
})();
var statearr_32642_33291 = state_32621__$1;
(statearr_32642_33291[(2)] = inst_32615);

(statearr_32642_33291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (10))){
var inst_32605 = (state_32621[(2)]);
var state_32621__$1 = state_32621;
var statearr_32643_33292 = state_32621__$1;
(statearr_32643_33292[(2)] = inst_32605);

(statearr_32643_33292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (8))){
var inst_32594 = (state_32621[(11)]);
var inst_32585 = (state_32621[(8)]);
var tmp32640 = inst_32585;
var inst_32585__$1 = tmp32640;
var inst_32586 = inst_32594;
var state_32621__$1 = (function (){var statearr_32644 = state_32621;
(statearr_32644[(7)] = inst_32586);

(statearr_32644[(8)] = inst_32585__$1);

return statearr_32644;
})();
var statearr_32645_33293 = state_32621__$1;
(statearr_32645_33293[(2)] = null);

(statearr_32645_33293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29468__auto__ = null;
var cljs$core$async$state_machine__29468__auto____0 = (function (){
var statearr_32647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32647[(0)] = cljs$core$async$state_machine__29468__auto__);

(statearr_32647[(1)] = (1));

return statearr_32647;
});
var cljs$core$async$state_machine__29468__auto____1 = (function (state_32621){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_32621);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e32648){var ex__29471__auto__ = e32648;
var statearr_32649_33297 = state_32621;
(statearr_32649_33297[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_32621[(4)]))){
var statearr_32650_33298 = state_32621;
(statearr_32650_33298[(1)] = cljs.core.first((state_32621[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33299 = state_32621;
state_32621 = G__33299;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$state_machine__29468__auto__ = function(state_32621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29468__auto____1.call(this,state_32621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29468__auto____0;
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29468__auto____1;
return cljs$core$async$state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_32651 = f__29765__auto__();
(statearr_32651[(6)] = c__29764__auto___33267);

return statearr_32651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32654 = arguments.length;
switch (G__32654) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29764__auto___33306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29765__auto__ = (function (){var switch__29467__auto__ = (function (state_32700){
var state_val_32701 = (state_32700[(1)]);
if((state_val_32701 === (7))){
var inst_32696 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
var statearr_32703_33307 = state_32700__$1;
(statearr_32703_33307[(2)] = inst_32696);

(statearr_32703_33307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (1))){
var inst_32656 = [];
var inst_32657 = inst_32656;
var inst_32658 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32700__$1 = (function (){var statearr_32704 = state_32700;
(statearr_32704[(7)] = inst_32657);

(statearr_32704[(8)] = inst_32658);

return statearr_32704;
})();
var statearr_32705_33308 = state_32700__$1;
(statearr_32705_33308[(2)] = null);

(statearr_32705_33308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (4))){
var inst_32661 = (state_32700[(9)]);
var inst_32661__$1 = (state_32700[(2)]);
var inst_32662 = (inst_32661__$1 == null);
var inst_32663 = cljs.core.not(inst_32662);
var state_32700__$1 = (function (){var statearr_32706 = state_32700;
(statearr_32706[(9)] = inst_32661__$1);

return statearr_32706;
})();
if(inst_32663){
var statearr_32707_33309 = state_32700__$1;
(statearr_32707_33309[(1)] = (5));

} else {
var statearr_32708_33310 = state_32700__$1;
(statearr_32708_33310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (15))){
var inst_32657 = (state_32700[(7)]);
var inst_32688 = cljs.core.vec(inst_32657);
var state_32700__$1 = state_32700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32700__$1,(18),out,inst_32688);
} else {
if((state_val_32701 === (13))){
var inst_32683 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
var statearr_32709_33311 = state_32700__$1;
(statearr_32709_33311[(2)] = inst_32683);

(statearr_32709_33311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (6))){
var inst_32657 = (state_32700[(7)]);
var inst_32685 = inst_32657.length;
var inst_32686 = (inst_32685 > (0));
var state_32700__$1 = state_32700;
if(cljs.core.truth_(inst_32686)){
var statearr_32710_33312 = state_32700__$1;
(statearr_32710_33312[(1)] = (15));

} else {
var statearr_32711_33313 = state_32700__$1;
(statearr_32711_33313[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (17))){
var inst_32693 = (state_32700[(2)]);
var inst_32694 = cljs.core.async.close_BANG_(out);
var state_32700__$1 = (function (){var statearr_32712 = state_32700;
(statearr_32712[(10)] = inst_32693);

return statearr_32712;
})();
var statearr_32713_33314 = state_32700__$1;
(statearr_32713_33314[(2)] = inst_32694);

(statearr_32713_33314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (3))){
var inst_32698 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32700__$1,inst_32698);
} else {
if((state_val_32701 === (12))){
var inst_32657 = (state_32700[(7)]);
var inst_32676 = cljs.core.vec(inst_32657);
var state_32700__$1 = state_32700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32700__$1,(14),out,inst_32676);
} else {
if((state_val_32701 === (2))){
var state_32700__$1 = state_32700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32700__$1,(4),ch);
} else {
if((state_val_32701 === (11))){
var inst_32657 = (state_32700[(7)]);
var inst_32661 = (state_32700[(9)]);
var inst_32665 = (state_32700[(11)]);
var inst_32673 = inst_32657.push(inst_32661);
var tmp32715 = inst_32657;
var inst_32657__$1 = tmp32715;
var inst_32658 = inst_32665;
var state_32700__$1 = (function (){var statearr_32716 = state_32700;
(statearr_32716[(7)] = inst_32657__$1);

(statearr_32716[(8)] = inst_32658);

(statearr_32716[(12)] = inst_32673);

return statearr_32716;
})();
var statearr_32717_33315 = state_32700__$1;
(statearr_32717_33315[(2)] = null);

(statearr_32717_33315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (9))){
var inst_32658 = (state_32700[(8)]);
var inst_32669 = cljs.core.keyword_identical_QMARK_(inst_32658,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32700__$1 = state_32700;
var statearr_32718_33316 = state_32700__$1;
(statearr_32718_33316[(2)] = inst_32669);

(statearr_32718_33316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (5))){
var inst_32666 = (state_32700[(13)]);
var inst_32658 = (state_32700[(8)]);
var inst_32661 = (state_32700[(9)]);
var inst_32665 = (state_32700[(11)]);
var inst_32665__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32661) : f.call(null,inst_32661));
var inst_32666__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32665__$1,inst_32658);
var state_32700__$1 = (function (){var statearr_32719 = state_32700;
(statearr_32719[(13)] = inst_32666__$1);

(statearr_32719[(11)] = inst_32665__$1);

return statearr_32719;
})();
if(inst_32666__$1){
var statearr_32720_33317 = state_32700__$1;
(statearr_32720_33317[(1)] = (8));

} else {
var statearr_32721_33318 = state_32700__$1;
(statearr_32721_33318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (14))){
var inst_32661 = (state_32700[(9)]);
var inst_32665 = (state_32700[(11)]);
var inst_32678 = (state_32700[(2)]);
var inst_32679 = [];
var inst_32680 = inst_32679.push(inst_32661);
var inst_32657 = inst_32679;
var inst_32658 = inst_32665;
var state_32700__$1 = (function (){var statearr_32723 = state_32700;
(statearr_32723[(7)] = inst_32657);

(statearr_32723[(14)] = inst_32680);

(statearr_32723[(15)] = inst_32678);

(statearr_32723[(8)] = inst_32658);

return statearr_32723;
})();
var statearr_32724_33319 = state_32700__$1;
(statearr_32724_33319[(2)] = null);

(statearr_32724_33319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (16))){
var state_32700__$1 = state_32700;
var statearr_32725_33320 = state_32700__$1;
(statearr_32725_33320[(2)] = null);

(statearr_32725_33320[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (10))){
var inst_32671 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
if(cljs.core.truth_(inst_32671)){
var statearr_32726_33321 = state_32700__$1;
(statearr_32726_33321[(1)] = (11));

} else {
var statearr_32727_33322 = state_32700__$1;
(statearr_32727_33322[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (18))){
var inst_32690 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
var statearr_32728_33323 = state_32700__$1;
(statearr_32728_33323[(2)] = inst_32690);

(statearr_32728_33323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (8))){
var inst_32666 = (state_32700[(13)]);
var state_32700__$1 = state_32700;
var statearr_32729_33324 = state_32700__$1;
(statearr_32729_33324[(2)] = inst_32666);

(statearr_32729_33324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29468__auto__ = null;
var cljs$core$async$state_machine__29468__auto____0 = (function (){
var statearr_32730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32730[(0)] = cljs$core$async$state_machine__29468__auto__);

(statearr_32730[(1)] = (1));

return statearr_32730;
});
var cljs$core$async$state_machine__29468__auto____1 = (function (state_32700){
while(true){
var ret_value__29469__auto__ = (function (){try{while(true){
var result__29470__auto__ = switch__29467__auto__(state_32700);
if(cljs.core.keyword_identical_QMARK_(result__29470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29470__auto__;
}
break;
}
}catch (e32731){var ex__29471__auto__ = e32731;
var statearr_32732_33328 = state_32700;
(statearr_32732_33328[(2)] = ex__29471__auto__);


if(cljs.core.seq((state_32700[(4)]))){
var statearr_32733_33330 = state_32700;
(statearr_32733_33330[(1)] = cljs.core.first((state_32700[(4)])));

} else {
throw ex__29471__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33331 = state_32700;
state_32700 = G__33331;
continue;
} else {
return ret_value__29469__auto__;
}
break;
}
});
cljs$core$async$state_machine__29468__auto__ = function(state_32700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29468__auto____1.call(this,state_32700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29468__auto____0;
cljs$core$async$state_machine__29468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29468__auto____1;
return cljs$core$async$state_machine__29468__auto__;
})()
})();
var state__29766__auto__ = (function (){var statearr_32734 = f__29765__auto__();
(statearr_32734[(6)] = c__29764__auto___33306);

return statearr_32734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29766__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
