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
    className: "jsx-1820452869"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "jsx-1820452869"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
    className: "jsx-1820452869"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-1820452869"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "0",
    className: "jsx-1820452869"
  }, "Ledger Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "1",
    className: "jsx-1820452869"
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "2",
    className: "jsx-1820452869"
  }, "Content Type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "3",
    className: "jsx-1820452869"
  }, "Hash"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    column: "4",
    className: "jsx-1820452869"
  }, "Key"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "jsx-1820452869"
  }, items.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      className: "jsx-1820452869"
    }, i.itemId, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-1820452869"
    }, i.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-1820452869"
    }, i.contentType), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-1820452869"
    }, i.hash), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-1820452869"
    }, i.key));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1820452869"
  }, ".column.jsx-1820452869{text-align:left;}.list-item-check.jsx-1820452869{background:url(/static/images/pricing_table_check.png) 2px 1px no-repeat;padding-left:50px;}.vertical.jsx-1820452869{-webkit-align-left:30px;-ms-flex-line-packalign-left:30px;align-left:30px;height:1200px;}.table.jsx-1820452869{display:table;border-collapse:separate;border-spacing:2px;border-color:grey;}thead.jsx-1820452869{display:table-header-group;vertical-align:middle;border-color:inherit;}th.jsx-1820452869{color:rgb(102,102,102);font-size:14px;font-weight:400;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;padding-left:28px;}td.jsx-1820452869{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}tr.jsx-1820452869{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}.accounts.jsx-1820452869{font-size:13px;font-color:#000;}.agentItems.jsx-1820452869{font-size:13px;font-color:#000;}.agentCard.jsx-1820452869{background:#fff;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);position:center;text-align:center;box-sizing:border-box;align:center;padding-left:28px;padding-right:28px;margin-top:28px;margin-left:28px;margin-right:28px;background-color:#F7F6F3;width:1000px;height:400px;}.col-left.jsx-1820452869{box-sizing:border-box;min-height:100%;background:#233659;background:linear-gradient(135deg,#565b73,#233659);padding:25px;border-top-left-radius:5px;border-top-right-radius:5px;}@media screen and (max-width:960px){.row.jsx-1820452869{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-1820452869{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-1820452869{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJ3QixBQUlNLEFBRzRFLEFBTXpELEFBS0YsQUFPYSxBQU1GLEFBUVQsQUFVRixBQVVDLEFBS0EsQUFPQyxBQWtCTSxBQVlFLEFBSVgsQUFRRixXQVBRLEdBdkZNLENBMEM1QixBQUtBLEFBZ0RhLENBOUdaLEFBb0NxQixBQVVGLEFBc0JDLE1Ba0JGLENBMURELElBTk8sQ0FpRkYsQ0FRYixFQXREVCxBQUtBLEdBTzhDLENBaEMzQixBQVVGLEdBbEJDLEFBMERHLENBdkVBLENBZ0dULE1BUlEsR0FqRkcsR0FlQyxBQVVGLEVBbEJELEFBbUZQLEdBekJ1QyxDQXZFakMsSUF3RmxCLFFBakZKLEFBMEZKLEVBM0V1QixBQVVGLENBN0NLLENBTUosRUFRbEIsRUFvRG9CLEFBNEJHLFNBMUR3QixBQVVGLENBdkMzQyxHQUxBLEdBaUVvQixDQTRCbEIsYUFWYSxJQWpCUyxTQWtCSyxPQWhEL0IsQUFVRixNQXFCbUIsYUExQ0ssQUEyQ0EsQ0FpQlUsaUJBM0RoQyxBQTJDdUIsV0FpQnRCLFFBaEJtQixnQkFDQyxpQkFDQyxrQkFDTyx5QkFDWixhQUNBLGFBQ2pCIiwiZmlsZSI6IkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUZldGNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VzZUZldGNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWRnZXJMaXN0KHByb3BzKSB7XHJcbmNvbnN0IGl0ZW1zID0gdXNlRmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjEwMDUwL2FwaS9nZXRMZWRnZXJcIik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHVtbj1cIjBcIj5MZWRnZXIgSWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2x1bW49XCIxXCI+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2x1bW49XCIyXCI+Q29udGVudCBUeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiM1wiPkhhc2g8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2x1bW49XCI0XCI+S2V5PC90aD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj57aS5pdGVtSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntpLmRlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntpLmNvbnRlbnRUeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntpLmhhc2h9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2kua2V5fTwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuY29sdW1uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5saXN0LWl0ZW0tY2hlY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltYWdlcy9wcmljaW5nX3RhYmxlX2NoZWNrLnBuZykgMnB4IDFweCBuby1yZXBlYXQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgLnZlcnRpY2FsIHtcclxuICAgICAgICBhbGlnbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFibGUge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhlYWQge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNjgsIDY4LCA2OCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICB0ciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICBjb2xvcjogcmdiKDY4LCA2OCwgNjgpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAgICAgLmFjY291bnRzIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC1jb2xvcjogIzAwMFxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWdlbnRJdGVtcyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtY29sb3I6ICMwMDBcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcblxyXG4gICAgICAuYWdlbnRDYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyOHB4IDAgcmdiYSg4Niw5MSwxMTUsLjE1KTtcclxuICAgICAgICBwb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjhweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjZGMztcclxuICAgICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgIC5jb2wtbGVmdCB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMzM2NTk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjNTY1YjczLCMyMzM2NTkpO1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgfVxyXG5cclxuICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIHRhYmxldFxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbi5hcmNoZXR5cGUtZm9ybV9fY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgIGNvbG9yOiAjMGQxMTJiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\c-chain\\components\\ledger\\LedgerList.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.6effea1e108e7a4f89e8.hot-update.js.map