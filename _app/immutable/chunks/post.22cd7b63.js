import{s as q,c as w,u as A,g as H,d as I}from"./scheduler.f69bda83.js";import{S as L,i as R,g as y,m as b,s as j,h as P,j as k,n as p,f as h,c as C,a as T,y as d,o as S,d as z,t as B}from"./index.469e67db.js";function K(n,e){const a={},u={},r={$$scope:1};let i=n.length;for(;i--;){const c=n[i],l=e[i];if(l){for(const t in c)t in l||(u[t]=1);for(const t in l)r[t]||(a[t]=l[t],r[t]=1);n[i]=l}else for(const t in c)r[t]=1}for(const c in u)c in a||(a[c]=void 0);return a}function M(n){return typeof n=="object"&&n!==null?n:{}}function D(n){let e,a,u,r,i,c,l,t,_;const m=n[4].default,o=w(m,n,n[3],null);return{c(){e=y("article"),a=y("h1"),u=b(n[0]),r=j(),i=y("p"),c=b("Published: "),l=b(n[1]),t=j(),o&&o.c()},l(s){e=P(s,"ARTICLE",{});var f=k(e);a=P(f,"H1",{});var E=k(a);u=p(E,n[0]),E.forEach(h),r=C(f),i=P(f,"P",{});var g=k(i);c=p(g,"Published: "),l=p(g,n[1]),g.forEach(h),t=C(f),o&&o.l(f),f.forEach(h)},m(s,f){T(s,e,f),d(e,a),d(a,u),d(e,r),d(e,i),d(i,c),d(i,l),d(e,t),o&&o.m(e,null),_=!0},p(s,[f]){(!_||f&1)&&S(u,s[0]),(!_||f&2)&&S(l,s[1]),o&&o.p&&(!_||f&8)&&A(o,m,s,s[3],_?I(m,s[3],f,null):H(s[3]),null)},i(s){_||(z(o,s),_=!0)},o(s){B(o,s),_=!1},d(s){s&&h(e),o&&o.d(s)}}}function F(n,e,a){let{$$slots:u={},$$scope:r}=e,{title:i}=e,{date:c}=e,{description:l}=e;return n.$$set=t=>{"title"in t&&a(0,i=t.title),"date"in t&&a(1,c=t.date),"description"in t&&a(2,l=t.description),"$$scope"in t&&a(3,r=t.$$scope)},[i,c,l,r,u]}class N extends L{constructor(e){super(),R(this,e,F,D,q,{title:0,date:1,description:2})}}export{N as P,M as a,K as g};