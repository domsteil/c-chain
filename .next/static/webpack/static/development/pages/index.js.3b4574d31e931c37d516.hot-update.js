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
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _media_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./media-query */ "./components/media-query.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./container */ "./components/container.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vm */ "./node_modules/vm-browserify/index.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vm__WEBPACK_IMPORTED_MODULE_13__);













 // IPFS Config Globals

global.ipfs = ipfs;
global.ipfsHost = 'localhost', global.ipfsAPIPort = '5001', global.ipfsWebPort = '8080', global.ipfsDataHost = "http://" + ipfsHost + ':' + ipfsWebPort + "/ipfs";
var fm = new fortmatic__WEBPACK_IMPORTED_MODULE_9___default.a('pk_test_F4970AF6BBC7F0C1');

if (true) {
  web3 = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(fm.getProvider());
}

var ipfs = ipfs_api__WEBPACK_IMPORTED_MODULE_7___default()(ipfsHost, ipfsAPIPort);
ipfs.swarm.peers(function (err, response) {
  if (err) {
    console.log("not connected to IPFS on AWS");
  } else {
    console.log("Connected to IPFS"); //console.log(response);
  }
});

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
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_media_query__WEBPACK_IMPORTED_MODULE_11__["MediaQueryConsumer"], null, function (media) {
    if (media.isMobile) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        center: true
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
        className: "visually-hidden",
        "aria-hidden": "true"
      }, "C-Chain Network"));
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_12__["default"], {
      center: true
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
      className: "visually-hidden",
      "aria-hidden": "true"
    }, "C-Chain Network"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {
      className: "jsx-3876032393" + " " + "f-reset"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3876032393"
    }, ".signIn.jsx-3876032393{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 25px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.connected.jsx-3876032393{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}nav.jsx-3876032393{position:relative;-webkit-flex:1;-ms-flex:1;flex:1;height:64px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:800px;}@media screen and (max-width:640px){.logo.jsx-3876032393{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVpQixBQUkyQixBQTZCWCxBQVV1QixBQVlILFdBckJyQixFQXNCTSxLQVpPLEdBVFosR0E5QkssUUErQkssVUE5QkYsU0F1Q1MsRUFSVCxVQTlCQyxBQXVDUyxTQVJWLGFBOUJJLE1BK0JOLGlCQUNyQixFQS9Cb0Isa0JBQ0osU0FxQ2tDLEtBcEM3QixtQkFDUCxZQUNBLFlBQ0ksZ0JBQ0QsZUFDVSx1QkFDVyxhQStCQyxxQkE5QnBCLHdFQStCb0IsYUE5QnRCLE1BK0JDLFNBOUJLLGtEQUNKLGlCQUNDLGtCQUNELGlCQUNFLG1CQUNhLDhCQUNYLHFCQUNPLGdFQUNaLGdCQUNILGFBQ2YiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXG5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgSXBmc0FwaSBmcm9tICdpcGZzLWFwaSdcclxuaW1wb3J0IExvZ0luIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nSW4nO1xyXG5pbXBvcnQgRm9ydG1hdGljIGZyb20gJ2ZvcnRtYXRpYyc7XHJcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5pbXBvcnQgeyBNZWRpYVF1ZXJ5Q29uc3VtZXIgfSBmcm9tICcuL21lZGlhLXF1ZXJ5JztcclxuXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInO1xyXG5pbXBvcnQgeyBpc0NvbnRleHQgfSBmcm9tICd2bSc7XHJcblxyXG4vLyBJUEZTIENvbmZpZyBHbG9iYWxzXHJcbmdsb2JhbC5pcGZzID0gaXBmcztcclxuZ2xvYmFsLmlwZnNIb3N0ID0gJ2xvY2FsaG9zdCcsXHJcbmdsb2JhbC5pcGZzQVBJUG9ydCA9ICc1MDAxJyxcclxuZ2xvYmFsLmlwZnNXZWJQb3J0ID0gJzgwODAnLFxyXG5nbG9iYWwuaXBmc0RhdGFIb3N0ID0gXCJodHRwOi8vXCIgKyBpcGZzSG9zdCArICc6JyArIGlwZnNXZWJQb3J0ICsgXCIvaXBmc1wiO1xyXG5cclxubGV0IGZtID0gbmV3IEZvcnRtYXRpYygncGtfdGVzdF9GNDk3MEFGNkJCQzdGMEMxJyk7XHJcbmlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICB3ZWIzID0gbmV3IFdlYjMoZm0uZ2V0UHJvdmlkZXIoKSk7XHJcbn1cclxuXHJcblxyXG52YXIgaXBmcyA9IElwZnNBcGkoaXBmc0hvc3QsIGlwZnNBUElQb3J0KVxyXG4gICAgICBpcGZzLnN3YXJtLnBlZXJzKGZ1bmN0aW9uKGVyciwgcmVzcG9uc2UpIHtcclxuICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJub3QgY29ubmVjdGVkIHRvIElQRlMgb24gQVdTXCIpO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBJUEZTXCIpO1xyXG4gICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgc2V0VXNlckluZm8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgd2ViMy5ldGguZ2V0QWNjb3VudHMoKGVyciwgYWNjb3VudHMpID0+IHtcclxuICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgICAgICAgIGxldCBhZGRyZXNzID0gYWNjb3VudHNbMF07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhhZGRyZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIEF1dGhlbnRpY2F0ZSB1c2VyXHJcbiAgICAgICAgbGV0IGFjY291bnRzID0gYXdhaXQgZm0udXNlci5sb2dpbigpO1xyXG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBzZXRVc2VySW5mbygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKCh7IGlzTW9iaWxlLCByb3V0ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IHsgcm91dGUgfSA9IHJvdXRlcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNZWRpYVF1ZXJ5Q29uc3VtZXI+XHJcbiAgICAgIHttZWRpYSA9PiB7XHJcbiAgICAgICAgaWYgKG1lZGlhLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGNlbnRlcj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICBDLUNoYWluIE5ldHdvcmtcclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPENvbnRhaW5lciBjZW50ZXI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICBDLUNoYWluIE5ldHdvcmtcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmLXJlc2V0XCI+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcblxyXG4uc2lnbkluIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNvbm5lY3RlZCB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTBlM2MyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbiAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4MDBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIG1vYmlsZSArIFNTUlxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluaz5cclxuICAgICAgICAgICAgICAgICAgPGE+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0gY2xhc3NOYW1lPVwic2lnbkluXCIgaW52ZXJ0ID5Mb2dJbjwvYnV0dG9uPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxwPjxiIGNsYXNzTmFtZT1cImNvbm5lY3RlZFwiPjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPntpcGZzLmlkfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgICB9fVxyXG4gICAgPC9NZWRpYVF1ZXJ5Q29uc3VtZXI+XHJcbiAgKTtcclxufSk7Il19 */\n/*@ sourceURL=C:\\c-chain\\components\\navbar.js */"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
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
//# sourceMappingURL=index.js.3b4574d31e931c37d516.hot-update.js.map