// Compiled by ClojureScript 1.7.170 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.sanity_hints');
goog.require('devtools.dirac');
goog.require('devtools.custom_formatters');
goog.require('devtools.util');
goog.require('goog.userAgent');
devtools.core.known_features = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779),new cljs.core.Keyword(null,"install-custom-formatters","install-custom-formatters",-1653731327),new cljs.core.Keyword(null,"dirac","dirac",1785994033),new cljs.core.Keyword(null,"install-dirac-support","install-dirac-support",-949928649),new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858),new cljs.core.Keyword(null,"install-sanity-hints","install-sanity-hints",72546145)], null);
devtools.core.missing_feature_warning = (function devtools$core$missing_feature_warning(feature,known_features){
return [cljs.core.str("No such feature '"),cljs.core.str(feature),cljs.core.str("' is currently available in cljs-devtools. "),cljs.core.str("List of supported features:"),cljs.core.str(cljs.core.keys.call(null,known_features))].join('');
});
devtools.core.warn_feature_not_available = (function devtools$core$warn_feature_not_available(feature){
return console.warn([cljs.core.str("Feature '"),cljs.core.str(cljs.core.name.call(null,feature)),cljs.core.str("' cannot be installed. Unsupported browser "),cljs.core.str(goog.userAgent.getUserAgentString()),cljs.core.str(".")].join(''));
});
devtools.core.install_BANG_ = (function devtools$core$install_BANG_(){
devtools.util.display_banner.call(null,"Installing cljs-devtools:",devtools.core.known_features);

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-custom-formatters","install-custom-formatters",-1653731327)))){
if(cljs.core.truth_(devtools.custom_formatters.available_QMARK_.call(null))){
devtools.custom_formatters.install_BANG_.call(null);
} else {
devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779));
}
} else {
}

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-sanity-hints","install-sanity-hints",72546145)))){
if(cljs.core.truth_(devtools.sanity_hints.available_QMARK_.call(null))){
devtools.sanity_hints.install_BANG_.call(null);
} else {
devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858));
}
} else {
}

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-dirac-support","install-dirac-support",-949928649)))){
if(cljs.core.truth_(devtools.dirac.available_QMARK_.call(null))){
return devtools.dirac.install_BANG_.call(null);
} else {
return devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"dirac","dirac",1785994033));
}
} else {
return null;
}
});
devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.custom_formatters.uninstall_BANG_.call(null);

devtools.sanity_hints.uninstall_BANG_.call(null);

return devtools.dirac.uninstall_BANG_.call(null);
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(feature,val){
var temp__4423__auto__ = feature.call(null,devtools.core.known_features);
if(cljs.core.truth_(temp__4423__auto__)){
var feature_installation_key = temp__4423__auto__;
return devtools.core.set_pref_BANG_.call(null,feature_installation_key,val);
} else {
return console.warn(devtools.core.missing_feature_warning.call(null,feature,devtools.core.known_features));
}
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(feature){
return devtools.core.set_single_feature_BANG_.call(null,feature,true);
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(feature){
return devtools.core.set_single_feature_BANG_.call(null,feature,false);
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__26816__auto__ = [];
var len__26809__auto___27399 = arguments.length;
var i__26810__auto___27400 = (0);
while(true){
if((i__26810__auto___27400 < len__26809__auto___27399)){
args__26816__auto__.push((arguments[i__26810__auto___27400]));

var G__27401 = (i__26810__auto___27400 + (1));
i__26810__auto___27400 = G__27401;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((0) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((0)),(0))):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__26817__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__27395 = cljs.core.seq.call(null,features);
var chunk__27396 = null;
var count__27397 = (0);
var i__27398 = (0);
while(true){
if((i__27398 < count__27397)){
var feature = cljs.core._nth.call(null,chunk__27396,i__27398);
devtools.core.enable_single_feature_BANG_.call(null,feature);

var G__27402 = seq__27395;
var G__27403 = chunk__27396;
var G__27404 = count__27397;
var G__27405 = (i__27398 + (1));
seq__27395 = G__27402;
chunk__27396 = G__27403;
count__27397 = G__27404;
i__27398 = G__27405;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27395);
if(temp__4425__auto__){
var seq__27395__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27395__$1)){
var c__26554__auto__ = cljs.core.chunk_first.call(null,seq__27395__$1);
var G__27406 = cljs.core.chunk_rest.call(null,seq__27395__$1);
var G__27407 = c__26554__auto__;
var G__27408 = cljs.core.count.call(null,c__26554__auto__);
var G__27409 = (0);
seq__27395 = G__27406;
chunk__27396 = G__27407;
count__27397 = G__27408;
i__27398 = G__27409;
continue;
} else {
var feature = cljs.core.first.call(null,seq__27395__$1);
devtools.core.enable_single_feature_BANG_.call(null,feature);

var G__27410 = cljs.core.next.call(null,seq__27395__$1);
var G__27411 = null;
var G__27412 = (0);
var G__27413 = (0);
seq__27395 = G__27410;
chunk__27396 = G__27411;
count__27397 = G__27412;
i__27398 = G__27413;
continue;
}
} else {
return null;
}
}
break;
}
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq27394){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27394));
});
devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__26816__auto__ = [];
var len__26809__auto___27419 = arguments.length;
var i__26810__auto___27420 = (0);
while(true){
if((i__26810__auto___27420 < len__26809__auto___27419)){
args__26816__auto__.push((arguments[i__26810__auto___27420]));

var G__27421 = (i__26810__auto___27420 + (1));
i__26810__auto___27420 = G__27421;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((0) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((0)),(0))):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__26817__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__27415 = cljs.core.seq.call(null,features);
var chunk__27416 = null;
var count__27417 = (0);
var i__27418 = (0);
while(true){
if((i__27418 < count__27417)){
var feature = cljs.core._nth.call(null,chunk__27416,i__27418);
devtools.core.disable_single_feature_BANG_.call(null,feature);

var G__27422 = seq__27415;
var G__27423 = chunk__27416;
var G__27424 = count__27417;
var G__27425 = (i__27418 + (1));
seq__27415 = G__27422;
chunk__27416 = G__27423;
count__27417 = G__27424;
i__27418 = G__27425;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27415);
if(temp__4425__auto__){
var seq__27415__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27415__$1)){
var c__26554__auto__ = cljs.core.chunk_first.call(null,seq__27415__$1);
var G__27426 = cljs.core.chunk_rest.call(null,seq__27415__$1);
var G__27427 = c__26554__auto__;
var G__27428 = cljs.core.count.call(null,c__26554__auto__);
var G__27429 = (0);
seq__27415 = G__27426;
chunk__27416 = G__27427;
count__27417 = G__27428;
i__27418 = G__27429;
continue;
} else {
var feature = cljs.core.first.call(null,seq__27415__$1);
devtools.core.disable_single_feature_BANG_.call(null,feature);

var G__27430 = cljs.core.next.call(null,seq__27415__$1);
var G__27431 = null;
var G__27432 = (0);
var G__27433 = (0);
seq__27415 = G__27430;
chunk__27416 = G__27431;
count__27417 = G__27432;
i__27418 = G__27433;
continue;
}
} else {
return null;
}
}
break;
}
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq27414){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27414));
});
devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(feature){
var G__27435 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__27435) {
case "custom-formatters":
return devtools.custom_formatters.available_QMARK_.call(null);

break;
case "dirac":
return devtools.dirac.available_QMARK_.call(null);

break;
case "sanity-hints":
return devtools.sanity_hints.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__26816__auto__ = [];
var len__26809__auto___27438 = arguments.length;
var i__26810__auto___27439 = (0);
while(true){
if((i__26810__auto___27439 < len__26809__auto___27438)){
args__26816__auto__.push((arguments[i__26810__auto___27439]));

var G__27440 = (i__26810__auto___27439 + (1));
i__26810__auto___27439 = G__27440;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((0) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((0)),(0))):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__26817__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
return cljs.core.every_QMARK_.call(null,devtools.core.single_feature_available_QMARK_,features);
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq27437){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27437));
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});

//# sourceMappingURL=core.js.map