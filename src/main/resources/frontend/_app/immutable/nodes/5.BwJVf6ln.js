import{s as E,e as f,b as y,d as g,f as p,h as I,i as w,j as v,k as u,l as C,m,n as _,p as q,q as j,r as A}from"../chunks/scheduler.cyf-gJwo.js";import{e as x}from"../chunks/each.D6YF6ztN.js";import{S as D,i as S}from"../chunks/index.BE-2TLei.js";import{g as V}from"../chunks/entry.Ck1ajTfd.js";import{a as G}from"../chunks/store.D4Uwuwzv.js";function b(i,t,s){const n=i.slice();return n[3]=t[s],n}function k(i){let t,s,n,c,o,h,e;function r(){return i[2](i[3])}return{c(){t=f("div"),s=f("figure"),n=f("img"),o=y(),this.h()},l(l){t=g(l,"DIV",{class:!0});var a=p(t);s=g(a,"FIGURE",{class:!0});var d=p(s);n=g(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(v),o=w(a),a.forEach(v),this.h()},h(){j(n.src,c=i[3])||u(n,"src",c),u(n,"alt","Avatar"),u(n,"class","rounded-xl w-full"),u(s,"class","w-36 h-36 mx-auto justify-center"),u(t,"class","card flex w-44 h-44 bg-base-100 shadow-md cursor-pointer items-center justify-center")},m(l,a){C(l,t,a),m(t,s),m(s,n),m(t,o),h||(e=A(t,"click",r),h=!0)},p(l,a){i=l},d(l){l&&v(t),h=!1,e()}}}function P(i){let t,s,n="Choose an Avatar",c,o,h=x(i[0]),e=[];for(let r=0;r<h.length;r+=1)e[r]=k(b(i,h,r));return{c(){t=f("div"),s=f("h1"),s.textContent=n,c=y(),o=f("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=g(r,"DIV",{class:!0});var l=p(t);s=g(l,"H1",{class:!0,"data-svelte-h":!0}),I(s)!=="svelte-47eydf"&&(s.textContent=n),c=w(l),o=g(l,"DIV",{class:!0});var a=p(o);for(let d=0;d<e.length;d+=1)e[d].l(a);a.forEach(v),l.forEach(v),this.h()},h(){u(s,"class","text-2xl font-bold"),u(o,"class","grid grid-cols-3 gap-8"),u(t,"class","p-6 max-w-3xl mx-auto bg-base-200 rounded-xl shadow-md space-y-4")},m(r,l){C(r,t,l),m(t,s),m(t,c),m(t,o);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(o,null)},p(r,[l]){if(l&3){h=x(r[0]);let a;for(a=0;a<h.length;a+=1){const d=b(r,h,a);e[a]?e[a].p(d,l):(e[a]=k(d),e[a].c(),e[a].m(o,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=h.length}},i:_,o:_,d(r){r&&v(t),q(e,r)}}}function $(i){const t=["/img/avatar/avatar1.png","/img/avatar/avatar2.png","/img/avatar/avatar3.png","/img/avatar/avatar4.png","/img/avatar/avatar5.png","/img/avatar/avatar6.png","/img/avatar/avatar7.png","/img/avatar/avatar8.png","/img/avatar/avatar9.png"],s=c=>{G.set(c),V("/questions")};return[t,s,c=>s(c)]}class z extends D{constructor(t){super(),S(this,t,$,P,E,{})}}export{z as component};