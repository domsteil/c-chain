webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/upload/Upload.js":
/*!*************************************!*\
  !*** ./components/upload/Upload.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _dropzone_Dropzone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dropzone/Dropzone */ "./components/dropzone/Dropzone.js");
/* harmony import */ var _progress_Progress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../progress/Progress */ "./components/progress/Progress.js");















var Upload =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Upload, _Component);

  function Upload(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Upload);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Upload).call(this, props));
    _this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false
    };
    _this.onFilesAdded = _this.onFilesAdded.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.uploadFiles = _this.uploadFiles.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.sendRequest = _this.sendRequest.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.renderActions = _this.renderActions.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Upload, [{
    key: "onFilesAdded",
    value: function onFilesAdded(files) {
      this.setState(function (prevState) {
        return {
          files: prevState.files.concat(files)
        };
      });
    }
  }, {
    key: "uploadFiles",
    value: function () {
      var _uploadFiles = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _this2 = this;

        var promises;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  uploadProgress: {},
                  uploading: true
                });
                promises = [];
                this.state.files.forEach(function (file) {
                  promises.push(_this2.sendRequest(file));
                });
                _context.prev = 3;
                _context.next = 6;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.all(promises);

              case 6:
                this.setState({
                  successfullUploaded: true,
                  uploading: false
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                // Not Production ready! Do some error handling here instead...
                this.setState({
                  successfullUploaded: true,
                  uploading: false
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 9]]);
      }));

      function uploadFiles() {
        return _uploadFiles.apply(this, arguments);
      }

      return uploadFiles;
    }()
  }, {
    key: "sendRequest",
    value: function sendRequest(file) {
      var _this3 = this;

      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.upload.addEventListener("progress", function (event) {
          if (event.lengthComputable) {
            var copy = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this3.state.uploadProgress);

            copy[file.name] = {
              state: "pending",
              percentage: event.loaded / event.total * 100
            };

            _this3.setState({
              uploadProgress: copy
            });
          }
        });
        req.upload.addEventListener("load", function (event) {
          var copy = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this3.state.uploadProgress);

          copy[file.name] = {
            state: "done",
            percentage: 100
          };

          _this3.setState({
            uploadProgress: copy
          });

          resolve(req.response);
        });
        req.upload.addEventListener("error", function (event) {
          var copy = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this3.state.uploadProgress);

          copy[file.name] = {
            state: "error",
            percentage: 0
          };

          _this3.setState({
            uploadProgress: copy
          });

          reject(req.response);
        });
        var formData = new FormData();
        formData.append("policy", policy.value);
        formData.append("file", file, file.name);
        req.open("POST", "http://ec2-18-204-34-34.compute-1.amazonaws.com:5000/upload");
        req.send(formData);
      });
    }
  }, {
    key: "renderProgress",
    value: function renderProgress(file) {
      var uploadProgress = this.state.uploadProgress[file.name];

      if (this.state.uploading || this.state.successfullUploaded) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: "ProgressWrapper"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_progress_Progress__WEBPACK_IMPORTED_MODULE_13__["default"], {
          progress: uploadProgress ? uploadProgress.percentage : 0
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
          className: "CheckIcon",
          alt: "done",
          src: "baseline-check_circle_outline-24px.svg",
          style: {
            opacity: uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
          }
        }));
      }
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var _this4 = this;

      if (this.state.successfullUploaded) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
          className: "PolicyButton",
          onClick: function onClick() {
            return _this4.setState({
              files: [],
              successfullUploaded: false
            });
          }
        }, "Clear");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
          className: "PolicyButton",
          disabled: this.state.files.length < 0 || this.state.uploading,
          onClick: this.uploadFiles
        }, "Upload");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1300123534" + " " + "Upload"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "jsx-1300123534" + " " + "Title"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1300123534" + " " + "Content"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1300123534"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_dropzone_Dropzone__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onFilesAdded: this.onFilesAdded,
        disabled: this.state.uploading || this.state.successfullUploaded
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1300123534" + " " + "Files"
      }, this.state.files.map(function (file) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          key: file.name,
          className: "jsx-1300123534" + " " + "Row"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-1300123534" + " " + "Filename"
        }, file.name), _this5.renderProgress(file));
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1300123534" + " " + "Actions"
      }, this.renderActions()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("form", {
        id: "ipfs-hash-form",
        className: "jsx-1300123534"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("select", {
        className: "jsx-1300123534" + " " + "policyDropdown"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("option", {
        value: "policy1",
        className: "jsx-1300123534"
      }, "Policy 1"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("option", {
        value: "policy2",
        className: "jsx-1300123534"
      }, "Policy 2"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "1300123534"
      }, ".Upload.jsx-1300123534{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;text-align:left;overflow:hidden;width:300px;align:center;margin-left:800px;}.PolicyButton.jsx-1300123534{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.Content.jsx-1300123534{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-top:16px;box-sizing:border-box;width:100%;}.Files.jsx-1300123534{margin-left:32px;color:#FFF;font-color:#FFF;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;justify-items:flex-start;-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;}.Actions.jsx-1300123534{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;width:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:32px;}.Title.jsx-1300123534{margin-bottom:32px;color:#FFF;}.Filename.jsx-1300123534{margin-bottom:8px;padding-right:100px;font-size:12px;color:#FFF;}.Row.jsx-1300123534{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:50px;padding:8px;overflow:hidden;box-sizing:border-box;}.CheckIcon.jsx-1300123534{opacity:0.5;margin-left:32px;}.ProgressWrapper.jsx-1300123534{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}button.jsx-1300123534{font-family:\"Roboto medium\",sans-serif;font-size:14px;display:inline-block;height:36px;min-width:88px;padding:6px 16px;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;border-radius:2px;background:rgba(103,58,183,1);color:#fff;outline:0;}button.jsx-1300123534:disabled{background:rgb(189,189,189);cursor:default;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFx1cGxvYWRcXFVwbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Sm9CLEFBSWtCLEFBWVcsQUErQlgsQUFRSSxBQVVKLEFBU00sQUFLRCxBQU9MLEFBV0QsQUFLQyxBQU8yQixBQXlCVixZQXBDYixLQTFDTixDQXdCUyxDQUxULEtBMURPLElBd0NGLEFBOEVELENBcENqQixDQXZCQSxRQUtpQixDQTZCQSxHQTVGTSxDQXNIdkIsQ0E5RXlCLFNBd0JaLENBNkJVLFNBNUZDLENBZ0V4QixVQTlFd0IsQUEyQ0gsQUFrQlosQUFxQkEsQUFnQkEsQ0FTSyxVQTVGYSxFQTZGVixlQUNFLEtBL0NOLEFBcUJXLEFBZ0JILEdBbkZELFFBK0NHLENBK0NFLFNBN0ZULGNBQ0ssQUE2RkQsQ0FuRUQsU0EzQ1YsQ0FxRGtCLE9BVEgsQUFtRUgsQ0E3RlAsWUFDQSxHQWdGTyxFQTdDWixDQTBEZSxHQW5FWCxHQTVDWSxBQW1CUCxBQStEYyxRQXJDaEMsUUF6QmtCLEFBNEZjLFVBMURkLE1BakNELEVBeUNPLFFBUHhCLElBMEQ0QixDQTNGRCx1QkFDVyxFQTJGckIsWUFmakIsR0FnQjJCLGlCQTNGUixLQXZCRCxHQThEQSxBQXFETSxHQWpDVixVQWpGSSxFQWtGSixDQXBCZCxNQXFEdUIsS0FoQ0wsRUFsRkosWUFDQyxFQWtGUyxBQWdDTCxXQWpIQyxXQWtGcEIsT0FqRkEsS0FtQmlCLGVBQ00sb0NBNkZaLFNBQ1MsS0E3RkQsYUE4RmdCLElBN0ZmLGtCQUNBLFFBNkZQLFVBNUZNLENBNkZQLFVBQ1osTUE3RnFCLG1CQUNhLDhCQUNYLHFCQUNPLGdFQUNaLGdCQUNILGFBQ2YiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXHVwbG9hZFxcVXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcIi4uL2Ryb3B6b25lL0Ryb3B6b25lXCI7XHJcbmltcG9ydCBQcm9ncmVzcyBmcm9tIFwiLi4vcHJvZ3Jlc3MvUHJvZ3Jlc3NcIjtcclxuXHJcbmNsYXNzIFVwbG9hZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgdXBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgdXBsb2FkUHJvZ3Jlc3M6IHt9LFxyXG4gICAgICBzdWNjZXNzZnVsbFVwbG9hZGVkOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm9uRmlsZXNBZGRlZCA9IHRoaXMub25GaWxlc0FkZGVkLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVwbG9hZEZpbGVzID0gdGhpcy51cGxvYWRGaWxlcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZW5kUmVxdWVzdCA9IHRoaXMuc2VuZFJlcXVlc3QuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucmVuZGVyQWN0aW9ucyA9IHRoaXMucmVuZGVyQWN0aW9ucy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25GaWxlc0FkZGVkKGZpbGVzKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICBmaWxlczogcHJldlN0YXRlLmZpbGVzLmNvbmNhdChmaWxlcylcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHVwbG9hZEZpbGVzKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVwbG9hZFByb2dyZXNzOiB7fSwgdXBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcclxuICAgIHRoaXMuc3RhdGUuZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLnNlbmRSZXF1ZXN0KGZpbGUpKTtcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1Y2Nlc3NmdWxsVXBsb2FkZWQ6IHRydWUsIHVwbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vIE5vdCBQcm9kdWN0aW9uIHJlYWR5ISBEbyBzb21lIGVycm9yIGhhbmRsaW5nIGhlcmUgaW5zdGVhZC4uLlxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3VjY2Vzc2Z1bGxVcGxvYWRlZDogdHJ1ZSwgdXBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbmRSZXF1ZXN0KGZpbGUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgICBjb25zdCBjb3B5ID0geyAuLi50aGlzLnN0YXRlLnVwbG9hZFByb2dyZXNzIH07XHJcbiAgICAgICAgICBjb3B5W2ZpbGUubmFtZV0gPSB7XHJcbiAgICAgICAgICAgIHN0YXRlOiBcInBlbmRpbmdcIixcclxuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGxvYWRQcm9ncmVzczogY29weSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weSA9IHsgLi4udGhpcy5zdGF0ZS51cGxvYWRQcm9ncmVzcyB9O1xyXG4gICAgICAgIGNvcHlbZmlsZS5uYW1lXSA9IHsgc3RhdGU6IFwiZG9uZVwiLCBwZXJjZW50YWdlOiAxMDAgfTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXBsb2FkUHJvZ3Jlc3M6IGNvcHkgfSk7XHJcbiAgICAgICAgcmVzb2x2ZShyZXEucmVzcG9uc2UpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5ID0geyAuLi50aGlzLnN0YXRlLnVwbG9hZFByb2dyZXNzIH07XHJcbiAgICAgICAgY29weVtmaWxlLm5hbWVdID0geyBzdGF0ZTogXCJlcnJvclwiLCBwZXJjZW50YWdlOiAwIH07XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVwbG9hZFByb2dyZXNzOiBjb3B5IH0pO1xyXG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInBvbGljeVwiLCBwb2xpY3kudmFsdWUpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUsIGZpbGUubmFtZSk7XHJcblxyXG4gICAgICByZXEub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vZWMyLTE4LTIwNC0zNC0zNC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTo1MDAwL3VwbG9hZFwiKTtcclxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJQcm9ncmVzcyhmaWxlKSB7XHJcbiAgICBjb25zdCB1cGxvYWRQcm9ncmVzcyA9IHRoaXMuc3RhdGUudXBsb2FkUHJvZ3Jlc3NbZmlsZS5uYW1lXTtcclxuICAgIGlmICh0aGlzLnN0YXRlLnVwbG9hZGluZyB8fCB0aGlzLnN0YXRlLnN1Y2Nlc3NmdWxsVXBsb2FkZWQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2dyZXNzV3JhcHBlclwiPlxyXG4gICAgICAgICAgPFByb2dyZXNzIHByb2dyZXNzPXt1cGxvYWRQcm9ncmVzcyA/IHVwbG9hZFByb2dyZXNzLnBlcmNlbnRhZ2UgOiAwfSAvPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJDaGVja0ljb25cIlxyXG4gICAgICAgICAgICBhbHQ9XCJkb25lXCJcclxuICAgICAgICAgICAgc3JjPVwiYmFzZWxpbmUtY2hlY2tfY2lyY2xlX291dGxpbmUtMjRweC5zdmdcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6XHJcbiAgICAgICAgICAgICAgICB1cGxvYWRQcm9ncmVzcyAmJiB1cGxvYWRQcm9ncmVzcy5zdGF0ZSA9PT0gXCJkb25lXCIgPyAwLjUgOiAwXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQWN0aW9ucygpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnN1Y2Nlc3NmdWxsVXBsb2FkZWQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIlBvbGljeUJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmlsZXM6IFtdLCBzdWNjZXNzZnVsbFVwbG9hZGVkOiBmYWxzZSB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIENsZWFyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiUG9saWN5QnV0dG9uXCJcclxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmZpbGVzLmxlbmd0aCA8IDAgfHwgdGhpcy5zdGF0ZS51cGxvYWRpbmd9XHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVwbG9hZEZpbGVzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJVcGxvYWRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUaXRsZVwiPjwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxEcm9wem9uZVxyXG4gICAgICAgICAgICAgIG9uRmlsZXNBZGRlZD17dGhpcy5vbkZpbGVzQWRkZWR9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUudXBsb2FkaW5nIHx8IHRoaXMuc3RhdGUuc3VjY2Vzc2Z1bGxVcGxvYWRlZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGaWxlc1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5maWxlcy5tYXAoZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmaWxlLm5hbWV9IGNsYXNzTmFtZT1cIlJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJGaWxlbmFtZVwiPntmaWxlLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQcm9ncmVzcyhmaWxlKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBY3Rpb25zXCI+e3RoaXMucmVuZGVyQWN0aW9ucygpfTwvZGl2PlxyXG5cclxuICAgICAgICA8Zm9ybSBpZD1cImlwZnMtaGFzaC1mb3JtXCI+XHJcbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJwb2xpY3lEcm9wZG93blwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvbGljeTFcIj5Qb2xpY3kgMTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvbGljeTJcIj5Qb2xpY3kgMjwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4uVXBsb2FkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleDogMTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBhbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwMHB4O1xyXG4gIH1cclxuXHJcbiAgLlBvbGljeUJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLkNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLkZpbGVzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWNvbG9yOiAjRkZGO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleDogMTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5BY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICB9XHJcbiAgXHJcbiAgLlRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICB9XHJcbiAgXHJcbiAgLkZpbGVuYW1lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG4gIFxyXG4gIC5Sb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC5DaGVja0ljb24ge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5Qcm9ncmVzc1dyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBtZWRpdW1cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIG1pbi13aWR0aDogODhweDtcclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAzLCA1OCwgMTgzLCAxKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxODksIDE4OSwgMTg5KTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcbmB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkOyJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\upload\\Upload.js */"));
    }
  }]);

  return Upload;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ })

})
//# sourceMappingURL=index.js.72e40f90e78357d7763a.hot-update.js.map