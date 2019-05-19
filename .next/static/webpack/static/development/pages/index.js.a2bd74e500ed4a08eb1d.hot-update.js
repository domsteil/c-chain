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
        formData.append("policy", policy, policy.name);
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
        className: "jsx-1519292569" + " " + "Upload"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "jsx-1519292569" + " " + "Title"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1519292569" + " " + "Content"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1519292569"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_dropzone_Dropzone__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onFilesAdded: this.onFilesAdded,
        disabled: this.state.uploading || this.state.successfullUploaded
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1519292569" + " " + "Files"
      }, this.state.files.map(function (file) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          key: file.name,
          className: "jsx-1519292569" + " " + "Row"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-1519292569" + " " + "Filename"
        }, file.name), _this5.renderProgress(file));
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1519292569" + " " + "Actions"
      }, this.renderActions()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("form", {
        id: "policy",
        className: "jsx-1519292569"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("select", {
        onSelect: function onSelect() {
          return _this5.setState({
            policy: [],
            successfullUploaded: false
          });
        },
        className: "jsx-1519292569" + " " + "PolicyButton"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("option", {
        value: "policy1",
        className: "jsx-1519292569"
      }, "Policy 1"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("option", {
        value: "policy2",
        className: "jsx-1519292569"
      }, "Policy 2"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "1519292569"
      }, ".Upload.jsx-1519292569{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;text-align:left;overflow:hidden;width:300px;align:center;margin-left:800px;}.PolicyButton.jsx-1519292569{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;text-color:#000;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;}.Content.jsx-1519292569{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-top:16px;box-sizing:border-box;width:100%;}.Files.jsx-1519292569{margin-left:32px;color:#FFF;font-color:#FFF;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;justify-items:flex-start;-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;}.Actions.jsx-1519292569{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;width:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:32px;}.Title.jsx-1519292569{margin-bottom:32px;color:#FFF;}.Filename.jsx-1519292569{margin-bottom:8px;padding-right:100px;font-size:12px;color:#FFF;}.Row.jsx-1519292569{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:50px;padding:8px;overflow:hidden;box-sizing:border-box;}.CheckIcon.jsx-1519292569{opacity:0.5;margin-left:32px;}.ProgressWrapper.jsx-1519292569{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}button.jsx-1519292569{font-family:\"Roboto medium\",sans-serif;font-size:14px;display:inline-block;height:36px;min-width:88px;padding:6px 16px;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;border-radius:2px;background:rgba(103,58,183,1);color:#fff;outline:0;}button.jsx-1519292569:disabled{background:rgb(189,189,189);cursor:default;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFx1cGxvYWRcXFVwbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwSm9CLEFBSWtCLEFBWVcsQUE4QlgsQUFRSSxBQVVKLEFBU00sQUFLRCxBQU9MLEFBV0QsQUFLQyxBQU8yQixBQXlCVixZQXBDYixLQTFDTixDQXdCUyxDQUxULEtBekRPLElBdUNGLEFBOEVELENBcENqQixDQXZCQSxRQUtpQixDQTZCQSxHQTNGTSxDQXFIdkIsQ0E5RXlCLFNBd0JaLENBNkJVLFNBM0ZDLENBK0R4QixVQTdFd0IsQUEwQ0gsQUFrQlosQUFxQkEsQUFnQkEsQ0FTSyxVQTNGYSxFQTRGVixlQUNFLEtBL0NOLEFBcUJXLEFBZ0JILEdBbEZELFFBOENHLENBK0NFLFNBNUZQLGNBNkZFLENBbkVELENBekJILFFBakJQLENBb0RrQixLQWxDTixFQXlCRyxBQW1FSCxnQkFaQSxDQS9FUCxDQWtDTCxDQTBEZSxHQW5FWCxHQTNDWSxBQWlGTyxJQTlEbEIsSUF5QmQsUUF4QmtCLEFBMkZjLFVBMURkLE1BaENBLEVBd0NNLFFBUHhCLElBMEQ0QixFQTFGWCxlQUNVLFNBMEZWLFlBZmpCLEVBMUVzQyxDQTBGWCxzQkFqSFQsR0E2REEsQUFxRE0sR0FqQ1YsS0F6REssS0F2QkQsRUFpRkosQ0FwQmQsTUFxRHVCLEtBaENMLEVBakZKLFlBQ0MsRUFpRlMsQUFnQ0wsV0FoSEMsV0FpRnBCLE9BaEZBLHFCQW9CaUIsZUFDTSxvQkEyRlosU0FDUyxrQkFDZSxHQTVGaEIsaUJBQ0MsVUE0RlAsUUEzRk8sR0E0RlIsVUFDWixLQTVGbUIsaUJBQ0UsbUJBQ2EsOEJBQ1gscUJBQ08sZ0VBQzlCIiwiZmlsZSI6IkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFx1cGxvYWRcXFVwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyb3B6b25lIGZyb20gXCIuLi9kcm9wem9uZS9Ecm9wem9uZVwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSBcIi4uL3Byb2dyZXNzL1Byb2dyZXNzXCI7XHJcblxyXG5jbGFzcyBVcGxvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBmaWxlczogW10sXHJcbiAgICAgIHBvbGljeTogW10sXHJcbiAgICAgIHVwbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIHVwbG9hZFByb2dyZXNzOiB7fSxcclxuICAgICAgc3VjY2Vzc2Z1bGxVcGxvYWRlZDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5vbkZpbGVzQWRkZWQgPSB0aGlzLm9uRmlsZXNBZGRlZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51cGxvYWRGaWxlcyA9IHRoaXMudXBsb2FkRmlsZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2VuZFJlcXVlc3QgPSB0aGlzLnNlbmRSZXF1ZXN0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnJlbmRlckFjdGlvbnMgPSB0aGlzLnJlbmRlckFjdGlvbnMuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9uRmlsZXNBZGRlZChmaWxlcykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgZmlsZXM6IHByZXZTdGF0ZS5maWxlcy5jb25jYXQoZmlsZXMpXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyB1cGxvYWRGaWxlcygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB1cGxvYWRQcm9ncmVzczoge30sIHVwbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICB0aGlzLnN0YXRlLmZpbGVzLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgIHByb21pc2VzLnB1c2godGhpcy5zZW5kUmVxdWVzdChmaWxlKSk7XHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWNjZXNzZnVsbFVwbG9hZGVkOiB0cnVlLCB1cGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAvLyBOb3QgUHJvZHVjdGlvbiByZWFkeSEgRG8gc29tZSBlcnJvciBoYW5kbGluZyBoZXJlIGluc3RlYWQuLi5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1Y2Nlc3NmdWxsVXBsb2FkZWQ6IHRydWUsIHVwbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZW5kUmVxdWVzdChmaWxlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xyXG4gICAgICAgICAgY29uc3QgY29weSA9IHsgLi4udGhpcy5zdGF0ZS51cGxvYWRQcm9ncmVzcyB9O1xyXG4gICAgICAgICAgY29weVtmaWxlLm5hbWVdID0ge1xyXG4gICAgICAgICAgICBzdGF0ZTogXCJwZW5kaW5nXCIsXHJcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXBsb2FkUHJvZ3Jlc3M6IGNvcHkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHkgPSB7IC4uLnRoaXMuc3RhdGUudXBsb2FkUHJvZ3Jlc3MgfTtcclxuICAgICAgICBjb3B5W2ZpbGUubmFtZV0gPSB7IHN0YXRlOiBcImRvbmVcIiwgcGVyY2VudGFnZTogMTAwIH07XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVwbG9hZFByb2dyZXNzOiBjb3B5IH0pO1xyXG4gICAgICAgIHJlc29sdmUocmVxLnJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weSA9IHsgLi4udGhpcy5zdGF0ZS51cGxvYWRQcm9ncmVzcyB9O1xyXG4gICAgICAgIGNvcHlbZmlsZS5uYW1lXSA9IHsgc3RhdGU6IFwiZXJyb3JcIiwgcGVyY2VudGFnZTogMCB9O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGxvYWRQcm9ncmVzczogY29weSB9KTtcclxuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwb2xpY3lcIiwgcG9saWN5LCBwb2xpY3kubmFtZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSwgZmlsZS5uYW1lKTtcclxuXHJcbiAgICAgIHJlcS5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly9lYzItMTgtMjA0LTM0LTM0LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tOjUwMDAvdXBsb2FkXCIpO1xyXG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlclByb2dyZXNzKGZpbGUpIHtcclxuICAgIGNvbnN0IHVwbG9hZFByb2dyZXNzID0gdGhpcy5zdGF0ZS51cGxvYWRQcm9ncmVzc1tmaWxlLm5hbWVdO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUudXBsb2FkaW5nIHx8IHRoaXMuc3RhdGUuc3VjY2Vzc2Z1bGxVcGxvYWRlZCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZ3Jlc3NXcmFwcGVyXCI+XHJcbiAgICAgICAgICA8UHJvZ3Jlc3MgcHJvZ3Jlc3M9e3VwbG9hZFByb2dyZXNzID8gdXBsb2FkUHJvZ3Jlc3MucGVyY2VudGFnZSA6IDB9IC8+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIkNoZWNrSWNvblwiXHJcbiAgICAgICAgICAgIGFsdD1cImRvbmVcIlxyXG4gICAgICAgICAgICBzcmM9XCJiYXNlbGluZS1jaGVja19jaXJjbGVfb3V0bGluZS0yNHB4LnN2Z1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTpcclxuICAgICAgICAgICAgICAgIHVwbG9hZFByb2dyZXNzICYmIHVwbG9hZFByb2dyZXNzLnN0YXRlID09PSBcImRvbmVcIiA/IDAuNSA6IDBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJBY3Rpb25zKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuc3VjY2Vzc2Z1bGxVcGxvYWRlZCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiUG9saWN5QnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlczogW10sIHN1Y2Nlc3NmdWxsVXBsb2FkZWQ6IGZhbHNlIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2xlYXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJQb2xpY3lCdXR0b25cIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZmlsZXMubGVuZ3RoIDwgMCB8fCB0aGlzLnN0YXRlLnVwbG9hZGluZ31cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBsb2FkRmlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlVwbG9hZFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlRpdGxlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPERyb3B6b25lXHJcbiAgICAgICAgICAgICAgb25GaWxlc0FkZGVkPXt0aGlzLm9uRmlsZXNBZGRlZH1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS51cGxvYWRpbmcgfHwgdGhpcy5zdGF0ZS5zdWNjZXNzZnVsbFVwbG9hZGVkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbGVzXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZpbGVzLm1hcChmaWxlID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZpbGUubmFtZX0gY2xhc3NOYW1lPVwiUm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkZpbGVuYW1lXCI+e2ZpbGUubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclByb2dyZXNzKGZpbGUpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFjdGlvbnNcIj57dGhpcy5yZW5kZXJBY3Rpb25zKCl9PC9kaXY+XHJcblxyXG4gICAgICAgIDxmb3JtIGlkPVwicG9saWN5XCI+XHJcbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJQb2xpY3lCdXR0b25cIiBvblNlbGVjdD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHBvbGljeTogW10sIHN1Y2Nlc3NmdWxsVXBsb2FkZWQ6IGZhbHNlIH0pfSA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicG9saWN5MVwiPlBvbGljeSAxPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicG9saWN5MlwiPlBvbGljeSAyPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbi5VcGxvYWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogODAwcHg7XHJcbiAgfVxyXG5cclxuICAuUG9saWN5QnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1jb2xvcjogIzAwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcclxuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5Db250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5GaWxlcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1jb2xvcjogI0ZGRjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuQWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5UaXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG4gIFxyXG4gIC5GaWxlbmFtZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICBcclxuICAuUm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAuQ2hlY2tJY29uIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gIH1cclxuICBcclxuICAuUHJvZ3Jlc3NXcmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gbWVkaXVtXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBtaW4td2lkdGg6IDg4cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwMywgNTgsIDE4MywgMSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTg5LCAxODksIDE4OSk7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG5gfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZDsiXX0= */\n/*@ sourceURL=C:\\c-chain\\components\\upload\\Upload.js */"));
    }
  }]);

  return Upload;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ })

})
//# sourceMappingURL=index.js.a2bd74e500ed4a08eb1d.hot-update.js.map