module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./challenges.json":
/*!*************************!*\
  !*** ./challenges.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"type\":\"body\",\"description\":\"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.\",\"amount\":100},{\"type\":\"body\",\"description\":\"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.\",\"amount\":50},{\"type\":\"body\",\"description\":\"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.\",\"amount\":80},{\"type\":\"eye\",\"description\":\"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.\",\"amount\":90},{\"type\":\"eye\",\"description\":\"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.\",\"amount\":140},{\"type\":\"eye\",\"description\":\"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.\",\"amount\":90}]");

/***/ }),

/***/ "./src/components/ChallengeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallengeBox.tsx ***!
  \*****************************************/
/*! exports provided: ChallengeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeBox", function() { return ChallengeBox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ "./src/styles/components/ChallengeBox.module.css");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "c:\\nlw\\moveit-next\\src\\components\\ChallengeBox.tsx";




function ChallengeBox() {
  const {
    activeChallenge,
    resertChallenge,
    completeChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    resetCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__["CountdownContext"]);

  function handleChallengeSucceesded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resertChallenge();
    resetCountdown();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `${_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxContainer}`,
    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengesActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: ["Ganhe ", activeChallenge.amount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `icons/${activeChallenge.type}.svg`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Novo desafio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: activeChallenge.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          onClick: handleChallengeFailed,
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challendeFailedButton,
          children: "Falhei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          onClick: handleChallengeSucceesded,
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeSucceededButton,
          children: "Completei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeNotActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Finalize um ciclo para receber um desafio!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level-up.svg",
          alt: "Level Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 25
        }, this), "Avance de level completando desafios."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/CompletedChallenges.tsx":
/*!************************************************!*\
  !*** ./src/components/CompletedChallenges.tsx ***!
  \************************************************/
/*! exports provided: CompletedChallenges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedChallenges", function() { return CompletedChallenges; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/CompletedChallenges.module.css */ "./src/styles/components/CompletedChallenges.module.css");
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "c:\\nlw\\moveit-next\\src\\components\\CompletedChallenges.tsx";



function CompletedChallenges() {
  const {
    challengesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.completedChallengesComponents,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: " Desafios completos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: challengesCompleted
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "c:\\nlw\\moveit-next\\src\\components\\Countdown.tsx";



function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__["CountdownContext"]); // padStart caso não tenha 2 caracteres ele vai pegar e joga o 0 na frente o numero que tiver

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRgith] = String(seconds).padStart(2, '0').split('');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRgith
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: `${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.coundownButton}`,
      children: "Ciclo encerrado!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: `${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.coundownButton} ${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.coundownButtonActive}`,
        onClick: resetCountdown,
        children: "Abandonar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: `${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.coundownButton}`,
        onClick: startCountdown,
        children: "Iniciar um ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/ExperienceBar.tsx":
/*!******************************************!*\
  !*** ./src/components/ExperienceBar.tsx ***!
  \******************************************/
/*! exports provided: ExperienceBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBar", function() { return ExperienceBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ExperienceBar.module.css */ "./src/styles/components/ExperienceBar.module.css");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "c:\\nlw\\moveit-next\\src\\components\\ExperienceBar.tsx";



function ExperienceBar() {
  const {
    currentExperience,
    experienceToNextLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const percentToNextLevel = Math.round(currentExperience * 100 / experienceToNextLevel);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.experienceBar,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "0 xp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: `${percentToNextLevel}%`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.currentExperience,
        style: {
          left: `${percentToNextLevel}%`
        },
        children: [currentExperience, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [experienceToNextLevel, " xp"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Profile.tsx":
/*!************************************!*\
  !*** ./src/components/Profile.tsx ***!
  \************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_profile_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/profile.module.css */ "./src/styles/components/profile.module.css");
/* harmony import */ var _styles_components_profile_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_profile_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "c:\\nlw\\moveit-next\\src\\components\\Profile.tsx";



function Profile() {
  const {
    level
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_profile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.profileContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "https://github.com/klenivingeri.png",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Erick Kleniving"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level.svg",
          alt: "level"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, this), "level ", level]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);

var _jsxFileName = "c:\\nlw\\moveit-next\\src\\contexts\\ChallengesContext.tsx";


const ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider({
  children
}) {
  const {
    0: level,
    1: setLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1); // level

  const {
    0: currentExperience,
    1: setCurrentExperience
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0); //Expeciencia do usuario

  const {
    0: challengesCompleted,
    1: setChallengesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0); //Quantidade de quests do usuario

  const {
    0: activeChallenge,
    1: setActiveChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null); // Controla Quest

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2); //Experiencia para proximo nivel

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Notification.requestPermission();
  }, []); // Array vazio significa que a função vai executar apenas uma vez

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const ramdomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[ramdomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/notification.mp3').play();

    if (Notification.permission == 'granted') {
      //granted é quando o usuario da permissão
      new Notification('Novo desafio!', {
        body: `Valendo ${challenge.amount}xp!`
      });
    }
  }

  function resertChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const {
      amount
    } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level,
      currentExperience,
      challengesCompleted,
      activeChallenge,
      experienceToNextLevel,
      completeChallenge,
      resertChallenge,
      levelUp,
      startNewChallenge
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");

var _jsxFileName = "c:\\nlw\\moveit-next\\src\\contexts\\CountdownContext.tsx";


const CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
let countdownTimeout;
/** Deve assinar com a setTimeout() para acessar clearTimeout(assinatura) o */

function CountdownProvider({
  children
}) {
  const {
    startNewChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    0: time,
    1: setTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.1 * 60);
  const {
    0: isActive,
    1: setIsActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: hasFinished,
    1: setHasFinished
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const minutes = Math.floor(time / 60); //Arredonda para baixo

  const seconds = time % 60; // vai pegar o resto do calculo 

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.1 * 60);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]); //useEffect( Arrow function, [Array de dependencia]), quando o valor dentro da variavel alterar vai disparar uma ação

  /*
  Quando o active mudar de false para true ele executa uma vez, depois quando o time mudar, ele vai executar novamente.
  */

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountdownContext.Provider, {
    value: {
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }, this);
}
/**
  Estrutura basica de contexto

  import { createContext, ReactNode } from "react";


interface CountdownContexData{

}

interface CountdownProviderProps{ 
    children: ReactNode;
}
const CountdownContext = createContext({} as CountdownContexData )

export function CountdwonProdider({children}: CountdownProviderProps){
    return(
        <CountdownContext.Provider 
        value={{

        }}>
            {children}
        </CountdownContext.Provider>
    )

}
 */

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ChallengeBox */ "./src/components/ChallengeBox.tsx");
/* harmony import */ var _components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CompletedChallenges */ "./src/components/CompletedChallenges.tsx");
/* harmony import */ var _components_Countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Countdown */ "./src/components/Countdown.tsx");
/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ExperienceBar */ "./src/components/ExperienceBar.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.tsx");
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./src/styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "c:\\nlw\\moveit-next\\src\\pages\\index.tsx";








function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Inicio | move.it"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_5__["ExperienceBar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_7__["CountdownProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile__WEBPACK_IMPORTED_MODULE_6__["Profile"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_3__["CompletedChallenges"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Countdown__WEBPACK_IMPORTED_MODULE_4__["Countdown"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_2__["ChallengeBox"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/styles/components/ChallengeBox.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/ChallengeBox.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"challengeBoxContainer": "ChallengeBox_challengeBoxContainer__53AkF",
	"challengeNotActive": "ChallengeBox_challengeNotActive__35ixK",
	"challengesActive": "ChallengeBox_challengesActive__TKMck",
	"challendeFailedButton": "ChallengeBox_challendeFailedButton__3GwsB",
	"challengeSucceededButton": "ChallengeBox_challengeSucceededButton__18bu2"
};


/***/ }),

/***/ "./src/styles/components/CompletedChallenges.module.css":
/*!**************************************************************!*\
  !*** ./src/styles/components/CompletedChallenges.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"completedChallengesComponents": "CompletedChallenges_completedChallengesComponents__1xp59"
};


/***/ }),

/***/ "./src/styles/components/Countdown.module.css":
/*!****************************************************!*\
  !*** ./src/styles/components/Countdown.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"countdownContainer": "Countdown_countdownContainer__3pqLs",
	"coundownButton": "Countdown_coundownButton__25dZ-",
	"coundownButtonActive": "Countdown_coundownButtonActive__2fsS_"
};


/***/ }),

/***/ "./src/styles/components/ExperienceBar.module.css":
/*!********************************************************!*\
  !*** ./src/styles/components/ExperienceBar.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"experienceBar": "ExperienceBar_experienceBar__2JbAX",
	"currentExperience": "ExperienceBar_currentExperience__2XATR"
};


/***/ }),

/***/ "./src/styles/components/profile.module.css":
/*!**************************************************!*\
  !*** ./src/styles/components/profile.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profileContainer": "profile_profileContainer__1t8VG"
};


/***/ }),

/***/ "./src/styles/pages/Home.module.css":
/*!******************************************!*\
  !*** ./src/styles/pages/Home.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__HbJEc"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NoYWxsZW5nZUJveC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2VzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9FeHBlcmllbmNlQmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL3Byb2ZpbGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNoYWxsZW5nZUJveCIsImFjdGl2ZUNoYWxsZW5nZSIsInJlc2VydENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwidXNlQ29udGV4dCIsIkNoYWxsZW5nZXNDb250ZXh0IiwicmVzZXRDb3VudGRvd24iLCJDb3VudGRvd25Db250ZXh0IiwiaGFuZGxlQ2hhbGxlbmdlU3VjY2Vlc2RlZCIsImhhbmRsZUNoYWxsZW5nZUZhaWxlZCIsInN0eWxlcyIsImNoYWxsZW5nZUJveENvbnRhaW5lciIsImNoYWxsZW5nZXNBY3RpdmUiLCJhbW91bnQiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjaGFsbGVuZGVGYWlsZWRCdXR0b24iLCJjaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b24iLCJjaGFsbGVuZ2VOb3RBY3RpdmUiLCJDb21wbGV0ZWRDaGFsbGVuZ2VzIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsImNvbXBsZXRlZENoYWxsZW5nZXNDb21wb25lbnRzIiwiQ291bnRkb3duIiwibWludXRlcyIsInNlY29uZHMiLCJoYXNGaW5pc2hlZCIsImlzQWN0aXZlIiwic3RhcnRDb3VudGRvd24iLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJTdHJpbmciLCJwYWRTdGFydCIsInNwbGl0Iiwic2Vjb25kTGVmdCIsInNlY29uZFJnaXRoIiwiY291bnRkb3duQ29udGFpbmVyIiwiY291bmRvd25CdXR0b24iLCJjb3VuZG93bkJ1dHRvbkFjdGl2ZSIsIkV4cGVyaWVuY2VCYXIiLCJjdXJyZW50RXhwZXJpZW5jZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsInBlcmNlbnRUb05leHRMZXZlbCIsIk1hdGgiLCJyb3VuZCIsImV4cGVyaWVuY2VCYXIiLCJ3aWR0aCIsImxlZnQiLCJQcm9maWxlIiwibGV2ZWwiLCJwcm9maWxlQ29udGFpbmVyIiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwic2V0TGV2ZWwiLCJ1c2VTdGF0ZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldEFjdGl2ZUNoYWxsZW5nZSIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwibGV2ZWxVcCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFtZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYm9keSIsImZpbmFsRXhwZXJpZW5jZSIsImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd25Qcm92aWRlciIsInRpbWUiLCJzZXRUaW1lIiwic2V0SXNBY3RpdmUiLCJzZXRIYXNGaW5pc2hlZCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJIb21lIiwiY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtR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Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0fSAgZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnXHJcbmltcG9ydCB7IENvdW50ZG93bkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9DaGFsbGVuZ2VCb3gubW9kdWxlLmNzcydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlQm94KCl7XHJcbiAgICBjb25zdCB7IGFjdGl2ZUNoYWxsZW5nZSwgcmVzZXJ0Q2hhbGxlbmdlLCBjb21wbGV0ZUNoYWxsZW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IHJlc2V0Q291bnRkb3dufSA9IHVzZUNvbnRleHQoQ291bnRkb3duQ29udGV4dClcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYWxsZW5nZVN1Y2NlZXNkZWQoKXtcclxuICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSgpO1xyXG4gICAgICAgIHJlc2V0Q291bnRkb3duKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFsbGVuZ2VGYWlsZWQoKXtcclxuICAgICAgICByZXNlcnRDaGFsbGVuZ2UoKTtcclxuICAgICAgICByZXNldENvdW50ZG93bigpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2hhbGxlbmdlQm94Q29udGFpbmVyfWB9PlxyXG4gICAgICAgICAgICB7YWN0aXZlQ2hhbGxlbmdlID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY2hhbGxlbmdlc0FjdGl2ZX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+R2FuaGUge2FjdGl2ZUNoYWxsZW5nZS5hbW91bnR9PC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaWNvbnMvJHthY3RpdmVDaGFsbGVuZ2UudHlwZX0uc3ZnYH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk5vdm8gZGVzYWZpbzwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57YWN0aXZlQ2hhbGxlbmdlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNoYWxsZW5nZUZhaWxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmRlRmFpbGVkQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWxoZWlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDaGFsbGVuZ2VTdWNjZWVzZGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VOb3RBY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RmluYWxpemUgdW0gY2ljbG8gcGFyYSByZWNlYmVyIHVtIGRlc2FmaW8hPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvbGV2ZWwtdXAuc3ZnXCIgYWx0PVwiTGV2ZWwgVXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdmFuY2UgZGUgbGV2ZWwgY29tcGxldGFuZG8gZGVzYWZpb3MuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIlxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ29tcGxldGVkQ2hhbGxlbmdlcy5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZnVuY3Rpb24gQ29tcGxldGVkQ2hhbGxlbmdlcygpe1xuICAgIGNvbnN0IHsgY2hhbGxlbmdlc0NvbXBsZXRlZCB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dClcbnJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBsZXRlZENoYWxsZW5nZXNDb21wb25lbnRzfT5cbiAgICAgICAgPHNwYW4+IERlc2FmaW9zIGNvbXBsZXRvczwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e2NoYWxsZW5nZXNDb21wbGV0ZWR9PC9zcGFuPlxuICAgIDwvZGl2PlxuKTtcblxufSIsIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ291bnRkb3duQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93bigpe1xuICAgIGNvbnN0IHtcbiAgICAgICAgbWludXRlcyxcbiAgICAgICAgc2Vjb25kcyxcbiAgICAgICAgaGFzRmluaXNoZWQsXG4gICAgICAgIGlzQWN0aXZlLCBcbiAgICAgICAgcmVzZXRDb3VudGRvd24sXG4gICAgICAgIHN0YXJ0Q291bnRkb3duIH0gPSB1c2VDb250ZXh0KENvdW50ZG93bkNvbnRleHQpXG4gICAgXG4gICAgLy8gcGFkU3RhcnQgY2FzbyBuw6NvIHRlbmhhIDIgY2FyYWN0ZXJlcyBlbGUgdmFpIHBlZ2FyIGUgam9nYSBvIDAgbmEgZnJlbnRlIG8gbnVtZXJvIHF1ZSB0aXZlclxuICAgIGNvbnN0IFttaW51dGVMZWZ0LCBtaW51dGVSaWdodF0gPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwnMCcpLnNwbGl0KCcnKVxuICAgIGNvbnN0IFtzZWNvbmRMZWZ0LCBzZWNvbmRSZ2l0aF0gPSBTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwnMCcpLnNwbGl0KCcnKVxuXG4gICBcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlTGVmdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZVJpZ2h0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxzcGFuPntzZWNvbmRMZWZ0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kUmdpdGh9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtoYXNGaW5pc2hlZCA/IChcbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgXHQgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bmRvd25CdXR0b259YH0+XG4gICAgICAgICAgICAgICAgQ2ljbG8gZW5jZXJyYWRvIVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIFxuICAgICAgICAgICAgKTooPD5cbiAgICAgICAgICAgICAgICB7aXNBY3RpdmUgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bmRvd25CdXR0b259ICR7c3R5bGVzLmNvdW5kb3duQnV0dG9uQWN0aXZlfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0Q291bnRkb3dufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFiYW5kb25hciBjaWNsb1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bmRvd25CdXR0b259YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRDb3VudGRvd259PlxuICAgICAgICAgICAgICAgICAgICAgICAgSW5pY2lhciB1bSBjaWNsb1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn0iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0J1xuXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvRXhwZXJpZW5jZUJhci5tb2R1bGUuY3NzJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBFeHBlcmllbmNlQmFyKCl7XG4gICAgY29uc3QgeyBjdXJyZW50RXhwZXJpZW5jZSwgZXhwZXJpZW5jZVRvTmV4dExldmVsIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KVxuXG4gICAgY29uc3QgcGVyY2VudFRvTmV4dExldmVsID0gTWF0aC5yb3VuZCgoY3VycmVudEV4cGVyaWVuY2UgKiAxMDApIC8gZXhwZXJpZW5jZVRvTmV4dExldmVsKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5leHBlcmllbmNlQmFyfT5cbiAgICAgICAgPHNwYW4+MCB4cDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgIDxkaXYgIHN0eWxlPXt7IHdpZHRoOmAke3BlcmNlbnRUb05leHRMZXZlbH0lYCB9fSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRFeHBlcmllbmNlfSBzdHlsZT17eyBsZWZ0OiBgJHtwZXJjZW50VG9OZXh0TGV2ZWx9JWAgIH19PlxuICAgICAgICAgICAgICAgIHtjdXJyZW50RXhwZXJpZW5jZX0geHBcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4+e2V4cGVyaWVuY2VUb05leHRMZXZlbH0geHA8L3NwYW4+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgKVxufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvcHJvZmlsZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCdcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmV4cG9ydCBmdW5jdGlvbiBQcm9maWxlKCl7XG4gICAgY29uc3QgeyBsZXZlbCB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dClcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9rbGVuaXZpbmdlcmkucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RXJpY2sgS2xlbml2aW5nPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpY29ucy9sZXZlbC5zdmdcIiBhbHQ9XCJsZXZlbFwiIC8+XG4gICAgICAgICAgICAgICAgbGV2ZWwge2xldmVsfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbidcclxuXHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdleyAvLyBqc29uXHJcbiAgICB0eXBlOiAnYm9keSd8ICdleWUnO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGFtb3VudDpudW1iZXJcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGF7IC8qKiBhcHJlc2VudGEgb3F1ZSBwcmVjaXNhIHNlciByZXRvcm5hZG8qL1xyXG4gICAgbGV2ZWw6bnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDpudW1iZXI7XHJcbiAgICBhY3RpdmVDaGFsbGVuZ2U6ICBDaGFsbGVuZ2U7XHJcbiAgICBjb21wbGV0ZUNoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIHJlc2VydENoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuXHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wc3sgLyoqIF9BcHAgICovXHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfTogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpe1xyXG5cclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7IC8vIGxldmVsXHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApOyAvL0V4cGVjaWVuY2lhIGRvIHVzdWFyaW9cclxuICAgIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApOyAgLy9RdWFudGlkYWRlIGRlIHF1ZXN0cyBkbyB1c3VhcmlvXHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpIC8vIENvbnRyb2xhIFF1ZXN0XHJcbiAgICBcclxuICAgIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMikgLy9FeHBlcmllbmNpYSBwYXJhIHByb3hpbW8gbml2ZWxcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PntcclxuICAgICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuXHJcblxyXG4gICAgfSxbXSkgLy8gQXJyYXkgdmF6aW8gc2lnbmlmaWNhIHF1ZSBhIGZ1bsOnw6NvIHZhaSBleGVjdXRhciBhcGVuYXMgdW1hIHZlelxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBsZXZlbFVwKCl7IHNldExldmVsKGxldmVsICsgMSkgfVxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKXtcclxuICAgICAgICBjb25zdCByYW1kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKVxyXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFtZG9tQ2hhbGxlbmdlSW5kZXhdO1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpXHJcblxyXG4gICAgICAgIG5ldyBBdWRpbygnL25vdGlmaWNhdGlvbi5tcDMnKS5wbGF5KCk7XHJcblxyXG4gICAgICAgIGlmKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09ICdncmFudGVkJyl7IC8vZ3JhbnRlZCDDqSBxdWFuZG8gbyB1c3VhcmlvIGRhIHBlcm1pc3PDo29cclxuICAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBkZXNhZmlvIScse1xyXG4gICAgICAgICAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fXhwIWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHJlc2VydENoYWxsZW5nZSgpe1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpe1xyXG4gICAgICAgIGlmKCFhY3RpdmVDaGFsbGVuZ2Upe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcbiAgICAgICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xyXG5cclxuICAgICAgICBpZihmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKXtcclxuICAgICAgICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsXHJcblxyXG4gICAgICAgICAgICBsZXZlbFVwKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgICAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsXHJcbiAgICAgICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcclxuICAgICAgICAgICAgcmVzZXJ0Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgICBsZXZlbFVwLFxyXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZX19PiBcclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufSIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCdcclxuXHJcbmludGVyZmFjZSBDb3VudGRvd25Db250ZXhEYXRhe1xyXG4gICAgbWludXRlczogbnVtYmVyO1xyXG4gICAgc2Vjb25kczogbnVtYmVyO1xyXG4gICAgaGFzRmluaXNoZWQ6IGJvb2xlYW47XHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuICAgIHN0YXJ0Q291bnRkb3duOiAoKSA9PiB2b2lkO1xyXG4gICAgcmVzZXRDb3VudGRvd246ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb3VudGRvd25Qcm92aWRlclByb3BzeyBcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb3VudGRvd25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb3VudGRvd25Db250ZXhEYXRhIClcclxubGV0IGNvdW50ZG93blRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0OyAvKiogRGV2ZSBhc3NpbmFyIGNvbSBhIHNldFRpbWVvdXQoKSBwYXJhIGFjZXNzYXIgY2xlYXJUaW1lb3V0KGFzc2luYXR1cmEpIG8gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd25Qcm92aWRlcih7Y2hpbGRyZW59OiBDb3VudGRvd25Qcm92aWRlclByb3BzKXtcclxuICAgIFxyXG4gICAgY29uc3QgeyBzdGFydE5ld0NoYWxsZW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dClcclxuXHJcbiAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwLjEgKiA2MCk7XHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtoYXNGaW5pc2hlZCwgc2V0SGFzRmluaXNoZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTsgLy9BcnJlZG9uZGEgcGFyYSBiYWl4b1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MCAvLyB2YWkgcGVnYXIgbyByZXN0byBkbyBjYWxjdWxvIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKCl7XHJcbiAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpe1xyXG4gICAgICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KTtcclxuICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgc2V0SGFzRmluaXNoZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldFRpbWUoMC4xICogNjApXHJcbiAgICBcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBpZihpc0FjdGl2ZSAmJiB0aW1lID4gMCl7XHJcbiAgICAgICAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZSh0aW1lIC0gMSk7XHJcbiAgICAgICAgICAgIH0sMTAwMClcclxuICAgICAgICB9ZWxzZSBpZihpc0FjdGl2ZSAmJiB0aW1lID09PSAwKXtcclxuICAgICAgICAgICBzZXRIYXNGaW5pc2hlZCh0cnVlKVxyXG4gICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKVxyXG4gICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzQWN0aXZlLCB0aW1lXSkgICAgIC8vdXNlRWZmZWN0KCBBcnJvdyBmdW5jdGlvbiwgW0FycmF5IGRlIGRlcGVuZGVuY2lhXSksIHF1YW5kbyBvIHZhbG9yIGRlbnRybyBkYSB2YXJpYXZlbCBhbHRlcmFyIHZhaSBkaXNwYXJhciB1bWEgYcOnw6NvXHJcbiAgICAvKlxyXG4gICAgUXVhbmRvIG8gYWN0aXZlIG11ZGFyIGRlIGZhbHNlIHBhcmEgdHJ1ZSBlbGUgZXhlY3V0YSB1bWEgdmV6LCBkZXBvaXMgcXVhbmRvIG8gdGltZSBtdWRhciwgZWxlIHZhaSBleGVjdXRhciBub3ZhbWVudGUuXHJcbiAgICAqL1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvdW50ZG93bkNvbnRleHQuUHJvdmlkZXIgXHJcbiAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgbWludXRlcyxcclxuICAgICAgICAgICAgc2Vjb25kcyxcclxuICAgICAgICAgICAgaGFzRmluaXNoZWQsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlLFxyXG4gICAgICAgICAgICBzdGFydENvdW50ZG93bixcclxuICAgICAgICAgICAgcmVzZXRDb3VudGRvd24sXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvdW50ZG93bkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gIEVzdHJ1dHVyYSBiYXNpY2EgZGUgY29udGV4dG9cclxuXHJcbiAgaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleERhdGF7XHJcblxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ291bnRkb3duUHJvdmlkZXJQcm9wc3sgXHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcbmNvbnN0IENvdW50ZG93bkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvdW50ZG93bkNvbnRleERhdGEgKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZHdvblByb2RpZGVyKHtjaGlsZHJlbn06IENvdW50ZG93blByb3ZpZGVyUHJvcHMpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb3VudGRvd25Db250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICAgIHZhbHVlPXt7XHJcblxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db3VudGRvd25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG5cclxufVxyXG4gKi8iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCB7IENoYWxsZW5nZUJveCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94JztcbmltcG9ydCB7IENvbXBsZXRlZENoYWxsZW5nZXMgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBsZXRlZENoYWxsZW5nZXMnO1xuaW1wb3J0IHsgQ291bnRkb3duIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGRvd24nO1xuaW1wb3J0IHsgRXhwZXJpZW5jZUJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXJcIjtcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlXCJcblxuXG5pbXBvcnQgeyBDb3VudGRvd25Qcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3MnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cblxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkluaWNpbyB8IG1vdmUuaXQ8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8RXhwZXJpZW5jZUJhciAvPlxuICAgIFxuICAgIDxDb3VudGRvd25Qcm92aWRlcj5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxQcm9maWxlIC8+XG4gICAgICAgIDxDb21wbGV0ZWRDaGFsbGVuZ2VzIC8+XG4gICAgICAgIDxDb3VudGRvd24gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPENoYWxsZW5nZUJveCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDwvQ291bnRkb3duUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICAgXG4gIClcbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNoYWxsZW5nZUJveENvbnRhaW5lclwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VCb3hDb250YWluZXJfXzUzQWtGXCIsXG5cdFwiY2hhbGxlbmdlTm90QWN0aXZlXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZU5vdEFjdGl2ZV9fMzVpeEtcIixcblx0XCJjaGFsbGVuZ2VzQWN0aXZlXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZXNBY3RpdmVfX1RLTWNrXCIsXG5cdFwiY2hhbGxlbmRlRmFpbGVkQnV0dG9uXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5kZUZhaWxlZEJ1dHRvbl9fM0d3c0JcIixcblx0XCJjaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b25cIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlU3VjY2VlZGVkQnV0dG9uX18xOGJ1MlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29tcGxldGVkQ2hhbGxlbmdlc0NvbXBvbmVudHNcIjogXCJDb21wbGV0ZWRDaGFsbGVuZ2VzX2NvbXBsZXRlZENoYWxsZW5nZXNDb21wb25lbnRzX18xeHA1OVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY291bnRkb3duQ29udGFpbmVyXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHNcIixcblx0XCJjb3VuZG93bkJ1dHRvblwiOiBcIkNvdW50ZG93bl9jb3VuZG93bkJ1dHRvbl9fMjVkWi1cIixcblx0XCJjb3VuZG93bkJ1dHRvbkFjdGl2ZVwiOiBcIkNvdW50ZG93bl9jb3VuZG93bkJ1dHRvbkFjdGl2ZV9fMmZzU19cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImV4cGVyaWVuY2VCYXJcIjogXCJFeHBlcmllbmNlQmFyX2V4cGVyaWVuY2VCYXJfXzJKYkFYXCIsXG5cdFwiY3VycmVudEV4cGVyaWVuY2VcIjogXCJFeHBlcmllbmNlQmFyX2N1cnJlbnRFeHBlcmllbmNlX18yWEFUUlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJvZmlsZUNvbnRhaW5lclwiOiBcInByb2ZpbGVfcHJvZmlsZUNvbnRhaW5lcl9fMXQ4VkdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19IYkpFY1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9