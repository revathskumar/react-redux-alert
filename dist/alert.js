(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactReduxAlert"] = factory(require("React"));
	else
		root["ReactReduxAlert"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (binding) */ __webpack_require__.d(exports, "SHOW_ALERT", function() { return SHOW_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(exports, "HIDE_ALERT", function() { return HIDE_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SUCCESS", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ERROR", function() { return ERROR; });
/* harmony export (immutable) */ exports["default"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(exports, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(exports, "AlertProvider", function() { return AlertProvider; });
/* harmony export (binding) */ __webpack_require__.d(exports, "connectAlert", function() { return connectAlert; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// constants
var SHOW_ALERT = 'SHOW_ALERT';
var HIDE_ALERT = 'HIDE_ALERT';
var SUCCESS = 'SUCCESS';
var ERROR = 'ERROR';

//reducer
var initialState = {
  show: false,
  message: '',
  alertType: constants.ERROR
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case SHOW_ALERT:
      return { show: true, message: action.message, alertType: action.alertType };
    case HIDE_ALERT:
      return initialState;
    default:
      return state;
  }
}

var alertClassnames = function alertClassnames(type) {
  var alert = 'alert';

  switch (type) {
    case SUCCESS:
      return alert + ' alert--success';
    case ERROR:
      return alert + ' alert--error';
    default:
      return alert;
  }
};

// UI component
var Alert = function Alert(_ref) {
  var type = _ref.type,
      children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: alertClassnames(type) },
    children
  );
};

Alert.defaultProps = {
  type: ERROR
};

Alert.propTypes = {
  type: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string, __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element])
};

var AlertProvider = function AlertProvider(_ref2) {
  var show = _ref2.show,
      message = _ref2.message,
      alertType = _ref2.alertType,
      children = _ref2.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    show ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Alert,
      { type: alertType },
      message
    ) : null,
    children
  );
};

AlertProvider.displayName = 'AlertProvider';

AlertProvider.propTypes = {
  show: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  message: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  alertType: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element
};

var connectAlert = function connectAlert(Comp) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          AlertProvider,
          this.props.alert,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Comp, this.props)
        );
      }
    }]);

    return _class;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.displayName = 'connectAlert(' + Comp.displayName + ')', _class.propTypes = {
    alert: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object
  }, _temp;
};

/***/ }
/******/ ]);
});