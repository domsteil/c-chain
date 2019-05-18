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
    className: "jsx-350263880"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-350263880" + " " + "row"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-350263880" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    id: "ipfs-hash-form",
    className: "jsx-350263880"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "file",
    className: "jsx-350263880" + " " + "ipfsInput"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "submit",
    className: "jsx-350263880" + " " + "policyButton"
  }, "Upload")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-350263880"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    onKeyPress: handleKeyPress,
    className: "jsx-350263880" + " " + "message-box"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-350263880"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    onKeyPress: handleKeyPress,
    className: "jsx-350263880" + " " + "message-box"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-350263880"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: verifyData,
    invert: true,
    className: "jsx-350263880" + " " + "policyButton"
  }, "Verify"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/verification.png",
    height: "28",
    width: "28",
    align: "middle",
    alt: "",
    className: "jsx-350263880" + " " + "center"
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "350263880"
  }, ".column.jsx-350263880{text-align:center;border-width:1px;list-style:none;padding-bottom:8px;padding-top:8px;margin-right:28px;}.center.jsx-350263880{margin-left:3px;margin-bottom:10px;}.to.jsx-350263880{width:260px;padding-bottom:8px;padding-top:8px;border:1px solid #d0d4d9;border-radius:.375rem;-webkit-box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);line-height:20px;min-height:auto;padding-left:0;padding-right:0;}.policyButton.jsx-350263880{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.ipfsInput.jsx-350263880{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.message-box.jsx-350263880{padding-bottom:28px;width:800px;overflow:auto;margin:0;min-height:42px;height:38px;max-height:180px;border:2px solid rgba(134,134,134,.7);border-radius:.375rem;outline:0;background:#fff;resize:none;box-shadow:none;color:#1d1c1d;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;padding:9px 30px 10px 50px;\"      }      .login {        color: #FFF;      }      .account {        font-size: 13px;        line-height: 1.91667;        font-weight: 400;        color: #3d464d;        border: 1px solid #bdc4c9;        padding: 3.5px 7px;        border-radius: 4px;        margin-top: 28px;        margin-left: 8px;      }      .row {        flex-direction: column;        margin: -1.5rem 0;        text-align: center;      }      // CSS only media query for tablet      @media screen and (max-width: 960px) {        .row {          flex-direction: column;          margin: -1.5rem 0;        }        .column {          width: 10%;          padding: 1.5rem 0;          text-align: center;          max-width: 100px;        }        .message-box {          padding-bottom: 28px;          width: 100px;          overflow: auto;          margin: 0;           min-height: 42px;           height: 38px;           max-height: 180px;           border: 2px solid rgba(134,134,134,.7);          border-radius: .375rem;          outline: 0;          background: #FFFFFF;          resize: none;          box-shadow: none;          color: #1d1c1d;          -webkit-user-select: auto;          -moz-user-select: auto;          -ms-user-select: auto;          user-select: auto;          padding: 9px 30px 10px 50px;          display: none;        }              };}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxtZXNzYWdlc1xcTWVzc2FnZUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SG9CLEFBSTJCLEFBU0YsQUFLSixBQWNZLEFBZ0NBLEFBK0JKLFlBNUVELElBTEEsRUFURixFQTJGSixJQS9ESyxBQWdDQSxPQTdDRixDQTZFRixHQTNGRSxBQVNsQixPQW1CdUIsQUFnQ0EsSUFnQ1osQ0E3RWdCLElBZE4sSUE0RkgsUUFoRU0sQUFnQ0EsT0EzRE4sQ0E0RkosQ0E5RVUsV0ErRUwsRUFqRVEsQUFnQ0EsQ0EzRFAsUUFjMEMsTUErRXRCLElBNUZ4QyxNQTJCb0IsQUFnQ0Esa0JBL0JKLEFBZ0NBLFVBaUNRLElBaEVILEFBZ0NBLFlBL0NpQyxNQWdGMUMsQ0FoRUUsQUFnQ0EsU0FpQ0ksR0FoRUosQUFnQ0EsWUEvQkksQUFnQ0EsQ0FnQ0osWUFDSSxHQWhFQSxBQWdDQSxLQWxEQyxRQW1GSCxHQWhFQyxBQWdDQSxNQWxEQyxLQW1GUyxJQWhFQSxBQWdDQSxPQWxEVixjQW1GTyxDQWxGTixDQWtCb0IsQUFnQ0EsZUFqRHRDLEtBa0Z1QixjQWhFSixBQWdDQSxPQWlDQSw4RUFoRUYsQUFnQ0EsT0FpQ1ksUUFoRU4sQUFnQ0EsbUJBK0Z6QiwrQkE5SHFCLEFBZ0NBLGlCQS9CQyxBQWdDQSxrQkEvQkEsQUFnQ0Esa0JBL0JELEFBZ0NBLGlCQS9CRSxBQWdDQSxtQkEvQmEsQUFnQ0EsOEJBL0JYLEFBZ0NBLHFCQS9CTyxBQWdDQSxnRUEvQlosQUFnQ0EsZ0JBL0JILEFBZ0NBLGFBL0JmLEFBZ0NBLG9qQ0FvRkQiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXG1lc3NhZ2VzXFxNZXNzYWdlQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBkZWZsYXRlU3luYyB9IGZyb20gJ3psaWInO1xyXG5cclxudmFyIHN0YXRlO1xyXG52YXIgY2FwdHVyZUZpbGU7XHJcblxyXG5cclxuZnVuY3Rpb24gdXNlQXN5bmNFbmRwb2ludChmbikge1xyXG4gIGNvbnN0IFtyZXMsIHNldFJlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBkYXRhOiBudWxsLFxyXG4gICAgcGVuZGluZzogZGVmbGF0ZVN5bmMsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgZXJyb3I6IGZhbHNlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtyZXEsIHNldFJlcV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGlwZnNIYXNoOm51bGwsXHJcbiAgICBidWZmZXI6JycsXHJcbiAgICBldGhBZGRyZXNzOicnLFxyXG4gICAgdHJhbnNhY3Rpb25IYXNoOicnLFxyXG4gICAgdHhSZWNlaXB0OiAnJ1xyXG4gIH07XHJcblxyXG4vL1Rha2UgZmlsZSBpbnB1dCBmcm9tIHVzZXJcclxuIGNhcHR1cmVGaWxlID0oZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgd2luZG93LkZpbGVSZWFkZXIoKVxyXG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSlcclxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHRoaXMuY29udmVydFRvQnVmZmVyKHJlYWRlcilcclxuICAgIH07XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcmVxKSByZXR1cm47XHJcbiAgICBzZXRSZXMoe1xyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwZW5kaW5nOiB0cnVlLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICB9KTtcclxuICBheGlvcyhyZXEpXHJcbiAgLnRoZW4ocmVzID0+XHJcbiAgICBzZXRSZXMoe1xyXG4gICAgICBkYXRhOiByZXMuZGF0YSxcclxuICAgICAgcGVuZGluZzogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgY29tcGxldGU6IHRydWVcclxuICAgIH0pLFxyXG4gIClcclxuICAuY2F0Y2goKCkgPT5cclxuICAgIHNldFJlcyh7XHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHBlbmRpbmc6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgY29tcGxldGU6IHRydWVcclxuICAgIH0pLFxyXG4gICk7XHJcbn0sIFtyZXFdXHJcbik7XHJcbnJldHVybiBbcmVzLCAoLi4uYXJncykgPT4gc2V0UmVxKGZuKC4uLmFyZ3MpKV07XHJcblxyXG59XHJcblxyXG5sZXQgdmVyaWZ5RGF0YTtcclxuY29uc3QgcHVibGlzaGVyQVBJID0gXCJodHRwczovL2RhcHBzLm5ncm9rLmlvOjMwMDAvYXBpL1wiO1xyXG5cclxuZnVuY3Rpb24gcG9zdFB1Ymxpc2hlckVuZHBvaW50KCkge1xyXG4gIFxyXG4gIHJldHVybiB1c2VBc3luY0VuZHBvaW50KGRhdGEgPT4gKHtcclxuICB1cmw6IHB1Ymxpc2hlckFQSSxcclxuICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gIGRhdGFcclxufSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdlQmFyKHByb3BzKSB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RvLCBzZXRUb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbd2hvLCBzZXRXaG9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW25ld01lc3NhZ2UsIHBvc3ROZXdNZXNzYWdlXSA9IHBvc3RQdWJsaXNoZXJFbmRwb2ludCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChldmVudCkgPT4ge1xyXG4gIGlmKGV2ZW50LmtleSA9PSAnRW50ZXInfHwgZXZlbnQua2V5Q29kZSA9PSAxMykge1xyXG4gICAgc2VuZENoYXQoKTtcclxuICB9XHJcbn1cclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kQ2hhdCgpIHtcclxuICAgICAgcG9zdE5ld01lc3NhZ2Uoe1xyXG4gICAgICAgIHRvLFxyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5yZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJpcGZzLWhhc2gtZm9ybVwiPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpcGZzSW5wdXRcIlxyXG4gICAgICAgIHR5cGUgPSBcImZpbGVcIlxyXG4gICAgICBcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicG9saWN5QnV0dG9uXCJcclxuICAgICAgICB0eXBlPVwic3VibWl0XCI+IFxyXG4gICAgICAgIFVwbG9hZFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtZXNzYWdlLWJveFwiIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17ZSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX0gb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9ICAvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm94XCIgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXtlID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc30gIC8+IFxyXG4gICAgICAgIDxhPjxidXR0b24gb25DbGljaz17dmVyaWZ5RGF0YX0gY2xhc3NOYW1lPVwicG9saWN5QnV0dG9uXCIgaW52ZXJ0ID5WZXJpZnk8L2J1dHRvbj48aW1nIGNsYXNzTmFtZT1cImNlbnRlclwiIHNyYz1cIi4uL3N0YXRpYy92ZXJpZmljYXRpb24ucG5nXCIgaGVpZ2h0PVwiMjhcIiB3aWR0aD1cIjI4XCIgYWxpZ249XCJtaWRkbGVcIiBhbHQ9XCJcIi8+PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRvIHtcclxuICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQ0ZDk7IFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwIHJnYmEoMTAwLDEyMSwxNDMsMC4xMjIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgcmdiYSgxMDAsMTIxLDE0MywwLjEyMik7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogYXV0bzsgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwOyBcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucG9saWN5QnV0dG9uIHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICAgIC5pcGZzSW5wdXQge1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWVzc2FnZS1ib3gge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyOHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MDBweCA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwOyBcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MnB4OyBcclxuICAgICAgICBoZWlnaHQ6IDM4cHg7IFxyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4OyBcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEzNCwxMzQsMTM0LC43KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAuMzc1cmVtO1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzFkMWMxZDtcclxuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDlweCAzMHB4IDEwcHggNTBweDtcIlxyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9naW4ge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWNjb3VudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjkxNjY3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6ICMzZDQ2NGQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYzRjOTtcclxuICAgICAgICBwYWRkaW5nOiAzLjVweCA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJvdyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lc3NhZ2UtYm94IHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyOHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICBtYXJnaW46IDA7IFxyXG4gICAgICAgICAgbWluLWhlaWdodDogNDJweDsgXHJcbiAgICAgICAgICBoZWlnaHQ6IDM4cHg7IFxyXG4gICAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7IFxyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMzQsMTM0LDEzNCwuNyk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMzc1cmVtO1xyXG4gICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMxZDFjMWQ7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogOXB4IDMwcHggMTBweCA1MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4pXHJcblxyXG4gICAgfVxyXG4iXX0= */\n/*@ sourceURL=C:\\c-chain\\components\\messages\\MessageBar.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.ec256ef25cd75806276a.hot-update.js.map