function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-home-home-module"], {
  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_db_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/db/db.service */
    "./src/app/services/db/db.service.ts");
    /* harmony import */


    var _add_cucu_add_cucu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../add-cucu/add-cucu.component */
    "./src/app/components/add-cucu/add-cucu.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _cucu_box_cucu_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../cucu-box/cucu-box.component */
    "./src/app/components/cucu-box/cucu-box.component.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    function HomeComponent_p_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Cucus found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cucu-box", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r242 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cucu", c_r242)("@simpleFadeAnimation", "in");
      }
    }

    function HomeComponent_button_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_24_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244);

          var ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r243.loadMore();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Load more ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("shape", "rectangle")("size", "medium");
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(translate, dbService) {
        _classCallCheck(this, HomeComponent);

        this.translate = translate;
        this.dbService = dbService;
        this.doWeHaveMore = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadMore",
        value: function loadMore() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db_db_service__WEBPACK_IMPORTED_MODULE_3__["DbService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 26,
      vars: 7,
      consts: [[1, "row"], [1, "col-lg-7", "col-md-6"], [1, "hero-section"], [1, "vdo-section"], ["href", "https://www.youtube.com/watch?v=p29dKpHnPjQ", "target", "_blank"], ["src", "./assets/images/video-icon.svg", "alt", "Play button"], [1, "col-lg-5", "col-md-6"], [4, "ngIf"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "ws-s"], [1, "col-md-12", "load-more-div"], ["nbButton", "", "status", "primary", 3, "shape", "size", "click", 4, "ngIf"], [1, "ws-m"], [1, "col-md-4"], [3, "cucu"], ["nbButton", "", "status", "primary", 3, "shape", "size", "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sconfiggi la noia con CUCUit!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Conosci persone sempre nuove e condividi idee sull\u2019argomento che preferisci. Chiuditi in casa. Apri la mente. Esci dagli schemi. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Watch our intro video");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-add-cucu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_p_17_Template, 2, 0, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_div_19_Template, 2, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_button_24_Template, 2, 2, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 12);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 3, ctx.dbService.cucus).length < 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 5, ctx.dbService.cucus));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doWeHaveMore);
        }
      },
      directives: [_add_cucu_add_cucu_component__WEBPACK_IMPORTED_MODULE_4__["AddCucuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _cucu_box_cucu_box_component__WEBPACK_IMPORTED_MODULE_6__["CucuBoxComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".hero-section[_ngcontent-%COMP%] {\n  margin: 5% 15% 5% 10%;\n}\n.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  line-height: 1;\n}\n.hero-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n@media (max-width: 991px) {\n  .hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n.vdo-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 80px;\n}\n.vdo-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.vdo-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n.load-more-div[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGlhc3VudC9EZXYvR2l0L0N1Y3VJdC9jdWN1aXQtYXBwL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDSjtBREVFO0VBQ0UsZUFBQTtBQ0FKO0FESUE7RUFFSTtJQUNFLGVBQUE7RUNGSjtBQUNGO0FET0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0xKO0FEUUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ05KO0FEUUk7RUFDRSxZQUFBO0FDTk47QURXQTtFQUNFLGtCQUFBO0FDUkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvLXNlY3Rpb24ge1xuICBtYXJnaW46IDUlIDE1JSA1JSAxMCU7XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuXG4gIHAge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmhlcm8tc2VjdGlvbiB7XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgIH1cbiAgfVxufVxuXG4udmRvLXNlY3Rpb24ge1xuICBpbWcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogODBweDtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgIGEge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgfVxufVxuXG4ubG9hZC1tb3JlLWRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIi5oZXJvLXNlY3Rpb24ge1xuICBtYXJnaW46IDUlIDE1JSA1JSAxMCU7XG59XG4uaGVyby1zZWN0aW9uIGgxIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5oZXJvLXNlY3Rpb24gcCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5oZXJvLXNlY3Rpb24gaDEge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxufVxuLnZkby1zZWN0aW9uIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDgwcHg7XG59XG4udmRvLXNlY3Rpb24gc3BhbiB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnZkby1zZWN0aW9uIHNwYW4gYSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmxvYWQtbW9yZS1kaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"],
      data: {
        animation: [// the fade-in/fade-out animation.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('simpleFadeAnimation', [// the "in" style determines the "resting" state of the element when it is visible.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1
        })), // fade in when created. this could also be written as transition('void => *')
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600)]), // fade out when destroyed. this could also be written as transition('void => *')
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0
        })))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss'],
          animations: [// the fade-in/fade-out animation.
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('simpleFadeAnimation', [// the "in" style determines the "resting" state of the element when it is visible.
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          })), // fade in when created. this could also be written as transition('void => *')
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600)]), // fade out when destroyed. this could also be written as transition('void => *')
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          })))])]
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: _services_db_db_service__WEBPACK_IMPORTED_MODULE_3__["DbService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.module.ts":
  /*!************************************************!*\
    !*** ./src/app/components/home/home.module.ts ***!
    \************************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppComponentsHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _add_cucu_add_cucu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../add-cucu/add-cucu.module */
    "./src/app/components/add-cucu/add-cucu.module.ts");
    /* harmony import */


    var _cucu_box_cucu_box_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../cucu-box/cucu-box.module */
    "./src/app/components/cucu-box/cucu-box.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var routes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }];

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _add_cucu_add_cucu_module__WEBPACK_IMPORTED_MODULE_5__["AddCucuModule"], _cucu_box_cucu_box_module__WEBPACK_IMPORTED_MODULE_6__["CucuBoxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _add_cucu_add_cucu_module__WEBPACK_IMPORTED_MODULE_5__["AddCucuModule"], _cucu_box_cucu_box_module__WEBPACK_IMPORTED_MODULE_6__["CucuBoxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"]],
        exports: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _add_cucu_add_cucu_module__WEBPACK_IMPORTED_MODULE_5__["AddCucuModule"], _cucu_box_cucu_box_module__WEBPACK_IMPORTED_MODULE_6__["CucuBoxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"]],
          exports: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-home-home-module-es5.js.map