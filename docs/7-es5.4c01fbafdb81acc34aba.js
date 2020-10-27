function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{PE4y:function(n,e,t){"use strict";t.r(e);var c,i=t("2Vo4"),a=t("fXoL"),o=t("sYmb"),r=t("jhN1"),s=t("ofXK"),b=((c=function(){function n(e,t){var c=this;_classCallCheck(this,n),this.translate=e,this.sanitizer=t,this.videoUrl=new i.a(null),this.setVideoForLang(),e.onLangChange.subscribe((function(){c.setVideoForLang()}))}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"setVideoForLang",value:function(){var n="";switch(this.translate.currentLang){case"es":n="B7ONCJFeMKQ";break;case"it":n="DznpJztZhqc";break;default:n="9rdY_upgX4Y"}this.videoUrl.next("https://www.youtube.com/embed/".concat(n,"?&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0'"))}}]),n}()).\u0275fac=function(n){return new(n||c)(a.Qb(o.d),a.Qb(r.b))},c.\u0275cmp=a.Kb({type:c,selectors:[["app-how"]],decls:43,vars:39,consts:[[1,"content-padding"],[1,"container-fluid"],[1,"row"],[1,"col-lg-12"],[3,"innerHTML"],[1,"col"],[1,"ws-m"]],template:function(n,e){1&n&&(a.Wb(0,"div",0),a.Wb(1,"div",1),a.Wb(2,"div",2),a.Wb(3,"div",3),a.Wb(4,"h1"),a.Cc(5),a.jc(6,"translate"),a.Vb(),a.Rb(7,"p",4),a.jc(8,"async"),a.Vb(),a.Vb(),a.Wb(9,"div",2),a.Wb(10,"div",5),a.Rb(11,"div",6),a.Wb(12,"h1"),a.Cc(13),a.jc(14,"translate"),a.Vb(),a.Rb(15,"p",4),a.jc(16,"async"),a.Rb(17,"div",6),a.Wb(18,"h1"),a.Cc(19),a.jc(20,"translate"),a.Vb(),a.Wb(21,"h2"),a.Cc(22),a.jc(23,"translate"),a.Vb(),a.Rb(24,"p",4),a.jc(25,"async"),a.Wb(26,"h2"),a.Cc(27),a.jc(28,"translate"),a.Vb(),a.Rb(29,"p",4),a.jc(30,"async"),a.Wb(31,"h2"),a.Cc(32),a.jc(33,"translate"),a.Vb(),a.Rb(34,"p",4),a.jc(35,"async"),a.Wb(36,"h2"),a.Cc(37),a.jc(38,"translate"),a.Vb(),a.Rb(39,"p",4),a.jc(40,"async"),a.Rb(41,"div",6),a.Vb(),a.Vb(),a.Rb(42,"div",6),a.Vb(),a.Vb()),2&n&&(a.Eb(5),a.Dc(a.kc(6,13,"manifest.paragraph1.TITLE")),a.Eb(2),a.oc("innerHTML",a.kc(8,15,e.translate.get("manifest.paragraph1.TEXT")),a.vc),a.Eb(6),a.Dc(a.kc(14,17,"manifest.paragraph2.TITLE")),a.Eb(2),a.oc("innerHTML",a.kc(16,19,e.translate.get("manifest.paragraph2.TEXT")),a.vc),a.Eb(4),a.Dc(a.kc(20,21,"how.TITLE")),a.Eb(3),a.Dc(a.kc(23,23,"how.description1.TITLE")),a.Eb(2),a.oc("innerHTML",a.kc(25,25,e.translate.get("how.description1.TEXT")),a.vc),a.Eb(3),a.Dc(a.kc(28,27,"how.description2.TITLE")),a.Eb(2),a.oc("innerHTML",a.kc(30,29,e.translate.get("how.description2.TEXT")),a.vc),a.Eb(3),a.Dc(a.kc(33,31,"how.description3.TITLE")),a.Eb(2),a.oc("innerHTML",a.kc(35,33,e.translate.get("how.description3.TEXT")),a.vc),a.Eb(3),a.Dc(a.kc(38,35,"how.description4.TITLE")),a.Eb(2),a.oc("innerHTML",a.kc(40,37,e.translate.get("how.description4.TEXT")),a.vc))},pipes:[o.c,s.b],styles:["h1[_ngcontent-%COMP%]{text-transform:uppercase}h2[_ngcontent-%COMP%]{font-size:18px}.video-container-div[_ngcontent-%COMP%]{margin-top:5rem;width:100%;padding:1rem}.video-container-div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:56.25% 0 0;position:relative}.video-container-div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}"],changeDetection:0}),c),p=t("tyNb"),l=t("3Pt+"),d=t("iTUp");t.d(e,"HowModule",(function(){return u}));var h,f=[{path:"",component:b}],u=((h=function n(){_classCallCheck(this,n)}).\u0275mod=a.Ob({type:h}),h.\u0275inj=a.Nb({factory:function(n){return new(n||h)},imports:[[s.c,l.e,o.b,p.h.forChild(f),d.a]]}),h)}}]);