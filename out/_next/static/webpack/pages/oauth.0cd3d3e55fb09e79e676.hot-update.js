webpackHotUpdate_N_E("pages/oauth",{

/***/ "./pages/oauth.js":
/*!************************!*\
  !*** ./pages/oauth.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_daniellewis_Documents_DungeonDJ_DungeonDJ_Landing_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_daniellewis_Documents_DungeonDJ_DungeonDJ_Landing_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_daniellewis_Documents_DungeonDJ_DungeonDJ_Landing_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_daniellewis_Documents_DungeonDJ_DungeonDJ_Landing_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_daniellewis_Documents_DungeonDJ_DungeonDJ_Landing_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Main */ \"./components/Main.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/daniellewis/Documents/DungeonDJ/DungeonDJ-Landing/pages/oauth.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_daniellewis_Documents_DungeonDJ_DungeonDJ_Landing_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_daniellewis_Documents_DungeonDJ_DungeonDJ_Landing_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_daniellewis_Documents_DungeonDJ_DungeonDJ_Landing_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n // import Footer from \"../components/Footer\"\n\nvar HeaderPage = /*#__PURE__*/function (_React$Component) {\n  Object(_Users_daniellewis_Documents_DungeonDJ_DungeonDJ_Landing_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HeaderPage, _React$Component);\n\n  var _super = _createSuper(HeaderPage);\n\n  function HeaderPage(props) {\n    var _this;\n\n    Object(_Users_daniellewis_Documents_DungeonDJ_DungeonDJ_Landing_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, HeaderPage);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      timeout: false,\n      loading: \"is-loading\"\n    };\n    return _this;\n  }\n\n  Object(_Users_daniellewis_Documents_DungeonDJ_DungeonDJ_Landing_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HeaderPage, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      this.timeoutId = setTimeout(function () {\n        _this2.setState({\n          loading: \"\"\n        });\n      }, 100);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      if (this.timeoutId) {\n        clearTimeout(this.timeoutId);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"body \".concat(this.state.loading),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n            children: \"DungeonDJ\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n            href: \"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i\",\n            rel: \"stylesheet\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n            rel: \"icon\",\n            type: \"image/png\",\n            href: \"static/images/recording@8x.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n          dangerouslySetInnerHTML: {\n            __html: _styles_main_scss__WEBPACK_IMPORTED_MODULE_8___default.a\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          id: \"bg\",\n          style: {\n            backgroundSize: \"cover\",\n            backgroundPosition: \"bottom\",\n            backgroundColor: \"black\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundImage: \"url(\\n                \".concat(false ? undefined : \"/static/images/background.png\", \"\\n              )\")\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          id: \"wrapper\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            timeout: this.state.timeout,\n            showLinks: false,\n            subtitle: \"Login successful, head back to the app\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return HeaderPage;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderPage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb2F1dGguanM/MDIxMCJdLCJuYW1lcyI6WyJIZWFkZXJQYWdlIiwicHJvcHMiLCJzdGF0ZSIsInRpbWVvdXQiLCJsb2FkaW5nIiwidGltZW91dElkIiwic2V0VGltZW91dCIsInNldFN0YXRlIiwiY2xlYXJUaW1lb3V0IiwiX19odG1sIiwic3R5bGVzaGVldCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRJbWFnZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtDQUVBOztJQUVNQSxVOzs7OztBQUNKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFBRSxLQURFO0FBRVhDLGFBQU8sRUFBRTtBQUZFLEtBQWI7QUFGaUI7QUFNbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2xCLFdBQUtDLFNBQUwsR0FBaUJDLFVBQVUsQ0FBQyxZQUFNO0FBQ2hDLGNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVILGlCQUFPLEVBQUU7QUFBWCxTQUFkO0FBQ0QsT0FGMEIsRUFFeEIsR0FGd0IsQ0FBM0I7QUFHRDs7OzJDQUVzQjtBQUNyQixVQUFJLEtBQUtDLFNBQVQsRUFBb0I7QUFDbEJHLG9CQUFZLENBQUMsS0FBS0gsU0FBTixDQUFaO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQ1AsMEJBQ0U7QUFBSyxpQkFBUyxpQkFBVSxLQUFLSCxLQUFMLENBQVdFLE9BQXJCLENBQWQ7QUFBQSxnQ0FDRSxxRUFBQyxnREFBRDtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFDRSxnQkFBSSxFQUFDLDJFQURQO0FBRUUsZUFBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQU1FO0FBQ0UsZUFBRyxFQUFDLE1BRE47QUFFRSxnQkFBSSxFQUFDLFdBRlA7QUFHRSxnQkFBSSxFQUFDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFjRTtBQUFPLGlDQUF1QixFQUFFO0FBQUVLLGtCQUFNLEVBQUVDLHdEQUFVQTtBQUFwQjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGLGVBZ0JFO0FBQ0UsWUFBRSxFQUFDLElBREw7QUFFRSxlQUFLLEVBQUU7QUFDTEMsMEJBQWMsRUFBRSxPQURYO0FBRUxDLDhCQUFrQixFQUFFLFFBRmY7QUFHTEMsMkJBQWUsRUFBRSxPQUhaO0FBSUxDLDRCQUFnQixFQUFFLFdBSmI7QUFLTEMsMkJBQWUsa0NBRVQsb0JBRUksK0JBSks7QUFMVjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJGLGVBaUNFO0FBQUssWUFBRSxFQUFDLFNBQVI7QUFBQSxpQ0FDRSxxRUFBQywwREFBRDtBQUFRLG1CQUFPLEVBQUUsS0FBS2IsS0FBTCxDQUFXQyxPQUE1QjtBQUFxQyxxQkFBUyxFQUFFLEtBQWhEO0FBQXVELG9CQUFRLEVBQUM7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBdUNEOzs7O0VBN0RzQmEsNENBQUssQ0FBQ0MsUzs7QUFnRWhCakIseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9vYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tIFwic3R5bGVzL21haW4uc2Nzc1wiXG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmltcG9ydCBNYWluIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5cIlxuLy8gaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIlxuXG5jbGFzcyBIZWFkZXJQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGltZW91dDogZmFsc2UsXG4gICAgICBsb2FkaW5nOiBcImlzLWxvYWRpbmdcIixcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IFwiXCIgfSlcbiAgICB9LCAxMDApXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy50aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYm9keSAke3RoaXMuc3RhdGUubG9hZGluZ31gfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkR1bmdlb25ESjwvdGl0bGU+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvOjMwMCwzMDBpLDYwMCw2MDBpXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgICBocmVmPVwic3RhdGljL2ltYWdlcy9yZWNvcmRpbmdAOHgucG5nXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGVzaGVldCB9fSAvPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cImJnXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJib3R0b21cIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcbiAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID8gYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvYmFja2dyb3VuZC5wbmdgXG4gICAgICAgICAgICAgICAgICAgIDogXCIvc3RhdGljL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApYCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgPEhlYWRlciB0aW1lb3V0PXt0aGlzLnN0YXRlLnRpbWVvdXR9IHNob3dMaW5rcz17ZmFsc2V9IHN1YnRpdGxlPVwiTG9naW4gc3VjY2Vzc2Z1bCwgaGVhZCBiYWNrIHRvIHRoZSBhcHBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/oauth.js\n");

/***/ })

})