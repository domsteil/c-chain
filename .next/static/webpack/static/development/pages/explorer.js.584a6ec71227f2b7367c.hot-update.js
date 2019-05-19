webpackHotUpdate("static\\development\\pages\\explorer.js",{

/***/ "./components/ledger/LedgerList.js":
/*!*****************************************!*\
  !*** ./components/ledger/LedgerList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LedgerList; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_useFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/useFetch */ "./components/useFetch.js");






function LedgerList(props) {
  var items = Object(_components_useFetch__WEBPACK_IMPORTED_MODULE_5__["default"])("http://ec2-18-204-34-34.compute-1.amazonaws.com:5000/upload");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      isError = _useState4[0],
      setIsError = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setIsError(false);
                setIsLoading(true);
                _context.prev = 2;
                _context.next = 5;
                return axios(url);

              case 5:
                result = _context.sent;
                setData(result.data);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                setIsError(true);

              case 12:
                setIsLoading(false);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-881517100"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    className: "jsx-881517100"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("thead", {
    className: "jsx-881517100"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    className: "jsx-881517100"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "0",
    className: "jsx-881517100"
  }, "Ledger Id"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "1",
    className: "jsx-881517100"
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "2",
    className: "jsx-881517100"
  }, "Content Type"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "3",
    className: "jsx-881517100"
  }, "Hash"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "4",
    className: "jsx-881517100"
  }, "Key"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "5",
    className: "jsx-881517100"
  }, "Policy"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "6",
    className: "jsx-881517100"
  }, "Expiration"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", {
    className: "jsx-881517100"
  }, items.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
      className: "jsx-881517100"
    }, i.itemId, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-881517100"
    }, i.message), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-881517100"
    }, i.contentType), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-881517100"
    }, i.hash), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-881517100"
    }, i.key), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-881517100"
    }, i.policy), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-881517100"
    }, i.expiration));
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "881517100"
  }, ".column.jsx-881517100{text-align:left;}.list-item-check.jsx-881517100{background:url(/static/verification.png) 2px 1px no-repeat;padding-left:50px;}.vertical.jsx-881517100{-webkit-align-left:30px;-ms-flex-line-packalign-left:30px;align-left:30px;height:1200px;}.table.jsx-881517100{display:table;border-collapse:separate;border-spacing:2px;border-color:grey;}thead.jsx-881517100{display:table-header-group;vertical-align:middle;border-color:inherit;}th.jsx-881517100{color:rgb(102,102,102);font-size:14px;font-weight:400;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;padding-left:50px;}td.jsx-881517100{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}tr.jsx-881517100{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}.accounts.jsx-881517100{font-size:13px;font-color:#000;}.agentItems.jsx-881517100{font-size:13px;font-color:#000;}.agentCard.jsx-881517100{background:#fff;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);position:center;text-align:center;box-sizing:border-box;align:center;padding-left:28px;padding-right:28px;margin-top:28px;margin-left:28px;margin-right:28px;background-color:#F7F6F3;width:1000px;height:400px;}.col-left.jsx-881517100{box-sizing:border-box;min-height:100%;background:#233659;background:linear-gradient(135deg,#565b73,#233659);padding:25px;border-top-left-radius:5px;border-top-right-radius:5px;}@media screen and (max-width:960px){.row.jsx-881517100{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-881517100{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-881517100{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkR3QixBQUlNLEFBRzhELEFBTTNDLEFBS0YsQUFPYSxBQU1GLEFBUVQsQUFVRixBQVVDLEFBS0EsQUFPQyxBQWtCTSxBQVlFLEFBSVgsQUFRRixXQVBRLEdBdkZNLENBMEM1QixBQUtBLEFBZ0RhLENBOUdaLEFBb0NxQixBQVVGLEFBc0JDLE1Ba0JGLENBMURELElBTk8sQ0FpRkYsQ0FRYixFQXREVCxBQUtBLEdBTzhDLENBaEMzQixBQVVGLEdBbEJDLEFBMERHLENBdkVBLENBZ0dULE1BUlEsR0FqRkcsR0FlQyxBQVVGLEVBbEJELEFBbUZQLEdBekJ1QyxDQXZFakMsQ0FiQSxHQXFHbEIsUUFqRkosQUEwRkosRUEzRXVCLEFBVUYsRUF2Q0MsRUFRbEIsQ0FaRSxDQWdFa0IsQUE0QkcsU0ExRHdCLEFBVUYsQ0F2QzNDLE1BNERvQixDQTRCbEIsYUFWYSxJQWpCUyxTQWtCSyxPQWhEL0IsQUFVRixNQXFCbUIsYUExQ0ssQUEyQ0EsQ0FpQlUsaUJBM0RoQyxBQTJDdUIsV0FpQnRCLFFBaEJtQixnQkFDQyxpQkFDQyxrQkFDTyx5QkFDWixhQUNBLGFBQ2pCIiwiZmlsZSI6IkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUZldGNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VzZUZldGNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWRnZXJMaXN0KHByb3BzKSB7XHJcbmNvbnN0IGl0ZW1zID0gdXNlRmV0Y2goXCJodHRwOi8vZWMyLTE4LTIwNC0zNC0zNC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTo1MDAwL3VwbG9hZFwiKTtcclxuICBcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZXRJc0Vycm9yKGZhbHNlKTtcclxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKHVybCk7XHJcbiAgXHJcbiAgICAgICAgc2V0RGF0YShyZXN1bHQuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgc2V0SXNFcnJvcih0cnVlKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2x1bW49XCIwXCI+TGVkZ2VyIElkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiMVwiPkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiMlwiPkNvbnRlbnQgVHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHVtbj1cIjNcIj5IYXNoPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiNFwiPktleTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHVtbj1cIjVcIj5Qb2xpY3k8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2x1bW49XCI2XCI+RXhwaXJhdGlvbjwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcChpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHI+e2kuaXRlbUlkfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aS5tZXNzYWdlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntpLmNvbnRlbnRUeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntpLmhhc2h9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2kua2V5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntpLnBvbGljeX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aS5leHBpcmF0aW9ufTwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuY29sdW1uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5saXN0LWl0ZW0tY2hlY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3ZlcmlmaWNhdGlvbi5wbmcpIDJweCAxcHggbm8tcmVwZWF0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC52ZXJ0aWNhbCB7XHJcbiAgICAgICAgYWxpZ24tbGVmdDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDEyMDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRhYmxlIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoZWFkIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBjb2xvcjogcmdiKDY4LCA2OCwgNjgpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgdHIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgICAgIC5hY2NvdW50cyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtY29sb3I6ICMwMDBcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFnZW50SXRlbXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LWNvbG9yOiAjMDAwXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgLmFnZW50Q2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjhweCAwIHJnYmEoODYsOTEsMTE1LC4xNSk7XHJcbiAgICAgICAgcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBhbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y2RjM7XHJcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAuY29sLWxlZnQge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjMzNjU5O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzU2NWI3MywjMjMzNjU5KTtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgIH1cclxuXHJcbiAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4uYXJjaGV0eXBlLWZvcm1fX2NvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgICBjb2xvcjogIzBkMTEyYjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\c-chain\\components\\ledger\\LedgerList.js */"));
}

/***/ })

})
//# sourceMappingURL=explorer.js.584a6ec71227f2b7367c.hot-update.js.map