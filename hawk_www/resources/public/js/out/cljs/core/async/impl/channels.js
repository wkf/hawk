// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){
if(typeof cljs.core.async.impl.channels.t43757 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.channels.t43757 = (function (val,box,meta43758){
this.val = val;
this.box = box;
this.meta43758 = meta43758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t43757.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t43757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43759){
var self__ = this;
var _43759__$1 = this;
return self__.meta43758;
});

cljs.core.async.impl.channels.t43757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43759,meta43758__$1){
var self__ = this;
var _43759__$1 = this;
return (new cljs.core.async.impl.channels.t43757(self__.val,self__.box,meta43758__$1));
});

cljs.core.async.impl.channels.t43757.cljs$lang$type = true;

cljs.core.async.impl.channels.t43757.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t43757";

cljs.core.async.impl.channels.t43757.cljs$lang$ctorPrWriter = (function (this__24266__auto__,writer__24267__auto__,opt__24268__auto__){
return cljs.core._write(writer__24267__auto__,"cljs.core.async.impl.channels/t43757");
});

cljs.core.async.impl.channels.__GT_t43757 = (function __GT_t43757(val__$1,box__$1,meta43758){
return (new cljs.core.async.impl.channels.t43757(val__$1,box__$1,meta43758));
});

}

return (new cljs.core.async.impl.channels.t43757(val,box,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__24266__auto__,writer__24267__auto__,opt__24268__auto__){
return cljs.core._write(writer__24267__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

cljs.core.async.impl.channels.MMC = (function (){var obj43761 = {};
return obj43761;
})();

cljs.core.async.impl.channels.abort = (function abort(this$){
if((function (){var and__23667__auto__ = this$;
if(and__23667__auto__){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else {
return and__23667__auto__;
}
})()){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__24323__auto__ = (((this$ == null))?null:this$);
return (function (){var or__23679__auto__ = (cljs.core.async.impl.channels.abort[(function (){var G__43765 = x__24323__auto__;
return goog.typeOf(G__43765);
})()]);
if(or__23679__auto__){
return or__23679__auto__;
} else {
var or__23679__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(or__23679__auto____$1){
return or__23679__auto____$1;
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__23667__auto__ = self__.buf;
if(cljs.core.truth_(and__23667__auto__)){
return (self__.puts.length === (0));
} else {
return and__23667__auto__;
}
})())){
var G__43766_43778 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__43766_43778) : self__.add_BANG_.call(null,G__43766_43778));
} else {
}

while(true){
var taker_43779 = self__.takes.pop();
if((taker_43779 == null)){
} else {
if(taker_43779.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_43780 = taker_43779.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_43781 = (cljs.core.truth_((function (){var and__23667__auto__ = self__.buf;
if(cljs.core.truth_(and__23667__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__23667__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_43780,val_43781,taker_43779,this$__$1){
return (function (){
var G__43767 = val_43781;
return (take_cb_43780.cljs$core$IFn$_invoke$arity$1 ? take_cb_43780.cljs$core$IFn$_invoke$arity$1(G__43767) : take_cb_43780.call(null,G__43767));
});})(take_cb_43780,val_43781,taker_43779,this$__$1))
);
} else {
}

continue;
}
break;
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var _ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var retval = cljs.core.async.impl.channels.box(self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null));
while(true){
if(cljs.core.truth_(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))){
} else {
var putter_43782 = self__.puts.pop();
if((putter_43782 == null)){
} else {
var put_handler_43783 = putter_43782.handler;
var val_43784 = putter_43782.val;
if(put_handler_43783.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_43785 = put_handler_43783.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb_43785,put_handler_43783,val_43784,putter_43782,_,retval,this$__$1){
return (function (){
var G__43768 = true;
return (put_cb_43785.cljs$core$IFn$_invoke$arity$1 ? put_cb_43785.cljs$core$IFn$_invoke$arity$1(G__43768) : put_cb_43785.call(null,G__43768));
});})(put_cb_43785,put_handler_43783,val_43784,putter_43782,_,retval,this$__$1))
);

if(cljs.core.reduced_QMARK_((function (){var G__43769 = self__.buf;
var G__43770 = val_43784;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__43769,G__43770) : self__.add_BANG_.call(null,G__43769,G__43770));
})())){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}
} else {
}

continue;
}
}
break;
}

return retval;
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
var G__43771 = true;
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(G__43771) : put_cb.call(null,G__43771));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
var G__43772_43786 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__43772_43786) : self__.add_BANG_.call(null,G__43772_43786));
} else {
}

if(cljs.core.truth_((function (){var and__23667__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__23667__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__23667__auto__;
}
})())){
var has_val = (function (){var and__23667__auto__ = self__.buf;
if(cljs.core.truth_(and__23667__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__23667__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"takes","takes",298247964,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))], 0)))].join('')));
}

self__.takes.unbounded_unshift(handler);

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null)))], 0)))].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__23667__auto__ = self__.buf;
if(cljs.core.truth_(and__23667__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__23667__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((function (){var G__43773 = self__.buf;
var G__43774 = val;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__43773,G__43774) : self__.add_BANG_.call(null,G__43773,G__43774));
})());
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker_43787 = self__.takes.pop();
if(taker_43787.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_43788 = taker_43787.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_43789__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (take_cb_43788,val_43789__$1,taker_43787,done_QMARK_,closed__$1,this$__$1){
return (function (){
var G__43775 = val_43789__$1;
return (take_cb_43788.cljs$core$IFn$_invoke$arity$1 ? take_cb_43788.cljs$core$IFn$_invoke$arity$1(G__43775) : take_cb_43788.call(null,G__43775));
});})(take_cb_43788,val_43789__$1,taker_43787,done_QMARK_,closed__$1,this$__$1))
);
} else {
continue;
}
} else {
}
break;
}

if(done_QMARK_){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
var G__43776 = val;
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(G__43776) : take_cb.call(null,G__43776));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"puts","puts",-1883877054,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))], 0)))].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_43790 = self__.puts.pop();
if((putter_43790 == null)){
} else {
var put_handler_43791 = putter_43790.handler;
var val_43792 = putter_43790.val;
if(put_handler_43791.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_43793 = put_handler_43791.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_43793,put_handler_43791,val_43792,putter_43790,this$__$1){
return (function (){
var G__43777 = true;
return (put_cb_43793.cljs$core$IFn$_invoke$arity$1 ? put_cb_43793.cljs$core$IFn$_invoke$arity$1(G__43777) : put_cb_43793.call(null,G__43777));
});})(put_cb_43793,put_handler_43791,val_43792,putter_43790,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return cljs.core.async.impl.protocols.close_BANG_(this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__24266__auto__,writer__24267__auto__,opt__24268__auto__){
return cljs.core._write(writer__24267__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function handle(buf,exh,t){
var else$ = (function (){var or__23679__auto__ = exh;
if(cljs.core.truth_(or__23679__auto__)){
return or__23679__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function() {
var chan = null;
var chan__1 = (function (buf){
return chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});
var chan__2 = (function (buf,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});
var chan__3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(function (){var G__43805 = cljs.core.async.impl.protocols.add_BANG_;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__43805) : xform.call(null,G__43805));
})():cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__43811 = null;
var G__43811__1 = (function (buf__$1){
try{var G__43807 = buf__$1;
return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(G__43807) : add_BANG_.call(null,G__43807));
}catch (e43806){var t = e43806;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__43811__2 = (function (buf__$1,val){
try{var G__43809 = buf__$1;
var G__43810 = val;
return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(G__43809,G__43810) : add_BANG_.call(null,G__43809,G__43810));
}catch (e43808){var t = e43808;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__43811 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__43811__1.call(this,buf__$1);
case 2:
return G__43811__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43811.cljs$core$IFn$_invoke$arity$1 = G__43811__1;
G__43811.cljs$core$IFn$_invoke$arity$2 = G__43811__2;
return G__43811;
})()
;})(add_BANG_))
})()));
});
chan = function(buf,xform,exh){
switch(arguments.length){
case 1:
return chan__1.call(this,buf);
case 2:
return chan__2.call(this,buf,xform);
case 3:
return chan__3.call(this,buf,xform,exh);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
