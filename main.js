(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li\n{\n\tbackground-color: lightgreen;\n\tmargin: 5px;\n\tpadding:  07px 36px 07px 36px;\n\tlist-style: none;\n\tdisplay: inline-block;\n}\nli:hover\n{\n\tbackground-color: lightcyan;\n\tcolor: black;\n\tcursor: pointer;\n}\n#header{\n\tdisplay: sticky;\n\tbackground-color: rgba(60,10,10,0.5);\n\tcolor: white;\n\theight: 100px;\n}\n#header ul{\n\tfloat: right;\n}\na{\n\tcolor: red;\n\ttext-decoration: none;\n}\n#header hr\n{\n\tfloat: center;\n}\n#products\n{\n\theight: 4300px;\n\tbackground-color: linen;\n}\nhr{\n\tbackground-color: red;\n}\n/*\n#image{\n\theight: 300px;\n\tdisplay: inline-block;\n\twidth: 100%;\n}\n\n#image1\n{\n\twidth: 24%;\n\theight: 300px;\n\tbackground-image: url(\"../image.jpeg\");\n\tbackground-position: center;\n\tdisplay: inline-block;\n\tmargin: 0px 3px 1px 17px;\n\tcursor: pointer;\n}\n\n#image2\n{\n\twidth: 24%;\n\theight: 300px;\n\tbackground-image: url(\"../a.jpeg\");\n\tbackground-position: center;\n\tdisplay: inline-block;\n\tmargin: 0px 3px 1px 1px;\n}\n#image3\n{\n\twidth: 24%;\n\theight: 300px;\n\tbackground-image: url(\"../image.jpeg\");\n\tbackground-position: center;\n\tdisplay: inline-block;\n\tmargin: 0px 3px 1px 1px;\n}\n#image4\n{\n\twidth: 24%;\n\theight: 300px;\n\tbackground-image: url(\"../b.jpeg\");\n\tbackground-position: center;\n\tdisplay: inline-block;\n\tmargin: 0px 3px 1px 1px;\n}*/\n/*#footer\n{\n\twidth: 100%;\n\theight: 150px;\n\tbackground-color: rgba(0%,0%,0%,0.6);\n\tdisplay: inline-block;\n}\n*/\n#logo\n{\n\tbackground-image: url('logo.jpg');\n\twidth: 340px;\n\theight: 70px;\n\tfloat: left;\n\tmargin-top: -20px;\n\tmargin-left: 17px;\n\tbackground-position: center;\n}\n#foot1\n{\n\tdisplay: inline-block;\n\tbox-shadow: 4px 4px 4px red;\n\tmargin: 3px;\n\twidth: 19%;\n\theight: 97%;\n}\n#foot2\n{\n\tdisplay: inline-block;\n\tbox-shadow: 4px 4px 4px red;\n\tmargin: 3px;\n\t\n\twidth: 19%;\n\theight: 97%;\n}\n#foot3\n{\n\tdisplay: inline-block;\n\tmargin: 3px;\n\t\n\tbox-shadow: 4px 4px 4px red;\n\twidth: 19%;\n\theight: 97%;\n}\n#foot4\n{\n\tdisplay: inline-block;\n\tbox-shadow: 4px 4px 4px red;\n\tmargin: 3px;\n\t\n\twidth: 19%;\n\theight: 97%;\n}\n#foot5\n{\n\tdisplay: inline-block;\n\tbox-shadow: 4px 4px 4px red;\n\twidth: 19%;\n\tmargin: 3px;\n\theight: 97%;\n}\n#image img{\n\twidth: 200px;\n}\n#outer{\n\n\n}\n#image{\n\t/*position: relative;*/\n\twidth: 800px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n        <h2 align=\"center\" id=\"hh\"> {{dis}}</h2>\n        <!-- <br/> -->\n        <!-- <hr width=\"50%\" color=\"silver\" size=\"05px\"> -->\n        <!-- <br/> -->\n        <div id=\"logo\">\n                        \n        </div>\n        <ul>\n                <li><a [routerLink] =\"['/home']\">Home</a></li>\n                <li><a [routerLink] =\"['/mobile']\">Mobiles</a></li>\n                <li><a [routerLink] =\"['/ele']\">Electronics</a></li>\n                <li><a [routerLink] =\"['/venky']\">Books</a></li>\n                <li><a [routerLink] =\"['/cloths']\">Clooths</a></li>\n\n        </ul>\n</div>\n<div id=\"outer\">\n<div id=\"image\">\n        <div id=\"image1\" onclick=\"#\"></div>\n        <div id=\"image2\"></div>\n        <div id=\"image3\"></div>\n        <div id=\"image4\"></div>\n</div>\n    </div>\n<div id=\"products\">\n        <router-outlet></router-outlet>\n        <!-- <app-mob-parts>linking</app-mob-parts>\n        <hr width=\"70%\" size=\"05px\">\n        <app-books></app-books>\n        <hr width=\"70%\" size=\"05px\">\n        <app-clooths></app-clooths>\n        <hr width=\"70%\" size=\"05px\">\n        <app-electronics></app-electronics> -->\n</div>\n<!-- <div id=\"footer\">\n      <div id=\"foot1\"></div>\n      <div id=\"foot2\"></div>\n      <div id=\"foot3\"></div>\n      <div id=\"foot4\"></div>\n      <div id=\"foot5\"></div>  \n</div> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: Comp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comp", function() { return Comp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Comp = /** @class */ (function () {
    function Comp() {
        this.dis = "Welcome to number 1 online shopping !";
    }
    Comp = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], Comp);
    return Comp;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: Mod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mod", function() { return Mod; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mob_parts_mob_parts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mob-parts/mob-parts.component */ "./src/app/mob-parts/mob-parts.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _clooths_clooths_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clooths/clooths.component */ "./src/app/clooths/clooths.component.ts");
/* harmony import */ var _electronics_electronics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./electronics/electronics.component */ "./src/app/electronics/electronics.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _dummy_module_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//dummy-module.module */ "./src/app/dummy-module.module.ts");
/* harmony import */ var _mob_parts_mobdata_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mob-parts/mobdata.services */ "./src/app/mob-parts/mobdata.services.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var Mod = /** @class */ (function () {
    function Mod() {
    }
    Mod = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["Comp"], _mob_parts_mob_parts_component__WEBPACK_IMPORTED_MODULE_4__["MobPartsComponent"], _books_books_component__WEBPACK_IMPORTED_MODULE_5__["BooksComponent"], _clooths_clooths_component__WEBPACK_IMPORTED_MODULE_6__["CloothsComponent"], _electronics_electronics_component__WEBPACK_IMPORTED_MODULE_7__["ElectronicsComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _dummy_module_module__WEBPACK_IMPORTED_MODULE_10__["DummyModuleModule"], _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["Comp"]],
            providers: [_mob_parts_mobdata_services__WEBPACK_IMPORTED_MODULE_11__["MobDataService"]]
        })
    ], Mod);
    return Mod;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\t\t\tli{\n\t\t\t\t\tlist-style: none;\n\t\t\t\t\tborder-radius: 0px 40px 40px 40px;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tmargin: 10px;\n\t\t\t\t\tpadding: 25px;\n\t\t\t\t\twidth: 300px;\n\t\t\t\t\tbox-shadow: 0px 0px 15px black;\n\t\t\t\t\tcolor: black;\n\t\t\t\t\tbackground-color: white;\n\n\t\t\t\t}\n\t\t\t\tli:hover\n\t\t\t\t{\n\t\t\t\t\tbackground-color: lightgrey;\n\t\t\t\t\tcolor: black;\n\t\t\t\t}\n\t\t\t\tbody{\n\t\t\t\t\tmargin: 0px;\n\t\t\t\t\tpadding: 0px;\n\t\t\t\t}\n\t\t\t\th1{\n\t\t\t\t\tcolor: red;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tfont-size: 50px;\n\t\t\t\t\ttext-shadow: 0px 0px 15px grey;\n\t\t\t\t}"

/***/ }),

/***/ "./src/app/books/books.component.html":
/*!********************************************!*\
  !*** ./src/app/books/books.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Welcome To Books...</h2>\n<h2 align=\"center\">Total number of produts is {{calc()}}</h2>\n<ul align=\"center\">\n          <li *ngFor=\"let vari of Books\">\n            <h2>Name : {{vari.Name | uppercase}}</h2>\n            <h2>Author : {{vari.Author}}</h2>\n            <h2>Price : {{vari.Price | currency:'INR'}}</h2>\n            <h3>Pages : {{vari.Pages}}</h3>\n            <h3>Stock : {{vari.Stock}}</h3>\n            <h4 *ngIf=\"vari.Stock >= 1\">{{vari.Stock}} in stock(s)</h4>\n            <h4 *ngIf=\"vari.Stock < 1\">out of stock(s)</h4>\n          </li>\n      </ul>"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mocks */ "./src/app/books/mocks.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksComponent = /** @class */ (function () {
    function BooksComponent() {
    }
    BooksComponent.prototype.ngOnInit = function () {
        this.Books = _mocks__WEBPACK_IMPORTED_MODULE_1__["BOOK"];
    };
    BooksComponent.prototype.calc = function () {
        var add = 0;
        for (var _i = 0, _a = this.Books; _i < _a.length; _i++) {
            var temp = _a[_i];
            add = add + temp.Stock;
        }
        return add;
    };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/books/mocks.ts":
/*!********************************!*\
  !*** ./src/app/books/mocks.ts ***!
  \********************************/
/*! exports provided: BOOK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOK", function() { return BOOK; });
var BOOK = [{
        Name: "C",
        Author: "Yashwant",
        Price: 350,
        Pages: 480,
        Stock: 14
    },
    {
        Name: "C++",
        Author: "Yashwant",
        Price: 550,
        Pages: 980,
        Stock: 27
    },
    {
        Name: "C#",
        Author: "Strostrup",
        Price: 250,
        Pages: 80,
        Stock: 84
    },
    {
        Name: "JAVA",
        Author: "Ebalguruswami",
        Price: 950,
        Pages: 1480,
        Stock: 90
    }
];


/***/ }),

/***/ "./src/app/clooths/clooths.component.css":
/*!***********************************************!*\
  !*** ./src/app/clooths/clooths.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\t\t\tli{\n\t\t\t\t\tlist-style: none;\n\t\t\t\t\tborder-radius: 0px 40px 40px 40px;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tmargin: 10px;\n\t\t\t\t\tpadding: 25px;\n\t\t\t\t\twidth: 300px;\n\t\t\t\t\tbox-shadow: 0px 0px 15px black;\n\t\t\t\t\tcolor: black;background-color: white;\n\n\t\t\t\t}\n\t\t\t\tli:hover\n\t\t\t\t{\n\t\t\t\t\tbackground-color: lightgrey;\n\t\t\t\t\tcolor: black;\n\t\t\t\t}\n\t\t\t\tbody{\n\t\t\t\t\tmargin: 0px;\n\t\t\t\t\tpadding: 0px;\n\t\t\t\t}\n\t\t\t\th1{\n\t\t\t\t\tcolor: red;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tfont-size: 50px;\n\t\t\t\t\ttext-shadow: 0px 0px 15px grey;\n\t\t\t\t}"

/***/ }),

/***/ "./src/app/clooths/clooths.component.html":
/*!************************************************!*\
  !*** ./src/app/clooths/clooths.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 align=\"center\">Total number of produts is {{calc()}}</h2>\n<ul align=\"center\">\n          <li *ngFor=\"let vari of Clooths\">\n            <h2>Name : {{vari.Name | uppercase}}</h2>\n            <h2>Quality : {{vari.Quality}}</h2>\n            <h2>Price : {{vari.Price | currency:'INR'}}</h2>\n            <h3>Size : {{vari.Size}}</h3>\n            <h3>Stock : {{vari.Stock}}</h3>\n            <h4 *ngIf=\"vari.Stock >= 1\">{{vari.Stock}} in stock(s)</h4>\n            <h4 *ngIf=\"vari.Stock < 1\">out of stock(s)</h4>\n          </li>\n      </ul>"

/***/ }),

/***/ "./src/app/clooths/clooths.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clooths/clooths.component.ts ***!
  \**********************************************/
/*! exports provided: CloothsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloothsComponent", function() { return CloothsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mocks */ "./src/app/clooths/mocks.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CloothsComponent = /** @class */ (function () {
    function CloothsComponent() {
    }
    CloothsComponent.prototype.ngOnInit = function () {
        this.Clooths = _mocks__WEBPACK_IMPORTED_MODULE_1__["CLOOTH"];
    };
    CloothsComponent.prototype.calc = function () {
        var add = 0;
        for (var _i = 0, _a = this.Clooths; _i < _a.length; _i++) {
            var temp = _a[_i];
            add = add + temp.Stock;
        }
        return add;
    };
    CloothsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clooths',
            template: __webpack_require__(/*! ./clooths.component.html */ "./src/app/clooths/clooths.component.html"),
            styles: [__webpack_require__(/*! ./clooths.component.css */ "./src/app/clooths/clooths.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CloothsComponent);
    return CloothsComponent;
}());



/***/ }),

/***/ "./src/app/clooths/mocks.ts":
/*!**********************************!*\
  !*** ./src/app/clooths/mocks.ts ***!
  \**********************************/
/*! exports provided: CLOOTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOOTH", function() { return CLOOTH; });
var CLOOTH = [{
        Name: "Shirt",
        Quality: "linen",
        Price: 850,
        Size: 32,
        Stock: 14
    },
    {
        Name: "Pants",
        Quality: "Jeans",
        Price: 1850,
        Size: 34,
        Stock: 85
    },
    {
        Name: "Jacket",
        Quality: "Jeans",
        Price: 450,
        Size: 42,
        Stock: 15
    },
    {
        Name: "Shervani",
        Quality: "Silk",
        Price: 3160,
        Size: 36,
        Stock: 32
    }
];


/***/ }),

/***/ "./src/app/dummy-module.module.ts":
/*!****************************************!*\
  !*** ./src/app/dummy-module.module.ts ***!
  \****************************************/
/*! exports provided: DummyModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyModuleModule", function() { return DummyModuleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mob_parts_mob_parts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mob-parts/mob-parts.component */ "./src/app/mob-parts/mob-parts.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _clooths_clooths_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clooths/clooths.component */ "./src/app/clooths/clooths.component.ts");
/* harmony import */ var _electronics_electronics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./electronics/electronics.component */ "./src/app/electronics/electronics.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoute = [
    { path: 'mobile', component: _mob_parts_mob_parts_component__WEBPACK_IMPORTED_MODULE_3__["MobPartsComponent"] },
    { path: 'venky', component: _books_books_component__WEBPACK_IMPORTED_MODULE_4__["BooksComponent"] },
    { path: 'ele', component: _electronics_electronics_component__WEBPACK_IMPORTED_MODULE_6__["ElectronicsComponent"] },
    { path: 'cloths', component: _clooths_clooths_component__WEBPACK_IMPORTED_MODULE_5__["CloothsComponent"] },
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"] },
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
var DummyModuleModule = /** @class */ (function () {
    function DummyModuleModule() {
    }
    DummyModuleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoute)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DummyModuleModule);
    return DummyModuleModule;
}());



/***/ }),

/***/ "./src/app/electronics/electronics.component.css":
/*!*******************************************************!*\
  !*** ./src/app/electronics/electronics.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\t\t\tli{\n\t\t\t\t\tlist-style: none;\n\t\t\t\t\tborder-radius: 0px 40px 40px 40px;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tmargin: 10px;\n\t\t\t\t\tpadding: 25px;\n\t\t\t\t\twidth: 300px;\n\t\t\t\t\tbox-shadow: 0px 0px 15px black;\n\t\t\t\t\tcolor: black;\n\t\t\t\t\theight: 300px;\n\t\t\t\t\twidth: 350px;background-color: white;\n\n\t\t\t\t}\n\t\t\t\tli:hover\n\t\t\t\t{\n\t\t\t\t\tbackground-color: lightgrey;\n\t\t\t\t\tcolor: black;\n\t\t\t\t}\n\t\t\t\tbody{\n\t\t\t\t\tmargin: 0px;\n\t\t\t\t\tpadding: 0px;\n\t\t\t\t}\n\t\t\t\th1{\n\t\t\t\t\tcolor: red;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tfont-size: 50px;\n\t\t\t\t\ttext-shadow: 0px 0px 15px grey;\n\t\t\t\t}"

/***/ }),

/***/ "./src/app/electronics/electronics.component.html":
/*!********************************************************!*\
  !*** ./src/app/electronics/electronics.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 align=\"center\">Total number of produts is {{calc()}}</h2>\n<!-- <button onclick=\"weight_check()\">Click_Here</button> -->\n<ul align=\"center\">\n          <li *ngFor=\"let vari of Electronics\">\n            <h2>Name : {{vari.Name | uppercase}}</h2>\n            <h2>Brand : {{vari.Brand}}</h2>\n            <h2>Price : {{vari.Price | currency:'INR'}}</h2>\n            <h3>Weight : {{vari.Weight}}</h3>\n            <h3>Stock : {{vari.Stock}}</h3>\n            <h4 *ngIf=\"vari.Stock >= 1\">{{vari.Stock}} in stock(s)</h4>\n            <h4 *ngIf=\"vari.Stock < 1\">out of stock(s)</h4>\n          </li>\n          \n</ul>"

/***/ }),

/***/ "./src/app/electronics/electronics.component.ts":
/*!******************************************************!*\
  !*** ./src/app/electronics/electronics.component.ts ***!
  \******************************************************/
/*! exports provided: ElectronicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectronicsComponent", function() { return ElectronicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mocks */ "./src/app/electronics/mocks.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElectronicsComponent = /** @class */ (function () {
    function ElectronicsComponent() {
    }
    ElectronicsComponent.prototype.ngOnInit = function () {
        this.Electronics = _mocks__WEBPACK_IMPORTED_MODULE_1__["ELECTRONICS"];
    };
    ElectronicsComponent.prototype.calc = function () {
        var add = 0;
        for (var _i = 0, _a = this.Electronics; _i < _a.length; _i++) {
            var temp = _a[_i];
            add = add + temp.Stock;
        }
        return add;
    };
    ElectronicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-electronics',
            template: __webpack_require__(/*! ./electronics.component.html */ "./src/app/electronics/electronics.component.html"),
            styles: [__webpack_require__(/*! ./electronics.component.css */ "./src/app/electronics/electronics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElectronicsComponent);
    return ElectronicsComponent;
}());



/***/ }),

/***/ "./src/app/electronics/mocks.ts":
/*!**************************************!*\
  !*** ./src/app/electronics/mocks.ts ***!
  \**************************************/
/*! exports provided: ELECTRONICS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELECTRONICS", function() { return ELECTRONICS; });
var ELECTRONICS = [{
        Name: "TV",
        Brand: "LG",
        Price: 41850,
        Weight: 40,
        Stock: 14
    },
    {
        Name: "Washing Machine",
        Brand: "Panasonic",
        Price: 11850,
        Weight: 90,
        Stock: 85
    },
    {
        Name: "Mixer",
        Brand: "Kenstar",
        Price: 1999,
        Weight: 8,
        Stock: 15
    },
    {
        Name: "Owen",
        Brand: "Fivestar",
        Price: 3160,
        Weight: 36,
        Stock: 32
    }
];


/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img style=\"width: 100%;\" [src]=\"homepage\">\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        this.homepage = "assets/image/home.jpg";
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/mob-parts/mob-parts.component.css":
/*!***************************************************!*\
  !*** ./src/app/mob-parts/mob-parts.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\t\t\tli{\n\t\t\t\t\tlist-style: none;\n\t\t\t\t\tborder-radius: 0px 40px 40px 40px;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tmargin: 10px;\n\t\t\t\t\tpadding: 25px;\n\t\t\t\t\twidth: 300px;\n\t\t\t\t\tbox-shadow: 0px 0px 15px black;\n\t\t\t\t\tcolor: black;background-color: white;\n\n\t\t\t\t}\n\t\t\t\tli:hover\n\t\t\t\t{\n\t\t\t\t\tbackground-color: lightgrey;\n\t\t\t\t\tcolor: black;\n\t\t\t\t}\n\t\t\t\tbody{\n\t\t\t\t\tmargin: 0px;\n\t\t\t\t\tpadding: 0px;\n\t\t\t\t}\n\t\t\t\th1{\n\t\t\t\t\tcolor: red;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tfont-size: 50px;\n\t\t\t\t\ttext-shadow: 0px 0px 15px grey;\n\t\t\t\t}\t"

/***/ }),

/***/ "./src/app/mob-parts/mob-parts.component.html":
/*!****************************************************!*\
  !*** ./src/app/mob-parts/mob-parts.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 align=\"center\">Total number of produts is {{calc()}}</h2>\n        <h2 align=\"center\">Average is {{avg()}}</h2>\n        <!-- <h2 align=\"center\">Total price of mobiles {{total()}}</h2> -->\n        <ul align=\"center\">\n          <li *ngFor=\"let demo of Mobarray\" [class.outOfStock]=\"demo.Stock\">\n            <h2>Name : {{demo.Name | uppercase}}</h2>\n            <h2>Price : {{demo.Price | number:'1.1-1'}}</h2>\n            <h2>Price : {{demo.Price | currency:'INR'}}</h2>\n            <h3>Color : {{demo.Color | lowercase}}</h3>\n            <h4 *ngIf=\"demo.Stock >= 1\">{{demo.Stock}} in stock(s)</h4>\n            <h4 *ngIf=\"demo.Stock < 1\">out of stock(s)</h4>\n\n            <img [src]=\"demo.prodImg\" width=\"200px\"><br>\n            <button (click)=\"downQntt(demo)\"> - </button>\n            <input [(ngModel)]=\"demo.qntt\"\n             id=\"quantity\" required (input)=\"dummyFun($event.target.value)\">\n            <!-- {{demo.qntt}} -->\n            <button (click)=\"upQntt(demo)\"> + </button><br>\n            <button id=\"dbl\" (hover)=\"func(demo)\"> Click</button>\n            <h5>birthday: {{demo.birth |  date:'fullDate'}}</h5>\n          </li>\n        </ul>\n        "

/***/ }),

/***/ "./src/app/mob-parts/mob-parts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mob-parts/mob-parts.component.ts ***!
  \**************************************************/
/*! exports provided: MobPartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobPartsComponent", function() { return MobPartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mobdata_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobdata.services */ "./src/app/mob-parts/mobdata.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MobPartsComponent = /** @class */ (function () {
    function MobPartsComponent() {
    }
    MobPartsComponent.prototype.ngOnInit = function () {
        // this.Mobarray = MOBPARTS;
        var mobDataService = new _mobdata_services__WEBPACK_IMPORTED_MODULE_1__["MobDataService"]();
        this.Mobarray = mobDataService.getmobparts();
    };
    MobPartsComponent.prototype.calc = function () {
        var add = 0;
        for (var _i = 0, _a = this.Mobarray; _i < _a.length; _i++) {
            var temp = _a[_i];
            add = add + temp.Stock;
        }
        return add;
    };
    MobPartsComponent.prototype.avg = function () {
        var total = 0, add = 0, i = 0;
        for (var _i = 0, _a = this.Mobarray; _i < _a.length; _i++) {
            var temp = _a[_i];
            add += temp.Stock;
            i++;
        }
        total = add / i;
        return total;
    };
    MobPartsComponent.prototype.upQntt = function (o) {
        // alert("Hey..we are in up Quntt...!");
        var calc = o.Price;
        if (o.Stock > o.qntt) {
            o.qntt++;
            // if(o.qntt%2==0)
            // o.Price = o.Price*2;
            // else if (o.qntt==1) { 
            // 	o.Price = o.Price;
            // } else {
            // 	o.Price = (calc*o.Price);
            // }
            if (o.qntt == 1) {
                o.Price = o.Price;
            }
            else {
                o.Price = o.qntt * calc;
            }
        }
    };
    MobPartsComponent.prototype.downQntt = function (o) {
        // alert("Hey..we are in up Quntt...!");
        if (o.qntt > 0)
            o.qntt--;
    };
    MobPartsComponent.prototype.func = function (o) {
        o.Price++;
    };
    MobPartsComponent.prototype.dummyFun = function (e) {
        console.log("the value from user : " + e);
    };
    MobPartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mob-parts',
            template: __webpack_require__(/*! ./mob-parts.component.html */ "./src/app/mob-parts/mob-parts.component.html"),
            styles: [__webpack_require__(/*! ./mob-parts.component.css */ "./src/app/mob-parts/mob-parts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MobPartsComponent);
    return MobPartsComponent;
}());



/***/ }),

/***/ "./src/app/mob-parts/mobdata.services.ts":
/*!***********************************************!*\
  !*** ./src/app/mob-parts/mobdata.services.ts ***!
  \***********************************************/
/*! exports provided: MobDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobDataService", function() { return MobDataService; });
/* harmony import */ var _mocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mocks */ "./src/app/mob-parts/mocks.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MobDataService = /** @class */ (function () {
    function MobDataService() {
    }
    MobDataService.prototype.getmobparts = function () {
        return _mocks__WEBPACK_IMPORTED_MODULE_0__["MOBPARTS"];
    };
    MobDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MobDataService);
    return MobDataService;
}());



/***/ }),

/***/ "./src/app/mob-parts/mocks.ts":
/*!************************************!*\
  !*** ./src/app/mob-parts/mocks.ts ***!
  \************************************/
/*! exports provided: MOBPARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBPARTS", function() { return MOBPARTS; });
var MOBPARTS = [{
        Name: "Redmi",
        Price: 20000.234455,
        Color: "Red",
        Stock: 4,
        prodImg: "https://www.countrycheeseandmore.com/wp-content/uploads/2017/02/dummy-cat.png",
        outOfStock: true,
        qntt: 0
    },
    {
        Name: "Lenovo",
        Price: 40000.1111,
        Color: "Green",
        Stock: 90,
        prodImg: "https://www.neighbourhoodwatchshop.com.au/out/pictures/master/product/1/speed_dome_dummy_camera.jpg",
        outOfStock: true,
        qntt: 0
    },
    {
        Name: "Nokia",
        Price: 10000.90,
        Color: "blue",
        Stock: 0,
        prodImg: "",
        outOfStock: false,
        qntt: 0
    },
    {
        Name: "Samsung",
        Price: 50000.2345,
        Color: "black",
        Stock: 1,
        prodImg: "",
        outOfStock: false,
        qntt: 0
    },
    {
        Name: "Nokia",
        Price: 10000.6444,
        Color: "blue",
        Stock: 0,
        prodImg: "",
        outOfStock: false,
        qntt: 0
    },
    {
        Name: "Samsung",
        Price: 50000.766,
        Color: "black",
        Stock: 1,
        prodImg: "",
        outOfStock: false,
        qntt: 0
    },
    {
        Name: "Nokia",
        Price: 10000.6533,
        Color: "blue",
        Stock: 0,
        prodImg: "",
        outOfStock: false,
        qntt: 0
    },
    {
        Name: "Samsung",
        Price: 50000.23445,
        Color: "black",
        Stock: 1,
        prodImg: "",
        outOfStock: false,
        qntt: 0
    },
    {
        Name: "Nokia",
        Price: 10000.7898,
        Color: "blue",
        Stock: 0,
        prodImg: "",
        outOfStock: false,
        qntt: 0
    },
    {
        Name: "Samsung",
        Price: 50000.8909,
        Color: "black",
        Stock: 1,
        prodImg: "",
        outOfStock: false,
        qntt: 0
    },
    {
        Name: "Nokia",
        Price: 10000.23333,
        Color: "blue",
        Stock: 0,
        prodImg: "",
        outOfStock: false,
        qntt: 0
    },
    {
        Name: "Samsung",
        Price: 50000.8762,
        Color: "black",
        Stock: 1,
        prodImg: "",
        outOfStock: false,
        qntt: 0
    },
    {
        Name: "Nokia",
        Price: 10000.9090,
        Color: "blue",
        Stock: 0,
        prodImg: "",
        outOfStock: false,
        qntt: 0
    },
    {
        Name: "Samsung",
        Price: 50000.0223,
        Color: "black",
        Stock: 10,
        prodImg: "",
        outOfStock: true,
        qntt: 0
    }
];


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img style=\"width: 100%;\" [src]=\"pagenotfound\">"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
        this.pagenotfound = "assets/image/image.png";
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["Mod"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\important_upto services\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map