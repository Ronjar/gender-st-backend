import{s as H,v as L,e as h,a as k,c as v,b,g as S,d as y,f as d,h as m,i as D,j as p,w as j,x as q,y as C,l as M}from"../chunks/scheduler.D8LZMvHv.js";import{S as P,i as T,t as G,a as N}from"../chunks/index._RhZMLpL.js";import{i as R,a as U}from"../chunks/store.vHEsTG-8.js";function w(o){let s,t,a,e=o[1]&&A(o);return{c(){s=h("div"),t=h("div"),a=h("div"),e&&e.c(),this.h()},l(n){s=v(n,"DIV",{class:!0});var c=b(s);t=v(c,"DIV",{class:!0});var _=b(t);a=v(_,"DIV",{class:!0});var i=b(a);e&&e.l(i),i.forEach(d),_.forEach(d),c.forEach(d),this.h()},h(){m(a,"class","w-20 m-2 rounded-full"),m(t,"class","avatar"),m(s,"class","flex-none")},m(n,c){D(n,s,c),p(s,t),p(t,a),e&&e.m(a,null)},p(n,c){n[1]?e?e.p(n,c):(e=A(n),e.c(),e.m(a,null)):e&&(e.d(1),e=null)},d(n){n&&d(s),e&&e.d()}}}function A(o){let s,t;return{c(){s=h("img"),this.h()},l(a){s=v(a,"IMG",{src:!0}),this.h()},h(){M(s.src,t=o[1])||m(s,"src",t)},m(a,e){D(a,s,e)},p(a,e){e&2&&!M(s.src,t=a[1])&&m(s,"src",t)},d(a){a&&d(s)}}}function z(o){let s,t,a,e,n='<img src="/img/uni_logo.png" class="h-20 m-2" alt="Icon of the University of Stuttgart"/>',c,_,i,g,r=o[0]&&w(o);const I=o[4].default,f=L(I,o,o[3],null);return{c(){s=h("div"),t=h("header"),a=h("div"),e=h("div"),e.innerHTML=n,c=k(),r&&r.c(),_=k(),i=h("main"),f&&f.c(),this.h()},l(l){s=v(l,"DIV",{class:!0});var u=b(s);t=v(u,"HEADER",{});var $=b(t);a=v($,"DIV",{class:!0});var E=b(a);e=v(E,"DIV",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-sw5ji7"&&(e.innerHTML=n),c=y(E),r&&r.l(E),E.forEach(d),$.forEach(d),_=y(u),i=v(u,"MAIN",{class:!0});var V=b(i);f&&f.l(V),V.forEach(d),u.forEach(d),this.h()},h(){m(e,"class","flex-1"),m(a,"class","navbar bg-base-100"),m(i,"class","flex-1 p-4"),m(s,"class","min-h-screen")},m(l,u){D(l,s,u),p(s,t),p(t,a),p(a,e),p(a,c),r&&r.m(a,null),p(s,_),p(s,i),f&&f.m(i,null),g=!0},p(l,[u]){l[0]?r?r.p(l,u):(r=w(l),r.c(),r.m(a,null)):r&&(r.d(1),r=null),f&&f.p&&(!g||u&8)&&j(f,I,l,l[3],g?C(I,l[3],u,null):q(l[3]),null)},i(l){g||(G(f,l),g=!0)},o(l){N(f,l),g=!1},d(l){l&&d(s),r&&r.d(),f&&f.d(l)}}}function B(o,s,t){let{$$slots:a={},$$scope:e}=s;const n=!1;let c=!1,_="";return R.subscribe(i=>{t(0,c=i)}),U.subscribe(i=>{t(1,_=i)}),o.$$set=i=>{"$$scope"in i&&t(3,e=i.$$scope)},[c,_,n,e,a]}class O extends P{constructor(s){super(),T(this,s,B,z,H,{ssr:2})}get ssr(){return this.$$.ctx[2]}}export{O as component};
