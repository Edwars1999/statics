(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_docentes_tarea_tarea_module_ts"],{

/***/ 4248:
/*!*****************************************************************!*\
  !*** ./src/app/docentes/tarea/calificar/calificar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalificarComponent": () => (/* binding */ CalificarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_calificar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./calificar.component.html */ 7803);
/* harmony import */ var _calificar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calificar.component.scss */ 1255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_presentaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/presentaciones.service */ 9330);







let CalificarComponent = class CalificarComponent {
    constructor(router, presentacionService) {
        this.router = router;
        this.presentacionService = presentacionService;
        this.displayedColumns = ['nombre', 'estado', 'estado_calificacion', 'comentario', 'calificacion'];
        this.tareasEntregadas = 0;
        this.tareasPorEntregar = 32;
    }
    ngOnInit() {
        this.presentacionService.getPresentaciones().subscribe((res) => {
            if (res) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(res);
            }
        });
    }
    applyFilter(filterValue) {
        console.log(filterValue);
        this.dataSource.filter =
            filterValue.target.value.trim().toLowerCase();
    }
    getPresentaciones() {
        fetch('../../assets/presentaciones.json').then((res) => res.json())
            .then((json) => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(json);
        });
    }
    onSelect(id) {
        this.router.navigate(['docente/tarea/presentacion', id]);
    }
};
CalificarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_presentaciones_service__WEBPACK_IMPORTED_MODULE_2__.PresentacionesService }
];
CalificarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-calificar',
        template: _raw_loader_calificar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calificar_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CalificarComponent);



/***/ }),

/***/ 7411:
/*!***********************************************************************!*\
  !*** ./src/app/docentes/tarea/presentacion/presentacion.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresentacionComponent": () => (/* binding */ PresentacionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_presentacion_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./presentacion.component.html */ 5944);
/* harmony import */ var _presentacion_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentacion.component.scss */ 2351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_presentaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/presentaciones.service */ 9330);






let PresentacionComponent = class PresentacionComponent {
    constructor(route, presentacionesService, router2) {
        this.route = route;
        this.presentacionesService = presentacionesService;
        this.router2 = router2;
        this.isloaded = false;
    }
    ngOnInit() {
        this.presentacionesService.getPresentaciones().subscribe((res) => {
            if (res) {
                this.isloaded = true;
                console.log(res);
                const id = parseInt(this.route.snapshot.paramMap.get('id'));
                this.idPresentacion = id;
                this.dataSource = res;
                this.tamanoLista = res.length;
                this.alumnoPresentacion = res[this.idPresentacion - 1];
            }
        });
    }
    go(instruccion) {
        let idIr = 0;
        if (instruccion === 'atras') {
            idIr = this.idPresentacion - 1 == 0 ?
                this.dataSource.length : this.idPresentacion - 1;
        }
        else {
            idIr = this.idPresentacion == this.dataSource.length ?
                this.dataSource[0].id : this.idPresentacion + 1;
        }
        this.router2.navigate(['/docente/tarea/presentacion', idIr]);
    }
};
PresentacionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: src_app_services_presentaciones_service__WEBPACK_IMPORTED_MODULE_2__.PresentacionesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PresentacionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-presentacion',
        template: _raw_loader_presentacion_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_presentacion_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PresentacionComponent);



/***/ }),

/***/ 2259:
/*!********************************************************!*\
  !*** ./src/app/docentes/tarea/tarea-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "TareaPageRoutingModule": () => (/* binding */ TareaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tarea_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tarea.page */ 3280);
/* harmony import */ var _calificar_calificar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calificar/calificar.component */ 4248);
/* harmony import */ var _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presentacion/presentacion.component */ 7411);






const routes = [
    {
        path: '',
        component: _tarea_page__WEBPACK_IMPORTED_MODULE_0__.TareaPage,
        children: [
            {
                path: '',
                component: _calificar_calificar_component__WEBPACK_IMPORTED_MODULE_1__.CalificarComponent,
            },
            {
                path: 'presentacion/:id',
                component: _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_2__.PresentacionComponent,
            },
        ],
    },
];
let TareaPageRoutingModule = class TareaPageRoutingModule {
};
TareaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], TareaPageRoutingModule);



/***/ }),

/***/ 7819:
/*!************************************************!*\
  !*** ./src/app/docentes/tarea/tarea.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TareaPageModule": () => (/* binding */ TareaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tarea_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tarea-routing.module */ 2259);
/* harmony import */ var _tarea_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tarea.page */ 3280);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 3806);
/* harmony import */ var _calificar_calificar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calificar/calificar.component */ 4248);
/* harmony import */ var _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presentacion/presentacion.component */ 7411);










let TareaPageModule = class TareaPageModule {
};
TareaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _tarea_routing_module__WEBPACK_IMPORTED_MODULE_0__.TareaPageRoutingModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        ],
        exports: [_tarea_page__WEBPACK_IMPORTED_MODULE_1__.TareaPage],
        declarations: [_tarea_page__WEBPACK_IMPORTED_MODULE_1__.TareaPage, _calificar_calificar_component__WEBPACK_IMPORTED_MODULE_3__.CalificarComponent, _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_4__.PresentacionComponent],
    })
], TareaPageModule);



/***/ }),

/***/ 3280:
/*!**********************************************!*\
  !*** ./src/app/docentes/tarea/tarea.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TareaPage": () => (/* binding */ TareaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tarea_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tarea.page.html */ 73);
/* harmony import */ var _tarea_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tarea.page.scss */ 4056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TareaPage = class TareaPage {
    constructor() { }
    ngOnInit() {
    }
};
TareaPage.ctorParameters = () => [];
TareaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tarea',
        template: _raw_loader_tarea_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tarea_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TareaPage);



/***/ }),

/***/ 9330:
/*!****************************************************!*\
  !*** ./src/app/services/presentaciones.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresentacionesService": () => (/* binding */ PresentacionesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 8002);




let PresentacionesService = class PresentacionesService {
    constructor(http) {
        this.http = http;
        this.presentaciones = [];
    }
    getPresentaciones() {
        return this.http.get('/assets/presentaciones.json')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((presentaciones) => {
            return presentaciones;
        }));
    }
};
PresentacionesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PresentacionesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], PresentacionesService);



/***/ }),

/***/ 1255:
/*!*******************************************************************!*\
  !*** ./src/app/docentes/tarea/calificar/calificar.component.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".list_header_table {\n  display: flex;\n  background-color: white;\n  color: black;\n  list-style: none;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n}\n\n.over {\n  display: inline-flex;\n}\n\n.td_calificacion {\n  display: flex;\n  height: 100%;\n}\n\n.input_calificacion {\n  width: 10px;\n}\n\n.icon_book {\n  margin-right: 15px;\n}\n\n.container_search {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.container_search .icon_search {\n  margin-left: 50px;\n}\n\ntable {\n  width: 100%;\n}\n\n.icono {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGlmaWNhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksb0JBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFNSjs7QUFKSTtFQUNJLGlCQUFBO0FBTVI7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtBQU9KIiwiZmlsZSI6ImNhbGlmaWNhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0X2hlYWRlcl90YWJsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLm92ZXJ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4udGRfY2FsaWZpY2FjaW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uaW5wdXRfY2FsaWZpY2FjaW9ue1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbn1cclxuLmljb25fYm9va3tcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uY29udGFpbmVyX3NlYXJjaHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIFxyXG4gICAgLmljb25fc2VhcmNoe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuLmljb25ve1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn0iXX0= */");

/***/ }),

/***/ 2351:
/*!*************************************************************************!*\
  !*** ./src/app/docentes/tarea/presentacion/presentacion.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".name {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNlbnRhY2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoicHJlc2VudGFjaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hbWV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ 4056:
/*!************************************************!*\
  !*** ./src/app/docentes/tarea/tarea.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXJlYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 7803:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docentes/tarea/calificar/calificar.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item>\r\n            \r\n  <ion-icon class=\"icon_book\" name=\"book-outline\"></ion-icon>\r\n  <ion-label>\r\n    <p>Tarea 1 Investigacion de mercadeo</p>\r\n    <p> Vence hoy a las 23:59</p>\r\n  </ion-label>\r\n  \r\n</ion-item>\r\n<mat-card class=\"header_table\">\r\n  <ul class=\"list_header_table\">\r\n    <li>\r\n      <p>Por entregar {{tareasPorEntregar}}</p>\r\n    </li>\r\n    <li>\r\n      <p>Entregado {{tareasEntregadas}}</p>\r\n      \r\n    </li>\r\n    <li class=\"container_search\">\r\n      \r\n        \r\n        <ion-input input (keyup)=\"applyFilter($event)\" matInput placeholder=\"Buscar Estudiantes\"> </ion-input>\r\n        \r\n        <button><ion-icon name=\"search-outline\"></ion-icon></button>\r\n      \r\n\r\n\r\n      \r\n      <ion-icon class=\"icon_search\"name=\"download-outline\"></ion-icon>\r\n    </li>\r\n    \r\n  </ul>\r\n</mat-card>\r\n\r\n<table mat-table #table [dataSource]=\"dataSource\">\r\n  \r\n  <!-- Estudiantes Colummn -->\r\n  <ng-container matColumnDef=\"nombre\">\r\n    <th mat-header-cell *matHeaderCellDef> Estudiantes </th>\r\n    <td (click)=\"onSelect(element.id)\" mat-cell *matCellDef=\"let element\"> {{element.nombre}} - {{element.id}} </td>\r\n  </ng-container>\r\n  <!-- Estado -->\r\n  <ng-container matColumnDef=\"estado\">\r\n    <th mat-header-cell *matHeaderCellDef> Estado </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.estado}} </td>\r\n  </ng-container>\r\n  <!-- Estado Calificación -->\r\n  <ng-container matColumnDef=\"estado_calificacion\">\r\n    <th mat-header-cell *matHeaderCellDef> Estado Calificacion</th>\r\n    <td mat-cell *matCellDef=\"let element\"> \r\n      <div *ngIf=\"element.estado_calificacion; else elseBlock\">\r\n        <ion-icon class=\"icono\"name=\"checkmark-outline\"></ion-icon>\r\n        \r\n      </div>\r\n      <ng-template #elseBlock>\r\n        <ion-icon class=\"icono\"name=\"close-outline\"></ion-icon>\r\n      </ng-template>\r\n      \r\n      \r\n      \r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Comentarios -->\r\n  <ng-container matColumnDef=\"comentario\">\r\n    <th mat-header-cell *matHeaderCellDef> Comentario </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.comentario}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Calificacion -->\r\n  <ng-container matColumnDef=\"calificacion\">\r\n    <th mat-header-cell *matHeaderCellDef> Calificacion </th>\r\n    <td mat-cell *matCellDef=\"let element\" > \r\n      <div class=\"td_calificacion\">\r\n        <ion-input class=\"input_calificacion\" value=\"{{element.calificacion}}\" type=\"number\"></ion-input>\r\n        \r\n        <p >\r\n          /100\r\n        </p>\r\n\r\n      </div>\r\n    </td>\r\n  </ng-container>\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n");

/***/ }),

/***/ 5944:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docentes/tarea/presentacion/presentacion.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"isloaded\">\r\n\r\n  <ion-item>\r\n              \r\n      <ion-icon slot=\"start\" class=\"icon_book\" name=\"book-outline\"></ion-icon>\r\n      <ion-label>\r\n        <p>Tarea 1 Investigacion de mercadeo</p>\r\n        <p> Vence hoy a las 23:59</p>\r\n      </ion-label>\r\n      \r\n    </ion-item>\r\n    \r\n    <ion-grid>\r\n      <ion-row justify-content-end>\r\n        <ion-col padding size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\" align-self-stretch>\r\n          <ion-card class=\"level\">\r\n            <ion-card-content>\r\n              <ion-card-title>\r\n                Presentado: {{alumnoPresentacion.fechaEntrega|date:'dd/MM/yyyy'}}\r\n              </ion-card-title>\r\n              \r\n            </ion-card-content>\r\n          </ion-card>\r\n  \r\n        </ion-col>\r\n  \r\n        <ion-col padding size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\" align-self-stretch>\r\n          <ion-card class=\"faq\">\r\n           \r\n            <ion-card-content>\r\n              <ion-card-title>\r\n                <ion-grid>\r\n  \r\n                  <ion-row >\r\n                    <ion-col>\r\n                      <ion-item >\r\n                        <ion-icon (click)=\"go('atras')\" slot=\"start\"name=\"arrow-back-outline\"></ion-icon>\r\n                        <ion-label class=\"name\" >\r\n                          {{alumnoPresentacion.nombre}}\r\n                        </ion-label>\r\n                        <ion-icon  (click)=\"go('adelante')\" slot=\"end\"name=\"arrow-forward-outline\"></ion-icon>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n  \r\n                </ion-grid>\r\n                <ion-row>\r\n                  <ion-col width-50>\r\n                    <ion-item>\r\n                      <ion-label>\r\n                        0/{{tamanoLista}}  Tareas Calificadas\r\n                      </ion-label>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                  <ion-col width-50>\r\n                    <ion-item>\r\n                      <ion-label>\r\n                        {{idPresentacion}}/{{tamanoLista}} Estudiantes\r\n                      </ion-label>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n                \r\n                \r\n                \r\n              </ion-card-title>\r\n              <ion-item *ngIf=\"alumnoPresentacion.estado == 'Atrasado'\" >\r\n                <ion-note color=\"danger\">Aviso esta presentación se hizo atrasada</ion-note>\r\n                \r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>\r\n                    Calificación\r\n                </ion-label>\r\n              \r\n                <ion-input slot=\"end\" value=\"{{alumnoPresentacion.calificacion}}\">\r\n  \r\n                </ion-input>\r\n                <ion-note slot=\"end\">\r\n                  /100\r\n              </ion-note>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>\r\n                  Comentario:\r\n                </ion-label>\r\n                \r\n              </ion-item>\r\n              <ion-textarea placeholder=\"Agrege un comentario\"></ion-textarea>\r\n              <ion-item>\r\n                <ion-button slot=\"end\" >Presentar</ion-button>\r\n              </ion-item>\r\n             \r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    \r\n</div>");

/***/ }),

/***/ 73:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docentes/tarea/tarea.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Tarea 1: Investigación del mercadeo \r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <router-outlet></router-outlet>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_docentes_tarea_tarea_module_ts.js.map