require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([6],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _vue = __webpack_require__(2);var _vue2 = _interopRequireDefault(_vue);\nvar _App = __webpack_require__(6);var _App2 = _interopRequireDefault(_App);\n\n\n\nvar _xml2json = __webpack_require__(10);var _xml2json2 = _interopRequireDefault(_xml2json);\n\n\n\nvar _movieApi = __webpack_require__(3);var _movieApi2 = _interopRequireDefault(_movieApi);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default; //xml转json工具\n//详细使用见https://github.com/abdmob/x2js\n_vue2.default.prototype.$myXml2Json = new _xml2json2.default(); //movie config\n_vue2.default.prototype.$myMovieApi = _movieApi2.default;\n\n_vue2.default.config.productionTip = false;\n\n_App2.default.mpType = 'app';\n\nvar app = new _vue2.default(_extends({},\n_App2.default));\n\napp.$mount();\n\n//////////////////\n// WEBPACK FOOTER\n// D:/rongjian/mykonw/hbuilderVue/project/DeepNaiWorkshop_dyxf/main.js\n// module id = 4\n// module chunks = 6\n\n//# sourceURL=uni-app:///main.js?6981");

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(7)\n}\nvar normalizeComponent = __webpack_require__(1)\n/* script */\n\n/* template */\nvar __vue_template__ = null\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default.a,\n  __vue_template__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"D:\\\\rongjian\\\\mykonw\\\\hbuilderVue\\\\project\\\\DeepNaiWorkshop_dyxf\\\\App.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-2606e7f2\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-2606e7f2\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/rongjian/mykonw/hbuilderVue/project/DeepNaiWorkshop_dyxf/App.vue\n// module id = 6\n// module chunks = 6\n\n");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-2606e7f2\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"E://HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/rongjian/mykonw/hbuilderVue/project/DeepNaiWorkshop_dyxf/App.vue\n// module id = 7\n// module chunks = 6\n\n");

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var uni = __webpack_require__(0).default;exports.default =\n{\n\tonLaunch: function onLaunch() {\n\t\tconsole.log('App Launch');\n\n\t},\n\tonShow: function onShow() {\n\t\tconsole.log('App Show');\n\t},\n\tonHide: function onHide() {\n\t\tconsole.log('App Hide');\n\t} };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"E://HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"E://HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"E://HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"E://HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"E://HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/uni-loader.js!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/rongjian/mykonw/hbuilderVue/project/DeepNaiWorkshop_dyxf/App.vue\n// module id = 9\n// module chunks = 6\n\n//# sourceURL=uni-app:///App.vue?d2f1");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;};var uni = __webpack_require__(0).default; /*\r\n                                                                                                                                                                                                                                                                                                                        Copyright 2011-2013 Abdulla Abdurakhmanov\r\n                                                                                                                                                                                                                                                                                                                        Original sources are available at https://code.google.com/p/x2js/\r\n                                                                                                                                                                                                                                                                                                                        Licensed under the Apache License, Version 2.0 (the \"License\");\r\n                                                                                                                                                                                                                                                                                                                        you may not use this file except in compliance with the License.\r\n                                                                                                                                                                                                                                                                                                                        You may obtain a copy of the License at\r\n                                                                                                                                                                                                                                                                                                                        http://www.apache.org/licenses/LICENSE-2.0\r\n                                                                                                                                                                                                                                                                                                                        Unless required by applicable law or agreed to in writing, software\r\n                                                                                                                                                                                                                                                                                                                        distributed under the License is distributed on an \"AS IS\" BASIS,\r\n                                                                                                                                                                                                                                                                                                                        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n                                                                                                                                                                                                                                                                                                                        See the License for the specific language governing permissions and\r\n                                                                                                                                                                                                                                                                                                                        limitations under the License.\r\n                                                                                                                                                                                                                                                                                                                        */\n\n\n\n\n(function (root, factory) {\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else if ((typeof exports === \"undefined\" ? \"undefined\" : _typeof(exports)) === \"object\") {\n\t\tmodule.exports = factory();\n\t} else {\n\t\troot.X2JS = factory();\n\t}\n})(undefined, function () {\n\treturn function (config) {\n\t\t'use strict';\n\n\t\tvar VERSION = \"1.2.0\";\n\n\t\tconfig = config || {};\n\t\tinitConfigDefaults();\n\t\tinitRequiredPolyfills();\n\n\t\tfunction initConfigDefaults() {\n\t\t\tif (config.escapeMode === undefined) {\n\t\t\t\tconfig.escapeMode = true;\n\t\t\t}\n\n\t\t\tconfig.attributePrefix = config.attributePrefix || \"_\";\n\t\t\tconfig.arrayAccessForm = config.arrayAccessForm || \"none\";\n\t\t\tconfig.emptyNodeForm = config.emptyNodeForm || \"text\";\n\n\t\t\tif (config.enableToStringFunc === undefined) {\n\t\t\t\tconfig.enableToStringFunc = true;\n\t\t\t}\n\t\t\tconfig.arrayAccessFormPaths = config.arrayAccessFormPaths || [];\n\t\t\tif (config.skipEmptyTextNodesForObj === undefined) {\n\t\t\t\tconfig.skipEmptyTextNodesForObj = true;\n\t\t\t}\n\t\t\tif (config.stripWhitespaces === undefined) {\n\t\t\t\tconfig.stripWhitespaces = true;\n\t\t\t}\n\t\t\tconfig.datetimeAccessFormPaths = config.datetimeAccessFormPaths || [];\n\n\t\t\tif (config.useDoubleQuotes === undefined) {\n\t\t\t\tconfig.useDoubleQuotes = false;\n\t\t\t}\n\n\t\t\tconfig.xmlElementsFilter = config.xmlElementsFilter || [];\n\t\t\tconfig.jsonPropertiesFilter = config.jsonPropertiesFilter || [];\n\n\t\t\tif (config.keepCData === undefined) {\n\t\t\t\tconfig.keepCData = false;\n\t\t\t}\n\t\t}\n\n\t\tvar DOMNodeTypes = {\n\t\t\tELEMENT_NODE: 1,\n\t\t\tTEXT_NODE: 3,\n\t\t\tCDATA_SECTION_NODE: 4,\n\t\t\tCOMMENT_NODE: 8,\n\t\t\tDOCUMENT_NODE: 9 };\n\n\n\t\tfunction initRequiredPolyfills() {\n\t\t}\n\n\t\tfunction getNodeLocalName(node) {\n\t\t\tvar nodeLocalName = node.localName;\n\t\t\tif (nodeLocalName == null) // Yeah, this is IE!! \n\t\t\t\tnodeLocalName = node.baseName;\n\t\t\tif (nodeLocalName == null || nodeLocalName == \"\") // ==\"\" is IE too\n\t\t\t\tnodeLocalName = node.nodeName;\n\t\t\treturn nodeLocalName;\n\t\t}\n\n\t\tfunction getNodePrefix(node) {\n\t\t\treturn node.prefix;\n\t\t}\n\n\t\tfunction escapeXmlChars(str) {\n\t\t\tif (typeof str == \"string\")\n\t\t\treturn str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;').replace(/'/g, '&apos;');else\n\n\t\t\treturn str;\n\t\t}\n\n\t\tfunction unescapeXmlChars(str) {\n\t\t\treturn str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '\"').replace(/&apos;/g, \"'\").replace(/&amp;/g, '&');\n\t\t}\n\n\t\tfunction checkInStdFiltersArrayForm(stdFiltersArrayForm, obj, name, path) {\n\t\t\tvar idx = 0;\n\t\t\tfor (; idx < stdFiltersArrayForm.length; idx++) {\n\t\t\t\tvar filterPath = stdFiltersArrayForm[idx];\n\t\t\t\tif (typeof filterPath === \"string\") {\n\t\t\t\t\tif (filterPath == path)\n\t\t\t\t\tbreak;\n\t\t\t\t} else\n\n\t\t\t\tif (filterPath instanceof RegExp) {\n\t\t\t\t\tif (filterPath.test(path))\n\t\t\t\t\tbreak;\n\t\t\t\t} else\n\n\t\t\t\tif (typeof filterPath === \"function\") {\n\t\t\t\t\tif (filterPath(obj, name, path))\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn idx != stdFiltersArrayForm.length;\n\t\t}\n\n\t\tfunction toArrayAccessForm(obj, childName, path) {\n\t\t\tswitch (config.arrayAccessForm) {\n\t\t\t\tcase \"property\":\n\t\t\t\t\tif (!(obj[childName] instanceof Array))\n\t\t\t\t\tobj[childName + \"_asArray\"] = [obj[childName]];else\n\n\t\t\t\t\tobj[childName + \"_asArray\"] = obj[childName];\n\t\t\t\t\tbreak;\n\t\t\t\t/*case \"none\":\r\n            \tbreak;*/}\n\n\n\t\t\tif (!(obj[childName] instanceof Array) && config.arrayAccessFormPaths.length > 0) {\n\t\t\t\tif (checkInStdFiltersArrayForm(config.arrayAccessFormPaths, obj, childName, path)) {\n\t\t\t\t\tobj[childName] = [obj[childName]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tfunction fromXmlDateTime(prop) {\n\t\t\t// Implementation based up on http://stackoverflow.com/questions/8178598/xml-datetime-to-javascript-date-object\n\t\t\t// Improved to support full spec and optional parts\n\t\t\tvar bits = prop.split(/[-T:+Z]/g);\n\n\t\t\tvar d = new Date(bits[0], bits[1] - 1, bits[2]);\n\t\t\tvar secondBits = bits[5].split(\"\\.\");\n\t\t\td.setHours(bits[3], bits[4], secondBits[0]);\n\t\t\tif (secondBits.length > 1)\n\t\t\td.setMilliseconds(secondBits[1]);\n\n\t\t\t// Get supplied time zone offset in minutes\n\t\t\tif (bits[6] && bits[7]) {\n\t\t\t\tvar offsetMinutes = bits[6] * 60 + Number(bits[7]);\n\t\t\t\tvar sign = /\\d\\d-\\d\\d:\\d\\d$/.test(prop) ? '-' : '+';\n\n\t\t\t\t// Apply the sign\n\t\t\t\toffsetMinutes = 0 + (sign == '-' ? -1 * offsetMinutes : offsetMinutes);\n\n\t\t\t\t// Apply offset and local timezone\n\t\t\t\td.setMinutes(d.getMinutes() - offsetMinutes - d.getTimezoneOffset());\n\t\t\t} else\n\n\t\t\tif (prop.indexOf(\"Z\", prop.length - 1) !== -1) {\n\t\t\t\td = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()));\n\t\t\t}\n\n\t\t\t// d is now a local time equivalent to the supplied time\n\t\t\treturn d;\n\t\t}\n\n\t\tfunction checkFromXmlDateTimePaths(value, childName, fullPath) {\n\t\t\tif (config.datetimeAccessFormPaths.length > 0) {\n\t\t\t\tvar path = fullPath.split(\"\\.#\")[0];\n\t\t\t\tif (checkInStdFiltersArrayForm(config.datetimeAccessFormPaths, value, childName, path)) {\n\t\t\t\t\treturn fromXmlDateTime(value);\n\t\t\t\t} else\n\n\t\t\t\treturn value;\n\t\t\t} else\n\n\t\t\treturn value;\n\t\t}\n\n\t\tfunction checkXmlElementsFilter(obj, childType, childName, childPath) {\n\t\t\tif (childType == DOMNodeTypes.ELEMENT_NODE && config.xmlElementsFilter.length > 0) {\n\t\t\t\treturn checkInStdFiltersArrayForm(config.xmlElementsFilter, obj, childName, childPath);\n\t\t\t} else\n\n\t\t\treturn true;\n\t\t}\n\n\t\tfunction parseDOMChildren(node, path) {\n\t\t\tif (node.nodeType == DOMNodeTypes.DOCUMENT_NODE) {\n\t\t\t\tvar result = new Object();\n\t\t\t\tvar nodeChildren = node.childNodes;\n\t\t\t\t// Alternative for firstElementChild which is not supported in some environments\n\t\t\t\tfor (var cidx = 0; cidx < nodeChildren.length; cidx++) {\n\t\t\t\t\tvar child = nodeChildren.item(cidx);\n\t\t\t\t\tif (child.nodeType == DOMNodeTypes.ELEMENT_NODE) {\n\t\t\t\t\t\tvar childName = getNodeLocalName(child);\n\t\t\t\t\t\tresult[childName] = parseDOMChildren(child, childName);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treturn result;\n\t\t\t} else\n\n\t\t\tif (node.nodeType == DOMNodeTypes.ELEMENT_NODE) {\n\t\t\t\tvar result = new Object();\n\t\t\t\tresult.__cnt = 0;\n\n\t\t\t\tvar nodeChildren = node.childNodes;\n\n\t\t\t\t// Children nodes\n\t\t\t\tfor (var cidx = 0; cidx < nodeChildren.length; cidx++) {\n\t\t\t\t\tvar child = nodeChildren.item(cidx); // nodeChildren[cidx];\n\t\t\t\t\tvar childName = getNodeLocalName(child);\n\n\t\t\t\t\tif (child.nodeType != DOMNodeTypes.COMMENT_NODE) {\n\t\t\t\t\t\tvar childPath = path + \".\" + childName;\n\t\t\t\t\t\tif (checkXmlElementsFilter(result, child.nodeType, childName, childPath)) {\n\t\t\t\t\t\t\tresult.__cnt++;\n\t\t\t\t\t\t\tif (result[childName] == null) {\n\t\t\t\t\t\t\t\tresult[childName] = parseDOMChildren(child, childPath);\n\t\t\t\t\t\t\t\ttoArrayAccessForm(result, childName, childPath);\n\t\t\t\t\t\t\t} else\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tif (result[childName] != null) {\n\t\t\t\t\t\t\t\t\tif (!(result[childName] instanceof Array)) {\n\t\t\t\t\t\t\t\t\t\tresult[childName] = [result[childName]];\n\t\t\t\t\t\t\t\t\t\ttoArrayAccessForm(result, childName, childPath);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tresult[childName][result[childName].length] = parseDOMChildren(child, childPath);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Attributes\n\t\t\t\tfor (var aidx = 0; aidx < node.attributes.length; aidx++) {\n\t\t\t\t\tvar attr = node.attributes.item(aidx); // [aidx];\n\t\t\t\t\tresult.__cnt++;\n\t\t\t\t\tresult[config.attributePrefix + attr.name] = attr.value;\n\t\t\t\t}\n\n\t\t\t\t// Node namespace prefix\n\t\t\t\tvar nodePrefix = getNodePrefix(node);\n\t\t\t\tif (nodePrefix != null && nodePrefix != \"\") {\n\t\t\t\t\tresult.__cnt++;\n\t\t\t\t\tresult.__prefix = nodePrefix;\n\t\t\t\t}\n\n\t\t\t\tif (result[\"#text\"] != null) {\n\t\t\t\t\tresult.__text = result[\"#text\"];\n\t\t\t\t\tif (result.__text instanceof Array) {\n\t\t\t\t\t\tresult.__text = result.__text.join(\"\\n\");\n\t\t\t\t\t}\n\t\t\t\t\t//if(config.escapeMode)\n\t\t\t\t\t//\tresult.__text = unescapeXmlChars(result.__text);\n\t\t\t\t\tif (config.stripWhitespaces)\n\t\t\t\t\tresult.__text = result.__text.trim();\n\t\t\t\t\tdelete result[\"#text\"];\n\t\t\t\t\tif (config.arrayAccessForm == \"property\")\n\t\t\t\t\tdelete result[\"#text_asArray\"];\n\t\t\t\t\tresult.__text = checkFromXmlDateTimePaths(result.__text, childName, path + \".\" + childName);\n\t\t\t\t}\n\t\t\t\tif (result[\"#cdata-section\"] != null) {\n\t\t\t\t\tresult.__cdata = result[\"#cdata-section\"];\n\t\t\t\t\tdelete result[\"#cdata-section\"];\n\t\t\t\t\tif (config.arrayAccessForm == \"property\")\n\t\t\t\t\tdelete result[\"#cdata-section_asArray\"];\n\t\t\t\t}\n\n\t\t\t\tif (result.__cnt == 0 && config.emptyNodeForm == \"text\") {\n\t\t\t\t\tresult = '';\n\t\t\t\t} else\n\n\t\t\t\tif (result.__cnt == 1 && result.__text != null) {\n\t\t\t\t\tresult = result.__text;\n\t\t\t\t} else\n\n\t\t\t\tif (result.__cnt == 1 && result.__cdata != null && !config.keepCData) {\n\t\t\t\t\tresult = result.__cdata;\n\t\t\t\t} else\n\n\t\t\t\tif (result.__cnt > 1 && result.__text != null && config.skipEmptyTextNodesForObj) {\n\t\t\t\t\tif (config.stripWhitespaces && result.__text == \"\" || result.__text.trim() == \"\") {\n\t\t\t\t\t\tdelete result.__text;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tdelete result.__cnt;\n\n\t\t\t\tif (config.enableToStringFunc && (result.__text != null || result.__cdata != null)) {\n\t\t\t\t\tresult.toString = function () {\n\t\t\t\t\t\treturn (this.__text != null ? this.__text : '') + (this.__cdata != null ? this.__cdata : '');\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\treturn result;\n\t\t\t} else\n\n\t\t\tif (node.nodeType == DOMNodeTypes.TEXT_NODE || node.nodeType == DOMNodeTypes.CDATA_SECTION_NODE) {\n\t\t\t\treturn node.nodeValue;\n\t\t\t}\n\t\t}\n\n\t\tfunction startTag(jsonObj, element, attrList, closed) {\n\t\t\tvar resultStr = \"<\" + (jsonObj != null && jsonObj.__prefix != null ? jsonObj.__prefix + \":\" : \"\") + element;\n\t\t\tif (attrList != null) {\n\t\t\t\tfor (var aidx = 0; aidx < attrList.length; aidx++) {\n\t\t\t\t\tvar attrName = attrList[aidx];\n\t\t\t\t\tvar attrVal = jsonObj[attrName];\n\t\t\t\t\tif (config.escapeMode)\n\t\t\t\t\tattrVal = escapeXmlChars(attrVal);\n\t\t\t\t\tresultStr += \" \" + attrName.substr(config.attributePrefix.length) + \"=\";\n\t\t\t\t\tif (config.useDoubleQuotes)\n\t\t\t\t\tresultStr += '\"' + attrVal + '\"';else\n\n\t\t\t\t\tresultStr += \"'\" + attrVal + \"'\";\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (!closed)\n\t\t\tresultStr += \">\";else\n\n\t\t\tresultStr += \"/>\";\n\t\t\treturn resultStr;\n\t\t}\n\n\t\tfunction endTag(jsonObj, elementName) {\n\t\t\treturn \"</\" + (jsonObj.__prefix != null ? jsonObj.__prefix + \":\" : \"\") + elementName + \">\";\n\t\t}\n\n\t\tfunction endsWith(str, suffix) {\n\t\t\treturn str.indexOf(suffix, str.length - suffix.length) !== -1;\n\t\t}\n\n\t\tfunction jsonXmlSpecialElem(jsonObj, jsonObjField) {\n\t\t\tif (config.arrayAccessForm == \"property\" && endsWith(jsonObjField.toString(), \"_asArray\") ||\n\t\t\tjsonObjField.toString().indexOf(config.attributePrefix) == 0 ||\n\t\t\tjsonObjField.toString().indexOf(\"__\") == 0 ||\n\t\t\tjsonObj[jsonObjField] instanceof Function)\n\t\t\treturn true;else\n\n\t\t\treturn false;\n\t\t}\n\n\t\tfunction jsonXmlElemCount(jsonObj) {\n\t\t\tvar elementsCnt = 0;\n\t\t\tif (jsonObj instanceof Object) {\n\t\t\t\tfor (var it in jsonObj) {\n\t\t\t\t\tif (jsonXmlSpecialElem(jsonObj, it))\n\t\t\t\t\tcontinue;\n\t\t\t\t\telementsCnt++;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn elementsCnt;\n\t\t}\n\n\t\tfunction checkJsonObjPropertiesFilter(jsonObj, propertyName, jsonObjPath) {\n\t\t\treturn config.jsonPropertiesFilter.length == 0 ||\n\t\t\tjsonObjPath == \"\" ||\n\t\t\tcheckInStdFiltersArrayForm(config.jsonPropertiesFilter, jsonObj, propertyName, jsonObjPath);\n\t\t}\n\n\t\tfunction parseJSONAttributes(jsonObj) {\n\t\t\tvar attrList = [];\n\t\t\tif (jsonObj instanceof Object) {\n\t\t\t\tfor (var ait in jsonObj) {\n\t\t\t\t\tif (ait.toString().indexOf(\"__\") == -1 && ait.toString().indexOf(config.attributePrefix) == 0) {\n\t\t\t\t\t\tattrList.push(ait);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn attrList;\n\t\t}\n\n\t\tfunction parseJSONTextAttrs(jsonTxtObj) {\n\t\t\tvar result = \"\";\n\n\t\t\tif (jsonTxtObj.__cdata != null) {\n\t\t\t\tresult += \"<![CDATA[\" + jsonTxtObj.__cdata + \"]]>\";\n\t\t\t}\n\n\t\t\tif (jsonTxtObj.__text != null) {\n\t\t\t\tif (config.escapeMode)\n\t\t\t\tresult += escapeXmlChars(jsonTxtObj.__text);else\n\n\t\t\t\tresult += jsonTxtObj.__text;\n\t\t\t}\n\t\t\treturn result;\n\t\t}\n\n\t\tfunction parseJSONTextObject(jsonTxtObj) {\n\t\t\tvar result = \"\";\n\n\t\t\tif (jsonTxtObj instanceof Object) {\n\t\t\t\tresult += parseJSONTextAttrs(jsonTxtObj);\n\t\t\t} else\n\n\t\t\tif (jsonTxtObj != null) {\n\t\t\t\tif (config.escapeMode)\n\t\t\t\tresult += escapeXmlChars(jsonTxtObj);else\n\n\t\t\t\tresult += jsonTxtObj;\n\t\t\t}\n\n\t\t\treturn result;\n\t\t}\n\n\t\tfunction getJsonPropertyPath(jsonObjPath, jsonPropName) {\n\t\t\tif (jsonObjPath === \"\") {\n\t\t\t\treturn jsonPropName;\n\t\t\t} else\n\n\t\t\treturn jsonObjPath + \".\" + jsonPropName;\n\t\t}\n\n\t\tfunction parseJSONArray(jsonArrRoot, jsonArrObj, attrList, jsonObjPath) {\n\t\t\tvar result = \"\";\n\t\t\tif (jsonArrRoot.length == 0) {\n\t\t\t\tresult += startTag(jsonArrRoot, jsonArrObj, attrList, true);\n\t\t\t} else\n\t\t\t{\n\t\t\t\tfor (var arIdx = 0; arIdx < jsonArrRoot.length; arIdx++) {\n\t\t\t\t\tresult += startTag(jsonArrRoot[arIdx], jsonArrObj, parseJSONAttributes(jsonArrRoot[arIdx]), false);\n\t\t\t\t\tresult += parseJSONObject(jsonArrRoot[arIdx], getJsonPropertyPath(jsonObjPath, jsonArrObj));\n\t\t\t\t\tresult += endTag(jsonArrRoot[arIdx], jsonArrObj);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn result;\n\t\t}\n\n\t\tfunction parseJSONObject(jsonObj, jsonObjPath) {\n\t\t\tvar result = \"\";\n\n\t\t\tvar elementsCnt = jsonXmlElemCount(jsonObj);\n\n\t\t\tif (elementsCnt > 0) {\n\t\t\t\tfor (var it in jsonObj) {\n\n\t\t\t\t\tif (jsonXmlSpecialElem(jsonObj, it) || jsonObjPath != \"\" && !checkJsonObjPropertiesFilter(jsonObj, it, getJsonPropertyPath(jsonObjPath, it)))\n\t\t\t\t\tcontinue;\n\n\t\t\t\t\tvar subObj = jsonObj[it];\n\n\t\t\t\t\tvar attrList = parseJSONAttributes(subObj);\n\n\t\t\t\t\tif (subObj == null || subObj == undefined) {\n\t\t\t\t\t\tresult += startTag(subObj, it, attrList, true);\n\t\t\t\t\t} else\n\n\t\t\t\t\tif (subObj instanceof Object) {\n\n\t\t\t\t\t\tif (subObj instanceof Array) {\n\t\t\t\t\t\t\tresult += parseJSONArray(subObj, it, attrList, jsonObjPath);\n\t\t\t\t\t\t} else\n\t\t\t\t\t\tif (subObj instanceof Date) {\n\t\t\t\t\t\t\tresult += startTag(subObj, it, attrList, false);\n\t\t\t\t\t\t\tresult += subObj.toISOString();\n\t\t\t\t\t\t\tresult += endTag(subObj, it);\n\t\t\t\t\t\t} else\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tvar subObjElementsCnt = jsonXmlElemCount(subObj);\n\t\t\t\t\t\t\tif (subObjElementsCnt > 0 || subObj.__text != null || subObj.__cdata != null) {\n\t\t\t\t\t\t\t\tresult += startTag(subObj, it, attrList, false);\n\t\t\t\t\t\t\t\tresult += parseJSONObject(subObj, getJsonPropertyPath(jsonObjPath, it));\n\t\t\t\t\t\t\t\tresult += endTag(subObj, it);\n\t\t\t\t\t\t\t} else\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tresult += startTag(subObj, it, attrList, true);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} else\n\t\t\t\t\t{\n\t\t\t\t\t\tresult += startTag(subObj, it, attrList, false);\n\t\t\t\t\t\tresult += parseJSONTextObject(subObj);\n\t\t\t\t\t\tresult += endTag(subObj, it);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tresult += parseJSONTextObject(jsonObj);\n\n\t\t\treturn result;\n\t\t}\n\n\t\tthis.parseXmlString = function (xmlDocStr) {\n\t\t\t//注释了官方的代码\n\t\t\t/*\r\n   var isIEParser = (window&&window.ActiveXObject) || \"ActiveXObject\" in window;\r\n   if (xmlDocStr === undefined) {\r\n   \treturn null;\r\n   }\r\n   \r\n   var xmlDoc;\r\n   window.DOMParser\r\n   if (window.DOMParser) {\r\n   \tvar parser=new window.DOMParser();\t\t\t\r\n   \tvar parsererrorNS = null;\r\n   \t// IE9+ now is here\r\n   \tif(!isIEParser) {\r\n   \t\ttry {\r\n   \t\t\tparsererrorNS = parser.parseFromString(\"INVALID\", \"text/xml\").getElementsByTagName(\"parsererror\")[0].namespaceURI;\r\n   \t\t}\r\n   \t\tcatch(err) {\t\t\t\t\t\r\n   \t\t\tparsererrorNS = null;\r\n   \t\t}\r\n   \t}\r\n   \ttry {\r\n   \t\txmlDoc = parser.parseFromString( xmlDocStr, \"text/xml\" );\r\n   \t\tif( parsererrorNS!= null && xmlDoc.getElementsByTagNameNS(parsererrorNS, \"parsererror\").length > 0) {\r\n   \t\t\t//throw new Error('Error parsing XML: '+xmlDocStr);\r\n   \t\t\txmlDoc = null;\r\n   \t\t}\r\n   \t}\r\n   \tcatch(err) {\r\n   \t\txmlDoc = null;\r\n   \t}\r\n   }\r\n   else {\r\n   \t// IE :(\r\n   \tif(xmlDocStr.indexOf(\"<?\")==0) {\r\n   \t\txmlDocStr = xmlDocStr.substr( xmlDocStr.indexOf(\"?>\") + 2 );\r\n   \t}\r\n   \txmlDoc=new ActiveXObject(\"Microsoft.XMLDOM\");\r\n   \txmlDoc.async=\"false\";\r\n   \txmlDoc.loadXML(xmlDocStr);\r\n   }\r\n   */\n\t\t\tvar xmlDoc = null;\n\t\t\tvar parser = new DOMParser();\n\t\t\ttry {\n\t\t\t\txmlDoc = parser.parseFromString(xmlDocStr, \"text/xml\");\n\t\t\t} catch (err) {\n\n\t\t\t}\n\n\t\t\treturn xmlDoc;\n\t\t};\n\n\t\tthis.asArray = function (prop) {\n\t\t\tif (prop === undefined || prop == null)\n\t\t\treturn [];else\n\n\t\t\tif (prop instanceof Array)\n\t\t\treturn prop;else\n\n\t\t\treturn [prop];\n\t\t};\n\n\t\tthis.toXmlDateTime = function (dt) {\n\t\t\tif (dt instanceof Date)\n\t\t\treturn dt.toISOString();else\n\n\t\t\tif (typeof dt === 'number')\n\t\t\treturn new Date(dt).toISOString();else\n\n\t\t\treturn null;\n\t\t};\n\n\t\tthis.asDateTime = function (prop) {\n\t\t\tif (typeof prop == \"string\") {\n\t\t\t\treturn fromXmlDateTime(prop);\n\t\t\t} else\n\n\t\t\treturn prop;\n\t\t};\n\n\t\tthis.xml2json = function (xmlDoc) {\n\t\t\treturn parseDOMChildren(xmlDoc);\n\t\t};\n\n\t\tthis.xml_str2json = function (xmlDocStr) {\n\t\t\tvar xmlDoc = this.parseXmlString(xmlDocStr);\n\t\t\tif (xmlDoc != null)\n\t\t\treturn this.xml2json(xmlDoc);else\n\n\t\t\treturn null;\n\t\t};\n\n\t\tthis.json2xml_str = function (jsonObj) {\n\t\t\treturn parseJSONObject(jsonObj, \"\");\n\t\t};\n\n\t\tthis.json2xml = function (jsonObj) {\n\t\t\tvar xmlDocStr = this.json2xml_str(jsonObj);\n\t\t\treturn this.parseXmlString(xmlDocStr);\n\t\t};\n\n\t\tthis.getVersion = function () {\n\t\t\treturn VERSION;\n\t\t};\n\t};\n});\n\n//////////////////\n// WEBPACK FOOTER\n// D:/rongjian/mykonw/hbuilderVue/project/DeepNaiWorkshop_dyxf/common/xml2json.js\n// module id = 10\n// module chunks = 6\n\n//# sourceURL=uni-app:///common/xml2json.js?3e30");

/***/ })
],[4]);