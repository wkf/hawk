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
if(typeof cljs.core.async.t33006 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33006 = (function (f,fn_handler,meta33007){
this.f = f;
this.fn_handler = fn_handler;
this.meta33007 = meta33007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33006.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33006.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t33006.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t33006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33008){
var self__ = this;
var _33008__$1 = this;
return self__.meta33007;
});

cljs.core.async.t33006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33008,meta33007__$1){
var self__ = this;
var _33008__$1 = this;
return (new cljs.core.async.t33006(self__.f,self__.fn_handler,meta33007__$1));
});

cljs.core.async.t33006.cljs$lang$type = true;

cljs.core.async.t33006.cljs$lang$ctorStr = "cljs.core.async/t33006";

cljs.core.async.t33006.cljs$lang$ctorPrWriter = (function (this__17052__auto__,writer__17053__auto__,opt__17054__auto__){
return cljs.core._write(writer__17053__auto__,"cljs.core.async/t33006");
});

cljs.core.async.__GT_t33006 = (function __GT_t33006(f__$1,fn_handler__$1,meta33007){
return (new cljs.core.async.t33006(f__$1,fn_handler__$1,meta33007));
});

}

return (new cljs.core.async.t33006(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33010 = buff;
if(G__33010){
var bit__17146__auto__ = null;
if(cljs.core.truth_((function (){var or__16465__auto__ = bit__17146__auto__;
if(cljs.core.truth_(or__16465__auto__)){
return or__16465__auto__;
} else {
return G__33010.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__33010.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__33010);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__33010);
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
var val_33027 = (function (){var G__33024 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33024) : cljs.core.deref.call(null,G__33024));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__33025_33028 = val_33027;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__33025_33028) : fn1.call(null,G__33025_33028));
} else {
cljs.core.async.impl.dispatch.run(((function (val_33027,ret){
return (function (){
var G__33026 = val_33027;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__33026) : fn1.call(null,G__33026));
});})(val_33027,ret))
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
var G__33037 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33037) : cljs.core.deref.call(null,G__33037));
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
var ret = (function (){var G__33038 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33038) : cljs.core.deref.call(null,G__33038));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__33039_33041 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__33039_33041) : fn1.call(null,G__33039_33041));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__33040 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__33040) : fn1.call(null,G__33040));
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
var n__17352__auto___33042 = n;
var x_33043 = (0);
while(true){
if((x_33043 < n__17352__auto___33042)){
(a[x_33043] = (0));

var G__33044 = (x_33043 + (1));
x_33043 = G__33044;
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

var G__33045 = (i + (1));
i = G__33045;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__33053 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33053) : cljs.core.atom.call(null,G__33053));
})();
if(typeof cljs.core.async.t33054 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33054 = (function (flag,alt_flag,meta33055){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33055 = meta33055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33054.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__33057 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33057) : cljs.core.deref.call(null,G__33057));
});})(flag))
;

cljs.core.async.t33054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__33058_33060 = self__.flag;
var G__33059_33061 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33058_33060,G__33059_33061) : cljs.core.reset_BANG_.call(null,G__33058_33060,G__33059_33061));

return true;
});})(flag))
;

cljs.core.async.t33054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33056){
var self__ = this;
var _33056__$1 = this;
return self__.meta33055;
});})(flag))
;

cljs.core.async.t33054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33056,meta33055__$1){
var self__ = this;
var _33056__$1 = this;
return (new cljs.core.async.t33054(self__.flag,self__.alt_flag,meta33055__$1));
});})(flag))
;

cljs.core.async.t33054.cljs$lang$type = true;

cljs.core.async.t33054.cljs$lang$ctorStr = "cljs.core.async/t33054";

cljs.core.async.t33054.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17052__auto__,writer__17053__auto__,opt__17054__auto__){
return cljs.core._write(writer__17053__auto__,"cljs.core.async/t33054");
});})(flag))
;

cljs.core.async.__GT_t33054 = ((function (flag){
return (function __GT_t33054(flag__$1,alt_flag__$1,meta33055){
return (new cljs.core.async.t33054(flag__$1,alt_flag__$1,meta33055));
});})(flag))
;

}

return (new cljs.core.async.t33054(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t33065 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33065 = (function (cb,flag,alt_handler,meta33066){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33066 = meta33066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33065.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t33065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t33065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33067){
var self__ = this;
var _33067__$1 = this;
return self__.meta33066;
});

cljs.core.async.t33065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33067,meta33066__$1){
var self__ = this;
var _33067__$1 = this;
return (new cljs.core.async.t33065(self__.cb,self__.flag,self__.alt_handler,meta33066__$1));
});

cljs.core.async.t33065.cljs$lang$type = true;

cljs.core.async.t33065.cljs$lang$ctorStr = "cljs.core.async/t33065";

cljs.core.async.t33065.cljs$lang$ctorPrWriter = (function (this__17052__auto__,writer__17053__auto__,opt__17054__auto__){
return cljs.core._write(writer__17053__auto__,"cljs.core.async/t33065");
});

cljs.core.async.__GT_t33065 = (function __GT_t33065(cb__$1,flag__$1,alt_handler__$1,meta33066){
return (new cljs.core.async.t33065(cb__$1,flag__$1,alt_handler__$1,meta33066));
});

}

return (new cljs.core.async.t33065(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__33075 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__33075) : port.call(null,G__33075));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__33076 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__33076) : port.call(null,G__33076));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33068_SHARP_){
var G__33077 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33068_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33077) : fret.call(null,G__33077));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33069_SHARP_){
var G__33078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33069_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33078) : fret.call(null,G__33078));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33079 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33079) : cljs.core.deref.call(null,G__33079));
})(),(function (){var or__16465__auto__ = wport;
if(cljs.core.truth_(or__16465__auto__)){
return or__16465__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33080 = (i + (1));
i = G__33080;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16465__auto__ = ret;
if(cljs.core.truth_(or__16465__auto__)){
return or__16465__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__16453__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__16453__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__16453__auto__;
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
var alts_BANG___delegate = function (ports,p__33081){
var map__33083 = p__33081;
var map__33083__$1 = ((cljs.core.seq_QMARK_(map__33083))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33083):map__33083);
var opts = map__33083__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__33081 = null;
if (arguments.length > 1) {
var G__33084__i = 0, G__33084__a = new Array(arguments.length -  1);
while (G__33084__i < G__33084__a.length) {G__33084__a[G__33084__i] = arguments[G__33084__i + 1]; ++G__33084__i;}
  p__33081 = new cljs.core.IndexedSeq(G__33084__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__33081);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33085){
var ports = cljs.core.first(arglist__33085);
var p__33081 = cljs.core.rest(arglist__33085);
return alts_BANG___delegate(ports,p__33081);
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
var c__23603__auto___33183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto___33183){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto___33183){
return (function (state_33159){
var state_val_33160 = (state_33159[(1)]);
if((state_val_33160 === (7))){
var inst_33155 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
var statearr_33161_33184 = state_33159__$1;
(statearr_33161_33184[(2)] = inst_33155);

(statearr_33161_33184[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33160 === (1))){
var state_33159__$1 = state_33159;
var statearr_33162_33185 = state_33159__$1;
(statearr_33162_33185[(2)] = null);

(statearr_33162_33185[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33160 === (4))){
var inst_33138 = (state_33159[(7)]);
var inst_33138__$1 = (state_33159[(2)]);
var inst_33139 = (inst_33138__$1 == null);
var state_33159__$1 = (function (){var statearr_33163 = state_33159;
(statearr_33163[(7)] = inst_33138__$1);

return statearr_33163;
})();
if(cljs.core.truth_(inst_33139)){
var statearr_33164_33186 = state_33159__$1;
(statearr_33164_33186[(1)] = (5));

} else {
var statearr_33165_33187 = state_33159__$1;
(statearr_33165_33187[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33160 === (13))){
var state_33159__$1 = state_33159;
var statearr_33166_33188 = state_33159__$1;
(statearr_33166_33188[(2)] = null);

(statearr_33166_33188[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33160 === (6))){
var inst_33138 = (state_33159[(7)]);
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33159__$1,(11),to,inst_33138);
} else {
if((state_val_33160 === (3))){
var inst_33157 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33159__$1,inst_33157);
} else {
if((state_val_33160 === (12))){
var state_33159__$1 = state_33159;
var statearr_33167_33189 = state_33159__$1;
(statearr_33167_33189[(2)] = null);

(statearr_33167_33189[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33160 === (2))){
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33159__$1,(4),from);
} else {
if((state_val_33160 === (11))){
var inst_33148 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
if(cljs.core.truth_(inst_33148)){
var statearr_33168_33190 = state_33159__$1;
(statearr_33168_33190[(1)] = (12));

} else {
var statearr_33169_33191 = state_33159__$1;
(statearr_33169_33191[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33160 === (9))){
var state_33159__$1 = state_33159;
var statearr_33170_33192 = state_33159__$1;
(statearr_33170_33192[(2)] = null);

(statearr_33170_33192[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33160 === (5))){
var state_33159__$1 = state_33159;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33171_33193 = state_33159__$1;
(statearr_33171_33193[(1)] = (8));

} else {
var statearr_33172_33194 = state_33159__$1;
(statearr_33172_33194[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33160 === (14))){
var inst_33153 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
var statearr_33173_33195 = state_33159__$1;
(statearr_33173_33195[(2)] = inst_33153);

(statearr_33173_33195[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33160 === (10))){
var inst_33145 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
var statearr_33174_33196 = state_33159__$1;
(statearr_33174_33196[(2)] = inst_33145);

(statearr_33174_33196[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33160 === (8))){
var inst_33142 = cljs.core.async.close_BANG_(to);
var state_33159__$1 = state_33159;
var statearr_33175_33197 = state_33159__$1;
(statearr_33175_33197[(2)] = inst_33142);

(statearr_33175_33197[(1)] = (10));


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
});})(c__23603__auto___33183))
;
return ((function (switch__23523__auto__,c__23603__auto___33183){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_33179 = [null,null,null,null,null,null,null,null];
(statearr_33179[(0)] = state_machine__23524__auto__);

(statearr_33179[(1)] = (1));

return statearr_33179;
});
var state_machine__23524__auto____1 = (function (state_33159){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_33159);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e33180){if((e33180 instanceof Object)){
var ex__23527__auto__ = e33180;
var statearr_33181_33198 = state_33159;
(statearr_33181_33198[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33159);

return cljs.core.constant$keyword$21;
} else {
throw e33180;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__33199 = state_33159;
state_33159 = G__33199;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_33159){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_33159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto___33183))
})();
var state__23605__auto__ = (function (){var statearr_33182 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_33182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___33183);

return statearr_33182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto___33183))
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
return (function (p__33385){
var vec__33386 = p__33385;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33386,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33386,(1),null);
var job = vec__33386;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__23603__auto___33570 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto___33570,res,vec__33386,v,p,job,jobs,results){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto___33570,res,vec__33386,v,p,job,jobs,results){
return (function (state_33391){
var state_val_33392 = (state_33391[(1)]);
if((state_val_33392 === (2))){
var inst_33388 = (state_33391[(2)]);
var inst_33389 = cljs.core.async.close_BANG_(res);
var state_33391__$1 = (function (){var statearr_33393 = state_33391;
(statearr_33393[(7)] = inst_33388);

return statearr_33393;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33391__$1,inst_33389);
} else {
if((state_val_33392 === (1))){
var state_33391__$1 = state_33391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33391__$1,(2),res,v);
} else {
return null;
}
}
});})(c__23603__auto___33570,res,vec__33386,v,p,job,jobs,results))
;
return ((function (switch__23523__auto__,c__23603__auto___33570,res,vec__33386,v,p,job,jobs,results){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_33397 = [null,null,null,null,null,null,null,null];
(statearr_33397[(0)] = state_machine__23524__auto__);

(statearr_33397[(1)] = (1));

return statearr_33397;
});
var state_machine__23524__auto____1 = (function (state_33391){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_33391);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e33398){if((e33398 instanceof Object)){
var ex__23527__auto__ = e33398;
var statearr_33399_33571 = state_33391;
(statearr_33399_33571[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33391);

return cljs.core.constant$keyword$21;
} else {
throw e33398;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__33572 = state_33391;
state_33391 = G__33572;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_33391){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_33391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto___33570,res,vec__33386,v,p,job,jobs,results))
})();
var state__23605__auto__ = (function (){var statearr_33400 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_33400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___33570);

return statearr_33400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto___33570,res,vec__33386,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33401){
var vec__33402 = p__33401;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33402,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33402,(1),null);
var job = vec__33402;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__33403_33573 = v;
var G__33404_33574 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__33403_33573,G__33404_33574) : xf.call(null,G__33403_33573,G__33404_33574));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__17352__auto___33575 = n;
var __33576 = (0);
while(true){
if((__33576 < n__17352__auto___33575)){
var G__33405_33577 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33405_33577) {
case "async":
var c__23603__auto___33579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33576,c__23603__auto___33579,G__33405_33577,n__17352__auto___33575,jobs,results,process,async){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (__33576,c__23603__auto___33579,G__33405_33577,n__17352__auto___33575,jobs,results,process,async){
return (function (state_33418){
var state_val_33419 = (state_33418[(1)]);
if((state_val_33419 === (7))){
var inst_33414 = (state_33418[(2)]);
var state_33418__$1 = state_33418;
var statearr_33420_33580 = state_33418__$1;
(statearr_33420_33580[(2)] = inst_33414);

(statearr_33420_33580[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33419 === (6))){
var state_33418__$1 = state_33418;
var statearr_33421_33581 = state_33418__$1;
(statearr_33421_33581[(2)] = null);

(statearr_33421_33581[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33419 === (5))){
var state_33418__$1 = state_33418;
var statearr_33422_33582 = state_33418__$1;
(statearr_33422_33582[(2)] = null);

(statearr_33422_33582[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33419 === (4))){
var inst_33408 = (state_33418[(2)]);
var inst_33409 = async(inst_33408);
var state_33418__$1 = state_33418;
if(cljs.core.truth_(inst_33409)){
var statearr_33423_33583 = state_33418__$1;
(statearr_33423_33583[(1)] = (5));

} else {
var statearr_33424_33584 = state_33418__$1;
(statearr_33424_33584[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33419 === (3))){
var inst_33416 = (state_33418[(2)]);
var state_33418__$1 = state_33418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33418__$1,inst_33416);
} else {
if((state_val_33419 === (2))){
var state_33418__$1 = state_33418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33418__$1,(4),jobs);
} else {
if((state_val_33419 === (1))){
var state_33418__$1 = state_33418;
var statearr_33425_33585 = state_33418__$1;
(statearr_33425_33585[(2)] = null);

(statearr_33425_33585[(1)] = (2));


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
});})(__33576,c__23603__auto___33579,G__33405_33577,n__17352__auto___33575,jobs,results,process,async))
;
return ((function (__33576,switch__23523__auto__,c__23603__auto___33579,G__33405_33577,n__17352__auto___33575,jobs,results,process,async){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_33429 = [null,null,null,null,null,null,null];
(statearr_33429[(0)] = state_machine__23524__auto__);

(statearr_33429[(1)] = (1));

return statearr_33429;
});
var state_machine__23524__auto____1 = (function (state_33418){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_33418);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e33430){if((e33430 instanceof Object)){
var ex__23527__auto__ = e33430;
var statearr_33431_33586 = state_33418;
(statearr_33431_33586[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33418);

return cljs.core.constant$keyword$21;
} else {
throw e33430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__33587 = state_33418;
state_33418 = G__33587;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_33418){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_33418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(__33576,switch__23523__auto__,c__23603__auto___33579,G__33405_33577,n__17352__auto___33575,jobs,results,process,async))
})();
var state__23605__auto__ = (function (){var statearr_33432 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_33432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___33579);

return statearr_33432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(__33576,c__23603__auto___33579,G__33405_33577,n__17352__auto___33575,jobs,results,process,async))
);


break;
case "compute":
var c__23603__auto___33588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33576,c__23603__auto___33588,G__33405_33577,n__17352__auto___33575,jobs,results,process,async){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (__33576,c__23603__auto___33588,G__33405_33577,n__17352__auto___33575,jobs,results,process,async){
return (function (state_33445){
var state_val_33446 = (state_33445[(1)]);
if((state_val_33446 === (7))){
var inst_33441 = (state_33445[(2)]);
var state_33445__$1 = state_33445;
var statearr_33447_33589 = state_33445__$1;
(statearr_33447_33589[(2)] = inst_33441);

(statearr_33447_33589[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33446 === (6))){
var state_33445__$1 = state_33445;
var statearr_33448_33590 = state_33445__$1;
(statearr_33448_33590[(2)] = null);

(statearr_33448_33590[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33446 === (5))){
var state_33445__$1 = state_33445;
var statearr_33449_33591 = state_33445__$1;
(statearr_33449_33591[(2)] = null);

(statearr_33449_33591[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33446 === (4))){
var inst_33435 = (state_33445[(2)]);
var inst_33436 = process(inst_33435);
var state_33445__$1 = state_33445;
if(cljs.core.truth_(inst_33436)){
var statearr_33450_33592 = state_33445__$1;
(statearr_33450_33592[(1)] = (5));

} else {
var statearr_33451_33593 = state_33445__$1;
(statearr_33451_33593[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33446 === (3))){
var inst_33443 = (state_33445[(2)]);
var state_33445__$1 = state_33445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33445__$1,inst_33443);
} else {
if((state_val_33446 === (2))){
var state_33445__$1 = state_33445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33445__$1,(4),jobs);
} else {
if((state_val_33446 === (1))){
var state_33445__$1 = state_33445;
var statearr_33452_33594 = state_33445__$1;
(statearr_33452_33594[(2)] = null);

(statearr_33452_33594[(1)] = (2));


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
});})(__33576,c__23603__auto___33588,G__33405_33577,n__17352__auto___33575,jobs,results,process,async))
;
return ((function (__33576,switch__23523__auto__,c__23603__auto___33588,G__33405_33577,n__17352__auto___33575,jobs,results,process,async){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_33456 = [null,null,null,null,null,null,null];
(statearr_33456[(0)] = state_machine__23524__auto__);

(statearr_33456[(1)] = (1));

return statearr_33456;
});
var state_machine__23524__auto____1 = (function (state_33445){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_33445);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e33457){if((e33457 instanceof Object)){
var ex__23527__auto__ = e33457;
var statearr_33458_33595 = state_33445;
(statearr_33458_33595[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33445);

return cljs.core.constant$keyword$21;
} else {
throw e33457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__33596 = state_33445;
state_33445 = G__33596;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_33445){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_33445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(__33576,switch__23523__auto__,c__23603__auto___33588,G__33405_33577,n__17352__auto___33575,jobs,results,process,async))
})();
var state__23605__auto__ = (function (){var statearr_33459 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_33459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___33588);

return statearr_33459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(__33576,c__23603__auto___33588,G__33405_33577,n__17352__auto___33575,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__33597 = (__33576 + (1));
__33576 = G__33597;
continue;
} else {
}
break;
}

var c__23603__auto___33598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto___33598,jobs,results,process,async){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto___33598,jobs,results,process,async){
return (function (state_33481){
var state_val_33482 = (state_33481[(1)]);
if((state_val_33482 === (9))){
var inst_33474 = (state_33481[(2)]);
var state_33481__$1 = (function (){var statearr_33483 = state_33481;
(statearr_33483[(7)] = inst_33474);

return statearr_33483;
})();
var statearr_33484_33599 = state_33481__$1;
(statearr_33484_33599[(2)] = null);

(statearr_33484_33599[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33482 === (8))){
var inst_33467 = (state_33481[(8)]);
var inst_33472 = (state_33481[(2)]);
var state_33481__$1 = (function (){var statearr_33485 = state_33481;
(statearr_33485[(9)] = inst_33472);

return statearr_33485;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33481__$1,(9),results,inst_33467);
} else {
if((state_val_33482 === (7))){
var inst_33477 = (state_33481[(2)]);
var state_33481__$1 = state_33481;
var statearr_33486_33600 = state_33481__$1;
(statearr_33486_33600[(2)] = inst_33477);

(statearr_33486_33600[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33482 === (6))){
var inst_33467 = (state_33481[(8)]);
var inst_33462 = (state_33481[(10)]);
var inst_33467__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33468 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33469 = [inst_33462,inst_33467__$1];
var inst_33470 = (new cljs.core.PersistentVector(null,2,(5),inst_33468,inst_33469,null));
var state_33481__$1 = (function (){var statearr_33487 = state_33481;
(statearr_33487[(8)] = inst_33467__$1);

return statearr_33487;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33481__$1,(8),jobs,inst_33470);
} else {
if((state_val_33482 === (5))){
var inst_33465 = cljs.core.async.close_BANG_(jobs);
var state_33481__$1 = state_33481;
var statearr_33488_33601 = state_33481__$1;
(statearr_33488_33601[(2)] = inst_33465);

(statearr_33488_33601[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33482 === (4))){
var inst_33462 = (state_33481[(10)]);
var inst_33462__$1 = (state_33481[(2)]);
var inst_33463 = (inst_33462__$1 == null);
var state_33481__$1 = (function (){var statearr_33489 = state_33481;
(statearr_33489[(10)] = inst_33462__$1);

return statearr_33489;
})();
if(cljs.core.truth_(inst_33463)){
var statearr_33490_33602 = state_33481__$1;
(statearr_33490_33602[(1)] = (5));

} else {
var statearr_33491_33603 = state_33481__$1;
(statearr_33491_33603[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33482 === (3))){
var inst_33479 = (state_33481[(2)]);
var state_33481__$1 = state_33481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33481__$1,inst_33479);
} else {
if((state_val_33482 === (2))){
var state_33481__$1 = state_33481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33481__$1,(4),from);
} else {
if((state_val_33482 === (1))){
var state_33481__$1 = state_33481;
var statearr_33492_33604 = state_33481__$1;
(statearr_33492_33604[(2)] = null);

(statearr_33492_33604[(1)] = (2));


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
});})(c__23603__auto___33598,jobs,results,process,async))
;
return ((function (switch__23523__auto__,c__23603__auto___33598,jobs,results,process,async){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_33496 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33496[(0)] = state_machine__23524__auto__);

(statearr_33496[(1)] = (1));

return statearr_33496;
});
var state_machine__23524__auto____1 = (function (state_33481){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_33481);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e33497){if((e33497 instanceof Object)){
var ex__23527__auto__ = e33497;
var statearr_33498_33605 = state_33481;
(statearr_33498_33605[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33481);

return cljs.core.constant$keyword$21;
} else {
throw e33497;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__33606 = state_33481;
state_33481 = G__33606;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_33481){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_33481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto___33598,jobs,results,process,async))
})();
var state__23605__auto__ = (function (){var statearr_33499 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_33499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___33598);

return statearr_33499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto___33598,jobs,results,process,async))
);


var c__23603__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto__,jobs,results,process,async){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto__,jobs,results,process,async){
return (function (state_33537){
var state_val_33538 = (state_33537[(1)]);
if((state_val_33538 === (7))){
var inst_33533 = (state_33537[(2)]);
var state_33537__$1 = state_33537;
var statearr_33539_33607 = state_33537__$1;
(statearr_33539_33607[(2)] = inst_33533);

(statearr_33539_33607[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33538 === (20))){
var state_33537__$1 = state_33537;
var statearr_33540_33608 = state_33537__$1;
(statearr_33540_33608[(2)] = null);

(statearr_33540_33608[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33538 === (1))){
var state_33537__$1 = state_33537;
var statearr_33541_33609 = state_33537__$1;
(statearr_33541_33609[(2)] = null);

(statearr_33541_33609[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33538 === (4))){
var inst_33502 = (state_33537[(7)]);
var inst_33502__$1 = (state_33537[(2)]);
var inst_33503 = (inst_33502__$1 == null);
var state_33537__$1 = (function (){var statearr_33542 = state_33537;
(statearr_33542[(7)] = inst_33502__$1);

return statearr_33542;
})();
if(cljs.core.truth_(inst_33503)){
var statearr_33543_33610 = state_33537__$1;
(statearr_33543_33610[(1)] = (5));

} else {
var statearr_33544_33611 = state_33537__$1;
(statearr_33544_33611[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33538 === (15))){
var inst_33515 = (state_33537[(8)]);
var state_33537__$1 = state_33537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33537__$1,(18),to,inst_33515);
} else {
if((state_val_33538 === (21))){
var inst_33528 = (state_33537[(2)]);
var state_33537__$1 = state_33537;
var statearr_33545_33612 = state_33537__$1;
(statearr_33545_33612[(2)] = inst_33528);

(statearr_33545_33612[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33538 === (13))){
var inst_33530 = (state_33537[(2)]);
var state_33537__$1 = (function (){var statearr_33546 = state_33537;
(statearr_33546[(9)] = inst_33530);

return statearr_33546;
})();
var statearr_33547_33613 = state_33537__$1;
(statearr_33547_33613[(2)] = null);

(statearr_33547_33613[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33538 === (6))){
var inst_33502 = (state_33537[(7)]);
var state_33537__$1 = state_33537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33537__$1,(11),inst_33502);
} else {
if((state_val_33538 === (17))){
var inst_33523 = (state_33537[(2)]);
var state_33537__$1 = state_33537;
if(cljs.core.truth_(inst_33523)){
var statearr_33548_33614 = state_33537__$1;
(statearr_33548_33614[(1)] = (19));

} else {
var statearr_33549_33615 = state_33537__$1;
(statearr_33549_33615[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33538 === (3))){
var inst_33535 = (state_33537[(2)]);
var state_33537__$1 = state_33537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33537__$1,inst_33535);
} else {
if((state_val_33538 === (12))){
var inst_33512 = (state_33537[(10)]);
var state_33537__$1 = state_33537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33537__$1,(14),inst_33512);
} else {
if((state_val_33538 === (2))){
var state_33537__$1 = state_33537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33537__$1,(4),results);
} else {
if((state_val_33538 === (19))){
var state_33537__$1 = state_33537;
var statearr_33550_33616 = state_33537__$1;
(statearr_33550_33616[(2)] = null);

(statearr_33550_33616[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33538 === (11))){
var inst_33512 = (state_33537[(2)]);
var state_33537__$1 = (function (){var statearr_33551 = state_33537;
(statearr_33551[(10)] = inst_33512);

return statearr_33551;
})();
var statearr_33552_33617 = state_33537__$1;
(statearr_33552_33617[(2)] = null);

(statearr_33552_33617[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33538 === (9))){
var state_33537__$1 = state_33537;
var statearr_33553_33618 = state_33537__$1;
(statearr_33553_33618[(2)] = null);

(statearr_33553_33618[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33538 === (5))){
var state_33537__$1 = state_33537;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33554_33619 = state_33537__$1;
(statearr_33554_33619[(1)] = (8));

} else {
var statearr_33555_33620 = state_33537__$1;
(statearr_33555_33620[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33538 === (14))){
var inst_33515 = (state_33537[(8)]);
var inst_33517 = (state_33537[(11)]);
var inst_33515__$1 = (state_33537[(2)]);
var inst_33516 = (inst_33515__$1 == null);
var inst_33517__$1 = cljs.core.not(inst_33516);
var state_33537__$1 = (function (){var statearr_33556 = state_33537;
(statearr_33556[(8)] = inst_33515__$1);

(statearr_33556[(11)] = inst_33517__$1);

return statearr_33556;
})();
if(inst_33517__$1){
var statearr_33557_33621 = state_33537__$1;
(statearr_33557_33621[(1)] = (15));

} else {
var statearr_33558_33622 = state_33537__$1;
(statearr_33558_33622[(1)] = (16));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33538 === (16))){
var inst_33517 = (state_33537[(11)]);
var state_33537__$1 = state_33537;
var statearr_33559_33623 = state_33537__$1;
(statearr_33559_33623[(2)] = inst_33517);

(statearr_33559_33623[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33538 === (10))){
var inst_33509 = (state_33537[(2)]);
var state_33537__$1 = state_33537;
var statearr_33560_33624 = state_33537__$1;
(statearr_33560_33624[(2)] = inst_33509);

(statearr_33560_33624[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33538 === (18))){
var inst_33520 = (state_33537[(2)]);
var state_33537__$1 = state_33537;
var statearr_33561_33625 = state_33537__$1;
(statearr_33561_33625[(2)] = inst_33520);

(statearr_33561_33625[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33538 === (8))){
var inst_33506 = cljs.core.async.close_BANG_(to);
var state_33537__$1 = state_33537;
var statearr_33562_33626 = state_33537__$1;
(statearr_33562_33626[(2)] = inst_33506);

(statearr_33562_33626[(1)] = (10));


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
});})(c__23603__auto__,jobs,results,process,async))
;
return ((function (switch__23523__auto__,c__23603__auto__,jobs,results,process,async){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_33566 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33566[(0)] = state_machine__23524__auto__);

(statearr_33566[(1)] = (1));

return statearr_33566;
});
var state_machine__23524__auto____1 = (function (state_33537){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_33537);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e33567){if((e33567 instanceof Object)){
var ex__23527__auto__ = e33567;
var statearr_33568_33627 = state_33537;
(statearr_33568_33627[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33537);

return cljs.core.constant$keyword$21;
} else {
throw e33567;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__33628 = state_33537;
state_33537 = G__33628;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_33537){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_33537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto__,jobs,results,process,async))
})();
var state__23605__auto__ = (function (){var statearr_33569 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_33569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto__);

return statearr_33569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto__,jobs,results,process,async))
);

return c__23603__auto__;
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
var c__23603__auto___33751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto___33751,tc,fc){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto___33751,tc,fc){
return (function (state_33725){
var state_val_33726 = (state_33725[(1)]);
if((state_val_33726 === (7))){
var inst_33721 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
var statearr_33727_33752 = state_33725__$1;
(statearr_33727_33752[(2)] = inst_33721);

(statearr_33727_33752[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33726 === (1))){
var state_33725__$1 = state_33725;
var statearr_33728_33753 = state_33725__$1;
(statearr_33728_33753[(2)] = null);

(statearr_33728_33753[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33726 === (4))){
var inst_33702 = (state_33725[(7)]);
var inst_33702__$1 = (state_33725[(2)]);
var inst_33703 = (inst_33702__$1 == null);
var state_33725__$1 = (function (){var statearr_33729 = state_33725;
(statearr_33729[(7)] = inst_33702__$1);

return statearr_33729;
})();
if(cljs.core.truth_(inst_33703)){
var statearr_33730_33754 = state_33725__$1;
(statearr_33730_33754[(1)] = (5));

} else {
var statearr_33731_33755 = state_33725__$1;
(statearr_33731_33755[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33726 === (13))){
var state_33725__$1 = state_33725;
var statearr_33732_33756 = state_33725__$1;
(statearr_33732_33756[(2)] = null);

(statearr_33732_33756[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33726 === (6))){
var inst_33702 = (state_33725[(7)]);
var inst_33708 = (function (){var G__33733 = inst_33702;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__33733) : p.call(null,G__33733));
})();
var state_33725__$1 = state_33725;
if(cljs.core.truth_(inst_33708)){
var statearr_33734_33757 = state_33725__$1;
(statearr_33734_33757[(1)] = (9));

} else {
var statearr_33735_33758 = state_33725__$1;
(statearr_33735_33758[(1)] = (10));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33726 === (3))){
var inst_33723 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33725__$1,inst_33723);
} else {
if((state_val_33726 === (12))){
var state_33725__$1 = state_33725;
var statearr_33736_33759 = state_33725__$1;
(statearr_33736_33759[(2)] = null);

(statearr_33736_33759[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33726 === (2))){
var state_33725__$1 = state_33725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33725__$1,(4),ch);
} else {
if((state_val_33726 === (11))){
var inst_33702 = (state_33725[(7)]);
var inst_33712 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33725__$1,(8),inst_33712,inst_33702);
} else {
if((state_val_33726 === (9))){
var state_33725__$1 = state_33725;
var statearr_33737_33760 = state_33725__$1;
(statearr_33737_33760[(2)] = tc);

(statearr_33737_33760[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33726 === (5))){
var inst_33705 = cljs.core.async.close_BANG_(tc);
var inst_33706 = cljs.core.async.close_BANG_(fc);
var state_33725__$1 = (function (){var statearr_33738 = state_33725;
(statearr_33738[(8)] = inst_33705);

return statearr_33738;
})();
var statearr_33739_33761 = state_33725__$1;
(statearr_33739_33761[(2)] = inst_33706);

(statearr_33739_33761[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33726 === (14))){
var inst_33719 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
var statearr_33740_33762 = state_33725__$1;
(statearr_33740_33762[(2)] = inst_33719);

(statearr_33740_33762[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33726 === (10))){
var state_33725__$1 = state_33725;
var statearr_33741_33763 = state_33725__$1;
(statearr_33741_33763[(2)] = fc);

(statearr_33741_33763[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33726 === (8))){
var inst_33714 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
if(cljs.core.truth_(inst_33714)){
var statearr_33742_33764 = state_33725__$1;
(statearr_33742_33764[(1)] = (12));

} else {
var statearr_33743_33765 = state_33725__$1;
(statearr_33743_33765[(1)] = (13));

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
});})(c__23603__auto___33751,tc,fc))
;
return ((function (switch__23523__auto__,c__23603__auto___33751,tc,fc){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_33747 = [null,null,null,null,null,null,null,null,null];
(statearr_33747[(0)] = state_machine__23524__auto__);

(statearr_33747[(1)] = (1));

return statearr_33747;
});
var state_machine__23524__auto____1 = (function (state_33725){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_33725);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e33748){if((e33748 instanceof Object)){
var ex__23527__auto__ = e33748;
var statearr_33749_33766 = state_33725;
(statearr_33749_33766[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33725);

return cljs.core.constant$keyword$21;
} else {
throw e33748;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__33767 = state_33725;
state_33725 = G__33767;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_33725){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_33725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto___33751,tc,fc))
})();
var state__23605__auto__ = (function (){var statearr_33750 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_33750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___33751);

return statearr_33750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto___33751,tc,fc))
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
var c__23603__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto__){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto__){
return (function (state_33816){
var state_val_33817 = (state_33816[(1)]);
if((state_val_33817 === (7))){
var inst_33812 = (state_33816[(2)]);
var state_33816__$1 = state_33816;
var statearr_33818_33836 = state_33816__$1;
(statearr_33818_33836[(2)] = inst_33812);

(statearr_33818_33836[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33817 === (6))){
var inst_33805 = (state_33816[(7)]);
var inst_33802 = (state_33816[(8)]);
var inst_33809 = (function (){var G__33819 = inst_33802;
var G__33820 = inst_33805;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33819,G__33820) : f.call(null,G__33819,G__33820));
})();
var inst_33802__$1 = inst_33809;
var state_33816__$1 = (function (){var statearr_33821 = state_33816;
(statearr_33821[(8)] = inst_33802__$1);

return statearr_33821;
})();
var statearr_33822_33837 = state_33816__$1;
(statearr_33822_33837[(2)] = null);

(statearr_33822_33837[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33817 === (5))){
var inst_33802 = (state_33816[(8)]);
var state_33816__$1 = state_33816;
var statearr_33823_33838 = state_33816__$1;
(statearr_33823_33838[(2)] = inst_33802);

(statearr_33823_33838[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33817 === (4))){
var inst_33805 = (state_33816[(7)]);
var inst_33805__$1 = (state_33816[(2)]);
var inst_33806 = (inst_33805__$1 == null);
var state_33816__$1 = (function (){var statearr_33824 = state_33816;
(statearr_33824[(7)] = inst_33805__$1);

return statearr_33824;
})();
if(cljs.core.truth_(inst_33806)){
var statearr_33825_33839 = state_33816__$1;
(statearr_33825_33839[(1)] = (5));

} else {
var statearr_33826_33840 = state_33816__$1;
(statearr_33826_33840[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33817 === (3))){
var inst_33814 = (state_33816[(2)]);
var state_33816__$1 = state_33816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33816__$1,inst_33814);
} else {
if((state_val_33817 === (2))){
var state_33816__$1 = state_33816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33816__$1,(4),ch);
} else {
if((state_val_33817 === (1))){
var inst_33802 = init;
var state_33816__$1 = (function (){var statearr_33827 = state_33816;
(statearr_33827[(8)] = inst_33802);

return statearr_33827;
})();
var statearr_33828_33841 = state_33816__$1;
(statearr_33828_33841[(2)] = null);

(statearr_33828_33841[(1)] = (2));


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
});})(c__23603__auto__))
;
return ((function (switch__23523__auto__,c__23603__auto__){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_33832 = [null,null,null,null,null,null,null,null,null];
(statearr_33832[(0)] = state_machine__23524__auto__);

(statearr_33832[(1)] = (1));

return statearr_33832;
});
var state_machine__23524__auto____1 = (function (state_33816){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_33816);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e33833){if((e33833 instanceof Object)){
var ex__23527__auto__ = e33833;
var statearr_33834_33842 = state_33816;
(statearr_33834_33842[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33816);

return cljs.core.constant$keyword$21;
} else {
throw e33833;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__33843 = state_33816;
state_33816 = G__33843;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_33816){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_33816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto__))
})();
var state__23605__auto__ = (function (){var statearr_33835 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_33835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto__);

return statearr_33835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto__))
);

return c__23603__auto__;
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
var c__23603__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto__){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto__){
return (function (state_33920){
var state_val_33921 = (state_33920[(1)]);
if((state_val_33921 === (7))){
var inst_33902 = (state_33920[(2)]);
var state_33920__$1 = state_33920;
var statearr_33922_33945 = state_33920__$1;
(statearr_33922_33945[(2)] = inst_33902);

(statearr_33922_33945[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33921 === (1))){
var inst_33896 = cljs.core.seq(coll);
var inst_33897 = inst_33896;
var state_33920__$1 = (function (){var statearr_33923 = state_33920;
(statearr_33923[(7)] = inst_33897);

return statearr_33923;
})();
var statearr_33924_33946 = state_33920__$1;
(statearr_33924_33946[(2)] = null);

(statearr_33924_33946[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33921 === (4))){
var inst_33897 = (state_33920[(7)]);
var inst_33900 = cljs.core.first(inst_33897);
var state_33920__$1 = state_33920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33920__$1,(7),ch,inst_33900);
} else {
if((state_val_33921 === (13))){
var inst_33914 = (state_33920[(2)]);
var state_33920__$1 = state_33920;
var statearr_33925_33947 = state_33920__$1;
(statearr_33925_33947[(2)] = inst_33914);

(statearr_33925_33947[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33921 === (6))){
var inst_33905 = (state_33920[(2)]);
var state_33920__$1 = state_33920;
if(cljs.core.truth_(inst_33905)){
var statearr_33926_33948 = state_33920__$1;
(statearr_33926_33948[(1)] = (8));

} else {
var statearr_33927_33949 = state_33920__$1;
(statearr_33927_33949[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33921 === (3))){
var inst_33918 = (state_33920[(2)]);
var state_33920__$1 = state_33920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33920__$1,inst_33918);
} else {
if((state_val_33921 === (12))){
var state_33920__$1 = state_33920;
var statearr_33928_33950 = state_33920__$1;
(statearr_33928_33950[(2)] = null);

(statearr_33928_33950[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33921 === (2))){
var inst_33897 = (state_33920[(7)]);
var state_33920__$1 = state_33920;
if(cljs.core.truth_(inst_33897)){
var statearr_33929_33951 = state_33920__$1;
(statearr_33929_33951[(1)] = (4));

} else {
var statearr_33930_33952 = state_33920__$1;
(statearr_33930_33952[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33921 === (11))){
var inst_33911 = cljs.core.async.close_BANG_(ch);
var state_33920__$1 = state_33920;
var statearr_33931_33953 = state_33920__$1;
(statearr_33931_33953[(2)] = inst_33911);

(statearr_33931_33953[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33921 === (9))){
var state_33920__$1 = state_33920;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33932_33954 = state_33920__$1;
(statearr_33932_33954[(1)] = (11));

} else {
var statearr_33933_33955 = state_33920__$1;
(statearr_33933_33955[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_33921 === (5))){
var inst_33897 = (state_33920[(7)]);
var state_33920__$1 = state_33920;
var statearr_33934_33956 = state_33920__$1;
(statearr_33934_33956[(2)] = inst_33897);

(statearr_33934_33956[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33921 === (10))){
var inst_33916 = (state_33920[(2)]);
var state_33920__$1 = state_33920;
var statearr_33935_33957 = state_33920__$1;
(statearr_33935_33957[(2)] = inst_33916);

(statearr_33935_33957[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_33921 === (8))){
var inst_33897 = (state_33920[(7)]);
var inst_33907 = cljs.core.next(inst_33897);
var inst_33897__$1 = inst_33907;
var state_33920__$1 = (function (){var statearr_33936 = state_33920;
(statearr_33936[(7)] = inst_33897__$1);

return statearr_33936;
})();
var statearr_33937_33958 = state_33920__$1;
(statearr_33937_33958[(2)] = null);

(statearr_33937_33958[(1)] = (2));


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
});})(c__23603__auto__))
;
return ((function (switch__23523__auto__,c__23603__auto__){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_33941 = [null,null,null,null,null,null,null,null];
(statearr_33941[(0)] = state_machine__23524__auto__);

(statearr_33941[(1)] = (1));

return statearr_33941;
});
var state_machine__23524__auto____1 = (function (state_33920){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_33920);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e33942){if((e33942 instanceof Object)){
var ex__23527__auto__ = e33942;
var statearr_33943_33959 = state_33920;
(statearr_33943_33959[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33920);

return cljs.core.constant$keyword$21;
} else {
throw e33942;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__33960 = state_33920;
state_33920 = G__33960;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_33920){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_33920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto__))
})();
var state__23605__auto__ = (function (){var statearr_33944 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_33944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto__);

return statearr_33944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto__))
);

return c__23603__auto__;
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

cljs.core.async.Mux = (function (){var obj33962 = {};
return obj33962;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__16453__auto__ = _;
if(and__16453__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16453__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17109__auto__ = (((_ == null))?null:_);
return (function (){var or__16465__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__33966 = x__17109__auto__;
return goog.typeOf(G__33966);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj33968 = {};
return obj33968;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16453__auto__ = m;
if(and__16453__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16453__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17109__auto__ = (((m == null))?null:m);
return (function (){var or__16465__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__33972 = x__17109__auto__;
return goog.typeOf(G__33972);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__16453__auto__ = m;
if(and__16453__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16453__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17109__auto__ = (((m == null))?null:m);
return (function (){var or__16465__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__33976 = x__17109__auto__;
return goog.typeOf(G__33976);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__16453__auto__ = m;
if(and__16453__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16453__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17109__auto__ = (((m == null))?null:m);
return (function (){var or__16465__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__33980 = x__17109__auto__;
return goog.typeOf(G__33980);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
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
var cs = (function (){var G__34210 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34210) : cljs.core.atom.call(null,G__34210));
})();
var m = (function (){
if(typeof cljs.core.async.t34211 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34211 = (function (cs,ch,mult,meta34212){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34212 = meta34212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34211.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t34211.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t34211.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t34211.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__34214_34439 = self__.cs;
var G__34215_34440 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34214_34439,G__34215_34440) : cljs.core.reset_BANG_.call(null,G__34214_34439,G__34215_34440));

return null;
});})(cs))
;

cljs.core.async.t34211.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34211.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t34211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34213){
var self__ = this;
var _34213__$1 = this;
return self__.meta34212;
});})(cs))
;

cljs.core.async.t34211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34213,meta34212__$1){
var self__ = this;
var _34213__$1 = this;
return (new cljs.core.async.t34211(self__.cs,self__.ch,self__.mult,meta34212__$1));
});})(cs))
;

cljs.core.async.t34211.cljs$lang$type = true;

cljs.core.async.t34211.cljs$lang$ctorStr = "cljs.core.async/t34211";

cljs.core.async.t34211.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17052__auto__,writer__17053__auto__,opt__17054__auto__){
return cljs.core._write(writer__17053__auto__,"cljs.core.async/t34211");
});})(cs))
;

cljs.core.async.__GT_t34211 = ((function (cs){
return (function __GT_t34211(cs__$1,ch__$1,mult__$1,meta34212){
return (new cljs.core.async.t34211(cs__$1,ch__$1,mult__$1,meta34212));
});})(cs))
;

}

return (new cljs.core.async.t34211(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__34216 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34216) : cljs.core.atom.call(null,G__34216));
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
var c__23603__auto___34441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto___34441,cs,m,dchan,dctr,done){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto___34441,cs,m,dchan,dctr,done){
return (function (state_34347){
var state_val_34348 = (state_34347[(1)]);
if((state_val_34348 === (7))){
var inst_34343 = (state_34347[(2)]);
var state_34347__$1 = state_34347;
var statearr_34349_34442 = state_34347__$1;
(statearr_34349_34442[(2)] = inst_34343);

(statearr_34349_34442[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (20))){
var inst_34248 = (state_34347[(7)]);
var inst_34258 = cljs.core.first(inst_34248);
var inst_34259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34258,(0),null);
var inst_34260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34258,(1),null);
var state_34347__$1 = (function (){var statearr_34350 = state_34347;
(statearr_34350[(8)] = inst_34259);

return statearr_34350;
})();
if(cljs.core.truth_(inst_34260)){
var statearr_34351_34443 = state_34347__$1;
(statearr_34351_34443[(1)] = (22));

} else {
var statearr_34352_34444 = state_34347__$1;
(statearr_34352_34444[(1)] = (23));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (27))){
var inst_34219 = (state_34347[(9)]);
var inst_34290 = (state_34347[(10)]);
var inst_34295 = (state_34347[(11)]);
var inst_34288 = (state_34347[(12)]);
var inst_34295__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34288,inst_34290);
var inst_34296 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34295__$1,inst_34219,done);
var state_34347__$1 = (function (){var statearr_34353 = state_34347;
(statearr_34353[(11)] = inst_34295__$1);

return statearr_34353;
})();
if(cljs.core.truth_(inst_34296)){
var statearr_34354_34445 = state_34347__$1;
(statearr_34354_34445[(1)] = (30));

} else {
var statearr_34355_34446 = state_34347__$1;
(statearr_34355_34446[(1)] = (31));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (1))){
var state_34347__$1 = state_34347;
var statearr_34356_34447 = state_34347__$1;
(statearr_34356_34447[(2)] = null);

(statearr_34356_34447[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (24))){
var inst_34248 = (state_34347[(7)]);
var inst_34265 = (state_34347[(2)]);
var inst_34266 = cljs.core.next(inst_34248);
var inst_34228 = inst_34266;
var inst_34229 = null;
var inst_34230 = (0);
var inst_34231 = (0);
var state_34347__$1 = (function (){var statearr_34357 = state_34347;
(statearr_34357[(13)] = inst_34229);

(statearr_34357[(14)] = inst_34265);

(statearr_34357[(15)] = inst_34230);

(statearr_34357[(16)] = inst_34231);

(statearr_34357[(17)] = inst_34228);

return statearr_34357;
})();
var statearr_34358_34448 = state_34347__$1;
(statearr_34358_34448[(2)] = null);

(statearr_34358_34448[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (39))){
var state_34347__$1 = state_34347;
var statearr_34362_34449 = state_34347__$1;
(statearr_34362_34449[(2)] = null);

(statearr_34362_34449[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (4))){
var inst_34219 = (state_34347[(9)]);
var inst_34219__$1 = (state_34347[(2)]);
var inst_34220 = (inst_34219__$1 == null);
var state_34347__$1 = (function (){var statearr_34363 = state_34347;
(statearr_34363[(9)] = inst_34219__$1);

return statearr_34363;
})();
if(cljs.core.truth_(inst_34220)){
var statearr_34364_34450 = state_34347__$1;
(statearr_34364_34450[(1)] = (5));

} else {
var statearr_34365_34451 = state_34347__$1;
(statearr_34365_34451[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (15))){
var inst_34229 = (state_34347[(13)]);
var inst_34230 = (state_34347[(15)]);
var inst_34231 = (state_34347[(16)]);
var inst_34228 = (state_34347[(17)]);
var inst_34244 = (state_34347[(2)]);
var inst_34245 = (inst_34231 + (1));
var tmp34359 = inst_34229;
var tmp34360 = inst_34230;
var tmp34361 = inst_34228;
var inst_34228__$1 = tmp34361;
var inst_34229__$1 = tmp34359;
var inst_34230__$1 = tmp34360;
var inst_34231__$1 = inst_34245;
var state_34347__$1 = (function (){var statearr_34366 = state_34347;
(statearr_34366[(18)] = inst_34244);

(statearr_34366[(13)] = inst_34229__$1);

(statearr_34366[(15)] = inst_34230__$1);

(statearr_34366[(16)] = inst_34231__$1);

(statearr_34366[(17)] = inst_34228__$1);

return statearr_34366;
})();
var statearr_34367_34452 = state_34347__$1;
(statearr_34367_34452[(2)] = null);

(statearr_34367_34452[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (21))){
var inst_34269 = (state_34347[(2)]);
var state_34347__$1 = state_34347;
var statearr_34371_34453 = state_34347__$1;
(statearr_34371_34453[(2)] = inst_34269);

(statearr_34371_34453[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (31))){
var inst_34295 = (state_34347[(11)]);
var inst_34299 = done(null);
var inst_34300 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34295);
var state_34347__$1 = (function (){var statearr_34372 = state_34347;
(statearr_34372[(19)] = inst_34299);

return statearr_34372;
})();
var statearr_34373_34454 = state_34347__$1;
(statearr_34373_34454[(2)] = inst_34300);

(statearr_34373_34454[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (32))){
var inst_34287 = (state_34347[(20)]);
var inst_34290 = (state_34347[(10)]);
var inst_34289 = (state_34347[(21)]);
var inst_34288 = (state_34347[(12)]);
var inst_34302 = (state_34347[(2)]);
var inst_34303 = (inst_34290 + (1));
var tmp34368 = inst_34287;
var tmp34369 = inst_34289;
var tmp34370 = inst_34288;
var inst_34287__$1 = tmp34368;
var inst_34288__$1 = tmp34370;
var inst_34289__$1 = tmp34369;
var inst_34290__$1 = inst_34303;
var state_34347__$1 = (function (){var statearr_34374 = state_34347;
(statearr_34374[(22)] = inst_34302);

(statearr_34374[(20)] = inst_34287__$1);

(statearr_34374[(10)] = inst_34290__$1);

(statearr_34374[(21)] = inst_34289__$1);

(statearr_34374[(12)] = inst_34288__$1);

return statearr_34374;
})();
var statearr_34375_34455 = state_34347__$1;
(statearr_34375_34455[(2)] = null);

(statearr_34375_34455[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (40))){
var inst_34315 = (state_34347[(23)]);
var inst_34319 = done(null);
var inst_34320 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34315);
var state_34347__$1 = (function (){var statearr_34376 = state_34347;
(statearr_34376[(24)] = inst_34319);

return statearr_34376;
})();
var statearr_34377_34456 = state_34347__$1;
(statearr_34377_34456[(2)] = inst_34320);

(statearr_34377_34456[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (33))){
var inst_34306 = (state_34347[(25)]);
var inst_34308 = cljs.core.chunked_seq_QMARK_(inst_34306);
var state_34347__$1 = state_34347;
if(inst_34308){
var statearr_34378_34457 = state_34347__$1;
(statearr_34378_34457[(1)] = (36));

} else {
var statearr_34379_34458 = state_34347__$1;
(statearr_34379_34458[(1)] = (37));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (13))){
var inst_34238 = (state_34347[(26)]);
var inst_34241 = cljs.core.async.close_BANG_(inst_34238);
var state_34347__$1 = state_34347;
var statearr_34380_34459 = state_34347__$1;
(statearr_34380_34459[(2)] = inst_34241);

(statearr_34380_34459[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (22))){
var inst_34259 = (state_34347[(8)]);
var inst_34262 = cljs.core.async.close_BANG_(inst_34259);
var state_34347__$1 = state_34347;
var statearr_34381_34460 = state_34347__$1;
(statearr_34381_34460[(2)] = inst_34262);

(statearr_34381_34460[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (36))){
var inst_34306 = (state_34347[(25)]);
var inst_34310 = cljs.core.chunk_first(inst_34306);
var inst_34311 = cljs.core.chunk_rest(inst_34306);
var inst_34312 = cljs.core.count(inst_34310);
var inst_34287 = inst_34311;
var inst_34288 = inst_34310;
var inst_34289 = inst_34312;
var inst_34290 = (0);
var state_34347__$1 = (function (){var statearr_34382 = state_34347;
(statearr_34382[(20)] = inst_34287);

(statearr_34382[(10)] = inst_34290);

(statearr_34382[(21)] = inst_34289);

(statearr_34382[(12)] = inst_34288);

return statearr_34382;
})();
var statearr_34383_34461 = state_34347__$1;
(statearr_34383_34461[(2)] = null);

(statearr_34383_34461[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (41))){
var inst_34306 = (state_34347[(25)]);
var inst_34322 = (state_34347[(2)]);
var inst_34323 = cljs.core.next(inst_34306);
var inst_34287 = inst_34323;
var inst_34288 = null;
var inst_34289 = (0);
var inst_34290 = (0);
var state_34347__$1 = (function (){var statearr_34384 = state_34347;
(statearr_34384[(20)] = inst_34287);

(statearr_34384[(10)] = inst_34290);

(statearr_34384[(21)] = inst_34289);

(statearr_34384[(12)] = inst_34288);

(statearr_34384[(27)] = inst_34322);

return statearr_34384;
})();
var statearr_34385_34462 = state_34347__$1;
(statearr_34385_34462[(2)] = null);

(statearr_34385_34462[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (43))){
var state_34347__$1 = state_34347;
var statearr_34386_34463 = state_34347__$1;
(statearr_34386_34463[(2)] = null);

(statearr_34386_34463[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (29))){
var inst_34331 = (state_34347[(2)]);
var state_34347__$1 = state_34347;
var statearr_34387_34464 = state_34347__$1;
(statearr_34387_34464[(2)] = inst_34331);

(statearr_34387_34464[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (44))){
var inst_34340 = (state_34347[(2)]);
var state_34347__$1 = (function (){var statearr_34388 = state_34347;
(statearr_34388[(28)] = inst_34340);

return statearr_34388;
})();
var statearr_34389_34465 = state_34347__$1;
(statearr_34389_34465[(2)] = null);

(statearr_34389_34465[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (6))){
var inst_34279 = (state_34347[(29)]);
var inst_34278 = (function (){var G__34390 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34390) : cljs.core.deref.call(null,G__34390));
})();
var inst_34279__$1 = cljs.core.keys(inst_34278);
var inst_34280 = cljs.core.count(inst_34279__$1);
var inst_34281 = (function (){var G__34391 = dctr;
var G__34392 = inst_34280;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34391,G__34392) : cljs.core.reset_BANG_.call(null,G__34391,G__34392));
})();
var inst_34286 = cljs.core.seq(inst_34279__$1);
var inst_34287 = inst_34286;
var inst_34288 = null;
var inst_34289 = (0);
var inst_34290 = (0);
var state_34347__$1 = (function (){var statearr_34393 = state_34347;
(statearr_34393[(30)] = inst_34281);

(statearr_34393[(20)] = inst_34287);

(statearr_34393[(10)] = inst_34290);

(statearr_34393[(21)] = inst_34289);

(statearr_34393[(12)] = inst_34288);

(statearr_34393[(29)] = inst_34279__$1);

return statearr_34393;
})();
var statearr_34394_34466 = state_34347__$1;
(statearr_34394_34466[(2)] = null);

(statearr_34394_34466[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (28))){
var inst_34306 = (state_34347[(25)]);
var inst_34287 = (state_34347[(20)]);
var inst_34306__$1 = cljs.core.seq(inst_34287);
var state_34347__$1 = (function (){var statearr_34395 = state_34347;
(statearr_34395[(25)] = inst_34306__$1);

return statearr_34395;
})();
if(inst_34306__$1){
var statearr_34396_34467 = state_34347__$1;
(statearr_34396_34467[(1)] = (33));

} else {
var statearr_34397_34468 = state_34347__$1;
(statearr_34397_34468[(1)] = (34));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (25))){
var inst_34290 = (state_34347[(10)]);
var inst_34289 = (state_34347[(21)]);
var inst_34292 = (inst_34290 < inst_34289);
var inst_34293 = inst_34292;
var state_34347__$1 = state_34347;
if(cljs.core.truth_(inst_34293)){
var statearr_34398_34469 = state_34347__$1;
(statearr_34398_34469[(1)] = (27));

} else {
var statearr_34399_34470 = state_34347__$1;
(statearr_34399_34470[(1)] = (28));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (34))){
var state_34347__$1 = state_34347;
var statearr_34400_34471 = state_34347__$1;
(statearr_34400_34471[(2)] = null);

(statearr_34400_34471[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (17))){
var state_34347__$1 = state_34347;
var statearr_34401_34472 = state_34347__$1;
(statearr_34401_34472[(2)] = null);

(statearr_34401_34472[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (3))){
var inst_34345 = (state_34347[(2)]);
var state_34347__$1 = state_34347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34347__$1,inst_34345);
} else {
if((state_val_34348 === (12))){
var inst_34274 = (state_34347[(2)]);
var state_34347__$1 = state_34347;
var statearr_34402_34473 = state_34347__$1;
(statearr_34402_34473[(2)] = inst_34274);

(statearr_34402_34473[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (2))){
var state_34347__$1 = state_34347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34347__$1,(4),ch);
} else {
if((state_val_34348 === (23))){
var state_34347__$1 = state_34347;
var statearr_34403_34474 = state_34347__$1;
(statearr_34403_34474[(2)] = null);

(statearr_34403_34474[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (35))){
var inst_34329 = (state_34347[(2)]);
var state_34347__$1 = state_34347;
var statearr_34404_34475 = state_34347__$1;
(statearr_34404_34475[(2)] = inst_34329);

(statearr_34404_34475[(1)] = (29));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (19))){
var inst_34248 = (state_34347[(7)]);
var inst_34252 = cljs.core.chunk_first(inst_34248);
var inst_34253 = cljs.core.chunk_rest(inst_34248);
var inst_34254 = cljs.core.count(inst_34252);
var inst_34228 = inst_34253;
var inst_34229 = inst_34252;
var inst_34230 = inst_34254;
var inst_34231 = (0);
var state_34347__$1 = (function (){var statearr_34405 = state_34347;
(statearr_34405[(13)] = inst_34229);

(statearr_34405[(15)] = inst_34230);

(statearr_34405[(16)] = inst_34231);

(statearr_34405[(17)] = inst_34228);

return statearr_34405;
})();
var statearr_34406_34476 = state_34347__$1;
(statearr_34406_34476[(2)] = null);

(statearr_34406_34476[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (11))){
var inst_34248 = (state_34347[(7)]);
var inst_34228 = (state_34347[(17)]);
var inst_34248__$1 = cljs.core.seq(inst_34228);
var state_34347__$1 = (function (){var statearr_34407 = state_34347;
(statearr_34407[(7)] = inst_34248__$1);

return statearr_34407;
})();
if(inst_34248__$1){
var statearr_34408_34477 = state_34347__$1;
(statearr_34408_34477[(1)] = (16));

} else {
var statearr_34409_34478 = state_34347__$1;
(statearr_34409_34478[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (9))){
var inst_34276 = (state_34347[(2)]);
var state_34347__$1 = state_34347;
var statearr_34410_34479 = state_34347__$1;
(statearr_34410_34479[(2)] = inst_34276);

(statearr_34410_34479[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (5))){
var inst_34226 = (function (){var G__34411 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34411) : cljs.core.deref.call(null,G__34411));
})();
var inst_34227 = cljs.core.seq(inst_34226);
var inst_34228 = inst_34227;
var inst_34229 = null;
var inst_34230 = (0);
var inst_34231 = (0);
var state_34347__$1 = (function (){var statearr_34412 = state_34347;
(statearr_34412[(13)] = inst_34229);

(statearr_34412[(15)] = inst_34230);

(statearr_34412[(16)] = inst_34231);

(statearr_34412[(17)] = inst_34228);

return statearr_34412;
})();
var statearr_34413_34480 = state_34347__$1;
(statearr_34413_34480[(2)] = null);

(statearr_34413_34480[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (14))){
var state_34347__$1 = state_34347;
var statearr_34414_34481 = state_34347__$1;
(statearr_34414_34481[(2)] = null);

(statearr_34414_34481[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (45))){
var inst_34337 = (state_34347[(2)]);
var state_34347__$1 = state_34347;
var statearr_34415_34482 = state_34347__$1;
(statearr_34415_34482[(2)] = inst_34337);

(statearr_34415_34482[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (26))){
var inst_34279 = (state_34347[(29)]);
var inst_34333 = (state_34347[(2)]);
var inst_34334 = cljs.core.seq(inst_34279);
var state_34347__$1 = (function (){var statearr_34416 = state_34347;
(statearr_34416[(31)] = inst_34333);

return statearr_34416;
})();
if(inst_34334){
var statearr_34417_34483 = state_34347__$1;
(statearr_34417_34483[(1)] = (42));

} else {
var statearr_34418_34484 = state_34347__$1;
(statearr_34418_34484[(1)] = (43));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (16))){
var inst_34248 = (state_34347[(7)]);
var inst_34250 = cljs.core.chunked_seq_QMARK_(inst_34248);
var state_34347__$1 = state_34347;
if(inst_34250){
var statearr_34419_34485 = state_34347__$1;
(statearr_34419_34485[(1)] = (19));

} else {
var statearr_34420_34486 = state_34347__$1;
(statearr_34420_34486[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (38))){
var inst_34326 = (state_34347[(2)]);
var state_34347__$1 = state_34347;
var statearr_34421_34487 = state_34347__$1;
(statearr_34421_34487[(2)] = inst_34326);

(statearr_34421_34487[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (30))){
var state_34347__$1 = state_34347;
var statearr_34422_34488 = state_34347__$1;
(statearr_34422_34488[(2)] = null);

(statearr_34422_34488[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (10))){
var inst_34229 = (state_34347[(13)]);
var inst_34231 = (state_34347[(16)]);
var inst_34237 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34229,inst_34231);
var inst_34238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34237,(0),null);
var inst_34239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34237,(1),null);
var state_34347__$1 = (function (){var statearr_34423 = state_34347;
(statearr_34423[(26)] = inst_34238);

return statearr_34423;
})();
if(cljs.core.truth_(inst_34239)){
var statearr_34424_34489 = state_34347__$1;
(statearr_34424_34489[(1)] = (13));

} else {
var statearr_34425_34490 = state_34347__$1;
(statearr_34425_34490[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (18))){
var inst_34272 = (state_34347[(2)]);
var state_34347__$1 = state_34347;
var statearr_34426_34491 = state_34347__$1;
(statearr_34426_34491[(2)] = inst_34272);

(statearr_34426_34491[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (42))){
var state_34347__$1 = state_34347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34347__$1,(45),dchan);
} else {
if((state_val_34348 === (37))){
var inst_34315 = (state_34347[(23)]);
var inst_34306 = (state_34347[(25)]);
var inst_34219 = (state_34347[(9)]);
var inst_34315__$1 = cljs.core.first(inst_34306);
var inst_34316 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34315__$1,inst_34219,done);
var state_34347__$1 = (function (){var statearr_34427 = state_34347;
(statearr_34427[(23)] = inst_34315__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34316)){
var statearr_34428_34492 = state_34347__$1;
(statearr_34428_34492[(1)] = (39));

} else {
var statearr_34429_34493 = state_34347__$1;
(statearr_34429_34493[(1)] = (40));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34348 === (8))){
var inst_34230 = (state_34347[(15)]);
var inst_34231 = (state_34347[(16)]);
var inst_34233 = (inst_34231 < inst_34230);
var inst_34234 = inst_34233;
var state_34347__$1 = state_34347;
if(cljs.core.truth_(inst_34234)){
var statearr_34430_34494 = state_34347__$1;
(statearr_34430_34494[(1)] = (10));

} else {
var statearr_34431_34495 = state_34347__$1;
(statearr_34431_34495[(1)] = (11));

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
});})(c__23603__auto___34441,cs,m,dchan,dctr,done))
;
return ((function (switch__23523__auto__,c__23603__auto___34441,cs,m,dchan,dctr,done){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_34435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34435[(0)] = state_machine__23524__auto__);

(statearr_34435[(1)] = (1));

return statearr_34435;
});
var state_machine__23524__auto____1 = (function (state_34347){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_34347);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e34436){if((e34436 instanceof Object)){
var ex__23527__auto__ = e34436;
var statearr_34437_34496 = state_34347;
(statearr_34437_34496[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34347);

return cljs.core.constant$keyword$21;
} else {
throw e34436;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__34497 = state_34347;
state_34347 = G__34497;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_34347){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_34347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto___34441,cs,m,dchan,dctr,done))
})();
var state__23605__auto__ = (function (){var statearr_34438 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_34438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___34441);

return statearr_34438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto___34441,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj34502 = {};
return obj34502;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__16453__auto__ = m;
if(and__16453__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16453__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17109__auto__ = (((m == null))?null:m);
return (function (){var or__16465__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__34506 = x__17109__auto__;
return goog.typeOf(G__34506);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__16453__auto__ = m;
if(and__16453__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16453__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17109__auto__ = (((m == null))?null:m);
return (function (){var or__16465__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__34510 = x__17109__auto__;
return goog.typeOf(G__34510);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__16453__auto__ = m;
if(and__16453__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16453__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17109__auto__ = (((m == null))?null:m);
return (function (){var or__16465__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__34514 = x__17109__auto__;
return goog.typeOf(G__34514);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__16453__auto__ = m;
if(and__16453__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16453__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17109__auto__ = (((m == null))?null:m);
return (function (){var or__16465__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__34518 = x__17109__auto__;
return goog.typeOf(G__34518);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__16453__auto__ = m;
if(and__16453__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16453__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17109__auto__ = (((m == null))?null:m);
return (function (){var or__16465__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__34522 = x__17109__auto__;
return goog.typeOf(G__34522);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__34523){
var map__34529 = p__34523;
var map__34529__$1 = ((cljs.core.seq_QMARK_(map__34529))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34529):map__34529);
var opts = map__34529__$1;
var statearr_34530_34534 = state;
(statearr_34530_34534[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__34529,map__34529__$1,opts){
return (function (val){
var statearr_34531_34535 = state;
(statearr_34531_34535[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__34529,map__34529__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_34532_34536 = state;
(statearr_34532_34536[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__34533 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34533) : cljs.core.deref.call(null,G__34533));
})());


return cljs.core.constant$keyword$21;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__34523 = null;
if (arguments.length > 3) {
var G__34537__i = 0, G__34537__a = new Array(arguments.length -  3);
while (G__34537__i < G__34537__a.length) {G__34537__a[G__34537__i] = arguments[G__34537__i + 3]; ++G__34537__i;}
  p__34523 = new cljs.core.IndexedSeq(G__34537__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__34523);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__34538){
var state = cljs.core.first(arglist__34538);
arglist__34538 = cljs.core.next(arglist__34538);
var cont_block = cljs.core.first(arglist__34538);
arglist__34538 = cljs.core.next(arglist__34538);
var ports = cljs.core.first(arglist__34538);
var p__34523 = cljs.core.rest(arglist__34538);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__34523);
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
var cs = (function (){var G__34672 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34672) : cljs.core.atom.call(null,G__34672));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$30,null,cljs.core.constant$keyword$31,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$32);
var solo_mode = (function (){var G__34673 = cljs.core.constant$keyword$31;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34673) : cljs.core.atom.call(null,G__34673));
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
if(cljs.core.truth_((function (){var G__34674 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__34674) : attr.call(null,G__34674));
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
var chs = (function (){var G__34675 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34675) : cljs.core.deref.call(null,G__34675));
})();
var mode = (function (){var G__34676 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34676) : cljs.core.deref.call(null,G__34676));
})();
var solos = pick(cljs.core.constant$keyword$32,chs);
var pauses = pick(cljs.core.constant$keyword$30,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$33,solos,cljs.core.constant$keyword$34,pick(cljs.core.constant$keyword$31,chs),cljs.core.constant$keyword$35,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$30)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t34677 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34677 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34678){
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
this.meta34678 = meta34678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34677.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t34677.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34677.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34677.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__34680_34805 = self__.cs;
var G__34681_34806 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34680_34805,G__34681_34806) : cljs.core.reset_BANG_.call(null,G__34680_34805,G__34681_34806));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34677.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34677.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__34682 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__34682) : self__.solo_modes.call(null,G__34682));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__34683_34807 = self__.solo_mode;
var G__34684_34808 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34683_34807,G__34684_34808) : cljs.core.reset_BANG_.call(null,G__34683_34807,G__34684_34808));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34677.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34677.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34679){
var self__ = this;
var _34679__$1 = this;
return self__.meta34678;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34679,meta34678__$1){
var self__ = this;
var _34679__$1 = this;
return (new cljs.core.async.t34677(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34678__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34677.cljs$lang$type = true;

cljs.core.async.t34677.cljs$lang$ctorStr = "cljs.core.async/t34677";

cljs.core.async.t34677.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17052__auto__,writer__17053__auto__,opt__17054__auto__){
return cljs.core._write(writer__17053__auto__,"cljs.core.async/t34677");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t34677 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t34677(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34678){
return (new cljs.core.async.t34677(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34678));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t34677(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23603__auto___34809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto___34809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto___34809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34756){
var state_val_34757 = (state_34756[(1)]);
if((state_val_34757 === (7))){
var inst_34698 = (state_34756[(7)]);
var inst_34703 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34698);
var state_34756__$1 = state_34756;
var statearr_34758_34810 = state_34756__$1;
(statearr_34758_34810[(2)] = inst_34703);

(statearr_34758_34810[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (20))){
var inst_34713 = (state_34756[(8)]);
var state_34756__$1 = state_34756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34756__$1,(23),out,inst_34713);
} else {
if((state_val_34757 === (1))){
var inst_34688 = (state_34756[(9)]);
var inst_34688__$1 = calc_state();
var inst_34689 = cljs.core.seq_QMARK_(inst_34688__$1);
var state_34756__$1 = (function (){var statearr_34759 = state_34756;
(statearr_34759[(9)] = inst_34688__$1);

return statearr_34759;
})();
if(inst_34689){
var statearr_34760_34811 = state_34756__$1;
(statearr_34760_34811[(1)] = (2));

} else {
var statearr_34761_34812 = state_34756__$1;
(statearr_34761_34812[(1)] = (3));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (24))){
var inst_34706 = (state_34756[(10)]);
var inst_34698 = inst_34706;
var state_34756__$1 = (function (){var statearr_34762 = state_34756;
(statearr_34762[(7)] = inst_34698);

return statearr_34762;
})();
var statearr_34763_34813 = state_34756__$1;
(statearr_34763_34813[(2)] = null);

(statearr_34763_34813[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (4))){
var inst_34688 = (state_34756[(9)]);
var inst_34694 = (state_34756[(2)]);
var inst_34695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34694,cljs.core.constant$keyword$35);
var inst_34696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34694,cljs.core.constant$keyword$34);
var inst_34697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34694,cljs.core.constant$keyword$33);
var inst_34698 = inst_34688;
var state_34756__$1 = (function (){var statearr_34764 = state_34756;
(statearr_34764[(7)] = inst_34698);

(statearr_34764[(11)] = inst_34696);

(statearr_34764[(12)] = inst_34695);

(statearr_34764[(13)] = inst_34697);

return statearr_34764;
})();
var statearr_34765_34814 = state_34756__$1;
(statearr_34765_34814[(2)] = null);

(statearr_34765_34814[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (15))){
var state_34756__$1 = state_34756;
var statearr_34766_34815 = state_34756__$1;
(statearr_34766_34815[(2)] = null);

(statearr_34766_34815[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (21))){
var inst_34706 = (state_34756[(10)]);
var inst_34698 = inst_34706;
var state_34756__$1 = (function (){var statearr_34767 = state_34756;
(statearr_34767[(7)] = inst_34698);

return statearr_34767;
})();
var statearr_34768_34816 = state_34756__$1;
(statearr_34768_34816[(2)] = null);

(statearr_34768_34816[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (13))){
var inst_34752 = (state_34756[(2)]);
var state_34756__$1 = state_34756;
var statearr_34769_34817 = state_34756__$1;
(statearr_34769_34817[(2)] = inst_34752);

(statearr_34769_34817[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (22))){
var inst_34750 = (state_34756[(2)]);
var state_34756__$1 = state_34756;
var statearr_34770_34818 = state_34756__$1;
(statearr_34770_34818[(2)] = inst_34750);

(statearr_34770_34818[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (6))){
var inst_34754 = (state_34756[(2)]);
var state_34756__$1 = state_34756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34756__$1,inst_34754);
} else {
if((state_val_34757 === (25))){
var state_34756__$1 = state_34756;
var statearr_34771_34819 = state_34756__$1;
(statearr_34771_34819[(2)] = null);

(statearr_34771_34819[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (17))){
var inst_34729 = (state_34756[(14)]);
var state_34756__$1 = state_34756;
var statearr_34772_34820 = state_34756__$1;
(statearr_34772_34820[(2)] = inst_34729);

(statearr_34772_34820[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (3))){
var inst_34688 = (state_34756[(9)]);
var state_34756__$1 = state_34756;
var statearr_34773_34821 = state_34756__$1;
(statearr_34773_34821[(2)] = inst_34688);

(statearr_34773_34821[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (12))){
var inst_34714 = (state_34756[(15)]);
var inst_34709 = (state_34756[(16)]);
var inst_34729 = (state_34756[(14)]);
var inst_34729__$1 = (function (){var G__34774 = inst_34714;
return (inst_34709.cljs$core$IFn$_invoke$arity$1 ? inst_34709.cljs$core$IFn$_invoke$arity$1(G__34774) : inst_34709.call(null,G__34774));
})();
var state_34756__$1 = (function (){var statearr_34775 = state_34756;
(statearr_34775[(14)] = inst_34729__$1);

return statearr_34775;
})();
if(cljs.core.truth_(inst_34729__$1)){
var statearr_34776_34822 = state_34756__$1;
(statearr_34776_34822[(1)] = (17));

} else {
var statearr_34777_34823 = state_34756__$1;
(statearr_34777_34823[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (2))){
var inst_34688 = (state_34756[(9)]);
var inst_34691 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34688);
var state_34756__$1 = state_34756;
var statearr_34778_34824 = state_34756__$1;
(statearr_34778_34824[(2)] = inst_34691);

(statearr_34778_34824[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (23))){
var inst_34741 = (state_34756[(2)]);
var state_34756__$1 = state_34756;
if(cljs.core.truth_(inst_34741)){
var statearr_34779_34825 = state_34756__$1;
(statearr_34779_34825[(1)] = (24));

} else {
var statearr_34780_34826 = state_34756__$1;
(statearr_34780_34826[(1)] = (25));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (19))){
var inst_34738 = (state_34756[(2)]);
var state_34756__$1 = state_34756;
if(cljs.core.truth_(inst_34738)){
var statearr_34781_34827 = state_34756__$1;
(statearr_34781_34827[(1)] = (20));

} else {
var statearr_34782_34828 = state_34756__$1;
(statearr_34782_34828[(1)] = (21));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (11))){
var inst_34713 = (state_34756[(8)]);
var inst_34719 = (inst_34713 == null);
var state_34756__$1 = state_34756;
if(cljs.core.truth_(inst_34719)){
var statearr_34783_34829 = state_34756__$1;
(statearr_34783_34829[(1)] = (14));

} else {
var statearr_34784_34830 = state_34756__$1;
(statearr_34784_34830[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (9))){
var inst_34706 = (state_34756[(10)]);
var inst_34706__$1 = (state_34756[(2)]);
var inst_34707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34706__$1,cljs.core.constant$keyword$35);
var inst_34708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34706__$1,cljs.core.constant$keyword$34);
var inst_34709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34706__$1,cljs.core.constant$keyword$33);
var state_34756__$1 = (function (){var statearr_34785 = state_34756;
(statearr_34785[(10)] = inst_34706__$1);

(statearr_34785[(17)] = inst_34708);

(statearr_34785[(16)] = inst_34709);

return statearr_34785;
})();
return cljs.core.async.ioc_alts_BANG_(state_34756__$1,(10),inst_34707);
} else {
if((state_val_34757 === (5))){
var inst_34698 = (state_34756[(7)]);
var inst_34701 = cljs.core.seq_QMARK_(inst_34698);
var state_34756__$1 = state_34756;
if(inst_34701){
var statearr_34786_34831 = state_34756__$1;
(statearr_34786_34831[(1)] = (7));

} else {
var statearr_34787_34832 = state_34756__$1;
(statearr_34787_34832[(1)] = (8));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (14))){
var inst_34714 = (state_34756[(15)]);
var inst_34721 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34714);
var state_34756__$1 = state_34756;
var statearr_34788_34833 = state_34756__$1;
(statearr_34788_34833[(2)] = inst_34721);

(statearr_34788_34833[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (26))){
var inst_34746 = (state_34756[(2)]);
var state_34756__$1 = state_34756;
var statearr_34789_34834 = state_34756__$1;
(statearr_34789_34834[(2)] = inst_34746);

(statearr_34789_34834[(1)] = (22));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (16))){
var inst_34724 = (state_34756[(2)]);
var inst_34725 = calc_state();
var inst_34698 = inst_34725;
var state_34756__$1 = (function (){var statearr_34790 = state_34756;
(statearr_34790[(18)] = inst_34724);

(statearr_34790[(7)] = inst_34698);

return statearr_34790;
})();
var statearr_34791_34835 = state_34756__$1;
(statearr_34791_34835[(2)] = null);

(statearr_34791_34835[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (10))){
var inst_34713 = (state_34756[(8)]);
var inst_34714 = (state_34756[(15)]);
var inst_34712 = (state_34756[(2)]);
var inst_34713__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34712,(0),null);
var inst_34714__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34712,(1),null);
var inst_34715 = (inst_34713__$1 == null);
var inst_34716 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34714__$1,change);
var inst_34717 = (inst_34715) || (inst_34716);
var state_34756__$1 = (function (){var statearr_34792 = state_34756;
(statearr_34792[(8)] = inst_34713__$1);

(statearr_34792[(15)] = inst_34714__$1);

return statearr_34792;
})();
if(cljs.core.truth_(inst_34717)){
var statearr_34793_34836 = state_34756__$1;
(statearr_34793_34836[(1)] = (11));

} else {
var statearr_34794_34837 = state_34756__$1;
(statearr_34794_34837[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (18))){
var inst_34708 = (state_34756[(17)]);
var inst_34714 = (state_34756[(15)]);
var inst_34709 = (state_34756[(16)]);
var inst_34733 = cljs.core.empty_QMARK_(inst_34709);
var inst_34734 = (function (){var G__34795 = inst_34714;
return (inst_34708.cljs$core$IFn$_invoke$arity$1 ? inst_34708.cljs$core$IFn$_invoke$arity$1(G__34795) : inst_34708.call(null,G__34795));
})();
var inst_34735 = cljs.core.not(inst_34734);
var inst_34736 = (inst_34733) && (inst_34735);
var state_34756__$1 = state_34756;
var statearr_34796_34838 = state_34756__$1;
(statearr_34796_34838[(2)] = inst_34736);

(statearr_34796_34838[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34757 === (8))){
var inst_34698 = (state_34756[(7)]);
var state_34756__$1 = state_34756;
var statearr_34797_34839 = state_34756__$1;
(statearr_34797_34839[(2)] = inst_34698);

(statearr_34797_34839[(1)] = (9));


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
});})(c__23603__auto___34809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23523__auto__,c__23603__auto___34809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_34801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34801[(0)] = state_machine__23524__auto__);

(statearr_34801[(1)] = (1));

return statearr_34801;
});
var state_machine__23524__auto____1 = (function (state_34756){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_34756);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e34802){if((e34802 instanceof Object)){
var ex__23527__auto__ = e34802;
var statearr_34803_34840 = state_34756;
(statearr_34803_34840[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34756);

return cljs.core.constant$keyword$21;
} else {
throw e34802;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__34841 = state_34756;
state_34756 = G__34841;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_34756){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_34756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto___34809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23605__auto__ = (function (){var statearr_34804 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_34804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___34809);

return statearr_34804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto___34809,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj34843 = {};
return obj34843;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16453__auto__ = p;
if(and__16453__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16453__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17109__auto__ = (((p == null))?null:p);
return (function (){var or__16465__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__34847 = x__17109__auto__;
return goog.typeOf(G__34847);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__16453__auto__ = p;
if(and__16453__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16453__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17109__auto__ = (((p == null))?null:p);
return (function (){var or__16465__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__34851 = x__17109__auto__;
return goog.typeOf(G__34851);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
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
if((function (){var and__16453__auto__ = p;
if(and__16453__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16453__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17109__auto__ = (((p == null))?null:p);
return (function (){var or__16465__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__34857 = x__17109__auto__;
return goog.typeOf(G__34857);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__16453__auto__ = p;
if(and__16453__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16453__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17109__auto__ = (((p == null))?null:p);
return (function (){var or__16465__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__34859 = x__17109__auto__;
return goog.typeOf(G__34859);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
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
var mults = (function (){var G__34998 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34998) : cljs.core.atom.call(null,G__34998));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__16465__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__35000 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35000) : cljs.core.deref.call(null,G__35000));
})(),topic);
if(cljs.core.truth_(or__16465__auto__)){
return or__16465__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__16465__auto__,mults){
return (function (p1__34860_SHARP_){
if(cljs.core.truth_((function (){var G__35001 = topic;
return (p1__34860_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34860_SHARP_.cljs$core$IFn$_invoke$arity$1(G__35001) : p1__34860_SHARP_.call(null,G__35001));
})())){
return p1__34860_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34860_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__35002 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__35002) : buf_fn.call(null,G__35002));
})())));
}
});})(or__16465__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t35003 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35003 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35004){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35004 = meta35004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35003.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t35003.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__35006 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__35006) : self__.ensure_mult.call(null,G__35006));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t35003.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__35007 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35007) : cljs.core.deref.call(null,G__35007));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t35003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__35008 = self__.mults;
var G__35009 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35008,G__35009) : cljs.core.reset_BANG_.call(null,G__35008,G__35009));
});})(mults,ensure_mult))
;

cljs.core.async.t35003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t35003.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t35003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t35003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35005){
var self__ = this;
var _35005__$1 = this;
return self__.meta35004;
});})(mults,ensure_mult))
;

cljs.core.async.t35003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35005,meta35004__$1){
var self__ = this;
var _35005__$1 = this;
return (new cljs.core.async.t35003(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35004__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t35003.cljs$lang$type = true;

cljs.core.async.t35003.cljs$lang$ctorStr = "cljs.core.async/t35003";

cljs.core.async.t35003.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17052__auto__,writer__17053__auto__,opt__17054__auto__){
return cljs.core._write(writer__17053__auto__,"cljs.core.async/t35003");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t35003 = ((function (mults,ensure_mult){
return (function __GT_t35003(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35004){
return (new cljs.core.async.t35003(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35004));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t35003(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23603__auto___35132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto___35132,mults,ensure_mult,p){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto___35132,mults,ensure_mult,p){
return (function (state_35081){
var state_val_35082 = (state_35081[(1)]);
if((state_val_35082 === (7))){
var inst_35077 = (state_35081[(2)]);
var state_35081__$1 = state_35081;
var statearr_35083_35133 = state_35081__$1;
(statearr_35083_35133[(2)] = inst_35077);

(statearr_35083_35133[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (20))){
var state_35081__$1 = state_35081;
var statearr_35084_35134 = state_35081__$1;
(statearr_35084_35134[(2)] = null);

(statearr_35084_35134[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (1))){
var state_35081__$1 = state_35081;
var statearr_35085_35135 = state_35081__$1;
(statearr_35085_35135[(2)] = null);

(statearr_35085_35135[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (24))){
var inst_35060 = (state_35081[(7)]);
var inst_35069 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35060);
var state_35081__$1 = state_35081;
var statearr_35086_35136 = state_35081__$1;
(statearr_35086_35136[(2)] = inst_35069);

(statearr_35086_35136[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (4))){
var inst_35012 = (state_35081[(8)]);
var inst_35012__$1 = (state_35081[(2)]);
var inst_35013 = (inst_35012__$1 == null);
var state_35081__$1 = (function (){var statearr_35087 = state_35081;
(statearr_35087[(8)] = inst_35012__$1);

return statearr_35087;
})();
if(cljs.core.truth_(inst_35013)){
var statearr_35088_35137 = state_35081__$1;
(statearr_35088_35137[(1)] = (5));

} else {
var statearr_35089_35138 = state_35081__$1;
(statearr_35089_35138[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (15))){
var inst_35054 = (state_35081[(2)]);
var state_35081__$1 = state_35081;
var statearr_35090_35139 = state_35081__$1;
(statearr_35090_35139[(2)] = inst_35054);

(statearr_35090_35139[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (21))){
var inst_35074 = (state_35081[(2)]);
var state_35081__$1 = (function (){var statearr_35091 = state_35081;
(statearr_35091[(9)] = inst_35074);

return statearr_35091;
})();
var statearr_35092_35140 = state_35081__$1;
(statearr_35092_35140[(2)] = null);

(statearr_35092_35140[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (13))){
var inst_35036 = (state_35081[(10)]);
var inst_35038 = cljs.core.chunked_seq_QMARK_(inst_35036);
var state_35081__$1 = state_35081;
if(inst_35038){
var statearr_35093_35141 = state_35081__$1;
(statearr_35093_35141[(1)] = (16));

} else {
var statearr_35094_35142 = state_35081__$1;
(statearr_35094_35142[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (22))){
var inst_35066 = (state_35081[(2)]);
var state_35081__$1 = state_35081;
if(cljs.core.truth_(inst_35066)){
var statearr_35095_35143 = state_35081__$1;
(statearr_35095_35143[(1)] = (23));

} else {
var statearr_35096_35144 = state_35081__$1;
(statearr_35096_35144[(1)] = (24));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (6))){
var inst_35060 = (state_35081[(7)]);
var inst_35012 = (state_35081[(8)]);
var inst_35062 = (state_35081[(11)]);
var inst_35060__$1 = (function (){var G__35097 = inst_35012;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__35097) : topic_fn.call(null,G__35097));
})();
var inst_35061 = (function (){var G__35098 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35098) : cljs.core.deref.call(null,G__35098));
})();
var inst_35062__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35061,inst_35060__$1);
var state_35081__$1 = (function (){var statearr_35099 = state_35081;
(statearr_35099[(7)] = inst_35060__$1);

(statearr_35099[(11)] = inst_35062__$1);

return statearr_35099;
})();
if(cljs.core.truth_(inst_35062__$1)){
var statearr_35100_35145 = state_35081__$1;
(statearr_35100_35145[(1)] = (19));

} else {
var statearr_35101_35146 = state_35081__$1;
(statearr_35101_35146[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (25))){
var inst_35071 = (state_35081[(2)]);
var state_35081__$1 = state_35081;
var statearr_35102_35147 = state_35081__$1;
(statearr_35102_35147[(2)] = inst_35071);

(statearr_35102_35147[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (17))){
var inst_35036 = (state_35081[(10)]);
var inst_35045 = cljs.core.first(inst_35036);
var inst_35046 = cljs.core.async.muxch_STAR_(inst_35045);
var inst_35047 = cljs.core.async.close_BANG_(inst_35046);
var inst_35048 = cljs.core.next(inst_35036);
var inst_35022 = inst_35048;
var inst_35023 = null;
var inst_35024 = (0);
var inst_35025 = (0);
var state_35081__$1 = (function (){var statearr_35103 = state_35081;
(statearr_35103[(12)] = inst_35047);

(statearr_35103[(13)] = inst_35023);

(statearr_35103[(14)] = inst_35024);

(statearr_35103[(15)] = inst_35022);

(statearr_35103[(16)] = inst_35025);

return statearr_35103;
})();
var statearr_35104_35148 = state_35081__$1;
(statearr_35104_35148[(2)] = null);

(statearr_35104_35148[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (3))){
var inst_35079 = (state_35081[(2)]);
var state_35081__$1 = state_35081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35081__$1,inst_35079);
} else {
if((state_val_35082 === (12))){
var inst_35056 = (state_35081[(2)]);
var state_35081__$1 = state_35081;
var statearr_35105_35149 = state_35081__$1;
(statearr_35105_35149[(2)] = inst_35056);

(statearr_35105_35149[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (2))){
var state_35081__$1 = state_35081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35081__$1,(4),ch);
} else {
if((state_val_35082 === (23))){
var state_35081__$1 = state_35081;
var statearr_35106_35150 = state_35081__$1;
(statearr_35106_35150[(2)] = null);

(statearr_35106_35150[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (19))){
var inst_35012 = (state_35081[(8)]);
var inst_35062 = (state_35081[(11)]);
var inst_35064 = cljs.core.async.muxch_STAR_(inst_35062);
var state_35081__$1 = state_35081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35081__$1,(22),inst_35064,inst_35012);
} else {
if((state_val_35082 === (11))){
var inst_35036 = (state_35081[(10)]);
var inst_35022 = (state_35081[(15)]);
var inst_35036__$1 = cljs.core.seq(inst_35022);
var state_35081__$1 = (function (){var statearr_35107 = state_35081;
(statearr_35107[(10)] = inst_35036__$1);

return statearr_35107;
})();
if(inst_35036__$1){
var statearr_35108_35151 = state_35081__$1;
(statearr_35108_35151[(1)] = (13));

} else {
var statearr_35109_35152 = state_35081__$1;
(statearr_35109_35152[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (9))){
var inst_35058 = (state_35081[(2)]);
var state_35081__$1 = state_35081;
var statearr_35110_35153 = state_35081__$1;
(statearr_35110_35153[(2)] = inst_35058);

(statearr_35110_35153[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (5))){
var inst_35019 = (function (){var G__35111 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35111) : cljs.core.deref.call(null,G__35111));
})();
var inst_35020 = cljs.core.vals(inst_35019);
var inst_35021 = cljs.core.seq(inst_35020);
var inst_35022 = inst_35021;
var inst_35023 = null;
var inst_35024 = (0);
var inst_35025 = (0);
var state_35081__$1 = (function (){var statearr_35112 = state_35081;
(statearr_35112[(13)] = inst_35023);

(statearr_35112[(14)] = inst_35024);

(statearr_35112[(15)] = inst_35022);

(statearr_35112[(16)] = inst_35025);

return statearr_35112;
})();
var statearr_35113_35154 = state_35081__$1;
(statearr_35113_35154[(2)] = null);

(statearr_35113_35154[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (14))){
var state_35081__$1 = state_35081;
var statearr_35117_35155 = state_35081__$1;
(statearr_35117_35155[(2)] = null);

(statearr_35117_35155[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (16))){
var inst_35036 = (state_35081[(10)]);
var inst_35040 = cljs.core.chunk_first(inst_35036);
var inst_35041 = cljs.core.chunk_rest(inst_35036);
var inst_35042 = cljs.core.count(inst_35040);
var inst_35022 = inst_35041;
var inst_35023 = inst_35040;
var inst_35024 = inst_35042;
var inst_35025 = (0);
var state_35081__$1 = (function (){var statearr_35118 = state_35081;
(statearr_35118[(13)] = inst_35023);

(statearr_35118[(14)] = inst_35024);

(statearr_35118[(15)] = inst_35022);

(statearr_35118[(16)] = inst_35025);

return statearr_35118;
})();
var statearr_35119_35156 = state_35081__$1;
(statearr_35119_35156[(2)] = null);

(statearr_35119_35156[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (10))){
var inst_35023 = (state_35081[(13)]);
var inst_35024 = (state_35081[(14)]);
var inst_35022 = (state_35081[(15)]);
var inst_35025 = (state_35081[(16)]);
var inst_35030 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35023,inst_35025);
var inst_35031 = cljs.core.async.muxch_STAR_(inst_35030);
var inst_35032 = cljs.core.async.close_BANG_(inst_35031);
var inst_35033 = (inst_35025 + (1));
var tmp35114 = inst_35023;
var tmp35115 = inst_35024;
var tmp35116 = inst_35022;
var inst_35022__$1 = tmp35116;
var inst_35023__$1 = tmp35114;
var inst_35024__$1 = tmp35115;
var inst_35025__$1 = inst_35033;
var state_35081__$1 = (function (){var statearr_35120 = state_35081;
(statearr_35120[(17)] = inst_35032);

(statearr_35120[(13)] = inst_35023__$1);

(statearr_35120[(14)] = inst_35024__$1);

(statearr_35120[(15)] = inst_35022__$1);

(statearr_35120[(16)] = inst_35025__$1);

return statearr_35120;
})();
var statearr_35121_35157 = state_35081__$1;
(statearr_35121_35157[(2)] = null);

(statearr_35121_35157[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (18))){
var inst_35051 = (state_35081[(2)]);
var state_35081__$1 = state_35081;
var statearr_35122_35158 = state_35081__$1;
(statearr_35122_35158[(2)] = inst_35051);

(statearr_35122_35158[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35082 === (8))){
var inst_35024 = (state_35081[(14)]);
var inst_35025 = (state_35081[(16)]);
var inst_35027 = (inst_35025 < inst_35024);
var inst_35028 = inst_35027;
var state_35081__$1 = state_35081;
if(cljs.core.truth_(inst_35028)){
var statearr_35123_35159 = state_35081__$1;
(statearr_35123_35159[(1)] = (10));

} else {
var statearr_35124_35160 = state_35081__$1;
(statearr_35124_35160[(1)] = (11));

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
});})(c__23603__auto___35132,mults,ensure_mult,p))
;
return ((function (switch__23523__auto__,c__23603__auto___35132,mults,ensure_mult,p){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_35128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35128[(0)] = state_machine__23524__auto__);

(statearr_35128[(1)] = (1));

return statearr_35128;
});
var state_machine__23524__auto____1 = (function (state_35081){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_35081);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e35129){if((e35129 instanceof Object)){
var ex__23527__auto__ = e35129;
var statearr_35130_35161 = state_35081;
(statearr_35130_35161[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35081);

return cljs.core.constant$keyword$21;
} else {
throw e35129;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__35162 = state_35081;
state_35081 = G__35162;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_35081){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_35081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto___35132,mults,ensure_mult,p))
})();
var state__23605__auto__ = (function (){var statearr_35131 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_35131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___35132);

return statearr_35131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto___35132,mults,ensure_mult,p))
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
var dctr = (function (){var G__35243 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35243) : cljs.core.atom.call(null,G__35243));
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
var c__23603__auto___35316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto___35316,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto___35316,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35282){
var state_val_35283 = (state_35282[(1)]);
if((state_val_35283 === (7))){
var state_35282__$1 = state_35282;
var statearr_35284_35317 = state_35282__$1;
(statearr_35284_35317[(2)] = null);

(statearr_35284_35317[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35283 === (1))){
var state_35282__$1 = state_35282;
var statearr_35285_35318 = state_35282__$1;
(statearr_35285_35318[(2)] = null);

(statearr_35285_35318[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35283 === (4))){
var inst_35246 = (state_35282[(7)]);
var inst_35248 = (inst_35246 < cnt);
var state_35282__$1 = state_35282;
if(cljs.core.truth_(inst_35248)){
var statearr_35286_35319 = state_35282__$1;
(statearr_35286_35319[(1)] = (6));

} else {
var statearr_35287_35320 = state_35282__$1;
(statearr_35287_35320[(1)] = (7));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35283 === (15))){
var inst_35278 = (state_35282[(2)]);
var state_35282__$1 = state_35282;
var statearr_35288_35321 = state_35282__$1;
(statearr_35288_35321[(2)] = inst_35278);

(statearr_35288_35321[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35283 === (13))){
var inst_35271 = cljs.core.async.close_BANG_(out);
var state_35282__$1 = state_35282;
var statearr_35289_35322 = state_35282__$1;
(statearr_35289_35322[(2)] = inst_35271);

(statearr_35289_35322[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35283 === (6))){
var state_35282__$1 = state_35282;
var statearr_35290_35323 = state_35282__$1;
(statearr_35290_35323[(2)] = null);

(statearr_35290_35323[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35283 === (3))){
var inst_35280 = (state_35282[(2)]);
var state_35282__$1 = state_35282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35282__$1,inst_35280);
} else {
if((state_val_35283 === (12))){
var inst_35268 = (state_35282[(8)]);
var inst_35268__$1 = (state_35282[(2)]);
var inst_35269 = cljs.core.some(cljs.core.nil_QMARK_,inst_35268__$1);
var state_35282__$1 = (function (){var statearr_35291 = state_35282;
(statearr_35291[(8)] = inst_35268__$1);

return statearr_35291;
})();
if(cljs.core.truth_(inst_35269)){
var statearr_35292_35324 = state_35282__$1;
(statearr_35292_35324[(1)] = (13));

} else {
var statearr_35293_35325 = state_35282__$1;
(statearr_35293_35325[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35283 === (2))){
var inst_35245 = (function (){var G__35294 = dctr;
var G__35295 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35294,G__35295) : cljs.core.reset_BANG_.call(null,G__35294,G__35295));
})();
var inst_35246 = (0);
var state_35282__$1 = (function (){var statearr_35296 = state_35282;
(statearr_35296[(9)] = inst_35245);

(statearr_35296[(7)] = inst_35246);

return statearr_35296;
})();
var statearr_35297_35326 = state_35282__$1;
(statearr_35297_35326[(2)] = null);

(statearr_35297_35326[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35283 === (11))){
var inst_35246 = (state_35282[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_35282,(10),Object,null,(9));
var inst_35255 = (function (){var G__35298 = inst_35246;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__35298) : chs__$1.call(null,G__35298));
})();
var inst_35256 = (function (){var G__35299 = inst_35246;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35299) : done.call(null,G__35299));
})();
var inst_35257 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35255,inst_35256);
var state_35282__$1 = state_35282;
var statearr_35300_35327 = state_35282__$1;
(statearr_35300_35327[(2)] = inst_35257);


cljs.core.async.impl.ioc_helpers.process_exception(state_35282__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_35283 === (9))){
var inst_35246 = (state_35282[(7)]);
var inst_35259 = (state_35282[(2)]);
var inst_35260 = (inst_35246 + (1));
var inst_35246__$1 = inst_35260;
var state_35282__$1 = (function (){var statearr_35301 = state_35282;
(statearr_35301[(7)] = inst_35246__$1);

(statearr_35301[(10)] = inst_35259);

return statearr_35301;
})();
var statearr_35302_35328 = state_35282__$1;
(statearr_35302_35328[(2)] = null);

(statearr_35302_35328[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35283 === (5))){
var inst_35266 = (state_35282[(2)]);
var state_35282__$1 = (function (){var statearr_35303 = state_35282;
(statearr_35303[(11)] = inst_35266);

return statearr_35303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35282__$1,(12),dchan);
} else {
if((state_val_35283 === (14))){
var inst_35268 = (state_35282[(8)]);
var inst_35273 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35268);
var state_35282__$1 = state_35282;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35282__$1,(16),out,inst_35273);
} else {
if((state_val_35283 === (16))){
var inst_35275 = (state_35282[(2)]);
var state_35282__$1 = (function (){var statearr_35304 = state_35282;
(statearr_35304[(12)] = inst_35275);

return statearr_35304;
})();
var statearr_35305_35329 = state_35282__$1;
(statearr_35305_35329[(2)] = null);

(statearr_35305_35329[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35283 === (10))){
var inst_35250 = (state_35282[(2)]);
var inst_35251 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35282__$1 = (function (){var statearr_35306 = state_35282;
(statearr_35306[(13)] = inst_35250);

return statearr_35306;
})();
var statearr_35307_35330 = state_35282__$1;
(statearr_35307_35330[(2)] = inst_35251);


cljs.core.async.impl.ioc_helpers.process_exception(state_35282__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_35283 === (8))){
var inst_35264 = (state_35282[(2)]);
var state_35282__$1 = state_35282;
var statearr_35308_35331 = state_35282__$1;
(statearr_35308_35331[(2)] = inst_35264);

(statearr_35308_35331[(1)] = (5));


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
});})(c__23603__auto___35316,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23523__auto__,c__23603__auto___35316,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_35312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35312[(0)] = state_machine__23524__auto__);

(statearr_35312[(1)] = (1));

return statearr_35312;
});
var state_machine__23524__auto____1 = (function (state_35282){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_35282);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e35313){if((e35313 instanceof Object)){
var ex__23527__auto__ = e35313;
var statearr_35314_35332 = state_35282;
(statearr_35314_35332[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35282);

return cljs.core.constant$keyword$21;
} else {
throw e35313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__35333 = state_35282;
state_35282 = G__35333;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_35282){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_35282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto___35316,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23605__auto__ = (function (){var statearr_35315 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_35315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___35316);

return statearr_35315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto___35316,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__23603__auto___35443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto___35443,out){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto___35443,out){
return (function (state_35419){
var state_val_35420 = (state_35419[(1)]);
if((state_val_35420 === (7))){
var inst_35399 = (state_35419[(7)]);
var inst_35398 = (state_35419[(8)]);
var inst_35398__$1 = (state_35419[(2)]);
var inst_35399__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35398__$1,(0),null);
var inst_35400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35398__$1,(1),null);
var inst_35401 = (inst_35399__$1 == null);
var state_35419__$1 = (function (){var statearr_35421 = state_35419;
(statearr_35421[(7)] = inst_35399__$1);

(statearr_35421[(8)] = inst_35398__$1);

(statearr_35421[(9)] = inst_35400);

return statearr_35421;
})();
if(cljs.core.truth_(inst_35401)){
var statearr_35422_35444 = state_35419__$1;
(statearr_35422_35444[(1)] = (8));

} else {
var statearr_35423_35445 = state_35419__$1;
(statearr_35423_35445[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35420 === (1))){
var inst_35390 = cljs.core.vec(chs);
var inst_35391 = inst_35390;
var state_35419__$1 = (function (){var statearr_35424 = state_35419;
(statearr_35424[(10)] = inst_35391);

return statearr_35424;
})();
var statearr_35425_35446 = state_35419__$1;
(statearr_35425_35446[(2)] = null);

(statearr_35425_35446[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35420 === (4))){
var inst_35391 = (state_35419[(10)]);
var state_35419__$1 = state_35419;
return cljs.core.async.ioc_alts_BANG_(state_35419__$1,(7),inst_35391);
} else {
if((state_val_35420 === (6))){
var inst_35415 = (state_35419[(2)]);
var state_35419__$1 = state_35419;
var statearr_35426_35447 = state_35419__$1;
(statearr_35426_35447[(2)] = inst_35415);

(statearr_35426_35447[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35420 === (3))){
var inst_35417 = (state_35419[(2)]);
var state_35419__$1 = state_35419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35419__$1,inst_35417);
} else {
if((state_val_35420 === (2))){
var inst_35391 = (state_35419[(10)]);
var inst_35393 = cljs.core.count(inst_35391);
var inst_35394 = (inst_35393 > (0));
var state_35419__$1 = state_35419;
if(cljs.core.truth_(inst_35394)){
var statearr_35428_35448 = state_35419__$1;
(statearr_35428_35448[(1)] = (4));

} else {
var statearr_35429_35449 = state_35419__$1;
(statearr_35429_35449[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35420 === (11))){
var inst_35391 = (state_35419[(10)]);
var inst_35408 = (state_35419[(2)]);
var tmp35427 = inst_35391;
var inst_35391__$1 = tmp35427;
var state_35419__$1 = (function (){var statearr_35430 = state_35419;
(statearr_35430[(11)] = inst_35408);

(statearr_35430[(10)] = inst_35391__$1);

return statearr_35430;
})();
var statearr_35431_35450 = state_35419__$1;
(statearr_35431_35450[(2)] = null);

(statearr_35431_35450[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35420 === (9))){
var inst_35399 = (state_35419[(7)]);
var state_35419__$1 = state_35419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35419__$1,(11),out,inst_35399);
} else {
if((state_val_35420 === (5))){
var inst_35413 = cljs.core.async.close_BANG_(out);
var state_35419__$1 = state_35419;
var statearr_35432_35451 = state_35419__$1;
(statearr_35432_35451[(2)] = inst_35413);

(statearr_35432_35451[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35420 === (10))){
var inst_35411 = (state_35419[(2)]);
var state_35419__$1 = state_35419;
var statearr_35433_35452 = state_35419__$1;
(statearr_35433_35452[(2)] = inst_35411);

(statearr_35433_35452[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35420 === (8))){
var inst_35391 = (state_35419[(10)]);
var inst_35399 = (state_35419[(7)]);
var inst_35398 = (state_35419[(8)]);
var inst_35400 = (state_35419[(9)]);
var inst_35403 = (function (){var c = inst_35400;
var v = inst_35399;
var vec__35396 = inst_35398;
var cs = inst_35391;
return ((function (c,v,vec__35396,cs,inst_35391,inst_35399,inst_35398,inst_35400,state_val_35420,c__23603__auto___35443,out){
return (function (p1__35334_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35334_SHARP_);
});
;})(c,v,vec__35396,cs,inst_35391,inst_35399,inst_35398,inst_35400,state_val_35420,c__23603__auto___35443,out))
})();
var inst_35404 = cljs.core.filterv(inst_35403,inst_35391);
var inst_35391__$1 = inst_35404;
var state_35419__$1 = (function (){var statearr_35434 = state_35419;
(statearr_35434[(10)] = inst_35391__$1);

return statearr_35434;
})();
var statearr_35435_35453 = state_35419__$1;
(statearr_35435_35453[(2)] = null);

(statearr_35435_35453[(1)] = (2));


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
});})(c__23603__auto___35443,out))
;
return ((function (switch__23523__auto__,c__23603__auto___35443,out){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_35439 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35439[(0)] = state_machine__23524__auto__);

(statearr_35439[(1)] = (1));

return statearr_35439;
});
var state_machine__23524__auto____1 = (function (state_35419){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_35419);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e35440){if((e35440 instanceof Object)){
var ex__23527__auto__ = e35440;
var statearr_35441_35454 = state_35419;
(statearr_35441_35454[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35419);

return cljs.core.constant$keyword$21;
} else {
throw e35440;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__35455 = state_35419;
state_35419 = G__35455;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_35419){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_35419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto___35443,out))
})();
var state__23605__auto__ = (function (){var statearr_35442 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_35442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___35443);

return statearr_35442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto___35443,out))
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
var c__23603__auto___35551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto___35551,out){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto___35551,out){
return (function (state_35528){
var state_val_35529 = (state_35528[(1)]);
if((state_val_35529 === (7))){
var inst_35510 = (state_35528[(7)]);
var inst_35510__$1 = (state_35528[(2)]);
var inst_35511 = (inst_35510__$1 == null);
var inst_35512 = cljs.core.not(inst_35511);
var state_35528__$1 = (function (){var statearr_35530 = state_35528;
(statearr_35530[(7)] = inst_35510__$1);

return statearr_35530;
})();
if(inst_35512){
var statearr_35531_35552 = state_35528__$1;
(statearr_35531_35552[(1)] = (8));

} else {
var statearr_35532_35553 = state_35528__$1;
(statearr_35532_35553[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35529 === (1))){
var inst_35505 = (0);
var state_35528__$1 = (function (){var statearr_35533 = state_35528;
(statearr_35533[(8)] = inst_35505);

return statearr_35533;
})();
var statearr_35534_35554 = state_35528__$1;
(statearr_35534_35554[(2)] = null);

(statearr_35534_35554[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35529 === (4))){
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35528__$1,(7),ch);
} else {
if((state_val_35529 === (6))){
var inst_35523 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35535_35555 = state_35528__$1;
(statearr_35535_35555[(2)] = inst_35523);

(statearr_35535_35555[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35529 === (3))){
var inst_35525 = (state_35528[(2)]);
var inst_35526 = cljs.core.async.close_BANG_(out);
var state_35528__$1 = (function (){var statearr_35536 = state_35528;
(statearr_35536[(9)] = inst_35525);

return statearr_35536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35528__$1,inst_35526);
} else {
if((state_val_35529 === (2))){
var inst_35505 = (state_35528[(8)]);
var inst_35507 = (inst_35505 < n);
var state_35528__$1 = state_35528;
if(cljs.core.truth_(inst_35507)){
var statearr_35537_35556 = state_35528__$1;
(statearr_35537_35556[(1)] = (4));

} else {
var statearr_35538_35557 = state_35528__$1;
(statearr_35538_35557[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35529 === (11))){
var inst_35505 = (state_35528[(8)]);
var inst_35515 = (state_35528[(2)]);
var inst_35516 = (inst_35505 + (1));
var inst_35505__$1 = inst_35516;
var state_35528__$1 = (function (){var statearr_35539 = state_35528;
(statearr_35539[(10)] = inst_35515);

(statearr_35539[(8)] = inst_35505__$1);

return statearr_35539;
})();
var statearr_35540_35558 = state_35528__$1;
(statearr_35540_35558[(2)] = null);

(statearr_35540_35558[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35529 === (9))){
var state_35528__$1 = state_35528;
var statearr_35541_35559 = state_35528__$1;
(statearr_35541_35559[(2)] = null);

(statearr_35541_35559[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35529 === (5))){
var state_35528__$1 = state_35528;
var statearr_35542_35560 = state_35528__$1;
(statearr_35542_35560[(2)] = null);

(statearr_35542_35560[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35529 === (10))){
var inst_35520 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35543_35561 = state_35528__$1;
(statearr_35543_35561[(2)] = inst_35520);

(statearr_35543_35561[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35529 === (8))){
var inst_35510 = (state_35528[(7)]);
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35528__$1,(11),out,inst_35510);
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
});})(c__23603__auto___35551,out))
;
return ((function (switch__23523__auto__,c__23603__auto___35551,out){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_35547 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35547[(0)] = state_machine__23524__auto__);

(statearr_35547[(1)] = (1));

return statearr_35547;
});
var state_machine__23524__auto____1 = (function (state_35528){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_35528);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e35548){if((e35548 instanceof Object)){
var ex__23527__auto__ = e35548;
var statearr_35549_35562 = state_35528;
(statearr_35549_35562[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35528);

return cljs.core.constant$keyword$21;
} else {
throw e35548;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__35563 = state_35528;
state_35528 = G__35563;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_35528){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_35528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto___35551,out))
})();
var state__23605__auto__ = (function (){var statearr_35550 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_35550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___35551);

return statearr_35550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto___35551,out))
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
if(typeof cljs.core.async.t35576 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35576 = (function (ch,f,map_LT_,meta35577){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35577 = meta35577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35576.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35576.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t35576.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35576.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t35579 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35579 = (function (fn1,_,meta35577,map_LT_,f,ch,meta35580){
this.fn1 = fn1;
this._ = _;
this.meta35577 = meta35577;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35580 = meta35580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35579.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t35579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35564_SHARP_){
var G__35582 = (((p1__35564_SHARP_ == null))?null:(function (){var G__35583 = p1__35564_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35583) : self__.f.call(null,G__35583));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35582) : f1.call(null,G__35582));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t35579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35581){
var self__ = this;
var _35581__$1 = this;
return self__.meta35580;
});})(___$1))
;

cljs.core.async.t35579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35581,meta35580__$1){
var self__ = this;
var _35581__$1 = this;
return (new cljs.core.async.t35579(self__.fn1,self__._,self__.meta35577,self__.map_LT_,self__.f,self__.ch,meta35580__$1));
});})(___$1))
;

cljs.core.async.t35579.cljs$lang$type = true;

cljs.core.async.t35579.cljs$lang$ctorStr = "cljs.core.async/t35579";

cljs.core.async.t35579.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17052__auto__,writer__17053__auto__,opt__17054__auto__){
return cljs.core._write(writer__17053__auto__,"cljs.core.async/t35579");
});})(___$1))
;

cljs.core.async.__GT_t35579 = ((function (___$1){
return (function __GT_t35579(fn1__$1,___$2,meta35577__$1,map_LT___$1,f__$1,ch__$1,meta35580){
return (new cljs.core.async.t35579(fn1__$1,___$2,meta35577__$1,map_LT___$1,f__$1,ch__$1,meta35580));
});})(___$1))
;

}

return (new cljs.core.async.t35579(fn1,___$1,self__.meta35577,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16453__auto__ = ret;
if(cljs.core.truth_(and__16453__auto__)){
return !(((function (){var G__35584 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35584) : cljs.core.deref.call(null,G__35584));
})() == null));
} else {
return and__16453__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35585 = (function (){var G__35586 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35586) : cljs.core.deref.call(null,G__35586));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35585) : self__.f.call(null,G__35585));
})());
} else {
return ret;
}
});

cljs.core.async.t35576.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35576.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t35576.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t35576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35578){
var self__ = this;
var _35578__$1 = this;
return self__.meta35577;
});

cljs.core.async.t35576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35578,meta35577__$1){
var self__ = this;
var _35578__$1 = this;
return (new cljs.core.async.t35576(self__.ch,self__.f,self__.map_LT_,meta35577__$1));
});

cljs.core.async.t35576.cljs$lang$type = true;

cljs.core.async.t35576.cljs$lang$ctorStr = "cljs.core.async/t35576";

cljs.core.async.t35576.cljs$lang$ctorPrWriter = (function (this__17052__auto__,writer__17053__auto__,opt__17054__auto__){
return cljs.core._write(writer__17053__auto__,"cljs.core.async/t35576");
});

cljs.core.async.__GT_t35576 = (function __GT_t35576(ch__$1,f__$1,map_LT___$1,meta35577){
return (new cljs.core.async.t35576(ch__$1,f__$1,map_LT___$1,meta35577));
});

}

return (new cljs.core.async.t35576(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t35591 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35591 = (function (ch,f,map_GT_,meta35592){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta35592 = meta35592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35591.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__35594 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35594) : self__.f.call(null,G__35594));
})(),fn1);
});

cljs.core.async.t35591.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t35591.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t35591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35593){
var self__ = this;
var _35593__$1 = this;
return self__.meta35592;
});

cljs.core.async.t35591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35593,meta35592__$1){
var self__ = this;
var _35593__$1 = this;
return (new cljs.core.async.t35591(self__.ch,self__.f,self__.map_GT_,meta35592__$1));
});

cljs.core.async.t35591.cljs$lang$type = true;

cljs.core.async.t35591.cljs$lang$ctorStr = "cljs.core.async/t35591";

cljs.core.async.t35591.cljs$lang$ctorPrWriter = (function (this__17052__auto__,writer__17053__auto__,opt__17054__auto__){
return cljs.core._write(writer__17053__auto__,"cljs.core.async/t35591");
});

cljs.core.async.__GT_t35591 = (function __GT_t35591(ch__$1,f__$1,map_GT___$1,meta35592){
return (new cljs.core.async.t35591(ch__$1,f__$1,map_GT___$1,meta35592));
});

}

return (new cljs.core.async.t35591(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t35599 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35599 = (function (ch,p,filter_GT_,meta35600){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta35600 = meta35600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35599.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35599.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__35602 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__35602) : self__.p.call(null,G__35602));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t35599.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35599.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t35599.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35599.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t35599.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t35599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35601){
var self__ = this;
var _35601__$1 = this;
return self__.meta35600;
});

cljs.core.async.t35599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35601,meta35600__$1){
var self__ = this;
var _35601__$1 = this;
return (new cljs.core.async.t35599(self__.ch,self__.p,self__.filter_GT_,meta35600__$1));
});

cljs.core.async.t35599.cljs$lang$type = true;

cljs.core.async.t35599.cljs$lang$ctorStr = "cljs.core.async/t35599";

cljs.core.async.t35599.cljs$lang$ctorPrWriter = (function (this__17052__auto__,writer__17053__auto__,opt__17054__auto__){
return cljs.core._write(writer__17053__auto__,"cljs.core.async/t35599");
});

cljs.core.async.__GT_t35599 = (function __GT_t35599(ch__$1,p__$1,filter_GT___$1,meta35600){
return (new cljs.core.async.t35599(ch__$1,p__$1,filter_GT___$1,meta35600));
});

}

return (new cljs.core.async.t35599(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23603__auto___35690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto___35690,out){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto___35690,out){
return (function (state_35668){
var state_val_35669 = (state_35668[(1)]);
if((state_val_35669 === (7))){
var inst_35664 = (state_35668[(2)]);
var state_35668__$1 = state_35668;
var statearr_35670_35691 = state_35668__$1;
(statearr_35670_35691[(2)] = inst_35664);

(statearr_35670_35691[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35669 === (1))){
var state_35668__$1 = state_35668;
var statearr_35671_35692 = state_35668__$1;
(statearr_35671_35692[(2)] = null);

(statearr_35671_35692[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35669 === (4))){
var inst_35650 = (state_35668[(7)]);
var inst_35650__$1 = (state_35668[(2)]);
var inst_35651 = (inst_35650__$1 == null);
var state_35668__$1 = (function (){var statearr_35672 = state_35668;
(statearr_35672[(7)] = inst_35650__$1);

return statearr_35672;
})();
if(cljs.core.truth_(inst_35651)){
var statearr_35673_35693 = state_35668__$1;
(statearr_35673_35693[(1)] = (5));

} else {
var statearr_35674_35694 = state_35668__$1;
(statearr_35674_35694[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35669 === (6))){
var inst_35650 = (state_35668[(7)]);
var inst_35655 = (function (){var G__35675 = inst_35650;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__35675) : p.call(null,G__35675));
})();
var state_35668__$1 = state_35668;
if(cljs.core.truth_(inst_35655)){
var statearr_35676_35695 = state_35668__$1;
(statearr_35676_35695[(1)] = (8));

} else {
var statearr_35677_35696 = state_35668__$1;
(statearr_35677_35696[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35669 === (3))){
var inst_35666 = (state_35668[(2)]);
var state_35668__$1 = state_35668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35668__$1,inst_35666);
} else {
if((state_val_35669 === (2))){
var state_35668__$1 = state_35668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35668__$1,(4),ch);
} else {
if((state_val_35669 === (11))){
var inst_35658 = (state_35668[(2)]);
var state_35668__$1 = state_35668;
var statearr_35678_35697 = state_35668__$1;
(statearr_35678_35697[(2)] = inst_35658);

(statearr_35678_35697[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35669 === (9))){
var state_35668__$1 = state_35668;
var statearr_35679_35698 = state_35668__$1;
(statearr_35679_35698[(2)] = null);

(statearr_35679_35698[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35669 === (5))){
var inst_35653 = cljs.core.async.close_BANG_(out);
var state_35668__$1 = state_35668;
var statearr_35680_35699 = state_35668__$1;
(statearr_35680_35699[(2)] = inst_35653);

(statearr_35680_35699[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35669 === (10))){
var inst_35661 = (state_35668[(2)]);
var state_35668__$1 = (function (){var statearr_35681 = state_35668;
(statearr_35681[(8)] = inst_35661);

return statearr_35681;
})();
var statearr_35682_35700 = state_35668__$1;
(statearr_35682_35700[(2)] = null);

(statearr_35682_35700[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35669 === (8))){
var inst_35650 = (state_35668[(7)]);
var state_35668__$1 = state_35668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35668__$1,(11),out,inst_35650);
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
});})(c__23603__auto___35690,out))
;
return ((function (switch__23523__auto__,c__23603__auto___35690,out){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_35686 = [null,null,null,null,null,null,null,null,null];
(statearr_35686[(0)] = state_machine__23524__auto__);

(statearr_35686[(1)] = (1));

return statearr_35686;
});
var state_machine__23524__auto____1 = (function (state_35668){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_35668);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e35687){if((e35687 instanceof Object)){
var ex__23527__auto__ = e35687;
var statearr_35688_35701 = state_35668;
(statearr_35688_35701[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35668);

return cljs.core.constant$keyword$21;
} else {
throw e35687;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__35702 = state_35668;
state_35668 = G__35702;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_35668){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_35668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto___35690,out))
})();
var state__23605__auto__ = (function (){var statearr_35689 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_35689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___35690);

return statearr_35689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto___35690,out))
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
var c__23603__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto__){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto__){
return (function (state_35872){
var state_val_35873 = (state_35872[(1)]);
if((state_val_35873 === (7))){
var inst_35868 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
var statearr_35874_35916 = state_35872__$1;
(statearr_35874_35916[(2)] = inst_35868);

(statearr_35874_35916[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (20))){
var inst_35838 = (state_35872[(7)]);
var inst_35849 = (state_35872[(2)]);
var inst_35850 = cljs.core.next(inst_35838);
var inst_35824 = inst_35850;
var inst_35825 = null;
var inst_35826 = (0);
var inst_35827 = (0);
var state_35872__$1 = (function (){var statearr_35875 = state_35872;
(statearr_35875[(8)] = inst_35826);

(statearr_35875[(9)] = inst_35825);

(statearr_35875[(10)] = inst_35827);

(statearr_35875[(11)] = inst_35824);

(statearr_35875[(12)] = inst_35849);

return statearr_35875;
})();
var statearr_35876_35917 = state_35872__$1;
(statearr_35876_35917[(2)] = null);

(statearr_35876_35917[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (1))){
var state_35872__$1 = state_35872;
var statearr_35877_35918 = state_35872__$1;
(statearr_35877_35918[(2)] = null);

(statearr_35877_35918[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (4))){
var inst_35813 = (state_35872[(13)]);
var inst_35813__$1 = (state_35872[(2)]);
var inst_35814 = (inst_35813__$1 == null);
var state_35872__$1 = (function (){var statearr_35878 = state_35872;
(statearr_35878[(13)] = inst_35813__$1);

return statearr_35878;
})();
if(cljs.core.truth_(inst_35814)){
var statearr_35879_35919 = state_35872__$1;
(statearr_35879_35919[(1)] = (5));

} else {
var statearr_35880_35920 = state_35872__$1;
(statearr_35880_35920[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (15))){
var state_35872__$1 = state_35872;
var statearr_35884_35921 = state_35872__$1;
(statearr_35884_35921[(2)] = null);

(statearr_35884_35921[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (21))){
var state_35872__$1 = state_35872;
var statearr_35885_35922 = state_35872__$1;
(statearr_35885_35922[(2)] = null);

(statearr_35885_35922[(1)] = (23));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (13))){
var inst_35826 = (state_35872[(8)]);
var inst_35825 = (state_35872[(9)]);
var inst_35827 = (state_35872[(10)]);
var inst_35824 = (state_35872[(11)]);
var inst_35834 = (state_35872[(2)]);
var inst_35835 = (inst_35827 + (1));
var tmp35881 = inst_35826;
var tmp35882 = inst_35825;
var tmp35883 = inst_35824;
var inst_35824__$1 = tmp35883;
var inst_35825__$1 = tmp35882;
var inst_35826__$1 = tmp35881;
var inst_35827__$1 = inst_35835;
var state_35872__$1 = (function (){var statearr_35886 = state_35872;
(statearr_35886[(8)] = inst_35826__$1);

(statearr_35886[(14)] = inst_35834);

(statearr_35886[(9)] = inst_35825__$1);

(statearr_35886[(10)] = inst_35827__$1);

(statearr_35886[(11)] = inst_35824__$1);

return statearr_35886;
})();
var statearr_35887_35923 = state_35872__$1;
(statearr_35887_35923[(2)] = null);

(statearr_35887_35923[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (22))){
var state_35872__$1 = state_35872;
var statearr_35888_35924 = state_35872__$1;
(statearr_35888_35924[(2)] = null);

(statearr_35888_35924[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (6))){
var inst_35813 = (state_35872[(13)]);
var inst_35822 = (function (){var G__35889 = inst_35813;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35889) : f.call(null,G__35889));
})();
var inst_35823 = cljs.core.seq(inst_35822);
var inst_35824 = inst_35823;
var inst_35825 = null;
var inst_35826 = (0);
var inst_35827 = (0);
var state_35872__$1 = (function (){var statearr_35890 = state_35872;
(statearr_35890[(8)] = inst_35826);

(statearr_35890[(9)] = inst_35825);

(statearr_35890[(10)] = inst_35827);

(statearr_35890[(11)] = inst_35824);

return statearr_35890;
})();
var statearr_35891_35925 = state_35872__$1;
(statearr_35891_35925[(2)] = null);

(statearr_35891_35925[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (17))){
var inst_35838 = (state_35872[(7)]);
var inst_35842 = cljs.core.chunk_first(inst_35838);
var inst_35843 = cljs.core.chunk_rest(inst_35838);
var inst_35844 = cljs.core.count(inst_35842);
var inst_35824 = inst_35843;
var inst_35825 = inst_35842;
var inst_35826 = inst_35844;
var inst_35827 = (0);
var state_35872__$1 = (function (){var statearr_35892 = state_35872;
(statearr_35892[(8)] = inst_35826);

(statearr_35892[(9)] = inst_35825);

(statearr_35892[(10)] = inst_35827);

(statearr_35892[(11)] = inst_35824);

return statearr_35892;
})();
var statearr_35893_35926 = state_35872__$1;
(statearr_35893_35926[(2)] = null);

(statearr_35893_35926[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (3))){
var inst_35870 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35872__$1,inst_35870);
} else {
if((state_val_35873 === (12))){
var inst_35858 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
var statearr_35894_35927 = state_35872__$1;
(statearr_35894_35927[(2)] = inst_35858);

(statearr_35894_35927[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (2))){
var state_35872__$1 = state_35872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35872__$1,(4),in$);
} else {
if((state_val_35873 === (23))){
var inst_35866 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
var statearr_35895_35928 = state_35872__$1;
(statearr_35895_35928[(2)] = inst_35866);

(statearr_35895_35928[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (19))){
var inst_35853 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
var statearr_35896_35929 = state_35872__$1;
(statearr_35896_35929[(2)] = inst_35853);

(statearr_35896_35929[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (11))){
var inst_35838 = (state_35872[(7)]);
var inst_35824 = (state_35872[(11)]);
var inst_35838__$1 = cljs.core.seq(inst_35824);
var state_35872__$1 = (function (){var statearr_35897 = state_35872;
(statearr_35897[(7)] = inst_35838__$1);

return statearr_35897;
})();
if(inst_35838__$1){
var statearr_35898_35930 = state_35872__$1;
(statearr_35898_35930[(1)] = (14));

} else {
var statearr_35899_35931 = state_35872__$1;
(statearr_35899_35931[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (9))){
var inst_35860 = (state_35872[(2)]);
var inst_35861 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35872__$1 = (function (){var statearr_35900 = state_35872;
(statearr_35900[(15)] = inst_35860);

return statearr_35900;
})();
if(cljs.core.truth_(inst_35861)){
var statearr_35901_35932 = state_35872__$1;
(statearr_35901_35932[(1)] = (21));

} else {
var statearr_35902_35933 = state_35872__$1;
(statearr_35902_35933[(1)] = (22));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (5))){
var inst_35816 = cljs.core.async.close_BANG_(out);
var state_35872__$1 = state_35872;
var statearr_35903_35934 = state_35872__$1;
(statearr_35903_35934[(2)] = inst_35816);

(statearr_35903_35934[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (14))){
var inst_35838 = (state_35872[(7)]);
var inst_35840 = cljs.core.chunked_seq_QMARK_(inst_35838);
var state_35872__$1 = state_35872;
if(inst_35840){
var statearr_35904_35935 = state_35872__$1;
(statearr_35904_35935[(1)] = (17));

} else {
var statearr_35905_35936 = state_35872__$1;
(statearr_35905_35936[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (16))){
var inst_35856 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
var statearr_35906_35937 = state_35872__$1;
(statearr_35906_35937[(2)] = inst_35856);

(statearr_35906_35937[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_35873 === (10))){
var inst_35825 = (state_35872[(9)]);
var inst_35827 = (state_35872[(10)]);
var inst_35832 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35825,inst_35827);
var state_35872__$1 = state_35872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35872__$1,(13),out,inst_35832);
} else {
if((state_val_35873 === (18))){
var inst_35838 = (state_35872[(7)]);
var inst_35847 = cljs.core.first(inst_35838);
var state_35872__$1 = state_35872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35872__$1,(20),out,inst_35847);
} else {
if((state_val_35873 === (8))){
var inst_35826 = (state_35872[(8)]);
var inst_35827 = (state_35872[(10)]);
var inst_35829 = (inst_35827 < inst_35826);
var inst_35830 = inst_35829;
var state_35872__$1 = state_35872;
if(cljs.core.truth_(inst_35830)){
var statearr_35907_35938 = state_35872__$1;
(statearr_35907_35938[(1)] = (10));

} else {
var statearr_35908_35939 = state_35872__$1;
(statearr_35908_35939[(1)] = (11));

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
});})(c__23603__auto__))
;
return ((function (switch__23523__auto__,c__23603__auto__){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_35912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35912[(0)] = state_machine__23524__auto__);

(statearr_35912[(1)] = (1));

return statearr_35912;
});
var state_machine__23524__auto____1 = (function (state_35872){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_35872);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e35913){if((e35913 instanceof Object)){
var ex__23527__auto__ = e35913;
var statearr_35914_35940 = state_35872;
(statearr_35914_35940[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35872);

return cljs.core.constant$keyword$21;
} else {
throw e35913;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__35941 = state_35872;
state_35872 = G__35941;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_35872){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_35872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto__))
})();
var state__23605__auto__ = (function (){var statearr_35915 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_35915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto__);

return statearr_35915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto__))
);

return c__23603__auto__;
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
var c__23603__auto___36046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto___36046,out){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto___36046,out){
return (function (state_36021){
var state_val_36022 = (state_36021[(1)]);
if((state_val_36022 === (7))){
var inst_36016 = (state_36021[(2)]);
var state_36021__$1 = state_36021;
var statearr_36023_36047 = state_36021__$1;
(statearr_36023_36047[(2)] = inst_36016);

(statearr_36023_36047[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36022 === (1))){
var inst_35998 = null;
var state_36021__$1 = (function (){var statearr_36024 = state_36021;
(statearr_36024[(7)] = inst_35998);

return statearr_36024;
})();
var statearr_36025_36048 = state_36021__$1;
(statearr_36025_36048[(2)] = null);

(statearr_36025_36048[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36022 === (4))){
var inst_36001 = (state_36021[(8)]);
var inst_36001__$1 = (state_36021[(2)]);
var inst_36002 = (inst_36001__$1 == null);
var inst_36003 = cljs.core.not(inst_36002);
var state_36021__$1 = (function (){var statearr_36026 = state_36021;
(statearr_36026[(8)] = inst_36001__$1);

return statearr_36026;
})();
if(inst_36003){
var statearr_36027_36049 = state_36021__$1;
(statearr_36027_36049[(1)] = (5));

} else {
var statearr_36028_36050 = state_36021__$1;
(statearr_36028_36050[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_36022 === (6))){
var state_36021__$1 = state_36021;
var statearr_36029_36051 = state_36021__$1;
(statearr_36029_36051[(2)] = null);

(statearr_36029_36051[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36022 === (3))){
var inst_36018 = (state_36021[(2)]);
var inst_36019 = cljs.core.async.close_BANG_(out);
var state_36021__$1 = (function (){var statearr_36030 = state_36021;
(statearr_36030[(9)] = inst_36018);

return statearr_36030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36021__$1,inst_36019);
} else {
if((state_val_36022 === (2))){
var state_36021__$1 = state_36021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36021__$1,(4),ch);
} else {
if((state_val_36022 === (11))){
var inst_36001 = (state_36021[(8)]);
var inst_36010 = (state_36021[(2)]);
var inst_35998 = inst_36001;
var state_36021__$1 = (function (){var statearr_36031 = state_36021;
(statearr_36031[(7)] = inst_35998);

(statearr_36031[(10)] = inst_36010);

return statearr_36031;
})();
var statearr_36032_36052 = state_36021__$1;
(statearr_36032_36052[(2)] = null);

(statearr_36032_36052[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36022 === (9))){
var inst_36001 = (state_36021[(8)]);
var state_36021__$1 = state_36021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36021__$1,(11),out,inst_36001);
} else {
if((state_val_36022 === (5))){
var inst_35998 = (state_36021[(7)]);
var inst_36001 = (state_36021[(8)]);
var inst_36005 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36001,inst_35998);
var state_36021__$1 = state_36021;
if(inst_36005){
var statearr_36034_36053 = state_36021__$1;
(statearr_36034_36053[(1)] = (8));

} else {
var statearr_36035_36054 = state_36021__$1;
(statearr_36035_36054[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_36022 === (10))){
var inst_36013 = (state_36021[(2)]);
var state_36021__$1 = state_36021;
var statearr_36036_36055 = state_36021__$1;
(statearr_36036_36055[(2)] = inst_36013);

(statearr_36036_36055[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36022 === (8))){
var inst_35998 = (state_36021[(7)]);
var tmp36033 = inst_35998;
var inst_35998__$1 = tmp36033;
var state_36021__$1 = (function (){var statearr_36037 = state_36021;
(statearr_36037[(7)] = inst_35998__$1);

return statearr_36037;
})();
var statearr_36038_36056 = state_36021__$1;
(statearr_36038_36056[(2)] = null);

(statearr_36038_36056[(1)] = (2));


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
});})(c__23603__auto___36046,out))
;
return ((function (switch__23523__auto__,c__23603__auto___36046,out){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_36042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36042[(0)] = state_machine__23524__auto__);

(statearr_36042[(1)] = (1));

return statearr_36042;
});
var state_machine__23524__auto____1 = (function (state_36021){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_36021);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e36043){if((e36043 instanceof Object)){
var ex__23527__auto__ = e36043;
var statearr_36044_36057 = state_36021;
(statearr_36044_36057[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36021);

return cljs.core.constant$keyword$21;
} else {
throw e36043;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__36058 = state_36021;
state_36021 = G__36058;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_36021){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_36021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto___36046,out))
})();
var state__23605__auto__ = (function (){var statearr_36045 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_36045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___36046);

return statearr_36045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto___36046,out))
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
var c__23603__auto___36196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto___36196,out){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto___36196,out){
return (function (state_36166){
var state_val_36167 = (state_36166[(1)]);
if((state_val_36167 === (7))){
var inst_36162 = (state_36166[(2)]);
var state_36166__$1 = state_36166;
var statearr_36168_36197 = state_36166__$1;
(statearr_36168_36197[(2)] = inst_36162);

(statearr_36168_36197[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36167 === (1))){
var inst_36129 = (new Array(n));
var inst_36130 = inst_36129;
var inst_36131 = (0);
var state_36166__$1 = (function (){var statearr_36169 = state_36166;
(statearr_36169[(7)] = inst_36130);

(statearr_36169[(8)] = inst_36131);

return statearr_36169;
})();
var statearr_36170_36198 = state_36166__$1;
(statearr_36170_36198[(2)] = null);

(statearr_36170_36198[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36167 === (4))){
var inst_36134 = (state_36166[(9)]);
var inst_36134__$1 = (state_36166[(2)]);
var inst_36135 = (inst_36134__$1 == null);
var inst_36136 = cljs.core.not(inst_36135);
var state_36166__$1 = (function (){var statearr_36171 = state_36166;
(statearr_36171[(9)] = inst_36134__$1);

return statearr_36171;
})();
if(inst_36136){
var statearr_36172_36199 = state_36166__$1;
(statearr_36172_36199[(1)] = (5));

} else {
var statearr_36173_36200 = state_36166__$1;
(statearr_36173_36200[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_36167 === (15))){
var inst_36156 = (state_36166[(2)]);
var state_36166__$1 = state_36166;
var statearr_36174_36201 = state_36166__$1;
(statearr_36174_36201[(2)] = inst_36156);

(statearr_36174_36201[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36167 === (13))){
var state_36166__$1 = state_36166;
var statearr_36175_36202 = state_36166__$1;
(statearr_36175_36202[(2)] = null);

(statearr_36175_36202[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36167 === (6))){
var inst_36131 = (state_36166[(8)]);
var inst_36152 = (inst_36131 > (0));
var state_36166__$1 = state_36166;
if(cljs.core.truth_(inst_36152)){
var statearr_36176_36203 = state_36166__$1;
(statearr_36176_36203[(1)] = (12));

} else {
var statearr_36177_36204 = state_36166__$1;
(statearr_36177_36204[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_36167 === (3))){
var inst_36164 = (state_36166[(2)]);
var state_36166__$1 = state_36166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36166__$1,inst_36164);
} else {
if((state_val_36167 === (12))){
var inst_36130 = (state_36166[(7)]);
var inst_36154 = cljs.core.vec(inst_36130);
var state_36166__$1 = state_36166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36166__$1,(15),out,inst_36154);
} else {
if((state_val_36167 === (2))){
var state_36166__$1 = state_36166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36166__$1,(4),ch);
} else {
if((state_val_36167 === (11))){
var inst_36146 = (state_36166[(2)]);
var inst_36147 = (new Array(n));
var inst_36130 = inst_36147;
var inst_36131 = (0);
var state_36166__$1 = (function (){var statearr_36178 = state_36166;
(statearr_36178[(10)] = inst_36146);

(statearr_36178[(7)] = inst_36130);

(statearr_36178[(8)] = inst_36131);

return statearr_36178;
})();
var statearr_36179_36205 = state_36166__$1;
(statearr_36179_36205[(2)] = null);

(statearr_36179_36205[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36167 === (9))){
var inst_36130 = (state_36166[(7)]);
var inst_36144 = cljs.core.vec(inst_36130);
var state_36166__$1 = state_36166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36166__$1,(11),out,inst_36144);
} else {
if((state_val_36167 === (5))){
var inst_36139 = (state_36166[(11)]);
var inst_36130 = (state_36166[(7)]);
var inst_36131 = (state_36166[(8)]);
var inst_36134 = (state_36166[(9)]);
var inst_36138 = (inst_36130[inst_36131] = inst_36134);
var inst_36139__$1 = (inst_36131 + (1));
var inst_36140 = (inst_36139__$1 < n);
var state_36166__$1 = (function (){var statearr_36180 = state_36166;
(statearr_36180[(12)] = inst_36138);

(statearr_36180[(11)] = inst_36139__$1);

return statearr_36180;
})();
if(cljs.core.truth_(inst_36140)){
var statearr_36181_36206 = state_36166__$1;
(statearr_36181_36206[(1)] = (8));

} else {
var statearr_36182_36207 = state_36166__$1;
(statearr_36182_36207[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_36167 === (14))){
var inst_36159 = (state_36166[(2)]);
var inst_36160 = cljs.core.async.close_BANG_(out);
var state_36166__$1 = (function (){var statearr_36184 = state_36166;
(statearr_36184[(13)] = inst_36159);

return statearr_36184;
})();
var statearr_36185_36208 = state_36166__$1;
(statearr_36185_36208[(2)] = inst_36160);

(statearr_36185_36208[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36167 === (10))){
var inst_36150 = (state_36166[(2)]);
var state_36166__$1 = state_36166;
var statearr_36186_36209 = state_36166__$1;
(statearr_36186_36209[(2)] = inst_36150);

(statearr_36186_36209[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36167 === (8))){
var inst_36139 = (state_36166[(11)]);
var inst_36130 = (state_36166[(7)]);
var tmp36183 = inst_36130;
var inst_36130__$1 = tmp36183;
var inst_36131 = inst_36139;
var state_36166__$1 = (function (){var statearr_36187 = state_36166;
(statearr_36187[(7)] = inst_36130__$1);

(statearr_36187[(8)] = inst_36131);

return statearr_36187;
})();
var statearr_36188_36210 = state_36166__$1;
(statearr_36188_36210[(2)] = null);

(statearr_36188_36210[(1)] = (2));


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
});})(c__23603__auto___36196,out))
;
return ((function (switch__23523__auto__,c__23603__auto___36196,out){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_36192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36192[(0)] = state_machine__23524__auto__);

(statearr_36192[(1)] = (1));

return statearr_36192;
});
var state_machine__23524__auto____1 = (function (state_36166){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_36166);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e36193){if((e36193 instanceof Object)){
var ex__23527__auto__ = e36193;
var statearr_36194_36211 = state_36166;
(statearr_36194_36211[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36166);

return cljs.core.constant$keyword$21;
} else {
throw e36193;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__36212 = state_36166;
state_36166 = G__36212;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_36166){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_36166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto___36196,out))
})();
var state__23605__auto__ = (function (){var statearr_36195 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_36195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___36196);

return statearr_36195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto___36196,out))
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
var c__23603__auto___36360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto___36360,out){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto___36360,out){
return (function (state_36329){
var state_val_36330 = (state_36329[(1)]);
if((state_val_36330 === (7))){
var inst_36325 = (state_36329[(2)]);
var state_36329__$1 = state_36329;
var statearr_36331_36361 = state_36329__$1;
(statearr_36331_36361[(2)] = inst_36325);

(statearr_36331_36361[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36330 === (1))){
var inst_36288 = [];
var inst_36289 = inst_36288;
var inst_36290 = cljs.core.constant$keyword$36;
var state_36329__$1 = (function (){var statearr_36332 = state_36329;
(statearr_36332[(7)] = inst_36290);

(statearr_36332[(8)] = inst_36289);

return statearr_36332;
})();
var statearr_36333_36362 = state_36329__$1;
(statearr_36333_36362[(2)] = null);

(statearr_36333_36362[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36330 === (4))){
var inst_36293 = (state_36329[(9)]);
var inst_36293__$1 = (state_36329[(2)]);
var inst_36294 = (inst_36293__$1 == null);
var inst_36295 = cljs.core.not(inst_36294);
var state_36329__$1 = (function (){var statearr_36334 = state_36329;
(statearr_36334[(9)] = inst_36293__$1);

return statearr_36334;
})();
if(inst_36295){
var statearr_36335_36363 = state_36329__$1;
(statearr_36335_36363[(1)] = (5));

} else {
var statearr_36336_36364 = state_36329__$1;
(statearr_36336_36364[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_36330 === (15))){
var inst_36319 = (state_36329[(2)]);
var state_36329__$1 = state_36329;
var statearr_36337_36365 = state_36329__$1;
(statearr_36337_36365[(2)] = inst_36319);

(statearr_36337_36365[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36330 === (13))){
var state_36329__$1 = state_36329;
var statearr_36338_36366 = state_36329__$1;
(statearr_36338_36366[(2)] = null);

(statearr_36338_36366[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36330 === (6))){
var inst_36289 = (state_36329[(8)]);
var inst_36314 = inst_36289.length;
var inst_36315 = (inst_36314 > (0));
var state_36329__$1 = state_36329;
if(cljs.core.truth_(inst_36315)){
var statearr_36339_36367 = state_36329__$1;
(statearr_36339_36367[(1)] = (12));

} else {
var statearr_36340_36368 = state_36329__$1;
(statearr_36340_36368[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_36330 === (3))){
var inst_36327 = (state_36329[(2)]);
var state_36329__$1 = state_36329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36329__$1,inst_36327);
} else {
if((state_val_36330 === (12))){
var inst_36289 = (state_36329[(8)]);
var inst_36317 = cljs.core.vec(inst_36289);
var state_36329__$1 = state_36329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36329__$1,(15),out,inst_36317);
} else {
if((state_val_36330 === (2))){
var state_36329__$1 = state_36329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36329__$1,(4),ch);
} else {
if((state_val_36330 === (11))){
var inst_36293 = (state_36329[(9)]);
var inst_36297 = (state_36329[(10)]);
var inst_36307 = (state_36329[(2)]);
var inst_36308 = [];
var inst_36309 = inst_36308.push(inst_36293);
var inst_36289 = inst_36308;
var inst_36290 = inst_36297;
var state_36329__$1 = (function (){var statearr_36341 = state_36329;
(statearr_36341[(11)] = inst_36307);

(statearr_36341[(7)] = inst_36290);

(statearr_36341[(8)] = inst_36289);

(statearr_36341[(12)] = inst_36309);

return statearr_36341;
})();
var statearr_36342_36369 = state_36329__$1;
(statearr_36342_36369[(2)] = null);

(statearr_36342_36369[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36330 === (9))){
var inst_36289 = (state_36329[(8)]);
var inst_36305 = cljs.core.vec(inst_36289);
var state_36329__$1 = state_36329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36329__$1,(11),out,inst_36305);
} else {
if((state_val_36330 === (5))){
var inst_36290 = (state_36329[(7)]);
var inst_36293 = (state_36329[(9)]);
var inst_36297 = (state_36329[(10)]);
var inst_36297__$1 = (function (){var G__36343 = inst_36293;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36343) : f.call(null,G__36343));
})();
var inst_36298 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36297__$1,inst_36290);
var inst_36299 = cljs.core.keyword_identical_QMARK_(inst_36290,cljs.core.constant$keyword$36);
var inst_36300 = (inst_36298) || (inst_36299);
var state_36329__$1 = (function (){var statearr_36344 = state_36329;
(statearr_36344[(10)] = inst_36297__$1);

return statearr_36344;
})();
if(cljs.core.truth_(inst_36300)){
var statearr_36345_36370 = state_36329__$1;
(statearr_36345_36370[(1)] = (8));

} else {
var statearr_36346_36371 = state_36329__$1;
(statearr_36346_36371[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_36330 === (14))){
var inst_36322 = (state_36329[(2)]);
var inst_36323 = cljs.core.async.close_BANG_(out);
var state_36329__$1 = (function (){var statearr_36348 = state_36329;
(statearr_36348[(13)] = inst_36322);

return statearr_36348;
})();
var statearr_36349_36372 = state_36329__$1;
(statearr_36349_36372[(2)] = inst_36323);

(statearr_36349_36372[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36330 === (10))){
var inst_36312 = (state_36329[(2)]);
var state_36329__$1 = state_36329;
var statearr_36350_36373 = state_36329__$1;
(statearr_36350_36373[(2)] = inst_36312);

(statearr_36350_36373[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_36330 === (8))){
var inst_36293 = (state_36329[(9)]);
var inst_36289 = (state_36329[(8)]);
var inst_36297 = (state_36329[(10)]);
var inst_36302 = inst_36289.push(inst_36293);
var tmp36347 = inst_36289;
var inst_36289__$1 = tmp36347;
var inst_36290 = inst_36297;
var state_36329__$1 = (function (){var statearr_36351 = state_36329;
(statearr_36351[(14)] = inst_36302);

(statearr_36351[(7)] = inst_36290);

(statearr_36351[(8)] = inst_36289__$1);

return statearr_36351;
})();
var statearr_36352_36374 = state_36329__$1;
(statearr_36352_36374[(2)] = null);

(statearr_36352_36374[(1)] = (2));


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
});})(c__23603__auto___36360,out))
;
return ((function (switch__23523__auto__,c__23603__auto___36360,out){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_36356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36356[(0)] = state_machine__23524__auto__);

(statearr_36356[(1)] = (1));

return statearr_36356;
});
var state_machine__23524__auto____1 = (function (state_36329){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_36329);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e36357){if((e36357 instanceof Object)){
var ex__23527__auto__ = e36357;
var statearr_36358_36375 = state_36329;
(statearr_36358_36375[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36329);

return cljs.core.constant$keyword$21;
} else {
throw e36357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__36376 = state_36329;
state_36329 = G__36376;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_36329){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_36329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto___36360,out))
})();
var state__23605__auto__ = (function (){var statearr_36359 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_36359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto___36360);

return statearr_36359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto___36360,out))
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
