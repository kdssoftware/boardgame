"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    var drawQuestion = function drawQuestion(soort) {\n        var filteredQuestions = questions.filter(function(question) {\n            return question.soort === soort && !prevQuestions.includes(question.id);\n        });\n        if (filteredQuestions.length === 0) {\n            //ze zijn op!\n            return;\n        }\n        var randomQuestion = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)].id;\n        setPrevQuestions(_toConsumableArray(prevQuestions).concat([\n            randomQuestion\n        ]));\n        setCurrentQuestion(randomQuestion);\n        setCurrentSoort(soort);\n    };\n    var flipCard = function flipCard() {\n        setCurrentSoort(null);\n        setCurrentQuestion(null);\n    };\n    var ref, ref1;\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), prevQuestions = ref2[0], setPrevQuestions = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), questions = ref3[0], setQuestions = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), currentQuestion = ref4[0], setCurrentQuestion = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), currentSoort = ref5[0], setCurrentSoort = ref5[1];\n    var soorten = [\n        \"A\",\n        \"C\",\n        \"G\",\n        \"N\",\n        \"W\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        fetch(\"/questions.json\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setQuestions(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().background),\n        __source: {\n            fileName: \"C:\\\\Users\\\\u0144861\\\\projects\\\\boardgame\\\\pages\\\\index.js\",\n            lineNumber: 40,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n            __source: {\n                fileName: \"C:\\\\Users\\\\u0144861\\\\projects\\\\boardgame\\\\pages\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\u0144861\\\\projects\\\\boardgame\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\u0144861\\\\projects\\\\boardgame\\\\pages\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Boardgame - vragen\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                            name: \"description\",\n                            content: \"boardgame questions\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\u0144861\\\\projects\\\\boardgame\\\\pages\\\\index.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\u0144861\\\\projects\\\\boardgame\\\\pages\\\\index.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    ]\n                }),\n                currentQuestion == null ? soorten.map(function(soort) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card) + \" \" + (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().back) + ' ' + (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().soort) + \" \" + (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default())[\"soort\" + soort],\n                        onClick: function onClick() {\n                            drawQuestion(soort);\n                        },\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\u0144861\\\\projects\\\\boardgame\\\\pages\\\\index.js\",\n                            lineNumber: 50,\n                            columnNumber: 19\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            alt: \"soort \" + soort,\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default())[\"soort\" + soort + \"_img\"] + \" \" + (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().soort_img),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\u0144861\\\\projects\\\\boardgame\\\\pages\\\\index.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        })\n                    }, soort);\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card) + \" \" + (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().front),\n                    onClick: flipCard,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\u0144861\\\\projects\\\\boardgame\\\\pages\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default())[\"bg\" + currentSoort] + \" \" + (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().bg),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\u0144861\\\\projects\\\\boardgame\\\\pages\\\\index.js\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().question),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\u0144861\\\\projects\\\\boardgame\\\\pages\\\\index.js\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            },\n                            __self: this,\n                            children: (ref = questions[currentQuestion]) === null || ref === void 0 ? void 0 : ref.vraag\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().answer),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\u0144861\\\\projects\\\\boardgame\\\\pages\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            },\n                            __self: this,\n                            children: (ref1 = questions[currentQuestion]) === null || ref1 === void 0 ? void 0 : ref1.antwoord\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(Home, \"L9ccoeteJo7aIgpLXNynBKA6358=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBMUJBLElBQUksQ0FBSkEsQ0FBb0MsR0FBcENBLElBQUksQ0FBSkEsQ0FBb0MsR0FBcENBLElBQTBCLENBQUU2QyxRQUFROzs7Ozs7O0FBT3JELENBQUM7R0FoRXVCakQsSUFBSTtLQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtwcmV2UXVlc3Rpb25zLCBzZXRQcmV2UXVlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY3VycmVudFNvb3J0LCBzZXRDdXJyZW50U29vcnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgc29vcnRlbiA9IFtcclxuICAgIFwiQVwiLFwiQ1wiLFwiR1wiLFwiTlwiLFwiV1wiXHJcbiAgXVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcIi9xdWVzdGlvbnMuanNvblwiKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0UXVlc3Rpb25zKGRhdGEpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXdRdWVzdGlvbihzb29ydCkge1xyXG4gICAgY29uc3QgZmlsdGVyZWRRdWVzdGlvbnMgPSBxdWVzdGlvbnMuZmlsdGVyKChxdWVzdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24uc29vcnQgPT09IHNvb3J0ICYmICFwcmV2UXVlc3Rpb25zLmluY2x1ZGVzKHF1ZXN0aW9uLmlkKTtcclxuICAgIH0pO1xyXG4gICAgaWYoZmlsdGVyZWRRdWVzdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIC8vemUgemlqbiBvcCFcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmFuZG9tUXVlc3Rpb24gPSBmaWx0ZXJlZFF1ZXN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWx0ZXJlZFF1ZXN0aW9ucy5sZW5ndGgpXS5pZDtcclxuICAgIHNldFByZXZRdWVzdGlvbnMoWy4uLnByZXZRdWVzdGlvbnMsIHJhbmRvbVF1ZXN0aW9uXSk7XHJcbiAgICBzZXRDdXJyZW50UXVlc3Rpb24ocmFuZG9tUXVlc3Rpb24pO1xyXG4gICAgc2V0Q3VycmVudFNvb3J0KHNvb3J0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZsaXBDYXJkKCkge1xyXG4gICAgc2V0Q3VycmVudFNvb3J0KG51bGwpO1xyXG4gICAgc2V0Q3VycmVudFF1ZXN0aW9uKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5Cb2FyZGdhbWUgLSB2cmFnZW48L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImJvYXJkZ2FtZSBxdWVzdGlvbnNcIiAvPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICBcclxuICAgICAgICAgIHsgY3VycmVudFF1ZXN0aW9uPT1udWxsID9cclxuICAgICAgICAgICAgICAgIHNvb3J0ZW4ubWFwKChzb29ydCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzb29ydH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZCtcIiBcIitzdHlsZXMuYmFjaysnICcrc3R5bGVzLnNvb3J0K1wiIFwiK3N0eWxlc1tcInNvb3J0XCIrc29vcnRdfSBvbkNsaWNrPXtmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdRdWVzdGlvbihzb29ydCk7XHJcbiAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgYWx0PXtcInNvb3J0IFwiK3Nvb3J0fSBjbGFzc05hbWU9e3N0eWxlc1tcInNvb3J0XCIrc29vcnQrXCJfaW1nXCJdK1wiIFwiK3N0eWxlcy5zb29ydF9pbWd9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZCtcIiBcIitzdHlsZXMuZnJvbnR9IG9uQ2xpY2s9e2ZsaXBDYXJkfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYmdcIitjdXJyZW50U29vcnRdK1wiIFwiK3N0eWxlcy5iZ30+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbn0+XHJcbiAgICAgICAgICAgICAgICB7cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0/LnZyYWFnfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyfT5cclxuICAgICAgICAgICAgICAgIHtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXT8uYW50d29vcmR9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwiZHJhd1F1ZXN0aW9uIiwic29vcnQiLCJmaWx0ZXJlZFF1ZXN0aW9ucyIsInF1ZXN0aW9ucyIsImZpbHRlciIsInF1ZXN0aW9uIiwicHJldlF1ZXN0aW9ucyIsImluY2x1ZGVzIiwiaWQiLCJsZW5ndGgiLCJyYW5kb21RdWVzdGlvbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFByZXZRdWVzdGlvbnMiLCJzZXRDdXJyZW50UXVlc3Rpb24iLCJzZXRDdXJyZW50U29vcnQiLCJmbGlwQ2FyZCIsInNldFF1ZXN0aW9ucyIsImN1cnJlbnRRdWVzdGlvbiIsImN1cnJlbnRTb29ydCIsInNvb3J0ZW4iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImJhY2tncm91bmQiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFwIiwiY2FyZCIsImJhY2siLCJvbkNsaWNrIiwiYWx0Iiwic29vcnRfaW1nIiwiZnJvbnQiLCJiZyIsInZyYWFnIiwiYW5zd2VyIiwiYW50d29vcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});