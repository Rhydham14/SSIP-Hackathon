(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: external "react-top-loading-bar"
const external_react_top_loading_bar_namespaceObject = require("react-top-loading-bar");
var external_react_top_loading_bar_default = /*#__PURE__*/__webpack_require__.n(external_react_top_loading_bar_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/_app.js





// const ms = Montserrat({
//   weight: "400",
// });
function MyApp({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    const [progress, setProgress] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        router.events.on("routeChangeStart", ()=>{
            setProgress(40);
        });
        router.events.on("routeChangeComplete", ()=>{
            setProgress(100);
        });
    }, [
        router.query
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_top_loading_bar_default()), {
                color: "#43c0f5",
                progress: progress,
                waitingTime: 400,
                height: 3,
                onLoaderFinished: ()=>setProgress(0)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7875));
module.exports = __webpack_exports__;

})();