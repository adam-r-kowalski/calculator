// Compiled by ClojureScript 1.7.170 {}
goog.provide('devtools.util');
goog.require('cljs.core');
goog.require('devtools.prefs');
devtools.util.feature_for_display = (function devtools$util$feature_for_display(known_features,feature){
var feature_installation_key = feature.call(null,known_features);
var enabled_QMARK_ = devtools.prefs.pref.call(null,feature_installation_key);
var color = (cljs.core.truth_(enabled_QMARK_)?"color:#0000ff":"color:#aaaaaa");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,cljs.core.name.call(null,feature)], null)], null);
});
devtools.util.feature_list_display = (function devtools$util$feature_list_display(known_features){
var features = cljs.core.keys.call(null,known_features);
var labels = cljs.core.map.call(null,cljs.core.partial.call(null,devtools.util.feature_for_display,known_features),features);
var _STAR_ = ((function (features,labels){
return (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.first.call(null,accum)),cljs.core.str(" "),cljs.core.str(cljs.core.first.call(null,val))].join(''),cljs.core.concat.call(null,cljs.core.second.call(null,accum),cljs.core.second.call(null,val))], null);
});})(features,labels))
;
return cljs.core.reduce.call(null,_STAR_,cljs.core.first.call(null,labels),cljs.core.rest.call(null,labels));
});
devtools.util.log_info = (function devtools$util$log_info(var_args){
var args__26816__auto__ = [];
var len__26809__auto___27293 = arguments.length;
var i__26810__auto___27294 = (0);
while(true){
if((i__26810__auto___27294 < len__26809__auto___27293)){
args__26816__auto__.push((arguments[i__26810__auto___27294]));

var G__27295 = (i__26810__auto___27294 + (1));
i__26810__auto___27294 = G__27295;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((0) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((0)),(0))):null);
return devtools.util.log_info.cljs$core$IFn$_invoke$arity$variadic(argseq__26817__auto__);
});

devtools.util.log_info.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.info.apply(console,cljs.core.to_array.call(null,args));
});

devtools.util.log_info.cljs$lang$maxFixedArity = (0);

devtools.util.log_info.cljs$lang$applyTo = (function (seq27292){
return devtools.util.log_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27292));
});
devtools.util.display_banner = (function devtools$util$display_banner(prefix,known_features){
if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370)))){
return null;
} else {
var vec__27297 = devtools.util.feature_list_display.call(null,known_features);
var fmt_str = cljs.core.nth.call(null,vec__27297,(0),null);
var params = cljs.core.nth.call(null,vec__27297,(1),null);
return cljs.core.apply.call(null,devtools.util.log_info,[cljs.core.str(prefix),cljs.core.str(" "),cljs.core.str(fmt_str)].join(''),params);
}
});

//# sourceMappingURL=util.js.map