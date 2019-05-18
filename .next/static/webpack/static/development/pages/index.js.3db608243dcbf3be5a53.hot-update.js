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
  }, "Record Data")), " \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_messages_MessageBar__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_C_ChainDashboard__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-992807270"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-992807270"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "992807270"
  }, ".main.jsx-992807270{background-color:#a82de5;}b.jsx-992807270{font-weight:normal;}h1.jsx-992807270{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:2em;font-weight:200;margin-right:30px;padding-left:5px;color:#FFF;text-align:center;}@-webkit-keyframes typing-jsx-992807270{from{width:0;}to{width:100%;}}@keyframes typing-jsx-992807270{from{width:0;}to{width:100%;}}@-webkit-keyframes blink-caret-jsx-992807270{from,to{border-color:transparent;}50%{border-color:orange;}}@keyframes blink-caret-jsx-992807270{from,to{border-color:transparent;}50%{border-color:orange;}}h2.jsx-992807270{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#000;text-align:center;}.policyButton.jsx-992807270{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:20px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}p.jsx-992807270{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:18px;margin-right:30px;padding-left:5px;color:#000;text-align:center;}img.jsx-992807270{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:80px;width:80px;font-size:12px;text-align:center;}ul.jsx-992807270{display:inline-block;color:#999;position:absolute;margin-left:-15px;}.connected.jsx-992807270{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}.after.jsx-992807270{box-sizing:inherit;}@media screen and (max-width:960px){.row.jsx-992807270{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;padding-bottom:8px;padding-top:8px;padding-left:28px;}.column.jsx-992807270{width:100%;text-align:center;max-width:350px;padding-top:8px;padding-bottom:8px;margin-bottom:28px;}.center.jsx-992807270{text-align:center;}.column2.jsx-992807270{list-style:none;display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURrQixBQUs0QixBQUdKLEFBSW1ILEFBYTVILEFBQ0MsQUFLb0IsQUFDVixBQUlpSCxBQVcxRyxBQThCMEcsQUFVQSxBQVM3RyxBQU9oQixBQVVRLEFBTUssQUFTWCxBQVNPLEFBSUYsUUFwSEwsR0FDQyxBQThFSixBQXlCVSxLQWFMLEVBSmYsQ0FqSUEsQUF5R0YsQ0FsRjBCLENBaUVQLEFBUU4sR0F6RGEsQ0ExQzFCLEFBeUJvQyxJQW1HaEIsQUFhbEIsR0E3Q3dCLEFBUUgsVUF6RE0sR0FrRlQsS0FoQ00sR0FRTCxRQXlCRSxFQWxGTyxLQWtEMUIsSUFRaUIsTUFZQSxFQWFFLEtBbEZVLE1BMERkLElBWUksSUFhckIsU0F4QkYsRUExRDBCLElBc0VOLGNBckVFLEVBc0VBLEVBOUdGLEFBd0JBLEFBeUNBLEFBVUYsVUFsQ1MsRUFtQ1YsRUEzRUcsQUF3QkMsQUF5Q0EsRUE2Q25CLE9BbENtQixLQTNFQyxDQXdCRyxBQWdCTCxBQXlCSSxTQVdBLEdBbkNKLEdBeENJLEdBaUVELENBekNDLEtBaUJBLEdBbUNwQixNQTNFbUIsRUFpRU4sRUF6Q00sR0FpQkEsTUF5QkMsSUFqRVAsSUF3QkEsQ0FpQmdCLE1BeENULEdBaUVwQixDQXpDb0IsYUFpQm9CLENBeEN4QyxJQXdCQSw2QkFpQnFCLHFGQUNGLGVBQ00sa0RBQ0osaUJBQ0UsbUJBQ0Qsa0JBQ0QsaUJBQ0UsbUJBQ2EsOEJBQ1gscUJBQ08sZ0VBQ1osZ0JBQ0gsYUFDZiIsImZpbGUiOiJDOlxcYy1jaGFpblxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgQ0NoYWluRGFzaGJvYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQy1DaGFpbkRhc2hib2FyZCc7XHJcbi8vIGltcG9ydCBGb3J0bWF0aWMgZnJvbSAnZm9ydG1hdGljJztcclxuaW1wb3J0IElwZnNBcGkgZnJvbSAnaXBmcy1hcGknXHJcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJztcclxuaW1wb3J0IE1lc3NhZ2VCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9tZXNzYWdlcy9NZXNzYWdlQmFyJztcclxuXHJcblxyXG4vLyBsZXQgZm0gPSBuZXcgRm9ydG1hdGljKCdwa190ZXN0X0Y0OTcwQUY2QkJDN0YwQzEnKTtcclxuXHJcblxyXG4vLyBJUEZTIENvbmZpZyBHbG9iYWxzXHJcbmdsb2JhbC5pcGZzID0gaXBmcztcclxuZ2xvYmFsLmlwZnNIb3N0ID0gJ2xvY2FsaG9zdCcsXHJcbmdsb2JhbC5pcGZzQVBJUG9ydCA9ICc1MDAxJyxcclxuZ2xvYmFsLmlwZnNXZWJQb3J0ID0gJzgwODAnLFxyXG5nbG9iYWwuaXBmc0RhdGFIb3N0ID0gXCJodHRwOi8vXCIgKyBpcGZzSG9zdCArICc6JyArIGlwZnNXZWJQb3J0ICsgXCIvaXBmc1wiO1xyXG5cclxuXHJcbnZhciBpcGZzID0gSXBmc0FwaShpcGZzSG9zdCwgaXBmc0FQSVBvcnQpXHJcbiAgICAgIGlwZnMuc3dhcm0ucGVlcnMoZnVuY3Rpb24oZXJyLCByZXNwb25zZSkge1xyXG4gICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBjb25uZWN0ZWQgdG8gSVBGUyBvbiBBV1NcIik7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIElQRlNcIik7XHJcbiAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gICAgPFBhZ2UgdGl0bGU9XCJcIj5cclxuXHQ8SGVhZD5cclxuICAgICAgPHRpdGxlPlRyaXBsZUNoZWNrIERhc2hib2FyZDwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGgxPlRyaXBsZTxiPkNoZWNrPC9iPjwvaDE+XHJcblxyXG4gICAgICA8YT48YnV0dG9uIGNsYXNzTmFtZT1cInBvbGljeUJ1dHRvblwiIGludmVydCA+TmV3IFBvbGljeTwvYnV0dG9uPjwvYT4gJm5ic3A7XHJcbiAgICA8YT48YnV0dG9uIGNsYXNzTmFtZT1cInBvbGljeUJ1dHRvblwiIGludmVydCA+TmV3IEtleTwvYnV0dG9uPjwvYT4gJm5ic3A7XHJcbiAgICA8YT48YnV0dG9uIGNsYXNzTmFtZT1cInBvbGljeUJ1dHRvblwiIGludmVydCA+UmVjb3JkIERhdGE8L2J1dHRvbj48L2E+ICZuYnNwO1xyXG4gICAgICA8TWVzc2FnZUJhciAvPlxyXG4gICAgICA8Q0NoYWluRGFzaGJvYXJkIC8+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuXHJcbi5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTgyZGU1O1xyXG59XHJcbiAgYiB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcblxyXG4vKiBUaGUgdHlwaW5nIGVmZmVjdCAqL1xyXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XHJcbmZyb20geyB3aWR0aDogMCB9XHJcbnRvIHsgd2lkdGg6IDEwMCUgfVxyXG59XHJcblxyXG4vKiBUaGUgdHlwZXdyaXRlciBjdXJzb3IgZWZmZWN0ICovXHJcbkBrZXlmcmFtZXMgYmxpbmstY2FyZXQge1xyXG5mcm9tLCB0byB7IGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgfVxyXG41MCUgeyBib3JkZXItY29sb3I6IG9yYW5nZTsgfVxyXG59XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucG9saWN5QnV0dG9uIHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbm5lY3RlZCB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjNTBlM2MyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uYWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAucm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmNvbHVtbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbiAgfVxyXG5cclxuICAuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb2x1bW4yIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuYH08L3N0eWxlPlxyXG4gIDwvUGFnZT5cclxuXHJcblxyXG5cclxuICApXHJcbiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\pages\\index.js */"));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.3db608243dcbf3be5a53.hot-update.js.map