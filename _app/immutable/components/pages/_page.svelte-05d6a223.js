import{S as V,i as C,s as P,k as m,a as U,l as b,m as T,c as A,h as u,n as N,b as E,H as p,J as L,K as O,C as I,L as j,q as S,r as F,M as X,g as Z,N as $,d as x,f as R,t as J,x as G,y as Q,z as W,A as Y,O as tt,o as et}from"../../chunks/index-5746922a.js";function it(a){let e,i,t,l;return{c(){e=m("button"),i=S("🔻")},l(s){e=b(s,"BUTTON",{});var n=T(e);i=F(n,"🔻"),n.forEach(u)},m(s,n){E(s,e,n),p(e,i),t||(l=O(e,"click",a[7]),t=!0)},p:I,d(s){s&&u(e),t=!1,l()}}}function ot(a){let e,i,t,l;return{c(){e=m("button"),i=S("🔺")},l(s){e=b(s,"BUTTON",{});var n=T(e);i=F(n,"🔺"),n.forEach(u)},m(s,n){E(s,e,n),p(e,i),t||(l=O(e,"click",a[8]),t=!0)},p:I,d(s){s&&u(e),t=!1,l()}}}function st(a){let e,i,t,l,s,n,d;return{c(){e=m("button"),i=S("Edit"),t=U(),l=m("button"),s=S("✔️")},l(o){e=b(o,"BUTTON",{});var r=T(e);i=F(r,"Edit"),r.forEach(u),t=A(o),l=b(o,"BUTTON",{});var _=T(l);s=F(_,"✔️"),_.forEach(u)},m(o,r){E(o,e,r),p(e,i),E(o,t,r),E(o,l,r),p(l,s),n||(d=[O(e,"click",a[4]),O(l,"click",a[3])],n=!0)},p:I,d(o){o&&u(e),o&&u(t),o&&u(l),n=!1,X(d)}}}function lt(a){let e,i,t,l,s,n,d;return{c(){e=m("button"),i=S("Save"),t=U(),l=m("button"),s=S("❌")},l(o){e=b(o,"BUTTON",{});var r=T(e);i=F(r,"Save"),r.forEach(u),t=A(o),l=b(o,"BUTTON",{});var _=T(l);s=F(_,"❌"),_.forEach(u)},m(o,r){E(o,e,r),p(e,i),E(o,t,r),E(o,l,r),p(l,s),n||(d=[O(e,"click",a[6]),O(l,"click",a[5])],n=!0)},p:I,d(o){o&&u(e),o&&u(t),o&&u(l),n=!1,X(d)}}}function H(a){let e,i,t,l,s,n,d;return{c(){e=m("br"),i=U(),t=m("textarea"),this.h()},l(o){e=b(o,"BR",{}),i=A(o),t=b(o,"TEXTAREA",{class:!0,cols:!0}),T(t).forEach(u),this.h()},h(){N(t,"class",l="first-color "+(a[0].isFinished?"finished":"")+" svelte-14usqmh"),N(t,"cols","60"),t.disabled=s=!a[1]},m(o,r){E(o,e,r),E(o,i,r),E(o,t,r),L(t,a[0].description),n||(d=O(t,"input",a[10]),n=!0)},p(o,r){r&1&&l!==(l="first-color "+(o[0].isFinished?"finished":"")+" svelte-14usqmh")&&N(t,"class",l),r&2&&s!==(s=!o[1])&&(t.disabled=s),r&1&&L(t,o[0].description)},d(o){o&&u(e),o&&u(i),o&&u(t),n=!1,d()}}}function nt(a){let e,i,t,l,s,n,d,o,r,_,w;function q(h,g){return h[2]?ot:it}let f=q(a),c=f(a);function k(h,g){return h[1]?lt:st}let D=k(a),y=D(a),v=a[2]&&H(a);return{c(){e=m("div"),i=m("div"),c.c(),t=U(),l=m("input"),d=U(),y.c(),o=U(),r=m("div"),v&&v.c(),this.h()},l(h){e=b(h,"DIV",{class:!0});var g=T(e);i=b(g,"DIV",{class:!0});var B=T(i);c.l(B),t=A(B),l=b(B,"INPUT",{type:!0,class:!0}),d=A(B),y.l(B),B.forEach(u),o=A(g),r=b(g,"DIV",{class:!0});var M=T(r);v&&v.l(M),M.forEach(u),g.forEach(u),this.h()},h(){N(l,"type","text"),N(l,"class",s="first-color "+(a[0].isFinished?"finished":"")+" svelte-14usqmh"),l.disabled=n=!a[1],N(i,"class","row svelte-14usqmh"),N(r,"class","row svelte-14usqmh"),N(e,"class","svelte-14usqmh")},m(h,g){E(h,e,g),p(e,i),c.m(i,null),p(i,t),p(i,l),L(l,a[0].title),p(i,d),y.m(i,null),p(e,o),p(e,r),v&&v.m(r,null),_||(w=O(l,"input",a[9]),_=!0)},p(h,[g]){f===(f=q(h))&&c?c.p(h,g):(c.d(1),c=f(h),c&&(c.c(),c.m(i,t))),g&1&&s!==(s="first-color "+(h[0].isFinished?"finished":"")+" svelte-14usqmh")&&N(l,"class",s),g&2&&n!==(n=!h[1])&&(l.disabled=n),g&1&&l.value!==h[0].title&&L(l,h[0].title),D===(D=k(h))&&y?y.p(h,g):(y.d(1),y=D(h),y&&(y.c(),y.m(i,null))),h[2]?v?v.p(h,g):(v=H(h),v.c(),v.m(r,null)):v&&(v.d(1),v=null)},i:I,o:I,d(h){h&&u(e),c.d(),y.d(),v&&v.d(),_=!1,w()}}}function rt(a,e,i){let{todo:t}=e,{isEditable:l=!1}=e,{isShowingDescription:s=!1}=e;const n=j(),d=j();function o(){i(0,t.finishedAt=new Date().getTime()/1e3,t),i(0,t.isFinished=!0,t)}function r(){i(1,l=!0)}function _(){d("removetodo",{id:t.id})}function w(){i(1,l=!1),n("updatetodo",{id:t.id,title:t.title,description:t.description,finishedAt:t.finishedAt,isFinished:t.isFinished})}function q(){s||i(2,s=!0)}function f(){s&&i(2,s=!1)}function c(){t.title=this.value,i(0,t)}function k(){t.description=this.value,i(0,t)}return a.$$set=D=>{"todo"in D&&i(0,t=D.todo),"isEditable"in D&&i(1,l=D.isEditable),"isShowingDescription"in D&&i(2,s=D.isShowingDescription)},[t,l,s,o,r,_,w,q,f,c,k]}class at extends V{constructor(e){super(),C(this,e,rt,nt,P,{todo:0,isEditable:1,isShowingDescription:2})}}function z(a,e,i){const t=a.slice();return t[5]=e[i],t}function K(a,e){let i,t,l,s;return t=new at({props:{todo:e[5]}}),t.$on("removetodo",e[2]),t.$on("updatetodo",e[3]),{key:a,first:null,c(){i=m("li"),G(t.$$.fragment),l=U(),this.h()},l(n){i=b(n,"LI",{});var d=T(i);Q(t.$$.fragment,d),l=A(d),d.forEach(u),this.h()},h(){this.first=i},m(n,d){E(n,i,d),W(t,i,null),p(i,l),s=!0},p(n,d){e=n;const o={};d&1&&(o.todo=e[5]),t.$set(o)},i(n){s||(R(t.$$.fragment,n),s=!0)},o(n){J(t.$$.fragment,n),s=!1},d(n){n&&u(i),Y(t)}}}function dt(a){let e,i,t=[],l=new Map,s,n,d,o,r,_,w=a[0];const q=f=>f[5].id;for(let f=0;f<w.length;f+=1){let c=z(a,w,f),k=q(c);l.set(k,t[f]=K(k,c))}return{c(){e=m("div"),i=m("ul");for(let f=0;f<t.length;f+=1)t[f].c();s=U(),n=m("button"),d=S("New Todo"),this.h()},l(f){e=b(f,"DIV",{class:!0});var c=T(e);i=b(c,"UL",{class:!0});var k=T(i);for(let y=0;y<t.length;y+=1)t[y].l(k);k.forEach(u),s=A(c),n=b(c,"BUTTON",{});var D=T(n);d=F(D,"New Todo"),D.forEach(u),c.forEach(u),this.h()},h(){N(i,"class","svelte-1gt1hjg"),N(e,"class","svelte-1gt1hjg")},m(f,c){E(f,e,c),p(e,i);for(let k=0;k<t.length;k+=1)t[k]&&t[k].m(i,null);p(e,s),p(e,n),p(n,d),o=!0,r||(_=O(n,"click",a[1]),r=!0)},p(f,[c]){c&13&&(w=f[0],Z(),t=$(t,c,q,1,f,w,l,i,tt,K,null,z),x())},i(f){if(!o){for(let c=0;c<w.length;c+=1)R(t[c]);o=!0}},o(f){for(let c=0;c<t.length;c+=1)J(t[c]);o=!1},d(f){f&&u(e);for(let c=0;c<t.length;c+=1)t[c].d();r=!1,_()}}}function ct(a,e,i){let{todos:t}=e;const l=j();function s(){l("newtodo",{title:"New Todo",description:""})}async function n(o){let r;for(const[_,w]of t.entries())w.id==o.detail.id&&(r=_);r!=null&&(t.splice(r,1),i(0,t),await fetch(`/todos/${o.detail.id}`,{method:"DELETE"}))}async function d(o){let r;for(const[_,w]of t.entries())if(w.id==o.detail.id){i(0,t[_].title=o.detail.title,t),i(0,t[_].description=o.detail.description,t),i(0,t[_].finishedAt=o.detail.finishedAt,t),i(0,t[_].isFinished=o.detail.isFinished,t),r=t[_];break}r!=null&&await fetch(`/todos/${r.id}`,{method:"PUT",body:JSON.stringify(o.detail),headers:{Accept:"application/json","Content-Type":"application/json"}})}return a.$$set=o=>{"todos"in o&&i(0,t=o.todos)},[t,s,n,d]}class ut extends V{constructor(e){super(),C(this,e,ct,dt,P,{todos:0})}}function ft(a){let e,i,t,l,s,n;return s=new ut({props:{todos:a[0]}}),s.$on("newtodo",a[1]),{c(){e=m("div"),i=m("h1"),t=S("Todo List"),l=U(),G(s.$$.fragment),this.h()},l(d){e=b(d,"DIV",{class:!0});var o=T(e);i=b(o,"H1",{});var r=T(i);t=F(r,"Todo List"),r.forEach(u),l=A(o),Q(s.$$.fragment,o),o.forEach(u),this.h()},h(){N(e,"class","svelte-1y6awob")},m(d,o){E(d,e,o),p(e,i),p(i,t),p(e,l),W(s,e,null),n=!0},p(d,[o]){const r={};o&1&&(r.todos=d[0]),s.$set(r)},i(d){n||(R(s.$$.fragment,d),n=!0)},o(d){J(s.$$.fragment,d),n=!1},d(d){d&&u(e),Y(s)}}}function ht(a,e,i){let t=[];et(async()=>{const s=await fetch("/todos");i(0,t=await s.json())});async function l(s){const n={id:crypto.randomUUID(),title:s.detail.title,description:s.detail.description,createdAt:new Date().getTime()/1e3,finishedAt:0,isFinished:!1};i(0,t=[...t,n]),await fetch("/todos",{method:"POST",body:JSON.stringify(n),headers:{Accept:"application/json","Content-Type":"application/json"}})}return[t,l]}class pt extends V{constructor(e){super(),C(this,e,ht,ft,P,{})}}export{pt as default};
