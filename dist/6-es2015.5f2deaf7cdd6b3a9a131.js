(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7vJP":function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),o=n("3Pt+"),c=n("tyNb"),a=n("mrSG"),r={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},s=n("fXoL"),l=n("sYmb"),b=n("qFVP"),u=n("Wdmj"),d=n("LRne"),p=n("lJxs"),g=n("Y9tF"),m=n("+EEi");const h=t=>!t||!t.value||t.value.includes("hangouts.google.com")||t.value.includes("join.skype.com")||t.value.includes("meet.jit.si")||t.value.includes("zoom.us")?null:{validInviteUrl:!1};var f=n("a7lh"),v=n("aceb"),C=n("snr1"),E=n("TpHk");let W=(()=>{class t{constructor(t,e,n){this.theme=t,this.dbService=e,this.dialogService=n}ngOnInit(){}deleteCucu(){this.dbService.deleteCucu(this.cucu._id).subscribe(t=>{t&&t._id&&this.closeEvent.next(!0)})}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(f.a),s.Qb(b.a),s.Qb(v.r))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-post-success"]],decls:20,vars:12,consts:[["accent","success",1,"dialog-card",3,"size"],[1,"container-fluid"],[1,"row"],[1,"col","col-md-12"],[1,"form-group"],["nbPrefix","","icon","link-outline","pack","eva"],["type","text","nbInput","","fullWidth","",3,"value","shape"],[1,"ws-s"],[3,"cucu"],["nbButton","","status","danger","fullWidth","",3,"click"],["icon","trash"]],template:function(t,e){1&t&&(s.Wb(0,"nb-card",0),s.Wb(1,"nb-card-body"),s.Wb(2,"div",1),s.Wb(3,"h1"),s.Cc(4),s.jc(5,"translate"),s.Vb(),s.Wb(6,"div",2),s.Wb(7,"div",3),s.Wb(8,"div",4),s.Wb(9,"nb-form-field"),s.Rb(10,"nb-icon",5),s.Rb(11,"input",6),s.jc(12,"getCucuUrl"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Rb(13,"div",7),s.Rb(14,"app-cucu-box",8),s.Vb(),s.Vb(),s.Wb(15,"nb-card-footer"),s.Wb(16,"button",9),s.ec("click",(function(){return e.deleteCucu()})),s.Rb(17,"nb-icon",10),s.Cc(18),s.jc(19,"translate"),s.Vb(),s.Vb(),s.Vb()),2&t&&(s.oc("size","large"),s.Eb(4),s.Dc(s.kc(5,6,"postCucu.CUCU_POSTED")),s.Eb(7),s.oc("value",s.kc(12,8,e.cucu._id))("shape",e.theme.componentShape),s.Eb(3),s.oc("cucu",e.cucu),s.Eb(4),s.Ec(" ",s.kc(19,10,"DELETE")," CUCU "))},directives:[v.h,v.g,v.s,v.u,v.H,v.x,C.a,v.i,v.d],pipes:[l.c,E.a],styles:[""],changeDetection:0}),t})();var V=n("AytR"),O=n("yvwT");let k=(()=>{class t{transform(t){return t.valid||!t.dirty?"basic":"danger"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=s.Pb({name:"elementStatus",type:t,pure:!0}),t})();const S=["inviteUrlInputElement"],_=["timeInputElement"];function y(t,e){if(1&t&&(s.Wb(0,"a",43),s.Rb(1,"img",44),s.Vb()),2&t){const t=e.$implicit;s.oc("href",t.url,s.wc),s.Eb(1),s.oc("src",t.imageUrl,s.wc)("nbTooltip",t.tooltip)("alt",t.name+" logo")}}function w(t,e){if(1&t&&(s.Wb(0,"nb-option",45),s.Cc(1),s.Vb()),2&t){const t=e.$implicit;s.oc("value",t),s.Eb(1),s.Ec(" ",t," ")}}function P(t,e){if(1&t&&(s.Wb(0,"nb-option",45),s.Cc(1),s.Vb()),2&t){const t=e.$implicit;s.oc("value",t),s.Eb(1),s.Ec(" ",t," ")}}let x=(()=>{class t{constructor(t,e,n,i,o,c,a,r){this.formBuilder=t,this.theme=e,this.translate=n,this.dbService=i,this.callProvidersService=o,this.dialogService=c,this.toastrService=a,this.gaService=r,this.timeSlots=[],this.languages=Object(m.a)().map(t=>t.name),this.avatarUploadLabel=""}ngOnInit(){return Object(a.a)(this,void 0,void 0,(function*(){this.initForm()}))}postCucu(){if(this.form.valid){const t=this.form.getRawValue(),e=t.date,n=t.time.split(":")[0],i=t.time.split(":")[1];e.setHours(n),e.setMinutes(i),e.setSeconds(0),this.avatarId||(this.avatarId=""),this.dbService.createCucu({inviteUrl:t.inviteUrl,topic:t.topic,description:t.description,type:t.isConference?"conference":"chitchat",startDate:e,userName:t.userName,avatarId:this.avatarId,language:t.language}).subscribe(t=>Object(a.a)(this,void 0,void 0,(function*(){if(t.topic){this.avatarUploadLabel="",this.initForm(),this.gaService.event("post_success","post_cucu");const e=new s.o,n=this.dialogService.open(W,{context:{cucu:t,closeEvent:e}});e.subscribe(t=>n.close()),n.onClose.subscribe(()=>{this.inviteUrlInputElement.nativeElement.focus()})}else console.error(t);this.inviteUrlInputElement.nativeElement.focus()})),t=>Object(a.a)(this,void 0,void 0,(function*(){console.error(t),yield this.showCucuPostError(),this.gaService.event("post_failed","post_cucu")})))}else console.error("Form invalid"),console.log(this.form.getRawValue())}onAvatarFileChanged(t){this.avatarUploadLabel="";const e=t.target.files[0];e&&e.name&&(this.avatarUploadLabel=e.name,this.dbService.uploadAvatar(e).subscribe(t=>Object(a.a)(this,void 0,void 0,(function*(){t.id&&(this.avatarId=t.id,this.gaService.event("image_upload_success","post_cucu"))})),t=>Object(a.a)(this,void 0,void 0,(function*(){413===t.status?(this.avatarUploadLabel=yield this.translate.get("postCucu.errors.fileTooLarge.TITLE").toPromise(),this.toastrService.show(yield this.translate.get("postCucu.errors.fileTooLarge.TEXT").toPromise(),yield this.translate.get("postCucu.CUCU_ERROR").toPromise(),{status:"warning"}),this.gaService.event("image_too_large","post_cucu")):(this.avatarUploadLabel=yield this.translate.get("postCucu.errors.unknown.TITLE").toPromise(),this.toastrService.show(yield this.translate.get("postCucu.errors.unknown.TEXT").toPromise(),yield this.translate.get("postCucu.CUCU_ERROR").toPromise(),{status:"warning"}),this.gaService.event("image_upload_failed","post_cucu"))}))))}initForm(){const t=new Date,e=new Date(t.setDate(t.getDate()+1)),n=(new Date).getHours(),i=n>18?e:new Date,c=n>18||n<8?"10:00":`${n+2}:00`,a=Object(m.b)(this.translate.currentLang);this.timeSlots=Object(g.a)(i),this.form=this.formBuilder.group(V.a.production?{inviteUrl:["",[o.m.required,h]],topic:["",o.m.required],description:["",o.m.maxLength(450)],isConference:[!1,o.m.required],userName:["",o.m.required],language:[a,o.m.required],date:[i,o.m.required],time:[c,[o.m.required,o.m.pattern("[0-9]?[0-9]:[0-9][0-9]")]]}:{inviteUrl:["https://hangouts.google.com/call/3wTZG0Tv8yykGbUGSfj2AEEI",[o.m.required,h]],topic:["Sports",o.m.required],description:["Morning routine",o.m.required],isConference:[!1,o.m.required],userName:["Matthias",o.m.required],language:[a,o.m.required],date:[i,o.m.required],time:[c,[o.m.required,o.m.pattern("[0-9]?[0-9]:[0-9][0-9]")]]}),this.filteredTimeOptions$=Object(d.a)(this.timeSlots),this.filteredTimeOptions$=this.time.valueChanges.pipe(Object(p.a)(t=>this.filterTimeslots(t))),this.filteredLanguageOptions$=Object(d.a)(this.languages),this.filteredLanguageOptions$=this.language.valueChanges.pipe(Object(p.a)(t=>this.filterLanguages(t))),this.date.valueChanges.subscribe(t=>{this.timeSlots=Object(g.a)(t),Object(g.b)(t)?this.time.setValue(`${n+2}:00`):this.time.setValue("10:00")}),setTimeout(()=>{this.inviteUrlInputElement.nativeElement.focus()},1)}filterTimeslots(t){if(t){const e=t.toLowerCase();return this.timeSlots.filter(t=>t.toLowerCase().includes(e))}}filterLanguages(t){if(t){const e=t.toLowerCase();return this.languages.filter(t=>t.toLowerCase().includes(e))}}showCucuPostError(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.translate.get("ERROR").toPromise(),e=yield this.translate.get("postCucu.CUCU_ERROR").toPromise();this.toastrService.show(e,t,{status:"danger"})}))}get inviteUrl(){return this.form.get("inviteUrl")}get topic(){return this.form.get("topic")}get description(){return this.form.get("description")}get isConference(){return this.form.get("isConference")}get userName(){return this.form.get("userName")}get language(){return this.form.get("language")}get date(){return this.form.get("date")}get time(){return this.form.get("time")}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(o.b),s.Qb(f.a),s.Qb(l.d),s.Qb(b.a),s.Qb(O.a),s.Qb(v.r),s.Qb(v.N),s.Qb(u.a))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-add-cucu"]],viewQuery:function(t,e){var n;1&t&&(s.Gc(S,!0),s.Gc(_,!0)),2&t&&(s.rc(n=s.fc())&&(e.inviteUrlInputElement=n.first),s.rc(n=s.fc())&&(e.timeInputElement=n.first))},decls:107,vars:100,consts:[["accent","primary"],[1,"example-items-col"],[1,"container-fluid"],[1,"video-call-services"],[1,"row"],["target","_blank",3,"href",4,"ngFor","ngForOf"],[1,"ws-s"],[3,"formGroup"],[1,"col","no-padding"],[1,"form-group"],["nbPrefix","","icon","link-outline","pack","eva"],["type","text","nbInput","","fullWidth","",3,"formControl","shape","fieldSize","placeholder","status"],["inviteUrlInputElement",""],[1,"col","grow","no-padding"],["nbPrefix","","icon","heart-outline","pack","eva"],["type","text","nbInput","","fullWidth","","id","topic",3,"formControl","shape","fieldSize","placeholder","status"],[1,"col","shrink","no-padding","type-col"],[1,"col","left"],[1,"text"],[1,"col","center"],["status","primary",3,"formControl","nbTooltip","nbTooltipStatus"],[1,"col","right"],[1,"col","col-auto","no-padding"],[1,"avatar-upload-p"],[1,"col-md-4","col-sm-4","col-xs-12","no-padding"],["nbPrefix","","icon","globe-outline","pack","eva"],["fullWidth","","nbInput","","type","text",3,"formControl","placeholder","shape","fieldSize","status","nbAutocomplete"],["languageAutocomplete",""],[3,"value",4,"ngFor","ngForOf"],["nbPrefix","","icon","calendar-outline","pack","eva"],["fullWidth","","nbInput","",3,"nbDatepicker","formControl","shape","fieldSize"],["datepicker",""],["nbPrefix","","icon","clock-outline","pack","eva"],["fullWidth","","nbInput","","type","text",3,"formControl","placeholder","status","shape","fieldSize","nbAutocomplete"],["timeAutocomplete",""],["nbPrefix","","icon","person-outline","pack","eva"],["type","text","nbInput","","fullWidth","",3,"formControl","shape","fieldSize","status","placeholder"],[1,"col","shrink","no-padding"],["nbButton","","ghost","",3,"size","click"],["icon","camera-outline"],["type","file",2,"display","none",3,"accept","change"],["avatarInput",""],["nbButton","","hero","","status","primary","fullWidth","",3,"shape","size","click"],["target","_blank",3,"href"],[3,"src","nbTooltip","alt"],[3,"value"]],template:function(t,e){if(1&t){const t=s.Xb();s.Wb(0,"nb-card",0),s.Wb(1,"nb-card-body",1),s.Wb(2,"div",2),s.Wb(3,"h1"),s.Cc(4),s.jc(5,"translate"),s.Vb(),s.Wb(6,"div",3),s.Wb(7,"p"),s.Cc(8),s.jc(9,"translate"),s.Vb(),s.Wb(10,"div",4),s.Ac(11,y,2,4,"a",5),s.jc(12,"async"),s.Vb(),s.Vb(),s.Rb(13,"div",6),s.Wb(14,"form",7),s.Wb(15,"div",4),s.Wb(16,"div",8),s.Wb(17,"div",9),s.Wb(18,"nb-form-field"),s.Rb(19,"nb-icon",10),s.Rb(20,"input",11,12),s.jc(22,"async"),s.jc(23,"elementStatus"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(24,"div",4),s.Wb(25,"div",13),s.Wb(26,"div",9),s.Wb(27,"nb-form-field"),s.Rb(28,"nb-icon",14),s.Rb(29,"input",15),s.jc(30,"async"),s.jc(31,"elementStatus"),s.Vb(),s.Vb(),s.Vb(),s.Wb(32,"div",16),s.Wb(33,"div",4),s.Wb(34,"div",17),s.Wb(35,"span",18),s.Cc(36),s.jc(37,"translate"),s.Vb(),s.Vb(),s.Wb(38,"div",19),s.Rb(39,"nb-toggle",20),s.jc(40,"async"),s.Vb(),s.Wb(41,"div",21),s.Wb(42,"span",18),s.Cc(43),s.jc(44,"translate"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(45,"div",4),s.Wb(46,"div",8),s.Wb(47,"div",9),s.Wb(48,"nb-form-field"),s.Rb(49,"input",11),s.jc(50,"async"),s.jc(51,"elementStatus"),s.Vb(),s.Vb(),s.Vb(),s.Wb(52,"div",22),s.Wb(53,"p",23),s.Cc(54),s.Vb(),s.Vb(),s.Vb(),s.Wb(55,"div",4),s.Wb(56,"div",24),s.Wb(57,"div",9),s.Wb(58,"nb-form-field"),s.Rb(59,"nb-icon",25),s.Rb(60,"input",26),s.jc(61,"async"),s.jc(62,"elementStatus"),s.Wb(63,"nb-autocomplete",null,27),s.Ac(65,w,2,2,"nb-option",28),s.jc(66,"async"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(67,"div",24),s.Wb(68,"div",9),s.Wb(69,"nb-form-field"),s.Rb(70,"nb-icon",29),s.Rb(71,"input",30),s.Rb(72,"nb-datepicker",null,31),s.Vb(),s.Vb(),s.Vb(),s.Wb(74,"div",24),s.Wb(75,"div",9),s.Wb(76,"nb-form-field"),s.Rb(77,"nb-icon",32),s.Rb(78,"input",33),s.jc(79,"async"),s.jc(80,"elementStatus"),s.Wb(81,"nb-autocomplete",null,34),s.Ac(83,P,2,2,"nb-option",28),s.jc(84,"async"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(85,"div",4),s.Wb(86,"div",13),s.Wb(87,"div",9),s.Wb(88,"nb-form-field"),s.Rb(89,"nb-icon",35),s.Rb(90,"input",36),s.jc(91,"elementStatus"),s.jc(92,"async"),s.Vb(),s.Vb(),s.Vb(),s.Wb(93,"div",37),s.Wb(94,"div",9),s.Wb(95,"button",38),s.ec("click",(function(){return s.uc(t),s.sc(100).click()})),s.Rb(96,"nb-icon",39),s.Vb(),s.Wb(97,"p",23),s.Cc(98),s.Vb(),s.Wb(99,"input",40,41),s.ec("change",(function(t){return e.onAvatarFileChanged(t)})),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(101,"div",4),s.Wb(102,"div",8),s.Wb(103,"div",9),s.Wb(104,"button",42),s.ec("click",(function(){return e.postCucu()})),s.Cc(105),s.jc(106,"translate"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb()}if(2&t){const t=s.sc(64),n=s.sc(73),i=s.sc(82);s.Eb(4),s.Dc(s.kc(5,58,"postCucu.TITLE")),s.Eb(4),s.Ec("",s.kc(9,60,"postCucu.PLATFORMS_TEXT"),":"),s.Eb(3),s.oc("ngForOf",s.kc(12,62,e.callProvidersService.callProviders)),s.Eb(3),s.oc("formGroup",e.form),s.Eb(6),s.oc("formControl",e.inviteUrl)("shape",e.theme.componentShape)("fieldSize",e.theme.componentSize)("placeholder",s.kc(22,64,e.translate.get("postCucu.inviteUrl.PLACEHOLDER")))("status",s.kc(23,66,e.inviteUrl)),s.Eb(9),s.oc("formControl",e.topic)("shape",e.theme.componentShape)("fieldSize",e.theme.componentSize)("placeholder",s.kc(30,68,e.translate.get("postCucu.topic.PLACEHOLDER")))("status",s.kc(31,70,e.topic)),s.Eb(6),s.zc("font-weight",e.isConference.value?400:600),s.Eb(1),s.Ec(" ",s.kc(37,72,"cucuBox.CHITCHAT")," "),s.Eb(3),s.oc("formControl",e.isConference)("nbTooltip",s.kc(40,74,e.translate.get("postCucu.type.TOOLTIP")))("nbTooltipStatus","basic"),s.Eb(3),s.zc("font-weight",e.isConference.value?600:400),s.Eb(1),s.Ec(" ",s.kc(44,76,"cucuBox.FRONTAL_LESSON")," "),s.Eb(6),s.oc("formControl",e.description)("shape",e.theme.componentShape)("fieldSize",e.theme.componentSize)("placeholder",s.kc(50,78,e.translate.get("postCucu.description.PLACEHOLDER")))("status",s.kc(51,80,e.description)),s.Eb(5),s.Ec("",e.description.value.length,"/450"),s.Eb(6),s.oc("formControl",e.language)("placeholder",s.kc(61,82,e.translate.get("postCucu.language.PLACEHOLDER")))("shape",e.theme.componentShape)("fieldSize",e.theme.componentSize)("status",s.kc(62,84,e.language))("nbAutocomplete",t),s.Eb(5),s.oc("ngForOf",s.kc(66,86,e.filteredLanguageOptions$)),s.Eb(6),s.oc("nbDatepicker",n)("formControl",e.date)("shape",e.theme.componentShape)("fieldSize",e.theme.componentSize),s.Eb(7),s.oc("formControl",e.time)("placeholder",s.kc(79,88,e.translate.get("postCucu.time.PLACEHOLDER")))("status",s.kc(80,90,e.time))("shape",e.theme.componentShape)("fieldSize",e.theme.componentSize)("nbAutocomplete",i),s.Eb(5),s.oc("ngForOf",s.kc(84,92,e.filteredTimeOptions$)),s.Eb(7),s.oc("formControl",e.userName)("shape",e.theme.componentShape)("fieldSize",e.theme.componentSize)("status",s.kc(91,94,e.userName))("placeholder",s.kc(92,96,e.translate.get("postCucu.userName.PLACEHOLDER"))),s.Eb(5),s.oc("size",e.theme.componentSize),s.Eb(3),s.Dc(e.avatarUploadLabel),s.Eb(1),s.oc("accept","image/x-png, image/jpeg"),s.Eb(5),s.oc("shape","rectangle")("size","medium"),s.Eb(1),s.Ec(" ",s.kc(106,98,"postCucu.post.LABEL")," ")}},directives:[v.h,v.g,i.l,o.n,o.i,o.d,v.s,v.u,v.H,v.x,o.a,o.h,o.c,v.O,v.Q,v.b,v.a,v.o,v.n,v.d,v.G],pipes:[l.c,i.b,k],styles:[".call-providers-info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:7rem}.call-providers-info-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.no-padding[_ngcontent-%COMP%]{padding:0 5px}.video-call-services[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;height:20px;margin:0 10px}.type-col[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{text-align:right;padding-right:2px}.type-col[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{text-align:center}.type-col[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{text-align:left;padding-left:2px}.type-col[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{padding:0}.type-col[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:.7rem;line-height:unset}.avatar-upload-p[_ngcontent-%COMP%]{font-size:12px!important;margin-top:5px}"]}),t})();var R=n("6NWb");const T=["cucus"];function j(t,e){1&t&&(s.Wb(0,"h1"),s.Cc(1),s.jc(2,"translate"),s.Vb()),2&t&&(s.Eb(1),s.Dc(s.kc(2,1,"home.CUCUS_TITLE")))}function M(t,e){if(1&t&&(s.Wb(0,"div",31),s.Rb(1,"app-cucu-box",32),s.Vb()),2&t){const t=e.$implicit;s.Eb(1),s.oc("cucu",t)("id",t._id)}}function L(t,e){1&t&&(s.Wb(0,"div",33),s.Rb(1,"div",22),s.Wb(2,"div",34),s.Wb(3,"p"),s.Cc(4),s.jc(5,"translate"),s.Vb(),s.Vb(),s.Vb()),2&t&&(s.Eb(4),s.Dc(s.kc(5,1,"home.NO_CUCUS_FOUND")))}function I(t,e){if(1&t&&(s.Wb(0,"div",31),s.Rb(1,"app-cucu-box",35),s.Vb()),2&t){const t=e.$implicit;s.Eb(1),s.oc("cucu",t)("isPast",!0)}}function z(t,e){if(1&t&&(s.Wb(0,"div",4),s.Ac(1,I,2,2,"div",26),s.Vb()),2&t){const t=e.ngIf,n=s.ic(2);s.Eb(1),s.oc("ngForOf",t)("ngForTrackBy",n.trackByFn)}}function U(t,e){if(1&t){const t=s.Xb();s.Wb(0,"button",36),s.ec("click",(function(){return s.uc(t),s.ic(2).loadMore()})),s.Cc(1),s.jc(2,"translate"),s.Vb()}2&t&&(s.oc("shape","rectangle")("size","medium"),s.Eb(1),s.Ec(" ",s.kc(2,3,"home.LOAD_MORE")," "))}function A(t,e){if(1&t&&(s.Ub(0),s.Wb(1,"div",24),s.Ac(2,j,3,3,"h1",23),s.Wb(3,"div",25),s.Ac(4,M,2,2,"div",26),s.Ac(5,L,6,3,"div",27),s.Vb(),s.Rb(6,"div",22),s.Ac(7,z,2,2,"div",28),s.jc(8,"async"),s.Rb(9,"div",22),s.Wb(10,"div",4),s.Wb(11,"div",29),s.Ac(12,U,3,5,"button",30),s.Vb(),s.Vb(),s.Vb(),s.Tb()),2&t){const t=e.ngIf,n=s.ic();s.Eb(2),s.oc("ngIf",t.length>0),s.Eb(2),s.oc("ngForOf",t)("ngForTrackBy",n.trackByFn),s.Eb(1),s.oc("ngIf",t.length<1),s.Eb(2),s.oc("ngIf",s.kc(8,6,n.dbService.pastCucus)),s.Eb(5),s.oc("ngIf",n.doWeHaveMore)}}let F=(()=>{class t{constructor(t,e,n,i,o,c){this.translate=t,this.router=e,this.location=n,this.dbService=i,this.gaService=o,this.route=c,this.doWeHaveMore=!1,this.faInstagram=r,this.justNavigatedToCucus=!1}ngOnInit(){this.gaService.pageView("","Home")}ngAfterViewInit(){this.route.fragment.subscribe(t=>{"cucus"===t&&setTimeout(()=>{this.scrollToElement(this.cucusElement.nativeElement),setTimeout(()=>{this.justNavigatedToCucus=!0},700)},1)})}scrollHandler(){return Object(a.a)(this,void 0,void 0,(function*(){this.justNavigatedToCucus&&(this.location.replaceState(""),this.justNavigatedToCucus=!1)}))}loadMore(){}trackByFn(t,e){return e._id}scrollToElement(t){t.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(l.d),s.Qb(c.c),s.Qb(i.i),s.Qb(b.a),s.Qb(u.a),s.Qb(c.a))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-home"]],viewQuery:function(t,e){var n;1&t&&s.Gc(T,!0),2&t&&s.rc(n=s.fc())&&(e.cucusElement=n.first)},hostBindings:function(t,e){1&t&&s.ec("scroll",(function(t){return e.scrollHandler(t)}),!1,s.tc)},decls:46,vars:19,consts:[[1,"container-fluid"],[1,"row","hero-row"],[1,"col-lg-5","col-md-7","content-padding"],["accent","primary",1,"info-card"],[1,"row"],[1,"col","center-h"],[3,"innerHTML"],[3,"click"],[1,"credit-badge"],["href","https://unsplash.com/@nineteen?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge","target","_blank","rel","noopener noreferrer","title","Download free do whatever you want high-resolution photos from Andrew Ly"],[2,"display","inline-block","padding","2px 3px"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 32 32",2,"height","12px","width","auto","position","relative","vertical-align","middle","top","-2px","fill","white"],["d","M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"],[1,"row","about-section"],[1,"anker"],["about",""],[1,"col","content-padding"],[1,"col"],[1,"about-instagram"],["href","https://www.instagram.com/cucu_it/","target","_blank"],[3,"icon"],["cucus",""],[1,"ws-s"],[4,"ngIf"],[1,"cucus-section","content-padding"],[1,"row","upcoming-cucus"],["class","col-lg-4 col-md-6",4,"ngFor","ngForOf","ngForTrackBy"],["class","col-12",4,"ngIf"],["class","row",4,"ngIf"],[1,"col","load-more-div"],["nbButton","","status","primary",3,"shape","size","click",4,"ngIf"],[1,"col-lg-4","col-md-6"],[3,"cucu","id"],[1,"col-12"],[1,"no-cucus-div"],[3,"cucu","isPast"],["nbButton","","status","primary",3,"shape","size","click"]],template:function(t,e){if(1&t){const t=s.Xb();s.Wb(0,"div",0),s.Wb(1,"div",1),s.Wb(2,"div",2),s.Rb(3,"app-add-cucu"),s.Wb(4,"nb-card",3),s.Wb(5,"nb-card-body"),s.Wb(6,"div",4),s.Wb(7,"div",5),s.Rb(8,"p",6),s.jc(9,"async"),s.Wb(10,"a",7),s.ec("click",(function(){s.uc(t);const n=s.sc(24);return e.scrollToElement(n)})),s.Cc(11),s.jc(12,"translate"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(13,"div",8),s.Wb(14,"a",9),s.Wb(15,"span",10),s.hc(),s.Wb(16,"svg",11),s.Wb(17,"title"),s.Cc(18,"unsplash-logo"),s.Vb(),s.Rb(19,"path",12),s.Vb(),s.Vb(),s.gc(),s.Wb(20,"span",10),s.Cc(21,"Andrew Ly"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(22,"div",13),s.Rb(23,"span",14,15),s.Wb(25,"div",16),s.Wb(26,"div",4),s.Wb(27,"div",17),s.Wb(28,"h1"),s.Cc(29),s.jc(30,"translate"),s.Vb(),s.Rb(31,"p",6),s.jc(32,"async"),s.Vb(),s.Vb(),s.Wb(33,"div",4),s.Wb(34,"div",17),s.Wb(35,"div",18),s.Wb(36,"a",19),s.Rb(37,"fa-icon",20),s.Vb(),s.Wb(38,"p"),s.Cc(39),s.jc(40,"translate"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Rb(41,"span",14,21),s.Rb(43,"div",22),s.Ac(44,A,13,8,"ng-container",23),s.jc(45,"async"),s.Vb()}2&t&&(s.Eb(8),s.oc("innerHTML",s.kc(9,7,e.translate.get("home.INFO_BOX_TEXT")),s.vc),s.Eb(3),s.Dc(s.kc(12,9,"home.MORE_INFO")),s.Eb(18),s.Dc(s.kc(30,11,"aboutSection.TITLE")),s.Eb(2),s.oc("innerHTML",s.kc(32,13,e.translate.get("aboutSection.TEXT")),s.vc),s.Eb(6),s.oc("icon",e.faInstagram),s.Eb(2),s.Dc(s.kc(40,15,"aboutSection.FOLLOW_US_ON_INSTAGRAM")),s.Eb(5),s.oc("ngIf",s.kc(45,17,e.dbService.cucus)))},directives:[x,v.h,v.g,R.a,i.m,i.l,C.a,v.d],pipes:[i.b,l.c],styles:[".hero-row[_ngcontent-%COMP%]{background-image:url(hero-bg.c650f319f35c4b2ef1e9.jpg);background-repeat:no-repeat;background-size:cover;min-height:100vh;position:relative}@media (max-width:991px){.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:35px}}@media (max-width:768px){.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px}}.anker[_ngcontent-%COMP%]{height:1px;width:100%;margin-top:-65px}.about-section[_ngcontent-%COMP%]{background-color:#f5f5f5}.about-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin-bottom:20px}.about-section[_ngcontent-%COMP%]   .about-instagram[_ngcontent-%COMP%]{margin-top:1.5rem;text-align:center}.about-section[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:50px}.cucus-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0}.upcoming-cucus[_ngcontent-%COMP%]   app-cucu-box[_ngcontent-%COMP%]{cursor:pointer}.load-more-div[_ngcontent-%COMP%], .no-cucus-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}.credit-badge[_ngcontent-%COMP%]{position:absolute;bottom:10px;right:10px}.credit-badge[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#000;color:#fff;text-decoration:none;padding:4px 6px;font-family:-apple-system,San Francisco,Helvetica Neue,Helvetica,Ubuntu,Roboto,Noto,Segoe UI,Arial,sans-serif;font-size:12px;font-weight:700;line-height:1.2;display:inline-block;border-radius:3px}"]}),t})();var D=n("yXpV"),N=n("NICT");n.d(e,"HomeModule",(function(){return B}));const H=[{path:"",component:F}];let B=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[i.c,o.e,l.b,c.g.forChild(H),v.U.forChild(),D.a,N.a,v.e,v.k,R.b]]}),t})()}}]);