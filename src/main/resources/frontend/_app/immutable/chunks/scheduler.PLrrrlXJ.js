function O(){}function C(n,t){for(const e in t)n[e]=t[e];return n}function P(n){return n()}function K(){return Object.create(null)}function B(n){n.forEach(P)}function Q(n){return typeof n=="function"}function R(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}let h;function V(n,t){return n===t?!0:(h||(h=document.createElement("a")),h.href=t,n===h.href)}function X(n){return Object.keys(n).length===0}function N(n,...t){if(n==null){for(const i of t)i(void 0);return O}const e=n.subscribe(...t);return e.unsubscribe?()=>e.unsubscribe():e}function Y(n){let t;return N(n,e=>t=e)(),t}function Z(n,t,e){n.$$.on_destroy.push(N(t,e))}function $(n,t,e,i){if(n){const r=A(n,t,e,i);return n[0](r)}}function A(n,t,e,i){return n[1]&&i?C(e.ctx.slice(),n[1](i(t))):e.ctx}function nn(n,t,e,i){if(n[2]&&i){const r=n[2](i(e));if(t.dirty===void 0)return r;if(typeof r=="object"){const o=[],u=Math.max(t.dirty.length,r.length);for(let c=0;c<u;c+=1)o[c]=t.dirty[c]|r[c];return o}return t.dirty|r}return t.dirty}function tn(n,t,e,i,r,o){if(r){const u=A(t,e,i,o);n.p(u,r)}}function en(n){if(n.ctx.length>32){const t=[],e=n.ctx.length/32;for(let i=0;i<e;i++)t[i]=-1;return t}return-1}let p=!1;function rn(){p=!0}function cn(){p=!1}function I(n,t,e,i){for(;n<t;){const r=n+(t-n>>1);e(r)<=i?n=r+1:t=r}return n}function L(n){if(n.hydrate_init)return;n.hydrate_init=!0;let t=n.childNodes;if(n.nodeName==="HEAD"){const l=[];for(let s=0;s<t.length;s++){const a=t[s];a.claim_order!==void 0&&l.push(a)}t=l}const e=new Int32Array(t.length+1),i=new Int32Array(t.length);e[0]=-1;let r=0;for(let l=0;l<t.length;l++){const s=t[l].claim_order,a=(r>0&&t[e[r]].claim_order<=s?r+1:I(1,r,q=>t[e[q]].claim_order,s))-1;i[l]=e[a]+1;const E=a+1;e[E]=l,r=Math.max(E,r)}const o=[],u=[];let c=t.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(o.push(t[l-1]);c>=l;c--)u.push(t[c]);c--}for(;c>=0;c--)u.push(t[c]);o.reverse(),u.sort((l,s)=>l.claim_order-s.claim_order);for(let l=0,s=0;l<u.length;l++){for(;s<o.length&&u[l].claim_order>=o[s].claim_order;)s++;const a=s<o.length?o[s]:null;n.insertBefore(u[l],a)}}function M(n,t){if(p){for(L(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentNode!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;t!==n.actual_end_child?(t.claim_order!==void 0||t.parentNode!==n)&&n.insertBefore(t,n.actual_end_child):n.actual_end_child=t.nextSibling}else(t.parentNode!==n||t.nextSibling!==null)&&n.appendChild(t)}function ln(n,t,e){p&&!e?M(n,t):(t.parentNode!==n||t.nextSibling!=e)&&n.insertBefore(t,e||null)}function un(n){n.parentNode&&n.parentNode.removeChild(n)}function on(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function T(n){return document.createElement(n)}function x(n){return document.createTextNode(n)}function sn(){return x(" ")}function an(){return x("")}function fn(n,t,e,i){return n.addEventListener(t,e,i),()=>n.removeEventListener(t,e,i)}function _n(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function dn(n){return n.dataset.svelteH}function hn(n){let t;return{p(...e){t=e,t.forEach(i=>n.push(i))},r(){t.forEach(e=>n.splice(n.indexOf(e),1))}}}function mn(n,t){let e=r(n),i;function r(c){for(let l=0;l<t.length;l++)c=c[t[l]]=c[t[l]]||[];return c}function o(){i.forEach(c=>e.push(c))}function u(){i.forEach(c=>e.splice(e.indexOf(c),1))}return{u(c){t=c;const l=r(n);l!==e&&(u(),e=l,o())},p(...c){i=c,o()},r:u}}function pn(n){return n===""?null:+n}function bn(n){return Array.from(n.childNodes)}function D(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function j(n,t,e,i,r=!1){D(n);const o=(()=>{for(let u=n.claim_info.last_index;u<n.length;u++){const c=n[u];if(t(c)){const l=e(c);return l===void 0?n.splice(u,1):n[u]=l,r||(n.claim_info.last_index=u),c}}for(let u=n.claim_info.last_index-1;u>=0;u--){const c=n[u];if(t(c)){const l=e(c);return l===void 0?n.splice(u,1):n[u]=l,r?l===void 0&&n.claim_info.last_index--:n.claim_info.last_index=u,c}}return i()})();return o.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,o}function H(n,t,e,i){return j(n,r=>r.nodeName===t,r=>{const o=[];for(let u=0;u<r.attributes.length;u++){const c=r.attributes[u];e[c.name]||o.push(c.name)}o.forEach(u=>r.removeAttribute(u))},()=>i(t))}function yn(n,t,e){return H(n,t,e,T)}function z(n,t){return j(n,e=>e.nodeType===3,e=>{const i=""+t;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>x(t),!0)}function gn(n){return z(n," ")}function xn(n,t){t=""+t,n.data!==t&&(n.data=t)}function vn(n,t){n.value=t??""}function En(n,t,e,i){e==null?n.style.removeProperty(t):n.style.setProperty(t,e,"")}function kn(n,t,e){for(let i=0;i<n.options.length;i+=1){const r=n.options[i];if(r.__value===t){r.selected=!0;return}}(!e||t!==void 0)&&(n.selectedIndex=-1)}function wn(n){const t=n.querySelector(":checked");return t&&t.__value}function Nn(n,t,e){n.classList.toggle(t,!!e)}function F(n,t,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:t,bubbles:e,cancelable:i})}function An(n,t){return new n(t)}let m;function b(n){m=n}function v(){if(!m)throw new Error("Function called outside component initialization");return m}function jn(n){v().$$.on_mount.push(n)}function Sn(n){v().$$.after_update.push(n)}function qn(){const n=v();return(t,e,{cancelable:i=!1}={})=>{const r=n.$$.callbacks[t];if(r){const o=F(t,e,{cancelable:i});return r.slice().forEach(u=>{u.call(n,o)}),!o.defaultPrevented}return!0}}const d=[],k=[];let _=[];const w=[],S=Promise.resolve();let g=!1;function U(){g||(g=!0,S.then(G))}function On(){return U(),S}function W(n){_.push(n)}const y=new Set;let f=0;function G(){if(f!==0)return;const n=m;do{try{for(;f<d.length;){const t=d[f];f++,b(t),J(t.$$)}}catch(t){throw d.length=0,f=0,t}for(b(null),d.length=0,f=0;k.length;)k.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];y.has(e)||(y.add(e),e())}_.length=0}while(d.length);for(;w.length;)w.pop()();g=!1,y.clear(),b(n)}function J(n){if(n.fragment!==null){n.update(),B(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(W)}}function Cn(n){const t=[],e=[];_.forEach(i=>n.indexOf(i)===-1?t.push(i):e.push(i)),e.forEach(i=>i()),_=t}export{Nn as $,z as A,xn as B,Z as C,hn as D,vn as E,W as F,kn as G,pn as H,wn as I,mn as J,k as K,an as L,Sn as M,En as N,An as O,On as P,K as Q,G as R,X as S,Cn as T,m as U,b as V,P as W,d as X,U as Y,rn as Z,cn as _,sn as a,bn as b,yn as c,gn as d,T as e,un as f,dn as g,_n as h,ln as i,M as j,on as k,V as l,fn as m,O as n,jn as o,qn as p,Y as q,N as r,R as s,B as t,Q as u,$ as v,tn as w,en as x,nn as y,x as z};
