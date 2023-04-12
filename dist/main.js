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
    about.innerHTML = "Welcome to our restaurant, a place with a warm atmosphere and delicious food and drink.";

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
    "<b>Starter</b> <br> Bread <br> Soup <br><br> <b>Main</b> <br> Steak <br> Filet Mignon <br><br> <b>Drinks</b> <br> Water";

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

window.addEventListener('load', () => {
    loadMenu();
    (0,_Modules_home_page__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();
    homeButton.style.background = "Azure";
    menuButton.style.background = "transparent";
    contactButton.style.background = "transparent";
});

homeButton.addEventListener('click', () => {
    loadMenu();
    (0,_Modules_home_page__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();
    homeButton.style.background = "Azure";
    menuButton.style.background = "transparent";
    contactButton.style.background = "transparent";
});

menuButton.addEventListener('click', () => {
    loadMenu();
    (0,_Modules_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();
    homeButton.style.background = "transparent";
    menuButton.style.background = "Azure";
    contactButton.style.background = "transparent";
});

contactButton.addEventListener('click', () => {
    loadMenu();
    (0,_Modules_contact_page__WEBPACK_IMPORTED_MODULE_2__.contactPage)();
    homeButton.style.background = "transparent";
    menuButton.style.background = "transparent";
    contactButton.style.background = "Azure";
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7QUMxQnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFZ0I7Ozs7Ozs7VUNoQmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05tRDtBQUNiO0FBQ2U7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGdFQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksZ0VBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxtREFBSTtBQUNSO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksa0VBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL01vZHVsZXMvY29udGFjdC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9Nb2R1bGVzL2hvbWUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvTW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb250YWN0UGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWN0UGFnZScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuXG4gICAgY29uc3QgY29udGFjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdERldGFpbHMuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhY3RQYWdlJyk7XG4gICAgY29udGFjdERldGFpbHMuaW5uZXJIVE1MID0gXG4gICAgXCJDb250YWN0IHVzIGJ5IGVtYWlsIChmYWtlZW1haWxAZmFrZW1haWwuY29tKSBvciBjYWxsIHVzICgwMTI0MzQgNDUzNTMpXCI7XG5cbiAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQoY29udGFjdERldGFpbHMpO1xuXG4gICAgfTtcblxuZXhwb3J0IHsgY29udGFjdFBhZ2UgfSA7IiwiZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkgeyAgICAgICAgICAgICAgICAgICBcbiAgICBjb25zdCBjb250ZW50Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCd0aXRsZScpO1xuICAgIHRpdGxlU2VjdGlvbi5pbm5lckhUTUwgPSBcIk15IFJlc3RhdXJhbnRcIjtcblxuICAgIGNvbnN0IG1haW5JbWFnZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYWluSW1hZ2VTZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCdtYWluSW1hZ2UnKTtcbiAgICBtYWluSW1hZ2Uuc3JjID0gXCIuLi9hc3NldHMvUmVzdGF1cmFudCBzbWFsbC5qcGdcIjtcblxuICAgIGNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnYWJvdXQnKTtcbiAgICBhYm91dC5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gb3VyIHJlc3RhdXJhbnQsIGEgcGxhY2Ugd2l0aCBhIHdhcm0gYXRtb3NwaGVyZSBhbmQgZGVsaWNpb3VzIGZvb2QgYW5kIGRyaW5rLlwiO1xuXG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlU2VjdGlvbik7XG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQobWFpbkltYWdlU2VjdGlvbik7XG4gICAgbWFpbkltYWdlU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluSW1hZ2UpO1xuICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbik7XG4gICAgYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0KTtcblxuICAgIH07XG5cbmV4cG9ydCB7IGxvYWRIb21lUGFnZSB9O1xuIiwiZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51Jyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJNZW51XCI7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsJ21lbnUnKTtcbiAgICBtZW51LmlubmVySFRNTCA9IFxuICAgIFwiPGI+U3RhcnRlcjwvYj4gPGJyPiBCcmVhZCA8YnI+IFNvdXAgPGJyPjxicj4gPGI+TWFpbjwvYj4gPGJyPiBTdGVhayA8YnI+IEZpbGV0IE1pZ25vbiA8YnI+PGJyPiA8Yj5Ecmlua3M8L2I+IDxicj4gV2F0ZXJcIjtcblxuICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgIH07XG5cbmV4cG9ydCB7IG1lbnUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZEhvbWVQYWdlIH0gZnJvbSAnLi9Nb2R1bGVzL2hvbWUtcGFnZSc7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9Nb2R1bGVzL21lbnUnO1xuaW1wb3J0IHsgY29udGFjdFBhZ2UgfSBmcm9tICcuL01vZHVsZXMvY29udGFjdC1wYWdlJztcblxuY29uc3QgY29udGVudEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgdGFiU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICB0YWJTZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51SGVhZGVyJyk7XG4gICAgaG9tZUJ1dHRvbi5pbm5lckhUTUwgPSBcIkhvbWVcIjtcbiAgICBtZW51QnV0dG9uLmlubmVySFRNTCA9IFwiTWVudVwiO1xuICAgIGNvbnRhY3RCdXR0b24uaW5uZXJIVE1MID0gXCJDb250YWN0IFVzXCI7XG5cbiAgICB0YWJTZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCd0YWJTZWN0aW9uJyk7XG5cbiAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZCh0YWJTZWN0aW9uKTtcbiAgICB0YWJTZWN0aW9uLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgIHRhYlNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gICAgdGFiU2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICAgIGNvbnRlbnRCb2R5LmlubmVySFRNTCA9ICcnO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICBsb2FkTWVudSgpO1xuICAgIGxvYWRIb21lUGFnZSgpO1xuICAgIGhvbWVCdXR0b24uc3R5bGUuYmFja2dyb3VuZCA9IFwiQXp1cmVcIjtcbiAgICBtZW51QnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgY29udGFjdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiO1xufSk7XG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9hZE1lbnUoKTtcbiAgICBsb2FkSG9tZVBhZ2UoKTtcbiAgICBob21lQnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSBcIkF6dXJlXCI7XG4gICAgbWVudUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgIGNvbnRhY3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcbn0pO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvYWRNZW51KCk7XG4gICAgbWVudSgpO1xuICAgIGhvbWVCdXR0b24uc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICBtZW51QnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSBcIkF6dXJlXCI7XG4gICAgY29udGFjdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiO1xufSk7XG5cbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9hZE1lbnUoKTtcbiAgICBjb250YWN0UGFnZSgpO1xuICAgIGhvbWVCdXR0b24uc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICBtZW51QnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgY29udGFjdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJBenVyZVwiO1xufSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==