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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module_import.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./module_export.js":
/*!**************************!*\
  !*** ./module_export.js ***!
  \**************************/
/*! exports provided: pi, square, Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pi\", function() { return pi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"square\", function() { return square; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Person\", function() { return Person; });\nconst pi =  Math.PI;\r\n\r\nfunction square(x) {\r\n  return x * x;\r\n}\r\n\r\nclass Person {\r\n  constructor(name) {\r\n    this.name = name;\r\n  }\r\n}\r\n\r\n// 변수, 함수 클래스를 하나의 객체로 구성하여 공개\r\n\r\n\r\n\r\n//모듈에서 하나만을 export 할 때는 default 키워드를 사용할 수 있다.\r\n//다만 default를 사용하는 경우, var, let, const는 사용할 수 없ㅈ다.\r\n\r\n/*\r\nfunction(x) {\r\n\treturn x * x;\r\n}\r\n\r\nexport default\r\n\r\n>> 아래와 같이 축약가능\r\nexport default function(x) {\r\n\treturn x * x;\r\n}\r\n*/\n\n//# sourceURL=webpack:///./module_export.js?");

/***/ }),

/***/ "./module_import.js":
/*!**************************!*\
  !*** ./module_import.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_export_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module_export.js */ \"./module_export.js\");\n// import * as lib from './module_export.js';\r\n//이름을 변경하여 import\r\n\r\n\r\nconsole.log(_module_export_js__WEBPACK_IMPORTED_MODULE_0__[\"pi\"]); //3.14\r\nconsole.log(Object(_module_export_js__WEBPACK_IMPORTED_MODULE_0__[\"square\"])(10));; \r\nconsole.log(new _module_export_js__WEBPACK_IMPORTED_MODULE_0__[\"Person\"]('Lee'));\r\n\r\n/* default 키워드와 함께 export 한 모듈은 {} 없이 임의의 이름으로 import한다. \r\n\r\nimport squre form './module_export.js'\r\n\r\nconsole.log(squre(3)); //9\r\n\r\n*/\r\n\n\n//# sourceURL=webpack:///./module_import.js?");

/***/ })

/******/ });