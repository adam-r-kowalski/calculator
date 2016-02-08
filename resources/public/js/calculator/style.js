// Compiled by ClojureScript 1.7.170 {}
goog.provide('calculator.style');
goog.require('cljs.core');
cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"c","c",-1763192079),(3),new cljs.core.Keyword(null,"b","b",1482224470),(3)], null)], null));
calculator.style.column = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null);
calculator.style.center = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null);
calculator.style.bottom_right = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-end"], null);
calculator.style.container_styles = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.style.column,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Advent Pro', sans-serif"], null)], null));
calculator.style.display_styles = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.style.bottom_right,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 25px 15px 0",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"72px",new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null));
calculator.style.calculator_styles = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.style.column,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(3),new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null)], null));
calculator.style.row_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex"], null);
calculator.style.button_styles = (function calculator$style$button_styles(var_args){
var args31881 = [];
var len__26809__auto___31884 = arguments.length;
var i__26810__auto___31885 = (0);
while(true){
if((i__26810__auto___31885 < len__26809__auto___31884)){
args31881.push((arguments[i__26810__auto___31885]));

var G__31886 = (i__26810__auto___31885 + (1));
i__26810__auto___31885 = G__31886;
continue;
} else {
}
break;
}

var G__31883 = args31881.length;
switch (G__31883) {
case 0:
return calculator.style.button_styles.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return calculator.style.button_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return calculator.style.button_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31881.length)].join('')));

}
});

calculator.style.button_styles.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.style.center,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgray",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"32px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #333",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"1px solid #333",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null));
});

calculator.style.button_styles.cljs$core$IFn$_invoke$arity$1 = (function (c){
return cljs.core.merge.call(null,calculator.style.button_styles.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),c], null));
});

calculator.style.button_styles.cljs$core$IFn$_invoke$arity$2 = (function (c,f){
return cljs.core.merge.call(null,calculator.style.button_styles.call(null,c),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),f], null));
});

calculator.style.button_styles.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=style.js.map