webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
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
/* harmony import */ var ipfs_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ipfs-api */ "./node_modules/ipfs-api/src/index.js");
/* harmony import */ var ipfs_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ipfs_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_LogIn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/LogIn */ "./components/LogIn/index.js");
/* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fortmatic */ "./node_modules/fortmatic/lib/fortmatic.js");
/* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fortmatic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _media_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./media-query */ "./components/media-query.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./container */ "./components/container.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vm */ "./node_modules/vm-browserify/index.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vm__WEBPACK_IMPORTED_MODULE_12__);












 // IPFS Config Globals

global.ipfs = ipfs;
global.ipfsHost = 'localhost', global.ipfsAPIPort = '5001', global.ipfsWebPort = '8080', global.ipfsDataHost = "http://" + ipfsHost + ':' + ipfsWebPort + "/ipfs";
var fm = new fortmatic__WEBPACK_IMPORTED_MODULE_9___default.a('pk_test_F4970AF6BBC7F0C1');
web3 = new Web3(fm.getProvider());
var ipfs = ipfs_api__WEBPACK_IMPORTED_MODULE_7___default()(ipfsHost, ipfsAPIPort);
ipfs.swarm.peers(function (err, response) {
  if (err) {
    console.log("not connected to IPFS on AWS");
  } else {
    console.log("Connected to IPFS"); //console.log(response);
  }
});

var handleLogin =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var accounts;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fm.user.login();

          case 2:
            accounts = _context.sent;

            if (accounts.length > 0) {
              setUserInfo();
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleLogin() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(function (_ref2) {
  var isMobile = _ref2.isMobile,
      router = _ref2.router;
  var route = router.route;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_media_query__WEBPACK_IMPORTED_MODULE_10__["MediaQueryConsumer"], null, function (media) {
    if (media.isMobile) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
        center: true
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
        className: "visually-hidden",
        "aria-hidden": "true"
      }, "C-Chain Network"));
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
      center: true
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
      className: "visually-hidden",
      "aria-hidden": "true"
    }, "C-Chain Network"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {
      className: "jsx-3876032393" + " " + "f-reset"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3876032393"
    }, ".signIn.jsx-3876032393{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 25px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.connected.jsx-3876032393{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}nav.jsx-3876032393{position:relative;-webkit-flex:1;-ms-flex:1;flex:1;height:64px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:800px;}@media screen and (max-width:640px){.logo.jsx-3876032393{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVpQixBQUkyQixBQTZCWCxBQVV1QixBQVlILFdBckJyQixFQXNCTSxLQVpPLEdBVFosR0E5QkssUUErQkssVUE5QkYsU0F1Q1MsRUFSVCxVQTlCQyxBQXVDUyxTQVJWLGFBOUJJLE1BK0JOLGlCQUNyQixFQS9Cb0Isa0JBQ0osU0FxQ2tDLEtBcEM3QixtQkFDUCxZQUNBLFlBQ0ksZ0JBQ0QsZUFDVSx1QkFDVyxhQStCQyxxQkE5QnBCLHdFQStCb0IsYUE5QnRCLE1BK0JDLFNBOUJLLGtEQUNKLGlCQUNDLGtCQUNELGlCQUNFLG1CQUNhLDhCQUNYLHFCQUNPLGdFQUNaLGdCQUNILGFBQ2YiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXG5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgSXBmc0FwaSBmcm9tICdpcGZzLWFwaSdcclxuaW1wb3J0IExvZ0luIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nSW4nO1xyXG5pbXBvcnQgRm9ydG1hdGljIGZyb20gJ2ZvcnRtYXRpYyc7XHJcblxyXG5pbXBvcnQgeyBNZWRpYVF1ZXJ5Q29uc3VtZXIgfSBmcm9tICcuL21lZGlhLXF1ZXJ5JztcclxuXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInO1xyXG5pbXBvcnQgeyBpc0NvbnRleHQgfSBmcm9tICd2bSc7XHJcblxyXG4vLyBJUEZTIENvbmZpZyBHbG9iYWxzXHJcbmdsb2JhbC5pcGZzID0gaXBmcztcclxuZ2xvYmFsLmlwZnNIb3N0ID0gJ2xvY2FsaG9zdCcsXHJcbmdsb2JhbC5pcGZzQVBJUG9ydCA9ICc1MDAxJyxcclxuZ2xvYmFsLmlwZnNXZWJQb3J0ID0gJzgwODAnLFxyXG5nbG9iYWwuaXBmc0RhdGFIb3N0ID0gXCJodHRwOi8vXCIgKyBpcGZzSG9zdCArICc6JyArIGlwZnNXZWJQb3J0ICsgXCIvaXBmc1wiO1xyXG5cclxubGV0IGZtID0gbmV3IEZvcnRtYXRpYygncGtfdGVzdF9GNDk3MEFGNkJCQzdGMEMxJyk7XHJcbndlYjMgPSBuZXcgV2ViMyhmbS5nZXRQcm92aWRlcigpKTtcclxuXHJcblxyXG52YXIgaXBmcyA9IElwZnNBcGkoaXBmc0hvc3QsIGlwZnNBUElQb3J0KVxyXG4gICAgICBpcGZzLnN3YXJtLnBlZXJzKGZ1bmN0aW9uKGVyciwgcmVzcG9uc2UpIHtcclxuICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJub3QgY29ubmVjdGVkIHRvIElQRlMgb24gQVdTXCIpO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBJUEZTXCIpO1xyXG4gICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgaGFuZGxlTG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gQXV0aGVudGljYXRlIHVzZXJcclxuICAgICAgICBsZXQgYWNjb3VudHMgPSBhd2FpdCBmbS51c2VyLmxvZ2luKCk7XHJcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHNldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoKHsgaXNNb2JpbGUsIHJvdXRlciB9KSA9PiB7XHJcbiAgY29uc3QgeyByb3V0ZSB9ID0gcm91dGVyO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1lZGlhUXVlcnlDb25zdW1lcj5cclxuICAgICAge21lZGlhID0+IHtcclxuICAgICAgICBpZiAobWVkaWEuaXNNb2JpbGUpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb250YWluZXIgY2VudGVyPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIEMtQ2hhaW4gTmV0d29ya1xyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Q29udGFpbmVyIGNlbnRlcj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgIEMtQ2hhaW4gTmV0d29ya1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImYtcmVzZXRcIj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbi5zaWduSW4ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY29ubmVjdGVkIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICM1MGUzYzI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuICAgICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDgwMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgbW9iaWxlICsgU1NSXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8YT48YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufSBjbGFzc05hbWU9XCJzaWduSW5cIiBpbnZlcnQgPkxvZ0luPC9idXR0b24+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHA+PGIgY2xhc3NOYW1lPVwiY29ubmVjdGVkXCI+PC9iPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e2lwZnMuaWR9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH19XHJcbiAgICA8L01lZGlhUXVlcnlDb25zdW1lcj5cclxuICApO1xyXG59KTsiXX0= */\n/*@ sourceURL=C:\\c-chain\\components\\navbar.js */"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-3876032393" + " " + "nav"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-3876032393"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      onClick: handleLogin,
      invert: true,
      className: "jsx-3876032393" + " " + "signIn"
    }, "LogIn")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "jsx-3876032393"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
      className: "jsx-3876032393" + " " + "connected"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "jsx-3876032393"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
      className: "jsx-3876032393"
    }, ipfs.id))));
  });
}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.67047263920832b56224.hot-update.js.map