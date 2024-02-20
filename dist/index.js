/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
var _EssentialBlocksLocal;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






// import {
// 	generateDimensionsAttributes,
// 	generateTypographyAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes,
// } from "../../../util/helpers";

var _window$EBTeamMemberC = window.EBTeamMemberControls,
  generateDimensionsAttributes = _window$EBTeamMemberC.generateDimensionsAttributes,
  generateTypographyAttributes = _window$EBTeamMemberC.generateTypographyAttributes,
  generateBackgroundAttributes = _window$EBTeamMemberC.generateBackgroundAttributes,
  generateBorderShadowAttributes = _window$EBTeamMemberC.generateBorderShadowAttributes,
  generateResponsiveRangeAttributes = _window$EBTeamMemberC.generateResponsiveRangeAttributes;
var attributes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  // the following 4 attributes is must required for responsive options and asset generation for frontend
  // responsive control attributes ⬇
  resOption: {
    type: "string",
    "default": "Desktop"
  },
  // blockId attribute for making unique className and other uniqueness ⬇
  blockId: {
    type: "string"
  },
  blockRoot: {
    type: "string",
    "default": "essential_block"
  },
  // blockMeta is for keeping all the styles ⬇
  blockMeta: {
    type: "object"
  },
  // member name
  name: {
    type: "string",
    "default": "John Doe"
  },
  // job title
  jobTitle: {
    type: "string",
    "default": "Software Engineer"
  },
  //
  showDescs: {
    type: "boolean",
    "default": true
  },
  showDesignation: {
    type: "boolean",
    "default": true
  },
  // member description
  description: {
    type: "string",
    "default": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  //
  imageUrl: {
    source: "attribute",
    selector: ".eb-team-member-avatar",
    attribute: "src",
    "default": ((_EssentialBlocksLocal = EssentialBlocksLocalize) === null || _EssentialBlocksLocal === void 0 ? void 0 : _EssentialBlocksLocal.eb_plugins_url) + "assets/images/user.jpg"
  },
  //
  imageId: {
    type: "string"
  },
  imageAlt: {
    type: "string"
  },
  //
  isImgHeightAuto: {
    type: "boolean",
    "default": false
  },
  //
  icnEffect: {
    type: "string"
  },
  //
  descsColor: {
    type: "string",
    "default": "var(--eb-global-text-color)"
  },
  nameColor: {
    type: "string",
    "default": "var(--eb-global-heading-color)"
  },
  jobColor: {
    type: "string",
    "default": "var(--eb-global-heading-color)"
  },
  // social profiles

  showSocials: {
    type: "boolean",
    "default": true
  },
  showLinkNewTab: {
    type: "boolean",
    "default": true
  },
  iconsJustify: {
    type: "string",
    "default": "center"
  },
  iconsVAlign: {
    type: "string",
    "default": "center"
  },
  profilesOnly: {
    type: "array"
  },
  socialDetails: {
    type: "array",
    "default": []
  },
  //
  contentsAlign: {
    type: "string",
    "default": "center"
  },
  imageAlign: {
    type: "string",
    "default": "center"
  },
  //
  preset: {
    type: "string",
    "default": "default"
  },
  //
  socialInImage: {
    type: "Boolean",
    "default": false
  },
  //
  imgBeforeEl: {
    type: "Boolean",
    "default": false
  },
  //
  showCSeparator: {
    type: "Boolean",
    "default": false
  },
  showSSeparator: {
    type: "Boolean",
    "default": false
  },
  cSepAlign: {
    type: "string",
    "default": "center"
  },
  sSepAlign: {
    type: "string",
    "default": "center"
  },
  cSepColor: {
    type: "string"
  },
  sSepColor: {
    type: "string"
  },
  cSepType: {
    type: "string",
    "default": "solid"
  },
  sSepType: {
    type: "string",
    "default": "solid"
  },
  //
  isIconsDevider: {
    type: "boolean",
    "default": false
  },
  icnsDevideColor: {
    type: "string"
  },
  icnSepW: {
    type: "number",
    "default": 1
  },
  icnSepH: {
    type: "number",
    "default": 30
  },
  hvIcnColor: {
    type: "string"
  },
  hvIcnBgc: {
    type: "string"
  },
  conVtAlign: {
    type: "string",
    "default": "center"
  },
  isConBgGradient: {
    type: "boolean",
    "default": true
  },
  conBgGradient: {
    type: "string",
    "default": "linear-gradient(211deg, #C8D2E3 0%, rgb(154 164 182 / 60%) 100%)"
  },
  conBgColor: {
    type: "string"
  },
  imgCnVtAlign: {
    type: "string",
    "default": "flex-start"
  },
  isP9reverse: {
    type: "boolean",
    "default": false
  },
  avatarURL: {
    type: "string",
    "default": ""
  },
  newWindow: {
    type: "boolean",
    "default": false
  },
  isContentOverlay: {
    type: "boolean",
    "default": false
  },
  showSocialTitle: {
    type: "boolean",
    "default": false
  },
  hoverPreset: {
    type: "string",
    "default": "hover-left"
  }
}, generateTypographyAttributes(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__))), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.imageWidth, {
  defaultRange: 200
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.imageHeight, {
  defaultRange: 200
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.rangeIconSize, {
  defaultRange: 20,
  noUnits: true
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.rangeIconPadding, {
  defaultRange: 1,
  noUnits: true
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.rangeIconDistance, {
  defaultRange: 20,
  noUnits: true
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.rangeIconRowGap, {
  defaultRange: 4,
  noUnits: true
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.wrapperWidth, {
  defaultUnit: "%",
  defaultRange: 100
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.imgTopBgHeight, {
  defaultRange: 150
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.cSepWPrefix, {
  defaultRange: 70
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.sSepWPrefix, {
  defaultUnit: "%",
  defaultRange: 90
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.cSepHPrefix, {
  defaultRange: 3
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.sSepHPrefix, {
  defaultRange: 1
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.sclDeviderPosRight, {
  defaultRange: 23
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.p9LGap, {
  defaultRange: 20
})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.WrpBgConst, {
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)"
  // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.socialWrpBg, {
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
  // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true',
  noMainBgi: true,
  noOverlay: true
})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.imgTopBgPrefix, {
  defaultFillColor: "var(--eb-global-primary-color)",
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)"
  // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
})), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.WrpBdShadowConst, {
  // noShadow: true,
  // noBorder: true,
})), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.prefixImgBd, {
  // noShadow: true,
  // noBorder: true,
})), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.prefixSocialBdShadow, {
  noShadow: true,
  bdrDefaults: {
    top: 1,
    bottom: 1,
    right: 1,
    left: 1
  }
  // noBorder: true,
})), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.ovlBdPrefix, {
  // noShadow: true,
  noBdrHover: true
  // bdrDefaults: {
  // 	top: 1,
  // 	bottom: 1,
  // 	right: 1,
  // 	left: 1,
  // },
  // noBorder: true,
})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.tmbWrapMarginConst)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.tmbWrapPaddingConst)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.imageMarginConst)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.imagePaddingConst)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.tmbDescsPaddingConst, {
  top: 15,
  bottom: 20,
  isLinked: false
})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.contentsMargin, {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20
})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.contentsPad, {
  top: 50,
  bottom: 50,
  left: 50,
  right: 50
})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.tmbNamePaddingConst, {
  top: 20,
  bottom: 15,
  isLinked: false
})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.tmbJobPaddingConst, {
  // top: 10,
  // bottom: 20,
  // isLinked: false,
})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.iconsWrapPadding, {
  top: 10,
  // bottom: 20,
  isLinked: false
})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.iconsWrapMargin, {
  // top: 10,
  // bottom: 20,
  // isLinked: false,
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/components/deprecated-social-links-1.js":
/*!*****************************************************!*\
  !*** ./src/components/deprecated-social-links-1.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SocialLinksDeprecated1)
/* harmony export */ });
function SocialLinksDeprecated1(_ref) {
  var _ref$socialDetails = _ref.socialDetails,
    socialDetails = _ref$socialDetails === void 0 ? [] : _ref$socialDetails,
    icnEffect = _ref.icnEffect;
  return /*#__PURE__*/React.createElement("ul", {
    className: "socials"
  }, socialDetails.map(function (_ref2, index) {
    var link = _ref2.link,
      icon = _ref2.icon;
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement("a", {
      className: icnEffect || " ",
      href: link
    }, /*#__PURE__*/React.createElement("i", {
      className: "hvr-icon social-icon ".concat(icon)
    })));
  }));
}

/***/ }),

/***/ "./src/components/deprecated-social-links-2.js":
/*!*****************************************************!*\
  !*** ./src/components/deprecated-social-links-2.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SocialLinks)
/* harmony export */ });
function SocialLinks(_ref) {
  var _ref$socialDetails = _ref.socialDetails,
    socialDetails = _ref$socialDetails === void 0 ? [] : _ref$socialDetails,
    icnEffect = _ref.icnEffect;
  return /*#__PURE__*/React.createElement("ul", {
    className: "socials"
  }, socialDetails.map(function (_ref2, index) {
    var link = _ref2.link,
      icon = _ref2.icon,
      linkOpenNewTab = _ref2.linkOpenNewTab;
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement("a", {
      className: icnEffect || " ",
      href: link,
      target: linkOpenNewTab ? "_blank" : "_self",
      rel: "noopener"
    }, /*#__PURE__*/React.createElement("i", {
      className: "hvr-icon social-icon ".concat(icon)
    })));
  }));
}

/***/ }),

/***/ "./src/components/deprecated-social-links-3.js":
/*!*****************************************************!*\
  !*** ./src/components/deprecated-social-links-3.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SocialLinks)
/* harmony export */ });
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SocialLinks(_ref) {
  var _ref$socialDetails = _ref.socialDetails,
    socialDetails = _ref$socialDetails === void 0 ? [] : _ref$socialDetails,
    icnEffect = _ref.icnEffect,
    linkNewTab = _ref.linkNewTab,
    preset = _ref.preset;
  return /*#__PURE__*/React.createElement("ul", {
    className: "socials ".concat(preset === 'new-preset3' ? 'socials-title' : "")
  }, socialDetails.map(function (_ref2, index) {
    var title = _ref2.title,
      link = _ref2.link,
      icon = _ref2.icon;
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement("a", _extends({
      className: icnEffect || " ",
      href: link ? link : "#"
    }, link && {
      target: linkNewTab ? "_blank" : "_self"
    }, {
      // target={linkNewTab ? "_blank" : "_self"}
      rel: "noopener",
      title: title ? title : ""
    }), /*#__PURE__*/React.createElement("i", {
      className: "hvr-icon social-icon ".concat(icon)
    }), preset === 'new-preset3' && title ? title : ""));
  }));
}

/***/ }),

/***/ "./src/components/social-links.js":
/*!****************************************!*\
  !*** ./src/components/social-links.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SocialLinks)
/* harmony export */ });
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var EBDisplayIcon = window.EBTeamMemberControls.EBDisplayIcon;
function SocialLinks(_ref) {
  var _ref$socialDetails = _ref.socialDetails,
    socialDetails = _ref$socialDetails === void 0 ? [] : _ref$socialDetails,
    icnEffect = _ref.icnEffect,
    linkNewTab = _ref.linkNewTab,
    preset = _ref.preset;
  return /*#__PURE__*/React.createElement("ul", {
    className: "socials ".concat(preset === 'new-preset3' ? 'socials-title' : "")
  }, socialDetails.map(function (_ref2, index) {
    var title = _ref2.title,
      link = _ref2.link,
      icon = _ref2.icon;
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement("a", _extends({
      className: icnEffect || " ",
      href: link ? link : "#"
    }, link && {
      target: linkNewTab ? "_blank" : "_self"
    }, {
      // target={linkNewTab ? "_blank" : "_self"}
      rel: "noopener",
      title: title ? title : ""
    }), /*#__PURE__*/React.createElement(EBDisplayIcon, {
      className: 'hvr-icon social-icon',
      icon: icon
    }), preset === 'new-preset3' && title ? title : ""));
  }));
}

/***/ }),

/***/ "./src/constants/backgroundsConstants.js":
/*!***********************************************!*\
  !*** ./src/constants/backgroundsConstants.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WrpBgConst: () => (/* binding */ WrpBgConst),
/* harmony export */   imgTopBgPrefix: () => (/* binding */ imgTopBgPrefix),
/* harmony export */   socialWrpBg: () => (/* binding */ socialWrpBg)
/* harmony export */ });
// each and every const here has to be totally unique from one another

var WrpBgConst = "WrpBg_";
var imgTopBgPrefix = "imgBgP_";
var socialWrpBg = "sclWBg_";

/***/ }),

/***/ "./src/constants/borderShadowConstants.js":
/*!************************************************!*\
  !*** ./src/constants/borderShadowConstants.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WrpBdShadowConst: () => (/* binding */ WrpBdShadowConst),
/* harmony export */   ovlBdPrefix: () => (/* binding */ ovlBdPrefix),
/* harmony export */   prefixImgBd: () => (/* binding */ prefixImgBd),
/* harmony export */   prefixSocialBdShadow: () => (/* binding */ prefixSocialBdShadow)
/* harmony export */ });
// each and every const here has to be totally unique from one another

var WrpBdShadowConst = "wrpBdSd_";
var prefixSocialBdShadow = "sclBdSd_";
var prefixImgBd = "imgBd_";
var ovlBdPrefix = "ovlBd_";

/***/ }),

/***/ "./src/constants/dimensionsConstants.js":
/*!**********************************************!*\
  !*** ./src/constants/dimensionsConstants.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentsMargin: () => (/* binding */ contentsMargin),
/* harmony export */   contentsPad: () => (/* binding */ contentsPad),
/* harmony export */   iconsWrapMargin: () => (/* binding */ iconsWrapMargin),
/* harmony export */   iconsWrapPadding: () => (/* binding */ iconsWrapPadding),
/* harmony export */   imageMarginConst: () => (/* binding */ imageMarginConst),
/* harmony export */   imagePaddingConst: () => (/* binding */ imagePaddingConst),
/* harmony export */   tmbDescsPaddingConst: () => (/* binding */ tmbDescsPaddingConst),
/* harmony export */   tmbJobPaddingConst: () => (/* binding */ tmbJobPaddingConst),
/* harmony export */   tmbNamePaddingConst: () => (/* binding */ tmbNamePaddingConst),
/* harmony export */   tmbWrapMarginConst: () => (/* binding */ tmbWrapMarginConst),
/* harmony export */   tmbWrapPaddingConst: () => (/* binding */ tmbWrapPaddingConst)
/* harmony export */ });
// each and every const here has to be totally unique from one another

var tmbWrapMarginConst = "wrpMrg_";
var tmbWrapPaddingConst = "wrpPad_";
var tmbDescsPaddingConst = "dscP_";
var tmbNamePaddingConst = "nameP_";
var tmbJobPaddingConst = "jobP_";
var iconsWrapPadding = "icnWp_";
var iconsWrapMargin = "icnWm_";
var imageMarginConst = "imgMrg_";
var imagePaddingConst = "imgPd_";
var contentsPad = "cpd_";
var contentsMargin = "cmrg_";

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentsVerticalAligns: () => (/* binding */ ContentsVerticalAligns),
/* harmony export */   HOVER_ALIGN: () => (/* binding */ HOVER_ALIGN),
/* harmony export */   HOVER_EFFECT: () => (/* binding */ HOVER_EFFECT),
/* harmony export */   IconsHzAligns: () => (/* binding */ IconsHzAligns),
/* harmony export */   STYLE_PRESETS: () => (/* binding */ STYLE_PRESETS),
/* harmony export */   separatorTypes: () => (/* binding */ separatorTypes),
/* harmony export */   sizeUnitTypes: () => (/* binding */ sizeUnitTypes)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


var sizeUnitTypes = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
var IconsHzAligns = [{
  label: "Center",
  value: "center"
}, {
  label: "Left",
  value: "flex-start"
}, {
  label: "Right",
  value: "flex-end"
}, {
  label: "Space Between",
  value: "space-between"
}, {
  label: "Space Around",
  value: "space-around"
}, {
  label: "Space Evenly",
  value: "space-evenly"
}];
var ContentsVerticalAligns = [{
  label: "Top",
  value: "flex-start"
}, {
  label: "Center",
  value: "center"
}, {
  label: "Bottom",
  value: "flex-end"
}];
var STYLE_PRESETS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "essential-blocks"),
  value: "default"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 1", "essential-blocks"),
  value: "preset1"
},
// { label: __("Preset 2 (hover overlay)"), value: "preset2" }, // this was preset 3
{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 2  (hover overlay)"),
  value: "preset3"
},
// this was preset 5
// { label: __("Preset 4 (hover overlay)"), value: "preset4" }, // this was preset 8
// { label: __("Preset 5", "essential-blocks"), value: "preset5" }, // this was preset 9
// { label: __("Preset 6", "essential-blocks"), value: "preset6" }, // this was preset 15
{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 3", "essential-blocks"),
  value: "new-preset1",
  isPro: true
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 4", "essential-blocks"),
  value: "new-preset2",
  isPro: true
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 5", "essential-blocks"),
  value: "new-preset3",
  isPro: true
}];
var HOVER_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "essential-blocks"),
  value: "hover-left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "essential-blocks"),
  value: "hover-right"
}];
var separatorTypes = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "essential-blocks"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dashed", "essential-blocks"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dotted", "essential-blocks"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Double", "essential-blocks"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Groove", "essential-blocks"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inset", "essential-blocks"),
  value: "inset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outset", "essential-blocks"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ridge", "essential-blocks"),
  value: "ridge"
}];
var HOVER_EFFECT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select Hover Effect", "essential-blocks"),
  value: ""
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grow", "essential-blocks"),
  value: "hvr-grow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shrink", "essential-blocks"),
  value: "hvr-shrink"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pulse", "essential-blocks"),
  value: "hvr-pulse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pulse Grow", "essential-blocks"),
  value: "hvr-pulse-grow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pulse Shrink", "essential-blocks"),
  value: "hvr-pulse-shrink"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Push", "essential-blocks"),
  value: "hvr-push"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pop", "essential-blocks"),
  value: "hvr-pop"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce In", "essential-blocks"),
  value: "hvr-bounce-in"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce Out", "essential-blocks"),
  value: "hvr-bounce-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rotate", "essential-blocks"),
  value: "hvr-rotate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grow Rotate", "essential-blocks"),
  value: "hvr-grow-rotate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Float", "essential-blocks"),
  value: "hvr-float"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sink", "essential-blocks"),
  value: "hvr-sink"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bob", "essential-blocks"),
  value: "hvr-bob"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hang", "essential-blocks"),
  value: "hvr-hang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Skew", "essential-blocks"),
  value: "hvr-skew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Skew Forward", "essential-blocks"),
  value: "hvr-skew-forward"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Skew Backward", "essential-blocks"),
  value: "hvr-skew-backward"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble Horizontal", "essential-blocks"),
  value: "hvr-wobble-horizontal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble Vertical", "essential-blocks"),
  value: "hvr-wobble-vertical"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble To Bottom Right", "essential-blocks"),
  value: "hvr-wobble-to-bottom-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble To Top Right", "essential-blocks"),
  value: "hvr-wobble-to-top-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble Top", "essential-blocks"),
  value: "hvr-wobble-top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble Bottom", "essential-blocks"),
  value: "hvr-wobble-bottom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble Skew", "essential-blocks"),
  value: "hvr-wobble-skew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buzz", "essential-blocks"),
  value: "hvr-buzz"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buzz Out", "essential-blocks"),
  value: "hvr-buzz-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Forward", "essential-blocks"),
  value: "hvr-forward"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fade", "essential-blocks"),
  value: "hvr-fade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Back Pulse", "essential-blocks"),
  value: "hvr-back-pulse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sweep To Right", "essential-blocks"),
  value: "hvr-sweep-to-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sweep To Left", "essential-blocks"),
  value: "hvr-sweep-to-left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sweep To Bottom", "essential-blocks"),
  value: "hvr-sweep-to-bottom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sweep To Top", "essential-blocks"),
  value: "hvr-sweep-to-top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce To Right", "essential-blocks"),
  value: "hvr-bounce-to-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce To Left", "essential-blocks"),
  value: "hvr-bounce-to-left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce To Bottom", "essential-blocks"),
  value: "hvr-bounce-to-bottom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce To Top", "essential-blocks"),
  value: "hvr-bounce-to-top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Radial Out", "essential-blocks"),
  value: "hvr-radial-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Radial In", "essential-blocks"),
  value: "hvr-radial-in"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rectangle In", "essential-blocks"),
  value: "hvr-rectangle-in"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rectangle Out", "essential-blocks"),
  value: "hvr-rectangle-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shutter In Horizontal", "essential-blocks"),
  value: "hvr-shutter-in-horizontal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shutter Out Horizontal", "essential-blocks"),
  value: "hvr-shutter-out-horizontal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shutter In Vertical", "essential-blocks"),
  value: "hvr-shutter-in-vertical"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shutter Out Vertical", "essential-blocks"),
  value: "hvr-shutter-out-vertical"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Back", "essential-blocks"),
  value: "hvr-icon-back"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Forward", "essential-blocks"),
  value: "hvr-icon-forward"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Down", "essential-blocks"),
  value: "hvr-icon-down"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Up", "essential-blocks"),
  value: "hvr-icon-up"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Spin", "essential-blocks"),
  value: "hvr-icon-spin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Drop", "essential-blocks"),
  value: "hvr-icon-drop"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Fade", "essential-blocks"),
  value: "hvr-icon-fade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Float Away", "essential-blocks"),
  value: "hvr-icon-float-away"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Sink Away", "essential-blocks"),
  value: "hvr-icon-sink-away"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Grow", "essential-blocks"),
  value: "hvr-icon-grow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Shrink", "essential-blocks"),
  value: "hvr-icon-shrink"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Pulse", "essential-blocks"),
  value: "hvr-icon-pulse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Pulse Grow", "essential-blocks"),
  value: "hvr-icon-pulse-grow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Pulse Shrink", "essential-blocks"),
  value: "hvr-icon-pulse-shrink"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Push", "essential-blocks"),
  value: "hvr-icon-push"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Pop", "essential-blocks"),
  value: "hvr-icon-pop"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Bounce", "essential-blocks"),
  value: "hvr-icon-bounce"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Rotate", "essential-blocks"),
  value: "hvr-icon-rotate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Grow Rotate", "essential-blocks"),
  value: "hvr-icon-grow-rotate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Float", "essential-blocks"),
  value: "hvr-icon-float"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Sink", "essential-blocks"),
  value: "hvr-icon-sink"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Bob", "essential-blocks"),
  value: "hvr-icon-bob"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Hang", "essential-blocks"),
  value: "hvr-icon-hang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Wobble Horizontal", "essential-blocks"),
  value: "hvr-icon-wobble-horizontal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Wobble Vertical", "essential-blocks"),
  value: "hvr-icon-wobble-vertical"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Buzz", "essential-blocks"),
  value: "hvr-icon-buzz"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Buzz Out", "essential-blocks"),
  value: "hvr-icon-buzz-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Curl Top Left", "essential-blocks"),
  value: "hvr-curl-top-left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Curl Top Right", "essential-blocks"),
  value: "hvr-curl-top-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Curl Bottom Right", "essential-blocks"),
  value: "hvr-curl-bottom-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Curl Bottom Left", "essential-blocks"),
  value: "hvr-curl-bottom-left"
}];

/***/ }),

/***/ "./src/constants/rangeNames.js":
/*!*************************************!*\
  !*** ./src/constants/rangeNames.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cSepHPrefix: () => (/* binding */ cSepHPrefix),
/* harmony export */   cSepWPrefix: () => (/* binding */ cSepWPrefix),
/* harmony export */   imageHeight: () => (/* binding */ imageHeight),
/* harmony export */   imageWidth: () => (/* binding */ imageWidth),
/* harmony export */   imgTopBgHeight: () => (/* binding */ imgTopBgHeight),
/* harmony export */   p9LGap: () => (/* binding */ p9LGap),
/* harmony export */   rangeIconDistance: () => (/* binding */ rangeIconDistance),
/* harmony export */   rangeIconPadding: () => (/* binding */ rangeIconPadding),
/* harmony export */   rangeIconRowGap: () => (/* binding */ rangeIconRowGap),
/* harmony export */   rangeIconSize: () => (/* binding */ rangeIconSize),
/* harmony export */   sSepHPrefix: () => (/* binding */ sSepHPrefix),
/* harmony export */   sSepWPrefix: () => (/* binding */ sSepWPrefix),
/* harmony export */   sclDeviderPosRight: () => (/* binding */ sclDeviderPosRight),
/* harmony export */   wrapperWidth: () => (/* binding */ wrapperWidth)
/* harmony export */ });
// each and every const here has to be totally unique from one another

var wrapperWidth = "wrpW_";
var imageWidth = "imgW_";
var imageHeight = "imgH_";
var rangeIconSize = "icnZ_";
var rangeIconPadding = "icnPd_";
var rangeIconDistance = "icnSp_";
var rangeIconRowGap = "icnRg_";
var imgTopBgHeight = "imgBgH_";
var cSepWPrefix = "cSepW_";
var sSepWPrefix = "sSepW_";
var cSepHPrefix = "cSepH_";
var sSepHPrefix = "sSepH_";
var sclDeviderPosRight = "sdpr_";
var p9LGap = "p9lG_";

/***/ }),

/***/ "./src/constants/typographyPrefixConstants.js":
/*!****************************************************!*\
  !*** ./src/constants/typographyPrefixConstants.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   typoPrefix_descs: () => (/* binding */ typoPrefix_descs),
/* harmony export */   typoPrefix_job: () => (/* binding */ typoPrefix_job),
/* harmony export */   typoPrefix_name: () => (/* binding */ typoPrefix_name)
/* harmony export */ });
// each and every const here has to be totally unique from one another

var typoPrefix_descs = "dscs_";
var typoPrefix_name = "name_";
var typoPrefix_job = "job_";

/***/ }),

/***/ "./src/deprecated.js":
/*!***************************!*\
  !*** ./src/deprecated.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _components_deprecated_social_links_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/deprecated-social-links-1 */ "./src/components/deprecated-social-links-1.js");
/* harmony import */ var _components_deprecated_social_links_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/deprecated-social-links-2 */ "./src/components/deprecated-social-links-2.js");
/* harmony import */ var _components_deprecated_social_links_3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/deprecated-social-links-3 */ "./src/components/deprecated-social-links-3.js");
/* harmony import */ var _components_social_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/social-links */ "./src/components/social-links.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * WordPress dependencies
 */






var _lodash = lodash,
  omit = _lodash.omit;
var deprecated = [{
  attributes: _objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_1__["default"]),
  supports: {
    align: ["wide", "full"]
  },
  migrate: function migrate(attributes) {
    var imageUrl = attributes.imageUrl;
    console.log('deprecated', imageUrl);
    var newAttributes = _objectSpread({}, attributes);
    // delete newAttributes.selectedIcon;

    return _objectSpread({}, newAttributes);
  },
  save: function save(props) {
    var _props$attributes = props.attributes,
      blockId = _props$attributes.blockId,
      name = _props$attributes.name,
      jobTitle = _props$attributes.jobTitle,
      description = _props$attributes.description,
      showDescs = _props$attributes.showDescs,
      showSocials = _props$attributes.showSocials,
      showCSeparator = _props$attributes.showCSeparator,
      showSSeparator = _props$attributes.showSSeparator,
      imageUrl = _props$attributes.imageUrl,
      profilesOnly = _props$attributes.profilesOnly,
      socialInImage = _props$attributes.socialInImage,
      icnEffect = _props$attributes.icnEffect,
      classHook = _props$attributes.classHook,
      avatarURL = _props$attributes.avatarURL,
      newWindow = _props$attributes.newWindow,
      showLinkNewTab = _props$attributes.showLinkNewTab,
      imageAlt = _props$attributes.imageAlt,
      preset = _props$attributes.preset,
      showDesignation = _props$attributes.showDesignation,
      hoverPreset = _props$attributes.hoverPreset,
      isContentOverlay = _props$attributes.isContentOverlay;
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
      className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(blockId, " eb-team-wrapper ").concat(preset, " ").concat(preset === 'new-preset3' ? hoverPreset : '', " ").concat(preset === 'preset3' && isContentOverlay ? 'content-overlay' : '', "  ")
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-team-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "image"
    }, avatarURL && /*#__PURE__*/React.createElement("a", _extends({
      // className={`eb-button-anchor`}
      href: avatarURL ? avatarURL : ""
    }, newWindow && {
      target: "_blank"
    }, {
      rel: "noopener"
    }), /*#__PURE__*/React.createElement("img", {
      className: "avatar",
      src: imageUrl,
      alt: imageAlt ? imageAlt : name
    })), !avatarURL && /*#__PURE__*/React.createElement("img", {
      className: "avatar",
      src: imageUrl,
      alt: imageAlt ? imageAlt : name
    }), socialInImage && showSocials && /*#__PURE__*/React.createElement(_components_deprecated_social_links_3__WEBPACK_IMPORTED_MODULE_4__["default"], {
      socialDetails: profilesOnly,
      icnEffect: icnEffect,
      linkNewTab: showLinkNewTab,
      preset: preset
    }), preset === 'new-preset1' && showDesignation && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h4",
      className: "job_title",
      value: jobTitle
    })), /*#__PURE__*/React.createElement("div", {
      className: "contents"
    }, (preset === 'new-preset1' || preset === 'new-preset2' || preset === 'new-preset3') && /*#__PURE__*/React.createElement("div", {
      className: "contents-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "texts"
    }, name && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h3",
      className: "name",
      value: name
    }), preset != 'new-preset1' && showDesignation && jobTitle && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h4",
      className: "job_title",
      value: jobTitle
    }), showCSeparator && /*#__PURE__*/React.createElement("hr", {
      className: "content_separator"
    }), showDescs && description && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "p",
      className: "description",
      value: description
    })), !socialInImage && showSocials && /*#__PURE__*/React.createElement(React.Fragment, null, showSSeparator && /*#__PURE__*/React.createElement("hr", {
      className: "social_separator"
    }), /*#__PURE__*/React.createElement(_components_deprecated_social_links_3__WEBPACK_IMPORTED_MODULE_4__["default"], {
      socialDetails: profilesOnly,
      icnEffect: icnEffect,
      linkNewTab: showLinkNewTab,
      preset: preset
    }))), preset != 'new-preset1' && preset != 'new-preset2' && preset != 'new-preset3' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "texts"
    }, name && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h3",
      className: "name",
      value: name
    }), showDesignation && jobTitle && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h4",
      className: "job_title",
      value: jobTitle
    }), showCSeparator && /*#__PURE__*/React.createElement("hr", {
      className: "content_separator"
    }), showDescs && description && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "p",
      className: "description",
      value: description
    })), !socialInImage && showSocials && /*#__PURE__*/React.createElement(React.Fragment, null, showSSeparator && /*#__PURE__*/React.createElement("hr", {
      className: "social_separator"
    }), /*#__PURE__*/React.createElement(_components_deprecated_social_links_3__WEBPACK_IMPORTED_MODULE_4__["default"], {
      socialDetails: profilesOnly,
      icnEffect: icnEffect,
      linkNewTab: showLinkNewTab,
      preset: preset
    }))))))));
  }
}, {
  attributes: _objectSpread({}, omit(_objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_1__["default"]), ["showDesignation", "showSocialTitle", "hoverPreset", "isContentOverlay"])),
  supports: {
    align: ["wide", "full"]
  },
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var blockId = attributes.blockId,
      name = attributes.name,
      jobTitle = attributes.jobTitle,
      description = attributes.description,
      showDescs = attributes.showDescs,
      showSocials = attributes.showSocials,
      showCSeparator = attributes.showCSeparator,
      showSSeparator = attributes.showSSeparator,
      imageUrl = attributes.imageUrl,
      profilesOnly = attributes.profilesOnly,
      socialInImage = attributes.socialInImage,
      icnEffect = attributes.icnEffect,
      classHook = attributes.classHook,
      avatarURL = attributes.avatarURL,
      newWindow = attributes.newWindow,
      showLinkNewTab = attributes.showLinkNewTab,
      imageAlt = attributes.imageAlt;
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
      className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(blockId, " eb-team-wrapper")
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-team-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "image"
    }, avatarURL && /*#__PURE__*/React.createElement("a", _extends({
      // className={`eb-button-anchor`}
      href: avatarURL ? avatarURL : ""
    }, newWindow && {
      target: "_blank"
    }, {
      rel: "noopener"
    }), /*#__PURE__*/React.createElement("img", {
      className: "avatar",
      src: imageUrl,
      alt: imageAlt ? imageAlt : name
    })), !avatarURL && /*#__PURE__*/React.createElement("img", {
      className: "avatar",
      src: imageUrl,
      alt: imageAlt ? imageAlt : name
    }), socialInImage && showSocials && /*#__PURE__*/React.createElement(_components_social_links__WEBPACK_IMPORTED_MODULE_5__["default"], {
      socialDetails: profilesOnly,
      icnEffect: icnEffect,
      linkNewTab: showLinkNewTab
    })), /*#__PURE__*/React.createElement("div", {
      className: "contents"
    }, /*#__PURE__*/React.createElement("div", {
      className: "texts"
    }, name && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h3",
      className: "name",
      value: name
    }), jobTitle && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h4",
      className: "job_title",
      value: jobTitle
    }), showCSeparator && /*#__PURE__*/React.createElement("hr", {
      className: "content_separator"
    }), showDescs && description && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "p",
      className: "description",
      value: description
    })), !socialInImage && showSocials && /*#__PURE__*/React.createElement(React.Fragment, null, showSSeparator && /*#__PURE__*/React.createElement("hr", {
      className: "social_separator"
    }), /*#__PURE__*/React.createElement(_components_social_links__WEBPACK_IMPORTED_MODULE_5__["default"], {
      socialDetails: profilesOnly,
      icnEffect: icnEffect,
      linkNewTab: showLinkNewTab
    })))))));
  }
}, {
  attributes: _objectSpread({}, omit(_objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_1__["default"]), ["imageAlt", "showLinkNewTab"])),
  supports: {
    align: ["wide", "full"]
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var blockId = attributes.blockId,
      name = attributes.name,
      jobTitle = attributes.jobTitle,
      description = attributes.description,
      showDescs = attributes.showDescs,
      showSocials = attributes.showSocials,
      showCSeparator = attributes.showCSeparator,
      showSSeparator = attributes.showSSeparator,
      imageUrl = attributes.imageUrl,
      profilesOnly = attributes.profilesOnly,
      socialInImage = attributes.socialInImage,
      icnEffect = attributes.icnEffect,
      classHook = attributes.classHook,
      avatarURL = attributes.avatarURL,
      newWindow = attributes.newWindow;
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
      className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(blockId, " eb-team-wrapper")
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-team-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "image"
    }, avatarURL && /*#__PURE__*/React.createElement("a", _extends({
      // className={`eb-button-anchor`}
      href: avatarURL ? avatarURL : ""
    }, newWindow && {
      target: "_blank"
    }, {
      rel: "noopener"
    }), /*#__PURE__*/React.createElement("img", {
      className: "avatar",
      src: imageUrl,
      alt: "member"
    })), !avatarURL && /*#__PURE__*/React.createElement("img", {
      className: "avatar",
      src: imageUrl,
      alt: "member"
    }), socialInImage && showSocials && /*#__PURE__*/React.createElement(_components_deprecated_social_links_2__WEBPACK_IMPORTED_MODULE_3__["default"], {
      socialDetails: profilesOnly,
      icnEffect: icnEffect
    })), /*#__PURE__*/React.createElement("div", {
      className: "contents"
    }, /*#__PURE__*/React.createElement("div", {
      className: "texts"
    }, name && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h3",
      className: "name",
      value: name
    }), jobTitle && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h4",
      className: "job_title",
      value: jobTitle
    }), showCSeparator && /*#__PURE__*/React.createElement("hr", {
      className: "content_separator"
    }), showDescs && description && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "p",
      className: "description",
      value: description
    })), !socialInImage && showSocials && /*#__PURE__*/React.createElement(React.Fragment, null, showSSeparator && /*#__PURE__*/React.createElement("hr", {
      className: "social_separator"
    }), /*#__PURE__*/React.createElement(_components_deprecated_social_links_2__WEBPACK_IMPORTED_MODULE_3__["default"], {
      socialDetails: profilesOnly,
      icnEffect: icnEffect
    })))))));
  }
}, {
  attributes: _objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_1__["default"]),
  supports: {
    align: ["wide", "full"]
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var blockId = attributes.blockId,
      name = attributes.name,
      jobTitle = attributes.jobTitle,
      description = attributes.description,
      showDescs = attributes.showDescs,
      showSocials = attributes.showSocials,
      showCSeparator = attributes.showCSeparator,
      showSSeparator = attributes.showSSeparator,
      imageUrl = attributes.imageUrl,
      profilesOnly = attributes.profilesOnly,
      socialInImage = attributes.socialInImage,
      icnEffect = attributes.icnEffect,
      classHook = attributes.classHook;
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
      className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(blockId, " eb-team-wrapper")
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-team-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "image"
    }, /*#__PURE__*/React.createElement("img", {
      className: "avatar",
      src: imageUrl,
      alt: "member"
    }), socialInImage && showSocials && /*#__PURE__*/React.createElement(_components_social_links__WEBPACK_IMPORTED_MODULE_5__["default"], {
      socialDetails: profilesOnly,
      icnEffect: icnEffect
    })), /*#__PURE__*/React.createElement("div", {
      className: "contents"
    }, /*#__PURE__*/React.createElement("div", {
      className: "texts"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h3",
      className: "name",
      value: name
    }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h4",
      className: "job_title",
      value: jobTitle
    }), showCSeparator && /*#__PURE__*/React.createElement("hr", {
      className: "content_separator"
    }), showDescs && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "p",
      className: "description",
      value: description
    })), !socialInImage && showSocials && /*#__PURE__*/React.createElement(React.Fragment, null, showSSeparator && /*#__PURE__*/React.createElement("hr", {
      className: "social_separator"
    }), /*#__PURE__*/React.createElement(_components_deprecated_social_links_1__WEBPACK_IMPORTED_MODULE_2__["default"], {
      socialDetails: profilesOnly,
      icnEffect: icnEffect
    })))))));
  }
}, {
  attributes: _objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_1__["default"]),
  supports: {
    align: ["wide", "full"]
  },
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    var blockId = attributes.blockId,
      name = attributes.name,
      jobTitle = attributes.jobTitle,
      description = attributes.description,
      showDescs = attributes.showDescs,
      showSocials = attributes.showSocials,
      showCSeparator = attributes.showCSeparator,
      showSSeparator = attributes.showSSeparator,
      imageUrl = attributes.imageUrl,
      profilesOnly = attributes.profilesOnly,
      socialInImage = attributes.socialInImage,
      icnEffect = attributes.icnEffect;
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
      className: "".concat(blockId, " eb-team-wrapper")
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-team-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "image"
    }, /*#__PURE__*/React.createElement("img", {
      className: "avatar",
      src: imageUrl,
      alt: "member"
    }), socialInImage && showSocials && /*#__PURE__*/React.createElement(_components_social_links__WEBPACK_IMPORTED_MODULE_5__["default"], {
      socialDetails: profilesOnly,
      icnEffect: icnEffect
    })), /*#__PURE__*/React.createElement("div", {
      className: "contents"
    }, /*#__PURE__*/React.createElement("div", {
      className: "texts"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h3",
      className: "name",
      value: name
    }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h4",
      className: "job_title",
      value: jobTitle
    }), showCSeparator && /*#__PURE__*/React.createElement("hr", {
      className: "content_separator"
    }), showDescs && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "p",
      className: "description",
      value: description
    })), !socialInImage && showSocials && /*#__PURE__*/React.createElement(React.Fragment, null, showSSeparator && /*#__PURE__*/React.createElement("hr", {
      className: "social_separator"
    }), /*#__PURE__*/React.createElement(_components_social_links__WEBPACK_IMPORTED_MODULE_5__["default"], {
      socialDetails: profilesOnly,
      icnEffect: icnEffect
    }))))));
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _components_social_links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/social-links */ "./src/components/social-links.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ "./src/style.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

var _window$EBTeamMemberC = window.EBTeamMemberControls,
  duplicateBlockIdFix = _window$EBTeamMemberC.duplicateBlockIdFix,
  DynamicInputValueHandler = _window$EBTeamMemberC.DynamicInputValueHandler;




function Edit(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    className = props.className,
    clientId = props.clientId,
    isSelected = props.isSelected;
  var resOption = attributes.resOption,
    blockId = attributes.blockId,
    blockMeta = attributes.blockMeta,
    name = attributes.name,
    jobTitle = attributes.jobTitle,
    description = attributes.description,
    showDescs = attributes.showDescs,
    imageUrl = attributes.imageUrl,
    imageId = attributes.imageId,
    showSocials = attributes.showSocials,
    socialDetails = attributes.socialDetails,
    profilesOnly = attributes.profilesOnly,
    socialInImage = attributes.socialInImage,
    showCSeparator = attributes.showCSeparator,
    showSSeparator = attributes.showSSeparator,
    icnEffect = attributes.icnEffect,
    classHook = attributes.classHook,
    hoverPreset = attributes.hoverPreset,
    showDesignation = attributes.showDesignation,
    isContentOverlay = attributes.isContentOverlay,
    preset = attributes.preset;

  //
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var newProfiles = socialDetails.map(function (profile) {
      return _objectSpread(_objectSpread({}, profile), {}, {
        isExpanded: false
      });
    });
    setAttributes({
      socialDetails: newProfiles
    });
    if (socialDetails.length > 0) return;
    var newSclDtails = [{
      title: "Facebook",
      icon: "fab fa-facebook-f",
      color: "#fff",
      bgColor: "#A0A8BD",
      link: "",
      linkOpenNewTab: false,
      isExpanded: false
    }, {
      title: "Twitter",
      icon: "fab fa-x-twitter",
      color: "#fff",
      bgColor: "#A0A8BD",
      link: "",
      linkOpenNewTab: false,
      isExpanded: false
    }, {
      title: "LinkedIn",
      icon: "fab fa-linkedin-in",
      color: "#fff",
      bgColor: "#A0A8BD",
      link: "",
      linkOpenNewTab: false,
      isExpanded: false
    }, {
      title: "YouTube",
      icon: "fab fa-youtube",
      color: "#fff",
      bgColor: "#A0A8BD",
      link: "",
      linkOpenNewTab: false,
      isExpanded: false
    }];
    setAttributes({
      socialDetails: newSclDtails
    });
  }, []);

  //
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var profilesOnly = socialDetails.map(function (_ref) {
      var title = _ref.title,
        icon = _ref.icon,
        link = _ref.link,
        linkOpenNewTab = _ref.linkOpenNewTab;
      return {
        title: title,
        icon: icon,
        link: link,
        linkOpenNewTab: linkOpenNewTab
      };
    });
    setAttributes({
      profilesOnly: profilesOnly
    });
  }, [socialDetails]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // this codes is for creating a unique blockId for each block's unique className
    var BLOCK_PREFIX = "eb-team-member";
    duplicateBlockIdFix({
      BLOCK_PREFIX: BLOCK_PREFIX,
      blockId: blockId,
      setAttributes: setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select,
      clientId: clientId
    });

    //
    if (/essential\-blocks.assets\/images\/user\.jpg/gi.test(imageUrl || " ")) {
      setAttributes({
        imageUrl: "".concat(EssentialBlocksLocalize.eb_plugins_url, "assets/images/user.jpg")
      });
    }
  }, []);
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, "eb-guten-block-main-parent-wrapper")
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_style__WEBPACK_IMPORTED_MODULE_8__["default"], props), /*#__PURE__*/React.createElement("div", {
    className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockId, " eb-team-wrapper ").concat(preset, " ").concat(preset === 'new-preset3' ? hoverPreset : '', " ").concat(preset === 'preset3' && isContentOverlay ? 'content-overlay' : '', "  ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-team-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-team-member-image"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: function onSelect(_ref2) {
      var id = _ref2.id,
        url = _ref2.url;
      return setAttributes({
        imageUrl: url,
        imageId: id
      });
    },
    type: "image",
    value: imageId,
    render: function render(_ref3) {
      var open = _ref3.open;
      if (!imageUrl) {
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: "eb-infobox-img-btn components-button",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload Image", "essential-blocks"),
          icon: "format-image",
          onClick: open
        });
      } else {
        return /*#__PURE__*/React.createElement("img", {
          className: "eb-team-member-avatar",
          alt: "member",
          src: imageUrl
        });
      }
    }
  }), socialInImage && showSocials && /*#__PURE__*/React.createElement(_components_social_links__WEBPACK_IMPORTED_MODULE_7__["default"], {
    socialDetails: profilesOnly,
    icnEffect: icnEffect,
    preset: preset
  }), preset === 'new-preset1' && showDesignation && /*#__PURE__*/React.createElement(DynamicInputValueHandler, {
    value: jobTitle,
    tagName: "h4",
    className: "eb-team-member-job-title",
    onChange: function onChange(jobTitle) {
      return setAttributes({
        jobTitle: jobTitle
      });
    },
    readOnly: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-team-member-contents"
  }, (preset === 'new-preset1' || preset === 'new-preset2' || preset === 'new-preset3') && /*#__PURE__*/React.createElement("div", {
    className: "eb-team-member-contents-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-team-member-texts"
  }, /*#__PURE__*/React.createElement(DynamicInputValueHandler, {
    value: name,
    tagName: "h3",
    className: "eb-team-member-name",
    onChange: function onChange(name) {
      return setAttributes({
        name: name
      });
    },
    readOnly: true
  }), preset != 'new-preset1' && showDesignation && /*#__PURE__*/React.createElement(DynamicInputValueHandler, {
    value: jobTitle,
    tagName: "h4",
    className: "eb-team-member-job-title",
    onChange: function onChange(jobTitle) {
      return setAttributes({
        jobTitle: jobTitle
      });
    },
    readOnly: true
  }), showCSeparator && /*#__PURE__*/React.createElement("hr", {
    className: "eb-team-member-content-separator"
  }), showDescs && /*#__PURE__*/React.createElement(DynamicInputValueHandler, {
    value: description,
    tagName: "p",
    className: "eb-team-member-description",
    onChange: function onChange(description) {
      return setAttributes({
        description: description
      });
    },
    readOnly: true
  })), !socialInImage && showSocials && /*#__PURE__*/React.createElement(React.Fragment, null, showSSeparator && /*#__PURE__*/React.createElement("hr", {
    className: "eb-team-member-social-separator"
  }), /*#__PURE__*/React.createElement(_components_social_links__WEBPACK_IMPORTED_MODULE_7__["default"], {
    socialDetails: profilesOnly,
    icnEffect: icnEffect,
    preset: preset
  }))), preset != 'new-preset1' && preset != 'new-preset2' && preset != 'new-preset3' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "eb-team-member-texts"
  }, /*#__PURE__*/React.createElement(DynamicInputValueHandler, {
    value: name,
    tagName: "h3",
    className: "eb-team-member-name",
    onChange: function onChange(name) {
      return setAttributes({
        name: name
      });
    },
    readOnly: true
  }), preset != 'new-preset1' && showDesignation && /*#__PURE__*/React.createElement(DynamicInputValueHandler, {
    value: jobTitle,
    tagName: "h4",
    className: "eb-team-member-job-title",
    onChange: function onChange(jobTitle) {
      return setAttributes({
        jobTitle: jobTitle
      });
    },
    readOnly: true
  }), showCSeparator && /*#__PURE__*/React.createElement("hr", {
    className: "eb-team-member-content-separator"
  }), showDescs && /*#__PURE__*/React.createElement(DynamicInputValueHandler, {
    value: description,
    tagName: "p",
    className: "eb-team-member-description",
    onChange: function onChange(description) {
      return setAttributes({
        description: description
      });
    },
    readOnly: true
  })), !socialInImage && showSocials && /*#__PURE__*/React.createElement(React.Fragment, null, showSSeparator && /*#__PURE__*/React.createElement("hr", {
    className: "eb-team-member-social-separator"
  }), /*#__PURE__*/React.createElement(_components_social_links__WEBPACK_IMPORTED_MODULE_7__["default"], {
    socialDetails: profilesOnly,
    icnEffect: icnEffect,
    preset: preset
  })))))))));
}

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var example = {
  attributes: {
    // endTimeStamp: Date.now() + 462878000,
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamMembersIcon: () => (/* binding */ TeamMembersIcon)
/* harmony export */ });
var TeamMembersIcon = function TeamMembersIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "57",
    height: "60",
    fill: "none",
    viewBox: "0 0 57 60"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_2_22855)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#6C3BFF",
    d: "M56.4 51.429l-2.314-8.572-.086-.086s-.086-.085-.086-.171c0-.086-.085-.171-.085-.171-1.629-4.715-5.4-8.229-10.115-9.343l-.685-.172c-.258-.085-.515-.085-.772-.085-.857 0-1.714.428-2.4 1.028-2.4 2.829-5.657 3-8.828 3-3.515 0-6.515-.171-8.829-3-.6-.686-1.371-1.028-2.314-1.028-.257 0-.6 0-.857.085l-.858.172c-3.428.771-6.428 3-8.571 6.085H2.743c0-.085 0-.085-.086-.171l1.457-5.057C5.4 29.829 7.8 28.8 12.686 27.514h.085l.086-.085s.086-.086.172-.086h.085c.429.257.772.6 1.2.686.257.257.6.257.772.257.514 0 1.028-.257 1.285-.857.172-.515.258-.943.086-1.372-.171-.257-.428-.6-.771-.6C13.2 24.171 11.4 20.4 11.4 16.543a6.054 6.054 0 016.086-6.086c.428 0 .857.086 1.371.172-.6 1.457-.857 3-.857 4.8 0 10.028 5.914 18.257 13.2 18.257 7.114 0 13.2-8.572 13.2-18.257 0-7.286-5.914-13.2-13.2-13.2-4.371 0-8.486 2.142-10.886 5.742-.943-.257-1.971-.514-2.828-.514-3.086 0-5.915 1.543-7.8 4.286-.429.514-.515.857-.857 1.886-.258.685-.429 1.8-.429 2.742 0 3 .943 6.086 2.657 8.486-3.6.943-6.343 2.229-8.143 5.143 0 .086-1.028 1.543-1.371 3.086L.17 38.4c-.257.943 0 1.886.6 2.4.515.686 1.2 1.2 1.972 1.2H8.4c-.086.257-.171.6-.171.771l-2.315 8.486c-.171.943-.171 2.143.772 3.086.771.943 1.628 1.457 2.743 1.457h43.714c1.028 0 1.971-.514 2.743-1.371.685-.686.857-1.8.514-3zM21.514 13.286c.172-.857.429-1.715.686-2.4l.429-.429c1.885-3.171 5.142-5.143 8.828-5.143 4.372 0 8.229 2.743 9.686 6.772h-.6c-1.714 0-3.172-.772-4.114-2.057-.258-.429-.686-.6-1.2-.6-.429 0-.686.085-.943.428-.172.172-.429.429-.429.772l-.086.171c-1.2 2.229-4.2 3.6-8.228 3.6-1.372 0-2.743-.086-4.2-.429.086-.257.171-.428.171-.685zm3.772 3.771c4.885 0 8.485-1.371 10.285-3.943 1.286 1.029 2.915 1.629 5.058 1.629.257 0 .6-.086.857-.086h.257c.086.172.086.429.086.686 0 8.143-4.8 15.428-10.286 15.428-4.972 0-9.6-6.342-10.2-13.971 1.286.257 2.657.257 3.943.257zM53.57 52.8c-.171.171-.171.171-.428.171H8.914v-.085L8.83 52.8s-.086-.086-.086-.514l2.314-8.486c1.029-3.771 4.114-6.686 8.057-7.886l.772-.171s.085 0 .085.086c.086 0 .086.085.172.085 3.086 3.6 6.771 3.857 10.971 3.857 3.772 0 7.8-.257 10.972-3.857.085-.085.085-.085.171-.085l.172.085.685.172c3.772.943 6.857 3.943 8.057 7.885l.943 3.686.172.343.085.086 1.372 4.371c0-.086-.086.172-.172.343z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_2_22855"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0H56.571V60H0z"
  }))));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example */ "./src/example.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deprecated */ "./src/deprecated.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../block.json */ "./block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/**
 * WordPress depencencies
 */



/**
 * Internal dependencies
 */








var _EBTeamMemberControls = EBTeamMemberControls,
  ebConditionalRegisterBlockType = _EBTeamMemberControls.ebConditionalRegisterBlockType;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_8__, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__.TeamMembersIcon,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("team", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("member", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("eb essential", "essential-blocks")],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_6__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_7__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */

var _window$EBTeamMemberC = window.EBTeamMemberControls,
  LeftAlignIcon = _window$EBTeamMemberC.LeftAlignIcon,
  RightAlignIcon = _window$EBTeamMemberC.RightAlignIcon,
  CenterAlignIcon = _window$EBTeamMemberC.CenterAlignIcon,
  TypographyDropdown = _window$EBTeamMemberC.TypographyDropdown,
  ResponsiveDimensionsControl = _window$EBTeamMemberC.ResponsiveDimensionsControl,
  ResponsiveRangeController = _window$EBTeamMemberC.ResponsiveRangeController,
  ImageAvatar = _window$EBTeamMemberC.ImageAvatar,
  ColorControl = _window$EBTeamMemberC.ColorControl,
  GradientColorControl = _window$EBTeamMemberC.GradientColorControl,
  BorderShadowControl = _window$EBTeamMemberC.BorderShadowControl,
  BackgroundControl = _window$EBTeamMemberC.BackgroundControl,
  DealSocialProfiles = _window$EBTeamMemberC.DealSocialProfiles,
  IconList = _window$EBTeamMemberC.faIcons,
  AdvancedControls = _window$EBTeamMemberC.AdvancedControls,
  DynamicInputControl = _window$EBTeamMemberC.DynamicInputControl;







var defaultPresetAttrsObj = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
  // test: undefined,
  socialInImage: false,
  WrpBg_backgroundColor: undefined,
  cSepColor: undefined,
  dscP_Left: undefined,
  dscP_Right: undefined,
  hov_imgBgP_gradientColor: undefined,
  icnSepH: 30,
  icnSp_Range: 20,
  icnWp_Bottom: undefined,
  icnWp_Left: undefined,
  icnWp_Right: undefined,
  icnWp_Top: undefined,
  icnWp_isLinked: true,
  imgBd_Bdr_Bottom: "1",
  imgBd_Bdr_Left: "1",
  imgBd_Bdr_Right: "1",
  imgBd_Bdr_Top: "1",
  imgBd_Rds_Bottom: undefined,
  imgBd_Rds_Left: undefined,
  imgBd_Rds_Right: undefined,
  imgBd_Rds_Top: undefined,
  imgBd_Rds_Unit: "px",
  imgBd_borderColor: "undefined",
  imgBd_borderStyle: "none",
  imgBeforeEl: false,
  imgBgP_gradientColor: "linear-gradient(45deg,#7967ff,#c277f2)",
  imgMrg_Top: undefined,
  imgMrg_isLinked: true,
  isIconsDevider: false,
  jobP_Bottom: undefined,
  jobP_isLinked: true,
  sSepColor: undefined,
  showCSeparator: false,
  showSSeparator: false,
  wrpBdSd_blur: undefined,
  wrpBdSd_hOffset: undefined,
  wrpBdSd_shadowColor: undefined,
  wrpBdSd_spread: undefined,
  wrpBdSd_vOffset: undefined,
  wrpMrg_isLinked: true,
  wrpPad_isLinked: true,
  imgH_Range: 200,
  imgW_Range: 200,
  nameP_Bottom: "15",
  nameP_Top: "20",
  showDescs: true,
  wrpBdSd_Rds_Unit: "px",
  imgW_Unit: "px",
  wrpBdSd_Rds_Bottom: undefined,
  wrpBdSd_Rds_Left: undefined,
  wrpBdSd_Rds_Right: undefined,
  wrpBdSd_Rds_Top: undefined,
  wrpMrg_Bottom: undefined,
  wrpW_Range: 100,
  wrpW_Unit: "%",
  hov_sclWBg_backgroundColor: undefined
}, "icnWp_Bottom", undefined), "icnWp_Left", undefined), "icnWp_Right", undefined), "icnWp_Top", 10), "icnWp_isLinked", false), "sclWBg_backgroundColor", undefined), "iconsVAlign", "center"), "isImgHeightAuto", false), "conBgGradient", "linear-gradient(45deg, #7967ff, rgba(194,119,242,0.8))"), "wrpBdSd_borderStyle", "none");
function Inspector(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  var resOption = attributes.resOption,
    blockId = attributes.blockId,
    imageUrl = attributes.imageUrl,
    imageId = attributes.imageId,
    imageAlt = attributes.imageAlt,
    isImgHeightAuto = attributes.isImgHeightAuto,
    showDescs = attributes.showDescs,
    descsColor = attributes.descsColor,
    jobColor = attributes.jobColor,
    nameColor = attributes.nameColor,
    name = attributes.name,
    jobTitle = attributes.jobTitle,
    description = attributes.description,
    showSocials = attributes.showSocials,
    socialDetails = attributes.socialDetails,
    iconsJustify = attributes.iconsJustify,
    iconsVAlign = attributes.iconsVAlign,
    contentsAlign = attributes.contentsAlign,
    imageAlign = attributes.imageAlign,
    cSepAlign = attributes.cSepAlign,
    sSepAlign = attributes.sSepAlign,
    preset = attributes.preset,
    imgBeforeEl = attributes.imgBeforeEl,
    showCSeparator = attributes.showCSeparator,
    showSSeparator = attributes.showSSeparator,
    cSepType = attributes.cSepType,
    sSepType = attributes.sSepType,
    cSepColor = attributes.cSepColor,
    sSepColor = attributes.sSepColor,
    isIconsDevider = attributes.isIconsDevider,
    icnsDevideColor = attributes.icnsDevideColor,
    icnSepW = attributes.icnSepW,
    icnSepH = attributes.icnSepH,
    hvIcnColor = attributes.hvIcnColor,
    hvIcnBgc = attributes.hvIcnBgc,
    conVtAlign = attributes.conVtAlign,
    isConBgGradient = attributes.isConBgGradient,
    conBgGradient = attributes.conBgGradient,
    conBgColor = attributes.conBgColor,
    imgCnVtAlign = attributes.imgCnVtAlign,
    isP9reverse = attributes.isP9reverse,
    icnEffect = attributes.icnEffect,
    avatarURL = attributes.avatarURL,
    newWindow = attributes.newWindow,
    showLinkNewTab = attributes.showLinkNewTab,
    hoverPreset = attributes.hoverPreset,
    showDesignation = attributes.showDesignation,
    showSocialTitle = attributes.showSocialTitle,
    isContentOverlay = attributes.isContentOverlay,
    socialInImage = attributes.socialInImage;

  //
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var newSclDtails = socialDetails.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        isExpanded: false
      });
    });
    setAttributes({
      socialDetails: newSclDtails
    });
  }, []);
  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption,
    attributes: attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"]
  };
  var handlePresetChange = function handlePresetChange(preset) {
    var _objectSpread2;
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.applyFilters)("eb_team_member_preset_change", preset, attributes, setAttributes, defaultPresetAttrsObj);
    switch (preset) {
      case "default":
        var newsocialDetailsDefault = socialDetails.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            color: '#fff',
            bgColor: '#A0A8BD'
          });
        });
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, {
          showDescs: true,
          showDesignation: true,
          showSSeparator: false,
          showSocialTitle: false,
          showCSeparator: false,
          isIconsDevider: false,
          imgBeforeEl: false,
          contentsAlign: 'center',
          iconsJustify: 'center',
          isConBgGradient: false,
          nameColor: '#4b4b4b',
          jobColor: '#4b4b4b',
          descsColor: '#9f9f9f',
          hvIcnColor: '#fff',
          hvIcnBgc: '#909AA9',
          name_FontSize: 20,
          name_SizeUnit: "px",
          job_FontSize: 16,
          job_FontWeight: 700,
          job_SizeUnit: "px",
          dscs_FontSize: 16,
          nameP_Bottom: "15",
          nameP_Top: "20",
          dscP_Top: "15",
          dscP_Bottom: "20",
          dscP_Left: "0",
          dscP_Right: "0",
          jobP_Left: "0",
          jobP_Right: "0",
          jobP_Top: "0",
          jobP_Bottom: "0",
          jobP_isLinked: true,
          icnZ_Range: 20,
          icnSp_Range: 20,
          icnPd_Range: 1,
          icnSepH: 38,
          icnWp_Bottom: "0",
          icnWp_Left: "0",
          icnWp_Right: "0",
          icnWp_Top: "10",
          icnWp_isLinked: false,
          socialDetails: newsocialDetailsDefault,
          imgBd_Bdr_Bottom: "0",
          imgBd_Bdr_Left: "0",
          imgBd_Bdr_Right: "0",
          imgBd_Bdr_Top: "0",
          imgBd_Rds_Bottom: "0",
          imgBd_Rds_Left: "0",
          imgBd_Rds_Right: "0",
          imgBd_Rds_Top: "0",
          imgBd_Rds_Unit: "%",
          imgBd_borderColor: "rgba(255,255,255,1)",
          imgBd_borderStyle: "none",
          sclBdSd_Rds_Bottom: "0",
          sclBdSd_Rds_Left: "0",
          sclBdSd_Rds_Right: "0",
          sclBdSd_Rds_Top: "0",
          sclBdSd_Rds_Unit: "px",
          sclBdSd_Rds_isLinked: true,
          sclBdSd_borderColor: "#A0A8BD",
          sclBdSd_borderStyle: "solid",
          wrpBdSd_blur: 20,
          wrpBdSd_hOffset: 0,
          wrpBdSd_shadowColor: "rgba(0,0,0,0)",
          wrpBdSd_spread: 0,
          wrpBdSd_vOffset: 5,
          wrpMrg_isLinked: false,
          wrpPad_isLinked: false,
          ovlBd_shadowColor: "rgba(0,0,0,0)",
          ovlBd_vOffset: 5,
          ovlBd_hOffset: 2,
          ovlBd_blur: 17
        }));
        break;
      case "preset1":
        var newsocialDetails1 = socialDetails.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            color: '#fff',
            bgColor: '#A0A8BD'
          });
        });
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, {
          showDescs: true,
          showDesignation: true,
          showSSeparator: true,
          showSocialTitle: false,
          showCSeparator: true,
          isIconsDevider: true,
          imgBeforeEl: true,
          contentsAlign: 'center',
          iconsJustify: 'center',
          isConBgGradient: false,
          nameColor: '#4b4b4b',
          jobColor: '#4b4b4b',
          descsColor: '#9f9f9f',
          sSepColor: "#E1E7F1",
          hvIcnColor: '#fff',
          hvIcnBgc: '#909AA9',
          name_FontSize: 20,
          name_SizeUnit: "px",
          job_FontSize: 16,
          job_FontWeight: 700,
          job_SizeUnit: "px",
          dscs_FontSize: 16,
          nameP_Bottom: "15",
          nameP_Top: "20",
          dscP_Left: "20",
          dscP_Right: "20",
          dscP_Top: "15",
          dscP_Bottom: "20",
          jobP_Bottom: "15",
          jobP_isLinked: false,
          icnZ_Range: 20,
          icnSp_Range: 50,
          icnPd_Range: 1,
          icnSepH: 38,
          icnWp_Bottom: "20",
          icnWp_Left: "40",
          icnWp_Right: "40",
          icnWp_Top: "20",
          icnWp_isLinked: false,
          socialDetails: newsocialDetails1,
          imgBd_Bdr_Bottom: "5",
          imgBd_Bdr_Left: "5",
          imgBd_Bdr_Right: "5",
          imgBd_Bdr_Top: "5",
          imgBd_Rds_Bottom: "50",
          imgBd_Rds_Left: "50",
          imgBd_Rds_Right: "50",
          imgBd_Rds_Top: "50",
          imgBd_Rds_Unit: "%",
          imgBd_borderColor: "rgba(255,255,255,1)",
          imgBd_borderStyle: "solid",
          imgBgP_gradientColor: "linear-gradient(45deg, rgba(120,102,255,0.49) 0% , rgba(195,120,242,0.52) 100%)",
          imgMrg_Top: "-100",
          imgMrg_isLinked: false,
          WrpBg_backgroundColor: "rgba(255,255,255,1)",
          hov_imgBgP_gradientColor: "linear-gradient(45deg, rgba(0,0,0,0.8) 0% , rgba(0,0,0,0.4) 100%)",
          cSepColor: "#E1E7F1",
          sclBdSd_Rds_Bottom: "0",
          sclBdSd_Rds_Left: "0",
          sclBdSd_Rds_Right: "0",
          sclBdSd_Rds_Top: "0",
          sclBdSd_Rds_Unit: "px",
          sclBdSd_Rds_isLinked: true,
          sclBdSd_borderColor: "#A0A8BD",
          sclBdSd_borderStyle: "solid",
          wrpBdSd_blur: 20,
          wrpBdSd_hOffset: 0,
          wrpBdSd_shadowColor: "rgba(0,0,0,0.3)",
          wrpBdSd_spread: 0,
          wrpBdSd_vOffset: 5,
          wrpMrg_isLinked: false,
          wrpPad_isLinked: false,
          ovlBd_shadowColor: "rgba(0,0,0,0)",
          ovlBd_vOffset: 5,
          ovlBd_hOffset: 2,
          ovlBd_blur: 17
        }));
        break;
      case "preset3":
        var newsocialDetailspreset3 = socialDetails.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            color: '#fff',
            bgColor: '#A0A8BD'
          });
        });
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, (_objectSpread2 = {
          socialInImage: true,
          showDescs: true,
          showDesignation: true,
          showSSeparator: false,
          showSocialTitle: false,
          showCSeparator: false,
          isIconsDevider: false,
          imgBeforeEl: false,
          contentsAlign: 'center',
          iconsJustify: 'center',
          isConBgGradient: true,
          conBgGradient: "linear-gradient(211deg, #C8D2E3 0%, #DAE2F0 100%)",
          conBgColor: '#fff',
          nameColor: '#4b4b4b',
          jobColor: '#4b4b4b',
          descsColor: '#9f9f9f',
          hvIcnColor: '#fff',
          hvIcnBgc: '#909AA9',
          name_FontSize: 20,
          name_SizeUnit: "px",
          job_FontSize: 16,
          job_FontWeight: 700,
          job_SizeUnit: "px",
          dscs_FontSize: 16
        }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "name_SizeUnit", "px"), "nameP_Bottom", "15"), "nameP_Top", "20"), "dscP_Bottom", "20"), "dscP_Top", "15"), "dscP_Left", "0"), "dscP_Right", "0"), "dscP_isLinked", false), "jobP_Bottom", "0"), "jobP_isLinked", true), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "icnZ_Range", 20), "icnSp_Range", 20), "icnPd_Range", 1), "icnWp_Bottom", "0"), "icnWp_Left", "0"), "icnWp_Right", "0"), "icnWp_Top", "0"), "iconsVAlign", "flex-end"), "socialDetails", newsocialDetailspreset3), "imgBd_Bdr_Bottom", "0"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "imgBd_Bdr_Left", "0"), "imgBd_Bdr_Right", "0"), "imgBd_Bdr_Top", "0"), "imgBd_Rds_Bottom", "0"), "imgBd_Rds_Left", "0"), "imgBd_Rds_Right", "0"), "imgBd_Rds_Top", "0"), "imgBd_Rds_Unit", "%"), "imgBd_borderColor", "rgba(255,255,255,1)"), "imgBd_borderStyle", "none"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "imgW_Unit", "%"), "wrpW_Range", 400), "wrpW_Unit", "px"), "isImgHeightAuto", true), "cpd_Bottom", "50"), "cpd_Left", "50"), "cpd_Right", "50"), "cpd_Top", "50"), "cpd_Unit", "px"), "cpd_isLinked", true), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "cmrg_Bottom", "20"), "cmrg_Left", "20"), "cmrg_Right", "20"), "cmrg_Top", "20"), "cmrg_Unit", "px"), "cmrg_isLinked", true), "sclBdSd_Bdr_Bottom", "1"), "sclBdSd_Bdr_Left", "1"), "sclBdSd_Bdr_Right", "1"), "sclBdSd_Bdr_Top", "1"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "sclBdSd_Bdr_Unit", "px"), "sclBdSd_Bdr_isLinked", true), "sclBdSd_BorderType", "normal"), "sclBdSd_Rds_Bottom", "0"), "sclBdSd_Rds_Left", "0"), "sclBdSd_Rds_Right", "0"), "sclBdSd_Rds_Top", "0"), "sclBdSd_Rds_Unit", "px"), "sclBdSd_Rds_isLinked", true), "sclBdSd_borderColor", "#A0A8BD"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "sclBdSd_borderStyle", "solid"), "ovlBd_Rds_Bottom", "0"), "ovlBd_Rds_Left", "0"), "ovlBd_Rds_Right", "0"), "ovlBd_Rds_Top", "0"), "ovlBd_Rds_Unit", "px"), "ovlBd_shadowColor", "rgba(0,0,0,0)"), "ovlBd_vOffset", 5), "ovlBd_hOffset", 2), "ovlBd_blur", 17))));
        break;
      case "new-preset1":
        var newsocialDetails = socialDetails.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            color: '#A0A8BD',
            bgColor: '#fff'
          });
        });
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, {
          showDescs: true,
          showDesignation: true,
          showSSeparator: false,
          showSocialTitle: false,
          showCSeparator: false,
          isIconsDevider: false,
          imgBeforeEl: false,
          contentsAlign: 'left',
          iconsJustify: 'flex-start',
          isConBgGradient: false,
          conBgColor: '#fff',
          nameColor: '#1C1B1F',
          jobColor: '#CAD2DF',
          descsColor: '#768399',
          hvIcnColor: '#fff',
          hvIcnBgc: '#A0A8BD',
          name_FontSize: 24,
          name_SizeUnit: "px",
          job_FontSize: 32,
          job_SizeUnit: "px",
          job_FontWeight: 700,
          dscs_FontSize: 16,
          nameP_Bottom: "10",
          nameP_Top: "10",
          dscP_Bottom: "10",
          dscP_Top: "10",
          dscP_Left: "0",
          dscP_Right: "0",
          dscP_isLinked: false,
          jobP_Bottom: "0",
          jobP_isLinked: true,
          icnZ_Range: 17,
          icnSp_Range: 8,
          icnPd_Range: 1,
          icnWp_Bottom: "0",
          icnWp_Left: "0",
          icnWp_Right: "0",
          icnWp_Top: "0",
          socialDetails: newsocialDetails,
          imgW_Range: 424,
          imgW_Unit: "px",
          imgH_Range: 558,
          imgH_Unit: "px",
          wrpW_Range: 424,
          wrpW_Unit: "px",
          cpd_Bottom: "24",
          cpd_Left: "24",
          cpd_Right: "24",
          cpd_Top: "24",
          cpd_Unit: "px",
          cpd_isLinked: true,
          cmrg_Bottom: "20",
          cmrg_Left: "20",
          cmrg_Right: "20",
          cmrg_Top: "20",
          cmrg_Unit: "px",
          cmrg_isLinked: true,
          sclBdSd_Bdr_Bottom: "1",
          sclBdSd_Bdr_Left: "1",
          sclBdSd_Bdr_Right: "1",
          sclBdSd_Bdr_Top: "1",
          sclBdSd_Bdr_Unit: "px",
          sclBdSd_Bdr_isLinked: true,
          sclBdSd_BorderType: "normal",
          sclBdSd_Rds_Bottom: "50",
          sclBdSd_Rds_Left: "50",
          sclBdSd_Rds_Right: "50",
          sclBdSd_Rds_Top: "50",
          sclBdSd_Rds_Unit: "px",
          sclBdSd_Rds_isLinked: true,
          sclBdSd_borderColor: "#A0A8BD",
          sclBdSd_borderStyle: "solid",
          ovlBd_Rds_Bottom: "5",
          ovlBd_Rds_Left: "5",
          ovlBd_Rds_Right: "5",
          ovlBd_Rds_Top: "5",
          ovlBd_Rds_Unit: "px",
          imgBd_Bdr_Bottom: "0",
          imgBd_Bdr_Left: "0",
          imgBd_Bdr_Right: "0",
          imgBd_Bdr_Top: "0",
          imgBd_Rds_Bottom: "5",
          imgBd_Rds_Left: "5",
          imgBd_Rds_Right: "5",
          imgBd_Rds_Top: "5",
          imgBd_Rds_Unit: "px",
          imgBd_borderColor: "rgba(255,255,255,1)",
          imgBd_borderStyle: "none",
          ovlBd_shadowColor: "rgba(0,0,0,0)",
          ovlBd_vOffset: 5,
          ovlBd_hOffset: 2,
          ovlBd_blur: 17
        }));
        break;
      case "new-preset2":
        var newsocialDetails2 = socialDetails.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            color: '#D5D5D5',
            bgColor: '#909AA9'
          });
        });
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, {
          showDescs: false,
          showDesignation: true,
          showSSeparator: false,
          showSocialTitle: false,
          showCSeparator: false,
          isIconsDevider: false,
          imgBeforeEl: false,
          contentsAlign: 'center',
          iconsJustify: 'center',
          isConBgGradient: true,
          conBgGradient: "linear-gradient(214deg, #949CAA -14.68% , #606977 103.07%)",
          conBgColor: '#949CAA',
          nameColor: '#fff',
          jobColor: '#D5D5D5',
          descsColor: '#fff',
          hvIcnColor: '#fff',
          hvIcnBgc: '#909AA9',
          name_FontSize: 24,
          name_SizeUnit: "px",
          job_FontSize: 16,
          job_FontWeight: 400,
          job_SizeUnit: "px",
          dscs_FontSize: 16,
          nameP_Bottom: "10",
          nameP_Top: "10",
          dscP_Bottom: "10",
          dscP_Top: "10",
          jobP_Bottom: "0",
          jobP_Top: "0",
          jobP_isLinked: true,
          icnZ_Range: 14,
          icnSp_Range: 8,
          icnPd_Range: 0.9,
          icnWp_Bottom: "0",
          icnWp_Left: "0",
          icnWp_Right: "0",
          icnWp_Top: "10",
          socialDetails: newsocialDetails2,
          imgBd_Rds_Bottom: "8",
          imgBd_Rds_Left: "8",
          imgBd_Rds_Right: "8",
          imgBd_Rds_Top: "8",
          imgBd_Rds_Unit: "px",
          imgBd_Bdr_Bottom: "0",
          imgBd_Bdr_Left: "0",
          imgBd_Bdr_Right: "0",
          imgBd_Bdr_Top: "0",
          imgBd_borderColor: "rgba(255,255,255,1)",
          imgBd_borderStyle: "none",
          imgW_Range: 424,
          imgW_Unit: "px",
          imgH_Range: 558,
          imgH_Unit: "px",
          wrpW_Range: 424,
          wrpW_Unit: "px",
          cpd_Bottom: "24",
          cpd_Left: "24",
          cpd_Right: "24",
          cpd_Top: "24",
          cpd_Unit: "px",
          cpd_isLinked: true,
          cmrg_Bottom: "24",
          cmrg_Left: "24",
          cmrg_Right: "24",
          cmrg_Top: "24",
          cmrg_Unit: "px",
          cmrg_isLinked: true,
          sclBdSd_Bdr_Bottom: "1",
          sclBdSd_Bdr_Left: "1",
          sclBdSd_Bdr_Right: "1",
          sclBdSd_Bdr_Top: "1",
          sclBdSd_Bdr_Unit: "px",
          sclBdSd_Bdr_isLinked: true,
          sclBdSd_BorderType: "normal",
          sclBdSd_Rds_Bottom: "50",
          sclBdSd_Rds_Left: "50",
          sclBdSd_Rds_Right: "50",
          sclBdSd_Rds_Top: "50",
          sclBdSd_Rds_Unit: "px",
          sclBdSd_Rds_isLinked: true,
          sclBdSd_borderColor: "#A0A8BD",
          sclBdSd_borderStyle: "solid",
          ovlBd_Rds_Bottom: "8",
          ovlBd_Rds_Left: "8",
          ovlBd_Rds_Right: "8",
          ovlBd_Rds_Top: "8",
          ovlBd_Rds_Unit: "px",
          ovlBd_shadowColor: "rgba(0,0,0,0.16)",
          ovlBd_vOffset: 5,
          ovlBd_hOffset: 2,
          ovlBd_blur: 17
        }));
        break;
      case "new-preset3":
        var newsocialDetails3 = socialDetails.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            color: '#645F7D',
            bgColor: 'rgba(0,0,0,0)'
          });
        });
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, {
          showDescs: true,
          showDesignation: true,
          showSSeparator: true,
          showSocialTitle: true,
          showCSeparator: false,
          isIconsDevider: false,
          imgBeforeEl: false,
          contentsAlign: 'left',
          iconsJustify: 'flex-start',
          isConBgGradient: false,
          conBgColor: '#EBF0F8',
          nameColor: '#342E4C',
          jobColor: '#736D8B',
          descsColor: '#342E4C',
          hvIcnColor: '#000',
          hvIcnBgc: 'rgba(0,0,0,0)',
          name_FontSize: 24,
          name_SizeUnit: "px",
          job_FontSize: 16,
          job_FontWeight: 400,
          job_SizeUnit: "px",
          dscs_FontSize: 16,
          nameP_Bottom: "10",
          nameP_Top: "10",
          dscP_Bottom: "50",
          dscP_Top: "10",
          jobP_Bottom: "",
          jobP_Top: "0",
          jobP_Left: "0",
          jobP_Right: "0",
          jobP_isLinked: false,
          icnZ_Range: 13,
          icnSp_Range: 8,
          icnPd_Range: 0,
          icnWp_Bottom: "0",
          icnWp_Left: "0",
          icnWp_Right: "0",
          icnWp_Top: "20",
          socialDetails: newsocialDetails3,
          imgBd_Rds_Bottom: "0",
          imgBd_Rds_Left: "0",
          imgBd_Rds_Right: "0",
          imgBd_Rds_Top: "0",
          imgBd_Rds_Unit: "px",
          imgBd_Bdr_Bottom: "0",
          imgBd_Bdr_Left: "0",
          imgBd_Bdr_Right: "0",
          imgBd_Bdr_Top: "0",
          imgBd_borderColor: "rgba(255,255,255,1)",
          imgBd_borderStyle: "none",
          imgW_Range: 400,
          imgW_Unit: "px",
          imgH_Range: 400,
          imgH_Unit: "px",
          wrpW_Range: 400,
          wrpW_Unit: "px",
          cpd_Bottom: "34",
          cpd_Left: "34",
          cpd_Right: "34",
          cpd_Top: "34",
          cpd_Unit: "px",
          cpd_isLinked: true,
          cmrg_Bottom: "0",
          cmrg_Left: "0",
          cmrg_Right: "0",
          cmrg_Top: "0",
          cmrg_Unit: "px",
          cmrg_isLinked: true,
          sclBdSd_Bdr_Bottom: "1",
          sclBdSd_Bdr_Left: "1",
          sclBdSd_Bdr_Right: "1",
          sclBdSd_Bdr_Top: "1",
          sclBdSd_Bdr_Unit: "px",
          sclBdSd_Bdr_isLinked: true,
          sclBdSd_BorderType: "normal",
          sclBdSd_Rds_Bottom: "0",
          sclBdSd_Rds_Left: "0",
          sclBdSd_Rds_Right: "0",
          sclBdSd_Rds_Top: "0",
          sclBdSd_Rds_Unit: "px",
          sclBdSd_Rds_isLinked: true,
          sclBdSd_borderColor: "#A0A8BD",
          sclBdSd_borderStyle: "none",
          sSepW_Range: 100,
          ovlBd_Rds_Bottom: "0",
          ovlBd_Rds_Left: "0",
          ovlBd_Rds_Right: "0",
          ovlBd_Rds_Top: "0",
          ovlBd_Rds_Unit: "px",
          ovlBd_shadowColor: "rgba(0,0,0,0)",
          ovlBd_vOffset: 5,
          ovlBd_hOffset: 2,
          ovlBd_blur: 17
        }));
        break;
      case "preset2":
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, {
          icnWp_Bottom: "45",
          icnWp_isLinked: false,
          imgBd_Rds_Bottom: "50",
          imgBd_Rds_Left: "50",
          imgBd_Rds_Right: "50",
          imgBd_Rds_Top: "50",
          imgBd_Rds_Unit: "%",
          isImgHeightAuto: true,
          imgW_Range: 100,
          imgW_Unit: "%",
          jobP_Bottom: "15",
          jobP_isLinked: false,
          nameP_Bottom: "10",
          nameP_Top: "10",
          showDescs: false,
          wrpBdSd_Rds_Bottom: "50",
          wrpBdSd_Rds_Left: "50",
          wrpBdSd_Rds_Right: "50",
          wrpBdSd_Rds_Top: "50",
          wrpBdSd_Rds_Unit: "%",
          wrpMrg_Bottom: "80",
          wrpMrg_isLinked: false,
          wrpW_Range: 400,
          wrpW_Unit: "px"
        }));
        break;
      case "preset5":
        setAttributes(_objectSpread({}, defaultPresetAttrsObj));
        break;
      case "preset6":
        setAttributes(_objectSpread({}, defaultPresetAttrsObj));
        break;
      case "preset4":
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, {
          conBgGradient: "linear-gradient(45deg, #7967ff 0% , rgba(194,119,242,0.8) 100%)",
          imgW_Unit: "%",
          isImgHeightAuto: true,
          wrpW_Range: 400,
          wrpW_Unit: "px"
        }));
        break;
    }
    setAttributes({
      preset: preset
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (preset === 'preset3') {
      if (isContentOverlay) {
        setAttributes({
          socialInImage: false,
          nameColor: '#fff',
          jobColor: '#fff',
          descsColor: '#fff'
        });
      } else {
        setAttributes({
          socialInImage: true,
          nameColor: '#4b4b4b',
          jobColor: '#4b4b4b',
          descsColor: '#9f9f9f'
        });
      }
    }
  }, [isContentOverlay, preset]);
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab"
    // onSelect={onSelect}
    ,
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }, {
      name: "styles",
      title: "Style",
      className: "eb-tab styles"
    }, {
      name: "advance",
      title: "Advanced",
      className: "eb-tab advance"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-tab-controls" + tab.name
    }, tab.name === "general" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Presets", "essential-blocks")
      // initialOpen={false}
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Design Preset", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl
    // label={__("Design Preset", "essential-blocks")}
    , {
      value: preset,
      options: _constants__WEBPACK_IMPORTED_MODULE_12__.STYLE_PRESETS
      // onChange={(preset) => setAttributes({ preset })}
      ,
      onChange: handlePresetChange
    })), preset === "preset5" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Reverse Layout", "essential-blocks"),
      checked: isP9reverse,
      onChange: function onChange() {
        return setAttributes({
          isP9reverse: !isP9reverse
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController
    // noUnits
    , {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gap", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.p9LGap,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 100,
      step: 1
    })), preset === "new-preset3" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Alignment", "essential-blocks"),
      value: hoverPreset,
      options: _constants__WEBPACK_IMPORTED_MODULE_12__.HOVER_ALIGN,
      onChange: function onChange(hoverPreset) {
        return setAttributes({
          hoverPreset: hoverPreset
        });
      }
    }), preset === "preset3" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Content Overlay", "essential-blocks"),
      checked: isContentOverlay,
      onChange: function onChange() {
        return setAttributes({
          isContentOverlay: !isContentOverlay
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Designation", "essential-blocks"),
      checked: showDesignation,
      onChange: function onChange() {
        return setAttributes({
          showDesignation: !showDesignation
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Description", "essential-blocks"),
      checked: showDescs,
      onChange: function onChange() {
        return setAttributes({
          showDescs: !showDescs
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Social Profiles", "essential-blocks"),
      checked: showSocials,
      onChange: function onChange() {
        return setAttributes({
          showSocials: !showSocials
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Content", "essential-blocks"),
      initialOpen: false
    }, !imageUrl && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: function onSelect(_ref2) {
        var id = _ref2.id,
          url = _ref2.url,
          alt = _ref2.alt;
        return setAttributes({
          imageUrl: url,
          imageId: id,
          imageAlt: alt
        });
      },
      type: "image",
      value: imageId,
      render: function render(_ref3) {
        var open = _ref3.open;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: "eb-background-control-inspector-panel-img-btn components-button",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload Image", "essential-blocks"),
          icon: "format-image",
          onClick: open
        });
      }
    }), imageUrl && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ImageAvatar, {
      imageUrl: imageUrl,
      onDeleteImage: function onDeleteImage() {
        return setAttributes({
          imageUrl: null
        });
      }
    }), /*#__PURE__*/React.createElement(DynamicInputControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("URL", "essential-blocks"),
      attrName: "avatarURL",
      inputValue: avatarURL,
      setAttributes: setAttributes,
      onChange: function onChange(newURL) {
        return setAttributes({
          avatarURL: newURL
        });
      }
    }), /*#__PURE__*/React.createElement(DynamicInputControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "essential-blocks"),
      attrName: "name",
      inputValue: name,
      setAttributes: setAttributes,
      onChange: function onChange(newName) {
        return setAttributes({
          name: newName
        });
      }
    }), /*#__PURE__*/React.createElement(DynamicInputControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Designation", "essential-blocks"),
      attrName: "jobTitle",
      inputValue: jobTitle,
      setAttributes: setAttributes,
      onChange: function onChange(newJobTitle) {
        return setAttributes({
          jobTitle: newJobTitle
        });
      }
    }), /*#__PURE__*/React.createElement(DynamicInputControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Description", "essential-blocks"),
      attrName: "description",
      inputValue: description,
      setAttributes: setAttributes,
      onChange: function onChange(newDescription) {
        return setAttributes({
          description: newDescription
        });
      },
      isTextarea: true
    }), avatarURL && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open in New Tab", "essential-blocks"),
      checked: newWindow,
      onChange: function onChange() {
        return setAttributes({
          newWindow: !newWindow
        });
      }
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Social Profiles", "essential-blocks")
      // initialOpen={false}
    }, /*#__PURE__*/React.createElement(React.Fragment, null, showSocials && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show link in new tab", "essential-blocks"),
      checked: showLinkNewTab,
      onChange: function onChange() {
        return setAttributes({
          showLinkNewTab: !showLinkNewTab
        });
      }
    }), /*#__PURE__*/React.createElement(DealSocialProfiles, {
      profiles: socialDetails,
      onProfileAdd: function onProfileAdd(socialDetails) {
        return setAttributes({
          socialDetails: socialDetails
        });
      },
      iconList: IconList,
      showLinkNewTab: showLinkNewTab
    })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Separators", "essential-blocks")
      // initialOpen={false}
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Content Separator", "essential-blocks"),
      checked: showCSeparator,
      onChange: function onChange() {
        return setAttributes({
          showCSeparator: !showCSeparator
        });
      }
    }), showSocials && "preset3" !== preset && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Social Separator", "essential-blocks"),
      checked: showSSeparator,
      onChange: function onChange() {
        return setAttributes({
          showSSeparator: !showSSeparator
        });
      }
    }))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Container width", "essential-blocks")
      // initialOpen={false}
    }, /*#__PURE__*/React.createElement(ResponsiveRangeController
    // noUnits
    , {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Max Width", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.wrapperWidth,
      resRequiredProps: resRequiredProps,
      min: 100,
      max: 2000,
      step: 1
    })), /preset[2,3,4,8,9]|new-preset1|new-preset2|new-preset3/i.test(preset || "") && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlay Contents", "essential-blocks")
      // initialOpen={false}
    }, /preset[3,4,]|new-preset1|new-preset2|new-preset3/i.test(preset || "") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.contentsMargin,
      baseLabel: "margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.contentsPad,
      baseLabel: "Padding"
    }), preset === "preset4" && preset === "new-preset1" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-team-content-vertical-alignments",
      label: "Vertical alignments"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      id: "eb-team-content-vertical-alignments"
    }, _constants__WEBPACK_IMPORTED_MODULE_12__.ContentsVerticalAligns.map(function (_ref4, index) {
      var value = _ref4.value,
        label = _ref4.label;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        isSecondary: conVtAlign !== value,
        isPrimary: conVtAlign === value,
        onClick: function onClick() {
          return setAttributes({
            conVtAlign: value
          });
        }
      }, label);
    })))), /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_11__.ovlBdPrefix,
      resRequiredProps: resRequiredProps
      // noShadow
      ,
      noBdrHover: true
      // noBorder
      // noShdowHover
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background", "essential-blocks")
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Use Background Gradient", "essential-blocks"),
      checked: isConBgGradient,
      onChange: function onChange() {
        return setAttributes({
          isConBgGradient: !isConBgGradient
        });
      }
    }), isConBgGradient ? /*#__PURE__*/React.createElement(GradientColorControl, {
      gradientColor: conBgGradient,
      onChange: function onChange(conBgGradient) {
        return setAttributes({
          conBgGradient: conBgGradient
        });
      }
    }) : /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: conBgColor,
      onChange: function onChange(conBgColor) {
        return setAttributes({
          conBgColor: conBgColor
        });
      }
    }), (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.applyFilters)("eb_team_member_preset8_shadow", "", attributes, setAttributes, resRequiredProps), /*#__PURE__*/React.createElement("style", null, "".concat(preset === "preset2" ? "\n\n\t\t\t\t\tdiv.".concat(blockId, ".eb-team-wrapper div.contents{\n\t\t\t\t\t\ttop: 50%;\n\t\t\t\t\t}\n\n\t\t\t\t") : "", "\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t").concat(preset === "preset3" ? "\n\t\t\t\tdiv.".concat(blockId, ".eb-team-wrapper ul.socials {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t") : "", "\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t").concat(preset === "preset4" ? "\n\t\t\t\tdiv.".concat(blockId, ".eb-team-wrapper div.contents {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t") : "", "\n\n\t\t\t\t\t\t\t\t\t\t\t\t"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alignments", "essential-blocks")
    }, preset === "preset5" ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-team-avatar-vertical-alignments",
      label: "Avatar/Content Vertical Alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl
    // label={__("Icons Horizontal Alignment", "essential-blocks")}
    , {
      value: imgCnVtAlign,
      options: _constants__WEBPACK_IMPORTED_MODULE_12__.ContentsVerticalAligns,
      onChange: function onChange(imgCnVtAlign) {
        return setAttributes({
          imgCnVtAlign: imgCnVtAlign
        });
      }
    })) : /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-team-image-alignments",
      label: "Avatar Horizontal Alignments"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      className: "eb-btngrp-align"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      icon: function icon() {
        return /*#__PURE__*/React.createElement(LeftAlignIcon, {
          color: imageAlign === "left" && "#6c40f7"
        });
      },
      onClick: function onClick() {
        return setAttributes({
          imageAlign: "left"
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      icon: function icon() {
        return /*#__PURE__*/React.createElement(CenterAlignIcon, {
          color: imageAlign === "center" && "#6c40f7"
        });
      },
      onClick: function onClick() {
        return setAttributes({
          imageAlign: "center"
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      icon: function icon() {
        return /*#__PURE__*/React.createElement(RightAlignIcon, {
          color: imageAlign === "right" && "#6c40f7"
        });
      },
      onClick: function onClick() {
        return setAttributes({
          imageAlign: "right"
        });
      }
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-team-contents-alignments",
      label: "Contents Horizontal Alignments"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      className: "eb-btngrp-align"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      icon: function icon() {
        return /*#__PURE__*/React.createElement(LeftAlignIcon, {
          color: contentsAlign === "left" && "#6c40f7"
        });
      },
      onClick: function onClick() {
        return setAttributes({
          contentsAlign: "left"
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      icon: function icon() {
        return /*#__PURE__*/React.createElement(CenterAlignIcon, {
          color: contentsAlign === "center" && "#6c40f7"
        });
      },
      onClick: function onClick() {
        return setAttributes({
          contentsAlign: "center"
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      icon: function icon() {
        return /*#__PURE__*/React.createElement(RightAlignIcon, {
          color: contentsAlign === "right" && "#6c40f7"
        });
      },
      onClick: function onClick() {
        return setAttributes({
          contentsAlign: "right"
        });
      }
    }))), showSocials && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-team-icons-alignments",
      label: "Social Icons Horizontal Alignments"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl
    // label={__("Icons Horizontal Alignment", "essential-blocks")}
    , {
      value: iconsJustify,
      options: _constants__WEBPACK_IMPORTED_MODULE_12__.IconsHzAligns,
      onChange: function onChange(iconsJustify) {
        return setAttributes({
          iconsJustify: iconsJustify
        });
      }
    })), preset === "preset3" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-team-icons-alignments",
      label: "Social Icons Vertical Alignments"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl
    // label={__("Icons Horizontal Alignment", "essential-blocks")}
    , {
      value: iconsVAlign,
      options: _constants__WEBPACK_IMPORTED_MODULE_12__.ContentsVerticalAligns,
      onChange: function onChange(iconsVAlign) {
        return setAttributes({
          iconsVAlign: iconsVAlign
        });
      }
    }))), showCSeparator && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-team-contents-alignments",
      label: "Content Separator Alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      className: "eb-btngrp-align"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      icon: function icon() {
        return /*#__PURE__*/React.createElement(LeftAlignIcon, {
          color: cSepAlign === "left" && "#6c40f7"
        });
      },
      onClick: function onClick() {
        return setAttributes({
          cSepAlign: "left"
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      icon: function icon() {
        return /*#__PURE__*/React.createElement(CenterAlignIcon, {
          color: cSepAlign === "center" && "#6c40f7"
        });
      },
      onClick: function onClick() {
        return setAttributes({
          cSepAlign: "center"
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      icon: function icon() {
        return /*#__PURE__*/React.createElement(RightAlignIcon, {
          color: cSepAlign === "right" && "#6c40f7"
        });
      },
      onClick: function onClick() {
        return setAttributes({
          cSepAlign: "right"
        });
      }
    }))), showSocials && showSSeparator && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-team-contents-alignments",
      label: "Social Separator Alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      className: "eb-btngrp-align"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      icon: function icon() {
        return /*#__PURE__*/React.createElement(LeftAlignIcon, {
          color: sSepAlign === "left" && "#6c40f7"
        });
      },
      onClick: function onClick() {
        return setAttributes({
          sSepAlign: "left"
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      icon: function icon() {
        return /*#__PURE__*/React.createElement(CenterAlignIcon, {
          color: sSepAlign === "center" && "#6c40f7"
        });
      },
      onClick: function onClick() {
        return setAttributes({
          sSepAlign: "center"
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      icon: function icon() {
        return /*#__PURE__*/React.createElement(RightAlignIcon, {
          color: sSepAlign === "right" && "#6c40f7"
        });
      },
      onClick: function onClick() {
        return setAttributes({
          sSepAlign: "right"
        });
      }
    })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Avatar", "essential-blocks"),
      initialOpen: false
    }, !imageUrl && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: function onSelect(_ref5) {
        var id = _ref5.id,
          url = _ref5.url;
        return setAttributes({
          imageUrl: url,
          imageId: id,
          imageAlt: alt
        });
      },
      type: "image",
      value: imageId,
      render: function render(_ref6) {
        var open = _ref6.open;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: "eb-background-control-inspector-panel-img-btn components-button",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload Image", "essential-blocks"),
          icon: "format-image",
          onClick: open
        });
      }
    }), imageUrl && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Width", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.imageWidth,
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_12__.sizeUnitTypes,
      max: 2000
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto Image Height", "essential-blocks"),
      checked: isImgHeightAuto,
      onChange: function onChange() {
        return setAttributes({
          isImgHeightAuto: !isImgHeightAuto
        });
      }
    }), !isImgHeightAuto && /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Height", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.imageHeight,
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_12__.sizeUnitTypes,
      max: 2000
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.imageMarginConst,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.imagePaddingConst,
      baseLabel: "Padding"
    }), /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_11__.prefixImgBd,
      resRequiredProps: resRequiredProps
      // noShadow
      // noBorder
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Background before Image", "essential-blocks"),
      checked: imgBeforeEl,
      onChange: function onChange() {
        return setAttributes({
          imgBeforeEl: !imgBeforeEl
        });
      }
    }), imgBeforeEl && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BackgroundControl, {
      noOverlay: true,
      noMainBgi: true,
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_10__.imgTopBgPrefix,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      noUnits: true,
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.imgTopBgHeight,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 300,
      step: 1
    })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Name", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: nameColor,
      onChange: function onChange(nameColor) {
        return setAttributes({
          nameColor: nameColor
        });
      }
    }), /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_name,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.tmbNamePaddingConst,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Job Title", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: jobColor,
      onChange: function onChange(jobColor) {
        return setAttributes({
          jobColor: jobColor
        });
      }
    }), /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_job,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.tmbJobPaddingConst,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Description", "essential-blocks"),
      initialOpen: false
    }, showDescs && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: descsColor,
      onChange: function onChange(descsColor) {
        return setAttributes({
          descsColor: descsColor
        });
      }
    }), /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_descs,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.tmbDescsPaddingConst,
      baseLabel: "Padding"
    }))), showSocials && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Social Icons", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Color", "essential-blocks"),
      color: hvIcnColor,
      onChange: function onChange(hvIcnColor) {
        return setAttributes({
          hvIcnColor: hvIcnColor
        });
      }
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Background", "essential-blocks"),
      color: hvIcnBgc,
      onChange: function onChange(hvIcnBgc) {
        return setAttributes({
          hvIcnBgc: hvIcnBgc
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      noUnits: true,
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Size", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.rangeIconSize,
      resRequiredProps: resRequiredProps,
      min: 5,
      max: 300,
      step: 1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      noUnits: true,
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.rangeIconPadding,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 6,
      step: 0.1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      noUnits: true,
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spacing", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.rangeIconDistance,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 100,
      step: 1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      noUnits: true,
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rows Gap", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.rangeIconRowGap,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 100,
      step: 1
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "block",
        margin: "-20px 0 20px"
      }
    }, /*#__PURE__*/React.createElement("i", null, "N.B. 'Rows Gap' is used when you have multiple rows of social profiles. Normally in case of only one row, it's not needed")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icons Devider", "essential-blocks"),
      checked: isIconsDevider,
      onChange: function onChange() {
        return setAttributes({
          isIconsDevider: !isIconsDevider
        });
      }
    }), isIconsDevider && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: icnsDevideColor,
      onChange: function onChange(icnsDevideColor) {
        return setAttributes({
          icnsDevideColor: icnsDevideColor
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width", "essential-blocks"),
      value: icnSepW,
      onChange: function onChange(icnSepW) {
        return setAttributes({
          icnSepW: icnSepW
        });
      },
      step: 1,
      min: 1,
      max: 50
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height", "essential-blocks"),
      value: icnSepH,
      onChange: function onChange(icnSepH) {
        return setAttributes({
          icnSepH: icnSepH
        });
      },
      step: 1,
      min: 1,
      max: 300
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Position From Right", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.sclDeviderPosRight,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 80,
      step: 1
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Hover Effect", "essential-blocks"),
      value: icnEffect,
      options: _constants__WEBPACK_IMPORTED_MODULE_12__.HOVER_EFFECT
      // onChange={(preset) => setAttributes({ preset })}
      ,
      onChange: function onChange(icnEffect) {
        setAttributes({
          icnEffect: icnEffect
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icons Border", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_11__.prefixSocialBdShadow,
      resRequiredProps: resRequiredProps,
      noShadow: true
      // noBorder
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Container Background ", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_10__.socialWrpBg,
      resRequiredProps: resRequiredProps,
      noMainBgi: true,
      noOverlay: true
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Container Margin Padding ", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.iconsWrapMargin,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.iconsWrapPadding,
      baseLabel: "Padding"
    }))), showCSeparator && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Content Separator", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: cSepColor,
      onChange: function onChange(cSepColor) {
        return setAttributes({
          cSepColor: cSepColor
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.cSepWPrefix,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 800,
      step: 1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.cSepHPrefix,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 20,
      step: 1
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Separator Type", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl
    // label={__("Design Preset", "essential-blocks")}
    , {
      value: cSepType,
      options: _constants__WEBPACK_IMPORTED_MODULE_12__.separatorTypes
      // onChange={(preset) => setAttributes({ preset })}
      ,
      onChange: function onChange(cSepType) {
        setAttributes({
          cSepType: cSepType
        });
      }
    }))), showSocials && showSSeparator && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Social Separator", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: sSepColor,
      onChange: function onChange(sSepColor) {
        return setAttributes({
          sSepColor: sSepColor
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.sSepWPrefix,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 800,
      step: 1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__.sSepHPrefix,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 20,
      step: 1
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Separator Type", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl
    // label={__("Design Preset", "essential-blocks")}
    , {
      value: sSepType,
      options: _constants__WEBPACK_IMPORTED_MODULE_12__.separatorTypes
      // onChange={(preset) => setAttributes({ preset })}
      ,
      onChange: function onChange(sSepType) {
        setAttributes({
          sSepType: sSepType
        });
      }
    })))), tab.name === "advance" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin & Padding")
      // initialOpen={true}
    }, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.tmbWrapMarginConst,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.tmbWrapPaddingConst,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background ", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_10__.WrpBgConst,
      resRequiredProps: resRequiredProps
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border & Shadow"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_11__.WrpBdShadowConst,
      resRequiredProps: resRequiredProps
      // noShadow
      // noBorder
    })), /*#__PURE__*/React.createElement(AdvancedControls, {
      attributes: attributes,
      setAttributes: setAttributes
    })));
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_social_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/social-links */ "./src/components/social-links.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function Save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
    name = attributes.name,
    jobTitle = attributes.jobTitle,
    description = attributes.description,
    showDescs = attributes.showDescs,
    showSocials = attributes.showSocials,
    showCSeparator = attributes.showCSeparator,
    showSSeparator = attributes.showSSeparator,
    imageUrl = attributes.imageUrl,
    profilesOnly = attributes.profilesOnly,
    socialInImage = attributes.socialInImage,
    icnEffect = attributes.icnEffect,
    classHook = attributes.classHook,
    avatarURL = attributes.avatarURL,
    newWindow = attributes.newWindow,
    showLinkNewTab = attributes.showLinkNewTab,
    imageAlt = attributes.imageAlt,
    preset = attributes.preset,
    showDesignation = attributes.showDesignation,
    hoverPreset = attributes.hoverPreset,
    isContentOverlay = attributes.isContentOverlay;
  return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
    className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockId, " eb-team-wrapper ").concat(preset, " ").concat(preset === 'new-preset3' ? hoverPreset : '', " ").concat(preset === 'preset3' && isContentOverlay ? 'content-overlay' : '', "  ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-team-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-team-member-image"
  }, avatarURL && /*#__PURE__*/React.createElement("a", _extends({
    // className={`eb-button-anchor`}
    href: avatarURL ? avatarURL : ""
  }, newWindow && {
    target: "_blank"
  }, {
    rel: "noopener"
  }), /*#__PURE__*/React.createElement("img", {
    className: "eb-team-member-avatar",
    src: imageUrl,
    alt: imageAlt ? imageAlt : name
  })), !avatarURL && /*#__PURE__*/React.createElement("img", {
    className: "eb-team-member-avatar",
    src: imageUrl,
    alt: imageAlt ? imageAlt : name
  }), socialInImage && showSocials && /*#__PURE__*/React.createElement(_components_social_links__WEBPACK_IMPORTED_MODULE_1__["default"], {
    socialDetails: profilesOnly,
    icnEffect: icnEffect,
    linkNewTab: showLinkNewTab,
    preset: preset
  }), preset === 'new-preset1' && showDesignation && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "h4",
    className: "eb-team-member-job-title",
    value: jobTitle
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-team-member-contents"
  }, (preset === 'new-preset1' || preset === 'new-preset2' || preset === 'new-preset3') && /*#__PURE__*/React.createElement("div", {
    className: "eb-team-member-contents-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-team-member-texts"
  }, name && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "h3",
    className: "eb-team-member-name",
    value: name
  }), preset != 'new-preset1' && showDesignation && jobTitle && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "h4",
    className: "eb-team-member-job-title",
    value: jobTitle
  }), showCSeparator && /*#__PURE__*/React.createElement("hr", {
    className: "eb-team-member-content-separator"
  }), showDescs && description && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "p",
    className: "eb-team-member-description",
    value: description
  })), !socialInImage && showSocials && /*#__PURE__*/React.createElement(React.Fragment, null, showSSeparator && /*#__PURE__*/React.createElement("hr", {
    className: "eb-team-member-social-separator"
  }), /*#__PURE__*/React.createElement(_components_social_links__WEBPACK_IMPORTED_MODULE_1__["default"], {
    socialDetails: profilesOnly,
    icnEffect: icnEffect,
    linkNewTab: showLinkNewTab,
    preset: preset
  }))), preset != 'new-preset1' && preset != 'new-preset2' && preset != 'new-preset3' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "eb-team-member-texts"
  }, name && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "h3",
    className: "eb-team-member-name",
    value: name
  }), showDesignation && jobTitle && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "h4",
    className: "eb-team-member-job-title",
    value: jobTitle
  }), showCSeparator && /*#__PURE__*/React.createElement("hr", {
    className: "eb-team-member-content-separator"
  }), showDescs && description && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "p",
    className: "eb-team-member-description",
    value: description
  })), !socialInImage && showSocials && /*#__PURE__*/React.createElement(React.Fragment, null, showSSeparator && /*#__PURE__*/React.createElement("hr", {
    className: "eb-team-member-social-separator"
  }), /*#__PURE__*/React.createElement(_components_social_links__WEBPACK_IMPORTED_MODULE_1__["default"], {
    socialDetails: profilesOnly,
    icnEffect: icnEffect,
    linkNewTab: showLinkNewTab,
    preset: preset
  }))))))));
}

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/**
 * WordPress dependencies
 */






var _window$EBTeamMemberC = window.EBTeamMemberControls,
  softMinifyCssStrings = _window$EBTeamMemberC.softMinifyCssStrings,
  generateTypographyStyles = _window$EBTeamMemberC.generateTypographyStyles,
  generateDimensionsControlStyles = _window$EBTeamMemberC.generateDimensionsControlStyles,
  generateBorderShadowStyles = _window$EBTeamMemberC.generateBorderShadowStyles,
  generateResponsiveRangeStyles = _window$EBTeamMemberC.generateResponsiveRangeStyles,
  generateBackgroundControlStyles = _window$EBTeamMemberC.generateBackgroundControlStyles,
  StyleComponent = _window$EBTeamMemberC.StyleComponent;
function Style(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    blockName = props.name;
  var resOption = attributes.resOption,
    blockId = attributes.blockId,
    blockMeta = attributes.blockMeta,
    name = attributes.name,
    jobTitle = attributes.jobTitle,
    description = attributes.description,
    showDescs = attributes.showDescs,
    imageUrl = attributes.imageUrl,
    imageId = attributes.imageId,
    isImgHeightAuto = attributes.isImgHeightAuto,
    _attributes$descsColo = attributes.descsColor,
    descsColor = _attributes$descsColo === void 0 ? "#9f9f9f" : _attributes$descsColo,
    _attributes$jobColor = attributes.jobColor,
    jobColor = _attributes$jobColor === void 0 ? "#4b4b4b" : _attributes$jobColor,
    _attributes$nameColor = attributes.nameColor,
    nameColor = _attributes$nameColor === void 0 ? "#4b4b4b" : _attributes$nameColor,
    showSocials = attributes.showSocials,
    socialDetails = attributes.socialDetails,
    profilesOnly = attributes.profilesOnly,
    iconsJustify = attributes.iconsJustify,
    iconsVAlign = attributes.iconsVAlign,
    contentsAlign = attributes.contentsAlign,
    imageAlign = attributes.imageAlign,
    cSepAlign = attributes.cSepAlign,
    sSepAlign = attributes.sSepAlign,
    preset = attributes.preset,
    socialInImage = attributes.socialInImage,
    imgBeforeEl = attributes.imgBeforeEl,
    showCSeparator = attributes.showCSeparator,
    showSSeparator = attributes.showSSeparator,
    _attributes$cSepType = attributes.cSepType,
    cSepType = _attributes$cSepType === void 0 ? "solid" : _attributes$cSepType,
    _attributes$sSepType = attributes.sSepType,
    sSepType = _attributes$sSepType === void 0 ? "solid" : _attributes$sSepType,
    _attributes$cSepColor = attributes.cSepColor,
    cSepColor = _attributes$cSepColor === void 0 ? "#84AFFF" : _attributes$cSepColor,
    _attributes$sSepColor = attributes.sSepColor,
    sSepColor = _attributes$sSepColor === void 0 ? "#CACACA" : _attributes$sSepColor,
    isIconsDevider = attributes.isIconsDevider,
    _attributes$icnsDevid = attributes.icnsDevideColor,
    icnsDevideColor = _attributes$icnsDevid === void 0 ? "#cacaca" : _attributes$icnsDevid,
    _attributes$icnSepW = attributes.icnSepW,
    icnSepW = _attributes$icnSepW === void 0 ? 1 : _attributes$icnSepW,
    _attributes$icnSepH = attributes.icnSepH,
    icnSepH = _attributes$icnSepH === void 0 ? 30 : _attributes$icnSepH,
    hvIcnColor = attributes.hvIcnColor,
    hvIcnBgc = attributes.hvIcnBgc,
    conVtAlign = attributes.conVtAlign,
    isConBgGradient = attributes.isConBgGradient,
    conBgGradient = attributes.conBgGradient,
    _attributes$conBgColo = attributes.conBgColor,
    conBgColor = _attributes$conBgColo === void 0 ? "rgba(0,0,0,.4)" : _attributes$conBgColo,
    imgCnVtAlign = attributes.imgCnVtAlign,
    isP9reverse = attributes.isP9reverse,
    icnEffect = attributes.icnEffect,
    classHook = attributes.classHook,
    isContentOverlay = attributes.isContentOverlay;
  //
  // styling codes start from here
  //

  // styles related to generateTypographyStyles start ⬇

  var _generateTypographySt = generateTypographyStyles({
      attributes: attributes,
      prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__.typoPrefix_name,
      defaultFontSize: 20
    }),
    nameTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
    nameTypoStylesTab = _generateTypographySt.typoStylesTab,
    nameTypoStylesMobile = _generateTypographySt.typoStylesMobile;
  var _generateTypographySt2 = generateTypographyStyles({
      attributes: attributes,
      prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__.typoPrefix_job,
      defaultFontSize: 16
    }),
    jobTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
    jobTypoStylesTab = _generateTypographySt2.typoStylesTab,
    jobTypoStylesMobile = _generateTypographySt2.typoStylesMobile;
  var _generateTypographySt3 = generateTypographyStyles({
      attributes: attributes,
      prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__.typoPrefix_descs,
      defaultFontSize: 16
    }),
    descsTypoStylesDesktop = _generateTypographySt3.typoStylesDesktop,
    descsTypoStylesTab = _generateTypographySt3.typoStylesTab,
    descsTypoStylesMobile = _generateTypographySt3.typoStylesMobile;

  // styles related to generateTypographyStyles end ⬇

  // styles related to generateResponsiveRangeStyles start ⬇
  var _generateResponsiveRa = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_1__.wrapperWidth,
      // customUnit: "px",
      property: "max-width",
      attributes: attributes
    }),
    wrapWidthDesktop = _generateResponsiveRa.rangeStylesDesktop,
    wrapWidthTab = _generateResponsiveRa.rangeStylesTab,
    wrapWidthMobile = _generateResponsiveRa.rangeStylesMobile;
  var _generateResponsiveRa2 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_1__.imageWidth,
      // customUnit: "px",
      property: "width",
      attributes: attributes
    }),
    imgWidthDesktop = _generateResponsiveRa2.rangeStylesDesktop,
    imgWidthTab = _generateResponsiveRa2.rangeStylesTab,
    imgWidthMobile = _generateResponsiveRa2.rangeStylesMobile;
  var _generateResponsiveRa3 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_1__.p9LGap,
      // customUnit: "px",
      property: "Gap",
      attributes: attributes
    }),
    p9flexGapDesktop = _generateResponsiveRa3.rangeStylesDesktop,
    p9flexGapTab = _generateResponsiveRa3.rangeStylesTab,
    p9flexGapMobile = _generateResponsiveRa3.rangeStylesMobile;
  var _generateResponsiveRa4 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_1__.imageHeight,
      // customUnit: "px",
      property: "height",
      attributes: attributes
    }),
    imgHeightDesktop = _generateResponsiveRa4.rangeStylesDesktop,
    imgHeightTab = _generateResponsiveRa4.rangeStylesTab,
    imgHeightMobile = _generateResponsiveRa4.rangeStylesMobile;
  var _generateResponsiveRa5 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_1__.rangeIconSize,
      customUnit: "px",
      property: "font-size",
      attributes: attributes
    }),
    iconSizeDesktop = _generateResponsiveRa5.rangeStylesDesktop,
    iconSizeTab = _generateResponsiveRa5.rangeStylesTab,
    iconSizeMobile = _generateResponsiveRa5.rangeStylesMobile;
  var _generateResponsiveRa6 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_1__.rangeIconPadding,
      customUnit: "em",
      property: "padding",
      attributes: attributes
    }),
    iconPaddingDesktop = _generateResponsiveRa6.rangeStylesDesktop,
    iconPaddingTab = _generateResponsiveRa6.rangeStylesTab,
    iconPaddingMobile = _generateResponsiveRa6.rangeStylesMobile;
  var _generateResponsiveRa7 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_1__.rangeIconDistance,
      customUnit: "px",
      property: "column-gap",
      attributes: attributes
    }),
    iconSpaceDesktop = _generateResponsiveRa7.rangeStylesDesktop,
    iconSpaceTab = _generateResponsiveRa7.rangeStylesTab,
    iconSpaceMobile = _generateResponsiveRa7.rangeStylesMobile;
  var _generateResponsiveRa8 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_1__.rangeIconRowGap,
      customUnit: "px",
      property: "row-gap",
      attributes: attributes
    }),
    iconRowGapDesktop = _generateResponsiveRa8.rangeStylesDesktop,
    iconRowGapTab = _generateResponsiveRa8.rangeStylesTab,
    iconRowGapMobile = _generateResponsiveRa8.rangeStylesMobile;
  var _generateResponsiveRa9 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_1__.imgTopBgHeight,
      customUnit: "px",
      property: "height",
      attributes: attributes
    }),
    imgTopBgHeightDesktop = _generateResponsiveRa9.rangeStylesDesktop,
    imgTopBgHeightTab = _generateResponsiveRa9.rangeStylesTab,
    imgTopBgHeightMobile = _generateResponsiveRa9.rangeStylesMobile;
  var _generateResponsiveRa10 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_1__.cSepWPrefix,
      property: "width",
      attributes: attributes
    }),
    contentSepWidthDesktop = _generateResponsiveRa10.rangeStylesDesktop,
    contentSepWidthTab = _generateResponsiveRa10.rangeStylesTab,
    contentSepWidthMobile = _generateResponsiveRa10.rangeStylesMobile;
  var _generateResponsiveRa11 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_1__.sSepWPrefix,
      property: "width",
      attributes: attributes
    }),
    socialSepWidthDesktop = _generateResponsiveRa11.rangeStylesDesktop,
    socialSepWidthTab = _generateResponsiveRa11.rangeStylesTab,
    socialSepWidthMobile = _generateResponsiveRa11.rangeStylesMobile;
  var _generateResponsiveRa12 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_1__.cSepHPrefix,
      property: "border-bottom-width",
      attributes: attributes
    }),
    contentSepHeightDesktop = _generateResponsiveRa12.rangeStylesDesktop,
    contentSepHeightTab = _generateResponsiveRa12.rangeStylesTab,
    contentSepHeightMobile = _generateResponsiveRa12.rangeStylesMobile;
  var _generateResponsiveRa13 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_1__.sSepHPrefix,
      property: "border-bottom-width",
      attributes: attributes
    }),
    socialSepHeightDesktop = _generateResponsiveRa13.rangeStylesDesktop,
    socialSepHeightTab = _generateResponsiveRa13.rangeStylesTab,
    socialSepHeightMobile = _generateResponsiveRa13.rangeStylesMobile;
  var _generateResponsiveRa14 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_1__.sclDeviderPosRight,
      property: "margin-right",
      attributes: attributes
    }),
    sSepPosRightDesktop = _generateResponsiveRa14.rangeStylesDesktop,
    sSepPosRightTab = _generateResponsiveRa14.rangeStylesTab,
    sSepPosRightMobile = _generateResponsiveRa14.rangeStylesMobile;

  // styles related to generateResponsiveRangeStyles end

  // styles related to generateBackgroundControlStyles start ⬇

  var _generateBackgroundCo = generateBackgroundControlStyles({
      attributes: attributes,
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_3__.WrpBgConst
      // noOverlay: true,
      // noMainBgi: true,
      // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    }),
    wrpBackgroundStylesDesktop = _generateBackgroundCo.backgroundStylesDesktop,
    wrpHoverBackgroundStylesDesktop = _generateBackgroundCo.hoverBackgroundStylesDesktop,
    wrpBackgroundStylesTab = _generateBackgroundCo.backgroundStylesTab,
    wrpHoverBackgroundStylesTab = _generateBackgroundCo.hoverBackgroundStylesTab,
    wrpBackgroundStylesMobile = _generateBackgroundCo.backgroundStylesMobile,
    wrpHoverBackgroundStylesMobile = _generateBackgroundCo.hoverBackgroundStylesMobile,
    wrpOverlayStylesDesktop = _generateBackgroundCo.overlayStylesDesktop,
    wrpHoverOverlayStylesDesktop = _generateBackgroundCo.hoverOverlayStylesDesktop,
    wrpOverlayStylesTab = _generateBackgroundCo.overlayStylesTab,
    wrpHoverOverlayStylesTab = _generateBackgroundCo.hoverOverlayStylesTab,
    wrpOverlayStylesMobile = _generateBackgroundCo.overlayStylesMobile,
    wrpHoverOverlayStylesMobile = _generateBackgroundCo.hoverOverlayStylesMobile,
    wrpBgTransitionStyle = _generateBackgroundCo.bgTransitionStyle,
    wrpOvlTransitionStyle = _generateBackgroundCo.ovlTransitionStyle;
  var _generateBackgroundCo2 = generateBackgroundControlStyles({
      attributes: attributes,
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_3__.imgTopBgPrefix,
      noOverlay: true,
      noMainBgi: true
      // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    }),
    imgTopBackgroundStyles = _generateBackgroundCo2.backgroundStylesDesktop,
    imgTopHoverBackgroundStyles = _generateBackgroundCo2.hoverBackgroundStylesDesktop,
    imgTopBgTransitionStyle = _generateBackgroundCo2.bgTransitionStyle;
  var _generateBackgroundCo3 = generateBackgroundControlStyles({
      attributes: attributes,
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_3__.socialWrpBg,
      noOverlay: true,
      noMainBgi: true
      // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    }),
    socialWrapBackgroundStyles = _generateBackgroundCo3.backgroundStylesDesktop,
    socialWrapHoverBackgroundStyles = _generateBackgroundCo3.hoverBackgroundStylesDesktop,
    socialWrapTransitionStyle = _generateBackgroundCo3.bgTransitionStyle;

  // styles related to generateBackgroundControlStyles end

  // styles related to generateDimensionsControlStyles start ⬇
  var _generateDimensionsCo = generateDimensionsControlStyles({
      attributes: attributes,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.tmbWrapMarginConst,
      styleFor: "margin"
    }),
    wrpMarginDesktop = _generateDimensionsCo.dimensionStylesDesktop,
    wrpMarginTab = _generateDimensionsCo.dimensionStylesTab,
    wrpMarginMobile = _generateDimensionsCo.dimensionStylesMobile;
  var _generateDimensionsCo2 = generateDimensionsControlStyles({
      attributes: attributes,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.tmbWrapPaddingConst,
      styleFor: "padding"
    }),
    wrpPaddingDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
    wrpPaddingTab = _generateDimensionsCo2.dimensionStylesTab,
    wrpPaddingMobile = _generateDimensionsCo2.dimensionStylesMobile;
  var _generateDimensionsCo3 = generateDimensionsControlStyles({
      attributes: attributes,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.tmbDescsPaddingConst,
      styleFor: "padding"
    }),
    descsPaddingDesktop = _generateDimensionsCo3.dimensionStylesDesktop,
    descsPaddingTab = _generateDimensionsCo3.dimensionStylesTab,
    descsPaddingMobile = _generateDimensionsCo3.dimensionStylesMobile;
  var _generateDimensionsCo4 = generateDimensionsControlStyles({
      attributes: attributes,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.tmbNamePaddingConst,
      styleFor: "padding"
    }),
    namePaddingDesktop = _generateDimensionsCo4.dimensionStylesDesktop,
    namePaddingTab = _generateDimensionsCo4.dimensionStylesTab,
    namePaddingMobile = _generateDimensionsCo4.dimensionStylesMobile;
  var _generateDimensionsCo5 = generateDimensionsControlStyles({
      attributes: attributes,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.tmbJobPaddingConst,
      styleFor: "padding"
    }),
    jobPaddingDesktop = _generateDimensionsCo5.dimensionStylesDesktop,
    jobPaddingTab = _generateDimensionsCo5.dimensionStylesTab,
    jobPaddingMobile = _generateDimensionsCo5.dimensionStylesMobile;
  var _generateDimensionsCo6 = generateDimensionsControlStyles({
      attributes: attributes,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.iconsWrapPadding,
      styleFor: "padding"
    }),
    iconsWrapPaddingDesktop = _generateDimensionsCo6.dimensionStylesDesktop,
    iconsWrapPaddingTab = _generateDimensionsCo6.dimensionStylesTab,
    iconsWrapPaddingMobile = _generateDimensionsCo6.dimensionStylesMobile;
  var _generateDimensionsCo7 = generateDimensionsControlStyles({
      attributes: attributes,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.iconsWrapMargin,
      styleFor: "margin"
    }),
    iconsWrapMarginDesktop = _generateDimensionsCo7.dimensionStylesDesktop,
    iconsWrapMarginTab = _generateDimensionsCo7.dimensionStylesTab,
    iconsWrapMarginMobile = _generateDimensionsCo7.dimensionStylesMobile;
  var _generateDimensionsCo8 = generateDimensionsControlStyles({
      attributes: attributes,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.imageMarginConst,
      styleFor: "margin"
    }),
    imageMarginDesktop = _generateDimensionsCo8.dimensionStylesDesktop,
    imageMarginTab = _generateDimensionsCo8.dimensionStylesTab,
    imageMarginMobile = _generateDimensionsCo8.dimensionStylesMobile;
  var _generateDimensionsCo9 = generateDimensionsControlStyles({
      attributes: attributes,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.imagePaddingConst,
      styleFor: "padding"
    }),
    imagePaddingDesktop = _generateDimensionsCo9.dimensionStylesDesktop,
    imagePaddingTab = _generateDimensionsCo9.dimensionStylesTab,
    imagePaddingMobile = _generateDimensionsCo9.dimensionStylesMobile;
  var _generateDimensionsCo10 = generateDimensionsControlStyles({
      attributes: attributes,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.contentsPad,
      styleFor: "padding"
    }),
    contentsPaddingDesktop = _generateDimensionsCo10.dimensionStylesDesktop,
    contentsPaddingTab = _generateDimensionsCo10.dimensionStylesTab,
    contentsPaddingMobile = _generateDimensionsCo10.dimensionStylesMobile;
  var _generateDimensionsCo11 = generateDimensionsControlStyles({
      attributes: attributes,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__.contentsMargin,
      styleFor: "margin"
    }),
    contentsMarginDesktop = _generateDimensionsCo11.dimensionStylesDesktop,
    contentsMarginTab = _generateDimensionsCo11.dimensionStylesTab,
    contentsMarginMobile = _generateDimensionsCo11.dimensionStylesMobile;

  // styles related to generateDimensionsControlStyles end

  // styles related to generateBorderShadowStyles start ⬇
  var _generateBorderShadow = generateBorderShadowStyles({
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_4__.WrpBdShadowConst,
      attributes: attributes
      // noShadow: true,
      // noBorder: true,
    }),
    wrpBdShdStyesDesktop = _generateBorderShadow.styesDesktop,
    wrpBdShdStyesTab = _generateBorderShadow.styesTab,
    wrpBdShdStyesMobile = _generateBorderShadow.styesMobile,
    wrpBdShdStylesHoverDesktop = _generateBorderShadow.stylesHoverDesktop,
    wrpBdShdStylesHoverTab = _generateBorderShadow.stylesHoverTab,
    wrpBdShdStylesHoverMobile = _generateBorderShadow.stylesHoverMobile,
    wrpBdShdTransitionStyle = _generateBorderShadow.transitionStyle;
  var _generateBorderShadow2 = generateBorderShadowStyles({
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_4__.prefixSocialBdShadow,
      attributes: attributes,
      noShadow: true
      // noBorder: true,
    }),
    socialBorderDesktop = _generateBorderShadow2.styesDesktop,
    socialBorderTab = _generateBorderShadow2.styesTab,
    socialBorderMobile = _generateBorderShadow2.styesMobile,
    socialBordersHoverDesktop = _generateBorderShadow2.stylesHoverDesktop,
    socialBordersHoverTab = _generateBorderShadow2.stylesHoverTab,
    socialBordersHoverMobile = _generateBorderShadow2.stylesHoverMobile,
    socialBorderTransitionStyle = _generateBorderShadow2.transitionStyle;
  var _generateBorderShadow3 = generateBorderShadowStyles({
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_4__.prefixImgBd,
      attributes: attributes
      // noShadow: true,
      // noBorder: true,
    }),
    imageBdShdStyleDesktop = _generateBorderShadow3.styesDesktop,
    imageBdShdStyleTab = _generateBorderShadow3.styesTab,
    imageBdShdStyleMobile = _generateBorderShadow3.styesMobile,
    imageBdShdStylesHoverDesktop = _generateBorderShadow3.stylesHoverDesktop,
    imageBdShdStylesHoverTab = _generateBorderShadow3.stylesHoverTab,
    imageBdShdStylesHoverMobile = _generateBorderShadow3.stylesHoverMobile,
    imageBdShdTransitionStyle = _generateBorderShadow3.transitionStyle;
  var _generateBorderShadow4 = generateBorderShadowStyles({
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_4__.ovlBdPrefix,
      attributes: attributes
      // noShadow: true,
      // noBorder: true,
    }),
    ovlBdShdStyleDesktop = _generateBorderShadow4.styesDesktop,
    ovlBdShdStyleTab = _generateBorderShadow4.styesTab,
    ovlBdShdStyleMobile = _generateBorderShadow4.styesMobile;

  // styles related to generateBorderShadowStyles end

  var socialStyles = socialDetails.reduce(function (acc, curr, i) {
    return "\n\t\t ".concat(acc, "\n\t\t .").concat(blockId, ".eb-team-wrapper ul.socials li:nth-child(").concat(i + 1, ") a {\n\t\t\t background-color: ").concat(curr.bgColor || "#000", ";\n\t\t\t color: ").concat(curr.color || "#fff", ";\n\t\t }\n\t\t ");
  }, "");
  var wrapperStylesDesktop = "\n\t\t div.eb-team-wrapper h3,\n\t\t div.eb-team-wrapper h4,\n\t\t div.eb-team-wrapper p,\n\t\t div.eb-team-wrapper ul {\n\t\t\t margin: 0;\n\t\t\t padding:0;\n\t\t }\n\n\t\t .social-icon {\n\t\t\t font-style: normal;\n\t\t }\n\n\n\t\t .".concat(blockId, ".eb-team-wrapper > *{\n\t\t\t position:relative;\n\t\t }\n\n\t\t .").concat(blockId, ".eb-team-wrapper {\n\t\t\t position:relative;\n\t\t\t overflow:hidden;\n\t\t\t margin:auto;\n\t\t\t ").concat(wrapWidthDesktop, "\n\t\t\t ").concat(wrpBackgroundStylesDesktop, "\n\t\t\t ").concat(wrpMarginDesktop, "\n\t\t\t ").concat(wrpPaddingDesktop, "\n\t\t\t ").concat(wrpBdShdStyesDesktop, "\n\t\t\t transition: ").concat(wrpBgTransitionStyle, ", ").concat(wrpBdShdTransitionStyle, ";\n\t\t }\n\n\n\t\t ").concat(preset === "preset3" ? "\n\t\t\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-image{\n\t\t\t\t\t position: relative;\n\t\t\t\t }\n\t\t\t\t ") : "", "\n\t\t ").concat(preset === "preset3" && isContentOverlay ? "\n            .".concat(blockId, ".eb-team-wrapper.content-overlay .eb-team-member-contents {\n                justify-content: ").concat(conVtAlign || "center", ";\n                ").concat(contentsPaddingDesktop, "\n                ").concat(contentsMarginDesktop, "\n                ").concat(ovlBdShdStyleDesktop, "\n                ").concat(isConBgGradient ? "background-image: ".concat(conBgGradient, ";") : "background-color: ".concat(conBgColor, ";"), "\n            }\n\t\t\t\t ") : "", "\n\n\t\t ").concat(preset === "preset2" ? "\n\t\t\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-contents{\n\t\t\t\t\t ").concat(isConBgGradient ? "background-image: ".concat(conBgGradient, ";") : "background-color: ".concat(conBgColor, ";"), "\n\t\t\t\t\t height: 50%;\n\t\t\t\t\t display: flex;\n\t\t\t\t\t flex-direction: column;\n\t\t\t\t\t justify-content: center;\n\t\t\t\t }\n\n\t\t\t\t .").concat(blockId, ".eb-team-wrapper div.eb-team-member-contents .eb-team-member-job-title {\n\t\t\t\t\t display: block;\n\t\t\t\t }\n\n\t\t\t\t .").concat(blockId, ".eb-team-wrapper div.eb-team-member-contents ul.socials {\n\t\t\t\t\t display: flex;\n\t\t\t\t }\n\n\t\t\t\t .").concat(blockId, ".eb-team-wrapper:hover .eb-team-member-contents{\n\t\t\t\t\t top: 50%;\n\t\t\t\t }\n\n\t\t\t\t ") : "", "\n\n         ").concat(preset === "new-preset1" || preset === "new-preset2" || preset === "new-preset3" ? "\n                .".concat(blockId, ".eb-team-wrapper .eb-team-member-contents-inner{\n                    ").concat(isConBgGradient ? "background-image: ".concat(conBgGradient, ";") : "background-color: ".concat(conBgColor, ";"), "\n                    ").concat(contentsPaddingDesktop, "\n\t\t\t        ").concat(contentsMarginDesktop, "\n\t\t\t        ").concat(ovlBdShdStyleDesktop, "\n                }\n\n                .").concat(blockId, ".eb-team-wrapper .eb-team-member-job-title {\n                    ").concat(jobTypoStylesDesktop, "\n                    ").concat(jobPaddingDesktop, "\n                    color: ").concat(jobColor, ";\n                    ").concat(preset === "preset2" ? "display:none;" : "", "\n                }\n\n                .").concat(blockId, ".eb-team-wrapper div.eb-team-member-contents .eb-team-member-job-title {\n                    display: block;\n                }\n\n                .").concat(blockId, ".eb-team-wrapper div.eb-team-member-contents ul.socials {\n                    display: flex;\n                }\n\n                .").concat(blockId, ".eb-team-wrapper:hover .eb-team-member-contents{\n                    top: 50%;\n                }\n\n                ") : "", "\n\n\n\t\t ").concat(preset === "preset5" ? "\n\t\t\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-inner {\n\t\t\t\t\t display: flex;\n\t\t\t\t\t justify-content: space-between;\n\t\t\t\t\t flex-direction: ").concat(isP9reverse ? "row-reverse" : "row", ";\n\t\t\t\t\t align-items: ").concat(imgCnVtAlign || "flex-start", ";\n\t\t\t\t\t ").concat(p9flexGapDesktop, "\n\t\t\t\t }\n\n\t\t\t\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-image {\n\t\t\t\t\t ").concat(imgWidthDesktop, "\n\t\t\t\t }\n\n\t\t\t\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-contents {\n\t\t\t\t\t flex:1;\n\t\t\t\t }\n\t\t\t\t ") : "", "\n\n\n\n\t\t .").concat(blockId, ".eb-team-wrapper:hover{\n\t\t\t ").concat(preset === "preset2" ? "overflow:hidden;" : "", "\n\n\t\t\t ").concat(wrpHoverBackgroundStylesDesktop, "\n\t\t\t ").concat(wrpBdShdStylesHoverDesktop, "\n\t\t }\n\n\t\t .").concat(blockId, ".eb-team-wrapper:before{\n\t\t\t ").concat(wrpOverlayStylesDesktop, "\n\t\t\t transition: ").concat(wrpOvlTransitionStyle, ";\n\n\t\t }\n\n\t\t .").concat(blockId, ".eb-team-wrapper:hover:before{\n\t\t\t ").concat(wrpHoverOverlayStylesDesktop, "\n\n\t\t }\n\n         .").concat(blockId, ".eb-team-wrapper .eb-team-member-image {\n            ").concat(imageAlign === "left" ? "text-align: left;" : imageAlign === "right" ? "text-align: right;" : "text-align: center", "\n         }\n\n\t\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-image img {\n\t\t\t max-width: 100%;\n\t\t\t object-fit: cover;\n\t\t\t display: inline-block;\n\t\t\t ").concat(preset === "preset5" ? "width:100%;" : imgWidthDesktop, "\n\t\t\t ").concat(imageBdShdStyleDesktop, "\n\t\t\t ").concat(imageMarginDesktop, "\n\t\t\t ").concat(imagePaddingDesktop, "\n\t\t\t ").concat(isImgHeightAuto ? "height:auto;" : imgHeightDesktop, "\n\t\t\t ").concat(preset === "preset6" ? "clipPath: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);" : "", "\n\t\t }\n\n\n\t\t ").concat(imgBeforeEl ? "\n\t\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-image:before {\n\t\t\t\t content: \"\";\n\t\t\t\t display: block;\n\t\t\t\t ").concat(imgTopBgHeightDesktop, "\n\t\t\t\t ").concat(imgTopBackgroundStyles, "\n\t\t\t\t transition: ").concat(imgTopBgTransitionStyle, ";\n\n\t\t\t }\n\n\t\t\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-image:hover:before{\n\t\t\t\t ").concat(imgTopHoverBackgroundStyles, "\n\t\t\t }\n\t\t\t ") : "", "\n\n\n\n\t\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-image:hover > img {\n\t\t\t ").concat(imageBdShdStylesHoverDesktop, "\n\t\t\t transition: ").concat(imageBdShdTransitionStyle, ";\n\t\t }\n\n\t\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-contents {\n\t\t\t text-align: ").concat(contentsAlign, ";\n\t\t\t box-sizing: border-box;\n\t\t\t ").concat(preset === "preset2" ? "\n\t\t\t\t\t position: absolute;\n\t\t\t\t\t left: 0;\n\t\t\t\t\t right: 0;\n\t\t\t\t\t top: 100%;\n\t\t\t\t\t transition: 0.5s;\n\t\t\t\t\t " : "", "\n\t\t }\n\n\t\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-contents .eb-team-member-name {\n\t\t\t ").concat(nameTypoStylesDesktop, "\n\t\t\t ").concat(namePaddingDesktop, "\n\t\t\t color: ").concat(nameColor, ";\n\t\t }\n\n\t\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-contents .eb-team-member-job-title {\n\t\t\t ").concat(jobTypoStylesDesktop, "\n\t\t\t ").concat(jobPaddingDesktop, "\n\t\t\t color: ").concat(jobColor, ";\n\t\t\t ").concat(preset === "preset2" ? "display:none;" : "", "\n\t\t }\n\n\t\t ").concat(showDescs ? "\n\t\t\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-contents .eb-team-member-description {\n\t\t\t\t\t color: ").concat(descsColor, ";\n\t\t\t\t\t ").concat(descsPaddingDesktop, "\n\t\t\t\t\t ").concat(descsTypoStylesDesktop, "\n\t\t\t\t }\n\t\t\t\t ") : "", "\n\n ").concat(showCSeparator ? "\n\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-contents .eb-team-member-content-separator {\n\t\t\t border: none;\n\t\t\t margin: auto;\n\t\t\t border-bottom: 1px ").concat(cSepType, " ").concat(cSepColor, ";\n\t\t\t ").concat(contentSepWidthDesktop, "\n\t\t\t ").concat(contentSepHeightDesktop, "\n\t\t\t ").concat(cSepAlign === "left" ? "margin-left:0;" : cSepAlign === "right" ? "margin-right:0;" : "", "\n\t\t }\n\t\t ") : "", "\n\n ").concat(showSocials && showSSeparator ? "\n\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-social-separator {\n\t\t\t border: none;\n\t\t\t margin: auto;\n\t\t\t border-bottom: 1px ").concat(sSepType, " ").concat(sSepColor, ";\n\t\t\t ").concat(socialSepWidthDesktop, "\n\t\t\t ").concat(socialSepHeightDesktop, "\n\t\t\t ").concat(sSepAlign === "left" ? "margin-left:0;" : sSepAlign === "right" ? "margin-right:0;" : "", "\n\t\t }\n\t\t ") : "", "\n\n ").concat(preset === "preset4" ? "\n\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-inner {\n\t\t\t position: relative;\n\t\t }\n\n\t\t .").concat(blockId, ".eb-team-wrapper:hover .eb-team-member-contents {\n\t\t\t opacity: 1;\n\t\t }\n\n\t\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-contents {\n\t\t\t transition: 0.5s;\n\t\t\t opacity: 0;\n\t\t\t position: absolute;\n\t\t\t top: 0;\n\t\t\t left: 0;\n\t\t\t right: 0;\n\t\t\t bottom: 0;\n\t\t\t display: flex;\n\t\t\t flex-direction: column;\n\t\t\t justify-content: ").concat(conVtAlign || "center", ";\n\t\t\t ").concat(contentsPaddingDesktop, "\n\t\t\t ").concat(contentsMarginDesktop, "\n\t\t\t ").concat(ovlBdShdStyleDesktop, "\n\t\t\t ").concat(isConBgGradient ? "background-image: ".concat(conBgGradient, ";") : "background-color: ".concat(conBgColor, ";"), "\n\t\t }\n\n\t\t ") : "", "\n\n ").concat(showSocials ? "\n\t\t ".concat(socialStyles, "\n\n\t\t .").concat(blockId, ".eb-team-wrapper ul.socials {\n\t\t\t list-style: none;\n\t\t\t flex-wrap: wrap;\n\t\t\t align-items: ").concat(iconsVAlign || "center", ";\n\t\t\t justify-content: ").concat(iconsJustify, ";\n\t\t\t ").concat(iconSpaceDesktop, "\n\t\t\t ").concat(iconRowGapDesktop, "\n\t\t\t ").concat(socialWrapBackgroundStyles, "\n\t\t\t transition: ").concat(socialWrapTransitionStyle, ", opacity .5s;\n\t\t\t ").concat(preset === "preset2" ? "display:none;" : "display: flex;", "\n\t\t\t ").concat(preset === "preset3" && !isContentOverlay ? "\n\t\t\t\t opacity:0;\n\t\t\t\t position: absolute;\n\t\t\t\t top: 0;\n\t\t\t\t bottom: 0;\n\t\t\t\t left:0;\n\t\t\t\t right:0;\n\t\t\t\t box-sizing:border-box;\n\t\t\t\t ".concat(contentsPaddingDesktop, "\n\t\t\t\t ").concat(contentsMarginDesktop, "\n\t\t\t\t ").concat(ovlBdShdStyleDesktop, "\n\t\t\t\t ").concat(isConBgGradient ? "background-image: ".concat(conBgGradient, ";") : "background-color: ".concat(conBgColor, ";"), "\n\t\t\t ") : "\n\t\t\t\t\t ".concat(iconsWrapMarginDesktop, "\n\t\t\t\t\t ").concat(iconsWrapPaddingDesktop, "\n\t\t\t\t\t "), "\n\t\t }\n\n\t\t ").concat(preset === "preset3" ? "\n\t\t\t\t .".concat(blockId, ".eb-team-wrapper:hover ul.socials {\n\t\t\t\t\t opacity: 1;\n\t\t\t\t }\n\t\t\t\t ") : "", "\n\n\t\t .").concat(blockId, ".eb-team-wrapper ul.socials:hover {\n\t\t\t ").concat(socialWrapHoverBackgroundStyles, "\n\t\t }\n\n\t ").concat(isIconsDevider ? "\n\t\t .".concat(blockId, ".eb-team-wrapper ul.socials li{\n\t\t\t position:relative;\n\t\t }\n\n\t\t .").concat(blockId, ".eb-team-wrapper ul.socials li + li:before {\n\t\t\t content: \"\";\n\t\t\t background-color: ").concat(icnsDevideColor, ";\n\t\t\t height: ").concat(icnSepH, "px;\n\t\t\t width: ").concat(icnSepW, "px;\n\t\t\t position: absolute;\n\t\t\t top: 2px;\n\t\t\t right: 100%;\n\t\t\t ").concat(sSepPosRightDesktop, "\n\t\t }\n\t\t ") : "", "\n\n\t\t .").concat(blockId, ".eb-team-wrapper ul.socials li a {\n\t\t\t box-sizing:content-box;\n\t\t\t text-decoration: none;\n\t\t\t cursor: pointer;\n\t\t\t display: flex;\n\t\t\t justify-content: center;\n\t\t\t align-items: center;\n\t\t\t height: 0;\n\t\t\t width: 0;\n             line-height: 1em;\n\t\t\t ").concat(iconSizeDesktop, "\n\t\t\t ").concat(iconPaddingDesktop, "\n\t\t\t ").concat(socialBorderDesktop, "\n\t\t\t transition: color 0.5s, background-color 0.5s, ").concat(socialBorderTransitionStyle, ";\n\t\t }\n\n\t\t .").concat(blockId, ".eb-team-wrapper ul.socials li:hover a {\n\t\t\t background-color:").concat(hvIcnBgc, ";\n\t\t\t color:").concat(hvIcnColor, ";\n\t\t\t ").concat(socialBordersHoverDesktop, "\n\t\t }\n\n         ").concat(icnEffect ? ".".concat(blockId, ".eb-team-wrapper ul.socials li a:before {\n                background-color:").concat(hvIcnBgc, ";\n\t\t\t    color:").concat(hvIcnColor, ";\n\t\t\t    ").concat(socialBordersHoverDesktop, "\n\t\t\t}\n\t\t\t") : "", "\n\n\t\t ") : "", "\n\n\n\n\t ");
  var wrapperStylesTab = "\n\t .".concat(blockId, ".eb-team-wrapper {\n\t\t ").concat(wrapWidthTab, "\n\t\t ").concat(wrpBackgroundStylesTab, "\n\t\t ").concat(wrpMarginTab, "\n\t\t ").concat(wrpPaddingTab, "\n\t\t ").concat(wrpBdShdStyesTab, "\n\t }\n\n\t .").concat(blockId, ".eb-team-wrapper:hover{\n\t\t ").concat(wrpHoverBackgroundStylesTab, "\n\t\t ").concat(wrpBdShdStylesHoverTab, "\n\n\t }\n\n\t .").concat(blockId, ".eb-team-wrapper:before{\n\t\t ").concat(wrpOverlayStylesTab, "\n\n\t }\n\n\t .").concat(blockId, ".eb-team-wrapper:hover:before{\n\t\t ").concat(wrpHoverOverlayStylesTab, "\n\n\t }\n\n\n\t ").concat(preset === "preset5" ? "\n\t\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-image {\n\t\t\t\t ").concat(imgWidthTab, "\n\t\t\t }\n\n\t\t\t .").concat(blockId, ".eb-team-wrapper .eb-team-inner {\n\t\t\t\t ").concat(p9flexGapTab, "\n\t\t\t }\n\n\t\t\t ") : "", "\n\n\n\t ").concat(imgBeforeEl ? "\n\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-image:before {\n\t\t\t ").concat(imgTopBgHeightTab, "\n\t\t }\n\t\t ") : "", "\n\n\n\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-image > img {\n\t\t ").concat(imageBdShdStyleTab, "\n\t\t ").concat(imageMarginTab, "\n\t\t ").concat(imagePaddingTab, "\n\t\t ").concat(preset === "preset5" ? "" : imgWidthTab, "\n\t\t ").concat(isImgHeightAuto ? "" : imgHeightTab, "\n\t }\n\n\n\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-image:hover > img {\n\t\t ").concat(imageBdShdStylesHoverTab, "\n\n\t }\n\n\n\t ").concat(showDescs ? "\n\t\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-contents .eb-team-member-description {\n\t\t\t\t ").concat(descsTypoStylesTab, "\n\t\t\t\t ").concat(descsPaddingTab, "\n\t\t\t }\n\t\t\t ") : "", "\n\n\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-contents .eb-team-member-name {\n\t\t ").concat(nameTypoStylesTab, "\n\t\t ").concat(namePaddingTab, "\n\t }\n\n\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-contents .eb-team-member-job-title {\n\t\t ").concat(jobTypoStylesTab, "\n\t\t ").concat(jobPaddingTab, "\n\t }\n\n\n\n ").concat(showCSeparator ? "\n\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-contents .eb-team-member-content-separator {\n\t\t\t ").concat(contentSepWidthTab, "\n\t\t\t ").concat(contentSepHeightTab, "\n\t\t }\n\t\t ") : "", "\n\n ").concat(showSocials && showSSeparator ? "\n\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-social-separator {\n\t\t\t ").concat(socialSepWidthTab, "\n\t\t\t ").concat(socialSepHeightTab, "\n\t\t }\n\t\t ") : "", "\n\n ").concat(preset === "preset4" ? "\n\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-contents {\n\t\t\t ").concat(contentsPaddingTab, "\n\t\t\t ").concat(contentsMarginTab, "\n\t\t\t ").concat(ovlBdShdStyleTab, "\n\t\t }\n\t\t ") : "", "\n\n ").concat(showSocials ? "\n\t\t ".concat(socialStyles, "\n\n\t\t .").concat(blockId, ".eb-team-wrapper ul.socials {\n\t\t\t ").concat(iconsWrapMarginTab, "\n\t\t\t ").concat(iconsWrapPaddingTab, "\n\t\t\t ").concat(iconSpaceTab, "\n\t\t\t ").concat(iconRowGapTab, "\n\t\t\t ").concat(preset === "preset3" ? "\n\t\t\t\t\t\t ".concat(contentsPaddingTab, "\n\t\t\t\t\t\t ").concat(contentsMarginTab, "\n\t\t\t\t\t\t ").concat(ovlBdShdStyleTab, "\n\t\t\t\t\t ") : "", "\n\t\t }\n\n\n\t ").concat(isIconsDevider ? "\n\t\t\t .".concat(blockId, ".eb-team-wrapper ul.socials li + li:before {\n\t\t\t\t ").concat(sSepPosRightTab, "\n\t\t\t }\n\t\t\t ") : "", "\n\n\t\t .").concat(blockId, ".eb-team-wrapper ul.socials li a {\n\t\t\t ").concat(iconSizeTab, "\n\t\t\t ").concat(iconPaddingTab, "\n\t\t\t ").concat(socialBorderTab, "\n\t\t }\n\n\t\t .").concat(blockId, ".eb-team-wrapper ul.socials li:hover a {\n\t\t\t ").concat(socialBordersHoverTab, "\n\t\t }\n\t\t ") : "", "\n\n        ").concat(icnEffect ? ".".concat(blockId, ".eb-team-wrapper ul.socials li a:before {\n            ").concat(socialBordersHoverTab, "\n        }\n        ") : "", "\n\n\n\t ");
  var wrapperStylesMobile = "\n\t .".concat(blockId, ".eb-team-wrapper {\n\t\t ").concat(wrapWidthMobile, "\n\t\t ").concat(wrpBackgroundStylesMobile, "\n\t\t ").concat(wrpMarginMobile, "\n\t\t ").concat(wrpPaddingMobile, "\n\t\t ").concat(wrpBdShdStyesMobile, "\n\t }\n\n\t .").concat(blockId, ".eb-team-wrapper:hover{\n\t\t ").concat(wrpHoverBackgroundStylesMobile, "\n\t\t ").concat(wrpBdShdStylesHoverMobile, "\n\n\t }\n\n\t .").concat(blockId, ".eb-team-wrapper:before{\n\t\t ").concat(wrpOverlayStylesMobile, "\n\n\t }\n\n\t .").concat(blockId, ".eb-team-wrapper:hover:before{\n\t\t ").concat(wrpHoverOverlayStylesMobile, "\n\n\t }\n\n\t ").concat(preset === "preset5" ? "\n\t\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-image {\n\t\t\t\t ").concat(imgWidthMobile, "\n\t\t\t }\n\n\t\t\t .").concat(blockId, ".eb-team-wrapper .eb-team-inner {\n\t\t\t\t ").concat(p9flexGapMobile, "\n\t\t\t }\n\t\t\t ") : "", "\n\n\n\t ").concat(imgBeforeEl ? "\n\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-image:before {\n\t\t\t ").concat(imgTopBgHeightMobile, "\n\t\t }\n\t\t ") : "", "\n\n\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-image > img {\n\t\t ").concat(preset === "preset5" ? "" : imgWidthMobile, "\n\t\t ").concat(imageBdShdStyleMobile, "\n\t\t ").concat(imageMarginMobile, "\n\t\t ").concat(imagePaddingMobile, "\n\n\t\t ").concat(isImgHeightAuto ? "" : imgHeightMobile, "\n\t }\n\n\n\n\n\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-image:hover > img {\n\t\t ").concat(imageBdShdStylesHoverMobile, "\n\t }\n\n\t ").concat(showDescs ? "\n\t\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-contents .eb-team-member-description {\n\t\t\t\t ").concat(descsTypoStylesMobile, "\n\t\t\t\t ").concat(descsPaddingMobile, "\n\t\t\t }\n\t\t\t ") : "", "\n\n\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-contents .eb-team-member-name {\n\t\t ").concat(nameTypoStylesMobile, "\n\t\t ").concat(namePaddingMobile, "\n\t }\n\n\t .").concat(blockId, ".eb-team-wrapper .eb-team-member-contents .eb-team-member-job-title {\n\t\t ").concat(jobTypoStylesMobile, "\n\t\t ").concat(jobPaddingMobile, "\n\t }\n\n\n\n\t ").concat(showCSeparator ? "\n\t\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-contents .eb-team-member-content-separator {\n\t\t\t\t ").concat(contentSepWidthMobile, "\n\t\t\t\t ").concat(contentSepHeightMobile, "\n\t\t\t }\n\t\t\t ") : "", "\n\n\t ").concat(showSocials && showSSeparator ? "\n\t\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-social-separator {\n\t\t\t\t ").concat(socialSepWidthMobile, "\n\t\t\t\t ").concat(socialSepHeightMobile, "\n\t\t\t }\n\t\t\t ") : "", "\n\n\n\t ").concat(preset === "preset4" ? "\n\t\t\t .".concat(blockId, ".eb-team-wrapper .eb-team-member-contents {\n\t\t\t\t ").concat(contentsPaddingMobile, "\n\t\t\t\t ").concat(contentsMarginMobile, "\n\t\t\t\t ").concat(ovlBdShdStyleMobile, "\n\t\t\t }\n\t\t\t ") : "", "\n\n\t ").concat(showSocials ? "\n\t\t\t ".concat(socialStyles, "\n\n\t\t\t .").concat(blockId, ".eb-team-wrapper ul.socials {\n\t\t\t\t ").concat(iconSpaceMobile, "\n\t\t\t\t ").concat(iconRowGapMobile, "\n\t\t\t\t ").concat(iconsWrapPaddingMobile, "\n\t\t\t\t ").concat(iconsWrapMarginMobile, "\n\t\t\t\t ").concat(preset === "preset3" ? "\n\t\t\t\t\t\t\t ".concat(contentsPaddingMobile, "\n\t\t\t\t\t\t\t ").concat(contentsMarginMobile, "\n\t\t\t\t\t\t\t ").concat(ovlBdShdStyleMobile, "\n\t\t\t\t\t\t ") : "", "\n\t\t\t }\n\n\t\t\t ").concat(isIconsDevider ? "\n\t\t\t\t\t .".concat(blockId, ".eb-team-wrapper ul.socials li + li:before {\n\t\t\t\t\t\t ").concat(sSepPosRightMobile, "\n\t\t\t\t\t }\n\t\t\t\t\t ") : "", "\n\n\t\t\t .").concat(blockId, ".eb-team-wrapper ul.socials li a {\n\t\t\t\t ").concat(iconSizeMobile, "\n\t\t\t\t ").concat(iconPaddingMobile, "\n\t\t\t\t ").concat(socialBorderMobile, "\n\t\t\t }\n\n\n\t\t\t .").concat(blockId, ".eb-team-wrapper ul.socials li:hover a {\n\t\t\t\t ").concat(socialBordersHoverMobile, "\n\t\t\t }\n\n             ").concat(icnEffect ? ".".concat(blockId, ".eb-team-wrapper ul.socials li a:before {\n                ").concat(socialBordersHoverMobile, "\n            }\n            ") : "", "\n\n\t\t\t ") : "", "\n\n\n\t ");

  // all css styles for large screen width (desktop/laptop) in strings ⬇
  var desktopAllStyles = softMinifyCssStrings("\n\t\t ".concat(wrapperStylesDesktop, "\n\n\n\t "));

  // all css styles for Tab in strings ⬇
  var tabAllStyles = softMinifyCssStrings("\n\t\t ".concat(wrapperStylesTab, "\n\n\n\t "));

  // all css styles for Mobile in strings ⬇
  var mobileAllStyles = softMinifyCssStrings("\n\t\t ".concat(wrapperStylesMobile, "\n\n\n\t "));

  //
  // styling codes End here
  //

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyleComponent, {
    attributes: attributes,
    setAttributes: setAttributes,
    desktopAllStyles: desktopAllStyles,
    tabAllStyles: tabAllStyles,
    mobileAllStyles: mobileAllStyles,
    blockName: blockName
  }));
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"team-member-block/team-member-block","title":"Team Member","category":"widgets","description":"Present your team members beautifully & gain instant credibility","textdomain":"team-member-block","editorScript":"create-block-team-member-block-editor","supports":{"align":["wide","full"]}}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dist": 0,
/******/ 			"style-dist": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkteam_member"] = globalThis["webpackChunkteam_member"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-dist"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map