(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_inicio_inicio_module_ts"],{

/***/ 9681:
/*!*************************************************!*\
  !*** ./src/app/inicio/inicio-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageRoutingModule": () => (/* binding */ InicioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page */ 8768);




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_0__.InicioPage,
    },
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ 3185:
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageModule": () => (/* binding */ InicioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-routing.module */ 9681);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page */ 8768);







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioPageRoutingModule,
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_1__.InicioPage],
    })
], InicioPageModule);



/***/ }),

/***/ 8768:
/*!***************************************!*\
  !*** ./src/app/inicio/inicio.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPage": () => (/* binding */ InicioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inicio.page.html */ 4541);
/* harmony import */ var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page.scss */ 4349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let InicioPage = class InicioPage {
    constructor() { }
    ngOnInit() {
    }
};
InicioPage.ctorParameters = () => [];
InicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-inicio',
        template: _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InicioPage);



/***/ }),

/***/ 4349:
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".icon-right {\n  margin-right: 10px;\n  height: 20px;\n  width: 20px;\n}\n\n.anuncio {\n  font-size: 20px;\n}\n\n.anunciosContenido {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  overflow-y: auto;\n  justify-content: left;\n  height: 300px;\n  margin-left: 2em;\n  margin-right: 2em;\n  margin-bottom: 2em;\n}\n\n.anunciosContenido .listaAnuncios li {\n  text-align: left;\n  border: none;\n}\n\n.anunciosContenido .listaAnuncios .anuncioItem span {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  padding-left: 1%;\n  padding-right: 1%;\n}\n\n.materiaAnuncio {\n  font-size: 10px !important;\n  color: #004d4d !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNHLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDQyxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBRUcsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDQyxnQkFBQTtFQUNBLFlBQUE7QUFFRDs7QUFDQTtFQUNDLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVEOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6ImluaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1yaWdodHtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLmFudW5jaW97XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmFudW5jaW9zQ29udGVuaWRvIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblx0aGVpZ2h0OiAzMDBweDtcclxuXHQvL21hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuLmFudW5jaW9zQ29udGVuaWRvIC5saXN0YUFudW5jaW9zIGxpe1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Ym9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYW51bmNpb3NDb250ZW5pZG8gLmxpc3RhQW51bmNpb3MgLmFudW5jaW9JdGVtIHNwYW57XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4zKTtcclxuXHRwYWRkaW5nLWxlZnQ6IDElO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDElO1xyXG5cclxufVxyXG5cclxuLm1hdGVyaWFBbnVuY2lve1xyXG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwNGQ0ZCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ 4541:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Inicio</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- ANUNCIOS SEGÚN LA MATERIA -->\r\n  <div class=\"ion-padding\">\r\n    <ion-icon class=\"icon-right\" name=\"megaphone-outline\"></ion-icon>\r\n    <span class=\"anuncio\">Anuncios</span>\r\n  </div>\r\n\r\n  <div class=\"anunciosContenido\">\r\n    <ul class=\"listaAnuncios\">\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">ACTIVIDAD DE PRÓXIMA SEMANA</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n              <p class=\"materiaAnuncio\">Hermeneutica I</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">PROYECTO PARCIAL</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n              <p class=\"materiaAnuncio\">Hermeneutica I</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">DUDAS SOBRE LA TAREA</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n              <p class=\"materiaAnuncio\">Hermeneutica I</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">ACTIVIDAD DE PRÓXIMA SEMANA</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n              <p class=\"materiaAnuncio\">Hermeneutica IV</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">PROYECTO PARCIAL</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n              <p class=\"materiaAnuncio\">Hermeneutica III</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n\r\n    </ul>\r\n  </div>\r\n\r\n\r\n  <!-- DEBERES REALIZADOS O POR REALIZAR SEGÚN LA MATERIA -->\r\n  <div class=\"ion-padding\">\r\n    <ion-icon class= \"icon-right\" name=\"reader-outline\"></ion-icon>\r\n    <span class=\"anuncio\">Trabajos</span> \r\n  </div>\r\n\r\n  <div class=\"anunciosContenido\">\r\n    <ul class=\"listaAnuncios\">\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col routerLink=\"../mis-materias/materia\" class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">Analizar video</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n              <p class=\"calificacionT\"><b>Calificación:</b> 9/10</p>\r\n              <p class=\"materiaAnuncio\">Hermeneutica I</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col routerLink=\"../mis-materias/materia/entregar-tarea\" class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">Ideas principales</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n              <p class=\"calificacionT\"><b>Calificación:</b> Sin Calificar</p>\r\n              <p class=\"materiaAnuncio\">Hermeneutica III</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n\r\n\r\n  <!-- TALLERES REALIZADOS SEGÚN LA MATERIA -->\r\n  <div class=\"ion-padding\">\r\n    <ion-icon class= \"icon-right\" name=\"barbell-outline\"></ion-icon>\r\n    <span class=\"anuncio\">Talleres</span> \r\n  </div>\r\n\r\n  <div class=\"anunciosContenido\">\r\n    <ul class=\"listaAnuncios\">\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">Taller 1</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n              <p class=\"calificacionT\"><b>Calificación:</b> Sin Calificar</p>\r\n              <p class=\"materiaAnuncio\">Hermeneutica I</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">Taller 2</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n              <p class=\"calificacionT\"><b>Calificación:</b> Sin Calificar</p>\r\n              <p class=\"materiaAnuncio\">Hermeneutica I</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">Taller 1</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n              <p class=\"calificacionT\"><b>Calificación:</b> Sin Calificar</p>\r\n              <p class=\"materiaAnuncio\">Hermeneutica II</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n      <li>\r\n        <ion-grid padding > \r\n          <ion-row >\r\n            <ion-col class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">Taller 1</span>\r\n              <p>Loren Ipsum sit amet, consectetur adiscipling elit.</p>\r\n              <p class=\"calificacionT\"><b>Calificación:</b> Sin Calificar</p>\r\n              <p class=\"materiaAnuncio\">Hermeneutica V</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_inicio_inicio_module_ts.js.map