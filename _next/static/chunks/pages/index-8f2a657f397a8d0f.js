(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{86886:function(e,t,n){"use strict";n.d(t,{ZP:function(){return Z}});var r=n(63366),i=n(87462),o=n(67294),s=(n(45697),n(86010)),c=n(95408),a=n(39707),l=n(27192),d=n(90948),m=n(33616);var x=o.createContext(),p=n(28979);function u(e){return(0,p.Z)("MuiGrid",e)}const h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var f=(0,n(76087).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...h.map((e=>`grid-xs-${e}`)),...h.map((e=>`grid-sm-${e}`)),...h.map((e=>`grid-md-${e}`)),...h.map((e=>`grid-lg-${e}`)),...h.map((e=>`grid-xl-${e}`))]),g=n(85893);const b=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function j(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}const w=(0,d.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{container:n,direction:r,item:i,lg:o,md:s,sm:c,spacing:a,wrap:l,xl:d,xs:m,zeroMinWidth:x}=e.ownerState;return[t.root,n&&t.container,i&&t.item,x&&t.zeroMinWidth,n&&0!==a&&t[`spacing-xs-${String(a)}`],"row"!==r&&t[`direction-xs-${String(r)}`],"wrap"!==l&&t[`wrap-xs-${String(l)}`],!1!==m&&t[`grid-xs-${String(m)}`],!1!==c&&t[`grid-sm-${String(c)}`],!1!==s&&t[`grid-md-${String(s)}`],!1!==o&&t[`grid-lg-${String(o)}`],!1!==d&&t[`grid-xl-${String(d)}`]]}})((({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"nowrap"===e.wrap&&{flexWrap:"nowrap"},"reverse"===e.wrap&&{flexWrap:"wrap-reverse"})),(function({theme:e,ownerState:t}){const n=(0,c.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,c.k9)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${f.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:r}=t;let i={};if(n&&0!==r){const t=(0,c.P$)({values:r,breakpoints:e.breakpoints.values});i=(0,c.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{marginTop:`-${j(n)}`,[`& > .${f.item}`]:{paddingTop:j(n)}}:{}}))}return i}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:r}=t;let i={};if(n&&0!==r){const t=(0,c.P$)({values:r,breakpoints:e.breakpoints.values});i=(0,c.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{width:`calc(100% + ${j(n)})`,marginLeft:`-${j(n)}`,[`& > .${f.item}`]:{paddingLeft:j(n)}}:{}}))}return i}),(({theme:e,ownerState:t})=>e.breakpoints.keys.reduce(((n,r)=>(function(e,t,n,r){const o=r[n];if(!o)return;let s={};if(!0===o)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===o)s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const e=(0,c.P$)({values:r.columns,breakpoints:t.breakpoints.values}),a="object"===typeof e?e[n]:e,l=Math.round(o/a*1e8)/1e6+"%";let d={};if(r.container&&r.item&&0!==r.columnSpacing){const e=t.spacing(r.columnSpacing);if("0px"!==e){const t=`calc(${l} + ${j(e)})`;d={flexBasis:t,maxWidth:t}}}s=(0,i.Z)({flexBasis:l,flexGrow:0,maxWidth:l},d)}0===t.breakpoints.values[n]?Object.assign(e,s):e[t.breakpoints.up(n)]=s}(n,e,r,t),n)),{})));var Z=o.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiGrid"}),c=(0,a.Z)(n),{className:d,columns:p,columnSpacing:h,component:f="div",container:j=!1,direction:Z="row",item:v=!1,lg:y=!1,md:S=!1,rowSpacing:k,sm:P=!1,spacing:W=0,wrap:$="wrap",xl:_=!1,xs:C=!1,zeroMinWidth:I=!1}=c,O=(0,r.Z)(c,b),z=k||W,N=h||W,A=o.useContext(x),M=p||A||12,T=(0,i.Z)({},c,{columns:M,container:j,direction:Z,item:v,lg:y,md:S,sm:P,rowSpacing:z,columnSpacing:N,wrap:$,xl:_,xs:C,zeroMinWidth:I}),B=(e=>{const{classes:t,container:n,direction:r,item:i,lg:o,md:s,sm:c,spacing:a,wrap:d,xl:m,xs:x,zeroMinWidth:p}=e,h={root:["root",n&&"container",i&&"item",p&&"zeroMinWidth",n&&0!==a&&`spacing-xs-${String(a)}`,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==d&&`wrap-xs-${String(d)}`,!1!==x&&`grid-xs-${String(x)}`,!1!==c&&`grid-sm-${String(c)}`,!1!==s&&`grid-md-${String(s)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==m&&`grid-xl-${String(m)}`]};return(0,l.Z)(h,u,t)})(T);return D=(0,g.jsx)(w,(0,i.Z)({ownerState:T,className:(0,s.Z)(B.root,d),as:f,ref:t},O)),12!==M?(0,g.jsx)(x.Provider,{value:M,children:D}):D;var D}))},45301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(66234)}])},66234:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(85893),i=n(98396),o=n(99226),s=n(86886),c=n(27948),a=n(2734),l=n(26215),d=n(25449),m=n(83321),x=n(33047),p=n(16195);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(a){i=!0,o=a}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(){var e=(0,a.Z)(),t=(0,i.Z)(e.breakpoints.down("md")),n=(0,i.Z)(e.breakpoints.down("sm")),s=f((0,x.Z)(),2),c=s[0],u=s[1].width,g=!isNaN(u)&&u>0&&u<520;return(0,r.jsx)(o.Z,{ref:c,sx:{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:(0,r.jsxs)(o.Z,{sx:h({},!g&&{pl:6,pr:2,mr:1,minHeight:"600px",height:"calc(100vh - 80px)"},g&&{pl:3,pr:2,mr:1},{position:"relative",maxWidth:"560px",display:"flex",border:"0px solid blue",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}),children:[(0,r.jsxs)(o.Z,{sx:h({fontFamily:"Black Han Sans",lineHeight:1.5,display:"flex"},g&&{mt:8,fontSize:"40px"},!g&&{fontSize:"56px"},{flexDirection:"column",alignItems:"flex-start",justifyContent:"center",color:"#0A1929"}),children:[(0,r.jsx)(o.Z,{children:"AI \ucf54\ub529\ube14\ub85d"}),(0,r.jsx)(o.Z,{sx:{color:"#005CB8"},children:"\uc0ac\uc6a9\uc790"}),(0,r.jsx)(o.Z,{children:"\uac00\uc774\ub4dc"})]}),(0,r.jsxs)(o.Z,{sx:{"& em":{color:"primary.dark",fontStyle:"normal",ml:"4px",mr:"2px"}},children:[(0,r.jsxs)(o.Z,{sx:{color:"#555",fontSize:"1rem",fontWeight:400,mt:t?8:2},children:["AI \ucf54\ub529\ube14\ub85d \uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc \uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4.",(0,r.jsx)("em",{children:"AI \ucf54\ub529\ube14\ub85d \uc0ac\uc774\ud2b8"}),"\uc758 \uae30\uc220\uc801\uc778 \uc124\uba85\uc744 \uc815\ub9ac\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,r.jsxs)(o.Z,{sx:{color:"#555",fontSize:"1rem",fontWeight:400,mt:2},children:["KT\uc758 AI \ucf54\ub529\ube14\ub85d\uc740 \ub9ce\uc740 \ubd80\ubd84\uc744 ",(0,r.jsx)("em",{children:"\uc624\ud508 \uc18c\uc2a4"}),"\ub85c \uc9c4\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.jsx)("em",{children:"GITHUB"}),"\uc5d0 \uacf5\uac1c\ub41c \uc18c\uc2a4\ucf54\ub4dc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,r.jsx)(o.Z,{component:"img",sx:h({position:"absolute",right:"1rem"},g&&{top:"120px",width:"90px"},!g&&{top:"160px",width:"116px"}),src:(0,p.e_)("/images/codiny/3d_movement1.png")}),(0,r.jsxs)(o.Z,{sx:{mt:3,display:"flex",justifyContent:"center"},children:[(0,r.jsxs)(m.Z,{variant:"contained",size:"large",endIcon:(0,r.jsx)(l.Z,{fontSize:"small"}),onClick:function(){return null===window||void 0===window?void 0:window.open("https://aicodingblock.kt.co.kr")},children:["AI \ucf54\ub529\ube14\ub85d ",!n&&"\uc0ac\uc774\ud2b8"]}),(0,r.jsx)(m.Z,{sx:{ml:2},variant:"contained",size:"large",endIcon:(0,r.jsx)(d.Z,{fontSize:"small"}),onClick:function(){return null===window||void 0===window?void 0:window.open("https://github.com/ktaicoder")},children:"GITHUB"})]}),(0,r.jsx)(o.Z,{sx:{mt:6,color:"#555",fontSize:"0.85rem",fontWeight:400},children:"\uc544\uc9c1 \ubd80\uc871\ud55c \uc810\uc774 \ub9ce\uc9c0\ub9cc \uc810\uc810 \ubc1c\uc804\ud558\ub294 KT\uc758 AI \ucf54\ub529\ube14\ub85d\uc744 \uc9c0\ucf1c\ubd10\uc8fc\uc138\uc694."})]})})}var b=n(55113),j=n(15861);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(a){i=!0,o=a}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(){var e=(0,a.Z)(),t=(0,i.Z)(e.breakpoints.up("lg")),n=(0,i.Z)(e.breakpoints.down("sm")),c=v((0,x.Z)(),2),l=c[0],d=c[1].width,u=!isNaN(d)&&d>0&&d<560;return(0,r.jsx)(o.Z,{sx:Z({border:"0px solid blue",py:8,px:4,background:"#F3F6F9"},t&&{minHeight:"700px",height:"calc(100vh - 80px)",overflow:"auto"},!n&&!u&&{}),ref:l,children:(0,r.jsxs)(s.ZP,{container:!0,spacing:2,children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:12,lg:u?12:6,children:(0,r.jsxs)(o.Z,{sx:Z({border:"0px solid red",display:"flex",flexDirection:"column"},t&&!u&&{minHeight:"700px",height:"calc(100vh - 200px)"},{alignItems:"center","& > div":{maxWidth:"500px",width:"100%"}}),children:[(0,r.jsxs)(b.Z,{sx:{mt:0,p:3,borderRadius:"16px",color:"#fff",background:"#007FFF"},children:[(0,r.jsx)(o.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,r.jsx)(j.Z,{sx:{fontWeight:600,fontSize:"1rem"},children:"KT AI \ucf54\ub529\ube14\ub85d\uc774\ub780?"})}),(0,r.jsx)(j.Z,{sx:{mt:3,fontWeight:400,fontSize:"1rem"},children:"KT AI \ucf54\ub529\ube14\ub85d\uc740 \u2018\uc778\uacf5\uc9c0\ub2a5\u2019, \u2018\uc0ac\ubb3c\uc778\ud130\ub137\u2019, \u2018\ube45\ub370\uc774\ud130\u2019 \ub4f1\uc758 \uc138\uc0c1\uc758 \uae30\uc220\ub4e4\uc744 \uc27d\uac8c \ud559\uc2b5\ud558\uace0 \uad6c\ud604\ud560 \uc218 \uc788\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ucf54\ub529 \uad50\uc721 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4."}),(0,r.jsx)(o.Z,{sx:{mt:2,mb:1,display:"flex",justifyContent:"center"},children:(0,r.jsx)(o.Z,{component:"img",sx:{width:"100%",maxWidth:"120px"},src:(0,p.e_)("/images/home/ic_intro4.png")})})]}),(0,r.jsxs)(b.Z,{sx:{mt:2,flex:1,p:3,borderRadius:"16px"},children:[(0,r.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,r.jsx)(j.Z,{sx:{fontWeight:600,fontSize:"1rem"},children:"PC \ud504\ub85c\uadf8\ub7a8"}),(0,r.jsx)(m.Z,{onClick:function(){return(0,p.J5)("/post-frame/hw-pc-program-guide")},children:"\uac00\uc774\ub4dc"})]}),(0,r.jsx)(o.Z,{sx:{mt:6,mb:4,display:"flex",justifyContent:"center"},children:(0,r.jsx)(o.Z,{component:"img",sx:{width:"100%",maxWidth:"320px"},src:(0,p.e_)("/images/home/ic_intro2.png")})}),(0,r.jsx)(j.Z,{sx:{p:2,fontWeight:400,fontSize:"1rem"},children:"\ud558\ub4dc\uc6e8\uc5b4 \uc81c\uc5b4\ub97c \uc704\ud55c PC\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc785\ub2c8\ub2e4. electron \uae30\ubc18\uc73c\ub85c \uad6c\ud604\ub418\uc5c8\uc2b5\ub2c8\ub2e4."})]})]})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:12,lg:u?12:6,children:(0,r.jsxs)(o.Z,{sx:Z({border:"0px solid red"},t&&!u&&{minHeight:"700px",height:"calc(100vh - 200px)"},{display:"flex",flexDirection:"column",alignItems:"center","& > div":{maxWidth:"500px",width:"100%"}}),children:[(0,r.jsxs)(b.Z,{sx:{mt:0,flex:1,p:3,borderRadius:"16px"},children:[(0,r.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,r.jsx)(j.Z,{sx:{fontWeight:600,fontSize:"1rem"},children:"\ucf54\ub529\ud329 OS \uc774\ubbf8\uc9c0 \uad7d\uae30"}),(0,r.jsx)(m.Z,{onClick:function(){return(0,p.J5)("/codingpack/os-image-guide")},children:"\uac00\uc774\ub4dc"})]}),(0,r.jsx)(o.Z,{sx:{mt:6,mb:1,display:"flex",justifyContent:"center"},children:(0,r.jsx)(o.Z,{component:"img",sx:{width:"100%",maxWidth:"120px"},src:(0,p.e_)("/images/home/ic_intro3.png")})}),(0,r.jsx)(j.Z,{sx:{p:2,fontWeight:400,fontSize:"1rem"},children:"\ub77c\uc988\ubca0\ub9ac \ud30c\uc774\ub77c\ub294 \uc18c\ud615 \ucef4\ud4e8\ud130\uc640 KT AI \ucf54\ub529\ud329\uc758 \uc778\uacf5\uc9c0\ub2a5 \uae30\ubc18\uc73c\ub85c \ub204\uad6c\ub098 \uc27d\uace0 \uc800\ub834\ud558\uac8c \ub2e4\uc591\ud55c \ucf58\ud150\uce20\ub97c \uc7ac\ubbf8\uc788\uac8c \uc990\uae30\ub3c4\ub85d \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4."})]}),(0,r.jsxs)(b.Z,{sx:{mt:2,p:0,position:"relative",borderRadius:"16px",overflow:"hidden"},elevation:2,children:[(0,r.jsx)(o.Z,{component:"img",sx:{width:"100%",background:"#160A2C",transform:"scale(1.05)"},src:(0,p.e_)("/images/home/ic_intro1.png")}),(0,r.jsx)(j.Z,{variant:"body1",sx:{position:"absolute",fontFamily:"Black Han Sans",fontSize:"1.5rem",letterSpacing:2,top:32,left:24,color:"#fff"},children:"AI \ucf54\ub529\ube14\ub85d"})]})]})})]})})}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){S(e,t,n[t])}))}return e}function P(e){var t=e.imageSrc,n=e.href,i=e.title,s=e.subtitle,c=e.sx,a=e.className;return(0,r.jsxs)(o.Z,{sx:k({display:"flex",border:"1px solid #CED5DB",alignItems:"center",borderRadius:3,background:"#fff",px:3,py:2,"&:hover":function(e){return{backgroundColor:"#f9f9f9","& .MuiTypography-subtitle1":{color:"#000"},"& .MuiTypography-body2":{color:"#000"},"& > img":{transition:"0.2s",transform:"scale(1.15)"}}}},c),className:a,children:[(0,r.jsx)(o.Z,{component:"img",sx:{width:"60px",height:"60px",objectFit:"contain"},src:t}),(0,r.jsxs)(o.Z,{sx:{flex:1,ml:4},children:[(0,r.jsx)(j.Z,{variant:"subtitle1",sx:{mt:1,fontWeight:600},children:i}),(0,r.jsx)(j.Z,{variant:"body2",sx:{mt:1},children:s}),(0,r.jsx)(m.Z,{sx:{mt:1,ml:-1},endIcon:(0,r.jsx)(l.Z,{}),component:"a",href:n,target:n.startsWith("http")?"_blank":void 0,rel:"noreferrer",children:"\ubc14\ub85c\uac00\uae30"})]})]})}function W(){var e=(0,a.Z)(),t=((0,i.Z)(e.breakpoints.down("sm")),"pagelink");return(0,r.jsxs)(o.Z,{sx:{position:"relative",py:8},children:[(0,r.jsx)(j.Z,{variant:"h3",sx:{textAlign:"center",color:"primary.main"},children:"\uad00\ub828 \uc815\ubcf4 \ubc0f \uc790\ub8cc"}),(0,r.jsxs)(o.Z,{mt:8,sx:{width:"100%","& > div + div":{mt:2}},children:[(0,r.jsx)(j.Z,{variant:"h6",sx:{color:"#222",textAlign:"center",fontWeight:400,mt:4,mb:2},children:"\ucf54\ub529\ud329 \uc18c\uc2a4\ucf54\ub4dc"}),(0,r.jsx)(P,{className:t,title:"\ucf54\ub529\ud329 \ube14\ub85d \ub4dc\ub77c\uc774\ubc84",subtitle:"GITHUB\uc5d0 \uacf5\uac1c\ub41c \ucf54\ub529\ud329 \ube14\ub85d\ub4dc\ub77c\uc774\ubc84 \uc18c\uc2a4\ucf54\ub4dc\uc785\ub2c8\ub2e4.",imageSrc:(0,p.e_)("/images/home/console.png"),href:"https://github.com/aicodingblock/reset_blockdriver"}),(0,r.jsx)(j.Z,{variant:"h6",sx:{color:"#222",textAlign:"center",fontWeight:400,mt:8,mb:2},children:"PC \ud504\ub85c\uadf8\ub7a8 \uc124\uce58 \ud30c\uc77c \ubc0f \uc18c\uc2a4\ucf54\ub4dc"}),(0,r.jsx)(P,{className:t,title:"PC \ud504\ub85c\uadf8\ub7a8 \uc124\uce58\ud30c\uc77c",subtitle:"\ub9c1\ud06c\ub97c \ud074\ub9ad\ud558\uc5ec PC\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc744 \uc124\uce58\ud574\ubcf4\uc138\uc694.",imageSrc:(0,p.e_)("/images/home/github-120.png"),href:"https://github.com/ktaicoder/hw-pc/releases"}),(0,r.jsx)(P,{className:t,title:"PC \ud504\ub85c\uadf8\ub7a8 \uc18c\uc2a4 \ucf54\ub4dc(\uae43\ud5c8\ube0c)",subtitle:"PC \ud504\ub85c\uadf8\ub7a8 \uc18c\uc2a4\ucf54\ub4dc\uac00 GITHUB\uc5d0 \uacf5\uac1c\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",imageSrc:(0,p.e_)("/images/home/github-120.png"),href:"https://github.com/ktaicoder/hw-pc"}),(0,r.jsx)(j.Z,{variant:"h6",sx:{color:"#222",textAlign:"center",fontWeight:400,mt:8,mb:2},children:"\ud558\ub4dc\uc6e8\uc5b4 \uc18c\uc2a4\ucf54\ub4dc \ubc0f NPM"}),(0,r.jsx)(P,{className:t,title:"\ud558\ub4dc\uc6e8\uc5b4 \uc778\ud130\ud398\uc774\uc2a4 \ub77c\uc774\ube0c\ub7ec\ub9ac",subtitle:"\ube14\ub85d\ucf54\ub529\uacfc \ud1b5\uc2e0\ud558\uae30 \uc704\ud55c \ud558\ub4dc\uc6e8\uc5b4\ub4e4\uc758 \uc778\ud130\ud398\uc774\uc2a4 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4.",imageSrc:(0,p.e_)("/images/home/nodejs1.png"),href:"https://github.com/ktaicoder/hw-proto"}),(0,r.jsx)(P,{className:t,title:"\ud558\ub4dc\uc6e8\uc5b4 \uc778\ud130\ud398\uc774\uc2a4 \ub77c\uc774\ube0c\ub7ec\ub9ac NPM \uc800\uc7a5\uc18c",subtitle:"\ud558\ub4dc\uc6e8\uc5b4 \uc778\ud130\ud398\uc774\uc2a4 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 NPM\uc5d0 \ub4f1\ub85d\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",imageSrc:(0,p.e_)("/images/home/nodejs2.png"),href:"https://www.npmjs.com/package/@ktaicoder/hw-proto"}),(0,r.jsx)(P,{className:t,title:"\ud558\ub4dc\uc6e8\uc5b4 \uc81c\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac",subtitle:"\uc2e4\uc81c \ud558\ub4dc\uc6e8\uc5b4\ub97c \uc81c\uc5b4\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uacc4\uc18d\ud574\uc11c \ud558\ub4dc\uc6e8\uc5b4\ub97c \ucd94\uac00\uc911\uc785\ub2c8\ub2e4.",imageSrc:(0,p.e_)("/images/home/nodejs3.png"),href:"https://github.com/ktaicoder/hw-control"}),(0,r.jsx)(P,{className:t,title:"\ud558\ub4dc\uc6e8\uc5b4 \uc81c\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac NPM \uc800\uc7a5\uc18c",subtitle:"\ud558\ub4dc\uc6e8\uc5b4 \uc81c\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 NPM\uc5d0 \ub4f1\ub85d\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",imageSrc:(0,p.e_)("/images/home/nodejs2.png"),href:"https://www.npmjs.com/package/@ktaicoder/hw-control"})]})]})}function $(){var e=(0,a.Z)();(0,i.Z)(e.breakpoints.down("sm"));return(0,r.jsxs)(o.Z,{sx:{p:0},children:[(0,r.jsxs)(s.ZP,{container:!0,spacing:2,children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:12,lg:7,style:{border:"0px solid red"},children:(0,r.jsx)(g,{})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:12,lg:5,style:{border:"0px solid green"},children:(0,r.jsx)(y,{})})]}),(0,r.jsx)(o.Z,{sx:{background:"#f5f5f5"},children:(0,r.jsx)(c.Z,{maxWidth:"sm",children:(0,r.jsx)(W,{})})})]})}var _=n(57452),C=function(){return(0,r.jsx)(_.Z,{title:"AI \ucf54\ub529\ube14\ub85d \uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc",children:(0,r.jsx)($,{})})}}},function(e){e.O(0,[528,452,774,888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);