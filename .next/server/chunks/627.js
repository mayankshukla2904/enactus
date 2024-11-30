"use strict";
exports.id = 627;
exports.ids = [627];
exports.modules = {

/***/ 3627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3902);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7311);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const events = [
    {
        name: "Prastaav",
        description: "Annual business plan competition showcasing innovative solutions to real-world challenges.",
        date: "September 15, 2024",
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        name: "Enactus Nationals",
        description: "National competition where Enactus teams present their social entrepreneurship projects.",
        date: "August 25-26, 2024",
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        name: "Project Gulsair Workshop",
        description: "Learn about floral waste repurposing and sustainable product creation.",
        date: "July 10, 2024",
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        name: "Sanrakshan Eco-Fair",
        description: "Showcase of sustainable gifting solutions and eco-friendly practices.",
        date: "October 5, 2024",
        image: "/placeholder.svg?height=200&width=200"
    }
];
const EventList = ({ limit = events.length })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
        children: events.slice(0, limit).map((event, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5,
                    delay: index * 0.1
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Zb, {
                    className: "bg-black text-yellow-300 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__/* .CardHeader */ .Ol, {
                            className: "relative h-48",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: event.image,
                                    alt: event.name,
                                    layout: "fill",
                                    objectFit: "cover",
                                    className: "transition-transform duration-300 transform hover:scale-110"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__/* .CardTitle */ .ll, {
                                        className: "text-2xl font-bold text-yellow-300",
                                        children: event.name
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__/* .CardContent */ .aY, {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__/* .CardDescription */ .SZ, {
                                    className: "text-yellow-100 mb-2",
                                    children: event.date
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-white",
                                    children: event.description
                                })
                            ]
                        })
                    ]
                })
            }, event.name))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventList);


/***/ })

};
;