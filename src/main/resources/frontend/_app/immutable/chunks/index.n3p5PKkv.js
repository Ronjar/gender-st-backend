var b=Object.defineProperty;var E=(t,e,n)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>(E(t,typeof e!="symbol"?e+"":e,n),n);import{t as $,n as c,Q as p,b as C,f as I,R as O,u as v,S as R,F as x,T as U,U as V,V as w,W as j,X as B,Y as F,Z as L,_ as M}from"./scheduler.PLrrrlXJ.js";const o=new Set;let f;function Z(){f={r:0,c:[],p:f}}function z(){f.r||$(f.c),f=f.p}function N(t,e){t&&t.i&&(o.delete(t),t.i(e))}function A(t,e,n,a){if(t&&t.o){if(o.has(t))return;o.add(t),f.c.push(()=>{o.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function D(t){t&&t.c()}function G(t,e){t&&t.l(e)}function P(t,e,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,n),x(()=>{const d=t.$$.on_mount.map(j).filter(v);t.$$.on_destroy?t.$$.on_destroy.push(...d):$(d),t.$$.on_mount=[]}),i.forEach(x)}function Q(t,e){const n=t.$$;n.fragment!==null&&(U(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e){t.$$.dirty[0]===-1&&(B.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(t,e,n,a,i,d,l=null,S=[-1]){const u=V;w(t);const s=t.$$={fragment:null,ctx:[],props:d,update:c,not_equal:i,bound:p(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:p(),dirty:S,skip_bound:!1,root:e.target||u.$$.root};l&&l(s.root);let h=!1;if(s.ctx=n?n(t,e.props||{},(r,g,...m)=>{const y=m.length?m[0]:g;return s.ctx&&i(s.ctx[r],s.ctx[r]=y)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](y),h&&T(t,r)),g}):[],s.update(),h=!0,$(s.before_update),s.fragment=a?a(s.ctx):!1,e.target){if(e.hydrate){L();const r=C(e.target);s.fragment&&s.fragment.l(r),r.forEach(I)}else s.fragment&&s.fragment.c();e.intro&&N(t.$$.fragment),P(t,e.target,e.anchor),M(),O()}w(u)}class J{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){Q(this,1),this.$destroy=c}$on(e,n){if(!v(n))return c;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const W="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(W);export{J as S,A as a,G as b,D as c,Q as d,z as e,Z as g,H as i,P as m,N as t};