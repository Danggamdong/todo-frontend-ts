import{C as d,s as m}from"./index-bbe03884.js";const c=[];function p(e,t=d){let n;const s=new Set;function o(a){if(m(e,a)&&(e=a,n)){const u=!c.length;for(const l of s)l[1](),c.push(l,e);if(u){for(let l=0;l<c.length;l+=2)c[l][0](c[l+1]);c.length=0}}}function r(a){o(a(e))}function i(a,u=d){const l=[a,u];return s.add(l),s.size===1&&(n=t(o)||d),a(e),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:o,update:r,subscribe:i}}const R="";let g="";function S(e){g=e}let E="";function I(e){E=e}const y="sveltekit:snapshot",T="sveltekit:scroll",x="sveltekit:index",b={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const h={...b,"":b.hover};function k(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=k(e)}}function N(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!s||w(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:o,target:s}}function V(e){let t=null,n=null,s=null,o=null,r=e;for(;r&&r!==document.documentElement;)n===null&&(n=f(r,"preload-code")),s===null&&(s=f(r,"preload-data")),t===null&&(t=f(r,"noscroll")),o===null&&(o=f(r,"reload")),r=k(r);return{preload_code:h[n??"off"],preload_data:h[s??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function _(e){const t=p(e);let n=!0;function s(){n=!0,t.update(i=>i)}function o(i){n=!1,t.set(i)}function r(i){let a;return t.subscribe(u=>{(a===void 0||n&&u!==a)&&i(a=u)})}return{notify:s,set:o,subscribe:r}}function v(){const{set:e,subscribe:t}=p(!1);let n;async function s(){clearTimeout(n);const o=await fetch(`${g}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const i=(await o.json()).version!==E;return i&&(e(!0),clearTimeout(n)),i}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:t,check:s}}function w(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function P(e){e.client}const Y={url:_({}),page:_({}),navigating:p(null),updated:v()};export{x as I,b as P,T as S,y as a,N as b,V as c,U as d,R as e,L as f,O as g,P as h,w as i,S as j,I as k,Y as s};
