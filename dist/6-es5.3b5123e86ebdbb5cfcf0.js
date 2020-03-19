function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],i=!0,a=!1,o=void 0;try{for(var c,r=t[Symbol.iterator]();!(i=(c=r.next()).done)&&(n.push(c.value),!e||n.length!==e);i=!0);}catch(s){a=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return n}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7vJP":function(t,e,n){"use strict";n.r(e);var i,a,o=n("ofXK"),c=n("3Pt+"),r=n("tyNb"),s=n("R0Ic"),u=n("fXoL"),l=((i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u.Kb({type:i,selectors:[["app-video"]],decls:3,vars:0,consts:[[1,"video-container-div"],[2,"padding","56.25% 0 0 0","position","relative"],["src","https://player.vimeo.com/video/24561491?autoplay=1&title=0&byline=0","frameborder","0","allow","autoplay; fullscreen","allowfullscreen","",2,"position","absolute","top","0","left","0","width","100%","height","100%"]],template:function(t,e){1&t&&(u.Wb(0,"div",0),u.Wb(1,"div",1),u.Rb(2,"iframe",2),u.Vb(),u.Vb())},styles:[".video-container-div[_ngcontent-%COMP%]{width:65vw}"]}),i),b=n("sYmb"),p=n("aceb"),h=n("2Vo4"),d=n("lJxs"),m=n("tk/3"),f=((a=function(){function t(e,n){var i=this;_classCallCheck(this,t),this.http=e,this.translate=n,this.baseUrl="https://api.cucuit.com",this.cucus$=new h.a([]),this.fetchCucus(n.currentLang),this.translate.onLangChange.subscribe((function(t){return i.fetchCucus(t)}))}return _createClass(t,[{key:"fetchCucus",value:function(t){var e=this,n=new Date;n.setMinutes(n.getMinutes()-15),this.http.get("".concat(this.baseUrl,"/cucus/after/").concat(n.toUTCString())).subscribe((function(t){e.cucus$.next(t)}))}},{key:"createCucu",value:function(t){var e=this;return this.http.post("".concat(this.baseUrl,"/cucus"),t).pipe(Object(d.a)((function(t){return e.fetchCucus(e.translate.currentLang),t})))}},{key:"incrementClickCounter",value:function(t){return this.http.get("".concat(this.baseUrl,"/cucus/").concat(t,"/click"))}},{key:"uploadAvatar",value:function(t){var e=new FormData;return e.append("file",t),this.http.post("".concat(this.baseUrl,"/images"),e)}},{key:"getImageBaseUrl",value:function(){return"".concat(this.baseUrl,"/images")}},{key:"cucus",get:function(){return this.cucus$}}]),t}()).\u0275fac=function(t){return new(t||a)(u.ac(m.a),u.ac(b.d))},a.\u0275prov=u.Mb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),g=n("mrSG"),v=n("LRne"),C=n("JX91"),y=[{name:"Italiano \ud83c\uddee\ud83c\uddf9",short:"it",emoji:"\ud83c\uddee\ud83c\uddf9"},{name:"Espa\xf1ol \ud83c\uddea\ud83c\uddf8",short:"es",emoji:"\ud83c\uddea\ud83c\uddf8"},{name:"Deutsch \ud83c\udde9\ud83c\uddea",short:"de",emoji:"\ud83c\udde9\ud83c\uddea"},{name:"English \ud83c\uddec\ud83c\udde7",short:"en",emoji:"\ud83c\uddec\ud83c\udde7"}],O=["element"];function w(t,e){1&t&&(u.Wb(0,"nb-card",27),u.Wb(1,"nb-card-body"),u.Wb(2,"b"),u.Wb(3,"a",28),u.Ac(4,"Hangouts"),u.Vb(),u.Vb(),u.Ac(5),u.hc(6,"translate"),u.Rb(7,"br"),u.Wb(8,"b"),u.Wb(9,"a",29),u.Ac(10,"Skype"),u.Vb(),u.Vb(),u.Ac(11),u.hc(12,"translate"),u.Rb(13,"br"),u.Wb(14,"b"),u.Wb(15,"a",30),u.Ac(16,"Jitsi Meet"),u.Vb(),u.Vb(),u.Ac(17),u.hc(18,"translate"),u.Rb(19,"br"),u.Wb(20,"b"),u.Wb(21,"a",31),u.Ac(22,"Zoom"),u.Vb(),u.Vb(),u.Ac(23),u.hc(24,"translate"),u.hc(25,"translate"),u.Rb(26,"br"),u.Vb(),u.Vb()),2&t&&(u.Eb(5),u.Cc(": 10 ",u.ic(6,5,"postCucu.inviteUrl.PARTICIPANTS"),""),u.Eb(6),u.Cc(": 50 ",u.ic(12,7,"postCucu.inviteUrl.PARTICIPANTS"),""),u.Eb(6),u.Cc(": 25 ",u.ic(18,9,"postCucu.inviteUrl.PARTICIPANTS"),""),u.Eb(6),u.Dc(": 100 ",u.ic(24,11,"postCucu.inviteUrl.PARTICIPANTS"),", max. 40 ",u.ic(25,13,"postCucu.inviteUrl.MINUTES")," "))}function k(t,e){if(1&t&&(u.Wb(0,"nb-option",15),u.Ac(1),u.Vb()),2&t){var n=e.$implicit;u.mc("value",n.short),u.Eb(1),u.Bc(n.name)}}function S(t,e){if(1&t&&(u.Wb(0,"nb-option",15),u.Ac(1),u.Vb()),2&t){var n=e.$implicit;u.mc("value",n),u.Eb(1),u.Cc(" ",n," ")}}var W,E=((W=function(){function t(e,n,i,a){_classCallCheck(this,t),this.formBuilder=e,this.translate=n,this.dbService=i,this.toastrService=a,this.componentSize="medium",this.componentShape="rectangle",this.showCallProvidersInfoBox=!0,this.languages=y,this.timeSlots=[],this.avatarUploadLabel=""}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this,e=(new Date).getHours(),n=e>18?"tomorrow":"today",i=e>18||e<8?"10:00":"".concat(e+2,":00");this.timeSlots=this.getTimeSlots(n),this.form=this.formBuilder.group({inviteUrl:["",[c.m.required,T]],topic:["",c.m.required],userName:["",c.m.required],language:[this.translate.currentLang,c.m.required],day:[n,c.m.required],time:[i,c.m.required]}),this.filteredTimeOptions$=Object(v.a)(this.timeSlots),this.filteredTimeOptions$=this.time.valueChanges.pipe(Object(C.a)(""),Object(d.a)((function(e){return t.filterTimeslots(e)}))),this.day.valueChanges.subscribe((function(n){t.timeSlots=t.getTimeSlots(n),t.time.setValue("tomorrow"===n?"10:00":"".concat(e+2,":00"))}))}},{key:"filterTimeslots",value:function(t){if(t){var e=t.toLowerCase();return this.timeSlots.filter((function(t){return t.toLowerCase().includes(e)}))}}},{key:"ngAfterViewInit",value:function(){var t=this;setTimeout((function(){t.element.nativeElement.blur(),t.time.markAsUntouched()}),1)}},{key:"postCucu",value:function(){var t=this;if(this.form.valid){var e=this.form.getRawValue(),n=new Date;"tomorrow"===e.day&&(n=function(t){var e=new Date(t);return e.setDate(e.getDate()+1),e}(n),console.log(n));var i=e.time.split(":")[0],a=e.time.split(":")[1];n.setHours(i),n.setMinutes(a),n.setSeconds(0),console.log(n),this.avatarId||(this.avatarId=""),this.dbService.createCucu({inviteUrl:e.inviteUrl,topic:e.topic,startDate:n,userName:e.userName,avatarId:this.avatarId,language:e.language}).subscribe((function(e){return Object(g.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.topic){t.next=7;break}return this.avatarUploadLabel="",this.form.reset(),t.next=5,this.showToast("success");case 5:t.next=10;break;case 7:return console.error(e),t.next=10,this.showToast("danger");case 10:case"end":return t.stop()}}),t,this)})))}))}else console.error("Form invalid"),console.error(this.form),console.log(this.form.getRawValue())}},{key:"onAvatarFileChanged",value:function(t){var e=this;this.avatarUploadLabel="";var n=t.target.files[0];n&&n.name&&(this.avatarUploadLabel=n.name,this.dbService.uploadAvatar(n).subscribe((function(t){return Object(g.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),t.id&&(this.avatarId=t.id);case 1:case"end":return e.stop()}}),e,this)})))}),(function(t){return Object(g.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(413!==t.status){e.next=11;break}return console.log("Too large"),this.avatarUploadLabel="File troppo grande",e.t0=this.toastrService,e.next=6,this.translate.get("postCucu.CUCU_ERROR").toPromise();case 6:e.t1=e.sent,e.t2={status:"warning"},e.t0.show.call(e.t0,"Immagine troppo grande. Il massimo \xe9 1MB.",e.t1,e.t2),e.next=18;break;case 11:return this.avatarUploadLabel="Errore",e.t3=this.toastrService,e.next=15,this.translate.get("postCucu.CUCU_ERROR").toPromise();case 15:e.t4=e.sent,e.t5={status:"warning"},e.t3.show.call(e.t3,"Errore durante l'upload del tuo immagine.",e.t4,e.t5);case 18:case"end":return e.stop()}}),e,this)})))})))}},{key:"showToast",value:function(t){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("success"!==t){e.next=6;break}return e.next=3,this.translate.get("SUCCESS").toPromise();case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,this.translate.get("ERROR").toPromise();case 8:e.t0=e.sent;case 9:if(n=e.t0,"success"!==t){e.next=16;break}return e.next=13,this.translate.get("postCucu.CUCU_POSTED").toPromise();case 13:e.t1=e.sent,e.next=19;break;case 16:return e.next=18,this.translate.get("postCucu.CUCU_ERROR").toPromise();case 18:e.t1=e.sent;case 19:i=e.t1,this.toastrService.show(i,n,{status:t});case 21:case"end":return e.stop()}}),e,this)})))}},{key:"handleDateChange",value:function(t){console.log(t)}},{key:"getTimeSlots",value:function(t){var e=[],n=(new Date).getHours(),i=(new Date).getMinutes()>30?1:0;"today"!==t&&(n=0,i=0);for(var a=n+i;a<24;a++){var o=Math.floor(a)+":";e.push(o+"00",o+"30")}return e}},{key:"elementStatus",value:function(t){return t.valid||!t.dirty?"":"danger"}},{key:"inviteUrl",get:function(){return this.form.get("inviteUrl")}},{key:"topic",get:function(){return this.form.get("topic")}},{key:"userName",get:function(){return this.form.get("userName")}},{key:"language",get:function(){return this.form.get("language")}},{key:"day",get:function(){return this.form.get("day")}},{key:"time",get:function(){return this.form.get("time")}}]),t}()).\u0275fac=function(t){return new(t||W)(u.Qb(c.b),u.Qb(b.d),u.Qb(f),u.Qb(p.H))},W.\u0275cmp=u.Kb({type:W,selectors:[["app-add-cucu"]],viewQuery:function(t,e){var n;1&t&&u.Gc(O,!0),2&t&&u.pc(n=u.fc())&&(e.element=n.first)},decls:67,vars:81,consts:[["accent","primary"],[1,"example-items-col"],[3,"formGroup"],[1,"form-group"],["nbPrefix","","icon","link-outline","pack","eva"],["type","text","nbInput","","fullWidth","",3,"formControl","shape","placeholder","fieldSize","status"],["class","call-providers-info-box",4,"ngIf"],["nbPrefix","","icon","heart-outline","pack","eva"],["type","text","nbInput","","fullWidth","","id","topic",3,"formControl","shape","placeholder","fieldSize","status"],[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12"],["fullWidth","","nbTooltipStatus","basic",3,"formControl","placeholder","size","shape","nbTooltip"],[3,"value",4,"ngFor","ngForOf"],[1,"col-lg-7","col-md-12","col-sm-12"],["fullWidth","","nbTooltipStatus","basic",3,"formControl","placeholder","selected","shape","size","nbTooltip"],[3,"value"],[1,"col-lg-5","col-md-12","col-sm-12"],["nbPrefix","","icon","clock-outline","pack","eva"],["fullWidth","","nbInput","","type","text","nbTooltipStatus","basic",3,"formControl","placeholder","status","shape","nbAutocomplete","fieldSize","nbTooltip"],["element",""],["timeAutocomplete",""],["nbPrefix","","icon","person-outline","pack","eva"],["type","text","nbInput","","fullWidth","",3,"formControl","shape","status","placeholder","fieldSize"],["nbButton","","status","primary","fullWidth","","nbTooltipStatus","basic",3,"shape","size","nbTooltip","click"],["type","file",2,"display","none",3,"accept","change"],["avatarInput",""],["nbButton","","hero","","status","primary","fullWidth","",3,"type","shape","size","click"],[1,"call-providers-info-box"],["href","https://hangouts.google.com","target","_blank"],["href","https://www.skype.com","target","_blank"],["href","https://meet.jit.si","target","_blank"],["href","https://zoom.us/signup","target","_blank"]],template:function(t,e){if(1&t){var n=u.Xb();u.Wb(0,"nb-card",0),u.Wb(1,"nb-card-body",1),u.Wb(2,"form",2),u.Wb(3,"div",3),u.Wb(4,"nb-form-field"),u.Rb(5,"nb-icon",4),u.Rb(6,"input",5),u.hc(7,"async"),u.Vb(),u.Vb(),u.yc(8,w,27,15,"nb-card",6),u.Wb(9,"div",3),u.Wb(10,"nb-form-field"),u.Rb(11,"nb-icon",7),u.Rb(12,"input",8),u.hc(13,"async"),u.Vb(),u.Vb(),u.Wb(14,"div",9),u.Wb(15,"div",10),u.Wb(16,"div",3),u.Wb(17,"nb-select",11),u.hc(18,"async"),u.hc(19,"async"),u.yc(20,k,2,2,"nb-option",12),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Wb(21,"div",9),u.Wb(22,"div",13),u.Wb(23,"div",3),u.Wb(24,"nb-form-field"),u.Wb(25,"nb-select",14),u.hc(26,"async"),u.hc(27,"async"),u.Wb(28,"nb-option",15),u.Ac(29),u.hc(30,"translate"),u.Vb(),u.Wb(31,"nb-option",15),u.Ac(32),u.hc(33,"translate"),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Wb(34,"div",16),u.Wb(35,"div",3),u.Wb(36,"nb-form-field"),u.Rb(37,"nb-icon",17),u.Rb(38,"input",18,19),u.hc(40,"async"),u.hc(41,"async"),u.Wb(42,"nb-autocomplete",null,20),u.yc(44,S,2,2,"nb-option",12),u.hc(45,"async"),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Wb(46,"div",9),u.Wb(47,"div",13),u.Wb(48,"div",3),u.Wb(49,"nb-form-field"),u.Rb(50,"nb-icon",21),u.Rb(51,"input",22),u.hc(52,"async"),u.Vb(),u.Vb(),u.Vb(),u.Wb(53,"div",16),u.Wb(54,"div",3),u.Wb(55,"button",23),u.ec("click",(function(){return u.sc(n),u.qc(60).click()})),u.hc(56,"async"),u.Ac(57),u.hc(58,"translate"),u.Vb(),u.Wb(59,"input",24,25),u.ec("change",(function(t){return e.onAvatarFileChanged(t)})),u.Vb(),u.Wb(61,"p"),u.Ac(62),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Wb(63,"div",3),u.Wb(64,"button",26),u.ec("click",(function(){return e.postCucu()})),u.Ac(65),u.hc(66,"translate"),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb()}if(2&t){var i=u.qc(43);u.Eb(2),u.mc("formGroup",e.form),u.Eb(4),u.mc("formControl",e.inviteUrl)("shape",e.componentShape)("placeholder",u.ic(7,51,e.translate.get("postCucu.inviteUrl.PLACEHOLDER")))("fieldSize",e.componentSize)("status",e.elementStatus(e.inviteUrl)),u.Eb(2),u.mc("ngIf",e.showCallProvidersInfoBox),u.Eb(4),u.mc("formControl",e.topic)("shape",e.componentShape)("placeholder",u.ic(13,53,e.translate.get("postCucu.topic.PLACEHOLDER")))("fieldSize",e.componentSize)("status",e.elementStatus(e.topic)),u.Eb(5),u.mc("formControl",e.language)("placeholder",u.ic(18,55,e.translate.get("postCucu.language.PLACEHOLDER")))("size",e.componentSize)("shape",e.componentShape)("nbTooltip",u.ic(19,57,e.translate.get("postCucu.language.TOOLTIP"))),u.Eb(3),u.mc("ngForOf",e.languages),u.Eb(5),u.mc("formControl",e.day)("placeholder",u.ic(26,59,e.translate.get("postCucu.day.PLACEHOLDER")))("selected","today")("shape",e.componentShape)("size",e.componentSize)("nbTooltip",u.ic(27,61,e.translate.get("postCucu.day.TOOLTIP"))),u.Eb(3),u.mc("value","today"),u.Eb(1),u.Bc(u.ic(30,63,"postCucu.TODAY")),u.Eb(2),u.mc("value","tomorrow"),u.Eb(1),u.Bc(u.ic(33,65,"postCucu.TOMORROW")),u.Eb(6),u.mc("formControl",e.time)("placeholder",u.ic(40,67,e.translate.get("postCucu.time.PLACEHOLDER")))("status",e.elementStatus(e.time))("shape",e.componentShape)("nbAutocomplete",i)("fieldSize",e.componentSize)("nbTooltip",u.ic(41,69,e.translate.get("postCucu.time.TOOLTIP"))),u.Eb(6),u.mc("ngForOf",u.ic(45,71,e.filteredTimeOptions$)),u.Eb(7),u.mc("formControl",e.userName)("shape",e.componentShape)("status",e.elementStatus(e.userName))("placeholder",u.ic(52,73,e.translate.get("postCucu.userName.PLACEHOLDER")))("fieldSize",e.componentSize),u.Eb(4),u.mc("shape",e.componentShape)("size",e.componentSize)("nbTooltip",u.ic(56,75,e.translate.get("postCucu.uploadImage.TOOLTIP"))),u.Eb(2),u.Cc(" ",u.ic(58,77,"postCucu.uploadImage.LABEL")," "),u.Eb(2),u.mc("accept","image/x-png, image/jpeg"),u.Eb(3),u.Bc(e.avatarUploadLabel),u.Eb(2),u.mc("type","submit")("shape","rectangle")("size","large"),u.Eb(1),u.Cc(" ",u.ic(66,79,"postCucu.post.LABEL")," ")}},directives:[p.g,p.f,c.n,c.i,c.d,p.m,p.o,p.B,p.r,c.a,c.h,c.c,o.m,p.C,p.I,o.l,p.A,p.b,p.a,p.d],pipes:[o.b,b.c],styles:[".call-providers-info-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),W);function T(t){return!t||!t.value||t.value.includes("hangouts.google.com")||t.value.includes("join.skype.com")||t.value.includes("meet.jit.si")||t.value.includes("zoom.us")?null:{validInviteUrl:!1}}var V=n("itXk");function A(t,e){if(1&t&&(u.Ac(0),u.hc(1,"translate"),u.hc(2,"translate")),2&t){var n=u.gc();u.Ec(" ",u.ic(1,4,"cucuBox.join.TOOLTIP_COME_BACK_LATER")," ",n.day.toLowerCase()," ",u.ic(2,6,"cucuBox.join.AT")," ",n.time," ")}}var R,_=((R=function(){function t(e,n){_classCallCheck(this,t),this.dbService=e,this.translate=n}return _createClass(t,[{key:"ngOnInit",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.cucu.avatarId&&this.cucu.avatarId.length>0&&(this.imageUrl="".concat(this.dbService.getImageBaseUrl(),"/").concat(this.cucu.avatarId)),e=new Date(this.cucu.startDate),this.time=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),Object(V.a)([this.translate.get("postCucu.TODAY"),this.translate.get("postCucu.TOMORROW")]).subscribe((function(t){var i=_slicedToArray(t,2),a=i[0],o=i[1];n.day=function(t){var e=new Date;return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}(e)?a:o})),Object(V.a)([this.translate.get("cucuBox.join.TOOLTIP_COME_BACK_LATER"),this.translate.get("cucuBox.join.AT")]).subscribe((function(t){var e=_slicedToArray(t,2),i=e[0],a=e[1];n.comebackLaterText="".concat(i," ").concat(n.day.toLowerCase()," ").concat(a," ").concat(n.time)}));case 3:case"end":return t.stop()}}),t,this)})))}},{key:"getLangEmoji",value:function(t){return function(t){return y.find((function(e){return e.short===t})).emoji}(t)}},{key:"isEnabled",value:function(){var t=new Date,e=new Date(this.cucu.startDate),n=new Date(this.cucu.startDate);return n.setMinutes(n.getMinutes()+15),e.toISOString()<t.toISOString()&&t.toISOString()<n.toISOString()}},{key:"getTooltipText",value:function(){return this.isEnabled()?"":this.comebackLaterText}},{key:"getStatus",value:function(){return this.isEnabled()?"primary":"disabled"}},{key:"toCall",value:function(){this.isEnabled()&&window.open(this.cucu.inviteUrl)}}]),t}()).\u0275fac=function(t){return new(t||R)(u.Qb(f),u.Qb(b.d))},R.\u0275cmp=u.Kb({type:R,selectors:[["app-cucu-box"]],inputs:{cucu:"cucu"},decls:10,vars:11,consts:[["size","giant",3,"picture","name","title","badgeText","badgeStatus","badgePosition"],["nbButton","","nbTooltipStatus","basic",3,"disabled","status","shape","nbTooltip","click"],["joinLaterTooltip",""]],template:function(t,e){1&t&&(u.Wb(0,"nb-card"),u.Wb(1,"nb-card-header"),u.Rb(2,"nb-user",0),u.Vb(),u.Wb(3,"nb-card-body"),u.Ac(4),u.Vb(),u.Wb(5,"nb-card-footer"),u.Wb(6,"button",1),u.ec("click",(function(){return e.toCall()})),u.Ac(7," Join "),u.Vb(),u.yc(8,A,3,8,"ng-template",null,2,u.zc),u.Vb(),u.Vb()),2&t&&(u.Eb(2),u.mc("picture",e.imageUrl)("name",e.cucu.userName)("title",e.day+" at "+e.time)("badgeText",e.cucu.language)("badgeStatus","primary")("badgePosition","bottom right"),u.Eb(2),u.Cc(" ",e.cucu.topic," "),u.Eb(2),u.mc("disabled",!1)("status",e.getStatus())("shape","rectangle")("nbTooltip",e.getTooltipText()))},directives:[p.g,p.i,p.K,p.f,p.h,p.d,p.I],pipes:[b.c],styles:[""]}),R);function x(t,e){1&t&&(u.Wb(0,"p"),u.Ac(1),u.hc(2,"translate"),u.Vb()),2&t&&(u.Eb(1),u.Bc(u.ic(2,1,"home.NO_CUCUS_FOUND")))}function I(t,e){if(1&t&&(u.Wb(0,"div",14),u.Rb(1,"app-cucu-box",15),u.Vb()),2&t){var n=e.$implicit;u.Eb(1),u.mc("cucu",n)("@simpleFadeAnimation","in")}}function P(t,e){if(1&t){var n=u.Xb();u.Wb(0,"button",16),u.ec("click",(function(){return u.sc(n),u.gc().loadMore()})),u.Ac(1),u.hc(2,"translate"),u.Vb()}2&t&&(u.mc("shape","rectangle")("size","medium"),u.Eb(1),u.Cc(" ",u.ic(2,3,"home.LOAD_MORE")," "))}var L,U=((L=function(){function t(e,n,i){_classCallCheck(this,t),this.translate=e,this.windowService=n,this.dbService=i,this.doWeHaveMore=!1}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"loadMore",value:function(){}},{key:"openVideoWindow",value:function(){this.windowService.open(l,{title:""})}}]),t}()).\u0275fac=function(t){return new(t||L)(u.Qb(b.d),u.Qb(p.N),u.Qb(f))},L.\u0275cmp=u.Kb({type:L,selectors:[["app-home"]],decls:29,vars:16,consts:[[1,"row"],[1,"col-lg-7","col-md-6"],[1,"hero-section"],[1,"vdo-section"],[3,"click"],["src","./assets/images/video-icon.svg","alt","Play button"],[1,"col-lg-5","col-md-6"],[1,"no-cucus-div","center-h"],[4,"ngIf"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"ws-s"],[1,"col-md-12","load-more-div"],["nbButton","","status","primary",3,"shape","size","click",4,"ngIf"],[1,"ws-m"],[1,"col-md-4"],[3,"cucu"],["nbButton","","status","primary",3,"shape","size","click"]],template:function(t,e){1&t&&(u.Wb(0,"div",0),u.Wb(1,"div",1),u.Wb(2,"div",2),u.Wb(3,"h1"),u.Ac(4),u.hc(5,"translate"),u.Vb(),u.Wb(6,"p"),u.Ac(7),u.hc(8,"translate"),u.Vb(),u.Wb(9,"div",3),u.Wb(10,"a",4),u.ec("click",(function(){return e.openVideoWindow()})),u.Rb(11,"img",5),u.Vb(),u.Wb(12,"a",4),u.ec("click",(function(){return e.openVideoWindow()})),u.Ac(13),u.hc(14,"translate"),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Wb(15,"div",6),u.Rb(16,"app-add-cucu"),u.Vb(),u.Vb(),u.Rb(17,"hr"),u.Wb(18,"div",0),u.Wb(19,"div",7),u.yc(20,x,3,3,"p",8),u.hc(21,"async"),u.Vb(),u.yc(22,I,2,2,"div",9),u.hc(23,"async"),u.Vb(),u.Rb(24,"div",10),u.Wb(25,"div",0),u.Wb(26,"div",11),u.yc(27,P,3,5,"button",12),u.Vb(),u.Vb(),u.Rb(28,"div",13)),2&t&&(u.Eb(4),u.Bc(u.ic(5,6,"home.HERO_HEADER")),u.Eb(3),u.Bc(u.ic(8,8,"home.HERO_TEXT")),u.Eb(6),u.Bc(u.ic(14,10,"home.DISCOVER_CUCUIT")),u.Eb(7),u.mc("ngIf",u.ic(21,12,e.dbService.cucus).length<1),u.Eb(2),u.mc("ngForOf",u.ic(23,14,e.dbService.cucus)),u.Eb(5),u.mc("ngIf",e.doWeHaveMore))},directives:[E,o.m,o.l,_,p.d],pipes:[b.c,o.b],styles:[".hero-section[_ngcontent-%COMP%]{margin:18% 15% 5% 10%}.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:55px;line-height:1}.hero-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:20px 0}.no-cucus-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;margin:0 auto;position:absolute}@media (max-width:991px){.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:50px}}.vdo-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;width:80px}.vdo-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:20px;font-size:14px;font-weight:500}.vdo-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.load-more-div[_ngcontent-%COMP%]{text-align:center}"],data:{animation:[Object(s.j)("simpleFadeAnimation",[Object(s.g)("in",Object(s.h)({opacity:1})),Object(s.i)(":enter",[Object(s.h)({opacity:0}),Object(s.e)(600)]),Object(s.i)(":leave",Object(s.e)(600,Object(s.h)({opacity:0})))])]}}),L),M=n("yXpV"),j=n("NICT");n.d(e,"HomeModule",(function(){return B}));var D,z=[{path:"",component:U}],B=((D=function t(){_classCallCheck(this,t)}).\u0275mod=u.Ob({type:D}),D.\u0275inj=u.Nb({factory:function(t){return new(t||D)},imports:[[o.c,c.e,b.b,r.g.forChild(z),p.M.forChild(),M.a,j.a,p.e]]}),D)},mrSG:function(t,e,n){"use strict";function i(t,e,n,i){return new(n||(n=Promise))((function(a,o){function c(t){try{s(i.next(t))}catch(e){o(e)}}function r(t){try{s(i.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,r)}s((i=i.apply(t,e||[])).next())}))}n.d(e,"a",(function(){return i}))}}]);