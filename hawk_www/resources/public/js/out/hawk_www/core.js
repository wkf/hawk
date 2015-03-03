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
hawk_www.core.world = (function (){var G__36683 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36683) : cljs.core.atom.call(null,G__36683));
})();
}
/**
* Return a core.async chan to receive the events for which you are listening
*/
hawk_www.core.listen = (function listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10)));
var G__36688_36691 = el;
var G__36689_36692 = type;
var G__36690_36693 = ((function (G__36688_36691,G__36689_36692,out){
return (function (p1__36684_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,p1__36684_SHARP_);
});})(G__36688_36691,G__36689_36692,out))
;
goog.events.listen(G__36688_36691,G__36689_36692,G__36690_36693);

return out;
});
hawk_www.core.scroll_page = (function scroll_page(){
var scroll = (function (){return goog.dom.getDocumentScroll();
})();
var body = ((function (){var G__36695 = "body";
return goog.dom.getElementsByTagNameAndClass(G__36695);
})()["0"]);
return (new goog.fx.dom.Scroll(body,[(scroll["x"]),(scroll["y"])],[(scroll["x"]),(0)],(500))).play();
});
hawk_www.core.update_nav = (function update_nav(){
var top = ((function (){return goog.dom.getDocumentScroll();
})()["y"]);
var nav = ((function (){var G__36700 = "nav";
return goog.dom.getElementsByTagNameAndClass(G__36700);
})()["0"]);
var nav_height = ((function (){var G__36701 = nav;
return goog.style.getSize(G__36701);
})()["height"]);
var header = ((function (){var G__36702 = "header";
return goog.dom.getElementsByTagNameAndClass(G__36702);
})()["0"]);
var header_height = ((function (){var G__36703 = header;
return goog.style.getSize(G__36703);
})()["height"]);
return (((top >= (header_height - nav_height)))?goog.dom.classes.add:goog.dom.classes.remove).call(null,nav,"active");
});
/**
* Start the 'app'. Attempt to be idempotent.
*/
hawk_www.core.start = (function start(){
if(cljs.core.truth_(cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1((function (){var G__36795 = hawk_www.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36795) : cljs.core.deref.call(null,G__36795));
})()))){
return null;
} else {
var scrolls = hawk_www.core.listen((function (){return goog.dom.getWindow();
})(),"scroll");
var clicks = hawk_www.core.listen(((function (){var G__36796 = "a";
var G__36797 = "scroll";
return goog.dom.getElementsByTagNameAndClass(G__36796,G__36797);
})()["0"]),"click");
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hawk_www.core.world,cljs.core.assoc,cljs.core.constant$keyword$81,clicks);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hawk_www.core.world,cljs.core.assoc,cljs.core.constant$keyword$80,scrolls);

var c__33655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33655__auto__,scrolls,clicks){
return (function (){
var f__33656__auto__ = (function (){var switch__33575__auto__ = ((function (c__33655__auto__,scrolls,clicks){
return (function (state_36848){
var state_val_36849 = (state_36848[(1)]);
if((state_val_36849 === (7))){
var inst_36839 = (state_36848[(2)]);
var state_36848__$1 = state_36848;
if(cljs.core.truth_(inst_36839)){
var statearr_36850_36886 = state_36848__$1;
(statearr_36850_36886[(1)] = (20));

} else {
var statearr_36851_36887 = state_36848__$1;
(statearr_36851_36887[(1)] = (21));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (20))){
var state_36848__$1 = state_36848;
var statearr_36852_36888 = state_36848__$1;
(statearr_36852_36888[(2)] = null);

(statearr_36852_36888[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (1))){
var state_36848__$1 = state_36848;
var statearr_36853_36889 = state_36848__$1;
(statearr_36853_36889[(2)] = null);

(statearr_36853_36889[(1)] = (2));


return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (4))){
var inst_36810 = (state_36848[(7)]);
var inst_36808 = (state_36848[(8)]);
var inst_36808__$1 = (state_36848[(2)]);
var inst_36809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36808__$1,(0),null);
var inst_36810__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36808__$1,(1),null);
var inst_36811 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36810__$1,clicks);
var state_36848__$1 = (function (){var statearr_36854 = state_36848;
(statearr_36854[(7)] = inst_36810__$1);

(statearr_36854[(8)] = inst_36808__$1);

(statearr_36854[(9)] = inst_36809);

return statearr_36854;
})();
if(inst_36811){
var statearr_36855_36890 = state_36848__$1;
(statearr_36855_36890[(1)] = (5));

} else {
var statearr_36856_36891 = state_36848__$1;
(statearr_36856_36891[(1)] = (6));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (15))){
var state_36848__$1 = state_36848;
var statearr_36857_36892 = state_36848__$1;
(statearr_36857_36892[(2)] = null);

(statearr_36857_36892[(1)] = (16));


return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (21))){
var state_36848__$1 = state_36848;
var statearr_36858_36893 = state_36848__$1;
(statearr_36858_36893[(2)] = null);

(statearr_36858_36893[(1)] = (22));


return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (13))){
var inst_36837 = (state_36848[(2)]);
var state_36848__$1 = state_36848;
var statearr_36859_36894 = state_36848__$1;
(statearr_36859_36894[(2)] = inst_36837);

(statearr_36859_36894[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (22))){
var inst_36844 = (state_36848[(2)]);
var state_36848__$1 = state_36848;
var statearr_36860_36895 = state_36848__$1;
(statearr_36860_36895[(2)] = inst_36844);

(statearr_36860_36895[(1)] = (3));


return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (6))){
var inst_36810 = (state_36848[(7)]);
var inst_36821 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36810,scrolls);
var state_36848__$1 = state_36848;
if(inst_36821){
var statearr_36861_36896 = state_36848__$1;
(statearr_36861_36896[(1)] = (11));

} else {
var statearr_36862_36897 = state_36848__$1;
(statearr_36862_36897[(1)] = (12));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (17))){
var inst_36809 = (state_36848[(9)]);
var state_36848__$1 = state_36848;
var statearr_36863_36898 = state_36848__$1;
(statearr_36863_36898[(2)] = inst_36809);

(statearr_36863_36898[(1)] = (19));


return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (3))){
var inst_36846 = (state_36848[(2)]);
var state_36848__$1 = state_36848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36848__$1,inst_36846);
} else {
if((state_val_36849 === (12))){
var inst_36810 = (state_36848[(7)]);
var inst_36831 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36810,cljs.core.constant$keyword$50);
var state_36848__$1 = state_36848;
if(inst_36831){
var statearr_36864_36899 = state_36848__$1;
(statearr_36864_36899[(1)] = (17));

} else {
var statearr_36865_36900 = state_36848__$1;
(statearr_36865_36900[(1)] = (18));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (2))){
var inst_36804 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36805 = [clicks,scrolls];
var inst_36806 = (new cljs.core.PersistentVector(null,2,(5),inst_36804,inst_36805,null));
var state_36848__$1 = state_36848;
return cljs.core.async.ioc_alts_BANG_(state_36848__$1,(4),inst_36806);
} else {
if((state_val_36849 === (19))){
var inst_36835 = (state_36848[(2)]);
var state_36848__$1 = state_36848;
var statearr_36866_36901 = state_36848__$1;
(statearr_36866_36901[(2)] = inst_36835);

(statearr_36866_36901[(1)] = (13));


return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (11))){
var inst_36808 = (state_36848[(8)]);
var inst_36824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36808,(0),null);
var state_36848__$1 = state_36848;
if(cljs.core.truth_(inst_36824)){
var statearr_36867_36902 = state_36848__$1;
(statearr_36867_36902[(1)] = (14));

} else {
var statearr_36868_36903 = state_36848__$1;
(statearr_36868_36903[(1)] = (15));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (9))){
var state_36848__$1 = state_36848;
var statearr_36869_36904 = state_36848__$1;
(statearr_36869_36904[(2)] = null);

(statearr_36869_36904[(1)] = (10));


return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (5))){
var inst_36808 = (state_36848[(8)]);
var inst_36814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36808,(0),null);
var state_36848__$1 = state_36848;
if(cljs.core.truth_(inst_36814)){
var statearr_36870_36905 = state_36848__$1;
(statearr_36870_36905[(1)] = (8));

} else {
var statearr_36871_36906 = state_36848__$1;
(statearr_36871_36906[(1)] = (9));

}

return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (14))){
var inst_36826 = hawk_www.core.update_nav();
var state_36848__$1 = (function (){var statearr_36872 = state_36848;
(statearr_36872[(10)] = inst_36826);

return statearr_36872;
})();
var statearr_36873_36907 = state_36848__$1;
(statearr_36873_36907[(2)] = true);

(statearr_36873_36907[(1)] = (16));


return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (16))){
var inst_36829 = (state_36848[(2)]);
var state_36848__$1 = state_36848;
var statearr_36874_36908 = state_36848__$1;
(statearr_36874_36908[(2)] = inst_36829);

(statearr_36874_36908[(1)] = (13));


return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (10))){
var inst_36819 = (state_36848[(2)]);
var state_36848__$1 = state_36848;
var statearr_36875_36909 = state_36848__$1;
(statearr_36875_36909[(2)] = inst_36819);

(statearr_36875_36909[(1)] = (7));


return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (18))){
var state_36848__$1 = state_36848;
var statearr_36876_36910 = state_36848__$1;
(statearr_36876_36910[(2)] = null);

(statearr_36876_36910[(1)] = (19));


return cljs.core.constant$keyword$64;
} else {
if((state_val_36849 === (8))){
var inst_36816 = hawk_www.core.scroll_page();
var state_36848__$1 = (function (){var statearr_36877 = state_36848;
(statearr_36877[(11)] = inst_36816);

return statearr_36877;
})();
var statearr_36878_36911 = state_36848__$1;
(statearr_36878_36911[(2)] = true);

(statearr_36878_36911[(1)] = (10));


return cljs.core.constant$keyword$64;
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
});})(c__33655__auto__,scrolls,clicks))
;
return ((function (switch__33575__auto__,c__33655__auto__,scrolls,clicks){
return (function() {
var state_machine__33576__auto__ = null;
var state_machine__33576__auto____0 = (function (){
var statearr_36882 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36882[(0)] = state_machine__33576__auto__);

(statearr_36882[(1)] = (1));

return statearr_36882;
});
var state_machine__33576__auto____1 = (function (state_36848){
while(true){
var ret_value__33577__auto__ = (function (){try{while(true){
var result__33578__auto__ = switch__33575__auto__(state_36848);
if(cljs.core.keyword_identical_QMARK_(result__33578__auto__,cljs.core.constant$keyword$64)){
continue;
} else {
return result__33578__auto__;
}
break;
}
}catch (e36883){if((e36883 instanceof Object)){
var ex__33579__auto__ = e36883;
var statearr_36884_36912 = state_36848;
(statearr_36884_36912[(5)] = ex__33579__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36848);

return cljs.core.constant$keyword$64;
} else {
throw e36883;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33577__auto__,cljs.core.constant$keyword$64)){
var G__36913 = state_36848;
state_36848 = G__36913;
continue;
} else {
return ret_value__33577__auto__;
}
break;
}
});
state_machine__33576__auto__ = function(state_36848){
switch(arguments.length){
case 0:
return state_machine__33576__auto____0.call(this);
case 1:
return state_machine__33576__auto____1.call(this,state_36848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__33576__auto____0;
state_machine__33576__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__33576__auto____1;
return state_machine__33576__auto__;
})()
;})(switch__33575__auto__,c__33655__auto__,scrolls,clicks))
})();
var state__33657__auto__ = (function (){var statearr_36885 = (function (){return (f__33656__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33656__auto__.cljs$core$IFn$_invoke$arity$0() : f__33656__auto__.call(null));
})();
(statearr_36885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33655__auto__);

return statearr_36885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(c__33655__auto__,scrolls,clicks))
);

return c__33655__auto__;
}
});
/**
* Stop the 'app'. Attempt to be idempotent. Useful for interactive local development.
*/
hawk_www.core.stop = (function stop(){
var temp__4126__auto___36918 = cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1((function (){var G__36916 = hawk_www.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36916) : cljs.core.deref.call(null,G__36916));
})());
if(cljs.core.truth_(temp__4126__auto___36918)){
var clicks_36919 = temp__4126__auto___36918;
cljs.core.async.close_BANG_(clicks_36919);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hawk_www.core.world,cljs.core.dissoc,cljs.core.constant$keyword$81);
} else {
}

var temp__4126__auto__ = cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1((function (){var G__36917 = hawk_www.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36917) : cljs.core.deref.call(null,G__36917));
})());
if(cljs.core.truth_(temp__4126__auto__)){
var scrolls = temp__4126__auto__;
cljs.core.async.close_BANG_(scrolls);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hawk_www.core.world,cljs.core.dissoc,cljs.core.constant$keyword$80);
} else {
return null;
}
});
hawk_www.core.start();
