webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/upload/FileUpload.js":
/*!*****************************************!*\
  !*** ./components/upload/FileUpload.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\c-chain\\components\\upload\\FileUpload.js";




var SimpleReactFileUpload =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SimpleReactFileUpload, _React$Component);

  function SimpleReactFileUpload(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SimpleReactFileUpload);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SimpleReactFileUpload).call(this, props));
    _this.state = {
      file: null,
      policy: '',
      message: ''
    };
    _this.onFormSubmit = _this.onFormSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handlePolicyChange = _this.handlePolicyChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.fileUpload = _this.fileUpload.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SimpleReactFileUpload, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      var _this2 = this;

      e.preventDefault(); // Stop form submit

      this.fileUpload(this.state.file).then(function (response) {
        _this2.setState({
          message: 'Success.'
        });

        console.log(response.data);
      });
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState({
        file: e.target.files[0]
      });
    }
  }, {
    key: "handlePolicyChange",
    value: function handlePolicyChange(e) {
      this.setState({
        policy: e.target.value
      });
    }
  }, {
    key: "fileUpload",
    value: function fileUpload(file) {
      var policy = this.state.policy;
      var url = "https://app.triplecheck.network/upload";
      var formData = new FormData();
      formData.append('policy', policy);
      formData.append('file', file);
      var config = {
        headers: {
          'content-type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE"
        }
      };
      return Object(axios__WEBPACK_IMPORTED_MODULE_8__["post"])(url, formData, config);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "fileUploadSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.onFormSubmit,
        className: "jsx-203795435" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        className: "jsx-203795435",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "file",
        onChange: this.onChange,
        className: "jsx-203795435",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        value: this.state.policy,
        onChange: this.handlePolicyChange,
        className: "jsx-203795435" + " " + "policyDropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "policy1",
        className: "jsx-203795435",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Policy 1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "policy2",
        className: "jsx-203795435",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Policy 2")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        className: "jsx-203795435" + " " + "policyButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Upload"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "jsx-203795435" + " " + "successMessage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, this.state.message), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "203795435",
        __self: this
      }, ".fileUploadSection.jsx-203795435{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;text-align:center;margin-left:10px;overflow:hidden;width:300px;align:center;}.successMessage.jsx-203795435{font-color:#50E3C2;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:16px;font-weight:normal;margin-right:30px;padding-left:5px;text-align:center;}.center.jsx-203795435{align:center;padding-left:700px;}.policyButton.jsx-203795435{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;text-color:#000;line-height:0;white-space:nowrap;width:100px;height:30px;margin-left:3px;padding-l font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;margin-bottom:8px;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.policyDropdown.jsx-203795435{display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:8px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.Content.jsx-203795435{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-top:16px;box-sizing:border-box;width:100%;}.Files.jsx-203795435{margin-left:32px;color:#FFF;font-color:#FFF;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;justify-items:flex-start;-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;}.Actions.jsx-203795435{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;width:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:32px;}.Title.jsx-203795435{margin-bottom:32px;color:#FFF;}.Filename.jsx-203795435{margin-bottom:8px;padding-right:100px;font-size:12px;color:#FFF;}.Row.jsx-203795435{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:50px;padding:8px;overflow:hidden;box-sizing:border-box;}.CheckIcon.jsx-203795435{opacity:0.5;margin-left:32px;}.ProgressWrapper.jsx-203795435{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}button.jsx-203795435{font-family:\"Roboto medium\",sans-serif;font-size:14px;display:inline-block;height:36px;min-width:88px;padding:6px 16px;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;border-radius:2px;background:rgba(103,58,183,1);color:#fff;outline:0;}button.jsx-203795435:disabled{background:rgb(189,189,189);cursor:default;}@media screen and (max-width:960px){.row.jsx-203795435{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;padding-bottom:8px;padding-top:8px;padding-left:28px;}.column.jsx-203795435{width:100%;text-align:center;max-width:350px;padding-top:8px;padding-bottom:8px;margin-bottom:28px;}.center.jsx-203795435{text-align:center;}.column2.jsx-203795435{list-style:none;display:none;}}.Upload.jsx-203795435{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;text-align:left;overflow:hidden;width:300px;align:center;margin-left:850px;}.policyButton.jsx-203795435{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;text-color:#000;line-height:0;white-space:nowrap;width:100px;height:30px;margin-left:3px;padding-l font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;margin-bottom:8px;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.policyDropdown.jsx-203795435{display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:8px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFx1cGxvYWRcXEZpbGVVcGxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVvQixBQUlrQixBQVlNLEFBV04sQUFLVyxBQWtDSCxBQTZCUixBQVFJLEFBVUosQUFTTSxBQUtELEFBT0wsQUFXRCxBQUtDLEFBTzJCLEFBeUJWLEFBT04sQUFTWCxBQVNPLEFBSUYsQUFNTCxBQVlXLEFBa0NILFdBaEVELENBckRILENBdEhFLEdBd0xKLENBNUdKLENBd0JTLEFBZ0ZwQixDQS9Mb0ksQUEwR3pILEVBeERXLEFBcU1BLEdBdk9KLEFBcU1BLElBN0hGLEFBOEVELENBcENqQixBQXFEb0IsQUFhbEIsQ0F6RkYsRUEvRkEsTUFvR2lCLENBNkJBLEdBNUhNLEFBcU1BLENBbktJLEFBb0gzQixBQWlGMkIsQ0EvSkYsQ0ErRkwsUUF2RVAsQ0E2QlUsT0EyQ0EsRUF2S0MsQUFxTUEsQ0FyR3hCLElBOURvQixBQXFNQSxNQXJRSSxBQTJGSCxBQWtCWixBQXFCQSxBQWdCQSxBQW1FZSxDQTFEVixHQThCTyxFQWFFLEtBdktJLEFBcU1BLENBbktYLEFBcU1BLENBMUdDLFFBOEJNLElBYXJCLENBckltQixBQXFNQSxFQTFHRixLQS9DTixBQXFCVyxBQWdCSCxHQW5IRCxBQXFNQSxJQTFDQSxJQTVFRyxDQTVDVCxBQTJGVyxBQTBHWCxTQXZPSSxBQXFNQSxFQTFDSSxDQXhIUixBQXFNQSxXQTFHTSxDQTFGRixBQXVCQyxBQThLRCxDQXhPRixBQXFNQSxJQTFDZCxHQWhMYyxDQVpQLEFBcU5BLENBaEhrQixLQW5FTixBQXFNQSxDQWxLSCxBQXFNQSxDQTlLTSxBQW1FSCxLQWxKSixVQXlEQSxBQXFNQSxDQXhISSxDQWhIUCxBQXFNQSxDQWxJTCxDQTBEZSxDQWxKSCxFQStFUixHQTVGWSxBQWtJTyxBQW1GUCxJQWxMWCxBQXFNQSxDQWxLYSxBQXFNQSxHQTlLM0IsTUEvRW9CLEVBc0JGLEFBNEhjLEFBeUVkLFVBbklBLEVBL0JvQixBQXFNQSxJQTdQbkIsQUF1QkQsQUFxTUEsRUE3SE0sUUFQeEIsSUEwRDRCLEdBakpSLFNBdUJILEFBcU1BLElBcEtFLEFBcU1BLEtBNVBuQixLQWlKaUIsQ0ExSFUsQUFxTUEsV0ExRjNCLEdBZ0IyQixTQTFIVyxBQXFNQSxhQTdPbEIsQUFxTkYsR0F2R0EsQUFxRE0sR0FqQ1YsVUFvRkksRUFyTkMsQUFrSUwsQ0FwQmQsRUF0RW1CLEFBcU1BLElBMUVJLEtBaENMLEVBbUZKLEdBck5JLEdBc0VELEFBcU1BLE1BckRGLEVBbkZTLEFBZ0NMLEtBbEtMLEVBc0VTLEFBcU1BLElBckRILE1Bck5MLEtBa0lmLE9Bb0ZBLENBck5BLDJCQXFFbUIsQUFxTUEsR0FyT0YsQUFxTUEsY0FwS0csQUFxTUEsQ0FyT0csQUFxTUEsVUExRVosT0ExRlMsQUFxTUEsRUExR0EsZ0JBMUZELEFBcU1BLEVBMUdnQixhQTVIaEIsQUFxTUEsRUFuS0UsQUFxTUEsZUF0T0QsQUE0SFAsQUF5RU8sSUFuS2MsQUFxTUEsT0ExR3RCLE9BNUhRLEFBcU1BLEdBeEVwQixhQTNGdUIsQUFxTUEsRUF0T0osQUFxTUEsaUJBcE1FLEFBcU1BLEVBcEtTLEFBcU1BLGlCQXJPSSxBQXFNQSw4QkFwTVgsQUFxTUEsaUJBcktMLEFBcU1BLElBcE9FLEFBcU1BLFlBcktMLEFBcU1BLE1BcE9lLEFBcU1BLE9Bcks5QixBQXFNQSx5REFwT2tCLEFBcU1BLGdCQXBNSCxBQXFNQSxhQXBNZixBQXFNQSIsImZpbGUiOiJDOlxcYy1jaGFpblxcY29tcG9uZW50c1xcdXBsb2FkXFxGaWxlVXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MsIHsgcG9zdCB9IGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFNpbXBsZVJlYWN0RmlsZVVwbG9hZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgIGZpbGU6IG51bGwsXHJcbiAgICAgIHBvbGljeTonJyxcclxuICAgICAgbWVzc2FnZTogJydcclxuICAgIH1cclxuICAgIHRoaXMub25Gb3JtU3VibWl0ID0gdGhpcy5vbkZvcm1TdWJtaXQuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVQb2xpY3lDaGFuZ2UgPSB0aGlzLmhhbmRsZVBvbGljeUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmZpbGVVcGxvYWQgPSB0aGlzLmZpbGVVcGxvYWQuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgb25Gb3JtU3VibWl0KGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpIC8vIFN0b3AgZm9ybSBzdWJtaXRcclxuICAgIHRoaXMuZmlsZVVwbG9hZCh0aGlzLnN0YXRlLmZpbGUpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogJ1N1Y2Nlc3MuJ30pXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSlcclxuICB9XHJcbiAgb25DaGFuZ2UoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmlsZTplLnRhcmdldC5maWxlc1swXX0pXHJcbiAgfVxyXG5cclxuXHJcbiAgaGFuZGxlUG9saWN5Q2hhbmdlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwb2xpY3k6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIGZpbGVVcGxvYWQoZmlsZSl7XHJcblxyXG4gICAgY29uc3QgcG9saWN5ID0gdGhpcy5zdGF0ZS5wb2xpY3k7XHJcblxyXG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL2FwcC50cmlwbGVjaGVjay5uZXR3b3JrL3VwbG9hZFwiO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgncG9saWN5JywgcG9saWN5KVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJyxmaWxlKVxyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiOiBcIlBPU1QsR0VULE9QVElPTlMsIFBVVCwgREVMRVRFXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIHBvc3QodXJsLCBmb3JtRGF0YSwgY29uZmlnKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZVVwbG9hZFNlY3Rpb25cIj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY2VudGVyXCIgb25TdWJtaXQ9e3RoaXMub25Gb3JtU3VibWl0fT5cclxuICAgICAgPGJyLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gLz5cclxuICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInBvbGljeURyb3Bkb3duXCIgdmFsdWU9e3RoaXMuc3RhdGUucG9saWN5fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVQb2xpY3lDaGFuZ2V9PlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvbGljeTFcIj5Qb2xpY3kgMTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvbGljeTJcIj5Qb2xpY3kgMjwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInBvbGljeUJ1dHRvblwiPlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJzdWNjZXNzTWVzc2FnZVwiPnsgdGhpcy5zdGF0ZS5tZXNzYWdlIH08L2g0PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbi5maWxlVXBsb2FkU2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc3VjY2Vzc01lc3NhZ2Uge1xyXG4gICAgZm9udC1jb2xvcjogIzUwRTNDMjtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlciB7XHJcbiAgICBhbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3MDBweDtcclxuICB9XHJcblxyXG4gIC5wb2xpY3lCdXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWNvbG9yOiAjMDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIHBhZGRpbmctbFxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucG9saWN5RHJvcGRvd24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5Db250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5GaWxlcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1jb2xvcjogI0ZGRjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuQWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5UaXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG4gIFxyXG4gIC5GaWxlbmFtZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICBcclxuICAuUm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAuQ2hlY2tJY29uIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gIH1cclxuICBcclxuICAuUHJvZ3Jlc3NXcmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gbWVkaXVtXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBtaW4td2lkdGg6IDg4cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwMywgNTgsIDE4MywgMSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTg5LCAxODksIDE4OSk7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIC5yb3cge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgXHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jZW50ZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sdW1uMiB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuVXBsb2FkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleDogMTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBhbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDg1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvbGljeUJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtY29sb3I6ICMwMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy1sXHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5wb2xpY3lEcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcblxyXG5gfTwvc3R5bGU+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgIClcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlUmVhY3RGaWxlVXBsb2FkIl19 */\n/*@ sourceURL=C:\\c-chain\\components\\upload\\FileUpload.js */")));
    }
  }]);

  return SimpleReactFileUpload;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SimpleReactFileUpload);

/***/ })

})
//# sourceMappingURL=index.js.cfbf8d6a8dc2b7d2cfaf.hot-update.js.map