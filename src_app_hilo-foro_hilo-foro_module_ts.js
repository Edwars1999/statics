(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_hilo-foro_hilo-foro_module_ts"],{

/***/ 7334:
/*!*******************************************************!*\
  !*** ./src/app/hilo-foro/hilo-foro-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HiloForoPageRoutingModule": () => (/* binding */ HiloForoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _hilo_foro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hilo-foro.page */ 3420);




const routes = [
    {
        path: '',
        component: _hilo_foro_page__WEBPACK_IMPORTED_MODULE_0__.HiloForoPage,
    },
];
let HiloForoPageRoutingModule = class HiloForoPageRoutingModule {
};
HiloForoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HiloForoPageRoutingModule);



/***/ }),

/***/ 1141:
/*!***********************************************!*\
  !*** ./src/app/hilo-foro/hilo-foro.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HiloForoPageModule": () => (/* binding */ HiloForoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _hilo_foro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hilo-foro-routing.module */ 7334);
/* harmony import */ var _hilo_foro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hilo-foro.page */ 3420);







let HiloForoPageModule = class HiloForoPageModule {
};
HiloForoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _hilo_foro_routing_module__WEBPACK_IMPORTED_MODULE_0__.HiloForoPageRoutingModule,
        ],
        declarations: [_hilo_foro_page__WEBPACK_IMPORTED_MODULE_1__.HiloForoPage],
    })
], HiloForoPageModule);



/***/ }),

/***/ 3420:
/*!*********************************************!*\
  !*** ./src/app/hilo-foro/hilo-foro.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HiloForoPage": () => (/* binding */ HiloForoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_hilo_foro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./hilo-foro.page.html */ 5625);
/* harmony import */ var _hilo_foro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hilo-foro.page.scss */ 5882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HiloForoPage = class HiloForoPage {
    constructor() { }
    ngOnInit() {
    }
};
HiloForoPage.ctorParameters = () => [];
HiloForoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-hilo-foro',
        template: _raw_loader_hilo_foro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_hilo_foro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HiloForoPage);



/***/ }),

/***/ 5882:
/*!***********************************************!*\
  !*** ./src/app/hilo-foro/hilo-foro.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".elementosForo {\n  margin-top: 30px !important;\n  display: flex;\n  justify-content: center !important;\n  flex-direction: column !important;\n}\n\n.datosImportantes {\n  padding-left: 20px !important;\n  padding-right: 20px !important;\n}\n\n.areaRaiz {\n  padding-top: 20px !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  text-align: justify !important;\n  border: 1px solid #b82c2c;\n  overflow-y: auto;\n}\n\n.escribirRespuesta {\n  margin-top: 30px !important;\n  display: flex;\n  justify-content: center !important;\n  flex-direction: column !important;\n}\n\n#botonResponder {\n  padding-top: 30px !important;\n  height: 70px !important;\n  --background: #5e47b6 !important;\n}\n\n.areaRespuesta {\n  padding-top: 20px !important;\n  padding-bottom: 10px !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  text-align: justify !important;\n  border: 1px solid #11b684;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpbG8tZm9yby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0gsZ0JBQUE7QUFDRDs7QUFFQTtFQUNJLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0gsZ0JBQUE7QUFDRCIsImZpbGUiOiJoaWxvLWZvcm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVsZW1lbnRvc0Zvcm97XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdG9zSW1wb3J0YW50ZXN7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFyZWFSYWl6e1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4NCwgNDQsIDQ0KTtcclxuXHRvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uZXNjcmliaXJSZXNwdWVzdGF7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuI2JvdG9uUmVzcG9uZGVye1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgIzVlNDdiNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXJlYVJlc3B1ZXN0YXtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50OyBcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE3LCAxODIsIDEzMik7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 5625:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hilo-foro/hilo-foro.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Título del Foro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"elementosForo\">\r\n    <div class=\"datosImportantes\">\r\n      <img height=\"80px\" width=\"80px\" src=\"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png\">\r\n      <h5><b>Autor:</b>[Profesor]</h5>\r\n      <h6><b>Fecha:</b>[Fecha]</h6>\r\n    </div>\r\n    <ion-textarea rows= \"5\" cols=\"20\" class=\"areaRaiz\" readonly=\"true\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. \r\n      Quisque ut tincidunt libero. Vestibulum et interdum arcu. Sed ultricies ligula vel lacus imperdiet, ac commodo sapien vehicula. \r\n      Nam blandit diam felis, sit amet iaculis lorem varius eu. Proin tempus mattis ultricies. Nullam fermentum libero molestie,\r\n       vehicula mauris sit amet, mollis ante. Maecenas justo neque, aliquet vitae dui nec, pellentesque volutpat lorem. Sed ut nisi mattis quam dictum commodo nec ut odio. \r\n       Integer pharetra aliquam diam, fermentum tincidunt ex. Ut semper dapibus sem. </ion-textarea>\r\n  </div>\r\n\r\n  <div class=\"respuestasForo\">\r\n    <!-- AQUI VAN LAS RESPUESTAS-->\r\n  </div>\r\n\r\n  <div class=\"escribirRespuesta\">\r\n    <div class=\"elementosEscritura\">\r\n      <h5><b>Escribe aquí tu respuesta:</b></h5>\r\n      <ion-textarea rows= \"5\" cols=\"20\" class=\"areaRespuesta\" autoGrow=\"true\"></ion-textarea>\r\n    </div>\r\n    <ion-button shape=\"round\" id=\"botonResponder\">Responder</ion-button>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_hilo-foro_hilo-foro_module_ts.js.map