(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_docentes_materias-docente_materias-docente_module_ts"],{

/***/ 952:
/*!******************************************************************************!*\
  !*** ./src/app/docentes/materias-docente/materias-docente-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MateriasDocentePageRoutingModule": () => (/* binding */ MateriasDocentePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _materias_docente_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./materias-docente.page */ 3529);




const routes = [
    {
        path: '',
        component: _materias_docente_page__WEBPACK_IMPORTED_MODULE_0__.MateriasDocentePage,
    },
];
let MateriasDocentePageRoutingModule = class MateriasDocentePageRoutingModule {
};
MateriasDocentePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MateriasDocentePageRoutingModule);



/***/ }),

/***/ 1170:
/*!**********************************************************************!*\
  !*** ./src/app/docentes/materias-docente/materias-docente.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MateriasDocentePageModule": () => (/* binding */ MateriasDocentePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _materias_docente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./materias-docente-routing.module */ 952);
/* harmony import */ var _materias_docente_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materias-docente.page */ 3529);







let MateriasDocentePageModule = class MateriasDocentePageModule {
};
MateriasDocentePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _materias_docente_routing_module__WEBPACK_IMPORTED_MODULE_0__.MateriasDocentePageRoutingModule,
        ],
        declarations: [_materias_docente_page__WEBPACK_IMPORTED_MODULE_1__.MateriasDocentePage],
    })
], MateriasDocentePageModule);



/***/ }),

/***/ 3529:
/*!********************************************************************!*\
  !*** ./src/app/docentes/materias-docente/materias-docente.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MateriasDocentePage": () => (/* binding */ MateriasDocentePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_materias_docente_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./materias-docente.page.html */ 4729);
/* harmony import */ var _materias_docente_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materias-docente.page.scss */ 2907);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let MateriasDocentePage = class MateriasDocentePage {
    constructor() { }
    ngOnInit() {
    }
};
MateriasDocentePage.ctorParameters = () => [];
MateriasDocentePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-materias-docente',
        template: _raw_loader_materias_docente_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_materias_docente_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MateriasDocentePage);



/***/ }),

/***/ 2907:
/*!**********************************************************************!*\
  !*** ./src/app/docentes/materias-docente/materias-docente.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".botonRegresar {\n  margin-top: 40px !important;\n  margin-left: 40px !important;\n}\n\n.materias {\n  display: flex !important;\n  flex-wrap: wrap !important;\n  justify-content: center !important;\n}\n\n.materia {\n  margin: 30px !important;\n  padding: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFzLWRvY2VudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0FBQ0oiLCJmaWxlIjoibWF0ZXJpYXMtZG9jZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90b25SZWdyZXNhcntcclxuICAgIG1hcmdpbi10b3A6IDQwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXRlcmlhc3tcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdGVyaWF7XHJcbiAgICBtYXJnaW46IDMwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ 4729:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docentes/materias-docente/materias-docente.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Mis Materias\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Mis Materias</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-button shape=\"round\" class=\"botonRegresar\" routerLink=\"../inicio\">Regresar a Inicio</ion-button>\r\n\r\n  <div class=\"materias\">\r\n  <ion-card class=\"materia\" routerLink=\"../crear-anuncio\">\r\n    <img src=\"https://biblioteca.acropolis.org/wp-content/uploads/2014/12/anaranjado.png\">\r\n    <ion-card-title>Hermeneutica I</ion-card-title>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"materia\" routerLink=\"../crear-anuncio\">\r\n    <img src=\"https://biblioteca.acropolis.org/wp-content/uploads/2014/12/anaranjado.png\">\r\n    <ion-card-title>Hermeneutica II</ion-card-title>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"materia\" routerLink=\"../crear-anuncio\">\r\n    <img src=\"https://biblioteca.acropolis.org/wp-content/uploads/2014/12/anaranjado.png\">\r\n    <ion-card-title>Hermeneutica III</ion-card-title>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"materia\" routerLink=\"../crear-anuncio\">\r\n    <img src=\"https://biblioteca.acropolis.org/wp-content/uploads/2014/12/anaranjado.png\">\r\n    <ion-card-title>Hermeneutica IV</ion-card-title>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"materia\" routerLink=\"../crear-anuncio\">\r\n    <img src=\"https://biblioteca.acropolis.org/wp-content/uploads/2014/12/anaranjado.png\">\r\n    <ion-card-title>Hermeneutica V</ion-card-title>\r\n  </ion-card>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_docentes_materias-docente_materias-docente_module_ts.js.map