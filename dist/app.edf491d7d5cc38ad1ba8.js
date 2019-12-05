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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css.js":
/*!********************!*\
  !*** ./src/css.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet cssStyle = `* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nul, li, ol {\r\n    list-style: none;\r\n}\r\n\r\n.skin {\r\n    height: 100vh;\r\n    background: rgb(0, 111, 226);\r\n    border: 1px solid black;\r\n}\r\n.skin>.skin-color{\r\n    height:60vh;\r\n    background: rgb(0, 111, 226);\r\n    position:relative;\r\n}\r\n\r\n.skin >.skin-color>.eye-left {\r\n    width: 100px;\r\n    height: 150px;\r\n    position: absolute;\r\n    left: 50%;\r\n    border: 1px solid black;\r\n    border-radius: 50%;\r\n    margin-top: 20px;\r\n    transform: translateX(-85px);\r\n    background: white;\r\n    z-index: 10;\r\n}\r\n\r\n.skin >.skin-color> .eye-left::after {\r\n    content: '';\r\n    display: block;\r\n    border: 3px solid black;\r\n    width: 10px;\r\n    height: 10px;\r\n    background: #fff;\r\n    position: absolute;\r\n    left: 60%;\r\n    top: 60%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.skin >.skin-color> .eye-left::before {\r\n    content: '';\r\n    display: block;\r\n    border: 3px solid black;\r\n    width: 30px;\r\n    height: 40px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    background: black;\r\n    border-radius: 50%;\r\n\r\n}\r\n\r\n.skin >.skin-color> .eye-right {\r\n    width: 100px;\r\n    height: 150px;\r\n    position: absolute;\r\n    left: 50%;\r\n    border: 1px solid black;\r\n    border-radius: 50%;\r\n    margin-top: 20px;\r\n    transform: translateX(15px);\r\n    background: white;\r\n    z-index: 10;\r\n}\r\n\r\n.skin >.skin-color> .eye-right::after {\r\n    content: '';\r\n    display: block;\r\n    border: 3px solid black;\r\n    width: 10px;\r\n    height: 10px;\r\n    background: #fff;\r\n    position: absolute;\r\n    right: 60%;\r\n    top: 60%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.skin >.skin-color> .eye-right::before {\r\n    content: '';\r\n    display: block;\r\n    border: 3px solid black;\r\n    width: 30px;\r\n    height: 40px;\r\n    position: absolute;\r\n    right: 50%;\r\n    top: 50%;\r\n    background: black;\r\n    border-radius: 50%;\r\n\r\n}\r\n\r\n.skin >.skin-color> .nose {\r\n    border-color: black transparent transparent;\r\n    border-bottom: none;\r\n    border: 1px solid black;\r\n    width: 50px;\r\n    height: 50px;\r\n    position: relative;\r\n    left: 50%;\r\n    top: 145px;\r\n    margin-left: -10px;\r\n    z-index: 10;\r\n    background: red;\r\n    border-radius: 50%;\r\n}\r\n\r\n.skin >.skin-color> .face {\r\n    width: 600px;\r\n    height: 450px;\r\n    border: 1px solid black;\r\n    left: 50%;\r\n    transform: translateX(-280px);\r\n    margin-top:40px;\r\n    position: absolute;\r\n    border-top-left-radius: 50% 48%;\r\n    border-top-right-radius: 50% 48%;\r\n    border-bottom-left-radius: 30% 50%;\r\n    border-bottom-right-radius: 30% 50%;\r\n    background: #fff;\r\n}\r\n\r\n.skin >.skin-color> .face > .center {\r\n    width: 1px;\r\n    height: 265px;\r\n    border: 1px solid black;\r\n    left: 50%;\r\n    top: 20%;\r\n    transform: translateX(-5px);\r\n    position: relative;\r\n}\r\n\r\n.skin >.skin-color> .face> .beard-left1 {\r\n    width: 150px;\r\n    height: 1px;\r\n    border: 1px solid black;\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 50%;\r\n    transform: translateX(-220px) rotate(10deg);\r\n\r\n}\r\n.skin>.skin-color>.face>.beard-left2{\r\n    width: 150px;\r\n    height: 1px;\r\n    border: 1px solid black;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    transform: translateX(-240px);\r\n}\r\n.skin>.skin-color>.face>.beard-left3{\r\n    width: 150px;\r\n    height: 1px;\r\n    border: 1px solid black;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translateX(-240px) rotate(-20deg);\r\n}\r\n.skin>.skin-color>.face>.beard-right1{\r\n    width: 150px;\r\n    height: 1px;\r\n    border: 1px solid black;\r\n    position: absolute;\r\n    top: 30%;\r\n    right: 50%;\r\n    transform: translateX(220px) rotate(-10deg);\r\n}\r\n.skin>.skin-color>.face>.beard-right2{\r\n    width: 150px;\r\n    height: 1px;\r\n    border: 1px solid black;\r\n    position: absolute;\r\n    top: 40%;\r\n    right: 50%;\r\n    transform: translateX(220px);\r\n}\r\n.skin>.skin-color>.face>.beard-right3{\r\n    width: 150px;\r\n    height: 1px;\r\n    border: 1px solid black;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 50%;\r\n    transform: translateX(220px) rotate(20deg);\r\n}\r\n.skin>.skin-color>.face>.mouse{\r\n    width: 325px;\r\n    height: 135px;\r\n    border-bottom: 3px solid black;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    border-radius: 120px;\r\n    transform: translateX(-50%);\r\n    /*background: rgb(249,37,45);*/\r\n}\r\n@media (max-width: 500px) {\r\n    .skin >.skin-color>.eye-left {\r\n        width: 50px;\r\n        height: 80px;\r\n        transform: translateX(-50px);\r\n\r\n    }\r\n    .skin >.skin-color> .eye-left::before {\r\n        width: 15px;\r\n        height: 30px;\r\n        transform: translateX(-5px);\r\n    }\r\n    .skin >.skin-color> .eye-left::after {\r\n        width: 5px;\r\n        height: 5px;\r\n    }\r\n    .skin >.skin-color> .eye-right {\r\n        width: 50px;\r\n        height: 80px;\r\n        border: 1px solid black;\r\n        transform: translateX(10px);\r\n    }\r\n\r\n    .skin >.skin-color> .eye-right::after {\r\n        width: 5px;\r\n        height: 5px;\r\n    }\r\n\r\n    .skin >.skin-color> .eye-right::before {\r\n        width: 15px;\r\n        height: 30px;\r\n        transform: translateX(5px);\r\n\r\n    }\r\n    .skin >.skin-color> .nose {\r\n        width: 30px;\r\n        height: 30px;\r\n        top: 90px;\r\n\r\n    }\r\n    .skin >.skin-color> .face {\r\n        width: 300px;\r\n        height: 200px;\r\n        transform: translateX(-140px);\r\n        margin-top:40px;\r\n    }\r\n    .skin >.skin-color> .face > .center {\r\n        height: 120px;\r\n    }\r\n    .skin >.skin-color> .face> .beard-left1 {\r\n        width: 80px;\r\n        transform: translateX(-120px) rotate(10deg);\r\n\r\n    }\r\n    .skin>.skin-color>.face>.beard-left2{\r\n        width: 80px;\r\n        transform: translateX(-120px);\r\n    }\r\n    .skin>.skin-color>.face>.beard-left3{\r\n        width: 80px;\r\n        transform: translateX(-120px) rotate(-20deg);\r\n    }\r\n    .skin>.skin-color>.face>.beard-right1{\r\n        width: 80px;\r\n        transform: translateX(120px) rotate(-10deg);\r\n    }\r\n    .skin>.skin-color>.face>.beard-right2{\r\n        width: 80px;\r\n        transform: translateX(120px);\r\n    }\r\n    .skin>.skin-color>.face>.beard-right3{\r\n        width: 80px;\r\n        height: 1px;\r\n        border: 1px solid black;\r\n        position: absolute;\r\n        top: 50%;\r\n        right: 50%;\r\n        transform: translateX(120px) rotate(20deg);\r\n    }\r\n    .skin>.skin-color>.face>.mouse{\r\n        width: 160px;\r\n        height: 80px;\r\n        border-bottom: 3px solid black;\r\n        position: absolute;\r\n        left: 50%;\r\n        top: 50%;\r\n        border-radius: 120px;\r\n        transform: translate(-80px,-18px);\r\n        /*background: rgb(249,37,45);*/\r\n    }\r\n}\r\n\r\n`\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (cssStyle);\n\n//# sourceURL=webpack:///./src/css.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css */ \"./src/css.js\");\n// import './main.css'\r\n// const $ = require('jquery')\r\n// import './css.js'\r\n// import cssStyle from \"./css.js\";\r\n//\r\n// let num = 0\r\n// let html = $('.title')\r\n// let style = document.getElementById(\"css\");\r\n// console.log(html, style);\r\n// let string = ''\r\n// function draw() {\r\n//     setTimeout(() => {\r\n//         if (cssStyle[num] === \"\\n\") {\r\n//             string += \"<br>\"\r\n//         } else if (cssStyle[num] === \" \") {\r\n//             string += \"&nbsp;\"\r\n//         } else {\r\n//             string += cssStyle[num]\r\n//         }\r\n//         html.html(string)\r\n//         style.innerText = cssStyle.substring(0, num)\r\n//         // style.innerHTML = string\r\n//         console.log(string);\r\n//         if (num < cssStyle.length - 1) {\r\n//             num += 1\r\n//             draw()\r\n//         }\r\n//         window.scrollTo(0, 99999)\r\n//     })\r\n// }\r\n//     draw()\r\n\r\n\r\nconst player = {\r\n    id:1,\r\n    time:100,\r\n    ui:{\r\n        demo:document.querySelector(\".title\"),\r\n        demo2:document.querySelector(\"#css\")\r\n    },\r\n    events:{\r\n        '#btnPause':'pause',\r\n        \"#btnPlay\":'play',\r\n        \"#btnSlow\":'slow',\r\n        \"#btnNormal\":'normal',\r\n        \"#btnFast\":'fast'\r\n    },\r\n    n:1,\r\n    init:()=>{\r\n        console.log(_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].substr(0,player.n));\r\n        player.ui.demo.innerHTML = _css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].substr(0,player.n)\r\n        player.ui.demo2.innerHTML = _css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].substr(0,player.n)\r\n        player.bindEvents()\r\n        player.play()\r\n    },\r\n    bindEvents:()=>{\r\n        for(let key in player.events){\r\n            if(player.events.hasOwnProperty(key)){\r\n                const value = player.events[key]\r\n                document.querySelector(key).onclick = player[value]\r\n            }\r\n        }\r\n    },\r\n    run:()=>{\r\n        player.n +=1\r\n        // console.log(player.n)\r\n        if(player.n>_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length){\r\n            window.clearInterval(player.id)\r\n            return\r\n        }\r\n        player.ui.demo.innerText = _css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].substr(0,player.n)\r\n        player.ui.demo2.innerHTML = _css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].substr(0,player.n)\r\n        // player.ui.demo.scrollTop = player.ui.demo.scrollHeight\r\n        window.scrollTo(0, 99999)\r\n    },\r\n    play:()=>{\r\n        // console.log(player.n)\r\n        player.id=setInterval(player.run,player.time)\r\n    },\r\n    pause:()=>{\r\n        window.clearInterval(player.id)\r\n    },\r\n    slow:()=>{\r\n        player.pause()\r\n        player.time = 300\r\n        player.play()\r\n\r\n    },\r\n    normal:()=>{\r\n        player.pause()\r\n        player.time=100\r\n        player.play()\r\n\r\n    },\r\n    fast:()=>{\r\n        player.pause()\r\n        player.time = 0\r\n        player.play()\r\n\r\n    }\r\n}\r\nplayer.init()\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });