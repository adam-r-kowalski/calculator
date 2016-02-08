// Compiled by ClojureScript 1.7.170 {}
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('datascript.arrays');
goog.require('clojure.set');
goog.require('datascript.pull_parser');
goog.require('datascript.pull_api');
goog.require('clojure.walk');
goog.require('datascript.parser');
goog.require('datascript.db');
goog.require('datascript.lru');
goog.require('datascript.impl.entity');
goog.require('cljs.reader');
datascript.query.lru_cache_size = (100);
datascript.query.built_ins;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k30395,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__30397 = (((k30395 instanceof cljs.core.Keyword))?k30395.fqn:null);
switch (G__30397) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30395,else__26368__auto__);

}
});

datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.query.Context{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IIterable$ = true;

datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30394){
var self__ = this;
var G__30394__$1 = this;
return (new cljs.core.RecordIter((0),G__30394__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
var self__ = this;
var this__26360__auto____$1 = this;
var h__26186__auto__ = self__.__hash;
if(!((h__26186__auto__ == null))){
return h__26186__auto__;
} else {
var h__26186__auto____$1 = cljs.core.hash_imap.call(null,this__26360__auto____$1);
self__.__hash = h__26186__auto____$1;

return h__26186__auto____$1;
}
});

datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
var self__ = this;
var this__26361__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25739__auto__ = other__26362__auto__;
if(cljs.core.truth_(and__25739__auto__)){
var and__25739__auto____$1 = (this__26361__auto____$1.constructor === other__26362__auto__.constructor);
if(and__25739__auto____$1){
return cljs.core.equiv_map.call(null,this__26361__auto____$1,other__26362__auto__);
} else {
return and__25739__auto____$1;
}
} else {
return and__25739__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__30394){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__30398 = cljs.core.keyword_identical_QMARK_;
var expr__30399 = k__26373__auto__;
if(cljs.core.truth_(pred__30398.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__30399))){
return (new datascript.query.Context(G__30394,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30398.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__30399))){
return (new datascript.query.Context(self__.rels,G__30394,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30398.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__30399))){
return (new datascript.query.Context(self__.rels,self__.sources,G__30394,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__30394),null));
}
}
}
});

datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__30394){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__30394,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
});

datascript.query.Context.cljs$lang$type = true;

datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.query/Context");
});

datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.query/Context");
});

datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__30396){
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__30396),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__30396),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__30396),null,cljs.core.dissoc.call(null,G__30396,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k30403,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__30405 = (((k30403 instanceof cljs.core.Keyword))?k30403.fqn:null);
switch (G__30405) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30403,else__26368__auto__);

}
});

datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.query.Relation{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IIterable$ = true;

datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30402){
var self__ = this;
var G__30402__$1 = this;
return (new cljs.core.RecordIter((0),G__30402__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
var self__ = this;
var this__26360__auto____$1 = this;
var h__26186__auto__ = self__.__hash;
if(!((h__26186__auto__ == null))){
return h__26186__auto__;
} else {
var h__26186__auto____$1 = cljs.core.hash_imap.call(null,this__26360__auto____$1);
self__.__hash = h__26186__auto____$1;

return h__26186__auto____$1;
}
});

datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
var self__ = this;
var this__26361__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25739__auto__ = other__26362__auto__;
if(cljs.core.truth_(and__25739__auto__)){
var and__25739__auto____$1 = (this__26361__auto____$1.constructor === other__26362__auto__.constructor);
if(and__25739__auto____$1){
return cljs.core.equiv_map.call(null,this__26361__auto____$1,other__26362__auto__);
} else {
return and__25739__auto____$1;
}
} else {
return and__25739__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__30402){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__30406 = cljs.core.keyword_identical_QMARK_;
var expr__30407 = k__26373__auto__;
if(cljs.core.truth_(pred__30406.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__30407))){
return (new datascript.query.Relation(G__30402,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30406.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__30407))){
return (new datascript.query.Relation(self__.attrs,G__30402,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__30402),null));
}
}
});

datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__30402){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__30402,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
});

datascript.query.Relation.cljs$lang$type = true;

datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.query/Relation");
});

datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.query/Relation");
});

datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__30404){
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__30404),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__30404),null,cljs.core.dissoc.call(null,G__30404,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)),null));
});

datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs1)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__26816__auto__ = [];
var len__26809__auto___30411 = arguments.length;
var i__26810__auto___30412 = (0);
while(true){
if((i__26810__auto___30412 < len__26809__auto___30411)){
args__26816__auto__.push((arguments[i__26810__auto___30412]));

var G__30413 = (i__26810__auto___30412 + (1));
i__26810__auto___30412 = G__30413;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((0) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((0)),(0))):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__26817__auto__);
});

datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
});

datascript.query.concatv.cljs$lang$maxFixedArity = (0);

datascript.query.concatv.cljs$lang$applyTo = (function (seq30410){
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30410));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_.call(null,form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.call(null,form,pattern);
} else {
if(cljs.core.sequential_QMARK_.call(null,pattern)){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core.every_QMARK_.call(null,(function (p__30424){
var vec__30425 = p__30424;
var pattern_el = cljs.core.nth.call(null,vec__30425,(0),null);
var form_el = cljs.core.nth.call(null,vec__30425,(1),null);
return datascript$query$looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.butlast.call(null,pattern),form)));
} else {
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),cljs.core.count.call(null,pattern))) && (cljs.core.every_QMARK_.call(null,(function (p__30428){
var vec__30429 = p__30428;
var pattern_el = cljs.core.nth.call(null,vec__30429,(0),null);
var form_el = cljs.core.nth.call(null,vec__30429,(1),null);
return datascript$query$looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,pattern,form)));
}
} else {
return pattern.call(null,form);

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"$",cljs.core.first.call(null,cljs.core.name.call(null,sym))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,cljs.core.name.call(null,sym))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return ((form instanceof cljs.core.Keyword)) || (typeof form === 'string');
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = datascript.arrays.make_array.call(null,(l1 + l2));
var n__26654__auto___30430 = l1;
var i_30431 = (0);
while(true){
if((i_30431 < n__26654__auto___30430)){
(res[i_30431] = (t1[(idxs1[i_30431])]));

var G__30432 = (i_30431 + (1));
i_30431 = G__30432;
continue;
} else {
}
break;
}

var n__26654__auto___30433 = l2;
var i_30434 = (0);
while(true){
if((i_30434 < n__26654__auto___30433)){
(res[(l1 + i_30434)] = (t2[(idxs2[i_30434])]));

var G__30435 = (i_30434 + (1));
i_30434 = G__30435;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(a),cljs.core.concat.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(b)),null,null,null));
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var args30436 = [];
var len__26809__auto___30439 = arguments.length;
var i__26810__auto___30440 = (0);
while(true){
if((i__26810__auto___30440 < len__26809__auto___30439)){
args30436.push((arguments[i__26810__auto___30440]));

var G__30441 = (i__26810__auto___30440 + (1));
i__26810__auto___30440 = G__30441;
continue;
} else {
}
break;
}

var G__30438 = args30436.length;
switch (G__30438) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30436.length)].join('')));

}
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.arrays.make_array.call(null,(0))], null),null,null,null));
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,attrs1,attrs2),cljs.core.range.call(null)),cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc,t1){
return cljs.core.reduce.call(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc__$1,t2){
return cljs.core.conj_BANG_.call(null,acc__$1,datascript.query.join_tuples.call(null,t1,idxs1,t2,idxs2));
});})(attrs1,attrs2,idxs1,idxs2))
,acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
});})(attrs1,attrs2,idxs1,idxs2))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
});

datascript.query.prod_rel.cljs$lang$maxFixedArity = 2;
datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__26816__auto__ = [];
var len__26809__auto___30444 = arguments.length;
var i__26810__auto___30445 = (0);
while(true){
if((i__26810__auto___30445 < len__26809__auto___30444)){
args__26816__auto__.push((arguments[i__26810__auto___30445]));

var G__30446 = (i__26810__auto___30445 + (1));
i__26810__auto___30445 = G__30446;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((0) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((0)),(0))):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__26817__auto__);
});

datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count.call(null,xs);
return cljs.core.not_EQ_.call(null,cljs.core.take.call(null,(l / (2)),xs),cljs.core.drop.call(null,(l / (2)),xs));
});

datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0);

datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq30443){
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30443));
});
datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
var temp__4423__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var datom = temp__4423__auto__;
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
} else {
return else_val;
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__26816__auto__ = [];
var len__26809__auto___30450 = arguments.length;
var i__26810__auto___30451 = (0);
while(true){
if((i__26810__auto___30451 < len__26809__auto___30450)){
args__26816__auto__.push((arguments[i__26810__auto___30451]));

var G__30452 = (i__26810__auto___30451 + (1));
i__26810__auto___30451 = G__30452;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((2) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((2)),(0))):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26817__auto__);
});

datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.call(null,(function (_,a){
var temp__4425__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__4425__auto__)){
var datom = temp__4425__auto__;
return cljs.core.reduced.call(null,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom));
} else {
return null;
}
}),null,as);
});

datascript.query._get_some.cljs$lang$maxFixedArity = (2);

datascript.query._get_some.cljs$lang$applyTo = (function (seq30447){
var G__30448 = cljs.core.first.call(null,seq30447);
var seq30447__$1 = cljs.core.next.call(null,seq30447);
var G__30449 = cljs.core.first.call(null,seq30447__$1);
var seq30447__$2 = cljs.core.next.call(null,seq30447__$1);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic(G__30448,G__30449,seq30447__$2);
});
datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.call(null,datascript.impl.entity.entity.call(null,db,e),a) == null);
});
datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null)],[cljs.core.true_QMARK_,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core._GT_,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core._EQ__EQ_,cljs.core.max,cljs.core._STAR_,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.dec,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core._,cljs.core.pos_QMARK_,cljs.core.mod,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.neg_QMARK_]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum.call(null,coll) / cljs.core.count.call(null,coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.call(null,coll);
var size = cljs.core.count.call(null,coll);
var med = (size >> (1));
var G__30464 = cljs.core.nth.call(null,terms,med);
var G__30464__$1 = ((cljs.core.even_QMARK_.call(null,size))?((G__30464 + cljs.core.nth.call(null,terms,(med - (1)))) / (2)):G__30464);
return G__30464__$1;
});
var variance = (function datascript$query$variance(coll){
var mean = avg.call(null,coll);
var sum__$1 = sum.call(null,(function (){var iter__26523__auto__ = ((function (mean){
return (function datascript$query$variance_$_iter__30469(s__30470){
return (new cljs.core.LazySeq(null,((function (mean){
return (function (){
var s__30470__$1 = s__30470;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30470__$1);
if(temp__4425__auto__){
var s__30470__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30470__$2)){
var c__26521__auto__ = cljs.core.chunk_first.call(null,s__30470__$2);
var size__26522__auto__ = cljs.core.count.call(null,c__26521__auto__);
var b__30472 = cljs.core.chunk_buffer.call(null,size__26522__auto__);
if((function (){var i__30471 = (0);
while(true){
if((i__30471 < size__26522__auto__)){
var x = cljs.core._nth.call(null,c__26521__auto__,i__30471);
var delta = (x - mean);
cljs.core.chunk_append.call(null,b__30472,(delta * delta));

var G__30473 = (i__30471 + (1));
i__30471 = G__30473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30472),datascript$query$variance_$_iter__30469.call(null,cljs.core.chunk_rest.call(null,s__30470__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30472),null);
}
} else {
var x = cljs.core.first.call(null,s__30470__$2);
var delta = (x - mean);
return cljs.core.cons.call(null,(delta * delta),datascript$query$variance_$_iter__30469.call(null,cljs.core.rest.call(null,s__30470__$2)));
}
} else {
return null;
}
break;
}
});})(mean))
,null,null));
});})(mean))
;
return iter__26523__auto__.call(null,coll);
})());
return (sum__$1 / cljs.core.count.call(null,coll));
});
var stddev = (function datascript$query$stddev(coll){
return Math.sqrt(variance.call(null,coll));
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"variance","variance",-1522424942,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"median","median",-2084869638,null),new cljs.core.Symbol(null,"sum","sum",1777518341,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"count-distinct","count-distinct",-1566572514,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"avg","avg",1837937727,null),new cljs.core.Symbol(null,"stddev","stddev",775056588,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"sample","sample",1719555128,null)],[variance,cljs.core.count,median,sum,(function() {
var G__30474 = null;
var G__30474__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.compare.call(null,x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__30474__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,acc,x));
} else {
if((cljs.core.compare.call(null,x,cljs.core.last.call(null,acc)) < (0))){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,cljs.core.butlast.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__30474 = function(n,coll){
switch(arguments.length){
case 1:
return G__30474__1.call(this,n);
case 2:
return G__30474__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30474.cljs$core$IFn$_invoke$arity$1 = G__30474__1;
G__30474.cljs$core$IFn$_invoke$arity$2 = G__30474__2;
return G__30474;
})()
,(function() {
var G__30475 = null;
var G__30475__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.compare.call(null,x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__30475__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,acc,x));
} else {
if((cljs.core.compare.call(null,x,cljs.core.first.call(null,acc)) > (0))){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,cljs.core.next.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__30475 = function(n,coll){
switch(arguments.length){
case 1:
return G__30475__1.call(this,n);
case 2:
return G__30475__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30475.cljs$core$IFn$_invoke$arity$1 = G__30475__1;
G__30475.cljs$core$IFn$_invoke$arity$2 = G__30475__2;
return G__30475;
})()
,(function (coll){
return cljs.core.count.call(null,cljs.core.distinct.call(null,coll));
}),cljs.core.comp.call(null,cljs.core.vec,cljs.core.distinct),avg,stddev,(function() {
var G__30476 = null;
var G__30476__1 = (function (coll){
return cljs.core.rand_nth.call(null,coll);
});
var G__30476__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_nth.call(null,coll);
})));
});
G__30476 = function(n,coll){
switch(arguments.length){
case 1:
return G__30476__1.call(this,n);
case 2:
return G__30476__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30476.cljs$core$IFn$_invoke$arity$1 = G__30476__1;
G__30476.cljs$core$IFn$_invoke$arity$2 = G__30476__2;
return G__30476;
})()
,(function (n,coll){
return cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.shuffle.call(null,coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.call(null,rules):rules);
return cljs.core.group_by.call(null,cljs.core.ffirst,rules__$1);
});
datascript.query.bindable_to_seq_QMARK_ = (function datascript$query$bindable_to_seq_QMARK_(x){
var or__25751__auto__ = datascript.db.seqable_QMARK_.call(null,x);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return datascript.arrays.array_QMARK_.call(null,x);
}
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datascript.parser.collect_vars_distinct.call(null,binding));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,vars,cljs.core.range.call(null)),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((!((binding == null))) && (!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
var x__26406__auto__ = (((binding == null))?null:binding);
var m__26407__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,binding,value);
} else {
var m__26407__auto____$1 = (datascript.query.in__GT_rel["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,binding,value);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.in->rel",binding);
}
}
}
});

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = true;

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.call(null);
});

datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = true;

datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.fromArray([cljs.core.get_in.call(null,binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),(0)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
});

datascript.parser.BindColl.prototype.datascript$query$IBinding$ = true;

datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(cljs.core.not.call(null,datascript.query.bindable_to_seq_QMARK_.call(null,coll))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot bind value "),cljs.core.str(cljs.core.pr_str.call(null,coll)),cljs.core.str(" to collection "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_.call(null,coll)){
return datascript.query.empty_rel.call(null,binding__$1);
} else {
return cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,((function (binding__$1){
return (function (p1__30477_SHARP_){
return datascript.query.in__GT_rel.call(null,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(binding__$1),p1__30477_SHARP_);
});})(binding__$1))
,coll));

}
}
});

datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = true;

datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(cljs.core.not.call(null,datascript.query.bindable_to_seq_QMARK_.call(null,coll))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot bind value "),cljs.core.str(cljs.core.pr_str.call(null,coll)),cljs.core.str(" to tuple "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
if((cljs.core.count.call(null,coll) < cljs.core.count.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(binding__$1)))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Not enough elements in a collection "),cljs.core.str(cljs.core.pr_str.call(null,coll)),cljs.core.str(" to bind tuple "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
return cljs.core.reduce.call(null,datascript.query.prod_rel,cljs.core.map.call(null,((function (binding__$1){
return (function (p1__30478_SHARP_,p2__30479_SHARP_){
return datascript.query.in__GT_rel.call(null,p1__30478_SHARP_,p2__30479_SHARP_);
});})(binding__$1))
,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(binding__$1),coll));

}
}
});
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__30480){
var vec__30482 = p__30480;
var binding = cljs.core.nth.call(null,vec__30482,(0),null);
var value = cljs.core.nth.call(null,vec__30482,(1),null);
if(((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.SrcVar))){
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424)], null),cljs.core.assoc,cljs.core.get_in.call(null,binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),value);
} else {
if(((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.RulesVar))){
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules.call(null,value));
} else {
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,datascript.query.in__GT_rel.call(null,binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
return cljs.core.reduce.call(null,datascript.query.resolve_in,context,cljs.core.zipmap.call(null,bindings,values));
});
datascript.query._STAR_lookup_attrs_STAR_ = null;
datascript.query._STAR_lookup_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = attrs.call(null,attr);
if((!((datascript.query._STAR_lookup_attrs_STAR_ == null))) && (cljs.core.contains_QMARK_.call(null,datascript.query._STAR_lookup_attrs_STAR_,attr))){
return ((function (idx){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
return datascript.db.entid.call(null,datascript.query._STAR_lookup_source_STAR_,eid);
}
});
;})(idx))
} else {
return ((function (idx){
return (function (tuple){
return (tuple[idx]);
});
;})(idx))
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count.call(null,getters) === (1))){
return cljs.core.first.call(null,getters);
} else {
var getters__$1 = cljs.core.to_array.call(null,getters);
return ((function (getters__$1){
return (function (tuple){
return cljs.core.list_STAR_.call(null,getters__$1.map(((function (getters__$1){
return (function (p1__30483_SHARP_){
return p1__30483_SHARP_.call(null,tuple);
});})(getters__$1))
));
});
;})(getters__$1))
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,tuples__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var tuple = temp__4423__auto__;
var key = key_fn.call(null,tuple);
var G__30485 = cljs.core.next.call(null,tuples__$1);
var G__30486 = cljs.core.assoc_BANG_.call(null,hash_table,key,cljs.core.conj.call(null,cljs.core.get.call(null,hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__30485;
hash_table = G__30486;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,hash_table);
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs){
return (function (p1__30487_SHARP_){
return datascript.query.getter_fn.call(null,attrs1,p1__30487_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs))
,common_attrs);
var common_gtrs2 = cljs.core.map.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1){
return (function (p1__30488_SHARP_){
return datascript.query.getter_fn.call(null,attrs2,p1__30488_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1))
,common_attrs);
var keep_attrs1 = cljs.core.keys.call(null,attrs1);
var keep_attrs2 = cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs1))));
var keep_idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn.call(null,common_gtrs1);
var hash = datascript.query.hash_attrs.call(null,key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn.call(null,common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc,tuple2){
var key = key_fn2.call(null,tuple2);
var temp__4423__auto__ = cljs.core.get.call(null,hash,key);
if(cljs.core.truth_(temp__4423__auto__)){
var tuples1__$1 = temp__4423__auto__;
return cljs.core.reduce.call(null,((function (tuples1__$1,temp__4423__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc__$1,tuple1){
return cljs.core.conj_BANG_.call(null,acc__$1,datascript.query.join_tuples.call(null,tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__4423__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,acc,tuples1__$1);
} else {
return acc;
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,keep_attrs1,keep_attrs2),cljs.core.range.call(null)),new_tuples,null,null,null));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.call(null,(function (p1__30489_SHARP_){
if((p1__30489_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__30489_SHARP_;
}
}),pattern);
var datoms = datascript.db._search.call(null,db,search_pattern);
var attr__GT_prop = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (search_pattern,datoms){
return (function (p__30492){
var vec__30493 = p__30492;
var s = cljs.core.nth.call(null,vec__30493,(0),null);
var _ = cljs.core.nth.call(null,vec__30493,(1),null);
return datascript.query.free_var_QMARK_.call(null,s);
});})(search_pattern,datoms))
,cljs.core.map.call(null,cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__25739__auto__ = tuple__$1;
if(cljs.core.truth_(and__25739__auto__)){
return pattern__$1;
} else {
return and__25739__auto__;
}
})())){
var t = cljs.core.first.call(null,tuple__$1);
var p = cljs.core.first.call(null,pattern__$1);
if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.call(null,t,p))){
var G__30494 = cljs.core.next.call(null,tuple__$1);
var G__30495 = cljs.core.next.call(null,pattern__$1);
tuple__$1 = G__30494;
pattern__$1 = G__30495;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.call(null,(function (p1__30496_SHARP_){
return datascript.query.matches_pattern_QMARK_.call(null,pattern,p1__30496_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (data){
return (function (p__30499){
var vec__30500 = p__30499;
var s = cljs.core.nth.call(null,vec__30500,(0),null);
var _ = cljs.core.nth.call(null,vec__30500,(1),null);
return datascript.query.free_var_QMARK_.call(null,s);
});})(data))
,cljs.core.map.call(null,cljs.core.vector,pattern,cljs.core.range.call(null))));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.map.call(null,cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(cljs.core.truth_(datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))){
return clause;
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if(((!((source == null)))?(((false) || (source.datascript$db$ISearch$))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db.call(null,source,pattern);
} else {
return datascript.query.lookup_pattern_coll.call(null,source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,rels__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var rel = temp__4423__auto__;
if(cljs.core.truth_(cljs.core.not_empty.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__30503 = cljs.core.next.call(null,rels__$1);
var G__30504 = datascript.query.hash_join.call(null,rel,new_rel__$1);
var G__30505 = acc;
rels__$1 = G__30503;
new_rel__$1 = G__30504;
acc = G__30505;
continue;
} else {
var G__30506 = cljs.core.next.call(null,rels__$1);
var G__30507 = new_rel__$1;
var G__30508 = cljs.core.conj.call(null,acc,rel);
rels__$1 = G__30506;
new_rel__$1 = G__30507;
acc = G__30508;
continue;
}
} else {
return cljs.core.conj.call(null,acc,new_rel__$1);
}
break;
}
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__4425__auto__ = cljs.core.some.call(null,(function (p1__30509_SHARP_){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__30509_SHARP_),sym)){
return p1__30509_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
if(cljs.core.truth_(temp__4425__auto__)){
var rel = temp__4425__auto__;
var temp__4425__auto____$1 = cljs.core.first.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if(cljs.core.truth_(temp__4425__auto____$1)){
var tuple = temp__4425__auto____$1;
return (tuple[new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
} else {
return null;
}
} else {
return null;
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return !(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,attrs),cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))));
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.call(null,(function (p1__30510_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_.call(null,p1__30510_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.call(null,datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),((function (rels,production){
return (function (p1__30511_SHARP_){
return cljs.core.remove.call(null,cljs.core.set.call(null,rels),p1__30511_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
return (function (tuple){
var resolved_args = cljs.core.map.call(null,(function (p1__30512_SHARP_){
if((p1__30512_SHARP_ instanceof cljs.core.Symbol)){
var or__25751__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),p1__30512_SHARP_);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return (tuple[cljs.core.get.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__30512_SHARP_)]);
}
} else {
return p1__30512_SHARP_;
}
}),args);
return cljs.core.apply.call(null,f,resolved_args);
});
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__30517 = clause;
var vec__30518 = cljs.core.nth.call(null,vec__30517,(0),null);
var f = cljs.core.nth.call(null,vec__30518,(0),null);
var args = cljs.core.nthnext.call(null,vec__30518,(1));
var pred = (function (){var or__25751__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return datascript.query.context_resolve_val.call(null,context,f);
}
})();
var vec__30519 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__30519,(0),null);
var production = cljs.core.nth.call(null,vec__30519,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn.call(null,context__$1,production,pred,args);
return cljs.core.update_in.call(null,production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),((function (tuple_pred,vec__30517,vec__30518,f,args,pred,vec__30519,context__$1,production){
return (function (p1__30513_SHARP_){
return cljs.core.filter.call(null,tuple_pred,p1__30513_SHARP_);
});})(tuple_pred,vec__30517,vec__30518,f,args,pred,vec__30519,context__$1,production))
);
})():cljs.core.assoc.call(null,production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),cljs.core.PersistentVector.EMPTY));
return cljs.core.update_in.call(null,context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__30524 = clause;
var vec__30525 = cljs.core.nth.call(null,vec__30524,(0),null);
var f = cljs.core.nth.call(null,vec__30525,(0),null);
var args = cljs.core.nthnext.call(null,vec__30525,(1));
var out = cljs.core.nth.call(null,vec__30524,(1),null);
var binding = datascript.parser.parse_binding.call(null,out);
var fun = (function (){var or__25751__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return datascript.query.context_resolve_val.call(null,context,f);
}
})();
var vec__30526 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__30526,(0),null);
var production = cljs.core.nth.call(null,vec__30526,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn.call(null,context__$1,production,fun,args);
var temp__4423__auto__ = cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
if(cljs.core.truth_(temp__4423__auto__)){
var tuples = temp__4423__auto__;
return cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,((function (tuples,temp__4423__auto__,tuple_fn,vec__30524,vec__30525,f,args,out,binding,fun,vec__30526,context__$1,production){
return (function (p1__30520_SHARP_){
var val = tuple_fn.call(null,p1__30520_SHARP_);
var rel = datascript.query.in__GT_rel.call(null,binding,val);
return datascript.query.prod_rel.call(null,(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30520_SHARP_], null),null,null,null)),rel);
});})(tuples,temp__4423__auto__,tuple_fn,vec__30524,vec__30525,f,args,out,binding,fun,vec__30526,context__$1,production))
,tuples));
} else {
return datascript.query.prod_rel.call(null,production,datascript.query.empty_rel.call(null,binding));
}
})():datascript.query.prod_rel.call(null,cljs.core.assoc.call(null,production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel.call(null,binding)));
return cljs.core.update_in.call(null,context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
return (cljs.core.sequential_QMARK_.call(null,clause)) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),(cljs.core.truth_(datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?cljs.core.second.call(null,clause):cljs.core.first.call(null,clause))));
});
datascript.query._collect;
datascript.query._resolve_clause;
datascript.query.rule_seqid = cljs.core.atom.call(null,(0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__30541 = clause;
var rule = cljs.core.nth.call(null,vec__30541,(0),null);
var call_args = cljs.core.nthnext.call(null,vec__30541,(1));
var seqid = cljs.core.swap_BANG_.call(null,datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__26523__auto__ = ((function (vec__30541,rule,call_args,seqid,branches){
return (function datascript$query$expand_rule_$_iter__30542(s__30543){
return (new cljs.core.LazySeq(null,((function (vec__30541,rule,call_args,seqid,branches){
return (function (){
var s__30543__$1 = s__30543;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30543__$1);
if(temp__4425__auto__){
var s__30543__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30543__$2)){
var c__26521__auto__ = cljs.core.chunk_first.call(null,s__30543__$2);
var size__26522__auto__ = cljs.core.count.call(null,c__26521__auto__);
var b__30545 = cljs.core.chunk_buffer.call(null,size__26522__auto__);
if((function (){var i__30544 = (0);
while(true){
if((i__30544 < size__26522__auto__)){
var branch = cljs.core._nth.call(null,c__26521__auto__,i__30544);
var vec__30550 = branch;
var vec__30551 = cljs.core.nth.call(null,vec__30550,(0),null);
var _ = cljs.core.nth.call(null,vec__30551,(0),null);
var rule_args = cljs.core.nthnext.call(null,vec__30551,(1));
var clauses = cljs.core.nthnext.call(null,vec__30550,(1));
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
cljs.core.chunk_append.call(null,b__30545,clojure.walk.postwalk.call(null,((function (i__30544,vec__30550,vec__30551,_,rule_args,clauses,replacements,branch,c__26521__auto__,size__26522__auto__,b__30545,s__30543__$2,temp__4425__auto__,vec__30541,rule,call_args,seqid,branches){
return (function (p1__30527_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_.call(null,p1__30527_SHARP_))){
var or__25751__auto__ = replacements.call(null,p1__30527_SHARP_);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(cljs.core.name.call(null,p1__30527_SHARP_)),cljs.core.str("__auto__"),cljs.core.str(seqid)].join(''));
}
} else {
return p1__30527_SHARP_;
}
});})(i__30544,vec__30550,vec__30551,_,rule_args,clauses,replacements,branch,c__26521__auto__,size__26522__auto__,b__30545,s__30543__$2,temp__4425__auto__,vec__30541,rule,call_args,seqid,branches))
,clauses));

var G__30554 = (i__30544 + (1));
i__30544 = G__30554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30545),datascript$query$expand_rule_$_iter__30542.call(null,cljs.core.chunk_rest.call(null,s__30543__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30545),null);
}
} else {
var branch = cljs.core.first.call(null,s__30543__$2);
var vec__30552 = branch;
var vec__30553 = cljs.core.nth.call(null,vec__30552,(0),null);
var _ = cljs.core.nth.call(null,vec__30553,(0),null);
var rule_args = cljs.core.nthnext.call(null,vec__30553,(1));
var clauses = cljs.core.nthnext.call(null,vec__30552,(1));
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
return cljs.core.cons.call(null,clojure.walk.postwalk.call(null,((function (vec__30552,vec__30553,_,rule_args,clauses,replacements,branch,s__30543__$2,temp__4425__auto__,vec__30541,rule,call_args,seqid,branches){
return (function (p1__30527_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_.call(null,p1__30527_SHARP_))){
var or__25751__auto__ = replacements.call(null,p1__30527_SHARP_);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(cljs.core.name.call(null,p1__30527_SHARP_)),cljs.core.str("__auto__"),cljs.core.str(seqid)].join(''));
}
} else {
return p1__30527_SHARP_;
}
});})(vec__30552,vec__30553,_,rule_args,clauses,replacements,branch,s__30543__$2,temp__4425__auto__,vec__30541,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__30542.call(null,cljs.core.rest.call(null,s__30543__$2)));
}
} else {
return null;
}
break;
}
});})(vec__30541,rule,call_args,seqid,branches))
,null,null));
});})(vec__30541,rule,call_args,seqid,branches))
;
return iter__26523__auto__.call(null,branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.call(null,(function (p__30557){
var vec__30558 = p__30557;
var x = cljs.core.nth.call(null,vec__30558,(0),null);
var y = cljs.core.nth.call(null,vec__30558,(1),null);
return cljs.core._EQ_.call(null,x,y);
}),cljs.core.map.call(null,cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,pairs),cljs.core.map.call(null,cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__30568 = rule_clause;
var rule = cljs.core.nth.call(null,vec__30568,(0),null);
var call_args = cljs.core.nthnext.call(null,vec__30568,(1));
var prev_call_args = cljs.core.get.call(null,used_args,rule);
var iter__26523__auto__ = ((function (vec__30568,rule,call_args,prev_call_args){
return (function datascript$query$rule_gen_guards_$_iter__30569(s__30570){
return (new cljs.core.LazySeq(null,((function (vec__30568,rule,call_args,prev_call_args){
return (function (){
var s__30570__$1 = s__30570;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30570__$1);
if(temp__4425__auto__){
var s__30570__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30570__$2)){
var c__26521__auto__ = cljs.core.chunk_first.call(null,s__30570__$2);
var size__26522__auto__ = cljs.core.count.call(null,c__26521__auto__);
var b__30572 = cljs.core.chunk_buffer.call(null,size__26522__auto__);
if((function (){var i__30571 = (0);
while(true){
if((i__30571 < size__26522__auto__)){
var prev_args = cljs.core._nth.call(null,c__26521__auto__,i__30571);
var vec__30575 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__30575,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__30575,(1),null);
cljs.core.chunk_append.call(null,b__30572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null));

var G__30577 = (i__30571 + (1));
i__30571 = G__30577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30572),datascript$query$rule_gen_guards_$_iter__30569.call(null,cljs.core.chunk_rest.call(null,s__30570__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30572),null);
}
} else {
var prev_args = cljs.core.first.call(null,s__30570__$2);
var vec__30576 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__30576,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__30576,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null),datascript$query$rule_gen_guards_$_iter__30569.call(null,cljs.core.rest.call(null,s__30570__$2)));
}
} else {
return null;
}
break;
}
});})(vec__30568,rule,call_args,prev_call_args))
,null,null));
});})(vec__30568,rule,call_args,prev_call_args))
;
return iter__26523__auto__.call(null,prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk.call(null,((function (res){
return (function (p1__30578_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__30578_SHARP_))){
cljs.core.swap_BANG_.call(null,res,cljs.core.conj,p1__30578_SHARP_);
} else {
}

return p1__30578_SHARP_;
});})(res))
,form);

return cljs.core.deref.call(null,res);
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = cljs.core.set.call(null,datascript.query.walk_collect.call(null,clauses,datascript.query.free_var_QMARK_));
var pred = ((function (bound_vars){
return (function (p__30582){
var vec__30583 = p__30582;
var vec__30584 = cljs.core.nth.call(null,vec__30583,(0),null);
var _ = cljs.core.nth.call(null,vec__30584,(0),null);
var vars = cljs.core.nthnext.call(null,vec__30584,(1));
return cljs.core.every_QMARK_.call(null,bound_vars,vars);
});})(bound_vars))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,pred,guards),cljs.core.remove.call(null,pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.call(null,datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap.call(null,final_attrs,cljs.core.range.call(null));
var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){
return cljs.core.reduce.call(null,datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;
var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){
return cljs.core.some.call(null,((function (final_attrs,final_attrs_map,solve){
return (function (p1__30585_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__30585_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;
var stack = cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,stack);
if(cljs.core.truth_(temp__4423__auto__)){
var frame = temp__4423__auto__;
var vec__30596 = cljs.core.split_with.call(null,((function (stack,rel,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__30586_SHARP_){
return cljs.core.not.call(null,datascript.query.rule_QMARK_.call(null,context,p1__30586_SHARP_));
});})(stack,rel,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.call(null,vec__30596,(0),null);
var vec__30597 = cljs.core.nth.call(null,vec__30596,(1),null);
var rule_clause = cljs.core.nth.call(null,vec__30597,(0),null);
var next_clauses = cljs.core.nthnext.call(null,vec__30597,(1));
if((rule_clause == null)){
var context__$1 = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = datascript.query._collect.call(null,context__$1,final_attrs);
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__30604 = cljs.core.next.call(null,stack);
var G__30605 = datascript.query.sum_rel.call(null,rel,new_rel);
stack = G__30604;
rel = G__30605;
continue;
} else {
var vec__30598 = rule_clause;
var rule = cljs.core.nth.call(null,vec__30598,(0),null);
var call_args = cljs.core.nthnext.call(null,vec__30598,(1));
var guards = datascript.query.rule_gen_guards.call(null,rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__30599 = datascript.query.split_guards.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.call(null,guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.call(null,vec__30599,(0),null);
var pending_gs = cljs.core.nth.call(null,vec__30599,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,((function (stack,rel,vec__30598,rule,call_args,guards,vec__30599,active_gs,pending_gs,vec__30596,clauses,vec__30597,rule_clause,next_clauses,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__30587_SHARP_){
return cljs.core._EQ_.call(null,p1__30587_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__30598,rule,call_args,guards,vec__30599,active_gs,pending_gs,vec__30596,clauses,vec__30597,rule_clause,next_clauses,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__30606 = cljs.core.next.call(null,stack);
var G__30607 = rel;
stack = G__30606;
rel = G__30607;
continue;
} else {
var prefix_clauses = cljs.core.concat.call(null,clauses,active_gs);
var prefix_context = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_.call(null,prefix_context))){
var G__30608 = cljs.core.next.call(null,stack);
var G__30609 = rel;
stack = G__30608;
rel = G__30609;
continue;
} else {
var used_args = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule.call(null,rule_clause,context,used_args);
var G__30610 = cljs.core.concat.call(null,(function (){var iter__26523__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__30598,rule,call_args,guards,vec__30599,active_gs,pending_gs,vec__30596,clauses,vec__30597,rule_clause,next_clauses,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__30600(s__30601){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__30598,rule,call_args,guards,vec__30599,active_gs,pending_gs,vec__30596,clauses,vec__30597,rule_clause,next_clauses,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__30601__$1 = s__30601;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30601__$1);
if(temp__4425__auto__){
var s__30601__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30601__$2)){
var c__26521__auto__ = cljs.core.chunk_first.call(null,s__30601__$2);
var size__26522__auto__ = cljs.core.count.call(null,c__26521__auto__);
var b__30603 = cljs.core.chunk_buffer.call(null,size__26522__auto__);
if((function (){var i__30602 = (0);
while(true){
if((i__30602 < size__26522__auto__)){
var branch = cljs.core._nth.call(null,c__26521__auto__,i__30602);
cljs.core.chunk_append.call(null,b__30603,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__30612 = (i__30602 + (1));
i__30602 = G__30612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30603),datascript$query$solve_rule_$_iter__30600.call(null,cljs.core.chunk_rest.call(null,s__30601__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30603),null);
}
} else {
var branch = cljs.core.first.call(null,s__30601__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__30600.call(null,cljs.core.rest.call(null,s__30601__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__30598,rule,call_args,guards,vec__30599,active_gs,pending_gs,vec__30596,clauses,vec__30597,rule_clause,next_clauses,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__30598,rule,call_args,guards,vec__30599,active_gs,pending_gs,vec__30596,clauses,vec__30597,rule_clause,next_clauses,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__26523__auto__.call(null,branches);
})(),cljs.core.next.call(null,stack));
var G__30611 = rel;
stack = G__30610;
rel = G__30611;
continue;
}
}
}
} else {
return rel;
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if(((!((source == null)))?(((false) || (source.datascript$db$IDB$))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source))){
var vec__30616 = pattern;
var e = cljs.core.nth.call(null,vec__30616,(0),null);
var a = cljs.core.nth.call(null,vec__30616,(1),null);
var v = cljs.core.nth.call(null,vec__30616,(2),null);
var tx = cljs.core.nth.call(null,vec__30616,(3),null);
return cljs.core.subvec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(datascript.query.lookup_ref_QMARK_.call(null,e))?datascript.db.entid_strict.call(null,source,e):e),a,(cljs.core.truth_((function (){var and__25739__auto__ = v;
if(cljs.core.truth_(and__25739__auto__)){
var and__25739__auto____$1 = datascript.query.attr_QMARK_.call(null,a);
if(cljs.core.truth_(and__25739__auto____$1)){
var and__25739__auto____$2 = datascript.db.ref_QMARK_.call(null,source,a);
if(and__25739__auto____$2){
return datascript.query.lookup_ref_QMARK_.call(null,v);
} else {
return and__25739__auto____$2;
}
} else {
return and__25739__auto____$1;
}
} else {
return and__25739__auto__;
}
})())?datascript.db.entid_strict.call(null,source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_.call(null,tx))?datascript.db.entid_strict.call(null,source,tx):tx)], null),(0),cljs.core.count.call(null,pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__30619 = pattern;
var e = cljs.core.nth.call(null,vec__30619,(0),null);
var a = cljs.core.nth.call(null,vec__30619,(1),null);
var v = cljs.core.nth.call(null,vec__30619,(2),null);
var tx = cljs.core.nth.call(null,vec__30619,(3),null);
var G__30620 = cljs.core.PersistentHashSet.EMPTY;
var G__30620__$1 = (cljs.core.truth_(datascript.query.free_var_QMARK_.call(null,e))?cljs.core.conj.call(null,G__30620,e):G__30620);
var G__30620__$2 = (cljs.core.truth_(datascript.query.free_var_QMARK_.call(null,tx))?cljs.core.conj.call(null,G__30620__$1,tx):G__30620__$1);
var G__30620__$3 = (cljs.core.truth_((function (){var and__25739__auto__ = datascript.query.free_var_QMARK_.call(null,v);
if(cljs.core.truth_(and__25739__auto__)){
return (cljs.core.not.call(null,datascript.query.free_var_QMARK_.call(null,a))) && (datascript.db.ref_QMARK_.call(null,source,a));
} else {
return and__25739__auto__;
}
})())?cljs.core.conj.call(null,G__30620__$2,v):G__30620__$2);
return G__30620__$3;
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(context,clause){
var pred__30628 = datascript.query.looks_like_QMARK_;
var expr__30629 = clause;
if(cljs.core.truth_(pred__30628.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),expr__30629))){
return datascript.query.filter_by_pred.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__30628.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),expr__30629))){
return datascript.query.bind_by_fn.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__30628.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__30629))){
var vec__30631 = datascript.query.normalize_pattern_clause.call(null,clause);
var source_sym = cljs.core.nth.call(null,vec__30631,(0),null);
var pattern = cljs.core.nthnext.call(null,vec__30631,(1));
var source = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
var pattern__$1 = datascript.query.resolve_pattern_lookup_refs.call(null,source,pattern);
var relation = datascript.query.lookup_pattern.call(null,source,pattern__$1);
var lookup_source_QMARK_ = ((!((source == null)))?(((false) || (source.datascript$db$IDB$))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source));
var _STAR_lookup_source_STAR_30633 = datascript.query._STAR_lookup_source_STAR_;
var _STAR_lookup_attrs_STAR_30634 = datascript.query._STAR_lookup_attrs_STAR_;
datascript.query._STAR_lookup_source_STAR_ = ((lookup_source_QMARK_)?source:null);

datascript.query._STAR_lookup_attrs_STAR_ = ((lookup_source_QMARK_)?datascript.query.dynamic_lookup_attrs.call(null,source,pattern__$1):null);

try{return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,relation);
}finally {datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR_30634;

datascript.query._STAR_lookup_source_STAR_ = _STAR_lookup_source_STAR_30633;
}} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30629)].join('')));
}
}
}
});
datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(cljs.core.truth_(datascript.query.rule_QMARK_.call(null,context,clause))){
var vec__30636 = (cljs.core.truth_(datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clause),cljs.core.next.call(null,clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));
var source = cljs.core.nth.call(null,vec__30636,(0),null);
var rule = cljs.core.nth.call(null,vec__30636,(1),null);
var source__$1 = cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),source], null));
var rel = datascript.query.solve_rule.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"$","$",-1580747756,null),source__$1], null)),rule);
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,rel);
} else {
return datascript.query._resolve_clause.call(null,context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
return cljs.core.reduce.call(null,datascript.query.resolve_clause,context,clauses);
});
datascript.query._collect = (function datascript$query$_collect(var_args){
var args30638 = [];
var len__26809__auto___30647 = arguments.length;
var i__26810__auto___30648 = (0);
while(true){
if((i__26810__auto___30648 < len__26809__auto___30647)){
args30638.push((arguments[i__26810__auto___30648]));

var G__30649 = (i__26810__auto___30648 + (1));
i__26810__auto___30648 = G__30649;
continue;
} else {
}
break;
}

var G__30640 = args30638.length;
switch (G__30640) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30638.length)].join('')));

}
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.arrays.make_array.call(null,cljs.core.count.call(null,symbols))], null),rels,symbols);
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,rels);
if(cljs.core.truth_(temp__4423__auto__)){
var rel = temp__4423__auto__;
var keep_attrs = cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_.call(null,keep_attrs)){
var G__30651 = acc;
var G__30652 = cljs.core.next.call(null,rels);
var G__30653 = symbols;
acc = G__30651;
rels = G__30652;
symbols = G__30653;
continue;
} else {
var copy_map = cljs.core.to_array.call(null,cljs.core.map.call(null,((function (acc,rels,symbols,keep_attrs,rel,temp__4423__auto__){
return (function (p1__30637_SHARP_){
return cljs.core.get.call(null,keep_attrs,p1__30637_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__4423__auto__))
,symbols));
var len = cljs.core.count.call(null,symbols);
var G__30654 = (function (){var iter__26523__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4423__auto__){
return (function datascript$query$iter__30641(s__30642){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4423__auto__){
return (function (){
var s__30642__$1 = s__30642;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30642__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var t1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__26519__auto__ = ((function (s__30642__$1,acc,rels,symbols,t1,xs__4977__auto__,temp__4425__auto__,copy_map,len,keep_attrs,rel,temp__4423__auto__){
return (function datascript$query$iter__30641_$_iter__30643(s__30644){
return (new cljs.core.LazySeq(null,((function (s__30642__$1,acc,rels,symbols,t1,xs__4977__auto__,temp__4425__auto__,copy_map,len,keep_attrs,rel,temp__4423__auto__){
return (function (){
var s__30644__$1 = s__30644;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__30644__$1);
if(temp__4425__auto____$1){
var s__30644__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30644__$2)){
var c__26521__auto__ = cljs.core.chunk_first.call(null,s__30644__$2);
var size__26522__auto__ = cljs.core.count.call(null,c__26521__auto__);
var b__30646 = cljs.core.chunk_buffer.call(null,size__26522__auto__);
if((function (){var i__30645 = (0);
while(true){
if((i__30645 < size__26522__auto__)){
var t2 = cljs.core._nth.call(null,c__26521__auto__,i__30645);
cljs.core.chunk_append.call(null,b__30646,(function (){var res = cljs.core.aclone.call(null,t1);
var n__26654__auto___30657 = len;
var i_30658 = (0);
while(true){
if((i_30658 < n__26654__auto___30657)){
var temp__4425__auto___30659__$2 = (copy_map[i_30658]);
if(cljs.core.truth_(temp__4425__auto___30659__$2)){
var idx_30660 = temp__4425__auto___30659__$2;
(res[i_30658] = (t2[idx_30660]));
} else {
}

var G__30661 = (i_30658 + (1));
i_30658 = G__30661;
continue;
} else {
}
break;
}

return res;
})());

var G__30662 = (i__30645 + (1));
i__30645 = G__30662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30646),datascript$query$iter__30641_$_iter__30643.call(null,cljs.core.chunk_rest.call(null,s__30644__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30646),null);
}
} else {
var t2 = cljs.core.first.call(null,s__30644__$2);
return cljs.core.cons.call(null,(function (){var res = cljs.core.aclone.call(null,t1);
var n__26654__auto___30663 = len;
var i_30664 = (0);
while(true){
if((i_30664 < n__26654__auto___30663)){
var temp__4425__auto___30665__$2 = (copy_map[i_30664]);
if(cljs.core.truth_(temp__4425__auto___30665__$2)){
var idx_30666 = temp__4425__auto___30665__$2;
(res[i_30664] = (t2[idx_30666]));
} else {
}

var G__30667 = (i_30664 + (1));
i_30664 = G__30667;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__30641_$_iter__30643.call(null,cljs.core.rest.call(null,s__30644__$2)));
}
} else {
return null;
}
break;
}
});})(s__30642__$1,acc,rels,symbols,t1,xs__4977__auto__,temp__4425__auto__,copy_map,len,keep_attrs,rel,temp__4423__auto__))
,null,null));
});})(s__30642__$1,acc,rels,symbols,t1,xs__4977__auto__,temp__4425__auto__,copy_map,len,keep_attrs,rel,temp__4423__auto__))
;
var fs__26520__auto__ = cljs.core.seq.call(null,iterys__26519__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__26520__auto__){
return cljs.core.concat.call(null,fs__26520__auto__,datascript$query$iter__30641.call(null,cljs.core.rest.call(null,s__30642__$1)));
} else {
var G__30668 = cljs.core.rest.call(null,s__30642__$1);
s__30642__$1 = G__30668;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4423__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4423__auto__))
;
return iter__26523__auto__.call(null,acc);
})();
var G__30655 = cljs.core.next.call(null,rels);
var G__30656 = symbols;
acc = G__30654;
rels = G__30655;
symbols = G__30656;
continue;
}
} else {
return acc;
}
break;
}
});

datascript.query._collect.cljs$lang$maxFixedArity = 3;
datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.vec,datascript.query._collect.call(null,context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((!((var$ == null))) && (!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
var x__26406__auto__ = (((var$ == null))?null:var$);
var m__26407__auto__ = (datascript.query._context_resolve[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,var$,context);
} else {
var m__26407__auto____$1 = (datascript.query._context_resolve["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,var$,context);
} else {
throw cljs.core.missing_protocol.call(null,"IContextResolve.-context-resolve",var$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = true;

datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val.call(null,context,var$__$1.symbol);
});

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = true;

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
});

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = true;

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return cljs.core.get.call(null,datascript.query.built_in_aggregates,var$__$1.symbol);
});

datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = true;

datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
});
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.call(null,(function (element,fixed_value,i){
if(cljs.core.truth_(datascript.parser.aggregate_QMARK_.call(null,element))){
var f = datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.call(null,((function (f){
return (function (p1__30669_SHARP_){
return datascript.query._context_resolve.call(null,p1__30669_SHARP_,context);
});})(f))
,cljs.core.butlast.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.call(null,((function (f,args){
return (function (p1__30670_SHARP_){
return cljs.core.nth.call(null,p1__30670_SHARP_,i);
});})(f,args))
,tuples);
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first.call(null,tuples),cljs.core.range.call(null));
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__30671_SHARP_,p2__30672_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__30671_SHARP_))){
return p2__30672_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.call(null)));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of.call(null,cljs.core.complement.call(null,datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = ((function (group_idxs){
return (function (tuple){
return cljs.core.map.call(null,((function (group_idxs){
return (function (p1__30673_SHARP_){
return cljs.core.nth.call(null,tuple,p1__30673_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;
var grouped = cljs.core.group_by.call(null,group_fn,resultset);
var iter__26523__auto__ = ((function (group_idxs,group_fn,grouped){
return (function datascript$query$aggregate_$_iter__30682(s__30683){
return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){
var s__30683__$1 = s__30683;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30683__$1);
if(temp__4425__auto__){
var s__30683__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30683__$2)){
var c__26521__auto__ = cljs.core.chunk_first.call(null,s__30683__$2);
var size__26522__auto__ = cljs.core.count.call(null,c__26521__auto__);
var b__30685 = cljs.core.chunk_buffer.call(null,size__26522__auto__);
if((function (){var i__30684 = (0);
while(true){
if((i__30684 < size__26522__auto__)){
var vec__30688 = cljs.core._nth.call(null,c__26521__auto__,i__30684);
var _ = cljs.core.nth.call(null,vec__30688,(0),null);
var tuples = cljs.core.nth.call(null,vec__30688,(1),null);
cljs.core.chunk_append.call(null,b__30685,datascript.query._aggregate.call(null,find_elements,context,tuples));

var G__30690 = (i__30684 + (1));
i__30684 = G__30690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30685),datascript$query$aggregate_$_iter__30682.call(null,cljs.core.chunk_rest.call(null,s__30683__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30685),null);
}
} else {
var vec__30689 = cljs.core.first.call(null,s__30683__$2);
var _ = cljs.core.nth.call(null,vec__30689,(0),null);
var tuples = cljs.core.nth.call(null,vec__30689,(1),null);
return cljs.core.cons.call(null,datascript.query._aggregate.call(null,find_elements,context,tuples),datascript$query$aggregate_$_iter__30682.call(null,cljs.core.rest.call(null,s__30683__$2)));
}
} else {
return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;
return iter__26523__auto__.call(null,grouped);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

datascript.query._post_process = (function datascript$query$_post_process(find,tuples){
if((!((find == null))) && (!((find.datascript$query$IPostProcess$_post_process$arity$2 == null)))){
return find.datascript$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__26406__auto__ = (((find == null))?null:find);
var m__26407__auto__ = (datascript.query._post_process[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,find,tuples);
} else {
var m__26407__auto____$1 = (datascript.query._post_process["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,find,tuples);
} else {
throw cljs.core.missing_protocol.call(null,"IPostProcess.-post-process",find);
}
}
}
});

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = true;

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return tuples;
});

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = true;

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.first),tuples);
});

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = true;

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.ffirst.call(null,tuples);
});

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = true;

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.first.call(null,tuples);
});
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__26523__auto__ = (function datascript$query$pull_$_iter__30703(s__30704){
return (new cljs.core.LazySeq(null,(function (){
var s__30704__$1 = s__30704;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30704__$1);
if(temp__4425__auto__){
var s__30704__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30704__$2)){
var c__26521__auto__ = cljs.core.chunk_first.call(null,s__30704__$2);
var size__26522__auto__ = cljs.core.count.call(null,c__26521__auto__);
var b__30706 = cljs.core.chunk_buffer.call(null,size__26522__auto__);
if((function (){var i__30705 = (0);
while(true){
if((i__30705 < size__26522__auto__)){
var find = cljs.core._nth.call(null,c__26521__auto__,i__30705);
cljs.core.chunk_append.call(null,b__30706,(cljs.core.truth_(datascript.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull.call(null,datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__30715 = (i__30705 + (1));
i__30705 = G__30715;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30706),datascript$query$pull_$_iter__30703.call(null,cljs.core.chunk_rest.call(null,s__30704__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30706),null);
}
} else {
var find = cljs.core.first.call(null,s__30704__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(datascript.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull.call(null,datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__30703.call(null,cljs.core.rest.call(null,s__30704__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26523__auto__.call(null,find_elements);
})();
var iter__26523__auto__ = ((function (resolved){
return (function datascript$query$pull_$_iter__30707(s__30708){
return (new cljs.core.LazySeq(null,((function (resolved){
return (function (){
var s__30708__$1 = s__30708;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30708__$1);
if(temp__4425__auto__){
var s__30708__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30708__$2)){
var c__26521__auto__ = cljs.core.chunk_first.call(null,s__30708__$2);
var size__26522__auto__ = cljs.core.count.call(null,c__26521__auto__);
var b__30710 = cljs.core.chunk_buffer.call(null,size__26522__auto__);
if((function (){var i__30709 = (0);
while(true){
if((i__30709 < size__26522__auto__)){
var tuple = cljs.core._nth.call(null,c__26521__auto__,i__30709);
cljs.core.chunk_append.call(null,b__30710,cljs.core.mapv.call(null,((function (i__30709,tuple,c__26521__auto__,size__26522__auto__,b__30710,s__30708__$2,temp__4425__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__30713 = env;
var src = cljs.core.nth.call(null,vec__30713,(0),null);
var spec = cljs.core.nth.call(null,vec__30713,(1),null);
return datascript.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__30709,tuple,c__26521__auto__,size__26522__auto__,b__30710,s__30708__$2,temp__4425__auto__,resolved))
,resolved,tuple));

var G__30716 = (i__30709 + (1));
i__30709 = G__30716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30710),datascript$query$pull_$_iter__30707.call(null,cljs.core.chunk_rest.call(null,s__30708__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30710),null);
}
} else {
var tuple = cljs.core.first.call(null,s__30708__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (tuple,s__30708__$2,temp__4425__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__30714 = env;
var src = cljs.core.nth.call(null,vec__30714,(0),null);
var spec = cljs.core.nth.call(null,vec__30714,(1),null);
return datascript.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__30708__$2,temp__4425__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__30707.call(null,cljs.core.rest.call(null,s__30708__$2)));
}
} else {
return null;
}
break;
}
});})(resolved))
,null,null));
});})(resolved))
;
return iter__26523__auto__.call(null,resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_.call(null,datascript.lru.lru.call(null,datascript.query.lru_cache_size));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,datascript.query.query_cache),q,null);
if(cljs.core.truth_(temp__4423__auto__)){
var cached = temp__4423__auto__;
return cached;
} else {
var qp = datascript.parser.parse_query.call(null,q);
cljs.core._vreset_BANG_.call(null,datascript.query.query_cache,cljs.core.assoc.call(null,cljs.core._deref.call(null,datascript.query.query_cache),q,qp));

return qp;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__26816__auto__ = [];
var len__26809__auto___30722 = arguments.length;
var i__26810__auto___30723 = (0);
while(true){
if((i__26810__auto___30723 < len__26809__auto___30722)){
args__26816__auto__.push((arguments[i__26810__auto___30723]));

var G__30724 = (i__26810__auto___30723 + (1));
i__26810__auto___30723 = G__30724;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((1) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((1)),(0))):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26817__auto__);
});

datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query.call(null,q);
var find = new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements.call(null,find);
var find_vars = datascript.parser.find_vars.call(null,find);
var result_arity = cljs.core.count.call(null,find_elements);
var with$ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.call(null,find_vars,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__30720 = q;
var G__30720__$1 = ((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,G__30720):G__30720);
return G__30720__$1;
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins.call(null,(new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect.call(null,datascript.query._q.call(null,context,wheres),all_vars);
var G__30721 = resultset;
var G__30721__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.call(null,((function (G__30721,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset){
return (function (p1__30717_SHARP_){
return cljs.core.vec.call(null,cljs.core.subvec.call(null,p1__30717_SHARP_,(0),result_arity));
});})(G__30721,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset))
,G__30721):G__30721);
var G__30721__$2 = (cljs.core.truth_(cljs.core.some.call(null,datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate.call(null,find_elements,context,G__30721__$1):G__30721__$1);
var G__30721__$3 = (cljs.core.truth_(cljs.core.some.call(null,datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull.call(null,find_elements,context,G__30721__$2):G__30721__$2);
var G__30721__$4 = datascript.query._post_process.call(null,find,G__30721__$3)
;
return G__30721__$4;
});

datascript.query.q.cljs$lang$maxFixedArity = (1);

datascript.query.q.cljs$lang$applyTo = (function (seq30718){
var G__30719 = cljs.core.first.call(null,seq30718);
var seq30718__$1 = cljs.core.next.call(null,seq30718);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic(G__30719,seq30718__$1);
});

//# sourceMappingURL=query.js.map