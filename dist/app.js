/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app/app.js":
/*!***********************!*\
  !*** ./js/app/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    'use strict';\n    var gallery;\n\n    $('.burger').click(function (event) {\n        event.preventDefault();\n        $('.main_menu').slideToggle();\n    });\n\n    $('.menu_link').click(function (event) {\n        event.preventDefault();\n        var screen = $(this).attr('href');\n        var scrollTo = $(screen).offset().top;\n\n        $('html, body').animate({\n            scrollTop: scrollTo\n        }, 1000);\n\n        if ($(window).width() < 1025) {\n            $('.main_menu').slideUp();\n        }\n    });\n\n    $('.other_stars_button').click(function (event) {\n        event.preventDefault();\n        $('.calendar, .locker').fadeIn(150);\n    });\n\n    $('.close_calendar_button, .locker').click(function (event) {\n        event.preventDefault();\n        $('.calendar, .locker').fadeOut(150);\n    });\n\n    $('.screen_header').click(function () {\n        var scrollTo = $(this).offset().top;\n        $('html, body').animate({\n            scrollTop: scrollTo\n        }, 1000);\n        $(this).parent().find('.screen_paragraph').slideToggle();\n    });\n\n    $('.star_date').click(function (event) {\n        event.stopPropagation();\n        $('.star_date').not(this).find('.star_date_info').fadeOut(100);\n        $(this).find('.star_date_info').fadeIn(100);\n    });\n    $('body').click(function () {\n        $('.star_date_info').fadeOut(100);\n    });\n\n    setTimeout(function () {\n        $('.left_hand, .center_hand, .right_hand, .hands_1, .hands_2, .hands_3').removeClass('hidden');\n    }, 500);\n    setTimeout(function () {\n        $('.left_hand, .center_hand, .right_hand, .hands_1, .hands_2, .hands_3').addClass('anim');\n    }, 2500);\n});\n\n\n//# sourceURL=webpack:///./js/app/app.js?");

/***/ }),

/***/ "./js/app/counter.js":
/*!***************************!*\
  !*** ./js/app/counter.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    var startNumber = 200;\n    var startDay = 1;\n    var interval;\n\n\n    function setCount() {\n        var date = new Date();\n        var day;\n        var hours = date.getHours();\n        var minutes = date.getMinutes();\n        var seconds = date.getSeconds();\n        var currentDay = date.getDate();\n        var divisor;\n        var count;\n        var nightSecond = 25200;\n        var nightPoint = 840;\n\n        if (currentDay >= startDay) {\n            day = (date.getDate() - startDay) * 6960;\n        } else {\n            day = 0;\n        }\n\n        var currentSeconds = hours * 3600 + (minutes * 60) + seconds;\n\n        if (hours >= 0 && hours < 7) {\n            interval = 30000;\n            count = Math.ceil(currentSeconds / 30) + day + startNumber;\n        } else {\n            interval = 10000;\n            count = (Math.ceil((currentSeconds - nightSecond) / 10)) + nightPoint + day + startNumber;\n        }\n\n        var currentCount = count + startNumber\n        $('#counter').text(count);\n    }\n\n    setCount();\n    setInterval(setCount, interval);\n});\n\n\n//# sourceURL=webpack:///./js/app/counter.js?");

/***/ }),

/***/ "./js/app/gallery.js":
/*!***************************!*\
  !*** ./js/app/gallery.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    var gallery = [\r\n        \"photo_1.jpg\"\r\n    ];\r\n    \r\n    function photoLenght () {\r\n        var screen;\r\n        \r\n        if ($(window).width() > 1024) {\r\n            screen = 15;\r\n        } else {\r\n            screen = 9;\r\n        }\r\n        return screen;\r\n    }\r\n    \r\n    for (var i = 0; i < photoLenght (); i++) {\r\n        if (gallery[i]) {\r\n            $('.instagram_photo').append('<a href=\"img/gallery/' + gallery[i] + '\"><img src=\"img/gallery/thumb_' + gallery[i] + '\" alt=\"instagram_photo_img\" class=\"instagram_photo_img\"></a>');\r\n        }\r\n    }\r\n\r\n    $('.instagram_photo').magnificPopup({\r\n        delegate: 'a',\r\n        type: 'image',\r\n        gallery: {\r\n            enabled: true\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./js/app/gallery.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi ./js/app/app.js ./js/app/counter.js ./js/app/gallery.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app/app.js */\"./js/app/app.js\");\n__webpack_require__(/*! ./js/app/counter.js */\"./js/app/counter.js\");\nmodule.exports = __webpack_require__(/*! ./js/app/gallery.js */\"./js/app/gallery.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app/app.js_./js/app/counter.js_./js/app/gallery.js?");

/***/ })

/******/ });
