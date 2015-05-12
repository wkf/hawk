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
hawk_www.core.world = (function (){var G__33844 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33844) : cljs.core.atom.call(null,G__33844));
})();
}
/**
* Return a core.async chan to receive the events for which you are listening
*/
hawk_www.core.listen = (function listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10)));
var G__33849_33852 = el;
var G__33850_33853 = type;
var G__33851_33854 = ((function (G__33849_33852,G__33850_33853,out){
return (function (p1__33845_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,p1__33845_SHARP_);
});})(G__33849_33852,G__33850_33853,out))
;
goog.events.listen(G__33849_33852,G__33850_33853,G__33851_33854);

return out;
});
hawk_www.core.scroll_page = (function scroll_page(){
var scroll = (function (){return goog.dom.getDocumentScroll();
})();
var body = ((function (){var G__33856 = "body";
return goog.dom.getElementsByTagNameAndClass(G__33856);
})()["0"]);
return (new goog.fx.dom.Scroll(body,[(scroll["x"]),(scroll["y"])],[(scroll["x"]),(0)],(500))).play();
});
hawk_www.core.update_nav = (function update_nav(){
var top = ((function (){return goog.dom.getDocumentScroll();
})()["y"]);
var nav = ((function (){var G__33861 = "nav";
return goog.dom.getElementsByTagNameAndClass(G__33861);
})()["0"]);
var nav_height = ((function (){var G__33862 = nav;
return goog.style.getSize(G__33862);
})()["height"]);
var header = ((function (){var G__33863 = "header";
return goog.dom.getElementsByTagNameAndClass(G__33863);
})()["0"]);
var header_height = ((function (){var G__33864 = header;
return goog.style.getSize(G__33864);
})()["height"]);
return (((top >= (header_height - nav_height)))?goog.dom.classes.add:goog.dom.classes.remove).call(null,nav,"active");
});
/**
* Start the 'app'. Attempt to be idempotent.
*/
hawk_www.core.start = (function start(){
if(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1((function (){var G__33956 = hawk_www.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33956) : cljs.core.deref.call(null,G__33956));
})()))){
return null;
} else {
var scrolls = hawk_www.core.listen((function (){return goog.dom.getWindow();
})(),"scroll");
var clicks = hawk_www.core.listen(((function (){var G__33957 = "a";
var G__33958 = "scroll";
return goog.dom.getElementsByTagNameAndClass(G__33957,G__33958);
})()["0"]),"click");
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hawk_www.core.world,cljs.core.assoc,cljs.core.constant$keyword$38,clicks);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hawk_www.core.world,cljs.core.assoc,cljs.core.constant$keyword$37,scrolls);

var c__30816__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30816__auto__,scrolls,clicks){
return (function (){
var f__30817__auto__ = (function (){var switch__30736__auto__ = ((function (c__30816__auto__,scrolls,clicks){
return (function (state_34009){
var state_val_34010 = (state_34009[(1)]);
if((state_val_34010 === (7))){
var inst_34000 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
if(cljs.core.truth_(inst_34000)){
var statearr_34011_34047 = state_34009__$1;
(statearr_34011_34047[(1)] = (20));

} else {
var statearr_34012_34048 = state_34009__$1;
(statearr_34012_34048[(1)] = (21));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (20))){
var state_34009__$1 = state_34009;
var statearr_34013_34049 = state_34009__$1;
(statearr_34013_34049[(2)] = null);

(statearr_34013_34049[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (1))){
var state_34009__$1 = state_34009;
var statearr_34014_34050 = state_34009__$1;
(statearr_34014_34050[(2)] = null);

(statearr_34014_34050[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (4))){
var inst_33971 = (state_34009[(7)]);
var inst_33969 = (state_34009[(8)]);
var inst_33969__$1 = (state_34009[(2)]);
var inst_33970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33969__$1,(0),null);
var inst_33971__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33969__$1,(1),null);
var inst_33972 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33971__$1,clicks);
var state_34009__$1 = (function (){var statearr_34015 = state_34009;
(statearr_34015[(7)] = inst_33971__$1);

(statearr_34015[(9)] = inst_33970);

(statearr_34015[(8)] = inst_33969__$1);

return statearr_34015;
})();
if(inst_33972){
var statearr_34016_34051 = state_34009__$1;
(statearr_34016_34051[(1)] = (5));

} else {
var statearr_34017_34052 = state_34009__$1;
(statearr_34017_34052[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (15))){
var state_34009__$1 = state_34009;
var statearr_34018_34053 = state_34009__$1;
(statearr_34018_34053[(2)] = null);

(statearr_34018_34053[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (21))){
var state_34009__$1 = state_34009;
var statearr_34019_34054 = state_34009__$1;
(statearr_34019_34054[(2)] = null);

(statearr_34019_34054[(1)] = (22));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (13))){
var inst_33998 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34020_34055 = state_34009__$1;
(statearr_34020_34055[(2)] = inst_33998);

(statearr_34020_34055[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (22))){
var inst_34005 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34021_34056 = state_34009__$1;
(statearr_34021_34056[(2)] = inst_34005);

(statearr_34021_34056[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (6))){
var inst_33971 = (state_34009[(7)]);
var inst_33982 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33971,scrolls);
var state_34009__$1 = state_34009;
if(inst_33982){
var statearr_34022_34057 = state_34009__$1;
(statearr_34022_34057[(1)] = (11));

} else {
var statearr_34023_34058 = state_34009__$1;
(statearr_34023_34058[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (17))){
var inst_33970 = (state_34009[(9)]);
var state_34009__$1 = state_34009;
var statearr_34024_34059 = state_34009__$1;
(statearr_34024_34059[(2)] = inst_33970);

(statearr_34024_34059[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (3))){
var inst_34007 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34009__$1,inst_34007);
} else {
if((state_val_34010 === (12))){
var inst_33971 = (state_34009[(7)]);
var inst_33992 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33971,cljs.core.constant$keyword$7);
var state_34009__$1 = state_34009;
if(inst_33992){
var statearr_34025_34060 = state_34009__$1;
(statearr_34025_34060[(1)] = (17));

} else {
var statearr_34026_34061 = state_34009__$1;
(statearr_34026_34061[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (2))){
var inst_33965 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33966 = [clicks,scrolls];
var inst_33967 = (new cljs.core.PersistentVector(null,2,(5),inst_33965,inst_33966,null));
var state_34009__$1 = state_34009;
return cljs.core.async.ioc_alts_BANG_(state_34009__$1,(4),inst_33967);
} else {
if((state_val_34010 === (19))){
var inst_33996 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34027_34062 = state_34009__$1;
(statearr_34027_34062[(2)] = inst_33996);

(statearr_34027_34062[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (11))){
var inst_33969 = (state_34009[(8)]);
var inst_33985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33969,(0),null);
var state_34009__$1 = state_34009;
if(cljs.core.truth_(inst_33985)){
var statearr_34028_34063 = state_34009__$1;
(statearr_34028_34063[(1)] = (14));

} else {
var statearr_34029_34064 = state_34009__$1;
(statearr_34029_34064[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (9))){
var state_34009__$1 = state_34009;
var statearr_34030_34065 = state_34009__$1;
(statearr_34030_34065[(2)] = null);

(statearr_34030_34065[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (5))){
var inst_33969 = (state_34009[(8)]);
var inst_33975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33969,(0),null);
var state_34009__$1 = state_34009;
if(cljs.core.truth_(inst_33975)){
var statearr_34031_34066 = state_34009__$1;
(statearr_34031_34066[(1)] = (8));

} else {
var statearr_34032_34067 = state_34009__$1;
(statearr_34032_34067[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (14))){
var inst_33987 = hawk_www.core.update_nav();
var state_34009__$1 = (function (){var statearr_34033 = state_34009;
(statearr_34033[(10)] = inst_33987);

return statearr_34033;
})();
var statearr_34034_34068 = state_34009__$1;
(statearr_34034_34068[(2)] = true);

(statearr_34034_34068[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (16))){
var inst_33990 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34035_34069 = state_34009__$1;
(statearr_34035_34069[(2)] = inst_33990);

(statearr_34035_34069[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (10))){
var inst_33980 = (state_34009[(2)]);
var state_34009__$1 = state_34009;
var statearr_34036_34070 = state_34009__$1;
(statearr_34036_34070[(2)] = inst_33980);

(statearr_34036_34070[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (18))){
var state_34009__$1 = state_34009;
var statearr_34037_34071 = state_34009__$1;
(statearr_34037_34071[(2)] = null);

(statearr_34037_34071[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_34010 === (8))){
var inst_33977 = hawk_www.core.scroll_page();
var state_34009__$1 = (function (){var statearr_34038 = state_34009;
(statearr_34038[(11)] = inst_33977);

return statearr_34038;
})();
var statearr_34039_34072 = state_34009__$1;
(statearr_34039_34072[(2)] = true);

(statearr_34039_34072[(1)] = (10));


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
});})(c__30816__auto__,scrolls,clicks))
;
return ((function (switch__30736__auto__,c__30816__auto__,scrolls,clicks){
return (function() {
var state_machine__30737__auto__ = null;
var state_machine__30737__auto____0 = (function (){
var statearr_34043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34043[(0)] = state_machine__30737__auto__);

(statearr_34043[(1)] = (1));

return statearr_34043;
});
var state_machine__30737__auto____1 = (function (state_34009){
while(true){
var ret_value__30738__auto__ = (function (){try{while(true){
var result__30739__auto__ = switch__30736__auto__(state_34009);
if(cljs.core.keyword_identical_QMARK_(result__30739__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__30739__auto__;
}
break;
}
}catch (e34044){if((e34044 instanceof Object)){
var ex__30740__auto__ = e34044;
var statearr_34045_34073 = state_34009;
(statearr_34045_34073[(5)] = ex__30740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34009);

return cljs.core.constant$keyword$21;
} else {
throw e34044;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30738__auto__,cljs.core.constant$keyword$21)){
var G__34074 = state_34009;
state_34009 = G__34074;
continue;
} else {
return ret_value__30738__auto__;
}
break;
}
});
state_machine__30737__auto__ = function(state_34009){
switch(arguments.length){
case 0:
return state_machine__30737__auto____0.call(this);
case 1:
return state_machine__30737__auto____1.call(this,state_34009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30737__auto____0;
state_machine__30737__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30737__auto____1;
return state_machine__30737__auto__;
})()
;})(switch__30736__auto__,c__30816__auto__,scrolls,clicks))
})();
var state__30818__auto__ = (function (){var statearr_34046 = (function (){return (f__30817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30817__auto__.cljs$core$IFn$_invoke$arity$0() : f__30817__auto__.call(null));
})();
(statearr_34046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30816__auto__);

return statearr_34046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30818__auto__);
});})(c__30816__auto__,scrolls,clicks))
);

return c__30816__auto__;
}
});
/**
* Stop the 'app'. Attempt to be idempotent. Useful for interactive local development.
*/
hawk_www.core.stop = (function stop(){
var temp__4126__auto___34079 = cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1((function (){var G__34077 = hawk_www.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34077) : cljs.core.deref.call(null,G__34077));
})());
if(cljs.core.truth_(temp__4126__auto___34079)){
var clicks_34080 = temp__4126__auto___34079;
cljs.core.async.close_BANG_(clicks_34080);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hawk_www.core.world,cljs.core.dissoc,cljs.core.constant$keyword$38);
} else {
}

var temp__4126__auto__ = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1((function (){var G__34078 = hawk_www.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34078) : cljs.core.deref.call(null,G__34078));
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
