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
        className: "jsx-1295011053" + " " + "Dropzone ".concat(this.state.hightlight ? "Highlight" : "")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        ref: this.fileInputRef,
        type: "file",
        multiple: true,
        onChange: this.onFilesAdded,
        className: "jsx-1295011053" + " " + "FileInput"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "upload",
        src: "../static/baseline-cloud_upload-24px.svg",
        className: "jsx-1295011053" + " " + "Icon"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1295011053"
      }, "Upload Files"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1295011053"
      }, ".Dropzone.jsx-1295011053{height:200px;width:200px;background-color:#fff;border:2px dashed rgb(187,186,186);border-radius:28%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:16px;}.Highlight.jsx-1295011053{background-color:rgb(188,185,236);}.Icon.jsx-1295011053{opacity:0.3;height:64px;width:64px;}.FileInput.jsx-1295011053{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxjLWNoYWluXFxjb21wb25lbnRzXFxkcm9wem9uZVxcRHJvcHpvbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZvQixBQUlrQixBQWF1QixBQUl4QixBQU1DLFlBTEQsQ0FqQkEsQUF1QmQsV0FMYSxDQWpCVyxTQVl4QixDQU1BLFlBakJ1QyxtQ0FDbkIsa0JBQ0wsMEVBQ00sNkZBQ0ksbUdBQ0QsOEVBQ1AsZUFDakIiLCJmaWxlIjoiQzpcXGMtY2hhaW5cXGNvbXBvbmVudHNcXGRyb3B6b25lXFxEcm9wem9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIERyb3B6b25lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgaGlnaHRsaWdodDogZmFsc2UgfTtcclxuICAgIHRoaXMuZmlsZUlucHV0UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblxyXG4gICAgdGhpcy5vcGVuRmlsZURpYWxvZyA9IHRoaXMub3BlbkZpbGVEaWFsb2cuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25GaWxlc0FkZGVkID0gdGhpcy5vbkZpbGVzQWRkZWQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25EcmFnT3ZlciA9IHRoaXMub25EcmFnT3Zlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkRyYWdMZWF2ZSA9IHRoaXMub25EcmFnTGVhdmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Ecm9wID0gdGhpcy5vbkRyb3AuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9wZW5GaWxlRGlhbG9nKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHJldHVybjtcclxuICAgIHRoaXMuZmlsZUlucHV0UmVmLmN1cnJlbnQuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIG9uRmlsZXNBZGRlZChldnQpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSByZXR1cm47XHJcbiAgICBjb25zdCBmaWxlcyA9IGV2dC50YXJnZXQuZmlsZXM7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkZpbGVzQWRkZWQpIHtcclxuICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLmZpbGVMaXN0VG9BcnJheShmaWxlcyk7XHJcbiAgICAgIHRoaXMucHJvcHMub25GaWxlc0FkZGVkKGFycmF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRHJhZ092ZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmVkKSByZXR1cm47XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaGlnaHRsaWdodDogdHJ1ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uRHJhZ0xlYXZlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaGlnaHRsaWdodDogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBvbkRyb3AoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmVkKSByZXR1cm47XHJcbiAgICBjb25zdCBmaWxlcyA9IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgIGlmICh0aGlzLnByb3BzLm9uRmlsZXNBZGRlZCkge1xyXG4gICAgICBjb25zdCBhcnJheSA9IHRoaXMuZmlsZUxpc3RUb0FycmF5KGZpbGVzKTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkZpbGVzQWRkZWQoYXJyYXkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhpZ2h0bGlnaHQ6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgZmlsZUxpc3RUb0FycmF5KGxpc3QpIHtcclxuICAgIGNvbnN0IGFycmF5ID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYXJyYXkucHVzaChsaXN0Lml0ZW0oaSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YERyb3B6b25lICR7dGhpcy5zdGF0ZS5oaWdodGxpZ2h0ID8gXCJIaWdobGlnaHRcIiA6IFwiXCJ9YH1cclxuICAgICAgICBvbkRyYWdPdmVyPXt0aGlzLm9uRHJhZ092ZXJ9XHJcbiAgICAgICAgb25EcmFnTGVhdmU9e3RoaXMub25EcmFnTGVhdmV9XHJcbiAgICAgICAgb25Ecm9wPXt0aGlzLm9uRHJvcH1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW5GaWxlRGlhbG9nfVxyXG4gICAgICAgIHN0eWxlPXt7IGN1cnNvcjogdGhpcy5wcm9wcy5kaXNhYmxlZCA/IFwiZGVmYXVsdFwiIDogXCJwb2ludGVyXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcmVmPXt0aGlzLmZpbGVJbnB1dFJlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIkZpbGVJbnB1dFwiXHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWxlc0FkZGVkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgYWx0PVwidXBsb2FkXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIkljb25cIlxyXG4gICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2Jhc2VsaW5lLWNsb3VkX3VwbG9hZC0yNHB4LnN2Z1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3Bhbj5VcGxvYWQgRmlsZXM8L3NwYW4+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuLkRyb3B6b25lIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHJnYigxODcsIDE4NiwgMTg2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI4JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuSGlnaGxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODgsIDE4NSwgMjM2KTtcclxuICB9XHJcbiAgXHJcbiAgLkljb24ge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5GaWxlSW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcHpvbmU7Il19 */\n/*@ sourceURL=C:\\c-chain\\components\\dropzone\\Dropzone.js */"));
    }
  }]);

  return Dropzone;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dropzone);

/***/ })

})
//# sourceMappingURL=index.js.3eba5bce18380743c518.hot-update.js.map