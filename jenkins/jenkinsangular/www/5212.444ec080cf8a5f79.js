"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[5212],{5212:(T,p,n)=>{n.r(p),n.d(p,{FileDemoModule:()=>U});var l=n(6814),u=n(95),c=n(3722),m=n(5628),a=n(5219),e=n(9467);function r(t,s){if(1&t&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&t){const o=s.$implicit;e.xp6(1),e.AsE("",o.name," - ",o.size," bytes")}}function f(t,s){if(1&t&&(e.TgZ(0,"ul"),e.YNc(1,r,2,2,"li",7),e.qZA()),2&t){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.uploadedFiles)}}function g(t,s){if(1&t&&e.YNc(0,f,2,1,"ul",6),2&t){const o=e.oxw();e.Q6J("ngIf",o.uploadedFiles.length)}}let F=(()=>{class t{constructor(o){this.messageService=o,this.uploadedFiles=[]}onUpload(o){for(const i of o.files)this.uploadedFiles.push(i);this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded"})}onBasicUpload(){this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded with Basic Mode"})}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(a.ez))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],features:[e._Bn([a.ez])],decls:10,vars:3,consts:[[1,"grid"],[1,"col-12"],[1,"card"],["name","demo[]","url","./upload.php","accept","image/*",3,"multiple","maxFileSize","onUpload"],["pTemplate","content"],["mode","basic","name","demo[]","url","./upload.php","accept","image/*",3,"maxFileSize","onUpload"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(i,d){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),e._uU(4,"Advanced"),e.qZA(),e.TgZ(5,"p-fileUpload",3),e.NdJ("onUpload",function(x){return d.onUpload(x)}),e.YNc(6,g,1,1,"ng-template",4),e.qZA(),e.TgZ(7,"h5"),e._uU(8,"Basic"),e.qZA(),e.TgZ(9,"p-fileUpload",5),e.NdJ("onUpload",function(){return d.onBasicUpload()}),e.qZA()()()()),2&i&&(e.xp6(5),e.Q6J("multiple",!0)("maxFileSize",1e6),e.xp6(4),e.Q6J("maxFileSize",1e6))},dependencies:[l.sg,l.O5,c.p,a.jx],encapsulation:2})}return t})(),h=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({imports:[m.Bz.forChild([{path:"",component:F}]),m.Bz]})}return t})(),U=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({imports:[l.ez,u.u5,h,c.O]})}return t})()}}]);