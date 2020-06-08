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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myStyles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myStyles.scss */ \"./src/myStyles.scss\");\n/* harmony import */ var _myStyles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_myStyles_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconsole.log(\"Hello World from your main file!\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/myStyles.scss":
/*!***************************!*\
  !*** ./src/myStyles.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nReferenceError: document is not defined\\n    at insertStyleElement (webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?:93:15)\\n    at addStyle (webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?:208:13)\\n    at modulesToDom (webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?:81:18)\\n    at module.exports (webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?:239:25)\\n    at eval (webpack:///./src/myStyles.scss?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3:15:14)\\n    at Object../node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/myStyles.scss (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/style-loader/dist/cjs.js!/home/student/myNewapp/stack-2-app/myNewapp/node_modules/css-loader/dist/cjs.js??ref--5-2!/home/student/myNewapp/stack-2-app/myNewapp/node_modules/sass-loader/dist/cjs.js??ref--5-3!/home/student/myNewapp/stack-2-app/myNewapp/src/myStyles.scss:120:1)\\n    at __webpack_require__ (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/style-loader/dist/cjs.js!/home/student/myNewapp/stack-2-app/myNewapp/node_modules/css-loader/dist/cjs.js??ref--5-2!/home/student/myNewapp/stack-2-app/myNewapp/node_modules/sass-loader/dist/cjs.js??ref--5-3!/home/student/myNewapp/stack-2-app/myNewapp/src/myStyles.scss:21:30)\\n    at /home/student/myNewapp/stack-2-app/myNewapp/node_modules/style-loader/dist/cjs.js!/home/student/myNewapp/stack-2-app/myNewapp/node_modules/css-loader/dist/cjs.js??ref--5-2!/home/student/myNewapp/stack-2-app/myNewapp/node_modules/sass-loader/dist/cjs.js??ref--5-3!/home/student/myNewapp/stack-2-app/myNewapp/src/myStyles.scss:85:18\\n    at Object.<anonymous> (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/style-loader/dist/cjs.js!/home/student/myNewapp/stack-2-app/myNewapp/node_modules/css-loader/dist/cjs.js??ref--5-2!/home/student/myNewapp/stack-2-app/myNewapp/node_modules/sass-loader/dist/cjs.js??ref--5-3!/home/student/myNewapp/stack-2-app/myNewapp/src/myStyles.scss:88:10)\\n    at Module._compile (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)\\n    at evalModuleCode (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/mini-css-extract-plugin/dist/loader.js:61:10)\\n    at /home/student/myNewapp/stack-2-app/myNewapp/node_modules/mini-css-extract-plugin/dist/loader.js:166:21\\n    at /home/student/myNewapp/stack-2-app/myNewapp/node_modules/webpack/lib/Compiler.js:343:11\\n    at /home/student/myNewapp/stack-2-app/myNewapp/node_modules/webpack/lib/Compiler.js:681:15\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:24:1)\\n    at AsyncSeriesHook.lazyCompileHook (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/tapable/lib/Hook.js:154:20)\\n    at /home/student/myNewapp/stack-2-app/myNewapp/node_modules/webpack/lib/Compiler.js:678:31\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/tapable/lib/Hook.js:154:20)\\n    at /home/student/myNewapp/stack-2-app/myNewapp/node_modules/webpack/lib/Compilation.js:1423:35\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/tapable/lib/Hook.js:154:20)\\n    at /home/student/myNewapp/stack-2-app/myNewapp/node_modules/webpack/lib/Compilation.js:1414:32\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/tapable/lib/Hook.js:154:20)\\n    at /home/student/myNewapp/stack-2-app/myNewapp/node_modules/webpack/lib/Compilation.js:1409:36\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/tapable/lib/Hook.js:154:20)\\n    at /home/student/myNewapp/stack-2-app/myNewapp/node_modules/webpack/lib/Compilation.js:1405:32\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/student/myNewapp/stack-2-app/myNewapp/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\");\n\n//# sourceURL=webpack:///./src/myStyles.scss?");

/***/ })

/******/ });