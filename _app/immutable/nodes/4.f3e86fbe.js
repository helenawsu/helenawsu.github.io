import{s as T,n as w,o as q}from"../chunks/scheduler.f69bda83.js";import{S as R,i as U,g as p,s as E,h as g,x as y,c as M,j as C,f as d,a as P,z as D,m as b,n as j,k as x,y as r,o as B}from"../chunks/index.469e67db.js";function A(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}const F=async({fetch:s})=>{const h=await(await s("/api/posts")).json();return console.log("hi"),{posts:h}},Q=Object.freeze(Object.defineProperty({__proto__:null,load:F},Symbol.toStringTag,{value:"Module"}));function I(s,t,h){const a=s.slice();return a[4]=t[h],a}function O(s){let t,h,a,i,c,n,e=s[4].meta.description+"",f,l,m,S,_=s[4].meta.date+"",v,z;return{c(){t=p("li"),h=p("h2"),a=p("a"),i=b(s[1]),n=E(),f=b(e),l=E(),m=p("br"),S=b(`
        Published `),v=b(_),z=E(),this.h()},l(u){t=g(u,"LI",{});var o=C(t);h=g(o,"H2",{});var H=C(h);a=g(H,"A",{href:!0});var L=C(a);i=j(L,s[1]),L.forEach(d),H.forEach(d),n=M(o),f=j(o,e),l=M(o),m=g(o,"BR",{}),S=j(o,`
        Published `),v=j(o,_),z=M(o),o.forEach(d),this.h()},h(){x(a,"href",c=s[4].path.slice(0,8))},m(u,o){P(u,t,o),r(t,h),r(h,a),r(a,i),r(t,n),r(t,f),r(t,l),r(t,m),r(t,S),r(t,v),r(t,z)},p(u,o){o&2&&B(i,u[1]),o&1&&c!==(c=u[4].path.slice(0,8))&&x(a,"href",c),o&1&&e!==(e=u[4].meta.description+"")&&B(f,e),o&1&&_!==(_=u[4].meta.date+"")&&B(v,_)},d(u){u&&d(t)}}}function G(s){let t,h="Blogs",a,i,c=A(s[0].posts),n=[];for(let e=0;e<c.length;e+=1)n[e]=O(I(s,c,e));return{c(){t=p("h1"),t.textContent=h,a=E(),i=p("ul");for(let e=0;e<n.length;e+=1)n[e].c()},l(e){t=g(e,"H1",{["data-svelte-h"]:!0}),y(t)!=="svelte-mjz2dt"&&(t.textContent=h),a=M(e),i=g(e,"UL",{});var f=C(i);for(let l=0;l<n.length;l+=1)n[l].l(f);f.forEach(d)},m(e,f){P(e,t,f),P(e,a,f),P(e,i,f);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(i,null)},p(e,[f]){if(f&3){c=A(e[0].posts);let l;for(l=0;l<c.length;l+=1){const m=I(e,c,l);n[l]?n[l].p(m,f):(n[l]=O(m),n[l].c(),n[l].m(i,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=c.length}},i:w,o:w,d(e){e&&(d(t),d(a),d(i)),D(n,e)}}}function J(s,t,h){let{data:a}=t;var i=["😄","😃","😀","😊","☺","😉","😍","😘","😚","😗","😙","😜","😝","😛","😳","😁","😔","😌","😒","😞","😣","😢","😂","😭","😪","😥","😰","😅","😓","😩","😫","😨","😱","😠","😡","😤","😖","😆","😋","😷","😎","😴","😵","😲","😟","😦","😧","😈","👿","😮","😬","😐","😕","😯","😶","😇","😏","😑","👲","👳","👮","👷","💂","👶","👦","👧","👨","👩","👴","👵","👱","👼","👸","😺","😸","😻","😽","😼","🙀","😿","😹","😾","👹","👺","🙈","🙉","🙊","💀","👽","💩","🔥","✨","🌟","💫","💥","💢","💦","💧","💤","💨","👂","👀","👃","👅","👄","👍","👎","👌","👊","✊","✌","👋","✋","👐","👆","👇","👉","👈","🙌","🙏","☝","👏","💪","🚶","🏃","💃","👫","👪","👬","👭","💏","💑","👯","🙆","🙅","💁","🙋","💆","💇","💅","👰","🙎","🙍","🙇","🎩","👑","👒","👟","👞","👡","👠","👢","👕","👔","👚","👗","🎽","👖","👘","👙","💼","👜","👝","👛","👓","🎀","🌂","💄","💛","💙","💜","💚","❤","💔","💗","💓","💕","💖","💞","💘","💌","💋","💍","💎","👤","👥","💬","👣","💭","🐶","🐺","🐱","🐭","🐹","🐰","🐸","🐯","🐨","🐻","🐷","🐽","🐮","🐗","🐵","🐒","🐴","🐑","🐘","🐼","🐧","🐦","🐤","🐥","🐣","🐔","🐍","🐢","🐛","🐝","🐜","🐞","🐌","🐙","🐚","🐠","🐟","🐬","🐳","🐋","🐄","🐏","🐀","🐃","🐅","🐇","🐉","🐎","🐐","🐓","🐕","🐖","🐁","🐂","🐲","🐡","🐊","🐫","🐪","🐆","🐈","🐩","🐾","💐","🌸","🌷","🍀","🌹","🌻","🌺","🍁","🍃","🍂","🌿","🌾","🍄","🌵","🌴","🌲","🌳","🌰","🌱","🌼","🌐","🌞","🌝","🌚","🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘","🌜","🌛","🌙","🌍","🌎","🌏","🌋","🌌","🌠","⭐","☀","⛅","☁","⚡","☔","❄","⛄","🌀","🌁","🌈","🌊","🎍","💝","🎎","🎒","🎓","🎏","🎆","🎇","🎐","🎑","🎃","👻","🎅","🎄","🎁","🎋","🎉","🎊","🎈","🎌","🔮","🎥","📷","📹","📼","💿","📀","💽","💾","💻","📱","☎","📞","📟","📠","📡","📺","📻","🔊","🔉","🔈","🔇","🔔","🔕","📢","📣","⏳","⌛","⏰","⌚","🔓","🔒","🔏","🔐","🔑","🔎","💡","🔦","🔆","🔅","🔌","🔋","🔍","🛁","🛀","🚿","🚽","🔧","🔩","🔨","🚪","🚬","💣","🔫","🔪","💊","💉","💰","💴","💵","💷","💶","💳","💸","📲","📧","📥","📤","✉","📩","📨","📯","📫","📪","📬","📭","📮","📦","📝","📄","📃","📑","📊","📈","📉","📜","📋","📅","📆","📇","📁","📂","✂","📌","📎","✒","✏","📏","📐","📕","📗","📘","📙","📓","📔","📒","📚","📖","🔖","📛","🔬","🔭","📰","🎨","🎬","🎤","🎧","🎼","🎵","🎶","🎹","🎻","🎺","🎷","🎸","👾","🎮","🃏","🎴","🀄","🎲","🎯","🏈","🏀","⚽","⚾","🎾","🎱","🏉","🎳","⛳","🚵","🚴","🏁","🏇","🏆","🎿","🏂","🏊","🏄","🎣","☕","🍵","🍶","🍼","🍺","🍻","🍸","🍹","🍷","🍴","🍕","🍔","🍟","🍗","🍖","🍝","🍛","🍤","🍱","🍣","🍥","🍙","🍘","🍚","🍜","🍲","🍢","🍡","🍳","🍞","🍩","🍮","🍦","🍨","🍧","🎂","🍰","🍪","🍫","🍬","🍭","🍯","🍎","🍏","🍊","🍋","🍒","🍇","🍉","🍓","🍑","🍈","🍌","🍐","🍍","🍠","🍆","🍅","🌽","🏠","🏡","🏫","🏢","🏣","🏥","🏦","🏪","🏩","🏨","💒","⛪","🏬","🏤","🌇","🌆","🏯","🏰","⛺","🏭","🗼","🗾","🗻","🌄","🌅","🌃","🗽","🌉","🎠","🎡","⛲","🎢","🚢","⛵","🚤","🚣","⚓","🚀","✈","💺","🚁","🚂","🚊","🚉","🚞","🚆","🚄","🚅","🚈","🚇","🚝","🚋","🚃","🚎","🚌","🚍","🚙","🚘","🚗","🚕","🚖","🚛","🚚","🚨","🚓","🚔","🚒","🚑","🚐","🚲","🚡","🚟","🚠","🚜","💈","🚏","🎫","🚦","🚥","⚠","🚧","🔰","⛽","🏮","🎰","♨","🗿","🎪","🎭","📍","🚩","⬆","⬇","⬅","➡","🔠","🔡","🔤","↗","↖","↘","↙","↔","↕","🔄","◀","▶","🔼","🔽","↩","↪","ℹ","⏪","⏩","⏫","⏬","⤵","⤴","🆗","🔀","🔁","🔂","🆕","🆙","🆒","🆓","🆖","📶","🎦","🈁","🈯","🈳","🈵","🈴","🈲","🉐","🈹","🈺","🈶","🈚","🚻","🚹","🚺","🚼","🚾","🚰","🚮","🅿","♿","🚭","🈷","🈸","🈂","Ⓜ","🛂","🛄","🛅","🛃","🉑","㊙","㊗","🆑","🆘","🆔","🚫","🔞","📵","🚯","🚱","🚳","🚷","🚸","⛔","✳","❇","❎","✅","✴","💟","🆚","📳","📴","🅰","🅱","🆎","🅾","💠","➿","♻","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","⛎","🔯","🏧","💹","💲","💱","©","®","™","〽","〰","🔝","🔚","🔙","🔛","🔜","❌","⭕","❗","❓","❕","❔","🔃","🕛","🕧","🕐","🕜","🕑","🕝","🕒","🕞","🕓","🕟","🕔","🕠","🕕","🕖","🕗","🕘","🕙","🕚","🕡","🕢","🕣","🕤","🕥","🕦","✖","➕","➖","➗","♠","♥","♣","♦","💮","💯","✔","☑","🔘","🔗","➰","🔱","🔲","🔳","◼","◻","◾","◽","▪","▫","🔺","⬜","⬛","⚫","⚪","🔴","🔵","🔻","🔶","🔷","🔸","🔹"];let c=function(){return i[Math.floor(Math.random()*i.length)]},n=c();return q(()=>{h(1,n=c()),document.getElementById("h2").innerHTML=n}),s.$$set=e=>{"data"in e&&h(0,a=e.data)},[a,n]}class V extends R{constructor(t){super(),U(this,t,J,G,T,{data:0})}}export{V as component,Q as universal};
