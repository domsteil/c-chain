webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/dropzone/Dropzone.js":
/*!*****************************************!*\
  !*** ./components/dropzone/Dropzone.js ***!
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









var Dropzone =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Dropzone, _Component);

  function Dropzone(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dropzone);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Dropzone).call(this, props));
    _this.state = {
      hightlight: false
    };
    _this.fileInputRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.openFileDialog = _this.openFileDialog.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onFilesAdded = _this.onFilesAdded.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onDragOver = _this.onDragOver.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onDragLeave = _this.onDragLeave.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onDrop = _this.onDrop.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dropzone, [{
    key: "openFileDialog",
    value: function openFileDialog() {
      if (this.props.disabled) return;
      this.fileInputRef.current.click();
    }
  }, {
    key: "onFilesAdded",
    value: function onFilesAdded(evt) {
      if (this.props.disabled) return;
      var files = evt.target.files;

      if (this.props.onFilesAdded) {
        var array = this.fileListToArray(files);
        this.props.onFilesAdded(array);
      }
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(event) {
      event.preventDefault();
      if (this.props.disabed) return;
      this.setState({
        hightlight: true
      });
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(event) {
      this.setState({
        hightlight: false
      });
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      event.preventDefault();
      if (this.props.disabed) return;
      var files = event.dataTransfer.files;

      if (this.props.onFilesAdded) {
        var array = this.fileListToArray(files);
        this.props.onFilesAdded(array);
      }

      this.setState({
        hightlight: false
      });
    }
  }, {
    key: "fileListToArray",
    value: function fileListToArray(list) {
      var array = [];

      for (var i = 0; i < list.length; i++) {
        array.push(list.item(i));
      }

      return array;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onDragOver: this.onDragOver,
        onDragLeave: this.onDragLeave,
        onDrop: this.onDrop,
        onClick: this.openFileDialog,
        style: {
          cursor: this.props.disabled ? "default" : "pointer"
        },
        className: "jsx-2968058216" + " " + "Dropzone ".concat(this.state.hightlight ? "Highlight" : "")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        ref: this.fileInputRef,
        type: "file",
        multiple: true,
        onChange: this.onFilesAdded,
        className: "jsx-2968058216" + " " + "FileInput"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "upload",
        src: "../static/baseline-cloud_upload-24px.svg",
        className: "jsx-2968058216" + " " + "Icon"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2968058216"
      }, "Upload Files"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2968058216"
      }, ".Dropzone.jsx-2968058216{height:200px;width:200px;background-color:#fff;border:2px dashed rgb(187,186,186);border-radius:28%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:.2;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:16px;}.Highlight.jsx-2968058216{background-color:rgb(188,185,236);}.Icon.jsx-2968058216{opacity:0.3;height:64px;width:64px;}.FileInput.jsx-2968058216{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxkcm9wem9uZVxcRHJvcHpvbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZvQixBQUlrQixBQWN1QixBQUl4QixBQU1DLFlBTEQsQ0FsQkEsQUF3QmQsV0FMYSxDQWxCVyxTQWF4QixDQU1BLFlBbEJ1QyxtQ0FDbkIsa0JBQ0wsMEVBQ0YsV0FDUSw2RkFDSSxtR0FDRCw4RUFDUCxlQUNqQiIsImZpbGUiOiJDOlxcYy1jaGFpblxcY29tcG9uZW50c1xcZHJvcHpvbmVcXERyb3B6b25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgRHJvcHpvbmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBoaWdodGxpZ2h0OiBmYWxzZSB9O1xyXG4gICAgdGhpcy5maWxlSW5wdXRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHJcbiAgICB0aGlzLm9wZW5GaWxlRGlhbG9nID0gdGhpcy5vcGVuRmlsZURpYWxvZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkZpbGVzQWRkZWQgPSB0aGlzLm9uRmlsZXNBZGRlZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkRyYWdPdmVyID0gdGhpcy5vbkRyYWdPdmVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRHJhZ0xlYXZlID0gdGhpcy5vbkRyYWdMZWF2ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkRyb3AgPSB0aGlzLm9uRHJvcC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb3BlbkZpbGVEaWFsb2coKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5maWxlSW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgb25GaWxlc0FkZGVkKGV2dCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHJldHVybjtcclxuICAgIGNvbnN0IGZpbGVzID0gZXZ0LnRhcmdldC5maWxlcztcclxuICAgIGlmICh0aGlzLnByb3BzLm9uRmlsZXNBZGRlZCkge1xyXG4gICAgICBjb25zdCBhcnJheSA9IHRoaXMuZmlsZUxpc3RUb0FycmF5KGZpbGVzKTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkZpbGVzQWRkZWQoYXJyYXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25EcmFnT3ZlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLnByb3BzLmRpc2FiZWQpIHJldHVybjtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBoaWdodGxpZ2h0OiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25EcmFnTGVhdmUoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBoaWdodGxpZ2h0OiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIG9uRHJvcChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLnByb3BzLmRpc2FiZWQpIHJldHVybjtcclxuICAgIGNvbnN0IGZpbGVzID0gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25GaWxlc0FkZGVkKSB7XHJcbiAgICAgIGNvbnN0IGFycmF5ID0gdGhpcy5maWxlTGlzdFRvQXJyYXkoZmlsZXMpO1xyXG4gICAgICB0aGlzLnByb3BzLm9uRmlsZXNBZGRlZChhcnJheSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaGlnaHRsaWdodDogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBmaWxlTGlzdFRvQXJyYXkobGlzdCkge1xyXG4gICAgY29uc3QgYXJyYXkgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhcnJheS5wdXNoKGxpc3QuaXRlbShpKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgRHJvcHpvbmUgJHt0aGlzLnN0YXRlLmhpZ2h0bGlnaHQgPyBcIkhpZ2hsaWdodFwiIDogXCJcIn1gfVxyXG4gICAgICAgIG9uRHJhZ092ZXI9e3RoaXMub25EcmFnT3Zlcn1cclxuICAgICAgICBvbkRyYWdMZWF2ZT17dGhpcy5vbkRyYWdMZWF2ZX1cclxuICAgICAgICBvbkRyb3A9e3RoaXMub25Ecm9wfVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub3BlbkZpbGVEaWFsb2d9XHJcbiAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiB0aGlzLnByb3BzLmRpc2FibGVkID8gXCJkZWZhdWx0XCIgOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICByZWY9e3RoaXMuZmlsZUlucHV0UmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiRmlsZUlucHV0XCJcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZpbGVzQWRkZWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBhbHQ9XCJ1cGxvYWRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiSWNvblwiXHJcbiAgICAgICAgICBzcmM9XCIuLi9zdGF0aWMvYmFzZWxpbmUtY2xvdWRfdXBsb2FkLTI0cHguc3ZnXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuPlVwbG9hZCBGaWxlczwvc3Bhbj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4uRHJvcHpvbmUge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgcmdiKDE4NywgMTg2LCAxODYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjglO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG9wYWNpdHk6IC4yO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLkhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxODUsIDIzNik7XHJcbiAgfVxyXG4gIFxyXG4gIC5JY29uIHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gIH1cclxuICBcclxuICAuRmlsZUlucHV0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3B6b25lOyJdfQ== */\n/*@ sourceURL=C:\\c-chain\\components\\dropzone\\Dropzone.js */"));
    }
  }]);

  return Dropzone;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dropzone);

/***/ })

})
//# sourceMappingURL=index.js.a895465de2ea9ddb52fc.hot-update.js.map