(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item button (click)=\"routeTo('./change-theme')\">\n    <ion-icon slot=\"start\" src=\"/assets/icon/color-palette-outline.svg\"></ion-icon>\n    <ion-label>\n      Change Theme\n    </ion-label>\n  </ion-item>\n\n  <ion-item button (click)=\"routeTo('./app-info')\">\n    <ion-icon slot=\"start\" name=\"information-circle-outline\"></ion-icon>\n    <ion-label>\n      About App\n    </ion-label>\n  </ion-item>\n\n  <ion-item (click)=\"presentAlertConfirm()\" lines=none>\n    <ion-label color=\"danger\" style=\"text-align: center;\">\n      Clear Your Posts\n    </ion-label>\n  </ion-item>\n</ion-content>\n"

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
                //console.log(doc.data());
                //console.log(doc.ref.id);
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

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");




var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
var SettingsPageRoutingModule = /** @class */ (function () {
    function SettingsPageRoutingModule() {
    }
    SettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SettingsPageRoutingModule);
    return SettingsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item.service */ "./src/app/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var SettingsPage = /** @class */ (function () {
    function SettingsPage(router, itemService, alertController) {
        this.router = router;
        this.itemService = itemService;
        this.alertController = alertController;
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    // routes to input page
    SettingsPage.prototype.routeTo = function (route) {
        this.router.navigate([route]);
    };
    SettingsPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.itemService.yourPost.length == 0) {
                            this.itemService.presentToast("There's nothing to clear!");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Clear Posts Locally',
                                message: 'You sure about this?',
                                buttons: [
                                    {
                                        text: 'No',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            console.log('Confirm Cancel: blah');
                                        }
                                    }, {
                                        text: 'Yes',
                                        handler: function () {
                                            console.log('Confirm Okay');
                                            var length = _this.itemService.yourPost.length;
                                            _this.itemService.yourPost = [];
                                            _this.itemService.presentToast("You cleared " + length + " posts");
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es5.js.map