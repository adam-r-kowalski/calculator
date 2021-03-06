// Compiled by ClojureScript 1.7.170 {}
goog.provide('calculator.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('sablono.core');
goog.require('devtools.core');
goog.require('calculator.parser');
goog.require('calculator.style');
devtools.core.enable_feature_BANG_.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858),new cljs.core.Keyword(null,"dirac","dirac",1785994033));
devtools.core.install_BANG_.call(null);
calculator.core.button = (function calculator$core$button(var_args){
var args28879 = [];
var len__26810__auto___28882 = arguments.length;
var i__26811__auto___28883 = (0);
while(true){
if((i__26811__auto___28883 < len__26810__auto___28882)){
args28879.push((arguments[i__26811__auto___28883]));

var G__28884 = (i__26811__auto___28883 + (1));
i__26811__auto___28883 = G__28884;
continue;
} else {
}
break;
}

var G__28881 = args28879.length;
switch (G__28881) {
case 3:
return calculator.core.button.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return calculator.core.button.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28879.length)].join('')));

}
});

calculator.core.button.cljs$core$IFn$_invoke$arity$3 = (function (this$,action,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),calculator.style.button_styles.call(null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return om.next.transact_BANG_.call(null,this$,action);
})], null),label], null);
});

calculator.core.button.cljs$core$IFn$_invoke$arity$4 = (function (this$,style,action,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return om.next.transact_BANG_.call(null,this$,action);
})], null),label], null);
});

calculator.core.button.cljs$lang$maxFixedArity = 4;
/**
 * @constructor
 */
calculator.core.Calculator = (function calculator$core$Calculator(){
var this__26949__auto__ = this;
React.Component.apply(this__26949__auto__,arguments);

if(!((this__26949__auto__.initLocalState == null))){
this__26949__auto__.state = this__26949__auto__.initLocalState();
} else {
this__26949__auto__.state = {};
}

return this__26949__auto__;
});

calculator.core.Calculator.prototype = goog.object.clone(React.Component.prototype);

var x28890_28900 = calculator.core.Calculator.prototype;
x28890_28900.componentWillUpdate = ((function (x28890_28900){
return (function (next_props__26890__auto__,next_state__26891__auto__){
var this__26889__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__26889__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26889__auto__);
});})(x28890_28900))
;

x28890_28900.shouldComponentUpdate = ((function (x28890_28900){
return (function (next_props__26890__auto__,next_state__26891__auto__){
var this__26889__auto__ = this;
var or__25751__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__26889__auto__),goog.object.get(next_props__26890__auto__,"omcljs$value"));
if(or__25751__auto__){
return or__25751__auto__;
} else {
var and__25739__auto__ = this__26889__auto__.state;
if(cljs.core.truth_(and__25739__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__26889__auto__.state,"omcljs$state"),goog.object.get(next_state__26891__auto__,"omcljs$state"));
} else {
return and__25739__auto__;
}
}
});})(x28890_28900))
;

x28890_28900.componentWillUnmount = ((function (x28890_28900){
return (function (){
var this__26889__auto__ = this;
var r__26895__auto__ = om.next.get_reconciler.call(null,this__26889__auto__);
var cfg__26896__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__26895__auto__);
var st__26897__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__26896__auto__);
var indexer__26894__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__26896__auto__);
if((st__26897__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__26897__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__26889__auto__);
}

if((indexer__26894__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__26894__auto__,this__26889__auto__);
}
});})(x28890_28900))
;

x28890_28900.componentDidUpdate = ((function (x28890_28900){
return (function (prev_props__26892__auto__,prev_state__26893__auto__){
var this__26889__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26889__auto__);
});})(x28890_28900))
;

x28890_28900.isMounted = ((function (x28890_28900){
return (function (){
var this__26889__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26889__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28890_28900))
;

x28890_28900.componentWillMount = ((function (x28890_28900){
return (function (){
var this__26889__auto__ = this;
var indexer__26894__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26889__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26894__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26894__auto__,this__26889__auto__);
}
});})(x28890_28900))
;

x28890_28900.render = ((function (x28890_28900){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_28891 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28892 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28893 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28894 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28895 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__28896 = om.next.props.call(null,this$);
var map__28896__$1 = ((((!((map__28896 == null)))?((((map__28896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28896):map__28896);
var display = cljs.core.get.call(null,map__28896__$1,new cljs.core.Keyword(null,"display","display",242065432));
var buffer = cljs.core.get.call(null,map__28896__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var clear_display = cljs.core.get.call(null,map__28896__$1,new cljs.core.Keyword(null,"clear-display","clear-display",2121070457));
var op = cljs.core.get.call(null,map__28896__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.container_styles)},React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.display_styles)},sablono.interpreter.interpret.call(null,((!(cljs.core.empty_QMARK_.call(null,display)))?display:"0"))),React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.calculator_styles)},React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.row_styles)},sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"gray"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ac","ac",-251100948,null))], null),((cljs.core.empty_QMARK_.call(null,display))?"AC":"C"))),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"gray"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pm","pm",-840698341,null))], null),"+/-")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"gray"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pc","pc",-2141522316,null))], null),"%")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"orange"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"/"], null))], null),"/"))),React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.row_styles)},sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(7)], null))], null),"7")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(8)], null))], null),"8")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(9)], null))], null),"9")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"orange"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"*"], null))], null),"X"))),React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.row_styles)},sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(4)], null))], null),"4")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(5)], null))], null),"5")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(6)], null))], null),"6")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"orange"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"-"], null))], null),"-"))),React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.row_styles)},sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(1)], null))], null),"1")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(2)], null))], null),"2")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(3)], null))], null),"3")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"orange"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"+"], null))], null),"+"))),React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.row_styles)},sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"lightgray",(2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(0)], null))], null),"0")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null))], null),".")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"orange"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"eq","eq",1021992460,null))], null),"=")))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28895;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28894;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28893;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28892;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28891;
}});})(x28890_28900))
;


calculator.core.Calculator.prototype.constructor = calculator.core.Calculator;

calculator.core.Calculator.prototype.om$isComponent = true;

var x28898_28901 = calculator.core.Calculator;
x28898_28901.om$next$IQuery$ = true;

x28898_28901.om$next$IQuery$query$arity$1 = ((function (x28898_28901){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),new cljs.core.Keyword(null,"op","op",-1882987955)], null);
});})(x28898_28901))
;


var x28899_28902 = calculator.core.Calculator.prototype;
x28899_28902.om$next$IQuery$ = true;

x28899_28902.om$next$IQuery$query$arity$1 = ((function (x28899_28902){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),new cljs.core.Keyword(null,"op","op",-1882987955)], null);
});})(x28899_28902))
;


calculator.core.Calculator.cljs$lang$type = true;

calculator.core.Calculator.cljs$lang$ctorStr = "calculator.core/Calculator";

calculator.core.Calculator.cljs$lang$ctorPrWriter = (function (this__26951__auto__,writer__26952__auto__,opt__26953__auto__){
return cljs.core._write.call(null,writer__26952__auto__,"calculator.core/Calculator");
});
calculator.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),calculator.parser.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),calculator.parser.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),calculator.parser.mutate], null))], null));
om.next.add_root_BANG_.call(null,calculator.core.reconciler,calculator.core.Calculator,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map