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
if(typeof cljs.core.async.impl.ioc_helpers.t36418 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t36418 = (function (f,fn_handler,meta36419){
this.f = f;
this.fn_handler = fn_handler;
this.meta36419 = meta36419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t36418.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t36418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t36418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t36418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36420){
var self__ = this;
var _36420__$1 = this;
return self__.meta36419;
});

cljs.core.async.impl.ioc_helpers.t36418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36420,meta36419__$1){
var self__ = this;
var _36420__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t36418(self__.f,self__.fn_handler,meta36419__$1));
});

cljs.core.async.impl.ioc_helpers.t36418.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t36418.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t36418";

cljs.core.async.impl.ioc_helpers.t36418.cljs$lang$ctorPrWriter = (function (this__17052__auto__,writer__17053__auto__,opt__17054__auto__){
return cljs.core._write(writer__17053__auto__,"cljs.core.async.impl.ioc-helpers/t36418");
});

cljs.core.async.impl.ioc_helpers.__GT_t36418 = (function __GT_t36418(f__$1,fn_handler__$1,meta36419){
return (new cljs.core.async.impl.ioc_helpers.t36418(f__$1,fn_handler__$1,meta36419));
});

}

return (new cljs.core.async.impl.ioc_helpers.t36418(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e36422){if((e36422 instanceof Object)){
var ex = e36422;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e36422;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_36426_36429 = state;
(statearr_36426_36429[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_36426_36429[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_36427_36430 = state;
(statearr_36427_36430[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__36428 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36428) : cljs.core.deref.call(null,G__36428));
})());

(statearr_36427_36430[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$21;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_36434_36437 = state;
(statearr_36434_36437[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_36434_36437[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_36435_36438 = state;
(statearr_36435_36438[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__36436 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36436) : cljs.core.deref.call(null,G__36436));
})());

(statearr_36435_36438[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17068__auto__,k__17069__auto__){
var self__ = this;
var this__17068__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__17068__auto____$1,k__17069__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17070__auto__,k36440,else__17071__auto__){
var self__ = this;
var this__17070__auto____$1 = this;
var G__36442 = (((k36440 instanceof cljs.core.Keyword))?k36440.fqn:null);
switch (G__36442) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36440,else__17071__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17082__auto__,writer__17083__auto__,opts__17084__auto__){
var self__ = this;
var this__17082__auto____$1 = this;
var pr_pair__17085__auto__ = ((function (this__17082__auto____$1){
return (function (keyval__17086__auto__){
return cljs.core.pr_sequential_writer(writer__17083__auto__,cljs.core.pr_writer,""," ","",opts__17084__auto__,keyval__17086__auto__);
});})(this__17082__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__17083__auto__,pr_pair__17085__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__17084__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$25,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$26,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17066__auto__){
var self__ = this;
var this__17066__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17062__auto__){
var self__ = this;
var this__17062__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17072__auto__){
var self__ = this;
var this__17072__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17063__auto__){
var self__ = this;
var this__17063__auto____$1 = this;
var h__16886__auto__ = self__.__hash;
if(!((h__16886__auto__ == null))){
return h__16886__auto__;
} else {
var h__16886__auto____$1 = cljs.core.hash_imap(this__17063__auto____$1);
self__.__hash = h__16886__auto____$1;

return h__16886__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17064__auto__,other__17065__auto__){
var self__ = this;
var this__17064__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16453__auto__ = other__17065__auto__;
if(cljs.core.truth_(and__16453__auto__)){
return ((this__17064__auto____$1.constructor === other__17065__auto__.constructor)) && (cljs.core.equiv_map(this__17064__auto____$1,other__17065__auto__));
} else {
return and__16453__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17077__auto__,k__17078__auto__){
var self__ = this;
var this__17077__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$22,null,cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$26,null,cljs.core.constant$keyword$25,null], null), null),k__17078__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__17077__auto____$1),self__.__meta),k__17078__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__17078__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17075__auto__,k__17076__auto__,G__36439){
var self__ = this;
var this__17075__auto____$1 = this;
var pred__36443 = cljs.core.keyword_identical_QMARK_;
var expr__36444 = k__17076__auto__;
if(cljs.core.truth_((function (){var G__36446 = cljs.core.constant$keyword$22;
var G__36447 = expr__36444;
return (pred__36443.cljs$core$IFn$_invoke$arity$2 ? pred__36443.cljs$core$IFn$_invoke$arity$2(G__36446,G__36447) : pred__36443.call(null,G__36446,G__36447));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__36439,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36448 = cljs.core.constant$keyword$23;
var G__36449 = expr__36444;
return (pred__36443.cljs$core$IFn$_invoke$arity$2 ? pred__36443.cljs$core$IFn$_invoke$arity$2(G__36448,G__36449) : pred__36443.call(null,G__36448,G__36449));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__36439,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36450 = cljs.core.constant$keyword$24;
var G__36451 = expr__36444;
return (pred__36443.cljs$core$IFn$_invoke$arity$2 ? pred__36443.cljs$core$IFn$_invoke$arity$2(G__36450,G__36451) : pred__36443.call(null,G__36450,G__36451));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__36439,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36452 = cljs.core.constant$keyword$25;
var G__36453 = expr__36444;
return (pred__36443.cljs$core$IFn$_invoke$arity$2 ? pred__36443.cljs$core$IFn$_invoke$arity$2(G__36452,G__36453) : pred__36443.call(null,G__36452,G__36453));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__36439,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36454 = cljs.core.constant$keyword$26;
var G__36455 = expr__36444;
return (pred__36443.cljs$core$IFn$_invoke$arity$2 ? pred__36443.cljs$core$IFn$_invoke$arity$2(G__36454,G__36455) : pred__36443.call(null,G__36454,G__36455));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__36439,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__17076__auto__,G__36439),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17080__auto__){
var self__ = this;
var this__17080__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$25,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$26,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17067__auto__,G__36439){
var self__ = this;
var this__17067__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__36439,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17073__auto__,entry__17074__auto__){
var self__ = this;
var this__17073__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__17074__auto__)){
return cljs.core._assoc(this__17073__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17074__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17074__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__17073__auto____$1,entry__17074__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__17102__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__17102__auto__,writer__17103__auto__){
return cljs.core._write(writer__17103__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__36441){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(G__36441),cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(G__36441),cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(G__36441),cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(G__36441),cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(G__36441),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36441,cljs.core.constant$keyword$22,cljs.core.array_seq([cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_36458 = state;
(statearr_36458[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_36458;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__16453__auto__ = exception;
if(cljs.core.truth_(and__16453__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__16453__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__16453__auto__ = exception;
if(cljs.core.truth_(and__16453__auto__)){
var and__16453__auto____$1 = catch_block;
if(cljs.core.truth_(and__16453__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__16453__auto____$1;
}
} else {
return and__16453__auto__;
}
})())){
var statearr_36464 = state;
(statearr_36464[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_36464[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_36464[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_36464[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$22,null,cljs.core.array_seq([cljs.core.constant$keyword$23,null], 0)));

return statearr_36464;
} else {
if(cljs.core.truth_((function (){var and__16453__auto__ = exception;
if(cljs.core.truth_(and__16453__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__16453__auto__;
}
})())){
var statearr_36465_36469 = state;
(statearr_36465_36469[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__36470 = state;
state = G__36470;
continue;
} else {
if(cljs.core.truth_((function (){var and__16453__auto__ = exception;
if(cljs.core.truth_(and__16453__auto__)){
var and__16453__auto____$1 = cljs.core.not(catch_block);
if(and__16453__auto____$1){
return cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__16453__auto____$1;
}
} else {
return and__16453__auto__;
}
})())){
var statearr_36466 = state;
(statearr_36466[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_36466[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$24,null));

return statearr_36466;
} else {
if(cljs.core.truth_((function (){var and__16453__auto__ = cljs.core.not(exception);
if(and__16453__auto__){
return cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__16453__auto__;
}
})())){
var statearr_36467 = state;
(statearr_36467[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_36467[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$24,null));

return statearr_36467;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_36468 = state;
(statearr_36468[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_36468[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_36468;
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
