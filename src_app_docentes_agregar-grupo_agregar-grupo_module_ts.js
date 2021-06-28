(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_docentes_agregar-grupo_agregar-grupo_module_ts"],{

/***/ 3037:
/*!************************************************************************!*\
  !*** ./src/app/docentes/agregar-grupo/agregar-grupo-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarGrupoPageRoutingModule": () => (/* binding */ AgregarGrupoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _agregar_grupo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-grupo.page */ 5297);




const routes = [
    {
        path: '',
        component: _agregar_grupo_page__WEBPACK_IMPORTED_MODULE_0__.AgregarGrupoPage,
    },
];
let AgregarGrupoPageRoutingModule = class AgregarGrupoPageRoutingModule {
};
AgregarGrupoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgregarGrupoPageRoutingModule);



/***/ }),

/***/ 7595:
/*!****************************************************************!*\
  !*** ./src/app/docentes/agregar-grupo/agregar-grupo.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarGrupoPageModule": () => (/* binding */ AgregarGrupoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _agregar_grupo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-grupo-routing.module */ 3037);
/* harmony import */ var _agregar_grupo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar-grupo.page */ 5297);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 3806);








let AgregarGrupoPageModule = class AgregarGrupoPageModule {
};
AgregarGrupoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _agregar_grupo_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgregarGrupoPageRoutingModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        ],
        declarations: [_agregar_grupo_page__WEBPACK_IMPORTED_MODULE_1__.AgregarGrupoPage],
    })
], AgregarGrupoPageModule);



/***/ }),

/***/ 5297:
/*!**************************************************************!*\
  !*** ./src/app/docentes/agregar-grupo/agregar-grupo.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarGrupoPage": () => (/* binding */ AgregarGrupoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_agregar_grupo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./agregar-grupo.page.html */ 3464);
/* harmony import */ var _agregar_grupo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar-grupo.page.scss */ 2744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AgregarGrupoPage = class AgregarGrupoPage {
    constructor() {
        this.students = [];
        this.groups = ['Grupo 1', 'Grupo 2', 'Grupo 3', 'Grupo 4'];
        this.people = ['Melanie Banchon', 'William Medina',
            'Sebastian Mendoza', 'Edwards Sabando'];
        this.array = [];
        this.studentsByGroup = {};
        this.lengthStudentsByGr = 0;
        this.selectedGroup = '';
        this.selectedPerson = '';
    }
    ngOnInit() {
    }
    selectGroup(event) {
        this.selectedGroup = event.target.value;
        console.log('grupo--> ' + this.selectedGroup);
    }
    onClick(event) {
        this.selectedPerson = event.target.innerText;
        console.log(this.selectedPerson);
        const members = [];
        if (this.selectedGroup !== '') {
            this.array.forEach((e) => {
                console.log('foreach');
                if (this.selectedGroup == e.group) {
                    members.push(this.selectedPerson);
                    this.array.push({
                        group: this.selectedGroup,
                        students: members,
                        membersNumber: members.length,
                    });
                    console.log('grupo existe');
                }
                else {
                    members.push(this.selectedPerson);
                    this.array.push({
                        group: this.selectedGroup,
                        students: members,
                        membersNumber: members.length,
                    });
                    console.log('grupo nuevo');
                }
            });
            console.log(this.array);
        }
        else {
            alert('Seleccione un grupo');
        }
        /* if(this.selectedPerson!="" && this.selectedGroup!=""){
          if(this.selectedGroup in this.studentsByGroup){
            this.studentsByGroup[this.selectedGroup].push(this.selectedPerson);
            this.lengthStudentsByGr=this.studentsByGroup[this.selectedGroup].length
            console.log('grupo existe')
            console.log(this.studentsByGroup)
          }else{
            this.studentsByGroup[this.selectedGroup]=[];
            this.studentsByGroup[this.selectedGroup].push(this.selectedPerson);
            this.lengthStudentsByGr=this.studentsByGroup[this.selectedGroup].length
            console.log('grupo nuevo')
            console.log(this.studentsByGroup)
          }
        }*/
        /* studentsByG debe ser un diccionario
        en donde la clave es la materia y el valor es
          una lista de estudiantes
          studentByGroup={'Grupo1':[Melanie,William]}*/
        // this.lengthStudentsByGr=Object.keys(this.studentsByGroup).length;
        // this.lengthStudentsByGr=this.studentsByGroup[this.selectedGroup].length
    }
};
AgregarGrupoPage.ctorParameters = () => [];
AgregarGrupoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-agregar-grupo',
        template: _raw_loader_agregar_grupo_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_agregar_grupo_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AgregarGrupoPage);



/***/ }),

/***/ 2744:
/*!****************************************************************!*\
  !*** ./src/app/docentes/agregar-grupo/agregar-grupo.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#titulo {\n  text-align: center;\n}\n\n.icon-right {\n  margin-right: 10px;\n}\n\n.icon-left {\n  margin-left: 10px;\n}\n\n.box2 {\n  float: left;\n  width: auto;\n  height: auto;\n  margin: 10px;\n}\n\n.box1 {\n  clear: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFncmVnYXItZ3J1cG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxpQkFBQTtBQUNEOztBQUVBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUNFO0VBQ0QsV0FBQTtBQUVEIiwiZmlsZSI6ImFncmVnYXItZ3J1cG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RpdHVsb3tcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29uLXJpZ2h0e1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDs7XHJcbn1cclxuXHJcbi5pY29uLWxlZnR7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7O1xyXG59XHJcblxyXG4uYm94MiB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6IGF1dG87XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdG1hcmdpbjogMTBweDtcclxuICB9XHJcbiAgLmJveDEge1xyXG5cdGNsZWFyOiBsZWZ0O1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ 3464:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docentes/agregar-grupo/agregar-grupo.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Agregar estudiante a grupo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" >\r\n  \r\n  <div class='ion-padding'>\r\n    <h2 id=\"titulo\"> LENGUA EXTRANJERA</h2>\r\n  </div>\r\n\r\n  <ion-grid padding > \r\n    <ion-row style='text-align: center;'>\r\n      <ion-col col-sm=12>\r\n        <ion-button><ion-icon name=\"people-outline\"></ion-icon>Conjunto de Grupos</ion-button>\r\n      </ion-col>\r\n      <ion-col col-sm=12>\r\n        <ion-button><ion-icon name=\"add-circle-outline\"></ion-icon>Grupos</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <div class='ion-padding'>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <!--primera columna-->\r\n        <ion-col col-md=\"3\" col-sm=12>\r\n          <h2>Estudiantes no asignados</h2>\r\n          <ion-grid>\r\n            <ion-row *ngFor=\"let student of people\">\r\n              <ion-col col-sm=12>\r\n                <p (click)=\"onClick($event)\" > \r\n                  <ion-icon class=\"icon-right\" name=\"person-add-outline\"></ion-icon>{{student}}</p>\r\n              </ion-col>\r\n           \r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-col>\r\n\r\n        <!--segunda columna-->\r\n        <ion-col  col-md=\"9\" col-sm=12>\r\n          <ion-item>\r\n            <ion-label>Seleccione un grupo: </ion-label>\r\n            <ion-select [(ngModel)]=\"selectedGroup\" (ionChange)=\"selectGroup($event)\"\r\n            interface=\"popover\"> \r\n              <ion-select-option *ngFor=\"let group of groups\" [value]=\"group\">\r\n                {{group}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n    \r\n          <!--tabla interna-->\r\n          <ion-grid>\r\n            <ion-row  *ngFor=\"let item of array; let i = index;\">\r\n              <ion-col size=\"6\">\r\n                {{item.group}}\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                {{item.membersNumber}}\r\n              </ion-col>\r\n              <!--cartas-->\r\n              <div class=\"box1\" >\r\n                <mat-card class=\"box2\">{{students}}<ion-icon class=\"icon-left\" name=\"ellipsis-vertical-outline\"></ion-icon></mat-card>\r\n              </div>\r\n               <!--cartas-->\r\n            </ion-row> \r\n            \r\n          </ion-grid>\r\n          \r\n         \r\n          <!--tabla interna-->\r\n        </ion-col>\r\n     \r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_docentes_agregar-grupo_agregar-grupo_module_ts.js.map