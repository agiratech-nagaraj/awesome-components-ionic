(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-miscellaneous-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/miscellaneous.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/miscellaneous/miscellaneous.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Miscellaneous</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let item of items\" [routerLink]=\"item.page\" routerDirection=\"forward\">\r\n      {{ item.title }}\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/miscellaneous.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/miscellaneous.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MiscellaneousPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousPageModule", function() { return MiscellaneousPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _miscellaneous_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./miscellaneous.page */ "./src/app/pages/yannbf/components/miscellaneous/miscellaneous.page.ts");







var routes = [
    {
        path: '',
        component: _miscellaneous_page__WEBPACK_IMPORTED_MODULE_6__["MiscellaneousPage"]
    }
];
var MiscellaneousPageModule = /** @class */ (function () {
    function MiscellaneousPageModule() {
    }
    MiscellaneousPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_miscellaneous_page__WEBPACK_IMPORTED_MODULE_6__["MiscellaneousPage"]]
        })
    ], MiscellaneousPageModule);
    return MiscellaneousPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/miscellaneous.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/miscellaneous.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21pc2NlbGxhbmVvdXMvbWlzY2VsbGFuZW91cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/miscellaneous.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/miscellaneous.page.ts ***!
  \*****************************************************************************/
/*! exports provided: MiscellaneousPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousPage", function() { return MiscellaneousPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MiscellaneousPage = /** @class */ (function () {
    function MiscellaneousPage() {
        this.items = [
            {
                title: 'Autosizing Textarea',
                page: '/autosizing-text-area'
            },
            {
                title: 'Blog Post',
                page: '/blog-post'
            },
            {
                title: 'Charts',
                page: '/charts'
            },
            {
                title: 'Chat',
                page: '/chat'
            },
            {
                title: 'Concert Card',
                page: '/concert-card'
            },
            {
                title: 'Countdown',
                page: '/countdown'
            },
            {
                title: 'Expandable Header',
                page: '/expandable-header'
            },
            {
                title: 'Flash Card',
                page: '/flash-card'
            },
            {
                title: 'Pinterest Masonry Cards',
                page: '/pinterest-masonry-cards'
            },
            {
                title: 'Real Estate Listing',
                page: '/real-estate-listing'
            },
            {
                title: 'Testimonials',
                page: '/testimonials'
            },
            {
                title: 'Tinder Cards',
                page: '/tinder-cards'
            },
            {
                title: 'Item Ribbon',
                page: '/item-ribbon'
            },
        ];
    }
    MiscellaneousPage.prototype.ngOnInit = function () {
    };
    MiscellaneousPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-miscellaneous',
            template: __webpack_require__(/*! raw-loader!./miscellaneous.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/miscellaneous.page.html"),
            styles: [__webpack_require__(/*! ./miscellaneous.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/miscellaneous.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MiscellaneousPage);
    return MiscellaneousPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-miscellaneous-module-es5.js.map