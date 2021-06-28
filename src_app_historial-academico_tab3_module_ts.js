(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_historial-academico_tab3_module_ts"],{

/***/ 3191:
/*!************************************************************!*\
  !*** ./src/app/historial-academico/tab3-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 7310);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    },
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 6131:
/*!****************************************************!*\
  !*** ./src/app/historial-academico/tab3.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 7310);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 3191);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page],
    })
], Tab3PageModule);



/***/ }),

/***/ 7310:
/*!**************************************************!*\
  !*** ./src/app/historial-academico/tab3.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab3.page.html */ 273);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 2878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let Tab3Page = class Tab3Page {
    constructor() { }
};
Tab3Page.ctorParameters = () => [];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab3Page);



/***/ }),

/***/ 2878:
/*!****************************************************!*\
  !*** ./src/app/historial-academico/tab3.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".botonRegresar {\n  margin-top: 40px !important;\n  margin-left: 40px !important;\n}\n\n.listaMaterias {\n  margin-top: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3RvblJlZ3Jlc2Fye1xyXG4gICAgbWFyZ2luLXRvcDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpc3RhTWF0ZXJpYXN7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 273:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/historial-academico/tab3.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Historial Académico\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Historial Academico</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-button shape=\"round\" class=\"botonRegresar\" routerLink=\"../inicio\">Regresar a Inicio</ion-button>\r\n\r\n  <ion-list class=\"listaMaterias\">\r\n    <ion-list-header>Materias del 2021</ion-list-header>\r\n      <ion-item>\r\n        <ion-label>Hermeneutica I</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Hermeneutica II</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Hermeneutica III</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Hermeneutica IV</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Hermeneutica V</ion-label>\r\n      </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list class=\"listaMaterias\">\r\n      <ion-list-header>Materias del 2022</ion-list-header>\r\n      <ion-item>\r\n        <ion-label>Hermeneutica I</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Hermeneutica II</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Hermeneutica III</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Hermeneutica IV</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Hermeneutica V</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list class=\"listaMaterias\">\r\n      <ion-list-header>Materias del 2023</ion-list-header>\r\n      <ion-item>\r\n        <ion-label>Hermeneutica I</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Hermeneutica II</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Hermeneutica III</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Hermeneutica IV</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Hermeneutica V</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_historial-academico_tab3_module_ts.js.map