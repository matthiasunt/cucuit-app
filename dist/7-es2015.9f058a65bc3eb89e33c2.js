(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{PE4y:function(t,n,e){"use strict";e.r(n);var c=e("2Vo4"),i=e("fXoL"),r=e("sYmb"),o=e("jhN1"),a=e("ofXK");let s=(()=>{class t{constructor(t){this.sanitizer=t}transform(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)}}return t.\u0275fac=function(n){return new(n||t)(i.Qb(o.b))},t.\u0275pipe=i.Pb({name:"sanitizeUrl",type:t,pure:!0}),t})();function b(t,n){if(1&t&&(i.Wb(0,"div",9),i.Wb(1,"div"),i.Rb(2,"iframe",10),i.jc(3,"sanitizeUrl"),i.jc(4,"async"),i.Vb(),i.Vb()),2&t){const t=i.ic();i.Eb(2),i.oc("src",i.kc(3,1,i.kc(4,3,t.videoUrl)),i.wc)}}let d=(()=>{class t{constructor(t,n){this.translate=t,this.sanitizer=n,this.videoUrl=new c.a(null),this.setVideoForLang(),t.onLangChange.subscribe(()=>{this.setVideoForLang()})}ngOnInit(){}setVideoForLang(){let t="";switch(this.translate.currentLang){case"es":t="B7ONCJFeMKQ";break;case"it":t="DznpJztZhqc";break;default:t="9rdY_upgX4Y"}this.videoUrl.next(`https://www.youtube.com/embed/${t}?&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0'`)}}return t.\u0275fac=function(n){return new(n||t)(i.Qb(r.d),i.Qb(o.b))},t.\u0275cmp=i.Kb({type:t,selectors:[["app-how"]],decls:46,vars:42,consts:[[1,"content-padding"],[1,"container-fluid"],[1,"row"],[1,"col-lg-5"],[3,"innerHTML"],[1,"col-lg-7"],["class","video-container-div",4,"ngIf"],[1,"col"],[1,"ws-m"],[1,"video-container-div"],["frameborder","0","allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"]],template:function(t,n){if(1&t&&(i.Wb(0,"div",0),i.Wb(1,"div",1),i.Wb(2,"div",2),i.Wb(3,"div",3),i.Wb(4,"h1"),i.Dc(5),i.jc(6,"translate"),i.Vb(),i.Rb(7,"p",4),i.jc(8,"async"),i.Vb(),i.Wb(9,"div",5),i.Bc(10,b,5,5,"div",6),i.jc(11,"async"),i.Vb(),i.Vb(),i.Wb(12,"div",2),i.Wb(13,"div",7),i.Rb(14,"div",8),i.Wb(15,"h1"),i.Dc(16),i.jc(17,"translate"),i.Vb(),i.Rb(18,"p",4),i.jc(19,"async"),i.Rb(20,"div",8),i.Wb(21,"h1"),i.Dc(22),i.jc(23,"translate"),i.Vb(),i.Wb(24,"h2"),i.Dc(25),i.jc(26,"translate"),i.Vb(),i.Rb(27,"p",4),i.jc(28,"async"),i.Wb(29,"h2"),i.Dc(30),i.jc(31,"translate"),i.Vb(),i.Rb(32,"p",4),i.jc(33,"async"),i.Wb(34,"h2"),i.Dc(35),i.jc(36,"translate"),i.Vb(),i.Rb(37,"p",4),i.jc(38,"async"),i.Wb(39,"h2"),i.Dc(40),i.jc(41,"translate"),i.Vb(),i.Rb(42,"p",4),i.jc(43,"async"),i.Rb(44,"div",8),i.Vb(),i.Vb(),i.Rb(45,"div",8),i.Vb(),i.Vb()),2&t){var e;const t=(null==(e=i.kc(11,18,n.videoUrl))?null:e.length)>0;i.Eb(5),i.Ec(i.kc(6,14,"manifest.paragraph1.TITLE")),i.Eb(2),i.oc("innerHTML",i.kc(8,16,n.translate.get("manifest.paragraph1.TEXT")),i.vc),i.Eb(3),i.oc("ngIf",t),i.Eb(6),i.Ec(i.kc(17,20,"manifest.paragraph2.TITLE")),i.Eb(2),i.oc("innerHTML",i.kc(19,22,n.translate.get("manifest.paragraph2.TEXT")),i.vc),i.Eb(4),i.Ec(i.kc(23,24,"how.TITLE")),i.Eb(3),i.Ec(i.kc(26,26,"how.description1.TITLE")),i.Eb(2),i.oc("innerHTML",i.kc(28,28,n.translate.get("how.description1.TEXT")),i.vc),i.Eb(3),i.Ec(i.kc(31,30,"how.description2.TITLE")),i.Eb(2),i.oc("innerHTML",i.kc(33,32,n.translate.get("how.description2.TEXT")),i.vc),i.Eb(3),i.Ec(i.kc(36,34,"how.description3.TITLE")),i.Eb(2),i.oc("innerHTML",i.kc(38,36,n.translate.get("how.description3.TEXT")),i.vc),i.Eb(3),i.Ec(i.kc(41,38,"how.description4.TITLE")),i.Eb(2),i.oc("innerHTML",i.kc(43,40,n.translate.get("how.description4.TEXT")),i.vc)}},directives:[a.m],pipes:[r.c,a.b,s],styles:["h1[_ngcontent-%COMP%]{text-transform:uppercase}h2[_ngcontent-%COMP%]{font-size:18px}.video-container-div[_ngcontent-%COMP%]{margin-top:5rem;width:100%;padding:1rem}.video-container-div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:56.25% 0 0;position:relative}.video-container-div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}"],changeDetection:0}),t})();var l=e("tyNb"),p=e("3Pt+"),h=e("iTUp");e.d(n,"HowModule",(function(){return u}));const v=[{path:"",component:d}];let u=(()=>{class t{}return t.\u0275mod=i.Ob({type:t}),t.\u0275inj=i.Nb({factory:function(n){return new(n||t)},imports:[[a.c,p.e,r.b,l.g.forChild(v),h.a]]}),t})()}}]);