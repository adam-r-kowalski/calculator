// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__38044__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__38043 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__38043,(0),null);
var body = cljs.core.nthnext.call(null,vec__38043,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__38044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38045__i = 0, G__38045__a = new Array(arguments.length -  0);
while (G__38045__i < G__38045__a.length) {G__38045__a[G__38045__i] = arguments[G__38045__i + 0]; ++G__38045__i;}
  args = new cljs.core.IndexedSeq(G__38045__a,0);
} 
return G__38044__delegate.call(this,args);};
G__38044.cljs$lang$maxFixedArity = 0;
G__38044.cljs$lang$applyTo = (function (arglist__38046){
var args = cljs.core.seq(arglist__38046);
return G__38044__delegate(args);
});
G__38044.cljs$core$IFn$_invoke$arity$variadic = G__38044__delegate;
return G__38044;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__26523__auto__ = (function sablono$core$update_arglists_$_iter__38051(s__38052){
return (new cljs.core.LazySeq(null,(function (){
var s__38052__$1 = s__38052;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__38052__$1);
if(temp__4425__auto__){
var s__38052__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38052__$2)){
var c__26521__auto__ = cljs.core.chunk_first.call(null,s__38052__$2);
var size__26522__auto__ = cljs.core.count.call(null,c__26521__auto__);
var b__38054 = cljs.core.chunk_buffer.call(null,size__26522__auto__);
if((function (){var i__38053 = (0);
while(true){
if((i__38053 < size__26522__auto__)){
var args = cljs.core._nth.call(null,c__26521__auto__,i__38053);
cljs.core.chunk_append.call(null,b__38054,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38055 = (i__38053 + (1));
i__38053 = G__38055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38054),sablono$core$update_arglists_$_iter__38051.call(null,cljs.core.chunk_rest.call(null,s__38052__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38054),null);
}
} else {
var args = cljs.core.first.call(null,s__38052__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__38051.call(null,cljs.core.rest.call(null,s__38052__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26523__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__26816__auto__ = [];
var len__26809__auto___38061 = arguments.length;
var i__26810__auto___38062 = (0);
while(true){
if((i__26810__auto___38062 < len__26809__auto___38061)){
args__26816__auto__.push((arguments[i__26810__auto___38062]));

var G__38063 = (i__26810__auto___38062 + (1));
i__26810__auto___38062 = G__38063;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((0) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__26817__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__26523__auto__ = (function sablono$core$iter__38057(s__38058){
return (new cljs.core.LazySeq(null,(function (){
var s__38058__$1 = s__38058;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__38058__$1);
if(temp__4425__auto__){
var s__38058__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38058__$2)){
var c__26521__auto__ = cljs.core.chunk_first.call(null,s__38058__$2);
var size__26522__auto__ = cljs.core.count.call(null,c__26521__auto__);
var b__38060 = cljs.core.chunk_buffer.call(null,size__26522__auto__);
if((function (){var i__38059 = (0);
while(true){
if((i__38059 < size__26522__auto__)){
var style = cljs.core._nth.call(null,c__26521__auto__,i__38059);
cljs.core.chunk_append.call(null,b__38060,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38064 = (i__38059 + (1));
i__38059 = G__38064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38060),sablono$core$iter__38057.call(null,cljs.core.chunk_rest.call(null,s__38058__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38060),null);
}
} else {
var style = cljs.core.first.call(null,s__38058__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__38057.call(null,cljs.core.rest.call(null,s__38058__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26523__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq38056){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38056));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to38065 = (function sablono$core$link_to38065(var_args){
var args__26816__auto__ = [];
var len__26809__auto___38068 = arguments.length;
var i__26810__auto___38069 = (0);
while(true){
if((i__26810__auto___38069 < len__26809__auto___38068)){
args__26816__auto__.push((arguments[i__26810__auto___38069]));

var G__38070 = (i__26810__auto___38069 + (1));
i__26810__auto___38069 = G__38070;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((1) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((1)),(0))):null);
return sablono.core.link_to38065.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26817__auto__);
});

sablono.core.link_to38065.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to38065.cljs$lang$maxFixedArity = (1);

sablono.core.link_to38065.cljs$lang$applyTo = (function (seq38066){
var G__38067 = cljs.core.first.call(null,seq38066);
var seq38066__$1 = cljs.core.next.call(null,seq38066);
return sablono.core.link_to38065.cljs$core$IFn$_invoke$arity$variadic(G__38067,seq38066__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to38065);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38071 = (function sablono$core$mail_to38071(var_args){
var args__26816__auto__ = [];
var len__26809__auto___38076 = arguments.length;
var i__26810__auto___38077 = (0);
while(true){
if((i__26810__auto___38077 < len__26809__auto___38076)){
args__26816__auto__.push((arguments[i__26810__auto___38077]));

var G__38078 = (i__26810__auto___38077 + (1));
i__26810__auto___38077 = G__38078;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((1) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((1)),(0))):null);
return sablono.core.mail_to38071.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26817__auto__);
});

sablono.core.mail_to38071.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38074){
var vec__38075 = p__38074;
var content = cljs.core.nth.call(null,vec__38075,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__25751__auto__ = content;
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to38071.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to38071.cljs$lang$applyTo = (function (seq38072){
var G__38073 = cljs.core.first.call(null,seq38072);
var seq38072__$1 = cljs.core.next.call(null,seq38072);
return sablono.core.mail_to38071.cljs$core$IFn$_invoke$arity$variadic(G__38073,seq38072__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to38071);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38079 = (function sablono$core$unordered_list38079(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__26523__auto__ = (function sablono$core$unordered_list38079_$_iter__38084(s__38085){
return (new cljs.core.LazySeq(null,(function (){
var s__38085__$1 = s__38085;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__38085__$1);
if(temp__4425__auto__){
var s__38085__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38085__$2)){
var c__26521__auto__ = cljs.core.chunk_first.call(null,s__38085__$2);
var size__26522__auto__ = cljs.core.count.call(null,c__26521__auto__);
var b__38087 = cljs.core.chunk_buffer.call(null,size__26522__auto__);
if((function (){var i__38086 = (0);
while(true){
if((i__38086 < size__26522__auto__)){
var x = cljs.core._nth.call(null,c__26521__auto__,i__38086);
cljs.core.chunk_append.call(null,b__38087,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38088 = (i__38086 + (1));
i__38086 = G__38088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38087),sablono$core$unordered_list38079_$_iter__38084.call(null,cljs.core.chunk_rest.call(null,s__38085__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38087),null);
}
} else {
var x = cljs.core.first.call(null,s__38085__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38079_$_iter__38084.call(null,cljs.core.rest.call(null,s__38085__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26523__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list38079);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38089 = (function sablono$core$ordered_list38089(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__26523__auto__ = (function sablono$core$ordered_list38089_$_iter__38094(s__38095){
return (new cljs.core.LazySeq(null,(function (){
var s__38095__$1 = s__38095;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__38095__$1);
if(temp__4425__auto__){
var s__38095__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38095__$2)){
var c__26521__auto__ = cljs.core.chunk_first.call(null,s__38095__$2);
var size__26522__auto__ = cljs.core.count.call(null,c__26521__auto__);
var b__38097 = cljs.core.chunk_buffer.call(null,size__26522__auto__);
if((function (){var i__38096 = (0);
while(true){
if((i__38096 < size__26522__auto__)){
var x = cljs.core._nth.call(null,c__26521__auto__,i__38096);
cljs.core.chunk_append.call(null,b__38097,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38098 = (i__38096 + (1));
i__38096 = G__38098;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38097),sablono$core$ordered_list38089_$_iter__38094.call(null,cljs.core.chunk_rest.call(null,s__38095__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38097),null);
}
} else {
var x = cljs.core.first.call(null,s__38095__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38089_$_iter__38094.call(null,cljs.core.rest.call(null,s__38095__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26523__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list38089);
/**
 * Create an image element.
 */
sablono.core.image38099 = (function sablono$core$image38099(var_args){
var args38100 = [];
var len__26809__auto___38103 = arguments.length;
var i__26810__auto___38104 = (0);
while(true){
if((i__26810__auto___38104 < len__26809__auto___38103)){
args38100.push((arguments[i__26810__auto___38104]));

var G__38105 = (i__26810__auto___38104 + (1));
i__26810__auto___38104 = G__38105;
continue;
} else {
}
break;
}

var G__38102 = args38100.length;
switch (G__38102) {
case 1:
return sablono.core.image38099.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38099.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38100.length)].join('')));

}
});

sablono.core.image38099.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image38099.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image38099.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image38099);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__38107_SHARP_,p2__38108_SHARP_){
return [cljs.core.str(p1__38107_SHARP_),cljs.core.str("["),cljs.core.str(p2__38108_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__38109_SHARP_,p2__38110_SHARP_){
return [cljs.core.str(p1__38109_SHARP_),cljs.core.str("-"),cljs.core.str(p2__38110_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field38111 = (function sablono$core$color_field38111(var_args){
var args38112 = [];
var len__26809__auto___38179 = arguments.length;
var i__26810__auto___38180 = (0);
while(true){
if((i__26810__auto___38180 < len__26809__auto___38179)){
args38112.push((arguments[i__26810__auto___38180]));

var G__38181 = (i__26810__auto___38180 + (1));
i__26810__auto___38180 = G__38181;
continue;
} else {
}
break;
}

var G__38114 = args38112.length;
switch (G__38114) {
case 1:
return sablono.core.color_field38111.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38111.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38112.length)].join('')));

}
});

sablono.core.color_field38111.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.color_field38111.call(null,name__38032__auto__,null);
});

sablono.core.color_field38111.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.color_field38111.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field38111);

/**
 * Creates a date input field.
 */
sablono.core.date_field38115 = (function sablono$core$date_field38115(var_args){
var args38116 = [];
var len__26809__auto___38183 = arguments.length;
var i__26810__auto___38184 = (0);
while(true){
if((i__26810__auto___38184 < len__26809__auto___38183)){
args38116.push((arguments[i__26810__auto___38184]));

var G__38185 = (i__26810__auto___38184 + (1));
i__26810__auto___38184 = G__38185;
continue;
} else {
}
break;
}

var G__38118 = args38116.length;
switch (G__38118) {
case 1:
return sablono.core.date_field38115.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38116.length)].join('')));

}
});

sablono.core.date_field38115.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.date_field38115.call(null,name__38032__auto__,null);
});

sablono.core.date_field38115.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.date_field38115.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field38115);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38119 = (function sablono$core$datetime_field38119(var_args){
var args38120 = [];
var len__26809__auto___38187 = arguments.length;
var i__26810__auto___38188 = (0);
while(true){
if((i__26810__auto___38188 < len__26809__auto___38187)){
args38120.push((arguments[i__26810__auto___38188]));

var G__38189 = (i__26810__auto___38188 + (1));
i__26810__auto___38188 = G__38189;
continue;
} else {
}
break;
}

var G__38122 = args38120.length;
switch (G__38122) {
case 1:
return sablono.core.datetime_field38119.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38119.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38120.length)].join('')));

}
});

sablono.core.datetime_field38119.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.datetime_field38119.call(null,name__38032__auto__,null);
});

sablono.core.datetime_field38119.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.datetime_field38119.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field38119);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38123 = (function sablono$core$datetime_local_field38123(var_args){
var args38124 = [];
var len__26809__auto___38191 = arguments.length;
var i__26810__auto___38192 = (0);
while(true){
if((i__26810__auto___38192 < len__26809__auto___38191)){
args38124.push((arguments[i__26810__auto___38192]));

var G__38193 = (i__26810__auto___38192 + (1));
i__26810__auto___38192 = G__38193;
continue;
} else {
}
break;
}

var G__38126 = args38124.length;
switch (G__38126) {
case 1:
return sablono.core.datetime_local_field38123.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38123.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38124.length)].join('')));

}
});

sablono.core.datetime_local_field38123.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.datetime_local_field38123.call(null,name__38032__auto__,null);
});

sablono.core.datetime_local_field38123.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.datetime_local_field38123.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field38123);

/**
 * Creates a email input field.
 */
sablono.core.email_field38127 = (function sablono$core$email_field38127(var_args){
var args38128 = [];
var len__26809__auto___38195 = arguments.length;
var i__26810__auto___38196 = (0);
while(true){
if((i__26810__auto___38196 < len__26809__auto___38195)){
args38128.push((arguments[i__26810__auto___38196]));

var G__38197 = (i__26810__auto___38196 + (1));
i__26810__auto___38196 = G__38197;
continue;
} else {
}
break;
}

var G__38130 = args38128.length;
switch (G__38130) {
case 1:
return sablono.core.email_field38127.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38127.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38128.length)].join('')));

}
});

sablono.core.email_field38127.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.email_field38127.call(null,name__38032__auto__,null);
});

sablono.core.email_field38127.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.email_field38127.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field38127);

/**
 * Creates a file input field.
 */
sablono.core.file_field38131 = (function sablono$core$file_field38131(var_args){
var args38132 = [];
var len__26809__auto___38199 = arguments.length;
var i__26810__auto___38200 = (0);
while(true){
if((i__26810__auto___38200 < len__26809__auto___38199)){
args38132.push((arguments[i__26810__auto___38200]));

var G__38201 = (i__26810__auto___38200 + (1));
i__26810__auto___38200 = G__38201;
continue;
} else {
}
break;
}

var G__38134 = args38132.length;
switch (G__38134) {
case 1:
return sablono.core.file_field38131.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38131.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38132.length)].join('')));

}
});

sablono.core.file_field38131.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.file_field38131.call(null,name__38032__auto__,null);
});

sablono.core.file_field38131.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.file_field38131.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field38131);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38135 = (function sablono$core$hidden_field38135(var_args){
var args38136 = [];
var len__26809__auto___38203 = arguments.length;
var i__26810__auto___38204 = (0);
while(true){
if((i__26810__auto___38204 < len__26809__auto___38203)){
args38136.push((arguments[i__26810__auto___38204]));

var G__38205 = (i__26810__auto___38204 + (1));
i__26810__auto___38204 = G__38205;
continue;
} else {
}
break;
}

var G__38138 = args38136.length;
switch (G__38138) {
case 1:
return sablono.core.hidden_field38135.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38135.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38136.length)].join('')));

}
});

sablono.core.hidden_field38135.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.hidden_field38135.call(null,name__38032__auto__,null);
});

sablono.core.hidden_field38135.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.hidden_field38135.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field38135);

/**
 * Creates a month input field.
 */
sablono.core.month_field38139 = (function sablono$core$month_field38139(var_args){
var args38140 = [];
var len__26809__auto___38207 = arguments.length;
var i__26810__auto___38208 = (0);
while(true){
if((i__26810__auto___38208 < len__26809__auto___38207)){
args38140.push((arguments[i__26810__auto___38208]));

var G__38209 = (i__26810__auto___38208 + (1));
i__26810__auto___38208 = G__38209;
continue;
} else {
}
break;
}

var G__38142 = args38140.length;
switch (G__38142) {
case 1:
return sablono.core.month_field38139.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38139.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38140.length)].join('')));

}
});

sablono.core.month_field38139.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.month_field38139.call(null,name__38032__auto__,null);
});

sablono.core.month_field38139.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.month_field38139.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field38139);

/**
 * Creates a number input field.
 */
sablono.core.number_field38143 = (function sablono$core$number_field38143(var_args){
var args38144 = [];
var len__26809__auto___38211 = arguments.length;
var i__26810__auto___38212 = (0);
while(true){
if((i__26810__auto___38212 < len__26809__auto___38211)){
args38144.push((arguments[i__26810__auto___38212]));

var G__38213 = (i__26810__auto___38212 + (1));
i__26810__auto___38212 = G__38213;
continue;
} else {
}
break;
}

var G__38146 = args38144.length;
switch (G__38146) {
case 1:
return sablono.core.number_field38143.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38143.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38144.length)].join('')));

}
});

sablono.core.number_field38143.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.number_field38143.call(null,name__38032__auto__,null);
});

sablono.core.number_field38143.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.number_field38143.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field38143);

/**
 * Creates a password input field.
 */
sablono.core.password_field38147 = (function sablono$core$password_field38147(var_args){
var args38148 = [];
var len__26809__auto___38215 = arguments.length;
var i__26810__auto___38216 = (0);
while(true){
if((i__26810__auto___38216 < len__26809__auto___38215)){
args38148.push((arguments[i__26810__auto___38216]));

var G__38217 = (i__26810__auto___38216 + (1));
i__26810__auto___38216 = G__38217;
continue;
} else {
}
break;
}

var G__38150 = args38148.length;
switch (G__38150) {
case 1:
return sablono.core.password_field38147.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38147.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38148.length)].join('')));

}
});

sablono.core.password_field38147.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.password_field38147.call(null,name__38032__auto__,null);
});

sablono.core.password_field38147.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.password_field38147.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field38147);

/**
 * Creates a range input field.
 */
sablono.core.range_field38151 = (function sablono$core$range_field38151(var_args){
var args38152 = [];
var len__26809__auto___38219 = arguments.length;
var i__26810__auto___38220 = (0);
while(true){
if((i__26810__auto___38220 < len__26809__auto___38219)){
args38152.push((arguments[i__26810__auto___38220]));

var G__38221 = (i__26810__auto___38220 + (1));
i__26810__auto___38220 = G__38221;
continue;
} else {
}
break;
}

var G__38154 = args38152.length;
switch (G__38154) {
case 1:
return sablono.core.range_field38151.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38151.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38152.length)].join('')));

}
});

sablono.core.range_field38151.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.range_field38151.call(null,name__38032__auto__,null);
});

sablono.core.range_field38151.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.range_field38151.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field38151);

/**
 * Creates a search input field.
 */
sablono.core.search_field38155 = (function sablono$core$search_field38155(var_args){
var args38156 = [];
var len__26809__auto___38223 = arguments.length;
var i__26810__auto___38224 = (0);
while(true){
if((i__26810__auto___38224 < len__26809__auto___38223)){
args38156.push((arguments[i__26810__auto___38224]));

var G__38225 = (i__26810__auto___38224 + (1));
i__26810__auto___38224 = G__38225;
continue;
} else {
}
break;
}

var G__38158 = args38156.length;
switch (G__38158) {
case 1:
return sablono.core.search_field38155.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38155.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38156.length)].join('')));

}
});

sablono.core.search_field38155.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.search_field38155.call(null,name__38032__auto__,null);
});

sablono.core.search_field38155.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.search_field38155.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field38155);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38159 = (function sablono$core$tel_field38159(var_args){
var args38160 = [];
var len__26809__auto___38227 = arguments.length;
var i__26810__auto___38228 = (0);
while(true){
if((i__26810__auto___38228 < len__26809__auto___38227)){
args38160.push((arguments[i__26810__auto___38228]));

var G__38229 = (i__26810__auto___38228 + (1));
i__26810__auto___38228 = G__38229;
continue;
} else {
}
break;
}

var G__38162 = args38160.length;
switch (G__38162) {
case 1:
return sablono.core.tel_field38159.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38159.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38160.length)].join('')));

}
});

sablono.core.tel_field38159.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.tel_field38159.call(null,name__38032__auto__,null);
});

sablono.core.tel_field38159.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.tel_field38159.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field38159);

/**
 * Creates a text input field.
 */
sablono.core.text_field38163 = (function sablono$core$text_field38163(var_args){
var args38164 = [];
var len__26809__auto___38231 = arguments.length;
var i__26810__auto___38232 = (0);
while(true){
if((i__26810__auto___38232 < len__26809__auto___38231)){
args38164.push((arguments[i__26810__auto___38232]));

var G__38233 = (i__26810__auto___38232 + (1));
i__26810__auto___38232 = G__38233;
continue;
} else {
}
break;
}

var G__38166 = args38164.length;
switch (G__38166) {
case 1:
return sablono.core.text_field38163.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38163.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38164.length)].join('')));

}
});

sablono.core.text_field38163.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.text_field38163.call(null,name__38032__auto__,null);
});

sablono.core.text_field38163.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.text_field38163.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field38163);

/**
 * Creates a time input field.
 */
sablono.core.time_field38167 = (function sablono$core$time_field38167(var_args){
var args38168 = [];
var len__26809__auto___38235 = arguments.length;
var i__26810__auto___38236 = (0);
while(true){
if((i__26810__auto___38236 < len__26809__auto___38235)){
args38168.push((arguments[i__26810__auto___38236]));

var G__38237 = (i__26810__auto___38236 + (1));
i__26810__auto___38236 = G__38237;
continue;
} else {
}
break;
}

var G__38170 = args38168.length;
switch (G__38170) {
case 1:
return sablono.core.time_field38167.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38168.length)].join('')));

}
});

sablono.core.time_field38167.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.time_field38167.call(null,name__38032__auto__,null);
});

sablono.core.time_field38167.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.time_field38167.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field38167);

/**
 * Creates a url input field.
 */
sablono.core.url_field38171 = (function sablono$core$url_field38171(var_args){
var args38172 = [];
var len__26809__auto___38239 = arguments.length;
var i__26810__auto___38240 = (0);
while(true){
if((i__26810__auto___38240 < len__26809__auto___38239)){
args38172.push((arguments[i__26810__auto___38240]));

var G__38241 = (i__26810__auto___38240 + (1));
i__26810__auto___38240 = G__38241;
continue;
} else {
}
break;
}

var G__38174 = args38172.length;
switch (G__38174) {
case 1:
return sablono.core.url_field38171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38172.length)].join('')));

}
});

sablono.core.url_field38171.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.url_field38171.call(null,name__38032__auto__,null);
});

sablono.core.url_field38171.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.url_field38171.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field38171);

/**
 * Creates a week input field.
 */
sablono.core.week_field38175 = (function sablono$core$week_field38175(var_args){
var args38176 = [];
var len__26809__auto___38243 = arguments.length;
var i__26810__auto___38244 = (0);
while(true){
if((i__26810__auto___38244 < len__26809__auto___38243)){
args38176.push((arguments[i__26810__auto___38244]));

var G__38245 = (i__26810__auto___38244 + (1));
i__26810__auto___38244 = G__38245;
continue;
} else {
}
break;
}

var G__38178 = args38176.length;
switch (G__38178) {
case 1:
return sablono.core.week_field38175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38176.length)].join('')));

}
});

sablono.core.week_field38175.cljs$core$IFn$_invoke$arity$1 = (function (name__38032__auto__){
return sablono.core.week_field38175.call(null,name__38032__auto__,null);
});

sablono.core.week_field38175.cljs$core$IFn$_invoke$arity$2 = (function (name__38032__auto__,value__38033__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__38032__auto__,value__38033__auto__);
});

sablono.core.week_field38175.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field38175);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38247 = (function sablono$core$check_box38247(var_args){
var args38248 = [];
var len__26809__auto___38251 = arguments.length;
var i__26810__auto___38252 = (0);
while(true){
if((i__26810__auto___38252 < len__26809__auto___38251)){
args38248.push((arguments[i__26810__auto___38252]));

var G__38253 = (i__26810__auto___38252 + (1));
i__26810__auto___38252 = G__38253;
continue;
} else {
}
break;
}

var G__38250 = args38248.length;
switch (G__38250) {
case 1:
return sablono.core.check_box38247.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38247.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38247.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38248.length)].join('')));

}
});

sablono.core.check_box38247.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box38247.call(null,name,null);
});

sablono.core.check_box38247.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box38247.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box38247.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box38247.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box38247);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38255 = (function sablono$core$radio_button38255(var_args){
var args38256 = [];
var len__26809__auto___38259 = arguments.length;
var i__26810__auto___38260 = (0);
while(true){
if((i__26810__auto___38260 < len__26809__auto___38259)){
args38256.push((arguments[i__26810__auto___38260]));

var G__38261 = (i__26810__auto___38260 + (1));
i__26810__auto___38260 = G__38261;
continue;
} else {
}
break;
}

var G__38258 = args38256.length;
switch (G__38258) {
case 1:
return sablono.core.radio_button38255.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38255.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38255.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38256.length)].join('')));

}
});

sablono.core.radio_button38255.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button38255.call(null,group,null);
});

sablono.core.radio_button38255.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button38255.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button38255.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button38255.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button38255);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38263 = (function sablono$core$select_options38263(coll){
var iter__26523__auto__ = (function sablono$core$select_options38263_$_iter__38272(s__38273){
return (new cljs.core.LazySeq(null,(function (){
var s__38273__$1 = s__38273;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__38273__$1);
if(temp__4425__auto__){
var s__38273__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38273__$2)){
var c__26521__auto__ = cljs.core.chunk_first.call(null,s__38273__$2);
var size__26522__auto__ = cljs.core.count.call(null,c__26521__auto__);
var b__38275 = cljs.core.chunk_buffer.call(null,size__26522__auto__);
if((function (){var i__38274 = (0);
while(true){
if((i__38274 < size__26522__auto__)){
var x = cljs.core._nth.call(null,c__26521__auto__,i__38274);
cljs.core.chunk_append.call(null,b__38275,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38278 = x;
var text = cljs.core.nth.call(null,vec__38278,(0),null);
var val = cljs.core.nth.call(null,vec__38278,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38278,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options38263.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38280 = (i__38274 + (1));
i__38274 = G__38280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38275),sablono$core$select_options38263_$_iter__38272.call(null,cljs.core.chunk_rest.call(null,s__38273__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38275),null);
}
} else {
var x = cljs.core.first.call(null,s__38273__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38279 = x;
var text = cljs.core.nth.call(null,vec__38279,(0),null);
var val = cljs.core.nth.call(null,vec__38279,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38279,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options38263.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38263_$_iter__38272.call(null,cljs.core.rest.call(null,s__38273__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26523__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options38263);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38281 = (function sablono$core$drop_down38281(var_args){
var args38282 = [];
var len__26809__auto___38285 = arguments.length;
var i__26810__auto___38286 = (0);
while(true){
if((i__26810__auto___38286 < len__26809__auto___38285)){
args38282.push((arguments[i__26810__auto___38286]));

var G__38287 = (i__26810__auto___38286 + (1));
i__26810__auto___38286 = G__38287;
continue;
} else {
}
break;
}

var G__38284 = args38282.length;
switch (G__38284) {
case 2:
return sablono.core.drop_down38281.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38281.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38282.length)].join('')));

}
});

sablono.core.drop_down38281.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38281.call(null,name,options,null);
});

sablono.core.drop_down38281.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down38281.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down38281);
/**
 * Creates a text area element.
 */
sablono.core.text_area38289 = (function sablono$core$text_area38289(var_args){
var args38290 = [];
var len__26809__auto___38293 = arguments.length;
var i__26810__auto___38294 = (0);
while(true){
if((i__26810__auto___38294 < len__26809__auto___38293)){
args38290.push((arguments[i__26810__auto___38294]));

var G__38295 = (i__26810__auto___38294 + (1));
i__26810__auto___38294 = G__38295;
continue;
} else {
}
break;
}

var G__38292 = args38290.length;
switch (G__38292) {
case 1:
return sablono.core.text_area38289.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38289.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38290.length)].join('')));

}
});

sablono.core.text_area38289.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area38289.call(null,name,null);
});

sablono.core.text_area38289.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area38289.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area38289);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38297 = (function sablono$core$label38297(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label38297);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38298 = (function sablono$core$submit_button38298(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button38298);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38299 = (function sablono$core$reset_button38299(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button38299);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38300 = (function sablono$core$form_to38300(var_args){
var args__26816__auto__ = [];
var len__26809__auto___38305 = arguments.length;
var i__26810__auto___38306 = (0);
while(true){
if((i__26810__auto___38306 < len__26809__auto___38305)){
args__26816__auto__.push((arguments[i__26810__auto___38306]));

var G__38307 = (i__26810__auto___38306 + (1));
i__26810__auto___38306 = G__38307;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((1) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((1)),(0))):null);
return sablono.core.form_to38300.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26817__auto__);
});

sablono.core.form_to38300.cljs$core$IFn$_invoke$arity$variadic = (function (p__38303,body){
var vec__38304 = p__38303;
var method = cljs.core.nth.call(null,vec__38304,(0),null);
var action = cljs.core.nth.call(null,vec__38304,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to38300.cljs$lang$maxFixedArity = (1);

sablono.core.form_to38300.cljs$lang$applyTo = (function (seq38301){
var G__38302 = cljs.core.first.call(null,seq38301);
var seq38301__$1 = cljs.core.next.call(null,seq38301);
return sablono.core.form_to38300.cljs$core$IFn$_invoke$arity$variadic(G__38302,seq38301__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to38300);

//# sourceMappingURL=core.js.map