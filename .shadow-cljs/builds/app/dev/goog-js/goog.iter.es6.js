["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/iter/es6.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.iter.es6\");\n  goog.module.declareLegacyNamespace();\n  const GoogIterable = goog.require(\"goog.iter.Iterable\");\n  const GoogIterator = goog.require(\"goog.iter.Iterator\");\n  const StopIteration = goog.require(\"goog.iter.StopIteration\");\n  class ShimIterable {\n    __iterator__() {\n    }\n    toGoog() {\n    }\n    toEs6() {\n    }\n    static of(iter) {\n      if (iter instanceof ShimIterableImpl || iter instanceof ShimGoogIterator || iter instanceof ShimEs6Iterator) {\n        return iter;\n      } else if (typeof iter.nextValueOrThrow == \"function\") {\n        return new ShimIterableImpl(() => wrapGoog(iter));\n      } else if (typeof iter[Symbol.iterator] == \"function\") {\n        return new ShimIterableImpl(() => iter[Symbol.iterator]());\n      } else if (typeof iter.__iterator__ == \"function\") {\n        return new ShimIterableImpl(() => wrapGoog(iter.__iterator__()));\n      }\n      throw new Error(\"Not an iterator or iterable.\");\n    }\n  }\n  const wrapGoog = iter => {\n    if (!(iter instanceof GoogIterator)) {\n      return iter;\n    }\n    let done = false;\n    return {next() {\n      let value;\n      while (!done) {\n        try {\n          value = iter.nextValueOrThrow();\n          break;\n        } catch (err) {\n          if (err !== StopIteration) {\n            throw err;\n          }\n          done = true;\n        }\n      }\n      return {value, done};\n    },};\n  };\n  class ShimIterableImpl {\n    constructor(func) {\n      this.func_ = func;\n    }\n    __iterator__() {\n      return new ShimGoogIterator(this.func_());\n    }\n    toGoog() {\n      return new ShimGoogIterator(this.func_());\n    }\n    [Symbol.iterator]() {\n      return new ShimEs6Iterator(this.func_());\n    }\n    toEs6() {\n      return new ShimEs6Iterator(this.func_());\n    }\n  }\n  class ShimGoogIterator extends GoogIterator {\n    constructor(iter) {\n      super();\n      this.iter_ = iter;\n    }\n    nextValueOrThrow() {\n      const result = this.iter_.next();\n      if (result.done) {\n        throw StopIteration;\n      }\n      return result.value;\n    }\n    toGoog() {\n      return this;\n    }\n    [Symbol.iterator]() {\n      return new ShimEs6Iterator(this.iter_);\n    }\n    toEs6() {\n      return new ShimEs6Iterator(this.iter_);\n    }\n  }\n  class ShimEs6Iterator extends ShimIterableImpl {\n    constructor(iter) {\n      super(() => iter);\n      this.iter_ = iter;\n    }\n    next() {\n      return this.iter_.next();\n    }\n  }\n  exports = {ShimIterable, ShimEs6Iterator, ShimGoogIterator,};\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Shims between goog.iter.Iterator and ES6 iterator.\n */\n\ngoog.module('goog.iter.es6');\ngoog.module.declareLegacyNamespace();\n\nconst GoogIterable = goog.require('goog.iter.Iterable');\nconst GoogIterator = goog.require('goog.iter.Iterator');\nconst StopIteration = goog.require('goog.iter.StopIteration');\n\n\n/**\n * Common interface extending both `goog.iter.Iterable` and ES6 `Iterable`,\n * and providing `toGoog()` and `toEs6()` methods to get either kind\n * of iterator.  `ShimIterable.of()` is the primary entry point for\n * this library.  If it is given an iterable that is *not* also an\n * iterator, then it will inherit any reusability from its argument\n * (i.e. `ShimIterable.of(mySet)` will be reusable, since mySet makes\n * a fresh Iterator every time, whereas `ShimIterable.of(myIterator)`\n * will be one-shot).\n *\n * `ShimGoogIterator` and `ShimEs6Iterator` extend `ShimIterable` and\n * also implement one or the other iterator API.  Since they extend\n * `ShimIterable`, it is easy to convert back and forth between the two\n * APIs.  Any such conversion will expose a view to the same underlying\n * iterator, so elements pulled via one API will not be available from\n * the other.\n *\n * @interface\n * @extends {Iterable<VALUE>}\n * @template VALUE\n */\nclass ShimIterable {\n  /** @return {!GoogIterator<VALUE>} */\n  __iterator__() {}\n\n  /** @return {!ShimGoogIterator<VALUE>} */\n  toGoog() {}\n\n  /** @return {!ShimEs6Iterator<VALUE>} */\n  toEs6() {}\n\n  /**\n   * @param {!Iterable<VALUE>|!Iterator<VALUE>|\n   *         !GoogIterator<VALUE>|!GoogIterable} iter\n   * @return {!ShimIterable}\n   * @template VALUE\n   */\n  static of(iter) {\n    if (iter instanceof ShimIterableImpl || iter instanceof ShimGoogIterator ||\n        iter instanceof ShimEs6Iterator) {\n      return iter;\n    } else if (typeof iter.nextValueOrThrow == 'function') {\n      return new ShimIterableImpl(\n          () => wrapGoog(/** @type {!Iterator|!GoogIterator} */ (iter)));\n    } else if (typeof iter[Symbol.iterator] == 'function') {\n      return new ShimIterableImpl(() => iter[Symbol.iterator]());\n    } else if (typeof iter.__iterator__ == 'function') {\n      return new ShimIterableImpl(\n          () => wrapGoog(\n              /** @type {{__iterator__:function(this:?, boolean=)}} */ (iter)\n                  .__iterator__()));\n    }\n    throw new Error('Not an iterator or iterable.');\n  }\n}\n\n\n/**\n * @param {!GoogIterator<VALUE>|!Iterator<VALUE>} iter\n * @return {!Iterator<VALUE>}\n * @template VALUE\n */\nconst wrapGoog = (iter) => {\n  if (!(iter instanceof GoogIterator)) return iter;\n  let done = false;\n  return /** @type {?} */ ({\n    next() {\n      let value;\n      while (!done) {\n        try {\n          value = iter.nextValueOrThrow();\n          break;\n        } catch (err) {\n          if (err !== StopIteration) throw err;\n          done = true;\n        }\n      }\n      return {value, done};\n    },\n  });\n};\n\n\n/**\n * Concrete (private) implementation of a non-iterator iterable.  This is\n * separate from the iterator versions since it supports iterables that\n * are not \"one-shot\".\n * @implements {ShimIterable<VALUE>}\n * @template VALUE\n */\nclass ShimIterableImpl {\n  /** @param {function(): !Iterator<VALUE>} func */\n  constructor(func) {\n    /** @const @private */\n    this.func_ = func;\n  }\n\n  /** @override */\n  __iterator__() {\n    return new ShimGoogIterator(this.func_());\n  }\n\n  /** @override */\n  toGoog() {\n    return new ShimGoogIterator(this.func_());\n  }\n\n  /** @override */\n  [Symbol.iterator]() {\n    return new ShimEs6Iterator(this.func_());\n  }\n\n  /** @override */\n  toEs6() {\n    return new ShimEs6Iterator(this.func_());\n  }\n}\n\n\n/**\n * Concrete `goog.iter.Iterator` subclass that also implements `ShimIterable`.\n * @extends {GoogIterator<VALUE>}\n * @implements {ShimIterable<VALUE>}\n * @template VALUE\n */\nclass ShimGoogIterator extends GoogIterator {\n  /** @param {!Iterator<VALUE>} iter */\n  constructor(iter) {\n    super();\n    this.iter_ = iter;\n  }\n\n  /** @override */\n  nextValueOrThrow() {\n    const result = this.iter_.next();\n    if (result.done) throw StopIteration;\n    return result.value;\n  }\n\n\n  /** @override */\n  toGoog() {\n    return this;\n  }\n\n  /** @override */\n  [Symbol.iterator]() {\n    return new ShimEs6Iterator(this.iter_);\n  }\n\n  /** @override */\n  toEs6() {\n    return new ShimEs6Iterator(this.iter_);\n  }\n}\n\n\n/**\n * Concrete ES6 `Iterator` that also implements `ShimIterable`.\n * @implements {IteratorIterable<VALUE>}\n * @extends {ShimIterableImpl<VALUE>}\n * @template VALUE\n */\nclass ShimEs6Iterator extends ShimIterableImpl {\n  /** @param {!Iterator<VALUE>} iter */\n  constructor(iter) {\n    super(() => iter);\n    /** @const @private */\n    this.iter_ = iter;\n  }\n\n  /** @override */\n  next() {\n    return this.iter_.next();\n  }\n}\n\n\nexports = {\n  ShimIterable,\n  ShimEs6Iterator,\n  ShimGoogIterator,\n};\n","~:compiled-at",1644840855886,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.iter.es6.js\",\n\"lineCount\":100,\n\"mappings\":\"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\",\n\"sources\":[\"goog/iter/es6.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Shims between goog.iter.Iterator and ES6 iterator.\\n */\\n\\ngoog.module('goog.iter.es6');\\ngoog.module.declareLegacyNamespace();\\n\\nconst GoogIterable = goog.require('goog.iter.Iterable');\\nconst GoogIterator = goog.require('goog.iter.Iterator');\\nconst StopIteration = goog.require('goog.iter.StopIteration');\\n\\n\\n/**\\n * Common interface extending both `goog.iter.Iterable` and ES6 `Iterable`,\\n * and providing `toGoog()` and `toEs6()` methods to get either kind\\n * of iterator.  `ShimIterable.of()` is the primary entry point for\\n * this library.  If it is given an iterable that is *not* also an\\n * iterator, then it will inherit any reusability from its argument\\n * (i.e. `ShimIterable.of(mySet)` will be reusable, since mySet makes\\n * a fresh Iterator every time, whereas `ShimIterable.of(myIterator)`\\n * will be one-shot).\\n *\\n * `ShimGoogIterator` and `ShimEs6Iterator` extend `ShimIterable` and\\n * also implement one or the other iterator API.  Since they extend\\n * `ShimIterable`, it is easy to convert back and forth between the two\\n * APIs.  Any such conversion will expose a view to the same underlying\\n * iterator, so elements pulled via one API will not be available from\\n * the other.\\n *\\n * @interface\\n * @extends {Iterable<VALUE>}\\n * @template VALUE\\n */\\nclass ShimIterable {\\n  /** @return {!GoogIterator<VALUE>} */\\n  __iterator__() {}\\n\\n  /** @return {!ShimGoogIterator<VALUE>} */\\n  toGoog() {}\\n\\n  /** @return {!ShimEs6Iterator<VALUE>} */\\n  toEs6() {}\\n\\n  /**\\n   * @param {!Iterable<VALUE>|!Iterator<VALUE>|\\n   *         !GoogIterator<VALUE>|!GoogIterable} iter\\n   * @return {!ShimIterable}\\n   * @template VALUE\\n   */\\n  static of(iter) {\\n    if (iter instanceof ShimIterableImpl || iter instanceof ShimGoogIterator ||\\n        iter instanceof ShimEs6Iterator) {\\n      return iter;\\n    } else if (typeof iter.nextValueOrThrow == 'function') {\\n      return new ShimIterableImpl(\\n          () => wrapGoog(/** @type {!Iterator|!GoogIterator} */ (iter)));\\n    } else if (typeof iter[Symbol.iterator] == 'function') {\\n      return new ShimIterableImpl(() => iter[Symbol.iterator]());\\n    } else if (typeof iter.__iterator__ == 'function') {\\n      return new ShimIterableImpl(\\n          () => wrapGoog(\\n              /** @type {{__iterator__:function(this:?, boolean=)}} */ (iter)\\n                  .__iterator__()));\\n    }\\n    throw new Error('Not an iterator or iterable.');\\n  }\\n}\\n\\n\\n/**\\n * @param {!GoogIterator<VALUE>|!Iterator<VALUE>} iter\\n * @return {!Iterator<VALUE>}\\n * @template VALUE\\n */\\nconst wrapGoog = (iter) => {\\n  if (!(iter instanceof GoogIterator)) return iter;\\n  let done = false;\\n  return /** @type {?} */ ({\\n    next() {\\n      let value;\\n      while (!done) {\\n        try {\\n          value = iter.nextValueOrThrow();\\n          break;\\n        } catch (err) {\\n          if (err !== StopIteration) throw err;\\n          done = true;\\n        }\\n      }\\n      return {value, done};\\n    },\\n  });\\n};\\n\\n\\n/**\\n * Concrete (private) implementation of a non-iterator iterable.  This is\\n * separate from the iterator versions since it supports iterables that\\n * are not \\\"one-shot\\\".\\n * @implements {ShimIterable<VALUE>}\\n * @template VALUE\\n */\\nclass ShimIterableImpl {\\n  /** @param {function(): !Iterator<VALUE>} func */\\n  constructor(func) {\\n    /** @const @private */\\n    this.func_ = func;\\n  }\\n\\n  /** @override */\\n  __iterator__() {\\n    return new ShimGoogIterator(this.func_());\\n  }\\n\\n  /** @override */\\n  toGoog() {\\n    return new ShimGoogIterator(this.func_());\\n  }\\n\\n  /** @override */\\n  [Symbol.iterator]() {\\n    return new ShimEs6Iterator(this.func_());\\n  }\\n\\n  /** @override */\\n  toEs6() {\\n    return new ShimEs6Iterator(this.func_());\\n  }\\n}\\n\\n\\n/**\\n * Concrete `goog.iter.Iterator` subclass that also implements `ShimIterable`.\\n * @extends {GoogIterator<VALUE>}\\n * @implements {ShimIterable<VALUE>}\\n * @template VALUE\\n */\\nclass ShimGoogIterator extends GoogIterator {\\n  /** @param {!Iterator<VALUE>} iter */\\n  constructor(iter) {\\n    super();\\n    this.iter_ = iter;\\n  }\\n\\n  /** @override */\\n  nextValueOrThrow() {\\n    const result = this.iter_.next();\\n    if (result.done) throw StopIteration;\\n    return result.value;\\n  }\\n\\n\\n  /** @override */\\n  toGoog() {\\n    return this;\\n  }\\n\\n  /** @override */\\n  [Symbol.iterator]() {\\n    return new ShimEs6Iterator(this.iter_);\\n  }\\n\\n  /** @override */\\n  toEs6() {\\n    return new ShimEs6Iterator(this.iter_);\\n  }\\n}\\n\\n\\n/**\\n * Concrete ES6 `Iterator` that also implements `ShimIterable`.\\n * @implements {IteratorIterable<VALUE>}\\n * @extends {ShimIterableImpl<VALUE>}\\n * @template VALUE\\n */\\nclass ShimEs6Iterator extends ShimIterableImpl {\\n  /** @param {!Iterator<VALUE>} iter */\\n  constructor(iter) {\\n    super(() => iter);\\n    /** @const @private */\\n    this.iter_ = iter;\\n  }\\n\\n  /** @override */\\n  next() {\\n    return this.iter_.next();\\n  }\\n}\\n\\n\\nexports = {\\n  ShimIterable,\\n  ShimEs6Iterator,\\n  ShimGoogIterator,\\n};\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"GoogIterable\",\"require\",\"GoogIterator\",\"StopIteration\",\"ShimIterable\",\"__iterator__\",\"toGoog\",\"toEs6\",\"of\",\"iter\",\"ShimIterableImpl\",\"ShimGoogIterator\",\"ShimEs6Iterator\",\"nextValueOrThrow\",\"wrapGoog\",\"Symbol\",\"iterator\",\"Error\",\"done\",\"next\",\"value\",\"err\",\"constructor\",\"func\",\"func_\",\"iter_\",\"result\",\"exports\"]\n}\n"]