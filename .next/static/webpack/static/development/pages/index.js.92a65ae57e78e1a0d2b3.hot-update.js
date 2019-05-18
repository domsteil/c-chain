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
    className: "jsx-302970208"
  }, "TripleCheck Dashboard"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-302970208"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-302970208" + " " + "main"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-302970208"
  }, "Triple", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-302970208"
  }, "Check")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-302970208"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    invert: true,
    className: "jsx-302970208" + " " + "policyButton"
  }, "New Policy")), " \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-302970208"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    invert: true,
    className: "jsx-302970208" + " " + "policyButton"
  }, "New Key")), " \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-302970208"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    invert: true,
    className: "jsx-302970208" + " " + "policyButton"
  }, "Record Data")), " \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_messages_MessageBar__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_C_ChainDashboard__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-302970208"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-302970208"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "302970208"
  }, ".main.jsx-302970208{background-color:#a82de5;}b.jsx-302970208{font-weight:normal;}h1.jsx-302970208{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:2em;font-weight:200;margin-right:30px;padding-left:5px;color:#FFF;text-align:center;}@-webkit-keyframes typing-jsx-302970208{from{width:0;}to{width:100%;}}@keyframes typing-jsx-302970208{from{width:0;}to{width:100%;}}@-webkit-keyframes blink-caret-jsx-302970208{from,to{border-color:transparent;}50%{border-color:orange;}}@keyframes blink-caret-jsx-302970208{from,to{border-color:transparent;}50%{border-color:orange;}}h2.jsx-302970208{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#000;text-align:center;}p.jsx-302970208{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:18px;margin-right:30px;padding-left:5px;color:#000;text-align:center;}img.jsx-302970208{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:80px;width:80px;font-size:12px;text-align:center;}ul.jsx-302970208{display:inline-block;color:#999;position:absolute;margin-left:-15px;}.connected.jsx-302970208{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}.after.jsx-302970208{box-sizing:inherit;}@media screen and (max-width:960px){.row.jsx-302970208{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;padding-bottom:8px;padding-top:8px;padding-left:28px;}.column.jsx-302970208{width:100%;text-align:center;max-width:350px;padding-top:8px;padding-bottom:8px;margin-bottom:28px;}.center.jsx-302970208{text-align:center;}.column2.jsx-302970208{list-style:none;display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURrQixBQUs0QixBQUdKLEFBSW1ILEFBYTVILEFBQ0MsQUFLb0IsQUFDVixBQUlpSCxBQVdBLEFBVUEsQUFTN0csQUFPaEIsQUFVUSxBQU1LLEFBU1gsQUFTTyxBQUlGLFFBdEZMLEdBQ0MsQUFnREosQUF5QlUsS0FhTCxFQUpmLENBbkdBLEFBMkVGLENBcEQwQixDQW1DUCxBQVFOLElBckViLEFBeUJvQyxJQXFFaEIsQUFhbEIsR0E3Q3dCLEFBUUgsYUF5QkgsS0FoQ00sR0FRTCxRQXlCRSxPQWhDbkIsSUFRaUIsTUFZQSxFQWFFLFdBeEJKLElBWUksSUFhckIsU0F4QkYsTUFZb0IsZ0JBQ0UsRUFoRkYsQUF3QkEsQUFXQSxBQVVGLFlBQ0QsRUE3Q0csQUF3QkMsQUFXQSxFQTZDbkIsT0FsQ21CLEtBN0NDLENBd0JHLEFBV0QsU0FXQSxNQTdDQSxHQW1DRCxDQVhDLFFBc0JwQixNQTdDbUIsRUFtQ04sRUFYTSxTQVlDLElBbkNQLElBd0JBLE9BdkJPLEdBbUNwQixDQVhvQixjQXZCcEIsSUF3QkEiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IENDaGFpbkRhc2hib2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0MtQ2hhaW5EYXNoYm9hcmQnO1xyXG4vLyBpbXBvcnQgRm9ydG1hdGljIGZyb20gJ2ZvcnRtYXRpYyc7XHJcbmltcG9ydCBJcGZzQXBpIGZyb20gJ2lwZnMtYXBpJ1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcic7XHJcbmltcG9ydCBNZXNzYWdlQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbWVzc2FnZXMvTWVzc2FnZUJhcic7XHJcblxyXG5cclxuLy8gbGV0IGZtID0gbmV3IEZvcnRtYXRpYygncGtfdGVzdF9GNDk3MEFGNkJCQzdGMEMxJyk7XHJcblxyXG5cclxuLy8gSVBGUyBDb25maWcgR2xvYmFsc1xyXG5nbG9iYWwuaXBmcyA9IGlwZnM7XHJcbmdsb2JhbC5pcGZzSG9zdCA9ICdsb2NhbGhvc3QnLFxyXG5nbG9iYWwuaXBmc0FQSVBvcnQgPSAnNTAwMScsXHJcbmdsb2JhbC5pcGZzV2ViUG9ydCA9ICc4MDgwJyxcclxuZ2xvYmFsLmlwZnNEYXRhSG9zdCA9IFwiaHR0cDovL1wiICsgaXBmc0hvc3QgKyAnOicgKyBpcGZzV2ViUG9ydCArIFwiL2lwZnNcIjtcclxuXHJcblxyXG52YXIgaXBmcyA9IElwZnNBcGkoaXBmc0hvc3QsIGlwZnNBUElQb3J0KVxyXG4gICAgICBpcGZzLnN3YXJtLnBlZXJzKGZ1bmN0aW9uKGVyciwgcmVzcG9uc2UpIHtcclxuICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJub3QgY29ubmVjdGVkIHRvIElQRlMgb24gQVdTXCIpO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBJUEZTXCIpO1xyXG4gICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAgIDxQYWdlIHRpdGxlPVwiXCI+XHJcblx0PEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5UcmlwbGVDaGVjayBEYXNoYm9hcmQ8L3RpdGxlPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIDxoMT5UcmlwbGU8Yj5DaGVjazwvYj48L2gxPlxyXG5cclxuICAgICAgPGE+PGJ1dHRvbiBjbGFzc05hbWU9XCJwb2xpY3lCdXR0b25cIiBpbnZlcnQgPk5ldyBQb2xpY3k8L2J1dHRvbj48L2E+ICZuYnNwO1xyXG4gICAgPGE+PGJ1dHRvbiBjbGFzc05hbWU9XCJwb2xpY3lCdXR0b25cIiBpbnZlcnQgPk5ldyBLZXk8L2J1dHRvbj48L2E+ICZuYnNwO1xyXG4gICAgPGE+PGJ1dHRvbiBjbGFzc05hbWU9XCJwb2xpY3lCdXR0b25cIiBpbnZlcnQgPlJlY29yZCBEYXRhPC9idXR0b24+PC9hPiAmbmJzcDtcclxuICAgICAgPE1lc3NhZ2VCYXIgLz5cclxuICAgICAgPENDaGFpbkRhc2hib2FyZCAvPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcblxyXG4ubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4MmRlNTtcclxufVxyXG4gIGIge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG5cclxuLyogVGhlIHR5cGluZyBlZmZlY3QgKi9cclxuQGtleWZyYW1lcyB0eXBpbmcge1xyXG5mcm9tIHsgd2lkdGg6IDAgfVxyXG50byB7IHdpZHRoOiAxMDAlIH1cclxufVxyXG5cclxuLyogVGhlIHR5cGV3cml0ZXIgY3Vyc29yIGVmZmVjdCAqL1xyXG5Aa2V5ZnJhbWVzIGJsaW5rLWNhcmV0IHtcclxuZnJvbSwgdG8geyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IH1cclxuNTAlIHsgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7IH1cclxufVxyXG5cclxuICAgICAgaDIge1xyXG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbm5lY3RlZCB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjNTBlM2MyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uYWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAucm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmNvbHVtbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbiAgfVxyXG5cclxuICAuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb2x1bW4yIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuYH08L3N0eWxlPlxyXG4gIDwvUGFnZT5cclxuXHJcblxyXG5cclxuICApXHJcbiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\pages\\index.js */"));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.92a65ae57e78e1a0d2b3.hot-update.js.map