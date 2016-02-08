// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25751__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25751__auto__){
return or__25751__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25751__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36408_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36408_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36413 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36414 = null;
var count__36415 = (0);
var i__36416 = (0);
while(true){
if((i__36416 < count__36415)){
var n = cljs.core._nth.call(null,chunk__36414,i__36416);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36417 = seq__36413;
var G__36418 = chunk__36414;
var G__36419 = count__36415;
var G__36420 = (i__36416 + (1));
seq__36413 = G__36417;
chunk__36414 = G__36418;
count__36415 = G__36419;
i__36416 = G__36420;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36413);
if(temp__4425__auto__){
var seq__36413__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36413__$1)){
var c__26554__auto__ = cljs.core.chunk_first.call(null,seq__36413__$1);
var G__36421 = cljs.core.chunk_rest.call(null,seq__36413__$1);
var G__36422 = c__26554__auto__;
var G__36423 = cljs.core.count.call(null,c__26554__auto__);
var G__36424 = (0);
seq__36413 = G__36421;
chunk__36414 = G__36422;
count__36415 = G__36423;
i__36416 = G__36424;
continue;
} else {
var n = cljs.core.first.call(null,seq__36413__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36425 = cljs.core.next.call(null,seq__36413__$1);
var G__36426 = null;
var G__36427 = (0);
var G__36428 = (0);
seq__36413 = G__36425;
chunk__36414 = G__36426;
count__36415 = G__36427;
i__36416 = G__36428;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36467_36474 = cljs.core.seq.call(null,deps);
var chunk__36468_36475 = null;
var count__36469_36476 = (0);
var i__36470_36477 = (0);
while(true){
if((i__36470_36477 < count__36469_36476)){
var dep_36478 = cljs.core._nth.call(null,chunk__36468_36475,i__36470_36477);
topo_sort_helper_STAR_.call(null,dep_36478,(depth + (1)),state);

var G__36479 = seq__36467_36474;
var G__36480 = chunk__36468_36475;
var G__36481 = count__36469_36476;
var G__36482 = (i__36470_36477 + (1));
seq__36467_36474 = G__36479;
chunk__36468_36475 = G__36480;
count__36469_36476 = G__36481;
i__36470_36477 = G__36482;
continue;
} else {
var temp__4425__auto___36483 = cljs.core.seq.call(null,seq__36467_36474);
if(temp__4425__auto___36483){
var seq__36467_36484__$1 = temp__4425__auto___36483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36467_36484__$1)){
var c__26554__auto___36485 = cljs.core.chunk_first.call(null,seq__36467_36484__$1);
var G__36486 = cljs.core.chunk_rest.call(null,seq__36467_36484__$1);
var G__36487 = c__26554__auto___36485;
var G__36488 = cljs.core.count.call(null,c__26554__auto___36485);
var G__36489 = (0);
seq__36467_36474 = G__36486;
chunk__36468_36475 = G__36487;
count__36469_36476 = G__36488;
i__36470_36477 = G__36489;
continue;
} else {
var dep_36490 = cljs.core.first.call(null,seq__36467_36484__$1);
topo_sort_helper_STAR_.call(null,dep_36490,(depth + (1)),state);

var G__36491 = cljs.core.next.call(null,seq__36467_36484__$1);
var G__36492 = null;
var G__36493 = (0);
var G__36494 = (0);
seq__36467_36474 = G__36491;
chunk__36468_36475 = G__36492;
count__36469_36476 = G__36493;
i__36470_36477 = G__36494;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36471){
var vec__36473 = p__36471;
var x = cljs.core.nth.call(null,vec__36473,(0),null);
var xs = cljs.core.nthnext.call(null,vec__36473,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36473,x,xs,get_deps__$1){
return (function (p1__36429_SHARP_){
return clojure.set.difference.call(null,p1__36429_SHARP_,x);
});})(vec__36473,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36507 = cljs.core.seq.call(null,provides);
var chunk__36508 = null;
var count__36509 = (0);
var i__36510 = (0);
while(true){
if((i__36510 < count__36509)){
var prov = cljs.core._nth.call(null,chunk__36508,i__36510);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36511_36519 = cljs.core.seq.call(null,requires);
var chunk__36512_36520 = null;
var count__36513_36521 = (0);
var i__36514_36522 = (0);
while(true){
if((i__36514_36522 < count__36513_36521)){
var req_36523 = cljs.core._nth.call(null,chunk__36512_36520,i__36514_36522);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36523,prov);

var G__36524 = seq__36511_36519;
var G__36525 = chunk__36512_36520;
var G__36526 = count__36513_36521;
var G__36527 = (i__36514_36522 + (1));
seq__36511_36519 = G__36524;
chunk__36512_36520 = G__36525;
count__36513_36521 = G__36526;
i__36514_36522 = G__36527;
continue;
} else {
var temp__4425__auto___36528 = cljs.core.seq.call(null,seq__36511_36519);
if(temp__4425__auto___36528){
var seq__36511_36529__$1 = temp__4425__auto___36528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36511_36529__$1)){
var c__26554__auto___36530 = cljs.core.chunk_first.call(null,seq__36511_36529__$1);
var G__36531 = cljs.core.chunk_rest.call(null,seq__36511_36529__$1);
var G__36532 = c__26554__auto___36530;
var G__36533 = cljs.core.count.call(null,c__26554__auto___36530);
var G__36534 = (0);
seq__36511_36519 = G__36531;
chunk__36512_36520 = G__36532;
count__36513_36521 = G__36533;
i__36514_36522 = G__36534;
continue;
} else {
var req_36535 = cljs.core.first.call(null,seq__36511_36529__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36535,prov);

var G__36536 = cljs.core.next.call(null,seq__36511_36529__$1);
var G__36537 = null;
var G__36538 = (0);
var G__36539 = (0);
seq__36511_36519 = G__36536;
chunk__36512_36520 = G__36537;
count__36513_36521 = G__36538;
i__36514_36522 = G__36539;
continue;
}
} else {
}
}
break;
}

var G__36540 = seq__36507;
var G__36541 = chunk__36508;
var G__36542 = count__36509;
var G__36543 = (i__36510 + (1));
seq__36507 = G__36540;
chunk__36508 = G__36541;
count__36509 = G__36542;
i__36510 = G__36543;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36507);
if(temp__4425__auto__){
var seq__36507__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36507__$1)){
var c__26554__auto__ = cljs.core.chunk_first.call(null,seq__36507__$1);
var G__36544 = cljs.core.chunk_rest.call(null,seq__36507__$1);
var G__36545 = c__26554__auto__;
var G__36546 = cljs.core.count.call(null,c__26554__auto__);
var G__36547 = (0);
seq__36507 = G__36544;
chunk__36508 = G__36545;
count__36509 = G__36546;
i__36510 = G__36547;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36507__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36515_36548 = cljs.core.seq.call(null,requires);
var chunk__36516_36549 = null;
var count__36517_36550 = (0);
var i__36518_36551 = (0);
while(true){
if((i__36518_36551 < count__36517_36550)){
var req_36552 = cljs.core._nth.call(null,chunk__36516_36549,i__36518_36551);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36552,prov);

var G__36553 = seq__36515_36548;
var G__36554 = chunk__36516_36549;
var G__36555 = count__36517_36550;
var G__36556 = (i__36518_36551 + (1));
seq__36515_36548 = G__36553;
chunk__36516_36549 = G__36554;
count__36517_36550 = G__36555;
i__36518_36551 = G__36556;
continue;
} else {
var temp__4425__auto___36557__$1 = cljs.core.seq.call(null,seq__36515_36548);
if(temp__4425__auto___36557__$1){
var seq__36515_36558__$1 = temp__4425__auto___36557__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36515_36558__$1)){
var c__26554__auto___36559 = cljs.core.chunk_first.call(null,seq__36515_36558__$1);
var G__36560 = cljs.core.chunk_rest.call(null,seq__36515_36558__$1);
var G__36561 = c__26554__auto___36559;
var G__36562 = cljs.core.count.call(null,c__26554__auto___36559);
var G__36563 = (0);
seq__36515_36548 = G__36560;
chunk__36516_36549 = G__36561;
count__36517_36550 = G__36562;
i__36518_36551 = G__36563;
continue;
} else {
var req_36564 = cljs.core.first.call(null,seq__36515_36558__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36564,prov);

var G__36565 = cljs.core.next.call(null,seq__36515_36558__$1);
var G__36566 = null;
var G__36567 = (0);
var G__36568 = (0);
seq__36515_36548 = G__36565;
chunk__36516_36549 = G__36566;
count__36517_36550 = G__36567;
i__36518_36551 = G__36568;
continue;
}
} else {
}
}
break;
}

var G__36569 = cljs.core.next.call(null,seq__36507__$1);
var G__36570 = null;
var G__36571 = (0);
var G__36572 = (0);
seq__36507 = G__36569;
chunk__36508 = G__36570;
count__36509 = G__36571;
i__36510 = G__36572;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36577_36581 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36578_36582 = null;
var count__36579_36583 = (0);
var i__36580_36584 = (0);
while(true){
if((i__36580_36584 < count__36579_36583)){
var ns_36585 = cljs.core._nth.call(null,chunk__36578_36582,i__36580_36584);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36585);

var G__36586 = seq__36577_36581;
var G__36587 = chunk__36578_36582;
var G__36588 = count__36579_36583;
var G__36589 = (i__36580_36584 + (1));
seq__36577_36581 = G__36586;
chunk__36578_36582 = G__36587;
count__36579_36583 = G__36588;
i__36580_36584 = G__36589;
continue;
} else {
var temp__4425__auto___36590 = cljs.core.seq.call(null,seq__36577_36581);
if(temp__4425__auto___36590){
var seq__36577_36591__$1 = temp__4425__auto___36590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36577_36591__$1)){
var c__26554__auto___36592 = cljs.core.chunk_first.call(null,seq__36577_36591__$1);
var G__36593 = cljs.core.chunk_rest.call(null,seq__36577_36591__$1);
var G__36594 = c__26554__auto___36592;
var G__36595 = cljs.core.count.call(null,c__26554__auto___36592);
var G__36596 = (0);
seq__36577_36581 = G__36593;
chunk__36578_36582 = G__36594;
count__36579_36583 = G__36595;
i__36580_36584 = G__36596;
continue;
} else {
var ns_36597 = cljs.core.first.call(null,seq__36577_36591__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36597);

var G__36598 = cljs.core.next.call(null,seq__36577_36591__$1);
var G__36599 = null;
var G__36600 = (0);
var G__36601 = (0);
seq__36577_36581 = G__36598;
chunk__36578_36582 = G__36599;
count__36579_36583 = G__36600;
i__36580_36584 = G__36601;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25751__auto__ = goog.require__;
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36602__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36603__i = 0, G__36603__a = new Array(arguments.length -  0);
while (G__36603__i < G__36603__a.length) {G__36603__a[G__36603__i] = arguments[G__36603__i + 0]; ++G__36603__i;}
  args = new cljs.core.IndexedSeq(G__36603__a,0);
} 
return G__36602__delegate.call(this,args);};
G__36602.cljs$lang$maxFixedArity = 0;
G__36602.cljs$lang$applyTo = (function (arglist__36604){
var args = cljs.core.seq(arglist__36604);
return G__36602__delegate(args);
});
G__36602.cljs$core$IFn$_invoke$arity$variadic = G__36602__delegate;
return G__36602;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36606 = cljs.core._EQ_;
var expr__36607 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36606.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36607))){
var path_parts = ((function (pred__36606,expr__36607){
return (function (p1__36605_SHARP_){
return clojure.string.split.call(null,p1__36605_SHARP_,/[\/\\]/);
});})(pred__36606,expr__36607))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__36606,expr__36607){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36609){if((e36609 instanceof Error)){
var e = e36609;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36609;

}
}})());
});
;})(path_parts,sep,root,pred__36606,expr__36607))
} else {
if(cljs.core.truth_(pred__36606.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36607))){
return ((function (pred__36606,expr__36607){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__36606,expr__36607){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__36606,expr__36607))
);

return deferred.addErrback(((function (deferred,pred__36606,expr__36607){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__36606,expr__36607))
);
});
;})(pred__36606,expr__36607))
} else {
return ((function (pred__36606,expr__36607){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36606,expr__36607))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36610,callback){
var map__36613 = p__36610;
var map__36613__$1 = ((((!((map__36613 == null)))?((((map__36613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36613):map__36613);
var file_msg = map__36613__$1;
var request_url = cljs.core.get.call(null,map__36613__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36613,map__36613__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36613,map__36613__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33426__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto__){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto__){
return (function (state_36637){
var state_val_36638 = (state_36637[(1)]);
if((state_val_36638 === (7))){
var inst_36633 = (state_36637[(2)]);
var state_36637__$1 = state_36637;
var statearr_36639_36659 = state_36637__$1;
(statearr_36639_36659[(2)] = inst_36633);

(statearr_36639_36659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (1))){
var state_36637__$1 = state_36637;
var statearr_36640_36660 = state_36637__$1;
(statearr_36640_36660[(2)] = null);

(statearr_36640_36660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (4))){
var inst_36617 = (state_36637[(7)]);
var inst_36617__$1 = (state_36637[(2)]);
var state_36637__$1 = (function (){var statearr_36641 = state_36637;
(statearr_36641[(7)] = inst_36617__$1);

return statearr_36641;
})();
if(cljs.core.truth_(inst_36617__$1)){
var statearr_36642_36661 = state_36637__$1;
(statearr_36642_36661[(1)] = (5));

} else {
var statearr_36643_36662 = state_36637__$1;
(statearr_36643_36662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (6))){
var state_36637__$1 = state_36637;
var statearr_36644_36663 = state_36637__$1;
(statearr_36644_36663[(2)] = null);

(statearr_36644_36663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (3))){
var inst_36635 = (state_36637[(2)]);
var state_36637__$1 = state_36637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36637__$1,inst_36635);
} else {
if((state_val_36638 === (2))){
var state_36637__$1 = state_36637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36637__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36638 === (11))){
var inst_36629 = (state_36637[(2)]);
var state_36637__$1 = (function (){var statearr_36645 = state_36637;
(statearr_36645[(8)] = inst_36629);

return statearr_36645;
})();
var statearr_36646_36664 = state_36637__$1;
(statearr_36646_36664[(2)] = null);

(statearr_36646_36664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (9))){
var inst_36621 = (state_36637[(9)]);
var inst_36623 = (state_36637[(10)]);
var inst_36625 = inst_36623.call(null,inst_36621);
var state_36637__$1 = state_36637;
var statearr_36647_36665 = state_36637__$1;
(statearr_36647_36665[(2)] = inst_36625);

(statearr_36647_36665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (5))){
var inst_36617 = (state_36637[(7)]);
var inst_36619 = figwheel.client.file_reloading.blocking_load.call(null,inst_36617);
var state_36637__$1 = state_36637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36637__$1,(8),inst_36619);
} else {
if((state_val_36638 === (10))){
var inst_36621 = (state_36637[(9)]);
var inst_36627 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36621);
var state_36637__$1 = state_36637;
var statearr_36648_36666 = state_36637__$1;
(statearr_36648_36666[(2)] = inst_36627);

(statearr_36648_36666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (8))){
var inst_36617 = (state_36637[(7)]);
var inst_36623 = (state_36637[(10)]);
var inst_36621 = (state_36637[(2)]);
var inst_36622 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36623__$1 = cljs.core.get.call(null,inst_36622,inst_36617);
var state_36637__$1 = (function (){var statearr_36649 = state_36637;
(statearr_36649[(9)] = inst_36621);

(statearr_36649[(10)] = inst_36623__$1);

return statearr_36649;
})();
if(cljs.core.truth_(inst_36623__$1)){
var statearr_36650_36667 = state_36637__$1;
(statearr_36650_36667[(1)] = (9));

} else {
var statearr_36651_36668 = state_36637__$1;
(statearr_36651_36668[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33426__auto__))
;
return ((function (switch__33314__auto__,c__33426__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33315__auto__ = null;
var figwheel$client$file_reloading$state_machine__33315__auto____0 = (function (){
var statearr_36655 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36655[(0)] = figwheel$client$file_reloading$state_machine__33315__auto__);

(statearr_36655[(1)] = (1));

return statearr_36655;
});
var figwheel$client$file_reloading$state_machine__33315__auto____1 = (function (state_36637){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_36637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e36656){if((e36656 instanceof Object)){
var ex__33318__auto__ = e36656;
var statearr_36657_36669 = state_36637;
(statearr_36657_36669[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36670 = state_36637;
state_36637 = G__36670;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33315__auto__ = function(state_36637){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33315__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33315__auto____1.call(this,state_36637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33315__auto____0;
figwheel$client$file_reloading$state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33315__auto____1;
return figwheel$client$file_reloading$state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto__))
})();
var state__33428__auto__ = (function (){var statearr_36658 = f__33427__auto__.call(null);
(statearr_36658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto__);

return statearr_36658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto__))
);

return c__33426__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36671,callback){
var map__36674 = p__36671;
var map__36674__$1 = ((((!((map__36674 == null)))?((((map__36674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36674):map__36674);
var file_msg = map__36674__$1;
var namespace = cljs.core.get.call(null,map__36674__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36674,map__36674__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36674,map__36674__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36676){
var map__36679 = p__36676;
var map__36679__$1 = ((((!((map__36679 == null)))?((((map__36679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36679):map__36679);
var file_msg = map__36679__$1;
var namespace = cljs.core.get.call(null,map__36679__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25739__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25739__auto__){
var or__25751__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
var or__25751__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25751__auto____$1)){
return or__25751__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25739__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36681,callback){
var map__36684 = p__36681;
var map__36684__$1 = ((((!((map__36684 == null)))?((((map__36684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36684):map__36684);
var file_msg = map__36684__$1;
var request_url = cljs.core.get.call(null,map__36684__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33426__auto___36772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___36772,out){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___36772,out){
return (function (state_36754){
var state_val_36755 = (state_36754[(1)]);
if((state_val_36755 === (1))){
var inst_36732 = cljs.core.nth.call(null,files,(0),null);
var inst_36733 = cljs.core.nthnext.call(null,files,(1));
var inst_36734 = files;
var state_36754__$1 = (function (){var statearr_36756 = state_36754;
(statearr_36756[(7)] = inst_36734);

(statearr_36756[(8)] = inst_36732);

(statearr_36756[(9)] = inst_36733);

return statearr_36756;
})();
var statearr_36757_36773 = state_36754__$1;
(statearr_36757_36773[(2)] = null);

(statearr_36757_36773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (2))){
var inst_36737 = (state_36754[(10)]);
var inst_36734 = (state_36754[(7)]);
var inst_36737__$1 = cljs.core.nth.call(null,inst_36734,(0),null);
var inst_36738 = cljs.core.nthnext.call(null,inst_36734,(1));
var inst_36739 = (inst_36737__$1 == null);
var inst_36740 = cljs.core.not.call(null,inst_36739);
var state_36754__$1 = (function (){var statearr_36758 = state_36754;
(statearr_36758[(10)] = inst_36737__$1);

(statearr_36758[(11)] = inst_36738);

return statearr_36758;
})();
if(inst_36740){
var statearr_36759_36774 = state_36754__$1;
(statearr_36759_36774[(1)] = (4));

} else {
var statearr_36760_36775 = state_36754__$1;
(statearr_36760_36775[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (3))){
var inst_36752 = (state_36754[(2)]);
var state_36754__$1 = state_36754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36754__$1,inst_36752);
} else {
if((state_val_36755 === (4))){
var inst_36737 = (state_36754[(10)]);
var inst_36742 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36737);
var state_36754__$1 = state_36754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36754__$1,(7),inst_36742);
} else {
if((state_val_36755 === (5))){
var inst_36748 = cljs.core.async.close_BANG_.call(null,out);
var state_36754__$1 = state_36754;
var statearr_36761_36776 = state_36754__$1;
(statearr_36761_36776[(2)] = inst_36748);

(statearr_36761_36776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (6))){
var inst_36750 = (state_36754[(2)]);
var state_36754__$1 = state_36754;
var statearr_36762_36777 = state_36754__$1;
(statearr_36762_36777[(2)] = inst_36750);

(statearr_36762_36777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (7))){
var inst_36738 = (state_36754[(11)]);
var inst_36744 = (state_36754[(2)]);
var inst_36745 = cljs.core.async.put_BANG_.call(null,out,inst_36744);
var inst_36734 = inst_36738;
var state_36754__$1 = (function (){var statearr_36763 = state_36754;
(statearr_36763[(12)] = inst_36745);

(statearr_36763[(7)] = inst_36734);

return statearr_36763;
})();
var statearr_36764_36778 = state_36754__$1;
(statearr_36764_36778[(2)] = null);

(statearr_36764_36778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__33426__auto___36772,out))
;
return ((function (switch__33314__auto__,c__33426__auto___36772,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33315__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33315__auto____0 = (function (){
var statearr_36768 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36768[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33315__auto__);

(statearr_36768[(1)] = (1));

return statearr_36768;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33315__auto____1 = (function (state_36754){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_36754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e36769){if((e36769 instanceof Object)){
var ex__33318__auto__ = e36769;
var statearr_36770_36779 = state_36754;
(statearr_36770_36779[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36780 = state_36754;
state_36754 = G__36780;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33315__auto__ = function(state_36754){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33315__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33315__auto____1.call(this,state_36754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33315__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33315__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___36772,out))
})();
var state__33428__auto__ = (function (){var statearr_36771 = f__33427__auto__.call(null);
(statearr_36771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___36772);

return statearr_36771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___36772,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36781,opts){
var map__36785 = p__36781;
var map__36785__$1 = ((((!((map__36785 == null)))?((((map__36785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36785):map__36785);
var eval_body__$1 = cljs.core.get.call(null,map__36785__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36785__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25739__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25739__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25739__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36787){var e = e36787;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36788_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36788_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36793){
var vec__36794 = p__36793;
var k = cljs.core.nth.call(null,vec__36794,(0),null);
var v = cljs.core.nth.call(null,vec__36794,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36795){
var vec__36796 = p__36795;
var k = cljs.core.nth.call(null,vec__36796,(0),null);
var v = cljs.core.nth.call(null,vec__36796,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36800,p__36801){
var map__37048 = p__36800;
var map__37048__$1 = ((((!((map__37048 == null)))?((((map__37048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37048):map__37048);
var opts = map__37048__$1;
var before_jsload = cljs.core.get.call(null,map__37048__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37048__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37048__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37049 = p__36801;
var map__37049__$1 = ((((!((map__37049 == null)))?((((map__37049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37049):map__37049);
var msg = map__37049__$1;
var files = cljs.core.get.call(null,map__37049__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37049__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37049__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33426__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37202){
var state_val_37203 = (state_37202[(1)]);
if((state_val_37203 === (7))){
var inst_37063 = (state_37202[(7)]);
var inst_37064 = (state_37202[(8)]);
var inst_37065 = (state_37202[(9)]);
var inst_37066 = (state_37202[(10)]);
var inst_37071 = cljs.core._nth.call(null,inst_37064,inst_37066);
var inst_37072 = figwheel.client.file_reloading.eval_body.call(null,inst_37071,opts);
var inst_37073 = (inst_37066 + (1));
var tmp37204 = inst_37063;
var tmp37205 = inst_37064;
var tmp37206 = inst_37065;
var inst_37063__$1 = tmp37204;
var inst_37064__$1 = tmp37205;
var inst_37065__$1 = tmp37206;
var inst_37066__$1 = inst_37073;
var state_37202__$1 = (function (){var statearr_37207 = state_37202;
(statearr_37207[(7)] = inst_37063__$1);

(statearr_37207[(8)] = inst_37064__$1);

(statearr_37207[(9)] = inst_37065__$1);

(statearr_37207[(11)] = inst_37072);

(statearr_37207[(10)] = inst_37066__$1);

return statearr_37207;
})();
var statearr_37208_37294 = state_37202__$1;
(statearr_37208_37294[(2)] = null);

(statearr_37208_37294[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (20))){
var inst_37106 = (state_37202[(12)]);
var inst_37114 = figwheel.client.file_reloading.sort_files.call(null,inst_37106);
var state_37202__$1 = state_37202;
var statearr_37209_37295 = state_37202__$1;
(statearr_37209_37295[(2)] = inst_37114);

(statearr_37209_37295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (27))){
var state_37202__$1 = state_37202;
var statearr_37210_37296 = state_37202__$1;
(statearr_37210_37296[(2)] = null);

(statearr_37210_37296[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (1))){
var inst_37055 = (state_37202[(13)]);
var inst_37052 = before_jsload.call(null,files);
var inst_37053 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37054 = (function (){return ((function (inst_37055,inst_37052,inst_37053,state_val_37203,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36797_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36797_SHARP_);
});
;})(inst_37055,inst_37052,inst_37053,state_val_37203,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37055__$1 = cljs.core.filter.call(null,inst_37054,files);
var inst_37056 = cljs.core.not_empty.call(null,inst_37055__$1);
var state_37202__$1 = (function (){var statearr_37211 = state_37202;
(statearr_37211[(14)] = inst_37052);

(statearr_37211[(15)] = inst_37053);

(statearr_37211[(13)] = inst_37055__$1);

return statearr_37211;
})();
if(cljs.core.truth_(inst_37056)){
var statearr_37212_37297 = state_37202__$1;
(statearr_37212_37297[(1)] = (2));

} else {
var statearr_37213_37298 = state_37202__$1;
(statearr_37213_37298[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (24))){
var state_37202__$1 = state_37202;
var statearr_37214_37299 = state_37202__$1;
(statearr_37214_37299[(2)] = null);

(statearr_37214_37299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (39))){
var inst_37156 = (state_37202[(16)]);
var state_37202__$1 = state_37202;
var statearr_37215_37300 = state_37202__$1;
(statearr_37215_37300[(2)] = inst_37156);

(statearr_37215_37300[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (46))){
var inst_37197 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
var statearr_37216_37301 = state_37202__$1;
(statearr_37216_37301[(2)] = inst_37197);

(statearr_37216_37301[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (4))){
var inst_37100 = (state_37202[(2)]);
var inst_37101 = cljs.core.List.EMPTY;
var inst_37102 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37101);
var inst_37103 = (function (){return ((function (inst_37100,inst_37101,inst_37102,state_val_37203,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36798_SHARP_){
var and__25739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36798_SHARP_);
if(cljs.core.truth_(and__25739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36798_SHARP_));
} else {
return and__25739__auto__;
}
});
;})(inst_37100,inst_37101,inst_37102,state_val_37203,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37104 = cljs.core.filter.call(null,inst_37103,files);
var inst_37105 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37106 = cljs.core.concat.call(null,inst_37104,inst_37105);
var state_37202__$1 = (function (){var statearr_37217 = state_37202;
(statearr_37217[(12)] = inst_37106);

(statearr_37217[(17)] = inst_37102);

(statearr_37217[(18)] = inst_37100);

return statearr_37217;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37218_37302 = state_37202__$1;
(statearr_37218_37302[(1)] = (16));

} else {
var statearr_37219_37303 = state_37202__$1;
(statearr_37219_37303[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (15))){
var inst_37090 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
var statearr_37220_37304 = state_37202__$1;
(statearr_37220_37304[(2)] = inst_37090);

(statearr_37220_37304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (21))){
var inst_37116 = (state_37202[(19)]);
var inst_37116__$1 = (state_37202[(2)]);
var inst_37117 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37116__$1);
var state_37202__$1 = (function (){var statearr_37221 = state_37202;
(statearr_37221[(19)] = inst_37116__$1);

return statearr_37221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37202__$1,(22),inst_37117);
} else {
if((state_val_37203 === (31))){
var inst_37200 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37202__$1,inst_37200);
} else {
if((state_val_37203 === (32))){
var inst_37156 = (state_37202[(16)]);
var inst_37161 = inst_37156.cljs$lang$protocol_mask$partition0$;
var inst_37162 = (inst_37161 & (64));
var inst_37163 = inst_37156.cljs$core$ISeq$;
var inst_37164 = (inst_37162) || (inst_37163);
var state_37202__$1 = state_37202;
if(cljs.core.truth_(inst_37164)){
var statearr_37222_37305 = state_37202__$1;
(statearr_37222_37305[(1)] = (35));

} else {
var statearr_37223_37306 = state_37202__$1;
(statearr_37223_37306[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (40))){
var inst_37177 = (state_37202[(20)]);
var inst_37176 = (state_37202[(2)]);
var inst_37177__$1 = cljs.core.get.call(null,inst_37176,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37178 = cljs.core.get.call(null,inst_37176,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37179 = cljs.core.not_empty.call(null,inst_37177__$1);
var state_37202__$1 = (function (){var statearr_37224 = state_37202;
(statearr_37224[(20)] = inst_37177__$1);

(statearr_37224[(21)] = inst_37178);

return statearr_37224;
})();
if(cljs.core.truth_(inst_37179)){
var statearr_37225_37307 = state_37202__$1;
(statearr_37225_37307[(1)] = (41));

} else {
var statearr_37226_37308 = state_37202__$1;
(statearr_37226_37308[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (33))){
var state_37202__$1 = state_37202;
var statearr_37227_37309 = state_37202__$1;
(statearr_37227_37309[(2)] = false);

(statearr_37227_37309[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (13))){
var inst_37076 = (state_37202[(22)]);
var inst_37080 = cljs.core.chunk_first.call(null,inst_37076);
var inst_37081 = cljs.core.chunk_rest.call(null,inst_37076);
var inst_37082 = cljs.core.count.call(null,inst_37080);
var inst_37063 = inst_37081;
var inst_37064 = inst_37080;
var inst_37065 = inst_37082;
var inst_37066 = (0);
var state_37202__$1 = (function (){var statearr_37228 = state_37202;
(statearr_37228[(7)] = inst_37063);

(statearr_37228[(8)] = inst_37064);

(statearr_37228[(9)] = inst_37065);

(statearr_37228[(10)] = inst_37066);

return statearr_37228;
})();
var statearr_37229_37310 = state_37202__$1;
(statearr_37229_37310[(2)] = null);

(statearr_37229_37310[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (22))){
var inst_37120 = (state_37202[(23)]);
var inst_37124 = (state_37202[(24)]);
var inst_37116 = (state_37202[(19)]);
var inst_37119 = (state_37202[(25)]);
var inst_37119__$1 = (state_37202[(2)]);
var inst_37120__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37119__$1);
var inst_37121 = (function (){var all_files = inst_37116;
var res_SINGLEQUOTE_ = inst_37119__$1;
var res = inst_37120__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37120,inst_37124,inst_37116,inst_37119,inst_37119__$1,inst_37120__$1,state_val_37203,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36799_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36799_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37120,inst_37124,inst_37116,inst_37119,inst_37119__$1,inst_37120__$1,state_val_37203,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37122 = cljs.core.filter.call(null,inst_37121,inst_37119__$1);
var inst_37123 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37124__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37123);
var inst_37125 = cljs.core.not_empty.call(null,inst_37124__$1);
var state_37202__$1 = (function (){var statearr_37230 = state_37202;
(statearr_37230[(23)] = inst_37120__$1);

(statearr_37230[(24)] = inst_37124__$1);

(statearr_37230[(26)] = inst_37122);

(statearr_37230[(25)] = inst_37119__$1);

return statearr_37230;
})();
if(cljs.core.truth_(inst_37125)){
var statearr_37231_37311 = state_37202__$1;
(statearr_37231_37311[(1)] = (23));

} else {
var statearr_37232_37312 = state_37202__$1;
(statearr_37232_37312[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (36))){
var state_37202__$1 = state_37202;
var statearr_37233_37313 = state_37202__$1;
(statearr_37233_37313[(2)] = false);

(statearr_37233_37313[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (41))){
var inst_37177 = (state_37202[(20)]);
var inst_37181 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37182 = cljs.core.map.call(null,inst_37181,inst_37177);
var inst_37183 = cljs.core.pr_str.call(null,inst_37182);
var inst_37184 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_37183)].join('');
var inst_37185 = figwheel.client.utils.log.call(null,inst_37184);
var state_37202__$1 = state_37202;
var statearr_37234_37314 = state_37202__$1;
(statearr_37234_37314[(2)] = inst_37185);

(statearr_37234_37314[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (43))){
var inst_37178 = (state_37202[(21)]);
var inst_37188 = (state_37202[(2)]);
var inst_37189 = cljs.core.not_empty.call(null,inst_37178);
var state_37202__$1 = (function (){var statearr_37235 = state_37202;
(statearr_37235[(27)] = inst_37188);

return statearr_37235;
})();
if(cljs.core.truth_(inst_37189)){
var statearr_37236_37315 = state_37202__$1;
(statearr_37236_37315[(1)] = (44));

} else {
var statearr_37237_37316 = state_37202__$1;
(statearr_37237_37316[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (29))){
var inst_37120 = (state_37202[(23)]);
var inst_37156 = (state_37202[(16)]);
var inst_37124 = (state_37202[(24)]);
var inst_37116 = (state_37202[(19)]);
var inst_37122 = (state_37202[(26)]);
var inst_37119 = (state_37202[(25)]);
var inst_37152 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37155 = (function (){var all_files = inst_37116;
var res_SINGLEQUOTE_ = inst_37119;
var res = inst_37120;
var files_not_loaded = inst_37122;
var dependencies_that_loaded = inst_37124;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37120,inst_37156,inst_37124,inst_37116,inst_37122,inst_37119,inst_37152,state_val_37203,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37154){
var map__37238 = p__37154;
var map__37238__$1 = ((((!((map__37238 == null)))?((((map__37238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37238):map__37238);
var namespace = cljs.core.get.call(null,map__37238__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37120,inst_37156,inst_37124,inst_37116,inst_37122,inst_37119,inst_37152,state_val_37203,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37156__$1 = cljs.core.group_by.call(null,inst_37155,inst_37122);
var inst_37158 = (inst_37156__$1 == null);
var inst_37159 = cljs.core.not.call(null,inst_37158);
var state_37202__$1 = (function (){var statearr_37240 = state_37202;
(statearr_37240[(28)] = inst_37152);

(statearr_37240[(16)] = inst_37156__$1);

return statearr_37240;
})();
if(inst_37159){
var statearr_37241_37317 = state_37202__$1;
(statearr_37241_37317[(1)] = (32));

} else {
var statearr_37242_37318 = state_37202__$1;
(statearr_37242_37318[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (44))){
var inst_37178 = (state_37202[(21)]);
var inst_37191 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37178);
var inst_37192 = cljs.core.pr_str.call(null,inst_37191);
var inst_37193 = [cljs.core.str("not required: "),cljs.core.str(inst_37192)].join('');
var inst_37194 = figwheel.client.utils.log.call(null,inst_37193);
var state_37202__$1 = state_37202;
var statearr_37243_37319 = state_37202__$1;
(statearr_37243_37319[(2)] = inst_37194);

(statearr_37243_37319[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (6))){
var inst_37097 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
var statearr_37244_37320 = state_37202__$1;
(statearr_37244_37320[(2)] = inst_37097);

(statearr_37244_37320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (28))){
var inst_37122 = (state_37202[(26)]);
var inst_37149 = (state_37202[(2)]);
var inst_37150 = cljs.core.not_empty.call(null,inst_37122);
var state_37202__$1 = (function (){var statearr_37245 = state_37202;
(statearr_37245[(29)] = inst_37149);

return statearr_37245;
})();
if(cljs.core.truth_(inst_37150)){
var statearr_37246_37321 = state_37202__$1;
(statearr_37246_37321[(1)] = (29));

} else {
var statearr_37247_37322 = state_37202__$1;
(statearr_37247_37322[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (25))){
var inst_37120 = (state_37202[(23)]);
var inst_37136 = (state_37202[(2)]);
var inst_37137 = cljs.core.not_empty.call(null,inst_37120);
var state_37202__$1 = (function (){var statearr_37248 = state_37202;
(statearr_37248[(30)] = inst_37136);

return statearr_37248;
})();
if(cljs.core.truth_(inst_37137)){
var statearr_37249_37323 = state_37202__$1;
(statearr_37249_37323[(1)] = (26));

} else {
var statearr_37250_37324 = state_37202__$1;
(statearr_37250_37324[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (34))){
var inst_37171 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
if(cljs.core.truth_(inst_37171)){
var statearr_37251_37325 = state_37202__$1;
(statearr_37251_37325[(1)] = (38));

} else {
var statearr_37252_37326 = state_37202__$1;
(statearr_37252_37326[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (17))){
var state_37202__$1 = state_37202;
var statearr_37253_37327 = state_37202__$1;
(statearr_37253_37327[(2)] = recompile_dependents);

(statearr_37253_37327[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (3))){
var state_37202__$1 = state_37202;
var statearr_37254_37328 = state_37202__$1;
(statearr_37254_37328[(2)] = null);

(statearr_37254_37328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (12))){
var inst_37093 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
var statearr_37255_37329 = state_37202__$1;
(statearr_37255_37329[(2)] = inst_37093);

(statearr_37255_37329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (2))){
var inst_37055 = (state_37202[(13)]);
var inst_37062 = cljs.core.seq.call(null,inst_37055);
var inst_37063 = inst_37062;
var inst_37064 = null;
var inst_37065 = (0);
var inst_37066 = (0);
var state_37202__$1 = (function (){var statearr_37256 = state_37202;
(statearr_37256[(7)] = inst_37063);

(statearr_37256[(8)] = inst_37064);

(statearr_37256[(9)] = inst_37065);

(statearr_37256[(10)] = inst_37066);

return statearr_37256;
})();
var statearr_37257_37330 = state_37202__$1;
(statearr_37257_37330[(2)] = null);

(statearr_37257_37330[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (23))){
var inst_37120 = (state_37202[(23)]);
var inst_37124 = (state_37202[(24)]);
var inst_37116 = (state_37202[(19)]);
var inst_37122 = (state_37202[(26)]);
var inst_37119 = (state_37202[(25)]);
var inst_37127 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37129 = (function (){var all_files = inst_37116;
var res_SINGLEQUOTE_ = inst_37119;
var res = inst_37120;
var files_not_loaded = inst_37122;
var dependencies_that_loaded = inst_37124;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37120,inst_37124,inst_37116,inst_37122,inst_37119,inst_37127,state_val_37203,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37128){
var map__37258 = p__37128;
var map__37258__$1 = ((((!((map__37258 == null)))?((((map__37258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37258):map__37258);
var request_url = cljs.core.get.call(null,map__37258__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37120,inst_37124,inst_37116,inst_37122,inst_37119,inst_37127,state_val_37203,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37130 = cljs.core.reverse.call(null,inst_37124);
var inst_37131 = cljs.core.map.call(null,inst_37129,inst_37130);
var inst_37132 = cljs.core.pr_str.call(null,inst_37131);
var inst_37133 = figwheel.client.utils.log.call(null,inst_37132);
var state_37202__$1 = (function (){var statearr_37260 = state_37202;
(statearr_37260[(31)] = inst_37127);

return statearr_37260;
})();
var statearr_37261_37331 = state_37202__$1;
(statearr_37261_37331[(2)] = inst_37133);

(statearr_37261_37331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (35))){
var state_37202__$1 = state_37202;
var statearr_37262_37332 = state_37202__$1;
(statearr_37262_37332[(2)] = true);

(statearr_37262_37332[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (19))){
var inst_37106 = (state_37202[(12)]);
var inst_37112 = figwheel.client.file_reloading.expand_files.call(null,inst_37106);
var state_37202__$1 = state_37202;
var statearr_37263_37333 = state_37202__$1;
(statearr_37263_37333[(2)] = inst_37112);

(statearr_37263_37333[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (11))){
var state_37202__$1 = state_37202;
var statearr_37264_37334 = state_37202__$1;
(statearr_37264_37334[(2)] = null);

(statearr_37264_37334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (9))){
var inst_37095 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
var statearr_37265_37335 = state_37202__$1;
(statearr_37265_37335[(2)] = inst_37095);

(statearr_37265_37335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (5))){
var inst_37065 = (state_37202[(9)]);
var inst_37066 = (state_37202[(10)]);
var inst_37068 = (inst_37066 < inst_37065);
var inst_37069 = inst_37068;
var state_37202__$1 = state_37202;
if(cljs.core.truth_(inst_37069)){
var statearr_37266_37336 = state_37202__$1;
(statearr_37266_37336[(1)] = (7));

} else {
var statearr_37267_37337 = state_37202__$1;
(statearr_37267_37337[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (14))){
var inst_37076 = (state_37202[(22)]);
var inst_37085 = cljs.core.first.call(null,inst_37076);
var inst_37086 = figwheel.client.file_reloading.eval_body.call(null,inst_37085,opts);
var inst_37087 = cljs.core.next.call(null,inst_37076);
var inst_37063 = inst_37087;
var inst_37064 = null;
var inst_37065 = (0);
var inst_37066 = (0);
var state_37202__$1 = (function (){var statearr_37268 = state_37202;
(statearr_37268[(7)] = inst_37063);

(statearr_37268[(8)] = inst_37064);

(statearr_37268[(9)] = inst_37065);

(statearr_37268[(32)] = inst_37086);

(statearr_37268[(10)] = inst_37066);

return statearr_37268;
})();
var statearr_37269_37338 = state_37202__$1;
(statearr_37269_37338[(2)] = null);

(statearr_37269_37338[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (45))){
var state_37202__$1 = state_37202;
var statearr_37270_37339 = state_37202__$1;
(statearr_37270_37339[(2)] = null);

(statearr_37270_37339[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (26))){
var inst_37120 = (state_37202[(23)]);
var inst_37124 = (state_37202[(24)]);
var inst_37116 = (state_37202[(19)]);
var inst_37122 = (state_37202[(26)]);
var inst_37119 = (state_37202[(25)]);
var inst_37139 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37141 = (function (){var all_files = inst_37116;
var res_SINGLEQUOTE_ = inst_37119;
var res = inst_37120;
var files_not_loaded = inst_37122;
var dependencies_that_loaded = inst_37124;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37120,inst_37124,inst_37116,inst_37122,inst_37119,inst_37139,state_val_37203,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37140){
var map__37271 = p__37140;
var map__37271__$1 = ((((!((map__37271 == null)))?((((map__37271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37271):map__37271);
var namespace = cljs.core.get.call(null,map__37271__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37271__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37120,inst_37124,inst_37116,inst_37122,inst_37119,inst_37139,state_val_37203,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37142 = cljs.core.map.call(null,inst_37141,inst_37120);
var inst_37143 = cljs.core.pr_str.call(null,inst_37142);
var inst_37144 = figwheel.client.utils.log.call(null,inst_37143);
var inst_37145 = (function (){var all_files = inst_37116;
var res_SINGLEQUOTE_ = inst_37119;
var res = inst_37120;
var files_not_loaded = inst_37122;
var dependencies_that_loaded = inst_37124;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37120,inst_37124,inst_37116,inst_37122,inst_37119,inst_37139,inst_37141,inst_37142,inst_37143,inst_37144,state_val_37203,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37120,inst_37124,inst_37116,inst_37122,inst_37119,inst_37139,inst_37141,inst_37142,inst_37143,inst_37144,state_val_37203,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37146 = setTimeout(inst_37145,(10));
var state_37202__$1 = (function (){var statearr_37273 = state_37202;
(statearr_37273[(33)] = inst_37144);

(statearr_37273[(34)] = inst_37139);

return statearr_37273;
})();
var statearr_37274_37340 = state_37202__$1;
(statearr_37274_37340[(2)] = inst_37146);

(statearr_37274_37340[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (16))){
var state_37202__$1 = state_37202;
var statearr_37275_37341 = state_37202__$1;
(statearr_37275_37341[(2)] = reload_dependents);

(statearr_37275_37341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (38))){
var inst_37156 = (state_37202[(16)]);
var inst_37173 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37156);
var state_37202__$1 = state_37202;
var statearr_37276_37342 = state_37202__$1;
(statearr_37276_37342[(2)] = inst_37173);

(statearr_37276_37342[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (30))){
var state_37202__$1 = state_37202;
var statearr_37277_37343 = state_37202__$1;
(statearr_37277_37343[(2)] = null);

(statearr_37277_37343[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (10))){
var inst_37076 = (state_37202[(22)]);
var inst_37078 = cljs.core.chunked_seq_QMARK_.call(null,inst_37076);
var state_37202__$1 = state_37202;
if(inst_37078){
var statearr_37278_37344 = state_37202__$1;
(statearr_37278_37344[(1)] = (13));

} else {
var statearr_37279_37345 = state_37202__$1;
(statearr_37279_37345[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (18))){
var inst_37110 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
if(cljs.core.truth_(inst_37110)){
var statearr_37280_37346 = state_37202__$1;
(statearr_37280_37346[(1)] = (19));

} else {
var statearr_37281_37347 = state_37202__$1;
(statearr_37281_37347[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (42))){
var state_37202__$1 = state_37202;
var statearr_37282_37348 = state_37202__$1;
(statearr_37282_37348[(2)] = null);

(statearr_37282_37348[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (37))){
var inst_37168 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
var statearr_37283_37349 = state_37202__$1;
(statearr_37283_37349[(2)] = inst_37168);

(statearr_37283_37349[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (8))){
var inst_37063 = (state_37202[(7)]);
var inst_37076 = (state_37202[(22)]);
var inst_37076__$1 = cljs.core.seq.call(null,inst_37063);
var state_37202__$1 = (function (){var statearr_37284 = state_37202;
(statearr_37284[(22)] = inst_37076__$1);

return statearr_37284;
})();
if(inst_37076__$1){
var statearr_37285_37350 = state_37202__$1;
(statearr_37285_37350[(1)] = (10));

} else {
var statearr_37286_37351 = state_37202__$1;
(statearr_37286_37351[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33314__auto__,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33315__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33315__auto____0 = (function (){
var statearr_37290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37290[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33315__auto__);

(statearr_37290[(1)] = (1));

return statearr_37290;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33315__auto____1 = (function (state_37202){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_37202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e37291){if((e37291 instanceof Object)){
var ex__33318__auto__ = e37291;
var statearr_37292_37352 = state_37202;
(statearr_37292_37352[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37353 = state_37202;
state_37202 = G__37353;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33315__auto__ = function(state_37202){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33315__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33315__auto____1.call(this,state_37202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33315__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33315__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33428__auto__ = (function (){var statearr_37293 = f__33427__auto__.call(null);
(statearr_37293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto__);

return statearr_37293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto__,map__37048,map__37048__$1,opts,before_jsload,on_jsload,reload_dependents,map__37049,map__37049__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33426__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37356,link){
var map__37359 = p__37356;
var map__37359__$1 = ((((!((map__37359 == null)))?((((map__37359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37359):map__37359);
var file = cljs.core.get.call(null,map__37359__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__37359,map__37359__$1,file){
return (function (p1__37354_SHARP_,p2__37355_SHARP_){
if(cljs.core._EQ_.call(null,p1__37354_SHARP_,p2__37355_SHARP_)){
return p1__37354_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__37359,map__37359__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37365){
var map__37366 = p__37365;
var map__37366__$1 = ((((!((map__37366 == null)))?((((map__37366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37366):map__37366);
var match_length = cljs.core.get.call(null,map__37366__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37366__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37361_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37361_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args37368 = [];
var len__26809__auto___37371 = arguments.length;
var i__26810__auto___37372 = (0);
while(true){
if((i__26810__auto___37372 < len__26809__auto___37371)){
args37368.push((arguments[i__26810__auto___37372]));

var G__37373 = (i__26810__auto___37372 + (1));
i__26810__auto___37372 = G__37373;
continue;
} else {
}
break;
}

var G__37370 = args37368.length;
switch (G__37370) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37368.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37375_SHARP_,p2__37376_SHARP_){
return cljs.core.assoc.call(null,p1__37375_SHARP_,cljs.core.get.call(null,p2__37376_SHARP_,key),p2__37376_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__37377){
var map__37380 = p__37377;
var map__37380__$1 = ((((!((map__37380 == null)))?((((map__37380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37380):map__37380);
var f_data = map__37380__$1;
var file = cljs.core.get.call(null,map__37380__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37382,files_msg){
var map__37389 = p__37382;
var map__37389__$1 = ((((!((map__37389 == null)))?((((map__37389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37389):map__37389);
var opts = map__37389__$1;
var on_cssload = cljs.core.get.call(null,map__37389__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__37391_37395 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__37392_37396 = null;
var count__37393_37397 = (0);
var i__37394_37398 = (0);
while(true){
if((i__37394_37398 < count__37393_37397)){
var f_37399 = cljs.core._nth.call(null,chunk__37392_37396,i__37394_37398);
figwheel.client.file_reloading.reload_css_file.call(null,f_37399);

var G__37400 = seq__37391_37395;
var G__37401 = chunk__37392_37396;
var G__37402 = count__37393_37397;
var G__37403 = (i__37394_37398 + (1));
seq__37391_37395 = G__37400;
chunk__37392_37396 = G__37401;
count__37393_37397 = G__37402;
i__37394_37398 = G__37403;
continue;
} else {
var temp__4425__auto___37404 = cljs.core.seq.call(null,seq__37391_37395);
if(temp__4425__auto___37404){
var seq__37391_37405__$1 = temp__4425__auto___37404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37391_37405__$1)){
var c__26554__auto___37406 = cljs.core.chunk_first.call(null,seq__37391_37405__$1);
var G__37407 = cljs.core.chunk_rest.call(null,seq__37391_37405__$1);
var G__37408 = c__26554__auto___37406;
var G__37409 = cljs.core.count.call(null,c__26554__auto___37406);
var G__37410 = (0);
seq__37391_37395 = G__37407;
chunk__37392_37396 = G__37408;
count__37393_37397 = G__37409;
i__37394_37398 = G__37410;
continue;
} else {
var f_37411 = cljs.core.first.call(null,seq__37391_37405__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_37411);

var G__37412 = cljs.core.next.call(null,seq__37391_37405__$1);
var G__37413 = null;
var G__37414 = (0);
var G__37415 = (0);
seq__37391_37395 = G__37412;
chunk__37392_37396 = G__37413;
count__37393_37397 = G__37414;
i__37394_37398 = G__37415;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__37389,map__37389__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__37389,map__37389__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map