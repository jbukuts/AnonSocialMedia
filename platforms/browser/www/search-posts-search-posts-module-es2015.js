(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-posts-search-posts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/search-posts/search-posts.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search-posts/search-posts.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Search All Boards</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar\n    [(ngModel)]=\"searchTerm\"\n    (ionChange)=\"setFilteredPosts()\"\n  ></ion-searchbar>\n\n  <ion-list lines=\"none\" *ngFor=\"let p of filterPost\" style=\"margin-bottom: 2px; margin-top: 2px;\">\n    <ion-item (click)=\"goToItem(p)\" style=\"margin: auto; border-radius: 10px; width: 95%;\" color=\"tertiary\" >\n      <ion-thumbnail *ngIf=\"p.img\" slot=\"start\">\n        <ion-img [src]=\"p.img\" style=\"border-radius: 50%\"></ion-img>\n      </ion-thumbnail>\n\n      <ion-thumbnail *ngIf=\"p.img==null\" slot=\"start\">\n        <ion-img [src]=\"'https://www.cowgirlcontractcleaning.com/wp-content/uploads/sites/360/2018/05/placeholder-img-3.jpg'\" style=\"border-radius: 50%\"></ion-img>\n      </ion-thumbnail>\n      \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label>No. {{ p.docId }}</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-label style=\"font-weight: bold;\">{{getTitle(p.title)}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-icon src=\"assets/icon/arrow-forward-outline.svg\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);





let ItemService = class ItemService {
    constructor(events, toastController) {
        this.events = events;
        this.toastController = toastController;
        this.ref = firebase__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('original-post/');
        // this will represent the post you have made
        this.yourPost = new Array();
    }
    getYourPosts() {
        return this.yourPost;
    }
    getReplies(threadId, board) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var curr = this;
            let replies = [];
            var db = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
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
            return replies;
        });
    }
    // return the items
    getPosts(collectionName) {
        let postList = [];
        let db = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
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
    }
    // used to create post without image
    createPostNoImage(title, text, board) {
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
    }
    // this will create a new post with a picture
    createPost(title, text, img, board) {
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
    }
    // displays message telling user that new item was added
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'dark',
                message: message,
                duration: 2000,
                showCloseButton: true
            });
            toast.present();
        });
    }
};
ItemService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ItemService);



/***/ }),

/***/ "./src/app/search-posts/search-posts-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/search-posts/search-posts-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SearchPostsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPostsPageRoutingModule", function() { return SearchPostsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_posts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-posts.page */ "./src/app/search-posts/search-posts.page.ts");




const routes = [
    {
        path: '',
        component: _search_posts_page__WEBPACK_IMPORTED_MODULE_3__["SearchPostsPage"]
    }
];
let SearchPostsPageRoutingModule = class SearchPostsPageRoutingModule {
};
SearchPostsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchPostsPageRoutingModule);



/***/ }),

/***/ "./src/app/search-posts/search-posts.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/search-posts/search-posts.module.ts ***!
  \*****************************************************/
/*! exports provided: SearchPostsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPostsPageModule", function() { return SearchPostsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_posts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-posts-routing.module */ "./src/app/search-posts/search-posts-routing.module.ts");
/* harmony import */ var _search_posts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-posts.page */ "./src/app/search-posts/search-posts.page.ts");







let SearchPostsPageModule = class SearchPostsPageModule {
};
SearchPostsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_posts_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPostsPageRoutingModule"]
        ],
        declarations: [_search_posts_page__WEBPACK_IMPORTED_MODULE_6__["SearchPostsPage"]]
    })
], SearchPostsPageModule);



/***/ }),

/***/ "./src/app/search-posts/search-posts.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/search-posts/search-posts.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1wb3N0cy9zZWFyY2gtcG9zdHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/search-posts/search-posts.page.ts":
/*!***************************************************!*\
  !*** ./src/app/search-posts/search-posts.page.ts ***!
  \***************************************************/
/*! exports provided: SearchPostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPostsPage", function() { return SearchPostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item.service */ "./src/app/item.service.ts");





let SearchPostsPage = class SearchPostsPage {
    constructor(router, itemService, events) {
        this.router = router;
        this.itemService = itemService;
        this.events = events;
        this.searchTerm = "";
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var self = this;
            self.posts = yield self.itemService.getPosts('original-post');
            self.filterPost = self.posts;
        });
    }
    setFilteredPosts() {
        console.log("filtering: " + this.searchTerm);
        if (this.searchTerm == "") {
            this.filterPost = this.posts;
        }
        this.filterPost = this.posts.filter(post => {
            return post.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });
    }
    getTitle(title) {
        return (title.length > 15) ? title.substring(0, 15) + "..." : title;
    }
    goToItem(post) {
        console.log("displaying item info");
        console.log(post);
        this.router.navigate(["./product-detail", post]);
    }
};
SearchPostsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] }
];
SearchPostsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-posts',
        template: __webpack_require__(/*! raw-loader!./search-posts.page.html */ "./node_modules/raw-loader/index.js!./src/app/search-posts/search-posts.page.html"),
        styles: [__webpack_require__(/*! ./search-posts.page.scss */ "./src/app/search-posts/search-posts.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
], SearchPostsPage);



/***/ })

}]);
//# sourceMappingURL=search-posts-search-posts-module-es2015.js.map