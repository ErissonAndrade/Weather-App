/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Alata-Regular.ttf */ "./src/assets/fonts/Alata-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/imgs/sunny-weather.jpg */ "./src/assets/imgs/sunny-weather.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/search.png */ "./src/assets/icons/search.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --light-bg: rgba(0, 0, 0, .3);\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: \"Alata\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: \"Alata\", \"sans-serif\";\r\n    color: white;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: cover;\r\n    gap: 1rem;\r\n    margin: 1rem;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex: 1;\r\n    flex-wrap: wrap;\r\n    gap: 1.5rem;\r\n}\r\n\r\n.left-bar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3rem;\r\n    padding: 1rem;   \r\n    flex-wrap: wrap;\r\n}\r\n\r\n.location-container>h1 {\r\n    font-size: 2.2rem;\r\n    margin: 0;\r\n}\r\n\r\n.city {\r\n    font-size: 1.5rem;\r\n    padding: .8rem 0;\r\n}\r\n\r\n.current-temperature {\r\n    font-size: 2.8rem;\r\n}\r\n\r\n#display-f {\r\n    font-size: .9rem;\r\n    padding: .2rem;\r\n    cursor: pointer;\r\n    border: none;\r\n    background: none;\r\n}\r\n\r\n.input-container {\r\n    display: flex;\r\n    border-bottom: solid black;\r\n    justify-content: space-between;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.input-container > input {\r\n    border: none;\r\n    flex: 1;\r\n    font-size: 1.1rem;\r\n    width: 70%;\r\n    background: none;\r\n}\r\n\r\n::placeholder {\r\n    color: white;\r\n}\r\n\r\n.input-container > input:focus {\r\n    outline: none;\r\n}\r\n\r\n.input-container > button {\r\n    border: none;\r\n    background: none;\r\n    cursor: pointer;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\r\n    background-size: cover;\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.temperature-container > img {\r\n    width: 90px;\r\n    height: 90px;\r\n}\r\n\r\n.right-bar {\r\n    padding: 1rem;\r\n}\r\n\r\n.weather-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3rem;\r\n}\r\n\r\n.weather-info {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: .5rem;\r\n}\r\n\r\n.weather-info > img {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.forecast-container {\r\n   \r\n}\r\n\r\n.week-days {\r\n   display: flex;\r\n   justify-content: space-between;\r\n   gap: 1.5rem;\r\n   flex-wrap: wrap;\r\n}\r\n\r\n.day-info {\r\n    font-size: 1.2rem;\r\n    background: var(--light-bg);\r\n    width: 200px;\r\n    text-align: center;\r\n}\r\n\r\n.day-info > img {\r\n    width: 70px;\r\n    height: 70px;\r\n}\r\n\r\n.day-info > p {\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.day-info > h3 {\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.left-bar, .right-bar {\r\n    background: var(--light-bg);\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;AACjC;;;AAGA;IACI,oBAAoB;IACpB,4CAA6C;AACjD;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,yDAAuD;IACvD,sBAAsB;IACtB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,OAAO;IACP,eAAe;IACf,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,OAAO;IACP,iBAAiB;IACjB,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,6DAAqD;IACrD,sBAAsB;IACtB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;;AAEA;;AAEA;GACG,aAAa;GACb,8BAA8B;GAC9B,WAAW;GACX,eAAe;AAClB;;AAEA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;AAC/B","sourcesContent":[":root {\r\n    --light-bg: rgba(0, 0, 0, .3);\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: \"Alata\";\r\n    src: url(\"../assets/fonts/Alata-Regular.ttf\");\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: \"Alata\", \"sans-serif\";\r\n    color: white;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-image: url(../assets/imgs/sunny-weather.jpg);\r\n    background-size: cover;\r\n    gap: 1rem;\r\n    margin: 1rem;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex: 1;\r\n    flex-wrap: wrap;\r\n    gap: 1.5rem;\r\n}\r\n\r\n.left-bar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3rem;\r\n    padding: 1rem;   \r\n    flex-wrap: wrap;\r\n}\r\n\r\n.location-container>h1 {\r\n    font-size: 2.2rem;\r\n    margin: 0;\r\n}\r\n\r\n.city {\r\n    font-size: 1.5rem;\r\n    padding: .8rem 0;\r\n}\r\n\r\n.current-temperature {\r\n    font-size: 2.8rem;\r\n}\r\n\r\n#display-f {\r\n    font-size: .9rem;\r\n    padding: .2rem;\r\n    cursor: pointer;\r\n    border: none;\r\n    background: none;\r\n}\r\n\r\n.input-container {\r\n    display: flex;\r\n    border-bottom: solid black;\r\n    justify-content: space-between;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.input-container > input {\r\n    border: none;\r\n    flex: 1;\r\n    font-size: 1.1rem;\r\n    width: 70%;\r\n    background: none;\r\n}\r\n\r\n::placeholder {\r\n    color: white;\r\n}\r\n\r\n.input-container > input:focus {\r\n    outline: none;\r\n}\r\n\r\n.input-container > button {\r\n    border: none;\r\n    background: none;\r\n    cursor: pointer;\r\n    background: url(../assets/icons/search.png) no-repeat;\r\n    background-size: cover;\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.temperature-container > img {\r\n    width: 90px;\r\n    height: 90px;\r\n}\r\n\r\n.right-bar {\r\n    padding: 1rem;\r\n}\r\n\r\n.weather-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3rem;\r\n}\r\n\r\n.weather-info {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: .5rem;\r\n}\r\n\r\n.weather-info > img {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.forecast-container {\r\n   \r\n}\r\n\r\n.week-days {\r\n   display: flex;\r\n   justify-content: space-between;\r\n   gap: 1.5rem;\r\n   flex-wrap: wrap;\r\n}\r\n\r\n.day-info {\r\n    font-size: 1.2rem;\r\n    background: var(--light-bg);\r\n    width: 200px;\r\n    text-align: center;\r\n}\r\n\r\n.day-info > img {\r\n    width: 70px;\r\n    height: 70px;\r\n}\r\n\r\n.day-info > p {\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.day-info > h3 {\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.left-bar, .right-bar {\r\n    background: var(--light-bg);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setData": () => (/* binding */ setData)
/* harmony export */ });
/* harmony import */ var _setImgs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setImgs.js */ "./src/setImgs.js");


const weatherStatus = document.querySelector(".weather-status")
const weatherStatusImg = document.querySelector(".temperature-container > img")
const selectCity = document.querySelector(".city")
const selectCurrTemperature = document.querySelector(".current-temperature")
const selectFeelsLike = document.querySelector(".feels-like")
const selectHumidity = document.querySelector(".humidity")
const selectRainChance = document.querySelector(".rain-chance")
const selectWindSpeed = document.querySelector(".wind-speed")
const todayDate = document.querySelector(".today")

async function setData (location) {
    try {
        let response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=02d0c041d3aadabf5500232268440a40`)
        let getData = await response.json()
        let currentTemperature = Math.round(getData.main.temp - 273.15)
        let weatherDescription = getData.weather[0].description
        let city = getData.name
        let weatherSetImg = getData.weather[0].main.toLowerCase()
        let feelsLike = Math.round(getData.main.feels_like - 273.15)
        let humidity = getData.main.humidity
        let rainChance = getData.main.humidity
        let windSpeed = getData.wind.speed
        
        todayDate.textContent = setDate()
        setWeatherStatus (weatherDescription)
        selectCity.textContent = city
        selectCurrTemperature.textContent = `${currentTemperature}°C`
        selectFeelsLike.textContent = `${feelsLike}°C`
        selectHumidity.textContent = `${humidity}%`
        selectRainChance.textContent = `${rainChance}%`
        selectWindSpeed.textContent = `${windSpeed}km/h`
        
       
        // Set Images
        if(currentTemperature <= 0) {
            weatherStatusImg.src = "../src/assets/icons/snowy.png"
            document.body.style.backgroundImage = "url(../src/assets/imgs/snowy-weather.jpg)"
        } else {
            weatherStatusImg.src = (0,_setImgs_js__WEBPACK_IMPORTED_MODULE_0__.changeIcons)(weatherSetImg)
            document.body.style.backgroundImage = (0,_setImgs_js__WEBPACK_IMPORTED_MODULE_0__.changeBgImage)(weatherSetImg)
        }
    }
    catch {
        alert("Please enter a valid city name")
    }
}

function setWeatherStatus (weatherDescription) {
    const splitWords = weatherDescription.split(" ")
    const capFirstWordLetter = splitWords[0].charAt(0).toUpperCase() + splitWords[0].slice(1)
    const capSecondWordLetter = splitWords[1].charAt(0).toUpperCase() + splitWords[1].slice(1)

    weatherStatus.textContent = `${capFirstWordLetter} ${capSecondWordLetter}`
}

function setDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    const dateFormated = today.toLocaleDateString("en-US", options)
    return dateFormated
}




/***/ }),

/***/ "./src/setImgs.js":
/*!************************!*\
  !*** ./src/setImgs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeBgImage": () => (/* binding */ changeBgImage),
/* harmony export */   "changeIcons": () => (/* binding */ changeIcons)
/* harmony export */ });
const selectIcons = {
    thunderstorm: "../src/assets/icons/rainy.png",
    drizzle: "../src/assets/icons/rainy.png",
    rain: "../src/assets/icons/rainy.png",
    snow: "../src/assets/icons/snowy.png",
    clear: "../src/assets/icons/sunny.png",
    clouds: "../src/assets/icons/cloudy.png",
    mist: "../src/assets/icons/hazy.png",
    smoke: "../src/assets/icons/hazy.png",
    haze: "../src/assets/icons/hazy.png",
    dust: "../src/assets/icons/hazy.png",
    fog: "../src/assets/icons/hazy.png",
    sand: "../src/assets/icons/hazy.png",
    dust: "../src/assets/icons/hazy.png",
    ash: "../src/assets/icons/hazy.png",
    squall: "../src/assets/icons/hazy.png",
    tornado: "../src/assets/icons/tornado.png"
}

const selectBgImages = {
    thunderstorm: "url(../src/assets/imgs/rainy-weather.jpg)",
    drizzle: "url(../src/assets/imgs/rainy-weather.jpg)",
    rain: "url(../src/assets/imgs/rainy-weather.jpg)",
    snow: "url(../src/assets/imgs/snowy-weather.jpg)",
    clear: "url(../src/assets/imgs/sunny-weather.jpg)",
    clouds: "url(../src/assets/imgs/cloudy-weather.jpg)",
    mist: "url(../src/assets/imgs/cloudy-weather.jpg)",
    smoke: "url(../src/assets/imgs/cloudy-weather.jpg)",
    haze: "url(../src/assets/imgs/cloudy-weather.jpg)",
    dust: "url(../src/assets/imgs/cloudy-weather.jpg)",
    fog: "url(../src/assets/imgs/cloudy-weather.jpg)",
    sand: "url(../src/assets/imgs/cloudy-weather.jpg)",
    dust: "url(../src/assets/imgs/cloudy-weather.jpg)",
    ash: "url(../src/assets/imgs/cloudy-weather.jpg)",
    squall: "url(../src/assets/imgs/cloudy-weather.jpg)",
    tornado: "url(../src/assets/imgs/cloudy-weather.jpg)"
}

function changeIcons(weatherSetImg) { 
    const entries = Object.entries(selectIcons)
    const filterEntries = entries.filter(entry => entry.includes(weatherSetImg))
    const selectKey = filterEntries[0]
    const selectImgPath = selectKey[1]
    return selectImgPath
}

function changeBgImage(weatherSetImg) {
    const entries = Object.entries(selectBgImages)
    const filterEntries = entries.filter(entry => entry.includes(weatherSetImg))
    const selectKey = filterEntries[0]
    const selectImgPath = selectKey[1]
    return selectImgPath
}





/***/ }),

/***/ "./src/assets/fonts/Alata-Regular.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Alata-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a90e0970a7aca7d36f95.ttf";

/***/ }),

/***/ "./src/assets/icons/search.png":
/*!*************************************!*\
  !*** ./src/assets/icons/search.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adb2ac691ceb4cfb4743.png";

/***/ }),

/***/ "./src/assets/imgs/sunny-weather.jpg":
/*!*******************************************!*\
  !*** ./src/assets/imgs/sunny-weather.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a88edc204976eec844b.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ "./src/app.js");



const submitBtn = document.getElementById("search")
const displayFahrenheit = document.getElementById("display-f")
const selectCurrTemperature = document.querySelector(".current-temperature")
const input = document.querySelector("input")


const selectDay1 = document.querySelector(".day-1")
const day1MaxTemp = document.querySelector(".day-1-maxtemp")
const day1MinTemp = document.querySelector(".day-1-mintemp")
const selectDay2 = document.querySelector(".day-2")
const day2MaxTemp = document.querySelector(".day-2-maxtemp")
const day2MinTemp = document.querySelector(".day-2-mintemp")
const selectDay3 = document.querySelector(".day-3")
const day3MaxTemp = document.querySelector(".day-3-maxtemp")
const day3MinTemp = document.querySelector(".day-3-mintemp")
const selectDay4 = document.querySelector(".day-4")
const day4MaxTemp = document.querySelector(".day-4-maxtemp")
const day4MinTemp = document.querySelector(".day-4-mintemp")
const selectDay5 = document.querySelector(".day-5")
const day5MaxTemp = document.querySelector(".day-5-maxtemp")
const day5MinTemp = document.querySelector(".day-5-mintemp")

;(0,_app_js__WEBPACK_IMPORTED_MODULE_1__.setData)("london")
setForecast ("london")

function setNextDay(today, days) {
    const options = { weekday: 'long'};
    const tomorrow  = today;
    tomorrow.setDate(tomorrow.getDate()+days);
    const dateFormated = tomorrow.toLocaleDateString("en-US", options)
    return dateFormated
}

const today = new Date()

async function setForecast (location) {
    try {
        const response = await fetch (`http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=02d0c041d3aadabf5500232268440a40`)
        const getData = await response.json()
        const getList = getData.list

        let tempsByDay = {}
             

        for(let i=0;i<getList.length;i++) {
            const getData = getList[i]
            const dates = getData.dt_txt.split(" ")[0]
            const tempMax = getData.main.temp_max
            const tempMin = getData.main.temp_min
            tempsByDay[dates] = [tempMax, tempMin]
        }
        
        
        
        console.log(tempsByDay)
        const entries = Object.entries(tempsByDay)    
        console.log(entries)

        const filterDay1 = entries.filter(x => x.includes(setDate(new Date(), 1)))
        const filterDay2 = entries.filter(x => x.includes(setDate(new Date(), 2)))
        const filterDay3 = entries.filter(x => x.includes(setDate(new Date(), 3)))
        const filterDay4 = entries.filter(x => x.includes(setDate(new Date(), 4)))
        const filterDay5 = entries.filter(x => x.includes(setDate(new Date(), 5)))
        

    
        
        
        day1MaxTemp.textContent = `${Math.round(filterDay1[0][1][0] - 273.15)} °C`
        day1MinTemp.textContent = `${Math.round(filterDay1[0][1][1] - 273.15)} °C` 

        day2MaxTemp.textContent = `${Math.round(filterDay2[0][1][0] - 273.15)} °C`
        day2MinTemp.textContent = `${Math.round(filterDay2[0][1][1] - 273.15)} °C`

        day3MaxTemp.textContent = `${Math.round(filterDay3[0][1][0] - 273.15)} °C`
        day3MinTemp.textContent = `${Math.round(filterDay3[0][1][1] - 273.15)} °C` 

        day4MaxTemp.textContent = `${Math.round(filterDay4[0][1][0] - 273.15)} °C`
        day4MinTemp.textContent = `${Math.round(filterDay4[0][1][1] - 273.15)} °C` 

        day5MaxTemp.textContent = `${Math.round(filterDay5[0][1][0] - 273.15)} °C`
        day5MinTemp.textContent = `${Math.round(filterDay5[0][1][1] - 273.15)} °C` 
        
     
        selectDay1.textContent = setNextDay(new Date(), 1)
        selectDay2.textContent = setNextDay(new Date(), 2)
        selectDay3.textContent = setNextDay(new Date(), 3)
        selectDay4.textContent = setNextDay(new Date(), 4)
        selectDay5.textContent = setNextDay(new Date(), 5)

        
        
    }
    catch {
        alert("Please enter a valid city name")
    }
}

submitBtn.addEventListener("click", e => {
    (0,_app_js__WEBPACK_IMPORTED_MODULE_1__.setData)(input.value)  
    setForecast(input.value)
})

displayFahrenheit.addEventListener("click", e => {
    const getTemperature = parseInt(selectCurrTemperature.textContent)
    const celsiusToFahrenheit = Math.round((getTemperature * 9/5) + 32)
    const fahrenheitToCelsius = Math.round((getTemperature - 32) * 5/9)

    if(displayFahrenheit.textContent === "Display °F") {
        selectCurrTemperature.textContent = `${celsiusToFahrenheit}°F`
        displayFahrenheit.textContent = "Display °C"
    } else {
        displayFahrenheit.textContent = "Display °F"
        selectCurrTemperature.textContent = `${fahrenheitToCelsius}°C`
    }
})

function setDate(today, days) {
    const tomorrow  = today;
    tomorrow.setDate(tomorrow.getDate()+days);
    const dateFormated = tomorrow.toISOString().split('T')[0]
    return dateFormated
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msb0JBQW9CO0FBQ25FO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsK0NBQStDLG9CQUFvQjtBQUNuRTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NldEltZ3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL0FsYXRhLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltZ3Mvc3Vubnktd2VhdGhlci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvc2VhcmNoLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWxpZ2h0LWJnOiByZ2JhKDAsIDAsIDAsIC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQWxhdGFcXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQWxhdGFcXFwiLCBcXFwic2Fucy1zZXJpZlxcXCI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1iYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07ICAgXFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uLWNvbnRhaW5lcj5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jaXR5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC44cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXRlbXBlcmF0dXJlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjhyZW07XFxyXFxufVxcclxcblxcclxcbiNkaXNwbGF5LWYge1xcclxcbiAgICBmb250LXNpemU6IC45cmVtO1xcclxcbiAgICBwYWRkaW5nOiAuMnJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjaztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyID4gaW5wdXQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyID4gaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyID4gYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcGVyYXR1cmUtY29udGFpbmVyID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDkwcHg7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LWJhciB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWluZm8gPiBpbWcge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLndlZWstZGF5cyB7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgZ2FwOiAxLjVyZW07XFxyXFxuICAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF5LWluZm8ge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmcpO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRheS1pbmZvID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRheS1pbmZvID4gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF5LWluZm8gPiBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1iYXIsIC5yaWdodC1iYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1iZyk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDOzs7QUFHQTtJQUNJLG9CQUFvQjtJQUNwQiw0Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlEQUF1RDtJQUN2RCxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLE9BQU87SUFDUCxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osT0FBTztJQUNQLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw2REFBcUQ7SUFDckQsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOztBQUVBOztBQUVBO0dBQ0csYUFBYTtHQUNiLDhCQUE4QjtHQUM5QixXQUFXO0dBQ1gsZUFBZTtBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1saWdodC1iZzogcmdiYSgwLCAwLCAwLCAuMyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkFsYXRhXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9BbGF0YS1SZWd1bGFyLnR0ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkFsYXRhXFxcIiwgXFxcInNhbnMtc2VyaWZcXFwiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltZ3Mvc3Vubnktd2VhdGhlci5qcGcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtYmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtOyAgIFxcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbi1jb250YWluZXI+aDEge1xcclxcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2l0eSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAuOHJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC10ZW1wZXJhdHVyZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZGlzcGxheS1mIHtcXHJcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjJyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2s7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciA+IGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciA+IGlucHV0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ljb25zL3NlYXJjaC5wbmcpIG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBlcmF0dXJlLWNvbnRhaW5lciA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiA5MHB4O1xcclxcbiAgICBoZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1iYXIge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1pbmZvID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbi53ZWVrLWRheXMge1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgIGdhcDogMS41cmVtO1xcclxcbiAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmRheS1pbmZvIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWJnKTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYXktaW5mbyA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5kYXktaW5mbyA+IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRheS1pbmZvID4gaDMge1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtYmFyLCAucmlnaHQtYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmcpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtjaGFuZ2VJY29ucywgY2hhbmdlQmdJbWFnZX0gZnJvbSBcIi4vc2V0SW1ncy5qc1wiXG5cbmNvbnN0IHdlYXRoZXJTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItc3RhdHVzXCIpXG5jb25zdCB3ZWF0aGVyU3RhdHVzSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZS1jb250YWluZXIgPiBpbWdcIilcbmNvbnN0IHNlbGVjdENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIilcbmNvbnN0IHNlbGVjdEN1cnJUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC10ZW1wZXJhdHVyZVwiKVxuY29uc3Qgc2VsZWN0RmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVscy1saWtlXCIpXG5jb25zdCBzZWxlY3RIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIilcbmNvbnN0IHNlbGVjdFJhaW5DaGFuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhaW4tY2hhbmNlXCIpXG5jb25zdCBzZWxlY3RXaW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtc3BlZWRcIilcbmNvbnN0IHRvZGF5RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlcIilcblxuYXN5bmMgZnVuY3Rpb24gc2V0RGF0YSAobG9jYXRpb24pIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAoYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD0wMmQwYzA0MWQzYWFkYWJmNTUwMDIzMjI2ODQ0MGE0MGApXG4gICAgICAgIGxldCBnZXREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgIGxldCBjdXJyZW50VGVtcGVyYXR1cmUgPSBNYXRoLnJvdW5kKGdldERhdGEubWFpbi50ZW1wIC0gMjczLjE1KVxuICAgICAgICBsZXQgd2VhdGhlckRlc2NyaXB0aW9uID0gZ2V0RGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgICAgIGxldCBjaXR5ID0gZ2V0RGF0YS5uYW1lXG4gICAgICAgIGxldCB3ZWF0aGVyU2V0SW1nID0gZ2V0RGF0YS53ZWF0aGVyWzBdLm1haW4udG9Mb3dlckNhc2UoKVxuICAgICAgICBsZXQgZmVlbHNMaWtlID0gTWF0aC5yb3VuZChnZXREYXRhLm1haW4uZmVlbHNfbGlrZSAtIDI3My4xNSlcbiAgICAgICAgbGV0IGh1bWlkaXR5ID0gZ2V0RGF0YS5tYWluLmh1bWlkaXR5XG4gICAgICAgIGxldCByYWluQ2hhbmNlID0gZ2V0RGF0YS5tYWluLmh1bWlkaXR5XG4gICAgICAgIGxldCB3aW5kU3BlZWQgPSBnZXREYXRhLndpbmQuc3BlZWRcbiAgICAgICAgXG4gICAgICAgIHRvZGF5RGF0ZS50ZXh0Q29udGVudCA9IHNldERhdGUoKVxuICAgICAgICBzZXRXZWF0aGVyU3RhdHVzICh3ZWF0aGVyRGVzY3JpcHRpb24pXG4gICAgICAgIHNlbGVjdENpdHkudGV4dENvbnRlbnQgPSBjaXR5XG4gICAgICAgIHNlbGVjdEN1cnJUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRUZW1wZXJhdHVyZX3CsENgXG4gICAgICAgIHNlbGVjdEZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke2ZlZWxzTGlrZX3CsENgXG4gICAgICAgIHNlbGVjdEh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7aHVtaWRpdHl9JWBcbiAgICAgICAgc2VsZWN0UmFpbkNoYW5jZS50ZXh0Q29udGVudCA9IGAke3JhaW5DaGFuY2V9JWBcbiAgICAgICAgc2VsZWN0V2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7d2luZFNwZWVkfWttL2hgXG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICAvLyBTZXQgSW1hZ2VzXG4gICAgICAgIGlmKGN1cnJlbnRUZW1wZXJhdHVyZSA8PSAwKSB7XG4gICAgICAgICAgICB3ZWF0aGVyU3RhdHVzSW1nLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9zbm93eS5wbmdcIlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCguLi9zcmMvYXNzZXRzL2ltZ3Mvc25vd3ktd2VhdGhlci5qcGcpXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdlYXRoZXJTdGF0dXNJbWcuc3JjID0gY2hhbmdlSWNvbnMod2VhdGhlclNldEltZylcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gY2hhbmdlQmdJbWFnZSh3ZWF0aGVyU2V0SW1nKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBjaXR5IG5hbWVcIilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFdlYXRoZXJTdGF0dXMgKHdlYXRoZXJEZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IHNwbGl0V29yZHMgPSB3ZWF0aGVyRGVzY3JpcHRpb24uc3BsaXQoXCIgXCIpXG4gICAgY29uc3QgY2FwRmlyc3RXb3JkTGV0dGVyID0gc3BsaXRXb3Jkc1swXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHNwbGl0V29yZHNbMF0uc2xpY2UoMSlcbiAgICBjb25zdCBjYXBTZWNvbmRXb3JkTGV0dGVyID0gc3BsaXRXb3Jkc1sxXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHNwbGl0V29yZHNbMV0uc2xpY2UoMSlcblxuICAgIHdlYXRoZXJTdGF0dXMudGV4dENvbnRlbnQgPSBgJHtjYXBGaXJzdFdvcmRMZXR0ZXJ9ICR7Y2FwU2Vjb25kV29yZExldHRlcn1gXG59XG5cbmZ1bmN0aW9uIHNldERhdGUoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH07XG4gICAgbGV0IHRvZGF5ICA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZUZvcm1hdGVkID0gdG9kYXkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucylcbiAgICByZXR1cm4gZGF0ZUZvcm1hdGVkXG59XG5cbmV4cG9ydCB7c2V0RGF0YX1cbiIsImNvbnN0IHNlbGVjdEljb25zID0ge1xyXG4gICAgdGh1bmRlcnN0b3JtOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcmFpbnkucG5nXCIsXHJcbiAgICBkcml6emxlOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcmFpbnkucG5nXCIsXHJcbiAgICByYWluOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcmFpbnkucG5nXCIsXHJcbiAgICBzbm93OiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvc25vd3kucG5nXCIsXHJcbiAgICBjbGVhcjogXCIuLi9zcmMvYXNzZXRzL2ljb25zL3N1bm55LnBuZ1wiLFxyXG4gICAgY2xvdWRzOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvY2xvdWR5LnBuZ1wiLFxyXG4gICAgbWlzdDogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2hhenkucG5nXCIsXHJcbiAgICBzbW9rZTogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2hhenkucG5nXCIsXHJcbiAgICBoYXplOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvaGF6eS5wbmdcIixcclxuICAgIGR1c3Q6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9oYXp5LnBuZ1wiLFxyXG4gICAgZm9nOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvaGF6eS5wbmdcIixcclxuICAgIHNhbmQ6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9oYXp5LnBuZ1wiLFxyXG4gICAgZHVzdDogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2hhenkucG5nXCIsXHJcbiAgICBhc2g6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9oYXp5LnBuZ1wiLFxyXG4gICAgc3F1YWxsOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvaGF6eS5wbmdcIixcclxuICAgIHRvcm5hZG86IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy90b3JuYWRvLnBuZ1wiXHJcbn1cclxuXHJcbmNvbnN0IHNlbGVjdEJnSW1hZ2VzID0ge1xyXG4gICAgdGh1bmRlcnN0b3JtOiBcInVybCguLi9zcmMvYXNzZXRzL2ltZ3MvcmFpbnktd2VhdGhlci5qcGcpXCIsXHJcbiAgICBkcml6emxlOiBcInVybCguLi9zcmMvYXNzZXRzL2ltZ3MvcmFpbnktd2VhdGhlci5qcGcpXCIsXHJcbiAgICByYWluOiBcInVybCguLi9zcmMvYXNzZXRzL2ltZ3MvcmFpbnktd2VhdGhlci5qcGcpXCIsXHJcbiAgICBzbm93OiBcInVybCguLi9zcmMvYXNzZXRzL2ltZ3Mvc25vd3ktd2VhdGhlci5qcGcpXCIsXHJcbiAgICBjbGVhcjogXCJ1cmwoLi4vc3JjL2Fzc2V0cy9pbWdzL3N1bm55LXdlYXRoZXIuanBnKVwiLFxyXG4gICAgY2xvdWRzOiBcInVybCguLi9zcmMvYXNzZXRzL2ltZ3MvY2xvdWR5LXdlYXRoZXIuanBnKVwiLFxyXG4gICAgbWlzdDogXCJ1cmwoLi4vc3JjL2Fzc2V0cy9pbWdzL2Nsb3VkeS13ZWF0aGVyLmpwZylcIixcclxuICAgIHNtb2tlOiBcInVybCguLi9zcmMvYXNzZXRzL2ltZ3MvY2xvdWR5LXdlYXRoZXIuanBnKVwiLFxyXG4gICAgaGF6ZTogXCJ1cmwoLi4vc3JjL2Fzc2V0cy9pbWdzL2Nsb3VkeS13ZWF0aGVyLmpwZylcIixcclxuICAgIGR1c3Q6IFwidXJsKC4uL3NyYy9hc3NldHMvaW1ncy9jbG91ZHktd2VhdGhlci5qcGcpXCIsXHJcbiAgICBmb2c6IFwidXJsKC4uL3NyYy9hc3NldHMvaW1ncy9jbG91ZHktd2VhdGhlci5qcGcpXCIsXHJcbiAgICBzYW5kOiBcInVybCguLi9zcmMvYXNzZXRzL2ltZ3MvY2xvdWR5LXdlYXRoZXIuanBnKVwiLFxyXG4gICAgZHVzdDogXCJ1cmwoLi4vc3JjL2Fzc2V0cy9pbWdzL2Nsb3VkeS13ZWF0aGVyLmpwZylcIixcclxuICAgIGFzaDogXCJ1cmwoLi4vc3JjL2Fzc2V0cy9pbWdzL2Nsb3VkeS13ZWF0aGVyLmpwZylcIixcclxuICAgIHNxdWFsbDogXCJ1cmwoLi4vc3JjL2Fzc2V0cy9pbWdzL2Nsb3VkeS13ZWF0aGVyLmpwZylcIixcclxuICAgIHRvcm5hZG86IFwidXJsKC4uL3NyYy9hc3NldHMvaW1ncy9jbG91ZHktd2VhdGhlci5qcGcpXCJcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlSWNvbnMod2VhdGhlclNldEltZykgeyBcclxuICAgIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhzZWxlY3RJY29ucylcclxuICAgIGNvbnN0IGZpbHRlckVudHJpZXMgPSBlbnRyaWVzLmZpbHRlcihlbnRyeSA9PiBlbnRyeS5pbmNsdWRlcyh3ZWF0aGVyU2V0SW1nKSlcclxuICAgIGNvbnN0IHNlbGVjdEtleSA9IGZpbHRlckVudHJpZXNbMF1cclxuICAgIGNvbnN0IHNlbGVjdEltZ1BhdGggPSBzZWxlY3RLZXlbMV1cclxuICAgIHJldHVybiBzZWxlY3RJbWdQYXRoXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUJnSW1hZ2Uod2VhdGhlclNldEltZykge1xyXG4gICAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHNlbGVjdEJnSW1hZ2VzKVxyXG4gICAgY29uc3QgZmlsdGVyRW50cmllcyA9IGVudHJpZXMuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LmluY2x1ZGVzKHdlYXRoZXJTZXRJbWcpKVxyXG4gICAgY29uc3Qgc2VsZWN0S2V5ID0gZmlsdGVyRW50cmllc1swXVxyXG4gICAgY29uc3Qgc2VsZWN0SW1nUGF0aCA9IHNlbGVjdEtleVsxXVxyXG4gICAgcmV0dXJuIHNlbGVjdEltZ1BhdGhcclxufVxyXG5cclxuZXhwb3J0IHtjaGFuZ2VJY29ucywgY2hhbmdlQmdJbWFnZX1cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIlxyXG5pbXBvcnQge3NldERhdGF9IGZyb20gXCIuL2FwcC5qc1wiXHJcblxyXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKVxyXG5jb25zdCBkaXNwbGF5RmFocmVuaGVpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheS1mXCIpXHJcbmNvbnN0IHNlbGVjdEN1cnJUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC10ZW1wZXJhdHVyZVwiKVxyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxyXG5cclxuXHJcbmNvbnN0IHNlbGVjdERheTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheS0xXCIpXHJcbmNvbnN0IGRheTFNYXhUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktMS1tYXh0ZW1wXCIpXHJcbmNvbnN0IGRheTFNaW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktMS1taW50ZW1wXCIpXHJcbmNvbnN0IHNlbGVjdERheTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheS0yXCIpXHJcbmNvbnN0IGRheTJNYXhUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktMi1tYXh0ZW1wXCIpXHJcbmNvbnN0IGRheTJNaW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktMi1taW50ZW1wXCIpXHJcbmNvbnN0IHNlbGVjdERheTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheS0zXCIpXHJcbmNvbnN0IGRheTNNYXhUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktMy1tYXh0ZW1wXCIpXHJcbmNvbnN0IGRheTNNaW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktMy1taW50ZW1wXCIpXHJcbmNvbnN0IHNlbGVjdERheTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheS00XCIpXHJcbmNvbnN0IGRheTRNYXhUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktNC1tYXh0ZW1wXCIpXHJcbmNvbnN0IGRheTRNaW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktNC1taW50ZW1wXCIpXHJcbmNvbnN0IHNlbGVjdERheTUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheS01XCIpXHJcbmNvbnN0IGRheTVNYXhUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktNS1tYXh0ZW1wXCIpXHJcbmNvbnN0IGRheTVNaW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktNS1taW50ZW1wXCIpXHJcblxyXG5zZXREYXRhKFwibG9uZG9uXCIpXHJcbnNldEZvcmVjYXN0IChcImxvbmRvblwiKVxyXG5cclxuZnVuY3Rpb24gc2V0TmV4dERheSh0b2RheSwgZGF5cykge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgd2Vla2RheTogJ2xvbmcnfTtcclxuICAgIGNvbnN0IHRvbW9ycm93ICA9IHRvZGF5O1xyXG4gICAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkrZGF5cyk7XHJcbiAgICBjb25zdCBkYXRlRm9ybWF0ZWQgPSB0b21vcnJvdy50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKVxyXG4gICAgcmV0dXJuIGRhdGVGb3JtYXRlZFxyXG59XHJcblxyXG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldEZvcmVjYXN0IChsb2NhdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoIChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2xvY2F0aW9ufSZBUFBJRD0wMmQwYzA0MWQzYWFkYWJmNTUwMDIzMjI2ODQ0MGE0MGApXHJcbiAgICAgICAgY29uc3QgZ2V0RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGNvbnN0IGdldExpc3QgPSBnZXREYXRhLmxpc3RcclxuXHJcbiAgICAgICAgbGV0IHRlbXBzQnlEYXkgPSB7fVxyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8Z2V0TGlzdC5sZW5ndGg7aSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldERhdGEgPSBnZXRMaXN0W2ldXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVzID0gZ2V0RGF0YS5kdF90eHQuc3BsaXQoXCIgXCIpWzBdXHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBNYXggPSBnZXREYXRhLm1haW4udGVtcF9tYXhcclxuICAgICAgICAgICAgY29uc3QgdGVtcE1pbiA9IGdldERhdGEubWFpbi50ZW1wX21pblxyXG4gICAgICAgICAgICB0ZW1wc0J5RGF5W2RhdGVzXSA9IFt0ZW1wTWF4LCB0ZW1wTWluXVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wc0J5RGF5KVxyXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyh0ZW1wc0J5RGF5KSAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhlbnRyaWVzKVxyXG5cclxuICAgICAgICBjb25zdCBmaWx0ZXJEYXkxID0gZW50cmllcy5maWx0ZXIoeCA9PiB4LmluY2x1ZGVzKHNldERhdGUobmV3IERhdGUoKSwgMSkpKVxyXG4gICAgICAgIGNvbnN0IGZpbHRlckRheTIgPSBlbnRyaWVzLmZpbHRlcih4ID0+IHguaW5jbHVkZXMoc2V0RGF0ZShuZXcgRGF0ZSgpLCAyKSkpXHJcbiAgICAgICAgY29uc3QgZmlsdGVyRGF5MyA9IGVudHJpZXMuZmlsdGVyKHggPT4geC5pbmNsdWRlcyhzZXREYXRlKG5ldyBEYXRlKCksIDMpKSlcclxuICAgICAgICBjb25zdCBmaWx0ZXJEYXk0ID0gZW50cmllcy5maWx0ZXIoeCA9PiB4LmluY2x1ZGVzKHNldERhdGUobmV3IERhdGUoKSwgNCkpKVxyXG4gICAgICAgIGNvbnN0IGZpbHRlckRheTUgPSBlbnRyaWVzLmZpbHRlcih4ID0+IHguaW5jbHVkZXMoc2V0RGF0ZShuZXcgRGF0ZSgpLCA1KSkpXHJcbiAgICAgICAgXHJcblxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZGF5MU1heFRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGZpbHRlckRheTFbMF1bMV1bMF0gLSAyNzMuMTUpfSDCsENgXHJcbiAgICAgICAgZGF5MU1pblRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGZpbHRlckRheTFbMF1bMV1bMV0gLSAyNzMuMTUpfSDCsENgIFxyXG5cclxuICAgICAgICBkYXkyTWF4VGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZmlsdGVyRGF5MlswXVsxXVswXSAtIDI3My4xNSl9IMKwQ2BcclxuICAgICAgICBkYXkyTWluVGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZmlsdGVyRGF5MlswXVsxXVsxXSAtIDI3My4xNSl9IMKwQ2BcclxuXHJcbiAgICAgICAgZGF5M01heFRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGZpbHRlckRheTNbMF1bMV1bMF0gLSAyNzMuMTUpfSDCsENgXHJcbiAgICAgICAgZGF5M01pblRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGZpbHRlckRheTNbMF1bMV1bMV0gLSAyNzMuMTUpfSDCsENgIFxyXG5cclxuICAgICAgICBkYXk0TWF4VGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZmlsdGVyRGF5NFswXVsxXVswXSAtIDI3My4xNSl9IMKwQ2BcclxuICAgICAgICBkYXk0TWluVGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZmlsdGVyRGF5NFswXVsxXVsxXSAtIDI3My4xNSl9IMKwQ2AgXHJcblxyXG4gICAgICAgIGRheTVNYXhUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChmaWx0ZXJEYXk1WzBdWzFdWzBdIC0gMjczLjE1KX0gwrBDYFxyXG4gICAgICAgIGRheTVNaW5UZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChmaWx0ZXJEYXk1WzBdWzFdWzFdIC0gMjczLjE1KX0gwrBDYCBcclxuICAgICAgICBcclxuICAgICBcclxuICAgICAgICBzZWxlY3REYXkxLnRleHRDb250ZW50ID0gc2V0TmV4dERheShuZXcgRGF0ZSgpLCAxKVxyXG4gICAgICAgIHNlbGVjdERheTIudGV4dENvbnRlbnQgPSBzZXROZXh0RGF5KG5ldyBEYXRlKCksIDIpXHJcbiAgICAgICAgc2VsZWN0RGF5My50ZXh0Q29udGVudCA9IHNldE5leHREYXkobmV3IERhdGUoKSwgMylcclxuICAgICAgICBzZWxlY3REYXk0LnRleHRDb250ZW50ID0gc2V0TmV4dERheShuZXcgRGF0ZSgpLCA0KVxyXG4gICAgICAgIHNlbGVjdERheTUudGV4dENvbnRlbnQgPSBzZXROZXh0RGF5KG5ldyBEYXRlKCksIDUpXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY2F0Y2gge1xyXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgY2l0eSBuYW1lXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICBzZXREYXRhKGlucHV0LnZhbHVlKSAgXHJcbiAgICBzZXRGb3JlY2FzdChpbnB1dC52YWx1ZSlcclxufSlcclxuXHJcbmRpc3BsYXlGYWhyZW5oZWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgIGNvbnN0IGdldFRlbXBlcmF0dXJlID0gcGFyc2VJbnQoc2VsZWN0Q3VyclRlbXBlcmF0dXJlLnRleHRDb250ZW50KVxyXG4gICAgY29uc3QgY2Vsc2l1c1RvRmFocmVuaGVpdCA9IE1hdGgucm91bmQoKGdldFRlbXBlcmF0dXJlICogOS81KSArIDMyKVxyXG4gICAgY29uc3QgZmFocmVuaGVpdFRvQ2Vsc2l1cyA9IE1hdGgucm91bmQoKGdldFRlbXBlcmF0dXJlIC0gMzIpICogNS85KVxyXG5cclxuICAgIGlmKGRpc3BsYXlGYWhyZW5oZWl0LnRleHRDb250ZW50ID09PSBcIkRpc3BsYXkgwrBGXCIpIHtcclxuICAgICAgICBzZWxlY3RDdXJyVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtjZWxzaXVzVG9GYWhyZW5oZWl0fcKwRmBcclxuICAgICAgICBkaXNwbGF5RmFocmVuaGVpdC50ZXh0Q29udGVudCA9IFwiRGlzcGxheSDCsENcIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwbGF5RmFocmVuaGVpdC50ZXh0Q29udGVudCA9IFwiRGlzcGxheSDCsEZcIlxyXG4gICAgICAgIHNlbGVjdEN1cnJUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2ZhaHJlbmhlaXRUb0NlbHNpdXN9wrBDYFxyXG4gICAgfVxyXG59KVxyXG5cclxuZnVuY3Rpb24gc2V0RGF0ZSh0b2RheSwgZGF5cykge1xyXG4gICAgY29uc3QgdG9tb3Jyb3cgID0gdG9kYXk7XHJcbiAgICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKStkYXlzKTtcclxuICAgIGNvbnN0IGRhdGVGb3JtYXRlZCA9IHRvbW9ycm93LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gICAgcmV0dXJuIGRhdGVGb3JtYXRlZFxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=