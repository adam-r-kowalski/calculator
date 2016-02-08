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
var args36974 = [];
var len__26809__auto___36977 = arguments.length;
var i__26810__auto___36978 = (0);
while(true){
if((i__26810__auto___36978 < len__26809__auto___36977)){
args36974.push((arguments[i__26810__auto___36978]));

var G__36979 = (i__26810__auto___36978 + (1));
i__26810__auto___36978 = G__36979;
continue;
} else {
}
break;
}

var G__36976 = args36974.length;
switch (G__36976) {
case 3:
return calculator.core.button.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return calculator.core.button.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36974.length)].join('')));

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
var this__28380__auto__ = this;
React.Component.apply(this__28380__auto__,arguments);

if(!((this__28380__auto__.initLocalState == null))){
this__28380__auto__.state = this__28380__auto__.initLocalState();
} else {
this__28380__auto__.state = {};
}

return this__28380__auto__;
});

calculator.core.Calculator.prototype = goog.object.clone(React.Component.prototype);

var x36985_36995 = calculator.core.Calculator.prototype;
x36985_36995.componentWillUpdate = ((function (x36985_36995){
return (function (next_props__28321__auto__,next_state__28322__auto__){
var this__28320__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__28320__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__28320__auto__);
});})(x36985_36995))
;

x36985_36995.shouldComponentUpdate = ((function (x36985_36995){
return (function (next_props__28321__auto__,next_state__28322__auto__){
var this__28320__auto__ = this;
var or__25751__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__28320__auto__),goog.object.get(next_props__28321__auto__,"omcljs$value"));
if(or__25751__auto__){
return or__25751__auto__;
} else {
var and__25739__auto__ = this__28320__auto__.state;
if(cljs.core.truth_(and__25739__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__28320__auto__.state,"omcljs$state"),goog.object.get(next_state__28322__auto__,"omcljs$state"));
} else {
return and__25739__auto__;
}
}
});})(x36985_36995))
;

x36985_36995.componentWillUnmount = ((function (x36985_36995){
return (function (){
var this__28320__auto__ = this;
var r__28326__auto__ = om.next.get_reconciler.call(null,this__28320__auto__);
var cfg__28327__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__28326__auto__);
var st__28328__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__28327__auto__);
var indexer__28325__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__28327__auto__);
if((st__28328__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__28328__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__28320__auto__);
}

if((indexer__28325__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__28325__auto__,this__28320__auto__);
}
});})(x36985_36995))
;

x36985_36995.componentDidUpdate = ((function (x36985_36995){
return (function (prev_props__28323__auto__,prev_state__28324__auto__){
var this__28320__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__28320__auto__);
});})(x36985_36995))
;

x36985_36995.isMounted = ((function (x36985_36995){
return (function (){
var this__28320__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__28320__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x36985_36995))
;

x36985_36995.componentWillMount = ((function (x36985_36995){
return (function (){
var this__28320__auto__ = this;
var indexer__28325__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28320__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28325__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__28325__auto__,this__28320__auto__);
}
});})(x36985_36995))
;

x36985_36995.render = ((function (x36985_36995){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_36986 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_36987 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_36988 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_36989 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_36990 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__36991 = om.next.props.call(null,this$);
var map__36991__$1 = ((((!((map__36991 == null)))?((((map__36991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36991):map__36991);
var display = cljs.core.get.call(null,map__36991__$1,new cljs.core.Keyword(null,"display","display",242065432));
var buffer = cljs.core.get.call(null,map__36991__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var clear_display = cljs.core.get.call(null,map__36991__$1,new cljs.core.Keyword(null,"clear-display","clear-display",2121070457));
var op = cljs.core.get.call(null,map__36991__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.container_styles)},React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.display_styles)},sablono.interpreter.interpret.call(null,((!(cljs.core.empty_QMARK_.call(null,display)))?display:"0"))),React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.calculator_styles)},React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.row_styles)},sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"gray"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ac","ac",-251100948,null))], null),((cljs.core.empty_QMARK_.call(null,display))?"AC":"C"))),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"gray"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pm","pm",-840698341,null))], null),"+/-")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"gray"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pc","pc",-2141522316,null))], null),"%")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"orange"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"/"], null))], null),"/"))),React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.row_styles)},sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(7)], null))], null),"7")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(8)], null))], null),"8")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(9)], null))], null),"9")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"orange"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"*"], null))], null),"X"))),React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.row_styles)},sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(4)], null))], null),"4")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(5)], null))], null),"5")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(6)], null))], null),"6")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"orange"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"-"], null))], null),"-"))),React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.row_styles)},sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(1)], null))], null),"1")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(2)], null))], null),"2")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(3)], null))], null),"3")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"orange"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"+"], null))], null),"+"))),React.createElement("div",{"style": cljs.core.clj__GT_js.call(null,calculator.style.row_styles)},sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"lightgray",(2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(0)], null))], null),"0")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null))], null),".")),sablono.interpreter.interpret.call(null,calculator.core.button.call(null,this$,calculator.style.button_styles.call(null,"orange"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"eq","eq",1021992460,null))], null),"=")))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_36990;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_36989;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_36988;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_36987;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_36986;
}});})(x36985_36995))
;


calculator.core.Calculator.prototype.constructor = calculator.core.Calculator;

calculator.core.Calculator.prototype.om$isComponent = true;

var x36993_36996 = calculator.core.Calculator;
x36993_36996.om$next$IQuery$ = true;

x36993_36996.om$next$IQuery$query$arity$1 = ((function (x36993_36996){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),new cljs.core.Keyword(null,"op","op",-1882987955)], null);
});})(x36993_36996))
;


var x36994_36997 = calculator.core.Calculator.prototype;
x36994_36997.om$next$IQuery$ = true;

x36994_36997.om$next$IQuery$query$arity$1 = ((function (x36994_36997){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"clear-display","clear-display",2121070457),new cljs.core.Keyword(null,"op","op",-1882987955)], null);
});})(x36994_36997))
;


calculator.core.Calculator.cljs$lang$type = true;

calculator.core.Calculator.cljs$lang$ctorStr = "calculator.core/Calculator";

calculator.core.Calculator.cljs$lang$ctorPrWriter = (function (this__28382__auto__,writer__28383__auto__,opt__28384__auto__){
return cljs.core._write.call(null,writer__28383__auto__,"calculator.core/Calculator");
});
calculator.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),calculator.parser.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),calculator.parser.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),calculator.parser.mutate], null))], null));
om.next.add_root_BANG_.call(null,calculator.core.reconciler,calculator.core.Calculator,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map