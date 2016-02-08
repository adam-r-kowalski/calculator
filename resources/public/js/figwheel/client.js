// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__38628 = cljs.core._EQ_;
var expr__38629 = (function (){var or__25751__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__38628.call(null,"true",expr__38629))){
return true;
} else {
if(cljs.core.truth_(pred__38628.call(null,"false",expr__38629))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__38629)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38631__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__38631 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38632__i = 0, G__38632__a = new Array(arguments.length -  0);
while (G__38632__i < G__38632__a.length) {G__38632__a[G__38632__i] = arguments[G__38632__i + 0]; ++G__38632__i;}
  args = new cljs.core.IndexedSeq(G__38632__a,0);
} 
return G__38631__delegate.call(this,args);};
G__38631.cljs$lang$maxFixedArity = 0;
G__38631.cljs$lang$applyTo = (function (arglist__38633){
var args = cljs.core.seq(arglist__38633);
return G__38631__delegate(args);
});
G__38631.cljs$core$IFn$_invoke$arity$variadic = G__38631__delegate;
return G__38631;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38634){
var map__38637 = p__38634;
var map__38637__$1 = ((((!((map__38637 == null)))?((((map__38637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38637):map__38637);
var message = cljs.core.get.call(null,map__38637__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38637__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25751__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25751__auto__)){
return or__25751__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25739__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25739__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25739__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33426__auto___38799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___38799,ch){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___38799,ch){
return (function (state_38768){
var state_val_38769 = (state_38768[(1)]);
if((state_val_38769 === (7))){
var inst_38764 = (state_38768[(2)]);
var state_38768__$1 = state_38768;
var statearr_38770_38800 = state_38768__$1;
(statearr_38770_38800[(2)] = inst_38764);

(statearr_38770_38800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (1))){
var state_38768__$1 = state_38768;
var statearr_38771_38801 = state_38768__$1;
(statearr_38771_38801[(2)] = null);

(statearr_38771_38801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (4))){
var inst_38721 = (state_38768[(7)]);
var inst_38721__$1 = (state_38768[(2)]);
var state_38768__$1 = (function (){var statearr_38772 = state_38768;
(statearr_38772[(7)] = inst_38721__$1);

return statearr_38772;
})();
if(cljs.core.truth_(inst_38721__$1)){
var statearr_38773_38802 = state_38768__$1;
(statearr_38773_38802[(1)] = (5));

} else {
var statearr_38774_38803 = state_38768__$1;
(statearr_38774_38803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (15))){
var inst_38728 = (state_38768[(8)]);
var inst_38743 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38728);
var inst_38744 = cljs.core.first.call(null,inst_38743);
var inst_38745 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38744);
var inst_38746 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38745)].join('');
var inst_38747 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38746);
var state_38768__$1 = state_38768;
var statearr_38775_38804 = state_38768__$1;
(statearr_38775_38804[(2)] = inst_38747);

(statearr_38775_38804[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (13))){
var inst_38752 = (state_38768[(2)]);
var state_38768__$1 = state_38768;
var statearr_38776_38805 = state_38768__$1;
(statearr_38776_38805[(2)] = inst_38752);

(statearr_38776_38805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (6))){
var state_38768__$1 = state_38768;
var statearr_38777_38806 = state_38768__$1;
(statearr_38777_38806[(2)] = null);

(statearr_38777_38806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (17))){
var inst_38750 = (state_38768[(2)]);
var state_38768__$1 = state_38768;
var statearr_38778_38807 = state_38768__$1;
(statearr_38778_38807[(2)] = inst_38750);

(statearr_38778_38807[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (3))){
var inst_38766 = (state_38768[(2)]);
var state_38768__$1 = state_38768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38768__$1,inst_38766);
} else {
if((state_val_38769 === (12))){
var inst_38727 = (state_38768[(9)]);
var inst_38741 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38727,opts);
var state_38768__$1 = state_38768;
if(cljs.core.truth_(inst_38741)){
var statearr_38779_38808 = state_38768__$1;
(statearr_38779_38808[(1)] = (15));

} else {
var statearr_38780_38809 = state_38768__$1;
(statearr_38780_38809[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (2))){
var state_38768__$1 = state_38768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38768__$1,(4),ch);
} else {
if((state_val_38769 === (11))){
var inst_38728 = (state_38768[(8)]);
var inst_38733 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38734 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38728);
var inst_38735 = cljs.core.async.timeout.call(null,(1000));
var inst_38736 = [inst_38734,inst_38735];
var inst_38737 = (new cljs.core.PersistentVector(null,2,(5),inst_38733,inst_38736,null));
var state_38768__$1 = state_38768;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38768__$1,(14),inst_38737);
} else {
if((state_val_38769 === (9))){
var inst_38728 = (state_38768[(8)]);
var inst_38754 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38755 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38728);
var inst_38756 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38755);
var inst_38757 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38756)].join('');
var inst_38758 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38757);
var state_38768__$1 = (function (){var statearr_38781 = state_38768;
(statearr_38781[(10)] = inst_38754);

return statearr_38781;
})();
var statearr_38782_38810 = state_38768__$1;
(statearr_38782_38810[(2)] = inst_38758);

(statearr_38782_38810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (5))){
var inst_38721 = (state_38768[(7)]);
var inst_38723 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38724 = (new cljs.core.PersistentArrayMap(null,2,inst_38723,null));
var inst_38725 = (new cljs.core.PersistentHashSet(null,inst_38724,null));
var inst_38726 = figwheel.client.focus_msgs.call(null,inst_38725,inst_38721);
var inst_38727 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38726);
var inst_38728 = cljs.core.first.call(null,inst_38726);
var inst_38729 = figwheel.client.autoload_QMARK_.call(null);
var state_38768__$1 = (function (){var statearr_38783 = state_38768;
(statearr_38783[(8)] = inst_38728);

(statearr_38783[(9)] = inst_38727);

return statearr_38783;
})();
if(cljs.core.truth_(inst_38729)){
var statearr_38784_38811 = state_38768__$1;
(statearr_38784_38811[(1)] = (8));

} else {
var statearr_38785_38812 = state_38768__$1;
(statearr_38785_38812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (14))){
var inst_38739 = (state_38768[(2)]);
var state_38768__$1 = state_38768;
var statearr_38786_38813 = state_38768__$1;
(statearr_38786_38813[(2)] = inst_38739);

(statearr_38786_38813[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (16))){
var state_38768__$1 = state_38768;
var statearr_38787_38814 = state_38768__$1;
(statearr_38787_38814[(2)] = null);

(statearr_38787_38814[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (10))){
var inst_38760 = (state_38768[(2)]);
var state_38768__$1 = (function (){var statearr_38788 = state_38768;
(statearr_38788[(11)] = inst_38760);

return statearr_38788;
})();
var statearr_38789_38815 = state_38768__$1;
(statearr_38789_38815[(2)] = null);

(statearr_38789_38815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38769 === (8))){
var inst_38727 = (state_38768[(9)]);
var inst_38731 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38727,opts);
var state_38768__$1 = state_38768;
if(cljs.core.truth_(inst_38731)){
var statearr_38790_38816 = state_38768__$1;
(statearr_38790_38816[(1)] = (11));

} else {
var statearr_38791_38817 = state_38768__$1;
(statearr_38791_38817[(1)] = (12));

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
});})(c__33426__auto___38799,ch))
;
return ((function (switch__33314__auto__,c__33426__auto___38799,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33315__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33315__auto____0 = (function (){
var statearr_38795 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38795[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33315__auto__);

(statearr_38795[(1)] = (1));

return statearr_38795;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33315__auto____1 = (function (state_38768){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_38768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e38796){if((e38796 instanceof Object)){
var ex__33318__auto__ = e38796;
var statearr_38797_38818 = state_38768;
(statearr_38797_38818[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38819 = state_38768;
state_38768 = G__38819;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33315__auto__ = function(state_38768){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33315__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33315__auto____1.call(this,state_38768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33315__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33315__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___38799,ch))
})();
var state__33428__auto__ = (function (){var statearr_38798 = f__33427__auto__.call(null);
(statearr_38798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___38799);

return statearr_38798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___38799,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38820_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38820_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38827 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38827){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_38825 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_38826 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_38825,_STAR_print_newline_STAR_38826,base_path_38827){
return (function() { 
var G__38828__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__38828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38829__i = 0, G__38829__a = new Array(arguments.length -  0);
while (G__38829__i < G__38829__a.length) {G__38829__a[G__38829__i] = arguments[G__38829__i + 0]; ++G__38829__i;}
  args = new cljs.core.IndexedSeq(G__38829__a,0);
} 
return G__38828__delegate.call(this,args);};
G__38828.cljs$lang$maxFixedArity = 0;
G__38828.cljs$lang$applyTo = (function (arglist__38830){
var args = cljs.core.seq(arglist__38830);
return G__38828__delegate(args);
});
G__38828.cljs$core$IFn$_invoke$arity$variadic = G__38828__delegate;
return G__38828;
})()
;})(_STAR_print_fn_STAR_38825,_STAR_print_newline_STAR_38826,base_path_38827))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38826;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38825;
}}catch (e38824){if((e38824 instanceof Error)){
var e = e38824;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38827], null));
} else {
var e = e38824;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_38827))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38831){
var map__38838 = p__38831;
var map__38838__$1 = ((((!((map__38838 == null)))?((((map__38838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38838):map__38838);
var opts = map__38838__$1;
var build_id = cljs.core.get.call(null,map__38838__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38838,map__38838__$1,opts,build_id){
return (function (p__38840){
var vec__38841 = p__38840;
var map__38842 = cljs.core.nth.call(null,vec__38841,(0),null);
var map__38842__$1 = ((((!((map__38842 == null)))?((((map__38842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38842):map__38842);
var msg = map__38842__$1;
var msg_name = cljs.core.get.call(null,map__38842__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38841,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38841,map__38842,map__38842__$1,msg,msg_name,_,map__38838,map__38838__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38841,map__38842,map__38842__$1,msg,msg_name,_,map__38838,map__38838__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38838,map__38838__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38848){
var vec__38849 = p__38848;
var map__38850 = cljs.core.nth.call(null,vec__38849,(0),null);
var map__38850__$1 = ((((!((map__38850 == null)))?((((map__38850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38850):map__38850);
var msg = map__38850__$1;
var msg_name = cljs.core.get.call(null,map__38850__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38849,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38852){
var map__38862 = p__38852;
var map__38862__$1 = ((((!((map__38862 == null)))?((((map__38862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38862):map__38862);
var on_compile_warning = cljs.core.get.call(null,map__38862__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38862__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38862,map__38862__$1,on_compile_warning,on_compile_fail){
return (function (p__38864){
var vec__38865 = p__38864;
var map__38866 = cljs.core.nth.call(null,vec__38865,(0),null);
var map__38866__$1 = ((((!((map__38866 == null)))?((((map__38866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38866):map__38866);
var msg = map__38866__$1;
var msg_name = cljs.core.get.call(null,map__38866__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38865,(1));
var pred__38868 = cljs.core._EQ_;
var expr__38869 = msg_name;
if(cljs.core.truth_(pred__38868.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38869))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38868.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38869))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38862,map__38862__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33426__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto__,msg_hist,msg_names,msg){
return (function (state_39085){
var state_val_39086 = (state_39085[(1)]);
if((state_val_39086 === (7))){
var inst_39009 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
if(cljs.core.truth_(inst_39009)){
var statearr_39087_39133 = state_39085__$1;
(statearr_39087_39133[(1)] = (8));

} else {
var statearr_39088_39134 = state_39085__$1;
(statearr_39088_39134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (20))){
var inst_39079 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39089_39135 = state_39085__$1;
(statearr_39089_39135[(2)] = inst_39079);

(statearr_39089_39135[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (27))){
var inst_39075 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39090_39136 = state_39085__$1;
(statearr_39090_39136[(2)] = inst_39075);

(statearr_39090_39136[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (1))){
var inst_39002 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39085__$1 = state_39085;
if(cljs.core.truth_(inst_39002)){
var statearr_39091_39137 = state_39085__$1;
(statearr_39091_39137[(1)] = (2));

} else {
var statearr_39092_39138 = state_39085__$1;
(statearr_39092_39138[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (24))){
var inst_39077 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39093_39139 = state_39085__$1;
(statearr_39093_39139[(2)] = inst_39077);

(statearr_39093_39139[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (4))){
var inst_39083 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39085__$1,inst_39083);
} else {
if((state_val_39086 === (15))){
var inst_39081 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39094_39140 = state_39085__$1;
(statearr_39094_39140[(2)] = inst_39081);

(statearr_39094_39140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (21))){
var inst_39040 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39095_39141 = state_39085__$1;
(statearr_39095_39141[(2)] = inst_39040);

(statearr_39095_39141[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (31))){
var inst_39064 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39085__$1 = state_39085;
if(cljs.core.truth_(inst_39064)){
var statearr_39096_39142 = state_39085__$1;
(statearr_39096_39142[(1)] = (34));

} else {
var statearr_39097_39143 = state_39085__$1;
(statearr_39097_39143[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (32))){
var inst_39073 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39098_39144 = state_39085__$1;
(statearr_39098_39144[(2)] = inst_39073);

(statearr_39098_39144[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (33))){
var inst_39062 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39099_39145 = state_39085__$1;
(statearr_39099_39145[(2)] = inst_39062);

(statearr_39099_39145[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (13))){
var inst_39023 = figwheel.client.heads_up.clear.call(null);
var state_39085__$1 = state_39085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39085__$1,(16),inst_39023);
} else {
if((state_val_39086 === (22))){
var inst_39044 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39045 = figwheel.client.heads_up.append_message.call(null,inst_39044);
var state_39085__$1 = state_39085;
var statearr_39100_39146 = state_39085__$1;
(statearr_39100_39146[(2)] = inst_39045);

(statearr_39100_39146[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (36))){
var inst_39071 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39101_39147 = state_39085__$1;
(statearr_39101_39147[(2)] = inst_39071);

(statearr_39101_39147[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (29))){
var inst_39055 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39102_39148 = state_39085__$1;
(statearr_39102_39148[(2)] = inst_39055);

(statearr_39102_39148[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (6))){
var inst_39004 = (state_39085[(7)]);
var state_39085__$1 = state_39085;
var statearr_39103_39149 = state_39085__$1;
(statearr_39103_39149[(2)] = inst_39004);

(statearr_39103_39149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (28))){
var inst_39051 = (state_39085[(2)]);
var inst_39052 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39053 = figwheel.client.heads_up.display_warning.call(null,inst_39052);
var state_39085__$1 = (function (){var statearr_39104 = state_39085;
(statearr_39104[(8)] = inst_39051);

return statearr_39104;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39085__$1,(29),inst_39053);
} else {
if((state_val_39086 === (25))){
var inst_39049 = figwheel.client.heads_up.clear.call(null);
var state_39085__$1 = state_39085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39085__$1,(28),inst_39049);
} else {
if((state_val_39086 === (34))){
var inst_39066 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39085__$1 = state_39085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39085__$1,(37),inst_39066);
} else {
if((state_val_39086 === (17))){
var inst_39031 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39105_39150 = state_39085__$1;
(statearr_39105_39150[(2)] = inst_39031);

(statearr_39105_39150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (3))){
var inst_39021 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39085__$1 = state_39085;
if(cljs.core.truth_(inst_39021)){
var statearr_39106_39151 = state_39085__$1;
(statearr_39106_39151[(1)] = (13));

} else {
var statearr_39107_39152 = state_39085__$1;
(statearr_39107_39152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (12))){
var inst_39017 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39108_39153 = state_39085__$1;
(statearr_39108_39153[(2)] = inst_39017);

(statearr_39108_39153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (2))){
var inst_39004 = (state_39085[(7)]);
var inst_39004__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39085__$1 = (function (){var statearr_39109 = state_39085;
(statearr_39109[(7)] = inst_39004__$1);

return statearr_39109;
})();
if(cljs.core.truth_(inst_39004__$1)){
var statearr_39110_39154 = state_39085__$1;
(statearr_39110_39154[(1)] = (5));

} else {
var statearr_39111_39155 = state_39085__$1;
(statearr_39111_39155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (23))){
var inst_39047 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39085__$1 = state_39085;
if(cljs.core.truth_(inst_39047)){
var statearr_39112_39156 = state_39085__$1;
(statearr_39112_39156[(1)] = (25));

} else {
var statearr_39113_39157 = state_39085__$1;
(statearr_39113_39157[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (35))){
var state_39085__$1 = state_39085;
var statearr_39114_39158 = state_39085__$1;
(statearr_39114_39158[(2)] = null);

(statearr_39114_39158[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (19))){
var inst_39042 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39085__$1 = state_39085;
if(cljs.core.truth_(inst_39042)){
var statearr_39115_39159 = state_39085__$1;
(statearr_39115_39159[(1)] = (22));

} else {
var statearr_39116_39160 = state_39085__$1;
(statearr_39116_39160[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (11))){
var inst_39013 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39117_39161 = state_39085__$1;
(statearr_39117_39161[(2)] = inst_39013);

(statearr_39117_39161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (9))){
var inst_39015 = figwheel.client.heads_up.clear.call(null);
var state_39085__$1 = state_39085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39085__$1,(12),inst_39015);
} else {
if((state_val_39086 === (5))){
var inst_39006 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39085__$1 = state_39085;
var statearr_39118_39162 = state_39085__$1;
(statearr_39118_39162[(2)] = inst_39006);

(statearr_39118_39162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (14))){
var inst_39033 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39085__$1 = state_39085;
if(cljs.core.truth_(inst_39033)){
var statearr_39119_39163 = state_39085__$1;
(statearr_39119_39163[(1)] = (18));

} else {
var statearr_39120_39164 = state_39085__$1;
(statearr_39120_39164[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (26))){
var inst_39057 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39085__$1 = state_39085;
if(cljs.core.truth_(inst_39057)){
var statearr_39121_39165 = state_39085__$1;
(statearr_39121_39165[(1)] = (30));

} else {
var statearr_39122_39166 = state_39085__$1;
(statearr_39122_39166[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (16))){
var inst_39025 = (state_39085[(2)]);
var inst_39026 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39027 = figwheel.client.format_messages.call(null,inst_39026);
var inst_39028 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39029 = figwheel.client.heads_up.display_error.call(null,inst_39027,inst_39028);
var state_39085__$1 = (function (){var statearr_39123 = state_39085;
(statearr_39123[(9)] = inst_39025);

return statearr_39123;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39085__$1,(17),inst_39029);
} else {
if((state_val_39086 === (30))){
var inst_39059 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39060 = figwheel.client.heads_up.display_warning.call(null,inst_39059);
var state_39085__$1 = state_39085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39085__$1,(33),inst_39060);
} else {
if((state_val_39086 === (10))){
var inst_39019 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39124_39167 = state_39085__$1;
(statearr_39124_39167[(2)] = inst_39019);

(statearr_39124_39167[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (18))){
var inst_39035 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39036 = figwheel.client.format_messages.call(null,inst_39035);
var inst_39037 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39038 = figwheel.client.heads_up.display_error.call(null,inst_39036,inst_39037);
var state_39085__$1 = state_39085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39085__$1,(21),inst_39038);
} else {
if((state_val_39086 === (37))){
var inst_39068 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39125_39168 = state_39085__$1;
(statearr_39125_39168[(2)] = inst_39068);

(statearr_39125_39168[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (8))){
var inst_39011 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39085__$1 = state_39085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39085__$1,(11),inst_39011);
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
});})(c__33426__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33314__auto__,c__33426__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33315__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33315__auto____0 = (function (){
var statearr_39129 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39129[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33315__auto__);

(statearr_39129[(1)] = (1));

return statearr_39129;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33315__auto____1 = (function (state_39085){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_39085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e39130){if((e39130 instanceof Object)){
var ex__33318__auto__ = e39130;
var statearr_39131_39169 = state_39085;
(statearr_39131_39169[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39170 = state_39085;
state_39085 = G__39170;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33315__auto__ = function(state_39085){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33315__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33315__auto____1.call(this,state_39085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33315__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33315__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto__,msg_hist,msg_names,msg))
})();
var state__33428__auto__ = (function (){var statearr_39132 = f__33427__auto__.call(null);
(statearr_39132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto__);

return statearr_39132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto__,msg_hist,msg_names,msg))
);

return c__33426__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33426__auto___39233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto___39233,ch){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto___39233,ch){
return (function (state_39216){
var state_val_39217 = (state_39216[(1)]);
if((state_val_39217 === (1))){
var state_39216__$1 = state_39216;
var statearr_39218_39234 = state_39216__$1;
(statearr_39218_39234[(2)] = null);

(statearr_39218_39234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39217 === (2))){
var state_39216__$1 = state_39216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39216__$1,(4),ch);
} else {
if((state_val_39217 === (3))){
var inst_39214 = (state_39216[(2)]);
var state_39216__$1 = state_39216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39216__$1,inst_39214);
} else {
if((state_val_39217 === (4))){
var inst_39204 = (state_39216[(7)]);
var inst_39204__$1 = (state_39216[(2)]);
var state_39216__$1 = (function (){var statearr_39219 = state_39216;
(statearr_39219[(7)] = inst_39204__$1);

return statearr_39219;
})();
if(cljs.core.truth_(inst_39204__$1)){
var statearr_39220_39235 = state_39216__$1;
(statearr_39220_39235[(1)] = (5));

} else {
var statearr_39221_39236 = state_39216__$1;
(statearr_39221_39236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39217 === (5))){
var inst_39204 = (state_39216[(7)]);
var inst_39206 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39204);
var state_39216__$1 = state_39216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39216__$1,(8),inst_39206);
} else {
if((state_val_39217 === (6))){
var state_39216__$1 = state_39216;
var statearr_39222_39237 = state_39216__$1;
(statearr_39222_39237[(2)] = null);

(statearr_39222_39237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39217 === (7))){
var inst_39212 = (state_39216[(2)]);
var state_39216__$1 = state_39216;
var statearr_39223_39238 = state_39216__$1;
(statearr_39223_39238[(2)] = inst_39212);

(statearr_39223_39238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39217 === (8))){
var inst_39208 = (state_39216[(2)]);
var state_39216__$1 = (function (){var statearr_39224 = state_39216;
(statearr_39224[(8)] = inst_39208);

return statearr_39224;
})();
var statearr_39225_39239 = state_39216__$1;
(statearr_39225_39239[(2)] = null);

(statearr_39225_39239[(1)] = (2));


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
});})(c__33426__auto___39233,ch))
;
return ((function (switch__33314__auto__,c__33426__auto___39233,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33315__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33315__auto____0 = (function (){
var statearr_39229 = [null,null,null,null,null,null,null,null,null];
(statearr_39229[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33315__auto__);

(statearr_39229[(1)] = (1));

return statearr_39229;
});
var figwheel$client$heads_up_plugin_$_state_machine__33315__auto____1 = (function (state_39216){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_39216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e39230){if((e39230 instanceof Object)){
var ex__33318__auto__ = e39230;
var statearr_39231_39240 = state_39216;
(statearr_39231_39240[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39241 = state_39216;
state_39216 = G__39241;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33315__auto__ = function(state_39216){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33315__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33315__auto____1.call(this,state_39216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33315__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33315__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto___39233,ch))
})();
var state__33428__auto__ = (function (){var statearr_39232 = f__33427__auto__.call(null);
(statearr_39232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto___39233);

return statearr_39232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto___39233,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33426__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33426__auto__){
return (function (){
var f__33427__auto__ = (function (){var switch__33314__auto__ = ((function (c__33426__auto__){
return (function (state_39262){
var state_val_39263 = (state_39262[(1)]);
if((state_val_39263 === (1))){
var inst_39257 = cljs.core.async.timeout.call(null,(3000));
var state_39262__$1 = state_39262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39262__$1,(2),inst_39257);
} else {
if((state_val_39263 === (2))){
var inst_39259 = (state_39262[(2)]);
var inst_39260 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39262__$1 = (function (){var statearr_39264 = state_39262;
(statearr_39264[(7)] = inst_39259);

return statearr_39264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39262__$1,inst_39260);
} else {
return null;
}
}
});})(c__33426__auto__))
;
return ((function (switch__33314__auto__,c__33426__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33315__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33315__auto____0 = (function (){
var statearr_39268 = [null,null,null,null,null,null,null,null];
(statearr_39268[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33315__auto__);

(statearr_39268[(1)] = (1));

return statearr_39268;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33315__auto____1 = (function (state_39262){
while(true){
var ret_value__33316__auto__ = (function (){try{while(true){
var result__33317__auto__ = switch__33314__auto__.call(null,state_39262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33317__auto__;
}
break;
}
}catch (e39269){if((e39269 instanceof Object)){
var ex__33318__auto__ = e39269;
var statearr_39270_39272 = state_39262;
(statearr_39270_39272[(5)] = ex__33318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39273 = state_39262;
state_39262 = G__39273;
continue;
} else {
return ret_value__33316__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33315__auto__ = function(state_39262){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33315__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33315__auto____1.call(this,state_39262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33315__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33315__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33315__auto__;
})()
;})(switch__33314__auto__,c__33426__auto__))
})();
var state__33428__auto__ = (function (){var statearr_39271 = f__33427__auto__.call(null);
(statearr_39271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33426__auto__);

return statearr_39271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33428__auto__);
});})(c__33426__auto__))
);

return c__33426__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39274){
var map__39281 = p__39274;
var map__39281__$1 = ((((!((map__39281 == null)))?((((map__39281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39281):map__39281);
var ed = map__39281__$1;
var formatted_exception = cljs.core.get.call(null,map__39281__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39281__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39281__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39283_39287 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39284_39288 = null;
var count__39285_39289 = (0);
var i__39286_39290 = (0);
while(true){
if((i__39286_39290 < count__39285_39289)){
var msg_39291 = cljs.core._nth.call(null,chunk__39284_39288,i__39286_39290);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39291);

var G__39292 = seq__39283_39287;
var G__39293 = chunk__39284_39288;
var G__39294 = count__39285_39289;
var G__39295 = (i__39286_39290 + (1));
seq__39283_39287 = G__39292;
chunk__39284_39288 = G__39293;
count__39285_39289 = G__39294;
i__39286_39290 = G__39295;
continue;
} else {
var temp__4425__auto___39296 = cljs.core.seq.call(null,seq__39283_39287);
if(temp__4425__auto___39296){
var seq__39283_39297__$1 = temp__4425__auto___39296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39283_39297__$1)){
var c__26554__auto___39298 = cljs.core.chunk_first.call(null,seq__39283_39297__$1);
var G__39299 = cljs.core.chunk_rest.call(null,seq__39283_39297__$1);
var G__39300 = c__26554__auto___39298;
var G__39301 = cljs.core.count.call(null,c__26554__auto___39298);
var G__39302 = (0);
seq__39283_39287 = G__39299;
chunk__39284_39288 = G__39300;
count__39285_39289 = G__39301;
i__39286_39290 = G__39302;
continue;
} else {
var msg_39303 = cljs.core.first.call(null,seq__39283_39297__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39303);

var G__39304 = cljs.core.next.call(null,seq__39283_39297__$1);
var G__39305 = null;
var G__39306 = (0);
var G__39307 = (0);
seq__39283_39287 = G__39304;
chunk__39284_39288 = G__39305;
count__39285_39289 = G__39306;
i__39286_39290 = G__39307;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39308){
var map__39311 = p__39308;
var map__39311__$1 = ((((!((map__39311 == null)))?((((map__39311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39311):map__39311);
var w = map__39311__$1;
var message = cljs.core.get.call(null,map__39311__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25739__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25739__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25739__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39319 = cljs.core.seq.call(null,plugins);
var chunk__39320 = null;
var count__39321 = (0);
var i__39322 = (0);
while(true){
if((i__39322 < count__39321)){
var vec__39323 = cljs.core._nth.call(null,chunk__39320,i__39322);
var k = cljs.core.nth.call(null,vec__39323,(0),null);
var plugin = cljs.core.nth.call(null,vec__39323,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39325 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39319,chunk__39320,count__39321,i__39322,pl_39325,vec__39323,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39325.call(null,msg_hist);
});})(seq__39319,chunk__39320,count__39321,i__39322,pl_39325,vec__39323,k,plugin))
);
} else {
}

var G__39326 = seq__39319;
var G__39327 = chunk__39320;
var G__39328 = count__39321;
var G__39329 = (i__39322 + (1));
seq__39319 = G__39326;
chunk__39320 = G__39327;
count__39321 = G__39328;
i__39322 = G__39329;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39319);
if(temp__4425__auto__){
var seq__39319__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39319__$1)){
var c__26554__auto__ = cljs.core.chunk_first.call(null,seq__39319__$1);
var G__39330 = cljs.core.chunk_rest.call(null,seq__39319__$1);
var G__39331 = c__26554__auto__;
var G__39332 = cljs.core.count.call(null,c__26554__auto__);
var G__39333 = (0);
seq__39319 = G__39330;
chunk__39320 = G__39331;
count__39321 = G__39332;
i__39322 = G__39333;
continue;
} else {
var vec__39324 = cljs.core.first.call(null,seq__39319__$1);
var k = cljs.core.nth.call(null,vec__39324,(0),null);
var plugin = cljs.core.nth.call(null,vec__39324,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39334 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39319,chunk__39320,count__39321,i__39322,pl_39334,vec__39324,k,plugin,seq__39319__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39334.call(null,msg_hist);
});})(seq__39319,chunk__39320,count__39321,i__39322,pl_39334,vec__39324,k,plugin,seq__39319__$1,temp__4425__auto__))
);
} else {
}

var G__39335 = cljs.core.next.call(null,seq__39319__$1);
var G__39336 = null;
var G__39337 = (0);
var G__39338 = (0);
seq__39319 = G__39335;
chunk__39320 = G__39336;
count__39321 = G__39337;
i__39322 = G__39338;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args39339 = [];
var len__26809__auto___39342 = arguments.length;
var i__26810__auto___39343 = (0);
while(true){
if((i__26810__auto___39343 < len__26809__auto___39342)){
args39339.push((arguments[i__26810__auto___39343]));

var G__39344 = (i__26810__auto___39343 + (1));
i__26810__auto___39343 = G__39344;
continue;
} else {
}
break;
}

var G__39341 = args39339.length;
switch (G__39341) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39339.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26816__auto__ = [];
var len__26809__auto___39350 = arguments.length;
var i__26810__auto___39351 = (0);
while(true){
if((i__26810__auto___39351 < len__26809__auto___39350)){
args__26816__auto__.push((arguments[i__26810__auto___39351]));

var G__39352 = (i__26810__auto___39351 + (1));
i__26810__auto___39351 = G__39352;
continue;
} else {
}
break;
}

var argseq__26817__auto__ = ((((0) < args__26816__auto__.length))?(new cljs.core.IndexedSeq(args__26816__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26817__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39347){
var map__39348 = p__39347;
var map__39348__$1 = ((((!((map__39348 == null)))?((((map__39348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39348):map__39348);
var opts = map__39348__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39346){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39346));
});

//# sourceMappingURL=client.js.map