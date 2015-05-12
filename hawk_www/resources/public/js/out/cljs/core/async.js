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
if(typeof cljs.core.async.t40219 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40219 = (function (f,fn_handler,meta40220){
this.f = f;
this.fn_handler = fn_handler;
this.meta40220 = meta40220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40219.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t40219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t40219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40221){
var self__ = this;
var _40221__$1 = this;
return self__.meta40220;
});

cljs.core.async.t40219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40221,meta40220__$1){
var self__ = this;
var _40221__$1 = this;
return (new cljs.core.async.t40219(self__.f,self__.fn_handler,meta40220__$1));
});

cljs.core.async.t40219.cljs$lang$type = true;

cljs.core.async.t40219.cljs$lang$ctorStr = "cljs.core.async/t40219";

cljs.core.async.t40219.cljs$lang$ctorPrWriter = (function (this__24265__auto__,writer__24266__auto__,opt__24267__auto__){
return cljs.core._write(writer__24266__auto__,"cljs.core.async/t40219");
});

cljs.core.async.__GT_t40219 = (function __GT_t40219(f__$1,fn_handler__$1,meta40220){
return (new cljs.core.async.t40219(f__$1,fn_handler__$1,meta40220));
});

}

return (new cljs.core.async.t40219(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40223 = buff;
if(G__40223){
var bit__24359__auto__ = null;
if(cljs.core.truth_((function (){var or__23678__auto__ = bit__24359__auto__;
if(cljs.core.truth_(or__23678__auto__)){
return or__23678__auto__;
} else {
return G__40223.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__40223.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40223);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40223);
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
var val_40240 = (function (){var G__40237 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40237) : cljs.core.deref.call(null,G__40237));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__40238_40241 = val_40240;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40238_40241) : fn1.call(null,G__40238_40241));
} else {
cljs.core.async.impl.dispatch.run(((function (val_40240,ret){
return (function (){
var G__40239 = val_40240;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40239) : fn1.call(null,G__40239));
});})(val_40240,ret))
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
var G__40250 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40250) : cljs.core.deref.call(null,G__40250));
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
var ret = (function (){var G__40251 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40251) : cljs.core.deref.call(null,G__40251));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__40252_40254 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40252_40254) : fn1.call(null,G__40252_40254));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__40253 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40253) : fn1.call(null,G__40253));
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
var n__24565__auto___40255 = n;
var x_40256 = (0);
while(true){
if((x_40256 < n__24565__auto___40255)){
(a[x_40256] = (0));

var G__40257 = (x_40256 + (1));
x_40256 = G__40257;
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

var G__40258 = (i + (1));
i = G__40258;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__40266 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40266) : cljs.core.atom.call(null,G__40266));
})();
if(typeof cljs.core.async.t40267 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40267 = (function (flag,alt_flag,meta40268){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta40268 = meta40268;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40267.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40267.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__40270 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40270) : cljs.core.deref.call(null,G__40270));
});})(flag))
;

cljs.core.async.t40267.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__40271_40273 = self__.flag;
var G__40272_40274 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__40271_40273,G__40272_40274) : cljs.core.reset_BANG_.call(null,G__40271_40273,G__40272_40274));

return true;
});})(flag))
;

cljs.core.async.t40267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40269){
var self__ = this;
var _40269__$1 = this;
return self__.meta40268;
});})(flag))
;

cljs.core.async.t40267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40269,meta40268__$1){
var self__ = this;
var _40269__$1 = this;
return (new cljs.core.async.t40267(self__.flag,self__.alt_flag,meta40268__$1));
});})(flag))
;

cljs.core.async.t40267.cljs$lang$type = true;

cljs.core.async.t40267.cljs$lang$ctorStr = "cljs.core.async/t40267";

cljs.core.async.t40267.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__24265__auto__,writer__24266__auto__,opt__24267__auto__){
return cljs.core._write(writer__24266__auto__,"cljs.core.async/t40267");
});})(flag))
;

cljs.core.async.__GT_t40267 = ((function (flag){
return (function __GT_t40267(flag__$1,alt_flag__$1,meta40268){
return (new cljs.core.async.t40267(flag__$1,alt_flag__$1,meta40268));
});})(flag))
;

}

return (new cljs.core.async.t40267(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t40278 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40278 = (function (cb,flag,alt_handler,meta40279){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta40279 = meta40279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40278.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40278.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t40278.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t40278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40280){
var self__ = this;
var _40280__$1 = this;
return self__.meta40279;
});

cljs.core.async.t40278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40280,meta40279__$1){
var self__ = this;
var _40280__$1 = this;
return (new cljs.core.async.t40278(self__.cb,self__.flag,self__.alt_handler,meta40279__$1));
});

cljs.core.async.t40278.cljs$lang$type = true;

cljs.core.async.t40278.cljs$lang$ctorStr = "cljs.core.async/t40278";

cljs.core.async.t40278.cljs$lang$ctorPrWriter = (function (this__24265__auto__,writer__24266__auto__,opt__24267__auto__){
return cljs.core._write(writer__24266__auto__,"cljs.core.async/t40278");
});

cljs.core.async.__GT_t40278 = (function __GT_t40278(cb__$1,flag__$1,alt_handler__$1,meta40279){
return (new cljs.core.async.t40278(cb__$1,flag__$1,alt_handler__$1,meta40279));
});

}

return (new cljs.core.async.t40278(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__40288 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__40288) : port.call(null,G__40288));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__40289 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__40289) : port.call(null,G__40289));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40281_SHARP_){
var G__40290 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40281_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40290) : fret.call(null,G__40290));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40282_SHARP_){
var G__40291 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40282_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40291) : fret.call(null,G__40291));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40292 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40292) : cljs.core.deref.call(null,G__40292));
})(),(function (){var or__23678__auto__ = wport;
if(cljs.core.truth_(or__23678__auto__)){
return or__23678__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40293 = (i + (1));
i = G__40293;
continue;
}
} else {
return null;
}
break;
}
})();
var or__23678__auto__ = ret;
if(cljs.core.truth_(or__23678__auto__)){
return or__23678__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__23666__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__23666__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__23666__auto__;
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
var alts_BANG___delegate = function (ports,p__40294){
var map__40296 = p__40294;
var map__40296__$1 = ((cljs.core.seq_QMARK_(map__40296))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40296):map__40296);
var opts = map__40296__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__40294 = null;
if (arguments.length > 1) {
var G__40297__i = 0, G__40297__a = new Array(arguments.length -  1);
while (G__40297__i < G__40297__a.length) {G__40297__a[G__40297__i] = arguments[G__40297__i + 1]; ++G__40297__i;}
  p__40294 = new cljs.core.IndexedSeq(G__40297__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__40294);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__40298){
var ports = cljs.core.first(arglist__40298);
var p__40294 = cljs.core.rest(arglist__40298);
return alts_BANG___delegate(ports,p__40294);
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
var c__30816__auto___40396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto___40396){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto___40396){
return (function (state_40372){
var state_val_40373 = (state_40372[(1)]);
if((state_val_40373 === (7))){
var inst_40368 = (state_40372[(2)]);
var state_40372__$1 = state_40372;
var statearr_40374_40397 = state_40372__$1;
(statearr_40374_40397[(2)] = inst_40368);

(statearr_40374_40397[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40373 === (1))){
var state_40372__$1 = state_40372;
var statearr_40375_40398 = state_40372__$1;
(statearr_40375_40398[(2)] = null);

(statearr_40375_40398[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40373 === (4))){
var inst_40351 = (state_40372[(7)]);
var inst_40351__$1 = (state_40372[(2)]);
var inst_40352 = (inst_40351__$1 == null);
var state_40372__$1 = (function (){var statearr_40376 = state_40372;
(statearr_40376[(7)] = inst_40351__$1);

return statearr_40376;
})();
if(cljs.core.truth_(inst_40352)){
var statearr_40377_40399 = state_40372__$1;
(statearr_40377_40399[(1)] = (5));

} else {
var statearr_40378_40400 = state_40372__$1;
(statearr_40378_40400[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40373 === (13))){
var state_40372__$1 = state_40372;
var statearr_40379_40401 = state_40372__$1;
(statearr_40379_40401[(2)] = null);

(statearr_40379_40401[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40373 === (6))){
var inst_40351 = (state_40372[(7)]);
var state_40372__$1 = state_40372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40372__$1,(11),to,inst_40351);
} else {
if((state_val_40373 === (3))){
var inst_40370 = (state_40372[(2)]);
var state_40372__$1 = state_40372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40372__$1,inst_40370);
} else {
if((state_val_40373 === (12))){
var state_40372__$1 = state_40372;
var statearr_40380_40402 = state_40372__$1;
(statearr_40380_40402[(2)] = null);

(statearr_40380_40402[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40373 === (2))){
var state_40372__$1 = state_40372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40372__$1,(4),from);
} else {
if((state_val_40373 === (11))){
var inst_40361 = (state_40372[(2)]);
var state_40372__$1 = state_40372;
if(cljs.core.truth_(inst_40361)){
var statearr_40381_40403 = state_40372__$1;
(statearr_40381_40403[(1)] = (12));

} else {
var statearr_40382_40404 = state_40372__$1;
(statearr_40382_40404[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40373 === (9))){
var state_40372__$1 = state_40372;
var statearr_40383_40405 = state_40372__$1;
(statearr_40383_40405[(2)] = null);

(statearr_40383_40405[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40373 === (5))){
var state_40372__$1 = state_40372;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40384_40406 = state_40372__$1;
(statearr_40384_40406[(1)] = (8));

} else {
var statearr_40385_40407 = state_40372__$1;
(statearr_40385_40407[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40373 === (14))){
var inst_40366 = (state_40372[(2)]);
var state_40372__$1 = state_40372;
var statearr_40386_40408 = state_40372__$1;
(statearr_40386_40408[(2)] = inst_40366);

(statearr_40386_40408[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40373 === (10))){
var inst_40358 = (state_40372[(2)]);
var state_40372__$1 = state_40372;
var statearr_40387_40409 = state_40372__$1;
(statearr_40387_40409[(2)] = inst_40358);

(statearr_40387_40409[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40373 === (8))){
var inst_40355 = cljs.core.async.close_BANG_(to);
var state_40372__$1 = state_40372;
var statearr_40388_40410 = state_40372__$1;
(statearr_40388_40410[(2)] = inst_40355);

(statearr_40388_40410[(1)] = (10));


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
});})(c__30816__auto___40396))
;
return ((function (switch__30736__auto__,c__30816__auto___40396){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_40392 = [null,null,null,null,null,null,null,null];
(statearr_40392[(0)] = state_machine__30737__auto__);

(statearr_40392[(1)] = (1));

return statearr_40392;
});
var state_machine__30737__auto____1 = (function (state_40372){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_40372);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e40393){if((e40393 instanceof Object)){
var ex__30740__auto__ = e40393;
var statearr_40394_40411 = state_40372;
(statearr_40394_40411[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40372);

return cljs.core.constant$keyword$21;
} else {
throw e40393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__40412 = state_40372;
state_40372 = G__40412;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_40372){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_40372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto___40396))
})();
var state__30818__auto__ = (function (){var statearr_40395 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_40395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___40396);

return statearr_40395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto___40396))
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
return (function (p__40598){
var vec__40599 = p__40598;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40599,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40599,(1),null);
var job = vec__40599;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30816__auto___40783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto___40783,res,vec__40599,v,p,job,jobs,results){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto___40783,res,vec__40599,v,p,job,jobs,results){
return (function (state_40604){
var state_val_40605 = (state_40604[(1)]);
if((state_val_40605 === (2))){
var inst_40601 = (state_40604[(2)]);
var inst_40602 = cljs.core.async.close_BANG_(res);
var state_40604__$1 = (function (){var statearr_40606 = state_40604;
(statearr_40606[(7)] = inst_40601);

return statearr_40606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40604__$1,inst_40602);
} else {
if((state_val_40605 === (1))){
var state_40604__$1 = state_40604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40604__$1,(2),res,v);
} else {
return null;
}
}
});})(c__30816__auto___40783,res,vec__40599,v,p,job,jobs,results))
;
return ((function (switch__30736__auto__,c__30816__auto___40783,res,vec__40599,v,p,job,jobs,results){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_40610 = [null,null,null,null,null,null,null,null];
(statearr_40610[(0)] = state_machine__30737__auto__);

(statearr_40610[(1)] = (1));

return statearr_40610;
});
var state_machine__30737__auto____1 = (function (state_40604){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_40604);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e40611){if((e40611 instanceof Object)){
var ex__30740__auto__ = e40611;
var statearr_40612_40784 = state_40604;
(statearr_40612_40784[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40604);

return cljs.core.constant$keyword$21;
} else {
throw e40611;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__40785 = state_40604;
state_40604 = G__40785;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_40604){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_40604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto___40783,res,vec__40599,v,p,job,jobs,results))
})();
var state__30818__auto__ = (function (){var statearr_40613 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_40613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___40783);

return statearr_40613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto___40783,res,vec__40599,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40614){
var vec__40615 = p__40614;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40615,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40615,(1),null);
var job = vec__40615;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__40616_40786 = v;
var G__40617_40787 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__40616_40786,G__40617_40787) : xf.call(null,G__40616_40786,G__40617_40787));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__24565__auto___40788 = n;
var __40789 = (0);
while(true){
if((__40789 < n__24565__auto___40788)){
var G__40618_40790 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40618_40790) {
case "async":
var c__30816__auto___40792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40789,c__30816__auto___40792,G__40618_40790,n__24565__auto___40788,jobs,results,process,async){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (__40789,c__30816__auto___40792,G__40618_40790,n__24565__auto___40788,jobs,results,process,async){
return (function (state_40631){
var state_val_40632 = (state_40631[(1)]);
if((state_val_40632 === (7))){
var inst_40627 = (state_40631[(2)]);
var state_40631__$1 = state_40631;
var statearr_40633_40793 = state_40631__$1;
(statearr_40633_40793[(2)] = inst_40627);

(statearr_40633_40793[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40632 === (6))){
var state_40631__$1 = state_40631;
var statearr_40634_40794 = state_40631__$1;
(statearr_40634_40794[(2)] = null);

(statearr_40634_40794[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40632 === (5))){
var state_40631__$1 = state_40631;
var statearr_40635_40795 = state_40631__$1;
(statearr_40635_40795[(2)] = null);

(statearr_40635_40795[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40632 === (4))){
var inst_40621 = (state_40631[(2)]);
var inst_40622 = async(inst_40621);
var state_40631__$1 = state_40631;
if(cljs.core.truth_(inst_40622)){
var statearr_40636_40796 = state_40631__$1;
(statearr_40636_40796[(1)] = (5));

} else {
var statearr_40637_40797 = state_40631__$1;
(statearr_40637_40797[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40632 === (3))){
var inst_40629 = (state_40631[(2)]);
var state_40631__$1 = state_40631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40631__$1,inst_40629);
} else {
if((state_val_40632 === (2))){
var state_40631__$1 = state_40631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40631__$1,(4),jobs);
} else {
if((state_val_40632 === (1))){
var state_40631__$1 = state_40631;
var statearr_40638_40798 = state_40631__$1;
(statearr_40638_40798[(2)] = null);

(statearr_40638_40798[(1)] = (2));


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
});})(__40789,c__30816__auto___40792,G__40618_40790,n__24565__auto___40788,jobs,results,process,async))
;
return ((function (__40789,switch__30736__auto__,c__30816__auto___40792,G__40618_40790,n__24565__auto___40788,jobs,results,process,async){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_40642 = [null,null,null,null,null,null,null];
(statearr_40642[(0)] = state_machine__30737__auto__);

(statearr_40642[(1)] = (1));

return statearr_40642;
});
var state_machine__30737__auto____1 = (function (state_40631){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_40631);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e40643){if((e40643 instanceof Object)){
var ex__30740__auto__ = e40643;
var statearr_40644_40799 = state_40631;
(statearr_40644_40799[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40631);

return cljs.core.constant$keyword$21;
} else {
throw e40643;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__40800 = state_40631;
state_40631 = G__40800;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_40631){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_40631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(__40789,switch__30736__auto__,c__30816__auto___40792,G__40618_40790,n__24565__auto___40788,jobs,results,process,async))
})();
var state__30818__auto__ = (function (){var statearr_40645 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_40645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___40792);

return statearr_40645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(__40789,c__30816__auto___40792,G__40618_40790,n__24565__auto___40788,jobs,results,process,async))
);


break;
case "compute":
var c__30816__auto___40801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40789,c__30816__auto___40801,G__40618_40790,n__24565__auto___40788,jobs,results,process,async){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (__40789,c__30816__auto___40801,G__40618_40790,n__24565__auto___40788,jobs,results,process,async){
return (function (state_40658){
var state_val_40659 = (state_40658[(1)]);
if((state_val_40659 === (7))){
var inst_40654 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
var statearr_40660_40802 = state_40658__$1;
(statearr_40660_40802[(2)] = inst_40654);

(statearr_40660_40802[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40659 === (6))){
var state_40658__$1 = state_40658;
var statearr_40661_40803 = state_40658__$1;
(statearr_40661_40803[(2)] = null);

(statearr_40661_40803[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40659 === (5))){
var state_40658__$1 = state_40658;
var statearr_40662_40804 = state_40658__$1;
(statearr_40662_40804[(2)] = null);

(statearr_40662_40804[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40659 === (4))){
var inst_40648 = (state_40658[(2)]);
var inst_40649 = process(inst_40648);
var state_40658__$1 = state_40658;
if(cljs.core.truth_(inst_40649)){
var statearr_40663_40805 = state_40658__$1;
(statearr_40663_40805[(1)] = (5));

} else {
var statearr_40664_40806 = state_40658__$1;
(statearr_40664_40806[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40659 === (3))){
var inst_40656 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40658__$1,inst_40656);
} else {
if((state_val_40659 === (2))){
var state_40658__$1 = state_40658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40658__$1,(4),jobs);
} else {
if((state_val_40659 === (1))){
var state_40658__$1 = state_40658;
var statearr_40665_40807 = state_40658__$1;
(statearr_40665_40807[(2)] = null);

(statearr_40665_40807[(1)] = (2));


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
});})(__40789,c__30816__auto___40801,G__40618_40790,n__24565__auto___40788,jobs,results,process,async))
;
return ((function (__40789,switch__30736__auto__,c__30816__auto___40801,G__40618_40790,n__24565__auto___40788,jobs,results,process,async){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_40669 = [null,null,null,null,null,null,null];
(statearr_40669[(0)] = state_machine__30737__auto__);

(statearr_40669[(1)] = (1));

return statearr_40669;
});
var state_machine__30737__auto____1 = (function (state_40658){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_40658);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e40670){if((e40670 instanceof Object)){
var ex__30740__auto__ = e40670;
var statearr_40671_40808 = state_40658;
(statearr_40671_40808[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40658);

return cljs.core.constant$keyword$21;
} else {
throw e40670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__40809 = state_40658;
state_40658 = G__40809;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_40658){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_40658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(__40789,switch__30736__auto__,c__30816__auto___40801,G__40618_40790,n__24565__auto___40788,jobs,results,process,async))
})();
var state__30818__auto__ = (function (){var statearr_40672 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_40672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___40801);

return statearr_40672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(__40789,c__30816__auto___40801,G__40618_40790,n__24565__auto___40788,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__40810 = (__40789 + (1));
__40789 = G__40810;
continue;
} else {
}
break;
}

var c__30816__auto___40811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto___40811,jobs,results,process,async){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto___40811,jobs,results,process,async){
return (function (state_40694){
var state_val_40695 = (state_40694[(1)]);
if((state_val_40695 === (9))){
var inst_40687 = (state_40694[(2)]);
var state_40694__$1 = (function (){var statearr_40696 = state_40694;
(statearr_40696[(7)] = inst_40687);

return statearr_40696;
})();
var statearr_40697_40812 = state_40694__$1;
(statearr_40697_40812[(2)] = null);

(statearr_40697_40812[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40695 === (8))){
var inst_40680 = (state_40694[(8)]);
var inst_40685 = (state_40694[(2)]);
var state_40694__$1 = (function (){var statearr_40698 = state_40694;
(statearr_40698[(9)] = inst_40685);

return statearr_40698;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40694__$1,(9),results,inst_40680);
} else {
if((state_val_40695 === (7))){
var inst_40690 = (state_40694[(2)]);
var state_40694__$1 = state_40694;
var statearr_40699_40813 = state_40694__$1;
(statearr_40699_40813[(2)] = inst_40690);

(statearr_40699_40813[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40695 === (6))){
var inst_40675 = (state_40694[(10)]);
var inst_40680 = (state_40694[(8)]);
var inst_40680__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_40681 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40682 = [inst_40675,inst_40680__$1];
var inst_40683 = (new cljs.core.PersistentVector(null,2,(5),inst_40681,inst_40682,null));
var state_40694__$1 = (function (){var statearr_40700 = state_40694;
(statearr_40700[(8)] = inst_40680__$1);

return statearr_40700;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40694__$1,(8),jobs,inst_40683);
} else {
if((state_val_40695 === (5))){
var inst_40678 = cljs.core.async.close_BANG_(jobs);
var state_40694__$1 = state_40694;
var statearr_40701_40814 = state_40694__$1;
(statearr_40701_40814[(2)] = inst_40678);

(statearr_40701_40814[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40695 === (4))){
var inst_40675 = (state_40694[(10)]);
var inst_40675__$1 = (state_40694[(2)]);
var inst_40676 = (inst_40675__$1 == null);
var state_40694__$1 = (function (){var statearr_40702 = state_40694;
(statearr_40702[(10)] = inst_40675__$1);

return statearr_40702;
})();
if(cljs.core.truth_(inst_40676)){
var statearr_40703_40815 = state_40694__$1;
(statearr_40703_40815[(1)] = (5));

} else {
var statearr_40704_40816 = state_40694__$1;
(statearr_40704_40816[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40695 === (3))){
var inst_40692 = (state_40694[(2)]);
var state_40694__$1 = state_40694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40694__$1,inst_40692);
} else {
if((state_val_40695 === (2))){
var state_40694__$1 = state_40694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40694__$1,(4),from);
} else {
if((state_val_40695 === (1))){
var state_40694__$1 = state_40694;
var statearr_40705_40817 = state_40694__$1;
(statearr_40705_40817[(2)] = null);

(statearr_40705_40817[(1)] = (2));


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
});})(c__30816__auto___40811,jobs,results,process,async))
;
return ((function (switch__30736__auto__,c__30816__auto___40811,jobs,results,process,async){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_40709 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40709[(0)] = state_machine__30737__auto__);

(statearr_40709[(1)] = (1));

return statearr_40709;
});
var state_machine__30737__auto____1 = (function (state_40694){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_40694);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e40710){if((e40710 instanceof Object)){
var ex__30740__auto__ = e40710;
var statearr_40711_40818 = state_40694;
(statearr_40711_40818[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40694);

return cljs.core.constant$keyword$21;
} else {
throw e40710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__40819 = state_40694;
state_40694 = G__40819;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_40694){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_40694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto___40811,jobs,results,process,async))
})();
var state__30818__auto__ = (function (){var statearr_40712 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_40712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___40811);

return statearr_40712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto___40811,jobs,results,process,async))
);


var c__30816__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto__,jobs,results,process,async){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto__,jobs,results,process,async){
return (function (state_40750){
var state_val_40751 = (state_40750[(1)]);
if((state_val_40751 === (7))){
var inst_40746 = (state_40750[(2)]);
var state_40750__$1 = state_40750;
var statearr_40752_40820 = state_40750__$1;
(statearr_40752_40820[(2)] = inst_40746);

(statearr_40752_40820[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40751 === (20))){
var state_40750__$1 = state_40750;
var statearr_40753_40821 = state_40750__$1;
(statearr_40753_40821[(2)] = null);

(statearr_40753_40821[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40751 === (1))){
var state_40750__$1 = state_40750;
var statearr_40754_40822 = state_40750__$1;
(statearr_40754_40822[(2)] = null);

(statearr_40754_40822[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40751 === (4))){
var inst_40715 = (state_40750[(7)]);
var inst_40715__$1 = (state_40750[(2)]);
var inst_40716 = (inst_40715__$1 == null);
var state_40750__$1 = (function (){var statearr_40755 = state_40750;
(statearr_40755[(7)] = inst_40715__$1);

return statearr_40755;
})();
if(cljs.core.truth_(inst_40716)){
var statearr_40756_40823 = state_40750__$1;
(statearr_40756_40823[(1)] = (5));

} else {
var statearr_40757_40824 = state_40750__$1;
(statearr_40757_40824[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40751 === (15))){
var inst_40728 = (state_40750[(8)]);
var state_40750__$1 = state_40750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40750__$1,(18),to,inst_40728);
} else {
if((state_val_40751 === (21))){
var inst_40741 = (state_40750[(2)]);
var state_40750__$1 = state_40750;
var statearr_40758_40825 = state_40750__$1;
(statearr_40758_40825[(2)] = inst_40741);

(statearr_40758_40825[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40751 === (13))){
var inst_40743 = (state_40750[(2)]);
var state_40750__$1 = (function (){var statearr_40759 = state_40750;
(statearr_40759[(9)] = inst_40743);

return statearr_40759;
})();
var statearr_40760_40826 = state_40750__$1;
(statearr_40760_40826[(2)] = null);

(statearr_40760_40826[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40751 === (6))){
var inst_40715 = (state_40750[(7)]);
var state_40750__$1 = state_40750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40750__$1,(11),inst_40715);
} else {
if((state_val_40751 === (17))){
var inst_40736 = (state_40750[(2)]);
var state_40750__$1 = state_40750;
if(cljs.core.truth_(inst_40736)){
var statearr_40761_40827 = state_40750__$1;
(statearr_40761_40827[(1)] = (19));

} else {
var statearr_40762_40828 = state_40750__$1;
(statearr_40762_40828[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40751 === (3))){
var inst_40748 = (state_40750[(2)]);
var state_40750__$1 = state_40750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40750__$1,inst_40748);
} else {
if((state_val_40751 === (12))){
var inst_40725 = (state_40750[(10)]);
var state_40750__$1 = state_40750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40750__$1,(14),inst_40725);
} else {
if((state_val_40751 === (2))){
var state_40750__$1 = state_40750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40750__$1,(4),results);
} else {
if((state_val_40751 === (19))){
var state_40750__$1 = state_40750;
var statearr_40763_40829 = state_40750__$1;
(statearr_40763_40829[(2)] = null);

(statearr_40763_40829[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40751 === (11))){
var inst_40725 = (state_40750[(2)]);
var state_40750__$1 = (function (){var statearr_40764 = state_40750;
(statearr_40764[(10)] = inst_40725);

return statearr_40764;
})();
var statearr_40765_40830 = state_40750__$1;
(statearr_40765_40830[(2)] = null);

(statearr_40765_40830[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40751 === (9))){
var state_40750__$1 = state_40750;
var statearr_40766_40831 = state_40750__$1;
(statearr_40766_40831[(2)] = null);

(statearr_40766_40831[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40751 === (5))){
var state_40750__$1 = state_40750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40767_40832 = state_40750__$1;
(statearr_40767_40832[(1)] = (8));

} else {
var statearr_40768_40833 = state_40750__$1;
(statearr_40768_40833[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40751 === (14))){
var inst_40728 = (state_40750[(8)]);
var inst_40730 = (state_40750[(11)]);
var inst_40728__$1 = (state_40750[(2)]);
var inst_40729 = (inst_40728__$1 == null);
var inst_40730__$1 = cljs.core.not(inst_40729);
var state_40750__$1 = (function (){var statearr_40769 = state_40750;
(statearr_40769[(8)] = inst_40728__$1);

(statearr_40769[(11)] = inst_40730__$1);

return statearr_40769;
})();
if(inst_40730__$1){
var statearr_40770_40834 = state_40750__$1;
(statearr_40770_40834[(1)] = (15));

} else {
var statearr_40771_40835 = state_40750__$1;
(statearr_40771_40835[(1)] = (16));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40751 === (16))){
var inst_40730 = (state_40750[(11)]);
var state_40750__$1 = state_40750;
var statearr_40772_40836 = state_40750__$1;
(statearr_40772_40836[(2)] = inst_40730);

(statearr_40772_40836[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40751 === (10))){
var inst_40722 = (state_40750[(2)]);
var state_40750__$1 = state_40750;
var statearr_40773_40837 = state_40750__$1;
(statearr_40773_40837[(2)] = inst_40722);

(statearr_40773_40837[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40751 === (18))){
var inst_40733 = (state_40750[(2)]);
var state_40750__$1 = state_40750;
var statearr_40774_40838 = state_40750__$1;
(statearr_40774_40838[(2)] = inst_40733);

(statearr_40774_40838[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40751 === (8))){
var inst_40719 = cljs.core.async.close_BANG_(to);
var state_40750__$1 = state_40750;
var statearr_40775_40839 = state_40750__$1;
(statearr_40775_40839[(2)] = inst_40719);

(statearr_40775_40839[(1)] = (10));


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
});})(c__30816__auto__,jobs,results,process,async))
;
return ((function (switch__30736__auto__,c__30816__auto__,jobs,results,process,async){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_40779 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40779[(0)] = state_machine__30737__auto__);

(statearr_40779[(1)] = (1));

return statearr_40779;
});
var state_machine__30737__auto____1 = (function (state_40750){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_40750);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e40780){if((e40780 instanceof Object)){
var ex__30740__auto__ = e40780;
var statearr_40781_40840 = state_40750;
(statearr_40781_40840[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40750);

return cljs.core.constant$keyword$21;
} else {
throw e40780;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__40841 = state_40750;
state_40750 = G__40841;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_40750){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_40750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto__,jobs,results,process,async))
})();
var state__30818__auto__ = (function (){var statearr_40782 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_40782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto__);

return statearr_40782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto__,jobs,results,process,async))
);

return c__30816__auto__;
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
var c__30816__auto___40964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto___40964,tc,fc){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto___40964,tc,fc){
return (function (state_40938){
var state_val_40939 = (state_40938[(1)]);
if((state_val_40939 === (7))){
var inst_40934 = (state_40938[(2)]);
var state_40938__$1 = state_40938;
var statearr_40940_40965 = state_40938__$1;
(statearr_40940_40965[(2)] = inst_40934);

(statearr_40940_40965[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40939 === (1))){
var state_40938__$1 = state_40938;
var statearr_40941_40966 = state_40938__$1;
(statearr_40941_40966[(2)] = null);

(statearr_40941_40966[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40939 === (4))){
var inst_40915 = (state_40938[(7)]);
var inst_40915__$1 = (state_40938[(2)]);
var inst_40916 = (inst_40915__$1 == null);
var state_40938__$1 = (function (){var statearr_40942 = state_40938;
(statearr_40942[(7)] = inst_40915__$1);

return statearr_40942;
})();
if(cljs.core.truth_(inst_40916)){
var statearr_40943_40967 = state_40938__$1;
(statearr_40943_40967[(1)] = (5));

} else {
var statearr_40944_40968 = state_40938__$1;
(statearr_40944_40968[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40939 === (13))){
var state_40938__$1 = state_40938;
var statearr_40945_40969 = state_40938__$1;
(statearr_40945_40969[(2)] = null);

(statearr_40945_40969[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40939 === (6))){
var inst_40915 = (state_40938[(7)]);
var inst_40921 = (function (){var G__40946 = inst_40915;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__40946) : p.call(null,G__40946));
})();
var state_40938__$1 = state_40938;
if(cljs.core.truth_(inst_40921)){
var statearr_40947_40970 = state_40938__$1;
(statearr_40947_40970[(1)] = (9));

} else {
var statearr_40948_40971 = state_40938__$1;
(statearr_40948_40971[(1)] = (10));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_40939 === (3))){
var inst_40936 = (state_40938[(2)]);
var state_40938__$1 = state_40938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40938__$1,inst_40936);
} else {
if((state_val_40939 === (12))){
var state_40938__$1 = state_40938;
var statearr_40949_40972 = state_40938__$1;
(statearr_40949_40972[(2)] = null);

(statearr_40949_40972[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40939 === (2))){
var state_40938__$1 = state_40938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40938__$1,(4),ch);
} else {
if((state_val_40939 === (11))){
var inst_40915 = (state_40938[(7)]);
var inst_40925 = (state_40938[(2)]);
var state_40938__$1 = state_40938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40938__$1,(8),inst_40925,inst_40915);
} else {
if((state_val_40939 === (9))){
var state_40938__$1 = state_40938;
var statearr_40950_40973 = state_40938__$1;
(statearr_40950_40973[(2)] = tc);

(statearr_40950_40973[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40939 === (5))){
var inst_40918 = cljs.core.async.close_BANG_(tc);
var inst_40919 = cljs.core.async.close_BANG_(fc);
var state_40938__$1 = (function (){var statearr_40951 = state_40938;
(statearr_40951[(8)] = inst_40918);

return statearr_40951;
})();
var statearr_40952_40974 = state_40938__$1;
(statearr_40952_40974[(2)] = inst_40919);

(statearr_40952_40974[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40939 === (14))){
var inst_40932 = (state_40938[(2)]);
var state_40938__$1 = state_40938;
var statearr_40953_40975 = state_40938__$1;
(statearr_40953_40975[(2)] = inst_40932);

(statearr_40953_40975[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40939 === (10))){
var state_40938__$1 = state_40938;
var statearr_40954_40976 = state_40938__$1;
(statearr_40954_40976[(2)] = fc);

(statearr_40954_40976[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_40939 === (8))){
var inst_40927 = (state_40938[(2)]);
var state_40938__$1 = state_40938;
if(cljs.core.truth_(inst_40927)){
var statearr_40955_40977 = state_40938__$1;
(statearr_40955_40977[(1)] = (12));

} else {
var statearr_40956_40978 = state_40938__$1;
(statearr_40956_40978[(1)] = (13));

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
});})(c__30816__auto___40964,tc,fc))
;
return ((function (switch__30736__auto__,c__30816__auto___40964,tc,fc){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_40960 = [null,null,null,null,null,null,null,null,null];
(statearr_40960[(0)] = state_machine__30737__auto__);

(statearr_40960[(1)] = (1));

return statearr_40960;
});
var state_machine__30737__auto____1 = (function (state_40938){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_40938);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e40961){if((e40961 instanceof Object)){
var ex__30740__auto__ = e40961;
var statearr_40962_40979 = state_40938;
(statearr_40962_40979[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40938);

return cljs.core.constant$keyword$21;
} else {
throw e40961;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__40980 = state_40938;
state_40938 = G__40980;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_40938){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_40938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto___40964,tc,fc))
})();
var state__30818__auto__ = (function (){var statearr_40963 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_40963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___40964);

return statearr_40963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto___40964,tc,fc))
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
var c__30816__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto__){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto__){
return (function (state_41029){
var state_val_41030 = (state_41029[(1)]);
if((state_val_41030 === (7))){
var inst_41025 = (state_41029[(2)]);
var state_41029__$1 = state_41029;
var statearr_41031_41049 = state_41029__$1;
(statearr_41031_41049[(2)] = inst_41025);

(statearr_41031_41049[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41030 === (6))){
var inst_41015 = (state_41029[(7)]);
var inst_41018 = (state_41029[(8)]);
var inst_41022 = (function (){var G__41032 = inst_41015;
var G__41033 = inst_41018;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41032,G__41033) : f.call(null,G__41032,G__41033));
})();
var inst_41015__$1 = inst_41022;
var state_41029__$1 = (function (){var statearr_41034 = state_41029;
(statearr_41034[(7)] = inst_41015__$1);

return statearr_41034;
})();
var statearr_41035_41050 = state_41029__$1;
(statearr_41035_41050[(2)] = null);

(statearr_41035_41050[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41030 === (5))){
var inst_41015 = (state_41029[(7)]);
var state_41029__$1 = state_41029;
var statearr_41036_41051 = state_41029__$1;
(statearr_41036_41051[(2)] = inst_41015);

(statearr_41036_41051[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41030 === (4))){
var inst_41018 = (state_41029[(8)]);
var inst_41018__$1 = (state_41029[(2)]);
var inst_41019 = (inst_41018__$1 == null);
var state_41029__$1 = (function (){var statearr_41037 = state_41029;
(statearr_41037[(8)] = inst_41018__$1);

return statearr_41037;
})();
if(cljs.core.truth_(inst_41019)){
var statearr_41038_41052 = state_41029__$1;
(statearr_41038_41052[(1)] = (5));

} else {
var statearr_41039_41053 = state_41029__$1;
(statearr_41039_41053[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41030 === (3))){
var inst_41027 = (state_41029[(2)]);
var state_41029__$1 = state_41029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41029__$1,inst_41027);
} else {
if((state_val_41030 === (2))){
var state_41029__$1 = state_41029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41029__$1,(4),ch);
} else {
if((state_val_41030 === (1))){
var inst_41015 = init;
var state_41029__$1 = (function (){var statearr_41040 = state_41029;
(statearr_41040[(7)] = inst_41015);

return statearr_41040;
})();
var statearr_41041_41054 = state_41029__$1;
(statearr_41041_41054[(2)] = null);

(statearr_41041_41054[(1)] = (2));


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
});})(c__30816__auto__))
;
return ((function (switch__30736__auto__,c__30816__auto__){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_41045 = [null,null,null,null,null,null,null,null,null];
(statearr_41045[(0)] = state_machine__30737__auto__);

(statearr_41045[(1)] = (1));

return statearr_41045;
});
var state_machine__30737__auto____1 = (function (state_41029){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_41029);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e41046){if((e41046 instanceof Object)){
var ex__30740__auto__ = e41046;
var statearr_41047_41055 = state_41029;
(statearr_41047_41055[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41029);

return cljs.core.constant$keyword$21;
} else {
throw e41046;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__41056 = state_41029;
state_41029 = G__41056;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_41029){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_41029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto__))
})();
var state__30818__auto__ = (function (){var statearr_41048 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_41048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto__);

return statearr_41048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto__))
);

return c__30816__auto__;
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
var c__30816__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto__){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto__){
return (function (state_41133){
var state_val_41134 = (state_41133[(1)]);
if((state_val_41134 === (7))){
var inst_41115 = (state_41133[(2)]);
var state_41133__$1 = state_41133;
var statearr_41135_41158 = state_41133__$1;
(statearr_41135_41158[(2)] = inst_41115);

(statearr_41135_41158[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41134 === (1))){
var inst_41109 = cljs.core.seq(coll);
var inst_41110 = inst_41109;
var state_41133__$1 = (function (){var statearr_41136 = state_41133;
(statearr_41136[(7)] = inst_41110);

return statearr_41136;
})();
var statearr_41137_41159 = state_41133__$1;
(statearr_41137_41159[(2)] = null);

(statearr_41137_41159[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41134 === (4))){
var inst_41110 = (state_41133[(7)]);
var inst_41113 = cljs.core.first(inst_41110);
var state_41133__$1 = state_41133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41133__$1,(7),ch,inst_41113);
} else {
if((state_val_41134 === (13))){
var inst_41127 = (state_41133[(2)]);
var state_41133__$1 = state_41133;
var statearr_41138_41160 = state_41133__$1;
(statearr_41138_41160[(2)] = inst_41127);

(statearr_41138_41160[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41134 === (6))){
var inst_41118 = (state_41133[(2)]);
var state_41133__$1 = state_41133;
if(cljs.core.truth_(inst_41118)){
var statearr_41139_41161 = state_41133__$1;
(statearr_41139_41161[(1)] = (8));

} else {
var statearr_41140_41162 = state_41133__$1;
(statearr_41140_41162[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41134 === (3))){
var inst_41131 = (state_41133[(2)]);
var state_41133__$1 = state_41133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41133__$1,inst_41131);
} else {
if((state_val_41134 === (12))){
var state_41133__$1 = state_41133;
var statearr_41141_41163 = state_41133__$1;
(statearr_41141_41163[(2)] = null);

(statearr_41141_41163[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41134 === (2))){
var inst_41110 = (state_41133[(7)]);
var state_41133__$1 = state_41133;
if(cljs.core.truth_(inst_41110)){
var statearr_41142_41164 = state_41133__$1;
(statearr_41142_41164[(1)] = (4));

} else {
var statearr_41143_41165 = state_41133__$1;
(statearr_41143_41165[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41134 === (11))){
var inst_41124 = cljs.core.async.close_BANG_(ch);
var state_41133__$1 = state_41133;
var statearr_41144_41166 = state_41133__$1;
(statearr_41144_41166[(2)] = inst_41124);

(statearr_41144_41166[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41134 === (9))){
var state_41133__$1 = state_41133;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41145_41167 = state_41133__$1;
(statearr_41145_41167[(1)] = (11));

} else {
var statearr_41146_41168 = state_41133__$1;
(statearr_41146_41168[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41134 === (5))){
var inst_41110 = (state_41133[(7)]);
var state_41133__$1 = state_41133;
var statearr_41147_41169 = state_41133__$1;
(statearr_41147_41169[(2)] = inst_41110);

(statearr_41147_41169[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41134 === (10))){
var inst_41129 = (state_41133[(2)]);
var state_41133__$1 = state_41133;
var statearr_41148_41170 = state_41133__$1;
(statearr_41148_41170[(2)] = inst_41129);

(statearr_41148_41170[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41134 === (8))){
var inst_41110 = (state_41133[(7)]);
var inst_41120 = cljs.core.next(inst_41110);
var inst_41110__$1 = inst_41120;
var state_41133__$1 = (function (){var statearr_41149 = state_41133;
(statearr_41149[(7)] = inst_41110__$1);

return statearr_41149;
})();
var statearr_41150_41171 = state_41133__$1;
(statearr_41150_41171[(2)] = null);

(statearr_41150_41171[(1)] = (2));


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
});})(c__30816__auto__))
;
return ((function (switch__30736__auto__,c__30816__auto__){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_41154 = [null,null,null,null,null,null,null,null];
(statearr_41154[(0)] = state_machine__30737__auto__);

(statearr_41154[(1)] = (1));

return statearr_41154;
});
var state_machine__30737__auto____1 = (function (state_41133){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_41133);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e41155){if((e41155 instanceof Object)){
var ex__30740__auto__ = e41155;
var statearr_41156_41172 = state_41133;
(statearr_41156_41172[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41133);

return cljs.core.constant$keyword$21;
} else {
throw e41155;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__41173 = state_41133;
state_41133 = G__41173;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_41133){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_41133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto__))
})();
var state__30818__auto__ = (function (){var statearr_41157 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_41157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto__);

return statearr_41157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto__))
);

return c__30816__auto__;
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

cljs.core.async.Mux = (function (){var obj41175 = {};
return obj41175;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__23666__auto__ = _;
if(and__23666__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__23666__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__24322__auto__ = (((_ == null))?null:_);
return (function (){var or__23678__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__41179 = x__24322__auto__;
return goog.typeOf(G__41179);
})()]);
if(or__23678__auto__){
return or__23678__auto__;
} else {
var or__23678__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__23678__auto____$1){
return or__23678__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj41181 = {};
return obj41181;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__23666__auto__ = m;
if(and__23666__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__23666__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__24322__auto__ = (((m == null))?null:m);
return (function (){var or__23678__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__41185 = x__24322__auto__;
return goog.typeOf(G__41185);
})()]);
if(or__23678__auto__){
return or__23678__auto__;
} else {
var or__23678__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__23678__auto____$1){
return or__23678__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__23666__auto__ = m;
if(and__23666__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__23666__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__24322__auto__ = (((m == null))?null:m);
return (function (){var or__23678__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__41189 = x__24322__auto__;
return goog.typeOf(G__41189);
})()]);
if(or__23678__auto__){
return or__23678__auto__;
} else {
var or__23678__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__23678__auto____$1){
return or__23678__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__23666__auto__ = m;
if(and__23666__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__23666__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__24322__auto__ = (((m == null))?null:m);
return (function (){var or__23678__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__41193 = x__24322__auto__;
return goog.typeOf(G__41193);
})()]);
if(or__23678__auto__){
return or__23678__auto__;
} else {
var or__23678__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__23678__auto____$1){
return or__23678__auto____$1;
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
var cs = (function (){var G__41423 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41423) : cljs.core.atom.call(null,G__41423));
})();
var m = (function (){
if(typeof cljs.core.async.t41424 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41424 = (function (cs,ch,mult,meta41425){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta41425 = meta41425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41424.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t41424.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t41424.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t41424.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__41427_41652 = self__.cs;
var G__41428_41653 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41427_41652,G__41428_41653) : cljs.core.reset_BANG_.call(null,G__41427_41652,G__41428_41653));

return null;
});})(cs))
;

cljs.core.async.t41424.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t41424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t41424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41426){
var self__ = this;
var _41426__$1 = this;
return self__.meta41425;
});})(cs))
;

cljs.core.async.t41424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41426,meta41425__$1){
var self__ = this;
var _41426__$1 = this;
return (new cljs.core.async.t41424(self__.cs,self__.ch,self__.mult,meta41425__$1));
});})(cs))
;

cljs.core.async.t41424.cljs$lang$type = true;

cljs.core.async.t41424.cljs$lang$ctorStr = "cljs.core.async/t41424";

cljs.core.async.t41424.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__24265__auto__,writer__24266__auto__,opt__24267__auto__){
return cljs.core._write(writer__24266__auto__,"cljs.core.async/t41424");
});})(cs))
;

cljs.core.async.__GT_t41424 = ((function (cs){
return (function __GT_t41424(cs__$1,ch__$1,mult__$1,meta41425){
return (new cljs.core.async.t41424(cs__$1,ch__$1,mult__$1,meta41425));
});})(cs))
;

}

return (new cljs.core.async.t41424(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__41429 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41429) : cljs.core.atom.call(null,G__41429));
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
var c__30816__auto___41654 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto___41654,cs,m,dchan,dctr,done){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto___41654,cs,m,dchan,dctr,done){
return (function (state_41560){
var state_val_41561 = (state_41560[(1)]);
if((state_val_41561 === (7))){
var inst_41556 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
var statearr_41562_41655 = state_41560__$1;
(statearr_41562_41655[(2)] = inst_41556);

(statearr_41562_41655[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (20))){
var inst_41461 = (state_41560[(7)]);
var inst_41471 = cljs.core.first(inst_41461);
var inst_41472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41471,(0),null);
var inst_41473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41471,(1),null);
var state_41560__$1 = (function (){var statearr_41563 = state_41560;
(statearr_41563[(8)] = inst_41472);

return statearr_41563;
})();
if(cljs.core.truth_(inst_41473)){
var statearr_41564_41656 = state_41560__$1;
(statearr_41564_41656[(1)] = (22));

} else {
var statearr_41565_41657 = state_41560__$1;
(statearr_41565_41657[(1)] = (23));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (27))){
var inst_41432 = (state_41560[(9)]);
var inst_41503 = (state_41560[(10)]);
var inst_41508 = (state_41560[(11)]);
var inst_41501 = (state_41560[(12)]);
var inst_41508__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41501,inst_41503);
var inst_41509 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41508__$1,inst_41432,done);
var state_41560__$1 = (function (){var statearr_41566 = state_41560;
(statearr_41566[(11)] = inst_41508__$1);

return statearr_41566;
})();
if(cljs.core.truth_(inst_41509)){
var statearr_41567_41658 = state_41560__$1;
(statearr_41567_41658[(1)] = (30));

} else {
var statearr_41568_41659 = state_41560__$1;
(statearr_41568_41659[(1)] = (31));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (1))){
var state_41560__$1 = state_41560;
var statearr_41569_41660 = state_41560__$1;
(statearr_41569_41660[(2)] = null);

(statearr_41569_41660[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (24))){
var inst_41461 = (state_41560[(7)]);
var inst_41478 = (state_41560[(2)]);
var inst_41479 = cljs.core.next(inst_41461);
var inst_41441 = inst_41479;
var inst_41442 = null;
var inst_41443 = (0);
var inst_41444 = (0);
var state_41560__$1 = (function (){var statearr_41570 = state_41560;
(statearr_41570[(13)] = inst_41442);

(statearr_41570[(14)] = inst_41444);

(statearr_41570[(15)] = inst_41441);

(statearr_41570[(16)] = inst_41478);

(statearr_41570[(17)] = inst_41443);

return statearr_41570;
})();
var statearr_41571_41661 = state_41560__$1;
(statearr_41571_41661[(2)] = null);

(statearr_41571_41661[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (39))){
var state_41560__$1 = state_41560;
var statearr_41575_41662 = state_41560__$1;
(statearr_41575_41662[(2)] = null);

(statearr_41575_41662[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (4))){
var inst_41432 = (state_41560[(9)]);
var inst_41432__$1 = (state_41560[(2)]);
var inst_41433 = (inst_41432__$1 == null);
var state_41560__$1 = (function (){var statearr_41576 = state_41560;
(statearr_41576[(9)] = inst_41432__$1);

return statearr_41576;
})();
if(cljs.core.truth_(inst_41433)){
var statearr_41577_41663 = state_41560__$1;
(statearr_41577_41663[(1)] = (5));

} else {
var statearr_41578_41664 = state_41560__$1;
(statearr_41578_41664[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (15))){
var inst_41442 = (state_41560[(13)]);
var inst_41444 = (state_41560[(14)]);
var inst_41441 = (state_41560[(15)]);
var inst_41443 = (state_41560[(17)]);
var inst_41457 = (state_41560[(2)]);
var inst_41458 = (inst_41444 + (1));
var tmp41572 = inst_41442;
var tmp41573 = inst_41441;
var tmp41574 = inst_41443;
var inst_41441__$1 = tmp41573;
var inst_41442__$1 = tmp41572;
var inst_41443__$1 = tmp41574;
var inst_41444__$1 = inst_41458;
var state_41560__$1 = (function (){var statearr_41579 = state_41560;
(statearr_41579[(18)] = inst_41457);

(statearr_41579[(13)] = inst_41442__$1);

(statearr_41579[(14)] = inst_41444__$1);

(statearr_41579[(15)] = inst_41441__$1);

(statearr_41579[(17)] = inst_41443__$1);

return statearr_41579;
})();
var statearr_41580_41665 = state_41560__$1;
(statearr_41580_41665[(2)] = null);

(statearr_41580_41665[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (21))){
var inst_41482 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
var statearr_41584_41666 = state_41560__$1;
(statearr_41584_41666[(2)] = inst_41482);

(statearr_41584_41666[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (31))){
var inst_41508 = (state_41560[(11)]);
var inst_41512 = done(null);
var inst_41513 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41508);
var state_41560__$1 = (function (){var statearr_41585 = state_41560;
(statearr_41585[(19)] = inst_41512);

return statearr_41585;
})();
var statearr_41586_41667 = state_41560__$1;
(statearr_41586_41667[(2)] = inst_41513);

(statearr_41586_41667[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (32))){
var inst_41502 = (state_41560[(20)]);
var inst_41503 = (state_41560[(10)]);
var inst_41501 = (state_41560[(12)]);
var inst_41500 = (state_41560[(21)]);
var inst_41515 = (state_41560[(2)]);
var inst_41516 = (inst_41503 + (1));
var tmp41581 = inst_41502;
var tmp41582 = inst_41501;
var tmp41583 = inst_41500;
var inst_41500__$1 = tmp41583;
var inst_41501__$1 = tmp41582;
var inst_41502__$1 = tmp41581;
var inst_41503__$1 = inst_41516;
var state_41560__$1 = (function (){var statearr_41587 = state_41560;
(statearr_41587[(22)] = inst_41515);

(statearr_41587[(20)] = inst_41502__$1);

(statearr_41587[(10)] = inst_41503__$1);

(statearr_41587[(12)] = inst_41501__$1);

(statearr_41587[(21)] = inst_41500__$1);

return statearr_41587;
})();
var statearr_41588_41668 = state_41560__$1;
(statearr_41588_41668[(2)] = null);

(statearr_41588_41668[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (40))){
var inst_41528 = (state_41560[(23)]);
var inst_41532 = done(null);
var inst_41533 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41528);
var state_41560__$1 = (function (){var statearr_41589 = state_41560;
(statearr_41589[(24)] = inst_41532);

return statearr_41589;
})();
var statearr_41590_41669 = state_41560__$1;
(statearr_41590_41669[(2)] = inst_41533);

(statearr_41590_41669[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (33))){
var inst_41519 = (state_41560[(25)]);
var inst_41521 = cljs.core.chunked_seq_QMARK_(inst_41519);
var state_41560__$1 = state_41560;
if(inst_41521){
var statearr_41591_41670 = state_41560__$1;
(statearr_41591_41670[(1)] = (36));

} else {
var statearr_41592_41671 = state_41560__$1;
(statearr_41592_41671[(1)] = (37));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (13))){
var inst_41451 = (state_41560[(26)]);
var inst_41454 = cljs.core.async.close_BANG_(inst_41451);
var state_41560__$1 = state_41560;
var statearr_41593_41672 = state_41560__$1;
(statearr_41593_41672[(2)] = inst_41454);

(statearr_41593_41672[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (22))){
var inst_41472 = (state_41560[(8)]);
var inst_41475 = cljs.core.async.close_BANG_(inst_41472);
var state_41560__$1 = state_41560;
var statearr_41594_41673 = state_41560__$1;
(statearr_41594_41673[(2)] = inst_41475);

(statearr_41594_41673[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (36))){
var inst_41519 = (state_41560[(25)]);
var inst_41523 = cljs.core.chunk_first(inst_41519);
var inst_41524 = cljs.core.chunk_rest(inst_41519);
var inst_41525 = cljs.core.count(inst_41523);
var inst_41500 = inst_41524;
var inst_41501 = inst_41523;
var inst_41502 = inst_41525;
var inst_41503 = (0);
var state_41560__$1 = (function (){var statearr_41595 = state_41560;
(statearr_41595[(20)] = inst_41502);

(statearr_41595[(10)] = inst_41503);

(statearr_41595[(12)] = inst_41501);

(statearr_41595[(21)] = inst_41500);

return statearr_41595;
})();
var statearr_41596_41674 = state_41560__$1;
(statearr_41596_41674[(2)] = null);

(statearr_41596_41674[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (41))){
var inst_41519 = (state_41560[(25)]);
var inst_41535 = (state_41560[(2)]);
var inst_41536 = cljs.core.next(inst_41519);
var inst_41500 = inst_41536;
var inst_41501 = null;
var inst_41502 = (0);
var inst_41503 = (0);
var state_41560__$1 = (function (){var statearr_41597 = state_41560;
(statearr_41597[(27)] = inst_41535);

(statearr_41597[(20)] = inst_41502);

(statearr_41597[(10)] = inst_41503);

(statearr_41597[(12)] = inst_41501);

(statearr_41597[(21)] = inst_41500);

return statearr_41597;
})();
var statearr_41598_41675 = state_41560__$1;
(statearr_41598_41675[(2)] = null);

(statearr_41598_41675[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (43))){
var state_41560__$1 = state_41560;
var statearr_41599_41676 = state_41560__$1;
(statearr_41599_41676[(2)] = null);

(statearr_41599_41676[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (29))){
var inst_41544 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
var statearr_41600_41677 = state_41560__$1;
(statearr_41600_41677[(2)] = inst_41544);

(statearr_41600_41677[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (44))){
var inst_41553 = (state_41560[(2)]);
var state_41560__$1 = (function (){var statearr_41601 = state_41560;
(statearr_41601[(28)] = inst_41553);

return statearr_41601;
})();
var statearr_41602_41678 = state_41560__$1;
(statearr_41602_41678[(2)] = null);

(statearr_41602_41678[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (6))){
var inst_41492 = (state_41560[(29)]);
var inst_41491 = (function (){var G__41603 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41603) : cljs.core.deref.call(null,G__41603));
})();
var inst_41492__$1 = cljs.core.keys(inst_41491);
var inst_41493 = cljs.core.count(inst_41492__$1);
var inst_41494 = (function (){var G__41604 = dctr;
var G__41605 = inst_41493;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41604,G__41605) : cljs.core.reset_BANG_.call(null,G__41604,G__41605));
})();
var inst_41499 = cljs.core.seq(inst_41492__$1);
var inst_41500 = inst_41499;
var inst_41501 = null;
var inst_41502 = (0);
var inst_41503 = (0);
var state_41560__$1 = (function (){var statearr_41606 = state_41560;
(statearr_41606[(20)] = inst_41502);

(statearr_41606[(10)] = inst_41503);

(statearr_41606[(30)] = inst_41494);

(statearr_41606[(12)] = inst_41501);

(statearr_41606[(21)] = inst_41500);

(statearr_41606[(29)] = inst_41492__$1);

return statearr_41606;
})();
var statearr_41607_41679 = state_41560__$1;
(statearr_41607_41679[(2)] = null);

(statearr_41607_41679[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (28))){
var inst_41500 = (state_41560[(21)]);
var inst_41519 = (state_41560[(25)]);
var inst_41519__$1 = cljs.core.seq(inst_41500);
var state_41560__$1 = (function (){var statearr_41608 = state_41560;
(statearr_41608[(25)] = inst_41519__$1);

return statearr_41608;
})();
if(inst_41519__$1){
var statearr_41609_41680 = state_41560__$1;
(statearr_41609_41680[(1)] = (33));

} else {
var statearr_41610_41681 = state_41560__$1;
(statearr_41610_41681[(1)] = (34));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (25))){
var inst_41502 = (state_41560[(20)]);
var inst_41503 = (state_41560[(10)]);
var inst_41505 = (inst_41503 < inst_41502);
var inst_41506 = inst_41505;
var state_41560__$1 = state_41560;
if(cljs.core.truth_(inst_41506)){
var statearr_41611_41682 = state_41560__$1;
(statearr_41611_41682[(1)] = (27));

} else {
var statearr_41612_41683 = state_41560__$1;
(statearr_41612_41683[(1)] = (28));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (34))){
var state_41560__$1 = state_41560;
var statearr_41613_41684 = state_41560__$1;
(statearr_41613_41684[(2)] = null);

(statearr_41613_41684[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (17))){
var state_41560__$1 = state_41560;
var statearr_41614_41685 = state_41560__$1;
(statearr_41614_41685[(2)] = null);

(statearr_41614_41685[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (3))){
var inst_41558 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41560__$1,inst_41558);
} else {
if((state_val_41561 === (12))){
var inst_41487 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
var statearr_41615_41686 = state_41560__$1;
(statearr_41615_41686[(2)] = inst_41487);

(statearr_41615_41686[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (2))){
var state_41560__$1 = state_41560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41560__$1,(4),ch);
} else {
if((state_val_41561 === (23))){
var state_41560__$1 = state_41560;
var statearr_41616_41687 = state_41560__$1;
(statearr_41616_41687[(2)] = null);

(statearr_41616_41687[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (35))){
var inst_41542 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
var statearr_41617_41688 = state_41560__$1;
(statearr_41617_41688[(2)] = inst_41542);

(statearr_41617_41688[(1)] = (29));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (19))){
var inst_41461 = (state_41560[(7)]);
var inst_41465 = cljs.core.chunk_first(inst_41461);
var inst_41466 = cljs.core.chunk_rest(inst_41461);
var inst_41467 = cljs.core.count(inst_41465);
var inst_41441 = inst_41466;
var inst_41442 = inst_41465;
var inst_41443 = inst_41467;
var inst_41444 = (0);
var state_41560__$1 = (function (){var statearr_41618 = state_41560;
(statearr_41618[(13)] = inst_41442);

(statearr_41618[(14)] = inst_41444);

(statearr_41618[(15)] = inst_41441);

(statearr_41618[(17)] = inst_41443);

return statearr_41618;
})();
var statearr_41619_41689 = state_41560__$1;
(statearr_41619_41689[(2)] = null);

(statearr_41619_41689[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (11))){
var inst_41441 = (state_41560[(15)]);
var inst_41461 = (state_41560[(7)]);
var inst_41461__$1 = cljs.core.seq(inst_41441);
var state_41560__$1 = (function (){var statearr_41620 = state_41560;
(statearr_41620[(7)] = inst_41461__$1);

return statearr_41620;
})();
if(inst_41461__$1){
var statearr_41621_41690 = state_41560__$1;
(statearr_41621_41690[(1)] = (16));

} else {
var statearr_41622_41691 = state_41560__$1;
(statearr_41622_41691[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (9))){
var inst_41489 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
var statearr_41623_41692 = state_41560__$1;
(statearr_41623_41692[(2)] = inst_41489);

(statearr_41623_41692[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (5))){
var inst_41439 = (function (){var G__41624 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41624) : cljs.core.deref.call(null,G__41624));
})();
var inst_41440 = cljs.core.seq(inst_41439);
var inst_41441 = inst_41440;
var inst_41442 = null;
var inst_41443 = (0);
var inst_41444 = (0);
var state_41560__$1 = (function (){var statearr_41625 = state_41560;
(statearr_41625[(13)] = inst_41442);

(statearr_41625[(14)] = inst_41444);

(statearr_41625[(15)] = inst_41441);

(statearr_41625[(17)] = inst_41443);

return statearr_41625;
})();
var statearr_41626_41693 = state_41560__$1;
(statearr_41626_41693[(2)] = null);

(statearr_41626_41693[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (14))){
var state_41560__$1 = state_41560;
var statearr_41627_41694 = state_41560__$1;
(statearr_41627_41694[(2)] = null);

(statearr_41627_41694[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (45))){
var inst_41550 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
var statearr_41628_41695 = state_41560__$1;
(statearr_41628_41695[(2)] = inst_41550);

(statearr_41628_41695[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (26))){
var inst_41492 = (state_41560[(29)]);
var inst_41546 = (state_41560[(2)]);
var inst_41547 = cljs.core.seq(inst_41492);
var state_41560__$1 = (function (){var statearr_41629 = state_41560;
(statearr_41629[(31)] = inst_41546);

return statearr_41629;
})();
if(inst_41547){
var statearr_41630_41696 = state_41560__$1;
(statearr_41630_41696[(1)] = (42));

} else {
var statearr_41631_41697 = state_41560__$1;
(statearr_41631_41697[(1)] = (43));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (16))){
var inst_41461 = (state_41560[(7)]);
var inst_41463 = cljs.core.chunked_seq_QMARK_(inst_41461);
var state_41560__$1 = state_41560;
if(inst_41463){
var statearr_41632_41698 = state_41560__$1;
(statearr_41632_41698[(1)] = (19));

} else {
var statearr_41633_41699 = state_41560__$1;
(statearr_41633_41699[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (38))){
var inst_41539 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
var statearr_41634_41700 = state_41560__$1;
(statearr_41634_41700[(2)] = inst_41539);

(statearr_41634_41700[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (30))){
var state_41560__$1 = state_41560;
var statearr_41635_41701 = state_41560__$1;
(statearr_41635_41701[(2)] = null);

(statearr_41635_41701[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (10))){
var inst_41442 = (state_41560[(13)]);
var inst_41444 = (state_41560[(14)]);
var inst_41450 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41442,inst_41444);
var inst_41451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41450,(0),null);
var inst_41452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41450,(1),null);
var state_41560__$1 = (function (){var statearr_41636 = state_41560;
(statearr_41636[(26)] = inst_41451);

return statearr_41636;
})();
if(cljs.core.truth_(inst_41452)){
var statearr_41637_41702 = state_41560__$1;
(statearr_41637_41702[(1)] = (13));

} else {
var statearr_41638_41703 = state_41560__$1;
(statearr_41638_41703[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (18))){
var inst_41485 = (state_41560[(2)]);
var state_41560__$1 = state_41560;
var statearr_41639_41704 = state_41560__$1;
(statearr_41639_41704[(2)] = inst_41485);

(statearr_41639_41704[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (42))){
var state_41560__$1 = state_41560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41560__$1,(45),dchan);
} else {
if((state_val_41561 === (37))){
var inst_41432 = (state_41560[(9)]);
var inst_41528 = (state_41560[(23)]);
var inst_41519 = (state_41560[(25)]);
var inst_41528__$1 = cljs.core.first(inst_41519);
var inst_41529 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41528__$1,inst_41432,done);
var state_41560__$1 = (function (){var statearr_41640 = state_41560;
(statearr_41640[(23)] = inst_41528__$1);

return statearr_41640;
})();
if(cljs.core.truth_(inst_41529)){
var statearr_41641_41705 = state_41560__$1;
(statearr_41641_41705[(1)] = (39));

} else {
var statearr_41642_41706 = state_41560__$1;
(statearr_41642_41706[(1)] = (40));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41561 === (8))){
var inst_41444 = (state_41560[(14)]);
var inst_41443 = (state_41560[(17)]);
var inst_41446 = (inst_41444 < inst_41443);
var inst_41447 = inst_41446;
var state_41560__$1 = state_41560;
if(cljs.core.truth_(inst_41447)){
var statearr_41643_41707 = state_41560__$1;
(statearr_41643_41707[(1)] = (10));

} else {
var statearr_41644_41708 = state_41560__$1;
(statearr_41644_41708[(1)] = (11));

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
});})(c__30816__auto___41654,cs,m,dchan,dctr,done))
;
return ((function (switch__30736__auto__,c__30816__auto___41654,cs,m,dchan,dctr,done){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_41648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41648[(0)] = state_machine__30737__auto__);

(statearr_41648[(1)] = (1));

return statearr_41648;
});
var state_machine__30737__auto____1 = (function (state_41560){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_41560);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e41649){if((e41649 instanceof Object)){
var ex__30740__auto__ = e41649;
var statearr_41650_41709 = state_41560;
(statearr_41650_41709[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41560);

return cljs.core.constant$keyword$21;
} else {
throw e41649;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__41710 = state_41560;
state_41560 = G__41710;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_41560){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_41560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto___41654,cs,m,dchan,dctr,done))
})();
var state__30818__auto__ = (function (){var statearr_41651 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_41651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___41654);

return statearr_41651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto___41654,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj41715 = {};
return obj41715;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__23666__auto__ = m;
if(and__23666__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__23666__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__24322__auto__ = (((m == null))?null:m);
return (function (){var or__23678__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__41719 = x__24322__auto__;
return goog.typeOf(G__41719);
})()]);
if(or__23678__auto__){
return or__23678__auto__;
} else {
var or__23678__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__23678__auto____$1){
return or__23678__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__23666__auto__ = m;
if(and__23666__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__23666__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__24322__auto__ = (((m == null))?null:m);
return (function (){var or__23678__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__41723 = x__24322__auto__;
return goog.typeOf(G__41723);
})()]);
if(or__23678__auto__){
return or__23678__auto__;
} else {
var or__23678__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__23678__auto____$1){
return or__23678__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__23666__auto__ = m;
if(and__23666__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__23666__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__24322__auto__ = (((m == null))?null:m);
return (function (){var or__23678__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__41727 = x__24322__auto__;
return goog.typeOf(G__41727);
})()]);
if(or__23678__auto__){
return or__23678__auto__;
} else {
var or__23678__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__23678__auto____$1){
return or__23678__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__23666__auto__ = m;
if(and__23666__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__23666__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__24322__auto__ = (((m == null))?null:m);
return (function (){var or__23678__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__41731 = x__24322__auto__;
return goog.typeOf(G__41731);
})()]);
if(or__23678__auto__){
return or__23678__auto__;
} else {
var or__23678__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__23678__auto____$1){
return or__23678__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__23666__auto__ = m;
if(and__23666__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__23666__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__24322__auto__ = (((m == null))?null:m);
return (function (){var or__23678__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__41735 = x__24322__auto__;
return goog.typeOf(G__41735);
})()]);
if(or__23678__auto__){
return or__23678__auto__;
} else {
var or__23678__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__23678__auto____$1){
return or__23678__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__41736){
var map__41742 = p__41736;
var map__41742__$1 = ((cljs.core.seq_QMARK_(map__41742))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41742):map__41742);
var opts = map__41742__$1;
var statearr_41743_41747 = state;
(statearr_41743_41747[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__41742,map__41742__$1,opts){
return (function (val){
var statearr_41744_41748 = state;
(statearr_41744_41748[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__41742,map__41742__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_41745_41749 = state;
(statearr_41745_41749[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__41746 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41746) : cljs.core.deref.call(null,G__41746));
})());


return cljs.core.constant$keyword$21;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__41736 = null;
if (arguments.length > 3) {
var G__41750__i = 0, G__41750__a = new Array(arguments.length -  3);
while (G__41750__i < G__41750__a.length) {G__41750__a[G__41750__i] = arguments[G__41750__i + 3]; ++G__41750__i;}
  p__41736 = new cljs.core.IndexedSeq(G__41750__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__41736);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__41751){
var state = cljs.core.first(arglist__41751);
arglist__41751 = cljs.core.next(arglist__41751);
var cont_block = cljs.core.first(arglist__41751);
arglist__41751 = cljs.core.next(arglist__41751);
var ports = cljs.core.first(arglist__41751);
var p__41736 = cljs.core.rest(arglist__41751);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__41736);
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
var cs = (function (){var G__41885 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41885) : cljs.core.atom.call(null,G__41885));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$30,null,cljs.core.constant$keyword$31,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$32);
var solo_mode = (function (){var G__41886 = cljs.core.constant$keyword$31;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41886) : cljs.core.atom.call(null,G__41886));
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
if(cljs.core.truth_((function (){var G__41887 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__41887) : attr.call(null,G__41887));
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
var chs = (function (){var G__41888 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41888) : cljs.core.deref.call(null,G__41888));
})();
var mode = (function (){var G__41889 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41889) : cljs.core.deref.call(null,G__41889));
})();
var solos = pick(cljs.core.constant$keyword$32,chs);
var pauses = pick(cljs.core.constant$keyword$30,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$33,solos,cljs.core.constant$keyword$34,pick(cljs.core.constant$keyword$31,chs),cljs.core.constant$keyword$35,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$30)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t41890 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41890 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41891){
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
this.meta41891 = meta41891;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41890.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t41890.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41890.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41890.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__41893_42018 = self__.cs;
var G__41894_42019 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41893_42018,G__41894_42019) : cljs.core.reset_BANG_.call(null,G__41893_42018,G__41894_42019));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41890.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41890.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__41895 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__41895) : self__.solo_modes.call(null,G__41895));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__41896_42020 = self__.solo_mode;
var G__41897_42021 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41896_42020,G__41897_42021) : cljs.core.reset_BANG_.call(null,G__41896_42020,G__41897_42021));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41890.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t41890.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41890.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41892){
var self__ = this;
var _41892__$1 = this;
return self__.meta41891;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41892,meta41891__$1){
var self__ = this;
var _41892__$1 = this;
return (new cljs.core.async.t41890(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41891__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41890.cljs$lang$type = true;

cljs.core.async.t41890.cljs$lang$ctorStr = "cljs.core.async/t41890";

cljs.core.async.t41890.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__24265__auto__,writer__24266__auto__,opt__24267__auto__){
return cljs.core._write(writer__24266__auto__,"cljs.core.async/t41890");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t41890 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t41890(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41891){
return (new cljs.core.async.t41890(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41891));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t41890(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30816__auto___42022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto___42022,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto___42022,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41969){
var state_val_41970 = (state_41969[(1)]);
if((state_val_41970 === (7))){
var inst_41911 = (state_41969[(7)]);
var inst_41916 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41911);
var state_41969__$1 = state_41969;
var statearr_41971_42023 = state_41969__$1;
(statearr_41971_42023[(2)] = inst_41916);

(statearr_41971_42023[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (20))){
var inst_41926 = (state_41969[(8)]);
var state_41969__$1 = state_41969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41969__$1,(23),out,inst_41926);
} else {
if((state_val_41970 === (1))){
var inst_41901 = (state_41969[(9)]);
var inst_41901__$1 = calc_state();
var inst_41902 = cljs.core.seq_QMARK_(inst_41901__$1);
var state_41969__$1 = (function (){var statearr_41972 = state_41969;
(statearr_41972[(9)] = inst_41901__$1);

return statearr_41972;
})();
if(inst_41902){
var statearr_41973_42024 = state_41969__$1;
(statearr_41973_42024[(1)] = (2));

} else {
var statearr_41974_42025 = state_41969__$1;
(statearr_41974_42025[(1)] = (3));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (24))){
var inst_41919 = (state_41969[(10)]);
var inst_41911 = inst_41919;
var state_41969__$1 = (function (){var statearr_41975 = state_41969;
(statearr_41975[(7)] = inst_41911);

return statearr_41975;
})();
var statearr_41976_42026 = state_41969__$1;
(statearr_41976_42026[(2)] = null);

(statearr_41976_42026[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (4))){
var inst_41901 = (state_41969[(9)]);
var inst_41907 = (state_41969[(2)]);
var inst_41908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41907,cljs.core.constant$keyword$35);
var inst_41909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41907,cljs.core.constant$keyword$34);
var inst_41910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41907,cljs.core.constant$keyword$33);
var inst_41911 = inst_41901;
var state_41969__$1 = (function (){var statearr_41977 = state_41969;
(statearr_41977[(11)] = inst_41909);

(statearr_41977[(12)] = inst_41908);

(statearr_41977[(7)] = inst_41911);

(statearr_41977[(13)] = inst_41910);

return statearr_41977;
})();
var statearr_41978_42027 = state_41969__$1;
(statearr_41978_42027[(2)] = null);

(statearr_41978_42027[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (15))){
var state_41969__$1 = state_41969;
var statearr_41979_42028 = state_41969__$1;
(statearr_41979_42028[(2)] = null);

(statearr_41979_42028[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (21))){
var inst_41919 = (state_41969[(10)]);
var inst_41911 = inst_41919;
var state_41969__$1 = (function (){var statearr_41980 = state_41969;
(statearr_41980[(7)] = inst_41911);

return statearr_41980;
})();
var statearr_41981_42029 = state_41969__$1;
(statearr_41981_42029[(2)] = null);

(statearr_41981_42029[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (13))){
var inst_41965 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_41982_42030 = state_41969__$1;
(statearr_41982_42030[(2)] = inst_41965);

(statearr_41982_42030[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (22))){
var inst_41963 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_41983_42031 = state_41969__$1;
(statearr_41983_42031[(2)] = inst_41963);

(statearr_41983_42031[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (6))){
var inst_41967 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41969__$1,inst_41967);
} else {
if((state_val_41970 === (25))){
var state_41969__$1 = state_41969;
var statearr_41984_42032 = state_41969__$1;
(statearr_41984_42032[(2)] = null);

(statearr_41984_42032[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (17))){
var inst_41942 = (state_41969[(14)]);
var state_41969__$1 = state_41969;
var statearr_41985_42033 = state_41969__$1;
(statearr_41985_42033[(2)] = inst_41942);

(statearr_41985_42033[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (3))){
var inst_41901 = (state_41969[(9)]);
var state_41969__$1 = state_41969;
var statearr_41986_42034 = state_41969__$1;
(statearr_41986_42034[(2)] = inst_41901);

(statearr_41986_42034[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (12))){
var inst_41922 = (state_41969[(15)]);
var inst_41942 = (state_41969[(14)]);
var inst_41927 = (state_41969[(16)]);
var inst_41942__$1 = (function (){var G__41987 = inst_41927;
return (inst_41922.cljs$core$IFn$_invoke$arity$1 ? inst_41922.cljs$core$IFn$_invoke$arity$1(G__41987) : inst_41922.call(null,G__41987));
})();
var state_41969__$1 = (function (){var statearr_41988 = state_41969;
(statearr_41988[(14)] = inst_41942__$1);

return statearr_41988;
})();
if(cljs.core.truth_(inst_41942__$1)){
var statearr_41989_42035 = state_41969__$1;
(statearr_41989_42035[(1)] = (17));

} else {
var statearr_41990_42036 = state_41969__$1;
(statearr_41990_42036[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (2))){
var inst_41901 = (state_41969[(9)]);
var inst_41904 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41901);
var state_41969__$1 = state_41969;
var statearr_41991_42037 = state_41969__$1;
(statearr_41991_42037[(2)] = inst_41904);

(statearr_41991_42037[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (23))){
var inst_41954 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
if(cljs.core.truth_(inst_41954)){
var statearr_41992_42038 = state_41969__$1;
(statearr_41992_42038[(1)] = (24));

} else {
var statearr_41993_42039 = state_41969__$1;
(statearr_41993_42039[(1)] = (25));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (19))){
var inst_41951 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
if(cljs.core.truth_(inst_41951)){
var statearr_41994_42040 = state_41969__$1;
(statearr_41994_42040[(1)] = (20));

} else {
var statearr_41995_42041 = state_41969__$1;
(statearr_41995_42041[(1)] = (21));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (11))){
var inst_41926 = (state_41969[(8)]);
var inst_41932 = (inst_41926 == null);
var state_41969__$1 = state_41969;
if(cljs.core.truth_(inst_41932)){
var statearr_41996_42042 = state_41969__$1;
(statearr_41996_42042[(1)] = (14));

} else {
var statearr_41997_42043 = state_41969__$1;
(statearr_41997_42043[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (9))){
var inst_41919 = (state_41969[(10)]);
var inst_41919__$1 = (state_41969[(2)]);
var inst_41920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41919__$1,cljs.core.constant$keyword$35);
var inst_41921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41919__$1,cljs.core.constant$keyword$34);
var inst_41922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41919__$1,cljs.core.constant$keyword$33);
var state_41969__$1 = (function (){var statearr_41998 = state_41969;
(statearr_41998[(17)] = inst_41921);

(statearr_41998[(10)] = inst_41919__$1);

(statearr_41998[(15)] = inst_41922);

return statearr_41998;
})();
return cljs.core.async.ioc_alts_BANG_(state_41969__$1,(10),inst_41920);
} else {
if((state_val_41970 === (5))){
var inst_41911 = (state_41969[(7)]);
var inst_41914 = cljs.core.seq_QMARK_(inst_41911);
var state_41969__$1 = state_41969;
if(inst_41914){
var statearr_41999_42044 = state_41969__$1;
(statearr_41999_42044[(1)] = (7));

} else {
var statearr_42000_42045 = state_41969__$1;
(statearr_42000_42045[(1)] = (8));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (14))){
var inst_41927 = (state_41969[(16)]);
var inst_41934 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41927);
var state_41969__$1 = state_41969;
var statearr_42001_42046 = state_41969__$1;
(statearr_42001_42046[(2)] = inst_41934);

(statearr_42001_42046[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (26))){
var inst_41959 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_42002_42047 = state_41969__$1;
(statearr_42002_42047[(2)] = inst_41959);

(statearr_42002_42047[(1)] = (22));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (16))){
var inst_41937 = (state_41969[(2)]);
var inst_41938 = calc_state();
var inst_41911 = inst_41938;
var state_41969__$1 = (function (){var statearr_42003 = state_41969;
(statearr_42003[(18)] = inst_41937);

(statearr_42003[(7)] = inst_41911);

return statearr_42003;
})();
var statearr_42004_42048 = state_41969__$1;
(statearr_42004_42048[(2)] = null);

(statearr_42004_42048[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (10))){
var inst_41926 = (state_41969[(8)]);
var inst_41927 = (state_41969[(16)]);
var inst_41925 = (state_41969[(2)]);
var inst_41926__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41925,(0),null);
var inst_41927__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41925,(1),null);
var inst_41928 = (inst_41926__$1 == null);
var inst_41929 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41927__$1,change);
var inst_41930 = (inst_41928) || (inst_41929);
var state_41969__$1 = (function (){var statearr_42005 = state_41969;
(statearr_42005[(8)] = inst_41926__$1);

(statearr_42005[(16)] = inst_41927__$1);

return statearr_42005;
})();
if(cljs.core.truth_(inst_41930)){
var statearr_42006_42049 = state_41969__$1;
(statearr_42006_42049[(1)] = (11));

} else {
var statearr_42007_42050 = state_41969__$1;
(statearr_42007_42050[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (18))){
var inst_41921 = (state_41969[(17)]);
var inst_41922 = (state_41969[(15)]);
var inst_41927 = (state_41969[(16)]);
var inst_41946 = cljs.core.empty_QMARK_(inst_41922);
var inst_41947 = (function (){var G__42008 = inst_41927;
return (inst_41921.cljs$core$IFn$_invoke$arity$1 ? inst_41921.cljs$core$IFn$_invoke$arity$1(G__42008) : inst_41921.call(null,G__42008));
})();
var inst_41948 = cljs.core.not(inst_41947);
var inst_41949 = (inst_41946) && (inst_41948);
var state_41969__$1 = state_41969;
var statearr_42009_42051 = state_41969__$1;
(statearr_42009_42051[(2)] = inst_41949);

(statearr_42009_42051[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_41970 === (8))){
var inst_41911 = (state_41969[(7)]);
var state_41969__$1 = state_41969;
var statearr_42010_42052 = state_41969__$1;
(statearr_42010_42052[(2)] = inst_41911);

(statearr_42010_42052[(1)] = (9));


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
});})(c__30816__auto___42022,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30736__auto__,c__30816__auto___42022,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_42014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42014[(0)] = state_machine__30737__auto__);

(statearr_42014[(1)] = (1));

return statearr_42014;
});
var state_machine__30737__auto____1 = (function (state_41969){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_41969);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e42015){if((e42015 instanceof Object)){
var ex__30740__auto__ = e42015;
var statearr_42016_42053 = state_41969;
(statearr_42016_42053[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41969);

return cljs.core.constant$keyword$21;
} else {
throw e42015;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__42054 = state_41969;
state_41969 = G__42054;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_41969){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_41969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto___42022,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30818__auto__ = (function (){var statearr_42017 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_42017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___42022);

return statearr_42017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto___42022,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj42056 = {};
return obj42056;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__23666__auto__ = p;
if(and__23666__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__23666__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__24322__auto__ = (((p == null))?null:p);
return (function (){var or__23678__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__42060 = x__24322__auto__;
return goog.typeOf(G__42060);
})()]);
if(or__23678__auto__){
return or__23678__auto__;
} else {
var or__23678__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__23678__auto____$1){
return or__23678__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__23666__auto__ = p;
if(and__23666__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__23666__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__24322__auto__ = (((p == null))?null:p);
return (function (){var or__23678__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__42064 = x__24322__auto__;
return goog.typeOf(G__42064);
})()]);
if(or__23678__auto__){
return or__23678__auto__;
} else {
var or__23678__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__23678__auto____$1){
return or__23678__auto____$1;
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
if((function (){var and__23666__auto__ = p;
if(and__23666__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__23666__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__24322__auto__ = (((p == null))?null:p);
return (function (){var or__23678__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__42070 = x__24322__auto__;
return goog.typeOf(G__42070);
})()]);
if(or__23678__auto__){
return or__23678__auto__;
} else {
var or__23678__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__23678__auto____$1){
return or__23678__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__23666__auto__ = p;
if(and__23666__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__23666__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__24322__auto__ = (((p == null))?null:p);
return (function (){var or__23678__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__42072 = x__24322__auto__;
return goog.typeOf(G__42072);
})()]);
if(or__23678__auto__){
return or__23678__auto__;
} else {
var or__23678__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__23678__auto____$1){
return or__23678__auto____$1;
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
var mults = (function (){var G__42211 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42211) : cljs.core.atom.call(null,G__42211));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__23678__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__42213 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42213) : cljs.core.deref.call(null,G__42213));
})(),topic);
if(cljs.core.truth_(or__23678__auto__)){
return or__23678__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__23678__auto__,mults){
return (function (p1__42073_SHARP_){
if(cljs.core.truth_((function (){var G__42214 = topic;
return (p1__42073_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42073_SHARP_.cljs$core$IFn$_invoke$arity$1(G__42214) : p1__42073_SHARP_.call(null,G__42214));
})())){
return p1__42073_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42073_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__42215 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__42215) : buf_fn.call(null,G__42215));
})())));
}
});})(or__23678__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t42216 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42216 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta42217){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta42217 = meta42217;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42216.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t42216.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__42219 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__42219) : self__.ensure_mult.call(null,G__42219));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t42216.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__42220 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42220) : cljs.core.deref.call(null,G__42220));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t42216.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__42221 = self__.mults;
var G__42222 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__42221,G__42222) : cljs.core.reset_BANG_.call(null,G__42221,G__42222));
});})(mults,ensure_mult))
;

cljs.core.async.t42216.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t42216.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t42216.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t42216.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42218){
var self__ = this;
var _42218__$1 = this;
return self__.meta42217;
});})(mults,ensure_mult))
;

cljs.core.async.t42216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42218,meta42217__$1){
var self__ = this;
var _42218__$1 = this;
return (new cljs.core.async.t42216(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta42217__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t42216.cljs$lang$type = true;

cljs.core.async.t42216.cljs$lang$ctorStr = "cljs.core.async/t42216";

cljs.core.async.t42216.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__24265__auto__,writer__24266__auto__,opt__24267__auto__){
return cljs.core._write(writer__24266__auto__,"cljs.core.async/t42216");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t42216 = ((function (mults,ensure_mult){
return (function __GT_t42216(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42217){
return (new cljs.core.async.t42216(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42217));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t42216(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30816__auto___42345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto___42345,mults,ensure_mult,p){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto___42345,mults,ensure_mult,p){
return (function (state_42294){
var state_val_42295 = (state_42294[(1)]);
if((state_val_42295 === (7))){
var inst_42290 = (state_42294[(2)]);
var state_42294__$1 = state_42294;
var statearr_42296_42346 = state_42294__$1;
(statearr_42296_42346[(2)] = inst_42290);

(statearr_42296_42346[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (20))){
var state_42294__$1 = state_42294;
var statearr_42297_42347 = state_42294__$1;
(statearr_42297_42347[(2)] = null);

(statearr_42297_42347[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (1))){
var state_42294__$1 = state_42294;
var statearr_42298_42348 = state_42294__$1;
(statearr_42298_42348[(2)] = null);

(statearr_42298_42348[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (24))){
var inst_42273 = (state_42294[(7)]);
var inst_42282 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42273);
var state_42294__$1 = state_42294;
var statearr_42299_42349 = state_42294__$1;
(statearr_42299_42349[(2)] = inst_42282);

(statearr_42299_42349[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (4))){
var inst_42225 = (state_42294[(8)]);
var inst_42225__$1 = (state_42294[(2)]);
var inst_42226 = (inst_42225__$1 == null);
var state_42294__$1 = (function (){var statearr_42300 = state_42294;
(statearr_42300[(8)] = inst_42225__$1);

return statearr_42300;
})();
if(cljs.core.truth_(inst_42226)){
var statearr_42301_42350 = state_42294__$1;
(statearr_42301_42350[(1)] = (5));

} else {
var statearr_42302_42351 = state_42294__$1;
(statearr_42302_42351[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (15))){
var inst_42267 = (state_42294[(2)]);
var state_42294__$1 = state_42294;
var statearr_42303_42352 = state_42294__$1;
(statearr_42303_42352[(2)] = inst_42267);

(statearr_42303_42352[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (21))){
var inst_42287 = (state_42294[(2)]);
var state_42294__$1 = (function (){var statearr_42304 = state_42294;
(statearr_42304[(9)] = inst_42287);

return statearr_42304;
})();
var statearr_42305_42353 = state_42294__$1;
(statearr_42305_42353[(2)] = null);

(statearr_42305_42353[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (13))){
var inst_42249 = (state_42294[(10)]);
var inst_42251 = cljs.core.chunked_seq_QMARK_(inst_42249);
var state_42294__$1 = state_42294;
if(inst_42251){
var statearr_42306_42354 = state_42294__$1;
(statearr_42306_42354[(1)] = (16));

} else {
var statearr_42307_42355 = state_42294__$1;
(statearr_42307_42355[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (22))){
var inst_42279 = (state_42294[(2)]);
var state_42294__$1 = state_42294;
if(cljs.core.truth_(inst_42279)){
var statearr_42308_42356 = state_42294__$1;
(statearr_42308_42356[(1)] = (23));

} else {
var statearr_42309_42357 = state_42294__$1;
(statearr_42309_42357[(1)] = (24));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (6))){
var inst_42275 = (state_42294[(11)]);
var inst_42273 = (state_42294[(7)]);
var inst_42225 = (state_42294[(8)]);
var inst_42273__$1 = (function (){var G__42310 = inst_42225;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__42310) : topic_fn.call(null,G__42310));
})();
var inst_42274 = (function (){var G__42311 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42311) : cljs.core.deref.call(null,G__42311));
})();
var inst_42275__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42274,inst_42273__$1);
var state_42294__$1 = (function (){var statearr_42312 = state_42294;
(statearr_42312[(11)] = inst_42275__$1);

(statearr_42312[(7)] = inst_42273__$1);

return statearr_42312;
})();
if(cljs.core.truth_(inst_42275__$1)){
var statearr_42313_42358 = state_42294__$1;
(statearr_42313_42358[(1)] = (19));

} else {
var statearr_42314_42359 = state_42294__$1;
(statearr_42314_42359[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (25))){
var inst_42284 = (state_42294[(2)]);
var state_42294__$1 = state_42294;
var statearr_42315_42360 = state_42294__$1;
(statearr_42315_42360[(2)] = inst_42284);

(statearr_42315_42360[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (17))){
var inst_42249 = (state_42294[(10)]);
var inst_42258 = cljs.core.first(inst_42249);
var inst_42259 = cljs.core.async.muxch_STAR_(inst_42258);
var inst_42260 = cljs.core.async.close_BANG_(inst_42259);
var inst_42261 = cljs.core.next(inst_42249);
var inst_42235 = inst_42261;
var inst_42236 = null;
var inst_42237 = (0);
var inst_42238 = (0);
var state_42294__$1 = (function (){var statearr_42316 = state_42294;
(statearr_42316[(12)] = inst_42260);

(statearr_42316[(13)] = inst_42235);

(statearr_42316[(14)] = inst_42236);

(statearr_42316[(15)] = inst_42238);

(statearr_42316[(16)] = inst_42237);

return statearr_42316;
})();
var statearr_42317_42361 = state_42294__$1;
(statearr_42317_42361[(2)] = null);

(statearr_42317_42361[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (3))){
var inst_42292 = (state_42294[(2)]);
var state_42294__$1 = state_42294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42294__$1,inst_42292);
} else {
if((state_val_42295 === (12))){
var inst_42269 = (state_42294[(2)]);
var state_42294__$1 = state_42294;
var statearr_42318_42362 = state_42294__$1;
(statearr_42318_42362[(2)] = inst_42269);

(statearr_42318_42362[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (2))){
var state_42294__$1 = state_42294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42294__$1,(4),ch);
} else {
if((state_val_42295 === (23))){
var state_42294__$1 = state_42294;
var statearr_42319_42363 = state_42294__$1;
(statearr_42319_42363[(2)] = null);

(statearr_42319_42363[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (19))){
var inst_42275 = (state_42294[(11)]);
var inst_42225 = (state_42294[(8)]);
var inst_42277 = cljs.core.async.muxch_STAR_(inst_42275);
var state_42294__$1 = state_42294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42294__$1,(22),inst_42277,inst_42225);
} else {
if((state_val_42295 === (11))){
var inst_42249 = (state_42294[(10)]);
var inst_42235 = (state_42294[(13)]);
var inst_42249__$1 = cljs.core.seq(inst_42235);
var state_42294__$1 = (function (){var statearr_42320 = state_42294;
(statearr_42320[(10)] = inst_42249__$1);

return statearr_42320;
})();
if(inst_42249__$1){
var statearr_42321_42364 = state_42294__$1;
(statearr_42321_42364[(1)] = (13));

} else {
var statearr_42322_42365 = state_42294__$1;
(statearr_42322_42365[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (9))){
var inst_42271 = (state_42294[(2)]);
var state_42294__$1 = state_42294;
var statearr_42323_42366 = state_42294__$1;
(statearr_42323_42366[(2)] = inst_42271);

(statearr_42323_42366[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (5))){
var inst_42232 = (function (){var G__42324 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42324) : cljs.core.deref.call(null,G__42324));
})();
var inst_42233 = cljs.core.vals(inst_42232);
var inst_42234 = cljs.core.seq(inst_42233);
var inst_42235 = inst_42234;
var inst_42236 = null;
var inst_42237 = (0);
var inst_42238 = (0);
var state_42294__$1 = (function (){var statearr_42325 = state_42294;
(statearr_42325[(13)] = inst_42235);

(statearr_42325[(14)] = inst_42236);

(statearr_42325[(15)] = inst_42238);

(statearr_42325[(16)] = inst_42237);

return statearr_42325;
})();
var statearr_42326_42367 = state_42294__$1;
(statearr_42326_42367[(2)] = null);

(statearr_42326_42367[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (14))){
var state_42294__$1 = state_42294;
var statearr_42330_42368 = state_42294__$1;
(statearr_42330_42368[(2)] = null);

(statearr_42330_42368[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (16))){
var inst_42249 = (state_42294[(10)]);
var inst_42253 = cljs.core.chunk_first(inst_42249);
var inst_42254 = cljs.core.chunk_rest(inst_42249);
var inst_42255 = cljs.core.count(inst_42253);
var inst_42235 = inst_42254;
var inst_42236 = inst_42253;
var inst_42237 = inst_42255;
var inst_42238 = (0);
var state_42294__$1 = (function (){var statearr_42331 = state_42294;
(statearr_42331[(13)] = inst_42235);

(statearr_42331[(14)] = inst_42236);

(statearr_42331[(15)] = inst_42238);

(statearr_42331[(16)] = inst_42237);

return statearr_42331;
})();
var statearr_42332_42369 = state_42294__$1;
(statearr_42332_42369[(2)] = null);

(statearr_42332_42369[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (10))){
var inst_42235 = (state_42294[(13)]);
var inst_42236 = (state_42294[(14)]);
var inst_42238 = (state_42294[(15)]);
var inst_42237 = (state_42294[(16)]);
var inst_42243 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42236,inst_42238);
var inst_42244 = cljs.core.async.muxch_STAR_(inst_42243);
var inst_42245 = cljs.core.async.close_BANG_(inst_42244);
var inst_42246 = (inst_42238 + (1));
var tmp42327 = inst_42235;
var tmp42328 = inst_42236;
var tmp42329 = inst_42237;
var inst_42235__$1 = tmp42327;
var inst_42236__$1 = tmp42328;
var inst_42237__$1 = tmp42329;
var inst_42238__$1 = inst_42246;
var state_42294__$1 = (function (){var statearr_42333 = state_42294;
(statearr_42333[(13)] = inst_42235__$1);

(statearr_42333[(17)] = inst_42245);

(statearr_42333[(14)] = inst_42236__$1);

(statearr_42333[(15)] = inst_42238__$1);

(statearr_42333[(16)] = inst_42237__$1);

return statearr_42333;
})();
var statearr_42334_42370 = state_42294__$1;
(statearr_42334_42370[(2)] = null);

(statearr_42334_42370[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (18))){
var inst_42264 = (state_42294[(2)]);
var state_42294__$1 = state_42294;
var statearr_42335_42371 = state_42294__$1;
(statearr_42335_42371[(2)] = inst_42264);

(statearr_42335_42371[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42295 === (8))){
var inst_42238 = (state_42294[(15)]);
var inst_42237 = (state_42294[(16)]);
var inst_42240 = (inst_42238 < inst_42237);
var inst_42241 = inst_42240;
var state_42294__$1 = state_42294;
if(cljs.core.truth_(inst_42241)){
var statearr_42336_42372 = state_42294__$1;
(statearr_42336_42372[(1)] = (10));

} else {
var statearr_42337_42373 = state_42294__$1;
(statearr_42337_42373[(1)] = (11));

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
});})(c__30816__auto___42345,mults,ensure_mult,p))
;
return ((function (switch__30736__auto__,c__30816__auto___42345,mults,ensure_mult,p){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_42341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42341[(0)] = state_machine__30737__auto__);

(statearr_42341[(1)] = (1));

return statearr_42341;
});
var state_machine__30737__auto____1 = (function (state_42294){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_42294);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e42342){if((e42342 instanceof Object)){
var ex__30740__auto__ = e42342;
var statearr_42343_42374 = state_42294;
(statearr_42343_42374[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42294);

return cljs.core.constant$keyword$21;
} else {
throw e42342;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__42375 = state_42294;
state_42294 = G__42375;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_42294){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_42294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto___42345,mults,ensure_mult,p))
})();
var state__30818__auto__ = (function (){var statearr_42344 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_42344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___42345);

return statearr_42344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto___42345,mults,ensure_mult,p))
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
var dctr = (function (){var G__42456 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42456) : cljs.core.atom.call(null,G__42456));
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
var c__30816__auto___42529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto___42529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto___42529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42495){
var state_val_42496 = (state_42495[(1)]);
if((state_val_42496 === (7))){
var state_42495__$1 = state_42495;
var statearr_42497_42530 = state_42495__$1;
(statearr_42497_42530[(2)] = null);

(statearr_42497_42530[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42496 === (1))){
var state_42495__$1 = state_42495;
var statearr_42498_42531 = state_42495__$1;
(statearr_42498_42531[(2)] = null);

(statearr_42498_42531[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42496 === (4))){
var inst_42459 = (state_42495[(7)]);
var inst_42461 = (inst_42459 < cnt);
var state_42495__$1 = state_42495;
if(cljs.core.truth_(inst_42461)){
var statearr_42499_42532 = state_42495__$1;
(statearr_42499_42532[(1)] = (6));

} else {
var statearr_42500_42533 = state_42495__$1;
(statearr_42500_42533[(1)] = (7));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42496 === (15))){
var inst_42491 = (state_42495[(2)]);
var state_42495__$1 = state_42495;
var statearr_42501_42534 = state_42495__$1;
(statearr_42501_42534[(2)] = inst_42491);

(statearr_42501_42534[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42496 === (13))){
var inst_42484 = cljs.core.async.close_BANG_(out);
var state_42495__$1 = state_42495;
var statearr_42502_42535 = state_42495__$1;
(statearr_42502_42535[(2)] = inst_42484);

(statearr_42502_42535[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42496 === (6))){
var state_42495__$1 = state_42495;
var statearr_42503_42536 = state_42495__$1;
(statearr_42503_42536[(2)] = null);

(statearr_42503_42536[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42496 === (3))){
var inst_42493 = (state_42495[(2)]);
var state_42495__$1 = state_42495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42495__$1,inst_42493);
} else {
if((state_val_42496 === (12))){
var inst_42481 = (state_42495[(8)]);
var inst_42481__$1 = (state_42495[(2)]);
var inst_42482 = cljs.core.some(cljs.core.nil_QMARK_,inst_42481__$1);
var state_42495__$1 = (function (){var statearr_42504 = state_42495;
(statearr_42504[(8)] = inst_42481__$1);

return statearr_42504;
})();
if(cljs.core.truth_(inst_42482)){
var statearr_42505_42537 = state_42495__$1;
(statearr_42505_42537[(1)] = (13));

} else {
var statearr_42506_42538 = state_42495__$1;
(statearr_42506_42538[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42496 === (2))){
var inst_42458 = (function (){var G__42507 = dctr;
var G__42508 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__42507,G__42508) : cljs.core.reset_BANG_.call(null,G__42507,G__42508));
})();
var inst_42459 = (0);
var state_42495__$1 = (function (){var statearr_42509 = state_42495;
(statearr_42509[(9)] = inst_42458);

(statearr_42509[(7)] = inst_42459);

return statearr_42509;
})();
var statearr_42510_42539 = state_42495__$1;
(statearr_42510_42539[(2)] = null);

(statearr_42510_42539[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42496 === (11))){
var inst_42459 = (state_42495[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42495,(10),Object,null,(9));
var inst_42468 = (function (){var G__42511 = inst_42459;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__42511) : chs__$1.call(null,G__42511));
})();
var inst_42469 = (function (){var G__42512 = inst_42459;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42512) : done.call(null,G__42512));
})();
var inst_42470 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42468,inst_42469);
var state_42495__$1 = state_42495;
var statearr_42513_42540 = state_42495__$1;
(statearr_42513_42540[(2)] = inst_42470);


cljs.core.async.impl.ioc_helpers.process_exception(state_42495__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_42496 === (9))){
var inst_42459 = (state_42495[(7)]);
var inst_42472 = (state_42495[(2)]);
var inst_42473 = (inst_42459 + (1));
var inst_42459__$1 = inst_42473;
var state_42495__$1 = (function (){var statearr_42514 = state_42495;
(statearr_42514[(10)] = inst_42472);

(statearr_42514[(7)] = inst_42459__$1);

return statearr_42514;
})();
var statearr_42515_42541 = state_42495__$1;
(statearr_42515_42541[(2)] = null);

(statearr_42515_42541[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42496 === (5))){
var inst_42479 = (state_42495[(2)]);
var state_42495__$1 = (function (){var statearr_42516 = state_42495;
(statearr_42516[(11)] = inst_42479);

return statearr_42516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42495__$1,(12),dchan);
} else {
if((state_val_42496 === (14))){
var inst_42481 = (state_42495[(8)]);
var inst_42486 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42481);
var state_42495__$1 = state_42495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42495__$1,(16),out,inst_42486);
} else {
if((state_val_42496 === (16))){
var inst_42488 = (state_42495[(2)]);
var state_42495__$1 = (function (){var statearr_42517 = state_42495;
(statearr_42517[(12)] = inst_42488);

return statearr_42517;
})();
var statearr_42518_42542 = state_42495__$1;
(statearr_42518_42542[(2)] = null);

(statearr_42518_42542[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42496 === (10))){
var inst_42463 = (state_42495[(2)]);
var inst_42464 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42495__$1 = (function (){var statearr_42519 = state_42495;
(statearr_42519[(13)] = inst_42463);

return statearr_42519;
})();
var statearr_42520_42543 = state_42495__$1;
(statearr_42520_42543[(2)] = inst_42464);


cljs.core.async.impl.ioc_helpers.process_exception(state_42495__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_42496 === (8))){
var inst_42477 = (state_42495[(2)]);
var state_42495__$1 = state_42495;
var statearr_42521_42544 = state_42495__$1;
(statearr_42521_42544[(2)] = inst_42477);

(statearr_42521_42544[(1)] = (5));


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
});})(c__30816__auto___42529,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30736__auto__,c__30816__auto___42529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_42525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42525[(0)] = state_machine__30737__auto__);

(statearr_42525[(1)] = (1));

return statearr_42525;
});
var state_machine__30737__auto____1 = (function (state_42495){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_42495);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e42526){if((e42526 instanceof Object)){
var ex__30740__auto__ = e42526;
var statearr_42527_42545 = state_42495;
(statearr_42527_42545[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42495);

return cljs.core.constant$keyword$21;
} else {
throw e42526;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__42546 = state_42495;
state_42495 = G__42546;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_42495){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_42495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto___42529,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30818__auto__ = (function (){var statearr_42528 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_42528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___42529);

return statearr_42528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto___42529,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__30816__auto___42656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto___42656,out){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto___42656,out){
return (function (state_42632){
var state_val_42633 = (state_42632[(1)]);
if((state_val_42633 === (7))){
var inst_42612 = (state_42632[(7)]);
var inst_42611 = (state_42632[(8)]);
var inst_42611__$1 = (state_42632[(2)]);
var inst_42612__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42611__$1,(0),null);
var inst_42613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42611__$1,(1),null);
var inst_42614 = (inst_42612__$1 == null);
var state_42632__$1 = (function (){var statearr_42634 = state_42632;
(statearr_42634[(9)] = inst_42613);

(statearr_42634[(7)] = inst_42612__$1);

(statearr_42634[(8)] = inst_42611__$1);

return statearr_42634;
})();
if(cljs.core.truth_(inst_42614)){
var statearr_42635_42657 = state_42632__$1;
(statearr_42635_42657[(1)] = (8));

} else {
var statearr_42636_42658 = state_42632__$1;
(statearr_42636_42658[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42633 === (1))){
var inst_42603 = cljs.core.vec(chs);
var inst_42604 = inst_42603;
var state_42632__$1 = (function (){var statearr_42637 = state_42632;
(statearr_42637[(10)] = inst_42604);

return statearr_42637;
})();
var statearr_42638_42659 = state_42632__$1;
(statearr_42638_42659[(2)] = null);

(statearr_42638_42659[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42633 === (4))){
var inst_42604 = (state_42632[(10)]);
var state_42632__$1 = state_42632;
return cljs.core.async.ioc_alts_BANG_(state_42632__$1,(7),inst_42604);
} else {
if((state_val_42633 === (6))){
var inst_42628 = (state_42632[(2)]);
var state_42632__$1 = state_42632;
var statearr_42639_42660 = state_42632__$1;
(statearr_42639_42660[(2)] = inst_42628);

(statearr_42639_42660[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42633 === (3))){
var inst_42630 = (state_42632[(2)]);
var state_42632__$1 = state_42632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42632__$1,inst_42630);
} else {
if((state_val_42633 === (2))){
var inst_42604 = (state_42632[(10)]);
var inst_42606 = cljs.core.count(inst_42604);
var inst_42607 = (inst_42606 > (0));
var state_42632__$1 = state_42632;
if(cljs.core.truth_(inst_42607)){
var statearr_42641_42661 = state_42632__$1;
(statearr_42641_42661[(1)] = (4));

} else {
var statearr_42642_42662 = state_42632__$1;
(statearr_42642_42662[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42633 === (11))){
var inst_42604 = (state_42632[(10)]);
var inst_42621 = (state_42632[(2)]);
var tmp42640 = inst_42604;
var inst_42604__$1 = tmp42640;
var state_42632__$1 = (function (){var statearr_42643 = state_42632;
(statearr_42643[(11)] = inst_42621);

(statearr_42643[(10)] = inst_42604__$1);

return statearr_42643;
})();
var statearr_42644_42663 = state_42632__$1;
(statearr_42644_42663[(2)] = null);

(statearr_42644_42663[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42633 === (9))){
var inst_42612 = (state_42632[(7)]);
var state_42632__$1 = state_42632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42632__$1,(11),out,inst_42612);
} else {
if((state_val_42633 === (5))){
var inst_42626 = cljs.core.async.close_BANG_(out);
var state_42632__$1 = state_42632;
var statearr_42645_42664 = state_42632__$1;
(statearr_42645_42664[(2)] = inst_42626);

(statearr_42645_42664[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42633 === (10))){
var inst_42624 = (state_42632[(2)]);
var state_42632__$1 = state_42632;
var statearr_42646_42665 = state_42632__$1;
(statearr_42646_42665[(2)] = inst_42624);

(statearr_42646_42665[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42633 === (8))){
var inst_42613 = (state_42632[(9)]);
var inst_42612 = (state_42632[(7)]);
var inst_42604 = (state_42632[(10)]);
var inst_42611 = (state_42632[(8)]);
var inst_42616 = (function (){var c = inst_42613;
var v = inst_42612;
var vec__42609 = inst_42611;
var cs = inst_42604;
return ((function (c,v,vec__42609,cs,inst_42613,inst_42612,inst_42604,inst_42611,state_val_42633,c__30816__auto___42656,out){
return (function (p1__42547_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42547_SHARP_);
});
;})(c,v,vec__42609,cs,inst_42613,inst_42612,inst_42604,inst_42611,state_val_42633,c__30816__auto___42656,out))
})();
var inst_42617 = cljs.core.filterv(inst_42616,inst_42604);
var inst_42604__$1 = inst_42617;
var state_42632__$1 = (function (){var statearr_42647 = state_42632;
(statearr_42647[(10)] = inst_42604__$1);

return statearr_42647;
})();
var statearr_42648_42666 = state_42632__$1;
(statearr_42648_42666[(2)] = null);

(statearr_42648_42666[(1)] = (2));


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
});})(c__30816__auto___42656,out))
;
return ((function (switch__30736__auto__,c__30816__auto___42656,out){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_42652 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42652[(0)] = state_machine__30737__auto__);

(statearr_42652[(1)] = (1));

return statearr_42652;
});
var state_machine__30737__auto____1 = (function (state_42632){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_42632);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e42653){if((e42653 instanceof Object)){
var ex__30740__auto__ = e42653;
var statearr_42654_42667 = state_42632;
(statearr_42654_42667[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42632);

return cljs.core.constant$keyword$21;
} else {
throw e42653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__42668 = state_42632;
state_42632 = G__42668;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_42632){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_42632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto___42656,out))
})();
var state__30818__auto__ = (function (){var statearr_42655 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_42655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___42656);

return statearr_42655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto___42656,out))
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
var c__30816__auto___42764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto___42764,out){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto___42764,out){
return (function (state_42741){
var state_val_42742 = (state_42741[(1)]);
if((state_val_42742 === (7))){
var inst_42723 = (state_42741[(7)]);
var inst_42723__$1 = (state_42741[(2)]);
var inst_42724 = (inst_42723__$1 == null);
var inst_42725 = cljs.core.not(inst_42724);
var state_42741__$1 = (function (){var statearr_42743 = state_42741;
(statearr_42743[(7)] = inst_42723__$1);

return statearr_42743;
})();
if(inst_42725){
var statearr_42744_42765 = state_42741__$1;
(statearr_42744_42765[(1)] = (8));

} else {
var statearr_42745_42766 = state_42741__$1;
(statearr_42745_42766[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42742 === (1))){
var inst_42718 = (0);
var state_42741__$1 = (function (){var statearr_42746 = state_42741;
(statearr_42746[(8)] = inst_42718);

return statearr_42746;
})();
var statearr_42747_42767 = state_42741__$1;
(statearr_42747_42767[(2)] = null);

(statearr_42747_42767[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42742 === (4))){
var state_42741__$1 = state_42741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42741__$1,(7),ch);
} else {
if((state_val_42742 === (6))){
var inst_42736 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
var statearr_42748_42768 = state_42741__$1;
(statearr_42748_42768[(2)] = inst_42736);

(statearr_42748_42768[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42742 === (3))){
var inst_42738 = (state_42741[(2)]);
var inst_42739 = cljs.core.async.close_BANG_(out);
var state_42741__$1 = (function (){var statearr_42749 = state_42741;
(statearr_42749[(9)] = inst_42738);

return statearr_42749;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42741__$1,inst_42739);
} else {
if((state_val_42742 === (2))){
var inst_42718 = (state_42741[(8)]);
var inst_42720 = (inst_42718 < n);
var state_42741__$1 = state_42741;
if(cljs.core.truth_(inst_42720)){
var statearr_42750_42769 = state_42741__$1;
(statearr_42750_42769[(1)] = (4));

} else {
var statearr_42751_42770 = state_42741__$1;
(statearr_42751_42770[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42742 === (11))){
var inst_42718 = (state_42741[(8)]);
var inst_42728 = (state_42741[(2)]);
var inst_42729 = (inst_42718 + (1));
var inst_42718__$1 = inst_42729;
var state_42741__$1 = (function (){var statearr_42752 = state_42741;
(statearr_42752[(8)] = inst_42718__$1);

(statearr_42752[(10)] = inst_42728);

return statearr_42752;
})();
var statearr_42753_42771 = state_42741__$1;
(statearr_42753_42771[(2)] = null);

(statearr_42753_42771[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42742 === (9))){
var state_42741__$1 = state_42741;
var statearr_42754_42772 = state_42741__$1;
(statearr_42754_42772[(2)] = null);

(statearr_42754_42772[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42742 === (5))){
var state_42741__$1 = state_42741;
var statearr_42755_42773 = state_42741__$1;
(statearr_42755_42773[(2)] = null);

(statearr_42755_42773[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42742 === (10))){
var inst_42733 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
var statearr_42756_42774 = state_42741__$1;
(statearr_42756_42774[(2)] = inst_42733);

(statearr_42756_42774[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42742 === (8))){
var inst_42723 = (state_42741[(7)]);
var state_42741__$1 = state_42741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42741__$1,(11),out,inst_42723);
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
});})(c__30816__auto___42764,out))
;
return ((function (switch__30736__auto__,c__30816__auto___42764,out){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_42760 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42760[(0)] = state_machine__30737__auto__);

(statearr_42760[(1)] = (1));

return statearr_42760;
});
var state_machine__30737__auto____1 = (function (state_42741){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_42741);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e42761){if((e42761 instanceof Object)){
var ex__30740__auto__ = e42761;
var statearr_42762_42775 = state_42741;
(statearr_42762_42775[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42741);

return cljs.core.constant$keyword$21;
} else {
throw e42761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__42776 = state_42741;
state_42741 = G__42776;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_42741){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_42741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto___42764,out))
})();
var state__30818__auto__ = (function (){var statearr_42763 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_42763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___42764);

return statearr_42763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto___42764,out))
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
if(typeof cljs.core.async.t42789 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42789 = (function (ch,f,map_LT_,meta42790){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta42790 = meta42790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42789.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t42789.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t42789.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t42789.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t42792 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42792 = (function (fn1,_,meta42790,map_LT_,f,ch,meta42793){
this.fn1 = fn1;
this._ = _;
this.meta42790 = meta42790;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42793 = meta42793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42792.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t42792.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t42792.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42777_SHARP_){
var G__42795 = (((p1__42777_SHARP_ == null))?null:(function (){var G__42796 = p1__42777_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42796) : self__.f.call(null,G__42796));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42795) : f1.call(null,G__42795));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t42792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42794){
var self__ = this;
var _42794__$1 = this;
return self__.meta42793;
});})(___$1))
;

cljs.core.async.t42792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42794,meta42793__$1){
var self__ = this;
var _42794__$1 = this;
return (new cljs.core.async.t42792(self__.fn1,self__._,self__.meta42790,self__.map_LT_,self__.f,self__.ch,meta42793__$1));
});})(___$1))
;

cljs.core.async.t42792.cljs$lang$type = true;

cljs.core.async.t42792.cljs$lang$ctorStr = "cljs.core.async/t42792";

cljs.core.async.t42792.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__24265__auto__,writer__24266__auto__,opt__24267__auto__){
return cljs.core._write(writer__24266__auto__,"cljs.core.async/t42792");
});})(___$1))
;

cljs.core.async.__GT_t42792 = ((function (___$1){
return (function __GT_t42792(fn1__$1,___$2,meta42790__$1,map_LT___$1,f__$1,ch__$1,meta42793){
return (new cljs.core.async.t42792(fn1__$1,___$2,meta42790__$1,map_LT___$1,f__$1,ch__$1,meta42793));
});})(___$1))
;

}

return (new cljs.core.async.t42792(fn1,___$1,self__.meta42790,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__23666__auto__ = ret;
if(cljs.core.truth_(and__23666__auto__)){
return !(((function (){var G__42797 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42797) : cljs.core.deref.call(null,G__42797));
})() == null));
} else {
return and__23666__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42798 = (function (){var G__42799 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42799) : cljs.core.deref.call(null,G__42799));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42798) : self__.f.call(null,G__42798));
})());
} else {
return ret;
}
});

cljs.core.async.t42789.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t42789.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t42789.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t42789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42791){
var self__ = this;
var _42791__$1 = this;
return self__.meta42790;
});

cljs.core.async.t42789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42791,meta42790__$1){
var self__ = this;
var _42791__$1 = this;
return (new cljs.core.async.t42789(self__.ch,self__.f,self__.map_LT_,meta42790__$1));
});

cljs.core.async.t42789.cljs$lang$type = true;

cljs.core.async.t42789.cljs$lang$ctorStr = "cljs.core.async/t42789";

cljs.core.async.t42789.cljs$lang$ctorPrWriter = (function (this__24265__auto__,writer__24266__auto__,opt__24267__auto__){
return cljs.core._write(writer__24266__auto__,"cljs.core.async/t42789");
});

cljs.core.async.__GT_t42789 = (function __GT_t42789(ch__$1,f__$1,map_LT___$1,meta42790){
return (new cljs.core.async.t42789(ch__$1,f__$1,map_LT___$1,meta42790));
});

}

return (new cljs.core.async.t42789(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t42804 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42804 = (function (ch,f,map_GT_,meta42805){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta42805 = meta42805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42804.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t42804.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__42807 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42807) : self__.f.call(null,G__42807));
})(),fn1);
});

cljs.core.async.t42804.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t42804.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t42804.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t42804.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t42804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42806){
var self__ = this;
var _42806__$1 = this;
return self__.meta42805;
});

cljs.core.async.t42804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42806,meta42805__$1){
var self__ = this;
var _42806__$1 = this;
return (new cljs.core.async.t42804(self__.ch,self__.f,self__.map_GT_,meta42805__$1));
});

cljs.core.async.t42804.cljs$lang$type = true;

cljs.core.async.t42804.cljs$lang$ctorStr = "cljs.core.async/t42804";

cljs.core.async.t42804.cljs$lang$ctorPrWriter = (function (this__24265__auto__,writer__24266__auto__,opt__24267__auto__){
return cljs.core._write(writer__24266__auto__,"cljs.core.async/t42804");
});

cljs.core.async.__GT_t42804 = (function __GT_t42804(ch__$1,f__$1,map_GT___$1,meta42805){
return (new cljs.core.async.t42804(ch__$1,f__$1,map_GT___$1,meta42805));
});

}

return (new cljs.core.async.t42804(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t42812 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42812 = (function (ch,p,filter_GT_,meta42813){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta42813 = meta42813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42812.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t42812.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__42815 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__42815) : self__.p.call(null,G__42815));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t42812.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t42812.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t42812.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t42812.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t42812.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t42812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42814){
var self__ = this;
var _42814__$1 = this;
return self__.meta42813;
});

cljs.core.async.t42812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42814,meta42813__$1){
var self__ = this;
var _42814__$1 = this;
return (new cljs.core.async.t42812(self__.ch,self__.p,self__.filter_GT_,meta42813__$1));
});

cljs.core.async.t42812.cljs$lang$type = true;

cljs.core.async.t42812.cljs$lang$ctorStr = "cljs.core.async/t42812";

cljs.core.async.t42812.cljs$lang$ctorPrWriter = (function (this__24265__auto__,writer__24266__auto__,opt__24267__auto__){
return cljs.core._write(writer__24266__auto__,"cljs.core.async/t42812");
});

cljs.core.async.__GT_t42812 = (function __GT_t42812(ch__$1,p__$1,filter_GT___$1,meta42813){
return (new cljs.core.async.t42812(ch__$1,p__$1,filter_GT___$1,meta42813));
});

}

return (new cljs.core.async.t42812(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30816__auto___42903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto___42903,out){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto___42903,out){
return (function (state_42881){
var state_val_42882 = (state_42881[(1)]);
if((state_val_42882 === (7))){
var inst_42877 = (state_42881[(2)]);
var state_42881__$1 = state_42881;
var statearr_42883_42904 = state_42881__$1;
(statearr_42883_42904[(2)] = inst_42877);

(statearr_42883_42904[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42882 === (1))){
var state_42881__$1 = state_42881;
var statearr_42884_42905 = state_42881__$1;
(statearr_42884_42905[(2)] = null);

(statearr_42884_42905[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42882 === (4))){
var inst_42863 = (state_42881[(7)]);
var inst_42863__$1 = (state_42881[(2)]);
var inst_42864 = (inst_42863__$1 == null);
var state_42881__$1 = (function (){var statearr_42885 = state_42881;
(statearr_42885[(7)] = inst_42863__$1);

return statearr_42885;
})();
if(cljs.core.truth_(inst_42864)){
var statearr_42886_42906 = state_42881__$1;
(statearr_42886_42906[(1)] = (5));

} else {
var statearr_42887_42907 = state_42881__$1;
(statearr_42887_42907[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42882 === (6))){
var inst_42863 = (state_42881[(7)]);
var inst_42868 = (function (){var G__42888 = inst_42863;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__42888) : p.call(null,G__42888));
})();
var state_42881__$1 = state_42881;
if(cljs.core.truth_(inst_42868)){
var statearr_42889_42908 = state_42881__$1;
(statearr_42889_42908[(1)] = (8));

} else {
var statearr_42890_42909 = state_42881__$1;
(statearr_42890_42909[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42882 === (3))){
var inst_42879 = (state_42881[(2)]);
var state_42881__$1 = state_42881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42881__$1,inst_42879);
} else {
if((state_val_42882 === (2))){
var state_42881__$1 = state_42881;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42881__$1,(4),ch);
} else {
if((state_val_42882 === (11))){
var inst_42871 = (state_42881[(2)]);
var state_42881__$1 = state_42881;
var statearr_42891_42910 = state_42881__$1;
(statearr_42891_42910[(2)] = inst_42871);

(statearr_42891_42910[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42882 === (9))){
var state_42881__$1 = state_42881;
var statearr_42892_42911 = state_42881__$1;
(statearr_42892_42911[(2)] = null);

(statearr_42892_42911[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42882 === (5))){
var inst_42866 = cljs.core.async.close_BANG_(out);
var state_42881__$1 = state_42881;
var statearr_42893_42912 = state_42881__$1;
(statearr_42893_42912[(2)] = inst_42866);

(statearr_42893_42912[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42882 === (10))){
var inst_42874 = (state_42881[(2)]);
var state_42881__$1 = (function (){var statearr_42894 = state_42881;
(statearr_42894[(8)] = inst_42874);

return statearr_42894;
})();
var statearr_42895_42913 = state_42881__$1;
(statearr_42895_42913[(2)] = null);

(statearr_42895_42913[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42882 === (8))){
var inst_42863 = (state_42881[(7)]);
var state_42881__$1 = state_42881;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42881__$1,(11),out,inst_42863);
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
});})(c__30816__auto___42903,out))
;
return ((function (switch__30736__auto__,c__30816__auto___42903,out){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_42899 = [null,null,null,null,null,null,null,null,null];
(statearr_42899[(0)] = state_machine__30737__auto__);

(statearr_42899[(1)] = (1));

return statearr_42899;
});
var state_machine__30737__auto____1 = (function (state_42881){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_42881);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e42900){if((e42900 instanceof Object)){
var ex__30740__auto__ = e42900;
var statearr_42901_42914 = state_42881;
(statearr_42901_42914[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42881);

return cljs.core.constant$keyword$21;
} else {
throw e42900;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__42915 = state_42881;
state_42881 = G__42915;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_42881){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_42881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto___42903,out))
})();
var state__30818__auto__ = (function (){var statearr_42902 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_42902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___42903);

return statearr_42902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto___42903,out))
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
var c__30816__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto__){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto__){
return (function (state_43085){
var state_val_43086 = (state_43085[(1)]);
if((state_val_43086 === (7))){
var inst_43081 = (state_43085[(2)]);
var state_43085__$1 = state_43085;
var statearr_43087_43129 = state_43085__$1;
(statearr_43087_43129[(2)] = inst_43081);

(statearr_43087_43129[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (20))){
var inst_43051 = (state_43085[(7)]);
var inst_43062 = (state_43085[(2)]);
var inst_43063 = cljs.core.next(inst_43051);
var inst_43037 = inst_43063;
var inst_43038 = null;
var inst_43039 = (0);
var inst_43040 = (0);
var state_43085__$1 = (function (){var statearr_43088 = state_43085;
(statearr_43088[(8)] = inst_43039);

(statearr_43088[(9)] = inst_43062);

(statearr_43088[(10)] = inst_43040);

(statearr_43088[(11)] = inst_43038);

(statearr_43088[(12)] = inst_43037);

return statearr_43088;
})();
var statearr_43089_43130 = state_43085__$1;
(statearr_43089_43130[(2)] = null);

(statearr_43089_43130[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (1))){
var state_43085__$1 = state_43085;
var statearr_43090_43131 = state_43085__$1;
(statearr_43090_43131[(2)] = null);

(statearr_43090_43131[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (4))){
var inst_43026 = (state_43085[(13)]);
var inst_43026__$1 = (state_43085[(2)]);
var inst_43027 = (inst_43026__$1 == null);
var state_43085__$1 = (function (){var statearr_43091 = state_43085;
(statearr_43091[(13)] = inst_43026__$1);

return statearr_43091;
})();
if(cljs.core.truth_(inst_43027)){
var statearr_43092_43132 = state_43085__$1;
(statearr_43092_43132[(1)] = (5));

} else {
var statearr_43093_43133 = state_43085__$1;
(statearr_43093_43133[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (15))){
var state_43085__$1 = state_43085;
var statearr_43097_43134 = state_43085__$1;
(statearr_43097_43134[(2)] = null);

(statearr_43097_43134[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (21))){
var state_43085__$1 = state_43085;
var statearr_43098_43135 = state_43085__$1;
(statearr_43098_43135[(2)] = null);

(statearr_43098_43135[(1)] = (23));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (13))){
var inst_43039 = (state_43085[(8)]);
var inst_43040 = (state_43085[(10)]);
var inst_43038 = (state_43085[(11)]);
var inst_43037 = (state_43085[(12)]);
var inst_43047 = (state_43085[(2)]);
var inst_43048 = (inst_43040 + (1));
var tmp43094 = inst_43039;
var tmp43095 = inst_43038;
var tmp43096 = inst_43037;
var inst_43037__$1 = tmp43096;
var inst_43038__$1 = tmp43095;
var inst_43039__$1 = tmp43094;
var inst_43040__$1 = inst_43048;
var state_43085__$1 = (function (){var statearr_43099 = state_43085;
(statearr_43099[(8)] = inst_43039__$1);

(statearr_43099[(10)] = inst_43040__$1);

(statearr_43099[(11)] = inst_43038__$1);

(statearr_43099[(14)] = inst_43047);

(statearr_43099[(12)] = inst_43037__$1);

return statearr_43099;
})();
var statearr_43100_43136 = state_43085__$1;
(statearr_43100_43136[(2)] = null);

(statearr_43100_43136[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (22))){
var state_43085__$1 = state_43085;
var statearr_43101_43137 = state_43085__$1;
(statearr_43101_43137[(2)] = null);

(statearr_43101_43137[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (6))){
var inst_43026 = (state_43085[(13)]);
var inst_43035 = (function (){var G__43102 = inst_43026;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43102) : f.call(null,G__43102));
})();
var inst_43036 = cljs.core.seq(inst_43035);
var inst_43037 = inst_43036;
var inst_43038 = null;
var inst_43039 = (0);
var inst_43040 = (0);
var state_43085__$1 = (function (){var statearr_43103 = state_43085;
(statearr_43103[(8)] = inst_43039);

(statearr_43103[(10)] = inst_43040);

(statearr_43103[(11)] = inst_43038);

(statearr_43103[(12)] = inst_43037);

return statearr_43103;
})();
var statearr_43104_43138 = state_43085__$1;
(statearr_43104_43138[(2)] = null);

(statearr_43104_43138[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (17))){
var inst_43051 = (state_43085[(7)]);
var inst_43055 = cljs.core.chunk_first(inst_43051);
var inst_43056 = cljs.core.chunk_rest(inst_43051);
var inst_43057 = cljs.core.count(inst_43055);
var inst_43037 = inst_43056;
var inst_43038 = inst_43055;
var inst_43039 = inst_43057;
var inst_43040 = (0);
var state_43085__$1 = (function (){var statearr_43105 = state_43085;
(statearr_43105[(8)] = inst_43039);

(statearr_43105[(10)] = inst_43040);

(statearr_43105[(11)] = inst_43038);

(statearr_43105[(12)] = inst_43037);

return statearr_43105;
})();
var statearr_43106_43139 = state_43085__$1;
(statearr_43106_43139[(2)] = null);

(statearr_43106_43139[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (3))){
var inst_43083 = (state_43085[(2)]);
var state_43085__$1 = state_43085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43085__$1,inst_43083);
} else {
if((state_val_43086 === (12))){
var inst_43071 = (state_43085[(2)]);
var state_43085__$1 = state_43085;
var statearr_43107_43140 = state_43085__$1;
(statearr_43107_43140[(2)] = inst_43071);

(statearr_43107_43140[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (2))){
var state_43085__$1 = state_43085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43085__$1,(4),in$);
} else {
if((state_val_43086 === (23))){
var inst_43079 = (state_43085[(2)]);
var state_43085__$1 = state_43085;
var statearr_43108_43141 = state_43085__$1;
(statearr_43108_43141[(2)] = inst_43079);

(statearr_43108_43141[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (19))){
var inst_43066 = (state_43085[(2)]);
var state_43085__$1 = state_43085;
var statearr_43109_43142 = state_43085__$1;
(statearr_43109_43142[(2)] = inst_43066);

(statearr_43109_43142[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (11))){
var inst_43051 = (state_43085[(7)]);
var inst_43037 = (state_43085[(12)]);
var inst_43051__$1 = cljs.core.seq(inst_43037);
var state_43085__$1 = (function (){var statearr_43110 = state_43085;
(statearr_43110[(7)] = inst_43051__$1);

return statearr_43110;
})();
if(inst_43051__$1){
var statearr_43111_43143 = state_43085__$1;
(statearr_43111_43143[(1)] = (14));

} else {
var statearr_43112_43144 = state_43085__$1;
(statearr_43112_43144[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (9))){
var inst_43073 = (state_43085[(2)]);
var inst_43074 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43085__$1 = (function (){var statearr_43113 = state_43085;
(statearr_43113[(15)] = inst_43073);

return statearr_43113;
})();
if(cljs.core.truth_(inst_43074)){
var statearr_43114_43145 = state_43085__$1;
(statearr_43114_43145[(1)] = (21));

} else {
var statearr_43115_43146 = state_43085__$1;
(statearr_43115_43146[(1)] = (22));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (5))){
var inst_43029 = cljs.core.async.close_BANG_(out);
var state_43085__$1 = state_43085;
var statearr_43116_43147 = state_43085__$1;
(statearr_43116_43147[(2)] = inst_43029);

(statearr_43116_43147[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (14))){
var inst_43051 = (state_43085[(7)]);
var inst_43053 = cljs.core.chunked_seq_QMARK_(inst_43051);
var state_43085__$1 = state_43085;
if(inst_43053){
var statearr_43117_43148 = state_43085__$1;
(statearr_43117_43148[(1)] = (17));

} else {
var statearr_43118_43149 = state_43085__$1;
(statearr_43118_43149[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (16))){
var inst_43069 = (state_43085[(2)]);
var state_43085__$1 = state_43085;
var statearr_43119_43150 = state_43085__$1;
(statearr_43119_43150[(2)] = inst_43069);

(statearr_43119_43150[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43086 === (10))){
var inst_43040 = (state_43085[(10)]);
var inst_43038 = (state_43085[(11)]);
var inst_43045 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43038,inst_43040);
var state_43085__$1 = state_43085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43085__$1,(13),out,inst_43045);
} else {
if((state_val_43086 === (18))){
var inst_43051 = (state_43085[(7)]);
var inst_43060 = cljs.core.first(inst_43051);
var state_43085__$1 = state_43085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43085__$1,(20),out,inst_43060);
} else {
if((state_val_43086 === (8))){
var inst_43039 = (state_43085[(8)]);
var inst_43040 = (state_43085[(10)]);
var inst_43042 = (inst_43040 < inst_43039);
var inst_43043 = inst_43042;
var state_43085__$1 = state_43085;
if(cljs.core.truth_(inst_43043)){
var statearr_43120_43151 = state_43085__$1;
(statearr_43120_43151[(1)] = (10));

} else {
var statearr_43121_43152 = state_43085__$1;
(statearr_43121_43152[(1)] = (11));

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
});})(c__30816__auto__))
;
return ((function (switch__30736__auto__,c__30816__auto__){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_43125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43125[(0)] = state_machine__30737__auto__);

(statearr_43125[(1)] = (1));

return statearr_43125;
});
var state_machine__30737__auto____1 = (function (state_43085){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_43085);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e43126){if((e43126 instanceof Object)){
var ex__30740__auto__ = e43126;
var statearr_43127_43153 = state_43085;
(statearr_43127_43153[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43085);

return cljs.core.constant$keyword$21;
} else {
throw e43126;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__43154 = state_43085;
state_43085 = G__43154;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_43085){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_43085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto__))
})();
var state__30818__auto__ = (function (){var statearr_43128 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_43128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto__);

return statearr_43128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto__))
);

return c__30816__auto__;
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
var c__30816__auto___43259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto___43259,out){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto___43259,out){
return (function (state_43234){
var state_val_43235 = (state_43234[(1)]);
if((state_val_43235 === (7))){
var inst_43229 = (state_43234[(2)]);
var state_43234__$1 = state_43234;
var statearr_43236_43260 = state_43234__$1;
(statearr_43236_43260[(2)] = inst_43229);

(statearr_43236_43260[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43235 === (1))){
var inst_43211 = null;
var state_43234__$1 = (function (){var statearr_43237 = state_43234;
(statearr_43237[(7)] = inst_43211);

return statearr_43237;
})();
var statearr_43238_43261 = state_43234__$1;
(statearr_43238_43261[(2)] = null);

(statearr_43238_43261[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43235 === (4))){
var inst_43214 = (state_43234[(8)]);
var inst_43214__$1 = (state_43234[(2)]);
var inst_43215 = (inst_43214__$1 == null);
var inst_43216 = cljs.core.not(inst_43215);
var state_43234__$1 = (function (){var statearr_43239 = state_43234;
(statearr_43239[(8)] = inst_43214__$1);

return statearr_43239;
})();
if(inst_43216){
var statearr_43240_43262 = state_43234__$1;
(statearr_43240_43262[(1)] = (5));

} else {
var statearr_43241_43263 = state_43234__$1;
(statearr_43241_43263[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43235 === (6))){
var state_43234__$1 = state_43234;
var statearr_43242_43264 = state_43234__$1;
(statearr_43242_43264[(2)] = null);

(statearr_43242_43264[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43235 === (3))){
var inst_43231 = (state_43234[(2)]);
var inst_43232 = cljs.core.async.close_BANG_(out);
var state_43234__$1 = (function (){var statearr_43243 = state_43234;
(statearr_43243[(9)] = inst_43231);

return statearr_43243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43234__$1,inst_43232);
} else {
if((state_val_43235 === (2))){
var state_43234__$1 = state_43234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43234__$1,(4),ch);
} else {
if((state_val_43235 === (11))){
var inst_43214 = (state_43234[(8)]);
var inst_43223 = (state_43234[(2)]);
var inst_43211 = inst_43214;
var state_43234__$1 = (function (){var statearr_43244 = state_43234;
(statearr_43244[(7)] = inst_43211);

(statearr_43244[(10)] = inst_43223);

return statearr_43244;
})();
var statearr_43245_43265 = state_43234__$1;
(statearr_43245_43265[(2)] = null);

(statearr_43245_43265[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43235 === (9))){
var inst_43214 = (state_43234[(8)]);
var state_43234__$1 = state_43234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43234__$1,(11),out,inst_43214);
} else {
if((state_val_43235 === (5))){
var inst_43211 = (state_43234[(7)]);
var inst_43214 = (state_43234[(8)]);
var inst_43218 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43214,inst_43211);
var state_43234__$1 = state_43234;
if(inst_43218){
var statearr_43247_43266 = state_43234__$1;
(statearr_43247_43266[(1)] = (8));

} else {
var statearr_43248_43267 = state_43234__$1;
(statearr_43248_43267[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43235 === (10))){
var inst_43226 = (state_43234[(2)]);
var state_43234__$1 = state_43234;
var statearr_43249_43268 = state_43234__$1;
(statearr_43249_43268[(2)] = inst_43226);

(statearr_43249_43268[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43235 === (8))){
var inst_43211 = (state_43234[(7)]);
var tmp43246 = inst_43211;
var inst_43211__$1 = tmp43246;
var state_43234__$1 = (function (){var statearr_43250 = state_43234;
(statearr_43250[(7)] = inst_43211__$1);

return statearr_43250;
})();
var statearr_43251_43269 = state_43234__$1;
(statearr_43251_43269[(2)] = null);

(statearr_43251_43269[(1)] = (2));


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
});})(c__30816__auto___43259,out))
;
return ((function (switch__30736__auto__,c__30816__auto___43259,out){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_43255 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43255[(0)] = state_machine__30737__auto__);

(statearr_43255[(1)] = (1));

return statearr_43255;
});
var state_machine__30737__auto____1 = (function (state_43234){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_43234);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e43256){if((e43256 instanceof Object)){
var ex__30740__auto__ = e43256;
var statearr_43257_43270 = state_43234;
(statearr_43257_43270[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43234);

return cljs.core.constant$keyword$21;
} else {
throw e43256;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__43271 = state_43234;
state_43234 = G__43271;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_43234){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_43234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto___43259,out))
})();
var state__30818__auto__ = (function (){var statearr_43258 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_43258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___43259);

return statearr_43258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto___43259,out))
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
var c__30816__auto___43409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto___43409,out){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto___43409,out){
return (function (state_43379){
var state_val_43380 = (state_43379[(1)]);
if((state_val_43380 === (7))){
var inst_43375 = (state_43379[(2)]);
var state_43379__$1 = state_43379;
var statearr_43381_43410 = state_43379__$1;
(statearr_43381_43410[(2)] = inst_43375);

(statearr_43381_43410[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43380 === (1))){
var inst_43342 = (new Array(n));
var inst_43343 = inst_43342;
var inst_43344 = (0);
var state_43379__$1 = (function (){var statearr_43382 = state_43379;
(statearr_43382[(7)] = inst_43343);

(statearr_43382[(8)] = inst_43344);

return statearr_43382;
})();
var statearr_43383_43411 = state_43379__$1;
(statearr_43383_43411[(2)] = null);

(statearr_43383_43411[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43380 === (4))){
var inst_43347 = (state_43379[(9)]);
var inst_43347__$1 = (state_43379[(2)]);
var inst_43348 = (inst_43347__$1 == null);
var inst_43349 = cljs.core.not(inst_43348);
var state_43379__$1 = (function (){var statearr_43384 = state_43379;
(statearr_43384[(9)] = inst_43347__$1);

return statearr_43384;
})();
if(inst_43349){
var statearr_43385_43412 = state_43379__$1;
(statearr_43385_43412[(1)] = (5));

} else {
var statearr_43386_43413 = state_43379__$1;
(statearr_43386_43413[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43380 === (15))){
var inst_43369 = (state_43379[(2)]);
var state_43379__$1 = state_43379;
var statearr_43387_43414 = state_43379__$1;
(statearr_43387_43414[(2)] = inst_43369);

(statearr_43387_43414[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43380 === (13))){
var state_43379__$1 = state_43379;
var statearr_43388_43415 = state_43379__$1;
(statearr_43388_43415[(2)] = null);

(statearr_43388_43415[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43380 === (6))){
var inst_43344 = (state_43379[(8)]);
var inst_43365 = (inst_43344 > (0));
var state_43379__$1 = state_43379;
if(cljs.core.truth_(inst_43365)){
var statearr_43389_43416 = state_43379__$1;
(statearr_43389_43416[(1)] = (12));

} else {
var statearr_43390_43417 = state_43379__$1;
(statearr_43390_43417[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43380 === (3))){
var inst_43377 = (state_43379[(2)]);
var state_43379__$1 = state_43379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43379__$1,inst_43377);
} else {
if((state_val_43380 === (12))){
var inst_43343 = (state_43379[(7)]);
var inst_43367 = cljs.core.vec(inst_43343);
var state_43379__$1 = state_43379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43379__$1,(15),out,inst_43367);
} else {
if((state_val_43380 === (2))){
var state_43379__$1 = state_43379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43379__$1,(4),ch);
} else {
if((state_val_43380 === (11))){
var inst_43359 = (state_43379[(2)]);
var inst_43360 = (new Array(n));
var inst_43343 = inst_43360;
var inst_43344 = (0);
var state_43379__$1 = (function (){var statearr_43391 = state_43379;
(statearr_43391[(7)] = inst_43343);

(statearr_43391[(8)] = inst_43344);

(statearr_43391[(10)] = inst_43359);

return statearr_43391;
})();
var statearr_43392_43418 = state_43379__$1;
(statearr_43392_43418[(2)] = null);

(statearr_43392_43418[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43380 === (9))){
var inst_43343 = (state_43379[(7)]);
var inst_43357 = cljs.core.vec(inst_43343);
var state_43379__$1 = state_43379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43379__$1,(11),out,inst_43357);
} else {
if((state_val_43380 === (5))){
var inst_43343 = (state_43379[(7)]);
var inst_43352 = (state_43379[(11)]);
var inst_43344 = (state_43379[(8)]);
var inst_43347 = (state_43379[(9)]);
var inst_43351 = (inst_43343[inst_43344] = inst_43347);
var inst_43352__$1 = (inst_43344 + (1));
var inst_43353 = (inst_43352__$1 < n);
var state_43379__$1 = (function (){var statearr_43393 = state_43379;
(statearr_43393[(11)] = inst_43352__$1);

(statearr_43393[(12)] = inst_43351);

return statearr_43393;
})();
if(cljs.core.truth_(inst_43353)){
var statearr_43394_43419 = state_43379__$1;
(statearr_43394_43419[(1)] = (8));

} else {
var statearr_43395_43420 = state_43379__$1;
(statearr_43395_43420[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43380 === (14))){
var inst_43372 = (state_43379[(2)]);
var inst_43373 = cljs.core.async.close_BANG_(out);
var state_43379__$1 = (function (){var statearr_43397 = state_43379;
(statearr_43397[(13)] = inst_43372);

return statearr_43397;
})();
var statearr_43398_43421 = state_43379__$1;
(statearr_43398_43421[(2)] = inst_43373);

(statearr_43398_43421[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43380 === (10))){
var inst_43363 = (state_43379[(2)]);
var state_43379__$1 = state_43379;
var statearr_43399_43422 = state_43379__$1;
(statearr_43399_43422[(2)] = inst_43363);

(statearr_43399_43422[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43380 === (8))){
var inst_43343 = (state_43379[(7)]);
var inst_43352 = (state_43379[(11)]);
var tmp43396 = inst_43343;
var inst_43343__$1 = tmp43396;
var inst_43344 = inst_43352;
var state_43379__$1 = (function (){var statearr_43400 = state_43379;
(statearr_43400[(7)] = inst_43343__$1);

(statearr_43400[(8)] = inst_43344);

return statearr_43400;
})();
var statearr_43401_43423 = state_43379__$1;
(statearr_43401_43423[(2)] = null);

(statearr_43401_43423[(1)] = (2));


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
});})(c__30816__auto___43409,out))
;
return ((function (switch__30736__auto__,c__30816__auto___43409,out){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_43405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43405[(0)] = state_machine__30737__auto__);

(statearr_43405[(1)] = (1));

return statearr_43405;
});
var state_machine__30737__auto____1 = (function (state_43379){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_43379);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e43406){if((e43406 instanceof Object)){
var ex__30740__auto__ = e43406;
var statearr_43407_43424 = state_43379;
(statearr_43407_43424[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43379);

return cljs.core.constant$keyword$21;
} else {
throw e43406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__43425 = state_43379;
state_43379 = G__43425;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_43379){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_43379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto___43409,out))
})();
var state__30818__auto__ = (function (){var statearr_43408 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_43408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___43409);

return statearr_43408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto___43409,out))
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
var c__30816__auto___43573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto___43573,out){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto___43573,out){
return (function (state_43542){
var state_val_43543 = (state_43542[(1)]);
if((state_val_43543 === (7))){
var inst_43538 = (state_43542[(2)]);
var state_43542__$1 = state_43542;
var statearr_43544_43574 = state_43542__$1;
(statearr_43544_43574[(2)] = inst_43538);

(statearr_43544_43574[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43543 === (1))){
var inst_43501 = [];
var inst_43502 = inst_43501;
var inst_43503 = cljs.core.constant$keyword$36;
var state_43542__$1 = (function (){var statearr_43545 = state_43542;
(statearr_43545[(7)] = inst_43503);

(statearr_43545[(8)] = inst_43502);

return statearr_43545;
})();
var statearr_43546_43575 = state_43542__$1;
(statearr_43546_43575[(2)] = null);

(statearr_43546_43575[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43543 === (4))){
var inst_43506 = (state_43542[(9)]);
var inst_43506__$1 = (state_43542[(2)]);
var inst_43507 = (inst_43506__$1 == null);
var inst_43508 = cljs.core.not(inst_43507);
var state_43542__$1 = (function (){var statearr_43547 = state_43542;
(statearr_43547[(9)] = inst_43506__$1);

return statearr_43547;
})();
if(inst_43508){
var statearr_43548_43576 = state_43542__$1;
(statearr_43548_43576[(1)] = (5));

} else {
var statearr_43549_43577 = state_43542__$1;
(statearr_43549_43577[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43543 === (15))){
var inst_43532 = (state_43542[(2)]);
var state_43542__$1 = state_43542;
var statearr_43550_43578 = state_43542__$1;
(statearr_43550_43578[(2)] = inst_43532);

(statearr_43550_43578[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43543 === (13))){
var state_43542__$1 = state_43542;
var statearr_43551_43579 = state_43542__$1;
(statearr_43551_43579[(2)] = null);

(statearr_43551_43579[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43543 === (6))){
var inst_43502 = (state_43542[(8)]);
var inst_43527 = inst_43502.length;
var inst_43528 = (inst_43527 > (0));
var state_43542__$1 = state_43542;
if(cljs.core.truth_(inst_43528)){
var statearr_43552_43580 = state_43542__$1;
(statearr_43552_43580[(1)] = (12));

} else {
var statearr_43553_43581 = state_43542__$1;
(statearr_43553_43581[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43543 === (3))){
var inst_43540 = (state_43542[(2)]);
var state_43542__$1 = state_43542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43542__$1,inst_43540);
} else {
if((state_val_43543 === (12))){
var inst_43502 = (state_43542[(8)]);
var inst_43530 = cljs.core.vec(inst_43502);
var state_43542__$1 = state_43542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43542__$1,(15),out,inst_43530);
} else {
if((state_val_43543 === (2))){
var state_43542__$1 = state_43542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43542__$1,(4),ch);
} else {
if((state_val_43543 === (11))){
var inst_43506 = (state_43542[(9)]);
var inst_43510 = (state_43542[(10)]);
var inst_43520 = (state_43542[(2)]);
var inst_43521 = [];
var inst_43522 = inst_43521.push(inst_43506);
var inst_43502 = inst_43521;
var inst_43503 = inst_43510;
var state_43542__$1 = (function (){var statearr_43554 = state_43542;
(statearr_43554[(11)] = inst_43522);

(statearr_43554[(12)] = inst_43520);

(statearr_43554[(7)] = inst_43503);

(statearr_43554[(8)] = inst_43502);

return statearr_43554;
})();
var statearr_43555_43582 = state_43542__$1;
(statearr_43555_43582[(2)] = null);

(statearr_43555_43582[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43543 === (9))){
var inst_43502 = (state_43542[(8)]);
var inst_43518 = cljs.core.vec(inst_43502);
var state_43542__$1 = state_43542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43542__$1,(11),out,inst_43518);
} else {
if((state_val_43543 === (5))){
var inst_43503 = (state_43542[(7)]);
var inst_43506 = (state_43542[(9)]);
var inst_43510 = (state_43542[(10)]);
var inst_43510__$1 = (function (){var G__43556 = inst_43506;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43556) : f.call(null,G__43556));
})();
var inst_43511 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43510__$1,inst_43503);
var inst_43512 = cljs.core.keyword_identical_QMARK_(inst_43503,cljs.core.constant$keyword$36);
var inst_43513 = (inst_43511) || (inst_43512);
var state_43542__$1 = (function (){var statearr_43557 = state_43542;
(statearr_43557[(10)] = inst_43510__$1);

return statearr_43557;
})();
if(cljs.core.truth_(inst_43513)){
var statearr_43558_43583 = state_43542__$1;
(statearr_43558_43583[(1)] = (8));

} else {
var statearr_43559_43584 = state_43542__$1;
(statearr_43559_43584[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_43543 === (14))){
var inst_43535 = (state_43542[(2)]);
var inst_43536 = cljs.core.async.close_BANG_(out);
var state_43542__$1 = (function (){var statearr_43561 = state_43542;
(statearr_43561[(13)] = inst_43535);

return statearr_43561;
})();
var statearr_43562_43585 = state_43542__$1;
(statearr_43562_43585[(2)] = inst_43536);

(statearr_43562_43585[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43543 === (10))){
var inst_43525 = (state_43542[(2)]);
var state_43542__$1 = state_43542;
var statearr_43563_43586 = state_43542__$1;
(statearr_43563_43586[(2)] = inst_43525);

(statearr_43563_43586[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_43543 === (8))){
var inst_43502 = (state_43542[(8)]);
var inst_43506 = (state_43542[(9)]);
var inst_43510 = (state_43542[(10)]);
var inst_43515 = inst_43502.push(inst_43506);
var tmp43560 = inst_43502;
var inst_43502__$1 = tmp43560;
var inst_43503 = inst_43510;
var state_43542__$1 = (function (){var statearr_43564 = state_43542;
(statearr_43564[(14)] = inst_43515);

(statearr_43564[(7)] = inst_43503);

(statearr_43564[(8)] = inst_43502__$1);

return statearr_43564;
})();
var statearr_43565_43587 = state_43542__$1;
(statearr_43565_43587[(2)] = null);

(statearr_43565_43587[(1)] = (2));


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
});})(c__30816__auto___43573,out))
;
return ((function (switch__30736__auto__,c__30816__auto___43573,out){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_43569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43569[(0)] = state_machine__30737__auto__);

(statearr_43569[(1)] = (1));

return statearr_43569;
});
var state_machine__30737__auto____1 = (function (state_43542){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_43542);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e43570){if((e43570 instanceof Object)){
var ex__30740__auto__ = e43570;
var statearr_43571_43588 = state_43542;
(statearr_43571_43588[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43542);

return cljs.core.constant$keyword$21;
} else {
throw e43570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__43589 = state_43542;
state_43542 = G__43589;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_43542){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_43542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto___43573,out))
})();
var state__30818__auto__ = (function (){var statearr_43572 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_43572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto___43573);

return statearr_43572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto___43573,out))
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
