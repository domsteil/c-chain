webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=index.js.71ed24b76575925c4913.hot-update.js.map