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
  }, ".column.jsx-1447952807{text-align:center;border-width:1px;list-style:none;padding-bottom:8px;padding-top:8px;margin-right:28px;}.center.jsx-1447952807{margin-left:3px;margin-bottom:10px;}.to.jsx-1447952807{width:260px;padding-bottom:8px;padding-top:8px;border:1px solid #d0d4d9;border-radius:.375rem;-webkit-box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);line-height:20px;min-height:auto;padding-left:0;padding-right:0;}.policyButton.jsx-1447952807{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.policyDropdown.jsx-1447952807{display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.ipfsInput.jsx-1447952807{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:300px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.message-box.jsx-1447952807{padding-bottom:28px;width:800px;overflow:auto;margin:0;min-height:42px;height:38px;max-height:180px;border:2px solid rgba(134,134,134,.7);border-radius:.375rem;outline:0;background:#fff;resize:none;box-shadow:none;color:#1d1c1d;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;padding:9px 30px 10px 50px;\"      }      .login {        color: #FFF;      }      .account {        font-size: 13px;        line-height: 1.91667;        font-weight: 400;        color: #3d464d;        border: 1px solid #bdc4c9;        padding: 3.5px 7px;        border-radius: 4px;        margin-top: 28px;        margin-left: 8px;      }      .row {        flex-direction: column;        margin: -1.5rem 0;        text-align: center;      }      // CSS only media query for tablet      @media screen and (max-width: 960px) {        .row {          flex-direction: column;          margin: -1.5rem 0;        }        .column {          width: 10%;          padding: 1.5rem 0;          text-align: center;          max-width: 100px;        }        .message-box {          padding-bottom: 28px;          width: 100px;          overflow: auto;          margin: 0;           min-height: 42px;           height: 38px;           max-height: 180px;           border: 2px solid rgba(134,134,134,.7);          border-radius: .375rem;          outline: 0;          background: #FFFFFF;          resize: none;          box-shadow: none;          color: #1d1c1d;          -webkit-user-select: auto;          -moz-user-select: auto;          -ms-user-select: auto;          user-select: auto;          padding: 9px 30px 10px 50px;          display: none;        }              };}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxtZXNzYWdlc1xcRGVjcnlwdEJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSW9CLEFBSTJCLEFBU0YsQUFLSixBQWNZLEFBK0JILEFBOEJHLEFBK0JKLFlBekdELElBTEEsRUFURixFQXdISixDQTdEUyxHQS9CSixBQTZEQSxPQTFFRixDQTBHRixHQXhIRSxBQVNsQixPQW1CdUIsQUE2REEsQ0E5QkksR0E4RGhCLENBMUdnQixJQWROLElBeUhILFFBN0ZNLEFBNkRBLEtBOUJKLEVBMURGLENBeUhKLENBM0dVLFdBNEdMLEVBOUZRLEFBNkRBLENBeEZQLEFBMERKLFFBNUM4QyxNQTZDekMsQUErRG1CLElBekh4QyxNQTJCb0IsQUE2REEsU0E3Qk4sU0EvQkUsQUE2REEsR0E3QkYsT0E4RFUsSUE3RkgsQUE2REEsQ0E3QkgsV0EvQ29DLEtBZ0RwQyxDQTZETixDQTdGRSxBQTZEQSxTQWlDSSxHQTdGSixBQTZEQSxFQTdCRyxVQS9CQyxBQTZEQSxDQWdDSixJQTdEYSxRQThEVCxHQTdGQSxBQTZEQSxLQS9FQyxPQWtEbUIsQ0E4RHRCLEdBN0ZDLEFBNkRBLE1BL0VDLEtBZ0hTLElBN0ZBLEFBNkRkLE9BL0VJLElBZ0ZFLElBL0JBLE1BK0RLLENBL0dOLENBa0JvQixlQWpCdEMsS0ErR3VCLGNBN0ZKLE9BOEZBLGdDQWpDRixJQS9CQSxXQWdDTSxJQS9CQSwyQkE5Qk4sT0E4RlksUUE3Rk4sSUE2REosSUEvQkEsV0E4SHJCLEVBOUZzQixJQS9CQSxjQWdDQSxJQS9CQSxPQS9CRCxPQStEQSxJQS9CQSxNQS9CQyxPQStEQyxJQS9CQSxPQS9CRCxRQStEYyxJQS9CQSxNQS9CZixpQkFDRSxHQThERSxJQS9CQSxZQTlCVyxLQThESixJQS9CQSxxQkE5QlAscUJBQ08sa0JBNkRaLElBL0JBLFlBZ0NILElBL0JBLFNBaUNmLElBaENBLGFBL0JrQixnQkFDSCxhQUNmLG9qQ0FpSkQiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXG1lc3NhZ2VzXFxEZWNyeXB0QmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBkZWZsYXRlU3luYyB9IGZyb20gJ3psaWInO1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcclxuaW1wb3J0IEZvcnRtYXRpYyBmcm9tICdmb3J0bWF0aWMnO1xyXG5pbXBvcnQgdXNlVXJzdWxhIGZyb20gXCIuLi91c2VVcnN1bGFcIjtcclxuaW1wb3J0IHVzZUZldGNoIGZyb20gXCIuLi91c2VGZXRjaFwiO1xyXG5cclxudmFyIHdlYjM7XHJcbnZhciBzdGF0ZTtcclxudmFyIGNhcHR1cmVGaWxlO1xyXG52YXIgb25TdWJtaXQ7XHJcbnZhciB1cGxvYWRGaWxlO1xyXG52YXIgaGFzaDtcclxuXHJcbnZhciBhZGRyZXNzO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHVzZUFzeW5jRW5kcG9pbnQoZm4pIHtcclxuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIHBlbmRpbmc6IGRlZmxhdGVTeW5jLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIGVycm9yOiBmYWxzZSxcclxuICB9KTtcclxuICBjb25zdCBbcmVxLCBzZXRSZXFdID0gdXNlU3RhdGUoKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFyZXEpIHJldHVybjtcclxuICAgIHNldFJlcyh7XHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHBlbmRpbmc6IHRydWUsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIGF4aW9zKHJlcSlcclxuICAudGhlbihyZXMgPT5cclxuICAgIHNldFJlcyh7XHJcbiAgICAgIGRhdGE6IHJlcy5kYXRhLFxyXG4gICAgICBwZW5kaW5nOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICBjb21wbGV0ZTogdHJ1ZVxyXG4gICAgfSksXHJcbiAgKVxyXG4gIC5jYXRjaCgoKSA9PlxyXG4gICAgc2V0UmVzKHtcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGVuZGluZzogZmFsc2UsXHJcbiAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICBjb21wbGV0ZTogdHJ1ZVxyXG4gICAgfSksXHJcbiAgKTtcclxufSwgW3JlcV1cclxuKTtcclxucmV0dXJuIFtyZXMsICguLi5hcmdzKSA9PiBzZXRSZXEoZm4oLi4uYXJncykpXTtcclxuXHJcbn1cclxuXHJcbmxldCBoYW5kbGVQZXJzb25hbFNpZ24gPSAoZSkgPT4ge1xyXG4gIGxldCBtZXNzYWdlID0gbWVzc2FnZTtcclxuICB3ZWIzLmV0aC5nZXRBY2NvdW50cygoZXJyLCBhY2NvdW50cykgPT4ge1xyXG4gICAgaWYgKGVycikgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHZhciBmcm9tID0gYWNjb3VudHNbMF07XHJcbiAgICB2YXIgcGFyYW1zID0gW21lc3NhZ2UsIGZyb21dO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdwZXJzb25hbF9zaWduJztcclxuICAgIHdlYjMuY3VycmVudFByb3ZpZGVyLnNlbmRBc3luYyh7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgZnJvbSxcclxuICAgIH0sIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9yKSByZXR1cm4gY29uc29sZS5lcnJvcihyZXN1bHQuZXJyb3IpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgfSlcclxuICB9KTtcclxufTtcclxuXHJcblxyXG5jb25zdCBkZWNyeXB0QVBJID0gXCJodHRwOi8vZWMyLTE4LTIwNC0zNC0zNC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTo1MDAwL2RlY3J5cHQvXCI7XHJcblxyXG5mdW5jdGlvbiBkZWNyeXB0RGF0YSgpIHtcclxuICBcclxuICByZXR1cm4gdXNlQXN5bmNFbmRwb2ludChkYXRhID0+ICh7XHJcbiAgdXJsOiBkZWNyeXB0QVBJLFxyXG4gIG1ldGhvZDogXCJHRVRcIixcclxuICBkYXRhXHJcbn0pKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVjcnlwdEJhcihwcm9wcykge1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJQdWJsaWMgS2V5IGZvciByZS1lbmNyeXB0aW9uXCIpO1xyXG4gIGNvbnN0IFtoYXNoLCBzZXRIYXNoXSA9IHVzZVN0YXRlKFwiSGFzaFwiKVxyXG5cclxuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChldmVudCkgPT4ge1xyXG4gIGlmKGV2ZW50LmtleSA9PSAnRW50ZXInfHwgZXZlbnQua2V5Q29kZSA9PSAxMykge1xyXG4gICAgZGVjcnlwdERhdGEoKTtcclxuICB9XHJcbn1cclxuXHJcbnJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8Zm9ybSBpZD1cImlwZnMtaGFzaC1mb3JtXCI+XHJcbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJwb2xpY3lEcm9wZG93blwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvbGljeS0xXCI+UG9saWN5LTE8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwb2xpY3ktMlwiPlBvbGljeS0yPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlwZnNJbnB1dFwiXHJcbiAgICAgICAgdHlwZSA9IFwiZmlsZVwiXHJcbiAgICAgIFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwb2xpY3lCdXR0b25cIiBvbkNsaWNrPVwidXBsb2FkRmlsZVwiPiBcclxuICAgICAgICBVcGxvYWRcclxuICAgICAgICA8L2J1dHRvbj48aW1nIGNsYXNzTmFtZT1cImNlbnRlclwiIHNyYz1cIi4uL3N0YXRpYy92ZXJpZmljYXRpb24ucG5nXCIgaGVpZ2h0PVwiMjhcIiB3aWR0aD1cIjI4XCIgYWxpZ249XCJtaWRkbGVcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibWVzc2FnZS1ib3hcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtoYXNofSBvbkNoYW5nZT17ZSA9PiBzZXRIYXNoKGUudGFyZ2V0LnZhbHVlKX0gb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9ICAvPiBcclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm94XCIgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfSAgLz4gXHJcbiAgICAgICAgPGE+PGJ1dHRvbiBvbkNsaWNrPXtkZWNyeXB0RGF0YX0gY2xhc3NOYW1lPVwicG9saWN5QnV0dG9uXCIgaW52ZXJ0ID5EZWNyeXB0PC9idXR0b24+PGltZyBjbGFzc05hbWU9XCJjZW50ZXJcIiBzcmM9XCIuLi9zdGF0aWMvdmVyaWZpY2F0aW9uLnBuZ1wiIGhlaWdodD1cIjI4XCIgd2lkdGg9XCIyOFwiIGFsaWduPVwibWlkZGxlXCIgYWx0PVwiXCIvPjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAuY29sdW1uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2VudGVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50byB7XHJcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDBkNGQ5OyBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAuMzc1cmVtO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCByZ2JhKDEwMCwxMjEsMTQzLDAuMTIyKTtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwIHJnYmEoMTAwLDEyMSwxNDMsMC4xMjIpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87IFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDsgXHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnBvbGljeUJ1dHRvbiB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgICAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wb2xpY3lEcm9wZG93biB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgICAgLmlwZnNJbnB1dCB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgICAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tZXNzYWdlLWJveCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI4cHg7XHJcbiAgICAgICAgd2lkdGg6IDgwMHB4IDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBtYXJnaW46IDA7IFxyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQycHg7IFxyXG4gICAgICAgIGhlaWdodDogMzhweDsgXHJcbiAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7IFxyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTM0LDEzNCwxMzQsLjcpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjMWQxYzFkO1xyXG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogOXB4IDMwcHggMTBweCA1MHB4O1wiXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sb2dpbiB7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY2NvdW50IHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOTE2Njc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogIzNkNDY0ZDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRjNGM5O1xyXG4gICAgICAgIHBhZGRpbmc6IDMuNXB4IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucm93IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIHRhYmxldFxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVzc2FnZS1ib3gge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI4cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIG1hcmdpbjogMDsgXHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0MnB4OyBcclxuICAgICAgICAgIGhlaWdodDogMzhweDsgXHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDsgXHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEzNCwxMzQsMTM0LC43KTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XHJcbiAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzFkMWMxZDtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiA5cHggMzBweCAxMHB4IDUwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbilcclxuXHJcbiAgICB9XHJcbiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\messages\\DecryptBar.js */"));
}

/***/ })

})
//# sourceMappingURL=encrypted.js.a5057d4f846021b387bf.hot-update.js.map