import{s as O,e as b,b as y,d as _,f as E,h as $,i as g,j as m,k as I,l as h,m as p,n as T,y as d,C as V,o as A,v as w,w as k,x as U,r as Y}from"../chunks/scheduler.Du_WS53y.js";import{S as z,i as D}from"../chunks/index.BEvaicvu.js";import{r as C,u as H,b as J,n as L,s as M,q as R,c as F,g as G,i as K}from"../chunks/store.DLfTZ2jX.js";import{w as Q}from"../chunks/index.B4nj-uY_.js";import{g as S}from"../chunks/entry.DHIfa-PM.js";import{B as W}from"../chunks/constants.BWkPU7VE.js";function q(c){let e,r,i,o;return{c(){e=b("p"),r=w("You have completed round "),i=w(c[0]),o=w(" of the study. Thank you very much so far!")},l(a){e=_(a,"P",{});var l=E(e);r=k(l,"You have completed round "),i=k(l,c[0]),o=k(l," of the study. Thank you very much so far!"),l.forEach(m)},m(a,l){h(a,e,l),p(e,r),p(e,i),p(e,o)},p(a,l){l&1&&U(i,a[0])},d(a){a&&m(e)}}}function P(c){let e,r=`Thank you for participating in this test. Please show this screen to the\r
      supervising person.`;return{c(){e=b("p"),e.textContent=r},l(i){e=_(i,"P",{"data-svelte-h":!0}),$(e)!=="svelte-1h4on79"&&(e.textContent=r)},m(i,o){h(i,e,o)},d(i){i&&m(e)}}}function N(c){let e,r="To proceed in the study, please press the button below.",i,o,a,l,s;return{c(){e=b("p"),e.textContent=r,i=y(),o=b("button"),a=w("Next round"),this.h()},l(t){e=_(t,"P",{"data-svelte-h":!0}),$(e)!=="svelte-1unlanr"&&(e.textContent=r),i=g(t),o=_(t,"BUTTON",{class:!0});var n=E(o);a=k(n,"Next round"),n.forEach(m),this.h()},h(){I(o,"class","btn btn-primary mt-5  svelte-10exnw4"),o.disabled=Z},m(t,n){h(t,e,n),h(t,i,n),h(t,o,n),p(o,a),l||(s=Y(o,"click",c[3]),l=!0)},p:T,d(t){t&&(m(e),m(i),m(o)),l=!1,s()}}}function X(c){let e,r,i="Thank you for your participation",o,a,l,s=c[0]<3&&q(c),t=c[0]>=3&&P(),n=c[1]&&N(c);return{c(){e=b("div"),r=b("h1"),r.textContent=i,o=y(),s&&s.c(),a=y(),t&&t.c(),l=y(),n&&n.c(),this.h()},l(u){e=_(u,"DIV",{class:!0});var f=E(e);r=_(f,"H1",{"data-svelte-h":!0}),$(r)!=="svelte-zerxh2"&&(r.textContent=i),o=g(f),s&&s.l(f),a=g(f),t&&t.l(f),l=g(f),n&&n.l(f),f.forEach(m),this.h()},h(){I(e,"class","p-6 max-w-4xl mx-auto bg-base-200 rounded-xl shadow-md space-y-4")},m(u,f){h(u,e,f),p(e,r),p(e,o),s&&s.m(e,null),p(e,a),t&&t.m(e,null),p(e,l),n&&n.m(e,null)},p(u,[f]){u[0]<3?s?s.p(u,f):(s=q(u),s.c(),s.m(e,a)):s&&(s.d(1),s=null),u[0]>=3?t||(t=P(),t.c(),t.m(e,l)):t&&(t.d(1),t=null),u[1]?n?n.p(u,f):(n=N(u),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i:T,o:T,d(u){u&&m(e),s&&s.d(),t&&t.d(),n&&n.d()}}}let Z=!1;function ee(c,e,r){let i,o=d(C),a=Q(!1);return V(c,a,s=>r(1,i=s)),C.subscribe(s=>{r(0,o=s)}),A(async()=>{const s=d(H),t=d(J),n=d(L),u=d(M),f=d(R),j=d(F),B=d(G)[o];try{const v=await fetch(`${W}/addset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:s,gamifiedElements:B,stai:t,ngse:n,sims:u,questions:f,answerTime:j})});if(!v.ok)throw new Error("Network response was not ok");const x=await v.json();x.round>0&&(C.set(x.round),x.round<3&&a.set(!0))}catch(v){console.error("Error uploading data:",v)}}),[o,i,a,async()=>{d(K)?S("/avatars"):S("/questions")}]}class re extends z{constructor(e){super(),D(this,e,ee,X,O,{})}}export{re as component};
