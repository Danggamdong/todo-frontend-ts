import{S as M,i as V,s as j,k as g,a as E,q as B,l as v,m as w,c as N,h as d,r as q,n as k,b as y,H as b,J as U,K as A,C as P,L as te,M as ne,e as z,v as oe,N as re,x as O,y as R,z as C,O as ae,g as K,t as I,d as W,f as L,A as H,P as le,Q as X,R as se}from"../../chunks/index-bbe03884.js";function ce(c){let t,e,s,n,l,o,r,i,a,f,p;return{c(){t=g("div"),e=g("input"),s=E(),n=g("br"),l=E(),o=g("textarea"),r=E(),i=g("button"),a=B("➕"),this.h()},l(h){t=v(h,"DIV",{});var u=w(t);e=v(u,"INPUT",{type:!0,class:!0,placeholder:!0}),s=N(u),n=v(u,"BR",{}),l=N(u),o=v(u,"TEXTAREA",{class:!0,cols:!0,rows:!0,placeholder:!0}),w(o).forEach(d),r=N(u),i=v(u,"BUTTON",{});var _=w(i);a=q(_,"➕"),_.forEach(d),u.forEach(d),this.h()},h(){k(e,"type","text"),k(e,"class","second-color svelte-10ss40t"),k(e,"placeholder","Type Title"),k(o,"class","first-color svelte-10ss40t"),k(o,"cols","50"),k(o,"rows","3"),k(o,"placeholder","Type Description")},m(h,u){y(h,t,u),b(t,e),U(e,c[0]),b(t,s),b(t,n),b(t,l),b(t,o),U(o,c[1]),b(t,r),b(t,i),b(i,a),f||(p=[A(e,"input",c[5]),A(e,"keydown",c[3]),A(o,"input",c[6]),A(i,"click",c[2])],f=!0)},p(h,[u]){u&1&&e.value!==h[0]&&U(e,h[0]),u&2&&U(o,h[1])},i:P,o:P,d(h){h&&d(t),f=!1,te(p)}}}function ue(c,t,e){const s=ne();let{title:n=""}=t,{description:l=""}=t;function o(){if(n===""){alert("No Todo Typed!");return}s("newtodo",{title:n,description:l}),e(0,n=""),e(1,l="")}function r(f){f.key=="Enter"&&o()}function i(){n=this.value,e(0,n)}function a(){l=this.value,e(1,l)}return c.$$set=f=>{"title"in f&&e(0,n=f.title),"description"in f&&e(1,l=f.description)},[n,l,o,r,s,i,a]}class fe extends M{constructor(t){super(),V(this,t,ue,ce,j,{dispatch:4,title:0,description:1})}get dispatch(){return this.$$.ctx[4]}}function de(c){let t,e,s,n;return{c(){t=g("button"),e=B("🔻")},l(l){t=v(l,"BUTTON",{});var o=w(t);e=q(o,"🔻"),o.forEach(d)},m(l,o){y(l,t,o),b(t,e),s||(n=A(t,"click",c[3]),s=!0)},p:P,d(l){l&&d(t),s=!1,n()}}}function he(c){let t,e,s,n;return{c(){t=g("button"),e=B("🔺")},l(l){t=v(l,"BUTTON",{});var o=w(t);e=q(o,"🔺"),o.forEach(d)},m(l,o){y(l,t,o),b(t,e),s||(n=A(t,"click",c[4]),s=!0)},p:P,d(l){l&&d(t),s=!1,n()}}}function Q(c){let t,e,s,n,l,o,r;return{c(){t=g("br"),e=E(),s=g("textarea"),this.h()},l(i){t=v(i,"BR",{}),e=N(i),s=v(i,"TEXTAREA",{class:!0,cols:!0}),w(s).forEach(d),this.h()},h(){k(s,"class",n="first-color "+(c[0].isFinished?"finished":"")+" svelte-5zcshr"),k(s,"cols","60"),s.disabled=l=!c[2]},m(i,a){y(i,t,a),y(i,e,a),y(i,s,a),U(s,c[0].description),o||(r=A(s,"input",c[6]),o=!0)},p(i,a){a&1&&n!==(n="first-color "+(i[0].isFinished?"finished":"")+" svelte-5zcshr")&&k(s,"class",n),a&4&&l!==(l=!i[2])&&(s.disabled=l),a&1&&U(s,i[0].description)},d(i){i&&d(t),i&&d(e),i&&d(s),o=!1,r()}}}function _e(c){let t,e,s,n,l,o,r,i;function a(u,_){return u[1]?he:de}let f=a(c),p=f(c),h=c[1]&&Q(c);return{c(){p.c(),t=E(),e=g("input"),l=E(),h&&h.c(),o=z(),this.h()},l(u){p.l(u),t=N(u),e=v(u,"INPUT",{type:!0,class:!0}),l=N(u),h&&h.l(u),o=z(),this.h()},h(){k(e,"type","text"),k(e,"class",s="first-color "+(c[0].isFinished?"finished":"")+" svelte-5zcshr"),e.disabled=n=!c[2]},m(u,_){p.m(u,_),y(u,t,_),y(u,e,_),U(e,c[0].title),y(u,l,_),h&&h.m(u,_),y(u,o,_),r||(i=A(e,"input",c[5]),r=!0)},p(u,[_]){f===(f=a(u))&&p?p.p(u,_):(p.d(1),p=f(u),p&&(p.c(),p.m(t.parentNode,t))),_&1&&s!==(s="first-color "+(u[0].isFinished?"finished":"")+" svelte-5zcshr")&&k(e,"class",s),_&4&&n!==(n=!u[2])&&(e.disabled=n),_&1&&e.value!==u[0].title&&U(e,u[0].title),u[1]?h?h.p(u,_):(h=Q(u),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},i:P,o:P,d(u){p.d(u),u&&d(t),u&&d(e),u&&d(l),h&&h.d(u),u&&d(o),r=!1,i()}}}function pe(c,t,e){let{todo:s}=t,{editable:n=!1}=t,{isShowingDescription:l=!1}=t;function o(){l||e(1,l=!0)}function r(){l&&e(1,l=!1)}function i(){s.title=this.value,e(0,s)}function a(){s.description=this.value,e(0,s)}return c.$$set=f=>{"todo"in f&&e(0,s=f.todo),"editable"in f&&e(2,n=f.editable),"isShowingDescription"in f&&e(1,l=f.isShowingDescription)},[s,l,n,o,r,i,a]}class ie extends M{constructor(t){super(),V(this,t,pe,_e,j,{todo:0,editable:2,isShowingDescription:1})}}function G(c){let t,e,s,n,l,o;return{c(){t=g("label"),e=g("input"),s=E(),n=g("span"),this.h()},l(r){t=v(r,"LABEL",{class:!0});var i=w(t);e=v(i,"INPUT",{type:!0,class:!0}),s=N(i),n=v(i,"SPAN",{class:!0}),w(n).forEach(d),i.forEach(d),this.h()},h(){k(e,"type","checkbox"),k(e,"class","svelte-n8xqhk"),k(n,"class","slider round svelte-n8xqhk"),k(t,"class","switch svelte-n8xqhk")},m(r,i){y(r,t,i),b(t,e),e.checked=c[0],b(t,s),b(t,n),l||(o=A(e,"change",c[2]),l=!0)},p(r,i){i&1&&(e.checked=r[0])},d(r){r&&d(t),l=!1,o()}}}function Y(c){let t,e,s,n;return{c(){t=g("label"),e=g("input"),s=E(),n=g("span"),this.h()},l(l){t=v(l,"LABEL",{class:!0});var o=w(t);e=v(o,"INPUT",{type:!0,class:!0}),s=N(o),n=v(o,"SPAN",{class:!0}),w(n).forEach(d),o.forEach(d),this.h()},h(){k(e,"type","checkbox"),k(e,"class","svelte-n8xqhk"),k(n,"class","slider svelte-n8xqhk"),k(t,"class","switch svelte-n8xqhk")},m(l,o){y(l,t,o),b(t,e),b(t,s),b(t,n)},d(l){l&&d(t)}}}function me(c){let t,e,s=c[1]&&G(c),n=!c[1]&&Y();return{c(){s&&s.c(),t=E(),n&&n.c(),e=z()},l(l){s&&s.l(l),t=N(l),n&&n.l(l),e=z()},m(l,o){s&&s.m(l,o),y(l,t,o),n&&n.m(l,o),y(l,e,o)},p(l,[o]){l[1]?s?s.p(l,o):(s=G(l),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),l[1]?n&&(n.d(1),n=null):n||(n=Y(),n.c(),n.m(e.parentNode,e))},i:P,o:P,d(l){s&&s.d(l),l&&d(t),n&&n.d(l),l&&d(e)}}}function be(c,t,e){let{round:s=!0}=t,{value:n=!1}=t;function l(){n=this.checked,e(0,n)}return c.$$set=o=>{"round"in o&&e(1,s=o.round),"value"in o&&e(0,n=o.value)},[n,s,l]}class ge extends M{constructor(t){super(),V(this,t,be,me,j,{round:1,value:0})}}function Z(c,t,e){const s=c.slice();return s[5]=t[e],s}function $(c,t,e){const s=c.slice();return s[5]=t[e],s[7]=e,s}function ve(c){let t,e=[],s=new Map,n,l=c[0];const o=r=>r[5].id;for(let r=0;r<l.length;r+=1){let i=Z(c,l,r),a=o(i);s.set(a,e[r]=x(a,i))}return{c(){t=g("ul");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=v(r,"UL",{class:!0});var i=w(t);for(let a=0;a<e.length;a+=1)e[a].l(i);i.forEach(d),this.h()},h(){k(t,"class","svelte-ferzig")},m(r,i){y(r,t,i);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(t,null);n=!0},p(r,i){i&1&&(l=r[0],K(),e=le(e,i,o,1,r,l,s,t,se,x,null,Z),W())},i(r){if(!n){for(let i=0;i<l.length;i+=1)L(e[i]);n=!0}},o(r){for(let i=0;i<e.length;i+=1)I(e[i]);n=!1},d(r){r&&d(t);for(let i=0;i<e.length;i+=1)e[i].d()}}}function ke(c){let t,e=[],s=new Map,n,l=c[0];const o=r=>r[5].id;for(let r=0;r<l.length;r+=1){let i=$(c,l,r),a=o(i);s.set(a,e[r]=ee(a,i))}return{c(){t=g("ul");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=v(r,"UL",{class:!0});var i=w(t);for(let a=0;a<e.length;a+=1)e[a].l(i);i.forEach(d),this.h()},h(){k(t,"class","svelte-ferzig")},m(r,i){y(r,t,i);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(t,null);n=!0},p(r,i){i&13&&(l=r[0],K(),e=le(e,i,o,1,r,l,s,t,se,ee,null,$),W())},i(r){if(!n){for(let i=0;i<l.length;i+=1)L(e[i]);n=!0}},o(r){for(let i=0;i<e.length;i+=1)I(e[i]);n=!1},d(r){r&&d(t);for(let i=0;i<e.length;i+=1)e[i].d()}}}function x(c,t){let e,s,n;return s=new ie({props:{todo:t[5]}}),{key:c,first:null,c(){e=g("li"),O(s.$$.fragment),this.h()},l(l){e=v(l,"LI",{});var o=w(e);R(s.$$.fragment,o),o.forEach(d),this.h()},h(){this.first=e},m(l,o){y(l,e,o),C(s,e,null),n=!0},p(l,o){t=l;const r={};o&1&&(r.todo=t[5]),s.$set(r)},i(l){n||(L(s.$$.fragment,l),n=!0)},o(l){I(s.$$.fragment,l),n=!1},d(l){l&&d(e),H(s)}}}function ee(c,t){let e,s,n,l,o,r,i,a,f,p,h,u;return s=new ie({props:{todo:t[5],editable:!0,isShowingDescription:!0}}),{key:c,first:null,c(){e=g("li"),O(s.$$.fragment),n=E(),l=g("button"),o=B("✔️"),r=E(),i=g("button"),a=B("❌"),f=E(),this.h()},l(_){e=v(_,"LI",{});var T=w(e);R(s.$$.fragment,T),n=N(T),l=v(T,"BUTTON",{});var S=w(l);o=q(S,"✔️"),S.forEach(d),r=N(T),i=v(T,"BUTTON",{});var m=w(i);a=q(m,"❌"),m.forEach(d),f=N(T),T.forEach(d),this.h()},h(){this.first=e},m(_,T){y(_,e,T),C(s,e,null),b(e,n),b(e,l),b(l,o),b(e,r),b(e,i),b(i,a),b(e,f),p=!0,h||(u=[A(l,"click",function(){X(t[2](t[7]))&&t[2](t[7]).apply(this,arguments)}),A(i,"click",function(){X(t[3](t[7]))&&t[3](t[7]).apply(this,arguments)})],h=!0)},p(_,T){t=_;const S={};T&1&&(S.todo=t[5]),s.$set(S)},i(_){p||(L(s.$$.fragment,_),p=!0)},o(_){I(s.$$.fragment,_),p=!1},d(_){_&&d(e),H(s),h=!1,te(u)}}}function ye(c){let t,e,s,n,l,o,r,i,a,f,p;function h(m){c[4](m)}let u={};c[1]!==void 0&&(u.value=c[1]),l=new ge({props:u}),oe.push(()=>re(l,"value",h));const _=[ke,ve],T=[];function S(m,D){return m[1]?0:1}return i=S(c),a=T[i]=_[i](c),{c(){t=g("div"),e=g("p"),s=B("Wanna edit?"),n=E(),O(l.$$.fragment),r=E(),a.c(),f=z(),this.h()},l(m){t=v(m,"DIV",{class:!0});var D=w(t);e=v(D,"P",{});var F=w(e);s=q(F,"Wanna edit?"),F.forEach(d),n=N(D),R(l.$$.fragment,D),D.forEach(d),r=N(m),a.l(m),f=z(),this.h()},h(){k(t,"class","svelte-ferzig")},m(m,D){y(m,t,D),b(t,e),b(e,s),b(t,n),C(l,t,null),y(m,r,D),T[i].m(m,D),y(m,f,D),p=!0},p(m,[D]){const F={};!o&&D&2&&(o=!0,F.value=m[1],ae(()=>o=!1)),l.$set(F);let J=i;i=S(m),i===J?T[i].p(m,D):(K(),I(T[J],1,1,()=>{T[J]=null}),W(),a=T[i],a?a.p(m,D):(a=T[i]=_[i](m),a.c()),L(a,1),a.m(f.parentNode,f))},i(m){p||(L(l.$$.fragment,m),L(a),p=!0)},o(m){I(l.$$.fragment,m),I(a),p=!1},d(m){m&&d(t),H(l),m&&d(r),T[i].d(m),m&&d(f)}}}function Te(c,t,e){let{todos:s}=t,n=!1;function l(i){function a(){e(0,s[i].isFinished=!s[i].isFinished,s),s[i].isFinished?e(0,s[i].finishedAt=new Date().getTime()/1e3,s):e(0,s[i].finishedAt=0,s)}return a}function o(i){async function a(){const f=s[i].id;s.splice(i,1),e(0,s),await fetch(`/todos/${f}`,{method:"DELETE"})}return a}function r(i){n=i,e(1,n)}return c.$$set=i=>{"todos"in i&&e(0,s=i.todos)},[s,n,l,o,r]}class we extends M{constructor(t){super(),V(this,t,Te,ye,j,{todos:0})}}function Ee(c){let t,e,s,n,l,o,r,i;return l=new fe({}),l.$on("newtodo",c[1]),r=new we({props:{todos:c[0].todos}}),{c(){t=g("div"),e=g("h1"),s=B("Todo List"),n=E(),O(l.$$.fragment),o=E(),O(r.$$.fragment),this.h()},l(a){t=v(a,"DIV",{class:!0});var f=w(t);e=v(f,"H1",{});var p=w(e);s=q(p,"Todo List"),p.forEach(d),n=N(f),R(l.$$.fragment,f),o=N(f),R(r.$$.fragment,f),f.forEach(d),this.h()},h(){k(t,"class","svelte-1y6awob")},m(a,f){y(a,t,f),b(t,e),b(e,s),b(t,n),C(l,t,null),b(t,o),C(r,t,null),i=!0},p(a,[f]){const p={};f&1&&(p.todos=a[0].todos),r.$set(p)},i(a){i||(L(l.$$.fragment,a),L(r.$$.fragment,a),i=!0)},o(a){I(l.$$.fragment,a),I(r.$$.fragment,a),i=!1},d(a){a&&d(t),H(l),H(r)}}}function Ne(c,t,e){let{data:s}=t;async function n(l){const o={id:crypto.randomUUID(),title:l.detail.title,description:l.detail.description,createdAt:new Date().getTime()/1e3,finishedAt:0,isFinished:!1};e(0,s.todos=[...s.todos,o],s),await fetch("/todos",{method:"POST",body:JSON.stringify(o),headers:{Accept:"application/json","Content-Type":"application/json"}})}return c.$$set=l=>{"data"in l&&e(0,s=l.data)},[s,n]}class Ae extends M{constructor(t){super(),V(this,t,Ne,Ee,j,{data:0})}}export{Ae as default};