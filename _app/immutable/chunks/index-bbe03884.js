function A(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function G(){return Object.create(null)}function w(t){t.forEach(K)}function Q(t){return typeof t=="function"}function bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function tt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $t(t,e,n){t.$$.on_destroy.push(et(e,n))}function wt(t,e,n,i){if(t){const r=R(t,e,n,i);return t[0](r)}}function R(t,e,n,i){return t[1]&&i?Z(n.ctx.slice(),t[1](i(e))):n.ctx}function vt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)a[u]=e.dirty[u]|r[u];return a}return e.dirty|r}return e.dirty}function Et(t,e,n,i,r,a){if(r){const s=R(e,n,i,a);t.p(s,r)}}function kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let M=!1;function nt(){M=!0}function it(){M=!1}function rt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function st(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:rt(1,r,d=>e[n[d]].claim_order,l))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,r=Math.max(_,r)}const a=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(a.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);a.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<a.length&&s[c].claim_order>=a[l].claim_order;)l++;const f=l<a.length?a[l]:null;t.insertBefore(s[c],f)}}function ct(t,e){if(M){for(st(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){M&&!n?ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function ut(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function St(){return q(" ")}function At(){return q("")}function Mt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function at(t){return Array.from(t.childNodes)}function ot(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function W(t,e,n,i,r=!1){ot(t);const a=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function ft(t,e,n,i){return W(t,r=>r.nodeName===e,r=>{const a=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||a.push(u.name)}a.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Ct(t,e,n){return ft(t,e,n,ut)}function dt(t,e){return W(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>q(e),!0)}function Ot(t){return dt(t," ")}function Pt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Bt(t,e){t.value=e??""}function Lt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Dt(t,e){return new t(e)}let E;function v(t){E=t}function z(){if(!E)throw new Error("Function called outside component initialization");return E}function Tt(t){z().$$.on_mount.push(t)}function qt(t){z().$$.after_update.push(t)}function zt(){const t=z();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const a=_t(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,a)}),!a.defaultPrevented}return!0}}const b=[],J=[];let $=[];const L=[],U=Promise.resolve();let D=!1;function V(){D||(D=!0,U.then(X))}function Ft(){return V(),U}function T(t){$.push(t)}function Ht(t){L.push(t)}const B=new Set;let x=0;function X(){if(x!==0)return;const t=E;do{try{for(;x<b.length;){const e=b[x];x++,v(e),ht(e.$$)}}catch(e){throw b.length=0,x=0,e}for(v(null),b.length=0,x=0;J.length;)J.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];B.has(n)||(B.add(n),n())}$.length=0}while(b.length);for(;L.length;)L.pop()();D=!1,B.clear(),v(t)}function ht(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}function mt(t){const e=[],n=[];$.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),$=e}const S=new Set;let g;function It(){g={r:0,c:[],p:g}}function Gt(){g.r||w(g.c),g=g.p}function Y(t,e){t&&t.i&&(S.delete(t),t.i(e))}function pt(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),g.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Jt(t,e){pt(t,1,1,()=>{e.delete(t.key)})}function Kt(t,e,n,i,r,a,s,u,c,l,f,_){let d=t.length,m=a.length,h=d;const j={};for(;h--;)j[t[h].key]=h;const k=[],C=new Map,O=new Map,F=[];for(h=m;h--;){const o=_(r,a,h),p=n(o);let y=s.get(p);y?i&&F.push(()=>y.p(o,e)):(y=l(p,o),y.c()),C.set(p,k[h]=y),p in j&&O.set(p,Math.abs(h-j[p]))}const H=new Set,I=new Set;function P(o){Y(o,1),o.m(u,f),s.set(o.key,o),f=o.first,m--}for(;d&&m;){const o=k[m-1],p=t[d-1],y=o.key,N=p.key;o===p?(f=o.first,d--,m--):C.has(N)?!s.has(y)||H.has(y)?P(o):I.has(N)?d--:O.get(y)>O.get(N)?(I.add(y),P(o)):(H.add(N),d--):(c(p,s),d--)}for(;d--;){const o=t[d];C.has(o.key)||c(o,s)}for(;m;)P(k[m-1]);return w(F),k}function Qt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Rt(t){t&&t.c()}function Wt(t,e){t&&t.l(e)}function yt(t,e,n,i){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),i||T(()=>{const s=t.$$.on_mount.map(K).filter(Q);t.$$.on_destroy?t.$$.on_destroy.push(...s):w(s),t.$$.on_mount=[]}),a.forEach(T)}function gt(t,e){const n=t.$$;n.fragment!==null&&(mt(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xt(t,e){t.$$.dirty[0]===-1&&(b.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ut(t,e,n,i,r,a,s,u=[-1]){const c=E;v(t);const l=t.$$={fragment:null,ctx:[],props:a,update:A,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&xt(t,_)),d}):[],l.update(),f=!0,w(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){nt();const _=at(e.target);l.fragment&&l.fragment.l(_),_.forEach(lt)}else l.fragment&&l.fragment.c();e.intro&&Y(t.$$.fragment),yt(t,e.target,e.anchor,e.customElement),it(),X()}v(c)}class Vt{$destroy(){gt(this,1),this.$destroy=A}$on(e,n){if(!Q(n))return A;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{gt as A,Ft as B,A as C,wt as D,Et as E,kt as F,vt as G,ct as H,$t as I,Bt as J,Mt as K,w as L,zt as M,Qt as N,Ht as O,Kt as P,Q,Jt as R,Vt as S,St as a,Nt as b,Ot as c,Gt as d,At as e,Y as f,It as g,lt as h,Ut as i,qt as j,ut as k,Ct as l,at as m,jt as n,Tt as o,Lt as p,q,dt as r,bt as s,pt as t,Pt as u,J as v,Dt as w,Rt as x,Wt as y,yt as z};