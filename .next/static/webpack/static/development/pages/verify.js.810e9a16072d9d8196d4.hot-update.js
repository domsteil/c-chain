webpackHotUpdate("static\\development\\pages\\verify.js",{

/***/ "./components/messages/MessageBar.js":
/*!*******************************************!*\
  !*** ./components/messages/MessageBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageBar; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! zlib */ "./node_modules/browserify-zlib/lib/index.js");
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(zlib__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fortmatic */ "./node_modules/fortmatic/lib/fortmatic.js");
/* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fortmatic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _useUrsula__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../useUrsula */ "./components/useUrsula.js");










var web3;
var state;
var captureFile;
var onSubmit;
var uploadFile;
var address;
var fm = new fortmatic__WEBPACK_IMPORTED_MODULE_8___default.a('pk_test_F4970AF6BBC7F0C1');

if (true) {
  web3 = new web3__WEBPACK_IMPORTED_MODULE_7___default.a(fm.getProvider());
}

function useAsyncEndpoint(fn) {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    data: null,
    pending: zlib__WEBPACK_IMPORTED_MODULE_6__["deflateSync"],
    completed: false,
    error: false
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      res = _useState2[0],
      setRes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
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

  uploadFile = Object(_useUrsula__WEBPACK_IMPORTED_MODULE_9__["default"])("http://ec2-18-204-34-34.compute-1.amazonaws.com:5000/upload");

  onSubmit =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var accounts;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.next = 3;
              return web3.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return ipfs.add(_this.state.buffer, function (err, ipfsHash) {
                console.log(err, ipfsHash); //setState by setting ipfsHash to ipfsHash[0].hash

                _this.setState({
                  ipfsHash: ipfsHash[0].hash
                });

                storehash.methods.sendHash(_this.state.ipfsHash).send({
                  from: accounts[0]
                }, function (error, transactionHash) {
                  console.log(transactionHash);

                  _this.setState({
                    transactionHash: transactionHash
                  });
                });
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!req) return;
    setRes({
      data: null,
      pending: true,
      completed: false,
      error: false
    });
    axios__WEBPACK_IMPORTED_MODULE_5___default()(req).then(function (res) {
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

function retrieveData() {
  return us;
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

var publisherAPI = "http://ec2-18-204-34-34.compute-1.amazonaws.com:5000/upload";

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
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Public Key for re-encryption"),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      message = _useState6[0],
      setMessage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      to = _useState8[0],
      setTo = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      who = _useState10[0],
      setWho = _useState10[1];

  var _postPublisherEndpoin = postPublisherEndpoint(),
      _postPublisherEndpoin2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_postPublisherEndpoin, 2),
      newMessage = _postPublisherEndpoin2[0],
      postNewMessage = _postPublisherEndpoin2[1];

  var handleKeyPress = function handleKeyPress(event) {
    if (event.key == 'Enter' || event.keyCode == 13) {
      handlePersonalSign();
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
    className: "jsx-1447952807"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1447952807" + " " + "row"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1447952807" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    id: "ipfs-hash-form",
    className: "jsx-1447952807"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("select", {
    className: "jsx-1447952807" + " " + "policyDropdown"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
    value: "policy-1",
    className: "jsx-1447952807"
  }, "Policy-1"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
    value: "policy-2",
    className: "jsx-1447952807"
  }, "Policy-2")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "file",
    className: "jsx-1447952807" + " " + "ipfsInput"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: "uploadFile",
    className: "jsx-1447952807" + " " + "policyButton"
  }, "Upload"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: "../static/verification.png",
    height: "28",
    width: "28",
    align: "middle",
    alt: "",
    className: "jsx-1447952807" + " " + "center"
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    className: "jsx-1447952807"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    onKeyPress: handleKeyPress,
    className: "jsx-1447952807" + " " + "message-box"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    className: "jsx-1447952807"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: verifyData,
    invert: true,
    className: "jsx-1447952807" + " " + "policyButton"
  }, "Verify"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: "../static/verification.png",
    height: "28",
    width: "28",
    align: "middle",
    alt: "",
    className: "jsx-1447952807" + " " + "center"
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1447952807"
  }, ".column.jsx-1447952807{text-align:center;border-width:1px;list-style:none;padding-bottom:8px;padding-top:8px;margin-right:28px;}.center.jsx-1447952807{margin-left:3px;margin-bottom:10px;}.to.jsx-1447952807{width:260px;padding-bottom:8px;padding-top:8px;border:1px solid #d0d4d9;border-radius:.375rem;-webkit-box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);line-height:20px;min-height:auto;padding-left:0;padding-right:0;}.policyButton.jsx-1447952807{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.policyDropdown.jsx-1447952807{display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.ipfsInput.jsx-1447952807{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:300px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.message-box.jsx-1447952807{padding-bottom:28px;width:800px;overflow:auto;margin:0;min-height:42px;height:38px;max-height:180px;border:2px solid rgba(134,134,134,.7);border-radius:.375rem;outline:0;background:#fff;resize:none;box-shadow:none;color:#1d1c1d;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;padding:9px 30px 10px 50px;\"      }      .login {        color: #FFF;      }      .account {        font-size: 13px;        line-height: 1.91667;        font-weight: 400;        color: #3d464d;        border: 1px solid #bdc4c9;        padding: 3.5px 7px;        border-radius: 4px;        margin-top: 28px;        margin-left: 8px;      }      .row {        flex-direction: column;        margin: -1.5rem 0;        text-align: center;      }      // CSS only media query for tablet      @media screen and (max-width: 960px) {        .row {          flex-direction: column;          margin: -1.5rem 0;        }        .column {          width: 10%;          padding: 1.5rem 0;          text-align: center;          max-width: 100px;        }        .message-box {          padding-bottom: 28px;          width: 100px;          overflow: auto;          margin: 0;           min-height: 42px;           height: 38px;           max-height: 180px;           border: 2px solid rgba(134,134,134,.7);          border-radius: .375rem;          outline: 0;          background: #FFFFFF;          resize: none;          box-shadow: none;          color: #1d1c1d;          -webkit-user-select: auto;          -moz-user-select: auto;          -ms-user-select: auto;          user-select: auto;          padding: 9px 30px 10px 50px;          display: none;        }              };}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxtZXNzYWdlc1xcTWVzc2FnZUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnTG9CLEFBSTJCLEFBU0YsQUFLSixBQWNZLEFBK0JILEFBOEJHLEFBK0JKLFlBekdELElBTEEsRUFURixFQXdISixDQTdEUyxHQS9CSixBQTZEQSxPQTFFRixDQTBHRixHQXhIRSxBQVNsQixPQW1CdUIsQUE2REEsQ0E5QkksR0E4RGhCLENBMUdnQixJQWROLElBeUhILFFBN0ZNLEFBNkRBLEtBOUJKLEVBMURGLENBeUhKLENBM0dVLFdBNEdMLEVBOUZRLEFBNkRBLENBeEZQLEFBMERKLFFBNUM4QyxNQTZDekMsQUErRG1CLElBekh4QyxNQTJCb0IsQUE2REEsU0E3Qk4sU0EvQkUsQUE2REEsR0E3QkYsT0E4RFUsSUE3RkgsQUE2REEsQ0E3QkgsV0EvQ29DLEtBZ0RwQyxDQTZETixDQTdGRSxBQTZEQSxTQWlDSSxHQTdGSixBQTZEQSxFQTdCRyxVQS9CQyxBQTZEQSxDQWdDSixJQTdEYSxRQThEVCxHQTdGQSxBQTZEQSxLQS9FQyxPQWtEbUIsQ0E4RHRCLEdBN0ZDLEFBNkRBLE1BL0VDLEtBZ0hTLElBN0ZBLEFBNkRkLE9BL0VJLElBZ0ZFLElBL0JBLE1BK0RLLENBL0dOLENBa0JvQixlQWpCdEMsS0ErR3VCLGNBN0ZKLE9BOEZBLGdDQWpDRixJQS9CQSxXQWdDTSxJQS9CQSwyQkE5Qk4sT0E4RlksUUE3Rk4sSUE2REosSUEvQkEsV0E4SHJCLEVBOUZzQixJQS9CQSxjQWdDQSxJQS9CQSxPQS9CRCxPQStEQSxJQS9CQSxNQS9CQyxPQStEQyxJQS9CQSxPQS9CRCxRQStEYyxJQS9CQSxNQS9CZixpQkFDRSxHQThERSxJQS9CQSxZQTlCVyxLQThESixJQS9CQSxxQkE5QlAscUJBQ08sa0JBNkRaLElBL0JBLFlBZ0NILElBL0JBLFNBaUNmLElBaENBLGFBL0JrQixnQkFDSCxhQUNmLG9qQ0FpSkQiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXG1lc3NhZ2VzXFxNZXNzYWdlQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBkZWZsYXRlU3luYyB9IGZyb20gJ3psaWInO1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcclxuaW1wb3J0IEZvcnRtYXRpYyBmcm9tICdmb3J0bWF0aWMnO1xyXG5pbXBvcnQgdXNlVXJzdWxhIGZyb20gXCIuLi91c2VVcnN1bGFcIjtcclxuXHJcbnZhciB3ZWIzO1xyXG52YXIgc3RhdGU7XHJcbnZhciBjYXB0dXJlRmlsZTtcclxudmFyIG9uU3VibWl0O1xyXG52YXIgdXBsb2FkRmlsZTtcclxuXHJcbnZhciBhZGRyZXNzO1xyXG5sZXQgZm0gPSBuZXcgRm9ydG1hdGljKCdwa190ZXN0X0Y0OTcwQUY2QkJDN0YwQzEnKTtcclxuXHJcbmlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICB3ZWIzID0gbmV3IFdlYjMoZm0uZ2V0UHJvdmlkZXIoKSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB1c2VBc3luY0VuZHBvaW50KGZuKSB7XHJcbiAgY29uc3QgW3Jlcywgc2V0UmVzXSA9IHVzZVN0YXRlKHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBwZW5kaW5nOiBkZWZsYXRlU3luYyxcclxuICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICBlcnJvcjogZmFsc2UsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3JlcSwgc2V0UmVxXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgaXBmc0hhc2g6bnVsbCxcclxuICAgIGJ1ZmZlcjonJyxcclxuICAgIGV0aEFkZHJlc3M6JycsXHJcbiAgICB0cmFuc2FjdGlvbkhhc2g6JycsXHJcbiAgICB0eFJlY2VpcHQ6ICcnXHJcbiAgfTtcclxuXHJcbi8vVGFrZSBmaWxlIGlucHV0IGZyb20gdXNlclxyXG4gY2FwdHVyZUZpbGUgPShldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cclxuICAgICAgbGV0IHJlYWRlciA9IG5ldyB3aW5kb3cuRmlsZVJlYWRlcigpXHJcbiAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKVxyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gdGhpcy5jb252ZXJ0VG9CdWZmZXIocmVhZGVyKVxyXG4gICAgfTtcclxuXHJcblxyXG51cGxvYWRGaWxlID0gdXNlVXJzdWxhKFwiaHR0cDovL2VjMi0xOC0yMDQtMzQtMzQuY29tcHV0ZS0xLmFtYXpvbmF3cy5jb206NTAwMC91cGxvYWRcIik7XHJcblxyXG5vblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAvL3NhdmUgZG9jdW1lbnQgdG8gSVBGUyxyZXR1cm4gaXRzIGhhc2gjLCBhbmQgc2V0IGhhc2gjIHRvIHN0YXRlXHJcbiAgICAgIGF3YWl0IGlwZnMuYWRkKHRoaXMuc3RhdGUuYnVmZmVyLCAoZXJyLCBpcGZzSGFzaCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycixpcGZzSGFzaCk7XHJcbiAgICAgICAgLy9zZXRTdGF0ZSBieSBzZXR0aW5nIGlwZnNIYXNoIHRvIGlwZnNIYXNoWzBdLmhhc2hcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXBmc0hhc2g6aXBmc0hhc2hbMF0uaGFzaCB9KTtcclxuICAgICAgICBzdG9yZWhhc2gubWV0aG9kcy5zZW5kSGFzaCh0aGlzLnN0YXRlLmlwZnNIYXNoKS5zZW5kKHtcclxuICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgICAgfSwgKGVycm9yLCB0cmFuc2FjdGlvbkhhc2gpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRyYW5zYWN0aW9uSGFzaCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0cmFuc2FjdGlvbkhhc2h9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcmVxKSByZXR1cm47XHJcbiAgICBzZXRSZXMoe1xyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwZW5kaW5nOiB0cnVlLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICB9KTtcclxuICBheGlvcyhyZXEpXHJcbiAgLnRoZW4ocmVzID0+XHJcbiAgICBzZXRSZXMoe1xyXG4gICAgICBkYXRhOiByZXMuZGF0YSxcclxuICAgICAgcGVuZGluZzogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgY29tcGxldGU6IHRydWVcclxuICAgIH0pLFxyXG4gIClcclxuICAuY2F0Y2goKCkgPT5cclxuICAgIHNldFJlcyh7XHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHBlbmRpbmc6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgY29tcGxldGU6IHRydWVcclxuICAgIH0pLFxyXG4gICk7XHJcbn0sIFtyZXFdXHJcbik7XHJcbnJldHVybiBbcmVzLCAoLi4uYXJncykgPT4gc2V0UmVxKGZuKC4uLmFyZ3MpKV07XHJcblxyXG59XHJcblxyXG5sZXQgdmVyaWZ5RGF0YTtcclxuXHJcbmZ1bmN0aW9uIHJldHJpZXZlRGF0YSgpIHtcclxuXHJcbiAgcmV0dXJuIHVzXHJcbn1cclxuXHJcbmxldCBoYW5kbGVQZXJzb25hbFNpZ24gPSAoZSkgPT4ge1xyXG4gIGxldCBtZXNzYWdlID0gbWVzc2FnZTtcclxuICB3ZWIzLmV0aC5nZXRBY2NvdW50cygoZXJyLCBhY2NvdW50cykgPT4ge1xyXG4gICAgaWYgKGVycikgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHZhciBmcm9tID0gYWNjb3VudHNbMF07XHJcbiAgICB2YXIgcGFyYW1zID0gW21lc3NhZ2UsIGZyb21dO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdwZXJzb25hbF9zaWduJztcclxuICAgIHdlYjMuY3VycmVudFByb3ZpZGVyLnNlbmRBc3luYyh7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgZnJvbSxcclxuICAgIH0sIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9yKSByZXR1cm4gY29uc29sZS5lcnJvcihyZXN1bHQuZXJyb3IpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgfSlcclxuICB9KTtcclxufTtcclxuXHJcblxyXG5cclxuY29uc3QgcHVibGlzaGVyQVBJID0gXCJodHRwOi8vZWMyLTE4LTIwNC0zNC0zNC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTo1MDAwL3VwbG9hZFwiO1xyXG5cclxuZnVuY3Rpb24gcG9zdFB1Ymxpc2hlckVuZHBvaW50KCkge1xyXG4gIFxyXG4gIHJldHVybiB1c2VBc3luY0VuZHBvaW50KGRhdGEgPT4gKHtcclxuICB1cmw6IHB1Ymxpc2hlckFQSSxcclxuICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gIGRhdGFcclxufSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdlQmFyKHByb3BzKSB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJQdWJsaWMgS2V5IGZvciByZS1lbmNyeXB0aW9uXCIpO1xyXG4gIGNvbnN0IFt0bywgc2V0VG9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3dobywgc2V0V2hvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBwb3N0TmV3TWVzc2FnZV0gPSBwb3N0UHVibGlzaGVyRW5kcG9pbnQoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZXZlbnQpID0+IHtcclxuICBpZihldmVudC5rZXkgPT0gJ0VudGVyJ3x8IGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcclxuICAgIGhhbmRsZVBlcnNvbmFsU2lnbigpO1xyXG4gIH1cclxufVxyXG5cclxucmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxmb3JtIGlkPVwiaXBmcy1oYXNoLWZvcm1cIj5cclxuICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInBvbGljeURyb3Bkb3duXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicG9saWN5LTFcIj5Qb2xpY3ktMTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvbGljeS0yXCI+UG9saWN5LTI8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaXBmc0lucHV0XCJcclxuICAgICAgICB0eXBlID0gXCJmaWxlXCJcclxuICAgICAgXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBvbGljeUJ1dHRvblwiIG9uQ2xpY2s9XCJ1cGxvYWRGaWxlXCI+IFxyXG4gICAgICAgIFVwbG9hZFxyXG4gICAgICAgIDwvYnV0dG9uPjxpbWcgY2xhc3NOYW1lPVwiY2VudGVyXCIgc3JjPVwiLi4vc3RhdGljL3ZlcmlmaWNhdGlvbi5wbmdcIiBoZWlnaHQ9XCIyOFwiIHdpZHRoPVwiMjhcIiBhbGlnbj1cIm1pZGRsZVwiIGFsdD1cIlwiLz5cclxuICAgICAgICBcclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibWVzc2FnZS1ib3hcIiB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9e2UgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfSAgLz4gXHJcbiAgICAgICAgPGE+PGJ1dHRvbiBvbkNsaWNrPXt2ZXJpZnlEYXRhfSBjbGFzc05hbWU9XCJwb2xpY3lCdXR0b25cIiBpbnZlcnQgPlZlcmlmeTwvYnV0dG9uPjxpbWcgY2xhc3NOYW1lPVwiY2VudGVyXCIgc3JjPVwiLi4vc3RhdGljL3ZlcmlmaWNhdGlvbi5wbmdcIiBoZWlnaHQ9XCIyOFwiIHdpZHRoPVwiMjhcIiBhbGlnbj1cIm1pZGRsZVwiIGFsdD1cIlwiLz48L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudG8ge1xyXG4gICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDRkOTsgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgcmdiYSgxMDAsMTIxLDE0MywwLjEyMik7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCByZ2JhKDEwMCwxMjEsMTQzLDAuMTIyKTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvOyBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7IFxyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wb2xpY3lCdXR0b24ge1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucG9saWN5RHJvcGRvd24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICAgIC5pcGZzSW5wdXQge1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICAubWVzc2FnZS1ib3gge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyOHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MDBweCA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwOyBcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MnB4OyBcclxuICAgICAgICBoZWlnaHQ6IDM4cHg7IFxyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4OyBcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEzNCwxMzQsMTM0LC43KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAuMzc1cmVtO1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzFkMWMxZDtcclxuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDlweCAzMHB4IDEwcHggNTBweDtcIlxyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9naW4ge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWNjb3VudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjkxNjY3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6ICMzZDQ2NGQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYzRjOTtcclxuICAgICAgICBwYWRkaW5nOiAzLjVweCA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJvdyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lc3NhZ2UtYm94IHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyOHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICBtYXJnaW46IDA7IFxyXG4gICAgICAgICAgbWluLWhlaWdodDogNDJweDsgXHJcbiAgICAgICAgICBoZWlnaHQ6IDM4cHg7IFxyXG4gICAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7IFxyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMzQsMTM0LDEzNCwuNyk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMzc1cmVtO1xyXG4gICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMxZDFjMWQ7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogYXV0bztcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogOXB4IDMwcHggMTBweCA1MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4pXHJcblxyXG4gICAgfVxyXG4iXX0= */\n/*@ sourceURL=C:\\c-chain\\components\\messages\\MessageBar.js */"));
}

/***/ })

})
//# sourceMappingURL=verify.js.810e9a16072d9d8196d4.hot-update.js.map