(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/src/Pages/Home/index.tsx":
/*!***********************************************!*\
  !*** ./resources/js/src/Pages/Home/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Layout */ "./resources/js/src/components/Layout/index.tsx");
/* harmony import */ var components_TentantCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/TentantCard */ "./resources/js/src/components/TentantCard/index.tsx");



function Home(props) {
    var _a;
    var tenants = props.tenants;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "grid md:grid-cols-3 grid-cols-1 gap-6 pb-20" }, (_a = tenants.data) === null || _a === void 0 ? void 0 : _a.map(function (item) {
            var _a;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TentantCard__WEBPACK_IMPORTED_MODULE_2__["default"], { floor: (_a = item.zone) === null || _a === void 0 ? void 0 : _a.floor, key: item.id, data: item }));
        }))));
}


/***/ }),

/***/ "./resources/js/src/components/FloorLists/index.tsx":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/FloorLists/index.tsx ***!
  \**********************************************************/
/*! exports provided: FloorLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorLists", function() { return FloorLists; });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var FloorLists = function () {
    var floorLists = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["usePage"])().props.floorLists;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "p-5 bg-gray-100 rounded-md " },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", { className: "font-bold text-2xl text-green-600 pb-5" }, "Floor Lists"),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, floorLists.map(function (item) {
            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", { key: item.id, className: "py-2 border-b border-gray-300 hover:text-green-600" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["InertiaLink"], { href: "/floor/" + item.id }, item.name)));
        }))));
};


/***/ }),

/***/ "./resources/js/src/components/Layout/index.tsx":
/*!******************************************************!*\
  !*** ./resources/js/src/components/Layout/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_FloorLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/FloorLists */ "./resources/js/src/components/FloorLists/index.tsx");
/* harmony import */ var components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Navbar */ "./resources/js/src/components/Navbar/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Layout(props) {
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "container mx-auto max-w-screen-lg pt-5" },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "flex flex-row" },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "w-3/12" },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_FloorLists__WEBPACK_IMPORTED_MODULE_0__["FloorLists"], null)),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "w-9/12 pl-5" }, props.children)))));
}
/* harmony default export */ __webpack_exports__["default"] = (Layout);


/***/ }),

/***/ "./resources/js/src/components/Navbar/index.tsx":
/*!******************************************************!*\
  !*** ./resources/js/src/components/Navbar/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Navbar = function () {
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "bg-green-700 p-5 px-10 shadow-md" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "container max-w-screen-lg mx-auto" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", { className: "text-xl font-bold text-white" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["InertiaLink"], { href: "/" }, "Shop Directory Listing")))));
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);


/***/ }),

/***/ "./resources/js/src/components/TentantCard/index.tsx":
/*!***********************************************************!*\
  !*** ./resources/js/src/components/TentantCard/index.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TenantCard = function (props) {
    var _a;
    var data = props.data, floor = props.floor;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "border border-gray-300 rounded-md overflow-hidden hover:shadow-md hover:border-green-400 cursor-pointer" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "h-32 w-full flex items-center overflow-hidden bg-gray-100" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: data.logo_url ||
                    'https://picsum.photos/seed/picsum/400/300', className: " object-fill w-full", alt: data.name })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "py-5 flex flex-col text-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "text-lg" }, data.name),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "text-xs font-bold text-green-800" }, (_a = data.zone) === null || _a === void 0 ? void 0 : _a.name)),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "text-center py-2 bg-gray-200" }, floor && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "text-sm font-bold" }, floor.name)))));
};
/* harmony default export */ __webpack_exports__["default"] = (TenantCard);


/***/ })

}]);