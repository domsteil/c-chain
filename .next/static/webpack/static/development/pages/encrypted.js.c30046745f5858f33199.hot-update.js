webpackHotUpdate("static\\development\\pages\\encrypted.js",{

/***/ "./components/messages/DecryptBar.js":
/*!*******************************************!*\
  !*** ./components/messages/DecryptBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DecryptBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zlib */ "./node_modules/browserify-zlib/lib/index.js");
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zlib__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fortmatic */ "./node_modules/fortmatic/lib/fortmatic.js");
/* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fortmatic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _useUrsula__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../useUrsula */ "./components/useUrsula.js");
/* harmony import */ var _useFetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../useFetch */ "./components/useFetch.js");









var web3;
var state;
var captureFile;
var onSubmit;
var uploadFile;
var hash;
var address;

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

var handlePersonalSign = function handlePersonalSign(e) {
  var message = message;
  web3.eth.getAccounts(function (err, accounts) {
    if (err) return console.error(err);
    var from = accounts[0];
    var params = [message, from];
    var method = 'personal_sign';
    web3.currentProvider.sendAsync({
      id: 1,
      method: method,
      params: params,
      from: from
    }, function (err, result) {
      if (err) return console.error(err);
      if (result.error) return console.error(result.error);
      console.log(result);
    });
  });
};

var decryptAPI = "http://ec2-18-204-34-34.compute-1.amazonaws.com:5000/decrypt/";

function decryptData() {
  return useAsyncEndpoint(function (data) {
    return {
      url: decryptAPI,
      method: "GET",
      data: data
    };
  });
}

function DecryptBar(props) {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Public Key for re-encryption"),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      password = _useState6[0],
      setPassword = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Hash"),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      hash = _useState8[0],
      setHash = _useState8[1];

  var handleKeyPress = function handleKeyPress(event) {
    if (event.key == 'Enter' || event.keyCode == 13) {
      decryptData();
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-1447952807"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1447952807" + " " + "row"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1447952807" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    id: "ipfs-hash-form",
    className: "jsx-1447952807"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    className: "jsx-1447952807" + " " + "policyDropdown"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "policy-1",
    className: "jsx-1447952807"
  }, "Policy-1"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "policy-2",
    className: "jsx-1447952807"
  }, "Policy-2")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "file",
    className: "jsx-1447952807" + " " + "ipfsInput"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: "uploadFile",
    className: "jsx-1447952807" + " " + "policyButton"
  }, "Upload"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/verification.png",
    height: "28",
    width: "28",
    align: "middle",
    alt: "",
    className: "jsx-1447952807" + " " + "center"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-1447952807"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-1447952807"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    value: hash,
    onChange: function onChange(e) {
      return setHash(e.target.value);
    },
    onKeyPress: handleKeyPress,
    className: "jsx-1447952807" + " " + "message-box"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-1447952807"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    onKeyPress: handleKeyPress,
    className: "jsx-1447952807" + " " + "message-box"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-1447952807"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: decryptData,
    invert: true,
    className: "jsx-1447952807" + " " + "policyButton"
  }, "Decrypt"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/verification.png",
    height: "28",
    width: "28",
    align: "middle",
    alt: "",
    className: "jsx-1447952807" + " " + "center"
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1447952807"
  }, ".column.jsx-1447952807{text-align:center;border-width:1px;list-style:none;padding-bottom:8px;padding-top:8px;margin-right:28px;}.center.jsx-1447952807{margin-left:3px;margin-bottom:10px;}.to.jsx-1447952807{width:260px;padding-bottom:8px;padding-top:8px;border:1px solid #d0d4d9;border-radius:.375rem;-webkit-box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);line-height:20px;min-height:auto;padding-left:0;padding-right:0;}.policyButton.jsx-1447952807{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.policyDropdown.jsx-1447952807{display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.ipfsInput.jsx-1447952807{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:300px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.message-box.jsx-1447952807{padding-bottom:28px;width:800px;overflow:auto;margin:0;min-height:42px;height:38px;max-height:180px;border:2px solid rgba(134,134,134,.7);border-radius:.375rem;outline:0;background:#fff;resize:none;box-shadow:none;color:#1d1c1d;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;padding:9px 30px 10px 50px;\"      }      .login {        color: #FFF;      }      .account {        font-size: 13px;        line-height: 1.91667;        font-weight: 400;        color: #3d464d;        border: 1px solid #bdc4c9;        padding: 3.5px 7px;        border-radius: 4px;        margin-top: 28px;        margin-left: 8px;      }      .row {        flex-direction: column;        margin: -1.5rem 0;        text-align: center;      }      // CSS only media query for tablet      @media screen and (max-width: 960px) {        .row {          flex-direction: column;          margin: -1.5rem 0;        }        .column {          width: 10%;          padding: 1.5rem 0;          text-align: center;          max-width: 100px;        }        .message-box {          padding-bottom: 28px;          width: 100px;          overflow: auto;          margin: 0;           min-height: 42px;           height: 38px;           max-height: 180px;           border: 2px solid rgba(134,134,134,.7);          border-radius: .375rem;          outline: 0;          background: #FFFFFF;          resize: none;          box-shadow: none;          color: #1d1c1d;          -webkit-user-select: auto;          -moz-user-select: auto;          -ms-user-select: auto;          user-select: auto;          padding: 9px 30px 10px 50px;          display: none;        }              };}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxtZXNzYWdlc1xcRGVjcnlwdEJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSW9CLEFBSTJCLEFBU0YsQUFLSixBQWNZLEFBK0JILEFBOEJHLEFBK0JKLFlBekdELElBTEEsRUFURixFQXdISixDQTdEUyxHQS9CSixBQTZEQSxPQTFFRixDQTBHRixHQXhIRSxBQVNsQixPQW1CdUIsQUE2REEsQ0E5QkksR0E4RGhCLENBMUdnQixJQWROLElBeUhILFFBN0ZNLEFBNkRBLEtBOUJKLEVBMURGLENBeUhKLENBM0dVLFdBNEdMLEVBOUZRLEFBNkRBLENBeEZQLEFBMERKLFFBNUM4QyxNQTZDekMsQUErRG1CLElBekh4QyxNQTJCb0IsQUE2REEsU0E3Qk4sU0EvQkUsQUE2REEsR0E3QkYsT0E4RFUsSUE3RkgsQUE2REEsQ0E3QkgsV0EvQ29DLEtBZ0RwQyxDQTZETixDQTdGRSxBQTZEQSxTQWlDSSxHQTdGSixBQTZEQSxFQTdCRyxVQS9CQyxBQTZEQSxDQWdDSixJQTdEYSxRQThEVCxHQTdGQSxBQTZEQSxLQS9FQyxPQWtEbUIsQ0E4RHRCLEdBN0ZDLEFBNkRBLE1BL0VDLEtBZ0hTLElBN0ZBLEFBNkRkLE9BL0VJLElBZ0ZFLElBL0JBLE1BK0RLLENBL0dOLENBa0JvQixlQWpCdEMsS0ErR3VCLGNBN0ZKLE9BOEZBLGdDQWpDRixJQS9CQSxXQWdDTSxJQS9CQSwyQkE5Qk4sT0E4RlksUUE3Rk4sSUE2REosSUEvQkEsV0E4SHJCLEVBOUZzQixJQS9CQSxjQWdDQSxJQS9CQSxPQS9CRCxPQStEQSxJQS9CQSxNQS9CQyxPQStEQyxJQS9CQSxPQS9CRCxRQStEYyxJQS9CQSxNQS9CZixpQkFDRSxHQThERSxJQS9CQSxZQTlCVyxLQThESixJQS9CQSxxQkE5QlAscUJBQ08sa0JBNkRaLElBL0JBLFlBZ0NILElBL0JBLFNBaUNmLElBaENBLGFBL0JrQixnQkFDSCxhQUNmLG9qQ0FpSkQiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXG1lc3NhZ2VzXFxEZWNyeXB0QmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBkZWZsYXRlU3luYyB9IGZyb20gJ3psaWInO1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcclxuaW1wb3J0IEZvcnRtYXRpYyBmcm9tICdmb3J0bWF0aWMnO1xyXG5pbXBvcnQgdXNlVXJzdWxhIGZyb20gXCIuLi91c2VVcnN1bGFcIjtcclxuaW1wb3J0IHVzZUZldGNoIGZyb20gXCIuLi91c2VGZXRjaFwiO1xyXG5cclxudmFyIHdlYjM7XHJcbnZhciBzdGF0ZTtcclxudmFyIGNhcHR1cmVGaWxlO1xyXG52YXIgb25TdWJtaXQ7XHJcbnZhciB1cGxvYWRGaWxlO1xyXG52YXIgaGFzaDtcclxuXHJcbnZhciBhZGRyZXNzO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHVzZUFzeW5jRW5kcG9pbnQoZm4pIHtcclxuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIHBlbmRpbmc6IGRlZmxhdGVTeW5jLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIGVycm9yOiBmYWxzZSxcclxuICB9KTtcclxuICBjb25zdCBbcmVxLCBzZXRSZXFdID0gdXNlU3RhdGUoKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFyZXEpIHJldHVybjtcclxuICAgIHNldFJlcyh7XHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHBlbmRpbmc6IHRydWUsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIGF4aW9zKHJlcSlcclxuICAudGhlbihyZXMgPT5cclxuICAgIHNldFJlcyh7XHJcbiAgICAgIGRhdGE6IHJlcy5kYXRhLFxyXG4gICAgICBwZW5kaW5nOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICBjb21wbGV0ZTogdHJ1ZVxyXG4gICAgfSksXHJcbiAgKVxyXG4gIC5jYXRjaCgoKSA9PlxyXG4gICAgc2V0UmVzKHtcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGVuZGluZzogZmFsc2UsXHJcbiAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICBjb21wbGV0ZTogdHJ1ZVxyXG4gICAgfSksXHJcbiAgKTtcclxufSwgW3JlcV1cclxuKTtcclxucmV0dXJuIFtyZXMsICguLi5hcmdzKSA9PiBzZXRSZXEoZm4oLi4uYXJncykpXTtcclxuXHJcbn1cclxuXHJcbmxldCBoYW5kbGVQZXJzb25hbFNpZ24gPSAoZSkgPT4ge1xyXG4gIGxldCBtZXNzYWdlID0gbWVzc2FnZTtcclxuICB3ZWIzLmV0aC5nZXRBY2NvdW50cygoZXJyLCBhY2NvdW50cykgPT4ge1xyXG4gICAgaWYgKGVycikgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHZhciBmcm9tID0gYWNjb3VudHNbMF07XHJcbiAgICB2YXIgcGFyYW1zID0gW21lc3NhZ2UsIGZyb21dO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdwZXJzb25hbF9zaWduJztcclxuICAgIHdlYjMuY3VycmVudFByb3ZpZGVyLnNlbmRBc3luYyh7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgZnJvbSxcclxuICAgIH0sIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9yKSByZXR1cm4gY29uc29sZS5lcnJvcihyZXN1bHQuZXJyb3IpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgfSlcclxuICB9KTtcclxufTtcclxuXHJcblxyXG5jb25zdCBkZWNyeXB0QVBJID0gXCJodHRwOi8vZWMyLTE4LTIwNC0zNC0zNC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTo1MDAwL2RlY3J5cHQvXCI7XHJcblxyXG5mdW5jdGlvbiBkZWNyeXB0RGF0YSgpIHtcclxuICBcclxuICByZXR1cm4gdXNlQXN5bmNFbmRwb2ludChkYXRhID0+ICh7XHJcbiAgdXJsOiBkZWNyeXB0QVBJLFxyXG4gIG1ldGhvZDogXCJHRVRcIixcclxuICBkYXRhXHJcbn0pKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVjcnlwdEJhcihwcm9wcykge1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJQdWJsaWMgS2V5IGZvciByZS1lbmNyeXB0aW9uXCIpO1xyXG4gIGNvbnN0IFtoYXNoLCBzZXRIYXNoXSA9IHVzZVN0YXRlKFwiSGFzaFwiKVxyXG5cclxuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChldmVudCkgPT4ge1xyXG4gIGlmKGV2ZW50LmtleSA9PSAnRW50ZXInfHwgZXZlbnQua2V5Q29kZSA9PSAxMykge1xyXG4gICAgZGVjcnlwdERhdGEoKTtcclxuICB9XHJcbn1cclxuXHJcbnJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8Zm9ybSBpZD1cImlwZnMtaGFzaC1mb3JtXCI+XHJcbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJwb2xpY3lEcm9wZG93blwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvbGljeS0xXCI+UG9saWN5LTE8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwb2xpY3ktMlwiPlBvbGljeS0yPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlwZnNJbnB1dFwiXHJcbiAgICAgICAgdHlwZSA9IFwiZmlsZVwiXHJcbiAgICAgIFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwb2xpY3lCdXR0b25cIiBvbkNsaWNrPVwidXBsb2FkRmlsZVwiPiBcclxuICAgICAgICBVcGxvYWRcclxuICAgICAgICA8L2J1dHRvbj48aW1nIGNsYXNzTmFtZT1cImNlbnRlclwiIHNyYz1cIi4uL3N0YXRpYy92ZXJpZmljYXRpb24ucG5nXCIgaGVpZ2h0PVwiMjhcIiB3aWR0aD1cIjI4XCIgYWxpZ249XCJtaWRkbGVcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibWVzc2FnZS1ib3hcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtoYXNofSBvbkNoYW5nZT17ZSA9PiBzZXRIYXNoKGUudGFyZ2V0LnZhbHVlKX0gb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9ICAvPiBcclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtZXNzYWdlLWJveFwiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc30gIC8+IFxyXG4gICAgICAgIDxhPjxidXR0b24gb25DbGljaz17ZGVjcnlwdERhdGF9IGNsYXNzTmFtZT1cInBvbGljeUJ1dHRvblwiIGludmVydCA+RGVjcnlwdDwvYnV0dG9uPjxpbWcgY2xhc3NOYW1lPVwiY2VudGVyXCIgc3JjPVwiLi4vc3RhdGljL3ZlcmlmaWNhdGlvbi5wbmdcIiBoZWlnaHQ9XCIyOFwiIHdpZHRoPVwiMjhcIiBhbGlnbj1cIm1pZGRsZVwiIGFsdD1cIlwiLz48L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudG8ge1xyXG4gICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDRkOTsgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgcmdiYSgxMDAsMTIxLDE0MywwLjEyMik7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCByZ2JhKDEwMCwxMjEsMTQzLDAuMTIyKTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvOyBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7IFxyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wb2xpY3lCdXR0b24ge1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucG9saWN5RHJvcGRvd24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICAgIC5pcGZzSW5wdXQge1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICAubWVzc2FnZS1ib3gge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyOHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MDBweCA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwOyBcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MnB4OyBcclxuICAgICAgICBoZWlnaHQ6IDM4cHg7IFxyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4OyBcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEzNCwxMzQsMTM0LC43KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAuMzc1cmVtO1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzFkMWMxZDtcclxuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDlweCAzMHB4IDEwcHggNTBweDtcIlxyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9naW4ge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWNjb3VudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjkxNjY3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6ICMzZDQ2NGQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYzRjOTtcclxuICAgICAgICBwYWRkaW5nOiAzLjVweCA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJvdyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lc3NhZ2UtYm94IHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyOHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICBtYXJnaW46IDA7IFxyXG4gICAgICAgICAgbWluLWhlaWdodDogNDJweDsgXHJcbiAgICAgICAgICBoZWlnaHQ6IDM4cHg7IFxyXG4gICAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7IFxyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMzQsMTM0LDEzNCwuNyk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMzc1cmVtO1xyXG4gICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMxZDFjMWQ7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogOXB4IDMwcHggMTBweCA1MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4pXHJcblxyXG4gICAgfVxyXG4iXX0= */\n/*@ sourceURL=C:\\c-chain\\components\\messages\\DecryptBar.js */"));
}

/***/ })

})
//# sourceMappingURL=encrypted.js.c30046745f5858f33199.hot-update.js.map