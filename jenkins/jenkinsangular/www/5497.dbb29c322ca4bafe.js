"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[5497],{5497:(u,i,t)=>{t.r(i),t.d(i,{AuthModule:()=>c});var h=t(6814),a=t(5628),l=t(9467),d=t(3076);let r=(()=>{class n{constructor(s,o){this.userService=s,this.router=o}canActivate(s,o){return!!this.userService.getpermisoMatricula()||(console.log("Sin permisos para generar matr\xedcula"),this.router.navigate([""]),!1)}static#t=this.\u0275fac=function(o){return new(o||n)(l.LFG(d.K),l.LFG(a.F0))};static#n=this.\u0275prov=l.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),e=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=l.oAB({type:n});static#s=this.\u0275inj=l.cJS({imports:[a.Bz.forChild([{path:"error",loadChildren:()=>t.e(5938).then(t.bind(t,5938)).then(s=>s.ErrorModule)},{path:"access",loadChildren:()=>t.e(6324).then(t.bind(t,6324)).then(s=>s.AccessModule)},{path:"registrarse",loadChildren:()=>Promise.all([t.e(9663),t.e(4701)]).then(t.bind(t,8181)).then(s=>s.RegistrarseModule)},{path:"login",loadChildren:()=>Promise.resolve().then(t.bind(t,2105)).then(s=>s.LoginModule)},{path:"matricula",loadChildren:()=>Promise.all([t.e(3259),t.e(3965),t.e(8592),t.e(3248)]).then(t.bind(t,3248)).then(s=>s.matriculaModule),canActivate:[r]},{path:"**",redirectTo:"/notfound"}]),a.Bz]})}return n})(),c=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=l.oAB({type:n});static#s=this.\u0275inj=l.cJS({imports:[h.ez,e]})}return n})()}}]);