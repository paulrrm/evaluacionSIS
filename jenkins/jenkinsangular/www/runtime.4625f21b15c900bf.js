(()=>{"use strict";var e,v={},m={};function a(e){var b=m[e];if(void 0!==b)return b.exports;var r=m[e]={exports:{}};return v[e](r,r.exports,a),r.exports}a.m=v,e=[],a.O=(b,r,d,c)=>{if(!r){var t=1/0;for(f=0;f<e.length;f++){for(var[r,d,c]=e[f],u=!0,n=0;n<r.length;n++)(!1&c||t>=c)&&Object.keys(a.O).every(p=>a.O[p](r[n]))?r.splice(n--,1):(u=!1,c<t&&(t=c));if(u){e.splice(f--,1);var o=d();void 0!==o&&(b=o)}}return b}c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[r,d,c]},a.d=(e,b)=>{for(var r in b)a.o(b,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:b[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((b,r)=>(a.f[r](e,b),b),[])),a.u=e=>(8592===e?"common":e)+"."+{47:"e62051c1879be734",74:"7cfc851f05b0cb29",639:"f45de9d18c5fdfa2",1122:"32afb399af16d172",1192:"a16064bd7c636e08",1230:"77019a2f457328aa",1331:"82fc926284726748",1732:"ec0c38ec595ab06a",1896:"92942adbd07aa623",2151:"2081bb6012571522",2582:"d51f6197ae28f842",2652:"7ae17c0c289e2b34",2752:"1bf6d2384044a495",2811:"42c5161c9f4acd31",2947:"5ee7329b736b976c",3248:"250d8000e63961ba",3255:"3140e703bc980596",3259:"d99213069f93a132",3280:"adad2db4e109fa82",3530:"aaaed21acfe72a21",3693:"20b1b58d57353e55",3722:"1231a34afab2b13d",3794:"079994b7ecc4cbc6",3844:"9c592fd018566933",3965:"3669f56b0d99bc52",4055:"2a0f4d3084547168",4701:"1213c852bf056a2f",4887:"bfad4aa4a0cab279",5186:"e9d0bef56d0997aa",5212:"444ec080cf8a5f79",5289:"4dca758c313cf052",5497:"dbb29c322ca4bafe",5800:"13e6847016829a85",5832:"7290a5b845fc1fa6",5938:"b551ae0898f4f65b",6022:"71be3c89ebe920aa",6324:"2b955f45e5f19d4f",6426:"420040728bb2bd7c",6443:"23ba17483264555a",6760:"0935e219f2b2990a",6824:"258a83aee8e46769",6942:"300dee78ab787b2f",7471:"9488e2d8ca53a0f9",7493:"762cafae7db9d295",8167:"49818250e14fde7c",8549:"50562c2da32b75d3",8592:"a96f57a7d17b250a",8628:"94b8fdd8d3ec24d4",9206:"9e9b1f04c87247b2",9252:"4f61c18797026bec",9552:"c1cc2a343e9540b7",9663:"5d0af43b5bda9006"}[e]+".js",a.miniCssF=e=>{},a.o=(e,b)=>Object.prototype.hasOwnProperty.call(e,b),(()=>{var e={},b="sakai-ng:";a.l=(r,d,c,f)=>{if(e[r])e[r].push(d);else{var t,u;if(void 0!==c)for(var n=document.getElementsByTagName("script"),o=0;o<n.length;o++){var i=n[o];if(i.getAttribute("src")==r||i.getAttribute("data-webpack")==b+c){t=i;break}}t||(u=!0,(t=document.createElement("script")).type="module",t.charset="utf-8",t.timeout=120,a.nc&&t.setAttribute("nonce",a.nc),t.setAttribute("data-webpack",b+c),t.src=a.tu(r)),e[r]=[d];var l=(g,p)=>{t.onerror=t.onload=null,clearTimeout(s);var _=e[r];if(delete e[r],t.parentNode&&t.parentNode.removeChild(t),_&&_.forEach(h=>h(p)),g)return g(p)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),u&&document.head.appendChild(t)}}})(),a.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:b=>b},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="",(()=>{var e={3666:0};a.f.j=(d,c)=>{var f=a.o(e,d)?e[d]:void 0;if(0!==f)if(f)c.push(f[2]);else if(3666!=d){var t=new Promise((i,l)=>f=e[d]=[i,l]);c.push(f[2]=t);var u=a.p+a.u(d),n=new Error;a.l(u,i=>{if(a.o(e,d)&&(0!==(f=e[d])&&(e[d]=void 0),f)){var l=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;n.message="Loading chunk "+d+" failed.\n("+l+": "+s+")",n.name="ChunkLoadError",n.type=l,n.request=s,f[1](n)}},"chunk-"+d,d)}else e[d]=0},a.O.j=d=>0===e[d];var b=(d,c)=>{var n,o,[f,t,u]=c,i=0;if(f.some(s=>0!==e[s])){for(n in t)a.o(t,n)&&(a.m[n]=t[n]);if(u)var l=u(a)}for(d&&d(c);i<f.length;i++)a.o(e,o=f[i])&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},r=self.webpackChunksakai_ng=self.webpackChunksakai_ng||[];r.forEach(b.bind(null,0)),r.push=b.bind(null,r.push.bind(r))})()})();