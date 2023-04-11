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
    const title = document.createElement('div');
    const titleSection = document.createElement('h2');
    title.setAttribute('id','title');
    titleSection.innerHTML = "My Restaurant";

    const mainImageSection = document.createElement('div');
    const mainImage = document.createElement('img');
    mainImageSection.setAttribute('id','mainImage');
    mainImage.src = "../assets/Restaurant small.jpg";

    const aboutSection = document.createElement('div');
    const about = document.createElement('p');
    aboutSection.setAttribute('id','about');
    about.innerHTML = "Welcome to our restaurant, a place with a warm atmosphere and a wide variety of delicious food and drink.";

    contentBody.appendChild(title);
    title.appendChild(titleSection);
    contentBody.appendChild(mainImageSection);
    mainImageSection.appendChild(mainImage);
    contentBody.appendChild(aboutSection);
    aboutSection.appendChild(about);

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




const contentBody = document.getElementById('content');
const tabSection = document.createElement('div');
const homeButton = document.createElement('button');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');

function loadMenu() {
    clearPage();
    tabSection.setAttribute('id','menuHeader');
    homeButton.innerHTML = "Home";
    menuButton.innerHTML = "Menu";
    contactButton.innerHTML = "Contact Us";

    tabSection.setAttribute('id','tabSection');

    contentBody.appendChild(tabSection);
    tabSection.appendChild(homeButton);
    tabSection.appendChild(menuButton);
    tabSection.appendChild(contactButton);
}

function clearPage() {
    contentBody.innerHTML = '';
}

window.addEventListener('load', loadMenu);
window.addEventListener('load', _Modules_home_page__WEBPACK_IMPORTED_MODULE_0__.loadHomePage);
homeButton.addEventListener('click', loadMenu);
homeButton.addEventListener('click', _Modules_home_page__WEBPACK_IMPORTED_MODULE_0__.loadHomePage);
menuButton.addEventListener('click', loadMenu);
menuButton.addEventListener('click', _Modules_menu__WEBPACK_IMPORTED_MODULE_1__.menu);
contactButton.addEventListener('click', loadMenu);
contactButton.addEventListener('click', _Modules_contact_page__WEBPACK_IMPORTED_MODULE_2__.contactPage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7QUMxQnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFZ0I7Ozs7Ozs7VUNoQmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05tRDtBQUNiO0FBQ2U7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLDREQUFZO0FBQzVDO0FBQ0EscUNBQXFDLDREQUFZO0FBQ2pEO0FBQ0EscUNBQXFDLCtDQUFJO0FBQ3pDO0FBQ0Esd0NBQXdDLDhEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL01vZHVsZXMvY29udGFjdC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9Nb2R1bGVzL2hvbWUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvTW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb250YWN0UGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWN0UGFnZScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuXG4gICAgY29uc3QgY29udGFjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdERldGFpbHMuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhY3RQYWdlJyk7XG4gICAgY29udGFjdERldGFpbHMuaW5uZXJIVE1MID0gXG4gICAgXCJDb250YWN0IHVzIGJ5IGVtYWlsIChmYWtlZW1haWxAZmFrZW1haWwuY29tKSBvciBjYWxsIHVzICgwMTI0MzQgNDUzNTMpXCI7XG5cbiAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQoY29udGFjdERldGFpbHMpO1xuXG4gICAgfTtcblxuZXhwb3J0IHsgY29udGFjdFBhZ2UgfSA7IiwiZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnRCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RpdGxlJyk7XG4gICAgdGl0bGVTZWN0aW9uLmlubmVySFRNTCA9IFwiTXkgUmVzdGF1cmFudFwiO1xuXG4gICAgY29uc3QgbWFpbkltYWdlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1haW5JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1haW5JbWFnZVNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsJ21haW5JbWFnZScpO1xuICAgIG1haW5JbWFnZS5zcmMgPSBcIi4uL2Fzc2V0cy9SZXN0YXVyYW50IHNtYWxsLmpwZ1wiO1xuXG4gICAgY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXRTZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCdhYm91dCcpO1xuICAgIGFib3V0LmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBvdXIgcmVzdGF1cmFudCwgYSBwbGFjZSB3aXRoIGEgd2FybSBhdG1vc3BoZXJlIGFuZCBhIHdpZGUgdmFyaWV0eSBvZiBkZWxpY2lvdXMgZm9vZCBhbmQgZHJpbmsuXCI7XG5cbiAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVTZWN0aW9uKTtcbiAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZChtYWluSW1hZ2VTZWN0aW9uKTtcbiAgICBtYWluSW1hZ2VTZWN0aW9uLmFwcGVuZENoaWxkKG1haW5JbWFnZSk7XG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcbiAgICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXQpO1xuXG4gICAgfTtcblxuZXhwb3J0IHsgbG9hZEhvbWVQYWdlIH07XG4iLCJmdW5jdGlvbiBtZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnRCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ21lbnUnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVudScpO1xuICAgIG1lbnUuaW5uZXJIVE1MID0gXG4gICAgXCJTdGFydGVyIFxcbiBCcmVhZCBcXG4gU291cCBcXG5cXG4gTWFpbiBcXG4gU3RlYWsgXFxuIEZpbGV0IE1pZ25vbiBcXG4gRHJpbmtzIFxcbiBXYXRlclwiO1xuXG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgfTtcblxuZXhwb3J0IHsgbWVudSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkSG9tZVBhZ2UgfSBmcm9tICcuL01vZHVsZXMvaG9tZS1wYWdlJztcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL01vZHVsZXMvbWVudSc7XG5pbXBvcnQgeyBjb250YWN0UGFnZSB9IGZyb20gJy4vTW9kdWxlcy9jb250YWN0LXBhZ2UnO1xuXG5jb25zdCBjb250ZW50Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCB0YWJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNsZWFyUGFnZSgpO1xuICAgIHRhYlNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsJ21lbnVIZWFkZXInKTtcbiAgICBob21lQnV0dG9uLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuICAgIG1lbnVCdXR0b24uaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gICAgY29udGFjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIkNvbnRhY3QgVXNcIjtcblxuICAgIHRhYlNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsJ3RhYlNlY3Rpb24nKTtcblxuICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKHRhYlNlY3Rpb24pO1xuICAgIHRhYlNlY3Rpb24uYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgdGFiU2VjdGlvbi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICB0YWJTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBjbGVhclBhZ2UoKSB7XG4gICAgY29udGVudEJvZHkuaW5uZXJIVE1MID0gJyc7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgbG9hZE1lbnUpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsb2FkSG9tZVBhZ2UpO1xuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51KTtcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZVBhZ2UpO1xubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51KTtcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51KTtcbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSk7XG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udGFjdFBhZ2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9