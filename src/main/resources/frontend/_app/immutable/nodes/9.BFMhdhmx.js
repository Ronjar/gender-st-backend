import{s as N,e as b,x as S,a as E,c as g,b as y,y as q,f as p,d as x,g as I,h as A,i as C,j as f,n as w,o as j,m as B,G as u}from"../chunks/scheduler.CXdCB_cC.js";import{S as O,i as P}from"../chunks/index.CUASuJes.js";import{r as $,u as L,p as R,q as U,b as V,c as D,g as k}from"../chunks/store.DWicTl5_.js";import{g as G}from"../chunks/entry.DHYWvJo9.js";import{B as H}from"../chunks/constants.BWkPU7VE.js";function T(d){let t,a,l,i;return{c(){t=b("button"),a=S("Next round"),this.h()},l(o){t=g(o,"BUTTON",{class:!0});var s=y(t);a=q(s,"Next round"),s.forEach(p),this.h()},h(){A(t,"class","btn btn-primary  svelte-1kbih5k"),t.disabled=M},m(o,s){C(o,t,s),f(t,a),l||(i=B(t,"click",d[2]),l=!0)},p:w,d(o){o&&p(t),l=!1,i()}}}function J(d){let t,a,l=d[1]()+"",i,o,s,c="Results are submitted any moment...",m,e=d[0]&&T(d);return{c(){t=b("div"),a=b("h1"),i=S(l),o=E(),s=b("p"),s.textContent=c,m=E(),e&&e.c(),this.h()},l(r){t=g(r,"DIV",{class:!0});var n=y(t);a=g(n,"H1",{});var h=y(a);i=q(h,l),h.forEach(p),o=x(n),s=g(n,"P",{"data-svelte-h":!0}),I(s)!=="svelte-fv6od1"&&(s.textContent=c),m=x(n),e&&e.l(n),n.forEach(p),this.h()},h(){A(t,"class","p-6 max-w-4xl mx-auto bg-base-200 rounded-xl shadow-md space-y-4")},m(r,n){C(r,t,n),f(t,a),f(a,i),f(t,o),f(t,s),f(t,m),e&&e.m(t,null)},p(r,[n]){r[0]?e?e.p(r,n):(e=T(r),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},i:w,o:w,d(r){r&&p(t),e&&e.d()}}}let M=!1;function z(d,t,a){let l=!1,i;$.subscribe(c=>{i=c}),j(async()=>{const c=u(L),m=u(R),e=u(U),r=u(V),n=u(D),h=u(k);try{const _=await fetch(`${H}/addset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:c,gamifiedElements:h,pretestAnswers:m,questions:e,answerTime:r,posttestAnswers:n})});if(!_.ok)throw new Error("Network response was not ok");const v=await _.json();$.set(v.round),k.set(v.gamifiedElements),v.round>0&&a(0,l=!0)}catch(_){console.error("Error uploading data:",_)}});function o(){if(i<3)return"End of study part "+i}return[l,o,async()=>{G("pretest")}]}class Y extends O{constructor(t){super(),P(this,t,z,J,N,{})}}export{Y as component};