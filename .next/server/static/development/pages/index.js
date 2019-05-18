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
/* harmony import */ var _users_UserCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/UserCard */ "./components/users/UserCard.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-1215595737"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1215595737" + " " + "row"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1215595737" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ledger_LedgerCard__WEBPACK_IMPORTED_MODULE_2__["default"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1215595737"
  }, ".column.jsx-1215595737{text-align:center;}.vertical.jsx-1215595737{-webkit-align-left:30px;-ms-flex-line-packalign-left:30px;align-left:30px;height:1200px;}.col-left.jsx-1215595737{box-sizing:border-box;min-height:100%;background:#233659;background:linear-gradient(135deg,#565b73,#233659);padding:25px;border-top-left-radius:5px;border-top-right-radius:5px;}@media screen and (max-width:960px){.row.jsx-1215595737{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-1215595737{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-1215595737{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxDLUNoYWluRGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUlNLEFBR21CLEFBS00sQUFZRSxBQUlYLEFBUUYsV0FQUSxJQVFULEdBakNaLElBU2tCLE1BaUJJLENBUWIsU0F4QlksRUF5QlQsTUFSUSxRQVNOLEdBekJ1QyxLQWlCbkQsUUFTUixJQWpDc0IsSUFpQkssVUFoQnJCLE9BaUJFLGFBVmEsYUFDYywyQkFDQyw0QkFDL0IiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXEMtQ2hhaW5EYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGVkZ2VyQ2FyZCBmcm9tICcuL2xlZGdlci9MZWRnZXJDYXJkJztcclxuaW1wb3J0IEFydGljbGVDYXJkIGZyb20gJy4vYXJ0aWNsZXMvQXJ0aWNsZUNhcmQnO1xyXG5pbXBvcnQgVXNlckNhcmQgZnJvbSAnLi91c2Vycy9Vc2VyQ2FyZCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT5cclxuPHNlY3Rpb24+XHJcbjxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgPExlZGdlckNhcmQgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC52ZXJ0aWNhbCB7XHJcbiAgICAgICAgYWxpZ24tbGVmdDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDEyMDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAuY29sLWxlZnQge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjMzNjU5O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzU2NWI3MywjMjMzNjU5KTtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgIH1cclxuXHJcbiAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4uYXJjaGV0eXBlLWZvcm1fX2NvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgICBjb2xvcjogIzBkMTEyYjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvc2VjdGlvbj4iXX0= */\n/*@ sourceURL=C:\\c-chain\\components\\C-ChainDashboard.js */"));
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
    className: "jsx-2437812323"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2437812323" + " " + "articleCard"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ArticleHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ArticleList__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2437812323"
  }, ".articleCard.jsx-2437812323{background:#fff;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);position:center;text-align:center;box-sizing:border-box;align:center;padding-left:28px;padding-right:28px;margin-top:28px;margin-left:28px;margin-right:28px;background-color:#FFFFFF;width:800px;height:700px;}@media screen and (max-width:960px){.row.jsx-2437812323{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-2437812323{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-2437812323{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxhcnRpY2xlc1xcQXJ0aWNsZUNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWdCLEFBSXlCLEFBb0JRLEFBSVgsQUFRRixXQVBRLElBUVQsQ0FoQ1EsWUF5QkUsQ0FRYixLQWhDcUMsTUFpQ2xDLE1BUlEsUUFTTixRQVJaLFFBU1IsUUFsQ3dCLEFBa0JHLGdCQWpCRCxDQWtCbEIsaUJBakJzQixzQkFDVCxhQUNLLGtCQUNDLG1CQUNILGdCQUNDLGlCQUNDLGtCQUNPLHlCQUNiLFlBQ0MsYUFDakIiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXGFydGljbGVzXFxBcnRpY2xlQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVyJ1xyXG5pbXBvcnQgQXJ0aWNsZURldGFpbCBmcm9tICcuL0FydGljbGVEZXRhaWwnO1xyXG5pbXBvcnQgQXJ0aWNsZUhlYWRlciBmcm9tICcuL0FydGljbGVIZWFkZXInO1xyXG5pbXBvcnQgQXJ0aWNsZUxpc3QgZnJvbSAnLi9BcnRpY2xlTGlzdCc7XHJcbmltcG9ydCB1c2VGZXRjaCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZUZldGNoJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PlxyXG48Q29udGFpbmVyIGNlbnRlcj5cclxuPHNlY3Rpb24+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVDYXJkXCI+XHJcbiAgICBcclxuICAgIDxBcnRpY2xlSGVhZGVyIC8+XHJcbiAgICA8QXJ0aWNsZUxpc3QgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAuYXJ0aWNsZUNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI4cHggMCByZ2JhKDg2LDkxLDExNSwuMTUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIHRhYmxldFxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbi5hcmNoZXR5cGUtZm9ybV9fY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgIGNvbG9yOiAjMGQxMTJiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPC9Db250YWluZXI+Il19 */\n/*@ sourceURL=C:\\c-chain\\components\\articles\\ArticleCard.js */")));
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
    className: "jsx-3381300016"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3381300016" + " " + "actions"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3381300016"
  }, "Articles")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3381300016"
  }, "h1.jsx-3381300016{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:1.7em;font-weight:200;margin-right:30px;padding-left:5px;color:#000;text-align:left;}.actions.jsx-3381300016{align:right;}@media screen and (max-width:960px){.row.jsx-3381300016{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-3381300016{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.actions.jsx-3381300016{align:right;}.archetype-form__container.jsx-3381300016{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxhcnRpY2xlc1xcQXJ0aWNsZUhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZ0IsQUFJNkksQUFXeEgsQUFNWSxBQUlYLEFBT0MsQUFLSCxXQVhRLENBVnJCLEFBaUJFLEdBS1UsYUFYVSxDQVliLFdBQ0csTUFaUSxRQWFOLFFBWlosUUFhUixRQXBCMkIsaUJBQ25CLHFDQWxCYyxjQUNFLGdCQUNBLGdCQUNFLGtCQUNELGlCQUNOLFdBQ0ssZ0JBQ2xCIiwiZmlsZSI6IkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxhcnRpY2xlc1xcQXJ0aWNsZUhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IFxyXG48c2VjdGlvbj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgPGgxPkFydGljbGVzPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgIGFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIHRhYmxldFxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbi5hcmNoZXR5cGUtZm9ybV9fY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgIGNvbG9yOiAjMGQxMTJiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9zZWN0aW9uPiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\articles\\ArticleHeader.js */"));
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
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "1",
    className: "jsx-3572666656"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "jsx-3572666656"
  }, articles.map(function (a) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      className: "jsx-3572666656"
    }, a.articleId, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-3572666656"
    }, a.description));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3572666656"
  }, ".column.jsx-3572666656{text-align:left;}.vertical.jsx-3572666656{-webkit-align-left:30px;-ms-flex-line-packalign-left:30px;align-left:30px;height:1200px;}.table.jsx-3572666656{display:table;border-collapse:separate;border-spacing:2px;border-color:grey;}thead.jsx-3572666656{display:table-header-group;vertical-align:middle;border-color:inherit;}th.jsx-3572666656{color:rgb(102,102,102);font-size:14px;font-weight:400;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;padding-left:28px;}td.jsx-3572666656{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}tr.jsx-3572666656{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}.accounts.jsx-3572666656{font-size:13px;font-color:#000;}.agentItems.jsx-3572666656{font-size:13px;font-color:#000;}.agentCard.jsx-3572666656{background:#fff;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);position:center;text-align:center;box-sizing:border-box;align:center;padding-left:28px;padding-right:28px;margin-top:28px;margin-left:28px;margin-right:28px;background-color:#F7F6F3;width:1000px;height:400px;}.col-left.jsx-3572666656{box-sizing:border-box;min-height:100%;background:#233659;background:linear-gradient(135deg,#565b73,#233659);padding:25px;border-top-left-radius:5px;border-top-right-radius:5px;}@media screen and (max-width:960px){.row.jsx-3572666656{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-3572666656{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-3572666656{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxhcnRpY2xlc1xcQXJ0aWNsZUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0J3QixBQUlNLEFBR21CLEFBS0YsQUFPYSxBQU1GLEFBUVQsQUFVRixBQVVDLEFBS0EsQUFPQyxBQWtCTSxBQVlFLEFBSVgsQUFRRixXQVBRLEdBdkZNLENBMEM1QixBQUtBLEFBZ0RhLENBeEdaLEFBOEJxQixBQVVGLEFBc0JDLE1Ba0JGLENBMURELElBTk8sQ0FpRkYsQ0FRYixFQXREVCxBQUtBLEdBTzhDLENBaEMzQixBQVVGLEdBbEJDLEFBMERHLENBdkVBLENBZ0dULE1BUlEsR0FqRkcsR0FlQyxBQVVGLEVBbEJELEFBbUZQLEdBekJ1QyxDQXZFakMsSUF3RmxCLFFBakZKLEFBMEZKLEVBM0V1QixBQVVGLEVBdkNDLEVBUWxCLEVBb0RvQixBQTRCRyxTQTFEd0IsQUFVRixDQXZDM0MsTUE0RG9CLENBNEJsQixhQVZhLElBakJTLFNBa0JLLE9BaEQvQixBQVVGLE1BcUJtQixhQTFDSyxBQTJDQSxDQWlCVSxpQkEzRGhDLEFBMkN1QixXQWlCdEIsUUFoQm1CLGdCQUNDLGlCQUNDLGtCQUNPLHlCQUNaLGFBQ0EsYUFDakIiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXGFydGljbGVzXFxBcnRpY2xlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlRmV0Y2ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlRmV0Y2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGVMaXN0KHByb3BzKSB7XHJcbmNvbnN0IGFydGljbGVzID0gdXNlRmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjEwMDUwL2FwaS9nZXRBcnRpY2xlc1wiKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiMFwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHVtbj1cIjFcIj48L3RoPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHthcnRpY2xlcy5tYXAoYSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPnthLmFydGljbGVJZH1cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2EuZGVzY3JpcHRpb259PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcclxuICAgICAgfVxyXG5cclxuICAgICAgLnZlcnRpY2FsIHtcclxuICAgICAgICBhbGlnbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFibGUge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhlYWQge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNjgsIDY4LCA2OCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICB0ciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICBjb2xvcjogcmdiKDY4LCA2OCwgNjgpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAgICAgLmFjY291bnRzIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC1jb2xvcjogIzAwMFxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWdlbnRJdGVtcyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtY29sb3I6ICMwMDBcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcblxyXG4gICAgICAuYWdlbnRDYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyOHB4IDAgcmdiYSg4Niw5MSwxMTUsLjE1KTtcclxuICAgICAgICBwb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjhweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjZGMztcclxuICAgICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgIC5jb2wtbGVmdCB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMzM2NTk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjNTY1YjczLCMyMzM2NTkpO1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgfVxyXG5cclxuICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIHRhYmxldFxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbi5hcmNoZXR5cGUtZm9ybV9fY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgIGNvbG9yOiAjMGQxMTJiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\c-chain\\components\\articles\\ArticleList.js */"));
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

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container */ "./components/container.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    wide: true,
    dark: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-50229153"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "50229153"
  }, "footer.jsx-50229153{padding:2rem 0 4rem;min-height:400px;}a.jsx-50229153,p.jsx-50229153,.copyright.jsx-50229153{color:#8c8c8c;}h4.jsx-50229153 a.jsx-50229153{color:inherit;}a.jsx-50229153:hover{color:#efefef;}.copyright.jsx-50229153{margin-top:3rem;}.copyright.jsx-50229153 div.jsx-50229153{margin-top:0.5rem;}.row.jsx-50229153{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}h4.jsx-50229153{margin-bottom:0.75rem;}p.jsx-50229153{margin-top:0;margin-bottom:0.25rem;}*.jsx-50229153+h4.jsx-50229153{margin-top:1rem;}@media screen and (max-width:640px){footer.jsx-50229153 .column.jsx-50229153{-webkit-flex:1 1 120px;-ms-flex:1 1 120px;flex:1 1 120px;}footer.jsx-50229153 .row.jsx-50229153{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV1csQUFHbUMsQUFNTixBQUdBLEFBR0EsQUFHRSxBQUdFLEFBR0ssQUFHRCxBQUdULEFBSUcsQUFLQyxBQUdJLGFBWEMsQ0FyQnhCLEFBR0EsQUFHQSxFQUdBLEFBZ0JBLEVBYkEsRUFsQm1CLEVBd0JuQixhQUlBLEVBM0JBLG9CQW1DRSxZQUdpQix3Q0FsQm5CLGlCQW1CRSIsImZpbGUiOiJDOlxcYy1jaGFpblxcY29tcG9uZW50c1xcZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcic7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgPENvbnRhaW5lciB3aWRlIGRhcms+XHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMCA0cmVtO1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEsXHJcbiAgICAgICAgICAgIHAsXHJcbiAgICAgICAgICAgIC5jb3B5cmlnaHQge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg0IGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZWZlZmVmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb3B5cmlnaHQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvcHlyaWdodCBkaXYge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKiArIGg0IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciBtb2JpbGVcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICAgICAgICBmb290ZXIgLmNvbHVtbiB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGZvb3RlciAucm93IHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgPC9Db250YWluZXI+XHJcbik7Il19 */\n/*@ sourceURL=C:\\c-chain\\components\\footer.js */"))));
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
/* harmony import */ var _LedgerHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LedgerHeader */ "./components/ledger/LedgerHeader.js");
/* harmony import */ var _LedgerList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LedgerList */ "./components/ledger/LedgerList.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    center: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-1209196970"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1209196970" + " " + "ledgerCard"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LedgerHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LedgerList__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1209196970"
  }, ".ledgerCard.jsx-1209196970{background:#fff;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);position:center;text-align:center;box-sizing:border-box;align:center;padding-left:28px;padding-right:28px;margin-top:28px;margin-left:28px;margin-right:28px;background-color:#FFFFFF;width:900px;height:650px;}@media screen and (max-width:960px){.row.jsx-1209196970{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-1209196970{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-1209196970{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBSXlCLEFBb0JRLEFBSVgsQUFTRixXQVJRLElBU1QsQ0FqQ1EsWUF5QkUsQ0FTYixLQWpDcUMsTUFrQ2xDLE1BVFEsUUFVTixRQVRaLFFBVVIsUUFuQ3dCLEFBa0JHLGdCQWpCRCxDQWtCbEIsaUJBakJzQixzQkFDVCxhQUNLLGtCQUNDLG1CQUNILGdCQUNDLGlCQUNDLGtCQUNPLHlCQUNiLFlBQ0MsYUFDakIiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXGxlZGdlclxcTGVkZ2VyQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVyJ1xyXG5pbXBvcnQgTGVkZ2VySGVhZGVyIGZyb20gJy4vTGVkZ2VySGVhZGVyJztcclxuaW1wb3J0IExlZGdlckxpc3QgZnJvbSAnLi9MZWRnZXJMaXN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PlxyXG48Q29udGFpbmVyIGNlbnRlcj5cclxuPHNlY3Rpb24+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZGdlckNhcmRcIj5cclxuICAgIFxyXG4gICAgPExlZGdlckhlYWRlciAvPlxyXG4gICAgPExlZGdlckxpc3QgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAubGVkZ2VyQ2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjhweCAwIHJnYmEoODYsOTEsMTE1LC4xNSk7XHJcbiAgICAgICAgcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBhbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuLmFyY2hldHlwZS1mb3JtX19jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgY29sb3I6ICMwZDExMmI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8L0NvbnRhaW5lcj4iXX0= */\n/*@ sourceURL=C:\\c-chain\\components\\ledger\\LedgerCard.js */")));
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
    className: "jsx-1287992999"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1287992999" + " " + "actions"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1287992999"
  }, "Encrypted Ledger Data")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1287992999"
  }, "h1.jsx-1287992999{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:1.7em;font-weight:200;margin-right:30px;padding-left:5px;color:#000;text-align:left;}.policyButton.jsx-1287992999{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:20px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.actions.jsx-1287992999{align:right;}@media screen and (max-width:960px){.row.jsx-1287992999{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-1287992999{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.actions.jsx-1287992999{align:right;}.archetype-form__container.jsx-1287992999{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZ0IsQUFJNkksQUFXNUcsQUE4QlosQUFNWSxBQUlYLEFBT0MsQUFLSCxXQVhRLENBVnJCLEFBaUJFLEdBS1UsU0FwRFEsSUF5Q0UsQ0FZYixXQUNHLEVBckRXLElBeUNILFFBYU4sUUFaWixDQXpDc0IsT0FzRDlCLFFBcEIyQixPQWpDTSxVQWtDekIsZUFqQ2tCLGtCQUNKLElBaEJBLFVBaUJLLElBaEJILGVBaUJKLENBaEJJLFdBaUJKLEtBaEJNLE9BaUJGLFdBaEJDLEtBaUJGLFlBaEJKLEdBaUJjLFFBaEJULGVBaUJvQixDQWhCdEMsaUNBaUJtQixxRkFDRixlQUNNLGtEQUNKLGlCQUNFLG1CQUNELGtCQUNELGlCQUNFLG1CQUNhLDhCQUNYLHFCQUNPLGdFQUNaLGdCQUNILGFBQ2YiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXGxlZGdlclxcTGVkZ2VySGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gXHJcbjxzZWN0aW9uPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICA8aDE+RW5jcnlwdGVkIExlZGdlciBEYXRhPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnBvbGljeUJ1dHRvbiB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgIGFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIHRhYmxldFxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbi5hcmNoZXR5cGUtZm9ybV9fY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgIGNvbG9yOiAjMGQxMTJiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9zZWN0aW9uPiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\ledger\\LedgerHeader.js */"));
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
    className: "jsx-4117990307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "jsx-4117990307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
    className: "jsx-4117990307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-4117990307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "0",
    className: "jsx-4117990307"
  }, "Ledger Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "1",
    className: "jsx-4117990307"
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "2",
    className: "jsx-4117990307"
  }, "Content Type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "3",
    className: "jsx-4117990307"
  }, "Hash"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "4",
    className: "jsx-4117990307"
  }, "Key"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "5",
    className: "jsx-4117990307"
  }, "Policy"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "6",
    className: "jsx-4117990307"
  }, "Expiration"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "jsx-4117990307"
  }, items.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      className: "jsx-4117990307"
    }, i.itemId, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-4117990307"
    }, i.message), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-4117990307"
    }, i.contentType), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-4117990307"
    }, i.hash), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-4117990307"
    }, i.key), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-4117990307"
    }, i.policy), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-4117990307"
    }, i.expiration));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4117990307"
  }, ".column.jsx-4117990307{text-align:left;}.list-item-check.jsx-4117990307{background:url(/static/images/pricing_table_check.png) 2px 1px no-repeat;padding-left:50px;}.vertical.jsx-4117990307{-webkit-align-left:30px;-ms-flex-line-packalign-left:30px;align-left:30px;height:1200px;}.table.jsx-4117990307{display:table;border-collapse:separate;border-spacing:2px;border-color:grey;}thead.jsx-4117990307{display:table-header-group;vertical-align:middle;border-color:inherit;}th.jsx-4117990307{color:rgb(102,102,102);font-size:14px;font-weight:400;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;padding-left:50px;}td.jsx-4117990307{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}tr.jsx-4117990307{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}.accounts.jsx-4117990307{font-size:13px;font-color:#000;}.agentItems.jsx-4117990307{font-size:13px;font-color:#000;}.agentCard.jsx-4117990307{background:#fff;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);position:center;text-align:center;box-sizing:border-box;align:center;padding-left:28px;padding-right:28px;margin-top:28px;margin-left:28px;margin-right:28px;background-color:#F7F6F3;width:1000px;height:400px;}.col-left.jsx-4117990307{box-sizing:border-box;min-height:100%;background:#233659;background:linear-gradient(135deg,#565b73,#233659);padding:25px;border-top-left-radius:5px;border-top-right-radius:5px;}@media screen and (max-width:960px){.row.jsx-4117990307{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-4117990307{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-4117990307{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0N3QixBQUlNLEFBRzRFLEFBTXpELEFBS0YsQUFPYSxBQU1GLEFBUVQsQUFVRixBQVVDLEFBS0EsQUFPQyxBQWtCTSxBQVlFLEFBSVgsQUFRRixXQVBRLEdBdkZNLENBMEM1QixBQUtBLEFBZ0RhLENBOUdaLEFBb0NxQixBQVVGLEFBc0JDLE1Ba0JGLENBMURELElBTk8sQ0FpRkYsQ0FRYixFQXREVCxBQUtBLEdBTzhDLENBaEMzQixBQVVGLEdBbEJDLEFBMERHLENBdkVBLENBZ0dULE1BUlEsR0FqRkcsR0FlQyxBQVVGLEVBbEJELEFBbUZQLEdBekJ1QyxDQXZFakMsSUF3RmxCLFFBakZKLEFBMEZKLEVBM0V1QixBQVVGLENBN0NLLENBTUosRUFRbEIsRUFvRG9CLEFBNEJHLFNBMUR3QixBQVVGLENBdkMzQyxHQUxBLEdBaUVvQixDQTRCbEIsYUFWYSxJQWpCUyxTQWtCSyxPQWhEL0IsQUFVRixNQXFCbUIsYUExQ0ssQUEyQ0EsQ0FpQlUsaUJBM0RoQyxBQTJDdUIsV0FpQnRCLFFBaEJtQixnQkFDQyxpQkFDQyxrQkFDTyx5QkFDWixhQUNBLGFBQ2pCIiwiZmlsZSI6IkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUZldGNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VzZUZldGNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWRnZXJMaXN0KHByb3BzKSB7XHJcbmNvbnN0IGl0ZW1zID0gdXNlRmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjEwMDUwL2FwaS9nZXRMZWRnZXJcIik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHVtbj1cIjBcIj5MZWRnZXIgSWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2x1bW49XCIxXCI+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2x1bW49XCIyXCI+Q29udGVudCBUeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiM1wiPkhhc2g8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2x1bW49XCI0XCI+S2V5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiNVwiPlBvbGljeTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHVtbj1cIjZcIj5FeHBpcmF0aW9uPC90aD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj57aS5pdGVtSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntpLm1lc3NhZ2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2kuY29udGVudFR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2kuaGFzaH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aS5rZXl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2kucG9saWN5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntpLmV4cGlyYXRpb259PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpc3QtaXRlbS1jaGVjayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1hZ2VzL3ByaWNpbmdfdGFibGVfY2hlY2sucG5nKSAycHggMXB4IG5vLXJlcGVhdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAudmVydGljYWwge1xyXG4gICAgICAgIGFsaWduLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuICAgIH1cclxuXHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHRyIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoNjgsIDY4LCA2OCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICBcclxuICB9XHJcblxyXG4gICAgICAuYWNjb3VudHMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LWNvbG9yOiAjMDAwXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZ2VudEl0ZW1zIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC1jb2xvcjogIzAwMFxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIC5hZ2VudENhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI4cHggMCByZ2JhKDg2LDkxLDExNSwuMTUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGNkYzO1xyXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAgLmNvbC1sZWZ0IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIzMzY1OTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM1NjViNzMsIzIzMzY1OSk7XHJcbiAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICB9XHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuLmFyY2hldHlwZS1mb3JtX19jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgY29sb3I6ICMwZDExMmI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\ledger\\LedgerList.js */"));
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

/***/ "./components/messages/MessageBar.js":
/*!*******************************************!*\
  !*** ./components/messages/MessageBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zlib */ "zlib");
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zlib__WEBPACK_IMPORTED_MODULE_4__);






function useAsyncEndpoint(fn) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    data: null,
    pending: zlib__WEBPACK_IMPORTED_MODULE_4__["deflateSync"],
    completed: false,
    error: false
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      res = _useState2[0],
      setRes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      req = _useState4[0],
      setReq = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!req) return;
    setRes({
      data: null,
      pending: true,
      completed: false,
      error: false
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default()(req).then(function (res) {
      return setRes({
        data: res.data,
        pending: false,
        error: false,
        complete: true
      });
    }).catch(function () {
      return setRes({
        data: null,
        pending: false,
        error: true,
        complete: true
      });
    });
  }, [req]);
  return [res, function () {
    return setReq(fn.apply(void 0, arguments));
  }];
}

var publisherAPI = "https://dapps.ngrok.io:3000/api/";

function postPublisherEndpoint() {
  return useAsyncEndpoint(function (data) {
    return {
      url: publisherAPI,
      method: "POST",
      data: data
    };
  });
}

function MessageBar(props) {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      message = _useState6[0],
      setMessage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      to = _useState8[0],
      setTo = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      who = _useState10[0],
      setWho = _useState10[1];

  var _postPublisherEndpoin = postPublisherEndpoint(),
      _postPublisherEndpoin2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_postPublisherEndpoin, 2),
      newMessage = _postPublisherEndpoin2[0],
      postNewMessage = _postPublisherEndpoin2[1];

  var handleKeyPress = function handleKeyPress(event) {
    if (event.key == 'Enter' || event.keyCode == 13) {
      sendChat();
    }
  };

  function sendChat() {
    postNewMessage({
      to: to,
      message: message
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-1657791072"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1657791072" + " " + "row"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1657791072" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-1657791072"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    onKeyPress: handleKeyPress,
    className: "jsx-1657791072" + " " + "message-box"
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1657791072"
  }, ".column.jsx-1657791072{text-align:center;border-width:1px;list-style:none;padding-bottom:8px;padding-top:8px;margin-right:28px;}.to.jsx-1657791072{width:260px;padding-bottom:8px;padding-top:8px;border:1px solid #d0d4d9;border-radius:.375rem;-webkit-box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);line-height:20px;min-height:auto;padding-left:0;padding-right:0;}.message-box.jsx-1657791072{padding-bottom:28px;width:800px;overflow:auto;margin:0;min-height:42px;height:38px;max-height:180px;border:2px solid rgba(134,134,134,.7);border-radius:.375rem;outline:0;background:#fff;resize:none;box-shadow:none;color:#1d1c1d;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;padding:9px 30px 10px 50px;\"      }      .login {        color: #FFF;      }      .account {        font-size: 13px;        line-height: 1.91667;        font-weight: 400;        color: #3d464d;        border: 1px solid #bdc4c9;        padding: 3.5px 7px;        border-radius: 4px;        margin-top: 28px;        margin-left: 8px;      }      .row {        flex-direction: column;        margin: -1.5rem 0;        text-align: center;      }      // CSS only media query for tablet      @media screen and (max-width: 960px) {        .row {          flex-direction: column;          margin: -1.5rem 0;        }        .column {          width: 10%;          padding: 1.5rem 0;          text-align: center;          max-width: 100px;        }        .message-box {          padding-bottom: 28px;          width: 100px;          overflow: auto;          margin: 0;           min-height: 42px;           height: 38px;           max-height: 180px;           border: 2px solid rgba(134,134,134,.7);          border-radius: .375rem;          outline: 0;          background: #FFFFFF;          resize: none;          box-shadow: none;          color: #1d1c1d;          -webkit-user-select: auto;          -moz-user-select: auto;          -ms-user-select: auto;          user-select: auto;          padding: 9px 30px 10px 50px;          display: none;        }              };}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxtZXNzYWdlc1xcTWVzc2FnZUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRm9CLEFBSTJCLEFBU04sQUFjUSxZQWJELE1BVEYsRUF1QkosV0FiRyxDQWNGLEdBdkJFLFdBd0JQLENBZGdCLElBVE4sSUF3QkgsZUF2QkEsQ0F3QkosQ0FmVSxXQWdCTCxHQXhCQyxRQVMwQyxNQWdCdEIsSUF4QnhDLGtDQXlCd0IsZ0JBaEI4QixNQWlCMUMsVUFDTSxnQkFDSixZQUNJLFFBbkJDLFFBb0JILFNBbkJFLEtBb0JTLFdBbkJWLGNBb0JPLENBbkJOLGdCQUNsQixLQW1CdUIscUJBQ0oscUZBQ1UsMkJBK0QvQiw0ekNBQUMiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXG1lc3NhZ2VzXFxNZXNzYWdlQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBkZWZsYXRlU3luYyB9IGZyb20gJ3psaWInO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHVzZUFzeW5jRW5kcG9pbnQoZm4pIHtcclxuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIHBlbmRpbmc6IGRlZmxhdGVTeW5jLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIGVycm9yOiBmYWxzZSxcclxuICB9KTtcclxuICBjb25zdCBbcmVxLCBzZXRSZXFdID0gdXNlU3RhdGUoKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFyZXEpIHJldHVybjtcclxuICAgIHNldFJlcyh7XHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHBlbmRpbmc6IHRydWUsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIGF4aW9zKHJlcSlcclxuICAudGhlbihyZXMgPT5cclxuICAgIHNldFJlcyh7XHJcbiAgICAgIGRhdGE6IHJlcy5kYXRhLFxyXG4gICAgICBwZW5kaW5nOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICBjb21wbGV0ZTogdHJ1ZVxyXG4gICAgfSksXHJcbiAgKVxyXG4gIC5jYXRjaCgoKSA9PlxyXG4gICAgc2V0UmVzKHtcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGVuZGluZzogZmFsc2UsXHJcbiAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICBjb21wbGV0ZTogdHJ1ZVxyXG4gICAgfSksXHJcbiAgKTtcclxufSwgW3JlcV1cclxuKTtcclxucmV0dXJuIFtyZXMsICguLi5hcmdzKSA9PiBzZXRSZXEoZm4oLi4uYXJncykpXTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHB1Ymxpc2hlckFQSSA9IFwiaHR0cHM6Ly9kYXBwcy5uZ3Jvay5pbzozMDAwL2FwaS9cIjtcclxuXHJcbmZ1bmN0aW9uIHBvc3RQdWJsaXNoZXJFbmRwb2ludCgpIHtcclxuICBcclxuICByZXR1cm4gdXNlQXN5bmNFbmRwb2ludChkYXRhID0+ICh7XHJcbiAgdXJsOiBwdWJsaXNoZXJBUEksXHJcbiAgbWV0aG9kOiBcIlBPU1RcIixcclxuICBkYXRhXHJcbn0pKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVzc2FnZUJhcihwcm9wcykge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0bywgc2V0VG9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3dobywgc2V0V2hvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBwb3N0TmV3TWVzc2FnZV0gPSBwb3N0UHVibGlzaGVyRW5kcG9pbnQoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZXZlbnQpID0+IHtcclxuICBpZihldmVudC5rZXkgPT0gJ0VudGVyJ3x8IGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcclxuICAgIHNlbmRDaGF0KCk7XHJcbiAgfVxyXG59XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZENoYXQoKSB7XHJcbiAgICAgIHBvc3ROZXdNZXNzYWdlKHtcclxuICAgICAgICB0byxcclxuICAgICAgICBtZXNzYWdlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxucmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm94XCIgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXtlID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAuY29sdW1uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudG8ge1xyXG4gICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDRkOTsgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgcmdiYSgxMDAsMTIxLDE0MywwLjEyMik7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCByZ2JhKDEwMCwxMjEsMTQzLDAuMTIyKTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvOyBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7IFxyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tZXNzYWdlLWJveCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI4cHg7XHJcbiAgICAgICAgd2lkdGg6IDgwMHB4IDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBtYXJnaW46IDA7IFxyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQycHg7IFxyXG4gICAgICAgIGhlaWdodDogMzhweDsgXHJcbiAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7IFxyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTM0LDEzNCwxMzQsLjcpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjMWQxYzFkO1xyXG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogOXB4IDMwcHggMTBweCA1MHB4O1wiXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sb2dpbiB7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY2NvdW50IHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOTE2Njc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogIzNkNDY0ZDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRjNGM5O1xyXG4gICAgICAgIHBhZGRpbmc6IDMuNXB4IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucm93IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIHRhYmxldFxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVzc2FnZS1ib3gge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI4cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIG1hcmdpbjogMDsgXHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0MnB4OyBcclxuICAgICAgICAgIGhlaWdodDogMzhweDsgXHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDsgXHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEzNCwxMzQsMTM0LC43KTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XHJcbiAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzFkMWMxZDtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiA5cHggMzBweCAxMHB4IDUwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbilcclxuXHJcbiAgICB9XHJcbiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\messages\\MessageBar.js */"));
}

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fortmatic */ "fortmatic");
/* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fortmatic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _media_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media-query */ "./components/media-query.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./container */ "./components/container.js");











var fm = new fortmatic__WEBPACK_IMPORTED_MODULE_7___default.a('pk_test_F4970AF6BBC7F0C1');

if (false) {}

var setUserInfo =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            web3.eth.getAccounts(function (err, accounts) {
              if (err) throw err;
              var address = accounts[0];
              console.log(address);
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function setUserInfo() {
    return _ref.apply(this, arguments);
  };
}();

var handleLogin =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var accounts;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fm.user.login();

          case 2:
            accounts = _context2.sent;

            if (accounts.length > 0) {
              setUserInfo();
            }

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function handleLogin() {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(function (_ref3) {
  var isMobile = _ref3.isMobile,
      router = _ref3.router;
  var route = router.route;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_media_query__WEBPACK_IMPORTED_MODULE_9__["MediaQueryConsumer"], null, function (media) {
    if (media.isMobile) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_10__["default"], {
        center: true
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
        className: "visually-hidden",
        "aria-hidden": "true"
      }, "C-Chain Network"));
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_10__["default"], {
      center: true
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
      className: "visually-hidden",
      "aria-hidden": "true"
    }, "C-Chain Network"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {
      className: "jsx-3876032393" + " " + "f-reset"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3876032393"
    }, ".signIn.jsx-3876032393{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 25px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.connected.jsx-3876032393{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}nav.jsx-3876032393{position:relative;-webkit-flex:1;-ms-flex:1;flex:1;height:64px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:800px;}@media screen and (max-width:640px){.logo.jsx-3876032393{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURpQixBQUkyQixBQTZCWCxBQVV1QixBQVlILFdBckJyQixFQXNCTSxLQVpPLEdBVFosR0E5QkssUUErQkssVUE5QkYsU0F1Q1MsRUFSVCxVQTlCQyxBQXVDUyxTQVJWLGFBOUJJLE1BK0JOLGlCQUNyQixFQS9Cb0Isa0JBQ0osU0FxQ2tDLEtBcEM3QixtQkFDUCxZQUNBLFlBQ0ksZ0JBQ0QsZUFDVSx1QkFDVyxhQStCQyxxQkE5QnBCLHdFQStCb0IsYUE5QnRCLE1BK0JDLFNBOUJLLGtEQUNKLGlCQUNDLGtCQUNELGlCQUNFLG1CQUNhLDhCQUNYLHFCQUNPLGdFQUNaLGdCQUNILGFBQ2YiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXG5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgRm9ydG1hdGljIGZyb20gJ2ZvcnRtYXRpYyc7XHJcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5pbXBvcnQgeyBNZWRpYVF1ZXJ5Q29uc3VtZXIgfSBmcm9tICcuL21lZGlhLXF1ZXJ5JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcic7XHJcblxyXG5cclxubGV0IGZtID0gbmV3IEZvcnRtYXRpYygncGtfdGVzdF9GNDk3MEFGNkJCQzdGMEMxJyk7XHJcblxyXG5pZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgd2ViMyA9IG5ldyBXZWIzKGZtLmdldFByb3ZpZGVyKCkpO1xyXG59XHJcblxyXG4gICAgICBsZXQgc2V0VXNlckluZm8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgd2ViMy5ldGguZ2V0QWNjb3VudHMoKGVyciwgYWNjb3VudHMpID0+IHtcclxuICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgICAgICAgIGxldCBhZGRyZXNzID0gYWNjb3VudHNbMF07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhhZGRyZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBBdXRoZW50aWNhdGUgdXNlclxyXG4gICAgICAgIGxldCBhY2NvdW50cyA9IGF3YWl0IGZtLnVzZXIubG9naW4oKTtcclxuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgc2V0VXNlckluZm8oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcigoeyBpc01vYmlsZSwgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCB7IHJvdXRlIH0gPSByb3V0ZXI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVkaWFRdWVyeUNvbnN1bWVyPlxyXG4gICAgICB7bWVkaWEgPT4ge1xyXG4gICAgICAgIGlmIChtZWRpYS5pc01vYmlsZSkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciBjZW50ZXI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgQy1DaGFpbiBOZXR3b3JrXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxDb250YWluZXIgY2VudGVyPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgQy1DaGFpbiBOZXR3b3JrXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZi1yZXNldFwiPlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuLnNpZ25JbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAwcHggMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb25uZWN0ZWQge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzUwZTNjMjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4gICAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogODAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciBtb2JpbGUgKyBTU1JcclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPjxidXR0b24gb25DbGljaz17aGFuZGxlTG9naW59IGNsYXNzTmFtZT1cInNpZ25JblwiIGludmVydCA+TG9nSW48L2J1dHRvbj48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cD48YiBjbGFzc05hbWU9XCJjb25uZWN0ZWRcIj48L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz48L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgKTtcclxuICAgICAgfX1cclxuICAgIDwvTWVkaWFRdWVyeUNvbnN1bWVyPlxyXG4gICk7XHJcbn0pOyJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\navbar.js */"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-3876032393" + " " + "nav"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-3876032393"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      onClick: handleLogin,
      invert: true,
      className: "jsx-3876032393" + " " + "signIn"
    }, "LogIn"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "jsx-3876032393"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
      className: "jsx-3876032393" + " " + "connected"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "jsx-3876032393"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
      className: "jsx-3876032393"
    }))));
  });
}));

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
  }, title || 'TripleCheck Network'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: description || 'TripleCheck it.',
    className: "jsx-2635003667"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1164718727"
  }, ".jsx-2635003667{overflow-x:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxwYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCTyxBQUc2QixrQkFDcEIiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXHBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0ICcuLi9saWIvcG9seWZpbGwnO1xyXG5pbXBvcnQgeyB3aXRoTWVkaWFRdWVyeSB9IGZyb20gJy4vbWVkaWEtcXVlcnknO1xyXG5pbXBvcnQgUm91dGVyRXZlbnRzIGZyb20gJy4uL2xpYi9yb3V0ZXItZXZlbnRzJztcclxuaW1wb3J0IHsgdHJhY2tQYWdldmlldyB9IGZyb20gJy4uL2xpYi9hbmFseXRpY3MnO1xyXG5cclxuUm91dGVyRXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgdXJsID0+IHtcclxuICB0cmFja1BhZ2V2aWV3KHVybCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aE1lZGlhUXVlcnkoKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3RpdGxlIHx8ICdUcmlwbGVDaGVjayBOZXR3b3JrJ308L3RpdGxlPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbiB8fFxyXG4gICAgICAgICAgJ1RyaXBsZUNoZWNrIGl0LidcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8c3R5bGUganN4PlxyXG4gICAgICB7YFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICB7YFxyXG4gICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAqLFxyXG4gICAgICAgICo6YmVmb3JlLFxyXG4gICAgICAgICo6YWZ0ZXIge1xyXG4gICAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJyxcclxuICAgICAgICAgICAgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJyxcclxuICAgICAgICAgICAgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdrZXJuJztcclxuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjFjM2Y7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjpzZWxlY3Rpb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzZmZjtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBbcm9sZT0nZ3JpZCddOmZvY3VzIHtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSxcclxuICAgICAgICBoMixcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMyMTk1ZmY7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICM2OGI1ZmI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvZGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxyXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2UsXHJcbiAgICAgICAgICAgIHNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2RlOmJlZm9yZSxcclxuICAgICAgICBjb2RlOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICdcXGAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmUgY29kZTpiZWZvcmUsXHJcbiAgICAgICAgcHJlIGNvZGU6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbW8tZm9vdGVyIC5ub3RlIGNvZGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAuMXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZi1yZXNldCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mMCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuODAyMDMyNDcwNzAzMTI1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNjAxODA2NjQwNjI1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNDIzODI4MTI1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjY1NjI1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mNCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mNSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuODg4ODg4ODg4ODg4ODg4OGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjYge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjc5MDEyMzQ1Njc5MDEyMzRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3MSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZncyIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzMge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3NCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZnc1IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzYge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3NyB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZnc4IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzkge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1YnRpdGxlIHtcclxuICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubXV0ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRjIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMCAtMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpc3BsYXktbW9iaWxlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciBtb2JpbGVcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgICAgICAgLmRpc3BsYXktbW9iaWxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFbcm9sZT0nYnV0dG9uJ10ge1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vLXRhcC1oaWdobGlnaHQsXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgICAgICAgICAtbXMtdG91Y2gtYWN0aW9uOiBwYW4teTtcclxuICAgICAgICAgIHRvdWNoLWFjdGlvbjogcGFuLXk7XHJcbiAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm8tdGFwLWNhbGxvdXQge1xyXG4gICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm8tZHJhZyB7XHJcbiAgICAgICAgICB1c2VyLWRyYWc6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52aXN1YWxseS1oaWRkZW4ge1xyXG4gICAgICAgICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcclxuICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgIG1hcmdpbjogLTFweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10sXHJcbiAgICAgICAgcHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10ge1xyXG4gICAgICAgICAgY29sb3I6ICMzOTNhMzQ7XHJcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgICAgICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgICB3b3JkLWJyZWFrOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICAgICAgICAgIHRhYi1zaXplOiA0O1xyXG4gICAgICAgICAgaHlwaGVuczogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmNvbW1lbnQsXHJcbiAgICAgICAgLnRva2VuLnByb2xvZyxcclxuICAgICAgICAudG9rZW4uZG9jdHlwZSxcclxuICAgICAgICAudG9rZW4uY2RhdGEge1xyXG4gICAgICAgICAgY29sb3I6ICMyZGI1MmQ7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5uYW1lc3BhY2Uge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uYXR0ci12YWx1ZSxcclxuICAgICAgICAudG9rZW4uc3RyaW5nIHtcclxuICAgICAgICAgIC8vIGNvbG9yOiAjQTMxNTE1O1xyXG4gICAgICAgICAgY29sb3I6ICNjYTBlMGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5wdW5jdHVhdGlvbixcclxuICAgICAgICAudG9rZW4ub3BlcmF0b3Ige1xyXG4gICAgICAgICAgY29sb3I6ICMzOTNhMzQ7IC8qIG5vIGhpZ2hsaWdodCAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4udXJsLFxyXG4gICAgICAgIC50b2tlbi5zeW1ib2wsXHJcbiAgICAgICAgLnRva2VuLm51bWJlcixcclxuICAgICAgICAudG9rZW4uYm9vbGVhbixcclxuICAgICAgICAudG9rZW4udmFyaWFibGUsXHJcbiAgICAgICAgLnRva2VuLmNvbnN0YW50LFxyXG4gICAgICAgIC50b2tlbi5pbnNlcnRlZCB7XHJcbiAgICAgICAgICBjb2xvcjogIzM2YWNhYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmF0cnVsZSxcclxuICAgICAgICAudG9rZW4ua2V5d29yZCxcclxuICAgICAgICAubGFuZ3VhZ2UtYXV0b2hvdGtleSAudG9rZW4uc2VsZWN0b3IsXHJcbiAgICAgICAgLmxhbmd1YWdlLWpzb24gLnRva2VuLmJvb2xlYW4sXHJcbiAgICAgICAgLmxhbmd1YWdlLWpzb24gLnRva2VuLm51bWJlcixcclxuICAgICAgICBjb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtY3NzJ10ge1xyXG4gICAgICAgICAgLy8gY29sb3I6ICMyNTI1Zjk7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uZnVuY3Rpb24ge1xyXG4gICAgICAgICAgY29sb3I6ICMzOTNhMzQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5kZWxldGVkLFxyXG4gICAgICAgIC5sYW5ndWFnZS1hdXRvaG90a2V5IC50b2tlbi50YWcge1xyXG4gICAgICAgICAgY29sb3I6ICM5YTA1MGY7XHJcbiAgICAgICAgICAvLyBjb2xvcjogIzJiOTFhZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLnNlbGVjdG9yLFxyXG4gICAgICAgIC5sYW5ndWFnZS1hdXRvaG90a2V5IC50b2tlbi5rZXl3b3JkIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwMDlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uaW1wb3J0YW50LFxyXG4gICAgICAgIC50b2tlbi5ib2xkIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uaXRhbGljIHtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmNsYXNzLW5hbWUsXHJcbiAgICAgICAgLmxhbmd1YWdlLWpzb24gLnRva2VuLnByb3BlcnR5IHtcclxuICAgICAgICAgIGNvbG9yOiAjMmI5MWFmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4udGFnLFxyXG4gICAgICAgIC50b2tlbi5zZWxlY3RvciB7XHJcbiAgICAgICAgICAvLyBjb2xvcjogIzgwMDAwMDtcclxuICAgICAgICAgIC8vIGNvbG9yOiAjOWEwNTBmO1xyXG4gICAgICAgICAgY29sb3I6ICMyYjkxYWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5hdHRyLW5hbWUsXHJcbiAgICAgICAgLnRva2VuLnByb3BlcnR5LFxyXG4gICAgICAgIC50b2tlbi5yZWdleCxcclxuICAgICAgICAudG9rZW4uZW50aXR5IHtcclxuICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uZGlyZWN0aXZlLnRhZyAudGFnIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmMDA7XHJcbiAgICAgICAgICBjb2xvcjogIzM5M2EzNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ZnIHBhdGgsXHJcbiAgICAgICAgc3ZnIGNpcmNsZSB7XHJcbiAgICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IGdlb21ldHJpY3ByZWNpc2lvbjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pKTsiXX0= */\n/*@ sourceURL=C:\\c-chain\\components\\page.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1460487709"
  }, "html{line-height:1.15;-webkit-text-size-adjust:100%;height:100%;box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}body{position:relative;min-height:100%;margin:0;line-height:1.65;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;font-size:16px;font-weight:400;min-width:320px;direction:ltr;font-feature-settings:'kern';text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}html,body{background-color:#061c3f;color:#111;}::selection{background-color:#0076ff;color:#fff;}[role='grid']:focus{outline:none;}svg{text-rendering:optimizeLegibility;}h1,h2,h3{margin:0;}a{color:#2195ff;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;}a:hover{color:#68b5fb;}code{font-size:0.9em;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace, serif;}code:before,code:after{content:'`';}pre code:before,pre code:after{content:none;}.demo-footer .note code{background:rgba(0,0,0,0.2);padding:0.2rem;margin:0 0.1rem;border-radius:2px;}iframe{width:100%;height:100%;border:none;}.f-reset{font-size:1rem;}.f0{font-size:1.802032470703125em;}.f1{font-size:1.601806640625em;}.f2{font-size:1.423828125em;}.f3{font-size:1.265625em;}.f4{font-size:1.125em;}.f5{font-size:0.8888888888888888em;}.f6{font-size:0.7901234567901234em;}.fw1{font-weight:100;}.fw2{font-weight:200;}.fw3{font-weight:300;}.fw4{font-weight:400;}.fw5{font-weight:500;}.fw6{font-weight:600;}.fw7{font-weight:700;}.fw8{font-weight:800;}.fw9{font-weight:900;}.subtitle{color:#999;}.mute{color:#757575;}.tc{text-align:center;}.row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 -1.5rem;}.column{-webkit-flex:1;-ms-flex:1;flex:1;padding:0 1.5rem;}.display-mobile{display:none;}@media screen and (max-width:640px){.display-mobile{display:unset;}}a[role='button']{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.no-tap-highlight,a{-webkit-touch-callout:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent;}.no-tap-callout{-webkit-touch-callout:none;}.no-drag{-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-user-select:none;-webkit-user-drag:none;-webkit-user-select:none;-ms-user-select:none;}.visually-hidden{-webkit-clip:rect(0 0 0 0);clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;overflow:hidden;position:absolute;}code[class*='language-'],pre[class*='language-']{color:#393a34;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;font-size:0.95em;line-height:1.4em;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#2db52d;font-style:italic;}.token.namespace{opacity:0.7;}.token.attr-value,.token.string{color:#ca0e0e;}.token.punctuation,.token.operator{color:#393a34;}.token.url,.token.symbol,.token.number,.token.boolean,.token.variable,.token.constant,.token.inserted{color:#36acaa;}.token.atrule,.token.keyword,.language-autohotkey .token.selector,.language-json .token.boolean,.language-json .token.number,code[class*='language-css']{font-weight:600;}.token.function{color:#393a34;}.token.deleted,.language-autohotkey .token.tag{color:#9a050f;}.token.selector,.language-autohotkey .token.keyword{color:#00009f;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.class-name,.language-json .token.property{color:#2b91af;}.token.tag,.token.selector{color:#2b91af;}.token.attr-name,.token.property,.token.regex,.token.entity{color:#ff0000;}.token.directive.tag .tag{background:#ffff00;color:#393a34;}svg{shape-rendering:crispEdges;}svg path,svg circle{shape-rendering:geometricprecision;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxwYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCTyxBQUc0QixBQVFFLEFBR0QsQUFtQk8sQUFJQSxBQUlaLEFBR3FCLEFBS3pCLEFBR0ssQUFLQSxBQUdFLEFBT0osQUFJQyxBQUdpQixBQU1uQixBQUtJLEFBR2UsQUFHSCxBQUdILEFBR0gsQUFHSCxBQUdhLEFBR0EsQUFHZixBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHTCxBQUdHLEFBR0ksQUFHTCxBQUtOLEFBSU0sQUFLRyxBQUlTLEFBUUUsQUFNQSxBQUdaLEFBUUksQUFXTCxBQWVBLEFBSUYsQUFLRSxBQUlBLEFBU0EsQUFTRSxBQUdGLEFBSUEsQUFLQSxBQUlHLEFBR0MsQUFJSixBQU1BLEFBTUEsQUFHSyxBQUlRLEFBSVEsU0FqUHJDLEVBK0JjLEFBd0RkLENBckVBLEFBdUpBLENBakxBLEFBOEJBLEFBbUZBLENBdEd1QixBQUt2QixBQWtGQSxBQW9CRSxBQXdDYyxBQWVJLEFBU3BCLEFBSUEsQUFTQSxBQVlBLEFBS0EsQUFJQSxBQVdBLEFBTUEsQUFNQSxDQW5NQSxDQXZCUyxBQStDVCxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFnSEEsQ0FsUGdDLEFBa1FoQyxDQXZQa0IsQUFzRmxCLEFBMENBLEFBMEhBLENBN1BBLEFBZ1JnQixFQTFMaEIsRUFoQmMsQ0FhZCxDQTdEYSxBQUlBLEFBOEhXLEVBekZQLEFBaUJqQixBQWdGeUIsQUFNekIsQUE4R0EsQ0F2RmtCLEVBaEhsQixDQWVBLEFBR0EsQ0E2R0EsQ0FqRW1CLEFBc0luQixDQTdRVyxBQTZCWCxDQXNDQSxBQWlOQSxDQWpRQSxBQUlBLE1BcUNrQixDQTNEQyxDQXlMRCxFQWJMLENBeExDLEFBZ0tTLEdBYnZCLEFBcUJxQixPQWlCVCxDQWpIUSxDQXZFSSxDQWNRLEFBdUxWLElBckpPLEdBeUlmLENBekJZLENBUWdCLEtBNUJyQixFQXBFckIsQ0F1R21CLEVBV1AsQ0FZUSxDQXJNcEIsUUEwTFcsR0ExQlEsTUEyQkQsQUFXQyxXQTlCbkIsS0FvQm9CLENBV0EsV0F2SnBCLE1BNklBLENBV2EsV0EvSWIsQUFnSmUsa0JBMUJTLEtBbkNMLFVBcUJuQixPQXBCQSxBQW1DeUIsdUJBQ0UsR0FuS1YsR0E0TGpCLFlBM0xrQixPQW1LSyxTQWxLTCxZQW1LbEIsSUFsS2dCLGNBQ2UsNkJBQ0ssa0NBQ0MsbUNBQ0Qsa0NBQ1gsNkdBQ3pCIiwiZmlsZSI6IkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCAnLi4vbGliL3BvbHlmaWxsJztcclxuaW1wb3J0IHsgd2l0aE1lZGlhUXVlcnkgfSBmcm9tICcuL21lZGlhLXF1ZXJ5JztcclxuaW1wb3J0IFJvdXRlckV2ZW50cyBmcm9tICcuLi9saWIvcm91dGVyLWV2ZW50cyc7XHJcbmltcG9ydCB7IHRyYWNrUGFnZXZpZXcgfSBmcm9tICcuLi9saWIvYW5hbHl0aWNzJztcclxuXHJcblJvdXRlckV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHVybCA9PiB7XHJcbiAgdHJhY2tQYWdldmlldyh1cmwpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhNZWRpYVF1ZXJ5KCh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPnt0aXRsZSB8fCAnVHJpcGxlQ2hlY2sgTmV0d29yayd9PC90aXRsZT5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgZGVzY3JpcHRpb24gfHxcclxuICAgICAgICAgICdUcmlwbGVDaGVjayBpdC4nXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgICAge1xyXG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAge2BcclxuICAgICAgICBodG1sIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgKixcclxuICAgICAgICAqOmJlZm9yZSxcclxuICAgICAgICAqOmFmdGVyIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY1O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsXHJcbiAgICAgICAgICAgICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsXHJcbiAgICAgICAgICAgICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAna2Vybic7XHJcbiAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYxYzNmO1xyXG4gICAgICAgICAgY29sb3I6ICMxMTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6c2VsZWN0aW9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc2ZmY7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgW3JvbGU9J2dyaWQnXTpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEsXHJcbiAgICAgICAgaDIsXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMjE5NWZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjhiNWZiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2RlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcclxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlLFxyXG4gICAgICAgICAgICBzZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29kZTpiZWZvcmUsXHJcbiAgICAgICAgY29kZTphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiAnXFxgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJlIGNvZGU6YmVmb3JlLFxyXG4gICAgICAgIHByZSBjb2RlOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZW1vLWZvb3RlciAubm90ZSBjb2RlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwLjFyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmYtcmVzZXQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjgwMjAzMjQ3MDcwMzEyNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjYwMTgwNjY0MDYyNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjQyMzgyODEyNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI2NTYyNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZjUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjg4ODg4ODg4ODg4ODg4ODhlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmY2IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43OTAxMjM0NTY3OTAxMjM0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzEge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3MiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZnczIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzQge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3NSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZnc2IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdzcge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ3OCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZnc5IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm11dGUge1xyXG4gICAgICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDAgLTEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXNwbGF5LW1vYmlsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgbW9iaWxlXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICAgIC5kaXNwbGF5LW1vYmlsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhW3JvbGU9J2J1dHRvbiddIHtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uby10YXAtaGlnaGxpZ2h0LFxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLXk7XHJcbiAgICAgICAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xyXG4gICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vLXRhcC1jYWxsb3V0IHtcclxuICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vLWRyYWcge1xyXG4gICAgICAgICAgdXNlci1kcmFnOiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmlzdWFsbHktaGlkZGVuIHtcclxuICAgICAgICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICBtYXJnaW46IC0xcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddLFxyXG4gICAgICAgIHByZVtjbGFzcyo9J2xhbmd1YWdlLSddIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzkzYTM0O1xyXG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgICAgICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICAgd29yZC1icmVhazogbm9ybWFsO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICAgICAgICB0YWItc2l6ZTogNDtcclxuICAgICAgICAgIGh5cGhlbnM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5jb21tZW50LFxyXG4gICAgICAgIC50b2tlbi5wcm9sb2csXHJcbiAgICAgICAgLnRva2VuLmRvY3R5cGUsXHJcbiAgICAgICAgLnRva2VuLmNkYXRhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMmRiNTJkO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4ubmFtZXNwYWNlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmF0dHItdmFsdWUsXHJcbiAgICAgICAgLnRva2VuLnN0cmluZyB7XHJcbiAgICAgICAgICAvLyBjb2xvcjogI0EzMTUxNTtcclxuICAgICAgICAgIGNvbG9yOiAjY2EwZTBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4ucHVuY3R1YXRpb24sXHJcbiAgICAgICAgLnRva2VuLm9wZXJhdG9yIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzkzYTM0OyAvKiBubyBoaWdobGlnaHQgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLnVybCxcclxuICAgICAgICAudG9rZW4uc3ltYm9sLFxyXG4gICAgICAgIC50b2tlbi5udW1iZXIsXHJcbiAgICAgICAgLnRva2VuLmJvb2xlYW4sXHJcbiAgICAgICAgLnRva2VuLnZhcmlhYmxlLFxyXG4gICAgICAgIC50b2tlbi5jb25zdGFudCxcclxuICAgICAgICAudG9rZW4uaW5zZXJ0ZWQge1xyXG4gICAgICAgICAgY29sb3I6ICMzNmFjYWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5hdHJ1bGUsXHJcbiAgICAgICAgLnRva2VuLmtleXdvcmQsXHJcbiAgICAgICAgLmxhbmd1YWdlLWF1dG9ob3RrZXkgLnRva2VuLnNlbGVjdG9yLFxyXG4gICAgICAgIC5sYW5ndWFnZS1qc29uIC50b2tlbi5ib29sZWFuLFxyXG4gICAgICAgIC5sYW5ndWFnZS1qc29uIC50b2tlbi5udW1iZXIsXHJcbiAgICAgICAgY29kZVtjbGFzcyo9J2xhbmd1YWdlLWNzcyddIHtcclxuICAgICAgICAgIC8vIGNvbG9yOiAjMjUyNWY5O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmZ1bmN0aW9uIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzkzYTM0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uZGVsZXRlZCxcclxuICAgICAgICAubGFuZ3VhZ2UtYXV0b2hvdGtleSAudG9rZW4udGFnIHtcclxuICAgICAgICAgIGNvbG9yOiAjOWEwNTBmO1xyXG4gICAgICAgICAgLy8gY29sb3I6ICMyYjkxYWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5zZWxlY3RvcixcclxuICAgICAgICAubGFuZ3VhZ2UtYXV0b2hvdGtleSAudG9rZW4ua2V5d29yZCB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDA5ZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmltcG9ydGFudCxcclxuICAgICAgICAudG9rZW4uYm9sZCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLml0YWxpYyB7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2tlbi5jbGFzcy1uYW1lLFxyXG4gICAgICAgIC5sYW5ndWFnZS1qc29uIC50b2tlbi5wcm9wZXJ0eSB7XHJcbiAgICAgICAgICBjb2xvcjogIzJiOTFhZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLnRhZyxcclxuICAgICAgICAudG9rZW4uc2VsZWN0b3Ige1xyXG4gICAgICAgICAgLy8gY29sb3I6ICM4MDAwMDA7XHJcbiAgICAgICAgICAvLyBjb2xvcjogIzlhMDUwZjtcclxuICAgICAgICAgIGNvbG9yOiAjMmI5MWFmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9rZW4uYXR0ci1uYW1lLFxyXG4gICAgICAgIC50b2tlbi5wcm9wZXJ0eSxcclxuICAgICAgICAudG9rZW4ucmVnZXgsXHJcbiAgICAgICAgLnRva2VuLmVudGl0eSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRva2VuLmRpcmVjdGl2ZS50YWcgLnRhZyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjAwO1xyXG4gICAgICAgICAgY29sb3I6ICMzOTNhMzQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN2ZyBwYXRoLFxyXG4gICAgICAgIHN2ZyBjaXJjbGUge1xyXG4gICAgICAgICAgc2hhcGUtcmVuZGVyaW5nOiBnZW9tZXRyaWNwcmVjaXNpb247XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKSk7Il19 */\n/*@ sourceURL=C:\\c-chain\\components\\page.js */"), children);
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

/***/ "./components/users/UserCard.js":
/*!**************************************!*\
  !*** ./components/users/UserCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container */ "./components/container.js");
/* harmony import */ var _UserDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserDetail */ "./components/users/UserDetail.js");
/* harmony import */ var _UserHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserHeader */ "./components/users/UserHeader.js");
/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserList */ "./components/users/UserList.js");
/* harmony import */ var _components_useFetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/useFetch */ "./components/useFetch.js");







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    center: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-737546835"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-737546835" + " " + "userCard"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserList__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "737546835"
  }, ".userCard.jsx-737546835{background:#fff;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);position:center;text-align:center;box-sizing:border-box;align:center;padding-left:28px;padding-right:28px;margin-top:28px;margin-left:28px;margin-right:28px;background-color:#FFFFFF;width:1000px;height:780px;}@media screen and (max-width:960px){.row.jsx-737546835{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-737546835{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-737546835{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFx1c2Vyc1xcVXNlckNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWdCLEFBSXlCLEFBb0JRLEFBSVgsQUFRRixXQVBRLElBUVQsQ0FoQ1EsWUF5QkUsQ0FRYixLQWhDcUMsTUFpQ2xDLE1BUlEsUUFTTixRQVJaLFFBU1IsUUFsQ3dCLEFBa0JHLGdCQWpCRCxDQWtCbEIsaUJBakJzQixzQkFDVCxhQUNLLGtCQUNDLG1CQUNILGdCQUNDLGlCQUNDLGtCQUNPLHlCQUNaLGFBQ0EsYUFDakIiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXHVzZXJzXFxVc2VyQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVyJ1xyXG5pbXBvcnQgVXNlckRldGFpbCBmcm9tICcuL1VzZXJEZXRhaWwnO1xyXG5pbXBvcnQgVXNlckhlYWRlciBmcm9tICcuL1VzZXJIZWFkZXInO1xyXG5pbXBvcnQgVXNlckxpc3QgZnJvbSAnLi9Vc2VyTGlzdCc7XHJcbmltcG9ydCB1c2VGZXRjaCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZUZldGNoJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PlxyXG48Q29udGFpbmVyIGNlbnRlcj5cclxuPHNlY3Rpb24+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJDYXJkXCI+XHJcbiAgICBcclxuICAgIDxVc2VySGVhZGVyIC8+XHJcbiAgICA8VXNlckxpc3QgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAudXNlckNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI4cHggMCByZ2JhKDg2LDkxLDExNSwuMTUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3ODBweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4uYXJjaGV0eXBlLWZvcm1fX2NvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgICBjb2xvcjogIzBkMTEyYjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDwvQ29udGFpbmVyPiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\users\\UserCard.js */")));
});

/***/ }),

/***/ "./components/users/UserDetail.js":
/*!****************************************!*\
  !*** ./components/users/UserDetail.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserList */ "./components/users/UserList.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2374575105"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2374575105"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserList__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2374575105"
  }, ".column.jsx-2374575105{text-align:left;}.vertical.jsx-2374575105{-webkit-align-left:30px;-ms-flex-line-packalign-left:30px;align-left:30px;height:1200px;}.signup.jsx-2374575105{font-size:13px;line-height:1.91667;font-weight:400;color:#3d464d;border:1px solid #bdc4c9;padding:3.5px 7px;border-radius:4px;margin-top:28px;width:69%;margin-left:8px;}h2.jsx-2374575105{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#000;text-align:center;}.col-left.jsx-2374575105{box-sizing:border-box;min-height:100%;background:#233659;background:linear-gradient(135deg,#565b73,#233659);padding:25px;border-top-left-radius:5px;border-top-right-radius:5px;}@media screen and (max-width:960px){.row.jsx-2374575105{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-2374575105{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-2374575105{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFx1c2Vyc1xcVXNlckRldGFpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPZ0IsQUFJTSxBQUdtQixBQUtELEFBY3FILEFBWTlHLEFBWUUsQUFJWCxBQVFGLFdBUFEsSUExQ0MsQUFrRFYsQ0EzRFosTUFtQ2tCLE1BaUJJLENBUWIsTUFsRFMsR0EwQkcsRUF5QlQsTUFSUSxLQTFDSixHQW1ERixHQXpCdUMsS0FpQm5ELEdBMUN5QixLQW1EakMsSUEzRHNCLElBMkNLLFVBMUNyQixFQVFvQixLQW1DbEIsYUFsQ2tCLEFBd0JMLGFBQ2MsS0F4QlgsTUFRRixVQVBKLElBUUssRUFnQmEsSUF2QlosU0FRRyxPQVByQixRQXVCRCxJQWZxQixrQkFDRCxpQkFDTixXQUNPLGtCQUNwQiIsImZpbGUiOiJDOlxcYy1jaGFpblxcY29tcG9uZW50c1xcdXNlcnNcXFVzZXJEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlckxpc3QgZnJvbSBcIi4vVXNlckxpc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IFxyXG48c2VjdGlvbj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxVc2VyTGlzdCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxyXG4gICAgICB9XHJcblxyXG4gICAgICAudmVydGljYWwge1xyXG4gICAgICAgIGFsaWduLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaWdudXAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS45MTY2NztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiAjM2Q0NjRkO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM0Yzk7XHJcbiAgICAgICAgcGFkZGluZzogMy41cHggN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIHdpZHRoOiA2OSU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgLmNvbC1sZWZ0IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIzMzY1OTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM1NjViNzMsIzIzMzY1OSk7XHJcbiAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICB9XHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuLmFyY2hldHlwZS1mb3JtX19jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgY29sb3I6ICMwZDExMmI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8L3NlY3Rpb24+Il19 */\n/*@ sourceURL=C:\\c-chain\\components\\users\\UserDetail.js */"));
});

/***/ }),

/***/ "./components/users/UserHeader.js":
/*!****************************************!*\
  !*** ./components/users/UserHeader.js ***!
  \****************************************/
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
  }, "Users")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "815430561"
  }, "h1.jsx-815430561{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:2em;font-weight:200;margin-right:30px;padding-left:5px;color:#000;text-align:left;}.actions.jsx-815430561{align:right;}@media screen and (max-width:960px){.row.jsx-815430561{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-815430561{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.actions.jsx-815430561{align:right;}.archetype-form__container.jsx-815430561{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFx1c2Vyc1xcVXNlckhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZ0IsQUFJNkksQUFXeEgsQUFNWSxBQUlYLEFBT0MsQUFLSCxXQVhRLENBVnJCLEFBaUJFLEdBS1UsYUFYVSxDQVliLFdBQ0csTUFaUSxRQWFOLFFBWlosUUFhUixRQXBCMkIsaUJBQ25CLHFDQWxCYyxjQUNBLGNBQ0UsZ0JBQ0Usa0JBQ0QsaUJBQ04sV0FDSyxnQkFDbEIiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXHVzZXJzXFxVc2VySGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gXHJcbjxzZWN0aW9uPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICA8aDE+VXNlcnM8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgIGFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIHRhYmxldFxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbi5hcmNoZXR5cGUtZm9ybV9fY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgIGNvbG9yOiAjMGQxMTJiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9zZWN0aW9uPiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\users\\UserHeader.js */"));
});

/***/ }),

/***/ "./components/users/UserList.js":
/*!**************************************!*\
  !*** ./components/users/UserList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserList; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/useFetch */ "./components/useFetch.js");



function UserList(props) {
  var users = Object(_components_useFetch__WEBPACK_IMPORTED_MODULE_2__["default"])("http://localhost:10050/api/getUsers");
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
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "1",
    className: "jsx-3572666656"
  }, "User"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "jsx-3572666656"
  }, users.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      className: "jsx-3572666656"
    }, i.checkbox, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-3572666656"
    }, i.user));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3572666656"
  }, ".column.jsx-3572666656{text-align:left;}.vertical.jsx-3572666656{-webkit-align-left:30px;-ms-flex-line-packalign-left:30px;align-left:30px;height:1200px;}.table.jsx-3572666656{display:table;border-collapse:separate;border-spacing:2px;border-color:grey;}thead.jsx-3572666656{display:table-header-group;vertical-align:middle;border-color:inherit;}th.jsx-3572666656{color:rgb(102,102,102);font-size:14px;font-weight:400;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;padding-left:28px;}td.jsx-3572666656{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}tr.jsx-3572666656{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}.accounts.jsx-3572666656{font-size:13px;font-color:#000;}.agentItems.jsx-3572666656{font-size:13px;font-color:#000;}.agentCard.jsx-3572666656{background:#fff;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);position:center;text-align:center;box-sizing:border-box;align:center;padding-left:28px;padding-right:28px;margin-top:28px;margin-left:28px;margin-right:28px;background-color:#F7F6F3;width:1000px;height:400px;}.col-left.jsx-3572666656{box-sizing:border-box;min-height:100%;background:#233659;background:linear-gradient(135deg,#565b73,#233659);padding:25px;border-top-left-radius:5px;border-top-right-radius:5px;}@media screen and (max-width:960px){.row.jsx-3572666656{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-3572666656{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-3572666656{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFx1c2Vyc1xcVXNlckxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0J3QixBQUlNLEFBR21CLEFBS0YsQUFPYSxBQU1GLEFBUVQsQUFVRixBQVVDLEFBS0EsQUFPQyxBQWtCTSxBQVlFLEFBSVgsQUFRRixXQVBRLEdBdkZNLENBMEM1QixBQUtBLEFBZ0RhLENBeEdaLEFBOEJxQixBQVVGLEFBc0JDLE1Ba0JGLENBMURELElBTk8sQ0FpRkYsQ0FRYixFQXREVCxBQUtBLEdBTzhDLENBaEMzQixBQVVGLEdBbEJDLEFBMERHLENBdkVBLENBZ0dULE1BUlEsR0FqRkcsR0FlQyxBQVVGLEVBbEJELEFBbUZQLEdBekJ1QyxDQXZFakMsSUF3RmxCLFFBakZKLEFBMEZKLEVBM0V1QixBQVVGLEVBdkNDLEVBUWxCLEVBb0RvQixBQTRCRyxTQTFEd0IsQUFVRixDQXZDM0MsTUE0RG9CLENBNEJsQixhQVZhLElBakJTLFNBa0JLLE9BaEQvQixBQVVGLE1BcUJtQixhQTFDSyxBQTJDQSxDQWlCVSxpQkEzRGhDLEFBMkN1QixXQWlCdEIsUUFoQm1CLGdCQUNDLGlCQUNDLGtCQUNPLHlCQUNaLGFBQ0EsYUFDakIiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXHVzZXJzXFxVc2VyTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlRmV0Y2ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlRmV0Y2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJMaXN0KHByb3BzKSB7XHJcbmNvbnN0IHVzZXJzID0gdXNlRmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjEwMDUwL2FwaS9nZXRVc2Vyc1wiKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiMFwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHVtbj1cIjFcIj5Vc2VyPC90aD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7dXNlcnMubWFwKGkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj57aS5jaGVja2JveH1cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2kudXNlcn08L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxyXG4gICAgICB9XHJcblxyXG4gICAgICAudmVydGljYWwge1xyXG4gICAgICAgIGFsaWduLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuICAgIH1cclxuXHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHRyIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoNjgsIDY4LCA2OCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICBcclxuICB9XHJcblxyXG4gICAgICAuYWNjb3VudHMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LWNvbG9yOiAjMDAwXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZ2VudEl0ZW1zIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC1jb2xvcjogIzAwMFxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIC5hZ2VudENhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI4cHggMCByZ2JhKDg2LDkxLDExNSwuMTUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGNkYzO1xyXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAgLmNvbC1sZWZ0IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIzMzY1OTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM1NjViNzMsIzIzMzY1OSk7XHJcbiAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICB9XHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuLmFyY2hldHlwZS1mb3JtX19jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgY29sb3I6ICMwZDExMmI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\users\\UserList.js */"));
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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
/* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fortmatic */ "fortmatic");
/* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fortmatic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ipfs_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ipfs-api */ "ipfs-api");
/* harmony import */ var ipfs_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ipfs_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_messages_MessageBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/messages/MessageBar */ "./components/messages/MessageBar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");











var fm = new fortmatic__WEBPACK_IMPORTED_MODULE_5___default.a('pk_test_F4970AF6BBC7F0C1');

if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: ""
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1906311973"
  }, "TripleCheck Dashboard"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1906311973"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-1906311973" + " " + "main"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1906311973"
  }, "Triple", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-1906311973"
  }, "Check")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1906311973"
  }, "Digital Origination and Verification using proxy re-encryption"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_messages_MessageBar__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_C_ChainDashboard__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1906311973"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1906311973"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1906311973"
  }, ".main.jsx-1906311973{background-color:#7F39FB;}b.jsx-1906311973{font-weight:normal;}h1.jsx-1906311973{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:2em;font-weight:200;margin-right:30px;padding-left:5px;color:#FFF;text-align:center;}h4.jsx-1906311973{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:16px;font-weight:normal;margin-right:30px;padding-left:5px;color:#FFF;text-align:center;}@-webkit-keyframes typing-jsx-1906311973{from{width:0;}to{width:100%;}}@keyframes typing-jsx-1906311973{from{width:0;}to{width:100%;}}@-webkit-keyframes blink-caret-jsx-1906311973{from,to{border-color:transparent;}50%{border-color:orange;}}@keyframes blink-caret-jsx-1906311973{from,to{border-color:transparent;}50%{border-color:orange;}}h4.jsx-1906311973{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:16px;font-weight:normal;margin-right:30px;padding-left:5px;color:#FFF;text-align:center;}.policyButton.jsx-1906311973{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:20px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}p.jsx-1906311973{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:18px;margin-right:30px;padding-left:5px;color:#000;text-align:center;}img.jsx-1906311973{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:80px;width:80px;font-size:12px;text-align:center;}ul.jsx-1906311973{display:inline-block;color:#999;position:absolute;margin-left:-15px;}.connected.jsx-1906311973{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}.after.jsx-1906311973{box-sizing:inherit;}@media screen and (max-width:960px){.row.jsx-1906311973{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;padding-bottom:8px;padding-top:8px;padding-left:28px;}.column.jsx-1906311973{width:100%;text-align:center;max-width:350px;padding-top:8px;padding-bottom:8px;margin-bottom:28px;}.center.jsx-1906311973{text-align:center;}.column2.jsx-1906311973{list-style:none;display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JrQixBQUs0QixBQUdKLEFBSW1ILEFBV0EsQUFhNUgsQUFDQyxBQUtvQixBQUNWLEFBSWlILEFBVzFHLEFBOEIwRyxBQVVBLEFBUzdHLEFBT2hCLEFBVVEsQUFNSyxBQVNYLEFBU08sQUFJRixRQXBITCxHQUNDLEFBOEVKLEFBeUJVLEtBYUwsRUFKZixDQTVJQSxBQW9IRixDQWxGMEIsQ0FpRVAsQUFRTixHQXpEYSxDQXJEMUIsQUFvQ29DLElBbUdoQixBQWFsQixHQTdDd0IsQUFRSCxVQXpETSxHQWtGVCxLQWhDTSxHQVFMLFFBeUJFLEVBbEZPLEtBa0QxQixJQVFpQixNQVlBLEVBYUUsS0FsRlUsTUEwRGQsSUFZSSxJQWFyQixTQXhCRixFQTFEMEIsSUFzRU4sY0FyRUUsRUFzRUEsRUF6SEYsQUFXQSxBQXdCQSxBQXlDQSxBQVVGLFVBbENTLEVBbUNWLEVBdEZHLEFBV0MsQUF3QkEsQUF5Q0EsRUE2Q25CLE9BbENtQixLQXRGQyxDQVdHLEFBd0JBLEFBZ0JMLEFBeUJJLFNBV0EsR0FuQ0osR0FuREksR0E0RUQsQ0FqRUMsQUF3QkEsS0FpQkEsR0FtQ3BCLE1BdEZtQixFQTRFTixFQWpFTSxBQXdCQSxHQWlCQSxNQXlCQyxJQTVFUCxJQVdBLEFBd0JBLENBaUJnQixNQW5EVCxHQTRFcEIsQ0FqRW9CLEFBd0JBLGFBaUJvQixDQW5EeEMsSUFXQSxBQXdCQSw2QkFpQnFCLHFGQUNGLGVBQ00sa0RBQ0osaUJBQ0UsbUJBQ0Qsa0JBQ0QsaUJBQ0UsbUJBQ2EsOEJBQ1gscUJBQ08sZ0VBQ1osZ0JBQ0gsYUFDZiIsImZpbGUiOiJDOlxcYy1jaGFpblxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgQ0NoYWluRGFzaGJvYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQy1DaGFpbkRhc2hib2FyZCc7XHJcbmltcG9ydCBGb3J0bWF0aWMgZnJvbSAnZm9ydG1hdGljJztcclxuaW1wb3J0IElwZnNBcGkgZnJvbSAnaXBmcy1hcGknXHJcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJztcclxuaW1wb3J0IE1lc3NhZ2VCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9tZXNzYWdlcy9NZXNzYWdlQmFyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcblxyXG5cclxubGV0IGZtID0gbmV3IEZvcnRtYXRpYygncGtfdGVzdF9GNDk3MEFGNkJCQzdGMEMxJyk7XHJcbmlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICB3ZWIzID0gbmV3IFdlYjMoZm0uZ2V0UHJvdmlkZXIoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAgIDxQYWdlIHRpdGxlPVwiXCI+XHJcblx0PEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5UcmlwbGVDaGVjayBEYXNoYm9hcmQ8L3RpdGxlPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIDxoMT5UcmlwbGU8Yj5DaGVjazwvYj48L2gxPlxyXG4gICAgICA8aDQ+RGlnaXRhbCBPcmlnaW5hdGlvbiBhbmQgVmVyaWZpY2F0aW9uIHVzaW5nIHByb3h5IHJlLWVuY3J5cHRpb248L2g0PlxyXG4gICAgICA8TWVzc2FnZUJhciAvPlxyXG4gICAgICA8Q0NoYWluRGFzaGJvYXJkIC8+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuXHJcbi5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0YzOUZCO1xyXG59XHJcbiAgYiB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcblxyXG4vKiBUaGUgdHlwaW5nIGVmZmVjdCAqL1xyXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XHJcbmZyb20geyB3aWR0aDogMCB9XHJcbnRvIHsgd2lkdGg6IDEwMCUgfVxyXG59XHJcblxyXG4vKiBUaGUgdHlwZXdyaXRlciBjdXJzb3IgZWZmZWN0ICovXHJcbkBrZXlmcmFtZXMgYmxpbmstY2FyZXQge1xyXG5mcm9tLCB0byB7IGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgfVxyXG41MCUgeyBib3JkZXItY29sb3I6IG9yYW5nZTsgfVxyXG59XHJcblxyXG4gICAgICBoNCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucG9saWN5QnV0dG9uIHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbm5lY3RlZCB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjNTBlM2MyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uYWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAucm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmNvbHVtbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbiAgfVxyXG5cclxuICAuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb2x1bW4yIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuYH08L3N0eWxlPlxyXG4gIDwvUGFnZT5cclxuXHJcblxyXG5cclxuICApXHJcbiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\pages\\index.js */"));
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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "fortmatic":
/*!****************************!*\
  !*** external "fortmatic" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fortmatic");

/***/ }),

/***/ "ipfs-api":
/*!***************************!*\
  !*** external "ipfs-api" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ipfs-api");

/***/ }),

/***/ "mitt":
/*!***********************!*\
  !*** external "mitt" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mitt");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

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

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map