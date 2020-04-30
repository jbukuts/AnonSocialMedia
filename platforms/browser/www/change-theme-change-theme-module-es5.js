(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-theme-change-theme-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/change-theme/change-theme.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-theme/change-theme.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Theme</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item lines=\"none\">\n    <ion-label>Current Colors</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-item class=\"theme-dots\" color=\"primary\"></ion-item>\n    <ion-label style=\"margin-left: 20px;\">Primary</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-item class=\"theme-dots\" color=\"secondary\"></ion-item>\n    <ion-label style=\"margin-left: 20px;\">Secondary</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-item class=\"theme-dots\" color=\"success\"></ion-item>\n    <ion-label style=\"margin-left: 20px;\">Emphasis</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-item class=\"theme-dots\" color=\"danger\"></ion-item>\n    <ion-label style=\"margin-left: 20px;\">Danger</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-item class=\"theme-dots\" color=\"dark\"></ion-item>\n    <ion-label style=\"margin-left: 20px;\">Text</ion-label>\n  </ion-item>\n\n  \n  <ion-item>\n    <ion-label>Dark Mode</ion-label>\n    <ion-toggle [(ngModel)]=\"checkedValue\" [checked]=\"checkedValue\" (ionChange)=\"setDarkMode()\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Theme</ion-label>\n    <ion-select [(ngModel)]=\"themeValue\" placeholder=\"Select One\" (ionChange)=\"setTheme(themeValue)\">\n      <ion-select-option value=\"default\">Default</ion-select-option>\n      <ion-select-option value=\"gamecock\">Gamecock</ion-select-option>\n      <ion-select-option value=\"christmas\">Christmas</ion-select-option>\n      <ion-select-option value=\"halloween\">Halloween</ion-select-option>\n      <ion-select-option value=\"summer\">Summer</ion-select-option>\n      <ion-select-option value=\"fall\">Fall</ion-select-option>\n      <ion-select-option value=\"winter\">Winter</ion-select-option>\n      <ion-select-option value=\"spring\">Spring</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/change-theme/change-theme-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/change-theme/change-theme-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ChangeThemePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeThemePageRoutingModule", function() { return ChangeThemePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _change_theme_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-theme.page */ "./src/app/change-theme/change-theme.page.ts");




var routes = [
    {
        path: '',
        component: _change_theme_page__WEBPACK_IMPORTED_MODULE_3__["ChangeThemePage"]
    }
];
var ChangeThemePageRoutingModule = /** @class */ (function () {
    function ChangeThemePageRoutingModule() {
    }
    ChangeThemePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChangeThemePageRoutingModule);
    return ChangeThemePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/change-theme/change-theme.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/change-theme/change-theme.module.ts ***!
  \*****************************************************/
/*! exports provided: ChangeThemePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeThemePageModule", function() { return ChangeThemePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_theme_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-theme-routing.module */ "./src/app/change-theme/change-theme-routing.module.ts");
/* harmony import */ var _change_theme_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-theme.page */ "./src/app/change-theme/change-theme.page.ts");







var ChangeThemePageModule = /** @class */ (function () {
    function ChangeThemePageModule() {
    }
    ChangeThemePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _change_theme_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangeThemePageRoutingModule"]
            ],
            declarations: [_change_theme_page__WEBPACK_IMPORTED_MODULE_6__["ChangeThemePage"]]
        })
    ], ChangeThemePageModule);
    return ChangeThemePageModule;
}());



/***/ }),

/***/ "./src/app/change-theme/change-theme.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/change-theme/change-theme.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".theme-dots {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pidWt1dHMvRG9jdW1lbnRzL0dpdGh1Yi9Bbm9uU29jaWFsTWVkaWEvc3JjL2FwcC9jaGFuZ2UtdGhlbWUvY2hhbmdlLXRoZW1lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhbmdlLXRoZW1lL2NoYW5nZS10aGVtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jaGFuZ2UtdGhlbWUvY2hhbmdlLXRoZW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGVtZS1kb3RzIHtcbiAgICB3aWR0aDogMjVweDsgXG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iLCIudGhlbWUtZG90cyB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/change-theme/change-theme.page.ts":
/*!***************************************************!*\
  !*** ./src/app/change-theme/change-theme.page.ts ***!
  \***************************************************/
/*! exports provided: ChangeThemePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeThemePage", function() { return ChangeThemePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/theme.service */ "./src/app/services/theme.service.ts");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item.service */ "./src/app/item.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var ChangeThemePage = /** @class */ (function () {
    function ChangeThemePage(theme, itemservice, sanitizer) {
        this.theme = theme;
        this.itemservice = itemservice;
        this.sanitizer = sanitizer;
        this.backgroundColor = '#ff0000';
        this.items = [
            { text: 'My first green item', color: '#00ff00' },
            { text: 'My second red item', color: '#ff0000' },
            { text: 'My third blue item', color: '#0000ff' }
        ];
    }
    ChangeThemePage.prototype.ngOnInit = function () {
        this.checkedValue = this.itemservice.darkMode;
        this.themeValue = this.itemservice.themeValue;
    };
    ChangeThemePage.prototype.setDarkMode = function () {
        this.itemservice.darkMode = this.checkedValue;
        if (this.checkedValue) {
            this.enableDark();
        }
        else {
            this.enableLight();
        }
    };
    ChangeThemePage.prototype.enableDark = function () {
        this.theme.enableDark();
    };
    ChangeThemePage.prototype.enableLight = function () {
        this.theme.enableLight();
    };
    ChangeThemePage.prototype.setTheme = function (value) {
        this.itemservice.themeValue = this.themeValue;
        console.log("setTheme value: ", value);
        if (value == "default") {
            this.theme.enableDefault();
        }
        else if (value == "gamecock") {
            this.theme.enableGamecock();
        }
        else if (value == "christmas") {
            this.theme.enableChristmas();
        }
        else if (value == "halloween") {
            this.theme.enableHalloween();
        }
        else if (value == "summer") {
            this.theme.enableSummer();
        }
        else if (value == "fall") {
            this.theme.enableFall();
        }
        else if (value == "winter") {
            this.theme.enableWinter();
        }
        else if (value == "spring") {
            this.theme.enableSpring();
        }
    };
    ChangeThemePage.ctorParameters = function () { return [
        { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] },
        { type: _item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
    ChangeThemePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-theme',
            template: __webpack_require__(/*! raw-loader!./change-theme.page.html */ "./node_modules/raw-loader/index.js!./src/app/change-theme/change-theme.page.html"),
            styles: [__webpack_require__(/*! ./change-theme.page.scss */ "./src/app/change-theme/change-theme.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"],
            _item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], ChangeThemePage);
    return ChangeThemePage;
}());



/***/ }),

/***/ "./src/app/item.service.ts":
/*!*********************************!*\
  !*** ./src/app/item.service.ts ***!
  \*********************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);





var ItemService = /** @class */ (function () {
    function ItemService(events, toastController) {
        this.events = events;
        this.toastController = toastController;
        this.ref = firebase__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('original-post/');
        // this will represent the post you have made
        this.yourPost = new Array();
    }
    ItemService.prototype.getYourPosts = function () {
        return this.yourPost;
    };
    ItemService.prototype.getReplies = function (threadId, board) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var curr, replies, db;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                curr = this;
                replies = [];
                db = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
                // get replies and order by timestamp
                db.collection(board + '/' + threadId + '/replies').orderBy('timestamp').get().then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        var item = doc.data();
                        console.log(doc.data());
                        console.log(doc.ref.id);
                        var date = new Date(item.timestamp);
                        console.log((date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + ("0" + date.getMinutes()).slice(-2));
                        // add item to the database
                        // ensure doc is there for deletion
                        replies.push({
                            replyTo: item.replyTo,
                            text: item.text,
                            timestamp: item.timestamp,
                            docId: doc.ref.id
                        });
                        // append image if needed
                        if (item.img != null) {
                            replies[replies.length - 1]['img'] = item.img;
                        }
                    });
                });
                return [2 /*return*/, replies];
            });
        });
    };
    // return the items
    ItemService.prototype.getPosts = function (collectionName) {
        var postList = [];
        var db = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
        db.collection(collectionName).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                var item = doc.data();
                console.log(doc.data());
                console.log(doc.ref.id);
                // add item to the database
                // ensure doc is there for deletion
                postList.push({
                    text: item.text,
                    title: item.title,
                    timestamp: item.timestamp,
                    docId: doc.ref.id
                });
                // check to see if item has image
                if (item.img != null) {
                    postList[postList.length - 1]['img'] = item.img;
                }
            });
        });
        return postList;
    };
    // used to create post without image
    ItemService.prototype.createPostNoImage = function (title, text, board) {
        var self = this;
        // add to db
        var db = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
        db.collection(board).add({
            title: title,
            text: text,
            timestamp: Date.now()
        })
            .then(function (docRef) {
            console.log("Document written with ID", docRef.id);
            // add to the post youve made
            self.yourPost.push({
                title: title,
                text: text,
                docId: docRef.id,
                timestamp: Date.now(),
                board: board
            });
        })
            .catch(function (error) {
            console.error("Error adding document: ", error);
        });
        // update list as item is now gone
        this.events.publish('dataloaded', Date.now());
        ;
    };
    // this will create a new post with a picture
    ItemService.prototype.createPost = function (title, text, img, board) {
        var self = this;
        // add to db
        var db = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
        db.collection(board).add({
            title: title,
            text: text,
            timestamp: Date.now(),
            img: img,
        })
            .then(function (docRef) {
            console.log("Document written with ID", docRef.id);
            // add to the post youve made
            self.yourPost.push({
                title: title,
                text: text,
                img: img,
                timestamp: Date.now(),
                docId: docRef.id,
                board: board
            });
        })
            .catch(function (error) {
            console.error("Error adding document: ", error);
        });
        // update list as item is now gone
        this.events.publish('dataloaded', Date.now());
    };
    // displays message telling user that new item was added
    ItemService.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            color: 'dark',
                            message: message,
                            duration: 2000,
                            showCloseButton: true
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/app/services/theme.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var ThemeService = /** @class */ (function () {
    function ThemeService(rendererFactory, sanitizer, document) {
        this.rendererFactory = rendererFactory;
        this.sanitizer = sanitizer;
        this.document = document;
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }
    ThemeService.prototype.enableDark = function () {
        this.renderer.addClass(this.document.body, 'dark-theme');
    };
    ThemeService.prototype.enableLight = function () {
        this.renderer.removeClass(this.document.body, 'dark-theme');
    };
    ThemeService.prototype.clearThemes = function () {
        this.renderer.removeClass(this.document.body, 'gamecock-theme');
        this.renderer.removeClass(this.document.body, 'christmas-theme');
        this.renderer.removeClass(this.document.body, 'halloween-theme');
        this.renderer.removeClass(this.document.body, 'summer-theme');
        this.renderer.removeClass(this.document.body, 'fall-theme');
        this.renderer.removeClass(this.document.body, 'winter-theme');
        this.renderer.removeClass(this.document.body, 'spring-theme');
    };
    ThemeService.prototype.enableDefault = function () {
        this.clearThemes();
    };
    ThemeService.prototype.enableChristmas = function () {
        this.clearThemes();
        this.renderer.addClass(this.document.body, 'christmas-theme');
    };
    ThemeService.prototype.enableGamecock = function () {
        this.clearThemes();
        this.renderer.addClass(this.document.body, 'gamecock-theme');
    };
    ThemeService.prototype.enableHalloween = function () {
        this.clearThemes();
        this.renderer.addClass(this.document.body, 'halloween-theme');
    };
    ThemeService.prototype.enableSummer = function () {
        this.clearThemes();
        this.renderer.addClass(this.document.body, 'summer-theme');
    };
    ThemeService.prototype.enableFall = function () {
        this.clearThemes();
        this.renderer.addClass(this.document.body, 'fall-theme');
    };
    ThemeService.prototype.enableWinter = function () {
        this.clearThemes();
        this.renderer.addClass(this.document.body, 'winter-theme');
    };
    ThemeService.prototype.enableSpring = function () {
        this.clearThemes();
        this.renderer.addClass(this.document.body, 'spring-theme');
    };
    ThemeService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["RendererFactory2"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["RendererFactory2"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            Document])
    ], ThemeService);
    return ThemeService;
}());



/***/ })

}]);
//# sourceMappingURL=change-theme-change-theme-module-es5.js.map