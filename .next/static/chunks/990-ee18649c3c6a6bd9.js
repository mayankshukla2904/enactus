"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[990],{1084:function(e,t,n){n.d(t,{F:function(){return o},e:function(){return a}});var r=n(6006);function o(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function a(...e){return r.useCallback(o(...e),e)}},8454:function(e,t,n){let r;n.d(t,{x8:function(){return ts},VY:function(){return tu},dk:function(){return tl},aV:function(){return ti},h_:function(){return ta},fC:function(){return tr},Dx:function(){return tc},xz:function(){return to}});var o,a,i,u,c,l,s,d=n(6006),f=n.t(d,2);function p(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}var v=n(1084),m=n(9268),h=globalThis?.document?d.useLayoutEffect:()=>{},g=f["useId".toString()]||(()=>void 0),y=0;function E(e){let[t,n]=d.useState(g());return h(()=>{e||n(e=>e??String(y++))},[e]),e||(t?`radix-${t}`:"")}function b(e){let t=d.useRef(e);return d.useEffect(()=>{t.current=e}),d.useMemo(()=>(...e)=>t.current?.(...e),[])}var w=n(6899),C="dismissableLayer.update",N=d.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),x=d.forwardRef((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:i,onDismiss:u,...c}=e,s=d.useContext(N),[f,h]=d.useState(null),g=f?.ownerDocument??globalThis?.document,[,y]=d.useState({}),E=(0,v.e)(t,e=>h(e)),x=Array.from(s.layers),[O]=[...s.layersWithOutsidePointerEventsDisabled].slice(-1),D=x.indexOf(O),P=f?x.indexOf(f):-1,M=s.layersWithOutsidePointerEventsDisabled.size>0,j=P>=D,T=function(e,t=globalThis?.document){let n=b(e),r=d.useRef(!1),o=d.useRef(()=>{});return d.useEffect(()=>{let e=e=>{if(e.target&&!r.current){let r=function(){S("dismissableLayer.pointerDownOutside",n,a,{discrete:!0})},a={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=r,t.addEventListener("click",o.current,{once:!0})):r()}else t.removeEventListener("click",o.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...s.branches].some(e=>e.contains(t));!j||n||(o?.(e),i?.(e),e.defaultPrevented||u?.())},g),L=function(e,t=globalThis?.document){let n=b(e),r=d.useRef(!1);return d.useEffect(()=>{let e=e=>{e.target&&!r.current&&S("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...s.branches].some(e=>e.contains(t));n||(a?.(e),i?.(e),e.defaultPrevented||u?.())},g);return!function(e,t=globalThis?.document){let n=b(e);d.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{let t=P===s.layers.size-1;t&&(r?.(e),!e.defaultPrevented&&u&&(e.preventDefault(),u()))},g),d.useEffect(()=>{if(f)return n&&(0===s.layersWithOutsidePointerEventsDisabled.size&&(l=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),s.layersWithOutsidePointerEventsDisabled.add(f)),s.layers.add(f),R(),()=>{n&&1===s.layersWithOutsidePointerEventsDisabled.size&&(g.body.style.pointerEvents=l)}},[f,g,n,s]),d.useEffect(()=>()=>{f&&(s.layers.delete(f),s.layersWithOutsidePointerEventsDisabled.delete(f),R())},[f,s]),d.useEffect(()=>{let e=()=>y({});return document.addEventListener(C,e),()=>document.removeEventListener(C,e)},[]),(0,m.jsx)(w.WV.div,{...c,ref:E,style:{pointerEvents:M?j?"auto":"none":void 0,...e.style},onFocusCapture:p(e.onFocusCapture,L.onFocusCapture),onBlurCapture:p(e.onBlurCapture,L.onBlurCapture),onPointerDownCapture:p(e.onPointerDownCapture,T.onPointerDownCapture)})});function R(){let e=new CustomEvent(C);document.dispatchEvent(e)}function S(e,t,n,{discrete:r}){let o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,w.jH)(o,a):o.dispatchEvent(a)}x.displayName="DismissableLayer",d.forwardRef((e,t)=>{let n=d.useContext(N),r=d.useRef(null),o=(0,v.e)(t,r);return d.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,m.jsx)(w.WV.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var O="focusScope.autoFocusOnMount",D="focusScope.autoFocusOnUnmount",P={bubbles:!1,cancelable:!0},M=d.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...i}=e,[u,c]=d.useState(null),l=b(o),s=b(a),f=d.useRef(null),p=(0,v.e)(t,e=>c(e)),h=d.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;d.useEffect(()=>{if(r){let e=function(e){if(h.paused||!u)return;let t=e.target;u.contains(t)?f.current=t:L(f.current,{select:!0})},t=function(e){if(h.paused||!u)return;let t=e.relatedTarget;null===t||u.contains(t)||L(f.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){let t=document.activeElement;if(t===document.body)for(let t of e)t.removedNodes.length>0&&L(u)});return u&&n.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,u,h.paused]),d.useEffect(()=>{if(u){A.add(h);let e=document.activeElement,t=u.contains(e);if(!t){let t=new CustomEvent(O,P);u.addEventListener(O,l),u.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(L(r,{select:t}),document.activeElement!==n)return}(j(u).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&L(u))}return()=>{u.removeEventListener(O,l),setTimeout(()=>{let t=new CustomEvent(D,P);u.addEventListener(D,s),u.dispatchEvent(t),t.defaultPrevented||L(e??document.body,{select:!0}),u.removeEventListener(D,s),A.remove(h)},0)}}},[u,l,s,h]);let g=d.useCallback(e=>{if(!n&&!r||h.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=j(e),n=T(t,e),r=T(t.reverse(),e);return[n,r]}(t),i=r&&a;i?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&L(a,{select:!0})):(e.preventDefault(),n&&L(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,h.paused]);return(0,m.jsx)(w.WV.div,{tabIndex:-1,...i,ref:p,onKeyDown:g})});function j(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function T(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function L(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}M.displayName="FocusScope";var A=(r=[],{add(e){let t=r[0];e!==t&&t?.pause(),(r=k(r,e)).unshift(e)},remove(e){r=k(r,e),r[0]?.resume()}});function k(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var I=n(8431),W=d.forwardRef((e,t)=>{let{container:n,...r}=e,[o,a]=d.useState(!1);h(()=>a(!0),[]);let i=n||o&&globalThis?.document?.body;return i?I.createPortal((0,m.jsx)(w.WV.div,{...r,ref:t}),i):null});W.displayName="Portal";var F=e=>{let t,n;let{present:r,children:o}=e,a=function(e){var t;let[n,r]=d.useState(),o=d.useRef({}),a=d.useRef(e),i=d.useRef("none"),u=e?"mounted":"unmounted",[c,l]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},d.useReducer((e,n)=>{let r=t[e][n];return r??e},u));return d.useEffect(()=>{let e=_(o.current);i.current="mounted"===c?e:"none"},[c]),h(()=>{let t=o.current,n=a.current,r=n!==e;if(r){let r=i.current,o=_(t);e?l("MOUNT"):"none"===o||t?.display==="none"?l("UNMOUNT"):n&&r!==o?l("ANIMATION_OUT"):l("UNMOUNT"),a.current=e}},[e,l]),h(()=>{if(n){let e;let t=n.ownerDocument.defaultView??window,r=r=>{let i=_(o.current),u=i.includes(r.animationName);if(r.target===n&&u&&(l("ANIMATION_END"),!a.current)){let r=n.style.animationFillMode;n.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=r)})}},u=e=>{e.target===n&&(i.current=_(o.current))};return n.addEventListener("animationstart",u),n.addEventListener("animationcancel",r),n.addEventListener("animationend",r),()=>{t.clearTimeout(e),n.removeEventListener("animationstart",u),n.removeEventListener("animationcancel",r),n.removeEventListener("animationend",r)}}l("ANIMATION_END")},[n,l]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:d.useCallback(e=>{e&&(o.current=getComputedStyle(e)),r(e)},[])}}(r),i="function"==typeof o?o({present:a.isPresent}):d.Children.only(o),u=(0,v.e)(a.ref,(n=(t=Object.getOwnPropertyDescriptor(i.props,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?i.ref:(n=(t=Object.getOwnPropertyDescriptor(i,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?i.props.ref:i.props.ref||i.ref),c="function"==typeof o;return c||a.isPresent?d.cloneElement(i,{ref:u}):null};function _(e){return e?.animationName||"none"}F.displayName="Presence";var V=0;function B(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var U=function(){return(U=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function $(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var K="right-scroll-bar-position",Y="width-before-scroll-bar";function z(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var H="undefined"!=typeof window?d.useLayoutEffect:d.useEffect,X=new WeakMap,Z=(void 0===o&&(o={}),void 0===a&&(a=function(e){return e}),i=[],u=!1,(c={read:function(){if(u)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var t=a(e,u);return i.push(t),function(){i=i.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(u=!0;i.length;){var t=i;i=[],t.forEach(e)}i={push:function(t){return e(t)},filter:function(){return i}}},assignMedium:function(e){u=!0;var t=[];if(i.length){var n=i;i=[],n.forEach(e),t=i}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),i={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),i}}}}).options=U({async:!0,ssr:!1},o),c),q=function(){},G=d.forwardRef(function(e,t){var n,r,o,a,i=d.useRef(null),u=d.useState({onScrollCapture:q,onWheelCapture:q,onTouchMoveCapture:q}),c=u[0],l=u[1],s=e.forwardProps,f=e.children,p=e.className,v=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,E=e.inert,b=e.allowPinchZoom,w=e.as,C=void 0===w?"div":w,N=e.gapMode,x=$(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),R=(n=[i,t],r=function(e){return n.forEach(function(t){return z(t,e)})},(o=(0,d.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,H(function(){var e=X.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||z(e,null)}),r.forEach(function(e){t.has(e)||z(e,o)})}X.set(a,n)},[n]),a),S=U(U({},x),c);return d.createElement(d.Fragment,null,m&&d.createElement(g,{sideCar:Z,removeScrollBar:v,shards:h,noIsolation:y,inert:E,setCallbacks:l,allowPinchZoom:!!b,lockRef:i,gapMode:N}),s?d.cloneElement(d.Children.only(f),U(U({},S),{ref:R})):d.createElement(C,U({},S,{className:p,ref:R}),f))});G.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},G.classNames={fullWidth:Y,zeroRight:K};var J=function(e){var t=e.sideCar,n=$(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return d.createElement(r,U({},n))};J.isSideCarExport=!0;var Q=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=s||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,a;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},ee=function(){var e=Q();return function(t,n){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},et=function(){var e=ee();return function(t){return e(t.styles,t.dynamic),null}},en={left:0,top:0,right:0,gap:0},er=function(e){return parseInt(e||"",10)||0},eo=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[er(n),er(r),er(o)]},ea=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return en;var t=eo(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},ei=et(),eu="data-scroll-locked",ec=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(eu,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(K," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(Y," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(K," .").concat(K," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(Y," .").concat(Y," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(eu,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},el=function(){var e=parseInt(document.body.getAttribute(eu)||"0",10);return isFinite(e)?e:0},es=function(){d.useEffect(function(){return document.body.setAttribute(eu,(el()+1).toString()),function(){var e=el()-1;e<=0?document.body.removeAttribute(eu):document.body.setAttribute(eu,e.toString())}},[])},ed=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;es();var a=d.useMemo(function(){return ea(o)},[o]);return d.createElement(ei,{styles:ec(a,!t,o,n?"":"!important")})},ef=!1;if("undefined"!=typeof window)try{var ep=Object.defineProperty({},"passive",{get:function(){return ef=!0,!0}});window.addEventListener("test",ep,ep),window.removeEventListener("test",ep,ep)}catch(e){ef=!1}var ev=!!ef&&{passive:!1},em=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},eh=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),eg(e,r)){var o=ey(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},eg=function(e,t){return"v"===e?em(t,"overflowY"):em(t,"overflowX")},ey=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},eE=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,c=n.target,l=t.contains(c),s=!1,d=u>0,f=0,p=0;do{var v=ey(e,c),m=v[0],h=v[1]-v[2]-i*m;(m||h)&&eg(e,c)&&(f+=h,p+=m),c=c instanceof ShadowRoot?c.host:c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(p)||!o&&-u>p)&&(s=!0),s},eb=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ew=function(e){return[e.deltaX,e.deltaY]},eC=function(e){return e&&"current"in e?e.current:e},eN=0,ex=[],eR=(Z.useMedium(function(e){var t=d.useRef([]),n=d.useRef([0,0]),r=d.useRef(),o=d.useState(eN++)[0],a=d.useState(et)[0],i=d.useRef(e);d.useEffect(function(){i.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eC),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=d.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!i.current.allowPinchZoom;var o,a=eb(e),u=n.current,c="deltaX"in e?e.deltaX:u[0]-a[0],l="deltaY"in e?e.deltaY:u[1]-a[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=eh(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=eh(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var p=r.current||o;return eE(p,t,e,"h"===p?c:l,!0)},[]),c=d.useCallback(function(e){if(ex.length&&ex[ex.length-1]===a){var n="deltaY"in e?ew(e):eb(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(eC).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=d.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),s=d.useCallback(function(e){n.current=eb(e),r.current=void 0},[]),f=d.useCallback(function(t){l(t.type,ew(t),t.target,u(t,e.lockRef.current))},[]),p=d.useCallback(function(t){l(t.type,eb(t),t.target,u(t,e.lockRef.current))},[]);d.useEffect(function(){return ex.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",c,ev),document.addEventListener("touchmove",c,ev),document.addEventListener("touchstart",s,ev),function(){ex=ex.filter(function(e){return e!==a}),document.removeEventListener("wheel",c,ev),document.removeEventListener("touchmove",c,ev),document.removeEventListener("touchstart",s,ev)}},[]);var v=e.removeScrollBar,m=e.inert;return d.createElement(d.Fragment,null,m?d.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?d.createElement(ed,{gapMode:e.gapMode}):null)}),J),eS=d.forwardRef(function(e,t){return d.createElement(G,U({},e,{ref:t,sideCar:eR}))});eS.classNames=G.classNames;var eO=new WeakMap,eD=new WeakMap,eP={},eM=0,ej=function(e){return e&&(e.host||ej(e.parentNode))},eT=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=ej(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eP[n]||(eP[n]=new WeakMap);var a=eP[n],i=[],u=new Set,c=new Set(o),l=function(e){!e||u.has(e)||(u.add(e),l(e.parentNode))};o.forEach(l);var s=function(e){!e||c.has(e)||Array.prototype.forEach.call(e.children,function(e){if(u.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,c=(eO.get(e)||0)+1,l=(a.get(e)||0)+1;eO.set(e,c),a.set(e,l),i.push(e),1===c&&o&&eD.set(e,!0),1===l&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),u.clear(),eM++,function(){i.forEach(function(e){var t=eO.get(e)-1,o=a.get(e)-1;eO.set(e,t),a.set(e,o),t||(eD.has(e)||e.removeAttribute(r),eD.delete(e)),o||e.removeAttribute(n)}),--eM||(eO=new WeakMap,eO=new WeakMap,eD=new WeakMap,eP={})}},eL=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),eT(r,o,n,"aria-hidden")):function(){return null}},eA=n(1095),ek="Dialog",[eI,eW]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>d.createContext(e));return function(n){let r=n?.[e]||t;return d.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=d.createContext(r),a=n.length;n=[...n,r];let i=t=>{let{scope:n,children:r,...i}=t,u=n?.[e]?.[a]||o,c=d.useMemo(()=>i,Object.values(i));return(0,m.jsx)(u.Provider,{value:c,children:r})};return i.displayName=t+"Provider",[i,function(n,i){let u=i?.[e]?.[a]||o,c=d.useContext(u);if(c)return c;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e),a=o[`__scope${r}`];return{...t,...a}},{});return d.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(ek),[eF,e_]=eI(ek),eV=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:i=!0}=e,u=d.useRef(null),c=d.useRef(null),[l=!1,s]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=d.useState(e),[r]=n,o=d.useRef(r),a=b(t);return d.useEffect(()=>{o.current!==r&&(a(r),o.current=r)},[r,o,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,i=a?e:r,u=b(n),c=d.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&u(n)}else o(t)},[a,e,o,u]);return[i,c]}({prop:r,defaultProp:o,onChange:a});return(0,m.jsx)(eF,{scope:t,triggerRef:u,contentRef:c,contentId:E(),titleId:E(),descriptionId:E(),open:l,onOpenChange:s,onOpenToggle:d.useCallback(()=>s(e=>!e),[s]),modal:i,children:n})};eV.displayName=ek;var eB="DialogTrigger",eU=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=e_(eB,n),a=(0,v.e)(t,o.triggerRef);return(0,m.jsx)(w.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":e7(o.open),...r,ref:a,onClick:p(e.onClick,o.onOpenToggle)})});eU.displayName=eB;var e$="DialogPortal",[eK,eY]=eI(e$,{forceMount:void 0}),ez=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=e_(e$,t);return(0,m.jsx)(eK,{scope:t,forceMount:n,children:d.Children.map(r,e=>(0,m.jsx)(F,{present:n||a.open,children:(0,m.jsx)(W,{asChild:!0,container:o,children:e})}))})};ez.displayName=e$;var eH="DialogOverlay",eX=d.forwardRef((e,t)=>{let n=eY(eH,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=e_(eH,e.__scopeDialog);return a.modal?(0,m.jsx)(F,{present:r||a.open,children:(0,m.jsx)(eZ,{...o,ref:t})}):null});eX.displayName=eH;var eZ=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=e_(eH,n);return(0,m.jsx)(eS,{as:eA.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,m.jsx)(w.WV.div,{"data-state":e7(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eq="DialogContent",eG=d.forwardRef((e,t)=>{let n=eY(eq,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=e_(eq,e.__scopeDialog);return(0,m.jsx)(F,{present:r||a.open,children:a.modal?(0,m.jsx)(eJ,{...o,ref:t}):(0,m.jsx)(eQ,{...o,ref:t})})});eG.displayName=eq;var eJ=d.forwardRef((e,t)=>{let n=e_(eq,e.__scopeDialog),r=d.useRef(null),o=(0,v.e)(t,n.contentRef,r);return d.useEffect(()=>{let e=r.current;if(e)return eL(e)},[]),(0,m.jsx)(e0,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:p(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:p(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;r&&e.preventDefault()}),onFocusOutside:p(e.onFocusOutside,e=>e.preventDefault())})}),eQ=d.forwardRef((e,t)=>{let n=e_(eq,e.__scopeDialog),r=d.useRef(!1),o=d.useRef(!1);return(0,m.jsx)(e0,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let a=t.target,i=n.triggerRef.current?.contains(a);i&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),e0=d.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...i}=e,u=e_(eq,n),c=d.useRef(null),l=(0,v.e)(t,c);return d.useEffect(()=>{let e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??B()),document.body.insertAdjacentElement("beforeend",e[1]??B()),V++,()=>{1===V&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),V--}},[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(M,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:(0,m.jsx)(x,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":e7(u.open),...i,ref:l,onDismiss:()=>u.onOpenChange(!1)})}),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(tt,{titleId:u.titleId}),(0,m.jsx)(tn,{contentRef:c,descriptionId:u.descriptionId})]})]})}),e1="DialogTitle",e6=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=e_(e1,n);return(0,m.jsx)(w.WV.h2,{id:o.titleId,...r,ref:t})});e6.displayName=e1;var e9="DialogDescription",e8=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=e_(e9,n);return(0,m.jsx)(w.WV.p,{id:o.descriptionId,...r,ref:t})});e8.displayName=e9;var e2="DialogClose",e4=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=e_(e2,n);return(0,m.jsx)(w.WV.button,{type:"button",...r,ref:t,onClick:p(e.onClick,()=>o.onOpenChange(!1))})});function e7(e){return e?"open":"closed"}e4.displayName=e2;var e5="DialogTitleWarning",[e3,te]=function(e,t){let n=d.createContext(t),r=e=>{let{children:t,...r}=e,o=d.useMemo(()=>r,Object.values(r));return(0,m.jsx)(n.Provider,{value:o,children:t})};return r.displayName=e+"Provider",[r,function(r){let o=d.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}(e5,{contentName:eq,titleName:e1,docsSlug:"dialog"}),tt=({titleId:e})=>{let t=te(e5),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return d.useEffect(()=>{if(e){let t=document.getElementById(e);t||console.error(n)}},[n,e]),null},tn=({contentRef:e,descriptionId:t})=>{let n=te("DialogDescriptionWarning"),r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;return d.useEffect(()=>{let n=e.current?.getAttribute("aria-describedby");if(t&&n){let e=document.getElementById(t);e||console.warn(r)}},[r,e,t]),null},tr=eV,to=eU,ta=ez,ti=eX,tu=eG,tc=e6,tl=e8,ts=e4},6416:function(e,t,n){n.d(t,{f:function(){return u}});var r=n(6006),o=n(6899),a=n(9268),i=r.forwardRef((e,t)=>(0,a.jsx)(o.WV.label,{...e,ref:t,onMouseDown:t=>{let n=t.target;n.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var u=i},6899:function(e,t,n){n.d(t,{WV:function(){return u},jH:function(){return c}});var r=n(6006),o=n(8431),a=n(1095),i=n(9268),u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,u=r?a.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(u,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function c(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},1095:function(e,t,n){n.d(t,{g7:function(){return i}});var r=n(6006),o=n(1084),a=n(9268),i=r.forwardRef((e,t)=>{let{children:n,...o}=e,i=r.Children.toArray(n),c=i.find(l);if(c){let e=c.props.children,n=i.map(t=>t!==c?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,a.jsx)(u,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,a.jsx)(u,{...o,ref:t,children:n})});i.displayName="Slot";var u=r.forwardRef((e,t)=>{let{children:n,...a}=e;if(r.isValidElement(n)){let e,i;let u=(i=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?n.ref:(i=(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],a=t[r],i=/^on[A-Z]/.test(r);i?o&&a?n[r]=(...e)=>{a(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...a}:"className"===r&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}(a,n.props),ref:t?(0,o.F)(t,u):u})}return r.Children.count(n)>1?r.Children.only(null):null});u.displayName="SlotClone";var c=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function l(e){return r.isValidElement(e)&&e.type===c}},8917:function(e,t,n){n.d(t,{j:function(){return i}});var r=n(9791);let o=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,a=r.Z,i=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return a(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:i,defaultVariants:u}=t,c=Object.keys(i).map(e=>{let t=null==n?void 0:n[e],r=null==u?void 0:u[e];if(null===t)return null;let a=o(t)||o(r);return i[e][a]}),l=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),s=null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...u,...l}[t]):({...u,...l})[t]===n})?[...e,n,r]:e},[]);return a(e,c,s,null==n?void 0:n.class,null==n?void 0:n.className)}}}]);