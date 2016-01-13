// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

cljs.core.async.impl.protocols.ReadPort = (function (){var obj36474 = {};
return obj36474;
})();

cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){
if((function (){var and__16453__auto__ = port;
if(and__16453__auto__){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else {
return and__16453__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__17109__auto__ = (((port == null))?null:port);
return (function (){var or__16465__auto__ = (cljs.core.async.impl.protocols.take_BANG_[(function (){var G__36478 = x__17109__auto__;
return goog.typeOf(G__36478);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});


cljs.core.async.impl.protocols.WritePort = (function (){var obj36480 = {};
return obj36480;
})();

cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn1_handler){
if((function (){var and__16453__auto__ = port;
if(and__16453__auto__){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else {
return and__16453__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__17109__auto__ = (((port == null))?null:port);
return (function (){var or__16465__auto__ = (cljs.core.async.impl.protocols.put_BANG_[(function (){var G__36484 = x__17109__auto__;
return goog.typeOf(G__36484);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});


cljs.core.async.impl.protocols.Channel = (function (){var obj36486 = {};
return obj36486;
})();

cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){
if((function (){var and__16453__auto__ = chan;
if(and__16453__auto__){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else {
return and__16453__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__17109__auto__ = (((chan == null))?null:chan);
return (function (){var or__16465__auto__ = (cljs.core.async.impl.protocols.close_BANG_[(function (){var G__36490 = x__17109__auto__;
return goog.typeOf(G__36490);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.close!",chan);
}
}
})().call(null,chan);
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function closed_QMARK_(chan){
if((function (){var and__16453__auto__ = chan;
if(and__16453__auto__){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else {
return and__16453__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__17109__auto__ = (((chan == null))?null:chan);
return (function (){var or__16465__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[(function (){var G__36494 = x__17109__auto__;
return goog.typeOf(G__36494);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.closed?",chan);
}
}
})().call(null,chan);
}
});


cljs.core.async.impl.protocols.Handler = (function (){var obj36496 = {};
return obj36496;
})();

cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){
if((function (){var and__16453__auto__ = h;
if(and__16453__auto__){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else {
return and__16453__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__17109__auto__ = (((h == null))?null:h);
return (function (){var or__16465__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[(function (){var G__36500 = x__17109__auto__;
return goog.typeOf(G__36500);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.active?",h);
}
}
})().call(null,h);
}
});

cljs.core.async.impl.protocols.commit = (function commit(h){
if((function (){var and__16453__auto__ = h;
if(and__16453__auto__){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else {
return and__16453__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__17109__auto__ = (((h == null))?null:h);
return (function (){var or__16465__auto__ = (cljs.core.async.impl.protocols.commit[(function (){var G__36504 = x__17109__auto__;
return goog.typeOf(G__36504);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.commit",h);
}
}
})().call(null,h);
}
});


cljs.core.async.impl.protocols.Buffer = (function (){var obj36506 = {};
return obj36506;
})();

cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){
if((function (){var and__16453__auto__ = b;
if(and__16453__auto__){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else {
return and__16453__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__17109__auto__ = (((b == null))?null:b);
return (function (){var or__16465__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[(function (){var G__36510 = x__17109__auto__;
return goog.typeOf(G__36510);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.full?",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){
if((function (){var and__16453__auto__ = b;
if(and__16453__auto__){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else {
return and__16453__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__17109__auto__ = (((b == null))?null:b);
return (function (){var or__16465__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[(function (){var G__36514 = x__17109__auto__;
return goog.typeOf(G__36514);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.remove!",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.add_BANG__STAR_ = (function add_BANG__STAR_(b,itm){
if((function (){var and__16453__auto__ = b;
if(and__16453__auto__){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else {
return and__16453__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__17109__auto__ = (((b == null))?null:b);
return (function (){var or__16465__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[(function (){var G__36518 = x__17109__auto__;
return goog.typeOf(G__36518);
})()]);
if(or__16465__auto__){
return or__16465__auto__;
} else {
var or__16465__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(or__16465__auto____$1){
return or__16465__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.add!*",b);
}
}
})().call(null,b,itm);
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function() {
var add_BANG_ = null;
var add_BANG___1 = (function (b){
return b;
});
var add_BANG___2 = (function (b,itm){
if(!((itm == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"itm","itm",-713282527,null)))], 0)))].join('')));
}

return cljs.core.async.impl.protocols.add_BANG__STAR_(b,itm);
});
add_BANG_ = function(b,itm){
switch(arguments.length){
case 1:
return add_BANG___1.call(this,b);
case 2:
return add_BANG___2.call(this,b,itm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_BANG_.cljs$core$IFn$_invoke$arity$1 = add_BANG___1;
add_BANG_.cljs$core$IFn$_invoke$arity$2 = add_BANG___2;
return add_BANG_;
})()
;

cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj36520 = {};
return obj36520;
})();

