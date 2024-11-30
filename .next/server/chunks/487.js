"use strict";
exports.id = 487;
exports.ids = [487];
exports.modules = {

/***/ 7487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ product_list)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 188 modules
var proxy = __webpack_require__(3902);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(7311);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(8546);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dialog/dist/index.mjs + 12 modules
var dist = __webpack_require__(4447);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(4660);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(7448);
;// CONCATENATED MODULE: ./components/ui/dialog.tsx
/* __next_internal_client_entry_do_not_use__ Dialog,DialogPortal,DialogOverlay,DialogClose,DialogTrigger,DialogContent,DialogHeader,DialogFooter,DialogTitle,DialogDescription auto */ 




const Dialog = dist/* Root */.fC;
const DialogTrigger = dist/* Trigger */.xz;
const DialogPortal = dist/* Portal */.h_;
const DialogClose = dist/* Close */.x8;
const DialogOverlay = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Overlay */.aV, {
        ref: ref,
        className: (0,utils.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }));
DialogOverlay.displayName = dist/* Overlay */.aV.displayName;
const DialogContent = /*#__PURE__*/ react_.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogPortal, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DialogOverlay, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Content */.VY, {
                ref: ref,
                className: (0,utils.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Close */.x8, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(lucide_react.X, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
DialogContent.displayName = dist/* Content */.VY.displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Title */.Dx, {
        ref: ref,
        className: (0,utils.cn)("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }));
DialogTitle.displayName = dist/* Title */.Dx.displayName;
const DialogDescription = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Description */.dk, {
        ref: ref,
        className: (0,utils.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
DialogDescription.displayName = dist/* Description */.dk.displayName;


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-label/dist/index.mjs
var react_label_dist = __webpack_require__(9441);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(7247);
;// CONCATENATED MODULE: ./components/ui/label.tsx
/* __next_internal_client_entry_do_not_use__ Label auto */ 




const labelVariants = (0,class_variance_authority_dist/* cva */.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_label_dist/* Root */.f, {
        ref: ref,
        className: (0,utils.cn)(labelVariants(), className),
        ...props
    }));
Label.displayName = react_label_dist/* Root */.f.displayName;


;// CONCATENATED MODULE: ./components/ui/input.tsx



const Input = /*#__PURE__*/ react_.forwardRef(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        type: type,
        className: (0,utils.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";


// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/product-list.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const products = [
    {
        name: "Gulsair Soap",
        description: "Handmade soap from repurposed floral waste",
        price: "₹99",
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        name: "Scented Candle",
        description: "Natural scented candles for a calming atmosphere",
        price: "₹149",
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        name: "Seed Box",
        description: "Eco-friendly gardening kit with seed balls and clay pot",
        price: "₹299",
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        name: "Tote Bag",
        description: "Stylish and sustainable tote bag",
        price: "₹199",
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        name: "Potpourri",
        description: "Fragrant dried floral mix for natural home freshening",
        price: "₹129",
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        name: "Gulal",
        description: "Vibrant, natural colored powder for festive celebrations",
        price: "₹79",
        image: "/placeholder.svg?height=200&width=200"
    }
];
const ProductList = ({ limit = products.length })=>{
    const [selectedProduct, setSelectedProduct] = (0,react_.useState)(null) // Type the state as Product or null
    ;
    const [quantity, setQuantity] = (0,react_.useState)(1);
    const handleBuy = (product)=>{
        setSelectedProduct(product);
        setQuantity(1);
    };
    const handleWhatsApp = ()=>{
        if (selectedProduct) {
            const message = encodeURIComponent(`Hi, I'm interested in buying ${quantity} ${selectedProduct.name}(s) at ${selectedProduct.price} each. Could you provide more information?`);
            window.open(`https://wa.me/919910083434?text=${message}`, "_blank");
        }
    };
    const handleEmail = ()=>{
        if (selectedProduct) {
            const subject = encodeURIComponent(`Inquiry about ${selectedProduct.name}`);
            const body = encodeURIComponent(`Hi,

I'm interested in buying ${quantity} ${selectedProduct.name}(s) at ${selectedProduct.price} each. Could you provide more information?

Thank you.`);
            window.location.href = `mailto:infoenactus@gmail.com?subject=${subject}&body=${body}`;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        children: products.slice(0, limit).map((product, index)=>/*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
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
                whileHover: {
                    scale: 1.05
                },
                className: "transform transition duration-500 hover:shadow-2xl",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
                    className: "bg-gradient-to-br from-yellow-300 to-yellow-400 text-black overflow-hidden h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* CardHeader */.Ol, {
                            className: "relative h-48 overflow-hidden",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: product.image,
                                    alt: product.name,
                                    layout: "fill",
                                    objectFit: "cover",
                                    className: "transition-transform duration-300 transform hover:scale-110"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(card/* CardTitle */.ll, {
                                        className: "text-white text-2xl font-bold",
                                        children: product.name
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* CardContent */.aY, {
                            className: "flex-grow",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(card/* CardDescription */.SZ, {
                                    className: "text-black/70 mb-2",
                                    children: product.description
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-2xl font-bold",
                                    children: product.price
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(card/* CardFooter */.eW, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Dialog, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(DialogTrigger, {
                                        asChild: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                                            className: "w-full bg-black text-yellow-300 hover:bg-yellow-400 hover:text-black transition-colors duration-300",
                                            onClick: ()=>handleBuy(product),
                                            children: "Buy Now"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogContent, {
                                        className: "sm:max-w-[425px]",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogHeader, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogTitle, {
                                                        children: [
                                                            "Purchase ",
                                                            selectedProduct?.name
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(DialogDescription, {
                                                        children: "Choose how you'd like to proceed with your purchase."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "grid gap-4 py-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "grid grid-cols-4 items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                                            htmlFor: "quantity",
                                                            className: "text-right",
                                                            children: "Quantity"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                            id: "quantity",
                                                            type: "number",
                                                            value: quantity,
                                                            onChange: (e)=>setQuantity(parseInt(e.target.value)),
                                                            className: "col-span-3",
                                                            min: "1"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                                                        onClick: handleWhatsApp,
                                                        children: "Contact via WhatsApp"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                                                        onClick: handleEmail,
                                                        children: "Contact via Email"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }, product.name))
    });
};
/* harmony default export */ const product_list = (ProductList);


/***/ }),

/***/ 8546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export buttonVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9818);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7247);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7448);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__/* .Slot */ .g7 : "button";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";



/***/ })

};
;