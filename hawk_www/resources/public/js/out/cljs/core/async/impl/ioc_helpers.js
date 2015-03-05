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
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$20);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t43632 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t43632 = (function (f,fn_handler,meta43633){
this.f = f;
this.fn_handler = fn_handler;
this.meta43633 = meta43633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t43632.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t43632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t43632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t43632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43634){
var self__ = this;
var _43634__$1 = this;
return self__.meta43633;
});

cljs.core.async.impl.ioc_helpers.t43632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43634,meta43633__$1){
var self__ = this;
var _43634__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t43632(self__.f,self__.fn_handler,meta43633__$1));
});

cljs.core.async.impl.ioc_helpers.t43632.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t43632.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t43632";

cljs.core.async.impl.ioc_helpers.t43632.cljs$lang$ctorPrWriter = (function (this__24266__auto__,writer__24267__auto__,opt__24268__auto__){
return cljs.core._write(writer__24267__auto__,"cljs.core.async.impl.ioc-helpers/t43632");
});

cljs.core.async.impl.ioc_helpers.__GT_t43632 = (function __GT_t43632(f__$1,fn_handler__$1,meta43633){
return (new cljs.core.async.impl.ioc_helpers.t43632(f__$1,fn_handler__$1,meta43633));
});

}

return (new cljs.core.async.impl.ioc_helpers.t43632(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e43636){if((e43636 instanceof Object)){
var ex = e43636;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e43636;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_43640_43643 = state;
(statearr_43640_43643[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_43640_43643[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_43641_43644 = state;
(statearr_43641_43644[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__43642 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43642) : cljs.core.deref.call(null,G__43642));
})());

(statearr_43641_43644[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$21;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_43648_43651 = state;
(statearr_43648_43651[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_43648_43651[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_43649_43652 = state;
(statearr_43649_43652[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__43650 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43650) : cljs.core.deref.call(null,G__43650));
})());

(statearr_43649_43652[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$21;
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24282__auto__,k__24283__auto__){
var self__ = this;
var this__24282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__24282__auto____$1,k__24283__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24284__auto__,k43654,else__24285__auto__){
var self__ = this;
var this__24284__auto____$1 = this;
var G__43656 = (((k43654 instanceof cljs.core.Keyword))?k43654.fqn:null);
switch (G__43656) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43654,else__24285__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24296__auto__,writer__24297__auto__,opts__24298__auto__){
var self__ = this;
var this__24296__auto____$1 = this;
var pr_pair__24299__auto__ = ((function (this__24296__auto____$1){
return (function (keyval__24300__auto__){
return cljs.core.pr_sequential_writer(writer__24297__auto__,cljs.core.pr_writer,""," ","",opts__24298__auto__,keyval__24300__auto__);
});})(this__24296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__24297__auto__,pr_pair__24299__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__24298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$25,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$26,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24280__auto__){
var self__ = this;
var this__24280__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24276__auto__){
var self__ = this;
var this__24276__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24286__auto__){
var self__ = this;
var this__24286__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24277__auto__){
var self__ = this;
var this__24277__auto____$1 = this;
var h__24100__auto__ = self__.__hash;
if(!((h__24100__auto__ == null))){
return h__24100__auto__;
} else {
var h__24100__auto____$1 = cljs.core.hash_imap(this__24277__auto____$1);
self__.__hash = h__24100__auto____$1;

return h__24100__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24278__auto__,other__24279__auto__){
var self__ = this;
var this__24278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23667__auto__ = other__24279__auto__;
if(cljs.core.truth_(and__23667__auto__)){
return ((this__24278__auto____$1.constructor === other__24279__auto__.constructor)) && (cljs.core.equiv_map(this__24278__auto____$1,other__24279__auto__));
} else {
return and__23667__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24291__auto__,k__24292__auto__){
var self__ = this;
var this__24291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$22,null,cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$26,null,cljs.core.constant$keyword$25,null], null), null),k__24292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__24291__auto____$1),self__.__meta),k__24292__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__24292__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24289__auto__,k__24290__auto__,G__43653){
var self__ = this;
var this__24289__auto____$1 = this;
var pred__43657 = cljs.core.keyword_identical_QMARK_;
var expr__43658 = k__24290__auto__;
if(cljs.core.truth_((function (){var G__43660 = cljs.core.constant$keyword$22;
var G__43661 = expr__43658;
return (pred__43657.cljs$core$IFn$_invoke$arity$2 ? pred__43657.cljs$core$IFn$_invoke$arity$2(G__43660,G__43661) : pred__43657.call(null,G__43660,G__43661));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__43653,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43662 = cljs.core.constant$keyword$23;
var G__43663 = expr__43658;
return (pred__43657.cljs$core$IFn$_invoke$arity$2 ? pred__43657.cljs$core$IFn$_invoke$arity$2(G__43662,G__43663) : pred__43657.call(null,G__43662,G__43663));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__43653,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43664 = cljs.core.constant$keyword$24;
var G__43665 = expr__43658;
return (pred__43657.cljs$core$IFn$_invoke$arity$2 ? pred__43657.cljs$core$IFn$_invoke$arity$2(G__43664,G__43665) : pred__43657.call(null,G__43664,G__43665));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__43653,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43666 = cljs.core.constant$keyword$25;
var G__43667 = expr__43658;
return (pred__43657.cljs$core$IFn$_invoke$arity$2 ? pred__43657.cljs$core$IFn$_invoke$arity$2(G__43666,G__43667) : pred__43657.call(null,G__43666,G__43667));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__43653,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43668 = cljs.core.constant$keyword$26;
var G__43669 = expr__43658;
return (pred__43657.cljs$core$IFn$_invoke$arity$2 ? pred__43657.cljs$core$IFn$_invoke$arity$2(G__43668,G__43669) : pred__43657.call(null,G__43668,G__43669));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__43653,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__24290__auto__,G__43653),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24294__auto__){
var self__ = this;
var this__24294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$25,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$26,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24281__auto__,G__43653){
var self__ = this;
var this__24281__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__43653,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24287__auto__,entry__24288__auto__){
var self__ = this;
var this__24287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__24288__auto__)){
return cljs.core._assoc(this__24287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__24288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__24288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__24287__auto____$1,entry__24288__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__24316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__24316__auto__,writer__24317__auto__){
return cljs.core._write(writer__24317__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__43655){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(G__43655),cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(G__43655),cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(G__43655),cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(G__43655),cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(G__43655),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43655,cljs.core.constant$keyword$22,cljs.core.array_seq([cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_43672 = state;
(statearr_43672[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_43672;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__23667__auto__ = exception;
if(cljs.core.truth_(and__23667__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__23667__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__23667__auto__ = exception;
if(cljs.core.truth_(and__23667__auto__)){
var and__23667__auto____$1 = catch_block;
if(cljs.core.truth_(and__23667__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__23667__auto____$1;
}
} else {
return and__23667__auto__;
}
})())){
var statearr_43678 = state;
(statearr_43678[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_43678[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_43678[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_43678[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$22,null,cljs.core.array_seq([cljs.core.constant$keyword$23,null], 0)));

return statearr_43678;
} else {
if(cljs.core.truth_((function (){var and__23667__auto__ = exception;
if(cljs.core.truth_(and__23667__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__23667__auto__;
}
})())){
var statearr_43679_43683 = state;
(statearr_43679_43683[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__43684 = state;
state = G__43684;
continue;
} else {
if(cljs.core.truth_((function (){var and__23667__auto__ = exception;
if(cljs.core.truth_(and__23667__auto__)){
var and__23667__auto____$1 = cljs.core.not(catch_block);
if(and__23667__auto____$1){
return cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__23667__auto____$1;
}
} else {
return and__23667__auto__;
}
})())){
var statearr_43680 = state;
(statearr_43680[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_43680[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$24,null));

return statearr_43680;
} else {
if(cljs.core.truth_((function (){var and__23667__auto__ = cljs.core.not(exception);
if(and__23667__auto__){
return cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__23667__auto__;
}
})())){
var statearr_43681 = state;
(statearr_43681[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_43681[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$24,null));

return statearr_43681;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_43682 = state;
(statearr_43682[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_43682[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_43682;
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
