(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_materia_materia_module_ts"],{

/***/ 4670:
/*!***************************************************!*\
  !*** ./src/app/materia/materia-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MateriaPageRoutingModule": () => (/* binding */ MateriaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _materia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./materia.page */ 300);
/* harmony import */ var _tarea_revisada_tarea_revisada_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tarea-revisada/tarea-revisada.page */ 5502);
/* harmony import */ var _tarea_revisada_tarea_revisada_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tarea-revisada/tarea-revisada.module */ 8709);






const routes = [
    {
        path: '',
        component: _materia_page__WEBPACK_IMPORTED_MODULE_0__.MateriaPage,
    },
    {
        path: 'foros',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_foros_foros_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../foros/foros.module */ 9987)).
            then((m) => m.ForosPageModule),
    },
    {
        path: 'entregar-tarea',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_entregar-tarea_entregar-tarea_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../entregar-tarea/entregar-tarea.module */ 4886)).
            then((m) => m.EntregarTareaPageModule),
    },
    {
        path: 'tarea-revisada',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../tarea-revisada/tarea-revisada.module */ 8709)).
            then((m) => m.TareaRevisadaPageModule),
    },
    {
        path: 'grupos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_grupos_grupos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../grupos/grupos.module */ 9755)).
            then((m) => m.GruposPageModule),
    },
];
let MateriaPageRoutingModule = class MateriaPageRoutingModule {
};
MateriaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        entryComponents: [_tarea_revisada_tarea_revisada_page__WEBPACK_IMPORTED_MODULE_1__.TareaRevisadaPage],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _tarea_revisada_tarea_revisada_module__WEBPACK_IMPORTED_MODULE_2__.TareaRevisadaPageModule],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], MateriaPageRoutingModule);



/***/ }),

/***/ 3476:
/*!*******************************************!*\
  !*** ./src/app/materia/materia.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MateriaPageModule": () => (/* binding */ MateriaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _materia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./materia-routing.module */ 4670);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _materia_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materia.page */ 300);








let MateriaPageModule = class MateriaPageModule {
};
MateriaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _materia_routing_module__WEBPACK_IMPORTED_MODULE_0__.MateriaPageRoutingModule,
        ],
        declarations: [_materia_page__WEBPACK_IMPORTED_MODULE_2__.MateriaPage],
    })
], MateriaPageModule);



/***/ }),

/***/ 300:
/*!*****************************************!*\
  !*** ./src/app/materia/materia.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MateriaPage": () => (/* binding */ MateriaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_materia_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./materia.page.html */ 4698);
/* harmony import */ var _materia_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materia.page.scss */ 6760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tarea_revisada_tarea_revisada_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tarea-revisada/tarea-revisada.page */ 5502);






let MateriaPage = class MateriaPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    mostrarRetroalimentacion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _tarea_revisada_tarea_revisada_page__WEBPACK_IMPORTED_MODULE_2__.TareaRevisadaPage,
            });
            yield modal.present();
        });
    }
};
MateriaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
MateriaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-materia',
        template: _raw_loader_materia_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_materia_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MateriaPage);



/***/ }),

/***/ 6489:
/*!*****************************************************************!*\
  !*** ./src/app/tarea-revisada/tarea-revisada-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TareaRevisadaPageRoutingModule": () => (/* binding */ TareaRevisadaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let TareaRevisadaPageRoutingModule = class TareaRevisadaPageRoutingModule {
};
TareaRevisadaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({})
], TareaRevisadaPageRoutingModule);



/***/ }),

/***/ 8709:
/*!*********************************************************!*\
  !*** ./src/app/tarea-revisada/tarea-revisada.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TareaRevisadaPageModule": () => (/* binding */ TareaRevisadaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tarea_revisada_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tarea-revisada-routing.module */ 6489);
/* harmony import */ var _tarea_revisada_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tarea-revisada.page */ 5502);







let TareaRevisadaPageModule = class TareaRevisadaPageModule {
};
TareaRevisadaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tarea_revisada_routing_module__WEBPACK_IMPORTED_MODULE_0__.TareaRevisadaPageRoutingModule,
        ],
        declarations: [_tarea_revisada_page__WEBPACK_IMPORTED_MODULE_1__.TareaRevisadaPage],
    })
], TareaRevisadaPageModule);



/***/ }),

/***/ 5502:
/*!*******************************************************!*\
  !*** ./src/app/tarea-revisada/tarea-revisada.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TareaRevisadaPage": () => (/* binding */ TareaRevisadaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tarea_revisada_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tarea-revisada.page.html */ 6373);
/* harmony import */ var _tarea_revisada_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tarea-revisada.page.scss */ 6593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let TareaRevisadaPage = class TareaRevisadaPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    salirRetroalimentacion() {
        this.modalController.dismiss();
    }
};
TareaRevisadaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
TareaRevisadaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tarea-revisada',
        template: _raw_loader_tarea_revisada_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tarea_revisada_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TareaRevisadaPage);



/***/ }),

/***/ 6760:
/*!*******************************************!*\
  !*** ./src/app/materia/materia.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".botonRegresar {\n  margin-top: 40px !important;\n  margin-left: 40px !important;\n}\n\n.botonForos {\n  margin-top: 40px !important;\n  margin-left: 40px !important;\n  --background: #3e9974 !important;\n}\n\n.botonGrupos {\n  margin-top: 40px !important;\n  margin-left: 40px !important;\n  --background: #99623e !important;\n}\n\n.icon-right {\n  margin-right: 10px;\n  height: 20px;\n  width: 20px;\n}\n\n.anuncio {\n  font-size: 20px;\n}\n\n.anunciosContenido {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  overflow-y: auto;\n  justify-content: left;\n  height: 300px;\n  margin-left: 2em;\n  margin-right: 2em;\n  margin-bottom: 2em;\n}\n\n.anunciosContenido .listaAnuncios li {\n  text-align: left;\n  border: none;\n}\n\n.anunciosContenido .listaAnuncios .anuncioItem span {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  padding-left: 1%;\n  padding-right: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0MsMkJBQUE7RUFDRyw0QkFBQTtFQUNILGdDQUFBO0FBQ0Q7O0FBRUE7RUFDQywyQkFBQTtFQUNHLDRCQUFBO0VBQ0gsZ0NBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0VBQ0csWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNDLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFFRyxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtBQUFEOztBQUdBO0VBQ0MsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUQiLCJmaWxlIjoibWF0ZXJpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90b25SZWdyZXNhcntcclxuICAgIG1hcmdpbi10b3A6IDQwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3RvbkZvcm9ze1xyXG5cdG1hcmdpbi10b3A6IDQwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcblx0LS1iYWNrZ3JvdW5kOiAgIzNlOTk3NCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm90b25HcnVwb3N7XHJcblx0bWFyZ2luLXRvcDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcclxuXHQtLWJhY2tncm91bmQ6ICAjOTk2MjNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uLXJpZ2h0e1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4uYW51bmNpb3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmFudW5jaW9zQ29udGVuaWRvIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblx0aGVpZ2h0OiAzMDBweDtcclxuXHQvL21hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbi5hbnVuY2lvc0NvbnRlbmlkbyAubGlzdGFBbnVuY2lvcyBsaXtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmFudW5jaW9zQ29udGVuaWRvIC5saXN0YUFudW5jaW9zIC5hbnVuY2lvSXRlbSBzcGFue1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMyk7XHJcblx0cGFkZGluZy1sZWZ0OiAxJTtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxJTtcclxuXHJcbn0iXX0= */");

/***/ }),

/***/ 6593:
/*!*********************************************************!*\
  !*** ./src/app/tarea-revisada/tarea-revisada.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".icon-right {\n  margin-right: 10px;\n  height: 20px;\n  width: 20px;\n}\n\n.descripcionRetro {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  overflow-y: auto;\n  justify-content: left;\n  height: 300px;\n  margin-left: 2em;\n  margin-right: 2em;\n  margin-bottom: 2em;\n}\n\n.botonListo {\n  padding-top: 30px !important;\n  height: 80px !important;\n  display: flex;\n  justify-content: center !important;\n}\n\n#calificacionDada {\n  font-size: 14px !important;\n  color: #004d4d !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhcmVhLXJldmlzYWRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0csWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNDLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFFRyxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUFBSjs7QUFHQTtFQUNJLDBCQUFBO0VBQ0EseUJBQUE7QUFBSiIsImZpbGUiOiJ0YXJlYS1yZXZpc2FkYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1yaWdodHtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLmRlc2NyaXBjaW9uUmV0cm8ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuXHRvdmVyZmxvdy15OiBhdXRvO1xyXG5cdGp1c3RpZnktY29udGVudDogbGVmdDtcclxuXHRoZWlnaHQ6IDMwMHB4O1xyXG5cdC8vbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBtYXJnaW4tbGVmdDoyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLmJvdG9uTGlzdG97XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2NhbGlmaWNhY2lvbkRhZGF7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDA0ZDRkICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 4698:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/materia/materia.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Materia</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  <ion-button shape=\"round\" class=\"botonRegresar\" routerLink=\"../../inicio\">Regresar a Inicio</ion-button>\r\n  \r\n  <ion-button shape=\"round\" class=\"botonForos\" routerLink=\"./foros\">Foros de la materia</ion-button>\r\n\r\n  <ion-button shape=\"round\" class=\"botonGrupos\" routerLink=\"./grupos\">Grupos de la materia</ion-button>\r\n\r\n\r\n  <!-- ANUNCIOS EN LA PÁGINA DE LA MATERIA -->\r\n  <div class=\"ion-padding\">\r\n    <ion-icon class=\"icon-right\" name=\"megaphone-outline\"></ion-icon>\r\n    <span class=\"anuncio\">Anuncios</span>\r\n  </div>\r\n\r\n  <div class=\"anunciosContenido\">\r\n    <ul class=\"listaAnuncios\">\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">ACTIVIDAD DE PRÓXIMA SEMANA</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">PROYECTO PARCIAL</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">DUDAS SOBRE LA TAREA</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n\r\n\r\n  <!-- DEBERES EN LA PÁGINA DE LA MATERIA -->\r\n  <div class=\"ion-padding\">\r\n    <ion-icon class= \"icon-right\" name=\"reader-outline\"></ion-icon>\r\n    <span class=\"anuncio\">Trabajos</span> \r\n  </div>\r\n\r\n  <div class=\"anunciosContenido\">\r\n    <ul class=\"listaAnuncios\">\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col (click)=\"mostrarRetroalimentacion()\" class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">Analizar video</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n              <p class=\"calificacionT\"><b>Calificación:</b> 9/10</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col routerLink=\"./entregar-tarea\" class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">Ideas principales</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n              <p class=\"calificacionT\"><b>Calificación:</b> Sin Calificar</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n\r\n\r\n  <!-- TALLERES EN LA PÁGINA DE LA MATERIA -->\r\n  <div class=\"ion-padding\">\r\n    <ion-icon class= \"icon-right\" name=\"barbell-outline\"></ion-icon>\r\n    <span class=\"anuncio\">Talleres</span> \r\n  </div>\r\n\r\n  <div class=\"anunciosContenido\">\r\n    <ul class=\"listaAnuncios\">\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">Taller 1</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n              <p class=\"calificacionT\"><b>Calificación:</b> Sin Calificar</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">Taller 2</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n              <p class=\"calificacionT\"><b>Calificación:</b> Sin Calificar</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n\r\n\r\n  <!-- RECURSOS EN LA PÁGINA DE LA MATERIA -->\r\n  <div class=\"ion-padding\">\r\n    <ion-icon  class= \"icon-right\"name=\"book-outline\"></ion-icon>\r\n    <span class=\"anuncio\">Recursos</span>\r\n  </div>\r\n\r\n  <div class=\"anunciosContenido\">\r\n    <ul class=\"listaAnuncios\">\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row>\r\n            <ion-col col-sm=12 col-md=6>\r\n              <span >Libros</span>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row>\r\n            <ion-col col-sm=12 col-md=6>\r\n              <span >Diapositivas</span>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 6373:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tarea-revisada/tarea-revisada.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Tarea Revisada</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding\">\r\n    <ion-icon class= \"icon-right\" name=\"reader-outline\"></ion-icon>\r\n    <span class=\"tituloRe\">Retroalimentación del profesor</span>\r\n    <p id=\"calificacionDada\"><b>Calificación:</b> 9/10</p>\r\n  </div>\r\n\r\n  <div class=\"descripcionRetro\">\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed risus mattis, varius mi eget, commodo tellus. Pellentesque id dolor et risus lobortis lacinia non rutrum odio.</p>\r\n  </div>\r\n\r\n  <ion-button shape=\"round\" class=\"botonListo\" (click)=\"salirRetroalimentacion()\">Listo</ion-button>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_materia_materia_module_ts.js.map