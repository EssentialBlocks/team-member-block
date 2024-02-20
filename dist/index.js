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


// import Inspector from "./inspector";
// import SocialLinks from "./components/social-links";
// import Style from "./style";

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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
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