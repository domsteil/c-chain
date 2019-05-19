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
    className: "jsx-1606110437"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1606110437" + " " + "row"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1606110437" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    id: "ipfs-hash-form",
    className: "jsx-1606110437"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    className: "jsx-1606110437" + " " + "policyDropdown"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "policy-1",
    className: "jsx-1606110437"
  }, "Policy-1"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "policy-2",
    className: "jsx-1606110437"
  }, "Policy-2")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "file",
    className: "jsx-1606110437" + " " + "ipfsInput"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: "uploadFile",
    className: "jsx-1606110437" + " " + "policyButton"
  }, "Upload"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/verification.png",
    height: "28",
    width: "28",
    align: "middle",
    alt: "",
    className: "jsx-1606110437" + " " + "center"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-1606110437"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-1606110437"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    value: hash,
    onChange: function onChange(e) {
      return setHash(e.target.value);
    },
    onKeyPress: handleKeyPress,
    className: "jsx-1606110437" + " " + "hash-box"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-1606110437"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-1606110437"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    onKeyPress: handleKeyPress,
    className: "jsx-1606110437" + " " + "message-box"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-1606110437"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: decryptData,
    invert: true,
    className: "jsx-1606110437" + " " + "policyButton"
  }, "Decrypt"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/verification.png",
    height: "28",
    width: "28",
    align: "middle",
    alt: "",
    className: "jsx-1606110437" + " " + "center"
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1606110437"
  }, ".column.jsx-1606110437{text-align:center;border-width:1px;list-style:none;padding-bottom:8px;padding-top:8px;margin-right:28px;}.center.jsx-1606110437{margin-left:3px;margin-bottom:10px;}.to.jsx-1606110437{width:260px;padding-bottom:8px;padding-top:8px;border:1px solid #d0d4d9;border-radius:.375rem;-webkit-box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);line-height:20px;min-height:auto;padding-left:0;padding-right:0;}.policyButton.jsx-1606110437{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.policyDropdown.jsx-1606110437{display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.ipfsInput.jsx-1606110437{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:300px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.message-box.jsx-1606110437{padding-bottom:28px;width:800px;overflow:auto;margin:0;min-height:42px;height:38px;max-height:180px;border:2px solid rgba(134,134,134,.7);border-radius:.375rem;outline:0;background:#fff;resize:none;box-shadow:none;color:#1d1c1d;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;padding:9px 30px 10px 50px;\"      }      .hash-box {        padding-bottom: 28px;        width: 700px ;        overflow: auto;        margin: 0;         min-height: 42px;         height: 38px;         max-height: 180px;         border: 2px solid rgba(134,134,134,.7);        border-radius: .375rem;        outline: 0;        background: #fff;        resize: none;        box-shadow: none;        color: #1d1c1d;        -webkit-user-select: auto;        -moz-user-select: auto;        -ms-user-select: auto;        user-select: auto;        padding: 9px 30px 10px 50px;\";}.login.jsx-1606110437{color:#FFF;}.account.jsx-1606110437{font-size:13px;line-height:1.91667;font-weight:400;color:#3d464d;border:1px solid #bdc4c9;padding:3.5px 7px;border-radius:4px;margin-top:28px;margin-left:8px;}.row.jsx-1606110437{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;text-align:center;}@media screen and (max-width:960px){.row.jsx-1606110437{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;}.column.jsx-1606110437{width:10%;padding:1.5rem 0;text-align:center;max-width:100px;}.message-box.jsx-1606110437{padding-bottom:28px;width:100px;overflow:auto;margin:0;min-height:42px;height:38px;max-height:180px;border:2px solid rgba(134,134,134,.7);border-radius:.375rem;outline:0;background:#FFFFFF;resize:none;box-shadow:none;color:#1d1c1d;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;padding:9px 30px 10px 50px;display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxtZXNzYWdlc1xcRGVjcnlwdEJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSW9CLEFBSTJCLEFBU0YsQUFLSixBQWNZLEFBK0JILEFBOEJHLEFBK0JKLEFBNkNULEFBSUksQUFZTyxBQVFFLEFBSVosQUFPVSxVQU5ILENBNUJyQixDQXZKcUIsR0EySkMsQ0FoS0QsRUFURixFQXdISixBQWdGQyxDQTdJUSxHQS9CSixBQTZEQSxHQXlHRSxJQW5MSixDQTBHRixBQWdGRSxHQXhNQSxBQVNsQixBQWdLa0IsT0E3SUssQUE2REEsQ0E5QkksRUF1SVAsQ0F6RVQsQUFnRkUsQ0ExTGMsSUFkTixBQXlLTCxJQWhERSxBQWdGRSxNQVBsQixFQXRLc0IsQUE2REEsRUFpRkcsR0EvR1AsRUExREYsQ0F5SEosQUFnRkUsQ0EzTFEsTUFvS0wsQUFRRSxLQWhFRixBQWdGRSxFQTlLTSxBQTZEQSxDQXhGUCxBQTBESixJQStHSSxJQTNKMEMsQ0FvSzFDLEFBUWxCLEtBL0htQixBQStEbUIsQUFnRkUsSUF6TTFDLElBeUtvQixFQTlJQSxBQTZEQSxHQTBGcEIsTUF2SGMsT0ErR0ksRUE5SUYsQUE2REEsR0E3QkYsT0E4RFUsQUFnRkUsSUE3S0wsQUE2REEsQUFpRkgsQ0E5R0EsV0EvQ29DLElBOEp0RCxDQTlHa0IsQ0E2RE4sQUFnRkUsQ0E3S0EsQUE2REEsU0FpQ0ksQUFnRkssR0E3S1QsQUE2REEsRUE3QkcsVUEvQkMsQUE2REEsQ0FnQ0osR0FnRkUsQ0E3SVcsUUE4RFQsR0E3RkEsQUE2REEsQUFnSEUsS0EvTEQsT0FrRG1CLENBOER0QixHQTdGQyxBQTZEQSxBQWdIQyxNQS9MQSxLQWdIUyxHQWdGRSxDQTdLRixBQTZEZCxPQS9FSSxJQWdGRSxJQS9CQSxNQStESyxDQS9HTixDQWtCb0IsQ0E2S1osY0E5TDFCLEtBK0d1QixHQWdGRSxXQTdLTixPQThGQSxHQWdGRSw2QkFqSEosSUEvQkEsV0FnQ00sSUEvQkEsMkJBOUJOLE9BOEZZLEdBZ0ZFLEtBN0tSLElBNkRKLElBL0JBLFdBc0ZwQixFQXREcUIsQ0FnSEgsR0EvSUcsVUFnSmxCLElBaEhrQixJQS9CQSxPQS9CRCxPQStEQSxJQS9CQSxNQS9CQyxPQStEQyxJQS9CQSxPQS9CRCxRQStEYyxJQS9CQSxNQS9CZixpQkFDRSxHQThERSxJQS9CQSxZQTlCVyxLQThESixJQS9CQSxxQkE5QlAscUJBQ08sa0JBNkRaLElBL0JBLFlBZ0NILElBL0JBLFNBaUNmLElBaENBLGFBL0JrQixnQkFDSCxhQUNmLHVSQXlHQSIsImZpbGUiOiJDOlxcYy1jaGFpblxcY29tcG9uZW50c1xcbWVzc2FnZXNcXERlY3J5cHRCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGRlZmxhdGVTeW5jIH0gZnJvbSAnemxpYic7XHJcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5pbXBvcnQgRm9ydG1hdGljIGZyb20gJ2ZvcnRtYXRpYyc7XHJcbmltcG9ydCB1c2VVcnN1bGEgZnJvbSBcIi4uL3VzZVVyc3VsYVwiO1xyXG5pbXBvcnQgdXNlRmV0Y2ggZnJvbSBcIi4uL3VzZUZldGNoXCI7XHJcblxyXG52YXIgd2ViMztcclxudmFyIHN0YXRlO1xyXG52YXIgY2FwdHVyZUZpbGU7XHJcbnZhciBvblN1Ym1pdDtcclxudmFyIHVwbG9hZEZpbGU7XHJcbnZhciBoYXNoO1xyXG5cclxudmFyIGFkZHJlc3M7XHJcblxyXG5cclxuZnVuY3Rpb24gdXNlQXN5bmNFbmRwb2ludChmbikge1xyXG4gIGNvbnN0IFtyZXMsIHNldFJlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBkYXRhOiBudWxsLFxyXG4gICAgcGVuZGluZzogZGVmbGF0ZVN5bmMsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgZXJyb3I6IGZhbHNlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtyZXEsIHNldFJlcV0gPSB1c2VTdGF0ZSgpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJlcSkgcmV0dXJuO1xyXG4gICAgc2V0UmVzKHtcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGVuZGluZzogdHJ1ZSxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgYXhpb3MocmVxKVxyXG4gIC50aGVuKHJlcyA9PlxyXG4gICAgc2V0UmVzKHtcclxuICAgICAgZGF0YTogcmVzLmRhdGEsXHJcbiAgICAgIHBlbmRpbmc6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgIGNvbXBsZXRlOiB0cnVlXHJcbiAgICB9KSxcclxuICApXHJcbiAgLmNhdGNoKCgpID0+XHJcbiAgICBzZXRSZXMoe1xyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwZW5kaW5nOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgIGNvbXBsZXRlOiB0cnVlXHJcbiAgICB9KSxcclxuICApO1xyXG59LCBbcmVxXVxyXG4pO1xyXG5yZXR1cm4gW3JlcywgKC4uLmFyZ3MpID0+IHNldFJlcShmbiguLi5hcmdzKSldO1xyXG5cclxufVxyXG5cclxubGV0IGhhbmRsZVBlcnNvbmFsU2lnbiA9IChlKSA9PiB7XHJcbiAgbGV0IG1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gIHdlYjMuZXRoLmdldEFjY291bnRzKChlcnIsIGFjY291bnRzKSA9PiB7XHJcbiAgICBpZiAoZXJyKSByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgdmFyIGZyb20gPSBhY2NvdW50c1swXTtcclxuICAgIHZhciBwYXJhbXMgPSBbbWVzc2FnZSwgZnJvbV07XHJcbiAgICB2YXIgbWV0aG9kID0gJ3BlcnNvbmFsX3NpZ24nO1xyXG4gICAgd2ViMy5jdXJyZW50UHJvdmlkZXIuc2VuZEFzeW5jKHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG1ldGhvZCxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICBmcm9tLFxyXG4gICAgfSwgKGVyciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHJldHVybiBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHJldHVybiBjb25zb2xlLmVycm9yKHJlc3VsdC5lcnJvcik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB9KVxyXG4gIH0pO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGRlY3J5cHRBUEkgPSBcImh0dHA6Ly9lYzItMTgtMjA0LTM0LTM0LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tOjUwMDAvZGVjcnlwdC9cIjtcclxuXHJcbmZ1bmN0aW9uIGRlY3J5cHREYXRhKCkge1xyXG4gIFxyXG4gIHJldHVybiB1c2VBc3luY0VuZHBvaW50KGRhdGEgPT4gKHtcclxuICB1cmw6IGRlY3J5cHRBUEksXHJcbiAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIGRhdGFcclxufSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWNyeXB0QmFyKHByb3BzKSB7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlB1YmxpYyBLZXkgZm9yIHJlLWVuY3J5cHRpb25cIik7XHJcbiAgY29uc3QgW2hhc2gsIHNldEhhc2hdID0gdXNlU3RhdGUoXCJIYXNoXCIpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgaWYoZXZlbnQua2V5ID09ICdFbnRlcid8fCBldmVudC5rZXlDb2RlID09IDEzKSB7XHJcbiAgICBkZWNyeXB0RGF0YSgpO1xyXG4gIH1cclxufVxyXG5cclxucmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxmb3JtIGlkPVwiaXBmcy1oYXNoLWZvcm1cIj5cclxuICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInBvbGljeURyb3Bkb3duXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicG9saWN5LTFcIj5Qb2xpY3ktMTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvbGljeS0yXCI+UG9saWN5LTI8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaXBmc0lucHV0XCJcclxuICAgICAgICB0eXBlID0gXCJmaWxlXCJcclxuICAgICAgXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBvbGljeUJ1dHRvblwiIG9uQ2xpY2s9XCJ1cGxvYWRGaWxlXCI+IFxyXG4gICAgICAgIFVwbG9hZFxyXG4gICAgICAgIDwvYnV0dG9uPjxpbWcgY2xhc3NOYW1lPVwiY2VudGVyXCIgc3JjPVwiLi4vc3RhdGljL3ZlcmlmaWNhdGlvbi5wbmdcIiBoZWlnaHQ9XCIyOFwiIHdpZHRoPVwiMjhcIiBhbGlnbj1cIm1pZGRsZVwiIGFsdD1cIlwiLz5cclxuICAgICAgICBcclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJoYXNoLWJveFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2hhc2h9IG9uQ2hhbmdlPXtlID0+IHNldEhhc2goZS50YXJnZXQudmFsdWUpfSBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc30gIC8+IFxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibWVzc2FnZS1ib3hcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9ICAvPiBcclxuICAgICAgICA8YT48YnV0dG9uIG9uQ2xpY2s9e2RlY3J5cHREYXRhfSBjbGFzc05hbWU9XCJwb2xpY3lCdXR0b25cIiBpbnZlcnQgPkRlY3J5cHQ8L2J1dHRvbj48aW1nIGNsYXNzTmFtZT1cImNlbnRlclwiIHNyYz1cIi4uL3N0YXRpYy92ZXJpZmljYXRpb24ucG5nXCIgaGVpZ2h0PVwiMjhcIiB3aWR0aD1cIjI4XCIgYWxpZ249XCJtaWRkbGVcIiBhbHQ9XCJcIi8+PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRvIHtcclxuICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQ0ZDk7IFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwIHJnYmEoMTAwLDEyMSwxNDMsMC4xMjIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgcmdiYSgxMDAsMTIxLDE0MywwLjEyMik7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogYXV0bzsgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwOyBcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucG9saWN5QnV0dG9uIHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnBvbGljeURyb3Bkb3duIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgICAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICAuaXBmc0lucHV0IHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1lc3NhZ2UtYm94IHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICAgICAgICB3aWR0aDogODAwcHggO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMDsgXHJcbiAgICAgICAgbWluLWhlaWdodDogNDJweDsgXHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4OyBcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDsgXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMzQsMTM0LDEzNCwuNyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMxZDFjMWQ7XHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICB1c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiA5cHggMzBweCAxMHB4IDUwcHg7XCJcclxuICAgICAgfVxyXG5cclxuICAgICAgLmhhc2gtYm94IHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICAgICAgICB3aWR0aDogNzAwcHggO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMDsgXHJcbiAgICAgICAgbWluLWhlaWdodDogNDJweDsgXHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4OyBcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDsgXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMzQsMTM0LDEzNCwuNyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMxZDFjMWQ7XHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICB1c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiA5cHggMzBweCAxMHB4IDUwcHg7XCJcclxuICAgICAgfVxyXG4gICAgICBcclxuXHJcbiAgICAgIC5sb2dpbiB7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY2NvdW50IHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOTE2Njc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogIzNkNDY0ZDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRjNGM5O1xyXG4gICAgICAgIHBhZGRpbmc6IDMuNXB4IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucm93IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIHRhYmxldFxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVzc2FnZS1ib3gge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI4cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIG1hcmdpbjogMDsgXHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0MnB4OyBcclxuICAgICAgICAgIGhlaWdodDogMzhweDsgXHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDsgXHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEzNCwxMzQsMTM0LC43KTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XHJcbiAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzFkMWMxZDtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiA5cHggMzBweCAxMHB4IDUwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbilcclxuXHJcbiAgICB9XHJcbiJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\messages\\DecryptBar.js */"));
}

/***/ })

})
//# sourceMappingURL=encrypted.js.5edf494cff829cca89a8.hot-update.js.map