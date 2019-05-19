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
    className: "jsx-3817966446"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    className: "jsx-3817966446"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("thead", {
    className: "jsx-3817966446"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    className: "jsx-3817966446"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "0",
    className: "jsx-3817966446"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "1",
    className: "jsx-3817966446"
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "2",
    className: "jsx-3817966446"
  }, "Hash"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    column: "3",
    className: "jsx-3817966446"
  }, "Policy"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", {
    className: "jsx-3817966446"
  }, items.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
      className: "jsx-3817966446"
    }, i.id, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-3817966446"
    }, i.name), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-3817966446"
    }, i.hash), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      className: "jsx-3817966446"
    }, i.policy, " Month"));
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3817966446"
  }, ".column.jsx-3817966446{text-align:left;}.list-item-check.jsx-3817966446{background:url(/static/verification.png) 2px 1px no-repeat;padding-left:50px;}.vertical.jsx-3817966446{-webkit-align-left:30px;-ms-flex-line-packalign-left:30px;align-left:30px;height:1200px;}.table.jsx-3817966446{display:table;border-collapse:separate;border-spacing:2px;border-color:grey;}thead.jsx-3817966446{display:table-header-group;vertical-align:middle;border-color:inherit;}th.jsx-3817966446{color:rgb(102,102,102);font-size:10px;font-weight:400;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;padding-left:-20px;padding-right:20px;}td.jsx-3817966446{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}tr.jsx-3817966446{text-align:left;vertical-align:top;padding:0px 10px;color:rgb(68,68,68);font-size:14px;border-bottom:1px solid rgb(234,234,234);}.accounts.jsx-3817966446{font-size:13px;font-color:#000;}.agentItems.jsx-3817966446{font-size:13px;font-color:#000;}.agentCard.jsx-3817966446{background:#fff;border-radius:5px;box-shadow:0 8px 28px 0 rgba(86,91,115,.15);position:center;text-align:center;box-sizing:border-box;align:center;padding-left:28px;padding-right:28px;margin-top:28px;margin-left:28px;margin-right:28px;background-color:#F7F6F3;width:1000px;height:400px;}.col-left.jsx-3817966446{box-sizing:border-box;min-height:100%;background:#233659;background:linear-gradient(135deg,#565b73,#233659);padding:25px;border-top-left-radius:5px;border-top-right-radius:5px;}@media screen and (max-width:960px){.row.jsx-3817966446{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-3817966446{width:100%;padding:1.5rem 0;text-align:center;max-width:350px;}.archetype-form__container.jsx-3817966446{background:0 0;color:#0d112b;width:100%;margin:0 auto;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxsZWRnZXJcXExlZGdlckxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUR3QixBQUlNLEFBRzhELEFBTTNDLEFBS0YsQUFPYSxBQU1GLEFBU1QsQUFVRixBQVVDLEFBS0EsQUFPQyxBQWtCTSxBQVlFLEFBSVgsQUFRRixXQVBRLEdBeEZNLENBMkM1QixBQUtBLEFBZ0RhLENBL0daLEFBcUNxQixBQVVGLEFBc0JDLE1Ba0JGLENBM0RELElBTk8sQ0FrRkYsQ0FRYixFQXREVCxBQUtBLEdBTzhDLENBaEMzQixBQVVGLEdBbkJDLEFBMkRHLENBeEVBLENBaUdULE1BUlEsR0FsRkcsR0FnQkMsQUFVRixFQW5CRCxBQW9GUCxHQXpCdUMsQ0F4RWpDLENBYkEsR0FzR2xCLFFBbEZKLEFBMkZKLEVBM0V1QixBQVVGLEVBeENDLEVBUWxCLENBWkUsQ0FpRWtCLEFBNEJHLFNBMUR3QixBQVVGLENBeEMzQyxNQTZEb0IsQ0E0QmxCLGFBVmEsSUFqQlMsU0FrQkssT0FoRC9CLEFBVUYsTUFxQm1CLGFBM0NNLEFBNENELENBaUJVLGlCQWhCVCxDQTVDQSxVQTZEdEIsUUFoQm1CLENBNUNwQixlQTZDcUIsaUJBQ0Msa0JBQ08seUJBQ1osYUFDQSxhQUNqQiIsImZpbGUiOiJDOlxcYy1jaGFpblxcY29tcG9uZW50c1xcbGVkZ2VyXFxMZWRnZXJMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VGZXRjaCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91c2VGZXRjaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVkZ2VyTGlzdChwcm9wcykge1xyXG5jb25zdCBpdGVtcyA9IHVzZUZldGNoKFwiaHR0cDovL2VjMi0xOC0yMDQtMzQtMzQuY29tcHV0ZS0xLmFtYXpvbmF3cy5jb206NTAwMC9saXN0RW5jcnlwdGVkRmlsZXNcIik7XHJcbiAgXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzVXNlckxvZ2dlZEluLCBzZXRJc1VzZXJMb2dnZWRJbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZXRJc1VzZXJMb2dnZWRJbih0cnVlKTtcclxuICAgICAgc2V0SXNFcnJvcihmYWxzZSk7XHJcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyh1cmwpO1xyXG4gIFxyXG4gICAgICAgIHNldERhdGEocmVzdWx0LmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHNldElzRXJyb3IodHJ1ZSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiMFwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHVtbj1cIjFcIj5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY29sdW1uPVwiMlwiPkhhc2g8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2x1bW49XCIzXCI+UG9saWN5PC90aD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj57aS5pZH1cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2kubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aS5oYXNofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntpLnBvbGljeX0gTW9udGg8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxyXG4gICAgICB9XHJcblxyXG4gICAgICAubGlzdC1pdGVtLWNoZWNrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy92ZXJpZmljYXRpb24ucG5nKSAycHggMXB4IG5vLXJlcGVhdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAudmVydGljYWwge1xyXG4gICAgICAgIGFsaWduLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuICAgIH1cclxuXHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAtMjBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHRyIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoNjgsIDY4LCA2OCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICBcclxuICB9XHJcblxyXG4gICAgICAuYWNjb3VudHMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LWNvbG9yOiAjMDAwXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZ2VudEl0ZW1zIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC1jb2xvcjogIzAwMFxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIC5hZ2VudENhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI4cHggMCByZ2JhKDg2LDkxLDExNSwuMTUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGNkYzO1xyXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAgLmNvbC1sZWZ0IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIzMzY1OTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM1NjViNzMsIzIzMzY1OSk7XHJcbiAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICB9XHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuLmFyY2hldHlwZS1mb3JtX19jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgY29sb3I6ICMwZDExMmI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\ledger\\LedgerList.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.ef1a0825de0cb0c759f2.hot-update.js.map