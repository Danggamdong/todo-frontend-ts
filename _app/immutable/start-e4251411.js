import{S as dt,i as ht,s as pt,a as mt,e as H,c as _t,b as Y,g as _e,t as K,d as ge,f as M,h as G,j as gt,o as je,k as wt,l as yt,m as bt,n as Re,p as B,q as vt,r as Et,u as kt,v as Le,w as Z,x as Q,y as De,z as x,A as ee,B as pe}from"./chunks/index-bbe03884.js";import{S as it,a as lt,I as $,g as Qe,f as xe,b as Ie,c as me,s as F,i as et,d as re,e as X,P as tt,h as St,j as Rt,k as Lt}from"./chunks/singletons-f44516fc.js";function It(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function At(a){return a.split("%25").map(decodeURI).join("%25")}function Pt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Ot=["href","pathname","search","searchParams","toString","toJSON"];function Ut(a,e){const n=new URL(a);for(const o of Ot){let i=n[o];Object.defineProperty(n,o,{get(){return e(),i},enumerable:!0,configurable:!0})}return Nt(n),n}function Nt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const jt="/__data.json";function Tt(a){return a.replace(/\/$/,"")+jt}function ct(a){try{return JSON.parse(sessionStorage[a])}catch{}}function nt(a,e){const n=JSON.stringify(e);try{sessionStorage[a]=n}catch{}}function Dt(...a){let e=5381;for(const n of a)if(typeof n=="string"){let o=n.length;for(;o;)e=e*33^n.charCodeAt(--o)}else if(ArrayBuffer.isView(n)){const o=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let i=o.length;for(;i;)e=e*33^o[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const we=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&se.delete(Ce(a)),we(a,e));const se=new Map;function Ct(a,e){const n=Ce(a,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:i,...u}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&se.set(n,{body:i,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,u))}return we(a,e)}function qt(a,e,n){if(se.size>0){const o=Ce(a,n),i=se.get(o);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(i.body,i.init);se.delete(o)}}return we(e,n)}function Ce(a,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(e!=null&&e.headers||e!=null&&e.body){const i=[];e.headers&&i.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&i.push(e.body),o+=`[data-hash="${Dt(...i)}"]`}return o}const Vt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function $t(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Ft(a).map(o=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,p)=>{if(p%2){if(_.startsWith("x+"))return Ae(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return Ae(String.fromCharCode(..._.slice(2).split("-").map(I=>parseInt(I,16))));const m=Vt.exec(_);if(!m)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,k,P,L,C]=m;return e.push({name:L,matcher:C,optional:!!k,rest:!!P,chained:P?p===1&&t[0]==="":!1}),P?"(.*?)":k?"([^/]*)?":"([^/]+?)"}return Ae(_)}).join("")}).join("")}/?$`),params:e}}function Bt(a){return!/^\([^)]+\)$/.test(a)}function Ft(a){return a.slice(1).split("/").filter(Bt)}function Ht(a,e,n){const o={},i=a.slice(1);let u=0;for(let t=0;t<e.length;t+=1){const c=e[t],_=i[t-u];if(c.chained&&c.rest&&u){o[c.name]=i.slice(t-u,t+1).filter(p=>p).join("/"),u=0;continue}if(_===void 0){c.rest&&(o[c.name]="");continue}if(!c.matcher||n[c.matcher](_)){o[c.name]=_;continue}if(c.optional&&c.chained){u++;continue}return}if(!u)return o}function Ae(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Kt(a,e,n,o){const i=new Set(e);return Object.entries(n).map(([c,[_,p,m]])=>{const{pattern:k,params:P}=$t(c),L={id:c,exec:C=>{const I=k.exec(C);if(I)return Ht(I,P,o)},errors:[1,...m||[]].map(C=>a[C]),layouts:[0,...p||[]].map(t),leaf:u(_)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function u(c){const _=c<0;return _&&(c=~c),[_,a[c]]}function t(c){return c===void 0?c:[i.has(c),a[c]]}}function Mt(a){let e,n,o;var i=a[1][0];function u(t){return{props:{data:t[3],form:t[2]}}}return i&&(e=Z(i,u(a)),a[12](e)),{c(){e&&Q(e.$$.fragment),n=H()},l(t){e&&De(e.$$.fragment,t),n=H()},m(t,c){e&&x(e,t,c),Y(t,n,c),o=!0},p(t,c){const _={};if(c&8&&(_.data=t[3]),c&4&&(_.form=t[2]),c&2&&i!==(i=t[1][0])){if(e){_e();const p=e;K(p.$$.fragment,1,0,()=>{ee(p,1)}),ge()}i?(e=Z(i,u(t)),t[12](e),Q(e.$$.fragment),M(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){o||(e&&M(e.$$.fragment,t),o=!0)},o(t){e&&K(e.$$.fragment,t),o=!1},d(t){a[12](null),t&&G(n),e&&ee(e,t)}}}function Gt(a){let e,n,o;var i=a[1][0];function u(t){return{props:{data:t[3],$$slots:{default:[Jt]},$$scope:{ctx:t}}}}return i&&(e=Z(i,u(a)),a[11](e)),{c(){e&&Q(e.$$.fragment),n=H()},l(t){e&&De(e.$$.fragment,t),n=H()},m(t,c){e&&x(e,t,c),Y(t,n,c),o=!0},p(t,c){const _={};if(c&8&&(_.data=t[3]),c&8215&&(_.$$scope={dirty:c,ctx:t}),c&2&&i!==(i=t[1][0])){if(e){_e();const p=e;K(p.$$.fragment,1,0,()=>{ee(p,1)}),ge()}i?(e=Z(i,u(t)),t[11](e),Q(e.$$.fragment),M(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){o||(e&&M(e.$$.fragment,t),o=!0)},o(t){e&&K(e.$$.fragment,t),o=!1},d(t){a[11](null),t&&G(n),e&&ee(e,t)}}}function Jt(a){let e,n,o;var i=a[1][1];function u(t){return{props:{data:t[4],form:t[2]}}}return i&&(e=Z(i,u(a)),a[10](e)),{c(){e&&Q(e.$$.fragment),n=H()},l(t){e&&De(e.$$.fragment,t),n=H()},m(t,c){e&&x(e,t,c),Y(t,n,c),o=!0},p(t,c){const _={};if(c&16&&(_.data=t[4]),c&4&&(_.form=t[2]),c&2&&i!==(i=t[1][1])){if(e){_e();const p=e;K(p.$$.fragment,1,0,()=>{ee(p,1)}),ge()}i?(e=Z(i,u(t)),t[10](e),Q(e.$$.fragment),M(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){o||(e&&M(e.$$.fragment,t),o=!0)},o(t){e&&K(e.$$.fragment,t),o=!1},d(t){a[10](null),t&&G(n),e&&ee(e,t)}}}function at(a){let e,n=a[6]&&rt(a);return{c(){e=wt("div"),n&&n.c(),this.h()},l(o){e=yt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=bt(e);n&&n.l(i),i.forEach(G),this.h()},h(){Re(e,"id","svelte-announcer"),Re(e,"aria-live","assertive"),Re(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(o,i){Y(o,e,i),n&&n.m(e,null)},p(o,i){o[6]?n?n.p(o,i):(n=rt(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&G(e),n&&n.d()}}}function rt(a){let e;return{c(){e=vt(a[7])},l(n){e=Et(n,a[7])},m(n,o){Y(n,e,o)},p(n,o){o&128&&kt(e,n[7])},d(n){n&&G(e)}}}function zt(a){let e,n,o,i,u;const t=[Gt,Mt],c=[];function _(m,k){return m[1][1]?0:1}e=_(a),n=c[e]=t[e](a);let p=a[5]&&at(a);return{c(){n.c(),o=mt(),p&&p.c(),i=H()},l(m){n.l(m),o=_t(m),p&&p.l(m),i=H()},m(m,k){c[e].m(m,k),Y(m,o,k),p&&p.m(m,k),Y(m,i,k),u=!0},p(m,[k]){let P=e;e=_(m),e===P?c[e].p(m,k):(_e(),K(c[P],1,1,()=>{c[P]=null}),ge(),n=c[e],n?n.p(m,k):(n=c[e]=t[e](m),n.c()),M(n,1),n.m(o.parentNode,o)),m[5]?p?p.p(m,k):(p=at(m),p.c(),p.m(i.parentNode,i)):p&&(p.d(1),p=null)},i(m){u||(M(n),u=!0)},o(m){K(n),u=!1},d(m){c[e].d(m),m&&G(o),p&&p.d(m),m&&G(i)}}}function Wt(a,e,n){let{stores:o}=e,{page:i}=e,{constructors:u}=e,{components:t=[]}=e,{form:c}=e,{data_0:_=null}=e,{data_1:p=null}=e;gt(o.page.notify);let m=!1,k=!1,P=null;je(()=>{const S=o.page.subscribe(()=>{m&&(n(6,k=!0),n(7,P=document.title||"untitled page"))});return n(5,m=!0),S});function L(S){Le[S?"unshift":"push"](()=>{t[1]=S,n(0,t)})}function C(S){Le[S?"unshift":"push"](()=>{t[0]=S,n(0,t)})}function I(S){Le[S?"unshift":"push"](()=>{t[0]=S,n(0,t)})}return a.$$set=S=>{"stores"in S&&n(8,o=S.stores),"page"in S&&n(9,i=S.page),"constructors"in S&&n(1,u=S.constructors),"components"in S&&n(0,t=S.components),"form"in S&&n(2,c=S.form),"data_0"in S&&n(3,_=S.data_0),"data_1"in S&&n(4,p=S.data_1)},a.$$.update=()=>{a.$$.dirty&768&&o.page.set(i)},[t,u,c,_,p,m,k,P,o,i,L,C,I]}class Yt extends dt{constructor(e){super(),ht(this,e,Wt,zt,pt,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const Xt="modulepreload",Zt=function(a,e){return new URL(a,e).href},st={},Pe=function(e,n,o){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=Zt(u,o),u in st)return;st[u]=!0;const t=u.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(!!o)for(let m=i.length-1;m>=0;m--){const k=i[m];if(k.href===u&&(!t||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${c}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Xt,t||(p.as="script",p.crossOrigin=""),p.href=u,document.head.appendChild(p),t)return new Promise((m,k)=>{p.addEventListener("load",m),p.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},Qt={},ye=[()=>Pe(()=>import("./chunks/0-41e6705a.js"),["./chunks\\0-41e6705a.js","./chunks\\_layout-da46b06b.js","./components\\layout.svelte-f2813f3c.js","./chunks\\index-bbe03884.js"],import.meta.url),()=>Pe(()=>import("./chunks/1-6475e177.js"),["./chunks\\1-6475e177.js","./components\\error.svelte-1c7559bd.js","./chunks\\index-bbe03884.js","./chunks\\singletons-f44516fc.js"],import.meta.url),()=>Pe(()=>import("./chunks/2-f170ceb2.js"),["./chunks\\2-f170ceb2.js","./chunks\\_page-2679ec30.js","./components\\pages\\_page.svelte-7d79ad2b.js","./chunks\\index-bbe03884.js","./assets\\_page-2b6255b0.css"],import.meta.url)],xt=[],en={"/":[2]},tn={handleError:({error:a})=>{console.error(a)}};let oe=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},ot=class{constructor(e,n){this.status=e,this.location=n}};async function nn(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([o,i])=>[o,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const an=-1,rn=-2,sn=-3,on=-4,ln=-5,cn=-6;function fn(a,e){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const n=a,o=Array(n.length);function i(u,t=!1){if(u===an)return;if(u===sn)return NaN;if(u===on)return 1/0;if(u===ln)return-1/0;if(u===cn)return-0;if(t)throw new Error("Invalid input");if(u in o)return o[u];const c=n[u];if(!c||typeof c!="object")o[u]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const _=c[0],p=e==null?void 0:e[_];if(p)return o[u]=p(i(c[1]));switch(_){case"Date":o[u]=new Date(c[1]);break;case"Set":const m=new Set;o[u]=m;for(let L=1;L<c.length;L+=1)m.add(i(c[L]));break;case"Map":const k=new Map;o[u]=k;for(let L=1;L<c.length;L+=2)k.set(i(c[L]),i(c[L+1]));break;case"RegExp":o[u]=new RegExp(c[1],c[2]);break;case"Object":o[u]=Object(c[1]);break;case"BigInt":o[u]=BigInt(c[1]);break;case"null":const P=Object.create(null);o[u]=P;for(let L=1;L<c.length;L+=2)P[c[L]]=i(c[L+1]);break;default:throw new Error(`Unknown type ${_}`)}}else{const _=new Array(c.length);o[u]=_;for(let p=0;p<c.length;p+=1){const m=c[p];m!==rn&&(_[p]=i(m))}}else{const _={};o[u]=_;for(const p in c){const m=c[p];_[p]=i(m)}}return o[u]}return i(0)}function un(a){return a.filter(e=>e!=null)}const Oe=Kt(ye,xt,en,Qt),ft=ye[0],Te=ye[1];ft();Te();const W=ct(it)??{},ne=ct(lt)??{};function Ue(a){W[a]=re()}function dn({target:a}){var Ye;const e=document.documentElement,n=[],o=[];let i=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},c=!1,_=!1,p=!0,m=!1,k=!1,P=!1,L=!1,C,I=(Ye=history.state)==null?void 0:Ye[$];I||(I=Date.now(),history.replaceState({...history.state,[$]:I},"",location.href));const S=W[I];S&&(history.scrollRestoration="manual",scrollTo(S.x,S.y));let J,qe,ie;async function Ve(){ie=ie||Promise.resolve(),await ie,ie=null;const r=new URL(location.href),s=fe(r,!0);i=null,await He(s,r,[])}function $e(r){o.some(s=>s==null?void 0:s.snapshot)&&(ne[r]=o.map(s=>{var f;return(f=s==null?void 0:s.snapshot)==null?void 0:f.capture()}))}function Be(r){var s;(s=ne[r])==null||s.forEach((f,l)=>{var h,d;(d=(h=o[l])==null?void 0:h.snapshot)==null||d.restore(f)})}async function be(r,{noScroll:s=!1,replaceState:f=!1,keepFocus:l=!1,state:h={},invalidateAll:d=!1},w,g){return typeof r=="string"&&(r=new URL(r,Qe(document))),de({url:r,scroll:s?re():null,keepfocus:l,redirect_chain:w,details:{state:h,replaceState:f},nav_token:g,accepted:()=>{d&&(L=!0)},blocked:()=>{},type:"goto"})}async function Fe(r){const s=fe(r,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return i={id:s.id,promise:Ge(s).then(f=>(f.type==="loaded"&&f.state.error&&(i=null),f))},i.promise}async function le(...r){const f=Oe.filter(l=>r.some(h=>l.exec(h))).map(l=>Promise.all([...l.layouts,l.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(f)}async function He(r,s,f,l,h,d={},w){var b,v;qe=d;let g=r&&await Ge(r);if(g||(g=await We(s,{id:null},await ae(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(r==null?void 0:r.url)||s,qe!==d)return!1;if(g.type==="redirect")if(f.length>10||f.includes(s.pathname))g=await ce({status:500,error:await ae(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return be(new URL(g.location,s).href,{},[...f,s.pathname],d),!1;else((v=(b=g.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await F.updated.check()&&await he(s);if(n.length=0,L=!1,m=!0,l&&(Ue(l),$e(l)),h&&h.details){const{details:E}=h,O=E.replaceState?0:1;if(E.state[$]=I+=O,history[E.replaceState?"replaceState":"pushState"](E.state,"",s),!E.replaceState){let N=I+1;for(;ne[N]||W[N];)delete ne[N],delete W[N],N+=1}}if(i=null,_?(t=g.state,g.props.page&&(g.props.page.url=s),C.$set(g.props)):Ke(g),h){const{scroll:E,keepfocus:O}=h,{activeElement:N}=document;await pe();const A=document.activeElement!==N&&document.activeElement!==document.body;if(!O&&!A&&await Ne(),p){const y=s.hash&&document.getElementById(decodeURIComponent(s.hash.slice(1)));E?scrollTo(E.x,E.y):y?y.scrollIntoView():scrollTo(0,0)}}else await pe();p=!0,g.props.page&&(J=g.props.page),w&&w(),m=!1}function Ke(r){var l;t=r.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),J=r.props.page,C=new Yt({target:a,props:{...r.props,stores:F,components:o},hydrate:!0}),Be(I);const f={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(h=>h(f)),_=!0}async function te({url:r,params:s,branch:f,status:l,error:h,route:d,form:w}){let g="never";for(const A of f)(A==null?void 0:A.slash)!==void 0&&(g=A.slash);r.pathname=It(r.pathname,g),r.search=r.search;const b={type:"loaded",state:{url:r,params:s,branch:f,error:h,route:d},props:{constructors:un(f).map(A=>A.node.component)}};w!==void 0&&(b.props.form=w);let v={},E=!J,O=0;for(let A=0;A<Math.max(f.length,t.branch.length);A+=1){const y=f[A],T=t.branch[A];(y==null?void 0:y.data)!==(T==null?void 0:T.data)&&(E=!0),y&&(v={...v,...y.data},E&&(b.props[`data_${O}`]=v),O+=1)}return(!t.url||r.href!==t.url.href||t.error!==h||w!==void 0&&w!==J.form||E)&&(b.props.page={error:h,params:s,route:{id:(d==null?void 0:d.id)??null},status:l,url:new URL(r),form:w??null,data:E?v:J.data}),b}async function ve({loader:r,parent:s,url:f,params:l,route:h,server_data_node:d}){var v,E,O;let w=null;const g={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await r();if((v=b.universal)!=null&&v.load){let N=function(...y){for(const T of y){const{href:q}=new URL(T,f);g.dependencies.add(q)}};const A={route:{get id(){return g.route=!0,h.id}},params:new Proxy(l,{get:(y,T)=>(g.params.add(T),y[T])}),data:(d==null?void 0:d.data)??null,url:Ut(f,()=>{g.url=!0}),async fetch(y,T){let q;y instanceof Request?(q=y.url,T={body:y.method==="GET"||y.method==="HEAD"?void 0:await y.blob(),cache:y.cache,credentials:y.credentials,headers:y.headers,integrity:y.integrity,keepalive:y.keepalive,method:y.method,mode:y.mode,redirect:y.redirect,referrer:y.referrer,referrerPolicy:y.referrerPolicy,signal:y.signal,...T}):q=y;const V=new URL(q,f);return N(V.href),V.origin===f.origin&&(q=V.href.slice(f.origin.length)),_?qt(q,V.href,T):Ct(q,T)},setHeaders:()=>{},depends:N,parent(){return g.parent=!0,s()}};w=await b.universal.load.call(null,A)??null,w=w?await nn(w):null}return{node:b,loader:r,server:d,universal:(E=b.universal)!=null&&E.load?{type:"data",data:w,uses:g}:null,data:w??(d==null?void 0:d.data)??null,slash:((O=b.universal)==null?void 0:O.trailingSlash)??(d==null?void 0:d.slash)}}function Me(r,s,f,l,h){if(L)return!0;if(!l)return!1;if(l.parent&&r||l.route&&s||l.url&&f)return!0;for(const d of l.params)if(h[d]!==t.params[d])return!0;for(const d of l.dependencies)if(n.some(w=>w(new URL(d))))return!0;return!1}function Ee(r,s){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?s??null:null}async function Ge({id:r,invalidating:s,url:f,params:l,route:h}){if((i==null?void 0:i.id)===r)return i.promise;const{errors:d,layouts:w,leaf:g}=h,b=[...w,g];d.forEach(R=>R==null?void 0:R().catch(()=>{})),b.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let v=null;const E=t.url?r!==t.url.pathname+t.url.search:!1,O=t.route?h.id!==t.route.id:!1;let N=!1;const A=b.map((R,D)=>{var z;const U=t.branch[D],j=!!(R!=null&&R[0])&&((U==null?void 0:U.loader)!==R[1]||Me(N,O,E,(z=U.server)==null?void 0:z.uses,l));return j&&(N=!0),j});if(A.some(Boolean)){try{v=await hn(f,A)}catch(R){return ce({status:R instanceof oe?R.status:500,error:await ae(R,{url:f,params:l,route:{id:h.id}}),url:f,route:h})}if(v.type==="redirect")return v}const y=v==null?void 0:v.nodes;let T=!1;const q=b.map(async(R,D)=>{var ke;if(!R)return;const U=t.branch[D],j=y==null?void 0:y[D];if((!j||j.type==="skip")&&R[1]===(U==null?void 0:U.loader)&&!Me(T,O,E,(ke=U.universal)==null?void 0:ke.uses,l))return U;if(T=!0,(j==null?void 0:j.type)==="error")throw j;return ve({loader:R[1],url:f,params:l,route:h,parent:async()=>{var Ze;const Xe={};for(let Se=0;Se<D;Se+=1)Object.assign(Xe,(Ze=await q[Se])==null?void 0:Ze.data);return Xe},server_data_node:Ee(j===void 0&&R[0]?{type:"skip"}:j??null,U==null?void 0:U.server)})});for(const R of q)R.catch(()=>{});const V=[];for(let R=0;R<b.length;R+=1)if(b[R])try{V.push(await q[R])}catch(D){if(D instanceof ot)return{type:"redirect",location:D.location};let U=500,j;if(y!=null&&y.includes(D))U=D.status??U,j=D.error;else if(D instanceof oe)U=D.status,j=D.body;else{if(await F.updated.check())return await he(f);j=await ae(D,{params:l,url:f,route:{id:h.id}})}const z=await Je(R,V,d);return z?await te({url:f,params:l,branch:V.slice(0,z.idx).concat(z.node),status:U,error:j,route:h}):await We(f,{id:h.id},j,U)}else V.push(void 0);return await te({url:f,params:l,branch:V,status:200,error:null,route:h,form:s?void 0:null})}async function Je(r,s,f){for(;r--;)if(f[r]){let l=r;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await f[r](),loader:f[r],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:r,error:s,url:f,route:l}){const h={},w=await ve({loader:ft,url:f,params:h,route:l,parent:()=>Promise.resolve({}),server_data_node:Ee(null)}),g={node:await Te(),loader:Te,universal:null,server:null,data:null};return await te({url:f,params:h,branch:[w,g],status:r,error:s,route:null})}function fe(r,s){if(et(r,X))return;const f=ue(r);for(const l of Oe){const h=l.exec(f);if(h)return{id:r.pathname+r.search,invalidating:s,route:l,params:Pt(h),url:r}}}function ue(r){return At(r.pathname.slice(X.length)||"/")}function ze({url:r,type:s,intent:f,delta:l}){var g,b;let h=!1;const d={from:{params:t.params,route:{id:((g=t.route)==null?void 0:g.id)??null},url:t.url},to:{params:(f==null?void 0:f.params)??null,route:{id:((b=f==null?void 0:f.route)==null?void 0:b.id)??null},url:r},willUnload:!f,type:s};l!==void 0&&(d.delta=l);const w={...d,cancel:()=>{h=!0}};return k||u.before_navigate.forEach(v=>v(w)),h?null:d}async function de({url:r,scroll:s,keepfocus:f,redirect_chain:l,details:h,type:d,delta:w,nav_token:g,accepted:b,blocked:v}){const E=fe(r,!1),O=ze({url:r,type:d,delta:w,intent:E});if(!O){v();return}const N=I;b(),k=!0,_&&F.navigating.set(O),await He(E,r,l,N,{scroll:s,keepfocus:f,details:h},g,()=>{k=!1,u.after_navigate.forEach(A=>A(O)),F.navigating.set(null)})}async function We(r,s,f,l){return r.origin===location.origin&&r.pathname===location.pathname&&!c?await ce({status:l,error:f,url:r,route:s}):await he(r)}function he(r){return location.href=r.href,new Promise(()=>{})}function ut(){let r;e.addEventListener("mousemove",d=>{const w=d.target;clearTimeout(r),r=setTimeout(()=>{l(w,2)},20)});function s(d){l(d.composedPath()[0],1)}e.addEventListener("mousedown",s),e.addEventListener("touchstart",s,{passive:!0});const f=new IntersectionObserver(d=>{for(const w of d)w.isIntersecting&&(le(ue(new URL(w.target.href))),f.unobserve(w.target))},{threshold:0});function l(d,w){const g=xe(d,e);if(!g)return;const{url:b,external:v}=Ie(g,X);if(v)return;const E=me(g);E.reload||(w<=E.preload_data?Fe(b):w<=E.preload_code&&le(ue(b)))}function h(){f.disconnect();for(const d of e.querySelectorAll("a")){const{url:w,external:g}=Ie(d,X);if(g)continue;const b=me(d);b.reload||(b.preload_code===tt.viewport&&f.observe(d),b.preload_code===tt.eager&&le(ue(w)))}}u.after_navigate.push(h),h()}return{after_navigate:r=>{je(()=>(u.after_navigate.push(r),()=>{const s=u.after_navigate.indexOf(r);u.after_navigate.splice(s,1)}))},before_navigate:r=>{je(()=>(u.before_navigate.push(r),()=>{const s=u.before_navigate.indexOf(r);u.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(m||!_)&&(p=!1)},goto:(r,s={})=>be(r,s,[]),invalidate:r=>{if(typeof r=="function")n.push(r);else{const{href:s}=new URL(r,location.href);n.push(f=>f.href===s)}return Ve()},invalidateAll:()=>(L=!0,Ve()),preload_data:async r=>{const s=new URL(r,Qe(document));await Fe(s)},preload_code:le,apply_action:async r=>{if(r.type==="error"){const s=new URL(location.href),{branch:f,route:l}=t;if(!l)return;const h=await Je(t.branch.length,f,l.errors);if(h){const d=await te({url:s,params:t.params,branch:f.slice(0,h.idx).concat(h.node),status:r.status??500,error:r.error,route:l});t=d.state,C.$set(d.props),pe().then(Ne)}}else if(r.type==="redirect")be(r.location,{invalidateAll:!0},[]);else{const s={form:r.data,page:{...J,form:r.data,status:r.status}};C.$set(s),r.type==="success"&&pe().then(Ne)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let f=!1;if(!k){const h={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};u.before_navigate.forEach(d=>d(h))}f?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(Ue(I),nt(it,W),$e(I),nt(lt,ne))}),(r=navigator.connection)!=null&&r.saveData||ut(),e.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const f=xe(s.composedPath()[0],e);if(!f)return;const{url:l,external:h,target:d}=Ie(f,X);if(!l)return;if(d==="_parent"||d==="_top"){if(window.parent!==window)return}else if(d&&d!=="_self")return;const w=me(f);if(!(f instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(h||w.reload){ze({url:l,type:"link"})||s.preventDefault(),k=!0;return}const[b,v]=l.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){P=!0,Ue(I),t.url=l,F.page.set({...J,url:l}),F.page.notify();return}de({url:l,scroll:w.noscroll?re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),e.addEventListener("submit",s=>{if(s.defaultPrevented)return;const f=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||f.method)!=="get")return;const d=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||f.action);if(et(d,X))return;const w=s.target,{noscroll:g,reload:b}=me(w);if(b)return;s.preventDefault(),s.stopPropagation();const v=new FormData(w),E=l==null?void 0:l.getAttribute("name");E&&v.append(E,(l==null?void 0:l.getAttribute("value"))??""),d.search=new URLSearchParams(v).toString(),de({url:d,scroll:g?re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async s=>{var f;if((f=s.state)!=null&&f[$]){if(s.state[$]===I)return;const l=W[s.state[$]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){W[I]=re(),I=s.state[$],scrollTo(l.x,l.y);return}const h=s.state[$]-I;let d=!1;await de({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=s.state[$]},blocked:()=>{history.go(-h),d=!0},type:"popstate",delta:h}),d||Be(I)}}),addEventListener("hashchange",()=>{P&&(P=!1,history.replaceState({...history.state,[$]:++I},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&F.navigating.set(null)})},_hydrate:async({status:r=200,error:s,node_ids:f,params:l,route:h,data:d,form:w})=>{c=!0;const g=new URL(location.href);({params:l={},route:h={id:null}}=fe(g,!1)||{});let b;try{const v=f.map(async(E,O)=>{const N=d[O];return ve({loader:ye[E],url:g,params:l,route:h,parent:async()=>{const A={};for(let y=0;y<O;y+=1)Object.assign(A,(await v[y]).data);return A},server_data_node:Ee(N)})});b=await te({url:g,params:l,branch:await Promise.all(v),status:r,error:s,form:w,route:Oe.find(({id:E})=>E===h.id)??null})}catch(v){if(v instanceof ot){await he(new URL(v.location,location.href));return}b=await ce({status:v instanceof oe?v.status:500,error:await ae(v,{url:g,params:l,route:h}),url:g,route:h})}Ke(b)}}}async function hn(a,e){var u;const n=new URL(a);n.pathname=Tt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const o=await we(n.href),i=await o.json();if(!o.ok)throw new oe(o.status,i);return(u=i.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=fn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function ae(a,e){return a instanceof oe?a.body:tn.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ne(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(o=>{setTimeout(()=>{var i;o((i=getSelection())==null?void 0:i.removeAllRanges())})})}}async function wn({assets:a,env:e,hydrate:n,target:o,version:i}){Rt(a),Lt(i);const u=dn({target:o});St({client:u}),n?await u._hydrate(n):u.goto(location.href,{replaceState:!0}),u._start_router()}export{wn as start};
