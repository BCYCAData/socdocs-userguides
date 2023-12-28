import{t as F,a as M}from"./index.rBajJ9mv.js";import{R as G,Z as b,_ as C}from"./scheduler.Q2oRtGFl.js";import{r as K,d as m}from"./index.fY_4XAxg.js";import{p as X}from"./stores.6XwcVT7J.js";function Z(t){return t?.length!==void 0?t:Array.from(t)}function J(t,n){F(t,1,1,()=>{n.delete(t.key)})}function Q(t,n,o,e,l,f,r,u,a,T,s,d){let c=t.length,h=f.length,p=c;const N={};for(;p--;)N[t[p].key]=p;const k=[],x=new Map,w=new Map,A=[];for(p=h;p--;){const i=d(l,f,p),g=o(i);let y=r.get(g);y?e&&A.push(()=>y.p(i,n)):(y=T(g,i),y.c()),x.set(g,k[p]=y),g in N&&w.set(g,Math.abs(p-N[g]))}const E=new Set,v=new Set;function S(i){M(i,1),i.m(u,s),r.set(i.key,i),s=i.first,h--}for(;c&&h;){const i=k[h-1],g=t[c-1],y=i.key,_=g.key;i===g?(s=i.first,c--,h--):x.has(_)?!r.has(y)||E.has(y)?S(i):v.has(_)?c--:w.get(y)>w.get(_)?(v.add(y),S(i)):(E.add(_),c--):(a(g,r),c--)}for(;c--;){const i=t[c];x.has(i.key)||a(i,r)}for(;h;)S(k[h-1]);return G(A),k}function tt(t,n){const o={},e={},l={$$scope:1};let f=t.length;for(;f--;){const r=t[f],u=n[f];if(u){for(const a in r)a in u||(e[a]=1);for(const a in u)l[a]||(o[a]=u[a],l[a]=1);t[f]=u}else for(const a in r)l[a]=1}for(const r in e)r in o||(o[r]=void 0);return o}function et(t){return typeof t=="object"&&t!==null?t:{}}function nt(t){return t===null}function ot(t){return typeof t>"u"}function I(t){return typeof t=="string"}function st(t){return typeof t=="function"}function it(t){return t===window}function Y(t){return t instanceof RegExp}function L(t){var n,o,e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(o=L(t[n]))&&(e&&(e+=" "),e+=o);else for(n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function rt(){for(var t,n,o=0,e="";o<arguments.length;)(t=arguments[o++])&&(n=L(t))&&(e&&(e+=" "),e+=n);return e}function $(t){return t.charAt(0).toUpperCase()+t.slice(1)}function O(t){return $(t?.replace(/-./g,n=>" "+n[1].toUpperCase())??"")}function P(t){return t?.replace(/\s/g,"-").toLowerCase()??""}const R=Symbol(""),at={canUpdateHash:()=>!0,cleanHash:t=>t};function ct(){return b(R)}function ut(t){C(R,t)}const U=Symbol("");function lt(){return b(U)}function ft(t){C(U,t)}function V(t=null){if(!t)return{links:{}};const n={},o=t.baseUrl?.replace(/\/$/,"")??"";for(const e of Object.keys(t.links)){const l=t.links[e],f=P(e),r=I(t.links[e][0])?O(e):e;for(const u of l){const a=I(u)?{title:O(u),slug:`${o}/${f}/${u}`}:u;n[r]||(n[r]=[]),n[r].push(a)}}return{...t,links:n}}function W({match:t,slug:n},o){const e=o.replace(/\.html/,"");return t==="deep"?e===n||e.startsWith(n)&&e[n.length]==="/":Y(t)?t.test(n):e===n}const j=Symbol();function dt(t){const n=t&&"subscribe"in t?t:K(t),o=m(n,s=>V(s)),e=m(o,s=>Object.values(s.links).flat()),l=m([e,X],([s,d])=>s.findIndex(c=>W(c,d.url.pathname))),f=m([e,l],([s,d])=>s[d]),r=m([e,l],([s,d])=>s[d-1]),u=m([e,l],([s,d])=>s[d+1]),a=m([o,f],([s,d])=>{const c=Object.keys(s.links).find(h=>s.links[h]?.some(p=>p.title===d?.title&&p.slug===d?.slug));return!c||c==="."?null:c});return{config:o,allLinks:e,activeLinkIndex:l,activeLink:f,previousLink:r,nextLink:u,activeCategory:a}}function pt(t){C(j,t)}function gt(){return b(j)}const yt={nav:{previous:"Previous",next:"Next",mainMenu:"Main navigation menu",openSidebar:"Open main sidebar",options:"Options",links:"Links"},toc:{title:"On this page"},colorScheme:{title:"Color Scheme",light:"Light",dark:"Dark",system:"System",theme:"Theme"},dialog:{close:"Close dialog"},admonition:{note:"NOTE",info:"INFO",tip:"TIP",warning:"WARNING",danger:"DANGER",experimental:"EXPERIMENTAL"},code:{copy:"Copy code",copied:"Copied!"}},D=Symbol();function ht(){return b(D)}function mt(t){C(D,t)}export{at as D,ht as a,it as b,rt as c,I as d,nt as e,Z as f,tt as g,Q as h,ot as i,lt as j,et as k,st as l,gt as m,W as n,J as o,ct as p,ft as q,pt as r,ut as s,dt as t,$ as u,mt as v,yt as w};
