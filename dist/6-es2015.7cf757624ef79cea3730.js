(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7vJP":function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),i=n("3Pt+"),c=n("tyNb"),a=n("fXoL"),s=n("sYmb"),r=n("qFVP"),l=n("Wdmj"),b=n("mrSG"),u=n("itXk"),p=n("LRne"),d=n("lJxs"),g=n("Y9tF"),m=n("+EEi");const h=t=>!t||!t.value||t.value.includes("hangouts.google.com")||t.value.includes("join.skype.com")||t.value.includes("meet.jit.si")||t.value.includes("zoom.us")?null:{validInviteUrl:!1};var f=n("aceb"),v=n("snr1");let C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Kb({type:t,selectors:[["app-post-success"]],decls:17,vars:10,consts:[["accent","success",3,"size"],[1,"row"],[1,"col","col-md-12"],[1,"form-group"],["nbPrefix","","icon","link-outline","pack","eva"],["type","text","nbInput","","fullWidth","",3,"value","shape"],[1,"ws-s"],[3,"cucu"]],template:function(t,e){1&t&&(a.Wb(0,"nb-card",0),a.Wb(1,"nb-card-header"),a.Cc(2),a.jc(3,"translate"),a.Vb(),a.Wb(4,"nb-card-body"),a.Wb(5,"h3"),a.Cc(6),a.jc(7,"translate"),a.Vb(),a.Wb(8,"div",1),a.Wb(9,"div",2),a.Wb(10,"div",3),a.Wb(11,"nb-form-field"),a.Rb(12,"nb-icon",4),a.Rb(13,"input",5),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Rb(14,"div",6),a.Rb(15,"app-cucu-box",7),a.Vb(),a.Rb(16,"nb-card-footer"),a.Vb()),2&t&&(a.oc("size","large"),a.Eb(2),a.Dc(a.kc(3,6,"SUCCESS")),a.Eb(4),a.Dc(a.kc(7,8,"postCucu.CUCU_POSTED")),a.Eb(7),a.oc("value","https://cucuit.com/"+e.cucu._id)("shape","rectangle"),a.Eb(2),a.oc("cucu",e.cucu))},directives:[f.h,f.j,f.g,f.s,f.u,f.H,f.x,v.a,f.i],pipes:[s.c],styles:["nb-card[_ngcontent-%COMP%]{width:60vw}h3[_ngcontent-%COMP%]{text-align:center}"],changeDetection:0}),t})(),V=(()=>{class t{transform(t){return t.valid||!t.dirty?"basic":"danger"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a.Pb({name:"elementStatus",type:t,pure:!0}),t})();const E=["inviteUrlInputElement"],W=["timeInputElement"];function O(t,e){if(1&t&&a.Rb(0,"img",40),2&t){const t=e.$implicit;a.oc("src",t.imageUrl,a.wc)("nbTooltip",t.tooltip)("alt",t.name+" logo")}}function S(t,e){if(1&t&&(a.Wb(0,"nb-option",41),a.Cc(1),a.Vb()),2&t){const t=e.$implicit;a.oc("value",t),a.Eb(1),a.Ec(" ",t," ")}}function k(t,e){if(1&t&&(a.Wb(0,"nb-option",41),a.Cc(1),a.Vb()),2&t){const t=e.$implicit;a.oc("value",t),a.Eb(1),a.Ec(" ",t," ")}}let y=(()=>{class t{constructor(t,e,n,o,i,c){this.formBuilder=t,this.translate=e,this.dbService=n,this.dialogService=o,this.toastrService=i,this.gaService=c,this.callServices=[],this.componentSize="medium",this.componentShape="rectangle",this.timeSlots=[],this.languages=Object(m.a)().map(t=>t.name),this.avatarUploadLabel=""}ngOnInit(){this.initForm(),Object(u.a)([this.translate.get("postCucu.inviteUrl.PARTICIPANTS"),this.translate.get("postCucu.inviteUrl.MINUTES")]).subscribe(([t,e])=>{this.callServices=[{name:"Google Hangouts",tooltip:`Google Hangouts: 10 ${t}`,imageUrl:"./assets/images/hangouts.svg"},{name:"Skype",tooltip:`Skype: 50 ${t}`,imageUrl:"./assets/images/skype.svg"},{name:"Zoom",tooltip:`Zoom: 100 ${t}, max. 40 ${e}`,imageUrl:"./assets/images/hangouts.svg"},{name:"Jitsi Meet",tooltip:`Jitsi Meet: 25 ${t}`,imageUrl:"./assets/images/jitsi.png"}]})}postCucu(){if(this.form.valid){const t=this.form.getRawValue(),e=t.date,n=t.time.split(":")[0],o=t.time.split(":")[1];e.setHours(n),e.setMinutes(o),e.setSeconds(0),this.avatarId||(this.avatarId=""),this.dbService.createCucu({inviteUrl:t.inviteUrl,topic:t.topic,description:t.description,type:this.isConference?"conference":"chit_chat",startDate:e,userName:t.userName,avatarId:this.avatarId,language:t.language}).subscribe(t=>Object(b.a)(this,void 0,void 0,(function*(){t.topic?(this.avatarUploadLabel="",this.initForm(),this.gaService.event("post_success","post_cucu"),this.dialogService.open(C,{context:{cucu:t}}).onClose.subscribe(()=>{this.inviteUrlInputElement.nativeElement.focus()})):console.error(t),this.inviteUrlInputElement.nativeElement.focus()})),t=>Object(b.a)(this,void 0,void 0,(function*(){console.error(t),yield this.showCucuPostError(),this.gaService.event("post_failed","post_cucu")})))}else console.error("Form invalid"),console.log(this.form.getRawValue())}onAvatarFileChanged(t){this.avatarUploadLabel="";const e=t.target.files[0];e&&e.name&&(this.avatarUploadLabel=e.name,this.dbService.uploadAvatar(e).subscribe(t=>Object(b.a)(this,void 0,void 0,(function*(){t.id&&(this.avatarId=t.id,this.gaService.event("image_upload_success","post_cucu"))})),t=>Object(b.a)(this,void 0,void 0,(function*(){413===t.status?(this.avatarUploadLabel=yield this.translate.get("postCucu.errors.fileTooLarge.TITLE").toPromise(),this.toastrService.show(yield this.translate.get("postCucu.errors.fileTooLarge.TEXT").toPromise(),yield this.translate.get("postCucu.CUCU_ERROR").toPromise(),{status:"warning"}),this.gaService.event("image_too_large","post_cucu")):(this.avatarUploadLabel=yield this.translate.get("postCucu.errors.unknown.TITLE").toPromise(),this.toastrService.show(yield this.translate.get("postCucu.errors.unknown.TEXT").toPromise(),yield this.translate.get("postCucu.CUCU_ERROR").toPromise(),{status:"warning"}),this.gaService.event("image_upload_failed","post_cucu"))}))))}initForm(){const t=new Date,e=new Date(t.setDate(t.getDate()+1)),n=(new Date).getHours(),o=n>18?e:new Date,c=n>18||n<8?"10:00":`${n+2}:00`,a=Object(m.b)(this.translate.currentLang);this.timeSlots=Object(g.a)(o),this.form=this.formBuilder.group({inviteUrl:["https://hangouts.google.com/call/3wTZG0Tv8yykGbUGSfj2AEEI",[i.m.required,h]],topic:["Sports",i.m.required],description:["Morning routine",i.m.required],isConference:[!1,i.m.required],userName:["Matthias",i.m.required],language:[a,i.m.required],date:[o,i.m.required],time:[c,[i.m.required,i.m.pattern("[0-9]?[0-9]:[0-9][0-9]")]]}),this.filteredTimeOptions$=Object(p.a)(this.timeSlots),this.filteredTimeOptions$=this.time.valueChanges.pipe(Object(d.a)(t=>this.filterTimeslots(t))),this.filteredLanguageOptions$=Object(p.a)(this.languages),this.filteredLanguageOptions$=this.language.valueChanges.pipe(Object(d.a)(t=>this.filterLanguages(t))),this.date.valueChanges.subscribe(t=>{this.timeSlots=Object(g.a)(t),Object(g.b)(t)?this.time.setValue(`${n+2}:00`):this.time.setValue("10:00")}),this.translate.onLangChange.subscribe(()=>{this.language.setValue(Object(m.b)(this.translate.currentLang))}),setTimeout(()=>{this.inviteUrlInputElement.nativeElement.focus()},1)}filterTimeslots(t){if(t){const e=t.toLowerCase();return this.timeSlots.filter(t=>t.toLowerCase().includes(e))}}filterLanguages(t){if(t){const e=t.toLowerCase();return this.languages.filter(t=>t.toLowerCase().includes(e))}}showCucuPostError(){return Object(b.a)(this,void 0,void 0,(function*(){const t=yield this.translate.get("ERROR").toPromise(),e=this.translate.get("postCucu.CUCU_ERROR").toPromise();this.toastrService.show(e,t,{status:"danger"})}))}get inviteUrl(){return this.form.get("inviteUrl")}get topic(){return this.form.get("topic")}get description(){return this.form.get("description")}get isConference(){return this.form.get("isConference")}get userName(){return this.form.get("userName")}get language(){return this.form.get("language")}get date(){return this.form.get("date")}get time(){return this.form.get("time")}}return t.\u0275fac=function(e){return new(e||t)(a.Qb(i.b),a.Qb(s.d),a.Qb(r.a),a.Qb(f.r),a.Qb(f.N),a.Qb(l.a))},t.\u0275cmp=a.Kb({type:t,selectors:[["app-add-cucu"]],viewQuery:function(t,e){var n;1&t&&(a.Gc(E,!0),a.Gc(W,!0)),2&t&&(a.rc(n=a.fc())&&(e.inviteUrlInputElement=n.first),a.rc(n=a.fc())&&(e.timeInputElement=n.first))},decls:93,vars:91,consts:[["accent","primary"],[1,"example-items-col"],[1,"video-call-services"],[1,"row"],[3,"src","nbTooltip","alt",4,"ngFor","ngForOf"],[1,"ws-s"],[3,"formGroup"],[1,"col","col-md-12"],[1,"form-group"],["nbPrefix","","icon","link-outline","pack","eva"],["type","text","nbInput","","fullWidth","",3,"formControl","shape","placeholder","fieldSize","status"],["inviteUrlInputElement",""],[1,"col","col-lg-8","col-md-8","col-sm-6"],["nbPrefix","","icon","heart-outline","pack","eva"],["type","text","nbInput","","fullWidth","","id","topic",3,"formControl","shape","placeholder","fieldSize","status"],[1,"col","col-lg-4","col-md-4","col-sm-6"],["status","primary",3,"formControl","nbTooltip","nbTooltipStatus"],[1,"col","col-lg-4","col-md-12","col-sm-12"],["nbPrefix","","icon","globe-outline","pack","eva"],["fullWidth","","nbInput","","type","text","nbTooltipStatus","basic",3,"formControl","placeholder","fieldSize","status","nbAutocomplete","nbTooltip"],["languageAutocomplete",""],[3,"value",4,"ngFor","ngForOf"],[1,"col","col-lg-4","col-md-6","col-sm-12"],["nbPrefix","","icon","calendar-outline","pack","eva"],["fullWidth","","nbInput","","nbTooltipStatus","basic",3,"nbDatepicker","formControl","fieldSize","nbTooltip"],["datepicker",""],[1,"col","col-lg-4","col-md-6","col-sm-6"],["nbPrefix","","icon","clock-outline","pack","eva"],["fullWidth","","nbInput","","type","text","nbTooltipStatus","basic",3,"formControl","placeholder","status","shape","nbAutocomplete","fieldSize","nbTooltip"],["timeAutocomplete",""],[1,"col","col-lg-8","col-md-8","col-sm-8"],["nbPrefix","","icon","person-outline","pack","eva"],["type","text","nbInput","","fullWidth","",3,"formControl","shape","status","placeholder","fieldSize"],[1,"col","col-lg-4","col-md-4","col-sm-4"],["nbButton","","ghost","",3,"size","click"],["icon","camera-outline"],[1,"avatar-upload-p"],["type","file",2,"display","none",3,"accept","change"],["avatarInput",""],["nbButton","","hero","","status","primary","fullWidth","",3,"shape","size","click"],[3,"src","nbTooltip","alt"],[3,"value"]],template:function(t,e){if(1&t){const t=a.Xb();a.Wb(0,"nb-card",0),a.Wb(1,"nb-card-body",1),a.Wb(2,"h3"),a.Cc(3,"Launch open digital meetups!"),a.Vb(),a.Wb(4,"div",2),a.Wb(5,"p"),a.Cc(6,"Lauch a CUCU using one of this platforms: "),a.Vb(),a.Wb(7,"div",3),a.Ac(8,O,1,3,"img",4),a.Vb(),a.Vb(),a.Rb(9,"div",5),a.Wb(10,"form",6),a.Wb(11,"div",3),a.Wb(12,"div",7),a.Wb(13,"div",8),a.Wb(14,"nb-form-field"),a.Rb(15,"nb-icon",9),a.Rb(16,"input",10,11),a.jc(18,"async"),a.jc(19,"elementStatus"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(20,"div",3),a.Wb(21,"div",12),a.Wb(22,"div",8),a.Wb(23,"nb-form-field"),a.Rb(24,"nb-icon",13),a.Rb(25,"input",14),a.jc(26,"async"),a.jc(27,"elementStatus"),a.Vb(),a.Vb(),a.Vb(),a.Wb(28,"div",15),a.Wb(29,"nb-toggle",16),a.jc(30,"async"),a.Cc(31),a.jc(32,"translate"),a.Vb(),a.Vb(),a.Vb(),a.Wb(33,"div",3),a.Wb(34,"div",7),a.Wb(35,"div",8),a.Wb(36,"nb-form-field"),a.Rb(37,"input",10),a.jc(38,"async"),a.jc(39,"elementStatus"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(40,"div",3),a.Wb(41,"div",17),a.Wb(42,"div",8),a.Wb(43,"nb-form-field"),a.Rb(44,"nb-icon",18),a.Rb(45,"input",19),a.jc(46,"async"),a.jc(47,"elementStatus"),a.jc(48,"async"),a.Wb(49,"nb-autocomplete",null,20),a.Ac(51,S,2,2,"nb-option",21),a.jc(52,"async"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(53,"div",22),a.Wb(54,"div",8),a.Wb(55,"nb-form-field"),a.Rb(56,"nb-icon",23),a.Rb(57,"input",24),a.jc(58,"async"),a.Rb(59,"nb-datepicker",null,25),a.Vb(),a.Vb(),a.Vb(),a.Wb(61,"div",26),a.Wb(62,"div",8),a.Wb(63,"nb-form-field"),a.Rb(64,"nb-icon",27),a.Rb(65,"input",28),a.jc(66,"async"),a.jc(67,"elementStatus"),a.jc(68,"async"),a.Wb(69,"nb-autocomplete",null,29),a.Ac(71,k,2,2,"nb-option",21),a.jc(72,"async"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(73,"div",3),a.Wb(74,"div",30),a.Wb(75,"div",8),a.Wb(76,"nb-form-field"),a.Rb(77,"nb-icon",31),a.Rb(78,"input",32),a.jc(79,"elementStatus"),a.jc(80,"async"),a.Vb(),a.Vb(),a.Vb(),a.Wb(81,"div",33),a.Wb(82,"div",8),a.Wb(83,"button",34),a.ec("click",(function(){return a.uc(t),a.sc(88).click()})),a.Rb(84,"nb-icon",35),a.Vb(),a.Wb(85,"p",36),a.Cc(86),a.Vb(),a.Wb(87,"input",37,38),a.ec("change",(function(t){return e.onAvatarFileChanged(t)})),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(89,"div",8),a.Wb(90,"button",39),a.ec("click",(function(){return e.postCucu()})),a.Cc(91),a.jc(92,"translate"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb()}if(2&t){const t=a.sc(50),n=a.sc(60),o=a.sc(70);a.Eb(8),a.oc("ngForOf",e.callServices),a.Eb(2),a.oc("formGroup",e.form),a.Eb(6),a.oc("formControl",e.inviteUrl)("shape",e.componentShape)("placeholder",a.kc(18,51,e.translate.get("postCucu.inviteUrl.PLACEHOLDER")))("fieldSize",e.componentSize)("status",a.kc(19,53,e.inviteUrl)),a.Eb(9),a.oc("formControl",e.topic)("shape",e.componentShape)("placeholder",a.kc(26,55,e.translate.get("postCucu.topic.PLACEHOLDER")))("fieldSize",e.componentSize)("status",a.kc(27,57,e.topic)),a.Eb(4),a.oc("formControl",e.isConference)("nbTooltip",a.kc(30,59,e.translate.get("postCucu.type.TOOLTIP")))("nbTooltipStatus","basic"),a.Eb(2),a.Dc(a.kc(32,61,"postCucu.type.LABEL")),a.Eb(6),a.oc("formControl",e.description)("shape",e.componentShape)("placeholder",a.kc(38,63,e.translate.get("postCucu.description.PLACEHOLDER")))("fieldSize",e.componentSize)("status",a.kc(39,65,e.description)),a.Eb(8),a.oc("formControl",e.language)("placeholder",a.kc(46,67,e.translate.get("postCucu.language.PLACEHOLDER")))("fieldSize",e.componentSize)("status",a.kc(47,69,e.language))("nbAutocomplete",t)("nbTooltip",a.kc(48,71,e.translate.get("postCucu.language.TOOLTIP"))),a.Eb(6),a.oc("ngForOf",a.kc(52,73,e.filteredLanguageOptions$)),a.Eb(6),a.oc("nbDatepicker",n)("formControl",e.date)("fieldSize",e.componentSize)("nbTooltip",a.kc(58,75,e.translate.get("postCucu.day.TOOLTIP"))),a.Eb(8),a.oc("formControl",e.time)("placeholder",a.kc(66,77,e.translate.get("postCucu.time.PLACEHOLDER")))("status",a.kc(67,79,e.time))("shape",e.componentShape)("nbAutocomplete",o)("fieldSize",e.componentSize)("nbTooltip",a.kc(68,81,e.translate.get("postCucu.time.TOOLTIP"))),a.Eb(6),a.oc("ngForOf",a.kc(72,83,e.filteredTimeOptions$)),a.Eb(7),a.oc("formControl",e.userName)("shape",e.componentShape)("status",a.kc(79,85,e.userName))("placeholder",a.kc(80,87,e.translate.get("postCucu.userName.PLACEHOLDER")))("fieldSize",e.componentSize),a.Eb(5),a.oc("size","medium"),a.Eb(3),a.Dc(e.avatarUploadLabel),a.Eb(1),a.oc("accept","image/x-png, image/jpeg"),a.Eb(3),a.oc("shape","rectangle")("size","large"),a.Eb(1),a.Ec(" ",a.kc(92,89,"postCucu.post.LABEL")," ")}},directives:[f.h,f.g,o.l,i.n,i.i,i.d,f.s,f.u,f.H,f.x,i.a,i.h,i.c,f.O,f.Q,f.b,f.a,f.o,f.n,f.d,f.G],pipes:[o.b,V,s.c],styles:[".call-providers-info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:7rem}.call-providers-info-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}form[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{padding:0 5px}.video-call-services[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;margin:0 10px}.avatar-upload-p[_ngcontent-%COMP%]{font-size:12px!important;margin-top:5px}"]}),t})();const w=["cucusElement"];function P(t,e){1&t&&(a.Wb(0,"p"),a.Cc(1),a.jc(2,"translate"),a.Vb()),2&t&&(a.Eb(1),a.Dc(a.kc(2,1,"home.NO_CUCUS_FOUND")))}function _(t,e){if(1&t&&(a.Wb(0,"div",26),a.Rb(1,"app-cucu-box",27),a.Vb()),2&t){const t=e.$implicit;a.Eb(1),a.oc("cucu",t)("id",t._id)}}function T(t,e){if(1&t&&(a.Wb(0,"div",26),a.Rb(1,"app-cucu-box",28),a.Vb()),2&t){const t=e.$implicit;a.Eb(1),a.oc("cucu",t)("isPast",!0)}}function x(t,e){if(1&t&&(a.Wb(0,"div",3),a.Ac(1,T,2,2,"div",22),a.Vb()),2&t){const t=e.ngIf,n=a.ic(2);a.Eb(1),a.oc("ngForOf",t)("ngForTrackBy",n.trackByFn)}}function j(t,e){if(1&t){const t=a.Xb();a.Wb(0,"button",29),a.ec("click",(function(){return a.uc(t),a.ic(2).loadMore()})),a.Cc(1),a.jc(2,"translate"),a.Vb()}2&t&&(a.oc("shape","rectangle")("size","medium"),a.Eb(1),a.Ec(" ",a.kc(2,3,"home.LOAD_MORE")," "))}function R(t,e){if(1&t&&(a.Ub(0),a.Wb(1,"div",18,19),a.Wb(3,"h1"),a.Cc(4,"Join a CUCU"),a.Vb(),a.Wb(5,"div",3),a.Wb(6,"div",20),a.Wb(7,"div",21),a.Ac(8,P,3,3,"p",16),a.Vb(),a.Vb(),a.Ac(9,_,2,2,"div",22),a.Vb(),a.Rb(10,"div",14),a.Ac(11,x,2,2,"div",23),a.jc(12,"async"),a.Rb(13,"div",14),a.Wb(14,"div",3),a.Wb(15,"div",24),a.Ac(16,j,3,5,"button",25),a.Vb(),a.Vb(),a.Vb(),a.Tb()),2&t){const t=e.ngIf,n=a.ic();a.Eb(8),a.oc("ngIf",t.length<1),a.Eb(1),a.oc("ngForOf",t)("ngForTrackBy",n.trackByFn),a.Eb(2),a.oc("ngIf",a.kc(12,5,n.dbService.pastCucus)),a.Eb(5),a.oc("ngIf",n.doWeHaveMore)}}let I=(()=>{class t{constructor(t,e,n,o){this.translate=t,this.dbService=e,this.gaService=n,this.route=o,this.doWeHaveMore=!1}ngOnInit(){this.gaService.pageView("","Home")}ngAfterViewInit(){this.route.fragment.subscribe(t=>{"cucus"===t&&this.scrollToElement(this.cucusElement.nativeElement)})}loadMore(){}trackByFn(t,e){return e._id}scrollToElement(t){t.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}return t.\u0275fac=function(e){return new(e||t)(a.Qb(s.d),a.Qb(r.a),a.Qb(l.a),a.Qb(c.a))},t.\u0275cmp=a.Kb({type:t,selectors:[["app-home"]],viewQuery:function(t,e){var n;1&t&&a.Gc(w,!0),2&t&&a.rc(n=a.fc())&&(e.cucusElement=n.first)},decls:37,vars:15,consts:[[1,"row","hero-row","content-padding"],[1,"col-lg-5","col-md-7"],["accent","primary",1,"donate-card"],[1,"row"],[1,"col-md-12","center-h"],[3,"click"],[1,"credit-badge"],["href","https://unsplash.com/@nineteen?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge","target","_blank","rel","noopener noreferrer","title","Download free do whatever you want high-resolution photos from Andrew Ly"],[2,"display","inline-block","padding","2px 3px"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 32 32",2,"height","12px","width","auto","position","relative","vertical-align","middle","top","-2px","fill","white"],["d","M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"],[1,"about-section","content-padding"],["about",""],[1,"col-md-8"],[1,"ws-s"],[1,"content-padding"],[4,"ngIf"],[1,"ws-m"],[1,"cucus-section"],["cucusElement",""],[1,"col-md-12"],[1,"no-cucus-div"],["class","col-md-4",4,"ngFor","ngForOf","ngForTrackBy"],["class","row",4,"ngIf"],[1,"col-md-12","load-more-div"],["nbButton","","status","primary",3,"shape","size","click",4,"ngIf"],[1,"col-md-4"],[3,"cucu","id"],[3,"cucu","isPast"],["nbButton","","status","primary",3,"shape","size","click"]],template:function(t,e){if(1&t){const t=a.Xb();a.Wb(0,"div",0),a.Wb(1,"div",1),a.Rb(2,"app-add-cucu"),a.Wb(3,"nb-card",2),a.Wb(4,"nb-card-body"),a.Wb(5,"div",3),a.Wb(6,"div",4),a.Wb(7,"p"),a.Cc(8),a.jc(9,"translate"),a.Vb(),a.Wb(10,"a",5),a.ec("click",(function(){a.uc(t);const n=a.sc(23);return e.scrollToElement(n)})),a.Cc(11),a.jc(12,"translate"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(13,"div",6),a.Wb(14,"a",7),a.Wb(15,"span",8),a.hc(),a.Wb(16,"svg",9),a.Wb(17,"title"),a.Cc(18,"unsplash-logo"),a.Vb(),a.Rb(19,"path",10),a.Vb(),a.Vb(),a.gc(),a.Wb(20,"span",8),a.Cc(21,"Andrew Ly"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(22,"div",11,12),a.Wb(24,"div",3),a.Wb(25,"div",13),a.Wb(26,"h1"),a.Cc(27),a.jc(28,"translate"),a.Vb(),a.Wb(29,"p"),a.Cc(30),a.jc(31,"translate"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Rb(32,"div",14),a.Wb(33,"div",15),a.Ac(34,R,17,7,"ng-container",16),a.jc(35,"async"),a.Rb(36,"div",17),a.Vb()}2&t&&(a.Eb(8),a.Dc(a.kc(9,5,"home.INFO_BOX_TEXT")),a.Eb(3),a.Dc(a.kc(12,7,"aboutSection.MORE_INFO")),a.Eb(16),a.Dc(a.kc(28,9,"aboutSection.TITLE")),a.Eb(3),a.Dc(a.kc(31,11,"aboutSection.TEXT")),a.Eb(4),a.oc("ngIf",a.kc(35,13,e.dbService.cucus)))},directives:[y,f.h,f.g,o.m,o.l,v.a,f.d],pipes:[s.c,o.b],styles:[".hero-row[_ngcontent-%COMP%]{background-image:url(hero-bg.c650f319f35c4b2ef1e9.jpg);background-repeat:no-repeat;background-size:cover;min-height:100vh;position:relative}.about-section[_ngcontent-%COMP%]{background-color:#f5f5f5}.no-cucus-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}@media (max-width:991px){.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:35px}}@media (max-width:768px){.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px}}.vdo-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;width:80px;margin-left:-15px}.vdo-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:20px;font-size:14px;font-weight:500}.vdo-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.load-more-div[_ngcontent-%COMP%]{text-align:center}.credit-badge[_ngcontent-%COMP%]{position:absolute;bottom:10px;right:10px}.credit-badge[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#000;color:#fff;text-decoration:none;padding:4px 6px;font-family:-apple-system,San Francisco,Helvetica Neue,Helvetica,Ubuntu,Roboto,Noto,Segoe UI,Arial,sans-serif;font-size:12px;font-weight:700;line-height:1.2;display:inline-block;border-radius:3px}"]}),t})();var L=n("yXpV"),U=n("NICT");n.d(e,"HomeModule",(function(){return z}));const M=[{path:"",component:I}];let z=(()=>{class t{}return t.\u0275mod=a.Ob({type:t}),t.\u0275inj=a.Nb({factory:function(e){return new(e||t)},imports:[[o.c,i.e,s.b,c.g.forChild(M),f.U.forChild(),L.a,U.a,f.e,f.k]]}),t})()}}]);