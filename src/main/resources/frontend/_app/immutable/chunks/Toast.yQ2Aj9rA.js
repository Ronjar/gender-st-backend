import{s as b,e as u,d as m,f as d,j as n,k as y,l as w,n as v,t as E,v as D,w as k,m as _,x as I}from"./scheduler.Du_WS53y.js";import{S,i as V}from"./index.BEvaicvu.js";function g(r){let s,e,t,a,o;return{c(){s=u("div"),e=u("div"),t=u("span"),a=D(r[0]),this.h()},l(i){s=m(i,"DIV",{class:!0});var c=d(s);e=m(c,"DIV",{});var f=d(e);t=m(f,"SPAN",{});var h=d(t);a=k(h,r[0]),h.forEach(n),f.forEach(n),c.forEach(n),this.h()},h(){y(s,"class",o=`alert ${r[2]} shadow-lg`)},m(i,c){w(i,s,c),_(s,e),_(e,t),_(t,a)},p(i,c){c&1&&I(a,i[0]),c&4&&o!==(o=`alert ${i[2]} shadow-lg`)&&y(s,"class",o)},d(i){i&&n(s)}}}function x(r){let s,e=r[1]&&g(r);return{c(){s=u("div"),e&&e.c(),this.h()},l(t){s=m(t,"DIV",{class:!0});var a=d(s);e&&e.l(a),a.forEach(n),this.h()},h(){y(s,"class","mt-5 mx-auto")},m(t,a){w(t,s,a),e&&e.m(s,null)},p(t,[a]){t[1]?e?e.p(t,a):(e=g(t),e.c(),e.m(s,null)):e&&(e.d(1),e=null)},i:v,o:v,d(t){t&&n(s),e&&e.d()}}}function j(r,s,e){let{type:t="success"}=s,{message:a=""}=s,{visible:o=!1}=s,{alertType:i="alert-success"}=s;const c=E();function f(l,T,p=2e3){e(3,t=l),e(0,a=T),e(1,o=!0),setTimeout(()=>{e(1,o=!1),c("dismiss")},p)}function h(l,T){e(3,t=l?"success":"error"),e(0,a=T),e(1,o=!0),setTimeout(()=>{e(1,o=!1),c("dismiss")},1e3)}return r.$$set=l=>{"type"in l&&e(3,t=l.type),"message"in l&&e(0,a=l.message),"visible"in l&&e(1,o=l.visible),"alertType"in l&&e(2,i=l.alertType)},r.$$.update=()=>{r.$$.dirty&8&&e(2,i=`alert-${t}`)},[a,o,i,t,f,h]}class C extends S{constructor(s){super(),V(this,s,j,x,b,{type:3,message:0,visible:1,alertType:2,showTypedToast:4,showToast:5})}get showTypedToast(){return this.$$.ctx[4]}get showToast(){return this.$$.ctx[5]}}export{C as T};