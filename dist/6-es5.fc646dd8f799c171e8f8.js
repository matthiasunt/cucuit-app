function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7vJP":function(e,t,n){"use strict";n.r(t);var i,c,o=n("ofXK"),r=n("3Pt+"),a=n("tyNb"),s=n("mrSG"),u={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},l=n("fXoL"),b=n("sYmb"),p=n("qFVP"),d=n("Wdmj"),f=n("LRne"),g=n("lJxs"),m=n("Y9tF"),h=n("+EEi"),v=function(e){return!e||!e.value||e.value.includes("google.com")||e.value.includes("join.skype.com")||e.value.includes("meet.jit.si")||e.value.includes("zoom.us")?null:{validInviteUrl:!1}},C=n("a7lh"),k=n("aceb"),E=n("snr1"),W=n("TpHk"),V=((i=function(){function e(t,n,i){_classCallCheck(this,e),this.theme=t,this.dbService=n,this.dialogService=i}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"deleteCucu",value:function(){var e=this;this.dbService.deleteCucu(this.cucu._id).subscribe((function(t){t&&t._id&&e.closeEvent.next(!0)}))}}]),e}()).\u0275fac=function(e){return new(e||i)(l.Qb(C.a),l.Qb(p.a),l.Qb(k.r))},i.\u0275cmp=l.Kb({type:i,selectors:[["app-post-success"]],decls:20,vars:12,consts:[["accent","success",1,"dialog-card",3,"size"],[1,"container-fluid"],[1,"row"],[1,"col","col-md-12"],[1,"form-group"],["nbPrefix","","icon","link-outline","pack","eva"],["type","text","nbInput","","fullWidth","",3,"value","shape"],[1,"ws-s"],[3,"cucu"],["nbButton","","status","danger","fullWidth","",3,"click"],["icon","trash"]],template:function(e,t){1&e&&(l.Wb(0,"nb-card",0),l.Wb(1,"nb-card-body"),l.Wb(2,"div",1),l.Wb(3,"h1"),l.Cc(4),l.jc(5,"translate"),l.Vb(),l.Wb(6,"div",2),l.Wb(7,"div",3),l.Wb(8,"div",4),l.Wb(9,"nb-form-field"),l.Rb(10,"nb-icon",5),l.Rb(11,"input",6),l.jc(12,"getCucuUrl"),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Rb(13,"div",7),l.Rb(14,"app-cucu-box",8),l.Vb(),l.Vb(),l.Wb(15,"nb-card-footer"),l.Wb(16,"button",9),l.ec("click",(function(){return t.deleteCucu()})),l.Rb(17,"nb-icon",10),l.Cc(18),l.jc(19,"translate"),l.Vb(),l.Vb(),l.Vb()),2&e&&(l.oc("size","large"),l.Eb(4),l.Dc(l.kc(5,6,"postCucu.CUCU_POSTED")),l.Eb(7),l.oc("value",l.kc(12,8,t.cucu._id))("shape",t.theme.componentShape),l.Eb(3),l.oc("cucu",t.cucu),l.Eb(4),l.Ec(" ",l.kc(19,10,"DELETE")," CUCU "))},directives:[k.h,k.g,k.s,k.u,k.H,k.x,E.a,k.i,k.d],pipes:[b.c,W.a],styles:[""],changeDetection:0}),i),O=n("AytR"),y=n("yvwT"),_=((c=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"transform",value:function(e){return e.valid||!e.dirty?"basic":"danger"}}]),e}()).\u0275fac=function(e){return new(e||c)},c.\u0275pipe=l.Pb({name:"elementStatus",type:c,pure:!0}),c),w=["inviteUrlInputElement"],x=["timeInputElement"];function S(e,t){if(1&e&&(l.Wb(0,"a",43),l.Rb(1,"img",44),l.Vb()),2&e){var n=t.$implicit;l.oc("href",n.url,l.wc),l.Eb(1),l.oc("src",n.imageUrl,l.wc)("nbTooltip",n.tooltip)("alt",n.name+" logo")}}function P(e,t){if(1&e&&(l.Wb(0,"nb-option",45),l.Cc(1),l.Vb()),2&e){var n=t.$implicit;l.oc("value",n),l.Eb(1),l.Ec(" ",n," ")}}function R(e,t){if(1&e&&(l.Wb(0,"nb-option",45),l.Cc(1),l.Vb()),2&e){var n=t.$implicit;l.oc("value",n),l.Eb(1),l.Ec(" ",n," ")}}var T,j=((T=function(){function e(t,n,i,c,o,r,a,s){_classCallCheck(this,e),this.formBuilder=t,this.theme=n,this.translate=i,this.dbService=c,this.callProvidersService=o,this.dialogService=r,this.toastrService=a,this.gaService=s,this.timeSlots=[],this.languages=Object(h.a)().map((function(e){return e.name})),this.avatarUploadLabel=""}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.initForm();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"postCucu",value:function(){var e=this;if(this.form.valid){var t=this.form.getRawValue(),n=t.date,i=t.time.split(":")[0],c=t.time.split(":")[1];n.setHours(i),n.setMinutes(c),n.setSeconds(0),this.avatarId||(this.avatarId=""),this.dbService.createCucu({inviteUrl:t.inviteUrl,topic:t.topic,description:t.description,type:t.isConference?"conference":"chitchat",startDate:n,userName:t.userName,avatarId:this.avatarId,language:t.language}).subscribe((function(t){return Object(s.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i,c=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.topic?(this.avatarUploadLabel="",this.initForm(),this.gaService.event("post_success","post_cucu"),n=new l.o,i=this.dialogService.open(V,{context:{cucu:t,closeEvent:n}}),n.subscribe((function(e){return i.close()})),i.onClose.subscribe((function(){c.inviteUrlInputElement.nativeElement.focus()}))):console.error(t),this.inviteUrlInputElement.nativeElement.focus();case 2:case"end":return e.stop()}}),e,this)})))}),(function(t){return Object(s.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.error(t),e.next=3,this.showCucuPostError();case 3:this.gaService.event("post_failed","post_cucu");case 4:case"end":return e.stop()}}),e,this)})))}))}else console.error("Form invalid"),console.log(this.form.getRawValue())}},{key:"onAvatarFileChanged",value:function(e){var t=this;this.avatarUploadLabel="";var n=e.target.files[0];n&&n.name&&(this.avatarUploadLabel=n.name,this.dbService.uploadAvatar(n).subscribe((function(e){return Object(s.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.id&&(this.avatarId=e.id,this.gaService.event("image_upload_success","post_cucu"));case 1:case"end":return t.stop()}}),t,this)})))}),(function(e){return Object(s.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(413!==e.status){t.next=16;break}return t.next=3,this.translate.get("postCucu.errors.fileTooLarge.TITLE").toPromise();case 3:return this.avatarUploadLabel=t.sent,t.t0=this.toastrService,t.next=7,this.translate.get("postCucu.errors.fileTooLarge.TEXT").toPromise();case 7:return t.t1=t.sent,t.next=10,this.translate.get("postCucu.CUCU_ERROR").toPromise();case 10:t.t2=t.sent,t.t3={status:"warning"},t.t0.show.call(t.t0,t.t1,t.t2,t.t3),this.gaService.event("image_too_large","post_cucu"),t.next=29;break;case 16:return t.next=18,this.translate.get("postCucu.errors.unknown.TITLE").toPromise();case 18:return this.avatarUploadLabel=t.sent,t.t4=this.toastrService,t.next=22,this.translate.get("postCucu.errors.unknown.TEXT").toPromise();case 22:return t.t5=t.sent,t.next=25,this.translate.get("postCucu.CUCU_ERROR").toPromise();case 25:t.t6=t.sent,t.t7={status:"warning"},t.t4.show.call(t.t4,t.t5,t.t6,t.t7),this.gaService.event("image_upload_failed","post_cucu");case 29:case"end":return t.stop()}}),t,this)})))})))}},{key:"initForm",value:function(){var e=this,t=new Date,n=new Date(t.setDate(t.getDate()+1)),i=(new Date).getHours(),c=i>18?n:new Date,o=i>18||i<8?"10:00":"".concat(i+2,":00"),a=Object(h.b)(this.translate.currentLang);this.timeSlots=Object(m.a)(c),this.form=this.formBuilder.group(O.a.production?{inviteUrl:["",[r.m.required,v]],topic:["",r.m.required],description:["",r.m.maxLength(450)],isConference:[!1,r.m.required],userName:["",r.m.required],language:[a,r.m.required],date:[c,r.m.required],time:[o,[r.m.required,r.m.pattern("[0-9]?[0-9]:[0-9][0-9]")]]}:{inviteUrl:["https://hangouts.google.com/call/3wTZG0Tv8yykGbUGSfj2AEEI",[r.m.required,v]],topic:["Sports",r.m.required],description:["Morning routine",r.m.required],isConference:[!1,r.m.required],userName:["Matthias",r.m.required],language:[a,r.m.required],date:[c,r.m.required],time:[o,[r.m.required,r.m.pattern("[0-9]?[0-9]:[0-9][0-9]")]]}),this.filteredTimeOptions$=Object(f.a)(this.timeSlots),this.filteredTimeOptions$=this.time.valueChanges.pipe(Object(g.a)((function(t){return e.filterTimeslots(t)}))),this.filteredLanguageOptions$=Object(f.a)(this.languages),this.filteredLanguageOptions$=this.language.valueChanges.pipe(Object(g.a)((function(t){return e.filterLanguages(t)}))),this.date.valueChanges.subscribe((function(t){e.timeSlots=Object(m.a)(t),Object(m.b)(t)?e.time.setValue("".concat(i+2,":00")):e.time.setValue("10:00")})),setTimeout((function(){e.inviteUrlInputElement.nativeElement.focus()}),1)}},{key:"filterTimeslots",value:function(e){if(e){var t=e.toLowerCase();return this.timeSlots.filter((function(e){return e.toLowerCase().includes(t)}))}}},{key:"filterLanguages",value:function(e){if(e){var t=e.toLowerCase();return this.languages.filter((function(e){return e.toLowerCase().includes(t)}))}}},{key:"showCucuPostError",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.translate.get("ERROR").toPromise();case 2:return t=e.sent,e.next=5,this.translate.get("postCucu.CUCU_ERROR").toPromise();case 5:n=e.sent,this.toastrService.show(n,t,{status:"danger"});case 7:case"end":return e.stop()}}),e,this)})))}},{key:"inviteUrl",get:function(){return this.form.get("inviteUrl")}},{key:"topic",get:function(){return this.form.get("topic")}},{key:"description",get:function(){return this.form.get("description")}},{key:"isConference",get:function(){return this.form.get("isConference")}},{key:"userName",get:function(){return this.form.get("userName")}},{key:"language",get:function(){return this.form.get("language")}},{key:"date",get:function(){return this.form.get("date")}},{key:"time",get:function(){return this.form.get("time")}}]),e}()).\u0275fac=function(e){return new(e||T)(l.Qb(r.b),l.Qb(C.a),l.Qb(b.d),l.Qb(p.a),l.Qb(y.a),l.Qb(k.r),l.Qb(k.N),l.Qb(d.a))},T.\u0275cmp=l.Kb({type:T,selectors:[["app-add-cucu"]],viewQuery:function(e,t){var n;1&e&&(l.Gc(w,!0),l.Gc(x,!0)),2&e&&(l.rc(n=l.fc())&&(t.inviteUrlInputElement=n.first),l.rc(n=l.fc())&&(t.timeInputElement=n.first))},decls:107,vars:100,consts:[["accent","primary"],[1,"example-items-col"],[1,"container-fluid"],[1,"video-call-services"],[1,"row"],["target","_blank",3,"href",4,"ngFor","ngForOf"],[1,"ws-s"],[3,"formGroup"],[1,"col","no-padding"],[1,"form-group"],["nbPrefix","","icon","link-outline","pack","eva"],["type","text","nbInput","","fullWidth","",3,"formControl","shape","fieldSize","placeholder","status"],["inviteUrlInputElement",""],[1,"col","grow","no-padding"],["nbPrefix","","icon","heart-outline","pack","eva"],["type","text","nbInput","","fullWidth","","id","topic",3,"formControl","shape","fieldSize","placeholder","status"],[1,"col","shrink","no-padding","type-col"],[1,"col","left"],[1,"text"],[1,"col","center"],["status","primary",3,"formControl","nbTooltip","nbTooltipStatus"],[1,"col","right"],[1,"col","col-auto","no-padding"],[1,"avatar-upload-p"],[1,"col-md-4","col-sm-4","col-xs-12","no-padding"],["nbPrefix","","icon","globe-outline","pack","eva"],["fullWidth","","nbInput","","type","text",3,"formControl","placeholder","shape","fieldSize","status","nbAutocomplete"],["languageAutocomplete",""],[3,"value",4,"ngFor","ngForOf"],["nbPrefix","","icon","calendar-outline","pack","eva"],["fullWidth","","nbInput","",3,"nbDatepicker","formControl","shape","fieldSize"],["datepicker",""],["nbPrefix","","icon","clock-outline","pack","eva"],["fullWidth","","nbInput","","type","text",3,"formControl","placeholder","status","shape","fieldSize","nbAutocomplete"],["timeAutocomplete",""],["nbPrefix","","icon","person-outline","pack","eva"],["type","text","nbInput","","fullWidth","",3,"formControl","shape","fieldSize","status","placeholder"],[1,"col","shrink","no-padding"],["nbButton","","ghost","",3,"size","click"],["icon","camera-outline"],["type","file",2,"display","none",3,"accept","change"],["avatarInput",""],["nbButton","","hero","","status","primary","fullWidth","",3,"shape","size","click"],["target","_blank",3,"href"],[3,"src","nbTooltip","alt"],[3,"value"]],template:function(e,t){if(1&e){var n=l.Xb();l.Wb(0,"nb-card",0),l.Wb(1,"nb-card-body",1),l.Wb(2,"div",2),l.Wb(3,"h1"),l.Cc(4),l.jc(5,"translate"),l.Vb(),l.Wb(6,"div",3),l.Wb(7,"p"),l.Cc(8),l.jc(9,"translate"),l.Vb(),l.Wb(10,"div",4),l.Ac(11,S,2,4,"a",5),l.jc(12,"async"),l.Vb(),l.Vb(),l.Rb(13,"div",6),l.Wb(14,"form",7),l.Wb(15,"div",4),l.Wb(16,"div",8),l.Wb(17,"div",9),l.Wb(18,"nb-form-field"),l.Rb(19,"nb-icon",10),l.Rb(20,"input",11,12),l.jc(22,"async"),l.jc(23,"elementStatus"),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Wb(24,"div",4),l.Wb(25,"div",13),l.Wb(26,"div",9),l.Wb(27,"nb-form-field"),l.Rb(28,"nb-icon",14),l.Rb(29,"input",15),l.jc(30,"async"),l.jc(31,"elementStatus"),l.Vb(),l.Vb(),l.Vb(),l.Wb(32,"div",16),l.Wb(33,"div",4),l.Wb(34,"div",17),l.Wb(35,"span",18),l.Cc(36),l.jc(37,"translate"),l.Vb(),l.Vb(),l.Wb(38,"div",19),l.Rb(39,"nb-toggle",20),l.jc(40,"async"),l.Vb(),l.Wb(41,"div",21),l.Wb(42,"span",18),l.Cc(43),l.jc(44,"translate"),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Wb(45,"div",4),l.Wb(46,"div",8),l.Wb(47,"div",9),l.Wb(48,"nb-form-field"),l.Rb(49,"input",11),l.jc(50,"async"),l.jc(51,"elementStatus"),l.Vb(),l.Vb(),l.Vb(),l.Wb(52,"div",22),l.Wb(53,"p",23),l.Cc(54),l.Vb(),l.Vb(),l.Vb(),l.Wb(55,"div",4),l.Wb(56,"div",24),l.Wb(57,"div",9),l.Wb(58,"nb-form-field"),l.Rb(59,"nb-icon",25),l.Rb(60,"input",26),l.jc(61,"async"),l.jc(62,"elementStatus"),l.Wb(63,"nb-autocomplete",null,27),l.Ac(65,P,2,2,"nb-option",28),l.jc(66,"async"),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Wb(67,"div",24),l.Wb(68,"div",9),l.Wb(69,"nb-form-field"),l.Rb(70,"nb-icon",29),l.Rb(71,"input",30),l.Rb(72,"nb-datepicker",null,31),l.Vb(),l.Vb(),l.Vb(),l.Wb(74,"div",24),l.Wb(75,"div",9),l.Wb(76,"nb-form-field"),l.Rb(77,"nb-icon",32),l.Rb(78,"input",33),l.jc(79,"async"),l.jc(80,"elementStatus"),l.Wb(81,"nb-autocomplete",null,34),l.Ac(83,R,2,2,"nb-option",28),l.jc(84,"async"),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Wb(85,"div",4),l.Wb(86,"div",13),l.Wb(87,"div",9),l.Wb(88,"nb-form-field"),l.Rb(89,"nb-icon",35),l.Rb(90,"input",36),l.jc(91,"elementStatus"),l.jc(92,"async"),l.Vb(),l.Vb(),l.Vb(),l.Wb(93,"div",37),l.Wb(94,"div",9),l.Wb(95,"button",38),l.ec("click",(function(){return l.uc(n),l.sc(100).click()})),l.Rb(96,"nb-icon",39),l.Vb(),l.Wb(97,"p",23),l.Cc(98),l.Vb(),l.Wb(99,"input",40,41),l.ec("change",(function(e){return t.onAvatarFileChanged(e)})),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Wb(101,"div",4),l.Wb(102,"div",8),l.Wb(103,"div",9),l.Wb(104,"button",42),l.ec("click",(function(){return t.postCucu()})),l.Cc(105),l.jc(106,"translate"),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb()}if(2&e){var i=l.sc(64),c=l.sc(73),o=l.sc(82);l.Eb(4),l.Dc(l.kc(5,58,"postCucu.TITLE")),l.Eb(4),l.Ec("",l.kc(9,60,"postCucu.PLATFORMS_TEXT"),":"),l.Eb(3),l.oc("ngForOf",l.kc(12,62,t.callProvidersService.callProviders)),l.Eb(3),l.oc("formGroup",t.form),l.Eb(6),l.oc("formControl",t.inviteUrl)("shape",t.theme.componentShape)("fieldSize",t.theme.componentSize)("placeholder",l.kc(22,64,t.translate.get("postCucu.inviteUrl.PLACEHOLDER")))("status",l.kc(23,66,t.inviteUrl)),l.Eb(9),l.oc("formControl",t.topic)("shape",t.theme.componentShape)("fieldSize",t.theme.componentSize)("placeholder",l.kc(30,68,t.translate.get("postCucu.topic.PLACEHOLDER")))("status",l.kc(31,70,t.topic)),l.Eb(6),l.zc("font-weight",t.isConference.value?400:600),l.Eb(1),l.Ec(" ",l.kc(37,72,"cucuBox.CHITCHAT")," "),l.Eb(3),l.oc("formControl",t.isConference)("nbTooltip",l.kc(40,74,t.translate.get("postCucu.type.TOOLTIP")))("nbTooltipStatus","basic"),l.Eb(3),l.zc("font-weight",t.isConference.value?600:400),l.Eb(1),l.Ec(" ",l.kc(44,76,"cucuBox.FRONTAL_LESSON")," "),l.Eb(6),l.oc("formControl",t.description)("shape",t.theme.componentShape)("fieldSize",t.theme.componentSize)("placeholder",l.kc(50,78,t.translate.get("postCucu.description.PLACEHOLDER")))("status",l.kc(51,80,t.description)),l.Eb(5),l.Ec("",t.description.value.length,"/450"),l.Eb(6),l.oc("formControl",t.language)("placeholder",l.kc(61,82,t.translate.get("postCucu.language.PLACEHOLDER")))("shape",t.theme.componentShape)("fieldSize",t.theme.componentSize)("status",l.kc(62,84,t.language))("nbAutocomplete",i),l.Eb(5),l.oc("ngForOf",l.kc(66,86,t.filteredLanguageOptions$)),l.Eb(6),l.oc("nbDatepicker",c)("formControl",t.date)("shape",t.theme.componentShape)("fieldSize",t.theme.componentSize),l.Eb(7),l.oc("formControl",t.time)("placeholder",l.kc(79,88,t.translate.get("postCucu.time.PLACEHOLDER")))("status",l.kc(80,90,t.time))("shape",t.theme.componentShape)("fieldSize",t.theme.componentSize)("nbAutocomplete",o),l.Eb(5),l.oc("ngForOf",l.kc(84,92,t.filteredTimeOptions$)),l.Eb(7),l.oc("formControl",t.userName)("shape",t.theme.componentShape)("fieldSize",t.theme.componentSize)("status",l.kc(91,94,t.userName))("placeholder",l.kc(92,96,t.translate.get("postCucu.userName.PLACEHOLDER"))),l.Eb(5),l.oc("size",t.theme.componentSize),l.Eb(3),l.Dc(t.avatarUploadLabel),l.Eb(1),l.oc("accept","image/x-png, image/jpeg"),l.Eb(5),l.oc("shape","rectangle")("size","medium"),l.Eb(1),l.Ec(" ",l.kc(106,98,"postCucu.post.LABEL")," ")}},directives:[k.h,k.g,o.l,r.n,r.i,r.d,k.s,k.u,k.H,k.x,r.a,r.h,r.c,k.O,k.Q,k.b,k.a,k.o,k.n,k.d,k.G],pipes:[b.c,o.b,_],styles:[".call-providers-info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:7rem}.call-providers-info-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.no-padding[_ngcontent-%COMP%]{padding:0 5px}.video-call-services[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;height:20px;margin:0 10px}.type-col[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{text-align:right;padding-right:2px}.type-col[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{text-align:center}.type-col[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{text-align:left;padding-left:2px}.type-col[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{padding:0}.type-col[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:.7rem;line-height:unset}.avatar-upload-p[_ngcontent-%COMP%]{font-size:12px!important;margin-top:5px}"]}),T),M=n("6NWb"),L=["cucus"];function I(e,t){1&e&&(l.Wb(0,"h1"),l.Cc(1),l.jc(2,"translate"),l.Vb()),2&e&&(l.Eb(1),l.Dc(l.kc(2,1,"home.CUCUS_TITLE")))}function z(e,t){if(1&e&&(l.Wb(0,"div",31),l.Rb(1,"app-cucu-box",32),l.Vb()),2&e){var n=t.$implicit;l.Eb(1),l.oc("cucu",n)("id",n._id)}}function U(e,t){1&e&&(l.Wb(0,"div",33),l.Rb(1,"div",22),l.Wb(2,"div",34),l.Wb(3,"p"),l.Cc(4),l.jc(5,"translate"),l.Vb(),l.Vb(),l.Vb()),2&e&&(l.Eb(4),l.Dc(l.kc(5,1,"home.NO_CUCUS_FOUND")))}function A(e,t){if(1&e&&(l.Wb(0,"div",31),l.Rb(1,"app-cucu-box",35),l.Vb()),2&e){var n=t.$implicit;l.Eb(1),l.oc("cucu",n)("isPast",!0)}}function F(e,t){if(1&e&&(l.Wb(0,"div",4),l.Ac(1,A,2,2,"div",26),l.Vb()),2&e){var n=t.ngIf,i=l.ic(2);l.Eb(1),l.oc("ngForOf",n)("ngForTrackBy",i.trackByFn)}}function D(e,t){if(1&e){var n=l.Xb();l.Wb(0,"button",36),l.ec("click",(function(){return l.uc(n),l.ic(2).loadMore()})),l.Cc(1),l.jc(2,"translate"),l.Vb()}2&e&&(l.oc("shape","rectangle")("size","medium"),l.Eb(1),l.Ec(" ",l.kc(2,3,"home.LOAD_MORE")," "))}function N(e,t){if(1&e&&(l.Ub(0),l.Wb(1,"div",24),l.Ac(2,I,3,3,"h1",23),l.Wb(3,"div",25),l.Ac(4,z,2,2,"div",26),l.Ac(5,U,6,3,"div",27),l.Vb(),l.Rb(6,"div",22),l.Ac(7,F,2,2,"div",28),l.jc(8,"async"),l.Rb(9,"div",22),l.Wb(10,"div",4),l.Wb(11,"div",29),l.Ac(12,D,3,5,"button",30),l.Vb(),l.Vb(),l.Vb(),l.Tb()),2&e){var n=t.ngIf,i=l.ic();l.Eb(2),l.oc("ngIf",n.length>0),l.Eb(2),l.oc("ngForOf",n)("ngForTrackBy",i.trackByFn),l.Eb(1),l.oc("ngIf",n.length<1),l.Eb(2),l.oc("ngIf",l.kc(8,6,i.dbService.pastCucus)),l.Eb(5),l.oc("ngIf",i.doWeHaveMore)}}var H,B=((H=function(){function e(t,n,i,c,o,r){_classCallCheck(this,e),this.translate=t,this.router=n,this.location=i,this.dbService=c,this.gaService=o,this.route=r,this.doWeHaveMore=!1,this.faInstagram=u,this.justNavigatedToCucus=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.gaService.pageView("","Home")}},{key:"ngAfterViewInit",value:function(){var e=this;this.route.fragment.subscribe((function(t){"cucus"===t&&setTimeout((function(){e.scrollToElement(e.cucusElement.nativeElement),setTimeout((function(){e.justNavigatedToCucus=!0}),700)}),1)}))}},{key:"scrollHandler",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.justNavigatedToCucus&&(this.location.replaceState(""),this.justNavigatedToCucus=!1);case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadMore",value:function(){}},{key:"trackByFn",value:function(e,t){return t._id}},{key:"scrollToElement",value:function(e){e.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}]),e}()).\u0275fac=function(e){return new(e||H)(l.Qb(b.d),l.Qb(a.c),l.Qb(o.i),l.Qb(p.a),l.Qb(d.a),l.Qb(a.a))},H.\u0275cmp=l.Kb({type:H,selectors:[["app-home"]],viewQuery:function(e,t){var n;1&e&&l.Gc(L,!0),2&e&&l.rc(n=l.fc())&&(t.cucusElement=n.first)},hostBindings:function(e,t){1&e&&l.ec("scroll",(function(e){return t.scrollHandler(e)}),!1,l.tc)},decls:46,vars:19,consts:[[1,"container-fluid"],[1,"row","hero-row"],[1,"col-lg-5","col-md-7","content-padding"],["accent","primary",1,"info-card"],[1,"row"],[1,"col","center-h"],[3,"innerHTML"],[3,"click"],[1,"credit-badge"],["href","https://unsplash.com/@nineteen?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge","target","_blank","rel","noopener noreferrer","title","Download free do whatever you want high-resolution photos from Andrew Ly"],[2,"display","inline-block","padding","2px 3px"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 32 32",2,"height","12px","width","auto","position","relative","vertical-align","middle","top","-2px","fill","white"],["d","M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"],[1,"row","about-section"],[1,"anker"],["about",""],[1,"col","content-padding"],[1,"col"],[1,"about-instagram"],["href","https://www.instagram.com/cucu_it/","target","_blank"],[3,"icon"],["cucus",""],[1,"ws-s"],[4,"ngIf"],[1,"cucus-section","content-padding"],[1,"row","upcoming-cucus"],["class","col-lg-4 col-md-6",4,"ngFor","ngForOf","ngForTrackBy"],["class","col-12",4,"ngIf"],["class","row",4,"ngIf"],[1,"col","load-more-div"],["nbButton","","status","primary",3,"shape","size","click",4,"ngIf"],[1,"col-lg-4","col-md-6"],[3,"cucu","id"],[1,"col-12"],[1,"no-cucus-div"],[3,"cucu","isPast"],["nbButton","","status","primary",3,"shape","size","click"]],template:function(e,t){if(1&e){var n=l.Xb();l.Wb(0,"div",0),l.Wb(1,"div",1),l.Wb(2,"div",2),l.Rb(3,"app-add-cucu"),l.Wb(4,"nb-card",3),l.Wb(5,"nb-card-body"),l.Wb(6,"div",4),l.Wb(7,"div",5),l.Rb(8,"p",6),l.jc(9,"async"),l.Wb(10,"a",7),l.ec("click",(function(){l.uc(n);var e=l.sc(24);return t.scrollToElement(e)})),l.Cc(11),l.jc(12,"translate"),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Wb(13,"div",8),l.Wb(14,"a",9),l.Wb(15,"span",10),l.hc(),l.Wb(16,"svg",11),l.Wb(17,"title"),l.Cc(18,"unsplash-logo"),l.Vb(),l.Rb(19,"path",12),l.Vb(),l.Vb(),l.gc(),l.Wb(20,"span",10),l.Cc(21,"Andrew Ly"),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Wb(22,"div",13),l.Rb(23,"span",14,15),l.Wb(25,"div",16),l.Wb(26,"div",4),l.Wb(27,"div",17),l.Wb(28,"h1"),l.Cc(29),l.jc(30,"translate"),l.Vb(),l.Rb(31,"p",6),l.jc(32,"async"),l.Vb(),l.Vb(),l.Wb(33,"div",4),l.Wb(34,"div",17),l.Wb(35,"div",18),l.Wb(36,"a",19),l.Rb(37,"fa-icon",20),l.Vb(),l.Wb(38,"p"),l.Cc(39),l.jc(40,"translate"),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Rb(41,"span",14,21),l.Rb(43,"div",22),l.Ac(44,N,13,8,"ng-container",23),l.jc(45,"async"),l.Vb()}2&e&&(l.Eb(8),l.oc("innerHTML",l.kc(9,7,t.translate.get("home.INFO_BOX_TEXT")),l.vc),l.Eb(3),l.Dc(l.kc(12,9,"home.MORE_INFO")),l.Eb(18),l.Dc(l.kc(30,11,"aboutSection.TITLE")),l.Eb(2),l.oc("innerHTML",l.kc(32,13,t.translate.get("aboutSection.TEXT")),l.vc),l.Eb(6),l.oc("icon",t.faInstagram),l.Eb(2),l.Dc(l.kc(40,15,"aboutSection.FOLLOW_US_ON_INSTAGRAM")),l.Eb(5),l.oc("ngIf",l.kc(45,17,t.dbService.cucus)))},directives:[j,k.h,k.g,M.a,o.m,o.l,E.a,k.d],pipes:[o.b,b.c],styles:[".hero-row[_ngcontent-%COMP%]{background-image:url(hero-bg.7ea9593a9a1a614a7166.jpg);background-repeat:no-repeat;background-size:cover;min-height:100vh;position:relative}@media (max-width:991px){.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:35px}}@media (max-width:768px){.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px}}.anker[_ngcontent-%COMP%]{height:1px;width:100%;margin-top:-65px}.about-section[_ngcontent-%COMP%]{background-color:#f5f5f5}.about-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin-bottom:20px}.about-section[_ngcontent-%COMP%]   .about-instagram[_ngcontent-%COMP%]{margin-top:1.5rem;text-align:center}.about-section[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:50px}.cucus-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0}.upcoming-cucus[_ngcontent-%COMP%]   app-cucu-box[_ngcontent-%COMP%]{cursor:pointer}.load-more-div[_ngcontent-%COMP%], .no-cucus-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}.credit-badge[_ngcontent-%COMP%]{position:absolute;bottom:10px;right:10px}.credit-badge[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#000;color:#fff;text-decoration:none;padding:4px 6px;font-family:-apple-system,San Francisco,Helvetica Neue,Helvetica,Ubuntu,Roboto,Noto,Segoe UI,Arial,sans-serif;font-size:12px;font-weight:700;line-height:1.2;display:inline-block;border-radius:3px}"]}),H),Q=n("yXpV"),q=n("NICT");n.d(t,"HomeModule",(function(){return $}));var X,G=[{path:"",component:B}],$=((X=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ob({type:X}),X.\u0275inj=l.Nb({factory:function(e){return new(e||X)},imports:[[o.c,r.e,b.b,a.g.forChild(G),k.U.forChild(),Q.a,q.a,k.e,k.k,M.b]]}),X)}}]);