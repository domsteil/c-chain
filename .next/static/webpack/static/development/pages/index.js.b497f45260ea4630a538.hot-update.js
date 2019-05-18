webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/page */ "./components/page.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_C_ChainDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/C-ChainDashboard */ "./components/C-ChainDashboard.js");
/* harmony import */ var ipfs_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ipfs-api */ "./node_modules/ipfs-api/src/index.js");
/* harmony import */ var ipfs_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ipfs_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_messages_MessageBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/messages/MessageBar */ "./components/messages/MessageBar.js");




 // import Fortmatic from 'fortmatic';




 // let fm = new Fortmatic('pk_test_F4970AF6BBC7F0C1');
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
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: ""
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2586801477"
  }, "C-Chain Dashboard"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-2586801477"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2586801477" + " " + "main"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2586801477"
  }, "TripleCheck Dashboard"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_messages_MessageBar__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_C_ChainDashboard__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2586801477"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2586801477"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2586801477"
  }, ".main.jsx-2586801477{background-color:#EFF6FF;}b.jsx-2586801477{font-weight:normal;}h1.jsx-2586801477{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:2em;font-weight:200;margin-right:30px;padding-left:5px;color:#000;text-align:center;}@-webkit-keyframes typing-jsx-2586801477{from{width:0;}to{width:100%;}}@keyframes typing-jsx-2586801477{from{width:0;}to{width:100%;}}@-webkit-keyframes blink-caret-jsx-2586801477{from,to{border-color:transparent;}50%{border-color:orange;}}@keyframes blink-caret-jsx-2586801477{from,to{border-color:transparent;}50%{border-color:orange;}}h2.jsx-2586801477{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#000;text-align:center;}p.jsx-2586801477{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:18px;margin-right:30px;padding-left:5px;color:#000;text-align:center;}img.jsx-2586801477{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:80px;width:80px;font-size:12px;text-align:center;}ul.jsx-2586801477{display:inline-block;color:#999;position:absolute;margin-left:-15px;}.connected.jsx-2586801477{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}.after.jsx-2586801477{box-sizing:inherit;}@media screen and (max-width:960px){.row.jsx-2586801477{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;padding-bottom:8px;padding-top:8px;padding-left:28px;}.column.jsx-2586801477{width:100%;text-align:center;max-width:350px;padding-top:8px;padding-bottom:8px;margin-bottom:28px;}.center.jsx-2586801477{text-align:center;}.column2.jsx-2586801477{list-style:none;display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NrQixBQUs0QixBQUdKLEFBSW1ILEFBYTVILEFBQ0MsQUFLb0IsQUFDVixBQUlpSCxBQVdBLEFBVUEsQUFTN0csQUFPaEIsQUFVUSxBQU1LLEFBU1gsQUFTTyxBQUlGLFFBdEZMLEdBQ0MsQUFnREosQUF5QlUsS0FhTCxFQUpmLENBbkdBLEFBMkVGLENBcEQwQixDQW1DUCxBQVFOLElBckViLEFBeUJvQyxJQXFFaEIsQUFhbEIsR0E3Q3dCLEFBUUgsYUF5QkgsS0FoQ00sR0FRTCxRQXlCRSxPQWhDbkIsSUFRaUIsTUFZQSxFQWFFLFdBeEJKLElBWUksSUFhckIsU0F4QkYsTUFZb0IsZ0JBQ0UsRUFoRkYsQUF3QkEsQUFXQSxBQVVGLFlBQ0QsRUE3Q0csQUF3QkMsQUFXQSxFQTZDbkIsT0FsQ21CLEtBN0NDLENBd0JHLEFBV0QsU0FXQSxNQTdDQSxHQW1DRCxDQVhDLFFBc0JwQixNQTdDbUIsRUFtQ04sRUFYTSxTQVlDLElBbkNQLElBd0JBLE9BdkJPLEdBbUNwQixDQVhvQixjQXZCcEIsSUF3QkEiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IENDaGFpbkRhc2hib2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0MtQ2hhaW5EYXNoYm9hcmQnO1xyXG4vLyBpbXBvcnQgRm9ydG1hdGljIGZyb20gJ2ZvcnRtYXRpYyc7XHJcbmltcG9ydCBJcGZzQXBpIGZyb20gJ2lwZnMtYXBpJ1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcic7XHJcbmltcG9ydCBNZXNzYWdlQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbWVzc2FnZXMvTWVzc2FnZUJhcic7XHJcblxyXG5cclxuLy8gbGV0IGZtID0gbmV3IEZvcnRtYXRpYygncGtfdGVzdF9GNDk3MEFGNkJCQzdGMEMxJyk7XHJcblxyXG5cclxuLy8gSVBGUyBDb25maWcgR2xvYmFsc1xyXG5nbG9iYWwuaXBmcyA9IGlwZnM7XHJcbmdsb2JhbC5pcGZzSG9zdCA9ICdsb2NhbGhvc3QnLFxyXG5nbG9iYWwuaXBmc0FQSVBvcnQgPSAnNTAwMScsXHJcbmdsb2JhbC5pcGZzV2ViUG9ydCA9ICc4MDgwJyxcclxuZ2xvYmFsLmlwZnNEYXRhSG9zdCA9IFwiaHR0cDovL1wiICsgaXBmc0hvc3QgKyAnOicgKyBpcGZzV2ViUG9ydCArIFwiL2lwZnNcIjtcclxuXHJcblxyXG52YXIgaXBmcyA9IElwZnNBcGkoaXBmc0hvc3QsIGlwZnNBUElQb3J0KVxyXG4gICAgICBpcGZzLnN3YXJtLnBlZXJzKGZ1bmN0aW9uKGVyciwgcmVzcG9uc2UpIHtcclxuICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJub3QgY29ubmVjdGVkIHRvIElQRlMgb24gQVdTXCIpO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBJUEZTXCIpO1xyXG4gICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAgIDxQYWdlIHRpdGxlPVwiXCI+XHJcblx0PEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5DLUNoYWluIERhc2hib2FyZDwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGgxPlRyaXBsZUNoZWNrIERhc2hib2FyZDwvaDE+XHJcbiAgICAgIDxNZXNzYWdlQmFyIC8+XHJcbiAgICAgIDxDQ2hhaW5EYXNoYm9hcmQgLz5cclxuICAgICAgPGJyLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblxyXG5cclxuLm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkY2RkY7XHJcbn1cclxuICBiIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuXHJcbi8qIFRoZSB0eXBpbmcgZWZmZWN0ICovXHJcbkBrZXlmcmFtZXMgdHlwaW5nIHtcclxuZnJvbSB7IHdpZHRoOiAwIH1cclxudG8geyB3aWR0aDogMTAwJSB9XHJcbn1cclxuXHJcbi8qIFRoZSB0eXBld3JpdGVyIGN1cnNvciBlZmZlY3QgKi9cclxuQGtleWZyYW1lcyBibGluay1jYXJldCB7XHJcbmZyb20sIHRvIHsgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB9XHJcbjUwJSB7IGJvcmRlci1jb2xvcjogb3JhbmdlOyB9XHJcbn1cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICB1bCB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb25uZWN0ZWQge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzUwZTNjMjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG4vLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgLnJvdyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICB9XHJcblxyXG4gIFxyXG4gIC5jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29sdW1uMiB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmB9PC9zdHlsZT5cclxuICA8L1BhZ2U+XHJcblxyXG5cclxuXHJcbiAgKVxyXG4iXX0= */\n/*@ sourceURL=C:\\c-chain\\pages\\index.js */"));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.b497f45260ea4630a538.hot-update.js.map