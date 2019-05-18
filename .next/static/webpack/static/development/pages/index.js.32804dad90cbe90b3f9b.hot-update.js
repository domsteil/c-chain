webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/messages/MessageBar.js":
/*!*******************************************!*\
  !*** ./components/messages/MessageBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zlib */ "./node_modules/browserify-zlib/lib/index.js");
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zlib__WEBPACK_IMPORTED_MODULE_4__);





var state;
var captureFile;

function useAsyncEndpoint(fn) {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    data: null,
    pending: zlib__WEBPACK_IMPORTED_MODULE_4__["deflateSync"],
    completed: false,
    error: false
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      res = _useState2[0],
      setRes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      req = _useState4[0],
      setReq = _useState4[1];

  state = {
    ipfsHash: null,
    buffer: '',
    ethAddress: '',
    transactionHash: '',
    txReceipt: ''
  }; //Take file input from user

  captureFile = function captureFile(event) {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    var reader = new window.FileReader();
    reader.readAsArrayBuffer(file);

    reader.onloadend = function () {
      return _this.convertToBuffer(reader);
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!req) return;
    setRes({
      data: null,
      pending: true,
      completed: false,
      error: false
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default()(req).then(function (res) {
      return setRes({
        data: res.data,
        pending: false,
        error: false,
        complete: true
      });
    }).catch(function () {
      return setRes({
        data: null,
        pending: false,
        error: true,
        complete: true
      });
    });
  }, [req]);
  return [res, function () {
    return setReq(fn.apply(void 0, arguments));
  }];
}

var verifyData;
var publisherAPI = "https://dapps.ngrok.io:3000/api/";

function postPublisherEndpoint() {
  return useAsyncEndpoint(function (data) {
    return {
      url: publisherAPI,
      method: "POST",
      data: data
    };
  });
}

function MessageBar(props) {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      message = _useState6[0],
      setMessage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      to = _useState8[0],
      setTo = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      who = _useState10[0],
      setWho = _useState10[1];

  var _postPublisherEndpoin = postPublisherEndpoint(),
      _postPublisherEndpoin2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_postPublisherEndpoin, 2),
      newMessage = _postPublisherEndpoin2[0],
      postNewMessage = _postPublisherEndpoin2[1];

  var handleKeyPress = function handleKeyPress(event) {
    if (event.key == 'Enter' || event.keyCode == 13) {
      sendChat();
    }
  };

  function sendChat() {
    postNewMessage({
      to: to,
      message: message
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-3901075284"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3901075284" + " " + "row"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3901075284" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    id: "ipfs-hash-form",
    className: "jsx-3901075284"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "file",
    className: "jsx-3901075284" + " " + "ipfsInput"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "submit",
    className: "jsx-3901075284" + " " + "policyButton"
  }, "Upload")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-3901075284"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    onKeyPress: handleKeyPress,
    className: "jsx-3901075284" + " " + "message-box"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3901075284"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: verifyData,
    invert: true,
    className: "jsx-3901075284" + " " + "policyButton"
  }, "Verify"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/verification.png",
    height: "28",
    width: "28",
    align: "middle",
    alt: "",
    className: "jsx-3901075284" + " " + "center"
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3901075284"
  }, ".column.jsx-3901075284{text-align:center;border-width:1px;list-style:none;padding-bottom:8px;padding-top:8px;margin-right:28px;}.center.jsx-3901075284{margin-left:3px;margin-bottom:10px;}.to.jsx-3901075284{width:260px;padding-bottom:8px;padding-top:8px;border:1px solid #d0d4d9;border-radius:.375rem;-webkit-box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);line-height:20px;min-height:auto;padding-left:0;padding-right:0;}.policyButton.jsx-3901075284{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.ipfsInput.jsx-3901075284{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:300px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.ipfsInput.jsx-3901075284::before{content:'IPFS SOME FILES';display:inline-block;background:linear-gradient(top,#f9f9f9,#e3e3e3);border:1px solid #999;border-radius:3px;padding:5px 8px;outline:none;white-space:nowrap;-webkit-user-select:none;cursor:pointer;text-shadow:1px 1px #fff;font-weight:700;font-size:10pt;}.custom-file-input.jsx-3901075284:hover.jsx-3901075284::before{border-color:black;}.custom-file-input.jsx-3901075284:active.jsx-3901075284::before{background:-webkit-linear-gradient(top,#e3e3e3,#f9f9f9);}.message-box.jsx-3901075284{padding-bottom:28px;width:800px;overflow:auto;margin:0;min-height:42px;height:38px;max-height:180px;border:2px solid rgba(134,134,134,.7);border-radius:.375rem;outline:0;background:#fff;resize:none;box-shadow:none;color:#1d1c1d;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;padding:9px 30px 10px 50px;\"      }      .login {        color: #FFF;      }      .account {        font-size: 13px;        line-height: 1.91667;        font-weight: 400;        color: #3d464d;        border: 1px solid #bdc4c9;        padding: 3.5px 7px;        border-radius: 4px;        margin-top: 28px;        margin-left: 8px;      }      .row {        flex-direction: column;        margin: -1.5rem 0;        text-align: center;      }      // CSS only media query for tablet      @media screen and (max-width: 960px) {        .row {          flex-direction: column;          margin: -1.5rem 0;        }        .column {          width: 10%;          padding: 1.5rem 0;          text-align: center;          max-width: 100px;        }        .message-box {          padding-bottom: 28px;          width: 100px;          overflow: auto;          margin: 0;           min-height: 42px;           height: 38px;           max-height: 180px;           border: 2px solid rgba(134,134,134,.7);          border-radius: .375rem;          outline: 0;          background: #FFFFFF;          resize: none;          box-shadow: none;          color: #1d1c1d;          -webkit-user-select: auto;          -moz-user-select: auto;          -ms-user-select: auto;          user-select: auto;          padding: 9px 30px 10px 50px;          display: none;        }              };}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxtZXNzYWdlc1xcTWVzc2FnZUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSG9CLEFBSTJCLEFBU0YsQUFLSixBQWNZLEFBZ0NBLEFBK0JFLEFBZVAsQUFHdUMsQUFLdEMsWUFuR0QsSUFMQSxFQVRGLENBMEduQixDQVFlLElBdEZLLEFBZ0NBLEVBK0JHLEtBNUVMLENBb0dGLEdBbEhFLEFBU2xCLE9BbUJ1QixBQWdDQSxJQXVEWixDQXBHZ0IsQUE0RXlCLElBMUYvQixJQW1ISCxDQVJsQixPQS9Fd0IsQUFnQ0EsT0EzRE4sQ0FtSEosQ0FyR1UsV0FzR0wsRUF4RlEsQUFnQ0EsQ0EzRFAsUUFjMEMsQ0EyRXRDLEtBMkJnQixJQW5IeEMsTUEyQm9CLEFBZ0NBLE9BOEJBLFdBN0RKLEFBZ0NBLE9BOEJFLEdBMEJNLElBdkZILEFBZ0NBLFNBOEJOLEdBN0V1QyxNQXVHMUMsQ0F2RkUsQUFnQ0EsR0E4Qk8sTUEwQkgsR0F2RkosQUFnQ0EsVUE4QmEsRUE3RFQsQUFnQ0EsQ0F1REosWUFDSSxHQXZGQSxBQWdDQSxLQWxEQyxFQStFRixNQTJCRCxHQXZGQyxBQWdDQSxNQWxEQyxBQStFUyxLQTJCQSxJQXZGQSxBQWdDZCxPQWxESSxJQW1ERSxLQTRCRCxLQTJCTSxDQXpHTixDQWtCb0IsU0E2RHJCLE1BOUVqQixLQXlHdUIsSUExQnZCLFVBN0RtQixPQXdGQSxnQ0F4REYsZUFDTSwrQkFoQ04sT0F3RlksUUF2Rk4sSUFnQ0osZUFzSHJCLEVBckhzQixrQkFDQSxXQWpDRCxPQWtDQSxVQWpDQyxPQWtDQyxXQWpDRCxRQWtDYyxVQWpDZixpQkFDRSxHQWlDRSxnQkFoQ1csS0FpQ0oseUJBaENQLHFCQUNPLGtCQWdDWixnQkFDSCxhQUVmLGlCQWxDa0IsZ0JBQ0gsYUFDZixvakNBMklEIiwiZmlsZSI6IkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxtZXNzYWdlc1xcTWVzc2FnZUJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgZGVmbGF0ZVN5bmMgfSBmcm9tICd6bGliJztcclxuXHJcbnZhciBzdGF0ZTtcclxudmFyIGNhcHR1cmVGaWxlO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHVzZUFzeW5jRW5kcG9pbnQoZm4pIHtcclxuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIHBlbmRpbmc6IGRlZmxhdGVTeW5jLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIGVycm9yOiBmYWxzZSxcclxuICB9KTtcclxuICBjb25zdCBbcmVxLCBzZXRSZXFdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpcGZzSGFzaDpudWxsLFxyXG4gICAgYnVmZmVyOicnLFxyXG4gICAgZXRoQWRkcmVzczonJyxcclxuICAgIHRyYW5zYWN0aW9uSGFzaDonJyxcclxuICAgIHR4UmVjZWlwdDogJydcclxuICB9O1xyXG5cclxuLy9UYWtlIGZpbGUgaW5wdXQgZnJvbSB1c2VyXHJcbiBjYXB0dXJlRmlsZSA9KGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxyXG4gICAgICBsZXQgcmVhZGVyID0gbmV3IHdpbmRvdy5GaWxlUmVhZGVyKClcclxuICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpXHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB0aGlzLmNvbnZlcnRUb0J1ZmZlcihyZWFkZXIpXHJcbiAgICB9O1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJlcSkgcmV0dXJuO1xyXG4gICAgc2V0UmVzKHtcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGVuZGluZzogdHJ1ZSxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgYXhpb3MocmVxKVxyXG4gIC50aGVuKHJlcyA9PlxyXG4gICAgc2V0UmVzKHtcclxuICAgICAgZGF0YTogcmVzLmRhdGEsXHJcbiAgICAgIHBlbmRpbmc6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgIGNvbXBsZXRlOiB0cnVlXHJcbiAgICB9KSxcclxuICApXHJcbiAgLmNhdGNoKCgpID0+XHJcbiAgICBzZXRSZXMoe1xyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwZW5kaW5nOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgIGNvbXBsZXRlOiB0cnVlXHJcbiAgICB9KSxcclxuICApO1xyXG59LCBbcmVxXVxyXG4pO1xyXG5yZXR1cm4gW3JlcywgKC4uLmFyZ3MpID0+IHNldFJlcShmbiguLi5hcmdzKSldO1xyXG5cclxufVxyXG5cclxubGV0IHZlcmlmeURhdGE7XHJcbmNvbnN0IHB1Ymxpc2hlckFQSSA9IFwiaHR0cHM6Ly9kYXBwcy5uZ3Jvay5pbzozMDAwL2FwaS9cIjtcclxuXHJcbmZ1bmN0aW9uIHBvc3RQdWJsaXNoZXJFbmRwb2ludCgpIHtcclxuICBcclxuICByZXR1cm4gdXNlQXN5bmNFbmRwb2ludChkYXRhID0+ICh7XHJcbiAgdXJsOiBwdWJsaXNoZXJBUEksXHJcbiAgbWV0aG9kOiBcIlBPU1RcIixcclxuICBkYXRhXHJcbn0pKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVzc2FnZUJhcihwcm9wcykge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0bywgc2V0VG9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3dobywgc2V0V2hvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBwb3N0TmV3TWVzc2FnZV0gPSBwb3N0UHVibGlzaGVyRW5kcG9pbnQoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZXZlbnQpID0+IHtcclxuICBpZihldmVudC5rZXkgPT0gJ0VudGVyJ3x8IGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcclxuICAgIHNlbmRDaGF0KCk7XHJcbiAgfVxyXG59XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZENoYXQoKSB7XHJcbiAgICAgIHBvc3ROZXdNZXNzYWdlKHtcclxuICAgICAgICB0byxcclxuICAgICAgICBtZXNzYWdlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxucmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxmb3JtIGlkPVwiaXBmcy1oYXNoLWZvcm1cIj5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaXBmc0lucHV0XCJcclxuICAgICAgICB0eXBlID0gXCJmaWxlXCJcclxuICAgICAgXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBvbGljeUJ1dHRvblwiXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiPiBcclxuICAgICAgICBVcGxvYWRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibWVzc2FnZS1ib3hcIiB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9e2UgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfSAgLz4gXHJcbiAgICAgICAgPGE+PGJ1dHRvbiBvbkNsaWNrPXt2ZXJpZnlEYXRhfSBjbGFzc05hbWU9XCJwb2xpY3lCdXR0b25cIiBpbnZlcnQgPlZlcmlmeTwvYnV0dG9uPjxpbWcgY2xhc3NOYW1lPVwiY2VudGVyXCIgc3JjPVwiLi4vc3RhdGljL3ZlcmlmaWNhdGlvbi5wbmdcIiBoZWlnaHQ9XCIyOFwiIHdpZHRoPVwiMjhcIiBhbGlnbj1cIm1pZGRsZVwiIGFsdD1cIlwiLz48L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudG8ge1xyXG4gICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDRkOTsgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgcmdiYSgxMDAsMTIxLDE0MywwLjEyMik7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCByZ2JhKDEwMCwxMjEsMTQzLDAuMTIyKTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvOyBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7IFxyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wb2xpY3lCdXR0b24ge1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgICAgLmlwZnNJbnB1dCB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgICAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pcGZzSW5wdXQ6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ0lQRlMgU09NRSBGSUxFUyc7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmOWY5ZjksICNlM2UzZTMpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICAgIH1cclxuICAgICAgLmN1c3RvbS1maWxlLWlucHV0OmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuICAgICAgLmN1c3RvbS1maWxlLWlucHV0OmFjdGl2ZTo6YmVmb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlM2UzZTMsICNmOWY5ZjkpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLm1lc3NhZ2UtYm94IHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICAgICAgICB3aWR0aDogODAwcHggO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMDsgXHJcbiAgICAgICAgbWluLWhlaWdodDogNDJweDsgXHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4OyBcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDsgXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMzQsMTM0LDEzNCwuNyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMxZDFjMWQ7XHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICB1c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiA5cHggMzBweCAxMHB4IDUwcHg7XCJcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvZ2luIHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjY291bnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS45MTY2NztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiAjM2Q0NjRkO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM0Yzk7XHJcbiAgICAgICAgcGFkZGluZzogMy41cHggN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yb3cge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZXNzYWdlLWJveCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luOiAwOyBcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQycHg7IFxyXG4gICAgICAgICAgaGVpZ2h0OiAzOHB4OyBcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4OyBcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTM0LDEzNCwxMzQsLjcpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcclxuICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMWQxYzFkO1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAgIHBhZGRpbmc6IDlweCAzMHB4IDEwcHggNTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuKVxyXG5cclxuICAgIH1cclxuIl19 */\n/*@ sourceURL=C:\\c-chain\\components\\messages\\MessageBar.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.32804dad90cbe90b3f9b.hot-update.js.map