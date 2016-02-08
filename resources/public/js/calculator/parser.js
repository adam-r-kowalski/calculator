// Compiled by ClojureScript 1.7.170 {}
goog.provide('calculator.parser');
goog.require('cljs.core');
goog.require('om.next');
goog.require('cljs.core.match');
calculator.parser.initial_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"",new cljs.core.Keyword(null,"buffer","buffer",617295198),"",new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),false,new cljs.core.Keyword(null,"op","op",-1882987955),null], null);
if(typeof calculator.parser.app_state !== 'undefined'){
} else {
calculator.parser.app_state = cljs.core.atom.call(null,calculator.parser.initial_state);
}
calculator.parser.read = (function calculator$parser$read(p__32465,key,_){
var map__32469 = p__32465;
var map__32469__$1 = ((((!((map__32469 == null)))?((((map__32469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32469):map__32469);
var env = map__32469__$1;
var state = cljs.core.get.call(null,map__32469__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__32471 = temp__4423__auto__;
var ___$1 = cljs.core.nth.call(null,vec__32471,(0),null);
var value = cljs.core.nth.call(null,vec__32471,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
calculator.parser.change_in = (function calculator$parser$change_in(state,changes){
return (function (){
var seq__32478 = cljs.core.seq.call(null,changes);
var chunk__32479 = null;
var count__32480 = (0);
var i__32481 = (0);
while(true){
if((i__32481 < count__32480)){
var vec__32482 = cljs.core._nth.call(null,chunk__32479,i__32481);
var k = cljs.core.nth.call(null,vec__32482,(0),null);
var v = cljs.core.nth.call(null,vec__32482,(1),null);
if(cljs.core.fn_QMARK_.call(null,v)){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}

var G__32484 = seq__32478;
var G__32485 = chunk__32479;
var G__32486 = count__32480;
var G__32487 = (i__32481 + (1));
seq__32478 = G__32484;
chunk__32479 = G__32485;
count__32480 = G__32486;
i__32481 = G__32487;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32478);
if(temp__4425__auto__){
var seq__32478__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32478__$1)){
var c__26554__auto__ = cljs.core.chunk_first.call(null,seq__32478__$1);
var G__32488 = cljs.core.chunk_rest.call(null,seq__32478__$1);
var G__32489 = c__26554__auto__;
var G__32490 = cljs.core.count.call(null,c__26554__auto__);
var G__32491 = (0);
seq__32478 = G__32488;
chunk__32479 = G__32489;
count__32480 = G__32490;
i__32481 = G__32491;
continue;
} else {
var vec__32483 = cljs.core.first.call(null,seq__32478__$1);
var k = cljs.core.nth.call(null,vec__32483,(0),null);
var v = cljs.core.nth.call(null,vec__32483,(1),null);
if(cljs.core.fn_QMARK_.call(null,v)){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}

var G__32492 = cljs.core.next.call(null,seq__32478__$1);
var G__32493 = null;
var G__32494 = (0);
var G__32495 = (0);
seq__32478 = G__32492;
chunk__32479 = G__32493;
count__32480 = G__32494;
i__32481 = G__32495;
continue;
}
} else {
return null;
}
}
break;
}
});
});
calculator.parser.append_display = (function calculator$parser$append_display(state,number){
var f = (function (p1__32496_SHARP_){
if(((number === (0))) && (cljs.core.empty_QMARK_.call(null,p1__32496_SHARP_))){
return p1__32496_SHARP_;
} else {
return [cljs.core.str(p1__32496_SHARP_),cljs.core.str(number)].join('');
}
});
var st = cljs.core.deref.call(null,state);
var cd = new cljs.core.Keyword(null,"clear-display","clear-display",2121070457).cljs$core$IFn$_invoke$arity$1(st);
var d = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(st);
if((cd === false) && (cljs.core._EQ_.call(null,d,"0"))){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),[cljs.core.str(number)].join('')], null));
} else {
if((cd === false) && (cljs.core._EQ_.call(null,d,"-0"))){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),[cljs.core.str("-"),cljs.core.str(number)].join('')], null));
} else {
if(cd === false){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),f], null));
} else {
if(cljs.core.truth_((function (){var and__25739__auto__ = cd;
if(cljs.core.truth_(and__25739__auto__)){
return cljs.core._EQ_.call(null,d,"-0");
} else {
return and__25739__auto__;
}
})())){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),[cljs.core.str("-"),cljs.core.str(number)].join(''),new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),false], null));
} else {
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),[cljs.core.str(number)].join(''),new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),false], null));

}
}
}
}
});
calculator.parser.percent = (function calculator$parser$percent(state){
var st = cljs.core.deref.call(null,state);
var cd = new cljs.core.Keyword(null,"clear-display","clear-display",2121070457).cljs$core$IFn$_invoke$arity$1(st);
var d = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(st);
var b = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(st);
var f = ((function (st,cd,d,b){
return (function (p1__32497_SHARP_){
return [cljs.core.str((cljs.reader.read_string.call(null,p1__32497_SHARP_) / (100)))].join('');
});})(st,cd,d,b))
;
if(cljs.core.truth_((function (){var and__25739__auto__ = cd;
if(cljs.core.truth_(and__25739__auto__)){
return (cljs.core.empty_QMARK_.call(null,b)) && (!((cljs.core._EQ_.call(null,d,"")) || (cljs.core._EQ_.call(null,d,"0")) || (cljs.core._EQ_.call(null,d,"-0"))));
} else {
return and__25739__auto__;
}
})())){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),f], null));
} else {
if(cljs.core.truth_(cd)){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),d], null));
} else {
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),((function (st,cd,d,b,f){
return (function (p1__32498_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__32498_SHARP_)){
return "";
} else {
return f.call(null,p1__32498_SHARP_);
}
});})(st,cd,d,b,f))
], null));

}
}
});
calculator.parser.decimal = (function calculator$parser$decimal(state){
var st = cljs.core.deref.call(null,state);
var cd = new cljs.core.Keyword(null,"clear-display","clear-display",2121070457).cljs$core$IFn$_invoke$arity$1(st);
var d = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(st);
var f = ((function (st,cd,d){
return (function (p1__32499_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__32499_SHARP_)){
return "0.";
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/\./,p1__32499_SHARP_))){
return p1__32499_SHARP_;
} else {
return [cljs.core.str(p1__32499_SHARP_),cljs.core.str(".")].join('');

}
}
});})(st,cd,d))
;
if(cljs.core.truth_((function (){var and__25739__auto__ = cd;
if(cljs.core.truth_(and__25739__auto__)){
return (cljs.core._EQ_.call(null,"0",d)) || (cljs.core._EQ_.call(null,"-0",d));
} else {
return and__25739__auto__;
}
})())){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),((function (st,cd,d,f){
return (function (p1__32500_SHARP_){
return [cljs.core.str(p1__32500_SHARP_),cljs.core.str(".")].join('');
});})(st,cd,d,f))
,new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),false], null));
} else {
if(cljs.core.truth_(cd)){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"0.",new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),false], null));
} else {
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),f], null));

}
}
});
calculator.parser.do_op = (function calculator$parser$do_op(op,d,b){
var d__$1 = cljs.reader.read_string.call(null,d);
var b__$1 = cljs.reader.read_string.call(null,b);
try{if((op === "+")){
return [cljs.core.str((b__$1 + d__$1))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e32507){if((e32507 instanceof Error)){
var e__28909__auto__ = e32507;
if((e__28909__auto__ === cljs.core.match.backtrack)){
try{if((op === "-")){
return [cljs.core.str((b__$1 - d__$1))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e32508){if((e32508 instanceof Error)){
var e__28909__auto____$1 = e32508;
if((e__28909__auto____$1 === cljs.core.match.backtrack)){
try{if((op === "/")){
return [cljs.core.str((b__$1 / d__$1))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e32509){if((e32509 instanceof Error)){
var e__28909__auto____$2 = e32509;
if((e__28909__auto____$2 === cljs.core.match.backtrack)){
try{if((op === "*")){
return [cljs.core.str((b__$1 * d__$1))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e32510){if((e32510 instanceof Error)){
var e__28909__auto____$3 = e32510;
if((e__28909__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));
} else {
throw e__28909__auto____$3;
}
} else {
throw e32510;

}
}} else {
throw e__28909__auto____$2;
}
} else {
throw e32509;

}
}} else {
throw e__28909__auto____$1;
}
} else {
throw e32508;

}
}} else {
throw e__28909__auto__;
}
} else {
throw e32507;

}
}});
calculator.parser.operation = (function calculator$parser$operation(state,op){
var st = cljs.core.deref.call(null,state);
var d = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(st);
var b = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(st);
var o = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(st);
var cd = new cljs.core.Keyword(null,"clear-display","clear-display",2121070457).cljs$core$IFn$_invoke$arity$1(st);
if((!(cljs.core.empty_QMARK_.call(null,b))) && (!(cljs.core.empty_QMARK_.call(null,d))) && (!(cljs.core.empty_QMARK_.call(null,op))) && (cljs.core.not.call(null,cd))){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),calculator.parser.do_op.call(null,o,d,b),new cljs.core.Keyword(null,"buffer","buffer",617295198),calculator.parser.do_op.call(null,o,d,b),new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),true], null));
} else {
if(cljs.core.truth_((function (){var and__25739__auto__ = !(cljs.core.empty_QMARK_.call(null,b));
if(and__25739__auto__){
var and__25739__auto____$1 = !(cljs.core.empty_QMARK_.call(null,d));
if(and__25739__auto____$1){
var and__25739__auto____$2 = !(cljs.core.empty_QMARK_.call(null,op));
if(and__25739__auto____$2){
return cd;
} else {
return and__25739__auto____$2;
}
} else {
return and__25739__auto____$1;
}
} else {
return and__25739__auto__;
}
})())){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),op], null));
} else {
if(cljs.core.empty_QMARK_.call(null,b)){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buffer","buffer",617295198),d,new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),true], null));
} else {
return null;
}
}
}
});
calculator.parser.equal = (function calculator$parser$equal(state){
var st = cljs.core.deref.call(null,state);
var d = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(st);
var b = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(st);
var o = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(st);
var cd = new cljs.core.Keyword(null,"clear-display","clear-display",2121070457).cljs$core$IFn$_invoke$arity$1(st);
if((!(cljs.core.empty_QMARK_.call(null,b))) && (!(cljs.core.empty_QMARK_.call(null,d))) && (!((o == null))) && (cljs.core.not.call(null,cd))){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),calculator.parser.do_op.call(null,o,d,b),new cljs.core.Keyword(null,"buffer","buffer",617295198),"",new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),true], null));
} else {
if(cljs.core.empty_QMARK_.call(null,b)){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),true], null));
} else {
return null;
}
}
});
calculator.parser.clear_display = (function calculator$parser$clear_display(state){
var st = cljs.core.deref.call(null,state);
var d = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core.empty_QMARK_.call(null,d)){
return ((function (st,d){
return (function (){
return cljs.core.reset_BANG_.call(null,state,calculator.parser.initial_state);
});
;})(st,d))
} else {
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),""], null));
}
});
calculator.parser.plus_minus = (function calculator$parser$plus_minus(state){
var st = cljs.core.deref.call(null,state);
var cd = new cljs.core.Keyword(null,"clear-display","clear-display",2121070457).cljs$core$IFn$_invoke$arity$1(st);
var d = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core.truth_((function (){var and__25739__auto__ = cd;
if(cljs.core.truth_(and__25739__auto__)){
return cljs.core._EQ_.call(null,"-0",d);
} else {
return and__25739__auto__;
}
})())){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"0"], null));
} else {
if(cljs.core.truth_(cd)){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"-0"], null));
} else {
if((cljs.core._EQ_.call(null,"0",d)) || (cljs.core.empty_QMARK_.call(null,d))){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"-0"], null));
} else {
if(cljs.core._EQ_.call(null,"-0",d)){
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"0"], null));
} else {
return calculator.parser.change_in.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),((function (st,cd,d){
return (function (p1__32511_SHARP_){
return [cljs.core.str(((-1) * cljs.reader.read_string.call(null,p1__32511_SHARP_)))].join('');
});})(st,cd,d))
], null));

}
}
}
}
});
calculator.parser.mutate = (function calculator$parser$mutate(p__32512,key,props){
var map__32523 = p__32512;
var map__32523__$1 = ((((!((map__32523 == null)))?((((map__32523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32523):map__32523);
var state = cljs.core.get.call(null,map__32523__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var action = (function (){try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"ac","ac",-251100948,null))){
return calculator.parser.clear_display.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e32526){if((e32526 instanceof Error)){
var e__28909__auto__ = e32526;
if((e__28909__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"pm","pm",-840698341,null))){
return calculator.parser.plus_minus.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e32527){if((e32527 instanceof Error)){
var e__28909__auto____$1 = e32527;
if((e__28909__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"pc","pc",-2141522316,null))){
return calculator.parser.percent.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e32528){if((e32528 instanceof Error)){
var e__28909__auto____$2 = e32528;
if((e__28909__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"dec","dec",-766002333,null))){
return calculator.parser.decimal.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e32529){if((e32529 instanceof Error)){
var e__28909__auto____$3 = e32529;
if((e__28909__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"append","append",1349233298,null))){
return calculator.parser.append_display.call(null,state,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(props));
} else {
throw cljs.core.match.backtrack;

}
}catch (e32530){if((e32530 instanceof Error)){
var e__28909__auto____$4 = e32530;
if((e__28909__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"op","op",-242456428,null))){
return calculator.parser.operation.call(null,state,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(props));
} else {
throw cljs.core.match.backtrack;

}
}catch (e32531){if((e32531 instanceof Error)){
var e__28909__auto____$5 = e32531;
if((e__28909__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"eq","eq",1021992460,null))){
return calculator.parser.equal.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e32532){if((e32532 instanceof Error)){
var e__28909__auto____$6 = e32532;
if((e__28909__auto____$6 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(key)].join('')));
} else {
throw e__28909__auto____$6;
}
} else {
throw e32532;

}
}} else {
throw e__28909__auto____$5;
}
} else {
throw e32531;

}
}} else {
throw e__28909__auto____$4;
}
} else {
throw e32530;

}
}} else {
throw e__28909__auto____$3;
}
} else {
throw e32529;

}
}} else {
throw e__28909__auto____$2;
}
} else {
throw e32528;

}
}} else {
throw e__28909__auto____$1;
}
} else {
throw e32527;

}
}} else {
throw e__28909__auto__;
}
} else {
throw e32526;

}
}})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),new cljs.core.Keyword(null,"op","op",-1882987955)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),action], null);
});

//# sourceMappingURL=parser.js.map