webpackHotUpdate_N_E("pages/auth/register",{

/***/ "./pages/auth/register.js":
/*!********************************!*\
  !*** ./pages/auth/register.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var layouts_Auth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! layouts/Auth.js */ "./layouts/Auth.js");



var _jsxFileName = "C:\\Users\\ZohaibYousaf\\Downloads\\ethmar-main\\ethmar-main\\pages\\auth\\register.js",
    _s = $RefreshSig$();


 // layout for page



function Register() {
  _s();

  const {
    0: name,
    1: setname
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: pwd,
    1: setpwd
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  function getCookie(name) //Cookie's value get from this function will use in ajax call
  {
    let cookieValue = null;

    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim(); // Does this cookie string begin with the name we want?

        if (cookie.substring(0, name.length + 1) === name + '=') {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }

    return cookieValue;
  }

  const registerUser = async () => {
    const d = {
      "email": email,
      'password': pwd,
      'full_name': name
    };
    $.ajax({
      type: 'post',
      url: 'http://127.0.0.1:8000/RegistrUser',
      data: {
        'data': d
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      success: function (data) {
        console.log(data);
      }
    });
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("head", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container mx-auto px-4 h-full",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex content-center items-center justify-center h-full",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full lg:w-6/12 px-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rounded-t mb-0 px-6 py-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "text-center mb-3",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                  className: "text-blueGray-500 text-sm font-bold"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                className: "mt-6 border-b-1 border-blueGray-300"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex-auto px-4 lg:px-10 py-10 pt-0",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "text-blueGray-400 text-center mb-3 font-bold",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                  children: "\u0627\u0643\u0645\u0644 \u0627\u0644\u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0644\u0644\u062A\u0633\u062C\u064A\u0644 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "relative w-full mb-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                  htmlFor: "grid-password",
                  children: "\u0627\u0644\u0627\u0633\u0645"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "email",
                  className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                  placeholder: "Name",
                  onChange: event => setname(event.target.value)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "relative w-full mb-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                  htmlFor: "grid-password",
                  children: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "email",
                  className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                  placeholder: "Email",
                  onChange: event => setEmail(event.target.value)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "relative w-full mb-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                  htmlFor: "grid-password",
                  children: "\u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631\u064A\u0629"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "password",
                  className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                  placeholder: "Password",
                  onChange: event => setpwd(event.target.value)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "inline-flex items-center cursor-pointer",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    id: "customCheckLogin",
                    type: "checkbox",
                    className: "form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "ml-2 text-sm font-semibold text-blueGray-600",
                    children: ["\u0627\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0627\u062D\u0643\u0627\u0645", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#pablo",
                      className: "text-lightBlue-500",
                      onClick: e => e.preventDefault(),
                      children: "Privacy Policy"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "text-center mt-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",
                  type: "button",
                  onClick: registerUser,
                  children: "\u0627\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Register, "EUVw1VoxjJPeMDxBAQxn2xcp+gI=");

_c = Register;
Register.layout = layouts_Auth_js__WEBPACK_IMPORTED_MODULE_3__["default"];

var _c;

$RefreshReg$(_c, "Register");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsIm5hbWUiLCJzZXRuYW1lIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicHdkIiwic2V0cHdkIiwiZ2V0Q29va2llIiwiY29va2llVmFsdWUiLCJkb2N1bWVudCIsImNvb2tpZSIsImNvb2tpZXMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJ0cmltIiwic3Vic3RyaW5nIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVnaXN0ZXJVc2VyIiwiZCIsIiQiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJoZWFkZXJzIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGF5b3V0IiwiQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRUE7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFFakMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDRyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQkosc0RBQVEsQ0FBQyxFQUFELENBQTlCOztBQUNBLFdBQVNLLFNBQVQsQ0FBbUJQLElBQW5CLEVBQXlCO0FBQ3ZCO0FBQ0UsUUFBSVEsV0FBVyxHQUFHLElBQWxCOztBQUNBLFFBQUlDLFFBQVEsQ0FBQ0MsTUFBVCxJQUFtQkQsUUFBUSxDQUFDQyxNQUFULEtBQW9CLEVBQTNDLEVBQStDO0FBQzdDLFlBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxNQUFU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QUFDQyxjQUFGLEVBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQW5ESixlQXVFSTtBQUFLLHlCQUFTLEVBQUMsa0JBQWY7QUFBQSx1Q0FDRTtBQUNFLDJCQUFTLEVBQUMsaU5BRFo7QUFFRSxzQkFBSSxFQUFDLFFBRlA7QUFFZ0IseUJBQU8sRUFBRWhCLFlBRnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkF2RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUEsa0JBREY7QUF5R0Q7O0dBakt1Qm5CLFE7O0tBQUFBLFE7QUFtS3hCQSxRQUFRLENBQUNvQyxNQUFULEdBQWtCQyx1REFBbEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9yZWdpc3Rlci4xNDQwZmM3NGJlMTBkZThhZGU2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gbGF5b3V0IGZvciBwYWdlXG5cbmltcG9ydCBBdXRoIGZyb20gXCJsYXlvdXRzL0F1dGguanNcIjtcbmltcG9ydCAge3VzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xuICBcbiAgY29uc3QgW25hbWUsIHNldG5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwd2QsIHNldHB3ZF0gPSB1c2VTdGF0ZSgnJylcbiAgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIC8vQ29va2llJ3MgdmFsdWUgZ2V0IGZyb20gdGhpcyBmdW5jdGlvbiB3aWxsIHVzZSBpbiBhamF4IGNhbGxcbiAgICB7XG4gICAgICBsZXQgY29va2llVmFsdWUgPSBudWxsO1xuICAgICAgaWYgKGRvY3VtZW50LmNvb2tpZSAmJiBkb2N1bWVudC5jb29raWUgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY29va2llID0gY29va2llc1tpXS50cmltKCk7XG4gICAgICAgICAgLy8gRG9lcyB0aGlzIGNvb2tpZSBzdHJpbmcgYmVnaW4gd2l0aCB0aGUgbmFtZSB3ZSB3YW50P1xuICAgICAgICAgIGlmIChjb29raWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoICsgMSkgPT09IChuYW1lICsgJz0nKSkge1xuICAgICAgICAgICAgY29va2llVmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZyhuYW1lLmxlbmd0aCArIDEpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvb2tpZVZhbHVlO1xuICAgIH1cblxuICBjb25zdCByZWdpc3RlclVzZXI9YXN5bmMgKCk9PntcbiAgIFxuICAgIGNvbnN0IGQ9e1wiZW1haWxcIjplbWFpbCwncGFzc3dvcmQnOnB3ZCwnZnVsbF9uYW1lJzpuYW1lfVxuICAgIFxuICAgIFxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAncG9zdCcsXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvUmVnaXN0clVzZXInLFxuICAgICAgZGF0YToge1xuICAgICAgICAnZGF0YSc6ZFxuICAgICAgfSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICBcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcblxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgXG4gICBcbiAgXG4gICAgXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxoZWFkPlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy42LjAvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PiBcbiAgICA8L2hlYWQ+XG4gICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgaC1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb250ZW50LWNlbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy02LzEyIHB4LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4tdy0wIGJyZWFrLXdvcmRzIHctZnVsbCBtYi02IHNoYWRvdy1sZyByb3VuZGVkLWxnIGJnLWJsdWVHcmF5LTIwMCBib3JkZXItMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtdCBtYi0wIHB4LTYgcHktNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtYmx1ZUdyYXktNTAwIHRleHQtc20gZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtdC02IGJvcmRlci1iLTEgYm9yZGVyLWJsdWVHcmF5LTMwMFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYXV0byBweC00IGxnOnB4LTEwIHB5LTEwIHB0LTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmx1ZUdyYXktNDAwIHRleHQtY2VudGVyIG1iLTMgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8c21hbGw+2KfZg9mF2YQg2KfZhNmF2KrYt9mE2KjYp9iqINmE2YTYqtiz2KzZitmEINmB2Yog2KfZhNmF2YjZgti5PC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdGV4dC1ibHVlR3JheS02MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImdyaWQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg2KfZhNin2LPZhVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0wIHB4LTMgcHktMyBwbGFjZWhvbGRlci1ibHVlR3JheS0zMDAgdGV4dC1ibHVlR3JheS02MDAgYmctd2hpdGUgcm91bmRlZCB0ZXh0LXNtIHNoYWRvdyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyB3LWZ1bGwgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdGV4dC1ibHVlR3JheS02MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImdyaWQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg2KfZhNio2LHZitivINin2YTYp9mE2YPYqtix2YjZhtmKXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTAgcHgtMyBweS0zIHBsYWNlaG9sZGVyLWJsdWVHcmF5LTMwMCB0ZXh0LWJsdWVHcmF5LTYwMCBiZy13aGl0ZSByb3VuZGVkIHRleHQtc20gc2hhZG93IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIHctZnVsbCBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRleHQtYmx1ZUdyYXktNjAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJncmlkLXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgINin2YTZg9mE2YXYqSDYp9mE2LPYsdmK2KlcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMCBweC0zIHB5LTMgcGxhY2Vob2xkZXItYmx1ZUdyYXktMzAwIHRleHQtYmx1ZUdyYXktNjAwIGJnLXdoaXRlIHJvdW5kZWQgdGV4dC1zbSBzaGFkb3cgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgdy1mdWxsIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldHB3ZChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXN0b21DaGVja0xvZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrYm94IGJvcmRlci0wIHJvdW5kZWQgdGV4dC1ibHVlR3JheS03MDAgbWwtMSB3LTUgaC01IGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWJsdWVHcmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg2KfZiNin2YHZgiDYudmE2Ykg2KfZhNi02LHZiNi3INmI2KfZhNin2K3Zg9in2YV7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1saWdodEJsdWUtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpdmFjeSBQb2xpY3lcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlR3JheS04MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctYmx1ZUdyYXktNjAwIHRleHQtc20gZm9udC1ib2xkIHVwcGVyY2FzZSBweC02IHB5LTMgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIHctZnVsbCBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtyZWdpc3RlclVzZXJ9XG4gICAgICAgICAgICAgICAgICAgID5cbtin2YbYtNin2KEg2K3Ys9in2KhcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuUmVnaXN0ZXIubGF5b3V0ID0gQXV0aDtcbiJdLCJzb3VyY2VSb290IjoiIn0=