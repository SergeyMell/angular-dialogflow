(function(global, history, g, m, basePath, thresholds, delegate) {
  var __GUESS__ =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/runtime.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src sync recursive":
/*!******************!*\
  !*** ./src sync ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error('Cannot find module \"' + req + '\".');\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src sync recursive\";\n\n//# sourceURL=webpack://__GUESS__/./src_sync?");

/***/ }),

/***/ "./src/runtime.ts":
/*!************************!*\
  !*** ./src/runtime.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __values = (this && this.__values) || function (o) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator], i = 0;\n    if (m) return m.call(o);\n    return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar GraphNode = /** @class */ (function () {\n    function GraphNode(_node, _map) {\n        this._node = _node;\n        this._map = _map;\n    }\n    Object.defineProperty(GraphNode.prototype, \"probability\", {\n        get: function () {\n            return this._node[0];\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(GraphNode.prototype, \"route\", {\n        get: function () {\n            return this._map.routes[this._node[1]];\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(GraphNode.prototype, \"chunk\", {\n        get: function () {\n            return this._map.chunks[this._node[2]];\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return GraphNode;\n}());\nvar Graph = /** @class */ (function () {\n    function Graph(_graph, _map) {\n        this._graph = _graph;\n        this._map = _map;\n    }\n    Graph.prototype.findMatch = function (route) {\n        var _this = this;\n        var result = this._graph.filter(function (_, i) { return matchRoute(_this._map.routes[i], route); }).pop();\n        if (!result) {\n            return [];\n        }\n        return result.map(function (n) { return new GraphNode(n, _this._map); });\n    };\n    return Graph;\n}());\nvar support = function (feature) {\n    if (typeof document === 'undefined') {\n        return false;\n    }\n    var fakeLink = document.createElement('link');\n    try {\n        if (fakeLink.relList && typeof fakeLink.relList.supports === 'function') {\n            return fakeLink.relList.supports(feature);\n        }\n    }\n    catch (err) {\n        return false;\n    }\n};\nvar linkPrefetchStrategy = function (url) {\n    if (typeof document === 'undefined') {\n        return;\n    }\n    var link = document.createElement('link');\n    link.setAttribute('rel', 'prefetch');\n    link.setAttribute('href', url);\n    var parentElement = document.getElementsByTagName('head')[0] || document.getElementsByName('script')[0].parentNode;\n    parentElement.appendChild(link);\n};\nvar importPrefetchStrategy = function (url) { return Promise.resolve().then(function () { return __webpack_require__(\"./src sync recursive\")(url); }); };\nvar supportedPrefetchStrategy = support('prefetch') ? linkPrefetchStrategy : importPrefetchStrategy;\nvar preFetched = {};\nvar prefetch = function (basePath, url) {\n    url = basePath + url;\n    if (preFetched[url]) {\n        return;\n    }\n    console.log('Pre-fetching', url);\n    preFetched[url] = true;\n    supportedPrefetchStrategy(url);\n};\nvar matchRoute = function (route, declaration) {\n    var routeParts = route.split('/');\n    var declarationParts = declaration.split('/');\n    if (routeParts.length > 0 && routeParts[routeParts.length - 1] === '') {\n        routeParts.pop();\n    }\n    if (declarationParts.length > 0 && declarationParts[declarationParts.length - 1] === '') {\n        declarationParts.pop();\n    }\n    if (routeParts.length !== declarationParts.length) {\n        return false;\n    }\n    else {\n        return declarationParts.reduce(function (a, p, i) {\n            if (p.startsWith(':')) {\n                return a;\n            }\n            return a && p === routeParts[i];\n        }, true);\n    }\n};\nvar polyfillConnection = {\n    effectiveType: '3g'\n};\nvar handleNavigationChange = function (graph, basePath, thresholds, route) {\n    var nodes = graph.findMatch(route);\n    if (!nodes) {\n        return;\n    }\n    var c = navigator.connection || polyfillConnection;\n    var threshold = thresholds[c.effectiveType];\n    try {\n        for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {\n            var node = nodes_1_1.value;\n            if (node.probability < threshold || preFetched[node.chunk]) {\n                continue;\n            }\n            if (node.chunk) {\n                prefetch(basePath, node.chunk);\n            }\n        }\n    }\n    catch (e_1_1) { e_1 = { error: e_1_1 }; }\n    finally {\n        try {\n            if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);\n        }\n        finally { if (e_1) throw e_1.error; }\n    }\n    var e_1, _a;\n};\nvar guessNavigation = function (graph, current, links) {\n    var matches = graph.findMatch(current);\n    if (links) {\n        return links.reduce(function (result, link) {\n            var node = matches.filter(function (m) { return matchRoute(link, m.route); }).pop();\n            if (node) {\n                result[link] = node.probability;\n            }\n            return result;\n        }, {});\n    }\n    return matches.reduce(function (p, n) {\n        p[n.route] = n.probability;\n        return p;\n    }, {});\n};\nexports.guess = function (current, links) {\n    throw new Error('Guess is not initialized');\n};\nexports.initialize = function (history, global, compressed, map, basePath, thresholds, delegate) {\n    var graph = new Graph(compressed, map);\n    exports.guess = function (current, links) { return guessNavigation(graph, current, links); };\n    if (delegate) {\n        return;\n    }\n    if (typeof global.addEventListener === 'function') {\n        global.addEventListener('popstate', function (e) {\n            return handleNavigationChange(graph, basePath, thresholds, location.pathname);\n        });\n    }\n    var pushState = history.pushState;\n    history.pushState = function (state) {\n        if (typeof history.onpushstate === 'function') {\n            history.onpushstate({ state: state });\n        }\n        handleNavigationChange(graph, basePath, thresholds, arguments[2]);\n        return pushState.apply(history, arguments);\n    };\n};\n\n\n//# sourceURL=webpack://__GUESS__/./src/runtime.ts?");

/***/ })

/******/ });
  __GUESS__.initialize(history, global, g, m, basePath, thresholds, delegate);
  global.__GUESS__ = __GUESS__;
})(typeof window === 'undefined' ? global : window, (typeof window === 'undefined' ? global : window).history, [[[0.693,1,0],[0.151,2,1],[0.116,3,2],[0.04,4,3]],[[0.673,0,4],[0.168,5,5],[0.124,6,6],[0.035,4,3]],[[0.741,3,2],[0.224,1,0],[0.034,4,3]],[[0.303,12,10],[0.258,1,0],[0.197,2,1],[0.121,11,9],[0.121,10,12]],[[1,0,4]],[[0.351,6,6],[0.325,9,8],[0.208,0,4],[0.078,7,11],[0.026,8,7],[0.013,1,0]],[[0.338,5,5],[0.309,13,13],[0.118,0,4],[0.103,14,14],[0.088,15,15],[0.015,4,3],[0.015,1,0],[0.015,16,16]],[[0.842,8,7],[0.132,9,8],[0.026,0,4]],[[0.39,17,18],[0.195,18,17],[0.171,0,4],[0.098,7,11],[0.098,6,6],[0.049,9,8]],[[0.722,7,11],[0.222,8,7],[0.056,6,6]],[[0.617,11,9],[0.34,12,10],[0.021,2,1],[0.021,1,0]],[[0.471,10,12],[0.206,1,0],[0.176,12,10],[0.147,2,1]],[[0.575,10,12],[0.175,2,1],[0.125,11,9],[0.1,1,0],[0.025,3,2]],[[0.639,14,14],[0.167,0,4],[0.083,5,5],[0.083,15,15],[0.028,16,16]],[[0.553,16,16],[0.211,13,13],[0.184,15,15],[0.053,5,5]],[[0.313,16,16],[0.25,0,4],[0.25,5,5],[0.156,13,13],[0.031,14,14]],[[0.625,15,15],[0.219,14,14],[0.094,13,13],[0.063,5,5]],[[0.724,18,17],[0.103,0,4],[0.069,9,8],[0.069,6,6],[0.034,7,11]],[[0.483,17,18],[0.241,6,6],[0.138,0,4],[0.069,9,8],[0.034,5,5],[0.034,7,11]]], {"chunks":["main.module.chunk.js","login.module.chunk.js","intro-parent.module.chunk.js",null,"intro.module.chunk.js","kid.module.chunk.js","parent.module.chunk.js","rewards.module.chunk.js","home.module.chunk.js","intro-info.module.chunk.js","intro-reward.module.chunk.js","earn.module.chunk.js","intro-personalize.module.chunk.js","settings.module.chunk.js","parent-home.module.chunk.js","verify.module.chunk.js","faq.module.chunk.js","badges.module.chunk.js","games.module.chunk.js"],"routes":["/intro","/main","/intro/login","/intro/parent","","/main/kid","/main/parent","/main/kid/earn","/main/kid/rewards","/main/kid/home","/intro/parent/personalize","/intro/parent/info","/intro/parent/reward","/main/parent/settings","/main/parent/home","/main/parent/verify","/main/parent/faq","/main/kid/rewards/games","/main/kid/rewards/badges"]}, '/', {"4g":0.15,"3g":0.3,"2g":0.45,"slow-2g":0.6}, false);

webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./badges/badges.module": [
		"./src/app/main/kid/rewards/badges/badges.module.ts",
		"badges.module"
	],
	"./earn/earn.module": [
		"./src/app/main/kid/earn/earn.module.ts",
		"earn.module"
	],
	"./faq/faq.module": [
		"./src/app/main/parent/faq/faq.module.ts",
		"faq.module"
	],
	"./friends/friends.module": [
		"./src/app/main/kid/friends/friends.module.ts",
		"friends.module"
	],
	"./games/games.module": [
		"./src/app/main/kid/rewards/games/games.module.ts",
		"games.module"
	],
	"./home/home.module": [
		"./src/app/main/kid/home/home.module.ts",
		"home.module"
	],
	"./intro-info/intro-info.module": [
		"./src/app/intro/intro-parent/intro-info/intro-info.module.ts",
		"intro-info.module"
	],
	"./intro-parent/intro-parent.module": [
		"./src/app/intro/intro-parent/intro-parent.module.ts",
		"intro-parent.module"
	],
	"./intro-personalize/intro-personalize.module": [
		"./src/app/intro/intro-parent/intro-personalize/intro-personalize.module.ts",
		"intro-personalize.module"
	],
	"./intro-reward/intro-reward.module": [
		"./src/app/intro/intro-parent/intro-reward/intro-reward.module.ts",
		"intro-reward.module"
	],
	"./intro/intro.module": [
		"./src/app/intro/intro.module.ts",
		"intro.module"
	],
	"./kid/kid.module": [
		"./src/app/main/kid/kid.module.ts",
		"kid.module"
	],
	"./login/login.module": [
		"./src/app/intro/login/login.module.ts",
		"login.module"
	],
	"./main/main.module": [
		"./src/app/main/main.module.ts",
		"main.module"
	],
	"./parent-home/parent-home.module": [
		"./src/app/main/parent/parent-home/parent-home.module.ts",
		"parent-home.module"
	],
	"./parent/parent.module": [
		"./src/app/main/parent/parent.module.ts",
		"parent.module"
	],
	"./question/question.module": [
		"./src/app/main/kid/question/question.module.ts",
		"question.module"
	],
	"./reports/reports.module": [
		"./src/app/main/kid/reports/reports.module.ts",
		"reports.module"
	],
	"./rewards/rewards.module": [
		"./src/app/main/kid/rewards/rewards.module.ts",
		"rewards.module"
	],
	"./settings/settings.module": [
		"./src/app/main/parent/settings/settings.module.ts",
		"settings.module"
	],
	"./verify/verify.module": [
		"./src/app/main/parent/verify/verify.module.ts",
		"verify.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/intro\">Intro</a>\n<a routerLink=\"/main\">Main</a>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app.routing-module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* appRoutes */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
var appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'intro'
    },
    {
        loadChildren: './intro/intro.module#IntroModule',
        path: 'intro'
    },
    {
        loadChildren: './main/main.module#MainModule',
        path: 'main'
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map