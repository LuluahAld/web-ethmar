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
    alert(data['email'] + "login successful");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VTdGF0ZSIsInB3ZCIsInNldHB3ZCIsImxvZ2ludXNlciIsImQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsIiQiLCJodG1sIiwiYXR0ciIsImVycm9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxheW91dCIsIkF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUM5QixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQkYsc0RBQVEsQ0FBQyxFQUFELENBQTlCOztBQUNBLFFBQU1HLFNBQVMsR0FBQyxZQUFVO0FBQ3hCLFVBQU1DLENBQUMsR0FBQztBQUFDLGVBQVFOLEtBQVQ7QUFBZSxrQkFBV0c7QUFBMUIsS0FBUjtBQUNBLFVBQU1JLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsaUNBQUQsRUFBb0M7QUFDOURDLFlBQU0sRUFBRSxNQURzRDtBQUU5REMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sQ0FBZjtBQUZ3RCxLQUFwQyxDQUE1QjtBQUtBLFVBQU1PLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQVQsRUFBbkI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQUksU0FBSyxDQUFDSixJQUFJLENBQUMsT0FBRCxDQUFK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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQVVFO0FBQUssdUJBQVMsRUFBQyxrQkFBZjtBQUFBLHFDQUNFLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksRUFBQyxnQkFBWDtBQUFBLHVDQUNFO0FBQUcsc0JBQUksRUFBQyxRQUFSO0FBQWlCLDJCQUFTLEVBQUMsbUJBQTNCO0FBQUEseUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUF5R0Q7O0dBeEl1QjNCLEs7O0tBQUFBLEs7QUEwSXhCQSxLQUFLLENBQUM0QixNQUFOLEdBQWVDLHVEQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvbG9naW4uMzZiOTQ1ZDkyZjcwZTI1OGYwMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCAge3VzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBsYXlvdXQgZm9yIHBhZ2VcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgQXV0aCBmcm9tIFwibGF5b3V0cy9BdXRoLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcHdkLCBzZXRwd2RdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IGxvZ2ludXNlcj1hc3luYyAoKT0+e1xuICAgIGNvbnN0IGQ9e1wiZW1haWxcIjplbWFpbCwncGFzc3dvcmQnOnB3ZH1cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvTG9naW5Vc2VyJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkKSxcbiAgICAgIFxuICAgIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgYWxlcnQoZGF0YVsnZW1haWwnXStcImxvZ2luIHN1Y2Nlc3NmdWxcIilcbiAgICB0cnl7XG4gICAgICBjb25zb2xlLmxvZygpXG4gICAgJChcIiNlcnJvck1TR1wiKS5odG1sKGRhdGEpO1xuICAgICQoXCIjZXJyb3JNU0dcIikuYXR0cignaGlkZGVuJywgZmFsc2UpO1xuICAgICQoXCIjc3VjY2Vzc01TR1wiKS5hdHRyKCdoaWRkZW4nLCB0cnVlKTtcbiAgXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG4gICAgY2F0Y2goZXJyb3IpXG4gICAge1xuICAgICAgXG4gICAgICAkKFwiI3N1Y2Nlc3NNU0dcIikuaHRtbChkYXRhWydtc2cnXSk7XG4gICAgICAkKFwiI2Vycm9yTVNHXCIpLmF0dHIoJ2hpZGRlbicsIHRydWUpO1xuICAgICAgJChcIiNzdWNjZXNzTVNHXCIpLmF0dHIoJ2hpZGRlbicsIGZhbHNlKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuICAgIFxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aGVhZD5cbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuNi4wL2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD4gXG4gICAgPC9oZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IGgtZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY29udGVudC1jZW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtZnVsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctNC8xMiBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbWluLXctMCBicmVhay13b3JkcyB3LWZ1bGwgbWItNiBzaGFkb3ctbGcgcm91bmRlZC1sZyBiZy1ibHVlR3JheS0yMDAgYm9yZGVyLTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXQgbWItMCBweC02IHB5LTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWVHcmF5LTUwMCB0ZXh0LXNtIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgaWQ9XCJzdWNjZXNzTVNHXCIgaGlkZGVuIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIGlkPVwiZXJyb3JNU0dcIiBoaWRkZW4gcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTYgYm9yZGVyLWItMSBib3JkZXItYmx1ZUdyYXktMzAwXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1hdXRvIHB4LTQgbGc6cHgtMTAgcHktMTAgcHQtMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlR3JheS00MDAgdGV4dC1jZW50ZXIgbWItMyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIDxzbWFsbD7Yp9mD2YXZhCDYp9mE2YXYqti32YTYqNin2Kog2YTZhNiq2LPYrNmK2YQ8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0ZXh0LWJsdWVHcmF5LTYwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZ3JpZC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICDYp9mE2KjYsdmK2K8g2KfZhNin2YTZg9iq2LHZiNmG2YpcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMCBweC0zIHB5LTMgcGxhY2Vob2xkZXItYmx1ZUdyYXktMzAwIHRleHQtYmx1ZUdyYXktNjAwIGJnLXdoaXRlIHJvdW5kZWQgdGV4dC1zbSBzaGFkb3cgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgdy1mdWxsIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdGV4dC1ibHVlR3JheS02MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImdyaWQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg2KfZhNmD2YTZhdipINin2YTYs9ix2YrYqVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0wIHB4LTMgcHktMyBwbGFjZWhvbGRlci1ibHVlR3JheS0zMDAgdGV4dC1ibHVlR3JheS02MDAgYmctd2hpdGUgcm91bmRlZCB0ZXh0LXNtIHNoYWRvdyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyB3LWZ1bGwgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0cHdkKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3VzdG9tQ2hlY2tMb2dpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVja2JveCBib3JkZXItMCByb3VuZGVkIHRleHQtYmx1ZUdyYXktNzAwIG1sLTEgdy01IGgtNSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ibHVlR3JheS02MDBcIj5cbtiq2LDZg9ixINin2YTYrdiz2KfYqFxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWVHcmF5LTgwMCB0ZXh0LXdoaXRlIGFjdGl2ZTpiZy1ibHVlR3JheS02MDAgdGV4dC1zbSBmb250LWJvbGQgdXBwZXJjYXNlIHB4LTYgcHktMyByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgdy1mdWxsIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9naW51c2VyfVxuICAgICAgICAgICAgICAgICAgICA+XG7Yqtiz2KzZitmEINiv2K7ZiNmEICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG10LTYgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMlwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWVHcmF5LTIwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNtYWxsPtmG2LPZitiqINmD2YTZhdipINin2YTZhdix2YjYsT88L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwYWJsb1wiIGNsYXNzTmFtZT1cInRleHQtYmx1ZUdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD7Zhdiz2KrYrtiv2YUg2KzYr9mK2K/Ynzwvc21hbGw+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5Mb2dpbi5sYXlvdXQgPSBBdXRoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==