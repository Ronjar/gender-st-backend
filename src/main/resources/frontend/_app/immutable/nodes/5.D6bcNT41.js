import{s as E,e as m,b as y,d,f as p,h as I,i as w,j as u,k as h,l as C,m as f,n as _,p as q,q as j,r as A}from"../chunks/scheduler.Du_WS53y.js";import{e as x}from"../chunks/each.D6YF6ztN.js";import{S as D,i as S}from"../chunks/index.BEvaicvu.js";import{g as V}from"../chunks/entry.DtCjavxn.js";import{a as G}from"../chunks/store.DLfTZ2jX.js";function b(i,t,s){const n=i.slice();return n[3]=t[s],n}function k(i){let t,s,n,c,o,g,e;function r(){return i[2](i[3])}return{c(){t=m("div"),s=m("figure"),n=m("img"),o=y(),this.h()},l(l){t=d(l,"DIV",{class:!0});var a=p(t);s=d(a,"FIGURE",{class:!0});var v=p(s);n=d(v,"IMG",{src:!0,alt:!0,class:!0}),v.forEach(u),o=w(a),a.forEach(u),this.h()},h(){j(n.src,c=i[3])||h(n,"src",c),h(n,"alt","Avatar"),h(n,"class","rounded-xl w-full"),h(s,"class","w-36 h-36 mx-auto justify-center"),h(t,"class","card flex w-44 h-44 bg-base-100 shadow-md cursor-pointer items-center justify-center")},m(l,a){C(l,t,a),f(t,s),f(s,n),f(t,o),g||(e=A(t,"click",r),g=!0)},p(l,a){i=l},d(l){l&&u(t),g=!1,e()}}}function P(i){let t,s,n="Choose an Avatar",c,o,g=x(i[0]),e=[];for(let r=0;r<g.length;r+=1)e[r]=k(b(i,g,r));return{c(){t=m("div"),s=m("h1"),s.textContent=n,c=y(),o=m("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=d(r,"DIV",{class:!0});var l=p(t);s=d(l,"H1",{class:!0,"data-svelte-h":!0}),I(s)!=="svelte-47eydf"&&(s.textContent=n),c=w(l),o=d(l,"DIV",{class:!0});var a=p(o);for(let v=0;v<e.length;v+=1)e[v].l(a);a.forEach(u),l.forEach(u),this.h()},h(){h(s,"class","text-2xl font-bold"),h(o,"class","grid grid-cols-5 gap-8"),h(t,"class","p-6 max-w-5xl mx-auto bg-base-200 rounded-xl shadow-md space-y-4")},m(r,l){C(r,t,l),f(t,s),f(t,c),f(t,o);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(o,null)},p(r,[l]){if(l&3){g=x(r[0]);let a;for(a=0;a<g.length;a+=1){const v=b(r,g,a);e[a]?e[a].p(v,l):(e[a]=k(v),e[a].c(),e[a].m(o,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=g.length}},i:_,o:_,d(r){r&&u(t),q(e,r)}}}function $(i){const t=["/img/avatar/avatar1.png","/img/avatar/avatar2.png","/img/avatar/avatar3.png","/img/avatar/avatar4.png","/img/avatar/avatar5.png","/img/avatar/avatar6.png","/img/avatar/avatar7.png","/img/avatar/avatar8.png","/img/avatar/avatar9.png","/img/avatar/avatar10.png","/img/avatar/avatar11.png","/img/avatar/avatar12.png","/img/avatar/avatar13.png","/img/avatar/avatar14.png","/img/avatar/avatar15.png"],s=c=>{G.set(c),V("/questions")};return[t,s,c=>s(c)]}class z extends D{constructor(t){super(),S(this,t,$,P,E,{})}}export{z as component};
