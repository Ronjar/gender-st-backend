const __vite__fileDeps=["../nodes/0.BL992LDd.js","../chunks/scheduler.Du_WS53y.js","../chunks/index.BEvaicvu.js","../chunks/store.DLfTZ2jX.js","../chunks/index.B4nj-uY_.js","../assets/0.9K30805v.css","../nodes/1.DmMwKeuR.js","../chunks/entry.CcUSfJbD.js","../nodes/2.CuNsKuC1.js","../nodes/3.DfsfsMI9.js","../nodes/4.DLzYX6Ik.js","../chunks/constants.BWkPU7VE.js","../chunks/Toast.yQ2Aj9rA.js","../assets/4.B1M7S21E.css","../nodes/5.Du5kPfdr.js","../chunks/each.D6YF6ztN.js","../nodes/6.CwWquQ5h.js","../assets/6.KawP5q9q.css","../nodes/7.Bt9cIEXI.js","../chunks/FormToast.D1YKLeZa.js","../assets/7.9nVRX-7i.css","../nodes/8.DFxsLkEV.js","../assets/8.C8PzFQz7.css","../nodes/9.QnIf9tzI.js","../assets/9.B-aruS2W.css","../nodes/10.DF7fuxKW.js","../assets/10.B_P9dM-Q.css","../nodes/11.DQRSY95g.js","../nodes/12.CgD9ntLs.js","../assets/12.DilQfNq5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as U,b as j,D as p,i as W,l as b,j as g,M as z,o as F,e as G,d as H,f as J,k as V,N as R,v as K,w as Q,x as X,E as I,O as E,P as Y}from"../chunks/scheduler.Du_WS53y.js";import{S as Z,i as M,a as d,e as A,t as h,g as D,c as k,b as T,m as v,d as P}from"../chunks/index.BEvaicvu.js";const x="modulepreload",ee=function(a,e){return new URL(a,e).href},y={},w=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),o=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(i=>{if(i=ee(i,s),i in y)return;y[i]=!0;const _=i.endsWith(".css"),l=_?'[rel="stylesheet"]':"";if(!!s)for(let L=c.length-1;L>=0;L--){const O=c[L];if(O.href===i&&(!_||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=_?"stylesheet":x,_||(u.as="script",u.crossOrigin=""),u.href=i,o&&u.setAttribute("nonce",o),document.head.appendChild(u),_)return new Promise((L,O)=>{u.addEventListener("load",L),u.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},ce={};function te(a){let e,n,s;var r=a[1][0];function c(t,o){return{props:{data:t[3],form:t[2]}}}return r&&(e=E(r,c(a)),a[15](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,o){e&&v(e,t,o),b(t,n,o),s=!0},p(t,o){if(o&2&&r!==(r=t[1][0])){if(e){D();const i=e;d(i.$$.fragment,1,0,()=>{P(i,1)}),A()}r?(e=E(r,c(t)),t[15](e),k(e.$$.fragment),h(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};o&8&&(i.data=t[3]),o&4&&(i.form=t[2]),e.$set(i)}},i(t){s||(e&&h(e.$$.fragment,t),s=!0)},o(t){e&&d(e.$$.fragment,t),s=!1},d(t){t&&g(n),a[15](null),e&&P(e,t)}}}function ne(a){let e,n,s;var r=a[1][0];function c(t,o){return{props:{data:t[3],$$slots:{default:[oe]},$$scope:{ctx:t}}}}return r&&(e=E(r,c(a)),a[14](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,o){e&&v(e,t,o),b(t,n,o),s=!0},p(t,o){if(o&2&&r!==(r=t[1][0])){if(e){D();const i=e;d(i.$$.fragment,1,0,()=>{P(i,1)}),A()}r?(e=E(r,c(t)),t[14](e),k(e.$$.fragment),h(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};o&8&&(i.data=t[3]),o&65591&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)}},i(t){s||(e&&h(e.$$.fragment,t),s=!0)},o(t){e&&d(e.$$.fragment,t),s=!1},d(t){t&&g(n),a[14](null),e&&P(e,t)}}}function ie(a){let e,n,s;var r=a[1][1];function c(t,o){return{props:{data:t[4],form:t[2]}}}return r&&(e=E(r,c(a)),a[13](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,o){e&&v(e,t,o),b(t,n,o),s=!0},p(t,o){if(o&2&&r!==(r=t[1][1])){if(e){D();const i=e;d(i.$$.fragment,1,0,()=>{P(i,1)}),A()}r?(e=E(r,c(t)),t[13](e),k(e.$$.fragment),h(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};o&16&&(i.data=t[4]),o&4&&(i.form=t[2]),e.$set(i)}},i(t){s||(e&&h(e.$$.fragment,t),s=!0)},o(t){e&&d(e.$$.fragment,t),s=!1},d(t){t&&g(n),a[13](null),e&&P(e,t)}}}function re(a){let e,n,s;var r=a[1][1];function c(t,o){return{props:{data:t[4],$$slots:{default:[se]},$$scope:{ctx:t}}}}return r&&(e=E(r,c(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,o){e&&v(e,t,o),b(t,n,o),s=!0},p(t,o){if(o&2&&r!==(r=t[1][1])){if(e){D();const i=e;d(i.$$.fragment,1,0,()=>{P(i,1)}),A()}r?(e=E(r,c(t)),t[12](e),k(e.$$.fragment),h(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};o&16&&(i.data=t[4]),o&65575&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)}},i(t){s||(e&&h(e.$$.fragment,t),s=!0)},o(t){e&&d(e.$$.fragment,t),s=!1},d(t){t&&g(n),a[12](null),e&&P(e,t)}}}function se(a){let e,n,s;var r=a[1][2];function c(t,o){return{props:{data:t[5],form:t[2]}}}return r&&(e=E(r,c(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,o){e&&v(e,t,o),b(t,n,o),s=!0},p(t,o){if(o&2&&r!==(r=t[1][2])){if(e){D();const i=e;d(i.$$.fragment,1,0,()=>{P(i,1)}),A()}r?(e=E(r,c(t)),t[11](e),k(e.$$.fragment),h(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};o&32&&(i.data=t[5]),o&4&&(i.form=t[2]),e.$set(i)}},i(t){s||(e&&h(e.$$.fragment,t),s=!0)},o(t){e&&d(e.$$.fragment,t),s=!1},d(t){t&&g(n),a[11](null),e&&P(e,t)}}}function oe(a){let e,n,s,r;const c=[re,ie],t=[];function o(i,_){return i[1][2]?0:1}return e=o(a),n=t[e]=c[e](a),{c(){n.c(),s=p()},l(i){n.l(i),s=p()},m(i,_){t[e].m(i,_),b(i,s,_),r=!0},p(i,_){let l=e;e=o(i),e===l?t[e].p(i,_):(D(),d(t[l],1,1,()=>{t[l]=null}),A(),n=t[e],n?n.p(i,_):(n=t[e]=c[e](i),n.c()),h(n,1),n.m(s.parentNode,s))},i(i){r||(h(n),r=!0)},o(i){d(n),r=!1},d(i){i&&g(s),t[e].d(i)}}}function N(a){let e,n=a[7]&&$(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(s){e=H(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(e);n&&n.l(r),r.forEach(g),this.h()},h(){V(e,"id","svelte-announcer"),V(e,"aria-live","assertive"),V(e,"aria-atomic","true"),R(e,"position","absolute"),R(e,"left","0"),R(e,"top","0"),R(e,"clip","rect(0 0 0 0)"),R(e,"clip-path","inset(50%)"),R(e,"overflow","hidden"),R(e,"white-space","nowrap"),R(e,"width","1px"),R(e,"height","1px")},m(s,r){b(s,e,r),n&&n.m(e,null)},p(s,r){s[7]?n?n.p(s,r):(n=$(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&g(e),n&&n.d()}}}function $(a){let e;return{c(){e=K(a[8])},l(n){e=Q(n,a[8])},m(n,s){b(n,e,s)},p(n,s){s&256&&X(e,n[8])},d(n){n&&g(e)}}}function ae(a){let e,n,s,r,c;const t=[ne,te],o=[];function i(l,m){return l[1][1]?0:1}e=i(a),n=o[e]=t[e](a);let _=a[6]&&N(a);return{c(){n.c(),s=j(),_&&_.c(),r=p()},l(l){n.l(l),s=W(l),_&&_.l(l),r=p()},m(l,m){o[e].m(l,m),b(l,s,m),_&&_.m(l,m),b(l,r,m),c=!0},p(l,[m]){let u=e;e=i(l),e===u?o[e].p(l,m):(D(),d(o[u],1,1,()=>{o[u]=null}),A(),n=o[e],n?n.p(l,m):(n=o[e]=t[e](l),n.c()),h(n,1),n.m(s.parentNode,s)),l[6]?_?_.p(l,m):(_=N(l),_.c(),_.m(r.parentNode,r)):_&&(_.d(1),_=null)},i(l){c||(h(n),c=!0)},o(l){d(n),c=!1},d(l){l&&(g(s),g(r)),o[e].d(l),_&&_.d(l)}}}function le(a,e,n){let{stores:s}=e,{page:r}=e,{constructors:c}=e,{components:t=[]}=e,{form:o}=e,{data_0:i=null}=e,{data_1:_=null}=e,{data_2:l=null}=e;z(s.page.notify);let m=!1,u=!1,L=null;F(()=>{const f=s.page.subscribe(()=>{m&&(n(7,u=!0),Y().then(()=>{n(8,L=document.title||"untitled page")}))});return n(6,m=!0),f});function O(f){I[f?"unshift":"push"](()=>{t[2]=f,n(0,t)})}function S(f){I[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function q(f){I[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function C(f){I[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function B(f){I[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(9,s=f.stores),"page"in f&&n(10,r=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,o=f.form),"data_0"in f&&n(3,i=f.data_0),"data_1"in f&&n(4,_=f.data_1),"data_2"in f&&n(5,l=f.data_2)},a.$$.update=()=>{a.$$.dirty&1536&&s.page.set(r)},[t,c,o,i,_,l,m,u,L,s,r,O,S,q,C,B]}class ue extends Z{constructor(e){super(),M(this,e,le,ae,U,{stores:9,page:10,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5})}}const me=[()=>w(()=>import("../nodes/0.BL992LDd.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>w(()=>import("../nodes/1.DmMwKeuR.js"),__vite__mapDeps([6,1,2,7,4]),import.meta.url),()=>w(()=>import("../nodes/2.CuNsKuC1.js"),__vite__mapDeps([8,1,2]),import.meta.url),()=>w(()=>import("../nodes/3.DfsfsMI9.js"),__vite__mapDeps([9,1,2,7,4]),import.meta.url),()=>w(()=>import("../nodes/4.DLzYX6Ik.js"),__vite__mapDeps([10,1,2,11,12,13]),import.meta.url),()=>w(()=>import("../nodes/5.Du5kPfdr.js"),__vite__mapDeps([14,1,15,2,7,4,3]),import.meta.url),()=>w(()=>import("../nodes/6.CwWquQ5h.js"),__vite__mapDeps([16,1,15,2,3,4,7,11,17]),import.meta.url),()=>w(()=>import("../nodes/7.Bt9cIEXI.js"),__vite__mapDeps([18,1,2,15,3,4,7,19,20]),import.meta.url),()=>w(()=>import("../nodes/8.DFxsLkEV.js"),__vite__mapDeps([21,1,2,22]),import.meta.url),()=>w(()=>import("../nodes/9.QnIf9tzI.js"),__vite__mapDeps([23,1,2,4,3,12,15,24]),import.meta.url),()=>w(()=>import("../nodes/10.DF7fuxKW.js"),__vite__mapDeps([25,1,2,15,3,4,7,19,26]),import.meta.url),()=>w(()=>import("../nodes/11.DQRSY95g.js"),__vite__mapDeps([27,1,2,15,3,4,7,19,17]),import.meta.url),()=>w(()=>import("../nodes/12.CgD9ntLs.js"),__vite__mapDeps([28,1,2,3,4,7,11,29]),import.meta.url)],pe=[],de={"/":[3],"/admin":[4,[2]],"/avatars":[5],"/details":[6],"/ngse":[7],"/privacy":[8],"/questions":[9],"/sims":[10],"/stai":[11],"/submission":[12]},he={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{de as dictionary,he as hooks,ce as matchers,me as nodes,ue as root,pe as server_loads};
