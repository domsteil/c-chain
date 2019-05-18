webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/LogIn/index.js":
false,

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fortmatic */ "./node_modules/fortmatic/lib/fortmatic.js");
/* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fortmatic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _media_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media-query */ "./components/media-query.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./container */ "./components/container.js");











var fm = new fortmatic__WEBPACK_IMPORTED_MODULE_7___default.a('pk_test_F4970AF6BBC7F0C1');

if (true) {
  web3 = new web3__WEBPACK_IMPORTED_MODULE_8___default.a(fm.getProvider());
}

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

/***/ })

})
//# sourceMappingURL=index.js.8759b6073936bbcf4165.hot-update.js.map