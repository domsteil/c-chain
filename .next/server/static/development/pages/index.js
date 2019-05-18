module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/C-ChainDashboard.js":
/*!****************************************!*\
  !*** ./components/C-ChainDashboard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ledger_LedgerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ledger/LedgerCard */ "./components/ledger/LedgerCard.js");
/* harmony import */ var _articles_ArticleCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articles/ArticleCard */ "./components/articles/ArticleCard.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2566857122"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2566857122" + " " + "row"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2566857122" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ledger_LedgerCard__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2566857122" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_articles_ArticleCard__WEBPACK_IMPORTED_MODULE_3__["default"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2566857122"
  }, ".column.jsx-2566857122{text-align:left;}.vertical.jsx-2566857122{-webkit-align-left:30px;-ms-flex-line-packalign-left:30px;align-left:30px;height:1200px;}.col-left.jsx-2566857122{box-sizing:border-box;min-height:100%;background:#233659;background:linear-gradient(135deg,#565b73,#233659);padding:25px;border-top-left-radius:5px;border-top-right-radius:5px;}@media screen and (max-width:960px){.row.jsx-2566857122{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-2566857122{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-2566857122{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxDLUNoYWluRGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNnQixBQUlNLEFBR21CLEFBS00sQUFZRSxBQUlYLEFBUUYsV0FQUSxJQVFULENBakNaLE1BU2tCLE1BaUJJLENBUWIsU0F4QlksRUF5QlQsTUFSUSxRQVNOLEdBekJ1QyxLQWlCbkQsUUFTUixJQWpDc0IsSUFpQkssVUFoQnJCLE9BaUJFLGFBVmEsYUFDYywyQkFDQyw0QkFDL0IiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXEMtQ2hhaW5EYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGVkZ2VyQ2FyZCBmcm9tICcuL2xlZGdlci9MZWRnZXJDYXJkJztcclxuaW1wb3J0IEFydGljbGVDYXJkIGZyb20gJy4vYXJ0aWNsZXMvQXJ0aWNsZUNhcmQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+XHJcbjxzZWN0aW9uPlxyXG48ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgIDxMZWRnZXJDYXJkIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICA8QXJ0aWNsZUNhcmQgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxyXG4gICAgICB9XHJcblxyXG4gICAgICAudmVydGljYWwge1xyXG4gICAgICAgIGFsaWduLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgLmNvbC1sZWZ0IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIzMzY1OTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM1NjViNzMsIzIzMzY1OSk7XHJcbiAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICB9XHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuLmFyY2hldHlwZS1mb3JtX19jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgY29sb3I6ICMwZDExMmI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8L3NlY3Rpb24+Il19 */\n/*@ sourceURL=C:\\c-chain\\components\\C-ChainDashboard.js */"));
});

/***/ }),

/***/ "./components/articles/ArticleCard.js":
/*!********************************************!*\
  !*** ./components/articles/ArticleCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container */ "./components/container.js");
/* harmony import */ var _ArticleDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArticleDetail */ "./components/articles/ArticleDetail.js");
/* harmony import */ var _ArticleHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArticleHeader */ "./components/articles/ArticleHeader.js");
/* harmony import */ var _ArticleList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ArticleList */ "./components/articles/ArticleList.js");
/* harmony import */ var _components_useFetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/useFetch */ "./components/useFetch.js");







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    center: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2492806218"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2492806218" + " " + "articleCard"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ArticleHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ArticleList__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2492806218"
  }, ".articleCard.jsx-2492806218{background:#fff;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);position:center;text-align:center;box-sizing:border-box;align:center;padding-left:28px;padding-right:28px;margin-top:28px;margin-left:28px;margin-right:28px;background-color:#FFFFFF;width:1000px;height:780px;}@media screen and (max-width:960px){.row.jsx-2492806218{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-2492806218{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-2492806218{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxhcnRpY2xlc1xcQXJ0aWNsZUNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWdCLEFBSXlCLEFBb0JRLEFBSVgsQUFRRixXQVBRLElBUVQsQ0FoQ1EsWUF5QkUsQ0FRYixLQWhDcUMsTUFpQ2xDLE1BUlEsUUFTTixRQVJaLFFBU1IsUUFsQ3dCLEFBa0JHLGdCQWpCRCxDQWtCbEIsaUJBakJzQixzQkFDVCxhQUNLLGtCQUNDLG1CQUNILGdCQUNDLGlCQUNDLGtCQUNPLHlCQUNaLGFBQ0EsYUFDakIiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXGFydGljbGVzXFxBcnRpY2xlQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVyJ1xyXG5pbXBvcnQgQXJ0aWNsZURldGFpbCBmcm9tICcuL0FydGljbGVEZXRhaWwnO1xyXG5pbXBvcnQgQXJ0aWNsZUhlYWRlciBmcm9tICcuL0FydGljbGVIZWFkZXInO1xyXG5pbXBvcnQgQXJ0aWNsZUxpc3QgZnJvbSAnLi9BcnRpY2xlTGlzdCc7XHJcbmltcG9ydCB1c2VGZXRjaCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZUZldGNoJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PlxyXG48Q29udGFpbmVyIGNlbnRlcj5cclxuPHNlY3Rpb24+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVDYXJkXCI+XHJcbiAgICBcclxuICAgIDxBcnRpY2xlSGVhZGVyIC8+XHJcbiAgICA8QXJ0aWNsZUxpc3QgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAuYXJ0aWNsZUNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI4cHggMCByZ2JhKDg2LDkxLDExNSwuMTUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3ODBweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4uYXJjaGV0eXBlLWZvcm1fX2NvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgICBjb2xvcjogIzBkMTEyYjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDwvQ29udGFpbmVyPiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\articles\\ArticleCard.js */")));
});

/***/ }),

/***/ "./components/articles/ArticleDetail.js":
/*!**********************************************!*\
  !*** ./components/articles/ArticleDetail.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ArticleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleList */ "./components/articles/ArticleList.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2374575105"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2374575105"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ArticleList__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2374575105"
  }, ".column.jsx-2374575105{text-align:left;}.vertical.jsx-2374575105{-webkit-align-left:30px;-ms-flex-line-packalign-left:30px;align-left:30px;height:1200px;}.signup.jsx-2374575105{font-size:13px;line-height:1.91667;font-weight:400;color:#3d464d;border:1px solid #bdc4c9;padding:3.5px 7px;border-radius:4px;margin-top:28px;width:69%;margin-left:8px;}h2.jsx-2374575105{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#000;text-align:center;}.col-left.jsx-2374575105{box-sizing:border-box;min-height:100%;background:#233659;background:linear-gradient(135deg,#565b73,#233659);padding:25px;border-top-left-radius:5px;border-top-right-radius:5px;}@media screen and (max-width:960px){.row.jsx-2374575105{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-2374575105{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-2374575105{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxhcnRpY2xlc1xcQXJ0aWNsZURldGFpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPZ0IsQUFJTSxBQUdtQixBQUtELEFBY3FILEFBWTlHLEFBWUUsQUFJWCxBQVFGLFdBUFEsSUExQ0MsQUFrRFYsQ0EzRFosTUFtQ2tCLE1BaUJJLENBUWIsTUFsRFMsR0EwQkcsRUF5QlQsTUFSUSxLQTFDSixHQW1ERixHQXpCdUMsS0FpQm5ELEdBMUN5QixLQW1EakMsSUEzRHNCLElBMkNLLFVBMUNyQixFQVFvQixLQW1DbEIsYUFsQ2tCLEFBd0JMLGFBQ2MsS0F4QlgsTUFRRixVQVBKLElBUUssRUFnQmEsSUF2QlosU0FRRyxPQVByQixRQXVCRCxJQWZxQixrQkFDRCxpQkFDTixXQUNPLGtCQUNwQiIsImZpbGUiOiJDOlxcYy1jaGFpblxcY29tcG9uZW50c1xcYXJ0aWNsZXNcXEFydGljbGVEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJ0aWNsZUxpc3QgZnJvbSBcIi4vQXJ0aWNsZUxpc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IFxyXG48c2VjdGlvbj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxBcnRpY2xlTGlzdCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxyXG4gICAgICB9XHJcblxyXG4gICAgICAudmVydGljYWwge1xyXG4gICAgICAgIGFsaWduLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaWdudXAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS45MTY2NztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiAjM2Q0NjRkO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM0Yzk7XHJcbiAgICAgICAgcGFkZGluZzogMy41cHggN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIHdpZHRoOiA2OSU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgLmNvbC1sZWZ0IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIzMzY1OTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM1NjViNzMsIzIzMzY1OSk7XHJcbiAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICB9XHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuLmFyY2hldHlwZS1mb3JtX19jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgY29sb3I6ICMwZDExMmI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8L3NlY3Rpb24+Il19 */\n/*@ sourceURL=C:\\c-chain\\components\\articles\\ArticleDetail.js */"));
});

/***/ }),

/***/ "./components/articles/ArticleHeader.js":
/*!**********************************************!*\
  !*** ./components/articles/ArticleHeader.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-815430561"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-815430561" + " " + "actions"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-815430561"
  }, "Articles")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "815430561"
  }, "h1.jsx-815430561{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:2em;font-weight:200;margin-right:30px;padding-left:5px;color:#000;text-align:left;}.actions.jsx-815430561{align:right;}@media screen and (max-width:960px){.row.jsx-815430561{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-815430561{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.actions.jsx-815430561{align:right;}.archetype-form__container.jsx-815430561{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxhcnRpY2xlc1xcQXJ0aWNsZUhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZ0IsQUFJNkksQUFXeEgsQUFNWSxBQUlYLEFBT0MsQUFLSCxXQVhRLENBVnJCLEFBaUJFLEdBS1UsYUFYVSxDQVliLFdBQ0csTUFaUSxRQWFOLFFBWlosUUFhUixRQXBCMkIsaUJBQ25CLHFDQWxCYyxjQUNBLGNBQ0UsZ0JBQ0Usa0JBQ0QsaUJBQ04sV0FDSyxnQkFDbEIiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXGFydGljbGVzXFxBcnRpY2xlSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gXHJcbjxzZWN0aW9uPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICA8aDE+QXJ0aWNsZXM8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgIGFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIHRhYmxldFxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbi5hcmNoZXR5cGUtZm9ybV9fY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgIGNvbG9yOiAjMGQxMTJiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9zZWN0aW9uPiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\articles\\ArticleHeader.js */"));
});

/***/ }),

/***/ "./components/articles/ArticleList.js":
/*!********************************************!*\
  !*** ./components/articles/ArticleList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticleList; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/useFetch */ "./components/useFetch.js");



function ArticleList(props) {
  var articles = Object(_components_useFetch__WEBPACK_IMPORTED_MODULE_2__["default"])("http://localhost:10050/api/getArticles");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3572666656"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "jsx-3572666656"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
    className: "jsx-3572666656"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-3572666656"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "0",
    className: "jsx-3572666656"
  }, "Article Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "1",
    className: "jsx-3572666656"
  }, "Description"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "jsx-3572666656"
  }, articles.map(function (a) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      className: "jsx-3572666656"
    }, a.articleId, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-3572666656"
    }, a.description));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3572666656"
  }, ".column.jsx-3572666656{text-align:left;}.vertical.jsx-3572666656{-webkit-align-left:30px;-ms-flex-line-packalign-left:30px;align-left:30px;height:1200px;}.table.jsx-3572666656{display:table;border-collapse:separate;border-spacing:2px;border-color:grey;}thead.jsx-3572666656{display:table-header-group;vertical-align:middle;border-color:inherit;}th.jsx-3572666656{color:rgb(102,102,102);font-size:14px;font-weight:400;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;padding-left:28px;}td.jsx-3572666656{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}tr.jsx-3572666656{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}.accounts.jsx-3572666656{font-size:13px;font-color:#000;}.agentItems.jsx-3572666656{font-size:13px;font-color:#000;}.agentCard.jsx-3572666656{background:#fff;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);position:center;text-align:center;box-sizing:border-box;align:center;padding-left:28px;padding-right:28px;margin-top:28px;margin-left:28px;margin-right:28px;background-color:#F7F6F3;width:1000px;height:400px;}.col-left.jsx-3572666656{box-sizing:border-box;min-height:100%;background:#233659;background:linear-gradient(135deg,#565b73,#233659);padding:25px;border-top-left-radius:5px;border-top-right-radius:5px;}@media screen and (max-width:960px){.row.jsx-3572666656{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-3572666656{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-3572666656{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxhcnRpY2xlc1xcQXJ0aWNsZUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0J3QixBQUlNLEFBR21CLEFBS0YsQUFPYSxBQU1GLEFBUVQsQUFVRixBQVVDLEFBS0EsQUFPQyxBQWtCTSxBQVlFLEFBSVgsQUFRRixXQVBRLEdBdkZNLENBMEM1QixBQUtBLEFBZ0RhLENBeEdaLEFBOEJxQixBQVVGLEFBc0JDLE1Ba0JGLENBMURELElBTk8sQ0FpRkYsQ0FRYixFQXREVCxBQUtBLEdBTzhDLENBaEMzQixBQVVGLEdBbEJDLEFBMERHLENBdkVBLENBZ0dULE1BUlEsR0FqRkcsR0FlQyxBQVVGLEVBbEJELEFBbUZQLEdBekJ1QyxDQXZFakMsSUF3RmxCLFFBakZKLEFBMEZKLEVBM0V1QixBQVVGLEVBdkNDLEVBUWxCLEVBb0RvQixBQTRCRyxTQTFEd0IsQUFVRixDQXZDM0MsTUE0RG9CLENBNEJsQixhQVZhLElBakJTLFNBa0JLLE9BaEQvQixBQVVGLE1BcUJtQixhQTFDSyxBQTJDQSxDQWlCVSxpQkEzRGhDLEFBMkN1QixXQWlCdEIsUUFoQm1CLGdCQUNDLGlCQUNDLGtCQUNPLHlCQUNaLGFBQ0EsYUFDakIiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXGFydGljbGVzXFxBcnRpY2xlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlRmV0Y2ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlRmV0Y2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGVMaXN0KHByb3BzKSB7XHJcbmNvbnN0IGFydGljbGVzID0gdXNlRmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjEwMDUwL2FwaS9nZXRBcnRpY2xlc1wiKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiMFwiPkFydGljbGUgSWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2x1bW49XCIxXCI+RGVzY3JpcHRpb248L3RoPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHthcnRpY2xlcy5tYXAoYSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPnthLmFydGljbGVJZH1cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2EuZGVzY3JpcHRpb259PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcclxuICAgICAgfVxyXG5cclxuICAgICAgLnZlcnRpY2FsIHtcclxuICAgICAgICBhbGlnbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFibGUge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhlYWQge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNjgsIDY4LCA2OCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICB0ciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICBjb2xvcjogcmdiKDY4LCA2OCwgNjgpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAgICAgLmFjY291bnRzIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC1jb2xvcjogIzAwMFxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWdlbnRJdGVtcyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtY29sb3I6ICMwMDBcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcblxyXG4gICAgICAuYWdlbnRDYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyOHB4IDAgcmdiYSg4Niw5MSwxMTUsLjE1KTtcclxuICAgICAgICBwb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjhweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjZGMztcclxuICAgICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgIC5jb2wtbGVmdCB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMzM2NTk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjNTY1YjczLCMyMzM2NTkpO1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgfVxyXG5cclxuICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIHRhYmxldFxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbi5hcmNoZXR5cGUtZm9ybV9fY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgIGNvbG9yOiAjMGQxMTJiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\c-chain\\components\\articles\\ArticleList.js */"));
}

/***/ }),

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var center = _ref.center,
      vCenter = _ref.vCenter,
      dark = _ref.dark,
      gray = _ref.gray,
      wide = _ref.wide,
      black = _ref.black,
      small = _ref.small,
      padding = _ref.padding,
      overflow = _ref.overflow,
      minHeight = _ref.minHeight,
      dotBackground = _ref.dotBackground,
      children = _ref.children,
      mobileStyle = _ref.mobileStyle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["center", "vCenter", "dark", "gray", "wide", "black", "small", "padding", "overflow", "minHeight", "dotBackground", "children", "mobileStyle"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["736910080", [padding ? '4rem' : '0', wide ? '0' : '1rem', wide && !small ? '' : 'max-width: 1024px;', small ? 'max-width: 682px;' : '', center ? 'text-align: center;' : '', dark ? 'background-image: linear-gradient(to bottom, #061c3f  0%, #323232 100%);' : '', dark ? 'color: #f1f1f1;' : '', black ? 'background-color: #061c3f;' : '', gray ? 'background-color: #f6f6f6;' : '', wide && !overflow ? 'overflow: hidden;' : '', minHeight ? "min-height: ".concat(minHeight, "px;") : '', vCenter ? 'display: flex; align-items: center;' : '', dotBackground ? "\n            background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 .8px, #FFF .8px, #FFF);\n            background-size: 28px 28px;\n          " : '', padding ? '4rem' : '0', wide ? '0' : '2rem', padding ? '4rem' : '0', wide ? '0' : '1rem', mobileStyle || '']]]) + " " + (props.className != null && props.className || "")
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "736910080",
    dynamic: [padding ? '4rem' : '0', wide ? '0' : '1rem', wide && !small ? '' : 'max-width: 1024px;', small ? 'max-width: 682px;' : '', center ? 'text-align: center;' : '', dark ? 'background-image: linear-gradient(to bottom, #061c3f  0%, #323232 100%);' : '', dark ? 'color: #f1f1f1;' : '', black ? 'background-color: #061c3f;' : '', gray ? 'background-color: #f6f6f6;' : '', wide && !overflow ? 'overflow: hidden;' : '', minHeight ? "min-height: ".concat(minHeight, "px;") : '', vCenter ? 'display: flex; align-items: center;' : '', dotBackground ? "\n            background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 .8px, #FFF .8px, #FFF);\n            background-size: 28px 28px;\n          " : '', padding ? '4rem' : '0', wide ? '0' : '2rem', padding ? '4rem' : '0', wide ? '0' : '1rem', mobileStyle || '']
  }, ".__jsx-style-dynamic-selector{width:100%;margin:0 auto;padding:".concat(padding ? '4rem' : '0', " ").concat(wide ? '0' : '1rem', ";").concat(wide && !small ? '' : 'max-width: 1024px;', " ").concat(small ? 'max-width: 682px;' : '', " ").concat(center ? 'text-align: center;' : '', " ").concat(dark ? 'background-image: linear-gradient(to bottom, #061c3f  0%, #323232 100%);' : '', " ").concat(dark ? 'color: #f1f1f1;' : '', " ").concat(black ? 'background-color: #061c3f;' : '', " ").concat(gray ? 'background-color: #f6f6f6;' : '', " ").concat(wide && !overflow ? 'overflow: hidden;' : '', " ").concat(minHeight ? "min-height: ".concat(minHeight, "px;") : '', " ").concat(vCenter ? 'display: flex; align-items: center;' : '', " ").concat(dotBackground ? "\n            background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 .8px, #FFF .8px, #FFF);\n            background-size: 28px 28px;\n          " : '', ";}.__jsx-style-dynamic-selector:after{content:'';display:table;clear:both;}@media screen and (max-width:960px){div.__jsx-style-dynamic-selector{padding:").concat(padding ? '4rem' : '0', " ").concat(wide ? '0' : '2rem', ";}}@media screen and (max-width:640px){div.__jsx-style-dynamic-selector{padding:").concat(padding ? '4rem' : '0', " ").concat(wide ? '0' : '1rem', ";").concat(mobileStyle || '', ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxjb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JTLEFBR3NCLEFBaUJBLEFBUTJELEFBTUEsV0E5QnhELEFBaUJBLGNBaEJvRCxBQWlCdkQsV0FDYixnQ0FNRSxBQU9ELHVCQW5CRixPQW1CRywyVEFuQkYiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXGNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7XHJcbiAgICBjZW50ZXIsXHJcbiAgICB2Q2VudGVyLFxyXG4gICAgZGFyayxcclxuICAgIGdyYXksXHJcbiAgICB3aWRlLFxyXG4gICAgYmxhY2ssXHJcbiAgICBzbWFsbCxcclxuICAgIHBhZGRpbmcsXHJcbiAgICBvdmVyZmxvdyxcclxuICAgIG1pbkhlaWdodCxcclxuICAgIGRvdEJhY2tncm91bmQsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIG1vYmlsZVN0eWxlLFxyXG4gICAgLi4ucHJvcHNcclxuICB9KSA9PiAoXHJcbiAgICA8ZGl2IHsuLi5wcm9wc30+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogJHtwYWRkaW5nID8gJzRyZW0nIDogJzAnfSAke3dpZGUgPyAnMCcgOiAnMXJlbSd9O1xyXG4gICAgICAgICAgJHt3aWRlICYmICFzbWFsbCA/ICcnIDogJ21heC13aWR0aDogMTAyNHB4Oyd9XHJcbiAgICAgICAgICAke3NtYWxsID8gJ21heC13aWR0aDogNjgycHg7JyA6ICcnfVxyXG4gICAgICAgICAgJHtjZW50ZXIgPyAndGV4dC1hbGlnbjogY2VudGVyOycgOiAnJ31cclxuICAgICAgICAgICR7XHJcbiAgICAgICAgICAgIGRhcmtcclxuICAgICAgICAgICAgICA/ICdiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDYxYzNmICAwJSwgIzMyMzIzMiAxMDAlKTsnXHJcbiAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHtkYXJrID8gJ2NvbG9yOiAjZjFmMWYxOycgOiAnJ31cclxuICAgICAgICAgICR7YmxhY2sgPyAnYmFja2dyb3VuZC1jb2xvcjogIzA2MWMzZjsnIDogJyd9XHJcbiAgICAgICAgICAke2dyYXkgPyAnYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjsnIDogJyd9XHJcbiAgICAgICAgICAke3dpZGUgJiYgIW92ZXJmbG93ID8gJ292ZXJmbG93OiBoaWRkZW47JyA6ICcnfVxyXG4gICAgICAgICAgJHttaW5IZWlnaHQgPyBgbWluLWhlaWdodDogJHttaW5IZWlnaHR9cHg7YCA6ICcnfVxyXG4gICAgICAgICAgJHt2Q2VudGVyID8gJ2Rpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7JyA6ICcnfVxyXG4gICAgICAgICAgJHtcclxuICAgICAgICAgICAgZG90QmFja2dyb3VuZFxyXG4gICAgICAgICAgICAgID8gYFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjRDdEN0Q3LCAjRDdEN0Q3IC44cHgsICNGRkYgLjhweCwgI0ZGRik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjhweCAyOHB4O1xyXG4gICAgICAgICAgYFxyXG4gICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgOmFmdGVyIHtcclxuICAgICAgICAgIC8vIEJGQ1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICR7cGFkZGluZyA/ICc0cmVtJyA6ICcwJ30gJHt3aWRlID8gJzAnIDogJzJyZW0nfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIG1vYmlsZVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAke3BhZGRpbmcgPyAnNHJlbScgOiAnMCd9ICR7d2lkZSA/ICcwJyA6ICcxcmVtJ307XHJcbiAgICAgICAgICAgICR7bW9iaWxlU3R5bGUgfHwgJyd9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApOyJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\container.js */")), children);
});

/***/ }),

/***/ "./components/ledger/LedgerCard.js":
/*!*****************************************!*\
  !*** ./components/ledger/LedgerCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container */ "./components/container.js");
/* harmony import */ var _LedgerDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LedgerDetail */ "./components/ledger/LedgerDetail.js");
/* harmony import */ var _LedgerHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LedgerHeader */ "./components/ledger/LedgerHeader.js");
/* harmony import */ var _LedgerList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LedgerList */ "./components/ledger/LedgerList.js");
/* harmony import */ var _components_useFetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/useFetch */ "./components/useFetch.js");







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    center: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-3907478402"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3907478402" + " " + "ledgerCard"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LedgerHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LedgerList__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3907478402"
  }, ".ledgerCard.jsx-3907478402{background:#fff;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);position:center;text-align:center;box-sizing:border-box;align:center;padding-left:28px;padding-right:28px;margin-top:28px;margin-left:28px;margin-right:28px;background-color:#FFFFFF;width:1000px;height:780px;}@media screen and (max-width:960px){.row.jsx-3907478402{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-3907478402{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-3907478402{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWdCLEFBSXlCLEFBb0JRLEFBSVgsQUFRRixXQVBRLElBUVQsQ0FoQ1EsWUF5QkUsQ0FRYixLQWhDcUMsTUFpQ2xDLE1BUlEsUUFTTixRQVJaLFFBU1IsUUFsQ3dCLEFBa0JHLGdCQWpCRCxDQWtCbEIsaUJBakJzQixzQkFDVCxhQUNLLGtCQUNDLG1CQUNILGdCQUNDLGlCQUNDLGtCQUNPLHlCQUNaLGFBQ0EsYUFDakIiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXGxlZGdlclxcTGVkZ2VyQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVyJ1xyXG5pbXBvcnQgTGVkZ2VyRGV0YWlsIGZyb20gJy4vTGVkZ2VyRGV0YWlsJztcclxuaW1wb3J0IExlZGdlckhlYWRlciBmcm9tICcuL0xlZGdlckhlYWRlcic7XHJcbmltcG9ydCBMZWRnZXJMaXN0IGZyb20gJy4vTGVkZ2VyTGlzdCc7XHJcbmltcG9ydCB1c2VGZXRjaCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZUZldGNoJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PlxyXG48Q29udGFpbmVyIGNlbnRlcj5cclxuPHNlY3Rpb24+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZGdlckNhcmRcIj5cclxuICAgIFxyXG4gICAgPExlZGdlckhlYWRlciAvPlxyXG4gICAgPExlZGdlckxpc3QgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAubGVkZ2VyQ2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjhweCAwIHJnYmEoODYsOTEsMTE1LC4xNSk7XHJcbiAgICAgICAgcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBhbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDc4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIHRhYmxldFxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbi5hcmNoZXR5cGUtZm9ybV9fY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgIGNvbG9yOiAjMGQxMTJiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPC9Db250YWluZXI+Il19 */\n/*@ sourceURL=C:\\c-chain\\components\\ledger\\LedgerCard.js */")));
});

/***/ }),

/***/ "./components/ledger/LedgerDetail.js":
/*!*******************************************!*\
  !*** ./components/ledger/LedgerDetail.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LedgerList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LedgerList */ "./components/ledger/LedgerList.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2374575105"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2374575105"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LedgerList__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2374575105"
  }, ".column.jsx-2374575105{text-align:left;}.vertical.jsx-2374575105{-webkit-align-left:30px;-ms-flex-line-packalign-left:30px;align-left:30px;height:1200px;}.signup.jsx-2374575105{font-size:13px;line-height:1.91667;font-weight:400;color:#3d464d;border:1px solid #bdc4c9;padding:3.5px 7px;border-radius:4px;margin-top:28px;width:69%;margin-left:8px;}h2.jsx-2374575105{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#000;text-align:center;}.col-left.jsx-2374575105{box-sizing:border-box;min-height:100%;background:#233659;background:linear-gradient(135deg,#565b73,#233659);padding:25px;border-top-left-radius:5px;border-top-right-radius:5px;}@media screen and (max-width:960px){.row.jsx-2374575105{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-2374575105{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-2374575105{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckRldGFpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPZ0IsQUFJTSxBQUdtQixBQUtELEFBY3FILEFBWTlHLEFBWUUsQUFJWCxBQVFGLFdBUFEsSUExQ0MsQUFrRFYsQ0EzRFosTUFtQ2tCLE1BaUJJLENBUWIsTUFsRFMsR0EwQkcsRUF5QlQsTUFSUSxLQTFDSixHQW1ERixHQXpCdUMsS0FpQm5ELEdBMUN5QixLQW1EakMsSUEzRHNCLElBMkNLLFVBMUNyQixFQVFvQixLQW1DbEIsYUFsQ2tCLEFBd0JMLGFBQ2MsS0F4QlgsTUFRRixVQVBKLElBUUssRUFnQmEsSUF2QlosU0FRRyxPQVByQixRQXVCRCxJQWZxQixrQkFDRCxpQkFDTixXQUNPLGtCQUNwQiIsImZpbGUiOiJDOlxcYy1jaGFpblxcY29tcG9uZW50c1xcbGVkZ2VyXFxMZWRnZXJEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGVkZ2VyTGlzdCBmcm9tIFwiLi9MZWRnZXJMaXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBcclxuPHNlY3Rpb24+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGVkZ2VyTGlzdCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxyXG4gICAgICB9XHJcblxyXG4gICAgICAudmVydGljYWwge1xyXG4gICAgICAgIGFsaWduLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaWdudXAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS45MTY2NztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiAjM2Q0NjRkO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM0Yzk7XHJcbiAgICAgICAgcGFkZGluZzogMy41cHggN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIHdpZHRoOiA2OSU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgLmNvbC1sZWZ0IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIzMzY1OTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM1NjViNzMsIzIzMzY1OSk7XHJcbiAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICB9XHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuLmFyY2hldHlwZS1mb3JtX19jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgY29sb3I6ICMwZDExMmI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8L3NlY3Rpb24+Il19 */\n/*@ sourceURL=C:\\c-chain\\components\\ledger\\LedgerDetail.js */"));
});

/***/ }),

/***/ "./components/ledger/LedgerHeader.js":
/*!*******************************************!*\
  !*** ./components/ledger/LedgerHeader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-815430561"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-815430561" + " " + "actions"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-815430561"
  }, "Ledger")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "815430561"
  }, "h1.jsx-815430561{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:2em;font-weight:200;margin-right:30px;padding-left:5px;color:#000;text-align:left;}.actions.jsx-815430561{align:right;}@media screen and (max-width:960px){.row.jsx-815430561{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-815430561{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.actions.jsx-815430561{align:right;}.archetype-form__container.jsx-815430561{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZ0IsQUFJNkksQUFXeEgsQUFNWSxBQUlYLEFBT0MsQUFLSCxXQVhRLENBVnJCLEFBaUJFLEdBS1UsYUFYVSxDQVliLFdBQ0csTUFaUSxRQWFOLFFBWlosUUFhUixRQXBCMkIsaUJBQ25CLHFDQWxCYyxjQUNBLGNBQ0UsZ0JBQ0Usa0JBQ0QsaUJBQ04sV0FDSyxnQkFDbEIiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXGxlZGdlclxcTGVkZ2VySGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gXHJcbjxzZWN0aW9uPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICA8aDE+TGVkZ2VyPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICBhbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIGFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4uYXJjaGV0eXBlLWZvcm1fX2NvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgICBjb2xvcjogIzBkMTEyYjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvc2VjdGlvbj4iXX0= */\n/*@ sourceURL=C:\\c-chain\\components\\ledger\\LedgerHeader.js */"));
});

/***/ }),

/***/ "./components/ledger/LedgerList.js":
/*!*****************************************!*\
  !*** ./components/ledger/LedgerList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LedgerList; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/useFetch */ "./components/useFetch.js");



function LedgerList(props) {
  var items = Object(_components_useFetch__WEBPACK_IMPORTED_MODULE_2__["default"])("http://localhost:10050/api/getLedger");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3572666656"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "jsx-3572666656"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
    className: "jsx-3572666656"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-3572666656"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "0",
    className: "jsx-3572666656"
  }, "Ledger Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "1",
    className: "jsx-3572666656"
  }, "Description"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "jsx-3572666656"
  }, items.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      className: "jsx-3572666656"
    }, i.itemId, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-3572666656"
    }, i.description));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3572666656"
  }, ".column.jsx-3572666656{text-align:left;}.vertical.jsx-3572666656{-webkit-align-left:30px;-ms-flex-line-packalign-left:30px;align-left:30px;height:1200px;}.table.jsx-3572666656{display:table;border-collapse:separate;border-spacing:2px;border-color:grey;}thead.jsx-3572666656{display:table-header-group;vertical-align:middle;border-color:inherit;}th.jsx-3572666656{color:rgb(102,102,102);font-size:14px;font-weight:400;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;padding-left:28px;}td.jsx-3572666656{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}tr.jsx-3572666656{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}.accounts.jsx-3572666656{font-size:13px;font-color:#000;}.agentItems.jsx-3572666656{font-size:13px;font-color:#000;}.agentCard.jsx-3572666656{background:#fff;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);position:center;text-align:center;box-sizing:border-box;align:center;padding-left:28px;padding-right:28px;margin-top:28px;margin-left:28px;margin-right:28px;background-color:#F7F6F3;width:1000px;height:400px;}.col-left.jsx-3572666656{box-sizing:border-box;min-height:100%;background:#233659;background:linear-gradient(135deg,#565b73,#233659);padding:25px;border-top-left-radius:5px;border-top-right-radius:5px;}@media screen and (max-width:960px){.row.jsx-3572666656{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-3572666656{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-3572666656{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0J3QixBQUlNLEFBR21CLEFBS0YsQUFPYSxBQU1GLEFBUVQsQUFVRixBQVVDLEFBS0EsQUFPQyxBQWtCTSxBQVlFLEFBSVgsQUFRRixXQVBRLEdBdkZNLENBMEM1QixBQUtBLEFBZ0RhLENBeEdaLEFBOEJxQixBQVVGLEFBc0JDLE1Ba0JGLENBMURELElBTk8sQ0FpRkYsQ0FRYixFQXREVCxBQUtBLEdBTzhDLENBaEMzQixBQVVGLEdBbEJDLEFBMERHLENBdkVBLENBZ0dULE1BUlEsR0FqRkcsR0FlQyxBQVVGLEVBbEJELEFBbUZQLEdBekJ1QyxDQXZFakMsSUF3RmxCLFFBakZKLEFBMEZKLEVBM0V1QixBQVVGLEVBdkNDLEVBUWxCLEVBb0RvQixBQTRCRyxTQTFEd0IsQUFVRixDQXZDM0MsTUE0RG9CLENBNEJsQixhQVZhLElBakJTLFNBa0JLLE9BaEQvQixBQVVGLE1BcUJtQixhQTFDSyxBQTJDQSxDQWlCVSxpQkEzRGhDLEFBMkN1QixXQWlCdEIsUUFoQm1CLGdCQUNDLGlCQUNDLGtCQUNPLHlCQUNaLGFBQ0EsYUFDakIiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXGxlZGdlclxcTGVkZ2VyTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlRmV0Y2ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlRmV0Y2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlZGdlckxpc3QocHJvcHMpIHtcclxuY29uc3QgaXRlbXMgPSB1c2VGZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwNTAvYXBpL2dldExlZGdlclwiKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiMFwiPkxlZGdlciBJZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHVtbj1cIjFcIj5EZXNjcmlwdGlvbjwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcChpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHI+e2kuaXRlbUlkfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aS5kZXNjcmlwdGlvbn08L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxyXG4gICAgICB9XHJcblxyXG4gICAgICAudmVydGljYWwge1xyXG4gICAgICAgIGFsaWduLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuICAgIH1cclxuXHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHRyIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoNjgsIDY4LCA2OCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICBcclxuICB9XHJcblxyXG4gICAgICAuYWNjb3VudHMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LWNvbG9yOiAjMDAwXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZ2VudEl0ZW1zIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC1jb2xvcjogIzAwMFxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIC5hZ2VudENhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI4cHggMCByZ2JhKDg2LDkxLDExNSwuMTUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGNkYzO1xyXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAgLmNvbC1sZWZ0IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIzMzY1OTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM1NjViNzMsIzIzMzY1OSk7XHJcbiAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICB9XHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuLmFyY2hldHlwZS1mb3JtX19jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgY29sb3I6ICMwZDExMmI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\ledger\\LedgerList.js */"));
}

/***/ }),

/***/ "./components/media-query.js":
/*!***********************************!*\
  !*** ./components/media-query.js ***!
  \***********************************/
/*! exports provided: MediaQueryProvider, MediaQueryConsumer, withMediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQueryProvider", function() { return MediaQueryProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQueryConsumer", function() { return MediaQueryConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMediaQuery", function() { return withMediaQuery; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);










var _React$createContext = react__WEBPACK_IMPORTED_MODULE_8___default.a.createContext({
  isMobile: false,
  isTablet: false
}),
    MediaQueryProvider = _React$createContext.Provider,
    MediaQueryConsumer = _React$createContext.Consumer;

var withMediaQuery = function withMediaQuery(Comp) {
  return (
    /*#__PURE__*/
    function (_PureComponent) {
      Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_class2, _PureComponent);

      function _class2() {
        var _getPrototypeOf2;

        var _this;

        Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _class2);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_class2)).call.apply(_getPrototypeOf2, [this].concat(args)));

        Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
          isMobile: false,
          isTablet: false
        });

        Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onResize", function () {
          var isMobile = window.innerWidth < 640;
          var isTablet = window.innerWidth < 960;

          if (isMobile !== _this.state.isMobile) {
            _this.setState({
              isMobile: isMobile
            });
          }

          if (isTablet !== _this.state.isTablet) {
            _this.setState({
              isTablet: isTablet
            });
          }
        });

        return _this;
      }

      Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_class2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          window.addEventListener('resize', this.onResize);
          this.onResize();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener('resize', this.onResize);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$state = this.state,
              isMobile = _this$state.isMobile,
              isTablet = _this$state.isTablet;
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MediaQueryProvider, {
            value: {
              isMobile: isMobile,
              isTablet: isTablet
            }
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Comp, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            isMobile: isMobile,
            isTablet: isTablet
          }, this.props)));
        }
      }]);

      return _class2;
    }(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"])
  );
};



/***/ }),

/***/ "./components/page.js":
/*!****************************!*\
  !*** ./components/page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/polyfill */ "./lib/polyfill.js");
/* harmony import */ var _media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media-query */ "./components/media-query.js");
/* harmony import */ var _lib_router_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/router-events */ "./lib/router-events.js");
/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/analytics */ "./lib/analytics.js");







_lib_router_events__WEBPACK_IMPORTED_MODULE_5__["default"].on('routeChangeComplete', function (url) {
  Object(_lib_analytics__WEBPACK_IMPORTED_MODULE_6__["trackPageview"])(url);
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_media_query__WEBPACK_IMPORTED_MODULE_4__["withMediaQuery"])(function (_ref) {
  var title = _ref.title,
      description = _ref.description,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2635003667"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2635003667"
  }, title || 'C-Chain Network Dashboard'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: description || 'C-Chain Network is for C-Levels to securely message.',
    className: "jsx-2635003667"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1164718727"
  }, ".jsx-2635003667{overflow-x:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxwYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCTyxBQUc2QixrQkFDcEIiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXHBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0ICcuLi9saWIvcG9seWZpbGwnO1xyXG5pbXBvcnQgeyB3aXRoTWVkaWFRdWVyeSB9IGZyb20gJy4vbWVkaWEtcXVlcnknO1xyXG5pbXBvcnQgUm91dGVyRXZlbnRzIGZyb20gJy4uL2xpYi9yb3V0ZXItZXZlbnRzJztcclxuaW1wb3J0IHsgdHJhY2tQYWdldmlldyB9IGZyb20gJy4uL2xpYi9hbmFseXRpY3MnO1xyXG5cclxuUm91dGVyRXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgdXJsID0+IHtcclxuICB0cmFja1BhZ2V2aWV3KHVybCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aE1lZGlhUXVlcnkoKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3RpdGxlIHx8ICdDLUNoYWluIE5ldHdvcmsgRGFzaGJvYXJkJ308L3RpdGxlPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbiB8fFxyXG4gICAgICAgICAgJ0MtQ2hhaW4gTmV0d29yayBpcyBmb3IgQy1MZXZlbHMgdG8gc2VjdXJlbHkgbWVzc2FnZS4nXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgICAge1xyXG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAge2BcclxuICAgICAgICBodG1sIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgKixcclxuICAgICAgICAqOmJlZm9yZSxcclxuICAgICAgICAqOmFmdGVyIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY1O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsXHJcbiAgICAgICAgICAgICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsXHJcbiAgICAgICAgICAgICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAna2Vybic7XHJcbiAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYxYzNmO1xyXG4gICAgICAgICAgY29sb3I6ICMxMTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6c2VsZWN0aW9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc2ZmY7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgW3JvbGU9J2dyaWQnXTpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEsXHJcbiAgICAgICAgaDIsXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMjE5NWZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjhiNWZiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2RlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcclxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlLFxyXG4gICAgICAgICAgICBzZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29kZTpiZWZvcmUsXHJcbiAgICAgICAgY29kZTphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiAnXFxgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJlIGNvZGU6YmVmb3JlLFxyXG4gICAgICAgIHByZSBjb2RlOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZW1vLWZvb3RlciAubm90ZSBjb2RlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwLjFyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmYtcmVzZXQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjgwMjAzMjQ3MDcwMzEyNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjYwMTgwNjY0MDYyNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjQyMzgyODEyNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI2NTYyNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjg4ODg4ODg4ODg4ODg4ODhlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmY2IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43OTAxMjM0NTY3OTAxMjM0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzEge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3MiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZnczIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzQge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3NSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZnc2IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzcge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3OCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZnc5IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm11dGUge1xyXG4gICAgICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDAgLTEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXNwbGF5LW1vYmlsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgbW9iaWxlXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICAgIC5kaXNwbGF5LW1vYmlsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhW3JvbGU9J2J1dHRvbiddIHtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uby10YXAtaGlnaGxpZ2h0LFxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLXk7XHJcbiAgICAgICAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xyXG4gICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vLXRhcC1jYWxsb3V0IHtcclxuICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vLWRyYWcge1xyXG4gICAgICAgICAgdXNlci1kcmFnOiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmlzdWFsbHktaGlkZGVuIHtcclxuICAgICAgICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICBtYXJnaW46IC0xcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddLFxyXG4gICAgICAgIHByZVtjbGFzcyo9J2xhbmd1YWdlLSddIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzkzYTM0O1xyXG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgICAgICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICAgd29yZC1icmVhazogbm9ybWFsO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICAgICAgICB0YWItc2l6ZTogNDtcclxuICAgICAgICAgIGh5cGhlbnM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5jb21tZW50LFxyXG4gICAgICAgIC50b2tlbi5wcm9sb2csXHJcbiAgICAgICAgLnRva2VuLmRvY3R5cGUsXHJcbiAgICAgICAgLnRva2VuLmNkYXRhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMmRiNTJkO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4ubmFtZXNwYWNlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmF0dHItdmFsdWUsXHJcbiAgICAgICAgLnRva2VuLnN0cmluZyB7XHJcbiAgICAgICAgICAvLyBjb2xvcjogI0EzMTUxNTtcclxuICAgICAgICAgIGNvbG9yOiAjY2EwZTBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4ucHVuY3R1YXRpb24sXHJcbiAgICAgICAgLnRva2VuLm9wZXJhdG9yIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzkzYTM0OyAvKiBubyBoaWdobGlnaHQgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLnVybCxcclxuICAgICAgICAudG9rZW4uc3ltYm9sLFxyXG4gICAgICAgIC50b2tlbi5udW1iZXIsXHJcbiAgICAgICAgLnRva2VuLmJvb2xlYW4sXHJcbiAgICAgICAgLnRva2VuLnZhcmlhYmxlLFxyXG4gICAgICAgIC50b2tlbi5jb25zdGFudCxcclxuICAgICAgICAudG9rZW4uaW5zZXJ0ZWQge1xyXG4gICAgICAgICAgY29sb3I6ICMzNmFjYWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5hdHJ1bGUsXHJcbiAgICAgICAgLnRva2VuLmtleXdvcmQsXHJcbiAgICAgICAgLmxhbmd1YWdlLWF1dG9ob3RrZXkgLnRva2VuLnNlbGVjdG9yLFxyXG4gICAgICAgIC5sYW5ndWFnZS1qc29uIC50b2tlbi5ib29sZWFuLFxyXG4gICAgICAgIC5sYW5ndWFnZS1qc29uIC50b2tlbi5udW1iZXIsXHJcbiAgICAgICAgY29kZVtjbGFzcyo9J2xhbmd1YWdlLWNzcyddIHtcclxuICAgICAgICAgIC8vIGNvbG9yOiAjMjUyNWY5O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmZ1bmN0aW9uIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzkzYTM0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uZGVsZXRlZCxcclxuICAgICAgICAubGFuZ3VhZ2UtYXV0b2hvdGtleSAudG9rZW4udGFnIHtcclxuICAgICAgICAgIGNvbG9yOiAjOWEwNTBmO1xyXG4gICAgICAgICAgLy8gY29sb3I6ICMyYjkxYWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5zZWxlY3RvcixcclxuICAgICAgICAubGFuZ3VhZ2UtYXV0b2hvdGtleSAudG9rZW4ua2V5d29yZCB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDA5ZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmltcG9ydGFudCxcclxuICAgICAgICAudG9rZW4uYm9sZCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLml0YWxpYyB7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5jbGFzcy1uYW1lLFxyXG4gICAgICAgIC5sYW5ndWFnZS1qc29uIC50b2tlbi5wcm9wZXJ0eSB7XHJcbiAgICAgICAgICBjb2xvcjogIzJiOTFhZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLnRhZyxcclxuICAgICAgICAudG9rZW4uc2VsZWN0b3Ige1xyXG4gICAgICAgICAgLy8gY29sb3I6ICM4MDAwMDA7XHJcbiAgICAgICAgICAvLyBjb2xvcjogIzlhMDUwZjtcclxuICAgICAgICAgIGNvbG9yOiAjMmI5MWFmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uYXR0ci1uYW1lLFxyXG4gICAgICAgIC50b2tlbi5wcm9wZXJ0eSxcclxuICAgICAgICAudG9rZW4ucmVnZXgsXHJcbiAgICAgICAgLnRva2VuLmVudGl0eSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmRpcmVjdGl2ZS50YWcgLnRhZyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzOTNhMzQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN2ZyBwYXRoLFxyXG4gICAgICAgIHN2ZyBjaXJjbGUge1xyXG4gICAgICAgICAgc2hhcGUtcmVuZGVyaW5nOiBnZW9tZXRyaWNwcmVjaXNpb247XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKSk7Il19 */\n/*@ sourceURL=C:\\c-chain\\components\\page.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1460487709"
  }, "html{line-height:1.15;-webkit-text-size-adjust:100%;height:100%;box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}body{position:relative;min-height:100%;margin:0;line-height:1.65;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;font-size:16px;font-weight:400;min-width:320px;direction:ltr;font-feature-settings:'kern';text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}html,body{background-color:#061c3f;color:#111;}::selection{background-color:#0076ff;color:#fff;}[role='grid']:focus{outline:none;}svg{text-rendering:optimizeLegibility;}h1,h2,h3{margin:0;}a{color:#2195ff;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;}a:hover{color:#68b5fb;}code{font-size:0.9em;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace, serif;}code:before,code:after{content:'`';}pre code:before,pre code:after{content:none;}.demo-footer .note code{background:rgba(0,0,0,0.2);padding:0.2rem;margin:0 0.1rem;border-radius:2px;}iframe{width:100%;height:100%;border:none;}.f-reset{font-size:1rem;}.f0{font-size:1.802032470703125em;}.f1{font-size:1.601806640625em;}.f2{font-size:1.423828125em;}.f3{font-size:1.265625em;}.f4{font-size:1.125em;}.f5{font-size:0.8888888888888888em;}.f6{font-size:0.7901234567901234em;}.fw1{font-weight:100;}.fw2{font-weight:200;}.fw3{font-weight:300;}.fw4{font-weight:400;}.fw5{font-weight:500;}.fw6{font-weight:600;}.fw7{font-weight:700;}.fw8{font-weight:800;}.fw9{font-weight:900;}.subtitle{color:#999;}.mute{color:#757575;}.tc{text-align:center;}.row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 -1.5rem;}.column{-webkit-flex:1;-ms-flex:1;flex:1;padding:0 1.5rem;}.display-mobile{display:none;}@media screen and (max-width:640px){.display-mobile{display:unset;}}a[role='button']{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.no-tap-highlight,a{-webkit-touch-callout:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent;}.no-tap-callout{-webkit-touch-callout:none;}.no-drag{-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-user-select:none;-webkit-user-drag:none;-webkit-user-select:none;-ms-user-select:none;}.visually-hidden{-webkit-clip:rect(0 0 0 0);clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;overflow:hidden;position:absolute;}code[class*='language-'],pre[class*='language-']{color:#393a34;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;font-size:0.95em;line-height:1.4em;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#2db52d;font-style:italic;}.token.namespace{opacity:0.7;}.token.attr-value,.token.string{color:#ca0e0e;}.token.punctuation,.token.operator{color:#393a34;}.token.url,.token.symbol,.token.number,.token.boolean,.token.variable,.token.constant,.token.inserted{color:#36acaa;}.token.atrule,.token.keyword,.language-autohotkey .token.selector,.language-json .token.boolean,.language-json .token.number,code[class*='language-css']{font-weight:600;}.token.function{color:#393a34;}.token.deleted,.language-autohotkey .token.tag{color:#9a050f;}.token.selector,.language-autohotkey .token.keyword{color:#00009f;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.class-name,.language-json .token.property{color:#2b91af;}.token.tag,.token.selector{color:#2b91af;}.token.attr-name,.token.property,.token.regex,.token.entity{color:#ff0000;}.token.directive.tag .tag{background:#ffff00;color:#393a34;}svg{shape-rendering:crispEdges;}svg path,svg circle{shape-rendering:geometricprecision;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxwYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCTyxBQUc0QixBQVFFLEFBR0QsQUFtQk8sQUFJQSxBQUlaLEFBR3FCLEFBS3pCLEFBR0ssQUFLQSxBQUdFLEFBT0osQUFJQyxBQUdpQixBQU1uQixBQUtJLEFBR2UsQUFHSCxBQUdILEFBR0gsQUFHSCxBQUdhLEFBR0EsQUFHZixBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHTCxBQUdHLEFBR0ksQUFHTCxBQUtOLEFBSU0sQUFLRyxBQUlTLEFBUUUsQUFNQSxBQUdaLEFBUUksQUFXTCxBQWVBLEFBSUYsQUFLRSxBQUlBLEFBU0EsQUFTRSxBQUdGLEFBSUEsQUFLQSxBQUlHLEFBR0MsQUFJSixBQU1BLEFBTUEsQUFHSyxBQUlRLEFBSVEsU0FqUHJDLEVBK0JjLEFBd0RkLENBckVBLEFBdUpBLENBakxBLEFBOEJBLEFBbUZBLENBdEd1QixBQUt2QixBQWtGQSxBQW9CRSxBQXdDYyxBQWVJLEFBU3BCLEFBSUEsQUFTQSxBQVlBLEFBS0EsQUFJQSxBQVdBLEFBTUEsQUFNQSxDQW5NQSxDQXZCUyxBQStDVCxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFnSEEsQ0FsUGdDLEFBa1FoQyxDQXZQa0IsQUFzRmxCLEFBMENBLEFBMEhBLENBN1BBLEFBZ1JnQixFQTFMaEIsRUFoQmMsQ0FhZCxDQTdEYSxBQUlBLEFBOEhXLEVBekZQLEFBaUJqQixBQWdGeUIsQUFNekIsQUE4R0EsQ0F2RmtCLEVBaEhsQixDQWVBLEFBR0EsQ0E2R0EsQ0FqRW1CLEFBc0luQixDQTdRVyxBQTZCWCxDQXNDQSxBQWlOQSxDQWpRQSxBQUlBLE1BcUNrQixDQTNEQyxDQXlMRCxFQWJMLENBeExDLEFBZ0tTLEdBYnZCLEFBcUJxQixPQWlCVCxDQWpIUSxDQXZFSSxDQWNRLEFBdUxWLElBckpPLEdBeUlmLENBekJZLENBUWdCLEtBNUJyQixFQXBFckIsQ0F1R21CLEVBV1AsQ0FZUSxDQXJNcEIsUUEwTFcsR0ExQlEsTUEyQkQsQUFXQyxXQTlCbkIsS0FvQm9CLENBV0EsV0F2SnBCLE1BNklBLENBV2EsV0EvSWIsQUFnSmUsa0JBMUJTLEtBbkNMLFVBcUJuQixPQXBCQSxBQW1DeUIsdUJBQ0UsR0FuS1YsR0E0TGpCLFlBM0xrQixPQW1LSyxTQWxLTCxZQW1LbEIsSUFsS2dCLGNBQ2UsNkJBQ0ssa0NBQ0MsbUNBQ0Qsa0NBQ1gsNkdBQ3pCIiwiZmlsZSI6IkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCAnLi4vbGliL3BvbHlmaWxsJztcclxuaW1wb3J0IHsgd2l0aE1lZGlhUXVlcnkgfSBmcm9tICcuL21lZGlhLXF1ZXJ5JztcclxuaW1wb3J0IFJvdXRlckV2ZW50cyBmcm9tICcuLi9saWIvcm91dGVyLWV2ZW50cyc7XHJcbmltcG9ydCB7IHRyYWNrUGFnZXZpZXcgfSBmcm9tICcuLi9saWIvYW5hbHl0aWNzJztcclxuXHJcblJvdXRlckV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHVybCA9PiB7XHJcbiAgdHJhY2tQYWdldmlldyh1cmwpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhNZWRpYVF1ZXJ5KCh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPnt0aXRsZSB8fCAnQy1DaGFpbiBOZXR3b3JrIERhc2hib2FyZCd9PC90aXRsZT5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgZGVzY3JpcHRpb24gfHxcclxuICAgICAgICAgICdDLUNoYWluIE5ldHdvcmsgaXMgZm9yIEMtTGV2ZWxzIHRvIHNlY3VyZWx5IG1lc3NhZ2UuJ1xyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICosXHJcbiAgICAgICAgKjpiZWZvcmUsXHJcbiAgICAgICAgKjphZnRlciB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42NTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLFxyXG4gICAgICAgICAgICAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLFxyXG4gICAgICAgICAgICAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2tlcm4nO1xyXG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MWMzZjtcclxuICAgICAgICAgIGNvbG9yOiAjMTExO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6OnNlbGVjdGlvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NmZmO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFtyb2xlPSdncmlkJ106Zm9jdXMge1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxLFxyXG4gICAgICAgIGgyLFxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzIxOTVmZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogIzY4YjVmYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXHJcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZSxcclxuICAgICAgICAgICAgc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvZGU6YmVmb3JlLFxyXG4gICAgICAgIGNvZGU6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogJ1xcYCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZSBjb2RlOmJlZm9yZSxcclxuICAgICAgICBwcmUgY29kZTphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVtby1mb290ZXIgLm5vdGUgY29kZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAgMC4xcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZnJhbWUge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mLXJlc2V0IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmYwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS44MDIwMzI0NzA3MDMxMjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmYxIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS42MDE4MDY2NDA2MjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmYyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS40MjM4MjgxMjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmYzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNjU2MjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmY0IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmY1IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ODg4ODg4ODg4ODg4ODg4ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mNiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuNzkwMTIzNDU2NzkwMTIzNGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZncxIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzIge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3MyB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZnc0IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3NiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZnc3IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzgge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3OSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VidGl0bGUge1xyXG4gICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tdXRlIHtcclxuICAgICAgICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGMge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIC0xLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGlzcGxheS1tb2JpbGUge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIG1vYmlsZVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAgICAgICAuZGlzcGxheS1tb2JpbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYVtyb2xlPSdidXR0b24nXSB7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm8tdGFwLWhpZ2hsaWdodCxcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgICAgICAgIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xyXG4gICAgICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcclxuICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uby10YXAtY2FsbG91dCB7XHJcbiAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uby1kcmFnIHtcclxuICAgICAgICAgIHVzZXItZHJhZzogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpc3VhbGx5LWhpZGRlbiB7XHJcbiAgICAgICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvZGVbY2xhc3MqPSdsYW5ndWFnZS0nXSxcclxuICAgICAgICBwcmVbY2xhc3MqPSdsYW5ndWFnZS0nXSB7XHJcbiAgICAgICAgICBjb2xvcjogIzM5M2EzNDtcclxuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgICAgICAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gICAgICAgICAgdGFiLXNpemU6IDQ7XHJcbiAgICAgICAgICBoeXBoZW5zOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uY29tbWVudCxcclxuICAgICAgICAudG9rZW4ucHJvbG9nLFxyXG4gICAgICAgIC50b2tlbi5kb2N0eXBlLFxyXG4gICAgICAgIC50b2tlbi5jZGF0YSB7XHJcbiAgICAgICAgICBjb2xvcjogIzJkYjUyZDtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLm5hbWVzcGFjZSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5hdHRyLXZhbHVlLFxyXG4gICAgICAgIC50b2tlbi5zdHJpbmcge1xyXG4gICAgICAgICAgLy8gY29sb3I6ICNBMzE1MTU7XHJcbiAgICAgICAgICBjb2xvcjogI2NhMGUwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLnB1bmN0dWF0aW9uLFxyXG4gICAgICAgIC50b2tlbi5vcGVyYXRvciB7XHJcbiAgICAgICAgICBjb2xvcjogIzM5M2EzNDsgLyogbm8gaGlnaGxpZ2h0ICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi51cmwsXHJcbiAgICAgICAgLnRva2VuLnN5bWJvbCxcclxuICAgICAgICAudG9rZW4ubnVtYmVyLFxyXG4gICAgICAgIC50b2tlbi5ib29sZWFuLFxyXG4gICAgICAgIC50b2tlbi52YXJpYWJsZSxcclxuICAgICAgICAudG9rZW4uY29uc3RhbnQsXHJcbiAgICAgICAgLnRva2VuLmluc2VydGVkIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzZhY2FhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uYXRydWxlLFxyXG4gICAgICAgIC50b2tlbi5rZXl3b3JkLFxyXG4gICAgICAgIC5sYW5ndWFnZS1hdXRvaG90a2V5IC50b2tlbi5zZWxlY3RvcixcclxuICAgICAgICAubGFuZ3VhZ2UtanNvbiAudG9rZW4uYm9vbGVhbixcclxuICAgICAgICAubGFuZ3VhZ2UtanNvbiAudG9rZW4ubnVtYmVyLFxyXG4gICAgICAgIGNvZGVbY2xhc3MqPSdsYW5ndWFnZS1jc3MnXSB7XHJcbiAgICAgICAgICAvLyBjb2xvcjogIzI1MjVmOTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5mdW5jdGlvbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzM5M2EzNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmRlbGV0ZWQsXHJcbiAgICAgICAgLmxhbmd1YWdlLWF1dG9ob3RrZXkgLnRva2VuLnRhZyB7XHJcbiAgICAgICAgICBjb2xvcjogIzlhMDUwZjtcclxuICAgICAgICAgIC8vIGNvbG9yOiAjMmI5MWFmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uc2VsZWN0b3IsXHJcbiAgICAgICAgLmxhbmd1YWdlLWF1dG9ob3RrZXkgLnRva2VuLmtleXdvcmQge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDAwOWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5pbXBvcnRhbnQsXHJcbiAgICAgICAgLnRva2VuLmJvbGQge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5pdGFsaWMge1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uY2xhc3MtbmFtZSxcclxuICAgICAgICAubGFuZ3VhZ2UtanNvbiAudG9rZW4ucHJvcGVydHkge1xyXG4gICAgICAgICAgY29sb3I6ICMyYjkxYWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi50YWcsXHJcbiAgICAgICAgLnRva2VuLnNlbGVjdG9yIHtcclxuICAgICAgICAgIC8vIGNvbG9yOiAjODAwMDAwO1xyXG4gICAgICAgICAgLy8gY29sb3I6ICM5YTA1MGY7XHJcbiAgICAgICAgICBjb2xvcjogIzJiOTFhZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmF0dHItbmFtZSxcclxuICAgICAgICAudG9rZW4ucHJvcGVydHksXHJcbiAgICAgICAgLnRva2VuLnJlZ2V4LFxyXG4gICAgICAgIC50b2tlbi5lbnRpdHkge1xyXG4gICAgICAgICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5kaXJlY3RpdmUudGFnIC50YWcge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmYwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMzkzYTM0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdmcgcGF0aCxcclxuICAgICAgICBzdmcgY2lyY2xlIHtcclxuICAgICAgICAgIHNoYXBlLXJlbmRlcmluZzogZ2VvbWV0cmljcHJlY2lzaW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9kaXY+XHJcbikpOyJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\page.js */"), children);
}));

/***/ }),

/***/ "./components/useFetch.js":
/*!********************************!*\
  !*** ./components/useFetch.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useFetch; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function useFetch(url) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  function getData() {
    return _getData.apply(this, arguments);
  }

  function _getData() {
    _getData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(url);

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              data = _context.sent;
              setData(data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getData.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getData();
  }, []);
  return data;
}

/***/ }),

/***/ "./lib/analytics.js":
/*!**************************!*\
  !*** ./lib/analytics.js ***!
  \**************************/
/*! exports provided: GA_TRACKING_ID, trackPageview, trackEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_TRACKING_ID", function() { return GA_TRACKING_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackPageview", function() { return trackPageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackEvent", function() { return trackEvent; });
var GA_TRACKING_ID = '';
var trackPageview = function trackPageview(url) {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url
  });
};
var trackEvent = function trackEvent(_ref) {
  var action = _ref.action,
      category = _ref.category,
      label = _ref.label,
      value = _ref.value;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

/***/ }),

/***/ "./lib/polyfill.js":
/*!*************************!*\
  !*** ./lib/polyfill.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);



if (!_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default.a) {
  Object.entries = function (obj) {
    var ownProps = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(obj),
        i = ownProps.length,
        resArray = new Array(i);

    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }

    return resArray;
  };
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

/***/ }),

/***/ "./lib/router-events.js":
/*!******************************!*\
  !*** ./lib/router-events.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "mitt");
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mitt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


var emitter = mitt__WEBPACK_IMPORTED_MODULE_0___default()();
/* harmony default export */ __webpack_exports__["default"] = (emitter);

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeStart = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  emitter.emit.apply(emitter, ['routeChangeStart'].concat(args));
};

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeComplete = function () {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  emitter.emit.apply(emitter, ['routeChangeComplete'].concat(args));
};

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeError = function () {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  emitter.emit.apply(emitter, ['routeChangeError'].concat(args));
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/entries.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/entries */ "core-js/library/fn/object/entries");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/page */ "./components/page.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_C_ChainDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/C-ChainDashboard */ "./components/C-ChainDashboard.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: ""
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2586801477"
  }, "C-Chain Dashboard"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-2586801477"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2586801477" + " " + "main"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2586801477"
  }, "The C-Chain Dashboard"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_C_ChainDashboard__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2586801477"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2586801477"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2586801477"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2586801477"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2586801477"
  }, ".main.jsx-2586801477{background-color:#EFF6FF;}b.jsx-2586801477{font-weight:normal;}h1.jsx-2586801477{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:2em;font-weight:200;margin-right:30px;padding-left:5px;color:#000;text-align:center;}@-webkit-keyframes typing-jsx-2586801477{from{width:0;}to{width:100%;}}@keyframes typing-jsx-2586801477{from{width:0;}to{width:100%;}}@-webkit-keyframes blink-caret-jsx-2586801477{from,to{border-color:transparent;}50%{border-color:orange;}}@keyframes blink-caret-jsx-2586801477{from,to{border-color:transparent;}50%{border-color:orange;}}h2.jsx-2586801477{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#000;text-align:center;}p.jsx-2586801477{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:18px;margin-right:30px;padding-left:5px;color:#000;text-align:center;}img.jsx-2586801477{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:80px;width:80px;font-size:12px;text-align:center;}ul.jsx-2586801477{display:inline-block;color:#999;position:absolute;margin-left:-15px;}.connected.jsx-2586801477{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}.after.jsx-2586801477{box-sizing:inherit;}@media screen and (max-width:960px){.row.jsx-2586801477{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;padding-bottom:8px;padding-top:8px;padding-left:28px;}.column.jsx-2586801477{width:100%;text-align:center;max-width:350px;padding-top:8px;padding-bottom:8px;margin-bottom:28px;}.center.jsx-2586801477{text-align:center;}.column2.jsx-2586801477{list-style:none;display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUs0QixBQUdKLEFBSW1ILEFBYTVILEFBQ0MsQUFLb0IsQUFDVixBQUlpSCxBQVdBLEFBVUEsQUFTN0csQUFPaEIsQUFVUSxBQU1LLEFBU1gsQUFTTyxBQUlGLFFBdEZMLEdBQ0MsQUFnREosQUF5QlUsS0FhTCxFQUpmLENBbkdBLEFBMkVGLENBcEQwQixDQW1DUCxBQVFOLElBckViLEFBeUJvQyxJQXFFaEIsQUFhbEIsR0E3Q3dCLEFBUUgsYUF5QkgsS0FoQ00sR0FRTCxRQXlCRSxPQWhDbkIsSUFRaUIsTUFZQSxFQWFFLFdBeEJKLElBWUksSUFhckIsU0F4QkYsTUFZb0IsZ0JBQ0UsRUFoRkYsQUF3QkEsQUFXQSxBQVVGLFlBQ0QsRUE3Q0csQUF3QkMsQUFXQSxFQTZDbkIsT0FsQ21CLEtBN0NDLENBd0JHLEFBV0QsU0FXQSxNQTdDQSxHQW1DRCxDQVhDLFFBc0JwQixNQTdDbUIsRUFtQ04sRUFYTSxTQVlDLElBbkNQLElBd0JBLE9BdkJPLEdBbUNwQixDQVhvQixjQXZCcEIsSUF3QkEiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IENDaGFpbkRhc2hib2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0MtQ2hhaW5EYXNoYm9hcmQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAgIDxQYWdlIHRpdGxlPVwiXCI+XHJcblx0PEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5DLUNoYWluIERhc2hib2FyZDwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgIDxoMT5UaGUgQy1DaGFpbiBEYXNoYm9hcmQ8L2gxPlxyXG4gICAgICA8Q0NoYWluRGFzaGJvYXJkIC8+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuXHJcbi5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGNkZGO1xyXG59XHJcbiAgYiB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcblxyXG4vKiBUaGUgdHlwaW5nIGVmZmVjdCAqL1xyXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XHJcbmZyb20geyB3aWR0aDogMCB9XHJcbnRvIHsgd2lkdGg6IDEwMCUgfVxyXG59XHJcblxyXG4vKiBUaGUgdHlwZXdyaXRlciBjdXJzb3IgZWZmZWN0ICovXHJcbkBrZXlmcmFtZXMgYmxpbmstY2FyZXQge1xyXG5mcm9tLCB0byB7IGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgfVxyXG41MCUgeyBib3JkZXItY29sb3I6IG9yYW5nZTsgfVxyXG59XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29ubmVjdGVkIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICM1MGUzYzI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5hZnRlciB7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5cclxuLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIHRhYmxldFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC5yb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgfVxyXG5cclxuICBcclxuICAuY29sdW1uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICB9XHJcblxyXG4gIC5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbHVtbjIge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5gfTwvc3R5bGU+XHJcbiAgPC9QYWdlPlxyXG5cclxuXHJcblxyXG4gIClcclxuIl19 */\n/*@ sourceURL=C:\\c-chain\\pages\\index.js */"));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\c-chain\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/entries":
/*!****************************************************!*\
  !*** external "core-js/library/fn/object/entries" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/entries");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "mitt":
/*!***********************!*\
  !*** external "mitt" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mitt");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map