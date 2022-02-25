["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/structs/prioritypool.js"],"~:js","goog.provide(\"goog.structs.PriorityPool\");\ngoog.require(\"goog.structs.Pool\");\ngoog.require(\"goog.structs.PriorityQueue\");\ngoog.structs.PriorityPool = function(opt_minCount, opt_maxCount) {\n  this.delayTimeout_ = undefined;\n  this.requestQueue_ = new goog.structs.PriorityQueue();\n  goog.structs.Pool.call(this, opt_minCount, opt_maxCount);\n};\ngoog.inherits(goog.structs.PriorityPool, goog.structs.Pool);\ngoog.structs.PriorityPool.DEFAULT_PRIORITY_ = 100;\ngoog.structs.PriorityPool.prototype.setDelay = function(delay) {\n  goog.structs.PriorityPool.base(this, \"setDelay\", delay);\n  if (this.lastAccess == null) {\n    return;\n  }\n  goog.global.clearTimeout(this.delayTimeout_);\n  this.delayTimeout_ = goog.global.setTimeout(goog.bind(this.handleQueueRequests_, this), this.delay + this.lastAccess - Date.now());\n  this.handleQueueRequests_();\n};\ngoog.structs.PriorityPool.prototype.getObject = function(opt_callback, opt_priority) {\n  if (!opt_callback) {\n    var result = goog.structs.PriorityPool.base(this, \"getObject\");\n    if (result && this.delay) {\n      this.delayTimeout_ = goog.global.setTimeout(goog.bind(this.handleQueueRequests_, this), this.delay);\n    }\n    return result;\n  }\n  var priority = opt_priority !== undefined ? opt_priority : goog.structs.PriorityPool.DEFAULT_PRIORITY_;\n  this.requestQueue_.enqueue(priority, opt_callback);\n  this.handleQueueRequests_();\n  return undefined;\n};\ngoog.structs.PriorityPool.prototype.handleQueueRequests_ = function() {\n  var requestQueue = this.requestQueue_;\n  while (requestQueue.getCount() > 0) {\n    var obj = this.getObject();\n    if (!obj) {\n      return;\n    } else {\n      var requestCallback = requestQueue.dequeue();\n      requestCallback.apply(this, [obj]);\n    }\n  }\n};\ngoog.structs.PriorityPool.prototype.addFreeObject = function(obj) {\n  goog.structs.PriorityPool.superClass_.addFreeObject.call(this, obj);\n  this.handleQueueRequests_();\n};\ngoog.structs.PriorityPool.prototype.adjustForMinMax = function() {\n  goog.structs.PriorityPool.superClass_.adjustForMinMax.call(this);\n  this.handleQueueRequests_();\n};\ngoog.structs.PriorityPool.prototype.disposeInternal = function() {\n  goog.structs.PriorityPool.superClass_.disposeInternal.call(this);\n  goog.global.clearTimeout(this.delayTimeout_);\n  this.requestQueue_.clear();\n  this.requestQueue_ = null;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Datastructure: Priority Pool.\n *\n *\n * An extending of Pool that handles queueing and prioritization.\n */\n\n\ngoog.provide('goog.structs.PriorityPool');\n\ngoog.require('goog.structs.Pool');\ngoog.require('goog.structs.PriorityQueue');\n\n\n\n/**\n * A generic pool class. If min is greater than max, an error is thrown.\n * @param {number=} opt_minCount Min. number of objects (Default: 0).\n * @param {number=} opt_maxCount Max. number of objects (Default: 10).\n * @constructor\n * @extends {goog.structs.Pool<VALUE>}\n * @template VALUE\n */\ngoog.structs.PriorityPool = function(opt_minCount, opt_maxCount) {\n  'use strict';\n  /**\n   * The key for the most recent timeout created.\n   * @private {number|undefined}\n   */\n  this.delayTimeout_ = undefined;\n\n  /**\n   * Queue of requests for pool objects.\n   * @private {goog.structs.PriorityQueue<VALUE>}\n   */\n  this.requestQueue_ = new goog.structs.PriorityQueue();\n\n  // Must break convention of putting the super-class's constructor first. This\n  // is because the super-class constructor calls adjustForMinMax, which this\n  // class overrides. In this class's implementation, it assumes that there\n  // is a requestQueue_, and will error if not present.\n  goog.structs.Pool.call(this, opt_minCount, opt_maxCount);\n};\ngoog.inherits(goog.structs.PriorityPool, goog.structs.Pool);\n\n\n/**\n * Default priority for pool objects requests.\n * @type {number}\n * @private\n */\ngoog.structs.PriorityPool.DEFAULT_PRIORITY_ = 100;\n\n\n/** @override */\ngoog.structs.PriorityPool.prototype.setDelay = function(delay) {\n  'use strict';\n  goog.structs.PriorityPool.base(this, 'setDelay', delay);\n\n  // If the pool hasn't been accessed yet, no need to do anything.\n  if (this.lastAccess == null) {\n    return;\n  }\n\n  goog.global.clearTimeout(this.delayTimeout_);\n  this.delayTimeout_ = goog.global.setTimeout(\n      goog.bind(this.handleQueueRequests_, this),\n      this.delay + this.lastAccess - Date.now());\n\n  // Handle all requests.\n  this.handleQueueRequests_();\n};\n\n\n/**\n * Get a new object from the pool, if there is one available, otherwise\n * return undefined.\n * @param {Function=} opt_callback The function to callback when an object is\n *     available. This could be immediately. If this is not present, then an\n *     object is immediately returned if available, or undefined if not.\n * @param {number=} opt_priority The priority of the request. A smaller value\n *     means a higher priority.\n * @return {VALUE|undefined} The new object from the pool if there is one\n *     available and a callback is not given. Otherwise, undefined.\n * @override\n */\ngoog.structs.PriorityPool.prototype.getObject = function(\n    opt_callback, opt_priority) {\n  'use strict';\n  if (!opt_callback) {\n    var result = goog.structs.PriorityPool.base(this, 'getObject');\n    if (result && this.delay) {\n      this.delayTimeout_ = goog.global.setTimeout(\n          goog.bind(this.handleQueueRequests_, this), this.delay);\n    }\n    return result;\n  }\n\n  var priority = (opt_priority !== undefined) ?\n      opt_priority :\n      goog.structs.PriorityPool.DEFAULT_PRIORITY_;\n  this.requestQueue_.enqueue(priority, opt_callback);\n\n  // Handle all requests.\n  this.handleQueueRequests_();\n\n  return undefined;\n};\n\n\n/**\n * Handles the request queue. Tries to fires off as many queued requests as\n * possible.\n * @private\n */\ngoog.structs.PriorityPool.prototype.handleQueueRequests_ = function() {\n  'use strict';\n  var requestQueue = this.requestQueue_;\n  while (requestQueue.getCount() > 0) {\n    var obj = this.getObject();\n\n    if (!obj) {\n      return;\n    } else {\n      var requestCallback = requestQueue.dequeue();\n      requestCallback.apply(this, [obj]);\n    }\n  }\n};\n\n\n/**\n * Adds an object to the collection of objects that are free. If the object can\n * not be added, then it is disposed.\n *\n * NOTE: This method does not remove the object from the in use collection.\n *\n * @param {VALUE} obj The object to add to the collection of free objects.\n * @override\n */\ngoog.structs.PriorityPool.prototype.addFreeObject = function(obj) {\n  'use strict';\n  goog.structs.PriorityPool.superClass_.addFreeObject.call(this, obj);\n\n  // Handle all requests.\n  this.handleQueueRequests_();\n};\n\n\n/**\n * Adjusts the objects held in the pool to be within the min/max constraints.\n *\n * NOTE: It is possible that the number of objects in the pool will still be\n * greater than the maximum count of objects allowed. This will be the case\n * if no more free objects can be disposed of to get below the minimum count\n * (i.e., all objects are in use).\n * @override\n */\ngoog.structs.PriorityPool.prototype.adjustForMinMax = function() {\n  'use strict';\n  goog.structs.PriorityPool.superClass_.adjustForMinMax.call(this);\n\n  // Handle all requests.\n  this.handleQueueRequests_();\n};\n\n\n/** @override */\ngoog.structs.PriorityPool.prototype.disposeInternal = function() {\n  'use strict';\n  goog.structs.PriorityPool.superClass_.disposeInternal.call(this);\n  goog.global.clearTimeout(this.delayTimeout_);\n  this.requestQueue_.clear();\n  this.requestQueue_ = null;\n};\n","~:compiled-at",1644840856071,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.structs.prioritypool.js\",\n\"lineCount\":59,\n\"mappings\":\"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\",\n\"sources\":[\"goog/structs/prioritypool.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Datastructure: Priority Pool.\\n *\\n *\\n * An extending of Pool that handles queueing and prioritization.\\n */\\n\\n\\ngoog.provide('goog.structs.PriorityPool');\\n\\ngoog.require('goog.structs.Pool');\\ngoog.require('goog.structs.PriorityQueue');\\n\\n\\n\\n/**\\n * A generic pool class. If min is greater than max, an error is thrown.\\n * @param {number=} opt_minCount Min. number of objects (Default: 0).\\n * @param {number=} opt_maxCount Max. number of objects (Default: 10).\\n * @constructor\\n * @extends {goog.structs.Pool<VALUE>}\\n * @template VALUE\\n */\\ngoog.structs.PriorityPool = function(opt_minCount, opt_maxCount) {\\n  'use strict';\\n  /**\\n   * The key for the most recent timeout created.\\n   * @private {number|undefined}\\n   */\\n  this.delayTimeout_ = undefined;\\n\\n  /**\\n   * Queue of requests for pool objects.\\n   * @private {goog.structs.PriorityQueue<VALUE>}\\n   */\\n  this.requestQueue_ = new goog.structs.PriorityQueue();\\n\\n  // Must break convention of putting the super-class's constructor first. This\\n  // is because the super-class constructor calls adjustForMinMax, which this\\n  // class overrides. In this class's implementation, it assumes that there\\n  // is a requestQueue_, and will error if not present.\\n  goog.structs.Pool.call(this, opt_minCount, opt_maxCount);\\n};\\ngoog.inherits(goog.structs.PriorityPool, goog.structs.Pool);\\n\\n\\n/**\\n * Default priority for pool objects requests.\\n * @type {number}\\n * @private\\n */\\ngoog.structs.PriorityPool.DEFAULT_PRIORITY_ = 100;\\n\\n\\n/** @override */\\ngoog.structs.PriorityPool.prototype.setDelay = function(delay) {\\n  'use strict';\\n  goog.structs.PriorityPool.base(this, 'setDelay', delay);\\n\\n  // If the pool hasn't been accessed yet, no need to do anything.\\n  if (this.lastAccess == null) {\\n    return;\\n  }\\n\\n  goog.global.clearTimeout(this.delayTimeout_);\\n  this.delayTimeout_ = goog.global.setTimeout(\\n      goog.bind(this.handleQueueRequests_, this),\\n      this.delay + this.lastAccess - Date.now());\\n\\n  // Handle all requests.\\n  this.handleQueueRequests_();\\n};\\n\\n\\n/**\\n * Get a new object from the pool, if there is one available, otherwise\\n * return undefined.\\n * @param {Function=} opt_callback The function to callback when an object is\\n *     available. This could be immediately. If this is not present, then an\\n *     object is immediately returned if available, or undefined if not.\\n * @param {number=} opt_priority The priority of the request. A smaller value\\n *     means a higher priority.\\n * @return {VALUE|undefined} The new object from the pool if there is one\\n *     available and a callback is not given. Otherwise, undefined.\\n * @override\\n */\\ngoog.structs.PriorityPool.prototype.getObject = function(\\n    opt_callback, opt_priority) {\\n  'use strict';\\n  if (!opt_callback) {\\n    var result = goog.structs.PriorityPool.base(this, 'getObject');\\n    if (result && this.delay) {\\n      this.delayTimeout_ = goog.global.setTimeout(\\n          goog.bind(this.handleQueueRequests_, this), this.delay);\\n    }\\n    return result;\\n  }\\n\\n  var priority = (opt_priority !== undefined) ?\\n      opt_priority :\\n      goog.structs.PriorityPool.DEFAULT_PRIORITY_;\\n  this.requestQueue_.enqueue(priority, opt_callback);\\n\\n  // Handle all requests.\\n  this.handleQueueRequests_();\\n\\n  return undefined;\\n};\\n\\n\\n/**\\n * Handles the request queue. Tries to fires off as many queued requests as\\n * possible.\\n * @private\\n */\\ngoog.structs.PriorityPool.prototype.handleQueueRequests_ = function() {\\n  'use strict';\\n  var requestQueue = this.requestQueue_;\\n  while (requestQueue.getCount() > 0) {\\n    var obj = this.getObject();\\n\\n    if (!obj) {\\n      return;\\n    } else {\\n      var requestCallback = requestQueue.dequeue();\\n      requestCallback.apply(this, [obj]);\\n    }\\n  }\\n};\\n\\n\\n/**\\n * Adds an object to the collection of objects that are free. If the object can\\n * not be added, then it is disposed.\\n *\\n * NOTE: This method does not remove the object from the in use collection.\\n *\\n * @param {VALUE} obj The object to add to the collection of free objects.\\n * @override\\n */\\ngoog.structs.PriorityPool.prototype.addFreeObject = function(obj) {\\n  'use strict';\\n  goog.structs.PriorityPool.superClass_.addFreeObject.call(this, obj);\\n\\n  // Handle all requests.\\n  this.handleQueueRequests_();\\n};\\n\\n\\n/**\\n * Adjusts the objects held in the pool to be within the min/max constraints.\\n *\\n * NOTE: It is possible that the number of objects in the pool will still be\\n * greater than the maximum count of objects allowed. This will be the case\\n * if no more free objects can be disposed of to get below the minimum count\\n * (i.e., all objects are in use).\\n * @override\\n */\\ngoog.structs.PriorityPool.prototype.adjustForMinMax = function() {\\n  'use strict';\\n  goog.structs.PriorityPool.superClass_.adjustForMinMax.call(this);\\n\\n  // Handle all requests.\\n  this.handleQueueRequests_();\\n};\\n\\n\\n/** @override */\\ngoog.structs.PriorityPool.prototype.disposeInternal = function() {\\n  'use strict';\\n  goog.structs.PriorityPool.superClass_.disposeInternal.call(this);\\n  goog.global.clearTimeout(this.delayTimeout_);\\n  this.requestQueue_.clear();\\n  this.requestQueue_ = null;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"structs\",\"PriorityPool\",\"goog.structs.PriorityPool\",\"opt_minCount\",\"opt_maxCount\",\"delayTimeout_\",\"undefined\",\"requestQueue_\",\"PriorityQueue\",\"Pool\",\"call\",\"inherits\",\"DEFAULT_PRIORITY_\",\"prototype\",\"setDelay\",\"goog.structs.PriorityPool.prototype.setDelay\",\"delay\",\"base\",\"lastAccess\",\"global\",\"clearTimeout\",\"setTimeout\",\"bind\",\"handleQueueRequests_\",\"Date\",\"now\",\"getObject\",\"goog.structs.PriorityPool.prototype.getObject\",\"opt_callback\",\"opt_priority\",\"result\",\"priority\",\"enqueue\",\"goog.structs.PriorityPool.prototype.handleQueueRequests_\",\"requestQueue\",\"getCount\",\"obj\",\"requestCallback\",\"dequeue\",\"apply\",\"addFreeObject\",\"goog.structs.PriorityPool.prototype.addFreeObject\",\"superClass_\",\"adjustForMinMax\",\"goog.structs.PriorityPool.prototype.adjustForMinMax\",\"disposeInternal\",\"goog.structs.PriorityPool.prototype.disposeInternal\",\"clear\"]\n}\n"]