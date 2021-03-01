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

/***/ "./src/components/LevelUpModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/LevelUpModal.tsx ***!
  \*****************************************/
/*! exports provided: LevelUpModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelUpModal", function() { return LevelUpModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/LevelUpModal.module.css */ "./src/styles/components/LevelUpModal.module.css");
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "c:\\nlw\\moveit-next\\src\\components\\LevelUpModal.tsx";



function LevelUpModal() {
  const {
    level,
    closeLevelUpModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overlay,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: level
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Parab\xE9ns"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Voc\xEA alcan\xE7ou um novo level."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: closeLevelUpModal,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/close.svg",
          alt: "Fechar modal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), "x"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LevelUpModal */ "./src/components/LevelUpModal.tsx");

var _jsxFileName = "c:\\nlw\\moveit-next\\src\\contexts\\ChallengesContext.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(_ref) {
  var _rest$level, _rest$currentExperien, _rest$challengesCompl;

  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  const {
    0: level,
    1: setLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1); // level

  const {
    0: currentExperience,
    1: setCurrentExperience
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0); //Expeciencia do usuario

  const {
    0: challengesCompleted,
    1: setChallengesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$challengesCompl = rest.challengesCompleted) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0); //Quantidade de quests do usuario

  const {
    0: activeChallenge,
    1: setActiveChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null); // Controla Quest

  const {
    0: isLevelUpModalOpen,
    1: setIsLevelUpModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2); //Experiencia para proximo nivel

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Notification.requestPermission();
  }, []); // Array vazio significa que a função vai executar apenas uma vez

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('level', String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('currentExperience', String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const ramdomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_3__.length);
    const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_3__[ramdomChallengeIndex];
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
      closeLevelUpModal,
      completeChallenge,
      resertChallenge,
      levelUp,
      startNewChallenge
    },
    children: [children, isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 32
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
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
    lineNumber: 63,
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
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CompletedChallenges */ "./src/components/CompletedChallenges.tsx");
/* harmony import */ var _components_Countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Countdown */ "./src/components/Countdown.tsx");
/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ExperienceBar */ "./src/components/ExperienceBar.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.tsx");
/* harmony import */ var _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ChallengeBox */ "./src/components/ChallengeBox.tsx");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./src/styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");

var _jsxFileName = "c:\\nlw\\moveit-next\\src\\pages\\index.tsx";









function Home(props) {
  console.log(props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_9__["ChallengesProvider"], {
    level: props.level,
    currentExperience: props.currentExperience,
    challengesCompleted: props.challengesCompleted,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Inicio | move.it"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_4__["ExperienceBar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_8__["CountdownProvider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile__WEBPACK_IMPORTED_MODULE_5__["Profile"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_2__["CompletedChallenges"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Countdown__WEBPACK_IMPORTED_MODULE_3__["Countdown"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__["ChallengeBox"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
const getServerSideProps = async ctx => {
  //chamada API
  const {
    level,
    currentExperience,
    challengesCompleted
  } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  };
};
/** função que recupera dados armazenados nos Cookie
 * 
 *  Back-end (c++)
 *  Next.js (Node.js)
 *  Front-end (React)
 * 
 * 
 */

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

/***/ "./src/styles/components/LevelUpModal.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/LevelUpModal.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"overlay": "LevelUpModal_overlay__1huQl",
	"container": "LevelUpModal_container__1dM18"
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

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xldmVsVXBNb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvQ291bnRkb3duQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvbXBsZXRlZENoYWxsZW5nZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL3Byb2ZpbGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNoYWxsZW5nZUJveCIsImFjdGl2ZUNoYWxsZW5nZSIsInJlc2VydENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwidXNlQ29udGV4dCIsIkNoYWxsZW5nZXNDb250ZXh0IiwicmVzZXRDb3VudGRvd24iLCJDb3VudGRvd25Db250ZXh0IiwiaGFuZGxlQ2hhbGxlbmdlU3VjY2Vlc2RlZCIsImhhbmRsZUNoYWxsZW5nZUZhaWxlZCIsInN0eWxlcyIsImNoYWxsZW5nZUJveENvbnRhaW5lciIsImNoYWxsZW5nZXNBY3RpdmUiLCJhbW91bnQiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjaGFsbGVuZGVGYWlsZWRCdXR0b24iLCJjaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b24iLCJjaGFsbGVuZ2VOb3RBY3RpdmUiLCJDb21wbGV0ZWRDaGFsbGVuZ2VzIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsImNvbXBsZXRlZENoYWxsZW5nZXNDb21wb25lbnRzIiwiQ291bnRkb3duIiwibWludXRlcyIsInNlY29uZHMiLCJoYXNGaW5pc2hlZCIsImlzQWN0aXZlIiwic3RhcnRDb3VudGRvd24iLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJTdHJpbmciLCJwYWRTdGFydCIsInNwbGl0Iiwic2Vjb25kTGVmdCIsInNlY29uZFJnaXRoIiwiY291bnRkb3duQ29udGFpbmVyIiwiY291bmRvd25CdXR0b24iLCJjb3VuZG93bkJ1dHRvbkFjdGl2ZSIsIkV4cGVyaWVuY2VCYXIiLCJjdXJyZW50RXhwZXJpZW5jZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsInBlcmNlbnRUb05leHRMZXZlbCIsIk1hdGgiLCJyb3VuZCIsImV4cGVyaWVuY2VCYXIiLCJ3aWR0aCIsImxlZnQiLCJMZXZlbFVwTW9kYWwiLCJsZXZlbCIsImNsb3NlTGV2ZWxVcE1vZGFsIiwib3ZlcmxheSIsImNvbnRhaW5lciIsIlByb2ZpbGUiLCJwcm9maWxlQ29udGFpbmVyIiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsInNldExldmVsIiwidXNlU3RhdGUiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJpc0xldmVsVXBNb2RhbE9wZW4iLCJzZXRJc0xldmVsVXBNb2RhbE9wZW4iLCJwb3ciLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsIkNvb2tpZSIsInNldCIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbWRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwiQXVkaW8iLCJwbGF5IiwicGVybWlzc2lvbiIsImJvZHkiLCJmaW5hbEV4cGVyaWVuY2UiLCJjb3VudGRvd25UaW1lb3V0IiwiQ291bnRkb3duUHJvdmlkZXIiLCJ0aW1lIiwic2V0VGltZSIsInNldElzQWN0aXZlIiwic2V0SGFzRmluaXNoZWQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiSG9tZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsInJlcSIsImNvb2tpZXMiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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RFA7QUFFTFQsdUJBQWlCLEVBQUM2RCxNQUFNLENBQUM3RCxpQkFBRCxDQUZuQjtBQUdMbkIseUJBQW1CLEVBQUNnRixNQUFNLENBQUNoRixtQkFBRDtBQUhyQjtBQURMLEdBQU47QUFPRCxDQVpNO0FBY1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBLHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0fSAgZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnXHJcbmltcG9ydCB7IENvdW50ZG93bkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9DaGFsbGVuZ2VCb3gubW9kdWxlLmNzcydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlQm94KCl7XHJcbiAgICBjb25zdCB7IGFjdGl2ZUNoYWxsZW5nZSwgcmVzZXJ0Q2hhbGxlbmdlLCBjb21wbGV0ZUNoYWxsZW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IHJlc2V0Q291bnRkb3dufSA9IHVzZUNvbnRleHQoQ291bnRkb3duQ29udGV4dClcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYWxsZW5nZVN1Y2NlZXNkZWQoKXtcclxuICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSgpO1xyXG4gICAgICAgIHJlc2V0Q291bnRkb3duKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFsbGVuZ2VGYWlsZWQoKXtcclxuICAgICAgICByZXNlcnRDaGFsbGVuZ2UoKTtcclxuICAgICAgICByZXNldENvdW50ZG93bigpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2hhbGxlbmdlQm94Q29udGFpbmVyfWB9PlxyXG4gICAgICAgICAgICB7YWN0aXZlQ2hhbGxlbmdlID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY2hhbGxlbmdlc0FjdGl2ZX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+R2FuaGUge2FjdGl2ZUNoYWxsZW5nZS5hbW91bnR9PC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaWNvbnMvJHthY3RpdmVDaGFsbGVuZ2UudHlwZX0uc3ZnYH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk5vdm8gZGVzYWZpbzwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57YWN0aXZlQ2hhbGxlbmdlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNoYWxsZW5nZUZhaWxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmRlRmFpbGVkQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWxoZWlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDaGFsbGVuZ2VTdWNjZWVzZGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VOb3RBY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RmluYWxpemUgdW0gY2ljbG8gcGFyYSByZWNlYmVyIHVtIGRlc2FmaW8hPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvbGV2ZWwtdXAuc3ZnXCIgYWx0PVwiTGV2ZWwgVXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdmFuY2UgZGUgbGV2ZWwgY29tcGxldGFuZG8gZGVzYWZpb3MuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIlxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ29tcGxldGVkQ2hhbGxlbmdlcy5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZnVuY3Rpb24gQ29tcGxldGVkQ2hhbGxlbmdlcygpe1xuICAgIGNvbnN0IHsgY2hhbGxlbmdlc0NvbXBsZXRlZCB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dClcbnJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBsZXRlZENoYWxsZW5nZXNDb21wb25lbnRzfT5cbiAgICAgICAgPHNwYW4+IERlc2FmaW9zIGNvbXBsZXRvczwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e2NoYWxsZW5nZXNDb21wbGV0ZWR9PC9zcGFuPlxuICAgIDwvZGl2PlxuKTtcblxufSIsIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ291bnRkb3duQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93bigpe1xuICAgIGNvbnN0IHtcbiAgICAgICAgbWludXRlcyxcbiAgICAgICAgc2Vjb25kcyxcbiAgICAgICAgaGFzRmluaXNoZWQsXG4gICAgICAgIGlzQWN0aXZlLCBcbiAgICAgICAgcmVzZXRDb3VudGRvd24sXG4gICAgICAgIHN0YXJ0Q291bnRkb3duIH0gPSB1c2VDb250ZXh0KENvdW50ZG93bkNvbnRleHQpXG4gICAgXG4gICAgLy8gcGFkU3RhcnQgY2FzbyBuw6NvIHRlbmhhIDIgY2FyYWN0ZXJlcyBlbGUgdmFpIHBlZ2FyIGUgam9nYSBvIDAgbmEgZnJlbnRlIG8gbnVtZXJvIHF1ZSB0aXZlclxuICAgIGNvbnN0IFttaW51dGVMZWZ0LCBtaW51dGVSaWdodF0gPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwnMCcpLnNwbGl0KCcnKVxuICAgIGNvbnN0IFtzZWNvbmRMZWZ0LCBzZWNvbmRSZ2l0aF0gPSBTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwnMCcpLnNwbGl0KCcnKVxuXG4gICBcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlTGVmdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZVJpZ2h0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxzcGFuPntzZWNvbmRMZWZ0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kUmdpdGh9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtoYXNGaW5pc2hlZCA/IChcbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgXHQgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bmRvd25CdXR0b259YH0+XG4gICAgICAgICAgICAgICAgQ2ljbG8gZW5jZXJyYWRvIVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIFxuICAgICAgICAgICAgKTooPD5cbiAgICAgICAgICAgICAgICB7aXNBY3RpdmUgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bmRvd25CdXR0b259ICR7c3R5bGVzLmNvdW5kb3duQnV0dG9uQWN0aXZlfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0Q291bnRkb3dufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFiYW5kb25hciBjaWNsb1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bmRvd25CdXR0b259YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRDb3VudGRvd259PlxuICAgICAgICAgICAgICAgICAgICAgICAgSW5pY2lhciB1bSBjaWNsb1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn0iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0J1xuXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvRXhwZXJpZW5jZUJhci5tb2R1bGUuY3NzJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBFeHBlcmllbmNlQmFyKCl7XG4gICAgY29uc3QgeyBjdXJyZW50RXhwZXJpZW5jZSwgZXhwZXJpZW5jZVRvTmV4dExldmVsIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KVxuXG4gICAgY29uc3QgcGVyY2VudFRvTmV4dExldmVsID0gTWF0aC5yb3VuZCgoY3VycmVudEV4cGVyaWVuY2UgKiAxMDApIC8gZXhwZXJpZW5jZVRvTmV4dExldmVsKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5leHBlcmllbmNlQmFyfT5cbiAgICAgICAgPHNwYW4+MCB4cDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgIDxkaXYgIHN0eWxlPXt7IHdpZHRoOmAke3BlcmNlbnRUb05leHRMZXZlbH0lYCB9fSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRFeHBlcmllbmNlfSBzdHlsZT17eyBsZWZ0OiBgJHtwZXJjZW50VG9OZXh0TGV2ZWx9JWAgIH19PlxuICAgICAgICAgICAgICAgIHtjdXJyZW50RXhwZXJpZW5jZX0geHBcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4+e2V4cGVyaWVuY2VUb05leHRMZXZlbH0geHA8L3NwYW4+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgKVxufSIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9MZXZlbFVwTW9kYWwubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMZXZlbFVwTW9kYWwoKXtcclxuXHJcbiAgICBjb25zdCB7bGV2ZWwsIGNsb3NlTGV2ZWxVcE1vZGFsfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyPntsZXZlbH08L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+UGFyYWLDqW5zPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8cD5Wb2PDqiBhbGNhbsOnb3UgdW0gbm92byBsZXZlbC48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xvc2VMZXZlbFVwTW9kYWx9ID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9jbG9zZS5zdmdcIiBhbHQ9XCJGZWNoYXIgbW9kYWxcIi8+eFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICApXHJcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL3Byb2ZpbGUubW9kdWxlLmNzcydcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5leHBvcnQgZnVuY3Rpb24gUHJvZmlsZSgpe1xuICAgIGNvbnN0IHsgbGV2ZWwgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb250YWluZXJ9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20va2xlbml2aW5nZXJpLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkVyaWNrIEtsZW5pdmluZzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvbGV2ZWwuc3ZnXCIgYWx0PVwibGV2ZWxcIiAvPlxuICAgICAgICAgICAgICAgIGxldmVsIHtsZXZlbH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XHJcbmltcG9ydCB7IExldmVsVXBNb2RhbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsJztcclxuXHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdleyAvLyBqc29uXHJcbiAgICB0eXBlOiAnYm9keSd8ICdleWUnO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGFtb3VudDpudW1iZXJcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGF7IC8qKiBhcHJlc2VudGEgb3F1ZSBwcmVjaXNhIHNlciByZXRvcm5hZG8qL1xyXG4gICAgbGV2ZWw6bnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDpudW1iZXI7XHJcbiAgICBhY3RpdmVDaGFsbGVuZ2U6ICBDaGFsbGVuZ2U7XHJcbiAgICBjbG9zZUxldmVsVXBNb2RhbDogKCkgPT4gdm9pZDtcclxuICAgIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgcmVzZXJ0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcclxuICAgIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG5cclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3BzeyAvKiogX0FwcCAgKi9cclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgICBsZXZlbDpudW1iZXI7XHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHsgY2hpbGRyZW4sIC4uLnJlc3QgfTogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpe1xyXG5cclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUocmVzdC5sZXZlbCA/PyAxKTsgLy8gbGV2ZWxcclxuICAgIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUocmVzdC5jdXJyZW50RXhwZXJpZW5jZSA/PyAwKTsgLy9FeHBlY2llbmNpYSBkbyB1c3VhcmlvXHJcbiAgICBjb25zdCBbY2hhbGxlbmdlc0NvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZShyZXN0LmNoYWxsZW5nZXNDb21wbGV0ZWQgPz8gMCk7ICAvL1F1YW50aWRhZGUgZGUgcXVlc3RzIGRvIHVzdWFyaW9cclxuXHJcbiAgICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCkgLy8gQ29udHJvbGEgUXVlc3RcclxuICAgIGNvbnN0IFtpc0xldmVsVXBNb2RhbE9wZW4sIHNldElzTGV2ZWxVcE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIFxyXG4gICAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKSAvL0V4cGVyaWVuY2lhIHBhcmEgcHJveGltbyBuaXZlbFxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT57XHJcbiAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcblxyXG5cclxuICAgIH0sW10pIC8vIEFycmF5IHZhemlvIHNpZ25pZmljYSBxdWUgYSBmdW7Dp8OjbyB2YWkgZXhlY3V0YXIgYXBlbmFzIHVtYSB2ZXpcclxuXHJcbiAgICB1c2VFZmZlY3QoKCApPT57XHJcblxyXG4gICAgICAgIENvb2tpZS5zZXQoJ2xldmVsJyxTdHJpbmcobGV2ZWwpKTtcclxuICAgICAgICBDb29raWUuc2V0KCdjdXJyZW50RXhwZXJpZW5jZScsU3RyaW5nKGN1cnJlbnRFeHBlcmllbmNlKSk7XHJcbiAgICAgICAgQ29va2llLnNldCgnY2hhbGxlbmdlc0NvbXBsZXRlZCcsU3RyaW5nKGNoYWxsZW5nZXNDb21wbGV0ZWQpKTtcclxuXHJcbiAgICB9LCBbIGxldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlc0NvbXBsZXRlZF0pXHJcblxyXG4gICAgZnVuY3Rpb24gbGV2ZWxVcCgpeyBcclxuICAgICAgICBzZXRMZXZlbChsZXZlbCArIDEpXHJcbiAgICAgICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKHRydWUpXHJcbiAgICAgfVxyXG5cclxuICAgICBmdW5jdGlvbiBjbG9zZUxldmVsVXBNb2RhbCgpe1xyXG4gICAgICAgIHNldElzTGV2ZWxVcE1vZGFsT3BlbihmYWxzZSlcclxuICAgICB9XHJcbiAgICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpe1xyXG4gICAgICAgIGNvbnN0IHJhbWRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpXHJcbiAgICAgICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW1kb21DaGFsbGVuZ2VJbmRleF07XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSlcclxuXHJcbiAgICAgICAgbmV3IEF1ZGlvKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKTtcclxuXHJcbiAgICAgICAgaWYoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT0gJ2dyYW50ZWQnKXsgLy9ncmFudGVkIMOpIHF1YW5kbyBvIHVzdWFyaW8gZGEgcGVybWlzc8Ojb1xyXG4gICAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uKCdOb3ZvIGRlc2FmaW8hJyx7XHJcbiAgICAgICAgICAgICAgICBib2R5OiBgVmFsZW5kbyAke2NoYWxsZW5nZS5hbW91bnR9eHAhYFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gcmVzZXJ0Q2hhbGxlbmdlKCl7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCl7XHJcbiAgICAgICAgaWYoIWFjdGl2ZUNoYWxsZW5nZSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcclxuICAgICAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XHJcblxyXG4gICAgICAgIGlmKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpe1xyXG4gICAgICAgICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWxcclxuXHJcbiAgICAgICAgICAgIGxldmVsVXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWQoY2hhbGxlbmdlc0NvbXBsZXRlZCArIDEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIGxldmVsLFxyXG4gICAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgICAgICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZCxcclxuICAgICAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxyXG4gICAgICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXHJcbiAgICAgICAgICAgIGNsb3NlTGV2ZWxVcE1vZGFsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcclxuICAgICAgICAgICAgcmVzZXJ0Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgICBsZXZlbFVwLFxyXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZX19PiBcclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAge2lzTGV2ZWxVcE1vZGFsT3BlbiAmJiA8TGV2ZWxVcE1vZGFsIC8+fVxyXG4gICAgICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0J1xyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleERhdGF7XHJcbiAgICBtaW51dGVzOiBudW1iZXI7XHJcbiAgICBzZWNvbmRzOiBudW1iZXI7XHJcbiAgICBoYXNGaW5pc2hlZDogYm9vbGVhbjtcclxuICAgIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gICAgc3RhcnRDb3VudGRvd246ICgpID0+IHZvaWQ7XHJcbiAgICByZXNldENvdW50ZG93bjogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93blByb3ZpZGVyUHJvcHN7IFxyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ291bnRkb3duQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ291bnRkb3duQ29udGV4RGF0YSApXHJcbmxldCBjb3VudGRvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDsgLyoqIERldmUgYXNzaW5hciBjb20gYSBzZXRUaW1lb3V0KCkgcGFyYSBhY2Vzc2FyIGNsZWFyVGltZW91dChhc3NpbmF0dXJhKSBvICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duUHJvdmlkZXIoe2NoaWxkcmVufTogQ291bnRkb3duUHJvdmlkZXJQcm9wcyl7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgc3RhcnROZXdDaGFsbGVuZ2UgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpXHJcblxyXG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMC4xICogNjApO1xyXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaGFzRmluaXNoZWQsIHNldEhhc0ZpbmlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7IC8vQXJyZWRvbmRhIHBhcmEgYmFpeG9cclxuICAgIGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjAgLy8gdmFpIHBlZ2FyIG8gcmVzdG8gZG8gY2FsY3VsbyBcclxuICAgIFxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpe1xyXG4gICAgICAgIHNldElzQWN0aXZlKHRydWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKXtcclxuICAgICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XHJcbiAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHNldEhhc0ZpbmlzaGVkKGZhbHNlKTtcclxuICAgICAgICBzZXRUaW1lKDAuMSAqIDYwKVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgaWYoaXNBY3RpdmUgJiYgdGltZSA+IDApe1xyXG4gICAgICAgICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWUodGltZSAtIDEpO1xyXG4gICAgICAgICAgICB9LDEwMDApXHJcbiAgICAgICAgfWVsc2UgaWYoaXNBY3RpdmUgJiYgdGltZSA9PT0gMCl7XHJcbiAgICAgICAgICAgc2V0SGFzRmluaXNoZWQodHJ1ZSlcclxuICAgICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSlcclxuICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc0FjdGl2ZSwgdGltZV0pICAgICAvL3VzZUVmZmVjdCggQXJyb3cgZnVuY3Rpb24sIFtBcnJheSBkZSBkZXBlbmRlbmNpYV0pLCBxdWFuZG8gbyB2YWxvciBkZW50cm8gZGEgdmFyaWF2ZWwgYWx0ZXJhciB2YWkgZGlzcGFyYXIgdW1hIGHDp8Ojb1xyXG4gICAgLypcclxuICAgIFF1YW5kbyBvIGFjdGl2ZSBtdWRhciBkZSBmYWxzZSBwYXJhIHRydWUgZWxlIGV4ZWN1dGEgdW1hIHZleiwgZGVwb2lzIHF1YW5kbyBvIHRpbWUgbXVkYXIsIGVsZSB2YWkgZXhlY3V0YXIgbm92YW1lbnRlLlxyXG4gICAgKi9cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb3VudGRvd25Db250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIG1pbnV0ZXMsXHJcbiAgICAgICAgICAgIHNlY29uZHMsXHJcbiAgICAgICAgICAgIGhhc0ZpbmlzaGVkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZSxcclxuICAgICAgICAgICAgc3RhcnRDb3VudGRvd24sXHJcbiAgICAgICAgICAgIHJlc2V0Q291bnRkb3duLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db3VudGRvd25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICBFc3RydXR1cmEgYmFzaWNhIGRlIGNvbnRleHRvXHJcblxyXG4gIGltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBDb3VudGRvd25Db250ZXhEYXRhe1xyXG5cclxufVxyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93blByb3ZpZGVyUHJvcHN7IFxyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5jb25zdCBDb3VudGRvd25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb3VudGRvd25Db250ZXhEYXRhIClcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGR3b25Qcm9kaWRlcih7Y2hpbGRyZW59OiBDb3VudGRvd25Qcm92aWRlclByb3BzKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8Q291bnRkb3duQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgICB2YWx1ZT17e1xyXG5cclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ291bnRkb3duQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcbn1cclxuICovIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcblxuXG5pbXBvcnQgeyBDb21wbGV0ZWRDaGFsbGVuZ2VzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2VzJztcbmltcG9ydCB7IENvdW50ZG93biB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnRkb3duJztcbmltcG9ydCB7IEV4cGVyaWVuY2VCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FeHBlcmllbmNlQmFyXCI7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZVwiO1xuaW1wb3J0IHsgQ2hhbGxlbmdlQm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9DaGFsbGVuZ2VCb3gnO1xuXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IENvdW50ZG93blByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQ291bnRkb3duQ29udGV4dCc7XG5pbXBvcnQgeyBDaGFsbGVuZ2VzUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCdcblxuXG5pbnRlcmZhY2UgSG9tZXByb3Bze1xuICBsZXZlbDpudW1iZXI7XG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XG4gIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wczpIb21lcHJvcHMpIHtcbiAgY29uc29sZS5sb2cocHJvcHMpXG4gIHJldHVybiAoXG4gICAgPENoYWxsZW5nZXNQcm92aWRlciBcbiAgICBsZXZlbD17cHJvcHMubGV2ZWx9XG4gICAgY3VycmVudEV4cGVyaWVuY2U9e3Byb3BzLmN1cnJlbnRFeHBlcmllbmNlfVxuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ9e3Byb3BzLmNoYWxsZW5nZXNDb21wbGV0ZWR9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+SW5pY2lvIHwgbW92ZS5pdDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8RXhwZXJpZW5jZUJhciAvPlxuICAgICAgICBcbiAgICAgICAgPENvdW50ZG93blByb3ZpZGVyPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFByb2ZpbGUgLz5cbiAgICAgICAgICAgIDxDb21wbGV0ZWRDaGFsbGVuZ2VzIC8+XG4gICAgICAgICAgICA8Q291bnRkb3duIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDaGFsbGVuZ2VCb3ggLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L0NvdW50ZG93blByb3ZpZGVyPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L0NoYWxsZW5nZXNQcm92aWRlcj5cbiAgKVxufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+e1xuICAgLy9jaGFtYWRhIEFQSVxuICBjb25zdCB7bGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLCBjaGFsbGVuZ2VzQ29tcGxldGVkfSA9IGN0eC5yZXEuY29va2llcztcbiBcblxuICByZXR1cm57XG4gICAgICBwcm9wczoge1xuICAgICAgICBsZXZlbDpOdW1iZXIobGV2ZWwpLFxuICAgICAgICBjdXJyZW50RXhwZXJpZW5jZTpOdW1iZXIoY3VycmVudEV4cGVyaWVuY2UpLFxuICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOk51bWJlcihjaGFsbGVuZ2VzQ29tcGxldGVkKVxuICAgICAgfVxuICB9XG59XG5cbi8qKiBmdW7Dp8OjbyBxdWUgcmVjdXBlcmEgZGFkb3MgYXJtYXplbmFkb3Mgbm9zIENvb2tpZVxuICogXG4gKiAgQmFjay1lbmQgKGMrKylcbiAqICBOZXh0LmpzIChOb2RlLmpzKVxuICogIEZyb250LWVuZCAoUmVhY3QpXG4gKiBcbiAqIFxuICovIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2hhbGxlbmdlQm94Q29udGFpbmVyXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZUJveENvbnRhaW5lcl9fNTNBa0ZcIixcblx0XCJjaGFsbGVuZ2VOb3RBY3RpdmVcIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlTm90QWN0aXZlX18zNWl4S1wiLFxuXHRcImNoYWxsZW5nZXNBY3RpdmVcIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlc0FjdGl2ZV9fVEtNY2tcIixcblx0XCJjaGFsbGVuZGVGYWlsZWRCdXR0b25cIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmRlRmFpbGVkQnV0dG9uX18zR3dzQlwiLFxuXHRcImNoYWxsZW5nZVN1Y2NlZWRlZEJ1dHRvblwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b25fXzE4YnUyXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb21wbGV0ZWRDaGFsbGVuZ2VzQ29tcG9uZW50c1wiOiBcIkNvbXBsZXRlZENoYWxsZW5nZXNfY29tcGxldGVkQ2hhbGxlbmdlc0NvbXBvbmVudHNfXzF4cDU5XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb3VudGRvd25Db250YWluZXJcIjogXCJDb3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMc1wiLFxuXHRcImNvdW5kb3duQnV0dG9uXCI6IFwiQ291bnRkb3duX2NvdW5kb3duQnV0dG9uX18yNWRaLVwiLFxuXHRcImNvdW5kb3duQnV0dG9uQWN0aXZlXCI6IFwiQ291bnRkb3duX2NvdW5kb3duQnV0dG9uQWN0aXZlX18yZnNTX1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZXhwZXJpZW5jZUJhclwiOiBcIkV4cGVyaWVuY2VCYXJfZXhwZXJpZW5jZUJhcl9fMkpiQVhcIixcblx0XCJjdXJyZW50RXhwZXJpZW5jZVwiOiBcIkV4cGVyaWVuY2VCYXJfY3VycmVudEV4cGVyaWVuY2VfXzJYQVRSXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJvdmVybGF5XCI6IFwiTGV2ZWxVcE1vZGFsX292ZXJsYXlfXzFodVFsXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiTGV2ZWxVcE1vZGFsX2NvbnRhaW5lcl9fMWRNMThcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInByb2ZpbGVDb250YWluZXJcIjogXCJwcm9maWxlX3Byb2ZpbGVDb250YWluZXJfXzF0OFZHXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fSGJKRWNcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=