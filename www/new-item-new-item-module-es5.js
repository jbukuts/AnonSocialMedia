(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-item-new-item-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/new-item/new-item.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new-item/new-item.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>Create New Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"new_post_form\" (submit)=\"createPost(new_post_form.value)\">\n    <ion-item>\n      <ion-label position=\"stacked\">Title</ion-label>\n      <ion-input type=\"text\" formControlName=\"title\" required=true></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Text</ion-label>\n      <ion-textarea type=\"text\" formControlName=\"text\" required=true></ion-textarea>\n    </ion-item>\n\n    <ion-button class=\"submit-btn\" expand=\"block\" (click)=\"selectImage()\">\n      Add Image\n    </ion-button>\n\n    <ion-img *ngIf=\"imgFile\" style=\"border-radius: 10px; overflow:hidden;\" [src]=\"imgFile\"></ion-img>\n\n    <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" disabled={{!new_post_form.valid}}>\n      Create Post\n    </ion-button>\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/new-item/new-item-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/new-item/new-item-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: NewItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPageRoutingModule", function() { return NewItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-item.page */ "./src/app/new-item/new-item.page.ts");




var routes = [
    {
        path: '',
        component: _new_item_page__WEBPACK_IMPORTED_MODULE_3__["NewItemPage"]
    }
];
var NewItemPageRoutingModule = /** @class */ (function () {
    function NewItemPageRoutingModule() {
    }
    NewItemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NewItemPageRoutingModule);
    return NewItemPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/new-item/new-item.module.ts":
/*!*********************************************!*\
  !*** ./src/app/new-item/new-item.module.ts ***!
  \*********************************************/
/*! exports provided: NewItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPageModule", function() { return NewItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_item_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-item-routing.module */ "./src/app/new-item/new-item-routing.module.ts");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-item.page */ "./src/app/new-item/new-item.page.ts");









var NewItemPageModule = /** @class */ (function () {
    function NewItemPageModule() {
    }
    NewItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _new_item_routing_module__WEBPACK_IMPORTED_MODULE_7__["NewItemPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [
                _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]
            ],
            declarations: [_new_item_page__WEBPACK_IMPORTED_MODULE_8__["NewItemPage"]]
        })
    ], NewItemPageModule);
    return NewItemPageModule;
}());



/***/ }),

/***/ "./src/app/new-item/new-item.page.scss":
/*!*********************************************!*\
  !*** ./src/app/new-item/new-item.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1pdGVtL25ldy1pdGVtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/new-item/new-item.page.ts":
/*!*******************************************!*\
  !*** ./src/app/new-item/new-item.page.ts ***!
  \*******************************************/
/*! exports provided: NewItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPage", function() { return NewItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../item.service */ "./src/app/item.service.ts");












var NewItemPage = /** @class */ (function () {
    function NewItemPage(router, formBuilder, itemService, toastController, camera, actionSheet, file, route, location, navController) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.toastController = toastController;
        this.camera = camera;
        this.actionSheet = actionSheet;
        this.file = file;
        this.route = route;
        this.location = location;
        this.navController = navController;
        this.regex = "^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$";
    }
    NewItemPage.prototype.pickImage = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.imgFile = base64Image;
        }, function (err) {
            console.log(err);
        });
    };
    NewItemPage.prototype.selectImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheet.create({
                            header: "Select Image Source",
                            buttons: [{
                                    text: 'Load From Library',
                                    handler: function () {
                                        _this.pickImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.pickImage(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // displays message telling user that new item was added
    NewItemPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            color: 'dark',
                            message: 'Post has been created!',
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
    NewItemPage.prototype.ngOnInit = function () {
        var _this = this;
        // we need to get the board to post the thread to
        this.route.params.subscribe(function (param) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.board = param.board;
                console.log(this.board);
                return [2 /*return*/];
            });
        }); });
        this.new_post_form = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    // upon creation of new item
    NewItemPage.prototype.createPost = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var imgUrl, pictures, uploadTask;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // log for debug
                        console.log(value);
                        // add item through use of service module and reset form
                        console.log(this.imgFile);
                        if (this.imgFile == null) {
                            this.itemService.createPostNoImage(value.title, value.text, this.board);
                            this.new_post_form.reset();
                            this.presentToast();
                            this.navController.setDirection("back", true, "back");
                            this.location.back();
                            return [2 /*return*/];
                        }
                        pictures = firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref('pictures/' + Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v1"])());
                        return [4 /*yield*/, pictures.putString(this.imgFile, 'data_url')];
                    case 1:
                        uploadTask = _a.sent();
                        return [4 /*yield*/, pictures.getDownloadURL().then(function (downloadURL) {
                                console.log('FILE AVAILABLE AT ', downloadURL);
                                imgUrl = downloadURL;
                            })];
                    case 2:
                        _a.sent();
                        this.itemService.createPost(value.title, value.text, imgUrl, this.board);
                        this.new_post_form.reset();
                        this.presentToast();
                        // return to last page
                        this.navController.setDirection("back", true, "back");
                        this.location.back();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewItemPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _item_service__WEBPACK_IMPORTED_MODULE_10__["ItemService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    NewItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-item',
            template: __webpack_require__(/*! raw-loader!./new-item.page.html */ "./node_modules/raw-loader/index.js!./src/app/new-item/new-item.page.html"),
            styles: [__webpack_require__(/*! ./new-item.page.scss */ "./src/app/new-item/new-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _item_service__WEBPACK_IMPORTED_MODULE_10__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], NewItemPage);
    return NewItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=new-item-new-item-module-es5.js.map