webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ipfs_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ipfs-api */ "./node_modules/ipfs-api/src/index.js");
/* harmony import */ var ipfs_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ipfs_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_LogIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LogIn */ "./components/LogIn/index.js");
/* harmony import */ var _media_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media-query */ "./components/media-query.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./container */ "./components/container.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vm */ "./node_modules/vm-browserify/index.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vm__WEBPACK_IMPORTED_MODULE_9__);









 // IPFS Config Globals

global.ipfs = ipfs;
global.ipfsHost = 'localhost', global.ipfsAPIPort = '5001', global.ipfsWebPort = '8080', global.ipfsDataHost = "http://" + ipfsHost + ':' + ipfsWebPort + "/ipfs";
var ipfs = ipfs_api__WEBPACK_IMPORTED_MODULE_5___default()(ipfsHost, ipfsAPIPort);
ipfs.swarm.peers(function (err, response) {
  if (err) {
    console.log("not connected to IPFS on AWS");
  } else {
    console.log("Connected to IPFS"); //console.log(response);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (_ref) {
  var isMobile = _ref.isMobile,
      router = _ref.router;
  var route = router.route;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_media_query__WEBPACK_IMPORTED_MODULE_7__["MediaQueryConsumer"], null, function (media) {
    if (media.isMobile) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_8__["default"], {
        center: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "visually-hidden",
        "aria-hidden": "true"
      }, "C-Chain Network"));
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_8__["default"], {
      center: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "visually-hidden",
      "aria-hidden": "true"
    }, "C-Chain Network"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "jsx-3876032393" + " " + "f-reset"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3876032393"
    }, ".signIn.jsx-3876032393{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 25px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.connected.jsx-3876032393{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}nav.jsx-3876032393{position:relative;-webkit-flex:1;-ms-flex:1;flex:1;height:64px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:800px;}@media screen and (max-width:640px){.logo.jsx-3876032393{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURpQixBQUkyQixBQTZCWCxBQVV1QixBQVlILFdBckJyQixFQXNCTSxLQVpPLEdBVFosR0E5QkssUUErQkssVUE5QkYsU0F1Q1MsRUFSVCxVQTlCQyxBQXVDUyxTQVJWLGFBOUJJLE1BK0JOLGlCQUNyQixFQS9Cb0Isa0JBQ0osU0FxQ2tDLEtBcEM3QixtQkFDUCxZQUNBLFlBQ0ksZ0JBQ0QsZUFDVSx1QkFDVyxhQStCQyxxQkE5QnBCLHdFQStCb0IsYUE5QnRCLE1BK0JDLFNBOUJLLGtEQUNKLGlCQUNDLGtCQUNELGlCQUNFLG1CQUNhLDhCQUNYLHFCQUNPLGdFQUNaLGdCQUNILGFBQ2YiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXG5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgSXBmc0FwaSBmcm9tICdpcGZzLWFwaSdcclxuaW1wb3J0IExvZ0luIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nSW4nO1xyXG5cclxuaW1wb3J0IHsgTWVkaWFRdWVyeUNvbnN1bWVyIH0gZnJvbSAnLi9tZWRpYS1xdWVyeSc7XHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJztcclxuaW1wb3J0IHsgaXNDb250ZXh0IH0gZnJvbSAndm0nO1xyXG5cclxuLy8gSVBGUyBDb25maWcgR2xvYmFsc1xyXG5nbG9iYWwuaXBmcyA9IGlwZnM7XHJcbmdsb2JhbC5pcGZzSG9zdCA9ICdsb2NhbGhvc3QnLFxyXG5nbG9iYWwuaXBmc0FQSVBvcnQgPSAnNTAwMScsXHJcbmdsb2JhbC5pcGZzV2ViUG9ydCA9ICc4MDgwJyxcclxuZ2xvYmFsLmlwZnNEYXRhSG9zdCA9IFwiaHR0cDovL1wiICsgaXBmc0hvc3QgKyAnOicgKyBpcGZzV2ViUG9ydCArIFwiL2lwZnNcIjtcclxuXHJcblxyXG52YXIgaXBmcyA9IElwZnNBcGkoaXBmc0hvc3QsIGlwZnNBUElQb3J0KVxyXG4gICAgICBpcGZzLnN3YXJtLnBlZXJzKGZ1bmN0aW9uKGVyciwgcmVzcG9uc2UpIHtcclxuICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJub3QgY29ubmVjdGVkIHRvIElQRlMgb24gQVdTXCIpO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBJUEZTXCIpO1xyXG4gICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcigoeyBpc01vYmlsZSwgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCB7IHJvdXRlIH0gPSByb3V0ZXI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVkaWFRdWVyeUNvbnN1bWVyPlxyXG4gICAgICB7bWVkaWEgPT4ge1xyXG4gICAgICAgIGlmIChtZWRpYS5pc01vYmlsZSkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciBjZW50ZXI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgQy1DaGFpbiBOZXR3b3JrXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxDb250YWluZXIgY2VudGVyPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgQy1DaGFpbiBOZXR3b3JrXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZi1yZXNldFwiPlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuLnNpZ25JbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAwcHggMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb25uZWN0ZWQge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzUwZTNjMjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4gICAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogODAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciBtb2JpbGUgKyBTU1JcclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxhPjxidXR0b24gb25DbGljayBjbGFzc05hbWU9XCJzaWduSW5cIiBpbnZlcnQgPkxvZ0luPC9idXR0b24+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHA+PGIgY2xhc3NOYW1lPVwiY29ubmVjdGVkXCI+PC9iPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e2lwZnMuaWR9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH19XHJcbiAgICA8L01lZGlhUXVlcnlDb25zdW1lcj5cclxuICApO1xyXG59KTsiXX0= */\n/*@ sourceURL=C:\\c-chain\\components\\navbar.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3876032393" + " " + "nav"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-3876032393"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: true,
      invert: true,
      className: "jsx-3876032393" + " " + "signIn"
    }, "LogIn")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3876032393"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
      className: "jsx-3876032393" + " " + "connected"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3876032393"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-3876032393"
    }, ipfs.id))));
  });
}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.7420ebc03a76e9b3fc0e.hot-update.js.map