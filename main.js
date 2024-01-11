/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _5_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5.jpg */ \"./src/5.jpg\");\n\nconst mainContainer = document.querySelector('#container');\n\nconst contactLoad = () => {\n\tconst bodyContainer = document.createElement('div');\n\tbodyContainer.classList.add('body-container');\n\tmainContainer.appendChild(bodyContainer);\n\n\tconst mainTitle = document.createElement('header');\n\tmainTitle.classList.add('main-title');\n\tmainTitle.innerText = 'Our Team';\n\tbodyContainer.appendChild(mainTitle);\n\n\tconst homeImage = new Image();\n\thomeImage.src = _5_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\thomeImage.classList.add('contact-image');\n\tbodyContainer.appendChild(homeImage);\n\n\tconst sideContainer = document.createElement('div');\n\tsideContainer.classList.add('side-container');\n\tbodyContainer.appendChild(sideContainer);\n\n\tconst sideHeader = document.createElement('header');\n\tsideHeader.classList.add('side-header');\n\tsideHeader.innerText = 'Stephen Screamer';\n\tsideContainer.appendChild(sideHeader);\n\n\tconst paragraph = document.createElement('p');\n\tparagraph.innerText =\n\t\t'Role: CEO\\nE-mail: notfake@yesmail.com\\nTel: 12 34 567 8910';\n\tsideContainer.appendChild(paragraph);\n\n\tconsole.log('test');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactLoad);\n\n\n//# sourceURL=webpack://package.json/./src/contact-page.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeLoad: () => (/* binding */ homeLoad),\n/* harmony export */   initialLoad: () => (/* binding */ initialLoad)\n/* harmony export */ });\n/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.jpg */ \"./src/1.jpg\");\n\nconst mainContainer = document.querySelector('#container');\n\nconst homeLoad = () => {\n\tconst bodyContainer = document.createElement('div');\n\tbodyContainer.classList.add('body-container');\n\tmainContainer.appendChild(bodyContainer);\n\n\tconst mainTitle = document.createElement('header');\n\tmainTitle.classList.add('main-title');\n\tmainTitle.innerText = 'Dream Bakery';\n\tbodyContainer.appendChild(mainTitle);\n\n\tconst homeImage = new Image();\n\thomeImage.src = _1_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\thomeImage.classList.add('home-image');\n\tbodyContainer.appendChild(homeImage);\n\n\tconst sideContainer = document.createElement('div');\n\tsideContainer.classList.add('side-container');\n\tbodyContainer.appendChild(sideContainer);\n\n\tconst sideHeader = document.createElement('header');\n\tsideHeader.classList.add('side-header');\n\tsideHeader.innerText = 'About Us';\n\tsideContainer.appendChild(sideHeader);\n\n\tconst paragraph = document.createElement('p');\n\tparagraph.innerText =\n\t\t'Lorem ipsum dolor sit amet consectetur adipisicing elit.\\nCum dolor eveniet tempora magnam accusamus id, atque libero vitae. Dolor tempore accusamus earum iste. Vero alias dolorum voluptatum suscipit ullam. Aperiam!\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor eveniet tempora magnam accusamus id, atque libero vitae. Dolor tempore accusamus earum iste. Vero alias dolorum voluptatum suscipit ullam.\\nAperiam!';\n\tsideContainer.appendChild(paragraph);\n};\n\nconst initialLoad = () => {\n\tconst mainHeader = document.createElement('header');\n\tmainHeader.classList.add('main-header');\n\tmainContainer.appendChild(mainHeader);\n\n\tconst navBtn1 = document.createElement('button');\n\tconst navBtn2 = document.createElement('button');\n\tconst navBtn3 = document.createElement('button');\n\tnavBtn1.setAttribute('id', 'home-button');\n\tnavBtn2.setAttribute('id', 'menu-button');\n\tnavBtn3.setAttribute('id', 'contact-button');\n\tnavBtn1.innerText = 'Home';\n\tnavBtn2.innerText = 'Items';\n\tnavBtn3.innerText = 'Contact';\n\tmainHeader.appendChild(navBtn1);\n\tmainHeader.appendChild(navBtn2);\n\tmainHeader.appendChild(navBtn3);\n\n\thomeLoad();\n};\n\n\n\n\n//# sourceURL=webpack://package.json/./src/home-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page */ \"./src/menu-page.js\");\n/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-page */ \"./src/contact-page.js\");\n\n\n\n\nonload = (0,_home_page__WEBPACK_IMPORTED_MODULE_0__.initialLoad)();\n\nconst mainContainer = document.getElementById('container');\nconst navBtn1 = document.getElementById('home-button');\nconst navBtn2 = document.getElementById('menu-button');\nconst navBtn3 = document.getElementById('contact-button');\n\nnavBtn1.addEventListener('click', () => {\n\tconst bodyContainer = document.querySelector('.body-container');\n\tmainContainer.removeChild(bodyContainer);\n\t(0,_home_page__WEBPACK_IMPORTED_MODULE_0__.homeLoad)();\n});\n\nnavBtn2.addEventListener('click', () => {\n\tconst bodyContainer = document.querySelector('.body-container');\n\tmainContainer.removeChild(bodyContainer);\n\t(0,_menu_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\nnavBtn3.addEventListener('click', () => {\n\tconst bodyContainer = document.querySelector('.body-container');\n\tmainContainer.removeChild(bodyContainer);\n\t(0,_contact_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://package.json/./src/index.js?");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2.jpg */ \"./src/2.jpg\");\n/* harmony import */ var _3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3.jpg */ \"./src/3.jpg\");\n/* harmony import */ var _4_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./4.jpg */ \"./src/4.jpg\");\n\n\n\nconst mainContainer = document.querySelector('#container');\n\nconst menuLoad = () => {\n\tconst bodyContainer = document.createElement('div');\n\tbodyContainer.classList.add('body-container');\n\tmainContainer.appendChild(bodyContainer);\n\n\tconst mainTitle = document.createElement('header');\n\tmainTitle.classList.add('main-title');\n\tmainTitle.innerText = \"Today's best selling items\";\n\tbodyContainer.appendChild(mainTitle);\n\n\tconst itemContainer1 = document.createElement('div');\n\titemContainer1.classList.add('item-container');\n\tbodyContainer.appendChild(itemContainer1);\n\n\tconst foodImg1 = new Image();\n\tfoodImg1.src = _2_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\tfoodImg1.classList.add('item-image');\n\titemContainer1.appendChild(foodImg1);\n\n\tconst itemSideContainer1 = document.createElement('div');\n\titemSideContainer1.classList.add('side-container');\n\titemContainer1.appendChild(itemSideContainer1);\n\n\tconst itemSideHeader1 = document.createElement('header');\n\titemSideHeader1.classList.add('side-header');\n\titemSideHeader1.innerText = 'Item #1';\n\titemSideContainer1.appendChild(itemSideHeader1);\n\n\tconst paragraph1 = document.createElement('p');\n\tparagraph1.innerText =\n\t\t'Lorem ipsum dolor sit amet consectetur adipisicing elit.\\nCum dolor eveniet tempora magnam accusamus id,\\n atque libero vitae. Dolor tempore accusamus earum iste. Vero alias dolorum voluptatum suscipit ullam. Aperiam!';\n\titemSideContainer1.appendChild(paragraph1);\n\n\tconst itemContainer2 = document.createElement('div');\n\titemContainer2.classList.add('item-container');\n\tbodyContainer.appendChild(itemContainer2);\n\n\tconst foodImg2 = new Image();\n\tfoodImg2.src = _3_jpg__WEBPACK_IMPORTED_MODULE_1__;\n\tfoodImg2.classList.add('item-image');\n\titemContainer2.appendChild(foodImg2);\n\n\tconst itemSideContainer2 = document.createElement('div');\n\titemSideContainer2.classList.add('side-container');\n\titemContainer2.appendChild(itemSideContainer2);\n\n\tconst itemSideHeader2 = document.createElement('header');\n\titemSideHeader2.classList.add('side-header');\n\titemSideHeader2.innerText = 'Item #2';\n\titemSideContainer2.appendChild(itemSideHeader2);\n\n\tconst paragraph2 = document.createElement('p');\n\tparagraph2.innerText =\n\t\t'Lorem ipsum dolor sit amet consectetur adipisicing elit.\\nCum dolor eveniet tempora magnam accusamus id,\\n atque libero vitae. Dolor tempore accusamus earum iste. Vero alias dolorum voluptatum suscipit ullam. Aperiam!';\n\titemSideContainer2.appendChild(paragraph2);\n\n\tconst itemContainer3 = document.createElement('div');\n\titemContainer3.classList.add('item-container');\n\tbodyContainer.appendChild(itemContainer3);\n\n\tconst foodImg3 = new Image();\n\tfoodImg3.src = _4_jpg__WEBPACK_IMPORTED_MODULE_2__;\n\tfoodImg3.classList.add('item-image');\n\titemContainer3.appendChild(foodImg3);\n\n\tconst itemSideContainer3 = document.createElement('div');\n\titemSideContainer3.classList.add('side-container');\n\titemContainer3.appendChild(itemSideContainer3);\n\n\tconst itemSideHeader3 = document.createElement('header');\n\titemSideHeader3.classList.add('side-header');\n\titemSideHeader3.innerText = 'Item #3';\n\titemSideContainer3.appendChild(itemSideHeader3);\n\n\tconst paragraph3 = document.createElement('p');\n\tparagraph3.innerText =\n\t\t'Lorem ipsum dolor sit amet consectetur adipisicing elit.\\nCum dolor eveniet tempora magnam accusamus id,\\n atque libero vitae. Dolor tempore accusamus earum iste. Vero alias dolorum voluptatum suscipit ullam. Aperiam!';\n\titemSideContainer3.appendChild(paragraph3);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);\n\n\n//# sourceURL=webpack://package.json/./src/menu-page.js?");

/***/ }),

/***/ "./src/1.jpg":
/*!*******************!*\
  !*** ./src/1.jpg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a5017fefe0639034ef69.jpg\";\n\n//# sourceURL=webpack://package.json/./src/1.jpg?");

/***/ }),

/***/ "./src/2.jpg":
/*!*******************!*\
  !*** ./src/2.jpg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7214e2ace93c0183d3b8.jpg\";\n\n//# sourceURL=webpack://package.json/./src/2.jpg?");

/***/ }),

/***/ "./src/3.jpg":
/*!*******************!*\
  !*** ./src/3.jpg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31ae098504aef5f02c1c.jpg\";\n\n//# sourceURL=webpack://package.json/./src/3.jpg?");

/***/ }),

/***/ "./src/4.jpg":
/*!*******************!*\
  !*** ./src/4.jpg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e0f1d74b7119d3106856.jpg\";\n\n//# sourceURL=webpack://package.json/./src/4.jpg?");

/***/ }),

/***/ "./src/5.jpg":
/*!*******************!*\
  !*** ./src/5.jpg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a97c5f61bbd3c531132.jpg\";\n\n//# sourceURL=webpack://package.json/./src/5.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;