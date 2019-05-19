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
  var items = Object(_components_useFetch__WEBPACK_IMPORTED_MODULE_5__["default"])("http://ec2-18-204-34-34.compute-1.amazonaws.com:5000/listEncryptedFiles");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      isError = _useState4[0],
      setIsError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      isUserLoggedIn = _useState6[0],
      setIsUserLoggedIn = _useState6[1];

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
                setIsUserLoggedIn(true);
                setIsError(false);
                setIsLoading(true);
                _context.prev = 3;
                _context.next = 6;
                return axios(url);

              case 6:
                result = _context.sent;
                setData(result.data);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                setIsError(true);

              case 13:
                setIsLoading(false);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 10]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2831631974"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    className: "jsx-2831631974"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("thead", {
    className: "jsx-2831631974"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    className: "jsx-2831631974"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "0",
    className: "jsx-2831631974"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "1",
    className: "jsx-2831631974"
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "2",
    className: "jsx-2831631974"
  }, "Hash"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "3",
    className: "jsx-2831631974"
  }, "Policy"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "4",
    className: "jsx-2831631974"
  }, "Link"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", {
    className: "jsx-2831631974"
  }, items.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
      className: "jsx-2831631974"
    }, i.id, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-2831631974"
    }, i.name), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-2831631974"
    }, i.hash), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-2831631974"
    }, i.policy, " Month"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      href: i.url,
      className: "jsx-2831631974"
    }, i.url));
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2831631974"
  }, ".column.jsx-2831631974{text-align:left;}.list-item-check.jsx-2831631974{background:url(/static/verification.png) 2px 1px no-repeat;padding-left:50px;}.vertical.jsx-2831631974{-webkit-align-left:30px;-ms-flex-line-packalign-left:30px;align-left:30px;height:1200px;}.table.jsx-2831631974{display:table;border-collapse:separate;border-spacing:2px;border-color:grey;}thead.jsx-2831631974{display:table-header-group;vertical-align:middle;border-color:inherit;}th.jsx-2831631974{color:rgb(102,102,102);font-size:14px;font-weight:400;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;padding-left:-20px;}td.jsx-2831631974{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}tr.jsx-2831631974{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}.accounts.jsx-2831631974{font-size:13px;font-color:#000;}.agentItems.jsx-2831631974{font-size:13px;font-color:#000;}.agentCard.jsx-2831631974{background:#fff;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);position:center;text-align:center;box-sizing:border-box;align:center;padding-left:28px;padding-right:28px;margin-top:28px;margin-left:28px;margin-right:28px;background-color:#F7F6F3;width:1000px;height:400px;}.col-left.jsx-2831631974{box-sizing:border-box;min-height:100%;background:#233659;background:linear-gradient(135deg,#565b73,#233659);padding:25px;border-top-left-radius:5px;border-top-right-radius:5px;}@media screen and (max-width:960px){.row.jsx-2831631974{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-2831631974{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-2831631974{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkR3QixBQUlNLEFBRzhELEFBTTNDLEFBS0YsQUFPYSxBQU1GLEFBUVQsQUFVRixBQVVDLEFBS0EsQUFPQyxBQWtCTSxBQVlFLEFBSVgsQUFRRixXQVBRLEdBdkZNLENBMEM1QixBQUtBLEFBZ0RhLENBOUdaLEFBb0NxQixBQVVGLEFBc0JDLE1Ba0JGLENBMURELElBTk8sQ0FpRkYsQ0FRYixFQXREVCxBQUtBLEdBTzhDLENBaEMzQixBQVVGLEdBbEJDLEFBMERHLENBdkVBLENBZ0dULE1BUlEsR0FqRkcsR0FlQyxBQVVGLEVBbEJELEFBbUZQLEdBekJ1QyxDQXZFakMsQ0FiQSxHQXFHbEIsUUFqRkosQUEwRkosRUEzRXVCLEFBVUYsRUF2Q0MsRUFRbEIsQ0FaRSxDQWdFa0IsQUE0QkcsU0ExRHdCLEFBVUYsQ0F2QzNDLE1BNERvQixDQTRCbEIsYUFWYSxJQWpCUyxTQWtCSyxPQWhEL0IsQUFVRixNQXFCbUIsYUExQ00sQUEyQ0QsQ0FpQlUsaUJBaEJULENBM0N2QixVQTREQyxRQWhCbUIsZ0JBQ0MsaUJBQ0Msa0JBQ08seUJBQ1osYUFDQSxhQUNqQiIsImZpbGUiOiJDOlxcYy1jaGFpblxcY29tcG9uZW50c1xcbGVkZ2VyXFxMZWRnZXJMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VGZXRjaCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91c2VGZXRjaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVkZ2VyTGlzdChwcm9wcykge1xyXG5jb25zdCBpdGVtcyA9IHVzZUZldGNoKFwiaHR0cDovL2VjMi0xOC0yMDQtMzQtMzQuY29tcHV0ZS0xLmFtYXpvbmF3cy5jb206NTAwMC9saXN0RW5jcnlwdGVkRmlsZXNcIik7XHJcbiAgXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzVXNlckxvZ2dlZEluLCBzZXRJc1VzZXJMb2dnZWRJbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZXRJc1VzZXJMb2dnZWRJbih0cnVlKTtcclxuICAgICAgc2V0SXNFcnJvcihmYWxzZSk7XHJcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyh1cmwpO1xyXG4gIFxyXG4gICAgICAgIHNldERhdGEocmVzdWx0LmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHNldElzRXJyb3IodHJ1ZSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiMFwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHVtbj1cIjFcIj5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiMlwiPkhhc2g8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2x1bW49XCIzXCI+UG9saWN5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiNFwiPkxpbms8L3RoPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoaSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPntpLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntpLmhhc2h9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2kucG9saWN5fSBNb250aDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGhyZWY9e2kudXJsfT57aS51cmx9PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpc3QtaXRlbS1jaGVjayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvdmVyaWZpY2F0aW9uLnBuZykgMnB4IDFweCBuby1yZXBlYXQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgLnZlcnRpY2FsIHtcclxuICAgICAgICBhbGlnbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFibGUge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhlYWQge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogLTIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBjb2xvcjogcmdiKDY4LCA2OCwgNjgpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgdHIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgICAgIC5hY2NvdW50cyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtY29sb3I6ICMwMDBcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFnZW50SXRlbXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LWNvbG9yOiAjMDAwXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgLmFnZW50Q2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjhweCAwIHJnYmEoODYsOTEsMTE1LC4xNSk7XHJcbiAgICAgICAgcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBhbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y2RjM7XHJcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAuY29sLWxlZnQge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjMzNjU5O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzU2NWI3MywjMjMzNjU5KTtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgIH1cclxuXHJcbiAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4uYXJjaGV0eXBlLWZvcm1fX2NvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgICBjb2xvcjogIzBkMTEyYjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\c-chain\\components\\ledger\\LedgerList.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.8078182ec17fb22b7e58.hot-update.js.map