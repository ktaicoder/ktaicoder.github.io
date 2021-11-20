"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[316],{79316:function(e,t,r){r.d(t,{Z:function(){return Fe}});var n=r(85893),i=r(98396),o=r(99226),a=r(77533),s=r(90948),c=r(2734),u=r(29323),l=r(67294);function f(){var e=(0,l.useContext)(u.yX);if(void 0===e)throw new Error("useStore must be used within StoreProvider");return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=(0,s.ZP)("div")((function(e){var t=e.theme;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar)})),b=r(19572),h=r(26215),m=r(93946),x=r(78462),g=r(21519),y=r(97212),j=r(79953),v=r(11163),O=r(16195),Z=r(49625),w="rgba(255, 255, 255, 0.2)",k="#707070",P=Z.Z.palette.primary.main,S=Z.Z.palette.primary.dark,C=240,I=Z.Z.palette.action.hover,L="rgba(0, 0, 0, 0.87)",E=Z.Z.palette.primary.dark,M=0,N=[{type:"divider"},{type:"menu",icon:"dashboard",title:"Home",href:"/"},{type:"divider"},{type:"menu",icon:"usb",title:"PC \ud504\ub85c\uadf8\ub7a8 \uac00\uc774\ub4dc",href:"/post/hardware-pc-program-guide"},{type:"divider"},{type:"section",sectionId:"section"+ ++M,icon:"adb",title:"\ucf54\ub529\ud329",submenus:[{type:"menu",icon:"usb",title:"\ud130\ubbf8\ub110 \uc5ec\ub294 \ubc95",href:"/post/codingpack-how-to-open-terminal"},{type:"menu",icon:"usb",title:"OS \uc774\ubbf8\uc9c0 \uc81c\uc791",href:"/codingpack/os-image-guide"},{type:"menu",icon:"usb",title:"\uc2dc\uc2a4\ud15c \ucd08\uae30\ud654 \ubc0f \ubcf5\uad6c",href:"/post/codingpack-how-to-system-reset"}]}];N.forEach((function(e){return"section"===(t=e).type&&t.submenus.forEach((function(e){"menu"===e.type&&(e.sectionId=t.sectionId)})),t;var t}));var z=N,D=function(e,t){return!!t&&("/"===t?"/"===e:"/"===e?e===t:t.startsWith(e))},R=function(e,t){return!!t&&N.filter((function(t){return"section"===t.type&&t.sectionId===e})).some((function(r){var n=r.submenus.some((function(e){return"menu"===e.type&&D(e.href,t)}));return n&&console.log("current sectionId = ".concat(e," , pathkey = ").concat(t)),n}))},_=r(50122),T=r(86010),B=r(41664);function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){F(e,t,r[t])}))}return e}function W(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var G=l.forwardRef((function(e,t){var r=e.as,i=e.href,o=e.replace,a=e.scroll,s=e.passHref,c=e.shallow,u=e.prefetch,l=W(e,["as","href","replace","scroll","passHref","shallow","prefetch"]);return(0,n.jsx)(B.default,{href:i,prefetch:u,as:r,replace:o,scroll:a,shallow:c,passHref:s,children:(0,n.jsx)("a",H({ref:t},l))})}));function A(e){var t=e.href,r=e.activeClassName,i=void 0===r?"active":r,o=e.className,a=e.innerRef,s=e.naked,c=W(e,["href","activeClassName","className","innerRef","naked"]),u=(0,v.useRouter)(),l="string"===typeof t?t:t.pathname,f=(0,T.Z)(o,F({},i,u.pathname===l&&i));if(s){var p="string"===typeof t?(0,O.e_)(t):t;return(0,n.jsx)(G,H({className:f,ref:a,href:p},c))}return(0,n.jsx)(_.Z,H({component:G,className:f,ref:a,href:t},c))}var J=l.forwardRef((function(e,t){return(0,n.jsx)(A,H({},e,{innerRef:t}))}));function Q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Q(e,t,r[t])}))}return e}function q(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var K=function(e){var t=e.children,r=e.href,i=q(e,["children","href"]);if(r.startsWith("http://")||r.startsWith("https://"))return(0,n.jsx)(y.ZP,X({button:!0,component:_.Z},i,{href:r,children:t}));var o=(0,O.e_)(r);return(0,n.jsx)(y.ZP,X({button:!0,component:J},i,{href:o,children:t}))};function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){U(e,t,r[t])}))}return e}function Y(e){var t=e.menu,r=e.active,i=e.onLinkClick,o=(t.icon,t.title),a=t.href;return(0,n.jsx)(K,{href:a,replace:!0,onClick:function(){return null===i||void 0===i?void 0:i(a)},sx:V({display:"flex",pr:1,"&:hover":{backgroundColor:I},"& .MuiListItemIcon-root":{color:r?P:k},"& .MuiListItemText-root":{color:r?E:L,fontWeight:r?700:500,marginLeft:r?"-4px":0,"& .MuiListItemText-primary":{fontSize:"0.9rem"}}},r&&{backgroundColor:"rgba(0,0,0,0.1)",borderLeft:"4px solid ".concat(S),borderTopLeftRadius:0,borderBottomLeftRadius:0}),children:(0,n.jsx)(j.Z,{primary:o})})}var $=r(75503),ee=r(90813),te=r(98619),re=r(10796),ne=r(57922),ie=r(13264),oe=r(35553),ae=r(58117),se=r(13540),ce=r(49123),ue=r(23960),le=r(94229),fe=r(72965),pe=r(72660),de=r(12200),be=r(25709),he=r(86024),me=r(14465),xe=r(23054),ge=r(25449),ye=r(76403),je=r(75943),ve=r(2548);function Oe(e){switch(e.iconName){case"adb":return(0,n.jsx)(ue.Z,{});case"science":return(0,n.jsx)(je.Z,{});case"grade":return(0,n.jsx)(ye.Z,{});case"github":return(0,n.jsx)(ge.Z,{});case"construction":return(0,n.jsx)(xe.Z,{});case"build":return(0,n.jsx)(he.Z,{});case"bug_report":return(0,n.jsx)(me.Z,{});case"dashboard":return(0,n.jsx)(be.Z,{});case"settings":return(0,n.jsx)(le.Z,{});case"settings_input_hdmi":return(0,n.jsx)(fe.Z,{});case"exit_to_app":return(0,n.jsx)(ce.Z,{});case"logout":return(0,n.jsx)(se.Z,{});case"usb":return(0,n.jsx)(pe.Z,{});case"bluetooth":return(0,n.jsx)(de.Z,{});case"info":return(0,n.jsx)(ve.Z,{});case"mosaic":return(0,n.jsx)(ae.Z,{})}return(0,n.jsx)(oe.Z,{})}function Ze(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var we=(0,ie.Z)(te.Z,{shouldForwardProp:function(e){return"active"!==e}})((function(e){var t=e.theme,r=e.active;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Ze(e,t,r[t])}))}return e}({"&:hover":{backgroundColor:I},"& .MuiListItemText-root":{color:L,marginLeft:t.spacing(1)},"& .MuiListItemIcon-root":{color:k}},r&&{borderTop:"1px solid ".concat(w),backgroundColor:"rgba(0, 0, 0, 0)"},{"& .MuiIcon-root.sectionIndicator":{color:r?P:"rgba(255,255,255,0.5)",marginRight:t.spacing(1)},"& + &":{marginBottom:t.spacing(1),marginTop:t.spacing(1)}})}));function ke(e){var t,r=e.section,i=e.active,o=e.onClickSection,a=e.expanded,s=void 0!==a&&a,c=e.currentHref,u=e.onClickLink;return(0,n.jsxs)(l.Fragment,{children:[(0,n.jsxs)(we,{onClick:o,active:i,sx:{pl:1},children:[r.icon&&(0,n.jsx)(re.Z,{sx:{display:"none"},children:(0,n.jsx)(Oe,{iconName:r.icon})}),(0,n.jsx)(j.Z,{primary:r.title,sx:{"& .MuiListItemText-primary":{fontWeight:i?700:500,fontSize:"0.9rem"}}}),s?(0,n.jsx)(ee.Z,{sx:{color:i?"primary.main":"#bbb"}}):(0,n.jsx)($.Z,{sx:{color:i?"primary.main":"#bbb"}})]}),(0,n.jsx)(ne.Z,{in:s,timeout:"auto",unmountOnExit:!0,sx:{boxSizing:"border-box",borderBottom:"1px solid ".concat(w)},children:(0,n.jsx)(x.Z,{disablePadding:!0,sx:{"& > .MuiListItem-root":{pl:4}},children:null===(t=r.submenus)||void 0===t?void 0:t.map((function(e,t){return"divider"===e.type?(0,n.jsx)(g.Z,{},t):(0,n.jsx)(Y,{menu:e,onLinkClick:u,active:D(e.href,c)},e.href+t)}))})})]})}var Pe=z;var Se=(0,u.Pi)((function(){var e=(0,c.Z)(),t=(0,v.useRouter)().asPath,r=(0,i.Z)(e.breakpoints.down("sm")),a=f().sidebarStore,s=function(){r&&a.setOpen(!1)};return a.isOpen,(0,n.jsxs)(o.Z,{component:"nav",sx:{color:L,"& > .MuiDivider-root":{backgroundColor:"rgba(255, 255, 255, 0.2)",marginTop:8,marginBottom:8}},children:[(0,n.jsxs)(d,{sx:{justifyContent:"flex-start"},children:[(0,n.jsxs)(o.Z,{component:"a",sx:{display:"block",flexGrow:1,pl:1,pr:1,borderRadius:1,pt:"6px",fontSize:"1.1rem",textDecoration:"none",":hover .title1":{color:"#005CB8",fontWeight:500},":hover .title2":{color:"#005CB8"}},href:(0,O.e_)("/"),children:[(0,n.jsx)(o.Z,{className:"title1",sx:{fontSize:"0.85rem",color:"#444",fontWeight:400},children:"AI \ucf54\ub529\ube14\ub85d"}),(0,n.jsx)(o.Z,{className:"title2",sx:{flexGrow:1,mt:"4px",color:"primary.main",fontSize:"1.1rem",fontFamily:"Black Han Sans",textDecoration:"none"},children:"\uac1c\ubc1c\uc790 \uac00\uc774\ub4dc"})]}),(0,n.jsx)(m.Z,{size:"small",onClick:a.toggleOpen,sx:{color:L},children:"ltr"===e.direction?(0,n.jsx)(b.Z,{}):(0,n.jsx)(h.Z,{})})]}),(0,n.jsx)(x.Z,{disablePadding:!0,children:Pe.map((function(e,r){if("menu"===e.type)return(0,n.jsx)(Y,{menu:e,onLinkClick:s,active:D(e.href,t)},r);if("divider"===e.type)return(0,n.jsx)(g.Z,{light:!0},r);if("label"===e.type)return(0,n.jsx)(y.ZP,{sx:{pl:2,"& .MuiListItemText-root .MuiTypography-root":{color:L,opacity:.8}},dense:!0,children:(0,n.jsx)(j.Z,{children:e.title})},r);if("section"===e.type){var i=e;return(0,n.jsx)(ke,{active:R(i.sectionId,t),section:i,currentHref:t,expanded:a.expandedSectionIds.includes(i.sectionId),onClickLink:s,onClickSection:function(){return a.toggleExpandSection(i.sectionId)}},r)}return(0,n.jsx)("div",{children:JSON.stringify(e)})}))})]})})),Ce=r(82414),Ie=r(6236),Le=r(10155),Ee=r(15861),Me=r(42293),Ne=r(18377);function ze(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var De=(0,s.ZP)(Me.Z,{shouldForwardProp:function(e){return"shift"!==e}})((function(e){var t=e.theme,r=e.shift;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ze(e,t,r[t])}))}return e}({zIndex:t.zIndex.drawer+(r?1:-1),transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),color:"#FFF"},r&&{width:"calc(100% - ".concat(C,"px)"),marginLeft:C,transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})},!r&&{"& .MuiToolbar-root":ze({paddingLeft:t.spacing(3.5)},t.breakpoints.down("xs"),{paddingLeft:t.spacing(3)})})}));function Re(e){var t=e.title,r=void 0===t?"No title":t,o=e.isSidebarOpen,a=e.onClickMenuButton,s=(0,c.Z)(),u=(0,i.Z)(s.breakpoints.down("sm")),l=!(!o||u);return(0,n.jsx)(De,{position:"fixed",shift:l,children:(0,n.jsx)(Le.Z,{children:(0,n.jsxs)(Ne.Z,{sx:{flexGrow:1,display:"flex",alignItems:"center"},children:[(0,n.jsx)(m.Z,{onClick:a,color:"inherit","aria-label":"open drawer",edge:"start",sx:{marginRight:"16px"},children:o?(0,n.jsx)(Ce.Z,{htmlColor:"#fff"}):(0,n.jsx)(Ie.Z,{htmlColor:"#f0f0f0"})}),(0,n.jsx)(Ee.Z,{variant:"subtitle1",noWrap:!0,component:"div",sx:{fontSize:"1.1rem"},children:r})]})})})}var _e=(0,l.createContext)(void 0);function Te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Be=(0,s.ZP)("main",{shouldForwardProp:function(e){return"contentShift"!==e}})((function(e){var t=e.theme,r=e.contentShift;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Te(e,t,r[t])}))}return e}({flexGrow:1,padding:t.spacing(0,0,0,0),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},0!==r&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:r},0===r&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0},{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"#fafafa"})}));var Fe=(0,u.Pi)((function(e){var t=e.title,r=e.children,s=e.withoutLayout,u=f().sidebarStore,p=(0,c.Z)(),b=(0,i.Z)(p.breakpoints.down("sm")),h=u.isOpen,m=(0,l.useState)(),x=m[0],g=(m[1],(0,l.useMemo)((function(){return{searchQuery:x}}),[x])),y=0;return y=b||h?0:-240,s?(0,n.jsx)(o.Z,{children:r}):(0,n.jsx)(_e.Provider,{value:g,children:(0,n.jsxs)(o.Z,{sx:{display:"flex",position:"relative"},children:[(0,n.jsx)(Re,{title:t,isSidebarOpen:h,onClickMenuButton:u.toggleOpen}),(0,n.jsx)(a.ZP,{sx:{width:C,flexShrink:0,"& .MuiDrawer-paper":{width:C,boxSizing:"border-box"}},variant:b?"temporary":"persistent",anchor:"left",open:h,onClose:function(){return u.setOpen(!1)},children:(0,n.jsx)(Se,{})}),(0,n.jsxs)(Be,{contentShift:y,children:[(0,n.jsx)(d,{}),(0,n.jsx)(o.Z,{sx:{flexGrow:1},children:r})]}),(0,n.jsx)(o.Z,{sx:{position:"absolute",content:'""',top:0,left:0,right:0,width:"100%",height:"1px",zIndex:9999,background:"rgba(0,0,0,0.05)"}})]})})}))}}]);