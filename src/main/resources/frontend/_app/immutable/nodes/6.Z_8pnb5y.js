import{s as ft,G as ht,e as s,b as S,v as we,d as r,f as B,h as x,i as E,j as g,w as Ue,k as t,F as y,H as ct,l as se,m as a,I as ke,r as b,J as ut,x as dt,n as Ke,A as gt,p as pt,K as $e}from"../chunks/scheduler.Du_WS53y.js";import{e as et}from"../chunks/each.D6YF6ztN.js";import{S as mt,i as _t}from"../chunks/index.BEvaicvu.js";import{g as vt,u as St}from"../chunks/store.DLfTZ2jX.js";import{g as tt}from"../chunks/entry.DOTsWPl6.js";import{B as Et}from"../chunks/constants.BWkPU7VE.js";function nt(i,l,e){const c=i.slice();return c[35]=l[e],c}function it(i){let l,e,c,p;return{c(){l=s("div"),e=s("div"),c=s("label"),p=we(i[4]),this.h()},l(n){l=r(n,"DIV",{class:!0});var h=B(l);e=r(h,"DIV",{class:!0});var v=B(e);c=r(v,"LABEL",{});var m=B(c);p=Ue(m,i[4]),m.forEach(g),v.forEach(g),h.forEach(g),this.h()},h(){t(e,"class","flex-1"),t(l,"class","alert alert-error")},m(n,h){se(n,l,h),a(l,e),a(e,c),a(c,p)},p(n,h){h[0]&16&&dt(p,n[4])},d(n){n&&g(l)}}}function lt(i){let l,e,c='<span class="label-text">Study Program</span>',p,n,h,v="Select your study program",m,P,_=et(i[9]),u=[];for(let d=0;d<_.length;d+=1)u[d]=at(nt(i,_,d));return{c(){l=s("div"),e=s("label"),e.innerHTML=c,p=S(),n=s("select"),h=s("option"),h.textContent=v;for(let d=0;d<u.length;d+=1)u[d].c();this.h()},l(d){l=r(d,"DIV",{class:!0});var T=B(l);e=r(T,"LABEL",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-1p1x81i"&&(e.innerHTML=c),p=E(T),n=r(T,"SELECT",{class:!0});var o=B(n);h=r(o,"OPTION",{"data-svelte-h":!0}),x(h)!=="svelte-y0acuz"&&(h.textContent=v);for(let z=0;z<u.length;z+=1)u[z].l(o);o.forEach(g),T.forEach(g),this.h()},h(){t(e,"class","label"),h.__value="",y(h,h.__value),h.disabled=!0,h.selected=!0,t(n,"class","select select-bordered"),i[2]===void 0&&ct(()=>i[17].call(n)),t(l,"class","form-control")},m(d,T){se(d,l,T),a(l,e),a(l,p),a(l,n),a(n,h);for(let o=0;o<u.length;o+=1)u[o]&&u[o].m(n,null);ke(n,i[2],!0),m||(P=b(n,"change",i[17]),m=!0)},p(d,T){if(T[0]&512){_=et(d[9]);let o;for(o=0;o<_.length;o+=1){const z=nt(d,_,o);u[o]?u[o].p(z,T):(u[o]=at(z),u[o].c(),u[o].m(n,null))}for(;o<u.length;o+=1)u[o].d(1);u.length=_.length}T[0]&516&&ke(n,d[2])},d(d){d&&g(l),pt(u,d),m=!1,P()}}}function at(i){let l,e=i[35]+"",c;return{c(){l=s("option"),c=we(e),this.h()},l(p){l=r(p,"OPTION",{});var n=B(l);c=Ue(n,e),n.forEach(g),this.h()},h(){l.__value=i[35],y(l,l.__value)},m(p,n){se(p,l,n),a(l,c)},p:Ke,d(p){p&&g(l)}}}function st(i){let l,e,c='<span class="label-text">Area of research</span>',p,n,h,v;return{c(){l=s("div"),e=s("label"),e.innerHTML=c,p=S(),n=s("input"),this.h()},l(m){l=r(m,"DIV",{class:!0});var P=B(l);e=r(P,"LABEL",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-8xu770"&&(e.innerHTML=c),p=E(P),n=r(P,"INPUT",{type:!0,class:!0,maxlength:!0,autocomplete:!0}),P.forEach(g),this.h()},h(){t(e,"class","label"),t(n,"type","text"),t(n,"class","input input-bordered"),t(n,"maxlength","100"),t(n,"autocomplete","off"),t(l,"class","form-control")},m(m,P){se(m,l,P),a(l,e),a(l,p),a(l,n),y(n,i[3]),h||(v=b(n,"input",i[18]),h=!0)},p(m,P){P[0]&8&&n.value!==m[3]&&y(n,m[3])},d(m){m&&g(l),h=!1,v()}}}function rt(i){let l;return{c(){l=s("span"),this.h()},l(e){l=r(e,"SPAN",{class:!0}),B(l).forEach(g),this.h()},h(){t(l,"class","loading loading-spinner svelte-o44jv8")},m(e,c){se(e,l,c)},d(e){e&&g(l)}}}function ot(i){let l;return{c(){l=we("Proceed to next page")},l(e){l=Ue(e,"Proceed to next page")},m(e,c){se(e,l,c)},d(e){e&&g(l)}}}function Mt(i){let l,e,c="Personal Data",p,n,h,v,m,P='<span class="label-text">Gender</span>',_,u,d,T="Select your gender",o,z="Male",J,Se="Female",K,Ee="Other",ue,Q,te,Me='<span class="label-text">Age</span>',de,j,fe,Z,ne,be='<span class="label-text">User Type</span>',he,X,Y,C,ge,ie,ye="Student",pe,M,I,me,q,le="PhD Student",Re,Be,Ae,$,ae,Qe='<span class="label-text">Deletion code</span>',Ge,F,U,Ve,L,je,R,Fe,D,xe,N,We,re,Te,qe,oe,W,Pe,ze,Je,Ze,H=i[4]&&it(i),O=i[8]==="student"&&lt(i),k=i[8]==="PhD student"&&st(i),G=i[5]&&rt(),V=!i[5]&&ot();return ze=ht(i[15][0]),{c(){l=s("div"),e=s("h1"),e.textContent=c,p=S(),n=s("form"),H&&H.c(),h=S(),v=s("div"),m=s("label"),m.innerHTML=P,_=S(),u=s("select"),d=s("option"),d.textContent=T,o=s("option"),o.textContent=z,J=s("option"),J.textContent=Se,K=s("option"),K.textContent=Ee,ue=S(),Q=s("div"),te=s("label"),te.innerHTML=Me,de=S(),j=s("input"),fe=S(),Z=s("div"),ne=s("label"),ne.innerHTML=be,he=S(),X=s("div"),Y=s("label"),C=s("input"),ge=S(),ie=s("span"),ie.textContent=ye,pe=S(),M=s("label"),I=s("input"),me=S(),q=s("span"),q.textContent=le,Re=S(),O&&O.c(),Be=S(),k&&k.c(),Ae=S(),$=s("div"),ae=s("label"),ae.innerHTML=Qe,Ge=S(),F=s("div"),U=s("input"),Ve=S(),L=s("input"),je=S(),R=s("input"),Fe=S(),D=s("input"),xe=S(),N=s("input"),We=S(),re=s("div"),Te=we(i[7]),qe=S(),oe=s("div"),W=s("button"),G&&G.c(),Pe=S(),V&&V.c(),this.h()},l(f){l=r(f,"DIV",{class:!0});var A=B(l);e=r(A,"H1",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-1rxb9c6"&&(e.textContent=c),p=E(A),n=r(A,"FORM",{class:!0});var w=B(n);H&&H.l(w),h=E(w),v=r(w,"DIV",{class:!0});var Ce=B(v);m=r(Ce,"LABEL",{class:!0,"data-svelte-h":!0}),x(m)!=="svelte-1g7lnaq"&&(m.innerHTML=P),_=E(Ce),u=r(Ce,"SELECT",{class:!0});var _e=B(u);d=r(_e,"OPTION",{"data-svelte-h":!0}),x(d)!=="svelte-1wyn3f3"&&(d.textContent=T),o=r(_e,"OPTION",{"data-svelte-h":!0}),x(o)!=="svelte-8wnvoi"&&(o.textContent=z),J=r(_e,"OPTION",{"data-svelte-h":!0}),x(J)!=="svelte-kgyr86"&&(J.textContent=Se),K=r(_e,"OPTION",{"data-svelte-h":!0}),x(K)!=="svelte-902jce"&&(K.textContent=Ee),_e.forEach(g),Ce.forEach(g),ue=E(w),Q=r(w,"DIV",{class:!0});var Ie=B(Q);te=r(Ie,"LABEL",{class:!0,"data-svelte-h":!0}),x(te)!=="svelte-czbb0s"&&(te.innerHTML=Me),de=E(Ie),j=r(Ie,"INPUT",{type:!0,class:!0,min:!0,max:!0}),Ie.forEach(g),fe=E(w),Z=r(w,"DIV",{class:!0});var Le=B(Z);ne=r(Le,"LABEL",{class:!0,"data-svelte-h":!0}),x(ne)!=="svelte-11q412q"&&(ne.innerHTML=be),he=E(Le),X=r(Le,"DIV",{class:!0});var De=B(X);Y=r(De,"LABEL",{class:!0});var Ne=B(Y);C=r(Ne,"INPUT",{type:!0,class:!0}),ge=E(Ne),ie=r(Ne,"SPAN",{"data-svelte-h":!0}),x(ie)!=="svelte-1xzsdyf"&&(ie.textContent=ye),Ne.forEach(g),pe=E(De),M=r(De,"LABEL",{class:!0});var He=B(M);I=r(He,"INPUT",{type:!0,class:!0}),me=E(He),q=r(He,"SPAN",{"data-svelte-h":!0}),x(q)!=="svelte-1e2rw8r"&&(q.textContent=le),He.forEach(g),De.forEach(g),Le.forEach(g),Re=E(w),O&&O.l(w),Be=E(w),k&&k.l(w),Ae=E(w),$=r(w,"DIV",{class:!0});var ce=B($);ae=r(ce,"LABEL",{class:!0,"data-svelte-h":!0}),x(ae)!=="svelte-1dc6ewk"&&(ae.innerHTML=Qe),Ge=E(ce),F=r(ce,"DIV",{class:!0});var ee=B(F);U=r(ee,"INPUT",{id:!0,type:!0,name:!0,class:!0,maxlength:!0,autocomplete:!0}),Ve=E(ee),L=r(ee,"INPUT",{id:!0,type:!0,name:!0,class:!0,maxlength:!0,pattern:!0,autocomplete:!0}),je=E(ee),R=r(ee,"INPUT",{id:!0,type:!0,name:!0,class:!0,maxlength:!0,autocomplete:!0}),Fe=E(ee),D=r(ee,"INPUT",{id:!0,type:!0,name:!0,class:!0,maxlength:!0,pattern:!0,autocomplete:!0}),xe=E(ee),N=r(ee,"INPUT",{id:!0,type:!0,name:!0,class:!0,maxlength:!0,pattern:!0,autocomplete:!0}),ee.forEach(g),We=E(ce),re=r(ce,"DIV",{class:!0});var Xe=B(re);Te=Ue(Xe,i[7]),Xe.forEach(g),ce.forEach(g),qe=E(w),oe=r(w,"DIV",{class:!0});var Ye=B(oe);W=r(Ye,"BUTTON",{type:!0,class:!0});var Oe=B(W);G&&G.l(Oe),Pe=E(Oe),V&&V.l(Oe),Oe.forEach(g),Ye.forEach(g),w.forEach(g),A.forEach(g),this.h()},h(){t(e,"class","text-2xl font-bold"),t(m,"class","label"),d.__value="",y(d,d.__value),d.disabled=!0,d.selected=!0,o.__value="male",y(o,o.__value),J.__value="female",y(J,J.__value),K.__value="other",y(K,K.__value),t(u,"class","select select-bordered"),i[0]===void 0&&ct(()=>i[12].call(u)),t(v,"class","form-control"),t(te,"class","label"),t(j,"type","number"),t(j,"class","input input-bordered"),t(j,"min","18"),t(j,"max","100"),j.required=!0,t(Q,"class","form-control"),t(ne,"class","label"),t(C,"type","radio"),C.__value="student",y(C,C.__value),t(C,"class","radio radio-primary"),t(Y,"class","flex items-center space-x-2"),t(I,"type","radio"),I.__value="PhD student",y(I,I.__value),t(I,"class","radio radio-primary"),t(M,"class","flex items-center space-x-2"),t(X,"class","flex space-x-6 m-2"),t(Z,"class","form-control"),t(ae,"class","label"),t(U,"id","field1"),t(U,"type","text"),t(U,"name","field1"),t(U,"class","input w-20 input-bordered join-item"),t(U,"maxlength","1"),t(U,"autocomplete","off"),t(L,"id","field2"),t(L,"type","text"),t(L,"name","field2"),t(L,"class","input w-20 input-bordered join-item"),t(L,"maxlength","1"),t(L,"pattern","[0-9]*"),t(L,"autocomplete","off"),t(R,"id","field3"),t(R,"type","text"),t(R,"name","field3"),t(R,"class","input w-20 input-bordered join-item"),t(R,"maxlength","1"),t(R,"autocomplete","off"),t(D,"id","field4"),t(D,"type","text"),t(D,"name","field4"),t(D,"class","input w-20 input-bordered join-item"),t(D,"maxlength","2"),t(D,"pattern","[0-9]*"),t(D,"autocomplete","off"),t(N,"id","field5"),t(N,"type","text"),t(N,"name","field5"),t(N,"class","input w-20 input-bordered join-item"),t(N,"maxlength","1"),t(N,"pattern","[0-9]*"),t(N,"autocomplete","off"),t(F,"class","join"),t(re,"class","description mt-1 text-gray-400 text-s"),t($,"class","form-control"),t(W,"type","submit"),t(W,"class","btn btn-primary"),W.disabled=i[5],t(oe,"class","form-control mt-6"),t(n,"class","space-y-4"),t(l,"class","p-6 max-w-4xl mx-auto bg-base-200 rounded-xl shadow-md space-y-4"),ze.p(C,I)},m(f,A){se(f,l,A),a(l,e),a(l,p),a(l,n),H&&H.m(n,null),a(n,h),a(n,v),a(v,m),a(v,_),a(v,u),a(u,d),a(u,o),a(u,J),a(u,K),ke(u,i[0],!0),a(n,ue),a(n,Q),a(Q,te),a(Q,de),a(Q,j),y(j,i[1]),a(n,fe),a(n,Z),a(Z,ne),a(Z,he),a(Z,X),a(X,Y),a(Y,C),C.checked=C.__value===i[8],a(Y,ge),a(Y,ie),a(X,pe),a(X,M),a(M,I),I.checked=I.__value===i[8],a(M,me),a(M,q),a(n,Re),O&&O.m(n,null),a(n,Be),k&&k.m(n,null),a(n,Ae),a(n,$),a($,ae),a($,Ge),a($,F),a(F,U),y(U,i[6].field1),a(F,Ve),a(F,L),y(L,i[6].field2),a(F,je),a(F,R),y(R,i[6].field3),a(F,Fe),a(F,D),y(D,i[6].field4),a(F,xe),a(F,N),y(N,i[6].field5),a($,We),a($,re),a(re,Te),a(n,qe),a(n,oe),a(oe,W),G&&G.m(W,null),a(W,Pe),V&&V.m(W,null),Je||(Ze=[b(u,"change",i[12]),b(j,"input",i[13]),b(C,"change",i[14]),b(I,"change",i[16]),b(U,"focus",i[19]),b(U,"input",i[20]),b(U,"input",i[21]),b(L,"focus",i[22]),b(L,"input",i[23]),b(L,"input",i[24]),b(R,"focus",i[25]),b(R,"input",i[26]),b(R,"input",i[27]),b(D,"focus",i[28]),b(D,"input",i[29]),b(D,"input",i[30]),b(N,"focus",i[31]),b(N,"input",i[32]),b(N,"input",i[33]),b(n,"submit",i[11])],Je=!0)},p(f,A){f[4]?H?H.p(f,A):(H=it(f),H.c(),H.m(n,h)):H&&(H.d(1),H=null),A[0]&1&&ke(u,f[0]),A[0]&2&&ut(j.value)!==f[1]&&y(j,f[1]),A[0]&256&&(C.checked=C.__value===f[8]),A[0]&256&&(I.checked=I.__value===f[8]),f[8]==="student"?O?O.p(f,A):(O=lt(f),O.c(),O.m(n,Be)):O&&(O.d(1),O=null),f[8]==="PhD student"?k?k.p(f,A):(k=st(f),k.c(),k.m(n,Ae)):k&&(k.d(1),k=null),A[0]&64&&U.value!==f[6].field1&&y(U,f[6].field1),A[0]&64&&L.value!==f[6].field2&&y(L,f[6].field2),A[0]&64&&R.value!==f[6].field3&&y(R,f[6].field3),A[0]&64&&D.value!==f[6].field4&&y(D,f[6].field4),A[0]&64&&N.value!==f[6].field5&&y(N,f[6].field5),A[0]&128&&dt(Te,f[7]),f[5]?G||(G=rt(),G.c(),G.m(W,Pe)):G&&(G.d(1),G=null),f[5]?V&&(V.d(1),V=null):V||(V=ot(),V.c(),V.m(W,null)),A[0]&32&&(W.disabled=f[5])},i:Ke,o:Ke,d(f){f&&g(l),H&&H.d(),O&&O.d(),k&&k.d(),G&&G.d(),V&&V.d(),ze.r(),Je=!1,gt(Ze)}}}function ve(i,l){const e=i.target;if((e.id==="field1"||e.id==="field3")&&(e.value=e.value.replace(/[^a-zA-Z]/g,"").toUpperCase()),(e.id==="field2"||e.id==="field5")&&(e.value=e.value.replace(/\D/g,"")),e.id==="field4"&&(e.value=e.value.replace(/\D/g,""),(Number(e.value)<1||Number(e.value)>12)&&(e.value="")),e.value.length===e.maxLength){const c=document.getElementById(l);c&&c.focus()}}function bt(i,l,e){let c="",p="",n="",h="",v="",m=!1;const P=["Last letter of the father's first name","Last number of the birthday","First letter of the mother's first name","Month of the father's birthday (01-12)","Last digit of postcode"];let _={field1:"",field2:"",field3:"",field4:"",field5:""};const u=["Acoustics M.Ac.","Aerospace Engineering B.Sc.","Air Quality Control, Solid Waste and Waste Water Process Engineering (WASTE) M.Sc.","Architecture and Urban Planning B.Sc.","Architecture and Urban Planning M.Sc.","Art History B.A.","Art History M.A.","Artificial Intelligence and Data Science M.Sc.","Autonomous Systems M.Sc.","Automotive Engineering B.Sc.","Automotive Engineering M.Sc.","Biological Engineering B.Sc.","Biological Engineering M.Sc.","Biology Teaching Degree","Building Physics and Environmental Responsive Construction M.Sc.","Business Administration B.A.","Business Administration, technically oriented B.Sc.","Business Administration, technically oriented M.Sc.","Chemical- and Bio-Engineering B.Sc.","Chemistry B.A.","Chemistry B.Sc.","Chemistry M.Sc.","Chemistry Teaching Degree","Civil Engineering B.A.","Civil Engineering B.Sc.","Civil Engineering M.Sc.","Computational Linguistics M.Sc.","Computational Mechanics of Materials and Structures (COMMAS) M.Sc.","Computer Science B.A.","Computer Science B.Sc.","Computer Science M.Sc.","Computer Science Teaching Degree","Cultures of Knowledge M.A.","Data Science B.Sc.","Digital Humanities M.A.","Electrical Engineering and Information Technology B.A.","Electrical Engineering and Information Technology B.Sc.","Electrical Engineering and Information Technology M.Sc.","Electrical Engineering M.Sc.","Electromobility M.Sc.","Empirical Political and Social Research (German-French) M.A.","Empirical Political and Social Research M.A.","Energy Engineering M.Sc.","Engineering Cybernetics B.Sc.","Engineering Cybernetics M.Sc.","English and American Studies / English Linguistics M.A.","English Linguistics (IfLA)","English Teaching Degree","English, B.A.","English, M.A.","Environmental Engineering B.Sc.","Environmental Engineering M.Sc.","Food Chemistry – Cooperation Hohenheim University B.Sc.","Food Chemistry – Cooperation Hohenheim University M.Sc.","French Teaching Degree","Geodesy and Geoinformatics Engineering B.Sc.","Geomatics Engineering (GEOENGINE) M.Sc.","German B.A.","German Linguistics","German Literature M.A.","German Teaching Degree","History - Sources and Interpretations M.A.","History B.A.","History of Natural Sciences and Technology B.A.","History Teaching Degree","Information Systems B.Sc.","Information Systems M.Sc.","Information Technology (INFOTECH) M.Sc.","Infrastructure Planning M.Sc.","Institute of Business Administration (BWI)","Integrated Urbanism and Sustainable Design M.Sc.","Integrative Technologies and Architectural Design Research (ITECH) M.Sc.","International Construction: Practice and Law MBE","Intra- und Entrepreneurship (tech) MBE","Italian Teaching Degree","Linguistics B.A.","Logistics Management MBE","Materials Science B.Sc.","Materials Science M.Sc.","Mathematics B.A.","Mathematics B.Sc.","Mathematics M.Sc.","Mathematics Teaching Degree","Mechanical Engineering B.A.","Mechanical Engineering B.Sc.","Mechanical Engineering M.Sc.","Mechanical Engineering / Micro-Engineering, Apparatus Technology and Technical Optics M.Sc.","Mechanical Engineering / Materials and Production Engineering M.Sc.","Mechanical Engineering / Product Development and Design M.Sc.","Mechatronics B.Sc.","Mechatronics M.Sc.","Media Computer Science B.Sc.","Medical Engineering B.Sc.","Medical Engineering M.Sc.","Movement Science B.Sc.","Movement Science and Biomechanics M.Sc.","Natural and Technical Sciences Teaching Degree","Natural Language Processing B.Sc.","Philosophy B.A.","Philosophy M.A.","Philosophy/Ethics Teaching Degree","Photonic Engineering M.Sc.","Physics B.A.","Physics B.Sc.","Physics M.Sc.","Physics Teaching Degree","Political Sciences B.A.","Political Sciences Teaching Degree","Political Sciences/Economics Teaching Degree","Practical Philosophy and History of Philosophy","Practically Oriented Cultural Philosophy (German-French) M.A.","Process Engineering B.Sc.","Process Engineering M.Sc.","Public Planning and Participation M.Sc.","Real Estate Engineering and Management B.Sc.","Real Estate Engineering and Management M.Sc.","Real Estate Management (REM) M.Sc.","Renewable Energy Engineering B.Sc.","Romance Linguistics (ILG)","Romance Studies B.A.","Romance Studies M.A.","Simulation Technology B.Sc.","Social Sciences (German-French) B.A.","Social Sciences B.A.","Sociology B.A.","Software Engineering B.Sc.","Software Engineering M.Sc.","Sport Science: Sociology and Economics B.A.","Sport Science: Sociology and Economics M.A.","Sport Sciences B.A.","Sustainable Electrical Power Supply M.Sc.","Technical Biology B.Sc.","Technical Biology M.Sc.","Technical Education B.Sc.","Technical Education M.Sc.","Technically Oriented Business Administration B.Sc.","Technology Management B.Sc.","Technology Management M.Sc.","Theoretical and Comparative Linguistics M.A.","Transport Engineering B.Sc.","Vocational Education and Human Resources Development M.A.","Vocational Education/Technical Education B.A.","Water Resources Engineering and Management (WAREM) M.Sc."];let d="";function T(M){e(7,d=P[M])}let o="";const z=async M=>{if(M.preventDefault(),e(4,v=""),!c||!p||!o||o==="student"&&!n||o==="PhD student"&&!h||Object.values(_).some(q=>q==="")){e(4,v="Please fill out all fields.");return}const I=Object.values(_).join("").toUpperCase(),me=o==="student"?n:h;e(5,m=!0);try{const q=await fetch(`${Et}/adduser`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({gender:c,age:p,studyProgram:me,deletionCode:I})}),le=await q.json();console.log(le),q.ok?(vt.set(le.gamifiedElements),St.set(le.userId),le.gamifiedElements[0].includes("a")?tt("/avatars"):tt("/questions")):e(4,v=le.message||"An error occurred. Please try again.")}catch{e(4,v="An error occurred. Please try again.")}finally{e(5,m=!1)}},J=[[]];function Se(){c=$e(this),e(0,c)}function K(){p=ut(this.value),e(1,p)}function Ee(){o=this.__value,e(8,o)}function ue(){o=this.__value,e(8,o)}function Q(){n=$e(this),e(2,n),e(9,u)}function te(){h=this.value,e(3,h)}const Me=()=>T(0),de=M=>ve(M,"field2");function j(){_.field1=this.value,e(6,_)}const fe=()=>T(1),Z=M=>ve(M,"field3");function ne(){_.field2=this.value,e(6,_)}const be=()=>T(2),he=M=>ve(M,"field4");function X(){_.field3=this.value,e(6,_)}const Y=()=>T(3),C=M=>ve(M,"field5");function ge(){_.field4=this.value,e(6,_)}const ie=()=>T(4),ye=M=>ve(M,"");function pe(){_.field5=this.value,e(6,_)}return[c,p,n,h,v,m,_,d,o,u,T,z,Se,K,Ee,J,ue,Q,te,Me,de,j,fe,Z,ne,be,he,X,Y,C,ge,ie,ye,pe]}class It extends mt{constructor(l){super(),_t(this,l,bt,Mt,ft,{},null,[-1,-1])}}export{It as component};
