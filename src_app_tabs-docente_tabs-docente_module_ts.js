(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_tabs-docente_tabs-docente_module_ts"],{

/***/ 1819:
/*!*************************************************************!*\
  !*** ./src/app/tabs-docente/tabs-docente-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsDocentePageRoutingModule": () => (/* binding */ TabsDocentePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tabs_docente_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-docente.page */ 3582);




const routes = [
    {
        path: 'docente',
        component: _tabs_docente_page__WEBPACK_IMPORTED_MODULE_0__.TabsDocentePage,
        children: [
            {
                path: 'inicio',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_docentes_materias-docente_materias-docente_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../docentes/materias-docente/materias-docente.module */ 1170)).
                    then((m) => m.MateriasDocentePageModule),
            },
            {
                path: 'crear-anuncio',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_docentes_crear-anuncio_crear-anuncio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../docentes/crear-anuncio/crear-anuncio.module */ 4128)).
                    then((m) => m.CrearAnuncioPageModule),
            },
            {
                path: 'grupos',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_docentes_grupos_grupos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../docentes/grupos/grupos.module */ 6546)).
                    then((m) => m.GruposPageModule),
            },
            {
                path: 'reporte-notas-alumno',
                loadChildren: () => 
                // eslint-disable-next-line max-len
                Promise.all(/*! import() */[__webpack_require__.e("default-src_app_material_module_ts"), __webpack_require__.e("default-src_app_services_exporter_service_ts"), __webpack_require__.e("src_app_docentes_reporte-notas-alumno_reporte-notas-alumno_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../docentes/reporte-notas-alumno/reporte-notas-alumno.module */ 1833)).
                    then((m) => m.ReporteNotasAlumnoPageModule),
            },
            {
                path: 'reporte-notas-materia',
                loadChildren: () => 
                // eslint-disable-next-line max-len
                Promise.all(/*! import() */[__webpack_require__.e("default-src_app_material_module_ts"), __webpack_require__.e("default-src_app_services_exporter_service_ts"), __webpack_require__.e("src_app_docentes_reporte-notas-materia_reporte-notas-materia_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../docentes/reporte-notas-materia/reporte-notas-materia.module */ 7795)).
                    then((m) => m.ReporteNotasMateriaPageModule),
            },
            {
                path: 'agregar-grupo',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_material_module_ts"), __webpack_require__.e("src_app_docentes_agregar-grupo_agregar-grupo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../docentes/agregar-grupo/agregar-grupo.module */ 7595)).
                    then((m) => m.AgregarGrupoPageModule),
            },
            {
                path: 'tarea',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_material_module_ts"), __webpack_require__.e("src_app_docentes_tarea_tarea_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../docentes/tarea/tarea.module */ 7819)).
                    then((m) => m.TareaPageModule),
            },
            {
                path: 'new-trabajo',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_material_module_ts"), __webpack_require__.e("src_app_docentes_new-trabajo_new-trabajo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../docentes/new-trabajo/new-trabajo.module */ 1320)).
                    then((m) => m.NewTrabajoPageModule),
            },
            {
                path: 'trabajo',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_docentes_trabajo_trabajo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../docentes/trabajo/trabajo.module */ 6585)).
                    then((m) => m.TrabajoPageModule),
            },
            {
                path: 'cuenta-docente',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_docentes_cuenta-docente_cuenta-docente_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../docentes/cuenta-docente/cuenta-docente.module */ 1919)).
                    then((m) => m.CuentaDocentePageModule),
            },
            {
                path: '',
                redirectTo: '/docente/inicio',
                pathMatch: 'full',
            },
        ],
    },
];
let TabsDocentePageRoutingModule = class TabsDocentePageRoutingModule {
};
TabsDocentePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsDocentePageRoutingModule);



/***/ }),

/***/ 959:
/*!*****************************************************!*\
  !*** ./src/app/tabs-docente/tabs-docente.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsDocentePageModule": () => (/* binding */ TabsDocentePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tabs_docente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-docente-routing.module */ 1819);
/* harmony import */ var _tabs_docente_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-docente.page */ 3582);







let TabsDocentePageModule = class TabsDocentePageModule {
};
TabsDocentePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabs_docente_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsDocentePageRoutingModule,
        ],
        declarations: [_tabs_docente_page__WEBPACK_IMPORTED_MODULE_1__.TabsDocentePage],
    })
], TabsDocentePageModule);



/***/ }),

/***/ 3582:
/*!***************************************************!*\
  !*** ./src/app/tabs-docente/tabs-docente.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsDocentePage": () => (/* binding */ TabsDocentePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tabs_docente_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs-docente.page.html */ 7376);
/* harmony import */ var _tabs_docente_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-docente.page.scss */ 4935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TabsDocentePage = class TabsDocentePage {
    constructor() { }
    ngOnInit() {
    }
};
TabsDocentePage.ctorParameters = () => [];
TabsDocentePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs-docente',
        template: _raw_loader_tabs_docente_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_docente_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsDocentePage);



/***/ }),

/***/ 4935:
/*!*****************************************************!*\
  !*** ./src/app/tabs-docente/tabs-docente.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".segment-tab {\n  display: flex;\n  overflow-x: auto;\n  justify-content: center !important;\n}\n.segment-tab .segment-item {\n  min-width: 70px !important;\n  width: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMtZG9jZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQUNKO0FBQUk7RUFDSSwwQkFBQTtFQUNBLHNCQUFBO0FBRVIiLCJmaWxlIjoidGFicy1kb2NlbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWdtZW50LXRhYiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAuc2VnbWVudC1pdGVtIHtcclxuICAgICAgICBtaW4td2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 7376:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs-docente/tabs-docente.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\r\n\r\n  <ion-tab-bar class=\"segment-tab\" slot=\"bottom\" >\r\n    <ion-tab-button class=\"segment-item\" tab=\"inicio\">\r\n      <ion-icon name=\"grid-outline\"></ion-icon>\r\n      <ion-label>Mis Materias</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button class=\"segment-item\" tab=\"reporte-notas-alumno\">\r\n      <ion-icon name=\"file-tray-full-outline\"></ion-icon>\r\n      <ion-label>Reporte Alumno</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button class=\"segment-item\" tab=\"reporte-notas-materia\">\r\n      <ion-icon name=\"mail-outline\"></ion-icon>\r\n      <ion-label>Reporte Materia</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button class=\"segment-item\" tab=\"cuenta-docente\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      <ion-label>Cuenta</ion-label>\r\n    </ion-tab-button>\r\n\r\n    \r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs-docente_tabs-docente_module_ts.js.map