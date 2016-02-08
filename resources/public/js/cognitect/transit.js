// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__37422_37426 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__37423_37427 = null;
var count__37424_37428 = (0);
var i__37425_37429 = (0);
while(true){
if((i__37425_37429 < count__37424_37428)){
var k_37430 = cljs.core._nth.call(null,chunk__37423_37427,i__37425_37429);
var v_37431 = (b[k_37430]);
(a[k_37430] = v_37431);

var G__37432 = seq__37422_37426;
var G__37433 = chunk__37423_37427;
var G__37434 = count__37424_37428;
var G__37435 = (i__37425_37429 + (1));
seq__37422_37426 = G__37432;
chunk__37423_37427 = G__37433;
count__37424_37428 = G__37434;
i__37425_37429 = G__37435;
continue;
} else {
var temp__4425__auto___37436 = cljs.core.seq.call(null,seq__37422_37426);
if(temp__4425__auto___37436){
var seq__37422_37437__$1 = temp__4425__auto___37436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37422_37437__$1)){
var c__26554__auto___37438 = cljs.core.chunk_first.call(null,seq__37422_37437__$1);
var G__37439 = cljs.core.chunk_rest.call(null,seq__37422_37437__$1);
var G__37440 = c__26554__auto___37438;
var G__37441 = cljs.core.count.call(null,c__26554__auto___37438);
var G__37442 = (0);
seq__37422_37426 = G__37439;
chunk__37423_37427 = G__37440;
count__37424_37428 = G__37441;
i__37425_37429 = G__37442;
continue;
} else {
var k_37443 = cljs.core.first.call(null,seq__37422_37437__$1);
var v_37444 = (b[k_37443]);
(a[k_37443] = v_37444);

var G__37445 = cljs.core.next.call(null,seq__37422_37437__$1);
var G__37446 = null;
var G__37447 = (0);
var G__37448 = (0);
seq__37422_37426 = G__37445;
chunk__37423_37427 = G__37446;
count__37424_37428 = G__37447;
i__37425_37429 = G__37448;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args37449 = [];
var len__26809__auto___37452 = arguments.length;
var i__26810__auto___37453 = (0);
while(true){
if((i__26810__auto___37453 < len__26809__auto___37452)){
args37449.push((arguments[i__26810__auto___37453]));

var G__37454 = (i__26810__auto___37453 + (1));
i__26810__auto___37453 = G__37454;
continue;
} else {
}
break;
}

var G__37451 = args37449.length;
switch (G__37451) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37449.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__37456 = (i + (2));
var G__37457 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__37456;
ret = G__37457;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37458_37462 = cljs.core.seq.call(null,v);
var chunk__37459_37463 = null;
var count__37460_37464 = (0);
var i__37461_37465 = (0);
while(true){
if((i__37461_37465 < count__37460_37464)){
var x_37466 = cljs.core._nth.call(null,chunk__37459_37463,i__37461_37465);
ret.push(x_37466);

var G__37467 = seq__37458_37462;
var G__37468 = chunk__37459_37463;
var G__37469 = count__37460_37464;
var G__37470 = (i__37461_37465 + (1));
seq__37458_37462 = G__37467;
chunk__37459_37463 = G__37468;
count__37460_37464 = G__37469;
i__37461_37465 = G__37470;
continue;
} else {
var temp__4425__auto___37471 = cljs.core.seq.call(null,seq__37458_37462);
if(temp__4425__auto___37471){
var seq__37458_37472__$1 = temp__4425__auto___37471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37458_37472__$1)){
var c__26554__auto___37473 = cljs.core.chunk_first.call(null,seq__37458_37472__$1);
var G__37474 = cljs.core.chunk_rest.call(null,seq__37458_37472__$1);
var G__37475 = c__26554__auto___37473;
var G__37476 = cljs.core.count.call(null,c__26554__auto___37473);
var G__37477 = (0);
seq__37458_37462 = G__37474;
chunk__37459_37463 = G__37475;
count__37460_37464 = G__37476;
i__37461_37465 = G__37477;
continue;
} else {
var x_37478 = cljs.core.first.call(null,seq__37458_37472__$1);
ret.push(x_37478);

var G__37479 = cljs.core.next.call(null,seq__37458_37472__$1);
var G__37480 = null;
var G__37481 = (0);
var G__37482 = (0);
seq__37458_37462 = G__37479;
chunk__37459_37463 = G__37480;
count__37460_37464 = G__37481;
i__37461_37465 = G__37482;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37483_37487 = cljs.core.seq.call(null,v);
var chunk__37484_37488 = null;
var count__37485_37489 = (0);
var i__37486_37490 = (0);
while(true){
if((i__37486_37490 < count__37485_37489)){
var x_37491 = cljs.core._nth.call(null,chunk__37484_37488,i__37486_37490);
ret.push(x_37491);

var G__37492 = seq__37483_37487;
var G__37493 = chunk__37484_37488;
var G__37494 = count__37485_37489;
var G__37495 = (i__37486_37490 + (1));
seq__37483_37487 = G__37492;
chunk__37484_37488 = G__37493;
count__37485_37489 = G__37494;
i__37486_37490 = G__37495;
continue;
} else {
var temp__4425__auto___37496 = cljs.core.seq.call(null,seq__37483_37487);
if(temp__4425__auto___37496){
var seq__37483_37497__$1 = temp__4425__auto___37496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37483_37497__$1)){
var c__26554__auto___37498 = cljs.core.chunk_first.call(null,seq__37483_37497__$1);
var G__37499 = cljs.core.chunk_rest.call(null,seq__37483_37497__$1);
var G__37500 = c__26554__auto___37498;
var G__37501 = cljs.core.count.call(null,c__26554__auto___37498);
var G__37502 = (0);
seq__37483_37487 = G__37499;
chunk__37484_37488 = G__37500;
count__37485_37489 = G__37501;
i__37486_37490 = G__37502;
continue;
} else {
var x_37503 = cljs.core.first.call(null,seq__37483_37497__$1);
ret.push(x_37503);

var G__37504 = cljs.core.next.call(null,seq__37483_37497__$1);
var G__37505 = null;
var G__37506 = (0);
var G__37507 = (0);
seq__37483_37487 = G__37504;
chunk__37484_37488 = G__37505;
count__37485_37489 = G__37506;
i__37486_37490 = G__37507;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37508_37512 = cljs.core.seq.call(null,v);
var chunk__37509_37513 = null;
var count__37510_37514 = (0);
var i__37511_37515 = (0);
while(true){
if((i__37511_37515 < count__37510_37514)){
var x_37516 = cljs.core._nth.call(null,chunk__37509_37513,i__37511_37515);
ret.push(x_37516);

var G__37517 = seq__37508_37512;
var G__37518 = chunk__37509_37513;
var G__37519 = count__37510_37514;
var G__37520 = (i__37511_37515 + (1));
seq__37508_37512 = G__37517;
chunk__37509_37513 = G__37518;
count__37510_37514 = G__37519;
i__37511_37515 = G__37520;
continue;
} else {
var temp__4425__auto___37521 = cljs.core.seq.call(null,seq__37508_37512);
if(temp__4425__auto___37521){
var seq__37508_37522__$1 = temp__4425__auto___37521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37508_37522__$1)){
var c__26554__auto___37523 = cljs.core.chunk_first.call(null,seq__37508_37522__$1);
var G__37524 = cljs.core.chunk_rest.call(null,seq__37508_37522__$1);
var G__37525 = c__26554__auto___37523;
var G__37526 = cljs.core.count.call(null,c__26554__auto___37523);
var G__37527 = (0);
seq__37508_37512 = G__37524;
chunk__37509_37513 = G__37525;
count__37510_37514 = G__37526;
i__37511_37515 = G__37527;
continue;
} else {
var x_37528 = cljs.core.first.call(null,seq__37508_37522__$1);
ret.push(x_37528);

var G__37529 = cljs.core.next.call(null,seq__37508_37522__$1);
var G__37530 = null;
var G__37531 = (0);
var G__37532 = (0);
seq__37508_37512 = G__37529;
chunk__37509_37513 = G__37530;
count__37510_37514 = G__37531;
i__37511_37515 = G__37532;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args37533 = [];
var len__26809__auto___37544 = arguments.length;
var i__26810__auto___37545 = (0);
while(true){
if((i__26810__auto___37545 < len__26809__auto___37544)){
args37533.push((arguments[i__26810__auto___37545]));

var G__37546 = (i__26810__auto___37545 + (1));
i__26810__auto___37545 = G__37546;
continue;
} else {
}
break;
}

var G__37535 = args37533.length;
switch (G__37535) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37533.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__37536 = obj;
G__37536.push(kfn.call(null,k),vfn.call(null,v));

return G__37536;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x37537 = cljs.core.clone.call(null,handlers);
x37537.forEach = ((function (x37537,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__37538 = cljs.core.seq.call(null,coll);
var chunk__37539 = null;
var count__37540 = (0);
var i__37541 = (0);
while(true){
if((i__37541 < count__37540)){
var vec__37542 = cljs.core._nth.call(null,chunk__37539,i__37541);
var k = cljs.core.nth.call(null,vec__37542,(0),null);
var v = cljs.core.nth.call(null,vec__37542,(1),null);
f.call(null,v,k);

var G__37548 = seq__37538;
var G__37549 = chunk__37539;
var G__37550 = count__37540;
var G__37551 = (i__37541 + (1));
seq__37538 = G__37548;
chunk__37539 = G__37549;
count__37540 = G__37550;
i__37541 = G__37551;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__37538);
if(temp__4425__auto__){
var seq__37538__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37538__$1)){
var c__26554__auto__ = cljs.core.chunk_first.call(null,seq__37538__$1);
var G__37552 = cljs.core.chunk_rest.call(null,seq__37538__$1);
var G__37553 = c__26554__auto__;
var G__37554 = cljs.core.count.call(null,c__26554__auto__);
var G__37555 = (0);
seq__37538 = G__37552;
chunk__37539 = G__37553;
count__37540 = G__37554;
i__37541 = G__37555;
continue;
} else {
var vec__37543 = cljs.core.first.call(null,seq__37538__$1);
var k = cljs.core.nth.call(null,vec__37543,(0),null);
var v = cljs.core.nth.call(null,vec__37543,(1),null);
f.call(null,v,k);

var G__37556 = cljs.core.next.call(null,seq__37538__$1);
var G__37557 = null;
var G__37558 = (0);
var G__37559 = (0);
seq__37538 = G__37556;
chunk__37539 = G__37557;
count__37540 = G__37558;
i__37541 = G__37559;
continue;
}
} else {
return null;
}
}
break;
}
});})(x37537,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x37537;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args37560 = [];
var len__26809__auto___37566 = arguments.length;
var i__26810__auto___37567 = (0);
while(true){
if((i__26810__auto___37567 < len__26809__auto___37566)){
args37560.push((arguments[i__26810__auto___37567]));

var G__37568 = (i__26810__auto___37567 + (1));
i__26810__auto___37567 = G__37568;
continue;
} else {
}
break;
}

var G__37562 = args37560.length;
switch (G__37562) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37560.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit37563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit37563 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta37564){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta37564 = meta37564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit37563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37565,meta37564__$1){
var self__ = this;
var _37565__$1 = this;
return (new cognitect.transit.t_cognitect$transit37563(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta37564__$1));
});

cognitect.transit.t_cognitect$transit37563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37565){
var self__ = this;
var _37565__$1 = this;
return self__.meta37564;
});

cognitect.transit.t_cognitect$transit37563.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit37563.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit37563.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit37563.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit37563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta37564","meta37564",-1512050665,null)], null);
});

cognitect.transit.t_cognitect$transit37563.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit37563.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit37563";

cognitect.transit.t_cognitect$transit37563.cljs$lang$ctorPrWriter = (function (this__26349__auto__,writer__26350__auto__,opt__26351__auto__){
return cljs.core._write.call(null,writer__26350__auto__,"cognitect.transit/t_cognitect$transit37563");
});

cognitect.transit.__GT_t_cognitect$transit37563 = (function cognitect$transit$__GT_t_cognitect$transit37563(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta37564){
return (new cognitect.transit.t_cognitect$transit37563(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta37564));
});

}

return (new cognitect.transit.t_cognitect$transit37563(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__25751__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map