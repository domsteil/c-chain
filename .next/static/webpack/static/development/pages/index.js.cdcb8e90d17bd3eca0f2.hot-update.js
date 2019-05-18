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
    className: "jsx-2984077632"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2984077632" + " " + "row"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2984077632" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    id: "ipfs-hash-form",
    className: "jsx-2984077632"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "file",
    className: "jsx-2984077632" + " " + "ipfsInput"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "submit",
    className: "jsx-2984077632" + " " + "policyButton"
  }, "Upload")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-2984077632"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    onKeyPress: handleKeyPress,
    className: "jsx-2984077632" + " " + "message-box"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-2984077632"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: verifyData,
    invert: true,
    className: "jsx-2984077632" + " " + "policyButton"
  }, "Verify"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/verification.png",
    height: "28",
    width: "28",
    align: "middle",
    alt: "",
    className: "jsx-2984077632" + " " + "center"
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2984077632"
  }, ".column.jsx-2984077632{text-align:center;border-width:1px;list-style:none;padding-bottom:8px;padding-top:8px;margin-right:28px;}.center.jsx-2984077632{margin-left:3px;margin-bottom:10px;}.to.jsx-2984077632{width:260px;padding-bottom:8px;padding-top:8px;border:1px solid #d0d4d9;border-radius:.375rem;-webkit-box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);line-height:20px;min-height:auto;padding-left:0;padding-right:0;}.policyButton.jsx-2984077632{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.ipfsInput.jsx-2984077632{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:300px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.ipfsInput.jsx-2984077632::before{content:'IPFS SOME FILES';border:1px solid #999;border-radius:3px;padding:5px 8px;outline:none;white-space:nowrap;-webkit-user-select:none;cursor:pointer;text-shadow:1px 1px #fff;font-weight:700;font-size:10pt;}.custom-file-input.jsx-2984077632:hover.jsx-2984077632::before{border-color:black;}.custom-file-input.jsx-2984077632:active.jsx-2984077632::before{background:-webkit-linear-gradient(top,#e3e3e3,#f9f9f9);}.message-box.jsx-2984077632{padding-bottom:28px;width:800px;overflow:auto;margin:0;min-height:42px;height:38px;max-height:180px;border:2px solid rgba(134,134,134,.7);border-radius:.375rem;outline:0;background:#fff;resize:none;box-shadow:none;color:#1d1c1d;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;padding:9px 30px 10px 50px;\"      }      .login {        color: #FFF;      }      .account {        font-size: 13px;        line-height: 1.91667;        font-weight: 400;        color: #3d464d;        border: 1px solid #bdc4c9;        padding: 3.5px 7px;        border-radius: 4px;        margin-top: 28px;        margin-left: 8px;      }      .row {        flex-direction: column;        margin: -1.5rem 0;        text-align: center;      }      // CSS only media query for tablet      @media screen and (max-width: 960px) {        .row {          flex-direction: column;          margin: -1.5rem 0;        }        .column {          width: 10%;          padding: 1.5rem 0;          text-align: center;          max-width: 100px;        }        .message-box {          padding-bottom: 28px;          width: 100px;          overflow: auto;          margin: 0;           min-height: 42px;           height: 38px;           max-height: 180px;           border: 2px solid rgba(134,134,134,.7);          border-radius: .375rem;          outline: 0;          background: #FFFFFF;          resize: none;          box-shadow: none;          color: #1d1c1d;          -webkit-user-select: auto;          -moz-user-select: auto;          -ms-user-select: auto;          user-select: auto;          padding: 9px 30px 10px 50px;          display: none;        }              };}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxtZXNzYWdlc1xcTWVzc2FnZUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSG9CLEFBSTJCLEFBU0YsQUFLSixBQWNZLEFBZ0NBLEFBK0JFLEFBYVAsQUFHdUMsQUFLdEMsWUFqR0QsSUFMQSxFQVRGLENBd0duQixDQVFlLElBcEZLLEFBZ0NBLEVBK0JJLEtBNUVOLENBa0dGLEdBaEhFLEFBU2xCLE9BbUJ1QixBQWdDQSxJQXFEWixDQWxHZ0IsQ0E0RVAsR0ExRkMsSUFpSEgsQ0FSbEIsT0E3RXdCLEFBZ0NBLEdBK0JOLElBMUZBLENBaUhKLENBbkdVLFVBNkVULENBdUJJLEVBdEZRLEFBZ0NBLENBM0RQLFFBYzBDLENBNkV6QyxLQXVCbUIsSUFqSHhDLE1BMkJvQixBQWdDQSxJQWdDTyxjQS9EWCxBQWdDQSxVQXNEUSxDQXRCUCxHQS9ESSxBQWdDQSxZQS9DaUMsQUErRTNCLE1Bc0JmLENBckZFLEFBZ0NBLFNBc0RJLEdBckZKLEFBZ0NBLE1BK0JJLE1BOURBLEFBZ0NBLENBcURKLFNBdEJHLEdBdUJDLEdBckZBLEFBZ0NBLEtBbERDLElBaUZuQixJQXVCZ0IsR0FyRkMsQUFnQ0EsTUFsREMsS0F3R1MsSUFyRkEsQUFnQ2QsT0FsREksSUFtREUsVUFxREssQ0F2R04sQ0FrQm9CLGVBakJ0QyxLQXVHdUIsY0FyRkosT0FzRkEsZ0NBdERGLGVBQ00sK0JBaENOLE9Bc0ZZLFFBckZOLElBZ0NKLGVBb0hyQixFQW5Ic0Isa0JBQ0EsV0FqQ0QsT0FrQ0EsVUFqQ0MsT0FrQ0MsV0FqQ0QsUUFrQ2MsVUFqQ2YsaUJBQ0UsR0FpQ0UsZ0JBaENXLEtBaUNKLHlCQWhDUCxxQkFDTyxrQkFnQ1osZ0JBQ0gsYUFFZixpQkFsQ2tCLGdCQUNILGFBQ2Ysb2pDQXlJRCIsImZpbGUiOiJDOlxcYy1jaGFpblxcY29tcG9uZW50c1xcbWVzc2FnZXNcXE1lc3NhZ2VCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGRlZmxhdGVTeW5jIH0gZnJvbSAnemxpYic7XHJcblxyXG52YXIgc3RhdGU7XHJcbnZhciBjYXB0dXJlRmlsZTtcclxuXHJcblxyXG5mdW5jdGlvbiB1c2VBc3luY0VuZHBvaW50KGZuKSB7XHJcbiAgY29uc3QgW3Jlcywgc2V0UmVzXSA9IHVzZVN0YXRlKHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBwZW5kaW5nOiBkZWZsYXRlU3luYyxcclxuICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICBlcnJvcjogZmFsc2UsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3JlcSwgc2V0UmVxXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgaXBmc0hhc2g6bnVsbCxcclxuICAgIGJ1ZmZlcjonJyxcclxuICAgIGV0aEFkZHJlc3M6JycsXHJcbiAgICB0cmFuc2FjdGlvbkhhc2g6JycsXHJcbiAgICB0eFJlY2VpcHQ6ICcnXHJcbiAgfTtcclxuXHJcbi8vVGFrZSBmaWxlIGlucHV0IGZyb20gdXNlclxyXG4gY2FwdHVyZUZpbGUgPShldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cclxuICAgICAgbGV0IHJlYWRlciA9IG5ldyB3aW5kb3cuRmlsZVJlYWRlcigpXHJcbiAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKVxyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gdGhpcy5jb252ZXJ0VG9CdWZmZXIocmVhZGVyKVxyXG4gICAgfTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFyZXEpIHJldHVybjtcclxuICAgIHNldFJlcyh7XHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHBlbmRpbmc6IHRydWUsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIGF4aW9zKHJlcSlcclxuICAudGhlbihyZXMgPT5cclxuICAgIHNldFJlcyh7XHJcbiAgICAgIGRhdGE6IHJlcy5kYXRhLFxyXG4gICAgICBwZW5kaW5nOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICBjb21wbGV0ZTogdHJ1ZVxyXG4gICAgfSksXHJcbiAgKVxyXG4gIC5jYXRjaCgoKSA9PlxyXG4gICAgc2V0UmVzKHtcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGVuZGluZzogZmFsc2UsXHJcbiAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICBjb21wbGV0ZTogdHJ1ZVxyXG4gICAgfSksXHJcbiAgKTtcclxufSwgW3JlcV1cclxuKTtcclxucmV0dXJuIFtyZXMsICguLi5hcmdzKSA9PiBzZXRSZXEoZm4oLi4uYXJncykpXTtcclxuXHJcbn1cclxuXHJcbmxldCB2ZXJpZnlEYXRhO1xyXG5jb25zdCBwdWJsaXNoZXJBUEkgPSBcImh0dHBzOi8vZGFwcHMubmdyb2suaW86MzAwMC9hcGkvXCI7XHJcblxyXG5mdW5jdGlvbiBwb3N0UHVibGlzaGVyRW5kcG9pbnQoKSB7XHJcbiAgXHJcbiAgcmV0dXJuIHVzZUFzeW5jRW5kcG9pbnQoZGF0YSA9PiAoe1xyXG4gIHVybDogcHVibGlzaGVyQVBJLFxyXG4gIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgZGF0YVxyXG59KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lc3NhZ2VCYXIocHJvcHMpIHtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdG8sIHNldFRvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt3aG8sIHNldFdob10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmV3TWVzc2FnZSwgcG9zdE5ld01lc3NhZ2VdID0gcG9zdFB1Ymxpc2hlckVuZHBvaW50KCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgaWYoZXZlbnQua2V5ID09ICdFbnRlcid8fCBldmVudC5rZXlDb2RlID09IDEzKSB7XHJcbiAgICBzZW5kQ2hhdCgpO1xyXG4gIH1cclxufVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbmRDaGF0KCkge1xyXG4gICAgICBwb3N0TmV3TWVzc2FnZSh7XHJcbiAgICAgICAgdG8sXHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbnJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8Zm9ybSBpZD1cImlwZnMtaGFzaC1mb3JtXCI+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlwZnNJbnB1dFwiXHJcbiAgICAgICAgdHlwZSA9IFwiZmlsZVwiXHJcbiAgICAgIFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwb2xpY3lCdXR0b25cIlxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIj4gXHJcbiAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm94XCIgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXtlID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc30gIC8+IFxyXG4gICAgICAgIDxhPjxidXR0b24gb25DbGljaz17dmVyaWZ5RGF0YX0gY2xhc3NOYW1lPVwicG9saWN5QnV0dG9uXCIgaW52ZXJ0ID5WZXJpZnk8L2J1dHRvbj48aW1nIGNsYXNzTmFtZT1cImNlbnRlclwiIHNyYz1cIi4uL3N0YXRpYy92ZXJpZmljYXRpb24ucG5nXCIgaGVpZ2h0PVwiMjhcIiB3aWR0aD1cIjI4XCIgYWxpZ249XCJtaWRkbGVcIiBhbHQ9XCJcIi8+PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRvIHtcclxuICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQ0ZDk7IFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwIHJnYmEoMTAwLDEyMSwxNDMsMC4xMjIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgcmdiYSgxMDAsMTIxLDE0MywwLjEyMik7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogYXV0bzsgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwOyBcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucG9saWN5QnV0dG9uIHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICAgIC5pcGZzSW5wdXQge1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaXBmc0lucHV0OjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdJUEZTIFNPTUUgRklMRVMnO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICAgIH1cclxuICAgICAgLmN1c3RvbS1maWxlLWlucHV0OmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuICAgICAgLmN1c3RvbS1maWxlLWlucHV0OmFjdGl2ZTo6YmVmb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlM2UzZTMsICNmOWY5ZjkpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLm1lc3NhZ2UtYm94IHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICAgICAgICB3aWR0aDogODAwcHggO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMDsgXHJcbiAgICAgICAgbWluLWhlaWdodDogNDJweDsgXHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4OyBcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDsgXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMzQsMTM0LDEzNCwuNyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMxZDFjMWQ7XHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICB1c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiA5cHggMzBweCAxMHB4IDUwcHg7XCJcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvZ2luIHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjY291bnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS45MTY2NztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiAjM2Q0NjRkO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM0Yzk7XHJcbiAgICAgICAgcGFkZGluZzogMy41cHggN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yb3cge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZXNzYWdlLWJveCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luOiAwOyBcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQycHg7IFxyXG4gICAgICAgICAgaGVpZ2h0OiAzOHB4OyBcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4OyBcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTM0LDEzNCwxMzQsLjcpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcclxuICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMWQxYzFkO1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAgIHBhZGRpbmc6IDlweCAzMHB4IDEwcHggNTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuKVxyXG5cclxuICAgIH1cclxuIl19 */\n/*@ sourceURL=C:\\c-chain\\components\\messages\\MessageBar.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.cdcb8e90d17bd3eca0f2.hot-update.js.map