const __vite__fileDeps=["../nodes/0.CVHUTZi_.js","../chunks/scheduler.CXdCB_cC.js","../chunks/index.CUASuJes.js","../chunks/store.DWicTl5_.js","../chunks/index.C9VkzXoS.js","../assets/0.Ducdkonj.css","../nodes/1.CQTSVaFN.js","../chunks/entry.DHYWvJo9.js","../nodes/2.ks_HNWoB.js","../nodes/3.Ds3sVm6t.js","../chunks/each.D6YF6ztN.js","../nodes/4.Cvd6y8m2.js","../chunks/constants.BWkPU7VE.js","../assets/4.CJMefS5w.css","../nodes/5.D-R0BFKW.js","../assets/5.f2X1d7s-.css","../nodes/6.BizMmehD.js","../assets/6.KawP5q9q.css","../nodes/7._QeeIcsX.js","../assets/7.C8PzFQz7.css","../nodes/8.hLRL5Qn-.js","../assets/8.KV99yLbe.css","../nodes/9.BFMhdhmx.js","../assets/9.CdtleYno.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as C,a as B,K as h,d as U,i as v,f as g,L as z,o as J,e as K,c as W,b as j,h as D,M as d,x as F,y as G,z as H,J as I,N as R,O as Q}from"../chunks/scheduler.CXdCB_cC.js";import{S as X,i as Y,a as w,e as A,t as b,g as O,c as y,b as T,m as L,d as P}from"../chunks/index.CUASuJes.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},V={},p=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),s=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(o=>{if(o=M(o,i),o in V)return;V[o]=!0;const f=o.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!i)for(let E=_.length-1;E>=0;E--){const k=_[E];if(k.href===o&&(!f||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":Z,f||(u.as="script",u.crossOrigin=""),u.href=o,s&&u.setAttribute("nonce",s),document.head.appendChild(u),f)return new Promise((E,k)=>{u.addEventListener("load",E),u.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},se={};function $(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=R(r,_(a)),a[12](e)),{c(){e&&y(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&L(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){O();const o=e;w(o.$$.fragment,1,0,()=>{P(o,1)}),A()}r?(e=R(r,_(t)),t[12](e),y(e.$$.fragment),b(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&b(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[12](null),e&&P(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=R(r,_(a)),a[11](e)),{c(){e&&y(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&L(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){O();const o=e;w(o.$$.fragment,1,0,()=>{P(o,1)}),A()}r?(e=R(r,_(t)),t[11](e),y(e.$$.fragment),b(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&8215&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)}},i(t){i||(e&&b(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[11](null),e&&P(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function _(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=R(r,_(a)),a[10](e)),{c(){e&&y(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&L(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){O();const o=e;w(o.$$.fragment,1,0,()=>{P(o,1)}),A()}r?(e=R(r,_(t)),t[10](e),y(e.$$.fragment),b(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const o={};s&16&&(o.data=t[4]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&b(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[10](null),e&&P(e,t)}}}function S(a){let e,n=a[6]&&N(a);return{c(){e=K("div"),n&&n.c(),this.h()},l(i){e=W(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=j(e);n&&n.l(r),r.forEach(g),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,r){v(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=N(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function N(a){let e;return{c(){e=F(a[7])},l(n){e=G(n,a[7])},m(n,i){v(n,e,i)},p(n,i){i&128&&H(e,n[7])},d(n){n&&g(e)}}}function te(a){let e,n,i,r,_;const t=[x,$],s=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=s[e]=t[e](a);let f=a[5]&&S(a);return{c(){n.c(),i=B(),f&&f.c(),r=h()},l(l){n.l(l),i=U(l),f&&f.l(l),r=h()},m(l,m){s[e].m(l,m),v(l,i,m),f&&f.m(l,m),v(l,r,m),_=!0},p(l,[m]){let u=e;e=o(l),e===u?s[e].p(l,m):(O(),w(s[u],1,1,()=>{s[u]=null}),A(),n=s[e],n?n.p(l,m):(n=s[e]=t[e](l),n.c()),b(n,1),n.m(i.parentNode,i)),l[5]?f?f.p(l,m):(f=S(l),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null)},i(l){_||(b(n),_=!0)},o(l){w(n),_=!1},d(l){l&&(g(i),g(r)),s[e].d(l),f&&f.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:s}=e,{data_0:o=null}=e,{data_1:f=null}=e;z(i.page.notify);let l=!1,m=!1,u=null;J(()=>{const c=i.page.subscribe(()=>{l&&(n(6,m=!0),Q().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),c});function E(c){I[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function k(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function q(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,r=c.page),"constructors"in c&&n(1,_=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,s=c.form),"data_0"in c&&n(3,o=c.data_0),"data_1"in c&&n(4,f=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,s,o,f,l,m,u,i,r,E,k,q]}class oe extends X{constructor(e){super(),Y(this,e,ne,te,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>p(()=>import("../nodes/0.CVHUTZi_.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>p(()=>import("../nodes/1.CQTSVaFN.js"),__vite__mapDeps([6,1,2,7,4]),import.meta.url),()=>p(()=>import("../nodes/2.ks_HNWoB.js"),__vite__mapDeps([8,1,2,7,4]),import.meta.url),()=>p(()=>import("../nodes/3.Ds3sVm6t.js"),__vite__mapDeps([9,1,10,2,7,4,3]),import.meta.url),()=>p(()=>import("../nodes/4.Cvd6y8m2.js"),__vite__mapDeps([11,1,10,2,3,4,7,12,13]),import.meta.url),()=>p(()=>import("../nodes/5.D-R0BFKW.js"),__vite__mapDeps([14,1,2,10,3,4,7,15]),import.meta.url),()=>p(()=>import("../nodes/6.BizMmehD.js"),__vite__mapDeps([16,1,2,10,3,4,7,17]),import.meta.url),()=>p(()=>import("../nodes/7._QeeIcsX.js"),__vite__mapDeps([18,1,2,7,4,19]),import.meta.url),()=>p(()=>import("../nodes/8.hLRL5Qn-.js"),__vite__mapDeps([20,1,2,10,4,7,3,21]),import.meta.url),()=>p(()=>import("../nodes/9.BFMhdhmx.js"),__vite__mapDeps([22,1,2,3,4,7,12,23]),import.meta.url)],le=[],fe={"/":[2],"/avatars":[3],"/details":[4],"/posttest":[5],"/pretest":[6],"/privacy":[7],"/questions":[8],"/submission":[9]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};