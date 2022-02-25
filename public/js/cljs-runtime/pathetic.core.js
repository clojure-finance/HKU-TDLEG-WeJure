goog.provide('pathetic.core');
pathetic.core.separator = "/";
pathetic.core.separator_pattern = cljs.core.re_pattern(pathetic.core.separator);
/**
 * Given two collections, returns a sequence containing the prefix they
 * share. Example: (common-prefix [\a \b] [\a \b \c \d]) -> (\a \b)
 */
pathetic.core.common_prefix = (function pathetic$core$common_prefix(coll1,coll2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__37722_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__37722_SHARP_),cljs.core.second(p1__37722_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__37727_SHARP_,p2__37728_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__37727_SHARP_,p2__37728_SHARP_],null));
}),coll1,coll2)));
});
/**
 * Returns the elements of interesting-coll that are not part of the common
 * prefix with uninteresting-coll.
 */
pathetic.core.unique_suffix = (function pathetic$core$unique_suffix(uninteresting_coll,interesting_coll){
var common_parts = pathetic.core.common_prefix(uninteresting_coll,interesting_coll);
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(common_parts),interesting_coll);
});
pathetic.core.split = (function pathetic$core$split(path){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,pathetic.core.separator)){
return cljs.core.PersistentVector.EMPTY;
} else {
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),pathetic.core.separator_pattern);
}
});
/**
 * Given a j.io.File or string containing a relative or absolute path,
 * returns the corresponding path vector data structure described at
 * the top of the file.
 * 
 * This function does not do any normalization or simplification. However,
 * because there is more than one way to write some paths, some simplification
 * might happen anyways, such as if the path starts with a (redundant) ".".
 */
pathetic.core.parse_path = (function pathetic$core$parse_path(path){
if(cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(path))){
return null;
} else {
var path_pieces = pathetic.core.split(path);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(path_pieces))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null);
} else {
var G__37733 = cljs.core.first(path_pieces);
switch (G__37733) {
case "":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"root","root",-448657453),cljs.core.rest(path_pieces));

break;
case ".":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"cwd","cwd",14056523),cljs.core.rest(path_pieces));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"cwd","cwd",14056523),path_pieces);

}
}
}
});
/**
 * Given a seq of path elements as created by parse-path, returns a string
 * containing the path represented. This function will only
 * ever use unix-style path rules, so an absolute path will always start with
 * the "/" separator.
 * 
 * NOTE: It is NOT the goal of this function to perform normalization, it just
 * renders what it is given. HOWEVER, that does NOT mean that it is always true
 * that (= (render-path (parse-path some-path)) some-path). That is, you may not
 * render the exact same string you parsed. This is because the path syntax does
 * not have exactly one way to write every path.
 */
pathetic.core.render_path = (function pathetic$core$render_path(path_pieces){
var G__37734 = cljs.core.first(path_pieces);
var G__37734__$1 = (((G__37734 instanceof cljs.core.Keyword))?G__37734.fqn:null);
switch (G__37734__$1) {
case "root":
return [pathetic.core.separator,clojure.string.join.cljs$core$IFn$_invoke$arity$2(pathetic.core.separator,cljs.core.rest(path_pieces))].join('');

break;
case "cwd":
if(cljs.core.next(path_pieces)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(pathetic.core.separator,cljs.core.rest(path_pieces));
} else {
return ".";
}

break;
default:
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(pathetic.core.separator,path_pieces);

}
});
pathetic.core.starts_with = (function pathetic$core$starts_with(s,prefix){
return goog.string.startsWith(s,prefix);
});
/**
 * Returns true if the given argument is an absolute path.
 */
pathetic.core.absolute_path_QMARK_ = (function pathetic$core$absolute_path_QMARK_(path){
return pathetic.core.starts_with(path,pathetic.core.separator);
});
/**
 * Given a seq of path elements as created by parse-path, returns a new
 * seq of path elements, but having gone "up" one directory. That is,
 * applies a ".." component to the path.
 */
pathetic.core.up_dir = (function pathetic$core$up_dir(path_pieces){
var G__37741 = cljs.core.last(path_pieces);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cwd","cwd",14056523),G__37741)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path_pieces,"..");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("..",G__37741)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path_pieces,"..");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),G__37741)){
return path_pieces;
} else {
return cljs.core.pop(path_pieces);

}
}
}
});
/**
 * Cleans up a path so that it has no leading/trailing whitespace, and
 * removes any removable same-/parent-dir references. path-pieces
 * should be a path vector in the format returned by parse-path;
 * return value is a vector in the same format.
 */
pathetic.core.normalize_STAR_ = (function pathetic$core$normalize_STAR_(path_pieces){
var result = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(path_pieces)], null);
var remaining_path = cljs.core.rest(path_pieces);
while(true){
var vec__37750 = remaining_path;
var seq__37751 = cljs.core.seq(vec__37750);
var first__37752 = cljs.core.first(seq__37751);
var seq__37751__$1 = cljs.core.next(seq__37751);
var curr = first__37752;
var remainder = seq__37751__$1;
var pred__37753 = cljs.core._EQ_;
var expr__37754 = curr;
if(cljs.core.truth_((pred__37753.cljs$core$IFn$_invoke$arity$2 ? pred__37753.cljs$core$IFn$_invoke$arity$2(null,expr__37754) : pred__37753.call(null,null,expr__37754)))){
return result;
} else {
if(cljs.core.truth_((pred__37753.cljs$core$IFn$_invoke$arity$2 ? pred__37753.cljs$core$IFn$_invoke$arity$2("",expr__37754) : pred__37753.call(null,"",expr__37754)))){
var G__37787 = result;
var G__37788 = remainder;
result = G__37787;
remaining_path = G__37788;
continue;
} else {
if(cljs.core.truth_((pred__37753.cljs$core$IFn$_invoke$arity$2 ? pred__37753.cljs$core$IFn$_invoke$arity$2(".",expr__37754) : pred__37753.call(null,".",expr__37754)))){
var G__37790 = result;
var G__37791 = remainder;
result = G__37790;
remaining_path = G__37791;
continue;
} else {
if(cljs.core.truth_((pred__37753.cljs$core$IFn$_invoke$arity$2 ? pred__37753.cljs$core$IFn$_invoke$arity$2("..",expr__37754) : pred__37753.call(null,"..",expr__37754)))){
var G__37792 = pathetic.core.up_dir(result);
var G__37793 = remainder;
result = G__37792;
remaining_path = G__37793;
continue;
} else {
var G__37794 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,curr);
var G__37795 = remainder;
result = G__37794;
remaining_path = G__37795;
continue;
}
}
}
}
break;
}
});
/**
 * Cleans up a path so that it has no leading/trailing whitespace, and
 * removes any unremovable same-/parent-dir references. Takes the path
 * argument as a string and returns its result as a string.
 */
pathetic.core.normalize = (function pathetic$core$normalize(path){
return pathetic.core.render_path(pathetic.core.normalize_STAR_(pathetic.core.parse_path(path)));
});
/**
 * Takes two absolute paths or two relative paths, and returns a relative path
 * that indicates the same file system location as dest-path, but
 * relative to base-path. Paths should be path vectors, and the return
 * value is also a path vector.
 */
pathetic.core.relativize_STAR_ = (function pathetic$core$relativize_STAR_(base_path,dest_path){
var common_path = pathetic.core.common_prefix(base_path,dest_path);
var base_suffix = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(common_path),base_path);
var dest_suffix = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(common_path),dest_path);
if((common_path == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Paths contain no common components.",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cwd","cwd",14056523)], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(base_suffix),".."),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var suffix = cljs.core.PersistentVector.EMPTY;
var remainder = dest_suffix;
while(true){
var curr = cljs.core.first(remainder);
var pred__37762 = cljs.core._EQ_;
var expr__37763 = curr;
if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2(null,expr__37763) : pred__37762.call(null,null,expr__37763)))){
return suffix;
} else {
if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("",expr__37763) : pred__37762.call(null,"",expr__37763)))){
var G__37797 = suffix;
var G__37798 = cljs.core.rest(remainder);
suffix = G__37797;
remainder = G__37798;
continue;
} else {
if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2(".",expr__37763) : pred__37762.call(null,".",expr__37763)))){
var G__37799 = suffix;
var G__37800 = cljs.core.rest(remainder);
suffix = G__37799;
remainder = G__37800;
continue;
} else {
if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("..",expr__37763) : pred__37762.call(null,"..",expr__37763)))){
var G__37801 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(suffix,"..");
var G__37802 = cljs.core.rest(remainder);
suffix = G__37801;
remainder = G__37802;
continue;
} else {
var G__37803 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(suffix,curr);
var G__37804 = cljs.core.rest(remainder);
suffix = G__37803;
remainder = G__37804;
continue;
}
}
}
}
break;
}
})()], 0));
});
/**
 * Takes two absolute paths or two relative paths, and returns a relative path
 * that indicates the same file system location as destination-path, but
 * relative to base-path.
 */
pathetic.core.relativize = (function pathetic$core$relativize(base_path,dest_path){
var base_path__$1 = pathetic.core.normalize_STAR_(pathetic.core.parse_path(base_path));
var dest_path__$1 = pathetic.core.normalize_STAR_(pathetic.core.parse_path(dest_path));
return pathetic.core.render_path(pathetic.core.relativize_STAR_(base_path__$1,dest_path__$1));
});
/**
 * Resolve the other-path against the base-path. If other-path is absolute,
 * the result is other-path. If other-path is nil, the result is base-path.
 * Otherwise, the result is other-path concatenated onto base-path. Does not
 * normalize its output. All inputs and outputs are path vectors.
 */
pathetic.core.resolve_STAR_ = (function pathetic$core$resolve_STAR_(base_path,other_path){
if((other_path == null)){
return base_path;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),cljs.core.first(other_path))){
return other_path;
} else {
var base_components = pathetic.core.normalize_STAR_(base_path);
var other_components = cljs.core.rest(pathetic.core.normalize_STAR_(other_path));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(base_components,other_components);

}
}
});
/**
 * Resolve the other-path against the base-path. If other-path is absolute,
 * the result is other-path. If other-path is nil, the result is base-path.
 * Otherwise, the result is other-path concatenated onto base-path. Does not
 * normalize its output. Accepts an optional third argument containing a string
 * with the path separator to use.
 */
pathetic.core.resolve = (function pathetic$core$resolve(base_path,other_path){
return pathetic.core.render_path(pathetic.core.resolve_STAR_(pathetic.core.parse_path(base_path),pathetic.core.parse_path(other_path)));
});
pathetic.core.ends_with = (function pathetic$core$ends_with(s,suffix){
return goog.string.endsWith(s,suffix);
});
/**
 * If the path given does not have a trailing separator, returns a new path
 * that has one.
 */
pathetic.core.ensure_trailing_separator = (function pathetic$core$ensure_trailing_separator(path){
if(cljs.core.truth_(pathetic.core.ends_with(path,pathetic.core.separator))){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),pathetic.core.separator].join('');
}
});
pathetic.core.as_url = (function pathetic$core$as_url(url_or_string){
if((url_or_string instanceof goog.Uri)){
return url_or_string;
} else {
return (new goog.Uri(url_or_string));
}
});
/**
 * Given a URL or string containing a URL, returns a vector of the three
 * component strings: the stuff before the path, the path, and the stuff
 * after the path. Useful for destructuring.
 */
pathetic.core.split_url_on_path = (function pathetic$core$split_url_on_path(url_or_string){
var url = pathetic.core.as_url(url_or_string);
var url_string = cljs.core.str.cljs$core$IFn$_invoke$arity$1(url);
var path = url.getPath();
var path_idx = url_string.lastIndexOf(path);
var pre_path = url_string.substring((0),path_idx);
var post_path = url_string.substring((path_idx + cljs.core.count(path)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre_path,path,post_path], null);
});
/**
 * Behaves like normalize on the path part of a URL, but takes a j.n.URL or
 * string containing a URL, and returns a string containing the same URL
 * instead of just a path. Everything but the path part of the URL is unchanged
 * (query, anchor, protocol, etc).
 */
pathetic.core.url_normalize = (function pathetic$core$url_normalize(url_or_string){
var vec__37770 = pathetic.core.split_url_on_path(url_or_string);
var pre_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37770,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37770,(1),null);
var post_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37770,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pathetic.core.normalize(path)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_path)].join('');
});
/**
 * Behaves like ensure-trailing-separator on the path part of a URL, but takes
 * a j.n.URL or string containing a URL, and returns a string containing the
 * same URL instead of just a path. Everything but the path part of the URL is
 * unchanged (query, anchor, protocol, etc).
 */
pathetic.core.url_ensure_trailing_separator = (function pathetic$core$url_ensure_trailing_separator(url_or_string){
var vec__37773 = pathetic.core.split_url_on_path(url_or_string);
var pre_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37773,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37773,(1),null);
var post_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37773,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pathetic.core.ensure_trailing_separator(path)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_path)].join('');
});

//# sourceMappingURL=pathetic.core.js.map
