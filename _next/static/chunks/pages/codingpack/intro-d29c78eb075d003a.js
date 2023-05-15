(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[259],{10044:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/codingpack/intro",function(){return n(30826)}])},90638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(96856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=o.default,a=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=u({},a,e));if((a=u({},a,t)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");a.suspense&&(delete a.ssr,delete a.loading);a.loadableGenerated&&delete(a=u({},a,a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,i(n,a);delete a.ssr}return n(a)},t.noSSR=i;var u=n(6495).Z,a=n(92648).Z,o=(a(n(67294)),a(n(14302)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(92648).Z)(n(67294)).default.createContext(null);t.LoadableContext=r},14302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(79658).Z,u=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(6495).Z,o=(0,n(92648).Z)(n(67294)),i=n(16319),l=n(61688).useSyncExternalStore,s=[],d=[],c=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return u(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return function(e,t){var n=function(){if(!s){var t=new p(e,u);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()},r=function(){n();var e=o.default.useContext(i.LoadableContext);e&&Array.isArray(u.modules)&&u.modules.forEach((function(t){e(t)}))},u=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);u.suspense&&(u.lazy=o.default.lazy(u.loader));var s=null;if(!c){var f=u.webpack?u.webpack():u.modules;f&&d.push((function(e){var t=!0,r=!1,u=void 0;try{for(var a,o=f[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value;if(-1!==e.indexOf(i))return n()}}catch(l){r=!0,u=l}finally{try{t||null==o.return||o.return()}finally{if(r)throw u}}}))}var _=u.suspense?function(e,t){return r(),o.default.createElement(u.lazy,a({},e,{ref:t}))}:function(e,t){r();var n=l(s.subscribe,s.getCurrentValue,s.getCurrentValue);return o.default.useImperativeHandle(t,(function(){return{retry:s.retry}}),[]),o.default.useMemo((function(){return n.loading||n.error?o.default.createElement(u.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:s.retry}):n.loaded?o.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return _.preload=function(){return n()},_.displayName="LoadableComponent",o.default.forwardRef(_)}(f,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}_.preloadAll=function(){return new Promise((function(e,t){y(s).then(e,t)}))},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return c=!0,t()};y(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=_.preloadReady;var h=_;t.default=h},30826:function(e,t,n){"use strict";n.r(t);var r=n(85893),u=n(5152),a=n.n(u),o=a()((function(){return n.e(407).then(n.bind(n,22407))}),{loadableGenerated:{webpack:function(){return[22407]}}}),i=a()((function(){return Promise.all([n.e(696),n.e(844)]).then(n.bind(n,11844))}),{loadableGenerated:{webpack:function(){return[11844]}}});t.default=function(){return(0,r.jsx)(i,{title:"KT AI Codiny Pack \uc18c\uac1c \ubc0f \uc870\ub9bd",children:(0,r.jsx)(o,{})})}},5152:function(e,t,n){e.exports=n(90638)},53250:function(e,t,n){"use strict";var r=n(67294);var u="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=r.useState,o=r.useEffect,i=r.useLayoutEffect,l=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(r){return!0}}var d="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),u=r[0].inst,d=r[1];return i((function(){u.value=n,u.getSnapshot=t,s(u)&&d({inst:u})}),[e,n,t]),o((function(){return s(u)&&d({inst:u}),e((function(){s(u)&&d({inst:u})}))}),[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d},61688:function(e,t,n){"use strict";e.exports=n(53250)}},function(e){e.O(0,[774,888,179],(function(){return t=10044,e(e.s=t);var t}));var t=e.O();_N_E=t}]);