import {
  __toESM,
  require_react
} from "./chunk-ATZAHYIB.js";

// node_modules/pure-react-carousel/dist/index.es.js
var import_react = __toESM(require_react());
function ownKeys(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e2);
    t && (i = i.filter(function(t2) {
      return Object.getOwnPropertyDescriptor(e2, t2).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function _objectSpread2(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ownKeys(Object(r), true).forEach(function(t2) {
      _defineProperty(e2, t2, r[t2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t2) {
      Object.defineProperty(e2, t2, Object.getOwnPropertyDescriptor(r, t2));
    });
  }
  return e2;
}
function _classCallCheck(e2, t) {
  if (!(e2 instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e2, t) {
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e2, i.key, i);
  }
}
function _createClass(e2, t, r) {
  return t && _defineProperties(e2.prototype, t), r && _defineProperties(e2, r), Object.defineProperty(e2, "prototype", { writable: false }), e2;
}
function _defineProperty(e2, t, r) {
  return t in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function _extends() {
  return (_extends = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e2[i] = r[i]);
    }
    return e2;
  }).apply(this, arguments);
}
function _inherits(e2, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  e2.prototype = Object.create(t && t.prototype, { constructor: { value: e2, writable: true, configurable: true } }), Object.defineProperty(e2, "prototype", { writable: false }), t && _setPrototypeOf(e2, t);
}
function _getPrototypeOf(e2) {
  return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
    return e3.__proto__ || Object.getPrototypeOf(e3);
  })(e2);
}
function _setPrototypeOf(e2, t) {
  return (_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t2) {
    return e3.__proto__ = t2, e3;
  })(e2, t);
}
function _isNativeReflectConstruct() {
  if ("undefined" == typeof Reflect || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if ("function" == typeof Proxy)
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (e2) {
    return false;
  }
}
function _objectWithoutPropertiesLoose(e2, t) {
  if (null == e2)
    return {};
  var r, i, n = {}, s2 = Object.keys(e2);
  for (i = 0; i < s2.length; i++)
    r = s2[i], t.indexOf(r) >= 0 || (n[r] = e2[r]);
  return n;
}
function _objectWithoutProperties(e2, t) {
  if (null == e2)
    return {};
  var r, i, n = _objectWithoutPropertiesLoose(e2, t);
  if (Object.getOwnPropertySymbols) {
    var s2 = Object.getOwnPropertySymbols(e2);
    for (i = 0; i < s2.length; i++)
      r = s2[i], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, r) && (n[r] = e2[r]);
  }
  return n;
}
function _assertThisInitialized(e2) {
  if (void 0 === e2)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
function _possibleConstructorReturn(e2, t) {
  if (t && ("object" == typeof t || "function" == typeof t))
    return t;
  if (void 0 !== t)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(e2);
}
function _createSuper(e2) {
  var t = _isNativeReflectConstruct();
  return function() {
    var r, i = _getPrototypeOf(e2);
    if (t) {
      var n = _getPrototypeOf(this).constructor;
      r = Reflect.construct(i, arguments, n);
    } else
      r = i.apply(this, arguments);
    return _possibleConstructorReturn(this, r);
  };
}
function _toConsumableArray(e2) {
  return _arrayWithoutHoles(e2) || _iterableToArray(e2) || _unsupportedIterableToArray(e2) || _nonIterableSpread();
}
function _arrayWithoutHoles(e2) {
  if (Array.isArray(e2))
    return _arrayLikeToArray(e2);
}
function _iterableToArray(e2) {
  if ("undefined" != typeof Symbol && null != e2[Symbol.iterator] || null != e2["@@iterator"])
    return Array.from(e2);
}
function _unsupportedIterableToArray(e2, t) {
  if (e2) {
    if ("string" == typeof e2)
      return _arrayLikeToArray(e2, t);
    var r = Object.prototype.toString.call(e2).slice(8, -1);
    return "Object" === r && e2.constructor && (r = e2.constructor.name), "Map" === r || "Set" === r ? Array.from(e2) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e2, t) : void 0;
  }
}
function _arrayLikeToArray(e2, t) {
  (null == t || t > e2.length) && (t = e2.length);
  for (var r = 0, i = new Array(t); r < t; r++)
    i[r] = e2[r];
  return i;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function createCommonjsModule(e2, t) {
  return t = { exports: {} }, e2(t, t.exports), t.exports;
}
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
function cn(e2) {
  return e2.map(function(e3) {
    return false === e3 ? null : e3;
  }).join(" ").replace(/\s+/g, " ").trim();
}
function slideSize(e2, t) {
  return 100 / e2 * t / t;
}
function slideTraySize(e2, t) {
  return 100 * e2 / t;
}
function pct(e2) {
  return "".concat(e2, "%");
}
function equal(e2, t, r) {
  if (e2 === t)
    return true;
  var i = types[jkrosoType(e2)], n = types[jkrosoType(t)];
  return !(!i || i !== n) && i(e2, t, r);
}
function memoGaurd(e2) {
  return function(t, r, i) {
    if (!i)
      return e2(t, r, []);
    for (var n, s2 = i.length; n = i[--s2]; )
      if (n[0] === t && n[1] === r)
        return true;
    return e2(t, r, i);
  };
}
function arrayEqual(e2, t, r) {
  var i = e2.length;
  if (i !== t.length)
    return false;
  for (r.push([e2, t]); i--; )
    if (!equal(e2[i], t[i], r))
      return false;
  return true;
}
function objectEqual(e2, t, r) {
  if ("function" == typeof e2.equal)
    return r.push([e2, t]), e2.equal(t, r);
  var i = getEnumerableProperties(e2), n = getEnumerableProperties(t), s2 = i.length;
  if (s2 !== n.length)
    return false;
  for (i.sort(), n.sort(); s2--; )
    if (i[s2] !== n[s2])
      return false;
  for (r.push([e2, t]), s2 = i.length; s2--; ) {
    var o = i[s2];
    if (!equal(e2[o], t[o], r))
      return false;
  }
  return true;
}
function getEnumerableProperties(e2) {
  var t = [];
  for (var r in e2)
    "constructor" !== r && t.push(r);
  return t;
}
function isNonNullObject(e2) {
  return !!e2 && "object" == typeof e2;
}
function isSpecial(e2) {
  var t = Object.prototype.toString.call(e2);
  return "[object RegExp]" === t || "[object Date]" === t || isReactElement(e2);
}
function isReactElement(e2) {
  return e2.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(e2) {
  return Array.isArray(e2) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(e2, t) {
  return false !== t.clone && t.isMergeableObject(e2) ? deepmerge(emptyTarget(e2), e2, t) : e2;
}
function defaultArrayMerge(e2, t, r) {
  return e2.concat(t).map(function(e3) {
    return cloneUnlessOtherwiseSpecified(e3, r);
  });
}
function mergeObject(e2, t, r) {
  var i = {};
  return r.isMergeableObject(e2) && Object.keys(e2).forEach(function(t2) {
    i[t2] = cloneUnlessOtherwiseSpecified(e2[t2], r);
  }), Object.keys(t).forEach(function(n) {
    r.isMergeableObject(t[n]) && e2[n] ? i[n] = deepmerge(e2[n], t[n], r) : i[n] = cloneUnlessOtherwiseSpecified(t[n], r);
  }), i;
}
function deepmerge(e2, t, r) {
  (r = r || {}).arrayMerge = r.arrayMerge || defaultArrayMerge, r.isMergeableObject = r.isMergeableObject || isMergeableObject;
  var i = Array.isArray(t);
  return i === Array.isArray(e2) ? i ? r.arrayMerge(e2, t, r) : mergeObject(e2, t, r) : cloneUnlessOtherwiseSpecified(t, r);
}
function WithStore(e2) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
    return {};
  }, r = function(r2) {
    function i(e3, r3) {
      var s2;
      return _classCallCheck(this, i), s2 = n.call(this, e3, r3), s2.state = t(_objectSpread2({}, r3.state)), s2.updateStateProps = s2.updateStateProps.bind(_assertThisInitialized(s2)), s2;
    }
    _inherits(i, r2);
    var n = _createSuper(i);
    return _createClass(i, [{ key: "componentDidMount", value: function() {
      this.context.subscribe(this.updateStateProps);
    } }, { key: "shouldComponentUpdate", value: function(e3, t2) {
      return !equals(t2, this.state) || !equals(e3, this.props);
    } }, { key: "componentWillUnmount", value: function() {
      this.context.unsubscribe(this.updateStateProps);
    } }, { key: "updateStateProps", value: function() {
      this.setState(t(_objectSpread2({}, this.context.state)));
    } }, { key: "render", value: function() {
      var t2 = this, r3 = deepmerge_1(this.state, this.props);
      return import_react.default.createElement(e2, _extends({ ref: function(e3) {
        t2.instance = e3;
      } }, r3, { carouselStore: { getStoreState: this.context.getStoreState, masterSpinnerError: this.context.masterSpinnerError, masterSpinnerSuccess: this.context.masterSpinnerSuccess, setStoreState: this.context.setStoreState, subscribeMasterSpinner: this.context.subscribeMasterSpinner, unsubscribeAllMasterSpinner: this.context.unsubscribeAllMasterSpinner, unsubscribeMasterSpinner: this.context.unsubscribeMasterSpinner } }), this.props.children);
    } }]), i;
  }(import_react.default.Component);
  return _defineProperty(r, "contextType", Context), _defineProperty(r, "propTypes", { children: CarouselPropTypes.children }), _defineProperty(r, "defaultProps", { children: null }), r;
}
var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret;
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function e2(e3, t2, r2, i, n, s2) {
    if (s2 !== ReactPropTypesSecret_1) {
      var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw o.name = "Invariant Violation", o;
    }
  }
  function t() {
    return e2;
  }
  e2.isRequired = e2;
  var r = { array: e2, bigint: e2, bool: e2, func: e2, number: e2, object: e2, string: e2, symbol: e2, any: e2, arrayOf: t, element: e2, elementType: e2, instanceOf: t, node: e2, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: emptyFunctionWithReset, resetWarningCache: emptyFunction };
  return r.PropTypes = r, r;
};
var propTypes = createCommonjsModule(function(e2) {
  e2.exports = factoryWithThrowingShims();
});
var LOADING = "loading";
var SUCCESS = "success";
var ERROR = "error";
var CarouselPropTypes = { children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]), direction: propTypes.oneOf(["forward", "backward"]), height: function(e2, t) {
  var r = e2[t];
  return "vertical" !== e2.orientation || null !== r && "number" == typeof r ? null : new Error("Missing required property '".concat(t, "' when orientation is vertical.  You must supply a number representing the height in pixels"));
}, orientation: propTypes.oneOf(["horizontal", "vertical"]), isBgImage: function(e2, t) {
  return true === e2[t] && "img" === e2.tag ? new Error("HTML img elements should not have a backgroundImage.  Please use ".concat(t, " for other block-level HTML tags, like div, a, section, etc...")) : null;
} };
var boundedRange = function(e2) {
  var t = e2.min, r = e2.max, i = e2.x;
  return Math.min(r, Math.max(t, i));
};
var s = { buttonBack: "buttonBack___1mlaL" };
var _excluded = ["carouselStore", "className", "currentSlide", "disabled", "onClick", "step", "totalSlides", "visibleSlides", "infinite"];
var ButtonBack = function(e2) {
  function t(e3) {
    var i;
    return _classCallCheck(this, t), i = r.call(this, e3), i.handleOnClick = i.handleOnClick.bind(_assertThisInitialized(i)), i;
  }
  _inherits(t, e2);
  var r = _createSuper(t);
  return _createClass(t, [{ key: "handleOnClick", value: function(e3) {
    var t2 = this.props, r2 = t2.carouselStore, i = t2.currentSlide, n = t2.onClick, s2 = t2.step, o = t2.infinite, a = t2.visibleSlides, l = t2.totalSlides - a, c = Math.max(i - s2, 0);
    o && (c = 0 === i ? l : c), r2.setStoreState({ currentSlide: c, isPlaying: false }, null !== n && n.call(this, e3));
  } }, { key: "render", value: function() {
    var e3 = this.props, r2 = (e3.carouselStore, e3.className), i = (e3.currentSlide, e3.disabled, e3.onClick, e3.step, e3.totalSlides, e3.visibleSlides, e3.infinite), n = _objectWithoutProperties(e3, _excluded), o = cn([s.buttonBack, "carousel__back-button", r2]), a = t.setDisabled(this.props.disabled, this.props.currentSlide, i);
    return import_react.default.createElement("button", _extends({ type: "button", "aria-label": "previous", className: o, onClick: this.handleOnClick, disabled: a }, n), this.props.children);
  } }], [{ key: "setDisabled", value: function(e3, t2, r2) {
    return null !== e3 ? e3 : 0 === t2 && !r2;
  } }]), t;
}(import_react.default.Component);
_defineProperty(ButtonBack, "propTypes", { carouselStore: propTypes.object.isRequired, children: CarouselPropTypes.children.isRequired, className: propTypes.string, currentSlide: propTypes.number.isRequired, disabled: propTypes.bool, onClick: propTypes.func, step: propTypes.number.isRequired, totalSlides: propTypes.number.isRequired, visibleSlides: propTypes.number.isRequired, infinite: propTypes.bool }), _defineProperty(ButtonBack, "defaultProps", { className: null, disabled: null, onClick: null, infinite: false });
var jkrosoType = createCommonjsModule(function(e2, t) {
  var r = {}.toString, i = "undefined" != typeof window ? window.Node : Function;
  e2.exports = t = function(e3) {
    var t2 = typeof e3;
    if ("object" != t2)
      return t2;
    if (t2 = n[r.call(e3)], "object" == t2)
      return e3 instanceof Map ? "map" : e3 instanceof Set ? "set" : "object";
    if (t2)
      return t2;
    if (e3 instanceof i)
      switch (e3.nodeType) {
        case 1:
          return "element";
        case 3:
          return "text-node";
        case 9:
          return "document";
        case 11:
          return "document-fragment";
        default:
          return "dom-node";
      }
  };
  var n = t.types = { "[object Function]": "function", "[object Date]": "date", "[object RegExp]": "regexp", "[object Arguments]": "arguments", "[object Array]": "array", "[object Set]": "set", "[object String]": "string", "[object Null]": "null", "[object Undefined]": "undefined", "[object Number]": "number", "[object Boolean]": "boolean", "[object Object]": "object", "[object Map]": "map", "[object Text]": "text-node", "[object Uint8Array]": "bit-array", "[object Uint16Array]": "bit-array", "[object Uint32Array]": "bit-array", "[object Uint8ClampedArray]": "bit-array", "[object Error]": "error", "[object FormData]": "form-data", "[object File]": "file", "[object Blob]": "blob" };
});
var jkrosoType_1 = jkrosoType.types;
var types = {};
types.number = function(e2, t) {
  return e2 !== e2 && t !== t;
}, types.function = function(e2, t, r) {
  return e2.toString() === t.toString() && types.object(e2, t, r) && equal(e2.prototype, t.prototype);
}, types.date = function(e2, t) {
  return +e2 == +t;
}, types.regexp = function(e2, t) {
  return e2.toString() === t.toString();
}, types.element = function(e2, t) {
  return e2.outerHTML === t.outerHTML;
}, types.textnode = function(e2, t) {
  return e2.textContent === t.textContent;
}, types.arguments = types["bit-array"] = types.array = memoGaurd(arrayEqual), types.object = memoGaurd(objectEqual);
var equals = equal;
var isMergeableObject = function(e2) {
  return isNonNullObject(e2) && !isSpecial(e2);
};
var canUseSymbol = "function" == typeof Symbol && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
deepmerge.all = function(e2, t) {
  if (!Array.isArray(e2))
    throw new Error("first argument should be an array");
  return e2.reduce(function(e3, r) {
    return deepmerge(e3, r, t);
  }, {});
};
var deepmerge_1 = deepmerge;
var Context = import_react.default.createContext();
var deepFreeze = function e(t) {
  return Object.freeze(t), Object.getOwnPropertyNames(t).forEach(function(r) {
    !t.hasOwnProperty(r) || null === t[r] || "object" != typeof t[r] && "function" != typeof t[r] || Object.isFrozen(t[r]) || e(t[r]);
  }), t;
};
var DEFAULT_STATE = { masterSpinnerFinished: false };
var Store = function() {
  function e2(t) {
    _classCallCheck(this, e2), this.state = deepFreeze(deepmerge_1(DEFAULT_STATE, t)), this.subscriptions = [], this.masterSpinnerSubscriptions = {}, this.setStoreState = this.setStoreState.bind(this), this.getStoreState = this.getStoreState.bind(this), this.subscribe = this.subscribe.bind(this), this.unsubscribe = this.unsubscribe.bind(this), this.updateSubscribers = this.updateSubscribers.bind(this), this.subscribeMasterSpinner = this.subscribeMasterSpinner.bind(this), this.unsubscribeMasterSpinner = this.unsubscribeMasterSpinner.bind(this), this.unsubscribeAllMasterSpinner = this.unsubscribeAllMasterSpinner.bind(this), this.masterSpinnerSuccess = this.masterSpinnerSuccess.bind(this), this.masterSpinnerError = this.masterSpinnerError.bind(this);
  }
  return _createClass(e2, [{ key: "setStoreState", value: function(e3, t) {
    this.state = deepFreeze(deepmerge_1(this.state, e3)), this.updateSubscribers(t);
  } }, { key: "getStoreState", value: function() {
    return deepmerge_1({}, this.state);
  } }, { key: "subscribe", value: function(e3) {
    this.subscriptions.push(e3);
  } }, { key: "unsubscribe", value: function(e3) {
    var t = this.subscriptions.indexOf(e3);
    -1 !== t && this.subscriptions.splice(t, 1);
  } }, { key: "updateSubscribers", value: function(e3) {
    this.subscriptions.forEach(function(e4) {
      return e4();
    }), "function" == typeof e3 && e3(this.getStoreState());
  } }, { key: "subscribeMasterSpinner", value: function(e3) {
    -1 === Object.keys(this.masterSpinnerSubscriptions).indexOf(e3) && (this.masterSpinnerSubscriptions[e3] = { success: false, error: false, complete: false });
  } }, { key: "unsubscribeMasterSpinner", value: function(e3) {
    return -1 !== Object.keys(this.masterSpinnerSubscriptions).indexOf(e3) && (this.setMasterSpinnerFinished(), delete this.masterSpinnerSubscriptions[e3]);
  } }, { key: "unsubscribeAllMasterSpinner", value: function() {
    this.masterSpinnerSubscriptions = {}, this.setMasterSpinnerFinished();
  } }, { key: "masterSpinnerSuccess", value: function(e3) {
    this.masterSpinnerSubscriptions[e3].success = true, this.masterSpinnerSubscriptions[e3].complete = true, this.setMasterSpinnerFinished();
  } }, { key: "masterSpinnerError", value: function(e3) {
    this.masterSpinnerSubscriptions[e3].error = true, this.masterSpinnerSubscriptions[e3].complete = true, this.setMasterSpinnerFinished();
  } }, { key: "setMasterSpinnerFinished", value: function() {
    this.setStoreState({ masterSpinnerFinished: this.isMasterSpinnerFinished() });
  } }, { key: "isMasterSpinnerFinished", value: function() {
    var e3 = this;
    return 0 === Object.keys(this.masterSpinnerSubscriptions).filter(function(t) {
      return true !== e3.masterSpinnerSubscriptions[t].complete;
    }).length;
  } }]), e2;
}();
var _excluded$1 = ["children", "className", "currentSlide", "disableAnimation", "disableKeyboard", "hasMasterSpinner", "interval", "isPageScrollLocked", "isPlaying", "lockOnWindowScroll", "naturalSlideHeight", "naturalSlideWidth", "orientation", "playDirection", "step", "dragStep", "tag", "totalSlides", "touchEnabled", "dragEnabled", "visibleSlides", "infinite", "isIntrinsicHeight"];
var _class;
var CarouselProvider = (_class = function(e2) {
  function t(e3) {
    var i;
    if (_classCallCheck(this, t), i = r.call(this, e3), e3.isIntrinsicHeight && "horizontal" !== e3.orientation)
      throw Error('isIntrinsicHeight can only be used in "horizontal" orientation. See Readme for more information.');
    var n = { currentSlide: e3.currentSlide, disableAnimation: e3.disableAnimation, disableKeyboard: e3.disableKeyboard, hasMasterSpinner: e3.hasMasterSpinner, imageErrorCount: 0, imageSuccessCount: 0, interval: e3.interval, isPageScrollLocked: e3.isPageScrollLocked, isPlaying: e3.isPlaying, lockOnWindowScroll: e3.lockOnWindowScroll, masterSpinnerThreshold: 0, naturalSlideHeight: e3.naturalSlideHeight, naturalSlideWidth: e3.naturalSlideWidth, orientation: e3.orientation, playDirection: e3.playDirection, privateUnDisableAnimation: false, slideSize: slideSize(e3.totalSlides, e3.visibleSlides), slideTraySize: slideTraySize(e3.totalSlides, e3.visibleSlides), step: e3.step, dragStep: e3.dragStep, totalSlides: e3.totalSlides, touchEnabled: e3.touchEnabled, dragEnabled: e3.dragEnabled, visibleSlides: e3.visibleSlides, infinite: e3.infinite, isIntrinsicHeight: e3.isIntrinsicHeight };
    return i.carouselStore = new Store(n), i;
  }
  _inherits(t, e2);
  var r = _createSuper(t);
  return _createClass(t, [{ key: "componentDidUpdate", value: function(e3) {
    var t2 = this, r2 = {};
    ["currentSlide", "disableAnimation", "disableKeyboard", "hasMasterSpinner", "interval", "isPlaying", "naturalSlideHeight", "naturalSlideWidth", "lockOnWindowScroll", "orientation", "playDirection", "step", "dragStep", "totalSlides", "touchEnabled", "dragEnabled", "visibleSlides"].forEach(function(i) {
      e3[i] !== t2.props[i] && (r2[i] = t2.props[i]);
    }), this.props.currentSlide !== e3.currentSlide && !this.props.disableAnimation && (r2.disableAnimation = true, r2.privateUnDisableAnimation = true), this.props.totalSlides === e3.totalSlides && this.props.visibleSlides === e3.visibleSlides || (r2.slideSize = slideSize(this.props.totalSlides, this.props.visibleSlides), r2.slideTraySize = slideTraySize(this.props.totalSlides, this.props.visibleSlides)), this.carouselStore.state.currentSlide >= this.props.totalSlides && (r2.currentSlide = Math.max(this.props.totalSlides - 1, 0)), Object.keys(r2).length > 0 && this.carouselStore.setStoreState(r2);
  } }, { key: "componentWillUnmount", value: function() {
    this.carouselStore.unsubscribeAllMasterSpinner();
  } }, { key: "getStore", value: function() {
    return this.carouselStore;
  } }, { key: "render", value: function() {
    var e3 = this.props, t2 = (e3.children, e3.className, e3.currentSlide, e3.disableAnimation, e3.disableKeyboard, e3.hasMasterSpinner, e3.interval, e3.isPageScrollLocked, e3.isPlaying, e3.lockOnWindowScroll, e3.naturalSlideHeight, e3.naturalSlideWidth, e3.orientation, e3.playDirection, e3.step, e3.dragStep, e3.tag), r2 = (e3.totalSlides, e3.touchEnabled, e3.dragEnabled, e3.visibleSlides, e3.infinite, e3.isIntrinsicHeight, _objectWithoutProperties(e3, _excluded$1)), i = cn(["carousel", this.props.className]);
    return import_react.default.createElement(t2, _extends({ className: i }, r2), import_react.default.createElement(Context.Provider, { value: this.carouselStore }, this.props.children));
  } }]), t;
}(import_react.default.Component), _defineProperty(_class, "propTypes", { children: CarouselPropTypes.children.isRequired, className: propTypes.string, currentSlide: propTypes.number, disableAnimation: propTypes.bool, disableKeyboard: propTypes.bool, hasMasterSpinner: propTypes.bool, interval: propTypes.number, isPageScrollLocked: propTypes.bool, isPlaying: propTypes.bool, lockOnWindowScroll: propTypes.bool, naturalSlideHeight: propTypes.number.isRequired, naturalSlideWidth: propTypes.number.isRequired, orientation: CarouselPropTypes.orientation, playDirection: CarouselPropTypes.direction, step: propTypes.number, dragStep: propTypes.number, tag: propTypes.string, totalSlides: propTypes.number.isRequired, touchEnabled: propTypes.bool, dragEnabled: propTypes.bool, visibleSlides: propTypes.number, infinite: propTypes.bool, isIntrinsicHeight: propTypes.bool }), _defineProperty(_class, "defaultProps", { className: null, currentSlide: 0, disableAnimation: false, disableKeyboard: false, hasMasterSpinner: false, interval: 5e3, isPageScrollLocked: false, isPlaying: false, lockOnWindowScroll: false, orientation: "horizontal", playDirection: "forward", step: 1, dragStep: 1, tag: "div", touchEnabled: true, dragEnabled: true, visibleSlides: 1, infinite: false, isIntrinsicHeight: false }), _class);
Context.Consumer;
var index = WithStore(ButtonBack, function(e2) {
  return { currentSlide: e2.currentSlide, step: e2.step, totalSlides: e2.totalSlides, visibleSlides: e2.visibleSlides, infinite: e2.infinite };
});
var s$1 = { buttonFirst: "buttonFirst___2rhFr" };
var _excluded$2 = ["carouselStore", "className", "currentSlide", "disabled", "onClick", "totalSlides"];
var _class$1;
var ButtonFirst = (_class$1 = function(e2) {
  function t() {
    var e3;
    return _classCallCheck(this, t), e3 = r.call(this), e3.handleOnClick = e3.handleOnClick.bind(_assertThisInitialized(e3)), e3;
  }
  _inherits(t, e2);
  var r = _createSuper(t);
  return _createClass(t, [{ key: "handleOnClick", value: function(e3) {
    var t2 = this.props, r2 = t2.carouselStore, i = t2.onClick;
    r2.setStoreState({ currentSlide: 0, isPlaying: false }, null !== i && i.call(this, e3));
  } }, { key: "render", value: function() {
    var e3 = this.props, t2 = (e3.carouselStore, e3.className), r2 = e3.currentSlide, i = e3.disabled, n = (e3.onClick, e3.totalSlides, _objectWithoutProperties(e3, _excluded$2)), s2 = cn([s$1.buttonFirst, "carousel__first-button", t2]), o = null !== i ? i : 0 === r2;
    return import_react.default.createElement("button", _extends({ type: "button", "aria-label": "first", className: s2, onClick: this.handleOnClick, disabled: o }, n), this.props.children);
  } }]), t;
}(import_react.default.Component), _defineProperty(_class$1, "propTypes", { carouselStore: propTypes.object.isRequired, children: CarouselPropTypes.children.isRequired, className: propTypes.string, currentSlide: propTypes.number.isRequired, disabled: propTypes.bool, onClick: propTypes.func, totalSlides: propTypes.number.isRequired }), _defineProperty(_class$1, "defaultProps", { className: null, disabled: null, onClick: null }), _class$1);
var index$1 = WithStore(ButtonFirst, function(e2) {
  return { currentSlide: e2.currentSlide, totalSlides: e2.totalSlides };
});
var s$2 = { buttonNext: "buttonNext___2mOCa" };
var _excluded$3 = ["carouselStore", "className", "currentSlide", "disabled", "onClick", "step", "totalSlides", "visibleSlides", "infinite"];
var _class$2;
var ButtonNext = (_class$2 = function(e2) {
  function t(e3) {
    var i;
    return _classCallCheck(this, t), i = r.call(this, e3), i.handleOnClick = i.handleOnClick.bind(_assertThisInitialized(i)), i;
  }
  _inherits(t, e2);
  var r = _createSuper(t);
  return _createClass(t, [{ key: "handleOnClick", value: function(e3) {
    var t2 = this.props, r2 = t2.currentSlide, i = t2.onClick, n = t2.step, s2 = t2.carouselStore, o = t2.infinite, a = t2.totalSlides - t2.visibleSlides, l = n + r2, c = Math.min(l, a);
    o && (c = a === r2 ? 0 : c), s2.setStoreState({ currentSlide: c, isPlaying: false }, null !== i && i.call(this, e3));
  } }, { key: "render", value: function() {
    var e3 = this.props, r2 = (e3.carouselStore, e3.className), i = e3.currentSlide, n = e3.disabled, s2 = (e3.onClick, e3.step, e3.totalSlides), o = e3.visibleSlides, a = e3.infinite, l = _objectWithoutProperties(e3, _excluded$3), c = cn([s$2.buttonNext, "carousel__next-button", r2]), u = t.setDisabled(n, i, o, s2, a);
    return import_react.default.createElement("button", _extends({ type: "button", "aria-label": "next", className: c, onClick: this.handleOnClick, disabled: u }, l), this.props.children);
  } }], [{ key: "setDisabled", value: function(e3, t2, r2, i, n) {
    return null !== e3 ? e3 : t2 >= i - r2 && !n;
  } }]), t;
}(import_react.default.PureComponent), _defineProperty(_class$2, "propTypes", { carouselStore: propTypes.object.isRequired, children: CarouselPropTypes.children.isRequired, className: propTypes.string, currentSlide: propTypes.number.isRequired, disabled: propTypes.bool, onClick: propTypes.func, step: propTypes.number.isRequired, totalSlides: propTypes.number.isRequired, visibleSlides: propTypes.number.isRequired, infinite: propTypes.bool }), _defineProperty(_class$2, "defaultProps", { className: null, disabled: null, onClick: null, infinite: false }), _class$2);
var index$2 = WithStore(ButtonNext, function(e2) {
  return { currentSlide: e2.currentSlide, step: e2.step, totalSlides: e2.totalSlides, visibleSlides: e2.visibleSlides, infinite: e2.infinite };
});
var s$3 = { buttonLast: "buttonLast___2yuh0" };
var _excluded$4 = ["carouselStore", "className", "currentSlide", "disabled", "onClick", "totalSlides", "visibleSlides"];
var _class$3;
var ButtonLast = (_class$3 = function(e2) {
  function t() {
    var e3;
    return _classCallCheck(this, t), e3 = r.call(this), e3.handleOnClick = e3.handleOnClick.bind(_assertThisInitialized(e3)), e3;
  }
  _inherits(t, e2);
  var r = _createSuper(t);
  return _createClass(t, [{ key: "handleOnClick", value: function(e3) {
    var t2 = this.props, r2 = t2.carouselStore, i = t2.onClick, n = t2.totalSlides, s2 = t2.visibleSlides;
    r2.setStoreState({ currentSlide: n - s2, isPlaying: false }, null !== i && i.call(this, e3));
  } }, { key: "render", value: function() {
    var e3 = this.props, t2 = (e3.carouselStore, e3.className), r2 = e3.currentSlide, i = e3.disabled, n = (e3.onClick, e3.totalSlides), s2 = e3.visibleSlides, o = _objectWithoutProperties(e3, _excluded$4), a = cn([s$3.buttonLast, "carousel__last-button", t2]), l = null !== i ? i : r2 >= n - s2;
    return import_react.default.createElement("button", _extends({ type: "button", "aria-label": "last", className: a, onClick: this.handleOnClick, disabled: l }, o), this.props.children);
  } }]), t;
}(import_react.default.Component), _defineProperty(_class$3, "propTypes", { carouselStore: propTypes.object.isRequired, children: CarouselPropTypes.children.isRequired, className: propTypes.string, currentSlide: propTypes.number.isRequired, disabled: propTypes.bool, onClick: propTypes.func, totalSlides: propTypes.number.isRequired, visibleSlides: propTypes.number.isRequired }), _defineProperty(_class$3, "defaultProps", { className: null, disabled: null, onClick: null }), _class$3);
var index$3 = WithStore(ButtonLast, function(e2) {
  return { currentSlide: e2.currentSlide, totalSlides: e2.totalSlides, visibleSlides: e2.visibleSlides };
});
var s$4 = { buttonNext: "buttonNext___3Lm3s" };
var _excluded$5 = ["carouselStore", "children", "childrenPaused", "childrenPlaying", "className", "isPlaying", "onClick"];
var _class$4;
var ButtonPlay = (_class$4 = function(e2) {
  function t(e3) {
    var i;
    return _classCallCheck(this, t), i = r.call(this, e3), i.handleOnClick = i.handleOnClick.bind(_assertThisInitialized(i)), i;
  }
  _inherits(t, e2);
  var r = _createSuper(t);
  return _createClass(t, [{ key: "handleOnClick", value: function(e3) {
    var t2 = this.props.onClick;
    this.props.carouselStore.setStoreState({ isPlaying: !this.props.isPlaying }, null !== t2 && t2.call(this, e3));
  } }, { key: "render", value: function() {
    var e3 = this.props, t2 = (e3.carouselStore, e3.children, e3.childrenPaused), r2 = e3.childrenPlaying, i = e3.className, n = e3.isPlaying, s2 = (e3.onClick, _objectWithoutProperties(e3, _excluded$5)), o = cn([s$4.buttonNext, "carousel__play-button", i]);
    return import_react.default.createElement("button", _extends({ type: "button", "aria-label": "play", className: o, onClick: this.handleOnClick }, s2), n && r2, !n && t2, this.props.children);
  } }]), t;
}(import_react.default.PureComponent), _defineProperty(_class$4, "propTypes", { carouselStore: propTypes.object.isRequired, children: propTypes.node, childrenPaused: propTypes.node, childrenPlaying: propTypes.node, className: propTypes.string, isPlaying: propTypes.bool.isRequired, onClick: propTypes.func }), _defineProperty(_class$4, "defaultProps", { children: null, childrenPaused: null, childrenPlaying: null, className: null, onClick: null }), _class$4);
var index$4 = WithStore(ButtonPlay, function(e2) {
  return { isPlaying: e2.isPlaying };
});
var s$5 = { dot: "dot___3c3SI" };
var _excluded$6 = ["carouselStore", "children", "className", "currentSlide", "disabled", "onClick", "selected", "slide", "totalSlides", "visibleSlides"];
var _class$5;
var Dot = (_class$5 = function(e2) {
  function t(e3) {
    var i;
    return _classCallCheck(this, t), i = r.call(this, e3), i.handleOnClick = i.handleOnClick.bind(_assertThisInitialized(i)), i;
  }
  _inherits(t, e2);
  var r = _createSuper(t);
  return _createClass(t, [{ key: "handleOnClick", value: function(e3) {
    var t2 = this.props, r2 = t2.carouselStore, i = t2.onClick, n = t2.slide, s2 = t2.totalSlides, o = t2.visibleSlides, a = n >= s2 - o ? s2 - o : n;
    r2.setStoreState({ currentSlide: a, isPlaying: false }, null !== i && i.call(this, e3));
  } }, { key: "render", value: function() {
    var e3 = this.props, t2 = (e3.carouselStore, e3.children, e3.className), r2 = e3.currentSlide, i = e3.disabled, n = (e3.onClick, e3.selected), s2 = e3.slide, o = (e3.totalSlides, e3.visibleSlides), a = _objectWithoutProperties(e3, _excluded$6), l = s2 >= r2 && s2 < r2 + o, c = "boolean" == typeof n ? n : l, u = true === l, p = "boolean" == typeof i ? i : u, d = cn([s$5.dot, c && s$5.dotSelected, "carousel__dot", "carousel__dot--".concat(s2), c && "carousel__dot--selected", t2]);
    return import_react.default.createElement("button", _extends({ "aria-label": "slide dot", type: "button", onClick: this.handleOnClick, className: d, disabled: p }, a), this.props.children);
  } }]), t;
}(import_react.default.Component), _defineProperty(_class$5, "propTypes", { carouselStore: propTypes.object.isRequired, children: CarouselPropTypes.children, className: propTypes.string, currentSlide: propTypes.number.isRequired, disabled: propTypes.bool, onClick: propTypes.func, selected: propTypes.bool, slide: propTypes.number.isRequired, totalSlides: propTypes.number.isRequired, visibleSlides: propTypes.number.isRequired }), _defineProperty(_class$5, "defaultProps", { children: null, className: null, disabled: null, onClick: null, selected: null }), _class$5);
var Dot$1 = WithStore(Dot, function(e2) {
  return { currentSlide: e2.currentSlide, totalSlides: e2.totalSlides, visibleSlides: e2.visibleSlides };
});
var s$6 = {};
var _excluded$7 = ["renderDots"];
var _excluded2 = ["carouselStore", "children", "className", "currentSlide", "dotNumbers", "totalSlides", "visibleSlides", "disableActiveDots", "showAsSelectedForCurrentSlideOnly", "renderDots"];
var _class$6;
var DotGroup = (_class$6 = function(e2) {
  function t() {
    return _classCallCheck(this, t), r.apply(this, arguments);
  }
  _inherits(t, e2);
  var r = _createSuper(t);
  return _createClass(t, [{ key: "renderDots", value: function() {
    var e3 = this.props, t2 = e3.currentSlide, r2 = e3.totalSlides, i = e3.visibleSlides, n = e3.disableActiveDots, s2 = e3.showAsSelectedForCurrentSlideOnly, o = e3.renderDots;
    if (o) {
      var a = this.props;
      a.renderDots;
      return o(_objectWithoutProperties(a, _excluded$7));
    }
    for (var l = [], c = 0; c < r2; c += 1) {
      var u = c >= t2 && c < t2 + i, p = c === t2, d = s2 ? p : u, h = c >= r2 - i ? r2 - i : c;
      l.push(import_react.default.createElement(Dot$1, { key: c, slide: h, selected: d, disabled: !!n && d }, import_react.default.createElement("span", { className: cn["carousel__dot-group-dot"] }, this.props.dotNumbers && c + 1)));
    }
    return l;
  } }, { key: "render", value: function() {
    var e3 = this.props, t2 = (e3.carouselStore, e3.children), r2 = e3.className, i = (e3.currentSlide, e3.dotNumbers, e3.totalSlides, e3.visibleSlides, e3.disableActiveDots, e3.showAsSelectedForCurrentSlideOnly, e3.renderDots, _objectWithoutProperties(e3, _excluded2)), n = cn([s$6.DotGroup, "carousel__dot-group", r2]);
    return import_react.default.createElement("div", _extends({ className: n }, i), this.renderDots(), t2);
  } }]), t;
}(import_react.default.Component), _defineProperty(_class$6, "propTypes", { children: CarouselPropTypes.children, className: propTypes.string, currentSlide: propTypes.number.isRequired, carouselStore: propTypes.object.isRequired, totalSlides: propTypes.number.isRequired, visibleSlides: propTypes.number.isRequired, dotNumbers: propTypes.bool, disableActiveDots: propTypes.bool, showAsSelectedForCurrentSlideOnly: propTypes.bool, renderDots: propTypes.func }), _defineProperty(_class$6, "defaultProps", { children: null, className: null, dotNumbers: false, disableActiveDots: true, showAsSelectedForCurrentSlideOnly: false, renderDots: null }), _class$6);
var index$5 = WithStore(DotGroup, function(e2) {
  return { currentSlide: e2.currentSlide, totalSlides: e2.totalSlides, visibleSlides: e2.visibleSlides };
});
var s$7 = { image: "image___xtQGH" };
var _excluded$8 = ["src", "alt"];
var _excluded2$1 = ["carouselStore", "children", "className", "hasMasterSpinner", "isBgImage", "onError", "onLoad", "renderError", "renderLoading", "style", "tag"];
var Image = function(e2) {
  function t(e3) {
    var i;
    return _classCallCheck(this, t), i = r.call(this, e3), i.state = { imageStatus: LOADING }, i.handleImageLoad = i.handleImageLoad.bind(_assertThisInitialized(i)), i.handleImageError = i.handleImageError.bind(_assertThisInitialized(i)), i.image = null, i;
  }
  _inherits(t, e2);
  var r = _createSuper(t);
  return _createClass(t, [{ key: "componentDidMount", value: function() {
    t.subscribeMasterSpinner(this.props), this.initImage();
  } }, { key: "componentDidUpdate", value: function(e3) {
    e3.src !== this.props.src && (t.unsubscribeMasterSpinner(e3), t.subscribeMasterSpinner(this.props), this.initImage());
  } }, { key: "componentWillUnmount", value: function() {
    t.unsubscribeMasterSpinner(this.props), this.image.removeEventListener("load", this.handleImageLoad), this.image.removeEventListener("error", this.handleImageError), this.image = null;
  } }, { key: "initImage", value: function() {
    if (this.setState({ imageStatus: LOADING }), this.image = document.createElement("img"), this.image.addEventListener("load", this.handleImageLoad, false), this.image.addEventListener("error", this.handleImageError, false), this.image.src = this.props.src, this.image.readyState || this.image.complete) {
      var e3 = this.image.src;
      this.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", this.image.src = e3;
    }
  } }, { key: "handleImageLoad", value: function(e3) {
    this.setState({ imageStatus: SUCCESS }), this.props.hasMasterSpinner && this.props.carouselStore.masterSpinnerSuccess(this.props.src), this.props.onLoad && this.props.onLoad(e3);
  } }, { key: "handleImageError", value: function(e3) {
    this.setState({ imageStatus: ERROR }), this.props.hasMasterSpinner && this.props.carouselStore.masterSpinnerError(this.props.src), this.props.onError && this.props.onError(e3);
  } }, { key: "tempTag", value: function() {
    return "img" === this.props.tag ? "div" : this.props.tag;
  } }, { key: "customRender", value: function(e3) {
    return "function" == typeof this.props[e3] ? this.props[e3]() : this.props.children;
  } }, { key: "renderLoading", value: function(e3) {
    var t2 = this.tempTag(), r2 = cn([s$7.image, s$7.imageLoading, "carousel__image", this.props.isBgImage && "carousel__image--with-background", "carousel__image--loading", this.props.className]);
    return import_react.default.createElement(t2, _extends({ className: r2 }, e3), this.customRender("renderLoading"));
  } }, { key: "renderError", value: function(e3) {
    var t2 = this.tempTag(), r2 = cn([s$7.image, s$7.imageError, "carousel__image", this.props.isBgImage && "carousel__image--with-background", "carousel__image--error", this.props.className]);
    return import_react.default.createElement(t2, _extends({ className: r2 }, e3), this.customRender("renderError"));
  } }, { key: "renderSuccess", value: function(e3) {
    var t2 = this.props, r2 = t2.style, i = t2.tag, n = cn([s$7.image, "carousel__image", this.props.isBgImage && "carousel__image--with-background", "carousel__image--success", this.props.className]), s2 = _extends({}, r2), o = e3;
    if ("img" !== i) {
      var a = e3.src;
      e3.alt;
      o = _objectWithoutProperties(e3, _excluded$8), s2 = _extends({}, r2, { backgroundImage: 'url("'.concat(a, '")'), backgroundSize: "cover" });
    }
    return import_react.default.createElement(i, _extends({ className: n, style: s2 }, o), this.props.children);
  } }, { key: "render", value: function() {
    var e3 = this.props, t2 = (e3.carouselStore, e3.children, e3.className, e3.hasMasterSpinner, e3.isBgImage, e3.onError, e3.onLoad, e3.renderError, e3.renderLoading, e3.style, e3.tag, _objectWithoutProperties(e3, _excluded2$1));
    switch (this.state.imageStatus) {
      case LOADING:
        return this.renderLoading(t2);
      case SUCCESS:
        return this.renderSuccess(t2);
      case ERROR:
        return this.renderError(t2);
      default:
        throw new Error("unknown value for this.state.imageStatus");
    }
  } }], [{ key: "subscribeMasterSpinner", value: function(e3) {
    e3.hasMasterSpinner && e3.carouselStore.subscribeMasterSpinner(e3.src);
  } }, { key: "unsubscribeMasterSpinner", value: function(e3) {
    e3.hasMasterSpinner && e3.carouselStore.unsubscribeMasterSpinner(e3.src);
  } }]), t;
}(import_react.default.Component);
_defineProperty(Image, "propTypes", { alt: propTypes.string, carouselStore: propTypes.object.isRequired, children: CarouselPropTypes.children, className: propTypes.string, hasMasterSpinner: propTypes.bool.isRequired, isBgImage: CarouselPropTypes.isBgImage, onError: propTypes.func, onLoad: propTypes.func, renderError: propTypes.func, renderLoading: propTypes.func, src: propTypes.string.isRequired, style: propTypes.object, tag: propTypes.string }), _defineProperty(Image, "defaultProps", { alt: "", children: null, className: null, isBgImage: false, onError: null, onLoad: null, renderError: null, renderLoading: null, style: null, tag: "img" });
var Image$1 = WithStore(Image, function(e2) {
  return { hasMasterSpinner: e2.hasMasterSpinner, orientation: e2.orientation };
});
var s$8 = { spinner: "spinner___27VUp", spin: "spin___S3UuE" };
var _excluded$9 = ["className"];
var _class$7;
var Spinner = (_class$7 = function(e2) {
  function t() {
    return _classCallCheck(this, t), r.apply(this, arguments);
  }
  _inherits(t, e2);
  var r = _createSuper(t);
  return _createClass(t, [{ key: "render", value: function() {
    var e3 = this.props, t2 = e3.className, r2 = _objectWithoutProperties(e3, _excluded$9), i = cn([s$8.spinner, "carousel__spinner", t2]);
    return import_react.default.createElement("div", _extends({ className: i }, r2));
  } }]), t;
}(import_react.default.PureComponent), _defineProperty(_class$7, "propTypes", { className: propTypes.string }), _defineProperty(_class$7, "defaultProps", { className: null }), _class$7);
var s$9 = { container: "container___2O72F", overlay: "overlay___IV4qY", hover: "hover___MYy31", zoom: "zoom___3kqYk", loading: "loading___1pvNI", imageLoadingSpinnerContainer: "imageLoadingSpinnerContainer___3UIPD" };
var _excluded$a = ["alt", "bgImageProps", "bgImageTag", "carouselStore", "className", "imageClassName", "overlayClassName", "isPinchZoomEnabled", "spinner", "src", "srcZoomed", "tag"];
var _class$8;
var MOUSE_SCALE = 2;
var MAX_TOUCH_SCALE = 3;
var ImageWithZoom = (_class$8 = function(e2) {
  function t(e3) {
    var i;
    return _classCallCheck(this, t), i = r.call(this, e3), i.state = { isImageLoading: true, isHovering: false, isZooming: false, x: null, y: null, scale: 1 }, i.tpCache = {}, i.handleImageComplete = i.handleImageComplete.bind(_assertThisInitialized(i)), i.handleOnMouseMove = i.handleOnMouseMove.bind(_assertThisInitialized(i)), i.handleOnMouseOut = i.handleOnMouseOut.bind(_assertThisInitialized(i)), i.handleOnMouseOver = i.handleOnMouseOver.bind(_assertThisInitialized(i)), i.handleOnTouchEnd = i.handleOnTouchEnd.bind(_assertThisInitialized(i)), i.handleOnTouchMove = i.handleOnTouchMove.bind(_assertThisInitialized(i)), i.handleOnTouchStart = i.handleOnTouchStart.bind(_assertThisInitialized(i)), i;
  }
  _inherits(t, e2);
  var r = _createSuper(t);
  return _createClass(t, [{ key: "componentDidUpdate", value: function(e3, t2) {
    false === t2.isZooming && true === this.state.isZooming && this.props.carouselStore.setStoreState({ isPageScrollLocked: true }), true === t2.isZooming && false === this.state.isZooming && this.props.carouselStore.setStoreState({ isPageScrollLocked: false });
  } }, { key: "handleImageComplete", value: function() {
    this.setState({ isImageLoading: false });
  } }, { key: "handleOnMouseOver", value: function() {
    this.state.isZooming || this.setState({ isHovering: true, scale: MOUSE_SCALE });
  } }, { key: "handleOnMouseOut", value: function() {
    this.state.isZooming || this.setState({ isHovering: false, scale: 1 });
  } }, { key: "handleOnMouseMove", value: function(e3) {
    if (!this.state.isZooming) {
      var t2 = pct(e3.nativeEvent.offsetX / e3.target.offsetWidth * 100), r2 = pct(e3.nativeEvent.offsetY / e3.target.offsetHeight * 100);
      this.setState({ x: t2, y: r2 });
    }
  } }, { key: "handleOnTouchStart", value: function(e3) {
    var t2 = this;
    this.props.isPinchZoomEnabled && (_toConsumableArray(e3.targetTouches).forEach(function(e4) {
      t2.tpCache[e4.identifier] = { clientX: e4.clientX, clientY: e4.clientY };
    }), this.setState(function(e4) {
      return { isZooming: e4.isZooming || Object.keys(t2.tpCache).length > 1 };
    }));
  } }, { key: "handleOnTouchMove", value: function(e3) {
    var r2 = this;
    if (this.state.isZooming) {
      e3.persist();
      var i = _toConsumableArray(e3.targetTouches).filter(function(e4) {
        return r2.tpCache[e4.identifier];
      }).slice(0, 2);
      if (2 === i.length) {
        e3.stopPropagation();
        var n = e3.target.getBoundingClientRect(), s2 = i[0].identifier, o = i[1].identifier, a = { x1: this.tpCache[s2].clientX, y1: this.tpCache[s2].clientY, x2: this.tpCache[o].clientX, y2: this.tpCache[o].clientY };
        a.distance = t.distanceBetweenTwoTouches(_objectSpread2({}, a));
        var l = t.midpointBetweenTwoTouches(_objectSpread2({}, a));
        a.cx = l.x, a.cy = l.y;
        var c = { x1: i[0].clientX, y1: i[0].clientY, x2: i[1].clientX, y2: i[1].clientY };
        c.distance = t.distanceBetweenTwoTouches(_objectSpread2({}, c));
        var u = t.midpointBetweenTwoTouches(_objectSpread2({}, c));
        c.cx = u.x, c.cy = u.y;
        var p = pct(boundedRange({ min: 0, max: 100, x: (c.cx - n.left) / n.width * 100 })), d = pct(boundedRange({ min: 0, max: 100, x: (c.cy - n.top) / n.height * 100 })), h = function(e4) {
          return boundedRange({ min: 1, max: MAX_TOUCH_SCALE, x: e4.scale + (c.distance - a.distance) / 100 });
        };
        this.setState(function(e4) {
          return { isZooming: 1 !== h(e4), scale: h(e4), x: p, y: d };
        });
      }
    }
  } }, { key: "handleOnTouchEnd", value: function(e3) {
    var t2 = this;
    this.props.isPinchZoomEnabled && (_toConsumableArray(e3.changedTouches).forEach(function(e4) {
      delete t2.tpCache[e4.identifier];
    }), 0 === Object.keys(this.tpCache).length && this.setState({ isZooming: false }));
  } }, { key: "renderLoading", value: function() {
    if (this.state.isImageLoading) {
      var e3 = this.props.spinner;
      return import_react.default.createElement("div", { className: cn([s$9.imageLoadingSpinnerContainer, "carousel__image-loading-spinner-container"]) }, e3 && e3(), !e3 && import_react.default.createElement(Spinner, null));
    }
    return null;
  } }, { key: "render", value: function() {
    var e3 = this.props, t2 = e3.alt, r2 = e3.bgImageProps, i = e3.bgImageTag, n = (e3.carouselStore, e3.className), s2 = e3.imageClassName, o = e3.overlayClassName, a = (e3.isPinchZoomEnabled, e3.spinner, e3.src), l = e3.srcZoomed, c = e3.tag, u = _objectWithoutProperties(e3, _excluded$a), p = cn([s$9.container, n]), d = cn([s$9.image, "carousel__zoom-image", s2]), h = cn([s$9.overlay, "carousel__zoom-image-overlay", this.state.isHovering && s$9.hover, this.state.isZooming && s$9.zoom, this.state.isHovering && "carousel__zoom-image-overlay--hovering", this.state.isZooming && "carousel__zoom-image-overlay--zooming", o]), S = {};
    return (this.state.isHovering || this.state.isZooming) && (S.transformOrigin = "".concat(this.state.x, " ").concat(this.state.y), S.transform = "scale(".concat(this.state.scale, ")")), import_react.default.createElement(c, _extends({ className: p }, u), import_react.default.createElement(Image$1, _extends({ alt: t2, className: d, tag: i, src: a, onLoad: this.handleImageComplete, onError: this.handleImageComplete }, r2)), import_react.default.createElement(Image$1, { className: h, tag: "div", src: l || a, style: S, isBgImage: true, onFocus: this.handleOnMouseOver, onMouseOver: this.handleOnMouseOver, onBlur: this.handleOnMouseOut, onMouseOut: this.handleOnMouseOut, onMouseMove: this.handleOnMouseMove, onTouchStart: this.handleOnTouchStart, onTouchEnd: this.handleOnTouchEnd, onTouchMove: this.handleOnTouchMove }), this.renderLoading());
  } }], [{ key: "midpointBetweenTwoTouches", value: function(e3) {
    var t2 = e3.x1, r2 = e3.y1;
    return { x: (t2 + e3.x2) / 2, y: (r2 + e3.y2) / 2 };
  } }, { key: "distanceBetweenTwoTouches", value: function(e3) {
    var t2 = e3.x1, r2 = e3.y1, i = e3.x2, n = e3.y2;
    return Math.sqrt(Math.pow(i - t2, 2) + Math.pow(n - r2, 2));
  } }]), t;
}(import_react.default.Component), _defineProperty(_class$8, "propTypes", { alt: propTypes.string, bgImageProps: propTypes.object, bgImageTag: propTypes.string, carouselStore: propTypes.object.isRequired, className: propTypes.string, imageClassName: propTypes.string, overlayClassName: propTypes.string, spinner: propTypes.func, src: propTypes.string.isRequired, srcZoomed: propTypes.string, tag: propTypes.string, isPinchZoomEnabled: propTypes.bool }), _defineProperty(_class$8, "defaultProps", { alt: void 0, bgImageProps: {}, bgImageTag: "div", className: null, imageClassName: null, overlayClassName: null, isPinchZoomEnabled: true, spinner: null, srcZoomed: null, tag: "div" }), _class$8);
var index$6 = WithStore(ImageWithZoom, function() {
  return {};
});
var s$a = { slide: "slide___3-Nqo", slideHorizontal: "slideHorizontal___1NzNV", slideInner: "slideInner___2mfX9", focusRing: "focusRing___1airF" };
var _excluded$b = ["ariaLabel", "carouselStore", "children", "className", "classNameHidden", "classNameVisible", "currentSlide", "index", "innerClassName", "innerTag", "naturalSlideHeight", "naturalSlideWidth", "onBlur", "onFocus", "orientation", "slideSize", "style", "tabIndex", "tag", "totalSlides", "visibleSlides", "isIntrinsicHeight"];
var _class$9;
var Slide = (_class$9 = function(e2) {
  function t(e3) {
    var i;
    return _classCallCheck(this, t), i = r.call(this, e3), i.handleOnFocus = i.handleOnFocus.bind(_assertThisInitialized(i)), i.handleOnBlur = i.handleOnBlur.bind(_assertThisInitialized(i)), i.state = { focused: false }, i;
  }
  _inherits(t, e2);
  var r = _createSuper(t);
  return _createClass(t, [{ key: "isVisible", value: function() {
    var e3 = this.props, t2 = e3.currentSlide, r2 = e3.index, i = e3.visibleSlides;
    return r2 >= t2 && r2 < t2 + i;
  } }, { key: "handleOnFocus", value: function(e3) {
    var t2 = this, r2 = this.props.onFocus;
    this.setState({ focused: true }, function() {
      null !== r2 && r2.call(t2, e3);
    });
  } }, { key: "handleOnBlur", value: function(e3) {
    var t2 = this, r2 = this.props.onBlur;
    this.setState({ focused: false }, function() {
      null !== r2 && r2.call(t2, e3);
    });
  } }, { key: "renderFocusRing", value: function() {
    return this.state.focused ? import_react.default.createElement("div", { className: [s$a.focusRing, "carousel__slide-focus-ring"].join(" ") }) : null;
  } }, { key: "render", value: function() {
    var e3 = this, t2 = this.props, r2 = t2.ariaLabel, i = (t2.carouselStore, t2.children, t2.className), n = t2.classNameHidden, s2 = t2.classNameVisible, o = (t2.currentSlide, t2.index, t2.innerClassName), a = t2.innerTag, l = t2.naturalSlideHeight, c = t2.naturalSlideWidth, u = (t2.onBlur, t2.onFocus, t2.orientation), p = t2.slideSize, d = t2.style, h = t2.tabIndex, S = t2.tag, y = t2.totalSlides, b = (t2.visibleSlides, t2.isIntrinsicHeight), m = _objectWithoutProperties(t2, _excluded$b), f = {};
    "horizontal" === u ? (f.width = pct(p), f.paddingBottom = pct(100 * l / (c * y))) : (f.width = pct(100), f.paddingBottom = pct(100 * l / c));
    var g = {};
    b && ("horizontal" === u ? f.height = "unset" : f.width = "unset", f.paddingBottom = "unset", g.position = "unset");
    var v = _extends({}, f, d), _ = this.isVisible(), T = cn([s$a.slide, "horizontal" === u && s$a.slideHorizontal, "carousel__slide", this.state.focused && "carousel__slide--focused", _ && s2, _ && "carousel__slide--visible", !_ && n, !_ && "carousel__slide--hidden", i]), k = cn([s$a.slideInner, "carousel__inner-slide", o]), C = this.isVisible() ? 0 : -1, O = "number" == typeof h ? h : C;
    return import_react.default.createElement(S, _extends({ ref: function(t3) {
      e3.tagRef = t3;
    }, tabIndex: O, "aria-selected": this.isVisible(), "aria-label": r2, role: "option", onFocus: this.handleOnFocus, onBlur: this.handleOnBlur, className: T, style: v }, m), import_react.default.createElement(a, { ref: function(t3) {
      e3.innerTagRef = t3;
    }, className: k, style: g }, this.props.children, this.renderFocusRing()));
  } }]), t;
}(import_react.default.PureComponent), _defineProperty(_class$9, "propTypes", { ariaLabel: propTypes.string, carouselStore: propTypes.object, children: CarouselPropTypes.children, className: propTypes.string, classNameHidden: propTypes.string, classNameVisible: propTypes.string, currentSlide: propTypes.number.isRequired, index: propTypes.number.isRequired, innerClassName: propTypes.string, innerTag: propTypes.string, naturalSlideHeight: propTypes.number.isRequired, naturalSlideWidth: propTypes.number.isRequired, onBlur: propTypes.func, onFocus: propTypes.func, orientation: CarouselPropTypes.orientation.isRequired, slideSize: propTypes.number.isRequired, style: propTypes.object, tabIndex: propTypes.number, tag: propTypes.string, totalSlides: propTypes.number.isRequired, visibleSlides: propTypes.number.isRequired, isIntrinsicHeight: propTypes.bool }), _defineProperty(_class$9, "defaultProps", { ariaLabel: "slide", carouselStore: null, children: null, className: null, classNameHidden: null, classNameVisible: null, innerClassName: null, innerTag: "div", onBlur: null, onFocus: null, style: {}, tabIndex: null, tag: "div", isIntrinsicHeight: false }), _class$9);
var index$7 = WithStore(Slide, function(e2) {
  return { currentSlide: e2.currentSlide, naturalSlideHeight: e2.naturalSlideHeight, naturalSlideWidth: e2.naturalSlideWidth, orientation: e2.orientation, slideSize: e2.slideSize, totalSlides: e2.totalSlides, visibleSlides: e2.visibleSlides, isIntrinsicHeight: e2.isIntrinsicHeight };
});
var GetScrollParent = function() {
  function e2() {
    _classCallCheck(this, e2);
  }
  return _createClass(e2, [{ key: "parents", value: function(e3, t) {
    return null === e3.parentNode ? t : this.parents(e3.parentNode, t.concat([e3]));
  } }, { key: "scrollParent", value: function(t) {
    for (var r = this.parents(t.parentNode, []), i = 0; i < r.length; i += 1)
      if (e2.scroll(r[i]))
        return r[i];
    return document.scrollingElement || document.documentElement;
  } }, { key: "getScrollParent", value: function(t) {
    return e2.isNodeValid(t) ? this.scrollParent(t) : null;
  } }], [{ key: "style", value: function(e3, t) {
    return getComputedStyle(e3, null).getPropertyValue(t);
  } }, { key: "overflow", value: function(t) {
    return e2.style(t, "overflow") + e2.style(t, "overflow-y") + e2.style(t, "overflow-x");
  } }, { key: "scroll", value: function(t) {
    return /(auto|scroll)/.test(e2.overflow(t));
  } }, { key: "isNodeValid", value: function(e3) {
    return e3 instanceof HTMLElement || e3 instanceof SVGElement;
  } }]), e2;
}();
var s$b = { horizontalSlider: "horizontalSlider___281Ls", horizontalSliderTray: "horizontalSliderTray___1L-0W", verticalSlider: "verticalSlider___34ZFD", verticalSliderTray: "verticalSliderTray___267D8", verticalTray: "verticalTray___12Key", verticalSlideTrayWrap: "verticalSlideTrayWrap___2nO7o", sliderTray: "sliderTray___-vHFQ", sliderAnimation: "sliderAnimation___300FY", masterSpinnerContainer: "masterSpinnerContainer___1Z6hB" };
var _excluded$c = ["ariaLabel", "carouselStore", "children", "className", "classNameAnimation", "classNameTray", "classNameTrayWrap", "currentSlide", "disableAnimation", "disableKeyboard", "dragEnabled", "hasMasterSpinner", "interval", "isPageScrollLocked", "isPlaying", "lockOnWindowScroll", "masterSpinnerFinished", "moveThreshold", "naturalSlideHeight", "naturalSlideWidth", "onMasterSpinner", "orientation", "playDirection", "privateUnDisableAnimation", "slideSize", "slideTraySize", "spinner", "style", "tabIndex", "totalSlides", "touchEnabled", "trayProps", "trayTag", "visibleSlides", "isIntrinsicHeight"];
var _excluded2$2 = ["dragStep", "step", "infinite", "preventVerticalScrollOnTouch", "preventingVerticalScroll", "horizontalPixelThreshold", "verticalPixelThreshold"];
var _excluded3 = ["className", "onClickCapture", "onMouseDown", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "ref", "style"];
var _class$a;
var Slider = (_class$a = function(e2) {
  function t(e3) {
    var i;
    return _classCallCheck(this, t), i = r.call(this, e3), i.getSliderRef = i.getSliderRef.bind(_assertThisInitialized(i)), i.handleDocumentScroll = i.handleDocumentScroll.bind(_assertThisInitialized(i)), i.handleOnClickCapture = i.handleOnClickCapture.bind(_assertThisInitialized(i)), i.handleOnKeyDown = i.handleOnKeyDown.bind(_assertThisInitialized(i)), i.handleOnMouseDown = i.handleOnMouseDown.bind(_assertThisInitialized(i)), i.handleOnMouseMove = i.handleOnMouseMove.bind(_assertThisInitialized(i)), i.handleOnMouseUp = i.handleOnMouseUp.bind(_assertThisInitialized(i)), i.handleOnTouchCancel = i.handleOnTouchCancel.bind(_assertThisInitialized(i)), i.handleOnTouchEnd = i.handleOnTouchEnd.bind(_assertThisInitialized(i)), i.handleOnTouchMove = i.handleOnTouchMove.bind(_assertThisInitialized(i)), i.handleOnTouchStart = i.handleOnTouchStart.bind(_assertThisInitialized(i)), i.playBackward = i.playBackward.bind(_assertThisInitialized(i)), i.playForward = i.playForward.bind(_assertThisInitialized(i)), i.callCallback = i.callCallback.bind(_assertThisInitialized(i)), i.blockWindowScroll = i.blockWindowScroll.bind(_assertThisInitialized(i)), i.state = { cancelNextClick: false, deltaX: 0, deltaY: 0, isBeingMouseDragged: false, isBeingTouchDragged: false, preventingVerticalScroll: false, startX: 0, startY: 0 }, i.interval = null, i.isDocumentScrolling = null, i.moveTimer = null, i.originalOverflow = null, i.scrollParent = null, i.scrollStopTimer = null, i;
  }
  _inherits(t, e2);
  var r = _createSuper(t);
  return _createClass(t, [{ key: "componentDidMount", value: function() {
    this.props.lockOnWindowScroll && window.addEventListener("scroll", this.handleDocumentScroll, false), (this.props.touchEnabled || this.props.preventVerticalScrollOnTouch) && window.addEventListener("touchmove", this.blockWindowScroll, false), document.documentElement.addEventListener("mouseleave", this.handleOnMouseUp, false), document.documentElement.addEventListener("mousemove", this.handleOnMouseMove, false), document.documentElement.addEventListener("mouseup", this.handleOnMouseUp, false), this.props.isPlaying && this.play();
  } }, { key: "componentDidUpdate", value: function(e3) {
    !e3.isPlaying && this.props.isPlaying && this.play(), e3.isPlaying && !this.props.isPlaying && this.stop(), !e3.isPageScrollLocked && this.props.isPageScrollLocked && this.lockScroll(), e3.isPageScrollLocked && !this.props.isPageScrollLocked && this.unlockScroll(), false === e3.privateUnDisableAnimation && true === this.props.privateUnDisableAnimation && this.props.carouselStore.setStoreState({ privateUnDisableAnimation: false, disableAnimation: false });
  } }, { key: "componentWillUnmount", value: function() {
    document.documentElement.removeEventListener("mouseleave", this.handleOnMouseUp, false), document.documentElement.removeEventListener("mousemove", this.handleOnMouseMove, false), document.documentElement.removeEventListener("mouseup", this.handleOnMouseUp, false), window.removeEventListener("scroll", this.handleDocumentScroll, false), window.removeEventListener("touchmove", this.blockWindowScroll, false), this.stop(), window.cancelAnimationFrame.call(window, this.moveTimer), window.clearTimeout(this.scrollStopTimer), this.isDocumentScrolling = null, this.moveTimer = null, this.scrollStopTimer = null;
  } }, { key: "getSliderRef", value: function(e3) {
    this.sliderTrayElement = e3;
  } }, { key: "fakeOnDragStart", value: function(e3) {
    var t2 = e3.screenX, r2 = e3.screenY, i = e3.touchDrag, n = void 0 !== i && i, s2 = e3.mouseDrag, o = void 0 !== s2 && s2;
    this.props.carouselStore.setStoreState({ isPlaying: false }), window.cancelAnimationFrame.call(window, this.moveTimer), "vertical" === this.props.orientation && this.props.carouselStore.setStoreState({ isPageScrollLocked: true }), this.setState({ isBeingTouchDragged: n, isBeingMouseDragged: o, startX: t2, startY: r2 });
  } }, { key: "fakeOnDragMove", value: function(e3, t2) {
    var r2 = this;
    this.moveTimer = window.requestAnimationFrame.call(window, function() {
      r2.setState(function(i) {
        return { deltaX: e3 - i.startX, deltaY: t2 - i.startY, preventingVerticalScroll: Math.abs(t2 - i.startY) <= r2.props.verticalPixelThreshold && Math.abs(e3 - i.startX) >= r2.props.horizontalPixelThreshold };
      });
    });
  } }, { key: "fakeOnDragEnd", value: function() {
    window.cancelAnimationFrame.call(window, this.moveTimer), this.computeCurrentSlide(), "vertical" === this.props.orientation && this.props.carouselStore.setStoreState({ isPageScrollLocked: false }), this.setState({ deltaX: 0, deltaY: 0, isBeingTouchDragged: false, isBeingMouseDragged: false }), this.isDocumentScrolling = !this.props.lockOnWindowScroll && null;
  } }, { key: "callCallback", value: function(e3, t2) {
    var r2 = this.props.trayProps;
    r2 && "function" == typeof r2[e3] && (t2.persist(), r2[e3](t2));
  } }, { key: "handleOnMouseDown", value: function(e3) {
    if (!this.props.dragEnabled)
      return void this.callCallback("onMouseDown", e3);
    e3.preventDefault(), this.fakeOnDragStart({ screenX: e3.screenX, screenY: e3.screenY, mouseDrag: true }), this.callCallback("onMouseDown", e3);
  } }, { key: "handleOnMouseMove", value: function(e3) {
    this.state.isBeingMouseDragged && (this.setState({ cancelNextClick: true }), e3.preventDefault(), this.fakeOnDragMove(e3.screenX, e3.screenY));
  } }, { key: "handleOnMouseUp", value: function(e3) {
    this.state.isBeingMouseDragged && (e3.preventDefault(), this.fakeOnDragEnd());
  } }, { key: "handleOnClickCapture", value: function(e3) {
    if (!this.state.cancelNextClick)
      return void this.callCallback("onClickCapture", e3);
    e3.preventDefault(), this.setState({ cancelNextClick: false }), this.callCallback("onClickCapture", e3);
  } }, { key: "handleOnTouchStart", value: function(e3) {
    if (!this.props.touchEnabled)
      return void this.callCallback("onTouchStart", e3);
    "vertical" === this.props.orientation && e3.preventDefault();
    var t2 = e3.targetTouches[0];
    this.fakeOnDragStart({ screenX: t2.screenX, screenY: t2.screenY, touchDrag: true }), this.callCallback("onTouchStart", e3);
  } }, { key: "handleDocumentScroll", value: function() {
    var e3 = this;
    this.props.touchEnabled && (this.isDocumentScrolling = true, window.clearTimeout(this.scrollStopTimer), this.scrollStopTimer = window.setTimeout(function() {
      e3.isDocumentScrolling = false;
    }, 66));
  } }, { key: "handleOnTouchMove", value: function(e3) {
    if (!this.props.touchEnabled || this.props.lockOnWindowScroll && this.isDocumentScrolling)
      return void this.callCallback("onTouchMove", e3);
    window.cancelAnimationFrame.call(window, this.moveTimer);
    var t2 = e3.targetTouches[0];
    t2 && (this.fakeOnDragMove(t2.screenX, t2.screenY), this.callCallback("onTouchMove", e3));
  } }, { key: "forward", value: function() {
    var e3 = this.props, t2 = e3.currentSlide, r2 = e3.step, i = e3.totalSlides, n = e3.visibleSlides;
    return Math.min(t2 + r2, i - n);
  } }, { key: "backward", value: function() {
    var e3 = this.props, t2 = e3.currentSlide, r2 = e3.step;
    return Math.max(t2 - r2, 0);
  } }, { key: "handleOnKeyDown", value: function(e3) {
    var t2 = e3.keyCode, r2 = this.props, i = r2.carouselStore, n = r2.currentSlide, s2 = r2.disableKeyboard, o = r2.totalSlides, a = r2.visibleSlides, l = {};
    true === s2 || o <= a || (37 === t2 && (e3.preventDefault(), this.focus(), l.currentSlide = Math.max(0, n - 1), l.isPlaying = false), 39 === t2 && (e3.preventDefault(), this.focus(), l.currentSlide = Math.min(o - a, n + 1), l.isPlaying = false), i.setStoreState(l));
  } }, { key: "playForward", value: function() {
    var e3 = this.props, t2 = e3.carouselStore, r2 = e3.currentSlide;
    t2.setStoreState({ currentSlide: this.forward() === r2 ? 0 : this.forward() });
  } }, { key: "playBackward", value: function() {
    var e3 = this.props, t2 = e3.carouselStore, r2 = e3.currentSlide, i = e3.totalSlides, n = e3.visibleSlides;
    t2.setStoreState({ currentSlide: this.backward() === r2 ? i - n : this.backward() });
  } }, { key: "play", value: function() {
    var e3 = this.props.playDirection;
    this.interval = setInterval("forward" === e3 ? this.playForward : this.playBackward, this.props.interval);
  } }, { key: "stop", value: function() {
    window.clearInterval(this.interval), this.interval = null;
  } }, { key: "lockScroll", value: function() {
    var e3 = new GetScrollParent();
    this.scrollParent = e3.getScrollParent(this.sliderTrayElement), this.scrollParent && (this.originalOverflow = this.originalOverflow || this.scrollParent.style.overflow, this.scrollParent.style.overflow = "hidden");
  } }, { key: "unlockScroll", value: function() {
    this.scrollParent && (this.scrollParent.style.overflow = this.originalOverflow, this.originalOverflow = null, this.scrollParent = null);
  } }, { key: "blockWindowScroll", value: function(e3) {
    this.state.preventingVerticalScroll && (e3.preventDefault(), e3.stopImmediatePropagation());
  } }, { key: "computeCurrentSlide", value: function() {
    var e3 = t.slideSizeInPx(this.props.orientation, this.sliderTrayElement.clientWidth, this.sliderTrayElement.clientHeight, this.props.totalSlides), r2 = t.slidesMoved(this.props.moveThreshold, this.props.orientation, this.state.deltaX, this.state.deltaY, e3, this.props.dragStep), i = this.props.totalSlides - Math.min(this.props.totalSlides, this.props.visibleSlides), n = boundedRange({ min: 0, max: i, x: this.props.currentSlide + r2 });
    this.props.infinite && (this.props.currentSlide >= i && r2 > 0 && (n = 0), 0 === this.props.currentSlide && r2 < 0 && (n = i)), this.props.carouselStore.setStoreState({ currentSlide: n });
  } }, { key: "focus", value: function() {
    this.sliderElement.focus();
  } }, { key: "handleOnTouchEnd", value: function(e3) {
    this.endTouchMove(), this.callCallback("onTouchEnd", e3);
  } }, { key: "handleOnTouchCancel", value: function(e3) {
    this.endTouchMove(), this.callCallback("onTouchCancel", e3);
  } }, { key: "endTouchMove", value: function() {
    this.props.touchEnabled && this.fakeOnDragEnd();
  } }, { key: "renderMasterSpinner", value: function() {
    var e3 = this.props, t2 = e3.hasMasterSpinner, r2 = e3.masterSpinnerFinished, i = e3.spinner;
    return t2 && !r2 ? ("function" == typeof this.props.onMasterSpinner && this.props.onMasterSpinner(), import_react.default.createElement("div", { className: cn([s$b.masterSpinnerContainer, "carousel__master-spinner-container"]) }, i && i(), !i && import_react.default.createElement(Spinner, null))) : null;
  } }, { key: "render", value: function() {
    var e3 = this, t2 = this.props, r2 = t2.ariaLabel, i = (t2.carouselStore, t2.children), n = t2.className, s2 = t2.classNameAnimation, o = t2.classNameTray, a = t2.classNameTrayWrap, l = t2.currentSlide, c = t2.disableAnimation, u = (t2.disableKeyboard, t2.dragEnabled, t2.hasMasterSpinner, t2.interval, t2.isPageScrollLocked, t2.isPlaying, t2.lockOnWindowScroll, t2.masterSpinnerFinished, t2.moveThreshold, t2.naturalSlideHeight), p = t2.naturalSlideWidth, d = (t2.onMasterSpinner, t2.orientation), h = (t2.playDirection, t2.privateUnDisableAnimation, t2.slideSize), S = t2.slideTraySize, y = (t2.spinner, t2.style), b = t2.tabIndex, m = (t2.totalSlides, t2.touchEnabled, t2.trayProps), f = t2.trayTag, g = t2.visibleSlides, v = t2.isIntrinsicHeight, _ = _objectWithoutProperties(t2, _excluded$c), T = _extends({}, y), k = {};
    "vertical" === d && (k.height = 0, k.paddingBottom = pct(100 * u * g / p), k.width = pct(100));
    var C = {}, O = pct(h * l * -1);
    (this.state.isBeingTouchDragged || this.state.isBeingMouseDragged || c) && (C.transition = "none"), v && (C.display = "flex", C.alignItems = "stretch"), "vertical" === d ? (C.transform = "translateY(".concat(O, ") translateY(").concat(this.state.deltaY, "px)"), C.width = pct(100), C.flexDirection = "column") : (C.width = pct(S), C.transform = "translateX(".concat(O, ") translateX(").concat(this.state.deltaX, "px)"), C.flexDirection = "row");
    var P = cn(["vertical" === d ? s$b.verticalSlider : s$b.horizontalSlider, "carousel__slider", "vertical" === d ? "carousel__slider--vertical" : "carousel__slider--horizontal", n]), E = cn([s$b.sliderTrayWrap, "carousel__slider-tray-wrapper", "vertical" === d ? s$b.verticalSlideTrayWrap : s$b.horizontalTrayWrap, "vertical" === d ? "carousel__slider-tray-wrap--vertical" : "carousel__slider-tray-wrap--horizontal", a]), w = cn([s$b.sliderTray, s2 || s$b.sliderAnimation, "carousel__slider-tray", "vertical" === d ? s$b.verticalTray : s$b.horizontalTray, "vertical" === d ? "carousel__slider-tray--vertical" : "carousel__slider-tray--horizontal", o]), M = null !== b ? b : 0, x = (_.dragStep, _.step, _.infinite, _.preventVerticalScrollOnTouch, _.preventingVerticalScroll, _.horizontalPixelThreshold, _.verticalPixelThreshold, _objectWithoutProperties(_, _excluded2$2)), R = (m.className, m.onClickCapture, m.onMouseDown, m.onTouchCancel, m.onTouchEnd, m.onTouchMove, m.onTouchStart, m.ref, m.style, _objectWithoutProperties(m, _excluded3));
    return import_react.default.createElement("div", _extends({ ref: function(t3) {
      e3.sliderElement = t3;
    }, className: P, "aria-live": "polite", "aria-label": r2, style: T, tabIndex: M, onKeyDown: this.handleOnKeyDown, role: "listbox" }, x), import_react.default.createElement("div", { className: E, style: k }, import_react.default.createElement(f, _extends({ ref: this.getSliderRef, className: w, style: C, onTouchStart: this.handleOnTouchStart, onTouchMove: this.handleOnTouchMove, onTouchEnd: this.handleOnTouchEnd, onTouchCancel: this.handleOnTouchCancel, onMouseDown: this.handleOnMouseDown, onClickCapture: this.handleOnClickCapture }, R), i), this.renderMasterSpinner()));
  } }], [{ key: "slideSizeInPx", value: function(e3, t2, r2, i) {
    return ("horizontal" === e3 ? t2 : r2) / i;
  } }, { key: "slidesMoved", value: function(e3, t2, r2, i, n, s2) {
    var o = "horizontal" === t2 ? r2 : i, a = Math.abs(Math.round(o / n)), l = Math.abs(o) >= n * e3 ? s2 : 0, c = Math.max(l, a);
    if (o < 0)
      return c;
    var u = -c;
    return 0 === u ? 0 : u;
  } }]), t;
}(import_react.default.Component), _defineProperty(_class$a, "propTypes", { ariaLabel: propTypes.string, carouselStore: propTypes.object.isRequired, children: propTypes.node.isRequired, className: propTypes.string, classNameAnimation: propTypes.string, classNameTray: propTypes.string, classNameTrayWrap: propTypes.string, currentSlide: propTypes.number.isRequired, disableAnimation: propTypes.bool, disableKeyboard: propTypes.bool, dragEnabled: propTypes.bool.isRequired, dragStep: propTypes.number, hasMasterSpinner: propTypes.bool.isRequired, infinite: propTypes.bool, interval: propTypes.number.isRequired, isPageScrollLocked: propTypes.bool.isRequired, isPlaying: propTypes.bool.isRequired, lockOnWindowScroll: propTypes.bool.isRequired, preventVerticalScrollOnTouch: propTypes.bool, horizontalPixelThreshold: propTypes.number, verticalPixelThreshold: propTypes.number, masterSpinnerFinished: propTypes.bool.isRequired, moveThreshold: propTypes.number, naturalSlideHeight: propTypes.number.isRequired, naturalSlideWidth: propTypes.number.isRequired, onMasterSpinner: propTypes.func, orientation: CarouselPropTypes.orientation.isRequired, playDirection: CarouselPropTypes.direction.isRequired, privateUnDisableAnimation: propTypes.bool, slideSize: propTypes.number.isRequired, slideTraySize: propTypes.number.isRequired, spinner: propTypes.func, step: propTypes.number.isRequired, style: propTypes.object, tabIndex: propTypes.number, totalSlides: propTypes.number.isRequired, touchEnabled: propTypes.bool.isRequired, trayProps: propTypes.shape({ className: propTypes.string, onClickCapture: propTypes.func, onMouseDown: propTypes.func, onTouchCancel: propTypes.func, onTouchEnd: propTypes.func, onTouchMove: propTypes.func, onTouchStart: propTypes.func, ref: propTypes.shape({}), style: propTypes.string }), trayTag: propTypes.string, visibleSlides: propTypes.number, isIntrinsicHeight: propTypes.bool }), _defineProperty(_class$a, "defaultProps", { ariaLabel: "slider", className: null, classNameAnimation: null, classNameTray: null, classNameTrayWrap: null, disableAnimation: false, disableKeyboard: false, dragStep: 1, infinite: false, preventVerticalScrollOnTouch: true, horizontalPixelThreshold: 15, verticalPixelThreshold: 10, moveThreshold: 0.1, onMasterSpinner: null, privateUnDisableAnimation: false, spinner: null, style: {}, tabIndex: null, trayProps: {}, trayTag: "div", visibleSlides: 1, isIntrinsicHeight: false }), _class$a);
var index$8 = WithStore(Slider, function(e2) {
  return { currentSlide: e2.currentSlide, disableAnimation: e2.disableAnimation, privateUnDisableAnimation: e2.privateUnDisableAnimation, disableKeyboard: e2.disableKeyboard, dragEnabled: e2.dragEnabled, hasMasterSpinner: e2.hasMasterSpinner, infinite: e2.infinite, interval: e2.interval, isPageScrollLocked: e2.isPageScrollLocked, isPlaying: e2.isPlaying, lockOnWindowScroll: e2.lockOnWindowScroll, preventingVerticalScroll: e2.preventingVerticalScroll, masterSpinnerFinished: e2.masterSpinnerFinished, naturalSlideHeight: e2.naturalSlideHeight, naturalSlideWidth: e2.naturalSlideWidth, orientation: e2.orientation, playDirection: e2.playDirection, slideSize: e2.slideSize, slideTraySize: e2.slideTraySize, step: e2.step, dragStep: e2.dragStep, totalSlides: e2.totalSlides, touchEnabled: e2.touchEnabled, visibleSlides: e2.visibleSlides, isIntrinsicHeight: e2.isIntrinsicHeight };
});
export {
  index as ButtonBack,
  index$1 as ButtonFirst,
  index$3 as ButtonLast,
  index$2 as ButtonNext,
  index$4 as ButtonPlay,
  Context as CarouselContext,
  CarouselProvider,
  Dot$1 as Dot,
  index$5 as DotGroup,
  Image$1 as Image,
  index$6 as ImageWithZoom,
  index$7 as Slide,
  index$8 as Slider,
  Spinner,
  Store,
  WithStore
};
//# sourceMappingURL=pure-react-carousel.js.map
