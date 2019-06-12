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
      policy: [],
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
        formData.append("policy", policy1);
        formData.append("file", file, file.name);
        req.open("POST", "https://app.triplecheck.network/upload");
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
          className: "policyButton",
          onClick: function onClick() {
            return _this4.setState({
              files: [],
              successfullUploaded: false
            });
          }
        }, "Clear");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
          className: "policyButton",
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
        className: "jsx-3453078434" + " " + "Upload"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "jsx-3453078434" + " " + "Title"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3453078434" + " " + "Content"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3453078434"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_dropzone_Dropzone__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onFilesAdded: this.onFilesAdded,
        disabled: this.state.uploading || this.state.successfullUploaded
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("br", {
        className: "jsx-3453078434"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3453078434" + " " + "Files"
      }, this.state.files.map(function (file) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          key: file.name,
          className: "jsx-3453078434" + " " + "Row"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-3453078434" + " " + "Filename"
        }, file.name), _this5.renderProgress(file));
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("form", {
        className: "jsx-3453078434"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
        disabled: this.state.files.length < 0 || this.state.uploading,
        onClick: this.uploadFiles,
        className: "jsx-3453078434" + " " + "policyButton"
      }, "Upload"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("select", {
        id: "policy",
        onSelect: function onSelect() {
          return _this5.setState({
            policy: [],
            successfullUploaded: false
          });
        },
        className: "jsx-3453078434" + " " + "policyDropdown"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("option", {
        value: "policy1",
        className: "jsx-3453078434"
      }, "Policy 1"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("option", {
        value: "policy2",
        className: "jsx-3453078434"
      }, "Policy 2"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "3453078434"
      }, ".Upload.jsx-3453078434{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;text-align:left;overflow:hidden;width:300px;align:center;margin-left:850px;}.policyButton.jsx-3453078434{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;text-color:#000;line-height:0;white-space:nowrap;width:100px;height:30px;margin-left:3px;padding-l font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;margin-bottom:8px;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.policyDropdown.jsx-3453078434{display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:100px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:8px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.Content.jsx-3453078434{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-top:16px;box-sizing:border-box;width:100%;}.Files.jsx-3453078434{margin-left:32px;color:#FFF;font-color:#FFF;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;justify-items:flex-start;-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;}.Actions.jsx-3453078434{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;width:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:32px;}.Title.jsx-3453078434{margin-bottom:32px;color:#FFF;}.Filename.jsx-3453078434{margin-bottom:8px;padding-right:100px;font-size:12px;color:#FFF;}.Row.jsx-3453078434{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:50px;padding:8px;overflow:hidden;box-sizing:border-box;}.CheckIcon.jsx-3453078434{opacity:0.5;margin-left:32px;}.ProgressWrapper.jsx-3453078434{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}button.jsx-3453078434{font-family:\"Roboto medium\",sans-serif;font-size:14px;display:inline-block;height:36px;min-width:88px;padding:6px 16px;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;border-radius:2px;background:rgba(103,58,183,1);color:#fff;outline:0;}button.jsx-3453078434:disabled{background:rgb(189,189,189);cursor:default;}@media screen and (max-width:960px){.row.jsx-3453078434{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:-1.5rem 0;padding-bottom:8px;padding-top:8px;padding-left:28px;}.column.jsx-3453078434{width:100%;text-align:center;max-width:350px;padding-top:8px;padding-bottom:8px;margin-bottom:28px;}.center.jsx-3453078434{text-align:center;}.column2.jsx-3453078434{list-style:none;display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFx1cGxvYWRcXFVwbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrS29CLEFBSWtCLEFBWVcsQUFrQ0gsQUE2QlIsQUFRSSxBQVVKLEFBU00sQUFLRCxBQU9MLEFBV0QsQUFLQyxBQU8yQixBQXlCVixBQU9OLEFBU1gsQUFTTyxBQUlGLFdBWkUsQ0FyREgsSUFrRUYsQ0E1R0osQ0F3QlMsQUFnRnBCLENBckZXLEVBeERXLEdBbENKLElBd0VGLEFBOEVELENBcENqQixBQXFEb0IsQUFhbEIsQ0F6RkYsUUFLaUIsQ0E2QkEsR0E1SE0sQ0FrQ0ksQUFvSDNCLENBOUV5QixDQStGTCxRQXZFUCxDQTZCVSxPQTJDQSxFQXZLQyxDQWdHeEIsSUE5RG9CLE1BaERJLEFBMkVILEFBa0JaLEFBcUJBLEFBZ0JBLENBU0ssR0E4Qk8sRUFhRSxLQXZLSSxDQWtDWCxDQTJGQyxRQThCTSxJQWFyQixDQXJJbUIsRUEyRkYsS0EvQ04sQUFxQlcsQUFnQkgsR0FuSEQsSUEySkEsSUE1RUcsQ0E1Q1QsQUEyRlcsU0E3SFAsRUEySkksQ0F4SFIsV0EyRk0sQ0ExRkYsQUF1QkMsQ0ExREgsSUEySmQsSUE1S08sQ0FxRmtCLEtBbkVOLENBbUNILENBdUJNLEFBbUVILGVBekZKLENBNkVJLENBaEhQLENBbUVMLENBMERlLEdBbkVYLEdBNUVZLEFBa0hPLElBL0ZsQixDQW1DYSxHQXVCM0IsUUF6RGtCLEFBNEhjLFVBMURkLEVBL0JvQixJQWpDcEIsRUF3RU0sUUFQeEIsSUEwRDRCLFlBMUhYLElBaUNFLFVBMEZGLENBMUhVLFdBMkczQixHQWdCMkIsU0ExSFcsYUF4QnBCLEdBOEZBLEFBcURNLEdBakNWLFVBakhJLEVBa0hKLENBcEJkLEVBdEVtQixJQTJISSxLQWhDTCxFQWxISixNQXNERyxNQXJERixFQWtIUyxBQWdDTCxPQTVGSSxJQXJESCxXQWtIcEIsT0FqSEEsNEJBcURtQixHQWhDRixjQWlDRyxDQWhDRyxVQTJIWixPQTFGUyxFQTJGQSxnQkExRkQsRUEyRmdCLGFBNUhoQixFQWtDRSxlQWpDRCxBQTRIUCxJQTFGcUIsT0EyRnRCLE9BNUhRLEdBNkhwQixhQTNGdUIsRUFqQ0osaUJBQ0UsRUFpQ1MsaUJBaENJLDhCQUNYLGlCQWdDTCxJQS9CRSxZQWdDTCxNQS9CZSxPQWdDOUIseURBL0JrQixnQkFDSCxhQUNmIiwiZmlsZSI6IkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFx1cGxvYWRcXFVwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyb3B6b25lIGZyb20gXCIuLi9kcm9wem9uZS9Ecm9wem9uZVwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSBcIi4uL3Byb2dyZXNzL1Byb2dyZXNzXCI7XHJcblxyXG5jbGFzcyBVcGxvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBmaWxlczogW10sXHJcbiAgICAgIHBvbGljeTogW10sXHJcbiAgICAgIHVwbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIHVwbG9hZFByb2dyZXNzOiB7fSxcclxuICAgICAgc3VjY2Vzc2Z1bGxVcGxvYWRlZDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5vbkZpbGVzQWRkZWQgPSB0aGlzLm9uRmlsZXNBZGRlZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51cGxvYWRGaWxlcyA9IHRoaXMudXBsb2FkRmlsZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2VuZFJlcXVlc3QgPSB0aGlzLnNlbmRSZXF1ZXN0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnJlbmRlckFjdGlvbnMgPSB0aGlzLnJlbmRlckFjdGlvbnMuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9uRmlsZXNBZGRlZChmaWxlcykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgZmlsZXM6IHByZXZTdGF0ZS5maWxlcy5jb25jYXQoZmlsZXMpXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyB1cGxvYWRGaWxlcygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB1cGxvYWRQcm9ncmVzczoge30sIHVwbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICB0aGlzLnN0YXRlLmZpbGVzLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgIHByb21pc2VzLnB1c2godGhpcy5zZW5kUmVxdWVzdChmaWxlKSk7XHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWNjZXNzZnVsbFVwbG9hZGVkOiB0cnVlLCB1cGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAvLyBOb3QgUHJvZHVjdGlvbiByZWFkeSEgRG8gc29tZSBlcnJvciBoYW5kbGluZyBoZXJlIGluc3RlYWQuLi5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1Y2Nlc3NmdWxsVXBsb2FkZWQ6IHRydWUsIHVwbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZW5kUmVxdWVzdChmaWxlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xyXG4gICAgICAgICAgY29uc3QgY29weSA9IHsgLi4udGhpcy5zdGF0ZS51cGxvYWRQcm9ncmVzcyB9O1xyXG4gICAgICAgICAgY29weVtmaWxlLm5hbWVdID0ge1xyXG4gICAgICAgICAgICBzdGF0ZTogXCJwZW5kaW5nXCIsXHJcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXBsb2FkUHJvZ3Jlc3M6IGNvcHkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHkgPSB7IC4uLnRoaXMuc3RhdGUudXBsb2FkUHJvZ3Jlc3MgfTtcclxuICAgICAgICBjb3B5W2ZpbGUubmFtZV0gPSB7IHN0YXRlOiBcImRvbmVcIiwgcGVyY2VudGFnZTogMTAwIH07XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVwbG9hZFByb2dyZXNzOiBjb3B5IH0pO1xyXG4gICAgICAgIHJlc29sdmUocmVxLnJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weSA9IHsgLi4udGhpcy5zdGF0ZS51cGxvYWRQcm9ncmVzcyB9O1xyXG4gICAgICAgIGNvcHlbZmlsZS5uYW1lXSA9IHsgc3RhdGU6IFwiZXJyb3JcIiwgcGVyY2VudGFnZTogMCB9O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGxvYWRQcm9ncmVzczogY29weSB9KTtcclxuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwb2xpY3lcIiwgcG9saWN5MSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSwgZmlsZS5uYW1lKTtcclxuXHJcbiAgICAgIHJlcS5vcGVuKFwiUE9TVFwiLCBcImh0dHBzOi8vYXBwLnRyaXBsZWNoZWNrLm5ldHdvcmsvdXBsb2FkXCIpO1xyXG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlclByb2dyZXNzKGZpbGUpIHtcclxuICAgIGNvbnN0IHVwbG9hZFByb2dyZXNzID0gdGhpcy5zdGF0ZS51cGxvYWRQcm9ncmVzc1tmaWxlLm5hbWVdO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUudXBsb2FkaW5nIHx8IHRoaXMuc3RhdGUuc3VjY2Vzc2Z1bGxVcGxvYWRlZCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZ3Jlc3NXcmFwcGVyXCI+XHJcbiAgICAgICAgICA8UHJvZ3Jlc3MgcHJvZ3Jlc3M9e3VwbG9hZFByb2dyZXNzID8gdXBsb2FkUHJvZ3Jlc3MucGVyY2VudGFnZSA6IDB9IC8+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIkNoZWNrSWNvblwiXHJcbiAgICAgICAgICAgIGFsdD1cImRvbmVcIlxyXG4gICAgICAgICAgICBzcmM9XCJiYXNlbGluZS1jaGVja19jaXJjbGVfb3V0bGluZS0yNHB4LnN2Z1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTpcclxuICAgICAgICAgICAgICAgIHVwbG9hZFByb2dyZXNzICYmIHVwbG9hZFByb2dyZXNzLnN0YXRlID09PSBcImRvbmVcIiA/IDAuNSA6IDBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJBY3Rpb25zKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuc3VjY2Vzc2Z1bGxVcGxvYWRlZCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicG9saWN5QnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlczogW10sIHN1Y2Nlc3NmdWxsVXBsb2FkZWQ6IGZhbHNlIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2xlYXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwb2xpY3lCdXR0b25cIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZmlsZXMubGVuZ3RoIDwgMCB8fCB0aGlzLnN0YXRlLnVwbG9hZGluZ31cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBsb2FkRmlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlVwbG9hZFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlRpdGxlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPERyb3B6b25lXHJcbiAgICAgICAgICAgICAgb25GaWxlc0FkZGVkPXt0aGlzLm9uRmlsZXNBZGRlZH1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS51cGxvYWRpbmcgfHwgdGhpcy5zdGF0ZS5zdWNjZXNzZnVsbFVwbG9hZGVkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxici8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsZXNcIj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZmlsZXMubWFwKGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZmlsZS5uYW1lfSBjbGFzc05hbWU9XCJSb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiRmlsZW5hbWVcIj57ZmlsZS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUHJvZ3Jlc3MoZmlsZSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwb2xpY3lCdXR0b25cIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZmlsZXMubGVuZ3RoIDwgMCB8fCB0aGlzLnN0YXRlLnVwbG9hZGluZ31cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBsb2FkRmlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPHNlbGVjdCBpZD1cInBvbGljeVwiIGNsYXNzTmFtZT1cInBvbGljeURyb3Bkb3duXCIgb25TZWxlY3Q9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBwb2xpY3k6IFtdLCBzdWNjZXNzZnVsbFVwbG9hZGVkOiBmYWxzZSB9KX0gPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvbGljeTFcIj5Qb2xpY3kgMTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvbGljeTJcIj5Qb2xpY3kgMjwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4uVXBsb2FkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleDogMTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBhbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDg1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvbGljeUJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtY29sb3I6ICMwMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy1sXHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5wb2xpY3lEcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLkNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLkZpbGVzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWNvbG9yOiAjRkZGO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleDogMTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5BY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICB9XHJcbiAgXHJcbiAgLlRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICB9XHJcbiAgXHJcbiAgLkZpbGVuYW1lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG4gIFxyXG4gIC5Sb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC5DaGVja0ljb24ge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5Qcm9ncmVzc1dyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBtZWRpdW1cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIG1pbi13aWR0aDogODhweDtcclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAzLCA1OCwgMTgzLCAxKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxODksIDE4OSwgMTg5KTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcblxyXG4gIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciB0YWJsZXRcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgLnJvdyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbjogLTEuNXJlbSAwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBcclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNlbnRlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2x1bW4yIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG5gfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZDsiXX0= */\n/*@ sourceURL=C:\\c-chain\\components\\upload\\Upload.js */"));
    }
  }]);

  return Upload;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ })

})
//# sourceMappingURL=index.js.d479af2e5c4a18df4c22.hot-update.js.map