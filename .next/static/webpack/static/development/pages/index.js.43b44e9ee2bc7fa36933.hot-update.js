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
        className: "jsx-3210823531",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        className: "jsx-3210823531",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "file",
        onChange: this.onChange,
        className: "jsx-3210823531",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        value: this.state.policy,
        onChange: this.handlePolicyChange,
        className: "jsx-3210823531" + " " + "policyDropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "policy1",
        className: "jsx-3210823531",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Policy 1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "policy2",
        className: "jsx-3210823531",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Policy 2")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        className: "jsx-3210823531" + " " + "policyButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Upload"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3210823531",
        __self: this
      }, ".Upload.jsx-3210823531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;text-align:left;overflow:hidden;width:300px;align:center;margin-left:850px;}.policyButton.jsx-3210823531{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;text-color:#000;line-height:0;white-space:nowrap;width:100px;height:30px;margin-left:3px;padding-l font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;margin-bottom:8px;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.policyDropdown.jsx-3210823531{display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:8px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.Content.jsx-3210823531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-top:16px;box-sizing:border-box;width:100%;}.Files.jsx-3210823531{margin-left:32px;color:#FFF;font-color:#FFF;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;justify-items:flex-start;-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;}.Actions.jsx-3210823531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;width:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:32px;}.Title.jsx-3210823531{margin-bottom:32px;color:#FFF;}.Filename.jsx-3210823531{margin-bottom:8px;padding-right:100px;font-size:12px;color:#FFF;}.Row.jsx-3210823531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:50px;padding:8px;overflow:hidden;box-sizing:border-box;}.CheckIcon.jsx-3210823531{opacity:0.5;margin-left:32px;}.ProgressWrapper.jsx-3210823531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}button.jsx-3210823531{font-family:\"Roboto medium\",sans-serif;font-size:14px;display:inline-block;height:36px;min-width:88px;padding:6px 16px;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;border-radius:2px;background:rgba(103,58,183,1);color:#fff;outline:0;}button.jsx-3210823531:disabled{background:rgb(189,189,189);cursor:default;}@media screen and (max-width:960px){.row.jsx-3210823531{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;padding-bottom:8px;padding-top:8px;padding-left:28px;}.column.jsx-3210823531{width:100%;text-align:center;max-width:350px;padding-top:8px;padding-bottom:8px;margin-bottom:28px;}.center.jsx-3210823531{text-align:center;}.column2.jsx-3210823531{list-style:none;display:none;}}.Upload.jsx-3210823531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;text-align:left;overflow:hidden;width:300px;align:center;margin-left:850px;}.policyButton.jsx-3210823531{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;text-color:#000;line-height:0;white-space:nowrap;width:100px;height:30px;margin-left:3px;padding-l font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;margin-bottom:8px;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.policyDropdown.jsx-3210823531{display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:8px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFx1cGxvYWRcXEZpbGVVcGxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERvQixBQUlrQixBQVlXLEFBa0NILEFBNkJSLEFBUUksQUFVSixBQVNNLEFBS0QsQUFPTCxBQVdELEFBS0MsQUFPMkIsQUF5QlYsQUFPTixBQVNYLEFBU08sQUFJRixBQU1MLEFBWVcsQUFrQ0gsV0FoRUQsQ0FyREgsSUFrRUYsQ0E1R0osQ0F3QlMsQUFnRnBCLENBckZXLEVBeERXLEFBcU1BLEdBdk9KLEFBcU1BLElBN0hGLEFBOEVELENBcENqQixBQXFEb0IsQUFhbEIsQ0F6RkYsUUFLaUIsQ0E2QkEsR0E1SE0sQUFxTUEsQ0FuS0ksQUFvSDNCLEFBaUYyQixDQS9KRixDQStGTCxRQXZFUCxDQTZCVSxPQTJDQSxFQXZLQyxBQXFNQSxDQXJHeEIsSUE5RG9CLEFBcU1BLE1BclBJLEFBMkVILEFBa0JaLEFBcUJBLEFBZ0JBLEFBbUVlLENBMURWLEdBOEJPLEVBYUUsS0F2S0ksQUFxTUEsQ0FuS1gsQUFxTUEsQ0ExR0MsUUE4Qk0sSUFhckIsQ0FySW1CLEFBcU1BLEVBMUdGLEtBL0NOLEFBcUJXLEFBZ0JILEdBbkhELEFBcU1BLElBMUNBLElBNUVHLENBNUNULEFBMkZXLEFBMEdYLFNBdk9JLEFBcU1BLEVBMUNJLENBeEhSLEFBcU1BLFdBMUdNLENBMUZGLEFBdUJDLEFBOEtELENBeE9GLEFBcU1BLElBMUNkLElBNUtPLEFBcU1BLENBaEhrQixLQW5FTixBQXFNQSxDQWxLSCxBQXFNQSxDQTlLTSxBQW1FSCxlQXpGSixBQXFNQSxDQXhISSxDQWhIUCxBQXFNQSxDQWxJTCxDQTBEZSxHQW5FWCxHQTVFWSxBQWtITyxBQW1GUCxJQWxMWCxBQXFNQSxDQWxLYSxBQXFNQSxHQTlLM0IsUUF6RGtCLEFBNEhjLEFBeUVkLFVBbklBLEVBL0JvQixBQXFNQSxJQXRPcEIsQUFxTUEsRUE3SE0sUUFQeEIsSUEwRDRCLFlBMUhYLEFBcU1BLElBcEtFLEFBcU1BLFVBM0dGLENBMUhVLEFBcU1BLFdBMUYzQixHQWdCMkIsU0ExSFcsQUFxTUEsYUE3TnBCLEFBcU1BLEdBdkdBLEFBcURNLEdBakNWLFVBakhJLEFBcU1BLEVBbkZKLENBcEJkLEVBdEVtQixBQXFNQSxJQTFFSSxLQWhDTCxFQWxISixBQXFNQSxNQS9JRyxBQXFNQSxNQTFQRixBQXFNQSxFQW5GUyxBQWdDTCxPQTVGSSxBQXFNQSxJQTFQSCxBQXFNQSxXQW5GcEIsT0FqSEEsQUFxTUEsNEJBaEptQixBQXFNQSxHQXJPRixBQXFNQSxjQXBLRyxBQXFNQSxDQXJPRyxBQXFNQSxVQTFFWixPQTFGUyxBQXFNQSxFQTFHQSxnQkExRkQsQUFxTUEsRUExR2dCLGFBNUhoQixBQXFNQSxFQW5LRSxBQXFNQSxlQXRPRCxBQTRIUCxBQXlFTyxJQW5LYyxBQXFNQSxPQTFHdEIsT0E1SFEsQUFxTUEsR0F4RXBCLGFBM0Z1QixBQXFNQSxFQXRPSixBQXFNQSxpQkFwTUUsQUFxTUEsRUFwS1MsQUFxTUEsaUJBck9JLEFBcU1BLDhCQXBNWCxBQXFNQSxpQkFyS0wsQUFxTUEsSUFwT0UsQUFxTUEsWUFyS0wsQUFxTUEsTUFwT2UsQUFxTUEsT0FySzlCLEFBcU1BLHlEQXBPa0IsQUFxTUEsZ0JBcE1ILEFBcU1BLGFBcE1mLEFBcU1BIiwiZmlsZSI6IkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFx1cGxvYWRcXEZpbGVVcGxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcywgeyBwb3N0IH0gZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgU2ltcGxlUmVhY3RGaWxlVXBsb2FkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgZmlsZTogbnVsbCxcclxuICAgICAgcG9saWN5OicnXHJcbiAgICB9XHJcbiAgICB0aGlzLm9uRm9ybVN1Ym1pdCA9IHRoaXMub25Gb3JtU3VibWl0LmJpbmQodGhpcylcclxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlUG9saWN5Q2hhbmdlID0gdGhpcy5oYW5kbGVQb2xpY3lDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5maWxlVXBsb2FkID0gdGhpcy5maWxlVXBsb2FkLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIG9uRm9ybVN1Ym1pdChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKSAvLyBTdG9wIGZvcm0gc3VibWl0XHJcbiAgICB0aGlzLmZpbGVVcGxvYWQodGhpcy5zdGF0ZS5maWxlKS50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KVxyXG4gIH1cclxuICBvbkNoYW5nZShlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtmaWxlOmUudGFyZ2V0LmZpbGVzWzBdfSlcclxuICB9XHJcblxyXG5cclxuICBoYW5kbGVQb2xpY3lDaGFuZ2UoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBvbGljeTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZmlsZVVwbG9hZChmaWxlKXtcclxuXHJcbiAgICBjb25zdCBwb2xpY3kgPSB0aGlzLnN0YXRlLnBvbGljeTtcclxuXHJcbiAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vYXBwLnRyaXBsZWNoZWNrLm5ldHdvcmsvdXBsb2FkXCI7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdwb2xpY3knLCBwb2xpY3kpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLGZpbGUpXHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCI6IFwiUE9TVCxHRVQsT1BUSU9OUywgUFVULCBERUxFVEVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAgcG9zdCh1cmwsIGZvcm1EYXRhLCBjb25maWcpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVXBsb2FkXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uRm9ybVN1Ym1pdH0+XHJcbiAgICAgIDxici8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IC8+XHJcbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJwb2xpY3lEcm9wZG93blwiIHZhbHVlPXt0aGlzLnN0YXRlLnBvbGljeX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlUG9saWN5Q2hhbmdlfT5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwb2xpY3kxXCI+UG9saWN5IDE8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwb2xpY3kyXCI+UG9saWN5IDI8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJwb2xpY3lCdXR0b25cIj5VcGxvYWQ8L2J1dHRvbj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4uVXBsb2FkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleDogMTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBhbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDg1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvbGljeUJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtY29sb3I6ICMwMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy1sXHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5wb2xpY3lEcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLkNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLkZpbGVzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWNvbG9yOiAjRkZGO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleDogMTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5BY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICB9XHJcbiAgXHJcbiAgLlRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICB9XHJcbiAgXHJcbiAgLkZpbGVuYW1lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG4gIFxyXG4gIC5Sb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC5DaGVja0ljb24ge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5Qcm9ncmVzc1dyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBtZWRpdW1cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIG1pbi13aWR0aDogODhweDtcclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAzLCA1OCwgMTgzLCAxKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxODksIDE4OSwgMTg5KTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcblxyXG4gIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgLnJvdyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBcclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNlbnRlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2x1bW4yIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5VcGxvYWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogODUwcHg7XHJcbiAgfVxyXG5cclxuICAucG9saWN5QnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1jb2xvcjogIzAwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBwYWRkaW5nLWxcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnBvbGljeURyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuXHJcbmB9PC9zdHlsZT5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgKVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVSZWFjdEZpbGVVcGxvYWQiXX0= */\n/*@ sourceURL=C:\\c-chain\\components\\upload\\FileUpload.js */")));
    }
  }]);

  return SimpleReactFileUpload;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SimpleReactFileUpload);

/***/ })

})
//# sourceMappingURL=index.js.43b44e9ee2bc7fa36933.hot-update.js.map