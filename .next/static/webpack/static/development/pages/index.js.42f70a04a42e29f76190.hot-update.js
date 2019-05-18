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






function useAsyncEndpoint(fn) {
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

var chatAPI = "http://localhost:10050/api/sendMessage?to";

function postChatEndpoint() {
  return useAsyncEndpoint(function (data) {
    return {
      url: chatAPI,
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

  var _postChatEndpoint = postChatEndpoint(),
      _postChatEndpoint2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_postChatEndpoint, 2),
      newMessage = _postChatEndpoint2[0],
      postNewMessage = _postChatEndpoint2[1];

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
    className: "jsx-814487990"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-814487990" + " " + "row"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-814487990" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-814487990"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    onKeyPress: handleKeyPress,
    className: "jsx-814487990" + " " + "message-box"
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "814487990"
  }, ".column.jsx-814487990{text-align:center;border-width:1px;list-style:none;padding-bottom:8px;padding-top:8px;margin-right:28px;}.to.jsx-814487990{width:260px;padding-bottom:8px;padding-top:8px;border:1px solid #d0d4d9;border-radius:.375rem;-webkit-box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);line-height:20px;min-height:auto;padding-left:0;padding-right:0;}.message-box.jsx-814487990{padding-bottom:28px;width:1070px;overflow:auto;margin:0;min-height:42px;height:38px;max-height:180px;border:2px solid rgba(134,134,134,.7);border-radius:.375rem;outline:0;background:#fff;resize:none;box-shadow:none;color:#1d1c1d;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;padding:9px 30px 10px 50px;\"      }      .login {        color: #FFF;      }      .account {        font-size: 13px;        line-height: 1.91667;        font-weight: 400;        color: #3d464d;        border: 1px solid #bdc4c9;        padding: 3.5px 7px;        border-radius: 4px;        margin-top: 28px;        margin-left: 8px;      }      .row {        flex-direction: column;        margin: -1.5rem 0;        text-align: center;      }      // CSS only media query for tablet      @media screen and (max-width: 960px) {        .row {          flex-direction: column;          margin: -1.5rem 0;        }        .column {          width: 10%;          padding: 1.5rem 0;          text-align: center;          max-width: 100px;        }        .message-box {          padding-bottom: 28px;          width: 100px;          overflow: auto;          margin: 0;           min-height: 42px;           height: 38px;           max-height: 180px;           border: 2px solid rgba(134,134,134,.7);          border-radius: .375rem;          outline: 0;          background: #FFFFFF;          resize: none;          box-shadow: none;          color: #1d1c1d;          -webkit-user-select: auto;          -moz-user-select: auto;          -ms-user-select: auto;          user-select: auto;          padding: 9px 30px 10px 50px;          display: none;        }              };}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxtZXNzYWdlc1xcTWVzc2FnZUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRm9CLEFBSTJCLEFBU04sQUFjUSxZQWJELE1BVEYsRUF1QkgsV0FiRSxFQWNGLEVBdkJFLFlBVVMsQUFjaEIsSUF2QlUsS0F3QkgsY0F2QkEsRUFTTSxBQWVWLFlBQ0ssRUF4QkMsUUFTMEMsT0FnQnRCLEdBeEJ4QyxtQ0F5QndCLGVBaEI4QixPQWlCMUMsVUFDTSxnQkFDSixZQUNJLE9BbkJDLFNBb0JILFFBbkJFLE1Bb0JTLFVBbkJWLGVBQ0MsQUFtQk0sZ0JBbEJ4QixNQW1CdUIscUJBQ0oscUZBQ1UsMkJBK0QvQiw0ekNBQUMiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXG1lc3NhZ2VzXFxNZXNzYWdlQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBkZWZsYXRlU3luYyB9IGZyb20gJ3psaWInO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHVzZUFzeW5jRW5kcG9pbnQoZm4pIHtcclxuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIHBlbmRpbmc6IGRlZmxhdGVTeW5jLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIGVycm9yOiBmYWxzZSxcclxuICB9KTtcclxuICBjb25zdCBbcmVxLCBzZXRSZXFdID0gdXNlU3RhdGUoKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFyZXEpIHJldHVybjtcclxuICAgIHNldFJlcyh7XHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHBlbmRpbmc6IHRydWUsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIGF4aW9zKHJlcSlcclxuICAudGhlbihyZXMgPT5cclxuICAgIHNldFJlcyh7XHJcbiAgICAgIGRhdGE6IHJlcy5kYXRhLFxyXG4gICAgICBwZW5kaW5nOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICBjb21wbGV0ZTogdHJ1ZVxyXG4gICAgfSksXHJcbiAgKVxyXG4gIC5jYXRjaCgoKSA9PlxyXG4gICAgc2V0UmVzKHtcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGVuZGluZzogZmFsc2UsXHJcbiAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICBjb21wbGV0ZTogdHJ1ZVxyXG4gICAgfSksXHJcbiAgKTtcclxufSwgW3JlcV1cclxuKTtcclxucmV0dXJuIFtyZXMsICguLi5hcmdzKSA9PiBzZXRSZXEoZm4oLi4uYXJncykpXTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGNoYXRBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwNTAvYXBpL3NlbmRNZXNzYWdlP3RvXCI7XHJcblxyXG5mdW5jdGlvbiBwb3N0Q2hhdEVuZHBvaW50KCkge1xyXG4gIFxyXG4gIHJldHVybiB1c2VBc3luY0VuZHBvaW50KGRhdGEgPT4gKHtcclxuICB1cmw6IGNoYXRBUEksXHJcbiAgbWV0aG9kOiBcIlBPU1RcIixcclxuICBkYXRhXHJcbn0pKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVzc2FnZUJhcihwcm9wcykge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0bywgc2V0VG9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3dobywgc2V0V2hvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBwb3N0TmV3TWVzc2FnZV0gPSBwb3N0Q2hhdEVuZHBvaW50KCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgaWYoZXZlbnQua2V5ID09ICdFbnRlcid8fCBldmVudC5rZXlDb2RlID09IDEzKSB7XHJcbiAgICBzZW5kQ2hhdCgpO1xyXG4gIH1cclxufVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbmRDaGF0KCkge1xyXG4gICAgICBwb3N0TmV3TWVzc2FnZSh7XHJcbiAgICAgICAgdG8sXHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbnJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtZXNzYWdlLWJveFwiIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17ZSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX0gb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRvIHtcclxuICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQ0ZDk7IFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwIHJnYmEoMTAwLDEyMSwxNDMsMC4xMjIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgcmdiYSgxMDAsMTIxLDE0MywwLjEyMik7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogYXV0bzsgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwOyBcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWVzc2FnZS1ib3gge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDcwcHggO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMDsgXHJcbiAgICAgICAgbWluLWhlaWdodDogNDJweDsgXHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4OyBcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDsgXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMzQsMTM0LDEzNCwuNyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMxZDFjMWQ7XHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICB1c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiA5cHggMzBweCAxMHB4IDUwcHg7XCJcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvZ2luIHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjY291bnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS45MTY2NztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiAjM2Q0NjRkO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM0Yzk7XHJcbiAgICAgICAgcGFkZGluZzogMy41cHggN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yb3cge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAtMS41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZXNzYWdlLWJveCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luOiAwOyBcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQycHg7IFxyXG4gICAgICAgICAgaGVpZ2h0OiAzOHB4OyBcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4OyBcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTM0LDEzNCwxMzQsLjcpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcclxuICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMWQxYzFkO1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAgIHBhZGRpbmc6IDlweCAzMHB4IDEwcHggNTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuKVxyXG5cclxuICAgIH1cclxuIl19 */\n/*@ sourceURL=C:\\c-chain\\components\\messages\\MessageBar.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.42f70a04a42e29f76190.hot-update.js.map