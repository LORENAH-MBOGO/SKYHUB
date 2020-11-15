(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-git-navbar></app-git-navbar>\n\n<!-- <app-githome></app-githome> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/git-form/git-form.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/git-form/git-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form class=\"row d-block form-inline mb-4 text-center active-cyan-3 active-cyan-4\">\n        <i class=\"col-md-0 p-2 sm-hid fas fa-search text-white\" aria-hidden=\"true\"></i>\n        <input type=\"text\" class=\"col-md-6 form-control form-control-sm  w-100\" rows=\"4\" placeholder=\"Enter a Username\" name=\"searchTerm\" [(ngModel)]=\"searchTerm\">\n\n        <button type=\"submit\" class=\"mg-sm col-md-2 btn btn-md btn-info\" (click)=\"search()\" name=\"button\">SEARCH</button>\n    </form>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/git-navbar/git-navbar.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/git-navbar/git-navbar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand text-info\" routerLink=\"/\"><b>SKYHUB</b></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link active\" routerLink=\"profiles\" routerLinkActive='active'>Search Profile<span class=\"sr-only\">(current)</span></a>\n      <a class=\"nav-item nav-link\" routerLink=\"repos\" routerLinkActive='active'>Search Repos</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/githome/githome.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/githome/githome.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- body section starts here -->\n\n<body>\n    <div class=\"bg\">\n        <div class=\"jumbotron bg-info\">\n            <h1 class=\"h1 text-center text-white animated bounce infinite\"><a target=\"_top\" href=\"https://flamingtext.com/\" ><img src=\"https://blog.flamingtext.com/blog/2020/11/15/flamingtext_com_1605431195_962295292.png\" border=\"0\" alt=\"Logo Design by FlamingText.com\" title=\"Logo Design by FlamingText.com\"></a></h1>\n            <hr class=\"my-4\">\n            <p class=\"lead text-center\"><a target=\"_top\" href=\"https://flamingtext.com/\" ><img src=\"https://blog.flamingtext.com/blog/2020/11/15/flamingtext_com_1605431295_962295293.png\" border=\"0\" alt=\"Logo Design by FlamingText.com\" title=\"Logo Design by FlamingText.com\"></a></p>\n        </div>\n        <!-- Designed by Lorenah M.  -->\n\n        <!-- this is the section that contains the search form  -->\n        <div class=\"container\">\n            <h4 class=\"text-center h4 text-white text-white\"><a target=\"_top\" href=\"https://flamingtext.com/\" ><img src=\"https://blog.flamingtext.com/blog/2020/11/15/flamingtext_com_1605431443_962295294.png\" border=\"0\" alt=\"Logo Design by FlamingText.com\" title=\"Logo Design by FlamingText.com\"></a></h4>\n            <app-git-form (emitSearch)=\"searchGit($event)\"></app-git-form>\n            <hr>\n        </div>\n\n        <!-- This is the section for displaying user profiles -->\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-6\">\n                    <div class=\"container\">\n                        <div class=\"\">\n                            <div *ngFor=\"let github of githubs\">\n                                <br><br>\n                                <div class=\"text-center mt-4 pt-5 ml-4\">\n                                    <img src=\"{{github.avatar_url}}\" class=\"align-center img-fluid  z-depth-3 rounded-circle animated jello delay-3s\" width=\"60%\" height=\"60%\" alt=\"github avatar\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n\n                </div>\n                <div class=\"col-lg-6 mt-4\">\n                    <div class=\"container mt-4\">\n                        <h2 class=\"text-center h2 h2-responsive text-white animated swing delay-3s\"><a target=\"_top\" href=\"https://flamingtext.com/\" ><img src=\"https://blog.flamingtext.com/blog/2020/11/15/flamingtext_com_1605431524_962295295.png\" border=\"0\" alt=\"Logo Design by FlamingText.com\" title=\"Logo Design by FlamingText.com\"></a></h2>\n                        <div class=\"jumbotron\">\n                            <div *ngFor=\"let github of githubs\">\n                                <div class=\"\">\n                                    <p appHighlight class=\"lead\"> <strong>Name:</strong> {{github.name}}</p>\n                                    <p appHighlight> <strong>Username:</strong> {{github.login}}</p>\n                                    <p appHighlight> <strong>Bio:</strong> {{github.bio}}</p>\n                                    <p appHighlight> <strong>Public Repos:</strong> {{github.public_repos}}</p>\n                                    <p appHighlight> <strong>Followers:</strong> {{github.followers}}</p>\n                                    <p appHighlight> <strong>Following:</strong> {{github.following}}</p>\n                                    <p appHighlight> <strong>Location:</strong> {{github.location}}</p>\n                                    <p appHighlight> <strong>Join Date:</strong> {{github.created_at |date}}</p>\n                                    <p><a href=\"{{github.html_url}}\" target=\"_blank\"><button type=\"button\" class=\"btn btn-elegant blue-gradient\"><i class=\"far fa-user pr-2\" aria-hidden=\"true\"></i>View Profile on Github</button></a></p>\n                                    <br>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</body>\n<!-- Footer section -->\n<div class=\"\">\n    <footer class=\"page-footer bg-dark font-small blue\">\n\n        <!-- Copyright -->\n        <div class=\"footer-copyright text-center py-3\">© 2020 Copyright:\n            <a href=\"https://twitter.com/skylar_lorena\" target=\"_blank\">Lorenah M.</a>\n        </div>\n        <!-- Copyright -->\n\n    </footer>\n\n\n</div>\n<!-- Footer -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/repositories/repositories.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/repositories/repositories.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- body section starts here -->\n<!-- <body> -->\n<div class=\"bg\">\n  <div class=\"jumbotron bg-info\">\n    <h1 class=\"h1 text-center text-white animated bounce infinite\"><a target=\"_top\" href=\"https://flamingtext.com/\" ><img src=\"https://blog.flamingtext.com/blog/2020/11/15/flamingtext_com_1605431195_962295292.png\" border=\"0\" alt=\"Logo Design by FlamingText.com\" title=\"Logo Design by FlamingText.com\"></a></h1>\n    <hr class=\"my-4\">\n    <p class=\"lead text-center\"><a target=\"_top\" href=\"https://flamingtext.com/\" ><img src=\"https://blog.flamingtext.com/blog/2020/11/15/flamingtext_com_1605431295_962295293.png\" border=\"0\" alt=\"Logo Design by FlamingText.com\" title=\"Logo Design by FlamingText.com\"></a></p>\n  </div>\n   <!-- Designed by Lorenah M.  -->\n\n  <!-- this is the section that contains the search form  -->\n  <div class=\"container\">\n    <h4 class=\"text-center h4 text-white text-white\"><a target=\"_top\" href=\"https://flamingtext.com/\" ><img src=\"https://blog.flamingtext.com/blog/2020/11/15/flamingtext_com_1605431443_962295294.png\" border=\"0\" alt=\"Logo Design by FlamingText.com\" title=\"Logo Design by FlamingText.com\"></a></h4>\n    <app-git-form (emitSearch)=\"searchRepo($event)\"></app-git-form>\n    <hr>\n  </div>\n\n\n  <!-- This is the section for displaying user profiles -->\n  <h2 class=\"text-center h2 h2-responsive text-white animated swing delay-3s\">{{searchTerm}} GITHUB REPOSITORIES </h2>\n  <div class=\"container card-columns\">\n    <div class=\"card\" *ngFor=\"let gitrepo of gitrepos\">\n      <div class=\"card\">\n        <div class=\"card-header text-center blue-gradient text-white\"><h2>{{gitrepo.name}}</h2></div>\n        <div class=\"card-body\">\n          <p class=\"card-text\"><strong>Description: </strong>{{gitrepo.description}}</p>\n          <p class=\"card-text\"><strong>Create at: </strong>{{gitrepo.created_at|date}}</p>\n          <p class=\"card-text\"> <strong>Language: </strong> {{gitrepo.language}}.</p>\n          <!-- Button -->\n          <a href=\"{{gitrepo.html_url}}\" target=\"_blank\" class=\"btn btn-info btn-lg btn-block\">Check it on Github</a>\n        </div>\n        <div class=\"card-footer flex-footer\">\n          <small class=\"text-muted\"><strong>Branch: </strong>{{gitrepo.default_branch}} </small>\n          <small class=\"text-muted ml-4\"><strong> Forks: </strong>{{gitrepo.forks_count}}</small>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n<!-- </body> -->\n\n<!-- Footer section -->\n<div class=\"\">\n  <footer class=\"page-footer bg-dark font-small blue\">\n\n      <!-- Copyright -->\n      <div class=\"footer-copyright text-center py-3\">© 2020 Copyright:\n          <a href=\"https://twitter.com/skylar_lorena\" target=\"_blank\">Lorenah M.</a>\n      </div>\n      <!-- Copyright -->\n\n  </footer>\n\n\n</div>\n<!-- Footer -->\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repositories/repositories.component */ "./src/app/repositories/repositories.component.ts");
/* harmony import */ var _githome_githome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./githome/githome.component */ "./src/app/githome/githome.component.ts");





const routes = [
    { path: 'profiles', component: _githome_githome_component__WEBPACK_IMPORTED_MODULE_4__["GithomeComponent"] },
    { path: 'repos', component: _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_3__["RepositoriesComponent"] },
    { path: '', redirectTo: "/profiles", pathMatch: "full" },
    { path: '**', component: _githome_githome_component__WEBPACK_IMPORTED_MODULE_4__["GithomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'gitlookup';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _git_navbar_git_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./git-navbar/git-navbar.component */ "./src/app/git-navbar/git-navbar.component.ts");
/* harmony import */ var _githome_githome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./githome/githome.component */ "./src/app/githome/githome.component.ts");
/* harmony import */ var _git_form_git_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./git-form/git-form.component */ "./src/app/git-form/git-form.component.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
/* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./date-count.pipe */ "./src/app/date-count.pipe.ts");
/* harmony import */ var _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./repositories/repositories.component */ "./src/app/repositories/repositories.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");














// import { GithubComponent } from './github/github.component';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _git_navbar_git_navbar_component__WEBPACK_IMPORTED_MODULE_7__["GitNavbarComponent"],
            _githome_githome_component__WEBPACK_IMPORTED_MODULE_8__["GithomeComponent"],
            _git_form_git_form_component__WEBPACK_IMPORTED_MODULE_9__["GitFormComponent"],
            _highlight_directive__WEBPACK_IMPORTED_MODULE_10__["HighlightDirective"],
            _date_count_pipe__WEBPACK_IMPORTED_MODULE_11__["DateCountPipe"],
            _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_12__["RepositoriesComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/date-count.pipe.ts":
/*!************************************!*\
  !*** ./src/app/date-count.pipe.ts ***!
  \************************************/
/*! exports provided: DateCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCountPipe", function() { return DateCountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DateCountPipe = class DateCountPipe {
    transform(value) {
        let today = new Date(); //get current date and time
        let todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(value - todayWithNoTime); //returns value for miliseconds
        const secondsInDay = 86400; //60 seconds * 60 Minutes in an hour * 24 hours in a day
        var dateDifferenceSeconds = dateDifference * 0.001; //converts  iliseconds to seconds
        var dateCounter = Math.floor(dateDifferenceSeconds / secondsInDay);
        if (dateCounter >= 1 && value > todayWithNoTime) {
            return dateCounter;
        }
        else {
            return 0;
        }
    }
};
DateCountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dateCount'
    })
], DateCountPipe);



/***/ }),

/***/ "./src/app/git-form/git-form.component.css":
/*!*************************************************!*\
  !*** ./src/app/git-form/git-form.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 768px) {\n    .mg-sm {\n        margin: 10px 0px;\n    }\n    .sm-hid {\n        display: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0LWZvcm0vZ2l0LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9naXQtZm9ybS9naXQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAubWctc20ge1xuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIH1cbiAgICAuc20taGlkIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/git-form/git-form.component.ts":
/*!************************************************!*\
  !*** ./src/app/git-form/git-form.component.ts ***!
  \************************************************/
/*! exports provided: GitFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitFormComponent", function() { return GitFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GitFormComponent = class GitFormComponent {
    constructor() {
        this.emitSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    search() {
        this.emitSearch.emit(this.searchTerm);
        // console.log(this.searchTerm)
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GitFormComponent.prototype, "emitSearch", void 0);
GitFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-git-form',
        template: __webpack_require__(/*! raw-loader!./git-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/git-form/git-form.component.html"),
        styles: [__webpack_require__(/*! ./git-form.component.css */ "./src/app/git-form/git-form.component.css")]
    })
], GitFormComponent);



/***/ }),

/***/ "./src/app/git-navbar/git-navbar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/git-navbar/git-navbar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdC1uYXZiYXIvZ2l0LW5hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/git-navbar/git-navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/git-navbar/git-navbar.component.ts ***!
  \****************************************************/
/*! exports provided: GitNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitNavbarComponent", function() { return GitNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GitNavbarComponent = class GitNavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
GitNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-git-navbar',
        template: __webpack_require__(/*! raw-loader!./git-navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/git-navbar/git-navbar.component.html"),
        styles: [__webpack_require__(/*! ./git-navbar.component.css */ "./src/app/git-navbar/git-navbar.component.css")]
    })
], GitNavbarComponent);



/***/ }),

/***/ "./src/app/githome/githome.component.css":
/*!***********************************************!*\
  !*** ./src/app/githome/githome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdGhvbWUvZ2l0aG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/githome/githome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/githome/githome.component.ts ***!
  \**********************************************/
/*! exports provided: GithomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithomeComponent", function() { return GithomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_gitservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gitservice.service */ "./src/app/services/gitservice.service.ts");



// import {GitFormComponent} from '../git-form'
let GithomeComponent = class GithomeComponent {
    constructor(Gitservice) {
        this.Gitservice = Gitservice;
    }
    ngOnInit() {
        this.searchGit("LORENAH-MBOGO");
    }
    searchGit(searchTerm) {
        this.Gitservice.searchGithub(searchTerm).then(() => {
            this.githubs = this.Gitservice.githubs;
            console.log(this.githubs);
        }, (error) => {
            console.log(error);
        });
        // console.log(searchTerm)
    }
};
GithomeComponent.ctorParameters = () => [
    { type: _services_gitservice_service__WEBPACK_IMPORTED_MODULE_2__["GitserviceService"] }
];
GithomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-githome',
        template: __webpack_require__(/*! raw-loader!./githome.component.html */ "./node_modules/raw-loader/index.js!./src/app/githome/githome.component.html"),
        styles: [__webpack_require__(/*! ./githome.component.css */ "./src/app/githome/githome.component.css")]
    })
], GithomeComponent);



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HighlightDirective = class HighlightDirective {
    constructor(light) {
        this.light = light;
    }
    onMouseEnter() {
        this.lightup("rgba(3, 169, 244, 0.1)");
    }
    onMouseLeave() {
        this.lightup(null);
    }
    lightup(color) {
        this.light.nativeElement.style.backgroundColor = color;
    }
};
HighlightDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseenter")
], HighlightDirective.prototype, "onMouseEnter", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave")
], HighlightDirective.prototype, "onMouseLeave", null);
HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHighlight]'
    })
], HighlightDirective);



/***/ }),

/***/ "./src/app/repositories/repositories.component.css":
/*!*********************************************************!*\
  !*** ./src/app/repositories/repositories.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9zaXRvcmllcy9yZXBvc2l0b3JpZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/repositories/repositories.component.ts":
/*!********************************************************!*\
  !*** ./src/app/repositories/repositories.component.ts ***!
  \********************************************************/
/*! exports provided: RepositoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoriesComponent", function() { return RepositoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_gitservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gitservice.service */ "./src/app/services/gitservice.service.ts");



let RepositoriesComponent = class RepositoriesComponent {
    constructor(Gitservice) {
        this.Gitservice = Gitservice;
    }
    ngOnInit() {
        this.searchRepo("LORENAH-MBOGO");
    }
    searchRepo(searchTerm) {
        this.Gitservice.searchRepo(searchTerm).then(() => {
            this.gitrepos = this.Gitservice.gitrepos;
            // console.log(this.gitrepos);
        }, (error) => {
            console.log(error);
        });
        // console.log(searchTerm)
    }
};
RepositoriesComponent.ctorParameters = () => [
    { type: _services_gitservice_service__WEBPACK_IMPORTED_MODULE_2__["GitserviceService"] }
];
RepositoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-repositories',
        template: __webpack_require__(/*! raw-loader!./repositories.component.html */ "./node_modules/raw-loader/index.js!./src/app/repositories/repositories.component.html"),
        styles: [__webpack_require__(/*! ./repositories.component.css */ "./src/app/repositories/repositories.component.css")]
    })
], RepositoriesComponent);



/***/ }),

/***/ "./src/app/services/gitservice.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/gitservice.service.ts ***!
  \************************************************/
/*! exports provided: GitserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitserviceService", function() { return GitserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let GitserviceService = class GitserviceService {
    constructor(http) {
        this.http = http;
        this.githubs = [];
    }
    searchGithub(searchTerm) {
        // let searchEndpoint= "https://api.github.com/users/+'searchTerm'+?access_token="+environment.APIKEY;
        // searchEndpoint += "&q="+searchTerm;
        let promise = new Promise((resolve, reject) => {
            this.http.get('https://api.github.com/users/' + searchTerm + '?access_token=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIKEY).toPromise().then((results) => {
                this.githubs = [];
                this.githubs.push(results);
                console.log(results);
                resolve();
            }, (error) => {
                console.log(error);
                reject();
            });
        });
        return promise;
    }
    //GIT REPO SEARCH BEGINS
    searchRepo(searchTerm) {
        // let searchEndpoint= "https://api.giphy.com/v1/gifs/search?api_key="+environment.GIPHYAPIKEY;
        // searchEndpoint += "&q="+searchTerm;
        let promise = new Promise((resolve, reject) => {
            this.http.get('https://api.github.com/users/' + searchTerm + '/repos?access_token=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIKEY).toPromise().then((results) => {
                this.gitrepos;
                this.gitrepos = results;
                console.log(results);
                resolve();
            }, (error) => {
                console.log(error);
                reject();
            });
        });
        return promise;
    }
};
GitserviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GitserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GitserviceService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    APIKEY: "ab162b85add31e5e786e7208e2b5b93420c5adab"
    // ACCESSKEY:
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/moringa/Desktop/Github Search/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map