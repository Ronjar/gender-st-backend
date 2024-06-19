import{s as re,e as v,d as g,f as B,j as b,k as h,l as N,n as Z,t as Ze,z as j,A as G,m as f,B as te,b as y,i as P,$ as pe,q as ee,h as q,o as et,p as Fe,v as J,C as ke,r as ae,x as tt,L as he}from"../chunks/scheduler.cyf-gJwo.js";import{S as oe,i as ce,c as me,b as be,m as ve,t as K,a as X,e as we,d as ge,g as Ee}from"../chunks/index.BE-2TLei.js";import{e as _e}from"../chunks/each.D6YF6ztN.js";import{w as ie,d as st}from"../chunks/index.DAwqH3JR.js";import{i as Ke,d as We,e as Je,f as Xe,h as Ce,j as lt,c as at,q as nt,a as it}from"../chunks/store.D4Uwuwzv.js";function De(i){let e,t,l,s,n;return{c(){e=v("div"),t=v("div"),l=v("span"),s=j(i[1]),this.h()},l(u){e=g(u,"DIV",{class:!0});var r=B(e);t=g(r,"DIV",{});var a=B(t);l=g(a,"SPAN",{});var d=B(l);s=G(d,i[1]),d.forEach(b),a.forEach(b),r.forEach(b),this.h()},h(){h(e,"class",n=`alert ${i[0]==="success"?"alert-success":"alert-error"} shadow-lg`)},m(u,r){N(u,e,r),f(e,t),f(t,l),f(l,s)},p(u,r){r&2&&te(s,u[1]),r&1&&n!==(n=`alert ${u[0]==="success"?"alert-success":"alert-error"} shadow-lg`)&&h(e,"class",n)},d(u){u&&b(e)}}}function rt(i){let e,t=i[2]&&De(i);return{c(){e=v("div"),t&&t.c(),this.h()},l(l){e=g(l,"DIV",{class:!0});var s=B(e);t&&t.l(s),s.forEach(b),this.h()},h(){h(e,"class","mt-5 mx-auto")},m(l,s){N(l,e,s),t&&t.m(e,null)},p(l,[s]){l[2]?t?t.p(l,s):(t=De(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:Z,o:Z,d(l){l&&b(e),t&&t.d()}}}function ot(i,e,t){let{type:l="success"}=e,{message:s=""}=e,{visible:n=!1}=e;const u=Ze();function r(a,d){t(0,l=a?"success":"error"),t(1,s=d),t(2,n=!0),setTimeout(()=>{t(2,n=!1),u("dismiss")},1e3)}return i.$$set=a=>{"type"in a&&t(0,l=a.type),"message"in a&&t(1,s=a.message),"visible"in a&&t(2,n=a.visible)},[l,s,n,r]}class ct extends oe{constructor(e){super(),ce(this,e,ot,rt,re,{type:0,message:1,visible:2,showToast:3})}get showToast(){return this.$$.ctx[3]}}function Ie(i){let e,t,l;return{c(){e=v("div"),t=v("img"),this.h()},l(s){e=g(s,"DIV",{class:!0});var n=B(e);t=g(n,"IMG",{class:!0,alt:!0,src:!0}),n.forEach(b),this.h()},h(){h(t,"class","w-24 rounded-full"),h(t,"alt","User Avatar"),ee(t.src,l=i[3])||h(t,"src",l),h(e,"class","chat-image")},m(s,n){N(s,e,n),f(e,t)},p(s,n){n&8&&!ee(t.src,l=s[3])&&h(t,"src",l)},d(s){s&&b(e)}}}function dt(i){let e,t,l,s,n,u,r=i[1]&&Ie(i);return{c(){e=v("div"),t=v("div"),l=v("div"),s=j(i[0]),n=y(),r&&r.c(),this.h()},l(a){e=g(a,"DIV",{class:!0});var d=B(e);t=g(d,"DIV",{class:!0});var o=B(t);l=g(o,"DIV",{class:!0});var c=B(l);s=G(c,i[0]),c.forEach(b),n=P(o),r&&r.l(o),o.forEach(b),d.forEach(b),this.h()},h(){h(l,"class","chat-bubble text-3xl"),h(t,"class","chat chat-end"),h(e,"class",u="fixed bottom-0 right-0 mb-20 mr-20 bg-transparent shadow-none "+(i[2]?"animate-flyinbottom":"")+" svelte-1paxn1p"),pe(e,"invisible",!i[2])},m(a,d){N(a,e,d),f(e,t),f(t,l),f(l,s),f(t,n),r&&r.m(t,null)},p(a,[d]){d&1&&te(s,a[0]),a[1]?r?r.p(a,d):(r=Ie(a),r.c(),r.m(t,null)):r&&(r.d(1),r=null),d&4&&u!==(u="fixed bottom-0 right-0 mb-20 mr-20 bg-transparent shadow-none "+(a[2]?"animate-flyinbottom":"")+" svelte-1paxn1p")&&h(e,"class",u),d&4&&pe(e,"invisible",!a[2])},i:Z,o:Z,d(a){a&&b(e),r&&r.d()}}}function Be(){return"/img/npc/avatar"+Math.floor(Math.random()*9)+".png"}function ut(i,e,t){let l="Default message",s=!1,n=!1,u=Be();Ke.subscribe(o=>{t(1,s=o)});function r(){return n}function a(o){t(0,l=o),t(3,u=Be()),t(2,n=!0)}function d(){t(2,n=!1)}return[l,s,n,u,r,a,d]}class ft extends oe{constructor(e){super(),ce(this,e,ut,dt,re,{isShowing:4,showNarration:5,hideNarration:6})}get isShowing(){return this.$$.ctx[4]}get showNarration(){return this.$$.ctx[5]}get hideNarration(){return this.$$.ctx[6]}}function Te(i){let e,t,l="Score",s,n,u,r,a,d="right answers";return{c(){e=v("div"),t=v("div"),t.textContent=l,s=y(),n=v("div"),u=j(i[0]),r=y(),a=v("div"),a.textContent=d,this.h()},l(o){e=g(o,"DIV",{class:!0});var c=B(e);t=g(c,"DIV",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-7gzw0e"&&(t.textContent=l),s=P(c),n=g(c,"DIV",{class:!0});var m=B(n);u=G(m,i[0]),m.forEach(b),r=P(c),a=g(c,"DIV",{class:!0,"data-svelte-h":!0}),q(a)!=="svelte-40v8ly"&&(a.textContent=d),c.forEach(b),this.h()},h(){h(t,"class","stat-title"),h(n,"class","stat-value text-primary"),h(a,"class","stat-desc"),h(e,"class","stat")},m(o,c){N(o,e,c),f(e,t),f(e,s),f(e,n),f(n,u),f(e,r),f(e,a)},p(o,c){c&1&&te(u,o[0])},d(o){o&&b(e)}}}function Ve(i){let e,t,l="Badges",s,n,u,r,a,d="badges unlocked";return{c(){e=v("div"),t=v("div"),t.textContent=l,s=y(),n=v("div"),u=j(i[1]),r=y(),a=v("div"),a.textContent=d,this.h()},l(o){e=g(o,"DIV",{class:!0});var c=B(e);t=g(c,"DIV",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-12jnhhi"&&(t.textContent=l),s=P(c),n=g(c,"DIV",{class:!0});var m=B(n);u=G(m,i[1]),m.forEach(b),r=P(c),a=g(c,"DIV",{class:!0,"data-svelte-h":!0}),q(a)!=="svelte-bn8m36"&&(a.textContent=d),c.forEach(b),this.h()},h(){h(t,"class","stat-title"),h(n,"class","stat-value text-primary"),h(a,"class","stat-desc"),h(e,"class","stat")},m(o,c){N(o,e,c),f(e,t),f(e,s),f(e,n),f(n,u),f(e,r),f(e,a)},p(o,c){c&2&&te(u,o[1])},d(o){o&&b(e)}}}function ye(i){let e,t,l="You placed",s,n,u,r,a,d="on the leaderboard";return{c(){e=v("div"),t=v("div"),t.textContent=l,s=y(),n=v("div"),u=j(i[2]),r=y(),a=v("div"),a.textContent=d,this.h()},l(o){e=g(o,"DIV",{class:!0});var c=B(e);t=g(c,"DIV",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-tohfta"&&(t.textContent=l),s=P(c),n=g(c,"DIV",{class:!0});var m=B(n);u=G(m,i[2]),m.forEach(b),r=P(c),a=g(c,"DIV",{class:!0,"data-svelte-h":!0}),q(a)!=="svelte-kroy6e"&&(a.textContent=d),c.forEach(b),this.h()},h(){h(t,"class","stat-title"),h(n,"class","stat-value text-primary"),h(a,"class","stat-desc"),h(e,"class","stat")},m(o,c){N(o,e,c),f(e,t),f(e,s),f(e,n),f(n,u),f(e,r),f(e,a)},p(o,c){c&4&&te(u,o[2])},d(o){o&&b(e)}}}function ht(i){let e,t,l,s="You finished this rounds questions",n,u,r="These are the results",a,d,o,c,m,k,w='<form method="dialog"><button class="btn">Close</button></form>',D=i[3]&&Te(i),x=i[5]&&Ve(i),C=i[4]&&ye(i);return{c(){e=v("dialog"),t=v("div"),l=v("h3"),l.textContent=s,n=y(),u=v("p"),u.textContent=r,a=y(),d=v("div"),D&&D.c(),o=y(),x&&x.c(),c=y(),C&&C.c(),m=y(),k=v("div"),k.innerHTML=w,this.h()},l(_){e=g(_,"DIALOG",{id:!0,class:!0});var T=B(e);t=g(T,"DIV",{class:!0});var p=B(t);l=g(p,"H3",{class:!0,"data-svelte-h":!0}),q(l)!=="svelte-1w490v0"&&(l.textContent=s),n=P(p),u=g(p,"P",{"data-svelte-h":!0}),q(u)!=="svelte-bk5b70"&&(u.textContent=r),a=P(p),d=g(p,"DIV",{class:!0});var V=B(d);D&&D.l(V),o=P(V),x&&x.l(V),c=P(V),C&&C.l(V),V.forEach(b),m=P(p),k=g(p,"DIV",{class:!0,"data-svelte-h":!0}),q(k)!=="svelte-ij97s3"&&(k.innerHTML=w),p.forEach(b),T.forEach(b),this.h()},h(){h(l,"class","font-bold text-lg"),h(d,"class","stats bg-base-200 shadow m-5"),h(k,"class","modal-action"),h(t,"class","modal-box max-w-2xl"),h(e,"id","score_modal"),h(e,"class","modal")},m(_,T){N(_,e,T),f(e,t),f(t,l),f(t,n),f(t,u),f(t,a),f(t,d),D&&D.m(d,null),f(d,o),x&&x.m(d,null),f(d,c),C&&C.m(d,null),f(t,m),f(t,k)},p(_,[T]){_[3]?D?D.p(_,T):(D=Te(_),D.c(),D.m(d,o)):D&&(D.d(1),D=null),_[5]?x?x.p(_,T):(x=Ve(_),x.c(),x.m(d,c)):x&&(x.d(1),x=null),_[4]?C?C.p(_,T):(C=ye(_),C.c(),C.m(d,null)):C&&(C.d(1),C=null)},i:Z,o:Z,d(_){_&&b(e),D&&D.d(),x&&x.d(),C&&C.d()}}}function mt(i,e,t){let l,s=0,n=0,u=6,r=!1,a=!1,d=!1;function o(w){t(0,s=w)}function c(w){t(1,n=w)}function m(w){t(2,u=w)}We.subscribe(w=>{t(3,r=w)}),Je.subscribe(w=>{t(4,a=w)}),Xe.subscribe(w=>{t(5,d=w)});function k(){(a||d||r)&&l&&l.showModal()}return et(()=>{l=document.getElementById("score_modal")}),[s,n,u,r,a,d,o,c,m,k]}class bt extends oe{constructor(e){super(),ce(this,e,mt,ht,re,{setScore:6,setBadgeCount:7,setLeaderboardPlace:8,openModal:9})}get setScore(){return this.$$.ctx[6]}get setBadgeCount(){return this.$$.ctx[7]}get setLeaderboardPlace(){return this.$$.ctx[8]}get openModal(){return this.$$.ctx[9]}}const Pe=["Keep going, you'll get it next time!","Don't worry, practice makes perfect.","Every mistake is a step forward.","You're learning, and that's what matters!","Stay positive, you'll succeed!","Mistakes are proof you're trying.","You're closer than you think!","Keep your head up, you're improving.","It's okay to get it wrong, keep trying!","You've got this, just keep at it!"],xe=["Great job! I knew you could do it.","Excellent work, keep it up!","You're doing amazing, well done!","Fantastic! You nailed it.","You're on a roll, awesome!","Perfect! Keep shining.","Bravo! That's the right answer.","Outstanding work, you're unstoppable!","You're killing it, amazing job!","Superb! You're doing great."];function vt(){const i=Math.floor(Math.random()*xe.length);return xe[i]}function gt(){const i=Math.floor(Math.random()*Pe.length);return Pe[i]}function Ae(i,e,...t){Math.random()<i&&e(...t)}function Me(i,e,t){const l=i.slice();return l[3]=e[t],l}function $e(i){let e,t,l,s,n,u,r,a=i[3].tooltip+"",d,o,c;return{c(){e=v("div"),t=v("div"),l=v("img"),u=y(),r=v("p"),d=j(a),o=y(),this.h()},l(m){e=g(m,"DIV",{class:!0,"data-tip":!0});var k=B(e);t=g(k,"DIV",{class:!0});var w=B(t);l=g(w,"IMG",{src:!0,alt:!0,class:!0}),w.forEach(b),u=P(k),r=g(k,"P",{class:!0});var D=B(r);d=G(D,a),D.forEach(b),o=P(k),k.forEach(b),this.h()},h(){ee(l.src,s=i[3].src)||h(l,"src",s),h(l,"alt","Badge"),h(l,"class",n="w-24 h-24 rounded-xl "+(i[3].unlocked?"animate-unlock":"grayscale")),h(t,"class","flex justify-center"),h(r,"class","stat-desc"),h(e,"class","tooltip"),h(e,"data-tip",c=i[3].tooltip)},m(m,k){N(m,e,k),f(e,t),f(t,l),f(e,u),f(e,r),f(r,d),f(e,o)},p(m,k){k&1&&!ee(l.src,s=m[3].src)&&h(l,"src",s),k&1&&n!==(n="w-24 h-24 rounded-xl "+(m[3].unlocked?"animate-unlock":"grayscale"))&&h(l,"class",n),k&1&&a!==(a=m[3].tooltip+"")&&te(d,a),k&1&&c!==(c=m[3].tooltip)&&h(e,"data-tip",c)},d(m){m&&b(e)}}}function _t(i){let e,t,l="Badges",s,n,u=_e(i[0]),r=[];for(let a=0;a<u.length;a+=1)r[a]=$e(Me(i,u,a));return{c(){e=v("div"),t=v("p"),t.textContent=l,s=y(),n=v("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=g(a,"DIV",{class:!0});var d=B(e);t=g(d,"P",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-1xkaddo"&&(t.textContent=l),s=P(d),n=g(d,"DIV",{class:!0});var o=B(n);for(let c=0;c<r.length;c+=1)r[c].l(o);o.forEach(b),d.forEach(b),this.h()},h(){h(t,"class","stat-title mb-6"),h(n,"class","grid grid-cols-2 grid-rows-2 gap-12"),h(e,"class","w-1/2 bg-base-200 p-4 rounded-xl shadow-md")},m(a,d){N(a,e,d),f(e,t),f(e,s),f(e,n);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(n,null)},p(a,[d]){if(d&1){u=_e(a[0]);let o;for(o=0;o<u.length;o+=1){const c=Me(a,u,o);r[o]?r[o].p(c,d):(r[o]=$e(c),r[o].c(),r[o].m(n,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=u.length}},i:Z,o:Z,d(a){a&&b(e),Fe(r,a)}}}function pt(i,e,t){let l=[{id:1,src:"/img/badges/badge1.png",unlocked:!1,tooltip:"Get 1 right answer"},{id:2,src:"/img/badges/badge2.png",unlocked:!1,tooltip:"Get 5 right answers"},{id:3,src:"/img/badges/badge3.png",unlocked:!1,tooltip:"Get 10 right answers"},{id:4,src:"/img/badges/badge4.png",unlocked:!1,tooltip:"Get 18 right answers"}];function s(){return l.filter(u=>u.unlocked).length}function n(u){t(0,l=l.map(r=>r.id===u?{...r,unlocked:!0}:r))}return[l,s,n]}class kt extends oe{constructor(e){super(),ce(this,e,pt,_t,re,{unlockedBadgesCount:1,unlockBadge:2})}get unlockedBadgesCount(){return this.$$.ctx[1]}get unlockBadge(){return this.$$.ctx[2]}}function Ne(i,e,t){const l=i.slice();return l[37]=e[t],l[39]=t,l}function Ye(i){let e,t,l={};return e=new ft({props:l}),i[19](e),{c(){me(e.$$.fragment)},l(s){be(e.$$.fragment,s)},m(s,n){ve(e,s,n),t=!0},p(s,n){const u={};e.$set(u)},i(s){t||(K(e.$$.fragment,s),t=!0)},o(s){X(e.$$.fragment,s),t=!1},d(s){i[19](null),ge(e,s)}}}function qe(i){let e,t,l="<b>Leaderboard</b>",s,n,u,r,a,d="Rank",o,c,m,k,w=i[4]&&Le(),D=i[5]&&Oe(),x=_e(i[11]),C=[];for(let _=0;_<x.length;_+=1)C[_]=Ge(Ne(i,x,_));return{c(){e=v("div"),t=v("span"),t.innerHTML=l,s=y(),n=v("table"),u=v("thead"),r=v("tr"),a=v("th"),a.textContent=d,o=y(),w&&w.c(),c=y(),D&&D.c(),m=y(),k=v("tbody");for(let _=0;_<C.length;_+=1)C[_].c();this.h()},l(_){e=g(_,"DIV",{class:!0});var T=B(e);t=g(T,"SPAN",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-1dg7f05"&&(t.innerHTML=l),s=P(T),n=g(T,"TABLE",{class:!0});var p=B(n);u=g(p,"THEAD",{class:!0});var V=B(u);r=g(V,"TR",{class:!0});var S=B(r);a=g(S,"TH",{class:!0,"data-svelte-h":!0}),q(a)!=="svelte-1i0zvsj"&&(a.textContent=d),o=P(S),w&&w.l(S),c=P(S),D&&D.l(S),S.forEach(b),V.forEach(b),m=P(p),k=g(p,"TBODY",{});var M=B(k);for(let A=0;A<C.length;A+=1)C[A].l(M);M.forEach(b),p.forEach(b),T.forEach(b),this.h()},h(){h(t,"class","text-primary stat-value"),h(a,"class","w-1/4"),h(r,"class","my-10"),h(u,"class","my-10"),h(n,"class","table w-full table-auto mt-10"),h(e,"class","bg-base-200 shadow-md rounded-xl p-6")},m(_,T){N(_,e,T),f(e,t),f(e,s),f(e,n),f(n,u),f(u,r),f(r,a),f(r,o),w&&w.m(r,null),f(r,c),D&&D.m(r,null),f(n,m),f(n,k);for(let p=0;p<C.length;p+=1)C[p]&&C[p].m(k,null)},p(_,T){if(_[4]?w||(w=Le(),w.c(),w.m(r,c)):w&&(w.d(1),w=null),_[5]?D||(D=Oe(),D.c(),D.m(r,null)):D&&(D.d(1),D=null),T[0]&2096){x=_e(_[11]);let p;for(p=0;p<x.length;p+=1){const V=Ne(_,x,p);C[p]?C[p].p(V,T):(C[p]=Ge(V),C[p].c(),C[p].m(k,null))}for(;p<C.length;p+=1)C[p].d(1);C.length=x.length}},d(_){_&&b(e),w&&w.d(),D&&D.d(),Fe(C,_)}}}function Le(i){let e,t="Profile";return{c(){e=v("th"),e.textContent=t,this.h()},l(l){e=g(l,"TH",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-12kkcfa"&&(e.textContent=t),this.h()},h(){h(e,"class","w-1/4")},m(l,s){N(l,e,s)},d(l){l&&b(e)}}}function Oe(i){let e,t="Score";return{c(){e=v("th"),e.textContent=t,this.h()},l(l){e=g(l,"TH",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-1la2c57"&&(e.textContent=t),this.h()},h(){h(e,"class","w-2/4 text-center")},m(l,s){N(l,e,s)},d(l){l&&b(e)}}}function Se(i){let e,t,l;return{c(){e=v("td"),t=v("img"),this.h()},l(s){e=g(s,"TD",{class:!0});var n=B(e);t=g(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(b),this.h()},h(){ee(t.src,l=i[37].profilePic)||h(t,"src",l),h(t,"alt","profile"),h(t,"class","w-20 h-20 rounded-full"),h(e,"class","flex justify-center items-center")},m(s,n){N(s,e,n),f(e,t)},p(s,n){n[0]&2048&&!ee(t.src,l=s[37].profilePic)&&h(t,"src",l)},d(s){s&&b(e)}}}function je(i){let e,t=i[37].score+"",l;return{c(){e=v("td"),l=j(t),this.h()},l(s){e=g(s,"TD",{class:!0});var n=B(e);l=G(n,t),n.forEach(b),this.h()},h(){h(e,"class","text-center text-lg")},m(s,n){N(s,e,n),f(e,l)},p(s,n){n[0]&2048&&t!==(t=s[37].score+"")&&te(l,t)},d(s){s&&b(e)}}}function Ge(i){let e,t,l=i[39]+1+"",s,n,u,r,a,d=i[4]&&Se(i),o=i[5]&&je(i);return{c(){e=v("tr"),t=v("td"),s=j(l),n=y(),d&&d.c(),u=y(),o&&o.c(),r=y(),this.h()},l(c){e=g(c,"TR",{class:!0});var m=B(e);t=g(m,"TD",{class:!0});var k=B(t);s=G(k,l),k.forEach(b),n=P(m),d&&d.l(m),u=P(m),o&&o.l(m),r=P(m),m.forEach(b),this.h()},h(){h(t,"class","text-center text-lg"),h(e,"class",a=i[37].isYou?"bg-base-300":"bg-base-200")},m(c,m){N(c,e,m),f(e,t),f(t,s),f(e,n),d&&d.m(e,null),f(e,u),o&&o.m(e,null),f(e,r)},p(c,m){c[4]?d?d.p(c,m):(d=Se(c),d.c(),d.m(e,u)):d&&(d.d(1),d=null),c[5]?o?o.p(c,m):(o=je(c),o.c(),o.m(e,r)):o&&(o.d(1),o=null),m[0]&2048&&a!==(a=c[37].isYou?"bg-base-300":"bg-base-200")&&h(e,"class",a)},d(c){c&&b(e),d&&d.d(),o&&o.d()}}}function He(i){let e,t="Answer the following question",l,s,n=`Choose the option that best fits to replace the question\r
                    mark`,u,r,a,d,o,c,m,k,w,D,x,C,_,T,p,V,S,M,A,E,$,H,z,L,F,se,ne,de;return{c(){e=v("p"),e.textContent=t,l=y(),s=v("p"),s.textContent=n,u=y(),r=v("div"),a=v("div"),d=v("img"),c=y(),m=v("div"),k=v("button"),w=j("Option A"),x=y(),C=v("button"),_=j("Option B"),p=y(),V=v("button"),S=j("Option C"),A=y(),E=v("button"),$=j("Option D"),z=y(),L=v("button"),F=j("Option E"),this.h()},l(Y){e=g(Y,"P",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-1i98t55"&&(e.textContent=t),l=P(Y),s=g(Y,"P",{class:!0,"data-svelte-h":!0}),q(s)!=="svelte-mw9j0n"&&(s.textContent=n),u=P(Y),r=g(Y,"DIV",{class:!0});var O=B(r);a=g(O,"DIV",{class:!0});var le=B(a);d=g(le,"IMG",{src:!0,alt:!0,class:!0}),c=P(le),m=g(le,"DIV",{class:!0});var U=B(m);k=g(U,"BUTTON",{class:!0});var ue=B(k);w=G(ue,"Option A"),ue.forEach(b),x=P(U),C=g(U,"BUTTON",{class:!0});var fe=B(C);_=G(fe,"Option B"),fe.forEach(b),p=P(U),V=g(U,"BUTTON",{class:!0});var I=B(V);S=G(I,"Option C"),I.forEach(b),A=P(U),E=g(U,"BUTTON",{class:!0});var R=B(E);$=G(R,"Option D"),R.forEach(b),z=P(U),L=g(U,"BUTTON",{class:!0});var W=B(L);F=G(W,"Option E"),W.forEach(b),U.forEach(b),le.forEach(b),O.forEach(b),this.h()},h(){h(e,"class","text-xl"),h(s,"class","text-m mb-20"),ee(d.src,o=i[10])||h(d,"src",o),h(d,"alt","Question"),h(d,"class","w-3/4 h-3/4"),h(k,"class","btn btn-primary"),k.disabled=D=!i[12],h(C,"class","btn btn-primary"),C.disabled=T=!i[12],h(V,"class","btn btn-primary"),V.disabled=M=!i[12],h(E,"class","btn btn-primary"),E.disabled=H=!i[12],h(L,"class","btn btn-primary"),L.disabled=se=!i[12],h(m,"class","flex mt-4 space-x-4"),h(a,"class","flex flex-col items-center"),h(r,"class","flex justify-between items-center")},m(Y,O){N(Y,e,O),N(Y,l,O),N(Y,s,O),N(Y,u,O),N(Y,r,O),f(r,a),f(a,d),f(a,c),f(a,m),f(m,k),f(k,w),f(m,x),f(m,C),f(C,_),f(m,p),f(m,V),f(V,S),f(m,A),f(m,E),f(E,$),f(m,z),f(m,L),f(L,F),ne||(de=[ae(d,"load",i[17]),ae(k,"click",i[20]),ae(C,"click",i[21]),ae(V,"click",i[22]),ae(E,"click",i[23]),ae(L,"click",i[24])],ne=!0)},p(Y,O){O[0]&1024&&!ee(d.src,o=Y[10])&&h(d,"src",o),O[0]&4096&&D!==(D=!Y[12])&&(k.disabled=D),O[0]&4096&&T!==(T=!Y[12])&&(C.disabled=T),O[0]&4096&&M!==(M=!Y[12])&&(V.disabled=M),O[0]&4096&&H!==(H=!Y[12])&&(E.disabled=H),O[0]&4096&&se!==(se=!Y[12])&&(L.disabled=se)},d(Y){Y&&(b(e),b(l),b(s),b(u),b(r)),ne=!1,tt(de)}}}function ze(i){let e,t=`<div class="mx-auto"><h2>Thank you for completing this round of logic
                            puzzles!<br/> Now, we have some questions for you. To
                            proceed, please press the button below.</h2> <a class="btn btn-primary mt-10 w-full" href="/stai">Proceed to questions</a></div>`;return{c(){e=v("div"),e.innerHTML=t,this.h()},l(l){e=g(l,"DIV",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-hzxa7e"&&(e.innerHTML=t),this.h()},h(){h(e,"class","flex justify-center items-center h-64")},m(l,s){N(l,e,s)},d(l){l&&b(e)}}}function Ue(i){let e,t,l="Score",s,n,u,r,a,d="1 point per question";return{c(){e=v("div"),t=v("div"),t.textContent=l,s=y(),n=v("div"),u=j(i[13]),r=y(),a=v("div"),a.textContent=d,this.h()},l(o){e=g(o,"DIV",{class:!0});var c=B(e);t=g(c,"DIV",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-7gzw0e"&&(t.textContent=l),s=P(c),n=g(c,"DIV",{class:!0});var m=B(n);u=G(m,i[13]),m.forEach(b),r=P(c),a=g(c,"DIV",{class:!0,"data-svelte-h":!0}),q(a)!=="svelte-kk3gaz"&&(a.textContent=d),c.forEach(b),this.h()},h(){h(t,"class","stat-title"),h(n,"class","stat-value text-primary"),h(a,"class","stat-desc"),h(e,"class","w-1/2 stat bg-base-200 mb-10 p-4 rounded-xl shadow-md")},m(o,c){N(o,e,c),f(e,t),f(e,s),f(e,n),f(n,u),f(e,r),f(e,a)},p(o,c){c[0]&8192&&te(u,o[13])},d(o){o&&b(e)}}}function Re(i){let e,t,l={};return e=new kt({props:l}),i[26](e),{c(){me(e.$$.fragment)},l(s){be(e.$$.fragment,s)},m(s,n){ve(e,s,n),t=!0},p(s,n){const u={};e.$set(u)},i(s){t||(K(e.$$.fragment,s),t=!0)},o(s){X(e.$$.fragment,s),t=!1},d(s){i[26](null),ge(e,s)}}}function wt(i){let e,t,l,s,n,u,r,a,d,o,c,m,k,w,D,x,C={};e=new bt({props:C}),i[18](e);let _=i[7]&&Ye(i),T=i[6]&&qe(i),p=!i[9]&&He(i),V=i[9]&&ze(),S={};m=new ct({props:S}),i[25](m);let M=i[5]&&Ue(i),A=i[8]&&Re(i);return{c(){me(e.$$.fragment),t=y(),_&&_.c(),l=y(),s=v("div"),n=v("div"),T&&T.c(),u=y(),r=v("div"),a=v("div"),p&&p.c(),d=y(),V&&V.c(),c=y(),me(m.$$.fragment),k=y(),w=v("div"),M&&M.c(),D=y(),A&&A.c(),this.h()},l(E){be(e.$$.fragment,E),t=P(E),_&&_.l(E),l=P(E),s=g(E,"DIV",{class:!0});var $=B(s);n=g($,"DIV",{class:!0});var H=B(n);T&&T.l(H),H.forEach(b),u=P($),r=g($,"DIV",{class:!0});var z=B(r);a=g(z,"DIV",{class:!0});var L=B(a);p&&p.l(L),d=P(L),V&&V.l(L),L.forEach(b),c=P(z),be(m.$$.fragment,z),z.forEach(b),k=P($),w=g($,"DIV",{class:!0});var F=B(w);M&&M.l(F),D=P(F),A&&A.l(F),F.forEach(b),$.forEach(b),this.h()},h(){h(n,"class","w-1/4 mx-auto"),h(a,"class",o=i[12]?"":"grayscale brightness-50 pointer-events-none"),h(r,"class","p-6 w-1/2 mx-10 bg-base-200 rounded-xl shadow-md"),h(w,"class","w-1/4 mx-auto flex flex-col"),h(s,"class","flex justify-between")},m(E,$){ve(e,E,$),N(E,t,$),_&&_.m(E,$),N(E,l,$),N(E,s,$),f(s,n),T&&T.m(n,null),f(s,u),f(s,r),f(r,a),p&&p.m(a,null),f(a,d),V&&V.m(a,null),f(r,c),ve(m,r,null),f(s,k),f(s,w),M&&M.m(w,null),f(w,D),A&&A.m(w,null),x=!0},p(E,$){const H={};e.$set(H),E[7]?_?(_.p(E,$),$[0]&128&&K(_,1)):(_=Ye(E),_.c(),K(_,1),_.m(l.parentNode,l)):_&&(Ee(),X(_,1,1,()=>{_=null}),we()),E[6]?T?T.p(E,$):(T=qe(E),T.c(),T.m(n,null)):T&&(T.d(1),T=null),E[9]?p&&(p.d(1),p=null):p?p.p(E,$):(p=He(E),p.c(),p.m(a,d)),E[9]?V||(V=ze(),V.c(),V.m(a,null)):V&&(V.d(1),V=null),(!x||$[0]&4096&&o!==(o=E[12]?"":"grayscale brightness-50 pointer-events-none"))&&h(a,"class",o);const z={};m.$set(z),E[5]?M?M.p(E,$):(M=Ue(E),M.c(),M.m(w,D)):M&&(M.d(1),M=null),E[8]?A?(A.p(E,$),$[0]&256&&K(A,1)):(A=Re(E),A.c(),K(A,1),A.m(w,null)):A&&(Ee(),X(A,1,1,()=>{A=null}),we())},i(E){x||(K(e.$$.fragment,E),K(_),K(m.$$.fragment,E),K(A),x=!0)},o(E){X(e.$$.fragment,E),X(_),X(m.$$.fragment,E),X(A),x=!1},d(E){E&&(b(t),b(l),b(s)),i[18](null),ge(e,E),_&&_.d(E),T&&T.d(),p&&p.d(),V&&V.d(),i[25](null),ge(m),M&&M.d(),A&&A.d()}}}const Qe=20;function Et(i,e,t){let l,s,n=ie(0+J(Ce)),u=ie(0);ke(i,u,I=>t(13,s=I));let r=ie([]),a=ie([]),d,o,c,m,k,w=ie(!0);ke(i,w,I=>t(12,l=I));let D=!1,x=!1,C=!1,_=!1,T=!1,p=!0;Ke.subscribe(I=>{t(4,D=I)}),We.subscribe(I=>{t(5,x=I)}),Je.subscribe(I=>{t(6,C=I)}),lt.subscribe(I=>{t(7,_=I)}),Xe.subscribe(I=>{t(8,T=I)});let V=["B","E","E","E","A","B","D","E","B","B","E","B","C","E","A","C","B","D","B","A","E","B","A","C","D","A","A","A","C","D","B","D","A","B","A","D","A","B","A","B","D","B","D","B","E","C","B","C","E","C","B","D","B","A","C","D","A","E","D","D"],S=[{score:77,profilePic:"/img/npc/avatar1.png",isYou:!1},{score:69,profilePic:"/img/npc/avatar2.png",isYou:!1},{score:42,profilePic:"/img/npc/avatar3.png",isYou:!1},{score:33,profilePic:"/img/npc/avatar4.png",isYou:!1},{score:21,profilePic:"/img/npc/avatar5.png",isYou:!1}];function M(I){const R=I?"Correct answer!":"Wrong answer!";o.showToast(I,R)}const A=async I=>{w.set(!1);const W=Date.now()-d;a.update(Q=>[...Q,W]),V[J(n)]===I?(u.update(Q=>Q+1),r.update(Q=>[...Q,!0]),M(!0),c!==void 0&&Ae(.4,c.showNarration,vt())):(r.update(Q=>[...Q,!1]),M(!1),c!==void 0&&Ae(.4,c.showNarration,gt())),await $(),await E(),n.update(Q=>Q+1),c!==void 0&&c.hideNarration(),w.set(!0)},E=()=>new Promise(I=>{c!==void 0&&c.isShowing()?setTimeout(()=>I(!0),5e3):setTimeout(()=>I(!0),2e3)}),$=()=>new Promise(I=>{const R=J(n)+1;if(R<Qe){const W=new Image;W.src=`/img/questions/q-${R}.png`,W.onload=()=>I(!0)}else I(!0)});u.subscribe(I=>{if(m!==void 0)switch(I){case 1:m.unlockBadge(1);break;case 5:m.unlockBadge(2);break;case 10:m.unlockBadge(3);break;case 18:m.unlockBadge(4);break}});let H=`/img/questions/q-${0+J(Ce)}.png`;n.subscribe(I=>{J(r).length<Qe?t(10,H=`/img/questions/q-${I}.png`):(k.setScore(J(u)),T&&k.setBadgeCount(m.unlockedBadgesCount()),k.setLeaderboardPlace(L.findIndex(R=>R.isYou)+1),k.openModal(),at.set(J(a)),nt.set(J(r)),t(9,p=!0))});const z=st(u,I=>[...S,{profilePic:J(it),score:I,isYou:!0}].sort((W,Q)=>Q.score-W.score));let L=[];z.subscribe(I=>{t(11,L=I)});function F(){d=Date.now()}function se(I){he[I?"unshift":"push"](()=>{k=I,t(3,k)})}function ne(I){he[I?"unshift":"push"](()=>{c=I,t(1,c)})}const de=()=>A("A"),Y=()=>A("B"),O=()=>A("C"),le=()=>A("D"),U=()=>A("E");function ue(I){he[I?"unshift":"push"](()=>{o=I,t(0,o)})}function fe(I){he[I?"unshift":"push"](()=>{m=I,t(2,m)})}return[o,c,m,k,D,x,C,_,T,p,H,L,l,s,u,w,A,F,se,ne,de,Y,O,le,U,ue,fe]}class Vt extends oe{constructor(e){super(),ce(this,e,Et,wt,re,{},null,[-1,-1])}}export{Vt as component};
