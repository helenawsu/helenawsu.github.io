import{_ as j}from"../chunks/preload-helper.41c905a7.js";import{s as J}from"../chunks/scheduler.e108d1fd.js";import{S as K,i as N,g as P,s as A,h as $,x as Q,c as D,j as L,f as p,a as x,d as E,b as k,t as I,z as W,q as S,m as R,r as V,n as T,u as X,k as B,y as h,v as F,o as q,p as G,w as z}from"../chunks/index.a28bfc2a.js";function H(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}const Y=async()=>{const t=Object.entries(Object.assign({"/src/routes/blog/0.md":()=>j(()=>import("../chunks/0.f4a481fc.js"),["../chunks/0.f4a481fc.js","../chunks/scheduler.e108d1fd.js","../chunks/index.a28bfc2a.js"],import.meta.url),"/src/routes/blog/1.md":()=>j(()=>import("../chunks/1.4eb4943d.js"),["../chunks/1.4eb4943d.js","../chunks/scheduler.e108d1fd.js","../chunks/index.a28bfc2a.js"],import.meta.url),"/src/routes/blog/2.md":()=>j(()=>import("../chunks/2.dbdf3178.js"),["../chunks/2.dbdf3178.js","../chunks/scheduler.e108d1fd.js","../chunks/index.a28bfc2a.js"],import.meta.url)}));return await Promise.all(t.map(async([s,r])=>{const{metadata:_}=await r(),f=s.slice(11,-3),n=await j(()=>import("../../routes"+f+".md"),[],import.meta.url);return{meta:_,path:f,content:n.default}}))},Z=async({fetch:o})=>{const t=await o("/api/posts"),c=await Y();c.content,console.log(c);const s=c.sort((r,_)=>new Date(_.meta.date)-new Date(r.meta.date));return console.log(s),await t.json(),{sortedps:s}},ot=Object.freeze(Object.defineProperty({__proto__:null,load:Z},Symbol.toStringTag,{value:"Module"}));function M(o,t,c){const s=o.slice();return s[1]=t[c],s}function U(o){let t,c,s,r=o[1].meta.title+"",_,f,n,d=o[1].meta.date+"",e,l,a,v,i,O,g;var b=o[1].content;function y(m){return{}}return b&&(i=S(b,y())),{c(){t=P("li"),c=P("h2"),s=P("a"),_=R(r),n=R(`
          Published `),e=R(d),l=A(),a=P("br"),v=A(),i&&V(i.$$.fragment),O=A(),this.h()},l(m){t=$(m,"LI",{});var u=L(t);c=$(u,"H2",{});var w=L(c);s=$(w,"A",{href:!0});var C=L(s);_=T(C,r),C.forEach(p),w.forEach(p),n=T(u,`
          Published `),e=T(u,d),l=D(u),a=$(u,"BR",{}),v=D(u),i&&X(i.$$.fragment,u),O=D(u),u.forEach(p),this.h()},h(){B(s,"href",f=o[1].path)},m(m,u){x(m,t,u),h(t,c),h(c,s),h(s,_),h(t,n),h(t,e),h(t,l),h(t,a),h(t,v),i&&F(i,t,null),h(t,O),g=!0},p(m,u){if((!g||u&1)&&r!==(r=m[1].meta.title+"")&&q(_,r),(!g||u&1&&f!==(f=m[1].path))&&B(s,"href",f),(!g||u&1)&&d!==(d=m[1].meta.date+"")&&q(e,d),u&1&&b!==(b=m[1].content)){if(i){G();const w=i;I(w.$$.fragment,1,0,()=>{z(w,1)}),k()}b?(i=S(b,y()),V(i.$$.fragment),E(i.$$.fragment,1),F(i,t,O)):i=null}},i(m){g||(i&&E(i.$$.fragment,m),g=!0)},o(m){i&&I(i.$$.fragment,m),g=!1},d(m){m&&p(t),i&&z(i)}}}function tt(o){let t,c="Blog",s,r,_,f=H(o[0].sortedps),n=[];for(let e=0;e<f.length;e+=1)n[e]=U(M(o,f,e));const d=e=>I(n[e],1,1,()=>{n[e]=null});return{c(){t=P("h1"),t.textContent=c,s=A(),r=P("ul");for(let e=0;e<n.length;e+=1)n[e].c()},l(e){t=$(e,"H1",{["data-svelte-h"]:!0}),Q(t)!=="svelte-dbxyy8"&&(t.textContent=c),s=D(e),r=$(e,"UL",{});var l=L(r);for(let a=0;a<n.length;a+=1)n[a].l(l);l.forEach(p)},m(e,l){x(e,t,l),x(e,s,l),x(e,r,l);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(r,null);_=!0},p(e,[l]){if(l&1){f=H(e[0].sortedps);let a;for(a=0;a<f.length;a+=1){const v=M(e,f,a);n[a]?(n[a].p(v,l),E(n[a],1)):(n[a]=U(v),n[a].c(),E(n[a],1),n[a].m(r,null))}for(G(),a=f.length;a<n.length;a+=1)d(a);k()}},i(e){if(!_){for(let l=0;l<f.length;l+=1)E(n[l]);_=!0}},o(e){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)I(n[l]);_=!1},d(e){e&&(p(t),p(s),p(r)),W(n,e)}}}function et(o,t,c){let{data:s}=t;return o.$$set=r=>{"data"in r&&c(0,s=r.data)},[s]}class lt extends K{constructor(t){super(),N(this,t,et,tt,J,{data:0})}}export{lt as component,ot as universal};
