(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_foros_foros_module_ts"],{

/***/ 6307:
/*!***********************************************!*\
  !*** ./src/app/foros/foros-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForosPageRoutingModule": () => (/* binding */ ForosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _foros_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foros.page */ 9645);




const routes = [
    {
        path: '',
        component: _foros_page__WEBPACK_IMPORTED_MODULE_0__.ForosPage,
    },
    {
        path: 'hilo-foro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_hilo-foro_hilo-foro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../hilo-foro/hilo-foro.module */ 1141))
            .then((m) => m.HiloForoPageModule),
    },
];
let ForosPageRoutingModule = class ForosPageRoutingModule {
};
ForosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForosPageRoutingModule);



/***/ }),

/***/ 9987:
/*!***************************************!*\
  !*** ./src/app/foros/foros.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForosPageModule": () => (/* binding */ ForosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _foros_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foros-routing.module */ 6307);
/* harmony import */ var _foros_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foros.page */ 9645);







let ForosPageModule = class ForosPageModule {
};
ForosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _foros_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForosPageRoutingModule,
        ],
        declarations: [_foros_page__WEBPACK_IMPORTED_MODULE_1__.ForosPage],
    })
], ForosPageModule);



/***/ }),

/***/ 9645:
/*!*************************************!*\
  !*** ./src/app/foros/foros.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForosPage": () => (/* binding */ ForosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_foros_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./foros.page.html */ 9834);
/* harmony import */ var _foros_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foros.page.scss */ 1187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ForosPage = class ForosPage {
    constructor() { }
    ngOnInit() {
    }
};
ForosPage.ctorParameters = () => [];
ForosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-foros',
        template: _raw_loader_foros_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_foros_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForosPage);



/***/ }),

/***/ 1187:
/*!***************************************!*\
  !*** ./src/app/foros/foros.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".listaForos {\n  margin-top: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FBQ0oiLCJmaWxlIjoiZm9yb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3RhRm9yb3N7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 9834:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/foros/foros.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Foros de Materia</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"listaForos\">\r\n    <ion-list-header>Foros</ion-list-header>\r\n      <ion-item button=\"true\" routerLink=\"./hilo-foro\">\r\n        <ion-label>Bienvenidos alumnos!</ion-label>\r\n      </ion-item>\r\n      <ion-item button=\"true\" routerLink=\"./hilo-foro\">\r\n        <ion-label>Preguntas frecuentes</ion-label>\r\n      </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_foros_foros_module_ts.js.map