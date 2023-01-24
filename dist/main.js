/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root, body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-rows: 10vh 80vh 10vh;\n  grid-template-columns: 20vw 80vw;\n}\n\n.header {\n  grid-column: 1/3;\n  grid-row: 1/2;\n  background-color: brown;\n}\n\n.logo {\n  color: wheat;\n  padding-left: 10px;\n}\n\n.sidebar {\n  color: wheat;\n  grid-column: 1/2;\n  grid-row: 2/3;\n  background-color: rgb(211, 75, 75);\n  display: flex;\n  flex-direction: column;\n}\n\n#newProjectForm {\n  align-self: center;\n}\n\n#newTodoForm {\n  background-color: white;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n#newTodoForm * {\n  margin: 5px 0px;\n}\n\n.projectButton {\n  display: flex;\n  color: wheat;\n  font-weight: 700;\n  padding: 10px 20px 10px 30px;\n  margin: 0;\n  justify-content: space-between;\n}\n\n.projectButton:hover {\n  background-color: rgb(185, 65, 65);\n}\n\n#showProjectFormBtn {\n  align-self: center;\n}\n\n.content {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  background-color: wheat;\n}\n\n.todos-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 240px);\n  grid-auto-rows: 240px;\n  gap: 10px;\n  margin: 10px;\n}\n\n.todo-card {\n  display: flex;\n  background-color: white;\n  border-radius: 10px;\n  flex-direction: column;\n  padding: 0px 10px;\n}\n\n.footer {\n  grid-column: 1/3;\n  grid-row: 3/4;\n  background-color: brown;\n}\n\n.hidden {\n  display: none;\n}\n\n.flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,uBAAA;AACJ;;AAEA;EACI,aAAA;EACA,kCAAA;EACA,gCAAA;AACJ;;AAEA;EACI,gBAAA;EACA,aAAA;EACA,uBAAA;AACJ;;AAEA;EACI,YAAA;EACA,kBAAA;AACJ;;AAEA;EACI,YAAA;EACA,gBAAA;EACA,aAAA;EACA,kCAAA;EACA,aAAA;EACA,sBAAA;AACJ;;AAGA;EACI,kBAAA;AAAJ;;AAEA;EACI,uBAAA;EACA,mBAAA;EACA,aAAA;AACJ;;AAEA;EACI,eAAA;AACJ;;AAEA;EACI,aAAA;EACA,YAAA;EACA,gBAAA;EACA,4BAAA;EACA,SAAA;EAEA,8BAAA;AAAJ;;AAEA;EACI,kCAAA;AACJ;;AAEA;EACI,kBAAA;AACJ;;AAEA;EACI,gBAAA;EACA,aAAA;EACA,uBAAA;AACJ;;AAEA;EACI,aAAA;EACA,8CAAA;EACA,qBAAA;EACA,SAAA;EACA,YAAA;AACJ;;AAEA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,iBAAA;AACJ;;AAEA;EACI,gBAAA;EACA,aAAA;EACA,uBAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,8BAAA;AACJ","sourcesContent":[":root, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.grid-container {\r\n    display: grid;\r\n    grid-template-rows: 10vh 80vh 10vh;\r\n    grid-template-columns: 20vw 80vw;\r\n}\r\n\r\n.header {\r\n    grid-column: 1/3;\r\n    grid-row: 1/2;\r\n    background-color: brown;\r\n}\r\n\r\n.logo {\r\n    color: wheat;\r\n    padding-left: 10px;\r\n}\r\n\r\n.sidebar {\r\n    color: wheat;\r\n    grid-column: 1/2;\r\n    grid-row: 2/3;\r\n    background-color: rgb(211, 75, 75);\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n#newProjectForm {\r\n    align-self: center;\r\n}\r\n#newTodoForm {\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n#newTodoForm * {\r\n    margin: 5px 0px;\r\n}\r\n\r\n.projectButton {\r\n    display: flex;\r\n    color: wheat;\r\n    font-weight: 700;\r\n    padding: 10px 20px 10px 30px;\r\n    margin: 0;\r\n\r\n    justify-content: space-between;\r\n}\r\n.projectButton:hover {\r\n    background-color: rgb(185, 65, 65);\r\n}\r\n\r\n#showProjectFormBtn {\r\n    align-self: center;\r\n}\r\n\r\n.content {\r\n    grid-column: 2/3;\r\n    grid-row: 2/3;\r\n    background-color: wheat;\r\n}\r\n\r\n.todos-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, 240px);\r\n    grid-auto-rows: 240px;\r\n    gap: 10px;\r\n    margin: 10px;\r\n}\r\n\r\n.todo-card {\r\n    display: flex;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    flex-direction: column;\r\n    padding: 0px 10px;\r\n}\r\n\r\n.footer {\r\n    grid-column: 1/3;\r\n    grid-row: 3/4;\r\n    background-color: brown;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.flex {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProjectForm": () => (/* binding */ newProjectForm),
/* harmony export */   "newTodoForm": () => (/* binding */ newTodoForm),
/* harmony export */   "showTodoFormBtn": () => (/* binding */ showTodoFormBtn)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _projects_logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-logic.js */ "./src/projects-logic.js");




//new project form definition
const newProjectForm = document.createElement('form');
newProjectForm.setAttribute('id', 'newProjectForm');
newProjectForm.classList.add('hidden');

const projectTitleField = document.createElement('input');
projectTitleField.setAttribute('placeholder', 'Project title');
(0,_functions__WEBPACK_IMPORTED_MODULE_0__.setFieldAttributes)(projectTitleField, 'text', 'projectTitle');

const addProjectBtn = document.createElement('input');
addProjectBtn.setAttribute('type', 'submit');
newProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const project = new _projects_logic_js__WEBPACK_IMPORTED_MODULE_1__.Project(document.getElementById('projectTitle').value); 
    _projects_logic_js__WEBPACK_IMPORTED_MODULE_1__.projectsHolder.list.push(project);
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(_projects_logic_js__WEBPACK_IMPORTED_MODULE_1__.projectsHolder.list);
    const newForm = document.querySelector('#showProjectFormBtn'); //gets a button element that shows project form, defined in layout.js
    newProjectForm.classList.toggle('hidden');
    newForm.classList.toggle('hidden');
});
newProjectForm.append(projectTitleField, addProjectBtn);

//new todo task form definition
const newTodoForm = document.createElement('form');
newTodoForm.setAttribute('id', 'newTodoForm');
newTodoForm.classList.add('hidden');

const todoTitleField = document.createElement('input');
todoTitleField.setAttribute('placeholder', 'Todo totle');
(0,_functions__WEBPACK_IMPORTED_MODULE_0__.setFieldAttributes)(todoTitleField, 'text', 'todoTitle');
const todoDescriptionField = document.createElement('input');
todoDescriptionField.setAttribute('placeholder', 'Todo description');
(0,_functions__WEBPACK_IMPORTED_MODULE_0__.setFieldAttributes)(todoDescriptionField, 'text', 'todoDescription');
const todoDueDateField = document.createElement('input');
(0,_functions__WEBPACK_IMPORTED_MODULE_0__.setFieldAttributes)(todoDueDateField, 'date', 'todoDueDate');

const todoPriorityField = document.createElement('select');
todoPriorityField.setAttribute('id', 'todoPriority');
const lowPriority = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createOption)('low priority');
const regularPriority = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createOption)('regular priority');
const highPriority = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createOption)('high priority');
todoPriorityField.append(lowPriority, regularPriority, highPriority);

const addTodoBtn = document.createElement('input');
addTodoBtn.setAttribute('type', 'submit');
newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const todo = new _projects_logic_js__WEBPACK_IMPORTED_MODULE_1__.Todo(
        document.getElementById('todoTitle').value,
        document.getElementById('todoDescription').value,
        document.getElementById('todoDueDate').value,
        document.getElementById('todoPriority').value
    );

    const index = _projects_logic_js__WEBPACK_IMPORTED_MODULE_1__.projectsHolder.selectedProject;
    const selectedProject = _projects_logic_js__WEBPACK_IMPORTED_MODULE_1__.projectsHolder.list[index];
    selectedProject.todolist.push(todo);
    
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.renderTodos)(index);
    
    const newForm = document.querySelector('#newTodoBtn'); //gets a button element that shows todo form, defined in layout.js
    newTodoForm.classList.remove('flex');
    newTodoForm.classList.add('hidden');
    newForm.classList.toggle('hidden');
});

newTodoForm.append(
    todoTitleField, todoDescriptionField, 
    todoDueDateField, todoPriorityField, addTodoBtn
);

const showTodoFormBtn = document.createElement('button');
showTodoFormBtn.setAttribute('id', 'newTodoBtn');
showTodoFormBtn.innerText = 'New Todo';
showTodoFormBtn.addEventListener('click', () => {
    const newForm = document.querySelector('#newTodoForm'); //gets a newTodoForm element defined in forms.js
    newForm.classList.remove('hidden');
    newForm.classList.add('flex');
    showTodoFormBtn.classList.toggle('hidden');
})



/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOption": () => (/* binding */ createOption),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "renderTodos": () => (/* binding */ renderTodos),
/* harmony export */   "setFieldAttributes": () => (/* binding */ setFieldAttributes)
/* harmony export */ });
/* harmony import */ var _projects_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-logic */ "./src/projects-logic.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ "./src/forms.js");



function createOption(valueAndText) {
    const option = document.createElement('option');
    option.setAttribute('value', valueAndText);
    option.innerHTML = valueAndText;
    return option;
}

function setFieldAttributes (element, type, idAndName) {
    element.setAttribute('type', type);
    element.setAttribute('id', idAndName);
    element.setAttribute('name', idAndName);
    element.setAttribute('required', '');
}

function createDeleteTodoBtn() {
    const button = document.createElement('button');

    button.innerHTML = 'delete';
    button.addEventListener('click', (e) => {
        const index = e.target.parentElement.getAttribute('data-number');
        const selectedProject = _projects_logic__WEBPACK_IMPORTED_MODULE_0__.projectsHolder.list[_projects_logic__WEBPACK_IMPORTED_MODULE_0__.projectsHolder.selectedProject];
        selectedProject.todolist.splice(index, 1);
        renderTodos(_projects_logic__WEBPACK_IMPORTED_MODULE_0__.projectsHolder.selectedProject);
    })

    return button;
}

function renderTodos (id) {
    const todoSpace = document.querySelector('.todos-grid');
    
    const targetProject = _projects_logic__WEBPACK_IMPORTED_MODULE_0__.projectsHolder.list[id];
    const todos = targetProject.todolist;

    while(todoSpace.firstChild) {
        todoSpace.removeChild(todoSpace.firstChild);
    }
    todos.forEach((todo, index) => {
        const todoCard = document.createElement('div');
        todoCard.classList.add('todo-card');
        todoCard.setAttribute('data-number', index);
        
        const todoTitle = document.createElement('p');
        todoTitle.innerHTML = todo.title;
        const todoDescription = document.createElement('p');
        todoDescription.innerHTML = todo.description;
        const duedate = document.createElement('p');
        duedate.innerHTML = todo.duedate;
        const priority = document.createElement('p');
        priority.innerHTML = todo.priority;
        const deleteButton = createDeleteTodoBtn();
        todoCard.append(todoTitle, todoDescription, duedate, priority, deleteButton);

        todoSpace.appendChild(todoCard);
    })
    todoSpace.appendChild(_forms__WEBPACK_IMPORTED_MODULE_1__.showTodoFormBtn);
    todoSpace.appendChild(_forms__WEBPACK_IMPORTED_MODULE_1__.newTodoForm);
}

//non-exported function, used to add delete button to a project tab (line 41)
function createDeleteProjectBtn(index){
    const deleteButton = document.createElement('button');
    
    deleteButton.classList.add('deleteProjectBtn');
    deleteButton.innerHTML = 'delete';
    
    deleteButton.addEventListener('click', (e) => {
        const index = e.target.parentElement.getAttribute('data-number');
        _projects_logic__WEBPACK_IMPORTED_MODULE_0__.projectsHolder.list.splice(index, 1);
        renderProjects(_projects_logic__WEBPACK_IMPORTED_MODULE_0__.projectsHolder.list);
    });

    return deleteButton;
}

//non-exported function, used to add functionality to project tabs aka project buttons and renders Todo's of selected project
function AddTodoRendering () {
    const projectButtons = document.querySelectorAll('.projectButton');
    projectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            _projects_logic__WEBPACK_IMPORTED_MODULE_0__.projectsHolder.selectedProject = e.target.getAttribute('data-number');
            renderTodos(_projects_logic__WEBPACK_IMPORTED_MODULE_0__.projectsHolder.selectedProject);
        })
    })
};

function renderProjects (projectslist) {
    const projectSpace = document.querySelector('#projectSpace');
    while(projectSpace.firstChild){
        projectSpace.removeChild(projectSpace.firstChild);
    }
    projectslist.forEach((entry, index) => {
        const project = document.createElement('p');
        const deleteButton = createDeleteProjectBtn(index);

        project.setAttribute('data-number', index);
        project.innerHTML = entry.title;
        project.classList.add('projectButton');
        
        projectSpace.appendChild(project);
        project.appendChild(deleteButton);
    });
    AddTodoRendering();
    renderTodos(_projects_logic__WEBPACK_IMPORTED_MODULE_0__.projectsHolder.selectedProject);
}



/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderLayout)
/* harmony export */ });
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");


function renderLayout() {
    const body = document.querySelector('body');
    
    const grid = document.createElement('div');
    grid.classList.add('grid-container');
    body.appendChild(grid);

    const header = document.createElement('div');
    header.classList.add('header');

    const logo = document.createElement('h1');
    logo.classList.add('logo');
    logo.innerText= 'Todo planet';
    header.appendChild(logo);

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const projectSpace = document.createElement('div');
    projectSpace.setAttribute('id', 'projectSpace');

    const showProjectFormBtn = document.createElement('button');
    showProjectFormBtn.setAttribute('id', 'showProjectFormBtn');
    showProjectFormBtn.innerText = 'New Project';
    showProjectFormBtn.addEventListener('click', () => {
        const newForm = document.querySelector('#newProjectForm'); //gets a newProjectForm element that is defined in forms.js
        newForm.classList.toggle('hidden');
        showProjectFormBtn.classList.toggle('hidden');
    });

    sidebar.append(projectSpace, _forms_js__WEBPACK_IMPORTED_MODULE_0__.newProjectForm, showProjectFormBtn);

    const content = document.createElement('div');
    content.classList.add('content');
    
    const contentSpace = document.createElement('div');
    contentSpace.classList.add('todos-grid');

    content.appendChild(contentSpace);

    const footer = document.createElement('div');
    footer.classList.add('footer');

    grid.append(header, sidebar, content, footer);
}

/***/ }),

/***/ "./src/projects-logic.js":
/*!*******************************!*\
  !*** ./src/projects-logic.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "projectsHolder": () => (/* binding */ projectsHolder)
/* harmony export */ });
class Project {
    constructor(title) {
        this.title = title;
        this.todolist = [];
    }
}
class Todo {
    constructor (title, description, duedate, priority) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
    }
}
const projectsHolder = {
    list : [
            {
                title: 'first project',
                todolist: [
                    {
                        title: 'title 1',
                        description: 'description',
                        date: 'date',
                        priority: 'low priority'
                    }
                ]
            },
    ],
    selectedProject: 0
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
/* harmony import */ var _projects_logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-logic.js */ "./src/projects-logic.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.js */ "./src/layout.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions.js */ "./src/functions.js");





(0,_layout_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_functions_js__WEBPACK_IMPORTED_MODULE_3__.renderProjects)(_projects_logic_js__WEBPACK_IMPORTED_MODULE_0__.projectsHolder.list);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQ0FBaUMscURBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBbUQ7QUFDNUI7QUFDZ0I7QUFDUztBQUNoRDtBQUNBLHNEQUFZO0FBQ1osNkRBQWMsQ0FBQyxtRUFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xheW91dC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy1sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290LCBib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggODB2aCAxMHZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHZ3IDgwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgY29sb3I6IHdoZWF0O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBjb2xvcjogd2hlYXQ7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDc1LCA3NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI25ld1Byb2plY3RGb3JtIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI25ld1RvZG9Gb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNuZXdUb2RvRm9ybSAqIHtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG59XFxuXFxuLnByb2plY3RCdXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiB3aGVhdDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAzMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCA2NSwgNjUpO1xcbn1cXG5cXG4jc2hvd1Byb2plY3RGb3JtQnRuIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG59XFxuXFxuLnRvZG9zLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyNDBweCk7XFxuICBncmlkLWF1dG8tcm93czogMjQwcHg7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi50b2RvLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7RUFFQSw4QkFBQTtBQUFKOztBQUVBO0VBQ0ksa0NBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhDQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCwgYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA4MHZoIDEwdmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjB2dyA4MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gICAgY29sb3I6IHdoZWF0O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgY29sb3I6IHdoZWF0O1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgICBncmlkLXJvdzogMi8zO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCA3NSwgNzUpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jbmV3UHJvamVjdEZvcm0ge1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcbiNuZXdUb2RvRm9ybSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3VG9kb0Zvcm0gKiB7XFxyXFxuICAgIG1hcmdpbjogNXB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RCdXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogd2hlYXQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDMwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG5cXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4ucHJvamVjdEJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDY1LCA2NSk7XFxyXFxufVxcclxcblxcclxcbiNzaG93UHJvamVjdEZvcm1CdG4ge1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXHJcXG4gICAgZ3JpZC1yb3c6IDIvMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxyXFxufVxcclxcblxcclxcbi50b2Rvcy1ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDI0MHB4KTtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDI0MHB4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIGdyaWQtcm93OiAzLzQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZU9wdGlvbiwgc2V0RmllbGRBdHRyaWJ1dGVzLCByZW5kZXJUb2RvcyB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge1Byb2plY3QsVG9kbywgcHJvamVjdHNIb2xkZXJ9IGZyb20gXCIuL3Byb2plY3RzLWxvZ2ljLmpzXCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2plY3RzIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XHJcblxyXG4vL25ldyBwcm9qZWN0IGZvcm0gZGVmaW5pdGlvblxyXG5jb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxubmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICduZXdQcm9qZWN0Rm9ybScpO1xyXG5uZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbmNvbnN0IHByb2plY3RUaXRsZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxucHJvamVjdFRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IHRpdGxlJyk7XHJcbnNldEZpZWxkQXR0cmlidXRlcyhwcm9qZWN0VGl0bGVGaWVsZCwgJ3RleHQnLCAncHJvamVjdFRpdGxlJyk7XHJcblxyXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbm5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpLnZhbHVlKTsgXHJcbiAgICBwcm9qZWN0c0hvbGRlci5saXN0LnB1c2gocHJvamVjdCk7XHJcbiAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0c0hvbGRlci5saXN0KTtcclxuICAgIGNvbnN0IG5ld0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvd1Byb2plY3RGb3JtQnRuJyk7IC8vZ2V0cyBhIGJ1dHRvbiBlbGVtZW50IHRoYXQgc2hvd3MgcHJvamVjdCBmb3JtLCBkZWZpbmVkIGluIGxheW91dC5qc1xyXG4gICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICBuZXdGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG59KTtcclxubmV3UHJvamVjdEZvcm0uYXBwZW5kKHByb2plY3RUaXRsZUZpZWxkLCBhZGRQcm9qZWN0QnRuKTtcclxuXHJcbi8vbmV3IHRvZG8gdGFzayBmb3JtIGRlZmluaXRpb25cclxuY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbm5ld1RvZG9Gb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3VG9kb0Zvcm0nKTtcclxubmV3VG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG5jb25zdCB0b2RvVGl0bGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnRvZG9UaXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVG9kbyB0b3RsZScpO1xyXG5zZXRGaWVsZEF0dHJpYnV0ZXModG9kb1RpdGxlRmllbGQsICd0ZXh0JywgJ3RvZG9UaXRsZScpO1xyXG5jb25zdCB0b2RvRGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnRvZG9EZXNjcmlwdGlvbkZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVG9kbyBkZXNjcmlwdGlvbicpO1xyXG5zZXRGaWVsZEF0dHJpYnV0ZXModG9kb0Rlc2NyaXB0aW9uRmllbGQsICd0ZXh0JywgJ3RvZG9EZXNjcmlwdGlvbicpO1xyXG5jb25zdCB0b2RvRHVlRGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuc2V0RmllbGRBdHRyaWJ1dGVzKHRvZG9EdWVEYXRlRmllbGQsICdkYXRlJywgJ3RvZG9EdWVEYXRlJyk7XHJcblxyXG5jb25zdCB0b2RvUHJpb3JpdHlGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG50b2RvUHJpb3JpdHlGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9Qcmlvcml0eScpO1xyXG5jb25zdCBsb3dQcmlvcml0eSA9IGNyZWF0ZU9wdGlvbignbG93IHByaW9yaXR5Jyk7XHJcbmNvbnN0IHJlZ3VsYXJQcmlvcml0eSA9IGNyZWF0ZU9wdGlvbigncmVndWxhciBwcmlvcml0eScpO1xyXG5jb25zdCBoaWdoUHJpb3JpdHkgPSBjcmVhdGVPcHRpb24oJ2hpZ2ggcHJpb3JpdHknKTtcclxudG9kb1ByaW9yaXR5RmllbGQuYXBwZW5kKGxvd1ByaW9yaXR5LCByZWd1bGFyUHJpb3JpdHksIGhpZ2hQcmlvcml0eSk7XHJcblxyXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuYWRkVG9kb0J0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbm5ld1RvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyhcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpdGxlJykudmFsdWUsXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvbicpLnZhbHVlLFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRHVlRGF0ZScpLnZhbHVlLFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJpb3JpdHknKS52YWx1ZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RzSG9sZGVyLnNlbGVjdGVkUHJvamVjdDtcclxuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzSG9sZGVyLmxpc3RbaW5kZXhdO1xyXG4gICAgc2VsZWN0ZWRQcm9qZWN0LnRvZG9saXN0LnB1c2godG9kbyk7XHJcbiAgICBcclxuICAgIHJlbmRlclRvZG9zKGluZGV4KTtcclxuICAgIFxyXG4gICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUb2RvQnRuJyk7IC8vZ2V0cyBhIGJ1dHRvbiBlbGVtZW50IHRoYXQgc2hvd3MgdG9kbyBmb3JtLCBkZWZpbmVkIGluIGxheW91dC5qc1xyXG4gICAgbmV3VG9kb0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpO1xyXG4gICAgbmV3VG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBuZXdGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG59KTtcclxuXHJcbm5ld1RvZG9Gb3JtLmFwcGVuZChcclxuICAgIHRvZG9UaXRsZUZpZWxkLCB0b2RvRGVzY3JpcHRpb25GaWVsZCwgXHJcbiAgICB0b2RvRHVlRGF0ZUZpZWxkLCB0b2RvUHJpb3JpdHlGaWVsZCwgYWRkVG9kb0J0blxyXG4pO1xyXG5cclxuY29uc3Qgc2hvd1RvZG9Gb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbnNob3dUb2RvRm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1RvZG9CdG4nKTtcclxuc2hvd1RvZG9Gb3JtQnRuLmlubmVyVGV4dCA9ICdOZXcgVG9kbyc7XHJcbnNob3dUb2RvRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VG9kb0Zvcm0nKTsgLy9nZXRzIGEgbmV3VG9kb0Zvcm0gZWxlbWVudCBkZWZpbmVkIGluIGZvcm1zLmpzXHJcbiAgICBuZXdGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgbmV3Rm9ybS5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XHJcbiAgICBzaG93VG9kb0Zvcm1CdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbn0pXHJcblxyXG5leHBvcnQge25ld1Byb2plY3RGb3JtLCBuZXdUb2RvRm9ybSwgc2hvd1RvZG9Gb3JtQnRufTsiLCJpbXBvcnQgeyBwcm9qZWN0c0hvbGRlciB9IGZyb20gXCIuL3Byb2plY3RzLWxvZ2ljXCI7XHJcbmltcG9ydCB7IHNob3dUb2RvRm9ybUJ0biwgbmV3VG9kb0Zvcm0gfSBmcm9tIFwiLi9mb3Jtc1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uKHZhbHVlQW5kVGV4dCkge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlQW5kVGV4dCk7XHJcbiAgICBvcHRpb24uaW5uZXJIVE1MID0gdmFsdWVBbmRUZXh0O1xyXG4gICAgcmV0dXJuIG9wdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RmllbGRBdHRyaWJ1dGVzIChlbGVtZW50LCB0eXBlLCBpZEFuZE5hbWUpIHtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZEFuZE5hbWUpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBpZEFuZE5hbWUpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEZWxldGVUb2RvQnRuKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgYnV0dG9uLmlubmVySFRNTCA9ICdkZWxldGUnO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW51bWJlcicpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzSG9sZGVyLmxpc3RbcHJvamVjdHNIb2xkZXIuc2VsZWN0ZWRQcm9qZWN0XTtcclxuICAgICAgICBzZWxlY3RlZFByb2plY3QudG9kb2xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICByZW5kZXJUb2Rvcyhwcm9qZWN0c0hvbGRlci5zZWxlY3RlZFByb2plY3QpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUb2RvcyAoaWQpIHtcclxuICAgIGNvbnN0IHRvZG9TcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1ncmlkJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRhcmdldFByb2plY3QgPSBwcm9qZWN0c0hvbGRlci5saXN0W2lkXTtcclxuICAgIGNvbnN0IHRvZG9zID0gdGFyZ2V0UHJvamVjdC50b2RvbGlzdDtcclxuXHJcbiAgICB3aGlsZSh0b2RvU3BhY2UuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHRvZG9TcGFjZS5yZW1vdmVDaGlsZCh0b2RvU3BhY2UuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgndG9kby1jYXJkJyk7XHJcbiAgICAgICAgdG9kb0NhcmQuc2V0QXR0cmlidXRlKCdkYXRhLW51bWJlcicsIGluZGV4KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdG9kb1RpdGxlLmlubmVySFRNTCA9IHRvZG8udGl0bGU7XHJcbiAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZHVlZGF0ZS5pbm5lckhUTUwgPSB0b2RvLmR1ZWRhdGU7XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gdG9kby5wcmlvcml0eTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVEZWxldGVUb2RvQnRuKCk7XHJcbiAgICAgICAgdG9kb0NhcmQuYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgdG9kb1NwYWNlLmFwcGVuZENoaWxkKHRvZG9DYXJkKTtcclxuICAgIH0pXHJcbiAgICB0b2RvU3BhY2UuYXBwZW5kQ2hpbGQoc2hvd1RvZG9Gb3JtQnRuKTtcclxuICAgIHRvZG9TcGFjZS5hcHBlbmRDaGlsZChuZXdUb2RvRm9ybSk7XHJcbn1cclxuXHJcbi8vbm9uLWV4cG9ydGVkIGZ1bmN0aW9uLCB1c2VkIHRvIGFkZCBkZWxldGUgYnV0dG9uIHRvIGEgcHJvamVjdCB0YWIgKGxpbmUgNDEpXHJcbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZVByb2plY3RCdG4oaW5kZXgpe1xyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBcclxuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVQcm9qZWN0QnRuJyk7XHJcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJ2RlbGV0ZSc7XHJcbiAgICBcclxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1udW1iZXInKTtcclxuICAgICAgICBwcm9qZWN0c0hvbGRlci5saXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHNIb2xkZXIubGlzdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGVsZXRlQnV0dG9uO1xyXG59XHJcblxyXG4vL25vbi1leHBvcnRlZCBmdW5jdGlvbiwgdXNlZCB0byBhZGQgZnVuY3Rpb25hbGl0eSB0byBwcm9qZWN0IHRhYnMgYWthIHByb2plY3QgYnV0dG9ucyBhbmQgcmVuZGVycyBUb2RvJ3Mgb2Ygc2VsZWN0ZWQgcHJvamVjdFxyXG5mdW5jdGlvbiBBZGRUb2RvUmVuZGVyaW5nICgpIHtcclxuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RCdXR0b24nKTtcclxuICAgIHByb2plY3RCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0c0hvbGRlci5zZWxlY3RlZFByb2plY3QgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtYmVyJyk7XHJcbiAgICAgICAgICAgIHJlbmRlclRvZG9zKHByb2plY3RzSG9sZGVyLnNlbGVjdGVkUHJvamVjdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyAocHJvamVjdHNsaXN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0U3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFNwYWNlJyk7XHJcbiAgICB3aGlsZShwcm9qZWN0U3BhY2UuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgcHJvamVjdFNwYWNlLnJlbW92ZUNoaWxkKHByb2plY3RTcGFjZS5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIHByb2plY3RzbGlzdC5mb3JFYWNoKChlbnRyeSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZURlbGV0ZVByb2plY3RCdG4oaW5kZXgpO1xyXG5cclxuICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1udW1iZXInLCBpbmRleCk7XHJcbiAgICAgICAgcHJvamVjdC5pbm5lckhUTUwgPSBlbnRyeS50aXRsZTtcclxuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RCdXR0b24nKTtcclxuICAgICAgICBcclxuICAgICAgICBwcm9qZWN0U3BhY2UuYXBwZW5kQ2hpbGQocHJvamVjdCk7XHJcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG4gICAgfSk7XHJcbiAgICBBZGRUb2RvUmVuZGVyaW5nKCk7XHJcbiAgICByZW5kZXJUb2Rvcyhwcm9qZWN0c0hvbGRlci5zZWxlY3RlZFByb2plY3QpO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZU9wdGlvbiwgc2V0RmllbGRBdHRyaWJ1dGVzLCByZW5kZXJQcm9qZWN0cywgcmVuZGVyVG9kb3N9OyIsImltcG9ydCB7IG5ld1Byb2plY3RGb3JtLCBuZXdUb2RvRm9ybSxzaG93VG9kb0Zvcm1CdG4gfSBmcm9tIFwiLi9mb3Jtcy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTGF5b3V0KCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIFxyXG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkLWNvbnRhaW5lcicpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChncmlkKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuXHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xyXG4gICAgbG9nby5pbm5lclRleHQ9ICdUb2RvIHBsYW5ldCc7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcblxyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdFNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0U3BhY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0U3BhY2UnKTtcclxuXHJcbiAgICBjb25zdCBzaG93UHJvamVjdEZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHNob3dQcm9qZWN0Rm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nob3dQcm9qZWN0Rm9ybUJ0bicpO1xyXG4gICAgc2hvd1Byb2plY3RGb3JtQnRuLmlubmVyVGV4dCA9ICdOZXcgUHJvamVjdCc7XHJcbiAgICBzaG93UHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdQcm9qZWN0Rm9ybScpOyAvL2dldHMgYSBuZXdQcm9qZWN0Rm9ybSBlbGVtZW50IHRoYXQgaXMgZGVmaW5lZCBpbiBmb3Jtcy5qc1xyXG4gICAgICAgIG5ld0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgc2hvd1Byb2plY3RGb3JtQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2lkZWJhci5hcHBlbmQocHJvamVjdFNwYWNlLCBuZXdQcm9qZWN0Rm9ybSwgc2hvd1Byb2plY3RGb3JtQnRuKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgY29uc3QgY29udGVudFNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50U3BhY2UuY2xhc3NMaXN0LmFkZCgndG9kb3MtZ3JpZCcpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFNwYWNlKTtcclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuXHJcbiAgICBncmlkLmFwcGVuZChoZWFkZXIsIHNpZGViYXIsIGNvbnRlbnQsIGZvb3Rlcik7XHJcbn0iLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnRvZG9saXN0ID0gW107XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRvZG8ge1xyXG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c0hvbGRlciA9IHtcclxuICAgIGxpc3QgOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnZmlyc3QgcHJvamVjdCcsXHJcbiAgICAgICAgICAgICAgICB0b2RvbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICd0aXRsZSAxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6ICdsb3cgcHJpb3JpdHknXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIHNlbGVjdGVkUHJvamVjdDogMFxyXG59O1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtwcm9qZWN0c0hvbGRlcn0gZnJvbSBcIi4vcHJvamVjdHMtbG9naWMuanNcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQgcmVuZGVyTGF5b3V0IGZyb20gXCIuL2xheW91dC5qc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0cyB9IGZyb20gXCIuL2Z1bmN0aW9ucy5qc1wiO1xyXG5cclxucmVuZGVyTGF5b3V0KCk7XHJcbnJlbmRlclByb2plY3RzKHByb2plY3RzSG9sZGVyLmxpc3QpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=