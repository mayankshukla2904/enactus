"use strict";
exports.id = 6;
exports.ids = [6];
exports.modules = {

/***/ 6006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3902);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7311);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const testimonials = [
    {
        name: "Sarah Johnson",
        position: "Community Member",
        testimonial: "Enactus MSI's Project Gulsair has transformed our community's approach to waste management. Their innovative solutions are both eco-friendly and economically viable.",
        image: "/placeholder.svg?height=100&width=100"
    },
    {
        name: "Dr. Amit Patel",
        position: "Environmental Scientist",
        testimonial: "The Seed Box initiative by Enactus MSI is a brilliant way to promote urban gardening and sustainability. It's inspiring to see young minds tackling global issues.",
        image: "/placeholder.svg?height=100&width=100"
    },
    {
        name: "Priya Sharma",
        position: "Local Business Owner",
        testimonial: "Collaborating with Enactus MSI on their sustainable product line has been a game-changer for my business. Their innovative approach and dedication to quality have helped us attract environmentally conscious customers.",
        image: "/placeholder.svg?height=100&width=100"
    },
    {
        name: "Rahul Gupta",
        position: "Student Volunteer",
        testimonial: "Being part of Enactus MSI has been an incredible learning experience. The skills I've gained and the impact we've made on our community are truly rewarding.",
        image: "/placeholder.svg?height=100&width=100"
    }
];
const TestimonialList = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
        children: testimonials.map((testimonial, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.div, {
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
                    className: "bg-yellow-400 text-black",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__/* .CardHeader */ .Ol, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__/* .CardTitle */ .ll, {
                                    children: testimonial.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__/* .CardDescription */ .SZ, {
                                    className: "text-black/70",
                                    children: testimonial.position
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__/* .CardContent */ .aY, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center mb-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: testimonial.image,
                                        alt: testimonial.name,
                                        className: "w-16 h-16 rounded-full mr-4"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "italic",
                                        children: testimonial.testimonial
                                    })
                                ]
                            })
                        })
                    ]
                })
            }, testimonial.name))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialList);


/***/ })

};
;