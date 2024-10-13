"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[9206],{9206:(Z,p,e)=>{e.r(p),e.d(p,{ClasesModule:()=>P});var o=e(6814),h=e(95),g=e(9552),v=e(3722),f=e(707),l=e(4480),y=e(4104),c=e(6340),r=e(6022),d=e(3714),m=e(6218),x=e(3965),S=e(1865),T=e(5167),A=e(2169),C=e(8057),z=e(7853),O=e(3259),E=e(3530),U=e(9663),b=e(5628),t=e(9467),F=e(670),R=e(1330),D=e(6593);const I=()=>({width:"2.5rem",height:"2.5rem"});function B(s,M){if(1&s&&(t.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"div")(4,"span",11),t._uU(5),t.qZA(),t.TgZ(6,"div",12),t._uU(7),t.qZA()(),t.TgZ(8,"div",13),t._UZ(9,"i",14),t.qZA()(),t.TgZ(10,"span",15),t._uU(11,"5 "),t.qZA(),t.TgZ(12,"span",16),t._uU(13,"Tareas nuevas"),t.qZA()()()),2&s){const n=M.$implicit;t.xp6(5),t.Oqu(n.nombre),t.xp6(2),t.Oqu(n.descripcion),t.xp6(1),t.Q6J("ngStyle",t.DdM(3,I))}}function J(s,M){if(1&s&&(t.TgZ(0,"div",17)(1,"div",18),t._uU(2),t.qZA(),t.TgZ(3,"div",19),t._uU(4),t.qZA(),t.TgZ(5,"ul",20)(6,"li",21)(7,"div",22),t._uU(8,"Video"),t.qZA(),t.TgZ(9,"div",23),t._UZ(10,"iframe",24),t.qZA()(),t.TgZ(11,"li",21)(12,"div",22),t._uU(13,"PDF"),t.qZA(),t.TgZ(14,"div",22)(15,"a",25),t._uU(16,"Recurso PDF"),t.qZA()()(),t.TgZ(17,"li",21)(18,"div",22),t._uU(19,"Link de la clase"),t.qZA(),t.TgZ(20,"div",23)(21,"a",25),t._uU(22,"Link de la clase"),t.qZA()()()()()),2&s){const n=M.$implicit,i=t.oxw();t.xp6(2),t.Oqu(n.nombre),t.xp6(2),t.Oqu(n.descripcion),t.xp6(6),t.Q6J("src",i.sanitizer.bypassSecurityTrustResourceUrl(i.getYouTubeEmbedUrl(n.video)),t.uOi),t.xp6(5),t.Q6J("href",n.pdf,t.LSH),t.xp6(6),t.Q6J("href",n.link,t.LSH)}}let Y=(()=>{class s{constructor(n,i,a,u){this.route=n,this.materiasService=i,this.clasesService=a,this.sanitizer=u,this.materias=[],this.clases=[]}ngOnInit(){this.route.paramMap.subscribe(n=>{this.idMateria=n.get("idMateria"),console.log(this.idMateria),this.materiasService.getMaterias(this.idMateria).subscribe(i=>{if(console.log(i),this.materias=i,this.selectedMateria=this.materias.find(a=>a.idMateria===parseInt(this.idMateria,10)),console.log("materia selecciionada",this.selectedMateria),""!=this.idMateria){const a={idMateria:1};console.log(JSON.stringify(a)),this.clasesService.getClases(JSON.stringify(a)).subscribe(u=>{console.log(u),this.clases=u.filter(L=>L.visible)},u=>{console.log("Error al obtener las clases:",u)})}},i=>{console.log("Error al obtener las materias:",i)})})}getYouTubeEmbedUrl(n){const i=n.split("v=")[1],a=i.indexOf("&");return-1!==a?"https://www.youtube.com/embed/"+i.substring(0,a):"https://www.youtube.com/embed/"+i}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(b.gz),t.Y36(F.C),t.Y36(R.u),t.Y36(D.H7))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-clases"]],decls:12,vars:4,consts:[[1,"surface-section","px-4","py-8","md:px-6","lg:px-8","card"],[1,"text-700","text-center"],[1,"text-blue-600","font-bold","mb-3"],[1,"text-900","font-bold","text-5xl","mb-3"],[1,"text-700","text-2xl","mb-5"],[1,"grid"],["class","col-12 lg:col-6 xl:col-3",4,"ngFor","ngForOf"],["class","surface-section card",4,"ngFor","ngForOf"],[1,"col-12","lg:col-6","xl:col-3"],[1,"card","mb-0"],[1,"flex","justify-content-between","mb-3"],[1,"block","text-500","font-medium","mb-3"],[1,"text-900","font-medium","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-blue-100","border-round",3,"ngStyle"],[1,"pi","pi-book","text-blue-500","text-xl"],[1,"text-green-500","font-medium"],[1,"text-500"],[1,"surface-section","card"],[1,"text-500","mb-5"],[1,"font-medium","text-3xl","text-900","mb-3"],[1,"list-none","p-0","m-0"],[1,"flex","align-items-center","py-3","px-2","border-top-1","surface-border","flex-wrap"],[1,"text-500","w-6","md:w-2","font-medium"],[1,"text-900","w-full","md:w-8","md:flex-order-0","flex-order-1"],["width","600","height","400","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"],["target","_blank",3,"href"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"i"),t._uU(4,"\xa0Materia"),t.qZA(),t.TgZ(5,"div",3),t._uU(6),t.qZA(),t.TgZ(7,"div",4),t._uU(8),t.qZA()()(),t.TgZ(9,"div",5),t.YNc(10,B,14,4,"div",6),t.qZA(),t.YNc(11,J,23,5,"div",7)),2&i&&(t.xp6(6),t.Oqu(a.selectedMateria.nombre),t.xp6(2),t.Oqu(a.selectedMateria.descripcion),t.xp6(2),t.Q6J("ngForOf",a.clases),t.xp6(1),t.Q6J("ngForOf",a.clases))},dependencies:[o.sg,o.PC],encapsulation:2})}return s})(),H=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#i=this.\u0275inj=t.cJS({imports:[b.Bz.forChild([{path:":idMateria",component:Y}]),b.Bz]})}return s})(),P=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#i=this.\u0275inj=t.cJS({imports:[o.ez,H,g.U$,v.O,h.u5,f.hJ,l.T,y.EV,c.V,r.Xt,d.j,m.A,x.kW,S.cc,T.L$,A.o,C.nD,z.gz,O.z,E.S,U.zz,o.ez]})}return s})()},6218:(Z,p,e)=>{e.d(p,{A:()=>f,g:()=>v});var o=e(9467),h=e(6814),g=e(95);let v=(()=>{class l{el;ngModel;control;cd;autoResize;onResize=new o.vpe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(c,r,d,m){this.el=c,this.ngModel=r,this.control=d,this.cd=m}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewChecked(){this.updateState()}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(c){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(c){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(c||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(r){return new(r||l)(o.Y36(o.SBq),o.Y36(g.On,8),o.Y36(g.a5,8),o.Y36(o.sBO))};static \u0275dir=o.lG2({type:l,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(r,d){1&r&&o.NdJ("input",function(x){return d.onInput(x)}),2&r&&o.ekj("p-filled",d.filled)("p-inputtextarea-resizable",d.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return l})(),f=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=o.oAB({type:l});static \u0275inj=o.cJS({imports:[h.ez]})}return l})()}}]);