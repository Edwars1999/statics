(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_docentes_crear-anuncio_crear-anuncio_module_ts"],{

/***/ 8045:
/*!************************************************************************!*\
  !*** ./src/app/docentes/crear-anuncio/crear-anuncio-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearAnuncioPageRoutingModule": () => (/* binding */ CrearAnuncioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _crear_anuncio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-anuncio.page */ 7116);




const routes = [
    {
        path: '',
        component: _crear_anuncio_page__WEBPACK_IMPORTED_MODULE_0__.CrearAnuncioPage,
    },
];
let CrearAnuncioPageRoutingModule = class CrearAnuncioPageRoutingModule {
};
CrearAnuncioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CrearAnuncioPageRoutingModule);



/***/ }),

/***/ 4128:
/*!****************************************************************!*\
  !*** ./src/app/docentes/crear-anuncio/crear-anuncio.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearAnuncioPageModule": () => (/* binding */ CrearAnuncioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _crear_anuncio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-anuncio-routing.module */ 8045);
/* harmony import */ var _crear_anuncio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-anuncio.page */ 7116);
/* harmony import */ var _modal_crear_anuncio_modal_crear_anuncio_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-crear-anuncio/modal-crear-anuncio.page */ 1775);
/* harmony import */ var _modal_crear_anuncio_modal_crear_anuncio_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-crear-anuncio/modal-crear-anuncio.module */ 8692);
/* harmony import */ var _modal_crear_categoria_modal_crear_categoria_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal-crear-categoria/modal-crear-categoria.module */ 9373);
/* harmony import */ var _modal_modificar_categoria_modal_modificar_categoria_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal-modificar-categoria/modal-modificar-categoria.module */ 7769);











let CrearAnuncioPageModule = class CrearAnuncioPageModule {
};
CrearAnuncioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        entryComponents: [
            _modal_crear_anuncio_modal_crear_anuncio_page__WEBPACK_IMPORTED_MODULE_2__.ModalCrearAnuncioPage,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _crear_anuncio_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrearAnuncioPageRoutingModule,
            _modal_crear_anuncio_modal_crear_anuncio_module__WEBPACK_IMPORTED_MODULE_3__.ModalCrearAnuncioPageModule,
            _modal_crear_categoria_modal_crear_categoria_module__WEBPACK_IMPORTED_MODULE_4__.ModalCrearCategoriaPageModule,
            _modal_modificar_categoria_modal_modificar_categoria_module__WEBPACK_IMPORTED_MODULE_5__.ModalModificarCategoriaPageModule,
        ],
        declarations: [_crear_anuncio_page__WEBPACK_IMPORTED_MODULE_1__.CrearAnuncioPage],
    })
], CrearAnuncioPageModule);



/***/ }),

/***/ 7116:
/*!**************************************************************!*\
  !*** ./src/app/docentes/crear-anuncio/crear-anuncio.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearAnuncioPage": () => (/* binding */ CrearAnuncioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_crear_anuncio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./crear-anuncio.page.html */ 62);
/* harmony import */ var _crear_anuncio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-anuncio.page.scss */ 5781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modal_crear_anuncio_modal_crear_anuncio_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-crear-anuncio/modal-crear-anuncio.page */ 1775);
/* harmony import */ var _modal_crear_categoria_modal_crear_categoria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-crear-categoria/modal-crear-categoria.page */ 4153);
/* harmony import */ var _modal_modificar_categoria_modal_modificar_categoria_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal-modificar-categoria/modal-modificar-categoria.page */ 1629);








let CrearAnuncioPage = class CrearAnuncioPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.ocultar = false;
        this.anuncios = [
            { 'titulo': 'ACTIVIDAD DE PRÓXIMA SEMANA',
                'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.' },
            { 'titulo': 'PROYECTO PARCIAL',
                'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.' },
            { 'titulo': 'DUDAS SOBRE LA TAREA',
                'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.' },
        ];
        this.deberes = [
            { 'titulo': 'Analizar video',
                'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.' },
            { 'titulo': 'Ideas principales',
                'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.' },
        ];
        this.talleres = [
            { 'titulo': 'Taller 1',
                'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.' },
            { 'titulo': 'Taller 2',
                'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.' },
        ];
        this.materiales = [
            { 'titulo': 'Libros',
                'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.' },
            { 'titulo': 'Diapositivas',
                'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.' },
        ];
    }
    ngOnInit() {
    }
    modalCrearAnuncio() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('crear anuncio');
            const modal = yield this.modalCtrl.create({
                component: _modal_crear_anuncio_modal_crear_anuncio_page__WEBPACK_IMPORTED_MODULE_2__.ModalCrearAnuncioPage,
                componentProps: {
                    titulo: 'Crear Anuncio',
                    actividad: 'crear',
                },
            });
            yield modal.present();
            // const {data}= await modal.onDidDismiss();
        });
    }
    modalCrearTrabajo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('crear anuncio');
            const modal = yield this.modalCtrl.create({
                component: _modal_crear_anuncio_modal_crear_anuncio_page__WEBPACK_IMPORTED_MODULE_2__.ModalCrearAnuncioPage,
                componentProps: {
                    titulo: 'Crear Trabajo',
                    actividad: 'crear',
                },
            });
            yield modal.present();
            // const {data}= await modal.onDidDismiss();
        });
    }
    modalCrearMaterial() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('crear anuncio');
            const modal = yield this.modalCtrl.create({
                component: _modal_crear_anuncio_modal_crear_anuncio_page__WEBPACK_IMPORTED_MODULE_2__.ModalCrearAnuncioPage,
                componentProps: {
                    titulo: 'Crear Material',
                    actividad: 'crearMaterial',
                },
            });
            yield modal.present();
            // const {data}= await modal.onDidDismiss();
        });
    }
    modalModificarAnuncio() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('modificar anun');
            const modal = yield this.modalCtrl.create({
                component: _modal_crear_anuncio_modal_crear_anuncio_page__WEBPACK_IMPORTED_MODULE_2__.ModalCrearAnuncioPage,
                componentProps: {
                    titulo: 'Modificar Anuncio',
                    actividad: 'modificar',
                },
            });
            yield modal.present();
        });
    }
    modalModificarTrabajo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_crear_anuncio_modal_crear_anuncio_page__WEBPACK_IMPORTED_MODULE_2__.ModalCrearAnuncioPage,
                componentProps: {
                    titulo: 'Modificar Trabajo',
                    actividad: 'modificar',
                },
            });
            yield modal.present();
        });
    }
    modalModificarMaterial() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_crear_anuncio_modal_crear_anuncio_page__WEBPACK_IMPORTED_MODULE_2__.ModalCrearAnuncioPage,
                componentProps: {
                    titulo: 'Modificar Material',
                    actividad: 'modificar',
                },
            });
            yield modal.present();
        });
    }
    abrirModalCategoria() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_crear_categoria_modal_crear_categoria_page__WEBPACK_IMPORTED_MODULE_3__.ModalCrearCategoriaPage,
                componentProps: {
                    titulo: 'Crear categoria',
                    actividad: 'crear',
                },
            });
            yield modal.present();
        });
    }
    abrirModalModificarCategoria() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_modificar_categoria_modal_modificar_categoria_page__WEBPACK_IMPORTED_MODULE_4__.ModalModificarCategoriaPage,
                componentProps: {
                    titulo: 'Modificar Categoria',
                    actividad: 'modificar',
                },
            });
            yield modal.present();
        });
    }
    ocultarItem() {
        this.ocultar = true;
    }
};
CrearAnuncioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
CrearAnuncioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-crear-anuncio',
        template: _raw_loader_crear_anuncio_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_crear_anuncio_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CrearAnuncioPage);



/***/ }),

/***/ 3268:
/*!************************************************************************************!*\
  !*** ./src/app/docentes/modal-crear-anuncio/modal-crear-anuncio-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalCrearAnuncioPageRoutingModule": () => (/* binding */ ModalCrearAnuncioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _modal_crear_anuncio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-crear-anuncio.page */ 1775);




const routes = [
    {
        path: '',
        component: _modal_crear_anuncio_page__WEBPACK_IMPORTED_MODULE_0__.ModalCrearAnuncioPage,
    },
];
let ModalCrearAnuncioPageRoutingModule = class ModalCrearAnuncioPageRoutingModule {
};
ModalCrearAnuncioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalCrearAnuncioPageRoutingModule);



/***/ }),

/***/ 8692:
/*!****************************************************************************!*\
  !*** ./src/app/docentes/modal-crear-anuncio/modal-crear-anuncio.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalCrearAnuncioPageModule": () => (/* binding */ ModalCrearAnuncioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modal_crear_anuncio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-crear-anuncio-routing.module */ 3268);
/* harmony import */ var _modal_crear_anuncio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-crear-anuncio.page */ 1775);







let ModalCrearAnuncioPageModule = class ModalCrearAnuncioPageModule {
};
ModalCrearAnuncioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_crear_anuncio_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalCrearAnuncioPageRoutingModule,
        ],
        declarations: [_modal_crear_anuncio_page__WEBPACK_IMPORTED_MODULE_1__.ModalCrearAnuncioPage],
    })
], ModalCrearAnuncioPageModule);



/***/ }),

/***/ 1775:
/*!**************************************************************************!*\
  !*** ./src/app/docentes/modal-crear-anuncio/modal-crear-anuncio.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalCrearAnuncioPage": () => (/* binding */ ModalCrearAnuncioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modal_crear_anuncio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal-crear-anuncio.page.html */ 5799);
/* harmony import */ var _modal_crear_anuncio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-crear-anuncio.page.scss */ 4995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let ModalCrearAnuncioPage = class ModalCrearAnuncioPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.selectedTitle = '';
        this.selectedDescription = '';
    }
    ngOnInit() {
    }
    cerrarCrearAnuncio() {
        this.modalCtrl.dismiss({
            titulo: this.selectedTitle,
            descripcion: this.selectedDescription,
        });
    }
    capturarTitulo(event) {
        // this.selectedTitle=event.detail.value;
    }
    capturarDescrip(event) {
        // this.selectedDescription=event.detail.value;
    }
    cerrarModal() {
        this.modalCtrl.dismiss();
    }
};
ModalCrearAnuncioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ModalCrearAnuncioPage.propDecorators = {
    titulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    actividad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ModalCrearAnuncioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-modal-crear-anuncio',
        template: _raw_loader_modal_crear_anuncio_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_crear_anuncio_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalCrearAnuncioPage);



/***/ }),

/***/ 297:
/*!****************************************************************************************!*\
  !*** ./src/app/docentes/modal-crear-categoria/modal-crear-categoria-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalCrearCategoriaPageRoutingModule": () => (/* binding */ ModalCrearCategoriaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _modal_crear_categoria_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-crear-categoria.page */ 4153);




const routes = [
    {
        path: '',
        component: _modal_crear_categoria_page__WEBPACK_IMPORTED_MODULE_0__.ModalCrearCategoriaPage,
    },
];
let ModalCrearCategoriaPageRoutingModule = class ModalCrearCategoriaPageRoutingModule {
};
ModalCrearCategoriaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalCrearCategoriaPageRoutingModule);



/***/ }),

/***/ 9373:
/*!********************************************************************************!*\
  !*** ./src/app/docentes/modal-crear-categoria/modal-crear-categoria.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalCrearCategoriaPageModule": () => (/* binding */ ModalCrearCategoriaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modal_crear_categoria_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-crear-categoria-routing.module */ 297);
/* harmony import */ var _modal_crear_categoria_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-crear-categoria.page */ 4153);








let ModalCrearCategoriaPageModule = class ModalCrearCategoriaPageModule {
};
ModalCrearCategoriaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_crear_categoria_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalCrearCategoriaPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_modal_crear_categoria_page__WEBPACK_IMPORTED_MODULE_1__.ModalCrearCategoriaPage],
    })
], ModalCrearCategoriaPageModule);



/***/ }),

/***/ 4153:
/*!******************************************************************************!*\
  !*** ./src/app/docentes/modal-crear-categoria/modal-crear-categoria.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalCrearCategoriaPage": () => (/* binding */ ModalCrearCategoriaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modal_crear_categoria_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal-crear-categoria.page.html */ 1978);
/* harmony import */ var _modal_crear_categoria_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-crear-categoria.page.scss */ 2885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);






let ModalCrearCategoriaPage = class ModalCrearCategoriaPage {
    constructor(modalCtrl, fb) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.newForm = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            nota: [''],
            isgrupal: [''],
        });
        this.errorMessages = {
            nombre: [
                { type: 'required', message: 'El nomdre de la categoria es requerido' },
            ],
        };
    }
    get nombre() {
        return this.newForm.get('nombre');
    }
    get nota() {
        return this.newForm.get('nota');
    }
    get isgrupal() {
        return this.newForm.get('isgrupal');
    }
    ngOnInit() { }
    cerrarCrearCategoria() {
        this.modalCtrl.dismiss({});
    }
    crearCategoria() {
    }
};
ModalCrearCategoriaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
ModalCrearCategoriaPage.propDecorators = {
    titulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    actividad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ModalCrearCategoriaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-modal-crear-categoria',
        template: _raw_loader_modal_crear_categoria_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_crear_categoria_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalCrearCategoriaPage);



/***/ }),

/***/ 1306:
/*!************************************************************************************************!*\
  !*** ./src/app/docentes/modal-modificar-categoria/modal-modificar-categoria-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalModificarCategoriaPageRoutingModule": () => (/* binding */ ModalModificarCategoriaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _modal_modificar_categoria_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-modificar-categoria.page */ 1629);




const routes = [
    {
        path: '',
        component: _modal_modificar_categoria_page__WEBPACK_IMPORTED_MODULE_0__.ModalModificarCategoriaPage,
    },
];
let ModalModificarCategoriaPageRoutingModule = class ModalModificarCategoriaPageRoutingModule {
};
ModalModificarCategoriaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalModificarCategoriaPageRoutingModule);



/***/ }),

/***/ 7769:
/*!****************************************************************************************!*\
  !*** ./src/app/docentes/modal-modificar-categoria/modal-modificar-categoria.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalModificarCategoriaPageModule": () => (/* binding */ ModalModificarCategoriaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modal_modificar_categoria_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-modificar-categoria-routing.module */ 1306);
/* harmony import */ var _modal_modificar_categoria_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-modificar-categoria.page */ 1629);







let ModalModificarCategoriaPageModule = class ModalModificarCategoriaPageModule {
};
ModalModificarCategoriaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_modificar_categoria_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalModificarCategoriaPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_modal_modificar_categoria_page__WEBPACK_IMPORTED_MODULE_1__.ModalModificarCategoriaPage],
    })
], ModalModificarCategoriaPageModule);



/***/ }),

/***/ 1629:
/*!**************************************************************************************!*\
  !*** ./src/app/docentes/modal-modificar-categoria/modal-modificar-categoria.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalModificarCategoriaPage": () => (/* binding */ ModalModificarCategoriaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modal_modificar_categoria_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal-modificar-categoria.page.html */ 8814);
/* harmony import */ var _modal_modificar_categoria_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-modificar-categoria.page.scss */ 9900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);







let ModalModificarCategoriaPage = class ModalModificarCategoriaPage {
    constructor(modalCtrl, fb) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.newForm = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            nota: [''],
            isgrupal: [''],
        });
        this.errorMessages = {
            nombre: [
                { type: 'required', message: 'El nomdre de la categoria es requerido' },
            ],
        };
    }
    get nombre() {
        return this.newForm.get('nombre');
    }
    get nota() {
        return this.newForm.get('nota');
    }
    get isgrupal() {
        return this.newForm.get('isgrupal');
    }
    ngOnInit() { }
    cerrarCrearCategoria() {
        this.modalCtrl.dismiss({});
    }
    modificarCategoria() {
        console.log(this.newForm.value);
    }
};
ModalModificarCategoriaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
ModalModificarCategoriaPage.propDecorators = {
    titulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    actividad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ModalModificarCategoriaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-modal-modificar-categoria',
        template: _raw_loader_modal_modificar_categoria_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_modificar_categoria_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalModificarCategoriaPage);



/***/ }),

/***/ 5781:
/*!****************************************************************!*\
  !*** ./src/app/docentes/crear-anuncio/crear-anuncio.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\n#tituloMateria {\n  text-align: center;\n}\nion-button {\n  text-transform: none;\n  width: 100px;\n}\n.icon-right {\n  margin-right: 10px;\n  height: 20px;\n  width: 20px;\n}\n.btn_nothing {\n  background-color: transparent !important;\n  border-color: transparent !important;\n}\n.btn_nothing .icon-left {\n  height: 25px;\n  width: 25px;\n}\n.anuncio {\n  font-size: 20px;\n}\n.anunciosContenido {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  overflow-y: auto;\n  justify-content: left;\n  height: 200px;\n  margin-left: 2em;\n  margin-right: 2em;\n  margin-bottom: 2em;\n}\n.anunciosContenido .listaAnuncios li {\n  text-align: left;\n  border: none;\n}\n.anunciosContenido .listaAnuncios .anuncioItem span {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  padding-left: 1%;\n  padding-right: 1%;\n}\n.botonGrupos {\n  margin-bottom: 2%;\n}\n#menu * {\n  list-style: none;\n}\n#menu li {\n  line-height: 180%;\n}\n#menu li a {\n  color: #222;\n  text-decoration: none;\n}\n#menu li a:before {\n  content: \"▸\";\n  color: #ddd;\n  margin-right: 4px;\n}\n#menu input[name=list] {\n  position: absolute;\n  left: -1000em;\n}\n#menu label:before {\n  content: \"▸\";\n  margin-right: 4px;\n}\n#menu input:checked ~ label:before {\n  content: \"▾\";\n}\n#menu .interior {\n  display: none;\n}\n#menu input:checked ~ ul {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWFyLWFudW5jaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNDLGtCQUFBO0FBRUQ7QUFDQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQ0E7RUFDQyxrQkFBQTtFQUNHLFlBQUE7RUFDQSxXQUFBO0FBRUo7QUFDQTtFQUNJLHdDQUFBO0VBQ0Esb0NBQUE7QUFFSjtBQURJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFHUjtBQUNBO0VBQ0ksZUFBQTtBQUVKO0FBQUE7RUFDQyxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBRUcsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBQTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtBQUdEO0FBQUE7RUFDQywyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFHRDtBQUNBO0VBQ0ksaUJBQUE7QUFFSjtBQUNBO0VBQVUsZ0JBQUE7QUFHVjtBQUZBO0VBQVUsaUJBQUE7QUFNVjtBQUxBO0VBQVcsV0FBQTtFQUFZLHFCQUFBO0FBVXZCO0FBVEE7RUFBbUIsWUFBQTtFQUFrQixXQUFBO0VBQVksaUJBQUE7QUFlakQ7QUFkQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQWlCSjtBQWZBO0VBQW9CLFlBQUE7RUFBa0IsaUJBQUE7QUFvQnRDO0FBbkJBO0VBQW9DLFlBQUE7QUF1QnBDO0FBdEJBO0VBQWdCLGFBQUE7QUEwQmhCO0FBekJBO0VBQXlCLGNBQUE7QUE2QnpCIiwiZmlsZSI6ImNyZWFyLWFudW5jaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuI3RpdHVsb01hdGVyaWEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uaWNvbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuLmJ0bl9ub3RoaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLmJ0bl9ub3RoaW5nIC5pY29uLWxlZnQge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4uYW51bmNpbyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFudW5jaW9zQ29udGVuaWRvIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyZW07XG4gIG1hcmdpbi1yaWdodDogMmVtO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbi5hbnVuY2lvc0NvbnRlbmlkbyAubGlzdGFBbnVuY2lvcyBsaSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmFudW5jaW9zQ29udGVuaWRvIC5saXN0YUFudW5jaW9zIC5hbnVuY2lvSXRlbSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgcGFkZGluZy1yaWdodDogMSU7XG59XG5cbi5ib3RvbkdydXBvcyB7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuXG4jbWVudSAqIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuI21lbnUgbGkge1xuICBsaW5lLWhlaWdodDogMTgwJTtcbn1cblxuI21lbnUgbGkgYSB7XG4gIGNvbG9yOiAjMjIyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNtZW51IGxpIGE6YmVmb3JlIHtcbiAgY29udGVudDogXCLilrhcIjtcbiAgY29sb3I6ICNkZGQ7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4jbWVudSBpbnB1dFtuYW1lPWxpc3RdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTAwMGVtO1xufVxuXG4jbWVudSBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIuKWuFwiO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuI21lbnUgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pa+XCI7XG59XG5cbiNtZW51IC5pbnRlcmlvciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtZW51IGlucHV0OmNoZWNrZWQgfiB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ 4995:
/*!****************************************************************************!*\
  !*** ./src/app/docentes/modal-crear-anuncio/modal-crear-anuncio.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".btn_nothing {\n  background-color: transparent !important;\n  border-color: transparent !important;\n}\n.btn_nothing .icon-left {\n  height: 25px;\n  width: 25px;\n}\n.container_item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWNyZWFyLWFudW5jaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSxvQ0FBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUVSO0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJtb2RhbC1jcmVhci1hbnVuY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5fbm90aGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLmljb24tbGVmdHtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWluZXJfaXRlbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzoxZW07XHJcbn0iXX0= */");

/***/ }),

/***/ 2885:
/*!********************************************************************************!*\
  !*** ./src/app/docentes/modal-crear-categoria/modal-crear-categoria.page.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".error-message {\n  color: var(--ion-color-danger);\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWNyZWFyLWNhdGVnb3JpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJtb2RhbC1jcmVhci1jYXRlZ29yaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufSJdfQ== */");

/***/ }),

/***/ 9900:
/*!****************************************************************************************!*\
  !*** ./src/app/docentes/modal-modificar-categoria/modal-modificar-categoria.page.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".error-message {\n  color: var(--ion-color-danger);\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLW1vZGlmaWNhci1jYXRlZ29yaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoibW9kYWwtbW9kaWZpY2FyLWNhdGVnb3JpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59Il19 */");

/***/ }),

/***/ 62:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docentes/crear-anuncio/crear-anuncio.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Nombre de Materia</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <h1 id=\"tituloMateria\">Hermeneutica</h1>\r\n  \r\n  <ion-grid padding > \r\n    <ion-row style='text-align: center;'>\r\n      <ion-col col-sm=12>\r\n        <ion-button color=\"primary\" size=\"default\">Inicio</ion-button>\r\n      </ion-col>\r\n      <ion-col col-sm=12>\r\n        <ion-button color=\"medium\"  size=\"default\">Foro</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"ion-padding\">\r\n      <ion-icon class=\"icon-right\" name=\"megaphone-outline\"></ion-icon>\r\n      <span class=\"anuncio\">Anuncio</span>\r\n      <button (click)=\"modalCrearAnuncio()\" class=\"btn_nothing\">\r\n        <ion-icon class= \"icon-left\"name=\"add-circle-outline\"></ion-icon>\r\n      </button>  \r\n  </div>\r\n\r\n  <div class=\"anunciosContenido\">\r\n    <ul class=\"listaAnuncios\">\r\n      <li *ngFor=\"let anuncio of anuncios\">\r\n        <ion-grid padding > \r\n          \r\n          <ion-row >\r\n            <ion-col class=\"anuncioItem\" col-sm=12 col-md=6>\r\n              <span class=\"tituloAnuncio\">{{anuncio.titulo}}</span>\r\n              <p >{{anuncio.descripcion}}</p>\r\n            </ion-col>\r\n            <ion-col style='text-align: center;' col-sm=12 col-md=5>\r\n              <ion-button color=\"success\" size=\"samll\" (click)=\"modalModificarAnuncio()\">Modificar</ion-button>\r\n              <ion-button color=\"danger\">Ocultar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"botonGrupos ion-padding\">\r\n    <a routerLink=\"../agregar-grupo\">\r\n      <ion-button style=\"width: 200px;\" color=\"medium\">Crea Grupos de Trabajo</ion-button>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-icon class= \"icon-right\" name=\"reader-outline\"></ion-icon>\r\n    \r\n    <span class=\"anuncio\">Trabajos</span>\r\n    <button routerLink=\"../new-trabajo\" class=\"btn_nothing\">\r\n      <ion-icon class= \"icon-left\"name=\"add-circle-outline\"></ion-icon>\r\n    </button>  \r\n  </div>\r\n\r\n  <div class=\"anunciosContenido\">\r\n    <ul class=\"listaAnuncios\" id =\"menu\">\r\n\r\n      <!--deberes-->\r\n      <li >\r\n        <input type=\"checkbox\" name=\"list\" id=\"nivel1-1\">\r\n          <ion-grid padding > \r\n              <ion-row >\r\n                <ion-col class=\"anuncioItem\" col-sm=12 col-md=5>\r\n                  <label class=\"container_item\"for=\"nivel1-1\">\r\n                  <span class=\"tituloAnuncio\">Deberes</span>\r\n                </label>\r\n                </ion-col>\r\n                <ion-col style='text-align: center;' col-sm=12 col-md=5>\r\n                  <ion-button color=\"success\" size=\"samll\" (click)=\"abrirModalModificarCategoria()\">Modificar</ion-button>\r\n                  <ion-button color=\"secondary\">Añadir</ion-button>\r\n                  <ion-button color=\"danger\">Ocultar</ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n          </ion-grid>\r\n            \r\n       \r\n          <ul class=\"interior\">\r\n\r\n              <li *ngFor=\"let item of deberes\">\r\n                <ion-grid padding > \r\n                  <ion-row >\r\n                    <ion-col class=\"anuncioItem\" col-sm=12 col-md=5>\r\n                      <span class=\"tituloAnuncio\">{{item.titulo}}</span>\r\n                      <p>{{item.descripcion}}</p>\r\n                    </ion-col>\r\n                    <ion-col style='text-align: center;' col-sm=12 col-md=5>\r\n                      <ion-button color=\"success\" size=\"samll\" (click)=\"modalModificarTrabajo()\">Modificar</ion-button>\r\n                      <ion-button color=\"warning\" routerLink=\"../tarea\">Calificar</ion-button>\r\n                      <ion-button color=\"danger\">Ocultar</ion-button>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </li>\r\n              \r\n                \r\n          </ul>\r\n      </li>\r\n      \r\n      <!--talleres-->\r\n      <li>\r\n        <input type=\"checkbox\" name=\"list\" id=\"nivel1-2\">\r\n          <ion-grid padding > \r\n              <ion-row >\r\n                <ion-col class=\"anuncioItem\" col-sm=12 col-md=5>\r\n                  <label class=\"container_item\"for=\"nivel1-2\">\r\n                    <span class=\"tituloAnuncio\">Talleres</span>\r\n                  </label>\r\n                </ion-col>\r\n                <ion-col style='text-align: center;' col-sm=12 col-md=5>\r\n                  <ion-button color=\"success\" size=\"samll\" (click)=\"abrirModalModificarCategoria()\">Modificar</ion-button>\r\n                  <ion-button color=\"secondary\">Añadir</ion-button>\r\n                  <ion-button color=\"danger\">Ocultar</ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n          </ion-grid>\r\n            \r\n       \r\n          <ul class=\"interior\">\r\n              <li *ngFor=\"let item of talleres\">\r\n                <ion-grid padding > \r\n                  <ion-row >\r\n                    <ion-col class=\"anuncioItem\" col-sm=12 col-md=5>\r\n                      <span class=\"tituloAnuncio\">{{item.titulo}}</span>\r\n                      <p>{{item.descripcion}}</p>\r\n                    </ion-col>\r\n                    <ion-col style='text-align: center;' col-sm=12 col-md=5>\r\n                      <ion-button color=\"success\" size=\"samll\" (click)=\"modalModificarTrabajo()\">Modificar</ion-button>\r\n                      <ion-button color=\"warning\" routerLink=\"../tarea\">Calificar</ion-button>\r\n                      <ion-button color=\"danger\">Ocultar</ion-button>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </li>\r\n          </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <!--material de clases-->\r\n  <div class=\"ion-padding\">\r\n    <ion-icon  class= \"icon-right\"name=\"book-outline\"></ion-icon>\r\n    <span class=\"anuncio\">Material de clase</span>\r\n    <button class=\"btn_nothing\">\r\n      <ion-icon (click)='modalCrearMaterial()' class= \"icon-left\"name=\"add-circle-outline\"></ion-icon>\r\n    </button>  \r\n  </div>\r\n\r\n  <div class=\"anunciosContenido\">\r\n    <ul class=\"listaAnuncios\">\r\n      <li *ngFor=\"let mat of materiales\">\r\n        <ion-grid padding > \r\n          <ion-row>\r\n            <ion-col col-sm=12 col-md=6>\r\n              <span >{{mat.titulo}}</span>\r\n            </ion-col>\r\n            <ion-col style='text-align: center;' col-sm=12 col-md=5>\r\n              <ion-button color=\"success\" size=\"samll\" (click)=\"modalModificarMaterial()\">Modificar</ion-button>\r\n              <ion-button color=\"danger\">Ocultar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 5799:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docentes/modal-crear-anuncio/modal-crear-anuncio.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <div class=\"container_item\">\r\n    <ion-title >{{titulo}}</ion-title>\r\n    <button (click)=\"cerrarModal()\"><ion-icon name=\"close-outline\"></ion-icon></button>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n \r\n  \r\n  <div *ngIf=\"actividad=='modificar'\" class=\"ion-padding\">\r\n    <ion-label>Asunto</ion-label>\r\n    <ion-input type=\"text\" placeholder=\"Ingresar asunto\" clearInput=\"true\" clearInput=\"true\" (ionChange)=\"capturarTitulo( $event )\"></ion-input>\r\n\r\n    <ion-label>Importancia</ion-label>\r\n    <ion-input type=\"text\"placeholder=\"Ingresar importancia\" clearInput=\"true\" clearInput=\"true\" (ionChange)=\"capturarTitulo( $event )\"></ion-input>\r\n\r\n    <ion-grid padding > \r\n      <ion-row style='text-align: center;'>\r\n        <ion-col col-sm=12>\r\n          <ion-button color=\"success\" (click)=\"cerrarCrearAnuncio()\">Guardar</ion-button>\r\n        </ion-col>\r\n        <ion-col col-sm=12>\r\n          <ion-button color=\"danger\">Cancelar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <div *ngIf=\"actividad=='crear'\" class=\"ion-padding\">\r\n    <ion-label>Titulo</ion-label>\r\n    <ion-input type=\"text\" placeholder=\"Ingresar titulo\" clearInput=\"true\" (ionChange)=\"capturarTitulo( $event )\"></ion-input>\r\n\r\n    <ion-label>Descripcion</ion-label>\r\n    <ion-input type=\"text\" placeholder=\"Ingresar descripcion\" clearInput=\"true\" (ionChange)=\"capturarDescrip( $event )\"></ion-input>\r\n\r\n    <ion-grid padding > \r\n      <ion-row style='text-align: center;'>\r\n        <ion-col col-sm=12>\r\n          <ion-button color=\"success\" (click)=\"cerrarCrearAnuncio()\">Guardar</ion-button>\r\n        </ion-col>\r\n        <ion-col col-sm=12>\r\n          <ion-button color=\"danger\">Cancelar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <div *ngIf=\"actividad=='crearMaterial'\" class=\"ion-padding\">\r\n    <ion-label>Titulo</ion-label>\r\n    <ion-input type=\"text\" placeholder=\"Ingresar titulo\" clearInput=\"true\" (ionChange)=\"capturarTitulo( $event )\"></ion-input>\r\n\r\n    <ion-label>Descripcion</ion-label>\r\n    <ion-input type=\"text\" placeholder=\"Ingresar descripcion\" clearInput=\"true\" (ionChange)=\"capturarDescrip( $event )\"></ion-input>\r\n\r\n    \r\n      <ion-label>Seleccione un archivo:</ion-label>\r\n      <ion-input type='file'></ion-input>  \r\n    \r\n\r\n    <ion-grid padding > \r\n      <ion-row style='text-align: center;'>\r\n        <ion-col col-sm=12>\r\n          <ion-button color=\"success\" (click)=\"cerrarCrearAnuncio()\">Guardar</ion-button>\r\n        </ion-col>\r\n        <ion-col col-sm=12>\r\n          <ion-button color=\"danger\">Cancelar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 1978:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docentes/modal-crear-categoria/modal-crear-categoria.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{titulo}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" >\r\n  <ion-card>\r\n\r\n    <form [formGroup] =\"newForm\" (ngSubmit)=\"crearCategoria()\">\r\n      <ion-list >\r\n  \r\n        <ion-item  >\r\n          <ion-label>\r\n            Nombre\r\n          </ion-label>\r\n          <ion-input type=\"text\" formControlName=\"nombre\" required></ion-input>\r\n        </ion-item>\r\n        <div *ngFor=\"let error of errorMessages.nombre\">\r\n          <ng-container *ngIf=\"nombre.hasError(error.type) && (nombre.dirty || nombre.touched)\">\r\n            <small class=\"error-message\">\r\n              {{error.message}}\r\n            </small>\r\n          </ng-container>\r\n  \r\n        </div>\r\n        <ion-item>\r\n          <ion-label>\r\n            Nota\r\n          </ion-label>\r\n          <ion-input type=\"number\" formControlName=\"nota\" required></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label>\r\n            Grupal\r\n          </ion-label>\r\n          <ion-checkbox  formControlName=\"isgrupal\" color=\"primary\"></ion-checkbox>\r\n        </ion-item> \r\n        \r\n       \r\n        <ion-item>\r\n    \r\n          <ion-button  (click)=\"cerrarCrearCategoria()\" color=\"danger\" slot=\"end\">\r\n            Cancelar\r\n          </ion-button>\r\n          <ion-button [disabled]=\"!newForm.valid\" type=\"submit\" color=\"success\" slot=\"end\">\r\n            Crear\r\n          </ion-button>\r\n          \r\n    \r\n        </ion-item>\r\n      </ion-list>\r\n    </form>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ 8814:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docentes/modal-modificar-categoria/modal-modificar-categoria.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Modificar Categoria </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" >\r\n  <ion-card>\r\n\r\n    <form [formGroup] =\"newForm\" (ngSubmit)=\"modificarCategoria()\">\r\n      <ion-list >\r\n  \r\n        <ion-item  >\r\n          <ion-label>\r\n            Nombre\r\n          </ion-label>\r\n          <ion-input type=\"text\" formControlName=\"nombre\" required></ion-input>\r\n        </ion-item>\r\n        <div *ngFor=\"let error of errorMessages.nombre\">\r\n          <ng-container *ngIf=\"nombre.hasError(error.type) && (nombre.dirty || nombre.touched)\">\r\n            <small class=\"error-message\">\r\n              {{error.message}}\r\n            </small>\r\n          </ng-container>\r\n  \r\n        </div>\r\n        <ion-item>\r\n          <ion-label>\r\n            Nota\r\n          </ion-label>\r\n          <ion-input type=\"number\" formControlName=\"nota\" required></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label>\r\n            Grupal\r\n          </ion-label>\r\n          <ion-checkbox  formControlName=\"isgrupal\" color=\"primary\"></ion-checkbox>\r\n        </ion-item> \r\n        \r\n       \r\n        <ion-item>\r\n    \r\n          <ion-button  (click)=\"cerrarCrearCategoria()\" color=\"danger\" slot=\"end\">\r\n            Cancelar\r\n          </ion-button>\r\n          <ion-button [disabled]=\"!newForm.valid\" type=\"submit\" color=\"success\" slot=\"end\">\r\n            Crear\r\n          </ion-button>\r\n          \r\n    \r\n        </ion-item>\r\n      </ion-list>\r\n    </form>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_docentes_crear-anuncio_crear-anuncio_module_ts.js.map