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
        className: "jsx-1784435407" + " " + "Upload"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "jsx-1784435407" + " " + "Title"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1784435407" + " " + "Content"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1784435407"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_dropzone_Dropzone__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onFilesAdded: this.onFilesAdded,
        disabled: this.state.uploading || this.state.successfullUploaded
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("br", {
        className: "jsx-1784435407"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1784435407" + " " + "Files"
      }, this.state.files.map(function (file) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          key: file.name,
          className: "jsx-1784435407" + " " + "Row"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-1784435407" + " " + "Filename"
        }, file.name), _this5.renderProgress(file));
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("form", {
        className: "jsx-1784435407"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
        disabled: this.state.files.length < 0 || this.state.uploading,
        onClick: this.uploadFiles,
        className: "jsx-1784435407" + " " + "policyButton"
      }, "Upload"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("select", {
        id: "policy",
        onSelect: function onSelect() {
          return _this5.setState({
            policy: [],
            successfullUploaded: false
          });
        },
        className: "jsx-1784435407" + " " + "policyDropdown"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("option", {
        value: "policy1",
        className: "jsx-1784435407"
      }, "Policy 1"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("option", {
        value: "policy2",
        className: "jsx-1784435407"
      }, "Policy 2"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "1784435407"
      }, ".Upload.jsx-1784435407{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;text-align:left;overflow:hidden;width:300px;align:center;margin-left:850px;}.policyButton.jsx-1784435407{-webkit-appearance:none;position:relative;display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;text-color:#000;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:-10px;padding-l font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:2px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;margin-bottom:8px;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.policyDropdown.jsx-1784435407{display:inline-block;vertical-align:middle;text-transform:uppercase;text-align:center;line-height:0;white-space:nowrap;width:120px;height:30px;margin-left:8px;font-weight:500;font-size:12px;color:rgb(102,102,102);background-color:rgb(255,255,255);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;padding:0px 10px;margin-bottom:8px;border-radius:5px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-image:initial;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;overflow:hidden;outline:none;}.Content.jsx-1784435407{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-top:16px;box-sizing:border-box;width:100%;}.Files.jsx-1784435407{margin-left:32px;color:#FFF;font-color:#FFF;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;justify-items:flex-start;-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;}.Actions.jsx-1784435407{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;width:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:32px;}.Title.jsx-1784435407{margin-bottom:32px;color:#FFF;}.Filename.jsx-1784435407{margin-bottom:8px;padding-right:100px;font-size:12px;color:#FFF;}.Row.jsx-1784435407{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:50px;padding:8px;overflow:hidden;box-sizing:border-box;}.CheckIcon.jsx-1784435407{opacity:0.5;margin-left:32px;}.ProgressWrapper.jsx-1784435407{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}button.jsx-1784435407{font-family:\"Roboto medium\",sans-serif;font-size:14px;display:inline-block;height:36px;min-width:88px;padding:6px 16px;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;border-radius:2px;background:rgba(103,58,183,1);color:#fff;outline:0;}button.jsx-1784435407:disabled{background:rgb(189,189,189);cursor:default;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFx1cGxvYWRcXFVwbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrS29CLEFBSWtCLEFBWVcsQUFrQ0gsQUE2QlIsQUFRSSxBQVVKLEFBU00sQUFLRCxBQU9MLEFBV0QsQUFLQyxBQU8yQixBQXlCVixZQXBDYixLQTFDTixDQXdCUyxDQUxULEVBeERXLEdBbENKLElBd0VGLEFBOEVELENBcENqQixDQXZCQSxRQUtpQixDQTZCQSxHQTVITSxDQWtDSSxBQW9IM0IsQ0E5RXlCLFNBd0JaLENBNkJVLFNBNUhDLENBZ0d4QixJQTlEb0IsTUFoREksQUEyRUgsQUFrQlosQUFxQkEsQUFnQkEsQ0FTSyxVQTVIYSxDQWtDWCxDQTJGQyxhQTFGSSxFQTJGRixLQS9DTixBQXFCVyxBQWdCSCxHQW5IRCxRQStFRyxDQTVDVCxBQTJGVyxTQTdIUCxHQW1DSixXQTJGTSxDQTFGRixBQXVCQyxDQTFESCxRQWpCUCxDQXFGa0IsS0FuRU4sQ0FtQ0gsQ0F1Qk0sQUFtRUgsZUF6RkosQ0E2RUksQ0FoSFAsQ0FtRUwsQ0EwRGUsR0FuRVgsR0E1RVksQUFrSE8sSUEvRmxCLENBbUNhLEdBdUIzQixRQXpEb0IsQUE0SFksVUExRGQsRUEvQm9CLE1BakNwQixBQXdFTSxRQVB4QixJQTBENEIsY0ExSFgsRUFpQ0UsVUEwRkYsR0ExSFUsU0EyRzNCLEdBZ0IyQixXQTFIVyxXQXhCcEIsR0E4RkEsQUFxRE0sR0FqQ1YsVUFqSEksRUFrSEosQ0FwQmQsSUF0RW1CLEVBMkhJLEtBaENMLEVBbEhKLE1Bc0RHLE1BckRGLEVBa0hTLEFBZ0NMLE9BNUZJLElBckRILFdBa0hwQixPQWpIQSw0QkFxRG1CLEtBaENGLFlBaUNHLEdBaENHLFFBMkhaLE9BMUZTLEVBMkZBLGdCQTFGRCxFQTJGZ0IsZUE1SGhCLEFBa0NFLGVBMkZSLEVBNUhPLEVBa0NjLE9BMkZ0QixTQTVIUSxDQTZIcEIsYUEzRnVCLElBakNKLGlCQUNFLEFBaUNTLG1CQWhDSSw4QkFDWCxlQWdDTCxNQS9CRSxVQWdDTCxRQS9CZSxLQWdDOUIsMkRBL0JrQixnQkFDSCxhQUNmIiwiZmlsZSI6IkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFx1cGxvYWRcXFVwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyb3B6b25lIGZyb20gXCIuLi9kcm9wem9uZS9Ecm9wem9uZVwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSBcIi4uL3Byb2dyZXNzL1Byb2dyZXNzXCI7XHJcblxyXG5jbGFzcyBVcGxvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBmaWxlczogW10sXHJcbiAgICAgIHBvbGljeTogW10sXHJcbiAgICAgIHVwbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIHVwbG9hZFByb2dyZXNzOiB7fSxcclxuICAgICAgc3VjY2Vzc2Z1bGxVcGxvYWRlZDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5vbkZpbGVzQWRkZWQgPSB0aGlzLm9uRmlsZXNBZGRlZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51cGxvYWRGaWxlcyA9IHRoaXMudXBsb2FkRmlsZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2VuZFJlcXVlc3QgPSB0aGlzLnNlbmRSZXF1ZXN0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnJlbmRlckFjdGlvbnMgPSB0aGlzLnJlbmRlckFjdGlvbnMuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9uRmlsZXNBZGRlZChmaWxlcykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgZmlsZXM6IHByZXZTdGF0ZS5maWxlcy5jb25jYXQoZmlsZXMpXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyB1cGxvYWRGaWxlcygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB1cGxvYWRQcm9ncmVzczoge30sIHVwbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICB0aGlzLnN0YXRlLmZpbGVzLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgIHByb21pc2VzLnB1c2godGhpcy5zZW5kUmVxdWVzdChmaWxlKSk7XHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWNjZXNzZnVsbFVwbG9hZGVkOiB0cnVlLCB1cGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAvLyBOb3QgUHJvZHVjdGlvbiByZWFkeSEgRG8gc29tZSBlcnJvciBoYW5kbGluZyBoZXJlIGluc3RlYWQuLi5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1Y2Nlc3NmdWxsVXBsb2FkZWQ6IHRydWUsIHVwbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZW5kUmVxdWVzdChmaWxlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xyXG4gICAgICAgICAgY29uc3QgY29weSA9IHsgLi4udGhpcy5zdGF0ZS51cGxvYWRQcm9ncmVzcyB9O1xyXG4gICAgICAgICAgY29weVtmaWxlLm5hbWVdID0ge1xyXG4gICAgICAgICAgICBzdGF0ZTogXCJwZW5kaW5nXCIsXHJcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXBsb2FkUHJvZ3Jlc3M6IGNvcHkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHkgPSB7IC4uLnRoaXMuc3RhdGUudXBsb2FkUHJvZ3Jlc3MgfTtcclxuICAgICAgICBjb3B5W2ZpbGUubmFtZV0gPSB7IHN0YXRlOiBcImRvbmVcIiwgcGVyY2VudGFnZTogMTAwIH07XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVwbG9hZFByb2dyZXNzOiBjb3B5IH0pO1xyXG4gICAgICAgIHJlc29sdmUocmVxLnJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weSA9IHsgLi4udGhpcy5zdGF0ZS51cGxvYWRQcm9ncmVzcyB9O1xyXG4gICAgICAgIGNvcHlbZmlsZS5uYW1lXSA9IHsgc3RhdGU6IFwiZXJyb3JcIiwgcGVyY2VudGFnZTogMCB9O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGxvYWRQcm9ncmVzczogY29weSB9KTtcclxuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwb2xpY3lcIiwgcG9saWN5MSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSwgZmlsZS5uYW1lKTtcclxuXHJcbiAgICAgIHJlcS5vcGVuKFwiUE9TVFwiLCBcImh0dHBzOi8vYXBwLnRyaXBsZWNoZWNrLm5ldHdvcmsvdXBsb2FkXCIpO1xyXG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlclByb2dyZXNzKGZpbGUpIHtcclxuICAgIGNvbnN0IHVwbG9hZFByb2dyZXNzID0gdGhpcy5zdGF0ZS51cGxvYWRQcm9ncmVzc1tmaWxlLm5hbWVdO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUudXBsb2FkaW5nIHx8IHRoaXMuc3RhdGUuc3VjY2Vzc2Z1bGxVcGxvYWRlZCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZ3Jlc3NXcmFwcGVyXCI+XHJcbiAgICAgICAgICA8UHJvZ3Jlc3MgcHJvZ3Jlc3M9e3VwbG9hZFByb2dyZXNzID8gdXBsb2FkUHJvZ3Jlc3MucGVyY2VudGFnZSA6IDB9IC8+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIkNoZWNrSWNvblwiXHJcbiAgICAgICAgICAgIGFsdD1cImRvbmVcIlxyXG4gICAgICAgICAgICBzcmM9XCJiYXNlbGluZS1jaGVja19jaXJjbGVfb3V0bGluZS0yNHB4LnN2Z1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTpcclxuICAgICAgICAgICAgICAgIHVwbG9hZFByb2dyZXNzICYmIHVwbG9hZFByb2dyZXNzLnN0YXRlID09PSBcImRvbmVcIiA/IDAuNSA6IDBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJBY3Rpb25zKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuc3VjY2Vzc2Z1bGxVcGxvYWRlZCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicG9saWN5QnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlczogW10sIHN1Y2Nlc3NmdWxsVXBsb2FkZWQ6IGZhbHNlIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2xlYXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwb2xpY3lCdXR0b25cIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZmlsZXMubGVuZ3RoIDwgMCB8fCB0aGlzLnN0YXRlLnVwbG9hZGluZ31cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBsb2FkRmlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlVwbG9hZFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlRpdGxlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPERyb3B6b25lXHJcbiAgICAgICAgICAgICAgb25GaWxlc0FkZGVkPXt0aGlzLm9uRmlsZXNBZGRlZH1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS51cGxvYWRpbmcgfHwgdGhpcy5zdGF0ZS5zdWNjZXNzZnVsbFVwbG9hZGVkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxici8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsZXNcIj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZmlsZXMubWFwKGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZmlsZS5uYW1lfSBjbGFzc05hbWU9XCJSb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiRmlsZW5hbWVcIj57ZmlsZS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUHJvZ3Jlc3MoZmlsZSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwb2xpY3lCdXR0b25cIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZmlsZXMubGVuZ3RoIDwgMCB8fCB0aGlzLnN0YXRlLnVwbG9hZGluZ31cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBsb2FkRmlsZXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPHNlbGVjdCBpZD1cInBvbGljeVwiIGNsYXNzTmFtZT1cInBvbGljeURyb3Bkb3duXCIgb25TZWxlY3Q9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBwb2xpY3k6IFtdLCBzdWNjZXNzZnVsbFVwbG9hZGVkOiBmYWxzZSB9KX0gPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvbGljeTFcIj5Qb2xpY3kgMTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvbGljeTJcIj5Qb2xpY3kgMjwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4uVXBsb2FkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleDogMTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBhbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDg1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvbGljeUJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtY29sb3I6ICMwMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBwYWRkaW5nLWxcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnBvbGljeURyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuQ29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuRmlsZXMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtY29sb3I6ICNGRkY7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLkFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIH1cclxuICBcclxuICAuVGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICBcclxuICAuRmlsZW5hbWUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICB9XHJcbiAgXHJcbiAgLlJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLkNoZWNrSWNvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICB9XHJcbiAgXHJcbiAgLlByb2dyZXNzV3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIG1lZGl1bVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgbWluLXdpZHRoOiA4OHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDMsIDU4LCAxODMsIDEpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gIH1cclxuICBcclxuICBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE4OSwgMTg5LCAxODkpO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIH1cclxuYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWQ7Il19 */\n/*@ sourceURL=C:\\c-chain\\components\\upload\\Upload.js */"));
    }
  }]);

  return Upload;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ })

})
//# sourceMappingURL=index.js.1d203633c552cc06faba.hot-update.js.map