// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38324_38338 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38325_38339 = null;
var count__38326_38340 = (0);
var i__38327_38341 = (0);
while(true){
if((i__38327_38341 < count__38326_38340)){
var f_38342 = cljs.core._nth.call(null,chunk__38325_38339,i__38327_38341);
cljs.core.println.call(null,"  ",f_38342);

var G__38343 = seq__38324_38338;
var G__38344 = chunk__38325_38339;
var G__38345 = count__38326_38340;
var G__38346 = (i__38327_38341 + (1));
seq__38324_38338 = G__38343;
chunk__38325_38339 = G__38344;
count__38326_38340 = G__38345;
i__38327_38341 = G__38346;
continue;
} else {
var temp__4425__auto___38347 = cljs.core.seq.call(null,seq__38324_38338);
if(temp__4425__auto___38347){
var seq__38324_38348__$1 = temp__4425__auto___38347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38324_38348__$1)){
var c__26554__auto___38349 = cljs.core.chunk_first.call(null,seq__38324_38348__$1);
var G__38350 = cljs.core.chunk_rest.call(null,seq__38324_38348__$1);
var G__38351 = c__26554__auto___38349;
var G__38352 = cljs.core.count.call(null,c__26554__auto___38349);
var G__38353 = (0);
seq__38324_38338 = G__38350;
chunk__38325_38339 = G__38351;
count__38326_38340 = G__38352;
i__38327_38341 = G__38353;
continue;
} else {
var f_38354 = cljs.core.first.call(null,seq__38324_38348__$1);
cljs.core.println.call(null,"  ",f_38354);

var G__38355 = cljs.core.next.call(null,seq__38324_38348__$1);
var G__38356 = null;
var G__38357 = (0);
var G__38358 = (0);
seq__38324_38338 = G__38355;
chunk__38325_38339 = G__38356;
count__38326_38340 = G__38357;
i__38327_38341 = G__38358;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38359 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38359);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38359)))?cljs.core.second.call(null,arglists_38359):arglists_38359));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38328 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38329 = null;
var count__38330 = (0);
var i__38331 = (0);
while(true){
if((i__38331 < count__38330)){
var vec__38332 = cljs.core._nth.call(null,chunk__38329,i__38331);
var name = cljs.core.nth.call(null,vec__38332,(0),null);
var map__38333 = cljs.core.nth.call(null,vec__38332,(1),null);
var map__38333__$1 = ((((!((map__38333 == null)))?((((map__38333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38333):map__38333);
var doc = cljs.core.get.call(null,map__38333__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__38333__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__38360 = seq__38328;
var G__38361 = chunk__38329;
var G__38362 = count__38330;
var G__38363 = (i__38331 + (1));
seq__38328 = G__38360;
chunk__38329 = G__38361;
count__38330 = G__38362;
i__38331 = G__38363;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38328);
if(temp__4425__auto__){
var seq__38328__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38328__$1)){
var c__26554__auto__ = cljs.core.chunk_first.call(null,seq__38328__$1);
var G__38364 = cljs.core.chunk_rest.call(null,seq__38328__$1);
var G__38365 = c__26554__auto__;
var G__38366 = cljs.core.count.call(null,c__26554__auto__);
var G__38367 = (0);
seq__38328 = G__38364;
chunk__38329 = G__38365;
count__38330 = G__38366;
i__38331 = G__38367;
continue;
} else {
var vec__38335 = cljs.core.first.call(null,seq__38328__$1);
var name = cljs.core.nth.call(null,vec__38335,(0),null);
var map__38336 = cljs.core.nth.call(null,vec__38335,(1),null);
var map__38336__$1 = ((((!((map__38336 == null)))?((((map__38336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38336):map__38336);
var doc = cljs.core.get.call(null,map__38336__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__38336__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__38368 = cljs.core.next.call(null,seq__38328__$1);
var G__38369 = null;
var G__38370 = (0);
var G__38371 = (0);
seq__38328 = G__38368;
chunk__38329 = G__38369;
count__38330 = G__38370;
i__38331 = G__38371;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map