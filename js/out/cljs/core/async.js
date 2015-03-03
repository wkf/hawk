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
if(typeof cljs.core.async.t43058 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t43058 = (function (f,fn_handler,meta43059){
this.f = f;
this.fn_handler = fn_handler;
this.meta43059 = meta43059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43058.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t43058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t43058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t43058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43060){
var self__ = this;
var _43060__$1 = this;
return self__.meta43059;
});

cljs.core.async.t43058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43060,meta43059__$1){
var self__ = this;
var _43060__$1 = this;
return (new cljs.core.async.t43058(self__.f,self__.fn_handler,meta43059__$1));
});

cljs.core.async.t43058.cljs$lang$type = true;

cljs.core.async.t43058.cljs$lang$ctorStr = "cljs.core.async/t43058";

cljs.core.async.t43058.cljs$lang$ctorPrWriter = (function (this__18264__auto__,writer__18265__auto__,opt__18266__auto__){
return cljs.core._write(writer__18265__auto__,"cljs.core.async/t43058");
});

cljs.core.async.__GT_t43058 = (function __GT_t43058(f__$1,fn_handler__$1,meta43059){
return (new cljs.core.async.t43058(f__$1,fn_handler__$1,meta43059));
});

}

return (new cljs.core.async.t43058(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43062 = buff;
if(G__43062){
var bit__18358__auto__ = null;
if(cljs.core.truth_((function (){var or__17677__auto__ = bit__18358__auto__;
if(cljs.core.truth_(or__17677__auto__)){
return or__17677__auto__;
} else {
return G__43062.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__43062.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__43062);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__43062);
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
var val_43079 = (function (){var G__43076 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43076) : cljs.core.deref.call(null,G__43076));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__43077_43080 = val_43079;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__43077_43080) : fn1.call(null,G__43077_43080));
} else {
cljs.core.async.impl.dispatch.run(((function (val_43079,ret){
return (function (){
var G__43078 = val_43079;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__43078) : fn1.call(null,G__43078));
});})(val_43079,ret))
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
var G__43089 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43089) : cljs.core.deref.call(null,G__43089));
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
var ret = (function (){var G__43090 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43090) : cljs.core.deref.call(null,G__43090));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__43091_43093 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__43091_43093) : fn1.call(null,G__43091_43093));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__43092 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__43092) : fn1.call(null,G__43092));
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
var n__18564__auto___43094 = n;
var x_43095 = (0);
while(true){
if((x_43095 < n__18564__auto___43094)){
(a[x_43095] = (0));

var G__43096 = (x_43095 + (1));
x_43095 = G__43096;
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

var G__43097 = (i + (1));
i = G__43097;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__43105 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__43105) : cljs.core.atom.call(null,G__43105));
})();
if(typeof cljs.core.async.t43106 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t43106 = (function (flag,alt_flag,meta43107){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta43107 = meta43107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43106.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t43106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__43109 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43109) : cljs.core.deref.call(null,G__43109));
});})(flag))
;

cljs.core.async.t43106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__43110_43112 = self__.flag;
var G__43111_43113 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__43110_43112,G__43111_43113) : cljs.core.reset_BANG_.call(null,G__43110_43112,G__43111_43113));

return true;
});})(flag))
;

cljs.core.async.t43106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43108){
var self__ = this;
var _43108__$1 = this;
return self__.meta43107;
});})(flag))
;

cljs.core.async.t43106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43108,meta43107__$1){
var self__ = this;
var _43108__$1 = this;
return (new cljs.core.async.t43106(self__.flag,self__.alt_flag,meta43107__$1));
});})(flag))
;

cljs.core.async.t43106.cljs$lang$type = true;

cljs.core.async.t43106.cljs$lang$ctorStr = "cljs.core.async/t43106";

cljs.core.async.t43106.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18264__auto__,writer__18265__auto__,opt__18266__auto__){
return cljs.core._write(writer__18265__auto__,"cljs.core.async/t43106");
});})(flag))
;

cljs.core.async.__GT_t43106 = ((function (flag){
return (function __GT_t43106(flag__$1,alt_flag__$1,meta43107){
return (new cljs.core.async.t43106(flag__$1,alt_flag__$1,meta43107));
});})(flag))
;

}

return (new cljs.core.async.t43106(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t43117 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t43117 = (function (cb,flag,alt_handler,meta43118){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta43118 = meta43118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43117.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t43117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t43117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t43117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43119){
var self__ = this;
var _43119__$1 = this;
return self__.meta43118;
});

cljs.core.async.t43117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43119,meta43118__$1){
var self__ = this;
var _43119__$1 = this;
return (new cljs.core.async.t43117(self__.cb,self__.flag,self__.alt_handler,meta43118__$1));
});

cljs.core.async.t43117.cljs$lang$type = true;

cljs.core.async.t43117.cljs$lang$ctorStr = "cljs.core.async/t43117";

cljs.core.async.t43117.cljs$lang$ctorPrWriter = (function (this__18264__auto__,writer__18265__auto__,opt__18266__auto__){
return cljs.core._write(writer__18265__auto__,"cljs.core.async/t43117");
});

cljs.core.async.__GT_t43117 = (function __GT_t43117(cb__$1,flag__$1,alt_handler__$1,meta43118){
return (new cljs.core.async.t43117(cb__$1,flag__$1,alt_handler__$1,meta43118));
});

}

return (new cljs.core.async.t43117(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__43127 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__43127) : port.call(null,G__43127));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__43128 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__43128) : port.call(null,G__43128));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43120_SHARP_){
var G__43129 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43120_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43129) : fret.call(null,G__43129));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43121_SHARP_){
var G__43130 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43121_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43130) : fret.call(null,G__43130));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43131 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43131) : cljs.core.deref.call(null,G__43131));
})(),(function (){var or__17677__auto__ = wport;
if(cljs.core.truth_(or__17677__auto__)){
return or__17677__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43132 = (i + (1));
i = G__43132;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17677__auto__ = ret;
if(cljs.core.truth_(or__17677__auto__)){
return or__17677__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$50)){
var temp__4126__auto__ = (function (){var and__17665__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__17665__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__17665__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$50], null));
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
var alts_BANG___delegate = function (ports,p__43133){
var map__43135 = p__43133;
var map__43135__$1 = ((cljs.core.seq_QMARK_(map__43135))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43135):map__43135);
var opts = map__43135__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__43133 = null;
if (arguments.length > 1) {
var G__43136__i = 0, G__43136__a = new Array(arguments.length -  1);
while (G__43136__i < G__43136__a.length) {G__43136__a[G__43136__i] = arguments[G__43136__i + 1]; ++G__43136__i;}
  p__43133 = new cljs.core.IndexedSeq(G__43136__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__43133);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__43137){
var ports = cljs.core.first(arglist__43137);
var p__43133 = cljs.core.rest(arglist__43137);
return alts_BANG___delegate(ports,p__43133);
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
var c__33655__auto___43235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto___43235){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto___43235){
return (function (state_43211){
var state_val_43212 = (state_43211[(1)]);
if((state_val_43212 === (7))){
var inst_43207 = (state_43211[(2)]);
var state_43211__$1 = state_43211;
var statearr_43213_43236 = state_43211__$1;
(statearr_43213_43236[(2)] = inst_43207);

(statearr_43213_43236[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43212 === (1))){
var state_43211__$1 = state_43211;
var statearr_43214_43237 = state_43211__$1;
(statearr_43214_43237[(2)] = null);

(statearr_43214_43237[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43212 === (4))){
var inst_43190 = (state_43211[(7)]);
var inst_43190__$1 = (state_43211[(2)]);
var inst_43191 = (inst_43190__$1 == null);
var state_43211__$1 = (function (){var statearr_43215 = state_43211;
(statearr_43215[(7)] = inst_43190__$1);

return statearr_43215;
})();
if(cljs.core.truth_(inst_43191)){
var statearr_43216_43238 = state_43211__$1;
(statearr_43216_43238[(1)] = (5));

} else {
var statearr_43217_43239 = state_43211__$1;
(statearr_43217_43239[(1)] = (6));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43212 === (13))){
var state_43211__$1 = state_43211;
var statearr_43218_43240 = state_43211__$1;
(statearr_43218_43240[(2)] = null);

(statearr_43218_43240[(1)] = (14));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43212 === (6))){
var inst_43190 = (state_43211[(7)]);
var state_43211__$1 = state_43211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43211__$1,(11),to,inst_43190);
} else {
if((state_val_43212 === (3))){
var inst_43209 = (state_43211[(2)]);
var state_43211__$1 = state_43211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43211__$1,inst_43209);
} else {
if((state_val_43212 === (12))){
var state_43211__$1 = state_43211;
var statearr_43219_43241 = state_43211__$1;
(statearr_43219_43241[(2)] = null);

(statearr_43219_43241[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43212 === (2))){
var state_43211__$1 = state_43211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43211__$1,(4),from);
} else {
if((state_val_43212 === (11))){
var inst_43200 = (state_43211[(2)]);
var state_43211__$1 = state_43211;
if(cljs.core.truth_(inst_43200)){
var statearr_43220_43242 = state_43211__$1;
(statearr_43220_43242[(1)] = (12));

} else {
var statearr_43221_43243 = state_43211__$1;
(statearr_43221_43243[(1)] = (13));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43212 === (9))){
var state_43211__$1 = state_43211;
var statearr_43222_43244 = state_43211__$1;
(statearr_43222_43244[(2)] = null);

(statearr_43222_43244[(1)] = (10));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43212 === (5))){
var state_43211__$1 = state_43211;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43223_43245 = state_43211__$1;
(statearr_43223_43245[(1)] = (8));

} else {
var statearr_43224_43246 = state_43211__$1;
(statearr_43224_43246[(1)] = (9));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43212 === (14))){
var inst_43205 = (state_43211[(2)]);
var state_43211__$1 = state_43211;
var statearr_43225_43247 = state_43211__$1;
(statearr_43225_43247[(2)] = inst_43205);

(statearr_43225_43247[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43212 === (10))){
var inst_43197 = (state_43211[(2)]);
var state_43211__$1 = state_43211;
var statearr_43226_43248 = state_43211__$1;
(statearr_43226_43248[(2)] = inst_43197);

(statearr_43226_43248[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43212 === (8))){
var inst_43194 = cljs.core.async.close_BANG_(to);
var state_43211__$1 = state_43211;
var statearr_43227_43249 = state_43211__$1;
(statearr_43227_43249[(2)] = inst_43194);

(statearr_43227_43249[(1)] = (10));


return cljs.core.constant$keyword$64;
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
});})(c__33655__auto___43235))
;
return ((function (switch__33575__auto__,c__33655__auto___43235){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_43231 = [null,null,null,null,null,null,null,null];
(statearr_43231[(0)] = state_machine__33576__auto__);

(statearr_43231[(1)] = (1));

return statearr_43231;
});
var state_machine__33576__auto____1 = (function (state_43211){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_43211);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e43232){if((e43232 instanceof Object)){
var ex__33579__auto__ = e43232;
var statearr_43233_43250 = state_43211;
(statearr_43233_43250[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43211);

return cljs.core.constant$keyword$64;
} else {
throw e43232;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__43251 = state_43211;
state_43211 = G__43251;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_43211){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_43211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto___43235))
})();
var state__33657__auto__ = (function (){var statearr_43234 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_43234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___43235);

return statearr_43234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto___43235))
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
return (function (p__43437){
var vec__43438 = p__43437;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43438,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43438,(1),null);
var job = vec__43438;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33655__auto___43622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto___43622,res,vec__43438,v,p,job,jobs,results){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto___43622,res,vec__43438,v,p,job,jobs,results){
return (function (state_43443){
var state_val_43444 = (state_43443[(1)]);
if((state_val_43444 === (2))){
var inst_43440 = (state_43443[(2)]);
var inst_43441 = cljs.core.async.close_BANG_(res);
var state_43443__$1 = (function (){var statearr_43445 = state_43443;
(statearr_43445[(7)] = inst_43440);

return statearr_43445;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43443__$1,inst_43441);
} else {
if((state_val_43444 === (1))){
var state_43443__$1 = state_43443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43443__$1,(2),res,v);
} else {
return null;
}
}
});})(c__33655__auto___43622,res,vec__43438,v,p,job,jobs,results))
;
return ((function (switch__33575__auto__,c__33655__auto___43622,res,vec__43438,v,p,job,jobs,results){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_43449 = [null,null,null,null,null,null,null,null];
(statearr_43449[(0)] = state_machine__33576__auto__);

(statearr_43449[(1)] = (1));

return statearr_43449;
});
var state_machine__33576__auto____1 = (function (state_43443){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_43443);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e43450){if((e43450 instanceof Object)){
var ex__33579__auto__ = e43450;
var statearr_43451_43623 = state_43443;
(statearr_43451_43623[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43443);

return cljs.core.constant$keyword$64;
} else {
throw e43450;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__43624 = state_43443;
state_43443 = G__43624;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_43443){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_43443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto___43622,res,vec__43438,v,p,job,jobs,results))
})();
var state__33657__auto__ = (function (){var statearr_43452 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_43452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___43622);

return statearr_43452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto___43622,res,vec__43438,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43453){
var vec__43454 = p__43453;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43454,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43454,(1),null);
var job = vec__43454;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__43455_43625 = v;
var G__43456_43626 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__43455_43625,G__43456_43626) : xf.call(null,G__43455_43625,G__43456_43626));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__18564__auto___43627 = n;
var __43628 = (0);
while(true){
if((__43628 < n__18564__auto___43627)){
var G__43457_43629 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__43457_43629) {
case "async":
var c__33655__auto___43631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43628,c__33655__auto___43631,G__43457_43629,n__18564__auto___43627,jobs,results,process,async){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (__43628,c__33655__auto___43631,G__43457_43629,n__18564__auto___43627,jobs,results,process,async){
return (function (state_43470){
var state_val_43471 = (state_43470[(1)]);
if((state_val_43471 === (7))){
var inst_43466 = (state_43470[(2)]);
var state_43470__$1 = state_43470;
var statearr_43472_43632 = state_43470__$1;
(statearr_43472_43632[(2)] = inst_43466);

(statearr_43472_43632[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43471 === (6))){
var state_43470__$1 = state_43470;
var statearr_43473_43633 = state_43470__$1;
(statearr_43473_43633[(2)] = null);

(statearr_43473_43633[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43471 === (5))){
var state_43470__$1 = state_43470;
var statearr_43474_43634 = state_43470__$1;
(statearr_43474_43634[(2)] = null);

(statearr_43474_43634[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43471 === (4))){
var inst_43460 = (state_43470[(2)]);
var inst_43461 = async(inst_43460);
var state_43470__$1 = state_43470;
if(cljs.core.truth_(inst_43461)){
var statearr_43475_43635 = state_43470__$1;
(statearr_43475_43635[(1)] = (5));

} else {
var statearr_43476_43636 = state_43470__$1;
(statearr_43476_43636[(1)] = (6));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43471 === (3))){
var inst_43468 = (state_43470[(2)]);
var state_43470__$1 = state_43470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43470__$1,inst_43468);
} else {
if((state_val_43471 === (2))){
var state_43470__$1 = state_43470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43470__$1,(4),jobs);
} else {
if((state_val_43471 === (1))){
var state_43470__$1 = state_43470;
var statearr_43477_43637 = state_43470__$1;
(statearr_43477_43637[(2)] = null);

(statearr_43477_43637[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
return null;
}
}
}
}
}
}
}
});})(__43628,c__33655__auto___43631,G__43457_43629,n__18564__auto___43627,jobs,results,process,async))
;
return ((function (__43628,switch__33575__auto__,c__33655__auto___43631,G__43457_43629,n__18564__auto___43627,jobs,results,process,async){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_43481 = [null,null,null,null,null,null,null];
(statearr_43481[(0)] = state_machine__33576__auto__);

(statearr_43481[(1)] = (1));

return statearr_43481;
});
var state_machine__33576__auto____1 = (function (state_43470){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_43470);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e43482){if((e43482 instanceof Object)){
var ex__33579__auto__ = e43482;
var statearr_43483_43638 = state_43470;
(statearr_43483_43638[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43470);

return cljs.core.constant$keyword$64;
} else {
throw e43482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__43639 = state_43470;
state_43470 = G__43639;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_43470){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_43470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(__43628,switch__33575__auto__,c__33655__auto___43631,G__43457_43629,n__18564__auto___43627,jobs,results,process,async))
})();
var state__33657__auto__ = (function (){var statearr_43484 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_43484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___43631);

return statearr_43484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(__43628,c__33655__auto___43631,G__43457_43629,n__18564__auto___43627,jobs,results,process,async))
);


break;
case "compute":
var c__33655__auto___43640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43628,c__33655__auto___43640,G__43457_43629,n__18564__auto___43627,jobs,results,process,async){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (__43628,c__33655__auto___43640,G__43457_43629,n__18564__auto___43627,jobs,results,process,async){
return (function (state_43497){
var state_val_43498 = (state_43497[(1)]);
if((state_val_43498 === (7))){
var inst_43493 = (state_43497[(2)]);
var state_43497__$1 = state_43497;
var statearr_43499_43641 = state_43497__$1;
(statearr_43499_43641[(2)] = inst_43493);

(statearr_43499_43641[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43498 === (6))){
var state_43497__$1 = state_43497;
var statearr_43500_43642 = state_43497__$1;
(statearr_43500_43642[(2)] = null);

(statearr_43500_43642[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43498 === (5))){
var state_43497__$1 = state_43497;
var statearr_43501_43643 = state_43497__$1;
(statearr_43501_43643[(2)] = null);

(statearr_43501_43643[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43498 === (4))){
var inst_43487 = (state_43497[(2)]);
var inst_43488 = process(inst_43487);
var state_43497__$1 = state_43497;
if(cljs.core.truth_(inst_43488)){
var statearr_43502_43644 = state_43497__$1;
(statearr_43502_43644[(1)] = (5));

} else {
var statearr_43503_43645 = state_43497__$1;
(statearr_43503_43645[(1)] = (6));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43498 === (3))){
var inst_43495 = (state_43497[(2)]);
var state_43497__$1 = state_43497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43497__$1,inst_43495);
} else {
if((state_val_43498 === (2))){
var state_43497__$1 = state_43497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43497__$1,(4),jobs);
} else {
if((state_val_43498 === (1))){
var state_43497__$1 = state_43497;
var statearr_43504_43646 = state_43497__$1;
(statearr_43504_43646[(2)] = null);

(statearr_43504_43646[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
return null;
}
}
}
}
}
}
}
});})(__43628,c__33655__auto___43640,G__43457_43629,n__18564__auto___43627,jobs,results,process,async))
;
return ((function (__43628,switch__33575__auto__,c__33655__auto___43640,G__43457_43629,n__18564__auto___43627,jobs,results,process,async){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_43508 = [null,null,null,null,null,null,null];
(statearr_43508[(0)] = state_machine__33576__auto__);

(statearr_43508[(1)] = (1));

return statearr_43508;
});
var state_machine__33576__auto____1 = (function (state_43497){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_43497);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e43509){if((e43509 instanceof Object)){
var ex__33579__auto__ = e43509;
var statearr_43510_43647 = state_43497;
(statearr_43510_43647[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43497);

return cljs.core.constant$keyword$64;
} else {
throw e43509;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__43648 = state_43497;
state_43497 = G__43648;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_43497){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_43497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(__43628,switch__33575__auto__,c__33655__auto___43640,G__43457_43629,n__18564__auto___43627,jobs,results,process,async))
})();
var state__33657__auto__ = (function (){var statearr_43511 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_43511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___43640);

return statearr_43511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(__43628,c__33655__auto___43640,G__43457_43629,n__18564__auto___43627,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__43649 = (__43628 + (1));
__43628 = G__43649;
continue;
} else {
}
break;
}

var c__33655__auto___43650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto___43650,jobs,results,process,async){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto___43650,jobs,results,process,async){
return (function (state_43533){
var state_val_43534 = (state_43533[(1)]);
if((state_val_43534 === (9))){
var inst_43526 = (state_43533[(2)]);
var state_43533__$1 = (function (){var statearr_43535 = state_43533;
(statearr_43535[(7)] = inst_43526);

return statearr_43535;
})();
var statearr_43536_43651 = state_43533__$1;
(statearr_43536_43651[(2)] = null);

(statearr_43536_43651[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43534 === (8))){
var inst_43519 = (state_43533[(8)]);
var inst_43524 = (state_43533[(2)]);
var state_43533__$1 = (function (){var statearr_43537 = state_43533;
(statearr_43537[(9)] = inst_43524);

return statearr_43537;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43533__$1,(9),results,inst_43519);
} else {
if((state_val_43534 === (7))){
var inst_43529 = (state_43533[(2)]);
var state_43533__$1 = state_43533;
var statearr_43538_43652 = state_43533__$1;
(statearr_43538_43652[(2)] = inst_43529);

(statearr_43538_43652[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43534 === (6))){
var inst_43514 = (state_43533[(10)]);
var inst_43519 = (state_43533[(8)]);
var inst_43519__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43520 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43521 = [inst_43514,inst_43519__$1];
var inst_43522 = (new cljs.core.PersistentVector(null,2,(5),inst_43520,inst_43521,null));
var state_43533__$1 = (function (){var statearr_43539 = state_43533;
(statearr_43539[(8)] = inst_43519__$1);

return statearr_43539;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43533__$1,(8),jobs,inst_43522);
} else {
if((state_val_43534 === (5))){
var inst_43517 = cljs.core.async.close_BANG_(jobs);
var state_43533__$1 = state_43533;
var statearr_43540_43653 = state_43533__$1;
(statearr_43540_43653[(2)] = inst_43517);

(statearr_43540_43653[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43534 === (4))){
var inst_43514 = (state_43533[(10)]);
var inst_43514__$1 = (state_43533[(2)]);
var inst_43515 = (inst_43514__$1 == null);
var state_43533__$1 = (function (){var statearr_43541 = state_43533;
(statearr_43541[(10)] = inst_43514__$1);

return statearr_43541;
})();
if(cljs.core.truth_(inst_43515)){
var statearr_43542_43654 = state_43533__$1;
(statearr_43542_43654[(1)] = (5));

} else {
var statearr_43543_43655 = state_43533__$1;
(statearr_43543_43655[(1)] = (6));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43534 === (3))){
var inst_43531 = (state_43533[(2)]);
var state_43533__$1 = state_43533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43533__$1,inst_43531);
} else {
if((state_val_43534 === (2))){
var state_43533__$1 = state_43533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43533__$1,(4),from);
} else {
if((state_val_43534 === (1))){
var state_43533__$1 = state_43533;
var statearr_43544_43656 = state_43533__$1;
(statearr_43544_43656[(2)] = null);

(statearr_43544_43656[(1)] = (2));


return cljs.core.constant$keyword$64;
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
});})(c__33655__auto___43650,jobs,results,process,async))
;
return ((function (switch__33575__auto__,c__33655__auto___43650,jobs,results,process,async){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_43548 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43548[(0)] = state_machine__33576__auto__);

(statearr_43548[(1)] = (1));

return statearr_43548;
});
var state_machine__33576__auto____1 = (function (state_43533){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_43533);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e43549){if((e43549 instanceof Object)){
var ex__33579__auto__ = e43549;
var statearr_43550_43657 = state_43533;
(statearr_43550_43657[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43533);

return cljs.core.constant$keyword$64;
} else {
throw e43549;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__43658 = state_43533;
state_43533 = G__43658;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_43533){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_43533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto___43650,jobs,results,process,async))
})();
var state__33657__auto__ = (function (){var statearr_43551 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_43551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___43650);

return statearr_43551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto___43650,jobs,results,process,async))
);


var c__33655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto__,jobs,results,process,async){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto__,jobs,results,process,async){
return (function (state_43589){
var state_val_43590 = (state_43589[(1)]);
if((state_val_43590 === (7))){
var inst_43585 = (state_43589[(2)]);
var state_43589__$1 = state_43589;
var statearr_43591_43659 = state_43589__$1;
(statearr_43591_43659[(2)] = inst_43585);

(statearr_43591_43659[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43590 === (20))){
var state_43589__$1 = state_43589;
var statearr_43592_43660 = state_43589__$1;
(statearr_43592_43660[(2)] = null);

(statearr_43592_43660[(1)] = (21));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43590 === (1))){
var state_43589__$1 = state_43589;
var statearr_43593_43661 = state_43589__$1;
(statearr_43593_43661[(2)] = null);

(statearr_43593_43661[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43590 === (4))){
var inst_43554 = (state_43589[(7)]);
var inst_43554__$1 = (state_43589[(2)]);
var inst_43555 = (inst_43554__$1 == null);
var state_43589__$1 = (function (){var statearr_43594 = state_43589;
(statearr_43594[(7)] = inst_43554__$1);

return statearr_43594;
})();
if(cljs.core.truth_(inst_43555)){
var statearr_43595_43662 = state_43589__$1;
(statearr_43595_43662[(1)] = (5));

} else {
var statearr_43596_43663 = state_43589__$1;
(statearr_43596_43663[(1)] = (6));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43590 === (15))){
var inst_43567 = (state_43589[(8)]);
var state_43589__$1 = state_43589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43589__$1,(18),to,inst_43567);
} else {
if((state_val_43590 === (21))){
var inst_43580 = (state_43589[(2)]);
var state_43589__$1 = state_43589;
var statearr_43597_43664 = state_43589__$1;
(statearr_43597_43664[(2)] = inst_43580);

(statearr_43597_43664[(1)] = (13));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43590 === (13))){
var inst_43582 = (state_43589[(2)]);
var state_43589__$1 = (function (){var statearr_43598 = state_43589;
(statearr_43598[(9)] = inst_43582);

return statearr_43598;
})();
var statearr_43599_43665 = state_43589__$1;
(statearr_43599_43665[(2)] = null);

(statearr_43599_43665[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43590 === (6))){
var inst_43554 = (state_43589[(7)]);
var state_43589__$1 = state_43589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43589__$1,(11),inst_43554);
} else {
if((state_val_43590 === (17))){
var inst_43575 = (state_43589[(2)]);
var state_43589__$1 = state_43589;
if(cljs.core.truth_(inst_43575)){
var statearr_43600_43666 = state_43589__$1;
(statearr_43600_43666[(1)] = (19));

} else {
var statearr_43601_43667 = state_43589__$1;
(statearr_43601_43667[(1)] = (20));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43590 === (3))){
var inst_43587 = (state_43589[(2)]);
var state_43589__$1 = state_43589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43589__$1,inst_43587);
} else {
if((state_val_43590 === (12))){
var inst_43564 = (state_43589[(10)]);
var state_43589__$1 = state_43589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43589__$1,(14),inst_43564);
} else {
if((state_val_43590 === (2))){
var state_43589__$1 = state_43589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43589__$1,(4),results);
} else {
if((state_val_43590 === (19))){
var state_43589__$1 = state_43589;
var statearr_43602_43668 = state_43589__$1;
(statearr_43602_43668[(2)] = null);

(statearr_43602_43668[(1)] = (12));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43590 === (11))){
var inst_43564 = (state_43589[(2)]);
var state_43589__$1 = (function (){var statearr_43603 = state_43589;
(statearr_43603[(10)] = inst_43564);

return statearr_43603;
})();
var statearr_43604_43669 = state_43589__$1;
(statearr_43604_43669[(2)] = null);

(statearr_43604_43669[(1)] = (12));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43590 === (9))){
var state_43589__$1 = state_43589;
var statearr_43605_43670 = state_43589__$1;
(statearr_43605_43670[(2)] = null);

(statearr_43605_43670[(1)] = (10));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43590 === (5))){
var state_43589__$1 = state_43589;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43606_43671 = state_43589__$1;
(statearr_43606_43671[(1)] = (8));

} else {
var statearr_43607_43672 = state_43589__$1;
(statearr_43607_43672[(1)] = (9));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43590 === (14))){
var inst_43567 = (state_43589[(8)]);
var inst_43569 = (state_43589[(11)]);
var inst_43567__$1 = (state_43589[(2)]);
var inst_43568 = (inst_43567__$1 == null);
var inst_43569__$1 = cljs.core.not(inst_43568);
var state_43589__$1 = (function (){var statearr_43608 = state_43589;
(statearr_43608[(8)] = inst_43567__$1);

(statearr_43608[(11)] = inst_43569__$1);

return statearr_43608;
})();
if(inst_43569__$1){
var statearr_43609_43673 = state_43589__$1;
(statearr_43609_43673[(1)] = (15));

} else {
var statearr_43610_43674 = state_43589__$1;
(statearr_43610_43674[(1)] = (16));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43590 === (16))){
var inst_43569 = (state_43589[(11)]);
var state_43589__$1 = state_43589;
var statearr_43611_43675 = state_43589__$1;
(statearr_43611_43675[(2)] = inst_43569);

(statearr_43611_43675[(1)] = (17));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43590 === (10))){
var inst_43561 = (state_43589[(2)]);
var state_43589__$1 = state_43589;
var statearr_43612_43676 = state_43589__$1;
(statearr_43612_43676[(2)] = inst_43561);

(statearr_43612_43676[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43590 === (18))){
var inst_43572 = (state_43589[(2)]);
var state_43589__$1 = state_43589;
var statearr_43613_43677 = state_43589__$1;
(statearr_43613_43677[(2)] = inst_43572);

(statearr_43613_43677[(1)] = (17));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43590 === (8))){
var inst_43558 = cljs.core.async.close_BANG_(to);
var state_43589__$1 = state_43589;
var statearr_43614_43678 = state_43589__$1;
(statearr_43614_43678[(2)] = inst_43558);

(statearr_43614_43678[(1)] = (10));


return cljs.core.constant$keyword$64;
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
});})(c__33655__auto__,jobs,results,process,async))
;
return ((function (switch__33575__auto__,c__33655__auto__,jobs,results,process,async){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_43618 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43618[(0)] = state_machine__33576__auto__);

(statearr_43618[(1)] = (1));

return statearr_43618;
});
var state_machine__33576__auto____1 = (function (state_43589){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_43589);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e43619){if((e43619 instanceof Object)){
var ex__33579__auto__ = e43619;
var statearr_43620_43679 = state_43589;
(statearr_43620_43679[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43589);

return cljs.core.constant$keyword$64;
} else {
throw e43619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__43680 = state_43589;
state_43589 = G__43680;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_43589){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_43589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto__,jobs,results,process,async))
})();
var state__33657__auto__ = (function (){var statearr_43621 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_43621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto__);

return statearr_43621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto__,jobs,results,process,async))
);

return c__33655__auto__;
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
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$71);
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
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$72);
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
var c__33655__auto___43803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto___43803,tc,fc){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto___43803,tc,fc){
return (function (state_43777){
var state_val_43778 = (state_43777[(1)]);
if((state_val_43778 === (7))){
var inst_43773 = (state_43777[(2)]);
var state_43777__$1 = state_43777;
var statearr_43779_43804 = state_43777__$1;
(statearr_43779_43804[(2)] = inst_43773);

(statearr_43779_43804[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43778 === (1))){
var state_43777__$1 = state_43777;
var statearr_43780_43805 = state_43777__$1;
(statearr_43780_43805[(2)] = null);

(statearr_43780_43805[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43778 === (4))){
var inst_43754 = (state_43777[(7)]);
var inst_43754__$1 = (state_43777[(2)]);
var inst_43755 = (inst_43754__$1 == null);
var state_43777__$1 = (function (){var statearr_43781 = state_43777;
(statearr_43781[(7)] = inst_43754__$1);

return statearr_43781;
})();
if(cljs.core.truth_(inst_43755)){
var statearr_43782_43806 = state_43777__$1;
(statearr_43782_43806[(1)] = (5));

} else {
var statearr_43783_43807 = state_43777__$1;
(statearr_43783_43807[(1)] = (6));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43778 === (13))){
var state_43777__$1 = state_43777;
var statearr_43784_43808 = state_43777__$1;
(statearr_43784_43808[(2)] = null);

(statearr_43784_43808[(1)] = (14));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43778 === (6))){
var inst_43754 = (state_43777[(7)]);
var inst_43760 = (function (){var G__43785 = inst_43754;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__43785) : p.call(null,G__43785));
})();
var state_43777__$1 = state_43777;
if(cljs.core.truth_(inst_43760)){
var statearr_43786_43809 = state_43777__$1;
(statearr_43786_43809[(1)] = (9));

} else {
var statearr_43787_43810 = state_43777__$1;
(statearr_43787_43810[(1)] = (10));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43778 === (3))){
var inst_43775 = (state_43777[(2)]);
var state_43777__$1 = state_43777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43777__$1,inst_43775);
} else {
if((state_val_43778 === (12))){
var state_43777__$1 = state_43777;
var statearr_43788_43811 = state_43777__$1;
(statearr_43788_43811[(2)] = null);

(statearr_43788_43811[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43778 === (2))){
var state_43777__$1 = state_43777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43777__$1,(4),ch);
} else {
if((state_val_43778 === (11))){
var inst_43754 = (state_43777[(7)]);
var inst_43764 = (state_43777[(2)]);
var state_43777__$1 = state_43777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43777__$1,(8),inst_43764,inst_43754);
} else {
if((state_val_43778 === (9))){
var state_43777__$1 = state_43777;
var statearr_43789_43812 = state_43777__$1;
(statearr_43789_43812[(2)] = tc);

(statearr_43789_43812[(1)] = (11));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43778 === (5))){
var inst_43757 = cljs.core.async.close_BANG_(tc);
var inst_43758 = cljs.core.async.close_BANG_(fc);
var state_43777__$1 = (function (){var statearr_43790 = state_43777;
(statearr_43790[(8)] = inst_43757);

return statearr_43790;
})();
var statearr_43791_43813 = state_43777__$1;
(statearr_43791_43813[(2)] = inst_43758);

(statearr_43791_43813[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43778 === (14))){
var inst_43771 = (state_43777[(2)]);
var state_43777__$1 = state_43777;
var statearr_43792_43814 = state_43777__$1;
(statearr_43792_43814[(2)] = inst_43771);

(statearr_43792_43814[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43778 === (10))){
var state_43777__$1 = state_43777;
var statearr_43793_43815 = state_43777__$1;
(statearr_43793_43815[(2)] = fc);

(statearr_43793_43815[(1)] = (11));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43778 === (8))){
var inst_43766 = (state_43777[(2)]);
var state_43777__$1 = state_43777;
if(cljs.core.truth_(inst_43766)){
var statearr_43794_43816 = state_43777__$1;
(statearr_43794_43816[(1)] = (12));

} else {
var statearr_43795_43817 = state_43777__$1;
(statearr_43795_43817[(1)] = (13));

}

return cljs.core.constant$keyword$64;
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
});})(c__33655__auto___43803,tc,fc))
;
return ((function (switch__33575__auto__,c__33655__auto___43803,tc,fc){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_43799 = [null,null,null,null,null,null,null,null,null];
(statearr_43799[(0)] = state_machine__33576__auto__);

(statearr_43799[(1)] = (1));

return statearr_43799;
});
var state_machine__33576__auto____1 = (function (state_43777){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_43777);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e43800){if((e43800 instanceof Object)){
var ex__33579__auto__ = e43800;
var statearr_43801_43818 = state_43777;
(statearr_43801_43818[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43777);

return cljs.core.constant$keyword$64;
} else {
throw e43800;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__43819 = state_43777;
state_43777 = G__43819;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_43777){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_43777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto___43803,tc,fc))
})();
var state__33657__auto__ = (function (){var statearr_43802 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_43802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___43803);

return statearr_43802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto___43803,tc,fc))
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
var c__33655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto__){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto__){
return (function (state_43868){
var state_val_43869 = (state_43868[(1)]);
if((state_val_43869 === (7))){
var inst_43864 = (state_43868[(2)]);
var state_43868__$1 = state_43868;
var statearr_43870_43888 = state_43868__$1;
(statearr_43870_43888[(2)] = inst_43864);

(statearr_43870_43888[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43869 === (6))){
var inst_43854 = (state_43868[(7)]);
var inst_43857 = (state_43868[(8)]);
var inst_43861 = (function (){var G__43871 = inst_43854;
var G__43872 = inst_43857;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__43871,G__43872) : f.call(null,G__43871,G__43872));
})();
var inst_43854__$1 = inst_43861;
var state_43868__$1 = (function (){var statearr_43873 = state_43868;
(statearr_43873[(7)] = inst_43854__$1);

return statearr_43873;
})();
var statearr_43874_43889 = state_43868__$1;
(statearr_43874_43889[(2)] = null);

(statearr_43874_43889[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43869 === (5))){
var inst_43854 = (state_43868[(7)]);
var state_43868__$1 = state_43868;
var statearr_43875_43890 = state_43868__$1;
(statearr_43875_43890[(2)] = inst_43854);

(statearr_43875_43890[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43869 === (4))){
var inst_43857 = (state_43868[(8)]);
var inst_43857__$1 = (state_43868[(2)]);
var inst_43858 = (inst_43857__$1 == null);
var state_43868__$1 = (function (){var statearr_43876 = state_43868;
(statearr_43876[(8)] = inst_43857__$1);

return statearr_43876;
})();
if(cljs.core.truth_(inst_43858)){
var statearr_43877_43891 = state_43868__$1;
(statearr_43877_43891[(1)] = (5));

} else {
var statearr_43878_43892 = state_43868__$1;
(statearr_43878_43892[(1)] = (6));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43869 === (3))){
var inst_43866 = (state_43868[(2)]);
var state_43868__$1 = state_43868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43868__$1,inst_43866);
} else {
if((state_val_43869 === (2))){
var state_43868__$1 = state_43868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43868__$1,(4),ch);
} else {
if((state_val_43869 === (1))){
var inst_43854 = init;
var state_43868__$1 = (function (){var statearr_43879 = state_43868;
(statearr_43879[(7)] = inst_43854);

return statearr_43879;
})();
var statearr_43880_43893 = state_43868__$1;
(statearr_43880_43893[(2)] = null);

(statearr_43880_43893[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
return null;
}
}
}
}
}
}
}
});})(c__33655__auto__))
;
return ((function (switch__33575__auto__,c__33655__auto__){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_43884 = [null,null,null,null,null,null,null,null,null];
(statearr_43884[(0)] = state_machine__33576__auto__);

(statearr_43884[(1)] = (1));

return statearr_43884;
});
var state_machine__33576__auto____1 = (function (state_43868){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_43868);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e43885){if((e43885 instanceof Object)){
var ex__33579__auto__ = e43885;
var statearr_43886_43894 = state_43868;
(statearr_43886_43894[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43868);

return cljs.core.constant$keyword$64;
} else {
throw e43885;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__43895 = state_43868;
state_43868 = G__43895;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_43868){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_43868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto__))
})();
var state__33657__auto__ = (function (){var statearr_43887 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_43887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto__);

return statearr_43887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto__))
);

return c__33655__auto__;
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
var c__33655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto__){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto__){
return (function (state_43972){
var state_val_43973 = (state_43972[(1)]);
if((state_val_43973 === (7))){
var inst_43954 = (state_43972[(2)]);
var state_43972__$1 = state_43972;
var statearr_43974_43997 = state_43972__$1;
(statearr_43974_43997[(2)] = inst_43954);

(statearr_43974_43997[(1)] = (6));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43973 === (1))){
var inst_43948 = cljs.core.seq(coll);
var inst_43949 = inst_43948;
var state_43972__$1 = (function (){var statearr_43975 = state_43972;
(statearr_43975[(7)] = inst_43949);

return statearr_43975;
})();
var statearr_43976_43998 = state_43972__$1;
(statearr_43976_43998[(2)] = null);

(statearr_43976_43998[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43973 === (4))){
var inst_43949 = (state_43972[(7)]);
var inst_43952 = cljs.core.first(inst_43949);
var state_43972__$1 = state_43972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43972__$1,(7),ch,inst_43952);
} else {
if((state_val_43973 === (13))){
var inst_43966 = (state_43972[(2)]);
var state_43972__$1 = state_43972;
var statearr_43977_43999 = state_43972__$1;
(statearr_43977_43999[(2)] = inst_43966);

(statearr_43977_43999[(1)] = (10));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43973 === (6))){
var inst_43957 = (state_43972[(2)]);
var state_43972__$1 = state_43972;
if(cljs.core.truth_(inst_43957)){
var statearr_43978_44000 = state_43972__$1;
(statearr_43978_44000[(1)] = (8));

} else {
var statearr_43979_44001 = state_43972__$1;
(statearr_43979_44001[(1)] = (9));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43973 === (3))){
var inst_43970 = (state_43972[(2)]);
var state_43972__$1 = state_43972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43972__$1,inst_43970);
} else {
if((state_val_43973 === (12))){
var state_43972__$1 = state_43972;
var statearr_43980_44002 = state_43972__$1;
(statearr_43980_44002[(2)] = null);

(statearr_43980_44002[(1)] = (13));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43973 === (2))){
var inst_43949 = (state_43972[(7)]);
var state_43972__$1 = state_43972;
if(cljs.core.truth_(inst_43949)){
var statearr_43981_44003 = state_43972__$1;
(statearr_43981_44003[(1)] = (4));

} else {
var statearr_43982_44004 = state_43972__$1;
(statearr_43982_44004[(1)] = (5));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43973 === (11))){
var inst_43963 = cljs.core.async.close_BANG_(ch);
var state_43972__$1 = state_43972;
var statearr_43983_44005 = state_43972__$1;
(statearr_43983_44005[(2)] = inst_43963);

(statearr_43983_44005[(1)] = (13));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43973 === (9))){
var state_43972__$1 = state_43972;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43984_44006 = state_43972__$1;
(statearr_43984_44006[(1)] = (11));

} else {
var statearr_43985_44007 = state_43972__$1;
(statearr_43985_44007[(1)] = (12));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_43973 === (5))){
var inst_43949 = (state_43972[(7)]);
var state_43972__$1 = state_43972;
var statearr_43986_44008 = state_43972__$1;
(statearr_43986_44008[(2)] = inst_43949);

(statearr_43986_44008[(1)] = (6));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43973 === (10))){
var inst_43968 = (state_43972[(2)]);
var state_43972__$1 = state_43972;
var statearr_43987_44009 = state_43972__$1;
(statearr_43987_44009[(2)] = inst_43968);

(statearr_43987_44009[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_43973 === (8))){
var inst_43949 = (state_43972[(7)]);
var inst_43959 = cljs.core.next(inst_43949);
var inst_43949__$1 = inst_43959;
var state_43972__$1 = (function (){var statearr_43988 = state_43972;
(statearr_43988[(7)] = inst_43949__$1);

return statearr_43988;
})();
var statearr_43989_44010 = state_43972__$1;
(statearr_43989_44010[(2)] = null);

(statearr_43989_44010[(1)] = (2));


return cljs.core.constant$keyword$64;
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
});})(c__33655__auto__))
;
return ((function (switch__33575__auto__,c__33655__auto__){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_43993 = [null,null,null,null,null,null,null,null];
(statearr_43993[(0)] = state_machine__33576__auto__);

(statearr_43993[(1)] = (1));

return statearr_43993;
});
var state_machine__33576__auto____1 = (function (state_43972){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_43972);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e43994){if((e43994 instanceof Object)){
var ex__33579__auto__ = e43994;
var statearr_43995_44011 = state_43972;
(statearr_43995_44011[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43972);

return cljs.core.constant$keyword$64;
} else {
throw e43994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__44012 = state_43972;
state_43972 = G__44012;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_43972){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_43972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto__))
})();
var state__33657__auto__ = (function (){var statearr_43996 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_43996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto__);

return statearr_43996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto__))
);

return c__33655__auto__;
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

cljs.core.async.Mux = (function (){var obj44014 = {};
return obj44014;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__17665__auto__ = _;
if(and__17665__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__17665__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18321__auto__ = (((_ == null))?null:_);
return (function (){var or__17677__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__44018 = x__18321__auto__;
return goog.typeOf(G__44018);
})()]);
if(or__17677__auto__){
return or__17677__auto__;
} else {
var or__17677__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__17677__auto____$1){
return or__17677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj44020 = {};
return obj44020;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__17665__auto__ = m;
if(and__17665__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__17665__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18321__auto__ = (((m == null))?null:m);
return (function (){var or__17677__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__44024 = x__18321__auto__;
return goog.typeOf(G__44024);
})()]);
if(or__17677__auto__){
return or__17677__auto__;
} else {
var or__17677__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__17677__auto____$1){
return or__17677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__17665__auto__ = m;
if(and__17665__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__17665__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18321__auto__ = (((m == null))?null:m);
return (function (){var or__17677__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__44028 = x__18321__auto__;
return goog.typeOf(G__44028);
})()]);
if(or__17677__auto__){
return or__17677__auto__;
} else {
var or__17677__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__17677__auto____$1){
return or__17677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__17665__auto__ = m;
if(and__17665__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__17665__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18321__auto__ = (((m == null))?null:m);
return (function (){var or__17677__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__44032 = x__18321__auto__;
return goog.typeOf(G__44032);
})()]);
if(or__17677__auto__){
return or__17677__auto__;
} else {
var or__17677__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__17677__auto____$1){
return or__17677__auto____$1;
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
var cs = (function (){var G__44262 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44262) : cljs.core.atom.call(null,G__44262));
})();
var m = (function (){
if(typeof cljs.core.async.t44263 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t44263 = (function (cs,ch,mult,meta44264){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta44264 = meta44264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44263.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t44263.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t44263.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t44263.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__44266_44491 = self__.cs;
var G__44267_44492 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44266_44491,G__44267_44492) : cljs.core.reset_BANG_.call(null,G__44266_44491,G__44267_44492));

return null;
});})(cs))
;

cljs.core.async.t44263.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t44263.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t44263.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44265){
var self__ = this;
var _44265__$1 = this;
return self__.meta44264;
});})(cs))
;

cljs.core.async.t44263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44265,meta44264__$1){
var self__ = this;
var _44265__$1 = this;
return (new cljs.core.async.t44263(self__.cs,self__.ch,self__.mult,meta44264__$1));
});})(cs))
;

cljs.core.async.t44263.cljs$lang$type = true;

cljs.core.async.t44263.cljs$lang$ctorStr = "cljs.core.async/t44263";

cljs.core.async.t44263.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18264__auto__,writer__18265__auto__,opt__18266__auto__){
return cljs.core._write(writer__18265__auto__,"cljs.core.async/t44263");
});})(cs))
;

cljs.core.async.__GT_t44263 = ((function (cs){
return (function __GT_t44263(cs__$1,ch__$1,mult__$1,meta44264){
return (new cljs.core.async.t44263(cs__$1,ch__$1,mult__$1,meta44264));
});})(cs))
;

}

return (new cljs.core.async.t44263(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__44268 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44268) : cljs.core.atom.call(null,G__44268));
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
var c__33655__auto___44493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto___44493,cs,m,dchan,dctr,done){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto___44493,cs,m,dchan,dctr,done){
return (function (state_44399){
var state_val_44400 = (state_44399[(1)]);
if((state_val_44400 === (7))){
var inst_44395 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
var statearr_44401_44494 = state_44399__$1;
(statearr_44401_44494[(2)] = inst_44395);

(statearr_44401_44494[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (20))){
var inst_44300 = (state_44399[(7)]);
var inst_44310 = cljs.core.first(inst_44300);
var inst_44311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44310,(0),null);
var inst_44312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44310,(1),null);
var state_44399__$1 = (function (){var statearr_44402 = state_44399;
(statearr_44402[(8)] = inst_44311);

return statearr_44402;
})();
if(cljs.core.truth_(inst_44312)){
var statearr_44403_44495 = state_44399__$1;
(statearr_44403_44495[(1)] = (22));

} else {
var statearr_44404_44496 = state_44399__$1;
(statearr_44404_44496[(1)] = (23));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (27))){
var inst_44271 = (state_44399[(9)]);
var inst_44342 = (state_44399[(10)]);
var inst_44340 = (state_44399[(11)]);
var inst_44347 = (state_44399[(12)]);
var inst_44347__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44340,inst_44342);
var inst_44348 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44347__$1,inst_44271,done);
var state_44399__$1 = (function (){var statearr_44405 = state_44399;
(statearr_44405[(12)] = inst_44347__$1);

return statearr_44405;
})();
if(cljs.core.truth_(inst_44348)){
var statearr_44406_44497 = state_44399__$1;
(statearr_44406_44497[(1)] = (30));

} else {
var statearr_44407_44498 = state_44399__$1;
(statearr_44407_44498[(1)] = (31));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (1))){
var state_44399__$1 = state_44399;
var statearr_44408_44499 = state_44399__$1;
(statearr_44408_44499[(2)] = null);

(statearr_44408_44499[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (24))){
var inst_44300 = (state_44399[(7)]);
var inst_44317 = (state_44399[(2)]);
var inst_44318 = cljs.core.next(inst_44300);
var inst_44280 = inst_44318;
var inst_44281 = null;
var inst_44282 = (0);
var inst_44283 = (0);
var state_44399__$1 = (function (){var statearr_44409 = state_44399;
(statearr_44409[(13)] = inst_44281);

(statearr_44409[(14)] = inst_44280);

(statearr_44409[(15)] = inst_44282);

(statearr_44409[(16)] = inst_44317);

(statearr_44409[(17)] = inst_44283);

return statearr_44409;
})();
var statearr_44410_44500 = state_44399__$1;
(statearr_44410_44500[(2)] = null);

(statearr_44410_44500[(1)] = (8));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (39))){
var state_44399__$1 = state_44399;
var statearr_44414_44501 = state_44399__$1;
(statearr_44414_44501[(2)] = null);

(statearr_44414_44501[(1)] = (41));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (4))){
var inst_44271 = (state_44399[(9)]);
var inst_44271__$1 = (state_44399[(2)]);
var inst_44272 = (inst_44271__$1 == null);
var state_44399__$1 = (function (){var statearr_44415 = state_44399;
(statearr_44415[(9)] = inst_44271__$1);

return statearr_44415;
})();
if(cljs.core.truth_(inst_44272)){
var statearr_44416_44502 = state_44399__$1;
(statearr_44416_44502[(1)] = (5));

} else {
var statearr_44417_44503 = state_44399__$1;
(statearr_44417_44503[(1)] = (6));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (15))){
var inst_44281 = (state_44399[(13)]);
var inst_44280 = (state_44399[(14)]);
var inst_44282 = (state_44399[(15)]);
var inst_44283 = (state_44399[(17)]);
var inst_44296 = (state_44399[(2)]);
var inst_44297 = (inst_44283 + (1));
var tmp44411 = inst_44281;
var tmp44412 = inst_44280;
var tmp44413 = inst_44282;
var inst_44280__$1 = tmp44412;
var inst_44281__$1 = tmp44411;
var inst_44282__$1 = tmp44413;
var inst_44283__$1 = inst_44297;
var state_44399__$1 = (function (){var statearr_44418 = state_44399;
(statearr_44418[(13)] = inst_44281__$1);

(statearr_44418[(14)] = inst_44280__$1);

(statearr_44418[(18)] = inst_44296);

(statearr_44418[(15)] = inst_44282__$1);

(statearr_44418[(17)] = inst_44283__$1);

return statearr_44418;
})();
var statearr_44419_44504 = state_44399__$1;
(statearr_44419_44504[(2)] = null);

(statearr_44419_44504[(1)] = (8));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (21))){
var inst_44321 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
var statearr_44423_44505 = state_44399__$1;
(statearr_44423_44505[(2)] = inst_44321);

(statearr_44423_44505[(1)] = (18));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (31))){
var inst_44347 = (state_44399[(12)]);
var inst_44351 = done(null);
var inst_44352 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44347);
var state_44399__$1 = (function (){var statearr_44424 = state_44399;
(statearr_44424[(19)] = inst_44351);

return statearr_44424;
})();
var statearr_44425_44506 = state_44399__$1;
(statearr_44425_44506[(2)] = inst_44352);

(statearr_44425_44506[(1)] = (32));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (32))){
var inst_44341 = (state_44399[(20)]);
var inst_44342 = (state_44399[(10)]);
var inst_44340 = (state_44399[(11)]);
var inst_44339 = (state_44399[(21)]);
var inst_44354 = (state_44399[(2)]);
var inst_44355 = (inst_44342 + (1));
var tmp44420 = inst_44341;
var tmp44421 = inst_44340;
var tmp44422 = inst_44339;
var inst_44339__$1 = tmp44422;
var inst_44340__$1 = tmp44421;
var inst_44341__$1 = tmp44420;
var inst_44342__$1 = inst_44355;
var state_44399__$1 = (function (){var statearr_44426 = state_44399;
(statearr_44426[(20)] = inst_44341__$1);

(statearr_44426[(22)] = inst_44354);

(statearr_44426[(10)] = inst_44342__$1);

(statearr_44426[(11)] = inst_44340__$1);

(statearr_44426[(21)] = inst_44339__$1);

return statearr_44426;
})();
var statearr_44427_44507 = state_44399__$1;
(statearr_44427_44507[(2)] = null);

(statearr_44427_44507[(1)] = (25));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (40))){
var inst_44367 = (state_44399[(23)]);
var inst_44371 = done(null);
var inst_44372 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44367);
var state_44399__$1 = (function (){var statearr_44428 = state_44399;
(statearr_44428[(24)] = inst_44371);

return statearr_44428;
})();
var statearr_44429_44508 = state_44399__$1;
(statearr_44429_44508[(2)] = inst_44372);

(statearr_44429_44508[(1)] = (41));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (33))){
var inst_44358 = (state_44399[(25)]);
var inst_44360 = cljs.core.chunked_seq_QMARK_(inst_44358);
var state_44399__$1 = state_44399;
if(inst_44360){
var statearr_44430_44509 = state_44399__$1;
(statearr_44430_44509[(1)] = (36));

} else {
var statearr_44431_44510 = state_44399__$1;
(statearr_44431_44510[(1)] = (37));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (13))){
var inst_44290 = (state_44399[(26)]);
var inst_44293 = cljs.core.async.close_BANG_(inst_44290);
var state_44399__$1 = state_44399;
var statearr_44432_44511 = state_44399__$1;
(statearr_44432_44511[(2)] = inst_44293);

(statearr_44432_44511[(1)] = (15));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (22))){
var inst_44311 = (state_44399[(8)]);
var inst_44314 = cljs.core.async.close_BANG_(inst_44311);
var state_44399__$1 = state_44399;
var statearr_44433_44512 = state_44399__$1;
(statearr_44433_44512[(2)] = inst_44314);

(statearr_44433_44512[(1)] = (24));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (36))){
var inst_44358 = (state_44399[(25)]);
var inst_44362 = cljs.core.chunk_first(inst_44358);
var inst_44363 = cljs.core.chunk_rest(inst_44358);
var inst_44364 = cljs.core.count(inst_44362);
var inst_44339 = inst_44363;
var inst_44340 = inst_44362;
var inst_44341 = inst_44364;
var inst_44342 = (0);
var state_44399__$1 = (function (){var statearr_44434 = state_44399;
(statearr_44434[(20)] = inst_44341);

(statearr_44434[(10)] = inst_44342);

(statearr_44434[(11)] = inst_44340);

(statearr_44434[(21)] = inst_44339);

return statearr_44434;
})();
var statearr_44435_44513 = state_44399__$1;
(statearr_44435_44513[(2)] = null);

(statearr_44435_44513[(1)] = (25));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (41))){
var inst_44358 = (state_44399[(25)]);
var inst_44374 = (state_44399[(2)]);
var inst_44375 = cljs.core.next(inst_44358);
var inst_44339 = inst_44375;
var inst_44340 = null;
var inst_44341 = (0);
var inst_44342 = (0);
var state_44399__$1 = (function (){var statearr_44436 = state_44399;
(statearr_44436[(20)] = inst_44341);

(statearr_44436[(10)] = inst_44342);

(statearr_44436[(11)] = inst_44340);

(statearr_44436[(27)] = inst_44374);

(statearr_44436[(21)] = inst_44339);

return statearr_44436;
})();
var statearr_44437_44514 = state_44399__$1;
(statearr_44437_44514[(2)] = null);

(statearr_44437_44514[(1)] = (25));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (43))){
var state_44399__$1 = state_44399;
var statearr_44438_44515 = state_44399__$1;
(statearr_44438_44515[(2)] = null);

(statearr_44438_44515[(1)] = (44));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (29))){
var inst_44383 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
var statearr_44439_44516 = state_44399__$1;
(statearr_44439_44516[(2)] = inst_44383);

(statearr_44439_44516[(1)] = (26));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (44))){
var inst_44392 = (state_44399[(2)]);
var state_44399__$1 = (function (){var statearr_44440 = state_44399;
(statearr_44440[(28)] = inst_44392);

return statearr_44440;
})();
var statearr_44441_44517 = state_44399__$1;
(statearr_44441_44517[(2)] = null);

(statearr_44441_44517[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (6))){
var inst_44331 = (state_44399[(29)]);
var inst_44330 = (function (){var G__44442 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44442) : cljs.core.deref.call(null,G__44442));
})();
var inst_44331__$1 = cljs.core.keys(inst_44330);
var inst_44332 = cljs.core.count(inst_44331__$1);
var inst_44333 = (function (){var G__44443 = dctr;
var G__44444 = inst_44332;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44443,G__44444) : cljs.core.reset_BANG_.call(null,G__44443,G__44444));
})();
var inst_44338 = cljs.core.seq(inst_44331__$1);
var inst_44339 = inst_44338;
var inst_44340 = null;
var inst_44341 = (0);
var inst_44342 = (0);
var state_44399__$1 = (function (){var statearr_44445 = state_44399;
(statearr_44445[(20)] = inst_44341);

(statearr_44445[(10)] = inst_44342);

(statearr_44445[(11)] = inst_44340);

(statearr_44445[(29)] = inst_44331__$1);

(statearr_44445[(30)] = inst_44333);

(statearr_44445[(21)] = inst_44339);

return statearr_44445;
})();
var statearr_44446_44518 = state_44399__$1;
(statearr_44446_44518[(2)] = null);

(statearr_44446_44518[(1)] = (25));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (28))){
var inst_44358 = (state_44399[(25)]);
var inst_44339 = (state_44399[(21)]);
var inst_44358__$1 = cljs.core.seq(inst_44339);
var state_44399__$1 = (function (){var statearr_44447 = state_44399;
(statearr_44447[(25)] = inst_44358__$1);

return statearr_44447;
})();
if(inst_44358__$1){
var statearr_44448_44519 = state_44399__$1;
(statearr_44448_44519[(1)] = (33));

} else {
var statearr_44449_44520 = state_44399__$1;
(statearr_44449_44520[(1)] = (34));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (25))){
var inst_44341 = (state_44399[(20)]);
var inst_44342 = (state_44399[(10)]);
var inst_44344 = (inst_44342 < inst_44341);
var inst_44345 = inst_44344;
var state_44399__$1 = state_44399;
if(cljs.core.truth_(inst_44345)){
var statearr_44450_44521 = state_44399__$1;
(statearr_44450_44521[(1)] = (27));

} else {
var statearr_44451_44522 = state_44399__$1;
(statearr_44451_44522[(1)] = (28));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (34))){
var state_44399__$1 = state_44399;
var statearr_44452_44523 = state_44399__$1;
(statearr_44452_44523[(2)] = null);

(statearr_44452_44523[(1)] = (35));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (17))){
var state_44399__$1 = state_44399;
var statearr_44453_44524 = state_44399__$1;
(statearr_44453_44524[(2)] = null);

(statearr_44453_44524[(1)] = (18));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (3))){
var inst_44397 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44399__$1,inst_44397);
} else {
if((state_val_44400 === (12))){
var inst_44326 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
var statearr_44454_44525 = state_44399__$1;
(statearr_44454_44525[(2)] = inst_44326);

(statearr_44454_44525[(1)] = (9));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (2))){
var state_44399__$1 = state_44399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44399__$1,(4),ch);
} else {
if((state_val_44400 === (23))){
var state_44399__$1 = state_44399;
var statearr_44455_44526 = state_44399__$1;
(statearr_44455_44526[(2)] = null);

(statearr_44455_44526[(1)] = (24));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (35))){
var inst_44381 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
var statearr_44456_44527 = state_44399__$1;
(statearr_44456_44527[(2)] = inst_44381);

(statearr_44456_44527[(1)] = (29));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (19))){
var inst_44300 = (state_44399[(7)]);
var inst_44304 = cljs.core.chunk_first(inst_44300);
var inst_44305 = cljs.core.chunk_rest(inst_44300);
var inst_44306 = cljs.core.count(inst_44304);
var inst_44280 = inst_44305;
var inst_44281 = inst_44304;
var inst_44282 = inst_44306;
var inst_44283 = (0);
var state_44399__$1 = (function (){var statearr_44457 = state_44399;
(statearr_44457[(13)] = inst_44281);

(statearr_44457[(14)] = inst_44280);

(statearr_44457[(15)] = inst_44282);

(statearr_44457[(17)] = inst_44283);

return statearr_44457;
})();
var statearr_44458_44528 = state_44399__$1;
(statearr_44458_44528[(2)] = null);

(statearr_44458_44528[(1)] = (8));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (11))){
var inst_44300 = (state_44399[(7)]);
var inst_44280 = (state_44399[(14)]);
var inst_44300__$1 = cljs.core.seq(inst_44280);
var state_44399__$1 = (function (){var statearr_44459 = state_44399;
(statearr_44459[(7)] = inst_44300__$1);

return statearr_44459;
})();
if(inst_44300__$1){
var statearr_44460_44529 = state_44399__$1;
(statearr_44460_44529[(1)] = (16));

} else {
var statearr_44461_44530 = state_44399__$1;
(statearr_44461_44530[(1)] = (17));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (9))){
var inst_44328 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
var statearr_44462_44531 = state_44399__$1;
(statearr_44462_44531[(2)] = inst_44328);

(statearr_44462_44531[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (5))){
var inst_44278 = (function (){var G__44463 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44463) : cljs.core.deref.call(null,G__44463));
})();
var inst_44279 = cljs.core.seq(inst_44278);
var inst_44280 = inst_44279;
var inst_44281 = null;
var inst_44282 = (0);
var inst_44283 = (0);
var state_44399__$1 = (function (){var statearr_44464 = state_44399;
(statearr_44464[(13)] = inst_44281);

(statearr_44464[(14)] = inst_44280);

(statearr_44464[(15)] = inst_44282);

(statearr_44464[(17)] = inst_44283);

return statearr_44464;
})();
var statearr_44465_44532 = state_44399__$1;
(statearr_44465_44532[(2)] = null);

(statearr_44465_44532[(1)] = (8));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (14))){
var state_44399__$1 = state_44399;
var statearr_44466_44533 = state_44399__$1;
(statearr_44466_44533[(2)] = null);

(statearr_44466_44533[(1)] = (15));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (45))){
var inst_44389 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
var statearr_44467_44534 = state_44399__$1;
(statearr_44467_44534[(2)] = inst_44389);

(statearr_44467_44534[(1)] = (44));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (26))){
var inst_44331 = (state_44399[(29)]);
var inst_44385 = (state_44399[(2)]);
var inst_44386 = cljs.core.seq(inst_44331);
var state_44399__$1 = (function (){var statearr_44468 = state_44399;
(statearr_44468[(31)] = inst_44385);

return statearr_44468;
})();
if(inst_44386){
var statearr_44469_44535 = state_44399__$1;
(statearr_44469_44535[(1)] = (42));

} else {
var statearr_44470_44536 = state_44399__$1;
(statearr_44470_44536[(1)] = (43));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (16))){
var inst_44300 = (state_44399[(7)]);
var inst_44302 = cljs.core.chunked_seq_QMARK_(inst_44300);
var state_44399__$1 = state_44399;
if(inst_44302){
var statearr_44471_44537 = state_44399__$1;
(statearr_44471_44537[(1)] = (19));

} else {
var statearr_44472_44538 = state_44399__$1;
(statearr_44472_44538[(1)] = (20));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (38))){
var inst_44378 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
var statearr_44473_44539 = state_44399__$1;
(statearr_44473_44539[(2)] = inst_44378);

(statearr_44473_44539[(1)] = (35));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (30))){
var state_44399__$1 = state_44399;
var statearr_44474_44540 = state_44399__$1;
(statearr_44474_44540[(2)] = null);

(statearr_44474_44540[(1)] = (32));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (10))){
var inst_44281 = (state_44399[(13)]);
var inst_44283 = (state_44399[(17)]);
var inst_44289 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44281,inst_44283);
var inst_44290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44289,(0),null);
var inst_44291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44289,(1),null);
var state_44399__$1 = (function (){var statearr_44475 = state_44399;
(statearr_44475[(26)] = inst_44290);

return statearr_44475;
})();
if(cljs.core.truth_(inst_44291)){
var statearr_44476_44541 = state_44399__$1;
(statearr_44476_44541[(1)] = (13));

} else {
var statearr_44477_44542 = state_44399__$1;
(statearr_44477_44542[(1)] = (14));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (18))){
var inst_44324 = (state_44399[(2)]);
var state_44399__$1 = state_44399;
var statearr_44478_44543 = state_44399__$1;
(statearr_44478_44543[(2)] = inst_44324);

(statearr_44478_44543[(1)] = (12));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (42))){
var state_44399__$1 = state_44399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44399__$1,(45),dchan);
} else {
if((state_val_44400 === (37))){
var inst_44271 = (state_44399[(9)]);
var inst_44358 = (state_44399[(25)]);
var inst_44367 = (state_44399[(23)]);
var inst_44367__$1 = cljs.core.first(inst_44358);
var inst_44368 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44367__$1,inst_44271,done);
var state_44399__$1 = (function (){var statearr_44479 = state_44399;
(statearr_44479[(23)] = inst_44367__$1);

return statearr_44479;
})();
if(cljs.core.truth_(inst_44368)){
var statearr_44480_44544 = state_44399__$1;
(statearr_44480_44544[(1)] = (39));

} else {
var statearr_44481_44545 = state_44399__$1;
(statearr_44481_44545[(1)] = (40));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44400 === (8))){
var inst_44282 = (state_44399[(15)]);
var inst_44283 = (state_44399[(17)]);
var inst_44285 = (inst_44283 < inst_44282);
var inst_44286 = inst_44285;
var state_44399__$1 = state_44399;
if(cljs.core.truth_(inst_44286)){
var statearr_44482_44546 = state_44399__$1;
(statearr_44482_44546[(1)] = (10));

} else {
var statearr_44483_44547 = state_44399__$1;
(statearr_44483_44547[(1)] = (11));

}

return cljs.core.constant$keyword$64;
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
});})(c__33655__auto___44493,cs,m,dchan,dctr,done))
;
return ((function (switch__33575__auto__,c__33655__auto___44493,cs,m,dchan,dctr,done){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_44487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44487[(0)] = state_machine__33576__auto__);

(statearr_44487[(1)] = (1));

return statearr_44487;
});
var state_machine__33576__auto____1 = (function (state_44399){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_44399);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e44488){if((e44488 instanceof Object)){
var ex__33579__auto__ = e44488;
var statearr_44489_44548 = state_44399;
(statearr_44489_44548[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44399);

return cljs.core.constant$keyword$64;
} else {
throw e44488;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__44549 = state_44399;
state_44399 = G__44549;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_44399){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_44399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto___44493,cs,m,dchan,dctr,done))
})();
var state__33657__auto__ = (function (){var statearr_44490 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_44490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___44493);

return statearr_44490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto___44493,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj44554 = {};
return obj44554;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__17665__auto__ = m;
if(and__17665__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__17665__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18321__auto__ = (((m == null))?null:m);
return (function (){var or__17677__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__44558 = x__18321__auto__;
return goog.typeOf(G__44558);
})()]);
if(or__17677__auto__){
return or__17677__auto__;
} else {
var or__17677__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__17677__auto____$1){
return or__17677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__17665__auto__ = m;
if(and__17665__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__17665__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18321__auto__ = (((m == null))?null:m);
return (function (){var or__17677__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__44562 = x__18321__auto__;
return goog.typeOf(G__44562);
})()]);
if(or__17677__auto__){
return or__17677__auto__;
} else {
var or__17677__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__17677__auto____$1){
return or__17677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__17665__auto__ = m;
if(and__17665__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__17665__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18321__auto__ = (((m == null))?null:m);
return (function (){var or__17677__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__44566 = x__18321__auto__;
return goog.typeOf(G__44566);
})()]);
if(or__17677__auto__){
return or__17677__auto__;
} else {
var or__17677__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__17677__auto____$1){
return or__17677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__17665__auto__ = m;
if(and__17665__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__17665__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18321__auto__ = (((m == null))?null:m);
return (function (){var or__17677__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__44570 = x__18321__auto__;
return goog.typeOf(G__44570);
})()]);
if(or__17677__auto__){
return or__17677__auto__;
} else {
var or__17677__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__17677__auto____$1){
return or__17677__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__17665__auto__ = m;
if(and__17665__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__17665__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18321__auto__ = (((m == null))?null:m);
return (function (){var or__17677__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__44574 = x__18321__auto__;
return goog.typeOf(G__44574);
})()]);
if(or__17677__auto__){
return or__17677__auto__;
} else {
var or__17677__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__17677__auto____$1){
return or__17677__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__44575){
var map__44581 = p__44575;
var map__44581__$1 = ((cljs.core.seq_QMARK_(map__44581))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44581):map__44581);
var opts = map__44581__$1;
var statearr_44582_44586 = state;
(statearr_44582_44586[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__44581,map__44581__$1,opts){
return (function (val){
var statearr_44583_44587 = state;
(statearr_44583_44587[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__44581,map__44581__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_44584_44588 = state;
(statearr_44584_44588[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__44585 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44585) : cljs.core.deref.call(null,G__44585));
})());


return cljs.core.constant$keyword$64;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__44575 = null;
if (arguments.length > 3) {
var G__44589__i = 0, G__44589__a = new Array(arguments.length -  3);
while (G__44589__i < G__44589__a.length) {G__44589__a[G__44589__i] = arguments[G__44589__i + 3]; ++G__44589__i;}
  p__44575 = new cljs.core.IndexedSeq(G__44589__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__44575);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__44590){
var state = cljs.core.first(arglist__44590);
arglist__44590 = cljs.core.next(arglist__44590);
var cont_block = cljs.core.first(arglist__44590);
arglist__44590 = cljs.core.next(arglist__44590);
var ports = cljs.core.first(arglist__44590);
var p__44575 = cljs.core.rest(arglist__44590);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__44575);
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
var cs = (function (){var G__44724 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44724) : cljs.core.atom.call(null,G__44724));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,null,cljs.core.constant$keyword$74,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$75);
var solo_mode = (function (){var G__44725 = cljs.core.constant$keyword$74;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44725) : cljs.core.atom.call(null,G__44725));
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
if(cljs.core.truth_((function (){var G__44726 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__44726) : attr.call(null,G__44726));
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
var chs = (function (){var G__44727 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44727) : cljs.core.deref.call(null,G__44727));
})();
var mode = (function (){var G__44728 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44728) : cljs.core.deref.call(null,G__44728));
})();
var solos = pick(cljs.core.constant$keyword$75,chs);
var pauses = pick(cljs.core.constant$keyword$73,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$76,solos,cljs.core.constant$keyword$77,pick(cljs.core.constant$keyword$74,chs),cljs.core.constant$keyword$78,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$73)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t44729 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t44729 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44730){
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
this.meta44730 = meta44730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44729.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t44729.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t44729.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t44729.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__44732_44857 = self__.cs;
var G__44733_44858 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44732_44857,G__44733_44858) : cljs.core.reset_BANG_.call(null,G__44732_44857,G__44733_44858));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t44729.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t44729.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__44734 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__44734) : self__.solo_modes.call(null,G__44734));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__44735_44859 = self__.solo_mode;
var G__44736_44860 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44735_44859,G__44736_44860) : cljs.core.reset_BANG_.call(null,G__44735_44859,G__44736_44860));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t44729.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t44729.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t44729.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44731){
var self__ = this;
var _44731__$1 = this;
return self__.meta44730;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t44729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44731,meta44730__$1){
var self__ = this;
var _44731__$1 = this;
return (new cljs.core.async.t44729(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44730__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t44729.cljs$lang$type = true;

cljs.core.async.t44729.cljs$lang$ctorStr = "cljs.core.async/t44729";

cljs.core.async.t44729.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18264__auto__,writer__18265__auto__,opt__18266__auto__){
return cljs.core._write(writer__18265__auto__,"cljs.core.async/t44729");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t44729 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t44729(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44730){
return (new cljs.core.async.t44729(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44730));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t44729(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33655__auto___44861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto___44861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto___44861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44808){
var state_val_44809 = (state_44808[(1)]);
if((state_val_44809 === (7))){
var inst_44750 = (state_44808[(7)]);
var inst_44755 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44750);
var state_44808__$1 = state_44808;
var statearr_44810_44862 = state_44808__$1;
(statearr_44810_44862[(2)] = inst_44755);

(statearr_44810_44862[(1)] = (9));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (20))){
var inst_44765 = (state_44808[(8)]);
var state_44808__$1 = state_44808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44808__$1,(23),out,inst_44765);
} else {
if((state_val_44809 === (1))){
var inst_44740 = (state_44808[(9)]);
var inst_44740__$1 = calc_state();
var inst_44741 = cljs.core.seq_QMARK_(inst_44740__$1);
var state_44808__$1 = (function (){var statearr_44811 = state_44808;
(statearr_44811[(9)] = inst_44740__$1);

return statearr_44811;
})();
if(inst_44741){
var statearr_44812_44863 = state_44808__$1;
(statearr_44812_44863[(1)] = (2));

} else {
var statearr_44813_44864 = state_44808__$1;
(statearr_44813_44864[(1)] = (3));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (24))){
var inst_44758 = (state_44808[(10)]);
var inst_44750 = inst_44758;
var state_44808__$1 = (function (){var statearr_44814 = state_44808;
(statearr_44814[(7)] = inst_44750);

return statearr_44814;
})();
var statearr_44815_44865 = state_44808__$1;
(statearr_44815_44865[(2)] = null);

(statearr_44815_44865[(1)] = (5));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (4))){
var inst_44740 = (state_44808[(9)]);
var inst_44746 = (state_44808[(2)]);
var inst_44747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44746,cljs.core.constant$keyword$78);
var inst_44748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44746,cljs.core.constant$keyword$77);
var inst_44749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44746,cljs.core.constant$keyword$76);
var inst_44750 = inst_44740;
var state_44808__$1 = (function (){var statearr_44816 = state_44808;
(statearr_44816[(11)] = inst_44747);

(statearr_44816[(7)] = inst_44750);

(statearr_44816[(12)] = inst_44749);

(statearr_44816[(13)] = inst_44748);

return statearr_44816;
})();
var statearr_44817_44866 = state_44808__$1;
(statearr_44817_44866[(2)] = null);

(statearr_44817_44866[(1)] = (5));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (15))){
var state_44808__$1 = state_44808;
var statearr_44818_44867 = state_44808__$1;
(statearr_44818_44867[(2)] = null);

(statearr_44818_44867[(1)] = (16));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (21))){
var inst_44758 = (state_44808[(10)]);
var inst_44750 = inst_44758;
var state_44808__$1 = (function (){var statearr_44819 = state_44808;
(statearr_44819[(7)] = inst_44750);

return statearr_44819;
})();
var statearr_44820_44868 = state_44808__$1;
(statearr_44820_44868[(2)] = null);

(statearr_44820_44868[(1)] = (5));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (13))){
var inst_44804 = (state_44808[(2)]);
var state_44808__$1 = state_44808;
var statearr_44821_44869 = state_44808__$1;
(statearr_44821_44869[(2)] = inst_44804);

(statearr_44821_44869[(1)] = (6));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (22))){
var inst_44802 = (state_44808[(2)]);
var state_44808__$1 = state_44808;
var statearr_44822_44870 = state_44808__$1;
(statearr_44822_44870[(2)] = inst_44802);

(statearr_44822_44870[(1)] = (13));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (6))){
var inst_44806 = (state_44808[(2)]);
var state_44808__$1 = state_44808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44808__$1,inst_44806);
} else {
if((state_val_44809 === (25))){
var state_44808__$1 = state_44808;
var statearr_44823_44871 = state_44808__$1;
(statearr_44823_44871[(2)] = null);

(statearr_44823_44871[(1)] = (26));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (17))){
var inst_44781 = (state_44808[(14)]);
var state_44808__$1 = state_44808;
var statearr_44824_44872 = state_44808__$1;
(statearr_44824_44872[(2)] = inst_44781);

(statearr_44824_44872[(1)] = (19));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (3))){
var inst_44740 = (state_44808[(9)]);
var state_44808__$1 = state_44808;
var statearr_44825_44873 = state_44808__$1;
(statearr_44825_44873[(2)] = inst_44740);

(statearr_44825_44873[(1)] = (4));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (12))){
var inst_44781 = (state_44808[(14)]);
var inst_44761 = (state_44808[(15)]);
var inst_44766 = (state_44808[(16)]);
var inst_44781__$1 = (function (){var G__44826 = inst_44766;
return (inst_44761.cljs$core$IFn$_invoke$arity$1 ? inst_44761.cljs$core$IFn$_invoke$arity$1(G__44826) : inst_44761.call(null,G__44826));
})();
var state_44808__$1 = (function (){var statearr_44827 = state_44808;
(statearr_44827[(14)] = inst_44781__$1);

return statearr_44827;
})();
if(cljs.core.truth_(inst_44781__$1)){
var statearr_44828_44874 = state_44808__$1;
(statearr_44828_44874[(1)] = (17));

} else {
var statearr_44829_44875 = state_44808__$1;
(statearr_44829_44875[(1)] = (18));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (2))){
var inst_44740 = (state_44808[(9)]);
var inst_44743 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44740);
var state_44808__$1 = state_44808;
var statearr_44830_44876 = state_44808__$1;
(statearr_44830_44876[(2)] = inst_44743);

(statearr_44830_44876[(1)] = (4));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (23))){
var inst_44793 = (state_44808[(2)]);
var state_44808__$1 = state_44808;
if(cljs.core.truth_(inst_44793)){
var statearr_44831_44877 = state_44808__$1;
(statearr_44831_44877[(1)] = (24));

} else {
var statearr_44832_44878 = state_44808__$1;
(statearr_44832_44878[(1)] = (25));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (19))){
var inst_44790 = (state_44808[(2)]);
var state_44808__$1 = state_44808;
if(cljs.core.truth_(inst_44790)){
var statearr_44833_44879 = state_44808__$1;
(statearr_44833_44879[(1)] = (20));

} else {
var statearr_44834_44880 = state_44808__$1;
(statearr_44834_44880[(1)] = (21));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (11))){
var inst_44765 = (state_44808[(8)]);
var inst_44771 = (inst_44765 == null);
var state_44808__$1 = state_44808;
if(cljs.core.truth_(inst_44771)){
var statearr_44835_44881 = state_44808__$1;
(statearr_44835_44881[(1)] = (14));

} else {
var statearr_44836_44882 = state_44808__$1;
(statearr_44836_44882[(1)] = (15));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (9))){
var inst_44758 = (state_44808[(10)]);
var inst_44758__$1 = (state_44808[(2)]);
var inst_44759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44758__$1,cljs.core.constant$keyword$78);
var inst_44760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44758__$1,cljs.core.constant$keyword$77);
var inst_44761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44758__$1,cljs.core.constant$keyword$76);
var state_44808__$1 = (function (){var statearr_44837 = state_44808;
(statearr_44837[(10)] = inst_44758__$1);

(statearr_44837[(15)] = inst_44761);

(statearr_44837[(17)] = inst_44760);

return statearr_44837;
})();
return cljs.core.async.ioc_alts_BANG_(state_44808__$1,(10),inst_44759);
} else {
if((state_val_44809 === (5))){
var inst_44750 = (state_44808[(7)]);
var inst_44753 = cljs.core.seq_QMARK_(inst_44750);
var state_44808__$1 = state_44808;
if(inst_44753){
var statearr_44838_44883 = state_44808__$1;
(statearr_44838_44883[(1)] = (7));

} else {
var statearr_44839_44884 = state_44808__$1;
(statearr_44839_44884[(1)] = (8));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (14))){
var inst_44766 = (state_44808[(16)]);
var inst_44773 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44766);
var state_44808__$1 = state_44808;
var statearr_44840_44885 = state_44808__$1;
(statearr_44840_44885[(2)] = inst_44773);

(statearr_44840_44885[(1)] = (16));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (26))){
var inst_44798 = (state_44808[(2)]);
var state_44808__$1 = state_44808;
var statearr_44841_44886 = state_44808__$1;
(statearr_44841_44886[(2)] = inst_44798);

(statearr_44841_44886[(1)] = (22));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (16))){
var inst_44776 = (state_44808[(2)]);
var inst_44777 = calc_state();
var inst_44750 = inst_44777;
var state_44808__$1 = (function (){var statearr_44842 = state_44808;
(statearr_44842[(18)] = inst_44776);

(statearr_44842[(7)] = inst_44750);

return statearr_44842;
})();
var statearr_44843_44887 = state_44808__$1;
(statearr_44843_44887[(2)] = null);

(statearr_44843_44887[(1)] = (5));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (10))){
var inst_44765 = (state_44808[(8)]);
var inst_44766 = (state_44808[(16)]);
var inst_44764 = (state_44808[(2)]);
var inst_44765__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44764,(0),null);
var inst_44766__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44764,(1),null);
var inst_44767 = (inst_44765__$1 == null);
var inst_44768 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44766__$1,change);
var inst_44769 = (inst_44767) || (inst_44768);
var state_44808__$1 = (function (){var statearr_44844 = state_44808;
(statearr_44844[(8)] = inst_44765__$1);

(statearr_44844[(16)] = inst_44766__$1);

return statearr_44844;
})();
if(cljs.core.truth_(inst_44769)){
var statearr_44845_44888 = state_44808__$1;
(statearr_44845_44888[(1)] = (11));

} else {
var statearr_44846_44889 = state_44808__$1;
(statearr_44846_44889[(1)] = (12));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (18))){
var inst_44761 = (state_44808[(15)]);
var inst_44766 = (state_44808[(16)]);
var inst_44760 = (state_44808[(17)]);
var inst_44785 = cljs.core.empty_QMARK_(inst_44761);
var inst_44786 = (function (){var G__44847 = inst_44766;
return (inst_44760.cljs$core$IFn$_invoke$arity$1 ? inst_44760.cljs$core$IFn$_invoke$arity$1(G__44847) : inst_44760.call(null,G__44847));
})();
var inst_44787 = cljs.core.not(inst_44786);
var inst_44788 = (inst_44785) && (inst_44787);
var state_44808__$1 = state_44808;
var statearr_44848_44890 = state_44808__$1;
(statearr_44848_44890[(2)] = inst_44788);

(statearr_44848_44890[(1)] = (19));


return cljs.core.constant$keyword$64;
} else {
if((state_val_44809 === (8))){
var inst_44750 = (state_44808[(7)]);
var state_44808__$1 = state_44808;
var statearr_44849_44891 = state_44808__$1;
(statearr_44849_44891[(2)] = inst_44750);

(statearr_44849_44891[(1)] = (9));


return cljs.core.constant$keyword$64;
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
});})(c__33655__auto___44861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33575__auto__,c__33655__auto___44861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_44853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44853[(0)] = state_machine__33576__auto__);

(statearr_44853[(1)] = (1));

return statearr_44853;
});
var state_machine__33576__auto____1 = (function (state_44808){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_44808);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e44854){if((e44854 instanceof Object)){
var ex__33579__auto__ = e44854;
var statearr_44855_44892 = state_44808;
(statearr_44855_44892[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44808);

return cljs.core.constant$keyword$64;
} else {
throw e44854;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__44893 = state_44808;
state_44808 = G__44893;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_44808){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_44808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto___44861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33657__auto__ = (function (){var statearr_44856 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_44856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___44861);

return statearr_44856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto___44861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj44895 = {};
return obj44895;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__17665__auto__ = p;
if(and__17665__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__17665__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18321__auto__ = (((p == null))?null:p);
return (function (){var or__17677__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__44899 = x__18321__auto__;
return goog.typeOf(G__44899);
})()]);
if(or__17677__auto__){
return or__17677__auto__;
} else {
var or__17677__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__17677__auto____$1){
return or__17677__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__17665__auto__ = p;
if(and__17665__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__17665__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18321__auto__ = (((p == null))?null:p);
return (function (){var or__17677__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__44903 = x__18321__auto__;
return goog.typeOf(G__44903);
})()]);
if(or__17677__auto__){
return or__17677__auto__;
} else {
var or__17677__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__17677__auto____$1){
return or__17677__auto____$1;
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
if((function (){var and__17665__auto__ = p;
if(and__17665__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__17665__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18321__auto__ = (((p == null))?null:p);
return (function (){var or__17677__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__44909 = x__18321__auto__;
return goog.typeOf(G__44909);
})()]);
if(or__17677__auto__){
return or__17677__auto__;
} else {
var or__17677__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17677__auto____$1){
return or__17677__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__17665__auto__ = p;
if(and__17665__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__17665__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18321__auto__ = (((p == null))?null:p);
return (function (){var or__17677__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__44911 = x__18321__auto__;
return goog.typeOf(G__44911);
})()]);
if(or__17677__auto__){
return or__17677__auto__;
} else {
var or__17677__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17677__auto____$1){
return or__17677__auto____$1;
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
var mults = (function (){var G__45050 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45050) : cljs.core.atom.call(null,G__45050));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__17677__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__45052 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45052) : cljs.core.deref.call(null,G__45052));
})(),topic);
if(cljs.core.truth_(or__17677__auto__)){
return or__17677__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__17677__auto__,mults){
return (function (p1__44912_SHARP_){
if(cljs.core.truth_((function (){var G__45053 = topic;
return (p1__44912_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44912_SHARP_.cljs$core$IFn$_invoke$arity$1(G__45053) : p1__44912_SHARP_.call(null,G__45053));
})())){
return p1__44912_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44912_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__45054 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__45054) : buf_fn.call(null,G__45054));
})())));
}
});})(or__17677__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t45055 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t45055 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta45056){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta45056 = meta45056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t45055.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t45055.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__45058 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__45058) : self__.ensure_mult.call(null,G__45058));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t45055.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__45059 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45059) : cljs.core.deref.call(null,G__45059));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t45055.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__45060 = self__.mults;
var G__45061 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__45060,G__45061) : cljs.core.reset_BANG_.call(null,G__45060,G__45061));
});})(mults,ensure_mult))
;

cljs.core.async.t45055.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t45055.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t45055.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t45055.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45057){
var self__ = this;
var _45057__$1 = this;
return self__.meta45056;
});})(mults,ensure_mult))
;

cljs.core.async.t45055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45057,meta45056__$1){
var self__ = this;
var _45057__$1 = this;
return (new cljs.core.async.t45055(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta45056__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t45055.cljs$lang$type = true;

cljs.core.async.t45055.cljs$lang$ctorStr = "cljs.core.async/t45055";

cljs.core.async.t45055.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18264__auto__,writer__18265__auto__,opt__18266__auto__){
return cljs.core._write(writer__18265__auto__,"cljs.core.async/t45055");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t45055 = ((function (mults,ensure_mult){
return (function __GT_t45055(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta45056){
return (new cljs.core.async.t45055(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta45056));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t45055(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33655__auto___45184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto___45184,mults,ensure_mult,p){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto___45184,mults,ensure_mult,p){
return (function (state_45133){
var state_val_45134 = (state_45133[(1)]);
if((state_val_45134 === (7))){
var inst_45129 = (state_45133[(2)]);
var state_45133__$1 = state_45133;
var statearr_45135_45185 = state_45133__$1;
(statearr_45135_45185[(2)] = inst_45129);

(statearr_45135_45185[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (20))){
var state_45133__$1 = state_45133;
var statearr_45136_45186 = state_45133__$1;
(statearr_45136_45186[(2)] = null);

(statearr_45136_45186[(1)] = (21));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (1))){
var state_45133__$1 = state_45133;
var statearr_45137_45187 = state_45133__$1;
(statearr_45137_45187[(2)] = null);

(statearr_45137_45187[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (24))){
var inst_45112 = (state_45133[(7)]);
var inst_45121 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45112);
var state_45133__$1 = state_45133;
var statearr_45138_45188 = state_45133__$1;
(statearr_45138_45188[(2)] = inst_45121);

(statearr_45138_45188[(1)] = (25));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (4))){
var inst_45064 = (state_45133[(8)]);
var inst_45064__$1 = (state_45133[(2)]);
var inst_45065 = (inst_45064__$1 == null);
var state_45133__$1 = (function (){var statearr_45139 = state_45133;
(statearr_45139[(8)] = inst_45064__$1);

return statearr_45139;
})();
if(cljs.core.truth_(inst_45065)){
var statearr_45140_45189 = state_45133__$1;
(statearr_45140_45189[(1)] = (5));

} else {
var statearr_45141_45190 = state_45133__$1;
(statearr_45141_45190[(1)] = (6));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (15))){
var inst_45106 = (state_45133[(2)]);
var state_45133__$1 = state_45133;
var statearr_45142_45191 = state_45133__$1;
(statearr_45142_45191[(2)] = inst_45106);

(statearr_45142_45191[(1)] = (12));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (21))){
var inst_45126 = (state_45133[(2)]);
var state_45133__$1 = (function (){var statearr_45143 = state_45133;
(statearr_45143[(9)] = inst_45126);

return statearr_45143;
})();
var statearr_45144_45192 = state_45133__$1;
(statearr_45144_45192[(2)] = null);

(statearr_45144_45192[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (13))){
var inst_45088 = (state_45133[(10)]);
var inst_45090 = cljs.core.chunked_seq_QMARK_(inst_45088);
var state_45133__$1 = state_45133;
if(inst_45090){
var statearr_45145_45193 = state_45133__$1;
(statearr_45145_45193[(1)] = (16));

} else {
var statearr_45146_45194 = state_45133__$1;
(statearr_45146_45194[(1)] = (17));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (22))){
var inst_45118 = (state_45133[(2)]);
var state_45133__$1 = state_45133;
if(cljs.core.truth_(inst_45118)){
var statearr_45147_45195 = state_45133__$1;
(statearr_45147_45195[(1)] = (23));

} else {
var statearr_45148_45196 = state_45133__$1;
(statearr_45148_45196[(1)] = (24));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (6))){
var inst_45112 = (state_45133[(7)]);
var inst_45064 = (state_45133[(8)]);
var inst_45114 = (state_45133[(11)]);
var inst_45112__$1 = (function (){var G__45149 = inst_45064;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__45149) : topic_fn.call(null,G__45149));
})();
var inst_45113 = (function (){var G__45150 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45150) : cljs.core.deref.call(null,G__45150));
})();
var inst_45114__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45113,inst_45112__$1);
var state_45133__$1 = (function (){var statearr_45151 = state_45133;
(statearr_45151[(7)] = inst_45112__$1);

(statearr_45151[(11)] = inst_45114__$1);

return statearr_45151;
})();
if(cljs.core.truth_(inst_45114__$1)){
var statearr_45152_45197 = state_45133__$1;
(statearr_45152_45197[(1)] = (19));

} else {
var statearr_45153_45198 = state_45133__$1;
(statearr_45153_45198[(1)] = (20));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (25))){
var inst_45123 = (state_45133[(2)]);
var state_45133__$1 = state_45133;
var statearr_45154_45199 = state_45133__$1;
(statearr_45154_45199[(2)] = inst_45123);

(statearr_45154_45199[(1)] = (21));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (17))){
var inst_45088 = (state_45133[(10)]);
var inst_45097 = cljs.core.first(inst_45088);
var inst_45098 = cljs.core.async.muxch_STAR_(inst_45097);
var inst_45099 = cljs.core.async.close_BANG_(inst_45098);
var inst_45100 = cljs.core.next(inst_45088);
var inst_45074 = inst_45100;
var inst_45075 = null;
var inst_45076 = (0);
var inst_45077 = (0);
var state_45133__$1 = (function (){var statearr_45155 = state_45133;
(statearr_45155[(12)] = inst_45076);

(statearr_45155[(13)] = inst_45075);

(statearr_45155[(14)] = inst_45099);

(statearr_45155[(15)] = inst_45074);

(statearr_45155[(16)] = inst_45077);

return statearr_45155;
})();
var statearr_45156_45200 = state_45133__$1;
(statearr_45156_45200[(2)] = null);

(statearr_45156_45200[(1)] = (8));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (3))){
var inst_45131 = (state_45133[(2)]);
var state_45133__$1 = state_45133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45133__$1,inst_45131);
} else {
if((state_val_45134 === (12))){
var inst_45108 = (state_45133[(2)]);
var state_45133__$1 = state_45133;
var statearr_45157_45201 = state_45133__$1;
(statearr_45157_45201[(2)] = inst_45108);

(statearr_45157_45201[(1)] = (9));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (2))){
var state_45133__$1 = state_45133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45133__$1,(4),ch);
} else {
if((state_val_45134 === (23))){
var state_45133__$1 = state_45133;
var statearr_45158_45202 = state_45133__$1;
(statearr_45158_45202[(2)] = null);

(statearr_45158_45202[(1)] = (25));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (19))){
var inst_45064 = (state_45133[(8)]);
var inst_45114 = (state_45133[(11)]);
var inst_45116 = cljs.core.async.muxch_STAR_(inst_45114);
var state_45133__$1 = state_45133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45133__$1,(22),inst_45116,inst_45064);
} else {
if((state_val_45134 === (11))){
var inst_45088 = (state_45133[(10)]);
var inst_45074 = (state_45133[(15)]);
var inst_45088__$1 = cljs.core.seq(inst_45074);
var state_45133__$1 = (function (){var statearr_45159 = state_45133;
(statearr_45159[(10)] = inst_45088__$1);

return statearr_45159;
})();
if(inst_45088__$1){
var statearr_45160_45203 = state_45133__$1;
(statearr_45160_45203[(1)] = (13));

} else {
var statearr_45161_45204 = state_45133__$1;
(statearr_45161_45204[(1)] = (14));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (9))){
var inst_45110 = (state_45133[(2)]);
var state_45133__$1 = state_45133;
var statearr_45162_45205 = state_45133__$1;
(statearr_45162_45205[(2)] = inst_45110);

(statearr_45162_45205[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (5))){
var inst_45071 = (function (){var G__45163 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45163) : cljs.core.deref.call(null,G__45163));
})();
var inst_45072 = cljs.core.vals(inst_45071);
var inst_45073 = cljs.core.seq(inst_45072);
var inst_45074 = inst_45073;
var inst_45075 = null;
var inst_45076 = (0);
var inst_45077 = (0);
var state_45133__$1 = (function (){var statearr_45164 = state_45133;
(statearr_45164[(12)] = inst_45076);

(statearr_45164[(13)] = inst_45075);

(statearr_45164[(15)] = inst_45074);

(statearr_45164[(16)] = inst_45077);

return statearr_45164;
})();
var statearr_45165_45206 = state_45133__$1;
(statearr_45165_45206[(2)] = null);

(statearr_45165_45206[(1)] = (8));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (14))){
var state_45133__$1 = state_45133;
var statearr_45169_45207 = state_45133__$1;
(statearr_45169_45207[(2)] = null);

(statearr_45169_45207[(1)] = (15));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (16))){
var inst_45088 = (state_45133[(10)]);
var inst_45092 = cljs.core.chunk_first(inst_45088);
var inst_45093 = cljs.core.chunk_rest(inst_45088);
var inst_45094 = cljs.core.count(inst_45092);
var inst_45074 = inst_45093;
var inst_45075 = inst_45092;
var inst_45076 = inst_45094;
var inst_45077 = (0);
var state_45133__$1 = (function (){var statearr_45170 = state_45133;
(statearr_45170[(12)] = inst_45076);

(statearr_45170[(13)] = inst_45075);

(statearr_45170[(15)] = inst_45074);

(statearr_45170[(16)] = inst_45077);

return statearr_45170;
})();
var statearr_45171_45208 = state_45133__$1;
(statearr_45171_45208[(2)] = null);

(statearr_45171_45208[(1)] = (8));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (10))){
var inst_45076 = (state_45133[(12)]);
var inst_45075 = (state_45133[(13)]);
var inst_45074 = (state_45133[(15)]);
var inst_45077 = (state_45133[(16)]);
var inst_45082 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45075,inst_45077);
var inst_45083 = cljs.core.async.muxch_STAR_(inst_45082);
var inst_45084 = cljs.core.async.close_BANG_(inst_45083);
var inst_45085 = (inst_45077 + (1));
var tmp45166 = inst_45076;
var tmp45167 = inst_45075;
var tmp45168 = inst_45074;
var inst_45074__$1 = tmp45168;
var inst_45075__$1 = tmp45167;
var inst_45076__$1 = tmp45166;
var inst_45077__$1 = inst_45085;
var state_45133__$1 = (function (){var statearr_45172 = state_45133;
(statearr_45172[(12)] = inst_45076__$1);

(statearr_45172[(17)] = inst_45084);

(statearr_45172[(13)] = inst_45075__$1);

(statearr_45172[(15)] = inst_45074__$1);

(statearr_45172[(16)] = inst_45077__$1);

return statearr_45172;
})();
var statearr_45173_45209 = state_45133__$1;
(statearr_45173_45209[(2)] = null);

(statearr_45173_45209[(1)] = (8));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (18))){
var inst_45103 = (state_45133[(2)]);
var state_45133__$1 = state_45133;
var statearr_45174_45210 = state_45133__$1;
(statearr_45174_45210[(2)] = inst_45103);

(statearr_45174_45210[(1)] = (15));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45134 === (8))){
var inst_45076 = (state_45133[(12)]);
var inst_45077 = (state_45133[(16)]);
var inst_45079 = (inst_45077 < inst_45076);
var inst_45080 = inst_45079;
var state_45133__$1 = state_45133;
if(cljs.core.truth_(inst_45080)){
var statearr_45175_45211 = state_45133__$1;
(statearr_45175_45211[(1)] = (10));

} else {
var statearr_45176_45212 = state_45133__$1;
(statearr_45176_45212[(1)] = (11));

}

return cljs.core.constant$keyword$64;
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
});})(c__33655__auto___45184,mults,ensure_mult,p))
;
return ((function (switch__33575__auto__,c__33655__auto___45184,mults,ensure_mult,p){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_45180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45180[(0)] = state_machine__33576__auto__);

(statearr_45180[(1)] = (1));

return statearr_45180;
});
var state_machine__33576__auto____1 = (function (state_45133){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_45133);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e45181){if((e45181 instanceof Object)){
var ex__33579__auto__ = e45181;
var statearr_45182_45213 = state_45133;
(statearr_45182_45213[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45133);

return cljs.core.constant$keyword$64;
} else {
throw e45181;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__45214 = state_45133;
state_45133 = G__45214;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_45133){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_45133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto___45184,mults,ensure_mult,p))
})();
var state__33657__auto__ = (function (){var statearr_45183 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_45183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___45184);

return statearr_45183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto___45184,mults,ensure_mult,p))
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
var dctr = (function (){var G__45295 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45295) : cljs.core.atom.call(null,G__45295));
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
var c__33655__auto___45368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto___45368,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto___45368,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45334){
var state_val_45335 = (state_45334[(1)]);
if((state_val_45335 === (7))){
var state_45334__$1 = state_45334;
var statearr_45336_45369 = state_45334__$1;
(statearr_45336_45369[(2)] = null);

(statearr_45336_45369[(1)] = (8));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45335 === (1))){
var state_45334__$1 = state_45334;
var statearr_45337_45370 = state_45334__$1;
(statearr_45337_45370[(2)] = null);

(statearr_45337_45370[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45335 === (4))){
var inst_45298 = (state_45334[(7)]);
var inst_45300 = (inst_45298 < cnt);
var state_45334__$1 = state_45334;
if(cljs.core.truth_(inst_45300)){
var statearr_45338_45371 = state_45334__$1;
(statearr_45338_45371[(1)] = (6));

} else {
var statearr_45339_45372 = state_45334__$1;
(statearr_45339_45372[(1)] = (7));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45335 === (15))){
var inst_45330 = (state_45334[(2)]);
var state_45334__$1 = state_45334;
var statearr_45340_45373 = state_45334__$1;
(statearr_45340_45373[(2)] = inst_45330);

(statearr_45340_45373[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45335 === (13))){
var inst_45323 = cljs.core.async.close_BANG_(out);
var state_45334__$1 = state_45334;
var statearr_45341_45374 = state_45334__$1;
(statearr_45341_45374[(2)] = inst_45323);

(statearr_45341_45374[(1)] = (15));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45335 === (6))){
var state_45334__$1 = state_45334;
var statearr_45342_45375 = state_45334__$1;
(statearr_45342_45375[(2)] = null);

(statearr_45342_45375[(1)] = (11));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45335 === (3))){
var inst_45332 = (state_45334[(2)]);
var state_45334__$1 = state_45334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45334__$1,inst_45332);
} else {
if((state_val_45335 === (12))){
var inst_45320 = (state_45334[(8)]);
var inst_45320__$1 = (state_45334[(2)]);
var inst_45321 = cljs.core.some(cljs.core.nil_QMARK_,inst_45320__$1);
var state_45334__$1 = (function (){var statearr_45343 = state_45334;
(statearr_45343[(8)] = inst_45320__$1);

return statearr_45343;
})();
if(cljs.core.truth_(inst_45321)){
var statearr_45344_45376 = state_45334__$1;
(statearr_45344_45376[(1)] = (13));

} else {
var statearr_45345_45377 = state_45334__$1;
(statearr_45345_45377[(1)] = (14));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45335 === (2))){
var inst_45297 = (function (){var G__45346 = dctr;
var G__45347 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__45346,G__45347) : cljs.core.reset_BANG_.call(null,G__45346,G__45347));
})();
var inst_45298 = (0);
var state_45334__$1 = (function (){var statearr_45348 = state_45334;
(statearr_45348[(9)] = inst_45297);

(statearr_45348[(7)] = inst_45298);

return statearr_45348;
})();
var statearr_45349_45378 = state_45334__$1;
(statearr_45349_45378[(2)] = null);

(statearr_45349_45378[(1)] = (4));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45335 === (11))){
var inst_45298 = (state_45334[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_45334,(10),Object,null,(9));
var inst_45307 = (function (){var G__45350 = inst_45298;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__45350) : chs__$1.call(null,G__45350));
})();
var inst_45308 = (function (){var G__45351 = inst_45298;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45351) : done.call(null,G__45351));
})();
var inst_45309 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45307,inst_45308);
var state_45334__$1 = state_45334;
var statearr_45352_45379 = state_45334__$1;
(statearr_45352_45379[(2)] = inst_45309);


cljs.core.async.impl.ioc_helpers.process_exception(state_45334__$1);

return cljs.core.constant$keyword$64;
} else {
if((state_val_45335 === (9))){
var inst_45298 = (state_45334[(7)]);
var inst_45311 = (state_45334[(2)]);
var inst_45312 = (inst_45298 + (1));
var inst_45298__$1 = inst_45312;
var state_45334__$1 = (function (){var statearr_45353 = state_45334;
(statearr_45353[(7)] = inst_45298__$1);

(statearr_45353[(10)] = inst_45311);

return statearr_45353;
})();
var statearr_45354_45380 = state_45334__$1;
(statearr_45354_45380[(2)] = null);

(statearr_45354_45380[(1)] = (4));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45335 === (5))){
var inst_45318 = (state_45334[(2)]);
var state_45334__$1 = (function (){var statearr_45355 = state_45334;
(statearr_45355[(11)] = inst_45318);

return statearr_45355;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45334__$1,(12),dchan);
} else {
if((state_val_45335 === (14))){
var inst_45320 = (state_45334[(8)]);
var inst_45325 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45320);
var state_45334__$1 = state_45334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45334__$1,(16),out,inst_45325);
} else {
if((state_val_45335 === (16))){
var inst_45327 = (state_45334[(2)]);
var state_45334__$1 = (function (){var statearr_45356 = state_45334;
(statearr_45356[(12)] = inst_45327);

return statearr_45356;
})();
var statearr_45357_45381 = state_45334__$1;
(statearr_45357_45381[(2)] = null);

(statearr_45357_45381[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45335 === (10))){
var inst_45302 = (state_45334[(2)]);
var inst_45303 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45334__$1 = (function (){var statearr_45358 = state_45334;
(statearr_45358[(13)] = inst_45302);

return statearr_45358;
})();
var statearr_45359_45382 = state_45334__$1;
(statearr_45359_45382[(2)] = inst_45303);


cljs.core.async.impl.ioc_helpers.process_exception(state_45334__$1);

return cljs.core.constant$keyword$64;
} else {
if((state_val_45335 === (8))){
var inst_45316 = (state_45334[(2)]);
var state_45334__$1 = state_45334;
var statearr_45360_45383 = state_45334__$1;
(statearr_45360_45383[(2)] = inst_45316);

(statearr_45360_45383[(1)] = (5));


return cljs.core.constant$keyword$64;
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
});})(c__33655__auto___45368,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33575__auto__,c__33655__auto___45368,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_45364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45364[(0)] = state_machine__33576__auto__);

(statearr_45364[(1)] = (1));

return statearr_45364;
});
var state_machine__33576__auto____1 = (function (state_45334){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_45334);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e45365){if((e45365 instanceof Object)){
var ex__33579__auto__ = e45365;
var statearr_45366_45384 = state_45334;
(statearr_45366_45384[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45334);

return cljs.core.constant$keyword$64;
} else {
throw e45365;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__45385 = state_45334;
state_45334 = G__45385;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_45334){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_45334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto___45368,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33657__auto__ = (function (){var statearr_45367 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_45367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___45368);

return statearr_45367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto___45368,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__33655__auto___45495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto___45495,out){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto___45495,out){
return (function (state_45471){
var state_val_45472 = (state_45471[(1)]);
if((state_val_45472 === (7))){
var inst_45451 = (state_45471[(7)]);
var inst_45450 = (state_45471[(8)]);
var inst_45450__$1 = (state_45471[(2)]);
var inst_45451__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45450__$1,(0),null);
var inst_45452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45450__$1,(1),null);
var inst_45453 = (inst_45451__$1 == null);
var state_45471__$1 = (function (){var statearr_45473 = state_45471;
(statearr_45473[(7)] = inst_45451__$1);

(statearr_45473[(8)] = inst_45450__$1);

(statearr_45473[(9)] = inst_45452);

return statearr_45473;
})();
if(cljs.core.truth_(inst_45453)){
var statearr_45474_45496 = state_45471__$1;
(statearr_45474_45496[(1)] = (8));

} else {
var statearr_45475_45497 = state_45471__$1;
(statearr_45475_45497[(1)] = (9));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45472 === (1))){
var inst_45442 = cljs.core.vec(chs);
var inst_45443 = inst_45442;
var state_45471__$1 = (function (){var statearr_45476 = state_45471;
(statearr_45476[(10)] = inst_45443);

return statearr_45476;
})();
var statearr_45477_45498 = state_45471__$1;
(statearr_45477_45498[(2)] = null);

(statearr_45477_45498[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45472 === (4))){
var inst_45443 = (state_45471[(10)]);
var state_45471__$1 = state_45471;
return cljs.core.async.ioc_alts_BANG_(state_45471__$1,(7),inst_45443);
} else {
if((state_val_45472 === (6))){
var inst_45467 = (state_45471[(2)]);
var state_45471__$1 = state_45471;
var statearr_45478_45499 = state_45471__$1;
(statearr_45478_45499[(2)] = inst_45467);

(statearr_45478_45499[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45472 === (3))){
var inst_45469 = (state_45471[(2)]);
var state_45471__$1 = state_45471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45471__$1,inst_45469);
} else {
if((state_val_45472 === (2))){
var inst_45443 = (state_45471[(10)]);
var inst_45445 = cljs.core.count(inst_45443);
var inst_45446 = (inst_45445 > (0));
var state_45471__$1 = state_45471;
if(cljs.core.truth_(inst_45446)){
var statearr_45480_45500 = state_45471__$1;
(statearr_45480_45500[(1)] = (4));

} else {
var statearr_45481_45501 = state_45471__$1;
(statearr_45481_45501[(1)] = (5));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45472 === (11))){
var inst_45443 = (state_45471[(10)]);
var inst_45460 = (state_45471[(2)]);
var tmp45479 = inst_45443;
var inst_45443__$1 = tmp45479;
var state_45471__$1 = (function (){var statearr_45482 = state_45471;
(statearr_45482[(11)] = inst_45460);

(statearr_45482[(10)] = inst_45443__$1);

return statearr_45482;
})();
var statearr_45483_45502 = state_45471__$1;
(statearr_45483_45502[(2)] = null);

(statearr_45483_45502[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45472 === (9))){
var inst_45451 = (state_45471[(7)]);
var state_45471__$1 = state_45471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45471__$1,(11),out,inst_45451);
} else {
if((state_val_45472 === (5))){
var inst_45465 = cljs.core.async.close_BANG_(out);
var state_45471__$1 = state_45471;
var statearr_45484_45503 = state_45471__$1;
(statearr_45484_45503[(2)] = inst_45465);

(statearr_45484_45503[(1)] = (6));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45472 === (10))){
var inst_45463 = (state_45471[(2)]);
var state_45471__$1 = state_45471;
var statearr_45485_45504 = state_45471__$1;
(statearr_45485_45504[(2)] = inst_45463);

(statearr_45485_45504[(1)] = (6));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45472 === (8))){
var inst_45451 = (state_45471[(7)]);
var inst_45443 = (state_45471[(10)]);
var inst_45450 = (state_45471[(8)]);
var inst_45452 = (state_45471[(9)]);
var inst_45455 = (function (){var c = inst_45452;
var v = inst_45451;
var vec__45448 = inst_45450;
var cs = inst_45443;
return ((function (c,v,vec__45448,cs,inst_45451,inst_45443,inst_45450,inst_45452,state_val_45472,c__33655__auto___45495,out){
return (function (p1__45386_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45386_SHARP_);
});
;})(c,v,vec__45448,cs,inst_45451,inst_45443,inst_45450,inst_45452,state_val_45472,c__33655__auto___45495,out))
})();
var inst_45456 = cljs.core.filterv(inst_45455,inst_45443);
var inst_45443__$1 = inst_45456;
var state_45471__$1 = (function (){var statearr_45486 = state_45471;
(statearr_45486[(10)] = inst_45443__$1);

return statearr_45486;
})();
var statearr_45487_45505 = state_45471__$1;
(statearr_45487_45505[(2)] = null);

(statearr_45487_45505[(1)] = (2));


return cljs.core.constant$keyword$64;
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
});})(c__33655__auto___45495,out))
;
return ((function (switch__33575__auto__,c__33655__auto___45495,out){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_45491 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45491[(0)] = state_machine__33576__auto__);

(statearr_45491[(1)] = (1));

return statearr_45491;
});
var state_machine__33576__auto____1 = (function (state_45471){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_45471);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e45492){if((e45492 instanceof Object)){
var ex__33579__auto__ = e45492;
var statearr_45493_45506 = state_45471;
(statearr_45493_45506[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45471);

return cljs.core.constant$keyword$64;
} else {
throw e45492;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__45507 = state_45471;
state_45471 = G__45507;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_45471){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_45471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto___45495,out))
})();
var state__33657__auto__ = (function (){var statearr_45494 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_45494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___45495);

return statearr_45494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto___45495,out))
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
var c__33655__auto___45603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto___45603,out){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto___45603,out){
return (function (state_45580){
var state_val_45581 = (state_45580[(1)]);
if((state_val_45581 === (7))){
var inst_45562 = (state_45580[(7)]);
var inst_45562__$1 = (state_45580[(2)]);
var inst_45563 = (inst_45562__$1 == null);
var inst_45564 = cljs.core.not(inst_45563);
var state_45580__$1 = (function (){var statearr_45582 = state_45580;
(statearr_45582[(7)] = inst_45562__$1);

return statearr_45582;
})();
if(inst_45564){
var statearr_45583_45604 = state_45580__$1;
(statearr_45583_45604[(1)] = (8));

} else {
var statearr_45584_45605 = state_45580__$1;
(statearr_45584_45605[(1)] = (9));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45581 === (1))){
var inst_45557 = (0);
var state_45580__$1 = (function (){var statearr_45585 = state_45580;
(statearr_45585[(8)] = inst_45557);

return statearr_45585;
})();
var statearr_45586_45606 = state_45580__$1;
(statearr_45586_45606[(2)] = null);

(statearr_45586_45606[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45581 === (4))){
var state_45580__$1 = state_45580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45580__$1,(7),ch);
} else {
if((state_val_45581 === (6))){
var inst_45575 = (state_45580[(2)]);
var state_45580__$1 = state_45580;
var statearr_45587_45607 = state_45580__$1;
(statearr_45587_45607[(2)] = inst_45575);

(statearr_45587_45607[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45581 === (3))){
var inst_45577 = (state_45580[(2)]);
var inst_45578 = cljs.core.async.close_BANG_(out);
var state_45580__$1 = (function (){var statearr_45588 = state_45580;
(statearr_45588[(9)] = inst_45577);

return statearr_45588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45580__$1,inst_45578);
} else {
if((state_val_45581 === (2))){
var inst_45557 = (state_45580[(8)]);
var inst_45559 = (inst_45557 < n);
var state_45580__$1 = state_45580;
if(cljs.core.truth_(inst_45559)){
var statearr_45589_45608 = state_45580__$1;
(statearr_45589_45608[(1)] = (4));

} else {
var statearr_45590_45609 = state_45580__$1;
(statearr_45590_45609[(1)] = (5));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45581 === (11))){
var inst_45557 = (state_45580[(8)]);
var inst_45567 = (state_45580[(2)]);
var inst_45568 = (inst_45557 + (1));
var inst_45557__$1 = inst_45568;
var state_45580__$1 = (function (){var statearr_45591 = state_45580;
(statearr_45591[(8)] = inst_45557__$1);

(statearr_45591[(10)] = inst_45567);

return statearr_45591;
})();
var statearr_45592_45610 = state_45580__$1;
(statearr_45592_45610[(2)] = null);

(statearr_45592_45610[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45581 === (9))){
var state_45580__$1 = state_45580;
var statearr_45593_45611 = state_45580__$1;
(statearr_45593_45611[(2)] = null);

(statearr_45593_45611[(1)] = (10));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45581 === (5))){
var state_45580__$1 = state_45580;
var statearr_45594_45612 = state_45580__$1;
(statearr_45594_45612[(2)] = null);

(statearr_45594_45612[(1)] = (6));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45581 === (10))){
var inst_45572 = (state_45580[(2)]);
var state_45580__$1 = state_45580;
var statearr_45595_45613 = state_45580__$1;
(statearr_45595_45613[(2)] = inst_45572);

(statearr_45595_45613[(1)] = (6));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45581 === (8))){
var inst_45562 = (state_45580[(7)]);
var state_45580__$1 = state_45580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45580__$1,(11),out,inst_45562);
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
});})(c__33655__auto___45603,out))
;
return ((function (switch__33575__auto__,c__33655__auto___45603,out){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_45599 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45599[(0)] = state_machine__33576__auto__);

(statearr_45599[(1)] = (1));

return statearr_45599;
});
var state_machine__33576__auto____1 = (function (state_45580){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_45580);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e45600){if((e45600 instanceof Object)){
var ex__33579__auto__ = e45600;
var statearr_45601_45614 = state_45580;
(statearr_45601_45614[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45580);

return cljs.core.constant$keyword$64;
} else {
throw e45600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__45615 = state_45580;
state_45580 = G__45615;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_45580){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_45580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto___45603,out))
})();
var state__33657__auto__ = (function (){var statearr_45602 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_45602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___45603);

return statearr_45602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto___45603,out))
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
if(typeof cljs.core.async.t45628 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t45628 = (function (ch,f,map_LT_,meta45629){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta45629 = meta45629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t45628.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t45628.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t45628.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t45628.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t45631 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t45631 = (function (fn1,_,meta45629,map_LT_,f,ch,meta45632){
this.fn1 = fn1;
this._ = _;
this.meta45629 = meta45629;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta45632 = meta45632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t45631.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t45631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t45631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45616_SHARP_){
var G__45634 = (((p1__45616_SHARP_ == null))?null:(function (){var G__45635 = p1__45616_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45635) : self__.f.call(null,G__45635));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45634) : f1.call(null,G__45634));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t45631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45633){
var self__ = this;
var _45633__$1 = this;
return self__.meta45632;
});})(___$1))
;

cljs.core.async.t45631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45633,meta45632__$1){
var self__ = this;
var _45633__$1 = this;
return (new cljs.core.async.t45631(self__.fn1,self__._,self__.meta45629,self__.map_LT_,self__.f,self__.ch,meta45632__$1));
});})(___$1))
;

cljs.core.async.t45631.cljs$lang$type = true;

cljs.core.async.t45631.cljs$lang$ctorStr = "cljs.core.async/t45631";

cljs.core.async.t45631.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18264__auto__,writer__18265__auto__,opt__18266__auto__){
return cljs.core._write(writer__18265__auto__,"cljs.core.async/t45631");
});})(___$1))
;

cljs.core.async.__GT_t45631 = ((function (___$1){
return (function __GT_t45631(fn1__$1,___$2,meta45629__$1,map_LT___$1,f__$1,ch__$1,meta45632){
return (new cljs.core.async.t45631(fn1__$1,___$2,meta45629__$1,map_LT___$1,f__$1,ch__$1,meta45632));
});})(___$1))
;

}

return (new cljs.core.async.t45631(fn1,___$1,self__.meta45629,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17665__auto__ = ret;
if(cljs.core.truth_(and__17665__auto__)){
return !(((function (){var G__45636 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45636) : cljs.core.deref.call(null,G__45636));
})() == null));
} else {
return and__17665__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45637 = (function (){var G__45638 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45638) : cljs.core.deref.call(null,G__45638));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45637) : self__.f.call(null,G__45637));
})());
} else {
return ret;
}
});

cljs.core.async.t45628.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t45628.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t45628.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t45628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45630){
var self__ = this;
var _45630__$1 = this;
return self__.meta45629;
});

cljs.core.async.t45628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45630,meta45629__$1){
var self__ = this;
var _45630__$1 = this;
return (new cljs.core.async.t45628(self__.ch,self__.f,self__.map_LT_,meta45629__$1));
});

cljs.core.async.t45628.cljs$lang$type = true;

cljs.core.async.t45628.cljs$lang$ctorStr = "cljs.core.async/t45628";

cljs.core.async.t45628.cljs$lang$ctorPrWriter = (function (this__18264__auto__,writer__18265__auto__,opt__18266__auto__){
return cljs.core._write(writer__18265__auto__,"cljs.core.async/t45628");
});

cljs.core.async.__GT_t45628 = (function __GT_t45628(ch__$1,f__$1,map_LT___$1,meta45629){
return (new cljs.core.async.t45628(ch__$1,f__$1,map_LT___$1,meta45629));
});

}

return (new cljs.core.async.t45628(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t45643 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t45643 = (function (ch,f,map_GT_,meta45644){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta45644 = meta45644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t45643.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t45643.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__45646 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45646) : self__.f.call(null,G__45646));
})(),fn1);
});

cljs.core.async.t45643.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t45643.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t45643.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t45643.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t45643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45645){
var self__ = this;
var _45645__$1 = this;
return self__.meta45644;
});

cljs.core.async.t45643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45645,meta45644__$1){
var self__ = this;
var _45645__$1 = this;
return (new cljs.core.async.t45643(self__.ch,self__.f,self__.map_GT_,meta45644__$1));
});

cljs.core.async.t45643.cljs$lang$type = true;

cljs.core.async.t45643.cljs$lang$ctorStr = "cljs.core.async/t45643";

cljs.core.async.t45643.cljs$lang$ctorPrWriter = (function (this__18264__auto__,writer__18265__auto__,opt__18266__auto__){
return cljs.core._write(writer__18265__auto__,"cljs.core.async/t45643");
});

cljs.core.async.__GT_t45643 = (function __GT_t45643(ch__$1,f__$1,map_GT___$1,meta45644){
return (new cljs.core.async.t45643(ch__$1,f__$1,map_GT___$1,meta45644));
});

}

return (new cljs.core.async.t45643(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t45651 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t45651 = (function (ch,p,filter_GT_,meta45652){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta45652 = meta45652;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t45651.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t45651.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__45654 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__45654) : self__.p.call(null,G__45654));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t45651.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t45651.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t45651.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t45651.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t45651.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t45651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45653){
var self__ = this;
var _45653__$1 = this;
return self__.meta45652;
});

cljs.core.async.t45651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45653,meta45652__$1){
var self__ = this;
var _45653__$1 = this;
return (new cljs.core.async.t45651(self__.ch,self__.p,self__.filter_GT_,meta45652__$1));
});

cljs.core.async.t45651.cljs$lang$type = true;

cljs.core.async.t45651.cljs$lang$ctorStr = "cljs.core.async/t45651";

cljs.core.async.t45651.cljs$lang$ctorPrWriter = (function (this__18264__auto__,writer__18265__auto__,opt__18266__auto__){
return cljs.core._write(writer__18265__auto__,"cljs.core.async/t45651");
});

cljs.core.async.__GT_t45651 = (function __GT_t45651(ch__$1,p__$1,filter_GT___$1,meta45652){
return (new cljs.core.async.t45651(ch__$1,p__$1,filter_GT___$1,meta45652));
});

}

return (new cljs.core.async.t45651(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33655__auto___45742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto___45742,out){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto___45742,out){
return (function (state_45720){
var state_val_45721 = (state_45720[(1)]);
if((state_val_45721 === (7))){
var inst_45716 = (state_45720[(2)]);
var state_45720__$1 = state_45720;
var statearr_45722_45743 = state_45720__$1;
(statearr_45722_45743[(2)] = inst_45716);

(statearr_45722_45743[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45721 === (1))){
var state_45720__$1 = state_45720;
var statearr_45723_45744 = state_45720__$1;
(statearr_45723_45744[(2)] = null);

(statearr_45723_45744[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45721 === (4))){
var inst_45702 = (state_45720[(7)]);
var inst_45702__$1 = (state_45720[(2)]);
var inst_45703 = (inst_45702__$1 == null);
var state_45720__$1 = (function (){var statearr_45724 = state_45720;
(statearr_45724[(7)] = inst_45702__$1);

return statearr_45724;
})();
if(cljs.core.truth_(inst_45703)){
var statearr_45725_45745 = state_45720__$1;
(statearr_45725_45745[(1)] = (5));

} else {
var statearr_45726_45746 = state_45720__$1;
(statearr_45726_45746[(1)] = (6));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45721 === (6))){
var inst_45702 = (state_45720[(7)]);
var inst_45707 = (function (){var G__45727 = inst_45702;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__45727) : p.call(null,G__45727));
})();
var state_45720__$1 = state_45720;
if(cljs.core.truth_(inst_45707)){
var statearr_45728_45747 = state_45720__$1;
(statearr_45728_45747[(1)] = (8));

} else {
var statearr_45729_45748 = state_45720__$1;
(statearr_45729_45748[(1)] = (9));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45721 === (3))){
var inst_45718 = (state_45720[(2)]);
var state_45720__$1 = state_45720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45720__$1,inst_45718);
} else {
if((state_val_45721 === (2))){
var state_45720__$1 = state_45720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45720__$1,(4),ch);
} else {
if((state_val_45721 === (11))){
var inst_45710 = (state_45720[(2)]);
var state_45720__$1 = state_45720;
var statearr_45730_45749 = state_45720__$1;
(statearr_45730_45749[(2)] = inst_45710);

(statearr_45730_45749[(1)] = (10));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45721 === (9))){
var state_45720__$1 = state_45720;
var statearr_45731_45750 = state_45720__$1;
(statearr_45731_45750[(2)] = null);

(statearr_45731_45750[(1)] = (10));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45721 === (5))){
var inst_45705 = cljs.core.async.close_BANG_(out);
var state_45720__$1 = state_45720;
var statearr_45732_45751 = state_45720__$1;
(statearr_45732_45751[(2)] = inst_45705);

(statearr_45732_45751[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45721 === (10))){
var inst_45713 = (state_45720[(2)]);
var state_45720__$1 = (function (){var statearr_45733 = state_45720;
(statearr_45733[(8)] = inst_45713);

return statearr_45733;
})();
var statearr_45734_45752 = state_45720__$1;
(statearr_45734_45752[(2)] = null);

(statearr_45734_45752[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45721 === (8))){
var inst_45702 = (state_45720[(7)]);
var state_45720__$1 = state_45720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45720__$1,(11),out,inst_45702);
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
});})(c__33655__auto___45742,out))
;
return ((function (switch__33575__auto__,c__33655__auto___45742,out){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_45738 = [null,null,null,null,null,null,null,null,null];
(statearr_45738[(0)] = state_machine__33576__auto__);

(statearr_45738[(1)] = (1));

return statearr_45738;
});
var state_machine__33576__auto____1 = (function (state_45720){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_45720);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e45739){if((e45739 instanceof Object)){
var ex__33579__auto__ = e45739;
var statearr_45740_45753 = state_45720;
(statearr_45740_45753[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45720);

return cljs.core.constant$keyword$64;
} else {
throw e45739;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__45754 = state_45720;
state_45720 = G__45754;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_45720){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_45720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto___45742,out))
})();
var state__33657__auto__ = (function (){var statearr_45741 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_45741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___45742);

return statearr_45741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto___45742,out))
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
var c__33655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto__){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto__){
return (function (state_45924){
var state_val_45925 = (state_45924[(1)]);
if((state_val_45925 === (7))){
var inst_45920 = (state_45924[(2)]);
var state_45924__$1 = state_45924;
var statearr_45926_45968 = state_45924__$1;
(statearr_45926_45968[(2)] = inst_45920);

(statearr_45926_45968[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (20))){
var inst_45890 = (state_45924[(7)]);
var inst_45901 = (state_45924[(2)]);
var inst_45902 = cljs.core.next(inst_45890);
var inst_45876 = inst_45902;
var inst_45877 = null;
var inst_45878 = (0);
var inst_45879 = (0);
var state_45924__$1 = (function (){var statearr_45927 = state_45924;
(statearr_45927[(8)] = inst_45877);

(statearr_45927[(9)] = inst_45878);

(statearr_45927[(10)] = inst_45876);

(statearr_45927[(11)] = inst_45879);

(statearr_45927[(12)] = inst_45901);

return statearr_45927;
})();
var statearr_45928_45969 = state_45924__$1;
(statearr_45928_45969[(2)] = null);

(statearr_45928_45969[(1)] = (8));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (1))){
var state_45924__$1 = state_45924;
var statearr_45929_45970 = state_45924__$1;
(statearr_45929_45970[(2)] = null);

(statearr_45929_45970[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (4))){
var inst_45865 = (state_45924[(13)]);
var inst_45865__$1 = (state_45924[(2)]);
var inst_45866 = (inst_45865__$1 == null);
var state_45924__$1 = (function (){var statearr_45930 = state_45924;
(statearr_45930[(13)] = inst_45865__$1);

return statearr_45930;
})();
if(cljs.core.truth_(inst_45866)){
var statearr_45931_45971 = state_45924__$1;
(statearr_45931_45971[(1)] = (5));

} else {
var statearr_45932_45972 = state_45924__$1;
(statearr_45932_45972[(1)] = (6));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (15))){
var state_45924__$1 = state_45924;
var statearr_45936_45973 = state_45924__$1;
(statearr_45936_45973[(2)] = null);

(statearr_45936_45973[(1)] = (16));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (21))){
var state_45924__$1 = state_45924;
var statearr_45937_45974 = state_45924__$1;
(statearr_45937_45974[(2)] = null);

(statearr_45937_45974[(1)] = (23));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (13))){
var inst_45877 = (state_45924[(8)]);
var inst_45878 = (state_45924[(9)]);
var inst_45876 = (state_45924[(10)]);
var inst_45879 = (state_45924[(11)]);
var inst_45886 = (state_45924[(2)]);
var inst_45887 = (inst_45879 + (1));
var tmp45933 = inst_45877;
var tmp45934 = inst_45878;
var tmp45935 = inst_45876;
var inst_45876__$1 = tmp45935;
var inst_45877__$1 = tmp45933;
var inst_45878__$1 = tmp45934;
var inst_45879__$1 = inst_45887;
var state_45924__$1 = (function (){var statearr_45938 = state_45924;
(statearr_45938[(8)] = inst_45877__$1);

(statearr_45938[(9)] = inst_45878__$1);

(statearr_45938[(10)] = inst_45876__$1);

(statearr_45938[(14)] = inst_45886);

(statearr_45938[(11)] = inst_45879__$1);

return statearr_45938;
})();
var statearr_45939_45975 = state_45924__$1;
(statearr_45939_45975[(2)] = null);

(statearr_45939_45975[(1)] = (8));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (22))){
var state_45924__$1 = state_45924;
var statearr_45940_45976 = state_45924__$1;
(statearr_45940_45976[(2)] = null);

(statearr_45940_45976[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (6))){
var inst_45865 = (state_45924[(13)]);
var inst_45874 = (function (){var G__45941 = inst_45865;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45941) : f.call(null,G__45941));
})();
var inst_45875 = cljs.core.seq(inst_45874);
var inst_45876 = inst_45875;
var inst_45877 = null;
var inst_45878 = (0);
var inst_45879 = (0);
var state_45924__$1 = (function (){var statearr_45942 = state_45924;
(statearr_45942[(8)] = inst_45877);

(statearr_45942[(9)] = inst_45878);

(statearr_45942[(10)] = inst_45876);

(statearr_45942[(11)] = inst_45879);

return statearr_45942;
})();
var statearr_45943_45977 = state_45924__$1;
(statearr_45943_45977[(2)] = null);

(statearr_45943_45977[(1)] = (8));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (17))){
var inst_45890 = (state_45924[(7)]);
var inst_45894 = cljs.core.chunk_first(inst_45890);
var inst_45895 = cljs.core.chunk_rest(inst_45890);
var inst_45896 = cljs.core.count(inst_45894);
var inst_45876 = inst_45895;
var inst_45877 = inst_45894;
var inst_45878 = inst_45896;
var inst_45879 = (0);
var state_45924__$1 = (function (){var statearr_45944 = state_45924;
(statearr_45944[(8)] = inst_45877);

(statearr_45944[(9)] = inst_45878);

(statearr_45944[(10)] = inst_45876);

(statearr_45944[(11)] = inst_45879);

return statearr_45944;
})();
var statearr_45945_45978 = state_45924__$1;
(statearr_45945_45978[(2)] = null);

(statearr_45945_45978[(1)] = (8));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (3))){
var inst_45922 = (state_45924[(2)]);
var state_45924__$1 = state_45924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45924__$1,inst_45922);
} else {
if((state_val_45925 === (12))){
var inst_45910 = (state_45924[(2)]);
var state_45924__$1 = state_45924;
var statearr_45946_45979 = state_45924__$1;
(statearr_45946_45979[(2)] = inst_45910);

(statearr_45946_45979[(1)] = (9));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (2))){
var state_45924__$1 = state_45924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45924__$1,(4),in$);
} else {
if((state_val_45925 === (23))){
var inst_45918 = (state_45924[(2)]);
var state_45924__$1 = state_45924;
var statearr_45947_45980 = state_45924__$1;
(statearr_45947_45980[(2)] = inst_45918);

(statearr_45947_45980[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (19))){
var inst_45905 = (state_45924[(2)]);
var state_45924__$1 = state_45924;
var statearr_45948_45981 = state_45924__$1;
(statearr_45948_45981[(2)] = inst_45905);

(statearr_45948_45981[(1)] = (16));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (11))){
var inst_45876 = (state_45924[(10)]);
var inst_45890 = (state_45924[(7)]);
var inst_45890__$1 = cljs.core.seq(inst_45876);
var state_45924__$1 = (function (){var statearr_45949 = state_45924;
(statearr_45949[(7)] = inst_45890__$1);

return statearr_45949;
})();
if(inst_45890__$1){
var statearr_45950_45982 = state_45924__$1;
(statearr_45950_45982[(1)] = (14));

} else {
var statearr_45951_45983 = state_45924__$1;
(statearr_45951_45983[(1)] = (15));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (9))){
var inst_45912 = (state_45924[(2)]);
var inst_45913 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45924__$1 = (function (){var statearr_45952 = state_45924;
(statearr_45952[(15)] = inst_45912);

return statearr_45952;
})();
if(cljs.core.truth_(inst_45913)){
var statearr_45953_45984 = state_45924__$1;
(statearr_45953_45984[(1)] = (21));

} else {
var statearr_45954_45985 = state_45924__$1;
(statearr_45954_45985[(1)] = (22));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (5))){
var inst_45868 = cljs.core.async.close_BANG_(out);
var state_45924__$1 = state_45924;
var statearr_45955_45986 = state_45924__$1;
(statearr_45955_45986[(2)] = inst_45868);

(statearr_45955_45986[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (14))){
var inst_45890 = (state_45924[(7)]);
var inst_45892 = cljs.core.chunked_seq_QMARK_(inst_45890);
var state_45924__$1 = state_45924;
if(inst_45892){
var statearr_45956_45987 = state_45924__$1;
(statearr_45956_45987[(1)] = (17));

} else {
var statearr_45957_45988 = state_45924__$1;
(statearr_45957_45988[(1)] = (18));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (16))){
var inst_45908 = (state_45924[(2)]);
var state_45924__$1 = state_45924;
var statearr_45958_45989 = state_45924__$1;
(statearr_45958_45989[(2)] = inst_45908);

(statearr_45958_45989[(1)] = (12));


return cljs.core.constant$keyword$64;
} else {
if((state_val_45925 === (10))){
var inst_45877 = (state_45924[(8)]);
var inst_45879 = (state_45924[(11)]);
var inst_45884 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45877,inst_45879);
var state_45924__$1 = state_45924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45924__$1,(13),out,inst_45884);
} else {
if((state_val_45925 === (18))){
var inst_45890 = (state_45924[(7)]);
var inst_45899 = cljs.core.first(inst_45890);
var state_45924__$1 = state_45924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45924__$1,(20),out,inst_45899);
} else {
if((state_val_45925 === (8))){
var inst_45878 = (state_45924[(9)]);
var inst_45879 = (state_45924[(11)]);
var inst_45881 = (inst_45879 < inst_45878);
var inst_45882 = inst_45881;
var state_45924__$1 = state_45924;
if(cljs.core.truth_(inst_45882)){
var statearr_45959_45990 = state_45924__$1;
(statearr_45959_45990[(1)] = (10));

} else {
var statearr_45960_45991 = state_45924__$1;
(statearr_45960_45991[(1)] = (11));

}

return cljs.core.constant$keyword$64;
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
});})(c__33655__auto__))
;
return ((function (switch__33575__auto__,c__33655__auto__){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_45964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45964[(0)] = state_machine__33576__auto__);

(statearr_45964[(1)] = (1));

return statearr_45964;
});
var state_machine__33576__auto____1 = (function (state_45924){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_45924);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e45965){if((e45965 instanceof Object)){
var ex__33579__auto__ = e45965;
var statearr_45966_45992 = state_45924;
(statearr_45966_45992[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45924);

return cljs.core.constant$keyword$64;
} else {
throw e45965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__45993 = state_45924;
state_45924 = G__45993;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_45924){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_45924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto__))
})();
var state__33657__auto__ = (function (){var statearr_45967 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_45967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto__);

return statearr_45967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto__))
);

return c__33655__auto__;
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
var c__33655__auto___46098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto___46098,out){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto___46098,out){
return (function (state_46073){
var state_val_46074 = (state_46073[(1)]);
if((state_val_46074 === (7))){
var inst_46068 = (state_46073[(2)]);
var state_46073__$1 = state_46073;
var statearr_46075_46099 = state_46073__$1;
(statearr_46075_46099[(2)] = inst_46068);

(statearr_46075_46099[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46074 === (1))){
var inst_46050 = null;
var state_46073__$1 = (function (){var statearr_46076 = state_46073;
(statearr_46076[(7)] = inst_46050);

return statearr_46076;
})();
var statearr_46077_46100 = state_46073__$1;
(statearr_46077_46100[(2)] = null);

(statearr_46077_46100[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46074 === (4))){
var inst_46053 = (state_46073[(8)]);
var inst_46053__$1 = (state_46073[(2)]);
var inst_46054 = (inst_46053__$1 == null);
var inst_46055 = cljs.core.not(inst_46054);
var state_46073__$1 = (function (){var statearr_46078 = state_46073;
(statearr_46078[(8)] = inst_46053__$1);

return statearr_46078;
})();
if(inst_46055){
var statearr_46079_46101 = state_46073__$1;
(statearr_46079_46101[(1)] = (5));

} else {
var statearr_46080_46102 = state_46073__$1;
(statearr_46080_46102[(1)] = (6));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_46074 === (6))){
var state_46073__$1 = state_46073;
var statearr_46081_46103 = state_46073__$1;
(statearr_46081_46103[(2)] = null);

(statearr_46081_46103[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46074 === (3))){
var inst_46070 = (state_46073[(2)]);
var inst_46071 = cljs.core.async.close_BANG_(out);
var state_46073__$1 = (function (){var statearr_46082 = state_46073;
(statearr_46082[(9)] = inst_46070);

return statearr_46082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46073__$1,inst_46071);
} else {
if((state_val_46074 === (2))){
var state_46073__$1 = state_46073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46073__$1,(4),ch);
} else {
if((state_val_46074 === (11))){
var inst_46053 = (state_46073[(8)]);
var inst_46062 = (state_46073[(2)]);
var inst_46050 = inst_46053;
var state_46073__$1 = (function (){var statearr_46083 = state_46073;
(statearr_46083[(7)] = inst_46050);

(statearr_46083[(10)] = inst_46062);

return statearr_46083;
})();
var statearr_46084_46104 = state_46073__$1;
(statearr_46084_46104[(2)] = null);

(statearr_46084_46104[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46074 === (9))){
var inst_46053 = (state_46073[(8)]);
var state_46073__$1 = state_46073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46073__$1,(11),out,inst_46053);
} else {
if((state_val_46074 === (5))){
var inst_46053 = (state_46073[(8)]);
var inst_46050 = (state_46073[(7)]);
var inst_46057 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46053,inst_46050);
var state_46073__$1 = state_46073;
if(inst_46057){
var statearr_46086_46105 = state_46073__$1;
(statearr_46086_46105[(1)] = (8));

} else {
var statearr_46087_46106 = state_46073__$1;
(statearr_46087_46106[(1)] = (9));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_46074 === (10))){
var inst_46065 = (state_46073[(2)]);
var state_46073__$1 = state_46073;
var statearr_46088_46107 = state_46073__$1;
(statearr_46088_46107[(2)] = inst_46065);

(statearr_46088_46107[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46074 === (8))){
var inst_46050 = (state_46073[(7)]);
var tmp46085 = inst_46050;
var inst_46050__$1 = tmp46085;
var state_46073__$1 = (function (){var statearr_46089 = state_46073;
(statearr_46089[(7)] = inst_46050__$1);

return statearr_46089;
})();
var statearr_46090_46108 = state_46073__$1;
(statearr_46090_46108[(2)] = null);

(statearr_46090_46108[(1)] = (2));


return cljs.core.constant$keyword$64;
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
});})(c__33655__auto___46098,out))
;
return ((function (switch__33575__auto__,c__33655__auto___46098,out){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_46094 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46094[(0)] = state_machine__33576__auto__);

(statearr_46094[(1)] = (1));

return statearr_46094;
});
var state_machine__33576__auto____1 = (function (state_46073){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_46073);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e46095){if((e46095 instanceof Object)){
var ex__33579__auto__ = e46095;
var statearr_46096_46109 = state_46073;
(statearr_46096_46109[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46073);

return cljs.core.constant$keyword$64;
} else {
throw e46095;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__46110 = state_46073;
state_46073 = G__46110;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_46073){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_46073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto___46098,out))
})();
var state__33657__auto__ = (function (){var statearr_46097 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_46097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___46098);

return statearr_46097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto___46098,out))
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
var c__33655__auto___46248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto___46248,out){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto___46248,out){
return (function (state_46218){
var state_val_46219 = (state_46218[(1)]);
if((state_val_46219 === (7))){
var inst_46214 = (state_46218[(2)]);
var state_46218__$1 = state_46218;
var statearr_46220_46249 = state_46218__$1;
(statearr_46220_46249[(2)] = inst_46214);

(statearr_46220_46249[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46219 === (1))){
var inst_46181 = (new Array(n));
var inst_46182 = inst_46181;
var inst_46183 = (0);
var state_46218__$1 = (function (){var statearr_46221 = state_46218;
(statearr_46221[(7)] = inst_46182);

(statearr_46221[(8)] = inst_46183);

return statearr_46221;
})();
var statearr_46222_46250 = state_46218__$1;
(statearr_46222_46250[(2)] = null);

(statearr_46222_46250[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46219 === (4))){
var inst_46186 = (state_46218[(9)]);
var inst_46186__$1 = (state_46218[(2)]);
var inst_46187 = (inst_46186__$1 == null);
var inst_46188 = cljs.core.not(inst_46187);
var state_46218__$1 = (function (){var statearr_46223 = state_46218;
(statearr_46223[(9)] = inst_46186__$1);

return statearr_46223;
})();
if(inst_46188){
var statearr_46224_46251 = state_46218__$1;
(statearr_46224_46251[(1)] = (5));

} else {
var statearr_46225_46252 = state_46218__$1;
(statearr_46225_46252[(1)] = (6));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_46219 === (15))){
var inst_46208 = (state_46218[(2)]);
var state_46218__$1 = state_46218;
var statearr_46226_46253 = state_46218__$1;
(statearr_46226_46253[(2)] = inst_46208);

(statearr_46226_46253[(1)] = (14));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46219 === (13))){
var state_46218__$1 = state_46218;
var statearr_46227_46254 = state_46218__$1;
(statearr_46227_46254[(2)] = null);

(statearr_46227_46254[(1)] = (14));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46219 === (6))){
var inst_46183 = (state_46218[(8)]);
var inst_46204 = (inst_46183 > (0));
var state_46218__$1 = state_46218;
if(cljs.core.truth_(inst_46204)){
var statearr_46228_46255 = state_46218__$1;
(statearr_46228_46255[(1)] = (12));

} else {
var statearr_46229_46256 = state_46218__$1;
(statearr_46229_46256[(1)] = (13));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_46219 === (3))){
var inst_46216 = (state_46218[(2)]);
var state_46218__$1 = state_46218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46218__$1,inst_46216);
} else {
if((state_val_46219 === (12))){
var inst_46182 = (state_46218[(7)]);
var inst_46206 = cljs.core.vec(inst_46182);
var state_46218__$1 = state_46218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46218__$1,(15),out,inst_46206);
} else {
if((state_val_46219 === (2))){
var state_46218__$1 = state_46218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46218__$1,(4),ch);
} else {
if((state_val_46219 === (11))){
var inst_46198 = (state_46218[(2)]);
var inst_46199 = (new Array(n));
var inst_46182 = inst_46199;
var inst_46183 = (0);
var state_46218__$1 = (function (){var statearr_46230 = state_46218;
(statearr_46230[(10)] = inst_46198);

(statearr_46230[(7)] = inst_46182);

(statearr_46230[(8)] = inst_46183);

return statearr_46230;
})();
var statearr_46231_46257 = state_46218__$1;
(statearr_46231_46257[(2)] = null);

(statearr_46231_46257[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46219 === (9))){
var inst_46182 = (state_46218[(7)]);
var inst_46196 = cljs.core.vec(inst_46182);
var state_46218__$1 = state_46218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46218__$1,(11),out,inst_46196);
} else {
if((state_val_46219 === (5))){
var inst_46182 = (state_46218[(7)]);
var inst_46183 = (state_46218[(8)]);
var inst_46186 = (state_46218[(9)]);
var inst_46191 = (state_46218[(11)]);
var inst_46190 = (inst_46182[inst_46183] = inst_46186);
var inst_46191__$1 = (inst_46183 + (1));
var inst_46192 = (inst_46191__$1 < n);
var state_46218__$1 = (function (){var statearr_46232 = state_46218;
(statearr_46232[(11)] = inst_46191__$1);

(statearr_46232[(12)] = inst_46190);

return statearr_46232;
})();
if(cljs.core.truth_(inst_46192)){
var statearr_46233_46258 = state_46218__$1;
(statearr_46233_46258[(1)] = (8));

} else {
var statearr_46234_46259 = state_46218__$1;
(statearr_46234_46259[(1)] = (9));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_46219 === (14))){
var inst_46211 = (state_46218[(2)]);
var inst_46212 = cljs.core.async.close_BANG_(out);
var state_46218__$1 = (function (){var statearr_46236 = state_46218;
(statearr_46236[(13)] = inst_46211);

return statearr_46236;
})();
var statearr_46237_46260 = state_46218__$1;
(statearr_46237_46260[(2)] = inst_46212);

(statearr_46237_46260[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46219 === (10))){
var inst_46202 = (state_46218[(2)]);
var state_46218__$1 = state_46218;
var statearr_46238_46261 = state_46218__$1;
(statearr_46238_46261[(2)] = inst_46202);

(statearr_46238_46261[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46219 === (8))){
var inst_46182 = (state_46218[(7)]);
var inst_46191 = (state_46218[(11)]);
var tmp46235 = inst_46182;
var inst_46182__$1 = tmp46235;
var inst_46183 = inst_46191;
var state_46218__$1 = (function (){var statearr_46239 = state_46218;
(statearr_46239[(7)] = inst_46182__$1);

(statearr_46239[(8)] = inst_46183);

return statearr_46239;
})();
var statearr_46240_46262 = state_46218__$1;
(statearr_46240_46262[(2)] = null);

(statearr_46240_46262[(1)] = (2));


return cljs.core.constant$keyword$64;
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
});})(c__33655__auto___46248,out))
;
return ((function (switch__33575__auto__,c__33655__auto___46248,out){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_46244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46244[(0)] = state_machine__33576__auto__);

(statearr_46244[(1)] = (1));

return statearr_46244;
});
var state_machine__33576__auto____1 = (function (state_46218){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_46218);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e46245){if((e46245 instanceof Object)){
var ex__33579__auto__ = e46245;
var statearr_46246_46263 = state_46218;
(statearr_46246_46263[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46218);

return cljs.core.constant$keyword$64;
} else {
throw e46245;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__46264 = state_46218;
state_46218 = G__46264;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_46218){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_46218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto___46248,out))
})();
var state__33657__auto__ = (function (){var statearr_46247 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_46247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___46248);

return statearr_46247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto___46248,out))
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
var c__33655__auto___46412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto___46412,out){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto___46412,out){
return (function (state_46381){
var state_val_46382 = (state_46381[(1)]);
if((state_val_46382 === (7))){
var inst_46377 = (state_46381[(2)]);
var state_46381__$1 = state_46381;
var statearr_46383_46413 = state_46381__$1;
(statearr_46383_46413[(2)] = inst_46377);

(statearr_46383_46413[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46382 === (1))){
var inst_46340 = [];
var inst_46341 = inst_46340;
var inst_46342 = cljs.core.constant$keyword$79;
var state_46381__$1 = (function (){var statearr_46384 = state_46381;
(statearr_46384[(7)] = inst_46341);

(statearr_46384[(8)] = inst_46342);

return statearr_46384;
})();
var statearr_46385_46414 = state_46381__$1;
(statearr_46385_46414[(2)] = null);

(statearr_46385_46414[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46382 === (4))){
var inst_46345 = (state_46381[(9)]);
var inst_46345__$1 = (state_46381[(2)]);
var inst_46346 = (inst_46345__$1 == null);
var inst_46347 = cljs.core.not(inst_46346);
var state_46381__$1 = (function (){var statearr_46386 = state_46381;
(statearr_46386[(9)] = inst_46345__$1);

return statearr_46386;
})();
if(inst_46347){
var statearr_46387_46415 = state_46381__$1;
(statearr_46387_46415[(1)] = (5));

} else {
var statearr_46388_46416 = state_46381__$1;
(statearr_46388_46416[(1)] = (6));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_46382 === (15))){
var inst_46371 = (state_46381[(2)]);
var state_46381__$1 = state_46381;
var statearr_46389_46417 = state_46381__$1;
(statearr_46389_46417[(2)] = inst_46371);

(statearr_46389_46417[(1)] = (14));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46382 === (13))){
var state_46381__$1 = state_46381;
var statearr_46390_46418 = state_46381__$1;
(statearr_46390_46418[(2)] = null);

(statearr_46390_46418[(1)] = (14));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46382 === (6))){
var inst_46341 = (state_46381[(7)]);
var inst_46366 = inst_46341.length;
var inst_46367 = (inst_46366 > (0));
var state_46381__$1 = state_46381;
if(cljs.core.truth_(inst_46367)){
var statearr_46391_46419 = state_46381__$1;
(statearr_46391_46419[(1)] = (12));

} else {
var statearr_46392_46420 = state_46381__$1;
(statearr_46392_46420[(1)] = (13));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_46382 === (3))){
var inst_46379 = (state_46381[(2)]);
var state_46381__$1 = state_46381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46381__$1,inst_46379);
} else {
if((state_val_46382 === (12))){
var inst_46341 = (state_46381[(7)]);
var inst_46369 = cljs.core.vec(inst_46341);
var state_46381__$1 = state_46381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46381__$1,(15),out,inst_46369);
} else {
if((state_val_46382 === (2))){
var state_46381__$1 = state_46381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46381__$1,(4),ch);
} else {
if((state_val_46382 === (11))){
var inst_46349 = (state_46381[(10)]);
var inst_46345 = (state_46381[(9)]);
var inst_46359 = (state_46381[(2)]);
var inst_46360 = [];
var inst_46361 = inst_46360.push(inst_46345);
var inst_46341 = inst_46360;
var inst_46342 = inst_46349;
var state_46381__$1 = (function (){var statearr_46393 = state_46381;
(statearr_46393[(11)] = inst_46359);

(statearr_46393[(7)] = inst_46341);

(statearr_46393[(8)] = inst_46342);

(statearr_46393[(12)] = inst_46361);

return statearr_46393;
})();
var statearr_46394_46421 = state_46381__$1;
(statearr_46394_46421[(2)] = null);

(statearr_46394_46421[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46382 === (9))){
var inst_46341 = (state_46381[(7)]);
var inst_46357 = cljs.core.vec(inst_46341);
var state_46381__$1 = state_46381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46381__$1,(11),out,inst_46357);
} else {
if((state_val_46382 === (5))){
var inst_46342 = (state_46381[(8)]);
var inst_46349 = (state_46381[(10)]);
var inst_46345 = (state_46381[(9)]);
var inst_46349__$1 = (function (){var G__46395 = inst_46345;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46395) : f.call(null,G__46395));
})();
var inst_46350 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46349__$1,inst_46342);
var inst_46351 = cljs.core.keyword_identical_QMARK_(inst_46342,cljs.core.constant$keyword$79);
var inst_46352 = (inst_46350) || (inst_46351);
var state_46381__$1 = (function (){var statearr_46396 = state_46381;
(statearr_46396[(10)] = inst_46349__$1);

return statearr_46396;
})();
if(cljs.core.truth_(inst_46352)){
var statearr_46397_46422 = state_46381__$1;
(statearr_46397_46422[(1)] = (8));

} else {
var statearr_46398_46423 = state_46381__$1;
(statearr_46398_46423[(1)] = (9));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_46382 === (14))){
var inst_46374 = (state_46381[(2)]);
var inst_46375 = cljs.core.async.close_BANG_(out);
var state_46381__$1 = (function (){var statearr_46400 = state_46381;
(statearr_46400[(13)] = inst_46374);

return statearr_46400;
})();
var statearr_46401_46424 = state_46381__$1;
(statearr_46401_46424[(2)] = inst_46375);

(statearr_46401_46424[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46382 === (10))){
var inst_46364 = (state_46381[(2)]);
var state_46381__$1 = state_46381;
var statearr_46402_46425 = state_46381__$1;
(statearr_46402_46425[(2)] = inst_46364);

(statearr_46402_46425[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_46382 === (8))){
var inst_46341 = (state_46381[(7)]);
var inst_46349 = (state_46381[(10)]);
var inst_46345 = (state_46381[(9)]);
var inst_46354 = inst_46341.push(inst_46345);
var tmp46399 = inst_46341;
var inst_46341__$1 = tmp46399;
var inst_46342 = inst_46349;
var state_46381__$1 = (function (){var statearr_46403 = state_46381;
(statearr_46403[(14)] = inst_46354);

(statearr_46403[(7)] = inst_46341__$1);

(statearr_46403[(8)] = inst_46342);

return statearr_46403;
})();
var statearr_46404_46426 = state_46381__$1;
(statearr_46404_46426[(2)] = null);

(statearr_46404_46426[(1)] = (2));


return cljs.core.constant$keyword$64;
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
});})(c__33655__auto___46412,out))
;
return ((function (switch__33575__auto__,c__33655__auto___46412,out){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_46408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46408[(0)] = state_machine__33576__auto__);

(statearr_46408[(1)] = (1));

return statearr_46408;
});
var state_machine__33576__auto____1 = (function (state_46381){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_46381);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e46409){if((e46409 instanceof Object)){
var ex__33579__auto__ = e46409;
var statearr_46410_46427 = state_46381;
(statearr_46410_46427[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46381);

return cljs.core.constant$keyword$64;
} else {
throw e46409;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__46428 = state_46381;
state_46381 = G__46428;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_46381){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_46381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto___46412,out))
})();
var state__33657__auto__ = (function (){var statearr_46411 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_46411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto___46412);

return statearr_46411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto___46412,out))
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
