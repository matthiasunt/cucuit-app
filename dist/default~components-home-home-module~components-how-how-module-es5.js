function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-home-home-module~components-how-how-module"], {
  /***/
  "./src/app/components/add-cucu/add-cucu.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/add-cucu/add-cucu.component.ts ***!
    \***********************************************************/

  /*! exports provided: AddCucuComponent, validateInviteUrl */

  /***/
  function srcAppComponentsAddCucuAddCucuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCucuComponent", function () {
      return AddCucuComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateInviteUrl", function () {
      return validateInviteUrl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _util_date_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../util/date.util */
    "./src/app/util/date.util.ts");
    /* harmony import */


    var _util_languages_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../util/languages.util */
    "./src/app/util/languages.util.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_db_db_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/db/db.service */
    "./src/app/services/db/db.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["inviteUrlInput"];

    function AddCucuComponent_nb_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r252 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r252);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r252, " ");
      }
    }

    function AddCucuComponent_nb_option_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var l_r253 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", l_r253["short"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r253.name);
      }
    }

    function AddCucuComponent_nb_option_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var t_r254 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", t_r254);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", t_r254, " ");
      }
    }

    var AddCucuComponent = /*#__PURE__*/function () {
      function AddCucuComponent(formBuilder, translate, dbService) {
        _classCallCheck(this, AddCucuComponent);

        this.formBuilder = formBuilder;
        this.translate = translate;
        this.dbService = dbService;
        this.componentSize = 'medium';
        this.componentShape = 'rectangle';
        this.languages = Object(_util_languages_util__WEBPACK_IMPORTED_MODULE_5__["getLangs"])();
        this.participantsOptions = ['10', '20', '50'];
        this.timeSlots = [];
        this.avatarUploadLabel = '';
      }

      _createClass(AddCucuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var now = new Date();
          var currentHour = now.getHours();
          var dayPreset = currentHour > 18 ? 'Tomorrow' : 'Today';
          var hourPreset = currentHour > 18 ? '10:00' : "".concat(currentHour + 2, ":00");
          this.timeSlots = this.getTimeSlots(dayPreset);
          this.form = this.formBuilder.group({
            // inviteUrl: ['https://hangouts.google.com/call/A6PK6lK45zkCf357wj-vAEEI', [Validators.required, validateInviteUrl]],
            // topic: ['Lettura di libri in compagnia con un bel bicchiere di vino.', Validators.required],
            // userName: ['Dario', Validators.required],
            // language: ['it', Validators.required],
            // participantsLimit: ['10', Validators.required],
            // day: ['Tomorrow', Validators.required],
            // time: ['18:00', Validators.required],
            inviteUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, validateInviteUrl]],
            topic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            language: [this.translate.currentLang, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            participantsLimit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            day: [dayPreset, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            time: [hourPreset, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.filteredTimeOptions$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.timeSlots);
          this.filteredTimeOptions$ = this.time.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (filterString) {
            return _this.filterTimeslots(filterString);
          }));
          this.filteredParticipantsOptions$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.participantsOptions);
          this.filteredParticipantsOptions$ = this.participantsLimit.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (filterString) {
            return _this.filterParticipantsLimit(filterString);
          }));
          this.day.valueChanges.subscribe(function (change) {
            _this.timeSlots = _this.getTimeSlots(change);

            _this.time.setValue('');
          });
        }
      }, {
        key: "filterTimeslots",
        value: function filterTimeslots(value) {
          if (value) {
            var filterValue = value.toLowerCase();
            return this.timeSlots.filter(function (optionValue) {
              return optionValue.toLowerCase().includes(filterValue);
            });
          }
        }
      }, {
        key: "filterParticipantsLimit",
        value: function filterParticipantsLimit(value) {
          if (value) {
            var filterValue = value.toLowerCase();
            return this.participantsOptions.filter(function (optionValue) {
              return optionValue.toLowerCase().includes(filterValue);
            });
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {// this.inviteUrlInput.nativeElement.focus();
        }
      }, {
        key: "postCucu",
        value: function postCucu() {
          var _this2 = this;

          if (this.form.valid) {
            var data = this.form.getRawValue();
            var date = new Date();

            if (data.day === 'Tomorrow') {
              date = Object(_util_date_util__WEBPACK_IMPORTED_MODULE_4__["addDays"])(1)(date);
            }

            var hours = data.time.split(':')[0];
            var minutes = data.time.split(':')[1];
            date.setHours(hours);
            date.setMinutes(minutes);
            date.setSeconds(0);
            console.log(date);

            if (!this.avatarId) {
              this.avatarId = '';
            }

            var cucu = {
              inviteUrl: data.inviteUrl,
              topic: data.topic,
              startDateString: date.toUTCString(),
              userName: data.userName,
              avatarId: this.avatarId,
              language: data.language
            };
            this.dbService.createCucu(cucu).subscribe(function (res) {
              if (res.topic) {
                _this2.avatarUploadLabel = '';

                _this2.form.reset(); // this.showToast('success');

              } else {
                console.error(res); // this.showToast('danger');
              }
            });
          } else {
            console.error('Form invalid');
            console.error(this.form);
            console.log(this.form.getRawValue());
          }
        }
      }, {
        key: "onAvatarFileChanged",
        value: function onAvatarFileChanged(event) {
          var _this3 = this;

          var file = event.target.files[0];

          if (file && file.name) {
            this.avatarUploadLabel = file.name;
            this.dbService.uploadAvatar(file).subscribe(function (res) {
              if (res.id) {
                _this3.avatarId = res.id;
              }
            });
          }
        }
      }, {
        key: "showToast",
        value: function showToast(status) {// const title = status === 'success' ? 'Success' : 'Error';
          // const message = status === 'success' ? 'Cucu posted!' : 'Error. Please try again later';
          // this.toastrService.show(
          //   message,
          //   title,
          //   {status});
        }
      }, {
        key: "handleDateChange",
        value: function handleDateChange(event) {
          console.log(event);
        }
      }, {
        key: "getTimeSlots",
        value: function getTimeSlots(day) {
          var timeSlots = [];
          var currentHour = new Date().getHours();
          var currentMinutes = new Date().getMinutes();
          var offset = currentMinutes > 30 ? 1 : 0;

          if (day !== 'Today') {
            currentHour = 0;
            offset = 0;
          }

          for (var i = currentHour + offset; i < 24; i++) {
            var slot = Math.floor(i) + ':';
            timeSlots.push(slot + '00');
            timeSlots.push(slot + '30');
          }

          return timeSlots;
        }
      }, {
        key: "elementStatus",
        value: function elementStatus(control) {
          return control.valid || !control.dirty ? '' : 'danger';
        }
      }, {
        key: "inviteUrl",
        get: function get() {
          return this.form.get('inviteUrl');
        }
      }, {
        key: "topic",
        get: function get() {
          return this.form.get('topic');
        }
      }, {
        key: "userName",
        get: function get() {
          return this.form.get('userName');
        }
      }, {
        key: "participantsLimit",
        get: function get() {
          return this.form.get('participantsLimit');
        }
      }, {
        key: "language",
        get: function get() {
          return this.form.get('language');
        }
      }, {
        key: "day",
        get: function get() {
          return this.form.get('day');
        }
      }, {
        key: "time",
        get: function get() {
          return this.form.get('time');
        }
      }]);

      return AddCucuComponent;
    }();

    AddCucuComponent.ɵfac = function AddCucuComponent_Factory(t) {
      return new (t || AddCucuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db_db_service__WEBPACK_IMPORTED_MODULE_7__["DbService"]));
    };

    AddCucuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddCucuComponent,
      selectors: [["app-add-cucu"]],
      viewQuery: function AddCucuComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inviteUrlInput = _t.first);
        }
      },
      decls: 61,
      vars: 47,
      consts: [[3, "size"], [1, "example-items-col"], [3, "formGroup"], [1, "form-group"], ["nbPrefix", "", "icon", "link-outline", "pack", "eva"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Invite Link (Hangouts, Skype or Zoom)", "nbTooltip", "This is a tooltip", "nbTooltipStatus", "primary", 3, "formControl", "shape", "fieldSize", "status"], ["inviteUrlInput", ""], ["nbPrefix", "", "icon", "heart-outline", "pack", "eva"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "What's your Cucu about? Yoga, Reading, \u2026", "id", "topic", 3, "formControl", "shape", "fieldSize", "status"], [1, "row"], [1, "col-lg-6", "col-md-12", "col-sm-12"], ["nbPrefix", "", "icon", "people-outline", "pack", "eva"], ["fullWidth", "", "nbInput", "", "type", "text", "placeholder", "Enter participants limit", 3, "formControl", "status", "shape", "nbAutocomplete", "fieldSize"], ["participantsAutocomplete", ""], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Select Language", "fullWidth", "", 3, "formControl", "size", "shape"], ["placeholder", "Select Day", "fullWidth", "", 3, "formControl", "selected", "shape", "size"], [3, "value"], ["nbPrefix", "", "icon", "clock-outline", "pack", "eva"], ["fullWidth", "", "nbInput", "", "type", "text", "placeholder", "Enter time", 3, "formControl", "status", "shape", "nbAutocomplete", "fieldSize"], ["timeAutocomplete", ""], ["nbPrefix", "", "icon", "person-outline", "pack", "eva"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Your Name", 3, "formControl", "shape", "status", "fieldSize"], ["nbButton", "", "fullWidth", "", "status", "primary", 3, "shape", "size", "click"], ["type", "file", 2, "display", "none", 3, "accept", "change"], ["avatarInput", ""], ["nbButton", "", "hero", "", "status", "primary", "fullWidth", "", 3, "type", "shape", "size", "click"]],
      template: function AddCucuComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nb-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nb-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nb-autocomplete", null, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddCucuComponent_nb_option_20_Template, 2, 2, "nb-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nb-select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddCucuComponent_nb_option_25_Template, 2, 2, "nb-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nb-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nb-select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nb-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nb-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Tomorrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nb-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "nb-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nb-autocomplete", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AddCucuComponent_nb_option_42_Template, 2, 2, "nb-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nb-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "nb-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCucuComponent_Template_button_click_52_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r255);

            var _r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);

            return _r251.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Upload Avatar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddCucuComponent_Template_input_change_54_listener($event) {
            return ctx.onAvatarFileChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCucuComponent_Template_button_click_59_listener() {
            return ctx.postCucu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Post ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          var _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", "medium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.inviteUrl)("shape", ctx.componentShape)("fieldSize", "large")("status", ctx.elementStatus(ctx.inviteUrl));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.topic)("shape", ctx.componentShape)("fieldSize", ctx.componentSize)("status", ctx.elementStatus(ctx.topic));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.participantsLimit)("status", ctx.elementStatus(ctx.participantsLimit))("shape", ctx.componentShape)("nbAutocomplete", _r246)("fieldSize", ctx.componentSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 43, ctx.filteredParticipantsOptions$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.language)("size", ctx.componentSize)("shape", ctx.componentShape);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.day)("selected", "Today")("shape", ctx.componentShape)("size", ctx.componentSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Tomorrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.time)("status", ctx.elementStatus(ctx.time))("shape", ctx.componentShape)("nbAutocomplete", _r249)("fieldSize", ctx.componentSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 45, ctx.filteredTimeOptions$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.userName)("shape", ctx.componentShape)("status", ctx.elementStatus(ctx.userName))("fieldSize", ctx.componentSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("shape", ctx.componentShape)("size", ctx.componentSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", "image/x-png, image/jpeg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.avatarUploadLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "submit")("shape", "rectangle")("size", "large");
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbPrefixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbTooltipDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAutocompleteDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWN1Y3UvYWRkLWN1Y3UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCucuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-cucu',
          templateUrl: './add-cucu.component.html',
          styleUrls: ['./add-cucu.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _services_db_db_service__WEBPACK_IMPORTED_MODULE_7__["DbService"]
        }];
      }, {
        inviteUrlInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['inviteUrlInput']
        }]
      });
    })();

    function validateInviteUrl(control) {
      if (control && control.value && !control.value.includes('hangouts.google.com') && !control.value.includes('join.skype.com') && !control.value.includes('zoom.us')) {
        return {
          validInviteUrl: false
        };
      }

      return null;
    }
    /***/

  },

  /***/
  "./src/app/components/add-cucu/add-cucu.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/add-cucu/add-cucu.module.ts ***!
    \********************************************************/

  /*! exports provided: AddCucuModule */

  /***/
  function srcAppComponentsAddCucuAddCucuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCucuModule", function () {
      return AddCucuModule;
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


    var _add_cucu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-cucu.component */
    "./src/app/components/add-cucu/add-cucu.component.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var AddCucuModule = function AddCucuModule() {
      _classCallCheck(this, AddCucuModule);
    };

    AddCucuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AddCucuModule
    });
    AddCucuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AddCucuModule_Factory(t) {
        return new (t || AddCucuModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbFormFieldModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAutocompleteModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddCucuModule, {
        declarations: [_add_cucu_component__WEBPACK_IMPORTED_MODULE_3__["AddCucuComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbFormFieldModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAutocompleteModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrModule"]],
        exports: [_add_cucu_component__WEBPACK_IMPORTED_MODULE_3__["AddCucuComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCucuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_add_cucu_component__WEBPACK_IMPORTED_MODULE_3__["AddCucuComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbFormFieldModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAutocompleteModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrModule"]],
          exports: [_add_cucu_component__WEBPACK_IMPORTED_MODULE_3__["AddCucuComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/cucu-box/cucu-box.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/cucu-box/cucu-box.component.ts ***!
    \***********************************************************/

  /*! exports provided: CucuBoxComponent */

  /***/
  function srcAppComponentsCucuBoxCucuBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CucuBoxComponent", function () {
      return CucuBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _util_date_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../util/date.util */
    "./src/app/util/date.util.ts");
    /* harmony import */


    var _util_languages_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../util/languages.util */
    "./src/app/util/languages.util.ts");
    /* harmony import */


    var _services_db_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/db/db.service */
    "./src/app/services/db/db.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var CucuBoxComponent = /*#__PURE__*/function () {
      function CucuBoxComponent(dbService) {
        _classCallCheck(this, CucuBoxComponent);

        this.dbService = dbService;
      }

      _createClass(CucuBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.cucu.avatarId && this.cucu.avatarId.length > 0) {
            this.imageUrl = "".concat(this.dbService.getImageBaseUrl(), "/").concat(this.cucu.avatarId);
          }

          var date = new Date(Date.parse(this.cucu.startDateString));
          this.time = date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          });
          this.day = Object(_util_date_util__WEBPACK_IMPORTED_MODULE_1__["isToday"])(date) ? 'Today' : 'Tomorrow';
        }
      }, {
        key: "getLangEmoji",
        value: function getLangEmoji(lang) {
          return Object(_util_languages_util__WEBPACK_IMPORTED_MODULE_2__["getEmojiForLang"])(lang);
        }
      }]);

      return CucuBoxComponent;
    }();

    CucuBoxComponent.ɵfac = function CucuBoxComponent_Factory(t) {
      return new (t || CucuBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db_db_service__WEBPACK_IMPORTED_MODULE_3__["DbService"]));
    };

    CucuBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CucuBoxComponent,
      selectors: [["app-cucu-box"]],
      inputs: {
        cucu: "cucu"
      },
      decls: 8,
      vars: 8,
      consts: [["size", "giant", 3, "picture", "name", "title", "badgeText", "badgeStatus", "badgePosition"], ["nbButton", "", "status", "primary", 3, "shape"]],
      template: function CucuBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-user", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Join");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("picture", ctx.imageUrl)("name", ctx.cucu.userName)("title", ctx.day + " at " + ctx.time)("badgeText", ctx.cucu.language)("badgeStatus", "primary")("badgePosition", "bottom right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cucu.topic, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("shape", "rectangle");
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VjdS1ib3gvY3VjdS1ib3guY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CucuBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cucu-box',
          templateUrl: './cucu-box.component.html',
          styleUrls: ['./cucu-box.component.scss']
        }]
      }], function () {
        return [{
          type: _services_db_db_service__WEBPACK_IMPORTED_MODULE_3__["DbService"]
        }];
      }, {
        cucu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/cucu-box/cucu-box.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/cucu-box/cucu-box.module.ts ***!
    \********************************************************/

  /*! exports provided: CucuBoxModule */

  /***/
  function srcAppComponentsCucuBoxCucuBoxModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CucuBoxModule", function () {
      return CucuBoxModule;
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


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _cucu_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cucu-box.component */
    "./src/app/components/cucu-box/cucu-box.component.ts");

    var CucuBoxModule = function CucuBoxModule() {
      _classCallCheck(this, CucuBoxModule);
    };

    CucuBoxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CucuBoxModule
    });
    CucuBoxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CucuBoxModule_Factory(t) {
        return new (t || CucuBoxModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CucuBoxModule, {
        declarations: [_cucu_box_component__WEBPACK_IMPORTED_MODULE_4__["CucuBoxComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"]],
        exports: [_cucu_box_component__WEBPACK_IMPORTED_MODULE_4__["CucuBoxComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CucuBoxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_cucu_box_component__WEBPACK_IMPORTED_MODULE_4__["CucuBoxComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"]],
          exports: [_cucu_box_component__WEBPACK_IMPORTED_MODULE_4__["CucuBoxComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/db/db.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/db/db.service.ts ***!
    \*******************************************/

  /*! exports provided: DbService */

  /***/
  function srcAppServicesDbDbServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DbService", function () {
      return DbService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var DbService = /*#__PURE__*/function () {
      function DbService(http, translate) {
        var _this4 = this;

        _classCallCheck(this, DbService);

        this.http = http;
        this.translate = translate;
        this.baseUrl = 'http://localhost:3200'; // private baseUrl = 'https://api.cucuit.com';

        this.cucus$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.fetchCucus(translate.currentLang);
        this.translate.onLangChange.subscribe(function (lang) {
          return _this4.fetchCucus(lang);
        });
      }

      _createClass(DbService, [{
        key: "fetchCucus",
        value: function fetchCucus(lang) {
          var _this5 = this;

          var date = new Date();
          date.setMinutes(date.getMinutes() - 15);
          this.http.get("".concat(this.baseUrl, "/cucus/").concat(lang, "/after/").concat(date.toUTCString())).subscribe(function (cucus) {
            _this5.cucus$.next(cucus.slice(0, 15));
          });
        }
      }, {
        key: "createCucu",
        value: function createCucu(cucu) {
          var _this6 = this;

          return this.http.post("".concat(this.baseUrl, "/cucus"), cucu).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            _this6.fetchCucus(_this6.translate.currentLang);

            return res;
          }));
        }
      }, {
        key: "incrementClickCounter",
        value: function incrementClickCounter(id) {
          return this.http.get("".concat(this.baseUrl, "/cucus/").concat(id, "/click"));
        }
      }, {
        key: "uploadAvatar",
        value: function uploadAvatar(file) {
          var fd = new FormData();
          fd.append('file', file);
          return this.http.post("".concat(this.baseUrl, "/images"), fd);
        }
      }, {
        key: "getImageBaseUrl",
        value: function getImageBaseUrl() {
          return "".concat(this.baseUrl, "/images");
        }
      }, {
        key: "cucus",
        get: function get() {
          return this.cucus$;
        }
      }]);

      return DbService;
    }();

    DbService.ɵfac = function DbService_Factory(t) {
      return new (t || DbService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
    };

    DbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DbService,
      factory: DbService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DbService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/util/date.util.ts":
  /*!***********************************!*\
    !*** ./src/app/util/date.util.ts ***!
    \***********************************/

  /*! exports provided: addDays, isToday */

  /***/
  function srcAppUtilDateUtilTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addDays", function () {
      return addDays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isToday", function () {
      return isToday;
    });

    var addDays = function addDays(days) {
      return function (date) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      };
    };

    var isToday = function isToday(someDate) {
      var today = new Date();
      return someDate.getDate() === today.getDate() && someDate.getMonth() === today.getMonth() && someDate.getFullYear() === today.getFullYear();
    };
    /***/

  },

  /***/
  "./src/app/util/languages.util.ts":
  /*!****************************************!*\
    !*** ./src/app/util/languages.util.ts ***!
    \****************************************/

  /*! exports provided: getEmojiForLang, getLangs */

  /***/
  function srcAppUtilLanguagesUtilTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getEmojiForLang", function () {
      return getEmojiForLang;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLangs", function () {
      return getLangs;
    });

    var langs = [{
      name: 'Italiano 🇮🇹',
      "short": 'it',
      emoji: '🇮🇹'
    }, {
      name: 'Español 🇪🇸',
      "short": 'es',
      emoji: '🇪🇸'
    }, {
      name: 'Deutsch 🇩🇪',
      "short": 'de',
      emoji: '🇩🇪'
    }, {
      name: 'English 🇬🇧',
      "short": 'en',
      emoji: '🇬🇧'
    }];

    var getEmojiForLang = function getEmojiForLang(lang) {
      return langs.find(function (l) {
        return l["short"] === lang;
      }).emoji;
    };

    var getLangs = function getLangs() {
      return langs;
    };
    /***/

  }
}]);
//# sourceMappingURL=default~components-home-home-module~components-how-how-module-es5.js.map