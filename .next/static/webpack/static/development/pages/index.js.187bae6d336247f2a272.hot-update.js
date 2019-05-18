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
    className: "jsx-992807270"
  }, "TripleCheck Dashboard"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-992807270"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-992807270" + " " + "main"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-992807270"
  }, "Triple", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-992807270"
  }, "Check")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-992807270"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    invert: true,
    className: "jsx-992807270" + " " + "policyButton"
  }, "New Policy")), " \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-992807270"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    invert: true,
    className: "jsx-992807270" + " " + "policyButton"
  }, "New Key")), " \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-992807270"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    invert: true,
    className: "jsx-992807270" + " " + "policyButton"
  }, "New Access")), " \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_messages_MessageBar__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_C_ChainDashboard__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-992807270"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-992807270"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "992807270"
  }, ".main.jsx-992807270{background-color:#a82de5;}b.jsx-992807270{font-weight:normal;}h1.jsx-992807270{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:2em;font-weight:200;margin-right:30px;padding-left:5px;color:#FFF;text-align:center;}@-webkit-keyframes typing-jsx-992807270{from{width:0;}to{width:100%;}}@keyframes typing-jsx-992807270{from{width:0;}to{width:100%;}}@-webkit-keyframes blink-caret-jsx-992807270{from,to{border-color:transparent;}50%{border-color:orange;}}@keyframes blink-caret-jsx-992807270{from,to{border-color:transparent;}50%{border-color:orange;}}h2.jsx-992807270{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#000;text-align:center;}.policyButton.jsx-992807270{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:20px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}p.jsx-992807270{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:18px;margin-right:30px;padding-left:5px;color:#000;text-align:center;}img.jsx-992807270{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:80px;width:80px;font-size:12px;text-align:center;}ul.jsx-992807270{display:inline-block;color:#999;position:absolute;margin-left:-15px;}.connected.jsx-992807270{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}.after.jsx-992807270{box-sizing:inherit;}@media screen and (max-width:960px){.row.jsx-992807270{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;padding-bottom:8px;padding-top:8px;padding-left:28px;}.column.jsx-992807270{width:100%;text-align:center;max-width:350px;padding-top:8px;padding-bottom:8px;margin-bottom:28px;}.center.jsx-992807270{text-align:center;}.column2.jsx-992807270{list-style:none;display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RrQixBQUs0QixBQUdKLEFBSW1ILEFBYTVILEFBQ0MsQUFLb0IsQUFDVixBQUlpSCxBQVcxRyxBQThCMEcsQUFVQSxBQVM3RyxBQU9oQixBQVVRLEFBTUssQUFTWCxBQVNPLEFBSUYsUUFwSEwsR0FDQyxBQThFSixBQXlCVSxLQWFMLEVBSmYsQ0FqSUEsQUF5R0YsQ0FsRjBCLENBaUVQLEFBUU4sR0F6RGEsQ0ExQzFCLEFBeUJvQyxJQW1HaEIsQUFhbEIsR0E3Q3dCLEFBUUgsVUF6RE0sR0FrRlQsS0FoQ00sR0FRTCxRQXlCRSxFQWxGTyxLQWtEMUIsSUFRaUIsTUFZQSxFQWFFLEtBbEZVLE1BMERkLElBWUksSUFhckIsU0F4QkYsRUExRDBCLElBc0VOLGNBckVFLEVBc0VBLEVBOUdGLEFBd0JBLEFBeUNBLEFBVUYsVUFsQ1MsRUFtQ1YsRUEzRUcsQUF3QkMsQUF5Q0EsRUE2Q25CLE9BbENtQixLQTNFQyxDQXdCRyxBQWdCTCxBQXlCSSxTQVdBLEdBbkNKLEdBeENJLEdBaUVELENBekNDLEtBaUJBLEdBbUNwQixNQTNFbUIsRUFpRU4sRUF6Q00sR0FpQkEsTUF5QkMsSUFqRVAsSUF3QkEsQ0FpQmdCLE1BeENULEdBaUVwQixDQXpDb0IsYUFpQm9CLENBeEN4QyxJQXdCQSw2QkFpQnFCLHFGQUNGLGVBQ00sa0RBQ0osaUJBQ0UsbUJBQ0Qsa0JBQ0QsaUJBQ0UsbUJBQ2EsOEJBQ1gscUJBQ08sZ0VBQ1osZ0JBQ0gsYUFDZiIsImZpbGUiOiJDOlxcYy1jaGFpblxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgQ0NoYWluRGFzaGJvYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQy1DaGFpbkRhc2hib2FyZCc7XHJcbi8vIGltcG9ydCBGb3J0bWF0aWMgZnJvbSAnZm9ydG1hdGljJztcclxuaW1wb3J0IElwZnNBcGkgZnJvbSAnaXBmcy1hcGknXHJcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJztcclxuaW1wb3J0IE1lc3NhZ2VCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9tZXNzYWdlcy9NZXNzYWdlQmFyJztcclxuXHJcblxyXG4vLyBsZXQgZm0gPSBuZXcgRm9ydG1hdGljKCdwa190ZXN0X0Y0OTcwQUY2QkJDN0YwQzEnKTtcclxuXHJcblxyXG4vLyBJUEZTIENvbmZpZyBHbG9iYWxzXHJcbmdsb2JhbC5pcGZzID0gaXBmcztcclxuZ2xvYmFsLmlwZnNIb3N0ID0gJ2xvY2FsaG9zdCcsXHJcbmdsb2JhbC5pcGZzQVBJUG9ydCA9ICc1MDAxJyxcclxuZ2xvYmFsLmlwZnNXZWJQb3J0ID0gJzgwODAnLFxyXG5nbG9iYWwuaXBmc0RhdGFIb3N0ID0gXCJodHRwOi8vXCIgKyBpcGZzSG9zdCArICc6JyArIGlwZnNXZWJQb3J0ICsgXCIvaXBmc1wiO1xyXG5cclxuXHJcbnZhciBpcGZzID0gSXBmc0FwaShpcGZzSG9zdCwgaXBmc0FQSVBvcnQpXHJcbiAgICAgIGlwZnMuc3dhcm0ucGVlcnMoZnVuY3Rpb24oZXJyLCByZXNwb25zZSkge1xyXG4gICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBjb25uZWN0ZWQgdG8gSVBGUyBvbiBBV1NcIik7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIElQRlNcIik7XHJcbiAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gICAgPFBhZ2UgdGl0bGU9XCJcIj5cclxuXHQ8SGVhZD5cclxuICAgICAgPHRpdGxlPlRyaXBsZUNoZWNrIERhc2hib2FyZDwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGgxPlRyaXBsZTxiPkNoZWNrPC9iPjwvaDE+XHJcbiAgICAgIDxhPjxidXR0b24gY2xhc3NOYW1lPVwicG9saWN5QnV0dG9uXCIgaW52ZXJ0ID5OZXcgUG9saWN5PC9idXR0b24+PC9hPiAmbmJzcDtcclxuICAgIDxhPjxidXR0b24gY2xhc3NOYW1lPVwicG9saWN5QnV0dG9uXCIgaW52ZXJ0ID5OZXcgS2V5PC9idXR0b24+PC9hPiAmbmJzcDtcclxuICAgIDxhPjxidXR0b24gY2xhc3NOYW1lPVwicG9saWN5QnV0dG9uXCIgaW52ZXJ0ID5OZXcgQWNjZXNzPC9idXR0b24+PC9hPiAmbmJzcDtcclxuICAgICAgPE1lc3NhZ2VCYXIgLz5cclxuICAgICAgPENDaGFpbkRhc2hib2FyZCAvPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcblxyXG4ubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4MmRlNTtcclxufVxyXG4gIGIge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG5cclxuLyogVGhlIHR5cGluZyBlZmZlY3QgKi9cclxuQGtleWZyYW1lcyB0eXBpbmcge1xyXG5mcm9tIHsgd2lkdGg6IDAgfVxyXG50byB7IHdpZHRoOiAxMDAlIH1cclxufVxyXG5cclxuLyogVGhlIHR5cGV3cml0ZXIgY3Vyc29yIGVmZmVjdCAqL1xyXG5Aa2V5ZnJhbWVzIGJsaW5rLWNhcmV0IHtcclxuZnJvbSwgdG8geyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IH1cclxuNTAlIHsgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7IH1cclxufVxyXG5cclxuICAgICAgaDIge1xyXG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvbGljeUJ1dHRvbiB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICB1bCB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb25uZWN0ZWQge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzUwZTNjMjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG4vLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgLnJvdyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICB9XHJcblxyXG4gIFxyXG4gIC5jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29sdW1uMiB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmB9PC9zdHlsZT5cclxuICA8L1BhZ2U+XHJcblxyXG5cclxuXHJcbiAgKVxyXG4iXX0= */\n/*@ sourceURL=C:\\c-chain\\pages\\index.js */"));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.187bae6d336247f2a272.hot-update.js.map