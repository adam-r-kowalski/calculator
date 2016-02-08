// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args33471 = [];
var len__26809__auto___33477 = arguments.length;
var i__26810__auto___33478 = (0);
while(true){
if((i__26810__auto___33478 < len__26809__auto___33477)){
args33471.push((arguments[i__26810__auto___33478]));

var G__33479 = (i__26810__auto___33478 + (1));
i__26810__auto___33478 = G__33479;
continue;
} else {
}
break;
}

var G__33473 = args33471.length;
switch (G__33473) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33471.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33474 = (function (f,blockable,meta33475){
this.f = f;
this.blockable = blockable;
this.meta33475 = meta33475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33476,meta33475__$1){
var self__ = this;
var _33476__$1 = this;
return (new cljs.core.async.t_cljs$core$async33474(self__.f,self__.blockable,meta33475__$1));
});

cljs.core.async.t_cljs$core$async33474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33476){
var self__ = this;
var _33476__$1 = this;
return self__.meta33475;
});

cljs.core.async.t_cljs$core$async33474.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33474.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33475","meta33475",-1233807284,null)], null);
});

cljs.core.async.t_cljs$core$async33474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33474";

cljs.core.async.t_cljs$core$async33474.cljs$lang$ctorPrWriter = (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cljs.core.async/t_cljs$core$async33474");
});

cljs.core.async.__GT_t_cljs$core$async33474 = (function cljs$core$async$__GT_t_cljs$core$async33474(f__$1,blockable__$1,meta33475){
return (new cljs.core.async.t_cljs$core$async33474(f__$1,blockable__$1,meta33475));
});

}

return (new cljs.core.async.t_cljs$core$async33474(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args33483 = [];
var len__26809__auto___33486 = arguments.length;
var i__26810__auto___33487 = (0);
while(true){
if((i__26810__auto___33487 < len__26809__auto___33486)){
args33483.push((arguments[i__26810__auto___33487]));

var G__33488 = (i__26810__auto___33487 + (1));
i__26810__auto___33487 = G__33488;
continue;
} else {
}
break;
}

var G__33485 = args33483.length;
switch (G__33485) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33483.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args33490 = [];
var len__26809__auto___33493 = arguments.length;
var i__26810__auto___33494 = (0);
while(true){
if((i__26810__auto___33494 < len__26809__auto___33493)){
args33490.push((arguments[i__26810__auto___33494]));

var G__33495 = (i__26810__auto___33494 + (1));
i__26810__auto___33494 = G__33495;
continue;
} else {
}
break;
}

var G__33492 = args33490.length;
switch (G__33492) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33490.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args33497 = [];
var len__26809__auto___33500 = arguments.length;
var i__26810__auto___33501 = (0);
while(true){
if((i__26810__auto___33501 < len__26809__auto___33500)){
args33497.push((arguments[i__26810__auto___33501]));

var G__33502 = (i__26810__auto___33501 + (1));
i__26810__auto___33501 = G__33502;
continue;
} else {
}
break;
}

var G__33499 = args33497.length;
switch (G__33499) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33497.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33504 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33504);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33504,ret){
return (function (){
return fn1.call(null,val_33504);
});})(val_33504,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args33505 = [];
var len__26809__auto___33508 = arguments.length;
var i__26810__auto___33509 = (0);
while(true){
if((i__26810__auto___33509 < len__26809__auto___33508)){
args33505.push((arguments[i__26810__auto___33509]));

var G__33510 = (i__26810__auto___33509 + (1));
i__26810__auto___33509 = G__33510;
continue;
} else {
}
break;
}

var G__33507 = args33505.length;
switch (G__33507) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33505.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26654__auto___33512 = n;
var x_33513 = (0);
while(true){
if((x_33513 < n__26654__auto___33512)){
(a[x_33513] = (0));

var G__33514 = (x_33513 + (1));
x_33513 = G__33514;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33515 = (i + (1));
i = G__33515;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33519 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33519 = (function (alt_flag,flag,meta33520){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta33520 = meta33520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33521,meta33520__$1){
var self__ = this;
var _33521__$1 = this;
return (new cljs.core.async.t_cljs$core$async33519(self__.alt_flag,self__.flag,meta33520__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33521){
var self__ = this;
var _33521__$1 = this;
return self__.meta33520;
});})(flag))
;

cljs.core.async.t_cljs$core$async33519.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33519.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33519.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33520","meta33520",-2061836063,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33519.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33519";

cljs.core.async.t_cljs$core$async33519.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cljs.core.async/t_cljs$core$async33519");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33519 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33519(alt_flag__$1,flag__$1,meta33520){
return (new cljs.core.async.t_cljs$core$async33519(alt_flag__$1,flag__$1,meta33520));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33519(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33525 = (function (alt_handler,flag,cb,meta33526){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta33526 = meta33526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33527,meta33526__$1){
var self__ = this;
var _33527__$1 = this;
return (new cljs.core.async.t_cljs$core$async33525(self__.alt_handler,self__.flag,self__.cb,meta33526__$1));
});

cljs.core.async.t_cljs$core$async33525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33527){
var self__ = this;
var _33527__$1 = this;
return self__.meta33526;
});

cljs.core.async.t_cljs$core$async33525.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33525.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33526","meta33526",-2067366358,null)], null);
});

cljs.core.async.t_cljs$core$async33525.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33525";

cljs.core.async.t_cljs$core$async33525.cljs$lang$ctorPrWriter = (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cljs.core.async/t_cljs$core$async33525");
});

cljs.core.async.__GT_t_cljs$core$async33525 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33525(alt_handler__$1,flag__$1,cb__$1,meta33526){
return (new cljs.core.async.t_cljs$core$async33525(alt_handler__$1,flag__$1,cb__$1,meta33526));
});

}

return (new cljs.core.async.t_cljs$core$async33525(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33528_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33528_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33529_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33529_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25751__auto__ = wport;
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33530 = (i + (1));
i = G__33530;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25751__auto__ = ret;
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__25739__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25739__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25739__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__26816__auto__ = [];
var len__26809__auto___33536 = arguments.length;
var i__26810__auto___33537 = (0);
while(true){
if((i__26810__auto___33537 < len__26809__auto___33536)){
args__26816__auto__.push((arguments[i__26810__auto___33537]));

var G__33538 = (i__26810__auto___33537 + (1));
i__26810__auto___33537 = G__33538;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((1) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26817__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33533){
var map__33534 = p__33533;
var map__33534__$1 = ((((!((map__33534 == null)))?((((map__33534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33534):map__33534);
var opts = map__33534__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33531){
var G__33532 = cljs.core.first.call(null,seq33531);
var seq33531__$1 = cljs.core.next.call(null,seq33531);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33532,seq33531__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args33539 = [];
var len__26809__auto___33589 = arguments.length;
var i__26810__auto___33590 = (0);
while(true){
if((i__26810__auto___33590 < len__26809__auto___33589)){
args33539.push((arguments[i__26810__auto___33590]));

var G__33591 = (i__26810__auto___33590 + (1));
i__26810__auto___33590 = G__33591;
continue;
} else {
}
break;
}

var G__33541 = args33539.length;
switch (G__33541) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33539.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33426__auto___33593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___33593){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___33593){
return (function (state_33565){
var state_val_33566 = (state_33565[(1)]);
if((state_val_33566 === (7))){
var inst_33561 = (state_33565[(2)]);
var state_33565__$1 = state_33565;
var statearr_33567_33594 = state_33565__$1;
(statearr_33567_33594[(2)] = inst_33561);

(statearr_33567_33594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (1))){
var state_33565__$1 = state_33565;
var statearr_33568_33595 = state_33565__$1;
(statearr_33568_33595[(2)] = null);

(statearr_33568_33595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (4))){
var inst_33544 = (state_33565[(7)]);
var inst_33544__$1 = (state_33565[(2)]);
var inst_33545 = (inst_33544__$1 == null);
var state_33565__$1 = (function (){var statearr_33569 = state_33565;
(statearr_33569[(7)] = inst_33544__$1);

return statearr_33569;
})();
if(cljs.core.truth_(inst_33545)){
var statearr_33570_33596 = state_33565__$1;
(statearr_33570_33596[(1)] = (5));

} else {
var statearr_33571_33597 = state_33565__$1;
(statearr_33571_33597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (13))){
var state_33565__$1 = state_33565;
var statearr_33572_33598 = state_33565__$1;
(statearr_33572_33598[(2)] = null);

(statearr_33572_33598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (6))){
var inst_33544 = (state_33565[(7)]);
var state_33565__$1 = state_33565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33565__$1,(11),to,inst_33544);
} else {
if((state_val_33566 === (3))){
var inst_33563 = (state_33565[(2)]);
var state_33565__$1 = state_33565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33565__$1,inst_33563);
} else {
if((state_val_33566 === (12))){
var state_33565__$1 = state_33565;
var statearr_33573_33599 = state_33565__$1;
(statearr_33573_33599[(2)] = null);

(statearr_33573_33599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (2))){
var state_33565__$1 = state_33565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33565__$1,(4),from);
} else {
if((state_val_33566 === (11))){
var inst_33554 = (state_33565[(2)]);
var state_33565__$1 = state_33565;
if(cljs.core.truth_(inst_33554)){
var statearr_33574_33600 = state_33565__$1;
(statearr_33574_33600[(1)] = (12));

} else {
var statearr_33575_33601 = state_33565__$1;
(statearr_33575_33601[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (9))){
var state_33565__$1 = state_33565;
var statearr_33576_33602 = state_33565__$1;
(statearr_33576_33602[(2)] = null);

(statearr_33576_33602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (5))){
var state_33565__$1 = state_33565;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33577_33603 = state_33565__$1;
(statearr_33577_33603[(1)] = (8));

} else {
var statearr_33578_33604 = state_33565__$1;
(statearr_33578_33604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (14))){
var inst_33559 = (state_33565[(2)]);
var state_33565__$1 = state_33565;
var statearr_33579_33605 = state_33565__$1;
(statearr_33579_33605[(2)] = inst_33559);

(statearr_33579_33605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (10))){
var inst_33551 = (state_33565[(2)]);
var state_33565__$1 = state_33565;
var statearr_33580_33606 = state_33565__$1;
(statearr_33580_33606[(2)] = inst_33551);

(statearr_33580_33606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (8))){
var inst_33548 = cljs.core.async.close_BANG_.call(null,to);
var state_33565__$1 = state_33565;
var statearr_33581_33607 = state_33565__$1;
(statearr_33581_33607[(2)] = inst_33548);

(statearr_33581_33607[(1)] = (10));


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
});})(c__33426__auto___33593))
;
return ((function (switch__33314__auto__,c__33426__auto___33593){
return (function() {
var cljs$core$async$state_machine__33315__auto__ = null;
var cljs$core$async$state_machine__33315__auto____0 = (function (){
var statearr_33585 = [null,null,null,null,null,null,null,null];
(statearr_33585[(0)] = cljs$core$async$state_machine__33315__auto__);

(statearr_33585[(1)] = (1));

return statearr_33585;
});
var cljs$core$async$state_machine__33315__auto____1 = (function (state_33565){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_33565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e33586){if((e33586 instanceof Object)){
var ex__33318__auto__ = e33586;
var statearr_33587_33608 = state_33565;
(statearr_33587_33608[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33609 = state_33565;
state_33565 = G__33609;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$state_machine__33315__auto__ = function(state_33565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33315__auto____1.call(this,state_33565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33315__auto____0;
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33315__auto____1;
return cljs$core$async$state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___33593))
})();
var state__33428__auto__ = (function (){var statearr_33588 = f__33427__auto__.call(null);
(statearr_33588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___33593);

return statearr_33588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___33593))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33793){
var vec__33794 = p__33793;
var v = cljs.core.nth.call(null,vec__33794,(0),null);
var p = cljs.core.nth.call(null,vec__33794,(1),null);
var job = vec__33794;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33426__auto___33976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___33976,res,vec__33794,v,p,job,jobs,results){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___33976,res,vec__33794,v,p,job,jobs,results){
return (function (state_33799){
var state_val_33800 = (state_33799[(1)]);
if((state_val_33800 === (1))){
var state_33799__$1 = state_33799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33799__$1,(2),res,v);
} else {
if((state_val_33800 === (2))){
var inst_33796 = (state_33799[(2)]);
var inst_33797 = cljs.core.async.close_BANG_.call(null,res);
var state_33799__$1 = (function (){var statearr_33801 = state_33799;
(statearr_33801[(7)] = inst_33796);

return statearr_33801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33799__$1,inst_33797);
} else {
return null;
}
}
});})(c__33426__auto___33976,res,vec__33794,v,p,job,jobs,results))
;
return ((function (switch__33314__auto__,c__33426__auto___33976,res,vec__33794,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____0 = (function (){
var statearr_33805 = [null,null,null,null,null,null,null,null];
(statearr_33805[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__);

(statearr_33805[(1)] = (1));

return statearr_33805;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____1 = (function (state_33799){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_33799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e33806){if((e33806 instanceof Object)){
var ex__33318__auto__ = e33806;
var statearr_33807_33977 = state_33799;
(statearr_33807_33977[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33978 = state_33799;
state_33799 = G__33978;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__ = function(state_33799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____1.call(this,state_33799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___33976,res,vec__33794,v,p,job,jobs,results))
})();
var state__33428__auto__ = (function (){var statearr_33808 = f__33427__auto__.call(null);
(statearr_33808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___33976);

return statearr_33808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___33976,res,vec__33794,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33809){
var vec__33810 = p__33809;
var v = cljs.core.nth.call(null,vec__33810,(0),null);
var p = cljs.core.nth.call(null,vec__33810,(1),null);
var job = vec__33810;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26654__auto___33979 = n;
var __33980 = (0);
while(true){
if((__33980 < n__26654__auto___33979)){
var G__33811_33981 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33811_33981) {
case "compute":
var c__33426__auto___33983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33980,c__33426__auto___33983,G__33811_33981,n__26654__auto___33979,jobs,results,process,async){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (__33980,c__33426__auto___33983,G__33811_33981,n__26654__auto___33979,jobs,results,process,async){
return (function (state_33824){
var state_val_33825 = (state_33824[(1)]);
if((state_val_33825 === (1))){
var state_33824__$1 = state_33824;
var statearr_33826_33984 = state_33824__$1;
(statearr_33826_33984[(2)] = null);

(statearr_33826_33984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (2))){
var state_33824__$1 = state_33824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33824__$1,(4),jobs);
} else {
if((state_val_33825 === (3))){
var inst_33822 = (state_33824[(2)]);
var state_33824__$1 = state_33824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33824__$1,inst_33822);
} else {
if((state_val_33825 === (4))){
var inst_33814 = (state_33824[(2)]);
var inst_33815 = process.call(null,inst_33814);
var state_33824__$1 = state_33824;
if(cljs.core.truth_(inst_33815)){
var statearr_33827_33985 = state_33824__$1;
(statearr_33827_33985[(1)] = (5));

} else {
var statearr_33828_33986 = state_33824__$1;
(statearr_33828_33986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (5))){
var state_33824__$1 = state_33824;
var statearr_33829_33987 = state_33824__$1;
(statearr_33829_33987[(2)] = null);

(statearr_33829_33987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (6))){
var state_33824__$1 = state_33824;
var statearr_33830_33988 = state_33824__$1;
(statearr_33830_33988[(2)] = null);

(statearr_33830_33988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (7))){
var inst_33820 = (state_33824[(2)]);
var state_33824__$1 = state_33824;
var statearr_33831_33989 = state_33824__$1;
(statearr_33831_33989[(2)] = inst_33820);

(statearr_33831_33989[(1)] = (3));


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
});})(__33980,c__33426__auto___33983,G__33811_33981,n__26654__auto___33979,jobs,results,process,async))
;
return ((function (__33980,switch__33314__auto__,c__33426__auto___33983,G__33811_33981,n__26654__auto___33979,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____0 = (function (){
var statearr_33835 = [null,null,null,null,null,null,null];
(statearr_33835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__);

(statearr_33835[(1)] = (1));

return statearr_33835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____1 = (function (state_33824){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_33824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e33836){if((e33836 instanceof Object)){
var ex__33318__auto__ = e33836;
var statearr_33837_33990 = state_33824;
(statearr_33837_33990[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33991 = state_33824;
state_33824 = G__33991;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__ = function(state_33824){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____1.call(this,state_33824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__;
})()
;})(__33980,switch__33314__auto__,c__33426__auto___33983,G__33811_33981,n__26654__auto___33979,jobs,results,process,async))
})();
var state__33428__auto__ = (function (){var statearr_33838 = f__33427__auto__.call(null);
(statearr_33838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___33983);

return statearr_33838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(__33980,c__33426__auto___33983,G__33811_33981,n__26654__auto___33979,jobs,results,process,async))
);


break;
case "async":
var c__33426__auto___33992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33980,c__33426__auto___33992,G__33811_33981,n__26654__auto___33979,jobs,results,process,async){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (__33980,c__33426__auto___33992,G__33811_33981,n__26654__auto___33979,jobs,results,process,async){
return (function (state_33851){
var state_val_33852 = (state_33851[(1)]);
if((state_val_33852 === (1))){
var state_33851__$1 = state_33851;
var statearr_33853_33993 = state_33851__$1;
(statearr_33853_33993[(2)] = null);

(statearr_33853_33993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (2))){
var state_33851__$1 = state_33851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33851__$1,(4),jobs);
} else {
if((state_val_33852 === (3))){
var inst_33849 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33851__$1,inst_33849);
} else {
if((state_val_33852 === (4))){
var inst_33841 = (state_33851[(2)]);
var inst_33842 = async.call(null,inst_33841);
var state_33851__$1 = state_33851;
if(cljs.core.truth_(inst_33842)){
var statearr_33854_33994 = state_33851__$1;
(statearr_33854_33994[(1)] = (5));

} else {
var statearr_33855_33995 = state_33851__$1;
(statearr_33855_33995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (5))){
var state_33851__$1 = state_33851;
var statearr_33856_33996 = state_33851__$1;
(statearr_33856_33996[(2)] = null);

(statearr_33856_33996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (6))){
var state_33851__$1 = state_33851;
var statearr_33857_33997 = state_33851__$1;
(statearr_33857_33997[(2)] = null);

(statearr_33857_33997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (7))){
var inst_33847 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
var statearr_33858_33998 = state_33851__$1;
(statearr_33858_33998[(2)] = inst_33847);

(statearr_33858_33998[(1)] = (3));


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
});})(__33980,c__33426__auto___33992,G__33811_33981,n__26654__auto___33979,jobs,results,process,async))
;
return ((function (__33980,switch__33314__auto__,c__33426__auto___33992,G__33811_33981,n__26654__auto___33979,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____0 = (function (){
var statearr_33862 = [null,null,null,null,null,null,null];
(statearr_33862[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__);

(statearr_33862[(1)] = (1));

return statearr_33862;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____1 = (function (state_33851){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_33851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e33863){if((e33863 instanceof Object)){
var ex__33318__auto__ = e33863;
var statearr_33864_33999 = state_33851;
(statearr_33864_33999[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34000 = state_33851;
state_33851 = G__34000;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__ = function(state_33851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____1.call(this,state_33851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__;
})()
;})(__33980,switch__33314__auto__,c__33426__auto___33992,G__33811_33981,n__26654__auto___33979,jobs,results,process,async))
})();
var state__33428__auto__ = (function (){var statearr_33865 = f__33427__auto__.call(null);
(statearr_33865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___33992);

return statearr_33865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(__33980,c__33426__auto___33992,G__33811_33981,n__26654__auto___33979,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34001 = (__33980 + (1));
__33980 = G__34001;
continue;
} else {
}
break;
}

var c__33426__auto___34002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___34002,jobs,results,process,async){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___34002,jobs,results,process,async){
return (function (state_33887){
var state_val_33888 = (state_33887[(1)]);
if((state_val_33888 === (1))){
var state_33887__$1 = state_33887;
var statearr_33889_34003 = state_33887__$1;
(statearr_33889_34003[(2)] = null);

(statearr_33889_34003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (2))){
var state_33887__$1 = state_33887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33887__$1,(4),from);
} else {
if((state_val_33888 === (3))){
var inst_33885 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33887__$1,inst_33885);
} else {
if((state_val_33888 === (4))){
var inst_33868 = (state_33887[(7)]);
var inst_33868__$1 = (state_33887[(2)]);
var inst_33869 = (inst_33868__$1 == null);
var state_33887__$1 = (function (){var statearr_33890 = state_33887;
(statearr_33890[(7)] = inst_33868__$1);

return statearr_33890;
})();
if(cljs.core.truth_(inst_33869)){
var statearr_33891_34004 = state_33887__$1;
(statearr_33891_34004[(1)] = (5));

} else {
var statearr_33892_34005 = state_33887__$1;
(statearr_33892_34005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (5))){
var inst_33871 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33887__$1 = state_33887;
var statearr_33893_34006 = state_33887__$1;
(statearr_33893_34006[(2)] = inst_33871);

(statearr_33893_34006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (6))){
var inst_33873 = (state_33887[(8)]);
var inst_33868 = (state_33887[(7)]);
var inst_33873__$1 = cljs.core.async.chan.call(null,(1));
var inst_33874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33875 = [inst_33868,inst_33873__$1];
var inst_33876 = (new cljs.core.PersistentVector(null,2,(5),inst_33874,inst_33875,null));
var state_33887__$1 = (function (){var statearr_33894 = state_33887;
(statearr_33894[(8)] = inst_33873__$1);

return statearr_33894;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33887__$1,(8),jobs,inst_33876);
} else {
if((state_val_33888 === (7))){
var inst_33883 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
var statearr_33895_34007 = state_33887__$1;
(statearr_33895_34007[(2)] = inst_33883);

(statearr_33895_34007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (8))){
var inst_33873 = (state_33887[(8)]);
var inst_33878 = (state_33887[(2)]);
var state_33887__$1 = (function (){var statearr_33896 = state_33887;
(statearr_33896[(9)] = inst_33878);

return statearr_33896;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33887__$1,(9),results,inst_33873);
} else {
if((state_val_33888 === (9))){
var inst_33880 = (state_33887[(2)]);
var state_33887__$1 = (function (){var statearr_33897 = state_33887;
(statearr_33897[(10)] = inst_33880);

return statearr_33897;
})();
var statearr_33898_34008 = state_33887__$1;
(statearr_33898_34008[(2)] = null);

(statearr_33898_34008[(1)] = (2));


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
});})(c__33426__auto___34002,jobs,results,process,async))
;
return ((function (switch__33314__auto__,c__33426__auto___34002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____0 = (function (){
var statearr_33902 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33902[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__);

(statearr_33902[(1)] = (1));

return statearr_33902;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____1 = (function (state_33887){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_33887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e33903){if((e33903 instanceof Object)){
var ex__33318__auto__ = e33903;
var statearr_33904_34009 = state_33887;
(statearr_33904_34009[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34010 = state_33887;
state_33887 = G__34010;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__ = function(state_33887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____1.call(this,state_33887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___34002,jobs,results,process,async))
})();
var state__33428__auto__ = (function (){var statearr_33905 = f__33427__auto__.call(null);
(statearr_33905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___34002);

return statearr_33905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___34002,jobs,results,process,async))
);


var c__33426__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto__,jobs,results,process,async){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto__,jobs,results,process,async){
return (function (state_33943){
var state_val_33944 = (state_33943[(1)]);
if((state_val_33944 === (7))){
var inst_33939 = (state_33943[(2)]);
var state_33943__$1 = state_33943;
var statearr_33945_34011 = state_33943__$1;
(statearr_33945_34011[(2)] = inst_33939);

(statearr_33945_34011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (20))){
var state_33943__$1 = state_33943;
var statearr_33946_34012 = state_33943__$1;
(statearr_33946_34012[(2)] = null);

(statearr_33946_34012[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (1))){
var state_33943__$1 = state_33943;
var statearr_33947_34013 = state_33943__$1;
(statearr_33947_34013[(2)] = null);

(statearr_33947_34013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (4))){
var inst_33908 = (state_33943[(7)]);
var inst_33908__$1 = (state_33943[(2)]);
var inst_33909 = (inst_33908__$1 == null);
var state_33943__$1 = (function (){var statearr_33948 = state_33943;
(statearr_33948[(7)] = inst_33908__$1);

return statearr_33948;
})();
if(cljs.core.truth_(inst_33909)){
var statearr_33949_34014 = state_33943__$1;
(statearr_33949_34014[(1)] = (5));

} else {
var statearr_33950_34015 = state_33943__$1;
(statearr_33950_34015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (15))){
var inst_33921 = (state_33943[(8)]);
var state_33943__$1 = state_33943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33943__$1,(18),to,inst_33921);
} else {
if((state_val_33944 === (21))){
var inst_33934 = (state_33943[(2)]);
var state_33943__$1 = state_33943;
var statearr_33951_34016 = state_33943__$1;
(statearr_33951_34016[(2)] = inst_33934);

(statearr_33951_34016[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (13))){
var inst_33936 = (state_33943[(2)]);
var state_33943__$1 = (function (){var statearr_33952 = state_33943;
(statearr_33952[(9)] = inst_33936);

return statearr_33952;
})();
var statearr_33953_34017 = state_33943__$1;
(statearr_33953_34017[(2)] = null);

(statearr_33953_34017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (6))){
var inst_33908 = (state_33943[(7)]);
var state_33943__$1 = state_33943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33943__$1,(11),inst_33908);
} else {
if((state_val_33944 === (17))){
var inst_33929 = (state_33943[(2)]);
var state_33943__$1 = state_33943;
if(cljs.core.truth_(inst_33929)){
var statearr_33954_34018 = state_33943__$1;
(statearr_33954_34018[(1)] = (19));

} else {
var statearr_33955_34019 = state_33943__$1;
(statearr_33955_34019[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (3))){
var inst_33941 = (state_33943[(2)]);
var state_33943__$1 = state_33943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33943__$1,inst_33941);
} else {
if((state_val_33944 === (12))){
var inst_33918 = (state_33943[(10)]);
var state_33943__$1 = state_33943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33943__$1,(14),inst_33918);
} else {
if((state_val_33944 === (2))){
var state_33943__$1 = state_33943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33943__$1,(4),results);
} else {
if((state_val_33944 === (19))){
var state_33943__$1 = state_33943;
var statearr_33956_34020 = state_33943__$1;
(statearr_33956_34020[(2)] = null);

(statearr_33956_34020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (11))){
var inst_33918 = (state_33943[(2)]);
var state_33943__$1 = (function (){var statearr_33957 = state_33943;
(statearr_33957[(10)] = inst_33918);

return statearr_33957;
})();
var statearr_33958_34021 = state_33943__$1;
(statearr_33958_34021[(2)] = null);

(statearr_33958_34021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (9))){
var state_33943__$1 = state_33943;
var statearr_33959_34022 = state_33943__$1;
(statearr_33959_34022[(2)] = null);

(statearr_33959_34022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (5))){
var state_33943__$1 = state_33943;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33960_34023 = state_33943__$1;
(statearr_33960_34023[(1)] = (8));

} else {
var statearr_33961_34024 = state_33943__$1;
(statearr_33961_34024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (14))){
var inst_33921 = (state_33943[(8)]);
var inst_33923 = (state_33943[(11)]);
var inst_33921__$1 = (state_33943[(2)]);
var inst_33922 = (inst_33921__$1 == null);
var inst_33923__$1 = cljs.core.not.call(null,inst_33922);
var state_33943__$1 = (function (){var statearr_33962 = state_33943;
(statearr_33962[(8)] = inst_33921__$1);

(statearr_33962[(11)] = inst_33923__$1);

return statearr_33962;
})();
if(inst_33923__$1){
var statearr_33963_34025 = state_33943__$1;
(statearr_33963_34025[(1)] = (15));

} else {
var statearr_33964_34026 = state_33943__$1;
(statearr_33964_34026[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (16))){
var inst_33923 = (state_33943[(11)]);
var state_33943__$1 = state_33943;
var statearr_33965_34027 = state_33943__$1;
(statearr_33965_34027[(2)] = inst_33923);

(statearr_33965_34027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (10))){
var inst_33915 = (state_33943[(2)]);
var state_33943__$1 = state_33943;
var statearr_33966_34028 = state_33943__$1;
(statearr_33966_34028[(2)] = inst_33915);

(statearr_33966_34028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (18))){
var inst_33926 = (state_33943[(2)]);
var state_33943__$1 = state_33943;
var statearr_33967_34029 = state_33943__$1;
(statearr_33967_34029[(2)] = inst_33926);

(statearr_33967_34029[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (8))){
var inst_33912 = cljs.core.async.close_BANG_.call(null,to);
var state_33943__$1 = state_33943;
var statearr_33968_34030 = state_33943__$1;
(statearr_33968_34030[(2)] = inst_33912);

(statearr_33968_34030[(1)] = (10));


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
});})(c__33426__auto__,jobs,results,process,async))
;
return ((function (switch__33314__auto__,c__33426__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____0 = (function (){
var statearr_33972 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__);

(statearr_33972[(1)] = (1));

return statearr_33972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____1 = (function (state_33943){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_33943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e33973){if((e33973 instanceof Object)){
var ex__33318__auto__ = e33973;
var statearr_33974_34031 = state_33943;
(statearr_33974_34031[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34032 = state_33943;
state_33943 = G__34032;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__ = function(state_33943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____1.call(this,state_33943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto__,jobs,results,process,async))
})();
var state__33428__auto__ = (function (){var statearr_33975 = f__33427__auto__.call(null);
(statearr_33975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto__);

return statearr_33975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto__,jobs,results,process,async))
);

return c__33426__auto__;
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
var args34033 = [];
var len__26809__auto___34036 = arguments.length;
var i__26810__auto___34037 = (0);
while(true){
if((i__26810__auto___34037 < len__26809__auto___34036)){
args34033.push((arguments[i__26810__auto___34037]));

var G__34038 = (i__26810__auto___34037 + (1));
i__26810__auto___34037 = G__34038;
continue;
} else {
}
break;
}

var G__34035 = args34033.length;
switch (G__34035) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34033.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
var args34040 = [];
var len__26809__auto___34043 = arguments.length;
var i__26810__auto___34044 = (0);
while(true){
if((i__26810__auto___34044 < len__26809__auto___34043)){
args34040.push((arguments[i__26810__auto___34044]));

var G__34045 = (i__26810__auto___34044 + (1));
i__26810__auto___34044 = G__34045;
continue;
} else {
}
break;
}

var G__34042 = args34040.length;
switch (G__34042) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34040.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
var args34047 = [];
var len__26809__auto___34100 = arguments.length;
var i__26810__auto___34101 = (0);
while(true){
if((i__26810__auto___34101 < len__26809__auto___34100)){
args34047.push((arguments[i__26810__auto___34101]));

var G__34102 = (i__26810__auto___34101 + (1));
i__26810__auto___34101 = G__34102;
continue;
} else {
}
break;
}

var G__34049 = args34047.length;
switch (G__34049) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34047.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33426__auto___34104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___34104,tc,fc){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___34104,tc,fc){
return (function (state_34075){
var state_val_34076 = (state_34075[(1)]);
if((state_val_34076 === (7))){
var inst_34071 = (state_34075[(2)]);
var state_34075__$1 = state_34075;
var statearr_34077_34105 = state_34075__$1;
(statearr_34077_34105[(2)] = inst_34071);

(statearr_34077_34105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (1))){
var state_34075__$1 = state_34075;
var statearr_34078_34106 = state_34075__$1;
(statearr_34078_34106[(2)] = null);

(statearr_34078_34106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (4))){
var inst_34052 = (state_34075[(7)]);
var inst_34052__$1 = (state_34075[(2)]);
var inst_34053 = (inst_34052__$1 == null);
var state_34075__$1 = (function (){var statearr_34079 = state_34075;
(statearr_34079[(7)] = inst_34052__$1);

return statearr_34079;
})();
if(cljs.core.truth_(inst_34053)){
var statearr_34080_34107 = state_34075__$1;
(statearr_34080_34107[(1)] = (5));

} else {
var statearr_34081_34108 = state_34075__$1;
(statearr_34081_34108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (13))){
var state_34075__$1 = state_34075;
var statearr_34082_34109 = state_34075__$1;
(statearr_34082_34109[(2)] = null);

(statearr_34082_34109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (6))){
var inst_34052 = (state_34075[(7)]);
var inst_34058 = p.call(null,inst_34052);
var state_34075__$1 = state_34075;
if(cljs.core.truth_(inst_34058)){
var statearr_34083_34110 = state_34075__$1;
(statearr_34083_34110[(1)] = (9));

} else {
var statearr_34084_34111 = state_34075__$1;
(statearr_34084_34111[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (3))){
var inst_34073 = (state_34075[(2)]);
var state_34075__$1 = state_34075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34075__$1,inst_34073);
} else {
if((state_val_34076 === (12))){
var state_34075__$1 = state_34075;
var statearr_34085_34112 = state_34075__$1;
(statearr_34085_34112[(2)] = null);

(statearr_34085_34112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (2))){
var state_34075__$1 = state_34075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34075__$1,(4),ch);
} else {
if((state_val_34076 === (11))){
var inst_34052 = (state_34075[(7)]);
var inst_34062 = (state_34075[(2)]);
var state_34075__$1 = state_34075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34075__$1,(8),inst_34062,inst_34052);
} else {
if((state_val_34076 === (9))){
var state_34075__$1 = state_34075;
var statearr_34086_34113 = state_34075__$1;
(statearr_34086_34113[(2)] = tc);

(statearr_34086_34113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (5))){
var inst_34055 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34056 = cljs.core.async.close_BANG_.call(null,fc);
var state_34075__$1 = (function (){var statearr_34087 = state_34075;
(statearr_34087[(8)] = inst_34055);

return statearr_34087;
})();
var statearr_34088_34114 = state_34075__$1;
(statearr_34088_34114[(2)] = inst_34056);

(statearr_34088_34114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (14))){
var inst_34069 = (state_34075[(2)]);
var state_34075__$1 = state_34075;
var statearr_34089_34115 = state_34075__$1;
(statearr_34089_34115[(2)] = inst_34069);

(statearr_34089_34115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (10))){
var state_34075__$1 = state_34075;
var statearr_34090_34116 = state_34075__$1;
(statearr_34090_34116[(2)] = fc);

(statearr_34090_34116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (8))){
var inst_34064 = (state_34075[(2)]);
var state_34075__$1 = state_34075;
if(cljs.core.truth_(inst_34064)){
var statearr_34091_34117 = state_34075__$1;
(statearr_34091_34117[(1)] = (12));

} else {
var statearr_34092_34118 = state_34075__$1;
(statearr_34092_34118[(1)] = (13));

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
});})(c__33426__auto___34104,tc,fc))
;
return ((function (switch__33314__auto__,c__33426__auto___34104,tc,fc){
return (function() {
var cljs$core$async$state_machine__33315__auto__ = null;
var cljs$core$async$state_machine__33315__auto____0 = (function (){
var statearr_34096 = [null,null,null,null,null,null,null,null,null];
(statearr_34096[(0)] = cljs$core$async$state_machine__33315__auto__);

(statearr_34096[(1)] = (1));

return statearr_34096;
});
var cljs$core$async$state_machine__33315__auto____1 = (function (state_34075){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_34075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e34097){if((e34097 instanceof Object)){
var ex__33318__auto__ = e34097;
var statearr_34098_34119 = state_34075;
(statearr_34098_34119[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34120 = state_34075;
state_34075 = G__34120;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$state_machine__33315__auto__ = function(state_34075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33315__auto____1.call(this,state_34075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33315__auto____0;
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33315__auto____1;
return cljs$core$async$state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___34104,tc,fc))
})();
var state__33428__auto__ = (function (){var statearr_34099 = f__33427__auto__.call(null);
(statearr_34099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___34104);

return statearr_34099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___34104,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33426__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto__){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto__){
return (function (state_34184){
var state_val_34185 = (state_34184[(1)]);
if((state_val_34185 === (7))){
var inst_34180 = (state_34184[(2)]);
var state_34184__$1 = state_34184;
var statearr_34186_34207 = state_34184__$1;
(statearr_34186_34207[(2)] = inst_34180);

(statearr_34186_34207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (1))){
var inst_34164 = init;
var state_34184__$1 = (function (){var statearr_34187 = state_34184;
(statearr_34187[(7)] = inst_34164);

return statearr_34187;
})();
var statearr_34188_34208 = state_34184__$1;
(statearr_34188_34208[(2)] = null);

(statearr_34188_34208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (4))){
var inst_34167 = (state_34184[(8)]);
var inst_34167__$1 = (state_34184[(2)]);
var inst_34168 = (inst_34167__$1 == null);
var state_34184__$1 = (function (){var statearr_34189 = state_34184;
(statearr_34189[(8)] = inst_34167__$1);

return statearr_34189;
})();
if(cljs.core.truth_(inst_34168)){
var statearr_34190_34209 = state_34184__$1;
(statearr_34190_34209[(1)] = (5));

} else {
var statearr_34191_34210 = state_34184__$1;
(statearr_34191_34210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (6))){
var inst_34164 = (state_34184[(7)]);
var inst_34171 = (state_34184[(9)]);
var inst_34167 = (state_34184[(8)]);
var inst_34171__$1 = f.call(null,inst_34164,inst_34167);
var inst_34172 = cljs.core.reduced_QMARK_.call(null,inst_34171__$1);
var state_34184__$1 = (function (){var statearr_34192 = state_34184;
(statearr_34192[(9)] = inst_34171__$1);

return statearr_34192;
})();
if(inst_34172){
var statearr_34193_34211 = state_34184__$1;
(statearr_34193_34211[(1)] = (8));

} else {
var statearr_34194_34212 = state_34184__$1;
(statearr_34194_34212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (3))){
var inst_34182 = (state_34184[(2)]);
var state_34184__$1 = state_34184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34184__$1,inst_34182);
} else {
if((state_val_34185 === (2))){
var state_34184__$1 = state_34184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34184__$1,(4),ch);
} else {
if((state_val_34185 === (9))){
var inst_34171 = (state_34184[(9)]);
var inst_34164 = inst_34171;
var state_34184__$1 = (function (){var statearr_34195 = state_34184;
(statearr_34195[(7)] = inst_34164);

return statearr_34195;
})();
var statearr_34196_34213 = state_34184__$1;
(statearr_34196_34213[(2)] = null);

(statearr_34196_34213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (5))){
var inst_34164 = (state_34184[(7)]);
var state_34184__$1 = state_34184;
var statearr_34197_34214 = state_34184__$1;
(statearr_34197_34214[(2)] = inst_34164);

(statearr_34197_34214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (10))){
var inst_34178 = (state_34184[(2)]);
var state_34184__$1 = state_34184;
var statearr_34198_34215 = state_34184__$1;
(statearr_34198_34215[(2)] = inst_34178);

(statearr_34198_34215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (8))){
var inst_34171 = (state_34184[(9)]);
var inst_34174 = cljs.core.deref.call(null,inst_34171);
var state_34184__$1 = state_34184;
var statearr_34199_34216 = state_34184__$1;
(statearr_34199_34216[(2)] = inst_34174);

(statearr_34199_34216[(1)] = (10));


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
});})(c__33426__auto__))
;
return ((function (switch__33314__auto__,c__33426__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33315__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33315__auto____0 = (function (){
var statearr_34203 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34203[(0)] = cljs$core$async$reduce_$_state_machine__33315__auto__);

(statearr_34203[(1)] = (1));

return statearr_34203;
});
var cljs$core$async$reduce_$_state_machine__33315__auto____1 = (function (state_34184){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_34184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e34204){if((e34204 instanceof Object)){
var ex__33318__auto__ = e34204;
var statearr_34205_34217 = state_34184;
(statearr_34205_34217[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34218 = state_34184;
state_34184 = G__34218;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33315__auto__ = function(state_34184){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33315__auto____1.call(this,state_34184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33315__auto____0;
cljs$core$async$reduce_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33315__auto____1;
return cljs$core$async$reduce_$_state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto__))
})();
var state__33428__auto__ = (function (){var statearr_34206 = f__33427__auto__.call(null);
(statearr_34206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto__);

return statearr_34206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto__))
);

return c__33426__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args34219 = [];
var len__26809__auto___34271 = arguments.length;
var i__26810__auto___34272 = (0);
while(true){
if((i__26810__auto___34272 < len__26809__auto___34271)){
args34219.push((arguments[i__26810__auto___34272]));

var G__34273 = (i__26810__auto___34272 + (1));
i__26810__auto___34272 = G__34273;
continue;
} else {
}
break;
}

var G__34221 = args34219.length;
switch (G__34221) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34219.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33426__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto__){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto__){
return (function (state_34246){
var state_val_34247 = (state_34246[(1)]);
if((state_val_34247 === (7))){
var inst_34228 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34248_34275 = state_34246__$1;
(statearr_34248_34275[(2)] = inst_34228);

(statearr_34248_34275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (1))){
var inst_34222 = cljs.core.seq.call(null,coll);
var inst_34223 = inst_34222;
var state_34246__$1 = (function (){var statearr_34249 = state_34246;
(statearr_34249[(7)] = inst_34223);

return statearr_34249;
})();
var statearr_34250_34276 = state_34246__$1;
(statearr_34250_34276[(2)] = null);

(statearr_34250_34276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (4))){
var inst_34223 = (state_34246[(7)]);
var inst_34226 = cljs.core.first.call(null,inst_34223);
var state_34246__$1 = state_34246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34246__$1,(7),ch,inst_34226);
} else {
if((state_val_34247 === (13))){
var inst_34240 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34251_34277 = state_34246__$1;
(statearr_34251_34277[(2)] = inst_34240);

(statearr_34251_34277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (6))){
var inst_34231 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
if(cljs.core.truth_(inst_34231)){
var statearr_34252_34278 = state_34246__$1;
(statearr_34252_34278[(1)] = (8));

} else {
var statearr_34253_34279 = state_34246__$1;
(statearr_34253_34279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (3))){
var inst_34244 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34246__$1,inst_34244);
} else {
if((state_val_34247 === (12))){
var state_34246__$1 = state_34246;
var statearr_34254_34280 = state_34246__$1;
(statearr_34254_34280[(2)] = null);

(statearr_34254_34280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (2))){
var inst_34223 = (state_34246[(7)]);
var state_34246__$1 = state_34246;
if(cljs.core.truth_(inst_34223)){
var statearr_34255_34281 = state_34246__$1;
(statearr_34255_34281[(1)] = (4));

} else {
var statearr_34256_34282 = state_34246__$1;
(statearr_34256_34282[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (11))){
var inst_34237 = cljs.core.async.close_BANG_.call(null,ch);
var state_34246__$1 = state_34246;
var statearr_34257_34283 = state_34246__$1;
(statearr_34257_34283[(2)] = inst_34237);

(statearr_34257_34283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (9))){
var state_34246__$1 = state_34246;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34258_34284 = state_34246__$1;
(statearr_34258_34284[(1)] = (11));

} else {
var statearr_34259_34285 = state_34246__$1;
(statearr_34259_34285[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (5))){
var inst_34223 = (state_34246[(7)]);
var state_34246__$1 = state_34246;
var statearr_34260_34286 = state_34246__$1;
(statearr_34260_34286[(2)] = inst_34223);

(statearr_34260_34286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (10))){
var inst_34242 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34261_34287 = state_34246__$1;
(statearr_34261_34287[(2)] = inst_34242);

(statearr_34261_34287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (8))){
var inst_34223 = (state_34246[(7)]);
var inst_34233 = cljs.core.next.call(null,inst_34223);
var inst_34223__$1 = inst_34233;
var state_34246__$1 = (function (){var statearr_34262 = state_34246;
(statearr_34262[(7)] = inst_34223__$1);

return statearr_34262;
})();
var statearr_34263_34288 = state_34246__$1;
(statearr_34263_34288[(2)] = null);

(statearr_34263_34288[(1)] = (2));


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
});})(c__33426__auto__))
;
return ((function (switch__33314__auto__,c__33426__auto__){
return (function() {
var cljs$core$async$state_machine__33315__auto__ = null;
var cljs$core$async$state_machine__33315__auto____0 = (function (){
var statearr_34267 = [null,null,null,null,null,null,null,null];
(statearr_34267[(0)] = cljs$core$async$state_machine__33315__auto__);

(statearr_34267[(1)] = (1));

return statearr_34267;
});
var cljs$core$async$state_machine__33315__auto____1 = (function (state_34246){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_34246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e34268){if((e34268 instanceof Object)){
var ex__33318__auto__ = e34268;
var statearr_34269_34289 = state_34246;
(statearr_34269_34289[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34290 = state_34246;
state_34246 = G__34290;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$state_machine__33315__auto__ = function(state_34246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33315__auto____1.call(this,state_34246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33315__auto____0;
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33315__auto____1;
return cljs$core$async$state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto__))
})();
var state__33428__auto__ = (function (){var statearr_34270 = f__33427__auto__.call(null);
(statearr_34270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto__);

return statearr_34270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto__))
);

return c__33426__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26406__auto__ = (((_ == null))?null:_);
var m__26407__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,_);
} else {
var m__26407__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26406__auto__ = (((m == null))?null:m);
var m__26407__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26407__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26406__auto__ = (((m == null))?null:m);
var m__26407__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,m,ch);
} else {
var m__26407__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26406__auto__ = (((m == null))?null:m);
var m__26407__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,m);
} else {
var m__26407__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34512 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34512 = (function (mult,ch,cs,meta34513){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta34513 = meta34513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34514,meta34513__$1){
var self__ = this;
var _34514__$1 = this;
return (new cljs.core.async.t_cljs$core$async34512(self__.mult,self__.ch,self__.cs,meta34513__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34514){
var self__ = this;
var _34514__$1 = this;
return self__.meta34513;
});})(cs))
;

cljs.core.async.t_cljs$core$async34512.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34512.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34512.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async34512.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34512.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34512.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34512.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34513","meta34513",-1868343638,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34512.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34512";

cljs.core.async.t_cljs$core$async34512.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cljs.core.async/t_cljs$core$async34512");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34512 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34512(mult__$1,ch__$1,cs__$1,meta34513){
return (new cljs.core.async.t_cljs$core$async34512(mult__$1,ch__$1,cs__$1,meta34513));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34512(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33426__auto___34733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___34733,cs,m,dchan,dctr,done){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___34733,cs,m,dchan,dctr,done){
return (function (state_34645){
var state_val_34646 = (state_34645[(1)]);
if((state_val_34646 === (7))){
var inst_34641 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34647_34734 = state_34645__$1;
(statearr_34647_34734[(2)] = inst_34641);

(statearr_34647_34734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (20))){
var inst_34546 = (state_34645[(7)]);
var inst_34556 = cljs.core.first.call(null,inst_34546);
var inst_34557 = cljs.core.nth.call(null,inst_34556,(0),null);
var inst_34558 = cljs.core.nth.call(null,inst_34556,(1),null);
var state_34645__$1 = (function (){var statearr_34648 = state_34645;
(statearr_34648[(8)] = inst_34557);

return statearr_34648;
})();
if(cljs.core.truth_(inst_34558)){
var statearr_34649_34735 = state_34645__$1;
(statearr_34649_34735[(1)] = (22));

} else {
var statearr_34650_34736 = state_34645__$1;
(statearr_34650_34736[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (27))){
var inst_34588 = (state_34645[(9)]);
var inst_34586 = (state_34645[(10)]);
var inst_34517 = (state_34645[(11)]);
var inst_34593 = (state_34645[(12)]);
var inst_34593__$1 = cljs.core._nth.call(null,inst_34586,inst_34588);
var inst_34594 = cljs.core.async.put_BANG_.call(null,inst_34593__$1,inst_34517,done);
var state_34645__$1 = (function (){var statearr_34651 = state_34645;
(statearr_34651[(12)] = inst_34593__$1);

return statearr_34651;
})();
if(cljs.core.truth_(inst_34594)){
var statearr_34652_34737 = state_34645__$1;
(statearr_34652_34737[(1)] = (30));

} else {
var statearr_34653_34738 = state_34645__$1;
(statearr_34653_34738[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (1))){
var state_34645__$1 = state_34645;
var statearr_34654_34739 = state_34645__$1;
(statearr_34654_34739[(2)] = null);

(statearr_34654_34739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (24))){
var inst_34546 = (state_34645[(7)]);
var inst_34563 = (state_34645[(2)]);
var inst_34564 = cljs.core.next.call(null,inst_34546);
var inst_34526 = inst_34564;
var inst_34527 = null;
var inst_34528 = (0);
var inst_34529 = (0);
var state_34645__$1 = (function (){var statearr_34655 = state_34645;
(statearr_34655[(13)] = inst_34529);

(statearr_34655[(14)] = inst_34527);

(statearr_34655[(15)] = inst_34526);

(statearr_34655[(16)] = inst_34528);

(statearr_34655[(17)] = inst_34563);

return statearr_34655;
})();
var statearr_34656_34740 = state_34645__$1;
(statearr_34656_34740[(2)] = null);

(statearr_34656_34740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (39))){
var state_34645__$1 = state_34645;
var statearr_34660_34741 = state_34645__$1;
(statearr_34660_34741[(2)] = null);

(statearr_34660_34741[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (4))){
var inst_34517 = (state_34645[(11)]);
var inst_34517__$1 = (state_34645[(2)]);
var inst_34518 = (inst_34517__$1 == null);
var state_34645__$1 = (function (){var statearr_34661 = state_34645;
(statearr_34661[(11)] = inst_34517__$1);

return statearr_34661;
})();
if(cljs.core.truth_(inst_34518)){
var statearr_34662_34742 = state_34645__$1;
(statearr_34662_34742[(1)] = (5));

} else {
var statearr_34663_34743 = state_34645__$1;
(statearr_34663_34743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (15))){
var inst_34529 = (state_34645[(13)]);
var inst_34527 = (state_34645[(14)]);
var inst_34526 = (state_34645[(15)]);
var inst_34528 = (state_34645[(16)]);
var inst_34542 = (state_34645[(2)]);
var inst_34543 = (inst_34529 + (1));
var tmp34657 = inst_34527;
var tmp34658 = inst_34526;
var tmp34659 = inst_34528;
var inst_34526__$1 = tmp34658;
var inst_34527__$1 = tmp34657;
var inst_34528__$1 = tmp34659;
var inst_34529__$1 = inst_34543;
var state_34645__$1 = (function (){var statearr_34664 = state_34645;
(statearr_34664[(13)] = inst_34529__$1);

(statearr_34664[(18)] = inst_34542);

(statearr_34664[(14)] = inst_34527__$1);

(statearr_34664[(15)] = inst_34526__$1);

(statearr_34664[(16)] = inst_34528__$1);

return statearr_34664;
})();
var statearr_34665_34744 = state_34645__$1;
(statearr_34665_34744[(2)] = null);

(statearr_34665_34744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (21))){
var inst_34567 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34669_34745 = state_34645__$1;
(statearr_34669_34745[(2)] = inst_34567);

(statearr_34669_34745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (31))){
var inst_34593 = (state_34645[(12)]);
var inst_34597 = done.call(null,null);
var inst_34598 = cljs.core.async.untap_STAR_.call(null,m,inst_34593);
var state_34645__$1 = (function (){var statearr_34670 = state_34645;
(statearr_34670[(19)] = inst_34597);

return statearr_34670;
})();
var statearr_34671_34746 = state_34645__$1;
(statearr_34671_34746[(2)] = inst_34598);

(statearr_34671_34746[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (32))){
var inst_34588 = (state_34645[(9)]);
var inst_34586 = (state_34645[(10)]);
var inst_34585 = (state_34645[(20)]);
var inst_34587 = (state_34645[(21)]);
var inst_34600 = (state_34645[(2)]);
var inst_34601 = (inst_34588 + (1));
var tmp34666 = inst_34586;
var tmp34667 = inst_34585;
var tmp34668 = inst_34587;
var inst_34585__$1 = tmp34667;
var inst_34586__$1 = tmp34666;
var inst_34587__$1 = tmp34668;
var inst_34588__$1 = inst_34601;
var state_34645__$1 = (function (){var statearr_34672 = state_34645;
(statearr_34672[(9)] = inst_34588__$1);

(statearr_34672[(10)] = inst_34586__$1);

(statearr_34672[(20)] = inst_34585__$1);

(statearr_34672[(22)] = inst_34600);

(statearr_34672[(21)] = inst_34587__$1);

return statearr_34672;
})();
var statearr_34673_34747 = state_34645__$1;
(statearr_34673_34747[(2)] = null);

(statearr_34673_34747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (40))){
var inst_34613 = (state_34645[(23)]);
var inst_34617 = done.call(null,null);
var inst_34618 = cljs.core.async.untap_STAR_.call(null,m,inst_34613);
var state_34645__$1 = (function (){var statearr_34674 = state_34645;
(statearr_34674[(24)] = inst_34617);

return statearr_34674;
})();
var statearr_34675_34748 = state_34645__$1;
(statearr_34675_34748[(2)] = inst_34618);

(statearr_34675_34748[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (33))){
var inst_34604 = (state_34645[(25)]);
var inst_34606 = cljs.core.chunked_seq_QMARK_.call(null,inst_34604);
var state_34645__$1 = state_34645;
if(inst_34606){
var statearr_34676_34749 = state_34645__$1;
(statearr_34676_34749[(1)] = (36));

} else {
var statearr_34677_34750 = state_34645__$1;
(statearr_34677_34750[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (13))){
var inst_34536 = (state_34645[(26)]);
var inst_34539 = cljs.core.async.close_BANG_.call(null,inst_34536);
var state_34645__$1 = state_34645;
var statearr_34678_34751 = state_34645__$1;
(statearr_34678_34751[(2)] = inst_34539);

(statearr_34678_34751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (22))){
var inst_34557 = (state_34645[(8)]);
var inst_34560 = cljs.core.async.close_BANG_.call(null,inst_34557);
var state_34645__$1 = state_34645;
var statearr_34679_34752 = state_34645__$1;
(statearr_34679_34752[(2)] = inst_34560);

(statearr_34679_34752[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (36))){
var inst_34604 = (state_34645[(25)]);
var inst_34608 = cljs.core.chunk_first.call(null,inst_34604);
var inst_34609 = cljs.core.chunk_rest.call(null,inst_34604);
var inst_34610 = cljs.core.count.call(null,inst_34608);
var inst_34585 = inst_34609;
var inst_34586 = inst_34608;
var inst_34587 = inst_34610;
var inst_34588 = (0);
var state_34645__$1 = (function (){var statearr_34680 = state_34645;
(statearr_34680[(9)] = inst_34588);

(statearr_34680[(10)] = inst_34586);

(statearr_34680[(20)] = inst_34585);

(statearr_34680[(21)] = inst_34587);

return statearr_34680;
})();
var statearr_34681_34753 = state_34645__$1;
(statearr_34681_34753[(2)] = null);

(statearr_34681_34753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (41))){
var inst_34604 = (state_34645[(25)]);
var inst_34620 = (state_34645[(2)]);
var inst_34621 = cljs.core.next.call(null,inst_34604);
var inst_34585 = inst_34621;
var inst_34586 = null;
var inst_34587 = (0);
var inst_34588 = (0);
var state_34645__$1 = (function (){var statearr_34682 = state_34645;
(statearr_34682[(9)] = inst_34588);

(statearr_34682[(10)] = inst_34586);

(statearr_34682[(20)] = inst_34585);

(statearr_34682[(21)] = inst_34587);

(statearr_34682[(27)] = inst_34620);

return statearr_34682;
})();
var statearr_34683_34754 = state_34645__$1;
(statearr_34683_34754[(2)] = null);

(statearr_34683_34754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (43))){
var state_34645__$1 = state_34645;
var statearr_34684_34755 = state_34645__$1;
(statearr_34684_34755[(2)] = null);

(statearr_34684_34755[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (29))){
var inst_34629 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34685_34756 = state_34645__$1;
(statearr_34685_34756[(2)] = inst_34629);

(statearr_34685_34756[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (44))){
var inst_34638 = (state_34645[(2)]);
var state_34645__$1 = (function (){var statearr_34686 = state_34645;
(statearr_34686[(28)] = inst_34638);

return statearr_34686;
})();
var statearr_34687_34757 = state_34645__$1;
(statearr_34687_34757[(2)] = null);

(statearr_34687_34757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (6))){
var inst_34577 = (state_34645[(29)]);
var inst_34576 = cljs.core.deref.call(null,cs);
var inst_34577__$1 = cljs.core.keys.call(null,inst_34576);
var inst_34578 = cljs.core.count.call(null,inst_34577__$1);
var inst_34579 = cljs.core.reset_BANG_.call(null,dctr,inst_34578);
var inst_34584 = cljs.core.seq.call(null,inst_34577__$1);
var inst_34585 = inst_34584;
var inst_34586 = null;
var inst_34587 = (0);
var inst_34588 = (0);
var state_34645__$1 = (function (){var statearr_34688 = state_34645;
(statearr_34688[(9)] = inst_34588);

(statearr_34688[(30)] = inst_34579);

(statearr_34688[(10)] = inst_34586);

(statearr_34688[(29)] = inst_34577__$1);

(statearr_34688[(20)] = inst_34585);

(statearr_34688[(21)] = inst_34587);

return statearr_34688;
})();
var statearr_34689_34758 = state_34645__$1;
(statearr_34689_34758[(2)] = null);

(statearr_34689_34758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (28))){
var inst_34604 = (state_34645[(25)]);
var inst_34585 = (state_34645[(20)]);
var inst_34604__$1 = cljs.core.seq.call(null,inst_34585);
var state_34645__$1 = (function (){var statearr_34690 = state_34645;
(statearr_34690[(25)] = inst_34604__$1);

return statearr_34690;
})();
if(inst_34604__$1){
var statearr_34691_34759 = state_34645__$1;
(statearr_34691_34759[(1)] = (33));

} else {
var statearr_34692_34760 = state_34645__$1;
(statearr_34692_34760[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (25))){
var inst_34588 = (state_34645[(9)]);
var inst_34587 = (state_34645[(21)]);
var inst_34590 = (inst_34588 < inst_34587);
var inst_34591 = inst_34590;
var state_34645__$1 = state_34645;
if(cljs.core.truth_(inst_34591)){
var statearr_34693_34761 = state_34645__$1;
(statearr_34693_34761[(1)] = (27));

} else {
var statearr_34694_34762 = state_34645__$1;
(statearr_34694_34762[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (34))){
var state_34645__$1 = state_34645;
var statearr_34695_34763 = state_34645__$1;
(statearr_34695_34763[(2)] = null);

(statearr_34695_34763[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (17))){
var state_34645__$1 = state_34645;
var statearr_34696_34764 = state_34645__$1;
(statearr_34696_34764[(2)] = null);

(statearr_34696_34764[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (3))){
var inst_34643 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34645__$1,inst_34643);
} else {
if((state_val_34646 === (12))){
var inst_34572 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34697_34765 = state_34645__$1;
(statearr_34697_34765[(2)] = inst_34572);

(statearr_34697_34765[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (2))){
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34645__$1,(4),ch);
} else {
if((state_val_34646 === (23))){
var state_34645__$1 = state_34645;
var statearr_34698_34766 = state_34645__$1;
(statearr_34698_34766[(2)] = null);

(statearr_34698_34766[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (35))){
var inst_34627 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34699_34767 = state_34645__$1;
(statearr_34699_34767[(2)] = inst_34627);

(statearr_34699_34767[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (19))){
var inst_34546 = (state_34645[(7)]);
var inst_34550 = cljs.core.chunk_first.call(null,inst_34546);
var inst_34551 = cljs.core.chunk_rest.call(null,inst_34546);
var inst_34552 = cljs.core.count.call(null,inst_34550);
var inst_34526 = inst_34551;
var inst_34527 = inst_34550;
var inst_34528 = inst_34552;
var inst_34529 = (0);
var state_34645__$1 = (function (){var statearr_34700 = state_34645;
(statearr_34700[(13)] = inst_34529);

(statearr_34700[(14)] = inst_34527);

(statearr_34700[(15)] = inst_34526);

(statearr_34700[(16)] = inst_34528);

return statearr_34700;
})();
var statearr_34701_34768 = state_34645__$1;
(statearr_34701_34768[(2)] = null);

(statearr_34701_34768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (11))){
var inst_34546 = (state_34645[(7)]);
var inst_34526 = (state_34645[(15)]);
var inst_34546__$1 = cljs.core.seq.call(null,inst_34526);
var state_34645__$1 = (function (){var statearr_34702 = state_34645;
(statearr_34702[(7)] = inst_34546__$1);

return statearr_34702;
})();
if(inst_34546__$1){
var statearr_34703_34769 = state_34645__$1;
(statearr_34703_34769[(1)] = (16));

} else {
var statearr_34704_34770 = state_34645__$1;
(statearr_34704_34770[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (9))){
var inst_34574 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34705_34771 = state_34645__$1;
(statearr_34705_34771[(2)] = inst_34574);

(statearr_34705_34771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (5))){
var inst_34524 = cljs.core.deref.call(null,cs);
var inst_34525 = cljs.core.seq.call(null,inst_34524);
var inst_34526 = inst_34525;
var inst_34527 = null;
var inst_34528 = (0);
var inst_34529 = (0);
var state_34645__$1 = (function (){var statearr_34706 = state_34645;
(statearr_34706[(13)] = inst_34529);

(statearr_34706[(14)] = inst_34527);

(statearr_34706[(15)] = inst_34526);

(statearr_34706[(16)] = inst_34528);

return statearr_34706;
})();
var statearr_34707_34772 = state_34645__$1;
(statearr_34707_34772[(2)] = null);

(statearr_34707_34772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (14))){
var state_34645__$1 = state_34645;
var statearr_34708_34773 = state_34645__$1;
(statearr_34708_34773[(2)] = null);

(statearr_34708_34773[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (45))){
var inst_34635 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34709_34774 = state_34645__$1;
(statearr_34709_34774[(2)] = inst_34635);

(statearr_34709_34774[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (26))){
var inst_34577 = (state_34645[(29)]);
var inst_34631 = (state_34645[(2)]);
var inst_34632 = cljs.core.seq.call(null,inst_34577);
var state_34645__$1 = (function (){var statearr_34710 = state_34645;
(statearr_34710[(31)] = inst_34631);

return statearr_34710;
})();
if(inst_34632){
var statearr_34711_34775 = state_34645__$1;
(statearr_34711_34775[(1)] = (42));

} else {
var statearr_34712_34776 = state_34645__$1;
(statearr_34712_34776[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (16))){
var inst_34546 = (state_34645[(7)]);
var inst_34548 = cljs.core.chunked_seq_QMARK_.call(null,inst_34546);
var state_34645__$1 = state_34645;
if(inst_34548){
var statearr_34713_34777 = state_34645__$1;
(statearr_34713_34777[(1)] = (19));

} else {
var statearr_34714_34778 = state_34645__$1;
(statearr_34714_34778[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (38))){
var inst_34624 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34715_34779 = state_34645__$1;
(statearr_34715_34779[(2)] = inst_34624);

(statearr_34715_34779[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (30))){
var state_34645__$1 = state_34645;
var statearr_34716_34780 = state_34645__$1;
(statearr_34716_34780[(2)] = null);

(statearr_34716_34780[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (10))){
var inst_34529 = (state_34645[(13)]);
var inst_34527 = (state_34645[(14)]);
var inst_34535 = cljs.core._nth.call(null,inst_34527,inst_34529);
var inst_34536 = cljs.core.nth.call(null,inst_34535,(0),null);
var inst_34537 = cljs.core.nth.call(null,inst_34535,(1),null);
var state_34645__$1 = (function (){var statearr_34717 = state_34645;
(statearr_34717[(26)] = inst_34536);

return statearr_34717;
})();
if(cljs.core.truth_(inst_34537)){
var statearr_34718_34781 = state_34645__$1;
(statearr_34718_34781[(1)] = (13));

} else {
var statearr_34719_34782 = state_34645__$1;
(statearr_34719_34782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (18))){
var inst_34570 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34720_34783 = state_34645__$1;
(statearr_34720_34783[(2)] = inst_34570);

(statearr_34720_34783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (42))){
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34645__$1,(45),dchan);
} else {
if((state_val_34646 === (37))){
var inst_34604 = (state_34645[(25)]);
var inst_34613 = (state_34645[(23)]);
var inst_34517 = (state_34645[(11)]);
var inst_34613__$1 = cljs.core.first.call(null,inst_34604);
var inst_34614 = cljs.core.async.put_BANG_.call(null,inst_34613__$1,inst_34517,done);
var state_34645__$1 = (function (){var statearr_34721 = state_34645;
(statearr_34721[(23)] = inst_34613__$1);

return statearr_34721;
})();
if(cljs.core.truth_(inst_34614)){
var statearr_34722_34784 = state_34645__$1;
(statearr_34722_34784[(1)] = (39));

} else {
var statearr_34723_34785 = state_34645__$1;
(statearr_34723_34785[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (8))){
var inst_34529 = (state_34645[(13)]);
var inst_34528 = (state_34645[(16)]);
var inst_34531 = (inst_34529 < inst_34528);
var inst_34532 = inst_34531;
var state_34645__$1 = state_34645;
if(cljs.core.truth_(inst_34532)){
var statearr_34724_34786 = state_34645__$1;
(statearr_34724_34786[(1)] = (10));

} else {
var statearr_34725_34787 = state_34645__$1;
(statearr_34725_34787[(1)] = (11));

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
});})(c__33426__auto___34733,cs,m,dchan,dctr,done))
;
return ((function (switch__33314__auto__,c__33426__auto___34733,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33315__auto__ = null;
var cljs$core$async$mult_$_state_machine__33315__auto____0 = (function (){
var statearr_34729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34729[(0)] = cljs$core$async$mult_$_state_machine__33315__auto__);

(statearr_34729[(1)] = (1));

return statearr_34729;
});
var cljs$core$async$mult_$_state_machine__33315__auto____1 = (function (state_34645){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_34645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e34730){if((e34730 instanceof Object)){
var ex__33318__auto__ = e34730;
var statearr_34731_34788 = state_34645;
(statearr_34731_34788[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34789 = state_34645;
state_34645 = G__34789;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33315__auto__ = function(state_34645){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33315__auto____1.call(this,state_34645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33315__auto____0;
cljs$core$async$mult_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33315__auto____1;
return cljs$core$async$mult_$_state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___34733,cs,m,dchan,dctr,done))
})();
var state__33428__auto__ = (function (){var statearr_34732 = f__33427__auto__.call(null);
(statearr_34732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___34733);

return statearr_34732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___34733,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args34790 = [];
var len__26809__auto___34793 = arguments.length;
var i__26810__auto___34794 = (0);
while(true){
if((i__26810__auto___34794 < len__26809__auto___34793)){
args34790.push((arguments[i__26810__auto___34794]));

var G__34795 = (i__26810__auto___34794 + (1));
i__26810__auto___34794 = G__34795;
continue;
} else {
}
break;
}

var G__34792 = args34790.length;
switch (G__34792) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34790.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26406__auto__ = (((m == null))?null:m);
var m__26407__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,m,ch);
} else {
var m__26407__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26406__auto__ = (((m == null))?null:m);
var m__26407__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,m,ch);
} else {
var m__26407__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26406__auto__ = (((m == null))?null:m);
var m__26407__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,m);
} else {
var m__26407__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26406__auto__ = (((m == null))?null:m);
var m__26407__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,m,state_map);
} else {
var m__26407__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26406__auto__ = (((m == null))?null:m);
var m__26407__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,m,mode);
} else {
var m__26407__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26816__auto__ = [];
var len__26809__auto___34807 = arguments.length;
var i__26810__auto___34808 = (0);
while(true){
if((i__26810__auto___34808 < len__26809__auto___34807)){
args__26816__auto__.push((arguments[i__26810__auto___34808]));

var G__34809 = (i__26810__auto___34808 + (1));
i__26810__auto___34808 = G__34809;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((3) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26817__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34801){
var map__34802 = p__34801;
var map__34802__$1 = ((((!((map__34802 == null)))?((((map__34802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34802):map__34802);
var opts = map__34802__$1;
var statearr_34804_34810 = state;
(statearr_34804_34810[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__34802,map__34802__$1,opts){
return (function (val){
var statearr_34805_34811 = state;
(statearr_34805_34811[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34802,map__34802__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_34806_34812 = state;
(statearr_34806_34812[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34797){
var G__34798 = cljs.core.first.call(null,seq34797);
var seq34797__$1 = cljs.core.next.call(null,seq34797);
var G__34799 = cljs.core.first.call(null,seq34797__$1);
var seq34797__$2 = cljs.core.next.call(null,seq34797__$1);
var G__34800 = cljs.core.first.call(null,seq34797__$2);
var seq34797__$3 = cljs.core.next.call(null,seq34797__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34798,G__34799,G__34800,seq34797__$3);
});
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34976 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34977){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34977 = meta34977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34978,meta34977__$1){
var self__ = this;
var _34978__$1 = this;
return (new cljs.core.async.t_cljs$core$async34976(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34977__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34978){
var self__ = this;
var _34978__$1 = this;
return self__.meta34977;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34976.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34976.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async34976.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34976.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34976.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34976.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34976.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34976.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34977","meta34977",1513654001,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34976";

cljs.core.async.t_cljs$core$async34976.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cljs.core.async/t_cljs$core$async34976");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34976 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34976(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34977){
return (new cljs.core.async.t_cljs$core$async34976(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34977));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34976(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33426__auto___35139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___35139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___35139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35076){
var state_val_35077 = (state_35076[(1)]);
if((state_val_35077 === (7))){
var inst_34994 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
var statearr_35078_35140 = state_35076__$1;
(statearr_35078_35140[(2)] = inst_34994);

(statearr_35078_35140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (20))){
var inst_35006 = (state_35076[(7)]);
var state_35076__$1 = state_35076;
var statearr_35079_35141 = state_35076__$1;
(statearr_35079_35141[(2)] = inst_35006);

(statearr_35079_35141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (27))){
var state_35076__$1 = state_35076;
var statearr_35080_35142 = state_35076__$1;
(statearr_35080_35142[(2)] = null);

(statearr_35080_35142[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (1))){
var inst_34982 = (state_35076[(8)]);
var inst_34982__$1 = calc_state.call(null);
var inst_34984 = (inst_34982__$1 == null);
var inst_34985 = cljs.core.not.call(null,inst_34984);
var state_35076__$1 = (function (){var statearr_35081 = state_35076;
(statearr_35081[(8)] = inst_34982__$1);

return statearr_35081;
})();
if(inst_34985){
var statearr_35082_35143 = state_35076__$1;
(statearr_35082_35143[(1)] = (2));

} else {
var statearr_35083_35144 = state_35076__$1;
(statearr_35083_35144[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (24))){
var inst_35050 = (state_35076[(9)]);
var inst_35029 = (state_35076[(10)]);
var inst_35036 = (state_35076[(11)]);
var inst_35050__$1 = inst_35029.call(null,inst_35036);
var state_35076__$1 = (function (){var statearr_35084 = state_35076;
(statearr_35084[(9)] = inst_35050__$1);

return statearr_35084;
})();
if(cljs.core.truth_(inst_35050__$1)){
var statearr_35085_35145 = state_35076__$1;
(statearr_35085_35145[(1)] = (29));

} else {
var statearr_35086_35146 = state_35076__$1;
(statearr_35086_35146[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (4))){
var inst_34997 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
if(cljs.core.truth_(inst_34997)){
var statearr_35087_35147 = state_35076__$1;
(statearr_35087_35147[(1)] = (8));

} else {
var statearr_35088_35148 = state_35076__$1;
(statearr_35088_35148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (15))){
var inst_35023 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
if(cljs.core.truth_(inst_35023)){
var statearr_35089_35149 = state_35076__$1;
(statearr_35089_35149[(1)] = (19));

} else {
var statearr_35090_35150 = state_35076__$1;
(statearr_35090_35150[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (21))){
var inst_35028 = (state_35076[(12)]);
var inst_35028__$1 = (state_35076[(2)]);
var inst_35029 = cljs.core.get.call(null,inst_35028__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35030 = cljs.core.get.call(null,inst_35028__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35031 = cljs.core.get.call(null,inst_35028__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35076__$1 = (function (){var statearr_35091 = state_35076;
(statearr_35091[(10)] = inst_35029);

(statearr_35091[(13)] = inst_35030);

(statearr_35091[(12)] = inst_35028__$1);

return statearr_35091;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35076__$1,(22),inst_35031);
} else {
if((state_val_35077 === (31))){
var inst_35058 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
if(cljs.core.truth_(inst_35058)){
var statearr_35092_35151 = state_35076__$1;
(statearr_35092_35151[(1)] = (32));

} else {
var statearr_35093_35152 = state_35076__$1;
(statearr_35093_35152[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (32))){
var inst_35035 = (state_35076[(14)]);
var state_35076__$1 = state_35076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35076__$1,(35),out,inst_35035);
} else {
if((state_val_35077 === (33))){
var inst_35028 = (state_35076[(12)]);
var inst_35006 = inst_35028;
var state_35076__$1 = (function (){var statearr_35094 = state_35076;
(statearr_35094[(7)] = inst_35006);

return statearr_35094;
})();
var statearr_35095_35153 = state_35076__$1;
(statearr_35095_35153[(2)] = null);

(statearr_35095_35153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (13))){
var inst_35006 = (state_35076[(7)]);
var inst_35013 = inst_35006.cljs$lang$protocol_mask$partition0$;
var inst_35014 = (inst_35013 & (64));
var inst_35015 = inst_35006.cljs$core$ISeq$;
var inst_35016 = (inst_35014) || (inst_35015);
var state_35076__$1 = state_35076;
if(cljs.core.truth_(inst_35016)){
var statearr_35096_35154 = state_35076__$1;
(statearr_35096_35154[(1)] = (16));

} else {
var statearr_35097_35155 = state_35076__$1;
(statearr_35097_35155[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (22))){
var inst_35035 = (state_35076[(14)]);
var inst_35036 = (state_35076[(11)]);
var inst_35034 = (state_35076[(2)]);
var inst_35035__$1 = cljs.core.nth.call(null,inst_35034,(0),null);
var inst_35036__$1 = cljs.core.nth.call(null,inst_35034,(1),null);
var inst_35037 = (inst_35035__$1 == null);
var inst_35038 = cljs.core._EQ_.call(null,inst_35036__$1,change);
var inst_35039 = (inst_35037) || (inst_35038);
var state_35076__$1 = (function (){var statearr_35098 = state_35076;
(statearr_35098[(14)] = inst_35035__$1);

(statearr_35098[(11)] = inst_35036__$1);

return statearr_35098;
})();
if(cljs.core.truth_(inst_35039)){
var statearr_35099_35156 = state_35076__$1;
(statearr_35099_35156[(1)] = (23));

} else {
var statearr_35100_35157 = state_35076__$1;
(statearr_35100_35157[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (36))){
var inst_35028 = (state_35076[(12)]);
var inst_35006 = inst_35028;
var state_35076__$1 = (function (){var statearr_35101 = state_35076;
(statearr_35101[(7)] = inst_35006);

return statearr_35101;
})();
var statearr_35102_35158 = state_35076__$1;
(statearr_35102_35158[(2)] = null);

(statearr_35102_35158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (29))){
var inst_35050 = (state_35076[(9)]);
var state_35076__$1 = state_35076;
var statearr_35103_35159 = state_35076__$1;
(statearr_35103_35159[(2)] = inst_35050);

(statearr_35103_35159[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (6))){
var state_35076__$1 = state_35076;
var statearr_35104_35160 = state_35076__$1;
(statearr_35104_35160[(2)] = false);

(statearr_35104_35160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (28))){
var inst_35046 = (state_35076[(2)]);
var inst_35047 = calc_state.call(null);
var inst_35006 = inst_35047;
var state_35076__$1 = (function (){var statearr_35105 = state_35076;
(statearr_35105[(7)] = inst_35006);

(statearr_35105[(15)] = inst_35046);

return statearr_35105;
})();
var statearr_35106_35161 = state_35076__$1;
(statearr_35106_35161[(2)] = null);

(statearr_35106_35161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (25))){
var inst_35072 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
var statearr_35107_35162 = state_35076__$1;
(statearr_35107_35162[(2)] = inst_35072);

(statearr_35107_35162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (34))){
var inst_35070 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
var statearr_35108_35163 = state_35076__$1;
(statearr_35108_35163[(2)] = inst_35070);

(statearr_35108_35163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (17))){
var state_35076__$1 = state_35076;
var statearr_35109_35164 = state_35076__$1;
(statearr_35109_35164[(2)] = false);

(statearr_35109_35164[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (3))){
var state_35076__$1 = state_35076;
var statearr_35110_35165 = state_35076__$1;
(statearr_35110_35165[(2)] = false);

(statearr_35110_35165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (12))){
var inst_35074 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35076__$1,inst_35074);
} else {
if((state_val_35077 === (2))){
var inst_34982 = (state_35076[(8)]);
var inst_34987 = inst_34982.cljs$lang$protocol_mask$partition0$;
var inst_34988 = (inst_34987 & (64));
var inst_34989 = inst_34982.cljs$core$ISeq$;
var inst_34990 = (inst_34988) || (inst_34989);
var state_35076__$1 = state_35076;
if(cljs.core.truth_(inst_34990)){
var statearr_35111_35166 = state_35076__$1;
(statearr_35111_35166[(1)] = (5));

} else {
var statearr_35112_35167 = state_35076__$1;
(statearr_35112_35167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (23))){
var inst_35035 = (state_35076[(14)]);
var inst_35041 = (inst_35035 == null);
var state_35076__$1 = state_35076;
if(cljs.core.truth_(inst_35041)){
var statearr_35113_35168 = state_35076__$1;
(statearr_35113_35168[(1)] = (26));

} else {
var statearr_35114_35169 = state_35076__$1;
(statearr_35114_35169[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (35))){
var inst_35061 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
if(cljs.core.truth_(inst_35061)){
var statearr_35115_35170 = state_35076__$1;
(statearr_35115_35170[(1)] = (36));

} else {
var statearr_35116_35171 = state_35076__$1;
(statearr_35116_35171[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (19))){
var inst_35006 = (state_35076[(7)]);
var inst_35025 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35006);
var state_35076__$1 = state_35076;
var statearr_35117_35172 = state_35076__$1;
(statearr_35117_35172[(2)] = inst_35025);

(statearr_35117_35172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (11))){
var inst_35006 = (state_35076[(7)]);
var inst_35010 = (inst_35006 == null);
var inst_35011 = cljs.core.not.call(null,inst_35010);
var state_35076__$1 = state_35076;
if(inst_35011){
var statearr_35118_35173 = state_35076__$1;
(statearr_35118_35173[(1)] = (13));

} else {
var statearr_35119_35174 = state_35076__$1;
(statearr_35119_35174[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (9))){
var inst_34982 = (state_35076[(8)]);
var state_35076__$1 = state_35076;
var statearr_35120_35175 = state_35076__$1;
(statearr_35120_35175[(2)] = inst_34982);

(statearr_35120_35175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (5))){
var state_35076__$1 = state_35076;
var statearr_35121_35176 = state_35076__$1;
(statearr_35121_35176[(2)] = true);

(statearr_35121_35176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (14))){
var state_35076__$1 = state_35076;
var statearr_35122_35177 = state_35076__$1;
(statearr_35122_35177[(2)] = false);

(statearr_35122_35177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (26))){
var inst_35036 = (state_35076[(11)]);
var inst_35043 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35036);
var state_35076__$1 = state_35076;
var statearr_35123_35178 = state_35076__$1;
(statearr_35123_35178[(2)] = inst_35043);

(statearr_35123_35178[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (16))){
var state_35076__$1 = state_35076;
var statearr_35124_35179 = state_35076__$1;
(statearr_35124_35179[(2)] = true);

(statearr_35124_35179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (38))){
var inst_35066 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
var statearr_35125_35180 = state_35076__$1;
(statearr_35125_35180[(2)] = inst_35066);

(statearr_35125_35180[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (30))){
var inst_35029 = (state_35076[(10)]);
var inst_35030 = (state_35076[(13)]);
var inst_35036 = (state_35076[(11)]);
var inst_35053 = cljs.core.empty_QMARK_.call(null,inst_35029);
var inst_35054 = inst_35030.call(null,inst_35036);
var inst_35055 = cljs.core.not.call(null,inst_35054);
var inst_35056 = (inst_35053) && (inst_35055);
var state_35076__$1 = state_35076;
var statearr_35126_35181 = state_35076__$1;
(statearr_35126_35181[(2)] = inst_35056);

(statearr_35126_35181[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (10))){
var inst_34982 = (state_35076[(8)]);
var inst_35002 = (state_35076[(2)]);
var inst_35003 = cljs.core.get.call(null,inst_35002,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35004 = cljs.core.get.call(null,inst_35002,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35005 = cljs.core.get.call(null,inst_35002,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35006 = inst_34982;
var state_35076__$1 = (function (){var statearr_35127 = state_35076;
(statearr_35127[(16)] = inst_35004);

(statearr_35127[(17)] = inst_35005);

(statearr_35127[(18)] = inst_35003);

(statearr_35127[(7)] = inst_35006);

return statearr_35127;
})();
var statearr_35128_35182 = state_35076__$1;
(statearr_35128_35182[(2)] = null);

(statearr_35128_35182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (18))){
var inst_35020 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
var statearr_35129_35183 = state_35076__$1;
(statearr_35129_35183[(2)] = inst_35020);

(statearr_35129_35183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (37))){
var state_35076__$1 = state_35076;
var statearr_35130_35184 = state_35076__$1;
(statearr_35130_35184[(2)] = null);

(statearr_35130_35184[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (8))){
var inst_34982 = (state_35076[(8)]);
var inst_34999 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34982);
var state_35076__$1 = state_35076;
var statearr_35131_35185 = state_35076__$1;
(statearr_35131_35185[(2)] = inst_34999);

(statearr_35131_35185[(1)] = (10));


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
});})(c__33426__auto___35139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33314__auto__,c__33426__auto___35139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33315__auto__ = null;
var cljs$core$async$mix_$_state_machine__33315__auto____0 = (function (){
var statearr_35135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35135[(0)] = cljs$core$async$mix_$_state_machine__33315__auto__);

(statearr_35135[(1)] = (1));

return statearr_35135;
});
var cljs$core$async$mix_$_state_machine__33315__auto____1 = (function (state_35076){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_35076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e35136){if((e35136 instanceof Object)){
var ex__33318__auto__ = e35136;
var statearr_35137_35186 = state_35076;
(statearr_35137_35186[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35187 = state_35076;
state_35076 = G__35187;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33315__auto__ = function(state_35076){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33315__auto____1.call(this,state_35076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33315__auto____0;
cljs$core$async$mix_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33315__auto____1;
return cljs$core$async$mix_$_state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___35139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33428__auto__ = (function (){var statearr_35138 = f__33427__auto__.call(null);
(statearr_35138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___35139);

return statearr_35138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___35139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26406__auto__ = (((p == null))?null:p);
var m__26407__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26407__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26406__auto__ = (((p == null))?null:p);
var m__26407__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,p,v,ch);
} else {
var m__26407__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args35188 = [];
var len__26809__auto___35191 = arguments.length;
var i__26810__auto___35192 = (0);
while(true){
if((i__26810__auto___35192 < len__26809__auto___35191)){
args35188.push((arguments[i__26810__auto___35192]));

var G__35193 = (i__26810__auto___35192 + (1));
i__26810__auto___35192 = G__35193;
continue;
} else {
}
break;
}

var G__35190 = args35188.length;
switch (G__35190) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35188.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26406__auto__ = (((p == null))?null:p);
var m__26407__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,p);
} else {
var m__26407__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26406__auto__ = (((p == null))?null:p);
var m__26407__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,p,v);
} else {
var m__26407__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
var args35196 = [];
var len__26809__auto___35321 = arguments.length;
var i__26810__auto___35322 = (0);
while(true){
if((i__26810__auto___35322 < len__26809__auto___35321)){
args35196.push((arguments[i__26810__auto___35322]));

var G__35323 = (i__26810__auto___35322 + (1));
i__26810__auto___35322 = G__35323;
continue;
} else {
}
break;
}

var G__35198 = args35196.length;
switch (G__35198) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35196.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25751__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25751__auto__,mults){
return (function (p1__35195_SHARP_){
if(cljs.core.truth_(p1__35195_SHARP_.call(null,topic))){
return p1__35195_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35195_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35199 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35200){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35200 = meta35200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35201,meta35200__$1){
var self__ = this;
var _35201__$1 = this;
return (new cljs.core.async.t_cljs$core$async35199(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35200__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35201){
var self__ = this;
var _35201__$1 = this;
return self__.meta35200;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35199.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35199.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35199.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async35199.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35199.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35199.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35199.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35199.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35200","meta35200",1166577256,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35199";

cljs.core.async.t_cljs$core$async35199.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cljs.core.async/t_cljs$core$async35199");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35199 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35199(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35200){
return (new cljs.core.async.t_cljs$core$async35199(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35200));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35199(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33426__auto___35325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___35325,mults,ensure_mult,p){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___35325,mults,ensure_mult,p){
return (function (state_35273){
var state_val_35274 = (state_35273[(1)]);
if((state_val_35274 === (7))){
var inst_35269 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35275_35326 = state_35273__$1;
(statearr_35275_35326[(2)] = inst_35269);

(statearr_35275_35326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (20))){
var state_35273__$1 = state_35273;
var statearr_35276_35327 = state_35273__$1;
(statearr_35276_35327[(2)] = null);

(statearr_35276_35327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (1))){
var state_35273__$1 = state_35273;
var statearr_35277_35328 = state_35273__$1;
(statearr_35277_35328[(2)] = null);

(statearr_35277_35328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (24))){
var inst_35252 = (state_35273[(7)]);
var inst_35261 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35252);
var state_35273__$1 = state_35273;
var statearr_35278_35329 = state_35273__$1;
(statearr_35278_35329[(2)] = inst_35261);

(statearr_35278_35329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (4))){
var inst_35204 = (state_35273[(8)]);
var inst_35204__$1 = (state_35273[(2)]);
var inst_35205 = (inst_35204__$1 == null);
var state_35273__$1 = (function (){var statearr_35279 = state_35273;
(statearr_35279[(8)] = inst_35204__$1);

return statearr_35279;
})();
if(cljs.core.truth_(inst_35205)){
var statearr_35280_35330 = state_35273__$1;
(statearr_35280_35330[(1)] = (5));

} else {
var statearr_35281_35331 = state_35273__$1;
(statearr_35281_35331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (15))){
var inst_35246 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35282_35332 = state_35273__$1;
(statearr_35282_35332[(2)] = inst_35246);

(statearr_35282_35332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (21))){
var inst_35266 = (state_35273[(2)]);
var state_35273__$1 = (function (){var statearr_35283 = state_35273;
(statearr_35283[(9)] = inst_35266);

return statearr_35283;
})();
var statearr_35284_35333 = state_35273__$1;
(statearr_35284_35333[(2)] = null);

(statearr_35284_35333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (13))){
var inst_35228 = (state_35273[(10)]);
var inst_35230 = cljs.core.chunked_seq_QMARK_.call(null,inst_35228);
var state_35273__$1 = state_35273;
if(inst_35230){
var statearr_35285_35334 = state_35273__$1;
(statearr_35285_35334[(1)] = (16));

} else {
var statearr_35286_35335 = state_35273__$1;
(statearr_35286_35335[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (22))){
var inst_35258 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
if(cljs.core.truth_(inst_35258)){
var statearr_35287_35336 = state_35273__$1;
(statearr_35287_35336[(1)] = (23));

} else {
var statearr_35288_35337 = state_35273__$1;
(statearr_35288_35337[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (6))){
var inst_35252 = (state_35273[(7)]);
var inst_35254 = (state_35273[(11)]);
var inst_35204 = (state_35273[(8)]);
var inst_35252__$1 = topic_fn.call(null,inst_35204);
var inst_35253 = cljs.core.deref.call(null,mults);
var inst_35254__$1 = cljs.core.get.call(null,inst_35253,inst_35252__$1);
var state_35273__$1 = (function (){var statearr_35289 = state_35273;
(statearr_35289[(7)] = inst_35252__$1);

(statearr_35289[(11)] = inst_35254__$1);

return statearr_35289;
})();
if(cljs.core.truth_(inst_35254__$1)){
var statearr_35290_35338 = state_35273__$1;
(statearr_35290_35338[(1)] = (19));

} else {
var statearr_35291_35339 = state_35273__$1;
(statearr_35291_35339[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (25))){
var inst_35263 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35292_35340 = state_35273__$1;
(statearr_35292_35340[(2)] = inst_35263);

(statearr_35292_35340[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (17))){
var inst_35228 = (state_35273[(10)]);
var inst_35237 = cljs.core.first.call(null,inst_35228);
var inst_35238 = cljs.core.async.muxch_STAR_.call(null,inst_35237);
var inst_35239 = cljs.core.async.close_BANG_.call(null,inst_35238);
var inst_35240 = cljs.core.next.call(null,inst_35228);
var inst_35214 = inst_35240;
var inst_35215 = null;
var inst_35216 = (0);
var inst_35217 = (0);
var state_35273__$1 = (function (){var statearr_35293 = state_35273;
(statearr_35293[(12)] = inst_35239);

(statearr_35293[(13)] = inst_35217);

(statearr_35293[(14)] = inst_35215);

(statearr_35293[(15)] = inst_35214);

(statearr_35293[(16)] = inst_35216);

return statearr_35293;
})();
var statearr_35294_35341 = state_35273__$1;
(statearr_35294_35341[(2)] = null);

(statearr_35294_35341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (3))){
var inst_35271 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35273__$1,inst_35271);
} else {
if((state_val_35274 === (12))){
var inst_35248 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35295_35342 = state_35273__$1;
(statearr_35295_35342[(2)] = inst_35248);

(statearr_35295_35342[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (2))){
var state_35273__$1 = state_35273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35273__$1,(4),ch);
} else {
if((state_val_35274 === (23))){
var state_35273__$1 = state_35273;
var statearr_35296_35343 = state_35273__$1;
(statearr_35296_35343[(2)] = null);

(statearr_35296_35343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (19))){
var inst_35254 = (state_35273[(11)]);
var inst_35204 = (state_35273[(8)]);
var inst_35256 = cljs.core.async.muxch_STAR_.call(null,inst_35254);
var state_35273__$1 = state_35273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35273__$1,(22),inst_35256,inst_35204);
} else {
if((state_val_35274 === (11))){
var inst_35214 = (state_35273[(15)]);
var inst_35228 = (state_35273[(10)]);
var inst_35228__$1 = cljs.core.seq.call(null,inst_35214);
var state_35273__$1 = (function (){var statearr_35297 = state_35273;
(statearr_35297[(10)] = inst_35228__$1);

return statearr_35297;
})();
if(inst_35228__$1){
var statearr_35298_35344 = state_35273__$1;
(statearr_35298_35344[(1)] = (13));

} else {
var statearr_35299_35345 = state_35273__$1;
(statearr_35299_35345[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (9))){
var inst_35250 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35300_35346 = state_35273__$1;
(statearr_35300_35346[(2)] = inst_35250);

(statearr_35300_35346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (5))){
var inst_35211 = cljs.core.deref.call(null,mults);
var inst_35212 = cljs.core.vals.call(null,inst_35211);
var inst_35213 = cljs.core.seq.call(null,inst_35212);
var inst_35214 = inst_35213;
var inst_35215 = null;
var inst_35216 = (0);
var inst_35217 = (0);
var state_35273__$1 = (function (){var statearr_35301 = state_35273;
(statearr_35301[(13)] = inst_35217);

(statearr_35301[(14)] = inst_35215);

(statearr_35301[(15)] = inst_35214);

(statearr_35301[(16)] = inst_35216);

return statearr_35301;
})();
var statearr_35302_35347 = state_35273__$1;
(statearr_35302_35347[(2)] = null);

(statearr_35302_35347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (14))){
var state_35273__$1 = state_35273;
var statearr_35306_35348 = state_35273__$1;
(statearr_35306_35348[(2)] = null);

(statearr_35306_35348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (16))){
var inst_35228 = (state_35273[(10)]);
var inst_35232 = cljs.core.chunk_first.call(null,inst_35228);
var inst_35233 = cljs.core.chunk_rest.call(null,inst_35228);
var inst_35234 = cljs.core.count.call(null,inst_35232);
var inst_35214 = inst_35233;
var inst_35215 = inst_35232;
var inst_35216 = inst_35234;
var inst_35217 = (0);
var state_35273__$1 = (function (){var statearr_35307 = state_35273;
(statearr_35307[(13)] = inst_35217);

(statearr_35307[(14)] = inst_35215);

(statearr_35307[(15)] = inst_35214);

(statearr_35307[(16)] = inst_35216);

return statearr_35307;
})();
var statearr_35308_35349 = state_35273__$1;
(statearr_35308_35349[(2)] = null);

(statearr_35308_35349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (10))){
var inst_35217 = (state_35273[(13)]);
var inst_35215 = (state_35273[(14)]);
var inst_35214 = (state_35273[(15)]);
var inst_35216 = (state_35273[(16)]);
var inst_35222 = cljs.core._nth.call(null,inst_35215,inst_35217);
var inst_35223 = cljs.core.async.muxch_STAR_.call(null,inst_35222);
var inst_35224 = cljs.core.async.close_BANG_.call(null,inst_35223);
var inst_35225 = (inst_35217 + (1));
var tmp35303 = inst_35215;
var tmp35304 = inst_35214;
var tmp35305 = inst_35216;
var inst_35214__$1 = tmp35304;
var inst_35215__$1 = tmp35303;
var inst_35216__$1 = tmp35305;
var inst_35217__$1 = inst_35225;
var state_35273__$1 = (function (){var statearr_35309 = state_35273;
(statearr_35309[(13)] = inst_35217__$1);

(statearr_35309[(14)] = inst_35215__$1);

(statearr_35309[(17)] = inst_35224);

(statearr_35309[(15)] = inst_35214__$1);

(statearr_35309[(16)] = inst_35216__$1);

return statearr_35309;
})();
var statearr_35310_35350 = state_35273__$1;
(statearr_35310_35350[(2)] = null);

(statearr_35310_35350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (18))){
var inst_35243 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35311_35351 = state_35273__$1;
(statearr_35311_35351[(2)] = inst_35243);

(statearr_35311_35351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (8))){
var inst_35217 = (state_35273[(13)]);
var inst_35216 = (state_35273[(16)]);
var inst_35219 = (inst_35217 < inst_35216);
var inst_35220 = inst_35219;
var state_35273__$1 = state_35273;
if(cljs.core.truth_(inst_35220)){
var statearr_35312_35352 = state_35273__$1;
(statearr_35312_35352[(1)] = (10));

} else {
var statearr_35313_35353 = state_35273__$1;
(statearr_35313_35353[(1)] = (11));

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
});})(c__33426__auto___35325,mults,ensure_mult,p))
;
return ((function (switch__33314__auto__,c__33426__auto___35325,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33315__auto__ = null;
var cljs$core$async$state_machine__33315__auto____0 = (function (){
var statearr_35317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35317[(0)] = cljs$core$async$state_machine__33315__auto__);

(statearr_35317[(1)] = (1));

return statearr_35317;
});
var cljs$core$async$state_machine__33315__auto____1 = (function (state_35273){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_35273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e35318){if((e35318 instanceof Object)){
var ex__33318__auto__ = e35318;
var statearr_35319_35354 = state_35273;
(statearr_35319_35354[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35355 = state_35273;
state_35273 = G__35355;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$state_machine__33315__auto__ = function(state_35273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33315__auto____1.call(this,state_35273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33315__auto____0;
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33315__auto____1;
return cljs$core$async$state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___35325,mults,ensure_mult,p))
})();
var state__33428__auto__ = (function (){var statearr_35320 = f__33427__auto__.call(null);
(statearr_35320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___35325);

return statearr_35320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___35325,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args35356 = [];
var len__26809__auto___35359 = arguments.length;
var i__26810__auto___35360 = (0);
while(true){
if((i__26810__auto___35360 < len__26809__auto___35359)){
args35356.push((arguments[i__26810__auto___35360]));

var G__35361 = (i__26810__auto___35360 + (1));
i__26810__auto___35360 = G__35361;
continue;
} else {
}
break;
}

var G__35358 = args35356.length;
switch (G__35358) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35356.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args35363 = [];
var len__26809__auto___35366 = arguments.length;
var i__26810__auto___35367 = (0);
while(true){
if((i__26810__auto___35367 < len__26809__auto___35366)){
args35363.push((arguments[i__26810__auto___35367]));

var G__35368 = (i__26810__auto___35367 + (1));
i__26810__auto___35367 = G__35368;
continue;
} else {
}
break;
}

var G__35365 = args35363.length;
switch (G__35365) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35363.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
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
var args35370 = [];
var len__26809__auto___35441 = arguments.length;
var i__26810__auto___35442 = (0);
while(true){
if((i__26810__auto___35442 < len__26809__auto___35441)){
args35370.push((arguments[i__26810__auto___35442]));

var G__35443 = (i__26810__auto___35442 + (1));
i__26810__auto___35442 = G__35443;
continue;
} else {
}
break;
}

var G__35372 = args35370.length;
switch (G__35372) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35370.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33426__auto___35445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___35445,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___35445,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35411){
var state_val_35412 = (state_35411[(1)]);
if((state_val_35412 === (7))){
var state_35411__$1 = state_35411;
var statearr_35413_35446 = state_35411__$1;
(statearr_35413_35446[(2)] = null);

(statearr_35413_35446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (1))){
var state_35411__$1 = state_35411;
var statearr_35414_35447 = state_35411__$1;
(statearr_35414_35447[(2)] = null);

(statearr_35414_35447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (4))){
var inst_35375 = (state_35411[(7)]);
var inst_35377 = (inst_35375 < cnt);
var state_35411__$1 = state_35411;
if(cljs.core.truth_(inst_35377)){
var statearr_35415_35448 = state_35411__$1;
(statearr_35415_35448[(1)] = (6));

} else {
var statearr_35416_35449 = state_35411__$1;
(statearr_35416_35449[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (15))){
var inst_35407 = (state_35411[(2)]);
var state_35411__$1 = state_35411;
var statearr_35417_35450 = state_35411__$1;
(statearr_35417_35450[(2)] = inst_35407);

(statearr_35417_35450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (13))){
var inst_35400 = cljs.core.async.close_BANG_.call(null,out);
var state_35411__$1 = state_35411;
var statearr_35418_35451 = state_35411__$1;
(statearr_35418_35451[(2)] = inst_35400);

(statearr_35418_35451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (6))){
var state_35411__$1 = state_35411;
var statearr_35419_35452 = state_35411__$1;
(statearr_35419_35452[(2)] = null);

(statearr_35419_35452[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (3))){
var inst_35409 = (state_35411[(2)]);
var state_35411__$1 = state_35411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35411__$1,inst_35409);
} else {
if((state_val_35412 === (12))){
var inst_35397 = (state_35411[(8)]);
var inst_35397__$1 = (state_35411[(2)]);
var inst_35398 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35397__$1);
var state_35411__$1 = (function (){var statearr_35420 = state_35411;
(statearr_35420[(8)] = inst_35397__$1);

return statearr_35420;
})();
if(cljs.core.truth_(inst_35398)){
var statearr_35421_35453 = state_35411__$1;
(statearr_35421_35453[(1)] = (13));

} else {
var statearr_35422_35454 = state_35411__$1;
(statearr_35422_35454[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (2))){
var inst_35374 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35375 = (0);
var state_35411__$1 = (function (){var statearr_35423 = state_35411;
(statearr_35423[(7)] = inst_35375);

(statearr_35423[(9)] = inst_35374);

return statearr_35423;
})();
var statearr_35424_35455 = state_35411__$1;
(statearr_35424_35455[(2)] = null);

(statearr_35424_35455[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (11))){
var inst_35375 = (state_35411[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35411,(10),Object,null,(9));
var inst_35384 = chs__$1.call(null,inst_35375);
var inst_35385 = done.call(null,inst_35375);
var inst_35386 = cljs.core.async.take_BANG_.call(null,inst_35384,inst_35385);
var state_35411__$1 = state_35411;
var statearr_35425_35456 = state_35411__$1;
(statearr_35425_35456[(2)] = inst_35386);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35411__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (9))){
var inst_35375 = (state_35411[(7)]);
var inst_35388 = (state_35411[(2)]);
var inst_35389 = (inst_35375 + (1));
var inst_35375__$1 = inst_35389;
var state_35411__$1 = (function (){var statearr_35426 = state_35411;
(statearr_35426[(7)] = inst_35375__$1);

(statearr_35426[(10)] = inst_35388);

return statearr_35426;
})();
var statearr_35427_35457 = state_35411__$1;
(statearr_35427_35457[(2)] = null);

(statearr_35427_35457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (5))){
var inst_35395 = (state_35411[(2)]);
var state_35411__$1 = (function (){var statearr_35428 = state_35411;
(statearr_35428[(11)] = inst_35395);

return statearr_35428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35411__$1,(12),dchan);
} else {
if((state_val_35412 === (14))){
var inst_35397 = (state_35411[(8)]);
var inst_35402 = cljs.core.apply.call(null,f,inst_35397);
var state_35411__$1 = state_35411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35411__$1,(16),out,inst_35402);
} else {
if((state_val_35412 === (16))){
var inst_35404 = (state_35411[(2)]);
var state_35411__$1 = (function (){var statearr_35429 = state_35411;
(statearr_35429[(12)] = inst_35404);

return statearr_35429;
})();
var statearr_35430_35458 = state_35411__$1;
(statearr_35430_35458[(2)] = null);

(statearr_35430_35458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (10))){
var inst_35379 = (state_35411[(2)]);
var inst_35380 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35411__$1 = (function (){var statearr_35431 = state_35411;
(statearr_35431[(13)] = inst_35379);

return statearr_35431;
})();
var statearr_35432_35459 = state_35411__$1;
(statearr_35432_35459[(2)] = inst_35380);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35411__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35412 === (8))){
var inst_35393 = (state_35411[(2)]);
var state_35411__$1 = state_35411;
var statearr_35433_35460 = state_35411__$1;
(statearr_35433_35460[(2)] = inst_35393);

(statearr_35433_35460[(1)] = (5));


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
});})(c__33426__auto___35445,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33314__auto__,c__33426__auto___35445,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33315__auto__ = null;
var cljs$core$async$state_machine__33315__auto____0 = (function (){
var statearr_35437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35437[(0)] = cljs$core$async$state_machine__33315__auto__);

(statearr_35437[(1)] = (1));

return statearr_35437;
});
var cljs$core$async$state_machine__33315__auto____1 = (function (state_35411){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_35411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e35438){if((e35438 instanceof Object)){
var ex__33318__auto__ = e35438;
var statearr_35439_35461 = state_35411;
(statearr_35439_35461[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35462 = state_35411;
state_35411 = G__35462;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$state_machine__33315__auto__ = function(state_35411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33315__auto____1.call(this,state_35411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33315__auto____0;
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33315__auto____1;
return cljs$core$async$state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___35445,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33428__auto__ = (function (){var statearr_35440 = f__33427__auto__.call(null);
(statearr_35440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___35445);

return statearr_35440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___35445,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args35464 = [];
var len__26809__auto___35520 = arguments.length;
var i__26810__auto___35521 = (0);
while(true){
if((i__26810__auto___35521 < len__26809__auto___35520)){
args35464.push((arguments[i__26810__auto___35521]));

var G__35522 = (i__26810__auto___35521 + (1));
i__26810__auto___35521 = G__35522;
continue;
} else {
}
break;
}

var G__35466 = args35464.length;
switch (G__35466) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35464.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33426__auto___35524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___35524,out){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___35524,out){
return (function (state_35496){
var state_val_35497 = (state_35496[(1)]);
if((state_val_35497 === (7))){
var inst_35476 = (state_35496[(7)]);
var inst_35475 = (state_35496[(8)]);
var inst_35475__$1 = (state_35496[(2)]);
var inst_35476__$1 = cljs.core.nth.call(null,inst_35475__$1,(0),null);
var inst_35477 = cljs.core.nth.call(null,inst_35475__$1,(1),null);
var inst_35478 = (inst_35476__$1 == null);
var state_35496__$1 = (function (){var statearr_35498 = state_35496;
(statearr_35498[(7)] = inst_35476__$1);

(statearr_35498[(8)] = inst_35475__$1);

(statearr_35498[(9)] = inst_35477);

return statearr_35498;
})();
if(cljs.core.truth_(inst_35478)){
var statearr_35499_35525 = state_35496__$1;
(statearr_35499_35525[(1)] = (8));

} else {
var statearr_35500_35526 = state_35496__$1;
(statearr_35500_35526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (1))){
var inst_35467 = cljs.core.vec.call(null,chs);
var inst_35468 = inst_35467;
var state_35496__$1 = (function (){var statearr_35501 = state_35496;
(statearr_35501[(10)] = inst_35468);

return statearr_35501;
})();
var statearr_35502_35527 = state_35496__$1;
(statearr_35502_35527[(2)] = null);

(statearr_35502_35527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (4))){
var inst_35468 = (state_35496[(10)]);
var state_35496__$1 = state_35496;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35496__$1,(7),inst_35468);
} else {
if((state_val_35497 === (6))){
var inst_35492 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
var statearr_35503_35528 = state_35496__$1;
(statearr_35503_35528[(2)] = inst_35492);

(statearr_35503_35528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (3))){
var inst_35494 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35496__$1,inst_35494);
} else {
if((state_val_35497 === (2))){
var inst_35468 = (state_35496[(10)]);
var inst_35470 = cljs.core.count.call(null,inst_35468);
var inst_35471 = (inst_35470 > (0));
var state_35496__$1 = state_35496;
if(cljs.core.truth_(inst_35471)){
var statearr_35505_35529 = state_35496__$1;
(statearr_35505_35529[(1)] = (4));

} else {
var statearr_35506_35530 = state_35496__$1;
(statearr_35506_35530[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (11))){
var inst_35468 = (state_35496[(10)]);
var inst_35485 = (state_35496[(2)]);
var tmp35504 = inst_35468;
var inst_35468__$1 = tmp35504;
var state_35496__$1 = (function (){var statearr_35507 = state_35496;
(statearr_35507[(10)] = inst_35468__$1);

(statearr_35507[(11)] = inst_35485);

return statearr_35507;
})();
var statearr_35508_35531 = state_35496__$1;
(statearr_35508_35531[(2)] = null);

(statearr_35508_35531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (9))){
var inst_35476 = (state_35496[(7)]);
var state_35496__$1 = state_35496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35496__$1,(11),out,inst_35476);
} else {
if((state_val_35497 === (5))){
var inst_35490 = cljs.core.async.close_BANG_.call(null,out);
var state_35496__$1 = state_35496;
var statearr_35509_35532 = state_35496__$1;
(statearr_35509_35532[(2)] = inst_35490);

(statearr_35509_35532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (10))){
var inst_35488 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
var statearr_35510_35533 = state_35496__$1;
(statearr_35510_35533[(2)] = inst_35488);

(statearr_35510_35533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (8))){
var inst_35476 = (state_35496[(7)]);
var inst_35468 = (state_35496[(10)]);
var inst_35475 = (state_35496[(8)]);
var inst_35477 = (state_35496[(9)]);
var inst_35480 = (function (){var cs = inst_35468;
var vec__35473 = inst_35475;
var v = inst_35476;
var c = inst_35477;
return ((function (cs,vec__35473,v,c,inst_35476,inst_35468,inst_35475,inst_35477,state_val_35497,c__33426__auto___35524,out){
return (function (p1__35463_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35463_SHARP_);
});
;})(cs,vec__35473,v,c,inst_35476,inst_35468,inst_35475,inst_35477,state_val_35497,c__33426__auto___35524,out))
})();
var inst_35481 = cljs.core.filterv.call(null,inst_35480,inst_35468);
var inst_35468__$1 = inst_35481;
var state_35496__$1 = (function (){var statearr_35511 = state_35496;
(statearr_35511[(10)] = inst_35468__$1);

return statearr_35511;
})();
var statearr_35512_35534 = state_35496__$1;
(statearr_35512_35534[(2)] = null);

(statearr_35512_35534[(1)] = (2));


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
});})(c__33426__auto___35524,out))
;
return ((function (switch__33314__auto__,c__33426__auto___35524,out){
return (function() {
var cljs$core$async$state_machine__33315__auto__ = null;
var cljs$core$async$state_machine__33315__auto____0 = (function (){
var statearr_35516 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35516[(0)] = cljs$core$async$state_machine__33315__auto__);

(statearr_35516[(1)] = (1));

return statearr_35516;
});
var cljs$core$async$state_machine__33315__auto____1 = (function (state_35496){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_35496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e35517){if((e35517 instanceof Object)){
var ex__33318__auto__ = e35517;
var statearr_35518_35535 = state_35496;
(statearr_35518_35535[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35536 = state_35496;
state_35496 = G__35536;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$state_machine__33315__auto__ = function(state_35496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33315__auto____1.call(this,state_35496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33315__auto____0;
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33315__auto____1;
return cljs$core$async$state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___35524,out))
})();
var state__33428__auto__ = (function (){var statearr_35519 = f__33427__auto__.call(null);
(statearr_35519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___35524);

return statearr_35519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___35524,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args35537 = [];
var len__26809__auto___35586 = arguments.length;
var i__26810__auto___35587 = (0);
while(true){
if((i__26810__auto___35587 < len__26809__auto___35586)){
args35537.push((arguments[i__26810__auto___35587]));

var G__35588 = (i__26810__auto___35587 + (1));
i__26810__auto___35587 = G__35588;
continue;
} else {
}
break;
}

var G__35539 = args35537.length;
switch (G__35539) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35537.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33426__auto___35590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___35590,out){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___35590,out){
return (function (state_35563){
var state_val_35564 = (state_35563[(1)]);
if((state_val_35564 === (7))){
var inst_35545 = (state_35563[(7)]);
var inst_35545__$1 = (state_35563[(2)]);
var inst_35546 = (inst_35545__$1 == null);
var inst_35547 = cljs.core.not.call(null,inst_35546);
var state_35563__$1 = (function (){var statearr_35565 = state_35563;
(statearr_35565[(7)] = inst_35545__$1);

return statearr_35565;
})();
if(inst_35547){
var statearr_35566_35591 = state_35563__$1;
(statearr_35566_35591[(1)] = (8));

} else {
var statearr_35567_35592 = state_35563__$1;
(statearr_35567_35592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (1))){
var inst_35540 = (0);
var state_35563__$1 = (function (){var statearr_35568 = state_35563;
(statearr_35568[(8)] = inst_35540);

return statearr_35568;
})();
var statearr_35569_35593 = state_35563__$1;
(statearr_35569_35593[(2)] = null);

(statearr_35569_35593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (4))){
var state_35563__$1 = state_35563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35563__$1,(7),ch);
} else {
if((state_val_35564 === (6))){
var inst_35558 = (state_35563[(2)]);
var state_35563__$1 = state_35563;
var statearr_35570_35594 = state_35563__$1;
(statearr_35570_35594[(2)] = inst_35558);

(statearr_35570_35594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (3))){
var inst_35560 = (state_35563[(2)]);
var inst_35561 = cljs.core.async.close_BANG_.call(null,out);
var state_35563__$1 = (function (){var statearr_35571 = state_35563;
(statearr_35571[(9)] = inst_35560);

return statearr_35571;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35563__$1,inst_35561);
} else {
if((state_val_35564 === (2))){
var inst_35540 = (state_35563[(8)]);
var inst_35542 = (inst_35540 < n);
var state_35563__$1 = state_35563;
if(cljs.core.truth_(inst_35542)){
var statearr_35572_35595 = state_35563__$1;
(statearr_35572_35595[(1)] = (4));

} else {
var statearr_35573_35596 = state_35563__$1;
(statearr_35573_35596[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (11))){
var inst_35540 = (state_35563[(8)]);
var inst_35550 = (state_35563[(2)]);
var inst_35551 = (inst_35540 + (1));
var inst_35540__$1 = inst_35551;
var state_35563__$1 = (function (){var statearr_35574 = state_35563;
(statearr_35574[(8)] = inst_35540__$1);

(statearr_35574[(10)] = inst_35550);

return statearr_35574;
})();
var statearr_35575_35597 = state_35563__$1;
(statearr_35575_35597[(2)] = null);

(statearr_35575_35597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (9))){
var state_35563__$1 = state_35563;
var statearr_35576_35598 = state_35563__$1;
(statearr_35576_35598[(2)] = null);

(statearr_35576_35598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (5))){
var state_35563__$1 = state_35563;
var statearr_35577_35599 = state_35563__$1;
(statearr_35577_35599[(2)] = null);

(statearr_35577_35599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (10))){
var inst_35555 = (state_35563[(2)]);
var state_35563__$1 = state_35563;
var statearr_35578_35600 = state_35563__$1;
(statearr_35578_35600[(2)] = inst_35555);

(statearr_35578_35600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (8))){
var inst_35545 = (state_35563[(7)]);
var state_35563__$1 = state_35563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35563__$1,(11),out,inst_35545);
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
});})(c__33426__auto___35590,out))
;
return ((function (switch__33314__auto__,c__33426__auto___35590,out){
return (function() {
var cljs$core$async$state_machine__33315__auto__ = null;
var cljs$core$async$state_machine__33315__auto____0 = (function (){
var statearr_35582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35582[(0)] = cljs$core$async$state_machine__33315__auto__);

(statearr_35582[(1)] = (1));

return statearr_35582;
});
var cljs$core$async$state_machine__33315__auto____1 = (function (state_35563){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_35563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e35583){if((e35583 instanceof Object)){
var ex__33318__auto__ = e35583;
var statearr_35584_35601 = state_35563;
(statearr_35584_35601[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35602 = state_35563;
state_35563 = G__35602;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$state_machine__33315__auto__ = function(state_35563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33315__auto____1.call(this,state_35563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33315__auto____0;
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33315__auto____1;
return cljs$core$async$state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___35590,out))
})();
var state__33428__auto__ = (function (){var statearr_35585 = f__33427__auto__.call(null);
(statearr_35585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___35590);

return statearr_35585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___35590,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35610 = (function (map_LT_,f,ch,meta35611){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35611 = meta35611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35612,meta35611__$1){
var self__ = this;
var _35612__$1 = this;
return (new cljs.core.async.t_cljs$core$async35610(self__.map_LT_,self__.f,self__.ch,meta35611__$1));
});

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35612){
var self__ = this;
var _35612__$1 = this;
return self__.meta35611;
});

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35613 = (function (map_LT_,f,ch,meta35611,_,fn1,meta35614){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35611 = meta35611;
this._ = _;
this.fn1 = fn1;
this.meta35614 = meta35614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35615,meta35614__$1){
var self__ = this;
var _35615__$1 = this;
return (new cljs.core.async.t_cljs$core$async35613(self__.map_LT_,self__.f,self__.ch,self__.meta35611,self__._,self__.fn1,meta35614__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35615){
var self__ = this;
var _35615__$1 = this;
return self__.meta35614;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35613.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35613.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35603_SHARP_){
return f1.call(null,(((p1__35603_SHARP_ == null))?null:self__.f.call(null,p1__35603_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35613.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35611","meta35611",-1719371371,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35610","cljs.core.async/t_cljs$core$async35610",1397192815,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35614","meta35614",9799055,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35613";

cljs.core.async.t_cljs$core$async35613.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cljs.core.async/t_cljs$core$async35613");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35613 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35613(map_LT___$1,f__$1,ch__$1,meta35611__$1,___$2,fn1__$1,meta35614){
return (new cljs.core.async.t_cljs$core$async35613(map_LT___$1,f__$1,ch__$1,meta35611__$1,___$2,fn1__$1,meta35614));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35613(self__.map_LT_,self__.f,self__.ch,self__.meta35611,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25739__auto__ = ret;
if(cljs.core.truth_(and__25739__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25739__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35611","meta35611",-1719371371,null)], null);
});

cljs.core.async.t_cljs$core$async35610.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35610";

cljs.core.async.t_cljs$core$async35610.cljs$lang$ctorPrWriter = (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cljs.core.async/t_cljs$core$async35610");
});

cljs.core.async.__GT_t_cljs$core$async35610 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35610(map_LT___$1,f__$1,ch__$1,meta35611){
return (new cljs.core.async.t_cljs$core$async35610(map_LT___$1,f__$1,ch__$1,meta35611));
});

}

return (new cljs.core.async.t_cljs$core$async35610(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35619 = (function (map_GT_,f,ch,meta35620){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta35620 = meta35620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35621,meta35620__$1){
var self__ = this;
var _35621__$1 = this;
return (new cljs.core.async.t_cljs$core$async35619(self__.map_GT_,self__.f,self__.ch,meta35620__$1));
});

cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35621){
var self__ = this;
var _35621__$1 = this;
return self__.meta35620;
});

cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35620","meta35620",1798349513,null)], null);
});

cljs.core.async.t_cljs$core$async35619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35619";

cljs.core.async.t_cljs$core$async35619.cljs$lang$ctorPrWriter = (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cljs.core.async/t_cljs$core$async35619");
});

cljs.core.async.__GT_t_cljs$core$async35619 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35619(map_GT___$1,f__$1,ch__$1,meta35620){
return (new cljs.core.async.t_cljs$core$async35619(map_GT___$1,f__$1,ch__$1,meta35620));
});

}

return (new cljs.core.async.t_cljs$core$async35619(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35625 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35625 = (function (filter_GT_,p,ch,meta35626){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta35626 = meta35626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35627,meta35626__$1){
var self__ = this;
var _35627__$1 = this;
return (new cljs.core.async.t_cljs$core$async35625(self__.filter_GT_,self__.p,self__.ch,meta35626__$1));
});

cljs.core.async.t_cljs$core$async35625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35627){
var self__ = this;
var _35627__$1 = this;
return self__.meta35626;
});

cljs.core.async.t_cljs$core$async35625.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35625.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35625.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35625.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35625.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35625.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35625.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35626","meta35626",-925279965,null)], null);
});

cljs.core.async.t_cljs$core$async35625.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35625";

cljs.core.async.t_cljs$core$async35625.cljs$lang$ctorPrWriter = (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cljs.core.async/t_cljs$core$async35625");
});

cljs.core.async.__GT_t_cljs$core$async35625 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35625(filter_GT___$1,p__$1,ch__$1,meta35626){
return (new cljs.core.async.t_cljs$core$async35625(filter_GT___$1,p__$1,ch__$1,meta35626));
});

}

return (new cljs.core.async.t_cljs$core$async35625(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args35628 = [];
var len__26809__auto___35672 = arguments.length;
var i__26810__auto___35673 = (0);
while(true){
if((i__26810__auto___35673 < len__26809__auto___35672)){
args35628.push((arguments[i__26810__auto___35673]));

var G__35674 = (i__26810__auto___35673 + (1));
i__26810__auto___35673 = G__35674;
continue;
} else {
}
break;
}

var G__35630 = args35628.length;
switch (G__35630) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35628.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33426__auto___35676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___35676,out){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___35676,out){
return (function (state_35651){
var state_val_35652 = (state_35651[(1)]);
if((state_val_35652 === (7))){
var inst_35647 = (state_35651[(2)]);
var state_35651__$1 = state_35651;
var statearr_35653_35677 = state_35651__$1;
(statearr_35653_35677[(2)] = inst_35647);

(statearr_35653_35677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35652 === (1))){
var state_35651__$1 = state_35651;
var statearr_35654_35678 = state_35651__$1;
(statearr_35654_35678[(2)] = null);

(statearr_35654_35678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35652 === (4))){
var inst_35633 = (state_35651[(7)]);
var inst_35633__$1 = (state_35651[(2)]);
var inst_35634 = (inst_35633__$1 == null);
var state_35651__$1 = (function (){var statearr_35655 = state_35651;
(statearr_35655[(7)] = inst_35633__$1);

return statearr_35655;
})();
if(cljs.core.truth_(inst_35634)){
var statearr_35656_35679 = state_35651__$1;
(statearr_35656_35679[(1)] = (5));

} else {
var statearr_35657_35680 = state_35651__$1;
(statearr_35657_35680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35652 === (6))){
var inst_35633 = (state_35651[(7)]);
var inst_35638 = p.call(null,inst_35633);
var state_35651__$1 = state_35651;
if(cljs.core.truth_(inst_35638)){
var statearr_35658_35681 = state_35651__$1;
(statearr_35658_35681[(1)] = (8));

} else {
var statearr_35659_35682 = state_35651__$1;
(statearr_35659_35682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35652 === (3))){
var inst_35649 = (state_35651[(2)]);
var state_35651__$1 = state_35651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35651__$1,inst_35649);
} else {
if((state_val_35652 === (2))){
var state_35651__$1 = state_35651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35651__$1,(4),ch);
} else {
if((state_val_35652 === (11))){
var inst_35641 = (state_35651[(2)]);
var state_35651__$1 = state_35651;
var statearr_35660_35683 = state_35651__$1;
(statearr_35660_35683[(2)] = inst_35641);

(statearr_35660_35683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35652 === (9))){
var state_35651__$1 = state_35651;
var statearr_35661_35684 = state_35651__$1;
(statearr_35661_35684[(2)] = null);

(statearr_35661_35684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35652 === (5))){
var inst_35636 = cljs.core.async.close_BANG_.call(null,out);
var state_35651__$1 = state_35651;
var statearr_35662_35685 = state_35651__$1;
(statearr_35662_35685[(2)] = inst_35636);

(statearr_35662_35685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35652 === (10))){
var inst_35644 = (state_35651[(2)]);
var state_35651__$1 = (function (){var statearr_35663 = state_35651;
(statearr_35663[(8)] = inst_35644);

return statearr_35663;
})();
var statearr_35664_35686 = state_35651__$1;
(statearr_35664_35686[(2)] = null);

(statearr_35664_35686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35652 === (8))){
var inst_35633 = (state_35651[(7)]);
var state_35651__$1 = state_35651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35651__$1,(11),out,inst_35633);
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
});})(c__33426__auto___35676,out))
;
return ((function (switch__33314__auto__,c__33426__auto___35676,out){
return (function() {
var cljs$core$async$state_machine__33315__auto__ = null;
var cljs$core$async$state_machine__33315__auto____0 = (function (){
var statearr_35668 = [null,null,null,null,null,null,null,null,null];
(statearr_35668[(0)] = cljs$core$async$state_machine__33315__auto__);

(statearr_35668[(1)] = (1));

return statearr_35668;
});
var cljs$core$async$state_machine__33315__auto____1 = (function (state_35651){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_35651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e35669){if((e35669 instanceof Object)){
var ex__33318__auto__ = e35669;
var statearr_35670_35687 = state_35651;
(statearr_35670_35687[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35688 = state_35651;
state_35651 = G__35688;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$state_machine__33315__auto__ = function(state_35651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33315__auto____1.call(this,state_35651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33315__auto____0;
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33315__auto____1;
return cljs$core$async$state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___35676,out))
})();
var state__33428__auto__ = (function (){var statearr_35671 = f__33427__auto__.call(null);
(statearr_35671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___35676);

return statearr_35671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___35676,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args35689 = [];
var len__26809__auto___35692 = arguments.length;
var i__26810__auto___35693 = (0);
while(true){
if((i__26810__auto___35693 < len__26809__auto___35692)){
args35689.push((arguments[i__26810__auto___35693]));

var G__35694 = (i__26810__auto___35693 + (1));
i__26810__auto___35693 = G__35694;
continue;
} else {
}
break;
}

var G__35691 = args35689.length;
switch (G__35691) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35689.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33426__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto__){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto__){
return (function (state_35861){
var state_val_35862 = (state_35861[(1)]);
if((state_val_35862 === (7))){
var inst_35857 = (state_35861[(2)]);
var state_35861__$1 = state_35861;
var statearr_35863_35904 = state_35861__$1;
(statearr_35863_35904[(2)] = inst_35857);

(statearr_35863_35904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (20))){
var inst_35827 = (state_35861[(7)]);
var inst_35838 = (state_35861[(2)]);
var inst_35839 = cljs.core.next.call(null,inst_35827);
var inst_35813 = inst_35839;
var inst_35814 = null;
var inst_35815 = (0);
var inst_35816 = (0);
var state_35861__$1 = (function (){var statearr_35864 = state_35861;
(statearr_35864[(8)] = inst_35813);

(statearr_35864[(9)] = inst_35838);

(statearr_35864[(10)] = inst_35815);

(statearr_35864[(11)] = inst_35814);

(statearr_35864[(12)] = inst_35816);

return statearr_35864;
})();
var statearr_35865_35905 = state_35861__$1;
(statearr_35865_35905[(2)] = null);

(statearr_35865_35905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (1))){
var state_35861__$1 = state_35861;
var statearr_35866_35906 = state_35861__$1;
(statearr_35866_35906[(2)] = null);

(statearr_35866_35906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (4))){
var inst_35802 = (state_35861[(13)]);
var inst_35802__$1 = (state_35861[(2)]);
var inst_35803 = (inst_35802__$1 == null);
var state_35861__$1 = (function (){var statearr_35867 = state_35861;
(statearr_35867[(13)] = inst_35802__$1);

return statearr_35867;
})();
if(cljs.core.truth_(inst_35803)){
var statearr_35868_35907 = state_35861__$1;
(statearr_35868_35907[(1)] = (5));

} else {
var statearr_35869_35908 = state_35861__$1;
(statearr_35869_35908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (15))){
var state_35861__$1 = state_35861;
var statearr_35873_35909 = state_35861__$1;
(statearr_35873_35909[(2)] = null);

(statearr_35873_35909[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (21))){
var state_35861__$1 = state_35861;
var statearr_35874_35910 = state_35861__$1;
(statearr_35874_35910[(2)] = null);

(statearr_35874_35910[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (13))){
var inst_35813 = (state_35861[(8)]);
var inst_35815 = (state_35861[(10)]);
var inst_35814 = (state_35861[(11)]);
var inst_35816 = (state_35861[(12)]);
var inst_35823 = (state_35861[(2)]);
var inst_35824 = (inst_35816 + (1));
var tmp35870 = inst_35813;
var tmp35871 = inst_35815;
var tmp35872 = inst_35814;
var inst_35813__$1 = tmp35870;
var inst_35814__$1 = tmp35872;
var inst_35815__$1 = tmp35871;
var inst_35816__$1 = inst_35824;
var state_35861__$1 = (function (){var statearr_35875 = state_35861;
(statearr_35875[(8)] = inst_35813__$1);

(statearr_35875[(10)] = inst_35815__$1);

(statearr_35875[(14)] = inst_35823);

(statearr_35875[(11)] = inst_35814__$1);

(statearr_35875[(12)] = inst_35816__$1);

return statearr_35875;
})();
var statearr_35876_35911 = state_35861__$1;
(statearr_35876_35911[(2)] = null);

(statearr_35876_35911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (22))){
var state_35861__$1 = state_35861;
var statearr_35877_35912 = state_35861__$1;
(statearr_35877_35912[(2)] = null);

(statearr_35877_35912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (6))){
var inst_35802 = (state_35861[(13)]);
var inst_35811 = f.call(null,inst_35802);
var inst_35812 = cljs.core.seq.call(null,inst_35811);
var inst_35813 = inst_35812;
var inst_35814 = null;
var inst_35815 = (0);
var inst_35816 = (0);
var state_35861__$1 = (function (){var statearr_35878 = state_35861;
(statearr_35878[(8)] = inst_35813);

(statearr_35878[(10)] = inst_35815);

(statearr_35878[(11)] = inst_35814);

(statearr_35878[(12)] = inst_35816);

return statearr_35878;
})();
var statearr_35879_35913 = state_35861__$1;
(statearr_35879_35913[(2)] = null);

(statearr_35879_35913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (17))){
var inst_35827 = (state_35861[(7)]);
var inst_35831 = cljs.core.chunk_first.call(null,inst_35827);
var inst_35832 = cljs.core.chunk_rest.call(null,inst_35827);
var inst_35833 = cljs.core.count.call(null,inst_35831);
var inst_35813 = inst_35832;
var inst_35814 = inst_35831;
var inst_35815 = inst_35833;
var inst_35816 = (0);
var state_35861__$1 = (function (){var statearr_35880 = state_35861;
(statearr_35880[(8)] = inst_35813);

(statearr_35880[(10)] = inst_35815);

(statearr_35880[(11)] = inst_35814);

(statearr_35880[(12)] = inst_35816);

return statearr_35880;
})();
var statearr_35881_35914 = state_35861__$1;
(statearr_35881_35914[(2)] = null);

(statearr_35881_35914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (3))){
var inst_35859 = (state_35861[(2)]);
var state_35861__$1 = state_35861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35861__$1,inst_35859);
} else {
if((state_val_35862 === (12))){
var inst_35847 = (state_35861[(2)]);
var state_35861__$1 = state_35861;
var statearr_35882_35915 = state_35861__$1;
(statearr_35882_35915[(2)] = inst_35847);

(statearr_35882_35915[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (2))){
var state_35861__$1 = state_35861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35861__$1,(4),in$);
} else {
if((state_val_35862 === (23))){
var inst_35855 = (state_35861[(2)]);
var state_35861__$1 = state_35861;
var statearr_35883_35916 = state_35861__$1;
(statearr_35883_35916[(2)] = inst_35855);

(statearr_35883_35916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (19))){
var inst_35842 = (state_35861[(2)]);
var state_35861__$1 = state_35861;
var statearr_35884_35917 = state_35861__$1;
(statearr_35884_35917[(2)] = inst_35842);

(statearr_35884_35917[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (11))){
var inst_35813 = (state_35861[(8)]);
var inst_35827 = (state_35861[(7)]);
var inst_35827__$1 = cljs.core.seq.call(null,inst_35813);
var state_35861__$1 = (function (){var statearr_35885 = state_35861;
(statearr_35885[(7)] = inst_35827__$1);

return statearr_35885;
})();
if(inst_35827__$1){
var statearr_35886_35918 = state_35861__$1;
(statearr_35886_35918[(1)] = (14));

} else {
var statearr_35887_35919 = state_35861__$1;
(statearr_35887_35919[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (9))){
var inst_35849 = (state_35861[(2)]);
var inst_35850 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35861__$1 = (function (){var statearr_35888 = state_35861;
(statearr_35888[(15)] = inst_35849);

return statearr_35888;
})();
if(cljs.core.truth_(inst_35850)){
var statearr_35889_35920 = state_35861__$1;
(statearr_35889_35920[(1)] = (21));

} else {
var statearr_35890_35921 = state_35861__$1;
(statearr_35890_35921[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (5))){
var inst_35805 = cljs.core.async.close_BANG_.call(null,out);
var state_35861__$1 = state_35861;
var statearr_35891_35922 = state_35861__$1;
(statearr_35891_35922[(2)] = inst_35805);

(statearr_35891_35922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (14))){
var inst_35827 = (state_35861[(7)]);
var inst_35829 = cljs.core.chunked_seq_QMARK_.call(null,inst_35827);
var state_35861__$1 = state_35861;
if(inst_35829){
var statearr_35892_35923 = state_35861__$1;
(statearr_35892_35923[(1)] = (17));

} else {
var statearr_35893_35924 = state_35861__$1;
(statearr_35893_35924[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (16))){
var inst_35845 = (state_35861[(2)]);
var state_35861__$1 = state_35861;
var statearr_35894_35925 = state_35861__$1;
(statearr_35894_35925[(2)] = inst_35845);

(statearr_35894_35925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (10))){
var inst_35814 = (state_35861[(11)]);
var inst_35816 = (state_35861[(12)]);
var inst_35821 = cljs.core._nth.call(null,inst_35814,inst_35816);
var state_35861__$1 = state_35861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35861__$1,(13),out,inst_35821);
} else {
if((state_val_35862 === (18))){
var inst_35827 = (state_35861[(7)]);
var inst_35836 = cljs.core.first.call(null,inst_35827);
var state_35861__$1 = state_35861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35861__$1,(20),out,inst_35836);
} else {
if((state_val_35862 === (8))){
var inst_35815 = (state_35861[(10)]);
var inst_35816 = (state_35861[(12)]);
var inst_35818 = (inst_35816 < inst_35815);
var inst_35819 = inst_35818;
var state_35861__$1 = state_35861;
if(cljs.core.truth_(inst_35819)){
var statearr_35895_35926 = state_35861__$1;
(statearr_35895_35926[(1)] = (10));

} else {
var statearr_35896_35927 = state_35861__$1;
(statearr_35896_35927[(1)] = (11));

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
});})(c__33426__auto__))
;
return ((function (switch__33314__auto__,c__33426__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33315__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33315__auto____0 = (function (){
var statearr_35900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35900[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33315__auto__);

(statearr_35900[(1)] = (1));

return statearr_35900;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33315__auto____1 = (function (state_35861){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_35861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e35901){if((e35901 instanceof Object)){
var ex__33318__auto__ = e35901;
var statearr_35902_35928 = state_35861;
(statearr_35902_35928[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35929 = state_35861;
state_35861 = G__35929;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33315__auto__ = function(state_35861){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33315__auto____1.call(this,state_35861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33315__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33315__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto__))
})();
var state__33428__auto__ = (function (){var statearr_35903 = f__33427__auto__.call(null);
(statearr_35903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto__);

return statearr_35903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto__))
);

return c__33426__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args35930 = [];
var len__26809__auto___35933 = arguments.length;
var i__26810__auto___35934 = (0);
while(true){
if((i__26810__auto___35934 < len__26809__auto___35933)){
args35930.push((arguments[i__26810__auto___35934]));

var G__35935 = (i__26810__auto___35934 + (1));
i__26810__auto___35934 = G__35935;
continue;
} else {
}
break;
}

var G__35932 = args35930.length;
switch (G__35932) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35930.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args35937 = [];
var len__26809__auto___35940 = arguments.length;
var i__26810__auto___35941 = (0);
while(true){
if((i__26810__auto___35941 < len__26809__auto___35940)){
args35937.push((arguments[i__26810__auto___35941]));

var G__35942 = (i__26810__auto___35941 + (1));
i__26810__auto___35941 = G__35942;
continue;
} else {
}
break;
}

var G__35939 = args35937.length;
switch (G__35939) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35937.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args35944 = [];
var len__26809__auto___35995 = arguments.length;
var i__26810__auto___35996 = (0);
while(true){
if((i__26810__auto___35996 < len__26809__auto___35995)){
args35944.push((arguments[i__26810__auto___35996]));

var G__35997 = (i__26810__auto___35996 + (1));
i__26810__auto___35996 = G__35997;
continue;
} else {
}
break;
}

var G__35946 = args35944.length;
switch (G__35946) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35944.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33426__auto___35999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___35999,out){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___35999,out){
return (function (state_35970){
var state_val_35971 = (state_35970[(1)]);
if((state_val_35971 === (7))){
var inst_35965 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
var statearr_35972_36000 = state_35970__$1;
(statearr_35972_36000[(2)] = inst_35965);

(statearr_35972_36000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (1))){
var inst_35947 = null;
var state_35970__$1 = (function (){var statearr_35973 = state_35970;
(statearr_35973[(7)] = inst_35947);

return statearr_35973;
})();
var statearr_35974_36001 = state_35970__$1;
(statearr_35974_36001[(2)] = null);

(statearr_35974_36001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (4))){
var inst_35950 = (state_35970[(8)]);
var inst_35950__$1 = (state_35970[(2)]);
var inst_35951 = (inst_35950__$1 == null);
var inst_35952 = cljs.core.not.call(null,inst_35951);
var state_35970__$1 = (function (){var statearr_35975 = state_35970;
(statearr_35975[(8)] = inst_35950__$1);

return statearr_35975;
})();
if(inst_35952){
var statearr_35976_36002 = state_35970__$1;
(statearr_35976_36002[(1)] = (5));

} else {
var statearr_35977_36003 = state_35970__$1;
(statearr_35977_36003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (6))){
var state_35970__$1 = state_35970;
var statearr_35978_36004 = state_35970__$1;
(statearr_35978_36004[(2)] = null);

(statearr_35978_36004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (3))){
var inst_35967 = (state_35970[(2)]);
var inst_35968 = cljs.core.async.close_BANG_.call(null,out);
var state_35970__$1 = (function (){var statearr_35979 = state_35970;
(statearr_35979[(9)] = inst_35967);

return statearr_35979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35970__$1,inst_35968);
} else {
if((state_val_35971 === (2))){
var state_35970__$1 = state_35970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35970__$1,(4),ch);
} else {
if((state_val_35971 === (11))){
var inst_35950 = (state_35970[(8)]);
var inst_35959 = (state_35970[(2)]);
var inst_35947 = inst_35950;
var state_35970__$1 = (function (){var statearr_35980 = state_35970;
(statearr_35980[(7)] = inst_35947);

(statearr_35980[(10)] = inst_35959);

return statearr_35980;
})();
var statearr_35981_36005 = state_35970__$1;
(statearr_35981_36005[(2)] = null);

(statearr_35981_36005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (9))){
var inst_35950 = (state_35970[(8)]);
var state_35970__$1 = state_35970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35970__$1,(11),out,inst_35950);
} else {
if((state_val_35971 === (5))){
var inst_35947 = (state_35970[(7)]);
var inst_35950 = (state_35970[(8)]);
var inst_35954 = cljs.core._EQ_.call(null,inst_35950,inst_35947);
var state_35970__$1 = state_35970;
if(inst_35954){
var statearr_35983_36006 = state_35970__$1;
(statearr_35983_36006[(1)] = (8));

} else {
var statearr_35984_36007 = state_35970__$1;
(statearr_35984_36007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (10))){
var inst_35962 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
var statearr_35985_36008 = state_35970__$1;
(statearr_35985_36008[(2)] = inst_35962);

(statearr_35985_36008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (8))){
var inst_35947 = (state_35970[(7)]);
var tmp35982 = inst_35947;
var inst_35947__$1 = tmp35982;
var state_35970__$1 = (function (){var statearr_35986 = state_35970;
(statearr_35986[(7)] = inst_35947__$1);

return statearr_35986;
})();
var statearr_35987_36009 = state_35970__$1;
(statearr_35987_36009[(2)] = null);

(statearr_35987_36009[(1)] = (2));


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
});})(c__33426__auto___35999,out))
;
return ((function (switch__33314__auto__,c__33426__auto___35999,out){
return (function() {
var cljs$core$async$state_machine__33315__auto__ = null;
var cljs$core$async$state_machine__33315__auto____0 = (function (){
var statearr_35991 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35991[(0)] = cljs$core$async$state_machine__33315__auto__);

(statearr_35991[(1)] = (1));

return statearr_35991;
});
var cljs$core$async$state_machine__33315__auto____1 = (function (state_35970){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_35970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e35992){if((e35992 instanceof Object)){
var ex__33318__auto__ = e35992;
var statearr_35993_36010 = state_35970;
(statearr_35993_36010[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36011 = state_35970;
state_35970 = G__36011;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$state_machine__33315__auto__ = function(state_35970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33315__auto____1.call(this,state_35970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33315__auto____0;
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33315__auto____1;
return cljs$core$async$state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___35999,out))
})();
var state__33428__auto__ = (function (){var statearr_35994 = f__33427__auto__.call(null);
(statearr_35994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___35999);

return statearr_35994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___35999,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args36012 = [];
var len__26809__auto___36082 = arguments.length;
var i__26810__auto___36083 = (0);
while(true){
if((i__26810__auto___36083 < len__26809__auto___36082)){
args36012.push((arguments[i__26810__auto___36083]));

var G__36084 = (i__26810__auto___36083 + (1));
i__26810__auto___36083 = G__36084;
continue;
} else {
}
break;
}

var G__36014 = args36012.length;
switch (G__36014) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36012.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33426__auto___36086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___36086,out){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___36086,out){
return (function (state_36052){
var state_val_36053 = (state_36052[(1)]);
if((state_val_36053 === (7))){
var inst_36048 = (state_36052[(2)]);
var state_36052__$1 = state_36052;
var statearr_36054_36087 = state_36052__$1;
(statearr_36054_36087[(2)] = inst_36048);

(statearr_36054_36087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (1))){
var inst_36015 = (new Array(n));
var inst_36016 = inst_36015;
var inst_36017 = (0);
var state_36052__$1 = (function (){var statearr_36055 = state_36052;
(statearr_36055[(7)] = inst_36016);

(statearr_36055[(8)] = inst_36017);

return statearr_36055;
})();
var statearr_36056_36088 = state_36052__$1;
(statearr_36056_36088[(2)] = null);

(statearr_36056_36088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (4))){
var inst_36020 = (state_36052[(9)]);
var inst_36020__$1 = (state_36052[(2)]);
var inst_36021 = (inst_36020__$1 == null);
var inst_36022 = cljs.core.not.call(null,inst_36021);
var state_36052__$1 = (function (){var statearr_36057 = state_36052;
(statearr_36057[(9)] = inst_36020__$1);

return statearr_36057;
})();
if(inst_36022){
var statearr_36058_36089 = state_36052__$1;
(statearr_36058_36089[(1)] = (5));

} else {
var statearr_36059_36090 = state_36052__$1;
(statearr_36059_36090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (15))){
var inst_36042 = (state_36052[(2)]);
var state_36052__$1 = state_36052;
var statearr_36060_36091 = state_36052__$1;
(statearr_36060_36091[(2)] = inst_36042);

(statearr_36060_36091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (13))){
var state_36052__$1 = state_36052;
var statearr_36061_36092 = state_36052__$1;
(statearr_36061_36092[(2)] = null);

(statearr_36061_36092[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (6))){
var inst_36017 = (state_36052[(8)]);
var inst_36038 = (inst_36017 > (0));
var state_36052__$1 = state_36052;
if(cljs.core.truth_(inst_36038)){
var statearr_36062_36093 = state_36052__$1;
(statearr_36062_36093[(1)] = (12));

} else {
var statearr_36063_36094 = state_36052__$1;
(statearr_36063_36094[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (3))){
var inst_36050 = (state_36052[(2)]);
var state_36052__$1 = state_36052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36052__$1,inst_36050);
} else {
if((state_val_36053 === (12))){
var inst_36016 = (state_36052[(7)]);
var inst_36040 = cljs.core.vec.call(null,inst_36016);
var state_36052__$1 = state_36052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36052__$1,(15),out,inst_36040);
} else {
if((state_val_36053 === (2))){
var state_36052__$1 = state_36052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36052__$1,(4),ch);
} else {
if((state_val_36053 === (11))){
var inst_36032 = (state_36052[(2)]);
var inst_36033 = (new Array(n));
var inst_36016 = inst_36033;
var inst_36017 = (0);
var state_36052__$1 = (function (){var statearr_36064 = state_36052;
(statearr_36064[(7)] = inst_36016);

(statearr_36064[(8)] = inst_36017);

(statearr_36064[(10)] = inst_36032);

return statearr_36064;
})();
var statearr_36065_36095 = state_36052__$1;
(statearr_36065_36095[(2)] = null);

(statearr_36065_36095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (9))){
var inst_36016 = (state_36052[(7)]);
var inst_36030 = cljs.core.vec.call(null,inst_36016);
var state_36052__$1 = state_36052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36052__$1,(11),out,inst_36030);
} else {
if((state_val_36053 === (5))){
var inst_36020 = (state_36052[(9)]);
var inst_36025 = (state_36052[(11)]);
var inst_36016 = (state_36052[(7)]);
var inst_36017 = (state_36052[(8)]);
var inst_36024 = (inst_36016[inst_36017] = inst_36020);
var inst_36025__$1 = (inst_36017 + (1));
var inst_36026 = (inst_36025__$1 < n);
var state_36052__$1 = (function (){var statearr_36066 = state_36052;
(statearr_36066[(11)] = inst_36025__$1);

(statearr_36066[(12)] = inst_36024);

return statearr_36066;
})();
if(cljs.core.truth_(inst_36026)){
var statearr_36067_36096 = state_36052__$1;
(statearr_36067_36096[(1)] = (8));

} else {
var statearr_36068_36097 = state_36052__$1;
(statearr_36068_36097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (14))){
var inst_36045 = (state_36052[(2)]);
var inst_36046 = cljs.core.async.close_BANG_.call(null,out);
var state_36052__$1 = (function (){var statearr_36070 = state_36052;
(statearr_36070[(13)] = inst_36045);

return statearr_36070;
})();
var statearr_36071_36098 = state_36052__$1;
(statearr_36071_36098[(2)] = inst_36046);

(statearr_36071_36098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (10))){
var inst_36036 = (state_36052[(2)]);
var state_36052__$1 = state_36052;
var statearr_36072_36099 = state_36052__$1;
(statearr_36072_36099[(2)] = inst_36036);

(statearr_36072_36099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (8))){
var inst_36025 = (state_36052[(11)]);
var inst_36016 = (state_36052[(7)]);
var tmp36069 = inst_36016;
var inst_36016__$1 = tmp36069;
var inst_36017 = inst_36025;
var state_36052__$1 = (function (){var statearr_36073 = state_36052;
(statearr_36073[(7)] = inst_36016__$1);

(statearr_36073[(8)] = inst_36017);

return statearr_36073;
})();
var statearr_36074_36100 = state_36052__$1;
(statearr_36074_36100[(2)] = null);

(statearr_36074_36100[(1)] = (2));


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
});})(c__33426__auto___36086,out))
;
return ((function (switch__33314__auto__,c__33426__auto___36086,out){
return (function() {
var cljs$core$async$state_machine__33315__auto__ = null;
var cljs$core$async$state_machine__33315__auto____0 = (function (){
var statearr_36078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36078[(0)] = cljs$core$async$state_machine__33315__auto__);

(statearr_36078[(1)] = (1));

return statearr_36078;
});
var cljs$core$async$state_machine__33315__auto____1 = (function (state_36052){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_36052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e36079){if((e36079 instanceof Object)){
var ex__33318__auto__ = e36079;
var statearr_36080_36101 = state_36052;
(statearr_36080_36101[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36102 = state_36052;
state_36052 = G__36102;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$state_machine__33315__auto__ = function(state_36052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33315__auto____1.call(this,state_36052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33315__auto____0;
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33315__auto____1;
return cljs$core$async$state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___36086,out))
})();
var state__33428__auto__ = (function (){var statearr_36081 = f__33427__auto__.call(null);
(statearr_36081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___36086);

return statearr_36081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___36086,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args36103 = [];
var len__26809__auto___36177 = arguments.length;
var i__26810__auto___36178 = (0);
while(true){
if((i__26810__auto___36178 < len__26809__auto___36177)){
args36103.push((arguments[i__26810__auto___36178]));

var G__36179 = (i__26810__auto___36178 + (1));
i__26810__auto___36178 = G__36179;
continue;
} else {
}
break;
}

var G__36105 = args36103.length;
switch (G__36105) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36103.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33426__auto___36181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___36181,out){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___36181,out){
return (function (state_36147){
var state_val_36148 = (state_36147[(1)]);
if((state_val_36148 === (7))){
var inst_36143 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
var statearr_36149_36182 = state_36147__$1;
(statearr_36149_36182[(2)] = inst_36143);

(statearr_36149_36182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (1))){
var inst_36106 = [];
var inst_36107 = inst_36106;
var inst_36108 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36147__$1 = (function (){var statearr_36150 = state_36147;
(statearr_36150[(7)] = inst_36107);

(statearr_36150[(8)] = inst_36108);

return statearr_36150;
})();
var statearr_36151_36183 = state_36147__$1;
(statearr_36151_36183[(2)] = null);

(statearr_36151_36183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (4))){
var inst_36111 = (state_36147[(9)]);
var inst_36111__$1 = (state_36147[(2)]);
var inst_36112 = (inst_36111__$1 == null);
var inst_36113 = cljs.core.not.call(null,inst_36112);
var state_36147__$1 = (function (){var statearr_36152 = state_36147;
(statearr_36152[(9)] = inst_36111__$1);

return statearr_36152;
})();
if(inst_36113){
var statearr_36153_36184 = state_36147__$1;
(statearr_36153_36184[(1)] = (5));

} else {
var statearr_36154_36185 = state_36147__$1;
(statearr_36154_36185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (15))){
var inst_36137 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
var statearr_36155_36186 = state_36147__$1;
(statearr_36155_36186[(2)] = inst_36137);

(statearr_36155_36186[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (13))){
var state_36147__$1 = state_36147;
var statearr_36156_36187 = state_36147__$1;
(statearr_36156_36187[(2)] = null);

(statearr_36156_36187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (6))){
var inst_36107 = (state_36147[(7)]);
var inst_36132 = inst_36107.length;
var inst_36133 = (inst_36132 > (0));
var state_36147__$1 = state_36147;
if(cljs.core.truth_(inst_36133)){
var statearr_36157_36188 = state_36147__$1;
(statearr_36157_36188[(1)] = (12));

} else {
var statearr_36158_36189 = state_36147__$1;
(statearr_36158_36189[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (3))){
var inst_36145 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36147__$1,inst_36145);
} else {
if((state_val_36148 === (12))){
var inst_36107 = (state_36147[(7)]);
var inst_36135 = cljs.core.vec.call(null,inst_36107);
var state_36147__$1 = state_36147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36147__$1,(15),out,inst_36135);
} else {
if((state_val_36148 === (2))){
var state_36147__$1 = state_36147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36147__$1,(4),ch);
} else {
if((state_val_36148 === (11))){
var inst_36115 = (state_36147[(10)]);
var inst_36111 = (state_36147[(9)]);
var inst_36125 = (state_36147[(2)]);
var inst_36126 = [];
var inst_36127 = inst_36126.push(inst_36111);
var inst_36107 = inst_36126;
var inst_36108 = inst_36115;
var state_36147__$1 = (function (){var statearr_36159 = state_36147;
(statearr_36159[(7)] = inst_36107);

(statearr_36159[(11)] = inst_36125);

(statearr_36159[(8)] = inst_36108);

(statearr_36159[(12)] = inst_36127);

return statearr_36159;
})();
var statearr_36160_36190 = state_36147__$1;
(statearr_36160_36190[(2)] = null);

(statearr_36160_36190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (9))){
var inst_36107 = (state_36147[(7)]);
var inst_36123 = cljs.core.vec.call(null,inst_36107);
var state_36147__$1 = state_36147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36147__$1,(11),out,inst_36123);
} else {
if((state_val_36148 === (5))){
var inst_36115 = (state_36147[(10)]);
var inst_36111 = (state_36147[(9)]);
var inst_36108 = (state_36147[(8)]);
var inst_36115__$1 = f.call(null,inst_36111);
var inst_36116 = cljs.core._EQ_.call(null,inst_36115__$1,inst_36108);
var inst_36117 = cljs.core.keyword_identical_QMARK_.call(null,inst_36108,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36118 = (inst_36116) || (inst_36117);
var state_36147__$1 = (function (){var statearr_36161 = state_36147;
(statearr_36161[(10)] = inst_36115__$1);

return statearr_36161;
})();
if(cljs.core.truth_(inst_36118)){
var statearr_36162_36191 = state_36147__$1;
(statearr_36162_36191[(1)] = (8));

} else {
var statearr_36163_36192 = state_36147__$1;
(statearr_36163_36192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (14))){
var inst_36140 = (state_36147[(2)]);
var inst_36141 = cljs.core.async.close_BANG_.call(null,out);
var state_36147__$1 = (function (){var statearr_36165 = state_36147;
(statearr_36165[(13)] = inst_36140);

return statearr_36165;
})();
var statearr_36166_36193 = state_36147__$1;
(statearr_36166_36193[(2)] = inst_36141);

(statearr_36166_36193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (10))){
var inst_36130 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
var statearr_36167_36194 = state_36147__$1;
(statearr_36167_36194[(2)] = inst_36130);

(statearr_36167_36194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (8))){
var inst_36115 = (state_36147[(10)]);
var inst_36107 = (state_36147[(7)]);
var inst_36111 = (state_36147[(9)]);
var inst_36120 = inst_36107.push(inst_36111);
var tmp36164 = inst_36107;
var inst_36107__$1 = tmp36164;
var inst_36108 = inst_36115;
var state_36147__$1 = (function (){var statearr_36168 = state_36147;
(statearr_36168[(14)] = inst_36120);

(statearr_36168[(7)] = inst_36107__$1);

(statearr_36168[(8)] = inst_36108);

return statearr_36168;
})();
var statearr_36169_36195 = state_36147__$1;
(statearr_36169_36195[(2)] = null);

(statearr_36169_36195[(1)] = (2));


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
});})(c__33426__auto___36181,out))
;
return ((function (switch__33314__auto__,c__33426__auto___36181,out){
return (function() {
var cljs$core$async$state_machine__33315__auto__ = null;
var cljs$core$async$state_machine__33315__auto____0 = (function (){
var statearr_36173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36173[(0)] = cljs$core$async$state_machine__33315__auto__);

(statearr_36173[(1)] = (1));

return statearr_36173;
});
var cljs$core$async$state_machine__33315__auto____1 = (function (state_36147){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_36147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e36174){if((e36174 instanceof Object)){
var ex__33318__auto__ = e36174;
var statearr_36175_36196 = state_36147;
(statearr_36175_36196[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36197 = state_36147;
state_36147 = G__36197;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
cljs$core$async$state_machine__33315__auto__ = function(state_36147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33315__auto____1.call(this,state_36147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33315__auto____0;
cljs$core$async$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33315__auto____1;
return cljs$core$async$state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___36181,out))
})();
var state__33428__auto__ = (function (){var statearr_36176 = f__33427__auto__.call(null);
(statearr_36176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___36181);

return statearr_36176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___36181,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map