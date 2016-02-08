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
calculator.parser.read = (function calculator$parser$read(p__36928,key,_){
var map__36932 = p__36928;
var map__36932__$1 = ((((!((map__36932 == null)))?((((map__36932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36932):map__36932);
var env = map__36932__$1;
var state = cljs.core.get.call(null,map__36932__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__36934 = temp__4423__auto__;
var ___$1 = cljs.core.nth.call(null,vec__36934,(0),null);
var value = cljs.core.nth.call(null,vec__36934,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
calculator.parser.replace_in = (function calculator$parser$replace_in(state,key,value){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),value);
});
calculator.parser.change_in = (function calculator$parser$change_in(state,key,function$){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),function$);
});
calculator.parser.append_display = (function calculator$parser$append_display(state,number){
var f = (function (p1__36935_SHARP_){
if(((number === (0))) && (cljs.core.empty_QMARK_.call(null,p1__36935_SHARP_))){
return p1__36935_SHARP_;
} else {
return [cljs.core.str(p1__36935_SHARP_),cljs.core.str(number)].join('');
}
});
var st = cljs.core.deref.call(null,state);
var cd = new cljs.core.Keyword(null,"clear-display","clear-display",2121070457).cljs$core$IFn$_invoke$arity$1(st);
var d = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(st);
if((cd === false) && (cljs.core._EQ_.call(null,d,"0"))){
return ((function (f,st,cd,d){
return (function (){
return calculator.parser.replace_in.call(null,state,new cljs.core.Keyword(null,"display","display",242065432),[cljs.core.str(number)].join(''));
});
;})(f,st,cd,d))
} else {
if((cd === false) && (cljs.core._EQ_.call(null,d,"-0"))){
return ((function (f,st,cd,d){
return (function (){
return calculator.parser.replace_in.call(null,state,new cljs.core.Keyword(null,"display","display",242065432),[cljs.core.str("-"),cljs.core.str(number)].join(''));
});
;})(f,st,cd,d))
} else {
if(cd === false){
return ((function (f,st,cd,d){
return (function (){
return calculator.parser.change_in.call(null,state,new cljs.core.Keyword(null,"display","display",242065432),f);
});
;})(f,st,cd,d))
} else {
if(cljs.core.truth_((function (){var and__25739__auto__ = cd;
if(cljs.core.truth_(and__25739__auto__)){
return cljs.core._EQ_.call(null,d,"-0");
} else {
return and__25739__auto__;
}
})())){
return ((function (f,st,cd,d){
return (function (){
calculator.parser.replace_in.call(null,state,new cljs.core.Keyword(null,"display","display",242065432),[cljs.core.str("-"),cljs.core.str(number)].join(''));

return calculator.parser.replace_in.call(null,state,new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),false);
});
;})(f,st,cd,d))
} else {
return ((function (f,st,cd,d){
return (function (){
calculator.parser.replace_in.call(null,state,new cljs.core.Keyword(null,"display","display",242065432),[cljs.core.str(number)].join(''));

return calculator.parser.replace_in.call(null,state,new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),false);
});
;})(f,st,cd,d))

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
if(cljs.core.truth_((function (){var and__25739__auto__ = cd;
if(cljs.core.truth_(and__25739__auto__)){
return (cljs.core.empty_QMARK_.call(null,b)) && (!((cljs.core._EQ_.call(null,d,"")) || (cljs.core._EQ_.call(null,d,"0")) || (cljs.core._EQ_.call(null,d,"-0"))));
} else {
return and__25739__auto__;
}
})())){
return ((function (st,cd,d,b){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null),((function (st,cd,d,b){
return (function (p1__36936_SHARP_){
return [cljs.core.str((cljs.reader.read_string.call(null,p1__36936_SHARP_) / (100)))].join('');
});})(st,cd,d,b))
);
});
;})(st,cd,d,b))
} else {
if(cljs.core.truth_(cd)){
return ((function (st,cd,d,b){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null),d);
});
;})(st,cd,d,b))
} else {
return ((function (st,cd,d,b){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null),((function (st,cd,d,b){
return (function (p1__36937_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__36937_SHARP_)){
return "";
} else {
return [cljs.core.str((cljs.reader.read_string.call(null,p1__36937_SHARP_) / (100)))].join('');
}
});})(st,cd,d,b))
);
});
;})(st,cd,d,b))

}
}
});
calculator.parser.decimal = (function calculator$parser$decimal(state){
var st = cljs.core.deref.call(null,state);
var cd = new cljs.core.Keyword(null,"clear-display","clear-display",2121070457).cljs$core$IFn$_invoke$arity$1(st);
var d = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core.truth_((function (){var and__25739__auto__ = cd;
if(cljs.core.truth_(and__25739__auto__)){
return (cljs.core._EQ_.call(null,"0",d)) || (cljs.core._EQ_.call(null,"-0",d));
} else {
return and__25739__auto__;
}
})())){
return ((function (st,cd,d){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null),((function (st,cd,d){
return (function (p1__36938_SHARP_){
return [cljs.core.str(p1__36938_SHARP_),cljs.core.str(".")].join('');
});})(st,cd,d))
);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-display","clear-display",2121070457)], null),false);
});
;})(st,cd,d))
} else {
if(cljs.core.truth_(cd)){
return ((function (st,cd,d){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null),"0.");

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-display","clear-display",2121070457)], null),false);
});
;})(st,cd,d))
} else {
return ((function (st,cd,d){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null),((function (st,cd,d){
return (function (p1__36939_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__36939_SHARP_)){
return "0.";
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/\./,p1__36939_SHARP_))){
return p1__36939_SHARP_;
} else {
return [cljs.core.str(p1__36939_SHARP_),cljs.core.str(".")].join('');

}
}
});})(st,cd,d))
);
});
;})(st,cd,d))

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
}catch (e36946){if((e36946 instanceof Error)){
var e__28909__auto__ = e36946;
if((e__28909__auto__ === cljs.core.match.backtrack)){
try{if((op === "-")){
return [cljs.core.str((b__$1 - d__$1))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e36947){if((e36947 instanceof Error)){
var e__28909__auto____$1 = e36947;
if((e__28909__auto____$1 === cljs.core.match.backtrack)){
try{if((op === "/")){
return [cljs.core.str((b__$1 / d__$1))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e36948){if((e36948 instanceof Error)){
var e__28909__auto____$2 = e36948;
if((e__28909__auto____$2 === cljs.core.match.backtrack)){
try{if((op === "*")){
return [cljs.core.str((b__$1 * d__$1))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e36949){if((e36949 instanceof Error)){
var e__28909__auto____$3 = e36949;
if((e__28909__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));
} else {
throw e__28909__auto____$3;
}
} else {
throw e36949;

}
}} else {
throw e__28909__auto____$2;
}
} else {
throw e36948;

}
}} else {
throw e__28909__auto____$1;
}
} else {
throw e36947;

}
}} else {
throw e__28909__auto__;
}
} else {
throw e36946;

}
}});
calculator.parser.operation = (function calculator$parser$operation(state,op){
var st = cljs.core.deref.call(null,state);
var d = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(st);
var b = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(st);
var o = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(st);
var cd = new cljs.core.Keyword(null,"clear-display","clear-display",2121070457).cljs$core$IFn$_invoke$arity$1(st);
if((!(cljs.core.empty_QMARK_.call(null,b))) && (!(cljs.core.empty_QMARK_.call(null,d))) && (!(cljs.core.empty_QMARK_.call(null,op))) && (cljs.core.not.call(null,cd))){
return ((function (st,d,b,o,cd){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null),calculator.parser.do_op.call(null,o,d,b));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",617295198)], null),calculator.parser.do_op.call(null,o,d,b));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955)], null),op);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-display","clear-display",2121070457)], null),true);
});
;})(st,d,b,o,cd))
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
return ((function (st,d,b,o,cd){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955)], null),op);
});
;})(st,d,b,o,cd))
} else {
if(cljs.core.empty_QMARK_.call(null,b)){
return ((function (st,d,b,o,cd){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",617295198)], null),d);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955)], null),op);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-display","clear-display",2121070457)], null),true);
});
;})(st,d,b,o,cd))
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
return ((function (st,d,b,o,cd){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null),calculator.parser.do_op.call(null,o,d,b));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",617295198)], null),"");

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955)], null),null);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-display","clear-display",2121070457)], null),true);
});
;})(st,d,b,o,cd))
} else {
if(cljs.core.empty_QMARK_.call(null,b)){
return ((function (st,d,b,o,cd){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-display","clear-display",2121070457)], null),true);
});
;})(st,d,b,o,cd))
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
return ((function (st,d){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null),"");
});
;})(st,d))
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
return ((function (st,cd,d){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null),"0");
});
;})(st,cd,d))
} else {
if(cljs.core.truth_(cd)){
return ((function (st,cd,d){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null),"-0");
});
;})(st,cd,d))
} else {
if((cljs.core._EQ_.call(null,"0",d)) || (cljs.core.empty_QMARK_.call(null,d))){
return ((function (st,cd,d){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null),"-0");
});
;})(st,cd,d))
} else {
if(cljs.core._EQ_.call(null,"-0",d)){
return ((function (st,cd,d){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null),"0");
});
;})(st,cd,d))
} else {
return ((function (st,cd,d){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null),((function (st,cd,d){
return (function (p1__36950_SHARP_){
return [cljs.core.str(((-1) * cljs.reader.read_string.call(null,p1__36950_SHARP_)))].join('');
});})(st,cd,d))
);
});
;})(st,cd,d))

}
}
}
}
});
calculator.parser.mutate = (function calculator$parser$mutate(p__36951,key,props){
var map__36962 = p__36951;
var map__36962__$1 = ((((!((map__36962 == null)))?((((map__36962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36962):map__36962);
var state = cljs.core.get.call(null,map__36962__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var action = (function (){try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"ac","ac",-251100948,null))){
return calculator.parser.clear_display.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36965){if((e36965 instanceof Error)){
var e__28909__auto__ = e36965;
if((e__28909__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"pm","pm",-840698341,null))){
return calculator.parser.plus_minus.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36966){if((e36966 instanceof Error)){
var e__28909__auto____$1 = e36966;
if((e__28909__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"pc","pc",-2141522316,null))){
return calculator.parser.percent.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36967){if((e36967 instanceof Error)){
var e__28909__auto____$2 = e36967;
if((e__28909__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"dec","dec",-766002333,null))){
return calculator.parser.decimal.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36968){if((e36968 instanceof Error)){
var e__28909__auto____$3 = e36968;
if((e__28909__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"append","append",1349233298,null))){
return calculator.parser.append_display.call(null,state,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(props));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36969){if((e36969 instanceof Error)){
var e__28909__auto____$4 = e36969;
if((e__28909__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"op","op",-242456428,null))){
return calculator.parser.operation.call(null,state,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(props));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36970){if((e36970 instanceof Error)){
var e__28909__auto____$5 = e36970;
if((e__28909__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core._EQ_.call(null,key,new cljs.core.Symbol(null,"eq","eq",1021992460,null))){
return calculator.parser.equal.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36971){if((e36971 instanceof Error)){
var e__28909__auto____$6 = e36971;
if((e__28909__auto____$6 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(key)].join('')));
} else {
throw e__28909__auto____$6;
}
} else {
throw e36971;

}
}} else {
throw e__28909__auto____$5;
}
} else {
throw e36970;

}
}} else {
throw e__28909__auto____$4;
}
} else {
throw e36969;

}
}} else {
throw e__28909__auto____$3;
}
} else {
throw e36968;

}
}} else {
throw e__28909__auto____$2;
}
} else {
throw e36967;

}
}} else {
throw e__28909__auto____$1;
}
} else {
throw e36966;

}
}} else {
throw e__28909__auto__;
}
} else {
throw e36965;

}
}})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"sign","sign",1261721667)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),action], null);
});

//# sourceMappingURL=parser.js.map