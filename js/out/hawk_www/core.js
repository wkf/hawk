// Compiled by ClojureScript 0.0-2850 {}
goog.provide('hawk_www.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.fx.dom.Scroll');
goog.require('goog.style');
if(typeof hawk_www.core.world !== 'undefined'){
} else {
hawk_www.core.world = (function (){var G__42103 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42103) : cljs.core.atom.call(null,G__42103));
})();
}
/**
* Return a core.async chan to receive the events for which you are listening
*/
hawk_www.core.listen = (function listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10)));
var G__42108_42111 = el;
var G__42109_42112 = type;
var G__42110_42113 = ((function (G__42108_42111,G__42109_42112,out){
return (function (p1__42104_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,p1__42104_SHARP_);
});})(G__42108_42111,G__42109_42112,out))
;
goog.events.listen(G__42108_42111,G__42109_42112,G__42110_42113);

return out;
});
hawk_www.core.scroll_page = (function scroll_page(){
var scroll = (function (){return goog.dom.getDocumentScroll();
})();
var body = ((function (){var G__42115 = "body";
return goog.dom.getElementsByTagNameAndClass(G__42115);
})()["0"]);
return (new goog.fx.dom.Scroll(body,[(scroll["x"]),(scroll["y"])],[(scroll["x"]),(0)],(500))).play();
});
hawk_www.core.update_nav = (function update_nav(){
var top = ((function (){return goog.dom.getDocumentScroll();
})()["y"]);
var nav = ((function (){var G__42120 = "nav";
return goog.dom.getElementsByTagNameAndClass(G__42120);
})()["0"]);
var nav_height = ((function (){var G__42121 = nav;
return goog.style.getSize(G__42121);
})()["height"]);
var header = ((function (){var G__42122 = "header";
return goog.dom.getElementsByTagNameAndClass(G__42122);
})()["0"]);
var header_height = ((function (){var G__42123 = header;
return goog.style.getSize(G__42123);
})()["height"]);
return (((top >= (header_height - nav_height)))?goog.dom.classes.add:goog.dom.classes.remove).call(null,nav,"active");
});
/**
* Start the 'app'. Attempt to be idempotent.
*/
hawk_www.core.start = (function start(){
if(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1((function (){var G__42215 = hawk_www.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42215) : cljs.core.deref.call(null,G__42215));
})()))){
return null;
} else {
var scrolls = hawk_www.core.listen((function (){return goog.dom.getWindow();
})(),"scroll");
var clicks = hawk_www.core.listen(((function (){var G__42216 = "a";
var G__42217 = "scroll";
return goog.dom.getElementsByTagNameAndClass(G__42216,G__42217);
})()["0"]),"click");
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hawk_www.core.world,cljs.core.assoc,cljs.core.constant$keyword$38,clicks);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hawk_www.core.world,cljs.core.assoc,cljs.core.constant$keyword$37,scrolls);

var c__39075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39075__auto__,scrolls,clicks){
return (function (){
var f__39076__auto__ = (function (){var switch__38995__auto__ = ((function (c__39075__auto__,scrolls,clicks){
return (function (state_42268){
var state_val_42269 = (state_42268[(1)]);
if((state_val_42269 === (7))){
var inst_42259 = (state_42268[(2)]);
var state_42268__$1 = state_42268;
if(cljs.core.truth_(inst_42259)){
var statearr_42270_42306 = state_42268__$1;
(statearr_42270_42306[(1)] = (20));

} else {
var statearr_42271_42307 = state_42268__$1;
(statearr_42271_42307[(1)] = (21));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (20))){
var state_42268__$1 = state_42268;
var statearr_42272_42308 = state_42268__$1;
(statearr_42272_42308[(2)] = null);

(statearr_42272_42308[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (1))){
var state_42268__$1 = state_42268;
var statearr_42273_42309 = state_42268__$1;
(statearr_42273_42309[(2)] = null);

(statearr_42273_42309[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (4))){
var inst_42228 = (state_42268[(7)]);
var inst_42230 = (state_42268[(8)]);
var inst_42228__$1 = (state_42268[(2)]);
var inst_42229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42228__$1,(0),null);
var inst_42230__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42228__$1,(1),null);
var inst_42231 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42230__$1,clicks);
var state_42268__$1 = (function (){var statearr_42274 = state_42268;
(statearr_42274[(7)] = inst_42228__$1);

(statearr_42274[(9)] = inst_42229);

(statearr_42274[(8)] = inst_42230__$1);

return statearr_42274;
})();
if(inst_42231){
var statearr_42275_42310 = state_42268__$1;
(statearr_42275_42310[(1)] = (5));

} else {
var statearr_42276_42311 = state_42268__$1;
(statearr_42276_42311[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (15))){
var state_42268__$1 = state_42268;
var statearr_42277_42312 = state_42268__$1;
(statearr_42277_42312[(2)] = null);

(statearr_42277_42312[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (21))){
var state_42268__$1 = state_42268;
var statearr_42278_42313 = state_42268__$1;
(statearr_42278_42313[(2)] = null);

(statearr_42278_42313[(1)] = (22));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (13))){
var inst_42257 = (state_42268[(2)]);
var state_42268__$1 = state_42268;
var statearr_42279_42314 = state_42268__$1;
(statearr_42279_42314[(2)] = inst_42257);

(statearr_42279_42314[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (22))){
var inst_42264 = (state_42268[(2)]);
var state_42268__$1 = state_42268;
var statearr_42280_42315 = state_42268__$1;
(statearr_42280_42315[(2)] = inst_42264);

(statearr_42280_42315[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (6))){
var inst_42230 = (state_42268[(8)]);
var inst_42241 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42230,scrolls);
var state_42268__$1 = state_42268;
if(inst_42241){
var statearr_42281_42316 = state_42268__$1;
(statearr_42281_42316[(1)] = (11));

} else {
var statearr_42282_42317 = state_42268__$1;
(statearr_42282_42317[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (17))){
var inst_42229 = (state_42268[(9)]);
var state_42268__$1 = state_42268;
var statearr_42283_42318 = state_42268__$1;
(statearr_42283_42318[(2)] = inst_42229);

(statearr_42283_42318[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (3))){
var inst_42266 = (state_42268[(2)]);
var state_42268__$1 = state_42268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42268__$1,inst_42266);
} else {
if((state_val_42269 === (12))){
var inst_42230 = (state_42268[(8)]);
var inst_42251 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42230,cljs.core.constant$keyword$7);
var state_42268__$1 = state_42268;
if(inst_42251){
var statearr_42284_42319 = state_42268__$1;
(statearr_42284_42319[(1)] = (17));

} else {
var statearr_42285_42320 = state_42268__$1;
(statearr_42285_42320[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (2))){
var inst_42224 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42225 = [clicks,scrolls];
var inst_42226 = (new cljs.core.PersistentVector(null,2,(5),inst_42224,inst_42225,null));
var state_42268__$1 = state_42268;
return cljs.core.async.ioc_alts_BANG_(state_42268__$1,(4),inst_42226);
} else {
if((state_val_42269 === (19))){
var inst_42255 = (state_42268[(2)]);
var state_42268__$1 = state_42268;
var statearr_42286_42321 = state_42268__$1;
(statearr_42286_42321[(2)] = inst_42255);

(statearr_42286_42321[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (11))){
var inst_42228 = (state_42268[(7)]);
var inst_42244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42228,(0),null);
var state_42268__$1 = state_42268;
if(cljs.core.truth_(inst_42244)){
var statearr_42287_42322 = state_42268__$1;
(statearr_42287_42322[(1)] = (14));

} else {
var statearr_42288_42323 = state_42268__$1;
(statearr_42288_42323[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (9))){
var state_42268__$1 = state_42268;
var statearr_42289_42324 = state_42268__$1;
(statearr_42289_42324[(2)] = null);

(statearr_42289_42324[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (5))){
var inst_42228 = (state_42268[(7)]);
var inst_42234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42228,(0),null);
var state_42268__$1 = state_42268;
if(cljs.core.truth_(inst_42234)){
var statearr_42290_42325 = state_42268__$1;
(statearr_42290_42325[(1)] = (8));

} else {
var statearr_42291_42326 = state_42268__$1;
(statearr_42291_42326[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (14))){
var inst_42246 = hawk_www.core.update_nav();
var state_42268__$1 = (function (){var statearr_42292 = state_42268;
(statearr_42292[(10)] = inst_42246);

return statearr_42292;
})();
var statearr_42293_42327 = state_42268__$1;
(statearr_42293_42327[(2)] = true);

(statearr_42293_42327[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (16))){
var inst_42249 = (state_42268[(2)]);
var state_42268__$1 = state_42268;
var statearr_42294_42328 = state_42268__$1;
(statearr_42294_42328[(2)] = inst_42249);

(statearr_42294_42328[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (10))){
var inst_42239 = (state_42268[(2)]);
var state_42268__$1 = state_42268;
var statearr_42295_42329 = state_42268__$1;
(statearr_42295_42329[(2)] = inst_42239);

(statearr_42295_42329[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (18))){
var state_42268__$1 = state_42268;
var statearr_42296_42330 = state_42268__$1;
(statearr_42296_42330[(2)] = null);

(statearr_42296_42330[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_42269 === (8))){
var inst_42236 = hawk_www.core.scroll_page();
var state_42268__$1 = (function (){var statearr_42297 = state_42268;
(statearr_42297[(11)] = inst_42236);

return statearr_42297;
})();
var statearr_42298_42331 = state_42268__$1;
(statearr_42298_42331[(2)] = true);

(statearr_42298_42331[(1)] = (10));


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
});})(c__39075__auto__,scrolls,clicks))
;
return ((function (switch__38995__auto__,c__39075__auto__,scrolls,clicks){
return (function() {
var state_machine__38996__auto__ = null;
var state_machine__38996__auto____0 = (function (){
var statearr_42302 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42302[(0)] = state_machine__38996__auto__);

(statearr_42302[(1)] = (1));

return statearr_42302;
});
var state_machine__38996__auto____1 = (function (state_42268){
while(true){
var ret_value__38997__auto__ = (function (){try{while(true){
var result__38998__auto__ = switch__38995__auto__(state_42268);
if(cljs.core.keyword_identical_QMARK_(result__38998__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__38998__auto__;
}
break;
}
}catch (e42303){if((e42303 instanceof Object)){
var ex__38999__auto__ = e42303;
var statearr_42304_42332 = state_42268;
(statearr_42304_42332[(5)] = ex__38999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42268);

return cljs.core.constant$keyword$21;
} else {
throw e42303;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38997__auto__,cljs.core.constant$keyword$21)){
var G__42333 = state_42268;
state_42268 = G__42333;
continue;
} else {
return ret_value__38997__auto__;
}
break;
}
});
state_machine__38996__auto__ = function(state_42268){
switch(arguments.length){
case 0:
return state_machine__38996__auto____0.call(this);
case 1:
return state_machine__38996__auto____1.call(this,state_42268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__38996__auto____0;
state_machine__38996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__38996__auto____1;
return state_machine__38996__auto__;
})()
;})(switch__38995__auto__,c__39075__auto__,scrolls,clicks))
})();
var state__39077__auto__ = (function (){var statearr_42305 = (function (){return (f__39076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39076__auto__.cljs$core$IFn$_invoke$arity$0() : f__39076__auto__.call(null));
})();
(statearr_42305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39075__auto__);

return statearr_42305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39077__auto__);
});})(c__39075__auto__,scrolls,clicks))
);

return c__39075__auto__;
}
});
/**
* Stop the 'app'. Attempt to be idempotent. Useful for interactive local development.
*/
hawk_www.core.stop = (function stop(){
var temp__4126__auto___42338 = cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1((function (){var G__42336 = hawk_www.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42336) : cljs.core.deref.call(null,G__42336));
})());
if(cljs.core.truth_(temp__4126__auto___42338)){
var clicks_42339 = temp__4126__auto___42338;
cljs.core.async.close_BANG_(clicks_42339);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hawk_www.core.world,cljs.core.dissoc,cljs.core.constant$keyword$38);
} else {
}

var temp__4126__auto__ = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1((function (){var G__42337 = hawk_www.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42337) : cljs.core.deref.call(null,G__42337));
})());
if(cljs.core.truth_(temp__4126__auto__)){
var scrolls = temp__4126__auto__;
cljs.core.async.close_BANG_(scrolls);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hawk_www.core.world,cljs.core.dissoc,cljs.core.constant$keyword$37);
} else {
return null;
}
});
hawk_www.core.start();
