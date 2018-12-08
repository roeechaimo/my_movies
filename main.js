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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-movies';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/fesm5/ngxs-devtools-plugin.js");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/logger-plugin */ "./node_modules/@ngxs/logger-plugin/fesm5/ngxs-logger-plugin.js");
/* harmony import */ var _store_movie_movie_stste__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/movie/movie.stste */ "./src/app/store/movie/movie.stste.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forRoot([_store_movie_movie_stste__WEBPACK_IMPORTED_MODULE_6__["MovieState"]]),
                _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsReduxDevtoolsPluginModule"].forRoot(),
                _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__["NgxsLoggerPluginModule"].forRoot(),
                _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/mocks/mocks.ts":
/*!*************************************!*\
  !*** ./src/app/core/mocks/mocks.ts ***!
  \*************************************/
/*! exports provided: MOVIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIES", function() { return MOVIES; });
var MOVIES = [
    "Casa de mi Padre",
    "Step Brothers",
    "Semi-Pro",
    "Blades of Glory"
];


/***/ }),

/***/ "./src/app/core/models/movie.model.ts":
/*!********************************************!*\
  !*** ./src/app/core/models/movie.model.ts ***!
  \********************************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header>\n    <h1>Will Ferrell is the king</h1>\n  </header>\n\n  <img src=\"../../assets/baseline_add_box_white_36dp.png\" (click)=\"openMovieDialog('')\" />\n\n  <main>\n    <mat-card *ngFor=\"let movie of (movies$ | async)\">\n      <mat-card-header>\n        <mat-card-title>{{movie?.Title | titlecase | removeNonAlpha}}</mat-card-title>\n      </mat-card-header>\n\n      <mat-card-content>\n        <div><span>Id: </span>{{movie?.imdbID}}</div>\n\n        <div><span>Runtime: </span>{{movie?.Runtime}}</div>\n\n        <div><span>Year: </span>{{movie?.Year}}</div>\n\n        <div><span>Genre: </span>{{movie?.Genre}}</div>\n\n        <div><span>Director: </span>{{movie?.Director}}</div>\n      </mat-card-content>\n\n      <mat-card-actions>\n        <button mat-raised-button (click)=\"openMovieDialog(movie)\">Edit</button>\n\n        <button mat-raised-button (click)=\"openDeleteDialog(movie)\">Delete</button>\n      </mat-card-actions>\n    </mat-card>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  text-align: center; }\n\nimg:hover {\n  cursor: pointer; }\n\nmain {\n  display: flex;\n  flex-wrap: wrap; }\n\nmain mat-card {\n    margin: 1%;\n    flex: 1 1 43%;\n    font-family: Impact,\r Haettenschweiler,\r 'Arial Narrow Bold',\r sans-serif;\n    color: #00b300; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _core_mocks_mocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/mocks/mocks */ "./src/app/core/mocks/mocks.ts");
/* harmony import */ var _shared_components_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/movie-dialog/movie-dialog.component */ "./src/app/shared/components/movie-dialog/movie-dialog.component.ts");
/* harmony import */ var _shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/delete-dialog/delete-dialog.component */ "./src/app/shared/components/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _store_movie_movie_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/movie/movie.actions */ "./src/app/store/movie/movie.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = /** @class */ (function () {
    function HomeComponent(_cdRef, _store, _movieDialog, _deleteDialog) {
        this._cdRef = _cdRef;
        this._store = _store;
        this._movieDialog = _movieDialog;
        this._deleteDialog = _deleteDialog;
        this.movies = [];
        this.moviesToGet = _core_mocks_mocks__WEBPACK_IMPORTED_MODULE_4__["MOVIES"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._store.dispatch(new _store_movie_movie_actions__WEBPACK_IMPORTED_MODULE_7__["LoadMovies"](this.moviesToGet));
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        this._cdRef.detectChanges();
    };
    HomeComponent.prototype.openMovieDialog = function (movie) {
        var dialogRef = this._movieDialog.open(_shared_components_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_5__["MovieDialogComponent"], {
            data: movie
        });
    };
    HomeComponent.prototype.openDeleteDialog = function (movie) {
        var deleteDialogRef = this._deleteDialog.open(_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"], {
            data: movie
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(function (state) { return state.movie.movies[0]; }),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], HomeComponent.prototype, "movies$", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
            providers: [_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/pipes/remove-non-alpha-pipe.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/pipes/remove-non-alpha-pipe.pipe.ts ***!
  \*****************************************************/
/*! exports provided: RemoveNonAlphaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveNonAlphaPipe", function() { return RemoveNonAlphaPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RemoveNonAlphaPipe = /** @class */ (function () {
    function RemoveNonAlphaPipe() {
    }
    RemoveNonAlphaPipe.prototype.transform = function (value) {
        return value.replace(/[^0-9a-z]/gi, " ");
    };
    RemoveNonAlphaPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'removeNonAlpha'
        })
    ], RemoveNonAlphaPipe);
    return RemoveNonAlphaPipe;
}());



/***/ }),

/***/ "./src/app/services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieService = /** @class */ (function () {
    function MovieService(_http) {
        var _this = this;
        this._http = _http;
        this.moviesToReturn = [];
        this.moviesObs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.movies.map(function (movie) {
                movie.subscribe(function (res) {
                    _this.moviesToReturn.push(res);
                });
            });
            observer.next(_this.moviesToReturn);
            observer.complete();
            return {
                unsubscribe: function () { }
            };
        });
        this._env = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
    }
    MovieService.prototype.getMovies = function (movies) {
        var _this = this;
        this.movies = movies.map(function (movieToGet) {
            return _this.getMovie(movieToGet);
        });
        return this.moviesObs;
    };
    MovieService.prototype.getMovie = function (movie) {
        return this._http.get(this._env.baseUrl + this._env.apiParams.apiKey + "&t=" + movie);
    };
    MovieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/shared/components/delete-dialog/delete-dialog.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/delete-dialog/delete-dialog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\">\n  <mat-dialog-content>\n    Are you sure you want to delete this movie?\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <button mat-raised-button (click)=\"deleteMovie()\">Yes</button>\n\n    <button mat-raised-button mat-dialog-close>No</button>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/delete-dialog/delete-dialog.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/delete-dialog/delete-dialog.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/delete-dialog/delete-dialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/delete-dialog/delete-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var src_app_core_models_movie_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/movie.model */ "./src/app/core/models/movie.model.ts");
/* harmony import */ var src_app_store_movie_movie_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/movie/movie.actions */ "./src/app/store/movie/movie.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(_dialogRef, _store, _data) {
        this._dialogRef = _dialogRef;
        this._store = _store;
        this._data = _data;
    }
    DeleteDialogComponent.prototype.ngOnInit = function () {
        this.movie = this._data;
    };
    DeleteDialogComponent.prototype.deleteMovie = function () {
        var _this = this;
        this._store.dispatch(new src_app_store_movie_movie_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteMovie"](this.movie)).subscribe(function (state) {
            _this._dialogRef.close();
        });
    };
    ;
    DeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-delete-dialog",
            template: __webpack_require__(/*! ./delete-dialog.component.html */ "./src/app/shared/components/delete-dialog/delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-dialog.component.scss */ "./src/app/shared/components/delete-dialog/delete-dialog.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            src_app_core_models_movie_model__WEBPACK_IMPORTED_MODULE_3__["Movie"]])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/movie-dialog/movie-dialog.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/movie-dialog/movie-dialog.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n    <h3 mat-dialog-title>{{dialogHeader}}</h3>\n\n    <mat-dialog-content>\n      <div class=\"form-field\">\n        <mat-form-field>\n          <input matInput type=\"text\" formControlName=\"imdbID\" placeholder=\"Id: \" />\n\n          <mat-error>This field is required</mat-error>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-field\">\n        <mat-form-field>\n          <input matInput type=\"text\" formControlName=\"Title\" [value]=\"form.get('Title').value | titlecase | removeNonAlpha\"\n            placeholder=\"Title: \" />\n\n          <mat-error>This field is required</mat-error>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-field\">\n        <mat-form-field>\n          <input matInput type=\"text\" formControlName=\"Runtime\" placeholder=\"Runtime: \" />\n\n          <mat-error>This field is required</mat-error>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-field\">\n        <mat-form-field>\n          <input matInput type=\"number\" formControlName=\"Year\" placeholder=\"Year: \" />\n\n          <mat-error *ngIf=\"year.errors?.required\">This field is required</mat-error>\n\n          <mat-error *ngIf=\"year.errors?.min || year.errors?.max\">{{errors.number}}</mat-error>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-field\">\n        <mat-form-field>\n          <input matInput type=\"text\" formControlName=\"Genre\" placeholder=\"Gener: \" />\n\n          <mat-error>This field is required</mat-error>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-field\">\n        <mat-form-field>\n          <input matInput type=\"text\" formControlName=\"Director\" placeholder=\"Director: \" />\n\n          <mat-error>This field is required</mat-error>\n        </mat-form-field>\n      </div>\n    </mat-dialog-content>\n\n    <mat-dialog-actions>\n      <button mat-raised-button type=\"submit\">Save</button>\n\n      <button mat-raised-button mat-dialog-close>Cancel</button>\n    </mat-dialog-actions>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/movie-dialog/movie-dialog.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/movie-dialog/movie-dialog.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-container * {\n  font-family: Impact,\r Haettenschweiler,\r 'Arial Narrow Bold',\r sans-serif;\n  color: #00b300;\n  display: flex;\n  flex-wrap: wrap; }\n  .dialog-container * h3 {\n    width: 100%; }\n  .dialog-container * .form-field {\n    margin: 1%;\n    flex: 1 1 30%; }\n  .dialog-container * .form-field mat-error {\n      color: #f44336; }\n"

/***/ }),

/***/ "./src/app/shared/components/movie-dialog/movie-dialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/movie-dialog/movie-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: MovieDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDialogComponent", function() { return MovieDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var src_app_core_models_movie_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/models/movie.model */ "./src/app/core/models/movie.model.ts");
/* harmony import */ var src_app_store_movie_movie_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/movie/movie.actions */ "./src/app/store/movie/movie.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var MovieDialogComponent = /** @class */ (function () {
    function MovieDialogComponent(_fb, _store, _dialogRef, _data) {
        this._fb = _fb;
        this._store = _store;
        this._dialogRef = _dialogRef;
        this._data = _data;
        this.errors = {};
        this.dialogHeader = "Create";
    }
    MovieDialogComponent.prototype.ngOnInit = function () {
        this.movie = this._data;
        this.initForm();
        this.initFormErrors();
        this.initDialogHeader();
    };
    MovieDialogComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        if (this.movie) {
            this._store.dispatch(new src_app_store_movie_movie_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateMovie"](this.form.getRawValue())).subscribe(function () { return _this._dialogRef.close(); });
            return;
        }
        this._store.dispatch(new src_app_store_movie_movie_actions__WEBPACK_IMPORTED_MODULE_5__["CreateMovie"](this.form.getRawValue())).subscribe(function () { return _this._dialogRef.close(); });
    };
    Object.defineProperty(MovieDialogComponent.prototype, "year", {
        get: function () {
            return this.form.get("Year");
        },
        enumerable: true,
        configurable: true
    });
    MovieDialogComponent.prototype.initDialogHeader = function () {
        if (this.movie) {
            this.dialogHeader = "Edit";
        }
    };
    MovieDialogComponent.prototype.initForm = function () {
        this.form = this._fb.group({
            Title: [this.movie.Title || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            imdbID: [{
                    value: this.movie.imdbID || "",
                    disabled: this.movie ? true : false
                },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            ],
            Runtime: [this.movie.Runtime || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Year: [
                +this.movie.Year || "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2019)]
            ],
            Genre: [this.movie.Genre || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Director: [this.movie.Director || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    MovieDialogComponent.prototype.initFormErrors = function () {
        this.errors = {
            number: "Must enter a valid year"
        };
    };
    MovieDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-movie-dialog",
            template: __webpack_require__(/*! ./movie-dialog.component.html */ "./src/app/shared/components/movie-dialog/movie-dialog.component.html"),
            styles: [__webpack_require__(/*! ./movie-dialog.component.scss */ "./src/app/shared/components/movie-dialog/movie-dialog.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_core_models_movie_model__WEBPACK_IMPORTED_MODULE_4__["Movie"]])
    ], MovieDialogComponent);
    return MovieDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _components_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/movie-dialog/movie-dialog.component */ "./src/app/shared/components/movie-dialog/movie-dialog.component.ts");
/* harmony import */ var _pipes_remove_non_alpha_pipe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/remove-non-alpha-pipe.pipe */ "./src/app/pipes/remove-non-alpha-pipe.pipe.ts");
/* harmony import */ var _components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/delete-dialog/delete-dialog.component */ "./src/app/shared/components/delete-dialog/delete-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
            declarations: [
                _components_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_4__["MovieDialogComponent"],
                _pipes_remove_non_alpha_pipe_pipe__WEBPACK_IMPORTED_MODULE_5__["RemoveNonAlphaPipe"],
                _components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"]
            ],
            entryComponents: [_components_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_4__["MovieDialogComponent"], _components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"]],
            exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _pipes_remove_non_alpha_pipe_pipe__WEBPACK_IMPORTED_MODULE_5__["RemoveNonAlphaPipe"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/store/movie/movie.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/store/movie/movie.actions.ts ***!
  \**********************************************/
/*! exports provided: LoadMovies, UpdateMovie, CreateMovie, DeleteMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMovies", function() { return LoadMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMovie", function() { return UpdateMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMovie", function() { return CreateMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMovie", function() { return DeleteMovie; });
var LoadMovies = /** @class */ (function () {
    function LoadMovies(moviesToLoad) {
        this.moviesToLoad = moviesToLoad;
    }
    LoadMovies.type = '[Movie] Load Movies';
    return LoadMovies;
}());

var UpdateMovie = /** @class */ (function () {
    function UpdateMovie(movie) {
        this.movie = movie;
    }
    UpdateMovie.type = "[Movie] Update Movie";
    return UpdateMovie;
}());

var CreateMovie = /** @class */ (function () {
    function CreateMovie(movie) {
        this.movie = movie;
    }
    CreateMovie.type = "[Movie] Create Movie";
    return CreateMovie;
}());

var DeleteMovie = /** @class */ (function () {
    function DeleteMovie(movie) {
        this.movie = movie;
    }
    DeleteMovie.type = "[Movie] Delete Movie";
    return DeleteMovie;
}());



/***/ }),

/***/ "./src/app/store/movie/movie.stste.ts":
/*!********************************************!*\
  !*** ./src/app/store/movie/movie.stste.ts ***!
  \********************************************/
/*! exports provided: MovieState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieState", function() { return MovieState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _movie_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie.actions */ "./src/app/store/movie/movie.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieState = /** @class */ (function () {
    function MovieState(_movieService) {
        this._movieService = _movieService;
    }
    MovieState.prototype.loadMovies = function (ctx, action) {
        return this._movieService.getMovies(action.moviesToLoad)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (moviesToLoadResult) {
            var state = ctx.getState();
            ctx.setState(__assign({}, state, { movies: state.movies.concat([moviesToLoadResult]) }));
        }));
    };
    MovieState.prototype.updateMovie = function (ctx, action) {
        var state = ctx.getState();
        var toDestruct = state.movies.length ? state.movies[0] : state.movies;
        var movies = toDestruct;
        var movieIndex = toDestruct.findIndex(function (movie) { return movie.imdbID === action.movie.imdbID; });
        movies[movieIndex] = action.movie;
        ctx.setState(__assign({}, state, { movies: [movies] }));
    };
    MovieState.prototype.createMovie = function (ctx, action) {
        var state = ctx.getState();
        var toDestruct = state.movies.length ? state.movies[0] : state.movies;
        var movies = toDestruct;
        movies.push(action.movie);
        ctx.setState(__assign({}, state, { movies: [movies] }));
    };
    MovieState.prototype.deleteMovie = function (ctx, action) {
        var state = ctx.getState();
        var toDestruct = state.movies.length ? state.movies[0] : state.movies;
        var movies = toDestruct.filter(function (movie) { return movie.imdbID !== action.movie.imdbID; });
        ctx.setState(__assign({}, state, { movies: [movies] }));
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_movie_actions__WEBPACK_IMPORTED_MODULE_3__["LoadMovies"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _movie_actions__WEBPACK_IMPORTED_MODULE_3__["LoadMovies"]]),
        __metadata("design:returntype", void 0)
    ], MovieState.prototype, "loadMovies", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_movie_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateMovie"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _movie_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateMovie"]]),
        __metadata("design:returntype", void 0)
    ], MovieState.prototype, "updateMovie", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_movie_actions__WEBPACK_IMPORTED_MODULE_3__["CreateMovie"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _movie_actions__WEBPACK_IMPORTED_MODULE_3__["CreateMovie"]]),
        __metadata("design:returntype", void 0)
    ], MovieState.prototype, "createMovie", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_movie_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteMovie"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _movie_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteMovie"]]),
        __metadata("design:returntype", void 0)
    ], MovieState.prototype, "deleteMovie", null);
    MovieState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: "movie",
            defaults: {
                movies: []
            }
        }),
        __metadata("design:paramtypes", [src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], MovieState);
    return MovieState;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = { production: false, baseUrl: "http://www.omdbapi.com/", apiParams: { apiKey: "?apikey=4293d2b8" } };
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\roee8\Documents\GitHub\my_movies\my-movies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map