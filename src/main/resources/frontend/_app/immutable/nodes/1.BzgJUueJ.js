import{s as S,e as _,z as f,a as x,c as d,b as g,A as h,f as u,d as C,i as m,j as v,B as $,n as E,C as j}from"../chunks/scheduler.D8LZMvHv.js";import{S as q,i as y}from"../chunks/index._RhZMLpL.js";import{s as z}from"../chunks/entry.3oQBZzy1.js";const A=()=>{const s=z;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},B={subscribe(s){return A().page.subscribe(s)}};function H(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=_("h1"),o=f(r),n=x(),i=_("p"),l=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=C(e),i=d(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(l,c)},i:E,o:E,d(e){e&&(u(t),u(n),u(i))}}}function P(s,t,r){let o;return j(s,B,n=>r(0,o=n)),[o]}let F=class extends q{constructor(t){super(),y(this,t,P,H,S,{})}};export{F as component};
