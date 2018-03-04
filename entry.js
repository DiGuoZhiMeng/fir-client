/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(70);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(46);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(119);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(122);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(126);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(46);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = cc;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(41)('wks');
var uid = __webpack_require__(31);
var Symbol = __webpack_require__(8).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(7);
var ctx = __webpack_require__(23);
var hide = __webpack_require__(17);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$loading = $loading;
exports.$alert = $alert;
exports.$confirm = $confirm;
exports.$prompt = $prompt;
exports.$delay = $delay;
exports.$send = $send;
exports.$close = $close;
exports.$registry = $registry;

var _cc = __webpack_require__(6);

/**
 * 加载层
 * @param show
 */
function $loading() {
  var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (show) {
    return _cc.director.getRunningScene().$loading();
  } else {
    return _cc.director.getRunningScene().$unloading();
  }
}

/**
 * 提示框
 * @param title
 * @param content
 */
function $alert(title, content) {
  return _cc.director.getRunningScene().$alert(title, content);
}

/**
 * 确认框
 * @param title
 * @param content
 */
function $confirm(title, content) {
  return _cc.director.getRunningScene().$confirm(title, content);
}

/**
 * 一个可以输入文字的确认框
 * @param title
 * @param text
 * @param defaultVal
 */
function $prompt(title, text) {
  var defaultVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var placeholder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '请输入内容';

  return _cc.director.getRunningScene().$prompt(title, text, defaultVal, placeholder);
}

/**
 * 延迟几秒，t支持小数
 * @param t
 * @returns {*}
 */
function $delay(t) {
  return _cc.director.getRunningScene().$delay(t);
}

/**
 * 发送数据
 * @param header
 * @param body
 */
function $send(header, body) {
  return _cc.director.getRunningScene().$send(header, body);
}

/**
 * 关闭链接
 * @param header
 * @param body
 */
function $close(header, body) {
  return _cc.director.getRunningScene().$close(header, body);
}

/**
 * 类似于全局变量，哪里都可以访问到
 * @param key
 * @param val 当不传这个参数为取值，否则为设置值
 * @returns {*}
 */
function $registry(key, val) {
  if (val === undefined) {
    return _cc.director.registry[key];
  } else {
    _cc.director.registry[key] = val;
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(56);
var toPrimitive = __webpack_require__(38);
var dP = Object.defineProperty;

exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var createDesc = __webpack_require__(29);
module.exports = __webpack_require__(16) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(59);
var defined = __webpack_require__(36);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(78);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(12);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(28);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(70);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(58);
var enumBugKeys = __webpack_require__(42);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(14).f;
var has = __webpack_require__(18);
var TAG = __webpack_require__(9)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = __webpack_require__(12);

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = __webpack_require__(133);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _wsEvents;

var _loadingLayer = __webpack_require__(138);

var _loadingLayer2 = _interopRequireDefault(_loadingLayer);

var _confirmLayer = __webpack_require__(73);

var _confirmLayer2 = _interopRequireDefault(_confirmLayer);

var _alertLayer = __webpack_require__(74);

var _alertLayer2 = _interopRequireDefault(_alertLayer);

var _promptLayer = __webpack_require__(140);

var _promptLayer2 = _interopRequireDefault(_promptLayer);

var _net = __webpack_require__(45);

var _net2 = _interopRequireDefault(_net);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERROR = 'ERROR';
var ALERT = 'ALERT';
var OTHER_LOGIN = 'OTHER_LOGIN';
var EVAL_ECHO = 'EVAL_ECHO';
var EVAL_ERROR = 'EVAL_ERROR';

var wsEvents = (_wsEvents = {}, (0, _defineProperty3.default)(_wsEvents, ALERT, function (body) {
  this.$unloading();
  if (typeof body === 'string') this.$alert('提示', body);else this.$alert(body.title, body.content);
}), (0, _defineProperty3.default)(_wsEvents, OTHER_LOGIN, function (body) {
  alert('你被踢下线');
  window.location.reload();
}), (0, _defineProperty3.default)(_wsEvents, ERROR, function (msg) {
  alert('发生错误，服务端拒绝访问:' + msg);
  window.location.reload();
}), (0, _defineProperty3.default)(_wsEvents, EVAL_ECHO, function (body) {
  console.log(body);
}), (0, _defineProperty3.default)(_wsEvents, EVAL_ERROR, function (error) {
  console.error(error);
}), _wsEvents);

var BaseScene = function (_cc$Scene) {
  (0, _inherits3.default)(BaseScene, _cc$Scene);

  function BaseScene() {
    (0, _classCallCheck3.default)(this, BaseScene);
    return (0, _possibleConstructorReturn3.default)(this, (BaseScene.__proto__ || (0, _getPrototypeOf2.default)(BaseScene)).apply(this, arguments));
  }

  (0, _createClass3.default)(BaseScene, [{
    key: "ctor",
    value: function ctor() {
      (0, _get3.default)(BaseScene.prototype.__proto__ || (0, _getPrototypeOf2.default)(BaseScene.prototype), "ctor", this).call(this);

      this.events(wsEvents);
      this._init();
    }
  }, {
    key: "events",
    value: function events(wsEvents) {
      if (this.wsEvents) {
        wsEvents = (0, _extends3.default)({}, this.wsEvents, wsEvents);
      }
      this.wsEvents = wsEvents;
    }
  }, {
    key: "_init",
    value: function _init() {
      this._initLoading();
      this._initMessageBox();
    }
  }, {
    key: "_initLoading",
    value: function _initLoading() {
      this.loading = new _loadingLayer2.default();
      this.addChild(this.loading, 999);
    }
  }, {
    key: "_initMessageBox",
    value: function _initMessageBox() {
      this.confirm = new _confirmLayer2.default();
      this.addChild(this.confirm, 998);

      this.alert = new _alertLayer2.default();
      this.addChild(this.alert, 997);

      this.prompt = new _promptLayer2.default();
      this.addChild(this.prompt, 996);
    }
  }, {
    key: "$loading",
    value: function $loading() {
      return this.loading.show();
    }
  }, {
    key: "$unloading",
    value: function $unloading() {
      return this.loading.hide();
    }
  }, {
    key: "$confirm",
    value: function $confirm(title, text) {
      return this.confirm.confirm(title, text);
    }
  }, {
    key: "$alert",
    value: function $alert(title, text) {
      return this.alert.alert(title, text);
    }
  }, {
    key: "$prompt",
    value: function $prompt(title, text) {
      var defaultVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var placeholder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '请输入内容';

      return this.prompt.prompt(title, text, defaultVal, placeholder);
    }
  }, {
    key: "$delay",
    value: function $delay(t) {
      var _this2 = this;

      return new _promise2.default(function (resolve) {
        _this2.scheduleOnce(function () {
          return resolve(t);
        }, t);
      });
    }
  }, {
    key: "$send",
    value: function $send(header, body) {
      _net2.default.send(header, body);
    }
  }, {
    key: "$close",
    value: function $close() {
      _net2.default.close();
    }
  }, {
    key: "onExit",
    value: function onExit() {
      (0, _get3.default)(BaseScene.prototype.__proto__ || (0, _getPrototypeOf2.default)(BaseScene.prototype), "onExit", this).call(this);

      this.$unloading();
      this.alert._hide(0.01);
      this.confirm._hide(.01);
      this.prompt._hide(.01);
    }
  }]);
  return BaseScene;
}(cc.Scene);

exports.default = BaseScene;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var document = __webpack_require__(8).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(15);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(83);
var enumBugKeys = __webpack_require__(42);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(37)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(61).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(41)('keys');
var uid = __webpack_require__(31);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(36);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(28);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectScene = undefined;

var _scene = __webpack_require__(103);

var _scene2 = _interopRequireDefault(_scene);

var _ws = __webpack_require__(148);

var _ws2 = _interopRequireDefault(_ws);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ConnectScene = _scene2.default;


var ws = new _ws2.default();

window.ws = ws;

exports.default = ws;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(108);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(110);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(9);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(7);
var LIBRARY = __webpack_require__(27);
var wksExt = __webpack_require__(47);
var defineProperty = __webpack_require__(14).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(33);
var createDesc = __webpack_require__(29);
var toIObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(38);
var has = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(56);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _cc = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BgLayer = function (_cc$Layer) {
  (0, _inherits3.default)(BgLayer, _cc$Layer);

  function BgLayer() {
    (0, _classCallCheck3.default)(this, BgLayer);
    return (0, _possibleConstructorReturn3.default)(this, (BgLayer.__proto__ || (0, _getPrototypeOf2.default)(BgLayer)).apply(this, arguments));
  }

  (0, _createClass3.default)(BgLayer, [{
    key: 'ctor',
    value: function ctor() {
      (0, _get3.default)(BgLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(BgLayer.prototype), 'ctor', this).call(this);

      this._bg = new cc.Sprite(_cc.director.$res.BG);
      this._bg.attr({
        x: _cc.winSize.width / 2,
        y: _cc.winSize.height / 2
      });
      this.addChild(this._bg);
    }
  }]);
  return BgLayer;
}(cc.Layer);

exports.default = BgLayer;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditBox = function (_cc$EditBox) {
  (0, _inherits3.default)(EditBox, _cc$EditBox);

  function EditBox() {
    (0, _classCallCheck3.default)(this, EditBox);
    return (0, _possibleConstructorReturn3.default)(this, (EditBox.__proto__ || (0, _getPrototypeOf2.default)(EditBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(EditBox, [{
    key: "runAction",
    value: function runAction(action) {
      this.children.forEach(function (v) {
        return v.runAction(action.clone());
      });
      (0, _get3.default)(EditBox.prototype.__proto__ || (0, _getPrototypeOf2.default)(EditBox.prototype), "runAction", this).call(this, action);
    }
  }]);
  return EditBox;
}(cc.EditBox);

exports.default = EditBox;

/***/ }),
/* 53 */
/***/ (function(module, exports) {



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(81)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(55)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(27);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(57);
var hide = __webpack_require__(17);
var has = __webpack_require__(18);
var Iterators = __webpack_require__(24);
var $iterCreate = __webpack_require__(82);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(62);
var ITERATOR = __webpack_require__(9)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(16) && !__webpack_require__(20)(function () {
  return Object.defineProperty(__webpack_require__(37)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(18);
var toIObject = __webpack_require__(19);
var arrayIndexOf = __webpack_require__(84)(false);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(25);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(8).document;
module.exports = document && document.documentElement;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(18);
var toObject = __webpack_require__(43);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(86);
var global = __webpack_require__(8);
var hide = __webpack_require__(17);
var Iterators = __webpack_require__(24);
var TO_STRING_TAG = __webpack_require__(9)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(25);
var TAG = __webpack_require__(9)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(13);
var aFunction = __webpack_require__(28);
var SPECIES = __webpack_require__(9)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(23);
var invoke = __webpack_require__(95);
var html = __webpack_require__(61);
var cel = __webpack_require__(37);
var global = __webpack_require__(8);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(25)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var isObject = __webpack_require__(15);
var newPromiseCapability = __webpack_require__(44);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10);
var core = __webpack_require__(7);
var fails = __webpack_require__(20);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(58);
var hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _base = __webpack_require__(34);

var _base2 = _interopRequireDefault(_base);

var _btnLayer = __webpack_require__(141);

var _btnLayer2 = _interopRequireDefault(_btnLayer);

var _scene = __webpack_require__(75);

var _scene2 = _interopRequireDefault(_scene);

var _cc = __webpack_require__(6);

var _chatLayer = __webpack_require__(76);

var _chatLayer2 = _interopRequireDefault(_chatLayer);

var _bgLayer = __webpack_require__(51);

var _bgLayer2 = _interopRequireDefault(_bgLayer);

var _director = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENTER_ROOM = 'ENTER_ROOM';

var wsEvents = (0, _defineProperty3.default)({}, ENTER_ROOM, function (room) {
  // 进入房间
  _cc.director.pushScene(new _scene2.default(room));
});

var HomeScene = function (_BaseScene) {
  (0, _inherits3.default)(HomeScene, _BaseScene);

  function HomeScene() {
    (0, _classCallCheck3.default)(this, HomeScene);
    return (0, _possibleConstructorReturn3.default)(this, (HomeScene.__proto__ || (0, _getPrototypeOf2.default)(HomeScene)).apply(this, arguments));
  }

  (0, _createClass3.default)(HomeScene, [{
    key: "ctor",
    value: function ctor() {
      (0, _get3.default)(HomeScene.prototype.__proto__ || (0, _getPrototypeOf2.default)(HomeScene.prototype), "ctor", this).call(this);

      this.events(wsEvents);
      this.addChild(new _bgLayer2.default());
      this.addChild(new _chatLayer2.default('CHAT_HOME', 'CHAT_HOME', 650, 280));
      this.addChild(new _btnLayer2.default());
    }
  }]);
  return HomeScene;
}(_base2.default);

exports.default = HomeScene;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = __webpack_require__(12);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _cc = __webpack_require__(6);

var _alertLayer = __webpack_require__(74);

var _alertLayer2 = _interopRequireDefault(_alertLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfirmLayer = function (_AlertLayer) {
  (0, _inherits3.default)(ConfirmLayer, _AlertLayer);

  function ConfirmLayer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ConfirmLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ConfirmLayer.__proto__ || (0, _getPrototypeOf2.default)(ConfirmLayer)).call.apply(_ref, [this].concat(args))), _this), _this._rejectVal = false, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ConfirmLayer, [{
    key: '_initButton',
    value: function _initButton() {
      var _this2 = this;

      (0, _get3.default)(ConfirmLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(ConfirmLayer.prototype), '_initButton', this).call(this);
      this._buttons.confirm.setPositionX(_cc.winSize.width / 2 - 100);

      var cancel = new ccui.Button(_cc.director.$res.CANCEL, _cc.director.$res.CANCEL_ON);
      cancel.attr({
        x: _cc.winSize.width / 2 + 100,
        y: _cc.winSize.height / 2 - 100
      });
      cancel.addClickEventListener(function () {
        if (_this2._resolve) {
          var rejectVal = _this2._rejectVal instanceof Function ? _this2._rejectVal() : _this2._rejectVal;
          _this2._resolve(rejectVal);
          _this2._hide(_this2._t);
          _this2._resolve = null;
        }
      });
      this.addChild(cancel);
      this._buttons.cancel = cancel;
    }
  }, {
    key: 'confirm',
    value: function confirm() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var _this3 = this;

      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .33;

      return new _promise2.default(function (resolve) {
        _this3._resolve = resolve;
        _this3._t = t;
        _this3.text.setString(text);
        _this3.title.setString(title);
        _this3._show(t);
      });
    }
  }]);
  return ConfirmLayer;
}(_alertLayer2.default);

exports.default = ConfirmLayer;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = __webpack_require__(12);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _cc = __webpack_require__(6);

var _messageLayer = __webpack_require__(139);

var _messageLayer2 = _interopRequireDefault(_messageLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertLayer = function (_MessageLayer) {
  (0, _inherits3.default)(AlertLayer, _MessageLayer);

  function AlertLayer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AlertLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AlertLayer.__proto__ || (0, _getPrototypeOf2.default)(AlertLayer)).call.apply(_ref, [this].concat(args))), _this), _this._resolve = null, _this._resolveVal = true, _this._t = null, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AlertLayer, [{
    key: '_initButton',
    value: function _initButton() {
      var _this2 = this;

      (0, _get3.default)(AlertLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(AlertLayer.prototype), '_initButton', this).call(this);
      var confirm = new ccui.Button(_cc.director.$res.CONFIRM, _cc.director.$res.CONFIRM_ON);
      confirm.attr({
        x: _cc.winSize.width / 2,
        y: _cc.winSize.height / 2 - 100
      });
      confirm.addClickEventListener(function () {
        if (_this2._resolve) {
          var resolveVal = _this2._resolveVal instanceof Function ? _this2._resolveVal() : _this2._resolveVal;
          _this2._resolve(resolveVal);
          _this2._hide(_this2._t);
          _this2._resolve = null;
        }
      });
      this.addChild(confirm);
      this._buttons.confirm = confirm;
    }
  }, {
    key: 'alert',
    value: function alert() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var _this3 = this;

      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .33;

      return new _promise2.default(function (resolve) {
        _this3._resolve = resolve;
        _this3._t = t;
        _this3.text.setString(text);
        _this3.title.setString(title);
        _this3._show(t);
      });
    }
  }]);
  return AlertLayer;
}(_messageLayer2.default);

exports.default = AlertLayer;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = __webpack_require__(34);

var _base2 = _interopRequireDefault(_base);

var _chatLayer = __webpack_require__(76);

var _chatLayer2 = _interopRequireDefault(_chatLayer);

var _bgLayer = __webpack_require__(51);

var _bgLayer2 = _interopRequireDefault(_bgLayer);

var _userLayer = __webpack_require__(144);

var _userLayer2 = _interopRequireDefault(_userLayer);

var _gameLayer = __webpack_require__(145);

var _gameLayer2 = _interopRequireDefault(_gameLayer);

var _director = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoomScene = function (_BaseScene) {
  (0, _inherits3.default)(RoomScene, _BaseScene);

  function RoomScene() {
    (0, _classCallCheck3.default)(this, RoomScene);
    return (0, _possibleConstructorReturn3.default)(this, (RoomScene.__proto__ || (0, _getPrototypeOf2.default)(RoomScene)).apply(this, arguments));
  }

  (0, _createClass3.default)(RoomScene, [{
    key: "ctor",
    value: function ctor(room) {
      // id isMaster isReady
      (0, _get3.default)(RoomScene.prototype.__proto__ || (0, _getPrototypeOf2.default)(RoomScene.prototype), "ctor", this).call(this);
      this._room = room;

      this.addChild(new _bgLayer2.default());
      this.chat = new _chatLayer2.default('CHAT_ROOM', 'CHAT_ROOM', 780, 210);
      this.chat.setScale(0.8, 1);
      this.addChild(this.chat);

      this.user = new _userLayer2.default(room);
      this.addChild(this.user);

      this.game = new _gameLayer2.default(room.game);
      this.addChild(this.game);
      this.game.setGame(room.game);

      this._initRoomLabel();

      this.addMsg('[系统消息]你加入房间，点击头像切换准备状态');
    }
  }, {
    key: "_initRoomLabel",
    value: function _initRoomLabel() {
      this.label = new cc.LabelTTF("");
      this.updateLabel();
      this.label.attr({
        anchorX: 0,
        anchorY: 0,
        x: 0,
        y: 530
      });
      this.addChild(this.label);
    }
  }, {
    key: "addMsg",
    value: function addMsg(msg) {
      this.chat.addMsg(msg);
    }
  }, {
    key: "setMaster",
    value: function setMaster() {
      this._room.isMaster = 1;
    }
  }, {
    key: "updateLabel",
    value: function updateLabel() {
      var room = this._room;
      var pass = room.password ? room.isMaster ? "(\u5BC6\u7801:" + room.password + ")" : '(有密码)' : '';
      this.label.setString("\u623F\u95F4\u53F7\u7801:" + room.id + " " + pass);
    }
  }]);
  return RoomScene;
}(_base2.default);

exports.default = RoomScene;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _cc = __webpack_require__(6);

var _msgLayer = __webpack_require__(142);

var _msgLayer2 = _interopRequireDefault(_msgLayer);

var _chatFormLayer = __webpack_require__(143);

var _chatFormLayer2 = _interopRequireDefault(_chatFormLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatLayer = function (_cc$Layer) {
  (0, _inherits3.default)(ChatLayer, _cc$Layer);

  function ChatLayer() {
    (0, _classCallCheck3.default)(this, ChatLayer);
    return (0, _possibleConstructorReturn3.default)(this, (ChatLayer.__proto__ || (0, _getPrototypeOf2.default)(ChatLayer)).apply(this, arguments));
  }

  (0, _createClass3.default)(ChatLayer, [{
    key: "ctor",
    value: function ctor(send, recv, x, y) {
      (0, _get3.default)(ChatLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(ChatLayer.prototype), "ctor", this).call(this);

      this.header = send;

      this.wsEvents = (0, _defineProperty3.default)({}, recv, function (msg) {
        this.addMsg(msg);
      });
      this._initBg(x, y);
      this._initMsg(x, y);
      this._initForm(x, y);
    }
  }, {
    key: "addMsg",
    value: function addMsg(msg) {
      this._msg.addMsg(msg);
    }
  }, {
    key: "_initBg",
    value: function _initBg(x, y) {
      this._bg = new cc.Sprite(_cc.director.$res.home.CHAT_BG);
      this._bg.attr({
        x: x,
        y: y
      });
      this.addChild(this._bg);
    }
  }, {
    key: "_initMsg",
    value: function _initMsg(x, y) {
      this._msg = new _msgLayer2.default(x - 200, y - 130);
      this.addChild(this._msg);
    }
  }, {
    key: "_initForm",
    value: function _initForm(x, y) {
      this._form = new _chatFormLayer2.default(this.header, x + 60, y - 175);
      this.addChild(this._form);
    }
  }]);
  return ChatLayer;
}(cc.Layer);

exports.default = ChatLayer;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(21);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

__webpack_require__(102);

var _net = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _cc = cc,
    game = _cc.game,
    view = _cc.view,
    director = _cc.director;


game.entry = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          view.adjustViewPort(true);

          // Setup the resolution policy and design resolution size
          view.setDesignResolutionSize(960, 550, cc.ResolutionPolicy.SHOW_ALL);

          // The game will be resized when browser size change
          view.resizeWithBrowserSize(true);

          //load resources
          director.registry = {};
          director.runScene(new _net.ConnectScene());

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(79);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 79 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(63);
__webpack_require__(89);
__webpack_require__(100);
__webpack_require__(101);
module.exports = __webpack_require__(7).Promise;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var defined = __webpack_require__(36);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(39);
var descriptor = __webpack_require__(29);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(17)(IteratorPrototype, __webpack_require__(9)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(30);

module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(19);
var toLength = __webpack_require__(60);
var toAbsoluteIndex = __webpack_require__(85);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(87);
var step = __webpack_require__(88);
var Iterators = __webpack_require__(24);
var toIObject = __webpack_require__(19);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(55)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(27);
var global = __webpack_require__(8);
var ctx = __webpack_require__(23);
var classof = __webpack_require__(64);
var $export = __webpack_require__(10);
var isObject = __webpack_require__(15);
var aFunction = __webpack_require__(28);
var anInstance = __webpack_require__(90);
var forOf = __webpack_require__(91);
var speciesConstructor = __webpack_require__(65);
var task = __webpack_require__(66).set;
var microtask = __webpack_require__(96)();
var newPromiseCapabilityModule = __webpack_require__(44);
var perform = __webpack_require__(67);
var promiseResolve = __webpack_require__(68);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(9)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(97)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(32)($Promise, PROMISE);
__webpack_require__(98)(PROMISE);
Wrapper = __webpack_require__(7)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(99)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(23);
var call = __webpack_require__(92);
var isArrayIter = __webpack_require__(93);
var anObject = __webpack_require__(13);
var toLength = __webpack_require__(60);
var getIterFn = __webpack_require__(94);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(13);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(24);
var ITERATOR = __webpack_require__(9)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(64);
var ITERATOR = __webpack_require__(9)('iterator');
var Iterators = __webpack_require__(24);
module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 95 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var macrotask = __webpack_require__(66).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(25)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(17);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var core = __webpack_require__(7);
var dP = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(16);
var SPECIES = __webpack_require__(9)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(9)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(10);
var core = __webpack_require__(7);
var global = __webpack_require__(8);
var speciesConstructor = __webpack_require__(65);
var promiseResolve = __webpack_require__(68);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(44);
var perform = __webpack_require__(67);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cc = __webpack_require__(6);

var res = {
  BG: 'res/background.jpg',
  BOARD: 'res/board.jpg',
  BLACK: 'res/black.png',
  WHITE: 'res/red.png',
  LOGIN: 'res/login.png',
  LOGIN_ON: 'res/login_on.png',
  REGISTER: 'res/register.png',
  REGISTER_ON: 'res/register_on.png',
  CANCEL: 'res/cancel.png',
  CANCEL_ON: 'res/cancel_on.png',
  CONFIRM: 'res/confirm.png',
  CONFIRM_ON: 'res/confirm_on.png',
  BOX: 'res/box.png',
  BIG_BOX: 'res/big_box.png',
  LOADING: 'res/loading.jpg',
  LOADING2: 'res/loading.png',
  INPUT: 'res/input.png',
  home: {
    CREATE: 'res/home/create.png',
    CREATE_ON: 'res/home/create_on.png',
    SEND: 'res/home/send.png',
    SEND_ON: 'res/home/send_on.png',
    JOIN: 'res/home/join.png',
    JOIN_ON: 'res/home/join_on.png',
    START: 'res/home/start.png',
    START_ON: 'res/home/start_on.png',
    CHAT_BG: 'res/home/chat_bg.png'
  },
  EXIT: 'res/exit.png'
};

_cc.director.$res = res;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(21);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _cc = __webpack_require__(6);

var _scene = __webpack_require__(129);

var _scene2 = _interopRequireDefault(_scene);

var _base = __webpack_require__(34);

var _base2 = _interopRequireDefault(_base);

var _connectingLayer = __webpack_require__(147);

var _connectingLayer2 = _interopRequireDefault(_connectingLayer);

var _index = __webpack_require__(45);

var _index2 = _interopRequireDefault(_index);

var _scene3 = __webpack_require__(72);

var _scene4 = _interopRequireDefault(_scene3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectScene = function (_BaseScene) {
  (0, _inherits3.default)(ConnectScene, _BaseScene);

  function ConnectScene() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ConnectScene);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ConnectScene.__proto__ || (0, _getPrototypeOf2.default)(ConnectScene)).call.apply(_ref, [this].concat(args))), _this), _this.retry = false, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ConnectScene, [{
    key: "ctor",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _get3.default)(ConnectScene.prototype.__proto__ || (0, _getPrototypeOf2.default)(ConnectScene.prototype), "ctor", this).call(this);

                this.layer = new _connectingLayer2.default();
                this.layer.show(.1);
                this.addChild(this.layer);

                _context.next = 6;
                return this.connect();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function ctor() {
        return _ref2.apply(this, arguments);
      }

      return ctor;
    }()
  }, {
    key: "connect",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var ws;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.retry = false;
                this.layer.setText('连接中...');
                this.layer.startRotate();
                _context2.prev = 3;
                _context2.next = 6;
                return _index2.default.connect('ws://127.0.0.1:8485');

              case 6:
                ws = _context2.sent;

                window.evalCall = function (s) {
                  ws.send('EVAL', s);
                };
                // await this.$delay(.333)
                // director.pushScene(new TransitionPageTurn(1.5, new LoginScene))
                _cc.director.pushScene(new _scene2.default());
                // director.pushScene(new HomeScene)
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](3);

                this.onError(_context2.t0);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 11]]);
      }));

      function connect() {
        return _ref3.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "onError",
    value: function onError(e) {
      console.log('链接错误', e);
      this.layer.setText('连接出错， 刷新页面重新连接');
      this.layer.stopRotate();
      this.retry = true;
    }
  }]);
  return ConnectScene;
}(_base2.default);

exports.default = ConnectScene;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
module.exports = __webpack_require__(7).Object.getPrototypeOf;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(43);
var $getPrototypeOf = __webpack_require__(62);

__webpack_require__(69)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(107);
var $Object = __webpack_require__(7).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(16), 'Object', { defineProperty: __webpack_require__(14).f });


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(63);
module.exports = __webpack_require__(47).f('iterator');


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(112);
__webpack_require__(53);
__webpack_require__(117);
__webpack_require__(118);
module.exports = __webpack_require__(7).Symbol;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(8);
var has = __webpack_require__(18);
var DESCRIPTORS = __webpack_require__(16);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(57);
var META = __webpack_require__(113).KEY;
var $fails = __webpack_require__(20);
var shared = __webpack_require__(41);
var setToStringTag = __webpack_require__(32);
var uid = __webpack_require__(31);
var wks = __webpack_require__(9);
var wksExt = __webpack_require__(47);
var wksDefine = __webpack_require__(48);
var enumKeys = __webpack_require__(114);
var isArray = __webpack_require__(115);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(15);
var toIObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(38);
var createDesc = __webpack_require__(29);
var _create = __webpack_require__(39);
var gOPNExt = __webpack_require__(116);
var $GOPD = __webpack_require__(50);
var $DP = __webpack_require__(14);
var $keys = __webpack_require__(30);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(71).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(33).f = $propertyIsEnumerable;
  __webpack_require__(49).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(27)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(17)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(31)('meta');
var isObject = __webpack_require__(15);
var has = __webpack_require__(18);
var setDesc = __webpack_require__(14).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(20)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(30);
var gOPS = __webpack_require__(49);
var pIE = __webpack_require__(33);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(25);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(19);
var gOPN = __webpack_require__(71).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('asyncIterator');


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('observable');


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
var $Object = __webpack_require__(7).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(19);
var $getOwnPropertyDescriptor = __webpack_require__(50).f;

__webpack_require__(69)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
module.exports = __webpack_require__(7).Object.setPrototypeOf;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(10);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(125).set });


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(15);
var anObject = __webpack_require__(13);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(23)(Function.call, __webpack_require__(50).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(127), __esModule: true };

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(128);
var $Object = __webpack_require__(7).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(39) });


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _layer = __webpack_require__(130);

var _layer2 = _interopRequireDefault(_layer);

var _base = __webpack_require__(34);

var _base2 = _interopRequireDefault(_base);

var _director = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginScene = function (_BaseScene) {
  (0, _inherits3.default)(LoginScene, _BaseScene);

  function LoginScene() {
    (0, _classCallCheck3.default)(this, LoginScene);
    return (0, _possibleConstructorReturn3.default)(this, (LoginScene.__proto__ || (0, _getPrototypeOf2.default)(LoginScene)).apply(this, arguments));
  }

  (0, _createClass3.default)(LoginScene, [{
    key: "ctor",
    value: function ctor() {
      (0, _get3.default)(LoginScene.prototype.__proto__ || (0, _getPrototypeOf2.default)(LoginScene.prototype), "ctor", this).call(this);
      this.addChild(new _layer2.default());
    }
  }]);
  return LoginScene;
}(_base2.default);

exports.default = LoginScene;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _cc = __webpack_require__(6);

var _bgLayer = __webpack_require__(131);

var _bgLayer2 = _interopRequireDefault(_bgLayer);

var _formLayer = __webpack_require__(132);

var _formLayer2 = _interopRequireDefault(_formLayer);

var _director = __webpack_require__(11);

var _scene = __webpack_require__(72);

var _scene2 = _interopRequireDefault(_scene);

var _scene3 = __webpack_require__(75);

var _scene4 = _interopRequireDefault(_scene3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOGIN_SUCCESS = 'LOGIN_SUCCESS';

var Layer = function (_cc$Layer) {
  (0, _inherits3.default)(Layer, _cc$Layer);

  function Layer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Layer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Layer.__proto__ || (0, _getPrototypeOf2.default)(Layer)).call.apply(_ref, [this].concat(args))), _this), _this.wsEvents = (0, _defineProperty3.default)({}, LOGIN_SUCCESS, function (_ref2) {
      var room = _ref2.room,
          user = _ref2.user;

      console.log('登录成功', room, user);
      (0, _director.$registry)('user', user);
      (0, _director.$loading)(false);
      if (room) {
        // 在房间
        _cc.director.pushScene(new _scene4.default(room));
      } else {
        _cc.director.pushScene(new _scene2.default());
      }
    }), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Layer, [{
    key: "ctor",
    value: function ctor() {
      (0, _get3.default)(Layer.prototype.__proto__ || (0, _getPrototypeOf2.default)(Layer.prototype), "ctor", this).call(this);
      this._init();
    }
  }, {
    key: "_init",
    value: function _init() {
      this._initBg();
      this._initForm();
    }
  }, {
    key: "_initBg",
    value: function _initBg() {
      this.addChild(new _bgLayer2.default());
    }
  }, {
    key: "_initForm",
    value: function _initForm() {
      this.addChild(new _formLayer2.default());
    }
  }]);
  return Layer;
}(cc.Layer);

exports.default = Layer;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _cc = __webpack_require__(6);

var _bgLayer = __webpack_require__(51);

var _bgLayer2 = _interopRequireDefault(_bgLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BgLayer = function (_BaseBgLayer) {
  (0, _inherits3.default)(BgLayer, _BaseBgLayer);

  function BgLayer() {
    (0, _classCallCheck3.default)(this, BgLayer);
    return (0, _possibleConstructorReturn3.default)(this, (BgLayer.__proto__ || (0, _getPrototypeOf2.default)(BgLayer)).apply(this, arguments));
  }

  (0, _createClass3.default)(BgLayer, [{
    key: "ctor",
    value: function ctor() {
      (0, _get3.default)(BgLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(BgLayer.prototype), "ctor", this).call(this);
      this._initTitle();
      this._initLabel();
    }
  }, {
    key: "_initTitle",
    value: function _initTitle() {
      var title = new cc.LabelTTF("五子棋", "fonts/font.ttf", 38);
      title.color = cc.color('#ffffff');
      title.x = _cc.winSize.width / 2;
      title.y = _cc.winSize.height / 2 + 200;
      this.addChild(title);
    }
  }, {
    key: "_initLabel",
    value: function _initLabel() {
      var uLabel = new cc.LabelTTF('用户名', 20);
      uLabel.anchorX = 0;
      uLabel.x = _cc.winSize.width / 2 - 150;
      uLabel.y = _cc.winSize.height / 2 + 50;
      this.addChild(uLabel);

      var pLabel = new cc.LabelTTF('密码', 20);
      pLabel.anchorX = 0;
      pLabel.x = _cc.winSize.width / 2 - 150;
      pLabel.y = _cc.winSize.height / 2 - 20;
      this.addChild(pLabel);
    }
  }]);
  return BgLayer;
}(_bgLayer2.default);

exports.default = BgLayer;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(21);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _cc = __webpack_require__(6);

var _editBox = __webpack_require__(52);

var _editBox2 = _interopRequireDefault(_editBox);

var _director = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HEADER_REGISTER = 'REGISTER';
var HEADER_LOGIN = 'LOGIN';

var FormLayer = function (_cc$Layer) {
  (0, _inherits3.default)(FormLayer, _cc$Layer);

  function FormLayer() {
    (0, _classCallCheck3.default)(this, FormLayer);
    return (0, _possibleConstructorReturn3.default)(this, (FormLayer.__proto__ || (0, _getPrototypeOf2.default)(FormLayer)).apply(this, arguments));
  }

  (0, _createClass3.default)(FormLayer, [{
    key: "ctor",
    value: function ctor() {
      (0, _get3.default)(FormLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(FormLayer.prototype), "ctor", this).call(this);
      this._init();
    }
  }, {
    key: "_init",
    value: function _init() {
      this._initInput();
      this._initBtn();
    }
  }, {
    key: "_initInput",
    value: function _initInput() {
      this._initUsernameInput();
      this._initPasswordInput();
    }
  }, {
    key: "_initUsernameInput",
    value: function _initUsernameInput() {
      var iptBg1 = new cc.Sprite(_cc.director.$res.INPUT);
      iptBg1.setScaleX(1.5);
      var username = new _editBox2.default(cc.size(300, 50), iptBg1);
      username.setFontColor(cc.color(0, 0, 0));
      username.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
      username.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
      username.setMaxLength(16);
      username.setPlaceHolder("请输入用户名");
      username.setFont("fonts/font.ttf", 20);
      username.setDelegate(this);
      username.x = _cc.winSize.width / 2 + 70;
      username.y = _cc.winSize.height / 2 + 50;
      this.addChild(username);
      this.username = username;
    }
  }, {
    key: "_initPasswordInput",
    value: function _initPasswordInput() {
      var iptBg2 = new cc.Sprite(_cc.director.$res.INPUT);
      iptBg2.setScaleX(1.5);
      var password = new _editBox2.default(cc.size(300, 50), iptBg2);
      password.setMaxLength(16);
      password.setFontColor(cc.color(0, 0, 0));
      password.setInputFlag(cc.EDITBOX_INPUT_FLAG_PASSWORD);
      password.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
      password.setFont("fonts/font.ttf", 20);
      password.setPlaceHolder("请输入密码");
      password.setDelegate(this);
      password.x = _cc.winSize.width / 2 + 70;
      password.y = _cc.winSize.height / 2 - 20;
      this.addChild(password);
      this.password = password;
    }
  }, {
    key: "_initBtn",
    value: function _initBtn() {
      this._initLoginBtn();
      this._initRegisterBtn();
    }
  }, {
    key: "_initLoginBtn",
    value: function _initLoginBtn() {
      var _this2 = this;

      var loginBtn = new ccui.Button(_cc.director.$res.LOGIN, _cc.director.$res.LOGIN_ON);
      loginBtn.x = _cc.winSize.width / 2 + 160;
      loginBtn.y = _cc.winSize.height / 2 - 100;
      loginBtn.addClickEventListener((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var form;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                form = _this2._validForm();

                if (!(form === null)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                (0, _director.$send)(HEADER_LOGIN, form);
                (0, _director.$loading)();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      })));
      this.addChild(loginBtn);
    }
  }, {
    key: "_initRegisterBtn",
    value: function _initRegisterBtn() {
      var _this3 = this;

      var registerBtn = new ccui.Button(_cc.director.$res.REGISTER, _cc.director.$res.REGISTER_ON);
      registerBtn.x = _cc.winSize.width / 2 - 40;
      registerBtn.y = _cc.winSize.height / 2 - 100;
      registerBtn.addClickEventListener((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var form, nickname;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                form = _this3._validForm();

                if (!(form === null)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                _context2.next = 5;
                return (0, _director.$prompt)("注册", "请输入昵称", form.username);

              case 5:
                nickname = _context2.sent;

                if (!(nickname !== null)) {
                  _context2.next = 13;
                  break;
                }

                if (!(nickname === '')) {
                  _context2.next = 10;
                  break;
                }

                (0, _director.$alert)('错误', '昵称不能为空');
                return _context2.abrupt("return");

              case 10:
                form.nickname = nickname;
                (0, _director.$send)(HEADER_REGISTER, form);
                (0, _director.$loading)();

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      })));
      this.addChild(registerBtn);
    }
  }, {
    key: "_validForm",
    value: function _validForm() {
      var form = {
        username: this.username.getString(),
        password: this.password.getString()
      };
      if (form.username === '' || form.password === '') {
        (0, _director.$alert)('错误', '账号或者密码不能为空');
        return null;
      }

      return form;
    }
  }]);
  return FormLayer;
}(cc.Layer);

exports.default = FormLayer;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(134);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(136);
module.exports = __webpack_require__(7).Object.assign;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(137) });


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(30);
var gOPS = __webpack_require__(49);
var pIE = __webpack_require__(33);
var toObject = __webpack_require__(43);
var IObject = __webpack_require__(59);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(20)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = __webpack_require__(12);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _cc = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingLayer = function (_cc$LayerColor) {
  (0, _inherits3.default)(LoadingLayer, _cc$LayerColor);

  function LoadingLayer() {
    (0, _classCallCheck3.default)(this, LoadingLayer);
    return (0, _possibleConstructorReturn3.default)(this, (LoadingLayer.__proto__ || (0, _getPrototypeOf2.default)(LoadingLayer)).apply(this, arguments));
  }

  (0, _createClass3.default)(LoadingLayer, [{
    key: 'ctor',
    value: function ctor() {
      var _this2 = this;

      (0, _get3.default)(LoadingLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(LoadingLayer.prototype), 'ctor', this).call(this, cc.color(0, 0, 0, 255 * .5));

      this.rotate = new cc.RepeatForever(new cc.RotateBy(1, 360));
      this.icon = new cc.Sprite(cc.director.$res.LOADING2);

      this.icon.attr({
        x: _cc.winSize.width / 2,
        y: _cc.winSize.height / 2
      });
      this.icon.runAction(this.rotate);
      this.addChild(this.icon);

      cc.eventManager.addListener({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: function onTouchBegan() {
          return _this2.visible;
        }
      }, this);

      this.setVisible(false);
    }
  }, {
    key: 'show',
    value: function show() {
      var _this3 = this;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .33;

      this.setOpacity(0);
      this.children.forEach(function (v) {
        return v.setOpacity(0);
      });
      this.setVisible(true);

      return new _promise2.default(function (resolve) {
        var fadeIn = new cc.FadeTo(t, 255 * .5);
        var next = new cc.CallFunc(function () {
          return resolve();
        });
        _this3.children.forEach(function (v) {
          return v.runAction(fadeIn.clone());
        });
        _this3.runAction(new cc.Sequence([fadeIn, next]));
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this4 = this;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .33;

      return new _promise2.default(function (resolve) {
        var fadeOut = new cc.FadeOut(t);
        var fn = new cc.CallFunc(function () {
          return _this4.setVisible(false);
        });
        var next = new cc.CallFunc(function () {
          return resolve();
        });
        _this4.icon.runAction(fadeOut.clone());
        _this4.runAction(new cc.Sequence([fadeOut, fn, next]));
      });
    }
  }]);
  return LoadingLayer;
}(cc.LayerColor);

exports.default = LoadingLayer;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = __webpack_require__(12);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _cc = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageLayer = function (_cc$Layer) {
  (0, _inherits3.default)(MessageLayer, _cc$Layer);

  function MessageLayer() {
    (0, _classCallCheck3.default)(this, MessageLayer);
    return (0, _possibleConstructorReturn3.default)(this, (MessageLayer.__proto__ || (0, _getPrototypeOf2.default)(MessageLayer)).apply(this, arguments));
  }

  (0, _createClass3.default)(MessageLayer, [{
    key: "ctor",
    value: function ctor() {
      (0, _get3.default)(MessageLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(MessageLayer.prototype), "ctor", this).call(this);
      this._init();
    }
  }, {
    key: "_init",
    value: function _init() {
      this._initBg();
      this._initTitle();
      this._initText();
      this._initButton();
      this._initMask();
      this.setVisible(false);
    }
  }, {
    key: "_initMask",
    value: function _initMask() {
      var _this2 = this;

      cc.eventManager.addListener({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: function onTouchBegan() {
          return _this2.visible;
        }
      }, this);
    }
  }, {
    key: "_initBg",
    value: function _initBg() {
      this.bg = new cc.Sprite(_cc.director.$res.BOX);
      this.bg.attr({
        x: _cc.winSize.width / 2,
        y: _cc.winSize.height / 2
      });
      this.addChild(this.bg);
    }
  }, {
    key: "_initTitle",
    value: function _initTitle() {
      this.title = new ccui.Text();
      this.title.setFontSize(30);
      this.title.setString("标题");
      this.title.attr({
        x: _cc.winSize.width / 2,
        y: _cc.winSize.height / 2 + 110
      });
      this.addChild(this.title);
    }
  }, {
    key: "_initText",
    value: function _initText() {
      this.text = new ccui.Text();
      this.text.setFontSize(25);
      this.text.setString("");
      this.text.ignoreContentAdaptWithSize(false);
      this.text.setSize(cc.size(450, 200));
      this.text.attr({
        x: _cc.winSize.width / 2 - 450 / 2,
        y: _cc.winSize.height / 2 + 268 / 2 - 50
      });
      this.text.setAnchorPoint(0, 1);
      this.addChild(this.text);
    }
  }, {
    key: "_initButton",
    value: function _initButton() {
      this._buttons = {};
    }
  }, {
    key: "_show",
    value: function _show() {
      var _this3 = this;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .33;

      this.setOpacity(0);
      this.children.forEach(function (v) {
        return v.setOpacity(0);
      });
      this.setVisible(true);

      return new _promise2.default(function (resolve) {
        var fadeIn = new cc.FadeIn(t);
        var next = new cc.CallFunc(function () {
          return resolve();
        });
        _this3.children.forEach(function (v) {
          return v.runAction(fadeIn.clone());
        });
        _this3.runAction(new cc.Sequence([fadeIn, next]));
      });
    }
  }, {
    key: "_hide",
    value: function _hide() {
      var _this4 = this;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .33;

      return new _promise2.default(function (resolve) {
        var fadeOut = new cc.FadeOut(t);
        var fn = new cc.CallFunc(function () {
          return _this4.setVisible(false);
        });
        var next = new cc.CallFunc(function () {
          return resolve();
        });
        _this4.children.forEach(function (v) {
          return v.runAction(fadeOut.clone());
        });
        _this4.runAction(new cc.Sequence([fadeOut, fn, next]));
      });
    }
  }]);
  return MessageLayer;
}(cc.Layer);

exports.default = MessageLayer;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = __webpack_require__(12);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _cc = __webpack_require__(6);

var _confirmLayer = __webpack_require__(73);

var _confirmLayer2 = _interopRequireDefault(_confirmLayer);

var _editBox = __webpack_require__(52);

var _editBox2 = _interopRequireDefault(_editBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PromptLayer = function (_ConfirmLayer) {
  (0, _inherits3.default)(PromptLayer, _ConfirmLayer);

  function PromptLayer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PromptLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PromptLayer.__proto__ || (0, _getPrototypeOf2.default)(PromptLayer)).call.apply(_ref, [this].concat(args))), _this), _this._rejectVal = null, _this._resolveVal = function () {
      return this.input.getString();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PromptLayer, [{
    key: "_init",
    value: function _init() {
      (0, _get3.default)(PromptLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(PromptLayer.prototype), "_init", this).call(this);
      this._initInput();
    }
  }, {
    key: "_initInput",
    value: function _initInput() {
      var iptBg1 = new cc.Sprite(_cc.director.$res.INPUT);
      iptBg1.setScaleX(2);
      var input = new _editBox2.default(cc.size(400, 50), iptBg1);
      input.setFontColor(cc.color(0, 0, 0));
      input.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
      input.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
      input.setPlaceHolder("请输入内容");
      input.setFont("fonts/font.ttf", 20);
      input.setDelegate(this);
      input.attr({
        x: _cc.winSize.width / 2,
        y: _cc.winSize.height / 2 - 40
      });
      this.input = input;
      this.addChild(this.input);
    }
  }, {
    key: "prompt",
    value: function prompt(title, text) {
      var defaultVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var _this2 = this;

      var placeholder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '请输入内容';
      var t = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : .33;

      return new _promise2.default(function (resolve) {
        _this2._resolve = resolve;
        _this2._t = t;
        _this2.input.setString(defaultVal);
        _this2.input.setPlaceHolder(placeholder);
        _this2.text.setString(text);
        _this2.title.setString(title);
        _this2._show(t);
      });
    }
  }]);
  return PromptLayer;
}(_confirmLayer2.default);

exports.default = PromptLayer;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(21);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _cc = __webpack_require__(6);

var _director = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CREATE_ROOM = 'CREATE_ROOM';
var JOIN_ROOM = 'JOIN_ROOM';

var NEED_PASSWORD = 'NEED_PASSWORD'; // 需要密码
// const JOIN_PASSWORD = 'JOIN_PASSWORD' // 加入房间需要密码
// const JOIN_GAME = 'JOIN_GAME' // 加入房间 ： 切换场景到房间的场景

var BtnLayer = function (_cc$Layer) {
  (0, _inherits3.default)(BtnLayer, _cc$Layer);

  function BtnLayer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, BtnLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BtnLayer.__proto__ || (0, _getPrototypeOf2.default)(BtnLayer)).call.apply(_ref, [this].concat(args))), _this), _this.wsEvents = {
      NEED_PASSWORD: function NEED_PASSWORD(body) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var roomId, password;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _director.$loading)(false);

                case 2:
                  roomId = body.roomId, password = body.password;

                  if (!(password !== '')) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 6;
                  return (0, _director.$alert)('加入房间', '你输入的密码有误');

                case 6:
                  return _context.abrupt('return');

                case 7:
                  _context.next = 9;
                  return _this2.join(roomId, true);

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(BtnLayer, [{
    key: 'ctor',
    value: function ctor() {
      (0, _get3.default)(BtnLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(BtnLayer.prototype), 'ctor', this).call(this);

      this._init();
    }
  }, {
    key: '_init',
    value: function _init() {
      this._initCreateRoom();
      this._initJoinRoom();
      this._initQuickStart();
    }
  }, {
    key: '_initCreateRoom',
    value: function _initCreateRoom() {
      var _this3 = this;

      var btn = this._makeBtn(_cc.director.$res.home.CREATE, _cc.director.$res.home.CREATE_ON, 220, 130);
      btn.addClickEventListener((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var password, c;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                password = '';
                _context2.next = 3;
                return (0, _director.$confirm)('创建房间', '是否需要密码？');

              case 3:
                c = _context2.sent;

                if (!c) {
                  _context2.next = 15;
                  break;
                }

                _context2.next = 7;
                return (0, _director.$prompt)('创建房间', '请输入密码');

              case 7:
                password = _context2.sent;

                if (!(password === null)) {
                  _context2.next = 11;
                  break;
                }

                console.log('取消');
                return _context2.abrupt('return');

              case 11:
                if (!(password === '')) {
                  _context2.next = 15;
                  break;
                }

                _context2.next = 14;
                return (0, _director.$alert)('创建房间', '请输入密码');

              case 14:
                return _context2.abrupt('return');

              case 15:
                console.log('创建房间', password);
                (0, _director.$loading)();
                (0, _director.$send)(CREATE_ROOM, {
                  password: password
                });

              case 18:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      })));
      this.addChild(btn);
    }
  }, {
    key: '_initJoinRoom',
    value: function _initJoinRoom() {
      var _this4 = this;

      var btn = this._makeBtn(_cc.director.$res.home.JOIN, _cc.director.$res.home.JOIN_ON, 220, 280);
      btn.addClickEventListener((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var roomId;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _director.$prompt)('加入房间', '请输入房间号码？', '', '请输入房间号码？');

              case 2:
                roomId = _context3.sent;

                if (!(roomId === null)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt('return');

              case 5:
                console.log('加入房间', roomId);
                _context3.next = 8;
                return _this4.join(roomId);

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4);
      })));
      this.addChild(btn);
    }
  }, {
    key: '_initQuickStart',
    value: function _initQuickStart() {
      var btn = this._makeBtn(_cc.director.$res.home.START, _cc.director.$res.home.START_ON, 220, 430);
      btn.addClickEventListener(function () {
        console.log('快速开始');
        (0, _director.$loading)();
        (0, _director.$send)('QUICK_START', {});
      });
      this.addChild(btn);
    }
  }, {
    key: '_makeBtn',
    value: function _makeBtn(bg, bg_on, x, y) {
      var btn = new ccui.Button(bg, bg_on);
      btn.attr({ x: x, y: y });
      return btn;
    }
  }, {
    key: 'join',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(roomId) {
        var needPassword = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var password;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                password = '';

                if (!needPassword) {
                  _context4.next = 5;
                  break;
                }

                _context4.next = 4;
                return (0, _director.$prompt)('加入房间', '房间需要密码', '', '请输入密码');

              case 4:
                password = _context4.sent;

              case 5:
                if (!(needPassword && password === '')) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 8;
                return (0, _director.$alert)('加入房间', '请输入密码');

              case 8:
                return _context4.abrupt('return');

              case 9:
                console.log('加入房间', { roomId: roomId, password: password });
                (0, _director.$loading)();
                (0, _director.$send)(JOIN_ROOM, {
                  roomId: roomId,
                  password: password
                });

              case 12:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function join(_x) {
        return _ref4.apply(this, arguments);
      }

      return join;
    }()
  }]);
  return BtnLayer;
}(cc.Layer);

exports.default = BtnLayer;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(21);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MsgCell = function (_cc$TableViewCell) {
  (0, _inherits3.default)(MsgCell, _cc$TableViewCell);

  function MsgCell() {
    (0, _classCallCheck3.default)(this, MsgCell);
    return (0, _possibleConstructorReturn3.default)(this, (MsgCell.__proto__ || (0, _getPrototypeOf2.default)(MsgCell)).apply(this, arguments));
  }

  (0, _createClass3.default)(MsgCell, [{
    key: 'ctor',
    value: function ctor(content) {
      (0, _get3.default)(MsgCell.prototype.__proto__ || (0, _getPrototypeOf2.default)(MsgCell.prototype), 'ctor', this).call(this);

      this.content = content;
      this._init();
    }
  }, {
    key: '_init',
    value: function _init() {
      var text = new ccui.Text();
      text.setString(this.content);
      text.ignoreContentAdaptWithSize(true);
      text.setTextAreaSize(cc.size(410, 0));
      text.attr({
        anchorX: 0,
        anchorY: 0,
        x: 0,
        y: 0
      });
      text.setColor(cc.color('#000000'));
      this.addChild(text);
      this.text = text;
    }
  }]);
  return MsgCell;
}(cc.TableViewCell);

var MsgLayer = function (_cc$Layer) {
  (0, _inherits3.default)(MsgLayer, _cc$Layer);

  function MsgLayer() {
    (0, _classCallCheck3.default)(this, MsgLayer);
    return (0, _possibleConstructorReturn3.default)(this, (MsgLayer.__proto__ || (0, _getPrototypeOf2.default)(MsgLayer)).apply(this, arguments));
  }

  (0, _createClass3.default)(MsgLayer, [{
    key: 'ctor',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(x, y) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _get3.default)(MsgLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(MsgLayer.prototype), 'ctor', this).call(this);

                this.size = 0;
                this.msgs = [];
                this.cells = [];
                _context.next = 6;
                return this._init(x, y);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function ctor(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return ctor;
    }()
  }, {
    key: 'addMsg',
    value: function addMsg(msg) {
      this.msgs.push(msg);
      this.size++;
      this.list.reloadData();
      if (this.list.getContentSize().height > 310) {
        this.list.setContentOffset(cc.p(0, 0));
      }
    }
  }, {
    key: '_init',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(x, y) {
        var list;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                list = new cc.TableView(this, cc.size(410, 320));

                list.attr({
                  x: x,
                  y: y
                });
                list.setVerticalFillOrder(cc.TABLEVIEW_FILL_TOPDOWN); // 从上往下填充
                this.list = list;
                this.addChild(list);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _init(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return _init;
    }()
  }, {
    key: 'numberOfCellsInTableView',
    value: function numberOfCellsInTableView(ctx) {
      return this.size;
    }
  }, {
    key: 'tableCellSizeForIndex',
    value: function tableCellSizeForIndex(ctx, idx) {
      return this.tableCellAtIndex(ctx, idx).text.getContentSize();
    }
  }, {
    key: 'tableCellAtIndex',
    value: function tableCellAtIndex(ctx, idx) {
      if (this.cells[idx]) {
        return this.cells[idx];
      }

      var cell = new MsgCell(this.msgs[idx]);
      this.cells[idx] = cell;
      return cell;
    }
  }]);
  return MsgLayer;
}(cc.Layer);

exports.default = MsgLayer;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _editBox = __webpack_require__(52);

var _editBox2 = _interopRequireDefault(_editBox);

var _cc = __webpack_require__(6);

var _director = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatFormLayer = function (_cc$Layer) {
  (0, _inherits3.default)(ChatFormLayer, _cc$Layer);

  function ChatFormLayer() {
    (0, _classCallCheck3.default)(this, ChatFormLayer);
    return (0, _possibleConstructorReturn3.default)(this, (ChatFormLayer.__proto__ || (0, _getPrototypeOf2.default)(ChatFormLayer)).apply(this, arguments));
  }

  (0, _createClass3.default)(ChatFormLayer, [{
    key: "ctor",
    value: function ctor(header, x, y) {
      (0, _get3.default)(ChatFormLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(ChatFormLayer.prototype), "ctor", this).call(this);

      this.header = header;
      this._init(x, y);
    }
  }, {
    key: "_init",
    value: function _init(x, y) {
      this._initInput(x, y);
      this._initSend(x, y);
    }
  }, {
    key: "_initInput",
    value: function _initInput(x, y) {
      var _this2 = this;

      var editBox = new _editBox2.default(cc.size(345, 50));
      editBox.setFontColor(cc.color(255, 255, 255));
      editBox.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
      editBox.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
      editBox.setMaxLength(40);
      editBox.setDelegate({
        editBoxReturn: function editBoxReturn() {
          _this2.send();
        }
      });
      editBox.setPlaceHolder("请输入内容");
      editBox.attr({ // 620, 110
        x: x - 100,
        y: y
      });
      this.addChild(editBox);
      this.ipt = editBox;
    }
  }, {
    key: "_initSend",
    value: function _initSend(x, y) {
      var _this3 = this;

      this.btn = new ccui.Button(_cc.director.$res.home.SEND, _cc.director.$res.home.SEND_ON);
      this.btn.attr({
        x: x + 110,
        y: y + 5
      });
      this.btn.addClickEventListener(function () {
        return _this3.send();
      });
      this.addChild(this.btn);
    }
  }, {
    key: "send",
    value: function send() {
      (0, _director.$send)(this.header, this.ipt.getString());
      this.ipt.setString("");
    }
  }]);
  return ChatFormLayer;
}(cc.Layer);

exports.default = ChatFormLayer;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _director = __webpack_require__(11);

var _cc = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LEAVE_ROOM = 'LEAVE_ROOM';
var PLAYER_ENTER = 'PLAYER_ENTER';
var NEW_MASTER = 'NEW_MASTER';
var READY_CHANGE = 'READY_CHANGE';
var SWITCH_READY = 'SWITCH_READY';

var UserLayer = function (_cc$Layer) {
  (0, _inherits3.default)(UserLayer, _cc$Layer);

  function UserLayer() {
    var _ref, _this$wsEvents;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UserLayer.__proto__ || (0, _getPrototypeOf2.default)(UserLayer)).call.apply(_ref, [this].concat(args))), _this), _this.wsEvents = (_this$wsEvents = {}, (0, _defineProperty3.default)(_this$wsEvents, LEAVE_ROOM, function (msg) {
      (0, _director.$loading)(false);
      // 离开房间
      console.log('离开房间', msg);
      // isMaster
      this.parent.addMsg('[\u7CFB\u7EDF\u6D88\u606F]\u73A9\u5BB6' + msg.user.nickname + '\u79BB\u5F00\u623F\u95F4');
      if (this.isMaster) {
        this.setBlack(null);
      } else {
        this.setWhite(null);
      }

      if ((0, _director.$registry)('user').id === msg.user.id) {
        // 你离开了
        _cc.director.popScene();
      }
    }), (0, _defineProperty3.default)(_this$wsEvents, PLAYER_ENTER, function (msg) {
      // 玩家进入
      console.log('玩家进入', msg);
      // user isReady isMaster
      this.parent.addMsg('[\u7CFB\u7EDF\u6D88\u606F]\u73A9\u5BB6' + msg.user.nickname + '\u8FDB\u5165\u623F\u95F4');
      if (msg.isMaster) {
        this.setBlack(msg.user, msg.isReady);
      } else {
        this.setWhite(msg.user, msg.isReady);
      }
    }), (0, _defineProperty3.default)(_this$wsEvents, READY_CHANGE, function (msg) {
      // 准备改变
      console.log('准备状态改变', msg);
      // id ready
      (0, _director.$loading)(false);
      this.parent.addMsg('[系统消息]玩家准备状态改变');
      if (this._black && this._black.id === msg.id) {
        this.setBlack(this._black, msg.ready);
      } else if (this._white && this._white.id === msg.id) {
        this.setWhite(this._white, msg.ready);
      } else {
        console.error('你不在房间里');
      }
    }), (0, _defineProperty3.default)(_this$wsEvents, NEW_MASTER, function (msg) {
      // 新房主
      console.log('成为新房主', msg);
      this.parent.addMsg('[系统消息]房主离开，你成为新房主');
      this.parent.setMaster();
      this.parent.updateLabel();
      // id nickname

      this.setBlack(msg.user, msg.isReady);
      this.setWhite(null);
    }), _this$wsEvents), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UserLayer, [{
    key: 'ctor',
    value: function ctor(roomInfo) {
      (0, _get3.default)(UserLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(UserLayer.prototype), 'ctor', this).call(this);
      this._initUserAvatar();

      this.setBlack(roomInfo.black, roomInfo.blackReady);
      this.setWhite(roomInfo.white, roomInfo.whiteReady);
    }
  }, {
    key: '_initUserAvatar',
    value: function _initUserAvatar() {
      var _this2 = this;

      this._black = null;
      this._blackReady = null;
      this._blackAvatar = new cc.Sprite(_cc.director.$res.BLACK);
      this._blackAvatar.setScale(.3, .3);
      this._blackAvatar.attr({
        x: 600,
        y: 500
      });
      cc.eventManager.addListener({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: function onTouchBegan(touch, event) {
          var pos = touch.getLocation(),
              target = event.getCurrentTarget();
          if (!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false;

          _this2.switchReady(_this2._black, !_this2._blackReady);
        }
      }, this._blackAvatar);
      this._blackLabel = new cc.LabelTTF('未加入');
      this._blackLabel.attr({
        x: 600,
        y: 435
      });
      this._blackInfo = new cc.LabelTTF('胜0 负0');
      this._blackInfo.attr({
        x: 600,
        y: 455
      });
      this.addChild(this._blackAvatar);
      this.addChild(this._blackLabel);
      this.addChild(this._blackInfo);

      this._white = null;
      this._whiteReady = null;
      this._whiteAvatar = new cc.Sprite(_cc.director.$res.WHITE);
      this._whiteAvatar.setScale(.3, .3);
      this._whiteAvatar.attr({
        x: 750,
        y: 500
      });
      cc.eventManager.addListener({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: function onTouchBegan(touch, event) {
          var pos = touch.getLocation(),
              target = event.getCurrentTarget();
          if (!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false;

          _this2.switchReady(_this2._white, !_this2._whiteReady);
        }
      }, this._whiteAvatar);
      this._whiteLabel = new cc.LabelTTF('未加入');
      this._whiteLabel.attr({
        x: 750,
        y: 435
      });
      this._whiteInfo = new cc.LabelTTF('胜0 负0');
      this._whiteInfo.attr({
        x: 750,
        y: 455
      });
      this.addChild(this._whiteAvatar);
      this.addChild(this._whiteLabel);
      this.addChild(this._whiteInfo);
    }
  }, {
    key: 'setBlack',
    value: function setBlack(user, ready) {
      if (user) {
        this._black = user;
        this._blackReady = ready;
        this.setBlackSubTitle(ready ? '已准备' : '未准备');
        this.setBlackInfo(user);
      } else {
        this._black = null;
        this._blackReady = null;
        this._blackLabel.setString('\u672A\u52A0\u5165');
        this.setBlackInfo(null);
      }
    }
  }, {
    key: 'setWhite',
    value: function setWhite(user, ready) {
      if (user) {
        this._white = user;
        this._whiteReady = ready;
        this.setWhiteSubTitle(ready ? '已准备' : '未准备');
        this.setWhiteInfo(user);
      } else {
        this._white = null;
        this._whiteReady = null;
        this._whiteLabel.setString('\u672A\u52A0\u5165');
        this.setWhiteInfo(null);
      }
    }
  }, {
    key: 'setBlackInfo',
    value: function setBlackInfo(user) {
      if (user) {
        this._blackInfo.setString('\u80DC' + user.win + ' \u8D1F' + user.lose);
      } else {
        this._blackInfo.setString('\u80DC0 \u8D1F0');
      }
    }
  }, {
    key: 'setWhiteInfo',
    value: function setWhiteInfo(user) {
      if (user) this._whiteInfo.setString('\u80DC' + user.win + ' \u8D1F' + user.lose);else this._whiteInfo.setString('\u80DC0 \u8D1F0');
    }
  }, {
    key: 'setBlackSubTitle',
    value: function setBlackSubTitle(text) {
      this._blackLabel.setString(this._black.nickname + '(' + text + ')');
    }
  }, {
    key: 'setWhiteSubTitle',
    value: function setWhiteSubTitle(text) {
      this._whiteLabel.setString(this._white.nickname + '(' + text + ')');
    }
  }, {
    key: 'switchReady',
    value: function switchReady(user, ready) {
      if (user && user.id === (0, _director.$registry)('user').id) {
        (0, _director.$loading)();
        (0, _director.$send)(SWITCH_READY, { ready: ready });
      } else {
        console.log('reg', (0, _director.$registry)('user'));
        console.log('user', user);
        console.log('ready', ready);
      }
    }
  }]);
  return UserLayer;
}(cc.Layer);

exports.default = UserLayer;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _cc = __webpack_require__(6);

var _director = __webpack_require__(11);

var _boardLayer = __webpack_require__(146);

var _boardLayer2 = _interopRequireDefault(_boardLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EXIT_ROOM = 'EXIT_ROOM';

var GameLayer = function (_cc$Layer) {
  (0, _inherits3.default)(GameLayer, _cc$Layer);

  function GameLayer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GameLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GameLayer.__proto__ || (0, _getPrototypeOf2.default)(GameLayer)).call.apply(_ref, [this].concat(args))), _this), _this.wsEvents = {
      GAME_START: function GAME_START(game) {
        this.parent.addMsg('[系统消息]游戏开始了');

        // 游戏开始了
        this.setGame(game);
      },
      GAME_END: function GAME_END(result) {
        var reason = result.reason,
            winner = result.winner;

        this._game = null;
        this._board.finish();
        this.parent.addMsg(reason);

        var userLayer = this.parent.user;
        userLayer.setWhiteSubTitle('未准备');
        userLayer.setBlackSubTitle('未准备');

        if (winner.id === userLayer._black.id) {
          userLayer._black.win++;
          userLayer._white.lose++;
        } else {
          userLayer._white.win++;
          userLayer._black.lose++;
        }
        userLayer.setBlackInfo(userLayer._black);
        userLayer.setWhiteInfo(userLayer._white);

        userLayer._blackReady = false;
        userLayer._whiteReady = false;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GameLayer, [{
    key: "ctor",
    value: function ctor(game) {
      (0, _get3.default)(GameLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(GameLayer.prototype), "ctor", this).call(this);

      this._initBoard();
      this._initExitBtn();
    }
  }, {
    key: "_initExitBtn",
    value: function _initExitBtn() {
      var _this2 = this;

      this.exitBtn = new ccui.Button(_cc.director.$res.EXIT);
      this.exitBtn.attr({
        x: 880,
        y: 500
      });
      this.addChild(this.exitBtn);
      this.exitBtn.addClickEventListener(function () {
        if (_this2._game) {
          _this2.parent.addMsg('[系统消息]正在游戏中不能退出游戏，你强制退出系统将托管');
          return;
        }

        (0, _director.$loading)();
        (0, _director.$send)(EXIT_ROOM, {});
      });
    }
  }, {
    key: "_initBoard",
    value: function _initBoard() {
      this._board = new _boardLayer2.default();
      this.addChild(this._board);
    }
  }, {
    key: "setGame",
    value: function setGame(game) {
      this._game = game;
      this._board.setGame(game);
    }
  }]);
  return GameLayer;
}(cc.Layer);

exports.default = GameLayer;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _cc = __webpack_require__(6);

var _director = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoardLayer = function (_cc$Layer) {
  (0, _inherits3.default)(BoardLayer, _cc$Layer);

  function BoardLayer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, BoardLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BoardLayer.__proto__ || (0, _getPrototypeOf2.default)(BoardLayer)).call.apply(_ref, [this].concat(args))), _this), _this.wsEvents = {
      SET_PIECE: function SET_PIECE(body) {
        var x = body.x,
            y = body.y,
            type = body.type;


        console.log('下了一个子', type, x, y);
        this.addPiece(type, x, y);
      },
      INTURN: function INTURN(body) {
        var user = body.user,
            clock = body.clock;

        clock--;

        this.setInturn(user, clock);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(BoardLayer, [{
    key: 'setInturn',
    value: function setInturn(user, clock) {
      var _this2 = this;

      this._inturn = user;
      this._clock = clock;
      this.clearClock();

      console.log(this.parent, this.parent.parent, 1);
      var userLayer = this.parent.parent.user;
      if (userLayer._black.id === user.id) {
        // 轮到黑色
        userLayer.setWhiteSubTitle('已准备');
        this.startClock(clock, function () {
          return userLayer.setBlackSubTitle('\u5269\u4F59' + _this2._clock + '\u79D2');
        });
      } else {
        userLayer.setBlackSubTitle('已准备');
        this.startClock(clock, function () {
          return userLayer.setWhiteSubTitle('\u5269\u4F59' + _this2._clock + '\u79D2');
        });
      }
    }
  }, {
    key: 'clearClock',
    value: function clearClock() {
      if (this._clockEv) {
        clearInterval(this._clockEv);
        this._clockEv = null;
      }
    }
  }, {
    key: 'startClock',
    value: function startClock(clock, fn) {
      var _this3 = this;

      this.clearClock();

      fn(this._clock);
      this._clockEv = setInterval(function () {
        _this3._clock--;
        fn(_this3._clock);
      }, 1000);
    }
  }, {
    key: 'ctor',
    value: function ctor() {
      (0, _get3.default)(BoardLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(BoardLayer.prototype), 'ctor', this).call(this);

      this._initBg();
      this._data = [];
      this._pieces = [];
      this._inturn = null;
      this._start = false;
      this._clockEv = null;
      this._clock = null;
    }
  }, {
    key: '_initBg',
    value: function _initBg() {
      var _this4 = this;

      this._bg = new cc.Sprite(_cc.director.$res.BOARD);
      this._bg.attr({
        x: 270,
        y: 270
      });
      this.addChild(this._bg);
      cc.eventManager.addListener({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: function onTouchBegan(touch, event) {
          var pos = touch.getLocation(),
              target = event.getCurrentTarget();
          if (!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false;

          var x = parseInt((pos.x - 38 + 16.5) / 33),
              y = parseInt((pos.y - 40 + 16.5) / 33);

          _this4.setPiece(x, y);
        }
      }, this._bg);

      this._label = new cc.LabelTTF('游戏还没开始');
      this._label.attr({
        x: 270,
        y: 270
      });
      this._label.setFontSize(30);
      this._label.setFontFillColor(cc.color('#000000'));
      this.addChild(this._label);
    }
  }, {
    key: 'setPiece',
    value: function setPiece(x, y) {
      if (!this._start) {
        this.parent.parent.addMsg('[系统消息]游戏还没开始');
        return;
      }

      if (this._inturn.id !== (0, _director.$registry)('user').id) {
        this.parent.parent.addMsg('[系统消息]还没轮到你');
        return;
      }

      if (this._data[y * 15 + x] !== undefined && this._data[y * 15 + x] !== null) {
        console.error('已经有子了', this._data);
        this.parent.parent.addMsg('[系统消息]这个位置已经有子了');
        return;
      }

      (0, _director.$send)('SET_PIECE', {
        x: x, y: y
      });
    }
  }, {
    key: 'addPiece',
    value: function addPiece(type, x, y) {
      if (x < 0 || x > 14 || y < 0 || y > 14) {
        console.error('下子索引有错');
        return;
      }
      var img = type === 0 ? _cc.director.$res.BLACK : _cc.director.$res.WHITE;
      var piece = new cc.Sprite(img);
      piece.setScale(.14, .14);
      piece.attr({
        x: 38 + 33 * x,
        y: 40 + 33 * y
      });

      this.addChild(piece);
      this._pieces.push(piece);
    }
  }, {
    key: 'clearPieces',
    value: function clearPieces() {
      var _this5 = this;

      this._pieces.forEach(function (p) {
        return _this5.removeChild(p);
      });
      this._pieces = [];
    }
  }, {
    key: 'drawPieces',
    value: function drawPieces() {
      for (var i = 0; i < Math.pow(15, 2); ++i) {
        var x = i % 15,
            y = parseInt(i / 15);

        if (this._data[i] !== undefined && this._data[i] !== null) {
          this.addPiece(this._data[i], x, y);
        }
      }
    }
  }, {
    key: 'clearData',
    value: function clearData() {
      this._data = [];
    }
  }, {
    key: 'setGame',
    value: function setGame(game) {
      if (game) {
        if (game.finished) {
          this.finish();
          return;
        }
        this._start = true;
        this._game = game;
        this._data = game.data;
        this._inturn = game.inturn;

        this.clearPieces();
        this.drawPieces();
        this._label.setVisible(false);

        if (!this._clockEv) {
          var now = parseInt(new Date().getTime() / 1000);

          var resClock = game.clockStart + game.clock - now;
          if (resClock > 0) {
            this.setInturn(this._inturn, resClock);
          }
        }
      }
    }
  }, {
    key: 'finish',
    value: function finish() {
      this._start = false;

      this._game = null;
      this._data = [];
      this._inturn = null;
      this._start = false;
      this.clearClock();
      this._clock = null;
      this._label.setVisible(true);
      this._label.setString("游戏结束");
    }
  }]);
  return BoardLayer;
}(cc.Layer);

exports.default = BoardLayer;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = __webpack_require__(12);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(4);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _cc = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectingLayer = function (_cc$LayerColor) {
  (0, _inherits3.default)(ConnectingLayer, _cc$LayerColor);

  function ConnectingLayer() {
    (0, _classCallCheck3.default)(this, ConnectingLayer);
    return (0, _possibleConstructorReturn3.default)(this, (ConnectingLayer.__proto__ || (0, _getPrototypeOf2.default)(ConnectingLayer)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConnectingLayer, [{
    key: 'ctor',
    value: function ctor() {
      var _this2 = this;

      (0, _get3.default)(ConnectingLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(ConnectingLayer.prototype), 'ctor', this).call(this, cc.color(0, 0, 0));

      this.rotate = new cc.RepeatForever(new cc.RotateBy(1, 360));
      this.icon = new cc.Sprite(_cc.director.$res.LOADING);

      this.icon.attr({
        x: _cc.winSize.width / 2,
        y: _cc.winSize.height / 2
      });
      this.addChild(this.icon);

      this.label = new cc.LabelTTF('连接中');
      this.label.attr({
        x: _cc.winSize.width / 2,
        y: _cc.winSize.height / 2 - 150
      });
      this.addChild(this.label);

      cc.eventManager.addListener({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: function onTouchBegan() {
          return _this2.visible;
        }
      }, this);

      this.setVisible(false);
    }
  }, {
    key: 'show',
    value: function show() {
      var _this3 = this;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .33;

      this.setOpacity(0);
      this.icon.setOpacity(0);
      this.label.setOpacity(0);
      this.setVisible(true);

      return new _promise2.default(function (resolve) {
        var fadeIn = new cc.FadeIn(t);
        var next = new cc.CallFunc(function () {
          return resolve();
        });
        _this3.icon.runAction(fadeIn.clone());
        _this3.label.runAction(fadeIn.clone());
        _this3.runAction(new cc.Sequence([fadeIn, next]));
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this4 = this;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .33;

      return new _promise2.default(function (resolve) {
        var fadeOut = new cc.FadeOut(t);
        var fn = new cc.CallFunc(function () {
          return _this4.setVisible(false);
        });
        var next = new cc.CallFunc(function () {
          return resolve();
        });
        _this4.icon.runAction(fadeOut.clone());
        _this4.label.runAction(fadeOut.clone());
        _this4.runAction(new cc.Sequence([fadeOut, fn, next]));
      });
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      this.label.setString(text);
    }
  }, {
    key: 'stopRotate',
    value: function stopRotate() {
      this.icon.stopAction(this.rotate);
    }
  }, {
    key: 'startRotate',
    value: function startRotate() {
      this.icon.runAction(this.rotate);
    }
  }]);
  return ConnectingLayer;
}(cc.LayerColor);

exports.default = ConnectingLayer;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stringify = __webpack_require__(149);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(12);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _typeof2 = __webpack_require__(46);

var _typeof3 = _interopRequireDefault(_typeof2);

var _cc = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function broadcast(node, data) {
  var header = data.header,
      body = data.body;

  var next = true;
  if ((0, _typeof3.default)(node.wsEvents) === 'object') {
    if (node.wsEvents[header] instanceof Function) {
      next = node.wsEvents[header].call(node, body);
    }
  }
  if (next !== false && node.children instanceof Array) {
    node.children.forEach(function (v) {
      return broadcast(v, data);
    });
  }
}

var Ws = function () {
  function Ws() {
    (0, _classCallCheck3.default)(this, Ws);
    this._ws = null;
  }

  (0, _createClass3.default)(Ws, [{
    key: 'connect',
    value: function connect(uri) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this._ws = new WebSocket(uri);
        _this._ws.onclose = function (e) {
          return _this._onClose(e);
        };
        _this._ws.onmessage = function (data) {
          return _this._onMessage(data);
        };
        _this._ws.onopen = function (e) {
          return resolve(_this, e);
        };
        _this._ws.onerror = function (e) {
          return reject(e);
        };
      });
    }
  }, {
    key: '_onClose',
    value: function _onClose(e) {
      _cc.director.popToRootScene();
      _cc.director._scenesStack[0].onError(e);
    }
  }, {
    key: '_onMessage',
    value: function _onMessage(messageEvent) {
      try {
        var data = JSON.parse(messageEvent.data);
        if (data.header !== 'EVAL_ECHO' && data.header !== 'EVAL_ERROR') {
          console.log('response', data.header, data.body);
        }
        broadcast(_cc.director.getRunningScene(), data);
      } catch (e) {
        console.error('解析message失败', e, messageEvent);
        return;
      }
    }
  }, {
    key: 'send',
    value: function send(header, body) {
      if (header !== 'EVAL') console.log('sending', { header: header.toUpperCase(), body: body });
      var data = (0, _stringify2.default)({ header: header.toUpperCase(), body: body });
      this._ws.send(data);
    }
  }, {
    key: 'close',
    value: function close() {
      this._ws.close();
    }
  }]);
  return Ws;
}();

exports.default = Ws;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(150), __esModule: true };

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(7);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ })
/******/ ]);