/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/atebit/dist/atebit.js":
/*!********************************************!*\
  !*** ./node_modules/atebit/dist/atebit.js ***!
  \********************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(()=>(()=>{"use strict";var e={631:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),c=n.n(o)()(a());c.push([e.id,".chars {\n  display: flex;\n  justify-content: center;\n  gap: var(--char-gap, 10px);\n}\n\n.char {\n  display: flex;\n  flex-direction: column;\n  gap: var(--cell-gap, 2px);\n}\n\n.char .row {\n  display: flex;\n  gap: var(--cell-gap, 2px);\n}\n\n.char .row .cell {\n  width: var(--cell-size, 10px);\n  height: var(--cell-size, 10px);\n}\n\n.char .cell.marked {\n  opacity: 0;\n  transform: translate3D(0, -100%, 0);\n  background: var(--cell-background, black);\n}\n",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&c[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],u=o[l]||0,p="".concat(l," ").concat(u);o[l]=u+1;var d=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var v=a(f,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:v,references:1})}c.push(p)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=n(o[c]);t[i].references--}for(var s=r(e,a),l=0;l<o.length;l++){var u=n(o[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r={};return(()=>{n.r(r),n.d(r,{animate:()=>g});var e=n(379),t=n.n(e),a=n(795),o=n.n(a),c=n(569),i=n.n(c),s=n(565),l=n.n(s),u=n(216),p=n.n(u),d=n(589),f=n.n(d),v=n(631),m={};m.styleTagTransform=f(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),t()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals;const h={A:[[0,1,1,0],[1,0,0,1],[1,1,1,1],[1,0,0,1],[1,0,0,1],[1,0,0,1]],B:[[1,1,1,0],[1,0,0,1],[1,1,1,0],[1,0,0,1],[1,0,0,1],[1,1,1,1]],C:[[1,1,1],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,1,1]],D:[[1,1,1,0],[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,1,1,0]],E:[[1,1,1],[1,0,0],[1,1,0],[1,0,0],[1,0,0],[1,1,1]],F:[[1,1,1],[1,0,0],[1,1,0],[1,0,0],[1,0,0],[1,0,0]],G:[[0,1,1,1],[1,0,0,1],[1,0,0,0],[1,0,1,1],[1,0,0,1],[0,1,1,0]],H:[[1,0,0,1],[1,0,0,1],[1,1,1,1],[1,0,0,1],[1,0,0,1],[1,0,0,1]],I:[[1,1,1],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[1,1,1]],J:[[0,0,1],[0,0,1],[0,0,1],[0,0,1],[1,0,1],[1,1,1]],K:[[1,0,0,1],[1,0,1,0],[1,1,0,0],[1,0,1,0],[1,0,0,1],[1,0,0,1]],L:[[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,1,1]],M:[[1,0,0,0,1],[1,1,0,1,1],[1,0,1,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],N:[[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,1,0,1],[1,0,1,1],[1,0,0,1]],O:[[0,1,1,0],[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,0,0,1],[0,1,1,0]],P:[[0,1,1,0],[1,0,0,1],[1,0,0,1],[1,1,1,0],[1,0,0,0],[1,0,0,0]],Q:[[0,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,1,1,0],[0,1,1,0,1]],R:[[0,1,1,0],[1,0,0,1],[1,0,0,1],[1,1,1,0],[1,0,1,0],[1,0,0,1]],S:[[0,1,1],[1,0,0],[1,1,1],[0,0,1],[0,0,1],[1,1,1]],T:[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],U:[[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,0,0,1],[0,1,1,0]],V:[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]],W:[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,1,0,1],[1,1,0,1,1],[1,0,0,0,1]],X:[[1,0,0,0,1],[0,1,0,1,1],[0,0,1,0,1],[0,0,1,0,1],[0,1,0,1,1],[1,0,0,0,1]],Y:[[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],Z:[[1,1,1,1,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],"!":[[1],[1],[1],[1],[0],[1]],"?":[[1,1,1],[0,0,1],[1,1,1],[1,0,0],[0,0,0],[1,0,0]],"-":[[0,0,0],[0,0,0],[1,1,1],[1,1,1],[0,0,0],[0,0,0]],_:[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[1,1,1],[1,1,1]],0:[[0,1,1,0],[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,0,0,1],[0,1,1,0]],1:[[0,1],[1,1],[0,1],[0,1],[0,1],[0,1]],2:[[1,1,1],[0,0,1],[0,1,0],[1,0,0],[1,0,0],[1,1,1]],3:[[1,1,1],[0,0,1],[0,1,1],[0,0,1],[0,0,1],[1,1,1]],4:[[1,0,1],[1,0,1],[1,1,1],[0,0,1],[0,0,1],[0,0,1]],5:[[1,1,1],[1,0,0],[1,1,1],[0,0,1],[0,0,1],[1,1,1]],6:[[0,0,1],[0,1,0],[1,0,0],[1,1,1],[1,0,1],[1,1,1]],7:[[1,1,1],[0,0,1],[0,1,0],[0,1,0],[0,1,0],[0,1,0]],8:[[1,1,1],[1,0,1],[0,1,0],[1,0,1],[1,0,1],[1,1,1]],9:[[1,1,1],[1,0,1],[1,1,1],[0,0,1],[0,1,0],[1,0,0]]," ":[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]};function y(e){const t=h[e.dataset.char.toUpperCase()];if(!t)return null;const n=[];return t.forEach((t=>{const r=document.createElement("div");r.classList.add("row"),t.forEach((e=>{const t=document.createElement("span");t.classList.add("cell"),e&&(t.classList.add("marked"),n.push(t)),r.appendChild(t)})),e.appendChild(r)})),n}function g(e,t){Array.from(e).map(y).forEach((e=>{!async function(e,[t,n]){for(const r of e)await r.animate(t,n).finished}(e,t)}))}})(),r})()));

/***/ }),

/***/ "./src/js/animations.js":
/*!******************************!*\
  !*** ./src/js/animations.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_TIMING": () => (/* binding */ DEFAULT_TIMING),
/* harmony export */   "POP_IN": () => (/* binding */ POP_IN),
/* harmony export */   "SLIDE_IN_LEFT": () => (/* binding */ SLIDE_IN_LEFT),
/* harmony export */   "SLIDE_IN_RIGHT": () => (/* binding */ SLIDE_IN_RIGHT),
/* harmony export */   "SLIDE_OUT_LEFT": () => (/* binding */ SLIDE_OUT_LEFT),
/* harmony export */   "SLIDE_OUT_RIGHT": () => (/* binding */ SLIDE_OUT_RIGHT),
/* harmony export */   "ZOOM_IN": () => (/* binding */ ZOOM_IN),
/* harmony export */   "ZOOM_OUT": () => (/* binding */ ZOOM_OUT)
/* harmony export */ });
var DEFAULT_TIMING = {
  duration: 250
};
var POP_IN = [{
  opacity: 0,
  transform: 'scale(0)'
}, {
  opacity: 1,
  transform: 'scale(1.5)'
}, {
  opacity: 1,
  transform: 'scale(1)'
}];
var ZOOM_IN = [{
  opacity: 0,
  transform: 'scale(0)'
}, {
  opacity: 1,
  transform: 'scale(1)'
}];
var ZOOM_OUT = [{
  opacity: 1,
  transform: 'scale(1)'
}, {
  opacity: 0,
  transform: 'scale(0)'
}];
var SLIDE_OUT_LEFT = [{
  opacity: 1,
  transform: 'translateX(0)'
}, {
  opacity: 0,
  transform: 'translateX(-100%)'
}];
var SLIDE_OUT_RIGHT = [{
  opacity: 1,
  transform: 'translateX(0)'
}, {
  opacity: 0,
  transform: 'translateX(100%)'
}];
var SLIDE_IN_RIGHT = [{
  opacity: 0,
  transform: 'translateX(100%)'
}, {
  opacity: 1,
  transform: 'translateX(0)'
}];
var SLIDE_IN_LEFT = [{
  opacity: 0,
  transform: 'translateX(-100%)'
}, {
  opacity: 1,
  transform: 'translateX(0)'
}];

/***/ }),

/***/ "./src/js/eventTypes.js":
/*!******************************!*\
  !*** ./src/js/eventTypes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATTACK": () => (/* binding */ ATTACK),
/* harmony export */   "CHECK_COORDINATES": () => (/* binding */ CHECK_COORDINATES),
/* harmony export */   "COORDINATES_FREE": () => (/* binding */ COORDINATES_FREE),
/* harmony export */   "DISPLAY_ATTACK_PHASE": () => (/* binding */ DISPLAY_ATTACK_PHASE),
/* harmony export */   "DISPLAY_SETUP_PHASE": () => (/* binding */ DISPLAY_SETUP_PHASE),
/* harmony export */   "FLEET_GONE": () => (/* binding */ FLEET_GONE),
/* harmony export */   "HIT": () => (/* binding */ HIT),
/* harmony export */   "MISS": () => (/* binding */ MISS),
/* harmony export */   "NEW_ROUND": () => (/* binding */ NEW_ROUND),
/* harmony export */   "PLACEMENT_VALID": () => (/* binding */ PLACEMENT_VALID),
/* harmony export */   "PLACE_SHIP": () => (/* binding */ PLACE_SHIP),
/* harmony export */   "PLACE_SHIPS_RANDOM": () => (/* binding */ PLACE_SHIPS_RANDOM),
/* harmony export */   "RESET_GAME": () => (/* binding */ RESET_GAME),
/* harmony export */   "SETUP_PHASE_INCOMPLETE": () => (/* binding */ SETUP_PHASE_INCOMPLETE),
/* harmony export */   "SETUP_PHASE_NEXT": () => (/* binding */ SETUP_PHASE_NEXT),
/* harmony export */   "START_GAME": () => (/* binding */ START_GAME),
/* harmony export */   "SUNK": () => (/* binding */ SUNK)
/* harmony export */ });
var START_GAME = Symbol('START_GAME'); // SETUP PHASE EVENTS

var DISPLAY_SETUP_PHASE = Symbol('DISPLAY_SETUP_PHASE');
var CHECK_COORDINATES = Symbol('CHECK_COORDINATES');
var COORDINATES_FREE = Symbol('COORDINATES_FREE');
var PLACE_SHIP = Symbol('PLACE_SHIP');
var PLACEMENT_VALID = Symbol('PLACEMENT_VALID');
var PLACE_SHIPS_RANDOM = Symbol('PLACE_SHIPS_RANDOM');
var SETUP_PHASE_NEXT = Symbol('SETUP_PHASE_NEXT');
var SETUP_PHASE_INCOMPLETE = Symbol('SETUP_PHASE_INCOMPLETE'); // ATTACK PHASE EVENTS

var DISPLAY_ATTACK_PHASE = Symbol('DISPLAY_ATTACK_PHASE');
var ATTACK = Symbol('ATTACK');
var MISS = Symbol('MISS');
var HIT = Symbol('HIT');
var SUNK = Symbol('SUNK');
var FLEET_GONE = Symbol('FLEET_GONE');
var NEW_ROUND = Symbol('NEW_ROUND');
var RESET_GAME = Symbol('RESET_GAME');

/***/ }),

/***/ "./src/js/gameData.js":
/*!****************************!*\
  !*** ./src/js/gameData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameMode": () => (/* binding */ GameMode),
/* harmony export */   "default": () => (/* binding */ GameData)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/js/player.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./src/js/util.js");
/* harmony import */ var _data_ships_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/ships.json */ "./src/data/ships.json");
/* harmony import */ var _eventTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventTypes */ "./src/js/eventTypes.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var GameMode = Object.freeze({
  VS_FRIEND: 0,
  VS_BOT: 1
});
function GameData() {
  var state = {
    gameMode: null,
    playerOne: null,
    playerTwo: null,
    availableFleet: null,
    currentSetupPlayer: null,
    currentAttacker: null,
    currentOpponent: null
  };
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.START_GAME, function (_, data) {
    state.gameMode = data.gameMode;
    state.playerOne = _objectSpread(_objectSpread({}, (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])({
      name: data.playerOneName
    })), {}, {
      gameboard: (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])()
    });
    var playerTwo = null;

    if (state.gameMode === GameMode.VS_BOT) {
      playerTwo = (0,_util__WEBPACK_IMPORTED_MODULE_4__.pipe)(_player__WEBPACK_IMPORTED_MODULE_3__["default"], _player__WEBPACK_IMPORTED_MODULE_3__.isBot)({
        name: data.playerTwoName
      });
    } else {
      playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])({
        name: data.playerTwoName
      });
    }

    state.playerTwo = _objectSpread(_objectSpread({}, playerTwo), {}, {
      gameboard: (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])()
    });
    state.availableFleet = generateFleet();
    state.currentSetupPlayer = state.playerOne;
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_SETUP_PHASE, {
      playerName: state.currentSetupPlayer.name,
      gameboard: state.currentSetupPlayer.gameboard.getGrid(),
      fleet: state.availableFleet
    });
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.CHECK_COORDINATES, function (_, data) {
    var ship = getShip(data.shipId);

    if (!ship) {
      return;
    }

    var canPlaceShip = state.currentSetupPlayer.gameboard.canPlaceShip(data.startCoords, data.shipOrientation, ship.length, ship.id);

    if (canPlaceShip) {
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.COORDINATES_FREE, {
        startCoords: data.startCoords,
        shipOrientation: data.shipOrientation,
        shipLength: ship.length
      });
    }
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.PLACE_SHIP, function (_, data) {
    var ship = getShip(data.shipId);

    if (!ship) {
      return;
    }

    var placedShip = null;

    if (data.oldStartCoords) {
      placedShip = state.currentSetupPlayer.gameboard.moveShip(data.oldStartCoords, {
        i: data.startCoords.x,
        j: data.startCoords.y
      }, data.shipOrientation);
    } else {
      placedShip = state.currentSetupPlayer.gameboard.placeShip(data.startCoords, data.shipOrientation, ship);
    }

    if (placedShip) {
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.PLACEMENT_VALID, {
        startCoords: data.startCoords,
        shipOrientation: data.shipOrientation,
        shipLength: ship.length,
        shipId: ship.id
      });
    }
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.PLACE_SHIPS_RANDOM, function () {
    state.currentSetupPlayer.gameboard.placeShipsRandom(state.availableFleet);
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_SETUP_PHASE, {
      playerName: state.currentSetupPlayer.name,
      gameboard: state.currentSetupPlayer.gameboard.getGrid(),
      fleet: state.availableFleet,
      random: true
    });
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.SETUP_PHASE_NEXT, function () {
    if (state.currentSetupPlayer.gameboard.getFleet().length !== state.availableFleet.length) {
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.SETUP_PHASE_INCOMPLETE);
      return;
    }

    state.availableFleet = generateFleet();

    if (state.currentSetupPlayer === state.playerOne) {
      if (state.gameMode === GameMode.VS_FRIEND) {
        state.currentSetupPlayer = state.playerTwo;
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_SETUP_PHASE, {
          playerName: state.currentSetupPlayer.name,
          gameboard: state.currentSetupPlayer.gameboard.getGrid(),
          fleet: state.availableFleet
        });
        return;
      } // In this case playerTwo is a bot


      state.currentSetupPlayer = null;
      state.playerTwo.gameboard.placeShipsRandom(state.availableFleet);
    }

    swapRoles();
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_ATTACK_PHASE, generateAttackPhaseData());

    if (state.currentAttacker.isBot) {
      setTimeout(function () {
        var move = state.currentAttacker.getMove(_gameboard__WEBPACK_IMPORTED_MODULE_1__.GRID_SIZE);
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.ATTACK, {
          coords: move
        });
      }, 1000);
    }
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.ATTACK, function (_, data) {
    var attack = state.currentOpponent.gameboard.receiveAttack(data.coords);

    if (attack === null) {
      return;
    }

    if (state.currentAttacker.isBot) {
      state.currentAttacker.lastMoveFeedback(attack, _gameboard__WEBPACK_IMPORTED_MODULE_1__.GRID_SIZE);
    }

    if (attack.status === _gameboard__WEBPACK_IMPORTED_MODULE_1__.Status.MISS) {
      swapRoles();
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.MISS, _objectSpread({
        coords: data.coords
      }, generateAttackPhaseData()));
    } else if (attack.status === _gameboard__WEBPACK_IMPORTED_MODULE_1__.Status.HIT) {
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.HIT, {
        coords: data.coords
      });
    } else if (attack.status === _gameboard__WEBPACK_IMPORTED_MODULE_1__.Status.SUNK) {
      var attackerName = state.currentAttacker.name;
      var opponentName = state.currentOpponent.name;
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.SUNK, {
        shipId: attack.ship.id,
        shipName: attack.ship.name,
        attackerName: attackerName,
        opponentName: opponentName,
        shipCoords: attack.shipCoords,
        adjacentCoords: attack.adjacentCoords
      });

      if (state.currentOpponent.gameboard.isFleetSunk()) {
        state.currentAttacker.incrementScore();
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.FLEET_GONE, {
          winnerName: attackerName,
          loserName: opponentName
        });
        return;
      }
    }

    if (state.currentAttacker.isBot) {
      setTimeout(function () {
        var move = state.currentAttacker.getMove(_gameboard__WEBPACK_IMPORTED_MODULE_1__.GRID_SIZE);
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.ATTACK, {
          coords: move
        });
      }, 1000);
    }
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.NEW_ROUND, function () {
    state.playerOne.gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
    state.playerTwo.gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();

    if (state.playerTwo.isBot) {
      state.playerTwo.clearHistory();
    }

    state.availableFleet = generateFleet();
    state.currentSetupPlayer = state.playerOne;
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_SETUP_PHASE, {
      playerName: state.currentSetupPlayer.name,
      gameboard: state.currentSetupPlayer.gameboard.getGrid(),
      fleet: state.availableFleet
    });
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.RESET_GAME, function () {
    state = {
      gameMode: null,
      playerOne: null,
      playerTwo: null,
      availableFleet: null,
      currentSetupPlayer: null,
      currentAttacker: null,
      currentOpponent: null
    };
  });

  function generateFleet() {
    return _data_ships_json__WEBPACK_IMPORTED_MODULE_5__.flatMap(function (shipData) {
      var ships = [];

      for (var i = 0; i < shipData.count; i += 1) {
        ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(shipData));
      }

      return ships;
    });
  }

  function getShip(shipId) {
    if (state.availableFleet === null) {
      return null;
    }

    return state.availableFleet.find(function (ship) {
      return ship.id === shipId;
    });
  }

  function swapRoles() {
    if (state.currentAttacker === null || state.currentOpponent === null) {
      // Randomly picks an attacker and an opponent
      var _sort = [state.playerOne, state.playerTwo].sort(function () {
        return Math.random() > 0.5 ? 1 : -1;
      });

      var _sort2 = _slicedToArray(_sort, 2);

      state.currentAttacker = _sort2[0];
      state.currentOpponent = _sort2[1];
    } else {
      var oldAttacker = state.currentAttacker;
      state.currentAttacker = state.currentOpponent;
      state.currentOpponent = oldAttacker;
    }

    state.currentAttacker.setActive(true);
    state.currentOpponent.setActive(false);
  }

  function generateAttackPhaseData() {
    return {
      gameMode: state.gameMode,
      playerOne: {
        name: state.playerOne.name,
        isBot: state.playerOne.isBot,
        active: state.playerOne.isActive(),
        score: state.playerOne.getScore(),
        gameboard: state.playerOne.gameboard.getGrid(),
        fleet: state.playerOne.gameboard.getFleet()
      },
      playerTwo: {
        name: state.playerTwo.name,
        isBot: state.playerTwo.isBot,
        active: state.playerTwo.isActive(),
        score: state.playerTwo.getScore(),
        gameboard: state.playerTwo.gameboard.getGrid(),
        fleet: state.playerTwo.gameboard.getFleet()
      }
    };
  }
}

/***/ }),

/***/ "./src/js/gameUi.js":
/*!**************************!*\
  !*** ./src/js/gameUi.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameUi)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var atebit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! atebit */ "./node_modules/atebit/dist/atebit.js");
/* harmony import */ var atebit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(atebit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/js/util.js");
/* harmony import */ var _gameData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameData */ "./src/js/gameData.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animations */ "./src/js/animations.js");
/* harmony import */ var _eventTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventTypes */ "./src/js/eventTypes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








function GameUi() {
  // Chrome doesn't allow accessing the dataTransfer object out of the dragstart
  // and drop handlers.
  var dataTransfer = null;
  var cellGhostImage = null;
  var passScreenTimeoutId = null;
  var turnIndicator = null;
  var playerOneGameboardContainer = null;
  var playerTwoGameboardContainer = null;
  var currentActiveGameboardContainer = null;
  var main = document.getElementById('main');
  (0,atebit__WEBPACK_IMPORTED_MODULE_1__.animate)(document.querySelectorAll('.logo .char'), [_animations__WEBPACK_IMPORTED_MODULE_5__.POP_IN, {
    duration: 100,
    fill: 'forwards'
  }]); // INITIALY RENDER GAME SETTINGS FORM

  render(main, createGameSettingsForm(), false, {
    inKeyFrames: _animations__WEBPACK_IMPORTED_MODULE_5__.ZOOM_IN
  }); // PUBSUB SUBSCRIPTIONS

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_SETUP_PHASE, function (_, data) {
    if (data.random) {
      unmarkFleetLocation(currentActiveGameboardContainer);
      markFleetLocation(currentActiveGameboardContainer, data.gameboard);
      currentActiveGameboardContainer.querySelectorAll('.fleet-setup .ship[draggable="true"]').forEach(function (ship) {
        ship.setAttribute('draggable', false);
        ship.removeEventListener('dragstart', handleSetupShipDragStart);
      });
    } else {
      render(main.firstElementChild, createSetupPhase(data), true, {
        outKeyframes: _animations__WEBPACK_IMPORTED_MODULE_5__.SLIDE_OUT_LEFT,
        inKeyFrames: _animations__WEBPACK_IMPORTED_MODULE_5__.SLIDE_IN_RIGHT
      });
    }
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.COORDINATES_FREE, function (_, data) {
    markValidTargetCells(currentActiveGameboardContainer, data);
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.PLACEMENT_VALID, function (_, data) {
    unmarkShipLocationCells(currentActiveGameboardContainer, data.shipId);
    markShipLocationCells(currentActiveGameboardContainer, data);
    var shipContainer = document.querySelector(".fleet [data-ship-id=\"".concat(data.shipId, "\"]"));

    if (shipContainer.draggable) {
      shipContainer.setAttribute('draggable', false);
      shipContainer.removeEventListener('click', handleSetupShipDragStart);
    }
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.SETUP_PHASE_INCOMPLETE, function () {
    renderNotification({
      type: 'error',
      msg: 'You need to place all available ships on the gameboard.'
    });
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_ATTACK_PHASE, /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_, data) {
      var attackerName;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(data.gameMode === _gameData__WEBPACK_IMPORTED_MODULE_4__.GameMode.VS_FRIEND)) {
                _context.next = 8;
                break;
              }

              attackerName = null;

              if (data.playerOne.active) {
                attackerName = data.playerOne.name;
              } else {
                attackerName = data.playerTwo.name;
              }

              renderOverlay(createPassDeviceScreen(attackerName));
              render(main.firstElementChild, createAttackPhase(data), true);
              currentActiveGameboardContainer.scrollIntoView();
              _context.next = 11;
              break;

            case 8:
              _context.next = 10;
              return render(main.firstElementChild, createAttackPhase(data), true, {
                outKeyframes: _animations__WEBPACK_IMPORTED_MODULE_5__.SLIDE_OUT_LEFT,
                inKeyFrames: _animations__WEBPACK_IMPORTED_MODULE_5__.SLIDE_IN_RIGHT
              });

            case 10:
              currentActiveGameboardContainer.scrollIntoView({
                behavior: 'smooth'
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.MISS, function (_, data) {
    var cellNum = (0,_util__WEBPACK_IMPORTED_MODULE_3__.coordinatesToCellNumber)(data.coords, _gameboard__WEBPACK_IMPORTED_MODULE_2__.GRID_SIZE);
    currentActiveGameboardContainer.querySelector("[data-cell-num=\"".concat(cellNum, "\"]")).classList.add('miss');
    swapRoles(data);
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.HIT, function (_, data) {
    var cellNum = (0,_util__WEBPACK_IMPORTED_MODULE_3__.coordinatesToCellNumber)(data.coords, _gameboard__WEBPACK_IMPORTED_MODULE_2__.GRID_SIZE);
    currentActiveGameboardContainer.querySelector("[data-cell-num=\"".concat(cellNum, "\"]")).classList.add('hit');
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.SUNK, function (_, data) {
    data.shipCoords.forEach(function (coord) {
      var cellNum = (0,_util__WEBPACK_IMPORTED_MODULE_3__.coordinatesToCellNumber)(coord, _gameboard__WEBPACK_IMPORTED_MODULE_2__.GRID_SIZE);
      var cell = currentActiveGameboardContainer.querySelector("[data-cell-num=\"".concat(cellNum, "\"]"));
      cell.classList.remove('hit');
      cell.classList.add('sunk');
      cell.animate(_animations__WEBPACK_IMPORTED_MODULE_5__.POP_IN, _animations__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_TIMING);
    });
    data.adjacentCoords.forEach(function (coord) {
      var cellNum = (0,_util__WEBPACK_IMPORTED_MODULE_3__.coordinatesToCellNumber)(coord, _gameboard__WEBPACK_IMPORTED_MODULE_2__.GRID_SIZE);
      var cell = currentActiveGameboardContainer.querySelector("[data-cell-num=\"".concat(cellNum, "\"]"));
      cell.classList.add('miss');
    });
    currentActiveGameboardContainer.querySelector(".fleet-status [data-ship-id=\"".concat(data.shipId, "\"]")).classList.add('sunk');
    renderNotification({
      type: 'info',
      msg: "".concat(data.attackerName, " sunk ").concat(data.opponentName, "'s ").concat(data.shipName, "!")
    });
  });
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.FLEET_GONE, function (_, data) {
    setTimeout(function () {
      render(document.body, createEndRoundOverlay(data.winnerName, data.loserName), false, {
        inKeyFrames: _animations__WEBPACK_IMPORTED_MODULE_5__.ZOOM_IN
      });
    }, 1000);
  }); // DOM UTIL FUNCTIONS

  function createElement(_ref2) {
    var _ref2$tagName = _ref2.tagName,
        tagName = _ref2$tagName === void 0 ? 'div' : _ref2$tagName,
        _ref2$attributes = _ref2.attributes,
        attributes = _ref2$attributes === void 0 ? {} : _ref2$attributes,
        _ref2$content = _ref2.content,
        content = _ref2$content === void 0 ? null : _ref2$content,
        _ref2$useInnerHTML = _ref2.useInnerHTML,
        useInnerHTML = _ref2$useInnerHTML === void 0 ? false : _ref2$useInnerHTML,
        _ref2$children = _ref2.children,
        children = _ref2$children === void 0 ? [] : _ref2$children,
        _ref2$events = _ref2.events,
        events = _ref2$events === void 0 ? [] : _ref2$events;
    var element = document.createElement(tagName);
    Object.keys(attributes).forEach(function (attribute) {
      element.setAttribute(attribute, attributes[attribute]);
    });

    if (content) {
      if (useInnerHTML) {
        element.innerHTML = content;
      } else {
        element.textContent = content;
      }
    }

    children.forEach(function (child) {
      return element.appendChild(child);
    });
    events.forEach(function (event) {
      element.addEventListener(event.name, event.handler);
    });
    return element;
  }

  function createEvent(name, handler) {
    return {
      name: name,
      handler: handler
    };
  }

  function render(_x3, _x4) {
    return _render.apply(this, arguments);
  }

  function _render() {
    _render = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(parent, element) {
      var replace,
          animations,
          _animations$outTiming,
          _animations$inTiming,
          _args4 = arguments;

      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              replace = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : false;
              animations = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : null;

              if (!replace) {
                _context4.next = 9;
                break;
              }

              if (!animations) {
                _context4.next = 6;
                break;
              }

              _context4.next = 6;
              return parent.animate(animations.outKeyframes, (_animations$outTiming = animations.outTiming) !== null && _animations$outTiming !== void 0 ? _animations$outTiming : _animations__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_TIMING).finished;

            case 6:
              parent.replaceWith(element);
              _context4.next = 10;
              break;

            case 9:
              parent.appendChild(element);

            case 10:
              if (!animations) {
                _context4.next = 13;
                break;
              }

              _context4.next = 13;
              return element.animate(animations.inKeyFrames, (_animations$inTiming = animations.inTiming) !== null && _animations$inTiming !== void 0 ? _animations$inTiming : _animations__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_TIMING).finished;

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _render.apply(this, arguments);
  }

  function createNotification(_ref3) {
    var type = _ref3.type,
        msg = _ref3.msg;
    return createElement({
      attributes: {
        "class": "notification ".concat(type)
      },
      children: [createElement({
        tagName: 'p',
        content: msg
      })]
    });
  }

  function renderNotification(notificationAttributes) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    var notification = createNotification(notificationAttributes);
    render(document.querySelector('.notifications'), notification, false, {
      inKeyFrames: _animations__WEBPACK_IMPORTED_MODULE_5__.SLIDE_IN_RIGHT
    });
    setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return notification.animate(_animations__WEBPACK_IMPORTED_MODULE_5__.SLIDE_OUT_RIGHT, _animations__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_TIMING).finished;

            case 2:
              notification.remove();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })), duration);
  }

  function createOverlay(text, buttons) {
    return createElement({
      attributes: {
        id: 'overlay'
      },
      children: [createElement({
        tagName: 'p',
        content: text
      }), createElement({
        attributes: {
          "class": 'buttons'
        },
        children: buttons
      })]
    });
  }

  function renderOverlay(_x5) {
    return _renderOverlay.apply(this, arguments);
  }

  function _renderOverlay() {
    _renderOverlay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(overlay) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return render(document.body, overlay, false, {
                inKeyFrames: _animations__WEBPACK_IMPORTED_MODULE_5__.ZOOM_IN
              });

            case 2:
              document.body.classList.add('clipped');

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _renderOverlay.apply(this, arguments);
  }

  function createPassDeviceScreen(playerName) {
    return createOverlay("".concat(playerName, "'s turn!"), [createLeaveGameButton(), createButton('Accept', {
      "class": 'btn'
    }, [createEvent('click', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(event) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return removeOverlay(event);

              case 2:
                currentActiveGameboardContainer.scrollIntoView({
                  behavior: 'smooth'
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x6) {
        return _ref5.apply(this, arguments);
      };
    }())])]);
  }

  function createEndRoundOverlay(winner, loser) {
    return createOverlay("".concat(winner, " sunk ").concat(loser, "'s fleet!"), [createLeaveGameButton(), createButton('Continue', {
      "class": 'btn'
    }, [createEvent('click', function (event) {
      removeOverlay(event);
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.NEW_ROUND);
    })])]);
  }

  function removeOverlay(_x7) {
    return _removeOverlay.apply(this, arguments);
  }

  function _removeOverlay() {
    _removeOverlay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(event) {
      var parent;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              parent = event.currentTarget.closest('#overlay');

              if (!parent) {
                _context6.next = 6;
                break;
              }

              _context6.next = 4;
              return parent.animate(_animations__WEBPACK_IMPORTED_MODULE_5__.ZOOM_OUT, _animations__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_TIMING).finished;

            case 4:
              parent.remove();
              document.body.classList.remove('clipped');

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _removeOverlay.apply(this, arguments);
  }

  function createLeaveGameButton() {
    return createButton('Leave game', {
      "class": 'btn'
    }, [createEvent('click', function (event) {
      if (passScreenTimeoutId) {
        clearTimeout(passScreenTimeoutId);
      }

      removeOverlay(event);
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.RESET_GAME);
      render(main.firstElementChild, createGameSettingsForm(), true, {
        inKeyFrames: _animations__WEBPACK_IMPORTED_MODULE_5__.ZOOM_IN,
        outKeyframes: _animations__WEBPACK_IMPORTED_MODULE_5__.ZOOM_OUT
      });
    })]);
  } // GAME SETTINGS FORM / FORM UTIL FUNCTIONS


  function createGameSettingsForm() {
    var playerTwo = createTextInput({
      name: 'player-two',
      id: 'player-two',
      placeholder: 'Player 2',
      maxlength: 16
    });
    playerTwo.classList.add('hide');
    return createElement({
      attributes: {
        "class": 'container form-container'
      },
      children: [createElement({
        tagName: 'form',
        attributes: {
          "class": 'form game-settings-form',
          novalidate: true
        },
        children: [createGameModeInput(), createTextInput({
          name: 'player-one',
          id: 'player-one',
          placeholder: 'Player 1',
          maxlength: 16,
          autofocus: true
        }), playerTwo, createButton('Start Game', {
          "class": 'btn',
          type: 'submit'
        })],
        events: [createEvent('submit', handleStartGame)]
      })]
    });
  }

  function createGameModeInput() {
    return createElement({
      attributes: {
        "class": 'form-field'
      },
      children: [createElement({
        attributes: {
          "class": 'radios'
        },
        children: [createRadioInput({
          name: 'game-mode',
          id: 'vs-friend',
          value: _gameData__WEBPACK_IMPORTED_MODULE_4__.GameMode.VS_FRIEND
        }, [createEvent('change', handleGameModeChange)]), createLabel('vs friend', {
          "for": 'vs-friend',
          "class": 'btn'
        }), createRadioInput({
          name: 'game-mode',
          id: 'vs-bot',
          value: _gameData__WEBPACK_IMPORTED_MODULE_4__.GameMode.VS_BOT,
          checked: true
        }, [createEvent('change', handleGameModeChange)]), createLabel('vs noobot', {
          "for": 'vs-bot',
          "class": 'btn'
        })]
      })]
    });
  }

  function createRadioInput(attributes) {
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return createElement({
      tagName: 'input',
      attributes: _objectSpread({
        type: 'radio'
      }, attributes),
      events: events
    });
  }

  function createLabel(labelText, attributes) {
    return createElement({
      tagName: 'label',
      attributes: attributes,
      content: labelText
    });
  }

  function createTextInput(attributes) {
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return createElement({
      attributes: {
        "class": 'form-field'
      },
      children: [createLabel(attributes.placeholder, {
        "for": attributes.id
      }), createElement({
        tagName: 'input',
        attributes: _objectSpread({
          type: 'text'
        }, attributes),
        events: [createEvent('blur', function (event) {
          var input = event.currentTarget;
          input.value = input.value.trim();
        })].concat(_toConsumableArray(events))
      }), createElement({
        tagName: 'p',
        attributes: {
          "class": 'note'
        },
        content: 'Max 16 characters.'
      })]
    });
  }

  function createButton(buttonText, attributes) {
    var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    return createElement({
      attributes: {
        "class": 'form-field'
      },
      children: [createElement({
        tagName: 'button',
        attributes: attributes,
        content: buttonText,
        events: events
      })]
    });
  } // SETUP PHASE


  function createSetupPhase(data) {
    currentActiveGameboardContainer = createElement({
      attributes: {
        "class": 'gameboard-container'
      },
      children: [createSetupGameboard(data.gameboard), createFleet(data.fleet, {
        "class": 'fleet fleet-setup'
      }, !data.random)]
    });
    return createElement({
      attributes: {
        "class": 'container setup-phase-container'
      },
      children: [createElement({
        tagName: 'p',
        attributes: {
          "class": 'player-name'
        },
        content: "".concat(data.playerName, "'s setup phase!")
      }), createInstructions(), currentActiveGameboardContainer, createElement({
        attributes: {
          "class": 'buttons'
        },
        children: [createLeaveGameButton(), createButton('Random', {
          "class": 'btn'
        }, [createEvent('click', function () {
          pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.PLACE_SHIPS_RANDOM);
        })]), createButton('Next', {
          "class": 'btn'
        }, [createEvent('click', function () {
          pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.SETUP_PHASE_NEXT);
        })])]
      })]
    });
  }

  function createInstructions() {
    return createElement({
      children: [createElement({
        tagName: 'p',
        content: 'How to:'
      }), createElement({
        tagName: 'ul',
        children: [createElement({
          tagName: 'li',
          content: 'Drag a ship to the desired position on the gameboard.'
        }), createElement({
          tagName: 'li',
          content: 'Click on a ship to rotate it by a -90&deg;.',
          useInnerHTML: true
        }), createElement({
          tagName: 'li',
          content: 'Ships cannot overlap!'
        }), createElement({
          tagName: 'li',
          content: 'There should be at least one square space between ships!'
        })]
      })]
    });
  }

  function createSetupGameboard(gameboard) {
    return createElement({
      attributes: {
        "class": 'gameboard'
      },
      children: gameboard.map(function (cell, cellNum) {
        return createGameboardCell(cell, {
          'data-cell-num': cellNum,
          draggable: cell.status === _gameboard__WEBPACK_IMPORTED_MODULE_2__.Status.BUSY
        }, [createEvent('click', handleSetupCellClick), createEvent('dragstart', handleSetupCellDragStart), createEvent('dragend', handleSetupCellDragEnd)], true);
      }),
      events: [createEvent('dragenter', handleSetupGameboardDragEnter), createEvent('dragover', handleSetupGameboardDragOver), createEvent('dragleave', handleSetupGameboardDragLeave), createEvent('drop', handleSetupGameboardDrop)]
    });
  }

  function createGameboardCell(cellData, cellAttributes) {
    var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var showShips = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var attributes = _objectSpread({
      "class": 'cell'
    }, cellAttributes);

    if (cellData.status === _gameboard__WEBPACK_IMPORTED_MODULE_2__.Status.MISS) {
      attributes["class"] += ' miss';
    } else if (cellData.status === _gameboard__WEBPACK_IMPORTED_MODULE_2__.Status.HIT) {
      attributes["class"] += ' hit';
    } else if (cellData.status === _gameboard__WEBPACK_IMPORTED_MODULE_2__.Status.SUNK) {
      attributes["class"] += ' sunk';
    } else if (cellData.status === _gameboard__WEBPACK_IMPORTED_MODULE_2__.Status.BUSY && showShips) {
      attributes["class"] += ' marked';
      attributes['data-ship-id'] = cellData.ship.id;
      attributes['data-ship-orientation'] = cellData.orientation;
    }

    return createElement({
      attributes: attributes,
      events: events
    });
  }

  function createCellGhostImage(shipId, shipOrientation) {
    var dragGhostImage = createElement({
      attributes: {
        "class": 'fleet fleet-setup drag-ghost-image'
      }
    });
    var shipElement = document.querySelector(".fleet [data-ship-id=\"".concat(shipId, "\"]")).cloneNode(true);
    shipElement.setAttribute('draggable', true);

    if (shipOrientation === _gameboard__WEBPACK_IMPORTED_MODULE_2__.Orientation.VERTICAL) {
      shipElement.style.gridAutoFlow = 'row';
    }

    dragGhostImage.appendChild(shipElement);
    document.body.appendChild(dragGhostImage);
    return dragGhostImage;
  }

  function createFleet(fleet, attributes) {
    var shipsDraggable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return createElement({
      attributes: attributes,
      children: fleet.map(function (ship) {
        return createShip(ship, shipsDraggable);
      })
    });
  }

  function createShip(ship) {
    var draggable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var events = [];

    if (draggable) {
      events.push(createEvent('dragstart', handleSetupShipDragStart));
    }

    return createElement({
      attributes: {
        "class": 'ship-container'
      },
      children: [createElement({
        tagName: 'p',
        attributes: {
          "class": 'ship-name'
        },
        content: ship.name
      }), createElement({
        attributes: {
          "class": 'ship',
          'data-ship-id': ship.id,
          draggable: draggable
        },
        children: function () {
          var cells = [];

          for (var i = 0; i < ship.length; i += 1) {
            cells.push(createElement({
              attributes: {
                "class": 'cell'
              }
            }));
          }

          return cells;
        }(),
        events: events
      })]
    });
  }

  function markBlockOfCells(gameboardContainer, _ref6, cellMarkCallback) {
    var startCoords = _ref6.startCoords,
        shipOrientation = _ref6.shipOrientation,
        shipLength = _ref6.shipLength;
    var startCellNum = (0,_util__WEBPACK_IMPORTED_MODULE_3__.coordinatesToCellNumber)(startCoords, _gameboard__WEBPACK_IMPORTED_MODULE_2__.GRID_SIZE);
    var step = shipOrientation === _gameboard__WEBPACK_IMPORTED_MODULE_2__.Orientation.HORIZONTAL ? 1 : 10;

    for (var i = 0, j = startCellNum; i < shipLength; i += 1, j += step) {
      var cell = gameboardContainer.querySelector(".cell[data-cell-num=\"".concat(j, "\""));
      cellMarkCallback(cell);
    }
  }

  function markValidTargetCells(gameboardContainer, data) {
    markBlockOfCells(gameboardContainer, data, function (cell) {
      cell.classList.add('valid');
    });
  }

  function unmarkValidTargetCells(gameboardContainer) {
    gameboardContainer.querySelectorAll('.cell.valid').forEach(function (cell) {
      cell.classList.remove('valid');
    });
  }

  function markShipLocationCells(gameboardContainer, data) {
    markBlockOfCells(gameboardContainer, data, function (cell) {
      cell.classList.add('marked');
      cell.setAttribute('draggable', true);
      cell.setAttribute('data-ship-id', data.shipId);
      cell.setAttribute('data-ship-orientation', data.shipOrientation);
    });
  }

  function unmarkShipLocationCells(gameboardContainer) {
    var shipId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var selectorString = '.cell.marked';

    if (shipId) {
      selectorString += "[data-ship-id=\"".concat(shipId, "\"]");
    }

    gameboardContainer.querySelectorAll(selectorString).forEach(function (cell) {
      cell.classList.remove('marked');
      cell.setAttribute('draggable', false);
      cell.removeAttribute('data-ship-id');
      cell.removeAttribute('data-ship-orientation');
    });
  }

  function markFleetLocation(gameboardContainer, gameboard) {
    gameboard.filter(function (cell) {
      return cell.status === _gameboard__WEBPACK_IMPORTED_MODULE_2__.Status.BUSY && cell.position === 0;
    }).forEach(function (cell) {
      markShipLocationCells(gameboardContainer, {
        startCoords: {
          x: cell.x,
          y: cell.y
        },
        shipId: cell.ship.id,
        shipOrientation: cell.orientation,
        shipLength: cell.ship.length
      });
    });
  }

  function unmarkFleetLocation(gameboardContainer) {
    unmarkShipLocationCells(gameboardContainer);
  } // ATTACK PHASE


  function createAttackPhase(data) {
    playerOneGameboardContainer = createPlayerContainer(data.gameMode, data.playerOne);
    playerTwoGameboardContainer = createPlayerContainer(data.gameMode, data.playerTwo);
    currentActiveGameboardContainer = data.playerOne.active ? playerTwoGameboardContainer : playerOneGameboardContainer;
    turnIndicator = createElement({
      attributes: {
        "class": "turn-indicator".concat(!data.playerOne.active ? ' left' : '')
      },
      content: '-->'
    });
    return createElement({
      attributes: {
        "class": 'container attack-phase-container'
      },
      children: [createElement({
        children: [playerOneGameboardContainer, turnIndicator, playerTwoGameboardContainer]
      }), createElement({
        attributes: {
          "class": 'buttons'
        },
        children: [createLeaveGameButton()]
      })]
    });
  }

  function createPlayerContainer(gameMode, playerData) {
    return createElement({
      attributes: {
        "class": "player-container".concat(shouldPlayerContainerBeActive(gameMode, playerData) ? ' active' : '')
      },
      children: [createElement({
        attributes: {
          "class": 'player-info'
        },
        children: [createElement({
          tagName: 'p',
          attributes: {
            "class": 'player-name'
          },
          content: "".concat(playerData.name, "'s fleet")
        }), createElement({
          tagName: 'p',
          attributes: {
            "class": 'player-score'
          },
          content: "".concat(playerData.score)
        })]
      }), createElement({
        attributes: {
          "class": 'gameboard-container'
        },
        children: [createAttackGameboard(playerData.gameboard, shouldRenderFleetLocation(gameMode, playerData)), createFleet(playerData.fleet, {
          "class": 'fleet fleet-status'
        }, false)]
      })]
    });
  }

  function createAttackGameboard(gameboard, showShips) {
    var events = [];

    if (!showShips) {
      events.push(createEvent('click', handleAttackGameboardClick));
    }

    return createElement({
      attributes: {
        "class": 'gameboard'
      },
      children: gameboard.map(function (cell, cellNum) {
        return createGameboardCell(cell, {
          'data-cell-num': cellNum
        }, [], showShips);
      }),
      events: events
    });
  }

  function shouldRenderFleetLocation(gameMode, playerData) {
    return gameMode === _gameData__WEBPACK_IMPORTED_MODULE_4__.GameMode.VS_BOT && !playerData.isBot || gameMode === _gameData__WEBPACK_IMPORTED_MODULE_4__.GameMode.VS_FRIEND && playerData.active;
  }

  function shouldPlayerContainerBeActive(gameMode, playerData) {
    return gameMode === _gameData__WEBPACK_IMPORTED_MODULE_4__.GameMode.VS_BOT && (!playerData.isBot || playerData.isBot && playerData.active) || gameMode === _gameData__WEBPACK_IMPORTED_MODULE_4__.GameMode.VS_FRIEND && playerData.active;
  }

  function swapRoles(data) {
    if (data.gameMode === _gameData__WEBPACK_IMPORTED_MODULE_4__.GameMode.VS_BOT) {
      if (data.playerOne.active) {
        removeGameboardClickEvent(playerOneGameboardContainer);
        addGameboardClickEvent(playerTwoGameboardContainer);
        playerTwoGameboardContainer.classList.remove('active');
        turnIndicator.classList.remove('left');
        currentActiveGameboardContainer = playerTwoGameboardContainer;
      } else {
        removeGameboardClickEvent(playerTwoGameboardContainer);
        playerTwoGameboardContainer.classList.add('active');
        turnIndicator.classList.add('left');
        currentActiveGameboardContainer = playerOneGameboardContainer;
      }

      setTimeout(function () {
        currentActiveGameboardContainer.scrollIntoView({
          behavior: 'smooth'
        });
      }, 500);
      return;
    }

    var attacker = null;
    var attackerGameboardContainer = null;
    var opponentGameboardContainer = null;

    if (data.playerOne.active) {
      attacker = data.playerOne;
      attackerGameboardContainer = playerOneGameboardContainer;
      opponentGameboardContainer = playerTwoGameboardContainer;
    } else {
      attacker = data.playerTwo;
      attackerGameboardContainer = playerTwoGameboardContainer;
      opponentGameboardContainer = playerOneGameboardContainer;
    }

    passScreenTimeoutId = setTimeout(function () {
      renderOverlay(createPassDeviceScreen(attacker.name));
    }, 1000);
    setTimeout(function () {
      unmarkFleetLocation(opponentGameboardContainer);
      markFleetLocation(attackerGameboardContainer, attacker.gameboard);
      addGameboardClickEvent(opponentGameboardContainer);

      if (attacker === data.playerOne) {
        turnIndicator.classList.remove('left');
      } else {
        turnIndicator.classList.add('left');
      }

      currentActiveGameboardContainer = opponentGameboardContainer;
    }, 1250);
    removeGameboardClickEvent(attackerGameboardContainer);
  }

  function addGameboardClickEvent(gameboardContainer) {
    gameboardContainer.classList.remove('active');
    gameboardContainer.querySelector('.gameboard').addEventListener('click', handleAttackGameboardClick);
  }

  function removeGameboardClickEvent(gameboardContainer) {
    gameboardContainer.classList.add('active');
    gameboardContainer.querySelector('.gameboard').removeEventListener('click', handleAttackGameboardClick);
  } // DOM EVENT HANDLERS


  function handleGameModeChange(event) {
    var form = event.currentTarget.closest('.game-settings-form');
    var value = parseInt(event.currentTarget.value, 10);
    var playerTwoContainer = form.elements['player-two'].closest('.form-field');

    if (value === _gameData__WEBPACK_IMPORTED_MODULE_4__.GameMode.VS_FRIEND) {
      playerTwoContainer.classList.remove('hide');
    } else if (value === _gameData__WEBPACK_IMPORTED_MODULE_4__.GameMode.VS_BOT) {
      playerTwoContainer.classList.add('hide');
    }
  }

  function handleStartGame(event) {
    event.preventDefault();
    var form = event.currentTarget;

    if (!form.elements['player-one'].validity.valid || !form.elements['player-two'].validity.valid) {
      renderNotification({
        type: 'error',
        msg: 'Player names can have maximum of 16 characters!'
      });
      return;
    }

    var gameMode = parseInt(form.elements['game-mode'].value, 10);

    if (gameMode !== _gameData__WEBPACK_IMPORTED_MODULE_4__.GameMode.VS_FRIEND && gameMode !== _gameData__WEBPACK_IMPORTED_MODULE_4__.GameMode.VS_BOT) {
      gameMode = _gameData__WEBPACK_IMPORTED_MODULE_4__.GameMode.VS_BOT;
    }

    var playerOneName = form.elements['player-one'].value;

    if (playerOneName.length === 0) {
      playerOneName = 'Player 1';
    }

    var playerTwoName = form.elements['player-two'].value;

    if (gameMode === _gameData__WEBPACK_IMPORTED_MODULE_4__.GameMode.VS_FRIEND) {
      if (playerTwoName.length === 0) {
        playerTwoName = 'Player 2';
      }
    } else {
      playerTwoName = 'Noobot';
    }

    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.START_GAME, {
      gameMode: gameMode,
      playerOneName: playerOneName,
      playerTwoName: playerTwoName
    });
  }

  function handleSetupShipDragStart(event) {
    var _target$getAttribute;

    var target = event.currentTarget;

    if (!target || !target.hasAttribute('data-ship-id')) {
      return;
    }

    var shipId = target.getAttribute('data-ship-id');
    var shipOrientation = (_target$getAttribute = target.getAttribute('data-ship-orientation')) !== null && _target$getAttribute !== void 0 ? _target$getAttribute : _gameboard__WEBPACK_IMPORTED_MODULE_2__.Orientation.HORIZONTAL;
    dataTransfer = {
      shipId: shipId,
      shipOrientation: shipOrientation
    };
  }

  function handleSetupGameboardDragEnter(event) {
    event.preventDefault();
    var target = event.target;

    if (!dataTransfer || !target || !target.hasAttribute('data-cell-num')) {
      return;
    }

    var coords = (0,_util__WEBPACK_IMPORTED_MODULE_3__.cellNumberToCoordinates)(parseInt(event.target.getAttribute('data-cell-num'), 10), _gameboard__WEBPACK_IMPORTED_MODULE_2__.GRID_SIZE);
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.CHECK_COORDINATES, {
      startCoords: coords,
      shipOrientation: dataTransfer.shipOrientation,
      shipId: dataTransfer.shipId
    });
  }

  function handleSetupGameboardDragOver(event) {
    event.preventDefault();
  }

  function handleSetupGameboardDragLeave(event) {
    var target = event.target;

    if (!target || !target.hasAttribute('data-cell-num')) {
      return;
    }

    unmarkValidTargetCells(currentActiveGameboardContainer);
  }

  function handleSetupGameboardDrop(event) {
    event.preventDefault();
    var target = event.target;

    if (!dataTransfer || !target || !target.hasAttribute('data-cell-num')) {
      return;
    }

    var coords = (0,_util__WEBPACK_IMPORTED_MODULE_3__.cellNumberToCoordinates)(parseInt(event.target.getAttribute('data-cell-num'), 10), _gameboard__WEBPACK_IMPORTED_MODULE_2__.GRID_SIZE);
    unmarkValidTargetCells(currentActiveGameboardContainer);
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.PLACE_SHIP, {
      startCoords: coords,
      shipOrientation: dataTransfer.shipOrientation,
      shipId: dataTransfer.shipId,
      oldStartCoords: dataTransfer.oldStartCoords
    });
    dataTransfer = null;
  }

  function handleSetupCellClick(event) {
    var target = event.target;

    if (!target || !target.hasAttribute('data-ship-id')) {
      return;
    }

    var shipId = target.getAttribute('data-ship-id');
    var oldShipOrientation = parseInt(target.getAttribute('data-ship-orientation'), 10);
    var startTargetCell = document.querySelector(".cell.marked[data-ship-id=\"".concat(shipId, "\"]"));
    var coords = (0,_util__WEBPACK_IMPORTED_MODULE_3__.cellNumberToCoordinates)(parseInt(startTargetCell.getAttribute('data-cell-num'), 10), _gameboard__WEBPACK_IMPORTED_MODULE_2__.GRID_SIZE);
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.PLACE_SHIP, {
      startCoords: coords,
      oldStartCoords: coords,
      shipId: shipId,
      shipOrientation: oldShipOrientation === _gameboard__WEBPACK_IMPORTED_MODULE_2__.Orientation.HORIZONTAL ? _gameboard__WEBPACK_IMPORTED_MODULE_2__.Orientation.VERTICAL : _gameboard__WEBPACK_IMPORTED_MODULE_2__.Orientation.HORIZONTAL
    });
  }

  function handleSetupCellDragStart(event) {
    var target = event.target;

    if (!target || !target.hasAttribute('data-ship-id')) {
      return;
    }

    var shipId = target.getAttribute('data-ship-id');
    var shipOrientation = parseInt(target.getAttribute('data-ship-orientation'), 10);
    cellGhostImage = createCellGhostImage(shipId, shipOrientation);
    event.dataTransfer.setDragImage(cellGhostImage, 0, 0);
    dataTransfer = {
      shipId: shipId,
      shipOrientation: shipOrientation,
      oldStartCoords: (0,_util__WEBPACK_IMPORTED_MODULE_3__.cellNumberToCoordinates)(parseInt(target.getAttribute('data-cell-num'), 10), _gameboard__WEBPACK_IMPORTED_MODULE_2__.GRID_SIZE)
    };
  }

  function handleSetupCellDragEnd() {
    if (cellGhostImage) {
      cellGhostImage.remove();
      cellGhostImage = null;
    }
  }

  function handleAttackGameboardClick(event) {
    var target = event.target;

    if (!target || target.className.search(/(miss|hit|sunk)/) !== -1) {
      return;
    }

    var coords = (0,_util__WEBPACK_IMPORTED_MODULE_3__.cellNumberToCoordinates)(parseInt(target.getAttribute('data-cell-num'), 10), _gameboard__WEBPACK_IMPORTED_MODULE_2__.GRID_SIZE);
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_eventTypes__WEBPACK_IMPORTED_MODULE_6__.ATTACK, {
      coords: coords
    });
  }
}

/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRID_SIZE": () => (/* binding */ GRID_SIZE),
/* harmony export */   "Orientation": () => (/* binding */ Orientation),
/* harmony export */   "Status": () => (/* binding */ Status),
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/js/util.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable no-continue */

var GRID_SIZE = 10;
var Orientation = Object.freeze({
  HORIZONTAL: 0,
  VERTICAL: 1
});
var Status = Object.freeze({
  EMPTY: 0,
  BUSY: 1,
  MISS: 2,
  HIT: 3,
  SUNK: 4
});
function Gameboard() {
  var grid = buildGrid();
  var fleet = new Set();

  function buildGrid() {
    var newGrid = [];

    for (var row = 0; row < GRID_SIZE; row += 1) {
      newGrid.push([]);

      for (var column = 0; column < GRID_SIZE; column += 1) {
        newGrid[row][column] = {
          status: Status.EMPTY
        };
      }
    }

    return newGrid;
  }

  function getGrid() {
    var multidimensional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var gridCopy = grid.map(function (rows) {
      return rows.slice(0);
    });

    if (multidimensional) {
      return gridCopy;
    }

    return gridCopy.flat();
  }

  function getCellData(_ref) {
    var x = _ref.x,
        y = _ref.y;

    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.areValidCoordinates)({
      x: x,
      y: y
    }, GRID_SIZE)) {
      return null;
    }

    return grid[y][x];
  }

  function getFleet() {
    return Array.from(fleet);
  }

  function calculateEndCoordinates(_ref2, orientation, shipLength) {
    var x = _ref2.x,
        y = _ref2.y;
    var x2 = x;
    var y2 = y;

    if (orientation === Orientation.HORIZONTAL) {
      x2 += shipLength - 1;
    } else {
      y2 += shipLength - 1;
    }

    return {
      x2: x2,
      y2: y2
    };
  }

  function getShipSpace(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        x2 = _ref3.x2,
        y2 = _ref3.y2;
    var adjacent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var coordinates = [];
    var addInt = +adjacent;

    for (var row = y - addInt; row <= y2 + addInt; row += 1) {
      if (row < 0 || row >= GRID_SIZE) {
        continue;
      }

      for (var column = x - addInt; column <= x2 + addInt; column += 1) {
        if (column < 0 || column >= GRID_SIZE) {
          continue;
        }

        coordinates.push({
          x: column,
          y: row
        });
      }
    }

    return coordinates;
  }

  function isSpaceFree(_ref4) {
    var x = _ref4.x,
        y = _ref4.y,
        x2 = _ref4.x2,
        y2 = _ref4.y2;
    var shipId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var coordinates = getShipSpace({
      x: x,
      y: y,
      x2: x2,
      y2: y2
    });
    return coordinates.every(function (coordinate) {
      var cell = grid[coordinate.y][coordinate.x];
      return cell.status === Status.EMPTY || shipId && cell.status === Status.BUSY && cell.ship.id === shipId;
    });
  }

  function canPlaceShip(_ref5, orientation, shipLength) {
    var x = _ref5.x,
        y = _ref5.y;
    var shipId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.areValidCoordinates)({
      x: x,
      y: y
    }, GRID_SIZE)) {
      return false;
    }

    var _calculateEndCoordina = calculateEndCoordinates({
      x: x,
      y: y
    }, orientation, shipLength),
        x2 = _calculateEndCoordina.x2,
        y2 = _calculateEndCoordina.y2;

    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.areValidCoordinates)({
      x: x2,
      y: y2
    }, GRID_SIZE) || !isSpaceFree({
      x: x,
      y: y,
      x2: x2,
      y2: y2
    }, shipId)) {
      return false;
    }

    return true;
  }

  function placeShip(_ref6, orientation, ship) {
    var x = _ref6.x,
        y = _ref6.y;

    if (!canPlaceShip({
      x: x,
      y: y
    }, orientation, ship.length)) {
      return null;
    }

    var _calculateEndCoordina2 = calculateEndCoordinates({
      x: x,
      y: y
    }, orientation, ship.length),
        x2 = _calculateEndCoordina2.x2,
        y2 = _calculateEndCoordina2.y2;

    var position = 0;

    for (var row = y; row <= y2; row += 1) {
      for (var column = x; column <= x2; column += 1) {
        grid[row][column] = {
          ship: ship,
          x: x,
          y: y,
          x2: x2,
          y2: y2,
          orientation: orientation,
          position: position,
          status: Status.BUSY
        };
        position += 1;
      }
    }

    fleet.add(ship);
    return ship;
  }

  function placeShipsRandom(newFleet) {
    grid = buildGrid();
    fleet.clear();
    newFleet.forEach(function (ship) {
      for (;;) {
        var coordinates = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomCoordinates)(GRID_SIZE);
        var orientation = Object.values(Orientation)[(0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(2)];

        if (placeShip(coordinates, orientation, ship)) {
          break;
        }
      }
    });
  }

  function moveShip(_ref7, _ref8) {
    var x = _ref7.x,
        y = _ref7.y;
    var i = _ref8.i,
        j = _ref8.j;
    var orientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var cellData = getCellData({
      x: x,
      y: y
    });

    if (!cellData || cellData.status === Status.EMPTY) {
      return null;
    }

    if (!canPlaceShip({
      x: i,
      y: j
    }, orientation !== null && orientation !== void 0 ? orientation : cellData.orientation, cellData.ship.length, cellData.ship.id)) {
      return null;
    }

    var coords = getShipSpace(cellData, false);
    coords.forEach(function (coord) {
      grid[coord.y][coord.x] = {
        status: Status.EMPTY
      };
    });
    return placeShip({
      x: i,
      y: j
    }, orientation !== null && orientation !== void 0 ? orientation : cellData.orientation, cellData.ship);
  }

  function rotateShip(_ref9) {
    var x = _ref9.x,
        y = _ref9.y;
    var cellData = getCellData({
      x: x,
      y: y
    });
    var orientation = cellData.orientation === Orientation.HORIZONTAL ? Orientation.VERTICAL : Orientation.HORIZONTAL;
    return moveShip({
      x: x,
      y: y
    }, {
      i: x,
      j: y
    }, orientation);
  }

  function receiveAttack(_ref10) {
    var x = _ref10.x,
        y = _ref10.y;

    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.areValidCoordinates)({
      x: x,
      y: y
    }, GRID_SIZE)) {
      return null;
    }

    var cell = grid[y][x];

    if (cell.status === Status.EMPTY) {
      cell.status = Status.MISS;
      return {
        status: Status.MISS
      };
    }

    if (cell.status === Status.BUSY) {
      var ship = cell.ship;
      ship.hit(cell.position);

      if (ship.isSunk()) {
        var coordinates = getShipSpace(cell);
        var shipCoords = coordinates.filter(function (coord) {
          var shipCell = grid[coord.y][coord.x];

          if (shipCell.status === Status.BUSY || shipCell.status === Status.HIT) {
            shipCell.status = Status.SUNK;
            return true;
          }

          return false;
        });
        var adjacentCoords = coordinates.filter(function (coord) {
          var adjacentCell = grid[coord.y][coord.x];

          if (adjacentCell.status !== Status.SUNK) {
            adjacentCell.status = Status.MISS;
            return true;
          }

          return false;
        });
        return {
          ship: ship,
          status: Status.SUNK,
          shipCoords: shipCoords,
          adjacentCoords: adjacentCoords
        };
      }

      cell.status = Status.HIT;
      return {
        status: Status.HIT
      };
    }

    return null;
  }

  function isFleetSunk() {
    // eslint-disable-next-line no-restricted-syntax
    var _iterator = _createForOfIteratorHelper(fleet),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var ship = _step.value;

        if (!ship.isSunk()) {
          return false;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return true;
  }

  return {
    getGrid: getGrid,
    getCellData: getCellData,
    getFleet: getFleet,
    canPlaceShip: canPlaceShip,
    placeShip: placeShip,
    placeShipsRandom: placeShipsRandom,
    moveShip: moveShip,
    rotateShip: rotateShip,
    receiveAttack: receiveAttack,
    isFleetSunk: isFleetSunk
  };
}

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player),
/* harmony export */   "isBot": () => (/* binding */ isBot)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/js/util.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Player(_ref) {
  var name = _ref.name;
  var score = 0;
  var active = false;

  function getScore() {
    return score;
  }

  function setScore(newScore) {
    score = newScore;
  }

  function incrementScore() {
    score += 1;
  }

  function isActive() {
    return active;
  }

  function setActive(newState) {
    active = newState;
  }

  function toggleActive() {
    active = !active;
  }

  return {
    isBot: false,
    name: name,
    getScore: getScore,
    setScore: setScore,
    incrementScore: incrementScore,
    isActive: isActive,
    setActive: setActive,
    toggleActive: toggleActive
  };
}
function isBot(player) {
  var hitCount = 0;
  var initialHitMove = null;
  var playedMoves = [];
  var possibleMoves = [];

  function noMoreVariations(gridSize) {
    return gridSize * gridSize <= playedMoves.length;
  }

  function alreadyPlayed(move) {
    return playedMoves.find(function (_ref2) {
      var x = _ref2.x,
          y = _ref2.y;
      return x === move.x && y === move.y;
    });
  }

  function getRandomMove(gridSize) {
    var move = {
      x: (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(gridSize),
      y: (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(gridSize)
    };

    if (!alreadyPlayed(move)) {
      return move;
    }

    return getRandomMove(gridSize);
  }

  function getMove(gridSize) {
    if (noMoreVariations(gridSize)) {
      return {
        x: null,
        y: null
      };
    }

    var move;

    if (possibleMoves.length > 0) {
      var _possibleMoves$splice = possibleMoves.splice((0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(possibleMoves.length), 1);

      var _possibleMoves$splice2 = _slicedToArray(_possibleMoves$splice, 1);

      move = _possibleMoves$splice2[0];
    } else {
      move = getRandomMove(gridSize);
    }

    playedMoves.push(move);
    return move;
  }

  function generateUpDirection(move) {
    return {
      x: move.x,
      y: move.y - 1,
      direction: 'up'
    };
  }

  function generateDownDirection(move) {
    return {
      x: move.x,
      y: move.y + 1,
      direction: 'down'
    };
  }

  function generateLeftDirection(move) {
    return {
      x: move.x - 1,
      y: move.y,
      direction: 'left'
    };
  }

  function generateRightDirection(move) {
    return {
      x: move.x + 1,
      y: move.y,
      direction: 'right'
    };
  }

  function generatePossibleMoves(move, gridSize) {
    var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!move.direction) {
      var up = generateUpDirection(move);

      if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.areValidCoordinates)(up, gridSize) && !alreadyPlayed(up)) {
        possibleMoves.push(up);
      }

      var down = generateDownDirection(move);

      if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.areValidCoordinates)(down, gridSize) && !alreadyPlayed(down)) {
        possibleMoves.push(down);
      }

      var left = generateLeftDirection(move);

      if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.areValidCoordinates)(left, gridSize) && !alreadyPlayed(left)) {
        possibleMoves.push(left);
      }

      var right = generateRightDirection(move);

      if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.areValidCoordinates)(right, gridSize) && !alreadyPlayed(right)) {
        possibleMoves.push(right);
      }

      return;
    }

    if (!reset) {
      if (move.direction === 'up') {
        var _up = generateUpDirection(move);

        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.areValidCoordinates)(_up, gridSize) && !alreadyPlayed(_up)) {
          possibleMoves.push(_up);
        }
      } else if (move.direction === 'down') {
        var _down = generateDownDirection(move);

        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.areValidCoordinates)(_down, gridSize) && !alreadyPlayed(_down)) {
          possibleMoves.push(_down);
        }
      } else if (move.direction === 'left') {
        var _left = generateLeftDirection(move);

        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.areValidCoordinates)(_left, gridSize) && !alreadyPlayed(_left)) {
          possibleMoves.push(_left);
        }
      } else if (move.direction === 'right') {
        var _right = generateRightDirection(move);

        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.areValidCoordinates)(_right, gridSize) && !alreadyPlayed(_right)) {
          possibleMoves.push(_right);
        }
      }
    }

    if (possibleMoves.length === 0) {
      if (move.direction === 'up') {
        possibleMoves.push(generateDownDirection(initialHitMove));
      } else if (move.direction === 'down') {
        possibleMoves.push(generateUpDirection(initialHitMove));
      } else if (move.direction === 'left') {
        possibleMoves.push(generateRightDirection(initialHitMove));
      } else if (move.direction === 'right') {
        possibleMoves.push(generateLeftDirection(initialHitMove));
      }
    }
  }

  function lastMoveFeedback(attack, gridSize) {
    var lastMove = playedMoves[playedMoves.length - 1];

    if (attack.status === _gameboard__WEBPACK_IMPORTED_MODULE_1__.Status.MISS) {
      if (hitCount > 1) {
        possibleMoves = [];
        var lastHitMove = playedMoves[playedMoves.length - 2];
        generatePossibleMoves(lastHitMove, gridSize, true);
      }
    } else if (attack.status === _gameboard__WEBPACK_IMPORTED_MODULE_1__.Status.HIT) {
      hitCount += 1;

      if (hitCount === 1) {
        initialHitMove = lastMove;
      } else {
        possibleMoves = [];
      }

      generatePossibleMoves(lastMove, gridSize);
    } else if (attack.status === _gameboard__WEBPACK_IMPORTED_MODULE_1__.Status.SUNK) {
      hitCount = 0;
      possibleMoves = [];
      initialHitMove = null;
      attack.adjacentCoords.forEach(function (coord) {
        if (!alreadyPlayed(coord)) {
          playedMoves.push(coord);
        }
      });
    }
  }

  function clearHistory() {
    playedMoves = [];
    hitCount = 0;
    initialHitMove = null;
    possibleMoves = [];
  }

  return _objectSpread(_objectSpread({}, player), {}, {
    isBot: true,
    getMove: getMove,
    lastMoveFeedback: lastMoveFeedback,
    clearHistory: clearHistory
  });
}

/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

function Ship(_ref) {
  var name = _ref.name,
      length = _ref.length;
  var id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var positions = Array(length).fill(false);

  function getPositions() {
    return positions.slice(0);
  }

  function hit(position) {
    positions[position] = true;
  }

  function isSunk() {
    return positions.every(function (position) {
      return position;
    });
  }

  return {
    id: id,
    name: name,
    length: length,
    getPositions: getPositions,
    hit: hit,
    isSunk: isSunk
  };
}

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areValidCoordinates": () => (/* binding */ areValidCoordinates),
/* harmony export */   "cellNumberToCoordinates": () => (/* binding */ cellNumberToCoordinates),
/* harmony export */   "coordinatesToCellNumber": () => (/* binding */ coordinatesToCellNumber),
/* harmony export */   "getRandomCoordinates": () => (/* binding */ getRandomCoordinates),
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt),
/* harmony export */   "pipe": () => (/* binding */ pipe)
/* harmony export */ });
function pipe() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (initialArgument) {
    return fns.reduce(function (currentArgument, fun) {
      return fun(currentArgument);
    }, initialArgument);
  };
}
function getRandomInt(maxInt) {
  return Math.floor(Math.random() * maxInt);
}
function getRandomCoordinates(gridSize) {
  return {
    x: getRandomInt(gridSize),
    y: getRandomInt(gridSize)
  };
}
function areValidCoordinates(_ref, gridSize) {
  var x = _ref.x,
      y = _ref.y;
  return x >= 0 && x < gridSize && y >= 0 && y < gridSize;
}
function coordinatesToCellNumber(_ref2, gridSize) {
  var x = _ref2.x,
      y = _ref2.y;
  return y * gridSize + x;
}
function cellNumberToCoordinates(cellNumber, gridSize) {
  return {
    // https://stackoverflow.com/a/5494983
    x: cellNumber % gridSize,
    y: Math.floor(cellNumber / gridSize)
  };
}

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

(function (root, factory){
    'use strict';

    var PubSub = {};

    if (root.PubSub) {
        PubSub = root.PubSub;
        console.warn("PubSub already loaded, using existing version");
    } else {
        root.PubSub = PubSub;
        factory(PubSub);
    }
    // CommonJS and Node.js module support
    if (true){
        if (module !== undefined && module.exports) {
            exports = module.exports = PubSub; // Node.js specific `module.exports`
        }
        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
        module.exports = exports = PubSub; // CommonJS
    }
    // AMD support
    /* eslint-disable no-undef */
    else {}

}(( typeof window === 'object' && window ) || this, function (PubSub){
    'use strict';

    var messages = {},
        lastUid = -1,
        ALL_SUBSCRIBING_MSG = '*';

    function hasKeys(obj){
        var key;

        for (key in obj){
            if ( Object.prototype.hasOwnProperty.call(obj, key) ){
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a function that throws the passed exception, for use as argument for setTimeout
     * @alias throwException
     * @function
     * @param { Object } ex An Error object
     */
    function throwException( ex ){
        return function reThrowException(){
            throw ex;
        };
    }

    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
        try {
            subscriber( message, data );
        } catch( ex ){
            setTimeout( throwException( ex ), 0);
        }
    }

    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
        subscriber( message, data );
    }

    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
        var subscribers = messages[matchedMessage],
            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
            s;

        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {
            return;
        }

        for (s in subscribers){
            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){
                callSubscriber( subscribers[s], originalMessage, data );
            }
        }
    }

    function createDeliveryFunction( message, data, immediateExceptions ){
        return function deliverNamespaced(){
            var topic = String( message ),
                position = topic.lastIndexOf( '.' );

            // deliver the message as it is now
            deliverMessage(message, message, data, immediateExceptions);

            // trim the hierarchy and deliver message to each level
            while( position !== -1 ){
                topic = topic.substr( 0, position );
                position = topic.lastIndexOf('.');
                deliverMessage( message, topic, data, immediateExceptions );
            }

            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
        };
    }

    function hasDirectSubscribersFor( message ) {
        var topic = String( message ),
            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));

        return found;
    }

    function messageHasSubscribers( message ){
        var topic = String( message ),
            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),
            position = topic.lastIndexOf( '.' );

        while ( !found && position !== -1 ){
            topic = topic.substr( 0, position );
            position = topic.lastIndexOf( '.' );
            found = hasDirectSubscribersFor(topic);
        }

        return found;
    }

    function publish( message, data, sync, immediateExceptions ){
        message = (typeof message === 'symbol') ? message.toString() : message;

        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
            hasSubscribers = messageHasSubscribers( message );

        if ( !hasSubscribers ){
            return false;
        }

        if ( sync === true ){
            deliver();
        } else {
            setTimeout( deliver, 0 );
        }
        return true;
    }

    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @alias publish
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publish = function( message, data ){
        return publish( message, data, false, PubSub.immediateExceptions );
    };

    /**
     * Publishes the message synchronously, passing the data to it's subscribers
     * @function
     * @alias publishSync
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publishSync = function( message, data ){
        return publish( message, data, true, PubSub.immediateExceptions );
    };

    /**
     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @alias subscribe
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { String }
     */
    PubSub.subscribe = function( message, func ){
        if ( typeof func !== 'function'){
            return false;
        }

        message = (typeof message === 'symbol') ? message.toString() : message;

        // message is not registered yet
        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){
            messages[message] = {};
        }

        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++lastUid);
        messages[message][token] = func;

        // return token for unsubscribing
        return token;
    };

    PubSub.subscribeAll = function( func ){
        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);
    };

    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @alias subscribeOnce
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { PubSub }
     */
    PubSub.subscribeOnce = function( message, func ){
        var token = PubSub.subscribe( message, function(){
            // before func apply, unsubscribe message
            PubSub.unsubscribe( token );
            func.apply( this, arguments );
        });
        return PubSub;
    };

    /**
     * Clears all subscriptions
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
        messages = {};
    };

    /**
     * Clear subscriptions by the topic
     * @function
     * @public
     * @alias clearAllSubscriptions
     * @return { int }
     */
    PubSub.clearSubscriptions = function clearSubscriptions(topic){
        var m;
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                delete messages[m];
            }
        }
    };

    /**
       Count subscriptions by the topic
     * @function
     * @public
     * @alias countSubscriptions
     * @return { Array }
    */
    PubSub.countSubscriptions = function countSubscriptions(topic){
        var m;
        // eslint-disable-next-line no-unused-vars
        var token;
        var count = 0;
        for (m in messages) {
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
                for (token in messages[m]) {
                    count++;
                }
                break;
            }
        }
        return count;
    };


    /**
       Gets subscriptions by the topic
     * @function
     * @public
     * @alias getSubscriptions
    */
    PubSub.getSubscriptions = function getSubscriptions(topic){
        var m;
        var list = [];
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                list.push(m);
            }
        }
        return list;
    };

    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
	 * - When passed a function, removes all subscriptions for that function
     *
	 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @public
     * @alias subscribeOnce
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = PubSub.subscribe('mytopic', myFunc);
     * PubSub.unsubscribe(token);
     * @example // Unsubscribing with a function
     * PubSub.unsubscribe(myFunc);
     * @example // Unsubscribing from a topic
     * PubSub.unsubscribe('mytopic');
     */
    PubSub.unsubscribe = function(value){
        var descendantTopicExists = function(topic) {
                var m;
                for ( m in messages ){
                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){
                        // a descendant of the topic exists:
                        return true;
                    }
                }

                return false;
            },
            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),
            isToken    = !isTopic && typeof value === 'string',
            isFunction = typeof value === 'function',
            result = false,
            m, message, t;

        if (isTopic){
            PubSub.clearSubscriptions(value);
            return;
        }

        for ( m in messages ){
            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){
                message = messages[m];

                if ( isToken && message[value] ){
                    delete message[value];
                    result = value;
                    // tokens are unique, so we can just stop here
                    break;
                }

                if (isFunction) {
                    for ( t in message ){
                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){
                            delete message[t];
                            result = true;
                        }
                    }
                }
            }
        }

        return result;
    };
}));


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/data/ships.json":
/*!*****************************!*\
  !*** ./src/data/ships.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"Aircraft Carrier","length":5,"count":1},{"name":"Battleship","length":4,"count":1},{"name":"Cruiser","length":3,"count":1},{"name":"Destroyer","length":2,"count":2},{"name":"Submarine","length":1,"count":2}]');

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _gameUi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameUi */ "./src/js/gameUi.js");
/* harmony import */ var _gameData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameData */ "./src/js/gameData.js");



document.addEventListener('DOMContentLoaded', function () {
  (0,_gameUi__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_gameData__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBRUE1TSxRQUFRLENBQUNxRCxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtFQUNsRDlELG1EQUFNO0VBQ05oRixxREFBUTtBQUNULENBSEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL0JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvYXRlYml0L2Rpc3QvYXRlYml0LmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvanMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL2pzL2V2ZW50VHlwZXMuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lRGF0YS5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWVVaS5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL2pzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL3NyYy9qcy91dGlsLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvY3NzL2luZGV4LmNzcz80YzIyIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvcHVic3ViLWpzL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIkF0ZUJpdFwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQXRlQml0PXQoKTplLkF0ZUJpdD10KCl9KHRoaXMsKCgpPT4oKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZT17NjMxOihlLHQsbik9PntuLmQodCx7WjooKT0+aX0pO3ZhciByPW4oODEpLGE9bi5uKHIpLG89big2NDUpLGM9bi5uKG8pKCkoYSgpKTtjLnB1c2goW2UuaWQsXCIuY2hhcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1jaGFyLWdhcCwgMTBweCk7XFxufVxcblxcbi5jaGFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1jZWxsLWdhcCwgMnB4KTtcXG59XFxuXFxuLmNoYXIgLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1jZWxsLWdhcCwgMnB4KTtcXG59XFxuXFxuLmNoYXIgLnJvdyAuY2VsbCB7XFxuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplLCAxMHB4KTtcXG4gIGhlaWdodDogdmFyKC0tY2VsbC1zaXplLCAxMHB4KTtcXG59XFxuXFxuLmNoYXIgLmNlbGwubWFya2VkIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0xMDAlLCAwKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNlbGwtYmFja2dyb3VuZCwgYmxhY2spO1xcbn1cXG5cIixcIlwiXSk7Y29uc3QgaT1jfSw2NDU6ZT0+e2UuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD1bXTtyZXR1cm4gdC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcCgoZnVuY3Rpb24odCl7dmFyIG49XCJcIixyPXZvaWQgMCE9PXRbNV07cmV0dXJuIHRbNF0mJihuKz1cIkBzdXBwb3J0cyAoXCIuY29uY2F0KHRbNF0sXCIpIHtcIikpLHRbMl0mJihuKz1cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpKSxyJiYobis9XCJAbGF5ZXJcIi5jb25jYXQodFs1XS5sZW5ndGg+MD9cIiBcIi5jb25jYXQodFs1XSk6XCJcIixcIiB7XCIpKSxuKz1lKHQpLHImJihuKz1cIn1cIiksdFsyXSYmKG4rPVwifVwiKSx0WzRdJiYobis9XCJ9XCIpLG59KSkuam9pbihcIlwiKX0sdC5pPWZ1bmN0aW9uKGUsbixyLGEsbyl7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPVtbbnVsbCxlLHZvaWQgMF1dKTt2YXIgYz17fTtpZihyKWZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXt2YXIgcz10aGlzW2ldWzBdO251bGwhPXMmJihjW3NdPSEwKX1mb3IodmFyIGw9MDtsPGUubGVuZ3RoO2wrKyl7dmFyIHU9W10uY29uY2F0KGVbbF0pO3ImJmNbdVswXV18fCh2b2lkIDAhPT1vJiYodm9pZCAwPT09dVs1XXx8KHVbMV09XCJAbGF5ZXJcIi5jb25jYXQodVs1XS5sZW5ndGg+MD9cIiBcIi5jb25jYXQodVs1XSk6XCJcIixcIiB7XCIpLmNvbmNhdCh1WzFdLFwifVwiKSksdVs1XT1vKSxuJiYodVsyXT8odVsxXT1cIkBtZWRpYSBcIi5jb25jYXQodVsyXSxcIiB7XCIpLmNvbmNhdCh1WzFdLFwifVwiKSx1WzJdPW4pOnVbMl09biksYSYmKHVbNF0/KHVbMV09XCJAc3VwcG9ydHMgKFwiLmNvbmNhdCh1WzRdLFwiKSB7XCIpLmNvbmNhdCh1WzFdLFwifVwiKSx1WzRdPWEpOnVbNF09XCJcIi5jb25jYXQoYSkpLHQucHVzaCh1KSl9fSx0fX0sODE6ZT0+e2UuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZVsxXX19LDM3OTplPT57dmFyIHQ9W107ZnVuY3Rpb24gbihlKXtmb3IodmFyIG49LTEscj0wO3I8dC5sZW5ndGg7cisrKWlmKHRbcl0uaWRlbnRpZmllcj09PWUpe249cjticmVha31yZXR1cm4gbn1mdW5jdGlvbiByKGUscil7Zm9yKHZhciBvPXt9LGM9W10saT0wO2k8ZS5sZW5ndGg7aSsrKXt2YXIgcz1lW2ldLGw9ci5iYXNlP3NbMF0rci5iYXNlOnNbMF0sdT1vW2xdfHwwLHA9XCJcIi5jb25jYXQobCxcIiBcIikuY29uY2F0KHUpO29bbF09dSsxO3ZhciBkPW4ocCksZj17Y3NzOnNbMV0sbWVkaWE6c1syXSxzb3VyY2VNYXA6c1szXSxzdXBwb3J0czpzWzRdLGxheWVyOnNbNV19O2lmKC0xIT09ZCl0W2RdLnJlZmVyZW5jZXMrKyx0W2RdLnVwZGF0ZXIoZik7ZWxzZXt2YXIgdj1hKGYscik7ci5ieUluZGV4PWksdC5zcGxpY2UoaSwwLHtpZGVudGlmaWVyOnAsdXBkYXRlcjp2LHJlZmVyZW5jZXM6MX0pfWMucHVzaChwKX1yZXR1cm4gY31mdW5jdGlvbiBhKGUsdCl7dmFyIG49dC5kb21BUEkodCk7cmV0dXJuIG4udXBkYXRlKGUpLGZ1bmN0aW9uKHQpe2lmKHQpe2lmKHQuY3NzPT09ZS5jc3MmJnQubWVkaWE9PT1lLm1lZGlhJiZ0LnNvdXJjZU1hcD09PWUuc291cmNlTWFwJiZ0LnN1cHBvcnRzPT09ZS5zdXBwb3J0cyYmdC5sYXllcj09PWUubGF5ZXIpcmV0dXJuO24udXBkYXRlKGU9dCl9ZWxzZSBuLnJlbW92ZSgpfX1lLmV4cG9ydHM9ZnVuY3Rpb24oZSxhKXt2YXIgbz1yKGU9ZXx8W10sYT1hfHx7fSk7cmV0dXJuIGZ1bmN0aW9uKGUpe2U9ZXx8W107Zm9yKHZhciBjPTA7YzxvLmxlbmd0aDtjKyspe3ZhciBpPW4ob1tjXSk7dFtpXS5yZWZlcmVuY2VzLS19Zm9yKHZhciBzPXIoZSxhKSxsPTA7bDxvLmxlbmd0aDtsKyspe3ZhciB1PW4ob1tsXSk7MD09PXRbdV0ucmVmZXJlbmNlcyYmKHRbdV0udXBkYXRlcigpLHQuc3BsaWNlKHUsMSkpfW89c319fSw1Njk6ZT0+e3ZhciB0PXt9O2UuZXhwb3J0cz1mdW5jdGlvbihlLG4pe3ZhciByPWZ1bmN0aW9uKGUpe2lmKHZvaWQgMD09PXRbZV0pe3ZhciBuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSk7aWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZuIGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KXRyeXtuPW4uY29udGVudERvY3VtZW50LmhlYWR9Y2F0Y2goZSl7bj1udWxsfXRbZV09bn1yZXR1cm4gdFtlXX0oZSk7aWYoIXIpdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtyLmFwcGVuZENoaWxkKG4pfX0sMjE2OmU9PntlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiBlLnNldEF0dHJpYnV0ZXModCxlLmF0dHJpYnV0ZXMpLGUuaW5zZXJ0KHQsZS5vcHRpb25zKSx0fX0sNTY1OihlLHQsbik9PntlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9bi5uYzt0JiZlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsdCl9fSw3OTU6ZT0+e2UuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD1lLmluc2VydFN0eWxlRWxlbWVudChlKTtyZXR1cm57dXBkYXRlOmZ1bmN0aW9uKG4peyFmdW5jdGlvbihlLHQsbil7dmFyIHI9XCJcIjtuLnN1cHBvcnRzJiYocis9XCJAc3VwcG9ydHMgKFwiLmNvbmNhdChuLnN1cHBvcnRzLFwiKSB7XCIpKSxuLm1lZGlhJiYocis9XCJAbWVkaWEgXCIuY29uY2F0KG4ubWVkaWEsXCIge1wiKSk7dmFyIGE9dm9pZCAwIT09bi5sYXllcjthJiYocis9XCJAbGF5ZXJcIi5jb25jYXQobi5sYXllci5sZW5ndGg+MD9cIiBcIi5jb25jYXQobi5sYXllcik6XCJcIixcIiB7XCIpKSxyKz1uLmNzcyxhJiYocis9XCJ9XCIpLG4ubWVkaWEmJihyKz1cIn1cIiksbi5zdXBwb3J0cyYmKHIrPVwifVwiKTt2YXIgbz1uLnNvdXJjZU1hcDtvJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYnRvYSYmKHIrPVwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobykpKSksXCIgKi9cIikpLHQuc3R5bGVUYWdUcmFuc2Zvcm0ocixlLHQub3B0aW9ucyl9KHQsZSxuKX0scmVtb3ZlOmZ1bmN0aW9uKCl7IWZ1bmN0aW9uKGUpe2lmKG51bGw9PT1lLnBhcmVudE5vZGUpcmV0dXJuITE7ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSh0KX19fX0sNTg5OmU9PntlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtpZih0LnN0eWxlU2hlZXQpdC5zdHlsZVNoZWV0LmNzc1RleHQ9ZTtlbHNle2Zvcig7dC5maXJzdENoaWxkOyl0LnJlbW92ZUNoaWxkKHQuZmlyc3RDaGlsZCk7dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlKSl9fX19LHQ9e307ZnVuY3Rpb24gbihyKXt2YXIgYT10W3JdO2lmKHZvaWQgMCE9PWEpcmV0dXJuIGEuZXhwb3J0czt2YXIgbz10W3JdPXtpZDpyLGV4cG9ydHM6e319O3JldHVybiBlW3JdKG8sby5leHBvcnRzLG4pLG8uZXhwb3J0c31uLm49ZT0+e3ZhciB0PWUmJmUuX19lc01vZHVsZT8oKT0+ZS5kZWZhdWx0OigpPT5lO3JldHVybiBuLmQodCx7YTp0fSksdH0sbi5kPShlLHQpPT57Zm9yKHZhciByIGluIHQpbi5vKHQscikmJiFuLm8oZSxyKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUscix7ZW51bWVyYWJsZTohMCxnZXQ6dFtyXX0pfSxuLm89KGUsdCk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpLG4ucj1lPT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi5uYz12b2lkIDA7dmFyIHI9e307cmV0dXJuKCgpPT57bi5yKHIpLG4uZChyLHthbmltYXRlOigpPT5nfSk7dmFyIGU9bigzNzkpLHQ9bi5uKGUpLGE9big3OTUpLG89bi5uKGEpLGM9big1NjkpLGk9bi5uKGMpLHM9big1NjUpLGw9bi5uKHMpLHU9bigyMTYpLHA9bi5uKHUpLGQ9big1ODkpLGY9bi5uKGQpLHY9big2MzEpLG09e307bS5zdHlsZVRhZ1RyYW5zZm9ybT1mKCksbS5zZXRBdHRyaWJ1dGVzPWwoKSxtLmluc2VydD1pKCkuYmluZChudWxsLFwiaGVhZFwiKSxtLmRvbUFQST1vKCksbS5pbnNlcnRTdHlsZUVsZW1lbnQ9cCgpLHQoKSh2LlosbSksdi5aJiZ2LloubG9jYWxzJiZ2LloubG9jYWxzO2NvbnN0IGg9e0E6W1swLDEsMSwwXSxbMSwwLDAsMV0sWzEsMSwxLDFdLFsxLDAsMCwxXSxbMSwwLDAsMV0sWzEsMCwwLDFdXSxCOltbMSwxLDEsMF0sWzEsMCwwLDFdLFsxLDEsMSwwXSxbMSwwLDAsMV0sWzEsMCwwLDFdLFsxLDEsMSwxXV0sQzpbWzEsMSwxXSxbMSwwLDBdLFsxLDAsMF0sWzEsMCwwXSxbMSwwLDBdLFsxLDEsMV1dLEQ6W1sxLDEsMSwwXSxbMSwwLDAsMV0sWzEsMCwwLDFdLFsxLDAsMCwxXSxbMSwwLDAsMV0sWzEsMSwxLDBdXSxFOltbMSwxLDFdLFsxLDAsMF0sWzEsMSwwXSxbMSwwLDBdLFsxLDAsMF0sWzEsMSwxXV0sRjpbWzEsMSwxXSxbMSwwLDBdLFsxLDEsMF0sWzEsMCwwXSxbMSwwLDBdLFsxLDAsMF1dLEc6W1swLDEsMSwxXSxbMSwwLDAsMV0sWzEsMCwwLDBdLFsxLDAsMSwxXSxbMSwwLDAsMV0sWzAsMSwxLDBdXSxIOltbMSwwLDAsMV0sWzEsMCwwLDFdLFsxLDEsMSwxXSxbMSwwLDAsMV0sWzEsMCwwLDFdLFsxLDAsMCwxXV0sSTpbWzEsMSwxXSxbMCwxLDBdLFswLDEsMF0sWzAsMSwwXSxbMCwxLDBdLFsxLDEsMV1dLEo6W1swLDAsMV0sWzAsMCwxXSxbMCwwLDFdLFswLDAsMV0sWzEsMCwxXSxbMSwxLDFdXSxLOltbMSwwLDAsMV0sWzEsMCwxLDBdLFsxLDEsMCwwXSxbMSwwLDEsMF0sWzEsMCwwLDFdLFsxLDAsMCwxXV0sTDpbWzEsMCwwXSxbMSwwLDBdLFsxLDAsMF0sWzEsMCwwXSxbMSwwLDBdLFsxLDEsMV1dLE06W1sxLDAsMCwwLDFdLFsxLDEsMCwxLDFdLFsxLDAsMSwwLDFdLFsxLDAsMCwwLDFdLFsxLDAsMCwwLDFdLFsxLDAsMCwwLDFdXSxOOltbMSwwLDAsMV0sWzEsMCwwLDFdLFsxLDAsMCwxXSxbMSwxLDAsMV0sWzEsMCwxLDFdLFsxLDAsMCwxXV0sTzpbWzAsMSwxLDBdLFsxLDAsMCwxXSxbMSwwLDAsMV0sWzEsMCwwLDFdLFsxLDAsMCwxXSxbMCwxLDEsMF1dLFA6W1swLDEsMSwwXSxbMSwwLDAsMV0sWzEsMCwwLDFdLFsxLDEsMSwwXSxbMSwwLDAsMF0sWzEsMCwwLDBdXSxROltbMCwxLDEsMCwwXSxbMSwwLDAsMSwwXSxbMSwwLDAsMSwwXSxbMSwwLDAsMSwwXSxbMSwwLDEsMSwwXSxbMCwxLDEsMCwxXV0sUjpbWzAsMSwxLDBdLFsxLDAsMCwxXSxbMSwwLDAsMV0sWzEsMSwxLDBdLFsxLDAsMSwwXSxbMSwwLDAsMV1dLFM6W1swLDEsMV0sWzEsMCwwXSxbMSwxLDFdLFswLDAsMV0sWzAsMCwxXSxbMSwxLDFdXSxUOltbMSwxLDEsMSwxXSxbMCwwLDEsMCwwXSxbMCwwLDEsMCwwXSxbMCwwLDEsMCwwXSxbMCwwLDEsMCwwXSxbMCwwLDEsMCwwXV0sVTpbWzEsMCwwLDFdLFsxLDAsMCwxXSxbMSwwLDAsMV0sWzEsMCwwLDFdLFsxLDAsMCwxXSxbMCwxLDEsMF1dLFY6W1sxLDAsMCwwLDFdLFsxLDAsMCwwLDFdLFsxLDAsMCwwLDFdLFsxLDAsMCwwLDFdLFswLDEsMCwxLDBdLFswLDAsMSwwLDBdXSxXOltbMSwwLDAsMCwxXSxbMSwwLDAsMCwxXSxbMSwwLDAsMCwxXSxbMSwwLDEsMCwxXSxbMSwxLDAsMSwxXSxbMSwwLDAsMCwxXV0sWDpbWzEsMCwwLDAsMV0sWzAsMSwwLDEsMV0sWzAsMCwxLDAsMV0sWzAsMCwxLDAsMV0sWzAsMSwwLDEsMV0sWzEsMCwwLDAsMV1dLFk6W1sxLDAsMCwwLDFdLFswLDEsMCwxLDBdLFswLDAsMSwwLDBdLFswLDAsMSwwLDBdLFswLDAsMSwwLDBdLFswLDAsMSwwLDBdXSxaOltbMSwxLDEsMSwxXSxbMCwwLDAsMSwwXSxbMCwwLDEsMCwwXSxbMCwxLDAsMCwwXSxbMSwwLDAsMCwwXSxbMSwxLDEsMSwxXV0sXCIhXCI6W1sxXSxbMV0sWzFdLFsxXSxbMF0sWzFdXSxcIj9cIjpbWzEsMSwxXSxbMCwwLDFdLFsxLDEsMV0sWzEsMCwwXSxbMCwwLDBdLFsxLDAsMF1dLFwiLVwiOltbMCwwLDBdLFswLDAsMF0sWzEsMSwxXSxbMSwxLDFdLFswLDAsMF0sWzAsMCwwXV0sXzpbWzAsMCwwXSxbMCwwLDBdLFswLDAsMF0sWzAsMCwwXSxbMSwxLDFdLFsxLDEsMV1dLDA6W1swLDEsMSwwXSxbMSwwLDAsMV0sWzEsMCwwLDFdLFsxLDAsMCwxXSxbMSwwLDAsMV0sWzAsMSwxLDBdXSwxOltbMCwxXSxbMSwxXSxbMCwxXSxbMCwxXSxbMCwxXSxbMCwxXV0sMjpbWzEsMSwxXSxbMCwwLDFdLFswLDEsMF0sWzEsMCwwXSxbMSwwLDBdLFsxLDEsMV1dLDM6W1sxLDEsMV0sWzAsMCwxXSxbMCwxLDFdLFswLDAsMV0sWzAsMCwxXSxbMSwxLDFdXSw0OltbMSwwLDFdLFsxLDAsMV0sWzEsMSwxXSxbMCwwLDFdLFswLDAsMV0sWzAsMCwxXV0sNTpbWzEsMSwxXSxbMSwwLDBdLFsxLDEsMV0sWzAsMCwxXSxbMCwwLDFdLFsxLDEsMV1dLDY6W1swLDAsMV0sWzAsMSwwXSxbMSwwLDBdLFsxLDEsMV0sWzEsMCwxXSxbMSwxLDFdXSw3OltbMSwxLDFdLFswLDAsMV0sWzAsMSwwXSxbMCwxLDBdLFswLDEsMF0sWzAsMSwwXV0sODpbWzEsMSwxXSxbMSwwLDFdLFswLDEsMF0sWzEsMCwxXSxbMSwwLDFdLFsxLDEsMV1dLDk6W1sxLDEsMV0sWzEsMCwxXSxbMSwxLDFdLFswLDAsMV0sWzAsMSwwXSxbMSwwLDBdXSxcIiBcIjpbWzAsMCwwXSxbMCwwLDBdLFswLDAsMF0sWzAsMCwwXSxbMCwwLDBdLFswLDAsMF1dfTtmdW5jdGlvbiB5KGUpe2NvbnN0IHQ9aFtlLmRhdGFzZXQuY2hhci50b1VwcGVyQ2FzZSgpXTtpZighdClyZXR1cm4gbnVsbDtjb25zdCBuPVtdO3JldHVybiB0LmZvckVhY2goKHQ9Pntjb25zdCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ci5jbGFzc0xpc3QuYWRkKFwicm93XCIpLHQuZm9yRWFjaCgoZT0+e2NvbnN0IHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKSxlJiYodC5jbGFzc0xpc3QuYWRkKFwibWFya2VkXCIpLG4ucHVzaCh0KSksci5hcHBlbmRDaGlsZCh0KX0pKSxlLmFwcGVuZENoaWxkKHIpfSkpLG59ZnVuY3Rpb24gZyhlLHQpe0FycmF5LmZyb20oZSkubWFwKHkpLmZvckVhY2goKGU9PnshYXN5bmMgZnVuY3Rpb24oZSxbdCxuXSl7Zm9yKGNvbnN0IHIgb2YgZSlhd2FpdCByLmFuaW1hdGUodCxuKS5maW5pc2hlZH0oZSx0KX0pKX19KSgpLHJ9KSgpKSk7IiwiZXhwb3J0IGNvbnN0IERFRkFVTFRfVElNSU5HID0ge1xuICBkdXJhdGlvbjogMjUwLFxufTtcblxuZXhwb3J0IGNvbnN0IFBPUF9JTiA9IFtcbiAgeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSxcbiAgeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxLjUpJyB9LFxuICB7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFpPT01fSU4gPSBbXG4gIHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0sXG4gIHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgWk9PTV9PVVQgPSBbXG4gIHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0sXG4gIHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgU0xJREVfT1VUX0xFRlQgPSBbXG4gIHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSxcbiAgeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBTTElERV9PVVRfUklHSFQgPSBbXG4gIHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSxcbiAgeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFNMSURFX0lOX1JJR0hUID0gW1xuICB7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0sXG4gIHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBTTElERV9JTl9MRUZUID0gW1xuICB7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJyB9LFxuICB7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH0sXG5dO1xuIiwiZXhwb3J0IGNvbnN0IFNUQVJUX0dBTUUgPSBTeW1ib2woJ1NUQVJUX0dBTUUnKTtcblxuLy8gU0VUVVAgUEhBU0UgRVZFTlRTXG5leHBvcnQgY29uc3QgRElTUExBWV9TRVRVUF9QSEFTRSA9IFN5bWJvbCgnRElTUExBWV9TRVRVUF9QSEFTRScpO1xuZXhwb3J0IGNvbnN0IENIRUNLX0NPT1JESU5BVEVTID0gU3ltYm9sKCdDSEVDS19DT09SRElOQVRFUycpO1xuZXhwb3J0IGNvbnN0IENPT1JESU5BVEVTX0ZSRUUgPSBTeW1ib2woJ0NPT1JESU5BVEVTX0ZSRUUnKTtcbmV4cG9ydCBjb25zdCBQTEFDRV9TSElQID0gU3ltYm9sKCdQTEFDRV9TSElQJyk7XG5leHBvcnQgY29uc3QgUExBQ0VNRU5UX1ZBTElEID0gU3ltYm9sKCdQTEFDRU1FTlRfVkFMSUQnKTtcbmV4cG9ydCBjb25zdCBQTEFDRV9TSElQU19SQU5ET00gPSBTeW1ib2woJ1BMQUNFX1NISVBTX1JBTkRPTScpO1xuZXhwb3J0IGNvbnN0IFNFVFVQX1BIQVNFX05FWFQgPSBTeW1ib2woJ1NFVFVQX1BIQVNFX05FWFQnKTtcbmV4cG9ydCBjb25zdCBTRVRVUF9QSEFTRV9JTkNPTVBMRVRFID0gU3ltYm9sKCdTRVRVUF9QSEFTRV9JTkNPTVBMRVRFJyk7XG5cbi8vIEFUVEFDSyBQSEFTRSBFVkVOVFNcbmV4cG9ydCBjb25zdCBESVNQTEFZX0FUVEFDS19QSEFTRSA9IFN5bWJvbCgnRElTUExBWV9BVFRBQ0tfUEhBU0UnKTtcbmV4cG9ydCBjb25zdCBBVFRBQ0sgPSBTeW1ib2woJ0FUVEFDSycpO1xuZXhwb3J0IGNvbnN0IE1JU1MgPSBTeW1ib2woJ01JU1MnKTtcbmV4cG9ydCBjb25zdCBISVQgPSBTeW1ib2woJ0hJVCcpO1xuZXhwb3J0IGNvbnN0IFNVTksgPSBTeW1ib2woJ1NVTksnKTtcbmV4cG9ydCBjb25zdCBGTEVFVF9HT05FID0gU3ltYm9sKCdGTEVFVF9HT05FJyk7XG5leHBvcnQgY29uc3QgTkVXX1JPVU5EID0gU3ltYm9sKCdORVdfUk9VTkQnKTtcbmV4cG9ydCBjb25zdCBSRVNFVF9HQU1FID0gU3ltYm9sKCdSRVNFVF9HQU1FJyk7XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5pbXBvcnQgR2FtZWJvYXJkLCB7IEdSSURfU0laRSwgU3RhdHVzIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCBQbGF5ZXIsIHsgaXNCb3QgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBwaXBlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBTSElQU19EQVRBIGZyb20gJy4uL2RhdGEvc2hpcHMuanNvbic7XG5pbXBvcnQge1xuICBTVEFSVF9HQU1FLFxuICBESVNQTEFZX1NFVFVQX1BIQVNFLFxuICBDSEVDS19DT09SRElOQVRFUyxcbiAgQ09PUkRJTkFURVNfRlJFRSxcbiAgUExBQ0VfU0hJUCxcbiAgUExBQ0VNRU5UX1ZBTElELFxuICBQTEFDRV9TSElQU19SQU5ET00sXG4gIFNFVFVQX1BIQVNFX05FWFQsXG4gIFNFVFVQX1BIQVNFX0lOQ09NUExFVEUsXG4gIERJU1BMQVlfQVRUQUNLX1BIQVNFLFxuICBBVFRBQ0ssXG4gIE1JU1MsXG4gIEhJVCxcbiAgU1VOSyxcbiAgRkxFRVRfR09ORSxcbiAgTkVXX1JPVU5ELFxuICBSRVNFVF9HQU1FLFxufSBmcm9tICcuL2V2ZW50VHlwZXMnO1xuXG5leHBvcnQgY29uc3QgR2FtZU1vZGUgPSBPYmplY3QuZnJlZXplKHtcbiAgVlNfRlJJRU5EOiAwLFxuICBWU19CT1Q6IDEsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZURhdGEoKSB7XG4gIGxldCBzdGF0ZSA9IHtcbiAgICBnYW1lTW9kZTogbnVsbCxcbiAgICBwbGF5ZXJPbmU6IG51bGwsXG4gICAgcGxheWVyVHdvOiBudWxsLFxuICAgIGF2YWlsYWJsZUZsZWV0OiBudWxsLFxuICAgIGN1cnJlbnRTZXR1cFBsYXllcjogbnVsbCxcbiAgICBjdXJyZW50QXR0YWNrZXI6IG51bGwsXG4gICAgY3VycmVudE9wcG9uZW50OiBudWxsLFxuICB9O1xuXG4gIFB1YlN1Yi5zdWJzY3JpYmUoU1RBUlRfR0FNRSwgKF8sIGRhdGEpID0+IHtcbiAgICBzdGF0ZS5nYW1lTW9kZSA9IGRhdGEuZ2FtZU1vZGU7XG4gICAgc3RhdGUucGxheWVyT25lID0ge1xuICAgICAgLi4uUGxheWVyKHsgbmFtZTogZGF0YS5wbGF5ZXJPbmVOYW1lIH0pLFxuICAgICAgZ2FtZWJvYXJkOiBHYW1lYm9hcmQoKSxcbiAgICB9O1xuXG4gICAgbGV0IHBsYXllclR3byA9IG51bGw7XG4gICAgaWYgKHN0YXRlLmdhbWVNb2RlID09PSBHYW1lTW9kZS5WU19CT1QpIHtcbiAgICAgIHBsYXllclR3byA9IHBpcGUoUGxheWVyLCBpc0JvdCkoeyBuYW1lOiBkYXRhLnBsYXllclR3b05hbWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllclR3byA9IFBsYXllcih7IG5hbWU6IGRhdGEucGxheWVyVHdvTmFtZSB9KTtcbiAgICB9XG4gICAgc3RhdGUucGxheWVyVHdvID0ge1xuICAgICAgLi4ucGxheWVyVHdvLFxuICAgICAgZ2FtZWJvYXJkOiBHYW1lYm9hcmQoKSxcbiAgICB9O1xuXG4gICAgc3RhdGUuYXZhaWxhYmxlRmxlZXQgPSBnZW5lcmF0ZUZsZWV0KCk7XG4gICAgc3RhdGUuY3VycmVudFNldHVwUGxheWVyID0gc3RhdGUucGxheWVyT25lO1xuXG4gICAgUHViU3ViLnB1Ymxpc2goRElTUExBWV9TRVRVUF9QSEFTRSwge1xuICAgICAgcGxheWVyTmFtZTogc3RhdGUuY3VycmVudFNldHVwUGxheWVyLm5hbWUsXG4gICAgICBnYW1lYm9hcmQ6IHN0YXRlLmN1cnJlbnRTZXR1cFBsYXllci5nYW1lYm9hcmQuZ2V0R3JpZCgpLFxuICAgICAgZmxlZXQ6IHN0YXRlLmF2YWlsYWJsZUZsZWV0LFxuICAgIH0pO1xuICB9KTtcblxuICBQdWJTdWIuc3Vic2NyaWJlKENIRUNLX0NPT1JESU5BVEVTLCAoXywgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBnZXRTaGlwKGRhdGEuc2hpcElkKTtcbiAgICBpZiAoIXNoaXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2FuUGxhY2VTaGlwID0gc3RhdGUuY3VycmVudFNldHVwUGxheWVyLmdhbWVib2FyZC5jYW5QbGFjZVNoaXAoXG4gICAgICBkYXRhLnN0YXJ0Q29vcmRzLFxuICAgICAgZGF0YS5zaGlwT3JpZW50YXRpb24sXG4gICAgICBzaGlwLmxlbmd0aCxcbiAgICAgIHNoaXAuaWRcbiAgICApO1xuXG4gICAgaWYgKGNhblBsYWNlU2hpcCkge1xuICAgICAgUHViU3ViLnB1Ymxpc2goQ09PUkRJTkFURVNfRlJFRSwge1xuICAgICAgICBzdGFydENvb3JkczogZGF0YS5zdGFydENvb3JkcyxcbiAgICAgICAgc2hpcE9yaWVudGF0aW9uOiBkYXRhLnNoaXBPcmllbnRhdGlvbixcbiAgICAgICAgc2hpcExlbmd0aDogc2hpcC5sZW5ndGgsXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIFB1YlN1Yi5zdWJzY3JpYmUoUExBQ0VfU0hJUCwgKF8sIGRhdGEpID0+IHtcbiAgICBjb25zdCBzaGlwID0gZ2V0U2hpcChkYXRhLnNoaXBJZCk7XG4gICAgaWYgKCFzaGlwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBsYWNlZFNoaXAgPSBudWxsO1xuICAgIGlmIChkYXRhLm9sZFN0YXJ0Q29vcmRzKSB7XG4gICAgICBwbGFjZWRTaGlwID0gc3RhdGUuY3VycmVudFNldHVwUGxheWVyLmdhbWVib2FyZC5tb3ZlU2hpcChcbiAgICAgICAgZGF0YS5vbGRTdGFydENvb3JkcyxcbiAgICAgICAgeyBpOiBkYXRhLnN0YXJ0Q29vcmRzLngsIGo6IGRhdGEuc3RhcnRDb29yZHMueSB9LFxuICAgICAgICBkYXRhLnNoaXBPcmllbnRhdGlvblxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxhY2VkU2hpcCA9IHN0YXRlLmN1cnJlbnRTZXR1cFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICBkYXRhLnN0YXJ0Q29vcmRzLFxuICAgICAgICBkYXRhLnNoaXBPcmllbnRhdGlvbixcbiAgICAgICAgc2hpcFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VkU2hpcCkge1xuICAgICAgUHViU3ViLnB1Ymxpc2goUExBQ0VNRU5UX1ZBTElELCB7XG4gICAgICAgIHN0YXJ0Q29vcmRzOiBkYXRhLnN0YXJ0Q29vcmRzLFxuICAgICAgICBzaGlwT3JpZW50YXRpb246IGRhdGEuc2hpcE9yaWVudGF0aW9uLFxuICAgICAgICBzaGlwTGVuZ3RoOiBzaGlwLmxlbmd0aCxcbiAgICAgICAgc2hpcElkOiBzaGlwLmlkLFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBQdWJTdWIuc3Vic2NyaWJlKFBMQUNFX1NISVBTX1JBTkRPTSwgKCkgPT4ge1xuICAgIHN0YXRlLmN1cnJlbnRTZXR1cFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbShzdGF0ZS5hdmFpbGFibGVGbGVldCk7XG4gICAgUHViU3ViLnB1Ymxpc2goRElTUExBWV9TRVRVUF9QSEFTRSwge1xuICAgICAgcGxheWVyTmFtZTogc3RhdGUuY3VycmVudFNldHVwUGxheWVyLm5hbWUsXG4gICAgICBnYW1lYm9hcmQ6IHN0YXRlLmN1cnJlbnRTZXR1cFBsYXllci5nYW1lYm9hcmQuZ2V0R3JpZCgpLFxuICAgICAgZmxlZXQ6IHN0YXRlLmF2YWlsYWJsZUZsZWV0LFxuICAgICAgcmFuZG9tOiB0cnVlLFxuICAgIH0pO1xuICB9KTtcblxuICBQdWJTdWIuc3Vic2NyaWJlKFNFVFVQX1BIQVNFX05FWFQsICgpID0+IHtcbiAgICBpZiAoXG4gICAgICBzdGF0ZS5jdXJyZW50U2V0dXBQbGF5ZXIuZ2FtZWJvYXJkLmdldEZsZWV0KCkubGVuZ3RoICE9PVxuICAgICAgc3RhdGUuYXZhaWxhYmxlRmxlZXQubGVuZ3RoXG4gICAgKSB7XG4gICAgICBQdWJTdWIucHVibGlzaChTRVRVUF9QSEFTRV9JTkNPTVBMRVRFKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdGF0ZS5hdmFpbGFibGVGbGVldCA9IGdlbmVyYXRlRmxlZXQoKTtcbiAgICBpZiAoc3RhdGUuY3VycmVudFNldHVwUGxheWVyID09PSBzdGF0ZS5wbGF5ZXJPbmUpIHtcbiAgICAgIGlmIChzdGF0ZS5nYW1lTW9kZSA9PT0gR2FtZU1vZGUuVlNfRlJJRU5EKSB7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRTZXR1cFBsYXllciA9IHN0YXRlLnBsYXllclR3bztcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goRElTUExBWV9TRVRVUF9QSEFTRSwge1xuICAgICAgICAgIHBsYXllck5hbWU6IHN0YXRlLmN1cnJlbnRTZXR1cFBsYXllci5uYW1lLFxuICAgICAgICAgIGdhbWVib2FyZDogc3RhdGUuY3VycmVudFNldHVwUGxheWVyLmdhbWVib2FyZC5nZXRHcmlkKCksXG4gICAgICAgICAgZmxlZXQ6IHN0YXRlLmF2YWlsYWJsZUZsZWV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gSW4gdGhpcyBjYXNlIHBsYXllclR3byBpcyBhIGJvdFxuICAgICAgc3RhdGUuY3VycmVudFNldHVwUGxheWVyID0gbnVsbDtcbiAgICAgIHN0YXRlLnBsYXllclR3by5nYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbShzdGF0ZS5hdmFpbGFibGVGbGVldCk7XG4gICAgfVxuXG4gICAgc3dhcFJvbGVzKCk7XG5cbiAgICBQdWJTdWIucHVibGlzaChESVNQTEFZX0FUVEFDS19QSEFTRSwgZ2VuZXJhdGVBdHRhY2tQaGFzZURhdGEoKSk7XG5cbiAgICBpZiAoc3RhdGUuY3VycmVudEF0dGFja2VyLmlzQm90KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbW92ZSA9IHN0YXRlLmN1cnJlbnRBdHRhY2tlci5nZXRNb3ZlKEdSSURfU0laRSk7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKEFUVEFDSywgeyBjb29yZHM6IG1vdmUgfSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH0pO1xuXG4gIFB1YlN1Yi5zdWJzY3JpYmUoQVRUQUNLLCAoXywgZGF0YSkgPT4ge1xuICAgIGNvbnN0IGF0dGFjayA9IHN0YXRlLmN1cnJlbnRPcHBvbmVudC5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhkYXRhLmNvb3Jkcyk7XG4gICAgaWYgKGF0dGFjayA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5jdXJyZW50QXR0YWNrZXIuaXNCb3QpIHtcbiAgICAgIHN0YXRlLmN1cnJlbnRBdHRhY2tlci5sYXN0TW92ZUZlZWRiYWNrKGF0dGFjaywgR1JJRF9TSVpFKTtcbiAgICB9XG5cbiAgICBpZiAoYXR0YWNrLnN0YXR1cyA9PT0gU3RhdHVzLk1JU1MpIHtcbiAgICAgIHN3YXBSb2xlcygpO1xuICAgICAgUHViU3ViLnB1Ymxpc2goTUlTUywge1xuICAgICAgICBjb29yZHM6IGRhdGEuY29vcmRzLFxuICAgICAgICAuLi5nZW5lcmF0ZUF0dGFja1BoYXNlRGF0YSgpLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhdHRhY2suc3RhdHVzID09PSBTdGF0dXMuSElUKSB7XG4gICAgICBQdWJTdWIucHVibGlzaChISVQsIHsgY29vcmRzOiBkYXRhLmNvb3JkcyB9KTtcbiAgICB9IGVsc2UgaWYgKGF0dGFjay5zdGF0dXMgPT09IFN0YXR1cy5TVU5LKSB7XG4gICAgICBjb25zdCBhdHRhY2tlck5hbWUgPSBzdGF0ZS5jdXJyZW50QXR0YWNrZXIubmFtZTtcbiAgICAgIGNvbnN0IG9wcG9uZW50TmFtZSA9IHN0YXRlLmN1cnJlbnRPcHBvbmVudC5uYW1lO1xuICAgICAgUHViU3ViLnB1Ymxpc2goU1VOSywge1xuICAgICAgICBzaGlwSWQ6IGF0dGFjay5zaGlwLmlkLFxuICAgICAgICBzaGlwTmFtZTogYXR0YWNrLnNoaXAubmFtZSxcbiAgICAgICAgYXR0YWNrZXJOYW1lLFxuICAgICAgICBvcHBvbmVudE5hbWUsXG4gICAgICAgIHNoaXBDb29yZHM6IGF0dGFjay5zaGlwQ29vcmRzLFxuICAgICAgICBhZGphY2VudENvb3JkczogYXR0YWNrLmFkamFjZW50Q29vcmRzLFxuICAgICAgfSk7XG4gICAgICBpZiAoc3RhdGUuY3VycmVudE9wcG9uZW50LmdhbWVib2FyZC5pc0ZsZWV0U3VuaygpKSB7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRBdHRhY2tlci5pbmNyZW1lbnRTY29yZSgpO1xuICAgICAgICBQdWJTdWIucHVibGlzaChGTEVFVF9HT05FLCB7XG4gICAgICAgICAgd2lubmVyTmFtZTogYXR0YWNrZXJOYW1lLFxuICAgICAgICAgIGxvc2VyTmFtZTogb3Bwb25lbnROYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZS5jdXJyZW50QXR0YWNrZXIuaXNCb3QpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBtb3ZlID0gc3RhdGUuY3VycmVudEF0dGFja2VyLmdldE1vdmUoR1JJRF9TSVpFKTtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goQVRUQUNLLCB7IGNvb3JkczogbW92ZSB9KTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfSk7XG5cbiAgUHViU3ViLnN1YnNjcmliZShORVdfUk9VTkQsICgpID0+IHtcbiAgICBzdGF0ZS5wbGF5ZXJPbmUuZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgc3RhdGUucGxheWVyVHdvLmdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIGlmIChzdGF0ZS5wbGF5ZXJUd28uaXNCb3QpIHtcbiAgICAgIHN0YXRlLnBsYXllclR3by5jbGVhckhpc3RvcnkoKTtcbiAgICB9XG5cbiAgICBzdGF0ZS5hdmFpbGFibGVGbGVldCA9IGdlbmVyYXRlRmxlZXQoKTtcbiAgICBzdGF0ZS5jdXJyZW50U2V0dXBQbGF5ZXIgPSBzdGF0ZS5wbGF5ZXJPbmU7XG5cbiAgICBQdWJTdWIucHVibGlzaChESVNQTEFZX1NFVFVQX1BIQVNFLCB7XG4gICAgICBwbGF5ZXJOYW1lOiBzdGF0ZS5jdXJyZW50U2V0dXBQbGF5ZXIubmFtZSxcbiAgICAgIGdhbWVib2FyZDogc3RhdGUuY3VycmVudFNldHVwUGxheWVyLmdhbWVib2FyZC5nZXRHcmlkKCksXG4gICAgICBmbGVldDogc3RhdGUuYXZhaWxhYmxlRmxlZXQsXG4gICAgfSk7XG4gIH0pO1xuXG4gIFB1YlN1Yi5zdWJzY3JpYmUoUkVTRVRfR0FNRSwgKCkgPT4ge1xuICAgIHN0YXRlID0ge1xuICAgICAgZ2FtZU1vZGU6IG51bGwsXG4gICAgICBwbGF5ZXJPbmU6IG51bGwsXG4gICAgICBwbGF5ZXJUd286IG51bGwsXG4gICAgICBhdmFpbGFibGVGbGVldDogbnVsbCxcbiAgICAgIGN1cnJlbnRTZXR1cFBsYXllcjogbnVsbCxcbiAgICAgIGN1cnJlbnRBdHRhY2tlcjogbnVsbCxcbiAgICAgIGN1cnJlbnRPcHBvbmVudDogbnVsbCxcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZUZsZWV0KCkge1xuICAgIHJldHVybiBTSElQU19EQVRBLmZsYXRNYXAoKHNoaXBEYXRhKSA9PiB7XG4gICAgICBjb25zdCBzaGlwcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwRGF0YS5jb3VudDsgaSArPSAxKSB7XG4gICAgICAgIHNoaXBzLnB1c2goU2hpcChzaGlwRGF0YSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2hpcChzaGlwSWQpIHtcbiAgICBpZiAoc3RhdGUuYXZhaWxhYmxlRmxlZXQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGUuYXZhaWxhYmxlRmxlZXQuZmluZCgoc2hpcCkgPT4gc2hpcC5pZCA9PT0gc2hpcElkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3YXBSb2xlcygpIHtcbiAgICBpZiAoc3RhdGUuY3VycmVudEF0dGFja2VyID09PSBudWxsIHx8IHN0YXRlLmN1cnJlbnRPcHBvbmVudCA9PT0gbnVsbCkge1xuICAgICAgLy8gUmFuZG9tbHkgcGlja3MgYW4gYXR0YWNrZXIgYW5kIGFuIG9wcG9uZW50XG4gICAgICBbc3RhdGUuY3VycmVudEF0dGFja2VyLCBzdGF0ZS5jdXJyZW50T3Bwb25lbnRdID0gW1xuICAgICAgICBzdGF0ZS5wbGF5ZXJPbmUsXG4gICAgICAgIHN0YXRlLnBsYXllclR3byxcbiAgICAgIF0uc29ydCgoKSA9PiAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbGRBdHRhY2tlciA9IHN0YXRlLmN1cnJlbnRBdHRhY2tlcjtcbiAgICAgIHN0YXRlLmN1cnJlbnRBdHRhY2tlciA9IHN0YXRlLmN1cnJlbnRPcHBvbmVudDtcbiAgICAgIHN0YXRlLmN1cnJlbnRPcHBvbmVudCA9IG9sZEF0dGFja2VyO1xuICAgIH1cbiAgICBzdGF0ZS5jdXJyZW50QXR0YWNrZXIuc2V0QWN0aXZlKHRydWUpO1xuICAgIHN0YXRlLmN1cnJlbnRPcHBvbmVudC5zZXRBY3RpdmUoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVBdHRhY2tQaGFzZURhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdhbWVNb2RlOiBzdGF0ZS5nYW1lTW9kZSxcbiAgICAgIHBsYXllck9uZToge1xuICAgICAgICBuYW1lOiBzdGF0ZS5wbGF5ZXJPbmUubmFtZSxcbiAgICAgICAgaXNCb3Q6IHN0YXRlLnBsYXllck9uZS5pc0JvdCxcbiAgICAgICAgYWN0aXZlOiBzdGF0ZS5wbGF5ZXJPbmUuaXNBY3RpdmUoKSxcbiAgICAgICAgc2NvcmU6IHN0YXRlLnBsYXllck9uZS5nZXRTY29yZSgpLFxuICAgICAgICBnYW1lYm9hcmQ6IHN0YXRlLnBsYXllck9uZS5nYW1lYm9hcmQuZ2V0R3JpZCgpLFxuICAgICAgICBmbGVldDogc3RhdGUucGxheWVyT25lLmdhbWVib2FyZC5nZXRGbGVldCgpLFxuICAgICAgfSxcbiAgICAgIHBsYXllclR3bzoge1xuICAgICAgICBuYW1lOiBzdGF0ZS5wbGF5ZXJUd28ubmFtZSxcbiAgICAgICAgaXNCb3Q6IHN0YXRlLnBsYXllclR3by5pc0JvdCxcbiAgICAgICAgYWN0aXZlOiBzdGF0ZS5wbGF5ZXJUd28uaXNBY3RpdmUoKSxcbiAgICAgICAgc2NvcmU6IHN0YXRlLnBsYXllclR3by5nZXRTY29yZSgpLFxuICAgICAgICBnYW1lYm9hcmQ6IHN0YXRlLnBsYXllclR3by5nYW1lYm9hcmQuZ2V0R3JpZCgpLFxuICAgICAgICBmbGVldDogc3RhdGUucGxheWVyVHdvLmdhbWVib2FyZC5nZXRGbGVldCgpLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5pbXBvcnQgeyBhbmltYXRlIGFzIGF0ZWJpdEFuaW1hdGUgfSBmcm9tICdhdGViaXQnO1xuaW1wb3J0IHsgR1JJRF9TSVpFLCBPcmllbnRhdGlvbiwgU3RhdHVzIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgY2VsbE51bWJlclRvQ29vcmRpbmF0ZXMsIGNvb3JkaW5hdGVzVG9DZWxsTnVtYmVyIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IEdhbWVNb2RlIH0gZnJvbSAnLi9nYW1lRGF0YSc7XG5pbXBvcnQge1xuICBERUZBVUxUX1RJTUlORyxcbiAgUE9QX0lOLFxuICBTTElERV9JTl9SSUdIVCxcbiAgU0xJREVfT1VUX0xFRlQsXG4gIFNMSURFX09VVF9SSUdIVCxcbiAgWk9PTV9JTixcbiAgWk9PTV9PVVQsXG59IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBTVEFSVF9HQU1FLFxuICBESVNQTEFZX1NFVFVQX1BIQVNFLFxuICBDSEVDS19DT09SRElOQVRFUyxcbiAgQ09PUkRJTkFURVNfRlJFRSxcbiAgUExBQ0VfU0hJUCxcbiAgUExBQ0VNRU5UX1ZBTElELFxuICBQTEFDRV9TSElQU19SQU5ET00sXG4gIFNFVFVQX1BIQVNFX05FWFQsXG4gIFNFVFVQX1BIQVNFX0lOQ09NUExFVEUsXG4gIERJU1BMQVlfQVRUQUNLX1BIQVNFLFxuICBBVFRBQ0ssXG4gIE1JU1MsXG4gIEhJVCxcbiAgU1VOSyxcbiAgRkxFRVRfR09ORSxcbiAgTkVXX1JPVU5ELFxuICBSRVNFVF9HQU1FLFxufSBmcm9tICcuL2V2ZW50VHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lVWkoKSB7XG4gIC8vIENocm9tZSBkb2Vzbid0IGFsbG93IGFjY2Vzc2luZyB0aGUgZGF0YVRyYW5zZmVyIG9iamVjdCBvdXQgb2YgdGhlIGRyYWdzdGFydFxuICAvLyBhbmQgZHJvcCBoYW5kbGVycy5cbiAgbGV0IGRhdGFUcmFuc2ZlciA9IG51bGw7XG4gIGxldCBjZWxsR2hvc3RJbWFnZSA9IG51bGw7XG4gIGxldCBwYXNzU2NyZWVuVGltZW91dElkID0gbnVsbDtcblxuICBsZXQgdHVybkluZGljYXRvciA9IG51bGw7XG4gIGxldCBwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXIgPSBudWxsO1xuICBsZXQgcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyID0gbnVsbDtcbiAgbGV0IGN1cnJlbnRBY3RpdmVHYW1lYm9hcmRDb250YWluZXIgPSBudWxsO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcblxuICBhdGViaXRBbmltYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2dvIC5jaGFyJyksIFtcbiAgICBQT1BfSU4sXG4gICAgeyBkdXJhdGlvbjogMTAwLCBmaWxsOiAnZm9yd2FyZHMnIH0sXG4gIF0pO1xuXG4gIC8vIElOSVRJQUxZIFJFTkRFUiBHQU1FIFNFVFRJTkdTIEZPUk1cblxuICByZW5kZXIobWFpbiwgY3JlYXRlR2FtZVNldHRpbmdzRm9ybSgpLCBmYWxzZSwge1xuICAgIGluS2V5RnJhbWVzOiBaT09NX0lOLFxuICB9KTtcblxuICAvLyBQVUJTVUIgU1VCU0NSSVBUSU9OU1xuXG4gIFB1YlN1Yi5zdWJzY3JpYmUoRElTUExBWV9TRVRVUF9QSEFTRSwgKF8sIGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS5yYW5kb20pIHtcbiAgICAgIHVubWFya0ZsZWV0TG9jYXRpb24oY3VycmVudEFjdGl2ZUdhbWVib2FyZENvbnRhaW5lcik7XG4gICAgICBtYXJrRmxlZXRMb2NhdGlvbihjdXJyZW50QWN0aXZlR2FtZWJvYXJkQ29udGFpbmVyLCBkYXRhLmdhbWVib2FyZCk7XG5cbiAgICAgIGN1cnJlbnRBY3RpdmVHYW1lYm9hcmRDb250YWluZXJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbGVldC1zZXR1cCAuc2hpcFtkcmFnZ2FibGU9XCJ0cnVlXCJdJylcbiAgICAgICAgLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpO1xuICAgICAgICAgIHNoaXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgaGFuZGxlU2V0dXBTaGlwRHJhZ1N0YXJ0KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcihtYWluLmZpcnN0RWxlbWVudENoaWxkLCBjcmVhdGVTZXR1cFBoYXNlKGRhdGEpLCB0cnVlLCB7XG4gICAgICAgIG91dEtleWZyYW1lczogU0xJREVfT1VUX0xFRlQsXG4gICAgICAgIGluS2V5RnJhbWVzOiBTTElERV9JTl9SSUdIVCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgUHViU3ViLnN1YnNjcmliZShDT09SRElOQVRFU19GUkVFLCAoXywgZGF0YSkgPT4ge1xuICAgIG1hcmtWYWxpZFRhcmdldENlbGxzKGN1cnJlbnRBY3RpdmVHYW1lYm9hcmRDb250YWluZXIsIGRhdGEpO1xuICB9KTtcblxuICBQdWJTdWIuc3Vic2NyaWJlKFBMQUNFTUVOVF9WQUxJRCwgKF8sIGRhdGEpID0+IHtcbiAgICB1bm1hcmtTaGlwTG9jYXRpb25DZWxscyhjdXJyZW50QWN0aXZlR2FtZWJvYXJkQ29udGFpbmVyLCBkYXRhLnNoaXBJZCk7XG4gICAgbWFya1NoaXBMb2NhdGlvbkNlbGxzKGN1cnJlbnRBY3RpdmVHYW1lYm9hcmRDb250YWluZXIsIGRhdGEpO1xuXG4gICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmZsZWV0IFtkYXRhLXNoaXAtaWQ9XCIke2RhdGEuc2hpcElkfVwiXWBcbiAgICApO1xuICAgIGlmIChzaGlwQ29udGFpbmVyLmRyYWdnYWJsZSkge1xuICAgICAgc2hpcENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIGZhbHNlKTtcbiAgICAgIHNoaXBDb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTZXR1cFNoaXBEcmFnU3RhcnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgUHViU3ViLnN1YnNjcmliZShTRVRVUF9QSEFTRV9JTkNPTVBMRVRFLCAoKSA9PiB7XG4gICAgcmVuZGVyTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICBtc2c6ICdZb3UgbmVlZCB0byBwbGFjZSBhbGwgYXZhaWxhYmxlIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQuJyxcbiAgICB9KTtcbiAgfSk7XG5cbiAgUHViU3ViLnN1YnNjcmliZShESVNQTEFZX0FUVEFDS19QSEFTRSwgYXN5bmMgKF8sIGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS5nYW1lTW9kZSA9PT0gR2FtZU1vZGUuVlNfRlJJRU5EKSB7XG4gICAgICBsZXQgYXR0YWNrZXJOYW1lID0gbnVsbDtcbiAgICAgIGlmIChkYXRhLnBsYXllck9uZS5hY3RpdmUpIHtcbiAgICAgICAgYXR0YWNrZXJOYW1lID0gZGF0YS5wbGF5ZXJPbmUubmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dGFja2VyTmFtZSA9IGRhdGEucGxheWVyVHdvLm5hbWU7XG4gICAgICB9XG4gICAgICByZW5kZXJPdmVybGF5KGNyZWF0ZVBhc3NEZXZpY2VTY3JlZW4oYXR0YWNrZXJOYW1lKSk7XG4gICAgICByZW5kZXIobWFpbi5maXJzdEVsZW1lbnRDaGlsZCwgY3JlYXRlQXR0YWNrUGhhc2UoZGF0YSksIHRydWUpO1xuICAgICAgY3VycmVudEFjdGl2ZUdhbWVib2FyZENvbnRhaW5lci5zY3JvbGxJbnRvVmlldygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCByZW5kZXIobWFpbi5maXJzdEVsZW1lbnRDaGlsZCwgY3JlYXRlQXR0YWNrUGhhc2UoZGF0YSksIHRydWUsIHtcbiAgICAgICAgb3V0S2V5ZnJhbWVzOiBTTElERV9PVVRfTEVGVCxcbiAgICAgICAgaW5LZXlGcmFtZXM6IFNMSURFX0lOX1JJR0hULFxuICAgICAgfSk7XG4gICAgICBjdXJyZW50QWN0aXZlR2FtZWJvYXJkQ29udGFpbmVyLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgUHViU3ViLnN1YnNjcmliZShNSVNTLCAoXywgZGF0YSkgPT4ge1xuICAgIGNvbnN0IGNlbGxOdW0gPSBjb29yZGluYXRlc1RvQ2VsbE51bWJlcihkYXRhLmNvb3JkcywgR1JJRF9TSVpFKTtcbiAgICBjdXJyZW50QWN0aXZlR2FtZWJvYXJkQ29udGFpbmVyXG4gICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtY2VsbC1udW09XCIke2NlbGxOdW19XCJdYClcbiAgICAgIC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG5cbiAgICBzd2FwUm9sZXMoZGF0YSk7XG4gIH0pO1xuXG4gIFB1YlN1Yi5zdWJzY3JpYmUoSElULCAoXywgZGF0YSkgPT4ge1xuICAgIGNvbnN0IGNlbGxOdW0gPSBjb29yZGluYXRlc1RvQ2VsbE51bWJlcihkYXRhLmNvb3JkcywgR1JJRF9TSVpFKTtcbiAgICBjdXJyZW50QWN0aXZlR2FtZWJvYXJkQ29udGFpbmVyXG4gICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtY2VsbC1udW09XCIke2NlbGxOdW19XCJdYClcbiAgICAgIC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgfSk7XG5cbiAgUHViU3ViLnN1YnNjcmliZShTVU5LLCAoXywgZGF0YSkgPT4ge1xuICAgIGRhdGEuc2hpcENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgY29uc3QgY2VsbE51bSA9IGNvb3JkaW5hdGVzVG9DZWxsTnVtYmVyKGNvb3JkLCBHUklEX1NJWkUpO1xuICAgICAgY29uc3QgY2VsbCA9IGN1cnJlbnRBY3RpdmVHYW1lYm9hcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWNlbGwtbnVtPVwiJHtjZWxsTnVtfVwiXWBcbiAgICAgICk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpdCcpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICBjZWxsLmFuaW1hdGUoUE9QX0lOLCBERUZBVUxUX1RJTUlORyk7XG4gICAgfSk7XG5cbiAgICBkYXRhLmFkamFjZW50Q29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBjb25zdCBjZWxsTnVtID0gY29vcmRpbmF0ZXNUb0NlbGxOdW1iZXIoY29vcmQsIEdSSURfU0laRSk7XG4gICAgICBjb25zdCBjZWxsID0gY3VycmVudEFjdGl2ZUdhbWVib2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtY2VsbC1udW09XCIke2NlbGxOdW19XCJdYFxuICAgICAgKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIH0pO1xuXG4gICAgY3VycmVudEFjdGl2ZUdhbWVib2FyZENvbnRhaW5lclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC5mbGVldC1zdGF0dXMgW2RhdGEtc2hpcC1pZD1cIiR7ZGF0YS5zaGlwSWR9XCJdYClcbiAgICAgIC5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG5cbiAgICByZW5kZXJOb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgbXNnOiBgJHtkYXRhLmF0dGFja2VyTmFtZX0gc3VuayAke2RhdGEub3Bwb25lbnROYW1lfSdzICR7ZGF0YS5zaGlwTmFtZX0hYCxcbiAgICB9KTtcbiAgfSk7XG5cbiAgUHViU3ViLnN1YnNjcmliZShGTEVFVF9HT05FLCAoXywgZGF0YSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVuZGVyKFxuICAgICAgICBkb2N1bWVudC5ib2R5LFxuICAgICAgICBjcmVhdGVFbmRSb3VuZE92ZXJsYXkoZGF0YS53aW5uZXJOYW1lLCBkYXRhLmxvc2VyTmFtZSksXG4gICAgICAgIGZhbHNlLFxuICAgICAgICB7XG4gICAgICAgICAgaW5LZXlGcmFtZXM6IFpPT01fSU4sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xuXG4gIC8vIERPTSBVVElMIEZVTkNUSU9OU1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZ05hbWUgPSAnZGl2JyxcbiAgICBhdHRyaWJ1dGVzID0ge30sXG4gICAgY29udGVudCA9IG51bGwsXG4gICAgdXNlSW5uZXJIVE1MID0gZmFsc2UsXG4gICAgY2hpbGRyZW4gPSBbXSxcbiAgICBldmVudHMgPSBbXSxcbiAgfSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgaWYgKHVzZUlubmVySFRNTCkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuXG4gICAgZXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQubmFtZSwgZXZlbnQuaGFuZGxlcik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KG5hbWUsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4geyBuYW1lLCBoYW5kbGVyIH07XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiByZW5kZXIocGFyZW50LCBlbGVtZW50LCByZXBsYWNlID0gZmFsc2UsIGFuaW1hdGlvbnMgPSBudWxsKSB7XG4gICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgIGlmIChhbmltYXRpb25zKSB7XG4gICAgICAgIGF3YWl0IHBhcmVudC5hbmltYXRlKFxuICAgICAgICAgIGFuaW1hdGlvbnMub3V0S2V5ZnJhbWVzLFxuICAgICAgICAgIGFuaW1hdGlvbnMub3V0VGltaW5nID8/IERFRkFVTFRfVElNSU5HXG4gICAgICAgICkuZmluaXNoZWQ7XG4gICAgICB9XG4gICAgICBwYXJlbnQucmVwbGFjZVdpdGgoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKGFuaW1hdGlvbnMpIHtcbiAgICAgIGF3YWl0IGVsZW1lbnQuYW5pbWF0ZShcbiAgICAgICAgYW5pbWF0aW9ucy5pbktleUZyYW1lcyxcbiAgICAgICAgYW5pbWF0aW9ucy5pblRpbWluZyA/PyBERUZBVUxUX1RJTUlOR1xuICAgICAgKS5maW5pc2hlZDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb24oeyB0eXBlLCBtc2cgfSkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHtcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6IGBub3RpZmljYXRpb24gJHt0eXBlfWAsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgdGFnTmFtZTogJ3AnLFxuICAgICAgICAgIGNvbnRlbnQ6IG1zZyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbkF0dHJpYnV0ZXMsIGR1cmF0aW9uID0gMjAwMCkge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGNyZWF0ZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25BdHRyaWJ1dGVzKTtcbiAgICByZW5kZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbnMnKSwgbm90aWZpY2F0aW9uLCBmYWxzZSwge1xuICAgICAgaW5LZXlGcmFtZXM6IFNMSURFX0lOX1JJR0hULFxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgbm90aWZpY2F0aW9uLmFuaW1hdGUoU0xJREVfT1VUX1JJR0hULCBERUZBVUxUX1RJTUlORykuZmluaXNoZWQ7XG4gICAgICBub3RpZmljYXRpb24ucmVtb3ZlKCk7XG4gICAgfSwgZHVyYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT3ZlcmxheSh0ZXh0LCBidXR0b25zKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBpZDogJ292ZXJsYXknLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgIHRhZ05hbWU6ICdwJyxcbiAgICAgICAgICBjb250ZW50OiB0ZXh0LFxuICAgICAgICB9KSxcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgY2xhc3M6ICdidXR0b25zJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkcmVuOiBidXR0b25zLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiByZW5kZXJPdmVybGF5KG92ZXJsYXkpIHtcbiAgICBhd2FpdCByZW5kZXIoZG9jdW1lbnQuYm9keSwgb3ZlcmxheSwgZmFsc2UsIHtcbiAgICAgIGluS2V5RnJhbWVzOiBaT09NX0lOLFxuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnY2xpcHBlZCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGFzc0RldmljZVNjcmVlbihwbGF5ZXJOYW1lKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU92ZXJsYXkoYCR7cGxheWVyTmFtZX0ncyB0dXJuIWAsIFtcbiAgICAgIGNyZWF0ZUxlYXZlR2FtZUJ1dHRvbigpLFxuICAgICAgY3JlYXRlQnV0dG9uKCdBY2NlcHQnLCB7IGNsYXNzOiAnYnRuJyB9LCBbXG4gICAgICAgIGNyZWF0ZUV2ZW50KCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgIGF3YWl0IHJlbW92ZU92ZXJsYXkoZXZlbnQpO1xuICAgICAgICAgIGN1cnJlbnRBY3RpdmVHYW1lYm9hcmRDb250YWluZXIuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgIF0pLFxuICAgIF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW5kUm91bmRPdmVybGF5KHdpbm5lciwgbG9zZXIpIHtcbiAgICByZXR1cm4gY3JlYXRlT3ZlcmxheShgJHt3aW5uZXJ9IHN1bmsgJHtsb3Nlcn0ncyBmbGVldCFgLCBbXG4gICAgICBjcmVhdGVMZWF2ZUdhbWVCdXR0b24oKSxcbiAgICAgIGNyZWF0ZUJ1dHRvbignQ29udGludWUnLCB7IGNsYXNzOiAnYnRuJyB9LCBbXG4gICAgICAgIGNyZWF0ZUV2ZW50KCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgIHJlbW92ZU92ZXJsYXkoZXZlbnQpO1xuICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKE5FV19ST1VORCk7XG4gICAgICAgIH0pLFxuICAgICAgXSksXG4gICAgXSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiByZW1vdmVPdmVybGF5KGV2ZW50KSB7XG4gICAgY29uc3QgcGFyZW50ID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcjb3ZlcmxheScpO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGF3YWl0IHBhcmVudC5hbmltYXRlKFpPT01fT1VULCBERUZBVUxUX1RJTUlORykuZmluaXNoZWQ7XG4gICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2NsaXBwZWQnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMZWF2ZUdhbWVCdXR0b24oKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1dHRvbignTGVhdmUgZ2FtZScsIHsgY2xhc3M6ICdidG4nIH0sIFtcbiAgICAgIGNyZWF0ZUV2ZW50KCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAocGFzc1NjcmVlblRpbWVvdXRJZCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChwYXNzU2NyZWVuVGltZW91dElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZU92ZXJsYXkoZXZlbnQpO1xuXG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKFJFU0VUX0dBTUUpO1xuXG4gICAgICAgIHJlbmRlcihtYWluLmZpcnN0RWxlbWVudENoaWxkLCBjcmVhdGVHYW1lU2V0dGluZ3NGb3JtKCksIHRydWUsIHtcbiAgICAgICAgICBpbktleUZyYW1lczogWk9PTV9JTixcbiAgICAgICAgICBvdXRLZXlmcmFtZXM6IFpPT01fT1VULFxuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgIF0pO1xuICB9XG5cbiAgLy8gR0FNRSBTRVRUSU5HUyBGT1JNIC8gRk9STSBVVElMIEZVTkNUSU9OU1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUdhbWVTZXR0aW5nc0Zvcm0oKSB7XG4gICAgY29uc3QgcGxheWVyVHdvID0gY3JlYXRlVGV4dElucHV0KHtcbiAgICAgIG5hbWU6ICdwbGF5ZXItdHdvJyxcbiAgICAgIGlkOiAncGxheWVyLXR3bycsXG4gICAgICBwbGFjZWhvbGRlcjogJ1BsYXllciAyJyxcbiAgICAgIG1heGxlbmd0aDogMTYsXG4gICAgfSk7XG4gICAgcGxheWVyVHdvLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh7XG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiAnY29udGFpbmVyIGZvcm0tY29udGFpbmVyJyxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICB0YWdOYW1lOiAnZm9ybScsXG4gICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgY2xhc3M6ICdmb3JtIGdhbWUtc2V0dGluZ3MtZm9ybScsXG4gICAgICAgICAgICBub3ZhbGlkYXRlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGNyZWF0ZUdhbWVNb2RlSW5wdXQoKSxcbiAgICAgICAgICAgIGNyZWF0ZVRleHRJbnB1dCh7XG4gICAgICAgICAgICAgIG5hbWU6ICdwbGF5ZXItb25lJyxcbiAgICAgICAgICAgICAgaWQ6ICdwbGF5ZXItb25lJyxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdQbGF5ZXIgMScsXG4gICAgICAgICAgICAgIG1heGxlbmd0aDogMTYsXG4gICAgICAgICAgICAgIGF1dG9mb2N1czogdHJ1ZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcGxheWVyVHdvLFxuICAgICAgICAgICAgY3JlYXRlQnV0dG9uKCdTdGFydCBHYW1lJywgeyBjbGFzczogJ2J0bicsIHR5cGU6ICdzdWJtaXQnIH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXZlbnRzOiBbY3JlYXRlRXZlbnQoJ3N1Ym1pdCcsIGhhbmRsZVN0YXJ0R2FtZSldLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVHYW1lTW9kZUlucHV0KCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHtcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6ICdmb3JtLWZpZWxkJyxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBjbGFzczogJ3JhZGlvcycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgY3JlYXRlUmFkaW9JbnB1dChcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdnYW1lLW1vZGUnLFxuICAgICAgICAgICAgICAgIGlkOiAndnMtZnJpZW5kJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogR2FtZU1vZGUuVlNfRlJJRU5ELFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbY3JlYXRlRXZlbnQoJ2NoYW5nZScsIGhhbmRsZUdhbWVNb2RlQ2hhbmdlKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjcmVhdGVMYWJlbCgndnMgZnJpZW5kJywgeyBmb3I6ICd2cy1mcmllbmQnLCBjbGFzczogJ2J0bicgfSksXG4gICAgICAgICAgICBjcmVhdGVSYWRpb0lucHV0KFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2dhbWUtbW9kZScsXG4gICAgICAgICAgICAgICAgaWQ6ICd2cy1ib3QnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBHYW1lTW9kZS5WU19CT1QsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW2NyZWF0ZUV2ZW50KCdjaGFuZ2UnLCBoYW5kbGVHYW1lTW9kZUNoYW5nZSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3JlYXRlTGFiZWwoJ3ZzIG5vb2JvdCcsIHsgZm9yOiAndnMtYm90JywgY2xhc3M6ICdidG4nIH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJhZGlvSW5wdXQoYXR0cmlidXRlcywgZXZlbnRzID0gW10pIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh7XG4gICAgICB0YWdOYW1lOiAnaW5wdXQnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICAuLi5hdHRyaWJ1dGVzLFxuICAgICAgfSxcbiAgICAgIGV2ZW50cyxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGxhYmVsVGV4dCwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHtcbiAgICAgIHRhZ05hbWU6ICdsYWJlbCcsXG4gICAgICBhdHRyaWJ1dGVzLFxuICAgICAgY29udGVudDogbGFiZWxUZXh0LFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVGV4dElucHV0KGF0dHJpYnV0ZXMsIGV2ZW50cyA9IFtdKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogJ2Zvcm0tZmllbGQnLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIGNyZWF0ZUxhYmVsKGF0dHJpYnV0ZXMucGxhY2Vob2xkZXIsIHsgZm9yOiBhdHRyaWJ1dGVzLmlkIH0pLFxuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICB0YWdOYW1lOiAnaW5wdXQnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIC4uLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBldmVudHM6IFtcbiAgICAgICAgICAgIGNyZWF0ZUV2ZW50KCdibHVyJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIC4uLmV2ZW50cyxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgdGFnTmFtZTogJ3AnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgIGNsYXNzOiAnbm90ZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiAnTWF4IDE2IGNoYXJhY3RlcnMuJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGJ1dHRvblRleHQsIGF0dHJpYnV0ZXMsIGV2ZW50cyA9IFtdKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogJ2Zvcm0tZmllbGQnLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgIHRhZ05hbWU6ICdidXR0b24nLFxuICAgICAgICAgIGF0dHJpYnV0ZXMsXG4gICAgICAgICAgY29udGVudDogYnV0dG9uVGV4dCxcbiAgICAgICAgICBldmVudHMsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNFVFVQIFBIQVNFXG5cbiAgZnVuY3Rpb24gY3JlYXRlU2V0dXBQaGFzZShkYXRhKSB7XG4gICAgY3VycmVudEFjdGl2ZUdhbWVib2FyZENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogJ2dhbWVib2FyZC1jb250YWluZXInLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIGNyZWF0ZVNldHVwR2FtZWJvYXJkKGRhdGEuZ2FtZWJvYXJkKSxcbiAgICAgICAgY3JlYXRlRmxlZXQoXG4gICAgICAgICAgZGF0YS5mbGVldCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzczogJ2ZsZWV0IGZsZWV0LXNldHVwJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICFkYXRhLnJhbmRvbVxuICAgICAgICApLFxuICAgICAgXSxcbiAgICB9KTtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh7XG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiAnY29udGFpbmVyIHNldHVwLXBoYXNlLWNvbnRhaW5lcicsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgdGFnTmFtZTogJ3AnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgIGNsYXNzOiAncGxheWVyLW5hbWUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDogYCR7ZGF0YS5wbGF5ZXJOYW1lfSdzIHNldHVwIHBoYXNlIWAsXG4gICAgICAgIH0pLFxuICAgICAgICBjcmVhdGVJbnN0cnVjdGlvbnMoKSxcbiAgICAgICAgY3VycmVudEFjdGl2ZUdhbWVib2FyZENvbnRhaW5lcixcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgY2xhc3M6ICdidXR0b25zJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBjcmVhdGVMZWF2ZUdhbWVCdXR0b24oKSxcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbignUmFuZG9tJywgeyBjbGFzczogJ2J0bicgfSwgW1xuICAgICAgICAgICAgICBjcmVhdGVFdmVudCgnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgUHViU3ViLnB1Ymxpc2goUExBQ0VfU0hJUFNfUkFORE9NKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbignTmV4dCcsIHsgY2xhc3M6ICdidG4nIH0sIFtcbiAgICAgICAgICAgICAgY3JlYXRlRXZlbnQoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKFNFVFVQX1BIQVNFX05FWFQpO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RydWN0aW9ucygpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh7XG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICB0YWdOYW1lOiAncCcsXG4gICAgICAgICAgY29udGVudDogJ0hvdyB0bzonLFxuICAgICAgICB9KSxcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgdGFnTmFtZTogJ3VsJyxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgIHRhZ05hbWU6ICdsaScsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICdEcmFnIGEgc2hpcCB0byB0aGUgZGVzaXJlZCBwb3NpdGlvbiBvbiB0aGUgZ2FtZWJvYXJkLicsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICB0YWdOYW1lOiAnbGknLFxuICAgICAgICAgICAgICBjb250ZW50OiAnQ2xpY2sgb24gYSBzaGlwIHRvIHJvdGF0ZSBpdCBieSBhIC05MCZkZWc7LicsXG4gICAgICAgICAgICAgIHVzZUlubmVySFRNTDogdHJ1ZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgIHRhZ05hbWU6ICdsaScsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICdTaGlwcyBjYW5ub3Qgb3ZlcmxhcCEnLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgdGFnTmFtZTogJ2xpJyxcbiAgICAgICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICAgICAnVGhlcmUgc2hvdWxkIGJlIGF0IGxlYXN0IG9uZSBzcXVhcmUgc3BhY2UgYmV0d2VlbiBzaGlwcyEnLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2V0dXBHYW1lYm9hcmQoZ2FtZWJvYXJkKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogJ2dhbWVib2FyZCcsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IGdhbWVib2FyZC5tYXAoKGNlbGwsIGNlbGxOdW0pID0+XG4gICAgICAgIGNyZWF0ZUdhbWVib2FyZENlbGwoXG4gICAgICAgICAgY2VsbCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnZGF0YS1jZWxsLW51bSc6IGNlbGxOdW0sXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGNlbGwuc3RhdHVzID09PSBTdGF0dXMuQlVTWSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIGNyZWF0ZUV2ZW50KCdjbGljaycsIGhhbmRsZVNldHVwQ2VsbENsaWNrKSxcbiAgICAgICAgICAgIGNyZWF0ZUV2ZW50KCdkcmFnc3RhcnQnLCBoYW5kbGVTZXR1cENlbGxEcmFnU3RhcnQpLFxuICAgICAgICAgICAgY3JlYXRlRXZlbnQoJ2RyYWdlbmQnLCBoYW5kbGVTZXR1cENlbGxEcmFnRW5kKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGV2ZW50czogW1xuICAgICAgICBjcmVhdGVFdmVudCgnZHJhZ2VudGVyJywgaGFuZGxlU2V0dXBHYW1lYm9hcmREcmFnRW50ZXIpLFxuICAgICAgICBjcmVhdGVFdmVudCgnZHJhZ292ZXInLCBoYW5kbGVTZXR1cEdhbWVib2FyZERyYWdPdmVyKSxcbiAgICAgICAgY3JlYXRlRXZlbnQoJ2RyYWdsZWF2ZScsIGhhbmRsZVNldHVwR2FtZWJvYXJkRHJhZ0xlYXZlKSxcbiAgICAgICAgY3JlYXRlRXZlbnQoJ2Ryb3AnLCBoYW5kbGVTZXR1cEdhbWVib2FyZERyb3ApLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZENlbGwoXG4gICAgY2VsbERhdGEsXG4gICAgY2VsbEF0dHJpYnV0ZXMsXG4gICAgZXZlbnRzID0gW10sXG4gICAgc2hvd1NoaXBzID0gZmFsc2VcbiAgKSB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgICAgIGNsYXNzOiAnY2VsbCcsXG4gICAgICAuLi5jZWxsQXR0cmlidXRlcyxcbiAgICB9O1xuXG4gICAgaWYgKGNlbGxEYXRhLnN0YXR1cyA9PT0gU3RhdHVzLk1JU1MpIHtcbiAgICAgIGF0dHJpYnV0ZXMuY2xhc3MgKz0gJyBtaXNzJztcbiAgICB9IGVsc2UgaWYgKGNlbGxEYXRhLnN0YXR1cyA9PT0gU3RhdHVzLkhJVCkge1xuICAgICAgYXR0cmlidXRlcy5jbGFzcyArPSAnIGhpdCc7XG4gICAgfSBlbHNlIGlmIChjZWxsRGF0YS5zdGF0dXMgPT09IFN0YXR1cy5TVU5LKSB7XG4gICAgICBhdHRyaWJ1dGVzLmNsYXNzICs9ICcgc3Vuayc7XG4gICAgfSBlbHNlIGlmIChjZWxsRGF0YS5zdGF0dXMgPT09IFN0YXR1cy5CVVNZICYmIHNob3dTaGlwcykge1xuICAgICAgYXR0cmlidXRlcy5jbGFzcyArPSAnIG1hcmtlZCc7XG4gICAgICBhdHRyaWJ1dGVzWydkYXRhLXNoaXAtaWQnXSA9IGNlbGxEYXRhLnNoaXAuaWQ7XG4gICAgICBhdHRyaWJ1dGVzWydkYXRhLXNoaXAtb3JpZW50YXRpb24nXSA9IGNlbGxEYXRhLm9yaWVudGF0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHtcbiAgICAgIGF0dHJpYnV0ZXMsXG4gICAgICBldmVudHMsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDZWxsR2hvc3RJbWFnZShzaGlwSWQsIHNoaXBPcmllbnRhdGlvbikge1xuICAgIGNvbnN0IGRyYWdHaG9zdEltYWdlID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiAnZmxlZXQgZmxlZXQtc2V0dXAgZHJhZy1naG9zdC1pbWFnZScsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IHNoaXBFbGVtZW50ID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGAuZmxlZXQgW2RhdGEtc2hpcC1pZD1cIiR7c2hpcElkfVwiXWApXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuICAgIHNoaXBFbGVtZW50LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gT3JpZW50YXRpb24uVkVSVElDQUwpIHtcbiAgICAgIHNoaXBFbGVtZW50LnN0eWxlLmdyaWRBdXRvRmxvdyA9ICdyb3cnO1xuICAgIH1cbiAgICBkcmFnR2hvc3RJbWFnZS5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkcmFnR2hvc3RJbWFnZSk7XG4gICAgcmV0dXJuIGRyYWdHaG9zdEltYWdlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRmxlZXQoZmxlZXQsIGF0dHJpYnV0ZXMsIHNoaXBzRHJhZ2dhYmxlID0gdHJ1ZSkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHtcbiAgICAgIGF0dHJpYnV0ZXMsXG4gICAgICBjaGlsZHJlbjogZmxlZXQubWFwKChzaGlwKSA9PiBjcmVhdGVTaGlwKHNoaXAsIHNoaXBzRHJhZ2dhYmxlKSksXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGlwKHNoaXAsIGRyYWdnYWJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBldmVudHMgPSBbXTtcbiAgICBpZiAoZHJhZ2dhYmxlKSB7XG4gICAgICBldmVudHMucHVzaChjcmVhdGVFdmVudCgnZHJhZ3N0YXJ0JywgaGFuZGxlU2V0dXBTaGlwRHJhZ1N0YXJ0KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogJ3NoaXAtY29udGFpbmVyJyxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICB0YWdOYW1lOiAncCcsXG4gICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgY2xhc3M6ICdzaGlwLW5hbWUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDogc2hpcC5uYW1lLFxuICAgICAgICB9KSxcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgY2xhc3M6ICdzaGlwJyxcbiAgICAgICAgICAgICdkYXRhLXNoaXAtaWQnOiBzaGlwLmlkLFxuICAgICAgICAgICAgZHJhZ2dhYmxlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRyZW46ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIGNlbGxzLnB1c2goXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnY2VsbCcsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgICAgICAgfSkoKSxcbiAgICAgICAgICBldmVudHMsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcmtCbG9ja09mQ2VsbHMoXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLFxuICAgIHsgc3RhcnRDb29yZHMsIHNoaXBPcmllbnRhdGlvbiwgc2hpcExlbmd0aCB9LFxuICAgIGNlbGxNYXJrQ2FsbGJhY2tcbiAgKSB7XG4gICAgY29uc3Qgc3RhcnRDZWxsTnVtID0gY29vcmRpbmF0ZXNUb0NlbGxOdW1iZXIoc3RhcnRDb29yZHMsIEdSSURfU0laRSk7XG4gICAgY29uc3Qgc3RlcCA9IHNoaXBPcmllbnRhdGlvbiA9PT0gT3JpZW50YXRpb24uSE9SSVpPTlRBTCA/IDEgOiAxMDtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IHN0YXJ0Q2VsbE51bTsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSwgaiArPSBzdGVwKSB7XG4gICAgICBjb25zdCBjZWxsID0gZ2FtZWJvYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuY2VsbFtkYXRhLWNlbGwtbnVtPVwiJHtqfVwiYFxuICAgICAgKTtcbiAgICAgIGNlbGxNYXJrQ2FsbGJhY2soY2VsbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWFya1ZhbGlkVGFyZ2V0Q2VsbHMoZ2FtZWJvYXJkQ29udGFpbmVyLCBkYXRhKSB7XG4gICAgbWFya0Jsb2NrT2ZDZWxscyhnYW1lYm9hcmRDb250YWluZXIsIGRhdGEsIChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkJyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB1bm1hcmtWYWxpZFRhcmdldENlbGxzKGdhbWVib2FyZENvbnRhaW5lcikge1xuICAgIGdhbWVib2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbC52YWxpZCcpLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcmtTaGlwTG9jYXRpb25DZWxscyhnYW1lYm9hcmRDb250YWluZXIsIGRhdGEpIHtcbiAgICBtYXJrQmxvY2tPZkNlbGxzKGdhbWVib2FyZENvbnRhaW5lciwgZGF0YSwgKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWFya2VkJyk7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLWlkJywgZGF0YS5zaGlwSWQpO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcC1vcmllbnRhdGlvbicsIGRhdGEuc2hpcE9yaWVudGF0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVubWFya1NoaXBMb2NhdGlvbkNlbGxzKGdhbWVib2FyZENvbnRhaW5lciwgc2hpcElkID0gbnVsbCkge1xuICAgIGxldCBzZWxlY3RvclN0cmluZyA9ICcuY2VsbC5tYXJrZWQnO1xuICAgIGlmIChzaGlwSWQpIHtcbiAgICAgIHNlbGVjdG9yU3RyaW5nICs9IGBbZGF0YS1zaGlwLWlkPVwiJHtzaGlwSWR9XCJdYDtcbiAgICB9XG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JTdHJpbmcpLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnbWFya2VkJyk7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpO1xuICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2hpcC1pZCcpO1xuICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2hpcC1vcmllbnRhdGlvbicpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFya0ZsZWV0TG9jYXRpb24oZ2FtZWJvYXJkQ29udGFpbmVyLCBnYW1lYm9hcmQpIHtcbiAgICBnYW1lYm9hcmRcbiAgICAgIC5maWx0ZXIoKGNlbGwpID0+IGNlbGwuc3RhdHVzID09PSBTdGF0dXMuQlVTWSAmJiBjZWxsLnBvc2l0aW9uID09PSAwKVxuICAgICAgLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgbWFya1NoaXBMb2NhdGlvbkNlbGxzKGdhbWVib2FyZENvbnRhaW5lciwge1xuICAgICAgICAgIHN0YXJ0Q29vcmRzOiB7IHg6IGNlbGwueCwgeTogY2VsbC55IH0sXG4gICAgICAgICAgc2hpcElkOiBjZWxsLnNoaXAuaWQsXG4gICAgICAgICAgc2hpcE9yaWVudGF0aW9uOiBjZWxsLm9yaWVudGF0aW9uLFxuICAgICAgICAgIHNoaXBMZW5ndGg6IGNlbGwuc2hpcC5sZW5ndGgsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB1bm1hcmtGbGVldExvY2F0aW9uKGdhbWVib2FyZENvbnRhaW5lcikge1xuICAgIHVubWFya1NoaXBMb2NhdGlvbkNlbGxzKGdhbWVib2FyZENvbnRhaW5lcik7XG4gIH1cblxuICAvLyBBVFRBQ0sgUEhBU0VcblxuICBmdW5jdGlvbiBjcmVhdGVBdHRhY2tQaGFzZShkYXRhKSB7XG4gICAgcGxheWVyT25lR2FtZWJvYXJkQ29udGFpbmVyID0gY3JlYXRlUGxheWVyQ29udGFpbmVyKFxuICAgICAgZGF0YS5nYW1lTW9kZSxcbiAgICAgIGRhdGEucGxheWVyT25lXG4gICAgKTtcbiAgICBwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIgPSBjcmVhdGVQbGF5ZXJDb250YWluZXIoXG4gICAgICBkYXRhLmdhbWVNb2RlLFxuICAgICAgZGF0YS5wbGF5ZXJUd29cbiAgICApO1xuICAgIGN1cnJlbnRBY3RpdmVHYW1lYm9hcmRDb250YWluZXIgPSBkYXRhLnBsYXllck9uZS5hY3RpdmVcbiAgICAgID8gcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyXG4gICAgICA6IHBsYXllck9uZUdhbWVib2FyZENvbnRhaW5lcjtcbiAgICB0dXJuSW5kaWNhdG9yID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiBgdHVybi1pbmRpY2F0b3IkeyFkYXRhLnBsYXllck9uZS5hY3RpdmUgPyAnIGxlZnQnIDogJyd9YCxcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiAnLS0+JyxcbiAgICB9KTtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh7XG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiAnY29udGFpbmVyIGF0dGFjay1waGFzZS1jb250YWluZXInLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXIsXG4gICAgICAgICAgICB0dXJuSW5kaWNhdG9yLFxuICAgICAgICAgICAgcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBjbGFzczogJ2J1dHRvbnMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRyZW46IFtjcmVhdGVMZWF2ZUdhbWVCdXR0b24oKV0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBsYXllckNvbnRhaW5lcihnYW1lTW9kZSwgcGxheWVyRGF0YSkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHtcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6IGBwbGF5ZXItY29udGFpbmVyJHtcbiAgICAgICAgICBzaG91bGRQbGF5ZXJDb250YWluZXJCZUFjdGl2ZShnYW1lTW9kZSwgcGxheWVyRGF0YSkgPyAnIGFjdGl2ZScgOiAnJ1xuICAgICAgICB9YCxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBjbGFzczogJ3BsYXllci1pbmZvJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgdGFnTmFtZTogJ3AnLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwbGF5ZXItbmFtZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGAke3BsYXllckRhdGEubmFtZX0ncyBmbGVldGAsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICB0YWdOYW1lOiAncCcsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ3BsYXllci1zY29yZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGAke3BsYXllckRhdGEuc2NvcmV9YCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBjbGFzczogJ2dhbWVib2FyZC1jb250YWluZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGNyZWF0ZUF0dGFja0dhbWVib2FyZChcbiAgICAgICAgICAgICAgcGxheWVyRGF0YS5nYW1lYm9hcmQsXG4gICAgICAgICAgICAgIHNob3VsZFJlbmRlckZsZWV0TG9jYXRpb24oZ2FtZU1vZGUsIHBsYXllckRhdGEpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3JlYXRlRmxlZXQoXG4gICAgICAgICAgICAgIHBsYXllckRhdGEuZmxlZXQsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ2ZsZWV0IGZsZWV0LXN0YXR1cycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUF0dGFja0dhbWVib2FyZChnYW1lYm9hcmQsIHNob3dTaGlwcykge1xuICAgIGNvbnN0IGV2ZW50cyA9IFtdO1xuICAgIGlmICghc2hvd1NoaXBzKSB7XG4gICAgICBldmVudHMucHVzaChjcmVhdGVFdmVudCgnY2xpY2snLCBoYW5kbGVBdHRhY2tHYW1lYm9hcmRDbGljaykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh7XG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiAnZ2FtZWJvYXJkJyxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogZ2FtZWJvYXJkLm1hcCgoY2VsbCwgY2VsbE51bSkgPT5cbiAgICAgICAgY3JlYXRlR2FtZWJvYXJkQ2VsbChcbiAgICAgICAgICBjZWxsLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdkYXRhLWNlbGwtbnVtJzogY2VsbE51bSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtdLFxuICAgICAgICAgIHNob3dTaGlwc1xuICAgICAgICApXG4gICAgICApLFxuICAgICAgZXZlbnRzLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkUmVuZGVyRmxlZXRMb2NhdGlvbihnYW1lTW9kZSwgcGxheWVyRGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICAoZ2FtZU1vZGUgPT09IEdhbWVNb2RlLlZTX0JPVCAmJiAhcGxheWVyRGF0YS5pc0JvdCkgfHxcbiAgICAgIChnYW1lTW9kZSA9PT0gR2FtZU1vZGUuVlNfRlJJRU5EICYmIHBsYXllckRhdGEuYWN0aXZlKVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRQbGF5ZXJDb250YWluZXJCZUFjdGl2ZShnYW1lTW9kZSwgcGxheWVyRGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICAoZ2FtZU1vZGUgPT09IEdhbWVNb2RlLlZTX0JPVCAmJlxuICAgICAgICAoIXBsYXllckRhdGEuaXNCb3QgfHwgKHBsYXllckRhdGEuaXNCb3QgJiYgcGxheWVyRGF0YS5hY3RpdmUpKSkgfHxcbiAgICAgIChnYW1lTW9kZSA9PT0gR2FtZU1vZGUuVlNfRlJJRU5EICYmIHBsYXllckRhdGEuYWN0aXZlKVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBzd2FwUm9sZXMoZGF0YSkge1xuICAgIGlmIChkYXRhLmdhbWVNb2RlID09PSBHYW1lTW9kZS5WU19CT1QpIHtcbiAgICAgIGlmIChkYXRhLnBsYXllck9uZS5hY3RpdmUpIHtcbiAgICAgICAgcmVtb3ZlR2FtZWJvYXJkQ2xpY2tFdmVudChwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXIpO1xuICAgICAgICBhZGRHYW1lYm9hcmRDbGlja0V2ZW50KHBsYXllclR3b0dhbWVib2FyZENvbnRhaW5lcik7XG4gICAgICAgIHBsYXllclR3b0dhbWVib2FyZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgdHVybkluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdsZWZ0Jyk7XG4gICAgICAgIGN1cnJlbnRBY3RpdmVHYW1lYm9hcmRDb250YWluZXIgPSBwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVHYW1lYm9hcmRDbGlja0V2ZW50KHBsYXllclR3b0dhbWVib2FyZENvbnRhaW5lcik7XG4gICAgICAgIHBsYXllclR3b0dhbWVib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgdHVybkluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG4gICAgICAgIGN1cnJlbnRBY3RpdmVHYW1lYm9hcmRDb250YWluZXIgPSBwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXI7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY3VycmVudEFjdGl2ZUdhbWVib2FyZENvbnRhaW5lci5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICB9KTtcbiAgICAgIH0sIDUwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGF0dGFja2VyID0gbnVsbDtcbiAgICBsZXQgYXR0YWNrZXJHYW1lYm9hcmRDb250YWluZXIgPSBudWxsO1xuICAgIGxldCBvcHBvbmVudEdhbWVib2FyZENvbnRhaW5lciA9IG51bGw7XG5cbiAgICBpZiAoZGF0YS5wbGF5ZXJPbmUuYWN0aXZlKSB7XG4gICAgICBhdHRhY2tlciA9IGRhdGEucGxheWVyT25lO1xuICAgICAgYXR0YWNrZXJHYW1lYm9hcmRDb250YWluZXIgPSBwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXI7XG4gICAgICBvcHBvbmVudEdhbWVib2FyZENvbnRhaW5lciA9IHBsYXllclR3b0dhbWVib2FyZENvbnRhaW5lcjtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0YWNrZXIgPSBkYXRhLnBsYXllclR3bztcbiAgICAgIGF0dGFja2VyR2FtZWJvYXJkQ29udGFpbmVyID0gcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyO1xuICAgICAgb3Bwb25lbnRHYW1lYm9hcmRDb250YWluZXIgPSBwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXI7XG4gICAgfVxuXG4gICAgcGFzc1NjcmVlblRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVuZGVyT3ZlcmxheShjcmVhdGVQYXNzRGV2aWNlU2NyZWVuKGF0dGFja2VyLm5hbWUpKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdW5tYXJrRmxlZXRMb2NhdGlvbihvcHBvbmVudEdhbWVib2FyZENvbnRhaW5lcik7XG4gICAgICBtYXJrRmxlZXRMb2NhdGlvbihhdHRhY2tlckdhbWVib2FyZENvbnRhaW5lciwgYXR0YWNrZXIuZ2FtZWJvYXJkKTtcblxuICAgICAgYWRkR2FtZWJvYXJkQ2xpY2tFdmVudChvcHBvbmVudEdhbWVib2FyZENvbnRhaW5lcik7XG5cbiAgICAgIGlmIChhdHRhY2tlciA9PT0gZGF0YS5wbGF5ZXJPbmUpIHtcbiAgICAgICAgdHVybkluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdsZWZ0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0dXJuSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudEFjdGl2ZUdhbWVib2FyZENvbnRhaW5lciA9IG9wcG9uZW50R2FtZWJvYXJkQ29udGFpbmVyO1xuICAgIH0sIDEyNTApO1xuXG4gICAgcmVtb3ZlR2FtZWJvYXJkQ2xpY2tFdmVudChhdHRhY2tlckdhbWVib2FyZENvbnRhaW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRHYW1lYm9hcmRDbGlja0V2ZW50KGdhbWVib2FyZENvbnRhaW5lcikge1xuICAgIGdhbWVib2FyZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBnYW1lYm9hcmRDb250YWluZXJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUF0dGFja0dhbWVib2FyZENsaWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUdhbWVib2FyZENsaWNrRXZlbnQoZ2FtZWJvYXJkQ29udGFpbmVyKSB7XG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGdhbWVib2FyZENvbnRhaW5lclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQnKVxuICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQXR0YWNrR2FtZWJvYXJkQ2xpY2spO1xuICB9XG5cbiAgLy8gRE9NIEVWRU5UIEhBTkRMRVJTXG5cbiAgZnVuY3Rpb24gaGFuZGxlR2FtZU1vZGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBmb3JtID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcuZ2FtZS1zZXR0aW5ncy1mb3JtJyk7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgY29uc3QgcGxheWVyVHdvQ29udGFpbmVyID1cbiAgICAgIGZvcm0uZWxlbWVudHNbJ3BsYXllci10d28nXS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpO1xuICAgIGlmICh2YWx1ZSA9PT0gR2FtZU1vZGUuVlNfRlJJRU5EKSB7XG4gICAgICBwbGF5ZXJUd29Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IEdhbWVNb2RlLlZTX0JPVCkge1xuICAgICAgcGxheWVyVHdvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdGFydEdhbWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChcbiAgICAgICFmb3JtLmVsZW1lbnRzWydwbGF5ZXItb25lJ10udmFsaWRpdHkudmFsaWQgfHxcbiAgICAgICFmb3JtLmVsZW1lbnRzWydwbGF5ZXItdHdvJ10udmFsaWRpdHkudmFsaWRcbiAgICApIHtcbiAgICAgIHJlbmRlck5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIG1zZzogJ1BsYXllciBuYW1lcyBjYW4gaGF2ZSBtYXhpbXVtIG9mIDE2IGNoYXJhY3RlcnMhJyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBnYW1lTW9kZSA9IHBhcnNlSW50KGZvcm0uZWxlbWVudHNbJ2dhbWUtbW9kZSddLnZhbHVlLCAxMCk7XG4gICAgaWYgKGdhbWVNb2RlICE9PSBHYW1lTW9kZS5WU19GUklFTkQgJiYgZ2FtZU1vZGUgIT09IEdhbWVNb2RlLlZTX0JPVCkge1xuICAgICAgZ2FtZU1vZGUgPSBHYW1lTW9kZS5WU19CT1Q7XG4gICAgfVxuXG4gICAgbGV0IHBsYXllck9uZU5hbWUgPSBmb3JtLmVsZW1lbnRzWydwbGF5ZXItb25lJ10udmFsdWU7XG4gICAgaWYgKHBsYXllck9uZU5hbWUubGVuZ3RoID09PSAwKSB7XG4gICAgICBwbGF5ZXJPbmVOYW1lID0gJ1BsYXllciAxJztcbiAgICB9XG5cbiAgICBsZXQgcGxheWVyVHdvTmFtZSA9IGZvcm0uZWxlbWVudHNbJ3BsYXllci10d28nXS52YWx1ZTtcbiAgICBpZiAoZ2FtZU1vZGUgPT09IEdhbWVNb2RlLlZTX0ZSSUVORCkge1xuICAgICAgaWYgKHBsYXllclR3b05hbWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHBsYXllclR3b05hbWUgPSAnUGxheWVyIDInO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXJUd29OYW1lID0gJ05vb2JvdCc7XG4gICAgfVxuXG4gICAgUHViU3ViLnB1Ymxpc2goU1RBUlRfR0FNRSwge1xuICAgICAgZ2FtZU1vZGUsXG4gICAgICBwbGF5ZXJPbmVOYW1lLFxuICAgICAgcGxheWVyVHdvTmFtZSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNldHVwU2hpcERyYWdTdGFydChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hpcC1pZCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcElkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLWlkJyk7XG4gICAgY29uc3Qgc2hpcE9yaWVudGF0aW9uID1cbiAgICAgIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcC1vcmllbnRhdGlvbicpID8/IE9yaWVudGF0aW9uLkhPUklaT05UQUw7XG5cbiAgICBkYXRhVHJhbnNmZXIgPSB7XG4gICAgICBzaGlwSWQsXG4gICAgICBzaGlwT3JpZW50YXRpb24sXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNldHVwR2FtZWJvYXJkRHJhZ0VudGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgICBpZiAoIWRhdGFUcmFuc2ZlciB8fCAhdGFyZ2V0IHx8ICF0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLWNlbGwtbnVtJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb29yZHMgPSBjZWxsTnVtYmVyVG9Db29yZGluYXRlcyhcbiAgICAgIHBhcnNlSW50KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2VsbC1udW0nKSwgMTApLFxuICAgICAgR1JJRF9TSVpFXG4gICAgKTtcblxuICAgIFB1YlN1Yi5wdWJsaXNoKENIRUNLX0NPT1JESU5BVEVTLCB7XG4gICAgICBzdGFydENvb3JkczogY29vcmRzLFxuICAgICAgc2hpcE9yaWVudGF0aW9uOiBkYXRhVHJhbnNmZXIuc2hpcE9yaWVudGF0aW9uLFxuICAgICAgc2hpcElkOiBkYXRhVHJhbnNmZXIuc2hpcElkLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2V0dXBHYW1lYm9hcmREcmFnT3ZlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTZXR1cEdhbWVib2FyZERyYWdMZWF2ZShldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1jZWxsLW51bScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHVubWFya1ZhbGlkVGFyZ2V0Q2VsbHMoY3VycmVudEFjdGl2ZUdhbWVib2FyZENvbnRhaW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTZXR1cEdhbWVib2FyZERyb3AoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICAgIGlmICghZGF0YVRyYW5zZmVyIHx8ICF0YXJnZXQgfHwgIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtY2VsbC1udW0nKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvb3JkcyA9IGNlbGxOdW1iZXJUb0Nvb3JkaW5hdGVzKFxuICAgICAgcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jZWxsLW51bScpLCAxMCksXG4gICAgICBHUklEX1NJWkVcbiAgICApO1xuXG4gICAgdW5tYXJrVmFsaWRUYXJnZXRDZWxscyhjdXJyZW50QWN0aXZlR2FtZWJvYXJkQ29udGFpbmVyKTtcblxuICAgIFB1YlN1Yi5wdWJsaXNoKFBMQUNFX1NISVAsIHtcbiAgICAgIHN0YXJ0Q29vcmRzOiBjb29yZHMsXG4gICAgICBzaGlwT3JpZW50YXRpb246IGRhdGFUcmFuc2Zlci5zaGlwT3JpZW50YXRpb24sXG4gICAgICBzaGlwSWQ6IGRhdGFUcmFuc2Zlci5zaGlwSWQsXG4gICAgICBvbGRTdGFydENvb3JkczogZGF0YVRyYW5zZmVyLm9sZFN0YXJ0Q29vcmRzLFxuICAgIH0pO1xuICAgIGRhdGFUcmFuc2ZlciA9IG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTZXR1cENlbGxDbGljayhldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zaGlwLWlkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwSWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAtaWQnKTtcbiAgICBjb25zdCBvbGRTaGlwT3JpZW50YXRpb24gPSBwYXJzZUludChcbiAgICAgIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcC1vcmllbnRhdGlvbicpLFxuICAgICAgMTBcbiAgICApO1xuICAgIGNvbnN0IHN0YXJ0VGFyZ2V0Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmNlbGwubWFya2VkW2RhdGEtc2hpcC1pZD1cIiR7c2hpcElkfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IGNvb3JkcyA9IGNlbGxOdW1iZXJUb0Nvb3JkaW5hdGVzKFxuICAgICAgcGFyc2VJbnQoc3RhcnRUYXJnZXRDZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jZWxsLW51bScpLCAxMCksXG4gICAgICBHUklEX1NJWkVcbiAgICApO1xuXG4gICAgUHViU3ViLnB1Ymxpc2goUExBQ0VfU0hJUCwge1xuICAgICAgc3RhcnRDb29yZHM6IGNvb3JkcyxcbiAgICAgIG9sZFN0YXJ0Q29vcmRzOiBjb29yZHMsXG4gICAgICBzaGlwSWQsXG4gICAgICBzaGlwT3JpZW50YXRpb246XG4gICAgICAgIG9sZFNoaXBPcmllbnRhdGlvbiA9PT0gT3JpZW50YXRpb24uSE9SSVpPTlRBTFxuICAgICAgICAgID8gT3JpZW50YXRpb24uVkVSVElDQUxcbiAgICAgICAgICA6IE9yaWVudGF0aW9uLkhPUklaT05UQUwsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTZXR1cENlbGxEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zaGlwLWlkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwSWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAtaWQnKTtcbiAgICBjb25zdCBzaGlwT3JpZW50YXRpb24gPSBwYXJzZUludChcbiAgICAgIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcC1vcmllbnRhdGlvbicpLFxuICAgICAgMTBcbiAgICApO1xuXG4gICAgY2VsbEdob3N0SW1hZ2UgPSBjcmVhdGVDZWxsR2hvc3RJbWFnZShzaGlwSWQsIHNoaXBPcmllbnRhdGlvbik7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShjZWxsR2hvc3RJbWFnZSwgMCwgMCk7XG5cbiAgICBkYXRhVHJhbnNmZXIgPSB7XG4gICAgICBzaGlwSWQsXG4gICAgICBzaGlwT3JpZW50YXRpb24sXG4gICAgICBvbGRTdGFydENvb3JkczogY2VsbE51bWJlclRvQ29vcmRpbmF0ZXMoXG4gICAgICAgIHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2VsbC1udW0nKSwgMTApLFxuICAgICAgICBHUklEX1NJWkVcbiAgICAgICksXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNldHVwQ2VsbERyYWdFbmQoKSB7XG4gICAgaWYgKGNlbGxHaG9zdEltYWdlKSB7XG4gICAgICBjZWxsR2hvc3RJbWFnZS5yZW1vdmUoKTtcbiAgICAgIGNlbGxHaG9zdEltYWdlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBdHRhY2tHYW1lYm9hcmRDbGljayhldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcblxuICAgIGlmICghdGFyZ2V0IHx8IHRhcmdldC5jbGFzc05hbWUuc2VhcmNoKC8obWlzc3xoaXR8c3VuaykvKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb29yZHMgPSBjZWxsTnVtYmVyVG9Db29yZGluYXRlcyhcbiAgICAgIHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2VsbC1udW0nKSwgMTApLFxuICAgICAgR1JJRF9TSVpFXG4gICAgKTtcblxuICAgIFB1YlN1Yi5wdWJsaXNoKEFUVEFDSywgeyBjb29yZHMgfSk7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRpbnVlICovXG5pbXBvcnQge1xuICBnZXRSYW5kb21Db29yZGluYXRlcyxcbiAgZ2V0UmFuZG9tSW50LFxuICBhcmVWYWxpZENvb3JkaW5hdGVzLFxufSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgR1JJRF9TSVpFID0gMTA7XG5cbmV4cG9ydCBjb25zdCBPcmllbnRhdGlvbiA9IE9iamVjdC5mcmVlemUoe1xuICBIT1JJWk9OVEFMOiAwLFxuICBWRVJUSUNBTDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgU3RhdHVzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIEVNUFRZOiAwLFxuICBCVVNZOiAxLFxuICBNSVNTOiAyLFxuICBISVQ6IDMsXG4gIFNVTks6IDQsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBsZXQgZ3JpZCA9IGJ1aWxkR3JpZCgpO1xuICBjb25zdCBmbGVldCA9IG5ldyBTZXQoKTtcblxuICBmdW5jdGlvbiBidWlsZEdyaWQoKSB7XG4gICAgY29uc3QgbmV3R3JpZCA9IFtdO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IEdSSURfU0laRTsgcm93ICs9IDEpIHtcbiAgICAgIG5ld0dyaWQucHVzaChbXSk7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBHUklEX1NJWkU7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIG5ld0dyaWRbcm93XVtjb2x1bW5dID0geyBzdGF0dXM6IFN0YXR1cy5FTVBUWSB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3R3JpZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEdyaWQobXVsdGlkaW1lbnNpb25hbCA9IGZhbHNlKSB7XG4gICAgY29uc3QgZ3JpZENvcHkgPSBncmlkLm1hcCgocm93cykgPT4gcm93cy5zbGljZSgwKSk7XG4gICAgaWYgKG11bHRpZGltZW5zaW9uYWwpIHtcbiAgICAgIHJldHVybiBncmlkQ29weTtcbiAgICB9XG4gICAgcmV0dXJuIGdyaWRDb3B5LmZsYXQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENlbGxEYXRhKHsgeCwgeSB9KSB7XG4gICAgaWYgKCFhcmVWYWxpZENvb3JkaW5hdGVzKHsgeCwgeSB9LCBHUklEX1NJWkUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGdyaWRbeV1beF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGbGVldCgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShmbGVldCk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxjdWxhdGVFbmRDb29yZGluYXRlcyh7IHgsIHkgfSwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpIHtcbiAgICBsZXQgeDIgPSB4O1xuICAgIGxldCB5MiA9IHk7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBPcmllbnRhdGlvbi5IT1JJWk9OVEFMKSB7XG4gICAgICB4MiArPSBzaGlwTGVuZ3RoIC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgeTIgKz0gc2hpcExlbmd0aCAtIDE7XG4gICAgfVxuICAgIHJldHVybiB7IHgyLCB5MiB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2hpcFNwYWNlKHsgeCwgeSwgeDIsIHkyIH0sIGFkamFjZW50ID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XG4gICAgY29uc3QgYWRkSW50ID0gK2FkamFjZW50O1xuICAgIGZvciAobGV0IHJvdyA9IHkgLSBhZGRJbnQ7IHJvdyA8PSB5MiArIGFkZEludDsgcm93ICs9IDEpIHtcbiAgICAgIGlmIChyb3cgPCAwIHx8IHJvdyA+PSBHUklEX1NJWkUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSB4IC0gYWRkSW50OyBjb2x1bW4gPD0geDIgKyBhZGRJbnQ7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIGlmIChjb2x1bW4gPCAwIHx8IGNvbHVtbiA+PSBHUklEX1NJWkUpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb29yZGluYXRlcy5wdXNoKHsgeDogY29sdW1uLCB5OiByb3cgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3BhY2VGcmVlKHsgeCwgeSwgeDIsIHkyIH0sIHNoaXBJZCA9IG51bGwpIHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldFNoaXBTcGFjZSh7IHgsIHksIHgyLCB5MiB9KTtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXMuZXZlcnkoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IGNlbGwgPSBncmlkW2Nvb3JkaW5hdGUueV1bY29vcmRpbmF0ZS54XTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGNlbGwuc3RhdHVzID09PSBTdGF0dXMuRU1QVFkgfHxcbiAgICAgICAgKHNoaXBJZCAmJiBjZWxsLnN0YXR1cyA9PT0gU3RhdHVzLkJVU1kgJiYgY2VsbC5zaGlwLmlkID09PSBzaGlwSWQpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuUGxhY2VTaGlwKHsgeCwgeSB9LCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcElkID0gbnVsbCkge1xuICAgIGlmICghYXJlVmFsaWRDb29yZGluYXRlcyh7IHgsIHkgfSwgR1JJRF9TSVpFKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB7IHgyLCB5MiB9ID0gY2FsY3VsYXRlRW5kQ29vcmRpbmF0ZXMoXG4gICAgICB7IHgsIHkgfSxcbiAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgc2hpcExlbmd0aFxuICAgICk7XG4gICAgaWYgKFxuICAgICAgIWFyZVZhbGlkQ29vcmRpbmF0ZXMoeyB4OiB4MiwgeTogeTIgfSwgR1JJRF9TSVpFKSB8fFxuICAgICAgIWlzU3BhY2VGcmVlKHsgeCwgeSwgeDIsIHkyIH0sIHNoaXBJZClcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcCh7IHgsIHkgfSwgb3JpZW50YXRpb24sIHNoaXApIHtcbiAgICBpZiAoIWNhblBsYWNlU2hpcCh7IHgsIHkgfSwgb3JpZW50YXRpb24sIHNoaXAubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHsgeDIsIHkyIH0gPSBjYWxjdWxhdGVFbmRDb29yZGluYXRlcyhcbiAgICAgIHsgeCwgeSB9LFxuICAgICAgb3JpZW50YXRpb24sXG4gICAgICBzaGlwLmxlbmd0aFxuICAgICk7XG5cbiAgICBsZXQgcG9zaXRpb24gPSAwO1xuICAgIGZvciAobGV0IHJvdyA9IHk7IHJvdyA8PSB5Mjsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IHg7IGNvbHVtbiA8PSB4MjsgY29sdW1uICs9IDEpIHtcbiAgICAgICAgZ3JpZFtyb3ddW2NvbHVtbl0gPSB7XG4gICAgICAgICAgc2hpcCxcbiAgICAgICAgICB4LFxuICAgICAgICAgIHksXG4gICAgICAgICAgeDIsXG4gICAgICAgICAgeTIsXG4gICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgc3RhdHVzOiBTdGF0dXMuQlVTWSxcbiAgICAgICAgfTtcbiAgICAgICAgcG9zaXRpb24gKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZmxlZXQuYWRkKHNoaXApO1xuICAgIHJldHVybiBzaGlwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbShuZXdGbGVldCkge1xuICAgIGdyaWQgPSBidWlsZEdyaWQoKTtcbiAgICBmbGVldC5jbGVhcigpO1xuICAgIG5ld0ZsZWV0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGZvciAoOzspIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRSYW5kb21Db29yZGluYXRlcyhHUklEX1NJWkUpO1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IE9iamVjdC52YWx1ZXMoT3JpZW50YXRpb24pW2dldFJhbmRvbUludCgyKV07XG4gICAgICAgIGlmIChwbGFjZVNoaXAoY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uLCBzaGlwKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlU2hpcCh7IHgsIHkgfSwgeyBpLCBqIH0sIG9yaWVudGF0aW9uID0gbnVsbCkge1xuICAgIGNvbnN0IGNlbGxEYXRhID0gZ2V0Q2VsbERhdGEoeyB4LCB5IH0pO1xuICAgIGlmICghY2VsbERhdGEgfHwgY2VsbERhdGEuc3RhdHVzID09PSBTdGF0dXMuRU1QVFkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAhY2FuUGxhY2VTaGlwKFxuICAgICAgICB7IHg6IGksIHk6IGogfSxcbiAgICAgICAgb3JpZW50YXRpb24gPz8gY2VsbERhdGEub3JpZW50YXRpb24sXG4gICAgICAgIGNlbGxEYXRhLnNoaXAubGVuZ3RoLFxuICAgICAgICBjZWxsRGF0YS5zaGlwLmlkXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY29vcmRzID0gZ2V0U2hpcFNwYWNlKGNlbGxEYXRhLCBmYWxzZSk7XG4gICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBncmlkW2Nvb3JkLnldW2Nvb3JkLnhdID0geyBzdGF0dXM6IFN0YXR1cy5FTVBUWSB9O1xuICAgIH0pO1xuICAgIHJldHVybiBwbGFjZVNoaXAoXG4gICAgICB7IHg6IGksIHk6IGogfSxcbiAgICAgIG9yaWVudGF0aW9uID8/IGNlbGxEYXRhLm9yaWVudGF0aW9uLFxuICAgICAgY2VsbERhdGEuc2hpcFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiByb3RhdGVTaGlwKHsgeCwgeSB9KSB7XG4gICAgY29uc3QgY2VsbERhdGEgPSBnZXRDZWxsRGF0YSh7IHgsIHkgfSk7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPVxuICAgICAgY2VsbERhdGEub3JpZW50YXRpb24gPT09IE9yaWVudGF0aW9uLkhPUklaT05UQUxcbiAgICAgICAgPyBPcmllbnRhdGlvbi5WRVJUSUNBTFxuICAgICAgICA6IE9yaWVudGF0aW9uLkhPUklaT05UQUw7XG4gICAgcmV0dXJuIG1vdmVTaGlwKHsgeCwgeSB9LCB7IGk6IHgsIGo6IHkgfSwgb3JpZW50YXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh7IHgsIHkgfSkge1xuICAgIGlmICghYXJlVmFsaWRDb29yZGluYXRlcyh7IHgsIHkgfSwgR1JJRF9TSVpFKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY2VsbCA9IGdyaWRbeV1beF07XG4gICAgaWYgKGNlbGwuc3RhdHVzID09PSBTdGF0dXMuRU1QVFkpIHtcbiAgICAgIGNlbGwuc3RhdHVzID0gU3RhdHVzLk1JU1M7XG4gICAgICByZXR1cm4geyBzdGF0dXM6IFN0YXR1cy5NSVNTIH07XG4gICAgfVxuXG4gICAgaWYgKGNlbGwuc3RhdHVzID09PSBTdGF0dXMuQlVTWSkge1xuICAgICAgY29uc3QgeyBzaGlwIH0gPSBjZWxsO1xuICAgICAgc2hpcC5oaXQoY2VsbC5wb3NpdGlvbik7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldFNoaXBTcGFjZShjZWxsKTtcbiAgICAgICAgY29uc3Qgc2hpcENvb3JkcyA9IGNvb3JkaW5hdGVzLmZpbHRlcigoY29vcmQpID0+IHtcbiAgICAgICAgICBjb25zdCBzaGlwQ2VsbCA9IGdyaWRbY29vcmQueV1bY29vcmQueF07XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgc2hpcENlbGwuc3RhdHVzID09PSBTdGF0dXMuQlVTWSB8fFxuICAgICAgICAgICAgc2hpcENlbGwuc3RhdHVzID09PSBTdGF0dXMuSElUXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzaGlwQ2VsbC5zdGF0dXMgPSBTdGF0dXMuU1VOSztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBhZGphY2VudENvb3JkcyA9IGNvb3JkaW5hdGVzLmZpbHRlcigoY29vcmQpID0+IHtcbiAgICAgICAgICBjb25zdCBhZGphY2VudENlbGwgPSBncmlkW2Nvb3JkLnldW2Nvb3JkLnhdO1xuICAgICAgICAgIGlmIChhZGphY2VudENlbGwuc3RhdHVzICE9PSBTdGF0dXMuU1VOSykge1xuICAgICAgICAgICAgYWRqYWNlbnRDZWxsLnN0YXR1cyA9IFN0YXR1cy5NSVNTO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2hpcCxcbiAgICAgICAgICBzdGF0dXM6IFN0YXR1cy5TVU5LLFxuICAgICAgICAgIHNoaXBDb29yZHMsXG4gICAgICAgICAgYWRqYWNlbnRDb29yZHMsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBjZWxsLnN0YXR1cyA9IFN0YXR1cy5ISVQ7XG4gICAgICByZXR1cm4geyBzdGF0dXM6IFN0YXR1cy5ISVQgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRmxlZXRTdW5rKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBmbGVldCkge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldEdyaWQsXG4gICAgZ2V0Q2VsbERhdGEsXG4gICAgZ2V0RmxlZXQsXG4gICAgY2FuUGxhY2VTaGlwLFxuICAgIHBsYWNlU2hpcCxcbiAgICBwbGFjZVNoaXBzUmFuZG9tLFxuICAgIG1vdmVTaGlwLFxuICAgIHJvdGF0ZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBpc0ZsZWV0U3VuayxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGFyZVZhbGlkQ29vcmRpbmF0ZXMsIGdldFJhbmRvbUludCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcih7IG5hbWUgfSkge1xuICBsZXQgc2NvcmUgPSAwO1xuICBsZXQgYWN0aXZlID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZ2V0U2NvcmUoKSB7XG4gICAgcmV0dXJuIHNjb3JlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0U2NvcmUobmV3U2NvcmUpIHtcbiAgICBzY29yZSA9IG5ld1Njb3JlO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5jcmVtZW50U2NvcmUoKSB7XG4gICAgc2NvcmUgKz0gMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiBhY3RpdmU7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBY3RpdmUobmV3U3RhdGUpIHtcbiAgICBhY3RpdmUgPSBuZXdTdGF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZSgpIHtcbiAgICBhY3RpdmUgPSAhYWN0aXZlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc0JvdDogZmFsc2UsXG4gICAgbmFtZSxcbiAgICBnZXRTY29yZSxcbiAgICBzZXRTY29yZSxcbiAgICBpbmNyZW1lbnRTY29yZSxcbiAgICBpc0FjdGl2ZSxcbiAgICBzZXRBY3RpdmUsXG4gICAgdG9nZ2xlQWN0aXZlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCb3QocGxheWVyKSB7XG4gIGxldCBoaXRDb3VudCA9IDA7XG4gIGxldCBpbml0aWFsSGl0TW92ZSA9IG51bGw7XG4gIGxldCBwbGF5ZWRNb3ZlcyA9IFtdO1xuICBsZXQgcG9zc2libGVNb3ZlcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIG5vTW9yZVZhcmlhdGlvbnMoZ3JpZFNpemUpIHtcbiAgICByZXR1cm4gZ3JpZFNpemUgKiBncmlkU2l6ZSA8PSBwbGF5ZWRNb3Zlcy5sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBhbHJlYWR5UGxheWVkKG1vdmUpIHtcbiAgICByZXR1cm4gcGxheWVkTW92ZXMuZmluZCgoeyB4LCB5IH0pID0+IHggPT09IG1vdmUueCAmJiB5ID09PSBtb3ZlLnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tTW92ZShncmlkU2l6ZSkge1xuICAgIGNvbnN0IG1vdmUgPSB7XG4gICAgICB4OiBnZXRSYW5kb21JbnQoZ3JpZFNpemUpLFxuICAgICAgeTogZ2V0UmFuZG9tSW50KGdyaWRTaXplKSxcbiAgICB9O1xuICAgIGlmICghYWxyZWFkeVBsYXllZChtb3ZlKSkge1xuICAgICAgcmV0dXJuIG1vdmU7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21Nb3ZlKGdyaWRTaXplKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1vdmUoZ3JpZFNpemUpIHtcbiAgICBpZiAobm9Nb3JlVmFyaWF0aW9ucyhncmlkU2l6ZSkpIHtcbiAgICAgIHJldHVybiB7IHg6IG51bGwsIHk6IG51bGwgfTtcbiAgICB9XG5cbiAgICBsZXQgbW92ZTtcbiAgICBpZiAocG9zc2libGVNb3Zlcy5sZW5ndGggPiAwKSB7XG4gICAgICBbbW92ZV0gPSBwb3NzaWJsZU1vdmVzLnNwbGljZShnZXRSYW5kb21JbnQocG9zc2libGVNb3Zlcy5sZW5ndGgpLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW92ZSA9IGdldFJhbmRvbU1vdmUoZ3JpZFNpemUpO1xuICAgIH1cbiAgICBwbGF5ZWRNb3Zlcy5wdXNoKG1vdmUpO1xuICAgIHJldHVybiBtb3ZlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVVcERpcmVjdGlvbihtb3ZlKSB7XG4gICAgcmV0dXJuIHsgeDogbW92ZS54LCB5OiBtb3ZlLnkgLSAxLCBkaXJlY3Rpb246ICd1cCcgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlRG93bkRpcmVjdGlvbihtb3ZlKSB7XG4gICAgcmV0dXJuIHsgeDogbW92ZS54LCB5OiBtb3ZlLnkgKyAxLCBkaXJlY3Rpb246ICdkb3duJyB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVMZWZ0RGlyZWN0aW9uKG1vdmUpIHtcbiAgICByZXR1cm4geyB4OiBtb3ZlLnggLSAxLCB5OiBtb3ZlLnksIGRpcmVjdGlvbjogJ2xlZnQnIH07XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVJpZ2h0RGlyZWN0aW9uKG1vdmUpIHtcbiAgICByZXR1cm4geyB4OiBtb3ZlLnggKyAxLCB5OiBtb3ZlLnksIGRpcmVjdGlvbjogJ3JpZ2h0JyB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVQb3NzaWJsZU1vdmVzKG1vdmUsIGdyaWRTaXplLCByZXNldCA9IGZhbHNlKSB7XG4gICAgaWYgKCFtb3ZlLmRpcmVjdGlvbikge1xuICAgICAgY29uc3QgdXAgPSBnZW5lcmF0ZVVwRGlyZWN0aW9uKG1vdmUpO1xuICAgICAgaWYgKGFyZVZhbGlkQ29vcmRpbmF0ZXModXAsIGdyaWRTaXplKSAmJiAhYWxyZWFkeVBsYXllZCh1cCkpIHtcbiAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHVwKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZG93biA9IGdlbmVyYXRlRG93bkRpcmVjdGlvbihtb3ZlKTtcbiAgICAgIGlmIChhcmVWYWxpZENvb3JkaW5hdGVzKGRvd24sIGdyaWRTaXplKSAmJiAhYWxyZWFkeVBsYXllZChkb3duKSkge1xuICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goZG93bik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxlZnQgPSBnZW5lcmF0ZUxlZnREaXJlY3Rpb24obW92ZSk7XG4gICAgICBpZiAoYXJlVmFsaWRDb29yZGluYXRlcyhsZWZ0LCBncmlkU2l6ZSkgJiYgIWFscmVhZHlQbGF5ZWQobGVmdCkpIHtcbiAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKGxlZnQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByaWdodCA9IGdlbmVyYXRlUmlnaHREaXJlY3Rpb24obW92ZSk7XG4gICAgICBpZiAoYXJlVmFsaWRDb29yZGluYXRlcyhyaWdodCwgZ3JpZFNpemUpICYmICFhbHJlYWR5UGxheWVkKHJpZ2h0KSkge1xuICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2gocmlnaHQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFyZXNldCkge1xuICAgICAgaWYgKG1vdmUuZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICAgIGNvbnN0IHVwID0gZ2VuZXJhdGVVcERpcmVjdGlvbihtb3ZlKTtcbiAgICAgICAgaWYgKGFyZVZhbGlkQ29vcmRpbmF0ZXModXAsIGdyaWRTaXplKSAmJiAhYWxyZWFkeVBsYXllZCh1cCkpIHtcbiAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2godXApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1vdmUuZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgY29uc3QgZG93biA9IGdlbmVyYXRlRG93bkRpcmVjdGlvbihtb3ZlKTtcbiAgICAgICAgaWYgKGFyZVZhbGlkQ29vcmRpbmF0ZXMoZG93biwgZ3JpZFNpemUpICYmICFhbHJlYWR5UGxheWVkKGRvd24pKSB7XG4gICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKGRvd24pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1vdmUuZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IGdlbmVyYXRlTGVmdERpcmVjdGlvbihtb3ZlKTtcbiAgICAgICAgaWYgKGFyZVZhbGlkQ29vcmRpbmF0ZXMobGVmdCwgZ3JpZFNpemUpICYmICFhbHJlYWR5UGxheWVkKGxlZnQpKSB7XG4gICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKGxlZnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1vdmUuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZ2VuZXJhdGVSaWdodERpcmVjdGlvbihtb3ZlKTtcbiAgICAgICAgaWYgKGFyZVZhbGlkQ29vcmRpbmF0ZXMocmlnaHQsIGdyaWRTaXplKSAmJiAhYWxyZWFkeVBsYXllZChyaWdodCkpIHtcbiAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2gocmlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc3NpYmxlTW92ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAobW92ZS5kaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKGdlbmVyYXRlRG93bkRpcmVjdGlvbihpbml0aWFsSGl0TW92ZSkpO1xuICAgICAgfSBlbHNlIGlmIChtb3ZlLmRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChnZW5lcmF0ZVVwRGlyZWN0aW9uKGluaXRpYWxIaXRNb3ZlKSk7XG4gICAgICB9IGVsc2UgaWYgKG1vdmUuZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKGdlbmVyYXRlUmlnaHREaXJlY3Rpb24oaW5pdGlhbEhpdE1vdmUpKTtcbiAgICAgIH0gZWxzZSBpZiAobW92ZS5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKGdlbmVyYXRlTGVmdERpcmVjdGlvbihpbml0aWFsSGl0TW92ZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxhc3RNb3ZlRmVlZGJhY2soYXR0YWNrLCBncmlkU2l6ZSkge1xuICAgIGNvbnN0IGxhc3RNb3ZlID0gcGxheWVkTW92ZXNbcGxheWVkTW92ZXMubGVuZ3RoIC0gMV07XG4gICAgaWYgKGF0dGFjay5zdGF0dXMgPT09IFN0YXR1cy5NSVNTKSB7XG4gICAgICBpZiAoaGl0Q291bnQgPiAxKSB7XG4gICAgICAgIHBvc3NpYmxlTW92ZXMgPSBbXTtcbiAgICAgICAgY29uc3QgbGFzdEhpdE1vdmUgPSBwbGF5ZWRNb3Zlc1twbGF5ZWRNb3Zlcy5sZW5ndGggLSAyXTtcbiAgICAgICAgZ2VuZXJhdGVQb3NzaWJsZU1vdmVzKGxhc3RIaXRNb3ZlLCBncmlkU2l6ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhdHRhY2suc3RhdHVzID09PSBTdGF0dXMuSElUKSB7XG4gICAgICBoaXRDb3VudCArPSAxO1xuICAgICAgaWYgKGhpdENvdW50ID09PSAxKSB7XG4gICAgICAgIGluaXRpYWxIaXRNb3ZlID0gbGFzdE1vdmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3NzaWJsZU1vdmVzID0gW107XG4gICAgICB9XG4gICAgICBnZW5lcmF0ZVBvc3NpYmxlTW92ZXMobGFzdE1vdmUsIGdyaWRTaXplKTtcbiAgICB9IGVsc2UgaWYgKGF0dGFjay5zdGF0dXMgPT09IFN0YXR1cy5TVU5LKSB7XG4gICAgICBoaXRDb3VudCA9IDA7XG4gICAgICBwb3NzaWJsZU1vdmVzID0gW107XG4gICAgICBpbml0aWFsSGl0TW92ZSA9IG51bGw7XG4gICAgICBhdHRhY2suYWRqYWNlbnRDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgaWYgKCFhbHJlYWR5UGxheWVkKGNvb3JkKSkge1xuICAgICAgICAgIHBsYXllZE1vdmVzLnB1c2goY29vcmQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckhpc3RvcnkoKSB7XG4gICAgcGxheWVkTW92ZXMgPSBbXTtcbiAgICBoaXRDb3VudCA9IDA7XG4gICAgaW5pdGlhbEhpdE1vdmUgPSBudWxsO1xuICAgIHBvc3NpYmxlTW92ZXMgPSBbXTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4ucGxheWVyLFxuICAgIGlzQm90OiB0cnVlLFxuICAgIGdldE1vdmUsXG4gICAgbGFzdE1vdmVGZWVkYmFjayxcbiAgICBjbGVhckhpc3RvcnksXG4gIH07XG59XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcCh7IG5hbWUsIGxlbmd0aCB9KSB7XG4gIGNvbnN0IGlkID0gdXVpZHY0KCk7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSk7XG5cbiAgZnVuY3Rpb24gZ2V0UG9zaXRpb25zKCkge1xuICAgIHJldHVybiBwb3NpdGlvbnMuc2xpY2UoMCk7XG4gIH1cblxuICBmdW5jdGlvbiBoaXQocG9zaXRpb24pIHtcbiAgICBwb3NpdGlvbnNbcG9zaXRpb25dID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICByZXR1cm4gcG9zaXRpb25zLmV2ZXJ5KChwb3NpdGlvbikgPT4gcG9zaXRpb24pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBuYW1lLFxuICAgIGxlbmd0aCxcbiAgICBnZXRQb3NpdGlvbnMsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBwaXBlKC4uLmZucykge1xuICByZXR1cm4gKGluaXRpYWxBcmd1bWVudCkgPT5cbiAgICBmbnMucmVkdWNlKChjdXJyZW50QXJndW1lbnQsIGZ1bikgPT4gZnVuKGN1cnJlbnRBcmd1bWVudCksIGluaXRpYWxBcmd1bWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWF4SW50KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhJbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmRpbmF0ZXMoZ3JpZFNpemUpIHtcbiAgcmV0dXJuIHtcbiAgICB4OiBnZXRSYW5kb21JbnQoZ3JpZFNpemUpLFxuICAgIHk6IGdldFJhbmRvbUludChncmlkU2l6ZSksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVWYWxpZENvb3JkaW5hdGVzKHsgeCwgeSB9LCBncmlkU2l6ZSkge1xuICByZXR1cm4geCA+PSAwICYmIHggPCBncmlkU2l6ZSAmJiB5ID49IDAgJiYgeSA8IGdyaWRTaXplO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29vcmRpbmF0ZXNUb0NlbGxOdW1iZXIoeyB4LCB5IH0sIGdyaWRTaXplKSB7XG4gIHJldHVybiB5ICogZ3JpZFNpemUgKyB4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2VsbE51bWJlclRvQ29vcmRpbmF0ZXMoY2VsbE51bWJlciwgZ3JpZFNpemUpIHtcbiAgcmV0dXJuIHtcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQ5NDk4M1xuICAgIHg6IGNlbGxOdW1iZXIgJSBncmlkU2l6ZSxcbiAgICB5OiBNYXRoLmZsb29yKGNlbGxOdW1iZXIgLyBncmlkU2l6ZSksXG4gIH07XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIFB1YlN1YiA9IHt9O1xuXG4gICAgaWYgKHJvb3QuUHViU3ViKSB7XG4gICAgICAgIFB1YlN1YiA9IHJvb3QuUHViU3ViO1xuICAgICAgICBjb25zb2xlLndhcm4oXCJQdWJTdWIgYWxyZWFkeSBsb2FkZWQsIHVzaW5nIGV4aXN0aW5nIHZlcnNpb25cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5QdWJTdWIgPSBQdWJTdWI7XG4gICAgICAgIGZhY3RvcnkoUHViU3ViKTtcbiAgICB9XG4gICAgLy8gQ29tbW9uSlMgYW5kIE5vZGUuanMgbW9kdWxlIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgaWYgKG1vZHVsZSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBQdWJTdWI7IC8vIE5vZGUuanMgc3BlY2lmaWMgYG1vZHVsZS5leHBvcnRzYFxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydHMuUHViU3ViID0gUHViU3ViOyAvLyBDb21tb25KUyBtb2R1bGUgMS4xLjEgc3BlY1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBQdWJTdWI7IC8vIENvbW1vbkpTXG4gICAgfVxuICAgIC8vIEFNRCBzdXBwb3J0XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpe1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBQdWJTdWI7IH0pO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG4gICAgfVxuXG59KCggdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93ICkgfHwgdGhpcywgZnVuY3Rpb24gKFB1YlN1Yil7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG1lc3NhZ2VzID0ge30sXG4gICAgICAgIGxhc3RVaWQgPSAtMSxcbiAgICAgICAgQUxMX1NVQlNDUklCSU5HX01TRyA9ICcqJztcblxuICAgIGZ1bmN0aW9uIGhhc0tleXMob2JqKXtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiBvYmope1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRocm93cyB0aGUgcGFzc2VkIGV4Y2VwdGlvbiwgZm9yIHVzZSBhcyBhcmd1bWVudCBmb3Igc2V0VGltZW91dFxuICAgICAqIEBhbGlhcyB0aHJvd0V4Y2VwdGlvblxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGV4IEFuIEVycm9yIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRocm93RXhjZXB0aW9uKCBleCApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVUaHJvd0V4Y2VwdGlvbigpe1xuICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgfSBjYXRjaCggZXggKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIHRocm93RXhjZXB0aW9uKCBleCApLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGl2ZXJNZXNzYWdlKCBvcmlnaW5hbE1lc3NhZ2UsIG1hdGNoZWRNZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHZhciBzdWJzY3JpYmVycyA9IG1lc3NhZ2VzW21hdGNoZWRNZXNzYWdlXSxcbiAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyID0gaW1tZWRpYXRlRXhjZXB0aW9ucyA/IGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMgOiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyxcbiAgICAgICAgICAgIHM7XG5cbiAgICAgICAgaWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbWF0Y2hlZE1lc3NhZ2UgKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdWJzY3JpYmVycywgcykpe1xuICAgICAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyKCBzdWJzY3JpYmVyc1tzXSwgb3JpZ2luYWxNZXNzYWdlLCBkYXRhICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkZWxpdmVyTmFtZXNwYWNlZCgpe1xuICAgICAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgICAgIC8vIGRlbGl2ZXIgdGhlIG1lc3NhZ2UgYXMgaXQgaXMgbm93XG4gICAgICAgICAgICBkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gdHJpbSB0aGUgaGllcmFyY2h5IGFuZCBkZWxpdmVyIG1lc3NhZ2UgdG8gZWFjaCBsZXZlbFxuICAgICAgICAgICAgd2hpbGUoIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgICAgICBkZWxpdmVyTWVzc2FnZSggbWVzc2FnZSwgdG9waWMsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgQUxMX1NVQlNDUklCSU5HX01TRywgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IoIG1lc3NhZ2UgKSB7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKTtcblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBoYXNEaXJlY3RTdWJzY3JpYmVyc0Zvcih0b3BpYykgfHwgaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IoQUxMX1NVQlNDUklCSU5HX01TRyksXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICB3aGlsZSAoICFmb3VuZCAmJiBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG4gICAgICAgICAgICBmb3VuZCA9IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKHRvcGljKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBzeW5jLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgdmFyIGRlbGl2ZXIgPSBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICksXG4gICAgICAgICAgICBoYXNTdWJzY3JpYmVycyA9IG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApO1xuXG4gICAgICAgIGlmICggIWhhc1N1YnNjcmliZXJzICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN5bmMgPT09IHRydWUgKXtcbiAgICAgICAgICAgIGRlbGl2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlIHN5bmNocm9ub3VzbHksIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoU3luY1xuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2hTeW5jID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHRydWUsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2UuIEV2ZXJ5IHJldHVybmVkIHRva2VuIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIHN0b3JlZCBpZiB5b3UgbmVlZCB0byB1bnN1YnNjcmliZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFN0cmluZyB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIGlmICggdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICAvLyBtZXNzYWdlIGlzIG5vdCByZWdpc3RlcmVkIHlldFxuICAgICAgICBpZiAoICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtZXNzYWdlICkgKXtcbiAgICAgICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjaW5nIHRva2VuIGFzIFN0cmluZywgdG8gYWxsb3cgZm9yIGZ1dHVyZSBleHBhbnNpb25zIHdpdGhvdXQgYnJlYWtpbmcgdXNhZ2VcbiAgICAgICAgLy8gYW5kIGFsbG93IGZvciBlYXN5IHVzZSBhcyBrZXkgbmFtZXMgZm9yIHRoZSAnbWVzc2FnZXMnIG9iamVjdFxuICAgICAgICB2YXIgdG9rZW4gPSAndWlkXycgKyBTdHJpbmcoKytsYXN0VWlkKTtcbiAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV1bdG9rZW5dID0gZnVuYztcblxuICAgICAgICAvLyByZXR1cm4gdG9rZW4gZm9yIHVuc3Vic2NyaWJpbmdcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH07XG5cbiAgICBQdWJTdWIuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24oIGZ1bmMgKXtcbiAgICAgICAgcmV0dXJuIFB1YlN1Yi5zdWJzY3JpYmUoQUxMX1NVQlNDUklCSU5HX01TRywgZnVuYyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2Ugb25jZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBQdWJTdWIgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmVPbmNlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSggbWVzc2FnZSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIGJlZm9yZSBmdW5jIGFwcGx5LCB1bnN1YnNjcmliZSBtZXNzYWdlXG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoIHRva2VuICk7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQdWJTdWI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgc3Vic2NyaXB0aW9uc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyQWxsU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyQWxsU3Vic2NyaXB0aW9ucygpe1xuICAgICAgICBtZXNzYWdlcyA9IHt9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IGludCB9XG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyU3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpe1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAgIENvdW50IHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjb3VudFN1YnNjcmlwdGlvbnNcbiAgICAgKiBAcmV0dXJuIHsgQXJyYXkgfVxuICAgICovXG4gICAgUHViU3ViLmNvdW50U3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNvdW50U3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHRva2VuIGluIG1lc3NhZ2VzW21dKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgICBHZXRzIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBnZXRTdWJzY3JpcHRpb25zXG4gICAgKi9cbiAgICBQdWJTdWIuZ2V0U3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGdldFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaChtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBzdWJzY3JpcHRpb25zXG4gICAgICpcbiAgICAgKiAtIFdoZW4gcGFzc2VkIGEgdG9rZW4sIHJlbW92ZXMgYSBzcGVjaWZpYyBzdWJzY3JpcHRpb24uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIHRvcGljLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IHRvcGljIChoaWVyYXJjaHkpXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIHwgRnVuY3Rpb24gfSB2YWx1ZSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cbiAgICAgKiB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCdteXRvcGljJywgbXlGdW5jKTtcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKG15RnVuYyk7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyBmcm9tIGEgdG9waWNcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUoJ215dG9waWMnKTtcbiAgICAgKi9cbiAgICBQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgIHZhciBkZXNjZW5kYW50VG9waWNFeGlzdHMgPSBmdW5jdGlvbih0b3BpYykge1xuICAgICAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDAgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgZGVzY2VuZGFudCBvZiB0aGUgdG9waWMgZXhpc3RzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNUb3BpYyAgICA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIHZhbHVlKSB8fCBkZXNjZW5kYW50VG9waWNFeGlzdHModmFsdWUpICksXG4gICAgICAgICAgICBpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIG0sIG1lc3NhZ2UsIHQ7XG5cbiAgICAgICAgaWYgKGlzVG9waWMpe1xuICAgICAgICAgICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG0gKSApe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuICAgICAgICAgICAgICAgIGlmICggaXNUb2tlbiAmJiBtZXNzYWdlW3ZhbHVlXSApe1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbnMgYXJlIHVuaXF1ZSwgc28gd2UgY2FuIGp1c3Qgc3RvcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIHQgaW4gbWVzc2FnZSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCB0KSAmJiBtZXNzYWdlW3RdID09PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKTtcbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsImltcG9ydCAnLi4vY3NzL2luZGV4LmNzcyc7XG5pbXBvcnQgR2FtZVVpIGZyb20gJy4vZ2FtZVVpJztcbmltcG9ydCBHYW1lRGF0YSBmcm9tICcuL2dhbWVEYXRhJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgR2FtZVVpKCk7XG4gIEdhbWVEYXRhKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJERUZBVUxUX1RJTUlORyIsImR1cmF0aW9uIiwiUE9QX0lOIiwib3BhY2l0eSIsInRyYW5zZm9ybSIsIlpPT01fSU4iLCJaT09NX09VVCIsIlNMSURFX09VVF9MRUZUIiwiU0xJREVfT1VUX1JJR0hUIiwiU0xJREVfSU5fUklHSFQiLCJTTElERV9JTl9MRUZUIiwiU1RBUlRfR0FNRSIsIlN5bWJvbCIsIkRJU1BMQVlfU0VUVVBfUEhBU0UiLCJDSEVDS19DT09SRElOQVRFUyIsIkNPT1JESU5BVEVTX0ZSRUUiLCJQTEFDRV9TSElQIiwiUExBQ0VNRU5UX1ZBTElEIiwiUExBQ0VfU0hJUFNfUkFORE9NIiwiU0VUVVBfUEhBU0VfTkVYVCIsIlNFVFVQX1BIQVNFX0lOQ09NUExFVEUiLCJESVNQTEFZX0FUVEFDS19QSEFTRSIsIkFUVEFDSyIsIk1JU1MiLCJISVQiLCJTVU5LIiwiRkxFRVRfR09ORSIsIk5FV19ST1VORCIsIlJFU0VUX0dBTUUiLCJQdWJTdWIiLCJHYW1lYm9hcmQiLCJHUklEX1NJWkUiLCJTdGF0dXMiLCJTaGlwIiwiUGxheWVyIiwiaXNCb3QiLCJwaXBlIiwiU0hJUFNfREFUQSIsIkdhbWVNb2RlIiwiT2JqZWN0IiwiZnJlZXplIiwiVlNfRlJJRU5EIiwiVlNfQk9UIiwiR2FtZURhdGEiLCJzdGF0ZSIsImdhbWVNb2RlIiwicGxheWVyT25lIiwicGxheWVyVHdvIiwiYXZhaWxhYmxlRmxlZXQiLCJjdXJyZW50U2V0dXBQbGF5ZXIiLCJjdXJyZW50QXR0YWNrZXIiLCJjdXJyZW50T3Bwb25lbnQiLCJzdWJzY3JpYmUiLCJfIiwiZGF0YSIsIm5hbWUiLCJwbGF5ZXJPbmVOYW1lIiwiZ2FtZWJvYXJkIiwicGxheWVyVHdvTmFtZSIsImdlbmVyYXRlRmxlZXQiLCJwdWJsaXNoIiwicGxheWVyTmFtZSIsImdldEdyaWQiLCJmbGVldCIsInNoaXAiLCJnZXRTaGlwIiwic2hpcElkIiwiY2FuUGxhY2VTaGlwIiwic3RhcnRDb29yZHMiLCJzaGlwT3JpZW50YXRpb24iLCJsZW5ndGgiLCJpZCIsInNoaXBMZW5ndGgiLCJwbGFjZWRTaGlwIiwib2xkU3RhcnRDb29yZHMiLCJtb3ZlU2hpcCIsImkiLCJ4IiwiaiIsInkiLCJwbGFjZVNoaXAiLCJwbGFjZVNoaXBzUmFuZG9tIiwicmFuZG9tIiwiZ2V0RmxlZXQiLCJzd2FwUm9sZXMiLCJnZW5lcmF0ZUF0dGFja1BoYXNlRGF0YSIsInNldFRpbWVvdXQiLCJtb3ZlIiwiZ2V0TW92ZSIsImNvb3JkcyIsImF0dGFjayIsInJlY2VpdmVBdHRhY2siLCJsYXN0TW92ZUZlZWRiYWNrIiwic3RhdHVzIiwiYXR0YWNrZXJOYW1lIiwib3Bwb25lbnROYW1lIiwic2hpcE5hbWUiLCJzaGlwQ29vcmRzIiwiYWRqYWNlbnRDb29yZHMiLCJpc0ZsZWV0U3VuayIsImluY3JlbWVudFNjb3JlIiwid2lubmVyTmFtZSIsImxvc2VyTmFtZSIsImNsZWFySGlzdG9yeSIsImZsYXRNYXAiLCJzaGlwRGF0YSIsInNoaXBzIiwiY291bnQiLCJwdXNoIiwiZmluZCIsInNvcnQiLCJNYXRoIiwib2xkQXR0YWNrZXIiLCJzZXRBY3RpdmUiLCJhY3RpdmUiLCJpc0FjdGl2ZSIsInNjb3JlIiwiZ2V0U2NvcmUiLCJhbmltYXRlIiwiYXRlYml0QW5pbWF0ZSIsIk9yaWVudGF0aW9uIiwiY2VsbE51bWJlclRvQ29vcmRpbmF0ZXMiLCJjb29yZGluYXRlc1RvQ2VsbE51bWJlciIsIkdhbWVVaSIsImRhdGFUcmFuc2ZlciIsImNlbGxHaG9zdEltYWdlIiwicGFzc1NjcmVlblRpbWVvdXRJZCIsInR1cm5JbmRpY2F0b3IiLCJwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXIiLCJwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIiLCJjdXJyZW50QWN0aXZlR2FtZWJvYXJkQ29udGFpbmVyIiwibWFpbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmlsbCIsInJlbmRlciIsImNyZWF0ZUdhbWVTZXR0aW5nc0Zvcm0iLCJpbktleUZyYW1lcyIsInVubWFya0ZsZWV0TG9jYXRpb24iLCJtYXJrRmxlZXRMb2NhdGlvbiIsImZvckVhY2giLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlU2V0dXBTaGlwRHJhZ1N0YXJ0IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjcmVhdGVTZXR1cFBoYXNlIiwib3V0S2V5ZnJhbWVzIiwibWFya1ZhbGlkVGFyZ2V0Q2VsbHMiLCJ1bm1hcmtTaGlwTG9jYXRpb25DZWxscyIsIm1hcmtTaGlwTG9jYXRpb25DZWxscyIsInNoaXBDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiZHJhZ2dhYmxlIiwicmVuZGVyTm90aWZpY2F0aW9uIiwidHlwZSIsIm1zZyIsInJlbmRlck92ZXJsYXkiLCJjcmVhdGVQYXNzRGV2aWNlU2NyZWVuIiwiY3JlYXRlQXR0YWNrUGhhc2UiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiY2VsbE51bSIsImNsYXNzTGlzdCIsImFkZCIsImNvb3JkIiwiY2VsbCIsInJlbW92ZSIsImJvZHkiLCJjcmVhdGVFbmRSb3VuZE92ZXJsYXkiLCJjcmVhdGVFbGVtZW50IiwidGFnTmFtZSIsImF0dHJpYnV0ZXMiLCJjb250ZW50IiwidXNlSW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJldmVudHMiLCJlbGVtZW50Iiwia2V5cyIsImF0dHJpYnV0ZSIsImlubmVySFRNTCIsInRleHRDb250ZW50IiwiY2hpbGQiLCJhcHBlbmRDaGlsZCIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZXIiLCJjcmVhdGVFdmVudCIsInBhcmVudCIsInJlcGxhY2UiLCJhbmltYXRpb25zIiwib3V0VGltaW5nIiwiZmluaXNoZWQiLCJyZXBsYWNlV2l0aCIsImluVGltaW5nIiwiY3JlYXRlTm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uQXR0cmlidXRlcyIsIm5vdGlmaWNhdGlvbiIsImNyZWF0ZU92ZXJsYXkiLCJ0ZXh0IiwiYnV0dG9ucyIsIm92ZXJsYXkiLCJjcmVhdGVMZWF2ZUdhbWVCdXR0b24iLCJjcmVhdGVCdXR0b24iLCJyZW1vdmVPdmVybGF5Iiwid2lubmVyIiwibG9zZXIiLCJjdXJyZW50VGFyZ2V0IiwiY2xvc2VzdCIsImNsZWFyVGltZW91dCIsImNyZWF0ZVRleHRJbnB1dCIsInBsYWNlaG9sZGVyIiwibWF4bGVuZ3RoIiwibm92YWxpZGF0ZSIsImNyZWF0ZUdhbWVNb2RlSW5wdXQiLCJhdXRvZm9jdXMiLCJoYW5kbGVTdGFydEdhbWUiLCJjcmVhdGVSYWRpb0lucHV0IiwidmFsdWUiLCJoYW5kbGVHYW1lTW9kZUNoYW5nZSIsImNyZWF0ZUxhYmVsIiwiY2hlY2tlZCIsImxhYmVsVGV4dCIsImlucHV0IiwidHJpbSIsImJ1dHRvblRleHQiLCJjcmVhdGVTZXR1cEdhbWVib2FyZCIsImNyZWF0ZUZsZWV0IiwiY3JlYXRlSW5zdHJ1Y3Rpb25zIiwibWFwIiwiY3JlYXRlR2FtZWJvYXJkQ2VsbCIsIkJVU1kiLCJoYW5kbGVTZXR1cENlbGxDbGljayIsImhhbmRsZVNldHVwQ2VsbERyYWdTdGFydCIsImhhbmRsZVNldHVwQ2VsbERyYWdFbmQiLCJoYW5kbGVTZXR1cEdhbWVib2FyZERyYWdFbnRlciIsImhhbmRsZVNldHVwR2FtZWJvYXJkRHJhZ092ZXIiLCJoYW5kbGVTZXR1cEdhbWVib2FyZERyYWdMZWF2ZSIsImhhbmRsZVNldHVwR2FtZWJvYXJkRHJvcCIsImNlbGxEYXRhIiwiY2VsbEF0dHJpYnV0ZXMiLCJzaG93U2hpcHMiLCJvcmllbnRhdGlvbiIsImNyZWF0ZUNlbGxHaG9zdEltYWdlIiwiZHJhZ0dob3N0SW1hZ2UiLCJzaGlwRWxlbWVudCIsImNsb25lTm9kZSIsIlZFUlRJQ0FMIiwic3R5bGUiLCJncmlkQXV0b0Zsb3ciLCJzaGlwc0RyYWdnYWJsZSIsImNyZWF0ZVNoaXAiLCJjZWxscyIsIm1hcmtCbG9ja09mQ2VsbHMiLCJnYW1lYm9hcmRDb250YWluZXIiLCJjZWxsTWFya0NhbGxiYWNrIiwic3RhcnRDZWxsTnVtIiwic3RlcCIsIkhPUklaT05UQUwiLCJ1bm1hcmtWYWxpZFRhcmdldENlbGxzIiwic2VsZWN0b3JTdHJpbmciLCJyZW1vdmVBdHRyaWJ1dGUiLCJmaWx0ZXIiLCJwb3NpdGlvbiIsImNyZWF0ZVBsYXllckNvbnRhaW5lciIsInBsYXllckRhdGEiLCJzaG91bGRQbGF5ZXJDb250YWluZXJCZUFjdGl2ZSIsImNyZWF0ZUF0dGFja0dhbWVib2FyZCIsInNob3VsZFJlbmRlckZsZWV0TG9jYXRpb24iLCJoYW5kbGVBdHRhY2tHYW1lYm9hcmRDbGljayIsInJlbW92ZUdhbWVib2FyZENsaWNrRXZlbnQiLCJhZGRHYW1lYm9hcmRDbGlja0V2ZW50IiwiYXR0YWNrZXIiLCJhdHRhY2tlckdhbWVib2FyZENvbnRhaW5lciIsIm9wcG9uZW50R2FtZWJvYXJkQ29udGFpbmVyIiwiZm9ybSIsInBhcnNlSW50IiwicGxheWVyVHdvQ29udGFpbmVyIiwiZWxlbWVudHMiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkaXR5IiwidmFsaWQiLCJ0YXJnZXQiLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJvbGRTaGlwT3JpZW50YXRpb24iLCJzdGFydFRhcmdldENlbGwiLCJzZXREcmFnSW1hZ2UiLCJjbGFzc05hbWUiLCJzZWFyY2giLCJnZXRSYW5kb21Db29yZGluYXRlcyIsImdldFJhbmRvbUludCIsImFyZVZhbGlkQ29vcmRpbmF0ZXMiLCJFTVBUWSIsImdyaWQiLCJidWlsZEdyaWQiLCJTZXQiLCJuZXdHcmlkIiwicm93IiwiY29sdW1uIiwibXVsdGlkaW1lbnNpb25hbCIsImdyaWRDb3B5Iiwicm93cyIsInNsaWNlIiwiZmxhdCIsImdldENlbGxEYXRhIiwiQXJyYXkiLCJmcm9tIiwiY2FsY3VsYXRlRW5kQ29vcmRpbmF0ZXMiLCJ4MiIsInkyIiwiZ2V0U2hpcFNwYWNlIiwiYWRqYWNlbnQiLCJjb29yZGluYXRlcyIsImFkZEludCIsImlzU3BhY2VGcmVlIiwiZXZlcnkiLCJjb29yZGluYXRlIiwibmV3RmxlZXQiLCJjbGVhciIsInZhbHVlcyIsInJvdGF0ZVNoaXAiLCJoaXQiLCJpc1N1bmsiLCJzaGlwQ2VsbCIsImFkamFjZW50Q2VsbCIsInNldFNjb3JlIiwibmV3U2NvcmUiLCJuZXdTdGF0ZSIsInRvZ2dsZUFjdGl2ZSIsInBsYXllciIsImhpdENvdW50IiwiaW5pdGlhbEhpdE1vdmUiLCJwbGF5ZWRNb3ZlcyIsInBvc3NpYmxlTW92ZXMiLCJub01vcmVWYXJpYXRpb25zIiwiZ3JpZFNpemUiLCJhbHJlYWR5UGxheWVkIiwiZ2V0UmFuZG9tTW92ZSIsInNwbGljZSIsImdlbmVyYXRlVXBEaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJnZW5lcmF0ZURvd25EaXJlY3Rpb24iLCJnZW5lcmF0ZUxlZnREaXJlY3Rpb24iLCJnZW5lcmF0ZVJpZ2h0RGlyZWN0aW9uIiwiZ2VuZXJhdGVQb3NzaWJsZU1vdmVzIiwicmVzZXQiLCJ1cCIsImRvd24iLCJsZWZ0IiwicmlnaHQiLCJsYXN0TW92ZSIsImxhc3RIaXRNb3ZlIiwidjQiLCJ1dWlkdjQiLCJwb3NpdGlvbnMiLCJnZXRQb3NpdGlvbnMiLCJmbnMiLCJpbml0aWFsQXJndW1lbnQiLCJyZWR1Y2UiLCJjdXJyZW50QXJndW1lbnQiLCJmdW4iLCJtYXhJbnQiLCJmbG9vciIsImNlbGxOdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9