import{s as Pe,e as r,a as L,c as o,b as v,g as O,d as H,f as h,h as g,B as x,C as Me,i as z,j as i,D as Z,m as $,E as Te,n as re,k as Ie,r as De,x as oe,y as ge,z as Le,F as pe,G as Oe}from"../chunks/scheduler.CXdCB_cC.js";import{e as _e}from"../chunks/each.D6YF6ztN.js";import{S as He,i as Re}from"../chunks/index.CUASuJes.js";import{g as Ne,u as ve}from"../chunks/store.DWicTl5_.js";import{g as xe}from"../chunks/entry.DHYWvJo9.js";import{B as Ge}from"../chunks/constants.BWkPU7VE.js";function Be(a,e,n){const s=a.slice();return s[10]=e[n],s}function ye(a){let e,n,s,u;return{c(){e=r("div"),n=r("div"),s=r("label"),u=oe(a[3]),this.h()},l(t){e=o(t,"DIV",{class:!0});var d=v(e);n=o(d,"DIV",{class:!0});var f=v(n);s=o(f,"LABEL",{});var B=v(s);u=ge(B,a[3]),B.forEach(h),f.forEach(h),d.forEach(h),this.h()},h(){g(n,"class","flex-1"),g(e,"class","alert alert-error")},m(t,d){z(t,e,d),i(e,n),i(n,s),i(s,u)},p(t,d){d&8&&Le(u,t[3])},d(t){t&&h(e)}}}function Ae(a){let e,n=a[10]+"",s;return{c(){e=r("option"),s=oe(n),this.h()},l(u){e=o(u,"OPTION",{});var t=v(e);s=ge(t,n),t.forEach(h),this.h()},h(){e.__value=a[10],x(e,e.__value)},m(u,t){z(u,e,t),i(e,s)},p:re,d(u){u&&h(e)}}}function be(a){let e;return{c(){e=r("span"),this.h()},l(n){e=o(n,"SPAN",{class:!0}),v(e).forEach(h),this.h()},h(){g(e,"class","loading loading-spinner svelte-nvlic8")},m(n,s){z(n,e,s)},d(n){n&&h(e)}}}function Ce(a){let e;return{c(){e=oe("Proceed to Pretest")},l(n){e=ge(n,"Proceed to Pretest")},m(n,s){z(n,e,s)},d(n){n&&h(e)}}}function ke(a){let e,n,s="Personal Data",u,t,d,f,B,q='<span class="label-text">Gender</span>',W,E,y,J="Select your gender",A,G="Male",I,ue="Female",D,he="Other",ee,R,k,de='<span class="label-text">Age</span>',ne,C,te,N,w,me='<span class="label-text">Study Program</span>',ie,T,P,Se="Select your study program",ae,V,b,K,ce,fe,S=a[3]&&ye(a),U=_e(a[5]),m=[];for(let c=0;c<U.length;c+=1)m[c]=Ae(Be(a,U,c));let M=a[4]&&be(),p=!a[4]&&Ce();return{c(){e=r("div"),n=r("h1"),n.textContent=s,u=L(),t=r("form"),S&&S.c(),d=L(),f=r("div"),B=r("label"),B.innerHTML=q,W=L(),E=r("select"),y=r("option"),y.textContent=J,A=r("option"),A.textContent=G,I=r("option"),I.textContent=ue,D=r("option"),D.textContent=he,ee=L(),R=r("div"),k=r("label"),k.innerHTML=de,ne=L(),C=r("input"),te=L(),N=r("div"),w=r("label"),w.innerHTML=me,ie=L(),T=r("select"),P=r("option"),P.textContent=Se;for(let c=0;c<m.length;c+=1)m[c].c();ae=L(),V=r("div"),b=r("button"),M&&M.c(),K=L(),p&&p.c(),this.h()},l(c){e=o(c,"DIV",{class:!0});var _=v(e);n=o(_,"H1",{class:!0,"data-svelte-h":!0}),O(n)!=="svelte-1rxb9c6"&&(n.textContent=s),u=H(_),t=o(_,"FORM",{class:!0});var l=v(t);S&&S.l(l),d=H(l),f=o(l,"DIV",{class:!0});var F=v(f);B=o(F,"LABEL",{class:!0,"data-svelte-h":!0}),O(B)!=="svelte-1b2014i"&&(B.innerHTML=q),W=H(F),E=o(F,"SELECT",{class:!0});var j=v(E);y=o(j,"OPTION",{"data-svelte-h":!0}),O(y)!=="svelte-1wyn3f3"&&(y.textContent=J),A=o(j,"OPTION",{"data-svelte-h":!0}),O(A)!=="svelte-8wnvoi"&&(A.textContent=G),I=o(j,"OPTION",{"data-svelte-h":!0}),O(I)!=="svelte-kgyr86"&&(I.textContent=ue),D=o(j,"OPTION",{"data-svelte-h":!0}),O(D)!=="svelte-902jce"&&(D.textContent=he),j.forEach(h),F.forEach(h),ee=H(l),R=o(l,"DIV",{class:!0});var Q=v(R);k=o(Q,"LABEL",{class:!0,"data-svelte-h":!0}),O(k)!=="svelte-cgeaz0"&&(k.innerHTML=de),ne=H(Q),C=o(Q,"INPUT",{type:!0,class:!0,min:!0,max:!0}),Q.forEach(h),te=H(l),N=o(l,"DIV",{class:!0});var X=v(N);w=o(X,"LABEL",{class:!0,"data-svelte-h":!0}),O(w)!=="svelte-1p1x81i"&&(w.innerHTML=me),ie=H(X),T=o(X,"SELECT",{class:!0});var le=v(T);P=o(le,"OPTION",{"data-svelte-h":!0}),O(P)!=="svelte-y0acuz"&&(P.textContent=Se);for(let se=0;se<m.length;se+=1)m[se].l(le);le.forEach(h),X.forEach(h),ae=H(l),V=o(l,"DIV",{class:!0});var Ee=v(V);b=o(Ee,"BUTTON",{type:!0,class:!0});var Y=v(b);M&&M.l(Y),K=H(Y),p&&p.l(Y),Y.forEach(h),Ee.forEach(h),l.forEach(h),_.forEach(h),this.h()},h(){g(n,"class","text-2xl font-bold"),g(B,"class","label"),y.__value="",x(y,y.__value),y.disabled=!0,y.selected=!0,A.__value="male",x(A,A.__value),I.__value="female",x(I,I.__value),D.__value="other",x(D,D.__value),g(E,"class","select select-bordered"),a[0]===void 0&&Me(()=>a[7].call(E)),g(f,"class","form-control"),g(k,"class","label"),g(C,"type","number"),g(C,"class","input input-bordered"),g(C,"min","1"),g(C,"max","120"),C.required=!0,g(R,"class","form-control"),g(w,"class","label"),P.__value="",x(P,P.__value),P.disabled=!0,P.selected=!0,g(T,"class","select select-bordered"),a[2]===void 0&&Me(()=>a[9].call(T)),g(N,"class","form-control"),g(b,"type","submit"),g(b,"class","btn btn-primary"),b.disabled=a[4],g(V,"class","form-control mt-6"),g(t,"class","space-y-4"),g(e,"class","p-6 max-w-4xl mx-auto bg-base-200 rounded-xl shadow-md space-y-4")},m(c,_){z(c,e,_),i(e,n),i(e,u),i(e,t),S&&S.m(t,null),i(t,d),i(t,f),i(f,B),i(f,W),i(f,E),i(E,y),i(E,A),i(E,I),i(E,D),Z(E,a[0],!0),i(t,ee),i(t,R),i(R,k),i(R,ne),i(R,C),x(C,a[1]),i(t,te),i(t,N),i(N,w),i(N,ie),i(N,T),i(T,P);for(let l=0;l<m.length;l+=1)m[l]&&m[l].m(T,null);Z(T,a[2],!0),i(t,ae),i(t,V),i(V,b),M&&M.m(b,null),i(b,K),p&&p.m(b,null),ce||(fe=[$(E,"change",a[7]),$(C,"input",a[8]),$(T,"change",a[9]),$(t,"submit",a[6])],ce=!0)},p(c,[_]){if(c[3]?S?S.p(c,_):(S=ye(c),S.c(),S.m(t,d)):S&&(S.d(1),S=null),_&1&&Z(E,c[0]),_&2&&Te(C.value)!==c[1]&&x(C,c[1]),_&32){U=_e(c[5]);let l;for(l=0;l<U.length;l+=1){const F=Be(c,U,l);m[l]?m[l].p(F,_):(m[l]=Ae(F),m[l].c(),m[l].m(T,null))}for(;l<m.length;l+=1)m[l].d(1);m.length=U.length}_&36&&Z(T,c[2]),c[4]?M||(M=be(),M.c(),M.m(b,K)):M&&(M.d(1),M=null),c[4]?p&&(p.d(1),p=null):p||(p=Ce(),p.c(),p.m(b,null)),_&16&&(b.disabled=c[4])},i:re,o:re,d(c){c&&h(e),S&&S.d(),Ie(m,c),M&&M.d(),p&&p.d(),ce=!1,De(fe)}}}function we(a,e,n){let s="",u="",t="",d="",f=!1;const B=["Acoustics M.Ac.","Aerospace Engineering B.Sc.","Air Quality Control, Solid Waste and Waste Water Process Engineering (WASTE) M.Sc.","Architecture and Urban Planning B.Sc.","Architecture and Urban Planning M.Sc.","Art History B.A.","Art History M.A.","Artificial Intelligence and Data Science M.Sc.","Autonomous Systems M.Sc.","Automotive Engineering B.Sc.","Automotive Engineering M.Sc.","Biological Engineering B.Sc.","Biological Engineering M.Sc.","Biology Teaching Degree","Building Physics and Environmental Responsive Construction M.Sc.","Business Administration B.A.","Business Administration, technically oriented B.Sc.","Business Administration, technically oriented M.Sc.","Chemical- and Bio-Engineering B.Sc.","Chemistry B.A.","Chemistry B.Sc.","Chemistry M.Sc.","Chemistry Teaching Degree","Civil Engineering B.A.","Civil Engineering B.Sc.","Civil Engineering M.Sc.","Computational Linguistics M.Sc.","Computational Mechanics of Materials and Structures (COMMAS) M.Sc.","Computer Science B.A.","Computer Science B.Sc.","Computer Science M.Sc.","Computer Science Teaching Degree","Cultures of Knowledge M.A.","Data Science B.Sc.","Digital Humanities M.A.","Electrical Engineering and Information Technology B.A.","Electrical Engineering and Information Technology B.Sc.","Electrical Engineering and Information Technology M.Sc.","Electrical Engineering M.Sc.","Electromobility M.Sc.","Empirical Political and Social Research (German-French) M.A.","Empirical Political and Social Research M.A.","Energy Engineering M.Sc.","Engineering Cybernetics B.Sc.","Engineering Cybernetics M.Sc.","English and American Studies / English Linguistics M.A.","English Linguistics (IfLA)","English Teaching Degree","English, B.A.","English, M.A.","Environmental Engineering B.Sc.","Environmental Engineering M.Sc.","Food Chemistry – Cooperation Hohenheim University B.Sc.","Food Chemistry – Cooperation Hohenheim University M.Sc.","French Teaching Degree","Geodesy and Geoinformatics Engineering B.Sc.","Geomatics Engineering (GEOENGINE) M.Sc.","German B.A.","German Linguistics","German Literature M.A.","German Teaching Degree","History - Sources and Interpretations M.A.","History B.A.","History of Natural Sciences and Technology B.A.","History Teaching Degree","Information Systems B.Sc.","Information Systems M.Sc.","Information Technology (INFOTECH) M.Sc.","Infrastructure Planning M.Sc.","Institute of Business Administration (BWI)","Integrated Urbanism and Sustainable Design M.Sc.","Integrative Technologies and Architectural Design Research (ITECH) M.Sc.","International Construction: Practice and Law MBE","Intra- und Entrepreneurship (tech) MBE","Italian Teaching Degree","Linguistics B.A.","Logistics Management MBE","Materials Science B.Sc.","Materials Science M.Sc.","Mathematics B.A.","Mathematics B.Sc.","Mathematics M.Sc.","Mathematics Teaching Degree","Mechanical Engineering B.A.","Mechanical Engineering B.Sc.","Mechanical Engineering M.Sc.","Mechanical Engineering / Micro-Engineering, Apparatus Technology and Technical Optics M.Sc.","Mechanical Engineering / Materials and Production Engineering M.Sc.","Mechanical Engineering / Product Development and Design M.Sc.","Mechatronics B.Sc.","Mechatronics M.Sc.","Media Computer Science B.Sc.","Medical Engineering B.Sc.","Medical Engineering M.Sc.","Movement Science B.Sc.","Movement Science and Biomechanics M.Sc.","Natural and Technical Sciences Teaching Degree","Natural Language Processing B.Sc.","Philosophy B.A.","Philosophy M.A.","Philosophy/Ethics Teaching Degree","Photonic Engineering M.Sc.","Physics B.A.","Physics B.Sc.","Physics M.Sc.","Physics Teaching Degree","Political Sciences B.A.","Political Sciences Teaching Degree","Political Sciences/Economics Teaching Degree","Practical Philosophy and History of Philosophy","Practically Oriented Cultural Philosophy (German-French) M.A.","Process Engineering B.Sc.","Process Engineering M.Sc.","Public Planning and Participation M.Sc.","Real Estate Engineering and Management B.Sc.","Real Estate Engineering and Management M.Sc.","Real Estate Management (REM) M.Sc.","Renewable Energy Engineering B.Sc.","Romance Linguistics (ILG)","Romance Studies B.A.","Romance Studies M.A.","Simulation Technology B.Sc.","Social Sciences (German-French) B.A.","Social Sciences B.A.","Sociology B.A.","Software Engineering B.Sc.","Software Engineering M.Sc.","Sport Science: Sociology and Economics B.A.","Sport Science: Sociology and Economics M.A.","Sport Sciences B.A.","Sustainable Electrical Power Supply M.Sc.","Technical Biology B.Sc.","Technical Biology M.Sc.","Technical Education B.Sc.","Technical Education M.Sc.","Technically Oriented Business Administration B.Sc.","Technology Management B.Sc.","Technology Management M.Sc.","Theoretical and Comparative Linguistics M.A.","Transport Engineering B.Sc.","Vocational Education and Human Resources Development M.A.","Vocational Education/Technical Education B.A.","Water Resources Engineering and Management (WAREM) M.Sc."],q=async J=>{if(J.preventDefault(),n(3,d=""),!s||!u||!t){n(3,d="Please fill out all fields.");return}n(4,f=!0);try{const A=await fetch(`${Ge}/adduser`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({gender:s,age:u,studyProgram:t})}),G=await A.json();console.log(G),A.ok?(Ne.set(G.gamifiedElements),ve.set(G.userId),console.log("userId: "+Oe(ve)),xe("/pretest")):n(3,d=G.message||"An error occurred. Please try again."),n(4,f=!1)}catch{n(3,d="An error occurred. Please try again.")}finally{}};function W(){s=pe(this),n(0,s)}function E(){u=Te(this.value),n(1,u)}function y(){t=pe(this),n(2,t),n(5,B)}return[s,u,t,d,f,B,q,W,E,y]}class qe extends He{constructor(e){super(),Re(this,e,we,ke,Pe,{})}}export{qe as component};
