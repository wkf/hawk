// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t48478 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t48478 = (function (f,fn_handler,meta48479){
this.f = f;
this.fn_handler = fn_handler;
this.meta48479 = meta48479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48478.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t48478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t48478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t48478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48480){
var self__ = this;
var _48480__$1 = this;
return self__.meta48479;
});

cljs.core.async.t48478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48480,meta48479__$1){
var self__ = this;
var _48480__$1 = this;
return (new cljs.core.async.t48478(self__.f,self__.fn_handler,meta48479__$1));
});

cljs.core.async.t48478.cljs$lang$type = true;

cljs.core.async.t48478.cljs$lang$ctorStr = "cljs.core.async/t48478";

cljs.core.async.t48478.cljs$lang$ctorPrWriter = (function (this__32524__auto__,writer__32525__auto__,opt__32526__auto__){
return cljs.core._write(writer__32525__auto__,"cljs.core.async/t48478");
});

cljs.core.async.__GT_t48478 = (function __GT_t48478(f__$1,fn_handler__$1,meta48479){
return (new cljs.core.async.t48478(f__$1,fn_handler__$1,meta48479));
});

}

return (new cljs.core.async.t48478(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__48482 = buff;
if(G__48482){
var bit__32618__auto__ = null;
if(cljs.core.truth_((function (){var or__31937__auto__ = bit__32618__auto__;
if(cljs.core.truth_(or__31937__auto__)){
return or__31937__auto__;
} else {
return G__48482.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__48482.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__48482);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__48482);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_48499 = (function (){var G__48496 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48496) : cljs.core.deref.call(null,G__48496));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__48497_48500 = val_48499;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__48497_48500) : fn1.call(null,G__48497_48500));
} else {
cljs.core.async.impl.dispatch.run(((function (val_48499,ret){
return (function (){
var G__48498 = val_48499;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__48498) : fn1.call(null,G__48498));
});})(val_48499,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__48509 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48509) : cljs.core.deref.call(null,G__48509));
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__48510 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48510) : cljs.core.deref.call(null,G__48510));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__48511_48513 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__48511_48513) : fn1.call(null,G__48511_48513));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__48512 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__48512) : fn1.call(null,G__48512));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__32824__auto___48514 = n;
var x_48515 = (0);
while(true){
if((x_48515 < n__32824__auto___48514)){
(a[x_48515] = (0));

var G__48516 = (x_48515 + (1));
x_48515 = G__48516;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__48517 = (i + (1));
i = G__48517;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__48525 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48525) : cljs.core.atom.call(null,G__48525));
})();
if(typeof cljs.core.async.t48526 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t48526 = (function (flag,alt_flag,meta48527){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta48527 = meta48527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48526.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t48526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__48529 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48529) : cljs.core.deref.call(null,G__48529));
});})(flag))
;

cljs.core.async.t48526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__48530_48532 = self__.flag;
var G__48531_48533 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__48530_48532,G__48531_48533) : cljs.core.reset_BANG_.call(null,G__48530_48532,G__48531_48533));

return true;
});})(flag))
;

cljs.core.async.t48526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_48528){
var self__ = this;
var _48528__$1 = this;
return self__.meta48527;
});})(flag))
;

cljs.core.async.t48526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_48528,meta48527__$1){
var self__ = this;
var _48528__$1 = this;
return (new cljs.core.async.t48526(self__.flag,self__.alt_flag,meta48527__$1));
});})(flag))
;

cljs.core.async.t48526.cljs$lang$type = true;

cljs.core.async.t48526.cljs$lang$ctorStr = "cljs.core.async/t48526";

cljs.core.async.t48526.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__32524__auto__,writer__32525__auto__,opt__32526__auto__){
return cljs.core._write(writer__32525__auto__,"cljs.core.async/t48526");
});})(flag))
;

cljs.core.async.__GT_t48526 = ((function (flag){
return (function __GT_t48526(flag__$1,alt_flag__$1,meta48527){
return (new cljs.core.async.t48526(flag__$1,alt_flag__$1,meta48527));
});})(flag))
;

}

return (new cljs.core.async.t48526(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t48537 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t48537 = (function (cb,flag,alt_handler,meta48538){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta48538 = meta48538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48537.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t48537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t48537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t48537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48539){
var self__ = this;
var _48539__$1 = this;
return self__.meta48538;
});

cljs.core.async.t48537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48539,meta48538__$1){
var self__ = this;
var _48539__$1 = this;
return (new cljs.core.async.t48537(self__.cb,self__.flag,self__.alt_handler,meta48538__$1));
});

cljs.core.async.t48537.cljs$lang$type = true;

cljs.core.async.t48537.cljs$lang$ctorStr = "cljs.core.async/t48537";

cljs.core.async.t48537.cljs$lang$ctorPrWriter = (function (this__32524__auto__,writer__32525__auto__,opt__32526__auto__){
return cljs.core._write(writer__32525__auto__,"cljs.core.async/t48537");
});

cljs.core.async.__GT_t48537 = (function __GT_t48537(cb__$1,flag__$1,alt_handler__$1,meta48538){
return (new cljs.core.async.t48537(cb__$1,flag__$1,alt_handler__$1,meta48538));
});

}

return (new cljs.core.async.t48537(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__48547 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__48547) : port.call(null,G__48547));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__48548 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__48548) : port.call(null,G__48548));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48540_SHARP_){
var G__48549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48540_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48549) : fret.call(null,G__48549));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48541_SHARP_){
var G__48550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48541_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48550) : fret.call(null,G__48550));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48551 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48551) : cljs.core.deref.call(null,G__48551));
})(),(function (){var or__31937__auto__ = wport;
if(cljs.core.truth_(or__31937__auto__)){
return or__31937__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48552 = (i + (1));
i = G__48552;
continue;
}
} else {
return null;
}
break;
}
})();
var or__31937__auto__ = ret;
if(cljs.core.truth_(or__31937__auto__)){
return or__31937__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__31925__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__31925__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__31925__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
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
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__48553){
var map__48555 = p__48553;
var map__48555__$1 = ((cljs.core.seq_QMARK_(map__48555))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48555):map__48555);
var opts = map__48555__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__48553 = null;
if (arguments.length > 1) {
var G__48556__i = 0, G__48556__a = new Array(arguments.length -  1);
while (G__48556__i < G__48556__a.length) {G__48556__a[G__48556__i] = arguments[G__48556__i + 1]; ++G__48556__i;}
  p__48553 = new cljs.core.IndexedSeq(G__48556__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__48553);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__48557){
var ports = cljs.core.first(arglist__48557);
var p__48553 = cljs.core.rest(arglist__48557);
return alts_BANG___delegate(ports,p__48553);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__39075__auto___48655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto___48655){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto___48655){
return (function (state_48631){
var state_val_48632 = (state_48631[(1)]);
if((state_val_48632 === (7))){
var inst_48627 = (state_48631[(2)]);
var state_48631__$1 = state_48631;
var statearr_48633_48656 = state_48631__$1;
(statearr_48633_48656[(2)] = inst_48627);

(statearr_48633_48656[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48632 === (1))){
var state_48631__$1 = state_48631;
var statearr_48634_48657 = state_48631__$1;
(statearr_48634_48657[(2)] = null);

(statearr_48634_48657[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48632 === (4))){
var inst_48610 = (state_48631[(7)]);
var inst_48610__$1 = (state_48631[(2)]);
var inst_48611 = (inst_48610__$1 == null);
var state_48631__$1 = (function (){var statearr_48635 = state_48631;
(statearr_48635[(7)] = inst_48610__$1);

return statearr_48635;
})();
if(cljs.core.truth_(inst_48611)){
var statearr_48636_48658 = state_48631__$1;
(statearr_48636_48658[(1)] = (5));

} else {
var statearr_48637_48659 = state_48631__$1;
(statearr_48637_48659[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_48632 === (13))){
var state_48631__$1 = state_48631;
var statearr_48638_48660 = state_48631__$1;
(statearr_48638_48660[(2)] = null);

(statearr_48638_48660[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48632 === (6))){
var inst_48610 = (state_48631[(7)]);
var state_48631__$1 = state_48631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48631__$1,(11),to,inst_48610);
} else {
if((state_val_48632 === (3))){
var inst_48629 = (state_48631[(2)]);
var state_48631__$1 = state_48631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48631__$1,inst_48629);
} else {
if((state_val_48632 === (12))){
var state_48631__$1 = state_48631;
var statearr_48639_48661 = state_48631__$1;
(statearr_48639_48661[(2)] = null);

(statearr_48639_48661[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48632 === (2))){
var state_48631__$1 = state_48631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48631__$1,(4),from);
} else {
if((state_val_48632 === (11))){
var inst_48620 = (state_48631[(2)]);
var state_48631__$1 = state_48631;
if(cljs.core.truth_(inst_48620)){
var statearr_48640_48662 = state_48631__$1;
(statearr_48640_48662[(1)] = (12));

} else {
var statearr_48641_48663 = state_48631__$1;
(statearr_48641_48663[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_48632 === (9))){
var state_48631__$1 = state_48631;
var statearr_48642_48664 = state_48631__$1;
(statearr_48642_48664[(2)] = null);

(statearr_48642_48664[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48632 === (5))){
var state_48631__$1 = state_48631;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48643_48665 = state_48631__$1;
(statearr_48643_48665[(1)] = (8));

} else {
var statearr_48644_48666 = state_48631__$1;
(statearr_48644_48666[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_48632 === (14))){
var inst_48625 = (state_48631[(2)]);
var state_48631__$1 = state_48631;
var statearr_48645_48667 = state_48631__$1;
(statearr_48645_48667[(2)] = inst_48625);

(statearr_48645_48667[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48632 === (10))){
var inst_48617 = (state_48631[(2)]);
var state_48631__$1 = state_48631;
var statearr_48646_48668 = state_48631__$1;
(statearr_48646_48668[(2)] = inst_48617);

(statearr_48646_48668[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48632 === (8))){
var inst_48614 = cljs.core.async.close_BANG_(to);
var state_48631__$1 = state_48631;
var statearr_48647_48669 = state_48631__$1;
(statearr_48647_48669[(2)] = inst_48614);

(statearr_48647_48669[(1)] = (10));


return cljs.core.constant$keyword$21;
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
});})(c__39075__auto___48655))
;
return ((function (switch__38995__auto__,c__39075__auto___48655){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_48651 = [null,null,null,null,null,null,null,null];
(statearr_48651[(0)] = state_machine__38996__auto__);

(statearr_48651[(1)] = (1));

return statearr_48651;
});
var state_machine__38996__auto____1 = (function (state_48631){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_48631);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e48652){if((e48652 instanceof Object)){
var ex__38999__auto__ = e48652;
var statearr_48653_48670 = state_48631;
(statearr_48653_48670[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48631);

return cljs.core.constant$keyword$21;
} else {
throw e48652;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__48671 = state_48631;
state_48631 = G__48671;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_48631){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_48631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto___48655))
})();
var state__39077__auto__ = (function (){var statearr_48654 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_48654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___48655);

return statearr_48654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto___48655))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__48857){
var vec__48858 = p__48857;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48858,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48858,(1),null);
var job = vec__48858;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__39075__auto___49042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto___49042,res,vec__48858,v,p,job,jobs,results){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto___49042,res,vec__48858,v,p,job,jobs,results){
return (function (state_48863){
var state_val_48864 = (state_48863[(1)]);
if((state_val_48864 === (2))){
var inst_48860 = (state_48863[(2)]);
var inst_48861 = cljs.core.async.close_BANG_(res);
var state_48863__$1 = (function (){var statearr_48865 = state_48863;
(statearr_48865[(7)] = inst_48860);

return statearr_48865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48863__$1,inst_48861);
} else {
if((state_val_48864 === (1))){
var state_48863__$1 = state_48863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48863__$1,(2),res,v);
} else {
return null;
}
}
});})(c__39075__auto___49042,res,vec__48858,v,p,job,jobs,results))
;
return ((function (switch__38995__auto__,c__39075__auto___49042,res,vec__48858,v,p,job,jobs,results){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_48869 = [null,null,null,null,null,null,null,null];
(statearr_48869[(0)] = state_machine__38996__auto__);

(statearr_48869[(1)] = (1));

return statearr_48869;
});
var state_machine__38996__auto____1 = (function (state_48863){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_48863);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e48870){if((e48870 instanceof Object)){
var ex__38999__auto__ = e48870;
var statearr_48871_49043 = state_48863;
(statearr_48871_49043[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48863);

return cljs.core.constant$keyword$21;
} else {
throw e48870;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__49044 = state_48863;
state_48863 = G__49044;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_48863){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_48863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto___49042,res,vec__48858,v,p,job,jobs,results))
})();
var state__39077__auto__ = (function (){var statearr_48872 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_48872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___49042);

return statearr_48872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto___49042,res,vec__48858,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__48873){
var vec__48874 = p__48873;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48874,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48874,(1),null);
var job = vec__48874;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__48875_49045 = v;
var G__48876_49046 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__48875_49045,G__48876_49046) : xf.call(null,G__48875_49045,G__48876_49046));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__32824__auto___49047 = n;
var __49048 = (0);
while(true){
if((__49048 < n__32824__auto___49047)){
var G__48877_49049 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__48877_49049) {
case "async":
var c__39075__auto___49051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49048,c__39075__auto___49051,G__48877_49049,n__32824__auto___49047,jobs,results,process,async){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (__49048,c__39075__auto___49051,G__48877_49049,n__32824__auto___49047,jobs,results,process,async){
return (function (state_48890){
var state_val_48891 = (state_48890[(1)]);
if((state_val_48891 === (7))){
var inst_48886 = (state_48890[(2)]);
var state_48890__$1 = state_48890;
var statearr_48892_49052 = state_48890__$1;
(statearr_48892_49052[(2)] = inst_48886);

(statearr_48892_49052[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48891 === (6))){
var state_48890__$1 = state_48890;
var statearr_48893_49053 = state_48890__$1;
(statearr_48893_49053[(2)] = null);

(statearr_48893_49053[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48891 === (5))){
var state_48890__$1 = state_48890;
var statearr_48894_49054 = state_48890__$1;
(statearr_48894_49054[(2)] = null);

(statearr_48894_49054[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48891 === (4))){
var inst_48880 = (state_48890[(2)]);
var inst_48881 = async(inst_48880);
var state_48890__$1 = state_48890;
if(cljs.core.truth_(inst_48881)){
var statearr_48895_49055 = state_48890__$1;
(statearr_48895_49055[(1)] = (5));

} else {
var statearr_48896_49056 = state_48890__$1;
(statearr_48896_49056[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_48891 === (3))){
var inst_48888 = (state_48890[(2)]);
var state_48890__$1 = state_48890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48890__$1,inst_48888);
} else {
if((state_val_48891 === (2))){
var state_48890__$1 = state_48890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48890__$1,(4),jobs);
} else {
if((state_val_48891 === (1))){
var state_48890__$1 = state_48890;
var statearr_48897_49057 = state_48890__$1;
(statearr_48897_49057[(2)] = null);

(statearr_48897_49057[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
});})(__49048,c__39075__auto___49051,G__48877_49049,n__32824__auto___49047,jobs,results,process,async))
;
return ((function (__49048,switch__38995__auto__,c__39075__auto___49051,G__48877_49049,n__32824__auto___49047,jobs,results,process,async){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_48901 = [null,null,null,null,null,null,null];
(statearr_48901[(0)] = state_machine__38996__auto__);

(statearr_48901[(1)] = (1));

return statearr_48901;
});
var state_machine__38996__auto____1 = (function (state_48890){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_48890);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e48902){if((e48902 instanceof Object)){
var ex__38999__auto__ = e48902;
var statearr_48903_49058 = state_48890;
(statearr_48903_49058[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48890);

return cljs.core.constant$keyword$21;
} else {
throw e48902;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__49059 = state_48890;
state_48890 = G__49059;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_48890){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_48890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(__49048,switch__38995__auto__,c__39075__auto___49051,G__48877_49049,n__32824__auto___49047,jobs,results,process,async))
})();
var state__39077__auto__ = (function (){var statearr_48904 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_48904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___49051);

return statearr_48904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(__49048,c__39075__auto___49051,G__48877_49049,n__32824__auto___49047,jobs,results,process,async))
);


break;
case "compute":
var c__39075__auto___49060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49048,c__39075__auto___49060,G__48877_49049,n__32824__auto___49047,jobs,results,process,async){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (__49048,c__39075__auto___49060,G__48877_49049,n__32824__auto___49047,jobs,results,process,async){
return (function (state_48917){
var state_val_48918 = (state_48917[(1)]);
if((state_val_48918 === (7))){
var inst_48913 = (state_48917[(2)]);
var state_48917__$1 = state_48917;
var statearr_48919_49061 = state_48917__$1;
(statearr_48919_49061[(2)] = inst_48913);

(statearr_48919_49061[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48918 === (6))){
var state_48917__$1 = state_48917;
var statearr_48920_49062 = state_48917__$1;
(statearr_48920_49062[(2)] = null);

(statearr_48920_49062[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48918 === (5))){
var state_48917__$1 = state_48917;
var statearr_48921_49063 = state_48917__$1;
(statearr_48921_49063[(2)] = null);

(statearr_48921_49063[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48918 === (4))){
var inst_48907 = (state_48917[(2)]);
var inst_48908 = process(inst_48907);
var state_48917__$1 = state_48917;
if(cljs.core.truth_(inst_48908)){
var statearr_48922_49064 = state_48917__$1;
(statearr_48922_49064[(1)] = (5));

} else {
var statearr_48923_49065 = state_48917__$1;
(statearr_48923_49065[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_48918 === (3))){
var inst_48915 = (state_48917[(2)]);
var state_48917__$1 = state_48917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48917__$1,inst_48915);
} else {
if((state_val_48918 === (2))){
var state_48917__$1 = state_48917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48917__$1,(4),jobs);
} else {
if((state_val_48918 === (1))){
var state_48917__$1 = state_48917;
var statearr_48924_49066 = state_48917__$1;
(statearr_48924_49066[(2)] = null);

(statearr_48924_49066[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
});})(__49048,c__39075__auto___49060,G__48877_49049,n__32824__auto___49047,jobs,results,process,async))
;
return ((function (__49048,switch__38995__auto__,c__39075__auto___49060,G__48877_49049,n__32824__auto___49047,jobs,results,process,async){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_48928 = [null,null,null,null,null,null,null];
(statearr_48928[(0)] = state_machine__38996__auto__);

(statearr_48928[(1)] = (1));

return statearr_48928;
});
var state_machine__38996__auto____1 = (function (state_48917){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_48917);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e48929){if((e48929 instanceof Object)){
var ex__38999__auto__ = e48929;
var statearr_48930_49067 = state_48917;
(statearr_48930_49067[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48917);

return cljs.core.constant$keyword$21;
} else {
throw e48929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__49068 = state_48917;
state_48917 = G__49068;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_48917){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_48917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(__49048,switch__38995__auto__,c__39075__auto___49060,G__48877_49049,n__32824__auto___49047,jobs,results,process,async))
})();
var state__39077__auto__ = (function (){var statearr_48931 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_48931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___49060);

return statearr_48931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(__49048,c__39075__auto___49060,G__48877_49049,n__32824__auto___49047,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__49069 = (__49048 + (1));
__49048 = G__49069;
continue;
} else {
}
break;
}

var c__39075__auto___49070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto___49070,jobs,results,process,async){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto___49070,jobs,results,process,async){
return (function (state_48953){
var state_val_48954 = (state_48953[(1)]);
if((state_val_48954 === (9))){
var inst_48946 = (state_48953[(2)]);
var state_48953__$1 = (function (){var statearr_48955 = state_48953;
(statearr_48955[(7)] = inst_48946);

return statearr_48955;
})();
var statearr_48956_49071 = state_48953__$1;
(statearr_48956_49071[(2)] = null);

(statearr_48956_49071[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48954 === (8))){
var inst_48939 = (state_48953[(8)]);
var inst_48944 = (state_48953[(2)]);
var state_48953__$1 = (function (){var statearr_48957 = state_48953;
(statearr_48957[(9)] = inst_48944);

return statearr_48957;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48953__$1,(9),results,inst_48939);
} else {
if((state_val_48954 === (7))){
var inst_48949 = (state_48953[(2)]);
var state_48953__$1 = state_48953;
var statearr_48958_49072 = state_48953__$1;
(statearr_48958_49072[(2)] = inst_48949);

(statearr_48958_49072[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48954 === (6))){
var inst_48934 = (state_48953[(10)]);
var inst_48939 = (state_48953[(8)]);
var inst_48939__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_48940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48941 = [inst_48934,inst_48939__$1];
var inst_48942 = (new cljs.core.PersistentVector(null,2,(5),inst_48940,inst_48941,null));
var state_48953__$1 = (function (){var statearr_48959 = state_48953;
(statearr_48959[(8)] = inst_48939__$1);

return statearr_48959;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48953__$1,(8),jobs,inst_48942);
} else {
if((state_val_48954 === (5))){
var inst_48937 = cljs.core.async.close_BANG_(jobs);
var state_48953__$1 = state_48953;
var statearr_48960_49073 = state_48953__$1;
(statearr_48960_49073[(2)] = inst_48937);

(statearr_48960_49073[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_48954 === (4))){
var inst_48934 = (state_48953[(10)]);
var inst_48934__$1 = (state_48953[(2)]);
var inst_48935 = (inst_48934__$1 == null);
var state_48953__$1 = (function (){var statearr_48961 = state_48953;
(statearr_48961[(10)] = inst_48934__$1);

return statearr_48961;
})();
if(cljs.core.truth_(inst_48935)){
var statearr_48962_49074 = state_48953__$1;
(statearr_48962_49074[(1)] = (5));

} else {
var statearr_48963_49075 = state_48953__$1;
(statearr_48963_49075[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_48954 === (3))){
var inst_48951 = (state_48953[(2)]);
var state_48953__$1 = state_48953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48953__$1,inst_48951);
} else {
if((state_val_48954 === (2))){
var state_48953__$1 = state_48953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48953__$1,(4),from);
} else {
if((state_val_48954 === (1))){
var state_48953__$1 = state_48953;
var statearr_48964_49076 = state_48953__$1;
(statearr_48964_49076[(2)] = null);

(statearr_48964_49076[(1)] = (2));


return cljs.core.constant$keyword$21;
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
});})(c__39075__auto___49070,jobs,results,process,async))
;
return ((function (switch__38995__auto__,c__39075__auto___49070,jobs,results,process,async){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_48968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48968[(0)] = state_machine__38996__auto__);

(statearr_48968[(1)] = (1));

return statearr_48968;
});
var state_machine__38996__auto____1 = (function (state_48953){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_48953);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e48969){if((e48969 instanceof Object)){
var ex__38999__auto__ = e48969;
var statearr_48970_49077 = state_48953;
(statearr_48970_49077[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48953);

return cljs.core.constant$keyword$21;
} else {
throw e48969;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__49078 = state_48953;
state_48953 = G__49078;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_48953){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_48953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto___49070,jobs,results,process,async))
})();
var state__39077__auto__ = (function (){var statearr_48971 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_48971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___49070);

return statearr_48971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto___49070,jobs,results,process,async))
);


var c__39075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto__,jobs,results,process,async){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto__,jobs,results,process,async){
return (function (state_49009){
var state_val_49010 = (state_49009[(1)]);
if((state_val_49010 === (7))){
var inst_49005 = (state_49009[(2)]);
var state_49009__$1 = state_49009;
var statearr_49011_49079 = state_49009__$1;
(statearr_49011_49079[(2)] = inst_49005);

(statearr_49011_49079[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49010 === (20))){
var state_49009__$1 = state_49009;
var statearr_49012_49080 = state_49009__$1;
(statearr_49012_49080[(2)] = null);

(statearr_49012_49080[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49010 === (1))){
var state_49009__$1 = state_49009;
var statearr_49013_49081 = state_49009__$1;
(statearr_49013_49081[(2)] = null);

(statearr_49013_49081[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49010 === (4))){
var inst_48974 = (state_49009[(7)]);
var inst_48974__$1 = (state_49009[(2)]);
var inst_48975 = (inst_48974__$1 == null);
var state_49009__$1 = (function (){var statearr_49014 = state_49009;
(statearr_49014[(7)] = inst_48974__$1);

return statearr_49014;
})();
if(cljs.core.truth_(inst_48975)){
var statearr_49015_49082 = state_49009__$1;
(statearr_49015_49082[(1)] = (5));

} else {
var statearr_49016_49083 = state_49009__$1;
(statearr_49016_49083[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49010 === (15))){
var inst_48987 = (state_49009[(8)]);
var state_49009__$1 = state_49009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49009__$1,(18),to,inst_48987);
} else {
if((state_val_49010 === (21))){
var inst_49000 = (state_49009[(2)]);
var state_49009__$1 = state_49009;
var statearr_49017_49084 = state_49009__$1;
(statearr_49017_49084[(2)] = inst_49000);

(statearr_49017_49084[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49010 === (13))){
var inst_49002 = (state_49009[(2)]);
var state_49009__$1 = (function (){var statearr_49018 = state_49009;
(statearr_49018[(9)] = inst_49002);

return statearr_49018;
})();
var statearr_49019_49085 = state_49009__$1;
(statearr_49019_49085[(2)] = null);

(statearr_49019_49085[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49010 === (6))){
var inst_48974 = (state_49009[(7)]);
var state_49009__$1 = state_49009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49009__$1,(11),inst_48974);
} else {
if((state_val_49010 === (17))){
var inst_48995 = (state_49009[(2)]);
var state_49009__$1 = state_49009;
if(cljs.core.truth_(inst_48995)){
var statearr_49020_49086 = state_49009__$1;
(statearr_49020_49086[(1)] = (19));

} else {
var statearr_49021_49087 = state_49009__$1;
(statearr_49021_49087[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49010 === (3))){
var inst_49007 = (state_49009[(2)]);
var state_49009__$1 = state_49009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49009__$1,inst_49007);
} else {
if((state_val_49010 === (12))){
var inst_48984 = (state_49009[(10)]);
var state_49009__$1 = state_49009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49009__$1,(14),inst_48984);
} else {
if((state_val_49010 === (2))){
var state_49009__$1 = state_49009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49009__$1,(4),results);
} else {
if((state_val_49010 === (19))){
var state_49009__$1 = state_49009;
var statearr_49022_49088 = state_49009__$1;
(statearr_49022_49088[(2)] = null);

(statearr_49022_49088[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49010 === (11))){
var inst_48984 = (state_49009[(2)]);
var state_49009__$1 = (function (){var statearr_49023 = state_49009;
(statearr_49023[(10)] = inst_48984);

return statearr_49023;
})();
var statearr_49024_49089 = state_49009__$1;
(statearr_49024_49089[(2)] = null);

(statearr_49024_49089[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49010 === (9))){
var state_49009__$1 = state_49009;
var statearr_49025_49090 = state_49009__$1;
(statearr_49025_49090[(2)] = null);

(statearr_49025_49090[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49010 === (5))){
var state_49009__$1 = state_49009;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49026_49091 = state_49009__$1;
(statearr_49026_49091[(1)] = (8));

} else {
var statearr_49027_49092 = state_49009__$1;
(statearr_49027_49092[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49010 === (14))){
var inst_48989 = (state_49009[(11)]);
var inst_48987 = (state_49009[(8)]);
var inst_48987__$1 = (state_49009[(2)]);
var inst_48988 = (inst_48987__$1 == null);
var inst_48989__$1 = cljs.core.not(inst_48988);
var state_49009__$1 = (function (){var statearr_49028 = state_49009;
(statearr_49028[(11)] = inst_48989__$1);

(statearr_49028[(8)] = inst_48987__$1);

return statearr_49028;
})();
if(inst_48989__$1){
var statearr_49029_49093 = state_49009__$1;
(statearr_49029_49093[(1)] = (15));

} else {
var statearr_49030_49094 = state_49009__$1;
(statearr_49030_49094[(1)] = (16));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49010 === (16))){
var inst_48989 = (state_49009[(11)]);
var state_49009__$1 = state_49009;
var statearr_49031_49095 = state_49009__$1;
(statearr_49031_49095[(2)] = inst_48989);

(statearr_49031_49095[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49010 === (10))){
var inst_48981 = (state_49009[(2)]);
var state_49009__$1 = state_49009;
var statearr_49032_49096 = state_49009__$1;
(statearr_49032_49096[(2)] = inst_48981);

(statearr_49032_49096[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49010 === (18))){
var inst_48992 = (state_49009[(2)]);
var state_49009__$1 = state_49009;
var statearr_49033_49097 = state_49009__$1;
(statearr_49033_49097[(2)] = inst_48992);

(statearr_49033_49097[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49010 === (8))){
var inst_48978 = cljs.core.async.close_BANG_(to);
var state_49009__$1 = state_49009;
var statearr_49034_49098 = state_49009__$1;
(statearr_49034_49098[(2)] = inst_48978);

(statearr_49034_49098[(1)] = (10));


return cljs.core.constant$keyword$21;
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
});})(c__39075__auto__,jobs,results,process,async))
;
return ((function (switch__38995__auto__,c__39075__auto__,jobs,results,process,async){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_49038 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49038[(0)] = state_machine__38996__auto__);

(statearr_49038[(1)] = (1));

return statearr_49038;
});
var state_machine__38996__auto____1 = (function (state_49009){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_49009);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e49039){if((e49039 instanceof Object)){
var ex__38999__auto__ = e49039;
var statearr_49040_49099 = state_49009;
(statearr_49040_49099[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49009);

return cljs.core.constant$keyword$21;
} else {
throw e49039;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__49100 = state_49009;
state_49009 = G__49100;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_49009){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_49009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto__,jobs,results,process,async))
})();
var state__39077__auto__ = (function (){var statearr_49041 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_49041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto__);

return statearr_49041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto__,jobs,results,process,async))
);

return c__39075__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$28);
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$29);
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__39075__auto___49223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto___49223,tc,fc){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto___49223,tc,fc){
return (function (state_49197){
var state_val_49198 = (state_49197[(1)]);
if((state_val_49198 === (7))){
var inst_49193 = (state_49197[(2)]);
var state_49197__$1 = state_49197;
var statearr_49199_49224 = state_49197__$1;
(statearr_49199_49224[(2)] = inst_49193);

(statearr_49199_49224[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49198 === (1))){
var state_49197__$1 = state_49197;
var statearr_49200_49225 = state_49197__$1;
(statearr_49200_49225[(2)] = null);

(statearr_49200_49225[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49198 === (4))){
var inst_49174 = (state_49197[(7)]);
var inst_49174__$1 = (state_49197[(2)]);
var inst_49175 = (inst_49174__$1 == null);
var state_49197__$1 = (function (){var statearr_49201 = state_49197;
(statearr_49201[(7)] = inst_49174__$1);

return statearr_49201;
})();
if(cljs.core.truth_(inst_49175)){
var statearr_49202_49226 = state_49197__$1;
(statearr_49202_49226[(1)] = (5));

} else {
var statearr_49203_49227 = state_49197__$1;
(statearr_49203_49227[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49198 === (13))){
var state_49197__$1 = state_49197;
var statearr_49204_49228 = state_49197__$1;
(statearr_49204_49228[(2)] = null);

(statearr_49204_49228[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49198 === (6))){
var inst_49174 = (state_49197[(7)]);
var inst_49180 = (function (){var G__49205 = inst_49174;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__49205) : p.call(null,G__49205));
})();
var state_49197__$1 = state_49197;
if(cljs.core.truth_(inst_49180)){
var statearr_49206_49229 = state_49197__$1;
(statearr_49206_49229[(1)] = (9));

} else {
var statearr_49207_49230 = state_49197__$1;
(statearr_49207_49230[(1)] = (10));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49198 === (3))){
var inst_49195 = (state_49197[(2)]);
var state_49197__$1 = state_49197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49197__$1,inst_49195);
} else {
if((state_val_49198 === (12))){
var state_49197__$1 = state_49197;
var statearr_49208_49231 = state_49197__$1;
(statearr_49208_49231[(2)] = null);

(statearr_49208_49231[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49198 === (2))){
var state_49197__$1 = state_49197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49197__$1,(4),ch);
} else {
if((state_val_49198 === (11))){
var inst_49174 = (state_49197[(7)]);
var inst_49184 = (state_49197[(2)]);
var state_49197__$1 = state_49197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49197__$1,(8),inst_49184,inst_49174);
} else {
if((state_val_49198 === (9))){
var state_49197__$1 = state_49197;
var statearr_49209_49232 = state_49197__$1;
(statearr_49209_49232[(2)] = tc);

(statearr_49209_49232[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49198 === (5))){
var inst_49177 = cljs.core.async.close_BANG_(tc);
var inst_49178 = cljs.core.async.close_BANG_(fc);
var state_49197__$1 = (function (){var statearr_49210 = state_49197;
(statearr_49210[(8)] = inst_49177);

return statearr_49210;
})();
var statearr_49211_49233 = state_49197__$1;
(statearr_49211_49233[(2)] = inst_49178);

(statearr_49211_49233[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49198 === (14))){
var inst_49191 = (state_49197[(2)]);
var state_49197__$1 = state_49197;
var statearr_49212_49234 = state_49197__$1;
(statearr_49212_49234[(2)] = inst_49191);

(statearr_49212_49234[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49198 === (10))){
var state_49197__$1 = state_49197;
var statearr_49213_49235 = state_49197__$1;
(statearr_49213_49235[(2)] = fc);

(statearr_49213_49235[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49198 === (8))){
var inst_49186 = (state_49197[(2)]);
var state_49197__$1 = state_49197;
if(cljs.core.truth_(inst_49186)){
var statearr_49214_49236 = state_49197__$1;
(statearr_49214_49236[(1)] = (12));

} else {
var statearr_49215_49237 = state_49197__$1;
(statearr_49215_49237[(1)] = (13));

}

return cljs.core.constant$keyword$21;
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
});})(c__39075__auto___49223,tc,fc))
;
return ((function (switch__38995__auto__,c__39075__auto___49223,tc,fc){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_49219 = [null,null,null,null,null,null,null,null,null];
(statearr_49219[(0)] = state_machine__38996__auto__);

(statearr_49219[(1)] = (1));

return statearr_49219;
});
var state_machine__38996__auto____1 = (function (state_49197){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_49197);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e49220){if((e49220 instanceof Object)){
var ex__38999__auto__ = e49220;
var statearr_49221_49238 = state_49197;
(statearr_49221_49238[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49197);

return cljs.core.constant$keyword$21;
} else {
throw e49220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__49239 = state_49197;
state_49197 = G__49239;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_49197){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_49197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto___49223,tc,fc))
})();
var state__39077__auto__ = (function (){var statearr_49222 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_49222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___49223);

return statearr_49222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto___49223,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__39075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto__){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto__){
return (function (state_49288){
var state_val_49289 = (state_49288[(1)]);
if((state_val_49289 === (7))){
var inst_49284 = (state_49288[(2)]);
var state_49288__$1 = state_49288;
var statearr_49290_49308 = state_49288__$1;
(statearr_49290_49308[(2)] = inst_49284);

(statearr_49290_49308[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49289 === (6))){
var inst_49274 = (state_49288[(7)]);
var inst_49277 = (state_49288[(8)]);
var inst_49281 = (function (){var G__49291 = inst_49274;
var G__49292 = inst_49277;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__49291,G__49292) : f.call(null,G__49291,G__49292));
})();
var inst_49274__$1 = inst_49281;
var state_49288__$1 = (function (){var statearr_49293 = state_49288;
(statearr_49293[(7)] = inst_49274__$1);

return statearr_49293;
})();
var statearr_49294_49309 = state_49288__$1;
(statearr_49294_49309[(2)] = null);

(statearr_49294_49309[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49289 === (5))){
var inst_49274 = (state_49288[(7)]);
var state_49288__$1 = state_49288;
var statearr_49295_49310 = state_49288__$1;
(statearr_49295_49310[(2)] = inst_49274);

(statearr_49295_49310[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49289 === (4))){
var inst_49277 = (state_49288[(8)]);
var inst_49277__$1 = (state_49288[(2)]);
var inst_49278 = (inst_49277__$1 == null);
var state_49288__$1 = (function (){var statearr_49296 = state_49288;
(statearr_49296[(8)] = inst_49277__$1);

return statearr_49296;
})();
if(cljs.core.truth_(inst_49278)){
var statearr_49297_49311 = state_49288__$1;
(statearr_49297_49311[(1)] = (5));

} else {
var statearr_49298_49312 = state_49288__$1;
(statearr_49298_49312[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49289 === (3))){
var inst_49286 = (state_49288[(2)]);
var state_49288__$1 = state_49288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49288__$1,inst_49286);
} else {
if((state_val_49289 === (2))){
var state_49288__$1 = state_49288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49288__$1,(4),ch);
} else {
if((state_val_49289 === (1))){
var inst_49274 = init;
var state_49288__$1 = (function (){var statearr_49299 = state_49288;
(statearr_49299[(7)] = inst_49274);

return statearr_49299;
})();
var statearr_49300_49313 = state_49288__$1;
(statearr_49300_49313[(2)] = null);

(statearr_49300_49313[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
});})(c__39075__auto__))
;
return ((function (switch__38995__auto__,c__39075__auto__){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_49304 = [null,null,null,null,null,null,null,null,null];
(statearr_49304[(0)] = state_machine__38996__auto__);

(statearr_49304[(1)] = (1));

return statearr_49304;
});
var state_machine__38996__auto____1 = (function (state_49288){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_49288);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e49305){if((e49305 instanceof Object)){
var ex__38999__auto__ = e49305;
var statearr_49306_49314 = state_49288;
(statearr_49306_49314[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49288);

return cljs.core.constant$keyword$21;
} else {
throw e49305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__49315 = state_49288;
state_49288 = G__49315;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_49288){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_49288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto__))
})();
var state__39077__auto__ = (function (){var statearr_49307 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_49307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto__);

return statearr_49307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto__))
);

return c__39075__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__39075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto__){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto__){
return (function (state_49392){
var state_val_49393 = (state_49392[(1)]);
if((state_val_49393 === (7))){
var inst_49374 = (state_49392[(2)]);
var state_49392__$1 = state_49392;
var statearr_49394_49417 = state_49392__$1;
(statearr_49394_49417[(2)] = inst_49374);

(statearr_49394_49417[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49393 === (1))){
var inst_49368 = cljs.core.seq(coll);
var inst_49369 = inst_49368;
var state_49392__$1 = (function (){var statearr_49395 = state_49392;
(statearr_49395[(7)] = inst_49369);

return statearr_49395;
})();
var statearr_49396_49418 = state_49392__$1;
(statearr_49396_49418[(2)] = null);

(statearr_49396_49418[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49393 === (4))){
var inst_49369 = (state_49392[(7)]);
var inst_49372 = cljs.core.first(inst_49369);
var state_49392__$1 = state_49392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49392__$1,(7),ch,inst_49372);
} else {
if((state_val_49393 === (13))){
var inst_49386 = (state_49392[(2)]);
var state_49392__$1 = state_49392;
var statearr_49397_49419 = state_49392__$1;
(statearr_49397_49419[(2)] = inst_49386);

(statearr_49397_49419[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49393 === (6))){
var inst_49377 = (state_49392[(2)]);
var state_49392__$1 = state_49392;
if(cljs.core.truth_(inst_49377)){
var statearr_49398_49420 = state_49392__$1;
(statearr_49398_49420[(1)] = (8));

} else {
var statearr_49399_49421 = state_49392__$1;
(statearr_49399_49421[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49393 === (3))){
var inst_49390 = (state_49392[(2)]);
var state_49392__$1 = state_49392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49392__$1,inst_49390);
} else {
if((state_val_49393 === (12))){
var state_49392__$1 = state_49392;
var statearr_49400_49422 = state_49392__$1;
(statearr_49400_49422[(2)] = null);

(statearr_49400_49422[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49393 === (2))){
var inst_49369 = (state_49392[(7)]);
var state_49392__$1 = state_49392;
if(cljs.core.truth_(inst_49369)){
var statearr_49401_49423 = state_49392__$1;
(statearr_49401_49423[(1)] = (4));

} else {
var statearr_49402_49424 = state_49392__$1;
(statearr_49402_49424[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49393 === (11))){
var inst_49383 = cljs.core.async.close_BANG_(ch);
var state_49392__$1 = state_49392;
var statearr_49403_49425 = state_49392__$1;
(statearr_49403_49425[(2)] = inst_49383);

(statearr_49403_49425[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49393 === (9))){
var state_49392__$1 = state_49392;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49404_49426 = state_49392__$1;
(statearr_49404_49426[(1)] = (11));

} else {
var statearr_49405_49427 = state_49392__$1;
(statearr_49405_49427[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49393 === (5))){
var inst_49369 = (state_49392[(7)]);
var state_49392__$1 = state_49392;
var statearr_49406_49428 = state_49392__$1;
(statearr_49406_49428[(2)] = inst_49369);

(statearr_49406_49428[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49393 === (10))){
var inst_49388 = (state_49392[(2)]);
var state_49392__$1 = state_49392;
var statearr_49407_49429 = state_49392__$1;
(statearr_49407_49429[(2)] = inst_49388);

(statearr_49407_49429[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49393 === (8))){
var inst_49369 = (state_49392[(7)]);
var inst_49379 = cljs.core.next(inst_49369);
var inst_49369__$1 = inst_49379;
var state_49392__$1 = (function (){var statearr_49408 = state_49392;
(statearr_49408[(7)] = inst_49369__$1);

return statearr_49408;
})();
var statearr_49409_49430 = state_49392__$1;
(statearr_49409_49430[(2)] = null);

(statearr_49409_49430[(1)] = (2));


return cljs.core.constant$keyword$21;
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
});})(c__39075__auto__))
;
return ((function (switch__38995__auto__,c__39075__auto__){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_49413 = [null,null,null,null,null,null,null,null];
(statearr_49413[(0)] = state_machine__38996__auto__);

(statearr_49413[(1)] = (1));

return statearr_49413;
});
var state_machine__38996__auto____1 = (function (state_49392){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_49392);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e49414){if((e49414 instanceof Object)){
var ex__38999__auto__ = e49414;
var statearr_49415_49431 = state_49392;
(statearr_49415_49431[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49392);

return cljs.core.constant$keyword$21;
} else {
throw e49414;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__49432 = state_49392;
state_49392 = G__49432;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_49392){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_49392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto__))
})();
var state__39077__auto__ = (function (){var statearr_49416 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_49416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto__);

return statearr_49416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto__))
);

return c__39075__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj49434 = {};
return obj49434;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__31925__auto__ = _;
if(and__31925__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__31925__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__32581__auto__ = (((_ == null))?null:_);
return (function (){var or__31937__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__49438 = x__32581__auto__;
return goog.typeOf(G__49438);
})()]);
if(or__31937__auto__){
return or__31937__auto__;
} else {
var or__31937__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__31937__auto____$1){
return or__31937__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj49440 = {};
return obj49440;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__31925__auto__ = m;
if(and__31925__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__31925__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__32581__auto__ = (((m == null))?null:m);
return (function (){var or__31937__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__49444 = x__32581__auto__;
return goog.typeOf(G__49444);
})()]);
if(or__31937__auto__){
return or__31937__auto__;
} else {
var or__31937__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__31937__auto____$1){
return or__31937__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__31925__auto__ = m;
if(and__31925__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__31925__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__32581__auto__ = (((m == null))?null:m);
return (function (){var or__31937__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__49448 = x__32581__auto__;
return goog.typeOf(G__49448);
})()]);
if(or__31937__auto__){
return or__31937__auto__;
} else {
var or__31937__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__31937__auto____$1){
return or__31937__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__31925__auto__ = m;
if(and__31925__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__31925__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__32581__auto__ = (((m == null))?null:m);
return (function (){var or__31937__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__49452 = x__32581__auto__;
return goog.typeOf(G__49452);
})()]);
if(or__31937__auto__){
return or__31937__auto__;
} else {
var or__31937__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__31937__auto____$1){
return or__31937__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = (function (){var G__49682 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49682) : cljs.core.atom.call(null,G__49682));
})();
var m = (function (){
if(typeof cljs.core.async.t49683 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t49683 = (function (cs,ch,mult,meta49684){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta49684 = meta49684;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49683.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t49683.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t49683.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t49683.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__49686_49911 = self__.cs;
var G__49687_49912 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49686_49911,G__49687_49912) : cljs.core.reset_BANG_.call(null,G__49686_49911,G__49687_49912));

return null;
});})(cs))
;

cljs.core.async.t49683.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t49683.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t49683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_49685){
var self__ = this;
var _49685__$1 = this;
return self__.meta49684;
});})(cs))
;

cljs.core.async.t49683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_49685,meta49684__$1){
var self__ = this;
var _49685__$1 = this;
return (new cljs.core.async.t49683(self__.cs,self__.ch,self__.mult,meta49684__$1));
});})(cs))
;

cljs.core.async.t49683.cljs$lang$type = true;

cljs.core.async.t49683.cljs$lang$ctorStr = "cljs.core.async/t49683";

cljs.core.async.t49683.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__32524__auto__,writer__32525__auto__,opt__32526__auto__){
return cljs.core._write(writer__32525__auto__,"cljs.core.async/t49683");
});})(cs))
;

cljs.core.async.__GT_t49683 = ((function (cs){
return (function __GT_t49683(cs__$1,ch__$1,mult__$1,meta49684){
return (new cljs.core.async.t49683(cs__$1,ch__$1,mult__$1,meta49684));
});})(cs))
;

}

return (new cljs.core.async.t49683(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__49688 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49688) : cljs.core.atom.call(null,G__49688));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__39075__auto___49913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto___49913,cs,m,dchan,dctr,done){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto___49913,cs,m,dchan,dctr,done){
return (function (state_49819){
var state_val_49820 = (state_49819[(1)]);
if((state_val_49820 === (7))){
var inst_49815 = (state_49819[(2)]);
var state_49819__$1 = state_49819;
var statearr_49821_49914 = state_49819__$1;
(statearr_49821_49914[(2)] = inst_49815);

(statearr_49821_49914[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (20))){
var inst_49720 = (state_49819[(7)]);
var inst_49730 = cljs.core.first(inst_49720);
var inst_49731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49730,(0),null);
var inst_49732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49730,(1),null);
var state_49819__$1 = (function (){var statearr_49822 = state_49819;
(statearr_49822[(8)] = inst_49731);

return statearr_49822;
})();
if(cljs.core.truth_(inst_49732)){
var statearr_49823_49915 = state_49819__$1;
(statearr_49823_49915[(1)] = (22));

} else {
var statearr_49824_49916 = state_49819__$1;
(statearr_49824_49916[(1)] = (23));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (27))){
var inst_49762 = (state_49819[(9)]);
var inst_49767 = (state_49819[(10)]);
var inst_49691 = (state_49819[(11)]);
var inst_49760 = (state_49819[(12)]);
var inst_49767__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49760,inst_49762);
var inst_49768 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49767__$1,inst_49691,done);
var state_49819__$1 = (function (){var statearr_49825 = state_49819;
(statearr_49825[(10)] = inst_49767__$1);

return statearr_49825;
})();
if(cljs.core.truth_(inst_49768)){
var statearr_49826_49917 = state_49819__$1;
(statearr_49826_49917[(1)] = (30));

} else {
var statearr_49827_49918 = state_49819__$1;
(statearr_49827_49918[(1)] = (31));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (1))){
var state_49819__$1 = state_49819;
var statearr_49828_49919 = state_49819__$1;
(statearr_49828_49919[(2)] = null);

(statearr_49828_49919[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (24))){
var inst_49720 = (state_49819[(7)]);
var inst_49737 = (state_49819[(2)]);
var inst_49738 = cljs.core.next(inst_49720);
var inst_49700 = inst_49738;
var inst_49701 = null;
var inst_49702 = (0);
var inst_49703 = (0);
var state_49819__$1 = (function (){var statearr_49829 = state_49819;
(statearr_49829[(13)] = inst_49702);

(statearr_49829[(14)] = inst_49703);

(statearr_49829[(15)] = inst_49700);

(statearr_49829[(16)] = inst_49737);

(statearr_49829[(17)] = inst_49701);

return statearr_49829;
})();
var statearr_49830_49920 = state_49819__$1;
(statearr_49830_49920[(2)] = null);

(statearr_49830_49920[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (39))){
var state_49819__$1 = state_49819;
var statearr_49834_49921 = state_49819__$1;
(statearr_49834_49921[(2)] = null);

(statearr_49834_49921[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (4))){
var inst_49691 = (state_49819[(11)]);
var inst_49691__$1 = (state_49819[(2)]);
var inst_49692 = (inst_49691__$1 == null);
var state_49819__$1 = (function (){var statearr_49835 = state_49819;
(statearr_49835[(11)] = inst_49691__$1);

return statearr_49835;
})();
if(cljs.core.truth_(inst_49692)){
var statearr_49836_49922 = state_49819__$1;
(statearr_49836_49922[(1)] = (5));

} else {
var statearr_49837_49923 = state_49819__$1;
(statearr_49837_49923[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (15))){
var inst_49702 = (state_49819[(13)]);
var inst_49703 = (state_49819[(14)]);
var inst_49700 = (state_49819[(15)]);
var inst_49701 = (state_49819[(17)]);
var inst_49716 = (state_49819[(2)]);
var inst_49717 = (inst_49703 + (1));
var tmp49831 = inst_49702;
var tmp49832 = inst_49700;
var tmp49833 = inst_49701;
var inst_49700__$1 = tmp49832;
var inst_49701__$1 = tmp49833;
var inst_49702__$1 = tmp49831;
var inst_49703__$1 = inst_49717;
var state_49819__$1 = (function (){var statearr_49838 = state_49819;
(statearr_49838[(13)] = inst_49702__$1);

(statearr_49838[(18)] = inst_49716);

(statearr_49838[(14)] = inst_49703__$1);

(statearr_49838[(15)] = inst_49700__$1);

(statearr_49838[(17)] = inst_49701__$1);

return statearr_49838;
})();
var statearr_49839_49924 = state_49819__$1;
(statearr_49839_49924[(2)] = null);

(statearr_49839_49924[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (21))){
var inst_49741 = (state_49819[(2)]);
var state_49819__$1 = state_49819;
var statearr_49843_49925 = state_49819__$1;
(statearr_49843_49925[(2)] = inst_49741);

(statearr_49843_49925[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (31))){
var inst_49767 = (state_49819[(10)]);
var inst_49771 = done(null);
var inst_49772 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49767);
var state_49819__$1 = (function (){var statearr_49844 = state_49819;
(statearr_49844[(19)] = inst_49771);

return statearr_49844;
})();
var statearr_49845_49926 = state_49819__$1;
(statearr_49845_49926[(2)] = inst_49772);

(statearr_49845_49926[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (32))){
var inst_49762 = (state_49819[(9)]);
var inst_49759 = (state_49819[(20)]);
var inst_49760 = (state_49819[(12)]);
var inst_49761 = (state_49819[(21)]);
var inst_49774 = (state_49819[(2)]);
var inst_49775 = (inst_49762 + (1));
var tmp49840 = inst_49759;
var tmp49841 = inst_49760;
var tmp49842 = inst_49761;
var inst_49759__$1 = tmp49840;
var inst_49760__$1 = tmp49841;
var inst_49761__$1 = tmp49842;
var inst_49762__$1 = inst_49775;
var state_49819__$1 = (function (){var statearr_49846 = state_49819;
(statearr_49846[(9)] = inst_49762__$1);

(statearr_49846[(20)] = inst_49759__$1);

(statearr_49846[(12)] = inst_49760__$1);

(statearr_49846[(21)] = inst_49761__$1);

(statearr_49846[(22)] = inst_49774);

return statearr_49846;
})();
var statearr_49847_49927 = state_49819__$1;
(statearr_49847_49927[(2)] = null);

(statearr_49847_49927[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (40))){
var inst_49787 = (state_49819[(23)]);
var inst_49791 = done(null);
var inst_49792 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49787);
var state_49819__$1 = (function (){var statearr_49848 = state_49819;
(statearr_49848[(24)] = inst_49791);

return statearr_49848;
})();
var statearr_49849_49928 = state_49819__$1;
(statearr_49849_49928[(2)] = inst_49792);

(statearr_49849_49928[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (33))){
var inst_49778 = (state_49819[(25)]);
var inst_49780 = cljs.core.chunked_seq_QMARK_(inst_49778);
var state_49819__$1 = state_49819;
if(inst_49780){
var statearr_49850_49929 = state_49819__$1;
(statearr_49850_49929[(1)] = (36));

} else {
var statearr_49851_49930 = state_49819__$1;
(statearr_49851_49930[(1)] = (37));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (13))){
var inst_49710 = (state_49819[(26)]);
var inst_49713 = cljs.core.async.close_BANG_(inst_49710);
var state_49819__$1 = state_49819;
var statearr_49852_49931 = state_49819__$1;
(statearr_49852_49931[(2)] = inst_49713);

(statearr_49852_49931[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (22))){
var inst_49731 = (state_49819[(8)]);
var inst_49734 = cljs.core.async.close_BANG_(inst_49731);
var state_49819__$1 = state_49819;
var statearr_49853_49932 = state_49819__$1;
(statearr_49853_49932[(2)] = inst_49734);

(statearr_49853_49932[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (36))){
var inst_49778 = (state_49819[(25)]);
var inst_49782 = cljs.core.chunk_first(inst_49778);
var inst_49783 = cljs.core.chunk_rest(inst_49778);
var inst_49784 = cljs.core.count(inst_49782);
var inst_49759 = inst_49783;
var inst_49760 = inst_49782;
var inst_49761 = inst_49784;
var inst_49762 = (0);
var state_49819__$1 = (function (){var statearr_49854 = state_49819;
(statearr_49854[(9)] = inst_49762);

(statearr_49854[(20)] = inst_49759);

(statearr_49854[(12)] = inst_49760);

(statearr_49854[(21)] = inst_49761);

return statearr_49854;
})();
var statearr_49855_49933 = state_49819__$1;
(statearr_49855_49933[(2)] = null);

(statearr_49855_49933[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (41))){
var inst_49778 = (state_49819[(25)]);
var inst_49794 = (state_49819[(2)]);
var inst_49795 = cljs.core.next(inst_49778);
var inst_49759 = inst_49795;
var inst_49760 = null;
var inst_49761 = (0);
var inst_49762 = (0);
var state_49819__$1 = (function (){var statearr_49856 = state_49819;
(statearr_49856[(9)] = inst_49762);

(statearr_49856[(20)] = inst_49759);

(statearr_49856[(27)] = inst_49794);

(statearr_49856[(12)] = inst_49760);

(statearr_49856[(21)] = inst_49761);

return statearr_49856;
})();
var statearr_49857_49934 = state_49819__$1;
(statearr_49857_49934[(2)] = null);

(statearr_49857_49934[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (43))){
var state_49819__$1 = state_49819;
var statearr_49858_49935 = state_49819__$1;
(statearr_49858_49935[(2)] = null);

(statearr_49858_49935[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (29))){
var inst_49803 = (state_49819[(2)]);
var state_49819__$1 = state_49819;
var statearr_49859_49936 = state_49819__$1;
(statearr_49859_49936[(2)] = inst_49803);

(statearr_49859_49936[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (44))){
var inst_49812 = (state_49819[(2)]);
var state_49819__$1 = (function (){var statearr_49860 = state_49819;
(statearr_49860[(28)] = inst_49812);

return statearr_49860;
})();
var statearr_49861_49937 = state_49819__$1;
(statearr_49861_49937[(2)] = null);

(statearr_49861_49937[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (6))){
var inst_49751 = (state_49819[(29)]);
var inst_49750 = (function (){var G__49862 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49862) : cljs.core.deref.call(null,G__49862));
})();
var inst_49751__$1 = cljs.core.keys(inst_49750);
var inst_49752 = cljs.core.count(inst_49751__$1);
var inst_49753 = (function (){var G__49863 = dctr;
var G__49864 = inst_49752;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49863,G__49864) : cljs.core.reset_BANG_.call(null,G__49863,G__49864));
})();
var inst_49758 = cljs.core.seq(inst_49751__$1);
var inst_49759 = inst_49758;
var inst_49760 = null;
var inst_49761 = (0);
var inst_49762 = (0);
var state_49819__$1 = (function (){var statearr_49865 = state_49819;
(statearr_49865[(9)] = inst_49762);

(statearr_49865[(30)] = inst_49753);

(statearr_49865[(29)] = inst_49751__$1);

(statearr_49865[(20)] = inst_49759);

(statearr_49865[(12)] = inst_49760);

(statearr_49865[(21)] = inst_49761);

return statearr_49865;
})();
var statearr_49866_49938 = state_49819__$1;
(statearr_49866_49938[(2)] = null);

(statearr_49866_49938[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (28))){
var inst_49759 = (state_49819[(20)]);
var inst_49778 = (state_49819[(25)]);
var inst_49778__$1 = cljs.core.seq(inst_49759);
var state_49819__$1 = (function (){var statearr_49867 = state_49819;
(statearr_49867[(25)] = inst_49778__$1);

return statearr_49867;
})();
if(inst_49778__$1){
var statearr_49868_49939 = state_49819__$1;
(statearr_49868_49939[(1)] = (33));

} else {
var statearr_49869_49940 = state_49819__$1;
(statearr_49869_49940[(1)] = (34));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (25))){
var inst_49762 = (state_49819[(9)]);
var inst_49761 = (state_49819[(21)]);
var inst_49764 = (inst_49762 < inst_49761);
var inst_49765 = inst_49764;
var state_49819__$1 = state_49819;
if(cljs.core.truth_(inst_49765)){
var statearr_49870_49941 = state_49819__$1;
(statearr_49870_49941[(1)] = (27));

} else {
var statearr_49871_49942 = state_49819__$1;
(statearr_49871_49942[(1)] = (28));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (34))){
var state_49819__$1 = state_49819;
var statearr_49872_49943 = state_49819__$1;
(statearr_49872_49943[(2)] = null);

(statearr_49872_49943[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (17))){
var state_49819__$1 = state_49819;
var statearr_49873_49944 = state_49819__$1;
(statearr_49873_49944[(2)] = null);

(statearr_49873_49944[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (3))){
var inst_49817 = (state_49819[(2)]);
var state_49819__$1 = state_49819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49819__$1,inst_49817);
} else {
if((state_val_49820 === (12))){
var inst_49746 = (state_49819[(2)]);
var state_49819__$1 = state_49819;
var statearr_49874_49945 = state_49819__$1;
(statearr_49874_49945[(2)] = inst_49746);

(statearr_49874_49945[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (2))){
var state_49819__$1 = state_49819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49819__$1,(4),ch);
} else {
if((state_val_49820 === (23))){
var state_49819__$1 = state_49819;
var statearr_49875_49946 = state_49819__$1;
(statearr_49875_49946[(2)] = null);

(statearr_49875_49946[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (35))){
var inst_49801 = (state_49819[(2)]);
var state_49819__$1 = state_49819;
var statearr_49876_49947 = state_49819__$1;
(statearr_49876_49947[(2)] = inst_49801);

(statearr_49876_49947[(1)] = (29));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (19))){
var inst_49720 = (state_49819[(7)]);
var inst_49724 = cljs.core.chunk_first(inst_49720);
var inst_49725 = cljs.core.chunk_rest(inst_49720);
var inst_49726 = cljs.core.count(inst_49724);
var inst_49700 = inst_49725;
var inst_49701 = inst_49724;
var inst_49702 = inst_49726;
var inst_49703 = (0);
var state_49819__$1 = (function (){var statearr_49877 = state_49819;
(statearr_49877[(13)] = inst_49702);

(statearr_49877[(14)] = inst_49703);

(statearr_49877[(15)] = inst_49700);

(statearr_49877[(17)] = inst_49701);

return statearr_49877;
})();
var statearr_49878_49948 = state_49819__$1;
(statearr_49878_49948[(2)] = null);

(statearr_49878_49948[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (11))){
var inst_49700 = (state_49819[(15)]);
var inst_49720 = (state_49819[(7)]);
var inst_49720__$1 = cljs.core.seq(inst_49700);
var state_49819__$1 = (function (){var statearr_49879 = state_49819;
(statearr_49879[(7)] = inst_49720__$1);

return statearr_49879;
})();
if(inst_49720__$1){
var statearr_49880_49949 = state_49819__$1;
(statearr_49880_49949[(1)] = (16));

} else {
var statearr_49881_49950 = state_49819__$1;
(statearr_49881_49950[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (9))){
var inst_49748 = (state_49819[(2)]);
var state_49819__$1 = state_49819;
var statearr_49882_49951 = state_49819__$1;
(statearr_49882_49951[(2)] = inst_49748);

(statearr_49882_49951[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (5))){
var inst_49698 = (function (){var G__49883 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49883) : cljs.core.deref.call(null,G__49883));
})();
var inst_49699 = cljs.core.seq(inst_49698);
var inst_49700 = inst_49699;
var inst_49701 = null;
var inst_49702 = (0);
var inst_49703 = (0);
var state_49819__$1 = (function (){var statearr_49884 = state_49819;
(statearr_49884[(13)] = inst_49702);

(statearr_49884[(14)] = inst_49703);

(statearr_49884[(15)] = inst_49700);

(statearr_49884[(17)] = inst_49701);

return statearr_49884;
})();
var statearr_49885_49952 = state_49819__$1;
(statearr_49885_49952[(2)] = null);

(statearr_49885_49952[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (14))){
var state_49819__$1 = state_49819;
var statearr_49886_49953 = state_49819__$1;
(statearr_49886_49953[(2)] = null);

(statearr_49886_49953[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (45))){
var inst_49809 = (state_49819[(2)]);
var state_49819__$1 = state_49819;
var statearr_49887_49954 = state_49819__$1;
(statearr_49887_49954[(2)] = inst_49809);

(statearr_49887_49954[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (26))){
var inst_49751 = (state_49819[(29)]);
var inst_49805 = (state_49819[(2)]);
var inst_49806 = cljs.core.seq(inst_49751);
var state_49819__$1 = (function (){var statearr_49888 = state_49819;
(statearr_49888[(31)] = inst_49805);

return statearr_49888;
})();
if(inst_49806){
var statearr_49889_49955 = state_49819__$1;
(statearr_49889_49955[(1)] = (42));

} else {
var statearr_49890_49956 = state_49819__$1;
(statearr_49890_49956[(1)] = (43));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (16))){
var inst_49720 = (state_49819[(7)]);
var inst_49722 = cljs.core.chunked_seq_QMARK_(inst_49720);
var state_49819__$1 = state_49819;
if(inst_49722){
var statearr_49891_49957 = state_49819__$1;
(statearr_49891_49957[(1)] = (19));

} else {
var statearr_49892_49958 = state_49819__$1;
(statearr_49892_49958[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (38))){
var inst_49798 = (state_49819[(2)]);
var state_49819__$1 = state_49819;
var statearr_49893_49959 = state_49819__$1;
(statearr_49893_49959[(2)] = inst_49798);

(statearr_49893_49959[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (30))){
var state_49819__$1 = state_49819;
var statearr_49894_49960 = state_49819__$1;
(statearr_49894_49960[(2)] = null);

(statearr_49894_49960[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (10))){
var inst_49703 = (state_49819[(14)]);
var inst_49701 = (state_49819[(17)]);
var inst_49709 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49701,inst_49703);
var inst_49710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49709,(0),null);
var inst_49711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49709,(1),null);
var state_49819__$1 = (function (){var statearr_49895 = state_49819;
(statearr_49895[(26)] = inst_49710);

return statearr_49895;
})();
if(cljs.core.truth_(inst_49711)){
var statearr_49896_49961 = state_49819__$1;
(statearr_49896_49961[(1)] = (13));

} else {
var statearr_49897_49962 = state_49819__$1;
(statearr_49897_49962[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (18))){
var inst_49744 = (state_49819[(2)]);
var state_49819__$1 = state_49819;
var statearr_49898_49963 = state_49819__$1;
(statearr_49898_49963[(2)] = inst_49744);

(statearr_49898_49963[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (42))){
var state_49819__$1 = state_49819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49819__$1,(45),dchan);
} else {
if((state_val_49820 === (37))){
var inst_49691 = (state_49819[(11)]);
var inst_49787 = (state_49819[(23)]);
var inst_49778 = (state_49819[(25)]);
var inst_49787__$1 = cljs.core.first(inst_49778);
var inst_49788 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49787__$1,inst_49691,done);
var state_49819__$1 = (function (){var statearr_49899 = state_49819;
(statearr_49899[(23)] = inst_49787__$1);

return statearr_49899;
})();
if(cljs.core.truth_(inst_49788)){
var statearr_49900_49964 = state_49819__$1;
(statearr_49900_49964[(1)] = (39));

} else {
var statearr_49901_49965 = state_49819__$1;
(statearr_49901_49965[(1)] = (40));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_49820 === (8))){
var inst_49702 = (state_49819[(13)]);
var inst_49703 = (state_49819[(14)]);
var inst_49705 = (inst_49703 < inst_49702);
var inst_49706 = inst_49705;
var state_49819__$1 = state_49819;
if(cljs.core.truth_(inst_49706)){
var statearr_49902_49966 = state_49819__$1;
(statearr_49902_49966[(1)] = (10));

} else {
var statearr_49903_49967 = state_49819__$1;
(statearr_49903_49967[(1)] = (11));

}

return cljs.core.constant$keyword$21;
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
});})(c__39075__auto___49913,cs,m,dchan,dctr,done))
;
return ((function (switch__38995__auto__,c__39075__auto___49913,cs,m,dchan,dctr,done){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_49907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49907[(0)] = state_machine__38996__auto__);

(statearr_49907[(1)] = (1));

return statearr_49907;
});
var state_machine__38996__auto____1 = (function (state_49819){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_49819);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e49908){if((e49908 instanceof Object)){
var ex__38999__auto__ = e49908;
var statearr_49909_49968 = state_49819;
(statearr_49909_49968[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49819);

return cljs.core.constant$keyword$21;
} else {
throw e49908;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__49969 = state_49819;
state_49819 = G__49969;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_49819){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_49819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto___49913,cs,m,dchan,dctr,done))
})();
var state__39077__auto__ = (function (){var statearr_49910 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_49910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___49913);

return statearr_49910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto___49913,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj49974 = {};
return obj49974;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__31925__auto__ = m;
if(and__31925__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__31925__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__32581__auto__ = (((m == null))?null:m);
return (function (){var or__31937__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__49978 = x__32581__auto__;
return goog.typeOf(G__49978);
})()]);
if(or__31937__auto__){
return or__31937__auto__;
} else {
var or__31937__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__31937__auto____$1){
return or__31937__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__31925__auto__ = m;
if(and__31925__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__31925__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__32581__auto__ = (((m == null))?null:m);
return (function (){var or__31937__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__49982 = x__32581__auto__;
return goog.typeOf(G__49982);
})()]);
if(or__31937__auto__){
return or__31937__auto__;
} else {
var or__31937__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__31937__auto____$1){
return or__31937__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__31925__auto__ = m;
if(and__31925__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__31925__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__32581__auto__ = (((m == null))?null:m);
return (function (){var or__31937__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__49986 = x__32581__auto__;
return goog.typeOf(G__49986);
})()]);
if(or__31937__auto__){
return or__31937__auto__;
} else {
var or__31937__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__31937__auto____$1){
return or__31937__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__31925__auto__ = m;
if(and__31925__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__31925__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__32581__auto__ = (((m == null))?null:m);
return (function (){var or__31937__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__49990 = x__32581__auto__;
return goog.typeOf(G__49990);
})()]);
if(or__31937__auto__){
return or__31937__auto__;
} else {
var or__31937__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__31937__auto____$1){
return or__31937__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__31925__auto__ = m;
if(and__31925__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__31925__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__32581__auto__ = (((m == null))?null:m);
return (function (){var or__31937__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__49994 = x__32581__auto__;
return goog.typeOf(G__49994);
})()]);
if(or__31937__auto__){
return or__31937__auto__;
} else {
var or__31937__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__31937__auto____$1){
return or__31937__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__49995){
var map__50001 = p__49995;
var map__50001__$1 = ((cljs.core.seq_QMARK_(map__50001))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50001):map__50001);
var opts = map__50001__$1;
var statearr_50002_50006 = state;
(statearr_50002_50006[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__50001,map__50001__$1,opts){
return (function (val){
var statearr_50003_50007 = state;
(statearr_50003_50007[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__50001,map__50001__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_50004_50008 = state;
(statearr_50004_50008[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__50005 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50005) : cljs.core.deref.call(null,G__50005));
})());


return cljs.core.constant$keyword$21;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__49995 = null;
if (arguments.length > 3) {
var G__50009__i = 0, G__50009__a = new Array(arguments.length -  3);
while (G__50009__i < G__50009__a.length) {G__50009__a[G__50009__i] = arguments[G__50009__i + 3]; ++G__50009__i;}
  p__49995 = new cljs.core.IndexedSeq(G__50009__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__49995);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__50010){
var state = cljs.core.first(arglist__50010);
arglist__50010 = cljs.core.next(arglist__50010);
var cont_block = cljs.core.first(arglist__50010);
arglist__50010 = cljs.core.next(arglist__50010);
var ports = cljs.core.first(arglist__50010);
var p__49995 = cljs.core.rest(arglist__50010);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__49995);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = (function (){var G__50144 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50144) : cljs.core.atom.call(null,G__50144));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$30,null,cljs.core.constant$keyword$31,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$32);
var solo_mode = (function (){var G__50145 = cljs.core.constant$keyword$31;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50145) : cljs.core.atom.call(null,G__50145));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__50146 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__50146) : attr.call(null,G__50146));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__50147 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50147) : cljs.core.deref.call(null,G__50147));
})();
var mode = (function (){var G__50148 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50148) : cljs.core.deref.call(null,G__50148));
})();
var solos = pick(cljs.core.constant$keyword$32,chs);
var pauses = pick(cljs.core.constant$keyword$30,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$33,solos,cljs.core.constant$keyword$34,pick(cljs.core.constant$keyword$31,chs),cljs.core.constant$keyword$35,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$30)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t50149 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t50149 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50150){
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
this.meta50150 = meta50150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50149.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t50149.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t50149.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t50149.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__50152_50277 = self__.cs;
var G__50153_50278 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50152_50277,G__50153_50278) : cljs.core.reset_BANG_.call(null,G__50152_50277,G__50153_50278));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t50149.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t50149.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__50154 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__50154) : self__.solo_modes.call(null,G__50154));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__50155_50279 = self__.solo_mode;
var G__50156_50280 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50155_50279,G__50156_50280) : cljs.core.reset_BANG_.call(null,G__50155_50279,G__50156_50280));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t50149.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t50149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t50149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50151){
var self__ = this;
var _50151__$1 = this;
return self__.meta50150;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t50149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50151,meta50150__$1){
var self__ = this;
var _50151__$1 = this;
return (new cljs.core.async.t50149(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50150__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t50149.cljs$lang$type = true;

cljs.core.async.t50149.cljs$lang$ctorStr = "cljs.core.async/t50149";

cljs.core.async.t50149.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__32524__auto__,writer__32525__auto__,opt__32526__auto__){
return cljs.core._write(writer__32525__auto__,"cljs.core.async/t50149");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t50149 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t50149(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50150){
return (new cljs.core.async.t50149(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50150));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t50149(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39075__auto___50281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto___50281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto___50281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_50228){
var state_val_50229 = (state_50228[(1)]);
if((state_val_50229 === (7))){
var inst_50170 = (state_50228[(7)]);
var inst_50175 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50170);
var state_50228__$1 = state_50228;
var statearr_50230_50282 = state_50228__$1;
(statearr_50230_50282[(2)] = inst_50175);

(statearr_50230_50282[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (20))){
var inst_50185 = (state_50228[(8)]);
var state_50228__$1 = state_50228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50228__$1,(23),out,inst_50185);
} else {
if((state_val_50229 === (1))){
var inst_50160 = (state_50228[(9)]);
var inst_50160__$1 = calc_state();
var inst_50161 = cljs.core.seq_QMARK_(inst_50160__$1);
var state_50228__$1 = (function (){var statearr_50231 = state_50228;
(statearr_50231[(9)] = inst_50160__$1);

return statearr_50231;
})();
if(inst_50161){
var statearr_50232_50283 = state_50228__$1;
(statearr_50232_50283[(1)] = (2));

} else {
var statearr_50233_50284 = state_50228__$1;
(statearr_50233_50284[(1)] = (3));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (24))){
var inst_50178 = (state_50228[(10)]);
var inst_50170 = inst_50178;
var state_50228__$1 = (function (){var statearr_50234 = state_50228;
(statearr_50234[(7)] = inst_50170);

return statearr_50234;
})();
var statearr_50235_50285 = state_50228__$1;
(statearr_50235_50285[(2)] = null);

(statearr_50235_50285[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (4))){
var inst_50160 = (state_50228[(9)]);
var inst_50166 = (state_50228[(2)]);
var inst_50167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50166,cljs.core.constant$keyword$35);
var inst_50168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50166,cljs.core.constant$keyword$34);
var inst_50169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50166,cljs.core.constant$keyword$33);
var inst_50170 = inst_50160;
var state_50228__$1 = (function (){var statearr_50236 = state_50228;
(statearr_50236[(11)] = inst_50167);

(statearr_50236[(7)] = inst_50170);

(statearr_50236[(12)] = inst_50169);

(statearr_50236[(13)] = inst_50168);

return statearr_50236;
})();
var statearr_50237_50286 = state_50228__$1;
(statearr_50237_50286[(2)] = null);

(statearr_50237_50286[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (15))){
var state_50228__$1 = state_50228;
var statearr_50238_50287 = state_50228__$1;
(statearr_50238_50287[(2)] = null);

(statearr_50238_50287[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (21))){
var inst_50178 = (state_50228[(10)]);
var inst_50170 = inst_50178;
var state_50228__$1 = (function (){var statearr_50239 = state_50228;
(statearr_50239[(7)] = inst_50170);

return statearr_50239;
})();
var statearr_50240_50288 = state_50228__$1;
(statearr_50240_50288[(2)] = null);

(statearr_50240_50288[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (13))){
var inst_50224 = (state_50228[(2)]);
var state_50228__$1 = state_50228;
var statearr_50241_50289 = state_50228__$1;
(statearr_50241_50289[(2)] = inst_50224);

(statearr_50241_50289[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (22))){
var inst_50222 = (state_50228[(2)]);
var state_50228__$1 = state_50228;
var statearr_50242_50290 = state_50228__$1;
(statearr_50242_50290[(2)] = inst_50222);

(statearr_50242_50290[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (6))){
var inst_50226 = (state_50228[(2)]);
var state_50228__$1 = state_50228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50228__$1,inst_50226);
} else {
if((state_val_50229 === (25))){
var state_50228__$1 = state_50228;
var statearr_50243_50291 = state_50228__$1;
(statearr_50243_50291[(2)] = null);

(statearr_50243_50291[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (17))){
var inst_50201 = (state_50228[(14)]);
var state_50228__$1 = state_50228;
var statearr_50244_50292 = state_50228__$1;
(statearr_50244_50292[(2)] = inst_50201);

(statearr_50244_50292[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (3))){
var inst_50160 = (state_50228[(9)]);
var state_50228__$1 = state_50228;
var statearr_50245_50293 = state_50228__$1;
(statearr_50245_50293[(2)] = inst_50160);

(statearr_50245_50293[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (12))){
var inst_50186 = (state_50228[(15)]);
var inst_50181 = (state_50228[(16)]);
var inst_50201 = (state_50228[(14)]);
var inst_50201__$1 = (function (){var G__50246 = inst_50186;
return (inst_50181.cljs$core$IFn$_invoke$arity$1 ? inst_50181.cljs$core$IFn$_invoke$arity$1(G__50246) : inst_50181.call(null,G__50246));
})();
var state_50228__$1 = (function (){var statearr_50247 = state_50228;
(statearr_50247[(14)] = inst_50201__$1);

return statearr_50247;
})();
if(cljs.core.truth_(inst_50201__$1)){
var statearr_50248_50294 = state_50228__$1;
(statearr_50248_50294[(1)] = (17));

} else {
var statearr_50249_50295 = state_50228__$1;
(statearr_50249_50295[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (2))){
var inst_50160 = (state_50228[(9)]);
var inst_50163 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50160);
var state_50228__$1 = state_50228;
var statearr_50250_50296 = state_50228__$1;
(statearr_50250_50296[(2)] = inst_50163);

(statearr_50250_50296[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (23))){
var inst_50213 = (state_50228[(2)]);
var state_50228__$1 = state_50228;
if(cljs.core.truth_(inst_50213)){
var statearr_50251_50297 = state_50228__$1;
(statearr_50251_50297[(1)] = (24));

} else {
var statearr_50252_50298 = state_50228__$1;
(statearr_50252_50298[(1)] = (25));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (19))){
var inst_50210 = (state_50228[(2)]);
var state_50228__$1 = state_50228;
if(cljs.core.truth_(inst_50210)){
var statearr_50253_50299 = state_50228__$1;
(statearr_50253_50299[(1)] = (20));

} else {
var statearr_50254_50300 = state_50228__$1;
(statearr_50254_50300[(1)] = (21));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (11))){
var inst_50185 = (state_50228[(8)]);
var inst_50191 = (inst_50185 == null);
var state_50228__$1 = state_50228;
if(cljs.core.truth_(inst_50191)){
var statearr_50255_50301 = state_50228__$1;
(statearr_50255_50301[(1)] = (14));

} else {
var statearr_50256_50302 = state_50228__$1;
(statearr_50256_50302[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (9))){
var inst_50178 = (state_50228[(10)]);
var inst_50178__$1 = (state_50228[(2)]);
var inst_50179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50178__$1,cljs.core.constant$keyword$35);
var inst_50180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50178__$1,cljs.core.constant$keyword$34);
var inst_50181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50178__$1,cljs.core.constant$keyword$33);
var state_50228__$1 = (function (){var statearr_50257 = state_50228;
(statearr_50257[(10)] = inst_50178__$1);

(statearr_50257[(16)] = inst_50181);

(statearr_50257[(17)] = inst_50180);

return statearr_50257;
})();
return cljs.core.async.ioc_alts_BANG_(state_50228__$1,(10),inst_50179);
} else {
if((state_val_50229 === (5))){
var inst_50170 = (state_50228[(7)]);
var inst_50173 = cljs.core.seq_QMARK_(inst_50170);
var state_50228__$1 = state_50228;
if(inst_50173){
var statearr_50258_50303 = state_50228__$1;
(statearr_50258_50303[(1)] = (7));

} else {
var statearr_50259_50304 = state_50228__$1;
(statearr_50259_50304[(1)] = (8));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (14))){
var inst_50186 = (state_50228[(15)]);
var inst_50193 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_50186);
var state_50228__$1 = state_50228;
var statearr_50260_50305 = state_50228__$1;
(statearr_50260_50305[(2)] = inst_50193);

(statearr_50260_50305[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (26))){
var inst_50218 = (state_50228[(2)]);
var state_50228__$1 = state_50228;
var statearr_50261_50306 = state_50228__$1;
(statearr_50261_50306[(2)] = inst_50218);

(statearr_50261_50306[(1)] = (22));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (16))){
var inst_50196 = (state_50228[(2)]);
var inst_50197 = calc_state();
var inst_50170 = inst_50197;
var state_50228__$1 = (function (){var statearr_50262 = state_50228;
(statearr_50262[(7)] = inst_50170);

(statearr_50262[(18)] = inst_50196);

return statearr_50262;
})();
var statearr_50263_50307 = state_50228__$1;
(statearr_50263_50307[(2)] = null);

(statearr_50263_50307[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (10))){
var inst_50185 = (state_50228[(8)]);
var inst_50186 = (state_50228[(15)]);
var inst_50184 = (state_50228[(2)]);
var inst_50185__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50184,(0),null);
var inst_50186__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50184,(1),null);
var inst_50187 = (inst_50185__$1 == null);
var inst_50188 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50186__$1,change);
var inst_50189 = (inst_50187) || (inst_50188);
var state_50228__$1 = (function (){var statearr_50264 = state_50228;
(statearr_50264[(8)] = inst_50185__$1);

(statearr_50264[(15)] = inst_50186__$1);

return statearr_50264;
})();
if(cljs.core.truth_(inst_50189)){
var statearr_50265_50308 = state_50228__$1;
(statearr_50265_50308[(1)] = (11));

} else {
var statearr_50266_50309 = state_50228__$1;
(statearr_50266_50309[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (18))){
var inst_50186 = (state_50228[(15)]);
var inst_50181 = (state_50228[(16)]);
var inst_50180 = (state_50228[(17)]);
var inst_50205 = cljs.core.empty_QMARK_(inst_50181);
var inst_50206 = (function (){var G__50267 = inst_50186;
return (inst_50180.cljs$core$IFn$_invoke$arity$1 ? inst_50180.cljs$core$IFn$_invoke$arity$1(G__50267) : inst_50180.call(null,G__50267));
})();
var inst_50207 = cljs.core.not(inst_50206);
var inst_50208 = (inst_50205) && (inst_50207);
var state_50228__$1 = state_50228;
var statearr_50268_50310 = state_50228__$1;
(statearr_50268_50310[(2)] = inst_50208);

(statearr_50268_50310[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50229 === (8))){
var inst_50170 = (state_50228[(7)]);
var state_50228__$1 = state_50228;
var statearr_50269_50311 = state_50228__$1;
(statearr_50269_50311[(2)] = inst_50170);

(statearr_50269_50311[(1)] = (9));


return cljs.core.constant$keyword$21;
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
});})(c__39075__auto___50281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38995__auto__,c__39075__auto___50281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_50273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50273[(0)] = state_machine__38996__auto__);

(statearr_50273[(1)] = (1));

return statearr_50273;
});
var state_machine__38996__auto____1 = (function (state_50228){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_50228);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e50274){if((e50274 instanceof Object)){
var ex__38999__auto__ = e50274;
var statearr_50275_50312 = state_50228;
(statearr_50275_50312[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50228);

return cljs.core.constant$keyword$21;
} else {
throw e50274;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__50313 = state_50228;
state_50228 = G__50313;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_50228){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_50228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto___50281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__39077__auto__ = (function (){var statearr_50276 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_50276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___50281);

return statearr_50276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto___50281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj50315 = {};
return obj50315;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__31925__auto__ = p;
if(and__31925__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__31925__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__32581__auto__ = (((p == null))?null:p);
return (function (){var or__31937__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__50319 = x__32581__auto__;
return goog.typeOf(G__50319);
})()]);
if(or__31937__auto__){
return or__31937__auto__;
} else {
var or__31937__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__31937__auto____$1){
return or__31937__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__31925__auto__ = p;
if(and__31925__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__31925__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__32581__auto__ = (((p == null))?null:p);
return (function (){var or__31937__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__50323 = x__32581__auto__;
return goog.typeOf(G__50323);
})()]);
if(or__31937__auto__){
return or__31937__auto__;
} else {
var or__31937__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__31937__auto____$1){
return or__31937__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__31925__auto__ = p;
if(and__31925__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__31925__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__32581__auto__ = (((p == null))?null:p);
return (function (){var or__31937__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__50329 = x__32581__auto__;
return goog.typeOf(G__50329);
})()]);
if(or__31937__auto__){
return or__31937__auto__;
} else {
var or__31937__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__31937__auto____$1){
return or__31937__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__31925__auto__ = p;
if(and__31925__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__31925__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__32581__auto__ = (((p == null))?null:p);
return (function (){var or__31937__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__50331 = x__32581__auto__;
return goog.typeOf(G__50331);
})()]);
if(or__31937__auto__){
return or__31937__auto__;
} else {
var or__31937__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__31937__auto____$1){
return or__31937__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__50470 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50470) : cljs.core.atom.call(null,G__50470));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__31937__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__50472 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50472) : cljs.core.deref.call(null,G__50472));
})(),topic);
if(cljs.core.truth_(or__31937__auto__)){
return or__31937__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__31937__auto__,mults){
return (function (p1__50332_SHARP_){
if(cljs.core.truth_((function (){var G__50473 = topic;
return (p1__50332_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__50332_SHARP_.cljs$core$IFn$_invoke$arity$1(G__50473) : p1__50332_SHARP_.call(null,G__50473));
})())){
return p1__50332_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50332_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__50474 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__50474) : buf_fn.call(null,G__50474));
})())));
}
});})(or__31937__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t50475 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t50475 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta50476){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta50476 = meta50476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50475.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t50475.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__50478 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__50478) : self__.ensure_mult.call(null,G__50478));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t50475.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__50479 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50479) : cljs.core.deref.call(null,G__50479));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t50475.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__50480 = self__.mults;
var G__50481 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50480,G__50481) : cljs.core.reset_BANG_.call(null,G__50480,G__50481));
});})(mults,ensure_mult))
;

cljs.core.async.t50475.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t50475.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t50475.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t50475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50477){
var self__ = this;
var _50477__$1 = this;
return self__.meta50476;
});})(mults,ensure_mult))
;

cljs.core.async.t50475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50477,meta50476__$1){
var self__ = this;
var _50477__$1 = this;
return (new cljs.core.async.t50475(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta50476__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t50475.cljs$lang$type = true;

cljs.core.async.t50475.cljs$lang$ctorStr = "cljs.core.async/t50475";

cljs.core.async.t50475.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__32524__auto__,writer__32525__auto__,opt__32526__auto__){
return cljs.core._write(writer__32525__auto__,"cljs.core.async/t50475");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t50475 = ((function (mults,ensure_mult){
return (function __GT_t50475(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta50476){
return (new cljs.core.async.t50475(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta50476));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t50475(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39075__auto___50604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto___50604,mults,ensure_mult,p){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto___50604,mults,ensure_mult,p){
return (function (state_50553){
var state_val_50554 = (state_50553[(1)]);
if((state_val_50554 === (7))){
var inst_50549 = (state_50553[(2)]);
var state_50553__$1 = state_50553;
var statearr_50555_50605 = state_50553__$1;
(statearr_50555_50605[(2)] = inst_50549);

(statearr_50555_50605[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (20))){
var state_50553__$1 = state_50553;
var statearr_50556_50606 = state_50553__$1;
(statearr_50556_50606[(2)] = null);

(statearr_50556_50606[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (1))){
var state_50553__$1 = state_50553;
var statearr_50557_50607 = state_50553__$1;
(statearr_50557_50607[(2)] = null);

(statearr_50557_50607[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (24))){
var inst_50532 = (state_50553[(7)]);
var inst_50541 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_50532);
var state_50553__$1 = state_50553;
var statearr_50558_50608 = state_50553__$1;
(statearr_50558_50608[(2)] = inst_50541);

(statearr_50558_50608[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (4))){
var inst_50484 = (state_50553[(8)]);
var inst_50484__$1 = (state_50553[(2)]);
var inst_50485 = (inst_50484__$1 == null);
var state_50553__$1 = (function (){var statearr_50559 = state_50553;
(statearr_50559[(8)] = inst_50484__$1);

return statearr_50559;
})();
if(cljs.core.truth_(inst_50485)){
var statearr_50560_50609 = state_50553__$1;
(statearr_50560_50609[(1)] = (5));

} else {
var statearr_50561_50610 = state_50553__$1;
(statearr_50561_50610[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (15))){
var inst_50526 = (state_50553[(2)]);
var state_50553__$1 = state_50553;
var statearr_50562_50611 = state_50553__$1;
(statearr_50562_50611[(2)] = inst_50526);

(statearr_50562_50611[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (21))){
var inst_50546 = (state_50553[(2)]);
var state_50553__$1 = (function (){var statearr_50563 = state_50553;
(statearr_50563[(9)] = inst_50546);

return statearr_50563;
})();
var statearr_50564_50612 = state_50553__$1;
(statearr_50564_50612[(2)] = null);

(statearr_50564_50612[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (13))){
var inst_50508 = (state_50553[(10)]);
var inst_50510 = cljs.core.chunked_seq_QMARK_(inst_50508);
var state_50553__$1 = state_50553;
if(inst_50510){
var statearr_50565_50613 = state_50553__$1;
(statearr_50565_50613[(1)] = (16));

} else {
var statearr_50566_50614 = state_50553__$1;
(statearr_50566_50614[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (22))){
var inst_50538 = (state_50553[(2)]);
var state_50553__$1 = state_50553;
if(cljs.core.truth_(inst_50538)){
var statearr_50567_50615 = state_50553__$1;
(statearr_50567_50615[(1)] = (23));

} else {
var statearr_50568_50616 = state_50553__$1;
(statearr_50568_50616[(1)] = (24));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (6))){
var inst_50534 = (state_50553[(11)]);
var inst_50484 = (state_50553[(8)]);
var inst_50532 = (state_50553[(7)]);
var inst_50532__$1 = (function (){var G__50569 = inst_50484;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__50569) : topic_fn.call(null,G__50569));
})();
var inst_50533 = (function (){var G__50570 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50570) : cljs.core.deref.call(null,G__50570));
})();
var inst_50534__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50533,inst_50532__$1);
var state_50553__$1 = (function (){var statearr_50571 = state_50553;
(statearr_50571[(11)] = inst_50534__$1);

(statearr_50571[(7)] = inst_50532__$1);

return statearr_50571;
})();
if(cljs.core.truth_(inst_50534__$1)){
var statearr_50572_50617 = state_50553__$1;
(statearr_50572_50617[(1)] = (19));

} else {
var statearr_50573_50618 = state_50553__$1;
(statearr_50573_50618[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (25))){
var inst_50543 = (state_50553[(2)]);
var state_50553__$1 = state_50553;
var statearr_50574_50619 = state_50553__$1;
(statearr_50574_50619[(2)] = inst_50543);

(statearr_50574_50619[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (17))){
var inst_50508 = (state_50553[(10)]);
var inst_50517 = cljs.core.first(inst_50508);
var inst_50518 = cljs.core.async.muxch_STAR_(inst_50517);
var inst_50519 = cljs.core.async.close_BANG_(inst_50518);
var inst_50520 = cljs.core.next(inst_50508);
var inst_50494 = inst_50520;
var inst_50495 = null;
var inst_50496 = (0);
var inst_50497 = (0);
var state_50553__$1 = (function (){var statearr_50575 = state_50553;
(statearr_50575[(12)] = inst_50495);

(statearr_50575[(13)] = inst_50497);

(statearr_50575[(14)] = inst_50519);

(statearr_50575[(15)] = inst_50496);

(statearr_50575[(16)] = inst_50494);

return statearr_50575;
})();
var statearr_50576_50620 = state_50553__$1;
(statearr_50576_50620[(2)] = null);

(statearr_50576_50620[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (3))){
var inst_50551 = (state_50553[(2)]);
var state_50553__$1 = state_50553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50553__$1,inst_50551);
} else {
if((state_val_50554 === (12))){
var inst_50528 = (state_50553[(2)]);
var state_50553__$1 = state_50553;
var statearr_50577_50621 = state_50553__$1;
(statearr_50577_50621[(2)] = inst_50528);

(statearr_50577_50621[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (2))){
var state_50553__$1 = state_50553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50553__$1,(4),ch);
} else {
if((state_val_50554 === (23))){
var state_50553__$1 = state_50553;
var statearr_50578_50622 = state_50553__$1;
(statearr_50578_50622[(2)] = null);

(statearr_50578_50622[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (19))){
var inst_50534 = (state_50553[(11)]);
var inst_50484 = (state_50553[(8)]);
var inst_50536 = cljs.core.async.muxch_STAR_(inst_50534);
var state_50553__$1 = state_50553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50553__$1,(22),inst_50536,inst_50484);
} else {
if((state_val_50554 === (11))){
var inst_50494 = (state_50553[(16)]);
var inst_50508 = (state_50553[(10)]);
var inst_50508__$1 = cljs.core.seq(inst_50494);
var state_50553__$1 = (function (){var statearr_50579 = state_50553;
(statearr_50579[(10)] = inst_50508__$1);

return statearr_50579;
})();
if(inst_50508__$1){
var statearr_50580_50623 = state_50553__$1;
(statearr_50580_50623[(1)] = (13));

} else {
var statearr_50581_50624 = state_50553__$1;
(statearr_50581_50624[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (9))){
var inst_50530 = (state_50553[(2)]);
var state_50553__$1 = state_50553;
var statearr_50582_50625 = state_50553__$1;
(statearr_50582_50625[(2)] = inst_50530);

(statearr_50582_50625[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (5))){
var inst_50491 = (function (){var G__50583 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50583) : cljs.core.deref.call(null,G__50583));
})();
var inst_50492 = cljs.core.vals(inst_50491);
var inst_50493 = cljs.core.seq(inst_50492);
var inst_50494 = inst_50493;
var inst_50495 = null;
var inst_50496 = (0);
var inst_50497 = (0);
var state_50553__$1 = (function (){var statearr_50584 = state_50553;
(statearr_50584[(12)] = inst_50495);

(statearr_50584[(13)] = inst_50497);

(statearr_50584[(15)] = inst_50496);

(statearr_50584[(16)] = inst_50494);

return statearr_50584;
})();
var statearr_50585_50626 = state_50553__$1;
(statearr_50585_50626[(2)] = null);

(statearr_50585_50626[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (14))){
var state_50553__$1 = state_50553;
var statearr_50589_50627 = state_50553__$1;
(statearr_50589_50627[(2)] = null);

(statearr_50589_50627[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (16))){
var inst_50508 = (state_50553[(10)]);
var inst_50512 = cljs.core.chunk_first(inst_50508);
var inst_50513 = cljs.core.chunk_rest(inst_50508);
var inst_50514 = cljs.core.count(inst_50512);
var inst_50494 = inst_50513;
var inst_50495 = inst_50512;
var inst_50496 = inst_50514;
var inst_50497 = (0);
var state_50553__$1 = (function (){var statearr_50590 = state_50553;
(statearr_50590[(12)] = inst_50495);

(statearr_50590[(13)] = inst_50497);

(statearr_50590[(15)] = inst_50496);

(statearr_50590[(16)] = inst_50494);

return statearr_50590;
})();
var statearr_50591_50628 = state_50553__$1;
(statearr_50591_50628[(2)] = null);

(statearr_50591_50628[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (10))){
var inst_50495 = (state_50553[(12)]);
var inst_50497 = (state_50553[(13)]);
var inst_50496 = (state_50553[(15)]);
var inst_50494 = (state_50553[(16)]);
var inst_50502 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50495,inst_50497);
var inst_50503 = cljs.core.async.muxch_STAR_(inst_50502);
var inst_50504 = cljs.core.async.close_BANG_(inst_50503);
var inst_50505 = (inst_50497 + (1));
var tmp50586 = inst_50495;
var tmp50587 = inst_50496;
var tmp50588 = inst_50494;
var inst_50494__$1 = tmp50588;
var inst_50495__$1 = tmp50586;
var inst_50496__$1 = tmp50587;
var inst_50497__$1 = inst_50505;
var state_50553__$1 = (function (){var statearr_50592 = state_50553;
(statearr_50592[(12)] = inst_50495__$1);

(statearr_50592[(13)] = inst_50497__$1);

(statearr_50592[(15)] = inst_50496__$1);

(statearr_50592[(17)] = inst_50504);

(statearr_50592[(16)] = inst_50494__$1);

return statearr_50592;
})();
var statearr_50593_50629 = state_50553__$1;
(statearr_50593_50629[(2)] = null);

(statearr_50593_50629[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (18))){
var inst_50523 = (state_50553[(2)]);
var state_50553__$1 = state_50553;
var statearr_50594_50630 = state_50553__$1;
(statearr_50594_50630[(2)] = inst_50523);

(statearr_50594_50630[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50554 === (8))){
var inst_50497 = (state_50553[(13)]);
var inst_50496 = (state_50553[(15)]);
var inst_50499 = (inst_50497 < inst_50496);
var inst_50500 = inst_50499;
var state_50553__$1 = state_50553;
if(cljs.core.truth_(inst_50500)){
var statearr_50595_50631 = state_50553__$1;
(statearr_50595_50631[(1)] = (10));

} else {
var statearr_50596_50632 = state_50553__$1;
(statearr_50596_50632[(1)] = (11));

}

return cljs.core.constant$keyword$21;
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
});})(c__39075__auto___50604,mults,ensure_mult,p))
;
return ((function (switch__38995__auto__,c__39075__auto___50604,mults,ensure_mult,p){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_50600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50600[(0)] = state_machine__38996__auto__);

(statearr_50600[(1)] = (1));

return statearr_50600;
});
var state_machine__38996__auto____1 = (function (state_50553){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_50553);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e50601){if((e50601 instanceof Object)){
var ex__38999__auto__ = e50601;
var statearr_50602_50633 = state_50553;
(statearr_50602_50633[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50553);

return cljs.core.constant$keyword$21;
} else {
throw e50601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__50634 = state_50553;
state_50553 = G__50634;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_50553){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_50553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto___50604,mults,ensure_mult,p))
})();
var state__39077__auto__ = (function (){var statearr_50603 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_50603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___50604);

return statearr_50603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto___50604,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__50715 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50715) : cljs.core.atom.call(null,G__50715));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__39075__auto___50788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto___50788,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto___50788,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50754){
var state_val_50755 = (state_50754[(1)]);
if((state_val_50755 === (7))){
var state_50754__$1 = state_50754;
var statearr_50756_50789 = state_50754__$1;
(statearr_50756_50789[(2)] = null);

(statearr_50756_50789[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50755 === (1))){
var state_50754__$1 = state_50754;
var statearr_50757_50790 = state_50754__$1;
(statearr_50757_50790[(2)] = null);

(statearr_50757_50790[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50755 === (4))){
var inst_50718 = (state_50754[(7)]);
var inst_50720 = (inst_50718 < cnt);
var state_50754__$1 = state_50754;
if(cljs.core.truth_(inst_50720)){
var statearr_50758_50791 = state_50754__$1;
(statearr_50758_50791[(1)] = (6));

} else {
var statearr_50759_50792 = state_50754__$1;
(statearr_50759_50792[(1)] = (7));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50755 === (15))){
var inst_50750 = (state_50754[(2)]);
var state_50754__$1 = state_50754;
var statearr_50760_50793 = state_50754__$1;
(statearr_50760_50793[(2)] = inst_50750);

(statearr_50760_50793[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50755 === (13))){
var inst_50743 = cljs.core.async.close_BANG_(out);
var state_50754__$1 = state_50754;
var statearr_50761_50794 = state_50754__$1;
(statearr_50761_50794[(2)] = inst_50743);

(statearr_50761_50794[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50755 === (6))){
var state_50754__$1 = state_50754;
var statearr_50762_50795 = state_50754__$1;
(statearr_50762_50795[(2)] = null);

(statearr_50762_50795[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50755 === (3))){
var inst_50752 = (state_50754[(2)]);
var state_50754__$1 = state_50754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50754__$1,inst_50752);
} else {
if((state_val_50755 === (12))){
var inst_50740 = (state_50754[(8)]);
var inst_50740__$1 = (state_50754[(2)]);
var inst_50741 = cljs.core.some(cljs.core.nil_QMARK_,inst_50740__$1);
var state_50754__$1 = (function (){var statearr_50763 = state_50754;
(statearr_50763[(8)] = inst_50740__$1);

return statearr_50763;
})();
if(cljs.core.truth_(inst_50741)){
var statearr_50764_50796 = state_50754__$1;
(statearr_50764_50796[(1)] = (13));

} else {
var statearr_50765_50797 = state_50754__$1;
(statearr_50765_50797[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50755 === (2))){
var inst_50717 = (function (){var G__50766 = dctr;
var G__50767 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50766,G__50767) : cljs.core.reset_BANG_.call(null,G__50766,G__50767));
})();
var inst_50718 = (0);
var state_50754__$1 = (function (){var statearr_50768 = state_50754;
(statearr_50768[(7)] = inst_50718);

(statearr_50768[(9)] = inst_50717);

return statearr_50768;
})();
var statearr_50769_50798 = state_50754__$1;
(statearr_50769_50798[(2)] = null);

(statearr_50769_50798[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50755 === (11))){
var inst_50718 = (state_50754[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50754,(10),Object,null,(9));
var inst_50727 = (function (){var G__50770 = inst_50718;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__50770) : chs__$1.call(null,G__50770));
})();
var inst_50728 = (function (){var G__50771 = inst_50718;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__50771) : done.call(null,G__50771));
})();
var inst_50729 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_50727,inst_50728);
var state_50754__$1 = state_50754;
var statearr_50772_50799 = state_50754__$1;
(statearr_50772_50799[(2)] = inst_50729);


cljs.core.async.impl.ioc_helpers.process_exception(state_50754__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_50755 === (9))){
var inst_50718 = (state_50754[(7)]);
var inst_50731 = (state_50754[(2)]);
var inst_50732 = (inst_50718 + (1));
var inst_50718__$1 = inst_50732;
var state_50754__$1 = (function (){var statearr_50773 = state_50754;
(statearr_50773[(10)] = inst_50731);

(statearr_50773[(7)] = inst_50718__$1);

return statearr_50773;
})();
var statearr_50774_50800 = state_50754__$1;
(statearr_50774_50800[(2)] = null);

(statearr_50774_50800[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50755 === (5))){
var inst_50738 = (state_50754[(2)]);
var state_50754__$1 = (function (){var statearr_50775 = state_50754;
(statearr_50775[(11)] = inst_50738);

return statearr_50775;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50754__$1,(12),dchan);
} else {
if((state_val_50755 === (14))){
var inst_50740 = (state_50754[(8)]);
var inst_50745 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_50740);
var state_50754__$1 = state_50754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50754__$1,(16),out,inst_50745);
} else {
if((state_val_50755 === (16))){
var inst_50747 = (state_50754[(2)]);
var state_50754__$1 = (function (){var statearr_50776 = state_50754;
(statearr_50776[(12)] = inst_50747);

return statearr_50776;
})();
var statearr_50777_50801 = state_50754__$1;
(statearr_50777_50801[(2)] = null);

(statearr_50777_50801[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50755 === (10))){
var inst_50722 = (state_50754[(2)]);
var inst_50723 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_50754__$1 = (function (){var statearr_50778 = state_50754;
(statearr_50778[(13)] = inst_50722);

return statearr_50778;
})();
var statearr_50779_50802 = state_50754__$1;
(statearr_50779_50802[(2)] = inst_50723);


cljs.core.async.impl.ioc_helpers.process_exception(state_50754__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_50755 === (8))){
var inst_50736 = (state_50754[(2)]);
var state_50754__$1 = state_50754;
var statearr_50780_50803 = state_50754__$1;
(statearr_50780_50803[(2)] = inst_50736);

(statearr_50780_50803[(1)] = (5));


return cljs.core.constant$keyword$21;
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
});})(c__39075__auto___50788,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38995__auto__,c__39075__auto___50788,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_50784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50784[(0)] = state_machine__38996__auto__);

(statearr_50784[(1)] = (1));

return statearr_50784;
});
var state_machine__38996__auto____1 = (function (state_50754){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_50754);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e50785){if((e50785 instanceof Object)){
var ex__38999__auto__ = e50785;
var statearr_50786_50804 = state_50754;
(statearr_50786_50804[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50754);

return cljs.core.constant$keyword$21;
} else {
throw e50785;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__50805 = state_50754;
state_50754 = G__50805;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_50754){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_50754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto___50788,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__39077__auto__ = (function (){var statearr_50787 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_50787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___50788);

return statearr_50787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto___50788,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39075__auto___50915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto___50915,out){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto___50915,out){
return (function (state_50891){
var state_val_50892 = (state_50891[(1)]);
if((state_val_50892 === (7))){
var inst_50870 = (state_50891[(7)]);
var inst_50871 = (state_50891[(8)]);
var inst_50870__$1 = (state_50891[(2)]);
var inst_50871__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50870__$1,(0),null);
var inst_50872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50870__$1,(1),null);
var inst_50873 = (inst_50871__$1 == null);
var state_50891__$1 = (function (){var statearr_50893 = state_50891;
(statearr_50893[(9)] = inst_50872);

(statearr_50893[(7)] = inst_50870__$1);

(statearr_50893[(8)] = inst_50871__$1);

return statearr_50893;
})();
if(cljs.core.truth_(inst_50873)){
var statearr_50894_50916 = state_50891__$1;
(statearr_50894_50916[(1)] = (8));

} else {
var statearr_50895_50917 = state_50891__$1;
(statearr_50895_50917[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50892 === (1))){
var inst_50862 = cljs.core.vec(chs);
var inst_50863 = inst_50862;
var state_50891__$1 = (function (){var statearr_50896 = state_50891;
(statearr_50896[(10)] = inst_50863);

return statearr_50896;
})();
var statearr_50897_50918 = state_50891__$1;
(statearr_50897_50918[(2)] = null);

(statearr_50897_50918[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50892 === (4))){
var inst_50863 = (state_50891[(10)]);
var state_50891__$1 = state_50891;
return cljs.core.async.ioc_alts_BANG_(state_50891__$1,(7),inst_50863);
} else {
if((state_val_50892 === (6))){
var inst_50887 = (state_50891[(2)]);
var state_50891__$1 = state_50891;
var statearr_50898_50919 = state_50891__$1;
(statearr_50898_50919[(2)] = inst_50887);

(statearr_50898_50919[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50892 === (3))){
var inst_50889 = (state_50891[(2)]);
var state_50891__$1 = state_50891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50891__$1,inst_50889);
} else {
if((state_val_50892 === (2))){
var inst_50863 = (state_50891[(10)]);
var inst_50865 = cljs.core.count(inst_50863);
var inst_50866 = (inst_50865 > (0));
var state_50891__$1 = state_50891;
if(cljs.core.truth_(inst_50866)){
var statearr_50900_50920 = state_50891__$1;
(statearr_50900_50920[(1)] = (4));

} else {
var statearr_50901_50921 = state_50891__$1;
(statearr_50901_50921[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_50892 === (11))){
var inst_50863 = (state_50891[(10)]);
var inst_50880 = (state_50891[(2)]);
var tmp50899 = inst_50863;
var inst_50863__$1 = tmp50899;
var state_50891__$1 = (function (){var statearr_50902 = state_50891;
(statearr_50902[(11)] = inst_50880);

(statearr_50902[(10)] = inst_50863__$1);

return statearr_50902;
})();
var statearr_50903_50922 = state_50891__$1;
(statearr_50903_50922[(2)] = null);

(statearr_50903_50922[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50892 === (9))){
var inst_50871 = (state_50891[(8)]);
var state_50891__$1 = state_50891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50891__$1,(11),out,inst_50871);
} else {
if((state_val_50892 === (5))){
var inst_50885 = cljs.core.async.close_BANG_(out);
var state_50891__$1 = state_50891;
var statearr_50904_50923 = state_50891__$1;
(statearr_50904_50923[(2)] = inst_50885);

(statearr_50904_50923[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50892 === (10))){
var inst_50883 = (state_50891[(2)]);
var state_50891__$1 = state_50891;
var statearr_50905_50924 = state_50891__$1;
(statearr_50905_50924[(2)] = inst_50883);

(statearr_50905_50924[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_50892 === (8))){
var inst_50872 = (state_50891[(9)]);
var inst_50870 = (state_50891[(7)]);
var inst_50863 = (state_50891[(10)]);
var inst_50871 = (state_50891[(8)]);
var inst_50875 = (function (){var c = inst_50872;
var v = inst_50871;
var vec__50868 = inst_50870;
var cs = inst_50863;
return ((function (c,v,vec__50868,cs,inst_50872,inst_50870,inst_50863,inst_50871,state_val_50892,c__39075__auto___50915,out){
return (function (p1__50806_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__50806_SHARP_);
});
;})(c,v,vec__50868,cs,inst_50872,inst_50870,inst_50863,inst_50871,state_val_50892,c__39075__auto___50915,out))
})();
var inst_50876 = cljs.core.filterv(inst_50875,inst_50863);
var inst_50863__$1 = inst_50876;
var state_50891__$1 = (function (){var statearr_50906 = state_50891;
(statearr_50906[(10)] = inst_50863__$1);

return statearr_50906;
})();
var statearr_50907_50925 = state_50891__$1;
(statearr_50907_50925[(2)] = null);

(statearr_50907_50925[(1)] = (2));


return cljs.core.constant$keyword$21;
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
});})(c__39075__auto___50915,out))
;
return ((function (switch__38995__auto__,c__39075__auto___50915,out){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_50911 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50911[(0)] = state_machine__38996__auto__);

(statearr_50911[(1)] = (1));

return statearr_50911;
});
var state_machine__38996__auto____1 = (function (state_50891){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_50891);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e50912){if((e50912 instanceof Object)){
var ex__38999__auto__ = e50912;
var statearr_50913_50926 = state_50891;
(statearr_50913_50926[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50891);

return cljs.core.constant$keyword$21;
} else {
throw e50912;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__50927 = state_50891;
state_50891 = G__50927;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_50891){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_50891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto___50915,out))
})();
var state__39077__auto__ = (function (){var statearr_50914 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_50914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___50915);

return statearr_50914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto___50915,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39075__auto___51023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto___51023,out){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto___51023,out){
return (function (state_51000){
var state_val_51001 = (state_51000[(1)]);
if((state_val_51001 === (7))){
var inst_50982 = (state_51000[(7)]);
var inst_50982__$1 = (state_51000[(2)]);
var inst_50983 = (inst_50982__$1 == null);
var inst_50984 = cljs.core.not(inst_50983);
var state_51000__$1 = (function (){var statearr_51002 = state_51000;
(statearr_51002[(7)] = inst_50982__$1);

return statearr_51002;
})();
if(inst_50984){
var statearr_51003_51024 = state_51000__$1;
(statearr_51003_51024[(1)] = (8));

} else {
var statearr_51004_51025 = state_51000__$1;
(statearr_51004_51025[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51001 === (1))){
var inst_50977 = (0);
var state_51000__$1 = (function (){var statearr_51005 = state_51000;
(statearr_51005[(8)] = inst_50977);

return statearr_51005;
})();
var statearr_51006_51026 = state_51000__$1;
(statearr_51006_51026[(2)] = null);

(statearr_51006_51026[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51001 === (4))){
var state_51000__$1 = state_51000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51000__$1,(7),ch);
} else {
if((state_val_51001 === (6))){
var inst_50995 = (state_51000[(2)]);
var state_51000__$1 = state_51000;
var statearr_51007_51027 = state_51000__$1;
(statearr_51007_51027[(2)] = inst_50995);

(statearr_51007_51027[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51001 === (3))){
var inst_50997 = (state_51000[(2)]);
var inst_50998 = cljs.core.async.close_BANG_(out);
var state_51000__$1 = (function (){var statearr_51008 = state_51000;
(statearr_51008[(9)] = inst_50997);

return statearr_51008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51000__$1,inst_50998);
} else {
if((state_val_51001 === (2))){
var inst_50977 = (state_51000[(8)]);
var inst_50979 = (inst_50977 < n);
var state_51000__$1 = state_51000;
if(cljs.core.truth_(inst_50979)){
var statearr_51009_51028 = state_51000__$1;
(statearr_51009_51028[(1)] = (4));

} else {
var statearr_51010_51029 = state_51000__$1;
(statearr_51010_51029[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51001 === (11))){
var inst_50977 = (state_51000[(8)]);
var inst_50987 = (state_51000[(2)]);
var inst_50988 = (inst_50977 + (1));
var inst_50977__$1 = inst_50988;
var state_51000__$1 = (function (){var statearr_51011 = state_51000;
(statearr_51011[(10)] = inst_50987);

(statearr_51011[(8)] = inst_50977__$1);

return statearr_51011;
})();
var statearr_51012_51030 = state_51000__$1;
(statearr_51012_51030[(2)] = null);

(statearr_51012_51030[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51001 === (9))){
var state_51000__$1 = state_51000;
var statearr_51013_51031 = state_51000__$1;
(statearr_51013_51031[(2)] = null);

(statearr_51013_51031[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51001 === (5))){
var state_51000__$1 = state_51000;
var statearr_51014_51032 = state_51000__$1;
(statearr_51014_51032[(2)] = null);

(statearr_51014_51032[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51001 === (10))){
var inst_50992 = (state_51000[(2)]);
var state_51000__$1 = state_51000;
var statearr_51015_51033 = state_51000__$1;
(statearr_51015_51033[(2)] = inst_50992);

(statearr_51015_51033[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51001 === (8))){
var inst_50982 = (state_51000[(7)]);
var state_51000__$1 = state_51000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51000__$1,(11),out,inst_50982);
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
});})(c__39075__auto___51023,out))
;
return ((function (switch__38995__auto__,c__39075__auto___51023,out){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_51019 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51019[(0)] = state_machine__38996__auto__);

(statearr_51019[(1)] = (1));

return statearr_51019;
});
var state_machine__38996__auto____1 = (function (state_51000){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_51000);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e51020){if((e51020 instanceof Object)){
var ex__38999__auto__ = e51020;
var statearr_51021_51034 = state_51000;
(statearr_51021_51034[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51000);

return cljs.core.constant$keyword$21;
} else {
throw e51020;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__51035 = state_51000;
state_51000 = G__51035;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_51000){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_51000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto___51023,out))
})();
var state__39077__auto__ = (function (){var statearr_51022 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_51022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___51023);

return statearr_51022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto___51023,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t51048 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t51048 = (function (ch,f,map_LT_,meta51049){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta51049 = meta51049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51048.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t51048.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t51048.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t51048.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t51051 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t51051 = (function (fn1,_,meta51049,map_LT_,f,ch,meta51052){
this.fn1 = fn1;
this._ = _;
this.meta51049 = meta51049;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta51052 = meta51052;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51051.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t51051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t51051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__51036_SHARP_){
var G__51054 = (((p1__51036_SHARP_ == null))?null:(function (){var G__51055 = p1__51036_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51055) : self__.f.call(null,G__51055));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51054) : f1.call(null,G__51054));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t51051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_51053){
var self__ = this;
var _51053__$1 = this;
return self__.meta51052;
});})(___$1))
;

cljs.core.async.t51051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_51053,meta51052__$1){
var self__ = this;
var _51053__$1 = this;
return (new cljs.core.async.t51051(self__.fn1,self__._,self__.meta51049,self__.map_LT_,self__.f,self__.ch,meta51052__$1));
});})(___$1))
;

cljs.core.async.t51051.cljs$lang$type = true;

cljs.core.async.t51051.cljs$lang$ctorStr = "cljs.core.async/t51051";

cljs.core.async.t51051.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__32524__auto__,writer__32525__auto__,opt__32526__auto__){
return cljs.core._write(writer__32525__auto__,"cljs.core.async/t51051");
});})(___$1))
;

cljs.core.async.__GT_t51051 = ((function (___$1){
return (function __GT_t51051(fn1__$1,___$2,meta51049__$1,map_LT___$1,f__$1,ch__$1,meta51052){
return (new cljs.core.async.t51051(fn1__$1,___$2,meta51049__$1,map_LT___$1,f__$1,ch__$1,meta51052));
});})(___$1))
;

}

return (new cljs.core.async.t51051(fn1,___$1,self__.meta51049,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__31925__auto__ = ret;
if(cljs.core.truth_(and__31925__auto__)){
return !(((function (){var G__51056 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__51056) : cljs.core.deref.call(null,G__51056));
})() == null));
} else {
return and__31925__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51057 = (function (){var G__51058 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__51058) : cljs.core.deref.call(null,G__51058));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51057) : self__.f.call(null,G__51057));
})());
} else {
return ret;
}
});

cljs.core.async.t51048.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t51048.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t51048.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t51048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51050){
var self__ = this;
var _51050__$1 = this;
return self__.meta51049;
});

cljs.core.async.t51048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51050,meta51049__$1){
var self__ = this;
var _51050__$1 = this;
return (new cljs.core.async.t51048(self__.ch,self__.f,self__.map_LT_,meta51049__$1));
});

cljs.core.async.t51048.cljs$lang$type = true;

cljs.core.async.t51048.cljs$lang$ctorStr = "cljs.core.async/t51048";

cljs.core.async.t51048.cljs$lang$ctorPrWriter = (function (this__32524__auto__,writer__32525__auto__,opt__32526__auto__){
return cljs.core._write(writer__32525__auto__,"cljs.core.async/t51048");
});

cljs.core.async.__GT_t51048 = (function __GT_t51048(ch__$1,f__$1,map_LT___$1,meta51049){
return (new cljs.core.async.t51048(ch__$1,f__$1,map_LT___$1,meta51049));
});

}

return (new cljs.core.async.t51048(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t51063 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t51063 = (function (ch,f,map_GT_,meta51064){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta51064 = meta51064;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51063.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t51063.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__51066 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51066) : self__.f.call(null,G__51066));
})(),fn1);
});

cljs.core.async.t51063.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t51063.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t51063.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t51063.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t51063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51065){
var self__ = this;
var _51065__$1 = this;
return self__.meta51064;
});

cljs.core.async.t51063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51065,meta51064__$1){
var self__ = this;
var _51065__$1 = this;
return (new cljs.core.async.t51063(self__.ch,self__.f,self__.map_GT_,meta51064__$1));
});

cljs.core.async.t51063.cljs$lang$type = true;

cljs.core.async.t51063.cljs$lang$ctorStr = "cljs.core.async/t51063";

cljs.core.async.t51063.cljs$lang$ctorPrWriter = (function (this__32524__auto__,writer__32525__auto__,opt__32526__auto__){
return cljs.core._write(writer__32525__auto__,"cljs.core.async/t51063");
});

cljs.core.async.__GT_t51063 = (function __GT_t51063(ch__$1,f__$1,map_GT___$1,meta51064){
return (new cljs.core.async.t51063(ch__$1,f__$1,map_GT___$1,meta51064));
});

}

return (new cljs.core.async.t51063(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t51071 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t51071 = (function (ch,p,filter_GT_,meta51072){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta51072 = meta51072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51071.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t51071.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__51074 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__51074) : self__.p.call(null,G__51074));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t51071.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t51071.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t51071.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t51071.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t51071.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t51071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51073){
var self__ = this;
var _51073__$1 = this;
return self__.meta51072;
});

cljs.core.async.t51071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51073,meta51072__$1){
var self__ = this;
var _51073__$1 = this;
return (new cljs.core.async.t51071(self__.ch,self__.p,self__.filter_GT_,meta51072__$1));
});

cljs.core.async.t51071.cljs$lang$type = true;

cljs.core.async.t51071.cljs$lang$ctorStr = "cljs.core.async/t51071";

cljs.core.async.t51071.cljs$lang$ctorPrWriter = (function (this__32524__auto__,writer__32525__auto__,opt__32526__auto__){
return cljs.core._write(writer__32525__auto__,"cljs.core.async/t51071");
});

cljs.core.async.__GT_t51071 = (function __GT_t51071(ch__$1,p__$1,filter_GT___$1,meta51072){
return (new cljs.core.async.t51071(ch__$1,p__$1,filter_GT___$1,meta51072));
});

}

return (new cljs.core.async.t51071(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39075__auto___51162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto___51162,out){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto___51162,out){
return (function (state_51140){
var state_val_51141 = (state_51140[(1)]);
if((state_val_51141 === (7))){
var inst_51136 = (state_51140[(2)]);
var state_51140__$1 = state_51140;
var statearr_51142_51163 = state_51140__$1;
(statearr_51142_51163[(2)] = inst_51136);

(statearr_51142_51163[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51141 === (1))){
var state_51140__$1 = state_51140;
var statearr_51143_51164 = state_51140__$1;
(statearr_51143_51164[(2)] = null);

(statearr_51143_51164[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51141 === (4))){
var inst_51122 = (state_51140[(7)]);
var inst_51122__$1 = (state_51140[(2)]);
var inst_51123 = (inst_51122__$1 == null);
var state_51140__$1 = (function (){var statearr_51144 = state_51140;
(statearr_51144[(7)] = inst_51122__$1);

return statearr_51144;
})();
if(cljs.core.truth_(inst_51123)){
var statearr_51145_51165 = state_51140__$1;
(statearr_51145_51165[(1)] = (5));

} else {
var statearr_51146_51166 = state_51140__$1;
(statearr_51146_51166[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51141 === (6))){
var inst_51122 = (state_51140[(7)]);
var inst_51127 = (function (){var G__51147 = inst_51122;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__51147) : p.call(null,G__51147));
})();
var state_51140__$1 = state_51140;
if(cljs.core.truth_(inst_51127)){
var statearr_51148_51167 = state_51140__$1;
(statearr_51148_51167[(1)] = (8));

} else {
var statearr_51149_51168 = state_51140__$1;
(statearr_51149_51168[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51141 === (3))){
var inst_51138 = (state_51140[(2)]);
var state_51140__$1 = state_51140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51140__$1,inst_51138);
} else {
if((state_val_51141 === (2))){
var state_51140__$1 = state_51140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51140__$1,(4),ch);
} else {
if((state_val_51141 === (11))){
var inst_51130 = (state_51140[(2)]);
var state_51140__$1 = state_51140;
var statearr_51150_51169 = state_51140__$1;
(statearr_51150_51169[(2)] = inst_51130);

(statearr_51150_51169[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51141 === (9))){
var state_51140__$1 = state_51140;
var statearr_51151_51170 = state_51140__$1;
(statearr_51151_51170[(2)] = null);

(statearr_51151_51170[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51141 === (5))){
var inst_51125 = cljs.core.async.close_BANG_(out);
var state_51140__$1 = state_51140;
var statearr_51152_51171 = state_51140__$1;
(statearr_51152_51171[(2)] = inst_51125);

(statearr_51152_51171[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51141 === (10))){
var inst_51133 = (state_51140[(2)]);
var state_51140__$1 = (function (){var statearr_51153 = state_51140;
(statearr_51153[(8)] = inst_51133);

return statearr_51153;
})();
var statearr_51154_51172 = state_51140__$1;
(statearr_51154_51172[(2)] = null);

(statearr_51154_51172[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51141 === (8))){
var inst_51122 = (state_51140[(7)]);
var state_51140__$1 = state_51140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51140__$1,(11),out,inst_51122);
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
});})(c__39075__auto___51162,out))
;
return ((function (switch__38995__auto__,c__39075__auto___51162,out){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_51158 = [null,null,null,null,null,null,null,null,null];
(statearr_51158[(0)] = state_machine__38996__auto__);

(statearr_51158[(1)] = (1));

return statearr_51158;
});
var state_machine__38996__auto____1 = (function (state_51140){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_51140);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e51159){if((e51159 instanceof Object)){
var ex__38999__auto__ = e51159;
var statearr_51160_51173 = state_51140;
(statearr_51160_51173[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51140);

return cljs.core.constant$keyword$21;
} else {
throw e51159;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__51174 = state_51140;
state_51140 = G__51174;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_51140){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_51140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto___51162,out))
})();
var state__39077__auto__ = (function (){var statearr_51161 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_51161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___51162);

return statearr_51161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto___51162,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__39075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto__){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto__){
return (function (state_51344){
var state_val_51345 = (state_51344[(1)]);
if((state_val_51345 === (7))){
var inst_51340 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
var statearr_51346_51388 = state_51344__$1;
(statearr_51346_51388[(2)] = inst_51340);

(statearr_51346_51388[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (20))){
var inst_51310 = (state_51344[(7)]);
var inst_51321 = (state_51344[(2)]);
var inst_51322 = cljs.core.next(inst_51310);
var inst_51296 = inst_51322;
var inst_51297 = null;
var inst_51298 = (0);
var inst_51299 = (0);
var state_51344__$1 = (function (){var statearr_51347 = state_51344;
(statearr_51347[(8)] = inst_51299);

(statearr_51347[(9)] = inst_51296);

(statearr_51347[(10)] = inst_51298);

(statearr_51347[(11)] = inst_51297);

(statearr_51347[(12)] = inst_51321);

return statearr_51347;
})();
var statearr_51348_51389 = state_51344__$1;
(statearr_51348_51389[(2)] = null);

(statearr_51348_51389[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (1))){
var state_51344__$1 = state_51344;
var statearr_51349_51390 = state_51344__$1;
(statearr_51349_51390[(2)] = null);

(statearr_51349_51390[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (4))){
var inst_51285 = (state_51344[(13)]);
var inst_51285__$1 = (state_51344[(2)]);
var inst_51286 = (inst_51285__$1 == null);
var state_51344__$1 = (function (){var statearr_51350 = state_51344;
(statearr_51350[(13)] = inst_51285__$1);

return statearr_51350;
})();
if(cljs.core.truth_(inst_51286)){
var statearr_51351_51391 = state_51344__$1;
(statearr_51351_51391[(1)] = (5));

} else {
var statearr_51352_51392 = state_51344__$1;
(statearr_51352_51392[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (15))){
var state_51344__$1 = state_51344;
var statearr_51356_51393 = state_51344__$1;
(statearr_51356_51393[(2)] = null);

(statearr_51356_51393[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (21))){
var state_51344__$1 = state_51344;
var statearr_51357_51394 = state_51344__$1;
(statearr_51357_51394[(2)] = null);

(statearr_51357_51394[(1)] = (23));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (13))){
var inst_51299 = (state_51344[(8)]);
var inst_51296 = (state_51344[(9)]);
var inst_51298 = (state_51344[(10)]);
var inst_51297 = (state_51344[(11)]);
var inst_51306 = (state_51344[(2)]);
var inst_51307 = (inst_51299 + (1));
var tmp51353 = inst_51296;
var tmp51354 = inst_51298;
var tmp51355 = inst_51297;
var inst_51296__$1 = tmp51353;
var inst_51297__$1 = tmp51355;
var inst_51298__$1 = tmp51354;
var inst_51299__$1 = inst_51307;
var state_51344__$1 = (function (){var statearr_51358 = state_51344;
(statearr_51358[(14)] = inst_51306);

(statearr_51358[(8)] = inst_51299__$1);

(statearr_51358[(9)] = inst_51296__$1);

(statearr_51358[(10)] = inst_51298__$1);

(statearr_51358[(11)] = inst_51297__$1);

return statearr_51358;
})();
var statearr_51359_51395 = state_51344__$1;
(statearr_51359_51395[(2)] = null);

(statearr_51359_51395[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (22))){
var state_51344__$1 = state_51344;
var statearr_51360_51396 = state_51344__$1;
(statearr_51360_51396[(2)] = null);

(statearr_51360_51396[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (6))){
var inst_51285 = (state_51344[(13)]);
var inst_51294 = (function (){var G__51361 = inst_51285;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51361) : f.call(null,G__51361));
})();
var inst_51295 = cljs.core.seq(inst_51294);
var inst_51296 = inst_51295;
var inst_51297 = null;
var inst_51298 = (0);
var inst_51299 = (0);
var state_51344__$1 = (function (){var statearr_51362 = state_51344;
(statearr_51362[(8)] = inst_51299);

(statearr_51362[(9)] = inst_51296);

(statearr_51362[(10)] = inst_51298);

(statearr_51362[(11)] = inst_51297);

return statearr_51362;
})();
var statearr_51363_51397 = state_51344__$1;
(statearr_51363_51397[(2)] = null);

(statearr_51363_51397[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (17))){
var inst_51310 = (state_51344[(7)]);
var inst_51314 = cljs.core.chunk_first(inst_51310);
var inst_51315 = cljs.core.chunk_rest(inst_51310);
var inst_51316 = cljs.core.count(inst_51314);
var inst_51296 = inst_51315;
var inst_51297 = inst_51314;
var inst_51298 = inst_51316;
var inst_51299 = (0);
var state_51344__$1 = (function (){var statearr_51364 = state_51344;
(statearr_51364[(8)] = inst_51299);

(statearr_51364[(9)] = inst_51296);

(statearr_51364[(10)] = inst_51298);

(statearr_51364[(11)] = inst_51297);

return statearr_51364;
})();
var statearr_51365_51398 = state_51344__$1;
(statearr_51365_51398[(2)] = null);

(statearr_51365_51398[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (3))){
var inst_51342 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51344__$1,inst_51342);
} else {
if((state_val_51345 === (12))){
var inst_51330 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
var statearr_51366_51399 = state_51344__$1;
(statearr_51366_51399[(2)] = inst_51330);

(statearr_51366_51399[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (2))){
var state_51344__$1 = state_51344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51344__$1,(4),in$);
} else {
if((state_val_51345 === (23))){
var inst_51338 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
var statearr_51367_51400 = state_51344__$1;
(statearr_51367_51400[(2)] = inst_51338);

(statearr_51367_51400[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (19))){
var inst_51325 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
var statearr_51368_51401 = state_51344__$1;
(statearr_51368_51401[(2)] = inst_51325);

(statearr_51368_51401[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (11))){
var inst_51310 = (state_51344[(7)]);
var inst_51296 = (state_51344[(9)]);
var inst_51310__$1 = cljs.core.seq(inst_51296);
var state_51344__$1 = (function (){var statearr_51369 = state_51344;
(statearr_51369[(7)] = inst_51310__$1);

return statearr_51369;
})();
if(inst_51310__$1){
var statearr_51370_51402 = state_51344__$1;
(statearr_51370_51402[(1)] = (14));

} else {
var statearr_51371_51403 = state_51344__$1;
(statearr_51371_51403[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (9))){
var inst_51332 = (state_51344[(2)]);
var inst_51333 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51344__$1 = (function (){var statearr_51372 = state_51344;
(statearr_51372[(15)] = inst_51332);

return statearr_51372;
})();
if(cljs.core.truth_(inst_51333)){
var statearr_51373_51404 = state_51344__$1;
(statearr_51373_51404[(1)] = (21));

} else {
var statearr_51374_51405 = state_51344__$1;
(statearr_51374_51405[(1)] = (22));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (5))){
var inst_51288 = cljs.core.async.close_BANG_(out);
var state_51344__$1 = state_51344;
var statearr_51375_51406 = state_51344__$1;
(statearr_51375_51406[(2)] = inst_51288);

(statearr_51375_51406[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (14))){
var inst_51310 = (state_51344[(7)]);
var inst_51312 = cljs.core.chunked_seq_QMARK_(inst_51310);
var state_51344__$1 = state_51344;
if(inst_51312){
var statearr_51376_51407 = state_51344__$1;
(statearr_51376_51407[(1)] = (17));

} else {
var statearr_51377_51408 = state_51344__$1;
(statearr_51377_51408[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (16))){
var inst_51328 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
var statearr_51378_51409 = state_51344__$1;
(statearr_51378_51409[(2)] = inst_51328);

(statearr_51378_51409[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51345 === (10))){
var inst_51299 = (state_51344[(8)]);
var inst_51297 = (state_51344[(11)]);
var inst_51304 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_51297,inst_51299);
var state_51344__$1 = state_51344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51344__$1,(13),out,inst_51304);
} else {
if((state_val_51345 === (18))){
var inst_51310 = (state_51344[(7)]);
var inst_51319 = cljs.core.first(inst_51310);
var state_51344__$1 = state_51344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51344__$1,(20),out,inst_51319);
} else {
if((state_val_51345 === (8))){
var inst_51299 = (state_51344[(8)]);
var inst_51298 = (state_51344[(10)]);
var inst_51301 = (inst_51299 < inst_51298);
var inst_51302 = inst_51301;
var state_51344__$1 = state_51344;
if(cljs.core.truth_(inst_51302)){
var statearr_51379_51410 = state_51344__$1;
(statearr_51379_51410[(1)] = (10));

} else {
var statearr_51380_51411 = state_51344__$1;
(statearr_51380_51411[(1)] = (11));

}

return cljs.core.constant$keyword$21;
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
});})(c__39075__auto__))
;
return ((function (switch__38995__auto__,c__39075__auto__){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_51384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51384[(0)] = state_machine__38996__auto__);

(statearr_51384[(1)] = (1));

return statearr_51384;
});
var state_machine__38996__auto____1 = (function (state_51344){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_51344);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e51385){if((e51385 instanceof Object)){
var ex__38999__auto__ = e51385;
var statearr_51386_51412 = state_51344;
(statearr_51386_51412[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51344);

return cljs.core.constant$keyword$21;
} else {
throw e51385;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__51413 = state_51344;
state_51344 = G__51413;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_51344){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_51344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto__))
})();
var state__39077__auto__ = (function (){var statearr_51387 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_51387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto__);

return statearr_51387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto__))
);

return c__39075__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39075__auto___51518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto___51518,out){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto___51518,out){
return (function (state_51493){
var state_val_51494 = (state_51493[(1)]);
if((state_val_51494 === (7))){
var inst_51488 = (state_51493[(2)]);
var state_51493__$1 = state_51493;
var statearr_51495_51519 = state_51493__$1;
(statearr_51495_51519[(2)] = inst_51488);

(statearr_51495_51519[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51494 === (1))){
var inst_51470 = null;
var state_51493__$1 = (function (){var statearr_51496 = state_51493;
(statearr_51496[(7)] = inst_51470);

return statearr_51496;
})();
var statearr_51497_51520 = state_51493__$1;
(statearr_51497_51520[(2)] = null);

(statearr_51497_51520[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51494 === (4))){
var inst_51473 = (state_51493[(8)]);
var inst_51473__$1 = (state_51493[(2)]);
var inst_51474 = (inst_51473__$1 == null);
var inst_51475 = cljs.core.not(inst_51474);
var state_51493__$1 = (function (){var statearr_51498 = state_51493;
(statearr_51498[(8)] = inst_51473__$1);

return statearr_51498;
})();
if(inst_51475){
var statearr_51499_51521 = state_51493__$1;
(statearr_51499_51521[(1)] = (5));

} else {
var statearr_51500_51522 = state_51493__$1;
(statearr_51500_51522[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51494 === (6))){
var state_51493__$1 = state_51493;
var statearr_51501_51523 = state_51493__$1;
(statearr_51501_51523[(2)] = null);

(statearr_51501_51523[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51494 === (3))){
var inst_51490 = (state_51493[(2)]);
var inst_51491 = cljs.core.async.close_BANG_(out);
var state_51493__$1 = (function (){var statearr_51502 = state_51493;
(statearr_51502[(9)] = inst_51490);

return statearr_51502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51493__$1,inst_51491);
} else {
if((state_val_51494 === (2))){
var state_51493__$1 = state_51493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51493__$1,(4),ch);
} else {
if((state_val_51494 === (11))){
var inst_51473 = (state_51493[(8)]);
var inst_51482 = (state_51493[(2)]);
var inst_51470 = inst_51473;
var state_51493__$1 = (function (){var statearr_51503 = state_51493;
(statearr_51503[(7)] = inst_51470);

(statearr_51503[(10)] = inst_51482);

return statearr_51503;
})();
var statearr_51504_51524 = state_51493__$1;
(statearr_51504_51524[(2)] = null);

(statearr_51504_51524[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51494 === (9))){
var inst_51473 = (state_51493[(8)]);
var state_51493__$1 = state_51493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51493__$1,(11),out,inst_51473);
} else {
if((state_val_51494 === (5))){
var inst_51473 = (state_51493[(8)]);
var inst_51470 = (state_51493[(7)]);
var inst_51477 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51473,inst_51470);
var state_51493__$1 = state_51493;
if(inst_51477){
var statearr_51506_51525 = state_51493__$1;
(statearr_51506_51525[(1)] = (8));

} else {
var statearr_51507_51526 = state_51493__$1;
(statearr_51507_51526[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51494 === (10))){
var inst_51485 = (state_51493[(2)]);
var state_51493__$1 = state_51493;
var statearr_51508_51527 = state_51493__$1;
(statearr_51508_51527[(2)] = inst_51485);

(statearr_51508_51527[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51494 === (8))){
var inst_51470 = (state_51493[(7)]);
var tmp51505 = inst_51470;
var inst_51470__$1 = tmp51505;
var state_51493__$1 = (function (){var statearr_51509 = state_51493;
(statearr_51509[(7)] = inst_51470__$1);

return statearr_51509;
})();
var statearr_51510_51528 = state_51493__$1;
(statearr_51510_51528[(2)] = null);

(statearr_51510_51528[(1)] = (2));


return cljs.core.constant$keyword$21;
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
});})(c__39075__auto___51518,out))
;
return ((function (switch__38995__auto__,c__39075__auto___51518,out){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_51514 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51514[(0)] = state_machine__38996__auto__);

(statearr_51514[(1)] = (1));

return statearr_51514;
});
var state_machine__38996__auto____1 = (function (state_51493){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_51493);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e51515){if((e51515 instanceof Object)){
var ex__38999__auto__ = e51515;
var statearr_51516_51529 = state_51493;
(statearr_51516_51529[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51493);

return cljs.core.constant$keyword$21;
} else {
throw e51515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__51530 = state_51493;
state_51493 = G__51530;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_51493){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_51493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto___51518,out))
})();
var state__39077__auto__ = (function (){var statearr_51517 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_51517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___51518);

return statearr_51517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto___51518,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39075__auto___51668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto___51668,out){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto___51668,out){
return (function (state_51638){
var state_val_51639 = (state_51638[(1)]);
if((state_val_51639 === (7))){
var inst_51634 = (state_51638[(2)]);
var state_51638__$1 = state_51638;
var statearr_51640_51669 = state_51638__$1;
(statearr_51640_51669[(2)] = inst_51634);

(statearr_51640_51669[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51639 === (1))){
var inst_51601 = (new Array(n));
var inst_51602 = inst_51601;
var inst_51603 = (0);
var state_51638__$1 = (function (){var statearr_51641 = state_51638;
(statearr_51641[(7)] = inst_51602);

(statearr_51641[(8)] = inst_51603);

return statearr_51641;
})();
var statearr_51642_51670 = state_51638__$1;
(statearr_51642_51670[(2)] = null);

(statearr_51642_51670[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51639 === (4))){
var inst_51606 = (state_51638[(9)]);
var inst_51606__$1 = (state_51638[(2)]);
var inst_51607 = (inst_51606__$1 == null);
var inst_51608 = cljs.core.not(inst_51607);
var state_51638__$1 = (function (){var statearr_51643 = state_51638;
(statearr_51643[(9)] = inst_51606__$1);

return statearr_51643;
})();
if(inst_51608){
var statearr_51644_51671 = state_51638__$1;
(statearr_51644_51671[(1)] = (5));

} else {
var statearr_51645_51672 = state_51638__$1;
(statearr_51645_51672[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51639 === (15))){
var inst_51628 = (state_51638[(2)]);
var state_51638__$1 = state_51638;
var statearr_51646_51673 = state_51638__$1;
(statearr_51646_51673[(2)] = inst_51628);

(statearr_51646_51673[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51639 === (13))){
var state_51638__$1 = state_51638;
var statearr_51647_51674 = state_51638__$1;
(statearr_51647_51674[(2)] = null);

(statearr_51647_51674[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51639 === (6))){
var inst_51603 = (state_51638[(8)]);
var inst_51624 = (inst_51603 > (0));
var state_51638__$1 = state_51638;
if(cljs.core.truth_(inst_51624)){
var statearr_51648_51675 = state_51638__$1;
(statearr_51648_51675[(1)] = (12));

} else {
var statearr_51649_51676 = state_51638__$1;
(statearr_51649_51676[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51639 === (3))){
var inst_51636 = (state_51638[(2)]);
var state_51638__$1 = state_51638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51638__$1,inst_51636);
} else {
if((state_val_51639 === (12))){
var inst_51602 = (state_51638[(7)]);
var inst_51626 = cljs.core.vec(inst_51602);
var state_51638__$1 = state_51638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51638__$1,(15),out,inst_51626);
} else {
if((state_val_51639 === (2))){
var state_51638__$1 = state_51638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51638__$1,(4),ch);
} else {
if((state_val_51639 === (11))){
var inst_51618 = (state_51638[(2)]);
var inst_51619 = (new Array(n));
var inst_51602 = inst_51619;
var inst_51603 = (0);
var state_51638__$1 = (function (){var statearr_51650 = state_51638;
(statearr_51650[(10)] = inst_51618);

(statearr_51650[(7)] = inst_51602);

(statearr_51650[(8)] = inst_51603);

return statearr_51650;
})();
var statearr_51651_51677 = state_51638__$1;
(statearr_51651_51677[(2)] = null);

(statearr_51651_51677[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51639 === (9))){
var inst_51602 = (state_51638[(7)]);
var inst_51616 = cljs.core.vec(inst_51602);
var state_51638__$1 = state_51638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51638__$1,(11),out,inst_51616);
} else {
if((state_val_51639 === (5))){
var inst_51602 = (state_51638[(7)]);
var inst_51603 = (state_51638[(8)]);
var inst_51606 = (state_51638[(9)]);
var inst_51611 = (state_51638[(11)]);
var inst_51610 = (inst_51602[inst_51603] = inst_51606);
var inst_51611__$1 = (inst_51603 + (1));
var inst_51612 = (inst_51611__$1 < n);
var state_51638__$1 = (function (){var statearr_51652 = state_51638;
(statearr_51652[(12)] = inst_51610);

(statearr_51652[(11)] = inst_51611__$1);

return statearr_51652;
})();
if(cljs.core.truth_(inst_51612)){
var statearr_51653_51678 = state_51638__$1;
(statearr_51653_51678[(1)] = (8));

} else {
var statearr_51654_51679 = state_51638__$1;
(statearr_51654_51679[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51639 === (14))){
var inst_51631 = (state_51638[(2)]);
var inst_51632 = cljs.core.async.close_BANG_(out);
var state_51638__$1 = (function (){var statearr_51656 = state_51638;
(statearr_51656[(13)] = inst_51631);

return statearr_51656;
})();
var statearr_51657_51680 = state_51638__$1;
(statearr_51657_51680[(2)] = inst_51632);

(statearr_51657_51680[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51639 === (10))){
var inst_51622 = (state_51638[(2)]);
var state_51638__$1 = state_51638;
var statearr_51658_51681 = state_51638__$1;
(statearr_51658_51681[(2)] = inst_51622);

(statearr_51658_51681[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51639 === (8))){
var inst_51602 = (state_51638[(7)]);
var inst_51611 = (state_51638[(11)]);
var tmp51655 = inst_51602;
var inst_51602__$1 = tmp51655;
var inst_51603 = inst_51611;
var state_51638__$1 = (function (){var statearr_51659 = state_51638;
(statearr_51659[(7)] = inst_51602__$1);

(statearr_51659[(8)] = inst_51603);

return statearr_51659;
})();
var statearr_51660_51682 = state_51638__$1;
(statearr_51660_51682[(2)] = null);

(statearr_51660_51682[(1)] = (2));


return cljs.core.constant$keyword$21;
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
});})(c__39075__auto___51668,out))
;
return ((function (switch__38995__auto__,c__39075__auto___51668,out){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_51664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51664[(0)] = state_machine__38996__auto__);

(statearr_51664[(1)] = (1));

return statearr_51664;
});
var state_machine__38996__auto____1 = (function (state_51638){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_51638);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e51665){if((e51665 instanceof Object)){
var ex__38999__auto__ = e51665;
var statearr_51666_51683 = state_51638;
(statearr_51666_51683[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51638);

return cljs.core.constant$keyword$21;
} else {
throw e51665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__51684 = state_51638;
state_51638 = G__51684;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_51638){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_51638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto___51668,out))
})();
var state__39077__auto__ = (function (){var statearr_51667 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_51667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___51668);

return statearr_51667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto___51668,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39075__auto___51832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto___51832,out){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto___51832,out){
return (function (state_51801){
var state_val_51802 = (state_51801[(1)]);
if((state_val_51802 === (7))){
var inst_51797 = (state_51801[(2)]);
var state_51801__$1 = state_51801;
var statearr_51803_51833 = state_51801__$1;
(statearr_51803_51833[(2)] = inst_51797);

(statearr_51803_51833[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51802 === (1))){
var inst_51760 = [];
var inst_51761 = inst_51760;
var inst_51762 = cljs.core.constant$keyword$36;
var state_51801__$1 = (function (){var statearr_51804 = state_51801;
(statearr_51804[(7)] = inst_51761);

(statearr_51804[(8)] = inst_51762);

return statearr_51804;
})();
var statearr_51805_51834 = state_51801__$1;
(statearr_51805_51834[(2)] = null);

(statearr_51805_51834[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51802 === (4))){
var inst_51765 = (state_51801[(9)]);
var inst_51765__$1 = (state_51801[(2)]);
var inst_51766 = (inst_51765__$1 == null);
var inst_51767 = cljs.core.not(inst_51766);
var state_51801__$1 = (function (){var statearr_51806 = state_51801;
(statearr_51806[(9)] = inst_51765__$1);

return statearr_51806;
})();
if(inst_51767){
var statearr_51807_51835 = state_51801__$1;
(statearr_51807_51835[(1)] = (5));

} else {
var statearr_51808_51836 = state_51801__$1;
(statearr_51808_51836[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51802 === (15))){
var inst_51791 = (state_51801[(2)]);
var state_51801__$1 = state_51801;
var statearr_51809_51837 = state_51801__$1;
(statearr_51809_51837[(2)] = inst_51791);

(statearr_51809_51837[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51802 === (13))){
var state_51801__$1 = state_51801;
var statearr_51810_51838 = state_51801__$1;
(statearr_51810_51838[(2)] = null);

(statearr_51810_51838[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51802 === (6))){
var inst_51761 = (state_51801[(7)]);
var inst_51786 = inst_51761.length;
var inst_51787 = (inst_51786 > (0));
var state_51801__$1 = state_51801;
if(cljs.core.truth_(inst_51787)){
var statearr_51811_51839 = state_51801__$1;
(statearr_51811_51839[(1)] = (12));

} else {
var statearr_51812_51840 = state_51801__$1;
(statearr_51812_51840[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51802 === (3))){
var inst_51799 = (state_51801[(2)]);
var state_51801__$1 = state_51801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51801__$1,inst_51799);
} else {
if((state_val_51802 === (12))){
var inst_51761 = (state_51801[(7)]);
var inst_51789 = cljs.core.vec(inst_51761);
var state_51801__$1 = state_51801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51801__$1,(15),out,inst_51789);
} else {
if((state_val_51802 === (2))){
var state_51801__$1 = state_51801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51801__$1,(4),ch);
} else {
if((state_val_51802 === (11))){
var inst_51765 = (state_51801[(9)]);
var inst_51769 = (state_51801[(10)]);
var inst_51779 = (state_51801[(2)]);
var inst_51780 = [];
var inst_51781 = inst_51780.push(inst_51765);
var inst_51761 = inst_51780;
var inst_51762 = inst_51769;
var state_51801__$1 = (function (){var statearr_51813 = state_51801;
(statearr_51813[(7)] = inst_51761);

(statearr_51813[(8)] = inst_51762);

(statearr_51813[(11)] = inst_51781);

(statearr_51813[(12)] = inst_51779);

return statearr_51813;
})();
var statearr_51814_51841 = state_51801__$1;
(statearr_51814_51841[(2)] = null);

(statearr_51814_51841[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51802 === (9))){
var inst_51761 = (state_51801[(7)]);
var inst_51777 = cljs.core.vec(inst_51761);
var state_51801__$1 = state_51801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51801__$1,(11),out,inst_51777);
} else {
if((state_val_51802 === (5))){
var inst_51762 = (state_51801[(8)]);
var inst_51765 = (state_51801[(9)]);
var inst_51769 = (state_51801[(10)]);
var inst_51769__$1 = (function (){var G__51815 = inst_51765;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51815) : f.call(null,G__51815));
})();
var inst_51770 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51769__$1,inst_51762);
var inst_51771 = cljs.core.keyword_identical_QMARK_(inst_51762,cljs.core.constant$keyword$36);
var inst_51772 = (inst_51770) || (inst_51771);
var state_51801__$1 = (function (){var statearr_51816 = state_51801;
(statearr_51816[(10)] = inst_51769__$1);

return statearr_51816;
})();
if(cljs.core.truth_(inst_51772)){
var statearr_51817_51842 = state_51801__$1;
(statearr_51817_51842[(1)] = (8));

} else {
var statearr_51818_51843 = state_51801__$1;
(statearr_51818_51843[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_51802 === (14))){
var inst_51794 = (state_51801[(2)]);
var inst_51795 = cljs.core.async.close_BANG_(out);
var state_51801__$1 = (function (){var statearr_51820 = state_51801;
(statearr_51820[(13)] = inst_51794);

return statearr_51820;
})();
var statearr_51821_51844 = state_51801__$1;
(statearr_51821_51844[(2)] = inst_51795);

(statearr_51821_51844[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51802 === (10))){
var inst_51784 = (state_51801[(2)]);
var state_51801__$1 = state_51801;
var statearr_51822_51845 = state_51801__$1;
(statearr_51822_51845[(2)] = inst_51784);

(statearr_51822_51845[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_51802 === (8))){
var inst_51761 = (state_51801[(7)]);
var inst_51765 = (state_51801[(9)]);
var inst_51769 = (state_51801[(10)]);
var inst_51774 = inst_51761.push(inst_51765);
var tmp51819 = inst_51761;
var inst_51761__$1 = tmp51819;
var inst_51762 = inst_51769;
var state_51801__$1 = (function (){var statearr_51823 = state_51801;
(statearr_51823[(7)] = inst_51761__$1);

(statearr_51823[(8)] = inst_51762);

(statearr_51823[(14)] = inst_51774);

return statearr_51823;
})();
var statearr_51824_51846 = state_51801__$1;
(statearr_51824_51846[(2)] = null);

(statearr_51824_51846[(1)] = (2));


return cljs.core.constant$keyword$21;
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
});})(c__39075__auto___51832,out))
;
return ((function (switch__38995__auto__,c__39075__auto___51832,out){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_51828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51828[(0)] = state_machine__38996__auto__);

(statearr_51828[(1)] = (1));

return statearr_51828;
});
var state_machine__38996__auto____1 = (function (state_51801){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_51801);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e51829){if((e51829 instanceof Object)){
var ex__38999__auto__ = e51829;
var statearr_51830_51847 = state_51801;
(statearr_51830_51847[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51801);

return cljs.core.constant$keyword$21;
} else {
throw e51829;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__51848 = state_51801;
state_51801 = G__51848;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_51801){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_51801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto___51832,out))
})();
var state__39077__auto__ = (function (){var statearr_51831 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_51831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto___51832);

return statearr_51831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto___51832,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
