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
hawk_www.core.world = (function (){var G__26631 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26631) : cljs.core.atom.call(null,G__26631));
})();
}
/**
* Return a core.async chan to receive the events for which you are listening
*/
hawk_www.core.listen = (function listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10)));
var G__26636_26639 = el;
var G__26637_26640 = type;
var G__26638_26641 = ((function (G__26636_26639,G__26637_26640,out){
return (function (p1__26632_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,p1__26632_SHARP_);
});})(G__26636_26639,G__26637_26640,out))
;
goog.events.listen(G__26636_26639,G__26637_26640,G__26638_26641);

return out;
});
hawk_www.core.scroll_page = (function scroll_page(){
var scroll = (function (){return goog.dom.getDocumentScroll();
})();
var body = ((function (){var G__26643 = "body";
return goog.dom.getElementsByTagNameAndClass(G__26643);
})()["0"]);
return (new goog.fx.dom.Scroll(body,[(scroll["x"]),(scroll["y"])],[(scroll["x"]),(0)],(500))).play();
});
hawk_www.core.update_nav = (function update_nav(){
var top = ((function (){return goog.dom.getDocumentScroll();
})()["y"]);
var nav = ((function (){var G__26648 = "nav";
return goog.dom.getElementsByTagNameAndClass(G__26648);
})()["0"]);
var nav_height = ((function (){var G__26649 = nav;
return goog.style.getSize(G__26649);
})()["height"]);
var header = ((function (){var G__26650 = "header";
return goog.dom.getElementsByTagNameAndClass(G__26650);
})()["0"]);
var header_height = ((function (){var G__26651 = header;
return goog.style.getSize(G__26651);
})()["height"]);
return (((top >= (header_height - nav_height)))?goog.dom.classes.add:goog.dom.classes.remove).call(null,nav,"active");
});
/**
* Start the 'app'. Attempt to be idempotent.
*/
hawk_www.core.start = (function start(){
if(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1((function (){var G__26743 = hawk_www.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26743) : cljs.core.deref.call(null,G__26743));
})()))){
return null;
} else {
var scrolls = hawk_www.core.listen((function (){return goog.dom.getWindow();
})(),"scroll");
var clicks = hawk_www.core.listen(((function (){var G__26744 = "a";
var G__26745 = "scroll";
return goog.dom.getElementsByTagNameAndClass(G__26744,G__26745);
})()["0"]),"click");
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hawk_www.core.world,cljs.core.assoc,cljs.core.constant$keyword$38,clicks);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hawk_www.core.world,cljs.core.assoc,cljs.core.constant$keyword$37,scrolls);

var c__23603__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23603__auto__,scrolls,clicks){
return (function (){
var f__23604__auto__ = (function (){var switch__23523__auto__ = ((function (c__23603__auto__,scrolls,clicks){
return (function (state_26796){
var state_val_26797 = (state_26796[(1)]);
if((state_val_26797 === (7))){
var inst_26787 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
if(cljs.core.truth_(inst_26787)){
var statearr_26798_26834 = state_26796__$1;
(statearr_26798_26834[(1)] = (20));

} else {
var statearr_26799_26835 = state_26796__$1;
(statearr_26799_26835[(1)] = (21));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (20))){
var state_26796__$1 = state_26796;
var statearr_26800_26836 = state_26796__$1;
(statearr_26800_26836[(2)] = null);

(statearr_26800_26836[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (1))){
var state_26796__$1 = state_26796;
var statearr_26801_26837 = state_26796__$1;
(statearr_26801_26837[(2)] = null);

(statearr_26801_26837[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (4))){
var inst_26756 = (state_26796[(7)]);
var inst_26758 = (state_26796[(8)]);
var inst_26756__$1 = (state_26796[(2)]);
var inst_26757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26756__$1,(0),null);
var inst_26758__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26756__$1,(1),null);
var inst_26759 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26758__$1,clicks);
var state_26796__$1 = (function (){var statearr_26802 = state_26796;
(statearr_26802[(7)] = inst_26756__$1);

(statearr_26802[(9)] = inst_26757);

(statearr_26802[(8)] = inst_26758__$1);

return statearr_26802;
})();
if(inst_26759){
var statearr_26803_26838 = state_26796__$1;
(statearr_26803_26838[(1)] = (5));

} else {
var statearr_26804_26839 = state_26796__$1;
(statearr_26804_26839[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (15))){
var state_26796__$1 = state_26796;
var statearr_26805_26840 = state_26796__$1;
(statearr_26805_26840[(2)] = null);

(statearr_26805_26840[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (21))){
var state_26796__$1 = state_26796;
var statearr_26806_26841 = state_26796__$1;
(statearr_26806_26841[(2)] = null);

(statearr_26806_26841[(1)] = (22));


return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (13))){
var inst_26785 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
var statearr_26807_26842 = state_26796__$1;
(statearr_26807_26842[(2)] = inst_26785);

(statearr_26807_26842[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (22))){
var inst_26792 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
var statearr_26808_26843 = state_26796__$1;
(statearr_26808_26843[(2)] = inst_26792);

(statearr_26808_26843[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (6))){
var inst_26758 = (state_26796[(8)]);
var inst_26769 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26758,scrolls);
var state_26796__$1 = state_26796;
if(inst_26769){
var statearr_26809_26844 = state_26796__$1;
(statearr_26809_26844[(1)] = (11));

} else {
var statearr_26810_26845 = state_26796__$1;
(statearr_26810_26845[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (17))){
var inst_26757 = (state_26796[(9)]);
var state_26796__$1 = state_26796;
var statearr_26811_26846 = state_26796__$1;
(statearr_26811_26846[(2)] = inst_26757);

(statearr_26811_26846[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (3))){
var inst_26794 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26796__$1,inst_26794);
} else {
if((state_val_26797 === (12))){
var inst_26758 = (state_26796[(8)]);
var inst_26779 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26758,cljs.core.constant$keyword$7);
var state_26796__$1 = state_26796;
if(inst_26779){
var statearr_26812_26847 = state_26796__$1;
(statearr_26812_26847[(1)] = (17));

} else {
var statearr_26813_26848 = state_26796__$1;
(statearr_26813_26848[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (2))){
var inst_26752 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26753 = [clicks,scrolls];
var inst_26754 = (new cljs.core.PersistentVector(null,2,(5),inst_26752,inst_26753,null));
var state_26796__$1 = state_26796;
return cljs.core.async.ioc_alts_BANG_(state_26796__$1,(4),inst_26754);
} else {
if((state_val_26797 === (19))){
var inst_26783 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
var statearr_26814_26849 = state_26796__$1;
(statearr_26814_26849[(2)] = inst_26783);

(statearr_26814_26849[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (11))){
var inst_26756 = (state_26796[(7)]);
var inst_26772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26756,(0),null);
var state_26796__$1 = state_26796;
if(cljs.core.truth_(inst_26772)){
var statearr_26815_26850 = state_26796__$1;
(statearr_26815_26850[(1)] = (14));

} else {
var statearr_26816_26851 = state_26796__$1;
(statearr_26816_26851[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (9))){
var state_26796__$1 = state_26796;
var statearr_26817_26852 = state_26796__$1;
(statearr_26817_26852[(2)] = null);

(statearr_26817_26852[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (5))){
var inst_26756 = (state_26796[(7)]);
var inst_26762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26756,(0),null);
var state_26796__$1 = state_26796;
if(cljs.core.truth_(inst_26762)){
var statearr_26818_26853 = state_26796__$1;
(statearr_26818_26853[(1)] = (8));

} else {
var statearr_26819_26854 = state_26796__$1;
(statearr_26819_26854[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (14))){
var inst_26774 = hawk_www.core.update_nav();
var state_26796__$1 = (function (){var statearr_26820 = state_26796;
(statearr_26820[(10)] = inst_26774);

return statearr_26820;
})();
var statearr_26821_26855 = state_26796__$1;
(statearr_26821_26855[(2)] = true);

(statearr_26821_26855[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (16))){
var inst_26777 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
var statearr_26822_26856 = state_26796__$1;
(statearr_26822_26856[(2)] = inst_26777);

(statearr_26822_26856[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (10))){
var inst_26767 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
var statearr_26823_26857 = state_26796__$1;
(statearr_26823_26857[(2)] = inst_26767);

(statearr_26823_26857[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (18))){
var state_26796__$1 = state_26796;
var statearr_26824_26858 = state_26796__$1;
(statearr_26824_26858[(2)] = null);

(statearr_26824_26858[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_26797 === (8))){
var inst_26764 = hawk_www.core.scroll_page();
var state_26796__$1 = (function (){var statearr_26825 = state_26796;
(statearr_26825[(11)] = inst_26764);

return statearr_26825;
})();
var statearr_26826_26859 = state_26796__$1;
(statearr_26826_26859[(2)] = true);

(statearr_26826_26859[(1)] = (10));


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
});})(c__23603__auto__,scrolls,clicks))
;
return ((function (switch__23523__auto__,c__23603__auto__,scrolls,clicks){
return (function() {
var state_machine__23524__auto__ = null;
var state_machine__23524__auto____0 = (function (){
var statearr_26830 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26830[(0)] = state_machine__23524__auto__);

(statearr_26830[(1)] = (1));

return statearr_26830;
});
var state_machine__23524__auto____1 = (function (state_26796){
while(true){
var ret_value__23525__auto__ = (function (){try{while(true){
var result__23526__auto__ = switch__23523__auto__(state_26796);
if(cljs.core.keyword_identical_QMARK_(result__23526__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__23526__auto__;
}
break;
}
}catch (e26831){if((e26831 instanceof Object)){
var ex__23527__auto__ = e26831;
var statearr_26832_26860 = state_26796;
(statearr_26832_26860[(5)] = ex__23527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26796);

return cljs.core.constant$keyword$21;
} else {
throw e26831;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23525__auto__,cljs.core.constant$keyword$21)){
var G__26861 = state_26796;
state_26796 = G__26861;
continue;
} else {
return ret_value__23525__auto__;
}
break;
}
});
state_machine__23524__auto__ = function(state_26796){
switch(arguments.length){
case 0:
return state_machine__23524__auto____0.call(this);
case 1:
return state_machine__23524__auto____1.call(this,state_26796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23524__auto____0;
state_machine__23524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23524__auto____1;
return state_machine__23524__auto__;
})()
;})(switch__23523__auto__,c__23603__auto__,scrolls,clicks))
})();
var state__23605__auto__ = (function (){var statearr_26833 = (function (){return (f__23604__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23604__auto__.cljs$core$IFn$_invoke$arity$0() : f__23604__auto__.call(null));
})();
(statearr_26833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23603__auto__);

return statearr_26833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23605__auto__);
});})(c__23603__auto__,scrolls,clicks))
);

return c__23603__auto__;
}
});
/**
* Stop the 'app'. Attempt to be idempotent. Useful for interactive local development.
*/
hawk_www.core.stop = (function stop(){
var temp__4126__auto___26866 = cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1((function (){var G__26864 = hawk_www.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26864) : cljs.core.deref.call(null,G__26864));
})());
if(cljs.core.truth_(temp__4126__auto___26866)){
var clicks_26867 = temp__4126__auto___26866;
cljs.core.async.close_BANG_(clicks_26867);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hawk_www.core.world,cljs.core.dissoc,cljs.core.constant$keyword$38);
} else {
}

var temp__4126__auto__ = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1((function (){var G__26865 = hawk_www.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26865) : cljs.core.deref.call(null,G__26865));
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
