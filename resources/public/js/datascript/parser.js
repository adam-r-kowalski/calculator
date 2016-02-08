// Compiled by ClojureScript 1.7.170 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');
datascript.parser.collect_vars_acc;

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__26406__auto__ = (((_ == null))?null:_);
var m__26407__auto__ = (datascript.parser._collect[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,_,pred,acc);
} else {
var m__26407__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__26406__auto__ = (((_ == null))?null:_);
var m__26407__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,_,acc);
} else {
var m__26407__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__26406__auto__ = (((_ == null))?null:_);
var m__26407__auto__ = (datascript.parser._postwalk[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,_,f);
} else {
var m__26407__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__29546_SHARP_,p2__29545_SHARP_){
var temp__4423__auto__ = parse_el.call(null,p2__29545_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var parsed = temp__4423__auto__;
return cljs.core.conj.call(null,p1__29546_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var args__26816__auto__ = [];
var len__26809__auto___29553 = arguments.length;
var i__26810__auto___29554 = (0);
while(true){
if((i__26810__auto___29554 < len__26809__auto___29553)){
args__26816__auto__.push((arguments[i__26810__auto___29554]));

var G__29555 = (i__26810__auto___29554 + (1));
i__26810__auto___29554 = G__29555;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((2) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((2)),(0))):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26817__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__29550){
var vec__29551 = p__29550;
var acc = cljs.core.nth.call(null,vec__29551,(0),null);
var acc__$1 = (function (){var or__25751__auto__ = acc;
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc__$1,form);
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc__$1);
} else {
if(cljs.core.truth_(datascript.db.seqable_QMARK_.call(null,form))){
return cljs.core.reduce.call(null,((function (acc__$1,vec__29551,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__29551,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq29547){
var G__29548 = cljs.core.first.call(null,seq29547);
var seq29547__$1 = cljs.core.next.call(null,seq29547);
var G__29549 = cljs.core.first.call(null,seq29547__$1);
var seq29547__$2 = cljs.core.next.call(null,seq29547__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__29548,G__29549,seq29547__$2);
});
datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__25751__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__25751__auto__){
return or__25751__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__29562){
var vec__29563 = p__29562;
var k = cljs.core.nth.call(null,vec__29563,(0),null);
var v = cljs.core.nth.call(null,vec__29563,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__29556_SHARP_){
return datascript$parser$postwalk.call(null,p1__29556_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__29557_SHARP_){
return datascript$parser$postwalk.call(null,p1__29557_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__25751__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return obj;
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29568,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29570 = k29568;
switch (G__29570) {
default:
return cljs.core.get.call(null,self__.__extmap,k29568,else__26368__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.Placeholder{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$ = true;

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29567){
var self__ = this;
var G__29567__$1 = this;
return (new cljs.core.RecordIter((0),G__29567__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29567){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29571 = cljs.core.keyword_identical_QMARK_;
var expr__29572 = k__26373__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29567),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29567){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.Placeholder(G__29567,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29564){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29565,acc29566){
var self__ = this;
var ___28494__auto____$1 = this;
return acc29566;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29566){
var self__ = this;
var ___28494__auto____$1 = this;
return acc29566;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__29569){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__29569),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29579,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29581 = (((k29579 instanceof cljs.core.Keyword))?k29579.fqn:null);
switch (G__29581) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29579,else__26368__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.Variable{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$ = true;

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29578){
var self__ = this;
var G__29578__$1 = this;
return (new cljs.core.RecordIter((0),G__29578__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29578){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29582 = cljs.core.keyword_identical_QMARK_;
var expr__29583 = k__26373__auto__;
if(cljs.core.truth_(pred__29582.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__29583))){
return (new datascript.parser.Variable(G__29578,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29578),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29578){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__29578,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29575){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f29575),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29576,acc29577){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29576,self__.symbol,acc29577);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29577){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc29577,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__29580){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__29580),null,cljs.core.dissoc.call(null,G__29580,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29590,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29592 = (((k29590 instanceof cljs.core.Keyword))?k29590.fqn:null);
switch (G__29592) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29590,else__26368__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.SrcVar{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29589){
var self__ = this;
var G__29589__$1 = this;
return (new cljs.core.RecordIter((0),G__29589__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29589){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29593 = cljs.core.keyword_identical_QMARK_;
var expr__29594 = k__26373__auto__;
if(cljs.core.truth_(pred__29593.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__29594))){
return (new datascript.parser.SrcVar(G__29589,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29589),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29589){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__29589,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29586){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f29586),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29587,acc29588){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29587,self__.symbol,acc29588);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29588){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc29588,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__29591){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__29591),null,cljs.core.dissoc.call(null,G__29591,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29601,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29603 = k29601;
switch (G__29603) {
default:
return cljs.core.get.call(null,self__.__extmap,k29601,else__26368__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$ = true;

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29600){
var self__ = this;
var G__29600__$1 = this;
return (new cljs.core.RecordIter((0),G__29600__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29600){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29604 = cljs.core.keyword_identical_QMARK_;
var expr__29605 = k__26373__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29600),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29600){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__29600,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29597){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29598,acc29599){
var self__ = this;
var ___28494__auto____$1 = this;
return acc29599;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29599){
var self__ = this;
var ___28494__auto____$1 = this;
return acc29599;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__29602){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__29602),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29612,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29614 = k29612;
switch (G__29614) {
default:
return cljs.core.get.call(null,self__.__extmap,k29612,else__26368__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.RulesVar{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29611){
var self__ = this;
var G__29611__$1 = this;
return (new cljs.core.RecordIter((0),G__29611__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29611){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29615 = cljs.core.keyword_identical_QMARK_;
var expr__29616 = k__26373__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29611),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29611){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.RulesVar(G__29611,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29608){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29609,acc29610){
var self__ = this;
var ___28494__auto____$1 = this;
return acc29610;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29610){
var self__ = this;
var ___28494__auto____$1 = this;
return acc29610;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__29613){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__29613),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29623,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29625 = (((k29623 instanceof cljs.core.Keyword))?k29623.fqn:null);
switch (G__29625) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29623,else__26368__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.Constant{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$ = true;

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29622){
var self__ = this;
var G__29622__$1 = this;
return (new cljs.core.RecordIter((0),G__29622__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29622){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29626 = cljs.core.keyword_identical_QMARK_;
var expr__29627 = k__26373__auto__;
if(cljs.core.truth_(pred__29626.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__29627))){
return (new datascript.parser.Constant(G__29622,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29622),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29622){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__29622,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29619){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f29619),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29620,acc29621){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29620,self__.value,acc29621);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29621){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc29621,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__29624){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__29624),null,cljs.core.dissoc.call(null,G__29624,new cljs.core.Keyword(null,"value","value",305978217)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29634,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29636 = (((k29634 instanceof cljs.core.Keyword))?k29634.fqn:null);
switch (G__29636) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29634,else__26368__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$ = true;

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29633){
var self__ = this;
var G__29633__$1 = this;
return (new cljs.core.RecordIter((0),G__29633__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29633){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29637 = cljs.core.keyword_identical_QMARK_;
var expr__29638 = k__26373__auto__;
if(cljs.core.truth_(pred__29637.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__29638))){
return (new datascript.parser.PlainSymbol(G__29633,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29633),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29633){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__29633,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29630){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f29630),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29631,acc29632){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29631,self__.symbol,acc29632);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29632){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc29632,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__29635){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__29635),null,cljs.core.dissoc.call(null,G__29635,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__25751__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
var or__25751__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__25751__auto____$1)){
return or__25751__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29645,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29647 = (((k29645 instanceof cljs.core.Keyword))?k29645.fqn:null);
switch (G__29647) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29645,else__26368__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.RuleVars{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29644){
var self__ = this;
var G__29644__$1 = this;
return (new cljs.core.RecordIter((0),G__29644__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29644){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29648 = cljs.core.keyword_identical_QMARK_;
var expr__29649 = k__26373__auto__;
if(cljs.core.truth_(pred__29648.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__29649))){
return (new datascript.parser.RuleVars(G__29644,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29648.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__29649))){
return (new datascript.parser.RuleVars(self__.required,G__29644,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29644),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29644){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__29644,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29641){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f29641),datascript.parser.postwalk.call(null,self__.free,f29641),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29642,acc29643){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29642,self__.free,datascript.parser.collect.call(null,pred29642,self__.required,acc29643));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29643){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc29643,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__29646){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__29646),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__29646),null,cljs.core.dissoc.call(null,G__29646,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__29653 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__29653,(0),null);
var rest = cljs.core.nth.call(null,vec__29653,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29658,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29660 = k29658;
switch (G__29660) {
default:
return cljs.core.get.call(null,self__.__extmap,k29658,else__26368__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29657){
var self__ = this;
var G__29657__$1 = this;
return (new cljs.core.RecordIter((0),G__29657__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29657){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29661 = cljs.core.keyword_identical_QMARK_;
var expr__29662 = k__26373__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29657),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29657){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__29657,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29654){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29655,acc29656){
var self__ = this;
var ___28494__auto____$1 = this;
return acc29656;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29656){
var self__ = this;
var ___28494__auto____$1 = this;
return acc29656;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__29659){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__29659),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29669,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29671 = (((k29669 instanceof cljs.core.Keyword))?k29669.fqn:null);
switch (G__29671) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29669,else__26368__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.BindScalar{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29668){
var self__ = this;
var G__29668__$1 = this;
return (new cljs.core.RecordIter((0),G__29668__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29668){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29672 = cljs.core.keyword_identical_QMARK_;
var expr__29673 = k__26373__auto__;
if(cljs.core.truth_(pred__29672.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__29673))){
return (new datascript.parser.BindScalar(G__29668,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29668),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29668){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__29668,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29665){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f29665),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29666,acc29667){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29666,self__.variable,acc29667);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29667){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc29667,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__29670){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__29670),null,cljs.core.dissoc.call(null,G__29670,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29680,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29682 = (((k29680 instanceof cljs.core.Keyword))?k29680.fqn:null);
switch (G__29682) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29680,else__26368__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.BindTuple{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29679){
var self__ = this;
var G__29679__$1 = this;
return (new cljs.core.RecordIter((0),G__29679__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29679){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29683 = cljs.core.keyword_identical_QMARK_;
var expr__29684 = k__26373__auto__;
if(cljs.core.truth_(pred__29683.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__29684))){
return (new datascript.parser.BindTuple(G__29679,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29679),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29679){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__29679,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29676){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f29676),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29677,acc29678){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29677,self__.bindings,acc29678);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29678){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc29678,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__29681){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__29681),null,cljs.core.dissoc.call(null,G__29681,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29691,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29693 = (((k29691 instanceof cljs.core.Keyword))?k29691.fqn:null);
switch (G__29693) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29691,else__26368__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.BindColl{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29690){
var self__ = this;
var G__29690__$1 = this;
return (new cljs.core.RecordIter((0),G__29690__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29690){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29694 = cljs.core.keyword_identical_QMARK_;
var expr__29695 = k__26373__auto__;
if(cljs.core.truth_(pred__29694.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__29695))){
return (new datascript.parser.BindColl(G__29690,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29690),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29690){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__29690,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29687){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f29687),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29688,acc29689){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29688,self__.binding,acc29689);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29689){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc29689,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__29692){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__29692),null,cljs.core.dissoc.call(null,G__29692,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datascript.parser.parse_binding;
datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__4425__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var var$ = temp__4425__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__25739__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__25739__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__25739__auto__;
}
})())){
var temp__4423__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var sub_bind = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__25751__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__4425__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__4425__auto__)){
var sub_bindings = temp__4425__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__25739__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__25739__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__25739__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__25751__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
var or__25751__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__25751__auto____$1)){
return or__25751__auto____$1;
} else {
var or__25751__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__25751__auto____$2)){
return or__25751__auto____$2;
} else {
var or__25751__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__25751__auto____$3)){
return or__25751__auto____$3;
} else {
var or__25751__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__25751__auto____$4)){
return or__25751__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__26406__auto__ = (((this$ == null))?null:this$);
var m__26407__auto__ = (datascript.parser._find_vars[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,this$);
} else {
var m__26407__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29702,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29704 = (((k29702 instanceof cljs.core.Keyword))?k29702.fqn:null);
switch (G__29704) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29702,else__26368__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.Aggregate{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29701){
var self__ = this;
var G__29701__$1 = this;
return (new cljs.core.RecordIter((0),G__29701__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29701){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29705 = cljs.core.keyword_identical_QMARK_;
var expr__29706 = k__26373__auto__;
if(cljs.core.truth_(pred__29705.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__29706))){
return (new datascript.parser.Aggregate(G__29701,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29705.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__29706))){
return (new datascript.parser.Aggregate(self__.fn,G__29701,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29701),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29701){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__29701,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29698){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f29698),datascript.parser.postwalk.call(null,self__.args,f29698),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29699,acc29700){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29699,self__.args,datascript.parser.collect.call(null,pred29699,self__.fn,acc29700));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29700){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc29700,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__29703){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__29703),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__29703),null,cljs.core.dissoc.call(null,G__29703,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29713,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29715 = (((k29713 instanceof cljs.core.Keyword))?k29713.fqn:null);
switch (G__29715) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29713,else__26368__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.Pull{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29712){
var self__ = this;
var G__29712__$1 = this;
return (new cljs.core.RecordIter((0),G__29712__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29712){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29716 = cljs.core.keyword_identical_QMARK_;
var expr__29717 = k__26373__auto__;
if(cljs.core.truth_(pred__29716.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__29717))){
return (new datascript.parser.Pull(G__29712,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29716.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__29717))){
return (new datascript.parser.Pull(self__.source,G__29712,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29716.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__29717))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__29712,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29712),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29712){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__29712,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29709){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f29709),datascript.parser.postwalk.call(null,self__.variable,f29709),datascript.parser.postwalk.call(null,self__.pattern,f29709),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29710,acc29711){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29710,self__.pattern,datascript.parser.collect.call(null,pred29710,self__.variable,datascript.parser.collect.call(null,pred29710,self__.source,acc29711)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29711){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc29711,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__29714){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__29714),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__29714),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__29714),null,cljs.core.dissoc.call(null,G__29714,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__26406__auto__ = (((this$ == null))?null:this$);
var m__26407__auto__ = (datascript.parser.find_elements[goog.typeOf(x__26406__auto__)]);
if(!((m__26407__auto__ == null))){
return m__26407__auto__.call(null,this$);
} else {
var m__26407__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__26407__auto____$1 == null))){
return m__26407__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29724,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29726 = (((k29724 instanceof cljs.core.Keyword))?k29724.fqn:null);
switch (G__29726) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29724,else__26368__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.FindRel{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29723){
var self__ = this;
var G__29723__$1 = this;
return (new cljs.core.RecordIter((0),G__29723__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29723){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29727 = cljs.core.keyword_identical_QMARK_;
var expr__29728 = k__26373__auto__;
if(cljs.core.truth_(pred__29727.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__29728))){
return (new datascript.parser.FindRel(G__29723,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29723),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29723){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__29723,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29720){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f29720),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29721,acc29722){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29721,self__.elements,acc29722);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29722){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc29722,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__29725){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__29725),null,cljs.core.dissoc.call(null,G__29725,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29735,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29737 = (((k29735 instanceof cljs.core.Keyword))?k29735.fqn:null);
switch (G__29737) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29735,else__26368__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.FindColl{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29734){
var self__ = this;
var G__29734__$1 = this;
return (new cljs.core.RecordIter((0),G__29734__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29734){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29738 = cljs.core.keyword_identical_QMARK_;
var expr__29739 = k__26373__auto__;
if(cljs.core.truth_(pred__29738.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__29739))){
return (new datascript.parser.FindColl(G__29734,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29734),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29734){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__29734,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29731){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f29731),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29732,acc29733){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29732,self__.element,acc29733);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29733){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc29733,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__29736){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__29736),null,cljs.core.dissoc.call(null,G__29736,new cljs.core.Keyword(null,"element","element",1974019749)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29746,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29748 = (((k29746 instanceof cljs.core.Keyword))?k29746.fqn:null);
switch (G__29748) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29746,else__26368__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.FindScalar{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29745){
var self__ = this;
var G__29745__$1 = this;
return (new cljs.core.RecordIter((0),G__29745__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29745){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29749 = cljs.core.keyword_identical_QMARK_;
var expr__29750 = k__26373__auto__;
if(cljs.core.truth_(pred__29749.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__29750))){
return (new datascript.parser.FindScalar(G__29745,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29745),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29745){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__29745,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29742){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f29742),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29743,acc29744){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29743,self__.element,acc29744);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29744){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc29744,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__29747){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__29747),null,cljs.core.dissoc.call(null,G__29747,new cljs.core.Keyword(null,"element","element",1974019749)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29757,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29759 = (((k29757 instanceof cljs.core.Keyword))?k29757.fqn:null);
switch (G__29759) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29757,else__26368__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.FindTuple{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29756){
var self__ = this;
var G__29756__$1 = this;
return (new cljs.core.RecordIter((0),G__29756__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29756){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29760 = cljs.core.keyword_identical_QMARK_;
var expr__29761 = k__26373__auto__;
if(cljs.core.truth_(pred__29760.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__29761))){
return (new datascript.parser.FindTuple(G__29756,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29756),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29756){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__29756,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29753){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f29753),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29754,acc29755){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29754,self__.elements,acc29755);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29755){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc29755,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__29758){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__29758),null,cljs.core.dissoc.call(null,G__29758,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__29765 = form;
var fn = cljs.core.nth.call(null,vec__29765,(0),null);
var args = cljs.core.nthnext.call(null,vec__29765,(1));
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__25739__auto__ = fn_STAR_;
if(cljs.core.truth_(and__25739__auto__)){
return args_STAR_;
} else {
return and__25739__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__29767 = form;
var _ = cljs.core.nth.call(null,vec__29767,(0),null);
var fn = cljs.core.nth.call(null,vec__29767,(1),null);
var args = cljs.core.nthnext.call(null,vec__29767,(2));
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__25739__auto__ = fn_STAR_;
if(cljs.core.truth_(and__25739__auto__)){
return args_STAR_;
} else {
return and__25739__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__29769 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__29769,(0),null);
var pattern = cljs.core.nth.call(null,vec__29769,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__25751__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
})();
if(cljs.core.truth_((function (){var and__25739__auto__ = src_STAR_;
if(cljs.core.truth_(and__25739__auto__)){
var and__25739__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__25739__auto____$1)){
return pattern_STAR_;
} else {
return and__25739__auto____$1;
}
} else {
return and__25739__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__25751__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
var or__25751__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__25751__auto____$1)){
return or__25751__auto____$1;
} else {
var or__25751__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__25751__auto____$2)){
return or__25751__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__29771 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
var G__29771__$1 = (((G__29771 == null))?null:(new datascript.parser.FindRel(G__29771,null,null,null)));
return G__29771__$1;
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__29773 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
var G__29773__$1 = (((G__29773 == null))?null:(new datascript.parser.FindColl(G__29773,null,null,null)));
return G__29773__$1;
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__29775 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
var G__29775__$1 = (((G__29775 == null))?null:(new datascript.parser.FindScalar(G__29775,null,null,null)));
return G__29775__$1;
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__29777 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
var G__29777__$1 = (((G__29777 == null))?null:(new datascript.parser.FindTuple(G__29777,null,null,null)));
return G__29777__$1;
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__25751__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
var or__25751__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__25751__auto____$1)){
return or__25751__auto____$1;
} else {
var or__25751__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__25751__auto____$2)){
return or__25751__auto____$2;
} else {
var or__25751__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__25751__auto____$3)){
return or__25751__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__25751__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4423__auto__ = (function (){var or__25751__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return datascript.parser.parse_rules_var.call(null,form);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var var$ = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__25751__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :in clause, expected (src-var | % | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29782,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29784 = (((k29782 instanceof cljs.core.Keyword))?k29782.fqn:null);
switch (G__29784) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29782,else__26368__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.Pattern{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29781){
var self__ = this;
var G__29781__$1 = this;
return (new cljs.core.RecordIter((0),G__29781__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29781){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29785 = cljs.core.keyword_identical_QMARK_;
var expr__29786 = k__26373__auto__;
if(cljs.core.truth_(pred__29785.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__29786))){
return (new datascript.parser.Pattern(G__29781,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29785.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__29786))){
return (new datascript.parser.Pattern(self__.source,G__29781,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29781),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29781){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__29781,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29778){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f29778),datascript.parser.postwalk.call(null,self__.pattern,f29778),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29779,acc29780){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29779,self__.pattern,datascript.parser.collect.call(null,pred29779,self__.source,acc29780));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29780){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc29780,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__29783){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__29783),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__29783),null,cljs.core.dissoc.call(null,G__29783,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29793,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29795 = (((k29793 instanceof cljs.core.Keyword))?k29793.fqn:null);
switch (G__29795) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29793,else__26368__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.Predicate{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29792){
var self__ = this;
var G__29792__$1 = this;
return (new cljs.core.RecordIter((0),G__29792__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29792){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29796 = cljs.core.keyword_identical_QMARK_;
var expr__29797 = k__26373__auto__;
if(cljs.core.truth_(pred__29796.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__29797))){
return (new datascript.parser.Predicate(G__29792,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29796.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__29797))){
return (new datascript.parser.Predicate(self__.fn,G__29792,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29792),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29792){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__29792,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29789){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f29789),datascript.parser.postwalk.call(null,self__.args,f29789),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29790,acc29791){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29790,self__.args,datascript.parser.collect.call(null,pred29790,self__.fn,acc29791));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29791){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc29791,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__29794){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__29794),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__29794),null,cljs.core.dissoc.call(null,G__29794,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29804,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29806 = (((k29804 instanceof cljs.core.Keyword))?k29804.fqn:null);
switch (G__29806) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29804,else__26368__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.Function{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$ = true;

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29803){
var self__ = this;
var G__29803__$1 = this;
return (new cljs.core.RecordIter((0),G__29803__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29803){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29807 = cljs.core.keyword_identical_QMARK_;
var expr__29808 = k__26373__auto__;
if(cljs.core.truth_(pred__29807.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__29808))){
return (new datascript.parser.Function(G__29803,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29807.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__29808))){
return (new datascript.parser.Function(self__.fn,G__29803,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29807.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__29808))){
return (new datascript.parser.Function(self__.fn,self__.args,G__29803,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29803),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29803){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__29803,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29800){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f29800),datascript.parser.postwalk.call(null,self__.args,f29800),datascript.parser.postwalk.call(null,self__.binding,f29800),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29801,acc29802){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29801,self__.binding,datascript.parser.collect.call(null,pred29801,self__.args,datascript.parser.collect.call(null,pred29801,self__.fn,acc29802)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29802){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc29802,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__29805){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__29805),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__29805),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__29805),null,cljs.core.dissoc.call(null,G__29805,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29815,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29817 = (((k29815 instanceof cljs.core.Keyword))?k29815.fqn:null);
switch (G__29817) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29815,else__26368__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29814){
var self__ = this;
var G__29814__$1 = this;
return (new cljs.core.RecordIter((0),G__29814__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29814){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29818 = cljs.core.keyword_identical_QMARK_;
var expr__29819 = k__26373__auto__;
if(cljs.core.truth_(pred__29818.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__29819))){
return (new datascript.parser.RuleExpr(G__29814,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29818.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__29819))){
return (new datascript.parser.RuleExpr(self__.source,G__29814,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29818.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__29819))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__29814,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29814),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29814){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__29814,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29811){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f29811),datascript.parser.postwalk.call(null,self__.name,f29811),datascript.parser.postwalk.call(null,self__.args,f29811),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29812,acc29813){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29812,self__.args,datascript.parser.collect.call(null,pred29812,self__.name,datascript.parser.collect.call(null,pred29812,self__.source,acc29813)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29813){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc29813,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__29816){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__29816),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__29816),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__29816),null,cljs.core.dissoc.call(null,G__29816,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29826,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29828 = (((k29826 instanceof cljs.core.Keyword))?k29826.fqn:null);
switch (G__29828) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29826,else__26368__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.Not{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$ = true;

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29825){
var self__ = this;
var G__29825__$1 = this;
return (new cljs.core.RecordIter((0),G__29825__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29825){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29829 = cljs.core.keyword_identical_QMARK_;
var expr__29830 = k__26373__auto__;
if(cljs.core.truth_(pred__29829.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__29830))){
return (new datascript.parser.Not(G__29825,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29829.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__29830))){
return (new datascript.parser.Not(self__.source,G__29825,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29829.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__29830))){
return (new datascript.parser.Not(self__.source,self__.vars,G__29825,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29825),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29825){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__29825,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29822){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f29822),datascript.parser.postwalk.call(null,self__.vars,f29822),datascript.parser.postwalk.call(null,self__.clauses,f29822),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29823,acc29824){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29823,self__.clauses,datascript.parser.collect.call(null,pred29823,self__.vars,datascript.parser.collect.call(null,pred29823,self__.source,acc29824)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29824){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc29824,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__29827){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__29827),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__29827),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__29827),null,cljs.core.dissoc.call(null,G__29827,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29837,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29839 = (((k29837 instanceof cljs.core.Keyword))?k29837.fqn:null);
switch (G__29839) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29837,else__26368__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.Or{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$ = true;

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29836){
var self__ = this;
var G__29836__$1 = this;
return (new cljs.core.RecordIter((0),G__29836__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29836){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29840 = cljs.core.keyword_identical_QMARK_;
var expr__29841 = k__26373__auto__;
if(cljs.core.truth_(pred__29840.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__29841))){
return (new datascript.parser.Or(G__29836,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29840.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__29841))){
return (new datascript.parser.Or(self__.source,G__29836,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29840.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__29841))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__29836,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29836),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29836){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__29836,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29833){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f29833),datascript.parser.postwalk.call(null,self__.rule_vars,f29833),datascript.parser.postwalk.call(null,self__.clauses,f29833),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29834,acc29835){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29834,self__.clauses,datascript.parser.collect.call(null,pred29834,self__.rule_vars,datascript.parser.collect.call(null,pred29834,self__.source,acc29835)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29835){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc29835,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__29838){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__29838),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__29838),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__29838),null,cljs.core.dissoc.call(null,G__29838,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29848,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29850 = (((k29848 instanceof cljs.core.Keyword))?k29848.fqn:null);
switch (G__29850) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29848,else__26368__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.And{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$ = true;

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29847){
var self__ = this;
var G__29847__$1 = this;
return (new cljs.core.RecordIter((0),G__29847__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29847){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29851 = cljs.core.keyword_identical_QMARK_;
var expr__29852 = k__26373__auto__;
if(cljs.core.truth_(pred__29851.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__29852))){
return (new datascript.parser.And(G__29847,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29847),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29847){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__29847,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29844){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f29844),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29845,acc29846){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29845,self__.clauses,acc29846);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29846){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc29846,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__29849){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__29849),null,cljs.core.dissoc.call(null,G__29849,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});

datascript.parser.parse_clause;

datascript.parser.parse_clauses;
datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__25751__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
var or__25751__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__25751__auto____$1)){
return or__25751__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__4423__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var source_STAR_ = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__29856 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__29856,(0),null);
var next_form = cljs.core.nth.call(null,vec__29856,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__4425__auto____$1)){
var pattern_STAR_ = temp__4425__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__29858 = form;
var fn = cljs.core.nth.call(null,vec__29858,(0),null);
var args = cljs.core.nthnext.call(null,vec__29858,(1));
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__25751__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__25739__auto__ = fn_STAR_;
if(cljs.core.truth_(and__25739__auto__)){
return args_STAR_;
} else {
return and__25739__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__4425__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4425__auto__)){
var vec__29860 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__29860,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__29860,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__29863 = form;
var call = cljs.core.nth.call(null,vec__29863,(0),null);
var binding = cljs.core.nth.call(null,vec__29863,(1),null);
var temp__4425__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__29864 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__29864,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__29864,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__4425__auto____$1)){
var binding_STAR_ = temp__4425__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__29867 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__29867,(0),null);
var next_form = cljs.core.nth.call(null,vec__29867,(1),null);
var vec__29868 = next_form;
var name = cljs.core.nth.call(null,vec__29868,(0),null);
var args = cljs.core.nthnext.call(null,vec__29868,(1));
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript$parser$collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript$parser$collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_29871 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_29871)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_29871)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__29874 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__29874,(0),null);
var next_form = cljs.core.nth.call(null,vec__29874,(1),null);
var vec__29875 = next_form;
var sym = cljs.core.nth.call(null,vec__29875,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__29875,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__29878 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__29878,(0),null);
var next_form = cljs.core.nth.call(null,vec__29878,(1),null);
var vec__29879 = next_form;
var sym = cljs.core.nth.call(null,vec__29879,(0),null);
var vars = cljs.core.nth.call(null,vec__29879,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__29879,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__25739__auto__ = vars_STAR_;
if(cljs.core.truth_(and__25739__auto__)){
return clauses_STAR_;
} else {
return and__25739__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__29888 = clause;
var map__29888__$1 = ((((!((map__29888 == null)))?((((map__29888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29888):map__29888);
var map__29889 = cljs.core.get.call(null,map__29888__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__29889__$1 = ((((!((map__29889 == null)))?((((map__29889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29889):map__29889);
var required = cljs.core.get.call(null,map__29889__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__29889__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__29888__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__29892_29896 = cljs.core.seq.call(null,clauses);
var chunk__29893_29897 = null;
var count__29894_29898 = (0);
var i__29895_29899 = (0);
while(true){
if((i__29895_29899 < count__29894_29898)){
var clause_29900__$1 = cljs.core._nth.call(null,chunk__29893_29897,i__29895_29899);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_29900__$1], null),form);

var G__29901 = seq__29892_29896;
var G__29902 = chunk__29893_29897;
var G__29903 = count__29894_29898;
var G__29904 = (i__29895_29899 + (1));
seq__29892_29896 = G__29901;
chunk__29893_29897 = G__29902;
count__29894_29898 = G__29903;
i__29895_29899 = G__29904;
continue;
} else {
var temp__4425__auto___29905 = cljs.core.seq.call(null,seq__29892_29896);
if(temp__4425__auto___29905){
var seq__29892_29906__$1 = temp__4425__auto___29905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29892_29906__$1)){
var c__26554__auto___29907 = cljs.core.chunk_first.call(null,seq__29892_29906__$1);
var G__29908 = cljs.core.chunk_rest.call(null,seq__29892_29906__$1);
var G__29909 = c__26554__auto___29907;
var G__29910 = cljs.core.count.call(null,c__26554__auto___29907);
var G__29911 = (0);
seq__29892_29896 = G__29908;
chunk__29893_29897 = G__29909;
count__29894_29898 = G__29910;
i__29895_29899 = G__29911;
continue;
} else {
var clause_29912__$1 = cljs.core.first.call(null,seq__29892_29906__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_29912__$1], null),form);

var G__29913 = cljs.core.next.call(null,seq__29892_29906__$1);
var G__29914 = null;
var G__29915 = (0);
var G__29916 = (0);
seq__29892_29896 = G__29913;
chunk__29893_29897 = G__29914;
count__29894_29898 = G__29915;
i__29895_29899 = G__29916;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__29919 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__29919,(0),null);
var next_form = cljs.core.nth.call(null,vec__29919,(1),null);
var vec__29920 = next_form;
var sym = cljs.core.nth.call(null,vec__29920,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__29920,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__29923 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__29923,(0),null);
var next_form = cljs.core.nth.call(null,vec__29923,(1),null);
var vec__29924 = next_form;
var sym = cljs.core.nth.call(null,vec__29924,(0),null);
var vars = cljs.core.nth.call(null,vec__29924,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__29924,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__25739__auto__ = vars_STAR_;
if(cljs.core.truth_(and__25739__auto__)){
return clauses_STAR_;
} else {
return and__25739__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__25751__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
var or__25751__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__25751__auto____$1)){
return or__25751__auto____$1;
} else {
var or__25751__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__25751__auto____$2)){
return or__25751__auto____$2;
} else {
var or__25751__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__25751__auto____$3)){
return or__25751__auto____$3;
} else {
var or__25751__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__25751__auto____$4)){
return or__25751__auto____$4;
} else {
var or__25751__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__25751__auto____$5)){
return or__25751__auto____$5;
} else {
var or__25751__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__25751__auto____$6)){
return or__25751__auto____$6;
} else {
var or__25751__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__25751__auto____$7)){
return or__25751__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__25751__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29930,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29932 = (((k29930 instanceof cljs.core.Keyword))?k29930.fqn:null);
switch (G__29932) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29930,else__26368__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29929){
var self__ = this;
var G__29929__$1 = this;
return (new cljs.core.RecordIter((0),G__29929__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29929){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29933 = cljs.core.keyword_identical_QMARK_;
var expr__29934 = k__26373__auto__;
if(cljs.core.truth_(pred__29933.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__29934))){
return (new datascript.parser.RuleBranch(G__29929,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29933.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__29934))){
return (new datascript.parser.RuleBranch(self__.vars,G__29929,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29929),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29929){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__29929,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29926){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f29926),datascript.parser.postwalk.call(null,self__.clauses,f29926),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29927,acc29928){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29927,self__.clauses,datascript.parser.collect.call(null,pred29927,self__.vars,acc29928));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29928){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc29928,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__29931){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__29931),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__29931),null,cljs.core.dissoc.call(null,G__29931,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k29941,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__29943 = (((k29941 instanceof cljs.core.Keyword))?k29941.fqn:null);
switch (G__29943) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29941,else__26368__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.Rule{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$ = true;

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29940){
var self__ = this;
var G__29940__$1 = this;
return (new cljs.core.RecordIter((0),G__29940__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__29940){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__29944 = cljs.core.keyword_identical_QMARK_;
var expr__29945 = k__26373__auto__;
if(cljs.core.truth_(pred__29944.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__29945))){
return (new datascript.parser.Rule(G__29940,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29944.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__29945))){
return (new datascript.parser.Rule(self__.name,G__29940,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__29940),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__29940){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__29940,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29937){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f29937),datascript.parser.postwalk.call(null,self__.branches,f29937),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29938,acc29939){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29938,self__.branches,datascript.parser.collect.call(null,pred29938,self__.name,acc29939));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc29939){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc29939,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__29942){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__29942),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__29942),null,cljs.core.dissoc.call(null,G__29942,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__29948_SHARP_){
return (p1__29948_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__29949_SHARP_){
return (p1__29949_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Reference to the unknown variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__29952 = form;
var head = cljs.core.nth.call(null,vec__29952,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__29952,(1));
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__29953 = head;
var name = cljs.core.nth.call(null,vec__29953,(0),null);
var vars = cljs.core.nthnext.call(null,vec__29953,(1));
var name_STAR_ = (function (){var or__25751__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__25751__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__29960 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__29962 = null;
var count__29963 = (0);
var i__29964 = (0);
while(true){
if((i__29964 < count__29963)){
var b = cljs.core._nth.call(null,chunk__29962,i__29964);
var vars_29966 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_29966))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_29966)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__29967 = seq__29960;
var G__29968 = chunk__29962;
var G__29969 = count__29963;
var G__29970 = (i__29964 + (1));
seq__29960 = G__29967;
chunk__29962 = G__29968;
count__29963 = G__29969;
i__29964 = G__29970;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29960);
if(temp__4425__auto__){
var seq__29960__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29960__$1)){
var c__26554__auto__ = cljs.core.chunk_first.call(null,seq__29960__$1);
var G__29971 = cljs.core.chunk_rest.call(null,seq__29960__$1);
var G__29972 = c__26554__auto__;
var G__29973 = cljs.core.count.call(null,c__26554__auto__);
var G__29974 = (0);
seq__29960 = G__29971;
chunk__29962 = G__29972;
count__29963 = G__29973;
i__29964 = G__29974;
continue;
} else {
var b = cljs.core.first.call(null,seq__29960__$1);
var vars_29975 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_29975))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_29975)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__29976 = cljs.core.next.call(null,seq__29960__$1);
var G__29977 = null;
var G__29978 = (0);
var G__29979 = (0);
seq__29960 = G__29976;
chunk__29962 = G__29977;
count__29963 = G__29978;
i__29964 = G__29979;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__26523__auto__ = (function datascript$parser$parse_rules_$_iter__29989(s__29990){
return (new cljs.core.LazySeq(null,(function (){
var s__29990__$1 = s__29990;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29990__$1);
if(temp__4425__auto__){
var s__29990__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29990__$2)){
var c__26521__auto__ = cljs.core.chunk_first.call(null,s__29990__$2);
var size__26522__auto__ = cljs.core.count.call(null,c__26521__auto__);
var b__29992 = cljs.core.chunk_buffer.call(null,size__26522__auto__);
if((function (){var i__29991 = (0);
while(true){
if((i__29991 < size__26522__auto__)){
var vec__29995 = cljs.core._nth.call(null,c__26521__auto__,i__29991);
var name = cljs.core.nth.call(null,vec__29995,(0),null);
var branches = cljs.core.nth.call(null,vec__29995,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__29991,vec__29995,name,branches,c__26521__auto__,size__26522__auto__,b__29992,s__29990__$2,temp__4425__auto__){
return (function (p1__29980_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__29980_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__29980_SHARP_),null,null,null));
});})(i__29991,vec__29995,name,branches,c__26521__auto__,size__26522__auto__,b__29992,s__29990__$2,temp__4425__auto__))
,branches);
cljs.core.chunk_append.call(null,b__29992,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__29997 = (i__29991 + (1));
i__29991 = G__29997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29992),datascript$parser$parse_rules_$_iter__29989.call(null,cljs.core.chunk_rest.call(null,s__29990__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29992),null);
}
} else {
var vec__29996 = cljs.core.first.call(null,s__29990__$2);
var name = cljs.core.nth.call(null,vec__29996,(0),null);
var branches = cljs.core.nth.call(null,vec__29996,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__29996,name,branches,s__29990__$2,temp__4425__auto__){
return (function (p1__29980_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__29980_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__29980_SHARP_),null,null,null));
});})(vec__29996,name,branches,s__29990__$2,temp__4425__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__29989.call(null,cljs.core.rest.call(null,s__29990__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26523__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26365__auto__,k__26366__auto__){
var self__ = this;
var this__26365__auto____$1 = this;
return cljs.core._lookup.call(null,this__26365__auto____$1,k__26366__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26367__auto__,k30002,else__26368__auto__){
var self__ = this;
var this__26367__auto____$1 = this;
var G__30004 = (((k30002 instanceof cljs.core.Keyword))?k30002.fqn:null);
switch (G__30004) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30002,else__26368__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26379__auto__,writer__26380__auto__,opts__26381__auto__){
var self__ = this;
var this__26379__auto____$1 = this;
var pr_pair__26382__auto__ = ((function (this__26379__auto____$1){
return (function (keyval__26383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,cljs.core.pr_writer,""," ","",opts__26381__auto__,keyval__26383__auto__);
});})(this__26379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26380__auto__,pr_pair__26382__auto__,"#datascript.parser.Query{",", ","}",opts__26381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$ = true;

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30001){
var self__ = this;
var G__30001__$1 = this;
return (new cljs.core.RecordIter((0),G__30001__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26363__auto__){
var self__ = this;
var this__26363__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26359__auto__){
var self__ = this;
var this__26359__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26369__auto__){
var self__ = this;
var this__26369__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26360__auto__){
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

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26361__auto__,other__26362__auto__){
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

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26374__auto__,k__26375__auto__){
var self__ = this;
var this__26374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__26375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26374__auto____$1),self__.__meta),k__26375__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26375__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26372__auto__,k__26373__auto__,G__30001){
var self__ = this;
var this__26372__auto____$1 = this;
var pred__30005 = cljs.core.keyword_identical_QMARK_;
var expr__30006 = k__26373__auto__;
if(cljs.core.truth_(pred__30005.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__30006))){
return (new datascript.parser.Query(G__30001,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30005.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__30006))){
return (new datascript.parser.Query(self__.find,G__30001,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30005.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__30006))){
return (new datascript.parser.Query(self__.find,self__.with$,G__30001,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30005.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__30006))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__30001,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26373__auto__,G__30001),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26377__auto__){
var self__ = this;
var this__26377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26364__auto__,G__30001){
var self__ = this;
var this__26364__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__30001,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26370__auto__,entry__26371__auto__){
var self__ = this;
var this__26370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26371__auto__)){
return cljs.core._assoc.call(null,this__26370__auto____$1,cljs.core._nth.call(null,entry__26371__auto__,(0)),cljs.core._nth.call(null,entry__26371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26370__auto____$1,entry__26371__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__28491__auto__,f29998){
var self__ = this;
var this__28491__auto____$1 = this;
var new__28492__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f29998),datascript.parser.postwalk.call(null,self__.with$,f29998),datascript.parser.postwalk.call(null,self__.in$,f29998),datascript.parser.postwalk.call(null,self__.where,f29998),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__28491__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__28493__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__28492__auto__,meta__28493__auto__);
} else {
return new__28492__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___28494__auto__,pred29999,acc30000){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect.call(null,pred29999,self__.where,datascript.parser.collect.call(null,pred29999,self__.in$,datascript.parser.collect.call(null,pred29999,self__.with$,datascript.parser.collect.call(null,pred29999,self__.find,acc30000))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___28494__auto__,acc30000){
var self__ = this;
var ___28494__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc30000,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__26399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__26399__auto__,writer__26400__auto__){
return cljs.core._write.call(null,writer__26400__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__30003){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__30003),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__30003),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__30003),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__30003),null,cljs.core.dissoc.call(null,G__30003,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4423__auto__)){
var q = temp__4423__auto__;
if((q instanceof cljs.core.Keyword)){
var G__30009 = parsed;
var G__30010 = q;
var G__30011 = cljs.core.next.call(null,qs);
parsed = G__30009;
key = G__30010;
qs = G__30011;
continue;
} else {
var G__30012 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__30013 = key;
var G__30014 = cljs.core.next.call(null,qs);
parsed = G__30012;
key = G__30013;
qs = G__30014;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_30021 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_30022 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_30023 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_30024 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_30025 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_30021,with_vars_30022),clojure.set.union.call(null,where_vars_30024,in_vars_30023));
var shared_30026 = clojure.set.intersection.call(null,find_vars_30021,with_vars_30022);
if(cljs.core.empty_QMARK_.call(null,unknown_30025)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_30025)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_30025,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_30026)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_30026)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_30026,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_30027 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_30028 = datascript.parser.collect.call(null,((function (in_vars_30027){
return (function (p1__30015_SHARP_){
return (p1__30015_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_30027))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_30029 = datascript.parser.collect.call(null,((function (in_vars_30027,in_sources_30028){
return (function (p1__30016_SHARP_){
return (p1__30016_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_30027,in_sources_30028))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__25739__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_30027);
if(cljs.core.truth_(and__25739__auto__)){
var and__25739__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_30028);
if(cljs.core.truth_(and__25739__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_30029);
} else {
return and__25739__auto____$1;
}
} else {
return and__25739__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_30030 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_30030))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_30031 = datascript.parser.collect.call(null,(function (p1__30017_SHARP_){
return (p1__30017_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_30032 = datascript.parser.collect.call(null,((function (in_sources_30031){
return (function (p1__30018_SHARP_){
return (p1__30018_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_30031))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_30033 = clojure.set.difference.call(null,where_sources_30032,in_sources_30031);
if(cljs.core.empty_QMARK_.call(null,unknown_30033)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_30033)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_30033,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__30019_SHARP_){
return (p1__30019_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__30020_SHARP_){
return (p1__30020_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"with","with",-1536296876),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__4425__auto__)){
var with$ = temp__4425__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"where","where",-2044795965),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map