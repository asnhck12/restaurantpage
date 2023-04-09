/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modules/contact-page.js":
/*!*************************************!*\
  !*** ./src/Modules/contact-page.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactPage": () => (/* binding */ contactPage)
/* harmony export */ });
function contactPage() {
    const contentBody = document.getElementById('content');
    const title = document.createElement('h2');
    title.setAttribute('id','contactPage');
    title.innerHTML = "Contact";

    const contactDetails = document.createElement('p');
    contactDetails.setAttribute('id','contactPage');
    contactDetails.innerHTML = 
    "Contact us by email (fakeemail@fakemail.com) or call us (012434 45353)";

    contentBody.appendChild(title);
    contentBody.appendChild(contactDetails);

    };



/***/ }),

/***/ "./src/Modules/home-page.js":
/*!**********************************!*\
  !*** ./src/Modules/home-page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomePage": () => (/* binding */ loadHomePage)
/* harmony export */ });
function loadHomePage() {
    const contentBody = document.getElementById('content');
    const title = document.createElement('h2');
    title.setAttribute('id','title');
    title.innerHTML = "My Restaurant";

    const mainImage = document.createElement('img');
    mainImage.setAttribute('id','mainImage');
    mainImage.src = "../assets/Restaurant small.jpg";

    const about = document.createElement('p');
    about.setAttribute('id','about');
    about.innerHTML = "Welcome to our restaurant, a place with a warm atmosphere and a wide variety of delicious food and drink.";

    contentBody.appendChild(title);
    contentBody.appendChild(mainImage);
    contentBody.appendChild(about);

    };




/***/ }),

/***/ "./src/Modules/menu.js":
/*!*****************************!*\
  !*** ./src/Modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
function menu() {
    const contentBody = document.getElementById('content');
    const title = document.createElement('h2');
    title.setAttribute('id','menu');
    title.innerHTML = "Menu";

    const menu = document.createElement('p');
    menu.setAttribute('id','menu');
    menu.innerHTML = 
    "Starter \n Bread \n Soup \n\n Main \n Steak \n Filet Mignon \n Drinks \n Water";

    contentBody.appendChild(title);
    contentBody.appendChild(menu);

    };




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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modules_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/home-page */ "./src/Modules/home-page.js");
/* harmony import */ var _Modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/menu */ "./src/Modules/menu.js");
/* harmony import */ var _Modules_contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/contact-page */ "./src/Modules/contact-page.js");




// window.addEventListener('load', loadHomePage);
// window.addEventListener('load', menu);
window.addEventListener('load', _Modules_contact_page__WEBPACK_IMPORTED_MODULE_2__.contactPage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7QUNwQnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFZ0I7Ozs7Ozs7VUNoQmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05tRDtBQUNiO0FBQ2U7O0FBRXJEO0FBQ0E7QUFDQSxnQ0FBZ0MsOERBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvTW9kdWxlcy9jb250YWN0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL01vZHVsZXMvaG9tZS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9Nb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnRCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhY3RQYWdlJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG5cbiAgICBjb25zdCBjb250YWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0RGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFjdFBhZ2UnKTtcbiAgICBjb250YWN0RGV0YWlscy5pbm5lckhUTUwgPSBcbiAgICBcIkNvbnRhY3QgdXMgYnkgZW1haWwgKGZha2VlbWFpbEBmYWtlbWFpbC5jb20pIG9yIGNhbGwgdXMgKDAxMjQzNCA0NTM1MylcIjtcblxuICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZChjb250YWN0RGV0YWlscyk7XG5cbiAgICB9O1xuXG5leHBvcnQgeyBjb250YWN0UGFnZSB9IDsiLCJmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywndGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIk15IFJlc3RhdXJhbnRcIjtcblxuICAgIGNvbnN0IG1haW5JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywnbWFpbkltYWdlJyk7XG4gICAgbWFpbkltYWdlLnNyYyA9IFwiLi4vYXNzZXRzL1Jlc3RhdXJhbnQgc21hbGwuanBnXCI7XG5cbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dC5zZXRBdHRyaWJ1dGUoJ2lkJywnYWJvdXQnKTtcbiAgICBhYm91dC5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gb3VyIHJlc3RhdXJhbnQsIGEgcGxhY2Ugd2l0aCBhIHdhcm0gYXRtb3NwaGVyZSBhbmQgYSB3aWRlIHZhcmlldHkgb2YgZGVsaWNpb3VzIGZvb2QgYW5kIGRyaW5rLlwiO1xuXG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKG1haW5JbWFnZSk7XG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuXG4gICAgfTtcblxuZXhwb3J0IHsgbG9hZEhvbWVQYWdlIH07XG4iLCJmdW5jdGlvbiBtZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnRCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ21lbnUnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVudScpO1xuICAgIG1lbnUuaW5uZXJIVE1MID0gXG4gICAgXCJTdGFydGVyIFxcbiBCcmVhZCBcXG4gU291cCBcXG5cXG4gTWFpbiBcXG4gU3RlYWsgXFxuIEZpbGV0IE1pZ25vbiBcXG4gRHJpbmtzIFxcbiBXYXRlclwiO1xuXG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgfTtcblxuZXhwb3J0IHsgbWVudSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkSG9tZVBhZ2UgfSBmcm9tICcuL01vZHVsZXMvaG9tZS1wYWdlJztcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL01vZHVsZXMvbWVudSc7XG5pbXBvcnQgeyBjb250YWN0UGFnZSB9IGZyb20gJy4vTW9kdWxlcy9jb250YWN0LXBhZ2UnO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxvYWRIb21lUGFnZSk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG1lbnUpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjb250YWN0UGFnZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=