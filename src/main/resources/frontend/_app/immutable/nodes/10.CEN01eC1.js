import{s as B,e as h,z as q,a as w,c as b,b as x,A as S,f as c,d as $,h as N,i as p,j as m,n as E,C as O,o as R,g as I,m as V,q as f}from"../chunks/scheduler.D8LZMvHv.js";import{S as U,i as z}from"../chunks/index._RhZMLpL.js";import{r as g,u as D,b as H,n as J,s as L,q as M,c as F,g as G,i as K}from"../chunks/store.yFTGPR6E.js";import{w as Q}from"../chunks/index.CkfCY_Fd.js";import{g as k}from"../chunks/entry.DxuE9GgT.js";import{B as W}from"../chunks/constants.BWkPU7VE.js";function C(u){let t,o="Results are submitted any moment...";return{c(){t=h("p"),t.textContent=o},l(i){t=b(i,"P",{"data-svelte-h":!0}),I(t)!=="svelte-fv6od1"&&(t.textContent=o)},m(i,s){p(i,t,s)},d(i){i&&c(t)}}}function T(u){let t,o="Results are submitted",i,s,r,d,n;return{c(){t=h("p"),t.textContent=o,i=w(),s=h("button"),r=q("Next round"),this.h()},l(e){t=b(e,"P",{"data-svelte-h":!0}),I(t)!=="svelte-1vhx32l"&&(t.textContent=o),i=$(e),s=b(e,"BUTTON",{class:!0});var a=x(s);r=S(a,"Next round"),a.forEach(c),this.h()},h(){N(s,"class","btn btn-primary mt-5  svelte-10exnw4"),s.disabled=Y},m(e,a){p(e,t,a),p(e,i,a),p(e,s,a),m(s,r),d||(n=V(s,"click",u[3]),d=!0)},p:E,d(e){e&&(c(t),c(i),c(s)),d=!1,n()}}}function X(u){let t,o,i=u[2]()+"",s,r,d,n=!u[0]&&C(),e=u[0]&&T(u);return{c(){t=h("div"),o=h("h1"),s=q(i),r=w(),n&&n.c(),d=w(),e&&e.c(),this.h()},l(a){t=b(a,"DIV",{class:!0});var l=x(t);o=b(l,"H1",{});var _=x(o);s=S(_,i),_.forEach(c),r=$(l),n&&n.l(l),d=$(l),e&&e.l(l),l.forEach(c),this.h()},h(){N(t,"class","p-6 max-w-4xl mx-auto bg-base-200 rounded-xl shadow-md space-y-4")},m(a,l){p(a,t,l),m(t,o),m(o,s),m(t,r),n&&n.m(t,null),m(t,d),e&&e.m(t,null)},p(a,[l]){a[0]?n&&(n.d(1),n=null):n||(n=C(),n.c(),n.m(t,d)),a[0]?e?e.p(a,l):(e=T(a),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},i:E,o:E,d(a){a&&c(t),n&&n.d(),e&&e.d()}}}let Y=!1;function Z(u,t,o){let i,s=Q(!1);O(u,s,e=>o(0,i=e));let r;g.subscribe(e=>{r=e}),R(async()=>{const e=f(D),a=f(H),l=f(J),_=f(L),P=f(M),j=f(F),A=f(G)[r];r=f(g);try{const v=await fetch(`${W}/addset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e,gamifiedElements:A,stai:a,ngse:l,sims:_,questions:P,answerTime:j})});if(!v.ok)throw new Error("Network response was not ok");const y=await v.json();(y.round>0||y.round<3)&&(g.set(y.round),s.set(!0))}catch(v){console.error("Error uploading data:",v)}});function d(){return r<2?`End of study part ${r+1}`:"End of study, tank you for your participation"}return[i,s,d,async()=>{f(K)?k("/avatars"):k("/questions")}]}class ot extends U{constructor(t){super(),z(this,t,Z,X,B,{})}}export{ot as component};