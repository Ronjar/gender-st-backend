import{s as be,e as g,v as H,b as V,d as v,f as y,w as G,j as p,i as P,k as b,$ as $e,l as N,m as i,x as ee,n as X,q as Z,h as S,o as et,p as Xe,y as W,C as Ie,r as ae,A as tt,E as oe}from"../chunks/scheduler.Du_WS53y.js";import{S as me,i as pe,c as de,b as ue,m as fe,t as U,a as F,e as _e,d as he,g as ke}from"../chunks/index.BEvaicvu.js";import{d as st,w as ne}from"../chunks/index.B4nj-uY_.js";import{i as we,d as Ce,e as Ee,f as Ze,a as lt,h as Be,j as at,c as nt,q as rt}from"../chunks/store.DLfTZ2jX.js";import{T as ot}from"../chunks/Toast.Bjx2HoBZ.js";import{e as ve}from"../chunks/each.D6YF6ztN.js";function Te(l){let e,t,n;return{c(){e=g("div"),t=g("img"),this.h()},l(s){e=v(s,"DIV",{class:!0});var a=y(e);t=v(a,"IMG",{class:!0,alt:!0,src:!0}),a.forEach(p),this.h()},h(){b(t,"class","w-24 rounded-full"),b(t,"alt","User Avatar"),Z(t.src,n=l[3])||b(t,"src",n),b(e,"class","chat-image")},m(s,a){N(s,e,a),i(e,t)},p(s,a){a&8&&!Z(t.src,n=s[3])&&b(t,"src",n)},d(s){s&&p(e)}}}function it(l){let e,t,n,s,a,h,r=l[1]&&Te(l);return{c(){e=g("div"),t=g("div"),n=g("div"),s=H(l[0]),a=V(),r&&r.c(),this.h()},l(o){e=v(o,"DIV",{class:!0});var f=y(e);t=v(f,"DIV",{class:!0});var d=y(t);n=v(d,"DIV",{class:!0});var u=y(n);s=G(u,l[0]),u.forEach(p),a=P(d),r&&r.l(d),d.forEach(p),f.forEach(p),this.h()},h(){b(n,"class","chat-bubble text-3xl"),b(t,"class","chat chat-end"),b(e,"class",h="fixed bottom-0 right-0 mb-20 mr-20 bg-transparent shadow-none "+(l[2]?"animate-flyinbottom":"")+" svelte-1paxn1p"),$e(e,"invisible",!l[2])},m(o,f){N(o,e,f),i(e,t),i(t,n),i(n,s),i(t,a),r&&r.m(t,null)},p(o,[f]){f&1&&ee(s,o[0]),o[1]?r?r.p(o,f):(r=Te(o),r.c(),r.m(t,null)):r&&(r.d(1),r=null),f&4&&h!==(h="fixed bottom-0 right-0 mb-20 mr-20 bg-transparent shadow-none "+(o[2]?"animate-flyinbottom":"")+" svelte-1paxn1p")&&b(e,"class",h),f&4&&$e(e,"invisible",!o[2])},i:X,o:X,d(o){o&&p(e),r&&r.d()}}}function xe(){return"/img/npc/avatar"+Math.floor(Math.random()*9)+".png"}function ct(l,e,t){let n="Default message",s=!1,a=!1,h=xe();we.subscribe(d=>{t(1,s=d)});function r(){return a}function o(d){t(0,n=d),t(3,h=xe()),t(2,a=!0)}function f(){t(2,a=!1)}return[n,s,a,h,r,o,f]}class dt extends me{constructor(e){super(),pe(this,e,ct,it,be,{isShowing:4,showNarration:5,hideNarration:6})}get isShowing(){return this.$$.ctx[4]}get showNarration(){return this.$$.ctx[5]}get hideNarration(){return this.$$.ctx[6]}}function ye(l){let e,t,n="Score",s,a,h,r,o,f="right answers";return{c(){e=g("div"),t=g("div"),t.textContent=n,s=V(),a=g("div"),h=H(l[0]),r=V(),o=g("div"),o.textContent=f,this.h()},l(d){e=v(d,"DIV",{class:!0});var u=y(e);t=v(u,"DIV",{class:!0,"data-svelte-h":!0}),S(t)!=="svelte-7gzw0e"&&(t.textContent=n),s=P(u),a=v(u,"DIV",{class:!0});var c=y(a);h=G(c,l[0]),c.forEach(p),r=P(u),o=v(u,"DIV",{class:!0,"data-svelte-h":!0}),S(o)!=="svelte-40v8ly"&&(o.textContent=f),u.forEach(p),this.h()},h(){b(t,"class","stat-title"),b(a,"class","stat-value text-primary"),b(o,"class","stat-desc"),b(e,"class","stat")},m(d,u){N(d,e,u),i(e,t),i(e,s),i(e,a),i(a,h),i(e,r),i(e,o)},p(d,u){u&1&&ee(h,d[0])},d(d){d&&p(e)}}}function Ve(l){let e,t,n="Badges",s,a,h,r,o,f="badges unlocked";return{c(){e=g("div"),t=g("div"),t.textContent=n,s=V(),a=g("div"),h=H(l[1]),r=V(),o=g("div"),o.textContent=f,this.h()},l(d){e=v(d,"DIV",{class:!0});var u=y(e);t=v(u,"DIV",{class:!0,"data-svelte-h":!0}),S(t)!=="svelte-12jnhhi"&&(t.textContent=n),s=P(u),a=v(u,"DIV",{class:!0});var c=y(a);h=G(c,l[1]),c.forEach(p),r=P(u),o=v(u,"DIV",{class:!0,"data-svelte-h":!0}),S(o)!=="svelte-bn8m36"&&(o.textContent=f),u.forEach(p),this.h()},h(){b(t,"class","stat-title"),b(a,"class","stat-value text-primary"),b(o,"class","stat-desc"),b(e,"class","stat")},m(d,u){N(d,e,u),i(e,t),i(e,s),i(e,a),i(a,h),i(e,r),i(e,o)},p(d,u){u&2&&ee(h,d[1])},d(d){d&&p(e)}}}function Pe(l){let e,t,n="You placed",s,a,h=Ae(l[2])+"",r,o,f,d="on the leaderboard";return{c(){e=g("div"),t=g("div"),t.textContent=n,s=V(),a=g("div"),r=H(h),o=V(),f=g("div"),f.textContent=d,this.h()},l(u){e=v(u,"DIV",{class:!0});var c=y(e);t=v(c,"DIV",{class:!0,"data-svelte-h":!0}),S(t)!=="svelte-tohfta"&&(t.textContent=n),s=P(c),a=v(c,"DIV",{class:!0});var m=y(a);r=G(m,h),m.forEach(p),o=P(c),f=v(c,"DIV",{class:!0,"data-svelte-h":!0}),S(f)!=="svelte-kroy6e"&&(f.textContent=d),c.forEach(p),this.h()},h(){b(t,"class","stat-title"),b(a,"class","stat-value text-primary"),b(f,"class","stat-desc"),b(e,"class","stat")},m(u,c){N(u,e,c),i(e,t),i(e,s),i(e,a),i(a,r),i(e,o),i(e,f)},p(u,c){c&4&&h!==(h=Ae(u[2])+"")&&ee(r,h)},d(u){u&&p(e)}}}function ut(l){let e,t,n,s="You finished this rounds questions",a,h,r="These are the results",o,f,d,u,c,m,_='<form method="dialog"><button class="btn">Close</button></form>',C=l[3]&&ye(l),D=l[5]&&Ve(l),$=l[4]&&Pe(l);return{c(){e=g("dialog"),t=g("div"),n=g("h3"),n.textContent=s,a=V(),h=g("p"),h.textContent=r,o=V(),f=g("div"),C&&C.c(),d=V(),D&&D.c(),u=V(),$&&$.c(),c=V(),m=g("div"),m.innerHTML=_,this.h()},l(k){e=v(k,"DIALOG",{id:!0,class:!0});var x=y(e);t=v(x,"DIV",{class:!0});var B=y(t);n=v(B,"H3",{class:!0,"data-svelte-h":!0}),S(n)!=="svelte-1w490v0"&&(n.textContent=s),a=P(B),h=v(B,"P",{"data-svelte-h":!0}),S(h)!=="svelte-bk5b70"&&(h.textContent=r),o=P(B),f=v(B,"DIV",{class:!0});var E=y(f);C&&C.l(E),d=P(E),D&&D.l(E),u=P(E),$&&$.l(E),E.forEach(p),c=P(B),m=v(B,"DIV",{class:!0,"data-svelte-h":!0}),S(m)!=="svelte-ij97s3"&&(m.innerHTML=_),B.forEach(p),x.forEach(p),this.h()},h(){b(n,"class","font-bold text-lg"),b(f,"class","stats bg-base-200 shadow m-5"),b(m,"class","modal-action"),b(t,"class","modal-box max-w-2xl"),b(e,"id","score_modal"),b(e,"class","modal")},m(k,x){N(k,e,x),i(e,t),i(t,n),i(t,a),i(t,h),i(t,o),i(t,f),C&&C.m(f,null),i(f,d),D&&D.m(f,null),i(f,u),$&&$.m(f,null),i(t,c),i(t,m)},p(k,[x]){k[3]?C?C.p(k,x):(C=ye(k),C.c(),C.m(f,d)):C&&(C.d(1),C=null),k[5]?D?D.p(k,x):(D=Ve(k),D.c(),D.m(f,u)):D&&(D.d(1),D=null),k[4]?$?$.p(k,x):($=Pe(k),$.c(),$.m(f,null)):$&&($.d(1),$=null)},i:X,o:X,d(k){k&&p(e),C&&C.d(),D&&D.d(),$&&$.d()}}}function Ae(l){const e=l%10,t=l%100;return e==1&&t!=11?l+"st":e==2&&t!=12?l+"nd":e==3&&t!=13?l+"rd":l+"th"}function ft(l,e,t){let n,s=0,a=0,h=6,r=!1,o=!1,f=!1;function d(_){t(0,s=_)}function u(_){t(1,a=_)}function c(_){t(2,h=_)}Ce.subscribe(_=>{t(3,r=_)}),Ee.subscribe(_=>{t(4,o=_)}),Ze.subscribe(_=>{t(5,f=_)});function m(){(o||f||r)&&n&&n.showModal()}return et(()=>{n=document.getElementById("score_modal")}),[s,a,h,r,o,f,d,u,c,m]}class ht extends me{constructor(e){super(),pe(this,e,ft,ut,be,{setScore:6,setBadgeCount:7,setLeaderboardPlace:8,openModal:9})}get setScore(){return this.$$.ctx[6]}get setBadgeCount(){return this.$$.ctx[7]}get setLeaderboardPlace(){return this.$$.ctx[8]}get openModal(){return this.$$.ctx[9]}}const Me=["Keep going, you'll get it next time!","Don't worry, practice makes perfect.","Every mistake is a step forward.","You're learning, and that's what matters!","Stay positive, you'll succeed!","Mistakes are proof you're trying.","You're closer than you think!","Keep your head up, you're improving.","It's okay to get it wrong, keep trying!","You've got this, just keep at it!"],Ne=["Great job! I knew you could do it.","Excellent work, keep it up!","You're doing amazing, well done!","Fantastic! You nailed it.","You're on a roll, awesome!","Perfect! Keep shining.","Bravo! That's the right answer.","Outstanding work, you're unstoppable!","You're killing it, amazing job!","Superb! You're doing great."];function bt(){const l=Math.floor(Math.random()*Ne.length);return Ne[l]}function mt(){const l=Math.floor(Math.random()*Me.length);return Me[l]}function Le(l,e,...t){Math.random()<l&&e(...t)}function Se(l,e,t){const n=l.slice();return n[3]=e[t],n}function qe(l){let e,t,n,s,a,h,r,o=l[3].tooltip+"",f,d,u;return{c(){e=g("div"),t=g("div"),n=g("img"),h=V(),r=g("p"),f=H(o),d=V(),this.h()},l(c){e=v(c,"DIV",{class:!0,"data-tip":!0});var m=y(e);t=v(m,"DIV",{class:!0});var _=y(t);n=v(_,"IMG",{src:!0,alt:!0,class:!0}),_.forEach(p),h=P(m),r=v(m,"P",{class:!0});var C=y(r);f=G(C,o),C.forEach(p),d=P(m),m.forEach(p),this.h()},h(){Z(n.src,s=l[3].src)||b(n,"src",s),b(n,"alt","Badge"),b(n,"class",a="w-24 h-24 rounded-xl "+(l[3].unlocked?"animate-unlock":"grayscale")),b(t,"class","flex justify-center"),b(r,"class","stat-desc"),b(e,"class","tooltip"),b(e,"data-tip",u=l[3].tooltip)},m(c,m){N(c,e,m),i(e,t),i(t,n),i(e,h),i(e,r),i(r,f),i(e,d)},p(c,m){m&1&&!Z(n.src,s=c[3].src)&&b(n,"src",s),m&1&&a!==(a="w-24 h-24 rounded-xl "+(c[3].unlocked?"animate-unlock":"grayscale"))&&b(n,"class",a),m&1&&o!==(o=c[3].tooltip+"")&&ee(f,o),m&1&&u!==(u=c[3].tooltip)&&b(e,"data-tip",u)},d(c){c&&p(e)}}}function pt(l){let e,t,n="Badges",s,a,h=ve(l[0]),r=[];for(let o=0;o<h.length;o+=1)r[o]=qe(Se(l,h,o));return{c(){e=g("div"),t=g("p"),t.textContent=n,s=V(),a=g("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=v(o,"DIV",{class:!0});var f=y(e);t=v(f,"P",{class:!0,"data-svelte-h":!0}),S(t)!=="svelte-1xkaddo"&&(t.textContent=n),s=P(f),a=v(f,"DIV",{class:!0});var d=y(a);for(let u=0;u<r.length;u+=1)r[u].l(d);d.forEach(p),f.forEach(p),this.h()},h(){b(t,"class","stat-title mb-6"),b(a,"class","grid grid-cols-2 grid-rows-2 gap-12"),b(e,"class","w-1/2 bg-base-200 p-4 rounded-xl shadow-md")},m(o,f){N(o,e,f),i(e,t),i(e,s),i(e,a);for(let d=0;d<r.length;d+=1)r[d]&&r[d].m(a,null)},p(o,[f]){if(f&1){h=ve(o[0]);let d;for(d=0;d<h.length;d+=1){const u=Se(o,h,d);r[d]?r[d].p(u,f):(r[d]=qe(u),r[d].c(),r[d].m(a,null))}for(;d<r.length;d+=1)r[d].d(1);r.length=h.length}},i:X,o:X,d(o){o&&p(e),Xe(r,o)}}}function gt(l,e,t){let n=[{id:1,src:"/img/badges/badge1.png",unlocked:!1,tooltip:"Get 1 right answer"},{id:2,src:"/img/badges/badge2.png",unlocked:!1,tooltip:"Get 5 right answers"},{id:3,src:"/img/badges/badge3.png",unlocked:!1,tooltip:"Get 10 right answers"},{id:4,src:"/img/badges/badge4.png",unlocked:!1,tooltip:"Get 18 right answers"}];function s(){return n.filter(h=>h.unlocked).length}function a(h){t(0,n=n.map(r=>r.id===h?{...r,unlocked:!0}:r))}return[n,s,a]}class vt extends me{constructor(e){super(),pe(this,e,gt,pt,be,{unlockedBadgesCount:1,unlockBadge:2})}get unlockedBadgesCount(){return this.$$.ctx[1]}get unlockBadge(){return this.$$.ctx[2]}}function Ye(l,e,t){const n=l.slice();return n[10]=e[t],n[12]=t,n}function Oe(l){let e,t="Profile";return{c(){e=g("th"),e.textContent=t,this.h()},l(n){e=v(n,"TH",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-12kkcfa"&&(e.textContent=t),this.h()},h(){b(e,"class","w-1/4")},m(n,s){N(n,e,s)},d(n){n&&p(e)}}}function je(l){let e,t="Score";return{c(){e=g("th"),e.textContent=t,this.h()},l(n){e=v(n,"TH",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-vb1yll"&&(e.textContent=t),this.h()},h(){b(e,"class","w-2/4 text-center")},m(n,s){N(n,e,s)},d(n){n&&p(e)}}}function Ue(l){let e,t,n;return{c(){e=g("td"),t=g("img"),this.h()},l(s){e=v(s,"TD",{class:!0});var a=y(e);t=v(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(p),this.h()},h(){Z(t.src,n=l[10].profilePic)||b(t,"src",n),b(t,"alt","profile"),b(t,"class","w-20 h-20 rounded-full"),b(e,"class","flex justify-center items-center")},m(s,a){N(s,e,a),i(e,t)},p(s,a){a&4&&!Z(t.src,n=s[10].profilePic)&&b(t,"src",n)},d(s){s&&p(e)}}}function He(l){let e,t=l[10].score+"",n;return{c(){e=g("td"),n=H(t),this.h()},l(s){e=v(s,"TD",{class:!0});var a=y(e);n=G(a,t),a.forEach(p),this.h()},h(){b(e,"class","text-center text-lg")},m(s,a){N(s,e,a),i(e,n)},p(s,a){a&4&&t!==(t=s[10].score+"")&&ee(n,t)},d(s){s&&p(e)}}}function Ge(l){let e,t,n=l[12]+1+"",s,a,h,r,o=l[10].playerName+"",f,d,u,c,m=l[0]&&Ue(l),_=l[1]&&He(l);return{c(){e=g("tr"),t=g("td"),s=H(n),a=V(),m&&m.c(),h=V(),r=g("td"),f=H(o),d=V(),_&&_.c(),u=V(),this.h()},l(C){e=v(C,"TR",{class:!0});var D=y(e);t=v(D,"TD",{class:!0});var $=y(t);s=G($,n),$.forEach(p),a=P(D),m&&m.l(D),h=P(D),r=v(D,"TD",{class:!0});var k=y(r);f=G(k,o),k.forEach(p),d=P(D),_&&_.l(D),u=P(D),D.forEach(p),this.h()},h(){b(t,"class","text-center text-lg"),b(r,"class","text-center text-lg"),b(e,"class",c=l[10].isYou?"bg-base-300 rounded-l":"bg-base-200")},m(C,D){N(C,e,D),i(e,t),i(t,s),i(e,a),m&&m.m(e,null),i(e,h),i(e,r),i(r,f),i(e,d),_&&_.m(e,null),i(e,u)},p(C,D){C[0]?m?m.p(C,D):(m=Ue(C),m.c(),m.m(e,h)):m&&(m.d(1),m=null),D&4&&o!==(o=C[10].playerName+"")&&ee(f,o),C[1]?_?_.p(C,D):(_=He(C),_.c(),_.m(e,u)):_&&(_.d(1),_=null),D&4&&c!==(c=C[10].isYou?"bg-base-300 rounded-l":"bg-base-200")&&b(e,"class",c)},d(C){C&&p(e),m&&m.d(),_&&_.d()}}}function _t(l){let e,t,n="<b>Leaderboard</b>",s,a,h,r,o,f="Rank",d,u,c,m="Name",_,C,D,$=l[0]&&Oe(),k=l[1]&&je(),x=ve(l[2]),B=[];for(let E=0;E<x.length;E+=1)B[E]=Ge(Ye(l,x,E));return{c(){e=g("div"),t=g("span"),t.innerHTML=n,s=V(),a=g("table"),h=g("thead"),r=g("tr"),o=g("th"),o.textContent=f,d=V(),$&&$.c(),u=V(),c=g("th"),c.textContent=m,_=V(),k&&k.c(),C=V(),D=g("tbody");for(let E=0;E<B.length;E+=1)B[E].c();this.h()},l(E){e=v(E,"DIV",{class:!0});var q=y(e);t=v(q,"SPAN",{class:!0,"data-svelte-h":!0}),S(t)!=="svelte-1dg7f05"&&(t.innerHTML=n),s=P(q),a=v(q,"TABLE",{class:!0});var I=y(a);h=v(I,"THEAD",{class:!0});var A=y(h);r=v(A,"TR",{class:!0});var w=y(r);o=v(w,"TH",{class:!0,"data-svelte-h":!0}),S(o)!=="svelte-1i0zvsj"&&(o.textContent=f),d=P(w),$&&$.l(w),u=P(w),c=v(w,"TH",{class:!0,"data-svelte-h":!0}),S(c)!=="svelte-ql0o3m"&&(c.textContent=m),_=P(w),k&&k.l(w),w.forEach(p),A.forEach(p),C=P(I),D=v(I,"TBODY",{});var M=y(D);for(let j=0;j<B.length;j+=1)B[j].l(M);M.forEach(p),I.forEach(p),q.forEach(p),this.h()},h(){b(t,"class","text-primary stat-value"),b(o,"class","w-1/4"),b(c,"class","w-1/4"),b(r,"class","my-10"),b(h,"class","my-10"),b(a,"class","table w-full table-auto mt-10"),b(e,"class","bg-base-200 shadow-md rounded-xl p-6")},m(E,q){N(E,e,q),i(e,t),i(e,s),i(e,a),i(a,h),i(h,r),i(r,o),i(r,d),$&&$.m(r,null),i(r,u),i(r,c),i(r,_),k&&k.m(r,null),i(a,C),i(a,D);for(let I=0;I<B.length;I+=1)B[I]&&B[I].m(D,null)},p(E,[q]){if(E[0]?$||($=Oe(),$.c(),$.m(r,u)):$&&($.d(1),$=null),E[1]?k||(k=je(),k.c(),k.m(r,null)):k&&(k.d(1),k=null),q&7){x=ve(E[2]);let I;for(I=0;I<x.length;I+=1){const A=Ye(E,x,I);B[I]?B[I].p(A,q):(B[I]=Ge(A),B[I].c(),B[I].m(D,null))}for(;I<B.length;I+=1)B[I].d(1);B.length=x.length}},i:X,o:X,d(E){E&&p(e),$&&$.d(),k&&k.d(),Xe(B,E)}}}function ie(l){return l+(3-Math.floor(Math.random()*6))}function ce(l){let e;do e=1+Math.floor(Math.random()*8);while(l.has(e));return l.add(e),{profilePic:`/img/npc/avatar${e}.png`,playerName:`Player ${e}`}}function kt(l,e,t){let n=!1,s=!1;we.subscribe(c=>{t(0,n=c)}),Ce.subscribe(c=>{t(1,s=c)}),Ee.subscribe(c=>{});let a=new Set,h=[{score:ie(16),...ce(a),isYou:!1},{score:ie(13),...ce(a),isYou:!1},{score:ie(10),...ce(a),isYou:!1},{score:ie(7),...ce(a),isYou:!1},{score:ie(4),...ce(a),isYou:!1}],r=ne(0);function o(c){r.set(c)}const f=st([r],([c])=>[...h,{profilePic:W(lt),playerName:"You",score:c,isYou:!0}].sort((_,C)=>C.score-_.score));let d=[];f.subscribe(c=>{t(2,d=c)});function u(){return d.findIndex(m=>m.isYou)+1}return[n,s,d,o,u]}class wt extends me{constructor(e){super(),pe(this,e,kt,_t,be,{updateUserScore:3,getLeaderboardPlacement:4})}get updateUserScore(){return this.$$.ctx[3]}get getLeaderboardPlacement(){return this.$$.ctx[4]}}function Re(l){let e,t,n={};return e=new dt({props:n}),l[18](e),{c(){de(e.$$.fragment)},l(s){ue(e.$$.fragment,s)},m(s,a){fe(e,s,a),t=!0},p(s,a){const h={};e.$set(h)},i(s){t||(U(e.$$.fragment,s),t=!0)},o(s){F(e.$$.fragment,s),t=!1},d(s){l[18](null),he(e,s)}}}function ze(l){let e,t,n={};return e=new wt({props:n}),l[19](e),{c(){de(e.$$.fragment)},l(s){ue(e.$$.fragment,s)},m(s,a){fe(e,s,a),t=!0},p(s,a){const h={};e.$set(h)},i(s){t||(U(e.$$.fragment,s),t=!0)},o(s){F(e.$$.fragment,s),t=!1},d(s){l[19](null),he(e,s)}}}function Qe(l){let e,t="Answer the following question",n,s,a=`Choose the option that best fits to replace the question\r
                    mark`,h,r,o,f,d,u,c,m,_,C,D,$,k,x,B,E,q,I,A,w,M,j,R,O,K,se,re,ge;return{c(){e=g("p"),e.textContent=t,n=V(),s=g("p"),s.textContent=a,h=V(),r=g("div"),o=g("div"),f=g("img"),u=V(),c=g("div"),m=g("button"),_=H("Option A"),D=V(),$=g("button"),k=H("Option B"),B=V(),E=g("button"),q=H("Option C"),A=V(),w=g("button"),M=H("Option D"),R=V(),O=g("button"),K=H("Option E"),this.h()},l(L){e=v(L,"P",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-1i98t55"&&(e.textContent=t),n=P(L),s=v(L,"P",{class:!0,"data-svelte-h":!0}),S(s)!=="svelte-mw9j0n"&&(s.textContent=a),h=P(L),r=v(L,"DIV",{class:!0});var Y=y(r);o=v(Y,"DIV",{class:!0});var le=y(o);f=v(le,"IMG",{src:!0,alt:!0,class:!0}),u=P(le),c=v(le,"DIV",{class:!0});var z=y(c);m=v(z,"BUTTON",{class:!0});var T=y(m);_=G(T,"Option A"),T.forEach(p),D=P(z),$=v(z,"BUTTON",{class:!0});var J=y($);k=G(J,"Option B"),J.forEach(p),B=P(z),E=v(z,"BUTTON",{class:!0});var te=y(E);q=G(te,"Option C"),te.forEach(p),A=P(z),w=v(z,"BUTTON",{class:!0});var Q=y(w);M=G(Q,"Option D"),Q.forEach(p),R=P(z),O=v(z,"BUTTON",{class:!0});var De=y(O);K=G(De,"Option E"),De.forEach(p),z.forEach(p),le.forEach(p),Y.forEach(p),this.h()},h(){b(e,"class","text-xl"),b(s,"class","text-m mb-20"),Z(f.src,d=l[10])||b(f,"src",d),b(f,"alt","Question"),b(f,"class","w-3/4 h-3/4"),b(m,"class","btn btn-primary"),m.disabled=C=!l[11],b($,"class","btn btn-primary"),$.disabled=x=!l[11],b(E,"class","btn btn-primary"),E.disabled=I=!l[11],b(w,"class","btn btn-primary"),w.disabled=j=!l[11],b(O,"class","btn btn-primary"),O.disabled=se=!l[11],b(c,"class","flex mt-4 space-x-4"),b(o,"class","flex flex-col items-center"),b(r,"class","flex justify-between items-center")},m(L,Y){N(L,e,Y),N(L,n,Y),N(L,s,Y),N(L,h,Y),N(L,r,Y),i(r,o),i(o,f),i(o,u),i(o,c),i(c,m),i(m,_),i(c,D),i(c,$),i($,k),i(c,B),i(c,E),i(E,q),i(c,A),i(c,w),i(w,M),i(c,R),i(c,O),i(O,K),re||(ge=[ae(f,"load",l[16]),ae(m,"click",l[20]),ae($,"click",l[21]),ae(E,"click",l[22]),ae(w,"click",l[23]),ae(O,"click",l[24])],re=!0)},p(L,Y){Y[0]&1024&&!Z(f.src,d=L[10])&&b(f,"src",d),Y[0]&2048&&C!==(C=!L[11])&&(m.disabled=C),Y[0]&2048&&x!==(x=!L[11])&&($.disabled=x),Y[0]&2048&&I!==(I=!L[11])&&(E.disabled=I),Y[0]&2048&&j!==(j=!L[11])&&(w.disabled=j),Y[0]&2048&&se!==(se=!L[11])&&(O.disabled=se)},d(L){L&&(p(e),p(n),p(s),p(h),p(r)),re=!1,tt(ge)}}}function Fe(l){let e,t=`<div class="mx-auto"><h2>Thank you for completing this round of logic
                            puzzles!<br/> Now, we have some questions for you. To
                            proceed, please press the button below.</h2> <a class="btn btn-primary mt-10 w-full" href="/stai">Proceed to questions</a></div>`;return{c(){e=g("div"),e.innerHTML=t,this.h()},l(n){e=v(n,"DIV",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-1wzqig9"&&(e.innerHTML=t),this.h()},h(){b(e,"class","flex justify-center items-center h-64")},m(n,s){N(n,e,s)},d(n){n&&p(e)}}}function Ke(l){let e,t,n="Score",s,a,h,r,o,f="1 point per question";return{c(){e=g("div"),t=g("div"),t.textContent=n,s=V(),a=g("div"),h=H(l[12]),r=V(),o=g("div"),o.textContent=f,this.h()},l(d){e=v(d,"DIV",{class:!0});var u=y(e);t=v(u,"DIV",{class:!0,"data-svelte-h":!0}),S(t)!=="svelte-7gzw0e"&&(t.textContent=n),s=P(u),a=v(u,"DIV",{class:!0});var c=y(a);h=G(c,l[12]),c.forEach(p),r=P(u),o=v(u,"DIV",{class:!0,"data-svelte-h":!0}),S(o)!=="svelte-kk3gaz"&&(o.textContent=f),u.forEach(p),this.h()},h(){b(t,"class","stat-title"),b(a,"class","stat-value text-primary"),b(o,"class","stat-desc"),b(e,"class","w-1/2 stat bg-base-200 mb-10 p-4 rounded-xl shadow-md")},m(d,u){N(d,e,u),i(e,t),i(e,s),i(e,a),i(a,h),i(e,r),i(e,o)},p(d,u){u[0]&4096&&ee(h,d[12])},d(d){d&&p(e)}}}function We(l){let e,t,n={};return e=new vt({props:n}),l[26](e),{c(){de(e.$$.fragment)},l(s){ue(e.$$.fragment,s)},m(s,a){fe(e,s,a),t=!0},p(s,a){const h={};e.$set(h)},i(s){t||(U(e.$$.fragment,s),t=!0)},o(s){F(e.$$.fragment,s),t=!1},d(s){l[26](null),he(e,s)}}}function Ct(l){let e,t,n,s,a,h,r,o,f,d,u,c,m,_,C,D,$={};e=new ht({props:$}),l[17](e);let k=l[7]&&Re(l),x=l[6]&&ze(l),B=!l[9]&&Qe(l),E=l[9]&&Fe(),q={};c=new ot({props:q}),l[25](c);let I=l[5]&&Ke(l),A=l[8]&&We(l);return{c(){de(e.$$.fragment),t=V(),k&&k.c(),n=V(),s=g("div"),a=g("div"),x&&x.c(),h=V(),r=g("div"),o=g("div"),B&&B.c(),f=V(),E&&E.c(),u=V(),de(c.$$.fragment),m=V(),_=g("div"),I&&I.c(),C=V(),A&&A.c(),this.h()},l(w){ue(e.$$.fragment,w),t=P(w),k&&k.l(w),n=P(w),s=v(w,"DIV",{class:!0});var M=y(s);a=v(M,"DIV",{class:!0});var j=y(a);x&&x.l(j),j.forEach(p),h=P(M),r=v(M,"DIV",{class:!0});var R=y(r);o=v(R,"DIV",{class:!0});var O=y(o);B&&B.l(O),f=P(O),E&&E.l(O),O.forEach(p),u=P(R),ue(c.$$.fragment,R),R.forEach(p),m=P(M),_=v(M,"DIV",{class:!0});var K=y(_);I&&I.l(K),C=P(K),A&&A.l(K),K.forEach(p),M.forEach(p),this.h()},h(){b(a,"class","w-1/4 mx-auto"),b(o,"class",d=l[11]?"":"grayscale brightness-50 pointer-events-none"),b(r,"class","p-6 w-1/2 mx-10 bg-base-200 rounded-xl shadow-md"),b(_,"class","w-1/4 mx-auto flex flex-col"),b(s,"class","flex justify-between")},m(w,M){fe(e,w,M),N(w,t,M),k&&k.m(w,M),N(w,n,M),N(w,s,M),i(s,a),x&&x.m(a,null),i(s,h),i(s,r),i(r,o),B&&B.m(o,null),i(o,f),E&&E.m(o,null),i(r,u),fe(c,r,null),i(s,m),i(s,_),I&&I.m(_,null),i(_,C),A&&A.m(_,null),D=!0},p(w,M){const j={};e.$set(j),w[7]?k?(k.p(w,M),M[0]&128&&U(k,1)):(k=Re(w),k.c(),U(k,1),k.m(n.parentNode,n)):k&&(ke(),F(k,1,1,()=>{k=null}),_e()),w[6]?x?(x.p(w,M),M[0]&64&&U(x,1)):(x=ze(w),x.c(),U(x,1),x.m(a,null)):x&&(ke(),F(x,1,1,()=>{x=null}),_e()),w[9]?B&&(B.d(1),B=null):B?B.p(w,M):(B=Qe(w),B.c(),B.m(o,f)),w[9]?E||(E=Fe(),E.c(),E.m(o,null)):E&&(E.d(1),E=null),(!D||M[0]&2048&&d!==(d=w[11]?"":"grayscale brightness-50 pointer-events-none"))&&b(o,"class",d);const R={};c.$set(R),w[5]?I?I.p(w,M):(I=Ke(w),I.c(),I.m(_,C)):I&&(I.d(1),I=null),w[8]?A?(A.p(w,M),M[0]&256&&U(A,1)):(A=We(w),A.c(),U(A,1),A.m(_,null)):A&&(ke(),F(A,1,1,()=>{A=null}),_e())},i(w){D||(U(e.$$.fragment,w),U(k),U(x),U(c.$$.fragment,w),U(A),D=!0)},o(w){F(e.$$.fragment,w),F(k),F(x),F(c.$$.fragment,w),F(A),D=!1},d(w){w&&(p(t),p(n),p(s)),l[17](null),he(e,w),k&&k.d(w),x&&x.d(),B&&B.d(),E&&E.d(),l[25](null),he(c),I&&I.d(),A&&A.d()}}}const Je=20;function Et(l,e,t){let n,s,a=ne(0+W(Be)),h=ne(0);Ie(l,h,T=>t(12,s=T));let r=ne([]),o=ne([]),f,d,u,c,m,_,C=ne(!0);Ie(l,C,T=>t(11,n=T));let D=!1,$=!1,k=!1,x=!1,B=!1;we.subscribe(T=>{}),Ce.subscribe(T=>{t(5,D=T)}),Ee.subscribe(T=>{t(6,$=T)}),at.subscribe(T=>{t(7,k=T)}),Ze.subscribe(T=>{t(8,x=T)});let E=["B","E","E","E","A","B","D","E","B","B","E","B","C","E","A","C","B","D","B","A","E","B","A","C","D","A","A","A","C","D","B","D","A","B","A","D","A","B","A","B","D","B","D","B","E","C","B","C","E","C","B","D","B","A","C","D","A","E","D","D"];function q(T){const J=T?"Correct answer!":"Wrong answer!";d.showToast(T,J)}const I=async T=>{C.set(!1);const te=Date.now()-f;o.update(Q=>[...Q,te]),E[W(a)]===T?(h.update(Q=>Q+1),r.update(Q=>[...Q,!0]),q(!0),u!==void 0&&Le(.2,u.showNarration,bt())):(r.update(Q=>[...Q,!1]),q(!1),u!==void 0&&Le(.2,u.showNarration,mt())),await w(),await A(),a.update(Q=>Q+1),u!==void 0&&u.hideNarration(),C.set(!0)},A=()=>new Promise(T=>{u!==void 0&&u.isShowing()?setTimeout(()=>T(!0),4e3):setTimeout(()=>T(!0),1e3)}),w=()=>new Promise(T=>{const J=W(a)+1;if(J<Je){const te=new Image;te.src=`/img/questions/q-${J}.png`,te.onload=()=>T(!0)}else T(!0)});h.subscribe(T=>{if(m!==void 0&&m.updateUserScore(T),c!==void 0)switch(T){case 1:c.unlockBadge(1);break;case 5:c.unlockBadge(2);break;case 10:c.unlockBadge(3);break;case 18:c.unlockBadge(4);break}});let M=`/img/questions/q-${0+W(Be)}.png`;a.subscribe(T=>{W(r).length<Je?t(10,M=`/img/questions/q-${T}.png`):(_.setScore(W(h)),x&&_.setBadgeCount(c.unlockedBadgesCount()),$&&_.setLeaderboardPlace(m.getLeaderboardPlacement()),_.openModal(),nt.set(W(o)),rt.set(W(r)),t(9,B=!0))});function j(){f=Date.now()}function R(T){oe[T?"unshift":"push"](()=>{_=T,t(4,_)})}function O(T){oe[T?"unshift":"push"](()=>{u=T,t(1,u)})}function K(T){oe[T?"unshift":"push"](()=>{m=T,t(3,m)})}const se=()=>I("A"),re=()=>I("B"),ge=()=>I("C"),L=()=>I("D"),Y=()=>I("E");function le(T){oe[T?"unshift":"push"](()=>{d=T,t(0,d)})}function z(T){oe[T?"unshift":"push"](()=>{c=T,t(2,c)})}return[d,u,c,m,_,D,$,k,x,B,M,n,s,h,C,I,j,R,O,K,se,re,ge,L,Y,le,z]}class yt extends me{constructor(e){super(),pe(this,e,Et,Ct,be,{},null,[-1,-1])}}export{yt as component};
