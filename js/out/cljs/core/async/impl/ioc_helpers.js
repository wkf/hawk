// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){
return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$63);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t46470 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t46470 = (function (f,fn_handler,meta46471){
this.f = f;
this.fn_handler = fn_handler;
this.meta46471 = meta46471;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t46470.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t46470.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t46470.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t46470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46472){
var self__ = this;
var _46472__$1 = this;
return self__.meta46471;
});

cljs.core.async.impl.ioc_helpers.t46470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46472,meta46471__$1){
var self__ = this;
var _46472__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t46470(self__.f,self__.fn_handler,meta46471__$1));
});

cljs.core.async.impl.ioc_helpers.t46470.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t46470.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t46470";

cljs.core.async.impl.ioc_helpers.t46470.cljs$lang$ctorPrWriter = (function (this__18264__auto__,writer__18265__auto__,opt__18266__auto__){
return cljs.core._write(writer__18265__auto__,"cljs.core.async.impl.ioc-helpers/t46470");
});

cljs.core.async.impl.ioc_helpers.__GT_t46470 = (function __GT_t46470(f__$1,fn_handler__$1,meta46471){
return (new cljs.core.async.impl.ioc_helpers.t46470(f__$1,fn_handler__$1,meta46471));
});

}

return (new cljs.core.async.impl.ioc_helpers.t46470(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e46474){if((e46474 instanceof Object)){
var ex = e46474;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e46474;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_46478_46481 = state;
(statearr_46478_46481[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_46478_46481[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_46479_46482 = state;
(statearr_46479_46482[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__46480 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46480) : cljs.core.deref.call(null,G__46480));
})());

(statearr_46479_46482[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$64;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_46486_46489 = state;
(statearr_46486_46489[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_46486_46489[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_46487_46490 = state;
(statearr_46487_46490[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__46488 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46488) : cljs.core.deref.call(null,G__46488));
})());

(statearr_46487_46490[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$64;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18280__auto__,k__18281__auto__){
var self__ = this;
var this__18280__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__18280__auto____$1,k__18281__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18282__auto__,k46492,else__18283__auto__){
var self__ = this;
var this__18282__auto____$1 = this;
var G__46494 = (((k46492 instanceof cljs.core.Keyword))?k46492.fqn:null);
switch (G__46494) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46492,else__18283__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18294__auto__,writer__18295__auto__,opts__18296__auto__){
var self__ = this;
var this__18294__auto____$1 = this;
var pr_pair__18297__auto__ = ((function (this__18294__auto____$1){
return (function (keyval__18298__auto__){
return cljs.core.pr_sequential_writer(writer__18295__auto__,cljs.core.pr_writer,""," ","",opts__18296__auto__,keyval__18298__auto__);
});})(this__18294__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__18295__auto__,pr_pair__18297__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__18296__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$65,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$66,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$68,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$69,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18278__auto__){
var self__ = this;
var this__18278__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18274__auto__){
var self__ = this;
var this__18274__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18284__auto__){
var self__ = this;
var this__18284__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18275__auto__){
var self__ = this;
var this__18275__auto____$1 = this;
var h__18098__auto__ = self__.__hash;
if(!((h__18098__auto__ == null))){
return h__18098__auto__;
} else {
var h__18098__auto____$1 = cljs.core.hash_imap(this__18275__auto____$1);
self__.__hash = h__18098__auto____$1;

return h__18098__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18276__auto__,other__18277__auto__){
var self__ = this;
var this__18276__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17665__auto__ = other__18277__auto__;
if(cljs.core.truth_(and__17665__auto__)){
return ((this__18276__auto____$1.constructor === other__18277__auto__.constructor)) && (cljs.core.equiv_map(this__18276__auto____$1,other__18277__auto__));
} else {
return and__17665__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18289__auto__,k__18290__auto__){
var self__ = this;
var this__18289__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$67,null,cljs.core.constant$keyword$65,null,cljs.core.constant$keyword$66,null,cljs.core.constant$keyword$69,null,cljs.core.constant$keyword$68,null], null), null),k__18290__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__18289__auto____$1),self__.__meta),k__18290__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__18290__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18287__auto__,k__18288__auto__,G__46491){
var self__ = this;
var this__18287__auto____$1 = this;
var pred__46495 = cljs.core.keyword_identical_QMARK_;
var expr__46496 = k__18288__auto__;
if(cljs.core.truth_((function (){var G__46498 = cljs.core.constant$keyword$65;
var G__46499 = expr__46496;
return (pred__46495.cljs$core$IFn$_invoke$arity$2 ? pred__46495.cljs$core$IFn$_invoke$arity$2(G__46498,G__46499) : pred__46495.call(null,G__46498,G__46499));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__46491,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__46500 = cljs.core.constant$keyword$66;
var G__46501 = expr__46496;
return (pred__46495.cljs$core$IFn$_invoke$arity$2 ? pred__46495.cljs$core$IFn$_invoke$arity$2(G__46500,G__46501) : pred__46495.call(null,G__46500,G__46501));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__46491,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__46502 = cljs.core.constant$keyword$67;
var G__46503 = expr__46496;
return (pred__46495.cljs$core$IFn$_invoke$arity$2 ? pred__46495.cljs$core$IFn$_invoke$arity$2(G__46502,G__46503) : pred__46495.call(null,G__46502,G__46503));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__46491,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__46504 = cljs.core.constant$keyword$68;
var G__46505 = expr__46496;
return (pred__46495.cljs$core$IFn$_invoke$arity$2 ? pred__46495.cljs$core$IFn$_invoke$arity$2(G__46504,G__46505) : pred__46495.call(null,G__46504,G__46505));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__46491,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__46506 = cljs.core.constant$keyword$69;
var G__46507 = expr__46496;
return (pred__46495.cljs$core$IFn$_invoke$arity$2 ? pred__46495.cljs$core$IFn$_invoke$arity$2(G__46506,G__46507) : pred__46495.call(null,G__46506,G__46507));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__46491,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__18288__auto__,G__46491),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18292__auto__){
var self__ = this;
var this__18292__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$65,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$66,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$68,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$69,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18279__auto__,G__46491){
var self__ = this;
var this__18279__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__46491,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18285__auto__,entry__18286__auto__){
var self__ = this;
var this__18285__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__18286__auto__)){
return cljs.core._assoc(this__18285__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__18286__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__18286__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__18285__auto____$1,entry__18286__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__18314__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__18314__auto__,writer__18315__auto__){
return cljs.core._write(writer__18315__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__46493){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(G__46493),cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(G__46493),cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(G__46493),cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(G__46493),cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(G__46493),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46493,cljs.core.constant$keyword$65,cljs.core.array_seq([cljs.core.constant$keyword$66,cljs.core.constant$keyword$67,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_46510 = state;
(statearr_46510[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_46510;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__17665__auto__ = exception;
if(cljs.core.truth_(and__17665__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__17665__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__17665__auto__ = exception;
if(cljs.core.truth_(and__17665__auto__)){
var and__17665__auto____$1 = catch_block;
if(cljs.core.truth_(and__17665__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__17665__auto____$1;
}
} else {
return and__17665__auto__;
}
})())){
var statearr_46516 = state;
(statearr_46516[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_46516[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_46516[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_46516[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$65,null,cljs.core.array_seq([cljs.core.constant$keyword$66,null], 0)));

return statearr_46516;
} else {
if(cljs.core.truth_((function (){var and__17665__auto__ = exception;
if(cljs.core.truth_(and__17665__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__17665__auto__;
}
})())){
var statearr_46517_46521 = state;
(statearr_46517_46521[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__46522 = state;
state = G__46522;
continue;
} else {
if(cljs.core.truth_((function (){var and__17665__auto__ = exception;
if(cljs.core.truth_(and__17665__auto__)){
var and__17665__auto____$1 = cljs.core.not(catch_block);
if(and__17665__auto____$1){
return cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__17665__auto____$1;
}
} else {
return and__17665__auto__;
}
})())){
var statearr_46518 = state;
(statearr_46518[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_46518[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$67,null));

return statearr_46518;
} else {
if(cljs.core.truth_((function (){var and__17665__auto__ = cljs.core.not(exception);
if(and__17665__auto__){
return cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__17665__auto__;
}
})())){
var statearr_46519 = state;
(statearr_46519[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_46519[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$67,null));

return statearr_46519;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_46520 = state;
(statearr_46520[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_46520[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_46520;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
