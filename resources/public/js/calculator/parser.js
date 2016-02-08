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
calculator.parser.read = (function calculator$parser$read(p__28277,key,_){
var map__28281 = p__28277;
var map__28281__$1 = ((((!((map__28281 == null)))?((((map__28281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28281):map__28281);
var env = map__28281__$1;
var state = cljs.core.get.call(null,map__28281__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28283 = temp__4423__auto__;
var ___$1 = cljs.core.nth.call(null,vec__28283,(0),null);
var value = cljs.core.nth.call(null,vec__28283,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
calculator.parser.change_in = (function calculator$parser$change_in(state,changes){
return (function (){
var seq__28290 = cljs.core.seq.call(null,changes);
var chunk__28291 = null;
var count__28292 = (0);
var i__28293 = (0);
while(true){
if((i__28293 < count__28292)){
var vec__28294 = cljs.core._nth.call(null,chunk__28291,i__28293);
var k = cljs.core.nth.call(null,vec__28294,(0),null);
var v = cljs.core.nth.call(null,vec__28294,(1),null);
if(cljs.core.fn_QMARK_.call(null,v)){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}

var G__28296 = seq__28290;
var G__28297 = chunk__28291;
var G__28298 = count__28292;
var G__28299 = (i__28293 + (1));
seq__28290 = G__28296;
chunk__28291 = G__28297;
count__28292 = G__28298;
i__28293 = G__28299;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28290);
if(temp__4425__auto__){
var seq__28290__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28290__$1)){
var c__26555__auto__ = cljs.core.chunk_first.call(null,seq__28290__$1);
var G__28300 = cljs.core.chunk_rest.call(null,seq__28290__$1);
var G__28301 = c__26555__auto__;
var G__28302 = cljs.core.count.call(null,c__26555__auto__);
var G__28303 = (0);
seq__28290 = G__28300;
chunk__28291 = G__28301;
count__28292 = G__28302;
i__28293 = G__28303;
continue;
} else {
var vec__28295 = cljs.core.first.call(null,seq__28290__$1);
var k = cljs.core.nth.call(null,vec__28295,(0),null);
var v = cljs.core.nth.call(null,vec__28295,(1),null);
if(cljs.core.fn_QMARK_.call(null,v)){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}

var G__28304 = cljs.core.next.call(null,seq__28290__$1);
var G__28305 = null;
var G__28306 = (0);
var G__28307 = (0);
seq__28290 = G__28304;
chunk__28291 = G__28305;
count__28292 = G__28306;
i__28293 = G__28307;
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
var f = (function (p1__28308_SHARP_){
if(((number === (0))) && (cljs.core.empty_QMARK_.call(null,p1__28308_SHARP_))){
return p1__28308_SHARP_;
} else {
return [cljs.core.str(p1__28308_SHARP_),cljs.core.str(number)].join('');
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
return (function (p1__28309_SHARP_){
return [cljs.core.str((cljs.reader.read_string.call(null,p1__28309_SHARP_) / (100)))].join('');
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
return (function (p1__28310_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__28310_SHARP_)){
return "";
} else {
return f.call(null,p1__28310_SHARP_);
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
return (function (p1__28311_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__28311_SHARP_)){
return "0.";
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/\./,p1__28311_SHARP_))){
return p1__28311_SHARP_;
} else {
return [cljs.core.str(p1__28311_SHARP_),cljs.core.str(".")].join('');

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
return (function (p1__28312_SHARP_){
return [cljs.core.str(p1__28312_SHARP_),cljs.core.str(".")].join('');
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
}catch (e28319){if((e28319 instanceof Error)){
var e__27478__auto__ = e28319;
if((e__27478__auto__ === cljs.core.match.backtrack)){
try{if((op === "-")){
return [cljs.core.str((b__$1 - d__$1))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e28320){if((e28320 instanceof Error)){
var e__27478__auto____$1 = e28320;
if((e__27478__auto____$1 === cljs.core.match.backtrack)){
try{if((op === "/")){
return [cljs.core.str((b__$1 / d__$1))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e28321){if((e28321 instanceof Error)){
var e__27478__auto____$2 = e28321;
if((e__27478__auto____$2 === cljs.core.match.backtrack)){
try{if((op === "*")){
return [cljs.core.str((b__$1 * d__$1))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e28322){if((e28322 instanceof Error)){
var e__27478__auto____$3 = e28322;
if((e__27478__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));
} else {
throw e__27478__auto____$3;
}
} else {
throw e28322;

}
}} else {
throw e__27478__auto____$2;
}
} else {
throw e28321;

}
}} else {
throw e__27478__auto____$1;
}
} else {
throw e28320;

}
}} else {
throw e__27478__auto__;
}
} else {
throw e28319;

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
return (function (p1__28323_SHARP_){
return [cljs.core.str(((-1) * cljs.reader.read_string.call(null,p1__28323_SHARP_)))].join('');
});})(st,cd,d))
], null));

}
}
}
}
});
calculator.parser.mutate = (function calculator$parser$mutate(p__28324,key,props){
var map__28335 = p__28324;
var map__28335__$1 = ((((!((map__28335 == null)))?((((map__28335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28335):map__28335);
var state = cljs.core.get.call(null,map__28335__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var action = (function (){try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"ac","ac",-251100948,null))){
return calculator.parser.clear_display.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28338){if((e28338 instanceof Error)){
var e__27478__auto__ = e28338;
if((e__27478__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"pm","pm",-840698341,null))){
return calculator.parser.plus_minus.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28339){if((e28339 instanceof Error)){
var e__27478__auto____$1 = e28339;
if((e__27478__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"pc","pc",-2141522316,null))){
return calculator.parser.percent.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28340){if((e28340 instanceof Error)){
var e__27478__auto____$2 = e28340;
if((e__27478__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"dec","dec",-766002333,null))){
return calculator.parser.decimal.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28341){if((e28341 instanceof Error)){
var e__27478__auto____$3 = e28341;
if((e__27478__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"append","append",1349233298,null))){
return calculator.parser.append_display.call(null,state,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(props));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28342){if((e28342 instanceof Error)){
var e__27478__auto____$4 = e28342;
if((e__27478__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"op","op",-242456428,null))){
return calculator.parser.operation.call(null,state,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(props));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28343){if((e28343 instanceof Error)){
var e__27478__auto____$5 = e28343;
if((e__27478__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"eq","eq",1021992460,null))){
return calculator.parser.equal.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28344){if((e28344 instanceof Error)){
var e__27478__auto____$6 = e28344;
if((e__27478__auto____$6 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(key)].join('')));
} else {
throw e__27478__auto____$6;
}
} else {
throw e28344;

}
}} else {
throw e__27478__auto____$5;
}
} else {
throw e28343;

}
}} else {
throw e__27478__auto____$4;
}
} else {
throw e28342;

}
}} else {
throw e__27478__auto____$3;
}
} else {
throw e28341;

}
}} else {
throw e__27478__auto____$2;
}
} else {
throw e28340;

}
}} else {
throw e__27478__auto____$1;
}
} else {
throw e28339;

}
}} else {
throw e__27478__auto__;
}
} else {
throw e28338;

}
}})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),new cljs.core.Keyword(null,"op","op",-1882987955)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),action], null);
});

//# sourceMappingURL=parser.js.map