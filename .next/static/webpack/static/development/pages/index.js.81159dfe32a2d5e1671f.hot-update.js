webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/useFetch */ "./components/useFetch.js");



function LedgerList(props) {
  var items = Object(_components_useFetch__WEBPACK_IMPORTED_MODULE_2__["default"])("http://localhost:10050/api/getLedger");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4069564264"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "jsx-4069564264"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
    className: "jsx-4069564264"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-4069564264"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "0",
    className: "jsx-4069564264"
  }, "Ledger Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "1",
    className: "jsx-4069564264"
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "2",
    className: "jsx-4069564264"
  }, "Content Type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "3",
    className: "jsx-4069564264"
  }, "Hash"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "4",
    className: "jsx-4069564264"
  }, "Key"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "5",
    className: "jsx-4069564264"
  }, "Policy"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "jsx-4069564264"
  }, items.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      className: "jsx-4069564264"
    }, i.itemId, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-4069564264"
    }, i.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-4069564264"
    }, i.contentType), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-4069564264"
    }, i.hash), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-4069564264"
    }, i.key), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-4069564264"
    }, i.policy));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4069564264"
  }, ".column.jsx-4069564264{text-align:left;}.list-item-check.jsx-4069564264{background:url(/static/images/pricing_table_check.png) 2px 1px no-repeat;padding-left:50px;}.vertical.jsx-4069564264{-webkit-align-left:30px;-ms-flex-line-packalign-left:30px;align-left:30px;height:1200px;}.table.jsx-4069564264{display:table;border-collapse:separate;border-spacing:2px;border-color:grey;}thead.jsx-4069564264{display:table-header-group;vertical-align:middle;border-color:inherit;}th.jsx-4069564264{color:rgb(102,102,102);font-size:14px;font-weight:400;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;padding-left:69px;}td.jsx-4069564264{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}tr.jsx-4069564264{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}.accounts.jsx-4069564264{font-size:13px;font-color:#000;}.agentItems.jsx-4069564264{font-size:13px;font-color:#000;}.agentCard.jsx-4069564264{background:#fff;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);position:center;text-align:center;box-sizing:border-box;align:center;padding-left:28px;padding-right:28px;margin-top:28px;margin-left:28px;margin-right:28px;background-color:#F7F6F3;width:1000px;height:400px;}.col-left.jsx-4069564264{box-sizing:border-box;min-height:100%;background:#233659;background:linear-gradient(135deg,#565b73,#233659);padding:25px;border-top-left-radius:5px;border-top-right-radius:5px;}@media screen and (max-width:960px){.row.jsx-4069564264{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-4069564264{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-4069564264{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0N3QixBQUlNLEFBRzRFLEFBTXpELEFBS0YsQUFPYSxBQU1GLEFBUVQsQUFVRixBQVVDLEFBS0EsQUFPQyxBQWtCTSxBQVlFLEFBSVgsQUFRRixXQVBRLEdBdkZNLENBMEM1QixBQUtBLEFBZ0RhLENBOUdaLEFBb0NxQixBQVVGLEFBc0JDLE1Ba0JGLENBMURELElBTk8sQ0FpRkYsQ0FRYixFQXREVCxBQUtBLEdBTzhDLENBaEMzQixBQVVGLEdBbEJDLEFBMERHLENBdkVBLENBZ0dULE1BUlEsR0FqRkcsR0FlQyxBQVVGLEVBbEJELEFBbUZQLEdBekJ1QyxDQXZFakMsSUF3RmxCLFFBakZKLEFBMEZKLEVBM0V1QixBQVVGLENBN0NLLENBTUosRUFRbEIsRUFvRG9CLEFBNEJHLFNBMUR3QixBQVVGLENBdkMzQyxHQUxBLEdBaUVvQixDQTRCbEIsYUFWYSxJQWpCUyxTQWtCSyxPQWhEL0IsQUFVRixNQXFCbUIsYUExQ0ssQUEyQ0EsQ0FpQlUsaUJBM0RoQyxBQTJDdUIsV0FpQnRCLFFBaEJtQixnQkFDQyxpQkFDQyxrQkFDTyx5QkFDWixhQUNBLGFBQ2pCIiwiZmlsZSI6IkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUZldGNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VzZUZldGNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWRnZXJMaXN0KHByb3BzKSB7XHJcbmNvbnN0IGl0ZW1zID0gdXNlRmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjEwMDUwL2FwaS9nZXRMZWRnZXJcIik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHVtbj1cIjBcIj5MZWRnZXIgSWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2x1bW49XCIxXCI+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2x1bW49XCIyXCI+Q29udGVudCBUeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiM1wiPkhhc2g8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2x1bW49XCI0XCI+S2V5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiNVwiPlBvbGljeTwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcChpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHI+e2kuaXRlbUlkfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aS5kZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aS5jb250ZW50VHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aS5oYXNofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntpLmtleX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aS5wb2xpY3l9PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpc3QtaXRlbS1jaGVjayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1hZ2VzL3ByaWNpbmdfdGFibGVfY2hlY2sucG5nKSAycHggMXB4IG5vLXJlcGVhdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAudmVydGljYWwge1xyXG4gICAgICAgIGFsaWduLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuICAgIH1cclxuXHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2OXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHRyIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoNjgsIDY4LCA2OCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICBcclxuICB9XHJcblxyXG4gICAgICAuYWNjb3VudHMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LWNvbG9yOiAjMDAwXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZ2VudEl0ZW1zIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC1jb2xvcjogIzAwMFxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIC5hZ2VudENhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI4cHggMCByZ2JhKDg2LDkxLDExNSwuMTUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGNkYzO1xyXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAgLmNvbC1sZWZ0IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIzMzY1OTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM1NjViNzMsIzIzMzY1OSk7XHJcbiAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICB9XHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuLmFyY2hldHlwZS1mb3JtX19jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgY29sb3I6ICMwZDExMmI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\ledger\\LedgerList.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.81159dfe32a2d5e1671f.hot-update.js.map