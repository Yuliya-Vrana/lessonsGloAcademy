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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_verification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/verification */ \"./modules/verification.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_animateTotal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/animateTotal */ \"./modules/animateTotal.js\");\n\n\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 june 2023')\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_verification__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('portfolio-item-active', 'dot-active')\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100)\n;(0,_modules_animateTotal__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/animateTotal.js":
/*!*********************************!*\
  !*** ./modules/animateTotal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\n\nconst animateTotal = () =>{\n   //  animate()\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animateTotal);\n\n//# sourceURL=webpack:///./modules/animateTotal.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\n    const calcBlock = document.querySelector('.calc-block')\n    const calcType = document.querySelector('.calc-type')\n    const calcSquare = document.querySelector('.calc-square')\n    const calcCount = document.querySelector('.calc-count')\n    const calcDay= document.querySelector('.calc-day')\n    const total = document.getElementById('total')\n\n    const countCalc = () => {\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value \n        const calcSquareValue = +calcSquare.value\n\n        let totalValue = 0\n        let calcCountValue = 1\n        let calcDayValue = 1\n\n        if(calcCount.value > 1){\n            calcCountValue += +calcCount.value / 10\n        }\n\n        if (calcDay.value && calcDay.value < 5){\n            calcDayValue = 2\n        }else if (calcDay.value && calcDay.value < 10 ){\n            calcDayValue = 1.5\n        }\n         \n        if(calcType.value && calcSquare.value) {\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue\n        } else {\n            totalValue = 0\n        }\n\n        \n        const anima = () => {\n            let time = totalValue / 200\n            \n            if(total.textContent < totalValue){\n                total.textContent = Math.ceil( +total.textContent + time )\n                setTimeout(anima,1)\n            }else {\n                total.textContent = totalValue \n            }\n        }\n        anima()\n    }\n\n    calcBlock.addEventListener('input', (e) => {\n        if(e.target === calcType || e.target === calcSquare ||\n           e.target === calcCount || e.target === calcDay)\n           {\n             countCalc()\n           }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst  animate = ({ timing, draw, duration }) => {\n\n    let start = performance.now();\n  \n    requestAnimationFrame(function animate(time) {\n      // timeFraction изменяется от 0 до 1\n      let timeFraction = (time - start) / duration;\n      if (timeFraction > 1) timeFraction = 1;\n  \n      // вычисление текущего состояния анимации\n      let progress = timing(timeFraction);\n  \n      draw(progress); // отрисовать её\n  \n      if (timeFraction < 1) {\n        requestAnimationFrame(animate);\n      }\n  \n    });\n  }\n\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const body = document.querySelector('body')\n    const menu = document.querySelector('menu')\n   \n    body.addEventListener('click', (e) => {\n        if(e.target.closest('.menu') || !e.target.matches('menu') && menu.className == 'active-menu' ||\n           e.target.matches('.close-btn') ||  e.target.matches('ul>li>a'))\n           {\n           menu.classList.toggle('active-menu')    \n        }\n    })\n} \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\n\nconst modal = () => {\n    const modal = document.querySelector('.popup')\n    const buttons = document.querySelectorAll('.popup-btn')\n    const popupContent = modal.querySelector('.popup-content')\n\n    buttons.forEach(btn => {\n        btn.addEventListener('click', () => {\n           const clientWidthScreen = screen.width\n       \n           if(clientWidthScreen > 768){\n                modal.style.display = 'block' \n                ;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                    duration: 500,\n                    timing(timeFraction){\n                        return timeFraction\n                    },\n                    draw(progress){\n                        //popupContent.style.transform = `scale(${progress * 1}, ${progress * 1})`\n                        popupContent.style.opacity = progress  \n                    }\n                })\n\n            }else {\n                modal.style.display = 'block'\n            }\n        })\n    })\n\n    modal.addEventListener('click', (e) => {\n        const clientWidthScreen = screen.width\n\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')){\n            modal.style.display = 'none'    \n        }     \n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n\n\n\n                // const animOpen = () => {\n                //     count++\n                //     idInterval = requestAnimationFrame(animOpen)\n                //     modal.style.display = 'block'\n\n                //     if(count < 26){\n                //         popupContent.style.transform = `scale(${count * 0.04}, ${count * 0.04})`\n                //     }else {\n                //         cancelAnimationFrame(idInterval)\n                //         count = 0\n                //     }                \n                // }\n                // animOpen()\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\n    const links = document.querySelectorAll('ul>li>a')\n    const btnScroll = document.querySelector('main > a')\n    \n\n    const scrolling = (event, section) => {\n        event.preventDefault();                          //перехватить действие у браузера\n          \n        if (section) {\n            section.scrollIntoView({\n                block: \"start\",\n                behavior: \"smooth\"               \n            })\n        }  \n    }\n\n    links.forEach((link) => {\n        const section = document.querySelector(link.getAttribute(\"href\"))\n        link.addEventListener('click', () => scrolling(event, section))\n    })\n\n    btnScroll.addEventListener('click', () =>{\n        const section = document.querySelector(btnScroll.getAttribute(\"href\"))\n        scrolling(event, section)})\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (activeSlide = '.slide-active', activeDot = '.dot-active') => {\n\n    if(activeSlide == null || activeDot == null){\n        return\n    }else {\n        const sliderBlock = document.querySelector('.portfolio-content')\n        const slides = document.querySelectorAll('.portfolio-item')\n        \n        const dotsList = document.querySelector('.portfolio-dots')\n        \n        \n        let timeInterval = 2000\n        let currentSlide = 0\n        let interval \n        let dot\n    \n        const addDots = () => {\n            for (let i=0; i < slides.length; i++){\n                dot = document.createElement('li') \n                dot.classList.add('dot')\n                dotsList.append(dot)          \n            }\n        }\n        \n        const prevSlide = (elems,index, strClass) => {\n            elems[index].classList.remove(strClass)\n        }\n    \n        const nextSlide = (elems,index, strClass) => {\n            elems[index].classList.add(strClass)\n        }\n    \n        const autoSlide = () => {\n    \n            const dots = document.querySelectorAll('.dot')\n            prevSlide(slides, currentSlide, activeSlide)\n            prevSlide(dots, currentSlide, activeDot)\n            currentSlide++\n    \n            if(currentSlide >= slides.length) {\n                currentSlide =0\n            }\n            nextSlide(slides, currentSlide, activeSlide)\n            nextSlide(dots, currentSlide, activeDot)\n        }\n        \n        const startSlide = (timer = 1500) => {\n            \n            interval = setInterval(() => autoSlide(), timer)\n        }\n    \n        const stopSlide = () => {\n            clearInterval(interval)\n        }\n    \n        sliderBlock.addEventListener('click', (e) => {\n            e.preventDefault()\n            const dots = document.querySelectorAll('.dot')\n            if(!e.target.matches('.dot, .portfolio-btn')){\n                return\n            }\n    \n            prevSlide(slides, currentSlide, activeSlide)\n            prevSlide(dots, currentSlide, activeDot)\n    \n            if(e.target.matches('#arrow-right')){\n                currentSlide++\n            }else if(e.target.matches('#arrow-left')){\n                currentSlide--\n            }else if(e.target.classList.contains('dot')){\n                dots.forEach((dot, index) => {\n                    if(e.target === dot){\n                        currentSlide = index\n                    }\n                })\n            }\n    \n            if(currentSlide < 0) {\n                currentSlide = slides.length - 1 \n            }\n            nextSlide(slides, currentSlide, activeSlide)\n            nextSlide(dots, currentSlide, activeDot)\n    \n        })\n    \n        sliderBlock.addEventListener('mouseenter', (e) => {\n            if(e.target.matches('.dot, .portfolio-btn')){\n                stopSlide()\n            }\n        }, true )\n    \n        sliderBlock.addEventListener('mouseleave', (e) => {\n            if(e.target.matches('.dot, .portfolio-btn')){\n                startSlide(timeInterval)\n            }\n        },true )\n    \n        addDots()\n        startSlide(timeInterval)\n    }\n   \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n    const tabPanel = document.querySelector('.service-header')\n    const tabs = document.querySelectorAll('.service-header-tab')\n    const tabContent = document.querySelectorAll('.service-tab')\n\n    tabPanel.addEventListener('click', (e) => {\n        if(e.target.closest('.service-header-tab')){\n            const tabBtn = e.target.closest('.service-header-tab')\n            tabs.forEach((tab, index) => {\n                if(tab === tabBtn){\n                    tab.classList.add('active')\n                    tabContent[index].classList.remove('d-none')\n                }else {\n                    tab.classList.remove('active')\n                    tabContent[index].classList.add('d-none')\n                }\n            })\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    const timerHours = document.getElementById('timer-hours')\n    const timerMinuts = document.getElementById('timer-minutes')\n    const timerSecond = document.getElementById('timer-seconds')\n    \n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime()\n        let dateNow = new Date().getTime()\n        let timeRemaining = (dateStop - dateNow) /1000\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24)\n        let minutes = Math.floor((timeRemaining / 60) % 60)\n        let seconds = Math.floor(timeRemaining % 60)\n\n        return{timeRemaining, hours, minutes, seconds }\n        \n    }\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining()\n\n       \n        const fHours = getTime.hours < 10 ? \"0\" + getTime.hours : getTime.hours\n        const fMinutes = getTime.minutes < 10 ? \"0\" + getTime.minutes : getTime.minutes\n        const fSeconds = getTime.seconds < 10 ? \"0\" + getTime.seconds : getTime.seconds\n\n        timerHours.textContent = fHours \n        timerMinuts.textContent = fMinutes\n        timerSecond.textContent = fSeconds\n\n        if(getTime.timeRemaining > 0){\n            setInterval(updateClock, 1000)\n        }else {\n            let colorStop = '#fc3868'\n\n            clearInterval(updateClock)\n            timerHours.textContent = \"00\"\n            timerMinuts.textContent = \"00\"\n            timerSecond.textContent = \"00\"      \n\n            timerHours.style.color = colorStop\n            timerMinuts.style.color = colorStop\n            timerSecond.style.color = colorStop\n        }      \n    }\n    updateClock()\n }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/verification.js":
/*!*********************************!*\
  !*** ./modules/verification.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst verification = () => {\n    const inputNumber = document.querySelectorAll('.calc-block > input')\n    const inputText = document.querySelectorAll('input[type=text]')\n    const inputEmail = document.querySelectorAll('input[type=email]')\n    const inputTel = document.querySelectorAll('input[type=tel]')\n\n    inputNumber.forEach((item) => {\n       item.addEventListener('input', (e) => item.value = e.target.value.replace(/[^\\d]/g, ''))\n    })\n\n    inputText.forEach(item => {\n        //item.addEventListener('input', (e) => item.value = e.target.value.replace(/[^а-яА-Я\\s\\-]/g, ''))\n    })\n\n    inputTel.forEach((item) => {\n        item.addEventListener('blur', (e) => item.value = e.target.value.replace(/[^()-\\d]/g, ''))\n    })\n    \n    inputEmail.forEach(item => {\n        item.addEventListener('input', (e) => item.value = e.target.value.replace(/[^\\w@_.!~*'-]/gi, ''))\n    })\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verification);\n\n\n\n\n//# sourceURL=webpack:///./modules/verification.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;