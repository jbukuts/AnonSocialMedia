(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~product-detail-product-detail-module~reply-modal-reply-modal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/reply-modal/reply-modal.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reply-modal/reply-modal.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title *ngIf=\"post\">Reply {{post.docId}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"post\">\n    <ion-img *ngIf=\"post.img\" [src]=\"post.img\"></ion-img>\n    <ion-text>\n      <p id=\"title\" *ngIf=\"post.title\">{{post.title}}</p>\n      <p id=\"text\">{{post.text}}</p>\n      <p id=\"timestamp\" color=\"primary\" *ngIf=\"post.timestamp\">Posted At {{getDate(post.timestamp)}}</p>\n    </ion-text>\n</ion-card>\n\n\n  <form [formGroup]=\"new_reply_form\" (submit)=\"createReply(new_reply_form.value)\">\n    <ion-item>\n      <ion-label position=\"stacked\">Text</ion-label>\n      <ion-textarea type=\"text\" formControlName=\"text\" required=true></ion-textarea>\n    </ion-item>\n\n    <ion-button class=\"submit-btn\" expand=\"block\" (click)=\"selectImage()\">\n      Add Image\n    </ion-button>\n\n    <ion-img *ngIf=\"imgFile\" style=\"border-radius: 10px; overflow:hidden;\" [src]=\"imgFile\"></ion-img>\n\n    <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" disabled={{!new_reply_form.valid}}>\n      Create Reply\n    </ion-button>\n\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/reply-modal/reply-modal-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/reply-modal/reply-modal-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ReplyModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyModalPageRoutingModule", function() { return ReplyModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reply_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reply-modal.page */ "./src/app/reply-modal/reply-modal.page.ts");




var routes = [
    {
        path: '',
        component: _reply_modal_page__WEBPACK_IMPORTED_MODULE_3__["ReplyModalPage"]
    }
];
var ReplyModalPageRoutingModule = /** @class */ (function () {
    function ReplyModalPageRoutingModule() {
    }
    ReplyModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ReplyModalPageRoutingModule);
    return ReplyModalPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/reply-modal/reply-modal.module.ts":
/*!***************************************************!*\
  !*** ./src/app/reply-modal/reply-modal.module.ts ***!
  \***************************************************/
/*! exports provided: ReplyModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyModalPageModule", function() { return ReplyModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reply_modal_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reply-modal-routing.module */ "./src/app/reply-modal/reply-modal-routing.module.ts");
/* harmony import */ var _reply_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reply-modal.page */ "./src/app/reply-modal/reply-modal.page.ts");









var ReplyModalPageModule = /** @class */ (function () {
    function ReplyModalPageModule() {
    }
    ReplyModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _reply_modal_routing_module__WEBPACK_IMPORTED_MODULE_7__["ReplyModalPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [
                _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]
            ],
            declarations: [_reply_modal_page__WEBPACK_IMPORTED_MODULE_8__["ReplyModalPage"]]
        })
    ], ReplyModalPageModule);
    return ReplyModalPageModule;
}());



/***/ }),

/***/ "./src/app/reply-modal/reply-modal.page.scss":
/*!***************************************************!*\
  !*** ./src/app/reply-modal/reply-modal.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title {\n  font-size: 20px;\n  color: black;\n  margin-left: 10px;\n  font-weight: bold;\n}\n\n#text {\n  font-size: 16px;\n  color: #444444;\n  margin-left: 10px;\n}\n\n#timestamp {\n  font-size: 12px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pidWt1dHMvRG9jdW1lbnRzL0dpdGh1Yi9Bbm9uU29jaWFsTWVkaWEvc3JjL2FwcC9yZXBseS1tb2RhbC9yZXBseS1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlcGx5LW1vZGFsL3JlcGx5LW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXBseS1tb2RhbC9yZXBseS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiN0ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbiN0aW1lc3RhbXAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn0iLCIjdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4jdGltZXN0YW1wIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/reply-modal/reply-modal.page.ts":
/*!*************************************************!*\
  !*** ./src/app/reply-modal/reply-modal.page.ts ***!
  \*************************************************/
/*! exports provided: ReplyModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyModalPage", function() { return ReplyModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item.service */ "./src/app/item.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_8__);












var ReplyModalPage = /** @class */ (function () {
    function ReplyModalPage(modalController, navParams, formBuilder, itemService, events, camera, actionSheet, file) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.events = events;
        this.camera = camera;
        this.actionSheet = actionSheet;
        this.file = file;
        this.modalCtrl = modalController;
    }
    ReplyModalPage.prototype.ngOnInit = function () {
        this.new_reply_form = this.formBuilder.group({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    ReplyModalPage.prototype.getDate = function (d) {
        var date = new Date(parseInt(d));
        return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
    };
    // pops up the action sheet
    ReplyModalPage.prototype.selectImage = function () {
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
    ReplyModalPage.prototype.pickImage = function (sourceType) {
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
    // called when the button is clicked
    ReplyModalPage.prototype.createReply = function (reply) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, object, pictures, uploadTask, db;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(reply);
                        // this will present a toast
                        return [4 /*yield*/, this.itemService.presentToast("Reply Created!")];
                    case 1:
                        // this will present a toast
                        _a.sent();
                        self = this;
                        object = {
                            text: reply.text,
                            replyTo: this.post.docId,
                            timestamp: Date.now()
                        };
                        if (!(this.imgFile != null)) return [3 /*break*/, 4];
                        pictures = firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]().ref('pictures/' + Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v1"])());
                        return [4 /*yield*/, pictures.putString(this.imgFile, 'data_url')];
                    case 2:
                        uploadTask = _a.sent();
                        return [4 /*yield*/, pictures.getDownloadURL().then(function (downloadURL) {
                                console.log('FILE AVAILABLE AT ', downloadURL);
                                object['img'] = downloadURL;
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        db = firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"]();
                        db.collection(this.board + '/' + this.originalPost + '/replies').add(object)
                            .then(function (docRef) {
                            console.log("Document written with ID", docRef.id);
                            // TODO: add replies to your post!
                        })
                            .catch(function (error) {
                            console.error("Error adding document: ", error);
                        });
                        // clear the form and dismiss the modal
                        return [4 /*yield*/, this.dismiss()];
                    case 5:
                        // clear the form and dismiss the modal
                        _a.sent();
                        this.new_reply_form.reset();
                        this.events.publish('replychange', Date.now());
                        return [2 /*return*/];
                }
            });
        });
    };
    ReplyModalPage.prototype.dismiss = function () {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    };
    ReplyModalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReplyModalPage.prototype, "post", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ReplyModalPage.prototype, "board", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ReplyModalPage.prototype, "originalPost", void 0);
    ReplyModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reply-modal',
            template: __webpack_require__(/*! raw-loader!./reply-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/reply-modal/reply-modal.page.html"),
            styles: [__webpack_require__(/*! ./reply-modal.page.scss */ "./src/app/reply-modal/reply-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]])
    ], ReplyModalPage);
    return ReplyModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~product-detail-product-detail-module~reply-modal-reply-modal-module-es5.js.map