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
      policy: ''
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
      e.preventDefault(); // Stop form submit

      this.fileUpload(this.state.file).then(function (response) {
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
        className: "Upload",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.onFormSubmit,
        className: "jsx-1411961160",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        className: "jsx-1411961160",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "file",
        onChange: this.onChange,
        className: "jsx-1411961160",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        value: this.state.policy,
        onChange: this.handlePolicyChange,
        className: "jsx-1411961160" + " " + "policyDropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "policy1",
        className: "jsx-1411961160",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Policy 1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "policy2",
        className: "jsx-1411961160",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Policy 2")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        className: "jsx-1411961160" + " " + "policyButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Upload"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1411961160",
        __self: this
      }, ".Upload.jsx-1411961160{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;text-align:left;overflow:hidden;width:300px;align:center;}.policyButton.jsx-1411961160{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;text-color:#000;line-height:0;white-space:nowrap;width:100px;height:30px;margin-left:3px;padding-l font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;margin-bottom:8px;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.policyDropdown.jsx-1411961160{display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:8px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.Content.jsx-1411961160{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-top:16px;box-sizing:border-box;width:100%;}.Files.jsx-1411961160{margin-left:32px;color:#FFF;font-color:#FFF;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;justify-items:flex-start;-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;}.Actions.jsx-1411961160{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;width:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:32px;}.Title.jsx-1411961160{margin-bottom:32px;color:#FFF;}.Filename.jsx-1411961160{margin-bottom:8px;padding-right:100px;font-size:12px;color:#FFF;}.Row.jsx-1411961160{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:50px;padding:8px;overflow:hidden;box-sizing:border-box;}.CheckIcon.jsx-1411961160{opacity:0.5;margin-left:32px;}.ProgressWrapper.jsx-1411961160{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}button.jsx-1411961160{font-family:\"Roboto medium\",sans-serif;font-size:14px;display:inline-block;height:36px;min-width:88px;padding:6px 16px;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;border-radius:2px;background:rgba(103,58,183,1);color:#fff;outline:0;}button.jsx-1411961160:disabled{background:rgb(189,189,189);cursor:default;}@media screen and (max-width:960px){.row.jsx-1411961160{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;padding-bottom:8px;padding-top:8px;padding-left:28px;}.column.jsx-1411961160{width:100%;text-align:center;max-width:350px;padding-top:8px;padding-bottom:8px;margin-bottom:28px;}.center.jsx-1411961160{text-align:center;}.column2.jsx-1411961160{list-style:none;display:none;}}.Upload.jsx-1411961160{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;text-align:left;overflow:hidden;width:300px;align:center;margin-left:850px;}.policyButton.jsx-1411961160{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;text-color:#000;line-height:0;white-space:nowrap;width:100px;height:30px;margin-left:3px;padding-l font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;margin-bottom:8px;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.policyDropdown.jsx-1411961160{display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:8px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFx1cGxvYWRcXEZpbGVVcGxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERvQixBQUlrQixBQVdXLEFBa0NILEFBNkJSLEFBUUksQUFVSixBQVNNLEFBS0QsQUFPTCxBQVdELEFBS0MsQUFPMkIsQUF5QlYsQUFPTixBQVNYLEFBU08sQUFJRixBQU1MLEFBWVcsQUFrQ0gsV0FoRUQsQ0FyREgsSUFrRUYsQ0E1R0osQ0F3QlMsQUFnRnBCLENBckZXLEVBeERXLEFBcU1BLEdBdk9KLEFBcU1BLElBN0hGLEFBOEVELENBcENqQixBQXFEb0IsQUFhbEIsQ0F6RkYsUUFLaUIsQ0E2QkEsR0E1SE0sQUFxTUEsQ0FuS0ksQUFvSDNCLEFBaUYyQixDQS9KRixDQStGTCxRQXZFUCxDQTZCVSxPQTJDQSxFQXZLQyxBQXFNQSxDQXJHeEIsSUE5RG9CLEFBcU1BLE1BcFBJLEFBMEVILEFBa0JaLEFBcUJBLEFBZ0JBLEFBbUVlLENBMURWLEdBOEJPLEVBYUUsS0F2S0ksQUFxTUEsQ0FuS1gsQUFxTUEsQ0ExR0MsUUE4Qk0sSUFhckIsQ0FySW1CLEFBcU1BLEVBMUdGLEtBL0NOLEFBcUJXLEFBZ0JILEdBbkhELEFBcU1BLElBMUNBLElBNUVHLENBNUNULEFBMkZXLEFBMEdYLFNBdk9JLEFBcU1BLEVBMUNJLENBeEhSLEFBcU1BLFdBMUdNLENBMUZGLEFBdUJDLEFBOEtELENBeE9GLEFBcU1BLElBMUNkLElBM0tPLEFBb01BLENBaEhrQixLQW5FTixBQXFNQSxDQWxLSCxBQXFNQSxDQTlLTSxBQW1FSCxlQXpGSixBQXFNQSxDQXhISSxDQWhIUCxBQXFNQSxDQWxJTCxDQTBEZSxHQW5FWCxHQTNFWSxBQWlITyxBQW1GUCxJQWxMWCxBQXFNQSxDQWxLYSxBQXFNQSxHQTlLM0IsUUF6RGtCLEFBNEhjLEFBeUVkLFVBbklBLEVBL0JvQixBQXFNQSxJQXRPcEIsQUFxTUEsRUE3SE0sUUFQeEIsSUEwRDRCLFlBMUhYLEFBcU1BLElBcEtFLEFBcU1BLFVBM0dGLENBMUhVLEFBcU1BLFdBMUYzQixHQWdCMkIsU0ExSFcsQUFxTUEsYUE1TnBCLEFBb01BLEdBdkdBLEFBcURNLEdBakNWLFVBaEhJLEFBb01BLEVBbkZKLENBcEJkLEVBdEVtQixBQXFNQSxJQTFFSSxLQWhDTCxFQWpISixBQW9NQSxNQS9JRyxBQXFNQSxNQXpQRixBQW9NQSxFQW5GUyxBQWdDTCxPQTVGSSxBQXFNQSxJQXpQdkIsQUFvTW9CLFdBbkZwQixPQW9GQSw0QkFoSm1CLEFBcU1BLEdBck9GLEFBcU1BLGNBcEtHLEFBcU1BLENBck9HLEFBcU1BLFVBMUVaLE9BMUZTLEFBcU1BLEVBMUdBLGdCQTFGRCxBQXFNQSxFQTFHZ0IsYUE1SGhCLEFBcU1BLEVBbktFLEFBcU1BLGVBdE9ELEFBNEhQLEFBeUVPLElBbktjLEFBcU1BLE9BMUd0QixPQTVIUSxBQXFNQSxHQXhFcEIsYUEzRnVCLEFBcU1BLEVBdE9KLEFBcU1BLGlCQXBNRSxBQXFNQSxFQXBLUyxBQXFNQSxpQkFyT0ksQUFxTUEsOEJBcE1YLEFBcU1BLGlCQXJLTCxBQXFNQSxJQXBPRSxBQXFNQSxZQXJLTCxBQXFNQSxNQXBPZSxBQXFNQSxPQXJLOUIsQUFxTUEseURBcE9rQixBQXFNQSxnQkFwTUgsQUFxTUEsYUFwTWYsQUFxTUEiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXHVwbG9hZFxcRmlsZVVwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zLCB7IHBvc3QgfSBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBTaW1wbGVSZWFjdEZpbGVVcGxvYWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICBmaWxlOiBudWxsLFxyXG4gICAgICBwb2xpY3k6JydcclxuICAgIH1cclxuICAgIHRoaXMub25Gb3JtU3VibWl0ID0gdGhpcy5vbkZvcm1TdWJtaXQuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVQb2xpY3lDaGFuZ2UgPSB0aGlzLmhhbmRsZVBvbGljeUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmZpbGVVcGxvYWQgPSB0aGlzLmZpbGVVcGxvYWQuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgb25Gb3JtU3VibWl0KGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpIC8vIFN0b3AgZm9ybSBzdWJtaXRcclxuICAgIHRoaXMuZmlsZVVwbG9hZCh0aGlzLnN0YXRlLmZpbGUpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIG9uQ2hhbmdlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2ZpbGU6ZS50YXJnZXQuZmlsZXNbMF19KVxyXG4gIH1cclxuXHJcblxyXG4gIGhhbmRsZVBvbGljeUNoYW5nZShlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcG9saWN5OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG5cclxuICBmaWxlVXBsb2FkKGZpbGUpe1xyXG5cclxuICAgIGNvbnN0IHBvbGljeSA9IHRoaXMuc3RhdGUucG9saWN5O1xyXG5cclxuICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9hcHAudHJpcGxlY2hlY2submV0d29yay91cGxvYWRcIjtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3BvbGljeScsIHBvbGljeSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsZmlsZSlcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIjogXCJQT1NULEdFVCxPUFRJT05TLCBQVVQsIERFTEVURVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICBwb3N0KHVybCwgZm9ybURhdGEsIGNvbmZpZylcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlVwbG9hZFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vbkZvcm1TdWJtaXR9PlxyXG4gICAgICA8YnIvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSAvPlxyXG4gICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicG9saWN5RHJvcGRvd25cIiB2YWx1ZT17dGhpcy5zdGF0ZS5wb2xpY3l9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBvbGljeUNoYW5nZX0+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicG9saWN5MVwiPlBvbGljeSAxPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicG9saWN5MlwiPlBvbGljeSAyPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwicG9saWN5QnV0dG9uXCI+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuLlVwbG9hZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5wb2xpY3lCdXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWNvbG9yOiAjMDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIHBhZGRpbmctbFxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucG9saWN5RHJvcGRvd24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5Db250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5GaWxlcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1jb2xvcjogI0ZGRjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuQWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5UaXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG4gIFxyXG4gIC5GaWxlbmFtZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICBcclxuICAuUm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAuQ2hlY2tJY29uIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gIH1cclxuICBcclxuICAuUHJvZ3Jlc3NXcmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gbWVkaXVtXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBtaW4td2lkdGg6IDg4cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwMywgNTgsIDE4MywgMSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTg5LCAxODksIDE4OSk7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIC5yb3cge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBtYXJnaW46IC0xLjVyZW0gMDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgXHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jZW50ZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sdW1uMiB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuVXBsb2FkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleDogMTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBhbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDg1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvbGljeUJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtY29sb3I6ICMwMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy1sXHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5wb2xpY3lEcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcblxyXG5gfTwvc3R5bGU+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgIClcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlUmVhY3RGaWxlVXBsb2FkIl19 */\n/*@ sourceURL=C:\\c-chain\\components\\upload\\FileUpload.js */")));
    }
  }]);

  return SimpleReactFileUpload;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SimpleReactFileUpload);

/***/ })

})
//# sourceMappingURL=index.js.b9d2b87ea01a98ed0511.hot-update.js.map