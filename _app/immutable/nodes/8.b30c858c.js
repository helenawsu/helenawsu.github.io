import{s as w,f as g,h as $,n as H}from"../chunks/scheduler.4eff0beb.js";import{S as b,i as k,r as L,u as M,v as S,d as j,t as q,w as z,g as p,s as v,h as d,x,c as C,a as u,f as m}from"../chunks/index.fd970279.js";import{P as I,g as A,a as y}from"../chunks/post.8536cf83.js";function B(f){let t,r="Hello, I am <em>Post Three.</em>",l,s,e="今天找奶茶店的时候走错路了。绕路的时候突然想到，从现实概率来看，个例真的存在吗？比如说这个人运气不好，是指他一直运气不好吗？假如时间可以被分成接机无限的小分，这么多样本平均下来，所有人的运气应该是一样的。",n,o,h="统计里很明了地把抛一次硬币算做一次事件，或者一个个例。但是人生这么多波折与机遇，只有把最小的时间单位算做一个单位才能捕捉到所有的可能性，or the finest granularity。",c,_,P="噢，之前只考虑了每个事件的概率，没有考虑到影响。路上捡到钱和十年前买房概率可能差不多，但是产生的影响天差地别。走心地说，若是可以把影响程度量化，这个大的影响可以达到无限。而且，以影响为横轴，概率为竖轴，分布图肯定不是正态分布。我个人觉得每个人的概率分布图都是一样的。就像玩大富翁一样，其实每个人开局都有相等赢得游戏的机会。但是活到后面由于运气概率的影响，人与人之间拉开了不同差距。";return{c(){t=p("p"),t.innerHTML=r,l=v(),s=p("p"),s.textContent=e,n=v(),o=p("p"),o.textContent=h,c=v(),_=p("p"),_.textContent=P},l(a){t=d(a,"P",{["data-svelte-h"]:!0}),x(t)!=="svelte-1yca5ue"&&(t.innerHTML=r),l=C(a),s=d(a,"P",{["data-svelte-h"]:!0}),x(s)!=="svelte-1fnhkbw"&&(s.textContent=e),n=C(a),o=d(a,"P",{["data-svelte-h"]:!0}),x(o)!=="svelte-149e36k"&&(o.textContent=h),c=C(a),_=d(a,"P",{["data-svelte-h"]:!0}),x(_)!=="svelte-1e7z5cr"&&(_.textContent=P)},m(a,i){u(a,t,i),u(a,l,i),u(a,s,i),u(a,n,i),u(a,o,i),u(a,c,i),u(a,_,i)},p:H,d(a){a&&(m(t),m(l),m(s),m(n),m(o),m(c),m(_))}}}function D(f){let t,r;const l=[f[0],T];let s={$$slots:{default:[B]},$$scope:{ctx:f}};for(let e=0;e<l.length;e+=1)s=g(s,l[e]);return t=new I({props:s}),{c(){L(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,n){S(t,e,n),r=!0},p(e,[n]){const o=n&1?A(l,[n&1&&y(e[0]),n&0&&y(T)]):{};n&2&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){r||(j(t.$$.fragment,e),r=!0)},o(e){q(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}const T={title:"Post Three",date:"2023-07-11",description:"今天找奶茶店的时候走错路了。绕路的时候突然想到，从现实概率来看，个例真的存在吗？比如说这个人运气不好，是指他一直运气不好吗？假如时间可以被分成接机无限的小分，这么多样本平均下来，所有人的运气应该是一样的。"};function E(f,t,r){return f.$$set=l=>{r(0,t=g(g({},t),$(l)))},t=$(t),[t]}class K extends b{constructor(t){super(),k(this,t,E,D,w,{})}}export{K as component};