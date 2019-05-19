webpackHotUpdate("static\\development\\pages\\explorer.js",{

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











var web3;
var address;
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

var handleSendTransaction = function handleSendTransaction() {
  fm.transactions.send(function (err, txnHash) {
    if (err) throw err;
    setUserInfo();
  });
};

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
    }, "C-Chain Network"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Header, null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {
      className: "jsx-4143141641" + " " + "f-reset"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "4143141641"
    }, ".signIn.jsx-4143141641{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 25px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.connected.jsx-4143141641{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}b.jsx-4143141641{font-weight:normal;}nav.jsx-4143141641{position:relative;-webkit-flex:1;-ms-flex:1;flex:1;height:64px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:800px;}@media screen and (max-width:640px){.logo.jsx-4143141641{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVpQixBQUkyQixBQTZCWCxBQVVNLEFBSWlCLEFBWUgsV0F6QnJCLEVBMEJNLEtBWk8sQ0FKM0IsRUFUZSxHQTlCSyxRQStCSyxVQTlCRixTQTJDUyxFQVpULFVBOUJDLEFBMkNTLFNBWlYsYUE5QkksTUErQk4saUJBQ3JCLEVBL0JvQixrQkFDSixTQXlDa0MsS0F4QzdCLG1CQUNQLFlBQ0EsWUFDSSxnQkFDRCxlQUNVLHVCQUNXLGFBbUNDLHFCQWxDcEIsd0VBbUNvQixhQWxDdEIsTUFtQ0MsU0FsQ0ssa0RBQ0osaUJBQ0Msa0JBQ0QsaUJBQ0UsbUJBQ2EsOEJBQ1gscUJBQ08sZ0VBQ1osZ0JBQ0gsYUFDZiIsImZpbGUiOiJDOlxcYy1jaGFpblxcY29tcG9uZW50c1xcbmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBGb3J0bWF0aWMgZnJvbSAnZm9ydG1hdGljJztcclxuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XHJcbmltcG9ydCB7IE1lZGlhUXVlcnlDb25zdW1lciB9IGZyb20gJy4vbWVkaWEtcXVlcnknO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJztcclxuXHJcbnZhciB3ZWIzO1xyXG52YXIgYWRkcmVzcztcclxubGV0IGZtID0gbmV3IEZvcnRtYXRpYygncGtfdGVzdF9GNDk3MEFGNkJCQzdGMEMxJyk7XHJcblxyXG5pZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgd2ViMyA9IG5ldyBXZWIzKGZtLmdldFByb3ZpZGVyKCkpO1xyXG59XHJcblxyXG4gICAgICBsZXQgc2V0VXNlckluZm8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgd2ViMy5ldGguZ2V0QWNjb3VudHMoKGVyciwgYWNjb3VudHMpID0+IHtcclxuICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgICAgICAgIGxldCBhZGRyZXNzID0gYWNjb3VudHNbMF07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhhZGRyZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBBdXRoZW50aWNhdGUgdXNlclxyXG4gICAgICAgIGxldCBhY2NvdW50cyA9IGF3YWl0IGZtLnVzZXIubG9naW4oKTtcclxuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgc2V0VXNlckluZm8oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG5cclxuICAgICAgbGV0IGhhbmRsZVNlbmRUcmFuc2FjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBmbS50cmFuc2FjdGlvbnMuc2VuZCgoZXJyLCB0eG5IYXNoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgICBzZXRVc2VySW5mbygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoKHsgaXNNb2JpbGUsIHJvdXRlciB9KSA9PiB7XHJcbiAgY29uc3QgeyByb3V0ZSB9ID0gcm91dGVyO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1lZGlhUXVlcnlDb25zdW1lcj5cclxuICAgICAge21lZGlhID0+IHtcclxuICAgICAgICBpZiAobWVkaWEuaXNNb2JpbGUpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb250YWluZXIgY2VudGVyPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIEMtQ2hhaW4gTmV0d29ya1xyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Q29udGFpbmVyIGNlbnRlcj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgIEMtQ2hhaW4gTmV0d29ya1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmLXJlc2V0XCI+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcblxyXG4uc2lnbkluIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNvbm5lY3RlZCB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTBlM2MyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmIge1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbiAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4MDBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIG1vYmlsZSArIFNTUlxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0gY2xhc3NOYW1lPVwic2lnbkluXCIgaW52ZXJ0ID5Mb2dJbjwvYnV0dG9uPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxwPjxiIGNsYXNzTmFtZT1cImNvbm5lY3RlZFwiPjwvYj57YWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgICB9fVxyXG4gICAgPC9NZWRpYVF1ZXJ5Q29uc3VtZXI+XHJcbiAgKTtcclxufSk7Il19 */\n/*@ sourceURL=C:\\c-chain\\components\\navbar.js */"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-4143141641" + " " + "nav"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-4143141641"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      onClick: handleLogin,
      invert: true,
      className: "jsx-4143141641" + " " + "signIn"
    }, "LogIn"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "jsx-4143141641"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
      className: "jsx-4143141641" + " " + "connected"
    }), address), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "jsx-4143141641"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
      className: "jsx-4143141641"
    }))));
  });
}));

/***/ })

})
//# sourceMappingURL=explorer.js.47b828292bb9e9ce1535.hot-update.js.map