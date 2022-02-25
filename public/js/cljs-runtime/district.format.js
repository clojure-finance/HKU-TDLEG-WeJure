goog.provide('district.format');
district.format._STAR_default_datetime_formatter_STAR_ = new cljs.core.Keyword(null,"rfc822","rfc822",-404628697);
district.format._STAR_default_local_datetime_formatter_STAR_ = district.format._STAR_default_datetime_formatter_STAR_;
district.format._STAR_default_date_formatter_STAR_ = "EEE, dd MMM yyyy";
district.format._STAR_default_local_date_formatter_STAR_ = district.format._STAR_default_date_formatter_STAR_;
district.format._STAR_default_locale_STAR_ = "en-US";
district.format._STAR_default_max_number_fraction_digits_STAR_ = (2);
district.format._STAR_default_max_currency_fraction_digits_STAR_ = (2);
district.format._STAR_default_min_currency_fraction_digits_STAR_ = null;
district.format._STAR_default_max_token_fraction_digits_STAR_ = (2);
district.format._STAR_default_min_token_fraction_digits_STAR_ = null;
district.format.get_formatter = (function district$format$get_formatter(fmt){
if((fmt instanceof cljs.core.Keyword)){
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(fmt) : cljs_time.format.formatters.call(null,fmt));
} else {
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(fmt);
}
});
district.format.format_datetime = (function district$format$format_datetime(var_args){
var G__38502 = arguments.length;
switch (G__38502) {
case 1:
return district.format.format_datetime.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return district.format.format_datetime.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(district.format.format_datetime.cljs$core$IFn$_invoke$arity$1 = (function (date){
return district.format.format_datetime.cljs$core$IFn$_invoke$arity$2(date,district.format._STAR_default_datetime_formatter_STAR_);
}));

(district.format.format_datetime.cljs$core$IFn$_invoke$arity$2 = (function (date,formatter){
if(cljs.core.truth_(date)){
return cljs_time.format.unparse(district.format.get_formatter(formatter),date);
} else {
return null;
}
}));

(district.format.format_datetime.cljs$lang$maxFixedArity = 2);

district.format.format_local_datetime = (function district$format$format_local_datetime(var_args){
var G__38515 = arguments.length;
switch (G__38515) {
case 1:
return district.format.format_local_datetime.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return district.format.format_local_datetime.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(district.format.format_local_datetime.cljs$core$IFn$_invoke$arity$1 = (function (date){
return district.format.format_local_datetime.cljs$core$IFn$_invoke$arity$2(date,district.format._STAR_default_local_datetime_formatter_STAR_);
}));

(district.format.format_local_datetime.cljs$core$IFn$_invoke$arity$2 = (function (date,formatter){
if(cljs.core.truth_(date)){
return cljs_time.format.unparse_local(district.format.get_formatter(formatter),date);
} else {
return null;
}
}));

(district.format.format_local_datetime.cljs$lang$maxFixedArity = 2);

district.format.format_date = (function district$format$format_date(var_args){
var G__38517 = arguments.length;
switch (G__38517) {
case 1:
return district.format.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return district.format.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(district.format.format_date.cljs$core$IFn$_invoke$arity$1 = (function (date){
return district.format.format_date.cljs$core$IFn$_invoke$arity$2(date,district.format._STAR_default_date_formatter_STAR_);
}));

(district.format.format_date.cljs$core$IFn$_invoke$arity$2 = (function (date,formatter){
if(cljs.core.truth_(date)){
return cljs_time.format.unparse(district.format.get_formatter(formatter),date);
} else {
return null;
}
}));

(district.format.format_date.cljs$lang$maxFixedArity = 2);

district.format.format_local_date = (function district$format$format_local_date(var_args){
var G__38519 = arguments.length;
switch (G__38519) {
case 1:
return district.format.format_local_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return district.format.format_local_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(district.format.format_local_date.cljs$core$IFn$_invoke$arity$1 = (function (date){
return district.format.format_local_date.cljs$core$IFn$_invoke$arity$2(date,district.format._STAR_default_local_date_formatter_STAR_);
}));

(district.format.format_local_date.cljs$core$IFn$_invoke$arity$2 = (function (date,formatter){
if(cljs.core.truth_(date)){
return cljs_time.format.unparse_local(district.format.get_formatter(formatter),date);
} else {
return null;
}
}));

(district.format.format_local_date.cljs$lang$maxFixedArity = 2);

district.format.format_number = (function district$format$format_number(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38608 = arguments.length;
var i__4865__auto___38609 = (0);
while(true){
if((i__4865__auto___38609 < len__4864__auto___38608)){
args__4870__auto__.push((arguments[i__4865__auto___38609]));

var G__38610 = (i__4865__auto___38609 + (1));
i__4865__auto___38609 = G__38610;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return district.format.format_number.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(district.format.format_number.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__38522){
var vec__38523 = p__38522;
var map__38526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38523,(0),null);
var map__38526__$1 = cljs.core.__destructure_map(map__38526);
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38526__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697),district.format._STAR_default_locale_STAR_);
var max_fraction_digits = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38526__$1,new cljs.core.Keyword(null,"max-fraction-digits","max-fraction-digits",-185733995),district.format._STAR_default_max_number_fraction_digits_STAR_);
var min_fraction_digits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38526__$1,new cljs.core.Keyword(null,"min-fraction-digits","min-fraction-digits",-1394316717));
if(cljs.core.truth_(x)){
return x.toLocaleString(locale,({"maximumFractionDigits": max_fraction_digits, "minimumFractionDigits": min_fraction_digits}));
} else {
return null;
}
}));

(district.format.format_number.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(district.format.format_number.cljs$lang$applyTo = (function (seq38520){
var G__38521 = cljs.core.first(seq38520);
var seq38520__$1 = cljs.core.next(seq38520);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38521,seq38520__$1);
}));

district.format.format_currency = (function district$format$format_currency(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38611 = arguments.length;
var i__4865__auto___38612 = (0);
while(true){
if((i__4865__auto___38612 < len__4864__auto___38611)){
args__4870__auto__.push((arguments[i__4865__auto___38612]));

var G__38613 = (i__4865__auto___38612 + (1));
i__4865__auto___38612 = G__38613;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return district.format.format_currency.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(district.format.format_currency.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__38529){
var vec__38530 = p__38529;
var map__38533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38530,(0),null);
var map__38533__$1 = cljs.core.__destructure_map(map__38533);
var currency = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38533__$1,new cljs.core.Keyword(null,"currency","currency",-898327568));
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38533__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697),district.format._STAR_default_locale_STAR_);
var max_fraction_digits = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38533__$1,new cljs.core.Keyword(null,"max-fraction-digits","max-fraction-digits",-185733995),district.format._STAR_default_max_currency_fraction_digits_STAR_);
var min_fraction_digits = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38533__$1,new cljs.core.Keyword(null,"min-fraction-digits","min-fraction-digits",-1394316717),district.format._STAR_default_min_currency_fraction_digits_STAR_);
if(cljs.core.truth_(x)){
return x.toLocaleString(locale,({"maximumFractionDigits": max_fraction_digits, "minimumFractionDigits": min_fraction_digits, "style": "currency", "currency": currency}));
} else {
return null;
}
}));

(district.format.format_currency.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(district.format.format_currency.cljs$lang$applyTo = (function (seq38527){
var G__38528 = cljs.core.first(seq38527);
var seq38527__$1 = cljs.core.next(seq38527);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38528,seq38527__$1);
}));

district.format.format_token = (function district$format$format_token(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38614 = arguments.length;
var i__4865__auto___38615 = (0);
while(true){
if((i__4865__auto___38615 < len__4864__auto___38614)){
args__4870__auto__.push((arguments[i__4865__auto___38615]));

var G__38616 = (i__4865__auto___38615 + (1));
i__4865__auto___38615 = G__38616;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return district.format.format_token.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(district.format.format_token.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__38536){
var vec__38537 = p__38536;
var map__38540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38537,(0),null);
var map__38540__$1 = cljs.core.__destructure_map(map__38540);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38540__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38540__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697),district.format._STAR_default_locale_STAR_);
var max_fraction_digits = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38540__$1,new cljs.core.Keyword(null,"max-fraction-digits","max-fraction-digits",-185733995),district.format._STAR_default_max_token_fraction_digits_STAR_);
var min_fraction_digits = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38540__$1,new cljs.core.Keyword(null,"min-fraction-digits","min-fraction-digits",-1394316717),district.format._STAR_default_min_token_fraction_digits_STAR_);
if(cljs.core.truth_(x)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.toLocaleString(locale,({"maximumFractionDigits": max_fraction_digits, "minimumFractionDigits": min_fraction_digits}))),(cljs.core.truth_(token)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''):null)].join('');
} else {
return null;
}
}));

(district.format.format_token.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(district.format.format_token.cljs$lang$applyTo = (function (seq38534){
var G__38535 = cljs.core.first(seq38534);
var seq38534__$1 = cljs.core.next(seq38534);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38535,seq38534__$1);
}));

district.format.format_eth = (function district$format$format_eth(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38617 = arguments.length;
var i__4865__auto___38618 = (0);
while(true){
if((i__4865__auto___38618 < len__4864__auto___38617)){
args__4870__auto__.push((arguments[i__4865__auto___38618]));

var G__38619 = (i__4865__auto___38618 + (1));
i__4865__auto___38618 = G__38619;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return district.format.format_eth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(district.format.format_eth.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__38543){
var vec__38544 = p__38543;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38544,(0),null);
return district.format.format_token.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),"ETH"], null),opts], 0))], 0));
}));

(district.format.format_eth.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(district.format.format_eth.cljs$lang$applyTo = (function (seq38541){
var G__38542 = cljs.core.first(seq38541);
var seq38541__$1 = cljs.core.next(seq38541);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38542,seq38541__$1);
}));

district.format.format_dnt = (function district$format$format_dnt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38620 = arguments.length;
var i__4865__auto___38621 = (0);
while(true){
if((i__4865__auto___38621 < len__4864__auto___38620)){
args__4870__auto__.push((arguments[i__4865__auto___38621]));

var G__38622 = (i__4865__auto___38621 + (1));
i__4865__auto___38621 = G__38622;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return district.format.format_dnt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(district.format.format_dnt.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__38549){
var vec__38550 = p__38549;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38550,(0),null);
return district.format.format_token.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),"DNT"], null),opts], 0))], 0));
}));

(district.format.format_dnt.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(district.format.format_dnt.cljs$lang$applyTo = (function (seq38547){
var G__38548 = cljs.core.first(seq38547);
var seq38547__$1 = cljs.core.next(seq38547);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38548,seq38547__$1);
}));

district.format.format_number_metric = (function district$format$format_number_metric(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38623 = arguments.length;
var i__4865__auto___38624 = (0);
while(true){
if((i__4865__auto___38624 < len__4864__auto___38623)){
args__4870__auto__.push((arguments[i__4865__auto___38624]));

var G__38625 = (i__4865__auto___38624 + (1));
i__4865__auto___38624 = G__38625;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return district.format.format_number_metric.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(district.format.format_number_metric.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__38555){
var vec__38556 = p__38555;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38556,(0),null);
if(cljs.core.truth_(x)){
if((x < (1000))){
return district.format.format_number.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
} else {
if(((((999) < x)) && ((x < (1000000))))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(district.format.format_number.cljs$core$IFn$_invoke$arity$variadic((x / (1000)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0))),"K"].join('');
} else {
if(((999999) < x)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(district.format.format_number.cljs$core$IFn$_invoke$arity$variadic((x / (1000000)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0))),"M"].join('');
} else {
return null;
}
}
}
} else {
return null;
}
}));

(district.format.format_number_metric.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(district.format.format_number_metric.cljs$lang$applyTo = (function (seq38553){
var G__38554 = cljs.core.first(seq38553);
var seq38553__$1 = cljs.core.next(seq38553);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38554,seq38553__$1);
}));

district.format.etherscan_addr_url = (function district$format$etherscan_addr_url(var_args){
var G__38560 = arguments.length;
switch (G__38560) {
case 1:
return district.format.etherscan_addr_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return district.format.etherscan_addr_url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(district.format.etherscan_addr_url.cljs$core$IFn$_invoke$arity$1 = (function (address){
return ["https://etherscan.io/address/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address)].join('');
}));

(district.format.etherscan_addr_url.cljs$core$IFn$_invoke$arity$2 = (function (root_url,address){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((district.format.ensure_trailing_slash.cljs$core$IFn$_invoke$arity$1 ? district.format.ensure_trailing_slash.cljs$core$IFn$_invoke$arity$1(root_url) : district.format.ensure_trailing_slash.call(null,root_url))),"address/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address)].join('');
}));

(district.format.etherscan_addr_url.cljs$lang$maxFixedArity = 2);

district.format.etherscan_tx_url = (function district$format$etherscan_tx_url(var_args){
var G__38562 = arguments.length;
switch (G__38562) {
case 1:
return district.format.etherscan_tx_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return district.format.etherscan_tx_url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(district.format.etherscan_tx_url.cljs$core$IFn$_invoke$arity$1 = (function (tx_hash){
return ["https://etherscan.io/tx/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx_hash)].join('');
}));

(district.format.etherscan_tx_url.cljs$core$IFn$_invoke$arity$2 = (function (root_url,tx_hash){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((district.format.ensure_trailing_slash.cljs$core$IFn$_invoke$arity$1 ? district.format.ensure_trailing_slash.cljs$core$IFn$_invoke$arity$1(root_url) : district.format.ensure_trailing_slash.call(null,root_url))),"tx/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx_hash)].join('');
}));

(district.format.etherscan_tx_url.cljs$lang$maxFixedArity = 2);

district.format.time_ago = (function district$format$time_ago(var_args){
var G__38566 = arguments.length;
switch (G__38566) {
case 1:
return district.format.time_ago.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return district.format.time_ago.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(district.format.time_ago.cljs$core$IFn$_invoke$arity$1 = (function (from_time){
return district.format.time_ago.cljs$core$IFn$_invoke$arity$2(from_time,cljs_time.core.now());
}));

(district.format.time_ago.cljs$core$IFn$_invoke$arity$2 = (function (from_time,to_time){
if(cljs.core.truth_(to_time)){
var units = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"second",new cljs.core.Keyword(null,"limit","limit",-1355822363),(60),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"minute",new cljs.core.Keyword(null,"limit","limit",-1355822363),(3600),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(60)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"hour",new cljs.core.Keyword(null,"limit","limit",-1355822363),(86400),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(3600)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"day",new cljs.core.Keyword(null,"limit","limit",-1355822363),(604800),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(86400)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"week",new cljs.core.Keyword(null,"limit","limit",-1355822363),(2629743),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(604800)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"month",new cljs.core.Keyword(null,"limit","limit",-1355822363),(31556926),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(2629743)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"year",new cljs.core.Keyword(null,"limit","limit",-1355822363),null,new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(31556926)], null)], null);
var diff = cljs_time.core.in_seconds(cljs_time.core.interval(from_time,to_time));
if((diff < (5))){
return "just now";
} else {
var unit = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__38563_SHARP_){
return (((diff >= new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(p1__38563_SHARP_))) || (cljs.core.not(new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(p1__38563_SHARP_))));
}),units));
return (function (p1__38564_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38564_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(unit)),(((p1__38564_SHARP_ > (1)))?"s":null)," ago"].join('');
})((Math.floor((diff / new cljs.core.Keyword(null,"in-second","in-second",-1351007453).cljs$core$IFn$_invoke$arity$1(unit))) | (0)));
}
} else {
return null;
}
}));

(district.format.time_ago.cljs$lang$maxFixedArity = 2);

/**
 * Taken from reagent-utils
 * pluralizes the word based on the number of items
 * (util/pluralize ["John"] "lad")
 * (util/pluralize ["John" "James"] "lad")
 * (util/pluralize ["Alice"] "lad" "y" "ies")
 */
district.format.pluralize = (function district$format$pluralize(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38629 = arguments.length;
var i__4865__auto___38630 = (0);
while(true){
if((i__4865__auto___38630 < len__4864__auto___38629)){
args__4870__auto__.push((arguments[i__4865__auto___38630]));

var G__38631 = (i__4865__auto___38630 + (1));
i__4865__auto___38630 = G__38631;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return district.format.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(district.format.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__38569){
var vec__38570 = p__38569;
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38570,(0),null);
var ending1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38570,(1),null);
var ending2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38570,(2),null);
var opts = vec__38570;
var plural = (function (){var G__38573 = cljs.core.count(opts);
switch (G__38573) {
case (1):
return "s";

break;
case (2):
return ending1;

break;
case (3):
return ending2;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38573)].join('')));

}
})();
var singular = (function (){var G__38574 = cljs.core.count(opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"list","list",-1889078086,null),G__38574)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),G__38574)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),G__38574)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),G__38574)){
return ending1;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38574)].join('')));

}
}
}
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((1) === n))?singular:plural))].join('');
}));

(district.format.pluralize.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(district.format.pluralize.cljs$lang$applyTo = (function (seq38567){
var G__38568 = cljs.core.first(seq38567);
var seq38567__$1 = cljs.core.next(seq38567);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38568,seq38567__$1);
}));

/**
 * Truncate a string with suffix (ellipsis by default) if it is
 * longer than specified length.
 */
district.format.truncate = (function district$format$truncate(var_args){
var G__38576 = arguments.length;
switch (G__38576) {
case 2:
return district.format.truncate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return district.format.truncate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(district.format.truncate.cljs$core$IFn$_invoke$arity$2 = (function (string,length){
return district.format.truncate.cljs$core$IFn$_invoke$arity$3(string,length,"...");
}));

(district.format.truncate.cljs$core$IFn$_invoke$arity$3 = (function (string,length,suffix){
var string_len = cljs.core.count(string);
var suffix_len = cljs.core.count(suffix);
if((string_len <= length)){
return string;
} else {
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(0),(length - suffix_len)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
}));

(district.format.truncate.cljs$lang$maxFixedArity = 3);

district.format.format_bool = (function district$format$format_bool(x){
if(cljs.core.truth_(x)){
return "true";
} else {
return "false";
}
});
district.format.time_unit__GT_text = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"days","days",-1394072564),"day",new cljs.core.Keyword(null,"hours","hours",58380855),"hour",new cljs.core.Keyword(null,"minutes","minutes",1319166394),"minute",new cljs.core.Keyword(null,"seconds","seconds",-445266194),"second"], null);
district.format.time_unit__GT_text_short = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"days","days",-1394072564),"day",new cljs.core.Keyword(null,"hours","hours",58380855),"hour",new cljs.core.Keyword(null,"minutes","minutes",1319166394),"min.",new cljs.core.Keyword(null,"seconds","seconds",-445266194),"sec."], null);
district.format.format_time_unit = (function district$format$format_time_unit(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38634 = arguments.length;
var i__4865__auto___38635 = (0);
while(true){
if((i__4865__auto___38635 < len__4864__auto___38634)){
args__4870__auto__.push((arguments[i__4865__auto___38635]));

var G__38636 = (i__4865__auto___38635 + (1));
i__4865__auto___38635 = G__38636;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return district.format.format_time_unit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(district.format.format_time_unit.cljs$core$IFn$_invoke$arity$variadic = (function (unit,amount,p__38580){
var vec__38581 = p__38580;
var map__38584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38581,(0),null);
var map__38584__$1 = cljs.core.__destructure_map(map__38584);
var short_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38584__$1,new cljs.core.Keyword(null,"short?","short?",-1064270428));
var f = (cljs.core.truth_(short_QMARK_)?district.format.time_unit__GT_text_short:district.format.time_unit__GT_text);
var unit_text = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(unit) : f.call(null,unit));
if(cljs.core.truth_((function (){var and__4251__auto__ = short_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.ends_with_QMARK_(unit_text,".");
} else {
return and__4251__auto__;
}
})())){
return district.format.pluralize.cljs$core$IFn$_invoke$arity$variadic(amount,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([unit_text,""], 0));
} else {
return district.format.pluralize.cljs$core$IFn$_invoke$arity$variadic(amount,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([unit_text], 0));
}
}));

(district.format.format_time_unit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(district.format.format_time_unit.cljs$lang$applyTo = (function (seq38577){
var G__38578 = cljs.core.first(seq38577);
var seq38577__$1 = cljs.core.next(seq38577);
var G__38579 = cljs.core.first(seq38577__$1);
var seq38577__$2 = cljs.core.next(seq38577__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38578,G__38579,seq38577__$2);
}));

district.format.format_time_units = (function district$format$format_time_units(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38637 = arguments.length;
var i__4865__auto___38638 = (0);
while(true){
if((i__4865__auto___38638 < len__4864__auto___38637)){
args__4870__auto__.push((arguments[i__4865__auto___38638]));

var G__38639 = (i__4865__auto___38638 + (1));
i__4865__auto___38638 = G__38639;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return district.format.format_time_units.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(district.format.format_time_units.cljs$core$IFn$_invoke$arity$variadic = (function (p__38587,p__38588){
var map__38589 = p__38587;
var map__38589__$1 = cljs.core.__destructure_map(map__38589);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38589__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38589__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38589__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38589__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var vec__38590 = p__38588;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38590,(0),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__38593){
var vec__38594 = p__38593;
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38594,(0),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38594,(1),null);
if((amount > (0))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc),district.format.format_time_unit.cljs$core$IFn$_invoke$arity$variadic(unit,amount,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0))," "].join('');
} else {
return acc;
}
}),"",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"days","days",-1394072564),days], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855),hours], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds], null)], null)).slice((0),(-1));
}));

(district.format.format_time_units.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(district.format.format_time_units.cljs$lang$applyTo = (function (seq38585){
var G__38586 = cljs.core.first(seq38585);
var seq38585__$1 = cljs.core.next(seq38585);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38586,seq38585__$1);
}));

district.format.format_url = (function district$format$format_url(path,query_map){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cemerick.url.map__GT_query(query_map))].join('');
});
district.format.format_namespaced_kw = (function district$format$format_namespaced_kw(kw){
if(cljs.core.truth_(kw)){
return [(function (){var temp__5753__auto__ = cljs.core.namespace(kw);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
return [n,"/"].join('');
} else {
return null;
}
})(),cljs.core.name(kw)].join('');
} else {
return null;
}
});
district.format.format_percentage = (function district$format$format_percentage(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38640 = arguments.length;
var i__4865__auto___38641 = (0);
while(true){
if((i__4865__auto___38641 < len__4864__auto___38640)){
args__4870__auto__.push((arguments[i__4865__auto___38641]));

var G__38642 = (i__4865__auto___38641 + (1));
i__4865__auto___38641 = G__38642;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return district.format.format_percentage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(district.format.format_percentage.cljs$core$IFn$_invoke$arity$variadic = (function (portion,total,p__38600){
var vec__38601 = p__38600;
var format_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38601,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(district.format.format_number.cljs$core$IFn$_invoke$arity$variadic(((portion / total) * 100.0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-fraction-digits","max-fraction-digits",-185733995),(1),new cljs.core.Keyword(null,"min-fraction-digits","min-fraction-digits",-1394316717),(0)], null),format_opts], 0))], 0))),"%"].join('');
}));

(district.format.format_percentage.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(district.format.format_percentage.cljs$lang$applyTo = (function (seq38597){
var G__38598 = cljs.core.first(seq38597);
var seq38597__$1 = cljs.core.next(seq38597);
var G__38599 = cljs.core.first(seq38597__$1);
var seq38597__$2 = cljs.core.next(seq38597__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38598,G__38599,seq38597__$2);
}));

district.format.ensure_trailing_slash = (function district$format$ensure_trailing_slash(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((clojure.string.ends_with_QMARK_(s,"/"))?null:"/")].join('');
});
district.format.clj__GT_json = (function district$format$clj__GT_json(coll){
return JSON.stringify(cljs.core.clj__GT_js(coll));
});

//# sourceMappingURL=district.format.js.map
