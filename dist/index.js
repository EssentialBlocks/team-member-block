/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





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
  // member description
  description: {
    type: "string",
    "default": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  //
  imageUrl: {
    type: "string",
    source: "attribute",
    selector: ".avatar",
    attribute: "src",
    // default: "https://source.unsplash.com/5vg_SarQimA/150x150",
    // default: "../wp-content/plugins/essential-blocks/assets/images/person.jpeg",
    "default": "../wp-content/plugins/team-member-block/assets/images/user.jpg" // default:
    // 	"https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTE5NzI3NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=150",
    // default:			"https://assets.wpdeveloper.net/wp-content/uploads/2019/04/wpdev-marketplace-for-users.svg",

  },
  //
  imageId: {
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
    type: "string"
  },
  nameColor: {
    type: "string"
  },
  jobColor: {
    type: "string"
  },
  // social profiles
  showSocials: {
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
    "default": "linear-gradient(45deg, #7967ff, rgba(194,119,242,0.8))"
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
  // defaultRange: 10,
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
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)" // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.socialWrpBg, {
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
  // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true',
  noMainBgi: true,
  noOverlay: true
})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.imgTopBgPrefix, {
  defaultFillColor: "#84AFFF",
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)" // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

})), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.WrpBdShadowConst, {// noShadow: true,
  // noBorder: true,
})), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.prefixImgBd, {// noShadow: true,
  // noBorder: true,
})), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.prefixSocialBdShadow, {
  noShadow: true,
  bdrDefaults: {
    top: 1,
    bottom: 1,
    right: 1,
    left: 1
  } // noBorder: true,

})), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.ovlBdPrefix, {
  noShadow: true,
  noBdrHover: true // bdrDefaults: {
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
})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.tmbJobPaddingConst, {// top: 10,
  // bottom: 20,
  // isLinked: false,
})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.iconsWrapPadding, {
  top: 10,
  // bottom: 20,
  isLinked: false
})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.iconsWrapMargin, {// top: 10,
  // bottom: 20,
  // isLinked: false,
}));

/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/components/social-links.js":
/*!****************************************!*\
  !*** ./src/components/social-links.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SocialLinks; }
/* harmony export */ });
function SocialLinks(_ref) {
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

/***/ "./src/constants/backgroundsConstants.js":
/*!***********************************************!*\
  !*** ./src/constants/backgroundsConstants.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrpBgConst": function() { return /* binding */ WrpBgConst; },
/* harmony export */   "imgTopBgPrefix": function() { return /* binding */ imgTopBgPrefix; },
/* harmony export */   "socialWrpBg": function() { return /* binding */ socialWrpBg; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrpBdShadowConst": function() { return /* binding */ WrpBdShadowConst; },
/* harmony export */   "prefixSocialBdShadow": function() { return /* binding */ prefixSocialBdShadow; },
/* harmony export */   "prefixImgBd": function() { return /* binding */ prefixImgBd; },
/* harmony export */   "ovlBdPrefix": function() { return /* binding */ ovlBdPrefix; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tmbWrapMarginConst": function() { return /* binding */ tmbWrapMarginConst; },
/* harmony export */   "tmbWrapPaddingConst": function() { return /* binding */ tmbWrapPaddingConst; },
/* harmony export */   "tmbDescsPaddingConst": function() { return /* binding */ tmbDescsPaddingConst; },
/* harmony export */   "tmbNamePaddingConst": function() { return /* binding */ tmbNamePaddingConst; },
/* harmony export */   "tmbJobPaddingConst": function() { return /* binding */ tmbJobPaddingConst; },
/* harmony export */   "iconsWrapPadding": function() { return /* binding */ iconsWrapPadding; },
/* harmony export */   "iconsWrapMargin": function() { return /* binding */ iconsWrapMargin; },
/* harmony export */   "imageMarginConst": function() { return /* binding */ imageMarginConst; },
/* harmony export */   "imagePaddingConst": function() { return /* binding */ imagePaddingConst; },
/* harmony export */   "contentsPad": function() { return /* binding */ contentsPad; },
/* harmony export */   "contentsMargin": function() { return /* binding */ contentsMargin; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sizeUnitTypes": function() { return /* binding */ sizeUnitTypes; },
/* harmony export */   "IconsHzAligns": function() { return /* binding */ IconsHzAligns; },
/* harmony export */   "ContentsVerticalAligns": function() { return /* binding */ ContentsVerticalAligns; },
/* harmony export */   "STYLE_PRESETS": function() { return /* binding */ STYLE_PRESETS; },
/* harmony export */   "separatorTypes": function() { return /* binding */ separatorTypes; },
/* harmony export */   "HOVER_EFFECT": function() { return /* binding */ HOVER_EFFECT; }
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
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 2 (hover overlay)"),
  value: "preset2"
}, // this was preset 3
{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 3  (hover overlay)"),
  value: "preset3"
}, // this was preset 5
{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 4 (hover overlay)"),
  value: "preset4"
}, // this was preset 8
{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 5", "essential-blocks"),
  value: "preset5"
}, // this was preset 9
{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 6", "essential-blocks"),
  value: "preset6"
} // this was preset 15
];
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapperWidth": function() { return /* binding */ wrapperWidth; },
/* harmony export */   "imageWidth": function() { return /* binding */ imageWidth; },
/* harmony export */   "imageHeight": function() { return /* binding */ imageHeight; },
/* harmony export */   "rangeIconSize": function() { return /* binding */ rangeIconSize; },
/* harmony export */   "rangeIconPadding": function() { return /* binding */ rangeIconPadding; },
/* harmony export */   "rangeIconDistance": function() { return /* binding */ rangeIconDistance; },
/* harmony export */   "rangeIconRowGap": function() { return /* binding */ rangeIconRowGap; },
/* harmony export */   "imgTopBgHeight": function() { return /* binding */ imgTopBgHeight; },
/* harmony export */   "cSepWPrefix": function() { return /* binding */ cSepWPrefix; },
/* harmony export */   "sSepWPrefix": function() { return /* binding */ sSepWPrefix; },
/* harmony export */   "cSepHPrefix": function() { return /* binding */ cSepHPrefix; },
/* harmony export */   "sSepHPrefix": function() { return /* binding */ sSepHPrefix; },
/* harmony export */   "sclDeviderPosRight": function() { return /* binding */ sclDeviderPosRight; },
/* harmony export */   "p9LGap": function() { return /* binding */ p9LGap; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typoPrefix_descs": function() { return /* binding */ typoPrefix_descs; },
/* harmony export */   "typoPrefix_name": function() { return /* binding */ typoPrefix_name; },
/* harmony export */   "typoPrefix_job": function() { return /* binding */ typoPrefix_job; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var typoPrefix_descs = "dscs_";
var typoPrefix_name = "name_";
var typoPrefix_job = "job_";

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
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
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */
// import {
// 	softMinifyCssStrings,
// 	generateBackgroundControlStyles,
// 	generateDimensionsControlStyles,
// 	generateTypographyStyles,
// 	generateBorderShadowStyles,
// 	generateResponsiveRangeStyles,
// 	mimmikCssForPreviewBtnClick,
// 	duplicateBlockIdFix,
// } from "../../../util/helpers";

var _window$EBTeamMemberC = window.EBTeamMemberControls,
    softMinifyCssStrings = _window$EBTeamMemberC.softMinifyCssStrings,
    generateBackgroundControlStyles = _window$EBTeamMemberC.generateBackgroundControlStyles,
    generateDimensionsControlStyles = _window$EBTeamMemberC.generateDimensionsControlStyles,
    generateTypographyStyles = _window$EBTeamMemberC.generateTypographyStyles,
    generateBorderShadowStyles = _window$EBTeamMemberC.generateBorderShadowStyles,
    generateResponsiveRangeStyles = _window$EBTeamMemberC.generateResponsiveRangeStyles,
    duplicateBlockIdFix = _window$EBTeamMemberC.duplicateBlockIdFix;
var editorStoreForGettingPreivew = eb_style_handler.editor_type === "edit-site" ? "core/edit-site" : "core/edit-post";








function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected,
      clientId = _ref.clientId,
      className = _ref.className;
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
      icnEffect = attributes.icnEffect; //

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
      icon: "fab fa-facebook-f",
      color: "#fff",
      bgColor: "#3b5998",
      link: "#",
      isExpanded: false
    }, {
      icon: "fab fa-twitter",
      color: "#fff",
      bgColor: "#1da1f2",
      link: "#",
      isExpanded: false
    }, {
      icon: "fab fa-linkedin-in",
      color: "#fff",
      bgColor: "#0077b5",
      link: "#",
      isExpanded: false
    }, {
      icon: "fab fa-youtube",
      color: "#fff",
      bgColor: "#cd201f",
      link: "#",
      isExpanded: false
    }];
    setAttributes({
      socialDetails: newSclDtails
    });
  }, []); //

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var profilesOnly = socialDetails.map(function (_ref2) {
      var icon = _ref2.icon,
          link = _ref2.link;
      return {
        icon: icon,
        link: link
      };
    });
    setAttributes({
      profilesOnly: profilesOnly
    });
  }, [socialDetails]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // this codes is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
    setAttributes({
      resOption: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType()
    }); // this codes is for creating a unique blockId for each block's unique className

    var BLOCK_PREFIX = "eb-team-member";
    duplicateBlockIdFix({
      BLOCK_PREFIX: BLOCK_PREFIX,
      blockId: blockId,
      setAttributes: setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select,
      clientId: clientId
    }); // // this codes is for mimmiking css when responsive options clicked from wordpress's 'preview' button
    // mimmikCssForPreviewBtnClick({
    // 	domObj: document,
    // 	select,
    // });
    //

    if ( // imageUrl ===
    // "../wp-content/plugins/essential-blocks/assets/images/user.jpg"
    /assets\/images\/user\.jpg/gi.test(imageUrl || " ")) {
      setAttributes({
        imageUrl: "".concat(TeamMemberLocalize.eb_plugins_url, "assets/images/user.jpg")
      });
    }
  }, []); // console.log({ EssentialBlocksLocalize, TeamMemberLocalize });

  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, "eb-guten-block-main-parent-wrapper")
  }); //
  // styling codes start from here
  //
  // styles related to generateTypographyStyles start ⬇

  var _generateTypographySt = generateTypographyStyles({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__.typoPrefix_name,
    defaultFontSize: 20
  }),
      nameTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
      nameTypoStylesTab = _generateTypographySt.typoStylesTab,
      nameTypoStylesMobile = _generateTypographySt.typoStylesMobile;

  var _generateTypographySt2 = generateTypographyStyles({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__.typoPrefix_job,
    defaultFontSize: 16
  }),
      jobTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
      jobTypoStylesTab = _generateTypographySt2.typoStylesTab,
      jobTypoStylesMobile = _generateTypographySt2.typoStylesMobile;

  var _generateTypographySt3 = generateTypographyStyles({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__.typoPrefix_descs,
    defaultFontSize: 16
  }),
      descsTypoStylesDesktop = _generateTypographySt3.typoStylesDesktop,
      descsTypoStylesTab = _generateTypographySt3.typoStylesTab,
      descsTypoStylesMobile = _generateTypographySt3.typoStylesMobile; // styles related to generateTypographyStyles end ⬇
  // styles related to generateResponsiveRangeStyles start ⬇


  var _generateResponsiveRa = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.wrapperWidth,
    // customUnit: "px",
    property: "max-width",
    attributes: attributes
  }),
      wrapWidthDesktop = _generateResponsiveRa.rangeStylesDesktop,
      wrapWidthTab = _generateResponsiveRa.rangeStylesTab,
      wrapWidthMobile = _generateResponsiveRa.rangeStylesMobile;

  var _generateResponsiveRa2 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.imageWidth,
    // customUnit: "px",
    property: "width",
    attributes: attributes
  }),
      imgWidthDesktop = _generateResponsiveRa2.rangeStylesDesktop,
      imgWidthTab = _generateResponsiveRa2.rangeStylesTab,
      imgWidthMobile = _generateResponsiveRa2.rangeStylesMobile;

  var _generateResponsiveRa3 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.p9LGap,
    // customUnit: "px",
    property: "Gap",
    attributes: attributes
  }),
      p9flexGapDesktop = _generateResponsiveRa3.rangeStylesDesktop,
      p9flexGapTab = _generateResponsiveRa3.rangeStylesTab,
      p9flexGapMobile = _generateResponsiveRa3.rangeStylesMobile;

  var _generateResponsiveRa4 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.imageHeight,
    // customUnit: "px",
    property: "height",
    attributes: attributes
  }),
      imgHeightDesktop = _generateResponsiveRa4.rangeStylesDesktop,
      imgHeightTab = _generateResponsiveRa4.rangeStylesTab,
      imgHeightMobile = _generateResponsiveRa4.rangeStylesMobile;

  var _generateResponsiveRa5 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.rangeIconSize,
    customUnit: "px",
    property: "font-size",
    attributes: attributes
  }),
      iconSizeDesktop = _generateResponsiveRa5.rangeStylesDesktop,
      iconSizeTab = _generateResponsiveRa5.rangeStylesTab,
      iconSizeMobile = _generateResponsiveRa5.rangeStylesMobile;

  var _generateResponsiveRa6 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.rangeIconPadding,
    customUnit: "em",
    property: "padding",
    attributes: attributes
  }),
      iconPaddingDesktop = _generateResponsiveRa6.rangeStylesDesktop,
      iconPaddingTab = _generateResponsiveRa6.rangeStylesTab,
      iconPaddingMobile = _generateResponsiveRa6.rangeStylesMobile;

  var _generateResponsiveRa7 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.rangeIconDistance,
    customUnit: "px",
    property: "column-gap",
    attributes: attributes
  }),
      iconSpaceDesktop = _generateResponsiveRa7.rangeStylesDesktop,
      iconSpaceTab = _generateResponsiveRa7.rangeStylesTab,
      iconSpaceMobile = _generateResponsiveRa7.rangeStylesMobile;

  var _generateResponsiveRa8 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.rangeIconRowGap,
    customUnit: "px",
    property: "row-gap",
    attributes: attributes
  }),
      iconRowGapDesktop = _generateResponsiveRa8.rangeStylesDesktop,
      iconRowGapTab = _generateResponsiveRa8.rangeStylesTab,
      iconRowGapMobile = _generateResponsiveRa8.rangeStylesMobile;

  var _generateResponsiveRa9 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.imgTopBgHeight,
    customUnit: "px",
    property: "height",
    attributes: attributes
  }),
      imgTopBgHeightDesktop = _generateResponsiveRa9.rangeStylesDesktop,
      imgTopBgHeightTab = _generateResponsiveRa9.rangeStylesTab,
      imgTopBgHeightMobile = _generateResponsiveRa9.rangeStylesMobile;

  var _generateResponsiveRa10 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.cSepWPrefix,
    property: "width",
    attributes: attributes
  }),
      contentSepWidthDesktop = _generateResponsiveRa10.rangeStylesDesktop,
      contentSepWidthTab = _generateResponsiveRa10.rangeStylesTab,
      contentSepWidthMobile = _generateResponsiveRa10.rangeStylesMobile;

  var _generateResponsiveRa11 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.sSepWPrefix,
    property: "width",
    attributes: attributes
  }),
      socialSepWidthDesktop = _generateResponsiveRa11.rangeStylesDesktop,
      socialSepWidthTab = _generateResponsiveRa11.rangeStylesTab,
      socialSepWidthMobile = _generateResponsiveRa11.rangeStylesMobile;

  var _generateResponsiveRa12 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.cSepHPrefix,
    property: "border-bottom-width",
    attributes: attributes
  }),
      contentSepHeightDesktop = _generateResponsiveRa12.rangeStylesDesktop,
      contentSepHeightTab = _generateResponsiveRa12.rangeStylesTab,
      contentSepHeightMobile = _generateResponsiveRa12.rangeStylesMobile;

  var _generateResponsiveRa13 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.sSepHPrefix,
    property: "border-bottom-width",
    attributes: attributes
  }),
      socialSepHeightDesktop = _generateResponsiveRa13.rangeStylesDesktop,
      socialSepHeightTab = _generateResponsiveRa13.rangeStylesTab,
      socialSepHeightMobile = _generateResponsiveRa13.rangeStylesMobile;

  var _generateResponsiveRa14 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.sclDeviderPosRight,
    property: "margin-right",
    attributes: attributes
  }),
      sSepPosRightDesktop = _generateResponsiveRa14.rangeStylesDesktop,
      sSepPosRightTab = _generateResponsiveRa14.rangeStylesTab,
      sSepPosRightMobile = _generateResponsiveRa14.rangeStylesMobile; // styles related to generateResponsiveRangeStyles end
  // styles related to generateBackgroundControlStyles start ⬇


  var _generateBackgroundCo = generateBackgroundControlStyles({
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_11__.WrpBgConst // noOverlay: true,
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
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_11__.imgTopBgPrefix,
    noOverlay: true,
    noMainBgi: true // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  }),
      imgTopBackgroundStyles = _generateBackgroundCo2.backgroundStylesDesktop,
      imgTopHoverBackgroundStyles = _generateBackgroundCo2.hoverBackgroundStylesDesktop,
      imgTopBgTransitionStyle = _generateBackgroundCo2.bgTransitionStyle;

  var _generateBackgroundCo3 = generateBackgroundControlStyles({
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_11__.socialWrpBg,
    noOverlay: true,
    noMainBgi: true // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  }),
      socialWrapBackgroundStyles = _generateBackgroundCo3.backgroundStylesDesktop,
      socialWrapHoverBackgroundStyles = _generateBackgroundCo3.hoverBackgroundStylesDesktop,
      socialWrapTransitionStyle = _generateBackgroundCo3.bgTransitionStyle; // styles related to generateBackgroundControlStyles end
  // styles related to generateDimensionsControlStyles start ⬇


  var _generateDimensionsCo = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.tmbWrapMarginConst,
    styleFor: "margin"
  }),
      wrpMarginDesktop = _generateDimensionsCo.dimensionStylesDesktop,
      wrpMarginTab = _generateDimensionsCo.dimensionStylesTab,
      wrpMarginMobile = _generateDimensionsCo.dimensionStylesMobile;

  var _generateDimensionsCo2 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.tmbWrapPaddingConst,
    styleFor: "padding"
  }),
      wrpPaddingDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
      wrpPaddingTab = _generateDimensionsCo2.dimensionStylesTab,
      wrpPaddingMobile = _generateDimensionsCo2.dimensionStylesMobile;

  var _generateDimensionsCo3 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.tmbDescsPaddingConst,
    styleFor: "padding"
  }),
      descsPaddingDesktop = _generateDimensionsCo3.dimensionStylesDesktop,
      descsPaddingTab = _generateDimensionsCo3.dimensionStylesTab,
      descsPaddingMobile = _generateDimensionsCo3.dimensionStylesMobile;

  var _generateDimensionsCo4 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.tmbNamePaddingConst,
    styleFor: "padding"
  }),
      namePaddingDesktop = _generateDimensionsCo4.dimensionStylesDesktop,
      namePaddingTab = _generateDimensionsCo4.dimensionStylesTab,
      namePaddingMobile = _generateDimensionsCo4.dimensionStylesMobile;

  var _generateDimensionsCo5 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.tmbJobPaddingConst,
    styleFor: "padding"
  }),
      jobPaddingDesktop = _generateDimensionsCo5.dimensionStylesDesktop,
      jobPaddingTab = _generateDimensionsCo5.dimensionStylesTab,
      jobPaddingMobile = _generateDimensionsCo5.dimensionStylesMobile;

  var _generateDimensionsCo6 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.iconsWrapPadding,
    styleFor: "padding"
  }),
      iconsWrapPaddingDesktop = _generateDimensionsCo6.dimensionStylesDesktop,
      iconsWrapPaddingTab = _generateDimensionsCo6.dimensionStylesTab,
      iconsWrapPaddingMobile = _generateDimensionsCo6.dimensionStylesMobile;

  var _generateDimensionsCo7 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.iconsWrapMargin,
    styleFor: "margin"
  }),
      iconsWrapMarginDesktop = _generateDimensionsCo7.dimensionStylesDesktop,
      iconsWrapMarginTab = _generateDimensionsCo7.dimensionStylesTab,
      iconsWrapMarginMobile = _generateDimensionsCo7.dimensionStylesMobile;

  var _generateDimensionsCo8 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.imageMarginConst,
    styleFor: "margin"
  }),
      imageMarginDesktop = _generateDimensionsCo8.dimensionStylesDesktop,
      imageMarginTab = _generateDimensionsCo8.dimensionStylesTab,
      imageMarginMobile = _generateDimensionsCo8.dimensionStylesMobile;

  var _generateDimensionsCo9 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.imagePaddingConst,
    styleFor: "padding"
  }),
      imagePaddingDesktop = _generateDimensionsCo9.dimensionStylesDesktop,
      imagePaddingTab = _generateDimensionsCo9.dimensionStylesTab,
      imagePaddingMobile = _generateDimensionsCo9.dimensionStylesMobile;

  var _generateDimensionsCo10 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.contentsPad,
    styleFor: "padding"
  }),
      contentsPaddingDesktop = _generateDimensionsCo10.dimensionStylesDesktop,
      contentsPaddingTab = _generateDimensionsCo10.dimensionStylesTab,
      contentsPaddingMobile = _generateDimensionsCo10.dimensionStylesMobile;

  var _generateDimensionsCo11 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.contentsMargin,
    styleFor: "margin"
  }),
      contentsMarginDesktop = _generateDimensionsCo11.dimensionStylesDesktop,
      contentsMarginTab = _generateDimensionsCo11.dimensionStylesTab,
      contentsMarginMobile = _generateDimensionsCo11.dimensionStylesMobile; // styles related to generateDimensionsControlStyles end
  // styles related to generateBorderShadowStyles start ⬇


  var _generateBorderShadow = generateBorderShadowStyles({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_12__.WrpBdShadowConst,
    attributes: attributes // noShadow: true,
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
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_12__.prefixSocialBdShadow,
    attributes: attributes,
    noShadow: true // noBorder: true,

  }),
      socialBorderDesktop = _generateBorderShadow2.styesDesktop,
      socialBorderTab = _generateBorderShadow2.styesTab,
      socialBorderMobile = _generateBorderShadow2.styesMobile,
      socialBordersHoverDesktop = _generateBorderShadow2.stylesHoverDesktop,
      socialBordersHoverTab = _generateBorderShadow2.stylesHoverTab,
      socialBordersHoverMobile = _generateBorderShadow2.stylesHoverMobile,
      socialBorderTransitionStyle = _generateBorderShadow2.transitionStyle;

  var _generateBorderShadow3 = generateBorderShadowStyles({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_12__.prefixImgBd,
    attributes: attributes // noShadow: true,
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
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_12__.ovlBdPrefix,
    attributes: attributes // noShadow: true,
    // noBorder: true,

  }),
      ovlBdShdStyleDesktop = _generateBorderShadow4.styesDesktop,
      ovlBdShdStyleTab = _generateBorderShadow4.styesTab,
      ovlBdShdStyleMobile = _generateBorderShadow4.styesMobile; // styles related to generateBorderShadowStyles end


  var socialStyles = socialDetails.reduce(function (acc, curr, i) {
    return "\n\t\t".concat(acc, "\n\t\t.").concat(blockId, ".eb-team-wrapper ul.socials li:nth-child(").concat(i + 1, ") a {\t\t\t\n\t\t\tbackground-color: ").concat(curr.bgColor || "#000", ";\n\t\t\tcolor: ").concat(curr.color || "#fff", ";\n\t\t}\n\t\t");
  }, "");
  var wrapperStylesDesktop = "\n\t\tdiv.eb-team-wrapper h3,\n\t\tdiv.eb-team-wrapper h4,\n\t\tdiv.eb-team-wrapper p,\n\t\tdiv.eb-team-wrapper ul {\n\t\t\tmargin: 0;\n\t\t\tpadding:0;\n\t\t}\n\n\t\t.social-icon {\n\t\t\tfont-style: normal;\n\t\t}\n\t\t\n\n\t\t.".concat(blockId, ".eb-team-wrapper > *{\n\t\t\tposition:relative;\n\t\t}\n\n\t\t.").concat(blockId, ".eb-team-wrapper {\n\t\t\tposition:relative;\n\t\t\toverflow:hidden;\n\t\t\tmargin:auto;\n\t\t\t").concat(wrapWidthDesktop, "\n\t\t\t").concat(wrpBackgroundStylesDesktop, "\n\t\t\t").concat(wrpMarginDesktop, "\n\t\t\t").concat(wrpPaddingDesktop, "\n\t\t\t").concat(wrpBdShdStyesDesktop, "\n\t\t\ttransition: ").concat(wrpBgTransitionStyle, ", ").concat(wrpBdShdTransitionStyle, ";\n\t\t}\n\n\n\t\t").concat(preset === "preset3" ? "\n\t\t\t\t.".concat(blockId, ".eb-team-wrapper .image{\n\t\t\t\t\tposition: relative;\n\t\t\t\t}\n\t\t\t\t") : "", "\n\n\t\t").concat(preset === "preset2" ? "\n\t\t\t\t.".concat(blockId, ".eb-team-wrapper:hover .contents{\n\t\t\t\t\t").concat(isConBgGradient ? "background-image: ".concat(conBgGradient, ";") : "background-color: ".concat(conBgColor, ";"), "\n\t\t\t\t\ttop: 50%;\n\t\t\t\t\theight: 50%;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tjustify-content: center;\t\t\n\t\t\t\t}\n\n\t\t\t\t.").concat(blockId, ".eb-team-wrapper:hover .contents .job_title {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.").concat(blockId, ".eb-team-wrapper:hover .contents ul.socials {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t}\n\t\t\t\n\t\t\t\t") : "", "\n\n\t\t\n\t\t").concat(preset === "preset5" ? "\n\t\t\t\t.".concat(blockId, ".eb-team-wrapper .eb-team-inner {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tjustify-content: space-between;\n\t\t\t\t\tflex-direction: ").concat(isP9reverse ? "row-reverse" : "row", ";\n\t\t\t\t\talign-items: ").concat(imgCnVtAlign || "flex-start", ";\n\t\t\t\t\t").concat(p9flexGapDesktop, "\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.").concat(blockId, ".eb-team-wrapper .image {\n\t\t\t\t\t").concat(imgWidthDesktop, "\n\t\t\t\t}\n\n\t\t\t\t.").concat(blockId, ".eb-team-wrapper .contents {\n\t\t\t\t\tflex:1;\n\t\t\t\t}\n\t\t\t\t") : "", "\n\t\t\n  \n\n\t\t.").concat(blockId, ".eb-team-wrapper:hover{\n\t\t\t").concat(preset === "preset2" ? "overflow:hidden;" : "", "\n\n\t\t\t").concat(wrpHoverBackgroundStylesDesktop, "\n\t\t\t").concat(wrpBdShdStylesHoverDesktop, "\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-team-wrapper:before{\n\t\t\t").concat(wrpOverlayStylesDesktop, "\n\t\t\ttransition: ").concat(wrpOvlTransitionStyle, ";\n\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-team-wrapper:hover:before{\n\t\t\t").concat(wrpHoverOverlayStylesDesktop, "\n\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-team-wrapper .image > img {\n\t\t\tmax-width: 100%;\n\t\t\tobject-fit: cover;\n\t\t\tdisplay:block;\n\t\t\tmargin:auto;\n\t\t\t").concat(imageAlign === "left" ? "margin-left:0;" : imageAlign === "right" ? "margin-right:0;" : "", "\n\t\t\t").concat(preset === "preset5" ? "width:100%;" : imgWidthDesktop, "\n\t\t\t").concat(imageBdShdStyleDesktop, "\n\t\t\t").concat(imageMarginDesktop, "\n\t\t\t").concat(imagePaddingDesktop, "\n\t\t\t").concat(isImgHeightAuto ? "height:auto;" : imgHeightDesktop, "\n\t\t\t").concat(preset === "preset6" ? "clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);" : "", "\n\t\t}\n\n\n\t\t").concat(imgBeforeEl ? "\n\t\t\t.".concat(blockId, ".eb-team-wrapper .image:before {\n\t\t\t\tcontent: \"\";\n\t\t\t\tdisplay: block;\n\t\t\t\t").concat(imgTopBgHeightDesktop, "\n\t\t\t\t").concat(imgTopBackgroundStyles, "\n\t\t\t\ttransition: ").concat(imgTopBgTransitionStyle, ";\n\t\t\t\t\n\t\t\t}\n\n\t\t\t.").concat(blockId, ".eb-team-wrapper .image:hover:before{\n\t\t\t\t").concat(imgTopHoverBackgroundStyles, "\n\t\t\t}\n\t\t\t") : "", "\n\t\t\n\n\n\t\t.").concat(blockId, ".eb-team-wrapper .image:hover > img {\n\t\t\t").concat(imageBdShdStylesHoverDesktop, "\n\t\t\ttransition: ").concat(imageBdShdTransitionStyle, ";\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-team-wrapper .contents {\n\t\t\ttext-align: ").concat(contentsAlign, ";\n\t\t\tbox-sizing: border-box;\n\t\t\t").concat(preset === "preset2" ? "\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tright: 0;\n\t\t\t\t\ttop: 100%;\n\t\t\t\t\ttransition: 0.5s;\n\t\t\t\t\t" : "", "\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-team-wrapper .contents .name {\n\t\t\t").concat(nameTypoStylesDesktop, "\n\t\t\t").concat(namePaddingDesktop, "\n\t\t\tcolor: ").concat(nameColor, ";\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-team-wrapper .contents .job_title {\n\t\t\t").concat(jobTypoStylesDesktop, "\n\t\t\t").concat(jobPaddingDesktop, "\n\t\t\tcolor: ").concat(jobColor, ";\n\t\t\t").concat(preset === "preset2" ? "display:none;" : "", "\n\t\t}\n\t\t\n\t\t").concat(showDescs ? "\n\t\t\t\t.".concat(blockId, ".eb-team-wrapper .contents .description {\n\t\t\t\t\tcolor: ").concat(descsColor, ";\n\t\t\t\t\t").concat(descsPaddingDesktop, "\n\t\t\t\t\t").concat(descsTypoStylesDesktop, "\n\t\t\t\t}\n\t\t\t\t") : "", "\t\t\n\t\t\n").concat(showCSeparator ? "\n\t\t.".concat(blockId, ".eb-team-wrapper .contents .content_separator {\n\t\t\tborder: none;\n\t\t\tmargin: auto;\n\t\t\tborder-bottom: 1px ").concat(cSepType, " ").concat(cSepColor, ";\n\t\t\t").concat(contentSepWidthDesktop, "\n\t\t\t").concat(contentSepHeightDesktop, "\n\t\t\t").concat(cSepAlign === "left" ? "margin-left:0;" : cSepAlign === "right" ? "margin-right:0;" : "", "\n\t\t}\n\t\t") : "", "\n\n").concat(showSocials && showSSeparator ? "\n\t\t.".concat(blockId, ".eb-team-wrapper .social_separator {\n\t\t\tborder: none;\n\t\t\tmargin: auto;\n\t\t\tborder-bottom: 1px ").concat(sSepType, " ").concat(sSepColor, ";\n\t\t\t").concat(socialSepWidthDesktop, "\n\t\t\t").concat(socialSepHeightDesktop, "\n\t\t\t").concat(sSepAlign === "left" ? "margin-left:0;" : sSepAlign === "right" ? "margin-right:0;" : "", "\n\t\t}\n\t\t") : "", "\n\n").concat(preset === "preset4" ? "\n\t\t.".concat(blockId, ".eb-team-wrapper .eb-team-inner {\n\t\t\tposition: relative;\n\t\t}\n\n\t\t.").concat(blockId, ".eb-team-wrapper:hover .contents {\n\t\t\topacity: 1;\n\t\t}\n\n\t\t.").concat(blockId, ".eb-team-wrapper .contents {\n\t\t\ttransition: 0.5s;\n\t\t\topacity: 0;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\tbottom: 0;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: ").concat(conVtAlign || "center", ";\n\t\t\t").concat(contentsPaddingDesktop, "\n\t\t\t").concat(contentsMarginDesktop, "\n\t\t\t").concat(ovlBdShdStyleDesktop, "\n\t\t\t").concat(isConBgGradient ? "background-image: ".concat(conBgGradient, ";") : "background-color: ".concat(conBgColor, ";"), "\n\t\t}\n\n\t\t") : "", "\n\n").concat(showSocials ? "\n\t\t".concat(socialStyles, "\n\t\t\n\t\t.").concat(blockId, ".eb-team-wrapper ul.socials {\n\t\t\tlist-style: none;\n\t\t\tflex-wrap: wrap;\n\t\t\talign-items: ").concat(iconsVAlign || "center", ";\n\t\t\tjustify-content: ").concat(iconsJustify, ";\n\t\t\t").concat(iconSpaceDesktop, "\n\t\t\t").concat(iconRowGapDesktop, "\n\t\t\t").concat(socialWrapBackgroundStyles, "\n\t\t\ttransition: ").concat(socialWrapTransitionStyle, ", opacity .5s;\n\t\t\t").concat(preset === "preset2" ? "display:none;" : "display: flex;", "\n\t\t\t").concat(preset === "preset3" ? "\n\t\t\t\topacity:0;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\tleft:0;\n\t\t\t\tright:0;\n\t\t\t\tbox-sizing:border-box;\n\t\t\t\t".concat(contentsPaddingDesktop, "\n\t\t\t\t").concat(contentsMarginDesktop, "\n\t\t\t\t").concat(ovlBdShdStyleDesktop, "\n\t\t\t\t").concat(isConBgGradient ? "background-image: ".concat(conBgGradient, ";") : "background-color: ".concat(conBgColor, ";"), "\n\t\t\t") : "\n\t\t\t\t\t".concat(iconsWrapMarginDesktop, "\n\t\t\t\t\t").concat(iconsWrapPaddingDesktop, "\n\t\t\t\t\t"), "\n\t\t}\n\n\t\t").concat(preset === "preset3" ? "\n\t\t\t\t.".concat(blockId, ".eb-team-wrapper:hover ul.socials {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t\t") : "", "\n\n\t\t.").concat(blockId, ".eb-team-wrapper ul.socials:hover {\n\t\t\t").concat(socialWrapHoverBackgroundStyles, "\n\t\t}\n\n\t").concat(isIconsDevider ? "\n\t\t.".concat(blockId, ".eb-team-wrapper ul.socials li{\n\t\t\tposition:relative;\n\t\t}\n\n\t\t.").concat(blockId, ".eb-team-wrapper ul.socials li + li:before {\n\t\t\tcontent: \"\";\n\t\t\tbackground-color: ").concat(icnsDevideColor, ";\n\t\t\theight: ").concat(icnSepH, "px;\n\t\t\twidth: ").concat(icnSepW, "px;\n\t\t\tposition: absolute;\n\t\t\ttop: 2px;\n\t\t\tright: 100%;\n\t\t\t").concat(sSepPosRightDesktop, "\n\t\t}\n\t\t") : "", "\n\n\t\t.").concat(blockId, ".eb-team-wrapper ul.socials li a {\t\t\t\n\t\t\tbox-sizing:content-box;\n\t\t\ttext-decoration: none;\n\t\t\tcursor: pointer;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\theight: 0;\n\t\t\twidth: 0;\n\t\t\t").concat(iconSizeDesktop, "\n\t\t\t").concat(iconPaddingDesktop, "\n\t\t\t").concat(socialBorderDesktop, "\n\t\t\ttransition: color 0.5s, background-color 0.5s, ").concat(socialBorderTransitionStyle, ";\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-team-wrapper ul.socials li:hover a {\t\n\t\t\tbackground-color:").concat(hvIcnBgc, ";\n\t\t\tcolor:").concat(hvIcnColor, ";\n\t\t\t").concat(socialBordersHoverDesktop, "\n\t\t}\n\t\t\n\t\t") : "", "\n\t\n  \n\n\t");
  var wrapperStylesTab = "\n\t.".concat(blockId, ".eb-team-wrapper {\n\t\t").concat(wrapWidthTab, "\n\t\t").concat(wrpBackgroundStylesTab, "\n\t\t").concat(wrpMarginTab, "\n\t\t").concat(wrpPaddingTab, "\n\t\t").concat(wrpBdShdStyesTab, "\n\t}\n\t\n\t.").concat(blockId, ".eb-team-wrapper:hover{\n\t\t").concat(wrpHoverBackgroundStylesTab, "\n\t\t").concat(wrpBdShdStylesHoverTab, "\n\t\t\n\t}\n\t\n\t.").concat(blockId, ".eb-team-wrapper:before{\n\t\t").concat(wrpOverlayStylesTab, "\n\n\t}\n\t\n\t.").concat(blockId, ".eb-team-wrapper:hover:before{\n\t\t").concat(wrpHoverOverlayStylesTab, "\n\n\t}\n\n\t\n\t").concat(preset === "preset5" ? "\t\t\t\n\t\t\t.".concat(blockId, ".eb-team-wrapper .image {\n\t\t\t\t").concat(imgWidthTab, "\n\t\t\t}\n\n\t\t\t.").concat(blockId, ".eb-team-wrapper .eb-team-inner {\n\t\t\t\t").concat(p9flexGapTab, "\n\t\t\t}\n\t\t\t\n\t\t\t") : "", "\n\n\n\t").concat(imgBeforeEl ? "\n\t\t.".concat(blockId, ".eb-team-wrapper .image:before {\n\t\t\t").concat(imgTopBgHeightTab, "\n\t\t}\n\t\t") : "", "\n\t\t\n\n\t.").concat(blockId, ".eb-team-wrapper .image > img {\n\t\t").concat(imageBdShdStyleTab, "\n\t\t").concat(imageMarginTab, "\n\t\t").concat(imagePaddingTab, "\n\t\t").concat(preset === "preset5" ? "" : imgWidthTab, "\t\t\n\t\t").concat(isImgHeightAuto ? "" : imgHeightTab, "\n\t}\n\n\n\t.").concat(blockId, ".eb-team-wrapper .image:hover > img {\n\t\t").concat(imageBdShdStylesHoverTab, "\n\n\t}\n\n\n\t").concat(showDescs ? "\n\t\t\t.".concat(blockId, ".eb-team-wrapper .contents .description {\n\t\t\t\t").concat(descsTypoStylesTab, "\n\t\t\t\t").concat(descsPaddingTab, "\n\t\t\t}\t\t\n\t\t\t") : "", "\t\n\n\t.").concat(blockId, ".eb-team-wrapper .contents .name {\n\t\t").concat(nameTypoStylesTab, "\n\t\t").concat(namePaddingTab, "\n\t}\n\t\n\t.").concat(blockId, ".eb-team-wrapper .contents .job_title {\n\t\t").concat(jobTypoStylesTab, "\n\t\t").concat(jobPaddingTab, "\n\t}\t\n\n\n\t\t\n").concat(showCSeparator ? "\n\t\t.".concat(blockId, ".eb-team-wrapper .contents .content_separator {\n\t\t\t").concat(contentSepWidthTab, "\n\t\t\t").concat(contentSepHeightTab, "\n\t\t}\n\t\t") : "", "\n\n").concat(showSocials && showSSeparator ? "\n\t\t.".concat(blockId, ".eb-team-wrapper .social_separator {\n\t\t\t").concat(socialSepWidthTab, "\n\t\t\t").concat(socialSepHeightTab, "\n\t\t}\n\t\t") : "", "\n\t\n").concat(preset === "preset4" ? "\n\t\t.".concat(blockId, ".eb-team-wrapper .contents {\n\t\t\t").concat(contentsPaddingTab, "\n\t\t\t").concat(contentsMarginTab, "\n\t\t\t").concat(ovlBdShdStyleTab, "\n\t\t}\n\t\t") : "", "\n\n").concat(showSocials ? "\n\t\t".concat(socialStyles, "\n\t\t\n\t\t.").concat(blockId, ".eb-team-wrapper ul.socials {\n\t\t\t").concat(iconsWrapMarginTab, "\n\t\t\t").concat(iconsWrapPaddingTab, "\n\t\t\t").concat(iconSpaceTab, "\n\t\t\t").concat(iconRowGapTab, "\n\t\t\t").concat(preset === "preset3" ? "\n\t\t\t\t\t\t".concat(contentsPaddingTab, "\n\t\t\t\t\t\t").concat(contentsMarginTab, "\n\t\t\t\t\t\t").concat(ovlBdShdStyleTab, "\n\t\t\t\t\t") : "", "\n\t\t}\t\n\n\n\t").concat(isIconsDevider ? "\n\t\t\t.".concat(blockId, ".eb-team-wrapper ul.socials li + li:before {\n\t\t\t\t").concat(sSepPosRightTab, "\n\t\t\t}\n\t\t\t") : "", "\n\n\t\t.").concat(blockId, ".eb-team-wrapper ul.socials li a {\n\t\t\t").concat(iconSizeTab, "\n\t\t\t").concat(iconPaddingTab, "\n\t\t\t").concat(socialBorderTab, "\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-team-wrapper ul.socials li:hover a {\t\n\t\t\t").concat(socialBordersHoverTab, "\n\t\t}\n\t\t") : "", "\n\n\t\n\t");
  var wrapperStylesMobile = "\n\t.".concat(blockId, ".eb-team-wrapper {\n\t\t").concat(wrapWidthMobile, "\n\t\t").concat(wrpBackgroundStylesMobile, "\n\t\t").concat(wrpMarginMobile, "\n\t\t").concat(wrpPaddingMobile, "\n\t\t").concat(wrpBdShdStyesMobile, "\n\t}\n\t\n\t.").concat(blockId, ".eb-team-wrapper:hover{\n\t\t").concat(wrpHoverBackgroundStylesMobile, "\n\t\t").concat(wrpBdShdStylesHoverMobile, "\n\t\t\n\t}\n\t\n\t.").concat(blockId, ".eb-team-wrapper:before{\n\t\t").concat(wrpOverlayStylesMobile, "\n\n\t}\n\t\n\t.").concat(blockId, ".eb-team-wrapper:hover:before{\n\t\t").concat(wrpHoverOverlayStylesMobile, "\n\n\t}\n\n\t").concat(preset === "preset5" ? "\t\t\t\n\t\t\t.".concat(blockId, ".eb-team-wrapper .image {\n\t\t\t\t").concat(imgWidthMobile, "\n\t\t\t}\n\n\t\t\t.").concat(blockId, ".eb-team-wrapper .eb-team-inner {\n\t\t\t\t").concat(p9flexGapMobile, "\n\t\t\t}\n\t\t\t") : "", "\n\n\n\t").concat(imgBeforeEl ? "\n\t\t.".concat(blockId, ".eb-team-wrapper .image:before {\n\t\t\t").concat(imgTopBgHeightMobile, "\n\t\t}\n\t\t") : "", "\n\n\t.").concat(blockId, ".eb-team-wrapper .image > img {\n\t\t").concat(preset === "preset5" ? "" : imgWidthMobile, "\n\t\t").concat(imageBdShdStyleMobile, "\n\t\t").concat(imageMarginMobile, "\n\t\t").concat(imagePaddingMobile, "\n\n\t\t").concat(isImgHeightAuto ? "" : imgHeightMobile, "\n\t}\n\n\n\t\n\n\t.").concat(blockId, ".eb-team-wrapper .image:hover > img {\n\t\t").concat(imageBdShdStylesHoverMobile, "\n\t}\n\t\n\t").concat(showDescs ? "\n\t\t\t.".concat(blockId, ".eb-team-wrapper .contents .description {\n\t\t\t\t").concat(descsTypoStylesMobile, "\n\t\t\t\t").concat(descsPaddingMobile, "\n\t\t\t}\t\n\t\t\t") : "", "\n\t\n\t.").concat(blockId, ".eb-team-wrapper .contents .name {\n\t\t").concat(nameTypoStylesMobile, "\n\t\t").concat(namePaddingMobile, "\n\t}\n\t\n\t.").concat(blockId, ".eb-team-wrapper .contents .job_title {\n\t\t").concat(jobTypoStylesMobile, "\n\t\t").concat(jobPaddingMobile, "\n\t}\n\n\n\t\t\t\n\t").concat(showCSeparator ? "\n\t\t\t.".concat(blockId, ".eb-team-wrapper .contents .content_separator {\n\t\t\t\t").concat(contentSepWidthMobile, "\n\t\t\t\t").concat(contentSepHeightMobile, "\n\t\t\t}\n\t\t\t") : "", "\n\n\t").concat(showSocials && showSSeparator ? "\n\t\t\t.".concat(blockId, ".eb-team-wrapper .social_separator {\n\t\t\t\t").concat(socialSepWidthMobile, "\n\t\t\t\t").concat(socialSepHeightMobile, "\n\t\t\t}\n\t\t\t") : "", "\n\n\n\t").concat(preset === "preset4" ? "\n\t\t\t.".concat(blockId, ".eb-team-wrapper .contents {\n\t\t\t\t").concat(contentsPaddingMobile, "\n\t\t\t\t").concat(contentsMarginMobile, "\n\t\t\t\t").concat(ovlBdShdStyleMobile, "\n\t\t\t}\n\t\t\t") : "", "\n\n\t").concat(showSocials ? "\n\t\t\t".concat(socialStyles, "\n\n\t\t\t.").concat(blockId, ".eb-team-wrapper ul.socials {\n\t\t\t\t").concat(iconSpaceMobile, "\n\t\t\t\t").concat(iconRowGapMobile, "\n\t\t\t\t").concat(iconsWrapPaddingMobile, "\n\t\t\t\t").concat(iconsWrapMarginMobile, "\n\t\t\t\t").concat(preset === "preset3" ? "\n\t\t\t\t\t\t\t".concat(contentsPaddingMobile, "\n\t\t\t\t\t\t\t").concat(contentsMarginMobile, "\n\t\t\t\t\t\t\t").concat(ovlBdShdStyleMobile, "\n\t\t\t\t\t\t") : "", "\n\t\t\t}\n\n\t\t\t").concat(isIconsDevider ? "\n\t\t\t\t\t.".concat(blockId, ".eb-team-wrapper ul.socials li + li:before {\n\t\t\t\t\t\t").concat(sSepPosRightMobile, "\n\t\t\t\t\t}\n\t\t\t\t\t") : "", "\n\t\t\t\t\t\n\t\t\t.").concat(blockId, ".eb-team-wrapper ul.socials li a {\n\t\t\t\t").concat(iconSizeMobile, "\n\t\t\t\t").concat(iconPaddingMobile, "\n\t\t\t\t").concat(socialBorderMobile, "\n\t\t\t}\n\n\t\t\t\n\t\t\t.").concat(blockId, ".eb-team-wrapper ul.socials li:hover a {\t\n\t\t\t\t").concat(socialBordersHoverMobile, "\n\t\t\t}\n\t\t\t\n\t\t\t") : "", "\n\n\n\t"); // all css styles for large screen width (desktop/laptop) in strings ⬇

  var desktopAllStyles = softMinifyCssStrings("\t\t\n\t\t".concat(wrapperStylesDesktop, "\n\n\n\t")); // all css styles for Tab in strings ⬇

  var tabAllStyles = softMinifyCssStrings("\n\t\t".concat(wrapperStylesTab, "\n\n\n\t")); // all css styles for Mobile in strings ⬇

  var mobileAllStyles = softMinifyCssStrings("\n\t\t".concat(wrapperStylesMobile, "\n\n\n\t")); //
  // styling codes End here
  //
  // Set All Style in "blockMeta" Attribute

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var styleObject = {
      desktop: desktopAllStyles,
      tab: tabAllStyles,
      mobile: mobileAllStyles
    };

    if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
      setAttributes({
        blockMeta: styleObject
      });
    }
  }, [attributes]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t".concat(desktopAllStyles, "\n\n\t\t\t\t/* mimmikcssStart */\n\n\t\t\t\t").concat(resOption === "Tablet" ? tabAllStyles : " ", "\n\t\t\t\t").concat(resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " ", "\n\n\t\t\t\t/* mimmikcssEnd */\n\n\t\t\t\t@media all and (max-width: 1024px) {\t\n\n\t\t\t\t\t/* tabcssStart */\t\t\t\n\t\t\t\t\t").concat(softMinifyCssStrings(tabAllStyles), "\n\t\t\t\t\t/* tabcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media all and (max-width: 767px) {\n\t\t\t\t\t\n\t\t\t\t\t/* mobcssStart */\t\t\t\n\t\t\t\t\t").concat(softMinifyCssStrings(mobileAllStyles), "\n\t\t\t\t\t/* mobcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t")), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockId, " eb-team-wrapper")
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-team-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: function onSelect(_ref3) {
      var id = _ref3.id,
          url = _ref3.url;
      return setAttributes({
        imageUrl: url,
        imageId: id
      });
    },
    type: "image",
    value: imageId,
    render: function render(_ref4) {
      var open = _ref4.open;

      if (!imageUrl) {
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: "eb-infobox-img-btn components-button",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload Image", "essential-blocks"),
          icon: "format-image",
          onClick: open
        });
      } else {
        return /*#__PURE__*/React.createElement("img", {
          className: "avatar",
          alt: "member",
          src: imageUrl
        });
      }
    }
  }), socialInImage && showSocials && /*#__PURE__*/React.createElement(_components_social_links__WEBPACK_IMPORTED_MODULE_7__["default"], {
    socialDetails: profilesOnly,
    icnEffect: icnEffect
  })), /*#__PURE__*/React.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/React.createElement("div", {
    className: "texts"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h3",
    className: "name",
    value: name,
    onChange: function onChange(name) {
      return setAttributes({
        name: name
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h4",
    className: "job_title",
    value: jobTitle,
    onChange: function onChange(jobTitle) {
      return setAttributes({
        jobTitle: jobTitle
      });
    }
  }), showCSeparator && /*#__PURE__*/React.createElement("hr", {
    className: "content_separator"
  }), showDescs && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    className: "description",
    value: description,
    onChange: function onChange(description) {
      return setAttributes({
        description: description
      });
    }
  })), !socialInImage && showSocials && /*#__PURE__*/React.createElement(React.Fragment, null, showSSeparator && /*#__PURE__*/React.createElement("hr", {
    className: "social_separator"
  }), /*#__PURE__*/React.createElement(_components_social_links__WEBPACK_IMPORTED_MODULE_7__["default"], {
    socialDetails: profilesOnly,
    icnEffect: icnEffect
  })))))));
}

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var example = {
  attributes: {// endTimeStamp: Date.now() + 462878000,
  }
};
/* harmony default export */ __webpack_exports__["default"] = (example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamMembersIcon": function() { return /* binding */ TeamMembersIcon; }
/* harmony export */ });
var TeamMembersIcon = function TeamMembersIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-team-members",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "30",
    y1: "30.75",
    x2: "30",
    y2: "35.17",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "33",
    r: "2",
    fill: "url(#SVGID_1__43670)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "22",
    y1: "30.75",
    x2: "22",
    y2: "35.17",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "33",
    r: "2",
    fill: "url(#SVGID_2__43670)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "26",
    y1: "36.833",
    x2: "26",
    y2: "41.25",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M23,38c0,1.657,1.343,3,3,3h0c1.657,0,3-1.343,3-3v-1h-6V38z",
    fill: "url(#SVGID_3__43670)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "6.75",
    x2: "32",
    y2: "57.323",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M51.114,40.344c0.329-0.77,0.569-1.584,0.716-2.428C54.191,37.518,56,35.473,56,33 c0-2.415-1.721-4.434-4-4.899V27h3.5c1.379,0,2.5-1.121,2.5-2.5S56.879,22,55.5,22H52v-3c0-3.859-3.141-7-7-7H33.715 c-0.866-0.477-1.77-0.885-2.715-1.195V7h-2c-1.2,0-2.266,0.542-3,1.382C25.266,7.542,24.2,7,23,7h-2v3.811 C14.621,12.917,10,18.925,10,26v2h0.026C9.391,28.838,9,29.87,9,31c0,2.533,1.894,4.632,4.339,4.956 c0.165,0.706,0.389,1.389,0.664,2.046C8.968,41.773,6,47.648,6,54v3h40h12v-3C58,48.6,55.436,43.548,51.114,40.344z M54,33 c0,1.302-0.838,2.402-2,2.816v-5.631C53.162,30.598,54,31.698,54,33z M55.5,24c0.275,0,0.5,0.225,0.5,0.5S55.775,25,55.5,25H42 c0-0.333-0.012-0.667-0.033-1H55.5z M43.789,44.874c-1.369-2.668-3.341-5.025-5.794-6.868c0.278-0.664,0.493-1.358,0.659-2.072 C41.1,35.61,43,33.533,43,31c0-1.13-0.391-2.162-1.026-3H42v-1h6v4c0,1.302,0.838,2.402,2,2.816V36c0,3.954-2.532,7.405-6.301,8.588 L43.789,44.874z M35.203,26H36c0.34,0,0.672-0.033,1-0.08v2.792C36.345,28.374,35.563,27.626,35.203,26z M37,30.823V33 c0,6.065-4.935,11-11,11s-11-4.935-11-11v-2.177c1.238-0.356,3.247-1.46,3.83-4.823H33.17C33.753,29.363,35.762,30.466,37,30.823z M36,24h-1h-2H19.101c0.465-2.279,2.484-4,4.899-4h16.899C40.435,22.279,38.415,24,36,24z M41,31c0,1.317-0.859,2.427-2.042,2.829 C38.976,33.553,39,33.28,39,33v-4.816C40.162,28.598,41,29.698,41,31z M39,26.101v-0.786c0.347-0.166,0.679-0.355,0.992-0.573 C39.993,24.828,40,24.914,40,25v1.424C39.682,26.284,39.349,26.172,39,26.101z M45,14c2.757,0,5,2.243,5,5v3h-7.685 C42.75,21.089,43,20.074,43,19v-1h-3.152c-0.881-1.525-1.988-2.87-3.269-4H45z M29,9v1.289c-0.575-0.109-1.159-0.19-1.75-0.236 C27.589,9.429,28.242,9,29,9z M23,9c0.762,0,1.418,0.434,1.756,1.063c-0.595,0.046-1.181,0.119-1.756,0.229V9z M11,31 c0-1.304,0.836-2.416,2-2.829V33c0,0.281,0.009,0.562,0.026,0.838C11.849,33.433,11,32.313,11,31z M14,26 c-0.712,0-1.386,0.155-2,0.424V26c0-7.72,6.28-14,14-14c4.626,0,8.885,2.264,11.486,6H24c-3.519,0-6.432,2.614-6.92,6H17 c0,3.078-1.119,4.258-2,4.713V26H14z M14.937,39.81C17.229,43.52,21.328,46,26,46c4.672,0,8.765-2.486,11.056-6.197 c0.541,0.422,1.053,0.873,1.537,1.349C35.839,45.401,31.104,48,26,48c-5.086,0-9.84-2.612-12.594-6.858 C13.888,40.672,14.399,40.228,14.937,39.81z M44,55h-4v-2h-2v2H14v-2h-2v2H8v-1c0-4.207,1.447-8.182,4.016-11.342 C15.173,47.216,20.41,50,26,50c5.608,0,10.815-2.774,13.972-7.33C42.54,45.843,44,49.835,44,54V55z M56,55h-4v-2h-2v2h-4v-1 c0-2.631-0.53-5.198-1.504-7.574c2.377-0.795,4.334-2.333,5.654-4.311C53.828,44.949,56,49.328,56,54V55z",
    fill: "url(#SVGID_4__43670)"
  }));
};

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
var _defaultPresetAttrsOb;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

var _window$EBTeamMemberC = window.EBTeamMemberControls,
    LeftAlignIcon = _window$EBTeamMemberC.LeftAlignIcon,
    RightAlignIcon = _window$EBTeamMemberC.RightAlignIcon,
    CenterAlignIcon = _window$EBTeamMemberC.CenterAlignIcon; // import TypographyDropdown from "../../../util/typography-control-v2";
// import ResponsiveDimensionsControl from "../../../util/dimensions-control-v2";
// import ResponsiveRangeController from "../../../util/responsive-range-control";
// import ImageAvatar from "../../../util/image-avatar/";
// import ColorControl from "../../../util/color-control";
// import ResetControl from "../../../util/reset-control";
// import GradientColorControl from "../../../util/gradient-color-controller";
// import BorderShadowControl from "../../../util/border-shadow-control";
// import BackgroundControl from "../../../util/background-control";
// import DealSocialProfiles from "../../../util/social-profiles-v2/DealSocialProfiles";
// import IconList from "../../../util/faIcons";
// import {
// 	mimmikCssForResBtns,
// 	mimmikCssOnPreviewBtnClickWhileBlockSelected,
// } from "../../../util/helpers";

var _window$EBTeamMemberC2 = window.EBTeamMemberControls,
    TypographyDropdown = _window$EBTeamMemberC2.TypographyDropdown,
    ResponsiveDimensionsControl = _window$EBTeamMemberC2.ResponsiveDimensionsControl,
    ResponsiveRangeController = _window$EBTeamMemberC2.ResponsiveRangeController,
    ImageAvatar = _window$EBTeamMemberC2.ImageAvatar,
    ColorControl = _window$EBTeamMemberC2.ColorControl,
    GradientColorControl = _window$EBTeamMemberC2.GradientColorControl,
    BorderShadowControl = _window$EBTeamMemberC2.BorderShadowControl,
    BackgroundControl = _window$EBTeamMemberC2.BackgroundControl,
    DealSocialProfiles = _window$EBTeamMemberC2.DealSocialProfiles,
    IconList = _window$EBTeamMemberC2.faIcons;
var editorStoreForGettingPreivew = eb_style_handler.editor_type === "edit-site" ? "core/edit-site" : "core/edit-post";







var defaultPresetAttrsObj = (_defaultPresetAttrsOb = {
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
}, _defineProperty(_defaultPresetAttrsOb, "icnWp_Bottom", undefined), _defineProperty(_defaultPresetAttrsOb, "icnWp_Left", undefined), _defineProperty(_defaultPresetAttrsOb, "icnWp_Right", undefined), _defineProperty(_defaultPresetAttrsOb, "icnWp_Top", 10), _defineProperty(_defaultPresetAttrsOb, "icnWp_isLinked", false), _defineProperty(_defaultPresetAttrsOb, "sclWBg_backgroundColor", undefined), _defineProperty(_defaultPresetAttrsOb, "iconsVAlign", "center"), _defineProperty(_defaultPresetAttrsOb, "isImgHeightAuto", false), _defineProperty(_defaultPresetAttrsOb, "conBgGradient", "linear-gradient(45deg, #7967ff, rgba(194,119,242,0.8))"), _defaultPresetAttrsOb);

function Inspector(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var resOption = attributes.resOption,
      imageUrl = attributes.imageUrl,
      imageId = attributes.imageId,
      isImgHeightAuto = attributes.isImgHeightAuto,
      showDescs = attributes.showDescs,
      descsColor = attributes.descsColor,
      jobColor = attributes.jobColor,
      nameColor = attributes.nameColor,
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
      icnEffect = attributes.icnEffect; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setAttributes({
      resOption: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType()
    });
  }, []); // // this useEffect is for mimmiking css for all the eb blocks on resOption changing
  // useEffect(() => {
  // 	mimmikCssForResBtns({
  // 		domObj: document,
  // 		resOption,
  // 	});
  // }, [resOption]);
  // // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
  // useEffect(() => {
  // 	const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
  // 		domObj: document,
  // 		select,
  // 		setAttributes,
  // 	});
  // 	return () => {
  // 		cleanUp();
  // 	};
  // }, []);
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
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"]
  };

  var handlePresetChange = function handlePresetChange(preset) {
    switch (preset) {
      case "default":
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

      case "preset3":
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, _defineProperty({
          socialInImage: true,
          hov_sclWBg_backgroundColor: "rgba(0,0,0,0.5)",
          icnWp_Bottom: "50",
          icnWp_Left: "50",
          icnWp_Right: "50",
          icnWp_Top: "50",
          iconsVAlign: "flex-end",
          imgW_Unit: "%",
          wrpW_Range: 400,
          wrpW_Unit: "px",
          isImgHeightAuto: true,
          sclWBg_backgroundColor: "rgba(0,0,0,0.5)"
        }, "socialInImage", true)));
        break;

      case "preset1":
        setAttributes(_objectSpread(_objectSpread({}, defaultPresetAttrsObj), {}, {
          WrpBg_backgroundColor: "rgba(255,255,255,1)",
          cSepColor: "rgba(132,175,255,1)",
          dscP_Left: "20",
          dscP_Right: "20",
          hov_imgBgP_gradientColor: "linear-gradient(45deg, rgba(0,0,0,0.8) 0% , rgba(0,0,0,0.4) 100%)",
          icnSepH: 38,
          icnSp_Range: 50,
          icnWp_Bottom: "20",
          icnWp_Left: "40",
          icnWp_Right: "40",
          icnWp_Top: "20",
          icnWp_isLinked: false,
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
          imgBeforeEl: true,
          imgBgP_gradientColor: "linear-gradient(45deg, rgba(120,102,255,0.49) 0% , rgba(195,120,242,0.52) 100%)",
          imgMrg_Top: "-100",
          imgMrg_isLinked: false,
          isIconsDevider: true,
          jobP_Bottom: "15",
          jobP_isLinked: false,
          sSepColor: "rgba(202,202,202,1)",
          showCSeparator: true,
          showSSeparator: true,
          wrpBdSd_blur: 20,
          wrpBdSd_hOffset: 0,
          wrpBdSd_shadowColor: "rgba(0,0,0,0.3)",
          wrpBdSd_spread: 0,
          wrpBdSd_vOffset: 5,
          wrpMrg_isLinked: false,
          wrpPad_isLinked: false
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
    }

    setAttributes({
      preset: preset
    });
  };

  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab" // onSelect={onSelect}
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
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Presets", "essential-blocks") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Design Preset", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl // label={__("Design Preset", "essential-blocks")}
    , {
      value: preset,
      options: _constants__WEBPACK_IMPORTED_MODULE_11__.STYLE_PRESETS // onChange={(preset) => setAttributes({ preset })}
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
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController // noUnits
    , {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gap", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.p9LGap,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 100,
      step: 1
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Avatar", "essential-blocks") // initialOpen={false}

    }, !imageUrl && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
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
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Social Profiles", "essential-blocks") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Social Profiles", "essential-blocks"),
      checked: showSocials,
      onChange: function onChange() {
        return setAttributes({
          showSocials: !showSocials
        });
      }
    }), showSocials && /*#__PURE__*/React.createElement(DealSocialProfiles, {
      profiles: socialDetails,
      onProfileAdd: function onProfileAdd(socialDetails) {
        return setAttributes({
          socialDetails: socialDetails
        });
      },
      iconList: IconList
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Separators", "essential-blocks") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Content Separator", "essential-blocks"),
      checked: showCSeparator,
      onChange: function onChange() {
        return setAttributes({
          showCSeparator: !showCSeparator
        });
      }
    }), showSocials && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Social Separator", "essential-blocks"),
      checked: showSSeparator,
      onChange: function onChange() {
        return setAttributes({
          showSSeparator: !showSSeparator
        });
      }
    }))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Container width", "essential-blocks") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(ResponsiveRangeController // noUnits
    , {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Max Width", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.wrapperWidth,
      resRequiredProps: resRequiredProps,
      min: 100,
      max: 2000,
      step: 1
    })), /preset[2,3,4]/i.test(preset || "") && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlay Contents", "essential-blocks") // initialOpen={false}

    }, /preset[3,4]/i.test(preset || "") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.contentsMargin,
      baseLabel: "margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.contentsPad,
      baseLabel: "Padding"
    }), preset === "preset4" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-team-content-vertical-alignments",
      label: "Vertical alignments"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      id: "eb-team-content-vertical-alignments"
    }, _constants__WEBPACK_IMPORTED_MODULE_11__.ContentsVerticalAligns.map(function (_ref4, index) {
      var value = _ref4.value,
          label = _ref4.label;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index // isLarge
        ,
        isSecondary: conVtAlign !== value,
        isPrimary: conVtAlign === value,
        onClick: function onClick() {
          return setAttributes({
            conVtAlign: value
          });
        }
      }, label);
    })))), /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.ovlBdPrefix,
      resRequiredProps: resRequiredProps,
      noShadow: true,
      noBdrHover: true // noBorder
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
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alignments", "essential-blocks")
    }, preset === "preset5" ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-team-avatar-vertical-alignments",
      label: "Avatar/Content Vertical Alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl // label={__("Icons Horizontal Alignment", "essential-blocks")}
    , {
      value: imgCnVtAlign,
      options: _constants__WEBPACK_IMPORTED_MODULE_11__.ContentsVerticalAligns,
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
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl // label={__("Icons Horizontal Alignment", "essential-blocks")}
    , {
      value: iconsJustify,
      options: _constants__WEBPACK_IMPORTED_MODULE_11__.IconsHzAligns,
      onChange: function onChange(iconsJustify) {
        return setAttributes({
          iconsJustify: iconsJustify
        });
      }
    })), preset === "preset3" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-team-icons-alignments",
      label: "Social Icons Vertical Alignments"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl // label={__("Icons Horizontal Alignment", "essential-blocks")}
    , {
      value: iconsVAlign,
      options: _constants__WEBPACK_IMPORTED_MODULE_11__.ContentsVerticalAligns,
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
          imageId: id
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
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.imageWidth,
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_11__.sizeUnitTypes,
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
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.imageHeight,
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_11__.sizeUnitTypes,
      max: 2000
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.imageMarginConst,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.imagePaddingConst,
      baseLabel: "Padding"
    }), /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.prefixImgBd,
      resRequiredProps: resRequiredProps // noShadow
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
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.imgTopBgPrefix,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      noUnits: true,
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.imgTopBgHeight,
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
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_6__.typoPrefix_name,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.tmbNamePaddingConst,
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
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_6__.typoPrefix_job,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.tmbJobPaddingConst,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Description", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Description", "essential-blocks"),
      checked: showDescs,
      onChange: function onChange() {
        return setAttributes({
          showDescs: !showDescs
        });
      }
    }), showDescs && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: descsColor,
      onChange: function onChange(descsColor) {
        return setAttributes({
          descsColor: descsColor
        });
      }
    }), /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_6__.typoPrefix_descs,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.tmbDescsPaddingConst,
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
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.rangeIconSize,
      resRequiredProps: resRequiredProps,
      min: 5,
      max: 300,
      step: 1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      noUnits: true,
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.rangeIconPadding,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 6,
      step: 0.1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      noUnits: true,
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spacing", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.rangeIconDistance,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 100,
      step: 1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      noUnits: true,
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rows Gap", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.rangeIconRowGap,
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
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.sclDeviderPosRight,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 80,
      step: 1
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Hover Effect", "essential-blocks"),
      value: icnEffect,
      options: _constants__WEBPACK_IMPORTED_MODULE_11__.HOVER_EFFECT // onChange={(preset) => setAttributes({ preset })}
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
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.prefixSocialBdShadow,
      resRequiredProps: resRequiredProps,
      noShadow: true // noBorder

    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Container Background ", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.socialWrpBg,
      resRequiredProps: resRequiredProps,
      noMainBgi: true,
      noOverlay: true
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Container Margin Padding ", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.iconsWrapMargin,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.iconsWrapPadding,
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
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.cSepWPrefix,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 800,
      step: 1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.cSepHPrefix,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 20,
      step: 1
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Separator Type", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl // label={__("Design Preset", "essential-blocks")}
    , {
      value: cSepType,
      options: _constants__WEBPACK_IMPORTED_MODULE_11__.separatorTypes // onChange={(preset) => setAttributes({ preset })}
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
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.sSepWPrefix,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 800,
      step: 1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.sSepHPrefix,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 20,
      step: 1
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Separator Type", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl // label={__("Design Preset", "essential-blocks")}
    , {
      value: sSepType,
      options: _constants__WEBPACK_IMPORTED_MODULE_11__.separatorTypes // onChange={(preset) => setAttributes({ preset })}
      ,
      onChange: function onChange(sSepType) {
        setAttributes({
          sSepType: sSepType
        });
      }
    })))), tab.name === "advance" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin & Padding") // initialOpen={true}

    }, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.tmbWrapMarginConst,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.tmbWrapPaddingConst,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background ", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.WrpBgConst,
      resRequiredProps: resRequiredProps
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border & Shadow"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.WrpBdShadowConst,
      resRequiredProps: resRequiredProps // noShadow
      // noBorder

    }))));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_social_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/social-links */ "./src/components/social-links.js");


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
  }), socialInImage && showSocials && /*#__PURE__*/React.createElement(_components_social_links__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  }), /*#__PURE__*/React.createElement(_components_social_links__WEBPACK_IMPORTED_MODULE_1__["default"], {
    socialDetails: profilesOnly,
    icnEffect: icnEffect
  }))))));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
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

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"team-member-block/team-member-block","title":"Team Member","category":"widgets","description":"Present your team members beautifully & gain instant credibility","textdomain":"team-member-block","editorScript":"create-block-team-member-block-editor","supports":{"align":["wide","full"]}}');

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../block.json */ "./block.json");
/**
 * WordPress depencencies
 */


/**
 * Internal dependencies
 */







var _EBTeamMemberControls = EBTeamMemberControls,
    ebConditionalRegisterBlockType = _EBTeamMemberControls.ebConditionalRegisterBlockType;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_7__, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__.TeamMembersIcon,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("team", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("member", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("eb essential", "essential-blocks")],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_6__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map