webpackHotUpdate_N_E("pages/auth/login",{

/***/ "./pages/auth/login.js":
/*!*****************************!*\
  !*** ./pages/auth/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var layouts_Auth_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! layouts/Auth.js */ "./layouts/Auth.js");



var _jsxFileName = "C:\\Users\\ZohaibYousaf\\Downloads\\ethmar-main\\ethmar-main\\pages\\auth\\login.js",
    _s = $RefreshSig$();



 // layout for page



function Login() {
  _s();

  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: pwd,
    1: setpwd
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const loginuser = async () => {
    const d = {
      "email": email,
      'password': pwd
    };
    const response = await fetch('http://127.0.0.1:8000/LoginUser', {
      method: 'POST',
      body: JSON.stringify(d)
    });
    const data = await response.json();
    console.log(data);

    try {
      console.log();
      $("#errorMSG").html(data);
      $("#errorMSG").attr('hidden', false);
      $("#successMSG").attr('hidden', true);
      console.log(data);
    } catch (error) {
      $("#successMSG").html(data['msg']);
      $("#errorMSG").attr('hidden', true);
      $("#successMSG").attr('hidden', false);
      console.log(data);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("head", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container mx-auto px-4 h-full",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex content-center items-center justify-center h-full",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full lg:w-4/12 px-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rounded-t mb-0 px-6 py-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "text-center mb-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                  className: "text-blueGray-500 text-sm font-bold"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  class: "alert alert-success",
                  id: "successMSG",
                  hidden: true,
                  role: "alert"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  class: "alert alert-info",
                  id: "errorMSG",
                  hidden: true,
                  role: "alert"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                className: "mt-6 border-b-1 border-blueGray-300"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex-auto px-4 lg:px-10 py-10 pt-0",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "text-blueGray-400 text-center mb-3 font-bold",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                  children: "\u0627\u0643\u0645\u0644 \u0627\u0644\u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0644\u0644\u062A\u0633\u062C\u064A\u0644"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "relative w-full mb-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                  htmlFor: "grid-password",
                  children: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "email",
                  className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                  placeholder: "Email",
                  onChange: event => setEmail(event.target.value)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "relative w-full mb-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                  htmlFor: "grid-password",
                  children: "\u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631\u064A\u0629"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "password",
                  className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                  placeholder: "Password",
                  onChange: event => setpwd(event.target.value)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
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
                    lineNumber: 99,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "ml-2 text-sm font-semibold text-blueGray-600",
                    children: "\u062A\u0630\u0643\u0631 \u0627\u0644\u062D\u0633\u0627\u0628"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "text-center mt-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",
                  type: "button",
                  onClick: loginuser,
                  children: "\u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644                    "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-wrap mt-6 relative",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w-1/2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#pablo",
                onClick: e => e.preventDefault(),
                className: "text-blueGray-200",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                  children: "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w-1/2 text-right",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/auth/register",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#pablo",
                  className: "text-blueGray-200",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    children: "\u0645\u0633\u062A\u062E\u062F\u0645 \u062C\u062F\u064A\u062F\u061F"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Login, "Os3AnHCvw37N+rmbcvLrqqjG8fs=");

_c = Login;
Login.layout = layouts_Auth_js__WEBPACK_IMPORTED_MODULE_4__["default"];

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VTdGF0ZSIsInB3ZCIsInNldHB3ZCIsImxvZ2ludXNlciIsImQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCIkIiwiaHRtbCIsImF0dHIiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJsYXlvdXQiLCJBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsR0FBRDtBQUFBLE9BQU1DO0FBQU4sTUFBZ0JGLHNEQUFRLENBQUMsRUFBRCxDQUE5Qjs7QUFDQSxRQUFNRyxTQUFTLEdBQUMsWUFBVTtBQUN4QixVQUFNQyxDQUFDLEdBQUM7QUFBQyxlQUFRTixLQUFUO0FBQWUsa0JBQVdHO0FBQTFCLEtBQVI7QUFDQSxVQUFNSSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGlDQUFELEVBQW9DO0FBQzlEQyxZQUFNLEVBQUUsTUFEc0Q7QUFFOURDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLENBQWY7QUFGd0QsS0FBcEMsQ0FBNUI7QUFLQSxVQUFNTyxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFULEVBQW5CO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaOztBQUVBLFFBQUc7QUFDREUsYUFBTyxDQUFDQyxHQUFSO0FBQ0ZDLE9BQUMs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Syx1QkFBUyxFQUFDLGtCQUFmO0FBQUEscUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxvQkFBSSxFQUFDLGdCQUFYO0FBQUEsdUNBQ0U7QUFBRyxzQkFBSSxFQUFDLFFBQVI7QUFBaUIsMkJBQVMsRUFBQyxtQkFBM0I7QUFBQSx5Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBM0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQSxrQkFERjtBQXlHRDs7R0F4SXVCMUIsSzs7S0FBQUEsSztBQTBJeEJBLEtBQUssQ0FBQzJCLE1BQU4sR0FBZUMsdURBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9sb2dpbi5kNDU2ZDJjMWJkMDFmODU2NmE5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0ICB7dXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGxheW91dCBmb3IgcGFnZVxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBBdXRoIGZyb20gXCJsYXlvdXRzL0F1dGguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwd2QsIHNldHB3ZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgbG9naW51c2VyPWFzeW5jICgpPT57XG4gICAgY29uc3QgZD17XCJlbWFpbFwiOmVtYWlsLCdwYXNzd29yZCc6cHdkfVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9Mb2dpblVzZXInLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGQpLFxuICAgICAgXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgIFxuICAgIHRyeXtcbiAgICAgIGNvbnNvbGUubG9nKClcbiAgICAkKFwiI2Vycm9yTVNHXCIpLmh0bWwoZGF0YSk7XG4gICAgJChcIiNlcnJvck1TR1wiKS5hdHRyKCdoaWRkZW4nLCBmYWxzZSk7XG4gICAgJChcIiNzdWNjZXNzTVNHXCIpLmF0dHIoJ2hpZGRlbicsIHRydWUpO1xuICBcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cbiAgICBjYXRjaChlcnJvcilcbiAgICB7XG4gICAgICBcbiAgICAgICQoXCIjc3VjY2Vzc01TR1wiKS5odG1sKGRhdGFbJ21zZyddKTtcbiAgICAgICQoXCIjZXJyb3JNU0dcIikuYXR0cignaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAkKFwiI3N1Y2Nlc3NNU0dcIikuYXR0cignaGlkZGVuJywgZmFsc2UpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG4gICAgXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxoZWFkPlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy42LjAvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PiBcbiAgICA8L2hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgaC1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb250ZW50LWNlbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy00LzEyIHB4LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4tdy0wIGJyZWFrLXdvcmRzIHctZnVsbCBtYi02IHNoYWRvdy1sZyByb3VuZGVkLWxnIGJnLWJsdWVHcmF5LTIwMCBib3JkZXItMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtdCBtYi0wIHB4LTYgcHktNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtYmx1ZUdyYXktNTAwIHRleHQtc20gZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBpZD1cInN1Y2Nlc3NNU0dcIiBoaWRkZW4gcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgaWQ9XCJlcnJvck1TR1wiIGhpZGRlbiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtNiBib3JkZXItYi0xIGJvcmRlci1ibHVlR3JheS0zMDBcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWF1dG8gcHgtNCBsZzpweC0xMCBweS0xMCBwdC0wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWVHcmF5LTQwMCB0ZXh0LWNlbnRlciBtYi0zIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgPHNtYWxsPtin2YPZhdmEINin2YTZhdiq2LfZhNio2KfYqiDZhNmE2KrYs9is2YrZhDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRleHQtYmx1ZUdyYXktNjAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJncmlkLXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgINin2YTYqNix2YrYryDYp9mE2KfZhNmD2KrYsdmI2YbZilxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0wIHB4LTMgcHktMyBwbGFjZWhvbGRlci1ibHVlR3JheS0zMDAgdGV4dC1ibHVlR3JheS02MDAgYmctd2hpdGUgcm91bmRlZCB0ZXh0LXNtIHNoYWRvdyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyB3LWZ1bGwgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0ZXh0LWJsdWVHcmF5LTYwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZ3JpZC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICDYp9mE2YPZhNmF2Kkg2KfZhNiz2LHZitipXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTAgcHgtMyBweS0zIHBsYWNlaG9sZGVyLWJsdWVHcmF5LTMwMCB0ZXh0LWJsdWVHcmF5LTYwMCBiZy13aGl0ZSByb3VuZGVkIHRleHQtc20gc2hhZG93IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIHctZnVsbCBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRwd2QoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXN0b21DaGVja0xvZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrYm94IGJvcmRlci0wIHJvdW5kZWQgdGV4dC1ibHVlR3JheS03MDAgbWwtMSB3LTUgaC01IGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWJsdWVHcmF5LTYwMFwiPlxu2KrYsNmD2LEg2KfZhNit2LPYp9ioXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZUdyYXktODAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLWJsdWVHcmF5LTYwMCB0ZXh0LXNtIGZvbnQtYm9sZCB1cHBlcmNhc2UgcHgtNiBweS0zIHJvdW5kZWQgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMSB3LWZ1bGwgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dpbnVzZXJ9XG4gICAgICAgICAgICAgICAgICAgID5cbtiq2LPYrNmK2YQg2K/YrtmI2YQgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXQtNiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZUdyYXktMjAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c21hbGw+2YbYs9mK2Kog2YPZhNmF2Kkg2KfZhNmF2LHZiNixPzwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3BhYmxvXCIgY2xhc3NOYW1lPVwidGV4dC1ibHVlR3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPtmF2LPYqtiu2K/ZhSDYrNiv2YrYr9ifPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbkxvZ2luLmxheW91dCA9IEF1dGg7XG4iXSwic291cmNlUm9vdCI6IiJ9