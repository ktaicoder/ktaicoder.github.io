"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[452],{57452:function(e,r,t){t.d(r,{Z:function(){return We}});var n=t(85893),i=t(98396),o=t(99226),a=t(77533),s=t(90948),c=t(2734),u=t(29323),l=t(67294);function f(){var e=(0,l.useContext)(u.yX);if(void 0===e)throw new Error("useStore must be used within StoreProvider");return e}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var d=(0,s.ZP)("div")((function(e){var r=e.theme;return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){p(e,r,t[r])}))}return e}({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:r.spacing(0,1)},r.mixins.toolbar)})),b=t(19572),m=t(26215),h=t(93946),x=t(78462),g=t(21519),y=t(97212),j=t(79953),v=t(11163),O=t(16195),Z=t(49625),w="rgba(255, 255, 255, 0.2)",k="#707070",P=Z.Z.palette.primary.main,S=Z.Z.palette.primary.dark,C=240,I=Z.Z.palette.action.hover,L="rgba(0, 0, 0, 0.87)",E=Z.Z.palette.primary.dark,M=0,N=[{type:"divider"},{type:"menu",icon:"dashboard",title:"Home",href:"/"},{type:"divider"},{type:"menu",icon:"usb",title:"PC \ud504\ub85c\uadf8\ub7a8 \uac00\uc774\ub4dc",href:"/post-frame/hardware-pc-program-guide"},{type:"divider"},{type:"section",sectionId:"section"+ ++M,icon:"adb",title:"\ucf54\ub529\ud329",submenus:[{type:"menu",icon:"usb",title:"\ud130\ubbf8\ub110 \uc5ec\ub294 \ubc95",href:"/post-frame/codingpack-how-to-open-terminal"},{type:"menu",icon:"usb",title:"OS \uc774\ubbf8\uc9c0 \uc81c\uc791",href:"/codingpack/os-image-guide"},{type:"menu",icon:"usb",title:"\uc2dc\uc2a4\ud15c \ucd08\uae30\ud654 \ubc0f \ubcf5\uad6c",href:"/post-frame/codingpack-how-to-system-reset"}]}];N.forEach((function(e){return"section"===(r=e).type&&r.submenus.forEach((function(e){"menu"===e.type&&(e.sectionId=r.sectionId)})),r;var r}));var D=N,R=function(e,r){return!!r&&("/"===r?"/"===e:"/"===e?e===r:r.startsWith(e))},_=function(e,r){return!!r&&N.filter((function(r){return"section"===r.type&&r.sectionId===e})).some((function(e){return e.submenus.some((function(e){return"menu"===e.type&&R(e.href,r)}))}))},z=t(50122),T=t(86010),B=t(41664);function W(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function F(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){W(e,r,t[r])}))}return e}function H(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var G=l.forwardRef((function(e,r){var t=e.as,i=e.href,o=e.replace,a=e.scroll,s=e.passHref,c=e.shallow,u=e.prefetch,l=H(e,["as","href","replace","scroll","passHref","shallow","prefetch"]);return(0,n.jsx)(B.default,{href:i,prefetch:u,as:t,replace:o,scroll:a,shallow:c,passHref:s,children:(0,n.jsx)("a",F({ref:r},l))})}));function A(e){var r=e.href,t=e.activeClassName,i=void 0===t?"active":t,o=e.className,a=e.innerRef,s=e.naked,c=H(e,["href","activeClassName","className","innerRef","naked"]),u=(0,v.useRouter)(),l="string"===typeof r?r:r.pathname,f=(0,T.Z)(o,W({},i,u.pathname===l&&i));if(s){var p="string"===typeof r?(0,O.e_)(r):r;return(0,n.jsx)(G,F({className:f,ref:a,href:p},c))}return(0,n.jsx)(z.Z,F({component:G,className:f,ref:a,href:r},c))}var J=l.forwardRef((function(e,r){return(0,n.jsx)(A,F({},e,{innerRef:r}))}));function Q(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function X(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){Q(e,r,t[r])}))}return e}function q(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var K=function(e){var r=e.children,t=e.href,i=q(e,["children","href"]);if(t.startsWith("http://")||t.startsWith("https://"))return(0,n.jsx)(y.ZP,X({button:!0,component:z.Z},i,{href:t,children:r}));var o=(0,O.e_)(t);return(0,n.jsx)(y.ZP,X({button:!0,component:J},i,{href:o,children:r}))};function U(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function V(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){U(e,r,t[r])}))}return e}function Y(e){var r=e.menu,t=e.active,i=e.onLinkClick,o=(r.icon,r.title),a=r.href;return(0,n.jsx)(K,{href:a,replace:!0,onClick:function(){return null===i||void 0===i?void 0:i(a)},sx:V({display:"flex",pr:1,"&:hover":{backgroundColor:I},"& .MuiListItemIcon-root":{color:t?P:k},"& .MuiListItemText-root":{color:t?E:L,fontWeight:t?700:500,marginLeft:t?"-4px":0,"& .MuiListItemText-primary":{fontSize:"0.9rem"}}},t&&{backgroundColor:"rgba(0,0,0,0.1)",borderLeft:"4px solid ".concat(S),borderTopLeftRadius:0,borderBottomLeftRadius:0}),children:(0,n.jsx)(j.Z,{primary:o})})}var $=t(75503),ee=t(90813),re=t(98619),te=t(10796),ne=t(57922),ie=t(13264),oe=t(35553),ae=t(58117),se=t(13540),ce=t(49123),ue=t(23960),le=t(94229),fe=t(72965),pe=t(72660),de=t(12200),be=t(25709),me=t(86024),he=t(14465),xe=t(23054),ge=t(25449),ye=t(76403),je=t(75943),ve=t(2548);function Oe(e){switch(e.iconName){case"adb":return(0,n.jsx)(ue.Z,{});case"science":return(0,n.jsx)(je.Z,{});case"grade":return(0,n.jsx)(ye.Z,{});case"github":return(0,n.jsx)(ge.Z,{});case"construction":return(0,n.jsx)(xe.Z,{});case"build":return(0,n.jsx)(me.Z,{});case"bug_report":return(0,n.jsx)(he.Z,{});case"dashboard":return(0,n.jsx)(be.Z,{});case"settings":return(0,n.jsx)(le.Z,{});case"settings_input_hdmi":return(0,n.jsx)(fe.Z,{});case"exit_to_app":return(0,n.jsx)(ce.Z,{});case"logout":return(0,n.jsx)(se.Z,{});case"usb":return(0,n.jsx)(pe.Z,{});case"bluetooth":return(0,n.jsx)(de.Z,{});case"info":return(0,n.jsx)(ve.Z,{});case"mosaic":return(0,n.jsx)(ae.Z,{})}return(0,n.jsx)(oe.Z,{})}function Ze(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var we=(0,ie.Z)(re.Z,{shouldForwardProp:function(e){return"active"!==e}})((function(e){var r=e.theme,t=e.active;return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){Ze(e,r,t[r])}))}return e}({"&:hover":{backgroundColor:I},"& .MuiListItemText-root":{color:L,marginLeft:r.spacing(1)},"& .MuiListItemIcon-root":{color:k}},t&&{borderTop:"1px solid ".concat(w),backgroundColor:"rgba(0, 0, 0, 0)"},{"& .MuiIcon-root.sectionIndicator":{color:t?P:"rgba(255,255,255,0.5)",marginRight:r.spacing(1)},"& + &":{marginBottom:r.spacing(1),marginTop:r.spacing(1)}})}));function ke(e){var r,t=e.section,i=e.active,o=e.onClickSection,a=e.expanded,s=void 0!==a&&a,c=e.currentHref,u=e.onClickLink;return(0,n.jsxs)(l.Fragment,{children:[(0,n.jsxs)(we,{onClick:o,active:i,sx:{pl:1},children:[t.icon&&(0,n.jsx)(te.Z,{sx:{display:"none"},children:(0,n.jsx)(Oe,{iconName:t.icon})}),(0,n.jsx)(j.Z,{primary:t.title,sx:{"& .MuiListItemText-primary":{fontWeight:i?700:500,fontSize:"0.9rem"}}}),s?(0,n.jsx)(ee.Z,{sx:{color:i?"primary.main":"#bbb"}}):(0,n.jsx)($.Z,{sx:{color:i?"primary.main":"#bbb"}})]}),(0,n.jsx)(ne.Z,{in:s,timeout:"auto",unmountOnExit:!0,sx:{boxSizing:"border-box",borderBottom:"1px solid ".concat(w)},children:(0,n.jsx)(x.Z,{disablePadding:!0,sx:{"& > .MuiListItem-root":{pl:4}},children:null===(r=t.submenus)||void 0===r?void 0:r.map((function(e,r){return"divider"===e.type?(0,n.jsx)(g.Z,{},r):(0,n.jsx)(Y,{menu:e,onLinkClick:u,active:R(e.href,c)},e.href+r)}))})})]})}var Pe=D;var Se=(0,u.Pi)((function(){var e=(0,c.Z)(),r=(0,v.useRouter)().asPath,t=(0,i.Z)(e.breakpoints.down("sm")),a=f().sidebarStore,s=function(){t&&a.setOpen(!1)};return a.isOpen,(0,n.jsxs)(o.Z,{component:"nav",sx:{color:L,"& > .MuiDivider-root":{backgroundColor:"rgba(255, 255, 255, 0.2)",marginTop:8,marginBottom:8}},children:[(0,n.jsxs)(d,{sx:{justifyContent:"flex-start"},children:[(0,n.jsxs)(o.Z,{component:"a",sx:{display:"block",flexGrow:1,pl:1,pr:1,borderRadius:1,pt:"6px",fontSize:"1.1rem",textDecoration:"none",":hover .title1":{color:"#005CB8",fontWeight:500},":hover .title2":{color:"#005CB8"}},href:(0,O.e_)("/"),children:[(0,n.jsx)(o.Z,{className:"title1",sx:{fontSize:"0.85rem",color:"#444",fontWeight:400},children:"AI \ucf54\ub529\ube14\ub85d"}),(0,n.jsx)(o.Z,{className:"title2",sx:{flexGrow:1,mt:"4px",color:"primary.main",fontSize:"1.1rem",fontFamily:"Black Han Sans",textDecoration:"none"},children:"\uac1c\ubc1c\uc790 \uac00\uc774\ub4dc"})]}),(0,n.jsx)(h.Z,{size:"small",onClick:a.toggleOpen,sx:{color:L},children:"ltr"===e.direction?(0,n.jsx)(b.Z,{}):(0,n.jsx)(m.Z,{})})]}),(0,n.jsx)(x.Z,{disablePadding:!0,children:Pe.map((function(e,t){if("menu"===e.type)return(0,n.jsx)(Y,{menu:e,onLinkClick:s,active:R(e.href,r)},t);if("divider"===e.type)return(0,n.jsx)(g.Z,{light:!0},t);if("label"===e.type)return(0,n.jsx)(y.ZP,{sx:{pl:2,"& .MuiListItemText-root .MuiTypography-root":{color:L,opacity:.8}},dense:!0,children:(0,n.jsx)(j.Z,{children:e.title})},t);if("section"===e.type){var i=e;return(0,n.jsx)(ke,{active:_(i.sectionId,r),section:i,currentHref:r,expanded:a.expandedSectionIds.includes(i.sectionId),onClickLink:s,onClickSection:function(){return a.toggleExpandSection(i.sectionId)}},t)}return(0,n.jsx)("div",{children:JSON.stringify(e)})}))})]})})),Ce=t(82414),Ie=t(6236),Le=t(10155),Ee=t(15861),Me=t(42293),Ne=t(18377);function De(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Re=(0,s.ZP)(Me.Z,{shouldForwardProp:function(e){return"shift"!==e}})((function(e){var r=e.theme,t=e.shift;return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){De(e,r,t[r])}))}return e}({zIndex:r.zIndex.drawer+(t?1:-1),transition:r.transitions.create(["margin","width"],{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen}),color:"#FFF"},t&&{width:"calc(100% - ".concat(C,"px)"),marginLeft:C,transition:r.transitions.create(["margin","width"],{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.enteringScreen})},!t&&{"& .MuiToolbar-root":De({paddingLeft:r.spacing(3.5)},r.breakpoints.down("xs"),{paddingLeft:r.spacing(3)})})}));function _e(e){var r=e.title,t=void 0===r?"No title":r,o=e.isSidebarOpen,a=e.onClickMenuButton,s=(0,c.Z)(),u=(0,i.Z)(s.breakpoints.down("sm")),l=!(!o||u);return(0,n.jsx)(Re,{position:"fixed",shift:l,children:(0,n.jsx)(Le.Z,{children:(0,n.jsxs)(Ne.Z,{sx:{flexGrow:1,display:"flex",alignItems:"center"},children:[(0,n.jsx)(h.Z,{onClick:a,color:"inherit","aria-label":"open drawer",edge:"start",sx:{marginRight:"16px"},children:o?(0,n.jsx)(Ce.Z,{htmlColor:"#fff"}):(0,n.jsx)(Ie.Z,{htmlColor:"#f0f0f0"})}),(0,n.jsx)(Ee.Z,{variant:"subtitle1",noWrap:!0,component:"div",sx:{fontSize:"1.1rem"},children:t})]})})})}var ze=t(80938);function Te(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Be=(0,s.ZP)("main",{shouldForwardProp:function(e){return"contentShift"!==e}})((function(e){var r=e.theme,t=e.contentShift;return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){Te(e,r,t[r])}))}return e}({flexGrow:1,padding:r.spacing(0,0,0,0),transition:r.transitions.create("margin",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen})},0!==t&&{transition:r.transitions.create("margin",{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.enteringScreen}),marginLeft:t},0===t&&{transition:r.transitions.create("margin",{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.enteringScreen}),marginLeft:0},{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"#fafafa"})}));var We=(0,u.Pi)((function(e){var r=e.title,t=e.children,s=f().sidebarStore,u=(0,c.Z)(),p=(0,i.Z)(u.breakpoints.down("sm")),b=s.isOpen,m=(0,l.useState)(),h=m[0],x=(m[1],0);x=p||b?0:-240;var g=(0,l.useMemo)((function(){return{searchQuery:h,sidebarWidth:b?C:0}}),[h,b]);return(0,n.jsx)(ze.Z.Provider,{value:g,children:(0,n.jsxs)(o.Z,{sx:{display:"flex",position:"relative"},children:[(0,n.jsx)(_e,{title:r,isSidebarOpen:b,onClickMenuButton:s.toggleOpen}),(0,n.jsx)(a.ZP,{sx:{width:C,flexShrink:0,"& .MuiDrawer-paper":{width:C,boxSizing:"border-box"}},variant:p?"temporary":"persistent",anchor:"left",open:b,onClose:function(){return s.setOpen(!1)},children:(0,n.jsx)(Se,{})}),(0,n.jsxs)(Be,{contentShift:x,children:[(0,n.jsx)(d,{}),(0,n.jsx)(o.Z,{sx:{flexGrow:1},children:t})]})]})})}))},80938:function(e,r,t){t.d(r,{S:function(){return o}});var n=t(67294),i=(0,n.createContext)(void 0);function o(){return(0,n.useContext)(i)}r.Z=i}}]);