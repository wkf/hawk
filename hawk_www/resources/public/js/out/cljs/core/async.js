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
if(typeof cljs.core.async.t40220 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40220 = (function (f,fn_handler,meta40221){
this.f = f;
this.fn_handler = fn_handler;
this.meta40221 = meta40221;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40220.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40220.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t40220.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t40220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40222){
var self__ = this;
var _40222__$1 = this;
return self__.meta40221;
});

cljs.core.async.t40220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40222,meta40221__$1){
var self__ = this;
var _40222__$1 = this;
return (new cljs.core.async.t40220(self__.f,self__.fn_handler,meta40221__$1));
});

cljs.core.async.t40220.cljs$lang$type = true;

cljs.core.async.t40220.cljs$lang$ctorStr = "cljs.core.async/t40220";

cljs.core.async.t40220.cljs$lang$ctorPrWriter = (function (this__24266__auto__,writer__24267__auto__,opt__24268__auto__){
return cljs.core._write(writer__24267__auto__,"cljs.core.async/t40220");
});

cljs.core.async.__GT_t40220 = (function __GT_t40220(f__$1,fn_handler__$1,meta40221){
return (new cljs.core.async.t40220(f__$1,fn_handler__$1,meta40221));
});

}

return (new cljs.core.async.t40220(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40224 = buff;
if(G__40224){
var bit__24360__auto__ = null;
if(cljs.core.truth_((function (){var or__23679__auto__ = bit__24360__auto__;
if(cljs.core.truth_(or__23679__auto__)){
return or__23679__auto__;
} else {
return G__40224.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__40224.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40224);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40224);
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
var val_40241 = (function (){var G__40238 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40238) : cljs.core.deref.call(null,G__40238));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__40239_40242 = val_40241;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40239_40242) : fn1.call(null,G__40239_40242));
} else {
cljs.core.async.impl.dispatch.run(((function (val_40241,ret){
return (function (){
var G__40240 = val_40241;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40240) : fn1.call(null,G__40240));
});})(val_40241,ret))
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
var G__40251 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40251) : cljs.core.deref.call(null,G__40251));
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
var ret = (function (){var G__40252 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40252) : cljs.core.deref.call(null,G__40252));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__40253_40255 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40253_40255) : fn1.call(null,G__40253_40255));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__40254 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40254) : fn1.call(null,G__40254));
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
var n__24566__auto___40256 = n;
var x_40257 = (0);
while(true){
if((x_40257 < n__24566__auto___40256)){
(a[x_40257] = (0));

var G__40258 = (x_40257 + (1));
x_40257 = G__40258;
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

var G__40259 = (i + (1));
i = G__40259;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__40267 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40267) : cljs.core.atom.call(null,G__40267));
})();
if(typeof cljs.core.async.t40268 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40268 = (function (flag,alt_flag,meta40269){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta40269 = meta40269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40268.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__40271 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40271) : cljs.core.deref.call(null,G__40271));
});})(flag))
;

cljs.core.async.t40268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__40272_40274 = self__.flag;
var G__40273_40275 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__40272_40274,G__40273_40275) : cljs.core.reset_BANG_.call(null,G__40272_40274,G__40273_40275));

return true;
});})(flag))
;

cljs.core.async.t40268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40270){
var self__ = this;
var _40270__$1 = this;
return self__.meta40269;
});})(flag))
;

cljs.core.async.t40268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40270,meta40269__$1){
var self__ = this;
var _40270__$1 = this;
return (new cljs.core.async.t40268(self__.flag,self__.alt_flag,meta40269__$1));
});})(flag))
;

cljs.core.async.t40268.cljs$lang$type = true;

cljs.core.async.t40268.cljs$lang$ctorStr = "cljs.core.async/t40268";

cljs.core.async.t40268.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__24266__auto__,writer__24267__auto__,opt__24268__auto__){
return cljs.core._write(writer__24267__auto__,"cljs.core.async/t40268");
});})(flag))
;

cljs.core.async.__GT_t40268 = ((function (flag){
return (function __GT_t40268(flag__$1,alt_flag__$1,meta40269){
return (new cljs.core.async.t40268(flag__$1,alt_flag__$1,meta40269));
});})(flag))
;

}

return (new cljs.core.async.t40268(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t40279 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40279 = (function (cb,flag,alt_handler,meta40280){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta40280 = meta40280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40279.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t40279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t40279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40281){
var self__ = this;
var _40281__$1 = this;
return self__.meta40280;
});

cljs.core.async.t40279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40281,meta40280__$1){
var self__ = this;
var _40281__$1 = this;
return (new cljs.core.async.t40279(self__.cb,self__.flag,self__.alt_handler,meta40280__$1));
});

cljs.core.async.t40279.cljs$lang$type = true;

cljs.core.async.t40279.cljs$lang$ctorStr = "cljs.core.async/t40279";

cljs.core.async.t40279.cljs$lang$ctorPrWriter = (function (this__24266__auto__,writer__24267__auto__,opt__24268__auto__){
return cljs.core._write(writer__24267__auto__,"cljs.core.async/t40279");
});

cljs.core.async.__GT_t40279 = (function __GT_t40279(cb__$1,flag__$1,alt_handler__$1,meta40280){
return (new cljs.core.async.t40279(cb__$1,flag__$1,alt_handler__$1,meta40280));
});

}

return (new cljs.core.async.t40279(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__40289 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__40289) : port.call(null,G__40289));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__40290 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__40290) : port.call(null,G__40290));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40282_SHARP_){
var G__40291 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40282_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40291) : fret.call(null,G__40291));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40283_SHARP_){
var G__40292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40283_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40292) : fret.call(null,G__40292));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40293 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40293) : cljs.core.deref.call(null,G__40293));
})(),(function (){var or__23679__auto__ = wport;
if(cljs.core.truth_(or__23679__auto__)){
return or__23679__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40294 = (i + (1));
i = G__40294;
continue;
}
} else {
return null;
}
break;
}
})();
var or__23679__auto__ = ret;
if(cljs.core.truth_(or__23679__auto__)){
return or__23679__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__23667__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__23667__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__23667__auto__;
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
var alts_BANG___delegate = function (ports,p__40295){
var map__40297 = p__40295;
var map__40297__$1 = ((cljs.core.seq_QMARK_(map__40297))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40297):map__40297);
var opts = map__40297__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__40295 = null;
if (arguments.length > 1) {
var G__40298__i = 0, G__40298__a = new Array(arguments.length -  1);
while (G__40298__i < G__40298__a.length) {G__40298__a[G__40298__i] = arguments[G__40298__i + 1]; ++G__40298__i;}
  p__40295 = new cljs.core.IndexedSeq(G__40298__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__40295);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__40299){
var ports = cljs.core.first(arglist__40299);
var p__40295 = cljs.core.rest(arglist__40299);
return alts_BANG___delegate(ports,p__40295);
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
var c__30817__auto___40397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto___40397){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto___40397){
return (function (state_40373){
var state_val_40374 = (state_40373[(1)]);
if((state_val_40374 === (7))){
var inst_40369 = (state_40373[(2)]);
var state_40373__$1 = state_40373;
var statearr_40375_40398 = state_40373__$1;
(statearr_40375_40398[(2)] = inst_40369);

(statearr_40375_40398[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40374 === (1))){
var state_40373__$1 = state_40373;
var statearr_40376_40399 = state_40373__$1;
(statearr_40376_40399[(2)] = null);

(statearr_40376_40399[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40374 === (4))){
var inst_40352 = (state_40373[(7)]);
var inst_40352__$1 = (state_40373[(2)]);
var inst_40353 = (inst_40352__$1 == null);
var state_40373__$1 = (function (){var statearr_40377 = state_40373;
(statearr_40377[(7)] = inst_40352__$1);

return statearr_40377;
})();
if(cljs.core.truth_(inst_40353)){
var statearr_40378_40400 = state_40373__$1;
(statearr_40378_40400[(1)] = (5));

} else {
var statearr_40379_40401 = state_40373__$1;
(statearr_40379_40401[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40374 === (13))){
var state_40373__$1 = state_40373;
var statearr_40380_40402 = state_40373__$1;
(statearr_40380_40402[(2)] = null);

(statearr_40380_40402[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40374 === (6))){
var inst_40352 = (state_40373[(7)]);
var state_40373__$1 = state_40373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40373__$1,(11),to,inst_40352);
} else {
if((state_val_40374 === (3))){
var inst_40371 = (state_40373[(2)]);
var state_40373__$1 = state_40373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40373__$1,inst_40371);
} else {
if((state_val_40374 === (12))){
var state_40373__$1 = state_40373;
var statearr_40381_40403 = state_40373__$1;
(statearr_40381_40403[(2)] = null);

(statearr_40381_40403[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40374 === (2))){
var state_40373__$1 = state_40373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40373__$1,(4),from);
} else {
if((state_val_40374 === (11))){
var inst_40362 = (state_40373[(2)]);
var state_40373__$1 = state_40373;
if(cljs.core.truth_(inst_40362)){
var statearr_40382_40404 = state_40373__$1;
(statearr_40382_40404[(1)] = (12));

} else {
var statearr_40383_40405 = state_40373__$1;
(statearr_40383_40405[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40374 === (9))){
var state_40373__$1 = state_40373;
var statearr_40384_40406 = state_40373__$1;
(statearr_40384_40406[(2)] = null);

(statearr_40384_40406[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40374 === (5))){
var state_40373__$1 = state_40373;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40385_40407 = state_40373__$1;
(statearr_40385_40407[(1)] = (8));

} else {
var statearr_40386_40408 = state_40373__$1;
(statearr_40386_40408[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40374 === (14))){
var inst_40367 = (state_40373[(2)]);
var state_40373__$1 = state_40373;
var statearr_40387_40409 = state_40373__$1;
(statearr_40387_40409[(2)] = inst_40367);

(statearr_40387_40409[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40374 === (10))){
var inst_40359 = (state_40373[(2)]);
var state_40373__$1 = state_40373;
var statearr_40388_40410 = state_40373__$1;
(statearr_40388_40410[(2)] = inst_40359);

(statearr_40388_40410[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40374 === (8))){
var inst_40356 = cljs.core.async.close_BANG_(to);
var state_40373__$1 = state_40373;
var statearr_40389_40411 = state_40373__$1;
(statearr_40389_40411[(2)] = inst_40356);

(statearr_40389_40411[(1)] = (10));


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
});})(c__30817__auto___40397))
;
return ((function (switch__30737__auto__,c__30817__auto___40397){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_40393 = [null,null,null,null,null,null,null,null];
(statearr_40393[(0)] = state_machine__30738__auto__);

(statearr_40393[(1)] = (1));

return statearr_40393;
});
var state_machine__30738__auto____1 = (function (state_40373){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_40373);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e40394){if((e40394 instanceof Object)){
var ex__30741__auto__ = e40394;
var statearr_40395_40412 = state_40373;
(statearr_40395_40412[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40373);

return cljs.core.constant$keyword$21;
} else {
throw e40394;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__40413 = state_40373;
state_40373 = G__40413;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_40373){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_40373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto___40397))
})();
var state__30819__auto__ = (function (){var statearr_40396 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_40396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___40397);

return statearr_40396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto___40397))
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
return (function (p__40599){
var vec__40600 = p__40599;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40600,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40600,(1),null);
var job = vec__40600;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30817__auto___40784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto___40784,res,vec__40600,v,p,job,jobs,results){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto___40784,res,vec__40600,v,p,job,jobs,results){
return (function (state_40605){
var state_val_40606 = (state_40605[(1)]);
if((state_val_40606 === (2))){
var inst_40602 = (state_40605[(2)]);
var inst_40603 = cljs.core.async.close_BANG_(res);
var state_40605__$1 = (function (){var statearr_40607 = state_40605;
(statearr_40607[(7)] = inst_40602);

return statearr_40607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40605__$1,inst_40603);
} else {
if((state_val_40606 === (1))){
var state_40605__$1 = state_40605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40605__$1,(2),res,v);
} else {
return null;
}
}
});})(c__30817__auto___40784,res,vec__40600,v,p,job,jobs,results))
;
return ((function (switch__30737__auto__,c__30817__auto___40784,res,vec__40600,v,p,job,jobs,results){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_40611 = [null,null,null,null,null,null,null,null];
(statearr_40611[(0)] = state_machine__30738__auto__);

(statearr_40611[(1)] = (1));

return statearr_40611;
});
var state_machine__30738__auto____1 = (function (state_40605){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_40605);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e40612){if((e40612 instanceof Object)){
var ex__30741__auto__ = e40612;
var statearr_40613_40785 = state_40605;
(statearr_40613_40785[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40605);

return cljs.core.constant$keyword$21;
} else {
throw e40612;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__40786 = state_40605;
state_40605 = G__40786;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_40605){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_40605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto___40784,res,vec__40600,v,p,job,jobs,results))
})();
var state__30819__auto__ = (function (){var statearr_40614 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_40614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___40784);

return statearr_40614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto___40784,res,vec__40600,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40615){
var vec__40616 = p__40615;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40616,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40616,(1),null);
var job = vec__40616;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__40617_40787 = v;
var G__40618_40788 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__40617_40787,G__40618_40788) : xf.call(null,G__40617_40787,G__40618_40788));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__24566__auto___40789 = n;
var __40790 = (0);
while(true){
if((__40790 < n__24566__auto___40789)){
var G__40619_40791 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40619_40791) {
case "async":
var c__30817__auto___40793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40790,c__30817__auto___40793,G__40619_40791,n__24566__auto___40789,jobs,results,process,async){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (__40790,c__30817__auto___40793,G__40619_40791,n__24566__auto___40789,jobs,results,process,async){
return (function (state_40632){
var state_val_40633 = (state_40632[(1)]);
if((state_val_40633 === (7))){
var inst_40628 = (state_40632[(2)]);
var state_40632__$1 = state_40632;
var statearr_40634_40794 = state_40632__$1;
(statearr_40634_40794[(2)] = inst_40628);

(statearr_40634_40794[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40633 === (6))){
var state_40632__$1 = state_40632;
var statearr_40635_40795 = state_40632__$1;
(statearr_40635_40795[(2)] = null);

(statearr_40635_40795[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40633 === (5))){
var state_40632__$1 = state_40632;
var statearr_40636_40796 = state_40632__$1;
(statearr_40636_40796[(2)] = null);

(statearr_40636_40796[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40633 === (4))){
var inst_40622 = (state_40632[(2)]);
var inst_40623 = async(inst_40622);
var state_40632__$1 = state_40632;
if(cljs.core.truth_(inst_40623)){
var statearr_40637_40797 = state_40632__$1;
(statearr_40637_40797[(1)] = (5));

} else {
var statearr_40638_40798 = state_40632__$1;
(statearr_40638_40798[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40633 === (3))){
var inst_40630 = (state_40632[(2)]);
var state_40632__$1 = state_40632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40632__$1,inst_40630);
} else {
if((state_val_40633 === (2))){
var state_40632__$1 = state_40632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40632__$1,(4),jobs);
} else {
if((state_val_40633 === (1))){
var state_40632__$1 = state_40632;
var statearr_40639_40799 = state_40632__$1;
(statearr_40639_40799[(2)] = null);

(statearr_40639_40799[(1)] = (2));


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
});})(__40790,c__30817__auto___40793,G__40619_40791,n__24566__auto___40789,jobs,results,process,async))
;
return ((function (__40790,switch__30737__auto__,c__30817__auto___40793,G__40619_40791,n__24566__auto___40789,jobs,results,process,async){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_40643 = [null,null,null,null,null,null,null];
(statearr_40643[(0)] = state_machine__30738__auto__);

(statearr_40643[(1)] = (1));

return statearr_40643;
});
var state_machine__30738__auto____1 = (function (state_40632){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_40632);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e40644){if((e40644 instanceof Object)){
var ex__30741__auto__ = e40644;
var statearr_40645_40800 = state_40632;
(statearr_40645_40800[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40632);

return cljs.core.constant$keyword$21;
} else {
throw e40644;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__40801 = state_40632;
state_40632 = G__40801;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_40632){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_40632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(__40790,switch__30737__auto__,c__30817__auto___40793,G__40619_40791,n__24566__auto___40789,jobs,results,process,async))
})();
var state__30819__auto__ = (function (){var statearr_40646 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_40646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___40793);

return statearr_40646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(__40790,c__30817__auto___40793,G__40619_40791,n__24566__auto___40789,jobs,results,process,async))
);


break;
case "compute":
var c__30817__auto___40802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40790,c__30817__auto___40802,G__40619_40791,n__24566__auto___40789,jobs,results,process,async){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (__40790,c__30817__auto___40802,G__40619_40791,n__24566__auto___40789,jobs,results,process,async){
return (function (state_40659){
var state_val_40660 = (state_40659[(1)]);
if((state_val_40660 === (7))){
var inst_40655 = (state_40659[(2)]);
var state_40659__$1 = state_40659;
var statearr_40661_40803 = state_40659__$1;
(statearr_40661_40803[(2)] = inst_40655);

(statearr_40661_40803[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40660 === (6))){
var state_40659__$1 = state_40659;
var statearr_40662_40804 = state_40659__$1;
(statearr_40662_40804[(2)] = null);

(statearr_40662_40804[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40660 === (5))){
var state_40659__$1 = state_40659;
var statearr_40663_40805 = state_40659__$1;
(statearr_40663_40805[(2)] = null);

(statearr_40663_40805[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40660 === (4))){
var inst_40649 = (state_40659[(2)]);
var inst_40650 = process(inst_40649);
var state_40659__$1 = state_40659;
if(cljs.core.truth_(inst_40650)){
var statearr_40664_40806 = state_40659__$1;
(statearr_40664_40806[(1)] = (5));

} else {
var statearr_40665_40807 = state_40659__$1;
(statearr_40665_40807[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40660 === (3))){
var inst_40657 = (state_40659[(2)]);
var state_40659__$1 = state_40659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40659__$1,inst_40657);
} else {
if((state_val_40660 === (2))){
var state_40659__$1 = state_40659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40659__$1,(4),jobs);
} else {
if((state_val_40660 === (1))){
var state_40659__$1 = state_40659;
var statearr_40666_40808 = state_40659__$1;
(statearr_40666_40808[(2)] = null);

(statearr_40666_40808[(1)] = (2));


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
});})(__40790,c__30817__auto___40802,G__40619_40791,n__24566__auto___40789,jobs,results,process,async))
;
return ((function (__40790,switch__30737__auto__,c__30817__auto___40802,G__40619_40791,n__24566__auto___40789,jobs,results,process,async){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_40670 = [null,null,null,null,null,null,null];
(statearr_40670[(0)] = state_machine__30738__auto__);

(statearr_40670[(1)] = (1));

return statearr_40670;
});
var state_machine__30738__auto____1 = (function (state_40659){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_40659);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e40671){if((e40671 instanceof Object)){
var ex__30741__auto__ = e40671;
var statearr_40672_40809 = state_40659;
(statearr_40672_40809[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40659);

return cljs.core.constant$keyword$21;
} else {
throw e40671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__40810 = state_40659;
state_40659 = G__40810;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_40659){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_40659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(__40790,switch__30737__auto__,c__30817__auto___40802,G__40619_40791,n__24566__auto___40789,jobs,results,process,async))
})();
var state__30819__auto__ = (function (){var statearr_40673 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_40673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___40802);

return statearr_40673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(__40790,c__30817__auto___40802,G__40619_40791,n__24566__auto___40789,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__40811 = (__40790 + (1));
__40790 = G__40811;
continue;
} else {
}
break;
}

var c__30817__auto___40812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto___40812,jobs,results,process,async){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto___40812,jobs,results,process,async){
return (function (state_40695){
var state_val_40696 = (state_40695[(1)]);
if((state_val_40696 === (9))){
var inst_40688 = (state_40695[(2)]);
var state_40695__$1 = (function (){var statearr_40697 = state_40695;
(statearr_40697[(7)] = inst_40688);

return statearr_40697;
})();
var statearr_40698_40813 = state_40695__$1;
(statearr_40698_40813[(2)] = null);

(statearr_40698_40813[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40696 === (8))){
var inst_40681 = (state_40695[(8)]);
var inst_40686 = (state_40695[(2)]);
var state_40695__$1 = (function (){var statearr_40699 = state_40695;
(statearr_40699[(9)] = inst_40686);

return statearr_40699;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40695__$1,(9),results,inst_40681);
} else {
if((state_val_40696 === (7))){
var inst_40691 = (state_40695[(2)]);
var state_40695__$1 = state_40695;
var statearr_40700_40814 = state_40695__$1;
(statearr_40700_40814[(2)] = inst_40691);

(statearr_40700_40814[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40696 === (6))){
var inst_40676 = (state_40695[(10)]);
var inst_40681 = (state_40695[(8)]);
var inst_40681__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_40682 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40683 = [inst_40676,inst_40681__$1];
var inst_40684 = (new cljs.core.PersistentVector(null,2,(5),inst_40682,inst_40683,null));
var state_40695__$1 = (function (){var statearr_40701 = state_40695;
(statearr_40701[(8)] = inst_40681__$1);

return statearr_40701;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40695__$1,(8),jobs,inst_40684);
} else {
if((state_val_40696 === (5))){
var inst_40679 = cljs.core.async.close_BANG_(jobs);
var state_40695__$1 = state_40695;
var statearr_40702_40815 = state_40695__$1;
(statearr_40702_40815[(2)] = inst_40679);

(statearr_40702_40815[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40696 === (4))){
var inst_40676 = (state_40695[(10)]);
var inst_40676__$1 = (state_40695[(2)]);
var inst_40677 = (inst_40676__$1 == null);
var state_40695__$1 = (function (){var statearr_40703 = state_40695;
(statearr_40703[(10)] = inst_40676__$1);

return statearr_40703;
})();
if(cljs.core.truth_(inst_40677)){
var statearr_40704_40816 = state_40695__$1;
(statearr_40704_40816[(1)] = (5));

} else {
var statearr_40705_40817 = state_40695__$1;
(statearr_40705_40817[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40696 === (3))){
var inst_40693 = (state_40695[(2)]);
var state_40695__$1 = state_40695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40695__$1,inst_40693);
} else {
if((state_val_40696 === (2))){
var state_40695__$1 = state_40695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40695__$1,(4),from);
} else {
if((state_val_40696 === (1))){
var state_40695__$1 = state_40695;
var statearr_40706_40818 = state_40695__$1;
(statearr_40706_40818[(2)] = null);

(statearr_40706_40818[(1)] = (2));


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
});})(c__30817__auto___40812,jobs,results,process,async))
;
return ((function (switch__30737__auto__,c__30817__auto___40812,jobs,results,process,async){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_40710 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40710[(0)] = state_machine__30738__auto__);

(statearr_40710[(1)] = (1));

return statearr_40710;
});
var state_machine__30738__auto____1 = (function (state_40695){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_40695);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e40711){if((e40711 instanceof Object)){
var ex__30741__auto__ = e40711;
var statearr_40712_40819 = state_40695;
(statearr_40712_40819[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40695);

return cljs.core.constant$keyword$21;
} else {
throw e40711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__40820 = state_40695;
state_40695 = G__40820;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_40695){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_40695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto___40812,jobs,results,process,async))
})();
var state__30819__auto__ = (function (){var statearr_40713 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_40713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___40812);

return statearr_40713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto___40812,jobs,results,process,async))
);


var c__30817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto__,jobs,results,process,async){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto__,jobs,results,process,async){
return (function (state_40751){
var state_val_40752 = (state_40751[(1)]);
if((state_val_40752 === (7))){
var inst_40747 = (state_40751[(2)]);
var state_40751__$1 = state_40751;
var statearr_40753_40821 = state_40751__$1;
(statearr_40753_40821[(2)] = inst_40747);

(statearr_40753_40821[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40752 === (20))){
var state_40751__$1 = state_40751;
var statearr_40754_40822 = state_40751__$1;
(statearr_40754_40822[(2)] = null);

(statearr_40754_40822[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40752 === (1))){
var state_40751__$1 = state_40751;
var statearr_40755_40823 = state_40751__$1;
(statearr_40755_40823[(2)] = null);

(statearr_40755_40823[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40752 === (4))){
var inst_40716 = (state_40751[(7)]);
var inst_40716__$1 = (state_40751[(2)]);
var inst_40717 = (inst_40716__$1 == null);
var state_40751__$1 = (function (){var statearr_40756 = state_40751;
(statearr_40756[(7)] = inst_40716__$1);

return statearr_40756;
})();
if(cljs.core.truth_(inst_40717)){
var statearr_40757_40824 = state_40751__$1;
(statearr_40757_40824[(1)] = (5));

} else {
var statearr_40758_40825 = state_40751__$1;
(statearr_40758_40825[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40752 === (15))){
var inst_40729 = (state_40751[(8)]);
var state_40751__$1 = state_40751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40751__$1,(18),to,inst_40729);
} else {
if((state_val_40752 === (21))){
var inst_40742 = (state_40751[(2)]);
var state_40751__$1 = state_40751;
var statearr_40759_40826 = state_40751__$1;
(statearr_40759_40826[(2)] = inst_40742);

(statearr_40759_40826[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40752 === (13))){
var inst_40744 = (state_40751[(2)]);
var state_40751__$1 = (function (){var statearr_40760 = state_40751;
(statearr_40760[(9)] = inst_40744);

return statearr_40760;
})();
var statearr_40761_40827 = state_40751__$1;
(statearr_40761_40827[(2)] = null);

(statearr_40761_40827[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40752 === (6))){
var inst_40716 = (state_40751[(7)]);
var state_40751__$1 = state_40751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40751__$1,(11),inst_40716);
} else {
if((state_val_40752 === (17))){
var inst_40737 = (state_40751[(2)]);
var state_40751__$1 = state_40751;
if(cljs.core.truth_(inst_40737)){
var statearr_40762_40828 = state_40751__$1;
(statearr_40762_40828[(1)] = (19));

} else {
var statearr_40763_40829 = state_40751__$1;
(statearr_40763_40829[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40752 === (3))){
var inst_40749 = (state_40751[(2)]);
var state_40751__$1 = state_40751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40751__$1,inst_40749);
} else {
if((state_val_40752 === (12))){
var inst_40726 = (state_40751[(10)]);
var state_40751__$1 = state_40751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40751__$1,(14),inst_40726);
} else {
if((state_val_40752 === (2))){
var state_40751__$1 = state_40751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40751__$1,(4),results);
} else {
if((state_val_40752 === (19))){
var state_40751__$1 = state_40751;
var statearr_40764_40830 = state_40751__$1;
(statearr_40764_40830[(2)] = null);

(statearr_40764_40830[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40752 === (11))){
var inst_40726 = (state_40751[(2)]);
var state_40751__$1 = (function (){var statearr_40765 = state_40751;
(statearr_40765[(10)] = inst_40726);

return statearr_40765;
})();
var statearr_40766_40831 = state_40751__$1;
(statearr_40766_40831[(2)] = null);

(statearr_40766_40831[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40752 === (9))){
var state_40751__$1 = state_40751;
var statearr_40767_40832 = state_40751__$1;
(statearr_40767_40832[(2)] = null);

(statearr_40767_40832[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40752 === (5))){
var state_40751__$1 = state_40751;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40768_40833 = state_40751__$1;
(statearr_40768_40833[(1)] = (8));

} else {
var statearr_40769_40834 = state_40751__$1;
(statearr_40769_40834[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40752 === (14))){
var inst_40729 = (state_40751[(8)]);
var inst_40731 = (state_40751[(11)]);
var inst_40729__$1 = (state_40751[(2)]);
var inst_40730 = (inst_40729__$1 == null);
var inst_40731__$1 = cljs.core.not(inst_40730);
var state_40751__$1 = (function (){var statearr_40770 = state_40751;
(statearr_40770[(8)] = inst_40729__$1);

(statearr_40770[(11)] = inst_40731__$1);

return statearr_40770;
})();
if(inst_40731__$1){
var statearr_40771_40835 = state_40751__$1;
(statearr_40771_40835[(1)] = (15));

} else {
var statearr_40772_40836 = state_40751__$1;
(statearr_40772_40836[(1)] = (16));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40752 === (16))){
var inst_40731 = (state_40751[(11)]);
var state_40751__$1 = state_40751;
var statearr_40773_40837 = state_40751__$1;
(statearr_40773_40837[(2)] = inst_40731);

(statearr_40773_40837[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40752 === (10))){
var inst_40723 = (state_40751[(2)]);
var state_40751__$1 = state_40751;
var statearr_40774_40838 = state_40751__$1;
(statearr_40774_40838[(2)] = inst_40723);

(statearr_40774_40838[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40752 === (18))){
var inst_40734 = (state_40751[(2)]);
var state_40751__$1 = state_40751;
var statearr_40775_40839 = state_40751__$1;
(statearr_40775_40839[(2)] = inst_40734);

(statearr_40775_40839[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40752 === (8))){
var inst_40720 = cljs.core.async.close_BANG_(to);
var state_40751__$1 = state_40751;
var statearr_40776_40840 = state_40751__$1;
(statearr_40776_40840[(2)] = inst_40720);

(statearr_40776_40840[(1)] = (10));


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
});})(c__30817__auto__,jobs,results,process,async))
;
return ((function (switch__30737__auto__,c__30817__auto__,jobs,results,process,async){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_40780 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40780[(0)] = state_machine__30738__auto__);

(statearr_40780[(1)] = (1));

return statearr_40780;
});
var state_machine__30738__auto____1 = (function (state_40751){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_40751);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e40781){if((e40781 instanceof Object)){
var ex__30741__auto__ = e40781;
var statearr_40782_40841 = state_40751;
(statearr_40782_40841[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40751);

return cljs.core.constant$keyword$21;
} else {
throw e40781;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__40842 = state_40751;
state_40751 = G__40842;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_40751){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_40751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto__,jobs,results,process,async))
})();
var state__30819__auto__ = (function (){var statearr_40783 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_40783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto__);

return statearr_40783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto__,jobs,results,process,async))
);

return c__30817__auto__;
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
var c__30817__auto___40965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto___40965,tc,fc){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto___40965,tc,fc){
return (function (state_40939){
var state_val_40940 = (state_40939[(1)]);
if((state_val_40940 === (7))){
var inst_40935 = (state_40939[(2)]);
var state_40939__$1 = state_40939;
var statearr_40941_40966 = state_40939__$1;
(statearr_40941_40966[(2)] = inst_40935);

(statearr_40941_40966[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40940 === (1))){
var state_40939__$1 = state_40939;
var statearr_40942_40967 = state_40939__$1;
(statearr_40942_40967[(2)] = null);

(statearr_40942_40967[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40940 === (4))){
var inst_40916 = (state_40939[(7)]);
var inst_40916__$1 = (state_40939[(2)]);
var inst_40917 = (inst_40916__$1 == null);
var state_40939__$1 = (function (){var statearr_40943 = state_40939;
(statearr_40943[(7)] = inst_40916__$1);

return statearr_40943;
})();
if(cljs.core.truth_(inst_40917)){
var statearr_40944_40968 = state_40939__$1;
(statearr_40944_40968[(1)] = (5));

} else {
var statearr_40945_40969 = state_40939__$1;
(statearr_40945_40969[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40940 === (13))){
var state_40939__$1 = state_40939;
var statearr_40946_40970 = state_40939__$1;
(statearr_40946_40970[(2)] = null);

(statearr_40946_40970[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40940 === (6))){
var inst_40916 = (state_40939[(7)]);
var inst_40922 = (function (){var G__40947 = inst_40916;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__40947) : p.call(null,G__40947));
})();
var state_40939__$1 = state_40939;
if(cljs.core.truth_(inst_40922)){
var statearr_40948_40971 = state_40939__$1;
(statearr_40948_40971[(1)] = (9));

} else {
var statearr_40949_40972 = state_40939__$1;
(statearr_40949_40972[(1)] = (10));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40940 === (3))){
var inst_40937 = (state_40939[(2)]);
var state_40939__$1 = state_40939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40939__$1,inst_40937);
} else {
if((state_val_40940 === (12))){
var state_40939__$1 = state_40939;
var statearr_40950_40973 = state_40939__$1;
(statearr_40950_40973[(2)] = null);

(statearr_40950_40973[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40940 === (2))){
var state_40939__$1 = state_40939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40939__$1,(4),ch);
} else {
if((state_val_40940 === (11))){
var inst_40916 = (state_40939[(7)]);
var inst_40926 = (state_40939[(2)]);
var state_40939__$1 = state_40939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40939__$1,(8),inst_40926,inst_40916);
} else {
if((state_val_40940 === (9))){
var state_40939__$1 = state_40939;
var statearr_40951_40974 = state_40939__$1;
(statearr_40951_40974[(2)] = tc);

(statearr_40951_40974[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40940 === (5))){
var inst_40919 = cljs.core.async.close_BANG_(tc);
var inst_40920 = cljs.core.async.close_BANG_(fc);
var state_40939__$1 = (function (){var statearr_40952 = state_40939;
(statearr_40952[(8)] = inst_40919);

return statearr_40952;
})();
var statearr_40953_40975 = state_40939__$1;
(statearr_40953_40975[(2)] = inst_40920);

(statearr_40953_40975[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40940 === (14))){
var inst_40933 = (state_40939[(2)]);
var state_40939__$1 = state_40939;
var statearr_40954_40976 = state_40939__$1;
(statearr_40954_40976[(2)] = inst_40933);

(statearr_40954_40976[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40940 === (10))){
var state_40939__$1 = state_40939;
var statearr_40955_40977 = state_40939__$1;
(statearr_40955_40977[(2)] = fc);

(statearr_40955_40977[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40940 === (8))){
var inst_40928 = (state_40939[(2)]);
var state_40939__$1 = state_40939;
if(cljs.core.truth_(inst_40928)){
var statearr_40956_40978 = state_40939__$1;
(statearr_40956_40978[(1)] = (12));

} else {
var statearr_40957_40979 = state_40939__$1;
(statearr_40957_40979[(1)] = (13));

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
});})(c__30817__auto___40965,tc,fc))
;
return ((function (switch__30737__auto__,c__30817__auto___40965,tc,fc){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_40961 = [null,null,null,null,null,null,null,null,null];
(statearr_40961[(0)] = state_machine__30738__auto__);

(statearr_40961[(1)] = (1));

return statearr_40961;
});
var state_machine__30738__auto____1 = (function (state_40939){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_40939);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e40962){if((e40962 instanceof Object)){
var ex__30741__auto__ = e40962;
var statearr_40963_40980 = state_40939;
(statearr_40963_40980[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40939);

return cljs.core.constant$keyword$21;
} else {
throw e40962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__40981 = state_40939;
state_40939 = G__40981;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_40939){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_40939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto___40965,tc,fc))
})();
var state__30819__auto__ = (function (){var statearr_40964 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_40964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___40965);

return statearr_40964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto___40965,tc,fc))
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
var c__30817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto__){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto__){
return (function (state_41030){
var state_val_41031 = (state_41030[(1)]);
if((state_val_41031 === (7))){
var inst_41026 = (state_41030[(2)]);
var state_41030__$1 = state_41030;
var statearr_41032_41050 = state_41030__$1;
(statearr_41032_41050[(2)] = inst_41026);

(statearr_41032_41050[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41031 === (6))){
var inst_41019 = (state_41030[(7)]);
var inst_41016 = (state_41030[(8)]);
var inst_41023 = (function (){var G__41033 = inst_41016;
var G__41034 = inst_41019;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41033,G__41034) : f.call(null,G__41033,G__41034));
})();
var inst_41016__$1 = inst_41023;
var state_41030__$1 = (function (){var statearr_41035 = state_41030;
(statearr_41035[(8)] = inst_41016__$1);

return statearr_41035;
})();
var statearr_41036_41051 = state_41030__$1;
(statearr_41036_41051[(2)] = null);

(statearr_41036_41051[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41031 === (5))){
var inst_41016 = (state_41030[(8)]);
var state_41030__$1 = state_41030;
var statearr_41037_41052 = state_41030__$1;
(statearr_41037_41052[(2)] = inst_41016);

(statearr_41037_41052[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41031 === (4))){
var inst_41019 = (state_41030[(7)]);
var inst_41019__$1 = (state_41030[(2)]);
var inst_41020 = (inst_41019__$1 == null);
var state_41030__$1 = (function (){var statearr_41038 = state_41030;
(statearr_41038[(7)] = inst_41019__$1);

return statearr_41038;
})();
if(cljs.core.truth_(inst_41020)){
var statearr_41039_41053 = state_41030__$1;
(statearr_41039_41053[(1)] = (5));

} else {
var statearr_41040_41054 = state_41030__$1;
(statearr_41040_41054[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41031 === (3))){
var inst_41028 = (state_41030[(2)]);
var state_41030__$1 = state_41030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41030__$1,inst_41028);
} else {
if((state_val_41031 === (2))){
var state_41030__$1 = state_41030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41030__$1,(4),ch);
} else {
if((state_val_41031 === (1))){
var inst_41016 = init;
var state_41030__$1 = (function (){var statearr_41041 = state_41030;
(statearr_41041[(8)] = inst_41016);

return statearr_41041;
})();
var statearr_41042_41055 = state_41030__$1;
(statearr_41042_41055[(2)] = null);

(statearr_41042_41055[(1)] = (2));


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
});})(c__30817__auto__))
;
return ((function (switch__30737__auto__,c__30817__auto__){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_41046 = [null,null,null,null,null,null,null,null,null];
(statearr_41046[(0)] = state_machine__30738__auto__);

(statearr_41046[(1)] = (1));

return statearr_41046;
});
var state_machine__30738__auto____1 = (function (state_41030){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_41030);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e41047){if((e41047 instanceof Object)){
var ex__30741__auto__ = e41047;
var statearr_41048_41056 = state_41030;
(statearr_41048_41056[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41030);

return cljs.core.constant$keyword$21;
} else {
throw e41047;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__41057 = state_41030;
state_41030 = G__41057;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_41030){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_41030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto__))
})();
var state__30819__auto__ = (function (){var statearr_41049 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_41049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto__);

return statearr_41049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto__))
);

return c__30817__auto__;
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
var c__30817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto__){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto__){
return (function (state_41134){
var state_val_41135 = (state_41134[(1)]);
if((state_val_41135 === (7))){
var inst_41116 = (state_41134[(2)]);
var state_41134__$1 = state_41134;
var statearr_41136_41159 = state_41134__$1;
(statearr_41136_41159[(2)] = inst_41116);

(statearr_41136_41159[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41135 === (1))){
var inst_41110 = cljs.core.seq(coll);
var inst_41111 = inst_41110;
var state_41134__$1 = (function (){var statearr_41137 = state_41134;
(statearr_41137[(7)] = inst_41111);

return statearr_41137;
})();
var statearr_41138_41160 = state_41134__$1;
(statearr_41138_41160[(2)] = null);

(statearr_41138_41160[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41135 === (4))){
var inst_41111 = (state_41134[(7)]);
var inst_41114 = cljs.core.first(inst_41111);
var state_41134__$1 = state_41134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41134__$1,(7),ch,inst_41114);
} else {
if((state_val_41135 === (13))){
var inst_41128 = (state_41134[(2)]);
var state_41134__$1 = state_41134;
var statearr_41139_41161 = state_41134__$1;
(statearr_41139_41161[(2)] = inst_41128);

(statearr_41139_41161[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41135 === (6))){
var inst_41119 = (state_41134[(2)]);
var state_41134__$1 = state_41134;
if(cljs.core.truth_(inst_41119)){
var statearr_41140_41162 = state_41134__$1;
(statearr_41140_41162[(1)] = (8));

} else {
var statearr_41141_41163 = state_41134__$1;
(statearr_41141_41163[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41135 === (3))){
var inst_41132 = (state_41134[(2)]);
var state_41134__$1 = state_41134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41134__$1,inst_41132);
} else {
if((state_val_41135 === (12))){
var state_41134__$1 = state_41134;
var statearr_41142_41164 = state_41134__$1;
(statearr_41142_41164[(2)] = null);

(statearr_41142_41164[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41135 === (2))){
var inst_41111 = (state_41134[(7)]);
var state_41134__$1 = state_41134;
if(cljs.core.truth_(inst_41111)){
var statearr_41143_41165 = state_41134__$1;
(statearr_41143_41165[(1)] = (4));

} else {
var statearr_41144_41166 = state_41134__$1;
(statearr_41144_41166[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41135 === (11))){
var inst_41125 = cljs.core.async.close_BANG_(ch);
var state_41134__$1 = state_41134;
var statearr_41145_41167 = state_41134__$1;
(statearr_41145_41167[(2)] = inst_41125);

(statearr_41145_41167[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41135 === (9))){
var state_41134__$1 = state_41134;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41146_41168 = state_41134__$1;
(statearr_41146_41168[(1)] = (11));

} else {
var statearr_41147_41169 = state_41134__$1;
(statearr_41147_41169[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41135 === (5))){
var inst_41111 = (state_41134[(7)]);
var state_41134__$1 = state_41134;
var statearr_41148_41170 = state_41134__$1;
(statearr_41148_41170[(2)] = inst_41111);

(statearr_41148_41170[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41135 === (10))){
var inst_41130 = (state_41134[(2)]);
var state_41134__$1 = state_41134;
var statearr_41149_41171 = state_41134__$1;
(statearr_41149_41171[(2)] = inst_41130);

(statearr_41149_41171[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41135 === (8))){
var inst_41111 = (state_41134[(7)]);
var inst_41121 = cljs.core.next(inst_41111);
var inst_41111__$1 = inst_41121;
var state_41134__$1 = (function (){var statearr_41150 = state_41134;
(statearr_41150[(7)] = inst_41111__$1);

return statearr_41150;
})();
var statearr_41151_41172 = state_41134__$1;
(statearr_41151_41172[(2)] = null);

(statearr_41151_41172[(1)] = (2));


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
});})(c__30817__auto__))
;
return ((function (switch__30737__auto__,c__30817__auto__){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_41155 = [null,null,null,null,null,null,null,null];
(statearr_41155[(0)] = state_machine__30738__auto__);

(statearr_41155[(1)] = (1));

return statearr_41155;
});
var state_machine__30738__auto____1 = (function (state_41134){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_41134);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e41156){if((e41156 instanceof Object)){
var ex__30741__auto__ = e41156;
var statearr_41157_41173 = state_41134;
(statearr_41157_41173[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41134);

return cljs.core.constant$keyword$21;
} else {
throw e41156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__41174 = state_41134;
state_41134 = G__41174;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_41134){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_41134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto__))
})();
var state__30819__auto__ = (function (){var statearr_41158 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_41158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto__);

return statearr_41158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto__))
);

return c__30817__auto__;
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

cljs.core.async.Mux = (function (){var obj41176 = {};
return obj41176;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__23667__auto__ = _;
if(and__23667__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__23667__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__24323__auto__ = (((_ == null))?null:_);
return (function (){var or__23679__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__41180 = x__24323__auto__;
return goog.typeOf(G__41180);
})()]);
if(or__23679__auto__){
return or__23679__auto__;
} else {
var or__23679__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__23679__auto____$1){
return or__23679__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj41182 = {};
return obj41182;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__23667__auto__ = m;
if(and__23667__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__23667__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__24323__auto__ = (((m == null))?null:m);
return (function (){var or__23679__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__41186 = x__24323__auto__;
return goog.typeOf(G__41186);
})()]);
if(or__23679__auto__){
return or__23679__auto__;
} else {
var or__23679__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__23679__auto____$1){
return or__23679__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__23667__auto__ = m;
if(and__23667__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__23667__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__24323__auto__ = (((m == null))?null:m);
return (function (){var or__23679__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__41190 = x__24323__auto__;
return goog.typeOf(G__41190);
})()]);
if(or__23679__auto__){
return or__23679__auto__;
} else {
var or__23679__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__23679__auto____$1){
return or__23679__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__23667__auto__ = m;
if(and__23667__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__23667__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__24323__auto__ = (((m == null))?null:m);
return (function (){var or__23679__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__41194 = x__24323__auto__;
return goog.typeOf(G__41194);
})()]);
if(or__23679__auto__){
return or__23679__auto__;
} else {
var or__23679__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__23679__auto____$1){
return or__23679__auto____$1;
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
var cs = (function (){var G__41424 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41424) : cljs.core.atom.call(null,G__41424));
})();
var m = (function (){
if(typeof cljs.core.async.t41425 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41425 = (function (cs,ch,mult,meta41426){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta41426 = meta41426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41425.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t41425.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t41425.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t41425.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__41428_41653 = self__.cs;
var G__41429_41654 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41428_41653,G__41429_41654) : cljs.core.reset_BANG_.call(null,G__41428_41653,G__41429_41654));

return null;
});})(cs))
;

cljs.core.async.t41425.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t41425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t41425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41427){
var self__ = this;
var _41427__$1 = this;
return self__.meta41426;
});})(cs))
;

cljs.core.async.t41425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41427,meta41426__$1){
var self__ = this;
var _41427__$1 = this;
return (new cljs.core.async.t41425(self__.cs,self__.ch,self__.mult,meta41426__$1));
});})(cs))
;

cljs.core.async.t41425.cljs$lang$type = true;

cljs.core.async.t41425.cljs$lang$ctorStr = "cljs.core.async/t41425";

cljs.core.async.t41425.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__24266__auto__,writer__24267__auto__,opt__24268__auto__){
return cljs.core._write(writer__24267__auto__,"cljs.core.async/t41425");
});})(cs))
;

cljs.core.async.__GT_t41425 = ((function (cs){
return (function __GT_t41425(cs__$1,ch__$1,mult__$1,meta41426){
return (new cljs.core.async.t41425(cs__$1,ch__$1,mult__$1,meta41426));
});})(cs))
;

}

return (new cljs.core.async.t41425(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__41430 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41430) : cljs.core.atom.call(null,G__41430));
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
var c__30817__auto___41655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto___41655,cs,m,dchan,dctr,done){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto___41655,cs,m,dchan,dctr,done){
return (function (state_41561){
var state_val_41562 = (state_41561[(1)]);
if((state_val_41562 === (7))){
var inst_41557 = (state_41561[(2)]);
var state_41561__$1 = state_41561;
var statearr_41563_41656 = state_41561__$1;
(statearr_41563_41656[(2)] = inst_41557);

(statearr_41563_41656[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (20))){
var inst_41462 = (state_41561[(7)]);
var inst_41472 = cljs.core.first(inst_41462);
var inst_41473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41472,(0),null);
var inst_41474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41472,(1),null);
var state_41561__$1 = (function (){var statearr_41564 = state_41561;
(statearr_41564[(8)] = inst_41473);

return statearr_41564;
})();
if(cljs.core.truth_(inst_41474)){
var statearr_41565_41657 = state_41561__$1;
(statearr_41565_41657[(1)] = (22));

} else {
var statearr_41566_41658 = state_41561__$1;
(statearr_41566_41658[(1)] = (23));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (27))){
var inst_41502 = (state_41561[(9)]);
var inst_41509 = (state_41561[(10)]);
var inst_41433 = (state_41561[(11)]);
var inst_41504 = (state_41561[(12)]);
var inst_41509__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41502,inst_41504);
var inst_41510 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41509__$1,inst_41433,done);
var state_41561__$1 = (function (){var statearr_41567 = state_41561;
(statearr_41567[(10)] = inst_41509__$1);

return statearr_41567;
})();
if(cljs.core.truth_(inst_41510)){
var statearr_41568_41659 = state_41561__$1;
(statearr_41568_41659[(1)] = (30));

} else {
var statearr_41569_41660 = state_41561__$1;
(statearr_41569_41660[(1)] = (31));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (1))){
var state_41561__$1 = state_41561;
var statearr_41570_41661 = state_41561__$1;
(statearr_41570_41661[(2)] = null);

(statearr_41570_41661[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (24))){
var inst_41462 = (state_41561[(7)]);
var inst_41479 = (state_41561[(2)]);
var inst_41480 = cljs.core.next(inst_41462);
var inst_41442 = inst_41480;
var inst_41443 = null;
var inst_41444 = (0);
var inst_41445 = (0);
var state_41561__$1 = (function (){var statearr_41571 = state_41561;
(statearr_41571[(13)] = inst_41479);

(statearr_41571[(14)] = inst_41442);

(statearr_41571[(15)] = inst_41444);

(statearr_41571[(16)] = inst_41445);

(statearr_41571[(17)] = inst_41443);

return statearr_41571;
})();
var statearr_41572_41662 = state_41561__$1;
(statearr_41572_41662[(2)] = null);

(statearr_41572_41662[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (39))){
var state_41561__$1 = state_41561;
var statearr_41576_41663 = state_41561__$1;
(statearr_41576_41663[(2)] = null);

(statearr_41576_41663[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (4))){
var inst_41433 = (state_41561[(11)]);
var inst_41433__$1 = (state_41561[(2)]);
var inst_41434 = (inst_41433__$1 == null);
var state_41561__$1 = (function (){var statearr_41577 = state_41561;
(statearr_41577[(11)] = inst_41433__$1);

return statearr_41577;
})();
if(cljs.core.truth_(inst_41434)){
var statearr_41578_41664 = state_41561__$1;
(statearr_41578_41664[(1)] = (5));

} else {
var statearr_41579_41665 = state_41561__$1;
(statearr_41579_41665[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (15))){
var inst_41442 = (state_41561[(14)]);
var inst_41444 = (state_41561[(15)]);
var inst_41445 = (state_41561[(16)]);
var inst_41443 = (state_41561[(17)]);
var inst_41458 = (state_41561[(2)]);
var inst_41459 = (inst_41445 + (1));
var tmp41573 = inst_41442;
var tmp41574 = inst_41444;
var tmp41575 = inst_41443;
var inst_41442__$1 = tmp41573;
var inst_41443__$1 = tmp41575;
var inst_41444__$1 = tmp41574;
var inst_41445__$1 = inst_41459;
var state_41561__$1 = (function (){var statearr_41580 = state_41561;
(statearr_41580[(14)] = inst_41442__$1);

(statearr_41580[(18)] = inst_41458);

(statearr_41580[(15)] = inst_41444__$1);

(statearr_41580[(16)] = inst_41445__$1);

(statearr_41580[(17)] = inst_41443__$1);

return statearr_41580;
})();
var statearr_41581_41666 = state_41561__$1;
(statearr_41581_41666[(2)] = null);

(statearr_41581_41666[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (21))){
var inst_41483 = (state_41561[(2)]);
var state_41561__$1 = state_41561;
var statearr_41585_41667 = state_41561__$1;
(statearr_41585_41667[(2)] = inst_41483);

(statearr_41585_41667[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (31))){
var inst_41509 = (state_41561[(10)]);
var inst_41513 = done(null);
var inst_41514 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41509);
var state_41561__$1 = (function (){var statearr_41586 = state_41561;
(statearr_41586[(19)] = inst_41513);

return statearr_41586;
})();
var statearr_41587_41668 = state_41561__$1;
(statearr_41587_41668[(2)] = inst_41514);

(statearr_41587_41668[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (32))){
var inst_41502 = (state_41561[(9)]);
var inst_41503 = (state_41561[(20)]);
var inst_41501 = (state_41561[(21)]);
var inst_41504 = (state_41561[(12)]);
var inst_41516 = (state_41561[(2)]);
var inst_41517 = (inst_41504 + (1));
var tmp41582 = inst_41502;
var tmp41583 = inst_41503;
var tmp41584 = inst_41501;
var inst_41501__$1 = tmp41584;
var inst_41502__$1 = tmp41582;
var inst_41503__$1 = tmp41583;
var inst_41504__$1 = inst_41517;
var state_41561__$1 = (function (){var statearr_41588 = state_41561;
(statearr_41588[(9)] = inst_41502__$1);

(statearr_41588[(20)] = inst_41503__$1);

(statearr_41588[(21)] = inst_41501__$1);

(statearr_41588[(22)] = inst_41516);

(statearr_41588[(12)] = inst_41504__$1);

return statearr_41588;
})();
var statearr_41589_41669 = state_41561__$1;
(statearr_41589_41669[(2)] = null);

(statearr_41589_41669[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (40))){
var inst_41529 = (state_41561[(23)]);
var inst_41533 = done(null);
var inst_41534 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41529);
var state_41561__$1 = (function (){var statearr_41590 = state_41561;
(statearr_41590[(24)] = inst_41533);

return statearr_41590;
})();
var statearr_41591_41670 = state_41561__$1;
(statearr_41591_41670[(2)] = inst_41534);

(statearr_41591_41670[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (33))){
var inst_41520 = (state_41561[(25)]);
var inst_41522 = cljs.core.chunked_seq_QMARK_(inst_41520);
var state_41561__$1 = state_41561;
if(inst_41522){
var statearr_41592_41671 = state_41561__$1;
(statearr_41592_41671[(1)] = (36));

} else {
var statearr_41593_41672 = state_41561__$1;
(statearr_41593_41672[(1)] = (37));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (13))){
var inst_41452 = (state_41561[(26)]);
var inst_41455 = cljs.core.async.close_BANG_(inst_41452);
var state_41561__$1 = state_41561;
var statearr_41594_41673 = state_41561__$1;
(statearr_41594_41673[(2)] = inst_41455);

(statearr_41594_41673[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (22))){
var inst_41473 = (state_41561[(8)]);
var inst_41476 = cljs.core.async.close_BANG_(inst_41473);
var state_41561__$1 = state_41561;
var statearr_41595_41674 = state_41561__$1;
(statearr_41595_41674[(2)] = inst_41476);

(statearr_41595_41674[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (36))){
var inst_41520 = (state_41561[(25)]);
var inst_41524 = cljs.core.chunk_first(inst_41520);
var inst_41525 = cljs.core.chunk_rest(inst_41520);
var inst_41526 = cljs.core.count(inst_41524);
var inst_41501 = inst_41525;
var inst_41502 = inst_41524;
var inst_41503 = inst_41526;
var inst_41504 = (0);
var state_41561__$1 = (function (){var statearr_41596 = state_41561;
(statearr_41596[(9)] = inst_41502);

(statearr_41596[(20)] = inst_41503);

(statearr_41596[(21)] = inst_41501);

(statearr_41596[(12)] = inst_41504);

return statearr_41596;
})();
var statearr_41597_41675 = state_41561__$1;
(statearr_41597_41675[(2)] = null);

(statearr_41597_41675[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (41))){
var inst_41520 = (state_41561[(25)]);
var inst_41536 = (state_41561[(2)]);
var inst_41537 = cljs.core.next(inst_41520);
var inst_41501 = inst_41537;
var inst_41502 = null;
var inst_41503 = (0);
var inst_41504 = (0);
var state_41561__$1 = (function (){var statearr_41598 = state_41561;
(statearr_41598[(9)] = inst_41502);

(statearr_41598[(20)] = inst_41503);

(statearr_41598[(21)] = inst_41501);

(statearr_41598[(27)] = inst_41536);

(statearr_41598[(12)] = inst_41504);

return statearr_41598;
})();
var statearr_41599_41676 = state_41561__$1;
(statearr_41599_41676[(2)] = null);

(statearr_41599_41676[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (43))){
var state_41561__$1 = state_41561;
var statearr_41600_41677 = state_41561__$1;
(statearr_41600_41677[(2)] = null);

(statearr_41600_41677[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (29))){
var inst_41545 = (state_41561[(2)]);
var state_41561__$1 = state_41561;
var statearr_41601_41678 = state_41561__$1;
(statearr_41601_41678[(2)] = inst_41545);

(statearr_41601_41678[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (44))){
var inst_41554 = (state_41561[(2)]);
var state_41561__$1 = (function (){var statearr_41602 = state_41561;
(statearr_41602[(28)] = inst_41554);

return statearr_41602;
})();
var statearr_41603_41679 = state_41561__$1;
(statearr_41603_41679[(2)] = null);

(statearr_41603_41679[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (6))){
var inst_41493 = (state_41561[(29)]);
var inst_41492 = (function (){var G__41604 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41604) : cljs.core.deref.call(null,G__41604));
})();
var inst_41493__$1 = cljs.core.keys(inst_41492);
var inst_41494 = cljs.core.count(inst_41493__$1);
var inst_41495 = (function (){var G__41605 = dctr;
var G__41606 = inst_41494;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41605,G__41606) : cljs.core.reset_BANG_.call(null,G__41605,G__41606));
})();
var inst_41500 = cljs.core.seq(inst_41493__$1);
var inst_41501 = inst_41500;
var inst_41502 = null;
var inst_41503 = (0);
var inst_41504 = (0);
var state_41561__$1 = (function (){var statearr_41607 = state_41561;
(statearr_41607[(9)] = inst_41502);

(statearr_41607[(30)] = inst_41495);

(statearr_41607[(20)] = inst_41503);

(statearr_41607[(21)] = inst_41501);

(statearr_41607[(29)] = inst_41493__$1);

(statearr_41607[(12)] = inst_41504);

return statearr_41607;
})();
var statearr_41608_41680 = state_41561__$1;
(statearr_41608_41680[(2)] = null);

(statearr_41608_41680[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (28))){
var inst_41520 = (state_41561[(25)]);
var inst_41501 = (state_41561[(21)]);
var inst_41520__$1 = cljs.core.seq(inst_41501);
var state_41561__$1 = (function (){var statearr_41609 = state_41561;
(statearr_41609[(25)] = inst_41520__$1);

return statearr_41609;
})();
if(inst_41520__$1){
var statearr_41610_41681 = state_41561__$1;
(statearr_41610_41681[(1)] = (33));

} else {
var statearr_41611_41682 = state_41561__$1;
(statearr_41611_41682[(1)] = (34));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (25))){
var inst_41503 = (state_41561[(20)]);
var inst_41504 = (state_41561[(12)]);
var inst_41506 = (inst_41504 < inst_41503);
var inst_41507 = inst_41506;
var state_41561__$1 = state_41561;
if(cljs.core.truth_(inst_41507)){
var statearr_41612_41683 = state_41561__$1;
(statearr_41612_41683[(1)] = (27));

} else {
var statearr_41613_41684 = state_41561__$1;
(statearr_41613_41684[(1)] = (28));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (34))){
var state_41561__$1 = state_41561;
var statearr_41614_41685 = state_41561__$1;
(statearr_41614_41685[(2)] = null);

(statearr_41614_41685[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (17))){
var state_41561__$1 = state_41561;
var statearr_41615_41686 = state_41561__$1;
(statearr_41615_41686[(2)] = null);

(statearr_41615_41686[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (3))){
var inst_41559 = (state_41561[(2)]);
var state_41561__$1 = state_41561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41561__$1,inst_41559);
} else {
if((state_val_41562 === (12))){
var inst_41488 = (state_41561[(2)]);
var state_41561__$1 = state_41561;
var statearr_41616_41687 = state_41561__$1;
(statearr_41616_41687[(2)] = inst_41488);

(statearr_41616_41687[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (2))){
var state_41561__$1 = state_41561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41561__$1,(4),ch);
} else {
if((state_val_41562 === (23))){
var state_41561__$1 = state_41561;
var statearr_41617_41688 = state_41561__$1;
(statearr_41617_41688[(2)] = null);

(statearr_41617_41688[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (35))){
var inst_41543 = (state_41561[(2)]);
var state_41561__$1 = state_41561;
var statearr_41618_41689 = state_41561__$1;
(statearr_41618_41689[(2)] = inst_41543);

(statearr_41618_41689[(1)] = (29));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (19))){
var inst_41462 = (state_41561[(7)]);
var inst_41466 = cljs.core.chunk_first(inst_41462);
var inst_41467 = cljs.core.chunk_rest(inst_41462);
var inst_41468 = cljs.core.count(inst_41466);
var inst_41442 = inst_41467;
var inst_41443 = inst_41466;
var inst_41444 = inst_41468;
var inst_41445 = (0);
var state_41561__$1 = (function (){var statearr_41619 = state_41561;
(statearr_41619[(14)] = inst_41442);

(statearr_41619[(15)] = inst_41444);

(statearr_41619[(16)] = inst_41445);

(statearr_41619[(17)] = inst_41443);

return statearr_41619;
})();
var statearr_41620_41690 = state_41561__$1;
(statearr_41620_41690[(2)] = null);

(statearr_41620_41690[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (11))){
var inst_41442 = (state_41561[(14)]);
var inst_41462 = (state_41561[(7)]);
var inst_41462__$1 = cljs.core.seq(inst_41442);
var state_41561__$1 = (function (){var statearr_41621 = state_41561;
(statearr_41621[(7)] = inst_41462__$1);

return statearr_41621;
})();
if(inst_41462__$1){
var statearr_41622_41691 = state_41561__$1;
(statearr_41622_41691[(1)] = (16));

} else {
var statearr_41623_41692 = state_41561__$1;
(statearr_41623_41692[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (9))){
var inst_41490 = (state_41561[(2)]);
var state_41561__$1 = state_41561;
var statearr_41624_41693 = state_41561__$1;
(statearr_41624_41693[(2)] = inst_41490);

(statearr_41624_41693[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (5))){
var inst_41440 = (function (){var G__41625 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41625) : cljs.core.deref.call(null,G__41625));
})();
var inst_41441 = cljs.core.seq(inst_41440);
var inst_41442 = inst_41441;
var inst_41443 = null;
var inst_41444 = (0);
var inst_41445 = (0);
var state_41561__$1 = (function (){var statearr_41626 = state_41561;
(statearr_41626[(14)] = inst_41442);

(statearr_41626[(15)] = inst_41444);

(statearr_41626[(16)] = inst_41445);

(statearr_41626[(17)] = inst_41443);

return statearr_41626;
})();
var statearr_41627_41694 = state_41561__$1;
(statearr_41627_41694[(2)] = null);

(statearr_41627_41694[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (14))){
var state_41561__$1 = state_41561;
var statearr_41628_41695 = state_41561__$1;
(statearr_41628_41695[(2)] = null);

(statearr_41628_41695[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (45))){
var inst_41551 = (state_41561[(2)]);
var state_41561__$1 = state_41561;
var statearr_41629_41696 = state_41561__$1;
(statearr_41629_41696[(2)] = inst_41551);

(statearr_41629_41696[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (26))){
var inst_41493 = (state_41561[(29)]);
var inst_41547 = (state_41561[(2)]);
var inst_41548 = cljs.core.seq(inst_41493);
var state_41561__$1 = (function (){var statearr_41630 = state_41561;
(statearr_41630[(31)] = inst_41547);

return statearr_41630;
})();
if(inst_41548){
var statearr_41631_41697 = state_41561__$1;
(statearr_41631_41697[(1)] = (42));

} else {
var statearr_41632_41698 = state_41561__$1;
(statearr_41632_41698[(1)] = (43));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (16))){
var inst_41462 = (state_41561[(7)]);
var inst_41464 = cljs.core.chunked_seq_QMARK_(inst_41462);
var state_41561__$1 = state_41561;
if(inst_41464){
var statearr_41633_41699 = state_41561__$1;
(statearr_41633_41699[(1)] = (19));

} else {
var statearr_41634_41700 = state_41561__$1;
(statearr_41634_41700[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (38))){
var inst_41540 = (state_41561[(2)]);
var state_41561__$1 = state_41561;
var statearr_41635_41701 = state_41561__$1;
(statearr_41635_41701[(2)] = inst_41540);

(statearr_41635_41701[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (30))){
var state_41561__$1 = state_41561;
var statearr_41636_41702 = state_41561__$1;
(statearr_41636_41702[(2)] = null);

(statearr_41636_41702[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (10))){
var inst_41445 = (state_41561[(16)]);
var inst_41443 = (state_41561[(17)]);
var inst_41451 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41443,inst_41445);
var inst_41452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41451,(0),null);
var inst_41453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41451,(1),null);
var state_41561__$1 = (function (){var statearr_41637 = state_41561;
(statearr_41637[(26)] = inst_41452);

return statearr_41637;
})();
if(cljs.core.truth_(inst_41453)){
var statearr_41638_41703 = state_41561__$1;
(statearr_41638_41703[(1)] = (13));

} else {
var statearr_41639_41704 = state_41561__$1;
(statearr_41639_41704[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (18))){
var inst_41486 = (state_41561[(2)]);
var state_41561__$1 = state_41561;
var statearr_41640_41705 = state_41561__$1;
(statearr_41640_41705[(2)] = inst_41486);

(statearr_41640_41705[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (42))){
var state_41561__$1 = state_41561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41561__$1,(45),dchan);
} else {
if((state_val_41562 === (37))){
var inst_41529 = (state_41561[(23)]);
var inst_41520 = (state_41561[(25)]);
var inst_41433 = (state_41561[(11)]);
var inst_41529__$1 = cljs.core.first(inst_41520);
var inst_41530 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41529__$1,inst_41433,done);
var state_41561__$1 = (function (){var statearr_41641 = state_41561;
(statearr_41641[(23)] = inst_41529__$1);

return statearr_41641;
})();
if(cljs.core.truth_(inst_41530)){
var statearr_41642_41706 = state_41561__$1;
(statearr_41642_41706[(1)] = (39));

} else {
var statearr_41643_41707 = state_41561__$1;
(statearr_41643_41707[(1)] = (40));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41562 === (8))){
var inst_41444 = (state_41561[(15)]);
var inst_41445 = (state_41561[(16)]);
var inst_41447 = (inst_41445 < inst_41444);
var inst_41448 = inst_41447;
var state_41561__$1 = state_41561;
if(cljs.core.truth_(inst_41448)){
var statearr_41644_41708 = state_41561__$1;
(statearr_41644_41708[(1)] = (10));

} else {
var statearr_41645_41709 = state_41561__$1;
(statearr_41645_41709[(1)] = (11));

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
});})(c__30817__auto___41655,cs,m,dchan,dctr,done))
;
return ((function (switch__30737__auto__,c__30817__auto___41655,cs,m,dchan,dctr,done){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_41649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41649[(0)] = state_machine__30738__auto__);

(statearr_41649[(1)] = (1));

return statearr_41649;
});
var state_machine__30738__auto____1 = (function (state_41561){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_41561);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e41650){if((e41650 instanceof Object)){
var ex__30741__auto__ = e41650;
var statearr_41651_41710 = state_41561;
(statearr_41651_41710[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41561);

return cljs.core.constant$keyword$21;
} else {
throw e41650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__41711 = state_41561;
state_41561 = G__41711;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_41561){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_41561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto___41655,cs,m,dchan,dctr,done))
})();
var state__30819__auto__ = (function (){var statearr_41652 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_41652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___41655);

return statearr_41652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto___41655,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj41716 = {};
return obj41716;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__23667__auto__ = m;
if(and__23667__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__23667__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__24323__auto__ = (((m == null))?null:m);
return (function (){var or__23679__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__41720 = x__24323__auto__;
return goog.typeOf(G__41720);
})()]);
if(or__23679__auto__){
return or__23679__auto__;
} else {
var or__23679__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__23679__auto____$1){
return or__23679__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__23667__auto__ = m;
if(and__23667__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__23667__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__24323__auto__ = (((m == null))?null:m);
return (function (){var or__23679__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__41724 = x__24323__auto__;
return goog.typeOf(G__41724);
})()]);
if(or__23679__auto__){
return or__23679__auto__;
} else {
var or__23679__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__23679__auto____$1){
return or__23679__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__23667__auto__ = m;
if(and__23667__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__23667__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__24323__auto__ = (((m == null))?null:m);
return (function (){var or__23679__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__41728 = x__24323__auto__;
return goog.typeOf(G__41728);
})()]);
if(or__23679__auto__){
return or__23679__auto__;
} else {
var or__23679__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__23679__auto____$1){
return or__23679__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__23667__auto__ = m;
if(and__23667__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__23667__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__24323__auto__ = (((m == null))?null:m);
return (function (){var or__23679__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__41732 = x__24323__auto__;
return goog.typeOf(G__41732);
})()]);
if(or__23679__auto__){
return or__23679__auto__;
} else {
var or__23679__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__23679__auto____$1){
return or__23679__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__23667__auto__ = m;
if(and__23667__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__23667__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__24323__auto__ = (((m == null))?null:m);
return (function (){var or__23679__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__41736 = x__24323__auto__;
return goog.typeOf(G__41736);
})()]);
if(or__23679__auto__){
return or__23679__auto__;
} else {
var or__23679__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__23679__auto____$1){
return or__23679__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__41737){
var map__41743 = p__41737;
var map__41743__$1 = ((cljs.core.seq_QMARK_(map__41743))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41743):map__41743);
var opts = map__41743__$1;
var statearr_41744_41748 = state;
(statearr_41744_41748[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__41743,map__41743__$1,opts){
return (function (val){
var statearr_41745_41749 = state;
(statearr_41745_41749[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__41743,map__41743__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_41746_41750 = state;
(statearr_41746_41750[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__41747 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41747) : cljs.core.deref.call(null,G__41747));
})());


return cljs.core.constant$keyword$21;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__41737 = null;
if (arguments.length > 3) {
var G__41751__i = 0, G__41751__a = new Array(arguments.length -  3);
while (G__41751__i < G__41751__a.length) {G__41751__a[G__41751__i] = arguments[G__41751__i + 3]; ++G__41751__i;}
  p__41737 = new cljs.core.IndexedSeq(G__41751__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__41737);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__41752){
var state = cljs.core.first(arglist__41752);
arglist__41752 = cljs.core.next(arglist__41752);
var cont_block = cljs.core.first(arglist__41752);
arglist__41752 = cljs.core.next(arglist__41752);
var ports = cljs.core.first(arglist__41752);
var p__41737 = cljs.core.rest(arglist__41752);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__41737);
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
var cs = (function (){var G__41886 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41886) : cljs.core.atom.call(null,G__41886));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$30,null,cljs.core.constant$keyword$31,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$32);
var solo_mode = (function (){var G__41887 = cljs.core.constant$keyword$31;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41887) : cljs.core.atom.call(null,G__41887));
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
if(cljs.core.truth_((function (){var G__41888 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__41888) : attr.call(null,G__41888));
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
var chs = (function (){var G__41889 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41889) : cljs.core.deref.call(null,G__41889));
})();
var mode = (function (){var G__41890 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41890) : cljs.core.deref.call(null,G__41890));
})();
var solos = pick(cljs.core.constant$keyword$32,chs);
var pauses = pick(cljs.core.constant$keyword$30,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$33,solos,cljs.core.constant$keyword$34,pick(cljs.core.constant$keyword$31,chs),cljs.core.constant$keyword$35,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$30)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t41891 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41891 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41892){
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
this.meta41892 = meta41892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41891.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t41891.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41891.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41891.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__41894_42019 = self__.cs;
var G__41895_42020 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41894_42019,G__41895_42020) : cljs.core.reset_BANG_.call(null,G__41894_42019,G__41895_42020));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41891.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41891.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__41896 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__41896) : self__.solo_modes.call(null,G__41896));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__41897_42021 = self__.solo_mode;
var G__41898_42022 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41897_42021,G__41898_42022) : cljs.core.reset_BANG_.call(null,G__41897_42021,G__41898_42022));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41891.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t41891.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41893){
var self__ = this;
var _41893__$1 = this;
return self__.meta41892;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41893,meta41892__$1){
var self__ = this;
var _41893__$1 = this;
return (new cljs.core.async.t41891(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41892__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41891.cljs$lang$type = true;

cljs.core.async.t41891.cljs$lang$ctorStr = "cljs.core.async/t41891";

cljs.core.async.t41891.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__24266__auto__,writer__24267__auto__,opt__24268__auto__){
return cljs.core._write(writer__24267__auto__,"cljs.core.async/t41891");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t41891 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t41891(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41892){
return (new cljs.core.async.t41891(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41892));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t41891(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30817__auto___42023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto___42023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto___42023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41970){
var state_val_41971 = (state_41970[(1)]);
if((state_val_41971 === (7))){
var inst_41912 = (state_41970[(7)]);
var inst_41917 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41912);
var state_41970__$1 = state_41970;
var statearr_41972_42024 = state_41970__$1;
(statearr_41972_42024[(2)] = inst_41917);

(statearr_41972_42024[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (20))){
var inst_41927 = (state_41970[(8)]);
var state_41970__$1 = state_41970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41970__$1,(23),out,inst_41927);
} else {
if((state_val_41971 === (1))){
var inst_41902 = (state_41970[(9)]);
var inst_41902__$1 = calc_state();
var inst_41903 = cljs.core.seq_QMARK_(inst_41902__$1);
var state_41970__$1 = (function (){var statearr_41973 = state_41970;
(statearr_41973[(9)] = inst_41902__$1);

return statearr_41973;
})();
if(inst_41903){
var statearr_41974_42025 = state_41970__$1;
(statearr_41974_42025[(1)] = (2));

} else {
var statearr_41975_42026 = state_41970__$1;
(statearr_41975_42026[(1)] = (3));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (24))){
var inst_41920 = (state_41970[(10)]);
var inst_41912 = inst_41920;
var state_41970__$1 = (function (){var statearr_41976 = state_41970;
(statearr_41976[(7)] = inst_41912);

return statearr_41976;
})();
var statearr_41977_42027 = state_41970__$1;
(statearr_41977_42027[(2)] = null);

(statearr_41977_42027[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (4))){
var inst_41902 = (state_41970[(9)]);
var inst_41908 = (state_41970[(2)]);
var inst_41909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41908,cljs.core.constant$keyword$35);
var inst_41910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41908,cljs.core.constant$keyword$34);
var inst_41911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41908,cljs.core.constant$keyword$33);
var inst_41912 = inst_41902;
var state_41970__$1 = (function (){var statearr_41978 = state_41970;
(statearr_41978[(11)] = inst_41909);

(statearr_41978[(12)] = inst_41911);

(statearr_41978[(7)] = inst_41912);

(statearr_41978[(13)] = inst_41910);

return statearr_41978;
})();
var statearr_41979_42028 = state_41970__$1;
(statearr_41979_42028[(2)] = null);

(statearr_41979_42028[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (15))){
var state_41970__$1 = state_41970;
var statearr_41980_42029 = state_41970__$1;
(statearr_41980_42029[(2)] = null);

(statearr_41980_42029[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (21))){
var inst_41920 = (state_41970[(10)]);
var inst_41912 = inst_41920;
var state_41970__$1 = (function (){var statearr_41981 = state_41970;
(statearr_41981[(7)] = inst_41912);

return statearr_41981;
})();
var statearr_41982_42030 = state_41970__$1;
(statearr_41982_42030[(2)] = null);

(statearr_41982_42030[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (13))){
var inst_41966 = (state_41970[(2)]);
var state_41970__$1 = state_41970;
var statearr_41983_42031 = state_41970__$1;
(statearr_41983_42031[(2)] = inst_41966);

(statearr_41983_42031[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (22))){
var inst_41964 = (state_41970[(2)]);
var state_41970__$1 = state_41970;
var statearr_41984_42032 = state_41970__$1;
(statearr_41984_42032[(2)] = inst_41964);

(statearr_41984_42032[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (6))){
var inst_41968 = (state_41970[(2)]);
var state_41970__$1 = state_41970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41970__$1,inst_41968);
} else {
if((state_val_41971 === (25))){
var state_41970__$1 = state_41970;
var statearr_41985_42033 = state_41970__$1;
(statearr_41985_42033[(2)] = null);

(statearr_41985_42033[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (17))){
var inst_41943 = (state_41970[(14)]);
var state_41970__$1 = state_41970;
var statearr_41986_42034 = state_41970__$1;
(statearr_41986_42034[(2)] = inst_41943);

(statearr_41986_42034[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (3))){
var inst_41902 = (state_41970[(9)]);
var state_41970__$1 = state_41970;
var statearr_41987_42035 = state_41970__$1;
(statearr_41987_42035[(2)] = inst_41902);

(statearr_41987_42035[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (12))){
var inst_41943 = (state_41970[(14)]);
var inst_41923 = (state_41970[(15)]);
var inst_41928 = (state_41970[(16)]);
var inst_41943__$1 = (function (){var G__41988 = inst_41928;
return (inst_41923.cljs$core$IFn$_invoke$arity$1 ? inst_41923.cljs$core$IFn$_invoke$arity$1(G__41988) : inst_41923.call(null,G__41988));
})();
var state_41970__$1 = (function (){var statearr_41989 = state_41970;
(statearr_41989[(14)] = inst_41943__$1);

return statearr_41989;
})();
if(cljs.core.truth_(inst_41943__$1)){
var statearr_41990_42036 = state_41970__$1;
(statearr_41990_42036[(1)] = (17));

} else {
var statearr_41991_42037 = state_41970__$1;
(statearr_41991_42037[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (2))){
var inst_41902 = (state_41970[(9)]);
var inst_41905 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41902);
var state_41970__$1 = state_41970;
var statearr_41992_42038 = state_41970__$1;
(statearr_41992_42038[(2)] = inst_41905);

(statearr_41992_42038[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (23))){
var inst_41955 = (state_41970[(2)]);
var state_41970__$1 = state_41970;
if(cljs.core.truth_(inst_41955)){
var statearr_41993_42039 = state_41970__$1;
(statearr_41993_42039[(1)] = (24));

} else {
var statearr_41994_42040 = state_41970__$1;
(statearr_41994_42040[(1)] = (25));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (19))){
var inst_41952 = (state_41970[(2)]);
var state_41970__$1 = state_41970;
if(cljs.core.truth_(inst_41952)){
var statearr_41995_42041 = state_41970__$1;
(statearr_41995_42041[(1)] = (20));

} else {
var statearr_41996_42042 = state_41970__$1;
(statearr_41996_42042[(1)] = (21));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (11))){
var inst_41927 = (state_41970[(8)]);
var inst_41933 = (inst_41927 == null);
var state_41970__$1 = state_41970;
if(cljs.core.truth_(inst_41933)){
var statearr_41997_42043 = state_41970__$1;
(statearr_41997_42043[(1)] = (14));

} else {
var statearr_41998_42044 = state_41970__$1;
(statearr_41998_42044[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (9))){
var inst_41920 = (state_41970[(10)]);
var inst_41920__$1 = (state_41970[(2)]);
var inst_41921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41920__$1,cljs.core.constant$keyword$35);
var inst_41922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41920__$1,cljs.core.constant$keyword$34);
var inst_41923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41920__$1,cljs.core.constant$keyword$33);
var state_41970__$1 = (function (){var statearr_41999 = state_41970;
(statearr_41999[(10)] = inst_41920__$1);

(statearr_41999[(17)] = inst_41922);

(statearr_41999[(15)] = inst_41923);

return statearr_41999;
})();
return cljs.core.async.ioc_alts_BANG_(state_41970__$1,(10),inst_41921);
} else {
if((state_val_41971 === (5))){
var inst_41912 = (state_41970[(7)]);
var inst_41915 = cljs.core.seq_QMARK_(inst_41912);
var state_41970__$1 = state_41970;
if(inst_41915){
var statearr_42000_42045 = state_41970__$1;
(statearr_42000_42045[(1)] = (7));

} else {
var statearr_42001_42046 = state_41970__$1;
(statearr_42001_42046[(1)] = (8));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (14))){
var inst_41928 = (state_41970[(16)]);
var inst_41935 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41928);
var state_41970__$1 = state_41970;
var statearr_42002_42047 = state_41970__$1;
(statearr_42002_42047[(2)] = inst_41935);

(statearr_42002_42047[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (26))){
var inst_41960 = (state_41970[(2)]);
var state_41970__$1 = state_41970;
var statearr_42003_42048 = state_41970__$1;
(statearr_42003_42048[(2)] = inst_41960);

(statearr_42003_42048[(1)] = (22));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (16))){
var inst_41938 = (state_41970[(2)]);
var inst_41939 = calc_state();
var inst_41912 = inst_41939;
var state_41970__$1 = (function (){var statearr_42004 = state_41970;
(statearr_42004[(18)] = inst_41938);

(statearr_42004[(7)] = inst_41912);

return statearr_42004;
})();
var statearr_42005_42049 = state_41970__$1;
(statearr_42005_42049[(2)] = null);

(statearr_42005_42049[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (10))){
var inst_41927 = (state_41970[(8)]);
var inst_41928 = (state_41970[(16)]);
var inst_41926 = (state_41970[(2)]);
var inst_41927__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41926,(0),null);
var inst_41928__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41926,(1),null);
var inst_41929 = (inst_41927__$1 == null);
var inst_41930 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41928__$1,change);
var inst_41931 = (inst_41929) || (inst_41930);
var state_41970__$1 = (function (){var statearr_42006 = state_41970;
(statearr_42006[(8)] = inst_41927__$1);

(statearr_42006[(16)] = inst_41928__$1);

return statearr_42006;
})();
if(cljs.core.truth_(inst_41931)){
var statearr_42007_42050 = state_41970__$1;
(statearr_42007_42050[(1)] = (11));

} else {
var statearr_42008_42051 = state_41970__$1;
(statearr_42008_42051[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (18))){
var inst_41922 = (state_41970[(17)]);
var inst_41923 = (state_41970[(15)]);
var inst_41928 = (state_41970[(16)]);
var inst_41947 = cljs.core.empty_QMARK_(inst_41923);
var inst_41948 = (function (){var G__42009 = inst_41928;
return (inst_41922.cljs$core$IFn$_invoke$arity$1 ? inst_41922.cljs$core$IFn$_invoke$arity$1(G__42009) : inst_41922.call(null,G__42009));
})();
var inst_41949 = cljs.core.not(inst_41948);
var inst_41950 = (inst_41947) && (inst_41949);
var state_41970__$1 = state_41970;
var statearr_42010_42052 = state_41970__$1;
(statearr_42010_42052[(2)] = inst_41950);

(statearr_42010_42052[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41971 === (8))){
var inst_41912 = (state_41970[(7)]);
var state_41970__$1 = state_41970;
var statearr_42011_42053 = state_41970__$1;
(statearr_42011_42053[(2)] = inst_41912);

(statearr_42011_42053[(1)] = (9));


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
});})(c__30817__auto___42023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30737__auto__,c__30817__auto___42023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_42015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42015[(0)] = state_machine__30738__auto__);

(statearr_42015[(1)] = (1));

return statearr_42015;
});
var state_machine__30738__auto____1 = (function (state_41970){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_41970);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e42016){if((e42016 instanceof Object)){
var ex__30741__auto__ = e42016;
var statearr_42017_42054 = state_41970;
(statearr_42017_42054[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41970);

return cljs.core.constant$keyword$21;
} else {
throw e42016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__42055 = state_41970;
state_41970 = G__42055;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_41970){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_41970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto___42023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30819__auto__ = (function (){var statearr_42018 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_42018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___42023);

return statearr_42018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto___42023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj42057 = {};
return obj42057;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__23667__auto__ = p;
if(and__23667__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__23667__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__24323__auto__ = (((p == null))?null:p);
return (function (){var or__23679__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__42061 = x__24323__auto__;
return goog.typeOf(G__42061);
})()]);
if(or__23679__auto__){
return or__23679__auto__;
} else {
var or__23679__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__23679__auto____$1){
return or__23679__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__23667__auto__ = p;
if(and__23667__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__23667__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__24323__auto__ = (((p == null))?null:p);
return (function (){var or__23679__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__42065 = x__24323__auto__;
return goog.typeOf(G__42065);
})()]);
if(or__23679__auto__){
return or__23679__auto__;
} else {
var or__23679__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__23679__auto____$1){
return or__23679__auto____$1;
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
if((function (){var and__23667__auto__ = p;
if(and__23667__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__23667__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__24323__auto__ = (((p == null))?null:p);
return (function (){var or__23679__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__42071 = x__24323__auto__;
return goog.typeOf(G__42071);
})()]);
if(or__23679__auto__){
return or__23679__auto__;
} else {
var or__23679__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__23679__auto____$1){
return or__23679__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__23667__auto__ = p;
if(and__23667__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__23667__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__24323__auto__ = (((p == null))?null:p);
return (function (){var or__23679__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__42073 = x__24323__auto__;
return goog.typeOf(G__42073);
})()]);
if(or__23679__auto__){
return or__23679__auto__;
} else {
var or__23679__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__23679__auto____$1){
return or__23679__auto____$1;
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
var mults = (function (){var G__42212 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42212) : cljs.core.atom.call(null,G__42212));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__23679__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__42214 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42214) : cljs.core.deref.call(null,G__42214));
})(),topic);
if(cljs.core.truth_(or__23679__auto__)){
return or__23679__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__23679__auto__,mults){
return (function (p1__42074_SHARP_){
if(cljs.core.truth_((function (){var G__42215 = topic;
return (p1__42074_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42074_SHARP_.cljs$core$IFn$_invoke$arity$1(G__42215) : p1__42074_SHARP_.call(null,G__42215));
})())){
return p1__42074_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42074_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__42216 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__42216) : buf_fn.call(null,G__42216));
})())));
}
});})(or__23679__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t42217 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42217 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta42218){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta42218 = meta42218;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42217.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t42217.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__42220 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__42220) : self__.ensure_mult.call(null,G__42220));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t42217.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__42221 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42221) : cljs.core.deref.call(null,G__42221));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t42217.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__42222 = self__.mults;
var G__42223 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__42222,G__42223) : cljs.core.reset_BANG_.call(null,G__42222,G__42223));
});})(mults,ensure_mult))
;

cljs.core.async.t42217.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t42217.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t42217.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t42217.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42219){
var self__ = this;
var _42219__$1 = this;
return self__.meta42218;
});})(mults,ensure_mult))
;

cljs.core.async.t42217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42219,meta42218__$1){
var self__ = this;
var _42219__$1 = this;
return (new cljs.core.async.t42217(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta42218__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t42217.cljs$lang$type = true;

cljs.core.async.t42217.cljs$lang$ctorStr = "cljs.core.async/t42217";

cljs.core.async.t42217.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__24266__auto__,writer__24267__auto__,opt__24268__auto__){
return cljs.core._write(writer__24267__auto__,"cljs.core.async/t42217");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t42217 = ((function (mults,ensure_mult){
return (function __GT_t42217(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42218){
return (new cljs.core.async.t42217(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42218));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t42217(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30817__auto___42346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto___42346,mults,ensure_mult,p){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto___42346,mults,ensure_mult,p){
return (function (state_42295){
var state_val_42296 = (state_42295[(1)]);
if((state_val_42296 === (7))){
var inst_42291 = (state_42295[(2)]);
var state_42295__$1 = state_42295;
var statearr_42297_42347 = state_42295__$1;
(statearr_42297_42347[(2)] = inst_42291);

(statearr_42297_42347[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (20))){
var state_42295__$1 = state_42295;
var statearr_42298_42348 = state_42295__$1;
(statearr_42298_42348[(2)] = null);

(statearr_42298_42348[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (1))){
var state_42295__$1 = state_42295;
var statearr_42299_42349 = state_42295__$1;
(statearr_42299_42349[(2)] = null);

(statearr_42299_42349[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (24))){
var inst_42274 = (state_42295[(7)]);
var inst_42283 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42274);
var state_42295__$1 = state_42295;
var statearr_42300_42350 = state_42295__$1;
(statearr_42300_42350[(2)] = inst_42283);

(statearr_42300_42350[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (4))){
var inst_42226 = (state_42295[(8)]);
var inst_42226__$1 = (state_42295[(2)]);
var inst_42227 = (inst_42226__$1 == null);
var state_42295__$1 = (function (){var statearr_42301 = state_42295;
(statearr_42301[(8)] = inst_42226__$1);

return statearr_42301;
})();
if(cljs.core.truth_(inst_42227)){
var statearr_42302_42351 = state_42295__$1;
(statearr_42302_42351[(1)] = (5));

} else {
var statearr_42303_42352 = state_42295__$1;
(statearr_42303_42352[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (15))){
var inst_42268 = (state_42295[(2)]);
var state_42295__$1 = state_42295;
var statearr_42304_42353 = state_42295__$1;
(statearr_42304_42353[(2)] = inst_42268);

(statearr_42304_42353[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (21))){
var inst_42288 = (state_42295[(2)]);
var state_42295__$1 = (function (){var statearr_42305 = state_42295;
(statearr_42305[(9)] = inst_42288);

return statearr_42305;
})();
var statearr_42306_42354 = state_42295__$1;
(statearr_42306_42354[(2)] = null);

(statearr_42306_42354[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (13))){
var inst_42250 = (state_42295[(10)]);
var inst_42252 = cljs.core.chunked_seq_QMARK_(inst_42250);
var state_42295__$1 = state_42295;
if(inst_42252){
var statearr_42307_42355 = state_42295__$1;
(statearr_42307_42355[(1)] = (16));

} else {
var statearr_42308_42356 = state_42295__$1;
(statearr_42308_42356[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (22))){
var inst_42280 = (state_42295[(2)]);
var state_42295__$1 = state_42295;
if(cljs.core.truth_(inst_42280)){
var statearr_42309_42357 = state_42295__$1;
(statearr_42309_42357[(1)] = (23));

} else {
var statearr_42310_42358 = state_42295__$1;
(statearr_42310_42358[(1)] = (24));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (6))){
var inst_42276 = (state_42295[(11)]);
var inst_42274 = (state_42295[(7)]);
var inst_42226 = (state_42295[(8)]);
var inst_42274__$1 = (function (){var G__42311 = inst_42226;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__42311) : topic_fn.call(null,G__42311));
})();
var inst_42275 = (function (){var G__42312 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42312) : cljs.core.deref.call(null,G__42312));
})();
var inst_42276__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42275,inst_42274__$1);
var state_42295__$1 = (function (){var statearr_42313 = state_42295;
(statearr_42313[(11)] = inst_42276__$1);

(statearr_42313[(7)] = inst_42274__$1);

return statearr_42313;
})();
if(cljs.core.truth_(inst_42276__$1)){
var statearr_42314_42359 = state_42295__$1;
(statearr_42314_42359[(1)] = (19));

} else {
var statearr_42315_42360 = state_42295__$1;
(statearr_42315_42360[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (25))){
var inst_42285 = (state_42295[(2)]);
var state_42295__$1 = state_42295;
var statearr_42316_42361 = state_42295__$1;
(statearr_42316_42361[(2)] = inst_42285);

(statearr_42316_42361[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (17))){
var inst_42250 = (state_42295[(10)]);
var inst_42259 = cljs.core.first(inst_42250);
var inst_42260 = cljs.core.async.muxch_STAR_(inst_42259);
var inst_42261 = cljs.core.async.close_BANG_(inst_42260);
var inst_42262 = cljs.core.next(inst_42250);
var inst_42236 = inst_42262;
var inst_42237 = null;
var inst_42238 = (0);
var inst_42239 = (0);
var state_42295__$1 = (function (){var statearr_42317 = state_42295;
(statearr_42317[(12)] = inst_42239);

(statearr_42317[(13)] = inst_42261);

(statearr_42317[(14)] = inst_42236);

(statearr_42317[(15)] = inst_42238);

(statearr_42317[(16)] = inst_42237);

return statearr_42317;
})();
var statearr_42318_42362 = state_42295__$1;
(statearr_42318_42362[(2)] = null);

(statearr_42318_42362[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (3))){
var inst_42293 = (state_42295[(2)]);
var state_42295__$1 = state_42295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42295__$1,inst_42293);
} else {
if((state_val_42296 === (12))){
var inst_42270 = (state_42295[(2)]);
var state_42295__$1 = state_42295;
var statearr_42319_42363 = state_42295__$1;
(statearr_42319_42363[(2)] = inst_42270);

(statearr_42319_42363[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (2))){
var state_42295__$1 = state_42295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42295__$1,(4),ch);
} else {
if((state_val_42296 === (23))){
var state_42295__$1 = state_42295;
var statearr_42320_42364 = state_42295__$1;
(statearr_42320_42364[(2)] = null);

(statearr_42320_42364[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (19))){
var inst_42276 = (state_42295[(11)]);
var inst_42226 = (state_42295[(8)]);
var inst_42278 = cljs.core.async.muxch_STAR_(inst_42276);
var state_42295__$1 = state_42295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42295__$1,(22),inst_42278,inst_42226);
} else {
if((state_val_42296 === (11))){
var inst_42236 = (state_42295[(14)]);
var inst_42250 = (state_42295[(10)]);
var inst_42250__$1 = cljs.core.seq(inst_42236);
var state_42295__$1 = (function (){var statearr_42321 = state_42295;
(statearr_42321[(10)] = inst_42250__$1);

return statearr_42321;
})();
if(inst_42250__$1){
var statearr_42322_42365 = state_42295__$1;
(statearr_42322_42365[(1)] = (13));

} else {
var statearr_42323_42366 = state_42295__$1;
(statearr_42323_42366[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (9))){
var inst_42272 = (state_42295[(2)]);
var state_42295__$1 = state_42295;
var statearr_42324_42367 = state_42295__$1;
(statearr_42324_42367[(2)] = inst_42272);

(statearr_42324_42367[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (5))){
var inst_42233 = (function (){var G__42325 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42325) : cljs.core.deref.call(null,G__42325));
})();
var inst_42234 = cljs.core.vals(inst_42233);
var inst_42235 = cljs.core.seq(inst_42234);
var inst_42236 = inst_42235;
var inst_42237 = null;
var inst_42238 = (0);
var inst_42239 = (0);
var state_42295__$1 = (function (){var statearr_42326 = state_42295;
(statearr_42326[(12)] = inst_42239);

(statearr_42326[(14)] = inst_42236);

(statearr_42326[(15)] = inst_42238);

(statearr_42326[(16)] = inst_42237);

return statearr_42326;
})();
var statearr_42327_42368 = state_42295__$1;
(statearr_42327_42368[(2)] = null);

(statearr_42327_42368[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (14))){
var state_42295__$1 = state_42295;
var statearr_42331_42369 = state_42295__$1;
(statearr_42331_42369[(2)] = null);

(statearr_42331_42369[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (16))){
var inst_42250 = (state_42295[(10)]);
var inst_42254 = cljs.core.chunk_first(inst_42250);
var inst_42255 = cljs.core.chunk_rest(inst_42250);
var inst_42256 = cljs.core.count(inst_42254);
var inst_42236 = inst_42255;
var inst_42237 = inst_42254;
var inst_42238 = inst_42256;
var inst_42239 = (0);
var state_42295__$1 = (function (){var statearr_42332 = state_42295;
(statearr_42332[(12)] = inst_42239);

(statearr_42332[(14)] = inst_42236);

(statearr_42332[(15)] = inst_42238);

(statearr_42332[(16)] = inst_42237);

return statearr_42332;
})();
var statearr_42333_42370 = state_42295__$1;
(statearr_42333_42370[(2)] = null);

(statearr_42333_42370[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (10))){
var inst_42239 = (state_42295[(12)]);
var inst_42236 = (state_42295[(14)]);
var inst_42238 = (state_42295[(15)]);
var inst_42237 = (state_42295[(16)]);
var inst_42244 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42237,inst_42239);
var inst_42245 = cljs.core.async.muxch_STAR_(inst_42244);
var inst_42246 = cljs.core.async.close_BANG_(inst_42245);
var inst_42247 = (inst_42239 + (1));
var tmp42328 = inst_42236;
var tmp42329 = inst_42238;
var tmp42330 = inst_42237;
var inst_42236__$1 = tmp42328;
var inst_42237__$1 = tmp42330;
var inst_42238__$1 = tmp42329;
var inst_42239__$1 = inst_42247;
var state_42295__$1 = (function (){var statearr_42334 = state_42295;
(statearr_42334[(12)] = inst_42239__$1);

(statearr_42334[(17)] = inst_42246);

(statearr_42334[(14)] = inst_42236__$1);

(statearr_42334[(15)] = inst_42238__$1);

(statearr_42334[(16)] = inst_42237__$1);

return statearr_42334;
})();
var statearr_42335_42371 = state_42295__$1;
(statearr_42335_42371[(2)] = null);

(statearr_42335_42371[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (18))){
var inst_42265 = (state_42295[(2)]);
var state_42295__$1 = state_42295;
var statearr_42336_42372 = state_42295__$1;
(statearr_42336_42372[(2)] = inst_42265);

(statearr_42336_42372[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42296 === (8))){
var inst_42239 = (state_42295[(12)]);
var inst_42238 = (state_42295[(15)]);
var inst_42241 = (inst_42239 < inst_42238);
var inst_42242 = inst_42241;
var state_42295__$1 = state_42295;
if(cljs.core.truth_(inst_42242)){
var statearr_42337_42373 = state_42295__$1;
(statearr_42337_42373[(1)] = (10));

} else {
var statearr_42338_42374 = state_42295__$1;
(statearr_42338_42374[(1)] = (11));

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
});})(c__30817__auto___42346,mults,ensure_mult,p))
;
return ((function (switch__30737__auto__,c__30817__auto___42346,mults,ensure_mult,p){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_42342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42342[(0)] = state_machine__30738__auto__);

(statearr_42342[(1)] = (1));

return statearr_42342;
});
var state_machine__30738__auto____1 = (function (state_42295){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_42295);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e42343){if((e42343 instanceof Object)){
var ex__30741__auto__ = e42343;
var statearr_42344_42375 = state_42295;
(statearr_42344_42375[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42295);

return cljs.core.constant$keyword$21;
} else {
throw e42343;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__42376 = state_42295;
state_42295 = G__42376;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_42295){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_42295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto___42346,mults,ensure_mult,p))
})();
var state__30819__auto__ = (function (){var statearr_42345 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_42345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___42346);

return statearr_42345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto___42346,mults,ensure_mult,p))
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
var dctr = (function (){var G__42457 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42457) : cljs.core.atom.call(null,G__42457));
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
var c__30817__auto___42530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto___42530,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto___42530,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42496){
var state_val_42497 = (state_42496[(1)]);
if((state_val_42497 === (7))){
var state_42496__$1 = state_42496;
var statearr_42498_42531 = state_42496__$1;
(statearr_42498_42531[(2)] = null);

(statearr_42498_42531[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42497 === (1))){
var state_42496__$1 = state_42496;
var statearr_42499_42532 = state_42496__$1;
(statearr_42499_42532[(2)] = null);

(statearr_42499_42532[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42497 === (4))){
var inst_42460 = (state_42496[(7)]);
var inst_42462 = (inst_42460 < cnt);
var state_42496__$1 = state_42496;
if(cljs.core.truth_(inst_42462)){
var statearr_42500_42533 = state_42496__$1;
(statearr_42500_42533[(1)] = (6));

} else {
var statearr_42501_42534 = state_42496__$1;
(statearr_42501_42534[(1)] = (7));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42497 === (15))){
var inst_42492 = (state_42496[(2)]);
var state_42496__$1 = state_42496;
var statearr_42502_42535 = state_42496__$1;
(statearr_42502_42535[(2)] = inst_42492);

(statearr_42502_42535[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42497 === (13))){
var inst_42485 = cljs.core.async.close_BANG_(out);
var state_42496__$1 = state_42496;
var statearr_42503_42536 = state_42496__$1;
(statearr_42503_42536[(2)] = inst_42485);

(statearr_42503_42536[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42497 === (6))){
var state_42496__$1 = state_42496;
var statearr_42504_42537 = state_42496__$1;
(statearr_42504_42537[(2)] = null);

(statearr_42504_42537[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42497 === (3))){
var inst_42494 = (state_42496[(2)]);
var state_42496__$1 = state_42496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42496__$1,inst_42494);
} else {
if((state_val_42497 === (12))){
var inst_42482 = (state_42496[(8)]);
var inst_42482__$1 = (state_42496[(2)]);
var inst_42483 = cljs.core.some(cljs.core.nil_QMARK_,inst_42482__$1);
var state_42496__$1 = (function (){var statearr_42505 = state_42496;
(statearr_42505[(8)] = inst_42482__$1);

return statearr_42505;
})();
if(cljs.core.truth_(inst_42483)){
var statearr_42506_42538 = state_42496__$1;
(statearr_42506_42538[(1)] = (13));

} else {
var statearr_42507_42539 = state_42496__$1;
(statearr_42507_42539[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42497 === (2))){
var inst_42459 = (function (){var G__42508 = dctr;
var G__42509 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__42508,G__42509) : cljs.core.reset_BANG_.call(null,G__42508,G__42509));
})();
var inst_42460 = (0);
var state_42496__$1 = (function (){var statearr_42510 = state_42496;
(statearr_42510[(7)] = inst_42460);

(statearr_42510[(9)] = inst_42459);

return statearr_42510;
})();
var statearr_42511_42540 = state_42496__$1;
(statearr_42511_42540[(2)] = null);

(statearr_42511_42540[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42497 === (11))){
var inst_42460 = (state_42496[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42496,(10),Object,null,(9));
var inst_42469 = (function (){var G__42512 = inst_42460;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__42512) : chs__$1.call(null,G__42512));
})();
var inst_42470 = (function (){var G__42513 = inst_42460;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42513) : done.call(null,G__42513));
})();
var inst_42471 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42469,inst_42470);
var state_42496__$1 = state_42496;
var statearr_42514_42541 = state_42496__$1;
(statearr_42514_42541[(2)] = inst_42471);


cljs.core.async.impl.ioc_helpers.process_exception(state_42496__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_42497 === (9))){
var inst_42460 = (state_42496[(7)]);
var inst_42473 = (state_42496[(2)]);
var inst_42474 = (inst_42460 + (1));
var inst_42460__$1 = inst_42474;
var state_42496__$1 = (function (){var statearr_42515 = state_42496;
(statearr_42515[(7)] = inst_42460__$1);

(statearr_42515[(10)] = inst_42473);

return statearr_42515;
})();
var statearr_42516_42542 = state_42496__$1;
(statearr_42516_42542[(2)] = null);

(statearr_42516_42542[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42497 === (5))){
var inst_42480 = (state_42496[(2)]);
var state_42496__$1 = (function (){var statearr_42517 = state_42496;
(statearr_42517[(11)] = inst_42480);

return statearr_42517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42496__$1,(12),dchan);
} else {
if((state_val_42497 === (14))){
var inst_42482 = (state_42496[(8)]);
var inst_42487 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42482);
var state_42496__$1 = state_42496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42496__$1,(16),out,inst_42487);
} else {
if((state_val_42497 === (16))){
var inst_42489 = (state_42496[(2)]);
var state_42496__$1 = (function (){var statearr_42518 = state_42496;
(statearr_42518[(12)] = inst_42489);

return statearr_42518;
})();
var statearr_42519_42543 = state_42496__$1;
(statearr_42519_42543[(2)] = null);

(statearr_42519_42543[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42497 === (10))){
var inst_42464 = (state_42496[(2)]);
var inst_42465 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42496__$1 = (function (){var statearr_42520 = state_42496;
(statearr_42520[(13)] = inst_42464);

return statearr_42520;
})();
var statearr_42521_42544 = state_42496__$1;
(statearr_42521_42544[(2)] = inst_42465);


cljs.core.async.impl.ioc_helpers.process_exception(state_42496__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_42497 === (8))){
var inst_42478 = (state_42496[(2)]);
var state_42496__$1 = state_42496;
var statearr_42522_42545 = state_42496__$1;
(statearr_42522_42545[(2)] = inst_42478);

(statearr_42522_42545[(1)] = (5));


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
});})(c__30817__auto___42530,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30737__auto__,c__30817__auto___42530,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_42526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42526[(0)] = state_machine__30738__auto__);

(statearr_42526[(1)] = (1));

return statearr_42526;
});
var state_machine__30738__auto____1 = (function (state_42496){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_42496);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e42527){if((e42527 instanceof Object)){
var ex__30741__auto__ = e42527;
var statearr_42528_42546 = state_42496;
(statearr_42528_42546[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42496);

return cljs.core.constant$keyword$21;
} else {
throw e42527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__42547 = state_42496;
state_42496 = G__42547;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_42496){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_42496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto___42530,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30819__auto__ = (function (){var statearr_42529 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_42529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___42530);

return statearr_42529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto___42530,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__30817__auto___42657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto___42657,out){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto___42657,out){
return (function (state_42633){
var state_val_42634 = (state_42633[(1)]);
if((state_val_42634 === (7))){
var inst_42613 = (state_42633[(7)]);
var inst_42612 = (state_42633[(8)]);
var inst_42612__$1 = (state_42633[(2)]);
var inst_42613__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42612__$1,(0),null);
var inst_42614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42612__$1,(1),null);
var inst_42615 = (inst_42613__$1 == null);
var state_42633__$1 = (function (){var statearr_42635 = state_42633;
(statearr_42635[(7)] = inst_42613__$1);

(statearr_42635[(9)] = inst_42614);

(statearr_42635[(8)] = inst_42612__$1);

return statearr_42635;
})();
if(cljs.core.truth_(inst_42615)){
var statearr_42636_42658 = state_42633__$1;
(statearr_42636_42658[(1)] = (8));

} else {
var statearr_42637_42659 = state_42633__$1;
(statearr_42637_42659[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42634 === (1))){
var inst_42604 = cljs.core.vec(chs);
var inst_42605 = inst_42604;
var state_42633__$1 = (function (){var statearr_42638 = state_42633;
(statearr_42638[(10)] = inst_42605);

return statearr_42638;
})();
var statearr_42639_42660 = state_42633__$1;
(statearr_42639_42660[(2)] = null);

(statearr_42639_42660[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42634 === (4))){
var inst_42605 = (state_42633[(10)]);
var state_42633__$1 = state_42633;
return cljs.core.async.ioc_alts_BANG_(state_42633__$1,(7),inst_42605);
} else {
if((state_val_42634 === (6))){
var inst_42629 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
var statearr_42640_42661 = state_42633__$1;
(statearr_42640_42661[(2)] = inst_42629);

(statearr_42640_42661[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42634 === (3))){
var inst_42631 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42633__$1,inst_42631);
} else {
if((state_val_42634 === (2))){
var inst_42605 = (state_42633[(10)]);
var inst_42607 = cljs.core.count(inst_42605);
var inst_42608 = (inst_42607 > (0));
var state_42633__$1 = state_42633;
if(cljs.core.truth_(inst_42608)){
var statearr_42642_42662 = state_42633__$1;
(statearr_42642_42662[(1)] = (4));

} else {
var statearr_42643_42663 = state_42633__$1;
(statearr_42643_42663[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42634 === (11))){
var inst_42605 = (state_42633[(10)]);
var inst_42622 = (state_42633[(2)]);
var tmp42641 = inst_42605;
var inst_42605__$1 = tmp42641;
var state_42633__$1 = (function (){var statearr_42644 = state_42633;
(statearr_42644[(11)] = inst_42622);

(statearr_42644[(10)] = inst_42605__$1);

return statearr_42644;
})();
var statearr_42645_42664 = state_42633__$1;
(statearr_42645_42664[(2)] = null);

(statearr_42645_42664[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42634 === (9))){
var inst_42613 = (state_42633[(7)]);
var state_42633__$1 = state_42633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42633__$1,(11),out,inst_42613);
} else {
if((state_val_42634 === (5))){
var inst_42627 = cljs.core.async.close_BANG_(out);
var state_42633__$1 = state_42633;
var statearr_42646_42665 = state_42633__$1;
(statearr_42646_42665[(2)] = inst_42627);

(statearr_42646_42665[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42634 === (10))){
var inst_42625 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
var statearr_42647_42666 = state_42633__$1;
(statearr_42647_42666[(2)] = inst_42625);

(statearr_42647_42666[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42634 === (8))){
var inst_42613 = (state_42633[(7)]);
var inst_42614 = (state_42633[(9)]);
var inst_42612 = (state_42633[(8)]);
var inst_42605 = (state_42633[(10)]);
var inst_42617 = (function (){var c = inst_42614;
var v = inst_42613;
var vec__42610 = inst_42612;
var cs = inst_42605;
return ((function (c,v,vec__42610,cs,inst_42613,inst_42614,inst_42612,inst_42605,state_val_42634,c__30817__auto___42657,out){
return (function (p1__42548_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42548_SHARP_);
});
;})(c,v,vec__42610,cs,inst_42613,inst_42614,inst_42612,inst_42605,state_val_42634,c__30817__auto___42657,out))
})();
var inst_42618 = cljs.core.filterv(inst_42617,inst_42605);
var inst_42605__$1 = inst_42618;
var state_42633__$1 = (function (){var statearr_42648 = state_42633;
(statearr_42648[(10)] = inst_42605__$1);

return statearr_42648;
})();
var statearr_42649_42667 = state_42633__$1;
(statearr_42649_42667[(2)] = null);

(statearr_42649_42667[(1)] = (2));


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
});})(c__30817__auto___42657,out))
;
return ((function (switch__30737__auto__,c__30817__auto___42657,out){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_42653 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42653[(0)] = state_machine__30738__auto__);

(statearr_42653[(1)] = (1));

return statearr_42653;
});
var state_machine__30738__auto____1 = (function (state_42633){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_42633);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e42654){if((e42654 instanceof Object)){
var ex__30741__auto__ = e42654;
var statearr_42655_42668 = state_42633;
(statearr_42655_42668[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42633);

return cljs.core.constant$keyword$21;
} else {
throw e42654;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__42669 = state_42633;
state_42633 = G__42669;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_42633){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_42633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto___42657,out))
})();
var state__30819__auto__ = (function (){var statearr_42656 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_42656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___42657);

return statearr_42656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto___42657,out))
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
var c__30817__auto___42765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto___42765,out){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto___42765,out){
return (function (state_42742){
var state_val_42743 = (state_42742[(1)]);
if((state_val_42743 === (7))){
var inst_42724 = (state_42742[(7)]);
var inst_42724__$1 = (state_42742[(2)]);
var inst_42725 = (inst_42724__$1 == null);
var inst_42726 = cljs.core.not(inst_42725);
var state_42742__$1 = (function (){var statearr_42744 = state_42742;
(statearr_42744[(7)] = inst_42724__$1);

return statearr_42744;
})();
if(inst_42726){
var statearr_42745_42766 = state_42742__$1;
(statearr_42745_42766[(1)] = (8));

} else {
var statearr_42746_42767 = state_42742__$1;
(statearr_42746_42767[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42743 === (1))){
var inst_42719 = (0);
var state_42742__$1 = (function (){var statearr_42747 = state_42742;
(statearr_42747[(8)] = inst_42719);

return statearr_42747;
})();
var statearr_42748_42768 = state_42742__$1;
(statearr_42748_42768[(2)] = null);

(statearr_42748_42768[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42743 === (4))){
var state_42742__$1 = state_42742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42742__$1,(7),ch);
} else {
if((state_val_42743 === (6))){
var inst_42737 = (state_42742[(2)]);
var state_42742__$1 = state_42742;
var statearr_42749_42769 = state_42742__$1;
(statearr_42749_42769[(2)] = inst_42737);

(statearr_42749_42769[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42743 === (3))){
var inst_42739 = (state_42742[(2)]);
var inst_42740 = cljs.core.async.close_BANG_(out);
var state_42742__$1 = (function (){var statearr_42750 = state_42742;
(statearr_42750[(9)] = inst_42739);

return statearr_42750;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42742__$1,inst_42740);
} else {
if((state_val_42743 === (2))){
var inst_42719 = (state_42742[(8)]);
var inst_42721 = (inst_42719 < n);
var state_42742__$1 = state_42742;
if(cljs.core.truth_(inst_42721)){
var statearr_42751_42770 = state_42742__$1;
(statearr_42751_42770[(1)] = (4));

} else {
var statearr_42752_42771 = state_42742__$1;
(statearr_42752_42771[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42743 === (11))){
var inst_42719 = (state_42742[(8)]);
var inst_42729 = (state_42742[(2)]);
var inst_42730 = (inst_42719 + (1));
var inst_42719__$1 = inst_42730;
var state_42742__$1 = (function (){var statearr_42753 = state_42742;
(statearr_42753[(8)] = inst_42719__$1);

(statearr_42753[(10)] = inst_42729);

return statearr_42753;
})();
var statearr_42754_42772 = state_42742__$1;
(statearr_42754_42772[(2)] = null);

(statearr_42754_42772[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42743 === (9))){
var state_42742__$1 = state_42742;
var statearr_42755_42773 = state_42742__$1;
(statearr_42755_42773[(2)] = null);

(statearr_42755_42773[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42743 === (5))){
var state_42742__$1 = state_42742;
var statearr_42756_42774 = state_42742__$1;
(statearr_42756_42774[(2)] = null);

(statearr_42756_42774[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42743 === (10))){
var inst_42734 = (state_42742[(2)]);
var state_42742__$1 = state_42742;
var statearr_42757_42775 = state_42742__$1;
(statearr_42757_42775[(2)] = inst_42734);

(statearr_42757_42775[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42743 === (8))){
var inst_42724 = (state_42742[(7)]);
var state_42742__$1 = state_42742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42742__$1,(11),out,inst_42724);
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
});})(c__30817__auto___42765,out))
;
return ((function (switch__30737__auto__,c__30817__auto___42765,out){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_42761 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42761[(0)] = state_machine__30738__auto__);

(statearr_42761[(1)] = (1));

return statearr_42761;
});
var state_machine__30738__auto____1 = (function (state_42742){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_42742);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e42762){if((e42762 instanceof Object)){
var ex__30741__auto__ = e42762;
var statearr_42763_42776 = state_42742;
(statearr_42763_42776[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42742);

return cljs.core.constant$keyword$21;
} else {
throw e42762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__42777 = state_42742;
state_42742 = G__42777;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_42742){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_42742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto___42765,out))
})();
var state__30819__auto__ = (function (){var statearr_42764 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_42764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___42765);

return statearr_42764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto___42765,out))
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
if(typeof cljs.core.async.t42790 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42790 = (function (ch,f,map_LT_,meta42791){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta42791 = meta42791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42790.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t42790.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t42790.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t42790.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t42793 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42793 = (function (fn1,_,meta42791,map_LT_,f,ch,meta42794){
this.fn1 = fn1;
this._ = _;
this.meta42791 = meta42791;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42794 = meta42794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42793.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t42793.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t42793.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42778_SHARP_){
var G__42796 = (((p1__42778_SHARP_ == null))?null:(function (){var G__42797 = p1__42778_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42797) : self__.f.call(null,G__42797));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42796) : f1.call(null,G__42796));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t42793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42795){
var self__ = this;
var _42795__$1 = this;
return self__.meta42794;
});})(___$1))
;

cljs.core.async.t42793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42795,meta42794__$1){
var self__ = this;
var _42795__$1 = this;
return (new cljs.core.async.t42793(self__.fn1,self__._,self__.meta42791,self__.map_LT_,self__.f,self__.ch,meta42794__$1));
});})(___$1))
;

cljs.core.async.t42793.cljs$lang$type = true;

cljs.core.async.t42793.cljs$lang$ctorStr = "cljs.core.async/t42793";

cljs.core.async.t42793.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__24266__auto__,writer__24267__auto__,opt__24268__auto__){
return cljs.core._write(writer__24267__auto__,"cljs.core.async/t42793");
});})(___$1))
;

cljs.core.async.__GT_t42793 = ((function (___$1){
return (function __GT_t42793(fn1__$1,___$2,meta42791__$1,map_LT___$1,f__$1,ch__$1,meta42794){
return (new cljs.core.async.t42793(fn1__$1,___$2,meta42791__$1,map_LT___$1,f__$1,ch__$1,meta42794));
});})(___$1))
;

}

return (new cljs.core.async.t42793(fn1,___$1,self__.meta42791,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__23667__auto__ = ret;
if(cljs.core.truth_(and__23667__auto__)){
return !(((function (){var G__42798 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42798) : cljs.core.deref.call(null,G__42798));
})() == null));
} else {
return and__23667__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42799 = (function (){var G__42800 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42800) : cljs.core.deref.call(null,G__42800));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42799) : self__.f.call(null,G__42799));
})());
} else {
return ret;
}
});

cljs.core.async.t42790.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t42790.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t42790.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t42790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42792){
var self__ = this;
var _42792__$1 = this;
return self__.meta42791;
});

cljs.core.async.t42790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42792,meta42791__$1){
var self__ = this;
var _42792__$1 = this;
return (new cljs.core.async.t42790(self__.ch,self__.f,self__.map_LT_,meta42791__$1));
});

cljs.core.async.t42790.cljs$lang$type = true;

cljs.core.async.t42790.cljs$lang$ctorStr = "cljs.core.async/t42790";

cljs.core.async.t42790.cljs$lang$ctorPrWriter = (function (this__24266__auto__,writer__24267__auto__,opt__24268__auto__){
return cljs.core._write(writer__24267__auto__,"cljs.core.async/t42790");
});

cljs.core.async.__GT_t42790 = (function __GT_t42790(ch__$1,f__$1,map_LT___$1,meta42791){
return (new cljs.core.async.t42790(ch__$1,f__$1,map_LT___$1,meta42791));
});

}

return (new cljs.core.async.t42790(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t42805 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42805 = (function (ch,f,map_GT_,meta42806){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta42806 = meta42806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42805.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t42805.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__42808 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42808) : self__.f.call(null,G__42808));
})(),fn1);
});

cljs.core.async.t42805.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t42805.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t42805.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t42805.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t42805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42807){
var self__ = this;
var _42807__$1 = this;
return self__.meta42806;
});

cljs.core.async.t42805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42807,meta42806__$1){
var self__ = this;
var _42807__$1 = this;
return (new cljs.core.async.t42805(self__.ch,self__.f,self__.map_GT_,meta42806__$1));
});

cljs.core.async.t42805.cljs$lang$type = true;

cljs.core.async.t42805.cljs$lang$ctorStr = "cljs.core.async/t42805";

cljs.core.async.t42805.cljs$lang$ctorPrWriter = (function (this__24266__auto__,writer__24267__auto__,opt__24268__auto__){
return cljs.core._write(writer__24267__auto__,"cljs.core.async/t42805");
});

cljs.core.async.__GT_t42805 = (function __GT_t42805(ch__$1,f__$1,map_GT___$1,meta42806){
return (new cljs.core.async.t42805(ch__$1,f__$1,map_GT___$1,meta42806));
});

}

return (new cljs.core.async.t42805(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t42813 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42813 = (function (ch,p,filter_GT_,meta42814){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta42814 = meta42814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42813.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t42813.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__42816 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__42816) : self__.p.call(null,G__42816));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t42813.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t42813.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t42813.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t42813.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t42813.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t42813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42815){
var self__ = this;
var _42815__$1 = this;
return self__.meta42814;
});

cljs.core.async.t42813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42815,meta42814__$1){
var self__ = this;
var _42815__$1 = this;
return (new cljs.core.async.t42813(self__.ch,self__.p,self__.filter_GT_,meta42814__$1));
});

cljs.core.async.t42813.cljs$lang$type = true;

cljs.core.async.t42813.cljs$lang$ctorStr = "cljs.core.async/t42813";

cljs.core.async.t42813.cljs$lang$ctorPrWriter = (function (this__24266__auto__,writer__24267__auto__,opt__24268__auto__){
return cljs.core._write(writer__24267__auto__,"cljs.core.async/t42813");
});

cljs.core.async.__GT_t42813 = (function __GT_t42813(ch__$1,p__$1,filter_GT___$1,meta42814){
return (new cljs.core.async.t42813(ch__$1,p__$1,filter_GT___$1,meta42814));
});

}

return (new cljs.core.async.t42813(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30817__auto___42904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto___42904,out){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto___42904,out){
return (function (state_42882){
var state_val_42883 = (state_42882[(1)]);
if((state_val_42883 === (7))){
var inst_42878 = (state_42882[(2)]);
var state_42882__$1 = state_42882;
var statearr_42884_42905 = state_42882__$1;
(statearr_42884_42905[(2)] = inst_42878);

(statearr_42884_42905[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42883 === (1))){
var state_42882__$1 = state_42882;
var statearr_42885_42906 = state_42882__$1;
(statearr_42885_42906[(2)] = null);

(statearr_42885_42906[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42883 === (4))){
var inst_42864 = (state_42882[(7)]);
var inst_42864__$1 = (state_42882[(2)]);
var inst_42865 = (inst_42864__$1 == null);
var state_42882__$1 = (function (){var statearr_42886 = state_42882;
(statearr_42886[(7)] = inst_42864__$1);

return statearr_42886;
})();
if(cljs.core.truth_(inst_42865)){
var statearr_42887_42907 = state_42882__$1;
(statearr_42887_42907[(1)] = (5));

} else {
var statearr_42888_42908 = state_42882__$1;
(statearr_42888_42908[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42883 === (6))){
var inst_42864 = (state_42882[(7)]);
var inst_42869 = (function (){var G__42889 = inst_42864;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__42889) : p.call(null,G__42889));
})();
var state_42882__$1 = state_42882;
if(cljs.core.truth_(inst_42869)){
var statearr_42890_42909 = state_42882__$1;
(statearr_42890_42909[(1)] = (8));

} else {
var statearr_42891_42910 = state_42882__$1;
(statearr_42891_42910[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42883 === (3))){
var inst_42880 = (state_42882[(2)]);
var state_42882__$1 = state_42882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42882__$1,inst_42880);
} else {
if((state_val_42883 === (2))){
var state_42882__$1 = state_42882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42882__$1,(4),ch);
} else {
if((state_val_42883 === (11))){
var inst_42872 = (state_42882[(2)]);
var state_42882__$1 = state_42882;
var statearr_42892_42911 = state_42882__$1;
(statearr_42892_42911[(2)] = inst_42872);

(statearr_42892_42911[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42883 === (9))){
var state_42882__$1 = state_42882;
var statearr_42893_42912 = state_42882__$1;
(statearr_42893_42912[(2)] = null);

(statearr_42893_42912[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42883 === (5))){
var inst_42867 = cljs.core.async.close_BANG_(out);
var state_42882__$1 = state_42882;
var statearr_42894_42913 = state_42882__$1;
(statearr_42894_42913[(2)] = inst_42867);

(statearr_42894_42913[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42883 === (10))){
var inst_42875 = (state_42882[(2)]);
var state_42882__$1 = (function (){var statearr_42895 = state_42882;
(statearr_42895[(8)] = inst_42875);

return statearr_42895;
})();
var statearr_42896_42914 = state_42882__$1;
(statearr_42896_42914[(2)] = null);

(statearr_42896_42914[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42883 === (8))){
var inst_42864 = (state_42882[(7)]);
var state_42882__$1 = state_42882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42882__$1,(11),out,inst_42864);
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
});})(c__30817__auto___42904,out))
;
return ((function (switch__30737__auto__,c__30817__auto___42904,out){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_42900 = [null,null,null,null,null,null,null,null,null];
(statearr_42900[(0)] = state_machine__30738__auto__);

(statearr_42900[(1)] = (1));

return statearr_42900;
});
var state_machine__30738__auto____1 = (function (state_42882){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_42882);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e42901){if((e42901 instanceof Object)){
var ex__30741__auto__ = e42901;
var statearr_42902_42915 = state_42882;
(statearr_42902_42915[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42882);

return cljs.core.constant$keyword$21;
} else {
throw e42901;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__42916 = state_42882;
state_42882 = G__42916;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_42882){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_42882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto___42904,out))
})();
var state__30819__auto__ = (function (){var statearr_42903 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_42903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___42904);

return statearr_42903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto___42904,out))
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
var c__30817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto__){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto__){
return (function (state_43086){
var state_val_43087 = (state_43086[(1)]);
if((state_val_43087 === (7))){
var inst_43082 = (state_43086[(2)]);
var state_43086__$1 = state_43086;
var statearr_43088_43130 = state_43086__$1;
(statearr_43088_43130[(2)] = inst_43082);

(statearr_43088_43130[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (20))){
var inst_43052 = (state_43086[(7)]);
var inst_43063 = (state_43086[(2)]);
var inst_43064 = cljs.core.next(inst_43052);
var inst_43038 = inst_43064;
var inst_43039 = null;
var inst_43040 = (0);
var inst_43041 = (0);
var state_43086__$1 = (function (){var statearr_43089 = state_43086;
(statearr_43089[(8)] = inst_43039);

(statearr_43089[(9)] = inst_43041);

(statearr_43089[(10)] = inst_43040);

(statearr_43089[(11)] = inst_43063);

(statearr_43089[(12)] = inst_43038);

return statearr_43089;
})();
var statearr_43090_43131 = state_43086__$1;
(statearr_43090_43131[(2)] = null);

(statearr_43090_43131[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (1))){
var state_43086__$1 = state_43086;
var statearr_43091_43132 = state_43086__$1;
(statearr_43091_43132[(2)] = null);

(statearr_43091_43132[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (4))){
var inst_43027 = (state_43086[(13)]);
var inst_43027__$1 = (state_43086[(2)]);
var inst_43028 = (inst_43027__$1 == null);
var state_43086__$1 = (function (){var statearr_43092 = state_43086;
(statearr_43092[(13)] = inst_43027__$1);

return statearr_43092;
})();
if(cljs.core.truth_(inst_43028)){
var statearr_43093_43133 = state_43086__$1;
(statearr_43093_43133[(1)] = (5));

} else {
var statearr_43094_43134 = state_43086__$1;
(statearr_43094_43134[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (15))){
var state_43086__$1 = state_43086;
var statearr_43098_43135 = state_43086__$1;
(statearr_43098_43135[(2)] = null);

(statearr_43098_43135[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (21))){
var state_43086__$1 = state_43086;
var statearr_43099_43136 = state_43086__$1;
(statearr_43099_43136[(2)] = null);

(statearr_43099_43136[(1)] = (23));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (13))){
var inst_43039 = (state_43086[(8)]);
var inst_43041 = (state_43086[(9)]);
var inst_43040 = (state_43086[(10)]);
var inst_43038 = (state_43086[(12)]);
var inst_43048 = (state_43086[(2)]);
var inst_43049 = (inst_43041 + (1));
var tmp43095 = inst_43039;
var tmp43096 = inst_43040;
var tmp43097 = inst_43038;
var inst_43038__$1 = tmp43097;
var inst_43039__$1 = tmp43095;
var inst_43040__$1 = tmp43096;
var inst_43041__$1 = inst_43049;
var state_43086__$1 = (function (){var statearr_43100 = state_43086;
(statearr_43100[(8)] = inst_43039__$1);

(statearr_43100[(9)] = inst_43041__$1);

(statearr_43100[(10)] = inst_43040__$1);

(statearr_43100[(12)] = inst_43038__$1);

(statearr_43100[(14)] = inst_43048);

return statearr_43100;
})();
var statearr_43101_43137 = state_43086__$1;
(statearr_43101_43137[(2)] = null);

(statearr_43101_43137[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (22))){
var state_43086__$1 = state_43086;
var statearr_43102_43138 = state_43086__$1;
(statearr_43102_43138[(2)] = null);

(statearr_43102_43138[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (6))){
var inst_43027 = (state_43086[(13)]);
var inst_43036 = (function (){var G__43103 = inst_43027;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43103) : f.call(null,G__43103));
})();
var inst_43037 = cljs.core.seq(inst_43036);
var inst_43038 = inst_43037;
var inst_43039 = null;
var inst_43040 = (0);
var inst_43041 = (0);
var state_43086__$1 = (function (){var statearr_43104 = state_43086;
(statearr_43104[(8)] = inst_43039);

(statearr_43104[(9)] = inst_43041);

(statearr_43104[(10)] = inst_43040);

(statearr_43104[(12)] = inst_43038);

return statearr_43104;
})();
var statearr_43105_43139 = state_43086__$1;
(statearr_43105_43139[(2)] = null);

(statearr_43105_43139[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (17))){
var inst_43052 = (state_43086[(7)]);
var inst_43056 = cljs.core.chunk_first(inst_43052);
var inst_43057 = cljs.core.chunk_rest(inst_43052);
var inst_43058 = cljs.core.count(inst_43056);
var inst_43038 = inst_43057;
var inst_43039 = inst_43056;
var inst_43040 = inst_43058;
var inst_43041 = (0);
var state_43086__$1 = (function (){var statearr_43106 = state_43086;
(statearr_43106[(8)] = inst_43039);

(statearr_43106[(9)] = inst_43041);

(statearr_43106[(10)] = inst_43040);

(statearr_43106[(12)] = inst_43038);

return statearr_43106;
})();
var statearr_43107_43140 = state_43086__$1;
(statearr_43107_43140[(2)] = null);

(statearr_43107_43140[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (3))){
var inst_43084 = (state_43086[(2)]);
var state_43086__$1 = state_43086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43086__$1,inst_43084);
} else {
if((state_val_43087 === (12))){
var inst_43072 = (state_43086[(2)]);
var state_43086__$1 = state_43086;
var statearr_43108_43141 = state_43086__$1;
(statearr_43108_43141[(2)] = inst_43072);

(statearr_43108_43141[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (2))){
var state_43086__$1 = state_43086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43086__$1,(4),in$);
} else {
if((state_val_43087 === (23))){
var inst_43080 = (state_43086[(2)]);
var state_43086__$1 = state_43086;
var statearr_43109_43142 = state_43086__$1;
(statearr_43109_43142[(2)] = inst_43080);

(statearr_43109_43142[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (19))){
var inst_43067 = (state_43086[(2)]);
var state_43086__$1 = state_43086;
var statearr_43110_43143 = state_43086__$1;
(statearr_43110_43143[(2)] = inst_43067);

(statearr_43110_43143[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (11))){
var inst_43052 = (state_43086[(7)]);
var inst_43038 = (state_43086[(12)]);
var inst_43052__$1 = cljs.core.seq(inst_43038);
var state_43086__$1 = (function (){var statearr_43111 = state_43086;
(statearr_43111[(7)] = inst_43052__$1);

return statearr_43111;
})();
if(inst_43052__$1){
var statearr_43112_43144 = state_43086__$1;
(statearr_43112_43144[(1)] = (14));

} else {
var statearr_43113_43145 = state_43086__$1;
(statearr_43113_43145[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (9))){
var inst_43074 = (state_43086[(2)]);
var inst_43075 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43086__$1 = (function (){var statearr_43114 = state_43086;
(statearr_43114[(15)] = inst_43074);

return statearr_43114;
})();
if(cljs.core.truth_(inst_43075)){
var statearr_43115_43146 = state_43086__$1;
(statearr_43115_43146[(1)] = (21));

} else {
var statearr_43116_43147 = state_43086__$1;
(statearr_43116_43147[(1)] = (22));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (5))){
var inst_43030 = cljs.core.async.close_BANG_(out);
var state_43086__$1 = state_43086;
var statearr_43117_43148 = state_43086__$1;
(statearr_43117_43148[(2)] = inst_43030);

(statearr_43117_43148[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (14))){
var inst_43052 = (state_43086[(7)]);
var inst_43054 = cljs.core.chunked_seq_QMARK_(inst_43052);
var state_43086__$1 = state_43086;
if(inst_43054){
var statearr_43118_43149 = state_43086__$1;
(statearr_43118_43149[(1)] = (17));

} else {
var statearr_43119_43150 = state_43086__$1;
(statearr_43119_43150[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (16))){
var inst_43070 = (state_43086[(2)]);
var state_43086__$1 = state_43086;
var statearr_43120_43151 = state_43086__$1;
(statearr_43120_43151[(2)] = inst_43070);

(statearr_43120_43151[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43087 === (10))){
var inst_43039 = (state_43086[(8)]);
var inst_43041 = (state_43086[(9)]);
var inst_43046 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43039,inst_43041);
var state_43086__$1 = state_43086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43086__$1,(13),out,inst_43046);
} else {
if((state_val_43087 === (18))){
var inst_43052 = (state_43086[(7)]);
var inst_43061 = cljs.core.first(inst_43052);
var state_43086__$1 = state_43086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43086__$1,(20),out,inst_43061);
} else {
if((state_val_43087 === (8))){
var inst_43041 = (state_43086[(9)]);
var inst_43040 = (state_43086[(10)]);
var inst_43043 = (inst_43041 < inst_43040);
var inst_43044 = inst_43043;
var state_43086__$1 = state_43086;
if(cljs.core.truth_(inst_43044)){
var statearr_43121_43152 = state_43086__$1;
(statearr_43121_43152[(1)] = (10));

} else {
var statearr_43122_43153 = state_43086__$1;
(statearr_43122_43153[(1)] = (11));

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
});})(c__30817__auto__))
;
return ((function (switch__30737__auto__,c__30817__auto__){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_43126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43126[(0)] = state_machine__30738__auto__);

(statearr_43126[(1)] = (1));

return statearr_43126;
});
var state_machine__30738__auto____1 = (function (state_43086){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_43086);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e43127){if((e43127 instanceof Object)){
var ex__30741__auto__ = e43127;
var statearr_43128_43154 = state_43086;
(statearr_43128_43154[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43086);

return cljs.core.constant$keyword$21;
} else {
throw e43127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__43155 = state_43086;
state_43086 = G__43155;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_43086){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_43086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto__))
})();
var state__30819__auto__ = (function (){var statearr_43129 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_43129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto__);

return statearr_43129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto__))
);

return c__30817__auto__;
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
var c__30817__auto___43260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto___43260,out){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto___43260,out){
return (function (state_43235){
var state_val_43236 = (state_43235[(1)]);
if((state_val_43236 === (7))){
var inst_43230 = (state_43235[(2)]);
var state_43235__$1 = state_43235;
var statearr_43237_43261 = state_43235__$1;
(statearr_43237_43261[(2)] = inst_43230);

(statearr_43237_43261[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43236 === (1))){
var inst_43212 = null;
var state_43235__$1 = (function (){var statearr_43238 = state_43235;
(statearr_43238[(7)] = inst_43212);

return statearr_43238;
})();
var statearr_43239_43262 = state_43235__$1;
(statearr_43239_43262[(2)] = null);

(statearr_43239_43262[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43236 === (4))){
var inst_43215 = (state_43235[(8)]);
var inst_43215__$1 = (state_43235[(2)]);
var inst_43216 = (inst_43215__$1 == null);
var inst_43217 = cljs.core.not(inst_43216);
var state_43235__$1 = (function (){var statearr_43240 = state_43235;
(statearr_43240[(8)] = inst_43215__$1);

return statearr_43240;
})();
if(inst_43217){
var statearr_43241_43263 = state_43235__$1;
(statearr_43241_43263[(1)] = (5));

} else {
var statearr_43242_43264 = state_43235__$1;
(statearr_43242_43264[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43236 === (6))){
var state_43235__$1 = state_43235;
var statearr_43243_43265 = state_43235__$1;
(statearr_43243_43265[(2)] = null);

(statearr_43243_43265[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43236 === (3))){
var inst_43232 = (state_43235[(2)]);
var inst_43233 = cljs.core.async.close_BANG_(out);
var state_43235__$1 = (function (){var statearr_43244 = state_43235;
(statearr_43244[(9)] = inst_43232);

return statearr_43244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43235__$1,inst_43233);
} else {
if((state_val_43236 === (2))){
var state_43235__$1 = state_43235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43235__$1,(4),ch);
} else {
if((state_val_43236 === (11))){
var inst_43215 = (state_43235[(8)]);
var inst_43224 = (state_43235[(2)]);
var inst_43212 = inst_43215;
var state_43235__$1 = (function (){var statearr_43245 = state_43235;
(statearr_43245[(7)] = inst_43212);

(statearr_43245[(10)] = inst_43224);

return statearr_43245;
})();
var statearr_43246_43266 = state_43235__$1;
(statearr_43246_43266[(2)] = null);

(statearr_43246_43266[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43236 === (9))){
var inst_43215 = (state_43235[(8)]);
var state_43235__$1 = state_43235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43235__$1,(11),out,inst_43215);
} else {
if((state_val_43236 === (5))){
var inst_43215 = (state_43235[(8)]);
var inst_43212 = (state_43235[(7)]);
var inst_43219 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43215,inst_43212);
var state_43235__$1 = state_43235;
if(inst_43219){
var statearr_43248_43267 = state_43235__$1;
(statearr_43248_43267[(1)] = (8));

} else {
var statearr_43249_43268 = state_43235__$1;
(statearr_43249_43268[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43236 === (10))){
var inst_43227 = (state_43235[(2)]);
var state_43235__$1 = state_43235;
var statearr_43250_43269 = state_43235__$1;
(statearr_43250_43269[(2)] = inst_43227);

(statearr_43250_43269[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43236 === (8))){
var inst_43212 = (state_43235[(7)]);
var tmp43247 = inst_43212;
var inst_43212__$1 = tmp43247;
var state_43235__$1 = (function (){var statearr_43251 = state_43235;
(statearr_43251[(7)] = inst_43212__$1);

return statearr_43251;
})();
var statearr_43252_43270 = state_43235__$1;
(statearr_43252_43270[(2)] = null);

(statearr_43252_43270[(1)] = (2));


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
});})(c__30817__auto___43260,out))
;
return ((function (switch__30737__auto__,c__30817__auto___43260,out){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_43256 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43256[(0)] = state_machine__30738__auto__);

(statearr_43256[(1)] = (1));

return statearr_43256;
});
var state_machine__30738__auto____1 = (function (state_43235){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_43235);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e43257){if((e43257 instanceof Object)){
var ex__30741__auto__ = e43257;
var statearr_43258_43271 = state_43235;
(statearr_43258_43271[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43235);

return cljs.core.constant$keyword$21;
} else {
throw e43257;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__43272 = state_43235;
state_43235 = G__43272;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_43235){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_43235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto___43260,out))
})();
var state__30819__auto__ = (function (){var statearr_43259 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_43259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___43260);

return statearr_43259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto___43260,out))
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
var c__30817__auto___43410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto___43410,out){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto___43410,out){
return (function (state_43380){
var state_val_43381 = (state_43380[(1)]);
if((state_val_43381 === (7))){
var inst_43376 = (state_43380[(2)]);
var state_43380__$1 = state_43380;
var statearr_43382_43411 = state_43380__$1;
(statearr_43382_43411[(2)] = inst_43376);

(statearr_43382_43411[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43381 === (1))){
var inst_43343 = (new Array(n));
var inst_43344 = inst_43343;
var inst_43345 = (0);
var state_43380__$1 = (function (){var statearr_43383 = state_43380;
(statearr_43383[(7)] = inst_43344);

(statearr_43383[(8)] = inst_43345);

return statearr_43383;
})();
var statearr_43384_43412 = state_43380__$1;
(statearr_43384_43412[(2)] = null);

(statearr_43384_43412[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43381 === (4))){
var inst_43348 = (state_43380[(9)]);
var inst_43348__$1 = (state_43380[(2)]);
var inst_43349 = (inst_43348__$1 == null);
var inst_43350 = cljs.core.not(inst_43349);
var state_43380__$1 = (function (){var statearr_43385 = state_43380;
(statearr_43385[(9)] = inst_43348__$1);

return statearr_43385;
})();
if(inst_43350){
var statearr_43386_43413 = state_43380__$1;
(statearr_43386_43413[(1)] = (5));

} else {
var statearr_43387_43414 = state_43380__$1;
(statearr_43387_43414[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43381 === (15))){
var inst_43370 = (state_43380[(2)]);
var state_43380__$1 = state_43380;
var statearr_43388_43415 = state_43380__$1;
(statearr_43388_43415[(2)] = inst_43370);

(statearr_43388_43415[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43381 === (13))){
var state_43380__$1 = state_43380;
var statearr_43389_43416 = state_43380__$1;
(statearr_43389_43416[(2)] = null);

(statearr_43389_43416[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43381 === (6))){
var inst_43345 = (state_43380[(8)]);
var inst_43366 = (inst_43345 > (0));
var state_43380__$1 = state_43380;
if(cljs.core.truth_(inst_43366)){
var statearr_43390_43417 = state_43380__$1;
(statearr_43390_43417[(1)] = (12));

} else {
var statearr_43391_43418 = state_43380__$1;
(statearr_43391_43418[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43381 === (3))){
var inst_43378 = (state_43380[(2)]);
var state_43380__$1 = state_43380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43380__$1,inst_43378);
} else {
if((state_val_43381 === (12))){
var inst_43344 = (state_43380[(7)]);
var inst_43368 = cljs.core.vec(inst_43344);
var state_43380__$1 = state_43380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43380__$1,(15),out,inst_43368);
} else {
if((state_val_43381 === (2))){
var state_43380__$1 = state_43380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43380__$1,(4),ch);
} else {
if((state_val_43381 === (11))){
var inst_43360 = (state_43380[(2)]);
var inst_43361 = (new Array(n));
var inst_43344 = inst_43361;
var inst_43345 = (0);
var state_43380__$1 = (function (){var statearr_43392 = state_43380;
(statearr_43392[(7)] = inst_43344);

(statearr_43392[(8)] = inst_43345);

(statearr_43392[(10)] = inst_43360);

return statearr_43392;
})();
var statearr_43393_43419 = state_43380__$1;
(statearr_43393_43419[(2)] = null);

(statearr_43393_43419[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43381 === (9))){
var inst_43344 = (state_43380[(7)]);
var inst_43358 = cljs.core.vec(inst_43344);
var state_43380__$1 = state_43380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43380__$1,(11),out,inst_43358);
} else {
if((state_val_43381 === (5))){
var inst_43344 = (state_43380[(7)]);
var inst_43345 = (state_43380[(8)]);
var inst_43348 = (state_43380[(9)]);
var inst_43353 = (state_43380[(11)]);
var inst_43352 = (inst_43344[inst_43345] = inst_43348);
var inst_43353__$1 = (inst_43345 + (1));
var inst_43354 = (inst_43353__$1 < n);
var state_43380__$1 = (function (){var statearr_43394 = state_43380;
(statearr_43394[(12)] = inst_43352);

(statearr_43394[(11)] = inst_43353__$1);

return statearr_43394;
})();
if(cljs.core.truth_(inst_43354)){
var statearr_43395_43420 = state_43380__$1;
(statearr_43395_43420[(1)] = (8));

} else {
var statearr_43396_43421 = state_43380__$1;
(statearr_43396_43421[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43381 === (14))){
var inst_43373 = (state_43380[(2)]);
var inst_43374 = cljs.core.async.close_BANG_(out);
var state_43380__$1 = (function (){var statearr_43398 = state_43380;
(statearr_43398[(13)] = inst_43373);

return statearr_43398;
})();
var statearr_43399_43422 = state_43380__$1;
(statearr_43399_43422[(2)] = inst_43374);

(statearr_43399_43422[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43381 === (10))){
var inst_43364 = (state_43380[(2)]);
var state_43380__$1 = state_43380;
var statearr_43400_43423 = state_43380__$1;
(statearr_43400_43423[(2)] = inst_43364);

(statearr_43400_43423[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43381 === (8))){
var inst_43344 = (state_43380[(7)]);
var inst_43353 = (state_43380[(11)]);
var tmp43397 = inst_43344;
var inst_43344__$1 = tmp43397;
var inst_43345 = inst_43353;
var state_43380__$1 = (function (){var statearr_43401 = state_43380;
(statearr_43401[(7)] = inst_43344__$1);

(statearr_43401[(8)] = inst_43345);

return statearr_43401;
})();
var statearr_43402_43424 = state_43380__$1;
(statearr_43402_43424[(2)] = null);

(statearr_43402_43424[(1)] = (2));


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
});})(c__30817__auto___43410,out))
;
return ((function (switch__30737__auto__,c__30817__auto___43410,out){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_43406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43406[(0)] = state_machine__30738__auto__);

(statearr_43406[(1)] = (1));

return statearr_43406;
});
var state_machine__30738__auto____1 = (function (state_43380){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_43380);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e43407){if((e43407 instanceof Object)){
var ex__30741__auto__ = e43407;
var statearr_43408_43425 = state_43380;
(statearr_43408_43425[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43380);

return cljs.core.constant$keyword$21;
} else {
throw e43407;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__43426 = state_43380;
state_43380 = G__43426;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_43380){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_43380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto___43410,out))
})();
var state__30819__auto__ = (function (){var statearr_43409 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_43409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___43410);

return statearr_43409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto___43410,out))
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
var c__30817__auto___43574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30817__auto___43574,out){
return (function (){
var f__30818__auto__ = (function (){var switch__30737__auto__ = ((function (c__30817__auto___43574,out){
return (function (state_43543){
var state_val_43544 = (state_43543[(1)]);
if((state_val_43544 === (7))){
var inst_43539 = (state_43543[(2)]);
var state_43543__$1 = state_43543;
var statearr_43545_43575 = state_43543__$1;
(statearr_43545_43575[(2)] = inst_43539);

(statearr_43545_43575[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43544 === (1))){
var inst_43502 = [];
var inst_43503 = inst_43502;
var inst_43504 = cljs.core.constant$keyword$36;
var state_43543__$1 = (function (){var statearr_43546 = state_43543;
(statearr_43546[(7)] = inst_43504);

(statearr_43546[(8)] = inst_43503);

return statearr_43546;
})();
var statearr_43547_43576 = state_43543__$1;
(statearr_43547_43576[(2)] = null);

(statearr_43547_43576[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43544 === (4))){
var inst_43507 = (state_43543[(9)]);
var inst_43507__$1 = (state_43543[(2)]);
var inst_43508 = (inst_43507__$1 == null);
var inst_43509 = cljs.core.not(inst_43508);
var state_43543__$1 = (function (){var statearr_43548 = state_43543;
(statearr_43548[(9)] = inst_43507__$1);

return statearr_43548;
})();
if(inst_43509){
var statearr_43549_43577 = state_43543__$1;
(statearr_43549_43577[(1)] = (5));

} else {
var statearr_43550_43578 = state_43543__$1;
(statearr_43550_43578[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43544 === (15))){
var inst_43533 = (state_43543[(2)]);
var state_43543__$1 = state_43543;
var statearr_43551_43579 = state_43543__$1;
(statearr_43551_43579[(2)] = inst_43533);

(statearr_43551_43579[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43544 === (13))){
var state_43543__$1 = state_43543;
var statearr_43552_43580 = state_43543__$1;
(statearr_43552_43580[(2)] = null);

(statearr_43552_43580[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43544 === (6))){
var inst_43503 = (state_43543[(8)]);
var inst_43528 = inst_43503.length;
var inst_43529 = (inst_43528 > (0));
var state_43543__$1 = state_43543;
if(cljs.core.truth_(inst_43529)){
var statearr_43553_43581 = state_43543__$1;
(statearr_43553_43581[(1)] = (12));

} else {
var statearr_43554_43582 = state_43543__$1;
(statearr_43554_43582[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43544 === (3))){
var inst_43541 = (state_43543[(2)]);
var state_43543__$1 = state_43543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43543__$1,inst_43541);
} else {
if((state_val_43544 === (12))){
var inst_43503 = (state_43543[(8)]);
var inst_43531 = cljs.core.vec(inst_43503);
var state_43543__$1 = state_43543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43543__$1,(15),out,inst_43531);
} else {
if((state_val_43544 === (2))){
var state_43543__$1 = state_43543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43543__$1,(4),ch);
} else {
if((state_val_43544 === (11))){
var inst_43507 = (state_43543[(9)]);
var inst_43511 = (state_43543[(10)]);
var inst_43521 = (state_43543[(2)]);
var inst_43522 = [];
var inst_43523 = inst_43522.push(inst_43507);
var inst_43503 = inst_43522;
var inst_43504 = inst_43511;
var state_43543__$1 = (function (){var statearr_43555 = state_43543;
(statearr_43555[(11)] = inst_43521);

(statearr_43555[(7)] = inst_43504);

(statearr_43555[(8)] = inst_43503);

(statearr_43555[(12)] = inst_43523);

return statearr_43555;
})();
var statearr_43556_43583 = state_43543__$1;
(statearr_43556_43583[(2)] = null);

(statearr_43556_43583[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43544 === (9))){
var inst_43503 = (state_43543[(8)]);
var inst_43519 = cljs.core.vec(inst_43503);
var state_43543__$1 = state_43543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43543__$1,(11),out,inst_43519);
} else {
if((state_val_43544 === (5))){
var inst_43504 = (state_43543[(7)]);
var inst_43507 = (state_43543[(9)]);
var inst_43511 = (state_43543[(10)]);
var inst_43511__$1 = (function (){var G__43557 = inst_43507;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43557) : f.call(null,G__43557));
})();
var inst_43512 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43511__$1,inst_43504);
var inst_43513 = cljs.core.keyword_identical_QMARK_(inst_43504,cljs.core.constant$keyword$36);
var inst_43514 = (inst_43512) || (inst_43513);
var state_43543__$1 = (function (){var statearr_43558 = state_43543;
(statearr_43558[(10)] = inst_43511__$1);

return statearr_43558;
})();
if(cljs.core.truth_(inst_43514)){
var statearr_43559_43584 = state_43543__$1;
(statearr_43559_43584[(1)] = (8));

} else {
var statearr_43560_43585 = state_43543__$1;
(statearr_43560_43585[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43544 === (14))){
var inst_43536 = (state_43543[(2)]);
var inst_43537 = cljs.core.async.close_BANG_(out);
var state_43543__$1 = (function (){var statearr_43562 = state_43543;
(statearr_43562[(13)] = inst_43536);

return statearr_43562;
})();
var statearr_43563_43586 = state_43543__$1;
(statearr_43563_43586[(2)] = inst_43537);

(statearr_43563_43586[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43544 === (10))){
var inst_43526 = (state_43543[(2)]);
var state_43543__$1 = state_43543;
var statearr_43564_43587 = state_43543__$1;
(statearr_43564_43587[(2)] = inst_43526);

(statearr_43564_43587[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43544 === (8))){
var inst_43507 = (state_43543[(9)]);
var inst_43503 = (state_43543[(8)]);
var inst_43511 = (state_43543[(10)]);
var inst_43516 = inst_43503.push(inst_43507);
var tmp43561 = inst_43503;
var inst_43503__$1 = tmp43561;
var inst_43504 = inst_43511;
var state_43543__$1 = (function (){var statearr_43565 = state_43543;
(statearr_43565[(7)] = inst_43504);

(statearr_43565[(14)] = inst_43516);

(statearr_43565[(8)] = inst_43503__$1);

return statearr_43565;
})();
var statearr_43566_43588 = state_43543__$1;
(statearr_43566_43588[(2)] = null);

(statearr_43566_43588[(1)] = (2));


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
});})(c__30817__auto___43574,out))
;
return ((function (switch__30737__auto__,c__30817__auto___43574,out){
return (function() {
var state_machine__30738__auto__ = null;
var state_machine__30738__auto____0 = (function (){
var statearr_43570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43570[(0)] = state_machine__30738__auto__);

(statearr_43570[(1)] = (1));

return statearr_43570;
});
var state_machine__30738__auto____1 = (function (state_43543){
while(true){
var ret_value__30739__auto__ = (function (){try{while(true){
var result__30740__auto__ = switch__30737__auto__(state_43543);
if(cljs.core.keyword_identical_QMARK_(result__30740__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30740__auto__;
}
break;
}
}catch (e43571){if((e43571 instanceof Object)){
var ex__30741__auto__ = e43571;
var statearr_43572_43589 = state_43543;
(statearr_43572_43589[(5)] = ex__30741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43543);

return cljs.core.constant$keyword$21;
} else {
throw e43571;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30739__auto__,cljs.core.constant$keyword$21)){
var G__43590 = state_43543;
state_43543 = G__43590;
continue;
} else {
return ret_value__30739__auto__;
}
break;
}
});
state_machine__30738__auto__ = function(state_43543){
switch(arguments.length){
case 0:
return state_machine__30738__auto____0.call(this);
case 1:
return state_machine__30738__auto____1.call(this,state_43543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30738__auto____0;
state_machine__30738__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30738__auto____1;
return state_machine__30738__auto__;
})()
;})(switch__30737__auto__,c__30817__auto___43574,out))
})();
var state__30819__auto__ = (function (){var statearr_43573 = (function (){return (f__30818__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30818__auto__.cljs$core$IFn$_invoke$arity$0() : f__30818__auto__.call(null));
})();
(statearr_43573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30817__auto___43574);

return statearr_43573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(c__30817__auto___43574,out))
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
