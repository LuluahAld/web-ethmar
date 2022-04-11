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
    alert(data['email']);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VTdGF0ZSIsInB3ZCIsInNldHB3ZCIsImxvZ2ludXNlciIsImQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsIiQiLCJodG1sIiwiYXR0ciIsImVycm9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxheW91dCIsIkF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUM5QixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQkYsc0RBQVEsQ0FBQyxFQUFELENBQTlCOztBQUNBLFFBQU1HLFNBQVMsR0FBQyxZQUFVO0FBQ3hCLFVBQU1DLENBQUMsR0FBQztBQUFDLGVBQVFOLEtBQVQ7QUFBZSxrQkFBV0c7QUFBMUIsS0FBUjtBQUNBLFVBQU1JLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsaUNBQUQsRUFBb0M7QUFDOURDLFlBQU0sRUFBRSxNQURzRDtBQUU5REMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sQ0FBZjtBQUZ3RCxLQUFwQyxDQUE1QjtBQUtBLFVBQU1PLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQVQsRUFBbkI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQUksU0FBSyxDQUFDSixJQUFJLENBQUMsT0FBRCxDQUFM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O0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFVRTtBQUFLLHVCQUFTLEVBQUMsa0JBQWY7QUFBQSxxQ0FDRSxxRUFBQyxnREFBRDtBQUFNLG9CQUFJLEVBQUMsZ0JBQVg7QUFBQSx1Q0FDRTtBQUFHLHNCQUFJLEVBQUMsUUFBUjtBQUFpQiwyQkFBUyxFQUFDLG1CQUEzQjtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEzRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBLGtCQURGO0FBeUdEOztHQXhJdUIzQixLOztLQUFBQSxLO0FBMEl4QkEsS0FBSyxDQUFDNEIsTUFBTixHQUFlQyx1REFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL2xvZ2luLmE1ZWYxZjZjZGQyYmY0NGQyNDk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgIHt1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gbGF5b3V0IGZvciBwYWdlXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEF1dGggZnJvbSBcImxheW91dHMvQXV0aC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3B3ZCwgc2V0cHdkXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBsb2dpbnVzZXI9YXN5bmMgKCk9PntcbiAgICBjb25zdCBkPXtcImVtYWlsXCI6ZW1haWwsJ3Bhc3N3b3JkJzpwd2R9XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL0xvZ2luVXNlcicsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZCksXG4gICAgICBcbiAgICB9KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIGFsZXJ0KGRhdGFbJ2VtYWlsJ10pXG4gICAgdHJ5e1xuICAgICAgY29uc29sZS5sb2coKVxuICAgICQoXCIjZXJyb3JNU0dcIikuaHRtbChkYXRhKTtcbiAgICAkKFwiI2Vycm9yTVNHXCIpLmF0dHIoJ2hpZGRlbicsIGZhbHNlKTtcbiAgICAkKFwiI3N1Y2Nlc3NNU0dcIikuYXR0cignaGlkZGVuJywgdHJ1ZSk7XG4gIFxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuICAgIGNhdGNoKGVycm9yKVxuICAgIHtcbiAgICAgIFxuICAgICAgJChcIiNzdWNjZXNzTVNHXCIpLmh0bWwoZGF0YVsnbXNnJ10pO1xuICAgICAgJChcIiNlcnJvck1TR1wiKS5hdHRyKCdoaWRkZW4nLCB0cnVlKTtcbiAgICAgICQoXCIjc3VjY2Vzc01TR1wiKS5hdHRyKCdoaWRkZW4nLCBmYWxzZSk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cbiAgICBcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGhlYWQ+XG4gICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjYuMC9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+IFxuICAgIDwvaGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBoLWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGNvbnRlbnQtY2VudGVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLWZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTQvMTIgcHgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi13LTAgYnJlYWstd29yZHMgdy1mdWxsIG1iLTYgc2hhZG93LWxnIHJvdW5kZWQtbGcgYmctYmx1ZUdyYXktMjAwIGJvcmRlci0wXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC10IG1iLTAgcHgtNiBweS02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1ibHVlR3JheS01MDAgdGV4dC1zbSBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIGlkPVwic3VjY2Vzc01TR1wiIGhpZGRlbiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiBpZD1cImVycm9yTVNHXCIgaGlkZGVuIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtdC02IGJvcmRlci1iLTEgYm9yZGVyLWJsdWVHcmF5LTMwMFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYXV0byBweC00IGxnOnB4LTEwIHB5LTEwIHB0LTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmx1ZUdyYXktNDAwIHRleHQtY2VudGVyIG1iLTMgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8c21hbGw+2KfZg9mF2YQg2KfZhNmF2KrYt9mE2KjYp9iqINmE2YTYqtiz2KzZitmEPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdGV4dC1ibHVlR3JheS02MDAgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImdyaWQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg2KfZhNio2LHZitivINin2YTYp9mE2YPYqtix2YjZhtmKXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTAgcHgtMyBweS0zIHBsYWNlaG9sZGVyLWJsdWVHcmF5LTMwMCB0ZXh0LWJsdWVHcmF5LTYwMCBiZy13aGl0ZSByb3VuZGVkIHRleHQtc20gc2hhZG93IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIHctZnVsbCBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRleHQtYmx1ZUdyYXktNjAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJncmlkLXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgINin2YTZg9mE2YXYqSDYp9mE2LPYsdmK2KlcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMCBweC0zIHB5LTMgcGxhY2Vob2xkZXItYmx1ZUdyYXktMzAwIHRleHQtYmx1ZUdyYXktNjAwIGJnLXdoaXRlIHJvdW5kZWQgdGV4dC1zbSBzaGFkb3cgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgdy1mdWxsIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldHB3ZChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImN1c3RvbUNoZWNrTG9naW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2tib3ggYm9yZGVyLTAgcm91bmRlZCB0ZXh0LWJsdWVHcmF5LTcwMCBtbC0xIHctNSBoLTUgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtYmx1ZUdyYXktNjAwXCI+XG7Yqtiw2YPYsSDYp9mE2K3Ys9in2KhcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlR3JheS04MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctYmx1ZUdyYXktNjAwIHRleHQtc20gZm9udC1ib2xkIHVwcGVyY2FzZSBweC02IHB5LTMgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIHctZnVsbCBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2ludXNlcn1cbiAgICAgICAgICAgICAgICAgICAgPlxu2KrYs9is2YrZhCDYr9iu2YjZhCAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBtdC02IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzJcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlR3JheS0yMDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzbWFsbD7Zhtiz2YrYqiDZg9mE2YXYqSDYp9mE2YXYsdmI2LE/PC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcGFibG9cIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWVHcmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+2YXYs9iq2K7Yr9mFINis2K/Zitiv2J88L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuTG9naW4ubGF5b3V0ID0gQXV0aDtcbiJdLCJzb3VyY2VSb290IjoiIn0=